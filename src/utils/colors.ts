import tinycolor from 'tinycolor2';

/**
 * A collection of base, non-themed colors.
 * @type {object}
 */
export const base = {
  transparent: 'transparent',
  current: 'currentColor',
  black: '#000000',
  white: '#F1F1F1',
  whiteAlpha: {
    name: 'white',
    50: 'rgba(255, 255, 255, 0.04)',
    100: 'rgba(255, 255, 255, 0.06)',
    200: 'rgba(255, 255, 255, 0.08)',
    300: 'rgba(255, 255, 255, 0.16)',
    400: 'rgba(255, 255, 255, 0.24)',
    500: 'rgba(255, 255, 255, 0.36)',
    600: 'rgba(255, 255, 255, 0.48)',
    700: 'rgba(255, 255, 255, 0.64)',
    800: 'rgba(255, 255, 255, 0.80)',
    900: 'rgba(255, 255, 255, 0.92)',
  },
  blackAlpha: {
    name: 'black',
    50: 'rgba(0, 0, 0, 0.04)',
    100: 'rgba(0, 0, 0, 0.06)',
    200: 'rgba(0, 0, 0, 0.08)',
    300: 'rgba(0, 0, 0, 0.16)',
    400: 'rgba(0, 0, 0, 0.24)',
    500: 'rgba(0, 0, 0, 0.36)',
    600: 'rgba(0, 0, 0, 0.48)',
    700: 'rgba(0, 0, 0, 0.64)',
    800: 'rgba(0, 0, 0, 0.80)',
    900: 'rgba(0, 0, 0, 0.92)',
  },
};

/**
 * Defines the structure for a 10-step color palette, from light (50) to dark (900).
 */
export type IColor = {
  name: string;
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
};

/**
 * Defines the structure for a collection of color palettes.
 */
export type IPalette = Record<string, IColor>;

/**
 * A comprehensive collection of predefined color palettes.
 * @type {IPalette}
 */
