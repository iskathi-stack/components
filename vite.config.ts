import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
// eslint-disable-next-line import/no-unresolved
import styleX from 'vite-plugin-stylex';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        styleX(),
        svgr({
            include: '**/*.svg',
        }),
    ],
    build: {
        lib: {
            // Could also be a dictionary or array of multiple entry points
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'Components',
            // the proper extensions will be added
            fileName: 'components',
        },
    },
    // @ts-expect-error vitest config
    test: {
        environment: 'jsdom',
    },
});
