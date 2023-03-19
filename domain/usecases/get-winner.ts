import { PlayerEnumeration } from "../enumerations/player";
import { BoardEntityInterface } from "../entities/board";
import { SquareEntityInterface } from "../entities/square";

export class GetWinnerUsecase {
  public execute(board: BoardEntityInterface): PlayerEnumeration | undefined {
    const winner: PlayerEnumeration = [PlayerEnumeration.Circle, PlayerEnumeration.Cross].find(player => {
      const rows: Array<Array<SquareEntityInterface>> = board.squares;

      const columns: Array<Array<SquareEntityInterface>> = Array.from(Array(board.squares[0].length)).map((column, columnIndex) => {
        return Array.from(Array(board.squares.length)).map((row, rowIndex) => {
          return board.squares[rowIndex][columnIndex];
        })
      })

      const firstDiagonal: Array<SquareEntityInterface> = Array.from(Array(board.squares.length)).map((row, rowIndex) => {
        return board.squares[rowIndex][rowIndex];
      })

      const secondDiagonal: Array<SquareEntityInterface> = Array.from(Array(board.squares.length)).map((row, rowIndex) => {
        return board.squares[rowIndex][board.squares.length - 1 - rowIndex];
      });

      const diagonals: Array<Array<SquareEntityInterface>> = [
        firstDiagonal,
        secondDiagonal
      ];

      const playerHasWonSomeRow: boolean = rows.some(row => {
        return row.every(column => {
          return column.player === player;
        })
      });

      const playerHasWonSomeColumn: boolean = columns.some(row => {
        return row.every(column => {
          return column.player === player;
        });
      });

      const playerHasWonSomeDiagonal: boolean = diagonals.some(row => {
        return row.every(columns => {
          return columns.player === player;
        });
      });

      return playerHasWonSomeRow || playerHasWonSomeColumn || playerHasWonSomeDiagonal;
    });

    if (winner) {
      return winner;
    }

    const everyoneHasPlayed: boolean = board.squares.every(row => {
      return row.every(column => {
        return column.player !== PlayerEnumeration.None;
      });
    });

    if (everyoneHasPlayed) {
      return PlayerEnumeration.None;
    }

    return winner;
  }
}
