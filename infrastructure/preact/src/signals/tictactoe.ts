import { signal } from "@preact/signals";
import { PlayerEnumeration } from "../../../../domain/enumerations/player";
import { CreateBoardUsecase } from "../../../../domain/usecases/create-board";
import { SelectSquareUsecase } from "../../../../domain/usecases/select-square";
import { GetWinnerUsecase } from "../../../../domain/usecases/get-winner";

const createBoardUsecase = new CreateBoardUsecase()
const selectSquareUsecase = new SelectSquareUsecase();
const getWinnerUsecase = new GetWinnerUsecase();

export const board = signal(createBoardUsecase.execute(3, 3));
export const player = signal(PlayerEnumeration.Circle);
export const winner = signal<PlayerEnumeration | undefined>(undefined);
export const error = signal<string | null>(null);

export const onSquareClicked = (row: number, column: number) => {
    return () => {
        try { 
            const newBoard = selectSquareUsecase.execute(board.value, player.value, row, column);
            error.value = null;
            board.value = newBoard
            player.value = player.value === PlayerEnumeration.Circle ? PlayerEnumeration.Cross : PlayerEnumeration.Circle;
            winner.value = getWinnerUsecase.execute(newBoard);
        } catch (thrownError) {
            if (thrownError instanceof Error) {
                error.value = thrownError.message;
            } else {
                error.value = String(thrownError);
            }
        }
    };
};

export const restart = () => {
    error.value = null;
    board.value = createBoardUsecase.execute(3, 3);
    player.value = PlayerEnumeration.Circle;
    winner.value = undefined;
}