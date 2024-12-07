import Array from '../../../src/dataTypes/array';

describe('array data type', () => {
    // eslint-disable-next-line @typescript-eslint/no-array-constructor
    const array = new Array();

    describe('element', () => {
        test('no params', () => {
            expect(() => {
                // @ts-expect-error: invalid param
                array.element();
            }).toThrow(TypeError);
        });

        test('generates valid data when invalid param provided', () => {
            // @ts-expect-error: invalid param
            const element = array.element(3);

            expect(element).toBe(undefined);
        });

        test('generates one element from an array', () => {
            const elements = ['faissaloux', 'fakedata', 7412241, true];
            const element = array.element(elements);

            expect(elements).toContain(element);
        });
    });
});
