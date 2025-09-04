import { getSettingsValue } from '../core/settings';
import { css } from '../utils/code-tag';
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

  return css`
    :where(:root),
    ${selector} {
      --mov-color-custom-95: ${gradient[0]};
      --mov-color-custom-90: ${gradient[1]};
      --mov-color-custom-80: ${gradient[2]};
      --mov-color-custom-70: ${gradient[3]};
      --mov-color-custom-60: ${gradient[4]};
      --mov-color-custom-50: ${gradient[5]};
      --mov-color-custom-40: ${gradient[6]};
      --mov-color-custom-30: ${gradient[7]};
      --mov-color-custom-20: ${gradient[8]};
      --mov-color-custom-10: ${gradient[9]};
      --mov-color-custom-05: ${gradient[10]};
      --mov-color-custom: var(--mov-color-custom-60);
      --mov-color-custom-key: 60;
      --mov-color-custom-gte-60: calc(100% - (clamp(0, 60 - var(--mov-color-custom-key), 1) * 100%));
      --mov-color-custom-on: color-mix(in oklab, var(--mov-color-custom-10) var(--mov-color-custom-gte-60), white);

      --theme-primary-color: ${hex};
      --theme-primary-text-color: ${text};
      --theme-secondary-color: ${secondary};
      --theme-secondary-text-color: ${secondaryText};
    }

    .light {
      color-scheme: light;
      --theme-body-background: ${colors.gray['50']};
      --theme-body-text-color: ${colors.gray['900']};
      --theme-text-color: ${colors.gray['900']};
      --theme-background-color: ${colors.gray['50']};
      --theme-hightlight-color: ${colors.gray['500']};
      --theme-border-color: ${colors.gray['100']};

      --mov-color-fill-quiet: var(--mov-color-custom-95);
      --mov-color-fill-normal: var(--mov-color-custom-90);
      --mov-color-fill-loud: var(--mov-color-custom-50);
      --mov-color-border-quiet: var(--mov-color-custom-90);
      --mov-color-border-normal: var(--mov-color-custom-80);
      --mov-color-border-loud: var(--mov-color-custom-60);
      --mov-color-on-quiet: var(--mov-color-custom-40);
      --mov-color-on-normal: var(--mov-color-custom-30);
      --mov-color-on-loud: white;
    }

    .dark{
      color-scheme: dark;
      --theme-body-background: ${colors.dark['600']};
      --theme-body-text-color: ${colors.dark['50']};
      --theme-text-color: ${colors.dark['50']};
      --theme-background-color: ${colors.dark['600']};
      --theme-hightlight-color: ${colors.dark['500']};
      --theme-border-color: ${colors.dark['400']};

      --mov-color-fill-quiet: var(--mov-color-custom-10);
      --mov-color-fill-normal: var(--mov-color-custom-20);
      --mov-color-fill-loud: var(--mov-color-custom-50);
      --mov-color-border-quiet: var(--mov-color-custom-20);
      --mov-color-border-normal: var(--mov-color-custom-30);
      --mov-color-border-loud: var(--mov-color-custom-40);
      --mov-color-on-quiet: var(--mov-color-custom-60);
      --mov-color-on-normal: var(--mov-color-custom-70);
      --mov-color-on-loud: white;
    }
  `;
};

export { themesCSS };
