import { useStore } from '@nanostores/react';
import { locale, settings } from '../core/settings.ts';
import {
  changeHeaderType,
  changeLazyStart,
  changeScrollHeight,
  checkAutoDownload,
  checkEnableComments,
  checkFitWidthOversize,
  checkHideImageControls,
  checkLazyLoad,
  checkShowThumbnails,
  checkVerticalSeparator,
} from '../ui/events/options.ts';
import Toggler from './Toggler.tsx';

function SettingsPanelOthers() {
  const l = useStore(locale);
  const s = useStore(settings);

  return (
    <>
      <div className="ControlLabel verticalSeparator">
        {l.VERTICAL_SEPARATOR}
        <Toggler
          name="verticalSeparator"
          checked={s.verticalSeparator}
          onChange={checkVerticalSeparator}
        />
      </div>

      <div className="ControlLabel fitIfOversize">
        {l.FIT_WIDTH_OVERSIZED}
        <Toggler
          name="fitIfOversize"
          checked={s.fitWidthIfOversize}
          onChange={checkFitWidthOversize}
        />
      </div>

      <div className="ControlLabel showThumbnails">
        {l.SHOW_THUMBNAILS}
        <Toggler
          name="showThumbnails"
          checked={s.showThumbnails}
          onChange={checkShowThumbnails}
        />
      </div>

      <div className="ControlLabel enableComments">
        {l.ENABLE_COMMENTS}
        <Toggler
          name="enableComments"
          checked={s.enableComments}
          onChange={checkEnableComments}
        />
      </div>

      <div className="ControlLabel downloadZip">
        {l.DOWNLOAD_IMAGES}
        <Toggler
          name="downloadZip"
          checked={s.downloadZip}
          onChange={checkAutoDownload}
        />
      </div>

      <div className="ControlLabel hidePageControls">
        {l.HIDE_CONTROLS}
        <Toggler
          name="hidePageControls"
          checked={s.hidePageControls}
          onChange={checkHideImageControls}
        />
      </div>

      <div className="ControlLabel lazyLoadImages">
        {l.LAZY_LOAD_IMAGES_ENABLE}
        <Toggler
          name="lazyLoadImages"
          checked={s.lazyLoadImages}
          onChange={checkLazyLoad}
        />
      </div>

      <div className={`ControlLabel lazyStart ControlLabelItem ${s.lazyLoadImages ? 'show' : ''}`}>
        <span>
          {l.LAZY_LOAD_IMAGES}
          <output
            id="lazyStartVal"
            htmlFor="lazyStart"
          >
            {s.lazyStart}
          </output>
        </span>
        <input
          type="range"
          value={s.lazyStart}
          onInput={changeLazyStart}
          name="lazyStart"
          id="lazyStart"
          min="5"
          max="100"
          step="5"
        />
      </div>

      <div className="ControlLabel autoScroll">
        <span>
          {l.AUTO_SCROLL_HEIGHT}
          <output
            id="scrollHeightVal"
            htmlFor="scrollHeight"
          >
            {s.scrollHeight}
          </output>
          px
        </span>
        <input
          type="range"
          value={s.scrollHeight}
          onInput={changeScrollHeight}
          name="scrollHeight"
          id="scrollHeight"
          min="1"
          max="100"
          step="1"
        />
      </div>

      <div className="ControlLabel headerType">
        {l.HEADER_TYPE}
        <select
          id="headerType"
          value={s.header}
          onChange={changeHeaderType}
        >
          <option value="hover">{l.HEADER_HOVER}</option>
          <option value="scroll">{l.HEADER_SCROLL}</option>
          <option value="click">{l.HEADER_CLICK}</option>
          <option value="fixed">{l.HEADER_FIXED}</option>
          <option value="simple">{l.HEADER_SIMPLE}</option>
        </select>
      </div>
    </>
  );
}

export default SettingsPanelOthers;
