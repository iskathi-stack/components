import type { Preview } from '@storybook/react';
import React from 'react';
import StoryWrapper from '../src/storybook/StoryWrapper';

const preview: Preview = {
    parameters: {
        actions: {},
        controls: {},
        backgrounds: {},
    },
    decorators: [
        (Story) => (
            <StoryWrapper>
                <Story />
            </StoryWrapper>
        ),
    ],
};

export default preview;
