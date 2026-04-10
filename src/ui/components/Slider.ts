import { html, LitElement, unsafeCSS } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import styles from '../styles/slider.css?inline';

declare global {
  interface HTMLElementTagNameMap {
    'mov-slider': Slider;
  }
}

/**
 * MovSlider - A flexible slider component supporting single and dual ranges.
 * remade with Web Awesome API names and independent of AgnosticUI.
 *
 * @element mov-slider
 */
@customElement('mov-slider')
export default class Slider extends LitElement {
  static readonly styles = [unsafeCSS(styles)];

  @property({ type: String }) label = '';
  @property({ attribute: 'help-text' }) helpText = '';
  @property({ attribute: 'error-message' }) errorMessage = '';

  @property({ type: Number }) min = 0;
  @property({ type: Number }) max = 100;
  @property({ type: Number }) step = 1;
  @property({ type: Object }) value: number | [number, number] = 0;

  @property({ type: Boolean, reflect: true }) dual = false;
  @property({ type: Boolean, reflect: true }) vertical = false;
  @property({ type: Boolean, reflect: true }) filled = false;
  @property({ reflect: true }) size: 'small' | 'medium' | 'large' = 'medium';

  @property({ type: Boolean, reflect: true }) disabled = false;
  @property({ type: Boolean, reflect: true }) readonly = false;
  @property({ type: Boolean, reflect: true }) invalid = false;

  @property({ type: Boolean, attribute: 'show-tooltip' }) showTooltip = false;
  @property({ type: Boolean, attribute: 'show-ticks' }) showTicks = false;
  @property({ type: Number, attribute: 'tick-step' }) tickStep = 25;

  @state() private focusedThumb: 'min' | 'max' | null = null;
  @state() private draggingThumb: 'min' | 'max' | 'single' | null = null;

  @query('.mov-slider__track') private track?: HTMLElement;
  @query('.mov-slider__live-region') private liveRegion?: HTMLElement;

  private activeDrag: {
    thumb: 'min' | 'max' | 'single';
    trackRect: DOMRect;
  } | null = null;

  private lastRenderTime = 0;
  private renderThrottleMs = 16;

  constructor() {
    super();
    this._handlePointerMove = this._handlePointerMove.bind(this);
    this._handlePointerUp = this._handlePointerUp.bind(this);
  }

  private get values(): [number, number] {
    if (Array.isArray(this.value)) {
      return this.value;
    }
    return [this.min, this.value];
  }

  private getPercentage(val: number): number {
    return ((val - this.min) / (this.max - this.min)) * 100;
  }

  private getValueFromPercentage(percentage: number): number {
    const rawValue = this.min + (percentage / 100) * (this.max - this.min);
    return this.step ? Math.round(rawValue / this.step) * this.step : rawValue;
  }

  private getValueFromPointer(clientX: number, clientY: number, trackRect: DOMRect): number {
    let percentage: number;
    if (this.vertical) {
      const relativeY = trackRect.bottom - clientY;
      percentage = (relativeY / trackRect.height) * 100;
    } else {
      const relativeX = clientX - trackRect.left;
      percentage = (relativeX / trackRect.width) * 100;
    }
    percentage = Math.max(0, Math.min(100, percentage));
    return this.getValueFromPercentage(percentage);
  }

  private clampValue(val: number): number {
    let clamped = Math.max(this.min, Math.min(this.max, val));
    if (this.step) {
      clamped = Math.round(clamped / this.step) * this.step;
    }
    return Number(clamped.toFixed(10));
  }

  private handleThumbPointerDown(e: PointerEvent, thumbType: 'min' | 'max' | 'single') {
    if (this.disabled || this.readonly || !this.track) return;

    e.preventDefault();
    e.stopPropagation();

    const thumb = e.currentTarget as HTMLElement;
    thumb.setPointerCapture(e.pointerId);

    this.activeDrag = {
      thumb: thumbType,
      trackRect: this.track.getBoundingClientRect(),
    };
    this.draggingThumb = thumbType;

    document.addEventListener('pointermove', this._handlePointerMove);
    document.addEventListener('pointerup', this._handlePointerUp);
    document.addEventListener('pointercancel', this._handlePointerUp);
  }

  private _handlePointerMove(e: PointerEvent) {
    if (!this.activeDrag || this.disabled || this.readonly) return;

    const now = Date.now();
    if (now - this.lastRenderTime < this.renderThrottleMs) return;
    this.lastRenderTime = now;

    const { thumb, trackRect } = this.activeDrag;
    const newValue = this.getValueFromPointer(e.clientX, e.clientY, trackRect);

    if (this.dual) {
      const currentValues = this.values;
      if (thumb === 'min') {
        const clampedValue = Math.min(newValue, currentValues[1] - (this.step || 1));
        this.updateValue([clampedValue, currentValues[1]], 'input');
      } else {
        const clampedValue = Math.max(newValue, currentValues[0] + (this.step || 1));
        this.updateValue([currentValues[0], clampedValue], 'input');
      }
    } else {
      this.updateValue(newValue, 'input');
    }
  }

