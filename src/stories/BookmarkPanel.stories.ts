import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { setAppStateValue } from '../core/settings.ts';
import '../ui/BookmarkPanel.ts';
import styles from '../ui/styles';

const meta: Meta = {
  title: 'UI/BookmarkPanel',
  component: 'mov-bookmark-panel',
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Toggles the visibility of the bookmark panel by updating the global store.',
    },
  },
  render: (args) => {
    setAppStateValue('panel', args.open ? 'bookmarks' : 'none');

    const openPanel = () => {
      setAppStateValue('panel', 'bookmarks');
    };

    return html`
      <style>
        ${styles}
      </style>
      <button @click=${openPanel}>Set Panel to Open</button>
      <p>Change the 'open' control in Storybook to close the panel.</p>
      <mov-bookmark-panel></mov-bookmark-panel>
    `;
  },
};

export default meta;

type Story = StoryObj & { args: { open: boolean } };

export const DrawerOpen: Story = {
  name: 'Drawer (Open)',
  args: {
    open: true,
  },
};
