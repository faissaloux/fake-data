import { faker } from '@faker-js/faker';

interface pastParams {
    years?: number;
    refDate?: string | number;
    separator: string;
}

class Date {
    past(params: pastParams = {separator:'/'}): string {
        return faker.date.past(params).toLocaleDateString('en-UK').replaceAll('/', params['separator'] ?? '/');
    }
}

export default Date;
