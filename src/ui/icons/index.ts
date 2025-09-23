/**
 * @file This module imports styled SVG icon strings and exports them as Lit `unsafeSVG` directives
 * for direct rendering in templates.
 */
import type { DirectiveResult } from 'lit/directive.js';
import { type UnsafeSVGDirective, unsafeSVG } from 'lit/directives/unsafe-svg.js';
import * as styledIcons from './StyledIcons.ts';

/**
 * A record of all icons as Lit `unsafeSVG` directives, ready for rendering.
 * The keys are in the format `IconName`.
 * @internal
 */
const styledIconsSVG: Record<
  string,
  DirectiveResult<typeof UnsafeSVGDirective>
> = Object.fromEntries(
  Object.entries(styledIcons).map(([iconKey, icon]) => [iconKey, unsafeSVG(icon)]),
);

/**
 * A collection of all processed icons, exported as Lit `unsafeSVG` directives.
 * Use these for direct rendering within a Lit template.
 * @example html`${IconFileDownload}`
 */
export const {
  IconArrowAutofitDown,
  IconArrowAutofitHeight,
  IconArrowAutofitLeft,
  IconArrowAutofitRight,
  IconArrowAutofitWidth,
  IconArrowBigLeft,
  IconArrowBigRight,
  IconArrowsMove,
  IconArrowsMoveVertical,
  IconArrowsVertical,
  IconBook,
  IconBookReturn,
  IconBookUpload,
  IconBookmark,
  IconBookmarkOff,
  IconBookmarks,
  IconBoxAlignTop,
  IconCategory,
  IconCheck,
  IconChevronRight,
  IconComic1,
  IconComic1Flat,
  IconComic2,
  IconComic2Flat,
  IconComic3,
  IconComic3Flat,
  IconDeviceFloppy,
  IconDotsVertical,
  IconEReader1,
  IconEReader1Flat,
  IconEReader2,
  IconEReader2Flat,
  IconExternalLink,
  IconEye,
  IconEyeOff,
  IconFileDownload,
  IconFilePercent,
  IconHandClick,
  IconKeyboard,
  IconLayoutBottombar,
  IconLayoutBottombarInactive,
  IconLayoutSidebar,
  IconLayoutSidebarInactive,
  IconLayoutSidebarRight,
  IconLayoutSidebarRightInactive,
  IconListNumbers,
  IconLoader2,
  IconLocationCog,
  IconMenu2,
  IconMenuDeep,
  IconMessage,
  IconMoon,
  IconPage,
  IconPageFlat,
  IconPalette,
  IconPencil,
  IconPencilCog,
  IconPhoto,
  IconPhotoOff,
  IconPin,
  IconPlayerPause,
  IconPlayerPlay,
  IconRefresh,
  IconSettings,
  IconSettingsOff,
  IconSpacingVertical,
  IconSun,
  IconTrash,
  IconWorldCog,
  IconX,
  IconZoom,
  IconZoomCancel,
  IconZoomIn,
  IconZoomInArea,
  IconZoomOut,
  IconZoomOutArea,
  IconZoomPan,
} = styledIconsSVG;
