import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { setAppStateValue } from '../core/settings.ts';
import '../ui/CommentsPanel.ts';
import localhost from '../main/localhost.ts';
import type { IMangaImages } from '../types';

// Mock data required by the App component and its children
const mockManga = localhost.run() as IMangaImages;

const meta: Meta = {
  title: 'UI/CommentsPanel',
  component: 'comments-panel',
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Toggles the visibility of the comments panel by updating the global store.',
    },
  },
  render: args => {
    setAppStateValue('manga', mockManga);
    setAppStateValue('panel', args.open ? 'comments' : 'none');

    const openPanel = () => {
      setAppStateValue('panel', 'comments');
    };

    return html`
      <button @click=${openPanel}>Set Panel to Open</button>
      <p>Change the 'open' control in Storybook to close the panel.</p>
      <comments-panel></comments-panel>
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
