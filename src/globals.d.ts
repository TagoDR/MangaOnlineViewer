declare const W: Window;

declare interface Window {
  nextchapterurl?: any;
  prechapterurl?: any;
  chapterid?: any;
  imagecount?: any;
  chapterPages?: any;
  pages?: any;
  chapter_preloaded_images?: any;
  mangaNav?: any;
  mov: (number) => void;
}

declare interface JQuery {
  minicolors(): JQuery;

  imagesLoaded(): JQuery;

  unveil(settings: object): JQuery;

  progress(fn: (instance: JQuery, image) => void): JQuery;
}
