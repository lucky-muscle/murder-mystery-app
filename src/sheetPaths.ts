const base = import.meta.env.BASE_URL;

const buildRootPages = (prefix: string, count: number) =>
  Array.from(
    { length: count },
    (_, index) => `${base}sheets/${prefix}-${index + 1}.png`
  );

const buildPagesInFolder = (folder: string, prefix: string, count: number) =>
  Array.from(
    { length: count },
    (_, index) => `${base}sheets/${folder}/${prefix}-${index + 1}.png`
  );

const buildSingleInFolder = (folder: string, filename: string) =>
  `${base}sheets/${folder}/${filename}.png`;

export const sheetPaths = {
  // 複数ページPNG。ページ数を変える場合は、ここの数字を変更してください。
  rulePages: buildRootPages("rule-sheet", 7),
  overviewPages: buildRootPages("overview-sheet", 2),

  // 既存コード互換用。基本的には各 Pages 配列の1ページ目を使います。
  rule: `${base}sheets/rule-sheet-1.png`,
  overview: `${base}sheets/overview-sheet-1.png`,

  floorMapPages: buildPagesInFolder("maps", "floor-map", 2),

  characterPages: {
    川岸道也: buildPagesInFolder("characters", "kawagishi-michiya", 4),
    梅村萌絵: buildPagesInFolder("characters", "umemura-moe", 4),
    緑野大地: buildPagesInFolder("characters", "midorino-daichi", 4),
    黒坂秀樹: buildPagesInFolder("characters", "kurosaka-hideki", 4),
    水谷アリス: buildPagesInFolder("characters", "tani-alice", 4),
  } as Record<string, string[]>,

  characters: {
    川岸道也: `${base}sheets/characters/kawagishi-michiya-1.png`,
    梅村萌絵: `${base}sheets/characters/umemura-moe-1.png`,
    緑野大地: `${base}sheets/characters/midorino-daichi-1.png`,
    黒坂秀樹: `${base}sheets/characters/kurosaka-hideki-1.png`,
    水谷アリス: `${base}sheets/characters/tani-alice-1.png`,
  } as Record<string, string>,

  additionalPages: {
    川岸道也: [buildSingleInFolder("additional", "kawagishi-michiya")],
    梅村萌絵: [buildSingleInFolder("additional", "umemura-moe")],
    緑野大地: [buildSingleInFolder("additional", "midorino-daichi")],
    黒坂秀樹: [buildSingleInFolder("additional", "kurosaka-hideki")],
    水谷アリス: [buildSingleInFolder("additional", "tani-alice")],
  } as Record<string, string[]>,

  additional: {
    川岸道也: buildSingleInFolder("additional", "kawagishi-michiya"),
    梅村萌絵: buildSingleInFolder("additional", "umemura-moe"),
    緑野大地: buildSingleInFolder("additional", "midorino-daichi"),
    黒坂秀樹: buildSingleInFolder("additional", "kurosaka-hideki"),
    水谷アリス: buildSingleInFolder("additional", "tani-alice"),
  } as Record<string, string>,

  // エンディングシート複数ページPNG。
  // 実際のファイル名は public/sheets/endings/ending-1-1.png のようにしてください。
  endingPages: {
    ending1: buildPagesInFolder("endings", "ending-1", 4),
    ending2: buildPagesInFolder("endings", "ending-2", 4),
    ending3: buildPagesInFolder("endings", "ending-3", 4),
    ending4: buildPagesInFolder("endings", "ending-4", 4),
    ending5: buildPagesInFolder("endings", "ending-5", 3),
  },

  // 既存コード互換用。1ページ目だけを指します。
  endings: {
    ending1: `${base}sheets/endings/ending-1-1.png`,
    ending2: `${base}sheets/endings/ending-2-1.png`,
    ending3: `${base}sheets/endings/ending-3-1.png`,
    ending4: `${base}sheets/endings/ending-4-1.png`,
    ending5: `${base}sheets/endings/ending-5-1.png`,
  },

  investigation: (cellId: string) => `${base}sheets/investigation/${cellId}.png`,

  specialInvestigation: (sheetId: string) =>
    `${base}sheets/special-investigation/${sheetId}.png`,
};
