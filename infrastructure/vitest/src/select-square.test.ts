import { it, expect } from "vitest";
import { PlayerEnumeration } from "../../../domain/enumerations/player";
import { SelectSquareUsecase } from "../../../domain/usecases/select-square";

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

    expect(newBoard).toStrictEqual({
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

    expect(newBoard).toStrictEqual({
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