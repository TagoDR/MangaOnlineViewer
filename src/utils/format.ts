/**
 * Converts a string from kebab-case or snake_case to PascalCase, ensuring it starts with "Icon".
 * If the input already appears to be in the correct format, it is returned as is.
 * @param {string} name - The input string to convert.
 * @example
 * toPascalCase('align-box-right-top') // "IconAlignBoxRightTop"
 * toPascalCase('IconUserPlus') // "IconUserPlus"
 * @returns {string} The name in PascalCase with the 'Icon' prefix (e.g., "IconAlignBoxRightTopFilled").
 */
export function toPascalCase(name: string): string {
  // Check if the string already looks like a valid PascalCase icon name.
  if (name.startsWith('Icon') && !name.includes('-') && !name.includes('_')) {
    return name;
  }

  const withoutPrefix = name.startsWith('Icon') ? name.substring(4) : name;

  // Split by hyphens or underscores, then capitalize each word.
  const parts = withoutPrefix.split(/[-_]/);
  const pascalCased = parts.map(part => part.charAt(0).toUpperCase() + part.slice(1)).join('');

  return `Icon${pascalCased}`;
}

/**
 * Converts an icon name from PascalCase to kebab-case, removing the "Icon" prefix.
 * If the input already appears to be in kebab-case, it is returned as is.
 * @param {string} name - The input string to convert.
 * @example
 * toKebabCase('IconUserPlus') // "user-plus"
 * toKebabCase('user-plus') // "user-plus"
 * @returns {string} The name in kebab-case (e.g., "user-plus").
 */
export function toKebabCase(name: string): string {
  // Check if the string already looks like a valid kebab-case name.
  if (name.includes('-') && name === name.toLowerCase()) {
    return name;
  }

  // Remove the 'Icon' prefix if it exists.
  const withoutPrefix = name.startsWith('Icon') ? name.substring(4) : name;

  // Insert hyphens before uppercase letters (except the first one) and convert to lowercase.
  const kebabCased = withoutPrefix
    .trim()
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1-$2')
    .replace(/([a-z\d])([A-Z])/g, '$1-$2')
    .toLowerCase();

  return kebabCased;
}
