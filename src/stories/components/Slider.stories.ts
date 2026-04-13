import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '../../ui/components/Slider.ts';

/**
 * Storybook stories for the Slider component (`<mov-slider>`).
 */
const meta: Meta = {
  title: 'Components/Slider',
  component: 'mov-slider',
  argTypes: {
    label: { control: 'text' },
    min: { control: 'number' },
    max: { control: 'number' },
    step: { control: 'number' },
    value: { control: 'object' },
    dual: { control: 'boolean' },
    vertical: { control: 'boolean' },
    filled: { control: 'boolean' },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    disabled: { control: 'boolean' },
    readonly: { control: 'boolean' },
    invalid: { control: 'boolean' },
    showTooltip: { control: 'boolean' },
    showTicks: { control: 'boolean' },
    tickStep: { control: 'number' },
    tickCount: { control: 'number' },
    helpText: { control: 'text' },
    errorMessage: { control: 'text' },
  },
  render: args => html`
    <mov-slider
      label="${args.label}"
      min="${args.min}"
      max="${args.max}"
      step="${args.step}"
      .value="${args.value}"
      ?dual="${args.dual}"
      ?vertical="${args.vertical}"
      ?filled="${args.filled}"
      size="${args.size}"
      ?disabled="${args.disabled}"
      ?readonly="${args.readonly}"
      ?invalid="${args.invalid}"
      ?show-tooltip="${args.showTooltip}"
      ?show-ticks="${args.showTicks}"
      tick-step="${args.tickStep}"
      tick-count="${args.tickCount}"
      help-text="${args.helpText}"
      error-message="${args.errorMessage}"
      @input=${(e: CustomEvent) => console.log('input', e.detail.value)}
      @change=${(e: CustomEvent) => console.log('change', e.detail.value)}
    ></mov-slider>
  `,
};

export default meta;

export const Default: StoryObj = {
  args: {
    label: 'Volume',
    min: 0,
    max: 100,
    step: 1,
    value: 50,
    size: 'medium',
    showTooltip: true,
  },
};

export const Dual: StoryObj = {
  args: {
    label: 'Range Selector',
    min: 0,
    max: 100,
    step: 1,
    value: [20, 80],
    dual: true,
    showTooltip: true,
  },
};

export const Vertical: StoryObj = {
  args: {
    label: 'Vertical Slider',
    min: 0,
    max: 100,
    value: 30,
    vertical: true,
    showTooltip: true,
  },
};

export const WithTicks: StoryObj = {
  args: {
    label: 'Slider with Ticks',
    min: 0,
    max: 100,
    value: 25,
    showTicks: true,
    tickCount: 5,
  },
};

export const Sizes: StoryObj = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 2rem;">
      <mov-slider label="Small" size="small" value="30"></mov-slider>
      <mov-slider label="Medium" size="medium" value="50"></mov-slider>
      <mov-slider label="Large" size="large" value="70"></mov-slider>
    </div>
  `,
};

export const States: StoryObj = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 2rem;">
      <mov-slider label="Disabled" disabled value="30"></mov-slider>
      <mov-slider label="Readonly" readonly value="50"></mov-slider>
      <mov-slider label="Invalid" invalid error-message="Value is too low" value="10"></mov-slider>
      <mov-slider label="With Help Text" help-text="Adjust the brightness of the screen" value="80"></mov-slider>
    </div>
  `,
};
