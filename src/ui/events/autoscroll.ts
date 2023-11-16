import { logScript } from '../../utils/tampermonkey';

let scrollInterval: ReturnType<typeof setInterval> | undefined;
let scrolTimer = 5000;

function scroll() {
  window.scrollBy({
    top: window.innerHeight * 0.8,
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
    scrolTimer += timer;
    if (scrolTimer < 1000) scrolTimer = 1000;
    const label = document.querySelector('#ScrollSpeed');
    logScript('Updated auto scroll speed to ', scrolTimer);
    if (label) {
      label.textContent = String(scrolTimer / 1000);
    }
    if (scrollInterval) {
      clearInterval(scrollInterval);
      scrollInterval = setInterval(scroll, scrolTimer);
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
    scrollInterval = setInterval(scroll, scrolTimer);
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
