import { useStores } from '@nanostores/lit';
import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { appState, getLocaleString, getSettingsValue, locale, settings } from '../core/settings';
import {
  changeHeaderType,
  changeLazyStart,
  changeNavbarType,
  changeScrollHeight,
  checkAutoDownload,
  checkEnableComments,
  checkFitWidthOversize,
  checkHideImageControls,
  checkLazyLoad,
} from './events/settings.ts';

@customElement('mov-settings-others')
@useStores(settings, locale, appState)
export class SettingsPanelOthers extends LitElement {
  render() {
    return html`
      <div class="ControlLabel fitIfOversize">
        ${getLocaleString('FIT_WIDTH_OVERSIZED')}
        <wa-switch
          name="fitIfOversize"
          ?checked=${getSettingsValue('fitWidthIfOversize')}
          @change=${checkFitWidthOversize}
        ></wa-switch>
      </div>
      <div class="ControlLabel enableComments">
        ${getLocaleString('ENABLE_COMMENTS')}
        <wa-switch
          name="enableComments"
          ?checked=${getSettingsValue('enableComments')}
          @change=${checkEnableComments}
        ></wa-switch>
      </div>
      <div class="ControlLabel downloadZip">
        ${getLocaleString('DOWNLOAD_IMAGES')}
        <wa-switch
          name="downloadZip"
          ?checked=${getSettingsValue('downloadZip')}
          @change=${checkAutoDownload}
        ></wa-switch>
      </div>
      <div class="ControlLabel hidePageControls">
        ${getLocaleString('HIDE_CONTROLS')}
        <wa-switch
          name="hidePageControls"
          ?checked=${getSettingsValue('hidePageControls')}
          @change=${checkHideImageControls}
        ></wa-switch>
      </div>
      <div class="ControlLabel lazyLoadImages">
        ${getLocaleString('LAZY_LOAD_IMAGES_ENABLE')}
        <wa-switch
          name="lazyLoadImages"
          ?checked=${getSettingsValue('lazyLoadImages')}
          @change=${checkLazyLoad}
        ></wa-switch>
      </div>
      <div
        class=${classMap({
          ControlLabel: true,
          lazyStart: true,
          ControlLabelItem: true,
          show: getSettingsValue('lazyLoadImages'),
        })}
      >
        <span>
          ${getLocaleString('LAZY_LOAD_IMAGES')}
          <output
            id="lazyStartVal"
            for="lazyStart"
          >
            ${getSettingsValue('lazyStart')}
          </output>
        </span>
        <wa-slider
          value="${getSettingsValue('lazyStart')}"
          name="lazyStart"
          id="lazyStart"
          min="5"
          max="100"
          step="5"
          with-markers
          with-tooltip
          style="width: 100%"
          @change=${changeLazyStart}
        ></wa-slider>
      </div>
      <div class="ControlLabel headerType">
        ${getLocaleString('HEADER_TYPE')}
        <select
          id="headerType"
          value="${getSettingsValue('header')}"
          @change=${changeHeaderType}
        >
          <option value="hover">${getLocaleString('HEADER_HOVER')}</option>
          <option value="scroll">${getLocaleString('HEADER_SCROLL')}</option>
          <option value="click">${getLocaleString('HEADER_CLICK')}</option>
          <option value="fixed">${getLocaleString('HEADER_FIXED')}</option>
          <option value="simple">${getLocaleString('HEADER_SIMPLE')}</option>
        </select>
      </div>
      <div class="ControlLabel navbarType">
        ${getLocaleString('NAVBAR_TYPE')}
        <select
          id="navbarType"
          value="${getSettingsValue('navbar')}"
          @change=${changeNavbarType}
        >
          <option value="bottom">${getLocaleString('NAVBAR_BOTTOM')}</option>
          <option value="right">${getLocaleString('NAVBAR_RIGHT')}</option>
          <option value="left">${getLocaleString('NAVBAR_LEFT')}</option>
          <option value="disabled">${getLocaleString('NAVBAR_DISABLED')}</option>
        </select>
      </div>
      <div class="ControlLabel autoScroll">
        <span>
          ${getLocaleString('AUTO_SCROLL_HEIGHT')}
          <output
            id="scrollHeightVal"
            for="scrollHeight"
          >
            ${getSettingsValue('scrollHeight')} </output
          >px
        </span>
        <wa-slider
          value="${getSettingsValue('scrollHeight')}"
          name="scrollHeight"
          id="scrollHeight"
          min="1"
          max="100"
          step="1"
          with-tooltip
          style="width: 100%"
          @change=${changeScrollHeight}
        ></wa-slider>
      </div>
    `;
  }

  createRenderRoot() {
    return this; // Renders directly into the host element (light DOM)
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'mov-settings-others': SettingsPanelOthers;
  }
}
