import { it, expect } from "vitest";
import { GetWinnerUsecase } from "@application/domain/usecases/get-winner";
import { PlayerEnumeration } from "@application/domain/enumerations/player";

it("should return the winner of the first row", () => {
    const getWinnerUsecasee = new GetWinnerUsecase();

    const board = {
        squares: [
            [
                { player: PlayerEnumeration.Circle },
                { player: PlayerEnumeration.Circle },
                { player: PlayerEnumeration.Circle }
            ],
            [
                { player: PlayerEnumeration.Cross },
                { player: PlayerEnumeration.Cross },
                { player: PlayerEnumeration.Circle }
            ],
            [
                { player: PlayerEnumeration.Cross },
                { player: PlayerEnumeration.Circle },
                { player: PlayerEnumeration.Cross }
            ]
        ]
    };

    const winner = getWinnerUsecasee.execute({ board });

    expect(winner).toEqual(PlayerEnumeration.Circle);
});

it("should return the winner of the second row", () => {
    const getWinnerUsecasee = new GetWinnerUsecase();

    const board = {
        squares: [
            [
                { player: PlayerEnumeration.Cross },
                { player: PlayerEnumeration.Cross },
                { player: PlayerEnumeration.Circle }
            ],
            [
                { player: PlayerEnumeration.Circle },
                { player: PlayerEnumeration.Circle },
                { player: PlayerEnumeration.Circle }
            ],
            [
                { player: PlayerEnumeration.Cross },
                { player: PlayerEnumeration.Circle },
                { player: PlayerEnumeration.Cross }
            ]
        ]
    };

    const winner = getWinnerUsecasee.execute({ board });

    expect(winner).toEqual(PlayerEnumeration.Circle);
});

it("should return the winner of the third row", () => {
    const getWinnerUsecasee = new GetWinnerUsecase();

    const board = {
        squares: [
            [
                { player: PlayerEnumeration.Cross },
                { player: PlayerEnumeration.Circle },
                { player: PlayerEnumeration.Cross }
            ],
            [
                { player: PlayerEnumeration.Cross },
                { player: PlayerEnumeration.Cross },
                { player: PlayerEnumeration.Circle }
            ],
            [
                { player: PlayerEnumeration.Circle },
                { player: PlayerEnumeration.Circle },
                { player: PlayerEnumeration.Circle }
            ]
        ]
    };

    const winner = getWinnerUsecasee.execute({ board });

    expect(winner).toEqual(PlayerEnumeration.Circle);
});

it("should return the winner of the first column", () => {
    const getWinnerUsecasee = new GetWinnerUsecase();

    const board = {
        squares: [
            [
                { player: PlayerEnumeration.Cross },
                { player: PlayerEnumeration.Circle },
                { player: PlayerEnumeration.Cross }
            ],
            [
                { player: PlayerEnumeration.Cross },
                { player: PlayerEnumeration.Circle },
                { player: PlayerEnumeration.Circle }
            ],
            [
                { player: PlayerEnumeration.Cross },
                { player: PlayerEnumeration.Cross },
                { player: PlayerEnumeration.Circle }
            ]
        ]
    };

    const winner = getWinnerUsecasee.execute({ board });

    expect(winner).toEqual(PlayerEnumeration.Cross);
});

it("should return the winner of the second column", () => {
    const getWinnerUsecasee = new GetWinnerUsecase();

    const board = {
        squares: [
            [
                { player: PlayerEnumeration.Circle },
                { player: PlayerEnumeration.Cross },
                { player: PlayerEnumeration.Cross }
            ],
            [
                { player: PlayerEnumeration.Circle },
                { player: PlayerEnumeration.Cross },
                { player: PlayerEnumeration.Circle }
            ],
            [
                { player: PlayerEnumeration.Cross },
                { player: PlayerEnumeration.Cross },
                { player: PlayerEnumeration.Circle }
            ]
        ]
    };

    const winner = getWinnerUsecasee.execute({ board });

    expect(winner).toEqual(PlayerEnumeration.Cross);
});

it("should return the winner of the third column", () => {
    const getWinnerUsecasee = new GetWinnerUsecase();

    const board = {
        squares: [
            [
                { player: PlayerEnumeration.Circle },
                { player: PlayerEnumeration.Cross },
                { player: PlayerEnumeration.Cross }
            ],
            [
                { player: PlayerEnumeration.Circle },
                { player: PlayerEnumeration.Circle },
                { player: PlayerEnumeration.Cross }
            ],
            [
                { player: PlayerEnumeration.Cross },
                { player: PlayerEnumeration.Circle },
                { player: PlayerEnumeration.Cross }
            ]
        ]
    };

    const winner = getWinnerUsecasee.execute({ board });

    expect(winner).toEqual(PlayerEnumeration.Cross);
});

it("should return the winner of the first diagonal", () => {
    const getWinnerUsecasee = new GetWinnerUsecase();

    const board = {
        squares: [
            [
                { player: PlayerEnumeration.Circle },
                { player: PlayerEnumeration.Cross },
                { player: PlayerEnumeration.Cross }
            ],
            [
                { player: PlayerEnumeration.Circle },
                { player: PlayerEnumeration.Circle },
                { player: PlayerEnumeration.Cross }
            ],
            [
                { player: PlayerEnumeration.Cross },
                { player: PlayerEnumeration.Cross },
                { player: PlayerEnumeration.Circle }
            ]
        ]
    };

    const winner = getWinnerUsecasee.execute({ board });

    expect(winner).toEqual(PlayerEnumeration.Circle);
});

it("should return the winner of the second diagonal", () => {
    const getWinnerUsecasee = new GetWinnerUsecase();

    const board = {
        squares: [
            [
                { player: PlayerEnumeration.Cross },
                { player: PlayerEnumeration.Cross },
                { player: PlayerEnumeration.Circle }
            ],
            [
                { player: PlayerEnumeration.Circle },
                { player: PlayerEnumeration.Circle },
                { player: PlayerEnumeration.Cross }
            ],
            [
                { player: PlayerEnumeration.Circle },
                { player: PlayerEnumeration.Cross },
                { player: PlayerEnumeration.Cross }
            ]
        ]
    };

    const winner = getWinnerUsecasee.execute({ board });

    expect(winner).toEqual(PlayerEnumeration.Circle);
});

it("should return no winner", () => {
    const getWinnerUsecasee = new GetWinnerUsecase();

    const board = {
        squares: [
            [
                { player: PlayerEnumeration.Circle },
                { player: PlayerEnumeration.Cross },
                { player: PlayerEnumeration.Circle }
            ],
            [
                { player: PlayerEnumeration.Circle },
                { player: PlayerEnumeration.Cross },
                { player: PlayerEnumeration.Cross }
            ],
            [
                { player: PlayerEnumeration.Cross },
                { player: PlayerEnumeration.Circle },
                { player: PlayerEnumeration.Cross }
            ]
        ]
    };

    const winner = getWinnerUsecasee.execute({ board });

    expect(winner).toEqual(PlayerEnumeration.None);
});