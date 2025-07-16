import { getSettingsValue } from '../core/settings.ts';
import type { IManga } from '../types';
import { cleanUpElement } from '../utils/cleanup';
import { logScriptVerbose } from '../utils/tampermonkey';
import body from './components/App';
import events from './events';
import { loadManga } from './page';
import head from './reader';

export default function display(manga: IManga) {
  cleanUpElement(document.documentElement, document.head, document.body);
  document.documentElement.classList.add(getSettingsValue('colorScheme'));
  document.documentElement.setAttribute('data-theme', getSettingsValue('theme'));
  window.scrollTo(0, 0);
  logScriptVerbose(`Page Cleaned Up`);
  document.head.innerHTML = head(manga);
  document.body.innerHTML = body(manga);
  events();
  loadManga(manga);
  if (manga.comments) document.querySelector('#CommentsArea')?.append(manga.comments);
}
