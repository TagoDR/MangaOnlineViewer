import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

// --- Helper Content for Slots ---
const mainContent = html`
  <div
    style="padding: 1rem; height: 200vh; background: linear-gradient(to bottom, #f8f9fa, #e9ecef); color: #333;"
  >
    <h2>Main Content</h2>
    <p>This area is scrollable.</p>
    <p>Scroll down to observe the header's behavior based on the selected 'headerMode'.</p>
  </div>
`;

const headerContent = html`
  <div style="display: flex; justify-content: space-between; align-items: center; width: 100%;">
    <span>App Header</span>
    <div style="display: flex; gap: 1rem;">
      <span>Link 1</span>
      <span>Link 2</span>
    </div>
  </div>
`;

const toolbarContent = html`
  <div style="display: flex; gap: 0.5rem; align-items: center;">
    <span>Toolbar</span>
  </div>
`;

const sidebarContent = html`
  <div style="padding: 1rem;">
    <p>Sidebar</p>
  </div>
`;

const footerContent = html`
  <div style="padding: 1rem; text-align: center; width: 100%;">
    <p>Footer Content</p>
    <p>Hover over the footer area to see it expand.</p>
  </div>
`;
// --- End Helper Content ---

export default {
  title: 'Layout/App Shell',
  component: 'mov-app-shell',
  tags: ['autodocs'],
  argTypes: {
    headerMode: {
      control: 'select',
      options: ['scroll', 'hover', 'click', 'fixed', 'simple'],
      description: 'Controls how the header appears and disappears.',
    },
    viewMode: {
      control: 'select',
      options: ['WebComic', 'Vertical', 'FluidLTR', 'FluidRTL'],
      description: 'The view mode for the main content (affects styling).',
    },
    footerEnabled: {
      control: 'boolean',
      description: 'Toggles the visibility of the footer.',
    },
    sidebarEnabled: {
      control: 'boolean',
      description: 'Toggles the visibility of the sidebar and its control button.',
    },
    autoScroll: {
      control: 'boolean',
      description: 'Activates or deactivates the autoscroll feature.',
    },
    scrollAmount: {
      control: { type: 'range', min: 1, max: 50, step: 1 },
      description: 'The number of pixels to scroll on each autoscroll step.',
    },
    onAutoScrollChange: { action: 'auto-scroll-change' },
  },
  render: args => html`
    <mov-app-shell
      .headerMode=${args.headerMode}
      .viewMode=${args.viewMode}
      ?footerEnabled=${args.footerEnabled}
      ?sidebarEnabled=${args.sidebarEnabled}
      ?autoScroll=${args.autoScroll}
      .scrollAmount=${args.scrollAmount}
      @auto-scroll-change=${args.onAutoScrollChange}
      style="position: relative; height: 80vh; border: 1px solid #ccc; margin: 1rem;"
    >
      <div slot="header">${headerContent}</div>
      <div slot="toolbar">${toolbarContent}</div>
      <div slot="sidebar">${sidebarContent}</div>
      <div slot="main">${mainContent}</div>
      <div slot="footer">${footerContent}</div>
    </mov-app-shell>
  `,
} satisfies Meta;

export const Default: StoryObj = {
  name: 'Default Shell',
  args: {
    headerMode: 'scroll',
    viewMode: 'Vertical',
    footerEnabled: false,
    sidebarEnabled: false,
    autoScroll: false,
    scrollAmount: 10,
  },
};

export const WithSidebar: StoryObj = {
  name: 'With Sidebar Enabled',
  args: {
    ...Default.args,
    sidebarEnabled: true,
  },
};

export const WithFooter: StoryObj = {
  name: 'With Footer Enabled',
  args: {
    ...Default.args,
    footerEnabled: true,
  },
};

export const FullLayout: StoryObj = {
  name: 'Full Layout',
  args: {
    ...Default.args,
    sidebarEnabled: true,
    footerEnabled: true,
  },
};

export const ClickHeader: StoryObj = {
  name: 'Click-to-Toggle Header',
  args: {
    ...Default.args,
    headerMode: 'click',
    sidebarEnabled: true, // Enable sidebar to show header content offset
  },
};

export const AutoScrolling: StoryObj = {
  name: 'Auto-Scrolling Enabled',
  args: {
    ...Default.args,
    autoScroll: true,
    scrollAmount: 5,
  },
};
