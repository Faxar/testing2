import { uiManager } from ".";
import { idRegisterNewSmart } from "./selectorsMainView";

export async function tapOnRegisterButton() {
    await uiManager.tapElement(idRegisterNewSmart);
}