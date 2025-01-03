import { faker } from '@faker-js/faker';

type zipCodeParams =
    | string
    | {
        format?: string;
    };

class Location {
    city(): string {
        return faker.location.city();
    }

    country(): string {
        return faker.location.country();
    }

    zipCode(params: zipCodeParams = {}): string {
        return faker.location.zipCode(params);
    }
}

export default Location;
