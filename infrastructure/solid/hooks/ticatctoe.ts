import { createSignal } from "solid-js"

import { CreateBoardUsecase } from "@application/domain/usecases/create-board";
import { SelectSquareUsecase } from "@application/domain/usecases/select-square";
import { GetWinnerUsecase } from "@application/domain/usecases/get-winner";
import { PlayerEnumeration } from "@application/domain/enumerations/player";

const createBoardUsecase = new CreateBoardUsecase();
const selectSquareUsecase = new SelectSquareUsecase()
const getWinnerUsecase = new GetWinnerUsecase();

export const [board, setBoard] = createSignal(createBoardUsecase.execute(3, 3));
export const [player, setPlayer] = createSignal(PlayerEnumeration.Circle);
export const [winner, setWinner] = createSignal(undefined);
export const [error, setError] = createSignal(null);

export const onSquareSelected = (row: number, column: number) => {
    return () => {
        const oldBoard = board();
        const oldPlayer = player();

        selectSquareUsecase.execute(oldBoard, oldPlayer, row, column).onValue(newBoard => {
            setBoard(newBoard);
            setPlayer(oldPlayer === PlayerEnumeration.Circle ? PlayerEnumeration.Cross : PlayerEnumeration.Circle);
            setWinner(getWinnerUsecase.execute(newBoard));
        }).onIssue(issue => {
            setError(issue);
        });
    };
};

export const onRestartClicked = () => {
    setBoard(createBoardUsecase.execute(3, 3));
    setPlayer(PlayerEnumeration.Circle);
    setWinner(undefined);
    setError(null);
};