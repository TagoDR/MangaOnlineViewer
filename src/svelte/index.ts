import { mount } from 'svelte';
import App from './App.svelte';
import type { IManga } from '../types';
import head from '../ui/reader';
import { loadManga } from '../ui/page';
import events from '../ui/events';
import { cleanUpElement } from '../utils/cleanup.ts';
import { logScriptVerbose } from '../utils/tampermonkey.ts';

export default function loadReader(manga: IManga) {
  cleanUpElement(document.documentElement, document.head, document.body);
  window.scrollTo(0, 0);
  logScriptVerbose(`Page Cleaned Up`);
  document.head.innerHTML = head(manga);
  document.body.innerHTML = '<div id="MOV"></div>';
  mount(App, {
    target: document.getElementById('MOV')!,
    props: {
      manga,
    },
  });
  events();
  loadManga(manga, 0);
  if (manga.comments) document.querySelector('#CommentsArea')?.append(manga.comments);
}
