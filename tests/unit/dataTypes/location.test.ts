import Location from '../../../src/dataTypes/location';

describe('location data type', () => {
    const location = new Location();

    describe('city', () => {
        test('no params', () => {
            const city = location.city();

            expect(typeof city).toBe('string');
            expect(city.length).toBeGreaterThan(2);
        });

        test('generates valid data when invalid param provided', () => {
            // @ts-expect-error: invalid param
            const city = location.city('invalid');

            expect(typeof city).toBe('string');
            expect(city.length).toBeGreaterThan(2);
        });
    });

    describe('country', () => {
        test('no params', () => {
            const country = location.country();

            expect(typeof country).toBe('string');
            expect(country.length).toBeGreaterThan(2);
        });

        test('generates valid data when invalid param provided', () => {
            // @ts-expect-error: invalid param
            const country = location.country('invalid');

            expect(typeof country).toBe('string');
            expect(country.length).toBeGreaterThan(2);
        });
    });
});
