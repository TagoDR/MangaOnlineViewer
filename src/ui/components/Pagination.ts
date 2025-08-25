import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { getAppStateValue } from '../../core/settings.ts';
import { isNothing } from '../../utils/checks.ts';
import { scrollToElement } from '../events/common.ts';
import { buttonRedirectURL } from '../events/globals.ts';
import { selectGoToPage } from '../events/navigation.ts';

@customElement('mov-pagination')
export class Pagination extends LitElement {
  static styles = css`
    :host {
      display: flex;
      position: fixed;
      bottom: 30px;
      left: 0;
      right: 0;
      background-color: transparent;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      width: 100%;
      font-family: system-ui, -apple-system, sans-serif;
    }

    .pagination-button {
      background: var(--theme-primary-color);
      border: 1px solid var(--theme-primary-color);
      color: var(--theme-primary-text-color);
      padding: 8px 12px;
      border-radius: 4px;
      cursor: pointer;
      font-size: 14px;
      transition: all 0.2s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 36px;
      height: 36px;
    }

    .pagination-button:hover:not(:disabled) {
      opacity: 0.8;
      transform: translateY(-1px);
    }

    .pagination-button:disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }

    .pagination-button svg {
      width: 16px;
      height: 16px;
      fill: currentColor;
    }

    .slider-container {
      position: relative;
      min-width: 10rem;
      width: 50%;
      margin: 0 1rem;
    }

    .pagination-slider {
      -webkit-appearance: none;
      appearance: none;
      width: 100%;
      height: 4px;
      background: var(--theme-primary-color);
      opacity: 0.5;
      border-radius: 2px;
      outline: none;
      cursor: pointer;
    }

    .pagination-slider::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 16px;
      height: 16px;
      background: white;
      border-radius: 50%;
      cursor: pointer;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    }

    .pagination-slider::-moz-range-thumb {
      width: 16px;
      height: 16px;
      background: white;
      border-radius: 50%;
      cursor: pointer;
      border: none;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    }

    .slider-tooltip {
      position: absolute;
      top: -35px;
      left: 50%;
      transform: translateX(-50%);
      background: rgba(0, 0, 0, 0.9);
      color: white;
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 12px;
      white-space: nowrap;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.2s ease;
    }

    .slider-container:hover .slider-tooltip {
      opacity: 1;
    }

    .tooltip {
      position: absolute;
      bottom: 45px;
      left: 50%;
      transform: translateX(-50%);
      background: var(--theme-body-background);
      color: white;
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 12px;
      white-space: nowrap;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.2s ease;
      z-index: 1001;
    }

    .pagination-button:hover .tooltip {
      opacity: 1;
    }
  `;

  @property({ type: Number })
  currentPage = 1;

  @property({ type: Number })
  totalPages = 1;

  @property({ type: Number })
  startPage = 1;

  @property({ type: String })
  next?: string;
  @property({ type: String })
  prev?: string;

  render() {
    return html`
      <button
        class="pagination-button"
        @click=${buttonRedirectURL}
        value="${this.prev}"
        ?disabled=${isNothing(this.prev) || this.prev === '#'}
      >
        <svg viewBox="0 0 24 24">
          <path d="M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"/>
        </svg>
        <div class="tooltip">Previous Chapter</div>
      </button>

      <button
        class="pagination-button"
        @click=${this.goToPreviousPage}
        ?disabled=${this.currentPage <= this.startPage}
      >
        <svg viewBox="0 0 24 24">
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
        </svg>
        <div class="tooltip">Previous Page</div>
      </button>

      <div class="slider-container">
        <input
          type="range"
          class="pagination-slider"
          min="${this.startPage}"
          max="${this.totalPages}"
          .value="${this.currentPage.toString()}"
          @input="${selectGoToPage}"
        />
        <div class="slider-tooltip">
          ${this.currentPage} / ${this.totalPages}
        </div>
      </div>

      <button
        class="pagination-button"
        @click=${this.goToNextPage}
        ?disabled="${this.currentPage === this.totalPages - (this.startPage - 1)}"
      >
        <svg viewBox="0 0 24 24">
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
        </svg>
        <div class="tooltip">Next Page</div>
      </button>

      <button
        class="pagination-button"
        @click=${buttonRedirectURL}
        value="${this.next}"
        ?disabled=${isNothing(this.next) || this.next === '#'}
      >
        <svg viewBox="0 0 24 24">
          <path d="M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"/>
        </svg>
        <div class="tooltip">Next Chapter</div>
      </button>
    `;
  }

  private goToPreviousPage() {
    this.goToPage(this.currentPage - 1);
  }

  private goToNextPage() {
    this.goToPage(this.currentPage + 1);
  }

  private goToPage(page: number) {
    scrollToElement(getAppStateValue('render')?.querySelector<HTMLElement>(`#Page${page}`));
  }
}
