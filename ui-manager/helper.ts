import { uiManager } from ".";
import { idRegisterNewSmart } from "./selectorsMainView";

export async function tapOnRegisterButton() {
    const element = await uiManager.tapElement(idRegisterNewSmart);
    element.click();
}