import Generator from '../../src/generator';

describe('generator', () => {
    test('generates valid option', () => {
        const data = new Generator('person.firstName').generate();

        expect(data).not.toEqual('person.firstName');
        expect(data.length).toBeGreaterThan(2);
    });

    test('keeps leteral value when data type is not supported', () => {
        const data = new Generator('not_supported.firstName').generate();

        expect(data).toEqual('not_supported.firstName');
    });

    test('keeps leteral value when option is not supported', () => {
        const data = new Generator('person.not_supported').generate();

        expect(data).toEqual('person.not_supported');
    });
});
