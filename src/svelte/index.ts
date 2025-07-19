import { mount } from 'svelte';
import type { IManga } from '../types';
// import events from '../ui/events';
import { loadManga } from '../ui/page';
import head from '../ui/reader';
import { cleanUpElement } from '../utils/cleanup.ts';
import { logScriptVerbose } from '../utils/tampermonkey.ts';
import App from './App.svelte';

export default function loadReader(manga: IManga) {
  console.warn('Using Svelte');
  cleanUpElement(document.documentElement, document.head, document.body);
  window.scrollTo(0, 0);
  logScriptVerbose(`Page Cleaned Up`);
  document.head.innerHTML = head(manga);
  document.body.innerHTML = '<div id="MOV"></div>';
  mount(App, {
    target: document.body,
    props: {
      manga,
    },
  });
  // events();
  loadManga(manga, 0);
  if (manga.comments) document.querySelector('#CommentsArea')?.append(manga.comments);
}
