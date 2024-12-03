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

    describe('paragraph', () => {
        test('no params', () => {
            const paragraph = lorem.paragraph();

            expect(typeof paragraph).toBe('string');
            expect(paragraph.length).toBeGreaterThanOrEqual(2);
            expect(paragraph.split('.').length - 1).toEqual(3); // 3 sentences by default.
        });

        test('generates valid data when invalid param provided', () => {
            // @ts-expect-error: invalid param
            const paragraph = lorem.paragraph('invalid');

            expect(typeof paragraph).toBe('string');
            expect(paragraph.length).toBeGreaterThanOrEqual(2);
            expect(paragraph.split('.').length - 1).toEqual(3); // 3 sentences by default.
        });

        test('one number parameter', () => {
            const paragraph = lorem.paragraph(2);

            expect(typeof paragraph).toBe('string');
            expect(paragraph.length).toBeGreaterThanOrEqual(2);
            expect(paragraph.split('.').length - 1).toEqual(2);
        });

        test('min and max', () => {
            const paragraph = lorem.paragraph({min: 2, max: 10});

            expect(typeof paragraph).toBe('string');
            expect(paragraph.length).toBeGreaterThan(2);
            expect(paragraph.split('.').length - 1).toBeGreaterThanOrEqual(2);
            expect(paragraph.split('.').length - 1).toBeLessThanOrEqual(10);
        });
    });
});
