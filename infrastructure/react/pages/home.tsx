import { Fragment } from "react";
import { Board } from "../components/board";
import { useTictactoe } from "../hooks/tictactoe";
import { PlayerCurrent } from "../components/player-current";
import { PlayerWinner } from "../components/player-winner";
import { Error } from "../components/error";

export const HomePage = () => {
  const { error, winner, player, board, onSquareClicked, onRestartClicked } = useTictactoe();

  if (winner) {
    return (
      <Fragment>
        <h1>Winner!</h1>
        <p><PlayerWinner player={winner} /> has won this game.</p>
        <button onClick={onRestartClicked}>Restart?</button>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <h1>TicTacToe</h1>
      <PlayerCurrent player={player} />
      <Board squares={board.squares} player={player} onSquareClicked={onSquareClicked} />
      <Error error={error} />
    </Fragment>
  );
};
