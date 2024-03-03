import { StyleXStyles, props } from '@stylexjs/stylex';
import { ComponentPropsWithoutRef, FC, PropsWithChildren } from 'react';
import { useTheme } from '../../styles/themes';
import styles from './Card.style';

export type CardProps = {
    centered?: boolean;
    sx?: StyleXStyles[];
} & Omit<ComponentPropsWithoutRef<'div'>, 'className'>;

export const Card: FC<PropsWithChildren<CardProps>> = ({ sx = [], centered = false, children, ...divProps }) => {
    const theme = useTheme();

    return (
        <div {...props(theme, styles.card, centered && styles.centered, ...sx)} {...divProps}>
            {children}
        </div>
    );
};

export default Card;
