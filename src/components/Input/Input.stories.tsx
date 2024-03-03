import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Input, { InputProps } from '.';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const TestInput = ({ value, onChange, ...props }: InputProps) => {
    const [trackedValue, setValue] = useState(value);
    return <Input value={trackedValue} onChange={setValue} {...props} />;
};

const meta = {
    component: Input,
    render: TestInput,
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PlainInput = {
    args: {
        value: 'some text',
    },
    name: 'Input',
} satisfies Story;

export const InputWithLabel = {
    args: {
        value: 'some text',
        label: 'Some label',
    },
    name: 'Input with label',
} satisfies Story;

export const InputWithInfo = {
    args: {
        value: 'some text',
        info: 'some information',
    },
    name: 'Input with information',
} satisfies Story;
