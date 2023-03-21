import { it, expect } from "vitest";
import { PlayerEnumeration } from "@application/domain/enumerations/player";
import { AlreadySelectedSquareError } from "@application/domain/errors/already-selected-square";
import { ColumnGreaterThanRowLengthError } from "@application/domain/errors/column-greater-than-row-length";
import { ColumnLessThanZeroError } from "@application/domain/errors/column-less-than-zero";
import { RowGreaterThanBoardLengthError } from "@application/domain/errors/row-greater-than-board-length";
import { RowLessThanZeroError } from "@application/domain/errors/row-less-than-zero";
import { SelectSquareUsecase } from "@application/domain/usecases/select-square";

it("should return an error when selecting a row below zero", () => {
    const selectSquareUsecase = new SelectSquareUsecase();

    const board = {
        squares: [[]]
    };

    expect(selectSquareUsecase.execute(board, PlayerEnumeration.Circle, -1, 0).withError()).toBeInstanceOf(RowLessThanZeroError);
});

it("should throw an error when selecting a row outside of the board", () => {
    const selectSquareUsecase = new SelectSquareUsecase();

    const board = {
        squares: [[]]
    };

    expect(selectSquareUsecase.execute(board, PlayerEnumeration.Circle, 10, 0).withError()).toBeInstanceOf(RowGreaterThanBoardLengthError);
});

it("should throw an error when selecting a column below zero", () => {
    const selectSquareUsecase = new SelectSquareUsecase();

    const board = {
        squares: [[]]
    };

    expect(selectSquareUsecase.execute(board, PlayerEnumeration.Circle, 0, -1).withError()).toBeInstanceOf(ColumnLessThanZeroError);
});

it("should throw an error when selecting a column oustdide the board", () => {
    const selectSquareUsecase = new SelectSquareUsecase();

    const board = {
        squares: [[]]
    };

    expect(selectSquareUsecase.execute(board, PlayerEnumeration.Circle, 0, 10).withError()).toBeInstanceOf(ColumnGreaterThanRowLengthError);
});

it("should throw an error when selecting a column already selected", () => {
    const selectSquareUsecase = new SelectSquareUsecase();

    const board = {
        squares: [[{player: PlayerEnumeration.Circle}]]
    };

    expect(selectSquareUsecase.execute(board, PlayerEnumeration.Circle, 0, 0).withError()).toBeInstanceOf(AlreadySelectedSquareError);
});

it("should work when selecting as circle", () => {
    const selectSquareUsecase = new SelectSquareUsecase();

    const board = {
        squares: [
            [
                { player: PlayerEnumeration.None },
                { player: PlayerEnumeration.None },
                { player: PlayerEnumeration.None }
            ],
            [
                { player: PlayerEnumeration.None },
                { player: PlayerEnumeration.None },
                { player: PlayerEnumeration.None }
            ],
            [
                { player: PlayerEnumeration.None },
                { player: PlayerEnumeration.None },
                { player: PlayerEnumeration.None }
            ]
        ]
    }

    const newBoard = selectSquareUsecase.execute(board, PlayerEnumeration.Circle, 0, 0);

    expect(newBoard.withDefault(board)).toStrictEqual({
        squares: [
            [
                { player: PlayerEnumeration.Circle },
                { player: PlayerEnumeration.None },
                { player: PlayerEnumeration.None }
            ],
            [
                { player: PlayerEnumeration.None },
                { player: PlayerEnumeration.None },
                { player: PlayerEnumeration.None }
            ],
            [
                { player: PlayerEnumeration.None },
                { player: PlayerEnumeration.None },
                { player: PlayerEnumeration.None }
            ]
        ]
    });
});

it("should work when selecting as cross", () => {
    const selectSquareUsecase = new SelectSquareUsecase();

    const board = {
        squares: [
            [
                { player: PlayerEnumeration.None },
                { player: PlayerEnumeration.None },
                { player: PlayerEnumeration.None }
            ],
            [
                { player: PlayerEnumeration.None },
                { player: PlayerEnumeration.None },
                { player: PlayerEnumeration.None }
            ],
            [
                { player: PlayerEnumeration.None },
                { player: PlayerEnumeration.None },
                { player: PlayerEnumeration.None }
            ]
        ]
    }

    const newBoard = selectSquareUsecase.execute(board, PlayerEnumeration.Cross, 0, 0);

    expect(newBoard.withDefault(board)).toStrictEqual({
        squares: [
            [
                { player: PlayerEnumeration.Cross },
                { player: PlayerEnumeration.None },
                { player: PlayerEnumeration.None }
            ],
            [
                { player: PlayerEnumeration.None },
                { player: PlayerEnumeration.None },
                { player: PlayerEnumeration.None }
            ],
            [
                { player: PlayerEnumeration.None },
                { player: PlayerEnumeration.None },
                { player: PlayerEnumeration.None }
            ]
        ]
    });
});