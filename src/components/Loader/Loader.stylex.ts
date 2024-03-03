import { create, keyframes } from '@stylexjs/stylex';

import { colors, fontSize, spacing } from '../../styles/variables.stylex';

const rotation = keyframes({
    from: { transform: 'rotate(0deg)' },
    to: { transform: 'rotate(360deg)' },
});

const styles = create({
    loader: {
        width: fontSize.medium,
        height: fontSize.medium,
        border: `${spacing.xsmall} solid ${colors.primaryText}`,
        borderBottomColor: 'transparent',
        borderRadius: '50%',
        display: 'inline-block',
        animation: `${rotation} 1s linear infinite`,
    },
});

export default styles;
