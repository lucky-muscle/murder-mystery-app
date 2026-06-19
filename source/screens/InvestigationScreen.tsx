import { useEffect, useMemo, useState } from "react";
import type { CSSProperties } from "react";
import type { Cell, Room } from "../gameTypes";
import { turnOrder } from "../gameConstants";

type InvestigationScreenProps = {
  room: Room;
  isGm: boolean;
  myCharacter: string;
  playerName: string;
  onClaimCell: (cellId: string) => void;
  onToggleCellPublic: (cellId: string) => void;
  onToggleCellPrivateShare: (cellId: string, targetSlot: string) => void;
  onTransferCellPrivateTalkTarget: (cellId: string, targetSlot: string) => void;
  onUseThunder: () => void;
  onAddThunder: () => void;
  onGoBreak: () => void;
  onDistributeAdditionalInfo: () => void;
  onGoInvestigation2: () => void;
  onGoDebate: () => void;
  onUpdateInvestigationOrder: (nextOrder: string[]) => void;
  onStartInvestigation: () => void;
  onStartPrivateTalk: (participantSlots: string[]) => void;
  onEndPrivateTalk: () => void;
  onGoReasoning: () => void;
  onGoVote?: () => void;
  onLeave?: () => void;
};

const investigationColumns = [
  { key: "A", label: "川岸道也", className: "cell-kawagishi" },
  { key: "B", label: "宮崎圭", className: "cell-miyazaki" },
  { key: "C", label: "緑野大地", className: "cell-midorino" },
  { key: "D", label: "黒坂秀樹", className: "cell-kurosaka" },
  { key: "E", label: "谷アリス", className: "cell-tani" },
  { key: "victim", label: "被害者の様子", className: "cell-victim" },
  { key: "villa", label: "山荘の様子", className: "cell-villa" },
] as const;

function getCellId(columnKey: string, rowNumber: number) {
  if (turnOrder.includes(columnKey)) return `item-${columnKey}-${rowNumber}`;
  return `${columnKey}-${rowNumber}`;
}

function getCellClass(cellId: string) {
  if (cellId.startsWith("item-A-")) return "cell-kawagishi";
  if (cellId.startsWith("item-B-")) return "cell-miyazaki";
  if (cellId.startsWith("item-C-")) return "cell-midorino";
  if (cellId.startsWith("item-D-")) return "cell-kurosaka";
  if (cellId.startsWith("item-E-")) return "cell-tani";
  if (cellId.startsWith("victim-")) return "cell-victim";
  if (cellId.startsWith("villa-")) return "cell-villa";
  return "";
}

function getCellColumnIndex(cellId: string) {
  if (cellId.startsWith("item-A-")) return 0;
  if (cellId.startsWith("item-B-")) return 1;
  if (cellId.startsWith("item-C-")) return 2;
  if (cellId.startsWith("item-D-")) return 3;
  if (cellId.startsWith("item-E-")) return 4;
  if (cellId.startsWith("victim-")) return 5;
  if (cellId.startsWith("villa-")) return 6;
  return -1;
}

function getCellRowNumber(cellId: string) {
  const match = cellId.match(/-(\d+)$/);
  return match ? Number(match[1]) : -1;
}

function getColumnRoleName(cellId: string) {
  const columnIndex = getCellColumnIndex(cellId);
  const roleNames = ["川岸道也", "宮崎圭", "緑野大地", "黒坂秀樹", "谷アリス"];
  return columnIndex >= 0 && columnIndex < roleNames.length ? roleNames[columnIndex] : null;
}

function getRoleColorClass(roleName: string | undefined) {
  if (roleName === "川岸道也") return "role-kawagishi";
  if (roleName === "宮崎圭") return "role-miyazaki";
  if (roleName === "緑野大地") return "role-midorino";
  if (roleName === "黒坂秀樹") return "role-kurosaka";
  if (roleName === "谷アリス") return "role-tani";
  return "role-unknown";
}

function isCellUnlocked(target: Cell, cells: Cell[]) {
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
}

