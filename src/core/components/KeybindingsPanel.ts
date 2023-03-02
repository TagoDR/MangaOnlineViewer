import { IconDeviceFloppy, IconPencil, IconX } from './icons';
import { keybinds } from '../events/hotkeys';
import { getLocaleString } from '../settings';

function formatKeyName(key: string) {
  return key
    .replace('Key', '')
    .replace('Digit', '')
    .replace('Numpad', 'Numpad ')
    .replace('Subtract', '-')
    .replace('Add', '+')
    .replace('Minus', '-')
    .replace('Equal', '=')
    .replace('Divide', '/')
    .replace('Multiply', '*')
    .replace('Comma', ',')
    .replace('Period', '.')
    .replace('Slash', '/')
    .replace('ArrowUp', '↑')
    .replace('ArrowDown', '↓')
    .replace('ArrowRight', '→')
    .replace('ArrowLeft', '←');
}

export const keybindings = keybinds
  .map((kb) => {
    const keys = kb.keys.map((key) => `<kbd class='dark'>${formatKeyName(key)}</kbd>`).join(' / ');
    return `${getLocaleString(kb.name)}: ${keys}<br/>`;
  });
export const keybindEditor = keybinds
  .map(
    (kb) =>
      `${getLocaleString(kb.name)}: 
        <input type='text' id='${kb.name}' name='${kb.name}' value='${kb.keys.join(' , ')}'><br/>`,
  );

const KeybindingsPanel = `
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
      <button id='SaveKeybindings' class='ControlButton' type='button'
            title='${getLocaleString('SAVE_KEYBINDS')}'>
            ${IconDeviceFloppy}
            ${getLocaleString('BUTTON_SAVE')}
      </button>
    </div>
    <div id='KeybindingsList'>
      ${keybindings.join('\n')}
    </div>    
</div>`;

export default KeybindingsPanel;
