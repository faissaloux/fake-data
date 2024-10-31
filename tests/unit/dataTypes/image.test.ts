import Image from '../../../src/dataTypes/image';

describe('image data type', () => {
    const image = new Image();

    describe('avatar', () => {
        test('no params', () => {
            const avatar = image.avatar();

            expect(typeof avatar).toBe('string');
            expect(avatar.startsWith('https://')).toBeTruthy();
        });

        test('generates valid data when invalid param provided', () => {
            // @ts-expect-error: invalid param
            const avatar = image.avatar('invalid');

            expect(typeof avatar).toBe('string');
            expect(avatar.startsWith('https://')).toBeTruthy();
        });
    });
});
