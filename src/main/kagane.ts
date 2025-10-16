// == Kagane =======================================================================================
import { Category, type IManga, type ISite, Language } from '../types';

/**
 * A utility function to pause execution.
 * @param {number} ms - Milliseconds to wait.
 */
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

async function collectAllSources(num: number): Promise<string[]> {
  // 1. Setup
  const container = document.querySelector('.reader-content');
  const srcArray = new Set(); // Use a Set to automatically handle duplicate sources
  const scrollIncrement = 2000; // Pixels to scroll each time
  const maxScrollAttempts = 200; // Safety limit to prevent infinite loops

  if (!container) {
    console.error("Error: '.reader-content' container not found.");
    return [];
  }

  // 2. Main Scroll Loop
  let attempts = 0;
  while (srcArray.size < num && attempts < maxScrollAttempts) {
    // Scroll the container down by the defined increment
    container.scrollTop += scrollIncrement;
    attempts++;

    // Wait for the lazy-loading mechanism to fetch and update image sources
    await delay(300); // Wait 300ms (adjust this value based on load time)

    // 3. Collect New Sources
    const currentImages = document.querySelectorAll('.reader-page img');

    for (const img of currentImages) {
      const src = img.getAttribute('src');
      // Check for a non-empty, valid source
      if (src && src.length > 0) {
        srcArray.add(src); // Add to Set (only unique sources are stored)
      }
    }

    console.log(`Attempt ${attempts}: Collected ${srcArray.size} of ${num} sources.`);

    // 4. Check for End of Content
    // This is a common way to check if you've hit the bottom of the scrollable area
    const isAtBottom = container.scrollHeight - container.clientHeight <= container.scrollTop;
    if (isAtBottom && srcArray.size < num) {
      // If we hit the bottom but still haven't collected enough images,
      // it means the remaining images are not available or the number 'num' is too high.
      console.warn(`Reached end of scrollable content. Stopping with ${srcArray.size} sources.`);
      break;
    }
  }

  // 5. Return the result as an Array
  return Array.from(srcArray) as string[];
}

const kagane: ISite = {
  name: 'Kagane',
  homepage: 'https://kagane.org/',
  url: /https:\/\/(www\.)?kagane\.org\/series\/.+\/reader\/.+/,
  language: Language.ENGLISH,
  category: Category.MANGA,
  waitEle: '.reader-page img',
  async run(): Promise<IManga> {
    const url = window.location.href;
    const seriesId = url.match(/series\/([^/]+)/)?.[1];
    const chapterId = url.match(/reader\/([^/]+)/)?.[1];
    const rschDid = localStorage.getItem('rsch_did');

    const headers: HeadersInit = {};
    if (rschDid) {
      headers['X-Rsch-Did'] = rschDid;
    }

    const seriesData = await fetch(`https://api.kagane.org/api/v1/series/${seriesId}`, {
      headers,
    }).then(res => res.json());

    const booksData = await fetch(`https://api.kagane.org/api/v1/books/${seriesId}`, {
      headers,
    }).then(res => res.json());

    const currentChapter = booksData.data.content.find((c: any) => c.id === chapterId);
    const chapterIndex = booksData.data.content.findIndex((c: any) => c.id === chapterId);

    const prevChapter = booksData.data.content[chapterIndex + 1];
    const nextChapter = booksData.data.content[chapterIndex - 1];

    // The images are DRM protected and cannot be loaded directly.
    // This is just a placeholder.
    return {
      title: `${seriesData.data.name} - ${currentChapter?.metadata?.title}`,
      series: `/series/${seriesId}`,
      pages: currentChapter?.media?.pagesCount,
      prev: prevChapter ? `/series/${seriesId}/books/${prevChapter.id}` : undefined,
      next: nextChapter ? `/series/${seriesId}/books/${nextChapter.id}` : undefined,
      listImages: await collectAllSources(currentChapter?.media?.pagesCount),
    };
  },
};

export default kagane;
