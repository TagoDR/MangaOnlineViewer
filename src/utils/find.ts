type ContentMatcher = (element: HTMLElement, content: string) => boolean;

const matchers: Record<string, ContentMatcher> = {
  eq: (element, content) => element.textContent?.trim() === content,
  starts: (element, content) => !!element.textContent?.trim()?.startsWith(content),
  ends: (element, content) => !!element.textContent?.trim()?.endsWith(content),
};

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

function findOneElement(
  selector: string,
  content: string | string[],
  matcherKey: string,
): HTMLElement | undefined {
  return findElements(selector, content, matcherKey)?.[0];
}

function findClosest(
  selector: string,
  content: string | string[],
  matcherKey: string,
  ancestor: string = 'a',
): HTMLElement | null {
  const element = findOneElement(selector, content, matcherKey);
  return element?.closest(ancestor) ?? null;
}

// Export functions
export const findByContentEq = (selector: string, content: string | string[]) =>
  findElements(selector, content, 'eq');

export const findByContentStarts = (selector: string, content: string | string[]) =>
  findElements(selector, content, 'starts');

export const findByContentEnds = (selector: string, content: string | string[]) =>
  findElements(selector, content, 'ends');

export const findOneByContentEq = (selector: string, content: string | string[]) =>
  findOneElement(selector, content, 'eq');

export const findOneByContentStarts = (selector: string, content: string | string[]) =>
  findOneElement(selector, content, 'starts');

export const findOneByContentEnds = (selector: string, content: string | string[]) =>
  findOneElement(selector, content, 'ends');

export const findClosestByContentEq = (
  selector: string,
  content: string | string[],
  ancestor: string = 'a',
) => findClosest(selector, content, 'eq', ancestor);

export const findClosestByContentStarts = (
  selector: string,
  content: string | string[],
  ancestor: string = 'a',
) => findClosest(selector, content, 'starts', ancestor);

export const findClosestByContentEnds = (
  selector: string,
  content: string | string[],
  ancestor: string = 'a',
) => findClosest(selector, content, 'ends', ancestor);
