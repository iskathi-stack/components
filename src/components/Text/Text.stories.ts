import type { Meta, StoryObj } from '@storybook/react';
import Text from './';

const meta = {
    component: Text,
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PlainText = {
    args: {
        children: 'some text',
    },
    name: 'Text',
} satisfies Story;

export const InputWithParams = {
    args: {
        children: 'some text',
        fontSize: 'large',
        fontWeight: 'medium',
        color: 'danger',
    },
    name: 'Text with styles',
} satisfies Story;
