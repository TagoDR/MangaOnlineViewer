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
    // const options = {
    //   method: 'GET',
    //   headers: {
    //     Accept: '*/*',
    //     Referer: `${window.location.host}/`,
    //     Origin: window.location.host,
    //   },
    // };
    const gallery = history.state.memo.gallery;
    const size = gallery.resolution;
    const { base, entries } = history.state.memo.data;
    // const extra = history.state.memo.extra.data[gallery.resolution];
    // const api = ['https://api.schale.network', 'https://api.gehenna.jp/'];
    // const clearance = localStorage.getItem('clearance');
    // const dataAPI = api.map(
    //   (a) => `${a}/books/data/${gallery.id}/${gallery.key}/${extra.data[size].id}/${extra.data[size].key}/${size}?crt=${clearance}`,
    // );
    // const { base, entries } = await fetch(dataAPI[0], options).then(res=>res.json());
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
