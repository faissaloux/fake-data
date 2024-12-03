import { faker } from '@faker-js/faker';

class Lorem {
    text(): string {
        return faker.lorem.text();
    }
}

export default Lorem;
