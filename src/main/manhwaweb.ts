// == ManhwaWeb ====================================================================================
import { Category, type IManga, type ISite, Language } from '../types';

const site: ISite = {
  name: 'ManhwaWeb',
  url: /https?:\/\/(www\.)?manhwaweb.com\/leer\/.+/,
  homepage: 'https://manhwaweb.com/',
  language: [Language.SPANISH],
  category: Category.MANGA,
  async run(): Promise<IManga> {
    const slug = window.location.pathname.replace('/leer', '');
    const api = await fetch(
      `https://manhwawebbackend-production.up.railway.app/chapters/see${slug}`,
    ).then(async res => res.json());
    const data = await fetch(
      `https://manhwawebbackend-production.up.railway.app/chapters/seeprevpost${slug}`,
    ).then(async res => res.json());
    return {
      title: `${api.name} ${api.chapter.chapter}`,
      series: [...document.querySelectorAll('div')]
        .filter(i => i.textContent === 'Episodios')?.[0]
        ?.parentElement?.getAttribute('href'),
      pages: api.chapter.img.length,
      prev: data.chapterAnterior.replace(api._id, api.real_id),
      next: data.chapterSiguiente.replace(api._id, api.real_id),
      listImages: api.chapter.img,
    };
  },
};
export default site;
