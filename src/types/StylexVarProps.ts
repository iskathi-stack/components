import { VarGroup, defineVars } from '@stylexjs/stylex';

const noVars = defineVars({});
type ExcludeKeys = keyof typeof noVars;

export type StylexVarProps<T extends VarGroup<Readonly<unknown>, symbol>> = Exclude<keyof T, ExcludeKeys>;
