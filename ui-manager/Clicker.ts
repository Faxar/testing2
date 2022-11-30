import { Selector } from "./selector";

export interface Clicker<Driver, DriverElement> {
    driver: Driver;
    maxElementWaitMs: number;

    wait(ms: number): Promise<void>;

    tapElement(elementSelector: Selector): Promise<DriverElement>;

    
}