import { BoardEntityInterface } from "@application/domain/entities/board";
import { PlayerEnumeration } from "@application/domain/enumerations/player";
import { RowLessThanZeroError } from "@application/domain/errors/row-less-than-zero";
import { ColumnLessThanZeroError } from "@application/domain/errors/column-less-than-zero";
import { RowGreaterThanBoardLengthError } from "@application/domain/errors/row-greater-than-board-length";
import { ColumnGreaterThanRowLengthError } from "@application/domain/errors/column-greater-than-row-length";
import { AlreadySelectedSquareError } from "@application/domain/errors/already-selected-square";
import { Possibility, Value, Issue } from "@application/domain/core/possibility";
import { SelectSquareRequestInterface } from "@application/domain/requests/select-square";

export class SelectSquareUsecase {
  public execute({ board, player, selectedRow, selectedColumn }: SelectSquareRequestInterface): Possibility<Error, BoardEntityInterface> {
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
