import { useStores } from '@nanostores/lit';
import { html, LitElement, type PropertyValues, unsafeCSS } from 'lit';
import { customElement, property, queryAll } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { map } from 'lit/directives/map.js';
import {
  appState,
  getAppStateValue,
  getLocaleString,
  getSettingsValue,
  locale,
  setAppStateValue,
  settings,
} from '../core/settings';
import type { ViewMode } from '../types';
import sequence from '../utils/sequence';
import type MangaPage from './MangaPage.ts';
import fluid from './styles/fluid.css?inline';
import styles from './styles/Reader.css?inline';

@customElement('mov-reader')
@useStores(settings, locale, appState)
export default class Reader extends LitElement {
  static styles = [unsafeCSS(styles), unsafeCSS(fluid)];

  @queryAll('mov-manga-page')
  pages!: NodeListOf<MangaPage>;

  @property({ type: String })
  viewMode: ViewMode = 'WebComic';

  connectedCallback() {
    super.connectedCallback();
    // Apply ID to the host element for external CSS targeting.
    this.id = 'Chapter';
    this.addEventListener('wheel', this.wheelEventHandler);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('wheel', this.wheelEventHandler);
  }

  // The host element (<mov-reader>) itself will be the container.
  render() {
    const pages = getAppStateValue('manga')?.pages ?? 0;
    const begin = getAppStateValue('manga')?.begin ?? 1;

    return html`
      ${map(
        sequence(pages, begin),
        index => html`
          <mov-manga-page
            id="Page${index}"
            class="${classMap({
              MangaPage: true,
              fitWidthIfOversize:
                getSettingsValue('fitWidthIfOversize') &&
                getSettingsValue('viewMode') !== 'FluidRTL' &&
                getSettingsValue('viewMode') !== 'FluidLTR',
            })}"
            index="${index}"
          ></mov-manga-page>
          ${
            this.viewMode === 'Vertical'
              ? html`
                <wa-divider class="separator">
                  ${index === pages ? getLocaleString('END') : `${index} / ${pages}`}</wa-divider
                >
              `
              : ''
          }
        `,
      )}
    `;
  }

  _updateHostClasses() {
    const viewModes = ['WebComic', 'Vertical', 'FluidLTR', 'FluidRTL'];
    viewModes.forEach(mode => {
      this.classList.toggle(mode, mode === this.viewMode);
    });
  }

  // The render method should NOT create a container.

  protected updated(changedProperties: PropertyValues) {
    super.updated(changedProperties);

    // Apply dynamic classes to the host element for proper styling.
    this._updateHostClasses();

    // Handle programmatic scrolling.
    const pageIndex = getAppStateValue('scrollToPage');
    if (typeof pageIndex === 'number' && pageIndex > 0) {
      const targetImage = this.pages[pageIndex - 1];
      if (targetImage) {
        // Update the state immediately for a responsive UI.
        setAppStateValue('currentPage', pageIndex);
        // Reset the trigger.
        setAppStateValue('scrollToPage', undefined);
        // Perform the scroll.
        targetImage.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Reset the flag after the scroll animation is likely finished.
      } else {
        // If image not found, just reset the trigger.
        setAppStateValue('scrollToPage', undefined);
      }
    }
  }

  // A single, unified wheel handler for the component.
  private wheelEventHandler = (e: WheelEvent) => {
    // For fluid modes, this component is the scroll container.
    // We handle the scroll and prevent it from bubbling to the parent.
    if (getSettingsValue('viewMode') === 'FluidLTR') {
      e.preventDefault();
      this.scrollLeft += e.deltaY + e.deltaX;
    } else if (getSettingsValue('viewMode') === 'FluidRTL') {
      e.preventDefault();
      this.scrollLeft -= e.deltaY + e.deltaX;
    }
    // For vertical modes, we do nothing and let the event bubble up
    // to the parent <main> element, which will scroll naturally.
  };
}
