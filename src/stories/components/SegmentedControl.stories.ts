import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '../../ui/components/SegmentedControl.ts';

const sizes = ['small', 'medium', 'large'];
const positions = ['side', 'bottom', 'tooltip'];

export default {
  title: 'Components/Segmented Control',
  component: 'segmented-control',
  argTypes: {
    quantity: { control: 'number' },
    value: { control: 'text' },
    labelPosition: {
      control: 'select',
      options: positions,
    },
    size: {
      control: 'select',
      options: sizes,
    },
    onChange: { action: 'change' },
  },
} satisfies Meta;

type Story = StoryObj<{
  value: string;
  labelPosition: 'side' | 'bottom' | 'tooltip';
  size: 'small' | 'medium' | 'large';
  quantity: number;
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
    quantity: 2,
  },
  render: args => html`
    <div style="display: flex; flex-direction: column; gap: 1rem; width: 300px; padding: 1rem;">
      ${positions.map(p =>
        sizes.map(
          s =>
            html`<div>
              <div>${s} ${p}</div>
              <segmented-control
              .value=${args.value}
              .labelPosition=${p}
              size="${s}"
              @change=${(e: CustomEvent) => args.onChange(e.detail)}
            >
              ${new Array(args.quantity).fill(0).map(
                () =>
                  html`<segmented-control-option
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
                    <segmented-control-option
                      value="Menu"
                      label="Menu"
                      icon="book-return"
                    ></segmented-control-option>`,
              )}
            </segmented-control>
            </div>`,
        ),
      )}
    </div>
  `,
};
