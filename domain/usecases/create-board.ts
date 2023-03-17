import { BoardEntityInterface } from "../entities/board";
import { PlayerEnumeration } from "../enumerations/player";

export class CreateBoardUsecase {
  public execute(rows: number, columns: number): BoardEntityInterface {
    return {
      squares: Array.from(Array(rows)).map(() => {
        return Array.from(Array(columns)).map(() => {
          return {
            player: PlayerEnumeration.None
          };
        })
      })
    };
  }
}
