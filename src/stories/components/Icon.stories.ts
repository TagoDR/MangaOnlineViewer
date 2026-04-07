/**
 * @file Storybook stories for the custom icon component (`<mov-icon>`).
 * This file defines stories that showcase the icon component's different properties,
 * such as name, size, and color, as well as its usage in various contexts.
 */

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import _ from 'lodash';
import * as styledIcons from '../../ui/icons/StyledIcons.ts';
import colors, { sample } from '../../utils/colors.ts';
import '../../ui/components/Icon.ts'; // Ensure the <mov-icon> component is defined

const icons = _.keys(styledIcons).sort((a, b) => a.localeCompare(b));

const samples = _.entries({ ...sample, white: '#fff', black: '#000' }).map(([name, value]) => ({
  name: name.charAt(0).toUpperCase() + name.slice(1),
  value,
}));

/**
 * The `Meta` object for the `<mov-icon>` component stories.
 * This configures the component's entry in the Storybook UI.
 * @see https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
 */
export default {
  title: 'Components/Icon',
  component: 'mov-icon',
  argTypes: {
    name: {
      control: 'select',
      options: icons,
      description: 'The name of the icon to display',
    },
    variant: {
      control: 'select',
      options: ['regular', 'solid'],
      description: 'The variant of the icon',
    },
    family: {
      control: 'select',
      options: ['classic', 'duotone'],
      description: 'The family of the icon',
    },
    label: {
      control: 'text',
      description: 'Accessibility label for the icon',
    },
    size: {
      control: 'text',
      description: 'Custom size (e.g., "16px", "1.5rem", "24px")',
    },
  },
  render: args => html`
    <mov-icon
      name="${args.name}"
      variant="${args.variant}"
      family="${args.family}"
      label="${args.label}"
      size="${args.size}"
    ></mov-icon>
  `,
} satisfies Meta;

/**
 * The default story for the icon component.
 * It allows for interactive control of the icon's properties through the Storybook controls panel.
 * @type {StoryObj}
 */
export const Default: StoryObj = {
  args: {
    name: 'photo',
    label: 'Photo icon',
    size: '',
  },
};

/**
 * A story demonstrating the icon component at various fixed sizes.
 * @type {StoryObj}
 */
export const Sizes: StoryObj = {
  name: 'Icon Sizes',
  parameters: {
    controls: { disable: true },
  },
  render: () => html`
    <div style="display: flex; align-items: center; gap: 2rem;">
      <mov-icon
        name="settings"
        size="12px"
        label="Small"
      ></mov-icon>
      <mov-icon
        name="settings"
        size="16px"
        label="Default"
      ></mov-icon>
      <mov-icon
        name="settings"
        size="24px"
        label="Large"
      ></mov-icon>
      <mov-icon
        name="settings"
        size="32px"
        label="Extra Large"
      ></mov-icon>
    </div>
  `,
};

/**
 * A story showcasing the icon component with different samples applied.
 * @type {StoryObj}
 */
export const ColorVariations: StoryObj = {
  name: 'Color Variations',
  parameters: {
    controls: { disable: true },
  },
  render: () => html`
    <div
      style="display: flex; align-items: center; gap: 1rem; background-color: var(--mov-color-fill-loud)"
    >
      ${samples.map(
        color => html`
          <mov-icon
            name="settings"
            label="${color.name}"
            size="24px"
            style="color: ${color.value};"
          ></mov-icon>
        `,
      )}
    </div>
  `,
};

/**
 * A story demonstrating how the icon appears in different states, such as disabled or interactive.
 * @type {StoryObj}
 */
export const IconStates: StoryObj = {
  name: 'Icon States',
  parameters: {
    controls: { disable: true },
  },
  render: () => html`
    <div style="display: flex; align-items: center; gap: 2rem;">
      <div>
        <mov-icon
          name="eye"
          label="Normal"
        ></mov-icon>
        <span>Normal</span>
      </div>
      <div style="opacity: 0.5;">
        <mov-icon
          name="eye"
          label="Disabled"
        ></mov-icon>
        <span>Disabled</span>
      </div>
      <div style="cursor: pointer;">
        <mov-icon
          name="eye"
          label="Interactive"
        ></mov-icon>
        <span>Interactive</span>
      </div>
    </div>
  `,
};

/**
 * A story providing examples of the icon component used within other contexts, like buttons or text.
 * @type {StoryObj}
 */
export const IconContexts: StoryObj = {
  name: 'Icon in Context',
  args: {
    name: 'IconFileDownload',
  },
  render: args => {
    const buttonStyle =
      'display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.5rem 1rem; border: none; border-radius: 4px; cursor: pointer;';
    return html`
      <div style="display: flex; flex-direction: column; gap: 1.5rem;">
        <div>
          <h4>Icon inline with text</h4>
          <p
            style="display: flex; align-items: center; gap: 0.5rem; background-color: var(--mov-color-fill-loud); color: var(--mov-color-on-loud)"
          >
            <mov-icon
              name="settings"
              size="1em"
            ></mov-icon>
            <span>Icon inherits font size from parent.</span>
          </p>
        </div>

        <div>
          <h4>Icon in buttons (White Icon Variant)</h4>
          <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
            ${_.values(colors).map(
              color => html`
                <button style="${buttonStyle} background-color: ${color[800]}; color: white;">
                  <mov-icon name="${args.name}"></mov-icon>
                  <span>${color[800]}</span>
                </button>
              `,
            )}
          </div>
        </div>

        <div>
          <h4>Icon in buttons (Black Icon Variant)</h4>
          <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
            ${_.values(colors).map(
              color => html`
                <button style="${buttonStyle} background-color: ${color[200]}; color: black;">
                  <mov-icon
                    name="${args.name}"
                    style="color:black"
                  ></mov-icon>
                  <span>${color[200]}</span>
                </button>
              `,
            )}
          </div>
        </div>
      </div>
    `;
  },
};

