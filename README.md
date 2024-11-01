# fake-data

Stimulates your API response to make it easy to test your frontend without (before) using your real one.

[![Tests](https://github.com/faissaloux/fake-data/actions/workflows/test.yml/badge.svg)](https://github.com/faissaloux/fake-data/actions/workflows/test.yml) [![codecov](https://codecov.io/gh/faissaloux/fake-data/graph/badge.svg)](https://codecov.io/gh/faissaloux/fake-data) [![npm version](https://badge.fury.io/js/@faissaloux%2Ffake-data.svg)](https://badge.fury.io/js/@faissaloux%2Ffake-data) ![NPM Downloads](https://img.shields.io/npm/d18m/%40faissaloux%2Ffake-data) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/faissaloux/fake-data/blob/main/LICENSE)

## Installation

```bash
    npm install @faissaloux/fake-data
```
or
```bash
    yarn add @faissaloux/fake-data
```

## Usage

To generate an array of fake data objects you can use `useFakeData`.
```js
import { useFakeData } from '@faissaloux/fake-data';

const popularTrips = useFakeData({
    driver: 'person.firstName',
    from: 'location.city',
    to: 'location.city'
});
```

```js
// popularTrips

[
    {
        driver: "Krystal",
        from: "New York",
        to: "Connport"
    }
]
```

You can even specify how much data you want, by passing the count as the 2nd argument.
```js
import { useFakeData } from '@faissaloux/fake-data';

const popularTrips = useFakeData({
    from: 'location.city',
    to: 'location.city',
    driver: {
        'first_name': 'person.firstName'
    }
}, 2);
```

```js
// popularTrips

[
    {
        driver: {
            first_name: "Walker",
        },
        from: "Archibaldburgh",
        to: "Port Dashawnport"
    },
    {
        driver: {
            first_name: "Mercedes",
        },
        from: "Port Charlotte",
        to: "West Myles"
    }
]
```

### Use args to customize your data
You can customize your data by using `args`.

```js
import { useFakeData } from '@faissaloux/fake-data';

const popularTrips = useFakeData({
    from: 'location.city',
    to: 'location.city',
    driver: {
        first_name: 'person.firstName',
        price: {
            identifier: 'finance.amount',
            args: {min: 0, max: 100, asNumber: true}
        },
    }
});
```

```js
// popularTrips

[
    {
        driver: {
            first_name: "Michael",
            price: 66.51
        },
        from: "Helmerbury",
        to: "New Minniestead"
    }
]
```

## Supported data
| Identifier            | Return type       | Args type             | Options               |
| --------------------- | ----------------- | --------------------- | --------------------- |
| location.city         | string            | [No params]           | [No params]           |
| person.firstName      | string            | 'male'\|'female'      | 'male' or 'female'    |
| person.lastName       | string            | 'male'\|'female'      | 'male' or 'female'    |
| finance.amount        | string\|number    | object                | min?: number          |
|                       |                   |                       | max?: number          |
|                       |                   |                       | dec?: number          |
|                       |                   |                       | symbol: string        |
|                       |                   |                       | asNumber?: boolean    |
| finance.currencyCode  | string            | [No params]           | [No params]           |
| image.avatar          | string            | [No params]           | [No params]           |
