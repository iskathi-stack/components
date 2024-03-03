import { create } from '@stylexjs/stylex';

import { colors, fontSize, fontWeight, spacing } from '../../styles/variables.stylex';

const styles = create({
    button: {
        background: colors.buttonPrimary,
        color: colors.buttonPrimaryText,
        fontSize: fontSize.large,
        fontWeight: fontWeight.medium,
        padding: '1em',
        border: 'none',
        borderRadius: spacing.small,
        cursor: 'pointer',
    },
    disabled: {
        opacity: 0.5,
        pointerEvents: 'none',
    },
});

export default styles;
