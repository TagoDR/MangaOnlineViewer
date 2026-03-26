import Color from 'colorjs.io';
import { sample } from './colors.ts';

/**
 * Generates a consistent 11-shade tonal palette from a single base color.
 * Any color from the generated palette will produce the same palette when used as a base.
 * The base color is guaranteed to be in the palette.
 * @internal
 * @param {Color} baseColor - A `Color` instance for the base color.
 * @returns {string[]} An array of 11 hex color strings.
 */
function gradientBySteps(baseColor: Color): string[] {
  const baseOklch = baseColor.to('oklch');
  const [originalLightness, chroma, hue] = baseOklch.coords.map(c => c ?? 0);

  const lightnessSteps = [0.95, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1, 0.05];
  const palette = lightnessSteps.map(l =>
    new Color('oklch', [l, chroma, hue]).toString({ format: 'hex' }),
  );

  let closestIndex = -1;
  let minDiff = Infinity;

  for (let i = 0; i < lightnessSteps.length; i++) {
    const diff = Math.abs(lightnessSteps[i] - originalLightness);
    if (diff < minDiff) {
      minDiff = diff;
      closestIndex = i;
    }
  }

  if (closestIndex !== -1) {
    palette[closestIndex] = baseColor.toString({ format: 'hex' });
  }

  return palette.map(c => c.toUpperCase());
}

/**
 * Generates a gradient with adaptive saturation for a more aesthetically pleasing result.
 * Lighter shades are desaturated, while darker shades have their saturation slightly boosted.
 * @internal
 * @param {Color} baseColor - A `Color` instance for the base color.
 * @returns {string[]} An array of 11 hex color strings.
 */
function gradientBySaturation(baseColor: Color): string[] {
  const baseHsl = baseColor.to('hsl');
  const lightnessScale = [0.97, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1, 0.05];
  const colors: string[] = [];
  for (const l of lightnessScale) {
    const newColor = baseHsl.clone();
    newColor.coords[2] = l * 100;

    const s = newColor.coords[1] ?? 0;
    if (l > 0.8) {
      newColor.coords[1] = s * 0.4;
    } else if (l > 0.6) {
      newColor.coords[1] = s * 0.8;
    } else if (l < 0.3) {
      newColor.coords[1] = Math.min(100, s * 1.1);
    }

    colors.push(newColor.toString({ format: 'hex' }).toUpperCase());
  }
  return colors;
}

/**
 * Generates a gradient using a fixed set of lightness steps.
 * @internal
 * @param {Color} baseColor - A `Color` instance for the base color.
 * @returns {string[]} An array of 11 hex color strings.
 */
function gradientByLightness(baseColor: Color): string[] {
  const colors: string[] = [];
  const lightnessSteps = [95, 90, 80, 70, 60, 50, 40, 30, 20, 10, 5];
  const baseHsl = baseColor.to('hsl');
  for (const lightness of lightnessSteps) {
    const c = baseHsl.clone();
    c.coords[2] = lightness;
    colors.push(c.toString({ format: 'hex' }).toUpperCase());
  }
  return colors;
}

/**
 * Generates an 11-color palette from a single base color, inspired by Chakra UI's color scale.
 * @param {Color} baseColor - A `Color` instance for the base color.
 * @returns {string[]} An array of 11 hex color strings.
 */
export function gradientByChakra(baseColor: Color): string[] {
  const palette: string[] = new Array(11).fill('');
  const baseHsl = baseColor.to('hsl');

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
    const color = baseHsl.clone();
    color.coords[2] = (color.coords[2] ?? 0) + lightnessStep * (i - 0.5);
    color.coords[0] = (color.coords[0] ?? 0) + lightRotateStep * i;
    color.coords[1] = (color.coords[1] ?? 0) + lightSaturateStep * i;
    palette[step] = color.toString({ format: 'hex' });
  }

  // Set the base color (index 5)
  palette[5] = baseHsl.clone().toString({ format: 'hex' });

  // Generate darker shades (indices 6-10)
  for (let i = 1; i <= darkStepsCount; i++) {
    const step = lightStepsCount + i;
    const color = baseHsl.clone();
    color.coords[2] = (color.coords[2] ?? 0) - darknessStep * (i - 0.5);
    color.coords[0] = (color.coords[0] ?? 0) + darkRotateStep * i;
    color.coords[1] = (color.coords[1] ?? 0) + darkSaturateStep * i;
    palette[step] = color.toString({ format: 'hex' });
  }
  return palette;
}

/**
 * Generates an 11-color palette from a single base color, inspired by Mantine's color generation.
 * @returns {string[]} An array of 11 hex color strings.
 * @param {Color} baseColor - A `Color` instance for the base color.
 */
export function gradientByMantine(baseColor: Color): string[] {
  const baseHsl = baseColor.to('hsl');
  const [h, s, l] = baseHsl.coords.map(c => c ?? 0);
  const palette: string[] = new Array(11);

  // Base color at index 5
  palette[5] = baseColor.toString({ format: 'hex' });

  // Generate 5 lighter shades (interpolating towards white)
  for (let i = 0; i < 5; i++) {
    const factor = (5 - i) / 6;
    const newL = l + (100 - l) * factor;
    const newS = s - s * factor;
    palette[i] = new Color('hsl', [h, newS, newL]).toString({ format: 'hex' });
  }

  // Generate 5 darker shades (interpolating towards black, with increased saturation)
  for (let i = 0; i < 5; i++) {
    const factor = (i + 1) / 6;
    const newL = l - l * factor;
    const newS = s + (100 - s) * factor;
    palette[i + 6] = new Color('hsl', [h, newS, newL]).toString({
      format: 'hex',
    });
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
  let baseColor: Color;
  try {
    baseColor = Color.get(baseHexColor);
  } catch (_e) {
    baseColor = Color.get(sample.navy);
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
