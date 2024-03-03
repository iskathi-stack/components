import { props } from '@stylexjs/stylex';
import { ComponentPropsWithoutRef, FC } from 'react';
import { useFormContext } from '../Form/Form.context';
import styles from './FormError.stylex';

export const FormError: FC<Omit<ComponentPropsWithoutRef<'div'>, 'className'>> = ({ ...rest }) => {
    const { formState } = useFormContext();
    if (formState.status !== 'error') return null;

    return (
        <div {...props(styles.root)} {...rest}>
            {formState.error || 'Unexpected error'}
        </div>
    );
};

export default FormError;
