import { getSettingsValue } from '../core/settings';
import { css } from '../utils/code-tag';
import colors, { getTextColor, type IColor } from '../utils/colors';

function generateThemeCSS(name: string, primary: string, text: string) {
  return css`
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

const themesCSS = () =>
  themes().map(getNormalThemeCSS).join('') + getCustomThemeCSS(getSettingsValue('customTheme'));

export { themesCSS };
