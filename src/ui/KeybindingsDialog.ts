import keyscss from '@gerhobbelt/keyscss/keys.css?inline';
import { useStores } from '@nanostores/lit';
import { html, LitElement, unsafeCSS } from 'lit';
import { customElement, property, queryAll, state } from 'lit/decorators.js';
import { map } from 'lit/directives/map.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import {
  appState,
  getAppStateValue,
  getLocaleString,
  getSettingsValue,
  locale,
  saveSettingsValue,
  setAppStateValue,
  settings,
} from '../core/settings';
import keybindings from './events/keybindings.ts';
import styles from './styles/KeybindingsDialog.css?inline';

@customElement('mov-keybindings-dialog')
@useStores(settings, locale, appState)
export default class KeybindingsDialog extends LitElement {
  static styles = [unsafeCSS(keyscss), unsafeCSS(styles)];
  @property({ reflect: true })
  visible = false;
  @state()
  editor = false;
  @queryAll('.KeybindInput')
  keybindInputs?: NodeListOf<HTMLInputElement>;

  keybindList() {
    return map(Object.keys(getSettingsValue('keybinds')), kb => {
      const keys = getSettingsValue('keybinds')[kb]?.length
        ? settings
            .get()
            .keybinds[kb]?.map(key => `<kbd class="dark">${key}</kbd>`)
            .join(' / ')
        : '';
      return html`<span>${getLocaleString(kb)}:</span> <span>${unsafeHTML(keys)}</span>`;
    });
  }

  keybindEditor() {
    return html`${map(
      Object.keys(getSettingsValue('keybinds')),
      kb =>
        html`<label for="${kb}">${getLocaleString(kb)}:</label>
            <input
              type="text"
              class="KeybindInput"
              id="${kb}"
              name="${kb}"
              value="${getSettingsValue('keybinds')[kb]?.join(' , ') ?? ''}"
            />`,
    )}
      <div id="HotKeysRules">${unsafeHTML(getLocaleString('KEYBIND_RULES'))}</div>`;
  }

  render() {
    const isVisible = getAppStateValue('panel') === 'keybindings';
    return html` <wa-dialog
      id="KeybindingsPanel"
      ?open="${isVisible}"
      light-dismiss
      @wa-after-hide=${() => setAppStateValue('panel', 'none')}
    >
      <h2 slot="label">${getLocaleString('KEYBINDINGS')}</h2>
      <div
        slot="header-actions"
        class="controls wa-cluster-group"
      >
        <wa-button
          id="EditKeybindings"
          title="${getLocaleString('EDIT_KEYBINDS')}"
          variant="brand"
          appearance="outlined"
          class="${this.editor ? 'hidden' : ''}"
          @click=${() => {
            this.editor = true;
          }}
        >
          <wa-icon
            name="pencil"
            slot="start"
            label="${getLocaleString('EDIT_KEYBINDS')}"
          ></wa-icon>
          ${getLocaleString('BUTTON_EDIT')}
        </wa-button>
        <wa-button
          id="SaveKeybindings"
          title="${getLocaleString('SAVE_KEYBINDS')}"
          variant="brand"
          appearance="outlined"
          class="${!this.editor ? 'hidden' : ''}"
          @click=${this.saveKeybindings}
        >
          <wa-icon
            name="device-floppy"
            slot="start"
            label="${getLocaleString('SAVE_KEYBINDS')}"
          ></wa-icon>
          ${getLocaleString('BUTTON_SAVE')}
        </wa-button>
      </div>
      <div id="KeybindingsList">${this.editor ? this.keybindEditor() : this.keybindList()}</div>
    </wa-dialog>`;
  }

  saveKeybindings() {
    const newkeybinds: Record<string, string[] | undefined> = getSettingsValue('keybinds');
    this.keybindInputs?.forEach(input => {
      const elem = input as HTMLInputElement;
      newkeybinds[elem.name] = elem.value.split(',').map(value => value.trim());
    });
    saveSettingsValue('keybinds', newkeybinds);
    this.editor = false;
    keybindings();
  }
}

declare global {
  interface HTMLElementMangaPageMap {
    'mov-keybindings-dialog': KeybindingsDialog;
  }
}
