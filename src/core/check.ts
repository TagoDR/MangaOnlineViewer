import type { ISite } from '../types';
import { logScript } from '../utils/tampermonkey';
import { waitForAtb, waitForElm, waitForFunc, waitForVar } from '../utils/waitFor';

export async function testAttribute(site: ISite) {
  if (site.waitAttr !== undefined) {
    logScript(`Waiting for Attribute ${site.waitAttr[1]} of ${site.waitAttr[0]}`);
    const wait = await waitForAtb(site.waitAttr[0], site.waitAttr[1]);
    logScript(`Found Attribute ${site.waitAttr[1]} of ${site.waitAttr[0]} = ${wait}`);
  }
}

export async function testElement(site: ISite) {
  if (site.waitEle !== undefined) {
    logScript(`Waiting for Element ${site.waitEle}`);
    const wait = await waitForElm(site.waitEle);
    logScript(`Found Element ${site.waitEle} = `, wait);
  }
}

export async function testVariable(site: ISite) {
  if (site.waitVar !== undefined) {
    logScript(`Waiting for Variable ${site.waitVar}`);
    const wait = await waitForVar(site.waitVar);
    logScript(`Found Variable ${site.waitVar} = ${wait}`);
  }
}

export async function testFunc(site: ISite) {
  if (site.waitFunc !== undefined) {
    logScript(`Waiting to pass Function check ${site.waitFunc}`);
    const wait = await waitForFunc(site.waitFunc);
    logScript(`Found Function check ${site.waitFunc} = ${wait}`);
  }
}

export async function testTime(site: ISite) {
  if (site.waitTime !== undefined) {
    logScript(`Waiting to for ${site.waitTime} milliseconds`);
    await new Promise((resolve) => {
      setTimeout(resolve, site.waitTime);
    });
    logScript('Continuing after timer');
  }
}
