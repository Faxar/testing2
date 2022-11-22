interface SelectorTypes {
    id?: string;
    systemId?: string;
    xpath?: string;
}

interface SelectorInput {
    description?: string;
    locatorType?: SelectorTypes;
}

export class Selector {
    description: string;
    locatorType?: SelectorTypes;

    constructor({locatorType, description}: SelectorInput) {
        this.locatorType = locatorType;
        this.description = description || 'no description';
    }

    private inputToString(selectorInput: SelectorTypes) {
        if (selectorInput.id) {
            return `id=com.stagnationlab.sk:id/${selectorInput.id}`;
        }
        if (selectorInput.systemId) {
            return `id=android:id/${selectorInput.systemId}`;
        }
        if (selectorInput.xpath) {
            return selectorInput.xpath;
        }

        throw new Error (`Selector doesn't have supported types: id, systemId or xpath`);
    }

    toString() {
        if (this.locatorType) return this.inputToString(this.locatorType);
        else
            throw new Error (`There's no selector string for selector with ${this.description} description`);
    }
}