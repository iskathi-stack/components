import { StyleXStyles, props } from '@stylexjs/stylex';
import { ChangeEvent, ComponentPropsWithoutRef, FC, ReactNode, useCallback } from 'react';
import { create } from '../../helpers/testidHelpers';
import { useTheme } from '../../styles/themes';
import Text from '../Text';
import styles from './Input.style';
import TestIds from './Input.testid';

export type InputProps = {
    label?: ReactNode;
    info?: ReactNode;
    value: string;
    onChange: (value: string) => void;
    status?: 'warning' | 'danger' | 'none';
    inputsx?: StyleXStyles[];
    labelsx?: StyleXStyles[];
    inputProps?:
        | Omit<ComponentPropsWithoutRef<'input'>, 'onChange' | 'value' | 'className'>
        | { ['data-testid']?: string };
} & Omit<ComponentPropsWithoutRef<'label'>, 'onChange' | 'value' | 'className'>;

export const Input: FC<InputProps> = ({
    value,
    onChange,
    label,
    info,
    status = 'none',
    labelsx = [],
    inputsx = [],
    inputProps = {},
    ...labelProps
}) => {
    const theme = useTheme();
    const changeHandler = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            onChange(event.target.value);
        },
        [onChange],
    );

    return (
        <label {...create(TestIds.Root)} {...props(theme, styles.root)} {...labelProps}>
            <Text
                {...create(TestIds.Label)}
                fontSize="large"
                fontWeight="light"
                {...props(theme, styles.label, ...labelsx)}
            >
                {label}
            </Text>
            <input
                {...create(TestIds.Input)}
                value={value}
                onChange={changeHandler}
                {...props(theme, styles.input, ...inputsx, styles[`input_${status}`])}
                {...inputProps}
            />
            <Text
                {...create(TestIds.Info)}
                fontSize="small"
                fontWeight="light"
                {...props(theme, styles.info, styles[`info_${status}`])}
            >
                {info}
            </Text>
        </label>
    );
};

export default Input;
