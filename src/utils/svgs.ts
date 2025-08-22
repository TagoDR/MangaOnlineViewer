import { html } from './code-tag';
import colors from './colors';

/**
 * Converts a raw SVG string into a data URL that can be used in CSS or as an image source.
 * @param {string} str - The raw SVG string to convert.
 * @returns {string} A data URL representation of the SVG.
 */
function svgToUrl(str: string): string {
  const cleaned = str
    .replace(/[\t\n\r]/gim, '') // Strip newlines and tabs
    .replace(/\s\s+/g, ' '); // Condense multiple spaces
  // .replace(/'/gim, '\\i'); // Normalize quotes

  const encoded = encodeURIComponent(cleaned)
    .replace(/\(/g, '%28') // Encode brackets
    .replace(/\)/g, '%29');

  return `data:image/svg+xml;charset=UTF-8,${encoded}`;
}

/**
 * Generates a simple SVG of a rectangle with centered text displaying its dimensions.
 * @param {number} width - The width of the rectangle.
 * @param {number} height - The height of the rectangle.
 * @param {string} bgColor - The background color of the rectangle.
 * @param {string} textColor - The color of the text.
 * @returns A Lit template for the SVG.
 */
function rectangle(width: number, height: number, bgColor: string, textColor: string) {
  return html`
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="${width}"
      height="${height}"
      viewBox="0 0 ${width} ${height}"
    >
      <rect
        fill="${bgColor}"
        width="${width}"
        height="${height}"
      />
      <text
        fill="${textColor}"
        font-family="sans-serif"
        font-size="30"
        dy="10.5"
        font-weight="bold"
        x="50%"
        y="50%"
        text-anchor="middle"
      >
        ${width}x${height}
      </text>
    </svg>
  `;
}

/**
 * Determines the length of a ruler tick mark based on its position.
 * @internal
 * @param {number} len - The position (in pixels) of the tick mark.
 * @returns {number} The length of the tick mark.
 */
const rulerMarkerLength = (len: number) => {
  if (len % 100 === 0) {
    return 15;
  }
  if (len % 50 === 0) {
    return 10;
  }
  if (len % 25 === 0) {
    return 5;
  }
  return 2.5;
};

/**
 * Generates an SVG of a rectangle with rulers along the horizontal and vertical axes.
 * @param {number} width - The width of the rectangle.
 * @param {number} height - The height of the rectangle.
 * @param {string} bgColor - The background color.
 * @param {string} textColor - The color for the text and ruler markings.
 * @returns A Lit template for the SVG with rulers.
 */
function rectangleRuler(width: number, height: number, bgColor: string, textColor: string) {
  let markers = '';

  // Create a loop to draw the horizontal ruler ticks and labels
  for (let x = 0; x <= width; x += 5) {
    // Create a line element for each tick using string templates
    const tick = html` <line
      x1="${x}"
      y1="0"
      x2="${x}"
      y2="${rulerMarkerLength(x)}"
    />`;
    markers += tick;

    // Create a text element for each label using string templates
    if (x !== 0 && x % 50 === 0) {
      const label = html` <text
        x="${x}"
        y="25"
        text-anchor="middle"
        font-size="${rulerMarkerLength(x)}px"
      >
        ${x}
      </text>`;
      markers += label;
    }
  }

  // Create a loop to draw the vertical ruler ticks and labels
  for (let y = 0; y <= height; y += 5) {
    // Create a line element for each tick using string templates
    const tick = html` <line
      x1="0"
      y1="${y}"
      x2="${rulerMarkerLength(y)}"
      y2="${y}"
    />`;
    markers += tick;

    // Create a text element for each label using string templates
    if (y !== 0 && y % 50 === 0) {
      const label = html` <text
        x="25"
        y="${y}"
        text-anchor="middle"
        dominant-baseline="middle"
        font-size="${rulerMarkerLength(y)}px"
      >
        ${y}
      </text>`;
      markers += label;
    }
  }

  // Create a svg element with the given width and height using string templates
  // Return the svg element as a string
  return html` <svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 ${width} ${height}"
  >
    <rect
      width="${width}"
      height="${height}"
      fill="${bgColor}"
    />
    <text
      fill="${textColor}"
      font-family="Verdana, Arial, Helvetica, sans-serif"
      font-size="30"
      dy="10.5"
      font-weight="bold"
      x="50%"
      y="50%"
      text-anchor="middle"
    >
      ${width}x${height}
    </text>
    <g
      stroke-width="1"
      font-family="Verdana, Arial, Helvetica, sans-serif"
      font-size="10px"
      font-weight="100"
      fill="${textColor}"
      stroke="${textColor}"
    >
      ${markers}
    </g>
  </svg>`;
}

/**
 * Creates a data URL for a placeholder image with specified dimensions and colors.
 * @param {number} width - The width of the placeholder.
 * @param {number} height - The height of the placeholder.
 * @param {string} [bgColor='#0F1C3F'] - The background color.
 * @param {string} [textColor='#ECEAD9'] - The text and ruler color.
 * @returns {string} A data URL for the generated placeholder SVG.
 */
function placeholder(
  width: number,
  height: number,
  bgColor = '#0F1C3F',
  textColor = '#ECEAD9',
): string {
  const str = rectangleRuler(width, height, bgColor, textColor);
  return svgToUrl(str);
}

const backgrounds = Object.values(colors).map(i => i['900']);
const widths = [400, 600, 900, 1200, 1400, 1600, 1970];
const heights = [600, 800, 1000, 1200, 1400, 2000, 2600];

/**
 * Generates a placeholder image data URL with random dimensions and a random background color.
 * @returns {string} A data URL for the randomly generated placeholder SVG.
 */
function randomPlaceholder(): string {
  const randomWidth = Math.floor(Math.random() * widths.length);
  const randomHeight = Math.floor(Math.random() * heights.length);
  const randomColor = Math.floor(Math.random() * backgrounds.length);
  return placeholder(widths[randomWidth], heights[randomHeight], backgrounds[randomColor]);
}

export { randomPlaceholder, placeholder, svgToUrl, rectangle, rectangleRuler };
