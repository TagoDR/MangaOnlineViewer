import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { map } from 'lit/directives/map.js';

const box = (index: number) =>
  html` <div
    style="padding: 20px; background-color: #e9ecef; text-align: center; border-radius: 4px;"
  >
    Item ${index + 1}
  </div>`;

export default {
  title: 'Layout/Simple Grid',
  component: 'simple-grid-layout',
  tags: ['autodocs'],
  argTypes: {
    cols: {
      control: { type: 'number', min: 1, max: 12, step: 1 },
      description: 'Number of columns',
    },
    spacing: { control: 'text', description: 'Sets gap or column-gap' },
    verticalSpacing: { control: 'text', description: 'Sets row-gap. Overrides unified spacing.' },
  },
  render: args => html`
    <simple-grid-layout
      cols=${args.cols}
      spacing=${args.spacing}
      .verticalSpacing=${args.verticalSpacing}
      style="border: 2px dashed #888; padding: 10px;"
    >
      ${map(Array.from({ length: args.cols * 2 }), (_, i) => box(i))}
    </simple-grid-layout>
  `,
} satisfies Meta;

export const Default: StoryObj = {
  args: {
    cols: 2,
    spacing: '1rem',
    verticalSpacing: undefined,
  },
};

export const FourColumns: StoryObj = {
  args: {
    ...Default.args,
    cols: 4,
  },
};

export const DifferentSpacing: StoryObj = {
  name: 'Different Horizontal & Vertical Spacing',
  args: {
    cols: 3,
    spacing: '2rem',
    verticalSpacing: '0.5rem',
  },
};
