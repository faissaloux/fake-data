import Array from './dataTypes/array';
import Commerce from './dataTypes/commerce';
import Finance from './dataTypes/finance';
import Image from './dataTypes/image';
import Internet from './dataTypes/internet';
import Location from './dataTypes/location';
import Lorem from './dataTypes/lorem';
import Number from './dataTypes/number';
import Person from './dataTypes/person';
import Phone from './dataTypes/phone';
import System from './dataTypes/system';

/* eslint-disable @typescript-eslint/no-explicit-any */

class Generator {
    private dataType: string;
    private method: string;
    private data: {[key: string]: any} = {
        'person': Person,
        'location': Location,
        'finance': Finance,
        'commerce': Commerce,
        'image': Image,
        'internet': Internet,
        'phone': Phone,
        'system': System,
        'lorem': Lorem,
        'number': Number,
        'array': Array,
    };

    constructor(private value: string) {
        [this.dataType, this.method] = typeof this.value === 'string' ? this.value.split('.') : [];
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
