import { StyleXStyles, props } from '@stylexjs/stylex';
import { ComponentPropsWithoutRef, FC, PropsWithChildren } from 'react';
import { useTheme } from '../../styles/themes';
import {
    colors as colorsVars,
    fontSize as fontSizeVars,
    fontWeight as fontWeightVars,
} from '../../styles/variables.stylex';
import { StylexVarProps } from '../../types/StylexVarProps';
import styles from './Text.style';

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
    const theme = useTheme();
    return (
        <span
            {...props(
                theme,
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
