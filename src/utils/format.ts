/**
 * Converts a string from kebab-case to PascalCase, with an 'Icon' prefix.
 * If the input is already in the correct format, it is returned as is.
 * * @param name The input string (e.g., 'align-box-right-top-filled' or 'IconAlignBoxRightTopFilled').
 * @returns The name in PascalCase with the 'Icon' prefix.
 */
export function toPascalCase(name: string): string {
  // Check if the string already looks like a valid PascalCase icon name.
  // It should start with 'Icon' and have no hyphens or underscores.
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
 * Converts an icon name from PascalCase to kebab-case, removing the 'Icon' prefix.
 * If the input is already in the correct format, it is returned as is.
 * * @param name The input string (e.g., 'IconUserPlus' or 'user-plus').
 * @returns The name in kebab-case.
 */
export function toKebabCase(name: string): string {
  // Check if the string already looks like a valid kebab-case name.
  // It should be all lowercase, and contain hyphens but no underscores.
  if (name.includes('-') && name === name.toLowerCase()) {
    return name;
  }

  // Remove the 'Icon' prefix if it exists.
  const withoutPrefix = name.startsWith('Icon') ? name.substring(4) : name;

  // Insert hyphens before uppercase letters (except the first one) and convert to lowercase.
  const kebabCased = withoutPrefix.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();

  return kebabCased;
}
