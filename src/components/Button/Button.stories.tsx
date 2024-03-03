import type { Meta, StoryObj } from '@storybook/react';
import Button from '.';

const meta = {
    component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PlainButton = {
    args: {
        onClick: () => alert('clicked'),
    },
    name: 'Button',
    render: (props) => (
        <div style={{ display: 'flex', gap: 16 }}>
            <Button variant="primary" {...props}>
                Primary
            </Button>
            <Button variant="secondary" {...props}>
                Secondary
            </Button>
            <Button variant="tertiary" {...props}>
                Tertiary
            </Button>
        </div>
    ),
} satisfies Story;

export const DisabledButton = {
    args: {
        onClick: () => alert('clicked'),
        disabled: true,
    },
    name: 'Button (disabled)',
    render: (props) => (
        <div style={{ display: 'flex', gap: 16 }}>
            <Button variant="primary" {...props}>
                Primary
            </Button>
            <Button variant="secondary" {...props}>
                Secondary
            </Button>
            <Button variant="tertiary" {...props}>
                Tertiary
            </Button>
        </div>
    ),
} satisfies Story;
