import { signal } from "@preact/signals";
import { PlayerEnumeration } from "@application/domain/enumerations/player";
import { CreateBoardUsecase } from "@application/domain/usecases/create-board";
import { SelectSquareUsecase } from "@application/domain/usecases/select-square";
import { GetWinnerUsecase } from "@application/domain/usecases/get-winner";

const createBoardUsecase = new CreateBoardUsecase()
const selectSquareUsecase = new SelectSquareUsecase();
const getWinnerUsecase = new GetWinnerUsecase();

export const board = signal(createBoardUsecase.execute(3, 3));
export const player = signal(PlayerEnumeration.Circle);
export const winner = signal<PlayerEnumeration | undefined>(undefined);
export const error = signal<string | null>(null);

export const onSquareClicked = (row: number, column: number) => {
    return () => {
        const possibleNewBoard = selectSquareUsecase.execute(board.value, player.value, row, column);
        const newBoard = possibleNewBoard.withDefault(board.value);
        const newError = possibleNewBoard.withError();

        if (newError) {
            error.value = String(newError);
            return;
        }

        error.value = null;
        board.value = newBoard
        player.value = player.value === PlayerEnumeration.Circle ? PlayerEnumeration.Cross : PlayerEnumeration.Circle;
        winner.value = getWinnerUsecase.execute(newBoard);
    };
};

export const restart = () => {
    error.value = null;
    board.value = createBoardUsecase.execute(3, 3);
    player.value = PlayerEnumeration.Circle;
    winner.value = undefined;
}