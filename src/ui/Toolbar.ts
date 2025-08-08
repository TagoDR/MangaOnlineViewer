import { useStores } from '@nanostores/lit';
import { html, LitElement, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import {
  appState,
  defaultSettings,
  getAppStateValue,
  getLocaleString,
  getSettingsValue,
  locale,
  setAppStateValue,
  setSettingsValue,
  settings,
} from '../core/settings';
import type { Panel, ViewMode } from '../types';
import { buttonGlobalHideImageControls } from './events/globals.ts';
import { changeGlobalZoom, changeZoomByStep } from './events/zoom.ts';
import styles from './styles/Toolbar.css?inline';

@customElement('mov-toolbar')
@useStores(settings, locale, appState)
export default class Toolbar extends LitElement {
  static styles = [unsafeCSS(styles)];

  render() {
    return html`
      <wa-button-group size="small">
        <wa-button
          id="enlarge"
          variant="brand"
          appearance="filled"
          title=${getLocaleString('ENLARGE')}
          @click=${changeZoomByStep(1)}
        >
          <wa-icon name="zoom-in-area"></wa-icon>
        </wa-button>
        <wa-tooltip
          for="enlarge"
          placement="bottom-start"
        >
          ${getLocaleString('ENLARGE')}
        </wa-tooltip>
        <wa-button
          id="restore"
          variant="brand"
          appearance="filled"
          title=${getLocaleString('RESTORE')}
          @click=${changeGlobalZoom('percent')}
        >
          <wa-icon name="zoom-pan"></wa-icon>
        </wa-button>
        <wa-tooltip
          for="restore"
          placement="bottom-start"
        >
          ${getLocaleString('RESTORE')}
        </wa-tooltip>
        <wa-button
          id="reduce"
          variant="brand"
          appearance="filled"
          title=${getLocaleString('REDUCE')}
          @click=${changeZoomByStep(-1)}
        >
          <wa-icon name="zoom-out-area"></wa-icon>
        </wa-button>
        <wa-tooltip
          for="reduce"
          placement="bottom-start"
        >
          ${getLocaleString('REDUCE')}
        </wa-tooltip>
        <wa-button
          id="fitWidth"
          variant="brand"
          appearance=${getSettingsValue('zoomMode') !== 'width' ? 'filled' : 'tonal'}
          title=${getLocaleString('FIT_WIDTH')}
          @click=${changeGlobalZoom('width')}
        >
          <wa-icon name="arrow-autofit-width"></wa-icon>
        </wa-button>
        <wa-tooltip
          for="fitWidth"
          placement="bottom-start"
        >
          ${getLocaleString('FIT_WIDTH')}
        </wa-tooltip>
        <wa-button
          id="fitHeight"
          variant="brand"
          appearance=${getSettingsValue('zoomMode') !== 'height' ? 'filled' : 'tonal'}
          title=${getLocaleString('FIT_HEIGHT')}
          @click=${changeGlobalZoom('height')}
        >
          <wa-icon name="arrow-autofit-height"></wa-icon>
        </wa-button>
        <wa-tooltip
          for="fitHeight"
          placement="bottom-start"
        >
          ${getLocaleString('FIT_HEIGHT')}
        </wa-tooltip>
        <wa-button
          id="keybindings"
          variant="brand"
          appearance="filled"
          title=${getLocaleString('KEYBINDINGS')}
          value="keybindings"
          @click=${this.onClickOpenPanel}
        >
          <wa-icon name="keyboard"></wa-icon>
        </wa-button>
        <wa-tooltip
          for="keybindings"
          placement="bottom-start"
        >
          ${getLocaleString('KEYBINDINGS')}
        </wa-tooltip>
      </wa-button-group>
      <wa-button-group size="small">
        <wa-button
          id="ltrMode"
          variant="brand"
          appearance=${getSettingsValue('viewMode') !== 'FluidLTR' ? 'filled' : 'tonal'}
          title=${getLocaleString('VIEW_MODE_LEFT')}
          value="FluidLTR"
          @click=${this.onClickChangeViewMode}
        >
          <wa-icon name="arrow-autofit-right"></wa-icon>
        </wa-button>
        <wa-tooltip
          for="ltrMode"
          placement="bottom-start"
        >
          ${getLocaleString('VIEW_MODE_LEFT')}
        </wa-tooltip>
        <wa-button
          id="verticalMode"
          variant="brand"
          appearance=${getSettingsValue('viewMode') !== 'Vertical' ? 'filled' : 'tonal'}
          title=${getLocaleString('VIEW_MODE_VERTICAL')}
          class="tablets"
          value="Vertical"
          @click=${this.onClickChangeViewMode}
        >
          <wa-icon name="arrow-autofit-down"></wa-icon>
        </wa-button>
        <wa-tooltip
          for="verticalMode"
          placement="bottom-start"
        >
          ${getLocaleString('VIEW_MODE_VERTICAL')}
        </wa-tooltip>
        <wa-button
          id="webComic"
          variant="brand"
          appearance=${getSettingsValue('viewMode') !== 'WebComic' ? 'filled' : 'tonal'}
          title=${getLocaleString('VIEW_MODE_WEBCOMIC')}
          class="tablets"
          value="WebComic"
          @click=${this.onClickChangeViewMode}
        >
          <wa-icon name="spacing-vertical"></wa-icon>
        </wa-button>
        <wa-tooltip
          for="webComic"
          placement="bottom-start"
        >
          ${getLocaleString('VIEW_MODE_WEBCOMIC')}
        </wa-tooltip>
        <wa-button
          id="rtlMode"
          variant="brand"
          appearance=${getSettingsValue('viewMode') !== 'FluidRTL' ? 'filled' : 'tonal'}
          title=${getLocaleString('VIEW_MODE_RIGHT')}
          value="FluidRTL"
          @click=${this.onClickChangeViewMode}
        >
          <wa-icon name="arrow-autofit-left"></wa-icon>
        </wa-button>
        <wa-tooltip
          for="rtlMode"
          placement="bottom-start"
        >
          ${getLocaleString('VIEW_MODE_RIGHT')}
        </wa-tooltip>
        <wa-button
          id="pageControls"
          variant="brand"
          appearance=${!getSettingsValue('hidePageControls') ? 'filled' : 'tonal'}
          title=${getLocaleString('TOGGLE_CONTROLS')}
          class="tablets"
          @click=${buttonGlobalHideImageControls}
        >
          <wa-icon name="list-numbers"></wa-icon>
        </wa-button>
        <wa-tooltip
          for="pageControls"
          placement="bottom-start"
        >
          ${getLocaleString('TOGGLE_CONTROLS')}
        </wa-tooltip>
        <wa-button
          id="AutoScroll"
          variant="brand"
          appearance=${!getAppStateValue('autoScroll') ? 'filled' : 'tonal'}
          title=${getLocaleString('SCROLL_START')}
          class="phones"
          @click=${() => setAppStateValue('autoScroll', !getAppStateValue('autoScroll'))}
        >
          <wa-icon
            name=${getAppStateValue('autoScroll') ? 'player-pause' : 'player-play'}
          ></wa-icon>
        </wa-button>
        <wa-tooltip
          for="AutoScroll"
          placement="bottom-start"
        >
          ${getLocaleString('SCROLL_START')}
        </wa-tooltip>
      </wa-button-group>
    `;
  }

  onClickChangeViewMode(e: MouseEvent) {
    const value = (e.currentTarget as HTMLElement).getAttribute('value');
    setSettingsValue('viewMode', value as ViewMode);
    if (value?.startsWith('Fluid')) {
      setSettingsValue('zoomMode', 'height');
      setSettingsValue('header', 'click');
    } else {
      setSettingsValue('header', defaultSettings.header);
      setSettingsValue('zoomMode', defaultSettings.zoomMode);
    }
  }

  onClickOpenPanel(e: MouseEvent) {
    const value = (e.currentTarget as HTMLElement).getAttribute('value');
    setAppStateValue('panel', value as Panel);
  }
}
