import type { ReactNode } from "react";

type NameScreenProps = {
  renderTitle: () => ReactNode;
  title: string;
  playerName: string;
  setPlayerName: (value: string) => void;
  onDecide: () => void;
  onBack: () => void;
  decideLabel: string;
  subText?: string;
};

function NameScreen({
  renderTitle,
  title,
  playerName,
  setPlayerName,
  onDecide,
  onBack,
  decideLabel,
  subText,
}: NameScreenProps) {
  return (
    <main className="app dark-game-app name-page">
      {renderTitle()}

      <section className="card dark-panel name-card">
        <div className="section-kicker">PLAYER NAME</div>
        <h2>{title}</h2>
        {subText && <p className="muted-text">{subText}</p>}

        <label className="input-label" htmlFor="player-name-input">
          名前
        </label>
        <input
          id="player-name-input"
          value={playerName}
          onChange={(event) => setPlayerName(event.target.value)}
          placeholder="名前を入力"
          autoComplete="off"
        />

        <div className="form-actions">
          <button className="primary-action-button" onClick={onDecide}>
            {decideLabel}
          </button>
          <button onClick={onBack}>戻る</button>
        </div>
      </section>
    </main>
  );
}

export default NameScreen;
