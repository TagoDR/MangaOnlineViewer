import _ from 'lodash';
import { changeAppStateValue, getSettingsValue, setAppStateValue } from '../../core/settings';

export function buttonHeaderClick() {
  if (getSettingsValue('header') === 'click') {
    changeAppStateValue('headerVisible', v => !v);
  }
}

export function isMouseInsideRegion(event: MouseEvent, headerWidth: number, headerHeight: number) {
  // Check if the mouse is inside the region
  return (
    event.clientX >= 0 &&
    event.clientX <= headerWidth &&
    event.clientY >= 0 &&
    event.clientY <= headerHeight
  );
}

export function headerHover(event: MouseEvent) {
  if (getSettingsValue('header') === 'hover') {
    setAppStateValue(
      'headerVisible',
      isMouseInsideRegion(event, window.innerWidth, 150) || window.scrollY <= 100,
    );
  }
}

let prevOffset = 0;
const showEnd = 100;

export function toggleScrollDirection() {
  const { scrollY } = window;
  if (
    showEnd &&
    getSettingsValue('zoomMode') !== 'height' &&
    scrollY + window.innerHeight + showEnd > document.body.scrollHeight
  ) {
    setAppStateValue('headerVisible', true); // end
  } else if (scrollY > prevOffset && scrollY > 50) {
    setAppStateValue('headerVisible', false); // hide
  } else if (scrollY < prevOffset && scrollY > 50) {
    setAppStateValue('headerVisible', true); // show
  } else if (scrollY <= 100) {
    setAppStateValue('headerVisible', true); // top
  } else {
    setAppStateValue('headerVisible', false); // ''
  }

  prevOffset = scrollY;
}

/**
 * Changes header class when scrolling up or down to show/hide it
 * @param showEnd default 0px from end of the screen to show header
 */
function headroom() {
  window.addEventListener('scroll', _.throttle(toggleScrollDirection, 300));
  window.addEventListener('mousemove', _.throttle(headerHover, 300));
}

export default headroom;
