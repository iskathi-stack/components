import { FieldValidator } from '../Types/FormsTypes';

export const requiredValidator: () => FieldValidator<string> = () => (value) => {
    if (value === null || /^ *$/.test(value)) return { isValid: false, message: 'Value is required' };

    return { isValid: true };
};

export default requiredValidator;
