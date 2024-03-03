import { FieldValidator } from '../Types/FormsTypes';

export type PasswordValidatorProps = {
    minLength?: number;
    maxLength?: number;
    letters?: boolean;
    numbers?: boolean;
    symbols?: boolean;
};

export const passwordValidator: (props: PasswordValidatorProps) => FieldValidator<string> =
    ({ minLength, maxLength, letters, numbers, symbols }) =>
    (value) => {
        if (value === null) return { isValid: true };

        if (minLength && value.length < minLength)
            return { isValid: false, message: `Password needs to be a minimum of ${minLength} characters long` };

        if (maxLength && value.length > maxLength)
            return { isValid: false, message: `Password needs to be a maximum of ${maxLength} characters long` };

        if (letters && !/[A-Za-z]+/.test(value))
            return { isValid: false, message: 'Password needs to contain letters' };

        if (numbers && !/\d+/.test(value)) return { isValid: false, message: 'Password needs to contain numbers' };

        if (symbols && !/[@$!%*#?&]+/.test(value))
            return { isValid: false, message: 'Password needs to contain symbols' };

        return { isValid: true };
    };

export default passwordValidator;
