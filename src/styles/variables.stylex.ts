import { defineVars } from '@stylexjs/stylex';

export { colors } from './colors.stylex';

export const fontSize = defineVars({
    xsmall: '0.6rem',
    small: '0.8rem',
    medium: '1rem',
    large: '1.2rem',
    xlarge: '1.4rem',
    xxlarge: '1.6rem',
    xxxlarge: '2rem',
});

export const fontWeight = defineVars({
    light: '300',
    regular: '400',
    medium: '500',
    bold: '700',
});

export const spacing = defineVars({
    none: '0px',
    xsmall: '4px',
    small: '8px',
    medium: '12px',
    large: '20px',
    xlarge: '32px',
    xxlarge: '48px',
    xxxlarge: '96px',
});

export const breakpoints = defineVars({
    mobileMax: '500px',
    mobileMin: '200px',
});

export const containers = defineVars({
    mobileClamp: { default: `clamp(${breakpoints.mobileMin}, 100%, ${breakpoints.mobileMax})` },
});
