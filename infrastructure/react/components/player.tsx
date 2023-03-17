import { PlayerEnumeration } from "@application/domain/enumerations/player"
import { Fragment } from "react";

export interface PlayerPropsInterface {
  player: PlayerEnumeration
}

export const Player = ({ player }) => {
  if (player === PlayerEnumeration.Circle) {
    return <Fragment>O</Fragment>
  }

  if (player === PlayerEnumeration.Cross) {
    return <Fragment>X</Fragment>
  }

  return null;
}
