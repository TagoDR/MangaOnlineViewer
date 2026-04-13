/**
 * This file provides a web component for managing the startup process of the script.
 * It replaces the old dialog functions with a self-contained Lit component.
 */
import { html, LitElement, unsafeCSS } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { getLocaleString } from '../core/settings.ts';
import './components/Dialog.ts';
import './components/Button.ts';
import './components/Slider.ts';
import startButton from './styles/startButton.css?inline';
import './components/Icon.ts';
import colors from '../utils/colors.ts';

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

  @property({ type: Number })
  timeoutMs = 3000;

  @property({ type: String, reflect: true })
  status: 'initial-prompt' | 'late-start-button' | 'late-start-prompt' = 'initial-prompt';

  @state()
  private beginPage?: number;

  @state()
  private endPage?: number;

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
    e.stopPropagation();
    window.clearTimeout(this.timeoutId);
    this.status = 'late-start-button';
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
      <mov-dialog
        ?open=${this.status === 'initial-prompt'}
        icon="info"
        @close=${this.handleDialogClose}
      >
        <span slot="label">${getLocaleString('STARTING')}</span>
        <div style="padding: 1rem;">${getLocaleString('WAITING')}</div>
        <div
          slot="footer"
          style="display: flex; justify-content: space-between; padding: 0.5rem 1rem 1rem;"
        >
          <mov-button
            @click=${this.handleDialogClose}
            style="--mov-color-fill-loud: ${colors.red[700]}; --mov-color-on-loud: white;"
          >
            Cancel
          </mov-button>
          <mov-button
            @click=${this.handleStart}
            style="--mov-color-fill-loud: ${colors.green[700]}; --mov-color-on-loud: white;"
          >
            Start Now
          </mov-button>
        </div>
      </mov-dialog>
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
    this.beginPage ??= this.begin;
    this.endPage ??= this.mangaPages;
    const onSliderInput = (e: CustomEvent) => {
      this.beginPage = e.detail.value[0];
      this.endPage = e.detail.value[1];
    };

    return html`
      <mov-dialog
        ?open=${this.status === 'late-start-prompt'}
        icon="question"
        @close=${this.handleDialogClose}
      >
        <span slot="label">${getLocaleString('STARTING')}</span>
        <div style="padding: 1rem;">
          ${getLocaleString('CHOOSE_BEGINNING')}
          <div
            id="pageInputGroup"
            style="padding: 1rem 0;"
          >
            <mov-slider
              id="pagesSlider"
              dual
              show-tooltip
              show-ticks
              tick-count="10"
              step="1"
              .value=${[this.beginPage, this.endPage]}
              min="0"
              max="${this.mangaPages}"
              @input=${onSliderInput}
            ></mov-slider>
            <output
              id="pagesSliderVal"
              class="RangeValue"
              for="pagesSlider"
            >
              [${String(this.beginPage).padStart(3, '0')} ,
              ${String(this.endPage).padStart(3, '0')}]
            </output>
          </div>
        </div>
        <div
          slot="footer"
          style="display: flex; justify-content: flex-end; gap: 0.5rem; padding: 0.5rem 1rem 1rem;"
        >
          <mov-button
            @click=${this.handleDialogClose}
            style="--mov-color-fill-loud: ${colors.red[700]}; --mov-color-on-loud: white;"
          >
            Close
          </mov-button>
          <mov-button
            @click=${() => this.handleLateStart(this.beginPage ?? 0, this.endPage ?? this.mangaPages)}
            style="--mov-color-fill-loud: ${colors.green[700]}; --mov-color-on-loud: white;"
          >
            Run
          </mov-button>
        </div>
      </mov-dialog>
    `;
  }
}
