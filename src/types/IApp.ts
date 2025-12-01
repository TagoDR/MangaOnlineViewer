import type { TemplateResult } from 'lit';
import type { Ref } from 'lit/directives/ref.js';
import type { IManga } from './IManga';

/**
 * Defines the possible states for the slide-out panels in the UI.
 */
export type Panel =
  | 'all'
  | 'settings'
  | 'keybindings'
  | 'keybindingsEditor'
  | 'bookmarks'
  | 'none';

/**
 * Defines the possible states for the download process.
 */
export type Download = 'available' | 'working';

/**
 * Defines the possible redirection targets.
 */
export type Redirect = 'next' | 'prev' | 'series';

/**
 * Defines the possible device types.
 */
export type Device = 'desktop' | 'mobile' | 'tablet';

export type Headroom = 'top' | 'end' | 'show' | 'hide' | 'none';

/**
 * Represents the state and properties of a single page image in the viewer.
 */
export type Page = {
  /** A reference to the HTMLImageElement for this page. */
  ref?: Ref<HTMLImageElement>;
  /** The source URL of the image (can be a remote URL, data URL, or blob URL). */
  src?: string;
  /** The CSS width of the image element. */
  width?: number;
  /** The CSS height of the image element. */
  height?: number;
  /** The CSS min-width of the image element. */
  minWidth?: string;
  /** The original, intrinsic width of the loaded image. */
  naturalWidth?: number;
  /** The original, intrinsic height of the loaded image. */
  naturalHeight?: number;
  /** The blob data of the image, if it has been fetched. */
  blob?: Blob;
  /** Whether the image should be hidden from view. */
  hide?: boolean;
};

/**
 * Defines the shape of the dialog state object.
 */
export interface DialogState {
  open: boolean;
  title: string;
  icon?: 'info' | 'warning' | 'success' | 'error' | 'question';
  content: TemplateResult;
  footer: TemplateResult;
}

/**
 * Defines the shape of the application's volatile state, managed by a NanoStore.
 * This state is not persisted and resets on page load.
 */
export type IApp = {
  /** Whether the auto-scroll feature is currently active. */
  autoScroll: boolean;
  /** The page number the user is currently viewing. */
  currentPage: number;
  /** The current status of the download functionality. */
  download?: Download;
  /** The target for a pending redirection. */
  link?: Redirect;
  /** The number of pages that have been successfully loaded. */
  loaded: number;
  /** The core manga data object for the current chapter. */
  manga?: IManga;
  /** The currently visible UI panel. */
  panel: Panel;
  /** The page number to scroll to. */
  scrollToPage?: number;
  /** The detected device type. */
  device: Device;
  /** Reference for the #Chapter */
  chapter: Ref<HTMLDivElement>;
  /** A map of page numbers to their corresponding page data. */
  images?: Record<number, Page>;
  /** The currently active dialog's state, or null if no dialog is open. */
  dialog?: DialogState | null;
};
