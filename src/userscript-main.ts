import sites from './main';
import start from './core/main';
import { logScript } from './utils/tampermonkey';

start(sites).catch(logScript);
