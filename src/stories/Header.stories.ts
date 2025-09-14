import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { setSettingsValue } from '../core/settings';
import type { IMangaImages } from '../types';
import '../ui/Header';
import localhost from '../main/localhost.ts';
import styles from '../ui/styles'; // Register the component

// Mock data required by the App component and its children
const mockManga = localhost.run() as IMangaImages;

export default {
  title: 'UI/Header',
  component: 'mov-header',
  argTypes: {
    mode: {
      control: 'select',
      options: ['hover', 'scroll', 'click', 'fixed', 'simple'],
      description: 'Defines the behavior of the header.',
    },
    forceExpanded: {
      control: 'boolean',
      description: 'Force the header to be visible, overriding auto-hide behavior.',
    },
  },
  render: ({ mode }) => {
    setSettingsValue('header', mode);
    return html`
      <style>
        ${styles}
      </style>
      <mov-header .manga=${mockManga}></mov-header>
      <div style="height: 200vh; background: #eee; padding: 1rem;">
        Scroll down to see header effects
      </div>
    `;
  },
} as Meta;

export const Default: StoryObj = {
  name: 'Default (simple)',
  args: {
    mode: 'simple',
  },
};

export const ScrollMode: StoryObj = {
  name: 'Scroll Mode',
  args: {
    mode: 'scroll',
  },
};

export const ClickMode: StoryObj = {
  name: 'Click Mode',
  args: {
    mode: 'click',
  },
};

export const HoverMode: StoryObj = {
  name: 'Hover Mode',
  args: {
    mode: 'hover',
  },
};

export const FixedMode: StoryObj = {
  name: 'Fixed Mode',
  args: {
    mode: 'fixed',
  },
};
