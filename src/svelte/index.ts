import { mount } from 'svelte';
import App from './App.svelte';
import type { IManga } from '../types';
import head from '../ui/reader';
import { loadManga } from '../ui/page';
import events from '../ui/events';

export default function loadReader(manga: IManga) {
  document.head.innerHTML = head(manga);
  document.body.innerHTML = "<div id='MOV'></div>";
  // eslint-disable-next-line no-new
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
