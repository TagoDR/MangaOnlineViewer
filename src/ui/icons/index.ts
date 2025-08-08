import iconsCSS from '../styles/Icons.css?inline';
import * as rawIcons from './Icons.ts';

type CssRule = {
  selectors: string[];
  color: string;
};

/**
 * Parses a CSS string to extract color rules. This is specific to the format in Icons.css.
 * @param css The CSS string to parse.
 * @returns An array of parsed CSS rules.
 */
function parseCss(css: string): CssRule[] {
  // This regex is simplified and might not cover all edge cases of CSS, but it works for Icons.css
  const ruleRegex = /([^{}]+)\s*\{([^}]+)\}/g;
  // Use matchAll to get all rule matches and process them functionally.
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
const parser = new DOMParser();
const serializer = new XMLSerializer();

/**
 * Applies CSS color rules to an SVG string by injecting 'stroke' attributes.
 * @param svgString The original SVG icon as a string.
 * @param className The base class name of the icon, e.g., 'icon-tabler-file-download'.
 * @returns A new SVG string with colors applied.
 */
function applyColorsToSvg(svgString: string, className: string): string {
  const doc = parser.parseFromString(svgString, 'image/svg+xml');
  const svg = doc.documentElement;

  if (svg.querySelector('parsererror')) {
    console.error(`Error parsing SVG for ${className}`);
    return svgString;
  }

  for (const rule of colorRules) {
    for (const selector of rule.selectors) {
      // Check if the rule's selector targets the current icon's class
      if (selector.startsWith(`.${className}`)) {
        const selectorMatch = selector.match(new RegExp(`^\\.${className}\\s*(.*)$`));
        if (selectorMatch) {
          let subSelector = selectorMatch[1].trim() || '*';
          if (subSelector.startsWith('>')) {
            subSelector = subSelector.substring(1).trim();
          }
          try {
            const elements = svg.querySelectorAll<SVGElement>(subSelector);
            elements.forEach(el => {
              // Set the stroke color, as Tabler icons are stroke-based.
              el.setAttribute('stroke', rule.color);
            });
          } catch (e) {
            console.error(`Invalid selector "${subSelector}" for ${className}`, e);
          }
        }
      }
    }
  }
  return serializer.serializeToString(svg);
}

const styledIcons: Record<string, string> = Object.fromEntries(
  Object.keys(rawIcons).flatMap(iconKey => {
    // iconKey is e.g. "IconFileDownload"
    const kebabCaseName = iconKey
      .replace(/^Icon/, '')
      .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
      .toLowerCase();

    const rawSvg = (rawIcons as Record<string, string>)[iconKey];
    const className = `icon-tabler-${kebabCaseName}`;
    const styledSvg = applyColorsToSvg(rawSvg, className);

    return [
      [iconKey, styledSvg],
      [kebabCaseName, styledSvg],
    ];
  }),
);

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
  IconDeviceFloppy,
  IconDotsVertical,
  IconEye,
  IconEyeOff,
  IconExternalLink,
  IconFileDownload,
  IconKeyboard,
  IconListNumbers,
  IconLoader2,
  IconLocationCog,
  IconMenu2,
  IconMenuDeep,
  IconMessage,
  IconMoon,
  IconPalette,
  IconPencil,
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
} = styledIcons;
