import { getSettingsValue, setSettingsValue } from '../../core/settings';
import { addCustomTheme, refreshThemes } from '../themes';
import type { Shade } from '../../types';
import { addEvent } from './common';

export function changeColorScheme() {
  const isDark = getSettingsValue('colorScheme') === 'dark';
  setSettingsValue('colorScheme', isDark ? 'light' : 'dark');
  const elem = document.getElementById('MangaOnlineViewer');
  elem?.classList.remove(isDark ? 'dark' : 'light');
  elem?.classList.add(getSettingsValue('colorScheme'));
}

export function buttonSelectTheme(event: Event) {
  const target = event.currentTarget as HTMLElement;
  [...document.querySelectorAll('.ThemeRadio')].forEach(theme => {
    theme.classList.remove('selected');
  });
  target.classList.add('selected');
  document.getElementById('MangaOnlineViewer')?.setAttribute('data-theme', target.title);
  setSettingsValue('theme', target.title);
  const hue = document.querySelector<HTMLDivElement>('#Hue');
  const shade = document.querySelector<HTMLDivElement>('#Shade');
  if (target.title.startsWith('custom')) {
    hue?.classList.add('show');
    shade?.classList.remove('show');
  } else {
    hue?.classList.remove('show');
    shade?.classList.add('show');
  }
}

export function changeCustomTheme(event: Event) {
  const target = (event.currentTarget as HTMLInputElement).value;
  setSettingsValue('customTheme', target);
  addCustomTheme(target);
}

export function changeThemeShade(event: Event) {
  const target = parseInt((event.currentTarget as HTMLInputElement).value, 10);
  setSettingsValue('themeShade', target as Shade);
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
