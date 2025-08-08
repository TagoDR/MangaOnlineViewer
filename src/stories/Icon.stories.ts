import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { map } from 'lit/directives/map.js';

const icons = [
  'arrow-autofit-down',
  'arrow-autofit-height',
  'arrow-autofit-left',
  'arrow-autofit-right',
  'arrow-autofit-width',
  'arrow-big-left',
  'arrow-big-right',
  'bookmark',
  'bookmark-off',
  'bookmarks',
  'category',
  'check',
  'device-floppy',
  'external-link',
  'eye',
  'eye-off',
  'file-download',
  'keyboard',
  'list-numbers',
  'loader2',
  'location-cog',
  'menu-2',
  'message',
  'moon',
  'palette',
  'pencil',
  'photo',
  'photo-off',
  'player-pause',
  'player-play',
  'refresh',
  'settings',
  'settings-off',
  'spacing-vertical',
  'sun',
  'trash',
  'world-cog',
  'x',
  'zoom-cancel',
  'zoom-in',
  'zoom-in-area',
  'zoom-out',
  'zoom-out-area',
  'zoom-pan',
];

export default {
  title: 'Components/Icon',
  component: 'mov-icon',
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'select',
      options: icons,
    },
    label: {
      control: 'text',
    },
  },
  render: args => html`
    <mov-icon
      name="${args.name}"
      label="${args.label}"
    ></mov-icon>
  `,
} satisfies Meta;

export const Default: StoryObj = {
  args: {
    name: 'photo',
    label: 'An Icon',
  },
};

export const IconGallery: StoryObj = {
  name: 'Icon Gallery',
  parameters: {
    controls: { disable: true },
  },
  render: () => html`
    <style>
      .icon-gallery {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
        gap: 1rem;
      }
      .icon-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
        padding: 0.5rem;
        border: 1px solid #ccc;
        border-radius: 4px;
      }
      .icon-item mov-icon {
        width: 24px;
        height: 24px;
      }
    </style>
    <div class="icon-gallery">
      ${map(
        icons,
        icon => html`
          <div class="icon-item">
            <mov-icon
              name="${icon}"
              label="${icon}"
            ></mov-icon>
            <code style="font-size: 0.8rem;">${icon}</code>
          </div>
        `,
      )}
    </div>
  `,
};
