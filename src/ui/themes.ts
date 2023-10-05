import { getUserSettings } from '../core/settings.ts';
import { replaceStyleSheet, wrapStyle } from '../utils/css.ts';
import colors, { getTextColor, type IColor } from '../utils/colors.ts';
import { IconCheck } from './components/icons.ts';

function generateThemeCSS(name: string, primary: string, text: string) {
  // Language=CSS
  return `
      .${name},
      [data-theme='${name}'] {
          --theme-primary-color: ${primary};
          --theme-primary-text-color: ${text};
      }
  `;
}

function getNormalThemeCSS(theme: IColor) {
  return generateThemeCSS(
    theme.name,
    theme[getUserSettings().themeShade],
    getUserSettings().themeShade < 500 ? theme['900'] : theme['50'],
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

const themesSelector = [...Object.keys(colors).map((color) => colors[color].name)].map(
  (theme) => `
<span class='${theme} ThemeRadio ${getUserSettings().theme === theme ? 'selected' : ''}'
      title='${theme}'      
>
${IconCheck}
</span>
`,
);

function refreshThemes() {
  themes().forEach((theme: IColor) => {
    replaceStyleSheet(theme.name, getNormalThemeCSS(theme));
  });
  replaceStyleSheet('custom', getCustomThemeCSS(getUserSettings().customTheme));
}

const themesCSS =
  themes().map(addTheme).join('') +
  wrapStyle('custom', getCustomThemeCSS(getUserSettings().customTheme));

export { themesCSS, themesSelector, addCustomTheme, refreshThemes };
