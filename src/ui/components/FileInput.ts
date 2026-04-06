import { css, html, LitElement, nothing } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { getLocaleString } from '../../core/settings.ts';
import './Icon.ts';
import './Button.ts';

declare global {
  interface HTMLElementTagNameMap {
    'mov-file-input': FileInput;
  }
}

/**
 * A custom file input component that provides a drop zone for file selection.
 * It mimics the appearance and functionality of Web Awesome's wa-file-input.
 *
 * @element mov-file-input
 *
 * @fires change - Dispatched when the selection changes.
 * @fires wa-change - Dispatched when the selection changes (Web Awesome compatibility).
 */
@customElement('mov-file-input')
export class FileInput extends LitElement {
  static readonly styles = css`
    :host {
      display: block;
      width: 100%;
      --mov-file-input-border-color: var(--theme-border-color, #dee2e6);
      --mov-file-input-border-color-hover: var(--theme-hightlight-color, #007bff);
      --mov-file-input-bg: var(--theme-background-color, #f8f9fa);
      --mov-file-input-bg-hover: var(--theme-hightlight-color, #ffffff);
    }

    .file-input {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .drop-zone {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 2rem;
      border: 2px dashed var(--mov-file-input-border-color);
      border-radius: 8px;
      background-color: var(--mov-file-input-bg);
      cursor: pointer;
      transition: all 0.2s ease;
      text-align: center;
      min-height: 160px;
      overflow: hidden;
    }

    .drop-zone:hover:not(.disabled) {
      border-color: var(--mov-file-input-border-color-hover);
      background-color: var(--mov-file-input-bg-hover);
    }

    .drop-zone.dragging {
      border-color: var(--mov-color-fill-loud, #007bff);
      background-color: var(--theme-hightlight-color, #e7f1ff);
      transform: scale(1.01);
    }

    .drop-zone.disabled {
      cursor: not-allowed;
      opacity: 0.6;
    }

    .folder-button {
      position: absolute;
      top: 0.5rem;
      right: 0.5rem;
      z-index: 30;
      pointer-events: auto;
    }

    input[type='file'] {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      cursor: pointer;
      z-index: 10;
    }

    #directory-input {
      display: none;
    }

    .disabled input[type='file'] {
      display: none;
    }

    .icon-wrapper {
      margin-bottom: 1rem;
      color: var(--mov-color-on-quiet, #6c757d);
      transition: color 0.2s ease;
    }

    .drop-zone:hover .icon-wrapper {
      color: var(--mov-color-fill-loud, #007bff);
    }

    .drop-zone:has(.folder-button:hover) .icon-wrapper {
      color: var(--mov-color-on-quiet, #6c757d);
    }

    .label-text {
      font-size: 1.125rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
      color: var(--theme-text-color, #333);
    }

    .description-text {
      font-size: 0.875rem;
      color: var(--mov-color-on-quiet, #6c757d);
      margin-bottom: 1rem;
    }

    .file-list {
      margin-top: 1rem;
      font-size: 0.875rem;
      color: var(--theme-text-color, #333);
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
    }

    .file-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.5rem;
      padding: 0.5rem 0.75rem;
      background: var(--theme-background-color, #fff);
      border: 1px solid var(--theme-border-color, #dee2e6);
      border-radius: 6px;
    }

    .file-info {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      overflow: hidden;
    }

    .file-name {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .remove-button {
      color: var(--mov-color-on-quiet, #6c757d);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.25rem;
      border-radius: 4px;
      transition: background-color 0.2s ease;
      z-index: 20;
    }

    .remove-button:hover {
      background-color: var(--theme-hightlight-color, #f8f9fa);
      color: var(--mov-color-error, #dc3545);
    }

    label {
      font-size: 0.875rem;
      font-weight: 500;
      color: var(--theme-text-color, currentColor);
    }

    .help-text {
      font-size: 0.75rem;
      color: var(--mov-color-on-quiet, #6c757d);
      margin-top: 0.25rem;
    }

    mov-button {
      pointer-events: none; /* Let the input handle clicks */
    }

    .folder-button mov-button {
      pointer-events: auto;
    }
  `;

  @query('#directory-input') private readonly directoryInput!: HTMLInputElement;

  /** The accepted file types (e.g., '.zip, .cbz', 'image/*'). */
  @property() accept = '';

  /** Allows multiple files to be selected. */
  @property({ type: Boolean }) multiple = false;

  /** Allows selecting directories (using webkitdirectory). */
  @property({ type: Boolean }) directory = false;

  /** Disables the input. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /** Makes the input required. */
  @property({ type: Boolean }) required = false;

  /** The label for the component (above the drop zone). */
  @property() label = '';

  /** The primary text inside the drop zone. */
  @property() title = '';

  /** The secondary text inside the drop zone. */
  @property() description = '';

