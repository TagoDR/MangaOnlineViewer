import { useStores } from '@nanostores/lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import {
  appState,
  getAppStateValue,
  getSettingsValue,
  setAppStateValue,
  settings,
} from '../core/settings';

// Import all components used by Toolbar

// A helper to display state changes
@customElement('mov-toolbar-state-display')
@useStores(appState)
@useStores(settings)
// @ts-ignore
class StateDisplay extends LitElement {
  render() {
    return html`
      <div
        style="font-family: monospace; font-size: 0.9rem; text-align: left; padding: 1rem; border: 1px solid #ccc; border-radius: 4px; margin-top: 1rem;"
      >
        <p><b>State from Store:</b> (interact with toolbar controls to see changes)</p>
        <div><b>Panel Triggered:</b> ${getAppStateValue('panel') || 'none'}</div>
        <div><b>View Mode:</b> ${getSettingsValue('viewMode')}</div>
        <div><b>Zoom Mode:</b> ${getSettingsValue('zoomMode')}</div>
        <div><b>Auto Scroll:</b> ${getAppStateValue('autoScroll')}</div>
        <div><b>Download Status:</b> ${getAppStateValue('download')}</div>
        <div><b>Hide Page Controls:</b> ${settings.get().hidePageControls}</div>
      </div>
    `;
  }
}

export default {
  title: 'Navigation/Toolbar',
  component: 'mov-toolbar',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
The Toolbar component provides dropdown menus for key actions, zoom controls, and view modes.
This story mocks the necessary global state to make all controls fully interactive.
        `,
      },
    },
  },
  argTypes: {
    downloadStatus: {
      control: 'select',
      options: ['unavailable', 'available', 'working'],
      description: 'Simulates the `download` state of the reader.',
    },
  },
  render: args => {
    // Reset state
    setAppStateValue('panel', 'none');
    setAppStateValue('autoScroll', false);
    settings.setKey('hidePageControls', false);
    // Set state from controls
    setAppStateValue('download', args.downloadStatus);

    return html`
      <div style="display: flex; justify-content: center; padding: 1rem; border: 2px dashed #ccc;">
        <mov-toolbar></mov-toolbar>
      </div>
      <mov-toolbar-state-display></mov-toolbar-state-display>
    `;
  },
} satisfies Meta;

export const Default: StoryObj = {
  args: {
    downloadStatus: 'available',
  },
};

export const DownloadWorking: StoryObj = {
  name: 'Download In Progress',
  args: {
    downloadStatus: 'working',
  },
};

export const DownloadUnavailable: StoryObj = {
  name: 'Download Unavailable',
  args: {
    downloadStatus: 'unavailable',
  },
};
