import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '../ui/components/Pagination.ts';

export default {
  title: 'Components/Pagination',
  component: 'mov-pagination',
  argTypes: {
    currentPage: { control: 'number' },
    totalPages: { control: 'number' },
    startPage: { control: 'number' },
    onPrevPage: { action: 'prev-page' },
    onNextPage: { action: 'next-page' },
    onGoToPage: { action: 'goto-page' },
  },
  render: args => html`
    <div style="position: relative; height: 100px; padding-top: 20px;">
      <mov-pagination
        .currentPage=${args.currentPage}
        .totalPages=${args.totalPages}
        .startPage=${args.startPage}
        @prev-page=${args.onPrevPage}
        @next-page=${args.onNextPage}
        @goto-page=${(e: CustomEvent) => args.onGoToPage(e.detail)}
      ></mov-pagination>
    </div>
  `,
} satisfies Meta;

export const Default: StoryObj = {
  args: {
    currentPage: 10,
    totalPages: 20,
    startPage: 1,
  },
};

export const AtStart: StoryObj = {
  name: 'At Start',
  args: {
    ...Default.args,
    currentPage: 1,
  },
};

export const AtEnd: StoryObj = {
  name: 'At End',
  args: {
    ...Default.args,
    currentPage: 20,
  },
};

export const SinglePage: StoryObj = {
  name: 'Single Page',
  args: {
    currentPage: 1,
    totalPages: 1,
    startPage: 1,
  },
};
