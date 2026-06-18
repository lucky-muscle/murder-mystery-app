import type { ReactNode } from "react";

type HomeScreenProps = {
  renderTitle: () => ReactNode;
  roomIdInput: string;
  setRoomIdInput: (value: string) => void;
  goCreateName: () => void;
  goJoinName: () => void;
};

function HomeScreen({
  renderTitle,
  roomIdInput,
  setRoomIdInput,
  goCreateName,
  goJoinName,
}: HomeScreenProps) {
  return (
    <main className="app dark-game-app home-page">
      {renderTitle()}

      <section className="card dark-panel home-card">
        <div className="section-kicker">ROOM MENU</div>
        <h2>ルーム</h2>

        <div className="home-actions">
          <button className="primary-action-button" onClick={goCreateName}>
            ルーム作成
          </button>
        </div>

        <div className="join-room-box">
          <label className="input-label" htmlFor="room-id-input">
            ルーム番号
          </label>
          <input
            id="room-id-input"
            value={roomIdInput}
            onChange={(event) => setRoomIdInput(event.target.value)}
            placeholder="ルーム番号を入力"
            autoComplete="off"
          />
          <button onClick={goJoinName}>ルームに参加</button>
        </div>
      </section>
    </main>
  );
}

export default HomeScreen;
