import watheme from '@awesome.me/webawesome/dist/styles/themes/awesome.css?inline';
import sltheme from '@awesome.me/webawesome/dist/styles/themes/shoelace.css?inline';
import webawesome from '@awesome.me/webawesome/dist/styles/webawesome.css?inline';
import keyscss from '@gerhobbelt/keyscss/keys.css?inline';
import normalize from 'normalize.css/normalize.css?inline';
import nprogress from 'nprogress/nprogress.css?inline';
import sweetalert from 'sweetalert2/dist/sweetalert2.min.css?inline';
import fix from './fix.css?inline';

export default [webawesome, watheme, sltheme, normalize, sweetalert, fix, nprogress, keyscss].join(
  '\n',
);