/**
 * A comprehensive gallery of all available icons, with a search functionality.
 * Clicking an icon copies its HTML tag to the clipboard.
 * @type {StoryObj}
 */
export const IconGallery: StoryObj = {
  name: 'Icon Gallery',
  parameters: {
    controls: { disable: true },
  },
  render: () => html`
    <style>
      .icon-gallery-controls {
        display: flex;
        gap: 1rem;
        align-items: center;
        margin-bottom: 1rem;
      }
      .icon-gallery-search {
        padding: 0.5rem;
        width: 100%;
        max-width: 300px;
      }
      .icon-gallery {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
        gap: 1rem;
      }
      .icon-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
        padding: 1rem;
        border: 1px solid #eee;
        border-radius: 8px;
        cursor: pointer;
      }
      .icon-item:hover {
        background: #f8f8f8;
      }
      .icon-name {
        font-family: monospace;
        font-size: 0.8em;
      }
    </style>
    <div class="icon-gallery-controls">
      <button
        @click=${(e: Event) => {
          const gallery = (e.currentTarget as HTMLElement).parentElement?.nextElementSibling;
          if (!gallery) return;
          const icons = gallery.querySelectorAll('mov-icon');
          const currentColor = (icons[0] as HTMLElement)?.style.color || 'white';
          const nextColor = currentColor === 'white' ? 'black' : 'white';
          icons.forEach(icon => {
            (icon as HTMLElement).style.color = nextColor;
          });
        }}
      >
        Toggle Icon Color
      </button>
      <input
        type="text"
        class="icon-gallery-search"
        placeholder="Search icons..."
        @input=${(e: Event) => {
          const input = e.target as HTMLInputElement;
          const searchTerm = input.value.toLowerCase();
          const gallery = input.parentElement?.nextElementSibling;
          if (!gallery) {
            return;
          }
          const items = gallery.querySelectorAll('.icon-item');
          items.forEach(item => {
            const name = item.querySelector('.icon-name')?.textContent?.toLowerCase() ?? '';
            (item as HTMLElement).style.display = name.includes(searchTerm) ? 'flex' : 'none';
          });
        }}
      />
    </div>
    <div class="icon-gallery">
      ${icons.map(
        icon => html`
          <div
            class="icon-item"
            title="Click to copy icon name: ${icon}"
            style="background-color: var(--mov-color-fill-loud)"
            @click=${() => navigator.clipboard.writeText(icon)}
          >
            <mov-icon
              name="${icon}"
              size="24px"
              style="color: white;"
            ></mov-icon>
            <span class="icon-name">${icon}</span>
          </div>
        `,
      )}
    </div>
  `,
};

export const Comparison: StoryObj = {
  name: 'Comparison',
  render: () => {
    const testIcons = ['zoom-in', 'file-download', 'eye-off', 'refresh', 'bookmark'];
    return html`
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@awesome.me/webawesome@3.5.0/dist-cdn/styles/webawesome.css"
      />
      <script type="module">
        import 'https://cdn.jsdelivr.net/npm/@awesome.me/webawesome@3.5.0/dist-cdn/components/icon/icon.js';

        import { registerIconLibrary } from 'https://cdn.jsdelivr.net/npm/@awesome.me/webawesome@3.5.0/dist-cdn/webawesome.js';
        import { toKebabCase, toPascalCase } from '../../utils/format.ts';
        import * as styledIcons from '../../ui/icons/StyledIcons.ts';

        const tablerResolver = name =>
          'https://cdn.jsdelivr.net/npm/@tabler/icons/icons/' + toKebabCase(name) + '.svg';
        registerIconLibrary('default', {
          resolver: (name, family) => {
            const customIcon = styledIcons[toPascalCase(name)];
            if (customIcon) {
              // Use the bundled SVG content for custom icons, avoiding a network request.
              return 'data:image/svg+xml,' + encodeURIComponent(customIcon);
            }
            // Fallback to Tabler icons if the icon is not found in the custom set.
            return tablerResolver(name);
          },
          mutator: svg => {
            svg.style.fill = 'none';
            svg.setAttribute('height', 'auto');
            svg.setAttribute('width', 'auto');
            svg.setAttribute('stroke', 'currentColor');
          },
        });
      </script>
      <div style="display: flex; flex-direction: column; gap: 2rem;">
        <table>
          <thead>
            <tr>
              <th>Icon Name</th>
              <th><code>&lt;mov-icon&gt;</code></th>
              <th><code>&lt;wa-icon&gt;</code></th>
            </tr>
          </thead>
          <tbody>
            ${testIcons.map(
              icon => html`
                <tr>
                  <td><code>${icon}</code></td>
                  <td>
                    <mov-icon
                      name="${icon}"
                      size="24px"
                    ></mov-icon>
                  </td>
                  <td>
                    <wa-icon
                      name="${icon}"
                      style="font-size: 24px;"
                    ></wa-icon>
                  </td>
                </tr>
              `,
            )}
          </tbody>
        </table>
      </div>
    `;
  },
};
