import { useStore } from '@nanostores/preact';
import { isSettingsLocal, locale, settings } from '../core/settings.ts';
import locales from '../locales';
import { changeLocale, changeSettingsScope } from '../ui/events/options.ts';
import { IconLocationCog, IconWorldCog } from './Icons.ts';

function SettingsPanelGeneral() {
  const l = useStore(locale);
  const s = useStore(settings);

  return (
    <>
      <div className="ControlLabel">
        {l.SCOPE}
        <div
          id="SettingsScope"
          className="radio-inputs"
        >
          <label className="radio">
            <input
              type="radio"
              id="globalSettings"
              name="settingsScope"
              value="false"
              checked={!isSettingsLocal()}
              onChange={changeSettingsScope}
            />
            <span className="name">
              <IconWorldCog /> {l.GLOBAL}
            </span>
          </label>
          <label className="radio">
            <input
              type="radio"
              id="localSettings"
              name="settingsScope"
              value="true"
              checked={isSettingsLocal()}
              onChange={changeSettingsScope}
            />
            <span className="name">
              <IconLocationCog /> {window.location.hostname}
            </span>
          </label>
        </div>
      </div>
      <div className="ControlLabel locale">
        {l.LANGUAGE}
        <select
          id="locale"
          value={s.locale}
          onChange={changeLocale}
        >
          {locales.map(loc => (
            <option
              value={loc.ID}
              key={loc.ID}
            >
              {loc.NAME}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}

export default SettingsPanelGeneral;