  /** The label for the button inside the drop zone. */
  @property({ attribute: 'button-label' }) buttonLabel = '';

  /** The help text displayed below the component. */
  @property({ attribute: 'help-text' }) helpText = '';

  /** The appearance of the button. */
  @property() appearance: 'accent' | 'filled' | 'outlined' | 'plain' = 'outlined';

  @state() private selectedFiles: File[] = [];
  @state() private isDragging = false;

  /** Returns the selected files as a FileList or null. */
  get files(): FileList | null {
    const dataTransfer = new DataTransfer();
    for (const file of this.selectedFiles) {
      dataTransfer.items.add(file);
    }
    return dataTransfer.files;
  }

  private handleDragOver(e: DragEvent) {
    if (this.disabled) return;
    e.preventDefault();
    this.isDragging = true;
  }

  private handleDragLeave() {
    this.isDragging = false;
  }

  private handleDrop(e: DragEvent) {
    if (this.disabled) return;
    e.preventDefault();
    this.isDragging = false;

    if (e.dataTransfer?.files) {
      this.selectedFiles = Array.from(e.dataTransfer.files);
      this.dispatchChangeEvent();
    }
  }

  private handleFileChange(e: Event) {
    const input = e.target as HTMLInputElement;
    this.selectedFiles = Array.from(input.files ?? []);
    this.dispatchChangeEvent();
  }

  private handleFolderButtonClick(e: Event) {
    e.stopPropagation();
    this.directoryInput.click();
  }

  private dispatchChangeEvent() {
    const event = new CustomEvent('change', {
      bubbles: true,
      composed: true,
      detail: { files: this.selectedFiles },
    });
    this.dispatchEvent(event);

    const waEvent = new CustomEvent('wa-change', {
      bubbles: true,
      composed: true,
      detail: { files: this.selectedFiles },
    });
    this.dispatchEvent(waEvent);
  }

  private removeFile(index: number, event: Event) {
    event.stopPropagation();
    this.selectedFiles = this.selectedFiles.filter((_, i) => i !== index);
    this.dispatchChangeEvent();
  }

  private renderFileList() {
    if (this.selectedFiles.length === 0) return nothing;

    return html`
      <div class="file-list">
        ${this.selectedFiles.slice(0, 10).map(
          (file, index) => html`
            <div class="file-item">
              <div class="file-info">
                <mov-icon
                  name="IconFileDownload"
                  size="16px"
                ></mov-icon>
                <span class="file-name">${file.name}</span>
              </div>
              <div
                class="remove-button"
                @click=${(e: Event) => this.removeFile(index, e)}
              >
                <mov-icon
                  name="IconX"
                  size="16px"
                ></mov-icon>
              </div>
            </div>
          `,
        )}
        ${
          this.selectedFiles.length > 10
            ? html`<div class="file-item">...and ${this.selectedFiles.length - 10} more files</div>`
            : ''
        }
      </div>
    `;
  }

  render() {
    const dropZoneClasses = {
      'drop-zone': true,
      dragging: this.isDragging,
      disabled: this.disabled,
    };

    return html`
      <div class="file-input">
        ${this.label ? html`<label>${this.label}</label>` : ''}
        <div
          class=${classMap(dropZoneClasses)}
          @dragover=${this.handleDragOver}
          @dragleave=${this.handleDragLeave}
          @drop=${this.handleDrop}
        >
          <input
            id="file-input"
            type="file"
            accept=${ifDefined(this.accept || undefined)}
            ?multiple=${this.multiple}
            ?required=${this.required}
            ?disabled=${this.disabled}
            @change=${this.handleFileChange}
          />
          <input
            id="directory-input"
            type="file"
            webkitdirectory
            mozdirectory
            directory
            ?disabled=${this.disabled}
            @change=${this.handleFileChange}
          />
          ${
            this.directory
              ? html`
                <div class="folder-button">
                  <mov-button
                    appearance="outlined"
                    size="medium"
                    ?disabled=${this.disabled}
                    @click=${this.handleFolderButtonClick}
                    title="Select Folder"
                  >
                    <mov-icon
                      name="IconFolderOpen"
                      size="18px"
                    ></mov-icon>
                  </mov-button>
                </div>
              `
              : ''
          }
          <div class="icon-wrapper">
            <mov-icon
              name="IconBookUpload"
              size="40px"
            ></mov-icon>
          </div>
          <div class="label-text">
            ${this.title || getLocaleString('CHOOSE_FILE') || 'Choose File'}
          </div>
          <div class="description-text">
            ${this.description || 'Drag and drop files here or click to browse'}
          </div>
        </div>
        ${this.helpText ? html`<div class="help-text">${this.helpText}</div>` : ''}
        ${this.renderFileList()}
      </div>
    `;
  }
}
