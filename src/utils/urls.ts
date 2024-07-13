export const base64Regex = /^data:(?<mimeType>image\/\w+);base64,+(?<data>.+)/;
export const objectURLRegex = /^blob:(.+?)\/(.+)$/;

export function getDataFromBase64(src: string) {
  return src.slice(src.indexOf(';base64,') + 8);
}

export function isBase64ImageUrl(imageUrl: string) {
  const base64Pattern = /^data:image\/(png|jpg|jpeg|gif);base64,/;
  return base64Pattern.test(imageUrl);
}

export function isObjectURL(url: string) {
  return objectURLRegex.test(url);
}

export function getExtension(url: string) {
  const parts = url.split('?');
  const filename = parts[0].split('/').pop();
  const extensionMatch = filename?.match(/\.[A-Za-z]{2,4}$/);
  return extensionMatch ? extensionMatch[0].slice(1) : '';
}

export const getExtensionBase64 = (base64: string) => {
  const c = base64.substring(base64.indexOf('/') + 1, base64.indexOf(';base64'));
  switch (c) {
    case '/':
      return 'jpg';
    case 'R':
      return 'gif';
    case 'U':
      return 'webp';
    case 'i':
    default:
      return 'png';
  }
};
