import { useStores } from '@nanostores/lit';
import { css, html, LitElement, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import {
  appState,
  getAppStateValue,
  getLocaleString,
  locale,
  setAppStateValue,
  settings,
} from '../core/settings.ts';
import type { Panel } from '../types';
import { buttonRedirectURL, buttonStartDownload } from './events/globals.ts';
import styles from './styles/Menu.css?inline';

@customElement('mov-menu')
@useStores(settings, locale, appState)
export default class Menu extends LitElement {
  static styles = [unsafeCSS(styles), css``];

  render() {
    return html`
      <wa-button-group
        id="ChapterNavigation"
        size="large"
      >
        <wa-button
          id="prev"
          class="NavigationControlButton"
          href="${getAppStateValue('manga')?.prev ?? ''}"
          ?disabled="${!getAppStateValue('manga')?.prev}"
          variant="brand"
          appearance="filled"
          @click=${(e: MouseEvent) =>
            getAppStateValue('manga')?.prev ? null : buttonRedirectURL(e)}
        >
          <wa-icon
            name="arrow-big-left"
            label="${getLocaleString('PREVIOUS_CHAPTER')}"
          ></wa-icon>
        </wa-button>
        <wa-tooltip
          for="prev"
          placement="bottom-end"
        >
          ${getLocaleString('PREVIOUS_CHAPTER')}
        </wa-tooltip>

        <wa-button
          id="next"
          class="NavigationControlButton"
          href="${getAppStateValue('manga')?.next ?? ''}"
          ?disabled="${!getAppStateValue('manga')?.next}"
          variant="brand"
          appearance="filled"
          @click=${(e: MouseEvent) =>
            getAppStateValue('manga')?.next ? null : buttonRedirectURL(e)}
        >
          <wa-icon
            name="arrow-big-right"
            label="${getLocaleString('NEXT_CHAPTER')}"
          ></wa-icon>
        </wa-button>
        <wa-tooltip
          for="next"
          placement="bottom-end"
        >
          ${getLocaleString('NEXT_CHAPTER')}
        </wa-tooltip>

        <wa-button
          id="series"
          class="NavigationControlButton"
          href="${getAppStateValue('manga')?.series ?? ''}"
          ?disabled="${!getAppStateValue('manga')?.series}"
          variant="brand"
          appearance="filled"
          @click=${(e: MouseEvent) =>
            getAppStateValue('manga')?.series ? null : buttonRedirectURL(e)}
        >
          <wa-icon
            name="book-return"
            label="${getLocaleString('RETURN_CHAPTER_LIST')}"
          ></wa-icon>
        </wa-button>
        <wa-tooltip
          for="series"
          placement="bottom-end"
        >
          ${getLocaleString('RETURN_CHAPTER_LIST')}
        </wa-tooltip>

        <wa-dropdown>
          <wa-button
            id="dropdown-menu"
            slot="trigger"
            variant="brand"
            appearance="filled"
          >
            <wa-icon
              name="dots-vertical"
              label="${getLocaleString('MENU')}"
            ></wa-icon>
          </wa-button>
          <wa-tooltip
            for="dropdown-menu"
            placement="bottom-end"
          >
            ${getLocaleString('MENU')}
          </wa-tooltip>

          <wa-dropdown-item
            id="settings"
            value="settings"
            @click=${this.onClickOpenPanel}
          >
            <wa-icon
              slot="icon"
              name="settings"
              label="${getLocaleString('SETTINGS')}"
            ></wa-icon>
            ${getLocaleString('SETTINGS')}
            <span slot="details">${this.showKeybinds('SETTINGS')}</span>
          </wa-dropdown-item>
          <wa-tooltip
            for="settings"
            placement="left"
          >
            ${getLocaleString('SETTINGS')}
          </wa-tooltip>

          <wa-dropdown-item
            id="CommentsButton"
            ?disabled=${!getAppStateValue('manga')?.comments}
            @click=${!getAppStateValue('manga')?.comments ? null : this.onClickOpenPanel}
            value="comments"
          >
            <wa-icon
              slot="icon"
              name="message"
              label="${getLocaleString('DISPLAY_COMMENTS')}"
            ></wa-icon>
            ${getLocaleString('DISPLAY_COMMENTS')}
            <span slot="details">${this.showKeybinds('COMMENTS')}</span>
          </wa-dropdown-item>
          <wa-tooltip
            for="CommentsButton"
            placement="left"
          >
            ${getLocaleString('DISPLAY_COMMENTS')}
          </wa-tooltip>

          <wa-dropdown-item
            id="bookmarks"
            value="bookmarks"
            @click=${this.onClickOpenPanel}
          >
            <wa-icon
              slot="icon"
              name="bookmarks"
              label="${getLocaleString('BOOKMARKS')}"
            ></wa-icon>
            ${getLocaleString('BOOKMARKS')}
          </wa-dropdown-item>
          <wa-tooltip
            for="bookmarks"
            placement="left"
          >
            ${getLocaleString('BOOKMARKS')}
          </wa-tooltip>

          <wa-dropdown-item
            id="download"
            value="download"
            ?loading=${getAppStateValue('download') === 'working'}
            ?disabled=${getAppStateValue('download') !== 'available'}
            @click=${buttonStartDownload}
          >
            <wa-icon
              slot="icon"
              name="file-download"
              label="${getLocaleString('DOWNLOAD_ZIP')}"
            ></wa-icon>
            ${getLocaleString('DOWNLOAD_ZIP')}
          </wa-dropdown-item>
          <wa-tooltip
            for="download"
            placement="left"
          >
            ${getLocaleString('BUTTON_DOWNLOAD')}
          </wa-tooltip>
        </wa-dropdown>
      </wa-button-group>
    `;
  }

  showKeybinds(key: string): string {
    if (getAppStateValue('device') !== 'desktop') return '';
    return (
      settings
        .get()
        .keybinds?.[key] // ?.map((key) => `<kbd class="dark">${key}</kbd>`)
        ?.join(', ') ?? ''
    );
  }

  onClickOpenPanel(e: MouseEvent) {
    const value = (e.currentTarget as HTMLElement).getAttribute('value');
    setAppStateValue('panel', value as Panel);
  }
}
