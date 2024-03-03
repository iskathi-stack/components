import { create } from '@stylexjs/stylex';
import { spacing } from '../../../styles/variables.stylex';

const styles = create({
    form: {
        display: 'flex',
        flexFlow: 'column',
        gap: spacing.medium,
        width: '100%',
    },
});

export default styles;
