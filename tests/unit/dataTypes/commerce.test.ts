import Commerce from '../../../src/dataTypes/commerce';

describe('commerce data type', () => {
    const commerce = new Commerce();

    describe('product', () => {
        test('no params', () => {
            const product = commerce.product();

            expect(typeof product).toBe('string');
            expect(product.length).toBeGreaterThan(2);
        });

        test('generates valid data when invalid param provided', () => {
            // @ts-expect-error: invalid param
            const product = commerce.product('invalid');

            expect(typeof product).toBe('string');
            expect(product.length).toBeGreaterThan(2);
        });
    });
});
