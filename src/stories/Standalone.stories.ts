import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { keyed } from 'lit/directives/keyed.js';
import '../ui/StandaloneLanding.ts';

export default {
  title: 'Features/StandaloneLanding',
  component: 'standalone-landing',
  argTypes: {
    test: {
      control: 'boolean',
      description: 'Whether to show the development test section',
    },
  },
  render: (args, context) => {
    // The viewer is destructive (it appends itself to document.body and hides other elements).
    // When switching between stories in Storybook, we need to clean up any existing viewer
    // to allow the landing page to be visible again.
    [...document.querySelectorAll('manga-online-viewer')].forEach(el => {
      el.remove();
    });

    // Use the story ID as the key to ensure the component is re-mounted on every story change.
    return html`${keyed(
      context.id,
      html` <standalone-landing ?test=${args.test}></standalone-landing> `,
    )}`;
  },
} satisfies Meta;

export const Default: StoryObj = {
  name: 'Standalone Landing Page',
  args: {
    test: true,
  },
};
