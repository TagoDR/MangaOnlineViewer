/**
 * @file This module serves as the central aggregator for all the application's CSS styles.
 * It imports individual CSS files as inline strings, defines base theme variables for light and dark modes,
 * and combines them into a single CSS template literal that can be injected into the application's shadow DOM.
 */

import keyscss from '@gerhobbelt/keyscss/keys.css?inline';
import { css } from '../../utils/code-tag';
import { svgToUrl } from '../../utils/svgs';
import { IconPhotoOffRaw, IconPhotoRaw } from '../icons';
import styles from './App.css?inline';
import animation from './animation.css?inline';
import fluid from './fluid.css?inline';
import header from './header.css?inline';
import media from './media.css?inline';
import page from './page.css?inline';
import normalize from './simplenormalize.css?inline';

export default css`
  .PageContent .PageImg[src=''],
  .PageContent .PageImg:not([src]) {
    background-image: url('${svgToUrl(IconPhotoRaw)}');
  }

  .PageContent .PageImg.imgBroken {
    background-image: url('${svgToUrl(IconPhotoOffRaw)}');
  }

  ${normalize}
  ${styles}
  ${header}
  ${page}
  ${fluid}
  ${media}
  ${animation}
  ${keyscss}
`;
