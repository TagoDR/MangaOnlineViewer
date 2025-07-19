/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />
/** biome-ignore-all lint/suspicious/noExplicitAny: global variables */

/**
 * Declares the `unsafeWindow` global variable provided by userscript managers like Tampermonkey.
 * This provides a direct, un-sandboxed reference to the page's `window` object.
 * The index signature `[key: string]: any` allows accessing any property without TypeScript errors.
 */
declare let unsafeWindow: Window & { [key: string]: any };

/**
 * Augments the standard `Window` type with an index signature.
 * This allows assigning and accessing arbitrary properties on the global `window` object,
 * a common practice for scripts needing to share data or functions globally.
 */
declare let window: Window & { [key: string]: any };
