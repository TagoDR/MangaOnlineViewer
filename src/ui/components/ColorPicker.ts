import Color from 'colorjs.io';
import { css, html, LitElement, type PropertyValues } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';
import colors, { getTextColor } from '../../utils/colors';

declare global {
  interface HTMLElementTagNameMap {
    'color-picker': ColorPicker;
  }
}

/**
 * An interactive color picker component that allows users to select a color.
 *
 * @element color-picker
 * @fires input - Dispatched continuously while the color is changing.
 * @fires change - Dispatched when the color selection is finalized.
 */
@customElement('color-picker')
export class ColorPicker extends LitElement {
  static readonly styles = css`
    :host {
      display: inline-block;
      position: relative;
    }

    .picker-container {
      width: 250px;
      box-sizing: border-box;
    }

    .picker-container.popup {
      position: absolute;
      top: calc(100% + 4px);
      left: 0;
      z-index: 10;
      border: 1px solid var(--theme-border-color);
      border-radius: 8px;
      background: var(--theme-background-color);
      padding: 12px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }

    .picker-container.popup.right {
      left: auto;
      right: 0;
    }

    .saturation-panel {
      position: relative;
      width: 100%;
      height: 180px;
      border-radius: 8px;
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

    .swatch {
      width: 100%;
      aspect-ratio: 1;
      border-radius: 4px;
      border: 1px solid #dee2e6;
      cursor: pointer;
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      transition: transform 0.1s;
    }

    .swatch:hover {
      transform: scale(1.1);
    }

    .popup-trigger {
      width: 96px;
      height: 32px;
      border-radius: 4px;
      border: 1px solid var(--theme-background-color);
      padding: 4px;
      box-sizing: border-box;
      cursor: pointer;
      background-color: var(--theme-hightlight-color);
    }

    .preview {
      width: 100%;
      height: 100%;
      border-radius: 2px;
    }
  `;

  @property({ type: String })
  value = '#228be6';

  @property({ type: Array })
  swatches: string[] | null = null;

  @property({ type: String })
  mode: 'inline' | 'popup' = 'popup';

  @state()
  private opened = false;

  @state()
  private popupDirection: 'left' | 'right' = 'left';

