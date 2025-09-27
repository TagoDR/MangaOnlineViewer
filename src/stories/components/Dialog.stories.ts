import type { Meta, StoryObj } from '@storybook/web-components';
import { html, nothing, render } from 'lit';
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
          <span slot="label">${args.label}</span>
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
        <span slot="label">${args.label}</span>
        ${args.action ? html`<button slot="header-actions">${args.action}</button>` : nothing}
        ${args.slot} ${args.slot}
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
    label: 'Centered Dialog',
    slot: html`<p>This is a centered dialog panel.</p>`,
  },
};

export const DialogFullscreen: Story = {
  name: 'Dialog (Fullscreen)',
  args: {
    ...DialogCentered.args,
    fullscreen: true,
    label: 'Fullscreen Dialog',
    slot: html`<p>This is a fullscreen dialog panel.</p>`,
  },
};

export const Inline: Story = {
  name: 'Inline',
  args: {
    mode: 'inline',
    label: 'Inline Panel',
    slot: html`<p>This is an inline panel. It appears directly in the layout.</p>`,
  },
};

export const WithHeaderAndAction: Story = {
  name: 'With Header and Action',
  args: {
    ...DialogCentered.args,
    label: 'Panel Title',
    action: 'Action',
    slot: html`<p>This panel has a header and an action button.</p>`,
  },
};

export const WithCustomButtons: Story = {
  name: 'With Custom Buttons',
  args: {
    ...DialogCentered.args,
    label: 'Custom Buttons Dialog',
    slot: html`<p>This dialog has custom buttons.</p>`,
  },
  render: args => {
    const container = document.createElement('div');
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
        <span slot="label">${args.label}</span>
        ${args.slot}
        <div
          slot="footer"
          style="display: flex; justify-content: flex-end; gap: 0.5rem;"
        >
          <button @click=${closePanel}>Custom OK</button>
          <button @click=${closePanel}>Custom Cancel</button>
        </div>
      </mov-dialog>
    `;
    render(template, container);
    return container;
  },
};
