import tinycolor, { type Instance } from 'tinycolor2';
import { generateColors } from './colors.ts';

const darkest = 10;
const lightest = 95;
const darkSteps = 4;
const lightSteps = 5;

const lightnessStep = (lightest - 50) / lightSteps;
const darknessStep = (50 - darkest) / darkSteps;

/**
 * Sets the lightness channel of an HSL color and returns the resulting hex string.
 * @internal
 * @param {tinycolor.ColorFormats.HSLA} hsl - The HSL color object.
 * @param {number} lightness - The new lightness value (0-100).
 * @returns {string} The resulting color in hex string format (e.g., "#AABBCC").
 */
function setLightness(hsl: tinycolor.ColorFormats.HSLA, lightness: number): string {
  hsl.l = lightness / 100;
  return tinycolor(hsl).toHexString();
}

/**
 * Creates an 11-step gradient by adjusting lightness around a central point.
 * @internal
 * @param {Instance} baseColor - A `tinycolor` instance for the base color.
 * @returns {string[]} An array of 11 hex color strings.
 */
function gradientBySteps(baseColor: Instance): string[] {
  const baseHsl = baseColor.toHsl();
  return [
    setLightness(baseHsl, 50 + lightnessStep * 5),
    setLightness(baseHsl, 50 + lightnessStep * 4),
    setLightness(baseHsl, 50 + lightnessStep * 3),
    setLightness(baseHsl, 50 + lightnessStep * 2),
    setLightness(baseHsl, 50 + lightnessStep),
    setLightness(baseHsl, 50),
    setLightness(baseHsl, 50 - darknessStep),
    setLightness(baseHsl, 50 - darknessStep * 2),
    setLightness(baseHsl, 50 - darknessStep * 3),
    setLightness(baseHsl, 50 - darknessStep * 4),
    setLightness(baseHsl, 50 - darknessStep * 5),
  ];
}

/**
 * Generates a gradient with adaptive saturation for a more aesthetically pleasing result.
 * Lighter shades are desaturated, while darker shades have their saturation slightly boosted.
 * @internal
 * @param {Instance} baseColor - A `tinycolor` instance for the base color.
 * @returns {string[]} An array of 11 hex color strings.
 */
function gradientBySaturation(baseColor: Instance): string[] {
  const baseHsl = baseColor.toHsl();
  const lightnessScale = [0.97, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1, 0.05];
  const colors: string[] = [];
  for (const l of lightnessScale) {
    const newHsl = { ...baseHsl };
    newHsl.l = l;

    if (l > 0.8) {
      newHsl.s *= 0.4;
    } else if (l > 0.6) {
      newHsl.s *= 0.8;
    } else if (l < 0.3) {
      newHsl.s = Math.min(1, newHsl.s * 1.1);
    }

    colors.push(tinycolor(newHsl).toHexString().toUpperCase());
  }
  return colors;
}

/**
 * Generates a gradient using a fixed set of lightness steps.
 * @internal
 * @param {Instance} baseColor - A `tinycolor` instance for the base color.
 * @returns {string[]} An array of 11 hex color strings.
 */
function gradinetByLightness(baseColor: Instance): string[] {
  const colors: string[] = [];
  const lightnessSteps = [95, 90, 80, 70, 60, 50, 40, 30, 20, 10, 5];

  for (const lightness of lightnessSteps) {
    const newHsl = baseColor.toHsl();
    newHsl.l = lightness / 100;
    colors.push(tinycolor(newHsl).toHexString().toUpperCase());
  }
  return colors;
}

/**
 * Generates an 11-shade color gradient from a single base color using different algorithms.
 * @param {string} baseHexColor - The base color in hexadecimal format (e.g., "#123456").
 * @param {string} [mode='base'] - The gradient generation algorithm: 'base', 'saturation', or 'lightness'.
 * @returns {string[] | null} An array of 11 hex color strings, or `null` if the base color is invalid.
 */
export function generateColorGradient(
  baseHexColor: string,
  mode: 'saturation' | 'lightness' | 'mantine' | 'base' = 'base',
): string[] | null {
  const baseColor = tinycolor(baseHexColor);
  if (!baseColor.isValid()) {
    console.error('Invalid base hex color provided.');
    return null;
  }
  switch (mode) {
    case 'saturation':
      return gradientBySaturation(baseColor);
    case 'lightness':
      return gradinetByLightness(baseColor);
    case 'mantine':
      return [...generateColors(baseHexColor)];
    default:
      return gradientBySteps(baseColor);
  }
}
