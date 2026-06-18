import type { Room } from "../gameTypes";

type EndingScreenProps = {
  room: Room;
  isGm: boolean;
  myCharacter: string;
  playerName: string;
  onLeave?: () => void;
};

function EndingScreen({ room, isGm, playerName }: EndingScreenProps) {
  const endingRoleName = room.endingSheetRoleName || "未確定";

  return (
    <section className="card dark-panel ending-card">
      <div className="section-kicker">ENDING</div>
      <h2>エンディング</h2>
      <p className="muted-text">
        {isGm ? "GMとして進行中" : `あなたの名前：${playerName}`}
      </p>

      <div className="ending-sheet-notice">
        <strong>{endingRoleName} のエンディングシートを配布しました</strong>
        <p>左側の捜査資料からエンディングシートを確認できます。</p>
      </div>
    </section>
  );
}

export default EndingScreen;
