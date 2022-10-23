import en_US from './en_US.json' assert { type: 'json' };
import pt_BR from './pt_BR.json' assert { type: 'json' };
import { ILocale } from '../types/ILocale';

const locales = [en_US, pt_BR] as ILocale[];

export default locales;
