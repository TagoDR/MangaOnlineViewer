import _ from 'lodash';
import { logScript } from '../../utils/tampermonkey';
import { getSettingsValue } from '../../core/settings';

let scrollActive = false;

function scroll() {
  const chapter = document.querySelector<HTMLElement>('#Chapter');
  if (chapter?.classList.contains('FluidLTR') || chapter?.classList.contains('FluidRTL')) {
    const scrollDirection = chapter.classList.contains('FluidRTL') ? -1 : 1;
    chapter?.scrollBy({
      top: 0,
      left: getSettingsValue('scrollHeight') * scrollDirection,
      behavior: 'smooth',
    });
  } else {
    window.scrollBy({
      top: getSettingsValue('scrollHeight'),
      left: 0,
      behavior: 'smooth',
    });
  }
  if (document.querySelector('#Header')?.classList.contains('headroom-end')) {
    scrollActive = false;
    document.querySelector('#ScrollControl')?.classList.remove('running');
    logScript('Finished auto scroll');
  }
  if (scrollActive) {
    requestAnimationFrame(scroll);
  }
}

export function toggleAutoScroll() {
  const control = document.querySelector('#AutoScroll');
  if (scrollActive) {
    scrollActive = false;
    control?.classList.remove('running');
    logScript('Stopped auto scroll');
  } else {
    scrollActive = true;
    requestAnimationFrame(scroll);
    control?.classList.add('running');
    logScript('Start auto scroll');
  }
}

let resume = false;
const debounceAutoScroll = _.debounce(() => {
  toggleAutoScroll();
  resume = false;
}, 500);

function manualScroll() {
  if (!resume && scrollActive) {
    toggleAutoScroll();
    resume = true;
  }
  if (resume && !scrollActive) {
    debounceAutoScroll();
  }
}

function autoscroll() {
  window.addEventListener('wheel', _.throttle(manualScroll, 500));
  document.querySelector('#AutoScroll')?.addEventListener('click', toggleAutoScroll);
}

export default autoscroll;
