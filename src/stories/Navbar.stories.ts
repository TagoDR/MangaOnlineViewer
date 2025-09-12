/**
 * @file Storybook stories for the Navbar component (`<mov-navbar>`).
 * This file defines stories that showcase the thumbnail navigation bar in all its positions.
 */
import { useStores } from '@nanostores/lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { appState, getAppStateValue, setAppStateValue } from '../core/settings';
import localhost from '../main/localhost.ts';
import type { IMangaImages, NavbarMode } from '../types';
import '../ui/Navbar.ts';

// Mock manga data for the stories
const mockManga = localhost.run() as IMangaImages;

/**
 * A helper component to display the relevant application state changes.
 * @internal
 */
@customElement('mov-navbar-state-display')
@useStores(appState)
// @ts-expect-error
class StateDisplay extends LitElement {
  protected createRenderRoot() {
    return this; // No shadow DOM
  }
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

const meta: Meta = {
  title: 'UI/Navbar',
  component: 'mov-navbar',
  argTypes: {
    mode: {
      control: 'select',
      options: ['bottom', 'left', 'right'],
      description: 'The position and layout of the navbar.',
    },
  },
  render: (args) => {
    // Set up the mock manga data in the store
    setAppStateValue('manga', mockManga);
    setAppStateValue('currentPage', 1);
    setAppStateValue(
      'images',
      mockManga.listImages.reduce((acc, img, index) => ({ ...acc, [index + 1]: { src: img } }), {}),
    );
    setAppStateValue('loaded', mockManga.pages);
    setAppStateValue('scrollToPage', undefined); // Reset on each render

    const isVertical = args.mode === 'left' || args.mode === 'right';

    const containerStyle = isVertical
      ? 'display: flex; height: 500px; border: 1px solid #ccc;'
      : '';
    const contentStyle = isVertical ? 'flex-grow: 1; padding: 1rem;' : '';

    return html`
      <div style="${containerStyle}">
        ${args.mode === 'right' ? html`<div style="${contentStyle}">Mock Content Area</div>` : ''}
        <mov-navbar .mode=${args.mode}></mov-navbar>
        ${args.mode !== 'right' ? html`<div style="${contentStyle}">Mock Content Area</div>` : ''}
      </div>
      <div style="padding: 1rem; border: 1px solid #ccc; border-radius: 4px; margin-top: 1rem;">
        <p><b>State from Store:</b></p>
        <mov-navbar-state-display></mov-navbar-state-display>
        <p><i>(Click a thumbnail to see 'Scroll To Page' change)</i></p>
      </div>
    `;
  },
};

export default meta;

type Story = StoryObj<{ mode: NavbarMode }>;

export const Bottom: Story = {
  args: {
    mode: 'bottom',
  },
};

export const Left: Story = {
  args: {
    mode: 'left',
  },
};

export const Right: Story = {
  args: {
    mode: 'right',
  },
};