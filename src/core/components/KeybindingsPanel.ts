import { IconDeviceFloppy, IconPencil, IconX } from './icons';
import { getLocaleString, useSettings } from '../settings';

export const keybindList = () =>
  Object.keys(useSettings().keybinds).map((kb) => {
    const keys = useSettings().keybinds[kb]?.length
      ? useSettings()
          .keybinds[kb]?.map((key) => `<kbd class='dark'>${key}</kbd>`)
          .join(' / ')
      : '';
    return `<span>${getLocaleString(kb)}:</span> <span>${keys}</span>`;
  });
export const keybindEditor = () =>
  Object.keys(useSettings().keybinds)
    .map(
      // language=html
      (kb) =>
        `<label for='${kb}'>${getLocaleString(kb)}:</label>
        <input type='text' class='KeybindInput' id='${kb}' name='${kb}'
               value='${useSettings().keybinds[kb]?.join(' , ') || ''}'>`,
    )
    .concat(`<div id='HotKeysRules'> ${getLocaleString('KEYBIND_RULES')}</div>`);

// language=html
const KeybindingsPanel = `
  <div id='KeybindingsOverlay' class='overlay'></div>
  <div id='KeybindingsPanel' class='panel'>
    <h2>${getLocaleString('KEYBINDINGS')}</h2>
    <button id='CloseKeybindings' class='closeButton' title='${getLocaleString('CLOSE')}'>
      ${IconX}
    </button>
    <div class='controls'>
      <button id='EditKeybindings' class='ControlButton' type='button'
              title='${getLocaleString('EDIT_KEYBINDS')}'>
        ${IconPencil}
        ${getLocaleString('BUTTON_EDIT')}
      </button>
      <button id='SaveKeybindings' class='ControlButton hidden' type='button'
              title='${getLocaleString('SAVE_KEYBINDS')}'>
        ${IconDeviceFloppy}
        ${getLocaleString('BUTTON_SAVE')}
      </button>
    </div>
    <div id='KeybindingsList'>
      ${keybindList().join('\n')}
    </div>
  </div>
`;

export default KeybindingsPanel;
