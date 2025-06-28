import { waitForAtb, waitWithTimer } from './waitFor';

export async function bruteforce(
  resetPosition: () => void,
  quantPages: number,
  nextSelector: string,
  targetSelector: string,
  imageSelector: string = 'img',
  imageAttribute: string = 'src',
): Promise<string[]> {
  const div = document.createElement('div');
  div.setAttribute(
    'style',
    'height: 100vh;width: 100vw;position: fixed;top: 0;left: 0;z-index: 100000;background: white;opacity: 0.5;',
  );
  document.body.append(div);
  resetPosition();

  const next = document.querySelector(nextSelector);
  const target = document.querySelector<HTMLDivElement>(targetSelector);
  const src: string[] = [];
  for (let i = 1; i <= quantPages; i += 1) {
    src[i - 1] = await waitWithTimer(
      waitForAtb(imageSelector, imageAttribute, target ?? document.body),
      100,
    );
    target?.querySelector(imageSelector)?.removeAttribute(imageAttribute);
    next?.dispatchEvent(new Event('click'));
  }
  return src;
}
