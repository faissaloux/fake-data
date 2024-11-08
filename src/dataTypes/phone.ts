import { faker } from '@faker-js/faker';

class Phone {
    imei(): string {
        return faker.phone.imei();
    }

    number(): string {
        return faker.phone.number();
    }
}

export default Phone;
