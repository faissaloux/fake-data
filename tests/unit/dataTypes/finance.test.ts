import Finance from '../../../src/dataTypes/finance';

describe('finance data type', () => {
    describe('amount', () => {
        test('no params', () => {
            const amount = new Finance().amount();

            expect(typeof amount).not.toBe('number');
            expect((amount as string).includes('.')).toBeTruthy();
        });

        test('range and returns string by default', () => {
            const amount = new Finance().amount({min: 0, max: 1});

            expect(typeof amount).not.toBe('number');
            expect(Number(amount)).toBeGreaterThan(0);
            expect(Number(amount)).toBeLessThanOrEqual(1);
        });

        test('range and returns number', () => {
            const amount = new Finance().amount({min: 0, max: 1, asNumber: true});

            expect(typeof amount).toBe('number');
            expect(amount).toBeGreaterThan(0);
            expect(amount).toBeLessThanOrEqual(1);
        });

        test('returns int', () => {
            const amount = new Finance().amount({dec: 0});

            expect((amount as string).includes('.')).toBeFalsy();
        });

        test('decimals', () => {
            const amount = new Finance().amount({dec: 2});

            expect((amount as string).includes('.')).toBeTruthy();
            expect((amount as string).split('.')[1].length).toEqual(2);
        });

        test('symbol', () => {
            const amount = new Finance().amount({symbol: '$'});

            expect((amount as string).startsWith('$')).toBeTruthy();
        });

        test('symbol cancels asNumber', () => {
            const amount = new Finance().amount({symbol: '$', asNumber: true});

            expect(typeof amount).toBe('string');
            expect((amount as string).startsWith('$')).toBeTruthy();
        });
    });
});
