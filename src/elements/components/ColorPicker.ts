import { css, html, LitElement, type PropertyValues } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
import tinycolor from 'tinycolor2';
import colors from '../../utils/colors';
import './ColorSwatch.ts';

declare global {
  interface HTMLElementTagNameMap {
    'mov-color-picker': ColorPicker;
  }
}

@customElement('mov-color-picker')
export class ColorPicker extends LitElement {
  static styles = css`
    :host {
      display: block;
      width: 250px;
    }

    .saturation-panel {
      position: relative;
      width: 100%;
      height: 180px;
      border-radius: var(--wa-border-radius-lg);
      cursor: crosshair;
      -webkit-tap-highlight-color: transparent;
    }

    .saturation-overlay-1,
    .saturation-overlay-2 {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: inherit;
    }

    .saturation-overlay-1 {
      background: linear-gradient(to right, #fff, transparent);
    }

    .saturation-overlay-2 {
      background: linear-gradient(to top, #000, transparent);
    }

    .saturation-thumb {
      position: absolute;
      width: 16px;
      height: 16px;
      border: 2px solid #fff;
      border-radius: 50%;
      box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
      transform: translate(-8px, -8px);
      pointer-events: none;
    }

    .sliders {
      display: flex;
      flex-direction: column;
      gap: 12px;
      margin-top: 12px;
    }

    .hue-slider {
      position: relative;
      width: 100%;
      height: 10px;
      border-radius: 5px;
      background: linear-gradient(to right, #f00, #ff0, #0f0, #0ff, #00f, #f0f, #f00);
      cursor: pointer;
    }

    .hue-thumb {
      position: absolute;
      top: 50%;
      width: 16px;
      height: 16px;
      border: 2px solid #fff;
      border-radius: 50%;
      box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
      transform: translate(-8px, -50%);
      pointer-events: none;
    }

    .swatches {
      display: grid;
      grid-template-columns: repeat(10, 1fr);
      gap: 8px;
      margin-top: 12px;
    }
  `;

  @property({ type: String })
  value = '#228be6';

  /** An optional array of color strings to use as swatches. If not provided, defaults will be used. */
  @property({ type: Array })
  swatches: string[] | null = null;

  @state()
  private hsv = { h: 0, s: 0, v: 0 };

  @state()
  private saturationThumbPosition = { x: 0, y: 0 };

  @state()
  private hueThumbPosition = 0;

  private saturationPanel?: HTMLDivElement;
  private hueSlider?: HTMLDivElement;

  private isDraggingSaturation = false;
  private isDraggingHue = false;

  connectedCallback() {
    super.connectedCallback();
    this.updateStateFromValue(this.value);
    window.addEventListener('mousemove', this.handleDrag);
    window.addEventListener('mouseup', this.handleDragEnd);
    window.addEventListener('touchmove', this.handleDrag);
    window.addEventListener('touchend', this.handleDragEnd);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('mousemove', this.handleDrag);
    window.removeEventListener('mouseup', this.handleDragEnd);
    window.removeEventListener('touchmove', this.handleDrag);
    window.removeEventListener('touchend', this.handleDragEnd);
  }

  willUpdate(changedProperties: PropertyValues) {
    if (changedProperties.has('value')) {
      this.updateStateFromValue(this.value);
    }
  }

