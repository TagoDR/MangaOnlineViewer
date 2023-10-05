import sweetalert from 'sweetalert2/dist/sweetalert2.min.css?inline';
import normalize from 'normalize.css/normalize.css?inline';
import nprogress from 'nprogress/nprogress.css?inline';
import keyscss from '@gerhobbelt/keyscss/keys.css?inline';
import fix from './fix.css?inline';

export default [normalize, sweetalert, fix, nprogress, keyscss].join('\n');
