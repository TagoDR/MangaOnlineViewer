// == Comix =======================================================================================
/** biome-ignore-all lint/suspicious/noExplicitAny: brute force */
import { Category, type IManga, type ISite, Language } from '../types';
import { bruteforceScroll } from '../utils/bruteforce';
import { logScript } from '../utils/tampermonkey';

let chapterPagesData: any = null;

if (typeof window !== 'undefined' && window.location.hostname.includes('comix.to')) {
  // Hook JSON.parse
  const originalParse = JSON.parse;
  JSON.parse = (text, reviver) => {
    const parsed = originalParse(text, reviver);
    try {
      if (parsed?.result?.pages) {
        chapterPagesData = parsed.result.pages;
        logScript('Intercepted chapter pages data from JSON.parse', chapterPagesData);
      }
    } catch (_e) {
      // ignore
    }
    return parsed;
  };
}

function findQueryData() {
  const root = document.querySelector('#app-root');
  if (!root) return null;
  const fiberKey = Object.keys(root).find(
    key => key.startsWith('__reactContainer') || key.startsWith('__reactFiber'),
  );
  if (!fiberKey) return null;

  const stack = [(root as any)[fiberKey]];
  while (stack.length > 0) {
    const curr = stack.pop();
    if (!curr) continue;

    if (curr.stateNode?.props) {
      const client = curr.stateNode.props.client;
      if (client && typeof client.getQueryCache === 'function') {
        const queries = client.getQueryCache().getAll();
        for (const q of queries) {
          const data = q.state.data;
          if (data?.result?.pages) {
            return data.result.pages;
          }
        }
      }
    }

    if (curr.memoizedProps) {
      const client = curr.memoizedProps.client || curr.memoizedProps.value;
      if (client && typeof client.getQueryCache === 'function') {
        const queries = client.getQueryCache().getAll();
        for (const q of queries) {
          const data = q.state.data;
          if (data?.result?.pages) {
            return data.result.pages;
          }
        }
      }
    }

    if (curr.child) stack.push(curr.child);
    if (curr.sibling) stack.push(curr.sibling);
  }
  return null;
}

function findChapterListFromCache() {
  const root = document.querySelector('#app-root');
  if (!root) return null;
  const fiberKey = Object.keys(root).find(
    key => key.startsWith('__reactContainer') || key.startsWith('__reactFiber'),
  );
  if (!fiberKey) return null;

  const stack = [(root as any)[fiberKey]];
  while (stack.length > 0) {
    const curr = stack.pop();
    if (!curr) continue;

    const checkClient = (client: any) => {
      if (client && typeof client.getQueryCache === 'function') {
        const queries = client.getQueryCache().getAll();
        for (const q of queries) {
          const data = q.state.data;
          if (data) {
            if (
              Array.isArray(data) &&
              data.length > 0 &&
              (data[0].chapterNumber !== undefined || data[0].number !== undefined)
            ) {
              return data;
            }
            if (data.result && Array.isArray(data.result.items) && data.result.items.length > 0) {
              const first = data.result.items[0];
              if (
                first.chapterNumber !== undefined ||
                first.number !== undefined ||
                first.mangaId !== undefined
              ) {
                return data.result.items;
              }
            }
          }
        }
      }
      return null;
    };

    if (curr.stateNode?.props) {
      const res = checkClient(curr.stateNode.props.client);
      if (res) return res;
    }

    if (curr.memoizedProps) {
      const res = checkClient(curr.memoizedProps.client || curr.memoizedProps.value);
      if (res) return res;
    }

    if (curr.child) stack.push(curr.child);
    if (curr.sibling) stack.push(curr.sibling);
  }
  return null;
}

function getPageCountFromSelect(): number {
  const select = document.querySelector(
    'select[aria-label*="page" i], select[class*="page" i], select[id*="page" i]',
  );
  if (select) {
    return select.querySelectorAll('option').length;
  }
  return 0;
}

