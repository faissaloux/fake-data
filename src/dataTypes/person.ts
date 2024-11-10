import { faker } from '@faker-js/faker';
class Person {
    firstName(params?: 'male'|'female'): string {
        return faker.person.firstName(params);
    }

    lastName(params?: 'male'|'female'): string {
        return faker.person.lastName(params);
    }

    jobTitle(): string {
        return faker.person.jobTitle();
    }
}

export default Person;
