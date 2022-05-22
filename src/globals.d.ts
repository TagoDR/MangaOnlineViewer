declare const W: Window;

declare interface Window {
  _gallery: any;
  images_ext: any;
  mov: (number) => void; // Reference to late start this script
  // Below are Junk that sites store and Typescript needs  TS2304
  current_chapter_index?: number;
  rconfig?: any;
  title?: any;
  prev_chapter?: any;
  next_chapter?: any;
  next_chapter_url?: any;
  prev_chapter_url?: any;
  images?: any[];
  manga_url?: any;
  chapter_page_title?: any;
  CURRENT_MANGA_SLUG?: string;
  mnaplzoamfs?: any;
  nextchapterurl?: any;
  prechapterurl?: any;
  chapterid?: any;
  imagecount?: any;
  chapterPages?: any;
  pages?: any;
  chapter_preloaded_images?: any;
  mangaNav?: any;
  galleryinfo?: any;
  pageData?: any;
  baseTitle?: any;
  previewImages?: any;
  model?: any;
  g_th?: any;
  gData?: any;

  url_from_url_from_hash?(
    galleryinfo: any,
    file,
    webp: string,
    undefined: undefined,
    a: string,
  ): any;
}

declare interface JQuery {
  minicolors(): JQuery;

  imagesLoaded(): JQuery;

  unveil(settings: object): JQuery;

  progress(fn: (instance: JQuery, image) => void): JQuery;
}
