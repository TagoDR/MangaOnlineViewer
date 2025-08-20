import { html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { join } from 'lit-html/directives/join.js';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { getAppStateValue, getLocaleString, getSettingsValue } from '../core/settings.ts';
import { buttonPanelsClose, editKeybindings, saveKeybindings } from './events/panels.ts';
import { IconDeviceFloppy, IconPencil, IconX } from './icons';

/**
 * Renders a read-only list of the current keybindings.
 * Each keybinding is displayed with its description and the assigned keys.
 *
 * @returns An array of Lit templates, each representing a keybinding entry.
 */
export const keybindList = () => {
  const keybinds = getSettingsValue('keybinds');
  return Object.keys(keybinds).map(kb => {
    const keys = keybinds[kb]?.length
      ? join(
          keybinds[kb]?.map(key => html`<kbd class="dark">${key}</kbd>`),
          ' / ',
        )
      : '';
    return html`<span>${getLocaleString(kb)}:</span> <span>${keys}</span>`;
  });
};

/**
 * Renders an editable form for modifying keybindings.
 * It creates a text input for each keybinding action and displays the current assignments.
 * Also includes a section with rules for defining keybindings.
 *
 * @returns An array of Lit templates for the keybinding editor form.
 */
export const keybindEditor = () =>
  Object.keys(getSettingsValue('keybinds'))
    .map(
      kb =>
        html`<label for="${kb}">${getLocaleString(kb)}:</label>
          <input
            type="text"
            class="KeybindInput"
            id="${kb}"
            name="${kb}"
            value="${getSettingsValue('keybinds')[kb]?.join(' , ') ?? ''}"
          />`,
    )
    .concat(html` <div id="HotKeysRules">${unsafeHTML(getLocaleString('KEYBIND_RULES'))}</div>`);

/**
 * Renders the keybindings panel as a Lit template.
 * This panel can switch between a read-only view and an editor for keybindings.
 * Its visibility is controlled by the `panel` property in the application state.
 *
 * @returns A Lit `TemplateResult` representing the keybindings panel.
 */
const KeybindingsDialog = () => html`
  <div
    id="KeybindingsPanel"
    class="${classMap({
      panel: true,
      visible: getAppStateValue('panel').startsWith('keybindings'),
    })}"
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
          ? html` <button
            id="SaveKeybindings"
            class="ControlButton"
            type="button"
            title="${getLocaleString('SAVE_KEYBINDS')}"
            @click=${saveKeybindings}
          >
            ${IconDeviceFloppy} ${getLocaleString('BUTTON_SAVE')}
          </button>`
          : html` <button
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

export default KeybindingsDialog;
