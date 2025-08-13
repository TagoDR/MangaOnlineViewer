import { getSettingsValue } from '../core/settings';
import { css } from '../utils/code-tag';
import colors, { getTextColor } from '../utils/colors';
import { themeWA } from '../utils/palettes.ts';

function resolveHexTheme(): string {
  const value = getSettingsValue('theme');
  if (typeof value === 'string' && value.startsWith('#')) return value;
  // Try to map from old theme name to a default shade (600)
  if (typeof value === 'string' && value in colors) {
    // @ts-ignore index signature by name
    return colors[value as keyof typeof colors]['600'];
  }
  // Fallback
  return '#004526';
}

const themesCSS = () => {
  const hex = resolveHexTheme();
  const text = getTextColor(hex);
  const selector = `#MangaOnlineViewer`;
  return css`
    ${selector} {
      --theme-primary-color: ${hex};
      --theme-primary-text-color: ${text};
    }
    ${themeWA(hex, 'brand', 'mov', selector)}
  `;
};

export { themesCSS };
