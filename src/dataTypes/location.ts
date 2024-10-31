import { faker } from '@faker-js/faker';

class Location {
    city(): string {
        return faker.location.city();
    }
}

export default Location;
