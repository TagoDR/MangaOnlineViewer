import type { Meta, StoryObj } from '@storybook/web-components';
import { css, html, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { handleUniversalUpload } from '../core/upload';
import { themesCSS } from '../ui/themes';
import '../ui/components/FileInput.ts';

/**
 * A wrapper component for the Standalone landing page story.
 */
@customElement('standalone-story-wrapper')
// @ts-expect-error
// biome-ignore lint/correctness/noUnusedVariables: Display
class StandaloneStoryWrapper extends LitElement {
  static readonly styles = css`
    :host {
      display: block;
      font-family: var(--mov-font-family, sans-serif);
      padding: 2rem;
      color: var(--mov-text-color, #333);
      max-width: 800px;
      margin: 0 auto;
    }
    .container {
      border: 1px solid var(--mov-color-outline, #dee2e6);
      border-radius: 8px;
      padding: 2rem;
      background: var(--mov-color-bg, #fff);
    }
    h1 {
      margin-top: 0;
    }
    .info {
      background: var(--mov-color-bg-light, #f8f9fa);
      padding: 1rem;
      border-radius: 4px;
      margin-bottom: 1.5rem;
      font-size: 0.9rem;
    }
    .note {
      font-size: 0.8rem;
      color: var(--mov-color-text-dim, #6c757d);
      margin-top: 1rem;
    }
  `;

  @state() private pageLoaded = false;

  connectedCallback() {
    super.connectedCallback();
    const style = document.createElement('style');
    style.textContent = themesCSS();
    this.shadowRoot?.appendChild(style);
  }

  private onFileChange(e: Event) {
    console.log('File changed in story:', e);
    // In a real story we can't easily mock the full preparePage process without side effects
    // but we can at least trigger the handler.
    handleUniversalUpload(e);
    this.pageLoaded = true;
  }

  render() {
    if (this.pageLoaded) {
      return html`
        <div class="container">
          <h2>Application Loading...</h2>
          <p>The viewer is being initialized with your local files.</p>
          <mov-button @click=${() => (this.pageLoaded = false)}>Back to Upload</mov-button>
        </div>
      `;
    }

    return html`
      <div class="container">
        <h1>MangaOnlineViewer</h1>
        <div class="info">
          <h2>Local Files (ZIP, CBZ, CBR..., PNGs, JPGs...)</h2>
          <p>
            Can read any zip file with images inside and display it like any of the supported sites.
          </p>
        </div>

        <mov-file-input
          id="file-input"
          label="Choose the local zip file, a folder or images:"
          button-label="Select Local Content"
          accept=".zip, .cbz, .cbr, .7z, .rar, image/*"
          multiple
          directory
          @change=${this.onFileChange}
        ></mov-file-input>

        <p class="note">
          Note : your browser will process the zip file, don't choose a file too big !
        </p>
      </div>
    `;
  }
}

export default {
  title: 'Features/StandaloneLanding',
  render: () => html`<standalone-story-wrapper></standalone-story-wrapper>`,
} satisfies Meta;

export const Default: StoryObj = {
  name: 'Standalone Landing Page',
};
