import { useStores } from '@nanostores/lit';
import { html, LitElement, nothing, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import { createRef, type Ref, ref } from 'lit/directives/ref.js';
import { join } from 'lit-html/directives/join.js';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import {
  appState,
  getAppStateValue,
  getLocaleString,
  getSettingsValue,
  locale,
  settings,
} from '../core/settings.ts';
import { buttonPanelsClose, editKeybindings, saveKeybindings } from './events/panels.ts';
import './components/Drawer.ts';
import keycss from '@gerhobbelt/keyscss/keys.css?inline';
import styles from './styles/keybindings.css?inline';

declare global {
  interface HTMLElementTagNameMap {
    'keybindings-panel': KeybindingsPanel;
  }
}

/**
 * Renders the keybindings panel as a Lit component.
 * This panel can switch between a read-only view and an editor for keybindings.
 * Its visibility is controlled by the `panel` property in the application state.
 */
@customElement('keybindings-panel')
@useStores(settings, locale, appState)
export default class KeybindingsPanel extends LitElement {
  static readonly styles = [unsafeCSS(styles), unsafeCSS(keycss)];

  private readonly keybindsRefs: Record<string, Ref<HTMLInputElement>> = Object.keys(
    getSettingsValue('keybinds'),
  ).reduce(
    (acc, key) => {
      acc[key] = createRef();
      return acc;
    },
    {} as Record<string, Ref<HTMLInputElement>>,
  );

  /**
   * Renders a read-only list of the current keybindings.
   * Each keybinding is displayed with its description and the assigned keys.
   *
   * @returns An array of Lit templates, each representing a keybinding entry.
   */
  private keybindList() {
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
  }

  /**
   * Renders an editable form for modifying keybindings.
   * It creates a text input for each keybinding action and displays the current assignments.
   * Also includes a section with rules for defining keybindings.
   *
   * @returns An array of Lit templates for the keybinding editor form.
   */
  private keybindEditor() {
    const keybinds = getSettingsValue('keybinds');
    return Object.keys(keybinds).map(
      kb =>
        html`<label for="${kb}">${getLocaleString(kb)}:</label>
          <input
            type="text"
            class="KeybindInput"
            id="${kb}"
            name="${kb}"
            value="${keybinds[kb]?.join(' , ') ?? nothing}"
            ${ref(this.keybindsRefs[kb])}
          />`,
    );
  }

  render() {
    return html`
      <mov-drawer
        id="KeybindingsPanel"
        ?open=${getAppStateValue('panel').startsWith('keybindings')}
        placement="end"
        @close=${buttonPanelsClose}
      >
        <h2 slot="label">${getLocaleString('KEYBINDINGS')}</h2>
        <div
          class="controls"
          slot="header-actions"
        >
          ${
            getAppStateValue('panel') === 'keybindingsEditor'
              ? html` <mov-button
                id="SaveKeybindings"
                type="button"
                title="${getLocaleString('SAVE_KEYBINDS')}"
                @click=${() => saveKeybindings(this.keybindsRefs)}
              >
                <mov-icon
                  name="IconDeviceFloppy"
                  size="16px"
                  slot="start"
                ></mov-icon>
                ${getLocaleString('BUTTON_SAVE')}
              </mov-button>`
              : html` <mov-button
                id="EditKeybindings"
                type="button"
                title="${getLocaleString('EDIT_KEYBINDS')}"
                @click=${editKeybindings}
              >
                <mov-icon
                  name="IconPencil"
                  size="16px"
                  slot="start"
                ></mov-icon>
                ${getLocaleString('BUTTON_EDIT')}
              </mov-button>`
          }
        </div>
        <div id="KeybindingsList">
          ${
            getAppStateValue('panel') === 'keybindingsEditor'
              ? this.keybindEditor()
              : this.keybindList()
          }
        </div>
        <div id="HotKeysRules">${unsafeHTML(getLocaleString('KEYBIND_RULES'))}</div>
      </mov-drawer>
    `;
  }
}
