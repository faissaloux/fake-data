import Internet from '../../../src/dataTypes/internet';

describe('internet data type', () => {
    const internet = new Internet();

    describe('email', () => {
        test('no params', () => {
            const email = internet.email();

            expect(typeof email).toBe('string');
            expect(email.length).toBeGreaterThan(2);
        });

        test('generates valid data when invalid param provided', () => {
            // @ts-expect-error: invalid param
            const email = internet.email('invalid');

            expect(typeof email).toBe('string');
            expect(email.length).toBeGreaterThan(2);
        });

        test('firstName param', () => {
            const email = internet.email({firstName: 'faissal'});

            expect((email as string).startsWith('faissal')).toBeTruthy();
        });

        test('lastName param', () => {
            const email = internet.email({lastName: 'wahabali'});

            expect((email as string).includes('wahabali')).toBeTruthy();
        });

        test('provider param', () => {
            const email = internet.email({provider: 'gmail.com'});

            expect((email as string).endsWith('gmail.com')).toBeTruthy();
        });
    });
});
