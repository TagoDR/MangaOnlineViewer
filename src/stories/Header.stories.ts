import { useStores } from '@nanostores/lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import {
  appState,
  getAppStateValue,
  getSettingsValue,
  setAppStateValue,
  setSettingsValue,
} from '../core/settings';

// Import all components used by Header
import localhost from '../main/localhost.ts';
import type { IMangaImages } from '../types';

// Mock manga data
const mockManga = localhost.run() as IMangaImages;

// A helper to display state changes
@customElement('mov-header-state-display')
@useStores(appState)
// @ts-ignore
class StateDisplay extends LitElement {
  render() {
    return html`
      <div
        style="font-family: monospace; font-size: 0.9rem; text-align: left; padding: 1rem; border: 1px solid #ccc; border-radius: 4px; margin-top: 1rem;"
      >
        <p><b>State from Store:</b> (interact with header controls to see changes)</p>
        <div><b>Scroll To Page Triggered:</b> ${getAppStateValue('scrollToPage') ?? 'none'}</div>
        <div><b>Panel Triggered:</b> ${getAppStateValue('panel') || 'none'}</div>
        <div><b>Zoom Mode:</b> ${getSettingsValue('zoomMode')}</div>
        <div><b>Zoom Value:</b> ${getSettingsValue('zoomValue')}%</div>
      </div>
    `;
  }
}

export default {
  title: 'Navigation/Header',
  component: 'mov-header',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
The Header component displays the primary navigation and top-level controls.
This story mocks the necessary global state (\`reader\` and \`settings\` stores) to render the component.
All controls are fully interactive.
        `,
      },
    },
  },
  argTypes: {
    footerEnabled: {
      control: 'boolean',
      description:
        'Simulates the `footerEnabled` state, which toggles the visibility of page counters in the header.',
    },
  },
  render: args => {
    // Set up the mock manga data in the store
    setAppStateValue('manga', mockManga);
    setAppStateValue('currentPage', 5);
    setAppStateValue('loaded', 20);
    setSettingsValue('zoomValue', 100);
    setSettingsValue('zoomMode', 'percent');
    setSettingsValue('navbar', args.navbar);
    // Reset interaction state
    setAppStateValue('scrollToPage', undefined);
    setAppStateValue('panel', 'none');

    return html`
      <div style="border: 2px dashed #ccc; position: relative;">
        <mov-header></mov-header>
      </div>
      <mov-header-state-display></mov-header-state-display>
    `;
  },
} satisfies Meta;

export const Default: StoryObj = {
  args: {
    navbar: 'disabled',
  },
};

export const WithFooterEnabled: StoryObj = {
  name: 'With Footer Enabled (Counters Hidden)',
  args: {
    footerEnabled: true,
  },
};