  render() {
    const saturationPanelStyle = {
      backgroundColor: `hsl(${this.hsv.h}, 100%, 50%)`,
    };

    const saturationThumbStyle = {
      top: `${this.saturationThumbPosition.y}%`,
      left: `${this.saturationThumbPosition.x}%`,
      backgroundColor: tinycolor(this.hsv).toHexString(),
    };

    const hueThumbStyle = {
      left: `${this.hueThumbPosition}%`,
    };

    return html`
      <div
        class="saturation-panel"
        style=${styleMap(saturationPanelStyle)}
        @mousedown=${this.handleSaturationDragStart}
        @touchstart=${this.handleSaturationDragStart}
      >
        <div class="saturation-overlay-1"></div>
        <div class="saturation-overlay-2"></div>
        <div
          class="saturation-thumb"
          style=${styleMap(saturationThumbStyle)}
        ></div>
      </div>

      <div class="sliders">
        <div
          class="hue-slider"
          @mousedown=${this.handleHueDragStart}
          @touchstart=${this.handleHueDragStart}
        >
          <div
            class="hue-thumb"
            style=${styleMap(hueThumbStyle)}
          ></div>
        </div>
      </div>

      <div class="swatches">
        ${
          this.swatches
            ? this.swatches.map(
                color => html`
                <mov-color-swatch
                  .color=${color}
                  title=${color}
                  ?selected=${tinycolor.equals(this.value, color)}
                  @click=${() => this.selectSwatch(color)}
                ></mov-color-swatch>
              `,
              )
            : Object.values(colors).map(
                color => html`
                <mov-color-swatch
                  .color=${color['600']}
                  title=${color.name.charAt(0).toUpperCase() + color.name.slice(1)}
                  ?selected=${tinycolor.equals(this.value, color['600'])}
                  @click=${() => this.selectSwatch(color['600'])}
                ></mov-color-swatch>
              `,
              )
        }
      </div>
    `;
  }

  private updateStateFromValue(color: string) {
    const newHsv = tinycolor(color).toHsv();
    if (newHsv.h !== this.hsv.h || newHsv.s !== this.hsv.s || newHsv.v !== this.hsv.v) {
      this.hsv = newHsv;
      this.updateThumbPositions();
    }
  }

  private updateValueFromHsv() {
    const newValue = tinycolor(this.hsv).toHexString();
    if (this.value !== newValue) {
      this.value = newValue;
      this.dispatchEvent(
        new CustomEvent('change', {
          detail: { value: this.value },
          bubbles: true,
          composed: true,
        }),
      );
    }
  }

  private updateThumbPositions() {
    this.saturationThumbPosition = {
      x: this.hsv.s * 100,
      y: (1 - this.hsv.v) * 100,
    };
    this.hueThumbPosition = (this.hsv.h / 360) * 100;
  }

  private handleSaturationDragStart = (e: MouseEvent | TouchEvent) => {
    e.preventDefault();
    this.isDraggingSaturation = true;
    this.saturationPanel = this.shadowRoot?.querySelector('.saturation-panel') as HTMLDivElement;
    this.updateSaturation(e);
  };

  private handleHueDragStart = (e: MouseEvent | TouchEvent) => {
    e.preventDefault();
    this.isDraggingHue = true;
    this.hueSlider = this.shadowRoot?.querySelector('.hue-slider') as HTMLDivElement;
    this.updateHue(e);
  };

  private handleDrag = (e: MouseEvent | TouchEvent) => {
    if (this.isDraggingSaturation) {
      this.updateSaturation(e);
    }
    if (this.isDraggingHue) {
      this.updateHue(e);
    }
  };

  private handleDragEnd = () => {
    this.isDraggingSaturation = false;
    this.isDraggingHue = false;
  };

  private getEventPosition(e: MouseEvent | TouchEvent) {
    if ('touches' in e) {
      return { clientX: e.touches[0].clientX, clientY: e.touches[0].clientY };
    }
    return { clientX: e.clientX, clientY: e.clientY };
  }

  private updateSaturation(e: MouseEvent | TouchEvent) {
    if (!this.saturationPanel) return;
    const { clientX, clientY } = this.getEventPosition(e);
    const rect = this.saturationPanel.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const y = Math.max(0, Math.min(clientY - rect.top, rect.height));

    this.hsv.s = x / rect.width;
    this.hsv.v = 1 - y / rect.height;
    this.updateValueFromHsv();
  }

  private updateHue(e: MouseEvent | TouchEvent) {
    if (!this.hueSlider) return;
    const { clientX } = this.getEventPosition(e);
    const rect = this.hueSlider.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));

    this.hsv.h = (x / rect.width) * 360;
    this.updateValueFromHsv();
  }

  private selectSwatch(color: string) {
    this.value = color;
    this.dispatchEvent(
      new CustomEvent('change', {
        detail: { value: this.value },
        bubbles: true,
        composed: true,
      }),
    );
  }
}
