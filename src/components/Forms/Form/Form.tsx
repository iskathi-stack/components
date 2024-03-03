import { StyleXStyles, props } from '@stylexjs/stylex';
import {
    Children,
    ComponentPropsWithoutRef,
    FormEvent,
    PropsWithChildren,
    ReactElement,
    isValidElement,
    useCallback,
    useMemo,
    useState,
} from 'react';
import { useTheme } from '../../../styles/themes';
import { FieldProps, ValidatorFailResult } from '../Types/FormsTypes';
import { FormContext, FormContextProvider, FormState, FormValidationState } from './Form.context';
import styles from './Form.style';

export type FormProps<TPayload extends Record<string, unknown>, TResult = unknown> = {
    onSubmit: (data: TPayload) => Promise<TResult>;
    sx?: StyleXStyles[];
} & Omit<ComponentPropsWithoutRef<'form'>, 'className' | 'onSubmit'>;

export const Form = <TPayload extends Record<string, unknown | null>, TResult = unknown>({
    children,
    onSubmit,
    sx = [],
    ...formProps
}: PropsWithChildren<FormProps<TPayload>>) => {
    const theme = useTheme();
    const [formState, setFormState] = useState<FormState<TResult>>({ status: 'idle' });

    const formFields = useMemo(
        () =>
            Children.toArray(children).filter(
                (element) => isValidElement<FieldProps<TPayload>>(element) && element.props.name,
            ) as ReactElement<FieldProps<TPayload>>[],
        [children],
    );

    const fieldsNames = useMemo(() => formFields.map((element) => element.props.name) as string[], [formFields]);

    const validatedFields = useMemo(() => formFields.filter((element) => element.props.validators), [formFields]);

    const [record, setRecord] = useState<TPayload>(
        () => Object.fromEntries(fieldsNames.map((field) => [field, null])) as TPayload,
    );

    const calculateValidationState = useCallback(
        (record: TPayload, isSubmitting: boolean) => {
            return Object.fromEntries(
                validatedFields.map((validatedField) => {
                    const validationResult: ValidatorFailResult | undefined = validatedField.props
                        .validators!.filter((validator) => (isSubmitting ? validator.onSubmit : !validator.onSubmit))
                        .map((validator) => validator(record[validatedField.props.name]!))
                        .find((x) => !x.isValid) as ValidatorFailResult;
                    return [validatedField.props.name, validationResult?.message];
                }),
            ) as FormValidationState<TPayload>;
        },
        [validatedFields],
    );

    const [validationState, setValidationState] = useState<FormValidationState<TPayload>>(() =>
        calculateValidationState(record, false),
    );

    const updateRecord = useCallback(
        (key: keyof TPayload, value: TPayload[keyof TPayload]) => {
            setRecord((currentValue) => {
                const newValue = { ...currentValue };
                newValue[key] = value; // specific assignment to mainting prop order
                setValidationState(calculateValidationState(newValue, false));
                return newValue;
            });
        },
        [calculateValidationState],
    );

    const handleSubmit = useCallback(
        (event: FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const formElement = new FormData(event.target as HTMLFormElement);
            const data = Object.fromEntries(formElement.entries()) as TPayload;

            const submitValidationResult = calculateValidationState(data, true);
            if (Object.values(submitValidationResult).some((validationError) => validationError)) {
                setValidationState(submitValidationResult);
                return;
            }

            setFormState({ status: 'submitting' });
            onSubmit(data)
                .then((result) => {
                    setFormState({ status: 'completed', result: result as TResult });
                })
                .catch((e: unknown) => {
                    setFormState({
                        status: 'error',
                        error: e
                            ? typeof e === 'string'
                                ? e
                                : e instanceof Error
                                  ? e.message
                                  : `${e}`
                            : 'An error occured',
                    });
                });
        },
        [calculateValidationState, onSubmit],
    );

    const context = useMemo(
        () => ({ record, updateRecord, formState, setFormState, validationState }) as FormContext<TPayload>,
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [record, formState, JSON.stringify(validationState)],
    );

    return (
        <FormContextProvider value={context}>
            <form {...props(theme, styles.form, ...sx)} onSubmit={handleSubmit} {...formProps}>
                {children}
            </form>
        </FormContextProvider>
    );
};

export default Form;
