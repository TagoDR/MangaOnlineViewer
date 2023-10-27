import { getUserSettings, updateSettings } from '../../core/settings';
import { addCustomTheme, refreshThemes } from '../themes';
import type { Shade } from '../../types';

export function changeColorScheme() {
  const isDark = getUserSettings().colorScheme === 'dark';
  updateSettings({ colorScheme: isDark ? 'light' : 'dark' });
  const elem = document.getElementById('MangaOnlineViewer');
  elem?.classList.remove(isDark ? 'dark' : 'light');
  elem?.classList.add(getUserSettings().colorScheme);
}
export function buttonSelectTheme(elem: Element) {
  elem.addEventListener('click', (event: Event) => {
    const target = event.currentTarget as HTMLElement;
    [...document.querySelectorAll('.ThemeRadio')].forEach((theme) => {
      theme.classList.remove('selected');
    });
    target.classList.add('selected');
    document.getElementById('MangaOnlineViewer')?.setAttribute('data-theme', target.title);
    updateSettings({ theme: target.title });
    const hue = document.querySelector<HTMLDivElement>('#Hue');
    const shade = document.querySelector<HTMLDivElement>('#Shade');
    if (target.title.startsWith('custom')) {
      hue?.classList.add('show');
      shade?.classList.remove('show');
    } else {
      hue?.classList.remove('show');
      shade?.classList.add('show');
    }
  });
}
export function changeCustomTheme(event: Event) {
  const target = (event.currentTarget as HTMLInputElement).value;
  updateSettings({ customTheme: target });
  addCustomTheme(target);
}
export function changeThemeShade(event: Event) {
  const target = parseInt((event.currentTarget as HTMLInputElement).value, 10);
  updateSettings({ themeShade: target as Shade });
  refreshThemes();
}
function theming() {
  // ColorScheme Selector
  document.querySelector('#ColorScheme')?.addEventListener('click', changeColorScheme);
  // Theme Control Selector
  document.querySelectorAll('.ThemeRadio').forEach(buttonSelectTheme);
  // Custom theme Color Input
  document.querySelector('#CustomThemeHue')?.addEventListener('change', changeCustomTheme);
  // Theme Shade Input
  document.querySelector('#ThemeShade')?.addEventListener('input', changeThemeShade);
}

export default theming;
