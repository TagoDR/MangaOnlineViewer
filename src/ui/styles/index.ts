/**
 * @file This module serves as the central aggregator for all the application's CSS styles.
 * It imports individual CSS files as inline strings, defines base theme variables for light and dark modes,
 * and combines them into a single CSS template literal that can be injected into the application's shadow DOM.
 */

import { css, unsafeCSS } from 'lit';
import { svgToUrl } from '../../utils/svgs';
import { IconPhoto, IconPhotoOff } from '../icons/StyledIcons.ts';
import styles from './App.css?inline';
import animation from './animation.css?inline';
import book from './book.css?inline';
import fluid from './fluid.css?inline';
import gallery from './gallery.css?inline';
import media from './media.css?inline';
import page from './page.css?inline';
import normalize from './simplenormalize.css?inline';
import theme from './theme.css?inline';

export default css`
  .PageContent .PageImg[src=''],
  .PageContent .PageImg:not([src]) {
    background-image: url('${unsafeCSS(svgToUrl(IconPhoto))}');
  }

  .PageContent .PageImg.imgBroken {
    background-image: url('${unsafeCSS(svgToUrl(IconPhotoOff))}');
  }

  ${unsafeCSS(theme)}
  ${unsafeCSS(normalize)}
  ${unsafeCSS(styles)}
  ${unsafeCSS(page)}
  ${unsafeCSS(fluid)}
  ${unsafeCSS(book)}
  ${unsafeCSS(gallery)}
  ${unsafeCSS(media)}
  ${unsafeCSS(animation)}
`;
