import fakeData from '../../src/data';

describe('data', () => {
    const dataset: string[] = [
        'location.city',
        'person.firstName',
        'person.male.firstName',
        'person.female.firstName',
        'person.lastName',
        'finance.amount',
        'finance.currencyCode',
    ];

    it.each(dataset)('generates valid option', (type) => {
        const data: {[key: string]: string} = fakeData();
        const dataKeys: string[] = Object.keys(data);

        expect(dataKeys).toContain(type);
        expect(data[type].length).toBeGreaterThan(1);
    });
});
