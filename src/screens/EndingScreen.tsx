import type { Room } from "../gameTypes";

type EndingScreenProps = {
  room: Room;
  isGm: boolean;
  myCharacter: string;
  playerName: string;
  onLeave?: () => void;
};

const endingTitles: Record<string, string> = {
  "ending-1": "エンディング①",
  "ending-2": "エンディング②",
  "ending-3": "エンディング③",
  "ending-4": "エンディング④",
  "ending-5": "エンディング⑤",
};

function EndingScreen({ room, isGm, playerName }: EndingScreenProps) {
  const endingSheetTitle = room.endingSheetId ? endingTitles[room.endingSheetId] || room.endingSheetId : "未確定";

  return (
    <section className="card dark-panel ending-card">
      <div className="section-kicker">ENDING</div>
      <h2>エンディング</h2>
      <p className="muted-text">
        {isGm ? "GMとして進行中" : `あなたの名前：${playerName}`}
      </p>

      <div className="ending-sheet-notice">
        <strong>{endingSheetTitle} を配布しました</strong>
        <p>左側の捜査資料から、エンディングシートと調査シートを確認できます。</p>
      </div>
    </section>
  );
}

export default EndingScreen;
