import { StyleXStyles, props } from '@stylexjs/stylex';
import { ComponentPropsWithoutRef, FC } from 'react';
import { useTheme } from '../../styles/themes';
import styles from './Loader.style';

export type LoaderProps = {
    sx?: StyleXStyles[];
} & Omit<ComponentPropsWithoutRef<'span'>, 'className'>;

export const Loader: FC<LoaderProps> = ({ sx = [], ...spanProps }) => {
    const theme = useTheme();

    return <span {...props(theme, styles.loader, sx)} {...spanProps}></span>;
};

export default Loader;
