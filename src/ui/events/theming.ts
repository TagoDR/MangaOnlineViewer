import { getSettingsValue, saveSettingsValue } from '../../core/settings';
import type { Shade } from '../../types';
import { refreshThemes } from '../themes';
import { addEvent } from './common';

export function changeColorScheme() {
  const isDark = getSettingsValue('colorScheme') === 'dark';
  saveSettingsValue('colorScheme', isDark ? 'light' : 'dark');
  document.documentElement.classList.remove(isDark ? 'dark' : 'light');
  document.documentElement.classList.add(getSettingsValue('colorScheme'));
}

export function buttonSelectTheme(event: Event) {
  const target = event.currentTarget as HTMLElement;
  saveSettingsValue('theme', target.title);
}

export function changeCustomTheme(event: Event) {
  const target = (event.currentTarget as HTMLInputElement).value;
  saveSettingsValue('customTheme', target);
}

export function changeThemeShade(event: Event) {
  const target = parseInt((event.currentTarget as HTMLInputElement).value, 10);
  saveSettingsValue('themeShade', target as Shade);
  refreshThemes();
}

function theming() {
  // ColorScheme Selector
  document.querySelector('#ColorScheme')?.addEventListener('click', changeColorScheme);
  // Theme Control Selector
  document.querySelectorAll('.ThemeRadio').forEach(addEvent('click', buttonSelectTheme));
  // Custom theme Color Input
  document.querySelector('#CustomThemeHue')?.addEventListener('change', changeCustomTheme);
  // Theme Shade Input
  document.querySelector('#ThemeShade')?.addEventListener('input', changeThemeShade);
}

export default theming;
