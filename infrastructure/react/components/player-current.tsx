import { PlayerEnumeration } from "@application/domain/enumerations/player";
import { Fragment } from "react";

export interface PlayerCurrentPropsInterface {
  player: PlayerEnumeration
}

export const PlayerCurrent = ({ player }: PlayerCurrentPropsInterface) => {
  if (player === PlayerEnumeration.Circle) {
    return <Fragment>It is circle's turn</Fragment>
  }

  return <Fragment>It is cross's turn</Fragment>
};
