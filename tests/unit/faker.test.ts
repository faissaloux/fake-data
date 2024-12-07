import { useFakeData } from '../../src';

describe('faker', () => {
    test('all dataTypes Supported', () => {
        const data = useFakeData({
            commerce: 'commerce.product',
            finance: 'finance.amount',
            image: 'image.avatar',
            internet: 'internet.email',
            location: 'location.city',
            person: 'person.firstName',
            phone: 'phone.number',
            system: 'system.semver',
        });

        expect(typeof data).not.toBe('array');
        expect(data['commerce']).not.toEqual('commerce.product');
        expect(data['finance']).not.toEqual('finance.amount');
        expect(data['image']).not.toEqual('image.avatar');
        expect(data['internet']).not.toEqual('internet.email');
        expect(data['location']).not.toEqual('location.city');
        expect(data['person']).not.toEqual('person.firstName');
        expect(data['phone']).not.toEqual('phone.number');
        expect(data['system']).not.toEqual('system.semver');
    });

    test('generate one by default', () => {
        const data = useFakeData({
            departure: 'location.city',
            destination: 'location.city',
        });

        expect(typeof data).not.toBe('array');
        expect(data).toHaveProperty('departure');
        expect(data).toHaveProperty('destination');
    });

    test('can specify number of records', () => {
        const data = useFakeData({
            first_name: 'person.firstName',
            last_name: 'person.lastName',
        }, 4);

        expect(Array.isArray(data)).toBeTruthy();
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

        expect(Array.isArray(data)).toBeTruthy();
        expect(data).toHaveLength(2);
        expect(data[0]['first_name']).not.toEqual(data[1]['first_name']);
        expect(data[0]['last_name']).not.toEqual(data[1]['last_name']);
    });

    test('keeps leteral value when not supported', () => {
        const data = useFakeData({
            departure: 'notsupported',
            destination: 'notsupported'
        });

        expect(typeof data).not.toBe('array');
        expect(data).toHaveProperty('departure');
        expect(data).toHaveProperty('destination');
        expect(data['departure']).toBe('notsupported');
        expect(data['destination']).toBe('notsupported');
    });

    test('keeps leteral value when function not supported', () => {
        const data = useFakeData({
            departure: 'internet.notsupported',
            destination: 'internet.notsupported',
        });

        expect(typeof data).not.toBe('array');
        expect(data).toHaveProperty('departure');
        expect(data).toHaveProperty('destination');
        expect(data['departure']).toBe('internet.notsupported');
        expect(data['destination']).toBe('internet.notsupported');
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

        expect(Array.isArray(data)).toBeTruthy();
        expect(data).toHaveLength(2);
        expect(data[0]).toHaveProperty('departure');
        expect(data[0]).toHaveProperty('destination');
        expect(data[0]).toHaveProperty('driver');
        expect(data[0]).toHaveProperty('driver.first_name');
        expect(data[0]).toHaveProperty('driver.last_name');
        expect(data[0]['driver']['first_name']).not.toEqual('person.firstName');
        expect(data[0]['driver']['first_name'].length).toBeGreaterThan(1);
        expect(data[0]['driver']['price']['amount']).toEqual(20);
        expect(data[0]['driver']['price']['currency']).toEqual('MAD');
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
                        identifier: 'finance.amount',
                        args: {min: 0, max: 100, asNumber: true}
                    },
                    currency: 'finance.currencyCode',
                }
            }
        }, 2) as any;   // eslint-disable-line @typescript-eslint/no-explicit-any

        expect(data[0]['driver']['price']['amount']).toBeLessThanOrEqual(100);
        expect(data[0]['driver']['price']['amount']).toBeGreaterThanOrEqual(0);
    });
});
