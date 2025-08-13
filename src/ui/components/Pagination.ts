import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

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
      //z-index: 1000;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      width: 100%;
    }

    wa-slider {
      min-width: 10rem;
      width: 50%;
      display: inline-block;
      margin: 0 1rem;
      --thumb-width: 1rem;
      --thumb-height: 1rem;
    }
  `;

  @property({ type: Number })
  currentPage = 1;

  @property({ type: Number })
  totalPages = 1;

  @property({ type: Number })
  startPage = 1;

  render() {
    return html`
      <wa-button
        id="prevChapter"
        @click=${() => this.goToPage(this.startPage)}
        ?disabled=${this.currentPage <= this.startPage}
        size="small"
        variant="brand"
        appearance="outlined"
      >
        <wa-icon name="chevron-left-pipe"></wa-icon>
      </wa-button>
      <wa-tooltip
        for="prevChapter"
        placement="top"
      >
        Previous Chapter
      </wa-tooltip>
      <wa-button
        id="prev"
        @click=${this.goToPreviousPage}
        ?disabled=${this.currentPage <= this.startPage}
        size="small"
        variant="brand"
        appearance="outlined"
      >
        <wa-icon name="chevron-left"></wa-icon>
      </wa-button>
      <wa-tooltip
        for="prev"
        placement="top"
      >
        Previous Page
      </wa-tooltip>
      <wa-slider
        id="pagination"
        size="medium"
        variant="plain"
        step="1"
        min="${this.startPage}"
        max="${this.totalPages}"
        .value="${this.currentPage}"
        @input="${this.inputPaginationSlider}"
        with-markers
        with-tooltip
      >
      </wa-slider>
      <wa-button
        id="next"
        @click=${this.goToNextPage}
        ?disabled="${this.currentPage === this.totalPages - (this.startPage - 1)}"
        size="small"
        variant="brand"
        appearance="outlined"
      >
        <wa-icon name="chevron-right"></wa-icon>
      </wa-button>
      <wa-tooltip
        for="next"
        placement="top"
      >
        Next Page
      </wa-tooltip>
      <wa-button
        id="nextChapter"
        @click=${() => this.goToPage(this.totalPages)}
        ?disabled="${this.currentPage === this.totalPages - (this.startPage - 1)}"
        size="small"
        variant="brand"
        appearance="outlined"
      >
        <wa-icon name="chevron-right-pipe"></wa-icon>
      </wa-button>
      <wa-tooltip
        for="nextChapter"
        placement="top"
      >
        Next Chapter
      </wa-tooltip>
    `;
  }

  private goToPreviousPage() {
    this.dispatchEvent(new CustomEvent('prev-page'));
  }

  private goToNextPage() {
    this.dispatchEvent(new CustomEvent('next-page'));
  }

  private goToPage(page: number) {
    this.dispatchEvent(new CustomEvent('goto-page', { detail: page }));
  }

  private inputPaginationSlider(event: Event) {
    const slider = event.target as HTMLInputElement;
    this.goToPage(Number(slider.value));
  }
}
