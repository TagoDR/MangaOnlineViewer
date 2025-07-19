<script lang="ts">
import { locale, settings } from '../core/settings';
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
import Toggler from './Toggler.svelte';
</script>

<div class="ControlLabel verticalSeparator">
  {$locale.VERTICAL_SEPARATOR}
  <Toggler
    checked={$settings.verticalSeparator}
    name="verticalSeparator"
    onchange={checkVerticalSeparator}
  ></Toggler>
</div>

<div class="ControlLabel fitIfOversize">
  {$locale.FIT_WIDTH_OVERSIZED}
  <Toggler
    checked={$settings.fitWidthIfOversize}
    name="fitIfOversize"
    onchange={checkFitWidthOversize}
  ></Toggler>
</div>

<div class="ControlLabel showThumbnails">
  {$locale.SHOW_THUMBNAILS}
  <Toggler
    checked={$settings.showThumbnails}
    name="showThumbnails"
    onchange={checkShowThumbnails}
  ></Toggler>
</div>

<div class="ControlLabel enableComments">
  {$locale.ENABLE_COMMENTS}
  <Toggler
    checked={$settings.enableComments}
    name="enableComments"
    onchange={checkEnableComments}
  ></Toggler>
</div>

<div class="ControlLabel downloadZip">
  {$locale.DOWNLOAD_IMAGES}
  <Toggler
    checked={$settings.downloadZip}
    name="downloadZip"
    onchange={checkAutoDownload}
  ></Toggler>
</div>

<div class="ControlLabel hidePageControls">
  {$locale.HIDE_CONTROLS}
  <Toggler
    checked={$settings.hidePageControls}
    name="hidePageControls"
    onchange={checkHideImageControls}
  ></Toggler>
</div>

<div class="ControlLabel lazyLoadImages">
  {$locale.LAZY_LOAD_IMAGES_ENABLE}
  <Toggler
    checked={$settings.lazyLoadImages}
    name="lazyLoadImages"
    onchange={checkLazyLoad}
  ></Toggler>
</div>

<div
  class="ControlLabel lazyStart ControlLabelItem
    {$settings.lazyLoadImages ? 'show' : ''}"
>
  <span>
    {$locale.LAZY_LOAD_IMAGES}
    <output
      for="lazyStart"
      id="lazyStartVal"
    >
      {$settings.lazyStart}
    </output>
  </span>
  <input
    id="lazyStart"
    max="100"
    min="5"
    name="lazyStart"
    oninput={changeLazyStart}
    step="5"
    type="range"
    value={$settings.lazyStart}
  />
</div>

<div class="ControlLabel autoScroll">
  <span>
    {$locale.AUTO_SCROLL_HEIGHT}
    <output
      for="scrollHeight"
      id="scrollHeightVal"
    >
      {$settings.scrollHeight}
    </output>px
  </span>
  <input
    id="scrollHeight"
    max="100"
    min="1"
    name="scrollHeight"
    oninput={changeScrollHeight}
    step="1"
    type="range"
    value={$settings.scrollHeight}
  />
</div>

<div class="ControlLabel headerType">
  {$locale.HEADER_TYPE}
  <select
    id="headerType"
    onchange={changeHeaderType}
    bind:value={$settings.header}
  >
    <option value="hover">
      {$locale.HEADER_HOVER}
    </option>
    <option value="scroll">
      {$locale.HEADER_SCROLL}
    </option>
    <option value="click">
      {$locale.HEADER_CLICK}
    </option>
    <option value="fixed">
      {$locale.HEADER_FIXED}
    </option>
    <option value="simple">
      {$locale.HEADER_SIMPLE}
    </option>
  </select>
</div>
