import type { Meta, StoryObj } from '@storybook/react';
import FormFC from './Form';
import { FormError, SubmitForm, TextField, emailValidator, onSubmitValidator, passwordValidator } from '.';

const meta = {
    component: FormFC,
} satisfies Meta<typeof FormFC>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Form = {
    name: 'Form',
    args: {
        onSubmit: async (data) => {
            alert(JSON.stringify(data));
        },
        children: (
            <>
                <TextField label="Name" name="name" />
                <TextField label="Surname" name="surname" />
                <SubmitForm />
            </>
        ),
    },
} satisfies Story;

export const FormWithValidation = {
    name: 'Form with validation',
    render: (props) => (
        <FormFC {...props}>
            <TextField label="Email" name="email" validators={[emailValidator()]} />
            <TextField
                label="Password"
                name="password"
                validators={[
                    passwordValidator({ maxLength: 12, letters: true, minLength: 6, numbers: true, symbols: true }),
                ]}
            />
            <FormError />
            <SubmitForm />
        </FormFC>
    ),
    args: {
        onSubmit: async (data) => {
            alert(JSON.stringify(data));
        },
    },
} satisfies Story;

export const FormWithOnSubmitValidation = {
    name: 'Form with validation (on submit)',
    render: (props) => (
        <FormFC {...props}>
            <TextField label="Email" name="email" validators={[onSubmitValidator(emailValidator())]} />
            <TextField
                label="Password"
                name="password"
                validators={[
                    onSubmitValidator(
                        passwordValidator({ maxLength: 12, letters: true, minLength: 6, numbers: true, symbols: true }),
                    ),
                ]}
            />
            <FormError />
            <SubmitForm />
        </FormFC>
    ),
    args: {
        onSubmit: async (data) => {
            alert(JSON.stringify(data));
        },
    },
} satisfies Story;
