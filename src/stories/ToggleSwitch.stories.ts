import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '../ui/components/ToggleSwitch.ts';

export default {
  title: 'Components/Toggle Switch',
  component: 'mov-toggle-switch',
  argTypes: {
    name: { control: 'text' },
    checked: { control: 'boolean' },
    onChange: { action: 'change' },
  },
  render: args => html`
    <div style="display: flex; align-items: center; gap: 1rem; padding: 1rem;">
      <mov-toggle-switch
        .name=${args.name}
        .checked=${args.checked}
        .onChange=${(e: Event) => args.onChange((e.target as HTMLInputElement).checked)}
      >
      </mov-toggle-switch>
      <label for=${args.name}>A toggle switch</label>
    </div>
  `,
} satisfies Meta;

export const Default: StoryObj = {
  args: {
    name: 'toggle-1',
    checked: false,
  },
};

export const Checked: StoryObj = {
  name: 'Checked',
  args: {
    ...Default.args,
    name: 'toggle-2',
    checked: true,
  },
};
