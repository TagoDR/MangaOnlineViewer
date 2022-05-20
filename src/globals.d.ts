declare const W: Window;

declare interface JQuery {
  imagesLoaded(): JQuery;

  unveil(settings: object): JQuery;

  progress(fn: (instance: JQuery, image) => void): JQuery;
}
