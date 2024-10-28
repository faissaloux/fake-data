import Generator from '../../src/generator';

describe('generator', () => {
    test('generates valid option', () => {
        const data = new Generator('person.male.firstName').generate();

        expect(data).not.toEqual('person.male.firstName');
        expect(data.length).toBeGreaterThan(0);
    });

    test('keeps leteral value when option is not supported', () => {
        const data = new Generator('person.male.not_supported').generate();

        expect(data).toEqual('person.male.not_supported');
    });
});
