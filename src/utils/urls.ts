/**
 * Regular expression to match and capture components of a Base64 data URL.
 * @type {RegExp}
 */
export const base64Regex = /^data:(?<mimeType>image\/\w+);base64,+(?<data>.+)/;

/**
 * Regular expression to match an object URL (blob URL).
 * @type {RegExp}
 */
export const objectURLRegex = /^blob:(.+?)\/(.+)$/;

/**
 * Extracts the Base64 data part from a data URL string.
 * @param {string} src - The Base64 data URL.
 * @returns {string} The extracted Base64 data.
 */
export function getDataFromBase64(src: string): string {
  return src.slice(src.indexOf(';base64,') + 8);
}

/**
 * Checks if a given URL is a Base64 image data URL.
 * @param {string} imageUrl - The URL to check.
 * @returns {boolean} `true` if the URL is a Base64 image, `false` otherwise.
 */
export function isBase64ImageUrl(imageUrl: string): boolean {
  const base64Pattern = /^data:image\/(png|jpg|jpeg|gif|svg)/;
  return base64Pattern.test(imageUrl);
}

/**
 * Checks if a given URL is an object URL (blob URL).
 * @param {string} url - The URL to check.
 * @returns {boolean} `true` if the URL is an object URL, `false` otherwise.
 */
export function isObjectURL(url: string): boolean {
  return objectURLRegex.test(url);
}

/**
 * Extracts the file extension from a URL.
 * @param {string} url - The URL to parse.
 * @returns {string} The file extension (e.g., 'jpg', 'png') or an empty string if not found.
 */
export function getExtension(url: string): string {
  const parts = url.split('?');
  const filename = parts[0].split('/').pop();
  const extensionMatch = filename?.match(/\.[A-Za-z]{2,4}$/);
  return extensionMatch ? extensionMatch[0].slice(1) : '';
}

/**
 * Determines the image file extension from the first few characters of a Base64 string.
 * This is a faster but less reliable method than parsing the full MIME type.
 * @param {string} base64 - The Base64 string.
 * @returns {string} The determined file extension ('jpg', 'gif', 'webp', or 'png').
 */
export const getExtensionBase64 = (base64: string): string => {
  const c = base64.substring(base64.indexOf('/') + 1, base64.indexOf(';base64'));
  switch (c) {
    case '/':
      return 'jpg';
    case 'R':
      return 'gif';
    case 'U':
      return 'webp';
    // case 'i':
    default:
      return 'png';
  }
};

/**
 * Determines the file extension from a single character code.
 * @param {string} c - The character code (e.g., 'p' for png).
 * @returns {string} The corresponding file extension.
 */
export function extensionByCode(c: string): string {
  switch (c) {
    case 'p':
      return 'png';
    case 'b':
      return 'bmp';
    case 'g':
      return 'gif';
    case 'w':
      return 'webp';
    // case 'j':
    default:
      return 'jpg';
  }
}
