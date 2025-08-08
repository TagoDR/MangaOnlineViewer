import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

// Define the type for the story arguments
type ColorSchemeArgs = {
  scheme: 'light' | 'dark';
  variant: string;
  appearance: string;
  onToggle: (e: CustomEvent) => void;
};

// The Meta object configures the component's story page
export default {
  title: 'Components/Color Scheme Toggle',
  component: 'mov-color-scheme',
  tags: ['autodocs'],
  argTypes: {
    scheme: {
      control: { type: 'select' },
      options: ['light', 'dark'],
      description: 'The current color scheme.',
    },
    variant: {
      control: { type: 'select' },
      options: ['neutral', 'brand', 'accent', 'warn', 'danger'],
      description: 'The color variant of the underlying button.',
    },
    appearance: {
      control: { type: 'select' },
      options: ['plain', 'filled', 'tonal', 'outlined'],
      description: 'The visual appearance of the underlying button.',
    },
    onToggle: { action: 'toggle' },
  },
  // A generic render function to be reused by all stories
  render: (args: ColorSchemeArgs) => html`
    <mov-color-scheme
      scheme=${args.scheme}
      variant=${args.variant}
      appearance=${args.appearance}
      @toggle=${args.onToggle}
    ></mov-color-scheme>
  `,
} satisfies Meta<ColorSchemeArgs>;

// Default story showing the 'light' scheme
export const Default: StoryObj<ColorSchemeArgs> = {
  name: 'Light Scheme (Default)',
  args: {
    scheme: 'light',
    variant: 'neutral',
    appearance: 'filled',
  },
};

// Story showing the 'dark' scheme
export const Dark: StoryObj<ColorSchemeArgs> = {
  name: 'Dark Scheme',
  args: {
    ...Default.args,
    scheme: 'dark',
  },
};

// A showcase story to display all visual variants and appearances
export const VariantsAndAppearances: StoryObj<ColorSchemeArgs> = {
  name: 'Variants and Appearances',
  parameters: {
    controls: { disable: true }, // Disable controls for this story as it's a showcase
  },
  render: () => html`
    <style>
      .showcase-grid {
        display: inline-grid;
        grid-template-columns: repeat(4, auto);
        gap: 16px;
        align-items: center;
        justify-items: center;
        margin-bottom: 24px;
      }

      .showcase-grid h3 {
        grid-column: 1 / -1;
        margin: 1rem 0 0;
        text-align: center;
      }
    </style>
    <div class="showcase-grid">
      <h3>Neutral</h3>
      <mov-color-scheme
        variant="neutral"
        appearance="plain"
      ></mov-color-scheme>
      <mov-color-scheme
        variant="neutral"
        appearance="filled"
      ></mov-color-scheme>
      <mov-color-scheme
        variant="neutral"
        appearance="tonal"
      ></mov-color-scheme>
      <mov-color-scheme
        variant="neutral"
        appearance="outlined"
      ></mov-color-scheme>
    </div>
    <div class="showcase-grid">
      <h3>Brand</h3>
      <mov-color-scheme
        variant="brand"
        appearance="plain"
      ></mov-color-scheme>
      <mov-color-scheme
        variant="brand"
        appearance="filled"
      ></mov-color-scheme>
      <mov-color-scheme
        variant="brand"
        appearance="tonal"
      ></mov-color-scheme>
      <mov-color-scheme
        variant="brand"
        appearance="outlined"
      ></mov-color-scheme>
    </div>
  `,
};
