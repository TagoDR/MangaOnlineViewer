import { css, unsafeCSS } from 'lit';
import { getSettingsValue } from '../core/settings';
import colors, { getTextColor } from '../utils/colors';
import { generateColorGradient } from '../utils/palettes.ts';

/**
 * Generates a CSS theme configuration for a specified selector and color theme.
 * This includes light and dark theme configurations, as well as various color scales and gradients.
 *
 * @param {string} [selector='#MangaOnlineViewer'] - The CSS selector to apply the theme styles to. Defaults to `#MangaOnlineViewer`.
 * @param {string} [hex=getSettingsValue('theme')] - The base hexadecimal color used to derive the theme colors. Defaults to the user's theme settings value.
 * @returns {string} A string of CSS styles, or an empty string if the gradient generation fails.
 */
const themesCSS = (selector: string = '#MangaOnlineViewer', hex = getSettingsValue('theme')) => {
  const gradient = generateColorGradient(hex);
  const text = getTextColor(hex);
  const secondary = getSettingsValue('colorScheme') === 'dark' ? gradient[8] : gradient[2];
  const secondaryText = getTextColor(secondary);

  //   --mov-color-custom-95: ${unsafeCSS(gradient[0])};
  //   --mov-color-custom-90: ${unsafeCSS(gradient[1])};
  //   --mov-color-custom-80: ${unsafeCSS(gradient[2])};
  //   --mov-color-custom-70: ${unsafeCSS(gradient[3])};
  //   --mov-color-custom-60: ${unsafeCSS(gradient[4])};
  //   --mov-color-custom-50: ${unsafeCSS(gradient[5])};
  //   --mov-color-custom-40: ${unsafeCSS(gradient[6])};
  //   --mov-color-custom-30: ${unsafeCSS(gradient[7])};
  //   --mov-color-custom-20: ${unsafeCSS(gradient[8])};
  //   --mov-color-custom-10: ${unsafeCSS(gradient[9])};
  //   --mov-color-custom-05: ${unsafeCSS(gradient[10])};
  //   --mov-color-custom: var(--mov-color-custom-60);
  //   --mov-color-custom-key: 60;
  //   --mov-color-custom-gte-60: calc(
  //     100% - (clamp(0, 60 - var(--mov-color-custom-key), 1) * 100%)
  // );
  //   --mov-color-custom-on: color-mix(
  //   in oklab,
  //   var(--mov-color-custom-10) var(--mov-color-custom-gte-60),
  //   white
  // );

  return css`
    :where(:root),
    ${unsafeCSS(unsafeCSS(selector))}, .dark,
    ${unsafeCSS(unsafeCSS(selector))}.dark {
      --theme-primary-color: ${unsafeCSS(unsafeCSS(hex))};
      --theme-primary-text-color: ${unsafeCSS(unsafeCSS(text))};
      --theme-secondary-color: ${unsafeCSS(unsafeCSS(secondary))};
      --theme-secondary-text-color: ${unsafeCSS(unsafeCSS(secondaryText))};

      color-scheme: dark;
      --theme-body-background: ${unsafeCSS(unsafeCSS(colors.dark['600']))};
      --theme-body-text-color: ${unsafeCSS(unsafeCSS(colors.dark['50']))};
      --theme-text-color: ${unsafeCSS(unsafeCSS(colors.dark['50']))};
      --theme-background-color: ${unsafeCSS(unsafeCSS(colors.dark['600']))};
      --theme-hightlight-color: ${unsafeCSS(unsafeCSS(colors.dark['500']))};
      --theme-border-color: ${unsafeCSS(unsafeCSS(colors.dark['400']))};

      --mov-color-fill-quiet: ${unsafeCSS(unsafeCSS(gradient[9]))};
      --mov-color-fill-normal: var(--theme-secondary-color, ${unsafeCSS(unsafeCSS(gradient[8]))});
      --mov-color-fill-loud: var(--theme-primary-color);
      --mov-color-border-quiet: ${unsafeCSS(unsafeCSS(gradient[8]))};
      --mov-color-border-normal: ${unsafeCSS(unsafeCSS(gradient[7]))};
      --mov-color-border-loud: ${unsafeCSS(unsafeCSS(gradient[6]))};
      --mov-color-on-quiet: ${unsafeCSS(unsafeCSS(gradient[4]))};
      --mov-color-on-normal: var(--theme-secondary-text-color, ${unsafeCSS(unsafeCSS(gradient[3]))});
      --mov-color-on-loud: var(--theme-primary-text-color, white);

      --mov-color-mix-hover: black 8%;
      --mov-color-mix-active: black 16%;
    }

    .light,
    ${unsafeCSS(unsafeCSS(selector))}.light {
      color-scheme: light;
      --theme-body-background: ${unsafeCSS(unsafeCSS(colors.gray['50']))};
      --theme-body-text-color: ${unsafeCSS(unsafeCSS(colors.gray['900']))};
      --theme-text-color: ${unsafeCSS(unsafeCSS(colors.gray['900']))};
      --theme-background-color: ${unsafeCSS(unsafeCSS(colors.gray['50']))};
      --theme-hightlight-color: ${unsafeCSS(unsafeCSS(colors.gray['500']))};
      --theme-border-color: ${unsafeCSS(unsafeCSS(colors.gray['100']))};

      --mov-color-fill-quiet: ${unsafeCSS(unsafeCSS(gradient[0]))};
      --mov-color-fill-normal: var(--theme-secondary-color, ${unsafeCSS(unsafeCSS(gradient[1]))});
      --mov-color-fill-loud: var(--theme-primary-color);
      --mov-color-border-quiet: ${unsafeCSS(unsafeCSS(gradient[1]))};
      --mov-color-border-normal: ${unsafeCSS(unsafeCSS(gradient[2]))};
      --mov-color-border-loud: ${unsafeCSS(unsafeCSS(gradient[4]))};
      --mov-color-on-quiet: ${unsafeCSS(unsafeCSS(gradient[6]))};
      --mov-color-on-normal: var(--theme-secondary-text-color, ${unsafeCSS(unsafeCSS(gradient[3]))});
      --mov-color-on-loud: var(--theme-primary-text-color, white);

      --mov-color-mix-hover: black 10%;
      --mov-color-mix-active: black 20%;
    }
  `;
};

export { themesCSS };