function getOwnerParticipantName(room: Room, owner: string | null | undefined) {
  if (!owner) return "未取得";
  return room.players?.[owner] || room.characterAssignments?.[owner] || owner;
}


function InvestigationScreen({
  room,
  isGm,
  myCharacter,
  playerName,
  onClaimCell,
  onToggleCellPublic,
  onToggleCellPrivateShare,
  onTransferCellPrivateTalkTarget,
  onUseThunder,
  onAddThunder,
  onGoBreak,
  onDistributeAdditionalInfo,
  onGoInvestigation2,
  onGoDebate,
  onUpdateInvestigationOrder,
  onStartInvestigation,
  onStartPrivateTalk,
  onEndPrivateTalk,
  onGoReasoning,
  onGoVote,
}: InvestigationScreenProps) {
  const [openCellId, setOpenCellId] = useState<string | null>(null);
  const [isCardImageMissing, setIsCardImageMissing] = useState(false);
  const [showAdditionalInfoWindow, setShowAdditionalInfoWindow] = useState(false);
  const [localOrder, setLocalOrder] = useState<string[]>(room.investigationTurnOrder || turnOrder);
  const [showPrivateTalkDialog, setShowPrivateTalkDialog] = useState(false);
  const [privateTalkSelection, setPrivateTalkSelection] = useState<string[]>([]);
  const [showInvestigationStartSplash, setShowInvestigationStartSplash] = useState(false);
  const [showInvestigationEndSplash, setShowInvestigationEndSplash] = useState(false);

  const isBreak = room.phase === "break";
  const isDebate = room.phase === "debate";
  const isReasoning = room.phase === "reasoning";
  const investigationRound = room.investigationRound || 1;
  const isInvestigationStarted = Boolean(room.investigationStarted);
  const heading = isReasoning ? "推理" : isDebate ? "議論(密談不可)" : isBreak ? "休憩" : investigationRound === 2 ? "調査後半" : "調査前半";

  const joinedSlots = useMemo(
    () => turnOrder.filter((slot) => Boolean(room.players?.[slot])),
    [room.players]
  );

  const activeTurnOrder = useMemo(() => {
    const sourceOrder = room.investigationTurnOrder || joinedSlots;
    const filtered = sourceOrder.filter((slot) => joinedSlots.includes(slot));
    return filtered.length ? filtered : joinedSlots;
  }, [room.investigationTurnOrder, joinedSlots]);

  const currentTurnName =
    room.players?.[room.currentTurnCharacter] ||
    room.characterAssignments?.[room.currentTurnCharacter] ||
    room.currentTurnCharacter;

  const cellsById = useMemo(() => {
    return new Map(room.cells.map((cell) => [cell.id, cell]));
  }, [room.cells]);

  const thunderMarks = Array.from({ length: Math.max(0, Math.min(6, room.thunderCount)) });
  const openCell = openCellId ? cellsById.get(openCellId) : null;
  const talkMembers = room.privateTalk?.participants || [];
  const isMeInPrivateTalk = !isGm && talkMembers.includes(myCharacter);

  useEffect(() => {
    setLocalOrder(activeTurnOrder);
  }, [activeTurnOrder.join("|")]);

  useEffect(() => {
    if (isGm) return;
    if (!room.additionalInfoDistributed) return;
    setShowAdditionalInfoWindow(true);
  }, [isGm, room.additionalInfoDistributed]);

  useEffect(() => {
    if (!room.investigationStarted || !room.investigationStartedAt) return;
    setShowInvestigationStartSplash(true);
    const timerId = window.setTimeout(() => setShowInvestigationStartSplash(false), 2600);
    return () => window.clearTimeout(timerId);
  }, [room.investigationStartedAt]);

  useEffect(() => {
    if (!isReasoning) return;
    setShowInvestigationEndSplash(true);
    const timerId = window.setTimeout(() => setShowInvestigationEndSplash(false), 2600);
    return () => window.clearTimeout(timerId);
  }, [isReasoning]);

  const isPrivateSharedToMe = (cell: Cell | undefined) => {
    if (!cell || isGm) return false;
    if (!room.privateTalk?.participants?.includes(myCharacter)) return false;
    if (!cell.owner || !room.privateTalk.participants.includes(cell.owner)) return false;
    return Boolean(cell.privateViewers?.includes(myCharacter));
  };

  const canViewCell = (cell: Cell | undefined) => {
    if (!cell) return false;
    if (isGm) return true;
    return cell.owner === myCharacter || Boolean(cell.isPublic) || Boolean(cell.viewers?.includes(myCharacter)) || isPrivateSharedToMe(cell);
  };

  const canClaimCell = (cell: Cell | undefined) => {
    if (!cell) return false;
    if (isGm) return false;
    if (isBreak || isDebate || isReasoning) return false;
    if (!room.investigationStarted) return false;
    if ((room.thunderCount ?? 0) <= 0) return false;
    if (cell.owner) return false;
    if (room.currentTurnCharacter !== myCharacter) return false;
    const myRoleName = room.characterAssignments?.[myCharacter];
    if (getColumnRoleName(cell.id) === myRoleName) return false;
    return isCellUnlocked(cell, room.cells);
  };

  const openInvestigationCard = (cell: Cell) => {
    setIsCardImageMissing(false);
    setOpenCellId(cell.id);
  };

  const handleCellClick = (cell: Cell | undefined) => {
    if (!cell) return;

    if (canViewCell(cell)) {
      openInvestigationCard(cell);
      return;
    }

    if (canClaimCell(cell)) {
      onClaimCell(cell.id);
    }
  };

  const canPressCell = (cell: Cell | undefined) => {
    if (!cell) return false;
    if (!isGm && canViewCell(cell)) return true;
    if (isReasoning) return canViewCell(cell);
    if ((isBreak || isDebate) && !isGm) return false;
    if (!room.investigationStarted && !isGm) return false;
    return canViewCell(cell) || canClaimCell(cell);
  };


  const canTogglePublic = Boolean(
    openCell?.owner && (isGm || openCell.owner === myCharacter)
  );

  const privateShareTarget = useMemo(() => {
    if (!openCell?.owner || !room.privateTalk?.participants?.length) return undefined;
    if (!room.privateTalk.participants.includes(openCell.owner)) return undefined;
    const otherSlot = room.privateTalk.participants.find((slot) => slot !== openCell.owner);
    if (!otherSlot) return undefined;
    if (!isGm && openCell.owner !== myCharacter) return undefined;
    return otherSlot;
  }, [openCell, room.privateTalk, isGm, myCharacter]);

  const handleOrderSelect = (index: number, slot: string) => {
    const nextOrder = [...localOrder];
    nextOrder[index] = slot;
    setLocalOrder(nextOrder);
  };

  const decideInvestigationOrder = () => {
    const selectedOrder = localOrder.slice(0, joinedSlots.length);
    const validSelections = selectedOrder.filter((slot) => joinedSlots.includes(slot));
    const uniqueSelections = new Set(validSelections);

    if (validSelections.length !== joinedSlots.length || uniqueSelections.size !== joinedSlots.length) {
      alert("調査順番で参加者が重複しています。参加者全員が一度ずつ入るように設定してください");
      return;
    }

    onUpdateInvestigationOrder(selectedOrder);
  };

  const togglePrivateTalkSelection = (slot: string) => {
    setPrivateTalkSelection((current) => {
      if (current.includes(slot)) return current.filter((selected) => selected !== slot);
      if (current.length >= 2) return [current[1], slot];
      return [...current, slot];
    });
  };

  const confirmPrivateTalk = () => {
    if (privateTalkSelection.length !== 2) {
      alert("密談する二人を選んでください");
      return;
    }
    onStartPrivateTalk(privateTalkSelection);
    setShowPrivateTalkDialog(false);
    setPrivateTalkSelection([]);
  };

  if (!isBreak && !isDebate && investigationRound === 1 && !room.investigationOrderDecided) {
    return (
      <section className="card dark-panel investigation-card investigation-setup-panel">
        <div className="section-kicker">INVESTIGATION SETUP</div>
        <h2>{heading}</h2>

        {isGm ? (
          <div className="order-setup-box">
            <h3>調査する順番を決めてください</h3>
            <p className="muted-text">全員が一度ずつ入るように順番を設定してください。</p>

            <div className="order-select-list">
              {joinedSlots.map((_, index) => (
                <label className="order-select-row" key={index}>
                  <span>{index + 1}番目</span>
                  <select value={localOrder[index] || ""} onChange={(event) => handleOrderSelect(index, event.target.value)}>
                    <option value="">選択</option>
                    {joinedSlots.map((slot) => (
                      <option value={slot} key={slot}>
                        {room.players?.[slot]}（{room.characterAssignments?.[slot] || slot}）
                      </option>
                    ))}
                  </select>
                </label>
              ))}
            </div>

            <div className="investigation-actions-row gm-investigation-actions">
              <button className="primary-action-button" onClick={decideInvestigationOrder}>順番決定</button>
            </div>
          </div>
        ) : (
          <div className="waiting-investigation-start-box">
            <strong>お待ちください</strong>
          </div>
        )}
      </section>
    );
  }

  return (
    <section className={`card dark-panel investigation-card investigation-board-panel ${isBreak ? "is-break" : ""} ${isDebate ? "is-debate" : ""} ${isReasoning ? "is-reasoning" : ""}`}>
      <div className="investigation-header-row">
        <div className="investigation-heading-block">
          <div className="section-kicker">INVESTIGATION</div>
          <h2>{heading}</h2>
          <p className="muted-text">
            {isGm ? "GMとして進行中" : `あなたの名前：${playerName}`}
          </p>
        </div>

        <div className="investigation-status-area">
          {!isBreak && !isDebate && !isReasoning && (
            <div className="turn-status-card">
              <span className="info-label">現在の調査ターン</span>
              <strong>{currentTurnName}</strong>
            </div>
          )}

          <div className="thunder-icons" aria-label={`雷 ${room.thunderCount}個`}>
            {thunderMarks.map((_, index) => (
              <span key={index} aria-hidden="true">⚡</span>
            ))}
          </div>
        </div>
      </div>

      {!isBreak && !isDebate && !isReasoning && !isInvestigationStarted && (
        <div className="board-start-pending-note">
          <strong>調査開始前</strong>
          <span>GMが調査開始を押すまで、参加者は調査マスに触れません。</span>
        </div>
      )}

      {!isDebate && room.privateTalk?.participants?.length === 2 && (
        <div className={`private-talk-banner ${isMeInPrivateTalk ? "active-for-me" : ""}`}>
          <strong>密談中</strong>
          <span>
            {room.privateTalk.participants.map((slot) => `${room.characterAssignments?.[slot] || slot}：${room.players?.[slot]}`).join(" / ")}
          </span>
          {isMeInPrivateTalk && <em>あなたは密談中です。所有カードを密談相手だけに見せられます。</em>}
        </div>
      )}

      {isBreak && (
        <div className="break-notice-box">
          <strong>休憩中</strong>
          <p>休憩中は作品内容の会話は禁止です。</p>
          <p>追加情報が配布されるまで、参加者は調査カードに触れません。</p>
        </div>
      )}

      <div className="investigation-grid-wrap">
        <div className="investigation-board-grid" aria-label="調査マス">
          {[1, 2, 3, 4].flatMap((rowNumber) =>
            investigationColumns.map((column) => {
              const cellId = getCellId(column.key, rowNumber);
              const cell = cellsById.get(cellId);
              const isOwnedByMe = cell?.owner === myCharacter;
              const isClaimed = Boolean(cell?.owner);
              const isPublic = Boolean(cell?.isPublic);
              const isPrivateShared = Boolean(
                room.privateTalk?.participants?.length === 2 &&
                cell?.privateViewers?.some((slot) => room.privateTalk?.participants.includes(slot))
              );
              const isViewable = canViewCell(cell);
              const isUnlocked = cell ? isCellUnlocked(cell, room.cells) : false;
              const canUnlockByThunder = (room.thunderCount ?? 0) > 0;
              const myRoleName = room.characterAssignments?.[myCharacter];
              const isOwnColumn = cell ? getColumnRoleName(cell.id) === myRoleName : false;
              const ownerName = getOwnerParticipantName(room, cell?.owner);
              const ownerRoleColorClass = getRoleColorClass(cell?.owner ? room.characterAssignments?.[cell.owner] : undefined);
              const canPress = canPressCell(cell);
              const cellStyle = isViewable && cell?.imageSrc
                ? ({ "--cell-image": `url(${cell.imageSrc})` } as CSSProperties)
                : undefined;

              return (
                <button
                  key={cellId}
                  className={`investigation-cell-square ${getCellClass(cellId)} ${isClaimed ? "claimed" : ""} ${isOwnedByMe ? "mine" : ""} ${isPublic ? "public" : ""} ${isPrivateShared ? "private-shared" : ""} ${isViewable ? "viewable" : ""} ${isUnlocked ? "unlocked" : "locked"} ${isOwnColumn ? "own-column" : ""} `}
                  disabled={!canPress}
                  onClick={() => handleCellClick(cell)}
                  title={isClaimed ? "取得済み" : !canUnlockByThunder ? "雷がありません" : isUnlocked ? "取得可能" : "未開放"}
                  style={cellStyle}
                >
                  <span>{cell?.label || "未設定"}</span>
                  {isClaimed && <i className={`cell-owner-marker ${ownerRoleColorClass}`} aria-label={`取得者：${ownerName}`} />}
                  {isPublic && <em className="cell-public-badge">公開中</em>}
                  {isPrivateShared && <em className="cell-private-badge">密談共有</em>}
                  {!isClaimed && <small className="cell-owner-badge">{!canUnlockByThunder ? "雷なし" : isUnlocked ? "未取得" : "未開放"}</small>}
                </button>
              );
            })
          )}
        </div>

        <div className="investigation-board-labels" aria-label="調査列の対応表">
          {investigationColumns.map((column) => (
            <div className={`board-column-label ${column.className}`} key={column.key}>
              {column.label}
            </div>
          ))}
        </div>
      </div>

      {isGm ? (
        <div className="investigation-actions-row gm-investigation-actions">
          {isReasoning ? (
            <div className="compact-actions">
              <button className="primary-action-button" onClick={onGoVote}>投票へ</button>
            </div>
          ) : isDebate ? (
            <div className="compact-actions">
              <button className="primary-action-button" onClick={onGoReasoning}>推理へ</button>
            </div>
          ) : (
            <>
              <div className="compact-actions">
                <button onClick={onUseThunder} disabled={room.thunderCount <= 0}>
                  雷を消す
                </button>
                <button onClick={onAddThunder} disabled={room.thunderCount >= 6}>
                  雷を追加
                </button>
              </div>

              <div className="compact-actions">
                {room.privateTalk?.participants?.length === 2 ? (
                  <button onClick={onEndPrivateTalk}>密談解除</button>
                ) : (
                  <button onClick={() => setShowPrivateTalkDialog(true)}>密談</button>
                )}
              </div>

              {isBreak ? (
                <div className="compact-actions">
                  {!room.additionalInfoDistributed && (
                    <button className="primary-action-button" onClick={onDistributeAdditionalInfo}>
                      追加情報を配布
                    </button>
                  )}
                  {room.additionalInfoDistributed && (
                    <button className="primary-action-button" onClick={onGoInvestigation2}>
                      調査後半へ進む
                    </button>
                  )}
                </div>
              ) : !isInvestigationStarted ? (
                <button className="primary-action-button" onClick={onStartInvestigation}>
                  調査開始
                </button>
              ) : investigationRound === 1 ? (
                <button className="primary-action-button" onClick={onGoBreak}>
                  休憩へ
                </button>
              ) : (
                <button className="primary-action-button" onClick={onGoDebate}>
                  議論時間へ
                </button>
              )}
            </>
          )}
        </div>
      ) : (
        <div className="investigation-actions-row investigation-actions-spacer" aria-hidden="true" />
      )}

      {openCell && (
        <div className="investigation-card-viewer-layer" role="dialog" aria-modal="false" aria-label={openCell.label}>
          <section className="investigation-card-viewer-frame dark-modal">
            <div className="investigation-card-viewer-header">
              <div>
                <span className="section-kicker">INVESTIGATION CARD</span>
                <h2>{openCell.label}</h2>
                {openCell.isPublic && <p className="public-state-text">全体公開中</p>}
                {room.privateTalk?.participants?.length === 2 && openCell.privateViewers?.length ? (
                  <p className="public-state-text">密談共有中：{openCell.privateViewers.map((slot) => room.players?.[slot] || slot).join("、")}</p>
                ) : null}
              </div>
              <div className="investigation-card-viewer-actions">
                {canTogglePublic && (
                  <button onClick={() => onToggleCellPublic(openCell.id)}>
                    {openCell.isPublic ? "全体公開を戻す" : "全体公開する"}
                  </button>
                )}
                {privateShareTarget && (
                  <>
                    <button onClick={() => onToggleCellPrivateShare(openCell.id, privateShareTarget)}>
                      {openCell.privateViewers?.includes(privateShareTarget)
                        ? `${room.players?.[privateShareTarget]}への密談共有を戻す`
                        : `${room.players?.[privateShareTarget]}にだけ見せる`}
                    </button>
                    <button onClick={() => onTransferCellPrivateTalkTarget(openCell.id, privateShareTarget)}>
                      {`${room.players?.[privateShareTarget]}に譲渡する`}
                    </button>
                  </>
                )}
                <button onClick={() => setOpenCellId(null)}>閉じる</button>
              </div>
            </div>

            <div className="investigation-card-image-stage">
              {isCardImageMissing || !openCell.imageSrc ? (
                <div className="sheet-image-placeholder">
                  <strong>調査カード画像が未配置です</strong>
                  <p><code>public/sheets/investigation/{openCell.id}.png</code> を置くと表示されます。</p>
                  <p>{openCell.content}</p>
                </div>
              ) : (
                <img
                  src={openCell.imageSrc}
                  alt={openCell.label}
                  className="investigation-card-image"
                  draggable={false}
                  onError={() => setIsCardImageMissing(true)}
                />
              )}
            </div>
          </section>
        </div>
      )}

      {showPrivateTalkDialog && (
        <div className="receive-window-backdrop" role="dialog" aria-modal="true">
          <div className="receive-window dark-modal private-talk-dialog">
            <span className="section-kicker">PRIVATE TALK</span>
            <h2>密談する二人を選んでください</h2>
            <div className="private-talk-select-list">
              {joinedSlots.map((slot) => (
                <button
                  key={slot}
                  className={privateTalkSelection.includes(slot) ? "selected" : ""}
                  onClick={() => togglePrivateTalkSelection(slot)}
                >
                  {room.characterAssignments?.[slot] || slot}：{room.players?.[slot]}
                </button>
              ))}
            </div>
            <div className="compact-actions">
              <button className="primary-action-button" onClick={confirmPrivateTalk}>決定</button>
              <button onClick={() => setShowPrivateTalkDialog(false)}>キャンセル</button>
            </div>
          </div>
        </div>
      )}

      {showAdditionalInfoWindow && (
        <div className="receive-window-backdrop" role="dialog" aria-modal="true">
          <div className="receive-window dark-modal">
            <span className="section-kicker">SYSTEM MESSAGE</span>
            <h2>追加情報シートを受け取りました</h2>
            <p>左側の捜査資料から、追加情報シートを確認できます。</p>
            <button className="primary-action-button" onClick={() => setShowAdditionalInfoWindow(false)}>
              確認
            </button>
          </div>
        </div>
      )}

      {showInvestigationStartSplash && (
        <div className="role-reveal-splash investigation-start-splash" aria-live="polite">
          <div className="role-reveal-card">
            <strong>{investigationRound === 2 ? "後半開始" : "調査開始"}</strong>
          </div>
        </div>
      )}

      {showInvestigationEndSplash && (
        <div className="role-reveal-splash investigation-end-splash" aria-live="polite">
          <div className="role-reveal-card">
            <strong>調査終了</strong>
          </div>
        </div>
      )}
    </section>
  );
}

export default InvestigationScreen;
