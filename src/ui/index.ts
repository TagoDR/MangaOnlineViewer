import { setAppStateValue } from '../core/settings.ts';
import type { IManga } from '../types';
import { cleanUpElement } from '../utils/cleanup';
import { logScriptVerbose } from '../utils/tampermonkey';
import head from './head';
import './setup.ts';
import './App.ts';
import loadImages from './Image.ts';

/**
 * Initializes the manga viewer UI.
 * This function cleans up the original page content, injects the viewer's HTML structure,
 * sets the manga data in the application state, and begins loading the manga images.
 * @param {IManga} manga - The manga object containing all necessary data to display the viewer.
 */
export default function display(manga: IManga) {
  console.warn('Running Lit-ts');
  cleanUpElement(document.documentElement, document.head, document.body);
  window.scrollTo(0, 0);
  logScriptVerbose(`Page Cleaned Up`);
  document.head.innerHTML = head(manga);
  document.body.innerHTML = `<manga-online-viewer></manga-online-viewer>`;
  setAppStateValue('manga', manga);
  loadImages();
}
