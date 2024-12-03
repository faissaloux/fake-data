import Lorem from '../../../src/dataTypes/lorem';

describe('lorem data type', () => {
    const lorem = new Lorem();

    describe('text', () => {
        test('no params', () => {
            const text = lorem.text();

            expect(typeof text).toBe('string');
            expect(text.length).toBeGreaterThan(2);
        });

        test('generates valid data when invalid param provided', () => {
            // @ts-expect-error: invalid param
            const text = lorem.text('invalid');

            expect(typeof text).toBe('string');
            expect(text.length).toBeGreaterThan(2);
        });
    });
});
