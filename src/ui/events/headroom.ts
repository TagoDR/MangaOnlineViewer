import _ from 'lodash';
import { getSettingsValue, setAppStateValue } from '../../core/settings';

let prevOffset = 0;
let showEnd = 0;

export function toggleScrollDirection() {
  const { scrollY } = window;
  if (
    showEnd &&
    getSettingsValue('zoomMode') !== 'height' &&
    scrollY + window.innerHeight + showEnd > document.body.scrollHeight
  ) {
    setAppStateValue('header', true); //end
  } else if (scrollY > prevOffset && scrollY > 50) {
    setAppStateValue('header', false); //hide
  } else if (scrollY < prevOffset && scrollY > 50) {
    setAppStateValue('header', true); //show
  } else if (scrollY <= 100) {
    setAppStateValue('header', true); //top
  } else {
    setAppStateValue('header', false); //empty
  }

  prevOffset = scrollY;
}

/**
 * Changes header class when scrolling up or down to show/hide it
 * @param showEnd default 0px from end of the screen to show header
 */
function headroom(pixelsToShowEnd = 0) {
  showEnd = pixelsToShowEnd;
  window.addEventListener('scroll', _.debounce(toggleScrollDirection, 50));
}

export default headroom;
