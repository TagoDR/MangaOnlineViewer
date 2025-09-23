import type { Meta, StoryObj } from '@storybook/web-components';
import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { appState, getSettingsValue, locale, settings } from '../../core/settings.ts';
import { changeTheme } from '../../ui/events/theming.ts';
import { sample } from '../../utils/colors';
import '../../ui/components/ColorSwatch';
import { useStores } from '@nanostores/lit';

/**
 * A wrapper component for the story that subscribes to the Nanostore
 * and manages its own state to react to changes.
 */
@customElement('story-color-swatch-wrapper')
@useStores(settings, locale, appState)
// @ts-expect-error
// biome-ignore lint/correctness/noUnusedVariables: Display
class StoryColorSwatchWrapper extends LitElement {
  // The render function now uses the component's own reactive state.
  render() {
    return html`
      <div style="display: flex; flex-wrap: wrap; gap: 10px;">
        ${Object.entries(sample).map(
          ([name, color]) => html`
            <div style="display: flex; flex-direction: column; align-items: center; gap: 5px;">
              <color-swatch
                color=${color}
                @input="${changeTheme}"
                .selected="${getSettingsValue('theme')}"
              ></color-swatch>
              <span style="font-size: 12px;">${name}</span>
            </div>
          `,
        )}
      </div>
    `;
  }
}

export default {
  title: 'Components/Color Swatch',
  component: 'color-swatch',
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        component:
          'A panel displaying color swatches for theme selection. The component is interactive within the story, and the theme will update globally when a color is selected.',
      },
    },
  },
} satisfies Meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => html`<story-color-swatch-wrapper></story-color-swatch-wrapper>`,
};
