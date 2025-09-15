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
  Object.keys(styledIcons).map(iconKey => [
    iconKey,
    unsafeSVG((styledIcons as Record<string, string>)[iconKey]),
  ]),
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
  IconBook,
  IconBookmark,
  IconBookmarkOff,
  IconBookmarks,
  IconBookReturn,
  IconBookUpload,
  IconCategory,
  IconCheck,
  IconChevronRight,
  IconDeviceFloppy,
  IconDotsVertical,
  IconEye,
  IconEyeOff,
  IconExternalLink,
  IconFileDownload,
  IconFilePercent,
  IconPin,
  IconArrowsMove,
  IconBoxAlignTop,
  IconArrowsVertical,
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
  IconPalette,
  IconPencil,
  IconPencilCog,
  IconPhoto,
  IconPhotoOff,
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
  IconZoomCancel,
  IconZoomIn,
  IconZoomInArea,
  IconZoomOut,
  IconZoomOutArea,
  IconZoomPan,
  IconPageFlat,
  IconComic1Flat,
  IconComic2Flat,
  IconComic3Flat,
  IconEReader1Flat,
  IconEReader2Flat,
  IconPage,
  IconComic1,
  IconComic2,
  IconComic3,
  IconEReader1,
  IconEReader2,
} = styledIconsSVG;