function findPageCountFromDOM(): number {
  const elements = [...document.querySelectorAll('span, div, button, option')];
  for (const el of elements) {
    const text = el.textContent || '';
    const match = /^\s*1\s*(?:\/|of)\s*(\d+)\s*$/i.exec(text.trim());
    if (match) {
      const num = parseInt(match[1], 10);
      if (num > 0 && num < 500) {
        return num;
      }
    }
  }
  return 0;
}

function getPrevNextLinks() {
  const links = [...document.querySelectorAll('a')];
  let next: string | null = null;
  let prev: string | null = null;

  for (const a of links) {
    const href = a.getAttribute('href');
    if (!href?.includes('/title/') || !/\/\d+-chapter-/.test(href)) continue;

    const text = (a.textContent || '').toLowerCase().trim();
    const ariaLabel = (a.getAttribute('aria-label') || '').toLowerCase();

    if (
      text.includes('next') ||
      ariaLabel.includes('next') ||
      a.querySelector('[class*="next"]') ||
      a.querySelector('[class*="right"]')
    ) {
      next = href;
    }
    if (
      text.includes('prev') ||
      text.includes('previous') ||
      ariaLabel.includes('prev') ||
      ariaLabel.includes('previous') ||
      a.querySelector('[class*="prev"]') ||
      a.querySelector('[class*="left"]')
    ) {
      prev = href;
    }
  }

  return { prev, next };
}

function getNavigationFromLinks(): { prev: string | null; next: string | null } {
  const links = [...document.querySelectorAll('a')];
  const chapterLinks: { href: string; num: number }[] = [];

  for (const a of links) {
    const href = a.getAttribute('href');
    if (!href?.includes('/title/') || !/\/\d+-chapter-/.test(href)) continue;
    const match = /-chapter-(\d+(\.\d+)?)/.exec(href);
    if (match) {
      chapterLinks.push({ href, num: parseFloat(match[1]) });
    }
  }

  if (chapterLinks.length === 0) return { prev: null, next: null };

  const seen = new Set<string>();
  const uniqueChapters = chapterLinks.filter(item => {
    const path = item.href.split('#')[0].split('?')[0];
    if (seen.has(path)) return false;
    seen.add(path);
    return true;
  });

  uniqueChapters.sort((a, b) => a.num - b.num);

  const currentPath = window.location.pathname;
  const currentCleanPath = currentPath.split('#')[0].split('?')[0];
  const idx = uniqueChapters.findIndex(
    item => item.href.includes(currentCleanPath) || currentCleanPath.includes(item.href),
  );

  let prev: string | null = null;
  let next: string | null = null;

  if (idx !== -1) {
    if (idx > 0) prev = uniqueChapters[idx - 1].href;
    if (idx < uniqueChapters.length - 1) next = uniqueChapters[idx + 1].href;
  }

  return { prev, next };
}

function getPrevNext(): { prev: string | null; next: string | null } {
  const { prev, next } = getPrevNextLinks();
  if (prev || next) return { prev, next };
  return getNavigationFromLinks();
}

function isReaderImage(img: HTMLImageElement): boolean {
  if (!img.closest('#app-root') && !img.closest('.rpage-body')) return false;

  const src = img.src || img.getAttribute('src') || '';
  if (!src) return false;

  if (
    src.includes('avatar') ||
    src.includes('logo') ||
    src.includes('icon') ||
    src.includes('placeholder')
  )
    return false;
  if (src.startsWith('data:image/svg+xml')) return false;

  const w = img.naturalWidth || img.width || 0;
  return !(w > 0 && w < 250);
}

function isValidSource(src: string): boolean {
  if (!src) return false;
  if (
    src.includes('placeholder') ||
    src.startsWith('data:image/svg+xml') ||
    src.includes('loading')
  )
    return false;
  return (
    src.startsWith('data:') ||
    src.startsWith('blob:') ||
    src.includes('comix.to') ||
    src.includes('static.comix.to') ||
    src.includes('wowpic')
  );
}

