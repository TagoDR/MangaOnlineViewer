import { logScript } from './tampermonkey';

export default function Unlock() {
  try {
    const originalAttachShadow = Element.prototype.attachShadow;
    Element.prototype.attachShadow = function customAttachShadow() {
      return originalAttachShadow.apply(this, [{ mode: 'open' }]);
    };
  } catch (e) {
    logScript('Fail to unlock Closed Shadow DOM', e);
    setTimeout(() => window.location.reload(), 1000);
  }
}
