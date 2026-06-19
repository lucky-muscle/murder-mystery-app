export type CharacterId = "p1" | "p2" | "p3" | "p4" | "p5";
export type PhaseId =
  | "waiting"
  | "intro"
  | "investigation1"
  | "break"
  | "investigation2"
  | "debate"
  | "reasoning"
  | "vote"
  | "ending";

export const characters = [
  { id: "p1", name: "川岸道也", publicInfo: "P1。冷静に場を見ている人物。", secret: "あなたの秘匿情報。事件前, 被害者・梅村萌絵と短く接触していた。", mission: "自分の疑いをそらす。" },
  { id: "p2", name: "宮崎圭", publicInfo: "P2。配信技術に詳しい人物。", secret: "あなたの秘匿情報。事件当日, 機材室に入った。", mission: "機材室に入った理由を隠す。" },
  { id: "p3", name: "緑野大地", publicInfo: "P3。情報収集が得意な人物。", secret: "あなたの秘匿情報。非売品グッズの出所を知っている。", mission: "非売品グッズの秘密を守る。" },
  { id: "p4", name: "黒坂秀樹", publicInfo: "P4。関係者エリアに詳しい人物。", secret: "あなたの秘匿情報。スタッフパスを一時的に失くしていた。", mission: "スタッフパス紛失を追及されない。" },
  { id: "p5", name: "谷アリス", publicInfo: "P5。元芸能志望。承認欲求を捨てきれない人物。", secret: "あなたの秘匿情報。配信者・立津テトに強い執着がある。", mission: "自分の目的を悟られない。" },
] as const;

export const phases: { id: PhaseId; title: string; minutes: number; description: string }[] = [
  { id: "waiting", title: "入室待機", minutes: 0, description: "" },
  { id: "intro", title: "作品概要ルール説明", minutes: 10, description: "" },
  { id: "investigation1", title: "調査前半", minutes: 20, description: "" },
  { id: "break", title: "休憩", minutes: 0, description: "" },
  { id: "investigation2", title: "調査後半", minutes: 20, description: "" },
  { id: "debate", title: "議論(密談不可)", minutes: 15, description: "" },
  { id: "reasoning", title: "推理", minutes: 5, description: "" },
  { id: "vote", title: "投票", minutes: 5, description: "" },
  { id: "ending", title: "エンディング・解説", minutes: 10, description: "" },
];

export const evidences = [
  { id: "body", title: "被害者の様子", body: "被害者・梅村萌絵は控室で倒れていた。争った形跡は薄い。", limit: 1 },
  { id: "recorder", title: "山手の証言", body: "事件直前, ボイスレコーダーのような機器を見た。", limit: 1 },
  { id: "goods", title: "プレイヤーの持ち物", body: "世界に10個とない非売品グッズが含まれていた。", limit: 3 },
  { id: "pass", title: "スタッフ用パス", body: "関係者エリアへ入るためのパス。使用履歴に不審な点がある。", limit: 2 },
  { id: "tet", title: "立津テトの秘密", body: "声の記録媒体があれば, 誰でも配信者・立津テトを演じられる可能性がある。", limit: 1 },
];

export const endings: Record<string, string> = {
  p1: "川岸道也が最多票。真相はまだ闇に残る。",
  p2: "宮崎圭が最多票。機材室の謎が焦点となる。",
  p3: "緑野大地が最多票。非売品グッズの出所が疑われる。",
  p4: "黒坂秀樹が最多票。スタッフパスの謎が暴かれる。",
  p5: "谷アリスが最多票。立津テトへの執着が事件の核心に近づく。",
};
