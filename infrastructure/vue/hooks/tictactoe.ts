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

  const onSquareClicked = (row, column) => {
    error.value = null;

    try {
      const newBoard = selectSquareUsecase.execute(board.value, player.value, row, column);
      board.value = newBoard;
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
