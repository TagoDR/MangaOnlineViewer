import { updateSettings, useSettings } from '../settings';
import { addCustomTheme, refreshThemes } from '../themes';
import { Shade } from '../../types';

function theming() {
  // ColorScheme Selector
  function changeColorScheme() {
    const isDark = useSettings().colorScheme === 'dark';
    updateSettings({ colorScheme: isDark ? 'light' : 'dark' });
    const elem = document.getElementById('MangaOnlineViewer');
    elem?.classList.remove(isDark ? 'dark' : 'light');
    elem?.classList.add(useSettings().colorScheme);
  }

  document.querySelector('#ColorScheme')?.addEventListener('click', changeColorScheme);

  // Theme Control Selector
  function changeTheme(event: Event) {
    const target = event.currentTarget as HTMLElement;
    [...document.querySelectorAll('.ThemeRadio')].forEach((elem) =>
      elem.classList.remove('selected'),
    );
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
  }

  [...document.querySelectorAll('.ThemeRadio')].forEach((elem) =>
    elem.addEventListener('click', changeTheme),
  );

  // Custom theme Color Input
  function changeCustomTheme(event: Event) {
    const target = (event.currentTarget as HTMLInputElement).value;
    updateSettings({ customTheme: target });
    addCustomTheme(target);
  }

  document.querySelector('#CustomThemeHue')?.addEventListener('change', changeCustomTheme);

  // Theme Shade Input
  function changeThemeShade(event: Event) {
    const target = parseInt((event.currentTarget as HTMLInputElement).value, 10);
    updateSettings({ themeShade: target as Shade });
    refreshThemes();
  }

  document.querySelector('#ThemeShade')?.addEventListener('change', changeThemeShade);
}

export default theming;
