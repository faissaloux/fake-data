import { useFakeData } from '../../src';

describe('faker', () => {
    test('generate one by default', () => {
        const data = useFakeData({
            departure: 'location.city',
            destination: 'location.city',
        });

        expect(data).toHaveLength(1);
        expect(data[0]).toHaveProperty('departure');
        expect(data[0]).toHaveProperty('destination');
    });

    test('can specify number of records', () => {
        const data = useFakeData({
            first_name: 'person.firstName',
            last_name: 'person.lastName',
        }, 4);

        expect(data).toHaveLength(4);
        expect(data[0]).toHaveProperty('first_name');
        expect(data[0]).toHaveProperty('last_name');
        expect(data[0]['first_name']).not.toEqual('person.firstName');
        expect(data[0]['last_name']).not.toEqual('person.lastName');
    });

    test('generates different records', () => {
        const data = useFakeData({
            first_name: 'person.firstName',
            last_name: 'person.lastName',
        }, 2);

        expect(data).toHaveLength(2);
        expect(data[0]['first_name']).not.toEqual(data[1]['first_name']);
        expect(data[0]['last_name']).not.toEqual(data[1]['last_name']);
    });

    test('keeps leteral value when not supported', () => {
        const data = useFakeData({
            departure: 'notsupported',
            destination: 'notsupported'
        });

        expect(data).toHaveLength(1);
        expect(data[0]).toHaveProperty('departure');
        expect(data[0]).toHaveProperty('destination');
        expect(data[0]['departure']).toBe('notsupported');
        expect(data[0]['destination']).toBe('notsupported');
    });

    test('keeps leteral value when function not supported', () => {
        const data = useFakeData({
            departure: 'internet.notsupported',
            destination: 'internet.notsupported',
        });

        expect(data).toHaveLength(1);
        expect(data[0]).toHaveProperty('departure');
        expect(data[0]).toHaveProperty('destination');
        expect(data[0]['departure']).toBe('internet.notsupported');
        expect(data[0]['destination']).toBe('internet.notsupported');
    });

    test('generates nested objects', () => {
        const data = useFakeData({
            departure: 'location.city',
            destination: 'location.city',
            driver: {
                first_name: 'person.firstName',
                last_name: 'person.lastName',
                price: {
                    amount: 20,
                    currency: 'MAD',
                }
            }
        }, 2);

        expect(data).toHaveLength(2);
        expect(data[0]).toHaveProperty('departure');
        expect(data[0]).toHaveProperty('destination');
        expect(data[0]).toHaveProperty('driver');
        expect(data[0]).toHaveProperty('driver.first_name');
        expect(data[0]).toHaveProperty('driver.last_name');
        expect(data[0]['driver']['first_name']).not.toEqual('person.firstName');
        expect(data[0]['driver']['first_name'].length).toBeGreaterThan(1);
        expect(data[0]['driver']['price']['currency'].length).toBeGreaterThan(1);
    });

    test('generates configured data with args', () => {
        const data = useFakeData({
            departure: 'location.city',
            destination: 'location.city',
            driver: {
                first_name: 'person.firstName',
                last_name: 'person.lastName',
                price: {
                    amount: {
                        _: 'finance.amount',
                        args: {min: 0, max: 100, asNumber: true}
                    },
                    currency: 'MAD',
                }
            }
        }, 2);

        expect(data[0]['driver']['price']['amount']).toBeLessThanOrEqual(100);
        expect(data[0]['driver']['price']['amount']).toBeGreaterThanOrEqual(0);
    });
});
