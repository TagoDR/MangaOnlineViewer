import type { Meta, StoryObj } from '@storybook/web-components';
import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { appState, getSettingsValue, locale, settings } from '../../core/settings.ts';
import '../../ui/components/ColorPalette.ts';
import { useStores } from '@nanostores/lit';
import { changeTheme } from '../../ui/events/theming.ts';

// Define the type for the story arguments
type ColorPaletteArgs = {
  baseColor: string;
};

/**
 * A wrapper component for the story that subscribes to the Nanostore
 * and manages its own state to react to changes. It also renders a palette
 * for each generation mode.
 */
@customElement('story-color-palette-wrapper')
@useStores(settings, locale, appState)
// @ts-expect-error
// biome-ignore lint/correctness/noUnusedVariables: Display
class StoryColorPaletteWrapper extends LitElement {
  @property({ type: String })
  baseColor = '#228be6';

  render() {
    const modes = ['steps', 'saturation', 'lightness', 'mantine', 'chakra'];
    return html`
      <div style="display: flex; flex-direction: column; gap: 0.5rem; justify-content: center;">
        ${modes.map(
          mode => html`
            <div style="display: flex; flex-direction: row; align-items: center; gap: 0.5rem;">
              <color-palette
                orientation="vertical"
                baseColor=${this.baseColor}
                mode=${mode}
                .selected=${getSettingsValue('theme')}
                @input="${changeTheme}"
              ></color-palette>
              <h4 style="text-transform: capitalize; margin: 0;">${mode}</h4>
            </div>
          `,
        )}
      </div>
    `;
  }
}

// The Meta object configures the component's story page
export default {
  title: 'Components/Color Palette',
  component: 'color-palette',
  argTypes: {
    baseColor: {
      control: 'color',
      description: 'The base color in hex format from which to generate the 10-shade palette.',
    },
  },
} satisfies Meta<ColorPaletteArgs>;

// Default story showing a blue palette
export const Default: StoryObj<ColorPaletteArgs> = {
  name: 'All Modes',
  args: {
    baseColor: '#228be6',
  },
  render: args =>
    html`<story-color-palette-wrapper baseColor=${args.baseColor}></story-color-palette-wrapper>`,
};
