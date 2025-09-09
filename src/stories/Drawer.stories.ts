import type { Meta, StoryObj } from '@storybook/web-components';
import { html, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import '../ui/components/Drawer.ts';

/**
 * A wrapper component to make the default drawer story interactive.
 * It manages the open/closed state of the drawer.
 */
@customElement('mov-drawer-story-wrapper')
class DrawerStoryWrapper extends LitElement {
  @state()
  private isOpen = false;

  @property({ type: Boolean })
  right = false;

  private openDrawer() {
    this.isOpen = true;
  }

  private closeDrawer() {
    this.isOpen = false;
  }

  render() {
    return html`
      <button @click=${this.openDrawer}>Open Drawer</button>
      <mov-drawer
        ?open=${this.isOpen}
        ?right=${this.right}
        @close=${this.closeDrawer}
      >
        <div style="padding: 1rem;">
          <p>This is the content of the drawer.</p>
          <p>Click the backdrop or press ESC to close.</p>
        </div>
      </mov-drawer>
    `;
  }

  // Render into the light DOM so the button is not in a shadow root
  createRenderRoot() {
    return this;
  }
}

const meta: Meta = {
  title: 'Components/Drawer',
  component: 'mov-drawer',
  argTypes: {
    // The 'open' property is controlled by the wrapper, so we disable the Storybook control for it.
    open: {
      control: false,
    },
    right: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: ({ right }) =>
    html`<mov-drawer-story-wrapper ?right=${right}></mov-drawer-story-wrapper>`,
  args: {
    right: false,
  },
};

export const Open: Story = {
  name: 'Initially Open',
  render: ({ right }) => html`
    <mov-drawer ?open=${true} ?right=${right}>
      <div style="padding: 1rem;">
        <p>This drawer is initially open.</p>
        <p>The 'open' property is set to true.</p>
      </div>
    </mov-drawer>
  `,
  args: {
    right: false,
  },
};

export const Right: Story = {
  name: 'Right Position',
  render: ({ right }) => html`
    <mov-drawer ?open=${true} ?right=${right}>
      <div style="padding: 1rem;">
        <p>This drawer is positioned on the right.</p>
        <p>The 'right' property is set to true.</p>
      </div>
    </mov-drawer>
  `,
  args: {
    right: true,
  },
};
