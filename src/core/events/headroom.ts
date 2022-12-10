import _ from 'lodash';
import { useSettings } from '../settings.js';

/**
 * Changes header class when scrolling up or down to show/hide it
 * @param showEnd [default 0]px from end of the screen to show header
 */
function headroom(showEnd = 0) {
  let prevOffset = 0;

  const setScrollDirection = (classSuffix: string) => {
    const header = document.querySelector<HTMLDivElement>('#Header')!;
    header.classList.remove('headroom-end');
    header.classList.remove('headroom-hide');
    header.classList.remove('headroom-show');
    if (classSuffix) header.classList.add(`headroom-${classSuffix}`);
  };

  function toggleScrollDirection() {
    const { scrollY } = window;
    if (
      showEnd &&
      useSettings().zoomMode !== 'height' &&
      scrollY + window.innerHeight + showEnd > document.body.offsetHeight
    ) {
      setScrollDirection('end');
    } else if (scrollY > prevOffset && scrollY > 50) {
      setScrollDirection('hide');
    } else if (scrollY < prevOffset && scrollY > 50) {
      setScrollDirection('show');
    } else {
      setScrollDirection('');
    }
    prevOffset = scrollY;
  }

  window.addEventListener('scroll', _.debounce(toggleScrollDirection, 50));
}

export default headroom;
