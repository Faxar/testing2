import { uiManager } from "../ui-manager/manager";
import { idSettingsButton } from "./selectorsMainView";


export async function openSettingsView() {
  await uiManager.swipeDown();
  if(uiManager.elementDoesExist(idSettingsButton)) {
    await uiManager.tapElement(idSettingsButton)
  }
}