import Phone from '../../../src/dataTypes/phone';

describe('phone data type', () => {
    const phone = new Phone();

    describe('imei', () => {
        test('no params', () => {
            const imei = phone.imei();

            expect(typeof imei).toBe('string');
            expect(imei.length).toBeGreaterThan(2);
        });

        test('generates valid data when invalid param provided', () => {
            // @ts-expect-error: invalid param
            const imei = phone.imei('invalid');

            expect(typeof imei).toBe('string');
            expect(imei.length).toBeGreaterThan(2);
        });
    });

    describe('number', () => {
        test('no params', () => {
            const number = phone.number();

            expect(typeof number).toBe('string');
            expect(number.length).toBeGreaterThan(2);
        });

        test('generates valid data when invalid param provided', () => {
            // @ts-expect-error: invalid param
            const number = phone.number('invalid');

            expect(typeof number).toBe('string');
            expect(number.length).toBeGreaterThan(2);
        });
    });
});
