import { props } from '@stylexjs/stylex';
import { ComponentPropsWithoutRef, FC } from 'react';
import { useTheme } from '../../../styles/themes';
import { useFormContext } from '../Form/Form.context';
import styles from './FormError.style';

export const FormError: FC<Omit<ComponentPropsWithoutRef<'div'>, 'className'>> = ({ ...rest }) => {
    const theme = useTheme();
    const { formState } = useFormContext();
    if (formState.status !== 'error') return null;

    return (
        <div {...props(theme, styles.root)} {...rest}>
            {formState.error || 'Unexpected error'}
        </div>
    );
};

export default FormError;
