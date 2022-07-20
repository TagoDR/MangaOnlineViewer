import colors from './colors';

function svgToUrl(str: string) {
  const cleaned = str
    .replace(/[\t\n\r]/gim, '') // Strip newlines and tabs
    .replace(/\s\s+/g, ' ') // Condense multiple spaces
    .replace(/'/gim, '\\i'); // Normalize quotes

  const encoded = encodeURIComponent(cleaned)
    .replace(/\(/g, '%28') // Encode brackets
    .replace(/\)/g, '%29');

  return `data:image/svg+xml;charset=UTF-8,${encoded}`;
}

function placeholder(width: number, height: number, bgColor = '#0F1C3F', textColor = '#ECEAD9') {
  const str = `
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <rect fill="${bgColor}" width="${width}" height="${height}"/>
  <text fill="${textColor}" font-family="sans-serif" font-size="30" dy="10.5" font-weight="bold" x="50%" y="50%" text-anchor="middle">${width}x${height}</text>
</svg>`;
  return svgToUrl(str);
}
const backgrounds = Object.values(colors).map((i) => i['900']);
const widths = [985, 985, 985, 985, 1970];
function randomPlaceholder() {
  const randomSize = Math.floor(Math.random() * widths.length);
  const randomColor = Math.floor(Math.random() * backgrounds.length);
  return placeholder(widths[randomSize], 1400, backgrounds[randomColor]);
}

export { randomPlaceholder, placeholder, svgToUrl };
