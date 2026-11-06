export type Screen =
  | "home"
  | "createName"
  | "createConfirm"
  | "joinName"
  | "game";

export type Phase =
  | "waiting"
  | "characterSelect"
  | "opening"
  | "investigation"
  | "break"
  | "reasoning"
  | "vote"
  | "ending";

export type EndingSheetId =
  | "ending-1"
  | "ending-2"
  | "ending-3"
  | "ending-4"
  | "ending-5";

export type Cell = {
  id: string;
  label: string;
  content: string;
  owner: string | null;
  imageSrc?: string;
  isPublic?: boolean;
  privateViewers?: string[];
  viewers?: string[];
};

export type SpecialInvestigationSheet = {
  id: string;
  title: string;
  imageSrc: string;
  isPublic?: boolean;
  viewers?: string[];
};

export type PrivateTalk = {
  participants: string[];
};

export type Room = {
  phase: Phase;
  gmName: string;
  players: Record<string, string>;
  characterAssignments: Record<string, string>;
  mainRoom: string[];
  subRoom: string[];
  currentTurnIndex: number;
  currentTurnCharacter: string;
  thunderCount: number;
  cells: Cell[];
  specialInvestigationSheets?: SpecialInvestigationSheet[];
  manualSheetViewers?: Record<string, string[]>;
  publicSheetIds?: string[];
  ruleSheetDistributed?: boolean;
  overviewSheetDistributed?: boolean;
  characterSheetsDistributed?: boolean;
  investigationRound?: 1 | 2;
  investigationTurnOrder?: string[];
  investigationOrderDecided?: boolean;
  investigationStarted?: boolean;
  investigationStartedAt?: number | null;
  privateTalk?: PrivateTalk | null;
  votes?: Record<string, string>;
  endingSheetId?: EndingSheetId | null;
};
