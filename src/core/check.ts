import type { ISite } from '../types';
import { logScript } from '../utils/tampermonkey';
import { waitForAtb, waitForElm, waitForFunc, waitForVar } from '../utils/waitFor';

/**
 * Waits for a specific attribute to be present on an element, as defined in the site configuration.
 * @param {ISite} site - The site configuration object, which may contain `waitAttr`.
 * @returns {Promise<void>} A promise that resolves when the attribute is present.
 */
export async function testAttribute(site: ISite): Promise<void> {
  if (site.waitAttr !== undefined) {
    logScript(`Waiting for Attribute ${site.waitAttr[1]} of ${site.waitAttr[0]}`);
    const wait = await waitForAtb(site.waitAttr[0], site.waitAttr[1]);
    logScript(`Found Attribute ${site.waitAttr[1]} of ${site.waitAttr[0]} = ${wait}`);
  }
}

/**
 * Waits for a specific element to be present in the DOM, as defined in the site configuration.
 * @param {ISite} site - The site configuration object, which may contain `waitEle`.
 * @returns {Promise<void>} A promise that resolves when the element is present.
 */
export async function testElement(site: ISite): Promise<void> {
  if (site.waitEle !== undefined) {
    logScript(`Waiting for Element ${site.waitEle}`);
    const wait = await waitForElm(site.waitEle);
    logScript(`Found Element ${site.waitEle} = `, wait);
  }
}

/**
 * Waits for a specific global variable to be defined, as defined in the site configuration.
 * @param {ISite} site - The site configuration object, which may contain `waitVar`.
 * @returns {Promise<void>} A promise that resolves when the variable is defined.
 */
export async function testVariable(site: ISite): Promise<void> {
  if (site.waitVar !== undefined) {
    logScript(`Waiting for Variable ${site.waitVar}`);
    const wait = await waitForVar(site.waitVar);
    logScript(`Found Variable ${site.waitVar} = ${wait}`);
  }
}

/**
 * Waits for a specific function to return a truthy value, as defined in the site configuration.
 * @param {ISite} site - The site configuration object, which may contain `waitFunc`.
 * @returns {Promise<void>} A promise that resolves when the function returns a truthy value.
 */
export async function testFunc(site: ISite): Promise<void> {
  if (site.waitFunc !== undefined) {
    logScript(`Waiting to pass Function check ${site.waitFunc}`);
    const wait = await waitForFunc(site.waitFunc);
    logScript(`Found Function check ${site.waitFunc} = ${wait}`);
  }
}

/**
 * Waits for a specific amount of time, as defined in the site configuration.
 * @param {ISite} site - The site configuration object, which may contain `waitTime`.
 * @returns {Promise<void>} A promise that resolves after the specified delay.
 */
export async function testTime(site: ISite): Promise<void> {
  if (site.waitTime !== undefined) {
    logScript(`Waiting to for ${site.waitTime} milliseconds`);
    await new Promise(resolve => {
      setTimeout(resolve, site.waitTime);
    });
    logScript('Continuing after timer');
  }
}
