import { describe, expect, test } from 'vitest';
import emailValidator from './emailValidator';

describe('emailValidator tests', () => {
    test.each([
        ['qwe@rty', false],
        ['@rty.com', false],
        ['qwerty.com', false],
        ['qwe.rty.com', false],
        ['qwe%^&@rty.com', false],
        ['qwe@rty.com', true],
        ['name.lastname@domain.com', true],
    ])('should validate correctly for - %s', (value, isValid) => {
        expect(emailValidator()(value).isValid).toBe(isValid);
    });
});
