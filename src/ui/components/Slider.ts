import type { PropertyValues } from 'lit';
import { css, html, LitElement } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

// Clamp a number to a range
function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(value, max));
}

// Draggable element utility
class DraggableElement {
  private readonly element: HTMLElement;
  private readonly options: {
    start: (x: number, y: number) => void;
    move: (x: number, y: number) => void;
    stop: () => void;
  };
  private isDragging = false;

  constructor(
    element: HTMLElement,
    options: {
      start: (x: number, y: number) => void;
      move: (x: number, y: number) => void;
      stop: () => void;
    },
  ) {
    this.element = element;
    this.options = options;
    this.element.addEventListener('pointerdown', this.handlePointerDown);
  }

  private handlePointerDown = (event: PointerEvent) => {
    if (event.button !== 0) return;
    this.isDragging = true;
    this.options.start(event.clientX, event.clientY);
    this.element.setPointerCapture(event.pointerId);
    this.element.addEventListener('pointermove', this.handlePointerMove);
    this.element.addEventListener('pointerup', this.handlePointerUp);
  };

  private handlePointerMove = (event: PointerEvent) => {
    if (!this.isDragging) return;
    this.options.move(event.clientX, event.clientY);
  };

  private handlePointerUp = (event: PointerEvent) => {
    if (!this.isDragging) return;
    this.isDragging = false;
    this.options.stop();
    this.element.releasePointerCapture(event.pointerId);
    this.element.removeEventListener('pointermove', this.handlePointerMove);
    this.element.removeEventListener('pointerup', this.handlePointerUp);
  };

  toggle(enabled: boolean) {
    if (enabled) {
      this.element.addEventListener('pointerdown', this.handlePointerDown);
    } else {
      this.element.removeEventListener('pointerdown', this.handlePointerDown);
    }
  }
}

@customElement('mov-slider')
export default class MovSlider extends LitElement {
  static styles = css`
    :host {
      --track-size: 0.5em;
      --thumb-width: 1.4em;
      --thumb-height: 1.4em;
      --marker-width: 0.1875em;
      --marker-height: 0.1875em;
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    #slider {
      flex: 1;
      touch-action: none;
      position: relative;
    }

    #slider:focus {
      outline: none;
    }

    #slider:focus-visible:not(.disabled) #thumb,
    #slider:focus-visible:not(.disabled) #thumb-min,
    #slider:focus-visible:not(.disabled) #thumb-max {
      outline: var(--theme-primary-color) solid 2px;
    }

    #track {
      position: relative;
      border-radius: 9999px;
      background: var(--mov-color-fill-quiet);
      height: var(--track-size);
    }

    .disabled #track {
      cursor: not-allowed;
      opacity: 0.5;
    }

    #indicator {
      position: absolute;
      border-radius: inherit;
      background-color: var(--mov-color-fill-loud);
      height: 100%;
      left: var(--start, 0%);
      right: calc(100% - var(--end, 0%));
    }

    #thumb,
    #thumb-min,
    #thumb-max {
      z-index: 3;
      position: absolute;
      width: var(--thumb-width);
      height: var(--thumb-height);
      border: solid 0.125em var(--theme-background-color);
      border-radius: 50%;
      background-color: var(--mov-color-fill-loud);
      cursor: pointer;
      top: calc(50% - var(--thumb-height) / 2);
      left: calc(var(--position) - var(--thumb-width) / 2);
    }

    .disabled #thumb,
    .disabled #thumb-min,
    .disabled #thumb-max {
      cursor: inherit;
    }

    :host([range]) #thumb-min:focus-visible,
    :host([range]) #thumb-max:focus-visible {
      z-index: 4; /* Ensure focused thumb appears on top */
      outline: var(--theme-primary-color) solid 2px;
    }

    #markers {
      position: absolute;
      top: calc(50% - var(--marker-height) / 2);
      left: 0;
      right: 0;
      height: var(--marker-height);
      pointer-events: none;
    }

    .marker {
      position: absolute;
      width: var(--marker-width);
      height: var(--marker-height);
      border-radius: 50%;
      background-color: var(--theme-background-color);
    }
  `;

