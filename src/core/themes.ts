import ColorScheme from 'color-scheme';
import settings from './settings';
import { replaceStyleSheet, wrapStyle } from '../utils/css';

const scheme = new ColorScheme().scheme('mono').variation('default');

function generateThemeCSS(theme: [string, string, string, string, string, string]) {
  // language=CSS
  return `
.${theme[0]},
[data-theme='${theme[0]}'] {
  --theme-body-background: ${theme[1]};
  --theme-text-color: ${theme[2]};
  --theme-primary-color: ${theme[4]};
  --theme-background-color: ${theme[5]};
  --theme-hightlight-color: ${theme[3]};
}
`;
}

// Add custom Themes to the page
function addTheme(theme: [string, string, string, string, string, string]): string {
  return wrapStyle(theme[0], generateThemeCSS(theme));
}

function swapTheme(theme: [string, string, string, string, string, string]) {
  replaceStyleSheet(theme[0], generateThemeCSS(theme));
}

function addCustomTheme(color: string) {
  const bg = scheme.from_hex(color.replace('#', '')).colors();
  swapTheme(['Custom_Dark', '#000000', `#${bg[2]}`, `#${bg[3]}`, `#${bg[0]}`, `#${bg[1]}`]);
  swapTheme(['Custom_Light', '#eeeeec', `#${bg[3]}`, `#${bg[2]}`, `#${bg[0]}`, `#${bg[1]}`]);
}

function addFullCustomTheme(
  body: string,
  text: string,
  lines: string,
  panel: string,
  buttons: string,
) {
  swapTheme(['Full_Custom', body, text, lines, panel, buttons]);
}

function loadThemes(): [string, string, string, string, string, string][] {
  const bg = scheme.from_hex(settings.customTheme.replace('#', '')).colors();
  return [
    //   1-body       2-text       3-lines     4-button     5-panel
    ['Dark', '#000000', '#ffffff', '#666666', '#333333', '#282828'],
    ['Grey', '#1A202C', '#d6d8e3', '#666666', '#535353', '#535353'],
    ['Light', '#eeeeec', '#2e3436', '#888a85', '#babdb6', '#c8cec2'],
    ['Clear', '#ffffff', '#2e3436', '#888a85', '#eeeeec', '#d3d7cf'],
    ['Dark_Blue', '#000000', '#91a0b0', '#586980', '#3e4b5b', '#222c3b'],
    ['Tango_Blue', '#000000', '#82a0bf', '#3d669b', '#304c77', '#102747'],
    ['Lime', '#000000', '#8abd59', '#608d34', '#38531f', '#233413'],
    ['Plum', '#000000', '#ad7fa8', '#75507b', '#49324d', '#311b37'],
    ['Light_Plum', '#eeeeec', '#5c3566', '#9b71a2', '#ad7fa8', '#d2b8ce'],
    ['Earthy', '#000000', '#ffffff', '#693d3d', '#46211a', '#683327'],
    ['Cool_Blues', '#000000', '#c4dfe6', '#66a5ad', '#07575b', '#003b46'],
    ['Custom_Dark', '#000000', `#${bg[2]}`, `#${bg[3]}`, `#${bg[0]}`, `#${bg[1]}`],
    ['Custom_Light', '#eeeeec', `#${bg[3]}`, `#${bg[2]}`, `#${bg[0]}`, `#${bg[1]}`],
    [
      'Full_Custom',
      settings.customThemeBody,
      settings.customThemeText,
      settings.customThemeLines,
      settings.customThemePanel,
      settings.customThemeButton,
    ],
  ];
}

const themes = loadThemes();
const themesSelector = themes.map(
  (theme) =>
    `<option value='${theme[0]}' ${
      settings.theme === theme[0] ? 'selected' : ''
    }>${theme[0].replace('_', ' ')}</option>`,
);
const themesCSS = themes.map(addTheme).join('');

export { themesCSS, themesSelector, addCustomTheme, addFullCustomTheme };
