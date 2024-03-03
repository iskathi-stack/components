import { create } from '@stylexjs/stylex';

import { colors, fontSize, fontWeight, spacing } from '../../styles/variables.stylex';

const styles = create({
    button: {
        fontSize: fontSize.large,
        fontWeight: fontWeight.medium,
        padding: '0.8em 1em',
        borderRadius: spacing.small,
        cursor: 'pointer',
    },
    disabled: {
        opacity: 0.5,
        pointerEvents: 'none',
    },
    primary: {
        color: colors.buttonPrimaryText,
        background: colors.buttonPrimary,
        border: 'none',
    },
    secondary: {
        color: colors.buttonSecondaryText,
        border: `1px solid ${colors.buttonSecondaryText}`,
        background: 'none',
    },
    tertiary: {
        color: colors.buttonTertiaryText,
        border: 'none',
        background: 'none',
    },
});

export default styles;
