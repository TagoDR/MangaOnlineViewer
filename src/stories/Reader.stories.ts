import { useStores } from '@nanostores/lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import {
  appState,
  getAppStateValue,
  setAppStateValue,
  setSettingsValue,
  settings,
} from '../core/settings';

// Import all components used by Reader and its children
import localhost from '../main/localhost.ts';
import type { IMangaImages } from '../types';

// A helper component to display the current page from the store for easy debugging

@customElement('mov-current-page-display')
@useStores(appState)
// @ts-ignore
class CurrentPageDisplay extends LitElement {
  render() {
    return html`<b>Current Page: ${getAppStateValue('currentPage')}</b>`;
  }
}

const mockManga = localhost.run() as IMangaImages;

// Styles for the sticky header, making it theme-aware
const stickyHeaderStyles = `
  position: sticky;
  top: 10px;
  z-index: 10;
  padding: 8px;
  border: 1px solid var(--wa-color-border-normal, #ddd);
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  text-align: center;
  margin-bottom: 1rem;
`;

// The Meta object configures the component's story page
export default {
  title: 'Content/Reader',
  component: 'mov-reader',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
The \`mov-reader\` component is the main container for manga pages.
It handles different layout modes (Vertical, WebComic, Fluid) and tracks the current page.
This story simulates the app's main scrollable area to test all modes.
        `,
      },
    },
  },
  argTypes: {
    // Controls for global settings
    viewMode: {
      control: 'select',
      options: ['Vertical', 'WebComic', 'FluidLTR', 'FluidRTL'],
      description: "Simulates the global 'viewMode' setting.",
      table: { category: 'Global Settings' },
    },
    fitWidthIfOversize: {
      control: 'boolean',
      description: "Simulates the global 'fitWidthIfOversize' setting.",
      table: { category: 'Global Settings' },
    },
  },
  // The render function sets the global state before rendering the component
  render: args => {
    // Set global settings based on story controls
    settings.setKey('fitWidthIfOversize', args.fitWidthIfOversize);
    setSettingsValue('viewMode', args.viewMode);

    // Set up the mock manga data in the store
    setAppStateValue('manga', mockManga);
    setAppStateValue('currentPage', 1); // Reset on each render

    const isFluid = args.viewMode.startsWith('Fluid');
    // The outer div simulates the <main> element in AppShell.
    // It becomes the scroll container for vertical modes.
    const containerStyles = `
      height: 85vh; /* Increased from 80vh */
      width: 95vw;  /* Increased from 90vw */
      border: 2px dashed #ccc;
      margin: 1rem auto;
      overflow: ${isFluid ? 'hidden' : 'auto'};
    `;

    return html`
      <div style="position: relative;">
        <div style=${stickyHeaderStyles}>
          <mov-current-page-display></mov-current-page-display>
        </div>
        <div style=${containerStyles}>
          <mov-reader .viewMode=${args.viewMode}></mov-reader>
        </div>
      </div>
    `;
  },
} satisfies Meta;

// Default story for Vertical mode
export const Vertical: StoryObj = {
  name: 'Vertical Mode',
  args: {
    viewMode: 'Vertical',
    fitWidthIfOversize: true,
  },
};

// Story for WebComic mode
export const WebComic: StoryObj = {
  name: 'WebComic Mode',
  args: {
    ...Vertical.args,
    viewMode: 'WebComic',
  },
};

// Story for Fluid LTR mode
export const FluidLTR: StoryObj = {
  name: 'Fluid LTR Mode',
  args: {
    ...Vertical.args,
    viewMode: 'FluidLTR',
  },
};

// Story for Fluid RTL mode
export const FluidRTL: StoryObj = {
  name: 'Fluid RTL Mode',
  args: {
    ...Vertical.args,
    viewMode: 'FluidRTL',
  },
};

// Story to test programmatic scrolling
export const ProgrammaticScroll: StoryObj = {
  name: 'Programmatic Scroll',
  args: {
    ...Vertical.args,
  },
  render: args => {
    // Set global settings based on story controls
    settings.setKey('fitWidthIfOversize', args.fitWidthIfOversize);
    setSettingsValue('viewMode', args.viewMode);

    // Set up the mock manga data in the store
    setAppStateValue('manga', mockManga);
    setAppStateValue('currentPage', 1);

    const isFluid = args.viewMode.startsWith('Fluid');
    const containerStyles = `
      height: 85vh; /* Increased from 80vh */
      width: 95vw;  /* Increased from 90vw */
      border: 2px dashed #ccc;
      margin: 1rem auto;
      overflow: ${isFluid ? 'hidden' : 'auto'};
    `;

    const goToPage = (page: number) => {
      setAppStateValue('scrollToPage', page);
    };

    return html`
      <div style="position: relative;">
        <div style=${stickyHeaderStyles}>
          <mov-current-page-display></mov-current-page-display>
          <div style="display: flex; gap: 0.5rem; justify-content: center; margin-top: 8px;">
            <span>Go to page:</span>
            <button @click=${() => goToPage(3)}>3</button>
            <button @click=${() => goToPage(5)}>5</button>
            <button @click=${() => goToPage(1)}>1</button>
          </div>
        </div>
        <div style=${containerStyles}>
          <mov-reader .viewMode=${args.viewMode}></mov-reader>
        </div>
      </div>
    `;
  },
};
