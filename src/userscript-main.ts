import sites from './main';
import start from './core/viewer';
import { logScript } from './utils/tampermonkey';

start(sites).catch(logScript);
