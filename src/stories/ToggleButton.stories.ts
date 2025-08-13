import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

// The Meta object configures the component's story page
export default {
  title: 'Components/Toggle Button',
  component: 'mov-toggle-button',
  tags: ['autodocs'],
  argTypes: {
    mode: {
      control: { type: 'select' },
      options: ['menu', 'chevron', 'custom'],
      description: 'The operating mode for the button.',
    },
    active: {
      control: 'boolean',
      description: 'The active state of the toggle.',
    },
    label: {
      control: 'text',
      description: 'The accessible label for the button in its default state.',
    },
    activeLabel: {
      control: 'text',
      description: 'The accessible label for the button in its active state.',
    },
    icon: {
      control: 'text',
      description: "The name of the icon for the default state when `mode` is 'custom'.",
      if: { arg: 'mode', eq: 'custom' }, // Only show this control if mode is 'custom'
    },
    activeIcon: {
      control: 'text',
      description: "The name of the icon for the active state when `mode` is 'custom'.",
      if: { arg: 'mode', eq: 'custom' }, // Only show this control if mode is 'custom'
    },
    variant: {
      control: { type: 'select' },
      options: ['neutral', 'brand', 'accent', 'warn', 'danger'],
      description: 'The color variant of the button.',
    },
    appearance: {
      control: { type: 'select' },
      options: ['plain', 'filled', 'tonal', 'outlined'],
      description: 'The visual appearance of the button.',
    },
    onToggle: { action: 'toggle' },
  },
  // A generic render function to be reused by all stories
  render: args => html`
    <mov-toggle-button
      mode=${args.mode}
      ?active=${args.active}
      label=${args.label}
      .activeLabel=${args.activeLabel}
      icon=${args.icon}
      activeIcon=${args.activeIcon}
      variant=${args.variant}
      appearance=${args.appearance}
      @toggle=${args.onToggle}
    ></mov-toggle-button>
  `,
} satisfies Meta;

// Default story showing the 'menu' mode (burger to 'x')
export const Menu: StoryObj = {
  name: 'Default (Menu Mode)',
  args: {
    mode: 'menu',
    active: false,
    label: 'Open Menu',
    activeLabel: 'Close Menu',
    variant: 'neutral',
    appearance: 'filled',
  },
};

// Story for the 'chevron' mode (right to down arrow)
export const Chevron: StoryObj = {
  args: {
    mode: 'chevron',
    active: false,
    label: 'Expand Section',
    activeLabel: 'Collapse Section',
    variant: 'neutral',
    appearance: 'filled',
  },
};

// Story for the 'theme' mode (sun to moon)
export const Theme: StoryObj = {
  args: {
    mode: 'theme',
    active: false,
    label: 'Switch to Dark Theme',
    activeLabel: 'Switch to Light Theme',
    variant: 'neutral',
    appearance: 'filled',
  },
};

// Story for the 'custom' mode (e.g., sun to moon)
export const CustomIcons: StoryObj = {
  args: {
    mode: 'custom',
    active: false,
    label: 'Switch to Dark Theme',
    activeLabel: 'Switch to Light Theme',
    icon: 'sun',
    activeIcon: 'moon',
    variant: 'neutral',
    appearance: 'filled',
  },
};

// Story to demonstrate the component in its active state by default
export const InitiallyActive: StoryObj = {
  name: 'Initially Active (Menu Mode)',
  args: {
    ...Menu.args, // Inherit args from the Menu story
    active: true,
  },
};

// A showcase story to display all visual variants and appearances
export const VariantsAndAppearances: StoryObj = {
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
      <mov-toggle-button
        variant="neutral"
        appearance="plain"
        label="Plain"
      ></mov-toggle-button>
      <mov-toggle-button
        variant="neutral"
        appearance="filled"
        label="Filled"
      ></mov-toggle-button>
      <mov-toggle-button
        variant="neutral"
        appearance="tonal"
        label="Tonal"
      ></mov-toggle-button>
      <mov-toggle-button
        variant="neutral"
        appearance="outlined"
        label="Outlined"
      ></mov-toggle-button>
    </div>
    <div class="showcase-grid">
      <h3>Brand</h3>
      <mov-toggle-button
        variant="brand"
        appearance="plain"
        label="Plain"
      ></mov-toggle-button>
      <mov-toggle-button
        variant="brand"
        appearance="filled"
        label="Filled"
      ></mov-toggle-button>
      <mov-toggle-button
        variant="brand"
        appearance="tonal"
        label="Tonal"
      ></mov-toggle-button>
      <mov-toggle-button
        variant="brand"
        appearance="outlined"
        label="Outlined"
      ></mov-toggle-button>
    </div>
  `,
};
