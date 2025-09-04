import { css, html, LitElement, type PropertyValues } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
import Color from 'colorjs.io';
import colors from '../../utils/colors';
import './ColorSwatch.ts';

declare global {
  interface HTMLElementTagNameMap {
    'mov-color-picker': ColorPicker;
  }
}

/**
 * An interactive color picker component that allows users to select a color
 * from a saturation/value panel, a hue slider, or a predefined set of swatches.
 *
 * @element mov-color-picker
 *
 * @fires change - Dispatched whenever the selected color value changes. The `detail` object contains the new `value` as a hex string.
 */
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

  /**
   * The current selected color value as a hex string.
   * @type {string}
   */
  @property({ type: String })
  value = '#228be6';

  /**
   * An optional array of color strings to use as swatches.
   * If not provided, a default set of swatches will be generated.
   * @type {string[] | null}
   */
  @property({ type: Array })
  swatches: string[] | null = null;

  /**
   * The internal HSV representation of the current color.
   * @internal
   */
  @state()
  private hsv = { h: 0, s: 0, v: 0 };

  /**
   * The position of the thumb on the saturation/value panel.
   * @internal
   */
  @state()
  private saturationThumbPosition = { x: 0, y: 0 };

  /**
   * The position of the thumb on the hue slider.
   * @internal
   */
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

    const hsv = {
      h: this.hsv.h,
      s: this.hsv.s * 100,
      v: this.hsv.v * 100,
    };
    const saturationThumbStyle = {
      top: `${this.saturationThumbPosition.y}%`,
      left: `${this.saturationThumbPosition.x}%`,
      backgroundColor: new Color({ space: 'hsv', coords: [hsv.h, hsv.s, hsv.v] }).toString({
        format: 'hex',
      }),
    };

    const hueThumbStyle = {
      left: `${this.hueThumbPosition}%`,
    };

    const selectedColorHex = new Color(this.value).toString({ format: 'hex' });

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
                (color) => html`
                <mov-color-swatch
                  .color=${color}
                  title=${color}
                  ?selected=${selectedColorHex === new Color(color).toString({ format: 'hex' })}
                  @click=${() => this.selectSwatch(color)}
                ></mov-color-swatch>
              `,
              )
            : Object.entries(colors)
                .filter(([name]) => !['dark', 'gray', 'zinc', 'neutral', 'stone'].includes(name))
                .map(
                  ([name, color]) => html`
                    <mov-color-swatch
                      .color=${color['600']}
                      title=${name.charAt(0).toUpperCase() + name.slice(1)}
                      ?selected=${selectedColorHex ===
                      new Color(color['600']).toString({ format: 'hex' })}
                      @click=${() => this.selectSwatch(color['600'])}
                    ></mov-color-swatch>
                  `,
                )
        }
      </div>
    `;
  }

  /**
   * Updates the internal HSV state from a hex color value.
   * @internal
   */
  private updateStateFromValue(color: string) {
    const parsedColor = Color.parse(color);
    if (!parsedColor) return;
    const newHsvColor = new Color(parsedColor).to('hsv');
    const [h, s, v] = newHsvColor.coords;
    const newHsv = { h, s: s / 100, v: v / 100 };
    if (newHsv.h !== this.hsv.h || newHsv.s !== this.hsv.s || newHsv.v !== this.hsv.v) {
      this.hsv = newHsv;
      this.updateThumbPositions();
    }
  }

  /**
   * Updates the public `value` property from the internal HSV state and dispatches a change event.
   * @internal
   */
  private updateValueFromHsv() {
    const hsv = {
      h: this.hsv.h,
      s: this.hsv.s * 100,
      v: this.hsv.v * 100,
    };
    const newValue = new Color({ space: 'hsv', coords: [hsv.h, hsv.s, hsv.v] }).toString({
      format: 'hex',
    });
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

  /**
   * Recalculates the thumb positions based on the current HSV state.
   * @internal
   */
  private updateThumbPositions() {
    this.saturationThumbPosition = {
      x: this.hsv.s * 100,
      y: (1 - this.hsv.v) * 100,
    };
    this.hueThumbPosition = (this.hsv.h / 360) * 100;
  }

  /**
   * Initiates a drag operation on the saturation/value panel.
   * @internal
   */
  private handleSaturationDragStart = (e: MouseEvent | TouchEvent) => {
    e.preventDefault();
    this.isDraggingSaturation = true;
    this.saturationPanel = this.shadowRoot?.querySelector('.saturation-panel') as HTMLDivElement;
    this.updateSaturation(e);
  };

  /**
   * Initiates a drag operation on the hue slider.
   * @internal
   */
  private handleHueDragStart = (e: MouseEvent | TouchEvent) => {
    e.preventDefault();
    this.isDraggingHue = true;
    this.hueSlider = this.shadowRoot?.querySelector('.hue-slider') as HTMLDivElement;
    this.updateHue(e);
  };

  /**
   * Handles the movement during a drag operation on either the saturation panel or hue slider.
   * @internal
   */
  private handleDrag = (e: MouseEvent | TouchEvent) => {
    if (this.isDraggingSaturation) {
      this.updateSaturation(e);
    }
    if (this.isDraggingHue) {
      this.updateHue(e);
    }
  };

  /**
   * Ends the current drag operation.
   * @internal
   */
  private handleDragEnd = () => {
    this.isDraggingSaturation = false;
    this.isDraggingHue = false;
  };

  /**
   * Gets the client coordinates from a mouse or touch event.
   * @internal
   */
  private getEventPosition(e: MouseEvent | TouchEvent) {
    if ('touches' in e) {
      return { clientX: e.touches[0].clientX, clientY: e.touches[0].clientY };
    }
    return { clientX: e.clientX, clientY: e.clientY };
  }

  /**
   * Updates the saturation and value based on the user's interaction with the saturation panel.
   * @internal
   */
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

  /**
   * Updates the hue based on the user's interaction with the hue slider.
   * @internal
   */
  private updateHue(e: MouseEvent | TouchEvent) {
    if (!this.hueSlider) return;
    const { clientX } = this.getEventPosition(e);
    const rect = this.hueSlider.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));

    this.hsv.h = (x / rect.width) * 360;
    this.updateValueFromHsv();
  }

  /**
   * Sets the color value based on a clicked swatch and dispatches a change event.
   * @internal
   */
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
