<script lang="ts">
import { locale, settings } from '../core/settings';
import { changeMinZoom, changeZoomStep } from '../ui/events/options.ts';
import { changeDefaultViewMode } from '../ui/events/viewmode.ts';
import { changeDefaultZoom, changeDefaultZoomMode } from '../ui/events/zoom.ts';
</script>

<div class="ControlLabel DefaultZoomMode">
  {$locale.DEFAULT_ZOOM_MODE}
  <select
    id="DefaultZoomMode"
    onchange={changeDefaultZoomMode}
    bind:value={$settings.zoomMode}
  >
    <option value="percent"
      >>
      {$locale.PERCENT}
    </option>
    <option value="width">
      {$locale.FIT_WIDTH}
    </option>
    <option value="height">
      {$locale.FIT_HEIGHT}
    </option>
  </select>
</div>

<div
  class="ControlLabel DefaultZoom ControlLabelItem {$settings.zoomMode === 'percent' ? 'show' : ''}"
>
  <span>
    {$locale.DEFAULT_ZOOM}
    <output
      class="RangeValue"
      for="DefaultZoom"
      id="defaultZoomVal"
    >
      {$settings.defaultZoom}%
    </output>
  </span>
  <input
    id="DefaultZoom"
    list="tickmarks"
    max="200"
    min="5"
    name="DefaultZoom"
    oninput={changeDefaultZoom}
    step="5"
    type="range"
    value={$settings.defaultZoom}
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

<div class="ControlLabel minZoom">
  <span>
    {$locale.MINIMUM_ZOOM}
    <output
      class="RangeValue"
      for="minZoom"
      id="minZoomVal"
    >
      {$settings.minZoom}%
    </output>
  </span>
  <input
    id="minZoom"
    max="100"
    min="30"
    name="minZoom"
    oninput={changeMinZoom}
    step="10"
    type="range"
    value={$settings.minZoom}
  />
</div>

<div class="ControlLabel zoomStep">
  <span>
    {$locale.ZOOM_STEP}
    <output
      class="RangeValue"
      for="zoomStep"
      id="zoomStepVal"
    >
      {$settings.zoomStep}%
    </output>
  </span>
  <input
    id="zoomStep"
    max="50"
    min="5"
    name="zoomStep"
    oninput={changeZoomStep}
    step="5"
    type="range"
    value={$settings.zoomStep}
  />
</div>

<div class="ControlLabel viewMode">
  {$locale.DEFAULT_VIEW_MODE}
  <select
    id="viewMode"
    onchange={changeDefaultViewMode}
    bind:value={$settings.viewMode}
  >
    <option value="Vertical">
      {$locale.VIEW_MODE_VERTICAL}
    </option>
    <option value="WebComic">
      {$locale.VIEW_MODE_WEBCOMIC}
    </option>
    <option value="FluidLTR">
      {$locale.VIEW_MODE_LEFT}
    </option>
    <option value="FluidRTL">
      {$locale.VIEW_MODE_RIGHT}
    </option>
  </select>
</div>
