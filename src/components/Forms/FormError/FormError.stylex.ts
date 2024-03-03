import { create } from '@stylexjs/stylex';
import { colors, spacing } from '../../../styles/variables.stylex';

const styles = create({
    root: {
        background: colors.errorNotification,
        padding: spacing.large,
        borderRadius: spacing.medium,
        color: colors.primaryText,
    },
});

export default styles;
