import type { ReactNode } from "react";
import type { Room } from "../gameTypes";
import { characterNames, turnOrder } from "../gameConstants";

type CharacterSelectScreenProps = {
  renderTitle: () => ReactNode;
  room: Room;
  isGm: boolean;
  playerName: string;
  onAssign: (slot: string, characterName: string) => void;
  onComplete: () => void;
};

function CharacterSelectScreen({
  renderTitle,
  room,
  isGm,
  playerName,
  onAssign,
  onComplete,
}: CharacterSelectScreenProps) {
  const players = room.players || {};
  const assignments = room.characterAssignments || {};

  if (!isGm) {
    return (
      <main className="app dark-game-app character-select-page">
        {renderTitle()}

        <section className="card dark-panel character-select-player-card">
          <div className="section-kicker">CHARACTER ASSIGNMENT</div>
          <h2>キャラクター選択</h2>

          <div className="my-player-info single-info">
            <div>
              <span className="info-label">あなたの名前</span>
              <strong>{playerName}</strong>
            </div>
          </div>

          <div className="character-assign-waiting-box">
            <p className="character-assign-loading-text">
              GMがキャラクターを振り分けています・・・
              <span className="loading-spinner" aria-label="読み込み中" />
            </p>
            <p className="muted-text">この画面のまま待機してください。</p>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="app dark-game-app character-select-page">
      {renderTitle()}

      <section className="card dark-panel character-select-gm-card">
        <div className="section-kicker">GM CONTROL</div>
        <h2>キャラクター振り分け</h2>
        <p className="muted-text">参加者にキャラクターを割り当ててください。</p>

        <div className="character-assign-list">
          {turnOrder.map((slot) => {
            const player = players[slot];
            const assignedCharacter = assignments[slot] || "";

            return (
              <div className="character-assign-row" key={slot}>
                <div className="character-assign-player">
                  <span className="slot-badge">{slot}</span>
                  <div>
                    <span className="info-label">参加者名</span>
                    <strong>{player || "未参加"}</strong>
                  </div>
                </div>

                <select
                  value={assignedCharacter}
                  disabled={!player}
                  onChange={(event) => onAssign(slot, event.target.value)}
                >
                  <option value="">キャラクターを選択</option>
                  {characterNames.map((characterName) => (
                    <option key={characterName} value={characterName}>
                      {characterName}
                    </option>
                  ))}
                </select>
              </div>
            );
          })}
        </div>

        <button className="primary-action-button" onClick={onComplete}>
          振り分けを完了して開始
        </button>
      </section>
    </main>
  );
}

export default CharacterSelectScreen;
