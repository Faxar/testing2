import { uiManager } from '../ui-manager'
import { idSettingsButton } from "./selectorsMainView";


export async function openSettingsView() {
  await uiManager.swipeDown();
  if(await uiManager.elementDoesExist(idSettingsButton)) {
    await uiManager.tapElement(idSettingsButton)
  }
}