import { BoardEntityInterface } from "../entities/board";
import { PlayerEnumeration } from "../enumerations/player";

export interface SelectSquareRequestInterface {
    board: BoardEntityInterface;
    player: PlayerEnumeration;
    selectedRow: number;
    selectedColumn: number;
}