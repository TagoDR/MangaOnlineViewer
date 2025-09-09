import type { Preview } from '@storybook/web-components-vite';
import { css, html, LitElement, unsafeCSS } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { themes } from 'storybook/theming';
import '../src/ui/setup';
import cssStyles from '../src/ui/styles';
import externalCSS from '../src/ui/styles/externalStyle.ts';
import { themesCSS } from '../src/ui/themes.ts';
import colors, { sample } from '../src/utils/colors.ts';

@customElement('theme-wrapper')
// @ts-expect-error
class ThemeWrapper extends LitElement {
  @state()
  private color = '#087f5b'; // default color

  static styles = [
    unsafeCSS(externalCSS),
    unsafeCSS(cssStyles),
    css`
      .color-picker-wrapper {
        padding: 1rem;
        display: flex;
        align-items: center;
        gap: 1rem;
        border-bottom: 1px solid #ccc;
        margin-bottom: 1rem;
      }
    `,
  ];
  render() {
    return html`
      <style>
        ${unsafeCSS(themesCSS(':host', this.color))}
      </style>
      <div id="display">
        <div class="color-picker-wrapper">
          <label for="theme-color-picker">Theme Color:</label>
          <input
            id="theme-color-picker"
            type="color"
            .value=${this.color}
            class="colorpicker"
            @input=${this.changeColor}
            list="color-sample"
          />
          <datalist id="color-sample">
            ${Object.values(sample).map(c => html`<option value="${c}"></option>`)}
          </datalist>
        </div>
        <div>
          <slot></slot>
        </div>
      </div>
    `;
  }
  changeColor(event: Event) {
    this.color = (event.target as HTMLInputElement).value;
  }
}

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
  },
  decorators: [
    story => html`
      <style>
        :root,
        html {
          text-decoration: none;
          color: var(--theme-body-text-color);
          background-color: var(--theme-body-background);
          box-sizing: border-box;
        }
        .light {
          color-scheme: light;
          --theme-body-background: ${colors.gray['50']};
          --theme-body-text-color: ${colors.gray['900']};
          --theme-text-color: ${colors.gray['900']};
          --theme-background-color: ${colors.gray['50']};
          --theme-hightlight-color: ${colors.gray['500']};
          --theme-border-color: ${colors.gray['100']};
        }

        .dark {
          color-scheme: dark;
          --theme-body-background: ${colors.dark['600']};
          --theme-body-text-color: ${colors.dark['50']};
          --theme-text-color: ${colors.dark['50']};
          --theme-background-color: ${colors.dark['600']};
          --theme-hightlight-color: ${colors.dark['500']};
          --theme-border-color: ${colors.dark['400']};
        }
      </style>
      <theme-wrapper> ${story()} </theme-wrapper>
    `,
  ],
};

export default preview;
