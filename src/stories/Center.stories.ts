import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

export default {
  title: 'Layout/Center',
  component: 'center-layout',
  tags: ['autodocs'],
  render: () => html`
    <p>The component centers its content within the available space.</p>
    <center-layout style="border: 2px dashed #888; height: 200px; width: 100%;">
      <div style="padding: 20px; background-color: #e9ecef; border-radius: 4px;">
        Centered Content
      </div>
    </center-layout>
  `,
} satisfies Meta;

export const Default: StoryObj = {};
