import { useCallback, useMemo } from 'react';
import Input from '../../../Input';
import { InputProps } from '../../../Input/Input';
import { useFormContext } from '../../Form/Form.context';
import { FieldProps } from '../../Types/FormsTypes';

export type TextFieldProps<T extends Record<string, string>> = FieldProps<T> &
    Omit<InputProps, 'onChange' | 'name' | 'value' | 'info'>;

export const TextField = <T extends Record<string, string>>({ label, name, ...inputProps }: TextFieldProps<T>) => {
    const { record, updateRecord, validationState } = useFormContext<T>();
    const fieldValue = record[name];

    const onChange = useCallback((value: string) => updateRecord<string>(name, value), [name, updateRecord]);

    const validationError = useMemo(() => validationState[name], [name, validationState]);

    return (
        <Input
            onChange={onChange}
            value={fieldValue || ''}
            label={label}
            info={validationError ? validationError : undefined}
            status={validationError ? 'danger' : 'none'}
            {...inputProps}
            inputProps={{ name: String(name), ...(inputProps.inputProps || {}) }}
        />
    );
};

export default TextField;
