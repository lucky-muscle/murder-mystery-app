import "./style.css";
import { useEffect, useMemo, useRef, useState } from "react";
import type { PointerEvent, ReactNode } from "react";
import { db } from "./firebase";
import {
  doc,
  setDoc,
  getDoc,
  updateDoc,
  onSnapshot,
} from "firebase/firestore";

import type { Room, Screen, Cell, SpecialInvestigationSheet } from "./gameTypes";
import { characterNames, initialCells, initialSpecialInvestigationSheets, turnOrder } from "./gameConstants";
import { phases } from "./gameData";
import { sheetPaths } from "./sheetPaths";

import HomeScreen from "./screens/HomeScreen";
import NameScreen from "./screens/NameScreen";
import WaitingScreen from "./screens/WaitingScreen";
import CharacterSelectScreen from "./screens/CharacterSelectScreen";
import OpeningScreen from "./screens/OpeningScreen";
import InvestigationScreen from "./screens/InvestigationScreen";
import VotingScreen from "./screens/VotingScreen";
import EndingScreen from "./screens/EndingScreen";

type GameSheet = {
  id: string;
  title: string;
  imageSrc: string;
  imageSrcs?: string[];
  kind?: "normal" | "investigation" | "special";
  sourceId?: string;
};

const roleColorClassMap: Record<string, string> = {
  川岸道也: "role-kawagishi",
  宮崎圭: "role-miyazaki",
  緑野大地: "role-midorino",
  黒坂秀樹: "role-kurosaka",
  谷アリス: "role-tani",
};

function getSheetImageSrc(sheet: GameSheet, pageIndex = 0) {
  return sheet.imageSrcs?.[pageIndex] || sheet.imageSrc;
}

const overviewSheet: GameSheet = {
  id: "overview",
  title: "作品概要シート",
  imageSrc: sheetPaths.overview,
};

const mapSheet: GameSheet = {
  id: "floor-map",
  title: "見取り図",
  imageSrc: sheetPaths.floorMapPages[0],
  imageSrcs: sheetPaths.floorMapPages,
};

function getRoleColorClass(roleName: string) {
  return roleColorClassMap[roleName] || "role-unknown";
}

function getCharacterSheet(roleName: string): GameSheet | null {
  const imageSrc = sheetPaths.characters[roleName];
  if (!imageSrc) return null;

  return {
    id: `character-${roleName}`,
    title: `${roleName}キャラシート`,
    imageSrc,
  };
}

function getAdditionalInfoSheet(roleName: string): GameSheet | null {
  const imageSrc = sheetPaths.additional[roleName];
  if (!imageSrc) return null;

  return {
    id: `additional-${roleName}`,
    title: `${roleName}追加シート`,
    imageSrc,
  };
}


function getEndingSheet(roleName: string): GameSheet | null {
  const imageSrc = sheetPaths.endings[roleName];
  if (!imageSrc) return null;

  return {
    id: `ending-${roleName}`,
    title: `${roleName}エンディング`,
    imageSrc,
  };
}

function getCellSheet(room: Room, cell: Cell): GameSheet {
  return {
    id: `investigation-card-${cell.id}`,
    title: `${getCellColumnTitle(cell.id)} ${cell.label}`,
    imageSrc: cell.imageSrc || sheetPaths.investigation(cell.id),
    kind: "investigation",
    sourceId: cell.id,
  };
}

function getSpecialSheet(sheet: SpecialInvestigationSheet): GameSheet {
  return {
    id: `special-investigation-${sheet.id}`,
    title: sheet.title,
    imageSrc: sheet.imageSrc,
    kind: "special",
    sourceId: sheet.id,
  };
}

function getCellColumnTitle(cellId: string) {
  if (cellId.startsWith("item-A-")) return "川岸道也";
  if (cellId.startsWith("item-B-")) return "宮崎圭";
  if (cellId.startsWith("item-C-")) return "緑野大地";
  if (cellId.startsWith("item-D-")) return "黒坂秀樹";
  if (cellId.startsWith("item-E-")) return "谷アリス";
  if (cellId.startsWith("victim-")) return "被害者の様子";
  if (cellId.startsWith("villa-")) return "山荘の様子";
  return "調査カード";
}

