import { faker } from '@faker-js/faker';

class Person {
    firstName(): string {
        return faker.person.firstName();
    }

    lastName(): string {
        return faker.person.lastName();
    }

    male_firstName(): string {
        return faker.person.firstName('male');
    }

    female_firstName(): string {
        return faker.person.firstName('female');
    }
}

export default Person;
