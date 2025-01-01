import { faker } from '@faker-js/faker';

type SexType = 'male'|'female';

type FullNameParams = {
    firstName?: string;
    lastName?: string;
    sex?: SexType;
};

class Person {
    firstName(params?: SexType): string {
        return faker.person.firstName(params);
    }

    middleName(params?: SexType): string {
        return faker.person.middleName(params);
    }

    lastName(params?: SexType): string {
        return faker.person.lastName(params);
    }

    fullName(params: FullNameParams = {}): string {
        return faker.person.fullName(params);
    }

    sex(): string {
        return faker.person.sex();
    }

    prefix(params?: SexType): string {
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

    jobDescriptor(): string {
        return faker.person.jobDescriptor();
    }
}

export default Person;
