import type { Meta, StoryObj } from '@storybook/web-components';
import { html, render } from 'lit';
import '../../src/ui/components/Panel';

const meta: Meta = {
  title: 'Components/Panel',
  component: 'mov-panel',
  argTypes: {
    open: { control: 'boolean' },
    mode: { control: { type: 'radio', options: ['drawer', 'dialog'] } },
    position: { control: { type: 'radio', options: ['left', 'right'] } },
    fullscreen: { control: 'boolean' },
  },
  render: args => {
    const container = document.createElement('div');
    const openPanel = () => {
      const panel = document.querySelector('mov-panel');
      if (panel) panel.open = true;
    };
    const template = html`
      <button @click=${openPanel}>Open Panel</button>
      <mov-panel
        ?open=${args.open}
        mode=${args.mode || 'drawer'}
        position=${args.position || 'left'}
        ?fullscreen=${args.fullscreen}
        @close=${() => {
          const panel = document.querySelector('mov-panel');
          if (panel) panel.open = false;
        }}
      >
        ${args.slot}
      </mov-panel>
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
    mode: 'drawer',
    position: 'left',
    slot: html`<p>This is a drawer panel on the left.</p>`,
  },
};

export const DrawerRight: Story = {
  name: 'Drawer (Right)',
  args: {
    ...DrawerLeft.args,
    position: 'right',
    slot: html`<p>This is a drawer panel on the right.</p>`,
  },
};

export const DialogCentered: Story = {
  name: 'Dialog (Centered)',
  args: {
    open: false,
    mode: 'dialog',
    slot: html`<p>This is a centered dialog panel.</p>`,
  },
};

export const DialogFullscreen: Story = {
  name: 'Dialog (Fullscreen)',
  args: {
    ...DialogCentered.args,
    fullscreen: true,
    slot: html`<p>This is a fullscreen dialog panel.</p>`,
  },
};

export const WithHeaderAndAction: Story = {
  name: 'With Header and Action',
  args: {
    ...DrawerLeft.args,
    slot: html`
      <span slot="header">Panel Title</span>
      <button slot="action">Action</button>
      <p>This panel has a header and an action button.</p>
    `,
  },
};
