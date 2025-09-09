import type { StorybookConfig } from '@storybook/web-components-vite';

/**
 * The main configuration for the Storybook instance.
 * This object tells Storybook where to find stories, which addons to use,
 * and what framework to build for.
 * @see https://storybook.js.org/docs/react/configure/main-js
 */
const config: StorybookConfig = {
  /**
   * An array of glob patterns indicating the location of your story files.
   */
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  /**
   * A list of addons to enhance Storybook's functionality.
   * - `@vueless/storybook-dark-mode`: Adds a toolbar button to toggle between light and dark themes.
   * - `@storybook/addon-docs`: Provides automatic documentation generation from JSDoc and component metadata.
   */
  addons: ['@vueless/storybook-dark-mode', '@storybook/addon-docs'],
  /**
   * The framework configuration, specifying that this project uses Web Components with Vite.
   */
  framework: {
    name: '@storybook/web-components-vite',
    options: {},
  },
};
export default config;
