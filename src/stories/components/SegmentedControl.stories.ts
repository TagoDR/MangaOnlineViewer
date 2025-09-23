import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '../../ui/components/SegmentedControl.ts';

export default {
  title: 'Components/Segmented Control',
  component: 'segmented-control',
  argTypes: {
    value: { control: 'text' },
    labelPosition: {
      control: 'select',
      options: ['side', 'bottom', 'tooltip'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    onChange: { action: 'change' },
  },
} satisfies Meta;

type Story = StoryObj<{
  options: { value: string; label: string; icon?: string }[];
  value: string;
  labelPosition: 'side' | 'bottom' | 'tooltip';
  size: 'small' | 'medium' | 'large';
  onChange: (value: string) => void;
}>;

export const Default: Story = {
  args: {
    value: 'vue',
    labelPosition: 'side',
    size: 'medium',
  },
  render: args => html`
    <div style="width: 300px; padding: 1rem;">
      <segmented-control
        .value=${args.value}
        .labelPosition=${args.labelPosition}
        @change=${(e: CustomEvent) => args.onChange(e.detail)}
      >
        <segmented-control-option
          value="react"
          label="React"
        ></segmented-control-option>
        <segmented-control-option
          value="vue"
          label="Vue"
        ></segmented-control-option>
        <segmented-control-option
          value="svelte"
          label="Svelte"
        ></segmented-control-option>
      </segmented-control>
    </div>
  `,
};

export const WithIcons: Story = {
  name: 'With Icons',
  args: {
    value: 'messages',
    labelPosition: 'side',
    size: 'medium',
  },
  render: args => html`
    <div style="width: 300px; padding: 1rem;">
      <segmented-control
        .value=${args.value}
        .labelPosition=${args.labelPosition}
        @change=${(e: CustomEvent) => args.onChange(e.detail)}
      >
        <segmented-control-option
          value="photos"
          label="Photos"
          icon="photo"
        ></segmented-control-option>
        <segmented-control-option
          value="messages"
          label="Messages"
          icon="message"
        ></segmented-control-option>
        <segmented-control-option
          value="settings"
          label="Settings"
          icon="settings"
        ></segmented-control-option>
      </segmented-control>
    </div>
  `,
};

export const LabelsOnBottom: Story = {
  name: 'Labels on Bottom',
  args: {
    ...WithIcons.args,
    labelPosition: 'bottom',
  },
  render: WithIcons.render,
};

export const TooltipLabels: Story = {
  name: 'Tooltip Labels',
  args: {
    ...WithIcons.args,
    labelPosition: 'tooltip',
  },
  render: WithIcons.render,
};

export const Sizes: Story = {
  name: 'Sizes',
  args: {
    ...WithIcons.args,
  },
  render: args => html`
    <div style="display: flex; flex-direction: column; gap: 1rem; width: 300px; padding: 1rem;">
      <segmented-control
        .options=${args.options}
        .value=${args.value}
        .labelPosition=${args.labelPosition}
        size="small"
        @change=${(e: CustomEvent) => args.onChange(e.detail)}
      >
      </segmented-control>
      <segmented-control
        .options=${args.options}
        .value=${args.value}
        .labelPosition=${args.labelPosition}
        size="medium"
        @change=${(e: CustomEvent) => args.onChange(e.detail)}
      >
      </segmented-control>
      <segmented-control
        .options=${args.options}
        .value=${args.value}
        .labelPosition=${args.labelPosition}
        size="large"
        @change=${(e: CustomEvent) => args.onChange(e.detail)}
      >
      </segmented-control>
      <segmented-control
        .options=${args.options}
        .value=${args.value}
        .labelPosition=${args.labelPosition}
        size="64px"
        @change=${(e: CustomEvent) => args.onChange(e.detail)}
      >
      </segmented-control>
    </div>
  `,
};
