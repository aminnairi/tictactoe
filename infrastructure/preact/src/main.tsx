import { Fragment } from "preact";
import { board, player, winner, error, onSquareClicked, restart } from "./signals/tictactoe";
import { Player } from "./components/player";
import { Notification, SeverityEnumeration } from "./components/notification";
import { Square } from "./components/square";
import { Row } from "./components/row";

export const Main = () => {
    if (winner.value) {
        return (
            <Fragment>
                <h1>Game finished</h1>
                <p>{winner.value} has won the game</p>
                <button onClick={restart}>Restart?</button>
            </Fragment>
        );
    }

    return (
        <Fragment>
            <h1>Tictactoe</h1>
            <p>It's {player} turn</p>
            <Notification error={error.value} severity={SeverityEnumeration.Error} />
            {board.value.squares.map((row, rowIndex) => (
                <Row>
                    {row.map((column, columnIndex) => (
                        <Square onSquareClicked={onSquareClicked(rowIndex, columnIndex)}>
                            <Player player={column.player} />
                        </Square>
                    ))}
                </Row>
            ))}
        </Fragment>
    )
}