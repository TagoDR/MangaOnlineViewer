import type { ILocale } from '../types/index.ts';
import de_DE from './de_DE.ts';
import en_US from './en_US.ts';
import es_ES from './es_ES.ts';
import fr_FR from './fr_FR.ts';
import pt_BR from './pt_BR.ts';
import zh_CN from './zh_CN.ts';

/**
 * An array containing all available localizations for the application.
 * This is the central point for accessing different language packs.
 * @type {ILocale[]}
 */
const locales: ILocale[] = [en_US, es_ES, pt_BR, zh_CN, de_DE, fr_FR];

export default locales;
