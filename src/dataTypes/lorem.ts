import { faker } from '@faker-js/faker';

type ParagraphParams =
    | number
    | {
        min: number;
        max: number;
    };

type WordOptions =
    | number
    | {
        length?:
        | number
        | {
            min: number;
            max: number;
        };
    }

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

    word(options: WordOptions = {}): string {
        return faker.lorem.word(options);
    }
}

export default Lorem;
