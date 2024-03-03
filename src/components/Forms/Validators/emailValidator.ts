import { FieldValidator } from '../Types/FormsTypes';

export const emailValidator: () => FieldValidator<string> = () => (value) => {
    if (value === null) return { isValid: true };

    if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(value))
        return { isValid: false, message: 'Email is invalid' };

    return { isValid: true };
};

export default emailValidator;
