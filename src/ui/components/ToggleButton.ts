import { css, html, LitElement, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit-html/directives/if-defined.js';

declare global {
  interface HTMLElementTagNameMap {
    'toggle-button': ToggleButton;
  }
}

/**
 * Defines the operational mode of the toggle button, which determines the icons and animation style used.
 * - `menu`: Toggles between a menu icon and an 'X' icon.
 * - `chevron`: A single chevron icon that rotates on toggle.
 * - `theme`: Toggles between a sun and a moon icon.
 * - `custom`: Uses the `icon` and `activeIcon` properties for custom icons.
 * - `play-pause`: Toggles between play and pause icons.
 * - `expand`: A single arrow icon that rotates to indicate expansion.
 */
type ToggleMode = 'menu' | 'chevron' | 'theme' | 'custom' | 'play-pause' | 'expand';

/**
 * A generic toggle button that switches between two states, often represented by different icons.
 * It is built upon `mov-button` and `mov-icon` and supports various modes for common use cases.
 *
 * @element toggle-button
 *
 * @fires toggle - Dispatched when the button is clicked. The `detail` object contains the new `value` (boolean), the `oldValue`, and the `mode`.
 */
@customElement('toggle-button')
export class ToggleButton extends LitElement {
  static styles = css`
    :host {
      display: inline-flex;
      vertical-align: middle;
    }

    /* Base button styling */
    mov-button {
      position: relative;
    }

    /* Single icon modes - simple rotation in place */
    .single-icon-mode mov-icon {
      transition: transform 0.3s ease;
      display: block;
    }

    .chevron-icon {
      transform: rotate(0deg);
    }

    :host([active]) .chevron-icon {
      transform: rotate(90deg);
    }

    .expand-icon {
      transform: rotate(0deg);
    }

    :host([active]) .expand-icon {
      transform: rotate(180deg);
    }

    /* Two icon modes - positioned for smooth swap */
    .two-icon-mode {
      position: relative;
    }

    .two-icon-mode mov-icon {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      transition:
        opacity 0.25s ease,
        transform 0.3s ease;
    }

    /* Default state: inactive visible, active hidden */
    .inactive-icon {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }

    .active-icon {
      opacity: 0;
      transform: translate(-50%, -50%) scale(0.8);
    }

    /* Active state: inactive hidden, active visible */
    :host([active]) .inactive-icon {
      opacity: 0;
      transform: translate(-50%, -50%) scale(0.8);
    }

    :host([active]) .active-icon {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }

    /* Play-pause uses single icon swap without positioning issues */
    .play-pause-icon {
      transition: opacity 0.2s ease;
      display: block;
    }

    /* Simple click feedback without disrupting layout */
    mov-button:active {
      transform: scale(0.96);
    }

    /* Loading state */
    :host([loading]) mov-icon {
      animation: spin 1s linear infinite;
    }

    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }

    /* Hover effects */
    mov-button:hover:not(:disabled) {
      filter: brightness(1.05);
    }

    /* Focus visible enhancement */
    mov-button:focus-visible {
      outline: 2px solid var(--mov-color-fill-loud, currentColor);
      outline-offset: 2px;
    }

    /* Ensure proper centering for all modes */
    mov-button.single-icon-mode {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    /* Fix icon sizing consistency */
    mov-icon {
      flex-shrink: 0;
    }
  `;

  /**
   * The operational mode of the button, determining its icons and animation.
   * @type {ToggleMode}
   */
  @property({ type: String })
  mode: ToggleMode = 'menu';

  /**
   * The current state of the toggle (`true` for active, `false` for inactive).
   * @type {boolean}
   */
  @property({ type: Boolean, reflect: true })
  active = false;

  /**
   * The accessibility label for the button in its default (inactive) state.
   * @type {string}
   */
  @property({ type: String })
  label = '';

  /**
   * The accessibility label for the button in its active state. If not provided, the default `label` is used.
   * @type {string | undefined}
   */
  @property({ type: String })
  activeLabel?: string;

  /**
   * The name of the icon for the default (inactive) state when `mode` is 'custom'.
   * @type {string}
   */
  @property({ type: String })
  icon = '';

  /**
   * The name of the icon for the active state when `mode` is 'custom'.
   * @type {string}
   */
  @property({ type: String })
  activeIcon = '';

  /**
   * The visual appearance of the button.
   * @type {'accent' | 'filled' | 'outline' | 'light' | 'subtle' | 'plain'}
   */
  @property({ type: String, reflect: true })
  appearance?: 'accent' | 'filled' | 'outline' | 'light' | 'subtle' | 'plain' = 'accent';

  /**
   * The size of the button.
   * @type {'small' | 'medium' | 'large'}
   */
  @property({ type: String, reflect: true })
  size?: 'small' | 'medium' | 'large' = 'medium';

  /**
   * If `true`, the button will be disabled.
   * @type {boolean}
   */
  @property({ type: Boolean })
  disabled = false;

  /**
   * If `true`, a loading spinner will be shown (if applicable to the mode).
   * @type {boolean}
   */
  @property({ type: Boolean, reflect: true })
  loading = false;

  connectedCallback() {
    super.connectedCallback();
    // Set default label if none provided
    if (!this.label) {
      this.label = this._getDefaultLabel();
    }
  }

  render() {
    const currentLabel = this.active ? (this.activeLabel ?? this.label) : this.label;
    const classes = {
      'two-icon-mode': ['menu', 'custom', 'theme'].includes(this.mode),
      'single-icon-mode': ['chevron', 'expand', 'play-pause'].includes(this.mode),
    };

    return html`
      <mov-button
        @click=${this._onClick}
        .appearance=${ifDefined(this.appearance)}
        .size=${ifDefined(this.size)}
        ?disabled=${ifDefined(this.disabled)}
        ?loading=${ifDefined(this.loading)}
        .title=${ifDefined(this.title)}
        class=${classMap(classes)}
        title=${currentLabel}
        aria-label=${currentLabel}
        aria-pressed=${this.active ? 'true' : 'false'}
        icon-only
      >
        ${this._renderIcons()}
      </mov-button>
    `;
  }

  private _getDefaultLabel(): string {
    switch (this.mode) {
      case 'menu':
        return 'Toggle menu';
      case 'chevron':
        return 'Toggle expand';
      case 'theme':
        return 'Toggle theme';
      case 'play-pause':
        return 'Toggle play';
      case 'expand':
        return 'Toggle expand';
      case 'custom':
        return 'Toggle';
      default:
        return 'Toggle';
    }
  }

  private _getIcons() {
    switch (this.mode) {
      case 'menu':
        return { inactive: 'menu-2', active: 'x' };
      case 'chevron':
        return { inactive: 'chevron-right', active: 'chevron-right' };
      case 'theme':
        return { inactive: 'moon', active: 'sun' };
      case 'play-pause':
        return { inactive: 'player-play', active: 'player-pause' };
      case 'expand':
        return { inactive: 'arrow-autofit-down', active: 'arrow-autofit-down' };
      case 'custom':
        return { inactive: this.icon, active: this.activeIcon };
      default:
        return { inactive: '', active: '' };
    }
  }

  private _renderIcons() {
    const icons = this._getIcons();
    if (!icons.inactive) return nothing;

    // Single icon rotation modes
    if (this.mode === 'chevron') {
      return html`<mov-icon
        class="chevron-icon"
        name=${icons.inactive}
      ></mov-icon>`;
    }

    if (this.mode === 'expand') {
      return html`<mov-icon
        class="expand-icon"
        name=${icons.inactive}
      ></mov-icon>`;
    }

    // Play-pause mode - single icon swap without absolute positioning
    if (this.mode === 'play-pause') {
      return html`<mov-icon
        class="play-pause-icon"
        name=${this.active ? icons.active : icons.inactive}
      ></mov-icon>`;
    }

    // Two-icon swap modes (menu, theme, custom)
    return html`
      <mov-icon
        class="inactive-icon"
        name=${icons.inactive}
      ></mov-icon>
      <mov-icon
        class="active-icon"
        name=${icons.active}
      ></mov-icon>
    `;
  }

  private _onClick() {
    if (this.disabled || this.loading) return;

    const oldActive = this.active;
    this.active = !this.active;

    this.dispatchEvent(
      new CustomEvent('toggle', {
        detail: {
          value: this.active,
          oldValue: oldActive,
          mode: this.mode,
        },
        bubbles: true,
        composed: true,
      }),
    );
  }

  /** Programmatically triggers the toggle action. */
  toggle(): void {
    this._onClick();
  }

  /**
   * Sets the active state of the button without dispatching a `toggle` event.
   * @param {boolean} active - The new active state.
   */
  setActive(active: boolean): void {
    this.active = active;
  }
}
