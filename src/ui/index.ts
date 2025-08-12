import { setAppStateValue } from '../core/settings.ts';
import type { IManga } from '../types';
import { cleanUpElement } from '../utils/cleanup';
import { logScriptVerbose } from '../utils/tampermonkey';
import head from './head';
import './App.ts';
import loadImages from './Image.ts';

export default function display(manga: IManga) {
  cleanUpElement(document.documentElement, document.head, document.body);
  window.scrollTo(0, 0);
  logScriptVerbose(`Page Cleaned Up`);
  document.head.innerHTML = head(manga);
  document.body.innerHTML = `<manga-online-viewer></manga-online-viewer>`;
  setAppStateValue('manga', manga);
  loadImages();
}
