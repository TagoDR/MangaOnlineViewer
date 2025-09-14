import type { Meta, StoryObj } from '@storybook/web-components';
import { html, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import '../../ui/components/ColorPanel.ts';

/**
 * A wrapper component to manage the state for the mov-color-panel story.
 * The mov-color-panel itself relies on a global event handler for theme changes,
 * so this wrapper simulates that behavior for Storybook.
 */
@customElement('mov-color-panel-story-wrapper')
// @ts-expect-error
class ColorPanelStoryWrapper extends LitElement {
  @state()
  private selectedTheme = '#228be6'; // Default to a blue color

  /**
   * Handles click events on the color panel.
   * It identifies the clicked swatch and updates the selected theme.
   */
  private handleColorSelect(e: Event) {
    // When an event bubbles up from a shadow root, its target is retargeted.
    // We use composedPath() to get the actual element that was clicked.
    const target = e.composedPath()[0] as HTMLElement;
    const swatch = target.closest('.ThemeRadio');
    if (swatch) {
      // The color is stored in the 'title' attribute of the swatch
      const color = swatch.getAttribute('title');
      if (color) {
        this.selectedTheme = color;
      }
    }
  }

  render() {
    return html`
      <div
        style="padding: 1rem; max-width: 360px;"
        @click=${this.handleColorSelect}
      >
        <p>Click a color to select it:</p>
        <mov-color-panel .selectedTheme=${this.selectedTheme}></mov-color-panel>
        <p style="margin-top: 1rem;">
          Selected Color:
          <strong>${this.selectedTheme}</strong>
        </p>
      </div>
    `;
  }

  /**
   * Render directly into the light DOM to ensure styles and events work as expected.
   */
  createRenderRoot() {
    return this;
  }
}

export default {
  title: 'Components/Color Panel',
  component: 'mov-color-panel',
  tags: ['autodocs'],
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        component:
          'A panel displaying color swatches for theme selection. The component is interactive within the story. The wrapper simulates the theme selection event handling.',
      },
    },
  },
  render: () => html`<mov-color-panel-story-wrapper></mov-color-panel-story-wrapper>`,
} satisfies Meta;

export const Default: StoryObj = {};
