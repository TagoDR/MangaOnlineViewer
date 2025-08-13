import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const box = (color = '#a9e34b', size = '50px') =>
  html` <div style="width: ${size}; height: ${size}; background-color: ${color};"></div>`;

export default {
  title: 'Layout/Group',
  component: 'group-layout',
  tags: ['autodocs'],
  argTypes: {
    gap: { control: 'text', description: 'CSS gap property' },
    justify: {
      control: 'select',
      options: [
        'flex-start',
        'flex-end',
        'center',
        'space-between',
        'space-around',
        'space-evenly',
      ],
      description: 'CSS justify-content property',
    },
    align: {
      control: 'select',
      options: ['stretch', 'flex-start', 'flex-end', 'center', 'baseline'],
      description: 'CSS align-items property',
    },
    wrap: {
      control: 'select',
      options: ['nowrap', 'wrap', 'wrap-reverse'],
      description: 'CSS flex-wrap property',
    },
  },
  render: args => html`
    <group-layout
      gap=${args.gap}
      justify=${args.justify}
      align=${args.align}
      wrap=${args.wrap}
      style="border: 2px dashed #888; padding: 10px; min-height: 70px;"
    >
      ${box()} ${box('#4ba9e3')} ${box('#e34b4b')}
    </group-layout>
  `,
} satisfies Meta;

export const Default: StoryObj = {
  args: {
    gap: '1rem',
    justify: 'flex-start',
    align: 'center',
    wrap: 'nowrap',
  },
};

export const SpaceBetween: StoryObj = {
  args: {
    ...Default.args,
    justify: 'space-between',
  },
};

export const Wrapping: StoryObj = {
  render: args => html`
    <group-layout
      gap=${args.gap}
      justify=${args.justify}
      align=${args.align}
      wrap=${args.wrap}
      style="border: 2px dashed #888; padding: 10px; width: 200px;"
    >
      ${box()} ${box('#4ba9e3')} ${box('#e34b4b')} ${box('#e3a94b')}
    </group-layout>
  `,
  args: {
    ...Default.args,
    wrap: 'wrap',
  },
};
