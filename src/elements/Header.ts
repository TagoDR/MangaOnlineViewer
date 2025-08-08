import { useStores } from '@nanostores/lit';
import { html, LitElement, unsafeCSS } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { choose } from 'lit/directives/choose.js';
import { map } from 'lit/directives/map.js';
import {
  appState,
  getAppStateValue,
  getLocaleString,
  getSettingsValue,
  locale,
  setAppStateValue,
  settings,
} from '../core/settings';
import sequence from '../utils/sequence.ts';
import { slideZoom } from './events/zoom.ts';
import styles from './styles/Header.css?inline';

@customElement('mov-header')
@useStores(settings, locale, appState)
export default class Header extends LitElement {
  static styles = [unsafeCSS(styles)];

  @query('#prev') prev?: HTMLButtonElement;
  @query('#next') next?: HTMLButtonElement;
  @query('#series') series?: HTMLButtonElement;

  render() {
    const zoomMode = getSettingsValue('zoomMode');
    const zoomValue = getSettingsValue('zoomValue');
    const isPercentZoom = zoomMode === 'percent';
    const zoomLabel = isPercentZoom ? `${zoomValue}%` : zoomMode;

    return html`
      <group-layout justify="space-between">
        <wa-icon
          name="IconEReader2"
          label="MangaOnlineReader"
          style="font-size: 3rem;"
        ></wa-icon>
        <div class="ViewerTitle">
          <h1 id="MangaTitle">
            ${getAppStateValue('manga')?.title}
            <wa-icon
              name="${choose(getAppStateValue('device'), [
                ['desktop', () => 'device-desktop'],
                ['mobile', () => 'phone'],
                ['tablet', () => 'device-tablet'],
              ])}"
              label="Device"
            ></wa-icon>
          </h1>
        </div>
        <group-layout justify="flex-end">
          ${
            getAppStateValue('device') === 'desktop'
              ? html`
                ${
                  getSettingsValue('navbar') === 'disabled'
                    ? html`
                      <stack-layout
                        id="Counters"
                        class="ControlLabel"
                        justify="flex-end"
                      >
                        <group-layout>
                          ${getLocaleString('PAGES_LOADED')}:
                          <i>${getAppStateValue('loaded') ?? 0}</i> /
                          <b>
                            ${
                              (getAppStateValue('manga')?.pages ?? 0) -
                              ((getAppStateValue('manga')?.begin ?? 1) - 1)
                            }
                          </b>
                        </group-layout>
                        <group-layout>
                          <span class="ControlLabel"> ${getLocaleString('GO_TO_PAGE')}: </span>
                          <select
                            id="gotoPage"
                            @change=${this.onSelectGoTo}
                          >
                            <option value="#">#</option>
                            ${map(
                              sequence(
                                getAppStateValue('manga')?.pages ?? 0,
                                getAppStateValue('manga')?.begin ?? 1,
                              ),
                              index => html` <option value="${index}">${index}</option>`,
                            )}
                          </select>
                          <span>: ${getAppStateValue('currentPage')}</span>
                        </group-layout>
                      </stack-layout>
                    `
                    : ''
                }
                <wa-slider
                  .value="${getSettingsValue('zoomValue')}"
                  name="Zoom"
                  id="Zoom"
                  min="${getSettingsValue('minZoom')}"
                  max="200"
                  step="20"
                  with-markers
                  with-tooltip
                  label="Zoom : ${zoomLabel}"
                  @input=${slideZoom}
                >
                  <span slot="reference">${getSettingsValue('minZoom')}%</span>
                  <span slot="reference">100%</span>
                  <span slot="reference">200%</span>
                </wa-slider>
              `
              : ''
          }
        </group-layout>
      </group-layout>
    `;
  }

  onSelectGoTo(e: Event) {
    const value = (e.currentTarget as HTMLSelectElement).value;
    setAppStateValue('scrollToPage', parseInt(value, 10));
  }

  protected updated() {
    const link = getAppStateValue('link');
    if (link === 'next') {
      this.next?.click();
    } else if (link === 'prev') {
      this.prev?.click();
    } else if (link === 'series') {
      this.series?.click();
    }
  }
}

declare global {
  interface HTMLElementMangaPageMap {
    'mov-header': Header;
  }
}
