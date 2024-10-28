import fakeData from "../../src/data";

describe('data', () => {
    test('generates valid option', () => {
        const dataKeys = Object.keys(fakeData());

        expect(dataKeys).toContain('location.city');
        expect(dataKeys).toContain('person.firstName');
        expect(dataKeys).toContain('person.male.firstName');
        expect(dataKeys).toContain('person.female.firstName');
        expect(dataKeys).toContain('person.lastName');
    });
});
