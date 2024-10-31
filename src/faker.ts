import DataUnifier from './dataUnifier';
import Generator from './generator';

/* eslint-disable @typescript-eslint/no-explicit-any */

function useFakeData(data: {[key: string]: any}, count = 1): {[key: string]: any}[] {
    const generated: {[key: string]: any}[] = [];

    const unifiedData: {[key: string]: any} = new DataUnifier(data).unify();

    for (let i = 0; i < count; i++) {
        generated.push(generateFakeDataFor(unifiedData));
    }

    return generated;
}

function generateFakeDataFor(data: {[key: string]: any}): {[key : string]: any} {
    const objectGenerated: {[key : string]: string|{[key: string]: string}} = {};

    for (const [key, value] of Object.entries(data)) {
        objectGenerated[key] = typeof value === 'object' && ! ('_' in value)
            ? generateFakeDataFor(value)
            : new Generator(value['_']).generate(value['args']);
    }

    return objectGenerated;
}

export { useFakeData };
