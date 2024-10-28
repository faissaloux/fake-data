import fakeData from "./data";

class Generator {
    private data: {[key: string]: string} = fakeData();

    constructor(private value: string) {}

    generate() {
        return this.data[this.value] ? this.data[this.value] : this.value;
    }
}

export default Generator;
