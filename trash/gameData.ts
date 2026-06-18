export type CharacterId = "p1" | "p2" | "p3" | "p4" | "p5";
export type PhaseId =
  | "waiting" | "intro" | "characterOpen" | "questions" | "investigation1" | "debate1"
  | "investigation2" | "debate2" | "reasoning" | "vote" | "mission" | "ending" | "after";

export const characters = [
  { id: "p1", name: "川井 赤", publicInfo: "P1。冷静に場を見ている人物。", secret: "あなたの秘匿情報。事件前, 被害者と短く接触していた。", mission: "自分の疑いをそらす。" },
  { id: "p2", name: "宮崎 青", publicInfo: "P2。配信技術に詳しい人物。", secret: "あなたの秘匿情報。事件当日, 機材室に入った。", mission: "機材室に入った理由を隠す。" },
  { id: "p3", name: "緑野 緑", publicInfo: "P3。情報収集が得意な人物。", secret: "あなたの秘匿情報。非売品グッズの出所を知っている。", mission: "非売品グッズの秘密を守る。" },
  { id: "p4", name: "黒坂 黒", publicInfo: "P4。関係者エリアに詳しい人物。", secret: "あなたの秘匿情報。スタッフパスを一時的に失くしていた。", mission: "スタッフパス紛失を追及されない。" },
  { id: "p5", name: "谷 英", publicInfo: "P5。元芸能志望。承認欲求を捨てきれない人物。", secret: "あなたの秘匿情報。VTuber立津テトに強い執着がある。", mission: "自分の目的を悟られない。" },
] as const;

export const phases: { id: PhaseId; title: string; minutes: number; description: string }[] = [
  { id: "waiting", title: "入室待機", minutes: 0, description: "5人そろうまで待機する。" },
  { id: "intro", title: "作品概要・ルール説明", minutes: 10, description: "GMが概要とルールを説明する。" },
  { id: "characterOpen", title: "自己紹介・キャラシート確認", minutes: 5, description: "表向きの情報を紹介し, 秘匿を確認する。" },
  { id: "questions", title: "GM質問タイム", minutes: 5, description: "各プレイヤー1分ずつGMに質問する。" },
  { id: "investigation1", title: "調査前半", minutes: 20, description: "調査カードを選び, 証拠品を取得する。" },
  { id: "debate1", title: "議論前半", minutes: 20, description: "取得した情報をもとに議論する。" },
  { id: "investigation2", title: "調査後半", minutes: 20, description: "追加情報を配布し, 再調査する。" },
  { id: "debate2", title: "議論後半", minutes: 20, description: "最終推理に向けて議論する。" },
  { id: "reasoning", title: "推理時間", minutes: 5, description: "各自で推理をまとめる。" },
  { id: "vote", title: "投票", minutes: 5, description: "犯人だと思う人物へ投票する。" },
  { id: "mission", title: "ミッション解答", minutes: 5, description: "個別ミッションの達成可否を答える。" },
  { id: "ending", title: "エンディング", minutes: 10, description: "投票最多者のエンドを表示する。" },
  { id: "after", title: "後日談・解説", minutes: 0, description: "後日談と真相解説を読む。" },
];

export const evidences = [
  { id: "body", title: "被害者の様子", body: "被害者は控室で倒れていた。争った形跡は薄い。", limit: 1 },
  { id: "recorder", title: "山手の証言", body: "事件直前, ボイスレコーダーのような機器を見た。", limit: 1 },
  { id: "goods", title: "プレイヤーの持ち物", body: "世界に10個とない非売品グッズが含まれていた。", limit: 3 },
  { id: "pass", title: "スタッフ用パス", body: "関係者エリアへ入るためのパス。使用履歴に不審な点がある。", limit: 2 },
  { id: "tet", title: "立津テトの秘密", body: "声の記録媒体があれば, 誰でもテトを演じられる可能性がある。", limit: 1 },
];

export const endings: Record<string, string> = {
  p1: "川井 赤が最多票。真相はまだ闇に残る。",
  p2: "宮崎 青が最多票。機材室の謎が焦点となる。",
  p3: "緑野 緑が最多票。非売品グッズの出所が疑われる。",
  p4: "黒坂 黒が最多票。スタッフパスの謎が暴かれる。",
  p5: "谷 英が最多票。立津テトへの執着が事件の核心に近づく。",
};
