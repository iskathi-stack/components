export const select = (id: string, param?: string) => `[data-testid="${id.replace('0', param || 'default')}"]`;
export const create = (id: string, param?: string) => ({ 'data-testid': id.replace('0', param || 'default') });
