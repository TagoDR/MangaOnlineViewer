import type { Meta, StoryObj } from '@storybook/web-components';
import { html, nothing, render } from 'lit';
import '../../ui/components/Drawer.ts';

const meta: Meta = {
  title: 'Components/Drawer',
  component: 'mov-drawer',
  argTypes: {
    open: { control: 'boolean' },
    placement: { control: { type: 'radio', options: ['start', 'end'] } },
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
        placement=${args.placement || 'end'}
        @close=${closePanel}
      >
        <span slot="label">${args.label}</span>
        ${args.action ? html`<button slot="header-actions">${args.action}</button>` : nothing}
        ${args.slot}
      </mov-drawer>
    `;
    render(template, container);
    return container;
  },
};

export default meta;

type Story = StoryObj;

export const DrawerEnd: Story = {
  name: 'Drawer (End/Right)',
  args: {
    open: false,
    placement: 'end',
    label: 'Right Drawer',
    slot: html`<p>This is a drawer panel on the right.</p>`,
  },
};

export const DrawerStart: Story = {
  name: 'Drawer (Start/Left)',
  args: {
    ...DrawerEnd.args,
    placement: 'start',
    label: 'Left Drawer',
    slot: html`<p>This is a drawer panel on the left.</p>`,
  },
};

export const WithHeaderAndAction: Story = {
  name: 'With Header and Action',
  args: {
    ...DrawerEnd.args,
    label: 'Panel Title',
    action: 'Action',
    slot: html`<p>This panel has a header and an action button.</p>`,
  },
};
