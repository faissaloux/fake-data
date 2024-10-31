import Person from '../../../src/dataTypes/person';

describe('person data type', () => {
    const person = new Person();

    describe('firstName', () => {
        test('no params', () => {
            const firstName = person.firstName();

            expect(typeof firstName).toBe('string');
            expect(firstName.length).toBeGreaterThan(2);
        });

        test('generates valid data when invalid param provided', () => {
            // @ts-expect-error: invalid param
            const firstName = person.firstName('invalid');

            expect(typeof firstName).toBe('string');
            expect(firstName.length).toBeGreaterThan(2);
        });

        test('male', () => {
            const firstName = person.firstName('male');

            expect(typeof firstName).toBe('string');
            expect(firstName.length).toBeGreaterThan(2);
        });

        test('female', () => {
            const firstName = person.firstName('female');

            expect(typeof firstName).toBe('string');
            expect(firstName.length).toBeGreaterThan(2);
        });
    });

    describe('lastName', () => {
        test('no params', () => {
            const lastName = person.lastName();

            expect(typeof lastName).toBe('string');
            expect(lastName.length).toBeGreaterThan(2);
        });

        test('generates valid data when invalid param provided', () => {
            // @ts-expect-error: invalid param
            const lastName = person.lastName('invalid');

            expect(typeof lastName).toBe('string');
            expect(lastName.length).toBeGreaterThan(2);
        });

        test('male', () => {
            const lastName = person.lastName('male');

            expect(typeof lastName).toBe('string');
            expect(lastName.length).toBeGreaterThan(2);
        });

        test('female', () => {
            const lastName = person.lastName('female');

            expect(typeof lastName).toBe('string');
            expect(lastName.length).toBeGreaterThan(2);
        });
    });
});
