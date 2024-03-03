import type { Preview } from '@storybook/react';

const preview: Preview = {
    parameters: {
        actions: {},
        controls: {},
        backgrounds: {
            default: 'dark',
            values: [
                {
                    name: 'dark',
                    value: '#303746',
                },
                {
                    name: 'light',
                    value: '#b9d3f6',
                },
            ],
        },
    },
};

export default preview;
