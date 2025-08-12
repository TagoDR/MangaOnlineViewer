import { getSettingsValue, saveSettingsValue } from '../../core/settings';

export function changeColorScheme() {
  const isDark = getSettingsValue('colorScheme') === 'dark';
  saveSettingsValue('colorScheme', isDark ? 'light' : 'dark');
  document.documentElement.classList.remove(isDark ? 'dark' : 'light');
  document.documentElement.classList.add(getSettingsValue('colorScheme'));
}

export function buttonSelectTheme(event: Event) {
  const target = event.currentTarget as HTMLElement;
  // title attribute contains the hex color
  saveSettingsValue('theme', target.title);
}

export function changeThemeHex(event: Event) {
  const value = (event.currentTarget as HTMLInputElement).value;
  saveSettingsValue('theme', value);
}
