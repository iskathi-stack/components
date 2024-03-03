import { create } from '@stylexjs/stylex';

import { colors, fontSize, spacing } from '../../styles/variables.stylex';

const styles = create({
    root: {
        display: 'flex',
        flexFlow: 'column',
        gap: spacing.xsmall,
    },
    label: {
        color: colors.primaryText,
        padding: spacing.xsmall,
    },
    input: {
        fontSize: fontSize.medium,
        padding: spacing.medium,
        borderRadius: spacing.small,
        outline: 'none',
        background: colors.menu,
        color: colors.primaryText,
    },
    info: {
        minHeight: fontSize.large,
    },
    input_none: {
        border: `1px solid ${colors.menu}`,
    },
    input_warning: {
        color: colors.danger,
        border: `1px solid ${colors.danger}`,
    },
    input_danger: {
        color: colors.danger,
        border: `1px solid ${colors.danger}`,
    },
    info_none: {
        color: colors.primaryText,
    },
    info_warning: {
        color: colors.danger,
    },
    info_danger: {
        color: colors.danger,
    },
});

export default styles;
