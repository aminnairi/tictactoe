import { PlayerEnumeration } from "@application/domain/enumerations/player";
import { Fragment } from "react";

export interface PlayerWinnerPropsInterface {
  player: PlayerEnumeration
}

export const PlayerWinner = ({ player }: PlayerWinnerPropsInterface) => {
  if (player === PlayerEnumeration.Circle) {
    return (
      <Fragment>
        circle
      </Fragment>
    );
  }

  return (
    <Fragment>
      cross
    </Fragment>
  );
};
