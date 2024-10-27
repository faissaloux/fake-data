import { faker } from '@faker-js/faker';

function useFakeData(data: {[key: string]: any}, count = 1) {
    let generated: {[key: string]: string}[] = [];

    for (let i = 0; i < count; i++) {
        let objectGenerated: {[key: string]: string} = {};
        for (let [key, value] of Object.entries(data)) {
            value = value.split('.');
            // @ts-ignore
            if (faker[value[0]] && typeof faker[value[0]][value[1]] === 'function' ) {
                // @ts-ignore
                objectGenerated[key] = faker[value[0]][value[1]]();
            } else {
                objectGenerated[key] = value.join('.');
            }
        }

        generated.push(objectGenerated);
    }

    return generated;
}

export { useFakeData };
