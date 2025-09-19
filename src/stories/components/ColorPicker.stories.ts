import type { Meta, StoryObj } from '@storybook/web-components';
import { html, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import '../../ui/components/ColorPicker.ts';

// A helper component to manage and display the state
@customElement('color-picker-story-wrapper')
// @ts-expect-error
class ColorPickerStoryWrapper extends LitElement {
  @property({ type: Array })
  swatches: string[] | null = null;
  @state()
  private color = '#228be6';

  render() {
    return html`
      <div
        style="display: flex; flex-direction: column; align-items: center; gap: 1rem; padding: 1rem;"
      >
        <color-picker
          .value="${this.color}"
          .swatches="${this.swatches}"
          @change="${this.handleColorChange}"
        ></color-picker>
        <div>Selected Value: <strong>${this.color}</strong></div>
      </div>
    `;
  }

  private handleColorChange(e: CustomEvent) {
    this.color = e.detail.value;
  }
}

export default {
  title: 'Components/Color Picker',
  component: 'color-picker',
  parameters: {
    controls: { disable: true }, // Disable controls as the component is self-managing
  },
  render: args =>
    html`<color-picker-story-wrapper .swatches="${args.swatches}"></color-picker-story-wrapper>`,
} satisfies Meta;

export const Default: StoryObj = {
  args: {
    swatches: null,
  },
};

export const CustomSwatches: StoryObj = {
  name: 'With Custom Swatches',
  args: {
    swatches: ['#e67e22', '#2ecc71', '#9b59b6', '#f1c40f', '#3498db', '#e74c3c'],
  },
};
