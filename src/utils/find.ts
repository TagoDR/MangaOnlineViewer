/**
 * A type definition for a function that checks if an element's text content matches a given string.
 * @param {HTMLElement} element - The HTML element to check.
 * @param {string} content - The string to match against the element's text content.
 * @returns {boolean} `true` if the content matches, `false` otherwise.
 */
type ContentMatcher = (element: HTMLElement, content: string) => boolean;

/**
 * A record of available content matching strategies.
 * @internal
 */
const matchers: Record<string, ContentMatcher> = {
  eq: (element, content) => element.textContent?.trim() === content,
  starts: (element, content) => !!element.textContent?.trim()?.startsWith(content),
  ends: (element, content) => !!element.textContent?.trim()?.endsWith(content),
};

/**
 * Finds all elements that match a given selector and whose text content satisfies a specific matching strategy.
 * @internal
 * @param {string} selector - The CSS selector to query for elements.
 * @param {string | string[]} content - The string or array of strings to match against the elements' text content.
 * @param {string} matcherKey - The key for the matching strategy to use (e.g., 'eq', 'starts', 'ends').
 * @returns {HTMLElement[]} An array of HTML elements that match the criteria.
 * @throws {Error} If an invalid `matcherKey` is provided.
 */
function findElements(
  selector: string,
  content: string | string[],
  matcherKey: string,
): HTMLElement[] {
  const matcher = matchers[matcherKey];
  if (!matcher) {
    throw new Error(`Invalid matcherKey: ${matcherKey}`);
  }

  return [...document.querySelectorAll<HTMLElement>(selector)].filter(element =>
    Array.isArray(content) ? content.some(c => matcher(element, c)) : matcher(element, content),
  );
}

/**
 * Finds the first element that matches a given selector and whose text content satisfies a specific matching strategy.
 * @internal
 * @param {string} selector - The CSS selector to query for elements.
 * @param {string | string[]} content - The string or array of strings to match against the elements' text content.
 * @param {string} matcherKey - The key for the matching strategy to use.
 * @returns {HTMLElement | undefined} The first matching HTML element, or `undefined` if none is found.
 */
function findOneElement(
  selector: string,
  content: string | string[],
  matcherKey: string,
): HTMLElement | undefined {
  return findElements(selector, content, matcherKey)?.[0];
}

/**
 * Finds the first element that matches a content strategy and then finds its closest ancestor matching a given selector.
 * @internal
 * @param {string} selector - The CSS selector for the target element.
 * @param {string | string[]} content - The content to match within the target element.
 * @param {string} matcherKey - The key for the matching strategy.
 * @param {string} [ancestor='a'] - The CSS selector for the ancestor to find.
 * @returns {HTMLElement | null} The closest ancestor element, or `null` if not found.
 */
function findClosest(
  selector: string,
  content: string | string[],
  matcherKey: string,
  ancestor: string = 'a',
): HTMLElement | null {
  const element = findOneElement(selector, content, matcherKey);
  return element?.closest(ancestor) ?? null;
}

/**
 * Finds all elements that match a selector and have text content exactly equal to the given string(s).
 * @param {string} selector - The CSS selector.
 * @param {string | string[]} content - The content to match exactly.
 * @returns {HTMLElement[]} The matching elements.
 */
export const findByContentEq = (selector: string, content: string | string[]) =>
  findElements(selector, content, 'eq');

/**
 * Finds all elements that match a selector and have text content starting with the given string(s).
 * @param {string} selector - The CSS selector.
 * @param {string | string[]} content - The content to match at the start.
 * @returns {HTMLElement[]} The matching elements.
 */
export const findByContentStarts = (selector: string, content: string | string[]) =>
  findElements(selector, content, 'starts');

/**
 * Finds all elements that match a selector and have text content ending with the given string(s).
 * @param {string} selector - The CSS selector.
 * @param {string | string[]} content - The content to match at the end.
 * @returns {HTMLElement[]} The matching elements.
 */
export const findByContentEnds = (selector: string, content: string | string[]) =>
  findElements(selector, content, 'ends');

/**
 * Finds the first element that matches a selector and has text content exactly equal to the given string(s).
 * @param {string} selector - The CSS selector.
 * @param {string | string[]} content - The content to match exactly.
 * @returns {HTMLElement | undefined} The first matching element.
 */
export const findOneByContentEq = (selector: string, content: string | string[]) =>
  findOneElement(selector, content, 'eq');

/**
 * Finds the first element that matches a selector and has text content starting with the given string(s).
 * @param {string} selector - The CSS selector.
 * @param {string | string[]} content - The content to match at the start.
 * @returns {HTMLElement | undefined} The first matching element.
 */
export const findOneByContentStarts = (selector: string, content: string | string[]) =>
  findOneElement(selector, content, 'starts');

/**
 * Finds the first element that matches a selector and has text content ending with the given string(s).
 * @param {string} selector - The CSS selector.
 * @param {string | string[]} content - The content to match at the end.
 * @returns {HTMLElement | undefined} The first matching element.
 */
export const findOneByContentEnds = (selector: string, content: string | string[]) =>
  findOneElement(selector, content, 'ends');

/**
 * Finds an element with exact content and then gets its closest ancestor.
 * @param {string} selector - The CSS selector for the descendant.
 * @param {string | string[]} content - The exact content to match.
 * @param {string} [ancestor='a'] - The selector for the ancestor.
 * @returns {HTMLElement | null} The matching ancestor element.
 */
export const findClosestByContentEq = (
  selector: string,
  content: string | string[],
  ancestor: string = 'a',
) => findClosest(selector, content, 'eq', ancestor);

/**
 * Finds an element with starting content and then gets its closest ancestor.
 * @param {string} selector - The CSS selector for the descendant.
 * @param {string | string[]} content - The starting content to match.
 * @param {string} [ancestor='a'] - The selector for the ancestor.
 * @returns {HTMLElement | null} The matching ancestor element.
 */
export const findClosestByContentStarts = (
  selector: string,
  content: string | string[],
  ancestor: string = 'a',
) => findClosest(selector, content, 'starts', ancestor);

/**
 * Finds an element with ending content and then gets its closest ancestor.
 * @param {string} selector - The CSS selector for the descendant.
 * @param {string | string[]} content - The ending content to match.
 * @param {string} [ancestor='a'] - The selector for the ancestor.
 * @returns {HTMLElement | null} The matching ancestor element.
 */
export const findClosestByContentEnds = (
  selector: string,
  content: string | string[],
  ancestor: string = 'a',
) => findClosest(selector, content, 'ends', ancestor);
