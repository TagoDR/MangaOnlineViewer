import { ISite } from '../types';
import { isNothing } from '../utils/checks';
import { logScript } from '../utils/tampermonkey';

export function testAttribute(site: ISite) {
  if (site.waitAttr !== undefined) {
    const wait = document.querySelector(site.waitAttr[0])?.getAttribute(site.waitAttr[1]);
    if (isNothing(wait)) {
      logScript(`Waiting for Attribute ${site.waitAttr[1]} of ${site.waitAttr[0]} = ${wait}`);
      return true;
    }
    logScript(`Found Attribute ${site.waitAttr[1]} of ${site.waitAttr[0]} = ${wait}`);
  }
  return false;
}

export function testElement(site: ISite) {
  if (site.waitEle !== undefined) {
    const wait = document.querySelector(site.waitEle);
    if (isNothing(wait?.tagName)) {
      logScript(`Waiting for Element ${site.waitEle} = `, wait);
      return true;
    }
    logScript(`Found Element ${site.waitEle} = `, wait);
  }
  return false;
}

export function testVariable(site: ISite) {
  if (site.waitVar !== undefined) {
    const W = typeof unsafeWindow !== 'undefined' ? unsafeWindow : window;
    const wait = W[site.waitVar as any];
    if (isNothing(wait)) {
      logScript(`Waiting for Variable ${site.waitVar} = ${wait}`);
      return true;
    }
    logScript(`Found Variable ${site.waitVar} = ${wait}`);
  }
  return false;
}

export function testFunc(site: ISite) {
  if (site.waitFunc !== undefined) {
    const wait = site.waitFunc();
    if (!wait) {
      logScript(`Waiting to pass Function check ${site.waitFunc} = ${wait}`);
      return true;
    }
    logScript(`Found Function check ${site.waitFunc} = ${wait}`);
  }
  return false;
}
