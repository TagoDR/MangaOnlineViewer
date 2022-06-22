import { IManga } from '../../types';

const chapterControl = (id: string) => (manga: IManga) =>
  `<div id='${id}' class='ChapterControl'>
    <a href='#' class='download'>Download</a>
    <a class='prev' id='prev' href='${manga.prev || ''}' onclick='window.location="${
    manga.prev || ''
  }";window.location.reload();'>Previous</a>
    <a class='next' id='next' href='${manga.next || ''}' onclick='window.location="${
    manga.next || ''
  }";window.location.reload();'>Next</a>
</div>`;
export const chapterControlTop = chapterControl('ChapterControlTop');
export const chapterControlBottom = chapterControl('ChapterControlBottom');