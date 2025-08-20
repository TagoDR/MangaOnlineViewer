import { getSettingsValue, saveSettingsValue } from '../../core/settings';

/**
 * Toggles the color scheme between 'dark' and 'light' and applies the corresponding class to the root element.
 */
export function changeColorScheme() {
  const isDark = getSettingsValue('colorScheme') === 'dark';
  saveSettingsValue('colorScheme', isDark ? 'light' : 'dark');
  document.documentElement.classList.remove(isDark ? 'dark' : 'light');
  document.documentElement.classList.add(getSettingsValue('colorScheme'));
}

/**
 * Event handler for selecting a new theme color from a swatch.
 * It reads the color value from the element's `title` attribute.
 * @param {Event} event - The click event from a color swatch element.
 */
export function buttonSelectTheme(event: Event) {
  const target = event.currentTarget as HTMLElement;
  // The hex color is stored in the title attribute of the swatch
  saveSettingsValue('theme', target.title);
}

/**
 * Event handler for changing the theme color via a text input or color picker.
 * @param {Event} event - The input or change event from a color input element.
 */
export function changeThemeHex(event: Event) {
  const value = (event.currentTarget as HTMLInputElement).value;
  saveSettingsValue('theme', value);
}
