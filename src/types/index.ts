export * from './IBookmark';
export * from './IManga';
export * from './ISettings';
export * from './ISite';

declare global {
  interface Element {
    originalAttachShadow: typeof Element.prototype.attachShadow;
  }
}
