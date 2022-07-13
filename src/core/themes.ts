import ColorScheme from 'color-scheme';
import settings from './settings';
import { replaceStyleSheet, wrapStyle } from '../utils/css';
import colors, { IColor } from '../utils/colors';

const scheme = new ColorScheme().scheme('mono').variation('default');

function generateThemeCSS(theme: IColor) {
  // language=CSS
  return `
.${theme.name},
[data-theme='${theme.name}'] {
  --theme-primary-color: ${theme['600']};
  --theme-background-color: ${theme['800']};
  --theme-hightlight-color: ${theme['700']};
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

function createCustomTheme(hex: string): IColor {
  const bg = scheme.from_hex(hex.replace('#', '')).colors();
  return {
    name: 'custom',
    50: colors.gray['50'],
    100: colors.gray['100'],
    200: colors.gray['200'],
    300: colors.gray['300'],
    400: colors.gray['400'],
    500: colors.gray['500'],
    600: `#${bg[0]}`,
    700: colors.gray['700'],
    800: `#${bg[0]}`,
    900: `#${bg[1]}`,
  };
}

function addCustomTheme(hex: string) {
  swapTheme(createCustomTheme(hex));
}

const themesSelector = [...Object.keys(colors).map((color) => colors[color].name), 'custom'].map(
  (theme) => `
<option value='${theme}' ${settings.theme === theme ? 'selected' : ''}>
  ${theme.replace(/[_.]/, ' ')}
</option>
`,
);
const themesCSS = Object.values({ ...colors, custom: createCustomTheme(settings.customTheme) })
  .map(addTheme)
  .join('');

export { themesCSS, themesSelector, addCustomTheme };
