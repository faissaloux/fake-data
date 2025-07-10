import DateDataType from '../../../src/dataTypes/date';

describe('date data type', () => {
    const date = new DateDataType();

    describe('past', () => {
        function inPast(date: string, separator = '/'): boolean {
            const pastSplitted = date.split(separator);
            const pastFormatted = new Date(`${pastSplitted[2]}-${pastSplitted[1]}-${pastSplitted[0]}`);

            return pastFormatted.getTime() < Date.now();
        }

        test('no params', () => {
            const past = date.past();
            const dateFormat = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/g;

            expect(dateFormat.test(past)).toBeTruthy();
            expect(typeof past).toBe('string');
            expect(inPast(past)).toBeTruthy();
            expect(past.match(/\//g) || []).toHaveLength(2);
        });

        test('generates valid data when invalid param provided', () => {
            // @ts-expect-error: invalid param
            const past = date.past(3);
            const dateFormat = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/g;

            expect(dateFormat.test(past)).toBeTruthy();
            expect(typeof past).toBe('string');
            expect(inPast(past)).toBeTruthy();
            expect(past.match(/\//g) || []).toHaveLength(2);
        });

        test('generates valid data with customized separator', () => {
            const past = date.past({years: 3, separator: '-'});
            const dateFormat = /^(\d{1,2})-(\d{1,2})-(\d{4})$/g;

            expect(dateFormat.test(past)).toBeTruthy();
            expect(typeof past).toBe('string');
            expect(inPast(past, '-')).toBeTruthy();
            expect(past.match(/\//g) || []).toHaveLength(0);
            expect(past.match(/-/g) || []).toHaveLength(2);
        });
    });

    describe('future', () => {
        function inFuture(date: string, separator = '/'): boolean {
            const futureSplitted = date.split(separator);
            const futureFormatted = new Date(`${futureSplitted[2]}-${futureSplitted[1]}-${futureSplitted[0]}`);

            return futureFormatted.getTime() > Date.now();
        }

        test('no params', () => {
            const future = date.future();
            const dateFormat = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/g;

            expect(dateFormat.test(future)).toBeTruthy();
            expect(typeof future).toBe('string');
            expect(inFuture(future)).toBeTruthy();
            expect(future.match(/\//g) || []).toHaveLength(2);
        });

        test('generates valid data when invalid param provided', () => {
            // @ts-expect-error: invalid param
            const future = date.future(3);
            const dateFormat = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/g;

            expect(dateFormat.test(future)).toBeTruthy();
            expect(typeof future).toBe('string');
            expect(inFuture(future)).toBeTruthy();
            expect(future.match(/\//g) || []).toHaveLength(2);
        });

        test('generates valid data with customized separator', () => {
            const future = date.future({years: 3, separator: '-'});
            const dateFormat = /^(\d{1,2})-(\d{1,2})-(\d{4})$/g;

            expect(dateFormat.test(future)).toBeTruthy();
            expect(typeof future).toBe('string');
            expect(inFuture(future, '-')).toBeTruthy();
            expect(future.match(/\//g) || []).toHaveLength(0);
            expect(future.match(/-/g) || []).toHaveLength(2);
        });
    });
});
