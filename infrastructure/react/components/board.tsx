import { SquareEntityInterface } from "@application/domain/entities/square";
import { PlayerEnumeration } from "@application/domain/enumerations/player";
import { Fragment, MouseEventHandler } from "react";
import { Player } from "./player";

export interface BoardPropsInterface {
  squares: Array<Array<SquareEntityInterface>>;
  onSquareClicked: (player: PlayerEnumeration, row: number, column: number) => MouseEventHandler<HTMLDivElement>;
  player: PlayerEnumeration;
}

export const Board = ({ squares, onSquareClicked, player }: BoardPropsInterface) => {
  return (
    <Fragment>
      {squares.map((row, rowIndex) => (
        <div key={rowIndex} style={{display: "flex", flexDirection: "row", height: "50px"}}>
          {row.map((column, columnIndex) => (
            <div key={columnIndex} style={{display: "flex", justifyContent: "center", alignItems: "center", border: "1px solid black", width: "50px"}} onClick={onSquareClicked(player, rowIndex, columnIndex)}>
              <Player player={column.player} />
            </div>
          ))}
        </div>
      ))}
    </Fragment>
  );
};
