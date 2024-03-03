import { create } from '@stylexjs/stylex';

import { colors, containers, spacing } from '../../styles/variables.stylex';

const styles = create({
    card: {
        background: colors.containers,
        padding: spacing.large,
        borderRadius: spacing.medium,
        width: containers.mobileClamp,
    },
    centered: {
        alignSelf: 'center',
        justifySelf: 'center',
    },
});

export default styles;
