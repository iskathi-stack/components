import { Theme } from '@stylexjs/stylex';
import { createContext, useContext } from 'react';
import { colors } from '../colors.stylex';

const ThemeContext = createContext<Theme<typeof colors> | undefined>(undefined);

export const ThemeProvider = ThemeContext.Provider;

export const useTheme = () => useContext(ThemeContext);

export default ThemeProvider;
