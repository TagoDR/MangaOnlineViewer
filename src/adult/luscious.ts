// == Luscious =====================================================================================
import { Category, IManga, ISite, Language } from '../types';

const site: ISite = {
  name: 'Luscious',
  url: /https?:\/\/(www\.)?luscious.net\/.+\/read\/.+/,
  homepage: 'https://luscious.net/',
  language: [Language.ENGLISH],
  category: Category.HENTAI,
  waitEle: '.album-info div',
  async run(): Promise<IManga> {
    const num = parseInt(
      document
        .querySelector('input[name="page_number"] + span')
        ?.textContent?.match(/\d+/)
        ?.pop() ?? '0',
      10,
    );
    const totalBlocks = Math.ceil(num / 50);
    const id = parseInt(
      document
        .querySelector('.album-heading a')
        ?.getAttribute('href')
        ?.match(/\d+\//)
        ?.toString() ?? '0',
      10,
    );
    const query =
      '&query=%20query%20PictureListInsideAlbum(%24input%3A%20PictureListInput!)%20%7B%20picture%20%7B%20list(input%3A%20%24input)%20%7B%20info%20%7B%20...FacetCollectionInfo%20%7D%20items%20%7B%20__typename%20id%20title%20description%20created%20like_status%20number_of_comments%20number_of_favorites%20moderation_status%20width%20height%20resolution%20aspect_ratio%20url_to_original%20url_to_video%20is_animated%20position%20permissions%20url%20tags%20%7B%20category%20text%20url%20%7D%20thumbnails%20%7B%20width%20height%20size%20url%20%7D%20%7D%20%7D%20%7D%20%7D%20fragment%20FacetCollectionInfo%20on%20FacetCollectionInfo%20%7B%20page%20has_next_page%20has_previous_page%20total_items%20total_pages%20items_per_page%20url_complete%20%7D%20';
    const fetchBlocks = Array(totalBlocks)
      .fill(0)
      .map(async (_, block) => {
        const url = `https://apicdn.luscious.net/graphql/nobatch/?operationName=PictureListInsideAlbum&variables={"input":{"filters":[{"name":"album_id","value":"${id}"}],"display":"position","items_per_page":50,"page":${
          block + 1
        }}}${query}`;
        return GM.xmlHttpRequest({
          method: 'GET',
          url,
        }).then(res => JSON.parse(res.responseText));
      });
    const data = await Promise.all(fetchBlocks);
    const images = data.flatMap(res =>
      res.data.picture.list.items.map((img: { url_to_original: string }) => img.url_to_original),
    );
    return {
      title: document.querySelector('.album-heading a')?.textContent?.trim(),
      series: document.querySelector('.album-heading a')?.getAttribute('href'),
      pages: num,
      prev: '#',
      next: '#',
      listImages: images,
    };
  },
};
export default site;
