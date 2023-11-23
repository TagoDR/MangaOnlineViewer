export default function Unlock() {
  if (!Object.isExtensible(Element)) {
    // eslint-disable-next-line no-global-assign
    Element = Element.constructor();
  }
  const originalAttachShadow = Element.prototype.attachShadow;
  Element.prototype.attachShadow = function attachShadow() {
    return originalAttachShadow.apply(this, [{ mode: 'open' }]);
  };
  Object.preventExtensions(Element);
}
