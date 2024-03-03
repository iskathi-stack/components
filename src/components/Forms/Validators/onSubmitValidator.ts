import { FieldValidator } from '../Types/FormsTypes';

export const onSubmitValidator = <T>(validator: FieldValidator<T>) => Object.assign(validator, { onSubmit: true });

export default onSubmitValidator;
