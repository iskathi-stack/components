import { createContext, useContext } from 'react';

export type FormState<TResult = unknown> = {
    status: 'idle' | 'submitting' | 'completed' | 'error';
    result?: TResult;
    error?: string;
};

export type FormValidationState<TPayload extends Record<string, unknown | null>> = Record<
    keyof Partial<TPayload>,
    string
>;

export type FormContext<TPayload extends Record<string, unknown | null>, TResult = unknown> = {
    record: TPayload;
    updateRecord: <TPayloadValue = TPayload[keyof TPayload]>(key: keyof TPayload, value: TPayloadValue) => void;
    formState: FormState<TResult>;
    setFormState: (state: FormState<TResult>) => void;
    validationState: FormValidationState<TPayload>;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const context = createContext<FormContext<any>>(undefined as any);

export const FormContextProvider = context.Provider;

export const useFormContext = <TPayload extends Record<string, unknown | null>>() =>
    useContext<FormContext<TPayload>>(context);
export const useFormRecord = <TPayload extends Record<string, unknown | null>>() => useFormContext<TPayload>().record;
