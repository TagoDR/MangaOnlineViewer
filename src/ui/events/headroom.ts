import _ from 'lodash';
import { getSettingsValue } from '../../core/settings';

/**
 * Changes header class when scrolling up or down to show/hide it
 * @param showEnd default 0px from end of the screen to show header
 */
function headroom(showEnd = 0) {
  let prevOffset = 0;

  const setScrollDirection = (classSuffix: string) => {
    const header = document.querySelector<HTMLDivElement>('#Header');
    if (!header) return;
    header.classList.remove('headroom-end', 'headroom-hide', 'headroom-show', 'headroom-top');
    if (classSuffix) {
      header.classList.add(`headroom-${classSuffix}`);
    }
  };

  function toggleScrollDirection() {
    const { scrollY } = window;
    if (
      showEnd &&
      getSettingsValue('zoomMode') !== 'height' &&
      scrollY + window.innerHeight + showEnd > document.body.scrollHeight
    ) {
      setScrollDirection('end');
    } else if (scrollY > prevOffset && scrollY > 50) {
      setScrollDirection('hide');
    } else if (scrollY < prevOffset && scrollY > 50) {
      setScrollDirection('show');
    } else if (scrollY <= 100) {
      setScrollDirection('top');
    } else {
      setScrollDirection('');
    }

    prevOffset = scrollY;
  }

  window.addEventListener('scroll', _.debounce(toggleScrollDirection, 50));
}

export default headroom;