function App() {
  const [screen, setScreen] = useState<Screen>(() => {
    return sessionStorage.getItem("joinedRoomId") ? "game" : "home";
  });

  const [roomIdInput, setRoomIdInput] = useState("");
  const [joinedRoomId, setJoinedRoomId] = useState(() => {
    return sessionStorage.getItem("joinedRoomId") || "";
  });

  const [playerName, setPlayerName] = useState(() => {
    return sessionStorage.getItem("playerName") || "";
  });

  const [myCharacter, setMyCharacter] = useState(() => {
    return sessionStorage.getItem("myCharacter") || "A";
  });

  const [room, setRoom] = useState<Room | null>(null);
  const [activePersistentSheetId, setActivePersistentSheetId] = useState<string | null>(null);
  const [isPersistentSheetImageMissing, setIsPersistentSheetImageMissing] = useState(false);
  const [persistentSheetScale, setPersistentSheetScale] = useState(100);
  const [activePersistentSheetPageIndex, setActivePersistentSheetPageIndex] = useState(0);
  const [isPersistentSheetPanning, setIsPersistentSheetPanning] = useState(false);
  const persistentPanPointRef = useRef({ x: 0, y: 0 });
  const [persistentSheetWindowPosition, setPersistentSheetWindowPosition] = useState({ x: 0, y: 0 });
  const [isPersistentSheetWindowDragging, setIsPersistentSheetWindowDragging] = useState(false);
  const persistentSheetWindowDragPointRef = useRef({ x: 0, y: 0 });

  const isGm = myCharacter === "GM";

  useEffect(() => {
    if (joinedRoomId) {
      sessionStorage.setItem("joinedRoomId", joinedRoomId);
    }
  }, [joinedRoomId]);

  useEffect(() => {
    sessionStorage.setItem("playerName", playerName);
  }, [playerName]);

  useEffect(() => {
    sessionStorage.setItem("myCharacter", myCharacter);
  }, [myCharacter]);

  useEffect(() => {
    if (!joinedRoomId) return;

    const unsub = onSnapshot(doc(db, "rooms", joinedRoomId), (snap) => {
      if (snap.exists()) {
        setRoom(snap.data() as Room);
        setScreen("game");
      } else {
        sessionStorage.removeItem("joinedRoomId");
        setJoinedRoomId("");
        setRoom(null);
        setScreen("home");
      }
    });

    return () => unsub();
  }, [joinedRoomId]);

  const getMyRoleName = () => {
    if (!room || isGm) return "";
    return room.characterAssignments?.[myCharacter] || "未設定";
  };

  const availablePersistentSheets = useMemo<GameSheet[]>(() => {
    if (!room) return [];

    const sheets: GameSheet[] = [overviewSheet];

    if (isGm) {
      const assignedRoleNames = turnOrder
        .map((slot) => room.characterAssignments?.[slot])
        .filter((roleName): roleName is string => Boolean(roleName));

      const allCharacterSheets = assignedRoleNames
        .map((roleName) => getCharacterSheet(roleName))
        .filter((sheet): sheet is GameSheet => Boolean(sheet));

      const allAdditionalSheets = assignedRoleNames
        .map((roleName) => getAdditionalInfoSheet(roleName))
        .filter((sheet): sheet is GameSheet => Boolean(sheet));

      const allInvestigationCards = (room.cells || []).map((cell) => getCellSheet(room, cell));
      const allSpecialSheets = (room.specialInvestigationSheets || []).map(getSpecialSheet);
      const allEndingSheets = characterNames
        .map((roleName) => getEndingSheet(roleName))
        .filter((sheet): sheet is GameSheet => Boolean(sheet));

      sheets.push(
        ...allCharacterSheets,
        mapSheet,
        ...allAdditionalSheets,
        ...allInvestigationCards,
        ...allSpecialSheets,
        ...allEndingSheets
      );

      return sheets;
    }

    if (room.characterSheetsDistributed) {
      const myCharacterSheet = getCharacterSheet(getMyRoleName());
      if (myCharacterSheet) sheets.push(myCharacterSheet);
      sheets.push(mapSheet);
    }

    if (room.additionalInfoDistributed) {
      const myAdditionalInfoSheet = getAdditionalInfoSheet(getMyRoleName());
      if (myAdditionalInfoSheet) sheets.push(myAdditionalInfoSheet);
    }

    const manualSheetViewers = (room.manualSheetViewers || {}) as Record<string, string[]>;
    const manualSheets = new Set(Object.entries(manualSheetViewers)
      .filter(([, viewers]) => viewers.includes(myCharacter))
      .map(([sheetId]) => sheetId));
    const publicSheets = new Set(room.publicSheetIds || []);

    const assignedRoleNames = turnOrder
      .map((slot) => room.characterAssignments?.[slot])
      .filter((roleName): roleName is string => Boolean(roleName));
    const shareableNormalSheets = [
      ...assignedRoleNames.map((roleName) => getCharacterSheet(roleName)).filter((sheet): sheet is GameSheet => Boolean(sheet)),
      mapSheet,
      ...assignedRoleNames.map((roleName) => getAdditionalInfoSheet(roleName)).filter((sheet): sheet is GameSheet => Boolean(sheet)),
    ];

    for (const sheet of shareableNormalSheets) {
      if ((manualSheets.has(sheet.id) || publicSheets.has(sheet.id)) && !sheets.some((existing) => existing.id === sheet.id)) {
        sheets.push(sheet);
      }
    }

    const viewableInvestigationCards = (room.cells || [])
      .filter((cell) => cell.owner === myCharacter || cell.isPublic || cell.viewers?.includes(myCharacter) || publicSheets.has(`investigation-card-${cell.id}`) || manualSheets.has(`investigation-card-${cell.id}`))
      .map((cell) => getCellSheet(room, cell));

    const viewableSpecialSheets = (room.specialInvestigationSheets || [])
      .filter((sheet) => sheet.isPublic || sheet.viewers?.includes(myCharacter) || publicSheets.has(`special-investigation-${sheet.id}`) || manualSheets.has(`special-investigation-${sheet.id}`))
      .map(getSpecialSheet);

    sheets.push(...viewableInvestigationCards, ...viewableSpecialSheets);

    if (room.phase === "ending" && room.endingSheetRoleName) {
      const endingSheet = getEndingSheet(room.endingSheetRoleName);
      if (endingSheet) sheets.push(endingSheet);
    }

    return sheets;
  }, [room, isGm, myCharacter]);

  const activePersistentSheet = availablePersistentSheets.find(
    (sheet) => sheet.id === activePersistentSheetId
  );

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() !== "e") return;
      if (!activePersistentSheetId) return;

      event.preventDefault();
      setActivePersistentSheetId(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activePersistentSheetId]);

  const renderTitle = () => {
    return (
      <header className="game-title-header">
        <h1 className="game-title">マーダーミステリー 名前だけが生きている</h1>

        {joinedRoomId && (
          <div className="header-actions">
            <button className="leave-room-button" onClick={leaveRoom}>
              ルームから出る
            </button>
            <div className="room-number">ルーム番号：{joinedRoomId}</div>
          </div>
        )}
      </header>
    );
  };

  const getCurrentScheduleId = (phase: Room["phase"]) => {
    if (!room) return phase;
    if (phase === "opening") return "intro";
    if (phase === "investigation") return room.investigationRound === 2 ? "investigation2" : "investigation1";
    if (phase === "break") return "break";
    if (phase === "debate") return "debate";
    if (phase === "reasoning") return "reasoning";
    if (phase === "vote") return "vote";
    if (phase === "ending") return "ending";
    return phase;
  };

  const getRoleParticipantPairs = () => {
    if (!room) return [];

    const pairs = [
      {
        key: "GM",
        roleName: "GM",
        participantName: room.gmName,
        colorClass: "role-gm",
      },
    ];

    const joinedSlots = turnOrder.filter((slot) => Boolean(room.players?.[slot]));
    const orderedSlots = room.investigationOrderDecided && room.investigationTurnOrder?.length
      ? room.investigationTurnOrder.filter((slot) => joinedSlots.includes(slot))
      : joinedSlots;

    const playerPairs = orderedSlots
      .map((slot) => {
        const roleName = room.characterAssignments?.[slot] || "未設定";
        return {
          key: slot,
          roleName,
          participantName: room.players?.[slot] || "未入室",
          colorClass: getRoleColorClass(roleName),
        };
      });

    return [...pairs, ...playerPairs];
  };

  const renderSheetIndexPanel = () => {
    if (!room) return null;
    const myRoleName = getMyRoleName();

    return (
      <aside className="sheet-index-panel dark-side-panel">
        {isGm ? (
          <div className="side-role-name-card role-gm">
            <span className="info-label">あなたの役名</span>
            <strong>GM</strong>
          </div>
        ) : (
          <div className={`side-role-name-card ${getRoleColorClass(myRoleName)}`}>
            <span className="info-label">あなたの役名</span>
            <strong>{myRoleName}</strong>
          </div>
        )}

        <div className="panel-heading-block">
          <span className="section-kicker">INDEX</span>
          <h2>捜査資料</h2>
        </div>

        <div className="sheet-index-list">
          {availablePersistentSheets.map((sheet) => (
            <button
              key={sheet.id}
              className={`sheet-index-button ${activePersistentSheetId === sheet.id ? "active" : ""}`}
              onClick={() => {
                setIsPersistentSheetImageMissing(false);
                setActivePersistentSheetPageIndex(0);
                setActivePersistentSheetId((currentId) => currentId === sheet.id ? null : sheet.id);
              }}
              aria-pressed={activePersistentSheetId === sheet.id}
            >
              <span>{sheet.title}</span>
              <small>{activePersistentSheetId === sheet.id ? "表示中 / クリックで閉じる" : "クリックで表示"}</small>
            </button>
          ))}
        </div>
      </aside>
    );
  };

  const renderOtherRolesPanel = () => {
    const roleParticipantPairs = getRoleParticipantPairs();
    if (!roleParticipantPairs.length) return null;

    return (
      <div className="other-role-list" aria-label="役名と参加者名">
        {roleParticipantPairs.map((pair) => (
          <div className={`other-role-chip ${pair.colorClass}`} key={pair.key}>
            {pair.roleName}：{pair.participantName}
          </div>
        ))}
      </div>
    );
  };

  const renderSchedulePanel = () => {
    if (!room) return null;
    const currentScheduleId = getCurrentScheduleId(room.phase);

    return (
      <aside className="schedule-panel dark-side-panel">
        {renderOtherRolesPanel()}

        <div className="panel-heading-block">
          <span className="section-kicker">TIMELINE</span>
          <h2>スケジュール</h2>
        </div>

        <ol className="schedule-list">
          {phases.map((phase) => (
            <li
              key={phase.id}
              className={`schedule-item ${phase.id === currentScheduleId ? "current" : ""}`}
            >
              <div className="schedule-item-header">
                <strong>{phase.title}</strong>
              </div>
            </li>
          ))}
        </ol>
      </aside>
    );
  };

  const zoomPersistentSheet = (nextScale: number) => {
    setPersistentSheetScale(Math.min(400, Math.max(50, nextScale)));
  };


  const startPersistentSheetWindowDrag = (event: PointerEvent<HTMLElement>) => {
    const target = event.target as HTMLElement;
    if (target.closest("button") || target.closest(".sheet-image-stage")) return;
    if (event.button !== 0) return;

    setIsPersistentSheetWindowDragging(true);
    persistentSheetWindowDragPointRef.current = { x: event.clientX, y: event.clientY };
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const movePersistentSheetWindowDrag = (event: PointerEvent<HTMLElement>) => {
    if (!isPersistentSheetWindowDragging) return;

    const dx = event.clientX - persistentSheetWindowDragPointRef.current.x;
    const dy = event.clientY - persistentSheetWindowDragPointRef.current.y;
    setPersistentSheetWindowPosition((current) => ({ x: current.x + dx, y: current.y + dy }));
    persistentSheetWindowDragPointRef.current = { x: event.clientX, y: event.clientY };
  };

  const stopPersistentSheetWindowDrag = (event: PointerEvent<HTMLElement>) => {
    if (!isPersistentSheetWindowDragging) return;
    setIsPersistentSheetWindowDragging(false);
    event.currentTarget.releasePointerCapture(event.pointerId);
  };

  const startPersistentSheetPan = (event: PointerEvent<HTMLDivElement>) => {
    if (event.button !== 0 && event.button !== 2) return;

    event.preventDefault();
    setIsPersistentSheetPanning(true);
    persistentPanPointRef.current = { x: event.clientX, y: event.clientY };
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const movePersistentSheetPan = (event: PointerEvent<HTMLDivElement>) => {
    if (!isPersistentSheetPanning) return;

    event.preventDefault();
    const dx = event.clientX - persistentPanPointRef.current.x;
    const dy = event.clientY - persistentPanPointRef.current.y;
    event.currentTarget.scrollLeft -= dx;
    event.currentTarget.scrollTop -= dy;
    persistentPanPointRef.current = { x: event.clientX, y: event.clientY };
  };

  const stopPersistentSheetPan = (event: PointerEvent<HTMLDivElement>) => {
    if (!isPersistentSheetPanning) return;

    setIsPersistentSheetPanning(false);
    event.currentTarget.releasePointerCapture(event.pointerId);
  };

  const renderPersistentSheetViewer = () => {
    if (!activePersistentSheet) return null;

    return (
      <div
        className="sheet-viewer-layer persistent-sheet-viewer-layer"
        role="dialog"
        aria-modal="false"
        aria-label={activePersistentSheet.title}
      >
        <section
          className={`sheet-viewer-frame draggable-sheet-window ${isPersistentSheetWindowDragging ? "is-window-dragging" : ""}`}
          style={{ transform: `translate(${persistentSheetWindowPosition.x}px, ${persistentSheetWindowPosition.y}px)` }}
          onPointerDown={startPersistentSheetWindowDrag}
          onPointerMove={movePersistentSheetWindowDrag}
          onPointerUp={stopPersistentSheetWindowDrag}
          onPointerCancel={stopPersistentSheetWindowDrag}
        >
          <div className="sheet-viewer-header">
            <div>
              <span className="section-kicker">RECEIVED SHEET</span>
              <h2>{activePersistentSheet.title}</h2>
            </div>

            <div className="sheet-viewer-actions">
              {activePersistentSheet.imageSrcs && activePersistentSheet.imageSrcs.length > 1 && (
                <div className="sheet-page-controls" aria-label="ページ切り替え">
                  <button onClick={() => { setIsPersistentSheetImageMissing(false); setActivePersistentSheetPageIndex((index) => Math.max(0, index - 1)); }} disabled={activePersistentSheetPageIndex <= 0}>←</button>
                  <span>{activePersistentSheetPageIndex + 1} / {activePersistentSheet.imageSrcs.length}</span>
                  <button onClick={() => { setIsPersistentSheetImageMissing(false); setActivePersistentSheetPageIndex((index) => Math.min(activePersistentSheet.imageSrcs!.length - 1, index + 1)); }} disabled={activePersistentSheetPageIndex >= activePersistentSheet.imageSrcs.length - 1}>→</button>
                </div>
              )}

              <div className="sheet-zoom-controls" aria-label="シートの拡大縮小">
                <button onClick={() => zoomPersistentSheet(persistentSheetScale - 25)} aria-label="縮小">−</button>
                <span>{persistentSheetScale}%</span>
                <button onClick={() => zoomPersistentSheet(persistentSheetScale + 25)} aria-label="拡大">＋</button>
                <button onClick={() => zoomPersistentSheet(100)}>等倍</button>
              </div>

              {isGm && activePersistentSheet && (
                <div className="sheet-share-controls" aria-label="シート共有操作">
                  <button onClick={() => togglePersistentSheetPublic(activePersistentSheet)}>
                    {(() => {
                      if (activePersistentSheet.kind === "investigation") {
                        const target = room?.cells?.find((cell) => cell.id === activePersistentSheet.sourceId);
                        return target?.isPublic ? "全体公開を戻す" : "全体公開";
                      }
                      if (activePersistentSheet.kind === "special") {
                        const target = room?.specialInvestigationSheets?.find((item) => item.id === activePersistentSheet.sourceId);
                        return target?.isPublic ? "全体公開を戻す" : "全体公開";
                      }
                      return room?.publicSheetIds?.includes(activePersistentSheet.id) ? "全体公開を戻す" : "全体公開";
                    })()}
                  </button>
                  {turnOrder.filter((slot) => Boolean(room?.players?.[slot])).map((slot) => {
                    const viewers = room?.manualSheetViewers?.[activePersistentSheet.id] || [];
                    const isSent = viewers.includes(slot);
                    return (
                      <button key={slot} onClick={() => togglePersistentSheetForPlayer(activePersistentSheet, slot)}>
                        {isSent ? `${room?.players?.[slot]}への送信を戻す` : `${room?.players?.[slot]}に送る`}
                      </button>
                    );
                  })}
                </div>
              )}

              <button
                className="sheet-close-button"
                onClick={() => setActivePersistentSheetId(null)}
                aria-label="シートを閉じる"
              >
                閉じる
              </button>
            </div>
          </div>

          <div
            className={`sheet-image-stage ${isPersistentSheetPanning ? "is-panning" : ""}`}
            onPointerDown={startPersistentSheetPan}
            onPointerMove={movePersistentSheetPan}
            onPointerUp={stopPersistentSheetPan}
            onPointerCancel={stopPersistentSheetPan}
            onContextMenu={(event) => event.preventDefault()}
          >
            {isPersistentSheetImageMissing ? (
              <div className="sheet-image-placeholder">
                <strong>シート画像が未配置です</strong>
                <p>対応する画像を <code>public/sheets/</code> 以下に置くと、ここに表示されます。</p>
              </div>
            ) : (
              <div className="sheet-image-canvas" style={{ width: `${persistentSheetScale}%` }}>
                <img
                  src={getSheetImageSrc(activePersistentSheet, activePersistentSheetPageIndex)}
                  alt={activePersistentSheet.title}
                  className="overview-sheet-image"
                  draggable={false}
                  onError={() => setIsPersistentSheetImageMissing(true)}
                />
              </div>
            )}
          </div>

          <p className="sheet-viewer-help">
            ウィンドウ本体を長押ししながらドラッグすると位置を動かせます。シート画像の上では左クリック長押し＋ドラッグで視点を移動できます。閉じるボタン / Eキー / 左の捜査資料で閉じられます。
          </p>
        </section>
      </div>
    );
  };

  const renderPostOpeningLayout = (center: ReactNode) => {
    return (
      <main className="app dark-game-app post-opening-page">
        {renderTitle()}
        <div className="opening-layout cinematic-layout post-opening-layout">
          {renderSheetIndexPanel()}
          {center}
          {renderSchedulePanel()}
        </div>
        {renderPersistentSheetViewer()}
      </main>
    );
  };

  const goCreateName = () => {
    setPlayerName("");
    setScreen("createName");
  };

  const goJoinName = async () => {
    const id = roomIdInput.trim().toUpperCase();

    if (!id) return alert("ルーム番号を入力して");

    const snap = await getDoc(doc(db, "rooms", id));

    if (!snap.exists()) return alert("ルームが見つからない");

    const data = snap.data() as Room;
    if (data.phase !== "waiting" && data.phase !== "characterSelect") {
      return alert("オープニング開始後は新規参加できません");
    }

    setRoomIdInput(id);
    setPlayerName("");
    setScreen("joinName");
  };

  const createRoom = async () => {
    const newRoomId = Math.random().toString(36).slice(2, 8).toUpperCase();

    await setDoc(doc(db, "rooms", newRoomId), {
      phase: "waiting",
      gmName: playerName,
      players: {},
      characterAssignments: {},
      mainRoom: [],
      subRoom: [],
      currentTurnIndex: 0,
      currentTurnCharacter: "A",
      thunderCount: 5,
      cells: initialCells,
      specialInvestigationSheets: initialSpecialInvestigationSheets,
      manualSheetViewers: {},
      publicSheetIds: [],
      characterSheetsDistributed: false,
      questionTimeStarted: false,
      investigationRound: 1,
      investigationTurnOrder: turnOrder,
      investigationOrderDecided: false,
      investigationStarted: false,
      investigationStartedAt: null,
      investigationDurationSeconds: 20 * 60,
      additionalInfoDistributed: false,
      privateTalk: null,
      votes: {},
      endingSheetRoleName: null,
    });

    setMyCharacter("GM");
    setJoinedRoomId(newRoomId);
    setScreen("game");
  };

  const joinRoom = async () => {
    const id = roomIdInput.trim().toUpperCase();
    const ref = doc(db, "rooms", id);
    const snap = await getDoc(ref);

    if (!snap.exists()) {
      alert("ルームが見つからない");
      setScreen("home");
      return;
    }

    const data = snap.data() as Room;

    if (data.phase !== "waiting" && data.phase !== "characterSelect") {
      alert("オープニング開始後は新規参加できません");
      setScreen("home");
      return;
    }

    const players = data.players || {};
    const usedNames = [data.gmName, ...Object.values(players)];

    if (usedNames.includes(playerName)) {
      alert("その名前はすでに使われています");
      return;
    }

    const emptyCharacter = turnOrder.find((c) => !players[c]);

    if (!emptyCharacter) {
      alert("空いている参加枠がない");
      return;
    }

    await updateDoc(ref, {
      [`players.${emptyCharacter}`]: playerName,
    });

    setMyCharacter(emptyCharacter);
    setJoinedRoomId(id);
    setScreen("game");
  };

  const startCharacterSelect = async () => {
    if (!room || !isGm) return;

    await updateDoc(doc(db, "rooms", joinedRoomId), {
      phase: "characterSelect",
    });
  };

  const assignCharacter = async (slot: string, characterName: string) => {
    if (!room || !isGm) return;

    await updateDoc(doc(db, "rooms", joinedRoomId), {
      [`characterAssignments.${slot}`]: characterName,
    });
  };

  const completeCharacterSelect = async () => {
    if (!room || !isGm) return;

    const players = room.players || {};
    const assignments = room.characterAssignments || {};

    const allJoinedPlayersAssigned = Object.keys(players).every(
      (slot) => assignments[slot]
    );

    if (!allJoinedPlayersAssigned) {
      alert("参加者全員のキャラクターを選択して");
      return;
    }

    const assignedCharacters = Object.keys(players).map((slot) => assignments[slot]);
    const uniqueAssignedCharacters = new Set(assignedCharacters);

    if (uniqueAssignedCharacters.size !== assignedCharacters.length) {
      alert("キャラクターが重複しています。重複しないように振り分けてください");
      return;
    }

    await updateDoc(doc(db, "rooms", joinedRoomId), {
      phase: "opening",
    });
  };

  const distributeCharacterSheets = async () => {
    if (!room || !isGm) return;

    await updateDoc(doc(db, "rooms", joinedRoomId), {
      characterSheetsDistributed: true,
      questionTimeStarted: false,
    });
  };

  const startQuestionTime = async () => {
    if (!room || !isGm) return;

    await updateDoc(doc(db, "rooms", joinedRoomId), {
      questionTimeStarted: true,
    });
  };

  const goInvestigation = async () => {
    if (!room || !isGm) return;
    const joinedSlots = turnOrder.filter((slot) => Boolean(room.players?.[slot]));

    await updateDoc(doc(db, "rooms", joinedRoomId), {
      phase: "investigation",
      investigationRound: 1,
      investigationTurnOrder: joinedSlots,
      investigationOrderDecided: false,
      investigationStarted: false,
      investigationStartedAt: null,
      currentTurnIndex: 0,
      currentTurnCharacter: joinedSlots[0] || "A",
    });
  };

  const updateInvestigationOrder = async (nextOrder: string[]) => {
    if (!room || !isGm) return;

    const joinedSlots = turnOrder.filter((slot) => Boolean(room.players?.[slot]));
    const filteredOrder = nextOrder.filter((slot) => joinedSlots.includes(slot));
    const uniqueOrder = Array.from(new Set(filteredOrder));

    if (filteredOrder.length !== joinedSlots.length || uniqueOrder.length !== joinedSlots.length) {
      alert("調査順番で参加者が重複しています。参加者全員が一度ずつ入るように設定してください");
      return;
    }

    await updateDoc(doc(db, "rooms", joinedRoomId), {
      investigationTurnOrder: filteredOrder,
      investigationOrderDecided: true,
      investigationStarted: false,
      investigationStartedAt: null,
      currentTurnIndex: 0,
      currentTurnCharacter: filteredOrder[0] || "A",
    });
  };

  const startInvestigationTimer = async () => {
    if (!room || !isGm) return;

    const joinedSlots = turnOrder.filter((slot) => Boolean(room.players?.[slot]));
    const order = (room.investigationTurnOrder || joinedSlots).filter((slot) => joinedSlots.includes(slot));
    const uniqueOrder = Array.from(new Set(order));

    if (!room.investigationOrderDecided) {
      alert("先に調査順番を決定してください");
      return;
    }

    if (order.length !== joinedSlots.length || uniqueOrder.length !== joinedSlots.length) {
      alert("調査順番で参加者が重複しています。参加者全員が一度ずつ入るように設定してください");
      return;
    }

    await updateDoc(doc(db, "rooms", joinedRoomId), {
      investigationTurnOrder: order,
      investigationStarted: true,
      investigationStartedAt: Date.now(),
      investigationDurationSeconds: 20 * 60,
      currentTurnIndex: 0,
      currentTurnCharacter: order[0] || "A",
    });
  };

  const goBreak = async () => {
    if (!room || !isGm) return;

    await updateDoc(doc(db, "rooms", joinedRoomId), {
      phase: "break",
      investigationStarted: false,
      investigationStartedAt: null,
    });
  };

  const distributeAdditionalInfo = async () => {
    if (!room || !isGm) return;

    await updateDoc(doc(db, "rooms", joinedRoomId), {
      additionalInfoDistributed: true,
    });
  };

  const goInvestigation2 = async () => {
    if (!room || !isGm) return;
    const joinedSlots = turnOrder.filter((slot) => Boolean(room.players?.[slot]));

    await updateDoc(doc(db, "rooms", joinedRoomId), {
      phase: "investigation",
      investigationRound: 2,
      investigationStarted: false,
      investigationStartedAt: null,
      investigationOrderDecided: true,
      investigationTurnOrder: room.investigationTurnOrder || joinedSlots,
      currentTurnIndex: 0,
      currentTurnCharacter: (room.investigationTurnOrder || joinedSlots)[0] || "A",
    });
  };

  const goDebate = async () => {
    if (!room || !isGm) return;

    await updateDoc(doc(db, "rooms", joinedRoomId), {
      phase: "debate",
      privateTalk: null,
      cells: (room.cells || []).map((cell) => ({ ...cell, privateViewers: [] })),
      investigationStarted: false,
      investigationStartedAt: null,
    });
  };

  const goReasoning = async () => {
    if (!room || !isGm) return;

    await updateDoc(doc(db, "rooms", joinedRoomId), {
      phase: "reasoning",
      investigationStarted: false,
      investigationStartedAt: null,
    });
  };

  const goVote = async () => {
    if (!room || !isGm) return;

    await updateDoc(doc(db, "rooms", joinedRoomId), {
      phase: "vote",
      votes: {},
    });
  };

  const submitVote = async (targetSlot: string) => {
    if (!room || isGm) return;
    if (!room.players?.[targetSlot]) return;
    if (targetSlot === myCharacter) {
      alert("自分には投票できません");
      return;
    }

    await updateDoc(doc(db, "rooms", joinedRoomId), {
      [`votes.${myCharacter}`]: targetSlot,
    });
  };

  const goEnding = async (roleName?: string) => {
    if (!room || !isGm) return;

    await updateDoc(doc(db, "rooms", joinedRoomId), {
      phase: "ending",
      endingSheetRoleName: roleName || null,
    });
  };

  const startPrivateTalk = async (participantSlots: string[]) => {
    if (!room || !isGm) return;
    const uniqueSlots = Array.from(new Set(participantSlots)).filter((slot) => Boolean(room.players?.[slot]));

    if (uniqueSlots.length !== 2) {
      alert("密談する二人を選んでください");
      return;
    }

    const clearedCells = (room.cells || []).map((cell) => ({ ...cell, privateViewers: [] }));

    await updateDoc(doc(db, "rooms", joinedRoomId), {
      privateTalk: { participants: uniqueSlots },
      cells: clearedCells,
    });
  };

  const endPrivateTalk = async () => {
    if (!room || !isGm) return;

    const clearedCells = (room.cells || []).map((cell) => ({ ...cell, privateViewers: [] }));

    await updateDoc(doc(db, "rooms", joinedRoomId), {
      privateTalk: null,
      cells: clearedCells,
    });
  };

  const getCellColumnIndex = (cellId: string) => {
    if (cellId.startsWith("item-A-")) return 0;
    if (cellId.startsWith("item-B-")) return 1;
    if (cellId.startsWith("item-C-")) return 2;
    if (cellId.startsWith("item-D-")) return 3;
    if (cellId.startsWith("item-E-")) return 4;
    if (cellId.startsWith("victim-")) return 5;
    if (cellId.startsWith("villa-")) return 6;
    return -1;
  };

  const getCellRowNumber = (cellId: string) => {
    const match = cellId.match(/-(\d+)$/);
    return match ? Number(match[1]) : -1;
  };

  const getCellRoleNameFromColumn = (columnIndex: number) => {
    const roleNames = ["川岸道也", "宮崎圭", "緑野大地", "黒坂秀樹", "谷アリス"];
    return columnIndex >= 0 && columnIndex < roleNames.length ? roleNames[columnIndex] : null;
  };

  const isCellUnlocked = (target: Cell, cells: Cell[]) => {
    const targetRow = getCellRowNumber(target.id);
    const targetColumn = getCellColumnIndex(target.id);

    if (targetRow === 1) return true;
    if (targetRow < 1 || targetColumn < 0) return false;

    return cells.some((cell) => {
      if (!cell.owner) return false;
      const row = getCellRowNumber(cell.id);
      const column = getCellColumnIndex(cell.id);
      return Math.abs(row - targetRow) + Math.abs(column - targetColumn) === 1;
    });
  };

  const canPlayerClaimCell = (target: Cell, actorSlot: string, cells: Cell[]) => {
    if (room?.phase === "break") return false;
    if (!room?.investigationStarted) return false;
    if ((room?.thunderCount ?? 0) <= 0) return false;
    if (target.owner) return false;
    if (room?.currentTurnCharacter !== actorSlot) return false;

    const ownColumnRoleName = getCellRoleNameFromColumn(getCellColumnIndex(target.id));
    const actorRoleName = room?.characterAssignments?.[actorSlot];
    if (ownColumnRoleName && actorRoleName === ownColumnRoleName) return false;

    return isCellUnlocked(target, cells);
  };

  const claimCell = async (cellId: string) => {
    if (!room || isGm) return;

    if (!room.investigationStarted) {
      alert("調査開始までお待ちください");
      return;
    }

    if (room.currentTurnCharacter !== myCharacter) {
      alert("今はあなたの調査ターンではない");
      return;
    }

    const target = room.cells.find((c: Cell) => c.id === cellId);
    if (!target) return;

    if (!canPlayerClaimCell(target, myCharacter, room.cells)) {
      alert("この調査カードは取得できません");
      return;
    }

    const newCells = room.cells.map((c: Cell) =>
      c.id === cellId ? { ...c, owner: myCharacter, isPublic: false, privateViewers: [], viewers: [] } : c
    );

    const activeOrder = (room.investigationTurnOrder || turnOrder).filter((slot) => Boolean(room.players?.[slot]));
    const currentIndex = activeOrder.indexOf(room.currentTurnCharacter);
    const nextIndex = currentIndex >= 0 ? (currentIndex + 1) % activeOrder.length : 0;

    await updateDoc(doc(db, "rooms", joinedRoomId), {
      cells: newCells,
      currentTurnIndex: nextIndex,
      currentTurnCharacter: activeOrder[nextIndex] || room.currentTurnCharacter,
    });
  };

  const toggleCellPublic = async (cellId: string) => {
    if (!room) return;

    const target = room.cells.find((c: Cell) => c.id === cellId);
    if (!target) return;

    if (!isGm && target.owner !== myCharacter) return;

    const newCells = room.cells.map((c: Cell) =>
      c.id === cellId ? { ...c, isPublic: !c.isPublic } : c
    );

    await updateDoc(doc(db, "rooms", joinedRoomId), {
      cells: newCells,
    });
  };

  const toggleCellPrivateShare = async (cellId: string, targetSlot: string) => {
    if (!room) return;

    const target = room.cells.find((c: Cell) => c.id === cellId);
    if (!target) return;

    const talkMembers = room.privateTalk?.participants || [];
    if (!talkMembers.includes(targetSlot)) return;
    if (!target.owner || !talkMembers.includes(target.owner)) return;
    if (!isGm && target.owner !== myCharacter) return;

    const currentViewers = target.privateViewers || [];
    const nextViewers = currentViewers.includes(targetSlot)
      ? currentViewers.filter((slot) => slot !== targetSlot)
      : [...currentViewers, targetSlot];

    const newCells = room.cells.map((c: Cell) =>
      c.id === cellId ? { ...c, privateViewers: nextViewers } : c
    );

    await updateDoc(doc(db, "rooms", joinedRoomId), {
      cells: newCells,
    });
  };

  const transferCellToPrivateTalkTarget = async (cellId: string, targetSlot: string) => {
    if (!room) return;

    const target = room.cells.find((c: Cell) => c.id === cellId);
    if (!target) return;

    const talkMembers = room.privateTalk?.participants || [];
    if (!talkMembers.includes(targetSlot)) return;
    if (!target.owner || !talkMembers.includes(target.owner)) return;
    if (!isGm && target.owner !== myCharacter) return;

    const newCells = room.cells.map((c: Cell) =>
      c.id === cellId
        ? { ...c, owner: targetSlot, privateViewers: [], viewers: [] }
        : c
    );

    await updateDoc(doc(db, "rooms", joinedRoomId), {
      cells: newCells,
    });
  };

  const togglePersistentSheetForPlayer = async (sheet: GameSheet, targetSlot: string) => {
    if (!room || !isGm || !sheet.id) return;

    const current = room.manualSheetViewers || {};
    const currentViewers = current[sheet.id] || [];
    const nextViewers = currentViewers.includes(targetSlot)
      ? currentViewers.filter((slot) => slot !== targetSlot)
      : [...currentViewers, targetSlot];

    const updatePayload: Record<string, unknown> = {
      [`manualSheetViewers.${sheet.id}`]: nextViewers,
    };

    if (sheet.kind === "investigation" && sheet.sourceId) {
      updatePayload.cells = (room.cells || []).map((cell) => {
        if (cell.id !== sheet.sourceId) return cell;
        const viewers = cell.viewers || [];
        const nextCellViewers = viewers.includes(targetSlot)
          ? viewers.filter((slot) => slot !== targetSlot)
          : [...viewers, targetSlot];
        return { ...cell, viewers: nextCellViewers };
      });
    }

    if (sheet.kind === "special" && sheet.sourceId) {
      updatePayload.specialInvestigationSheets = (room.specialInvestigationSheets || []).map((item) => {
        if (item.id !== sheet.sourceId) return item;
        const viewers = item.viewers || [];
        const nextSheetViewers = viewers.includes(targetSlot)
          ? viewers.filter((slot) => slot !== targetSlot)
          : [...viewers, targetSlot];
        return { ...item, viewers: nextSheetViewers };
      });
    }

    await updateDoc(doc(db, "rooms", joinedRoomId), updatePayload);
  };

  const togglePersistentSheetPublic = async (sheet: GameSheet) => {
    if (!room || !isGm || !sheet.id) return;

    if (sheet.kind === "investigation" && sheet.sourceId) {
      await updateDoc(doc(db, "rooms", joinedRoomId), {
        cells: (room.cells || []).map((cell) => cell.id === sheet.sourceId ? { ...cell, isPublic: !cell.isPublic } : cell),
      });
      return;
    }

    if (sheet.kind === "special" && sheet.sourceId) {
      await updateDoc(doc(db, "rooms", joinedRoomId), {
        specialInvestigationSheets: (room.specialInvestigationSheets || []).map((item) => item.id === sheet.sourceId ? { ...item, isPublic: !item.isPublic } : item),
      });
      return;
    }

    const publicSheetIds = room.publicSheetIds || [];
    const nextPublicSheetIds = publicSheetIds.includes(sheet.id)
      ? publicSheetIds.filter((id) => id !== sheet.id)
      : [...publicSheetIds, sheet.id];

    await updateDoc(doc(db, "rooms", joinedRoomId), {
      publicSheetIds: nextPublicSheetIds,
    });
  };

  const useThunder = async () => {
    if (!room || !isGm) return;

    await updateDoc(doc(db, "rooms", joinedRoomId), {
      thunderCount: Math.max(0, room.thunderCount - 1),
    });
  };

  const addThunder = async () => {
    if (!room || !isGm) return;

    await updateDoc(doc(db, "rooms", joinedRoomId), {
      thunderCount: Math.min(6, room.thunderCount + 1),
    });
  };

  const leaveLocalRoom = () => {
    sessionStorage.removeItem("joinedRoomId");
    sessionStorage.removeItem("playerName");
    sessionStorage.removeItem("myCharacter");

    setRoom(null);
    setJoinedRoomId("");
    setPlayerName("");
    setMyCharacter("A");
    setScreen("home");
  };

  const leaveRoom = async () => {
    if (!joinedRoomId || !room) return;

    if (isGm) {
      leaveLocalRoom();
      return;
    }

    const ref = doc(db, "rooms", joinedRoomId);

    const newPlayers = { ...(room.players || {}) };
    delete newPlayers[myCharacter];

    const newAssignments = { ...(room.characterAssignments || {}) };
    delete newAssignments[myCharacter];

    await updateDoc(ref, {
      players: newPlayers,
      characterAssignments: newAssignments,
    });

    leaveLocalRoom();
  };

  if (screen === "home") {
    return (
      <HomeScreen
        renderTitle={renderTitle}
        roomIdInput={roomIdInput}
        setRoomIdInput={setRoomIdInput}
        goCreateName={goCreateName}
        goJoinName={goJoinName}
      />
    );
  }

  if (screen === "createName") {
    return (
      <NameScreen
        renderTitle={renderTitle}
        title="名前入力"
        playerName={playerName}
        setPlayerName={setPlayerName}
        onDecide={() => {
          if (!playerName.trim()) return alert("名前を入力して");
          setScreen("createConfirm");
        }}
        onBack={() => setScreen("home")}
        decideLabel="名前を決定"
      />
    );
  }

  if (screen === "createConfirm") {
    return (
      <main className="app dark-game-app confirm-page">
        {renderTitle()}
        <section className="card dark-panel confirm-card centered-form-card">
          <div className="section-kicker">CREATE ROOM</div>
          <h2>確認</h2>
          <p className="confirm-lead">この名前でGMとしてルームを作成しますか？</p>
          <p className="confirm-name">GM名：{playerName}</p>
          <div className="form-actions centered-form-actions confirm-actions">
            <button className="primary-action-button large-centered-button" onClick={createRoom}>作成する</button>
            <button className="large-secondary-button" onClick={() => setScreen("createName")}>戻る</button>
          </div>
        </section>
      </main>
    );
  }

  if (screen === "joinName") {
    return (
      <NameScreen
        renderTitle={renderTitle}
        title="名前入力"
        playerName={playerName}
        setPlayerName={setPlayerName}
        onDecide={() => {
          if (!playerName.trim()) return alert("名前を入力して");
          joinRoom();
        }}
        onBack={() => setScreen("home")}
        decideLabel="部屋に入る"
        subText={`参加ルーム：${roomIdInput}`}
      />
    );
  }

  if (!room) {
    return (
      <main className="app">
        {renderTitle()}
        <p>読み込み中...</p>
      </main>
    );
  }

  if (room.phase === "waiting") {
    return (
      <WaitingScreen
        renderTitle={renderTitle}
        room={room}
        isGm={isGm}
        onStart={startCharacterSelect}
        onLeave={leaveRoom}
      />
    );
  }

  if (room.phase === "characterSelect") {
    return (
      <CharacterSelectScreen
        renderTitle={renderTitle}
        room={room}
        isGm={isGm}
        playerName={playerName}
        onAssign={assignCharacter}
        onComplete={completeCharacterSelect}
      />
    );
  }

  if (room.phase === "opening") {
    return (
      <OpeningScreen
        renderTitle={renderTitle}
        room={room}
        isGm={isGm}
        myCharacter={myCharacter}
        playerName={playerName}
        onDistributeSheets={distributeCharacterSheets}
        onStartQuestionTime={startQuestionTime}
        onNext={goInvestigation}
        onShareSheetWithPlayer={togglePersistentSheetForPlayer}
        onToggleSheetPublic={togglePersistentSheetPublic}
        onLeave={leaveRoom}
      />
    );
  }

  if (room.phase === "investigation" || room.phase === "break" || room.phase === "debate" || room.phase === "reasoning") {
    return renderPostOpeningLayout(
      <InvestigationScreen
        room={room}
        isGm={isGm}
        myCharacter={myCharacter}
        playerName={playerName}
        onClaimCell={claimCell}
        onToggleCellPublic={toggleCellPublic}
        onToggleCellPrivateShare={toggleCellPrivateShare}
        onUseThunder={useThunder}
        onAddThunder={addThunder}
        onGoBreak={goBreak}
        onDistributeAdditionalInfo={distributeAdditionalInfo}
        onGoInvestigation2={goInvestigation2}
        onGoDebate={goDebate}
        onUpdateInvestigationOrder={updateInvestigationOrder}
        onStartInvestigation={startInvestigationTimer}
        onStartPrivateTalk={startPrivateTalk}
        onEndPrivateTalk={endPrivateTalk}
        onTransferCellPrivateTalkTarget={transferCellToPrivateTalkTarget}
        onGoReasoning={goReasoning}
        onGoVote={goVote}
        onLeave={leaveRoom}
      />
    );
  }

  if (room.phase === "vote") {
    return renderPostOpeningLayout(
      <VotingScreen
        room={room}
        isGm={isGm}
        myCharacter={myCharacter}
        playerName={playerName}
        onGoVote={goVote}
        onSubmitVote={submitVote}
        onGoEnding={goEnding}
        onGoReasoning={goReasoning}
      />
    );
  }

  return renderPostOpeningLayout(
    <EndingScreen
      room={room}
      isGm={isGm}
      myCharacter={myCharacter}
      playerName={playerName}
      onLeave={leaveRoom}
    />
  );
}

export default App;
