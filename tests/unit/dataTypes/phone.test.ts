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
});
