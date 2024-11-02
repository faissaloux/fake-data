import { faker } from '@faker-js/faker';

class Location {
    city(): string {
        return faker.location.city();
    }

    country(): string {
        return faker.location.country();
    }
}

export default Location;
