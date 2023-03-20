import { BoardEntityInterface } from "../entities/board";
import { PlayerEnumeration } from "../enumerations/player";
import { RowLessThanZeroError } from "../errors/row-less-than-zero";
import { ColumnLessThanZeroError } from "../errors/column-less-than-zero";
import { RowGreaterThanBoardLengthError } from "../errors/row-greater-than-board-length";
import { ColumnGreaterThanRowLengthError } from "../errors/column-greater-than-row-length";
import { AlreadySelectedSquareError } from "../errors/already-selected-square";
import { Possibility, Value, Issue } from "../core/result";

export class SelectSquareUsecase {
  public execute(board: BoardEntityInterface, player: PlayerEnumeration, selectedRow: number, selectedColumn: number): Possibility<Error, BoardEntityInterface> {
    if (selectedRow < 0) {
      return new Issue(new RowLessThanZeroError("Row cannot be less than zero"));
    }

    if (selectedColumn < 0) {
      return new Issue(new ColumnLessThanZeroError("Column cannot be less than zero"));
    }

    if (selectedRow > board.squares.length) {
      return new Issue(new RowGreaterThanBoardLengthError("Row cannot be greater than the board length"));
    }

    const someSquareHasAlreadyBeenSelected = board.squares.some((row, rowIndex) => {
      return row.some((column, columnIndex) => {
        return rowIndex === selectedRow
          && columnIndex === selectedColumn
          && column.player !== PlayerEnumeration.None;
      });
    });

    if (someSquareHasAlreadyBeenSelected) {
      return new Issue(new AlreadySelectedSquareError("Square has already been selected"));
    }

    const someColumnIsGreaterThanTheBoard = board.squares.some((row, rowIndex) => {
      return rowIndex === selectedRow && selectedColumn >= row.length;
    });

    if (someColumnIsGreaterThanTheBoard) {
      return new Issue(new ColumnGreaterThanRowLengthError("Column cannot be greater than the row length"));
    }

    return new Value({
      ...board,
      squares: board.squares.map((row, rowIndex) => {
        return row.map((column, columnIndex) => {
          if (rowIndex === selectedRow && columnIndex === selectedColumn) {
            return {
              ...column,
              player
            };
          }

          return column;
        });
      })
    });
  }
}
