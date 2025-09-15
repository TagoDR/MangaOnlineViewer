import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '../../ui/components/dropdown.ts';
import '../../ui/components/Icon.ts';

export default {
  title: 'Components/Dropdown',
  component: 'mov-dropdown',
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Whether the dropdown is open',
    },
    checkable: {
      control: 'boolean',
      description: 'Whether the dropdown items should display a checkmark when selected',
    },
  },
  render: args => html`
    <mov-dropdown ?open=''${args.open}'' ?checkable=''${args.checkable}''>
      <button slot="trigger" class="HeaderButton dropdown-trigger">Dropdown Trigger</button>
      <mov-dropdown-item>
        <mov-icon slot="icon" name="IconSettings"></mov-icon>
        Settings
      </mov-dropdown-item>
      <mov-dropdown-item selected>
        <mov-icon slot="icon" name="IconKeyboard"></mov-icon>
        Keybindings
      </mov-dropdown-item>
      <mov-dropdown-item>
        <mov-icon slot="icon" name="IconBookmarks"></mov-icon>
        Bookmarks
      </mov-dropdown-item>
      <mov-dropdown-item>
        <mov-icon slot="icon" name="IconPlayerPlay"></mov-icon>
        Start Auto Scroll
      </mov-dropdown-item>
    </mov-dropdown>
  `,
} satisfies Meta;

export const Default: StoryObj = {
  args: {
    open: false,
    checkable: false,
  },
};

export const Checkable: StoryObj = {
  parameters: {
    controls: { disable: true },
  },
  render: () => html`
    <mov-dropdown
      open
      checkable
    >
      <button
        slot="trigger"
        class="HeaderButton dropdown-trigger"
      >
        View Mode
      </button>
      <mov-dropdown-item name="vertical">
        <mov-icon
          slot="icon"
          name="IconArrowAutofitDown"
        ></mov-icon>
        Vertical
      </mov-dropdown-item>
      <mov-dropdown-item
        name="ltr"
        selected
      >
        <mov-icon
          slot="icon"
          name="IconArrowAutofitRight"
        ></mov-icon>
        Left to Right
      </mov-dropdown-item>
      <mov-dropdown-item name="rtl">
        <mov-icon
          slot="icon"
          name="IconArrowAutofitLeft"
        ></mov-icon>
        Right to Left
      </mov-dropdown-item>
    </mov-dropdown>
  `,
};

export const WithDetails: StoryObj = {
  name: 'With Details (Keybinds)',
  parameters: {
    controls: { disable: true },
  },
  render: () => html`
    <mov-dropdown open>
      <button
        slot="trigger"
        class="HeaderButton dropdown-trigger"
      >
        File
      </button>
      <mov-dropdown-item>
        <mov-icon
          slot="icon"
          name="IconSettings"
        ></mov-icon>
        Settings
        <span slot="details">Ctrl+S</span>
      </mov-dropdown-item>
      <mov-dropdown-item>
        <mov-icon
          slot="icon"
          name="IconKeyboard"
        ></mov-icon>
        Keybindings
        <span slot="details">?</span>
      </mov-dropdown-item>
      <mov-dropdown-item>
        <mov-icon
          slot="icon"
          name="IconBookmarks"
        ></mov-icon>
        Bookmarks
        <span slot="details">Ctrl+B</span>
      </mov-dropdown-item>
    </mov-dropdown>
  `,
};
