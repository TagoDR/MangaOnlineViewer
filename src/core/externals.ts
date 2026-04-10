/**
 * An array of external JavaScript libraries that are required for the script to function.
 * These scripts are loaded by Tampermonkey's `@require` directive in the userscript header.
 * @type {string[]}
 */
export const requiredScripts: string[] = [
  'https://cdn.jsdelivr.net/npm/colorjs.io@0.6.1/dist/color.global.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/jszip/3.9.1/jszip.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.js',
  'https://cdn.jsdelivr.net/npm/lodash@4.17.23/lodash.min.js',
  'https://cdn.jsdelivr.net/npm/hotkeys-js@4.0.2/dist/hotkeys-js.min.js',
  'https://cdn.jsdelivr.net/npm/bowser@2.14.1/bundled.js',
  'https://cdnjs.cloudflare.com/ajax/libs/blob-util/2.0.2/blob-util.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.5/FileSaver.min.js',
];
