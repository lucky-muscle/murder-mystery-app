const base = import.meta.env.BASE_URL;

export const sheetPaths = {
  overview: `${base}sheets/overview-sheet.png`,

  floorMapPages: [
    `${base}sheets/maps/floor-map-1.png`,
    `${base}sheets/maps/floor-map-2.png`,
  ],

  characters: {
    川岸道也: `${base}sheets/characters/kawagishi-michiya.png`,
    宮崎圭: `${base}sheets/characters/miyazaki-kei.png`,
    緑野大地: `${base}sheets/characters/midorino-daichi.png`,
    黒坂秀樹: `${base}sheets/characters/kurosaka-hideki.png`,
    谷アリス: `${base}sheets/characters/tani-alice.png`,
  } as Record<string, string>,

  additional: {
    川岸道也: `${base}sheets/additional/kawagishi-michiya.png`,
    宮崎圭: `${base}sheets/additional/miyazaki-kei.png`,
    緑野大地: `${base}sheets/additional/midorino-daichi.png`,
    黒坂秀樹: `${base}sheets/additional/kurosaka-hideki.png`,
    谷アリス: `${base}sheets/additional/tani-alice.png`,
  } as Record<string, string>,

  endings: {
    川岸道也: `${base}sheets/endings/kawagishi-michiya.png`,
    宮崎圭: `${base}sheets/endings/miyazaki-kei.png`,
    緑野大地: `${base}sheets/endings/midorino-daichi.png`,
    黒坂秀樹: `${base}sheets/endings/kurosaka-hideki.png`,
    谷アリス: `${base}sheets/endings/tani-alice.png`,
  } as Record<string, string>,

  investigation: (cellId: string) => `${base}sheets/investigation/${cellId}.png`,
  specialInvestigation: (sheetId: string) => `${base}sheets/special-investigation/${sheetId}.png`,
};
