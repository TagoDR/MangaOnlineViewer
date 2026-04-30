import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '../../ui/components/FileInput.ts';

export default {
  title: 'Components/FileInput',
  component: 'mov-file-input',
  argTypes: {
    accept: {
      control: 'text',
      description: 'Accepted file types',
    },
    multiple: {
      control: 'boolean',
      description: 'Allows multiple files',
    },
    directory: {
      control: 'boolean',
      description: 'Allows selecting directories',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    required: {
      control: 'boolean',
      description: 'Required state',
    },
    label: {
      control: 'text',
      description: 'Component label',
    },
    buttonLabel: {
      control: 'text',
      description: 'Trigger button label',
    },
    appearance: {
      control: 'select',
      options: ['accent', 'filled', 'outline', 'light', 'subtle', 'plain'],
      description: 'Button appearance',
    },
  },
  render: args => html`
    <mov-file-input
      accept="${args.accept}"
      ?multiple="${args.multiple}"
      ?directory="${args.directory}"
      ?disabled="${args.disabled}"
      ?required="${args.required}"
      label="${args.label}"
      button-label="${args.buttonLabel}"
      appearance="${args.appearance}"
      @change="${(e: CustomEvent) => console.log('Change:', e.detail)}"
    ></mov-file-input>
  `,
} satisfies Meta;

export const Default: StoryObj = {
  args: {
    label: 'Select a file',
    buttonLabel: 'Choose File',
    appearance: 'outline',
  },
};

export const ImageOnly: StoryObj = {
  args: {
    label: 'Select an image',
    accept: 'image/*',
    appearance: 'accent',
  },
};

export const MultipleFiles: StoryObj = {
  args: {
    label: 'Select multiple files',
    multiple: true,
    appearance: 'filled',
  },
};

export const Directory: StoryObj = {
  args: {
    label: 'Select a directory',
    directory: true,
    buttonLabel: 'Select Folder',
  },
};

export const ZipFiles: StoryObj = {
  args: {
    label: 'Select a ZIP or Comic file',
    accept: '.zip, .cbz, .cbr, .7z, .rar',
    buttonLabel: 'Select Archive',
  },
};
