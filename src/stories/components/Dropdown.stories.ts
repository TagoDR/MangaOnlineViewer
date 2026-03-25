import type { Meta, StoryObj } from '@storybook/web-components';
import { html, nothing } from 'lit';
import '../../ui/components/Dropdown.ts';
import '../../ui/components/Icon.ts';
import { classMap } from 'lit/directives/class-map.js';
import { getAppStateValue, getLocaleString, getSettingsValue } from '../../core/settings.ts';
import { toggleAutoScroll } from '../../ui/events/autoscroll.ts';
import { buttonKeybindingsOpen } from '../../ui/events/panels.ts';
import { updateViewMode } from '../../ui/events/viewmode.ts';

const keybinds = getSettingsValue('keybinds');
const renderKeybind = (action: keyof typeof keybinds) => {
  if (getAppStateValue('device') !== 'desktop') return nothing;
  const keys = keybinds[action];
  if (!keys || keys.length === 0) {
    return nothing;
  }
  return keys.map(key => html`<kbd slot="details">${key}</kbd>`);
};

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
      <button slot="trigger" class="dropdown-trigger">Dropdown Trigger</button>
      <mov-dropdown-item>
        <mov-icon slot="icon" name="IconSettings"></mov-icon>
        Settings
      </mov-dropdown-item>
      <mov-dropdown-item selected>
        <mov-icon slot="icon" name="IconKeyboard"></mov-icon>
        Keybindings
      </mov-dropdown-item>
      <mov-divider></mov-divider>
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
      id="ViewDropdown"
      checkable
      open
    >
      <mov-button
        slot="trigger"
        title="${getLocaleString('VIEW_MENU')}"
      >
        <mov-icon
          label="View"
          name="IconApiBook"
        ></mov-icon>
      </mov-button>
      <mov-dropdown-item
        id="webComic"
        class="tablets"
        @click="${updateViewMode('WebComic')}"
        ?selected=${getSettingsValue('viewMode') === 'WebComic'}
      >
        <mov-icon
          slot="icon"
          name="IconSpacingVertical"
        ></mov-icon>
        ${getLocaleString('VIEW_MODE_WEBCOMIC')} ${renderKeybind('VIEW_MODE_WEBCOMIC')}
      </mov-dropdown-item>
      <mov-dropdown-item
        id="verticalMode"
        class="tablets"
        @click="${updateViewMode('Vertical')}"
        ?selected=${getSettingsValue('viewMode') === 'Vertical'}
      >
        <mov-icon
          slot="icon"
          name="IconArrowAutofitDown"
        ></mov-icon>
        ${getLocaleString('VIEW_MODE_VERTICAL')} ${renderKeybind('VIEW_MODE_VERTICAL')}
      </mov-dropdown-item>
      <mov-divider></mov-divider>
      <mov-dropdown-item
        id="ltrMode"
        @click="${updateViewMode('FluidLTR')}"
        ?selected=${getSettingsValue('viewMode') === 'FluidLTR'}
      >
        <mov-icon
          slot="icon"
          name="IconArrowAutofitRight"
        ></mov-icon>
        ${getLocaleString('VIEW_MODE_LEFT')} ${renderKeybind('VIEW_MODE_LEFT')}
      </mov-dropdown-item>
      <mov-dropdown-item
        id="rtlMode"
        @click="${updateViewMode('FluidRTL')}"
        ?selected=${getSettingsValue('viewMode') === 'FluidRTL'}
      >
        <mov-icon
          slot="icon"
          name="IconArrowAutofitLeft"
        ></mov-icon>
        ${getLocaleString('VIEW_MODE_RIGHT')} ${renderKeybind('VIEW_MODE_RIGHT')}
      </mov-dropdown-item>
      <mov-divider></mov-divider>
      <mov-dropdown-item
        id="BookMode"
        @click="${updateViewMode('Book')}"
        ?selected=${getSettingsValue('viewMode') === 'Book'}
      >
        <mov-icon
          slot="icon"
          name="IconBookArrowRight"
        ></mov-icon>
        ${getLocaleString('VIEW_MODE_BOOK')} ${renderKeybind('VIEW_MODE_BOOK')}
      </mov-dropdown-item>
      <mov-dropdown-item
        id="MangaMode"
        @click="${updateViewMode('Manga')}"
        ?selected=${getSettingsValue('viewMode') === 'Manga'}
      >
        <mov-icon
          slot="icon"
          name="IconBookArrowLeft"
        ></mov-icon>
        ${getLocaleString('VIEW_MODE_MANGA')} ${renderKeybind('VIEW_MODE_MANGA')}
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
    <mov-dropdown id="FileDropdown" open>
      <mov-button
        slot="trigger"
        title="${getLocaleString('FILE_MENU')}"
      >
        <mov-icon
          label="File"
          name="IconDotsVertical"
        ></mov-icon>
      </mov-button>
      <mov-dropdown-item
        id="settings"
      >
        <mov-icon
          slot="icon"
          name="IconSettings"
        ></mov-icon>
        ${getLocaleString('SETTINGS')} ${renderKeybind('SETTINGS')}
      </mov-dropdown-item>
      <mov-dropdown-item
        id="keybindings"
        @click=${buttonKeybindingsOpen}
      >
        <mov-icon
          slot="icon"
          name="IconKeyboard"
        ></mov-icon>
        ${getLocaleString('KEYBINDINGS')}
      </mov-dropdown-item>
      <mov-divider></mov-divider>
      <mov-dropdown-item
        id="AutoScroll"
        class="${classMap({ running: getAppStateValue('autoScroll') })}"
        @click=${toggleAutoScroll}
      >
        <mov-icon
          slot="icon"
          name="${getAppStateValue('autoScroll') ? 'IconPlayerPause' : 'IconPlayerPlay'}"
        ></mov-icon>
        ${getLocaleString('SCROLL_START')} ${renderKeybind('SCROLL_START')}
      </mov-dropdown-item>
      <mov-divider></mov-divider>
      <mov-dropdown-item
        id="bookmarks"
        class="tablets"
      >
        <mov-icon
          slot="icon"
          name="IconBookmarks"
        ></mov-icon>
        ${getLocaleString('BOOKMARKS')}
      </mov-dropdown-item>
      <mov-dropdown-item
        id="pageControls"
        class="tablets phones"
        ?selected=${getSettingsValue('hidePageControls')}
      >
        <mov-icon
          slot="icon"
          name="IconListNumbers"
        ></mov-icon>
        ${getLocaleString('TOGGLE_CONTROLS')}
      </mov-dropdown-item>
    </mov-dropdown>
  `,
};
