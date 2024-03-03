import { StyleXStyles, props } from '@stylexjs/stylex';
import { ComponentPropsWithoutRef, FC, PropsWithChildren } from 'react';
import styles from './Card.stylex';

export type CardProps = {
    centered?: boolean;
    sx?: StyleXStyles[];
} & Omit<ComponentPropsWithoutRef<'div'>, 'className'>;

export const Card: FC<PropsWithChildren<CardProps>> = ({ sx = [], centered = false, children, ...divProps }) => {
    return (
        <div {...props(styles.card, centered && styles.centered, ...sx)} {...divProps}>
            {children}
        </div>
    );
};

export default Card;
