import localhost from './main/localhost';
import display from './core/display';
import { logScript } from './utils/tampermonkey';

display(localhost.run()).catch(logScript);
