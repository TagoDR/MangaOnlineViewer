import type { Meta, StoryObj } from '@storybook/web-components';
import { html, render } from 'lit';
import '../../src/ui/components/Drawer';

const meta: Meta = {
  title: 'Components/Drawer',
  component: 'mov-drawer',
  argTypes: {
    open: { control: 'boolean' },
    right: { control: 'boolean' },
  },
  render: args => {
    const container = document.createElement('div');
    const template = html`
      <button @click=${() => {
        const drawer = document.querySelector('mov-drawer');
        if (drawer) {
          drawer.open = true;
        }
      }}>Open Drawer</button>
      <mov-drawer
        ?open=${args.open}
        ?right=${args.right}
      >
        ${args.slot}
      </mov-drawer>
    `;
    render(template, container);
    return container;
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  args: {
    open: false,
    right: false,
    slot: html`<p>This is the default drawer content.</p>`,
  },
};

export const Right: Story = {
  args: {
    ...Default.args,
    right: true,
    slot: html`<p>This drawer is positioned on the right.</p>`,
  },
};

export const WithHeader: Story = {
  args: {
    ...Default.args,
    slot: html`
            <span slot="header">Header Title</span>
            <p>This drawer has a header.</p>
        `,
  },
};

export const WithHeaderAndAction: Story = {
  args: {
    ...Default.args,
    slot: html`
            <span slot="header">Header Title</span>
            <button slot="action">Action</button>
            <p>This drawer has a header and an action button.</p>
        `,
  },
};

export const RightWithHeaderAndAction: Story = {
  args: {
    ...WithHeaderAndAction.args,
    right: true,
  },
};

export const CloseEvent: Story = {
  render: () => {
    const container = document.createElement('div');
    const openDrawer = () => {
      const drawer = container.querySelector('mov-drawer');
      if (drawer) drawer.open = true;
    };
    const onClose = () => {
      alert('Drawer closed event fired!');
    };

    const template = html`
            <button @click=${openDrawer}>Open Drawer</button>
            <mov-drawer @close=${onClose}>
                <p>An alert will appear when this drawer is closed.</p>
            </mov-drawer>
        `;
    render(template, container);
    return container;
  },
};
