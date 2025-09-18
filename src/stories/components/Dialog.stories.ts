import type { Meta, StoryObj } from '@storybook/web-components';
import { html, render } from 'lit';
import '../../ui/components/Dialog.ts';

const meta: Meta = {
  title: 'Components/Dialog',
  component: 'mov-dialog',
  argTypes: {
    open: { control: 'boolean' },
    mode: { control: { type: 'radio', options: ['dialog', 'inline'] } },
    fullscreen: { control: 'boolean' },
  },
  render: args => {
    const container = document.createElement('div');

    if (args.mode === 'inline') {
      const template = html`
        <mov-dialog mode="inline">
          <span slot="header">${args.header}</span>
          ${args.slot}
        </mov-dialog>
      `;
      render(template, container);
      return container;
    }

    const openPanel = () => {
      const panel = container.querySelector('mov-dialog');
      if (panel) panel.open = true;
    };
    const closePanel = () => {
      const panel = container.querySelector('mov-dialog');
      if (panel) panel.open = false;
    };

    const template = html`
      <button @click=${openPanel}>Open Dialog</button>
      <mov-dialog
        ?open=${args.open}
        ?fullscreen=${args.fullscreen}
        @close=${closePanel}
      >
        <span slot="header">${args.header}</span>
        <button slot="action">${args.action}</button>
        ${args.slot}
      </mov-dialog>
    `;
    render(template, container);
    return container;
  },
};

export default meta;

type Story = StoryObj;

export const DialogCentered: Story = {
  name: 'Dialog (Centered)',
  args: {
    open: false,
    fullscreen: false,
    header: 'Centered Dialog',
    slot: html`<p>This is a centered dialog panel.</p>`,
  },
};

export const DialogFullscreen: Story = {
  name: 'Dialog (Fullscreen)',
  args: {
    ...DialogCentered.args,
    fullscreen: true,
    header: 'Fullscreen Dialog',
    slot: html`<p>This is a fullscreen dialog panel.</p>`,
  },
};

export const Inline: Story = {
  name: 'Inline',
  args: {
    mode: 'inline',
    header: 'Inline Panel',
    slot: html`<p>This is an inline panel. It appears directly in the layout.</p>`,
  },
};

export const WithHeaderAndAction: Story = {
  name: 'With Header and Action',
  args: {
    ...DialogCentered.args,
    header: 'Panel Title',
    action: 'Action',
    slot: html`<p>This panel has a header and an action button.</p>`,
  },
};
