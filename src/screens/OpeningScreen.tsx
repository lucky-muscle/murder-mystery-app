import { useEffect, useMemo, useRef, useState } from "react";
import type { MouseEvent, PointerEvent, ReactNode } from "react";
import type { Cell, Room, SpecialInvestigationSheet } from "../gameTypes";
import { turnOrder } from "../gameConstants";
import { phases } from "../gameData";
import { sheetPaths } from "../sheetPaths";

type OpeningScreenProps = {
  renderTitle: () => ReactNode;
  room: Room;
  isGm: boolean;
  myCharacter: string;
  playerName: string;
  onDistributeRuleSheet: () => void;
  onDistributeOverviewSheet: () => void;
  onDistributeSheets: () => void;
  onNext: () => void;
  onShareSheetWithPlayer?: (sheet: GameSheet, targetSlot: string) => void;
  onToggleSheetPublic?: (sheet: GameSheet) => void;
  onLeave?: () => void;
};

type GameSheet = {
  id: string;
  title: string;
  imageSrc: string;
  imageSrcs?: string[];
  fileType?: "image" | "pdf";
  pageCount?: number;
  kind?: "normal" | "investigation" | "special" | "ending";
  sourceId?: string;
};

const roleColorClassMap: Record<string, string> = {
  川岸道也: "role-kawagishi",
  梅村萌絵: "role-umemura",
  緑野大地: "role-midorino",
  黒坂秀樹: "role-kurosaka",
  水谷アリス: "role-mizutani",
};

const endingDefinitions = [
  { id: "ending-1", title: "エンディング①", targetRoleName: "川岸道也", imageSrc: sheetPaths.endings.ending1 },
  { id: "ending-2", title: "エンディング②", targetRoleName: "梅村萌絵", imageSrc: sheetPaths.endings.ending2 },
  { id: "ending-3", title: "エンディング③", targetRoleName: "緑野大地", imageSrc: sheetPaths.endings.ending3 },
  { id: "ending-4", title: "エンディング④", targetRoleName: "黒坂秀樹", imageSrc: sheetPaths.endings.ending4 },
  { id: "ending-5", title: "エンディング⑤", targetRoleName: "水谷アリス", imageSrc: sheetPaths.endings.ending5 },
] as const;

function isPdfPath(src?: string) {
  return Boolean(src && src.toLowerCase().includes(".pdf"));
}


function getSheetPageCount(sheet: GameSheet) {
  if (sheet.fileType === "pdf") {
    return sheet.pageCount || 1;
  }

  return sheet.imageSrcs?.length || 1;
}

function getSheetImageSrc(sheet: GameSheet, pageIndex = 0) {
  if (sheet.fileType === "pdf") {
    return `${sheet.imageSrc}#page=${pageIndex + 1}&toolbar=0&navpanes=0`;
  }

  return sheet.imageSrcs?.[pageIndex] || sheet.imageSrc;
}

const ruleSheet: GameSheet = {
  id: "rule",
  title: "ルール説明シート",
  imageSrc: sheetPaths.rulePages[0],
  imageSrcs: sheetPaths.rulePages,
  fileType: "image",
};

const overviewSheet: GameSheet = {
  id: "overview",
  title: "作品概要シート",
  imageSrc: sheetPaths.overviewPages[0],
  imageSrcs: sheetPaths.overviewPages,
  fileType: "image",
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
  const pages = sheetPaths.characterPages[roleName];
  if (!pages || pages.length === 0) return null;

  return {
    id: `character-${roleName}`,
    title: `${roleName}キャラシート`,
    imageSrc: pages[0],
    imageSrcs: pages,
    fileType: "image",
  };
}

function getAdditionalInfoSheet(roleName: string): GameSheet | null {
  const pages = sheetPaths.additionalPages[roleName];
  if (!pages || pages.length === 0) return null;

  return {
    id: `additional-${roleName}`,
    title: `${roleName}追加シート`,
    imageSrc: pages[0],
    imageSrcs: pages,
    fileType: "image",
  };
}

