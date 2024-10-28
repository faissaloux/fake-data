import Generator from './generator';

function useFakeData(data: {[key: string]: any}, count = 1): {[key: string]: string}[] {
    let generated: {[key: string]: string}[] = [];

    for (let i = 0; i < count; i++) {
        let objectGenerated: {[key: string]: string} = {};

        for (let [key, value] of Object.entries(data)) {
            objectGenerated[key] = new Generator(value).generate();
        }

        generated.push(objectGenerated);
    }

    return generated;
}

export { useFakeData };
