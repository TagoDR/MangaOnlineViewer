import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

export default {
  title: 'Components/Button',
  component: 'mov-button',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['neutral', 'brand', 'success', 'warning', 'danger'],
    },
    appearance: {
      control: 'select',
      options: ['filled', 'tonal', 'outlined', 'plain', 'accent'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
    href: { control: 'text' },
    slot: { control: 'text' },
  },
  render: args => html`
    <mov-button
      variant="${args.variant}"
      appearance="${args.appearance}"
      size="${args.size}"
      ?disabled="${args.disabled}"
      ?loading="${args.loading}"
      href="${args.href}"
    >
      ${args.slot}
    </mov-button>
  `,
} satisfies Meta;

export const Default: StoryObj = {
  args: {
    variant: 'brand',
    appearance: 'filled',
    size: 'medium',
    disabled: false,
    loading: false,
    href: '',
    slot: 'Button Text',
  },
};

export const WithIcon: StoryObj = {
  name: 'With Icon',
  render: args => html`
    <mov-button
      variant="${args.variant}"
      appearance="${args.appearance}"
      ?disabled="${args.disabled}"
      ?loading="${args.loading}"
    >
      <mov-icon
        slot="start"
        name="settings"
      ></mov-icon>
      ${args.slot}
    </mov-button>
    <wa-button
      variant="${args.variant}"
      appearance="${args.appearance}"
      ?disabled="${args.disabled}"
      ?loading="${args.loading}"
    >
      <wa-icon
        slot="start"
        name="settings"
      ></wa-icon>
      ${args.slot}
    </wa-button>
  `,
  args: {
    ...Default.args,
    slot: 'Settings',
  },
};

export const JustIcon: StoryObj = {
  name: 'Just Icon',
  render: args => html`
    <mov-button
      .variant="${args.variant}"
      .appearance="${args.appearance}"
      .size="${args.size}"
      ?disabled="${args.disabled}"
      ?loading="${args.loading}"
    >
      <mov-icon name="${args.icon}"></mov-icon>
    </mov-button>
    <wa-button
      .variant="${args.variant}"
      .appearance="${args.appearance}"
      .size="${args.size}"
      ?disabled="${args.disabled}"
      ?loading="${args.loading}"
    >
      <wa-icon name="${args.icon}"></wa-icon>
    </wa-button>
  `,
  args: {
    ...Default.args,
    icon: 'zoom-out',
    size: 'medium',
  },
};
