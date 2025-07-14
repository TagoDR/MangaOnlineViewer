import { getLocaleString, getSettingsValue } from '../../core/settings';
import { html } from '../../utils/code-tag';
import { IconDeviceFloppy, IconPencil, IconX } from '../icons';

export const keybindList = () => {
  const keybinds = getSettingsValue('keybinds');
  return Object.keys(keybinds).map((kb) => {
    const keys = keybinds[kb]?.length
      ? keybinds[kb]?.map((key) => html`<kbd class="dark">${key}</kbd>`).join(' / ')
      : '';
    return html`<span>${getLocaleString(kb)}:</span> <span>${keys}</span>`;
  });
};
export const keybindEditor = () =>
  Object.keys(getSettingsValue('keybinds'))
    .map(
      (kb) =>
        html`<label for="${kb}">${getLocaleString(kb)}:</label>
          <input
            type="text"
            class="KeybindInput"
            id="${kb}"
            name="${kb}"
            value="${getSettingsValue('keybinds')[kb]?.join(' , ') ?? ''}"
          />`,
    )
    .concat(html` <div id="HotKeysRules">${getLocaleString('KEYBIND_RULES')}</div>`);

const KeybindingsPanel = () => html`
  <div id="KeybindingsPanel" class="panel">
    <h2>${getLocaleString('KEYBINDINGS')}</h2>
    <button id="CloseKeybindings" class="closeButton" title="${getLocaleString('CLOSE')}">
      ${IconX}
    </button>
    <div class="controls">
      <button
        id="EditKeybindings"
        class="ControlButton"
        type="button"
        title="${getLocaleString('EDIT_KEYBINDS')}"
      >
        ${IconPencil} ${getLocaleString('BUTTON_EDIT')}
      </button>
      <button
        id="SaveKeybindings"
        class="ControlButton hidden"
        type="button"
        title="${getLocaleString('SAVE_KEYBINDS')}"
      >
        ${IconDeviceFloppy} ${getLocaleString('BUTTON_SAVE')}
      </button>
    </div>
    <div id="KeybindingsList">${keybindList().join('\n')}</div>
  </div>
`;

export default KeybindingsPanel;
