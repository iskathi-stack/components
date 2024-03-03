import type { Meta, StoryObj } from '@storybook/react';
import Button from './';

const meta = {
    component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PlainButton = {
    args: {
        children: 'Press me',
    },
    name: 'Button',
} satisfies Story;

export const DisabledButton = {
    args: {
        children: 'Press me',
        disabled: true,
    },
    name: 'Button (disabled)',
} satisfies Story;
