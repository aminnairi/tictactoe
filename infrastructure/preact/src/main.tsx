import { Fragment } from "preact";
import { board, player, winner, error, onSquareClicked, restart } from "./signals/tictactoe";
import { Player } from "./components/player";


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
            {error.value && <small style={{ padding: 5, backgroundColor: "darkred", color: "red" }}>{error}</small>}
            {board.value.squares.map((row, rowIndex) => (
                <div style={{ display: "flex", flexDirection: "row" }}>
                    {row.map((column, columnIndex) => (
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", border: "1px solid black", height: "50px", width: "50px", cursor: "pointer" }} onClick={onSquareClicked(rowIndex, columnIndex)}>
                            <Player player={column.player} />
                        </div>
                    ))}
                </div>
            ))}
        </Fragment>
    )
}