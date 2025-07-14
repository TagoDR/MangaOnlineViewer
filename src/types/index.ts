export * from './IBookmark';
export * from './ILocale';
export * from './IManga';
export * from './ISettings';
export * from './ISite';

export function isKey<T extends object>(obj: T, key: PropertyKey): key is keyof T {
  return key in obj;
}
