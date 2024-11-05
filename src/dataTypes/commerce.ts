import { faker } from '@faker-js/faker';

class Commerce {
    product(): string {
        return faker.commerce.product();
    }
}

export default Commerce;
