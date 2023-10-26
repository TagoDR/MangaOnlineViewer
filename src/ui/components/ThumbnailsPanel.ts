import sequence from '../../utils/sequence';
import { IManga } from '../../types';
import { IconCategory } from './icons';
import { getAllLocaleStrings, getUserSettings } from '../../core/settings';

const ThumbnailsPanel = (manga: IManga) => `
<nav id='Navigation' class='panel ${getUserSettings().showThumbnails ? '' : 'disabled'}'>
      <div id='NavigationCounters' class='ControlLabel'>
        ${IconCategory}
        <i>0</i> / <b>${manga.begin > 1 ? manga.pages - (manga.begin - 1) : manga.pages}</b>
        ${getAllLocaleStrings('PAGES_LOADED')}
      </div>
      <div id='Thumbnails'>
        ${sequence(manga.pages, manga.begin).map(
          (index) => `
          <div id='Thumbnail${index}' class='Thumbnail'>
            <img id='ThumbnailImg${index}' alt='' class='ThumbnailImg' src='' />
            <span class='ThumbnailIndex'>${index}</span>
          </div>`,
        )}
      </div>
    </nav>
`;
export default ThumbnailsPanel;
