import type { KeyboardEvent, ReactNode } from "react";

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
  const normalizedRoomId = roomIdInput.trim();

  const handleRoomIdChange = (value: string) => {
    setRoomIdInput(value.toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 8));
  };

  const handleRoomIdKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && normalizedRoomId) {
      goJoinName();
    }
  };

  return (
    <main className="app dark-game-app home-page">
      {renderTitle()}

      <section className="card dark-panel home-card">
        <div className="section-kicker">ROOM MENU</div>
        <h2>ルーム</h2>
        <p className="home-lead">
          GMはルームを作成してください。参加者は共有されたルーム番号を入力して入室します。
        </p>

        <div className="home-actions">
          <button
            type="button"
            className="primary-action-button home-create-button"
            onClick={goCreateName}
          >
            ルーム作成
          </button>
        </div>

        <div className="join-room-box" aria-label="ルーム参加フォーム">
          <label className="input-label" htmlFor="room-id-input">
            ルーム番号
          </label>
          <div className="join-room-input-row solo-input-row">
            <input
              id="room-id-input"
              value={roomIdInput}
              onChange={(event) => handleRoomIdChange(event.target.value)}
              onKeyDown={handleRoomIdKeyDown}
              placeholder="例：ABC123"
              autoComplete="off"
              spellCheck={false}
              inputMode="text"
              maxLength={8}
            />
          </div>
          <div className="home-actions join-home-actions">
            <button
              type="button"
              className="primary-action-button home-join-button large-centered-button"
              onClick={goJoinName}
              disabled={!normalizedRoomId}
            >
              ルームに参加
            </button>
          </div>
          <p className="home-help-text">半角英数字で入力してください。Enterキーでも参加できます。</p>
        </div>
      </section>
    </main>
  );
}

export default HomeScreen;
