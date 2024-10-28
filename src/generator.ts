import fakeData from "./data";

class Generator {
    private value: string;
    private data: {[key: string]: string} = fakeData();

    constructor(value: string) {
        this.value = value;
    }

    generate() {
        return this.data[this.value] ? this.data[this.value] : this.value;
    }
}

export default Generator;
