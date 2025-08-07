import { getSettingsValue } from '../core/settings';
import { css } from '../utils/code-tag';
import colors, { getTextColor, type IColor } from '../utils/colors';
import { replaceStyleSheet } from '../utils/css';

function generateThemeCSS(name: string, primary: string, text: string) {
  const selector = `:root[data-theme='${name}']`;
  return css`
    ${selector},
    .ThemeRadio.${name},
    #MangaOnlineViewer.${name} {
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

const themes = (): IColor[] => Object.values(colors);

function refreshThemes() {
  replaceStyleSheet('themes', themesCSS());
}

const themesCSS = () =>
  themes().map(getNormalThemeCSS).join('') + getCustomThemeCSS(getSettingsValue('customTheme'));

export { themesCSS, refreshThemes };
