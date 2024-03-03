import { describe, expect, test } from 'vitest';
import passwordValidator from './passwordValidator';

describe('passwordValidator tests', () => {
    test.each([
        [{ letters: true }, '123456', false],
        [{ numbers: true }, 'qwerty', false],
        [{ symbols: true }, 'qwe123', false],
        [{ minLength: 3 }, '12', false],
        [{ maxLength: 3 }, '1234', false],
        [{ letters: true }, '1234q', true],
        [{ numbers: true }, 'qwert1', true],
        [{ symbols: true }, 'qwe12$', true],
        [{ minLength: 3 }, '123', true],
        [{ maxLength: 3 }, '123', true],
    ])('should validate correctly for - %s', (props, value, isValid) => {
        const validator = passwordValidator(props);

        expect(validator(value).isValid).toBe(isValid);
    });
});
