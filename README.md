# fake-data

Make it easy to test your frontend with fake data structured same as your API output.

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

const PopularTrips = useFakeData({
    from: 'location.city',
    to: 'location.city',
});
```

You can even specify how much data you want, by passing the count as the 2nd argument.
```js
import { useFakeData } from '@faissaloux/fake-data';

const PopularTrips = useFakeData({
    from: 'location.city',
    to: 'location.city',
}, 6);
```

## Supported data
- location.city
- person.firstName
- person.male.firstName
- person.female.firstName
- person.lastName
