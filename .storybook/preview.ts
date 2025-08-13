import type { Preview } from '@storybook/web-components-vite';
import { html } from 'lit';
import { themes } from 'storybook/theming';
import '../src/ui/setup';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import cssStyles from '../src/ui/styles';
import externalCSS from '../src/ui/styles/externalStyle.ts';
import { themesCSS } from '../src/ui/themes.ts';
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
