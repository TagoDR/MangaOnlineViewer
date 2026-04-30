import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '../ui/components/Pagination.ts';
import type { PaginationMode } from '../types';

export default {
  title: 'Components/Pagination',
  component: 'manga-pagination',
  argTypes: {
    mode: {
      control: { type: 'select' },
      options: ['disabled', 'slider', 'side-arrows', 'both'],
    },
    currentPage: { control: 'number' },
    totalPages: { control: 'number' },
    startPage: { control: 'number' },
    next: { control: 'text' },
    prev: { control: 'text' },
  },
  render: args => html`
    <div style="position: relative; height: 100px; padding-top: 20px;">
      <manga-pagination
        .mode=${args.mode}
        .currentPage=${args.currentPage}
        .totalPages=${args.totalPages}
        .startPage=${args.startPage}
        .next=${args.next}
        .prev=${args.prev}
      ></manga-pagination>
    </div>
  `,
} satisfies Meta;

const defaultArgs = {
  currentPage: 10,
  totalPages: 20,
  startPage: 1,
  next: '#',
  prev: '#',
};

export const Disabled: StoryObj = {
  args: {
    ...defaultArgs,
    mode: 'disabled' as PaginationMode,
  },
};

export const Slider: StoryObj = {
  args: {
    ...defaultArgs,
    mode: 'slider' as PaginationMode,
  },
};

export const SideArrows: StoryObj = {
  args: {
    ...defaultArgs,
    mode: 'side-arrows' as PaginationMode,
  },
};

export const Both: StoryObj = {
  args: {
    ...defaultArgs,
    mode: 'both' as PaginationMode,
  },
};

export const AtStart: StoryObj = {
  name: 'At Start',
  args: {
    ...defaultArgs,
    currentPage: 1,
    mode: 'slider' as PaginationMode,
  },
};

export const AtEnd: StoryObj = {
  name: 'At End',
  args: {
    ...defaultArgs,
    currentPage: 20,
    mode: 'slider' as PaginationMode,
  },
};

export const SinglePage: StoryObj = {
  name: 'Single Page',
  args: {
    ...defaultArgs,
    currentPage: 1,
    totalPages: 1,
    mode: 'slider' as PaginationMode,
  },
};
