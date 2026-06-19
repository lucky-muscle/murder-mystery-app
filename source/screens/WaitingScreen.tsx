import type { ReactNode } from "react";
import type { Room } from "../gameTypes";
import { turnOrder } from "../gameConstants";

type WaitingScreenProps = {
  renderTitle: () => ReactNode;
  room: Room;
  isGm: boolean;
  onStart: () => void;
  onLeave?: () => void;
};

function WaitingScreen({ renderTitle, room, isGm, onStart }: WaitingScreenProps) {
  const players = room.players || {};
  const joinedPlayerCount = Object.values(players).filter(Boolean).length;

  return (
    <main className="app dark-game-app waiting-page">
      {renderTitle()}

      <section className="card dark-panel waiting-card">
        <div className="section-kicker">WAITING ROOM</div>
        <h2>参加者待機</h2>
        <p className="muted-text">
          参加者がそろうまで待機してください。現在の参加者は {joinedPlayerCount} / {turnOrder.length} 人です。
        </p>

        <div className="waiting-player-list">
          <div className="waiting-player-row waiting-gm-row">
            <span className="info-label">GM</span>
            <strong>{room.gmName || "未設定"}</strong>
          </div>

          {turnOrder.map((slot) => (
            <div className="waiting-player-row" key={slot}>
              <span className="info-label">参加者</span>
              <strong>{players[slot] || "未参加"}</strong>
            </div>
          ))}
        </div>

        {isGm && (
          <button className="primary-action-button" onClick={onStart}>
            キャラクター振り分けへ進む
          </button>
        )}
      </section>
    </main>
  );
}

export default WaitingScreen;
