import type { ILocale } from '../types';
import de_DE from './de_DE';
import en_US from './en_US';
import es_ES from './es_ES';
import fr_FR from './fr_FR';
import pt_BR from './pt_BR';
import zh_CN from './zh_CN';

/**
 * An array containing all available localizations for the application.
 * This is the central point for accessing different language packs.
 * @type {ILocale[]}
 */
const locales: ILocale[] = [en_US, es_ES, pt_BR, zh_CN, de_DE, fr_FR];

export default locales;
