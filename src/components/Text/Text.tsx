import { StyleXStyles, props } from '@stylexjs/stylex';
import { ComponentPropsWithoutRef, FC, PropsWithChildren } from 'react';
import {
    colors as colorsVars,
    fontSize as fontSizeVars,
    fontWeight as fontWeightVars,
} from '../../styles/variables.stylex';
import { StylexVarProps } from '../../types/StylexVarProps';
import styles from './Text.stylex';

export type TextProps = {
    fontSize?: StylexVarProps<typeof fontSizeVars>;
    fontWeight?: StylexVarProps<typeof fontWeightVars>;
    color?: StylexVarProps<typeof colorsVars>;
    sx?: StyleXStyles[];
} & Omit<ComponentPropsWithoutRef<'span'>, 'className'>;

export const Text: FC<PropsWithChildren<TextProps>> = ({
    children,
    sx = [],
    fontSize,
    fontWeight,
    color,
    ...spanProps
}) => {
    return (
        <span
            {...props(
                fontSize && styles.fontSize(fontSize),
                fontWeight && styles.fontWeight(fontWeight),
                color && styles.color(color),
                ...sx,
            )}
            {...spanProps}
        >
            {children}
        </span>
    );
};

export default Text;
