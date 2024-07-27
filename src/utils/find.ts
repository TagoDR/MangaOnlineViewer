export function findByContentEq(selector: string, content: string): HTMLElement[] {
  return [...document.querySelectorAll<HTMLElement>(selector)].filter(
    (e) => e.textContent === content,
  );
}

export function findByContentStarts(selector: string, content: string): HTMLElement[] {
  return [...document.querySelectorAll<HTMLElement>(selector)].filter((e) =>
    e.textContent?.startsWith(content),
  );
}

export function findByContentEnds(selector: string, content: string): HTMLElement[] {
  return [...document.querySelectorAll<HTMLElement>(selector)].filter((e) =>
    e.textContent?.endsWith(content),
  );
}

export function findOneByContentEq(selector: string, content: string): HTMLElement {
  return [...document.querySelectorAll<HTMLElement>(selector)].filter(
    (e) => e.textContent === content,
  )?.[0];
}

export function findOneByContentStarts(selector: string, content: string): HTMLElement {
  return [...document.querySelectorAll<HTMLElement>(selector)].filter((e) =>
    e.textContent?.startsWith(content),
  )?.[0];
}

export function findOneByContentEnds(selector: string, content: string): HTMLElement {
  return [...document.querySelectorAll<HTMLElement>(selector)].filter((e) =>
    e.textContent?.endsWith(content),
  )?.[0];
}

export function findClosestByContentEq(
  selector: string,
  content: string,
  ancestor: string = 'a',
): HTMLElement | null {
  return [...document.querySelectorAll<HTMLElement>(selector)]
    .filter((e) => e.textContent === content)?.[0]
    .closest(ancestor);
}

export function findClosestByContentStarts(
  selector: string,
  content: string,
  ancestor: string = 'a',
): HTMLElement | null {
  return [...document.querySelectorAll<HTMLElement>(selector)]
    .filter((e) => e.textContent?.startsWith(content))?.[0]
    .closest(ancestor);
}

export function findClosestByContentEnds(
  selector: string,
  content: string,
  ancestor: string = 'a',
): HTMLElement | null {
  return [...document.querySelectorAll<HTMLElement>(selector)]
    .filter((e) => e.textContent?.endsWith(content))?.[0]
    .closest(ancestor);
}
