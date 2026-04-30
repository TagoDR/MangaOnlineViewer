import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { setAppStateValue } from '../core/settings.ts';
import '../ui/KeybindingsPanel.ts';

const meta: Meta = {
  title: 'UI/KeybindingsPanel',
  component: 'keybindings-panel',
  argTypes: {
    panel: {
      control: 'select',
      options: ['none', 'keybindings', 'keybindingsEditor'],
      description: 'Toggles the visibility and mode of the keybindings panel.',
    },
  },
  render: args => {
    setAppStateValue('panel', args.panel);

    const openListView = () => {
      setAppStateValue('panel', 'keybindings');
    };
    const openEditorView = () => {
      setAppStateValue('panel', 'keybindingsEditor');
    };

    return html`
      <button @click=${openListView}>Open List View</button>
      <button @click=${openEditorView}>Open Editor View</button>
      <p>Change the 'panel' control in Storybook to change the view or close the panel.</p>
      <keybindings-panel></keybindings-panel>
    `;
  },
};

export default meta;

type Story = StoryObj & { args: { panel: 'none' | 'keybindings' | 'keybindingsEditor' } };

export const ListView: Story = {
  name: 'List View',
  args: {
    panel: 'keybindings',
  },
};

export const EditorView: Story = {
  name: 'Editor View',
  args: {
    panel: 'keybindingsEditor',
  },
};
