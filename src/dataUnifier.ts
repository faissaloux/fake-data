/* eslint-disable @typescript-eslint/no-explicit-any */

class DataUnifier {
    constructor(private data: {[key: string]: any}) {}

    unify(): {[key: string]: {identifier: string, args?: any}} {
        return this.unifyObject(this.data);
    }

    unifyObject(object: {[key: string]: any}): {[key: string]: {identifier: string, args?: any}} {
        if ('identifier' in object) {
            return object;
        }

        for (const [key, value] of Object.entries(object)) {
            if (typeof value === 'object') {
                object[key] = this.unifyObject(value);
                continue;
            }

            object[key] = this.stringToObject(value);
        }

        return object;
    }

    stringToObject(identifier: string): {[key: string]: string} {
        const newValue: {[key: string]: string} = {};

        newValue['identifier'] = identifier;

        return newValue;
    }
}

export default DataUnifier;
