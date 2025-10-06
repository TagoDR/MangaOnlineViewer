/**
 * This file provides a web component for managing the startup process of the script.
 * It replaces the old dialog functions with a self-contained Lit component.
 */

import type WaSlider from '@awesome.me/webawesome/dist/components/slider/slider.js';
import { html, LitElement, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { getLocaleString } from '../core/settings';
import startButton from '../ui/styles/startButton.css?inline';

/**
 * A Lit component to handle the startup flow, including an initial prompt,
 * a late-start button, and a page range selection dialog.
 *
 * @fires start - Dispatched when the script should start. Detail is `null` for immediate start,
 * or `{ begin: number, end: number }` for a late start with a page range.
 * @fires close - Dispatched when the startup process is fully canceled.
 */
@customElement('script-startup')
export class MovStartup extends LitElement {
  static styles = [unsafeCSS(startButton)];
  @property({ type: Number, reflect: true })
  mangaPages = 0;

  @property({ type: Number, reflect: true })
  begin = 1;

  @property({ type: Number, reflect: true })
  end = 0;

  @property({ type: Number })
  timeoutMs = 3000;

  @property({ type: String, reflect: true })
  status: 'initial-prompt' | 'late-start-button' | 'late-start-prompt' = 'initial-prompt';

  private timeoutId?: number;

  connectedCallback() {
    super.connectedCallback();
    if (this.status === 'initial-prompt') {
      this.timeoutId = window.setTimeout(() => {
        this.handleStart();
      }, this.timeoutMs);
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.clearTimeout(this.timeoutId);
  }

  private handleStart() {
    window.clearTimeout(this.timeoutId);
    this.dispatchEvent(new CustomEvent('start', { detail: null }));
  }

  private handleLateStart(begin: number, end: number) {
    this.dispatchEvent(new CustomEvent('start', { detail: { begin, end } }));
  }
  private handleButtonCLick() {
    this.status = 'late-start-prompt';
  }

  private handleDialogClose(e: Event) {
    if (e.eventPhase !== Event.AT_TARGET) {
      e.stopPropagation();
      e.preventDefault();
      return;
    }
    window.clearTimeout(this.timeoutId);
    this.status = 'late-start-button';
  }

  private onSliderInput(e: CustomEvent) {
    const slider = e.target as WaSlider;
    this.begin = slider.minValue;
    this.end = slider.maxValue;
  }

  render() {
    switch (this.status) {
      case 'late-start-button':
        return this.renderLateStartButton();
      case 'late-start-prompt':
        return this.renderLateStartPrompt();
      default:
        return this.renderInitialPrompt();
    }
  }

  renderInitialPrompt() {
    return html`
      <wa-dialog
        ?open=${this.status === 'initial-prompt'}
        @wa-hide=${this.handleDialogClose}
      >
        <span slot="label">${getLocaleString('STARTING')}</span>
        <div class="display: flex; align-items: center; gap: 1rem; padding: 1rem;">
          <wa-icon
            name="IconInfoCircle"
            style="font-size: 4rem"
          ></wa-icon>
          ${getLocaleString('WAITING')}
        </div>
        <div
          slot="footer"
          style="display: flex; justify-content: space-between; padding: 0.5rem 1rem 1rem;"
        >
          <wa-button
            @click=${this.handleDialogClose}
            variant="danger"
          >
            Cancel
          </wa-button>
          <wa-button
            @click=${this.handleStart}
            variant="success"
          >
            Start Now
          </wa-button>
        </div>
      </wa-dialog>
    `;
  }

  renderLateStartButton() {
    return html`
      <button
        id="StartMOV"
        @click=${this.handleButtonCLick}
      >
        ${getLocaleString('BUTTON_START')}
      </button>
    `;
  }

  renderLateStartPrompt() {
    if (this.end === 0) {
      this.end = this.mangaPages;
    }
    return html`
      <wa-dialog
        ?open=${this.status === 'late-start-prompt'}
        @wa-hide=${this.handleDialogClose}
      >
        <span slot="label">${getLocaleString('STARTING')}</span>
        <div class="display: flex; align-items: center; gap: 1rem; padding: 1rem;">
          <wa-icon
            name="IconHelp"
            style="font-size: 4rem"
          ></wa-icon>
          ${getLocaleString('CHOOSE_BEGINNING')}
          <div
            id="pageInputGroup"
            style="padding: 1rem 0;"
          >
            <div
              style="display: flex; justify-content: space-between; font-family: monospace; padding-bottom: 5px;"
            >
              <span id="mov-min-page-display">${this.begin}</span>
              <span id="mov-max-page-display">${this.end}</span>
            </div>
            <wa-slider
              id="pagesSlider"
              min="1"
              max="${this.mangaPages}"
              min-value="${this.begin}"
              max-value="${this.end}"
              step="1"
              range
              with-markers
              with-tooltip
              @input="${this.onSliderInput}"
            >
              <span slot="reference">1</span>
              <span slot="reference">${Math.floor(this.mangaPages / 2)}</span>
              <span slot="reference">${this.mangaPages}</span>
            </wa-slider>
          </div>
        </div>
        <div
          slot="footer"
          style="display: flex; justify-content: flex-end; gap: 0.5rem; padding: 0.5rem 1rem 1rem;"
        >
          <wa-button
            @click=${this.handleDialogClose}
            variant="danger"
          >
            Close
          </wa-button>
          <wa-button
            @click=${() => this.handleLateStart(this.begin, this.end)}
            variant="success"
          >
            Run
          </wa-button>
        </div>
      </wa-dialog>
    `;
  }
}
