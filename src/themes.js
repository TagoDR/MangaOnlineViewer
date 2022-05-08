import { settings } from './settings';

const scheme = new ColorScheme().scheme('mono').variation('default');

// Add custom Themes to the page
function addTheme(theme) {
  return `<style type='text/css' name='${theme[0]}'>
  .${theme[0]} .controlLabel, .${theme[0]} .ViewerTitle, .${theme[0]}, .PageFunctions a.visible, .${theme[0]} a, .${theme[0]} a:link, .${theme[0]} a:visited, .${theme[0]} a:active, .${theme[0]} a:focus{ text-decoration:none; color: ${theme[2]};}
  .${theme[0]} {background-repeat: repeat;background-position: 0 0;background-image: none;background-color: ${theme[1]};background-attachment: scroll;}
  .${theme[0]} #ImageOptions #menu .menuOuterArrow {border-left-width: 10px;border-left-style: solid;border-left-color: ${theme[4]};}
  .${theme[0]} #ImageOptions #menu .menuInnerArrow {border-left-width: 5px;border-left-style: solid;border-left-color: ${theme[1]};}
  .${theme[0]} .PageFunctions { border: 1px solid ${theme[3]}; border-bottom: medium none; border-left: medium none; border-right: medium none;}
  /*.${theme[0]} #Chapter { border: 1px solid ${theme[3]}; border-top: medium none; border-left: medium none; border-right: medium none;}*/
  .${theme[0]} .PageFunctions > span, .${theme[0]} .Thumbnail span {background: none repeat scroll 0 0 ${theme[4]};}
  .${theme[0]} .panel {background: none repeat scroll 0 0 ${theme[4]}; border: thin solid ${theme[3]};}
  .${theme[0]} .PageContent, .${theme[0]} .Thumbnail img { outline: 2px solid ${theme[3]}; background: none repeat scroll 0 0 ${theme[4]};}
  .${theme[0]} .ChapterControl a { border: 1px solid ${theme[3]}; background-color: ${theme[5]};
  </style>`;
}

function addCustomTheme(color) {
  const bg = scheme.from_hex(color.replace('#', '')).colors();
  return addTheme([
    'Custom_Dark',
    '#000000',
    `#${bg[2]}`,
    `#${bg[3]}`,
    `#${bg[0]}`,
    `#${bg[1]}`,
  ]) + addTheme([
    'Custom_Light',
    '#eeeeec',
    `#${bg[3]}`,
    `#${bg[2]}`,
    `#${bg[0]}`,
    `#${bg[1]}`,
  ]);
}

function addFullCustomTheme(body, text, lines, panel, buttons) {
  return addTheme([
    'Full_Custom',
    body,
    text,
    lines,
    panel,
    buttons,
  ]);
}

function loadThemes() {
  const bg = scheme.from_hex(settings.CustomTheme.replace('#', '')).colors();
  return [ //   1-body       2-text       3-lines     4-panel     5-buttons
    ['Dark', '#000000', '#ffffff', '#666666', '#333333', '#282828'],
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
    ['Full_Custom', settings.CustomThemeBody, settings.CustomThemeText, settings.CustomThemeLines, settings.CustomThemePanel, settings.CustomThemeButton],
  ];
}

const themes = loadThemes();
const themesSelector = themes.map((theme) => `<option value='${theme[0]}' ${settings.Theme === theme[0] ? 'selected' : ''}>${theme[0].replace('_', ' ')}</option>`);
const themesCSS = themes.map(addTheme).join('');

export {
  themesCSS,
  themesSelector,
  addCustomTheme,
  addFullCustomTheme,
};
