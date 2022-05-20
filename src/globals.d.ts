declare const W: Window;

declare interface Window {
  mov: (number) => void;
}

declare interface JQuery {
  minicolors(): JQuery;

  imagesLoaded(): JQuery;

  unveil(settings: object): JQuery;

  progress(fn: (instance: JQuery, image) => void): JQuery;
}
