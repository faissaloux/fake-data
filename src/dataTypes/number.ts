import { faker } from '@faker-js/faker';

type IntParams =
    | number
    | {
        min?: number;
        max?: number;
        multipleOf?: number;
    };

class Number {
    int(options: IntParams = {}): number {
        return faker.number.int(options);
    }
}

export default Number;
