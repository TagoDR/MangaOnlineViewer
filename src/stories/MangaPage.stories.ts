import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { setSettingsValue, settings } from '../core/settings';
import { placeholder } from '../utils/svgs.ts';

// The Meta object configures the component's story page
export default {
  title: 'Content/MangaPage',
  component: 'mov-manga-page',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
The \`mov-manga-page\` component is responsible for displaying a single manga page.
It includes its own set of controls for zooming, bookmarking, and reloading,
which can be toggled by a global setting. The component's zoom level can be
controlled individually or by global settings from the main application header/toolbar.
This story uses controls to simulate those global settings.
        `,
      },
    },
  },
  argTypes: {
    // Component props
    index: {
      control: 'number',
      description: 'The page number index for the image.',
      table: { category: 'Component Properties' },
    },
    src: {
      control: 'text',
      description: 'The source URL for the image.',
      table: { category: 'Component Properties' },
    },
    // Simulated global settings
    hidePageControls: {
      control: 'boolean',
      description: "Simulates the global 'hidePageControls' setting.",
      table: { category: 'Global Settings' },
    },
    globalZoomMode: {
      control: 'select',
      options: ['percent', 'width', 'height'],
      description: "Simulates the global 'zoomMode' from the reader store.",
      table: { category: 'Global Settings' },
    },
    globalZoomValue: {
      control: { type: 'range', min: 10, max: 300, step: 10 },
      description: "Simulates the global 'zoomValue' from the reader store.",
      table: { category: 'Global Settings' },
    },
  },
  // The render function sets the global state before rendering the component
  render: args => {
    // Set global settings based on story controls to simulate the real app environment
    settings.setKey('hidePageControls', args.hidePageControls);
    setSettingsValue('zoomMode', args.globalZoomMode);
    setSettingsValue('zoomValue', args.globalZoomValue);

    return html`
      <div
        style="border: 2px dashed #ccc; padding: 1rem; max-width: 500px; height: 600px; resize: both; overflow: auto;"
      >
        <mov-manga-page
          index=${args.index}
          .src=${args.src}
        ></mov-manga-page>
      </div>
    `;
  },
} satisfies Meta;

// Default story showing the component in its loading state
export const Default: StoryObj = {
  name: 'Default (Loading)',
  args: {
    index: 1,
    src: '', // Empty src simulates the initial loading state
    hidePageControls: false,
    globalZoomMode: 'percent',
    globalZoomValue: 100,
  },
};

// Story for a successfully loaded image
export const Loaded: StoryObj = {
  name: 'Loaded Image (1970x1400)',
  args: {
    ...Default.args,
    src: placeholder(1970, 1400, '#2D1657'),
  },
};

// Story for a different sized image
export const DifferentSize: StoryObj = {
  name: 'Loaded Image (985x1400)',
  args: {
    ...Default.args,
    index: 2,
    src: placeholder(985, 1400, '#152C55'),
  },
};

// Story for a broken image link
export const Broken: StoryObj = {
  name: 'Broken Image',
  args: {
    ...Default.args,
    src: 'https://example.com/broken-image.jpg',
  },
};

// Story demonstrating the effect of the global 'hidePageControls' setting
export const HiddenControls: StoryObj = {
  name: 'Page Controls Hidden',
  args: {
    ...Loaded.args,
    hidePageControls: true,
  },
};

// Story demonstrating the 'Fit to Width' global zoom mode
export const FitToWidth: StoryObj = {
  name: 'Global Zoom: Fit to Width',
  args: {
    ...Loaded.args,
    globalZoomMode: 'width',
  },
};

// Story demonstrating the 'Fit to Height' global zoom mode
export const FitToHeight: StoryObj = {
  name: 'Global Zoom: Fit to Height',
  args: {
    ...Loaded.args,
    globalZoomMode: 'height',
  },
};

// Story demonstrating a custom percentage-based global zoom
export const CustomZoom: StoryObj = {
  name: 'Global Zoom: 200%',
  args: {
    ...Loaded.args,
    globalZoomMode: 'percent',
    globalZoomValue: 200,
  },
};
