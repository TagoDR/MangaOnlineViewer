import sites from './adult';
import start from './core/viewer';
import { logScript } from './utils/tampermonkey';

start(sites).catch(logScript);
