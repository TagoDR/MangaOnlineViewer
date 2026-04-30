import type { ISite } from '../types';
import { logScript } from '../utils/tampermonkey';
import { waitForAtb, waitForElm, waitForFunc, waitForVar } from '../utils/waitFor';

/**
 * A generic helper function to run a test condition.
 * @internal
 * @template T
 * @param {T | undefined} value - The value to check. If undefined, the test is skipped.
 * @param {() => Promise<any>} waiter - A function that returns a promise that resolves when the condition is met.
 * @param {string} startLog - The message to log when the test starts.
 * @param {string} endLog - The message to log when the test ends.
 */
async function testCondition<T>(
  value: T | undefined,
  waiter: (arg: T) => Promise<unknown>,
  startLog: string,
  endLog: string,
) {
  if (value !== undefined) {
    logScript(startLog);
    const result = await waiter(value);
    logScript(endLog, result);
  }
}

/**
 * Runs a series of checks for a given site to ensure that the page is ready for scraping.
 * @param {ISite} site - The site configuration object.
 */
export async function runSiteTests(site: ISite): Promise<void> {
  await testCondition(
    site.waitAttr,
    waitAttr => waitForAtb(waitAttr?.[0], waitAttr?.[1]),
    `Waiting for Attribute ${site.waitAttr?.[1]} of ${site.waitAttr?.[0]}`,
    `Found Attribute ${site.waitAttr?.[1]} of ${site.waitAttr?.[0]} =`,
  );

  await testCondition(
    site.waitEle,
    waitForElm,
    `Waiting for Element ${site.waitEle}`,
    'Found Element',
  );

  await testCondition(
    site.waitVar,
    waitForVar,
    `Waiting for Variable ${site.waitVar}`,
    'Found Variable',
  );

  await testCondition(
    site.waitFunc,
    waitForFunc,
    `Waiting to pass Function check ${site.waitFunc}`,
    'Found Function check',
  );

  await testCondition(
    site.waitTime,
    waitTime => new Promise(resolve => setTimeout(resolve, waitTime)),
    `Waiting for ${site.waitTime} milliseconds`,
    'Continuing after timer',
  );
}
