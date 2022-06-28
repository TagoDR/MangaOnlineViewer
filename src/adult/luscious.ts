// == Luscious =====================================================================================
export default {
  name: 'Luscious',
  url: /https?:\/\/(www.)?luscious.net\/.+\/read\/.+/,
  homepage: 'https://luscious.net/',
  language: ['English'],
  category: 'hentai',
  waitEle: '.album-info div',
  async run() {
    const num = parseInt(
      document.querySelector('.album-info div')?.textContent?.match(/\d+/)?.toString()!,
      10,
    );
    const totalBlocks = Math.ceil(num / 50);
    const id = parseInt(
      document
        .querySelector('.album-heading a')
        ?.getAttribute('href')
        ?.match(/\d+\//)
        ?.toString() || '',
      10,
    );
    const query =
      '&query=%2520query%2520AlbumListOwnPictures%28%2524input%253A%2520PictureListInput%21%29%2520%257B%2520picture%2520%257B%2520list%28input%253A%2520%2524input%29%2520%257B%2520info%2520%257B%2520...FacetCollectionInfo%2520%257D%2520items%2520%257B%2520__typename%2520id%2520title%2520description%2520created%2520like_status%2520number_of_comments%2520number_of_favorites%2520moderation_status%2520width%2520height%2520resolution%2520aspect_ratio%2520url_to_original%2520url_to_video%2520is_animated%2520position%2520tags%2520%257B%2520category%2520text%2520url%2520%257D%2520permissions%2520url%2520thumbnails%2520%257B%2520width%2520height%2520size%2520url%2520%257D%2520%257D%2520%257D%2520%257D%2520%257D%2520fragment%2520FacetCollectionInfo%2520on%2520FacetCollectionInfo%2520%257B%2520page%2520has_next_page%2520has_previous_page%2520total_items%2520total_pages%2520items_per_page%2520url_complete%2520%257D%2520';
    const fetchBlocks = Array(totalBlocks)
      .fill(0)
      .map(async (_, block) => {
        const url = `https://api.luscious.net/graphql/nobatch/?operationName=AlbumListOwnPictures&variables=%7B%22input%22%3A%7B%22filters%22%3A%5B%7B%22name%22%3A%22album_id%22%2C%22value%22%3A%22${id}%22%7D%5D%2C%22display%22%3A%22position%22%2C%22page%22%3A${
          block + 1
        }%7D%7D${query}`;
        return fetch(url).then((res) => res.json());
      });
    const data = await Promise.all(fetchBlocks);
    const images = data.flatMap((res) =>
      res.data.picture.list.items.map((img: any) => img.url_to_original),
    );
    return {
      title: document.querySelector('.album-heading a')?.textContent?.trim(),
      series: document.querySelector('.album-heading a')?.getAttribute('href'),
      pages: images.length,
      prev: '#',
      next: '#',
      listImages: images,
    };
  },
};
