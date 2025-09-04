import tinycolor from 'tinycolor2';

/**
 * A collection of sample colors, courtesy of colors.css.
 */
export const sample = {
  teal: '#39cccc',
  aqua: '#7fdbff',
  blue: '#0074d9',
  navy: '#001f3f',
  lime: '#01ff70',
  green: '#2ecc40',
  olive: '#3d9970',
  fuchsia: '#f012be',
  purple: '#b10dc9',
  maroon: '#85144b',
  red: '#ff4136',
  orange: '#ff851b',
  yellow: '#ffdc00',
  gray: '#aaaaaa',
  silver: '#dddddd',
  back: '#111111',
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

/**
 * Calculates a suitable contrasting text color (white or black) for a given background color.
 * @param {string} hex - The background color in hex format.
 * @returns {string} A hex color string for the contrasting text.
 */
export function getTextColor(hex: string): string {
  return tinycolor.mostReadable(hex, ['#000', '#fff']).toHexString();
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

export default colors;
