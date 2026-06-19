import { useEffect, useMemo, useState } from "react";
import type { Room } from "../gameTypes";
import { characterNames, turnOrder } from "../gameConstants";

type VotingScreenProps = {
  room: Room;
  isGm: boolean;
  myCharacter: string;
  playerName: string;
  onGoVote: () => void;
  onSubmitVote: (targetSlot: string) => void;
  onGoEnding: (roleName?: string) => void;
  onGoReasoning: () => void;
};

function getDisplayName(room: Room, slot: string) {
  const participantName = room.players?.[slot] || "未入室";
  const roleName = room.characterAssignments?.[slot] || "未設定";
  return `${participantName}：${roleName}`;
}


function VotingScreen({
  room,
  isGm,
  myCharacter,
  playerName,
  onGoVote,
  onSubmitVote,
  onGoEnding,
  onGoReasoning,
}: VotingScreenProps) {
  const [selectedTarget, setSelectedTarget] = useState("");
  const [confirmTarget, setConfirmTarget] = useState<string | null>(null);
  const [selectedEndingRoleName, setSelectedEndingRoleName] = useState("");
  const [showInvestigationEndSplash, setShowInvestigationEndSplash] = useState(room.phase === "reasoning");

  const joinedSlots = useMemo(
    () => turnOrder.filter((slot) => Boolean(room.players?.[slot])),
    [room.players]
  );

  const votes = room.votes || {};
  const hasVoted = Boolean(votes[myCharacter]);


  useEffect(() => {
    if (room.phase !== "reasoning") return;
    setShowInvestigationEndSplash(true);
    const timerId = window.setTimeout(() => setShowInvestigationEndSplash(false), 2600);
    return () => window.clearTimeout(timerId);
  }, [room.phase]);

  const handleVoteClick = () => {
    if (!selectedTarget) {
      alert("投票する相手を選択してください");
      return;
    }
    setConfirmTarget(selectedTarget);
  };

  const confirmVote = () => {
    if (!confirmTarget) return;
    onSubmitVote(confirmTarget);
    setConfirmTarget(null);
  };


  if (room.phase === "debate") {
    return (
      <section className="card dark-panel reasoning-card debate-card">
        <div className="section-kicker">DEBATE</div>
        <h2>議論(密談不可)</h2>
        <p className="muted-text">
          {isGm ? "GMとして進行中" : `あなたの名前：${playerName}`}
        </p>
        <p>全体議論の時間です。この時間は密談できません。</p>
        {isGm && (
          <div className="investigation-actions-row gm-investigation-actions">
            <button className="primary-action-button" onClick={onGoReasoning}>推理へ</button>
          </div>
        )}
      </section>
    );
  }

  if (room.phase === "reasoning") {
    return (
      <section className="card dark-panel reasoning-card">
        <div className="section-kicker">REASONING</div>
        <h2>推理</h2>
        <p className="muted-text">
          {isGm ? "GMとして進行中" : `あなたの名前：${playerName}`}
        </p>
        <p>取得した情報を整理し、犯人だと思う人物を決めてください。</p>

        {isGm && (
          <div className="investigation-actions-row gm-investigation-actions">
            <button className="primary-action-button" onClick={onGoVote}>
              投票へ
            </button>
          </div>
        )}

        {showInvestigationEndSplash && (
          <div className="role-reveal-splash investigation-end-splash" aria-live="polite">
            <div className="role-reveal-card">
              <strong>調査終了</strong>
            </div>
          </div>
        )}
      </section>
    );
  }

  if (isGm) {
    return (
      <section className="card dark-panel vote-card">
        <div className="section-kicker">VOTE</div>
        <h2>投票時間</h2>
        <p className="muted-text">全員の投票状況を確認できます。</p>

        <div className="vote-status-list">
          {joinedSlots.map((slot) => {
            const targetSlot = votes[slot];
            return (
              <div className="vote-status-row" key={slot}>
                <strong>{getDisplayName(room, slot)}</strong>
                <span>{targetSlot ? `投票済み → ${getDisplayName(room, targetSlot)}` : "未投票"}</span>
              </div>
            );
          })}
        </div>

        <div className="manual-ending-box">
          <h3>配布するエンディングシートを選択</h3>
          <div className="ending-select-list">
            {characterNames.map((roleName) => (
              <button
                key={roleName}
                className={selectedEndingRoleName === roleName ? "selected" : ""}
                onClick={() => setSelectedEndingRoleName(roleName)}
              >
                {roleName}
              </button>
            ))}
          </div>
        </div>

        <div className="investigation-actions-row gm-investigation-actions">
          <button className="primary-action-button" onClick={() => onGoEnding(selectedEndingRoleName)} disabled={!selectedEndingRoleName}>
            エンディングシートを配布
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="card dark-panel vote-card">
      <div className="section-kicker">VOTE</div>
      <h2>投票時間</h2>
      <p className="muted-text">あなたの名前：{playerName}</p>
      <p className="vote-main-instruction">犯人だと思う人に投票してください</p>

      <div className="vote-target-list">
        {joinedSlots.map((slot) => (
          <button
            key={slot}
            className={selectedTarget === slot ? "selected" : ""}
            disabled={slot === myCharacter || hasVoted}
            onClick={() => setSelectedTarget(slot)}
          >
            {getDisplayName(room, slot)}
            {slot === myCharacter && <small>自分には投票できません</small>}
          </button>
        ))}
      </div>

      {hasVoted ? (
        <div className="vote-completed-box">
          <strong>投票済み</strong>
          <p>GMがエンディングシートを配布するまでお待ちください。</p>
        </div>
      ) : (
        <div className="investigation-actions-row">
          <button className="primary-action-button" onClick={handleVoteClick} disabled={!selectedTarget}>
            投票する
          </button>
        </div>
      )}

      {confirmTarget && (
        <div className="receive-window-backdrop" role="dialog" aria-modal="true">
          <div className="receive-window dark-modal">
            <span className="section-kicker">VOTE CONFIRM</span>
            <h2>投票確認</h2>
            <p>{getDisplayName(room, confirmTarget)} に投票します。</p>
            <p>もう一度「投票する」を押すと確定します。</p>
            <div className="compact-actions">
              <button className="primary-action-button" onClick={confirmVote}>投票する</button>
              <button onClick={() => setConfirmTarget(null)}>戻る</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default VotingScreen;
