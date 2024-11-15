import { faker } from '@faker-js/faker';

class Person {
    firstName(params?: 'male'|'female'): string {
        return faker.person.firstName(params);
    }

    middleName(params?: 'male'|'female'): string {
        return faker.person.middleName(params);
    }

    lastName(params?: 'male'|'female'): string {
        return faker.person.lastName(params);
    }

    sex(): string {
        return faker.person.sex();
    }

    prefix(params?: 'male'|'female'): string {
        return faker.person.prefix(params);
    }

    suffix(): string {
        return faker.person.suffix();
    }

    jobArea(): string {
        return faker.person.jobArea();
    }

    jobTitle(): string {
        return faker.person.jobTitle();
    }

    jobType(): string {
        return faker.person.jobType();
    }
}

export default Person;
