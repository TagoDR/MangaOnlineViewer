import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { appState } from '../core/settings';

// Import the component and all its dependencies to ensure they are registered
import '../ui';
import localhost from '../main/localhost.ts';
import type { IMangaImages } from '../types';

// Mock data required by the App component and its children
const mockManga = localhost.run() as IMangaImages;

/**
 * The `Meta` object for the `<manga-online-viewer>` component stories.
 * This configures the component's entry in the Storybook UI.
 */
export default {
  title: 'UI/App',
  component: 'manga-online-viewer',
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {},
  render: _args => {
    // Set the global state required by the App component before rendering.
    // This simulates the application being in a loaded state.
    appState.setKey('manga', mockManga);

    return html`<manga-online-viewer></manga-online-viewer>`;
  },
} satisfies Meta;

/**
 * The default story for the App component.
 * It renders the entire application UI with mocked data.
 * @type {StoryObj}
 */
export const Default: StoryObj = {
  name: 'Default View',
  args: {},
};
