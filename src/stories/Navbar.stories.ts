/**
 * @file Storybook stories for the Navbar component (`<mov-navbar>`).
 * This file defines a story that showcases the thumbnail navigation bar and its interactivity.
 */
import { useStores } from '@nanostores/lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { appState, getAppStateValue, setAppStateValue } from '../core/settings';
import localhost from '../main/localhost.ts';
import type { IMangaImages } from '../types';
// Import the component being tested and its dependencies
import '../ui/Navbar.ts';

// Mock manga data for the stories
const mockManga = localhost.run() as IMangaImages;

/**
 * A helper component to display the relevant application state changes
 * that are triggered by interacting with the Navbar controls.
 * @internal
 */
@customElement('mov-navbar-state-display')
@useStores(appState)
// @ts-expect-error
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

/**
 * The `Meta` object for the `<mov-navbar>` component stories.
 * This configures the component's entry in the Storybook UI.
 * The `render` function sets up a mock state to ensure the navbar is fully interactive.
 * @see https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
 */
export default {
  title: 'Section/Navbar',
  component: 'mov-navbar',
  parameters: {
    docs: {
      description: {
        component: `
The Thumbnails Navbar provides a horizontally-scrollable list of page thumbnails.
It displays the current page, total pages, and allows for quick navigation by clicking a thumbnail.
This story mocks the necessary global state (the application store) to render the component.
        `,
      },
    },
  },
  /**
   * The render function sets up the application's state before rendering the Navbar.
   * @returns The Lit template for the story.
   */
  render: () => {
    // Set up the mock manga data in the store
    setAppStateValue('manga', mockManga);
    setAppStateValue('currentPage', 1);
    setAppStateValue('loaded', mockManga.pages);
    setAppStateValue('scrollToPage', undefined); // Reset on each render

    return html`
      <div style="padding: 1rem; border: 1px solid #ccc; border-radius: 4px;">
        <p><b>State from Store:</b></p>
        <mov-navbar-state-display></mov-navbar-state-display>
        <p><i>(Click a thumbnail below to see 'Scroll To Page' change)</i></p>
      </div>
      <div style="margin-top: 2rem; position: relative; height: 190px; border: 2px dashed #ccc;">
        <!-- The component is usually inside a footer, so we simulate that context -->
        <mov-navbar></mov-navbar>
      </div>
    `;
  },
} satisfies Meta;

/**
 * The default story for the Navbar component.
 * It demonstrates the navbar with a full set of mock thumbnails and displays state changes upon interaction.
 * @type {StoryObj}
 */
export const Default: StoryObj = {};
