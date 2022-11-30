import { uiManager } from ".";
import { idRegisterNewSmart } from "../views/selectorsMainView";

export async function tapOnRegisterButton() {
    const element = await uiManager.tapElement(idRegisterNewSmart);
    element.click();
}