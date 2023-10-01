<script lang="ts">
    import { _ as getLocaleString, locale } from 'svelte-i18n';
    import settings from '../core/settings';
    import locales from '../locales';
    import IconX from './icons/x.svelte';
    import IconSun from './icons/sun.svelte';
    import IconMoon from './icons/moon.svelte';
    import IconPalette from './icons/palette.svelte';
    import IconCheck from './icons/check.svelte';
    import colors from '../utils/colors';

    function changeLocale(event: Event) {
        locale.set((event.target as HTMLSelectElement).value);
    }
</script>

<div id="SettingsPanel" class="panel">
    <h2>{$getLocaleString('SETTINGS')}</h2>
    <button id="CloseSettings" class="closeButton" title={$getLocaleString('CLOSE')}>
        <IconX />
    </button>
    <button id="ResetSettings" class="ControlButton">
        {$getLocaleString('BUTTON_RESET_SETTINGS')}
    </button>
    <!-- =========================================================================================== -->
    <div class="ControlLabel locale">
        {$getLocaleString('LANGUAGE')}
        <select id="locale" onchange={changeLocale}>
            {#each locales as l, index (index)}
                <option value={l.ID} selected={$settings.locale === l.ID}>
                    {l.NAME}
                </option>
            {/each}
        </select>
    </div>
    <!-- =========================================================================================== -->
    <div id="ThemeSection">
        <div class="ControlLabel ColorSchemeSelector">
            {$getLocaleString('COLOR_SCHEME')}
            <button id="ColorScheme" class="ControlButton">
                <IconSun />
                <IconMoon />
            </button>
        </div>
        <!-- =========================================================================================== -->
        <div class="ControlLabel ThemeSelector">
            {$getLocaleString('THEME')}
            <span
                class="custom ThemeRadio {$settings.theme === 'custom' ? 'selected' : ''}"
                title="custom"
            >
                <IconPalette />
                <IconCheck />
            </span>
            {#each [...Object.keys(colors).map((color) => colors[color].name)] as theme, index (index)}
                <span
                    class="{theme} ThemeRadio {$settings.theme === theme ? 'selected' : ''}"
                    title={theme}
                >
                    <IconCheck />
                </span>
            {/each}
        </div>
        <!-- =========================================================================================== -->
        <div
            id="Hue"
            class="ControlLabel CustomTheme ControlLabelItem
          {$settings.theme.startsWith('custom') ? 'show' : ''}"
        >
            {$getLocaleString('THEME_HUE')}
            <input
                id="CustomThemeHue"
                type="color"
                value={$settings.customTheme}
                class="colorpicker CustomTheme"
            />
        </div>
        <!-- =========================================================================================== -->
        <div
            id="Shade"
            class="ControlLabel CustomTheme ControlLabelItem
          {$settings.theme.startsWith('custom') ? '' : 'show'}"
        >
            <span>
                {$getLocaleString('THEME_SHADE')}
                <output id="themeShadeVal" class="RangeValue" for="themeShade"
                    >{$settings.themeShade}</output
                >
            </span>
            <input
                type="range"
                bind:value={$settings.themeShade}
                name="ThemeShade"
                id="ThemeShade"
                min="100"
                max="900"
                step="100"
            />
        </div>
    </div>
    <!-- =========================================================================================== -->
    <div class="ControlLabel loadMode">
        {$getLocaleString('DEFAULT_LOAD_MODE')}
        <select id="loadMode">
            <option value="wait" selected={$settings.loadMode === 'wait'}>
                {$getLocaleString('LOAD_MODE_NORMAL')}
            </option>
            <option value="always" selected={$settings.loadMode === 'always'}>
                {$getLocaleString('LOAD_MODE_ALWAYS')}
            </option>
            <option value="never" selected={$settings.loadMode === 'never'}>
                {$getLocaleString('LOAD_MODE_NEVER')}
            </option>
        </select>
    </div>
    <!-- =========================================================================================== -->
    <div class="ControlLabel PagesPerSecond">
        {$getLocaleString('LOAD_SPEED')}
        <select id="PagesPerSecond">
            <option value="3000" selected={$settings.throttlePageLoad === 3000}>
                0.3({$getLocaleString('SLOWLY')})
            </option>
            <option value="2000" selected={$settings.throttlePageLoad === 2000}> 0.5</option>
            <option value="1000" selected={$settings.throttlePageLoad === 1000}>
                01({$getLocaleString('NORMAL')})
            </option>
            <option value="500" selected={$settings.throttlePageLoad === 500}> 02</option>
            <option value="250" selected={$settings.throttlePageLoad === 250}>
                04({$getLocaleString('FAST')})
            </option>
            <option value="125" selected={$settings.throttlePageLoad === 125}> 08</option>
            <option value="100" selected={$settings.throttlePageLoad === 100}>
                10({$getLocaleString('EXTREME')})
            </option>
            <option value="1" selected={$settings.throttlePageLoad === 1}>
                {$getLocaleString('ALL_PAGES')}
            </option>
        </select>
    </div>
    <!-- =========================================================================================== -->
    <div class="ControlLabel DefaultZoomMode">
        {$getLocaleString('DEFAULT_ZOOM_MODE')}
        <select id="DefaultZoomMode">
            <option value="percent" selected={$settings.zoomMode === 'percent'}>
                {$getLocaleString('PERCENT')}
            </option>
            <option value="width" selected={$settings.zoomMode === 'width'}>
                {$getLocaleString('FIT_WIDTH')}
            </option>
            <option value="height" selected={$settings.zoomMode === 'height'}>
                {$getLocaleString('FIT_HEIGHT')}
            </option>
        </select>
    </div>
    <!-- =========================================================================================== -->
    <div
        class="ControlLabel DefaultZoom ControlLabelItem
        {$settings.zoomMode === 'percent' ? 'show' : ''}"
    >
        <span>
            {$getLocaleString('DEFAULT_ZOOM')}
            <output id="defaultZoomVal" class="RangeValue" for="DefaultZoom">
                {$settings.defaultZoom}%
            </output>
        </span>
        <input
            type="range"
            bind:value={$settings.defaultZoom}
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
    <!-- =========================================================================================== -->
    <div class="ControlLabel minZoom">
        <span>
            {$getLocaleString('MINIMUM_ZOOM')}
            <output id="minZoomVal" class="RangeValue" for="minZoom">{$settings.minZoom}%</output>
        </span>
        <input
            type="range"
            bind:value={$settings.minZoom}
            name="minZoom"
            id="minZoom"
            min="30"
            max="100"
            step="10"
        />
    </div>
    <!-- =========================================================================================== -->
    <div class="ControlLabel zoomStep">
        <span>
            {$getLocaleString('ZOOM_STEP')}
            <output id="zoomStepVal" class="RangeValue" for="zoomStep">{$settings.zoomStep}%</output
            >
        </span>
        <input
            type="range"
            bind:value={$settings.zoomStep}
            name="zoomStep"
            id="zoomStep"
            min="5"
            max="50"
            step="5"
        />
    </div>
    <!-- =========================================================================================== -->
    <div class="ControlLabel viewMode">
        {$getLocaleString('DEFAULT_VIEW_MODE')}
        <select id="viewMode">
            <option value="Vertical" selected={$settings.viewMode === 'Vertical'}>
                {$getLocaleString('VIEW_MODE_VERTICAL')}
            </option>
            <option value="WebComic" selected={$settings.viewMode === 'WebComic'}>
                {$getLocaleString('VIEW_MODE_WEBCOMIC')}
            </option>
            <option value="FluidLTR" selected={$settings.viewMode === 'FluidLTR'}>
                {$getLocaleString('VIEW_MODE_LEFT')}
            </option>
            <option value="FluidRTL" selected={$settings.viewMode === 'FluidRTL'}>
                {$getLocaleString('VIEW_MODE_RIGHT')}
            </option>
        </select>
    </div>
    <!-- =========================================================================================== -->
    <div class="ControlLabel fitIfOversize">
        {$getLocaleString('FIT_WIDTH_OVERSIZED')}
        <input
            type="checkbox"
            value="true"
            name="fitIfOversize"
            id="fitIfOversize"
            checked={$settings.fitWidthIfOversize}
        />
    </div>
    <!-- =========================================================================================== -->
    <div class="ControlLabel showThumbnails">
        {$getLocaleString('SHOW_THUMBNAILS')}
        <input
            type="checkbox"
            value="true"
            name="showThumbnails"
            id="showThumbnails"
            checked={$settings.showThumbnails}
        />
    </div>
    <!-- =========================================================================================== -->
    <div class="ControlLabel lazyLoadImages">
        {$getLocaleString('LAZY_LOAD_IMAGES_ENABLE')}
        <input
            type="checkbox"
            value="true"
            name="lazyLoadImages"
            id="lazyLoadImages"
            checked={$settings.lazyLoadImages}
        />
    </div>
    <!-- =========================================================================================== -->
    <div
        class="ControlLabel lazyStart ControlLabelItem
        {$settings.lazyLoadImages ? 'show' : ''}
    "
    >
        <span>
            {$getLocaleString('LAZY_LOAD_IMAGES')}
            <output id="lazyStartVal" for="lazyStart">{$settings.lazyStart}</output>
        </span>
        <input
            type="range"
            bind:value={$settings.lazyStart}
            name="lazyStart"
            id="lazyStart"
            min="5"
            max="100"
            step="5"
        />
    </div>
    <!-- =========================================================================================== -->
    <div class="ControlLabel downloadZip">
        {$getLocaleString('DOWNLOAD_IMAGES')}
        <input
            type="checkbox"
            value="false"
            name="downloadZip"
            id="downloadZip"
            checked={$settings.downloadZip}
        />
    </div>
    <!-- =========================================================================================== -->
    <div class="ControlLabel hidePageControls">
        {$getLocaleString('HIDE_CONTROLS')}
        <input
            type="checkbox"
            value="false"
            name="hidePageControls"
            id="hidePageControls"
            checked={$settings.hidePageControls}
        />
    </div>
    <!-- =========================================================================================== -->
    <div class="ControlLabel headerType">
        {$getLocaleString('HEADER_TYPE')}
        <select id="headerType">
            <option value="hover" selected={$settings.header === 'hover'}>
                {$getLocaleString('HEADER_HOVER')}
            </option>
            <option value="scroll" selected={$settings.header === 'scroll'}>
                {$getLocaleString('HEADER_SCROLL')}
            </option>
            <option value="click" selected={$settings.header === 'click'}>
                {$getLocaleString('HEADER_CLICK')}
            </option>
            <option value="fixed" selected={$settings.header === 'fixed'}>
                {$getLocaleString('HEADER_FIXED')}
            </option>
        </select>
    </div>
    <!-- =========================================================================================== -->
    <div class="ControlLabel autoScroll">
        <span>
            {$getLocaleString('AUTO_SCROLL_HEIGHT')}
            <output id="scrollHeightVal" for="scrollHeight">
                {$settings.scrollHeight}
            </output>px
        </span>
        <input
            type="range"
            bind:value={$settings.scrollHeight}
            name="scrollHeight"
            id="scrollHeight"
            min="1"
            max="100"
            step="1"
        />
    </div>
</div>

<style>
</style>
