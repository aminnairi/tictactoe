import { PlayerEnumeration } from "../enumerations/player";
import { BoardEntityInterface } from "../entities/board";

export class GetWinnerUsecase {
  public execute(board: BoardEntityInterface): PlayerEnumeration | undefined {
    return [PlayerEnumeration.Circle, PlayerEnumeration.Cross].find(player => {
      return board.squares.some(row => {
        return row.every(column => {
          return column.player === player;
        })
      });
    });
  }
}
