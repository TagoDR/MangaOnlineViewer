import { useStore } from '@nanostores/preact';
import { locale, settings } from '../core/settings.ts';
import { changeLoadMode, changePagesPerSecond } from '../ui/events/options.ts';

function SettingsPanelLoading() {
  const l = useStore(locale);
  const s = useStore(settings);

  return (
    <>
      <div className="ControlLabel loadMode">
        {l.DEFAULT_LOAD_MODE}
        <select
          id="loadMode"
          value={s.loadMode}
          onChange={changeLoadMode}
        >
          <option value="wait">{l.LOAD_MODE_NORMAL}</option>
          <option value="always">{l.LOAD_MODE_ALWAYS}</option>
          <option value="never">{l.LOAD_MODE_NEVER}</option>
        </select>
      </div>
      <div className="ControlLabel PagesPerSecond">
        {l.LOAD_SPEED}
        <select
          id="PagesPerSecond"
          value={s.throttlePageLoad}
          onChange={changePagesPerSecond}
        >
          <option value="3000">0.3({l.SLOWLY})</option>
          <option value="2000">0.5</option>
          <option value="1000">01({l.NORMAL})</option>
          <option value="500">02</option>
          <option value="250">04({l.FAST})</option>
          <option value="125">08</option>
          <option value="100">10({l.EXTREME})</option>
          <option value="1">{l.ALL_PAGES}</option>
        </select>
      </div>
    </>
  );
}

export default SettingsPanelLoading;
