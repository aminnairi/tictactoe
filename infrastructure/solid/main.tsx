import { For, Show } from "solid-js/web";
import { PlayerEnumeration } from "@application/domain/enumerations/player";
import { board, player, winner, error, onRestartClicked, onSquareSelected } from "./hooks/ticatctoe";

export const Main = () => {
    return (
        <>
            <Show when={winner()}>
                <h1>Winner</h1>
                <p>{winner()} has won this game!</p>
                <button onclick={onRestartClicked}>Restart?</button>
            </Show>
            <Show when={!winner()}>
                <h1>Tictactoe</h1>
                <p>It's {player()} turn</p>
                <small>{error() ?? ""}</small>
                <For each={board().squares}>
                    {(row, rowIndex) => (
                        <div style={{ display: "flex", "flex-direction": "row" }}>
                            <For each={row}>
                                {(column, columnIndex) => (
                                    <div style={{ height: "50px", width: "50px", border: "1px solid black", cursor: "pointer", display: "flex", "justify-content": "center", "align-items": "center" }} onclick={onSquareSelected(rowIndex(), columnIndex())}>
                                        <Show when={column.player === PlayerEnumeration.Circle}>O</Show>
                                        <Show when={column.player === PlayerEnumeration.Cross}>X</Show>
                                    </div>
                                )}
                            </For>
                        </div>
                    )}
                </For>
            </Show>
        </>
    );
};