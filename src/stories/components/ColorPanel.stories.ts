import { useStores } from '@nanostores/lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { appState, getSettingsValue, locale, settings } from '../../core/settings.ts';
import '../../ui/components/ColorPanel.ts';
import { changeTheme } from '../../ui/events/theming.ts';

@customElement('story-color-panel-wrapper')
@useStores(settings, locale, appState)
// @ts-expect-error - Decorator is valid
class StoryColorPanelWrapper extends LitElement {
  render() {
    return html`
      <color-panel
        .selected=${getSettingsValue('theme')}
        @input=${changeTheme}
      ></color-panel>
    `;
  }
}

export default {
  title: 'Components/Color Panel',
  component: 'color-panel',
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

export const Default: StoryObj = {
  render: () => html`<story-color-panel-wrapper></story-color-panel-wrapper>`,
};