  private draggableTrack!: DraggableElement;
  private draggableThumbMin: DraggableElement | null = null;
  private draggableThumbMax: DraggableElement | null = null;
  private trackBoundingClientRect!: DOMRect;
  private valueWhenDraggingStarted: number | undefined | null;
  private activeThumb: 'min' | 'max' | null = null;

  @query('#slider') slider!: HTMLElement;
  @query('#thumb') thumb!: HTMLElement;
  @query('#thumb-min') thumbMin!: HTMLElement;
  @query('#thumb-max') thumbMax!: HTMLElement;
  @query('#track') track!: HTMLElement;

  @property() label = '';
  @property({ type: Number, attribute: 'min-value' }) minValue = 0;
  @property({ type: Number, attribute: 'max-value' }) maxValue = 50;
  @property({ type: Number }) value = 0;
  @property({ type: Boolean, reflect: true }) range = false;
  @property({ type: Boolean }) disabled = false;
  @property({ type: Boolean, reflect: true }) readonly = false;
  @property({ type: Number }) min = 0;
  @property({ type: Number }) max = 100;
  @property({ type: Number }) step = 1;
  @property({ type: Boolean, attribute: 'with-markers' }) withMarkers = false;

  firstUpdated() {
    if (this.range) {
      this.draggableThumbMin = new DraggableElement(this.thumbMin, {
        start: () => {
          this.activeThumb = 'min';
          this.trackBoundingClientRect = this.track.getBoundingClientRect();
          this.valueWhenDraggingStarted = this.minValue;
        },
        move: (x, y) => {
          this.setThumbValueFromCoordinates(x, y, 'min');
        },
        stop: () => {
          if (this.minValue !== this.valueWhenDraggingStarted) {
            this.dispatchEvent(new Event('change', { bubbles: true, composed: true }));
          }
          this.valueWhenDraggingStarted = undefined;
          this.activeThumb = null;
        },
      });

      this.draggableThumbMax = new DraggableElement(this.thumbMax, {
        start: () => {
          this.activeThumb = 'max';
          this.trackBoundingClientRect = this.track.getBoundingClientRect();
          this.valueWhenDraggingStarted = this.maxValue;
        },
        move: (x, y) => {
          this.setThumbValueFromCoordinates(x, y, 'max');
        },
        stop: () => {
          if (this.maxValue !== this.valueWhenDraggingStarted) {
            this.dispatchEvent(new Event('change', { bubbles: true, composed: true }));
          }
          this.valueWhenDraggingStarted = undefined;
          this.activeThumb = null;
        },
      });

      this.draggableTrack = new DraggableElement(this.track, {
        start: (x, y) => {
          this.trackBoundingClientRect = this.track.getBoundingClientRect();
          const value = this.getValueFromCoordinates(x, y);
          const minDistance = Math.abs(value - this.minValue);
          const maxDistance = Math.abs(value - this.maxValue);
          this.activeThumb = minDistance <= maxDistance ? 'min' : 'max';
          this.valueWhenDraggingStarted =
            this.activeThumb === 'min' ? this.minValue : this.maxValue;
          this.setThumbValueFromCoordinates(x, y, this.activeThumb);
        },
        move: (x, y) => {
          if (this.activeThumb) {
            this.setThumbValueFromCoordinates(x, y, this.activeThumb);
          }
        },
        stop: () => {
          if (this.activeThumb) {
            const currentValue = this.activeThumb === 'min' ? this.minValue : this.maxValue;
            if (currentValue !== this.valueWhenDraggingStarted) {
              this.dispatchEvent(new Event('change', { bubbles: true, composed: true }));
            }
          }
          this.valueWhenDraggingStarted = undefined;
          this.activeThumb = null;
        },
      });
    } else {
      this.draggableTrack = new DraggableElement(this.slider, {
        start: (x, y) => {
          this.trackBoundingClientRect = this.track.getBoundingClientRect();
          this.valueWhenDraggingStarted = this.value;
          this.setValueFromCoordinates(x, y);
        },
        move: (x, y) => {
          this.setValueFromCoordinates(x, y);
        },
        stop: () => {
          if (this.value !== this.valueWhenDraggingStarted) {
            this.dispatchEvent(new Event('change', { bubbles: true, composed: true }));
          }
          this.valueWhenDraggingStarted = undefined;
        },
      });
    }
  }

