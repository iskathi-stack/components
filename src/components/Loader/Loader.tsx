import { StyleXStyles, props } from '@stylexjs/stylex';
import { ComponentPropsWithoutRef, FC } from 'react';
import styles from './Loader.stylex';

export type LoaderProps = {
    sx?: StyleXStyles[];
} & Omit<ComponentPropsWithoutRef<'span'>, 'className'>;

export const Loader: FC<LoaderProps> = ({ sx = [], ...spanProps }) => {
    return <span {...props(styles.loader, sx)} {...spanProps}></span>;
};

export default Loader;
