import type { Meta, StoryObj } from '@storybook/react';
import Input from './';

const meta = {
    component: Input,
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
