import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '../../ui/components/ToggleSwitch.ts';

export default {
  title: 'Components/Toggle Switch',
  component: 'toggle-switch',
  argTypes: {
    name: { control: 'text' },
    checked: { control: 'boolean' },
    design: {
      control: { type: 'select' },
      options: ['Graphical', 'Textual'],
    },
    disabled: { control: 'boolean' },
    onChange: { action: 'change' },
  },
  render: args => html`
    <div style="display: flex; align-items: center; gap: 1rem; padding: 1rem;">
      <toggle-switch
        .name=${args.name}
        ?checked=${args.checked}
        .design=${args.design}
        ?disabled="${args.disabled}"
        .onChange=${(e: Event) => args.onChange((e.target as HTMLInputElement).checked)}
      >
      </toggle-switch>
      <label for=${args.name}>A toggle switch (${args.design})</label>
    </div>
  `,
} satisfies Meta;

export const Graphical: StoryObj = {
  args: {
    name: 'toggle-1',
    checked: false,
    design: 'graphical',
  },
};

export const GraphicalChecked: StoryObj = {
  name: 'Graphical Checked',
  args: {
    ...Graphical.args,
    name: 'toggle-2',
    checked: true,
  },
};

export const Textual: StoryObj = {
  name: 'Textual',
  args: {
    ...Graphical.args,
    name: 'toggle-3',
    design: 'textual',
  },
};

export const TextualChecked: StoryObj = {
  name: 'Textual Checked',
  args: {
    ...Textual.args,
    name: 'toggle-4',
    checked: true,
  },
};
