import { faker } from '@faker-js/faker';

interface emailParams {
    firstName?: string;
    lastName?: string;
    provider?: string;
}

class Internet {
    email(params: emailParams = {}): string {
        if (params === null) {
            params = {};
        }

        return faker.internet.email(params);
    }
}

export default Internet;
