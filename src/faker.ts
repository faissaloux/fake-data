import Generator from './generator';

/* eslint-disable @typescript-eslint/no-explicit-any */

function useFakeData(data: {[key: string]: any}, count = 1): {[key: string]: any}[] {
    const generated: {[key: string]: any}[] = [];

    for (let i = 0; i < count; i++) {
        generated.push(generateFakeDataFor(data));
    }

    return generated;
}

function generateFakeDataFor(data: {[key: string]: any}): {[key : string]: any} {
    const objectGenerated: {[key : string]: string|{[key: string]: string}} = {};

    for (const [key, value] of Object.entries(data)) {
        objectGenerated[key] = typeof value === 'object'
            ? generateFakeDataFor(value)
            : new Generator(value).generate();
    }

    return objectGenerated;
}

export { useFakeData };
