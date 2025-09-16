import webawesome from '@awesome.me/webawesome/dist/styles/webawesome.css?inline';
import normalize from 'normalize.css/normalize.css?inline';
import nprogress from 'nprogress/nprogress.css?inline';
import sweetalert from 'sweetalert2-neutral/dist/sweetalert2.min.css?inline';
import fix from './fix.css?inline';

export default [normalize, webawesome, sweetalert, nprogress, fix].join('\n');
