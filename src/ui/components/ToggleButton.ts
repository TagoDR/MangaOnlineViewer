import { css, html, LitElement, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import '@awesome.me/webawesome/dist/components/button/button.js';
import '@awesome.me/webawesome/dist/components/icon/icon.js';

declare global {
  interface HTMLElementTagNameMap {
    'mov-toggle-button': ToggleButton;
  }
}

type ToggleMode = 'menu' | 'chevron' | 'theme' | 'custom';

/**
 * A generic toggle button that switches between two icons with smooth transitions.
 * It supports three modes: 'menu' (burger/x), 'theme' (sun/moon), 'chevron' (right/down), and 'custom'.
 *
 * @property {ToggleMode} mode - The operating mode. Defaults to 'menu'.
 * @property {boolean} active - The toggle state. Defaults to false.
 * @property {string} label - The accessible label for the button in its default state.
 * @property {string} activeLabel - The accessible label for the button in its active state.
 * @property {string} icon - The name of the icon for the default state in 'custom' mode.
 * @property {string} activeIcon - The name of the icon for the active state in 'custom' mode.
 *
 * @fires toggle - Dispatched when the button is clicked, with the new `active` state in `event.detail.active`.
 *
 * @csspart button - The underlying <wa-button> element.
 * @csspart inactive-icon - The icon for the inactive state.
 * @csspart active-icon - The icon for the active state.
 */
@customElement('mov-toggle-button')
export class ToggleButton extends LitElement {
  static styles = css`
    :host {
      display: inline-flex;
      vertical-align: middle;
    }

    wa-icon {
      transition:
        transform 0.3s ease,
        opacity 0.2s ease;
    }

    /* Two-icon mode (menu, custom) */

    .two-icon-mode wa-icon {
      position: absolute;
      /* Position the icon's top-left corner at the center of the button */
      top: 50%;
      left: 50%;
    }

    .inactive-icon {
      /* Translate the icon back by 50% of its own size to perfectly center it, then apply animations */
      transform: translate(-50%, -50%) scale(1) rotate(0deg);
      opacity: 1;
    }

    .active-icon {
      transform: translate(-50%, -50%) scale(0) rotate(-90deg);
      opacity: 0;
    }

    :host([active]) .inactive-icon {
      transform: translate(-50%, -50%) scale(0) rotate(90deg);
      opacity: 0;
    }

    :host([active]) .active-icon {
      transform: translate(-50%, -50%) scale(1) rotate(0deg);
      opacity: 1;
    }

    /* Single-icon mode (chevron) */
    .chevron-icon {
      transform: rotate(0deg);
    }

    :host([active]) .chevron-icon {
      transform: rotate(90deg);
    }
  `;

  /** The operating mode for the button. */
  @property({ type: String })
  mode: ToggleMode = 'menu';

  /** The active state of the toggle. Reflects to an attribute for CSS styling. */
  @property({ type: Boolean, reflect: true })
  active = false;

  /** The accessible label for the button in its default state. */
  @property({ type: String })
  label = `Toggle ${this.mode}`;

  /** The accessible label for the button in its active state. If not set, `label` is used. */
  @property({ type: String })
  activeLabel?: string;

  /** The name of the icon for the default state when `mode` is 'custom'. */
  @property({ type: String })
  icon = '';

  /** The name of the icon for the active state when `mode` is 'custom'. */
  @property({ type: String })
  activeIcon = '';

  @property({ type: String })
  variant = 'neutral';

  @property({ type: String })
  appearance = 'plain';

  render() {
    const currentLabel = this.active ? (this.activeLabel ?? this.label) : this.label;
    const classes = {
      'two-icon-mode': this.mode === 'menu' || this.mode === 'custom' || this.mode === 'theme',
    };

    return html`
      <wa-button
        exportparts="button"
        @click=${this._onClick}
        class=${classMap(classes)}
        title=${currentLabel}
        aria-label=${currentLabel}
        aria-pressed=${this.active ? 'true' : 'false'}
        variant=${this.variant}
        appearance=${this.appearance}
      >
        ${this._renderIcons()}
      </wa-button>
    `;
  }

  private _getIcons() {
    switch (this.mode) {
      case 'menu':
        return { inactive: 'menu-2', active: 'x' };
      case 'chevron':
        // For chevron, we use a single icon and rotate it.
        return { inactive: 'chevron-right', active: 'chevron-right' };
      case 'theme':
        return { inactive: 'moon', active: 'sun' };
      case 'custom':
        return { inactive: this.icon, active: this.activeIcon };
      default:
        return { inactive: '', active: '' };
    }
  }

  private _renderIcons() {
    const icons = this._getIcons();
    if (!icons.inactive) {
      return nothing;
    }

    // The 'chevron' mode uses a single, rotating icon for a smoother animation.
    if (this.mode === 'chevron') {
      return html`
        <wa-icon
          part="inactive-icon active-icon"
          class="chevron-icon"
          name=${icons.inactive}
        ></wa-icon>
      `;
    }

    // The 'menu', 'theme', and 'custom' modes swap between two distinct icons.
    return html`
      <wa-icon
        part=${this.active ? 'active-icon' : 'inactive-icon'}
        class=${this.active ? 'active-icon' : 'inactive-icon'}
        name=${this.active ? icons.active : icons.inactive}
      ></wa-icon>
    `;
  }

  private _onClick() {
    this.active = !this.active;
    this.dispatchEvent(
      new CustomEvent('toggle', {
        detail: { value: this.active },
        bubbles: true,
        composed: true,
      }),
    );
  }
}
