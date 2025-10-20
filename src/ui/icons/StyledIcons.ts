/**
 * @file This module is responsible for processing raw SVG icon strings.
 * It parses a dedicated CSS file (`Icons.css`) to extract color rules, applies these rules
 * directly to the SVG strings by adding `stroke` attributes, and then exports the processed icons
 * as raw SVG strings.
 */
import iconsCSS from '../styles/icons.css?inline';
import * as rawIcons from './svg.ts';

/**
 * Represents a parsed CSS rule containing selectors and a color.
 * @internal
 */
type CssRule = {
  selectors: string[];
  color: string;
};

/**
 * Parses a CSS string to extract simple color rules.
 * This function is intentionally simple and tailored to the specific format of `Icons.css`.
 * A more robust solution would require a full CSS parser, which is not necessary for this use case.
 * @internal
 * @param {string} css - The CSS string to parse.
 * @returns {CssRule[]} An array of parsed CSS rules.
 */
function parseCss(css: string): CssRule[] {
  const ruleRegex = /([^{}]+)\s*\{([^}]+)\}/g;
  return [...css.matchAll(ruleRegex)]
    .map(match => {
      const selectorsBlock = match[1].trim();
      const properties = match[2];
      const colorMatch = /color:\s*([^;]+)/.exec(properties);

      if (colorMatch) {
        const color = colorMatch[1].trim();
        const selectors = selectorsBlock.split(',').map(s => s.trim().replace(/\s\s+/g, ' '));
        return { selectors, color };
      }
      return null;
    })
    .filter((rule): rule is CssRule => rule !== null);
}

const colorRules = parseCss(iconsCSS);

/**
 * A map from icon class names to the styling rules that apply to them.
 * This is pre-computed to optimize the color application process.
 * @internal
 */
const rulesByClassName = new Map<string, { subSelector: string; color: string }[]>();

for (const rule of colorRules) {
  for (const selector of rule.selectors) {
    // Assumes selectors are in the format `.icon-class-name [sub-selector]`
    const match = selector.match(/^\s*\.([^ ]+)\s*(.*)$/);
    if (!match) {
      continue;
    }

    const [, className, rest] = match;
    let subSelector = rest.trim();

    // The sub-selector applies within the SVG, so we remove the child combinator `>`.
    if (subSelector.startsWith('>')) {
      subSelector = subSelector.substring(1).trim();
    }
    // An empty sub-selector should apply to all elements.
    if (subSelector === '') {
      subSelector = '*';
    }

    if (!rulesByClassName.has(className)) {
      rulesByClassName.set(className, []);
    }
    rulesByClassName.get(className)?.push({ subSelector, color: rule.color });
  }
}

const parser = new DOMParser();
const serializer = new XMLSerializer();

/**
 * Applies pre-parsed CSS color rules to a raw SVG string by injecting `stroke` attributes into its child elements.
 * @internal
 * @param {string} svgString - The original SVG icon as a string.
 * @param {string} className - The base class name of the icon (e.g., 'icon-tabler-file-download') used for matching selectors.
 * @returns {string} A new SVG string with the color styles applied.
 */
function applyColorsToSvg(svgString: string, className: string): string {
  const rulesForIcon = rulesByClassName.get(className);
  if (!rulesForIcon?.length) {
    return svgString;
  }

  const doc = parser.parseFromString(svgString, 'image/svg+xml');
  const svg = doc.documentElement;

  if (svg.querySelector('parsererror')) {
    console.error(`Error parsing SVG for ${className}`);
    return svgString;
  }

  for (const { subSelector, color } of rulesForIcon) {
    try {
      const elements = svg.querySelectorAll<SVGElement>(subSelector);
      elements.forEach(el => {
        el.setAttribute('stroke', color);
      });
    } catch (e) {
      console.error(`Invalid selector "${subSelector}" for ${className}`, e);
    }
  }
  return serializer.serializeToString(svg);
}

/**
 * A record of all icons as processed SVG strings with colors applied.
 * @internal
 */
const styledIcons: Record<string, string> = Object.fromEntries(
  Object.keys(rawIcons).map(iconKey => {
    const kebabCaseName = iconKey
      .replace(/^Icon/, '')
      .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
      .toLowerCase();

    const rawSvg = (rawIcons as Record<string, string>)[iconKey];
    const className = `icon-tabler-${kebabCaseName}`;
    const styledSvg = applyColorsToSvg(rawSvg, className);

    return [iconKey, styledSvg];
  }),
);

/**
 * A collection of all processed icons, exported as raw SVG strings.
 * Use these when you need the SVG content directly, for example, in a CMS.
 * @example svgToUrl(IconFileDownload)
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
  IconAlertCircle,
  IconCircleCheck,
  IconCircleX,
  IconHelp,
  IconInfoCircle,
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
} = styledIcons;
