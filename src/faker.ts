import DataUnifier, { unifiedObject } from './dataUnifier';
import Generator from './generator';

/* eslint-disable @typescript-eslint/no-explicit-any */

function useFakeData(data: {[key: string]: any}, count = 1): {[key: string]: any} {
    const generated: unifiedObject[] = [];

    const unifiedData: unifiedObject = new DataUnifier(data).unify();

    for (let i = 0; i < count; i++) {
        generated.push(generateFakeDataFor(unifiedData));
    }

    return count === 1 ? generated[0] : generated;
}

function generateFakeDataFor(data: unifiedObject): unifiedObject {
    const objectGenerated: unifiedObject = {};

    for (const [key, value] of Object.entries(data)) {
        objectGenerated[key] = 'identifier' in value
            ? new Generator(value['identifier']).generate(value['args'])
            : generateFakeDataFor(value);
    }

    return objectGenerated;
}

export { useFakeData };