  updated(changedProperties: PropertyValues<this>) {
    if (this.range) {
      if (changedProperties.has('minValue') || changedProperties.has('maxValue')) {
        this.minValue = clamp(this.minValue, this.min, this.maxValue);
        this.maxValue = clamp(this.maxValue, this.minValue, this.max);
      }
    } else if (changedProperties.has('value')) {
      this.value = clamp(this.value, this.min, this.max);
    }

    if (changedProperties.has('min') || changedProperties.has('max')) {
      if (this.range) {
        this.minValue = clamp(this.minValue, this.min, this.max);
        this.maxValue = clamp(this.maxValue, this.min, this.max);
      } else {
        this.value = clamp(this.value, this.min, this.max);
      }
    }

    if (changedProperties.has('disabled') || changedProperties.has('readonly')) {
      const enabled = !(this.disabled || this.readonly);
      if (this.range) {
        this.draggableThumbMin?.toggle(enabled);
        this.draggableThumbMax?.toggle(enabled);
      }
      this.draggableTrack.toggle(enabled);
    }

    super.updated(changedProperties);
  }

  private clampAndRoundToStep(value: number) {
    const stepPrecision = (String(this.step).split('.')[1] || '').replace(/0+$/g, '').length;
    value = Math.round(value / this.step) * this.step;
    value = clamp(value, this.min, this.max);
    return parseFloat(value.toFixed(stepPrecision));
  }

  private getPercentageFromValue(value: number) {
    return ((value - this.min) / (this.max - this.min)) * 100;
  }

  private getValueFromCoordinates(x: number, _y: number) {
    const { left, width } = this.trackBoundingClientRect;
    const relativePosition = x - left;
    const percentage = relativePosition / width;
    return this.clampAndRoundToStep(this.min + (this.max - this.min) * percentage);
  }

  private handleKeyDown(event: KeyboardEvent) {
    const target = event.target as HTMLElement;
    if (this.disabled || this.readonly) return;

    if (this.range) {
      if (target === this.thumbMin) {
        this.activeThumb = 'min';
      } else if (target === this.thumbMax) {
        this.activeThumb = 'max';
      }
      if (!this.activeThumb) return;
    }

    let current: number;
    if (this.range) {
      current = this.activeThumb === 'min' ? this.minValue : this.maxValue;
    } else {
      current = this.value;
    }
    let newValue = current;

    switch (event.key) {
      case 'ArrowRight':
        event.preventDefault();
        newValue = this.clampAndRoundToStep(current + this.step);
        break;
      case 'ArrowLeft':
        event.preventDefault();
        newValue = this.clampAndRoundToStep(current - this.step);
        break;
      case 'Home':
        event.preventDefault();
        if (this.range && this.activeThumb === 'min') {
          newValue = this.min;
        } else {
          newValue = this.range ? this.minValue : this.min;
        }
        break;
      case 'End':
        event.preventDefault();
        if (this.range && this.activeThumb === 'max') {
          newValue = this.max;
        } else {
          newValue = this.range ? this.maxValue : this.max;
        }
        break;
      case 'PageUp': {
        event.preventDefault();
        const stepUp = Math.max(current + (this.max - this.min) / 10, current + this.step);
        newValue = this.clampAndRoundToStep(stepUp);
        break;
      }
      case 'PageDown': {
        event.preventDefault();
        const stepDown = Math.min(current - (this.max - this.min) / 10, current - this.step);
        newValue = this.clampAndRoundToStep(stepDown);
        break;
      }
    }

    if (newValue === current) return;

    if (this.range) {
      if (this.activeThumb === 'min') {
        this.minValue = Math.max(this.min, newValue);
      } else {
        this.maxValue = Math.min(this.max, newValue);
      }
    } else {
      this.value = clamp(newValue, this.min, this.max);
    }

    this.dispatchEvent(new InputEvent('input', { bubbles: true, composed: true }));
    this.dispatchEvent(new Event('change', { bubbles: true, composed: true }));
  }

  private setValueFromCoordinates(x: number, y: number) {
    const oldValue = this.value;
    this.value = this.getValueFromCoordinates(x, y);
    if (this.value !== oldValue) {
      this.dispatchEvent(new InputEvent('input', { bubbles: true, composed: true }));
    }
  }

