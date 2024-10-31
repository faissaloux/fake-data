import Finance from './dataTypes/finance';
import Location from './dataTypes/location';
import Person from './dataTypes/person';

/* eslint-disable @typescript-eslint/no-explicit-any */

class Generator {
    private dataType: string;
    private method: string;
    private data: {[key: string]: any} = {
        'person': Person,
        'location': Location,
        'finance': Finance,
    };

    constructor(private value: string) {
        let methods: string[];
        [this.dataType, ...methods] = typeof this.value === 'string' ? this.value.split('.') : [];
        this.method = methods.join('.').replaceAll('.', '_');
    }

    generate(parameters: any = null) {
        if (! (this.dataType in this.data)) {
            return this.value;
        }

        const dataType = new this.data[this.dataType];

        return typeof dataType[this.method] === 'function'
            ? dataType[this.method](parameters)
            : this.value;
    }
}

export default Generator;
