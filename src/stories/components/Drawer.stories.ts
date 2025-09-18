import type { Meta, StoryObj } from '@storybook/web-components';
import { html, render } from 'lit';
import '../../ui/components/Drawer.ts';

const meta: Meta = {
  title: 'Components/Drawer',
  component: 'mov-drawer',
  argTypes: {
    open: { control: 'boolean' },
    position: { control: { type: 'radio', options: ['left', 'right'] } },
  },
  render: args => {
    const container = document.createElement('div');

    const openPanel = () => {
      const panel = container.querySelector('mov-drawer');
      if (panel) panel.open = true;
    };
    const closePanel = () => {
      const panel = container.querySelector('mov-drawer');
      if (panel) panel.open = false;
    };

    const template = html`
      <button @click=${openPanel}>Open Drawer</button>
      <mov-drawer
        ?open=${args.open}
        position=${args.position || 'left'}
        @close=${closePanel}
      >
        <span slot="header">${args.header}</span>
        <button slot="action">${args.action}</button>
        ${args.slot}
      </mov-drawer>
    `;
    render(template, container);
    return container;
  },
};

export default meta;

type Story = StoryObj;

export const DrawerLeft: Story = {
  name: 'Drawer (Left)',
  args: {
    open: false,
    position: 'left',
    header: 'Left Drawer',
    slot: html`<p>This is a drawer panel on the left.</p>`,
  },
};

export const DrawerRight: Story = {
  name: 'Drawer (Right)',
  args: {
    ...DrawerLeft.args,
    position: 'right',
    header: 'Right Drawer',
    slot: html`<p>This is a drawer panel on the right.</p>`,
  },
};

export const WithHeaderAndAction: Story = {
  name: 'With Header and Action',
  args: {
    ...DrawerLeft.args,
    header: 'Panel Title',
    action: 'Action',
    slot: html`<p>This panel has a header and an action button.</p>`,
  },
};