  private setThumbValueFromCoordinates(x: number, y: number, thumb: 'min' | 'max') {
    const value = this.getValueFromCoordinates(x, y);
    const oldValue = thumb === 'min' ? this.minValue : this.maxValue;

    if (thumb === 'min') {
      this.minValue = Math.max(this.min, value > this.maxValue ? this.maxValue : value);
    } else {
      this.maxValue = Math.min(this.max, value < this.minValue ? this.minValue : value);
    }

    if (oldValue !== (thumb === 'min' ? this.minValue : this.maxValue)) {
      this.dispatchEvent(new InputEvent('input', { bubbles: true, composed: true }));
    }
  }

  focus() {
    if (this.range) {
      this.thumbMin?.focus();
    } else {
      this.slider.focus();
    }
  }

  blur() {
    if (this.range) {
      if (document.activeElement === this.thumbMin) {
        this.thumbMin.blur();
      } else if (document.activeElement === this.thumbMax) {
        this.thumbMax.blur();
      }
    } else {
      this.slider.blur();
    }
  }

  render() {
    const sliderClasses = classMap({
      disabled: this.disabled,
    });

    const markers = [];
    if (this.withMarkers) {
      for (let i = this.min; i <= this.max; i += this.step) {
        markers.push(this.getPercentageFromValue(i));
      }
    }

    const markersTemplate = this.withMarkers
      ? html`
          <div
            id="markers"
            part="markers"
          >
            ${markers.map(
              marker =>
                html`<span
                  class="marker"
                  style="left: ${marker}%"
                ></span>`,
            )}
          </div>
        `
      : '';

    if (this.range) {
      const minThumbPosition = clamp(this.getPercentageFromValue(this.minValue), 0, 100);
      const maxThumbPosition = clamp(this.getPercentageFromValue(this.maxValue), 0, 100);

      return html`
        <label for="slider">${this.label}</label>
        <div
          id="slider"
          part="slider"
          class=${sliderClasses}
        >
          <div
            id="track"
            part="track"
          >
            <div
              id="indicator"
              part="indicator"
              style="--start: ${Math.min(minThumbPosition, maxThumbPosition)}%; --end: ${Math.max(
                minThumbPosition,
                maxThumbPosition,
              )}%"
            ></div>
            ${markersTemplate}
            <span
              id="thumb-min"
              part="thumb thumb-min"
              style="--position: ${minThumbPosition}%"
              role="slider"
              aria-valuemin=${this.min}
              aria-valuenow=${this.minValue}
              aria-valuemax=${this.max}
              aria-label="Minimum value"
              aria-disabled=${this.disabled ? 'true' : 'false'}
              aria-readonly=${this.readonly ? 'true' : 'false'}
              tabindex=${this.disabled ? -1 : 0}
              @keydown=${this.handleKeyDown}
            ></span>
            <span
              id="thumb-max"
              part="thumb thumb-max"
              style="--position: ${maxThumbPosition}%"
              role="slider"
              aria-valuemin=${this.min}
              aria-valuenow=${this.maxValue}
              aria-valuemax=${this.max}
              aria-label="Maximum value"
              aria-disabled=${this.disabled ? 'true' : 'false'}
              aria-readonly=${this.readonly ? 'true' : 'false'}
              tabindex=${this.disabled ? -1 : 0}
              @keydown=${this.handleKeyDown}
            ></span>
          </div>
        </div>
      `;
    } else {
      const thumbPosition = clamp(this.getPercentageFromValue(this.value), 0, 100);

      return html`
        <label for="slider">${this.label}</label>
        <div
          id="slider"
          part="slider"
          class=${sliderClasses}
          role="slider"
          aria-disabled=${this.disabled ? 'true' : 'false'}
          aria-readonly=${this.disabled ? 'true' : 'false'}
          aria-valuemin=${this.min}
          aria-valuenow=${this.value}
          aria-valuemax=${this.max}
          aria-label=${this.label}
          tabindex=${this.disabled ? -1 : 0}
          @keydown=${this.handleKeyDown}
        >
          <div
            id="track"
            part="track"
          >
            <div
              id="indicator"
              part="indicator"
              style="--start: 0%; --end: ${thumbPosition}%"
            ></div>
            ${markersTemplate}
            <span
              id="thumb"
              part="thumb"
              style="--position: ${thumbPosition}%"
            ></span>
          </div>
        </div>
      `;
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'mov-slider': MovSlider;
  }
}
