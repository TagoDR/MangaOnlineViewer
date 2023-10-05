import { IconDeviceFloppy, IconPencil, IconX } from './icons';
import { getAllLocaleStrings, getLocaleString, getUserSettings } from '../../core/settings';

export const keybindList = () =>
  Object.keys(getUserSettings().keybinds).map((kb) => {
    const keys = getUserSettings().keybinds[kb]?.length
      ? getUserSettings()
          .keybinds[kb]?.map((key) => `<kbd class='dark'>${key}</kbd>`)
          .join(' / ')
      : '';
    return `<span>${getAllLocaleStrings(kb)}:</span> <span>${keys}</span>`;
  });
export const keybindEditor = () =>
  Object.keys(getUserSettings().keybinds)
    .map(
      // Language=html
      (kb) =>
        `<label for='${kb}'>${getAllLocaleStrings(kb)}:</label>
        <input type='text' class='KeybindInput' id='${kb}' name='${kb}'
               value='${getUserSettings().keybinds[kb]?.join(' , ') ?? ''}'>`,
    )
    .concat(`<div id='HotKeysRules'> ${getAllLocaleStrings('KEYBIND_RULES')}</div>`);

// Language=html
const KeybindingsPanel = `
  <div id='KeybindingsOverlay' class='overlay'></div>
  <div id='KeybindingsPanel' class='panel'>
    <h2>${getAllLocaleStrings('KEYBINDINGS')}</h2>
    <button id='CloseKeybindings' class='closeButton' title='${getLocaleString('CLOSE')}'>
      ${IconX}
    </button>
    <div class='controls'>
      <button id='EditKeybindings' class='ControlButton' type='button'
              title='${getLocaleString('EDIT_KEYBINDS')}'>
        ${IconPencil}
        ${getAllLocaleStrings('BUTTON_EDIT')}
      </button>
      <button id='SaveKeybindings' class='ControlButton hidden' type='button'
              title='${getLocaleString('SAVE_KEYBINDS')}'>
        ${IconDeviceFloppy}
        ${getAllLocaleStrings('BUTTON_SAVE')}
      </button>
    </div>
    <div id='KeybindingsList'>
      ${keybindList().join('\n')}
    </div>
  </div>
`;

export default KeybindingsPanel;