  private _handlePointerUp(e: PointerEvent) {
    if (!this.activeDrag) return;
    const thumb = this.shadowRoot?.querySelector('.mov-slider__thumb--active') as HTMLElement;
    thumb?.releasePointerCapture(e.pointerId);

    this.updateValue(this.value, 'change');
    this.activeDrag = null;
    this.draggingThumb = null;

    document.removeEventListener('pointermove', this._handlePointerMove);
    document.removeEventListener('pointerup', this._handlePointerUp);
    document.removeEventListener('pointercancel', this._handlePointerUp);
  }

  private updateValue(newValue: number | [number, number], type: 'input' | 'change' = 'change') {
    if (this.readonly || this.disabled) return;

    if (this.dual && Array.isArray(newValue)) {
      newValue = [this.clampValue(newValue[0]), this.clampValue(newValue[1])];
      if (newValue[0] > newValue[1]) newValue = [newValue[1], newValue[0]];
    } else if (!this.dual && typeof newValue === 'number') {
      newValue = this.clampValue(newValue);
    }

    this.value = newValue;

    this.dispatchEvent(
      new CustomEvent(type, {
        bubbles: true,
        composed: true,
        detail: { value: newValue },
      }),
    );
  }

  private handleTrackClick(e: MouseEvent) {
    if (this.disabled || this.readonly || !this.track) return;
    const rect = this.track.getBoundingClientRect();
    const newValue = this.getValueFromPointer(e.clientX, e.clientY, rect);

    if (this.dual) {
      const currentValues = this.values;
      const distanceToMin = Math.abs(newValue - currentValues[0]);
      const distanceToMax = Math.abs(newValue - currentValues[1]);
      if (distanceToMin < distanceToMax) {
        this.updateValue([newValue, currentValues[1]]);
      } else {
        this.updateValue([currentValues[0], newValue]);
      }
    } else {
      this.updateValue(newValue);
    }
  }

  private renderTicks() {
    if (!this.showTicks || !this.tickStep || this.tickStep <= 0) return null;
    const ticks = [];
    const tickCount = Math.floor((this.max - this.min) / this.tickStep);
    if (tickCount > 100) return null;

    for (let i = 0; i <= tickCount; i++) {
      const val = this.min + i * this.tickStep;
      const percentage = this.getPercentage(val);
      const style = this.vertical ? `bottom: ${percentage}%` : `inset-inline-start: ${percentage}%`;
      ticks.push(html`
        <div class="mov-slider__tick" style="${style}">
          <div class="mov-slider__tick-label">${val}</div>
        </div>
      `);
    }
    return html`<div class="mov-slider__ticks">${ticks}</div>`;
  }

  private renderThumb(val: number, thumbType: 'min' | 'max' | 'single') {
    const percentage = this.getPercentage(val);
    const isFocused = this.focusedThumb === thumbType;
    const isDragging = this.draggingThumb === thumbType;
    const style = this.vertical ? `bottom: ${percentage}%` : `inset-inline-start: ${percentage}%`;

    return html`
      <div
        class="mov-slider__thumb ${isFocused ? 'mov-slider__thumb--focused' : ''} ${isDragging ? 'mov-slider__thumb--active' : ''}"
        style="${style}"
        @pointerdown=${(e: PointerEvent) => this.handleThumbPointerDown(e, thumbType)}
      >
        ${this.showTooltip ? html`<div class="mov-slider__tooltip">${val}</div>` : ''}
      </div>
    `;
  }

  private renderProgress() {
    const vals = this.values;
    if (this.dual) {
      const start = this.getPercentage(vals[0]);
      const end = this.getPercentage(vals[1]);
      const style = this.vertical
        ? `bottom: ${start}%; height: ${end - start}%`
        : `left: ${start}%; width: ${end - start}%`;
      return html`<div class="mov-slider__progress" style="${style}"></div>`;
    }
    const end = this.getPercentage(vals[1]);
    const style = this.vertical ? `bottom: 0; height: ${end}%` : `left: 0; width: ${end}%`;
    return html`<div class="mov-slider__progress" style="${style}"></div>`;
  }

  render() {
    const vals = this.values;
    return html`
      <div class="mov-slider" part="base">
        ${this.label ? html`<label class="mov-form-control__label">${this.label}</label>` : ''}
        <div class="mov-slider__container" @click=${this.handleTrackClick}>
          <div class="mov-slider__track">
            ${this.renderProgress()}
            ${this.renderTicks()}
            ${this.dual ? html`${this.renderThumb(vals[0], 'min')}${this.renderThumb(vals[1], 'max')}` : this.renderThumb(vals[1], 'single')}
          </div>
        </div>
        ${this.helpText && !this.invalid ? html`<div class="mov-form-control__helper">${this.helpText}</div>` : ''}
        ${this.invalid && this.errorMessage ? html`<div class="mov-form-control__error">${this.errorMessage}</div>` : ''}
      </div>
    `;
  }
}
