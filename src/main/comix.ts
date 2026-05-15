// == Comix ==================================================================================
import { Category, type IManga, type ISite, Language } from '../types';

const comix: ISite = {
  name: 'Comix.to',
  homepage: 'https://comix.to/',
  url: /https?:\/\/comix\.to\/(title|comic)\/.+\/.+/,
  language: Language.ENGLISH,
  category: Category.COMIC,
  waitEle: '#initial-data',
  async run(): Promise<IManga> {
    const initialData = JSON.parse(document.getElementById('initial-data')?.textContent || '{}');
    const { mangaHid, chapterId } = initialData.read || {};

    // Fallback for chapterId if not in initialData.read
    const idFromUrl = window.location.pathname.match(/\/(?:title|comic)\/[^/]+\/(\d+)/)?.[1];
    const finalChapterId = chapterId || idFromUrl;

    if (!finalChapterId) {
      throw new Error('Chapter ID not found');
    }

    const scripts = [...document.querySelectorAll('script[src]')];
    const mainScript = scripts
      .find(s => s.getAttribute('src')?.includes('/dist/main-'))
      ?.getAttribute('src');
    if (!mainScript) {
      throw new Error('Main script not found');
    }

    const mod = await import(mainScript);
    const api = mod.I || mod.$;
    const [chapterData, chaptersData] = await Promise.all([
      api.get(`/chapters/${finalChapterId}`),
      api.get(`/manga/${mangaHid}/chapters?limit=100`),
    ]);

    const pages = chapterData.pages || {};
    const items = pages.items || chapterData.images || [];
    const images = (Array.isArray(items) ? items : []).map((img: { url?: string } | string) => {
      const url = typeof img === 'string' ? img : img.url;
      return url?.startsWith('http') ? url : `${pages.baseUrl || ''}/${url?.trimStart() || ''}`;
    });

    const mangaDetailKey = Object.keys(initialData.queries || {}).find((k: string) =>
      k.includes('"manga","detail"'),
    );
    const mangaDetail = mangaDetailKey ? initialData.queries[mangaDetailKey] : null;

    const chapters = chaptersData.items || chaptersData || [];
    const currentIdx =
      chapters.findIndex((c: { id: string | number }) => String(c.id) === String(finalChapterId)) ??
      -1;
    const prevChapter = currentIdx !== -1 ? chapters[currentIdx + 1] : null;
    const nextChapter = currentIdx !== -1 ? chapters[currentIdx - 1] : null;

    const type = window.location.pathname.split('/')[1] || 'title';
    const getChapterUrl = (c: { id: string | number; number: string | number } | null) => {
      if (!c) return null;
      return `/${type}/${mangaHid}/${c.id}-chapter-${c.number}`;
    };

    return {
      title: mangaDetail?.title || document.title.split(' · ')[0],
      series: mangaDetail?.url || `/${type}/${mangaHid}`,
      pages: images.length,
      prev: getChapterUrl(prevChapter),
      next: getChapterUrl(nextChapter),
      listImages: images,
    };
  },
};

export default comix;
