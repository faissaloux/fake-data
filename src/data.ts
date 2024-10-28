import { faker } from '@faker-js/faker';

function fakeData(): {[key: string]: string} {
    return {
        'location.city': faker.location.city(),
        'person.firstName': faker.person.firstName(),
        'person.male.firstName': faker.person.firstName('male'),
        'person.female.firstName': faker.person.firstName('female'),
        'person.lastName': faker.person.lastName(),
    };
}

export default fakeData;
