import { faker } from '@faker-js/faker';

class Array {
    element<const T>(elements: ReadonlyArray<T>): T {
        return faker.helpers.arrayElement(elements);
    }
}

export default Array;
