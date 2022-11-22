import { Browser, Element } from "webdriverio";
import { Clicker } from "./Clicker";
import { Selector } from "./selector";

export class UIManager implements Clicker<Browser<'async'>, Element<'async'>> {
    driver: Browser<'async'>;
    maxElementWaitMs = 50000;

    constructor(driver: Browser<'async'>) {
        this.driver = driver;
    }

    async findElement(elementSelector: Selector, timeout?: number) {
        try {
            const element = await this.driver.$(elementSelector.toString());
            await element.waitForExist({timeout: timeout || this.maxElementWaitMs});
            return element;
        } catch (error) {
            throw new Error(
                `Failed to find the "${elementSelector.description}" element by given selector ${elementSelector}. ${error}`
            )
        }
    }

    async tapElement(elementSelector: Selector) {
        try {
            const element = await this.findElement(elementSelector);
            await element.click();
        } catch (error) {
            throw new Error(
                `Failed to tap ${elementSelector.description} element by given selectro "${elementSelector}". \n${error}`
            );
        }
    }

    async wait(ms: number) {
        await new Promise((resolve) => {
            setTimeout(resolve, ms);
        })
    }

}