import { faker } from '@faker-js/faker';

class System {
    mimeType(): string {
        return faker.system.mimeType();
    }
}

export default System;
