import { create } from '@stylexjs/stylex';
import { colors, fontSize, fontWeight } from '../../styles/variables.stylex';
import { StylexVarProps } from '../../types/StylexVarProps';

const styles = create({
    fontSize: (key: StylexVarProps<typeof fontSize>) => ({ fontSize: fontSize[key] }),
    fontWeight: (key: StylexVarProps<typeof fontWeight>) => ({ fontWeight: fontWeight[key] }),
    color: (key: StylexVarProps<typeof colors>) => ({ color: colors[key] }),
});

export default styles;
