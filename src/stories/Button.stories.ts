/**
 * @file Storybook stories for the Button component (`<mov-button>`).
 * This file defines multiple stories that showcase the button's different visual appearances,
 * sizes, states (disabled, loading), and usage with icons or as a link.
 */
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '../ui/components/Button.ts'; // Ensure the <mov-button> component is defined

const variants = ['brand', 'neutral', 'success', 'warning', 'danger'];
const appearances = ['plain', 'accent', 'filled', 'filled outline', 'outline', 'light', 'subtle'];
const sizes = ['small', 'medium', 'large'];
const commonIcons = [
  'IconArrowAutofitDown',
  'IconBookmarks',
  'IconBookmarkOff',
  'IconPalette',
  'IconSettings',
  'IconMoon',
  'IconEye',
  'IconEyeOff',
];

/**
 * The `Meta` object for the `<mov-button>` component stories.
 * This configures the component's entry in the Storybook UI, including its title,
 * component definition, and arg types for interactive controls.
 * @see https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
 */
export default {
  title: 'Components/Button',
  component: 'mov-button',
  argTypes: {
    variant: {
      control: 'select',
      options: variants,
      description: 'Color variant of the button',
    },
    appearance: {
      control: 'select',
      options: appearances,
      description: 'Visual style of the button',
    },
    size: {
      control: 'select',
      options: sizes,
      description: 'Size of the button',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
    loading: {
      control: 'boolean',
      description: 'Whether the button shows a loading state',
    },
    href: {
      control: 'text',
      description: 'URL to link to (renders as an `<a>` tag)',
    },
    target: {
      control: 'select',
      options: ['_self', '_blank', '_parent', '_top'],
      description: 'Link target attribute (for `href`)',
    },
    slot: {
      control: 'text',
      description: 'Button text content',
    },
  },
  render: args => html`
    <mov-button
      variant="${args.variant}"
      appearance="${args.appearance}"
      size="${args.size}"
      ?disabled="${args.disabled}"
      ?loading="${args.loading}"
      href="${args.href || undefined}"
      target="${args.target || undefined}"
    >
      ${args.slot}
    </mov-button>
  `,
} satisfies Meta;

/**
 * The default story for the Button component.
 * It provides interactive controls for all the major properties.
 * @type {StoryObj}
 */
export const Default: StoryObj = {
  args: {
    variant: 'primary',
    appearance: 'default',
    size: 'medium',
    disabled: false,
    loading: false,
    href: '',
    target: '_self',
    slot: 'Button Text',
  },
};

/**
 * A story that displays a comprehensive matrix of all button variants and appearances.
 * @type {StoryObj}
 */
export const AllVariants: StoryObj = {
  name: 'All Variants',
  parameters: {
    controls: { disable: true },
  },
  render: () => html`
    <link
      rel="stylesheet"
      href="https://early.webawesome.com/webawesome@3.0.0-beta.4/dist/styles/webawesome.css"
    />
    <script
      type="module"
      src="https://early.webawesome.com/webawesome@3.0.0-beta.4/dist/webawesome.loader.js"
    ></script>
    <div style="display: flex; flex-direction: column; gap: 1.5rem;">
      <div class="table-scroll">
        <table>
          <thead>
            <tr>
              <th></th>
              <th><code>&lt;wa-button&gt;</code></th>
              <th><code>&lt;mov-button&gt;</code></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th><em>default</em></th>
              <td>
                <wa-button
                  variant="neutral"
                  appearance="accent"
                  size="medium"
                  >Button</wa-button
                >
              </td>
              <td>
                <mov-button size="medium">Button</mov-button>
              </td>
            </tr>
            <tr>
              <th><code>accent</code></th>
              <td>
                <div class="wa-cluster wa-gap-2xs">
                  <wa-button
                    variant="brand"
                    appearance="accent"
                    size="medium"
                    >Brand</wa-button
                  >
                  <wa-button
                    variant="neutral"
                    appearance="accent"
                    size="medium"
                    >Neutral</wa-button
                  >
                  <wa-button
                    variant="success"
                    appearance="accent"
                    size="medium"
                    >Success</wa-button
                  >
                  <wa-button
                    variant="warning"
                    appearance="accent"
                    size="medium"
                    >Warning</wa-button
                  >
                  <wa-button
                    variant="danger"
                    appearance="accent"
                    size="medium"
                    >Danger</wa-button
                  >
                </div>
              </td>
              <td>
                <div class="wa-cluster wa-gap-2xs">
                  <mov-button
                    variant="brand"
                    appearance="accent"
                    size="medium"
                    >Brand</mov-button
                  >
                  <mov-button
                    variant="neutral"
                    appearance="accent"
                    size="medium"
                    >Neutral</mov-button
                  >
                  <mov-button
                    variant="success"
                    appearance="accent"
                    size="medium"
                    >Success</mov-button
                  >
                  <mov-button
                    variant="warning"
                    appearance="accent"
                    size="medium"
                    >Warning</mov-button
                  >
                  <mov-button
                    variant="danger"
                    appearance="accent"
                    size="medium"
                    >Danger</mov-button
                  >
                </div>
              </td>
            </tr>
            <tr>
              <th><code>filled</code> + <code>outlined</code></th>
              <td>
                <div class="wa-cluster wa-gap-2xs">
                  <wa-button
                    variant="brand"
                    appearance="filled outlined"
                    size="medium"
                    >Brand</wa-button
                  >
                  <wa-button
                    variant="neutral"
                    appearance="filled outlined"
                    size="medium"
                    >Neutral</wa-button
                  >
                  <wa-button
                    variant="success"
                    appearance="filled outlined"
                    size="medium"
                    >Success</wa-button
                  >
                  <wa-button
                    variant="warning"
                    appearance="filled outlined"
                    size="medium"
                    >Warning</wa-button
                  >
                  <wa-button
                    variant="danger"
                    appearance="filled outlined"
                    size="medium"
                    >Danger</wa-button
                  >
                </div>
              </td>
              <td>
                <div class="wa-cluster wa-gap-2xs">
                  <mov-button
                    variant="brand"
                    appearance="filled outlined"
                    size="medium"
                    >Brand</mov-button
                  >
                  <mov-button
                    variant="neutral"
                    appearance="filled outlined"
                    size="medium"
                    >Neutral</mov-button
                  >
                  <mov-button
                    variant="success"
                    appearance="filled outlined"
                    size="medium"
                    >Success</mov-button
                  >
                  <mov-button
                    variant="warning"
                    appearance="filled outlined"
                    size="medium"
                    >Warning</mov-button
                  >
                  <mov-button
                    variant="danger"
                    appearance="filled outlined"
                    size="medium"
                    >Danger</mov-button
                  >
                </div>
              </td>
            </tr>
            <tr>
              <th><code>filled</code></th>
              <td>
                <div class="wa-cluster wa-gap-2xs">
                  <wa-button
                    variant="brand"
                    appearance="filled"
                    size="medium"
                    >Brand</wa-button
                  >
                  <wa-button
                    variant="neutral"
                    appearance="filled"
                    size="medium"
                    >Neutral</wa-button
                  >
                  <wa-button
                    variant="success"
                    appearance="filled"
                    size="medium"
                    >Success</wa-button
                  >
                  <wa-button
                    variant="warning"
                    appearance="filled"
                    size="medium"
                    >Warning</wa-button
                  >
                  <wa-button
                    variant="danger"
                    appearance="filled"
                    size="medium"
                    >Danger</wa-button
                  >
                </div>
              </td>
              <td>
                <div class="wa-cluster wa-gap-2xs">
                  <mov-button
                    variant="brand"
                    appearance="filled"
                    size="medium"
                    >Brand</mov-button
                  >
                  <mov-button
                    variant="neutral"
                    appearance="filled"
                    size="medium"
                    >Neutral</mov-button
                  >
                  <mov-button
                    variant="success"
                    appearance="filled"
                    size="medium"
                    >Success</mov-button
                  >
                  <mov-button
                    variant="warning"
                    appearance="filled"
                    size="medium"
                    >Warning</mov-button
                  >
                  <mov-button
                    variant="danger"
                    appearance="filled"
                    size="medium"
                    >Danger</mov-button
                  >
                </div>
              </td>
            </tr>
            <tr>
              <th><code>outlined</code></th>
              <td>
                <div class="wa-cluster wa-gap-2xs">
                  <wa-button
                    variant="brand"
                    appearance="outlined"
                    size="medium"
                    >Brand</wa-button
                  >
                  <wa-button
                    variant="neutral"
                    appearance="outlined"
                    size="medium"
                    >Neutral</wa-button
                  >
                  <wa-button
                    variant="success"
                    appearance="outlined"
                    size="medium"
                    >Success</wa-button
                  >
                  <wa-button
                    variant="warning"
                    appearance="outlined"
                    size="medium"
                    >Warning</wa-button
                  >
                  <wa-button
                    variant="danger"
                    appearance="outlined"
                    size="medium"
                    >Danger</wa-button
                  >
                </div>
              </td>
              <td>
                <div class="wa-cluster wa-gap-2xs">
                  <mov-button
                    variant="brand"
                    appearance="outlined"
                    size="medium"
                    >Brand</mov-button
                  >
                  <mov-button
                    variant="neutral"
                    appearance="outlined"
                    size="medium"
                    >Neutral</mov-button
                  >
                  <mov-button
                    variant="success"
                    appearance="outlined"
                    size="medium"
                    >Success</mov-button
                  >
                  <mov-button
                    variant="warning"
                    appearance="outlined"
                    size="medium"
                    >Warning</mov-button
                  >
                  <mov-button
                    variant="danger"
                    appearance="outlined"
                    size="medium"
                    >Danger</mov-button
                  >
                </div>
              </td>
            </tr>
            <tr>
              <th><code>plain</code></th>
              <td>
                <div class="wa-cluster wa-gap-2xs">
                  <wa-button
                    variant="brand"
                    appearance="plain"
                    size="medium"
                    >Brand</wa-button
                  >
                  <wa-button
                    variant="neutral"
                    appearance="plain"
                    size="medium"
                    >Neutral</wa-button
                  >
                  <wa-button
                    variant="success"
                    appearance="plain"
                    size="medium"
                    >Success</wa-button
                  >
                  <wa-button
                    variant="warning"
                    appearance="plain"
                    size="medium"
                    >Warning</wa-button
                  >
                  <wa-button
                    variant="danger"
                    appearance="plain"
                    size="medium"
                    >Danger</wa-button
                  >
                </div>
              </td>
              <td>
                <div class="wa-cluster wa-gap-2xs">
                  <mov-button
                    variant="brand"
                    appearance="plain"
                    size="medium"
                    >Brand</mov-button
                  >
                  <mov-button
                    variant="neutral"
                    appearance="plain"
                    size="medium"
                    >Neutral</mov-button
                  >
                  <mov-button
                    variant="success"
                    appearance="plain"
                    size="medium"
                    >Success</mov-button
                  >
                  <mov-button
                    variant="warning"
                    appearance="plain"
                    size="medium"
                    >Warning</mov-button
                  >
                  <mov-button
                    variant="danger"
                    appearance="plain"
                    size="medium"
                    >Danger</mov-button
                  >
                </div>
              </td>
            </tr>
            <tr>
              <th><code>small</code></th>
              <td>
                <wa-button
                  variant="neutral"
                  appearance="accent"
                  size="medium"
                  >Small</wa-button
                >
              </td>
              <td>
                <mov-button
                  variant="neutral"
                  appearance="accent"
                  size="medium"
                  >Small</mov-button
                >
              </td>
            </tr>
            <tr>
              <th><code>medium</code></th>
              <td>
                <wa-button
                  size="medium"
                  variant="neutral"
                  appearance="accent"
                  >Medium</wa-button
                >
              </td>
              <td>
                <mov-button
                  size="medium"
                  variant="neutral"
                  appearance="accent"
                  >Medium</mov-button
                >
              </td>
            </tr>
            <tr>
              <th><code>large</code></th>
              <td>
                <wa-button
                  size="large"
                  variant="neutral"
                  appearance="accent"
                  >Large</wa-button
                >
              </td>
              <td>
                <mov-button
                  size="large"
                  variant="neutral"
                  appearance="accent"
                  >Large</mov-button
                >
              </td>
            </tr>
            <tr>
              <th><code>pill</code></th>
              <td>
                <wa-button
                  pill=""
                  variant="neutral"
                  appearance="accent"
                  size="medium"
                  >Pill</wa-button
                >
              </td>
              <td>
                <mov-button
                  pill=""
                  variant="neutral"
                  appearance="accent"
                  size="medium"
                  >Pill</mov-button
                >
              </td>
            </tr>
            <tr>
              <th><code>icons</code></th>
              <td>
                ${commonIcons.map(
                  icon => html`
                    <wa-button
                      title="${icon}"
                      variant="brand"
                      appearance="accent"
                      size="medium"
                    >
                      <wa-icon name="${icon}"></wa-icon>
                    </wa-button>
                  `,
                )}
              </td>
              <td>
                ${commonIcons.map(
                  icon => html`
                    <mov-button title="${icon}">
                      <mov-icon name="${icon}"></mov-icon>
                    </mov-button>
                  `,
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
};

/**
 * A story demonstrating the different sizes available for the button.
 * @type {StoryObj}
 */
export const Sizes: StoryObj = {
  name: 'Button Sizes',
  parameters: {
    controls: { disable: true },
  },
  render: () => html`
    <div style="display: flex; align-items: center; gap: 1rem;">
      ${sizes.map(
        size => html`
          <mov-button size="${size}">
            <mov-icon
              slot="start"
              name="settings"
            ></mov-icon>
            Size ${size.toUpperCase()}
          </mov-button>
        `,
      )}
    </div>
  `,
};

/**
 * A story showcasing buttons with icons placed at the start or end, and icon-only buttons.
 * @type {StoryObj}
 */
export const WithIcons: StoryObj = {
  name: 'Buttons with Icons',
  parameters: {
    controls: { disable: true },
  },
  render: () => html`
    <div style="display: flex; align-items: center; gap: 1rem;">
      <mov-button>
        <mov-icon
          slot="start"
          name="file-download"
        ></mov-icon>
        Download
      </mov-button>
      <mov-button>
        Continue
        <mov-icon
          slot="end"
          name="arrow-big-right"
        ></mov-icon>
      </mov-button>
      ${commonIcons.slice(0, 5).map(
        (icon, index) => html`
          <mov-button
            title="${icon}"
            variant="${variants[index]}"
          >
            <mov-icon name="${icon}"></mov-icon>
          </mov-button>
        `,
      )}
    </div>
  `,
};

/**
 * A story demonstrating the button in its disabled and loading states.
 * @type {StoryObj}
 */
export const ButtonStates: StoryObj = {
  name: 'Button States',
  parameters: {
    controls: { disable: true },
  },
  render: () => html`
    <div style="display: flex; align-items: center; gap: 1rem;">
      <mov-button disabled>Disabled</mov-button>
      <mov-button loading>Loading</mov-button>
      <mov-button loading>
        <mov-icon
          slot="start"
          name="refresh"
        ></mov-icon>
        Loading...
      </mov-button>
    </div>
  `,
};

/**
 * A story showing how the button component renders as an `<a>` tag when an `href` is provided.
 * @type {StoryObj}
 */
export const AsLinks: StoryObj = {
  name: 'Buttons as Links',
  parameters: {
    controls: { disable: true },
  },
  render: () => html`
    <div style="display: flex; align-items: center; gap: 1rem;">
      <mov-button
        href="#"
        target="_blank"
      >
        <mov-icon
          slot="start"
          name="external-link"
        ></mov-icon>
        External Link
      </mov-button>
      <mov-button
        href="#"
        appearance="outline"
        >Internal Link</mov-button
      >
    </div>
  `,
};

/**
 * A story demonstrating how to apply custom colors to buttons using CSS custom properties.
 * @type {StoryObj}
 */
export const ColoredButtons: StoryObj = {
  name: 'Colored Buttons',
  parameters: {
    controls: { disable: true },
  },
  render: () => html`
    <style>
      .custom-purple {
        --theme-primary-color: #6f42c1;
        --theme-primary-text-color: white;
      }
      .custom-green {
        --theme-primary-color: #28a745;
        --theme-primary-text-color: white;
      }
    </style>
    <div style="display: flex; align-items: center; gap: 1rem;">
      <mov-button class="custom-purple">Purple Button</mov-button>
      <mov-button
        class="custom-green"
        appearance="outline"
        >Green Outline</mov-button
      >
    </div>
  `,
};
