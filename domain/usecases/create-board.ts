import { BoardEntityInterface } from "@application/domain/entities/board";
import { PlayerEnumeration } from "@application/domain/enumerations/player";
import { CreateBoardRequestInterface } from "@application/domain/requests/create-board";

export class CreateBoardUsecase {
  public execute({ rows, columns }: CreateBoardRequestInterface): BoardEntityInterface {
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
