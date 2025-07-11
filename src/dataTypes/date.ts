import { faker } from '@faker-js/faker';

interface pastParams {
    years?: number;
    refDate?: string | number;
    separator: string;
}

interface futureParams {
    years?: number;
    refDate?: string | number;
    separator: string;
}

class Date {
    past(params: pastParams = {separator: '/'}): string {
        return faker.date.past(params).toLocaleDateString('en-UK').replaceAll('/', params['separator'] ?? '/');
    }

    future(params: futureParams = {separator: '/'}): string {
        return faker.date.future(params).toLocaleDateString('en-UK').replaceAll('/', params['separator'] ?? '/');
    }
}

export default Date;
