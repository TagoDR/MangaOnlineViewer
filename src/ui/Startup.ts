/**
 * This file provides a web component for managing the startup process of the script.
 * It replaces the old dialog functions with a self-contained Lit component.
 */
import { html, LitElement, unsafeCSS } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import 'toolcool-range-slider/dist/plugins/tcrs-generated-labels.min.js';
import 'toolcool-range-slider/dist/plugins/tcrs-marks.min';
import 'toolcool-range-slider';
import { getLocaleString } from '../core/settings.ts';
import './components/Dialog.ts';
import './components/Button.ts';
import startButton from './styles/startButton.css?inline';
import './components/Icon.ts';
import colors from '../utils/colors.ts';
import sequence from '../utils/sequence.ts';

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
  @property({ type: Number })
  mangaPages = 0;

  @property({ type: Number })
  begin = 1;

  @property({ type: Number })
  timeoutMs = 3000;

  @property()
  initialStatus: 'initial-prompt' | 'late-start-prompt' = 'initial-prompt';

  @state()
  private status: 'initial-prompt' | 'late-start-button' | 'late-start-prompt' = 'initial-prompt';

  @state()
  private isInitialDialogOpen = false;

  @state()
  private isLateStartDialogOpen = false;

  private timeoutId?: number;

  connectedCallback() {
    super.connectedCallback();
    this.status = this.initialStatus;
    if (this.status === 'initial-prompt') {
      this.isInitialDialogOpen = true;
      this.timeoutId = window.setTimeout(() => {
        this.handleStart();
      }, this.timeoutMs);
    }

    if (this.status === 'late-start-prompt') {
      this.isLateStartDialogOpen = true;
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.clearTimeout(this.timeoutId);
  }

  private handleStart() {
    window.clearTimeout(this.timeoutId);
    this.isInitialDialogOpen = false;
    this.dispatchEvent(new CustomEvent('start', { detail: null }));
    this.remove();
  }

  private handleCancelInitial() {
    window.clearTimeout(this.timeoutId);
    this.status = 'late-start-button';
  }

  private showLateStartPrompt() {
    this.status = 'late-start-prompt';
    this.isLateStartDialogOpen = true;
  }

  private handleLateStart(begin: number, end: number) {
    this.isLateStartDialogOpen = false;
    this.dispatchEvent(new CustomEvent('start', { detail: { begin, end } }));
    this.remove();
  }

  private handleClose() {
    this.dispatchEvent(new CustomEvent('close'));
    this.remove();
  }

  render() {
    switch (this.status) {
      case 'late-start-button':
        return this.renderLateStartButton();
      case 'late-start-prompt':
        return this.renderLateStartPrompt();
      case 'initial-prompt':
      default:
        return this.renderInitialPrompt();
    }
  }

  renderInitialPrompt() {
    const handleDialogClose = (e: Event) => {
      e.stopPropagation();
      this.isInitialDialogOpen = false;
      this.handleCancelInitial();
    };
    return html`
      <mov-dialog
        ?open=${this.isInitialDialogOpen}
        icon="info"
        @close=${handleDialogClose}
      >
        <span slot="label">${getLocaleString('STARTING')}</span>
        <div style="padding: 1rem;">${getLocaleString('WAITING')}</div>
        <div
          slot="footer"
          style="display: flex; justify-content: space-between; padding: 0.5rem 1rem 1rem;"
        >
          <mov-button
            @click=${() => {
              this.isInitialDialogOpen = false;
            }}
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
        @click=${this.showLateStartPrompt}
      >
        ${getLocaleString('BUTTON_START')}
      </button>
    `;
  }

  renderLateStartPrompt() {
    let beginPage = this.begin;
    let endPage = this.mangaPages;

    const onSliderChange = (e: CustomEvent) => {
      [beginPage, endPage] = [e.detail.value1, e.detail.value2];
    };

    const handleDialogClose = (e: Event) => {
      e.stopPropagation();
      this.isLateStartDialogOpen = false;
      this.handleClose();
    };

    return html`
      <mov-dialog
        ?open=${this.isLateStartDialogOpen}
        icon="question"
        @close=${handleDialogClose}
      >
        <span slot="label">${getLocaleString('STARTING')}</span>
        <div style="padding: 1rem;">
          ${getLocaleString('CHOOSE_BEGINNING')}
          <div
            id="pageInputGroup"
            style="padding: 1rem 0;"
          >
            <tc-range-slider
              id="pagesSlider"
              theme="glass"
              css-links="https://cdn.jsdelivr.net/npm/toolcool-range-slider@4.0.28/dist/plugins/tcrs-themes.min.css"
              min="1"
              max="${this.mangaPages}"
              round="0"
              step="1"
              value1="${beginPage}"
              value2="${endPage}"
              data="${sequence(this.mangaPages).join(', ')}"
              marks="true"
              marks-count="11"
              marks-values-count="11"
              generate-labels="true"
              slider-width="100%"
              pointers-overlap="false"
              pointers-min-distance="1"
              generate-labels-text-color="var(--mov-color-on-loud)"
              @change=${onSliderChange}
            ></tc-range-slider>
          </div>
        </div>
        <div
          slot="footer"
          style="display: flex; justify-content: flex-end; gap: 0.5rem; padding: 0.5rem 1rem 1rem;"
        >
          <mov-button
            @click=${() => {
              this.isLateStartDialogOpen = false;
            }}
            style="--mov-color-fill-loud: ${colors.red[700]}; --mov-color-on-loud: white;"
          >
            Close
          </mov-button>
          <mov-button
            @click=${() => this.handleLateStart(beginPage, endPage)}
            style="--mov-color-fill-loud: ${colors.green[700]}; --mov-color-on-loud: white;"
          >
            Run
          </mov-button>
        </div>
      </mov-dialog>
    `;
  }
}

/**
 * Creates and adds a <script-startup> component to the page to handle the startup process.
 * @param mangaPages - The total number of pages for the late start dialog.
 * @param begin - The initial start page for the late start dialog.
 * @param timeout - The timeout in milliseconds for the initial prompt.
 * @param initialStatus - The initial state of the dialog
 * @returns A promise that resolves with `null` for an immediate start, or with
 * `{ begin: number, end: number }` for a late start. It rejects if the process is canceled.
 */
export function displayStartup(
  mangaPages: number,
  begin = 1,
  timeout = 3000,
  initialStatus: 'initial-prompt' | 'late-start-prompt' = 'initial-prompt',
): Promise<{ begin: number; end: number } | null> {
  return new Promise((resolve, reject) => {
    // Ensure no multiple instances
    if (document.querySelector('script-startup')) {
      reject(new Error('Startup process is already in progress.'));
      return;
    }

    const startupElement = document.createElement('script-startup') as MovStartup;
    startupElement.mangaPages = mangaPages;
    startupElement.begin = begin;
    startupElement.timeoutMs = timeout;
    startupElement.initialStatus = initialStatus;

    startupElement.addEventListener('start', ((e: CustomEvent) => {
      resolve(e.detail);
    }) as EventListener);

    startupElement.addEventListener('close', () => {
      reject(new Error('Startup process was canceled by the user.'));
    });

    document.body.append(startupElement);
  });
}
