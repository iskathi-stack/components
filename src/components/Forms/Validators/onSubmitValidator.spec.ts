import { describe, expect, test } from 'vitest';
import emailValidator from './emailValidator';
import onSubmitValidator from './onSubmitValidator';

describe('onSubmitValidator tests', () => {
    test('should mark validators onSubmit', () => {
        const validator = emailValidator();
        expect(validator.onSubmit).toBeUndefined();
        onSubmitValidator(validator);
        expect(validator.onSubmit).toBeTruthy();
    });
});
