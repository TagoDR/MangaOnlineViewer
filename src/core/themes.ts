import settings from './settings';
import { replaceStyleSheet, wrapStyle } from '../utils/css';
import colors, { customColor, IColor } from '../utils/colors';
import { IconCheck } from './components/icons';

function generateThemeCSS(theme: IColor) {
  // language=CSS
  return `
.${theme.name},
[data-theme='${theme.name}'] {
  --theme-primary-color: ${theme[settings.themeShade]};
  --theme-primary-text-color: ${settings.themeShade <= 500 ? theme['900'] : theme['50']};
}
`;
}

// Add custom Themes to the page
function addTheme(theme: IColor): string {
  return wrapStyle(theme.name, generateThemeCSS(theme));
}

function swapTheme(theme: IColor) {
  replaceStyleSheet(theme.name, generateThemeCSS(theme));
}

function addCustomTheme(hex: string) {
  swapTheme(customColor(hex));
}

const themes = () => Object.values({ ...colors, custom: customColor(settings.customTheme) });

const themesSelector = [...Object.keys(colors).map((color) => colors[color].name), 'custom'].map(
  (theme) => `
<span class='${theme} ThemeRadio ${settings.theme === theme ? 'selected' : ''}'
      title='${theme}'      
>
${IconCheck}
</span>
`,
);

function refreshThemes() {
  themes().forEach((theme: IColor) => replaceStyleSheet(theme.name, generateThemeCSS(theme)));
}

const themesCSS = themes().map(addTheme).join('');

export { themesCSS, themesSelector, addCustomTheme, refreshThemes };
