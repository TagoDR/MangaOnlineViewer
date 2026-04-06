import { css, html, LitElement, unsafeCSS } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import start from '../core/main.ts';
import { handleUniversalUpload } from '../core/upload.ts';
import localhost from '../main/localhost.ts';
import './components/FileInput.ts';
import './components/Button.ts';
import { themesCSS } from './themes.ts';

/**
 * The landing page for the standalone application.
 * This component provides the initial UI for selecting local files or running tests
 * when the application is not running on a supported manga website.
 */
@customElement('standalone-landing')
export class StandaloneLanding extends LitElement {
  static readonly styles = css`
    :host {
      display: block;
      font-family: var(--mov-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif);
      padding: 2rem;
      color: var(--theme-text-color, #333);
      max-width: 800px;
      margin: 0 auto;
      background-color: var(--theme-body-background);
      min-height: 100vh;
    }
    .card {
      border: 1px solid var(--mov-color-outline, var(--theme-border-color, #dee2e6));
      border-radius: 12px;
      padding: 2.5rem;
      background: var(--mov-color-bg, var(--theme-background-color, #fff));
      box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
      display: flex;
      flex-direction: column;
      gap: 2.5rem;
    }
    header {
      text-align: center;
    }
    h1 {
      margin: 0;
      font-size: 2.5rem;
      font-weight: 800;
      background: var(--theme-primary-color);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      letter-spacing: -0.025em;
    }
    .section-title {
      font-size: 1.25rem;
      font-weight: 700;
      margin-bottom: 1rem;
      color: var(--mov-color-text, var(--theme-text-color, #1a1a1a));
    }
    .info-box {
      background: var(--mov-color-bg-light, var(--theme-hightlight-color, #f8f9fa));
      padding: 1.5rem;
      border-radius: 8px;
      font-size: 1rem;
      border-left: 4px solid var(--mov-color-accent, var(--theme-primary-color, #007bff));
      line-height: 1.5;
    }
    .warning-text {
      color: var(--mov-color-error, #dc3545);
      font-weight: 700;
    }
    .note {
      font-size: 0.875rem;
      color: var(--mov-color-text-dim, #6c757d);
      margin-top: 1rem;
      text-align: center;
    }
    .test-section {
      text-align: center;
      padding: 2rem;
      border: 2px dashed var(--mov-color-outline, var(--theme-border-color, #dee2e6));
      border-radius: 12px;
      background: var(--mov-color-bg-light, var(--theme-hightlight-color, #f8f9fa));
    }
    .loader-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 4rem 2rem;
      gap: 2rem;
      text-align: center;
    }
    .spinner {
      width: 56px;
      height: 56px;
      border: 6px solid var(--mov-color-bg-light, var(--theme-hightlight-color, #f8f9fa));
      border-bottom-color: var(--mov-color-accent, var(--theme-primary-color, #007bff));
      border-radius: 50%;
      display: inline-block;
      box-sizing: border-box;
      animation: rotation 1s linear infinite;
    }
    @keyframes rotation {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `;

  /** Whether to show the local test button. */
  @property({ type: Boolean }) test = false;

  @state() private processing = false;

  private handleTestClick() {
    this.processing = true;
    start([{ ...localhost, url: /.*/ }]);
  }

  private async onFileChange(e: Event) {
    this.processing = true;
    try {
      await handleUniversalUpload(e);
    } catch (err) {
      console.error('Failed to process files:', err);
      this.processing = false;
    }
  }

  render() {
    return html`
      <style>
        ${unsafeCSS(themesCSS(':host'))}
      </style>
      <div class="card">
        <header>
          <h1>MangaOnlineViewer</h1>
        </header>

        ${
          this.processing
            ? html`
              <div class="loader-container">
                <span class="spinner"></span>
                <div>
                  <div class="section-title">Processing your files...</div>
                  <p>This may take a moment depending on the number of images.</p>
                </div>
              </div>
            `
            : html`
              ${
                this.test
                  ? html`
                    <div class="test-section">
                      <div class="section-title">Development Test</div>
                      <p style="margin-bottom: 1.5rem;">
                        Run the viewer with mock data for rapid UI testing.
                      </p>
                      <mov-button
                        @click=${this.handleTestClick}
                        appearance="accent"
                        size="large"
                      >
                        Run Mock Viewer
                      </mov-button>
                    </div>
                  `
                  : ''
              }

              <div class="info-box">
                <div class="section-title">Local Files (ZIP, CBZ, CBR, Images...)</div>
                <p>
                  Can read any ZIP file with images inside and display it like any of the supported
                  manga sites.
                </p>
                <p>
                  <span class="warning-text">Attention</span>: Processing is performed entirely in
                  your browser. Large files may take a moment to load.
                </p>
              </div>

              <mov-file-input
                id="file-input"
                label="Choose local zip files, a folder or multiple images:"
                button-label="Select Content"
                accept=".zip, .cbz, .cbr, .7z, .rar, image/*"
                multiple
                directory
                @change=${this.onFileChange}
              ></mov-file-input>
            `
        }
      </div>
    `;
  }
}
