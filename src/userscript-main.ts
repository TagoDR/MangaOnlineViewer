import start from './core/main';
import sites from './main';
import { logScript } from './utils/tampermonkey';

start(sites).catch(logScript);
