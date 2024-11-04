import { faker } from '@faker-js/faker';

class System {
    mimeType(): string {
        return faker.system.mimeType();
    }

    semver(): string {
        return faker.system.semver();
    }
}

export default System;
