import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { setAppStateValue } from '../core/settings.ts';
import '../ui/SettingsPanel.ts';
import styles from '../ui/styles';

const meta: Meta = {
  title: 'UI/SettingsPanel',
  component: 'mov-settings-panel',
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Toggles the visibility of the settings panel by updating the global store.',
    },
  },
  render: args => {
    // The component is now reactive, so we just need to set the state.
    setAppStateValue('panel', args.open ? 'settings' : 'none');

    const openPanel = () => {
      setAppStateValue('panel', 'settings');
    };

    // The story now includes a button to demonstrate reopening the panel.
    return html`
      <style>
        ${styles}
      </style>
      <button @click=${openPanel}>Set Panel to Open</button>
      <p>Change the 'open' control in Storybook to close the panel.</p>
      <mov-settings-panel></mov-settings-panel>
    `;
  },
};

export default meta;

type Story = StoryObj & { args: { open: boolean; mode?: 'inline' } };

export const DrawerOpen: Story = {
  name: 'Drawer (Open)',
  args: {
    open: true,
  },
};
