import { faker } from '@faker-js/faker';

interface amountParams {
    min?: number;
    max?: number;
    dec?: number;
    symbol?: string;
    asNumber?: boolean;
}

class Finance {
    amount(params: amountParams = {}): string|number {
        if (params === null) {
            params = {};
        }

        if (params['asNumber'] && ! params['symbol']) {
            delete params['asNumber'];

            return Number(faker.finance.amount(params));
        }

        return faker.finance.amount(params);
    }

    currencyCode(): string {
        return faker.finance.currencyCode();
    }

    currencySymbol(): string {
        return faker.finance.currencySymbol();
    }
}

export default Finance;
