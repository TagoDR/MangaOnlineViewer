import { logScript } from '../../utils/tampermonkey';
import { getUserSettings } from '../../core/settings';

let scrollInterval: ReturnType<typeof setInterval> | undefined;
let scrollSpeed = getUserSettings().scrollTimer;

function scroll() {
  window.scrollBy({
    top: window.innerHeight * (getUserSettings().scrollPercent / 100),
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

function updateTimer(timer: number) {
  return () => {
    scrollSpeed += timer;
    if (scrollSpeed < 1000) scrollSpeed = 1000;
    const label = document.querySelector('#ScrollSpeed');
    logScript('Updated auto scroll speed to ', scrollSpeed);
    if (label) {
      label.textContent = String(scrollSpeed / 1000);
    }
    if (scrollInterval) {
      clearInterval(scrollInterval);
      scrollInterval = setInterval(scroll, scrollSpeed);
    }
  };
}

export function toggleAutoScroll() {
  const control = document.querySelector('#ScrollControl');
  if (scrollInterval) {
    clearInterval(scrollInterval);
    scrollInterval = undefined;
    control?.classList.remove('running');
    logScript('Stopped auto scroll');
  } else {
    scroll();
    scrollInterval = setInterval(scroll, scrollSpeed);
    control?.classList.add('running');
    logScript('Start auto scroll');
  }
}

function autoscroll() {
  // Toggle Auto Scroll;
  document.querySelector('#AutoScroll')?.addEventListener('click', toggleAutoScroll);
  // Increase Scroll Speed
  document.querySelector('#ScrollFaster')?.addEventListener('click', updateTimer(1000));
  // Decrease Scroll Speed
  document.querySelector('#ScrollSlower')?.addEventListener('click', updateTimer(-1000));
}

export default autoscroll;
