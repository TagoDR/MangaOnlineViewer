import ColorScheme from 'color-scheme';
import settings from './settings';
import { replaceStyleSheet, wrapStyle } from '../utils/css';
import colors, { base, IColor } from '../utils/colors';

const scheme = new ColorScheme().scheme('mono').variation('default');

function generateThemeCSS(theme: IColor) {
  // language=CSS
  return `
.${theme.name},
.${theme.name}_dark,
[data-theme='${theme.name}'],
[data-theme='${theme.name}_dark'] {
  --theme-body-background: ${colors.gray['900']};
  --theme-body-text-color: ${base.whiteAlpha['900']};
  --theme-text-color: ${base.whiteAlpha['900']};
  --theme-primary-color: ${theme['600']};
  --theme-background-color: ${theme['800']};
  --theme-hightlight-color: ${theme['700']};
}
.${theme.name}_light,
[data-theme='${theme.name}_light'] {
  --theme-body-background: ${base.white};
  --theme-body-text-color: ${colors.gray['800']};
  --theme-text-color: ${base.whiteAlpha['900']};
  --theme-primary-color: ${theme['600']};
  --theme-background-color: ${theme['900']};
  --theme-hightlight-color: ${theme['800']};
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
  (theme) => {
    const dark = `${theme}_dark`;
    const light = `${theme}_light`;
    return `
<option value='${dark}' ${settings.theme === dark ? 'selected' : ''}>
  ${dark.replace(/[_.]/, ' ')}
</option>
<option value='${light}' ${settings.theme === light ? 'selected' : ''}>
  ${light.replace(/[_.]/, ' ')}
</option>
`;
  },
);
const themesCSS = Object.values({ ...colors, custom: createCustomTheme(settings.customTheme) })
  .map(addTheme)
  .join('');

export { themesCSS, themesSelector, addCustomTheme };
