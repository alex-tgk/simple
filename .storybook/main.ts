import type { StorybookConfig } from '@storybook/react-vite';
import path from 'path';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest"
  ],
  "framework": {
    "name": "@storybook/react-vite",
    "options": {}
  },
  async viteFinal(config) {
    // Add Tailwind CSS Vite plugin (dynamic import for ESM)
    const tailwindcss = (await import('@tailwindcss/vite')).default;
    config.plugins = config.plugins || [];
    config.plugins.push(tailwindcss());

    // Add path aliases
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@coral': path.resolve(__dirname, '../src/components'),
      };
    }
    return config;
  },
};
export default config;
