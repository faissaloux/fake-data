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

    describe('middleName', () => {
        test('no params', () => {
            const middleName = person.middleName();

            expect(typeof middleName).toBe('string');
            expect(middleName.length).toBeGreaterThan(2);
        });

        test('generates valid data when invalid param provided', () => {
            // @ts-expect-error: invalid param
            const middleName = person.middleName('invalid');

            expect(typeof middleName).toBe('string');
            expect(middleName.length).toBeGreaterThan(2);
        });

        test('male', () => {
            const middleName = person.middleName('male');

            expect(typeof middleName).toBe('string');
            expect(middleName.length).toBeGreaterThan(2);
        });

        test('female', () => {
            const middleName = person.middleName('female');

            expect(typeof middleName).toBe('string');
            expect(middleName.length).toBeGreaterThan(2);
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

    describe('sex', function() {
        test('no params', () => {
            const sex = person.sex();

            expect(typeof sex).toBe('string');
            expect(sex.length).toBeGreaterThan(2);
        });

        test('generates valid data when invalid param provided', () => {
            // @ts-expect-error: invalid param
            const sex = person.sex('invalid');

            expect(typeof sex).toBe('string');
            expect(sex.length).toBeGreaterThan(2);
        });
    });

    describe('prefix', () => {
        test('no params', () => {
            const prefix = person.prefix();

            expect(typeof prefix).toBe('string');
            expect(prefix.length).toBeGreaterThan(0);
        });

        test('generates valid data when invalid param provided', () => {
            // @ts-expect-error: invalid param
            const prefix = person.prefix('invalid');

            expect(typeof prefix).toBe('string');
            expect(prefix.length).toBeGreaterThan(0);
        });

        test('male', () => {
            const prefix = person.prefix('male');

            expect(typeof prefix).toBe('string');
            expect(prefix.length).toBeGreaterThan(0);
        });

        test('female', () => {
            const prefix = person.prefix('female');

            expect(typeof prefix).toBe('string');
            expect(prefix.length).toBeGreaterThan(0);
        });
    });

    describe('suffix', function() {
        test('no params', () => {
            const suffix = person.suffix();

            expect(typeof suffix).toBe('string');
            expect(suffix.length).toBeGreaterThan(0);
        });

        test('generates valid data when invalid param provided', () => {
            // @ts-expect-error: invalid param
            const suffix = person.suffix('invalid');

            expect(typeof suffix).toBe('string');
            expect(suffix.length).toBeGreaterThan(0);
        });
    });

    describe('jobArea', function() {
        test('no params', () => {
            const jobArea = person.jobArea();

            expect(typeof jobArea).toBe('string');
            expect(jobArea.length).toBeGreaterThan(0);
        });

        test('generates valid data when invalid param provided', () => {
            // @ts-expect-error: invalid param
            const jobArea = person.jobArea('invalid');

            expect(typeof jobArea).toBe('string');
            expect(jobArea.length).toBeGreaterThan(0);
        });
    });

    describe('jobTitle', function() {
        test('no params', () => {
            const jobTitle = person.jobTitle();

            expect(typeof jobTitle).toBe('string');
            expect(jobTitle.length).toBeGreaterThan(2);
        });

        test('generates valid data when invalid param provided', () => {
            // @ts-expect-error: invalid param
            const jobTitle = person.jobTitle('invalid');

            expect(typeof jobTitle).toBe('string');
            expect(jobTitle.length).toBeGreaterThan(2);
        });
    });

    describe('jobType', function() {
        test('no params', () => {
            const jobType = person.jobType();

            expect(typeof jobType).toBe('string');
            expect(jobType.length).toBeGreaterThan(2);
        });

        test('generates valid data when invalid param provided', () => {
            // @ts-expect-error: invalid param
            const jobType = person.jobType('invalid');

            expect(typeof jobType).toBe('string');
            expect(jobType.length).toBeGreaterThan(2);
        });
    });

    describe('jobDescriptor', function() {
        test('no params', () => {
            const jobDescriptor = person.jobDescriptor();

            expect(typeof jobDescriptor).toBe('string');
            expect(jobDescriptor.length).toBeGreaterThan(2);
        });

        test('generates valid data when invalid param provided', () => {
            // @ts-expect-error: invalid param
            const jobDescriptor = person.jobDescriptor('invalid');

            expect(typeof jobDescriptor).toBe('string');
            expect(jobDescriptor.length).toBeGreaterThan(2);
        });
    });
});
