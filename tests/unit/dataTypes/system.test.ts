import System from '../../../src/dataTypes/system';

describe('system data type', () => {
    const system = new System();

    describe('mimeType', () => {
        test('no params', () => {
            const mimeType = system.mimeType();

            expect(typeof mimeType).toBe('string');
            expect(mimeType.length).toBeGreaterThan(2);
        });

        test('generates valid data when invalid param provided', () => {
            // @ts-expect-error: invalid param
            const mimeType = system.mimeType('invalid');

            expect(typeof mimeType).toBe('string');
            expect(mimeType.length).toBeGreaterThan(2);
        });
    });
});
