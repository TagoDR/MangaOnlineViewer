// == Comick =======================================================================================
import { Category, type IManga, type ISite, Language } from '../types';

function captureComments() {
  const comments = document.querySelector('#comments-container');
  if (!comments) return null;
  const css = [...document.styleSheets]
    .filter(stylesheet => !stylesheet.href || stylesheet.href.startsWith(window.location.origin))
    .map(stylesheet => [...stylesheet.cssRules]?.map(({ cssText }) => cssText)?.join('\n') ?? '');
  comments.classList.remove('blur-sm');
  const container = document.createElement('div');
  const shadowRoot = container.attachShadow({ mode: 'open' });
  const commentsParent = document.createElement('div');
  commentsParent.appendChild(comments);
  shadowRoot.appendChild(commentsParent);
  const style = document.createElement('style');
  style.textContent = css.join('\n');
  shadowRoot.appendChild(style);
  return container;
}

const comick: ISite = {
  name: 'Comick',
  url: /https?:\/\/(www\.)?comick.io\/.+/,
  homepage: 'https://comick.io/',
  language: [Language.ENGLISH],
  category: Category.MANGA,
  waitFunc() {
    return /\/([^/]+)-chapter.+$/.test(window.location.pathname);
  },
  waitEle: '#__NEXT_DATA__',
  waitTime: 3000,
  run(): IManga {
    const data = JSON.parse(document.getElementById('__NEXT_DATA__')?.innerHTML ?? '')?.props
      ?.pageProps;
    const pages = data?.chapter?.md_images?.map(
      (image: { b2key: string }) => `https://meo.comick.pictures/${image?.b2key}`,
    );
    return {
      title: data?.seoTitle ?? `${data.chapter?.md_comics?.title} ${data?.chapter?.chap}`,
      series: `/comic/${data?.chapter?.md_comics?.slug}`,
      pages: pages?.length,
      prev: data?.prev?.href,
      next: data?.next?.href,
      listImages: pages,
      comments: captureComments(),
    };
  },
};
export default comick;
