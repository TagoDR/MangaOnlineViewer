import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '../../ui/components/ColorPalette.ts';

// Define the type for the story arguments
type ColorPaletteArgs = {
  baseColor: string;
  mode: string;
};

// The Meta object configures the component's story page
export default {
  title: 'Components/Color Palette',
  component: 'mov-color-palette',
  argTypes: {
    baseColor: {
      control: 'color',
      description: 'The base color in hex format from which to generate the 10-shade palette.',
    },
    mode: {
      control: { type: 'select' },
      options: ['base', 'light', 'dark'],
      description: 'The mode used to generate the color gradient.',
    },
  },
  // A generic render function to be reused by all stories
  render: (args: ColorPaletteArgs) => html`
    <mov-color-palette
      baseColor=${args.baseColor}
      mode=${args.mode}
    ></mov-color-palette>
  `,
} satisfies Meta<ColorPaletteArgs>;

// Default story showing a blue palette
export const Default: StoryObj<ColorPaletteArgs> = {
  name: 'Default (Blue)',
  args: {
    baseColor: '#228be6',
    mode: 'base',
  },
};

// Story for a red palette
export const Red: StoryObj<ColorPaletteArgs> = {
  args: {
    baseColor: '#fa5252',
    mode: 'base',
  },
};

// Story for a green palette
export const Green: StoryObj<ColorPaletteArgs> = {
  args: {
    baseColor: '#40c057',
    mode: 'base',
  },
};

// Story for a grayscale palette
export const Gray: StoryObj<ColorPaletteArgs> = {
  args: {
    baseColor: '#868e96',
    mode: 'base',
  },
};

// Story demonstrating the 'light' mode
export const LightMode: StoryObj<ColorPaletteArgs> = {
  name: 'Light Mode',
  args: {
    baseColor: '#228be6',
    mode: 'light',
  },
};

// Story demonstrating the 'dark' mode
export const DarkMode: StoryObj<ColorPaletteArgs> = {
  name: 'Dark Mode',
  args: {
    baseColor: '#228be6',
    mode: 'dark',
  },
};