function getCellColumnTitle(cellId: string) {
  if (cellId.startsWith("item-A-")) return "川岸道也";
  if (cellId.startsWith("item-B-")) return "梅村萌絵";
  if (cellId.startsWith("item-C-")) return "緑野大地";
  if (cellId.startsWith("item-D-")) return "黒坂秀樹";
  if (cellId.startsWith("item-E-")) return "水谷アリス";
  if (cellId.startsWith("victim-")) return "被害者の様子";
  if (cellId.startsWith("villa-")) return "山荘の様子";
  return "調査カード";
}

function getCellSheet(cell: Cell): GameSheet {
  return {
    id: `investigation-card-${cell.id}`,
    title: `${getCellColumnTitle(cell.id)} ${cell.label}`,
    imageSrc: cell.imageSrc || sheetPaths.investigation(cell.id),
    fileType: "image",
    kind: "investigation",
    sourceId: cell.id,
  };
}

function getSpecialSheet(sheet: SpecialInvestigationSheet): GameSheet {
  return {
    id: `special-investigation-${sheet.id}`,
    title: sheet.title,
    imageSrc: sheet.imageSrc,
    fileType: "image",
    kind: "special",
    sourceId: sheet.id,
  };
}

function getEndingSheetById(endingSheetId?: string | null): GameSheet | null {
  if (!endingSheetId) return null;
  const definition = endingDefinitions.find((item) => item.id === endingSheetId);
  if (!definition) return null;

  return {
    id: definition.id,
    title: definition.title,
    imageSrc: definition.imageSrc,
    fileType: "image",
    kind: "ending",
    sourceId: definition.id,
  };
}


