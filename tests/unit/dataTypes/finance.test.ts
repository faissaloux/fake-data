import Finance from '../../../src/dataTypes/finance';

describe('finance data type', () => {
    const finance = new Finance();

    describe('amount', () => {
        test('no params', () => {
            const amount = finance.amount();

            expect(typeof amount).not.toBe('number');
            expect((amount as string).includes('.')).toBeTruthy();
        });

        test('generates valid data when invalid param provided', () => {
            // @ts-expect-error: invalid param
            const amount = finance.amount('invalid');

            expect(typeof amount).toBe('string');
            expect(Number.isNaN(Number(amount))).toBeFalsy();
        });

        test('range and returns string by default', () => {
            const amount = finance.amount({min: 0, max: 1});

            expect(typeof amount).not.toBe('number');
            expect(Number(amount)).toBeGreaterThanOrEqual(0);
            expect(Number(amount)).toBeLessThanOrEqual(1);
        });

        test('range and returns number', () => {
            const amount = finance.amount({min: 0, max: 1, asNumber: true});

            expect(typeof amount).toBe('number');
            expect(amount).toBeGreaterThanOrEqual(0);
            expect(amount).toBeLessThanOrEqual(1);
        });

        test('returns int', () => {
            const amount = finance.amount({dec: 0});

            expect((amount as string).includes('.')).toBeFalsy();
        });

        test('decimals', () => {
            const amount = finance.amount({dec: 2});

            expect((amount as string).includes('.')).toBeTruthy();
            expect((amount as string).split('.')[1].length).toEqual(2);
        });

        test('symbol', () => {
            const amount = finance.amount({symbol: '$'});

            expect((amount as string).startsWith('$')).toBeTruthy();
        });

        test('symbol cancels asNumber', () => {
            const amount = finance.amount({symbol: '$', asNumber: true});

            expect(typeof amount).toBe('string');
            expect((amount as string).startsWith('$')).toBeTruthy();
        });
    });

    describe('currencyCode', function() {
        test('no params', () => {
            const currencyCode = finance.currencyCode();

            expect(typeof currencyCode).toBe('string');
            expect(currencyCode.length).toBeGreaterThan(0);
        });

        test('generates valid data when invalid param provided', () => {
            // @ts-expect-error: invalid param
            const currencyCode = finance.currencyCode('invalid');

            expect(typeof currencyCode).toBe('string');
            expect(currencyCode.length).toBeGreaterThan(0);
        });
    });

    describe('currencySymbol', function() {
        test('no params', () => {
            const currencySymbol = finance.currencySymbol();

            expect(typeof currencySymbol).toBe('string');
            expect(currencySymbol.length).toBeGreaterThan(0);
        });

        test('generates valid data when invalid param provided', () => {
            // @ts-expect-error: invalid param
            const currencySymbol = finance.currencySymbol('invalid');

            expect(typeof currencySymbol).toBe('string');
            expect(currencySymbol.length).toBeGreaterThan(0);
        });
    });
});
