import Internet from '../../../src/dataTypes/internet';

describe('internet data type', () => {
    const internet = new Internet();

    describe('email', () => {
        test('no params', () => {
            const email = internet.email();

            expect(typeof email).toBe('string');
            expect(email.length).toBeGreaterThan(2);
        });
    });
});
