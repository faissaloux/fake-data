import { faker } from '@faker-js/faker';

class Image {
    avatar(): string {
        return faker.image.avatar();
    }
}

export default Image;
