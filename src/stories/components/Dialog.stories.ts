import type { Meta, StoryObj } from '@storybook/web-components';
import { html, nothing, render } from 'lit';
import Dialog from '../../ui/components/Dialog';
import '../../ui/components/Icon';

const meta: Meta = {
  title: 'Components/Dialog',
  component: 'mov-dialog',
  argTypes: {
    open: { control: 'boolean' },
    mode: { control: 'radio', options: ['dialog', 'inline'] },
    fullscreen: { control: 'boolean' },
    icon: { control: 'select', options: ['info', 'warning', 'success', 'error', 'question'] },
    slot: { control: 'object' },
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
      ${args.mode !== 'inline' ? html`<button @click=${openPanel}>Open Dialog</button>` : nothing}
      <mov-dialog
        ?open=${args.open}
        ?fullscreen=${args.fullscreen}
        .icon="${args.icon}"
        .mode="${args.mode}"
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
    mode: 'dialog',
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

export const WithIcons: Story = {
  name: 'With Icons',
  args: {
    ...DialogCentered.args,
  },
  render: () => {
    const container = document.createElement('div');
    const dialogContainer = document.createElement('div');

    const openPanel = (iconType: 'info' | 'warning' | 'success' | 'error' | 'question') => {
      const closePanel = () => {
        render(html``, dialogContainer);
      };

      const dialogTemplate = html`
        <mov-dialog
          open
          .icon=${iconType}
          @close=${closePanel}
        >
          <span slot="label">${iconType.toUpperCase()} Dialog</span>
          <p>This is a dialog with a "${iconType}" icon.</p>
          <div
            slot="footer"
            style="display: flex; justify-content: flex-end; gap: 0.5rem;"
          >
            <button @click=${closePanel}>Close</button>
          </div>
        </mov-dialog>
      `;
      render(dialogTemplate, dialogContainer);
    };

    const icons: Array<'info' | 'warning' | 'success' | 'error' | 'question'> = [
      'info',
      'warning',
      'success',
      'error',
      'question',
    ];

    const getColorForIcon = (iconType: (typeof icons)[number]) => {
      switch (iconType) {
        case 'success':
          return 'var(--theme-color-success, #28a745)';
        case 'error':
          return 'var(--theme-color-danger, #dc3545)';
        case 'warning':
          return 'var(--theme-color-warning, #ffc107)';
        case 'info':
          return 'var(--theme-color-info, #17a2b8)';
        case 'question':
          return 'var(--theme-color-secondary, #6c757d)';
        default:
          return 'inherit';
      }
    };

    const buttonsTemplate = html`
      <div style="display: flex; gap: 0.5rem; align-items: center; flex-wrap: wrap;">
        ${icons.map(
          icon => html`
            <button
              @click=${() => openPanel(icon)}
              style="display: flex; align-items: center; gap: 0.25rem;"
            >
              <mov-icon
                .name=${Dialog.getIconName(icon)}
                style="color: ${getColorForIcon(icon)}"
              ></mov-icon>
              Show ${icon}
            </button>
          `,
        )}
      </div>
    `;

    render(buttonsTemplate, container);
    container.append(dialogContainer);

    return container;
  },
};
