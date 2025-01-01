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

{
    driver: "Krystal",
    from: "New York",
    to: "Connport"
}
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
        from: "Archibaldburgh",
        to: "Port Dashawnport",
        driver: {
            first_name: "Walker",
        }
    },
    {
        from: "Port Charlotte",
        to: "West Myles",
        driver: {
            first_name: "Mercedes",
        }
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

{
    from: "Helmerbury",
    to: "New Minniestead",
    driver: {
        first_name: "Michael",
        price: 66.51
    }
}
```

## Supported data
<table>
<tr>
    <th>Data type</th>
    <th>Identifier</th>
    <th>Return type</th>
    <th>Args type</th>
    <th>Options</th>
</tr>
<tr>
    <td rowspan='2'>location</td>
    <td>location.city</td>
    <td>string</td>
    <td>[No params]</td>
    <td>[No params]</td>
</tr>
<tr>
    <td>location.country</td>
    <td>string</td>
    <td>[No params]</td>
    <td>[No params]</td>
</tr>
<tr>
    <td rowspan='11'>person</td>
    <td>person.firstName</td>
    <td>string</td>
    <td>'male'\|'female'</td>
    <td>'male' or 'female'</td>
</tr>
<tr>
    <td>person.middleName</td>
    <td>string</td>
    <td>'male'\|'female'</td>
    <td>'male' or 'female'</td>
</tr>
<tr>
    <td>person.lastName</td>
    <td>string</td>
    <td>'male'\|'female'</td>
    <td>'male' or 'female'</td>
</tr>
<tr>
    <td>person.fullName</td>
    <td>string</td>
    <td>object</td>
    <td>{<br>
        firstName?: string,<br>
        lastName?: string,<br>
        sex?: 'male' | 'female'<br>
        }
    </td>
</tr>
<tr>
    <td>person.prefix</td>
    <td>string</td>
    <td>'male'\|'female'</td>
    <td>'male' or 'female'</td>
</tr>
<tr>
    <td>person.suffix</td>
    <td>string</td>
    <td>[No params]</td>
    <td>[No params]</td>
</tr>
<tr>
    <td>person.jobArea</td>
    <td>string</td>
    <td>[No params]</td>
    <td>[No params]</td>
</tr>
<tr>
    <td>person.jobTitle</td>
    <td>string</td>
    <td>[No params]</td>
    <td>[No params]</td>
</tr>
<tr>
    <td>person.jobType</td>
    <td>string</td>
    <td>[No params]</td>
    <td>[No params]</td>
</tr>
<tr>
    <td>person.jobDescriptor</td>
    <td>string</td>
    <td>[No params]</td>
    <td>[No params]</td>
</tr>
<tr>
    <td>person.sex</td>
    <td>string</td>
    <td>[No params]</td>
    <td>[No params]</td>
</tr>
<tr>
    <td rowspan='3'>finance</td>
    <td>finance.amount</td>
    <td>string\|number</td>
    <td>object</td>
    <td>{<br>
        min?: number,<br>
        max?: number,<br>
        dec?: number,<br>
        symbol: string,<br>
        asNumber?: boolean<br>
        }
    </td>
</tr>
<tr>
    <td>finance.currencyCode</td>
    <td>string</td>
    <td>[No params]</td>
    <td>[No params]</td>
</tr>
<tr>
    <td>finance.currencySymbol</td>
    <td>string</td>
    <td>[No params]</td>
    <td>[No params]</td>
</tr>
<tr>
    <td rowspan='1'>commerce</td>
    <td>commerce.product</td>
    <td>string</td>
    <td>[No params]</td>
    <td>[No params]</td>
</tr>
<tr>
    <td rowspan='1'>image</td>
    <td>image.avatar</td>
    <td>string</td>
    <td>[No params]</td>
    <td>[No params]</td>
</tr>
<tr>
    <td rowspan='2'>system</td>
    <td>system.mimeType</td>
    <td>string</td>
    <td>[No params]</td>
    <td>[No params]</td>
</tr>
<tr>
    <td>system.semver</td>
    <td>string</td>
    <td>[No params]</td>
    <td>[No params]</td>
</tr>
<tr>
    <td rowspan='2'>phone</td>
    <td>phone.imei</td>
    <td>string</td>
    <td>[No params]</td>
    <td>[No params]</td>
</tr>
<tr>
    <td>phone.number</td>
    <td>string</td>
    <td>[No params]</td>
    <td>[No params]</td>
</tr>
<tr>
    <td rowspan='1'>internet</td>
    <td>internet.email</td>
    <td>string</td>
    <td>object</td>
    <td>{<br>
        firstName?: string,<br>
        lastName?: string,<br>
        provider?: string<br>
        }
    </td>
</tr>
<tr>
    <td rowspan='3'>lorem</td>
    <td>lorem.text</td>
    <td>string</td>
    <td>[No params]</td>
    <td>[No params]</td>
</tr>
<tr>
    <td>lorem.word</td>
    <td>string</td>
    <td>number\|object</td>
    <td>number or {<br>
        length?: number or {<br>
        min: number,<br>
        max: number<br>
        }<br>
        }
    </td>
</tr>
<tr>
    <td>lorem.paragraph</td>
    <td>string</td>
    <td>number\|object</td>
    <td>number or {<br>
        min: number,<br>
        max: number<br>
        }
    </td>
</tr>
<tr>
    <td rowspan='1'>number</td>
    <td>number.int</td>
    <td>number</td>
    <td>number\|object</td>
    <td>number or {<br>
        min?: number,<br>
        max?: number,<br>
        multipleOf?: number<br>
        }
    </td>
</tr>
<tr>
    <td rowspan='1'>array</td>
    <td>array.element</td>
    <td>T</td>
    <td>array<T></td>
    <td>array<T></td>
</tr>
<tr>
    <td rowspan='1'>date</td>
    <td>date.past</td>
    <td>string</td>
    <td>object</td>
    <td>{<br>
        years?: number,<br>
        refDate?: string | number,<br>
        separator: string<br>
        }
    </td>
</tr>
</table>
