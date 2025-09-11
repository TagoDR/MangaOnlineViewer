import type { Meta, StoryObj } from '@storybook/web-components';
import { html, render } from 'lit';
import '../../src/ui/components/Panel';

const meta: Meta = {
  title: 'Components/Panel',
  component: 'mov-panel',
  argTypes: {
    open: { control: 'boolean' },
    mode: { control: { type: 'radio', options: ['drawer', 'dialog', 'inline'] } },
    position: { control: { type: 'radio', options: ['left', 'right', 'center', 'fullscreen'] } },
  },
  render: args => {
    const container = document.createElement('div');

    if (args.mode === 'inline') {
      const template = html`
        <mov-panel
          mode="inline"
          position=${args.position || 'left'}
        >
          ${args.slot}
        </mov-panel>
      `;
      render(template, container);
      return container;
    }

    const openPanel = () => {
      const panel = container.querySelector('mov-panel');
      if (panel) panel.open = true;
    };
    const closePanel = () => {
      const panel = container.querySelector('mov-panel');
      if (panel) panel.open = false;
    };

    const template = html`
      <button @click=${openPanel}>Open Panel</button>
      <mov-panel
        ?open=${args.open}
        mode=${args.mode || 'drawer'}
        position=${args.position || 'left'}
        @close=${closePanel}
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
    position: 'center',
    slot: html`<p>This is a centered dialog panel.</p>`,
  },
};

export const DialogFullscreen: Story = {
  name: 'Dialog (Fullscreen)',
  args: {
    ...DialogCentered.args,
    position: 'fullscreen',
    slot: html`<p>This is a fullscreen dialog panel.</p>`,
  },
};

export const Inline: Story = {
  name: 'Inline',
  args: {
    mode: 'inline',
    slot: html`
      <span slot="header">Inline Panel</span>
      <p>This is an inline panel. It appears directly in the layout.</p>
    `,
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