  @state()
  private sourceSpace = 'srgb';

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
    window.addEventListener('mousemove', this.handleDrag.bind(this));
    window.addEventListener('mouseup', this.handleDragEnd.bind(this));
    window.addEventListener('touchmove', this.handleDrag.bind(this), { passive: false });
    window.addEventListener('touchend', this.handleDragEnd.bind(this));
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('mousemove', this.handleDrag.bind(this));
    window.removeEventListener('mouseup', this.handleDragEnd.bind(this));
    window.removeEventListener('touchmove', this.handleDrag.bind(this));
    window.removeEventListener('touchend', this.handleDragEnd.bind(this));
    window.removeEventListener('click', this.handleClickOutside.bind(this));
  }

  updated(changedProperties: PropertyValues) {
    if (changedProperties.has('mode')) {
      if (this.mode === 'popup') {
        window.addEventListener('click', this.handleClickOutside.bind(this));
      } else {
        window.removeEventListener('click', this.handleClickOutside.bind(this));
      }
    }
  }

  willUpdate(changedProperties: PropertyValues) {
    if (changedProperties.has('value')) {
      this.updateStateFromValue(this.value);
    }
    if (changedProperties.has('mode') && this.mode === 'inline') {
      this.opened = false;
    }
  }

  private handleClickOutside(e: MouseEvent) {
    if (this.opened && !e.composedPath().includes(this)) {
      this.opened = false;
    }
  }

  private togglePopup() {
    if (this.mode === 'popup') {
      if (!this.opened) {
        const triggerRect = this.getBoundingClientRect();
        const pickerWidth = 250; // from CSS

        let containerRect: { left: number; right: number };
        const drawer = this.closest('mov-drawer');
        if (drawer?.shadowRoot) {
          const dialog = drawer.shadowRoot.querySelector('dialog');
          if (dialog) {
            containerRect = dialog.getBoundingClientRect();
          } else {
            containerRect = { left: 0, right: window.innerWidth };
          }
        } else {
          containerRect = { left: 0, right: window.innerWidth };
        }

        // Default direction is 'left' (left-aligned, opens to the right)
        // Check if it overflows on the right boundary of the container
        if (triggerRect.left + pickerWidth > containerRect.right) {
          // It overflows. Check if it fits on the left.
          // The left boundary of the container is containerRect.left
          if (triggerRect.right - pickerWidth > containerRect.left) {
            this.popupDirection = 'right';
          } else {
            this.popupDirection = 'left';
          }
        } else {
          this.popupDirection = 'left';
        }
      }
      this.opened = !this.opened;
    }
  }

  private isSameColor(color1: string, color2: string): boolean {
    if (!color1 || !color2) return false;
    return Color.deltaE(color1, color2, { method: '2000' }) < 1;
  }

  private renderCheckIcon(color: string) {
    return html`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
        style=${styleMap({ stroke: getTextColor(color) })}
      >
        <path d="M5 12l5 5l10 -10" />
      </svg>
    `;
  }

  private renderPickerBody() {
    const saturationPanelStyle = {
      backgroundColor: `hsl(${this.hsv.h}, 100%, 50%)`,
    };

    const hsv = { h: this.hsv.h, s: this.hsv.s * 100, v: this.hsv.v * 100 };
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

    return html`
      <div
        class="saturation-panel"
        style=${styleMap(saturationPanelStyle)}
        @mousedown=${this.handleSaturationDragStart.bind(this)}
        @touchstart=${this.handleSaturationDragStart.bind(this)}
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
          @mousedown=${this.handleHueDragStart.bind(this)}
          @touchstart=${this.handleHueDragStart.bind(this)}
        >
          <div
            class="hue-thumb"
            style=${styleMap(hueThumbStyle)}
          ></div>
        </div>
      </div>

      <div class="swatches">
        ${(
          this.swatches ||
            Object.entries(colors)
              .filter(([name]) => !['dark', 'gray', 'zinc', 'neutral', 'stone'].includes(name))
              .map(([, color]) => color['600'])
        ).map(
          color => html`
            <button
              class="swatch"
              title=${color}
              style=${styleMap({ backgroundColor: color })}
              @click=${() => this.selectSwatch(color)}
            >
              ${this.isSameColor(this.value, color) ? this.renderCheckIcon(color) : ''}
            </button>
          `,
        )}
      </div>
    `;
  }

  render() {
    const pickerClasses = {
      'picker-container': true,
      popup: this.mode === 'popup',
      right: this.popupDirection === 'right',
    };

    const pickerBody = this.renderPickerBody();

    if (this.mode === 'popup') {
      return html`
        <div
          class="popup-trigger"
          @click=${this.togglePopup}
        >
          <div
            class="preview"
            style=${styleMap({ backgroundColor: this.value })}
          ></div>
        </div>
        ${this.opened ? html`<div class=${classMap(pickerClasses)}>${pickerBody}</div>` : ''}
      `;
    }

    return html`<div class=${classMap(pickerClasses)}>${pickerBody}</div>`;
  }

  private updateStateFromValue(color: string) {
    try {
      const newColor = new Color(color);
      this.sourceSpace = newColor.space.id;
      const srgbColor = newColor.to('srgb');
      const hsvColor = srgbColor.to('hsv');
      let [h, s, v] = hsvColor.coords;

      if (Number.isNaN(h)) {
        h = this.hsv.h || 0;
        s = 0;
      }

      s = Math.max(0, Math.min(100, s));
      v = Math.max(0, Math.min(100, v));

      const newHsv = { h, s: s / 100, v: v / 100 };

      if (newHsv.h !== this.hsv.h || newHsv.s !== this.hsv.s || newHsv.v !== this.hsv.v) {
        this.hsv = newHsv;
        this.updateThumbPositions();
      }
    } catch (e) {
      console.error(`[color-picker] Invalid color value: "${color}"`, e);
    }
  }

  private dispatchInput() {
    this.dispatchEvent(
      new CustomEvent('input', { detail: { value: this.value }, bubbles: true, composed: true }),
    );
  }

  private dispatchChange() {
    this.dispatchEvent(
      new CustomEvent('change', { detail: { value: this.value }, bubbles: true, composed: true }),
    );
  }

  private updateValueFromHsv() {
    const hsv = { h: this.hsv.h, s: this.hsv.s * 100, v: this.hsv.v * 100 };
    const newColorFromHsv = new Color({ space: 'hsv', coords: [hsv.h, hsv.s, hsv.v] });

    let newValue: string;
    try {
      const hexSpaces = ['srgb', 'hsl', 'hsv'];
      if (!this.sourceSpace || hexSpaces.includes(this.sourceSpace)) {
        newValue = newColorFromHsv.to('srgb').toString({ format: 'hex' });
      } else {
        newValue = newColorFromHsv.to(this.sourceSpace).toString({ precision: 5 });
      }
    } catch (e) {
      console.error(`[color-picker] Could not convert color to space ${this.sourceSpace}`, e);
      newValue = newColorFromHsv.to('srgb').toString({ format: 'hex' });
    }

    if (this.value !== newValue) {
      this.value = newValue;
      this.dispatchInput();
    }
  }

  private updateThumbPositions() {
    this.saturationThumbPosition = {
      x: this.hsv.s * 100,
      y: (1 - this.hsv.v) * 100,
    };
    this.hueThumbPosition = (this.hsv.h / 360) * 100;
  }

  private handleSaturationDragStart(e: MouseEvent | TouchEvent) {
    e.preventDefault();
    this.isDraggingSaturation = true;
    this.saturationPanel = this.shadowRoot?.querySelector('.saturation-panel') as HTMLDivElement;
    this.updateSaturation(e);
  }

  private handleHueDragStart(e: MouseEvent | TouchEvent) {
    e.preventDefault();
    this.isDraggingHue = true;
    this.hueSlider = this.shadowRoot?.querySelector('.hue-slider') as HTMLDivElement;
    this.updateHue(e);
  }

  private handleDrag(e: MouseEvent | TouchEvent) {
    if (this.isDraggingSaturation) {
      this.updateSaturation(e);
    }
    if (this.isDraggingHue) {
      this.updateHue(e);
    }
  }

  private handleDragEnd() {
    if (this.isDraggingSaturation || this.isDraggingHue) {
      this.dispatchChange();
    }
    this.isDraggingSaturation = false;
    this.isDraggingHue = false;
  }

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
    this.updateThumbPositions();
  }

  private updateHue(e: MouseEvent | TouchEvent) {
    if (!this.hueSlider) return;
    const { clientX } = this.getEventPosition(e);
    const rect = this.hueSlider.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));

    this.hsv.h = (x / rect.width) * 360;
    this.updateValueFromHsv();
    this.updateThumbPositions();
  }

  private selectSwatch(color: string) {
    this.value = color;
    this.dispatchInput();
    this.dispatchChange();
  }
}
