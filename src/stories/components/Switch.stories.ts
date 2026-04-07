import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import type { Switch } from '../../ui/components/Switch.ts';

export default {
  title: 'Components/Switch',
  component: 'mov-switch',
  argTypes: {
    name: { control: 'text' },
    value: { control: 'text' },
    checked: { control: 'boolean' },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    required: { control: 'boolean' },
    hint: { control: 'text' },
    design: {
      control: { type: 'select' },
      options: ['graphical', 'textual'],
    },
    disabled: { control: 'boolean' },
    onChange: { action: 'change' },
  },
  render: args => html`
    <div style="display: flex; align-items: center; gap: 1rem; padding: 1rem;">
      <mov-switch
        .name=${args.name}
        .value=${args.value}
        ?checked=${args.checked}
        .size=${args.size}
        ?required=${args.required}
        .hint=${args.hint}
        .design=${args.design}
        ?disabled="${args.disabled}"
        @change=${(e: Event) => args.onChange((e.target as Switch).checked)}
      >
        <label for=${args.name}>A Switch (${args.design})</label>
      </mov-switch>
    </div>
  `,
} satisfies Meta;

export const Graphical: StoryObj = {
  args: {
    name: 'toggle-graphical',
    value: 'on',
    checked: false,
    size: 'medium',
    required: false,
    hint: 'This is a hint',
    design: 'graphical',
  },
};

export const Textual: StoryObj = {
  name: 'Textual',
  args: {
    name: 'toggle-textual',
    value: 'on',
    checked: false,
    size: 'medium',
    required: false,
    hint: 'This is a hint',
    design: 'textual',
  },
};

export const Comparison: StoryObj = {
  render: () => html`
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/@awesome.me/webawesome@3.5.0/dist-cdn/styles/webawesome.css"
    />
    <script type="module">
      import 'https://cdn.jsdelivr.net/npm/@awesome.me/webawesome@3.5.0/dist-cdn/components/switch/switch.js';
    </script>
    <div style="display: flex; flex-direction: column; gap: 2rem; padding: 1rem;">
      <div>
        <h4><code>&lt;mov-switch&gt;</code> (Graphical)</h4>
        <mov-switch design="graphical">Graphical Switch</mov-switch>
      </div>

      <div>
        <h4><code>&lt;mov-switch&gt;</code> (Textual)</h4>
        <mov-switch design="textual">Textual Switch</mov-switch>
      </div>

      <div>
        <h4><code>&lt;wa-switch&gt;</code></h4>
        <wa-switch>Web Awesome Switch</wa-switch>
      </div>
    </div>
  `,
};
