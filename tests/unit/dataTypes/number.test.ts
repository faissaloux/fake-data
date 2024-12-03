import Number from '../../../src/dataTypes/number';

describe('number data type', () => {
    const number = new Number();

    describe('int', () => {
        test('no params', () => {
            const int = number.int();

            expect(typeof int).toBe('number');
        });

        test('generates valid data when invalid param provided', () => {
            // @ts-expect-error: invalid param
            const int = number.int('invalid');

            expect(typeof int).toBe('number');
        });

        test('one number parameter', () => {
            const int = number.int(4);

            expect(typeof int).toBe('number');
            expect(int).toBeGreaterThan(0);
            expect(int).toBeLessThanOrEqual(4);
        });

        test('min and max', () => {
            const int = number.int({min: 10, max: 20});

            expect(typeof int).toBe('number');
            expect(int).toBeGreaterThanOrEqual(10);
            expect(int).toBeLessThanOrEqual(20);
        });

        test('multipleOf', () => {
            const int = number.int({min: 10, max: 20, multipleOf: 5});

            expect(typeof int).toBe('number');
            expect(int).toBeGreaterThanOrEqual(10);
            expect(int).toBeLessThanOrEqual(20);
            expect(int % 5).toEqual(0);
        });
    });
});
