import fakeData from "../../src/data";

describe('data', () => {
    test('generates valid option', () => {
        const data: {[key: string]: string} = fakeData();
        const dataKeys: string[] = Object.keys(data);

        expect(dataKeys).toContain('location.city');
        expect(dataKeys).toContain('person.firstName');
        expect(dataKeys).toContain('person.male.firstName');
        expect(dataKeys).toContain('person.female.firstName');
        expect(dataKeys).toContain('person.lastName');

        expect(data['location.city'].length).toBeGreaterThan(1);
        expect(data['person.firstName'].length).toBeGreaterThan(1);
        expect(data['person.male.firstName'].length).toBeGreaterThan(1);
        expect(data['person.female.firstName'].length).toBeGreaterThan(1);
        expect(data['person.lastName'].length).toBeGreaterThan(1);
    });
});
