import type { IManga } from './IManga';

export type Panel =
  | 'all'
  | 'settings'
  | 'keybindings'
  | 'keybindingsEditor'
  | 'bookmarks'
  | 'comments'
  | 'none';
export type Download = 'available' | 'working';
export type Redirect = 'next' | 'prev' | 'series';
export type Device = 'desktop' | 'mobile' | 'tablet';

export type IApp = {
  autoScroll: boolean;
  currentPage: number;
  download?: Download;
  link?: Redirect;
  loaded: number;
  manga?: IManga;
  panel: Panel;
  scrollToPage?: number;
  device: Device;
  render?: HTMLElement | DocumentFragment | ShadowRoot | null;
};
