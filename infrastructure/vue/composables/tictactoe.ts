import { ref } from "vue";

import { CreateBoardUsecase } from "@application/domain/usecases/create-board";
import { SelectSquareUsecase } from "@application/domain/usecases/select-square";
import { GetWinnerUsecase } from "@application/domain/usecases/get-winner";
import { PlayerEnumeration } from "@application/domain/enumerations/player";

export const useTictactoe = () => {
  const createBoardUsecase = new CreateBoardUsecase();
  const selectSquareUsecase = new SelectSquareUsecase();
  const getWinnerUsecase = new GetWinnerUsecase();

  const error = ref(null);
  const player = ref(PlayerEnumeration.Circle);
  const winner = ref(undefined);
  const board = ref(createBoardUsecase.execute({ rows: 3, columns: 3 }));

  const onSquareClicked = (row: number, column: number) => {
    selectSquareUsecase.execute({ board: board.value, player: player.value, selectedRow: row, selectedColumn: column }).onValue(newBoard => {
      error.value = null;
      player.value = player.value === PlayerEnumeration.Circle ? PlayerEnumeration.Cross : PlayerEnumeration.Circle;
      board.value = newBoard;
      winner.value = getWinnerUsecase.execute({ board: newBoard });
    }).onIssue(issue => {
      error.value = issue;
    });
  };

  const restart = () => {
    error.value = null;
    board.value = createBoardUsecase.execute({ rows: 3, columns: 3 });
    winner.value = undefined;
    player.value = PlayerEnumeration.Circle;
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
