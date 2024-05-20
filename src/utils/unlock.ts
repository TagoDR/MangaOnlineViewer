import { logScript } from './tampermonkey';
import { awaitElement } from './userscript';

export default async function Unlock() {
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
