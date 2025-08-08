import type { IManga, IMangaImages } from '../types';
import { cleanUpElement } from '../utils/cleanup';
import { logScriptVerbose } from '../utils/tampermonkey';
import head from './head.ts';
import './setup.ts';
import './App.ts';
import { setAppStateValue } from '../core/settings.ts';

export default function display(manga: IManga) {
  console.warn('Using WebComponents - Lit');
  cleanUpElement(document.documentElement, document.head, document.body);
  window.scrollTo(0, 0);
  logScriptVerbose(`Page Cleaned Up`);
  document.head.innerHTML = head(manga);
  document.body.innerHTML = '<mov-app></mov-app>';
  document.documentElement.classList.add('wa-dark');
  setAppStateValue('manga', manga as IMangaImages);
}
