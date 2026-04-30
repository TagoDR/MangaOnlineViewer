import { logScript } from './tampermonkey';
import { awaitElement } from './userscript';

/**
 * Monkey-patches `Element.prototype.attachShadow` to force all shadow DOMs into 'open' mode.
 * This allows the script to access elements inside what would otherwise be closed shadow roots.
 * It should be executed early to ensure it applies to all custom elements on the page.
 *
 * @returns {Promise<void>} A promise that resolves once the patch is applied and the `body` element is available.
 */
export default async function Unlock(): Promise<void> {
  try {
    const originalAttachShadow = Element.prototype.attachShadow;
    Element.prototype.attachShadow = function customAttachShadow() {
      return originalAttachShadow.apply(this, [{ mode: 'open' }]);
    };
  } catch (e) {
    logScript('Failed to unlock Closed Shadow DOM', e);
  }
  await awaitElement('body');
}
