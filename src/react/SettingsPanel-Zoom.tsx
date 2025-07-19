import { useStore } from '@nanostores/react';
import { locale, settings } from '../core/settings.ts';
import { changeMinZoom, changeZoomStep } from '../ui/events/options.ts';
import { changeDefaultViewMode } from '../ui/events/viewmode.ts';
import { changeDefaultZoom, changeDefaultZoomMode } from '../ui/events/zoom.ts';

function SettingsPanelZoom() {
  const l = useStore(locale);
  const s = useStore(settings);

  return (
    <>
      <div className="ControlLabel DefaultZoomMode">
        {l.DEFAULT_ZOOM_MODE}
        <select
          id="DefaultZoomMode"
          value={s.zoomMode}
          onChange={changeDefaultZoomMode}
        >
          <option value="percent">{l.PERCENT}</option>
          <option value="width">{l.FIT_WIDTH}</option>
          <option value="height">{l.FIT_HEIGHT}</option>
        </select>
      </div>

      <div
        className={`ControlLabel DefaultZoom ControlLabelItem ${
          s.zoomMode === 'percent' ? 'show' : ''
        }`}
      >
        <span>
          {l.DEFAULT_ZOOM}
          <output
            id="defaultZoomVal"
            className="RangeValue"
            htmlFor="DefaultZoom"
          >
            {s.defaultZoom}%
          </output>
        </span>
        <input
          type="range"
          value={s.defaultZoom}
          onInput={changeDefaultZoom}
          name="DefaultZoom"
          id="DefaultZoom"
          min="5"
          max="200"
          step="5"
          list="tickmarks"
        />
        <datalist id="tickmarks">
          <option value="5">5</option>
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="75">75</option>
          <option value="100">100</option>
          <option value="125">125</option>
          <option value="150">150</option>
          <option value="175">175</option>
          <option value="200">200</option>
        </datalist>
      </div>

      <div className="ControlLabel minZoom">
        <span>
          {l.MINIMUM_ZOOM}
          <output
            id="minZoomVal"
            className="RangeValue"
            htmlFor="minZoom"
          >
            {s.minZoom}%
          </output>
        </span>
        <input
          type="range"
          value={s.minZoom}
          onInput={changeMinZoom}
          name="minZoom"
          id="minZoom"
          min="30"
          max="100"
          step="10"
        />
      </div>

      <div className="ControlLabel zoomStep">
        <span>
          {l.ZOOM_STEP}
          <output
            id="zoomStepVal"
            className="RangeValue"
            htmlFor="zoomStep"
          >
            {s.zoomStep}%
          </output>
        </span>
        <input
          type="range"
          value={s.zoomStep}
          onInput={changeZoomStep}
          name="zoomStep"
          id="zoomStep"
          min="5"
          max="50"
          step="5"
        />
      </div>

      <div className="ControlLabel viewMode">
        {l.DEFAULT_VIEW_MODE}
        <select
          id="viewMode"
          value={s.viewMode}
          onChange={changeDefaultViewMode}
        >
          <option value="Vertical">{l.VIEW_MODE_VERTICAL}</option>
          <option value="WebComic">{l.VIEW_MODE_WEBCOMIC}</option>
          <option value="FluidLTR">{l.VIEW_MODE_LEFT}</option>
          <option value="FluidRTL">{l.VIEW_MODE_RIGHT}</option>
        </select>
      </div>
    </>
  );
}

export default SettingsPanelZoom;
