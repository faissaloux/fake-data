import { faker } from '@faker-js/faker';

interface pastParams {
    years?: number;
    refDate?: string | number;
}

class Date {
    past(params: pastParams = {}, separator = '/'): string {
        return faker.date.past(params).toLocaleDateString('en-UK').replaceAll('/', separator);
    }
}

export default Date;
