import { useMemo, useState } from "react";
import type { Room } from "../gameTypes";
import { turnOrder } from "../gameConstants";

type VotingScreenProps = {
  room: Room;
  isGm: boolean;
  myCharacter: string;
  playerName: string;
  onSubmitVote: (targetSlot: string) => void;
  onGoEnding: () => void;
};

const endingDefinitions = [
  { title: "エンディング①", targetRoleName: "川岸道也" },
  { title: "エンディング②", targetRoleName: "梅村萌絵" },
  { title: "エンディング③", targetRoleName: "緑野大地" },
  { title: "エンディング④", targetRoleName: "黒坂秀樹" },
  { title: "エンディング⑤", targetRoleName: "水谷アリス" },
];

function getDisplayName(room: Room, slot: string) {
  const participantName = room.players?.[slot] || "未入室";
  const roleName = room.characterAssignments?.[slot] || "未設定";
  return `${participantName}：${roleName}`;
}

function getTopVotedSlot(room: Room, joinedSlots: string[]) {
  const voteValues = Object.values(room.votes || {});
  if (!voteValues.length) return null;

  const counts = joinedSlots.reduce<Record<string, number>>((acc, slot) => {
    acc[slot] = voteValues.filter((targetSlot) => targetSlot === slot).length;
    return acc;
  }, {});

  const maxCount = Math.max(...Object.values(counts));
  if (maxCount <= 0) return null;

  return joinedSlots.find((slot) => counts[slot] === maxCount) || null;
}

function getEndingTitleForRole(roleName?: string) {
  return endingDefinitions.find((definition) => definition.targetRoleName === roleName)?.title || "未確定";
}

function VotingScreen({
  room,
  isGm,
  myCharacter,
  playerName,
  onSubmitVote,
  onGoEnding,
}: VotingScreenProps) {
  const [selectedTarget, setSelectedTarget] = useState("");
  const [confirmTarget, setConfirmTarget] = useState<string | null>(null);

  const joinedSlots = useMemo(
    () => turnOrder.filter((slot) => Boolean(room.players?.[slot])),
    [room.players]
  );

  const votes = room.votes || {};
  const hasVoted = Boolean(votes[myCharacter]);
  const topVotedSlot = getTopVotedSlot(room, joinedSlots);
  const topVotedRoleName = topVotedSlot ? room.characterAssignments?.[topVotedSlot] : undefined;
  const selectedEndingTitle = getEndingTitleForRole(topVotedRoleName);

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
          <h3>配布されるエンディング</h3>
          {topVotedSlot ? (
            <p>
              最多投票：{getDisplayName(room, topVotedSlot)} → {selectedEndingTitle}
            </p>
          ) : (
            <p>まだ投票がありません。</p>
          )}
        </div>

        <div className="investigation-actions-row gm-investigation-actions">
          <button className="primary-action-button" onClick={onGoEnding} disabled={!topVotedSlot}>
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
