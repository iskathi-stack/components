import { defineVars } from '@stylexjs/stylex';

export const lightColors = {
    primaryText: '#09486f',
    menuText: '#09486f',
    background: '#d0e1f9',
    containers: '#b9d3f6',
    menu: '#8cb6f0',
    menuSecondary: '#a3c4f3',
    danger: '#b3261e',
    errorNotification: '#ff3333',
    buttonPrimary: '#24a0ed',
    buttonPrimaryText: '#09486f',
    buttonSecondaryText: '#24a0ed',
    buttonTertiaryText: '#24a0ed',
};
export const darkColors = {
    primaryText: '#ffffff',
    menuText: '#ffffff',
    background: '#3a4355',
    containers: '#303746',
    menu: '#1e1f26',
    menuSecondary: '#292b34',
    danger: '#f2b8b5',
    errorNotification: '#ff3333',
    buttonPrimary: '#405789',
    buttonPrimaryText: '#ffffff',
    buttonSecondaryText: '#b9d3f6',
    buttonTertiaryText: '#b9d3f6',
};

const DARK = '@media (prefers-color-scheme: dark)';

export const colors = defineVars({
    primaryText: {
        default: lightColors.primaryText,
        [DARK]: darkColors.primaryText,
    },
    menuText: {
        default: lightColors.menuText,
        [DARK]: darkColors.menuText,
    },
    background: {
        default: lightColors.background,
        [DARK]: darkColors.background,
    },
    containers: {
        default: lightColors.containers,
        [DARK]: darkColors.containers,
    },
    menu: {
        default: lightColors.menu,
        [DARK]: darkColors.menu,
    },
    menuSecondary: {
        default: lightColors.menuSecondary,
        [DARK]: darkColors.menuSecondary,
    },
    danger: {
        default: lightColors.danger,
        [DARK]: darkColors.danger,
    },
    errorNotification: {
        default: lightColors.errorNotification,
        [DARK]: darkColors.errorNotification,
    },
    buttonPrimary: {
        default: lightColors.buttonPrimary,
        [DARK]: darkColors.buttonPrimary,
    },
    buttonPrimaryText: {
        default: lightColors.buttonPrimaryText,
        [DARK]: darkColors.buttonPrimaryText,
    },
    buttonSecondaryText: {
        default: lightColors.buttonSecondaryText,
        [DARK]: darkColors.buttonSecondaryText,
    },
    buttonTertiaryText: {
        default: lightColors.buttonTertiaryText,
        [DARK]: darkColors.buttonTertiaryText,
    },
});
