import DataUnifier from '../../src/dataUnifier';

describe('data unifier', () => {
    test('stringToObject', () => {
        expect(new DataUnifier({}).stringToObject('person.firstName')).toStrictEqual({
            '_': 'person.firstName'
        });
    });

    test('unifyObject', () => {
        expect(new DataUnifier({}).unifyObject({first_name: 'person.firstName'})).toStrictEqual({
            first_name: {
                _: 'person.firstName',
            }
        });
    });

    test('unify data', () => {
        const data = {
            destination: 'location.city',
            driver: {
                first_name: 'person.firstName',
                price: {
                    _: 'finance.amount',
                    args: {min: 10, max: 100}
                }
            }
        };

        const expected = {
            destination: {
                _: 'location.city',
            },
            driver: {
                first_name: {
                    _: 'person.firstName',
                },
                price: {
                    _: 'finance.amount',
                    args: {min: 10, max: 100}
                }
            }
        };

        expect(new DataUnifier(data).unify()).toStrictEqual(expected);
    });
});
