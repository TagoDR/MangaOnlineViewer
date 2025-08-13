import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const box = (text: string, color = '#a9e34b') =>
  html` <div style="padding: 10px; background-color: ${color}; text-align: center;">${text}</div>`;

export default {
  title: 'Layout/Stack',
  component: 'stack-layout',
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
      options: ['stretch', 'flex-start', 'flex-end', 'center'],
      description: 'CSS align-items property',
    },
  },
  render: args => html`
    <stack-layout
      gap=${args.gap}
      justify=${args.justify}
      align=${args.align}
      style="border: 2px dashed #888; padding: 10px; min-height: 250px;"
    >
      ${box('Item 1')} ${box('Item 2', '#4ba9e3')} ${box('Item 3', '#e34b4b')}
    </stack-layout>
  `,
} satisfies Meta;

export const Default: StoryObj = {
  args: {
    gap: '1rem',
    justify: 'flex-start',
    align: 'stretch',
  },
};

export const AlignCenter: StoryObj = {
  args: {
    ...Default.args,
    align: 'center',
  },
};

export const JustifySpaceBetween: StoryObj = {
  args: {
    ...Default.args,
    justify: 'space-between',
  },
};
