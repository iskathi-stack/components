import { ReactNode } from 'react';

export type ValidatorFailResult = { isValid: false; message: string };
export type ValidatorPassResult = { isValid: true };
export type ValidatorResult = ValidatorFailResult | ValidatorPassResult;

export type FieldValidator<T> = { (value: T | null): ValidatorResult; onSubmit?: true };

export type FieldProps<T> = {
    name: keyof T;
    label: ReactNode;
    validators?: FieldValidator<T[keyof T]>[];
};
