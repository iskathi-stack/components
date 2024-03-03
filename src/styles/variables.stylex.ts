import { defineVars } from '@stylexjs/stylex';

const DARK = '@media (prefers-color-scheme: dark)';

export const colors = defineVars({
    primaryText: { default: '#09486f', [DARK]: '#ffffff' },
    menuText: { default: '#09486f', [DARK]: '#ffffff' },
    //
    background: { default: '#d0e1f9', [DARK]: '#3a4355' },
    containers: { default: '#b9d3f6', [DARK]: '#303746' },
    menu: { default: '#8cb6f0', [DARK]: '#1e1f26' },
    menuSecondary: { default: '#a3c4f3', [DARK]: '#292b34' },
    //
    danger: { default: '#b3261e', [DARK]: '#f2b8b5' },
    errorNotification: { default: '#ff3333', [DARK]: '#ff3333' },
    //
    buttonPrimary: { default: '#24a0ed', [DARK]: '#405789' },
    buttonPrimaryText: { default: '#09486f', [DARK]: '#ffffff' },
});

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
