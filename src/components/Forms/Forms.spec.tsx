import { cleanup, findByTestId, render } from '@testing-library/react';
import { PointerEventsCheckLevel, userEvent } from '@testing-library/user-event';
import { afterEach, describe, expect, test, vi } from 'vitest';
import { create } from '../../helpers/testidHelpers';
import TestIds from '../Input/Input.testid';
import { FieldValidator, Form, SubmitForm, TextField, onSubmitValidator } from '.';

describe('Form tests', () => {
    const user = userEvent.setup({ pointerEventsCheck: PointerEventsCheckLevel.Never });

    afterEach(() => {
        vi.restoreAllMocks();
        cleanup();
    });

    test('Should submit form', async () => {
        const onSubmit = vi.fn();
        const { container } = render(
            <Form onSubmit={async (data) => onSubmit(data)}>
                <TextField label="field1" name="f1" inputProps={{ ...create('f1') }} />
                <TextField label="field2" name="f2" inputProps={{ ...create('f2') }} />
                <SubmitForm {...create('submit')} />
            </Form>,
        );

        const find = (id: string) => findByTestId(container, id);

        await user.type(await find('f1'), 'value 1');
        await user.type(await find('f2'), 'value 2');

        const input1 = (await find('f1')) as HTMLInputElement;
        const input2 = (await find('f2')) as HTMLInputElement;

        expect(input1.value).toBe('value 1');
        expect(input2.value).toBe('value 2');

        await user.click(await find('submit'));

        await vi.waitFor(() => {
            expect(onSubmit).toHaveBeenCalledOnce();
            expect(onSubmit).toHaveBeenCalledWith({ f1: 'value 1', f2: 'value 2' });
        });
    });

    test('Should not submit form if has validation error', async () => {
        const onSubmit = vi.fn();
        const { container } = render(
            <Form onSubmit={async (data) => onSubmit(data)}>
                <TextField
                    label="field1"
                    name="f1"
                    {...create('f1_root')}
                    inputProps={{ ...create('f1') }}
                    validators={[() => ({ isValid: false, message: 'invalid' })]}
                />
                <TextField label="field2" name="f2" inputProps={{ ...create('f2') }} />
                <SubmitForm {...create('submit')} />
            </Form>,
        );

        const find = (id: string) => findByTestId(container, id);

        await user.type(await find('f1'), 'value 1');
        await user.type(await find('f2'), 'value 2');

        expect((await findByTestId(await find('f1_root'), TestIds.Info)).textContent).toBe('invalid');
        expect((await find('submit')).attributes.getNamedItem('disabled')).not.toBeUndefined();

        await user.click(await find('submit'));

        await new Promise((r) => setTimeout(r, 500));
        expect(onSubmit).not.toHaveBeenCalled();
    });

    test('Should not submit form if has on submit validation error', async () => {
        const onSubmit = vi.fn();
        const validator: FieldValidator<string> = () => ({ isValid: false, message: 'invalid' });

        const { container } = render(
            <Form onSubmit={async (data) => onSubmit(data)}>
                <TextField
                    label="field1"
                    name="f1"
                    {...create('f1_root')}
                    inputProps={{ ...create('f1') }}
                    validators={[onSubmitValidator(validator)]}
                />
                <TextField label="field2" name="f2" inputProps={{ ...create('f2') }} />
                <SubmitForm {...create('submit')} />
            </Form>,
        );

        const find = (id: string) => findByTestId(container, id);

        await user.type(await find('f1'), 'value 1');
        await user.type(await find('f2'), 'value 2');

        expect((await findByTestId(await find('f1_root'), TestIds.Info)).textContent).toBe('');

        await user.click(await find('submit'));

        expect((await findByTestId(await find('f1_root'), TestIds.Info)).textContent).toBe('invalid');

        await new Promise((r) => setTimeout(r, 500));
        expect(onSubmit).not.toHaveBeenCalled();
    });
});