const comix: ISite = {
  name: 'Comix.to',
  homepage: 'https://comix.to/',
  url: /https?:\/\/comix\.to\/(title|comic)\/.+\/.+/,
  language: Language.ENGLISH,
  category: Category.MANGA,
  async run(): Promise<IManga> {
    let elapsed = 0;
    let pagesData = null;
    let chapterList: any[] | null = null;

    while (elapsed < 5000) {
      if (!pagesData) {
        pagesData = findQueryData();
      }
      if (!chapterList) {
        chapterList = findChapterListFromCache();
      }
      if (pagesData && chapterList) {
        break;
      }
      await new Promise(resolve => setTimeout(resolve, 100));
      elapsed += 100;
    }

    if (!pagesData && chapterPagesData) {
      pagesData = chapterPagesData;
    }

    let expectedPagesCount = pagesData?.items?.length || 0;

    if (expectedPagesCount === 0) {
      expectedPagesCount = getPageCountFromSelect();
    }

    if (expectedPagesCount === 0) {
      expectedPagesCount = findPageCountFromDOM();
    }

    if (expectedPagesCount === 0) {
      const imgElements = [
        ...document.querySelectorAll('#app-root img, .rpage-body img'),
      ] as HTMLImageElement[];
      expectedPagesCount = imgElements.filter(isReaderImage).length || 40;
    }

    logScript(`Identified expected page count: ${expectedPagesCount}`);

    const listImages = await bruteforceScroll(expectedPagesCount, isReaderImage, isValidSource);

    const initialDataEl = document.getElementById('initial-data');
    const initialData = initialDataEl ? JSON.parse(initialDataEl.textContent || '{}') : {};

    let title = '';
    let series = '';
    if (initialData.queries) {
      for (const key of Object.keys(initialData.queries)) {
        const queryData = initialData.queries[key];
        if (queryData?.title && queryData.url) {
          title = queryData.title;
          series = queryData.url;
          break;
        }
      }
    }

    if (!title) {
      title = document.querySelector('title')?.textContent?.trim() || '';
    }
    if (!series) {
      const seriesLink = document.querySelector('a[href^="/title/"]:not([href*="-chapter-"])');
      series = seriesLink?.getAttribute('href') || '';
    }

    let prev: string | null = null;
    let next: string | null = null;

    const slugMatch = /\/title\/([^/]+)/.exec(window.location.pathname);
    const mangaSlug = slugMatch ? slugMatch[1] : '';
    const chapterMatch = /\/(\d+)-chapter-/.exec(window.location.pathname);
    const currentChapterId = chapterMatch ? parseInt(chapterMatch[1], 10) : 0;

    if (chapterList && currentChapterId && mangaSlug) {
      const getNum = (ch: any) => parseFloat(ch.number ?? ch.chapterNumber ?? '0');
      const sortedChapters = [...chapterList].sort((a, b) => getNum(a) - getNum(b));
      const idx = sortedChapters.findIndex(ch => parseInt(ch.id, 10) === currentChapterId);
      if (idx !== -1) {
        if (idx > 0) {
          const prevCh = sortedChapters[idx - 1];
          const prevNum = prevCh.number ?? prevCh.chapterNumber;
          prev = `/title/${mangaSlug}/${prevCh.id}-chapter-${prevNum}`;
        }
        if (idx < sortedChapters.length - 1) {
          const nextCh = sortedChapters[idx + 1];
          const nextNum = nextCh.number ?? nextCh.chapterNumber;
          next = `/title/${mangaSlug}/${nextCh.id}-chapter-${nextNum}`;
        }
      }
    }

    if (!prev && !next) {
      const nav = getPrevNext();
      prev = nav.prev;
      next = nav.next;
    }

    return {
      title,
      series,
      pages: listImages.length,
      prev,
      next,
      listImages,
    };
  },
};

export default comix;
