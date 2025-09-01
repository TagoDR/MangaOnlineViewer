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
  const gradient = generateColorGradient(hex, 'base');
  const text = getTextColor(hex);

  if (!gradient) return '';
  const name = 'custom';
  return css`
    :where(:root),
    ${selector} {
      --mov-color-${name}-95: ${gradient[0]};
      --mov-color-${name}-90: ${gradient[1]};
      --mov-color-${name}-80: ${gradient[2]};
      --mov-color-${name}-70: ${gradient[3]};
      --mov-color-${name}-60: ${gradient[4]};
      --mov-color-${name}-50: ${gradient[5]};
      --mov-color-${name}-40: ${gradient[6]};
      --mov-color-${name}-30: ${gradient[7]};
      --mov-color-${name}-20: ${gradient[8]};
      --mov-color-${name}-10: ${gradient[9]};
      --mov-color-${name}-05: ${gradient[10]};
      --mov-color-${name}: var(--mov-color-${name}-60);
      --mov-color-${name}-key: 60;
      --mov-color-${name}-gte-60: calc(100% - (clamp(0, 60 - var(--mov-color-${name}-key), 1) * 100%));
      --mov-color-${name}-on: color-mix(in oklab, var(--mov-color-${name}-10) var(--mov-color-${name}-gte-60), white);
    }

    .light {
      color-scheme: light;
      --theme-body-background: ${colors.gray['50']};
      --theme-body-text-color: ${colors.gray['900']};
      --theme-text-color: ${colors.gray['900']};
      --theme-background-color: ${colors.gray['50']};
      --theme-hightlight-color: ${colors.gray['500']};
      --theme-border-color: ${colors.gray['100']};

      --mov-color-mix-hover: black 10%;
      --mov-color-mix-active: black 20%;

      --mov-color-fill-quiet: var(--mov-color-${name}-95);
      --mov-color-fill-normal: var(--mov-color-${name}-90);
      --mov-color-fill-loud: var(--mov-color-${name}-50);
      --mov-color-border-quiet: var(--mov-color-${name}-90);
      --mov-color-border-normal: var(--mov-color-${name}-80);
      --mov-color-border-loud: var(--mov-color-${name}-60);
      --mov-color-on-quiet: var(--mov-color-${name}-40);
      --mov-color-on-normal: var(--mov-color-${name}-30);
      --mov-color-on-loud: white;

      --theme-primary-color: ${hex};
      --theme-primary-text-color: ${text};
      --theme-secondary-color: var(--mov-color-fill-normal);
      --theme-secondary-text-color: var(--mov-color-on-normal);
    }

    .dark{
      color-scheme: dark;
      --theme-body-background: ${colors.dark['600']};
      --theme-body-text-color: ${colors.dark['50']};
      --theme-text-color: ${colors.dark['50']};
      --theme-background-color: ${colors.dark['600']};
      --theme-hightlight-color: ${colors.dark['500']};
      --theme-border-color: ${colors.dark['400']};

      --mov-color-mix-hover: black 8%;
      --mov-color-mix-active: black 16%;

      --mov-color-fill-quiet: var(--mov-color-${name}-10);
      --mov-color-fill-normal: var(--mov-color-${name}-20);
      --mov-color-fill-loud: var(--mov-color-${name}-50);
      --mov-color-border-quiet: var(--mov-color-${name}-20);
      --mov-color-border-normal: var(--mov-color-${name}-30);
      --mov-color-border-loud: var(--mov-color-${name}-40);
      --mov-color-on-quiet: var(--mov-color-${name}-60);
      --mov-color-on-normal: var(--mov-color-${name}-70);
      --mov-color-on-loud: white;

      --theme-primary-color: ${hex};
      --theme-primary-text-color: ${text};
      --theme-secondary-color: color-mix( in oklab, var(--mov-color-fill-normal), var(--mov-color-mix-hover) );
      --theme-secondary-text-color: var(--mov-color-on-normal);
    }
  `;
};

export { themesCSS };
