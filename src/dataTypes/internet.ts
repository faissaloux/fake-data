import { faker } from '@faker-js/faker';

class Internet {
    email(): string {
        return faker.internet.email();
    }
}

export default Internet;
