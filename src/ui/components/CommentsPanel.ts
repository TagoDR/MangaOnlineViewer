import type { IManga } from '../../types';
import { getLocaleString } from '../../core/settings';
import { IconMessage } from '../icons';
import { isBackgroundColorDark } from '../../utils/colors';

const commentsPanel = (manga: IManga) => `
<section id='CommentsPanel' class='${manga.comments ? '' : 'hide'}'>
  <div id='CommentsButton' class='ControlButton'
    title='${getLocaleString('DISPLAY_COMMENTS')}'>
    ${IconMessage}
    ${getLocaleString('DISPLAY_COMMENTS')}
  </div>
  <div id='CommentsArea' class='hide 
      ${isBackgroundColorDark(manga.comments ?? document.body) ? 'dark' : 'light'}'>
      ${manga.comments?.outerHTML}
  </div>
</section> 
`;
export default commentsPanel;
