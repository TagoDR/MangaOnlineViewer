import { css, html, LitElement, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { setAppStateValue } from '../../core/settings.ts';
import type { PaginationMode } from '../../types';
import { isNothing } from '../../utils/checks.ts';
import { buttonRedirectURL } from '../events/globals.ts';
import { selectGoToPage } from '../events/navigation.ts';
import './Icon.ts';
import './Slider.ts';
import { redirectUrl } from '../events/keybindings.ts';

/**
 * A pagination component for navigating through manga pages and chapters.
 * This component is inspired by the Pagination component from Mantine, but
 * reimagined with a slider instead of a list of numbers.
 *
 * API is designed to be similar to Web Awesome components.
 *
 * @element manga-pagination
 */
@customElement('manga-pagination')
export class Pagination extends LitElement {
  static readonly styles = css`
    :host {
      display: contents; /* Use contents to not interfere with layout */
      font-family:
        system-ui,
        -apple-system,
        sans-serif;
    }

    .slider-pagination {
      display: flex;
      position: fixed;
      bottom: 30px;
      left: 0;
      right: 0;
      background-color: transparent;
      justify-content: center;
      align-items: center;
      gap: 3px;
      width: 100%;
      max-width: 100%;
      z-index: 100;
    }

    .pagination-button {
      background: var(--mov-color-fill-loud);
      border: 1px solid var(--mov-color-fill-loud);
      color: var(--mov-color-on-loud);
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

    .pagination-button mov-icon {
      width: 16px;
      height: 16px;
      fill: currentColor;
    }

    .slider-container {
      position: relative;
      max-width: 1000px;
      width: inherit;
      margin: 0 5px;
      --mov-slider-track-height: 4px;
      --mov-slider-thumb-size: 16px;
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

    .side-arrow {
      position: fixed;
      top: var(--header-height, 50px);
      bottom: 0;
      width: 10vw;
      height: calc(100vh - var(--header-height, 50px));
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      z-index: 99;
      opacity: 0;
      transition: opacity 0.2s ease-in-out;
      -webkit-tap-highlight-color: transparent;
    }

    .side-arrow:hover {
      background-color: var(--mov-color-primary-alpha-10);
      opacity: 1;
    }

    .side-arrow.left {
      left: 0;
    }

    .side-arrow.right {
      right: 0;
    }

    .side-arrow:active {
      background-color: var(--mov-color-primary-alpha-20);
    }

    .side-arrow mov-icon {
      width: 48px;
      height: 48px;
      fill: var(--mov-color-on-primary);
      filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.5));
    }

    .side-arrow:disabled {
      display: none;
    }
  `;

  @property({ type: String })
  mode: PaginationMode = 'disabled';

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

  private get isFirstPage() {
    return this.currentPage <= this.startPage;
  }

  private get isLastPage() {
    return this.currentPage >= this.totalPages - (1 - this.startPage);
  }

  private renderSlider() {
    return html`
      <div class="slider-pagination">
        <button
          class="pagination-button"
          @click=${buttonRedirectURL}
          value="${this.prev}"
          ?disabled=${isNothing(this.prev) || this.prev === '#'}
        >
          <mov-icon name="arrow-big-left"></mov-icon>
          <div class="tooltip">Previous Chapter</div>
        </button>

        <button
          class="pagination-button"
          @click=${this.goToPreviousPage}
          ?disabled=${this.isFirstPage}
        >
          <mov-icon name="chevron-left"></mov-icon>
          <div class="tooltip">Previous Page</div>
        </button>

        <div class="slider-container">
          <mov-slider
            class="pagination-slider"
            min="${this.startPage}"
            max="${this.totalPages}"
            .value="${this.currentPage}"
            show-tooltip
            @input="${selectGoToPage}"
          ></mov-slider>
        </div>

        <button class="pagination-button" @click=${this.goToNextPage} ?disabled=${this.isLastPage}>
          <mov-icon name="chevron-right"></mov-icon>
          <div class="tooltip">Next Page</div>
        </button>

        <button
          class="pagination-button"
          @click=${buttonRedirectURL}
          value="${this.next}"
          ?disabled=${isNothing(this.next) || this.next === '#'}
        >
          <mov-icon name="arrow-big-right"></mov-icon>
          <div class="tooltip">Next Chapter</div>
        </button>
      </div>
    `;
  }

  private renderSideArrows() {
    return html`
      <div class="arrows-pagination">
        <button
          class="side-arrow left"
          @click=${this.handleLeftArrowClick}
          ?disabled=${this.isFirstPage && (isNothing(this.prev) || this.prev === '#')}
        >
          <mov-icon name="chevron-left"></mov-icon>
        </button>
        <button
          class="side-arrow right"
          @click=${this.handleRightArrowClick}
          ?disabled=${this.isLastPage && (isNothing(this.next) || this.next === '#')}
        >
          <mov-icon name="chevron-right"></mov-icon>
        </button>
      </div>
    `;
  }

  render() {
    if (this.mode === 'disabled') {
      return nothing;
    }

    const showSlider = this.mode === 'slider' || this.mode === 'both';
    const showArrows = this.mode === 'side-arrows' || this.mode === 'both';

    return html`
      ${showSlider ? this.renderSlider() : nothing} ${showArrows ? this.renderSideArrows() : nothing}
    `;
  }

  private handleLeftArrowClick() {
    if (this.isFirstPage) {
      redirectUrl('prev');
    } else {
      this.goToPreviousPage();
    }
  }

  private handleRightArrowClick() {
    if (this.isLastPage) {
      redirectUrl('next');
    } else {
      this.goToNextPage();
    }
  }

  private goToPreviousPage() {
    this.goToPage(this.currentPage - 1);
  }

  private goToNextPage() {
    this.goToPage(this.currentPage + 1);
  }

  private goToPage(page: number) {
    setAppStateValue('scrollToPage', page);
  }
}