const colors: IPalette = {
  dark: {
    name: 'dark',
    50: '#C1C2C5',
    100: '#A6A7AB',
    200: '#909296',
    300: '#5c5f66',
    400: '#373A40',
    500: '#2C2E33',
    600: '#25262b',
    700: '#1A1B1E',
    800: '#141517',
    900: '#101113',
  },

  gray: {
    name: 'gray',
    50: '#f8f9fa',
    100: '#f1f3f5',
    200: '#e9ecef',
    300: '#dee2e6',
    400: '#ced4da',
    500: '#adb5bd',
    600: '#868e96',
    700: '#495057',
    800: '#343a40',
    900: '#212529',
  },

  red: {
    name: 'red',
    50: '#fff5f5',
    100: '#ffe3e3',
    200: '#ffc9c9',
    300: '#ffa8a8',
    400: '#ff8787',
    500: '#ff6b6b',
    600: '#fa5252',
    700: '#f03e3e',
    800: '#e03131',
    900: '#c92a2a',
  },

  wine: {
    name: 'wine',
    50: '#FCE9E8',
    100: '#F8C2BF',
    200: '#F39A96',
    300: '#EE736D',
    400: '#E94C44',
    500: '#E5241A',
    600: '#B71D15',
    700: '#891610',
    800: '#5B0F0B',
    900: '#2E0705',
  },

  pink: {
    name: 'pink',
    50: '#fff0f6',
    100: '#ffdeeb',
    200: '#fcc2d7',
    300: '#faa2c1',
    400: '#f783ac',
    500: '#f06595',
    600: '#e64980',
    700: '#d6336c',
    800: '#c2255c',
    900: '#a61e4d',
  },

  grape: {
    name: 'grape',
    50: '#f8f0fc',
    100: '#f3d9fa',
    200: '#eebefa',
    300: '#e599f7',
    400: '#da77f2',
    500: '#cc5de8',
    600: '#be4bdb',
    700: '#ae3ec9',
    800: '#9c36b5',
    900: '#862e9c',
  },

  violet: {
    name: 'violet',
    50: '#f3f0ff',
    100: '#e5dbff',
    200: '#d0bfff',
    300: '#b197fc',
    400: '#9775fa',
    500: '#845ef7',
    600: '#7950f2',
    700: '#7048e8',
    800: '#6741d9',
    900: '#5f3dc4',
  },

  purple: {
    name: 'purple',
    50: '#EFEAFB',
    100: '#D3C3F4',
    200: '#B69DEC',
    300: '#9976E5',
    400: '#7D4FDD',
    500: '#6029D6',
    600: '#4D21AB',
    700: '#3A1980',
    800: '#261056',
    900: '#13082B',
  },

  indigo: {
    name: 'indigo',
    50: '#edf2ff',
    100: '#dbe4ff',
    200: '#bac8ff',
    300: '#91a7ff',
    400: '#748ffc',
    500: '#5c7cfa',
    600: '#4c6ef5',
    700: '#4263eb',
    800: '#3b5bdb',
    900: '#364fc7',
  },

  blue: {
    name: 'blue',
    50: '#e7f5ff',
    100: '#d0ebff',
    200: '#a5d8ff',
    300: '#74c0fc',
    400: '#4dabf7',
    500: '#339af0',
    600: '#228be6',
    700: '#1c7ed6',
    800: '#1971c2',
    900: '#1864ab',
  },

  darkblue: {
    name: 'darkblue',
    50: '#E8F4F9',
    100: '#D9DEE9',
    200: '#B7C2DA',
    300: '#6482C0',
    400: '#4267B2',
    500: '#385898',
    600: '#314E89',
    700: '#29487D',
    800: '#223B67',
    900: '#1E355B',
  },

  cyan: {
    name: 'cyan',
    50: '#e3fafc',
    100: '#c5f6fa',
    200: '#99e9f2',
    300: '#66d9e8',
    400: '#3bc9db',
    500: '#22b8cf',
    600: '#15aabf',
    700: '#1098ad',
    800: '#0c8599',
    900: '#0b7285',
  },

  teal: {
    name: 'teal',
    50: '#e6fcf5',
    100: '#c3fae8',
    200: '#96f2d7',
    300: '#63e6be',
    400: '#38d9a9',
    500: '#20c997',
    600: '#12b886',
    700: '#0ca678',
    800: '#099268',
    900: '#087f5b',
  },

  green: {
    name: 'green',
    50: '#ebfbee',
    100: '#d3f9d8',
    200: '#b2f2bb',
    300: '#8ce99a',
    400: '#69db7c',
    500: '#51cf66',
    600: '#40c057',
    700: '#37b24d',
    800: '#2f9e44',
    900: '#2b8a3e',
  },

  darkgreen: {
    name: 'darkgreen',
    50: '#cad4cf',
    100: '#b0bfb8',
    200: '#97aba1',
    300: '#7f978b',
    400: '#678376',
    500: '#4f7061',
    600: '#263e3a',
    700: '#1c2e2b',
    800: '#152320',
    900: '#0b2017',
  },

  moss: {
    name: 'moss',
    50: '#f1f8f4',
    100: '#e3eee7',
    200: '#c2ddcb',
    300: '#9ecbad',
    400: '#80bc93',
    500: '#6db383',
    600: '#62af7a',
    700: '#519968',
    800: '#46885b',
    900: '#183321',
  },

  greener: {
    name: 'greener',
    50: '#EDF7ED',
    100: '#CEE9CD',
    200: '#AEDBAE',
    300: '#8FCD8E',
    400: '#6FBF6E',
    500: '#4FB14E',
    600: '#408E3E',
    700: '#306A2F',
    800: '#20471F',
    900: '#102310',
  },

  lime: {
    name: 'lime',
    50: '#f4fce3',
    100: '#e9fac8',
    200: '#d8f5a2',
    300: '#c0eb75',
    400: '#a9e34b',
    500: '#94d82d',
    600: '#82c91e',
    700: '#74b816',
    800: '#66a80f',
    900: '#5c940d',
  },

  yellow: {
    name: 'yellow',
    50: '#fff9db',
    100: '#fff3bf',
    200: '#ffec99',
    300: '#ffe066',
    400: '#ffd43b',
    500: '#fcc419',
    600: '#fab005',
    700: '#f59f00',
    800: '#f08c00',
    900: '#e67700',
  },

  golden: {
    name: 'golden',
    50: '#FDF9E7',
    100: '#FAEDBC',
    200: '#F7E191',
    300: '#F4D666',
    400: '#F1CA3C',
    500: '#EEBF11',
    600: '#BF990D',
    700: '#8F720A',
    800: '#5F4C07',
    900: '#302603',
  },

  orange: {
    name: 'orange',
    50: '#fff4e6',
    100: '#ffe8cc',
    200: '#ffd8a8',
    300: '#ffc078',
    400: '#ffa94d',
    500: '#ff922b',
    600: '#fd7e14',
    700: '#f76707',
    800: '#e8590c',
    900: '#d9480f',
  },
};

