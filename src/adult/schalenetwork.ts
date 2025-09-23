// == SchaleNetwork ================================================================================
import { Category, type IManga, type ISite, Language } from '../types';

const schalenetwork: ISite = {
  name: 'SchaleNetwork',
  url: /https?:\/\/(www\.)?(niyaniya|shupogaki|hoshino).(moe|one)/,
  homepage: 'https://schale.network/',
  language: [Language.ENGLISH],
  category: Category.HENTAI,
  waitEle: 'nav select option',
  async run(): Promise<IManga> {
    const gallery = history.state.memo.gallery;
    const size = gallery.resolution;
    const { base, entries } = history.state.memo.data;
    const src = entries.map((image: { path: string }) => `${base}/${image.path}?w=${size}`);
    return {
      title: gallery.title,
      series: `/g/${gallery.id}/${gallery.key}/`,
      pages: src.length,
      prev: '#',
      next: '#',
      fetchOptions: {
        method: 'GET',
        redirect: 'follow',
      },
      listImages: src,
    };
  },
};
export default schalenetwork;
