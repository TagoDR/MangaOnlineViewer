import { html } from '../../utils/code-tag';
import { getLocaleString } from '../../core/settings';
import { IconClockMinus, IconClockPlus, IconPlayerPlay, IconPlayerStop } from '../icons';

const ScrollControl = () =>
  html` <div id="ScrollControl" class="">
    <button id="AutoScroll" title="${getLocaleString('SCROLL_START')}" class="ControlButton">
      ${IconPlayerPlay} ${IconPlayerStop}
    </button>
    <button id="ScrollSlower" title="${getLocaleString('SCROLL_SLOWER')}" class="ControlButton">
      ${IconClockMinus}
    </button>
    <span id="ScrollSpeed">5</span><i>s</i>
    <button id="ScrollFaster" title="${getLocaleString('SCROLL_FASTER')}" class="ControlButton">
      ${IconClockPlus}
    </button>
  </div>`;
export default ScrollControl;