const darkest = 10;
const lightest = 95;
const darkSteps = 4;
const lightSteps = 5;

const lightnessStep = (lightest - 50) / lightSteps;
const darknessStep = (50 - darkest) / darkSteps;

/**
 * Sets the lightness of an HSL color.
 * @internal
 * @param {tinycolor.ColorFormats.HSLA} hsl - The HSL color object.
 * @param {number} lightness - The new lightness value.
 * @returns {string} The resulting color in hex string format.
 */
function setLightness(hsl: tinycolor.ColorFormats.HSLA, lightness: number): string {
  hsl.l = lightness / 100;
  return tinycolor(hsl).toHexString();
}

/**
 * Generates a 10-step color palette from a single base color.
 * @param {string} color - The base color in any valid CSS color format (e.g., hex, rgb, hsl).
 * @returns {IColor} A complete color palette with 10 shades.
 */
export function customColor(color: string): IColor {
  const hsl = tinycolor(color).toHsl();
  return {
    name: 'custom',
    50: setLightness(hsl, 50 + lightnessStep * 5),
    100: setLightness(hsl, 50 + lightnessStep * 4),
    200: setLightness(hsl, 50 + lightnessStep * 3),
    300: setLightness(hsl, 50 + lightnessStep * 2),
    400: setLightness(hsl, 50 + lightnessStep),
    500: setLightness(hsl, 50),
    600: setLightness(hsl, 50 - darknessStep),
    700: setLightness(hsl, 50 - darknessStep * 2),
    800: setLightness(hsl, 50 - darknessStep * 3),
    900: setLightness(hsl, 50 - darknessStep * 4),
  };
}

/**
 * Calculates a suitable contrasting text color (either very light or very dark) for a given background color.
 * @param {string} hex - The background color in hex format.
 * @returns {string} A hex color string for the contrasting text.
 */
export function getTextColor(hex: string): string {
  const color = tinycolor(hex);
  const hsl = color.toHsl();
  return setLightness(hsl, color.isDark() ? lightest : darkest);
}

/**
 * Checks if a color is considered light based on its brightness.
 * @param {string} color - The color string to check.
 * @returns {boolean} `true` if the color is light, `false` otherwise.
 */
export function isLight(color: string): boolean {
  return tinycolor(color).getBrightness() > 120;
}

/**
 * Checks if a color is considered dark based on its brightness.
 * @param {string} color - The color string to check.
 * @returns {boolean} `true` if the color is dark, `false` otherwise.
 */
export function isDark(color: string): boolean {
  return tinycolor(color).getBrightness() <= 120;
}

