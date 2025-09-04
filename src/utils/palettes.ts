import tinycolor, { type Instance } from 'tinycolor2';
import { sample } from './colors.ts';

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
function gradientByLightness(baseColor: Instance): string[] {
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
 * Generates an 11-color palette from a single base color, inspired by Chakra UI's color scale.
 * @param {string} color - The base color.
 * @returns {string[]} An array of 11 hex color strings.
 */
export function gradientByChakra(baseColor: Instance): string[] {
  const palette: string[] = new Array(11).fill('');
  const baseHsl = baseColor.toHsl();

  // Configuration for the gradient generation
  const config = {
    lightest: { lightness: 95, rotate: -10, saturate: -30 },
    darkest: { lightness: 10, rotate: 10, saturate: 10 },
  };
  const lightStepsCount = 5;
  const darkStepsCount = 5;

  // Calculate per-step adjustments
  const lightnessStep = (config.lightest.lightness - 50) / lightStepsCount;
  const darknessStep = (50 - config.darkest.lightness) / darkStepsCount;
  const lightRotateStep = config.lightest.rotate / lightStepsCount;
  const darkRotateStep = config.darkest.rotate / darkStepsCount;
  const lightSaturateStep = config.lightest.saturate / lightStepsCount;
  const darkSaturateStep = config.darkest.saturate / darkStepsCount;

  // Generate lighter shades (indices 0-4)
  for (let i = 1; i <= lightStepsCount; i++) {
    const step = lightStepsCount - i;
    const color = tinycolor(baseHsl)
      .lighten(lightnessStep * (i - 0.5))
      .spin(lightRotateStep * i)
      .saturate(lightSaturateStep * i);
    palette[step] = color.toHexString();
  }

  // Set the base color (index 5)
  palette[5] = tinycolor(baseHsl).lighten(0).toHexString();

  // Generate darker shades (indices 6-10)
  for (let i = 1; i <= darkStepsCount; i++) {
    const step = lightStepsCount + i;
    const color = tinycolor(baseHsl)
      .darken(darknessStep * (i - 0.5))
      .spin(darkRotateStep * i)
      .saturate(darkSaturateStep * i);
    palette[step] = color.toHexString();
  }
  return palette;
}

/**
 * Generates an 11-color palette from a single base color, inspired by Mantine's color generation.
 * @param {string} color - The base color.
 * @returns {string[]} An array of 11 hex color strings.
 */
export function gradientByMantine(baseColor: Instance): string[] {
  const baseHsl = baseColor.toHsl();
  const palette: string[] = new Array(11);

  // Base color at index 5
  palette[5] = baseColor.toHexString();

  // Generate 5 lighter shades (interpolating towards white)
  for (let i = 0; i < 5; i++) {
    const factor = (5 - i) / 6;
    const l = baseHsl.l + (1 - baseHsl.l) * factor;
    const s = baseHsl.s - baseHsl.s * factor;
    palette[i] = tinycolor({ h: baseHsl.h, s, l }).toHexString();
  }

  // Generate 5 darker shades (interpolating towards black, with increased saturation)
  for (let i = 0; i < 5; i++) {
    const factor = (i + 1) / 6;
    const l = baseHsl.l - baseHsl.l * factor;
    const s = baseHsl.s + (1 - baseHsl.s) * factor;
    palette[i + 6] = tinycolor({ h: baseHsl.h, s, l }).toHexString();
  }

  return palette;
}

/**
 * Generates an 11-shade color gradient from a single base color using different algorithms.
 * @param {string} baseHexColor - The base color in hexadecimal format (e.g., "#123456").
 * @param {string} [mode='base'] - The gradient generation algorithm: 'base', 'saturation', or 'lightness'.
 * @returns {string[] | null} An array of 11 hex color strings, or `null` if the base color is invalid.
 */
export function generateColorGradient(
  baseHexColor: string,
  mode: 'saturation' | 'lightness' | 'mantine' | 'chakra' | 'steps' = 'steps',
): string[] {
  let baseColor = tinycolor(baseHexColor);
  if (!baseColor.isValid()) {
    baseColor = tinycolor(sample.navy);
  }
  switch (mode) {
    case 'saturation':
      return gradientBySaturation(baseColor);
    case 'lightness':
      return gradientByLightness(baseColor);
    case 'mantine':
      return gradientByMantine(baseColor);
    case 'chakra':
      return gradientByChakra(baseColor);
    default:
      return gradientBySteps(baseColor);
  }
}
