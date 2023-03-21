import { render } from "solid-js/web";
import { Main } from "./main";

const rootElement = document.getElementById("root");

if (!(rootElement instanceof HTMLDivElement)) {
    throw new Error("Root div not found");
}

render(() => <Main />, rootElement);