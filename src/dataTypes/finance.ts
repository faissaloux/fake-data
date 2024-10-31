import { faker } from '@faker-js/faker';

class Finance {
    amount(): string {
        return faker.finance.amount();
    }

    currencyCode(): string {
        return faker.finance.currencyCode();
    }
}

export default Finance;
