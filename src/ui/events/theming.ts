import { getSettingsValue, saveSettingsValue } from '../../core/settings';
import type { Shade } from '../../types';
import { refreshThemes } from '../themes';

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
  const target = event.target as HTMLInputElement;
  (target.parentElement?.querySelector('#themeShadeVal') as HTMLOutputElement).value = target.value;
  saveSettingsValue('themeShade', parseInt(target.value, 10) as Shade);
  refreshThemes();
}
