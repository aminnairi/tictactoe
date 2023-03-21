import { MouseEventHandler, useCallback, useEffect, useMemo, useState } from "react";
import { PlayerEnumeration } from "@application/domain/enumerations/player";
import { CreateBoardUsecase } from "@application/domain/usecases/create-board";
import { SelectSquareUsecase } from "@application/domain/usecases/select-square";
import { GetWinnerUsecase } from "@application/domain/usecases/get-winner";

export const useTictactoe = () => {
  const createBoardUsecase = useMemo(() => new CreateBoardUsecase(), []);
  const selectSquareUsecase = useMemo(() => new SelectSquareUsecase(), []);
  const getWinnerUsecase = useMemo(() => new GetWinnerUsecase(), []);

  const [player, setPlayer] = useState(PlayerEnumeration.Cross);
  const [board, setBoard] = useState(createBoardUsecase.execute({ rows: 3, columns: 3 }));
  const [winner, setWinner] = useState<PlayerEnumeration | null>(null);
  const [error, setError] = useState<Error | null>(null);

  const onSquareClicked = useCallback((player: PlayerEnumeration, row: number, column: number): MouseEventHandler<HTMLDivElement> => () => {
    selectSquareUsecase.execute({ board, player, selectedRow: row, selectedColumn: column }).onValue(newBoard => {
      setError(null);
      setBoard(newBoard);
      setPlayer(player === PlayerEnumeration.Circle ? PlayerEnumeration.Cross : PlayerEnumeration.Circle);
      setWinner(getWinnerUsecase.execute({ board: newBoard }));
    }).onIssue(issue => {
      setError(issue);
    });
  }, [board, player]);

  const onRestartClicked = useCallback(() => {
    setBoard(createBoardUsecase.execute({ rows: 3, columns: 3 }));
    setWinner(undefined);
    setError(null);
    setPlayer(PlayerEnumeration.Circle);
  }, []);

  return {
    error,
    winner,
    player,
    board,
    onSquareClicked,
    onRestartClicked
  };
}
