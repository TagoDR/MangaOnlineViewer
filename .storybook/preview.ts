import type { Preview } from '@storybook/web-components-vite';
import { html } from 'lit';
import { themes } from 'storybook/theming';
import '../src/elements/setup';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import externalCSS from '../src/elements/styles/externalStyle.ts';
import cssStyles from '../src/elements/styles/defaultTheme.ts';
import { themesCSS } from '../src/elements/themes.ts';
import { wrapStyle } from '../src/utils/css';

const preview: Preview = {
  parameters: {
    docs: {
      theme: themes.dark,
    },
    darkMode: {
      // Override the default dark theme
      dark: { ...themes.dark },
      darkClass: ['dark', 'wa-dark'],
      light: { ...themes.normal }, // Set the initial theme
      // Override the default light theme
      lightClass: ['light', 'wa-light'],
      current: 'dark',
      classTarget: 'html',
      stylePreview: true,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    tags: ['autodocs'],
  },
  decorators: [
    story => html`
      ${unsafeHTML(wrapStyle('externals', externalCSS))}
      ${unsafeHTML(wrapStyle('reader', cssStyles))}
      ${unsafeHTML(themesCSS)}
      <div data-theme="custom">
        ${story()}
      </div>
    `,
  ],
};

export default preview;
