import Generator from './generator';

function useFakeData(data: {[key: string]: string}, count = 1): {[key: string]: string}[] {
    const generated: {[key: string]: string}[] = [];

    for (let i = 0; i < count; i++) {
        const objectGenerated: {[key : string]: string} = {};

        for (const [key, value] of Object.entries(data)) {
            objectGenerated[key] = new Generator(value).generate();
        }

        generated.push(objectGenerated);
    }

    return generated;
}

export { useFakeData };
