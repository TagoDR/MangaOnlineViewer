// == Koharu =======================================================================================

import { fetchJsonFromUrls } from '../utils/request';

export default {
  name: 'Koharu',
  url: /https?:\/\/(www\.)?(koharu|niyaniya|seia|shupogaki|hoshino).(to|moe|one)/,
  homepage: 'https://schale.network/',
  language: ['English'],
  category: 'hentai',
  lazy: false,
  waitEle: 'nav select option',
  async run() {
    const options = {
      method: 'GET',
      headers: {
        Accept: '*/*',
        Referer: `${window.location.host}/`,
        Origin: window.location.host,
      },
    };
    const api = ['https://api.schale.network', 'https://api.gehenna.jp/'];
    const url = window.location.pathname.split('/');
    const galleryID = `${url[2]}/${url[3]}`;
    const detailAPI = api.map((a) => `${a}/books/detail/${galleryID}`);
    const detail = await fetchJsonFromUrls(options, ...detailAPI);
    const dataID = Object.keys(detail.data)
      .map(Number)
      .sort((a, b) => b - a)[0];
    const dataAPI = api.map(
      (a) =>
        `${a}/books/data/${galleryID}/${detail.data[dataID].id}/${detail.data[dataID].public_key}?v=${detail.updated_at ?? detail.created_at}&w=${dataID}`,
    );
    const { base, entries } = await fetchJsonFromUrls(options, ...dataAPI);
    const data = entries.map((image: { path: string }) => `${base}/${image.path}?w=${dataID}`);
    return {
      title: detail.title,
      series: `/g/${galleryID}/`,
      pages: data.length,
      prev: '#',
      next: '#',
      fetchOptions: {
        method: 'GET',
        redirect: 'follow',
      },
      listImages: data,
    };
  },
};
