import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { setAppStateValue, settings } from '../core/settings.ts';
import '../ui/BookmarkPanel.ts';

const meta: Meta = {
  title: 'UI/BookmarkPanel',
  component: 'mov-bookmark-panel',
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Toggles the visibility of the bookmark panel by updating the global store.',
    },
  },
  render: args => {
    settings.setKey('bookmarks', [
      {
        name: 'My Great Manga',
        url: 'http://example.com/1',
        page: 1,
        date: new Date().toISOString(),
      },
      {
        name: 'Another Awesome Manga',
        url: 'http://example.com/2',
        page: 42,
        date: new Date().toISOString(),
      },
    ]);
    setAppStateValue('panel', args.open ? 'bookmarks' : 'none');

    const openPanel = () => {
      setAppStateValue('panel', 'bookmarks');
    };

    return html`
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
