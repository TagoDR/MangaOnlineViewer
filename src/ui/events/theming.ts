import { getSettingsValue, saveSettingsValue } from '../../core/settings';

/**
 * Toggles the color scheme between 'dark' and 'light' and applies the corresponding class to the root element.
 */
export function changeColorScheme() {
  const isDark = getSettingsValue('colorScheme') === 'dark';
  saveSettingsValue('colorScheme', isDark ? 'light' : 'dark');
  document.documentElement.classList.remove('dark', 'light', 'wa-dark', 'wa-light');
  document.documentElement.classList.add(
    getSettingsValue('colorScheme'),
    `wa-${getSettingsValue('colorScheme')}`,
  );
}

/**
 * Event handler for changing the theme color via a text input or color picker.
 * @param {Event} event - The input or change event from a color input element.
 */
export function changeTheme(event: Event | CustomEvent) {
  const value =
    event instanceof CustomEvent
      ? event.detail.value
      : (event.currentTarget as HTMLInputElement).value;
  saveSettingsValue('theme', value);
}
