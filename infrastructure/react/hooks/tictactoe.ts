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
  const [board, setBoard] = useState(createBoardUsecase.execute(3, 3));
  const [winner, setWinner] = useState<PlayerEnumeration | null>(null);
  const [error, setError] = useState<Error | null>(null);

  const onSquareClicked = useCallback((player: PlayerEnumeration, row: number, column: number): MouseEventHandler<HTMLDivElement> => () => {
    try {
      setError(null);
      setBoard(selectSquareUsecase.execute(board, player, row, column));
      setPlayer(player === PlayerEnumeration.Circle ? PlayerEnumeration.Cross : PlayerEnumeration.Circle);
    } catch (error) {
      setError(error);
    }
  }, [board, player, selectSquareUsecase, getWinnerUsecase, setBoard, setPlayer, setWinner]);

  const onRestartClicked = useCallback(() => {
    setBoard(createBoardUsecase.execute(3, 3));
  }, [setBoard, createBoardUsecase]);

  useEffect(() => {
    setWinner(getWinnerUsecase.execute(board));
  }, [board, setWinner, getWinnerUsecase]);

  return {
    error,
    winner,
    player,
    board,
    onSquareClicked,
    onRestartClicked
  };
}
