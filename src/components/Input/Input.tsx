import { StyleXStyles, props } from '@stylexjs/stylex';
import { ChangeEvent, ComponentPropsWithoutRef, FC, ReactNode, useCallback } from 'react';
import { create } from '../../helpers/testidHelpers';
import Text from '../Text';
import styles from './Input.stylex';
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
    const changeHandler = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            onChange(event.target.value);
        },
        [onChange],
    );

    return (
        <label {...create(TestIds.Root)} {...props(styles.root)} {...labelProps}>
            <Text {...create(TestIds.Label)} fontSize="large" fontWeight="light" {...props(styles.label, ...labelsx)}>
                {label}
            </Text>
            <input
                {...create(TestIds.Input)}
                value={value}
                onChange={changeHandler}
                {...props(styles.input, ...inputsx, styles[`input_${status}`])}
                {...inputProps}
            />
            <Text
                {...create(TestIds.Info)}
                fontSize="small"
                fontWeight="light"
                {...props(styles.info, styles[`info_${status}`])}
            >
                {info}
            </Text>
        </label>
    );
};

export default Input;
