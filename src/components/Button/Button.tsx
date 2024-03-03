import { ComponentPropsWithoutRef, FC } from 'react';
import { StyleXStyles, props } from '@stylexjs/stylex';
import styles from './Button.stylex';

export type ButtonProps = { sx?: StyleXStyles[] } & Omit<ComponentPropsWithoutRef<'button'>, 'className'>;

export const Button: FC<ButtonProps> = ({ children, sx = [], disabled, ...buttonProps }) => {
    return (
        <button {...props(styles.button, disabled && styles.disabled, ...sx)} disabled={disabled} {...buttonProps}>
            {children}
        </button>
    );
};

export default Button;