function OpeningScreen({
  renderTitle,
  room,
  isGm,
  myCharacter,
  playerName,
  onDistributeRuleSheet,
  onDistributeOverviewSheet,
  onDistributeSheets,
  onNext,
  onShareSheetWithPlayer,
  onToggleSheetPublic,
}: OpeningScreenProps) {
  const [openSheetId, setOpenSheetId] = useState<string | null>(null);
  const [showRuleSheetReceiveWindow, setShowRuleSheetReceiveWindow] = useState(false);
  const [showOverviewSheetReceiveWindow, setShowOverviewSheetReceiveWindow] = useState(false);
  const [showCharacterSheetReceiveWindow, setShowCharacterSheetReceiveWindow] = useState(false);
  const [showRoleReveal, setShowRoleReveal] = useState(false);
  const [isImageMissing, setIsImageMissing] = useState(false);
  const [sheetScale, setSheetScale] = useState(100);
  const [openSheetPageIndex, setOpenSheetPageIndex] = useState(0);
  const [isSheetPanning, setIsSheetPanning] = useState(false);
  const panPointRef = useRef({ x: 0, y: 0 });
  const [sheetWindowPosition, setSheetWindowPosition] = useState({ x: 0, y: 0 });
  const [isSheetWindowDragging, setIsSheetWindowDragging] = useState(false);
  const sheetWindowDragPointRef = useRef({ x: 0, y: 0 });

  const currentScheduleId = room.phase === "opening" ? "intro" : room.phase;
  const myRoleName = room.characterAssignments?.[myCharacter] || "未設定";

  const availableSheets = useMemo<GameSheet[]>(() => {
    const sheets: GameSheet[] = [];

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

      const allInvestigationCards = (room.cells || []).map(getCellSheet);
      const allSpecialSheets = (room.specialInvestigationSheets || []).map(getSpecialSheet);
      const allEndingSheets = endingDefinitions
        .map((definition) => getEndingSheetById(definition.id))
        .filter((sheet): sheet is GameSheet => Boolean(sheet));
      sheets.push(ruleSheet, overviewSheet, ...allCharacterSheets, mapSheet, ...allAdditionalSheets, ...allInvestigationCards, ...allSpecialSheets, ...allEndingSheets);
      return sheets;
    }

    if (room.ruleSheetDistributed) {
      sheets.push(ruleSheet);
    }

    if (room.overviewSheetDistributed) {
      sheets.push(overviewSheet);
    }

    if (room.characterSheetsDistributed) {
      const myCharacterSheet = getCharacterSheet(myRoleName);
      if (myCharacterSheet) sheets.push(myCharacterSheet);
      sheets.push(mapSheet);
    }

    const manualSheetViewers = room.manualSheetViewers || {};
    const manualSheets = new Set(Object.entries(manualSheetViewers)
      .filter(([, viewers]) => viewers.includes(myCharacter))
      .map(([sheetId]) => sheetId));
    const publicSheets = new Set(room.publicSheetIds || []);

    const assignedRoleNames = turnOrder
      .map((slot) => room.characterAssignments?.[slot])
      .filter((roleName): roleName is string => Boolean(roleName));

    const shareableNormalSheets = [
      ruleSheet,
      overviewSheet,
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
      .map(getCellSheet);

    const viewableSpecialSheets = (room.specialInvestigationSheets || [])
      .filter((sheet) => sheet.isPublic || sheet.viewers?.includes(myCharacter) || publicSheets.has(`special-investigation-${sheet.id}`) || manualSheets.has(`special-investigation-${sheet.id}`))
      .map(getSpecialSheet);

    if (room.phase === "ending") {
      const allInvestigationCards = (room.cells || []).map(getCellSheet);
      const allSpecialSheets = (room.specialInvestigationSheets || []).map(getSpecialSheet);
      const endingSheet = getEndingSheetById(room.endingSheetId || undefined);
      sheets.push(...allInvestigationCards, ...allSpecialSheets);
      if (endingSheet && !sheets.some((existing) => existing.id === endingSheet.id)) sheets.push(endingSheet);
    } else {
      sheets.push(...viewableInvestigationCards, ...viewableSpecialSheets);
    }

    return sheets;
  }, [room, isGm, myRoleName, myCharacter]);

  const activeSheet = availableSheets.find((sheet) => sheet.id === openSheetId);
  const activeSheetPageCount = activeSheet ? getSheetPageCount(activeSheet) : 1;

  const joinedSlots = turnOrder.filter((slot) => Boolean(room.players?.[slot]));
  const orderedSlots = room.investigationOrderDecided && room.investigationTurnOrder?.length
    ? room.investigationTurnOrder.filter((slot) => joinedSlots.includes(slot))
    : joinedSlots;

  const roleParticipantPairs = [
    {
      key: "GM",
      roleName: "GM",
      participantName: room.gmName,
      colorClass: "role-gm",
    },
    ...orderedSlots
      .map((slot) => {
        const roleName = room.characterAssignments?.[slot] || "未設定";
        return {
          key: slot,
          roleName,
          participantName: room.players?.[slot] || "未入室",
          colorClass: getRoleColorClass(roleName),
        };
      }),
  ];

  const openingHeading = "ルール説明";

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() !== "e") return;
      if (!openSheetId) return;

      event.preventDefault();
      setOpenSheetId(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [openSheetId]);

  useEffect(() => {
    if (isGm) return;

    setShowRoleReveal(true);
    const timerId = window.setTimeout(() => setShowRoleReveal(false), 4200);

    return () => window.clearTimeout(timerId);
  }, [isGm, myRoleName]);

  useEffect(() => {
    if (isGm) return;
    if (!room.ruleSheetDistributed) return;

    setShowRuleSheetReceiveWindow(true);
  }, [isGm, room.ruleSheetDistributed]);

  useEffect(() => {
    if (isGm) return;
    if (!room.overviewSheetDistributed) return;

    setShowOverviewSheetReceiveWindow(true);
  }, [isGm, room.overviewSheetDistributed]);

  useEffect(() => {
    if (isGm) return;
    if (!room.characterSheetsDistributed) return;

    setShowCharacterSheetReceiveWindow(true);
  }, [isGm, room.characterSheetsDistributed]);

  const toggleSheet = (sheetId: string) => {
    setIsImageMissing(false);
    setOpenSheetPageIndex(0);
    setSheetWindowPosition({ x: 0, y: 0 });
    setOpenSheetId((currentId) => currentId === sheetId ? null : sheetId);
  };

  const closeSheet = () => {
    setOpenSheetId(null);
  };

  const zoomSheet = (nextScale: number) => {
    setSheetScale(Math.min(400, Math.max(50, nextScale)));
  };


  const startSheetWindowDrag = (event: PointerEvent<HTMLElement>) => {
    const target = event.target as HTMLElement;
    if (target.closest("button") || target.closest(".sheet-image-stage")) return;
    if (event.button !== 0) return;

    setIsSheetWindowDragging(true);
    sheetWindowDragPointRef.current = { x: event.clientX, y: event.clientY };
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const moveSheetWindowDrag = (event: PointerEvent<HTMLElement>) => {
    if (!isSheetWindowDragging) return;

    const dx = event.clientX - sheetWindowDragPointRef.current.x;
    const dy = event.clientY - sheetWindowDragPointRef.current.y;
    setSheetWindowPosition((current) => ({ x: current.x + dx, y: current.y + dy }));
    sheetWindowDragPointRef.current = { x: event.clientX, y: event.clientY };
  };

  const stopSheetWindowDrag = (event: PointerEvent<HTMLElement>) => {
    if (!isSheetWindowDragging) return;
    setIsSheetWindowDragging(false);
    event.currentTarget.releasePointerCapture(event.pointerId);
  };

  const startSheetPan = (event: PointerEvent<HTMLDivElement>) => {
    if (event.button !== 0 && event.button !== 2) return;

    event.preventDefault();
    setIsSheetPanning(true);
    panPointRef.current = { x: event.clientX, y: event.clientY };
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const moveSheetPan = (event: PointerEvent<HTMLDivElement>) => {
    if (!isSheetPanning) return;

    event.preventDefault();
    const dx = event.clientX - panPointRef.current.x;
    const dy = event.clientY - panPointRef.current.y;
    event.currentTarget.scrollLeft -= dx;
    event.currentTarget.scrollTop -= dy;
    panPointRef.current = { x: event.clientX, y: event.clientY };
  };

  const stopSheetPan = (event: PointerEvent<HTMLDivElement>) => {
    if (!isSheetPanning) return;

    setIsSheetPanning(false);
    event.currentTarget.releasePointerCapture(event.pointerId);
  };

  const goToPreviousSheetPage = () => {
    if (!activeSheet || activeSheetPageCount <= 1) return;

    setIsImageMissing(false);
    setOpenSheetPageIndex((index) => Math.max(0, index - 1));
  };

  const goToNextSheetPage = () => {
    if (!activeSheet || activeSheetPageCount <= 1) return;

    setIsImageMissing(false);
    setOpenSheetPageIndex((index) => Math.min(activeSheetPageCount - 1, index + 1));
  };

  const handleSheetStageClick = (event: MouseEvent<HTMLDivElement>) => {
    if (!activeSheet || activeSheetPageCount <= 1) return;

    const target = event.target as HTMLElement;
    if (target.closest("button")) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const clickedX = event.clientX - rect.left;

    if (clickedX < rect.width / 2) {
      goToPreviousSheetPage();
    } else {
      goToNextSheetPage();
    }
  };

  return (
    <main className="app dark-game-app opening-page">
      {renderTitle()}

      <div className="opening-layout cinematic-layout">
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
            {availableSheets.map((sheet) => (
              <button
                key={sheet.id}
                className={`sheet-index-button ${openSheetId === sheet.id ? "active" : ""}`}
                onClick={() => toggleSheet(sheet.id)}
                aria-pressed={openSheetId === sheet.id}
              >
                <span>{sheet.title}</span>
                <small>{openSheetId === sheet.id ? "表示中 / クリックで閉じる" : "クリックで表示"}</small>
              </button>
            ))}
          </div>
        </aside>

        <section className="card dark-panel opening-main-panel permanent-opening-panel">
          <div className="section-kicker">OPENING</div>
          <h2>{openingHeading}</h2>

          <p className="opening-player-name">
            {isGm ? "GMとして進行中" : `あなたの名前：${playerName}`}
          </p>

          <p className="opening-description">
            GMの案内に従い、作品概要と進行ルールを確認してください。
          </p>

          {isGm && (
            <div className="opening-gm-control">
              {!room.ruleSheetDistributed && (
                <button className="primary-action-button" onClick={onDistributeRuleSheet}>
                  ルール説明シート配布
                </button>
              )}

              {room.ruleSheetDistributed && !room.overviewSheetDistributed && (
                <button className="primary-action-button" onClick={onDistributeOverviewSheet}>
                  作品概要シート配布
                </button>
              )}

              {room.ruleSheetDistributed && room.overviewSheetDistributed && !room.characterSheetsDistributed && (
                <button className="primary-action-button" onClick={onDistributeSheets}>
                  キャラシート配布
                </button>
              )}

              {room.ruleSheetDistributed && room.overviewSheetDistributed && room.characterSheetsDistributed && (
                <button className="primary-action-button" onClick={onNext}>
                  議論前半へ
                </button>
              )}
            </div>
          )}
        </section>

        <aside className="schedule-panel dark-side-panel">
          {roleParticipantPairs.length > 0 && (
            <div className="other-role-list" aria-label="役名と参加者名">
              {roleParticipantPairs.map((pair) => (
                <div className={`other-role-chip ${pair.colorClass}`} key={pair.key}>
                  {pair.roleName}：{pair.participantName}
                </div>
              ))}
            </div>
          )}

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
      </div>

      {activeSheet && (
        <div className="sheet-viewer-layer" role="dialog" aria-modal="false" aria-label={activeSheet.title}>
          <section
            className={`sheet-viewer-frame draggable-sheet-window ${isSheetWindowDragging ? "is-window-dragging" : ""}`}
            style={{ transform: `translate(${sheetWindowPosition.x}px, ${sheetWindowPosition.y}px)` }}
            onPointerDown={startSheetWindowDrag}
            onPointerMove={moveSheetWindowDrag}
            onPointerUp={stopSheetWindowDrag}
            onPointerCancel={stopSheetWindowDrag}
          >
            <div className="sheet-viewer-header">
              <div>
                <span className="section-kicker">RECEIVED SHEET</span>
                <h2>{activeSheet.title}</h2>
              </div>

              <div className="sheet-viewer-actions">
                {activeSheetPageCount > 1 && (
                  <div className="sheet-page-controls" aria-label="ページ切り替え">
                    <button onClick={goToPreviousSheetPage} disabled={openSheetPageIndex <= 0}>
                      ← 前のページ
                    </button>

                    <span>{openSheetPageIndex + 1} / {activeSheetPageCount}</span>

                    <button
                      onClick={goToNextSheetPage}
                      disabled={openSheetPageIndex >= activeSheetPageCount - 1}
                    >
                      次のページ →
                    </button>
                  </div>
                )}

                <div className="sheet-zoom-controls" aria-label="シートの拡大縮小">
                  <button onClick={() => zoomSheet(sheetScale - 25)} aria-label="縮小">−</button>
                  <span>{sheetScale}%</span>
                  <button onClick={() => zoomSheet(sheetScale + 25)} aria-label="拡大">＋</button>
                  <button onClick={() => zoomSheet(100)}>等倍</button>
                </div>

                {isGm && onShareSheetWithPlayer && onToggleSheetPublic && activeSheet && (
                  <div className="sheet-share-controls" aria-label="シート共有操作">
                    <button onClick={() => onToggleSheetPublic(activeSheet)}>
                      {activeSheet.kind === "special"
                        ? (room.specialInvestigationSheets?.find((item) => item.id === activeSheet.sourceId)?.isPublic ? "全体公開を戻す" : "全体公開")
                        : activeSheet.kind === "investigation"
                          ? (room.cells?.find((cell) => cell.id === activeSheet.sourceId)?.isPublic ? "全体公開を戻す" : "全体公開")
                          : (room.publicSheetIds?.includes(activeSheet.id) ? "全体公開を戻す" : "全体公開")}
                    </button>
                    {joinedSlots.map((slot) => {
                      const viewers = room.manualSheetViewers?.[activeSheet.id] || [];
                      const isSent = viewers.includes(slot);
                      return (
                        <button key={slot} onClick={() => onShareSheetWithPlayer(activeSheet, slot)}>
                          {isSent ? `${room.players?.[slot]}への送信を戻す` : `${room.players?.[slot]}に送る`}
                        </button>
                      );
                    })}
                  </div>
                )}

                <button className="sheet-close-button" onClick={closeSheet} aria-label="シートを閉じる">
                  閉じる
                </button>
              </div>
            </div>

            <div
              className={`sheet-image-stage ${isSheetPanning ? "is-panning" : ""}`}
              onPointerDown={startSheetPan}
              onPointerMove={moveSheetPan}
              onPointerUp={stopSheetPan}
              onPointerCancel={stopSheetPan}
              onContextMenu={(event) => event.preventDefault()}
              onClick={handleSheetStageClick}
            >
              {isImageMissing ? (
                <div className="sheet-image-placeholder">
                  <strong>シート画像が未配置です</strong>
                  <p>対応する画像を <code>public/sheets/</code> 以下に置くと、ここに表示されます。</p>
                </div>
              ) : (
                <div
                  className={`sheet-image-canvas ${activeSheet.fileType === "pdf" ? "is-pdf" : ""}`}
                  style={{ width: `${sheetScale}%` }}
                >
                  {activeSheet.fileType === "pdf" ? (
                    <iframe
                      key={`${activeSheet.id}-${openSheetPageIndex}`}
                      src={getSheetImageSrc(activeSheet, openSheetPageIndex)}
                      title={activeSheet.title}
                      className="sheet-pdf-frame"
                    />
                  ) : (
                    <img
                      src={getSheetImageSrc(activeSheet, openSheetPageIndex)}
                      alt={activeSheet.title}
                      className="overview-sheet-image"
                      draggable={false}
                      onError={() => setIsImageMissing(true)}
                    />
                  )}
                </div>
              )}
            </div>

            <p className="sheet-viewer-help">
              複数ページのシートは、画像の左半分クリックで前ページ、右半分クリックで次ページへ切り替えられます。閉じるボタン / Eキー / 左の捜査資料で閉じられます。
            </p>
          </section>
        </div>
      )}

      {showRuleSheetReceiveWindow && (
        <div className="receive-window-backdrop" role="dialog" aria-modal="true">
          <div className="receive-window dark-modal">
            <span className="section-kicker">SYSTEM MESSAGE</span>
            <h2>ルール説明シートを受け取りました</h2>
            <p>左側の捜査資料から確認できます。</p>
            <button className="primary-action-button" onClick={() => setShowRuleSheetReceiveWindow(false)}>
              確認
            </button>
          </div>
        </div>
      )}

      {showOverviewSheetReceiveWindow && (
        <div className="receive-window-backdrop" role="dialog" aria-modal="true">
          <div className="receive-window dark-modal">
            <span className="section-kicker">SYSTEM MESSAGE</span>
            <h2>作品概要シートを受け取りました</h2>
            <p>左側の捜査資料から確認できます。</p>
            <button className="primary-action-button" onClick={() => setShowOverviewSheetReceiveWindow(false)}>
              確認
            </button>
          </div>
        </div>
      )}

      {showCharacterSheetReceiveWindow && (
        <div className="receive-window-backdrop" role="dialog" aria-modal="true">
          <div className="receive-window dark-modal">
            <span className="section-kicker">SYSTEM MESSAGE</span>
            <h2>キャラシートを受け取りました</h2>
            <p>左側の捜査資料から、キャラクターシートと見取り図を確認できます。</p>
            <button className="primary-action-button" onClick={() => setShowCharacterSheetReceiveWindow(false)}>
              確認
            </button>
          </div>
        </div>
      )}

      {showRoleReveal && (
        <div className="role-reveal-splash" aria-live="polite">
          <div className="role-reveal-card">
            <span>あなたは</span>
            <strong>「{myRoleName}」</strong>
            <span>です</span>
          </div>
        </div>
      )}
    </main>
  );
}

export default OpeningScreen;
