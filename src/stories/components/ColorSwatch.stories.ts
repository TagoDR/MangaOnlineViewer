import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '../../ui/components/ColorSwatch.ts';
import { IconPalette } from '../../ui/icons';

type ColorSwatchArgs = {
  color: string;
  selected: boolean;
  size: number;
  radius: string;
  onClick: (e: Event) => void;
};

// The Meta object configures the component's story page
export default {
  title: 'Components/ColorSwatch',
  component: 'mov-color-swatch',
  argTypes: {
    color: {
      control: 'color',
      description: 'The background color of the swatch.',
    },
    selected: {
      control: 'boolean',
      description: 'Whether the swatch is in a selected state (shows a checkmark).',
    },
    size: {
      control: { type: 'range', min: 16, max: 64, step: 2 },
      description: 'The width and height of the swatch in pixels.',
    },
    radius: {
      control: 'text',
      description:
        'The border-radius of the swatch (e.g., "50%" for a circle, "4px" for rounded corners).',
    },
    onClick: { action: 'click' },
  },
  // A generic render function to be reused by all stories
  render: (args: ColorSwatchArgs) => html`
    <mov-color-swatch
      color=${args.color}
      ?selected=${args.selected}
      size=${args.size}
      radius=${args.radius}
      @click=${args.onClick}
    ></mov-color-swatch>
  `,
} satisfies Meta<ColorSwatchArgs>;

// Default story showing a circular swatch
export const Default: StoryObj<ColorSwatchArgs> = {
  name: 'Default (Circle)',
  args: {
    color: '#228be6',
    selected: false,
    size: 26,
    radius: '50%',
  },
};

// Story showing the swatch in a selected state
export const Selected: StoryObj<ColorSwatchArgs> = {
  args: {
    ...Default.args,
    selected: true,
  },
};

// Story showing a square swatch
export const Square: StoryObj<ColorSwatchArgs> = {
  args: {
    ...Default.args,
    radius: '4px',
    size: 32,
  },
};

// Story demonstrating how to use the default slot for an icon
export const WithSlottedContent: StoryObj<ColorSwatchArgs> = {
  name: 'With Slotted Icon',
  render: (args: ColorSwatchArgs) => html`
    <mov-color-swatch
      color=${args.color}
      ?selected=${args.selected}
      size=${args.size}
      radius=${args.radius}
      @click=${args.onClick}
    >
      <!-- The checkmark will appear over this icon when selected -->
      ${IconPalette}
    </mov-color-swatch>
  `,
  args: {
    ...Default.args,
    color: '#ced4da', // A light color to show the black icon
    size: 48,
  },
};
