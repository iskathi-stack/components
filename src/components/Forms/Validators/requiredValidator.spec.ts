import { describe, expect, test } from 'vitest';
import requiredValidator from './requiredValidator';

describe('requiredValidator tests', () => {
    test.each([
        [null, false],
        ['', false],
        [' ', false],
        ['   ', false],
        [' a ', true],
    ])('should validate correctly for - %s', (value, isValid) => {
        expect(requiredValidator()(value).isValid).toBe(isValid);
    });
});
