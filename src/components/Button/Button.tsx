import { StyleXStyles, props } from '@stylexjs/stylex';
import { ComponentPropsWithoutRef, FC } from 'react';
import { useTheme } from '../../styles/themes';
import styles from './Button.style';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary';

export type ButtonProps = { variant?: ButtonVariant; sx?: StyleXStyles[] } & Omit<
    ComponentPropsWithoutRef<'button'>,
    'className'
>;

export const Button: FC<ButtonProps> = ({ children, sx = [], disabled, variant = 'primary', ...buttonProps }) => {
    const theme = useTheme();
    return (
        <button
            {...props(theme, styles.button, disabled && styles.disabled, styles[variant], ...sx)}
            disabled={disabled}
            {...buttonProps}
        >
            {children}
        </button>
    );
};

export default Button;
