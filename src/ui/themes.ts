import { getSettingsValue } from '../core/settings';
import { css } from '../utils/code-tag';
import colors, { getTextColor, type IColor } from '../utils/colors';
import { replaceStyleSheet, wrapStyle } from '../utils/css';

function generateThemeCSS(name: string, primary: string, text: string) {
  // Language=CSS
  return css`
    .ThemeRadio.${name}, #MangaOnlineViewer[data-theme='${name}'] {
      --theme-primary-color: ${primary};
      --theme-primary-text-color: ${text};
    }
  `;
}

function getNormalThemeCSS(theme: IColor) {
  return generateThemeCSS(
    theme.name,
    theme[getSettingsValue('themeShade')],
    getSettingsValue('themeShade') < 500 ? theme['900'] : theme['50'],
  );
}

function getCustomThemeCSS(hex: string) {
  return generateThemeCSS('custom', hex, getTextColor(hex));
}

// Add custom Themes to the page
function addTheme(theme: IColor): string {
  return wrapStyle(theme.name, getNormalThemeCSS(theme));
}

function addCustomTheme(hex: string) {
  replaceStyleSheet('custom', getCustomThemeCSS(hex));
}

const themes = (): IColor[] => Object.values(colors);

function refreshThemes() {
  themes().forEach((theme: IColor) => {
    replaceStyleSheet(theme.name, getNormalThemeCSS(theme));
  });
  replaceStyleSheet('custom', getCustomThemeCSS(getSettingsValue('customTheme')));
}

const themesCSS =
  themes().map(addTheme).join('') +
  wrapStyle('custom', getCustomThemeCSS(getSettingsValue('customTheme')));

export { themesCSS, addCustomTheme, refreshThemes };
