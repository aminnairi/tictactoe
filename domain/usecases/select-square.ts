import { BoardEntityInterface } from "../entities/board";
import { SquareEntityInterface } from "../entities/square";
import { PlayerEnumeration } from "../enumerations/player";
import { RowLessThanZeroError } from "../errors/row-less-than-zero";
import { ColumnLessThanZeroError } from "../errors/column-less-than-zero";
import { RowGreaterThanBoardLengthError } from "../errors/row-greater-than-board-length";
import { ColumnGreaterThanRowLengthError } from "../errors/column-greater-than-row-length";
import { AlreadySelectedSquareError } from "../errors/already-selected-square";

export class SelectSquareUsecase {
  public execute(board: BoardEntityInterface, player: PlayerEnumeration, selectedRow: number, selectedColumn: number): BoardEntityInterface {
    if (selectedRow < 0) {
      throw new RowLessThanZeroError("Row cannot be less than zero");
    }

    if (selectedColumn < 0) {
      throw new ColumnLessThanZeroError("Column cannot be less than zero");
    }

    if (selectedRow > board.squares.length) {
      throw new RowGreaterThanBoardLengthError("Row cannot be greater than the board length");
    }

    return {
      ...board,
      squares: board.squares.map((row, rowIndex) => {
        if (selectedColumn > row.length) {
          throw new ColumnGreaterThanRowLengthError("Column cannot be greater than the row length");
        }

        return row.map((column, columnIndex) => {
          if (rowIndex === selectedRow && columnIndex === selectedColumn) {
            if (column.player !== PlayerEnumeration.None) {
              throw new AlreadySelectedSquareError("Square has already been selected");
            }

            return {
              ...column,
              player
            };
          }

          return column;
        });
      })
    };
  }
}
