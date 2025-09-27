import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '../../ui/components/Slider';

const meta: Meta = {
  title: 'Components/Slider',
  component: 'mov-slider',
  argTypes: {
    label: { control: 'text' },
    value: { control: 'number' },
    minValue: { control: 'number' },
    maxValue: { control: 'number' },
    min: { control: 'number' },
    max: { control: 'number' },
    step: { control: 'number' },
    range: { control: 'boolean' },
    disabled: { control: 'boolean' },
    readonly: { control: 'boolean' },
    withMarkers: { control: 'boolean' },
  },
};

export default meta;

export const Default: StoryObj = {
  args: {
    label: 'Slider',
    value: 50,
    min: 0,
    max: 100,
    step: 10,
    range: false,
    disabled: false,
    readonly: false,
    withMarkers: false,
  },
  render: args =>
    html`<mov-slider
      label=${args.label}
      value=${args.value}
      min=${args.min}
      max=${args.max}
      step=${args.step}
      ?range=${args.range}
      ?disabled=${args.disabled}
      ?readonly=${args.readonly}
      ?with-markers=${args.withMarkers}
    ></mov-slider>`,
};

export const Range: StoryObj = {
  args: {
    ...Default.args,
    label: 'Range Slider',
    range: true,
    minValue: 20,
    maxValue: 80,
    withMarkers: true,
  },
  render: args =>
    html`<mov-slider
      label=${args.label}
      min-value=${args.minValue}
      max-value=${args.maxValue}
      min=${args.min}
      max=${args.max}
      step=${args.step}
      ?range=${args.range}
      ?disabled=${args.disabled}
      ?readonly=${args.readonly}
      ?with-markers=${args.withMarkers}
    ></mov-slider>`,
};
