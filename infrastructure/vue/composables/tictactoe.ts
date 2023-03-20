import { ref } from "vue";

import { CreateBoardUsecase } from "../../../domain/usecases/create-board";
import { SelectSquareUsecase } from "../../../domain/usecases/select-square";
import { GetWinnerUsecase } from "../../../domain/usecases/get-winner";
import { PlayerEnumeration } from "../../../domain/enumerations/player";

export const useTictactoe = () => {
  const createBoardUsecase = new CreateBoardUsecase();
  const selectSquareUsecase = new SelectSquareUsecase();
  const getWinnerUsecase = new GetWinnerUsecase();

  const error = ref(null);
  const player = ref(PlayerEnumeration.Circle);
  const winner = ref(undefined);
  const board = ref(createBoardUsecase.execute(3, 3));

  const onSquareClicked = (row: number, column: number) => {
    const possibleNewBoard = selectSquareUsecase.execute(board.value, player.value, row, column);
    const newBoard = possibleNewBoard.withDefault(board.value);
    const newError = possibleNewBoard.withError();

    error.value = newError; 

    if (error.value) {
      return;
    }

    board.value = newBoard;
    player.value = player.value === PlayerEnumeration.Circle ? PlayerEnumeration.Cross : PlayerEnumeration.Circle;
    winner.value = getWinnerUsecase.execute(newBoard);
  };

  const restart = () => {
    error.value = null;
    board.value = createBoardUsecase.execute(3, 3);
    winner.value = undefined;
  };

  return {
    board,
    player,
    winner,
    error,
    onSquareClicked,
    restart
  };
};
