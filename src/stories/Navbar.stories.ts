import { useStores } from '@nanostores/lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { appState, getAppStateValue, setAppStateValue } from '../core/settings';

// Import all components used by Navbar
import localhost from '../main/localhost.ts';
import type { IMangaImages } from '../types';

// Mock manga data

const mockManga = localhost.run() as IMangaImages;

// A helper to display state changes
@customElement('mov-state-display')
@useStores(appState)
// @ts-ignore
class StateDisplay extends LitElement {
  render() {
    return html`
      <div style="font-family: monospace; font-size: 0.9rem;">
        <div><b>Current Page:</b> ${getAppStateValue('currentPage')}</div>
        <div><b>Loaded:</b> ${getAppStateValue('loaded')}</div>
        <div><b>Scroll To Page Triggered:</b> ${getAppStateValue('scrollToPage') ?? 'none'}</div>
      </div>
    `;
  }
}

export default {
  title: 'Navigation/Thumbnails Navbar',
  component: 'mov-navbar',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
The Thumbnails Navbar provides a horizontally-scrollable list of page thumbnails.
It displays the current page, total pages, and allows for quick navigation by clicking a thumbnail.
This story mocks the necessary global state (\`reader\` store) to render the component.
        `,
      },
    },
  },
  render: () => {
    // Set up the mock manga data in the store
    setAppStateValue('manga', mockManga);
    setAppStateValue('currentPage', 1);
    setAppStateValue('loaded', mockManga.pages);
    setAppStateValue('scrollToPage', undefined); // Reset on each render

    return html`
      <div style="padding: 1rem; border: 1px solid #ccc; border-radius: 4px;">
        <p><b>State from Store:</b></p>
        <mov-state-display></mov-state-display>
        <p><i>(Click a thumbnail below to see 'Scroll To Page' change)</i></p>
      </div>
      <div style="margin-top: 2rem; position: relative; height: 190px; border: 2px dashed #ccc;">
        <!-- The component is usually inside a footer, so we simulate that context -->
        <mov-navbar></mov-navbar>
      </div>
    `;
  },
} satisfies Meta;

export const Default: StoryObj = {};