/**
 * Checks if the computed background color of a DOM element is light.
 * @param {Element} element - The DOM element to check.
 * @returns {boolean} `true` if the background is light, `false` otherwise.
 */
export function isBackgroundColorLight(element: Element): boolean {
  return isLight(window.getComputedStyle(element).backgroundColor);
}

/**
 * Checks if the computed background color of a DOM element is dark.
 * @param {Element} element - The DOM element to check.
 * @returns {boolean} `true` if the background is dark, `false` otherwise.
 */
export function isBackgroundColorDark(element: Element): boolean {
  return isDark(window.getComputedStyle(element).backgroundColor);
}

/**
 * A comparison function for sorting color palette keys (e.g., 'red', 'blue') in a perceptually logical order.
 * It sorts primarily by hue, then by saturation, and finally by lightness.
 * @param {string} a - The key of the first color palette.
 * @param {string} b - The key of the second color palette.
 * @returns {number} A number indicating the sort order, suitable for `Array.prototype.sort()`.
 */
export function sortColors(a: string, b: string): number {
  const sampleShades = [600, 700, 800, 900] as const;
  const metrics = (key: string) => {
    const hsls = sampleShades.map(sh => tinycolor(colors[key][sh]).toHsl());
    let sumX = 0,
      sumY = 0,
      count = 0;
    let sAcc = 0,
      lAcc = 0;
    for (const hsl of hsls) {
      const h = hsl.h;
      if (Number.isFinite(h)) {
        const rad = (h * Math.PI) / 180;
        sumX += Math.cos(rad);
        sumY += Math.sin(rad);
        count++;
      }
      sAcc += hsl.s;
      lAcc += hsl.l;
    }
    const hue = count > 0 ? ((Math.atan2(sumY, sumX) * 180) / Math.PI + 360) % 360 : 9999;
    const sat = sAcc / hsls.length;
    const light = lAcc / hsls.length;
    return { hue, sat, light };
  };
  const A = metrics(a);
  const B = metrics(b);
  if (A.hue === B.hue) {
    if (A.sat === B.sat) {
      if (A.light === B.light) return colors[a].name.localeCompare(colors[b].name);
      return A.light - B.light;
    }
    return B.sat - A.sat;
  }
  return A.hue - B.hue;
}

const LIGHTNESS_MAP = [0.96, 0.907, 0.805, 0.697, 0.605, 0.547, 0.518, 0.445, 0.395, 0.34];
const SATURATION_MAP = [0.32, 0.16, 0.08, 0.04, 0, 0, 0.04, 0.08, 0.16, 0.32];

function getClosestLightness(colorObject: tinycolor.Instance) {
  const lightnessGoal = colorObject.getLuminance();
  return LIGHTNESS_MAP.reduce((prev, curr) =>
    Math.abs(curr - lightnessGoal) < Math.abs(prev - lightnessGoal) ? curr : prev,
  );
}

export function generateColorsMap(color: string) {
  const colorObject = tinycolor(color);
  const closestLightness = getClosestLightness(colorObject);
  const baseColorIndex = LIGHTNESS_MAP.indexOf(closestLightness);

  const colors = LIGHTNESS_MAP.map(l =>
    tinycolor({
      h: colorObject.toHsl().h,
      s: colorObject.toHsl().s,
      l: l,
    }),
  ).map((c, i) => {
    const saturationDelta = SATURATION_MAP[i] - SATURATION_MAP[baseColorIndex];
    return saturationDelta >= 0
      ? c.saturate(saturationDelta * 100)
      : c.desaturate(Math.abs(saturationDelta * 100));
  });

  colors[baseColorIndex] = tinycolor(color);

  return { baseColorIndex, colors };
}

export type ColorsTuple = readonly [
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  ...string[],
];

export function generateColors(color: string) {
  return generateColorsMap(color).colors.map(c => c.toHexString()) as unknown as ColorsTuple;
}

export default colors;
