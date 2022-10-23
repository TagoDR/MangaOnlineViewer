import { IconX } from './icons';
import { keybinds } from '../events/hotkeys';
import { getLocaleString } from '../settings.js';

function formatKeyName(key: string) {
  let formatted = key;
  formatted = formatted.replace('Key', '');
  formatted = formatted.replace('Digit', '');
  formatted = formatted.replace('Numpad', 'Numpad ');
  formatted = formatted.replace('Subtract', '-');
  formatted = formatted.replace('Add', '+');
  formatted = formatted.replace('Minus', '-');
  formatted = formatted.replace('Equal', '=');
  formatted = formatted.replace('Divide', '/');
  formatted = formatted.replace('Multiply', '*');
  formatted = formatted.replace('Comma', ',');
  formatted = formatted.replace('Period', '.');
  formatted = formatted.replace('Slash', '/');
  formatted = formatted.replace('ArrowUp', '↑');
  formatted = formatted.replace('ArrowDown', '↓');
  formatted = formatted.replace('ArrowRight', '→');
  formatted = formatted.replace('ArrowLeft', '←');
  return formatted;
}

export const keybindings = keybinds
  .map((kb) => {
    const keys = kb.keys.map((key) => `<kbd class='dark'>${formatKeyName(key)}</kbd>`).join(' / ');
    return `${keys}: ${kb.name}<br/>`;
  })
  .join('\n');

const KeybindingsPanel = `
<div id="KeybindingsPanel" class="panel">
    <h2>${getLocaleString('KEYBINDINGS')}</h2>
    <button id="CloseKeybindings" class="closeButton">${IconX}</button>
    ${keybindings}
</div>`;

export default KeybindingsPanel;
