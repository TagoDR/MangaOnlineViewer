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
  Object.keys(useSettings().keybinds).map(
    (kb) =>
      `<label for='${kb}'>${getLocaleString(kb)}:</label>
        <input type='text' class='KeybindInput' id='${kb}' name='${kb}'
         value='${useSettings().keybinds[kb]?.join(' , ') || ''}'>`,
  ).concat(`
<div id='HotKeysRules'>
    <h3>Supported Keys</h3>
    <p>HotKeys understands the following modifiers: <code>⇧</code>, <code>shift</code>, <code>option</code>, <code>⌥</code>, <code>alt</code>, <code>ctrl</code>, <code>control</code>, <code>command</code>, and <code>⌘</code>.</p>
    <p>The following special keys can be used for shortcuts: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 through f19, num_0 through num_9, num_multiply,
        num_add, num_enter, num_subtract, num_decimal, num_divide.</p>
    <p><code>⌘</code> Command<code>⌃</code> Control<code>⌥</code> Option(alt)<code>⇧</code> Shift<code>⇪</code> Caps Lock(Capital)<code>↩︎</code> return/Enter space</p>
</div>
  `);

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
</div>`;

export default KeybindingsPanel;
