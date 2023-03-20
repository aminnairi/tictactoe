import { Fragment } from "preact";
import { PlayerEnumeration } from "@application/domain/enumerations/player";

export const Player = ({ player }: { player: PlayerEnumeration }) => {
    if (player === PlayerEnumeration.Circle) {
        return (
            <Fragment>
                O
            </Fragment>
        )
    }

    if (player === PlayerEnumeration.Cross) {
        return (
            <Fragment>
                X
            </Fragment>
        )
    }

    return null;
}