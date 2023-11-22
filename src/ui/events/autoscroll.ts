import { logScript } from '../../utils/tampermonkey';
import { getUserSettings } from '../../core/settings';
import _ from 'lodash';

let scrollInterval: ReturnType<typeof setInterval> | undefined;

function scroll() {
  window.scrollBy({
    top: getUserSettings().scrollHeight,
    left: 0,
    behavior: 'smooth',
  });
  if (document.querySelector('#Header')?.classList.contains('headroom-end')) {
    clearInterval(scrollInterval);
    scrollInterval = undefined;
    document.querySelector('#ScrollControl')?.classList.remove('running');
    logScript('Finished auto scroll');
  }
}

export function toggleAutoScroll() {
  const control = document.querySelector('#AutoScroll');
  if (scrollInterval) {
    clearInterval(scrollInterval);
    scrollInterval = undefined;
    control?.classList.remove('running');
    logScript('Stopped auto scroll');
  } else {
    scroll();
    scrollInterval = setInterval(scroll, 1000 / 60);
    control?.classList.add('running');
    logScript('Start auto scroll');
  }
}
let resume = false;
const debaunceAutoScroll = _.debounce(() => {
  toggleAutoScroll();
  resume = false;
}, 500);
function manualScroll() {
  if (!resume && scrollInterval) {
    toggleAutoScroll();
    resume = true;
  }
  if (resume && !scrollInterval) {
    debaunceAutoScroll();
  }
}

function autoscroll() {
  window.addEventListener('wheel', _.throttle(manualScroll, 500));
  // Toggle Auto Scroll;
  document.querySelector('#AutoScroll')?.addEventListener('click', toggleAutoScroll);
}

export default autoscroll;
