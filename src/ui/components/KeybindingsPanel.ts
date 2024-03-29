import { html } from '../../utils/code-tag';
import { IconDeviceFloppy, IconPencil, IconX } from '../icons';
import { getLocaleString, getUserSettings } from '../../core/settings';

export const keybindList = () =>
  Object.keys(getUserSettings().keybinds).map((kb) => {
    const keys = getUserSettings().keybinds[kb]?.length
      ? getUserSettings()
          .keybinds[kb]?.map((key) => html`<kbd class="dark">${key}</kbd>`)
          .join(' / ')
      : '';
    return html`<span>${getLocaleString(kb)}:</span> <span>${keys}</span>`;
  });
export const keybindEditor = () =>
  Object.keys(getUserSettings().keybinds)
    .map(
      // Language=html
      (kb) =>
        html`<label for="${kb}">${getLocaleString(kb)}:</label>
          <input
            type="text"
            class="KeybindInput"
            id="${kb}"
            name="${kb}"
            value="${getUserSettings().keybinds[kb]?.join(' , ') ?? ''}"
          />`,
    )
    .concat(html`<div id="HotKeysRules">${getLocaleString('KEYBIND_RULES')}</div>`);

// Language=html
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
