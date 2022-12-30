import { useSettings } from './settings';
import { replaceStyleSheet, wrapStyle } from '../utils/css';
import colors, { getTextColor, IColor } from '../utils/colors';
import { IconCheck } from './components/icons';

function generateThemeCSS(name: string, primary: string, text: string) {
  // language=CSS
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
    theme[useSettings().themeShade],
    useSettings().themeShade < 500 ? theme['900'] : theme['50'],
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
<span class='${theme} ThemeRadio ${useSettings().theme === theme ? 'selected' : ''}'
      title='${theme}'      
>
${IconCheck}
</span>
`,
);

function refreshThemes() {
  themes().forEach((theme: IColor) => replaceStyleSheet(theme.name, getNormalThemeCSS(theme)));
  replaceStyleSheet('custom', getCustomThemeCSS(useSettings().customTheme));
}

const themesCSS =
  themes().map(addTheme).join('') +
  wrapStyle('custom', getCustomThemeCSS(useSettings().customTheme));

export { themesCSS, themesSelector, addCustomTheme, refreshThemes };
