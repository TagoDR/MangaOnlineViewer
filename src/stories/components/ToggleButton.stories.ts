import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '../../ui/components/ToggleButton.ts';

const modes = ['menu', 'chevron', 'theme', 'play-pause', 'expand', 'custom'];
const variants = ['neutral', 'brand', 'success', 'warning', 'danger'];
const appearances = ['plain', 'accent', 'filled', 'filled outline', 'outline', 'light', 'subtle'];
const sizes = ['small', 'medium', 'large'];

export default {
  title: 'Components/ToggleButton',
  component: 'mov-toggle-button',
  argTypes: {
    mode: {
      control: 'select',
      options: modes,
      description: 'The operating mode for the button',
    },
    active: {
      control: 'boolean',
      description: 'The active state of the toggle',
    },
    label: {
      control: 'text',
      description: 'Accessible label for default state',
    },
    activeLabel: {
      control: 'text',
      description: 'Accessible label for active state',
    },
    icon: {
      control: 'text',
      description: 'Custom icon for default state',
      if: { arg: 'mode', eq: 'custom' },
    },
    activeIcon: {
      control: 'text',
      description: 'Custom icon for active state',
      if: { arg: 'mode', eq: 'custom' },
    },
    variant: {
      control: 'select',
      options: variants,
      description: 'Button color variant',
    },
    appearance: {
      control: 'select',
      options: appearances,
      description: 'Button visual style',
    },
    size: {
      control: 'select',
      options: sizes,
      description: 'Button size',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    loading: {
      control: 'boolean',
      description: 'Loading state',
    },
    animationDuration: {
      control: { type: 'number', min: 100, max: 1000, step: 50 },
      description: 'Animation duration in milliseconds',
    },
  },
  render: args => html`
    <mov-toggle-button
      mode="${args.mode}"
      ?active="${args.active}"
      label="${args.label}"
      active-label="${args.activeLabel}"
      icon="${args.icon}"
      activeIcon="${args.activeIcon}"
      variant="${args.variant}"
      appearance="${args.appearance}"
      size="${args.size}"
      ?disabled="${args.disabled}"
      ?loading="${args.loading}"
      animation-duration="${args.animationDuration}"
      @toggle="${(e: CustomEvent) => console.log('Toggle:', e.detail)}"
    ></mov-toggle-button>
  `,
} satisfies Meta;

export const Default: StoryObj = {
  name: 'Menu Mode',
  args: {
    mode: 'menu',
    active: false,
    label: 'Open menu',
    activeLabel: 'Close menu',
    variant: 'neutral',
    appearance: 'plain',
    size: 'md',
    disabled: false,
    loading: false,
    animationDuration: 350,
  },
};

export const AllModes: StoryObj = {
  name: 'All Toggle Modes',
  parameters: {
    controls: { disable: true },
  },
  render: () => html`
    <style>
      .modes-demo {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 2rem;
        margin: 1rem 0;
      }
      .mode-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        padding: 1.5rem;
        border: 1px solid #dee2e6;
        border-radius: 8px;
        /*background: #fff;*/
      }
      .mode-buttons {
        display: flex;
        gap: 0.5rem;
      }
      .mode-title {
        font-weight: 600;
        color: #495057;
        margin: 0;
        text-transform: capitalize;
      }
      .mode-description {
        font-size: 0.875rem;
        color: #6c757d;
        text-align: center;
        margin: 0;
      }
    </style>
    <div class="modes-demo">
      <div class="mode-item">
        <h4 class="mode-title">Menu Mode</h4>
        <p class="mode-description">Hamburger menu ↔ Close (X)</p>
        <div class="mode-buttons">
          <mov-toggle-button
            mode="menu"
            label="Menu"
          ></mov-toggle-button>
          <mov-toggle-button
            mode="menu"
            active
            label="Menu"
          ></mov-toggle-button>
        </div>
      </div>

      <div class="mode-item">
        <h4 class="mode-title">Chevron Mode</h4>
        <p class="mode-description">Right arrow → Down arrow (90° rotation)</p>
        <div class="mode-buttons">
          <mov-toggle-button
            mode="chevron"
            label="Expand"
          ></mov-toggle-button>
          <mov-toggle-button
            mode="chevron"
            active
            label="Expand"
          ></mov-toggle-button>
        </div>
      </div>

      <div class="mode-item">
        <h4 class="mode-title">Theme Mode</h4>
        <p class="mode-description">Moon ↔ Sun (dark/light theme)</p>
        <div class="mode-buttons">
          <mov-toggle-button
            mode="theme"
            label="Theme"
          ></mov-toggle-button>
          <mov-toggle-button
            mode="theme"
            active
            label="Theme"
          ></mov-toggle-button>
        </div>
      </div>

      <div class="mode-item">
        <h4 class="mode-title">Play/Pause Mode</h4>
        <p class="mode-description">Play ↔ Pause (media controls)</p>
        <div class="mode-buttons">
          <mov-toggle-button
            mode="play-pause"
            label="Play"
          ></mov-toggle-button>
          <mov-toggle-button
            mode="play-pause"
            active
            label="Play"
          ></mov-toggle-button>
        </div>
      </div>

      <div class="mode-item">
        <h4 class="mode-title">Expand Mode</h4>
        <p class="mode-description">Down arrow → Up arrow (180° rotation)</p>
        <div class="mode-buttons">
          <mov-toggle-button
            mode="expand"
            label="Expand"
          ></mov-toggle-button>
          <mov-toggle-button
            mode="expand"
            active
            label="Expand"
          ></mov-toggle-button>
        </div>
      </div>

      <div class="mode-item">
        <h4 class="mode-title">Custom Mode</h4>
        <p class="mode-description">Your own icons</p>
        <div class="mode-buttons">
          <mov-toggle-button
            mode="custom"
            icon="bookmark"
            activeIcon="bookmark"
            label="Bookmark"
          >
          </mov-toggle-button>
          <mov-toggle-button
            mode="custom"
            icon="bookmark-off"
            activeIcon="bookmark-off"
            active
            label="Bookmark"
          >
          </mov-toggle-button>
        </div>
      </div>
    </div>
  `,
};

export const Variants: StoryObj = {
  name: 'Color Variants',
  parameters: {
    controls: { disable: true },
  },
  render: () => html`
    <style>
      .variants-demo {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        margin: 1rem 0;
      }
      .variant-row {
        display: flex;
        gap: 1rem;
        align-items: center;
        flex-wrap: wrap;
      }
      .variant-label {
        min-width: 80px;
        font-weight: 600;
        color: #495057;
        text-transform: capitalize;
      }
    </style>
    <div class="variants-demo">
      ${variants.map(
        variant => html`
          <div class="variant-row">
            <span class="variant-label">${variant}:</span>
            <mov-toggle-button
              variant="${variant}"
              appearance="filled"
            ></mov-toggle-button>
            <mov-toggle-button
              variant="${variant}"
              appearance="filled"
              active
            ></mov-toggle-button>
            <mov-toggle-button
              variant="${variant}"
              appearance="outline"
            ></mov-toggle-button>
            <mov-toggle-button
              variant="${variant}"
              appearance="light"
            ></mov-toggle-button>
            <mov-toggle-button
              variant="${variant}"
              appearance="subtle"
            ></mov-toggle-button>
          </div>
        `,
      )}
    </div>
  `,
};

export const Sizes: StoryObj = {
  name: 'Button Sizes',
  parameters: {
    controls: { disable: true },
  },
  render: () => html`
    <style>
      .sizes-demo {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        margin: 1rem 0;
      }
      .size-row {
        display: flex;
        gap: 1rem;
        align-items: center;
      }
      .size-label {
        min-width: 60px;
        font-weight: 600;
        color: #495057;
      }
    </style>
    <div class="sizes-demo">
      ${sizes.map(
        size => html`
          <div class="size-row">
            <span class="size-label">${size.toUpperCase()}:</span>
            <mov-toggle-button
              size="${size}"
              mode="menu"
            ></mov-toggle-button>
            <mov-toggle-button
              size="${size}"
              mode="chevron"
            ></mov-toggle-button>
            <mov-toggle-button
              size="${size}"
              mode="theme"
            ></mov-toggle-button>
            <mov-toggle-button
              size="${size}"
              mode="play-pause"
            ></mov-toggle-button>
          </div>
        `,
      )}
    </div>
  `,
};

export const States: StoryObj = {
  name: 'Button States',
  parameters: {
    controls: { disable: true },
  },
  render: () => html`
    <style>
      .states-demo {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        margin: 1rem 0;
      }
      .state-row {
        display: flex;
        gap: 1rem;
        align-items: center;
        flex-wrap: wrap;
      }
      .state-label {
        min-width: 100px;
        font-weight: 600;
        color: #495057;
      }
    </style>
    <div class="states-demo">
      <div class="state-row">
        <span class="state-label">Normal:</span>
        <mov-toggle-button></mov-toggle-button>
        <mov-toggle-button active></mov-toggle-button>
        <mov-toggle-button mode="chevron"></mov-toggle-button>
        <mov-toggle-button mode="theme"></mov-toggle-button>
      </div>

      <div class="state-row">
        <span class="state-label">Disabled:</span>
        <mov-toggle-button disabled></mov-toggle-button>
        <mov-toggle-button
          disabled
          active
        ></mov-toggle-button>
        <mov-toggle-button
          disabled
          mode="chevron"
        ></mov-toggle-button>
        <mov-toggle-button
          disabled
          mode="theme"
        ></mov-toggle-button>
      </div>

      <div class="state-row">
        <span class="state-label">Loading:</span>
        <mov-toggle-button loading></mov-toggle-button>
        <mov-toggle-button
          loading
          active
        ></mov-toggle-button>
        <mov-toggle-button
          loading
          mode="chevron"
        ></mov-toggle-button>
        <mov-toggle-button
          loading
          mode="theme"
        ></mov-toggle-button>
      </div>
    </div>
  `,
};

export const CustomIcons: StoryObj = {
  name: 'Custom Icon Examples',
  parameters: {
    controls: { disable: true },
  },
  render: () => html`
    <style>
      .custom-demo {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1.5rem;
        margin: 1rem 0;
      }
      .custom-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        padding: 1rem;
        border: 1px solid #dee2e6;
        border-radius: 8px;
        /*background: #f8f9fa;*/
      }
      .custom-buttons {
        display: flex;
        gap: 0.5rem;
      }
      .custom-title {
        font-size: 0.875rem;
        font-weight: 600;
        color: #495057;
        margin: 0;
      }
    </style>
    <div class="custom-demo">
      <div class="custom-item">
        <h5 class="custom-title">Bookmark Toggle</h5>
        <div class="custom-buttons">
          <mov-toggle-button
            mode="custom"
            icon="bookmark"
            activeIcon="bookmark-off"
            label="Toggle bookmark"
          >
          </mov-toggle-button>
          <mov-toggle-button
            mode="custom"
            icon="bookmark"
            activeIcon="bookmark-off"
            active
            label="Toggle bookmark"
          >
          </mov-toggle-button>
        </div>
      </div>

      <div class="custom-item">
        <h5 class="custom-title">Visibility Toggle</h5>
        <div class="custom-buttons">
          <mov-toggle-button
            mode="custom"
            icon="eye"
            activeIcon="eye-off"
            label="Toggle visibility"
          >
          </mov-toggle-button>
          <mov-toggle-button
            mode="custom"
            icon="eye"
            activeIcon="eye-off"
            active
            label="Toggle visibility"
          >
          </mov-toggle-button>
        </div>
      </div>

      <div class="custom-item">
        <h5 class="custom-title">Settings Toggle</h5>
        <div class="custom-buttons">
          <mov-toggle-button
            mode="custom"
            icon="settings"
            activeIcon="settings-off"
            label="Toggle settings"
          >
          </mov-toggle-button>
          <mov-toggle-button
            mode="custom"
            icon="settings"
            activeIcon="settings-off"
            active
            label="Toggle settings"
          >
          </mov-toggle-button>
        </div>
      </div>

      <div class="custom-item">
        <h5 class="custom-title">Photo Toggle</h5>
        <div class="custom-buttons">
          <mov-toggle-button
            mode="custom"
            icon="photo"
            activeIcon="photo-off"
            label="Toggle photo"
          >
          </mov-toggle-button>
          <mov-toggle-button
            mode="custom"
            icon="photo"
            activeIcon="photo-off"
            active
            label="Toggle photo"
          >
          </mov-toggle-button>
        </div>
      </div>
    </div>
  `,
};

export const AnimationDemo: StoryObj = {
  name: 'Animation Speeds',
  parameters: {
    controls: { disable: true },
  },
  render: () => html`
    <style>
      .animation-demo {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        margin: 1rem 0;
      }
      .animation-row {
        display: flex;
        gap: 1rem;
        align-items: center;
        flex-wrap: wrap;
      }
      .animation-label {
        min-width: 120px;
        font-weight: 600;
        color: #495057;
      }
    </style>
    <div class="animation-demo">
      <div class="animation-row">
        <span class="animation-label">Fast (150ms):</span>
        <mov-toggle-button
          animation-duration="150"
          mode="menu"
        ></mov-toggle-button>
        <mov-toggle-button
          animation-duration="150"
          mode="chevron"
        ></mov-toggle-button>
        <mov-toggle-button
          animation-duration="150"
          mode="theme"
        ></mov-toggle-button>
        <mov-toggle-button
          animation-duration="150"
          mode="play-pause"
        ></mov-toggle-button>
      </div>

      <div class="animation-row">
        <span class="animation-label">Normal (350ms):</span>
        <mov-toggle-button
          animation-duration="350"
          mode="menu"
        ></mov-toggle-button>
        <mov-toggle-button
          animation-duration="350"
          mode="chevron"
        ></mov-toggle-button>
        <mov-toggle-button
          animation-duration="350"
          mode="theme"
        ></mov-toggle-button>
        <mov-toggle-button
          animation-duration="350"
          mode="play-pause"
        ></mov-toggle-button>
      </div>

      <div class="animation-row">
        <span class="animation-label">Slow (600ms):</span>
        <mov-toggle-button
          animation-duration="600"
          mode="menu"
        ></mov-toggle-button>
        <mov-toggle-button
          animation-duration="600"
          mode="chevron"
        ></mov-toggle-button>
        <mov-toggle-button
          animation-duration="600"
          mode="theme"
        ></mov-toggle-button>
        <mov-toggle-button
          animation-duration="600"
          mode="play-pause"
        ></mov-toggle-button>
      </div>
    </div>
    <p style="font-size: 0.875rem; color: #6c757d; margin-top: 1rem;">
      💡 Click the buttons to see different animation speeds
    </p>
  `,
};

export const InteractivePlayground: StoryObj = {
  name: 'Interactive Playground',
  args: {
    mode: 'menu',
    active: false,
    label: 'Toggle button',
    activeLabel: '',
    icon: 'settings',
    activeIcon: 'settings-off',
    variant: 'brand',
    appearance: 'filled',
    size: 'md',
    disabled: false,
    loading: false,
    animationDuration: 350,
  },
};
