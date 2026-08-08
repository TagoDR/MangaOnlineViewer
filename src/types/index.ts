export * from './IApp.ts';
export * from './IBookmark.ts';
export * from './ILocale.ts';
export * from './IManga.ts';
export * from './ISettings.ts';
export * from './ISite.ts';

/**
 * A type guard to check if a given key exists on an object in a type-safe way.
 * This allows TypeScript to narrow the type of the key within conditional blocks.
 * @template T - The type of the object.
 * @param {T} obj - The object to check.
 * @param {PropertyKey} key - The key to check for.
 * @returns {key is keyof T} `true` if the key is a valid key of the object, `false` otherwise.
 */
export function isKey<T extends object>(obj: T, key: PropertyKey): key is keyof T {
  return key in obj;
}
