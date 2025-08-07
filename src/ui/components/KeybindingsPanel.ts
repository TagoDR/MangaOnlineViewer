import { html } from 'lit';
import { join } from 'lit-html/directives/join.js';
import { getAppStateValue, getLocaleString, getSettingsValue } from '../../core/settings';
import { buttonPanelsClose, editKeybindings, saveKeybindings } from '../events/panels';
import { IconDeviceFloppy, IconPencil, IconX } from '../icons';

export const keybindList = () => {
  const keybinds = getSettingsValue('keybinds');
  return Object.keys(keybinds).map((kb) => {
    const keys = keybinds[kb]?.length
      ? join(
          keybinds[kb]?.map((key) => html`<kbd class="dark">${key}</kbd>`),
          ' / ',
        )
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
    .concat(html`
      <div id="HotKeysRules">${getLocaleString('KEYBIND_RULES')}</div>`);

const KeybindingsPanel = () => html`
  <div
    id="KeybindingsPanel"
    class="panel"
  >
    <h2>${getLocaleString('KEYBINDINGS')}</h2>
    <button
      id="CloseKeybindings"
      class="closeButton"
      title="${getLocaleString('CLOSE')}"
      @click=${buttonPanelsClose}
    >
      ${IconX}
    </button>
    <div class="controls">
      ${
        getAppStateValue('panel') === 'keybindingsEditor'
          ? html`
            <button
              id="SaveKeybindings"
              class="ControlButton hidden"
              type="button"
              title="${getLocaleString('SAVE_KEYBINDS')}"
              @click=${saveKeybindings}
            >
              ${IconDeviceFloppy} ${getLocaleString('BUTTON_SAVE')}
            </button>`
          : html`
            <button
              id="EditKeybindings"
              class="ControlButton"
              type="button"
              title="${getLocaleString('EDIT_KEYBINDS')}"
              @click=${editKeybindings}
            >
              ${IconPencil} ${getLocaleString('BUTTON_EDIT')}
            </button>`
      }
    </div>
    <div id="KeybindingsList">
      ${getAppStateValue('panel') === 'keybindingsEditor' ? keybindEditor() : keybindList()}
    </div>
  </div>
`;

export default KeybindingsPanel;
