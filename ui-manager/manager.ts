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
            await (await this.findElement(elementSelector)).waitForExist();
            const element = await this.findElement(elementSelector);
            return element;
        } catch (error) {
            throw new Error(
                `Failed to tap ${elementSelector.description} element by given selectro "${elementSelector}". \n${error}`
            );
        }
    }

    async swipeDown() {
		try {
			//uiLogger.info(`Scrolling down...`);
			const sizeY = (await this.driver.getWindowSize()).height;
			const sizeX = (await this.driver.getWindowSize()).width;
			await this.driver.touchAction([
				{ action: 'press', x: 0.5 * sizeX, y: 0.1 * sizeY },
				{ action: 'wait', ms: 500 },
				{ action: 'moveTo', x: 0.5 * sizeX, y: 0.5 * sizeY },
				'release'
			]);
		} catch (error) {
			throw new Error(`Failed to scroll down. ${error}`);
		}
	}

    async wait(ms: number) {
        await new Promise((resolve) => {
            setTimeout(resolve, ms);
        })
    }



}