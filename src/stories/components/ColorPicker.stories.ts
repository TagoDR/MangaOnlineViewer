import { useStores } from '@nanostores/lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import _ from 'lodash';
import { appState, getSettingsValue, locale, settings } from '../../core/settings';
import type ColorPicker from '../../ui/components/ColorPicker.ts';
import '../../ui/components/ColorPicker.ts';
import { changeTheme } from '../../ui/events/theming';
import colors from '../../utils/colors.ts';

// Wrapper for the Live Theme Preview story
@customElement('story-color-picker-theme-wrapper')
@useStores(settings, locale, appState)
// @ts-expect-error
// biome-ignore lint/correctness/noUnusedVariables: Display
class StoryColorPickerThemeWrapper extends LitElement {
  @property({ type: String })
  mode: 'inline' | 'popup' = 'inline';

  render() {
    const theme = getSettingsValue('theme');
    return html`
      <mov-color-picker
        .mode="${this.mode}"
        .value=${theme}
        @change=${changeTheme}
        .swatches=${_.values(colors)
          .slice(6)
          .flatMap(c => [c[600]])}
      ></mov-color-picker>
    `;
  }
}

const meta: Meta<ColorPicker> = {
  title: 'Components/Color Picker',
  component: 'mov-color-picker',
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
    label: { control: 'text' },
    hint: { control: 'text' },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    disabled: { control: 'boolean' },
    name: { control: 'text' },
  },
  args: {
    value: '#228be6',
    mode: 'inline',
    swatches: null,
    label: 'Color',
    hint: 'Select a theme color',
    size: 'medium',
    disabled: false,
    name: 'theme-color',
  },
  render: args => html`
    <mov-color-picker
      .mode="${args.mode}"
      .value="${args.value}"
      .swatches="${args.swatches}"
      label="${args.label}"
      hint="${args.hint}"
      size="${args.size}"
      ?disabled="${args.disabled}"
      name="${args.name}"
    ></mov-color-picker>
  `,
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

export const Comparison: StoryObj<ColorPicker> = {
  render: () => html`
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/@awesome.me/webawesome@3.5.0/dist-cdn/styles/webawesome.css"
    />
    <script type="module">
      import 'https://cdn.jsdelivr.net/npm/@awesome.me/webawesome@3.5.0/dist-cdn/components/color-picker/color-picker.js';
    </script>
    <div style="display: flex; flex-direction: column; gap: 2rem; padding: 1rem;">
      <div>
        <h4><code>&lt;mov-color-picker&gt;</code></h4>
        <mov-color-picker
          label="MOV Color Picker"
          value="#228be6"
        ></mov-color-picker>
      </div>

      <div>
        <h4><code>&lt;wa-color-picker&gt;</code></h4>
        <wa-color-picker
          label="Web Awesome Color Picker"
          value="#228be6"
        ></wa-color-picker>
      </div>
    </div>
  `,
};
