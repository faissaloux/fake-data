import fakeData from '../../src/data';

describe('data', () => {
    const data: {[key: string]: string} = fakeData();
    const dataset: string[] = [
        'location.city',
        'person.firstName',
        'person.male.firstName',
        'person.female.firstName',
        'person.lastName',
        'finance.amount',
        'finance.currencyCode',
        'image.avatar',
    ];

    it.each(dataset)('generates valid option', (type) => {
        const dataKeys: string[] = Object.keys(data);

        expect(dataKeys).toContain(type);
        expect(data[type].length).toBeGreaterThan(1);
    });

    test('image avatar is a link', () => {
        expect(data['image.avatar'].startsWith('https://')).toBeTruthy();
    });
});
