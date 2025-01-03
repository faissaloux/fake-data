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

    describe('zipCode', () => {
        test('no params', () => {
            const zipCode = location.zipCode();

            expect(typeof zipCode).toBe('string');
            expect(zipCode.length).toBeGreaterThan(2);
        });

        test('generates valid data when invalid param provided', () => {
            // @ts-expect-error: invalid param
            const zipCode = location.zipCode(0);

            expect(typeof zipCode).toBe('string');
            expect(zipCode.length).toBeGreaterThan(2);
        });

        test('string', () => {
            const zipCode = location.zipCode('81050');

            expect(typeof zipCode).toBe('string');
            expect(zipCode).toBe('81050');
        });

        test('format', () => {
            const zipCode = location.zipCode({format: '####'});

            expect(typeof zipCode).toBe('string');
            expect(zipCode.length).toBe(4);
        });
    });
});
