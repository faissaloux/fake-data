import { faker } from '@faker-js/faker';

type ParagraphParams =
    | number
    | {
        min: number;
        max: number;
    };

class Lorem {
    text(): string {
        return faker.lorem.text();
    }

    paragraph(sentenceCount: ParagraphParams = 3): string {
        if (typeof sentenceCount !== 'number' && typeof sentenceCount !== 'object') {
            sentenceCount = 3;
        }

        return faker.lorem.paragraph(sentenceCount);
    }
}

export default Lorem;
