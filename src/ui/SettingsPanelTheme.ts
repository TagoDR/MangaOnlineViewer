import './components/ColorPicker.ts';
import type WaSelect from '@awesome.me/webawesome/dist/components/select/select.js';
import { useStores } from '@nanostores/lit';
import { html, LitElement } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { map } from 'lit/directives/map.js';
import tinycolor from 'tinycolor2';
import {
  appState,
  getLocaleString,
  getSettingsValue,
  locale,
  saveSettingsValue,
  settings,
} from '../core/settings';
import colors from '../utils/colors';
import type { ColorPicker } from './components/ColorPicker.ts';
import { refreshThemes } from './themes.ts';

@customElement('mov-settings-theme')
@useStores(settings, locale, appState)
export class SettingsPanelTheme extends LitElement {
  @query('#Variant')
  variant!: WaSelect;
  @query('#Appearance')
  appearance!: WaSelect;
  @query('#CustomThemeHue')
  hue!: ColorPicker;
  @query('#Palette')
  palette?: WaSelect;

  render() {
    const currentTheme = getSettingsValue('customTheme');
    return html`
      <div class="ControlLabel ThemeSelector">
        <div class="ControlLabel">
          <label>Color Scheme</label>
          <mov-color-scheme
            .scheme=${getSettingsValue('colorScheme')}
            @click=${this.toggleColorScheme}
            appearance="outlined filled"
            variant="brand"
          ></mov-color-scheme>
        </div>
        <div class="ControlLabel">
          <div style="display: flex; flex-wrap: wrap; gap: 8px;">
            <label>${getLocaleString('THEME')}</label>
            ${map(
              Object.values(colors),
              color => html`
                <mov-color-swatch
                  color="${color['600']}"
                  title="${color.name.charAt(0).toUpperCase() + color.name.slice(1)}"
                  @click=${() => this.selectThemeColor(color.name, color['600'])}
                  ?selected=${tinycolor.equals(currentTheme, color['600'])}
                ></mov-color-swatch>
              `,
            )}
          </div>
          <label>${getLocaleString('THEME_HUE')}</label>
          <mov-color-picker
            id="CustomThemeHue"
            .value=${getSettingsValue('customTheme')}
            .swatches=${Object.values(colors).flatMap(color => [
              // color['50'],
              // color['100'],
              // color['200'],
              // color['300'],
              // color['400'],
              // color['500'],
              color['600'],
              color['700'],
              color['800'],
              color['900'],
            ])}
            @change=${this.onChangeColorHue}
          ></mov-color-picker>
          <select
            id="Appearance"
            name="Appearance"
            label="Appearance"
          >
            <option value="accent">Accent</option>
            <option
              value="filled"
              selected
            >
              Filled
            </option>
            <option value="filled outlined">Filled+Outlined</option>
            <option value="outlined">Outlined</option>
            <option value="plain">Plain</option>
          </select>
          <select
            id="Variant"
            name="Variant"
            label="Variant"
            @change="${this.onChangeColorHue}"
          >
            <option
              value="brand"
              selected
            >
              brand
            </option>
            <option value="neutral">neutral</option>
            <option value="success">success</option>
            <option value="warning">warning</option>
            <option value="danger">danger</option>
          </select>
          <select id="Palette" @change="${this.changePalette}">
            <option value="default" selected>default</option>
            <option value="shoelace">shoelace</option>
            <option value="awesome">awesome</option>
          </select>
        </div>
      </div>
    `;
  }

  changePalette(e: CustomEvent) {
    const palette = (e.currentTarget as HTMLOptionElement)?.value;
    document.documentElement.classList.toggle('wa-theme-shoelace', palette === 'shoelace');
    document.documentElement.classList.toggle('wa-theme-awesome', palette === 'awesome');
    document.documentElement.classList.toggle('wa-theme-default', palette === 'default');
  }

  toggleColorScheme() {
    const newScheme = getSettingsValue('colorScheme') === 'dark' ? 'light' : 'dark';
    saveSettingsValue('colorScheme', newScheme);
    document.documentElement.classList.remove('wa-dark', 'wa-light', 'dark', 'light');
    document.documentElement.classList.add(newScheme, `wa-${newScheme}`);
  }

  onChangeColorHue(e: CustomEvent) {
    const colorValue = e.detail.value;
    document.documentElement.setAttribute('data-theme', 'custom');
    saveSettingsValue('theme', 'custom');
    saveSettingsValue('customTheme', colorValue);
    refreshThemes();
  }

  createRenderRoot() {
    return this; // Renders directly into the host element (light DOM)
  }

  /**
   * Sets the theme to the selected color from a swatch.
   */
  private selectThemeColor(name: string, color: string) {
    if (this.hue) {
      this.hue.value = color;
    }
    document.documentElement.setAttribute('data-theme', name);
    saveSettingsValue('theme', name);
    // Manually trigger the update logic since we changed the value programmatically.
    this.onChangeColorHue(new CustomEvent('change', { detail: { value: color } }));
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'mov-settings-theme': SettingsPanelTheme;
  }
}
