import { svgToUrl } from '../../utils/svgs.js';
import { IconPalette, IconPhoto, IconPhotoOff } from '../components/icons.js';
import colors from '../../utils/colors.js';
import styles from './main.css?inline';

// language=CSS
export default `
  :root,
  .dark,
  .dark .default,
  [data-theme='dark'] {
    --theme-body-background: ${colors.dark['600']};
    --theme-body-text-color: ${colors.dark['50']};
    --theme-text-color: ${colors.dark['50']};
    --theme-primary-color: ${colors.dark['700']};
    --theme-primary-text-color: ${colors.dark['50']};
    --theme-background-color: ${colors.dark['600']};
    --theme-hightlight-color: ${colors.dark['500']};
    --theme-border-color: ${colors.dark['400']};
  }

  .light,
  .light .default,
  [data-theme='light'] {
    --theme-body-background: ${colors.gray['50']};
    --theme-body-text-color: ${colors.gray['900']};
    --theme-text-color: ${colors.gray['900']};
    --theme-primary-color: ${colors.gray['300']};
    --theme-primary-text-color: ${colors.gray['900']};
    --theme-background-color: ${colors.gray['50']};
    --theme-hightlight-color: ${colors.gray['500']};
    --theme-border-color: ${colors.gray['100']};
  }

  #MangaOnlineViewer .PageContent .PageImg[src=""],
  #MangaOnlineViewer .PageContent .PageImg:not([src]) {
    background-image: url("${svgToUrl(IconPhoto)}");
  }

  #MangaOnlineViewer .PageContent .PageImg.imgBroken {
    background-image: url("${svgToUrl(IconPhotoOff)}");
  }

  #MangaOnlineViewer .Thumbnail .ThumbnailImg[src=""],
  #MangaOnlineViewer .Thumbnail .ThumbnailImg:not([src]) {
    background-image: url("${svgToUrl(IconPhoto)}");
  }

  #MangaOnlineViewer .ThemeRadio.custom {
      /*background-image: url("${svgToUrl(IconPalette)}");*/
  }

  ${styles}
`;
