import { create, props } from '@stylexjs/stylex';
import { FC, PropsWithChildren, useEffect, useMemo, useState } from 'react';
import { colors } from '../styles/colors.stylex';
import { ThemeProvider, darkTheme, lightTheme } from '../styles/themes';
import ThemeIcon from './theme.svg';

const style = create({
    root: {
        background: colors.background,
        padding: '1rem',
        height: '100vh',
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        color: colors.primaryText,
        marginBottom: '3rem',
        gap: 8,
    },
});

const StoryWrapper: FC<PropsWithChildren> = ({ children }) => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [themeSetting, setThemeSetting] = useState<'dark' | 'light'>(prefersDark ? 'dark' : 'light');

    const theme = useMemo(() => {
        switch (themeSetting) {
            case 'dark':
                return darkTheme;
            case 'light':
                return lightTheme;
            default:
                return undefined;
        }
    }, [themeSetting]);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', themeSetting);
    }, [themeSetting]);

    return (
        <ThemeProvider value={theme}>
            <div {...props(theme, style.root)}>
                <header {...props(theme, style.header)}>
                    <span>Toggle theme:</span>
                    <ThemeIcon
                        style={{ cursor: 'pointer' }}
                        width={24}
                        height={24}
                        onClick={() => setThemeSetting(themeSetting === 'dark' ? 'light' : 'dark')}
                    />
                </header>
                <main>{children}</main>
            </div>
        </ThemeProvider>
    );
};

export default StoryWrapper;
