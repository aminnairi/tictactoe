import { it, expect } from "vitest";
import { CreateBoardUsecase } from "@application/domain/usecases/create-board";

it("should return a board of 3x3", () => {
    const createBoardUsecase = new CreateBoardUsecase();
    const board = createBoardUsecase.execute({ rows: 3, columns: 3 });

    expect(board).toStrictEqual({
        squares: [
            [
                { player: "NONE" },
                { player: "NONE" },
                { player: "NONE" }
            ],
            [
                { player: "NONE" },
                { player: "NONE" },
                { player: "NONE" }
            ],
            [
                { player: "NONE" },
                { player: "NONE" },
                { player: "NONE" }
            ]
        ]
    });
})