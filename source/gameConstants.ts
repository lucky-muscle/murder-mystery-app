import type { Cell, SpecialInvestigationSheet } from "./gameTypes";
import { sheetPaths } from "./sheetPaths";

export const turnOrder = ["A", "B", "C", "D", "E"];

export const characterNames = [
  "川岸道也",
  "宮崎圭",
  "緑野大地",
  "黒坂秀樹",
  "谷アリス",
];

const characterCellDefinitions = [
  { slot: "A", name: "川岸道也" },
  { slot: "B", name: "宮崎圭" },
  { slot: "C", name: "緑野大地" },
  { slot: "D", name: "黒坂秀樹" },
  { slot: "E", name: "谷アリス" },
];

function makeInvestigationImageSrc(cellId: string) {
  return sheetPaths.investigation(cellId);
}

export const initialCells: Cell[] = [1, 2, 3, 4].flatMap((rowNumber) => [
  ...characterCellDefinitions.map(({ slot, name }) => {
    const id = `item-${slot}-${rowNumber}`;
    return {
      id,
      label: `調査${rowNumber}`,
      content: `${name}に関する調査${rowNumber}の内容`,
      owner: null,
      imageSrc: makeInvestigationImageSrc(id),
      isPublic: false,
      privateViewers: [],
      viewers: [],
    };
  }),
  {
    id: `victim-${rowNumber}`,
    label: `調査${rowNumber}`,
    content: `被害者・梅村萌絵の様子${rowNumber}の内容`,
    owner: null,
    imageSrc: makeInvestigationImageSrc(`victim-${rowNumber}`),
    isPublic: false,
    privateViewers: [],
    viewers: [],
  },
  {
    id: `villa-${rowNumber}`,
    label: `調査${rowNumber}`,
    content: `山荘の様子${rowNumber}の内容`,
    owner: null,
    imageSrc: makeInvestigationImageSrc(`villa-${rowNumber}`),
    isPublic: false,
    privateViewers: [],
    viewers: [],
  },
]);

export const initialSpecialInvestigationSheets: SpecialInvestigationSheet[] = [1, 2, 3, 4, 5].map((number) => ({
  id: `special-${number}`,
  title: `特別調査${number}`,
  imageSrc: sheetPaths.specialInvestigation(`special-${number}`),
  isPublic: false,
  viewers: [],
}));
