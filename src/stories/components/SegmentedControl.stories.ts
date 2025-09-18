import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '../../ui/components/SegmentedControl.ts';
import { IconMessage, IconPhoto, IconSettings } from '../../ui/icons';

const optionsWithIcons = [
  { value: 'photos', label: 'Photos', icon: IconPhoto },
  { value: 'messages', label: 'Messages', icon: IconMessage },
  { value: 'settings', label: 'Settings', icon: IconSettings },
];

const optionsWithoutIcons = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'svelte', label: 'Svelte' },
];

export default {
  title: 'Components/Segmented Control',
  component: 'segmented-control',
  argTypes: {
    value: { control: 'text' },
    labelPosition: {
      control: 'select',
      options: ['side', 'bottom', 'tooltip'],
    },
    onChange: { action: 'change' },
  },
  render: args => html`
    <div style="width: 300px; padding: 1rem;">
      <segmented-control
        .options=${args.options}
        .value=${args.value}
        .labelPosition=${args.labelPosition}
        @change=${(e: CustomEvent) => args.onChange(e.detail)}
      >
      </segmented-control>
    </div>
  `,
} satisfies Meta;

type Story = StoryObj<{
  options: { value: string; label: string; icon?: unknown }[];
  value: string;
  labelPosition: 'side' | 'bottom' | 'tooltip';
  onChange: (value: string) => void;
}>;

export const Default: Story = {
  args: {
    options: optionsWithoutIcons,
    value: 'vue',
    labelPosition: 'side',
  },
};

export const WithIcons: Story = {
  name: 'With Icons',
  args: {
    options: optionsWithIcons,
    value: 'messages',
    labelPosition: 'side',
  },
};

export const LabelsOnBottom: Story = {
  name: 'Labels on Bottom',
  args: {
    ...WithIcons.args,
    labelPosition: 'bottom',
  },
};

export const TooltipLabels: Story = {
  name: 'Tooltip Labels',
  args: {
    ...WithIcons.args,
    labelPosition: 'tooltip',
  },
};
