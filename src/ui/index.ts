/**
 * This file serves as the central setup for the application's UI components.
 * It imports all necessary WebAwesome components and custom Lit components,
 * and configures the icon library for use throughout the application.
 */
// biome-ignore assist/source/organizeImports: grouping

import './components/Icon.ts';
import './components/Button.ts';
import './components/ToggleButton.ts';
import './components/ColorSwatch.ts';
import './components/ColorPalette.ts';
import './components/ColorPanel.ts';
import './components/ColorPicker.ts';
import './components/SegmentedControl.ts';
import './components/ToggleSwitch.ts';
import './components/Pagination.ts';
import './components/Drawer.ts';
import './components/Dialog.ts';
import './components/Dropdown.ts';

import './Header.ts';
import './BookmarkPanel.ts';
import './KeybindingsPanel.ts';
import './Navbar.ts';
import './SettingsPanel.ts';
import './App.ts';

import '@moaqzdev/toast';

import '@awesome.me/webawesome/dist/styles/webawesome.css';
import '@awesome.me/webawesome/dist/components/button/button.js';
import '@awesome.me/webawesome/dist/components/button-group/button-group.js';
import '@awesome.me/webawesome/dist/components/color-picker/color-picker.js';
import '@awesome.me/webawesome/dist/components/drawer/drawer.js';
import '@awesome.me/webawesome/dist/components/dialog/dialog.js';
import '@awesome.me/webawesome/dist/components/slider/slider.js';
import '@awesome.me/webawesome/dist/components/icon/icon.js';
import '@awesome.me/webawesome/dist/components/dropdown/dropdown.js';
import '@awesome.me/webawesome/dist/components/dropdown-item/dropdown-item.js';

import { registerIconLibrary } from '@awesome.me/webawesome';
import { toKebabCase, toPascalCase } from '../utils/format.ts';
import * as styledIcons from './icons/StyledIcons.ts';
import * as rawIcons from './icons/svg.ts';

const tablerResolver = (name: string) =>
  `https://cdn.jsdelivr.net/npm/@tabler/icons/icons/${toKebabCase(name)}.svg`;

registerIconLibrary('default', {
  resolver: (name: string, family: string) => {
    const customIcon =
      family === 'unstyled'
        ? (rawIcons as Record<string, string>)[toPascalCase(name)]
        : (styledIcons as Record<string, string>)[toPascalCase(name)];
    if (customIcon) {
      // Use the bundled SVG content for custom icons, avoiding a network request.
      return `data:image/svg+xml,${encodeURIComponent(customIcon)}`;
    }
    // Fallback to Tabler icons if the icon is not found in the custom set.
    return tablerResolver(name);
  },
  mutator: (svg: SVGElement) => {
    svg.style.fill = 'none';
    svg.setAttribute('height', 'auto');
    svg.setAttribute('width', 'auto');
    svg.setAttribute('stroke', 'currentColor');
  },
});
