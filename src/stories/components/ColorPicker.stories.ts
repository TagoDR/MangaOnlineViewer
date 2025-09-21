import { useStores } from '@nanostores/lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { appState, getSettingsValue, locale, settings } from '../../core/settings';
import type { ColorPicker } from '../../ui/components/ColorPicker.ts';
import '../../ui/components/ColorPicker.ts';
import { changeTheme } from '../../ui/events/theming';
import colors from '../../utils/colors.ts';

// Wrapper for the Live Theme Preview story
@customElement('story-color-picker-theme-wrapper')
@useStores(settings, locale, appState)
// @ts-expect-error
class StoryColorPickerThemeWrapper extends LitElement {
  @property({ type: String })
  mode: 'inline' | 'popup' = 'inline';

  render() {
    const theme = getSettingsValue('theme');
    return html`
      <color-picker
        .mode="${this.mode}"
        .value=${theme}
        @change=${changeTheme}
        .swatches=${Object.values(colors)
          .slice(6)
          .flatMap(c => [c[600]])}
      ></color-picker>
    `;
  }
}

const meta: Meta<ColorPicker> = {
  title: 'Components/Color Picker',
  component: 'color-picker',
  parameters: {
    docs: {
      description: {
        component:
          'An interactive color picker. It can be used inline or as a popup. The component supports various color formats like HEX, RGB, and OKLCH.',
      },
    },
  },
  argTypes: {
    value: { control: 'color' },
    mode: {
      control: { type: 'radio' },
      options: ['inline', 'popup'],
    },
    swatches: { control: 'object' },
  },
  args: {
    value: '#228be6',
    mode: 'inline',
    swatches: null,
  },
};

export default meta;

export const Default: StoryObj<ColorPicker> = {
  name: 'Live Theme Preview',
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'This story demonstrates the color picker controlling the global application theme. Changes are applied when the color selection is finalized (`change` event).',
      },
    },
  },
  render: () => html`<story-color-picker-theme-wrapper></story-color-picker-theme-wrapper>`,
};

export const Popup: StoryObj<ColorPicker> = {
  name: 'Popup Mode',
  args: {
    mode: 'popup',
    value: 'oklch(0.65 0.15 250)',
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates the `popup` mode, which is useful for compact UI layouts.',
      },
    },
  },
  render: args =>
    html`<story-color-picker-theme-wrapper
      .value=${args.value}
      mode="popup"
    ></story-color-picker-theme-wrapper>`,
};
