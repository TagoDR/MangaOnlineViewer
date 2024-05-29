export const base64Regex = /^data:(?<mimeType>image\/\w+);base64,+(?<data>.+)/;
export const objectURLRegex = /^blob:(.+?)\/(.+)$/;

export function isBase64ImageUrl(imageUrl: string) {
  const base64Pattern = /^data:image\/(png|jpg|jpeg|gif);base64,/;
  return base64Pattern.test(imageUrl);
}

export function isObjectURL(url: string) {
  return objectURLRegex.test(url);
}

export const getExtension = (mimeType: string) =>
  /image\/(?<ext>jpe?g|png|webp)/.exec(mimeType)?.groups?.ext ?? 'png';
