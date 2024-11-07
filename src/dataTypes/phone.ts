import { faker } from '@faker-js/faker';

class Phone {
    imei(): string {
        return faker.phone.imei();
    }
}

export default Phone;
