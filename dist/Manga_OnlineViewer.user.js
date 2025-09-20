// ==UserScript==
// @name          Manga OnlineViewer
// @author        Tago
// @updateURL     https://github.com/TagoDR/MangaOnlineViewer/raw/master/dist/Manga_OnlineViewer.meta.js
// @downloadURL   https://github.com/TagoDR/MangaOnlineViewer/raw/master/dist/Manga_OnlineViewer.user.js
// @supportURL    https://github.com/TagoDR/MangaOnlineViewer/issues
// @namespace     https://github.com/TagoDR
// @description   Shows all pages at once in online view for these sites: Asura Scans, Batoto, BilibiliComics, Comick, Dynasty-Scans, Flame Comics, Ikigai Mangas - EltaNews, Ikigai Mangas - Ajaco, KuManga, LeerCapitulo, LHTranslation, Local Files, M440, MangaBuddy, MangaDemon, MangaDex, MangaFox, MangaHere, Mangago, MangaHub, MangaKakalot, NeloManga, MangaNato, NatoManga, MangaBats, MangaOni, MangaPark, MangaReader, MangaToons, ManhwaWeb, MangaGeko.com, MangaGeko.cc, NineAnime, OlympusBiblioteca, ReadComicsOnline, ReaperScans, TuMangaOnline, WebNovel, WebToons, WeebCentral, Vortex Scans, ZeroScans, MangaStream WordPress Plugin, Realm Oasis, Voids-Scans, Luminous Scans, Shimada Scans, Night Scans, Manhwa-Freak, OzulScansEn, CypherScans, MangaGalaxy, LuaScans, Drake Scans, Rizzfables, NovatoScans, TresDaos, Lectormiau, NTRGod, Threedaos, FoOlSlide, Kireicake, Madara WordPress Plugin, MangaHaus, Isekai Scan, Comic Kiba, Zinmanga, mangatx, Toonily, Mngazuki, JaiminisBox, DisasterScans, ManhuaPlus, TopManhua, NovelMic, Reset-Scans, LeviatanScans, Dragon Tea, SetsuScans, ToonGod
// @version       2025.09.20
// @license       MIT
// @icon          https://cdn-icons-png.flaticon.com/32/2281/2281832.png
// @run-at        document-end
// @grant         unsafeWindow
// @grant         GM_getValue
// @grant         GM_setValue
// @grant         GM_listValues
// @grant         GM_deleteValue
// @grant         GM_xmlhttpRequest
// @grant         GM_addValueChangeListener
// @noframes      on
// @connect       *
// @require       https://cdn.jsdelivr.net/npm/colorjs.io@0.5.2/dist/color.global.min.js
// @require       https://cdnjs.cloudflare.com/ajax/libs/jszip/3.9.1/jszip.min.js
// @require       https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.js
// @require       https://cdn.jsdelivr.net/npm/sweetalert2-neutral@11.22.2-neutral/dist/sweetalert2.all.min.js
// @require       https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js
// @require       https://cdn.jsdelivr.net/npm/hotkeys-js@3.13.15/dist/hotkeys.min.js
// @require       https://cdn.jsdelivr.net/npm/range-slider-input@2.4.4/dist/rangeslider.nostyle.umd.min.js
// @require       https://cdnjs.cloudflare.com/ajax/libs/bowser/2.12.1/bundled.js
// @require       https://cdnjs.cloudflare.com/ajax/libs/blob-util/2.0.2/blob-util.min.js
// @include       /https?:\/\/(www.)?(asuracomic).(net)\/.+/
// @include       /https?:\/\/(?:www\.)?(?:fto|jto|hto|dto|mto|wto|bato|battwo|batotwo|comiko|batocomic|readtoto|zbato|xbato|mangatoto)\.(?:to|com|net|org)\/(chapter|title).*/
// @include       /https?:\/\/(www\.)?(bilibilicomics).net\/episode\/.+/
// @include       /https?:\/\/(www\.)?comick.io\/.+/
// @include       /https?:\/\/(www\.)?dynasty-scans.com\/chapters\/.+/
// @include       /https?:\/\/(www.)?(flamecomics).(xyz)\/series\/.+/
// @include       /https?:\/\/visorikigai.(ajaco|eltanews).(com|net)\/capitulo\/\d+/
// @include       /https?:\/\/(www\.)?kumanga.com\/manga\/leer\/.+/
// @include       /https?:\/\/(www.)?leercapitulo.co\/leer\/.+/
// @include       /https?:\/\/(www\.)?lhtranslation.net\/read.+/
// @include       /(file:\/\/\/.+(index)?.html)/
// @include       /https?:\/\/(www\.)?m440.in\/manga\/.+\/.+\/\d+/
// @include       /https?:\/\/(www\.)?mangabuddy.com\/.+\/chapter.+/
// @include       /https?:\/\/(www\.)?demonicscans\.org\/title\/.+\/chapter\/.+/
// @include       /https?:\/\/(www\.)?mangadex.org/
// @include       /https?:\/\/(www\.)?(fanfox.net|mangahere.cc)\/manga\/.+\/.+\//
// @include       /https?:\/\/(www\.)?mangago.me\/.*\/.*\/.*/
// @include       /https?:\/\/(www\.)?(mangahub).io\/chapter\/.+\/.+/
// @include       /https?:\/\/(www\.)?(read|chap)?(nelomanga|mangakakalot|natomanga|manganato|mangabats|mangakakalove).(com|gg|net).*\/(chapter|manga)\/.+\/.+/
// @include       /https?:\/\/(www\.)?manga-oni.com\/lector\/.+\/\d+\/cascada/
// @include       /https?:\/\/(www\.)?(mangapark|mpark|comicpark|readpark|parkmanga).(com|me|org|net|io|to)\/title\/.+\/.+/
// @include       /https?:\/\/(www\.)?mangareader.to\/read\/.+\/.+\/.+/
// @include       /https?:\/\/.*mangatoon.mobi\/.+\/watch\/.+/
// @include       /https?:\/\/(www\.)?manhwaweb.com\/leer\/.+/
// @include       /https?:\/\/(www\.)?mgeko.(com|cc)?\/reader\/.*/
// @include       /https?:\/\/(www\.)?nineanime.com\/chapter\/.+/
// @include       /https?:\/\/(www\.)?olympusbiblioteca.com\/capitulo\/\d+\/.+/
// @include       /https?:\/\/(www\.)?readcomicsonline.ru\/comic\/.*\/\d*/
// @include       /https?:\/\/(www\.)?reaperscans\.com\/series\/.+\/chapter.+/
// @include       /https?:\/\/(www\.)?(.+).com\/(viewer|news)\/.+\/(paginated|cascade)/
// @include       /https?:\/\/(www\.)?webnovel.com\/comic\/.+/
// @include       /https?:\/\/(www\.)?webtoons.com\/.+viewer.+/
// @include       /https?:\/\/(www\.)?(weebcentral).com\/chapters\/.+/
// @include       /https?:\/\/(www.)?(vortexscans).(org)\/.+/
// @include       /https?:\/\/(www\.)?zscans.com\/comics\/.+/
// @include       /https?:\/\/[^/]*(scans?|comic|realm|rizz|hivetoon|tresdaos|zonamiau|ntrgod|threedaos)[^/]*\/.+/
// @include       /^(?!.*jaiminisbox).*\/read\/.+/
// @include       /https?:\/\/.+\/(manga|series|manhua|comic|ch|novel|webtoon)\/.+\/.+/
// @exclude       /https?:\/\/(www\.)?tsumino.com\/.+/
// @exclude       /https?:\/\/(www\.)?pururin.io\/.+/
// ==/UserScript==
(function () {
  'use strict';

  const rangeSliderStyles =
    '.range-slider{touch-action:none;-webkit-tap-highlight-color:transparent;-webkit-user-select:none;user-select:none;cursor:pointer;display:block;position:relative;width:100%;height:8px;background:#ddd;border-radius:4px}.range-slider[data-vertical]{height:100%;width:8px}.range-slider[data-disabled]{opacity:.5;cursor:not-allowed}.range-slider .range-slider__thumb{position:absolute;z-index:3;top:50%;width:24px;height:24px;transform:translate(-50%,-50%);border-radius:50%;background:#2196f3}.range-slider .range-slider__thumb:focus-visible{outline:0;box-shadow:0 0 0 6px rgba(33,150,243,.5)}.range-slider[data-vertical] .range-slider__thumb{left:50%}.range-slider .range-slider__thumb[data-disabled]{z-index:2}.range-slider .range-slider__range{position:absolute;z-index:1;transform:translate(0,-50%);top:50%;width:100%;height:100%;background:#51adf6}.range-slider[data-vertical] .range-slider__range{left:50%;transform:translate(-50%,0)}.range-slider input[type=range]{-webkit-appearance:none;pointer-events:none;position:absolute;z-index:2;top:0;left:0;width:0;height:0;background-color:transparent}.range-slider input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;appearance:none}.range-slider input[type=range]::-moz-range-thumb{width:0;height:0;border:0}.range-slider input[type=range]:focus{outline:0}';

  const webawesome =
    "@layer wa-native, wa-utilities, wa-color-palette, wa-color-variant, wa-theme, wa-theme-dimension, wa-theme-overrides;\n\n/* Native Styles */\n\n@layer wa-native {\n  /* #region General ~~~~~~~~~~~~~~~~~~~~~~~~~ */\n  html {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n\n    tab-size: 4;\n\n    background-color: var(--wa-color-surface-default);\n  }\n\n  *,\n  *::before,\n  *::after {\n    box-sizing: inherit;\n  }\n\n  body {\n    min-height: 100vh;\n    margin: 0;\n    padding: 0;\n\n    color: var(--wa-color-text-normal);\n    font-family: var(--wa-font-family-body);\n    font-size: var(--wa-font-size-m);\n    font-weight: var(--wa-font-weight-body);\n    line-height: var(--wa-line-height-normal);\n    -moz-osx-font-smoothing: grayscale;\n    -webkit-font-smoothing: antialiased;\n    text-size-adjust: none;\n    -moz-text-size-adjust: none;\n    -webkit-text-size-adjust: none;\n  }\n  /* #endregion */\n\n  /* #region Content Flow ~~~~~~~~~~~~~~~~~~~~ */\n  address,\n  audio,\n  blockquote,\n  dd,\n  details,\n  dl,\n  fieldset,\n  figure,\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6,\n  hr,\n  iframe,\n  ol,\n  p,\n  pre,\n  table,\n  ul,\n  video {\n    margin: 0;\n\n    &:has(+ *) {\n      margin-block-end: var(--wa-content-spacing);\n    }\n  }\n  /* #endregion */\n\n  /* #region Block Text ~~~~~~~~~~~~~~~~~~~~~~ */\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    font-family: var(--wa-font-family-heading);\n    font-weight: var(--wa-font-weight-heading);\n    line-height: var(--wa-line-height-condensed);\n    text-wrap: balance;\n  }\n\n  h1 {\n    font-size: var(--wa-font-size-3xl);\n  }\n\n  h2 {\n    font-size: var(--wa-font-size-2xl);\n  }\n\n  h3 {\n    font-size: var(--wa-font-size-xl);\n  }\n\n  h4 {\n    font-size: var(--wa-font-size-l);\n  }\n\n  h5 {\n    font-size: var(--wa-font-size-m);\n  }\n\n  h6 {\n    font-size: var(--wa-font-size-s);\n  }\n\n  p {\n    text-wrap: pretty;\n  }\n\n  blockquote {\n    padding: var(--wa-space-xl);\n\n    font-family: var(--wa-font-family-longform);\n    font-size: var(--wa-font-size-l);\n\n    border-inline-start: var(--wa-border-style) var(--wa-border-width-l) var(--wa-color-neutral-border-quiet);\n  }\n\n  hr {\n    margin: var(--wa-content-spacing) 0;\n\n    border: none;\n    border-bottom: solid var(--wa-border-width-s) var(--wa-color-surface-border);\n  }\n  /* #endregion */\n\n  /* #region Lists ~~~~~~~~~~~~~~~~~~~~~~~~~~~ */\n  ul,\n  ol {\n    padding: 0;\n  }\n\n  li > ul,\n  li > ol {\n    margin-inline-start: 0.25em;\n  }\n\n  ul {\n    list-style: disc;\n  }\n\n  li {\n    margin-inline-start: 1.125em;\n    padding: 0;\n  }\n\n  dt {\n    font-weight: var(--wa-font-weight-bold);\n  }\n  /* #endregion */\n\n  /* #region Inline Text ~~~~~~~~~~~~~~~~~~~~~ */\n  strong,\n  b {\n    font-weight: var(--wa-font-weight-bold);\n  }\n\n  em,\n  i {\n    font-style: italic;\n  }\n\n  u {\n    text-decoration-line: underline;\n    text-decoration-thickness: 0.09375em;\n    text-underline-offset: 0.125em;\n  }\n\n  s {\n    text-decoration-line: line-through;\n    text-decoration-thickness: 0.09375em;\n  }\n\n  ins {\n    text-decoration-color: var(--wa-color-success-on-quiet);\n    text-decoration-line: underline;\n    text-decoration-thickness: 0.09375em;\n    text-underline-offset: 0.125em;\n  }\n\n  del {\n    color: color-mix(in oklab, currentColor, transparent 10%);\n    text-decoration-color: var(--wa-color-danger-on-quiet);\n    text-decoration-line: line-through;\n    text-decoration-thickness: 0.09375em;\n  }\n\n  mark {\n    padding: 0.125em 0.25em;\n\n    color: var(--wa-color-warning-on-quiet);\n\n    background-color: var(--wa-color-warning-fill-quiet);\n    border-radius: var(--wa-border-radius-s);\n  }\n\n  small {\n    font-size: var(--wa-font-size-smaller);\n  }\n\n  sub,\n  sup {\n    font-size: var(--wa-font-size-smaller);\n    line-height: 0;\n  }\n\n  sub {\n    vertical-align: sub;\n  }\n\n  sup {\n    vertical-align: super;\n  }\n\n  abbr[title] {\n    text-decoration-line: underline;\n    text-decoration-style: dotted;\n    text-decoration-thickness: 0.09375em;\n    text-underline-offset: 0.125em;\n\n    cursor: help;\n  }\n\n  kbd {\n    padding: 0.125em 0.25em;\n\n    font-family: var(--wa-font-family-code);\n    font-size: var(--wa-font-size-smaller);\n\n    border: solid var(--wa-border-width-s) color-mix(in oklab, currentColor, transparent 50%);\n    border-radius: var(--wa-border-radius-s);\n    box-shadow: 0 0.125em 0 0 color-mix(in oklab, currentColor, transparent 50%);\n\n    wa-icon {\n      vertical-align: -2px;\n    }\n  }\n  /* #endregion */\n\n  /* #region Links ~~~~~~~~~~~~~~~~~~~~~~~~~~~ */\n  a {\n    color: var(--wa-color-text-link);\n    text-decoration: var(--wa-link-decoration-default);\n    -webkit-text-decoration: var(--wa-link-decoration-default);\n    text-decoration-thickness: 0.09375em;\n    text-underline-offset: 0.125em;\n  }\n\n  *:is([appearance~='accent'], .wa-accent) {\n    a,\n    a:hover {\n      color: currentColor;\n    }\n  }\n\n  a:hover {\n    color: color-mix(in oklab, var(--wa-color-text-link), var(--wa-color-mix-hover));\n    text-decoration: var(--wa-link-decoration-hover);\n    -webkit-text-decoration: var(--wa-link-decoration-hover);\n  }\n\n  a:focus,\n  button:focus {\n    outline: none;\n  }\n\n  a:focus-visible,\n  button:focus-visible {\n    outline: var(--wa-focus-ring);\n    outline-offset: var(--wa-focus-ring-offset);\n  }\n  /* #endregion */\n\n  /* #region Code ~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */\n  code,\n  samp,\n  var {\n    padding: 0.125em 0.25em;\n\n    font-family: var(--wa-font-family-code);\n    font-size: var(--wa-font-size-smaller);\n\n    background-color: var(--wa-color-overlay-inline);\n    border-radius: var(--wa-border-radius-s);\n  }\n\n  pre {\n    padding: var(--wa-space-m);\n\n    font-family: var(--wa-font-family-code);\n    font-size: var(--wa-font-size-smaller);\n    white-space: pre;\n\n    background-color: var(--wa-color-overlay-inline);\n    border-radius: var(--wa-border-radius-m);\n\n    /* Remove overlapping styles for child code elements */\n    & code,\n    & samp,\n    & var {\n      padding: 0;\n\n      font-size: 1em;\n\n      background-color: transparent;\n    }\n\n    /* Print styles */\n    @media print {\n      background: none;\n      border: solid var(--wa-border-width-s) var(--wa-color-surface-border);\n    }\n  }\n  /* #endregion */\n\n  /* #region Media ~~~~~~~~~~~~~~~~~~~~~~~~~~~ */\n  img,\n  svg,\n  picture,\n  video {\n    max-width: 100%;\n    height: auto;\n\n    border-radius: var(--wa-border-radius-m);\n  }\n\n  embed,\n  iframe,\n  object {\n    max-width: 100%;\n  }\n\n  iframe {\n    border: none;\n  }\n  /* #endregion */\n\n  /* #region Tables ~~~~~~~~~~~~~~~~~~~~~~~~~~ */\n  table {\n    width: 100%;\n\n    border: none;\n    border-collapse: collapse;\n  }\n\n  caption {\n    color: var(--wa-color-text-quiet);\n    font-size: var(--wa-font-size-smaller);\n\n    &:has(+ *) {\n      margin-block-end: 0.75em;\n    }\n  }\n\n  tbody {\n    tr {\n      border-top: solid var(--wa-border-width-s) var(--wa-color-border-quiet);\n\n      :where(table.wa-zebra-rows) &:nth-child(odd) {\n        background-color: color-mix(in oklab, var(--wa-color-fill-quiet) 60%, transparent);\n      }\n\n      :where(table.wa-hover-rows) & {\n        @media (hover: hover) {\n          &:hover {\n            background-color: var(--wa-color-fill-quiet);\n\n            &,\n            + tr {\n              border-top-color: var(--wa-color-border-normal);\n            }\n          }\n        }\n      }\n    }\n  }\n\n  td,\n  th {\n    padding: 0.75em;\n\n    text-align: start;\n    vertical-align: top;\n  }\n\n  th {\n    padding-block: 0.75em;\n\n    font-size: var(--wa-font-size-smaller);\n    font-weight: var(--wa-font-weight-bold);\n  }\n  /* #endregion */\n\n  /* #region Details ~~~~~~~~~~~~~~~~~~~~~~~~~ */\n  details {\n    padding: 0;\n\n    background-color: var(--wa-color-surface-default);\n    border: var(--wa-panel-border-width) var(--wa-color-surface-border) var(--wa-panel-border-style);\n    border-radius: var(--wa-panel-border-radius);\n\n    overflow-anchor: none;\n\n    summary {\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n\n      padding: var(--wa-space-m);\n\n      cursor: pointer;\n      user-select: none;\n      -webkit-user-select: none;\n\n      > * {\n        margin: 0;\n      }\n\n      &:focus {\n        outline: none;\n      }\n\n      &:focus-visible {\n        outline: var(--wa-focus-ring);\n        outline-offset: var(--wa-focus-ring-offset);\n      }\n    }\n\n    &[open] {\n      padding: 0 var(--wa-space-m) var(--wa-space-m) var(--wa-space-m);\n\n      summary {\n        margin-inline: calc(-1 * var(--wa-space-m));\n      }\n    }\n\n    /* Print styles */\n    @media print {\n      background: none;\n      border: solid var(--wa-border-width-s) var(--wa-color-surface-border);\n\n      summary {\n        list-style: none;\n      }\n    }\n  }\n\n  /* Replace the summary marker */\n  details summary {\n    &::marker,\n    &::-webkit-details-marker {\n      display: none;\n    }\n\n    &::after {\n      content: '';\n      background-color: var(--wa-color-text-quiet);\n      mask: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"16\" width=\"10\" viewBox=\"0 0 320 512\"><!--! Font Awesome Pro 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2025 Fonticons, Inc. --><path fill=\"currentColor\" d=\"M311.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L243.2 256 73.9 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z\"/></svg>')\n        center no-repeat;\n      width: 1rem;\n      height: 1rem;\n      rotate: 0deg;\n    }\n\n    &:dir(rtl)::after {\n      rotate: 180deg;\n    }\n  }\n\n  details[open] summary::after {\n    rotate: 90deg;\n  }\n  /* #endregion */\n\n  /* #region Dialogs ~~~~~~~~~~~~~~~~~~~~~~~~~ */\n  dialog {\n    flex-direction: column;\n    align-items: start;\n\n    width: 32rem;\n    max-width: calc(100% - var(--wa-space-l));\n    padding: var(--wa-space-l);\n\n    background-color: var(--wa-color-surface-raised);\n    border-radius: var(--wa-panel-border-radius);\n    border: none;\n    box-shadow: var(--wa-shadow-l);\n\n    transition: var(--wa-transition-slow, 200ms) var(--wa-transition-easing);\n\n    /* Center the dialog */\n    margin: auto;\n    inset: 0;\n\n    &[open] {\n      display: flex;\n    }\n\n    &:focus {\n      outline: none;\n    }\n  }\n\n  dialog::backdrop {\n    background-color: var(--wa-color-overlay-modal, rgb(0 0 0 / 0.25));\n  }\n  /* #endregion */\n\n  /* #region Form Labels ~~~~~~~~~~~~~~~~~~~~~ */\n  label {\n    display: inline-block;\n    position: relative;\n\n    color: var(--wa-form-control-label-color);\n    font-weight: var(--wa-form-control-label-font-weight);\n    line-height: var(--wa-form-control-label-line-height);\n\n    &:has(\n        input:not(\n            [type='button'],\n            [type='checkbox'],\n            [type='color'],\n            [type='file'],\n            [type='hidden'],\n            [type='image'],\n            [type='radio'],\n            [type='reset'],\n            [type='submit']\n          ),\n        textarea,\n        select\n      ) {\n      width: 100%;\n    }\n\n    & + :is(input:not([type='checkbox'], [type='radio']), textarea, select),\n    & > :is(input:not([type='checkbox'], [type='radio']), textarea, select) {\n      margin-block-start: 0.5em;\n    }\n  }\n  /* #endregion */\n\n  /* #region Fieldsets ~~~~~~~~~~~~~~~~~~~~~~~ */\n  fieldset {\n    padding: var(--wa-space-l);\n    padding-block-start: calc(var(--wa-space-l) - 0.5em);\n\n    border: solid 1px var(--wa-color-surface-border);\n    border-radius: var(--wa-border-radius-m);\n  }\n\n  legend {\n    padding: 0;\n    padding-inline: var(--wa-space-xs);\n\n    font-weight: var(--wa-form-control-label-font-weight);\n  }\n  /* #endregion */\n\n  /* #region Buttons ~~~~~~~~~~~~~~~~~~~~~~~~~ */\n  button,\n  input[type='button'],\n  input[type='reset'],\n  input[type='submit'],\n  input[type='file'] {\n    /* We allow modifier classes on <input type=\"file\">,\n     * but these selectors ensure the styles only apply to\n     * the file selector button in the user agent's shadow root */\n    &:not(input[type='file']),\n    &::file-selector-button {\n      display: inline-flex;\n      align-items: center;\n      justify-content: center;\n\n      height: var(--wa-form-control-height);\n      padding: 0 var(--wa-form-control-padding-inline);\n\n      font-family: inherit;\n      font-size: var(--wa-form-control-value-font-size);\n      font-weight: var(--wa-font-weight-action);\n      line-height: calc(var(--wa-form-control-height) - var(--border-width) * 2);\n      text-decoration: none;\n      vertical-align: middle;\n      white-space: nowrap;\n\n      border-style: var(--wa-border-style);\n      border-width: max(1px, var(--wa-form-control-border-width));\n      border-radius: var(--wa-form-control-border-radius);\n\n      transition-property: background, border, box-shadow, color;\n      transition-duration: var(--wa-transition-fast);\n      transition-timing-function: var(--wa-transition-easing);\n\n      cursor: pointer;\n      user-select: none;\n      -webkit-user-select: none;\n    }\n\n    /* Default styles for standard buttons */\n    :where(&:not(input[type='file'])) {\n      color: var(--wa-color-on-loud, var(--wa-color-neutral-on-loud));\n      background-color: var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud));\n      border-color: transparent;\n\n      &:not(:disabled) {\n        &:hover {\n          background-color: color-mix(\n            in oklab,\n            var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud)),\n            var(--wa-color-mix-hover)\n          );\n        }\n\n        &:active {\n          background-color: color-mix(\n            in oklab,\n            var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud)),\n            var(--wa-color-mix-active)\n          );\n        }\n      }\n    }\n\n    /* Default styles for file selector buttons */\n    :where(&:is(input[type='file'])) {\n      &::file-selector-button {\n        color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));\n        background-color: var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal));\n        border-color: transparent;\n      }\n\n      &:not(:disabled) {\n        &::file-selector-button:hover {\n          background-color: color-mix(\n            in oklab,\n            var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal)),\n            var(--wa-color-mix-hover)\n          );\n        }\n\n        &::file-selector-button:active {\n          background-color: color-mix(\n            in oklab,\n            var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal)),\n            var(--wa-color-mix-active)\n          );\n        }\n      }\n    }\n\n    /* Modifier classes */\n    &.wa-plain {\n      &:not(input[type='file']),\n      &::file-selector-button {\n        color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));\n        background-color: transparent;\n        border-color: transparent;\n      }\n\n      &:not(:disabled) {\n        &:not(input[type='file']):hover,\n        &::file-selector-button:hover {\n          color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));\n          background-color: var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet));\n        }\n\n        &:not(input[type='file']):active,\n        &::file-selector-button:active {\n          color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));\n          background-color: color-mix(\n            in oklab,\n            var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)),\n            var(--wa-color-mix-active)\n          );\n        }\n      }\n    }\n\n    &.wa-outlined {\n      &:not(input[type='file']),\n      &::file-selector-button {\n        color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));\n        background-color: transparent;\n        border-color: var(--wa-color-border-loud, var(--wa-color-neutral-border-loud));\n      }\n\n      &:not(:disabled) {\n        &:not(input[type='file']):hover,\n        &::file-selector-button:hover {\n          color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));\n          background-color: var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet));\n        }\n\n        &:not(input[type='file']):active,\n        &::file-selector-button:active {\n          color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));\n          background-color: color-mix(\n            in oklab,\n            var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)),\n            var(--wa-color-mix-active)\n          );\n        }\n      }\n    }\n\n    &.wa-filled {\n      &:not(input[type='file']),\n      &::file-selector-button {\n        color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));\n        background-color: var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal));\n        border-color: transparent;\n      }\n\n      &:not(:disabled) {\n        &:not(input[type='file']):hover,\n        &::file-selector-button:hover {\n          color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));\n          background-color: color-mix(\n            in oklab,\n            var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal)),\n            var(--wa-color-mix-hover)\n          );\n        }\n\n        &:not(input[type='file']):active,\n        &::file-selector-button:active {\n          color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));\n          background-color: color-mix(\n            in oklab,\n            var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal)),\n            var(--wa-color-mix-active)\n          );\n        }\n      }\n\n      &.wa-outlined {\n        &:not(input[type='file']),\n        &::file-selector-button {\n          border-color: var(--wa-color-border-normal, var(--wa-color-neutral-border-normal));\n        }\n      }\n    }\n\n    &.wa-accent {\n      &:not(input[type='file']),\n      &::file-selector-button {\n        color: var(--wa-color-on-loud, var(--wa-color-neutral-on-loud));\n        background-color: var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud));\n        border-color: transparent;\n      }\n\n      &:not(:disabled) {\n        &:not(input[type='file']):hover,\n        &::file-selector-button:hover {\n          background-color: color-mix(\n            in oklab,\n            var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud)),\n            var(--wa-color-mix-hover)\n          );\n        }\n\n        &:not(input[type='file']):active,\n        &::file-selector-button:active {\n          background-color: color-mix(\n            in oklab,\n            var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud)),\n            var(--wa-color-mix-active)\n          );\n        }\n      }\n    }\n\n    &.wa-pill {\n      &:not(input[type='file']),\n      &::file-selector-button {\n        border-radius: var(--wa-border-radius-pill);\n      }\n    }\n\n    &:focus {\n      outline: none;\n    }\n\n    &:focus-visible {\n      outline: var(--wa-focus-ring);\n      outline-offset: var(--wa-focus-ring-offset);\n    }\n\n    /* Wrap in :is() so that Safari doesn't stop parsing this block */\n    &:is(::-moz-focus-inner) {\n      border: 0;\n    }\n\n    &:disabled {\n      opacity: 0.5;\n      cursor: not-allowed;\n\n      /* When disabled, prevent mouse events from bubbling up from children */\n      * {\n        pointer-events: none;\n      }\n    }\n\n    /* Adds space between icons and adjacent elements\n     * Prefer sibling selectors over :first-child/:last-child to avoid extra space when an icon is used alone */\n    & > wa-icon:has(+ *) {\n      margin-inline-end: 0.75em;\n    }\n\n    & > * + wa-icon {\n      margin-inline-start: 0.75em;\n    }\n  }\n  /* #endregion */\n\n  /* #region File Inputs ~~~~~~~~~~~~~~~~~~~~~ */\n  input[type='file'] {\n    display: block;\n\n    max-inline-size: 100%;\n\n    color: var(--wa-form-control-value-color);\n    font-family: inherit;\n    font-size: var(--wa-form-control-value-font-size);\n    font-weight: var(--wa-form-control-value-font-weight);\n    line-height: var(--wa-form-control-value-line-height);\n    vertical-align: middle;\n\n    border-radius: var(--wa-border-radius-m);\n\n    cursor: pointer;\n  }\n  /* #endregion */\n\n  /* #region Checkboxes + Radios ~~~~~~~~~~~~~ */\n  input[type='checkbox'],\n  label:has(input[type='checkbox']),\n  input[type='radio'],\n  label:has(input[type='radio']) {\n    display: inline-flex;\n\n    width: fit-content;\n\n    color: var(--wa-form-control-value-color);\n    font-family: inherit;\n    font-size: var(--wa-form-control-value-font-size);\n    font-weight: var(--wa-form-control-value-font-weight);\n    line-height: var(--wa-form-control-value-line-height);\n\n    user-select: none;\n    -webkit-user-select: none;\n\n    &,\n    + label {\n      cursor: pointer;\n    }\n\n    &:disabled,\n    &:has(:disabled) {\n      opacity: 0.5;\n\n      cursor: not-allowed;\n    }\n  }\n\n  input[type='checkbox'],\n  input[type='radio'] {\n    appearance: none;\n\n    position: relative;\n    flex: 0 0 auto;\n    align-items: center;\n    justify-content: center;\n\n    width: var(--wa-form-control-toggle-size);\n    height: var(--wa-form-control-toggle-size);\n    margin: 0;\n    margin-inline-end: 0.5em;\n\n    background-color: var(--wa-form-control-background-color);\n    border-color: var(--wa-form-control-border-color);\n    border-style: var(--wa-border-style);\n    border-width: var(--wa-form-control-border-width);\n\n    transition:\n      background var(--wa-transition-normal),\n      border-color var(--wa-transition-fast),\n      box-shadow var(--wa-transition-fast),\n      color var(--wa-transition-fast);\n    transition-timing-function: var(--wa-transition-easing);\n\n    &:focus-visible {\n      outline: var(--wa-focus-ring);\n      outline-offset: var(--wa-focus-ring-offset);\n    }\n  }\n\n  /* Checkbox */\n  input[type='checkbox'] {\n    --checked-icon-color: var(--wa-color-brand-on-loud);\n    --checked-icon-scale: 0.8;\n\n    border-radius: min(\n      calc(var(--wa-form-control-toggle-size) * 0.375),\n      var(--wa-border-radius-s)\n    ); /* min prevents entirely circular checkbox */\n\n    &:checked,\n    &:indeterminate {\n      color: var(--checked-icon-color);\n\n      background-color: var(--wa-form-control-activated-color);\n      border-color: var(--wa-form-control-activated-color);\n    }\n\n    &:checked::after,\n    &:indeterminate::after {\n      position: absolute;\n\n      width: round(calc(100% - var(--wa-form-control-border-width) * 2), 1px);\n      height: round(calc(100% - var(--wa-form-control-border-width) * 2), 1px);\n\n      content: '';\n\n      background-color: currentColor;\n\n      scale: var(--checked-icon-scale);\n    }\n\n    &:checked::after {\n      mask: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"><!--! Font Awesome Pro 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2025 Fonticons, Inc. --><path fill=\"currentColor\" d=\"M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z\"/></svg>')\n        center no-repeat;\n    }\n\n    &:indeterminate::after {\n      mask: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"16\" width=\"14\" viewBox=\"0 0 448 512\"><path d=\"M431 256c0 17.7-14.3 32-32 32H49c-17.7 0-32-14.3-32-32s14.3-32 32-32h350c17.7 0 32 14.3 32 32z\"/></svg>')\n        center no-repeat;\n    }\n  }\n\n  /* Radio */\n  input[type='radio'] {\n    --checked-icon-color: var(--wa-form-control-activated-color);\n    --checked-icon-scale: 0.7;\n\n    color: transparent;\n\n    border-radius: 50%;\n\n    &:checked {\n      color: var(--checked-icon-color);\n\n      border-color: var(--wa-form-control-activated-color);\n    }\n\n    &:checked::after {\n      content: '';\n\n      aspect-ratio: 1;\n      width: round(calc(100% * var(--checked-icon-scale)), 1px);\n\n      background-color: currentColor;\n      border-radius: 50%;\n    }\n  }\n  /* #endregion */\n\n  /* #region Text Fields + Textareas + Selects */\n  input:not(\n    /* Exclude inputs that don't accept text */\n    [type='button'],\n    [type='checkbox'],\n    [type='color'],\n    [type='file'],\n    [type='hidden'],\n    [type='image'],\n    [type='radio'],\n    [type='range'],\n    [type='reset'],\n    [type='submit']\n  ), textarea, select {\n    width: 100%;\n    height: var(--wa-form-control-height);\n    padding: 0 var(--wa-form-control-padding-inline);\n\n    color: var(--wa-form-control-value-color);\n    font-size: var(--wa-form-control-value-size);\n    font-family: inherit;\n    font-weight: var(--wa-form-control-value-font-weight);\n    line-height: var(--wa-form-control-value-line-height);\n    vertical-align: middle;\n\n    background-color: var(--wa-form-control-background-color);\n    border-color: var(--wa-form-control-border-color);\n    border-style: var(--wa-form-control-border-style);\n    border-width: var(--wa-form-control-border-width);\n    border-radius: var(--wa-form-control-border-radius);\n\n    transition:\n      background-color var(--wa-transition-normal),\n      border var(--wa-transition-normal),\n      outline var(--wa-transition-fast);\n    transition-timing-function: var(--wa-transition-easing);\n\n    cursor: text;\n\n    &::placeholder {\n      color: var(--wa-form-control-placeholder-color);\n\n      user-select: none;\n      -webkit-user-select: none;\n    }\n\n    &:focus {\n      outline: none;\n    }\n\n    &:focus-visible {\n      outline: var(--wa-focus-ring);\n      outline-offset: var(--wa-focus-ring-offset);\n    }\n\n    &:disabled {\n      opacity: 0.5;\n\n      cursor: not-allowed;\n    }\n\n    &.wa-outlined {\n      background-color: var(--wa-form-control-background-color);\n      border-color: var(--wa-form-control-border-color);\n    }\n\n    &.wa-filled {\n      background-color: var(--wa-color-neutral-fill-quiet);\n      border-color: var(--wa-color-neutral-fill-quiet);\n\n      &.wa-outlined {\n        border-color: var(--wa-form-control-border-color);\n      }\n    }\n\n    &.wa-pill {\n      border-radius: var(--wa-border-radius-pill);\n    }\n  }\n\n  /* Textarea */\n  textarea {\n    height: auto;\n    min-height: var(--wa-form-control-height);\n    padding: calc(var(--wa-form-control-padding-block) - ((1lh - 1em) / 2)) var(--wa-form-control-padding-inline); /* accounts for the larger line height of textarea content */\n\n    line-height: var(--wa-line-height-normal);\n\n    resize: vertical;\n  }\n\n  /* Select */\n  select {\n    --icon-caret: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"16\" width=\"16\" viewBox=\"0 0 512 512\"><path fill=\"rgb(180 180 200)\" d=\"M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z\"/></svg>');\n\n    --icon-caret: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"16\" width=\"16\" viewBox=\"0 0 448 512\"><!--! Font Awesome Pro 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2025 Fonticons, Inc. --><path fill=\"rgb(180 180 200)\" d=\"M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z\"/></svg>');\n\n    appearance: none;\n\n    position: relative;\n\n    min-width: 0;\n    overflow: hidden;\n\n    background-image: var(--icon-caret), var(--icon-caret);\n    background-repeat: no-repeat;\n    background-position: center right var(--wa-form-control-padding-inline);\n    background-blend-mode: hue, difference;\n\n    cursor: pointer;\n  }\n  /* #endregion */\n\n  /* #region Color Pickers ~~~~~~~~~~~~~~~~~~~ */\n  input[type='color'] {\n    display: block;\n\n    block-size: var(--wa-form-control-height);\n    inline-size: var(--wa-form-control-height);\n    padding: calc(var(--wa-form-control-border-width) * 2);\n\n    font-size: 1em;\n\n    background: transparent;\n    border: var(--wa-form-control-border-width) var(--wa-border-style) var(--wa-form-control-border-color);\n    border-radius: var(--wa-form-control-border-radius);\n\n    cursor: pointer;\n    forced-color-adjust: none;\n\n    &::-webkit-color-swatch-wrapper {\n      padding: 0;\n      border-radius: inherit;\n    }\n\n    &::-webkit-color-swatch {\n      border: none;\n      border-radius: calc(var(--wa-form-control-border-radius) - var(--wa-form-control-border-width) * 3);\n    }\n\n    &::-moz-color-swatch {\n      border: none;\n      border-radius: calc(var(--wa-form-control-border-radius) - var(--wa-form-control-border-width) * 3);\n    }\n\n    &:focus-visible {\n      outline: var(--wa-focus-ring);\n      outline-offset: var(--wa-focus-ring-offset);\n    }\n  }\n  /* #endregion */\n\n  /* #region Sliders ~~~~~~~~~~~~~~~~~~~~~~~~~ */\n  input[type='range'] {\n    --thumb-width: 1.4em;\n    --thumb-height: 1.4em;\n    --track-size: 0.5em;\n\n    -webkit-appearance: none;\n\n    display: flex;\n    flex-direction: column;\n    position: relative;\n\n    width: 100%;\n    height: var(--track-size);\n    margin: 0;\n\n    font-size: inherit;\n    line-height: var(--wa-form-control-height);\n    vertical-align: middle;\n\n    background-color: var(--wa-color-neutral-fill-normal);\n    border-radius: calc(var(--track-size) / 2);\n\n    &::-webkit-slider-runnable-track {\n      width: 100%;\n      height: var(--track-size);\n\n      border: none;\n      border-radius: 999px;\n    }\n\n    &::-webkit-slider-thumb {\n      -webkit-appearance: none;\n\n      width: var(--thumb-width);\n      height: var(--thumb-height);\n      margin-top: calc(var(--thumb-height) / -2 + var(--track-size) / 2);\n\n      background-color: var(--wa-form-control-activated-color);\n      border: solid 0.125em var(--wa-color-surface-default);\n      border-radius: 50%;\n\n      transition-property: background-color, border-color, box-shadow, color;\n      transition-duration: var(--wa-transition-normal);\n      transition-timing-function: var(--wa-transition-easing);\n    }\n\n    &:enabled {\n      &:focus-visible::-webkit-slider-thumb {\n        outline: var(--wa-focus-ring);\n        outline-offset: var(--wa-focus-ring-offset);\n      }\n\n      &::-webkit-slider-thumb {\n        cursor: pointer;\n      }\n\n      &::-webkit-slider-thumb:active {\n        cursor: grabbing;\n      }\n    }\n\n    &::-moz-focus-outer {\n      border: 0;\n    }\n\n    &::-moz-range-progress {\n      height: var(--track-size);\n\n      background-color: var(--wa-color-neutral-fill-normal);\n      border-radius: 3px;\n    }\n\n    &::-moz-range-track {\n      width: 100%;\n      height: var(--track-size);\n\n      background-color: var(--wa-color-neutral-fill-normal);\n      border: none;\n      border-radius: 999px;\n    }\n\n    &::-moz-range-thumb {\n      width: var(--thumb-width);\n      height: var(--thumb-height);\n\n      background-color: var(--wa-form-control-activated-color);\n      border: solid 0.125em var(--wa-color-surface-default);\n      border-radius: 50%;\n\n      transition-property: background-color, border-color, box-shadow, color;\n      transition-duration: var(--wa-transition-normal);\n      transition-timing-function: var(--wa-transition-easing);\n    }\n\n    &:enabled {\n      &:focus-visible::-moz-range-thumb {\n        outline: var(--wa-focus-ring);\n        outline-offset: var(--wa-focus-ring-offset);\n      }\n\n      &::-moz-range-thumb {\n        cursor: pointer;\n      }\n\n      &::-moz-range-thumb:active {\n        cursor: grabbing;\n      }\n    }\n  }\n\n  label > input[type='range'] {\n    margin-block-start: 1em;\n  }\n\n  input[type='range']:focus {\n    outline: none;\n  }\n\n  input[type='range']:disabled {\n    opacity: 0.5;\n\n    cursor: not-allowed;\n\n    &::-webkit-slider-thumb {\n      cursor: not-allowed;\n    }\n\n    &::-moz-range-thumb {\n      cursor: not-allowed;\n    }\n  }\n  /* #endregion */\n\n  /* #region Progress ~~~~~~~~~~~~~~~~~~~~~~~~ */\n  progress {\n    --indicator-color: var(--wa-color-brand-fill-loud);\n\n    width: 100%;\n    height: 1rem;\n    overflow: hidden;\n\n    color: var(--wa-color-brand-on-loud);\n\n    background-color: var(--wa-color-neutral-fill-normal);\n    border-radius: var(--wa-border-radius-pill);\n\n    &::-webkit-progress-bar {\n      background: transparent;\n    }\n\n    &[value]::-webkit-progress-value {\n      background-color: var(--indicator-color);\n    }\n\n    &::-moz-progress-bar {\n      background-color: var(--indicator-color);\n    }\n  }\n\n  /* Indeterminate */\n  progress:not([value]) {\n    padding-left: var(--inset-inline-start);\n\n    animation: wa-progress-indeterminate 2.5s infinite cubic-bezier(0.37, 0, 0.63, 1);\n\n    &::-webkit-progress-bar {\n      background-color: var(\n        --indicator-color\n      ); /* Chrome does not render a ::-webkit-progress-value for indeterminate progress */\n    }\n  }\n\n  @keyframes wa-fade-in {\n    from {\n      opacity: 0;\n    }\n  }\n\n  /* For some reason Chrome fiercely resists animations on this pseudo\n\t  so we had to do it with padding on <progress> */\n  @keyframes wa-progress-indeterminate {\n    0% {\n      padding-inline-end: 100%;\n    }\n\n    25%,\n    100% {\n      padding-inline-end: 0%;\n    }\n\n    75%,\n    100% {\n      padding-inline-start: 100%;\n    }\n  }\n  /* #endregion */\n\n  /* #region Validation ~~~~~~~~~~~~~~~~~~~~~~ */\n  .wa-invalid {\n    --wa-form-control-border-color: var(--wa-color-danger-border-loud);\n    --wa-form-control-activated-color: var(--wa-color-danger-fill-loud);\n    --wa-form-control-value-color: var(--wa-color-danger-on-quiet);\n\n    /* Focus ring */\n    --wa-color-focus: var(--wa-color-danger-border-loud);\n\n    /* Help text */\n    --wa-color-text-quiet: var(--wa-color-danger-on-quiet);\n  }\n\n  .wa-valid {\n    --wa-form-control-border-color: var(--wa-color-success-border-loud);\n    --wa-form-control-activated-color: var(--wa-color-success-fill-loud);\n    --wa-form-control-value-color: var(--wa-color-success-on-quiet);\n\n    /* Focus ring */\n    --wa-color-focus: var(--wa-color-success-border-loud);\n\n    /* Help text */\n    --wa-color-text-quiet: var(--wa-color-success-on-quiet);\n  }\n  /* #endregion */\n}\n\n/* CSS Utilities */\n\n@layer wa-utilities {\n  /*\n   * Utility to minimize FOUCE and show custom elements only after they're registered\n   */\n  .wa-cloak:has(:not(:defined)) {\n    animation: 2s step-end wa-fouce-cloak;\n  }\n\n  @keyframes wa-fouce-cloak {\n    from {\n      opacity: 0;\n    }\n    to {\n      opacity: 1;\n    }\n  }\n}\n\n@layer wa-utilities {\n  .wa-visually-hidden:not(:focus-within),\n  .wa-visually-hidden-force {\n    position: absolute !important;\n    width: 1px !important;\n    height: 1px !important;\n    clip: rect(0 0 0 0) !important;\n    clip-path: inset(50%) !important;\n    border: none !important;\n    overflow: hidden !important;\n    white-space: nowrap !important;\n    padding: 0 !important;\n  }\n}\n\n@layer wa-utilities {\n  /* These scroll lock helpers are put into this CSS file to avoid strict CSPs that affect style tag loading. */\n  @supports (scrollbar-gutter: stable) {\n    .wa-scroll-lock {\n      scrollbar-gutter: var(--wa-scroll-lock-gutter) !important;\n    }\n\n    .wa-scroll-lock body {\n      overflow: hidden !important;\n    }\n  }\n\n  /** This can go away once Safari has scrollbar-gutter support. */\n  @supports not (scrollbar-gutter: stable) {\n    .wa-scroll-lock body {\n      padding-right: var(--wa-scroll-lock-size) !important;\n      overflow: hidden !important;\n    }\n  }\n}\n\n@layer wa-utilities {\n  .wa-placeholder {\n    align-self: stretch;\n    background-color: var(--wa-color-neutral-fill-quiet);\n    border: dashed var(--wa-border-width-s) var(--wa-color-neutral-border-normal);\n    border-radius: var(--wa-border-radius-l);\n    padding: var(--wa-space-3xl);\n  }\n}\n\n@layer wa-utilities {\n  .wa-align-items-start {\n    align-items: flex-start;\n  }\n  .wa-align-items-end {\n    align-items: flex-end;\n  }\n  .wa-align-items-center {\n    align-items: center;\n  }\n  .wa-align-items-stretch {\n    align-items: stretch;\n  }\n  .wa-align-items-baseline {\n    align-items: baseline;\n  }\n}\n\n@layer wa-utilities {\n  .wa-border-radius-s {\n    border-radius: var(--wa-border-radius-s);\n  }\n  .wa-border-radius-m {\n    border-radius: var(--wa-border-radius-m);\n  }\n  .wa-border-radius-l {\n    border-radius: var(--wa-border-radius-l);\n  }\n  .wa-border-radius-pill {\n    border-radius: var(--wa-border-radius-pill);\n  }\n  .wa-border-radius-circle {\n    border-radius: var(--wa-border-radius-circle);\n  }\n  .wa-border-radius-square {\n    border-radius: var(--wa-border-radius-square);\n  }\n}\n\n@layer wa-utilities {\n  /* Apply Flexbox with 0 specificity to ensure a gap util produces a visible change */\n  :where(\n    .wa-gap-0,\n    .wa-gap-3xs,\n    .wa-gap-2xs,\n    .wa-gap-xs,\n    .wa-gap-s,\n    .wa-gap-m,\n    .wa-gap-l,\n    .wa-gap-xl,\n    .wa-gap-2xl,\n    .wa-gap-3xl\n  ) {\n    display: flex;\n  }\n\n  .wa-gap-0 {\n    gap: 0px;\n  }\n  .wa-gap-3xs {\n    gap: var(--wa-space-3xs);\n  }\n  .wa-gap-2xs {\n    gap: var(--wa-space-2xs);\n  }\n  .wa-gap-xs {\n    gap: var(--wa-space-xs);\n  }\n  .wa-gap-s {\n    gap: var(--wa-space-s);\n  }\n  .wa-gap-m {\n    gap: var(--wa-space-m);\n  }\n  .wa-gap-l {\n    gap: var(--wa-space-l);\n  }\n  .wa-gap-xl {\n    gap: var(--wa-space-xl);\n  }\n  .wa-gap-2xl {\n    gap: var(--wa-space-2xl);\n  }\n  .wa-gap-3xl {\n    gap: var(--wa-space-3xl);\n  }\n}\n\n@layer wa-utilities {\n  .wa-heading-xs,\n  .wa-heading-s,\n  .wa-heading-m,\n  .wa-heading-l,\n  .wa-heading-xl,\n  .wa-heading-2xl,\n  .wa-heading-3xl {\n    font-family: var(--wa-font-family-heading);\n    font-weight: var(--wa-font-weight-heading);\n    line-height: var(--wa-line-height-condensed);\n    text-wrap: balance;\n  }\n\n  .wa-heading-xs {\n    font-size: var(--wa-font-size-s);\n  }\n\n  .wa-heading-s {\n    font-size: var(--wa-font-size-m);\n  }\n\n  .wa-heading-m {\n    font-size: var(--wa-font-size-l);\n  }\n\n  .wa-heading-l {\n    font-size: var(--wa-font-size-xl);\n  }\n\n  .wa-heading-xl {\n    font-size: var(--wa-font-size-2xl);\n  }\n\n  .wa-heading-2xl {\n    font-size: var(--wa-font-size-3xl);\n  }\n\n  .wa-heading-3xl {\n    font-size: var(--wa-font-size-4xl);\n  }\n\n  .wa-body-xs,\n  .wa-body-s,\n  .wa-body-m,\n  .wa-body-l,\n  .wa-body-xl {\n    font-family: var(--wa-font-family-body);\n    font-weight: var(--wa-font-weight-body);\n    line-height: var(--wa-line-height-normal);\n  }\n\n  .wa-body-xs {\n    font-size: var(--wa-font-size-xs);\n  }\n\n  .wa-body-s {\n    font-size: var(--wa-font-size-s);\n  }\n\n  .wa-body-m {\n    font-size: var(--wa-font-size-m);\n  }\n\n  .wa-body-l {\n    font-size: var(--wa-font-size-l);\n  }\n\n  .wa-body-xl {\n    font-size: var(--wa-font-size-xl);\n  }\n\n  .wa-caption-xs,\n  .wa-caption-s,\n  .wa-caption-m,\n  .wa-caption-l,\n  .wa-caption-xl {\n    color: var(--wa-color-text-quiet);\n    font-family: var(--wa-font-family-body);\n    font-weight: var(--wa-font-weight-body);\n    line-height: var(--wa-line-height-condensed);\n  }\n\n  .wa-caption-xs {\n    font-size: var(--wa-font-size-2xs);\n  }\n\n  .wa-caption-s {\n    font-size: var(--wa-font-size-xs);\n  }\n\n  .wa-caption-m {\n    font-size: var(--wa-font-size-s);\n  }\n\n  .wa-caption-l {\n    font-size: var(--wa-font-size-m);\n  }\n\n  .wa-caption-xl {\n    font-size: var(--wa-font-size-l);\n  }\n\n  .wa-link {\n    color: var(--wa-color-text-link);\n    text-decoration: var(--wa-link-decoration-default);\n    -webkit-text-decoration: var(--wa-link-decoration-default);\n\n    @media (hover: hover) {\n      &:hover {\n        color: color-mix(in oklab, var(--wa-color-text-link) 100%, var(--wa-color-mix-hover));\n        text-decoration: var(--wa-link-decoration-hover);\n        -webkit-text-decoration: var(--wa-link-decoration-hover);\n      }\n    }\n  }\n\n  .wa-link-plain {\n    color: var(--wa-color-text-normal);\n    text-decoration: none;\n\n    @media (hover: hover) {\n      &:hover {\n        color: color-mix(in oklab, currentColor, var(--wa-color-mix-hover));\n        text-decoration: none;\n      }\n    }\n  }\n}\n\n@layer wa-utilities {\n  :is(\n      [class*='wa-cluster'],\n      [class*='wa-flank'],\n      [class*='wa-frame'],\n      [class*='wa-grid'],\n      [class*='wa-stack'],\n      [class*='wa-split']\n    )\n    > * {\n    margin-block: 0;\n    margin-inline: 0;\n  }\n\n  :where(\n    [class*='wa-cluster'],\n    [class*='wa-flank'],\n    [class*='wa-frame'],\n    [class*='wa-grid'],\n    [class*='wa-stack'],\n    [class*='wa-split']\n  ) {\n    gap: var(--wa-space-m);\n  }\n\n  /* #region Cluster */\n  [class*='wa-cluster'] {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: flex-start;\n  }\n\n  :where([class*='wa-cluster']) {\n    align-items: center;\n  }\n  /* #endregion */\n\n  /* #region Flank */\n  [class*='wa-flank'] {\n    display: flex;\n    flex-wrap: wrap;\n\n    --content-percentage: initial;\n    --flank-size: initial;\n  }\n\n  [class*='wa-flank']:not([class*='\\:end']) > :first-child,\n  [class*='wa-flank'][class*='\\:start'] > :first-child {\n    flex-basis: var(--flank-size, auto);\n    flex-grow: 1;\n  }\n  [class*='wa-flank']:not([class*='\\:end']) > :last-child,\n  [class*='wa-flank'][class*='\\:start'] > :last-child {\n    flex-basis: 0;\n    flex-grow: 999;\n    min-inline-size: var(--content-percentage, 50%);\n  }\n\n  [class*='wa-flank'][class*='\\:end'] > :last-child {\n    flex-basis: var(--flank-size, auto);\n    flex-grow: 1;\n  }\n  [class*='wa-flank'][class*='\\:end'] > :first-child {\n    flex-basis: 0;\n    flex-grow: 999;\n    min-inline-size: var(--content-percentage, 50%);\n  }\n\n  :where([class*='wa-flank']) {\n    align-items: center;\n  }\n  /* #endregion */\n\n  /* #region Frame */\n  [class*='wa-frame'] {\n    display: flex;\n    aspect-ratio: 1 / 1;\n    justify-content: center;\n    overflow: hidden;\n  }\n\n  [class*='wa-frame'] > img,\n  [class*='wa-frame'] > video {\n    block-size: 100%;\n    inline-size: 100%;\n    object-fit: cover;\n  }\n\n  [class*='wa-frame'][class*='\\:square'] {\n    aspect-ratio: 1 / 1;\n  }\n  [class*='wa-frame'][class*='\\:landscape'] {\n    aspect-ratio: 16 / 9;\n  }\n  [class*='wa-frame'][class*='\\:portrait'] {\n    aspect-ratio: 9 / 16;\n  }\n\n  :where([class*='wa-frame']) {\n    align-items: center;\n  }\n  /* #endregion */\n\n  /* #region Grid */\n  [class*='wa-grid'] {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(min(var(--min-column-size, 20ch), 100%), 1fr));\n\n    --min-column-size: initial;\n  }\n\n  .wa-span-grid {\n    grid-column: 1 / -1;\n  }\n  /* #endregion */\n\n  /* #region Split */\n  [class*='wa-split'] {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n  }\n\n  [class*='wa-split'],\n  [class*='wa-split'][class*='\\:row'] {\n    flex-direction: row;\n    block-size: auto;\n    inline-size: 100%;\n  }\n\n  [class*='wa-split']:not([class*='\\:column']) > :first-child {\n    flex: 0 1 auto;\n  }\n\n  [class*='wa-split'][class*='\\:column'] {\n    flex-direction: column;\n    block-size: auto;\n    inline-size: auto;\n    align-self: stretch;\n  }\n\n  :where([class*='wa-split']) {\n    align-items: center;\n  }\n\n  /* #endregion */\n\n  /* #region Stack */\n  [class*='wa-stack'] {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n  }\n\n  :where([class*='wa-stack']) {\n    align-items: stretch;\n  }\n  /* #endregion */\n}\n\n@layer wa-utilities {\n  :host([size='small']),\n  .wa-size-s {\n    font-size: var(--wa-font-size-s);\n  }\n\n  :host([size='medium']),\n  .wa-size-m {\n    font-size: var(--wa-font-size-m);\n  }\n\n  :host([size='large']),\n  .wa-size-l {\n    font-size: var(--wa-font-size-l);\n  }\n}\n\n@layer wa-utilities {\n  :where(:root),\n  .wa-neutral,\n  :host([variant='neutral']) {\n    --wa-color-fill-loud: var(--wa-color-neutral-fill-loud);\n    --wa-color-fill-normal: var(--wa-color-neutral-fill-normal);\n    --wa-color-fill-quiet: var(--wa-color-neutral-fill-quiet);\n    --wa-color-border-loud: var(--wa-color-neutral-border-loud);\n    --wa-color-border-normal: var(--wa-color-neutral-border-normal);\n    --wa-color-border-quiet: var(--wa-color-neutral-border-quiet);\n    --wa-color-on-loud: var(--wa-color-neutral-on-loud);\n    --wa-color-on-normal: var(--wa-color-neutral-on-normal);\n    --wa-color-on-quiet: var(--wa-color-neutral-on-quiet);\n  }\n\n  .wa-brand,\n  :host([variant='brand']) {\n    --wa-color-fill-loud: var(--wa-color-brand-fill-loud);\n    --wa-color-fill-normal: var(--wa-color-brand-fill-normal);\n    --wa-color-fill-quiet: var(--wa-color-brand-fill-quiet);\n    --wa-color-border-loud: var(--wa-color-brand-border-loud);\n    --wa-color-border-normal: var(--wa-color-brand-border-normal);\n    --wa-color-border-quiet: var(--wa-color-brand-border-quiet);\n    --wa-color-on-loud: var(--wa-color-brand-on-loud);\n    --wa-color-on-normal: var(--wa-color-brand-on-normal);\n    --wa-color-on-quiet: var(--wa-color-brand-on-quiet);\n  }\n\n  .wa-success,\n  :host([variant='success']) {\n    --wa-color-fill-loud: var(--wa-color-success-fill-loud);\n    --wa-color-fill-normal: var(--wa-color-success-fill-normal);\n    --wa-color-fill-quiet: var(--wa-color-success-fill-quiet);\n    --wa-color-border-loud: var(--wa-color-success-border-loud);\n    --wa-color-border-normal: var(--wa-color-success-border-normal);\n    --wa-color-border-quiet: var(--wa-color-success-border-quiet);\n    --wa-color-on-loud: var(--wa-color-success-on-loud);\n    --wa-color-on-normal: var(--wa-color-success-on-normal);\n    --wa-color-on-quiet: var(--wa-color-success-on-quiet);\n  }\n\n  .wa-warning,\n  :host([variant='warning']) {\n    --wa-color-fill-loud: var(--wa-color-warning-fill-loud);\n    --wa-color-fill-normal: var(--wa-color-warning-fill-normal);\n    --wa-color-fill-quiet: var(--wa-color-warning-fill-quiet);\n    --wa-color-border-loud: var(--wa-color-warning-border-loud);\n    --wa-color-border-normal: var(--wa-color-warning-border-normal);\n    --wa-color-border-quiet: var(--wa-color-warning-border-quiet);\n    --wa-color-on-loud: var(--wa-color-warning-on-loud);\n    --wa-color-on-normal: var(--wa-color-warning-on-normal);\n    --wa-color-on-quiet: var(--wa-color-warning-on-quiet);\n  }\n\n  .wa-danger,\n  :host([variant='danger']) {\n    --wa-color-fill-loud: var(--wa-color-danger-fill-loud);\n    --wa-color-fill-normal: var(--wa-color-danger-fill-normal);\n    --wa-color-fill-quiet: var(--wa-color-danger-fill-quiet);\n    --wa-color-border-loud: var(--wa-color-danger-border-loud);\n    --wa-color-border-normal: var(--wa-color-danger-border-normal);\n    --wa-color-border-quiet: var(--wa-color-danger-border-quiet);\n    --wa-color-on-loud: var(--wa-color-danger-on-loud);\n    --wa-color-on-normal: var(--wa-color-danger-on-normal);\n    --wa-color-on-quiet: var(--wa-color-danger-on-quiet);\n  }\n}\n\n/* Theme */\n\n/* Generates --wa-color-{hue}-on tokens for pairing with any palette's key colors */\n\n:where(:root),\n:host {\n  /**\n    * Conditional tokens to check if the key color is >= 60\n    * Key colors are the most colorful tint in a scale, recorded as --wa-color-{hue} in each palette\n    * The numeric value of the key is isolated as --wa-color-{hue}-key\n    * If key < 60, the result is 0%\n    * If key >= 60, the result is 100%\n    * Intended to be used in the color-mix() functions below\n    */\n\n  --wa-color-red-gte-60: calc(100% - (clamp(0, 60 - var(--wa-color-red-key), 1) * 100%));\n  --wa-color-orange-gte-60: calc(100% - (clamp(0, 60 - var(--wa-color-orange-key), 1) * 100%));\n  --wa-color-yellow-gte-60: calc(100% - (clamp(0, 60 - var(--wa-color-yellow-key), 1) * 100%));\n  --wa-color-green-gte-60: calc(100% - (clamp(0, 60 - var(--wa-color-green-key), 1) * 100%));\n  --wa-color-cyan-gte-60: calc(100% - (clamp(0, 60 - var(--wa-color-cyan-key), 1) * 100%));\n  --wa-color-blue-gte-60: calc(100% - (clamp(0, 60 - var(--wa-color-blue-key), 1) * 100%));\n  --wa-color-indigo-gte-60: calc(100% - (clamp(0, 60 - var(--wa-color-indigo-key), 1) * 100%));\n  --wa-color-purple-gte-60: calc(100% - (clamp(0, 60 - var(--wa-color-purple-key), 1) * 100%));\n  --wa-color-pink-gte-60: calc(100% - (clamp(0, 60 - var(--wa-color-pink-key), 1) * 100%));\n  --wa-color-gray-gte-60: calc(100% - (clamp(0, 60 - var(--wa-color-gray-key), 1) * 100%));\n\n  /**\n    * Tokens to set text color with appropriate WCAG 2.1 contrast\n    * If key < 60, the text color is white\n    * If key >= 60, the text color is {hue}-10\n    */\n\n  --wa-color-red-on: color-mix(in oklab, var(--wa-color-red-10) var(--wa-color-red-gte-60), white);\n  --wa-color-orange-on: color-mix(in oklab, var(--wa-color-orange-10) var(--wa-color-orange-gte-60), white);\n  --wa-color-yellow-on: color-mix(in oklab, var(--wa-color-yellow-10) var(--wa-color-yellow-gte-60), white);\n  --wa-color-green-on: color-mix(in oklab, var(--wa-color-green-10) var(--wa-color-green-gte-60), white);\n  --wa-color-cyan-on: color-mix(in oklab, var(--wa-color-cyan-10) var(--wa-color-cyan-gte-60), white);\n  --wa-color-blue-on: color-mix(in oklab, var(--wa-color-blue-10) var(--wa-color-blue-gte-60), white);\n  --wa-color-indigo-on: color-mix(in oklab, var(--wa-color-indigo-10) var(--wa-color-indigo-gte-60), white);\n  --wa-color-purple-on: color-mix(in oklab, var(--wa-color-purple-10) var(--wa-color-purple-gte-60), white);\n  --wa-color-pink-on: color-mix(in oklab, var(--wa-color-pink-10) var(--wa-color-pink-gte-60), white);\n  --wa-color-gray-on: color-mix(in oklab, var(--wa-color-gray-10) var(--wa-color-gray-gte-60), white);\n}\n\n@layer wa-color-palette {\n  :where(:root),\n  .wa-palette-default {\n    --wa-color-red-95: #fff0ef /* oklch(96.667% 0.01632 22.08) */;\n    --wa-color-red-90: #ffdedc /* oklch(92.735% 0.03679 21.966) */;\n    --wa-color-red-80: #ffb8b6 /* oklch(84.803% 0.08289 20.771) */;\n    --wa-color-red-70: #fd8f90 /* oklch(76.801% 0.13322 20.052) */;\n    --wa-color-red-60: #f3676c /* oklch(68.914% 0.17256 20.646) */;\n    --wa-color-red-50: #dc3146 /* oklch(58.857% 0.20512 20.223) */;\n    --wa-color-red-40: #b30532 /* oklch(48.737% 0.19311 18.413) */;\n    --wa-color-red-30: #8a132c /* oklch(41.17% 0.1512 16.771) */;\n    --wa-color-red-20: #631323 /* oklch(33.297% 0.11208 14.847) */;\n    --wa-color-red-10: #3e0913 /* oklch(24.329% 0.08074 15.207) */;\n    --wa-color-red-05: #2a040b /* oklch(19.016% 0.06394 13.71) */;\n    --wa-color-red: var(--wa-color-red-50);\n    --wa-color-red-key: 50;\n\n    --wa-color-orange-95: #fff0e6 /* oklch(96.426% 0.02105 56.133) */;\n    --wa-color-orange-90: #ffdfca /* oklch(92.468% 0.04529 55.325) */;\n    --wa-color-orange-80: #ffbb94 /* oklch(84.588% 0.09454 50.876) */;\n    --wa-color-orange-70: #ff9266 /* oklch(76.744% 0.14429 42.309) */;\n    --wa-color-orange-60: #f46a45 /* oklch(68.848% 0.17805 35.951) */;\n    --wa-color-orange-50: #cd491c /* oklch(58.195% 0.17597 37.577) */;\n    --wa-color-orange-40: #9f3501 /* oklch(47.889% 0.14981 39.957) */;\n    --wa-color-orange-30: #802700 /* oklch(40.637% 0.1298 39.149) */;\n    --wa-color-orange-20: #601b00 /* oklch(33.123% 0.10587 39.117) */;\n    --wa-color-orange-10: #3c0d00 /* oklch(24.043% 0.07768 38.607) */;\n    --wa-color-orange-05: #280600 /* oklch(18.644% 0.0607 38.252) */;\n    --wa-color-orange: var(--wa-color-orange-60);\n    --wa-color-orange-key: 60;\n\n    --wa-color-yellow-95: #fef3cd /* oklch(96.322% 0.05069 93.748) */;\n    --wa-color-yellow-90: #ffe495 /* oklch(92.377% 0.10246 91.296) */;\n    --wa-color-yellow-80: #fac22b /* oklch(84.185% 0.16263 85.991) */;\n    --wa-color-yellow-70: #ef9d00 /* oklch(75.949% 0.16251 72.13) */;\n    --wa-color-yellow-60: #da7e00 /* oklch(67.883% 0.15587 62.246) */;\n    --wa-color-yellow-50: #b45f04 /* oklch(57.449% 0.13836 56.585) */;\n    --wa-color-yellow-40: #8c4602 /* oklch(47.319% 0.11666 54.663) */;\n    --wa-color-yellow-30: #6f3601 /* oklch(40.012% 0.09892 54.555) */;\n    --wa-color-yellow-20: #532600 /* oklch(32.518% 0.08157 53.927) */;\n    --wa-color-yellow-10: #331600 /* oklch(23.846% 0.05834 56.02) */;\n    --wa-color-yellow-05: #220c00 /* oklch(18.585% 0.04625 54.588) */;\n    --wa-color-yellow: var(--wa-color-yellow-80);\n    --wa-color-yellow-key: 80;\n\n    --wa-color-green-95: #e3f9e3 /* oklch(96.006% 0.03715 145.28) */;\n    --wa-color-green-90: #c2f2c1 /* oklch(91.494% 0.08233 144.35) */;\n    --wa-color-green-80: #93da98 /* oklch(82.445% 0.11601 146.11) */;\n    --wa-color-green-70: #5dc36f /* oklch(73.554% 0.15308 147.59) */;\n    --wa-color-green-60: #00ac49 /* oklch(64.982% 0.18414 148.83) */;\n    --wa-color-green-50: #00883c /* oklch(54.765% 0.15165 149.77) */;\n    --wa-color-green-40: #036730 /* oklch(45.004% 0.11963 151.06) */;\n    --wa-color-green-30: #0a5027 /* oklch(37.988% 0.09487 151.62) */;\n    --wa-color-green-20: #0a3a1d /* oklch(30.876% 0.07202 152.23) */;\n    --wa-color-green-10: #052310 /* oklch(22.767% 0.05128 152.45) */;\n    --wa-color-green-05: #031608 /* oklch(17.84% 0.03957 151.36) */;\n    --wa-color-green: var(--wa-color-green-60);\n    --wa-color-green-key: 60;\n\n    --wa-color-cyan-95: #e3f6fb /* oklch(96.063% 0.02111 215.26) */;\n    --wa-color-cyan-90: #c5ecf7 /* oklch(91.881% 0.04314 216.7) */;\n    --wa-color-cyan-80: #7fd6ec /* oklch(82.906% 0.08934 215.86) */;\n    --wa-color-cyan-70: #2fbedc /* oklch(74.18% 0.12169 215.86) */;\n    --wa-color-cyan-60: #00a3c0 /* oklch(65.939% 0.11738 216.42) */;\n    --wa-color-cyan-50: #078098 /* oklch(55.379% 0.09774 217.32) */;\n    --wa-color-cyan-40: #026274 /* oklch(45.735% 0.08074 216.18) */;\n    --wa-color-cyan-30: #014c5b /* oklch(38.419% 0.06817 216.88) */;\n    --wa-color-cyan-20: #003844 /* oklch(31.427% 0.05624 217.32) */;\n    --wa-color-cyan-10: #002129 /* oklch(22.851% 0.04085 217.17) */;\n    --wa-color-cyan-05: #00151b /* oklch(18.055% 0.03231 217.31) */;\n    --wa-color-cyan: var(--wa-color-cyan-70);\n    --wa-color-cyan-key: 70;\n\n    --wa-color-blue-95: #e8f3ff /* oklch(95.944% 0.01996 250.38) */;\n    --wa-color-blue-90: #d1e8ff /* oklch(92.121% 0.03985 248.26) */;\n    --wa-color-blue-80: #9fceff /* oklch(83.572% 0.08502 249.92) */;\n    --wa-color-blue-70: #6eb3ff /* oklch(75.256% 0.1308 252.03) */;\n    --wa-color-blue-60: #3e96ff /* oklch(67.196% 0.17661 254.97) */;\n    --wa-color-blue-50: #0071ec /* oklch(56.972% 0.20461 257.29) */;\n    --wa-color-blue-40: #0053c0 /* oklch(47.175% 0.1846 259.19) */;\n    --wa-color-blue-30: #003f9c /* oklch(39.805% 0.16217 259.98) */;\n    --wa-color-blue-20: #002d77 /* oklch(32.436% 0.1349 260.35) */;\n    --wa-color-blue-10: #001a4e /* oklch(23.965% 0.10161 260.68) */;\n    --wa-color-blue-05: #000f35 /* oklch(18.565% 0.07904 260.75) */;\n    --wa-color-blue: var(--wa-color-blue-50);\n    --wa-color-blue-key: 50;\n\n    --wa-color-indigo-95: #f0f2ff /* oklch(96.341% 0.0175 279.06) */;\n    --wa-color-indigo-90: #dfe5ff /* oklch(92.527% 0.0359 275.35) */;\n    --wa-color-indigo-80: #bcc7ff /* oklch(84.053% 0.07938 275.91) */;\n    --wa-color-indigo-70: #9da9ff /* oklch(75.941% 0.12411 276.95) */;\n    --wa-color-indigo-60: #808aff /* oklch(67.977% 0.17065 277.16) */;\n    --wa-color-indigo-50: #6163f2 /* oklch(57.967% 0.20943 277.04) */;\n    --wa-color-indigo-40: #4945cb /* oklch(48.145% 0.20042 277.08) */;\n    --wa-color-indigo-30: #3933a7 /* oklch(40.844% 0.17864 277.26) */;\n    --wa-color-indigo-20: #292381 /* oklch(33.362% 0.15096 277.21) */;\n    --wa-color-indigo-10: #181255 /* oklch(24.534% 0.11483 277.73) */;\n    --wa-color-indigo-05: #0d0a3a /* oklch(19.092% 0.08825 276.76) */;\n    --wa-color-indigo: var(--wa-color-indigo-50);\n    --wa-color-indigo-key: 50;\n\n    --wa-color-purple-95: #f7f0ff /* oklch(96.49% 0.02119 306.84) */;\n    --wa-color-purple-90: #eedfff /* oklch(92.531% 0.04569 306.6) */;\n    --wa-color-purple-80: #ddbdff /* oklch(84.781% 0.09615 306.52) */;\n    --wa-color-purple-70: #ca99ff /* oklch(76.728% 0.14961 305.27) */;\n    --wa-color-purple-60: #b678f5 /* oklch(68.906% 0.1844 304.96) */;\n    --wa-color-purple-50: #9951db /* oklch(58.603% 0.20465 304.87) */;\n    --wa-color-purple-40: #7936b3 /* oklch(48.641% 0.18949 304.79) */;\n    --wa-color-purple-30: #612692 /* oklch(41.23% 0.16836 304.92) */;\n    --wa-color-purple-20: #491870 /* oklch(33.663% 0.14258 305.12) */;\n    --wa-color-purple-10: #2d0b48 /* oklch(24.637% 0.10612 304.95) */;\n    --wa-color-purple-05: #1e0532 /* oklch(19.393% 0.08461 305.26) */;\n    --wa-color-purple: var(--wa-color-purple-50);\n    --wa-color-purple-key: 50;\n\n    --wa-color-pink-95: #feeff9 /* oklch(96.676% 0.02074 337.69) */;\n    --wa-color-pink-90: #feddf0 /* oklch(93.026% 0.04388 342.45) */;\n    --wa-color-pink-80: #fcb5d8 /* oklch(84.928% 0.09304 348.21) */;\n    --wa-color-pink-70: #f78dbf /* oklch(77.058% 0.14016 351.19) */;\n    --wa-color-pink-60: #e66ba3 /* oklch(69.067% 0.16347 353.69) */;\n    --wa-color-pink-50: #c84382 /* oklch(58.707% 0.17826 354.82) */;\n    --wa-color-pink-40: #9e2a6c /* oklch(48.603% 0.16439 350.08) */;\n    --wa-color-pink-30: #7d1e58 /* oklch(41.017% 0.14211 347.77) */;\n    --wa-color-pink-20: #5e1342 /* oklch(33.442% 0.11808 347.01) */;\n    --wa-color-pink-10: #3c0828 /* oklch(24.601% 0.08768 347.8) */;\n    --wa-color-pink-05: #28041a /* oklch(19.199% 0.06799 346.97) */;\n    --wa-color-pink: var(--wa-color-pink-50);\n    --wa-color-pink-key: 50;\n\n    --wa-color-gray-95: #f1f2f3 /* oklch(96.067% 0.00172 247.84) */;\n    --wa-color-gray-90: #e4e5e9 /* oklch(92.228% 0.0055 274.96) */;\n    --wa-color-gray-80: #c7c9d0 /* oklch(83.641% 0.00994 273.33) */;\n    --wa-color-gray-70: #abaeb9 /* oklch(75.183% 0.01604 273.78) */;\n    --wa-color-gray-60: #9194a2 /* oklch(66.863% 0.02088 276.18) */;\n    --wa-color-gray-50: #717584 /* oklch(56.418% 0.02359 273.77) */;\n    --wa-color-gray-40: #545868 /* oklch(46.281% 0.02644 274.26) */;\n    --wa-color-gray-30: #424554 /* oklch(39.355% 0.02564 276.27) */;\n    --wa-color-gray-20: #2f323f /* oklch(31.97% 0.02354 274.82) */;\n    --wa-color-gray-10: #1b1d26 /* oklch(23.277% 0.01762 275.14) */;\n    --wa-color-gray-05: #101219 /* oklch(18.342% 0.01472 272.42) */;\n    --wa-color-gray: var(--wa-color-gray-40);\n    --wa-color-gray-key: 40;\n  }\n}\n\n@layer wa-color-variant {\n  :where(:root), /* default */\n  .wa-brand-blue {\n    --wa-color-brand-95: var(--wa-color-blue-95);\n    --wa-color-brand-90: var(--wa-color-blue-90);\n    --wa-color-brand-80: var(--wa-color-blue-80);\n    --wa-color-brand-70: var(--wa-color-blue-70);\n    --wa-color-brand-60: var(--wa-color-blue-60);\n    --wa-color-brand-50: var(--wa-color-blue-50);\n    --wa-color-brand-40: var(--wa-color-blue-40);\n    --wa-color-brand-30: var(--wa-color-blue-30);\n    --wa-color-brand-20: var(--wa-color-blue-20);\n    --wa-color-brand-10: var(--wa-color-blue-10);\n    --wa-color-brand-05: var(--wa-color-blue-05);\n    --wa-color-brand: var(--wa-color-blue);\n    --wa-color-brand-on: var(--wa-color-blue-on);\n  }\n\n  .wa-brand-red {\n    --wa-color-brand-95: var(--wa-color-red-95);\n    --wa-color-brand-90: var(--wa-color-red-90);\n    --wa-color-brand-80: var(--wa-color-red-80);\n    --wa-color-brand-70: var(--wa-color-red-70);\n    --wa-color-brand-60: var(--wa-color-red-60);\n    --wa-color-brand-50: var(--wa-color-red-50);\n    --wa-color-brand-40: var(--wa-color-red-40);\n    --wa-color-brand-30: var(--wa-color-red-30);\n    --wa-color-brand-20: var(--wa-color-red-20);\n    --wa-color-brand-10: var(--wa-color-red-10);\n    --wa-color-brand-05: var(--wa-color-red-05);\n    --wa-color-brand: var(--wa-color-red);\n    --wa-color-brand-on: var(--wa-color-red-on);\n  }\n\n  .wa-brand-orange {\n    --wa-color-brand-95: var(--wa-color-orange-95);\n    --wa-color-brand-90: var(--wa-color-orange-90);\n    --wa-color-brand-80: var(--wa-color-orange-80);\n    --wa-color-brand-70: var(--wa-color-orange-70);\n    --wa-color-brand-60: var(--wa-color-orange-60);\n    --wa-color-brand-50: var(--wa-color-orange-50);\n    --wa-color-brand-40: var(--wa-color-orange-40);\n    --wa-color-brand-30: var(--wa-color-orange-30);\n    --wa-color-brand-20: var(--wa-color-orange-20);\n    --wa-color-brand-10: var(--wa-color-orange-10);\n    --wa-color-brand-05: var(--wa-color-orange-05);\n    --wa-color-brand: var(--wa-color-orange);\n    --wa-color-brand-on: var(--wa-color-orange-on);\n  }\n\n  .wa-brand-yellow {\n    --wa-color-brand-95: var(--wa-color-yellow-95);\n    --wa-color-brand-90: var(--wa-color-yellow-90);\n    --wa-color-brand-80: var(--wa-color-yellow-80);\n    --wa-color-brand-70: var(--wa-color-yellow-70);\n    --wa-color-brand-60: var(--wa-color-yellow-60);\n    --wa-color-brand-50: var(--wa-color-yellow-50);\n    --wa-color-brand-40: var(--wa-color-yellow-40);\n    --wa-color-brand-30: var(--wa-color-yellow-30);\n    --wa-color-brand-20: var(--wa-color-yellow-20);\n    --wa-color-brand-10: var(--wa-color-yellow-10);\n    --wa-color-brand-05: var(--wa-color-yellow-05);\n    --wa-color-brand: var(--wa-color-yellow);\n    --wa-color-brand-on: var(--wa-color-yellow-on);\n  }\n\n  .wa-brand-green {\n    --wa-color-brand-95: var(--wa-color-green-95);\n    --wa-color-brand-90: var(--wa-color-green-90);\n    --wa-color-brand-80: var(--wa-color-green-80);\n    --wa-color-brand-70: var(--wa-color-green-70);\n    --wa-color-brand-60: var(--wa-color-green-60);\n    --wa-color-brand-50: var(--wa-color-green-50);\n    --wa-color-brand-40: var(--wa-color-green-40);\n    --wa-color-brand-30: var(--wa-color-green-30);\n    --wa-color-brand-20: var(--wa-color-green-20);\n    --wa-color-brand-10: var(--wa-color-green-10);\n    --wa-color-brand-05: var(--wa-color-green-05);\n    --wa-color-brand: var(--wa-color-green);\n    --wa-color-brand-on: var(--wa-color-green-on);\n  }\n\n  .wa-brand-cyan {\n    --wa-color-brand-95: var(--wa-color-cyan-95);\n    --wa-color-brand-90: var(--wa-color-cyan-90);\n    --wa-color-brand-80: var(--wa-color-cyan-80);\n    --wa-color-brand-70: var(--wa-color-cyan-70);\n    --wa-color-brand-60: var(--wa-color-cyan-60);\n    --wa-color-brand-50: var(--wa-color-cyan-50);\n    --wa-color-brand-40: var(--wa-color-cyan-40);\n    --wa-color-brand-30: var(--wa-color-cyan-30);\n    --wa-color-brand-20: var(--wa-color-cyan-20);\n    --wa-color-brand-10: var(--wa-color-cyan-10);\n    --wa-color-brand-05: var(--wa-color-cyan-05);\n    --wa-color-brand: var(--wa-color-cyan);\n    --wa-color-brand-on: var(--wa-color-cyan-on);\n  }\n\n  .wa-brand-indigo {\n    --wa-color-brand-95: var(--wa-color-indigo-95);\n    --wa-color-brand-90: var(--wa-color-indigo-90);\n    --wa-color-brand-80: var(--wa-color-indigo-80);\n    --wa-color-brand-70: var(--wa-color-indigo-70);\n    --wa-color-brand-60: var(--wa-color-indigo-60);\n    --wa-color-brand-50: var(--wa-color-indigo-50);\n    --wa-color-brand-40: var(--wa-color-indigo-40);\n    --wa-color-brand-30: var(--wa-color-indigo-30);\n    --wa-color-brand-20: var(--wa-color-indigo-20);\n    --wa-color-brand-10: var(--wa-color-indigo-10);\n    --wa-color-brand-05: var(--wa-color-indigo-05);\n    --wa-color-brand: var(--wa-color-indigo);\n    --wa-color-brand-on: var(--wa-color-indigo-on);\n  }\n\n  .wa-brand-purple {\n    --wa-color-brand-95: var(--wa-color-purple-95);\n    --wa-color-brand-90: var(--wa-color-purple-90);\n    --wa-color-brand-80: var(--wa-color-purple-80);\n    --wa-color-brand-70: var(--wa-color-purple-70);\n    --wa-color-brand-60: var(--wa-color-purple-60);\n    --wa-color-brand-50: var(--wa-color-purple-50);\n    --wa-color-brand-40: var(--wa-color-purple-40);\n    --wa-color-brand-30: var(--wa-color-purple-30);\n    --wa-color-brand-20: var(--wa-color-purple-20);\n    --wa-color-brand-10: var(--wa-color-purple-10);\n    --wa-color-brand-05: var(--wa-color-purple-05);\n    --wa-color-brand: var(--wa-color-purple);\n    --wa-color-brand-on: var(--wa-color-purple-on);\n  }\n\n  .wa-brand-pink {\n    --wa-color-brand-95: var(--wa-color-pink-95);\n    --wa-color-brand-90: var(--wa-color-pink-90);\n    --wa-color-brand-80: var(--wa-color-pink-80);\n    --wa-color-brand-70: var(--wa-color-pink-70);\n    --wa-color-brand-60: var(--wa-color-pink-60);\n    --wa-color-brand-50: var(--wa-color-pink-50);\n    --wa-color-brand-40: var(--wa-color-pink-40);\n    --wa-color-brand-30: var(--wa-color-pink-30);\n    --wa-color-brand-20: var(--wa-color-pink-20);\n    --wa-color-brand-10: var(--wa-color-pink-10);\n    --wa-color-brand-05: var(--wa-color-pink-05);\n    --wa-color-brand: var(--wa-color-pink);\n    --wa-color-brand-on: var(--wa-color-pink-on);\n  }\n\n  .wa-brand-gray {\n    --wa-color-brand-95: var(--wa-color-gray-95);\n    --wa-color-brand-90: var(--wa-color-gray-90);\n    --wa-color-brand-80: var(--wa-color-gray-80);\n    --wa-color-brand-70: var(--wa-color-gray-70);\n    --wa-color-brand-60: var(--wa-color-gray-60);\n    --wa-color-brand-50: var(--wa-color-gray-50);\n    --wa-color-brand-40: var(--wa-color-gray-40);\n    --wa-color-brand-30: var(--wa-color-gray-30);\n    --wa-color-brand-20: var(--wa-color-gray-20);\n    --wa-color-brand-10: var(--wa-color-gray-10);\n    --wa-color-brand-05: var(--wa-color-gray-05);\n    --wa-color-brand: var(--wa-color-gray);\n    --wa-color-brand-on: var(--wa-color-gray-on);\n  }\n}\n\n@layer wa-color-variant {\n  :where(:root), /* default */\n  .wa-neutral-gray {\n    --wa-color-neutral-95: var(--wa-color-gray-95);\n    --wa-color-neutral-90: var(--wa-color-gray-90);\n    --wa-color-neutral-80: var(--wa-color-gray-80);\n    --wa-color-neutral-70: var(--wa-color-gray-70);\n    --wa-color-neutral-60: var(--wa-color-gray-60);\n    --wa-color-neutral-50: var(--wa-color-gray-50);\n    --wa-color-neutral-40: var(--wa-color-gray-40);\n    --wa-color-neutral-30: var(--wa-color-gray-30);\n    --wa-color-neutral-20: var(--wa-color-gray-20);\n    --wa-color-neutral-10: var(--wa-color-gray-10);\n    --wa-color-neutral-05: var(--wa-color-gray-05);\n    --wa-color-neutral: var(--wa-color-gray);\n    --wa-color-neutral-on: var(--wa-color-gray-on);\n  }\n\n  .wa-neutral-red {\n    --wa-color-neutral-95: var(--wa-color-red-95);\n    --wa-color-neutral-90: var(--wa-color-red-90);\n    --wa-color-neutral-80: var(--wa-color-red-80);\n    --wa-color-neutral-70: var(--wa-color-red-70);\n    --wa-color-neutral-60: var(--wa-color-red-60);\n    --wa-color-neutral-50: var(--wa-color-red-50);\n    --wa-color-neutral-40: var(--wa-color-red-40);\n    --wa-color-neutral-30: var(--wa-color-red-30);\n    --wa-color-neutral-20: var(--wa-color-red-20);\n    --wa-color-neutral-10: var(--wa-color-red-10);\n    --wa-color-neutral-05: var(--wa-color-red-05);\n    --wa-color-neutral: var(--wa-color-red);\n    --wa-color-neutral-on: var(--wa-color-red-on);\n  }\n\n  .wa-neutral-orange {\n    --wa-color-neutral-95: var(--wa-color-orange-95);\n    --wa-color-neutral-90: var(--wa-color-orange-90);\n    --wa-color-neutral-80: var(--wa-color-orange-80);\n    --wa-color-neutral-70: var(--wa-color-orange-70);\n    --wa-color-neutral-60: var(--wa-color-orange-60);\n    --wa-color-neutral-50: var(--wa-color-orange-50);\n    --wa-color-neutral-40: var(--wa-color-orange-40);\n    --wa-color-neutral-30: var(--wa-color-orange-30);\n    --wa-color-neutral-20: var(--wa-color-orange-20);\n    --wa-color-neutral-10: var(--wa-color-orange-10);\n    --wa-color-neutral-05: var(--wa-color-orange-05);\n    --wa-color-neutral: var(--wa-color-orange);\n    --wa-color-neutral-on: var(--wa-color-orange-on);\n  }\n\n  .wa-neutral-yellow {\n    --wa-color-neutral-95: var(--wa-color-yellow-95);\n    --wa-color-neutral-90: var(--wa-color-yellow-90);\n    --wa-color-neutral-80: var(--wa-color-yellow-80);\n    --wa-color-neutral-70: var(--wa-color-yellow-70);\n    --wa-color-neutral-60: var(--wa-color-yellow-60);\n    --wa-color-neutral-50: var(--wa-color-yellow-50);\n    --wa-color-neutral-40: var(--wa-color-yellow-40);\n    --wa-color-neutral-30: var(--wa-color-yellow-30);\n    --wa-color-neutral-20: var(--wa-color-yellow-20);\n    --wa-color-neutral-10: var(--wa-color-yellow-10);\n    --wa-color-neutral-05: var(--wa-color-yellow-05);\n    --wa-color-neutral: var(--wa-color-yellow);\n    --wa-color-neutral-on: var(--wa-color-yellow-on);\n  }\n\n  .wa-neutral-green {\n    --wa-color-neutral-95: var(--wa-color-green-95);\n    --wa-color-neutral-90: var(--wa-color-green-90);\n    --wa-color-neutral-80: var(--wa-color-green-80);\n    --wa-color-neutral-70: var(--wa-color-green-70);\n    --wa-color-neutral-60: var(--wa-color-green-60);\n    --wa-color-neutral-50: var(--wa-color-green-50);\n    --wa-color-neutral-40: var(--wa-color-green-40);\n    --wa-color-neutral-30: var(--wa-color-green-30);\n    --wa-color-neutral-20: var(--wa-color-green-20);\n    --wa-color-neutral-10: var(--wa-color-green-10);\n    --wa-color-neutral-05: var(--wa-color-green-05);\n    --wa-color-neutral: var(--wa-color-green);\n    --wa-color-neutral-on: var(--wa-color-green-on);\n  }\n\n  .wa-neutral-cyan {\n    --wa-color-neutral-95: var(--wa-color-cyan-95);\n    --wa-color-neutral-90: var(--wa-color-cyan-90);\n    --wa-color-neutral-80: var(--wa-color-cyan-80);\n    --wa-color-neutral-70: var(--wa-color-cyan-70);\n    --wa-color-neutral-60: var(--wa-color-cyan-60);\n    --wa-color-neutral-50: var(--wa-color-cyan-50);\n    --wa-color-neutral-40: var(--wa-color-cyan-40);\n    --wa-color-neutral-30: var(--wa-color-cyan-30);\n    --wa-color-neutral-20: var(--wa-color-cyan-20);\n    --wa-color-neutral-10: var(--wa-color-cyan-10);\n    --wa-color-neutral-05: var(--wa-color-cyan-05);\n    --wa-color-neutral: var(--wa-color-cyan);\n    --wa-color-neutral-on: var(--wa-color-cyan-on);\n  }\n\n  .wa-neutral-blue {\n    --wa-color-neutral-95: var(--wa-color-blue-95);\n    --wa-color-neutral-90: var(--wa-color-blue-90);\n    --wa-color-neutral-80: var(--wa-color-blue-80);\n    --wa-color-neutral-70: var(--wa-color-blue-70);\n    --wa-color-neutral-60: var(--wa-color-blue-60);\n    --wa-color-neutral-50: var(--wa-color-blue-50);\n    --wa-color-neutral-40: var(--wa-color-blue-40);\n    --wa-color-neutral-30: var(--wa-color-blue-30);\n    --wa-color-neutral-20: var(--wa-color-blue-20);\n    --wa-color-neutral-10: var(--wa-color-blue-10);\n    --wa-color-neutral-05: var(--wa-color-blue-05);\n    --wa-color-neutral: var(--wa-color-blue);\n    --wa-color-neutral-on: var(--wa-color-blue-on);\n  }\n\n  .wa-neutral-indigo {\n    --wa-color-neutral-95: var(--wa-color-indigo-95);\n    --wa-color-neutral-90: var(--wa-color-indigo-90);\n    --wa-color-neutral-80: var(--wa-color-indigo-80);\n    --wa-color-neutral-70: var(--wa-color-indigo-70);\n    --wa-color-neutral-60: var(--wa-color-indigo-60);\n    --wa-color-neutral-50: var(--wa-color-indigo-50);\n    --wa-color-neutral-40: var(--wa-color-indigo-40);\n    --wa-color-neutral-30: var(--wa-color-indigo-30);\n    --wa-color-neutral-20: var(--wa-color-indigo-20);\n    --wa-color-neutral-10: var(--wa-color-indigo-10);\n    --wa-color-neutral-05: var(--wa-color-indigo-05);\n    --wa-color-neutral: var(--wa-color-indigo);\n    --wa-color-neutral-on: var(--wa-color-indigo-on);\n  }\n\n  .wa-neutral-purple {\n    --wa-color-neutral-95: var(--wa-color-purple-95);\n    --wa-color-neutral-90: var(--wa-color-purple-90);\n    --wa-color-neutral-80: var(--wa-color-purple-80);\n    --wa-color-neutral-70: var(--wa-color-purple-70);\n    --wa-color-neutral-60: var(--wa-color-purple-60);\n    --wa-color-neutral-50: var(--wa-color-purple-50);\n    --wa-color-neutral-40: var(--wa-color-purple-40);\n    --wa-color-neutral-30: var(--wa-color-purple-30);\n    --wa-color-neutral-20: var(--wa-color-purple-20);\n    --wa-color-neutral-10: var(--wa-color-purple-10);\n    --wa-color-neutral-05: var(--wa-color-purple-05);\n    --wa-color-neutral: var(--wa-color-purple);\n    --wa-color-neutral-on: var(--wa-color-purple-on);\n  }\n\n  .wa-neutral-pink {\n    --wa-color-neutral-95: var(--wa-color-pink-95);\n    --wa-color-neutral-90: var(--wa-color-pink-90);\n    --wa-color-neutral-80: var(--wa-color-pink-80);\n    --wa-color-neutral-70: var(--wa-color-pink-70);\n    --wa-color-neutral-60: var(--wa-color-pink-60);\n    --wa-color-neutral-50: var(--wa-color-pink-50);\n    --wa-color-neutral-40: var(--wa-color-pink-40);\n    --wa-color-neutral-30: var(--wa-color-pink-30);\n    --wa-color-neutral-20: var(--wa-color-pink-20);\n    --wa-color-neutral-10: var(--wa-color-pink-10);\n    --wa-color-neutral-05: var(--wa-color-pink-05);\n    --wa-color-neutral: var(--wa-color-pink);\n    --wa-color-neutral-on: var(--wa-color-pink-on);\n  }\n}\n\n@layer wa-color-variant {\n  :where(:root), /* default */\n  .wa-success-green {\n    --wa-color-success-95: var(--wa-color-green-95);\n    --wa-color-success-90: var(--wa-color-green-90);\n    --wa-color-success-80: var(--wa-color-green-80);\n    --wa-color-success-70: var(--wa-color-green-70);\n    --wa-color-success-60: var(--wa-color-green-60);\n    --wa-color-success-50: var(--wa-color-green-50);\n    --wa-color-success-40: var(--wa-color-green-40);\n    --wa-color-success-30: var(--wa-color-green-30);\n    --wa-color-success-20: var(--wa-color-green-20);\n    --wa-color-success-10: var(--wa-color-green-10);\n    --wa-color-success-05: var(--wa-color-green-05);\n    --wa-color-success: var(--wa-color-green);\n    --wa-color-success-on: var(--wa-color-green-on);\n  }\n\n  .wa-success-red {\n    --wa-color-success-95: var(--wa-color-red-95);\n    --wa-color-success-90: var(--wa-color-red-90);\n    --wa-color-success-80: var(--wa-color-red-80);\n    --wa-color-success-70: var(--wa-color-red-70);\n    --wa-color-success-60: var(--wa-color-red-60);\n    --wa-color-success-50: var(--wa-color-red-50);\n    --wa-color-success-40: var(--wa-color-red-40);\n    --wa-color-success-30: var(--wa-color-red-30);\n    --wa-color-success-20: var(--wa-color-red-20);\n    --wa-color-success-10: var(--wa-color-red-10);\n    --wa-color-success-05: var(--wa-color-red-05);\n    --wa-color-success: var(--wa-color-red);\n    --wa-color-success-on: var(--wa-color-red-on);\n  }\n\n  .wa-success-orange {\n    --wa-color-success-95: var(--wa-color-orange-95);\n    --wa-color-success-90: var(--wa-color-orange-90);\n    --wa-color-success-80: var(--wa-color-orange-80);\n    --wa-color-success-70: var(--wa-color-orange-70);\n    --wa-color-success-60: var(--wa-color-orange-60);\n    --wa-color-success-50: var(--wa-color-orange-50);\n    --wa-color-success-40: var(--wa-color-orange-40);\n    --wa-color-success-30: var(--wa-color-orange-30);\n    --wa-color-success-20: var(--wa-color-orange-20);\n    --wa-color-success-10: var(--wa-color-orange-10);\n    --wa-color-success-05: var(--wa-color-orange-05);\n    --wa-color-success: var(--wa-color-orange);\n    --wa-color-success-on: var(--wa-color-orange-on);\n  }\n\n  .wa-success-yellow {\n    --wa-color-success-95: var(--wa-color-yellow-95);\n    --wa-color-success-90: var(--wa-color-yellow-90);\n    --wa-color-success-80: var(--wa-color-yellow-80);\n    --wa-color-success-70: var(--wa-color-yellow-70);\n    --wa-color-success-60: var(--wa-color-yellow-60);\n    --wa-color-success-50: var(--wa-color-yellow-50);\n    --wa-color-success-40: var(--wa-color-yellow-40);\n    --wa-color-success-30: var(--wa-color-yellow-30);\n    --wa-color-success-20: var(--wa-color-yellow-20);\n    --wa-color-success-10: var(--wa-color-yellow-10);\n    --wa-color-success-05: var(--wa-color-yellow-05);\n    --wa-color-success: var(--wa-color-yellow);\n    --wa-color-success-on: var(--wa-color-yellow-on);\n  }\n\n  .wa-success-cyan {\n    --wa-color-success-95: var(--wa-color-cyan-95);\n    --wa-color-success-90: var(--wa-color-cyan-90);\n    --wa-color-success-80: var(--wa-color-cyan-80);\n    --wa-color-success-70: var(--wa-color-cyan-70);\n    --wa-color-success-60: var(--wa-color-cyan-60);\n    --wa-color-success-50: var(--wa-color-cyan-50);\n    --wa-color-success-40: var(--wa-color-cyan-40);\n    --wa-color-success-30: var(--wa-color-cyan-30);\n    --wa-color-success-20: var(--wa-color-cyan-20);\n    --wa-color-success-10: var(--wa-color-cyan-10);\n    --wa-color-success-05: var(--wa-color-cyan-05);\n    --wa-color-success: var(--wa-color-cyan);\n    --wa-color-success-on: var(--wa-color-cyan-on);\n  }\n\n  .wa-success-blue {\n    --wa-color-success-95: var(--wa-color-blue-95);\n    --wa-color-success-90: var(--wa-color-blue-90);\n    --wa-color-success-80: var(--wa-color-blue-80);\n    --wa-color-success-70: var(--wa-color-blue-70);\n    --wa-color-success-60: var(--wa-color-blue-60);\n    --wa-color-success-50: var(--wa-color-blue-50);\n    --wa-color-success-40: var(--wa-color-blue-40);\n    --wa-color-success-30: var(--wa-color-blue-30);\n    --wa-color-success-20: var(--wa-color-blue-20);\n    --wa-color-success-10: var(--wa-color-blue-10);\n    --wa-color-success-05: var(--wa-color-blue-05);\n    --wa-color-success: var(--wa-color-blue);\n    --wa-color-success-on: var(--wa-color-blue-on);\n  }\n\n  .wa-success-indigo {\n    --wa-color-success-95: var(--wa-color-indigo-95);\n    --wa-color-success-90: var(--wa-color-indigo-90);\n    --wa-color-success-80: var(--wa-color-indigo-80);\n    --wa-color-success-70: var(--wa-color-indigo-70);\n    --wa-color-success-60: var(--wa-color-indigo-60);\n    --wa-color-success-50: var(--wa-color-indigo-50);\n    --wa-color-success-40: var(--wa-color-indigo-40);\n    --wa-color-success-30: var(--wa-color-indigo-30);\n    --wa-color-success-20: var(--wa-color-indigo-20);\n    --wa-color-success-10: var(--wa-color-indigo-10);\n    --wa-color-success-05: var(--wa-color-indigo-05);\n    --wa-color-success: var(--wa-color-indigo);\n    --wa-color-success-on: var(--wa-color-indigo-on);\n  }\n\n  .wa-success-purple {\n    --wa-color-success-95: var(--wa-color-purple-95);\n    --wa-color-success-90: var(--wa-color-purple-90);\n    --wa-color-success-80: var(--wa-color-purple-80);\n    --wa-color-success-70: var(--wa-color-purple-70);\n    --wa-color-success-60: var(--wa-color-purple-60);\n    --wa-color-success-50: var(--wa-color-purple-50);\n    --wa-color-success-40: var(--wa-color-purple-40);\n    --wa-color-success-30: var(--wa-color-purple-30);\n    --wa-color-success-20: var(--wa-color-purple-20);\n    --wa-color-success-10: var(--wa-color-purple-10);\n    --wa-color-success-05: var(--wa-color-purple-05);\n    --wa-color-success: var(--wa-color-purple);\n    --wa-color-success-on: var(--wa-color-purple-on);\n  }\n\n  .wa-success-pink {\n    --wa-color-success-95: var(--wa-color-pink-95);\n    --wa-color-success-90: var(--wa-color-pink-90);\n    --wa-color-success-80: var(--wa-color-pink-80);\n    --wa-color-success-70: var(--wa-color-pink-70);\n    --wa-color-success-60: var(--wa-color-pink-60);\n    --wa-color-success-50: var(--wa-color-pink-50);\n    --wa-color-success-40: var(--wa-color-pink-40);\n    --wa-color-success-30: var(--wa-color-pink-30);\n    --wa-color-success-20: var(--wa-color-pink-20);\n    --wa-color-success-10: var(--wa-color-pink-10);\n    --wa-color-success-05: var(--wa-color-pink-05);\n    --wa-color-success: var(--wa-color-pink);\n    --wa-color-success-on: var(--wa-color-pink-on);\n  }\n\n  .wa-success-gray {\n    --wa-color-success-95: var(--wa-color-gray-95);\n    --wa-color-success-90: var(--wa-color-gray-90);\n    --wa-color-success-80: var(--wa-color-gray-80);\n    --wa-color-success-70: var(--wa-color-gray-70);\n    --wa-color-success-60: var(--wa-color-gray-60);\n    --wa-color-success-50: var(--wa-color-gray-50);\n    --wa-color-success-40: var(--wa-color-gray-40);\n    --wa-color-success-30: var(--wa-color-gray-30);\n    --wa-color-success-20: var(--wa-color-gray-20);\n    --wa-color-success-10: var(--wa-color-gray-10);\n    --wa-color-success-05: var(--wa-color-gray-05);\n    --wa-color-success: var(--wa-color-gray);\n    --wa-color-success-on: var(--wa-color-gray-on);\n  }\n}\n\n@layer wa-color-variant {\n  :where(:root), /* default */\n  .wa-warning-yellow {\n    --wa-color-warning-95: var(--wa-color-yellow-95);\n    --wa-color-warning-90: var(--wa-color-yellow-90);\n    --wa-color-warning-80: var(--wa-color-yellow-80);\n    --wa-color-warning-70: var(--wa-color-yellow-70);\n    --wa-color-warning-60: var(--wa-color-yellow-60);\n    --wa-color-warning-50: var(--wa-color-yellow-50);\n    --wa-color-warning-40: var(--wa-color-yellow-40);\n    --wa-color-warning-30: var(--wa-color-yellow-30);\n    --wa-color-warning-20: var(--wa-color-yellow-20);\n    --wa-color-warning-10: var(--wa-color-yellow-10);\n    --wa-color-warning-05: var(--wa-color-yellow-05);\n    --wa-color-warning: var(--wa-color-yellow);\n    --wa-color-warning-on: var(--wa-color-yellow-on);\n  }\n\n  .wa-warning-red {\n    --wa-color-warning-95: var(--wa-color-red-95);\n    --wa-color-warning-90: var(--wa-color-red-90);\n    --wa-color-warning-80: var(--wa-color-red-80);\n    --wa-color-warning-70: var(--wa-color-red-70);\n    --wa-color-warning-60: var(--wa-color-red-60);\n    --wa-color-warning-50: var(--wa-color-red-50);\n    --wa-color-warning-40: var(--wa-color-red-40);\n    --wa-color-warning-30: var(--wa-color-red-30);\n    --wa-color-warning-20: var(--wa-color-red-20);\n    --wa-color-warning-10: var(--wa-color-red-10);\n    --wa-color-warning-05: var(--wa-color-red-05);\n    --wa-color-warning: var(--wa-color-red);\n    --wa-color-warning-on: var(--wa-color-red-on);\n  }\n\n  .wa-warning-orange {\n    --wa-color-warning-95: var(--wa-color-orange-95);\n    --wa-color-warning-90: var(--wa-color-orange-90);\n    --wa-color-warning-80: var(--wa-color-orange-80);\n    --wa-color-warning-70: var(--wa-color-orange-70);\n    --wa-color-warning-60: var(--wa-color-orange-60);\n    --wa-color-warning-50: var(--wa-color-orange-50);\n    --wa-color-warning-40: var(--wa-color-orange-40);\n    --wa-color-warning-30: var(--wa-color-orange-30);\n    --wa-color-warning-20: var(--wa-color-orange-20);\n    --wa-color-warning-10: var(--wa-color-orange-10);\n    --wa-color-warning-05: var(--wa-color-orange-05);\n    --wa-color-warning: var(--wa-color-orange);\n    --wa-color-warning-on: var(--wa-color-orange-on);\n  }\n\n  .wa-warning-green {\n    --wa-color-warning-95: var(--wa-color-green-95);\n    --wa-color-warning-90: var(--wa-color-green-90);\n    --wa-color-warning-80: var(--wa-color-green-80);\n    --wa-color-warning-70: var(--wa-color-green-70);\n    --wa-color-warning-60: var(--wa-color-green-60);\n    --wa-color-warning-50: var(--wa-color-green-50);\n    --wa-color-warning-40: var(--wa-color-green-40);\n    --wa-color-warning-30: var(--wa-color-green-30);\n    --wa-color-warning-20: var(--wa-color-green-20);\n    --wa-color-warning-10: var(--wa-color-green-10);\n    --wa-color-warning-05: var(--wa-color-green-05);\n    --wa-color-warning: var(--wa-color-green);\n    --wa-color-warning-on: var(--wa-color-green-on);\n  }\n\n  .wa-warning-cyan {\n    --wa-color-warning-95: var(--wa-color-cyan-95);\n    --wa-color-warning-90: var(--wa-color-cyan-90);\n    --wa-color-warning-80: var(--wa-color-cyan-80);\n    --wa-color-warning-70: var(--wa-color-cyan-70);\n    --wa-color-warning-60: var(--wa-color-cyan-60);\n    --wa-color-warning-50: var(--wa-color-cyan-50);\n    --wa-color-warning-40: var(--wa-color-cyan-40);\n    --wa-color-warning-30: var(--wa-color-cyan-30);\n    --wa-color-warning-20: var(--wa-color-cyan-20);\n    --wa-color-warning-10: var(--wa-color-cyan-10);\n    --wa-color-warning-05: var(--wa-color-cyan-05);\n    --wa-color-warning: var(--wa-color-cyan);\n    --wa-color-warning-on: var(--wa-color-cyan-on);\n  }\n\n  .wa-warning-blue {\n    --wa-color-warning-95: var(--wa-color-blue-95);\n    --wa-color-warning-90: var(--wa-color-blue-90);\n    --wa-color-warning-80: var(--wa-color-blue-80);\n    --wa-color-warning-70: var(--wa-color-blue-70);\n    --wa-color-warning-60: var(--wa-color-blue-60);\n    --wa-color-warning-50: var(--wa-color-blue-50);\n    --wa-color-warning-40: var(--wa-color-blue-40);\n    --wa-color-warning-30: var(--wa-color-blue-30);\n    --wa-color-warning-20: var(--wa-color-blue-20);\n    --wa-color-warning-10: var(--wa-color-blue-10);\n    --wa-color-warning-05: var(--wa-color-blue-05);\n    --wa-color-warning: var(--wa-color-blue);\n    --wa-color-warning-on: var(--wa-color-blue-on);\n  }\n\n  .wa-warning-indigo {\n    --wa-color-warning-95: var(--wa-color-indigo-95);\n    --wa-color-warning-90: var(--wa-color-indigo-90);\n    --wa-color-warning-80: var(--wa-color-indigo-80);\n    --wa-color-warning-70: var(--wa-color-indigo-70);\n    --wa-color-warning-60: var(--wa-color-indigo-60);\n    --wa-color-warning-50: var(--wa-color-indigo-50);\n    --wa-color-warning-40: var(--wa-color-indigo-40);\n    --wa-color-warning-30: var(--wa-color-indigo-30);\n    --wa-color-warning-20: var(--wa-color-indigo-20);\n    --wa-color-warning-10: var(--wa-color-indigo-10);\n    --wa-color-warning-05: var(--wa-color-indigo-05);\n    --wa-color-warning: var(--wa-color-indigo);\n    --wa-color-warning-on: var(--wa-color-indigo-on);\n  }\n\n  .wa-warning-purple {\n    --wa-color-warning-95: var(--wa-color-purple-95);\n    --wa-color-warning-90: var(--wa-color-purple-90);\n    --wa-color-warning-80: var(--wa-color-purple-80);\n    --wa-color-warning-70: var(--wa-color-purple-70);\n    --wa-color-warning-60: var(--wa-color-purple-60);\n    --wa-color-warning-50: var(--wa-color-purple-50);\n    --wa-color-warning-40: var(--wa-color-purple-40);\n    --wa-color-warning-30: var(--wa-color-purple-30);\n    --wa-color-warning-20: var(--wa-color-purple-20);\n    --wa-color-warning-10: var(--wa-color-purple-10);\n    --wa-color-warning-05: var(--wa-color-purple-05);\n    --wa-color-warning: var(--wa-color-purple);\n    --wa-color-warning-on: var(--wa-color-purple-on);\n  }\n\n  .wa-warning-pink {\n    --wa-color-warning-95: var(--wa-color-pink-95);\n    --wa-color-warning-90: var(--wa-color-pink-90);\n    --wa-color-warning-80: var(--wa-color-pink-80);\n    --wa-color-warning-70: var(--wa-color-pink-70);\n    --wa-color-warning-60: var(--wa-color-pink-60);\n    --wa-color-warning-50: var(--wa-color-pink-50);\n    --wa-color-warning-40: var(--wa-color-pink-40);\n    --wa-color-warning-30: var(--wa-color-pink-30);\n    --wa-color-warning-20: var(--wa-color-pink-20);\n    --wa-color-warning-10: var(--wa-color-pink-10);\n    --wa-color-warning-05: var(--wa-color-pink-05);\n    --wa-color-warning: var(--wa-color-pink);\n    --wa-color-warning-on: var(--wa-color-pink-on);\n  }\n\n  .wa-warning-gray {\n    --wa-color-warning-95: var(--wa-color-gray-95);\n    --wa-color-warning-90: var(--wa-color-gray-90);\n    --wa-color-warning-80: var(--wa-color-gray-80);\n    --wa-color-warning-70: var(--wa-color-gray-70);\n    --wa-color-warning-60: var(--wa-color-gray-60);\n    --wa-color-warning-50: var(--wa-color-gray-50);\n    --wa-color-warning-40: var(--wa-color-gray-40);\n    --wa-color-warning-30: var(--wa-color-gray-30);\n    --wa-color-warning-20: var(--wa-color-gray-20);\n    --wa-color-warning-10: var(--wa-color-gray-10);\n    --wa-color-warning-05: var(--wa-color-gray-05);\n    --wa-color-warning: var(--wa-color-gray);\n    --wa-color-warning-on: var(--wa-color-gray-on);\n  }\n}\n\n@layer wa-color-variant {\n  :where(:root), /* default */\n  .wa-danger-red {\n    --wa-color-danger-95: var(--wa-color-red-95);\n    --wa-color-danger-90: var(--wa-color-red-90);\n    --wa-color-danger-80: var(--wa-color-red-80);\n    --wa-color-danger-70: var(--wa-color-red-70);\n    --wa-color-danger-60: var(--wa-color-red-60);\n    --wa-color-danger-50: var(--wa-color-red-50);\n    --wa-color-danger-40: var(--wa-color-red-40);\n    --wa-color-danger-30: var(--wa-color-red-30);\n    --wa-color-danger-20: var(--wa-color-red-20);\n    --wa-color-danger-10: var(--wa-color-red-10);\n    --wa-color-danger-05: var(--wa-color-red-05);\n    --wa-color-danger: var(--wa-color-red);\n    --wa-color-danger-on: var(--wa-color-red-on);\n  }\n\n  .wa-danger-orange {\n    --wa-color-danger-95: var(--wa-color-orange-95);\n    --wa-color-danger-90: var(--wa-color-orange-90);\n    --wa-color-danger-80: var(--wa-color-orange-80);\n    --wa-color-danger-70: var(--wa-color-orange-70);\n    --wa-color-danger-60: var(--wa-color-orange-60);\n    --wa-color-danger-50: var(--wa-color-orange-50);\n    --wa-color-danger-40: var(--wa-color-orange-40);\n    --wa-color-danger-30: var(--wa-color-orange-30);\n    --wa-color-danger-20: var(--wa-color-orange-20);\n    --wa-color-danger-10: var(--wa-color-orange-10);\n    --wa-color-danger-05: var(--wa-color-orange-05);\n    --wa-color-danger: var(--wa-color-orange);\n    --wa-color-danger-on: var(--wa-color-orange-on);\n  }\n\n  .wa-danger-yellow {\n    --wa-color-danger-95: var(--wa-color-yellow-95);\n    --wa-color-danger-90: var(--wa-color-yellow-90);\n    --wa-color-danger-80: var(--wa-color-yellow-80);\n    --wa-color-danger-70: var(--wa-color-yellow-70);\n    --wa-color-danger-60: var(--wa-color-yellow-60);\n    --wa-color-danger-50: var(--wa-color-yellow-50);\n    --wa-color-danger-40: var(--wa-color-yellow-40);\n    --wa-color-danger-30: var(--wa-color-yellow-30);\n    --wa-color-danger-20: var(--wa-color-yellow-20);\n    --wa-color-danger-10: var(--wa-color-yellow-10);\n    --wa-color-danger-05: var(--wa-color-yellow-05);\n    --wa-color-danger: var(--wa-color-yellow);\n    --wa-color-danger-on: var(--wa-color-yellow-on);\n  }\n\n  .wa-danger-green {\n    --wa-color-danger-95: var(--wa-color-green-95);\n    --wa-color-danger-90: var(--wa-color-green-90);\n    --wa-color-danger-80: var(--wa-color-green-80);\n    --wa-color-danger-70: var(--wa-color-green-70);\n    --wa-color-danger-60: var(--wa-color-green-60);\n    --wa-color-danger-50: var(--wa-color-green-50);\n    --wa-color-danger-40: var(--wa-color-green-40);\n    --wa-color-danger-30: var(--wa-color-green-30);\n    --wa-color-danger-20: var(--wa-color-green-20);\n    --wa-color-danger-10: var(--wa-color-green-10);\n    --wa-color-danger-05: var(--wa-color-green-05);\n    --wa-color-danger: var(--wa-color-green);\n    --wa-color-danger-on: var(--wa-color-green-on);\n  }\n\n  .wa-danger-cyan {\n    --wa-color-danger-95: var(--wa-color-cyan-95);\n    --wa-color-danger-90: var(--wa-color-cyan-90);\n    --wa-color-danger-80: var(--wa-color-cyan-80);\n    --wa-color-danger-70: var(--wa-color-cyan-70);\n    --wa-color-danger-60: var(--wa-color-cyan-60);\n    --wa-color-danger-50: var(--wa-color-cyan-50);\n    --wa-color-danger-40: var(--wa-color-cyan-40);\n    --wa-color-danger-30: var(--wa-color-cyan-30);\n    --wa-color-danger-20: var(--wa-color-cyan-20);\n    --wa-color-danger-10: var(--wa-color-cyan-10);\n    --wa-color-danger-05: var(--wa-color-cyan-05);\n    --wa-color-danger: var(--wa-color-cyan);\n    --wa-color-danger-on: var(--wa-color-cyan-on);\n  }\n\n  .wa-danger-blue {\n    --wa-color-danger-95: var(--wa-color-blue-95);\n    --wa-color-danger-90: var(--wa-color-blue-90);\n    --wa-color-danger-80: var(--wa-color-blue-80);\n    --wa-color-danger-70: var(--wa-color-blue-70);\n    --wa-color-danger-60: var(--wa-color-blue-60);\n    --wa-color-danger-50: var(--wa-color-blue-50);\n    --wa-color-danger-40: var(--wa-color-blue-40);\n    --wa-color-danger-30: var(--wa-color-blue-30);\n    --wa-color-danger-20: var(--wa-color-blue-20);\n    --wa-color-danger-10: var(--wa-color-blue-10);\n    --wa-color-danger-05: var(--wa-color-blue-05);\n    --wa-color-danger: var(--wa-color-blue);\n    --wa-color-danger-on: var(--wa-color-blue-on);\n  }\n\n  .wa-danger-indigo {\n    --wa-color-danger-95: var(--wa-color-indigo-95);\n    --wa-color-danger-90: var(--wa-color-indigo-90);\n    --wa-color-danger-80: var(--wa-color-indigo-80);\n    --wa-color-danger-70: var(--wa-color-indigo-70);\n    --wa-color-danger-60: var(--wa-color-indigo-60);\n    --wa-color-danger-50: var(--wa-color-indigo-50);\n    --wa-color-danger-40: var(--wa-color-indigo-40);\n    --wa-color-danger-30: var(--wa-color-indigo-30);\n    --wa-color-danger-20: var(--wa-color-indigo-20);\n    --wa-color-danger-10: var(--wa-color-indigo-10);\n    --wa-color-danger-05: var(--wa-color-indigo-05);\n    --wa-color-danger: var(--wa-color-indigo);\n    --wa-color-danger-on: var(--wa-color-indigo-on);\n  }\n\n  .wa-danger-purple {\n    --wa-color-danger-95: var(--wa-color-purple-95);\n    --wa-color-danger-90: var(--wa-color-purple-90);\n    --wa-color-danger-80: var(--wa-color-purple-80);\n    --wa-color-danger-70: var(--wa-color-purple-70);\n    --wa-color-danger-60: var(--wa-color-purple-60);\n    --wa-color-danger-50: var(--wa-color-purple-50);\n    --wa-color-danger-40: var(--wa-color-purple-40);\n    --wa-color-danger-30: var(--wa-color-purple-30);\n    --wa-color-danger-20: var(--wa-color-purple-20);\n    --wa-color-danger-10: var(--wa-color-purple-10);\n    --wa-color-danger-05: var(--wa-color-purple-05);\n    --wa-color-danger: var(--wa-color-purple);\n    --wa-color-danger-on: var(--wa-color-purple-on);\n  }\n\n  .wa-danger-pink {\n    --wa-color-danger-95: var(--wa-color-pink-95);\n    --wa-color-danger-90: var(--wa-color-pink-90);\n    --wa-color-danger-80: var(--wa-color-pink-80);\n    --wa-color-danger-70: var(--wa-color-pink-70);\n    --wa-color-danger-60: var(--wa-color-pink-60);\n    --wa-color-danger-50: var(--wa-color-pink-50);\n    --wa-color-danger-40: var(--wa-color-pink-40);\n    --wa-color-danger-30: var(--wa-color-pink-30);\n    --wa-color-danger-20: var(--wa-color-pink-20);\n    --wa-color-danger-10: var(--wa-color-pink-10);\n    --wa-color-danger-05: var(--wa-color-pink-05);\n    --wa-color-danger: var(--wa-color-pink);\n    --wa-color-danger-on: var(--wa-color-pink-on);\n  }\n\n  .wa-danger-gray {\n    --wa-color-danger-95: var(--wa-color-gray-95);\n    --wa-color-danger-90: var(--wa-color-gray-90);\n    --wa-color-danger-80: var(--wa-color-gray-80);\n    --wa-color-danger-70: var(--wa-color-gray-70);\n    --wa-color-danger-60: var(--wa-color-gray-60);\n    --wa-color-danger-50: var(--wa-color-gray-50);\n    --wa-color-danger-40: var(--wa-color-gray-40);\n    --wa-color-danger-30: var(--wa-color-gray-30);\n    --wa-color-danger-20: var(--wa-color-gray-20);\n    --wa-color-danger-10: var(--wa-color-gray-10);\n    --wa-color-danger-05: var(--wa-color-gray-05);\n    --wa-color-danger: var(--wa-color-gray);\n    --wa-color-danger-on: var(--wa-color-gray-on);\n  }\n}\n\n@layer wa-theme {\n  :where(:root),\n  .wa-theme-default,\n  .wa-light,\n  .wa-dark .wa-invert,\n  .wa-light .wa-theme-default,\n  .wa-dark .wa-theme-default.wa-invert,\n  .wa-dark .wa-theme-default .wa-invert {\n    /* #region Colors (Light) ~~~~~~~~~~~~~~~~~~~~~ */\n    color-scheme: light;\n    color: var(--wa-color-text-normal);\n\n    --wa-color-surface-raised: white;\n    --wa-color-surface-default: white;\n    --wa-color-surface-lowered: var(--wa-color-neutral-95);\n    --wa-color-surface-border: var(--wa-color-neutral-90);\n\n    --wa-color-text-normal: var(--wa-color-neutral-10);\n    --wa-color-text-quiet: var(--wa-color-neutral-40);\n    --wa-color-text-link: var(--wa-color-brand-40);\n\n    --wa-color-overlay-modal: color-mix(in oklab, var(--wa-color-neutral-05) 50%, transparent);\n    --wa-color-overlay-inline: color-mix(in oklab, var(--wa-color-neutral-80) 25%, transparent);\n\n    --wa-color-shadow: color-mix(\n      in oklab,\n      var(--wa-color-neutral-05) calc(var(--wa-shadow-blur-scale) * 4% + 8%),\n      transparent\n    );\n\n    --wa-color-focus: var(--wa-color-brand-60);\n\n    --wa-color-mix-hover: black 10%;\n    --wa-color-mix-active: black 20%;\n\n    --wa-color-brand-fill-quiet: var(--wa-color-brand-95);\n    --wa-color-brand-fill-normal: var(--wa-color-brand-90);\n    --wa-color-brand-fill-loud: var(--wa-color-brand-50);\n    --wa-color-brand-border-quiet: var(--wa-color-brand-90);\n    --wa-color-brand-border-normal: var(--wa-color-brand-80);\n    --wa-color-brand-border-loud: var(--wa-color-brand-60);\n    --wa-color-brand-on-quiet: var(--wa-color-brand-40);\n    --wa-color-brand-on-normal: var(--wa-color-brand-30);\n    --wa-color-brand-on-loud: white;\n\n    --wa-color-success-fill-quiet: var(--wa-color-success-95);\n    --wa-color-success-fill-normal: var(--wa-color-success-90);\n    --wa-color-success-fill-loud: var(--wa-color-success-50);\n    --wa-color-success-border-quiet: var(--wa-color-success-90);\n    --wa-color-success-border-normal: var(--wa-color-success-80);\n    --wa-color-success-border-loud: var(--wa-color-success-60);\n    --wa-color-success-on-quiet: var(--wa-color-success-40);\n    --wa-color-success-on-normal: var(--wa-color-success-30);\n    --wa-color-success-on-loud: white;\n\n    --wa-color-warning-fill-quiet: var(--wa-color-warning-95);\n    --wa-color-warning-fill-normal: var(--wa-color-warning-90);\n    --wa-color-warning-fill-loud: var(--wa-color-warning-50);\n    --wa-color-warning-border-quiet: var(--wa-color-warning-90);\n    --wa-color-warning-border-normal: var(--wa-color-warning-80);\n    --wa-color-warning-border-loud: var(--wa-color-warning-60);\n    --wa-color-warning-on-quiet: var(--wa-color-warning-40);\n    --wa-color-warning-on-normal: var(--wa-color-warning-30);\n    --wa-color-warning-on-loud: white;\n\n    --wa-color-danger-fill-quiet: var(--wa-color-danger-95);\n    --wa-color-danger-fill-normal: var(--wa-color-danger-90);\n    --wa-color-danger-fill-loud: var(--wa-color-danger-50);\n    --wa-color-danger-border-quiet: var(--wa-color-danger-90);\n    --wa-color-danger-border-normal: var(--wa-color-danger-80);\n    --wa-color-danger-border-loud: var(--wa-color-danger-60);\n    --wa-color-danger-on-quiet: var(--wa-color-danger-40);\n    --wa-color-danger-on-normal: var(--wa-color-danger-30);\n    --wa-color-danger-on-loud: white;\n\n    --wa-color-neutral-fill-quiet: var(--wa-color-neutral-95);\n    --wa-color-neutral-fill-normal: var(--wa-color-neutral-90);\n    --wa-color-neutral-fill-loud: var(--wa-color-neutral-20);\n    --wa-color-neutral-border-quiet: var(--wa-color-neutral-90);\n    --wa-color-neutral-border-normal: var(--wa-color-neutral-80);\n    --wa-color-neutral-border-loud: var(--wa-color-neutral-60);\n    --wa-color-neutral-on-quiet: var(--wa-color-neutral-40);\n    --wa-color-neutral-on-normal: var(--wa-color-neutral-30);\n    --wa-color-neutral-on-loud: white;\n    /* #endregion */\n  }\n\n  .wa-dark,\n  .wa-invert,\n  .wa-dark .wa-theme-default,\n  .wa-light .wa-theme-default.wa-invert,\n  .wa-light .wa-theme-default .wa-invert {\n    /* #region Colors (Dark) ~~~~~~~~~~~~~~~~~~~~~~ */\n    color-scheme: dark;\n    color: var(--wa-color-text-normal);\n\n    --wa-color-surface-raised: var(--wa-color-neutral-10);\n    --wa-color-surface-default: var(--wa-color-neutral-05);\n    --wa-color-surface-lowered: color-mix(in oklab, var(--wa-color-surface-default), black 20%);\n    --wa-color-surface-border: var(--wa-color-neutral-20);\n\n    --wa-color-text-normal: var(--wa-color-neutral-95);\n    --wa-color-text-quiet: var(--wa-color-neutral-60);\n    --wa-color-text-link: var(--wa-color-brand-70);\n\n    --wa-color-overlay-modal: color-mix(in oklab, black 60%, transparent);\n    --wa-color-overlay-inline: color-mix(in oklab, var(--wa-color-neutral-50) 10%, transparent);\n\n    --wa-color-shadow: color-mix(\n      in oklab,\n      var(--wa-color-surface-lowered) calc(var(--wa-shadow-blur-scale) * 32% + 40%),\n      transparent\n    );\n\n    --wa-color-focus: var(--wa-color-brand-60);\n\n    --wa-color-mix-hover: black 8%;\n    --wa-color-mix-active: black 16%;\n\n    --wa-color-brand-fill-quiet: var(--wa-color-brand-10);\n    --wa-color-brand-fill-normal: var(--wa-color-brand-20);\n    --wa-color-brand-fill-loud: var(--wa-color-brand-50);\n    --wa-color-brand-border-quiet: var(--wa-color-brand-20);\n    --wa-color-brand-border-normal: var(--wa-color-brand-30);\n    --wa-color-brand-border-loud: var(--wa-color-brand-40);\n    --wa-color-brand-on-quiet: var(--wa-color-brand-60);\n    --wa-color-brand-on-normal: var(--wa-color-brand-70);\n    --wa-color-brand-on-loud: white;\n\n    --wa-color-success-fill-quiet: var(--wa-color-success-10);\n    --wa-color-success-fill-normal: var(--wa-color-success-20);\n    --wa-color-success-fill-loud: var(--wa-color-success-50);\n    --wa-color-success-border-quiet: var(--wa-color-success-20);\n    --wa-color-success-border-normal: var(--wa-color-success-30);\n    --wa-color-success-border-loud: var(--wa-color-success-40);\n    --wa-color-success-on-quiet: var(--wa-color-success-60);\n    --wa-color-success-on-normal: var(--wa-color-success-70);\n    --wa-color-success-on-loud: white;\n\n    --wa-color-warning-fill-quiet: var(--wa-color-warning-10);\n    --wa-color-warning-fill-normal: var(--wa-color-warning-20);\n    --wa-color-warning-fill-loud: var(--wa-color-warning-50);\n    --wa-color-warning-border-quiet: var(--wa-color-warning-20);\n    --wa-color-warning-border-normal: var(--wa-color-warning-30);\n    --wa-color-warning-border-loud: var(--wa-color-warning-40);\n    --wa-color-warning-on-quiet: var(--wa-color-warning-60);\n    --wa-color-warning-on-normal: var(--wa-color-warning-70);\n    --wa-color-warning-on-loud: white;\n\n    --wa-color-danger-fill-quiet: var(--wa-color-danger-10);\n    --wa-color-danger-fill-normal: var(--wa-color-danger-20);\n    --wa-color-danger-fill-loud: var(--wa-color-danger-50);\n    --wa-color-danger-border-quiet: var(--wa-color-danger-20);\n    --wa-color-danger-border-normal: var(--wa-color-danger-30);\n    --wa-color-danger-border-loud: var(--wa-color-danger-40);\n    --wa-color-danger-on-quiet: var(--wa-color-danger-60);\n    --wa-color-danger-on-normal: var(--wa-color-danger-70);\n    --wa-color-danger-on-loud: white;\n\n    --wa-color-neutral-fill-quiet: var(--wa-color-neutral-10);\n    --wa-color-neutral-fill-normal: var(--wa-color-neutral-20);\n    --wa-color-neutral-fill-loud: var(--wa-color-neutral-90);\n    --wa-color-neutral-border-quiet: var(--wa-color-neutral-20);\n    --wa-color-neutral-border-normal: var(--wa-color-neutral-30);\n    --wa-color-neutral-border-loud: var(--wa-color-neutral-40);\n    --wa-color-neutral-on-quiet: var(--wa-color-neutral-60);\n    --wa-color-neutral-on-normal: var(--wa-color-neutral-70);\n    --wa-color-neutral-on-loud: var(--wa-color-neutral-05);\n    /* #endregion */\n  }\n\n  :where(:root),\n  .wa-theme-default,\n  .wa-light,\n  .wa-dark,\n  .wa-invert {\n    font-family: var(--wa-font-family-body);\n\n    /* #region Fonts ~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */\n    --wa-font-family-body: ui-sans-serif, system-ui, sans-serif;\n    --wa-font-family-heading: var(--wa-font-family-body);\n    --wa-font-family-code: ui-monospace, monospace;\n    --wa-font-family-longform: ui-serif, serif;\n\n    /* Font sizes use a ratio of 1.125 to scale sizes proportionally.\n     * For larger font sizes, each size is twice 1.125x larger to maximize impact.\n     * Each value uses `rem` units and is rounded to the nearest whole pixel when rendered. */\n    --wa-font-size-scale: 1;\n    --wa-font-size-2xs: round(calc(var(--wa-font-size-xs) / 1.125), 1px); /* 11px */\n    --wa-font-size-xs: round(calc(var(--wa-font-size-s) / 1.125), 1px); /* 12px */\n    --wa-font-size-s: round(calc(var(--wa-font-size-m) / 1.125), 1px); /* 14px */\n    --wa-font-size-m: calc(1rem * var(--wa-font-size-scale)); /* 16px */\n    --wa-font-size-l: round(calc(var(--wa-font-size-m) * 1.125 * 1.125), 1px); /* 20px */\n    --wa-font-size-xl: round(calc(var(--wa-font-size-l) * 1.125 * 1.125), 1px); /* 25px */\n    --wa-font-size-2xl: round(calc(var(--wa-font-size-xl) * 1.125 * 1.125), 1px); /* 32px */\n    --wa-font-size-3xl: round(calc(var(--wa-font-size-2xl) * 1.125 * 1.125), 1px); /* 41px */\n    --wa-font-size-4xl: round(calc(var(--wa-font-size-3xl) * 1.125 * 1.125), 1px); /* 52px */\n\n    --wa-font-size-smaller: round(calc(1em / 1.125), 1px);\n    --wa-font-size-larger: round(calc(1em * 1.125 * 1.125), 1px);\n\n    --wa-font-weight-light: 300;\n    --wa-font-weight-normal: 400;\n    --wa-font-weight-semibold: 500;\n    --wa-font-weight-bold: 600;\n\n    --wa-font-weight-body: var(--wa-font-weight-normal);\n    --wa-font-weight-heading: var(--wa-font-weight-bold);\n    --wa-font-weight-code: var(--wa-font-weight-normal);\n    --wa-font-weight-longform: var(--wa-font-weight-normal);\n    --wa-font-weight-action: var(--wa-font-weight-semibold);\n\n    --wa-line-height-condensed: 1.2;\n    --wa-line-height-normal: 1.6;\n    --wa-line-height-expanded: 2;\n\n    --wa-link-decoration-default: underline color-mix(in oklab, currentColor 70%, transparent) dotted;\n    --wa-link-decoration-hover: underline;\n    /* #endregion */\n\n    /* #region Space ~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */\n    --wa-space-scale: 1;\n    --wa-space-3xs: calc(var(--wa-space-scale) * 0.125rem); /* 2px */\n    --wa-space-2xs: calc(var(--wa-space-scale) * 0.25rem); /* 4px */\n    --wa-space-xs: calc(var(--wa-space-scale) * 0.5rem); /* 8px */\n    --wa-space-s: calc(var(--wa-space-scale) * 0.75rem); /* 12px */\n    --wa-space-m: calc(var(--wa-space-scale) * 1rem); /* 16px */\n    --wa-space-l: calc(var(--wa-space-scale) * 1.5rem); /* 24px */\n    --wa-space-xl: calc(var(--wa-space-scale) * 2rem); /* 32px */\n    --wa-space-2xl: calc(var(--wa-space-scale) * 2.5rem); /* 40px */\n    --wa-space-3xl: calc(var(--wa-space-scale) * 3rem); /* 48px */\n    --wa-space-4xl: calc(var(--wa-space-scale) * 4rem); /* 64px */\n\n    --wa-content-spacing: var(--wa-space-l);\n    /* #endregion */\n\n    /* #region Borders ~~~~~~~~~~~~~~~~~~~~~~~~~~ */\n    --wa-border-style: solid;\n\n    --wa-border-width-scale: 1;\n    --wa-border-width-s: calc(var(--wa-border-width-scale) * 0.0625rem);\n    --wa-border-width-m: calc(var(--wa-border-width-scale) * 0.125rem);\n    --wa-border-width-l: calc(var(--wa-border-width-scale) * 0.1875rem);\n    /* #endregion */\n\n    /* #region Rounding ~~~~~~~~~~~~~~~~~~~~~~~~~ */\n    --wa-border-radius-scale: 1;\n    --wa-border-radius-s: calc(var(--wa-border-radius-scale) * 0.1875rem);\n    --wa-border-radius-m: calc(var(--wa-border-radius-scale) * 0.375rem);\n    --wa-border-radius-l: calc(var(--wa-border-radius-scale) * 0.75rem);\n\n    --wa-border-radius-pill: 9999px;\n    --wa-border-radius-circle: 50%;\n    --wa-border-radius-square: 0px;\n    /* #endregion */\n\n    /* #region Focus ~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */\n    --wa-focus-ring-style: solid;\n    --wa-focus-ring-width: 0.1875rem; /* 3px */\n    --wa-focus-ring: var(--wa-focus-ring-style) var(--wa-focus-ring-width) var(--wa-color-focus);\n    --wa-focus-ring-offset: 0.0625rem; /* 1px */\n    /* #endregion */\n\n    /* #region Shadows ~~~~~~~~~~~~~~~~~~~~~~~~~~ */\n    --wa-shadow-offset-x-scale: 0;\n    --wa-shadow-offset-x-s: calc(var(--wa-shadow-offset-x-scale) * 0.125rem);\n    --wa-shadow-offset-x-m: calc(var(--wa-shadow-offset-x-scale) * 0.25rem);\n    --wa-shadow-offset-x-l: calc(var(--wa-shadow-offset-x-scale) * 0.5rem);\n\n    --wa-shadow-offset-y-scale: 1;\n    --wa-shadow-offset-y-s: calc(var(--wa-shadow-offset-y-scale) * 0.125rem);\n    --wa-shadow-offset-y-m: calc(var(--wa-shadow-offset-y-scale) * 0.25rem);\n    --wa-shadow-offset-y-l: calc(var(--wa-shadow-offset-y-scale) * 0.5rem);\n\n    --wa-shadow-blur-scale: 1;\n    --wa-shadow-blur-s: calc(var(--wa-shadow-blur-scale) * 0.125rem);\n    --wa-shadow-blur-m: calc(var(--wa-shadow-blur-scale) * 0.25rem);\n    --wa-shadow-blur-l: calc(var(--wa-shadow-blur-scale) * 0.5rem);\n\n    --wa-shadow-spread-scale: -0.5;\n    --wa-shadow-spread-s: calc(var(--wa-shadow-spread-scale) * 0.125rem);\n    --wa-shadow-spread-m: calc(var(--wa-shadow-spread-scale) * 0.25rem);\n    --wa-shadow-spread-l: calc(var(--wa-shadow-spread-scale) * 0.5rem);\n\n    --wa-shadow-s: var(--wa-shadow-offset-x-s) var(--wa-shadow-offset-y-s) var(--wa-shadow-blur-s)\n      var(--wa-shadow-spread-s) var(--wa-color-shadow);\n    --wa-shadow-m: var(--wa-shadow-offset-x-m) var(--wa-shadow-offset-y-m) var(--wa-shadow-blur-m)\n      var(--wa-shadow-spread-m) var(--wa-color-shadow);\n    --wa-shadow-l: var(--wa-shadow-offset-x-l) var(--wa-shadow-offset-y-l) var(--wa-shadow-blur-l)\n      var(--wa-shadow-spread-l) var(--wa-color-shadow);\n    /* #endregion */\n\n    /* #region Transitions ~~~~~~~~~~~~~~~~~~~~~~ */\n    --wa-transition-easing: ease;\n    --wa-transition-slow: 300ms;\n    --wa-transition-normal: 150ms;\n    --wa-transition-fast: 75ms;\n    /* #endregion */\n\n    /* #region Components ~~~~~~~~~~~~~~~~~~~~~~~ */\n    /* Form Controls */\n    --wa-form-control-background-color: var(--wa-color-surface-default);\n\n    --wa-form-control-border-color: var(--wa-color-neutral-border-loud);\n    --wa-form-control-border-style: var(--wa-border-style);\n    --wa-form-control-border-width: var(--wa-border-width-s);\n    --wa-form-control-border-radius: var(--wa-border-radius-m);\n\n    --wa-form-control-activated-color: var(--wa-color-brand-fill-loud);\n\n    --wa-form-control-label-color: var(--wa-color-text-normal);\n    --wa-form-control-label-font-weight: var(--wa-font-weight-semibold);\n    --wa-form-control-label-line-height: var(--wa-line-height-condensed);\n\n    --wa-form-control-value-color: var(--wa-color-text-normal);\n    --wa-form-control-value-font-weight: var(--wa-font-weight-body);\n    --wa-form-control-value-line-height: var(--wa-line-height-condensed);\n\n    --wa-form-control-hint-color: var(--wa-color-text-quiet);\n    --wa-form-control-hint-font-weight: var(--wa-font-weight-body);\n    --wa-form-control-hint-line-height: var(--wa-line-height-normal);\n\n    --wa-form-control-placeholder-color: var(--wa-color-gray-50);\n\n    --wa-form-control-required-content: '*';\n    --wa-form-control-required-content-color: inherit;\n    --wa-form-control-required-content-offset: -0.1em;\n\n    --wa-form-control-padding-block: 0.75em;\n    --wa-form-control-padding-inline: 1em;\n    --wa-form-control-height: round(\n      calc(2 * var(--wa-form-control-padding-block) + 1em * var(--wa-form-control-value-line-height)),\n      1px\n    );\n    --wa-form-control-toggle-size: round(1.25em, 1px);\n\n    /* Panels */\n    --wa-panel-border-style: var(--wa-border-style);\n    --wa-panel-border-width: var(--wa-border-width-s);\n    --wa-panel-border-radius: var(--wa-border-radius-l);\n\n    /* Tooltips */\n    --wa-tooltip-arrow-size: 0.375rem;\n\n    --wa-tooltip-background-color: var(--wa-color-text-normal);\n\n    --wa-tooltip-border-color: var(--wa-tooltip-background-color);\n    --wa-tooltip-border-style: var(--wa-border-style);\n    --wa-tooltip-border-width: var(--wa-border-width-s);\n    --wa-tooltip-border-radius: var(--wa-border-radius-s);\n\n    --wa-tooltip-content-color: var(--wa-color-surface-default);\n    --wa-tooltip-font-size: var(--wa-font-size-s);\n    --wa-tooltip-line-height: var(--wa-line-height-normal);\n    /* #endregion */\n  }\n}\n";

  const normalize$1 =
    '/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type="checkbox"],\n[type="radio"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type="search"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n';

  const nprogress =
    '/* Make clicks pass-through */\n#nprogress {\n  pointer-events: none;\n}\n\n#nprogress .bar {\n  background: #29d;\n\n  position: fixed;\n  z-index: 1031;\n  top: 0;\n  left: 0;\n\n  width: 100%;\n  height: 2px;\n}\n\n/* Fancy blur effect */\n#nprogress .peg {\n  display: block;\n  position: absolute;\n  right: 0px;\n  width: 100px;\n  height: 100%;\n  box-shadow: 0 0 10px #29d, 0 0 5px #29d;\n  opacity: 1.0;\n\n  -webkit-transform: rotate(3deg) translate(0px, -4px);\n      -ms-transform: rotate(3deg) translate(0px, -4px);\n          transform: rotate(3deg) translate(0px, -4px);\n}\n\n/* Remove these to get rid of the spinner */\n#nprogress .spinner {\n  display: block;\n  position: fixed;\n  z-index: 1031;\n  top: 15px;\n  right: 15px;\n}\n\n#nprogress .spinner-icon {\n  width: 18px;\n  height: 18px;\n  box-sizing: border-box;\n\n  border: solid 2px transparent;\n  border-top-color: #29d;\n  border-left-color: #29d;\n  border-radius: 50%;\n\n  -webkit-animation: nprogress-spinner 400ms linear infinite;\n          animation: nprogress-spinner 400ms linear infinite;\n}\n\n.nprogress-custom-parent {\n  overflow: hidden;\n  position: relative;\n}\n\n.nprogress-custom-parent #nprogress .spinner,\n.nprogress-custom-parent #nprogress .bar {\n  position: absolute;\n}\n\n@-webkit-keyframes nprogress-spinner {\n  0%   { -webkit-transform: rotate(0deg); }\n  100% { -webkit-transform: rotate(360deg); }\n}\n@keyframes nprogress-spinner {\n  0%   { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n}\n\n';

  const sweetalert =
    ':root{--swal2-container-padding: 0.625em;--swal2-backdrop: rgba(0, 0, 0, 0.4);--swal2-width: 32em;--swal2-padding: 0 0 1.25em;--swal2-border: none;--swal2-border-radius: 0.3125rem;--swal2-background: white;--swal2-color: #545454;--swal2-footer-border-color: #eee;--swal2-show-animation: swal2-show 0.3s;--swal2-hide-animation: swal2-hide 0.15s forwards;--swal2-title-padding: 0.8em 1em 0;--swal2-html-container-padding: 1em 1.6em 0.3em;--swal2-input-background: transparent;--swal2-progress-step-background: #add8e6;--swal2-validation-message-background: #f0f0f0;--swal2-validation-message-color: #666;--swal2-close-button-position: initial;--swal2-close-button-inset: auto;--swal2-close-button-font-size: 2.5em;--swal2-close-button-color: #ccc;--swal2-close-button-transition: color 0.1s, box-shadow 0.1s;--swal2-close-button-outline: initial;--swal2-close-button-hover-transform: none}[data-swal2-theme=dark]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white)}@media(prefers-color-scheme: dark){[data-swal2-theme=auto]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white)}}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px var(--swal2-backdrop)}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}@media print{body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown) .swal2-container{position:static !important}}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:var(--swal2-container-padding);overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:var(--swal2-backdrop)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:var(--swal2-width);max-width:100%;padding:var(--swal2-padding);border:var(--swal2-border);border-radius:var(--swal2-border-radius);background:var(--swal2-background);color:var(--swal2-color);font-family:inherit;font-size:1rem}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable{cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable div:where(.swal2-icon){cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging{cursor:grabbing}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging div:where(.swal2-icon){cursor:grabbing}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:var(--swal2-title-padding);color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word;cursor:initial}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm){border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):focus-visible{box-shadow:0 0 0 3px rgba(112,102,224,.5)}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny){border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):focus-visible{box-shadow:0 0 0 3px rgba(220,55,65,.5)}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel){border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):focus-visible{box-shadow:0 0 0 3px rgba(110,120,129,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-default-outline:focus-visible{box-shadow:0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-styled):focus-visible{outline:none}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid var(--swal2-footer-border-color);color:inherit;font-size:1em;text-align:center;cursor:initial}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:var(--swal2-border-radius);border-bottom-left-radius:var(--swal2-border-radius)}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:rgba(0,0,0,.2)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em;cursor:initial}div:where(.swal2-container) button:where(.swal2-close){position:var(--swal2-close-button-position);inset:var(--swal2-close-button-inset);z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:var(--swal2-close-button-transition);border:none;border-radius:var(--swal2-border-radius);outline:var(--swal2-close-button-outline);background:rgba(0,0,0,0);color:var(--swal2-close-button-color);font-family:monospace;font-size:var(--swal2-close-button-font-size);cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:var(--swal2-close-button-hover-transform);background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus-visible{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-html-container){z-index:1;justify-content:center;margin:0;padding:var(--swal2-html-container-padding);overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word;cursor:initial}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:var(--swal2-input-background);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:var(--swal2-background)}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:var(--swal2-input-background);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:var(--swal2-input-background);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:var(--swal2-background);color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:var(--swal2-validation-message-background);color:var(--swal2-validation-message-color);font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:var(--swal2-progress-step-background);color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:var(--swal2-progress-step-background)}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}div:where(.swal2-icon).swal2-warning{border-color:#f8bb86;color:#f8bb86}div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}div:where(.swal2-icon).swal2-info{border-color:#3fc3ee;color:#3fc3ee}div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}div:where(.swal2-icon).swal2-question{border-color:#87adbd;color:#87adbd}div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:var(--swal2-show-animation)}.swal2-hide{animation:var(--swal2-hide-animation)}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:var(--swal2-background);box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-toast>*{grid-column:2}.swal2-toast h2:where(.swal2-title){margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-toast .swal2-loading{justify-content:center}.swal2-toast input:where(.swal2-input){height:2em;margin:.5em;font-size:1em}.swal2-toast .swal2-validation-message{font-size:1em}.swal2-toast div:where(.swal2-footer){margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-toast button:where(.swal2-close){grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-toast div:where(.swal2-html-container){margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-toast div:where(.swal2-html-container):empty{padding:0}.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-toast div:where(.swal2-actions){justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-toast button:where(.swal2-styled){margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}\n';

  const fix =
    '#nprogress .bar {\r\n  background: #29d;\r\n  position: fixed;\r\n  z-index: 1031;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 4px;\r\n}\r\n\r\n#pagesSlider {\r\n  margin: 10px 0;\r\n}\r\n\r\n#pageInputs {\r\n  display: flex;\r\n  gap: 5px;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n#swal2-html-container .pageInput {\r\n  border: 1px darkblue dashed;\r\n  border-radius: 5px;\r\n  text-align: center;\r\n  background-color: aliceblue;\r\n  color: black;\r\n  max-width: 40%;\r\n}\r\n\r\n#swal2-title {\r\n  color: navy;\r\n}\r\n\r\nbutton.swal2-styled {\r\n  position: inherit;\r\n  transform: inherit;\r\n}\r\n';

  const sweetalertStyle = [normalize$1, webawesome, sweetalert, nprogress, fix].join('\n');

  const startButton =
    '#StartMOV {\r\n  all: revert;\r\n  backface-visibility: hidden;\r\n  font-size: 2rem;\r\n  color: #fff;\r\n  cursor: pointer;\r\n  margin: 0 auto;\r\n  padding: 0.5rem 1rem;\r\n  text-align: center;\r\n  border: none;\r\n  border-radius: 10px;\r\n  min-height: 50px;\r\n  width: 80%;\r\n  position: fixed;\r\n  right: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  z-index: 105000;\r\n  transition: all 0.4s ease-in-out;\r\n  background-size: 300% 100%;\r\n  background-image: linear-gradient(to right, #667eea, #764ba2, #6b8dd6, #8e37d7);\r\n  box-shadow: 0 4px 15px 0 rgba(116, 79, 168, 0.75);\r\n}\r\n\r\n#StartMOV:hover {\r\n  background-position: 100% 0;\r\n  transition: all 0.4s ease-in-out;\r\n}\r\n\r\n#StartMOV:focus {\r\n  outline: none;\r\n}\r\n';

  const concatenateTemplateLiteralTag = (raw, ...keys) =>
    keys.length === 0 ? raw[0] : String.raw({ raw }, ...keys);
  const html = concatenateTemplateLiteralTag;
  const css = concatenateTemplateLiteralTag;

  function giveToWindow(key, content) {
    if (typeof unsafeWindow !== 'undefined') unsafeWindow[key] = content;
    if (typeof window !== 'undefined') {
      window[key] = content;
    }
  }
  function logScript(...text) {
    console.log('MangaOnlineViewer: ', ...text);
    return text;
  }
  function logScriptVerbose(...text) {
    if (['dev', 'development'].includes('main')) console.info('MangaOnlineViewer: ', ...text);
    return text;
  }
  function removeValueGM(name) {
    if (typeof GM_deleteValue !== 'undefined') {
      GM_deleteValue(name);
    } else {
      logScriptVerbose('Fake Removing: ', name);
    }
  }
  const getInfoGM =
    typeof GM_info !== 'undefined'
      ? GM_info
      : {
          scriptHandler: 'Console',
          script: {
            name: 'Debug',
            version: 'Testing',
          },
        };
  function getValueGM(name, defaultValue = null) {
    if (typeof GM_getValue !== 'undefined') {
      return GM_getValue(name, defaultValue);
    }
    logScriptVerbose('Fake Getting: ', name, ' = ', defaultValue);
    return defaultValue;
  }
  function getJsonGM(name, defaultValue = null) {
    const result = getValueGM(name, defaultValue);
    if (typeof result === 'string') {
      return JSON.parse(result);
    }
    return result;
  }
  function getGlobalSettings(defaultSettings) {
    return getJsonGM('settings', defaultSettings);
  }
  function getLocalSettings(defaultSettings) {
    return getJsonGM(window.location.hostname, defaultSettings);
  }
  function setValueGM(name, value) {
    if (typeof GM_setValue !== 'undefined') {
      GM_setValue(name, value);
      logScript('Setting: ', name, ' = ', value);
      return value.toString();
    }
    logScriptVerbose('Fake Setting: ', name, ' = ', value);
    return String(value);
  }
  function saveGlobalSettings(value) {
    return setValueGM('settings', value);
  }
  function saveLocalSettings(value) {
    return setValueGM(window.location.hostname, value);
  }
  function getBrowser() {
    const result = bowser.getParser(window.navigator.userAgent).getBrowser();
    return `${result.name} ${result.version}`;
  }
  function getEngine() {
    return getInfoGM.scriptHandler ?? 'Greasemonkey';
  }
  const getDevice = () => {
    const parser = bowser.getParser(window.navigator.userAgent);
    const device = parser.getPlatformType(true);
    if (device === 'mobile' || window.matchMedia('screen and (max-width: 600px)').matches) {
      return 'mobile';
    }
    if (device === 'tablet' || window.matchMedia('screen and (max-width: 992px)').matches) {
      return 'tablet';
    }
    return 'desktop';
  };
  const isMobile = () => getDevice() === 'mobile' || getDevice() === 'tablet';
  const settingsChangeListener = (fn, gmValue = 'settings') => {
    if (typeof GM_addValueChangeListener !== 'undefined') {
      try {
        return GM_addValueChangeListener(gmValue, (_name, _oldValue, newValue, remote) => {
          if (remote) fn(newValue);
        });
      } catch (e) {
        logScript('Failed to add settings listener', e);
      }
    }
    return void 0;
  };

  function isEmpty(value) {
    return (
      value === null || // Check for null
      typeof value === 'undefined' ||
      value === void 0 || // Check for undefined
      (typeof value === 'string' && value === '') || // Check for empty string
      (Array.isArray(value) && value.length === 0) || // Check for empty array
      (typeof value === 'object' && Object.keys(value).length === 0)
    );
  }
  function isNothing(value) {
    const isEmptyObject = a => {
      if (!Array.isArray(a)) {
        const hasNonempty = Object.keys(a).some(element => !isNothing(a[element]));
        return hasNonempty ? false : isEmptyObject(Object.keys(a));
      }
      return !a.some(element => element instanceof Promise || !isNothing(element));
    };
    return (
      !value || value === 0 || isEmpty(value) || (typeof value === 'object' && isEmptyObject(value))
    );
  }

  function waitForElm(selector, target = document.body) {
    return new Promise(resolve => {
      const element = document.querySelector(selector);
      if (element) {
        resolve(element);
        return;
      }
      const observer = new MutationObserver(() => {
        const observedElement = document.querySelector(selector);
        if (observedElement) {
          resolve(observedElement);
          observer.disconnect();
        }
      });
      observer.observe(target, {
        childList: true,
        subtree: true,
        attributes: true,
      });
    });
  }
  function waitForFunc(fn, timer = 250) {
    return new Promise(resolve => {
      const intervalId = setInterval(() => {
        if (fn()) {
          clearInterval(intervalId);
          resolve(true);
        }
      }, timer);
    });
  }
  function waitForAtb(selector, attribute, target = document.body) {
    return new Promise(resolve => {
      const element = target.querySelector(selector);
      if (element?.getAttribute(attribute)) {
        resolve(element.getAttribute(attribute) ?? '');
        return;
      }
      const observer = new MutationObserver(() => {
        const observedElement = target.querySelector(selector);
        if (observedElement?.getAttribute(attribute)) {
          resolve(observedElement.getAttribute(attribute) ?? '');
          observer.disconnect();
        }
      });
      observer.observe(target, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: [attribute],
      });
    });
  }
  function waitForVar(name, target = document.body) {
    return new Promise(resolve => {
      if (!isNothing(unsafeWindow[name])) {
        resolve(unsafeWindow[name]);
        return;
      }
      const observer = new MutationObserver(() => {
        if (!isNothing(unsafeWindow[name])) {
          resolve(unsafeWindow[name]);
          observer.disconnect();
        }
      });
      observer.observe(target, {
        childList: true,
        subtree: true,
        attributes: true,
      });
    });
  }
  function waitForTimer(millis = 1e3, result) {
    return new Promise(resolve => {
      setTimeout(() => resolve(result), millis);
    });
  }
  async function waitWithTimeout(promise, timeout = 5e3) {
    return Promise.race([promise, waitForTimer(timeout, false)]);
  }

  async function testAttribute(site) {
    if (site.waitAttr !== void 0) {
      logScript(`Waiting for Attribute ${site.waitAttr[1]} of ${site.waitAttr[0]}`);
      const wait = await waitForAtb(site.waitAttr[0], site.waitAttr[1]);
      logScript(`Found Attribute ${site.waitAttr[1]} of ${site.waitAttr[0]} = ${wait}`);
    }
  }
  async function testElement(site) {
    if (site.waitEle !== void 0) {
      logScript(`Waiting for Element ${site.waitEle}`);
      const wait = await waitForElm(site.waitEle);
      logScript(`Found Element ${site.waitEle} = `, wait);
    }
  }
  async function testVariable(site) {
    if (site.waitVar !== void 0) {
      logScript(`Waiting for Variable ${site.waitVar}`);
      const wait = await waitForVar(site.waitVar);
      logScript(`Found Variable ${site.waitVar} = ${wait}`);
    }
  }
  async function testFunc(site) {
    if (site.waitFunc !== void 0) {
      logScript(`Waiting to pass Function check ${site.waitFunc}`);
      const wait = await waitForFunc(site.waitFunc);
      logScript(`Found Function check ${site.waitFunc} = ${wait}`);
    }
  }
  async function testTime(site) {
    if (site.waitTime !== void 0) {
      logScript(`Waiting to for ${site.waitTime} milliseconds`);
      await new Promise(resolve => {
        setTimeout(resolve, site.waitTime);
      });
      logScript('Continuing after timer');
    }
  }

  let listenerQueue = [];
  let lqIndex = 0;
  const QUEUE_ITEMS_PER_LISTENER = 4;
  let epoch = 0;
  let atom = initialValue => {
    let listeners = [];
    let $atom = {
      get() {
        if (!$atom.lc) {
          $atom.listen(() => {})();
        }
        return $atom.value;
      },
      lc: 0,
      listen(listener) {
        $atom.lc = listeners.push(listener);
        return () => {
          for (let i = lqIndex + QUEUE_ITEMS_PER_LISTENER; i < listenerQueue.length; ) {
            if (listenerQueue[i] === listener) {
              listenerQueue.splice(i, QUEUE_ITEMS_PER_LISTENER);
            } else {
              i += QUEUE_ITEMS_PER_LISTENER;
            }
          }
          let index = listeners.indexOf(listener);
          if (~index) {
            listeners.splice(index, 1);
            if (!--$atom.lc) $atom.off();
          }
        };
      },
      notify(oldValue, changedKey) {
        epoch++;
        let runListenerQueue = !listenerQueue.length;
        for (let listener of listeners) {
          listenerQueue.push(listener, $atom.value, oldValue, changedKey);
        }
        if (runListenerQueue) {
          for (lqIndex = 0; lqIndex < listenerQueue.length; lqIndex += QUEUE_ITEMS_PER_LISTENER) {
            listenerQueue[lqIndex](
              listenerQueue[lqIndex + 1],
              listenerQueue[lqIndex + 2],
              listenerQueue[lqIndex + 3],
            );
          }
          listenerQueue.length = 0;
        }
      },
      /* It will be called on last listener unsubscribing.
         We will redefine it in onMount and onStop. */
      off() {},
      set(newValue) {
        let oldValue = $atom.value;
        if (oldValue !== newValue) {
          $atom.value = newValue;
          $atom.notify(oldValue);
        }
      },
      subscribe(listener) {
        let unbind = $atom.listen(listener);
        listener($atom.value);
        return unbind;
      },
      value: initialValue,
    };
    return $atom;
  };

  const MOUNT = 5;
  const UNMOUNT = 6;
  const REVERT_MUTATION = 10;
  let on = (object, listener, eventKey, mutateStore) => {
    object.events = object.events || {};
    if (!object.events[eventKey + REVERT_MUTATION]) {
      object.events[eventKey + REVERT_MUTATION] = mutateStore(eventProps => {
        object.events[eventKey].reduceRight((event, l) => (l(event), event), {
          shared: {},
          ...eventProps,
        });
      });
    }
    object.events[eventKey] = object.events[eventKey] || [];
    object.events[eventKey].push(listener);
    return () => {
      let currentListeners = object.events[eventKey];
      let index = currentListeners.indexOf(listener);
      currentListeners.splice(index, 1);
      if (!currentListeners.length) {
        delete object.events[eventKey];
        object.events[eventKey + REVERT_MUTATION]();
        delete object.events[eventKey + REVERT_MUTATION];
      }
    };
  };
  let STORE_UNMOUNT_DELAY = 1e3;
  let onMount = ($store, initialize) => {
    let listener = payload => {
      let destroy = initialize(payload);
      if (destroy) $store.events[UNMOUNT].push(destroy);
    };
    return on($store, listener, MOUNT, runListeners => {
      let originListen = $store.listen;
      $store.listen = (...args) => {
        if (!$store.lc && !$store.active) {
          $store.active = true;
          runListeners();
        }
        return originListen(...args);
      };
      let originOff = $store.off;
      $store.events[UNMOUNT] = [];
      $store.off = () => {
        originOff();
        setTimeout(() => {
          if ($store.active && !$store.lc) {
            $store.active = false;
            for (let destroy of $store.events[UNMOUNT]) destroy();
            $store.events[UNMOUNT] = [];
          }
        }, STORE_UNMOUNT_DELAY);
      };
      return () => {
        $store.listen = originListen;
        $store.off = originOff;
      };
    });
  };

  let computedStore = (stores, cb, batched) => {
    if (!Array.isArray(stores)) stores = [stores];

    let previousArgs;
    let currentEpoch;
    let set = () => {
      if (currentEpoch === epoch) return;
      currentEpoch = epoch;
      let args = stores.map($store => $store.get());
      if (!previousArgs || args.some((arg, i) => arg !== previousArgs[i])) {
        previousArgs = args;
        let value = cb(...args);
        if (value && value.then && value.t) {
          value.then(asyncValue => {
            if (previousArgs === args) {
              // Prevent a stale set
              $computed.set(asyncValue);
            }
          });
        } else {
          $computed.set(value);
          currentEpoch = epoch;
        }
      }
    };
    let $computed = atom(undefined);
    let get = $computed.get;
    $computed.get = () => {
      set();
      return get();
    };
    let run = set;

    onMount($computed, () => {
      let unbinds = stores.map($store => $store.listen(run));
      set();
      return () => {
        for (let unbind of unbinds) unbind();
      };
    });

    return $computed;
  };

  let computed = (stores, fn) => computedStore(stores, fn);

  let map = (initial = {}) => {
    let $map = atom(initial);

    $map.setKey = function (key, value) {
      let oldMap = $map.value;
      if (typeof value === 'undefined' && key in $map.value) {
        $map.value = { ...$map.value };
        delete $map.value[key];
        $map.notify(oldMap, key);
      } else if ($map.value[key] !== value) {
        $map.value = {
          ...$map.value,
          [key]: value,
        };
        $map.notify(oldMap, key);
      }
    };

    return $map;
  };

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const t$4 = globalThis,
    i$7 = t$4.trustedTypes,
    s$3 = i$7 ? i$7.createPolicy('lit-html', { createHTML: t => t }) : void 0,
    e$b = '$lit$',
    h$3 = `lit$${Math.random().toFixed(9).slice(2)}$`,
    o$d = '?' + h$3,
    n$7 = `<${o$d}>`,
    r$7 = document,
    l$2 = () => r$7.createComment(''),
    c$3 = t => null === t || ('object' != typeof t && 'function' != typeof t),
    a$2 = Array.isArray,
    u$2 = t => a$2(t) || 'function' == typeof t?.[Symbol.iterator],
    d$2 = '[ \t\n\f\r]',
    f$3 = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
    v = /-->/g,
    _$1 = />/g,
    m = RegExp(`>|${d$2}(?:([^\\s"'>=/]+)(${d$2}*=${d$2}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, 'g'),
    p$1 = /'/g,
    g = /"/g,
    $ = /^(?:script|style|textarea|title)$/i,
    y$1 =
      t =>
      (i, ...s) => ({ _$litType$: t, strings: i, values: s }),
    x$1 = y$1(1),
    T = Symbol.for('lit-noChange'),
    E = Symbol.for('lit-nothing'),
    A = new WeakMap(),
    C = r$7.createTreeWalker(r$7, 129);
  function P(t, i) {
    if (!a$2(t) || !t.hasOwnProperty('raw')) throw Error('invalid template strings array');
    return void 0 !== s$3 ? s$3.createHTML(i) : i;
  }
  const V = (t, i) => {
    const s = t.length - 1,
      o = [];
    let r,
      l = 2 === i ? '<svg>' : 3 === i ? '<math>' : '',
      c = f$3;
    for (let i = 0; i < s; i++) {
      const s = t[i];
      let a,
        u,
        d = -1,
        y = 0;
      for (; y < s.length && ((c.lastIndex = y), (u = c.exec(s)), null !== u); )
        ((y = c.lastIndex),
          c === f$3
            ? '!--' === u[1]
              ? (c = v)
              : void 0 !== u[1]
                ? (c = _$1)
                : void 0 !== u[2]
                  ? ($.test(u[2]) && (r = RegExp('</' + u[2], 'g')), (c = m))
                  : void 0 !== u[3] && (c = m)
            : c === m
              ? '>' === u[0]
                ? ((c = r ?? f$3), (d = -1))
                : void 0 === u[1]
                  ? (d = -2)
                  : ((d = c.lastIndex - u[2].length),
                    (a = u[1]),
                    (c = void 0 === u[3] ? m : '"' === u[3] ? g : p$1))
              : c === g || c === p$1
                ? (c = m)
                : c === v || c === _$1
                  ? (c = f$3)
                  : ((c = m), (r = void 0)));
      const x = c === m && t[i + 1].startsWith('/>') ? ' ' : '';
      l +=
        c === f$3
          ? s + n$7
          : d >= 0
            ? (o.push(a), s.slice(0, d) + e$b + s.slice(d) + h$3 + x)
            : s + h$3 + (-2 === d ? i : x);
    }
    return [P(t, l + (t[s] || '<?>') + (2 === i ? '</svg>' : 3 === i ? '</math>' : '')), o];
  };
  class N {
    constructor({ strings: t, _$litType$: s }, n) {
      let r;
      this.parts = [];
      let c = 0,
        a = 0;
      const u = t.length - 1,
        d = this.parts,
        [f, v] = V(t, s);
      if (
        ((this.el = N.createElement(f, n)), (C.currentNode = this.el.content), 2 === s || 3 === s)
      ) {
        const t = this.el.content.firstChild;
        t.replaceWith(...t.childNodes);
      }
      for (; null !== (r = C.nextNode()) && d.length < u; ) {
        if (1 === r.nodeType) {
          if (r.hasAttributes())
            for (const t of r.getAttributeNames())
              if (t.endsWith(e$b)) {
                const i = v[a++],
                  s = r.getAttribute(t).split(h$3),
                  e = /([.?@])?(.*)/.exec(i);
                (d.push({
                  type: 1,
                  index: c,
                  name: e[2],
                  strings: s,
                  ctor: '.' === e[1] ? H : '?' === e[1] ? I : '@' === e[1] ? L : k,
                }),
                  r.removeAttribute(t));
              } else t.startsWith(h$3) && (d.push({ type: 6, index: c }), r.removeAttribute(t));
          if ($.test(r.tagName)) {
            const t = r.textContent.split(h$3),
              s = t.length - 1;
            if (s > 0) {
              r.textContent = i$7 ? i$7.emptyScript : '';
              for (let i = 0; i < s; i++)
                (r.append(t[i], l$2()), C.nextNode(), d.push({ type: 2, index: ++c }));
              r.append(t[s], l$2());
            }
          }
        } else if (8 === r.nodeType)
          if (r.data === o$d) d.push({ type: 2, index: c });
          else {
            let t = -1;
            for (; -1 !== (t = r.data.indexOf(h$3, t + 1)); )
              (d.push({ type: 7, index: c }), (t += h$3.length - 1));
          }
        c++;
      }
    }
    static createElement(t, i) {
      const s = r$7.createElement('template');
      return ((s.innerHTML = t), s);
    }
  }
  function S$1(t, i, s = t, e) {
    if (i === T) return i;
    let h = void 0 !== e ? s._$Co?.[e] : s._$Cl;
    const o = c$3(i) ? void 0 : i._$litDirective$;
    return (
      h?.constructor !== o &&
        (h?._$AO?.(false),
        void 0 === o ? (h = void 0) : ((h = new o(t)), h._$AT(t, s, e)),
        void 0 !== e ? ((s._$Co ??= [])[e] = h) : (s._$Cl = h)),
      void 0 !== h && (i = S$1(t, h._$AS(t, i.values), h, e)),
      i
    );
  }
  class M {
    constructor(t, i) {
      ((this._$AV = []), (this._$AN = void 0), (this._$AD = t), (this._$AM = i));
    }
    get parentNode() {
      return this._$AM.parentNode;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    u(t) {
      const {
          el: { content: i },
          parts: s,
        } = this._$AD,
        e = (t?.creationScope ?? r$7).importNode(i, true);
      C.currentNode = e;
      let h = C.nextNode(),
        o = 0,
        n = 0,
        l = s[0];
      for (; void 0 !== l; ) {
        if (o === l.index) {
          let i;
          (2 === l.type
            ? (i = new R(h, h.nextSibling, this, t))
            : 1 === l.type
              ? (i = new l.ctor(h, l.name, l.strings, this, t))
              : 6 === l.type && (i = new z(h, this, t)),
            this._$AV.push(i),
            (l = s[++n]));
        }
        o !== l?.index && ((h = C.nextNode()), o++);
      }
      return ((C.currentNode = r$7), e);
    }
    p(t) {
      let i = 0;
      for (const s of this._$AV)
        (void 0 !== s &&
          (void 0 !== s.strings ? (s._$AI(t, s, i), (i += s.strings.length - 2)) : s._$AI(t[i])),
          i++);
    }
  }
  class R {
    get _$AU() {
      return this._$AM?._$AU ?? this._$Cv;
    }
    constructor(t, i, s, e) {
      ((this.type = 2),
        (this._$AH = E),
        (this._$AN = void 0),
        (this._$AA = t),
        (this._$AB = i),
        (this._$AM = s),
        (this.options = e),
        (this._$Cv = e?.isConnected ?? true));
    }
    get parentNode() {
      let t = this._$AA.parentNode;
      const i = this._$AM;
      return (void 0 !== i && 11 === t?.nodeType && (t = i.parentNode), t);
    }
    get startNode() {
      return this._$AA;
    }
    get endNode() {
      return this._$AB;
    }
    _$AI(t, i = this) {
      ((t = S$1(this, t, i)),
        c$3(t)
          ? t === E || null == t || '' === t
            ? (this._$AH !== E && this._$AR(), (this._$AH = E))
            : t !== this._$AH && t !== T && this._(t)
          : void 0 !== t._$litType$
            ? this.$(t)
            : void 0 !== t.nodeType
              ? this.T(t)
              : u$2(t)
                ? this.k(t)
                : this._(t));
    }
    O(t) {
      return this._$AA.parentNode.insertBefore(t, this._$AB);
    }
    T(t) {
      this._$AH !== t && (this._$AR(), (this._$AH = this.O(t)));
    }
    _(t) {
      (this._$AH !== E && c$3(this._$AH)
        ? (this._$AA.nextSibling.data = t)
        : this.T(r$7.createTextNode(t)),
        (this._$AH = t));
    }
    $(t) {
      const { values: i, _$litType$: s } = t,
        e =
          'number' == typeof s
            ? this._$AC(t)
            : (void 0 === s.el && (s.el = N.createElement(P(s.h, s.h[0]), this.options)), s);
      if (this._$AH?._$AD === e) this._$AH.p(i);
      else {
        const t = new M(e, this),
          s = t.u(this.options);
        (t.p(i), this.T(s), (this._$AH = t));
      }
    }
    _$AC(t) {
      let i = A.get(t.strings);
      return (void 0 === i && A.set(t.strings, (i = new N(t))), i);
    }
    k(t) {
      a$2(this._$AH) || ((this._$AH = []), this._$AR());
      const i = this._$AH;
      let s,
        e = 0;
      for (const h of t)
        (e === i.length
          ? i.push((s = new R(this.O(l$2()), this.O(l$2()), this, this.options)))
          : (s = i[e]),
          s._$AI(h),
          e++);
      e < i.length && (this._$AR(s && s._$AB.nextSibling, e), (i.length = e));
    }
    _$AR(t = this._$AA.nextSibling, i) {
      for (this._$AP?.(false, true, i); t !== this._$AB; ) {
        const i = t.nextSibling;
        (t.remove(), (t = i));
      }
    }
    setConnected(t) {
      void 0 === this._$AM && ((this._$Cv = t), this._$AP?.(t));
    }
  }
  class k {
    get tagName() {
      return this.element.tagName;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    constructor(t, i, s, e, h) {
      ((this.type = 1),
        (this._$AH = E),
        (this._$AN = void 0),
        (this.element = t),
        (this.name = i),
        (this._$AM = e),
        (this.options = h),
        s.length > 2 || '' !== s[0] || '' !== s[1]
          ? ((this._$AH = Array(s.length - 1).fill(new String())), (this.strings = s))
          : (this._$AH = E));
    }
    _$AI(t, i = this, s, e) {
      const h = this.strings;
      let o = false;
      if (void 0 === h)
        ((t = S$1(this, t, i, 0)),
          (o = !c$3(t) || (t !== this._$AH && t !== T)),
          o && (this._$AH = t));
      else {
        const e = t;
        let n, r;
        for (t = h[0], n = 0; n < h.length - 1; n++)
          ((r = S$1(this, e[s + n], i, n)),
            r === T && (r = this._$AH[n]),
            (o ||= !c$3(r) || r !== this._$AH[n]),
            r === E ? (t = E) : t !== E && (t += (r ?? '') + h[n + 1]),
            (this._$AH[n] = r));
      }
      o && !e && this.j(t);
    }
    j(t) {
      t === E
        ? this.element.removeAttribute(this.name)
        : this.element.setAttribute(this.name, t ?? '');
    }
  }
  class H extends k {
    constructor() {
      (super(...arguments), (this.type = 3));
    }
    j(t) {
      this.element[this.name] = t === E ? void 0 : t;
    }
  }
  class I extends k {
    constructor() {
      (super(...arguments), (this.type = 4));
    }
    j(t) {
      this.element.toggleAttribute(this.name, !!t && t !== E);
    }
  }
  class L extends k {
    constructor(t, i, s, e, h) {
      (super(t, i, s, e, h), (this.type = 5));
    }
    _$AI(t, i = this) {
      if ((t = S$1(this, t, i, 0) ?? E) === T) return;
      const s = this._$AH,
        e =
          (t === E && s !== E) ||
          t.capture !== s.capture ||
          t.once !== s.once ||
          t.passive !== s.passive,
        h = t !== E && (s === E || e);
      (e && this.element.removeEventListener(this.name, this, s),
        h && this.element.addEventListener(this.name, this, t),
        (this._$AH = t));
    }
    handleEvent(t) {
      'function' == typeof this._$AH
        ? this._$AH.call(this.options?.host ?? this.element, t)
        : this._$AH.handleEvent(t);
    }
  }
  class z {
    constructor(t, i, s) {
      ((this.element = t),
        (this.type = 6),
        (this._$AN = void 0),
        (this._$AM = i),
        (this.options = s));
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AI(t) {
      S$1(this, t);
    }
  }
  const j = t$4.litHtmlPolyfillSupport;
  (j?.(N, R), (t$4.litHtmlVersions ??= []).push('3.3.1'));
  const B = (t, i, s) => {
    const e = s?.renderBefore ?? i;
    let h = e._$litPart$;
    if (void 0 === h) {
      const t = s?.renderBefore ?? null;
      e._$litPart$ = h = new R(i.insertBefore(l$2(), t), t, void 0, s ?? {});
    }
    return (h._$AI(t), h);
  };

  /**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */ const e$a = (o, t) => void 0 !== o?._$litType$,
    f$2 = o => void 0 === o.strings;

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const t$3 = { ATTRIBUTE: 1, CHILD: 2 },
    e$9 =
      t =>
      (...e) => ({ _$litDirective$: t, values: e });
  let i$6 = class i {
    constructor(t) {}
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AT(t, e, i) {
      ((this._$Ct = t), (this._$AM = e), (this._$Ci = i));
    }
    _$AS(t, e) {
      return this.update(t, e);
    }
    update(t, e) {
      return this.render(...e);
    }
  };

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */ const s$2 = (i, t) => {
      const e = i._$AN;
      if (void 0 === e) return false;
      for (const i of e) (i._$AO?.(t, false), s$2(i, t));
      return true;
    },
    o$c = i => {
      let t, e;
      do {
        if (void 0 === (t = i._$AM)) break;
        ((e = t._$AN), e.delete(i), (i = t));
      } while (0 === e?.size);
    },
    r$6 = i => {
      for (let t; (t = i._$AM); i = t) {
        let e = t._$AN;
        if (void 0 === e) t._$AN = e = new Set();
        else if (e.has(i)) break;
        (e.add(i), c$2(t));
      }
    };
  function h$2(i) {
    void 0 !== this._$AN ? (o$c(this), (this._$AM = i), r$6(this)) : (this._$AM = i);
  }
  function n$6(i, t = false, e = 0) {
    const r = this._$AH,
      h = this._$AN;
    if (void 0 !== h && 0 !== h.size)
      if (t)
        if (Array.isArray(r)) for (let i = e; i < r.length; i++) (s$2(r[i], false), o$c(r[i]));
        else null != r && (s$2(r, false), o$c(r));
      else s$2(this, i);
  }
  const c$2 = i => {
    i.type == t$3.CHILD && ((i._$AP ??= n$6), (i._$AQ ??= h$2));
  };
  let f$1 = class f extends i$6 {
    constructor() {
      (super(...arguments), (this._$AN = void 0));
    }
    _$AT(i, t, e) {
      (super._$AT(i, t, e), r$6(this), (this.isConnected = i._$AU));
    }
    _$AO(i, t = true) {
      (i !== this.isConnected &&
        ((this.isConnected = i), i ? this.reconnected?.() : this.disconnected?.()),
        t && (s$2(this, i), o$c(this)));
    }
    setValue(t) {
      if (f$2(this._$Ct)) this._$Ct._$AI(t, this);
      else {
        const i = [...this._$Ct._$AH];
        ((i[this._$Ci] = t), this._$Ct._$AI(i, this, 0));
      }
    }
    disconnected() {}
    reconnected() {}
  };

  /**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */ const e$8 = () => new h$1();
  let h$1 = class h {};
  const o$b = new WeakMap(),
    n$5 = e$9(
      class extends f$1 {
        render(i) {
          return E;
        }
        update(i, [s]) {
          const e = s !== this.G;
          return (
            e && void 0 !== this.G && this.rt(void 0),
            (e || this.lt !== this.ct) &&
              ((this.G = s), (this.ht = i.options?.host), this.rt((this.ct = i.element))),
            E
          );
        }
        rt(t) {
          if ((this.isConnected || (t = void 0), 'function' == typeof this.G)) {
            const i = this.ht ?? globalThis;
            let s = o$b.get(i);
            (void 0 === s && ((s = new WeakMap()), o$b.set(i, s)),
              void 0 !== s.get(this.G) && this.G.call(this.ht, void 0),
              s.set(this.G, t),
              void 0 !== t && this.G.call(this.ht, t));
          } else this.G.value = t;
        }
        get lt() {
          return 'function' == typeof this.G
            ? o$b.get(this.ht ?? globalThis)?.get(this.G)
            : this.G?.value;
        }
        disconnected() {
          this.lt === this.ct && this.rt(void 0);
        }
        reconnected() {
          this.rt(this.ct);
        }
      },
    );

  const de_DE = {
    ID: 'de_DE',
    NAME: 'Deutsch',
    STARTING: 'Starte<br>Manga OnlineViewer',
    RESUME: 'Fortsetzen ab Seite ',
    WAITING: 'Bitte warten, 3 Sekunden...',
    CHOOSE_BEGINNING: 'Wähle die Startseite:',
    BUTTON_START: 'Manga OnlineViewer starten',
    SETTINGS: 'Einstellungen',
    LANGUAGE: 'Sprache',
    COLOR_SCHEME: 'Farbschema',
    THEME: 'Design',
    THEME_COLOR: 'Farbe',
    THEME_HUE: 'Farbton',
    THEME_SHADE: 'Schattierung',
    DEFAULT_LOAD_MODE: 'Standard-Lademodus',
    LOAD_MODE_NORMAL: 'Normal (3 Sek. warten)',
    LOAD_MODE_ALWAYS: 'Immer (sofort)',
    LOAD_MODE_NEVER: 'Nie (manuell)',
    LOAD_SPEED: 'Ladegeschwindigkeit Seiten/Sekunde',
    DEFAULT_ZOOM: 'Standard-Zoom (zwischen 5 und 200)',
    DEFAULT_ZOOM_MODE: 'Standard-Zoommodus',
    MINIMUM_ZOOM: 'Minimaler Zoom relativ zur Bildschirmbreite (zwischen 30 und 100)',
    ZOOM_STEP: 'Zoom-Schrittgröße (zwischen 5 und 50)',
    DEFAULT_VIEW_MODE: 'Standard-Ansichtsmodus',
    VIEW_MODE_VERTICAL: 'Vertikal',
    VIEW_MODE_LEFT: 'Links nach Rechts',
    VIEW_MODE_RIGHT: 'Rechts nach Links',
    VIEW_MODE_WEBCOMIC: 'WebComic',
    FIT_WIDTH_OVERSIZED: 'Breite anpassen bei Übergröße',
    SHOW_THUMBNAILS: 'Miniaturansichten anzeigen',
    ENABLE_COMMENTS: 'Kommentare erfassen (wenn verfügbar)',
    HIDE_CONTROLS: 'Seitensteuerung immer ausblenden',
    HEADER_TYPE: 'Kopfbereichstyp ändern',
    HEADER_HOVER: 'Hover',
    HEADER_SCROLL: 'Scrollen',
    HEADER_CLICK: 'Klicken',
    HEADER_FIXED: 'Fixiert',
    HEADER_SIMPLE: 'Einfach',
    BUTTON_DOWNLOAD: 'Herunterladen',
    DOWNLOAD_ZIP: 'Zip-Datei herunterladen',
    DOWNLOAD_IMAGES: 'Bilder automatisch als Zip herunterladen',
    BUTTON_NEXT: 'Weiter',
    NEXT_CHAPTER: 'Nächstes Kapitel',
    BUTTON_PREVIOUS: 'Zurück',
    PREVIOUS_CHAPTER: 'Vorheriges Kapitel',
    BOOKMARKS: 'Lesezeichen',
    BOOKMARK: 'Lesezeichen',
    BOOKMARK_REMOVED: 'Lesezeichen entfernt',
    BOOKMARK_SAVED: 'Lesezeichen gespeichert',
    BOOKMARK_MESSAGE:
      'Beim nächsten Öffnen dieses Kapitels wird ab fortgesetzt:<h4>Seite ##num##</h4>(Nur <i>EINMAL</i> pro Lesezeichen)',
    KEYBINDINGS: 'Tastenkürzel',
    EDIT_KEYBINDS: 'Tastenkürzel bearbeiten',
    SAVE_KEYBINDS: 'Tastenkürzel speichern',
    BUTTON_EDIT: 'Bearbeiten',
    BUTTON_SAVE: 'Speichern',
    KEYBIND_RULES: `
    <h3>Unterstützte Tasten</h3>
    Erlaubte Modifikatoren: shift, option, alt, ctrl, control, command. </br>
    Spezielle Tasten: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide. </br>
    Beispiele: <kbd>a</kbd>, <kbd>ctrl+a</kbd>, <kbd>shift+a</kbd>, <kbd>num_2</kbd>, <kbd>2</kbd>
  `,
    ATTENTION: 'Achtung',
    WARNING: 'Warnung',
    BUTTON_RESET_SETTINGS: 'Einstellungen zurücksetzen(Reset Settings)',
    SETTINGS_RESET: 'Die Einstellungen wurden zurückgesetzt, bitte Seite neu laden',
    LANGUAGE_CHANGED: 'Die Sprache wurde geändert, bitte Seite neu laden',
    AUTO_DOWNLOAD:
      'Beim nächsten Laden eines Kapitels wirst du automatisch gefragt, ob du speichern möchtest',
    LAZY_LOAD:
      "Lazy Load ist mit Zip-Download nicht kompatibel, mit dieser Einstellung kannst du nicht herunterladen.<br/> Empfehlung: <span style='color:red;font-weight:bold'>Miniaturansichten deaktivieren</span> um Bandbreite/Speicher zu sparen.",
    LAZY_LOAD_IMAGES_ENABLE: 'Lazy Load Bilder aktivieren',
    LAZY_LOAD_IMAGES: 'Lazy Start ab Seite (zwischen 5 und 100)',
    RETURN_CHAPTER_LIST: 'Zur Kapitelübersicht zurückkehren',
    PAGES_LOADED: 'Seiten geladen',
    GO_TO_PAGE: 'Gehe zu Seite',
    ENLARGE: 'Vergrößern',
    RESTORE: 'Wiederherstellen',
    REDUCE: 'Wiederherstellen',
    FIT_WIDTH: 'Breite anpassen',
    FIT_HEIGHT: 'Höhe anpassen',
    PERCENT: 'Prozent',
    TOGGLE_CONTROLS: 'Seitensteuerung umschalten',
    ZOOM_IN: 'Hineinzoomen',
    ZOOM_OUT: 'Herauszoomen',
    ZOOM_RESET: 'Zoom zurücksetzen',
    ZOOM_WIDTH: 'Auf Breite zoomen',
    ZOOM_HEIGHT: 'Auf Höhe zoomen',
    HIDE: 'Ausblenden',
    RELOAD: 'Neu laden',
    SLOWLY: 'Langsam',
    NORMAL: 'Normal',
    FAST: 'Schnell',
    EXTREME: 'Extrem',
    ALL_PAGES: 'Alle Seiten',
    SPEED_WARNING: 'Ladegeschwindigkeit zu hoch',
    SPEED_WARNING_MESSAGE:
      'Diese Geschwindigkeit wird nicht empfohlen.<br> Sie kann einige Server überlasten oder deine IP als DDoS-Angreifer markieren.<br> Bitte mit Vorsicht verwenden!',
    SCROLL_UP: 'Nach oben scrollen',
    SCROLL_DOWN: 'Nach unten scrollen',
    CLOSE: 'Schließen',
    LIST_EMPTY: 'Liste leer',
    DISPLAY_COMMENTS: 'Kommentare anzeigen',
    COMMENTS: 'Kommentarbereich',
    SCROLL_START: 'Auto-Scroll umschalten',
    AUTO_SCROLL_HEIGHT: 'Auto-Scroll-Geschwindigkeit in Pixel',
    VERTICAL_SEPARATOR: 'Vertikale Trenner anzeigen',
    END: 'Ende',
    SCOPE: 'Bereich',
    GLOBAL: 'Global',
    GENERAL: 'Allgemein',
    LOADING: 'Lädt',
    ZOOM: 'Zoom',
    OTHERS: 'Sonstiges',
    NAVBAR_TYPE: 'Navigationsleistentyp ändern',
    NAVBAR_BOTTOM: 'Unten',
    NAVBAR_LEFT: 'Links',
    NAVBAR_RIGHT: 'Rechts',
    NAVBAR_DISABLED: 'Deaktiviert',
    ENABLE_PAGINATION: 'Paginierung aktivieren',
    FILE_MENU: 'Hauptmenü',
    VIEW_MENU: 'Menü „Ansicht“',
    ZOOM_MENU: 'Zoom-Menü',
  };

  const en_US = {
    ID: 'en_US',
    NAME: 'English (US)',
    STARTING: 'Starting<br>Manga OnlineViewer',
    RESUME: 'Resuming reading from Page ',
    WAITING: 'Please wait, 3 seconds...',
    CHOOSE_BEGINNING: 'Choose the Page to start from:',
    BUTTON_START: 'Start Manga OnlineViewer',
    SETTINGS: 'Settings',
    LANGUAGE: 'Language',
    COLOR_SCHEME: 'Color Scheme',
    THEME: 'Theme',
    THEME_COLOR: 'Color',
    THEME_HUE: 'Color Hue',
    THEME_SHADE: 'Color Shade',
    DEFAULT_LOAD_MODE: 'Default Load Mode',
    LOAD_MODE_NORMAL: 'Normal(Wait 3 sec)',
    LOAD_MODE_ALWAYS: 'Always(Immediately)',
    LOAD_MODE_NEVER: 'Never(Manually)',
    LOAD_SPEED: 'Load Speed Pages/Second',
    DEFAULT_ZOOM: 'Default Zoom (between 5 and 200)',
    DEFAULT_ZOOM_MODE: 'Default Zoom Mode',
    MINIMUM_ZOOM: 'Minimum Zoom relative to the width of screen (between 30 and 100)',
    ZOOM_STEP: 'Zoom Change Step (between 5 and 50)',
    DEFAULT_VIEW_MODE: 'Default View Mode',
    VIEW_MODE_VERTICAL: 'Vertical',
    VIEW_MODE_LEFT: 'Left to Right',
    VIEW_MODE_RIGHT: 'Right to Left',
    VIEW_MODE_WEBCOMIC: 'WebComic',
    FIT_WIDTH_OVERSIZED: 'Fit Width if Oversized',
    SHOW_THUMBNAILS: 'Show Thumbnails',
    ENABLE_COMMENTS: 'Capture Comments (When available)',
    HIDE_CONTROLS: 'Always Hide Page Controls',
    HEADER_TYPE: 'Change Header Type',
    HEADER_HOVER: 'Hover',
    HEADER_SCROLL: 'Scroll',
    HEADER_CLICK: 'Click',
    HEADER_FIXED: 'Fixed',
    HEADER_SIMPLE: 'Simple',
    BUTTON_DOWNLOAD: 'Download',
    DOWNLOAD_ZIP: 'Download Zip file',
    DOWNLOAD_IMAGES: 'Download Images as Zip Automatically',
    BUTTON_NEXT: 'Next',
    NEXT_CHAPTER: 'Next Chapter',
    BUTTON_PREVIOUS: 'Previous',
    PREVIOUS_CHAPTER: 'Previous Chapter',
    BOOKMARKS: 'Bookmarks',
    BOOKMARK: 'Bookmark',
    BOOKMARK_REMOVED: 'Bookmark Removed',
    BOOKMARK_SAVED: 'Bookmark Saved',
    BOOKMARK_MESSAGE:
      'Next time you open this chapter it will resume from:<h4>Page ##num##</h4>(Only <i>ONCE</i> per Bookmark)',
    KEYBINDINGS: 'Keybindings',
    EDIT_KEYBINDS: 'Edit KeyBindings',
    SAVE_KEYBINDS: 'Save KeyBindings',
    BUTTON_EDIT: 'Edit',
    BUTTON_SAVE: 'Save',
    KEYBIND_RULES: `
    <h3>Supported Keys</h3>
    Allowed modifiers: shift, option, alt, ctrl, control, command. </br>
    Special keys: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide. </br>
    Examples: <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd>
  `,
    ATTENTION: 'Attention',
    WARNING: 'Warning',
    BUTTON_RESET_SETTINGS: 'Reset Settings',
    SETTINGS_RESET: 'Settings have been reset, reload the page to take effect',
    LANGUAGE_CHANGED: 'Language has been changed, reload the page to take effect',
    AUTO_DOWNLOAD: 'Next time a chapter finish loading you will be prompted to save automatically',
    LAZY_LOAD:
      "Lazy load is incompatible with zip download, you will not be able to download with this setting ON.<br/> Suggestion: <span style='color:red;font-weight:bold'>Disable Thumbnails</span> to save Bandwidth/Memory.",
    LAZY_LOAD_IMAGES_ENABLE: 'Enable Lazy Load Images',
    LAZY_LOAD_IMAGES: 'Lazy Start From Page (between 5 and 100)',
    RETURN_CHAPTER_LIST: 'Return to Chapter List',
    PAGES_LOADED: 'Pages Loaded',
    GO_TO_PAGE: 'Go to Page',
    ENLARGE: 'Enlarge',
    RESTORE: 'Restore',
    REDUCE: 'Reduce',
    FIT_WIDTH: 'Fit Width',
    FIT_HEIGHT: 'Fit Height',
    PERCENT: 'Percent',
    TOGGLE_CONTROLS: 'Toggle page controls',
    ZOOM_IN: 'Zoom In',
    ZOOM_OUT: 'Zoom Out',
    ZOOM_RESET: 'Zoom Reset',
    ZOOM_WIDTH: 'Zoom to Width',
    ZOOM_HEIGHT: 'Zoom to Height',
    HIDE: 'Hide',
    RELOAD: 'Reload',
    SLOWLY: 'Slowly',
    NORMAL: 'Normal',
    FAST: 'Fast',
    EXTREME: 'Extreme',
    ALL_PAGES: 'All Pages',
    SPEED_WARNING: 'Loading Speed too High',
    SPEED_WARNING_MESSAGE:
      'This speed is not recommended.<br> It may hurt some servers or get your IP marked as DDoS attacker.<br> Please use with caution!',
    SCROLL_UP: 'Scroll Up',
    SCROLL_DOWN: 'Scroll Down',
    CLOSE: 'Close',
    LIST_EMPTY: 'List Empty',
    DISPLAY_COMMENTS: 'Display Comments',
    COMMENTS: 'Comments Section',
    SCROLL_START: 'Toggle Auto Scroll',
    AUTO_SCROLL_HEIGHT: 'Auto Scroll Speed in Pixels',
    VERTICAL_SEPARATOR: 'Show Vertical Separators',
    END: 'End',
    SCOPE: 'Scope',
    GLOBAL: 'Global',
    GENERAL: 'General',
    LOADING: 'Loading',
    ZOOM: 'Zoom',
    OTHERS: 'Others',
    NAVBAR_TYPE: 'Change Navbar Type',
    NAVBAR_BOTTOM: 'Bottom',
    NAVBAR_LEFT: 'Left',
    NAVBAR_RIGHT: 'Right',
    NAVBAR_DISABLED: 'Disabled',
    ENABLE_PAGINATION: 'Enable Pagination',
    FILE_MENU: 'Main Menu',
    VIEW_MENU: 'View Menu',
    ZOOM_MENU: 'Zoom Menu',
  };

  const es_ES = {
    ID: 'es_ES',
    NAME: 'Español (ES)',
    STARTING: 'Iniciando<br>Manga OnlineViewer',
    RESUME: 'Continuando lectura desde la Página ',
    WAITING: 'Por favor espere, 3 segundos...',
    CHOOSE_BEGINNING: 'Elija la página en la que comenzar:',
    BUTTON_START: 'Iniciar Manga OnlineViewer',
    SETTINGS: 'Ajustes',
    LANGUAGE: 'Idioma',
    COLOR_SCHEME: 'Esquema de color',
    THEME: 'Tema',
    THEME_COLOR: 'Color',
    THEME_HUE: 'Matiz del color',
    THEME_SHADE: 'Saturación del color',
    DEFAULT_LOAD_MODE: 'Modo de carga por defecto',
    LOAD_MODE_NORMAL: 'Normal (Espera 3s)',
    LOAD_MODE_ALWAYS: 'Siempre (Inmediatamente)',
    LOAD_MODE_NEVER: 'Nunca (Manualmente)',
    LOAD_SPEED: 'Velocidad carga página/segundo',
    DEFAULT_ZOOM: 'Zoom por defecto (entre 5 y 200)',
    DEFAULT_ZOOM_MODE: 'Modo de zoom por defecto',
    MINIMUM_ZOOM: 'Zoom mínimo relativo al ancho de la pantalla',
    ZOOM_STEP: 'Paso entre cambios de zoom (entre 5 y 50)',
    DEFAULT_VIEW_MODE: 'Modo de visualización por defecto',
    VIEW_MODE_VERTICAL: 'Vertical',
    VIEW_MODE_LEFT: 'Izquierda a derecha',
    VIEW_MODE_RIGHT: 'Derecha a izquierda',
    VIEW_MODE_WEBCOMIC: 'WebComic',
    FIT_WIDTH_OVERSIZED: 'Ajustar ancho si es demasiado grande',
    SHOW_THUMBNAILS: 'Mostrar miniaturas',
    ENABLE_COMMENTS: 'Capturar comentarios (cuando esté disponible)',
    HIDE_CONTROLS: 'Ocultar siempre la barra de controles',
    HEADER_TYPE: 'Cambiar tipo de cabecera',
    HEADER_HOVER: 'Pasar por encima',
    HEADER_SCROLL: 'Desplazamiento',
    HEADER_CLICK: 'Hacer click',
    HEADER_FIXED: 'Fijo',
    HEADER_SIMPLE: 'Sencillo',
    BUTTON_DOWNLOAD: 'Descargar',
    DOWNLOAD_ZIP: 'Descargar fichero Zip',
    DOWNLOAD_IMAGES: 'Autodescargar imágenes como Zip',
    BUTTON_NEXT: 'Siguiente',
    NEXT_CHAPTER: 'Siguiente capítulo',
    BUTTON_PREVIOUS: 'Anterior',
    PREVIOUS_CHAPTER: 'Capítulo anterior',
    BOOKMARKS: 'Marcadores',
    BOOKMARK: 'Marcador',
    BOOKMARK_REMOVED: 'Marcador eliminado',
    BOOKMARK_SAVED: 'Marcador guardado',
    BOOKMARK_MESSAGE:
      'La próxima vez que abra este capítulo, continuará desde la <h4>página ##num##</h4>(Sólo <i>UNA VEZ</i> por Marcador)',
    KEYBINDINGS: 'Atajos de teclado',
    EDIT_KEYBINDS: 'Editar atajos',
    SAVE_KEYBINDS: 'Guardar atajos',
    BUTTON_EDIT: 'Editar',
    BUTTON_SAVE: 'Guardar',
    KEYBIND_RULES: `
    <h3>Teclas soportadas</h3>
    Modificadores permitidos: shift, option, alt, ctrl, control, command. </br>
    Teclas especiales: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide. <br>
    Ejemplos: <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd>
  `,
    ATTENTION: 'Atención',
    WARNING: 'Alerta',
    BUTTON_RESET_SETTINGS: 'Reiniciar ajustes(Reset Settings)',
    SETTINGS_RESET:
      'Se han restablecido los ajustes, vuelve a cargar la página para que surta efecto',
    LANGUAGE_CHANGED: 'Se ha cambiado el idioma, vuelve a cargar la página para que surta efecto',
    AUTO_DOWNLOAD:
      'La próxima vez que termine de cargarse un capítulo, se le pedirá que guarde automáticamente',
    LAZY_LOAD:
      "La carga diferida es incompatible con la descarga zip, no podrá descargar con este ajuste activado.<br/> Sugerencia: <span style='color:red;font-weight:bold'>Desactivar miniaturas</span> para ahorrar Ancho de banda/Memoria.",
    LAZY_LOAD_IMAGES_ENABLE: 'Habilitar carga de imágenes diferida',
    LAZY_LOAD_IMAGES: 'Empezar carga diferida a partir de la página (entre 5 y 100)',
    RETURN_CHAPTER_LIST: 'Regresar a la lista de capítulos',
    PAGES_LOADED: 'Páginas cargadas',
    GO_TO_PAGE: 'Ir a página',
    ENLARGE: 'Agrandar',
    RESTORE: 'Restaurar',
    REDUCE: 'Reducir',
    FIT_WIDTH: 'Ajustar al ancho',
    FIT_HEIGHT: 'Ajustar al alto',
    PERCENT: 'Porcentual',
    TOGGLE_CONTROLS: 'Alternar controles de página',
    ZOOM_IN: 'Acercar',
    ZOOM_OUT: 'Alejar',
    ZOOM_RESET: 'Restablecer zoom',
    ZOOM_WIDTH: 'Zoom al ancho',
    ZOOM_HEIGHT: 'Zoom al alto',
    HIDE: 'Ocultar',
    RELOAD: 'Recargar',
    SLOWLY: 'Lento',
    NORMAL: 'Normal',
    FAST: 'Rápido',
    EXTREME: 'Extremo',
    ALL_PAGES: 'Todas las páginas',
    SPEED_WARNING: 'Velocidad de carga muy alta',
    SPEED_WARNING_MESSAGE:
      'No se recomienda esta velocidad.<br> Puede dañar algunos servidores o marcar su IP como atacante DDoS.<br> ¡Utilícelo con precaución!',
    SCROLL_UP: 'Desplazar arriba',
    SCROLL_DOWN: 'Desplazar abajo',
    CLOSE: 'Cerrar',
    LIST_EMPTY: 'Lista vacía',
    DISPLAY_COMMENTS: 'Mostrar comentarios',
    COMMENTS: 'Sección de comentarios',
    SCROLL_START: 'Alternar desplazamiento automático',
    AUTO_SCROLL_HEIGHT: 'Velocidad de desplazamiento automático en píxeles',
    VERTICAL_SEPARATOR: 'Mostrar separadores verticales',
    END: 'Fin',
    SCOPE: 'Alcance',
    GLOBAL: 'Global',
    GENERAL: 'General',
    LOADING: 'Carga',
    ZOOM: 'Zoom',
    OTHERS: 'Otros',
    NAVBAR_TYPE: 'Cambiar el tipo de barra de navegación',
    NAVBAR_BOTTOM: 'Abajo',
    NAVBAR_LEFT: 'Izquierda',
    NAVBAR_RIGHT: 'Derecha',
    NAVBAR_DISABLED: 'Desactivado',
    ENABLE_PAGINATION: 'Habilitar paginación',
    FILE_MENU: 'Menú principal',
    VIEW_MENU: 'Ver menú',
    ZOOM_MENU: 'Menú Zoom',
  };

  const fr_FR = {
    ID: 'fr_FR',
    NAME: 'Français (FR)',
    STARTING: 'Démarrage<br>Manga OnlineViewer',
    RESUME: 'Reprise de la lecture à partir de la Page ',
    WAITING: 'Veuillez patienter, 3 secondes...',
    CHOOSE_BEGINNING: 'Choisissez la page par laquelle commencer :',
    BUTTON_START: 'Démarrer Manga OnlineViewer',
    SETTINGS: 'Paramètres',
    LANGUAGE: 'Langue',
    COLOR_SCHEME: 'Palette de couleurs',
    THEME: 'Thème',
    THEME_COLOR: 'Couleur',
    THEME_HUE: 'Teinte de couleur',
    THEME_SHADE: 'Nuance de couleur',
    DEFAULT_LOAD_MODE: 'Mode de chargement par défaut',
    LOAD_MODE_NORMAL: 'Normal (attendre 3 s)',
    LOAD_MODE_ALWAYS: 'Toujours (immédiatement)',
    LOAD_MODE_NEVER: 'Jamais (manuellement)',
    LOAD_SPEED: 'Vitesse de chargement des pages/seconde',
    DEFAULT_ZOOM: 'Zoom par défaut (entre 5 et 200)',
    DEFAULT_ZOOM_MODE: 'Mode de zoom par défaut',
    MINIMUM_ZOOM: "Zoom minimum par rapport à la largeur de l'écran (entre 30 et 100)",
    ZOOM_STEP: 'Pas de changement de zoom (entre 5 et 50)',
    DEFAULT_VIEW_MODE: "Mode d'affichage par défaut",
    VIEW_MODE_VERTICAL: 'Vertical',
    VIEW_MODE_LEFT: 'De gauche à droite',
    VIEW_MODE_RIGHT: 'De droite à gauche',
    VIEW_MODE_WEBCOMIC: 'WebComic',
    FIT_WIDTH_OVERSIZED: 'Ajuster à la largeur si surdimensionné',
    SHOW_THUMBNAILS: 'Afficher les vignettes',
    ENABLE_COMMENTS: 'Capturer les commentaires (si disponibles)',
    HIDE_CONTROLS: 'Toujours masquer les contrôles de page',
    HEADER_TYPE: "Changer le type d'en-tête",
    HEADER_HOVER: 'Survol',
    HEADER_SCROLL: 'Défilement',
    HEADER_CLICK: 'Clic',
    HEADER_FIXED: 'Fixe',
    HEADER_SIMPLE: 'Simple',
    BUTTON_DOWNLOAD: 'Télécharger',
    DOWNLOAD_ZIP: 'Télécharger le fichier Zip',
    DOWNLOAD_IMAGES: 'Télécharger les images en Zip automatiquement',
    BUTTON_NEXT: 'Suivant',
    NEXT_CHAPTER: 'Chapitre suivant',
    BUTTON_PREVIOUS: 'Précédent',
    PREVIOUS_CHAPTER: 'Chapitre précédent',
    BOOKMARKS: 'Favoris',
    BOOKMARK: 'Favori',
    BOOKMARK_REMOVED: 'Favori supprimé',
    BOOKMARK_SAVED: 'Favori enregistré',
    BOOKMARK_MESSAGE:
      'La prochaine fois que vous ouvrirez ce chapitre, il reprendra à partir de :<h4>Page ##num##</h4>(Seulement <i>UNE FOIS</i> par favori)',
    KEYBINDINGS: 'Raccourcis clavier',
    EDIT_KEYBINDS: 'Modifier les raccourcis clavier',
    SAVE_KEYBINDS: 'Enregistrer les raccourcis clavier',
    BUTTON_EDIT: 'Modifier',
    BUTTON_SAVE: 'Enregistrer',
    KEYBIND_RULES: `
    <h3>Touches prises en charge</h3>
    Modificateurs autorisés : shift, option, alt, ctrl, control, command. </br>
    Touches spéciales : backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide. </br>
    Exemples : <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd>
  `,
    ATTENTION: 'Attention',
    WARNING: 'Avertissement',
    BUTTON_RESET_SETTINGS: 'Réinitialiser les paramètres',
    SETTINGS_RESET: 'Les paramètres ont été réinitialisés, rechargez la page pour prendre effet',
    LANGUAGE_CHANGED: 'La langue a été modifiée, rechargez la page pour prendre effet',
    AUTO_DOWNLOAD:
      "La prochaine fois qu'un chapitre finira de se charger, il vous sera proposé de l'enregistrer automatiquement",
    LAZY_LOAD:
      "Le chargement paresseux est incompatible avec le téléchargement zip, vous ne pourrez pas télécharger avec ce paramètre activé.<br/> Suggestion : <span style='color:red;font-weight:bold'>Désactivez les vignettes</span> pour économiser de la bande passante/mémoire.",
    LAZY_LOAD_IMAGES_ENABLE: 'Activer le chargement paresseux des images',
    LAZY_LOAD_IMAGES: 'Début du chargement paresseux à partir de la page (entre 5 et 100)',
    RETURN_CHAPTER_LIST: 'Retour à la liste des chapitres',
    PAGES_LOADED: 'Pages chargées',
    GO_TO_PAGE: 'Aller à la page',
    ENLARGE: 'Agrandir',
    RESTORE: 'Restaurer',
    REDUCE: 'Réduire',
    FIT_WIDTH: 'Ajuster à la largeur',
    FIT_HEIGHT: 'Ajuster à la hauteur',
    PERCENT: 'Pourcentage',
    TOGGLE_CONTROLS: 'Basculer les contrôles de page',
    ZOOM_IN: 'Zoom avant',
    ZOOM_OUT: 'Zoom arrière',
    ZOOM_RESET: 'Réinitialiser le zoom',
    ZOOM_WIDTH: 'Zoomer à la largeur',
    ZOOM_HEIGHT: 'Zoomer à la hauteur',
    HIDE: 'Masquer',
    RELOAD: 'Recharger',
    SLOWLY: 'Lentement',
    NORMAL: 'Normal',
    FAST: 'Rapide',
    EXTREME: 'Extrême',
    ALL_PAGES: 'Toutes les pages',
    SPEED_WARNING: 'Vitesse de chargement trop élevée',
    SPEED_WARNING_MESSAGE:
      "Cette vitesse n'est pas recommandée.<br> Elle peut nuire à certains serveurs ou marquer votre IP comme un attaquant DDoS.<br> Veuillez l'utiliser avec prudence !",
    SCROLL_UP: 'Faire défiler vers le haut',
    SCROLL_DOWN: 'Faire défiler vers le bas',
    CLOSE: 'Fermer',
    LIST_EMPTY: 'Liste vide',
    DISPLAY_COMMENTS: 'Afficher les commentaires',
    COMMENTS: 'Section des commentaires',
    SCROLL_START: 'Basculer le défilement automatique',
    AUTO_SCROLL_HEIGHT: 'Vitesse de défilement automatique en pixels',
    VERTICAL_SEPARATOR: 'Afficher les séparateurs verticaux',
    END: 'Fin',
    SCOPE: 'Portée',
    GLOBAL: 'Global',
    GENERAL: 'Général',
    LOADING: 'Chargement',
    ZOOM: 'Zoom',
    OTHERS: 'Autres',
    NAVBAR_TYPE: 'Changer le type de barre de navigation',
    NAVBAR_BOTTOM: 'Bas',
    NAVBAR_LEFT: 'Gauche',
    NAVBAR_RIGHT: 'Droite',
    NAVBAR_DISABLED: 'Désactivé',
    ENABLE_PAGINATION: 'Activer la pagination',
    FILE_MENU: 'Menu principal',
    VIEW_MENU: 'Menu Affichage',
    ZOOM_MENU: 'Menu Zoom',
  };

  const pt_BR = {
    ID: 'pt_BR',
    NAME: 'Portugues (Brasil)',
    STARTING: 'Iniciando<br>Manga OnlineViewer',
    RESUME: 'Continuando leitura na Pagina ',
    WAITING: 'Por Favor espere, 3 segundos...',
    CHOOSE_BEGINNING: 'Escolha a pagina de onde começar:',
    BUTTON_START: 'Iniciar Manga OnlineViewer',
    SETTINGS: 'Configurações',
    LANGUAGE: 'Idioma',
    COLOR_SCHEME: 'Esquema de Color',
    THEME: 'Tema',
    THEME_COLOR: 'Cor',
    THEME_HUE: 'Tom da Cor',
    THEME_SHADE: 'Saturação da Cor',
    DEFAULT_LOAD_MODE: 'Forma de Carregamento Padrão',
    LOAD_MODE_NORMAL: 'Normal(Esperando 3 sec)',
    LOAD_MODE_ALWAYS: 'Sempre(Imediatamente)',
    LOAD_MODE_NEVER: 'Nunca(Manualmente)',
    LOAD_SPEED: 'Velocidade de Carregamento Paginas/Segundo',
    DEFAULT_ZOOM: 'Zoom padrão (entre 5 e 200)',
    DEFAULT_ZOOM_MODE: 'Modo de Zoom padrão',
    MINIMUM_ZOOM: 'Zoom minimo, relativo ao tamanho da tela (entre 30 e 100)',
    ZOOM_STEP: 'Precisão da Mudança do Zoom (entre 5 e 50)',
    DEFAULT_VIEW_MODE: 'Modo de Visualização Padrão',
    VIEW_MODE_VERTICAL: 'Vertical',
    VIEW_MODE_LEFT: 'Esquerda para Direita',
    VIEW_MODE_RIGHT: 'Direita para Esquerda',
    VIEW_MODE_WEBCOMIC: 'WebComic',
    FIT_WIDTH_OVERSIZED: 'Encher a tela se grande demais',
    SHOW_THUMBNAILS: 'Mostra Miniaturas',
    ENABLE_COMMENTS: 'Capturar comentários (quando disponível)',
    HIDE_CONTROLS: 'Sempre esconder controles das paginas',
    HEADER_TYPE: 'Mudar Tipo de Cabeçalho',
    HEADER_HOVER: 'Passar por perto',
    HEADER_SCROLL: 'Rolagem do Mouse',
    HEADER_CLICK: 'Click',
    HEADER_FIXED: 'Fixo',
    HEADER_SIMPLE: 'Simples',
    BUTTON_DOWNLOAD: 'Download',
    DOWNLOAD_ZIP: 'Baixar arquivo Zip',
    DOWNLOAD_IMAGES: 'Download das Imagens como Zip Automaticamente',
    BUTTON_NEXT: 'Proximo',
    NEXT_CHAPTER: 'Proximo Capitulo',
    BUTTON_PREVIOUS: 'Anterior',
    PREVIOUS_CHAPTER: 'Capitulo Anterior',
    BOOKMARKS: 'Marca paginas',
    BOOKMARK: 'Marcar pagina',
    BOOKMARK_REMOVED: 'Marca pagina Removido',
    BOOKMARK_SAVED: 'Marca pagina Salvo',
    BOOKMARK_MESSAGE:
      'Proxima vez que abrir este capitulo continuará a partir da <h4>Pagina ##num##</h4>(Apenas <i>UMA VEZ</i> por marca pagina)',
    KEYBINDINGS: 'Atalhos',
    EDIT_KEYBINDS: 'Editar Atalhos',
    SAVE_KEYBINDS: 'Salvar Atalhos',
    BUTTON_EDIT: 'Editar',
    BUTTON_SAVE: 'Salvar',
    KEYBIND_RULES: `
    <h3>Teclas Suportadas</h3>
    Modificadores permitidos: shift, option, alt, ctrl, control, command. </br>
    Teclas Especiais: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide.</br>
    Exemplos: <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd>
  `,
    ATTENTION: 'Atenção',
    WARNING: 'Alerta',
    BUTTON_RESET_SETTINGS: 'Limpar Configurações(Reset Settings)',
    SETTINGS_RESET: 'Configurações foram limpas, recarregue o site para efetivar a alteração',
    LANGUAGE_CHANGED: 'Idioma foi alterado, recarregue o site para efetivar a alteração',
    AUTO_DOWNLOAD: 'Proxima vez que abrir um capitulo download iniciara automaticamente',
    LAZY_LOAD:
      "Carregamento preguiçoso não é compativel com download de zip, não conseguira com essa configuração ativa.<br/> Sugestão: <span style='color:red;font-weight:bold'>Desative Miniaturas</span> para economizar memoria e cota de internet.",
    LAZY_LOAD_IMAGES_ENABLE: 'Ativar Carregamento de imagens preguiçoso',
    LAZY_LOAD_IMAGES: 'Carregamento de paginas preguiçoso começa a partir de (entre 5 e 100)',
    RETURN_CHAPTER_LIST: 'Voltar a lista de Capitulos',
    PAGES_LOADED: 'Paginas Carregadas',
    GO_TO_PAGE: 'Pular para',
    ENLARGE: 'Aumentar',
    RESTORE: 'Restaurar',
    REDUCE: 'Diminuir',
    FIT_WIDTH: 'Preencher Largura',
    FIT_HEIGHT: 'Preencher Altura ',
    PERCENT: 'Percentual',
    TOGGLE_CONTROLS: 'Mostar controles de pagina',
    ZOOM_IN: 'Mais Zoom',
    ZOOM_OUT: 'Menos Zoom',
    ZOOM_RESET: 'Resetar Zoom',
    ZOOM_WIDTH: 'Zoom para Largura',
    ZOOM_HEIGHT: 'Zoom para Altura',
    HIDE: 'Esconder',
    RELOAD: 'Recarregar',
    SLOWLY: 'Devagar',
    NORMAL: 'Normal',
    FAST: 'Rapido',
    EXTREME: 'Extremo',
    ALL_PAGES: 'Todas as Paginas',
    SPEED_WARNING: 'Velocidade de Carregamento muito alta',
    SPEED_WARNING_MESSAGE:
      'Essa velocidade não é recomendada.<br> Ela pode derrubar um servidor or marcar voce como um ataque hacker de DDoS.<br> Use com cuidado!',
    SCROLL_UP: 'Subir Pagina',
    SCROLL_DOWN: 'Descer Pagina',
    CLOSE: 'Fechar',
    LIST_EMPTY: 'Lista Vazia',
    DISPLAY_COMMENTS: 'Mostar Comentarios',
    COMMENTS: 'Seção de comentários',
    SCROLL_START: 'Ativar Rolagem Automatica',
    AUTO_SCROLL_HEIGHT: 'Velocidade da Rolagem Automatica em Pixels',
    VERTICAL_SEPARATOR: 'Mostrar Separadores Verticais',
    END: 'Fin',
    SCOPE: 'Escopo',
    GLOBAL: 'Global',
    GENERAL: 'Geral',
    LOADING: 'Carregamento',
    ZOOM: 'Zoom',
    OTHERS: 'Outros',
    NAVBAR_TYPE: 'Mudar barra de navegação',
    NAVBAR_BOTTOM: 'Embaixo',
    NAVBAR_LEFT: 'Esquerda',
    NAVBAR_RIGHT: 'Direita',
    NAVBAR_DISABLED: 'Desativado',
    ENABLE_PAGINATION: 'Ligar Paginação',
    FILE_MENU: 'Menu Principal',
    VIEW_MENU: 'Menu de Visualizações',
    ZOOM_MENU: 'Menu de Zoom',
  };

  const zh_CN = {
    ID: 'zh_CN',
    NAME: '中文 (简体)',
    STARTING: '正在启动<br>Manga OnlineViewer',
    RESUME: '从页面继续阅读 ',
    WAITING: '请等待3秒钟...',
    CHOOSE_BEGINNING: '选择要开始的页数:',
    BUTTON_START: '启动Manga OnlineViewer',
    SETTINGS: '设置',
    LANGUAGE: '语言',
    COLOR_SCHEME: '配色方案',
    THEME: '主题',
    THEME_COLOR: '颜色',
    THEME_HUE: '色相',
    THEME_SHADE: '色度',
    DEFAULT_LOAD_MODE: '默认加载模式',
    LOAD_MODE_NORMAL: '等待模式(等待3秒自动加载 )',
    LOAD_MODE_ALWAYS: '自动模式(无需等待)',
    LOAD_MODE_NEVER: '手动模式(点击启动)',
    LOAD_SPEED: '加载速度页数/秒',
    DEFAULT_ZOOM: '默认缩放 (最小 5 最大 200)',
    DEFAULT_ZOOM_MODE: '默认缩放模式',
    MINIMUM_ZOOM: '相对于屏幕宽度的最小缩放 (最小 30 最大 100)',
    ZOOM_STEP: '缩放级别 (最小 5 最大 50)',
    DEFAULT_VIEW_MODE: '默认视图模式',
    VIEW_MODE_VERTICAL: '垂直有缝',
    VIEW_MODE_LEFT: '从左到右',
    VIEW_MODE_RIGHT: '从右到左',
    VIEW_MODE_WEBCOMIC: '垂直无缝',
    FIT_WIDTH_OVERSIZED: '如果尺寸过大、则适合宽度',
    SHOW_THUMBNAILS: '显示缩略图',
    ENABLE_COMMENTS: '捕获评论（如果可用）',
    HIDE_CONTROLS: '始终隐藏页面控件',
    HEADER_TYPE: '更改标题显示方式',
    HEADER_HOVER: '悬停',
    HEADER_SCROLL: '滚动',
    HEADER_CLICK: '点击',
    HEADER_FIXED: '固定',
    HEADER_SIMPLE: '简单',
    BUTTON_DOWNLOAD: '下载',
    DOWNLOAD_ZIP: '下载压缩文件',
    DOWNLOAD_IMAGES: '自动将图片下载成ZIP',
    BUTTON_NEXT: '下一页',
    NEXT_CHAPTER: '下一章',
    BUTTON_PREVIOUS: '上一页',
    PREVIOUS_CHAPTER: '上一章',
    BOOKMARKS: '书签',
    BOOKMARK: 'Bookmark',
    BOOKMARK_REMOVED: '删除书签',
    BOOKMARK_SAVED: '保存书签',
    BOOKMARK_MESSAGE: '下次打开本章时，将从:<h4>页码 ##num##</h4>(<i>仅一次</i> 每个书签)',
    KEYBINDINGS: '快捷键',
    EDIT_KEYBINDS: '编辑键绑定',
    SAVE_KEYBINDS: '保存键绑定',
    BUTTON_EDIT: '编辑',
    BUTTON_SAVE: '救',
    KEYBIND_RULES: `
    <h3>支持的密钥</h3>
    允许的修饰符: shift, option, alt, ctrl, control, command. </br>
    特殊键: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide.</br>
    例子: <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd>
  `,
    ATTENTION: '注意',
    WARNING: '警告',
    BUTTON_RESET_SETTINGS: '重置设置(Reset Settings)',
    SETTINGS_RESET: '设置已重置、重新加载页面才能生效',
    LANGUAGE_CHANGED: '语言已更改、重新加载页面才能生效',
    AUTO_DOWNLOAD: '下次章节加载完成时、系统将提示您自动保存',
    LAZY_LOAD:
      "延迟加载与zip下载不兼容、您将无法使用此设置下载.<br/> 建议: <span style='color:red;font-weight:bold'>禁用缩略图</span> 以节省流量和内存.",
    LAZY_LOAD_IMAGES_ENABLE: '启用延迟加载图像',
    LAZY_LOAD_IMAGES: '惰性加载从页面 (最小 5 最大 100)',
    RETURN_CHAPTER_LIST: '返回章节列表',
    PAGES_LOADED: '已加载的页数',
    GO_TO_PAGE: '转到页数',
    ENLARGE: '放大',
    RESTORE: '还原',
    REDUCE: '缩小',
    FIT_WIDTH: '适合宽度',
    FIT_HEIGHT: '适合高度',
    PERCENT: '百分之',
    TOGGLE_CONTROLS: '显示隐藏页面控件',
    ZOOM_IN: '放大',
    ZOOM_OUT: '缩小',
    ZOOM_RESET: '还原',
    ZOOM_WIDTH: '适合宽度',
    ZOOM_HEIGHT: '适合高度',
    HIDE: '显示隐藏页面控件',
    RELOAD: '重新加载',
    SLOWLY: '慢速',
    NORMAL: '正常',
    FAST: '快速',
    EXTREME: '极端',
    ALL_PAGES: '所有页面',
    SPEED_WARNING: '加载速度过高',
    SPEED_WARNING_MESSAGE:
      '不建议使用此速度.<br>它可能会伤害某些服务器或将您的 IP 标记为 DDoS 攻击者.<br>请谨慎使用!',
    SCROLL_UP: '向上滚动',
    SCROLL_DOWN: '向下滚动',
    CLOSE: '关闭',
    LIST_EMPTY: '没有收藏书签',
    DISPLAY_COMMENTS: '显示注释',
    COMMENTS: '评论部分',
    SCROLL_START: '切换自动滚动',
    AUTO_SCROLL_HEIGHT: '自动滚动速度（以像素为单位）',
    VERTICAL_SEPARATOR: '显示垂直分隔符',
    END: '结尾',
    SCOPE: '范围',
    GLOBAL: '全球',
    GENERAL: '常规',
    LOADING: '装载',
    ZOOM: '缩放',
    OTHERS: '别人',
    NAVBAR_TYPE: '更改导航栏类型',
    NAVBAR_BOTTOM: '底部',
    NAVBAR_LEFT: '左边',
    NAVBAR_RIGHT: '正确的',
    NAVBAR_DISABLED: '已禁用',
    ENABLE_PAGINATION: '启用分页',
    FILE_MENU: '主菜单',
    VIEW_MENU: '查看菜单',
    ZOOM_MENU: '缩放菜单',
  };

  const locales = [en_US, es_ES, pt_BR, zh_CN, de_DE, fr_FR];

  function isImagesManga(manga) {
    return 'listImages' in manga && !isNothing(manga.listImages);
  }
  function isPagesManga(manga) {
    return 'listPages' in manga && !isNothing(manga.listPages);
  }
  function isBruteforceManga(manga) {
    return 'bruteForce' in manga && !isNothing(manga.bruteForce);
  }

  var Language = /* @__PURE__ */ (Language2 => {
    Language2['ENGLISH'] = 'English';
    Language2['SPANISH'] = 'Spanish';
    Language2['PORTUGUESE'] = 'Portuguese';
    Language2['CHINESE'] = 'Chinese';
    Language2['RAW'] = 'Raw';
    return Language2;
  })(Language || {});
  var Category = /* @__PURE__ */ (Category2 => {
    Category2['MANGA'] = 'manga';
    Category2['COMIC'] = 'comic';
    Category2['HENTAI'] = 'hentai';
    return Category2;
  })(Category || {});

  function isKey(obj, key) {
    return key in obj;
  }

  const diffObj = (changed, original) => {
    const changes = (object, base) =>
      _.transform(
        object,
        (result, value, key) => {
          if (!_.isEqual(value, base[key])) {
            if (_.isArray(value)) {
              result[key] = _.difference(value, base[key]);
            } else if (_.isObject(value) && _.isObject(base[key])) {
              result[key] = changes(value, base[key]);
            } else {
              result[key] = value;
            }
          }
        },
        /* Omit accumulator */
      );
    return changes(changed, original);
  };

  const defaultSettings = {
    bookmarks: [],
    colorScheme: 'dark',
    downloadZip: false,
    enableComments: true,
    enabled: true,
    fitWidthIfOversize: true,
    header: 'scroll',
    hidePageControls: false,
    lazyLoadImages: false,
    lazyStart: 50,
    loadMode: 'wait',
    locale: 'en_US',
    maxReload: 5,
    minZoom: 30,
    navbar: 'bottom',
    pagination: false,
    scrollHeight: 25,
    theme: '#29487D',
    throttlePageLoad: 1e3,
    viewMode: 'WebComic',
    zoomMode: 'percent',
    zoomStep: 30,
    zoomValue: 100,
    keybinds: {
      SCROLL_UP: ['up', 'W', 'num_8'],
      SCROLL_DOWN: ['down', 'S', 'num_2'],
      NEXT_CHAPTER: ['right', '/', 'D', 'num_6'],
      PREVIOUS_CHAPTER: ['left', ';', 'A', 'num_4'],
      RETURN_CHAPTER_LIST: ['backspace', 'del'],
      ENLARGE: ['-', 'num_add', 'E'],
      REDUCE: ['=', 'num_subtract', 'Q'],
      RESTORE: ['9', 'num_divide', 'R'],
      FIT_WIDTH: ['0', 'num_multiply', 'F'],
      FIT_HEIGHT: ['H'],
      SETTINGS: ['num_divide', 'num_5', 'X'],
      VIEW_MODE_WEBCOMIC: ['C'],
      VIEW_MODE_VERTICAL: ['V'],
      VIEW_MODE_LEFT: ['N'],
      VIEW_MODE_RIGHT: ['B'],
      SCROLL_START: ['space'],
    },
  };
  const mobileSettings = {
    lazyLoadImages: true,
    fitWidthIfOversize: true,
    navbar: 'disabled',
    viewMode: 'WebComic',
    header: 'scroll',
    hidePageControls: true,
    pagination: false,
  };
  function getDefault(global = true) {
    return !isMobile()
      ? { ...defaultSettings, enabled: global, theme: global ? '#29487D' : '#004526' }
      : _.defaultsDeep(mobileSettings, {
          ...defaultSettings,
          enabled: global,
          theme: global ? '#29487D' : '#004526',
        });
  }
  function compareSettingsCustomizer(value, other, key) {
    if (key === 'bookmarks') {
      if (Array.isArray(value) && Array.isArray(other)) {
        if (value.length !== other.length) {
          return false;
        }
        const getBookmarkSortKey = b => `${b.url}-${b.date}`;
        const sortedValue = [...value].sort((a, b) =>
          getBookmarkSortKey(a).localeCompare(getBookmarkSortKey(b)),
        );
        const sortedOther = [...other].sort((a, b) =>
          getBookmarkSortKey(a).localeCompare(getBookmarkSortKey(b)),
        );
        return _.isEqual(sortedValue, sortedOther);
      }
    }
    if (key === 'keybinds') {
      if (typeof value === 'object' && typeof other === 'object') {
        const keysA = Object.keys(value).sort();
        const keysB = Object.keys(other).sort();
        if (!_.isEqual(keysA, keysB)) {
          return false;
        }
        for (const k of keysA) {
          const sortedArrayA = value[k] ? [...value[k]].sort() : [];
          const sortedArrayB = other[k] ? [...other[k]].sort() : [];
          if (!_.isEqual(sortedArrayA, sortedArrayB)) {
            return false;
          }
        }
        return true;
      }
    }
    return void 0;
  }
  function haveSettingsChanged(newSettings, oldSettings, key) {
    if (newSettings === oldSettings) {
      return false;
    }
    if (key) {
      const tempA = { [key]: newSettings };
      const tempB = { [key]: oldSettings };
      return !_.isEqualWith(tempA, tempB, compareSettingsCustomizer);
    }
    return !_.isEqualWith(newSettings, oldSettings, compareSettingsCustomizer);
  }
  let globalSettings = _.defaultsDeep(getGlobalSettings(getDefault()), getDefault());
  let localSettings = _.defaultsDeep(getLocalSettings(getDefault(false)), getDefault(false));
  const isSettingsLocal = () => localSettings?.enabled === true;
  const isLocalSettingsAllowed = key =>
    isSettingsLocal() && !['locale', 'bookmarks', 'keybinds'].includes(key);
  const settings$1 = map(
    isSettingsLocal()
      ? {
          ...localSettings,
          locale: globalSettings.locale,
          keybinds: globalSettings.keybinds,
          bookmarks: globalSettings.bookmarks,
        }
      : globalSettings,
  );
  const locale = computed(
    settings$1,
    current => locales.find(l => l.ID === current.locale) ?? locales[1],
  );
  const appState = map({
    autoScroll: false,
    chapter: e$8(),
    currentPage: 0,
    device: getDevice(),
    loaded: 0,
    manga: void 0,
    panel: 'none',
    scrollToPage: void 0,
  });
  function refreshSettings(key) {
    if (key) {
      const newVal = isLocalSettingsAllowed(key) ? localSettings[key] : globalSettings[key];
      const currentVal = settings$1.get()?.[key];
      if (haveSettingsChanged(currentVal, newVal, key)) {
        settings$1.setKey(key, newVal);
        logScript('Refreshed Settings', key, newVal);
      }
      return;
    }
    const newObj = isSettingsLocal()
      ? {
          ...localSettings,
          locale: globalSettings.locale,
          keybinds: globalSettings.keybinds,
          bookmarks: globalSettings.bookmarks,
        }
      : { ...globalSettings };
    const currentObj = settings$1.get();
    if (haveSettingsChanged(currentObj, newObj)) {
      settings$1.set(newObj);
      logScript('Refreshed Settings', key, null);
    }
  }
  function syncGlobalSettings(newValue) {
    const newSettings = _.defaultsDeep(newValue, getDefault());
    const diff = globalSettings ? diffObj(newSettings, globalSettings) : newSettings;
    if (!isNothing(diff)) {
      logScript('Imported Global Settings', diff);
      globalSettings = newSettings;
      refreshSettings();
    }
  }
  settingsChangeListener(_.debounce(syncGlobalSettings, 300), 'settings');
  function syncLocalSettings(newValue) {
    const newSettings = _.defaultsDeep(newValue, getDefault(false));
    const diff = localSettings ? diffObj(newSettings, localSettings) : newSettings;
    if (!isNothing(diff)) {
      logScript('Imported Local Settings', diff);
      localSettings = newSettings;
      refreshSettings();
    }
  }
  settingsChangeListener(_.debounce(syncLocalSettings, 300), window.location.hostname);
  function getSettingsValue(key) {
    return settings$1.get()?.[key];
  }
  function setSettingsValue(key, value) {
    const current = settings$1.get()?.[key];
    if (!haveSettingsChanged(current, value, key)) return;
    settings$1.setKey(key, value);
  }
  function saveSettingsValue(key, value) {
    const currentEffective = getSettingsValue(key);
    if (!haveSettingsChanged(currentEffective, value, key)) return;
    settings$1.setKey(key, value);
    if (isLocalSettingsAllowed(key)) {
      localSettings[key] = value;
      saveLocalSettings(diffObj(localSettings, getDefault(false)));
    } else {
      globalSettings[key] = value;
      saveGlobalSettings(diffObj(globalSettings, getDefault()));
    }
  }
  function changeSettingsValue(key, fn) {
    const oldValue = getSettingsValue(key);
    const newValue = fn(oldValue);
    setSettingsValue(key, newValue);
  }
  function getAppStateValue(key) {
    return appState.get()[key];
  }
  function setAppStateValue(key, value) {
    const current = appState.get()[key];
    if (_.isEqual(current, value)) return;
    appState.setKey(key, value);
  }
  function changeAppStateValue(key, fn) {
    const oldVal = appState.get()[key];
    const newVal = fn(oldVal);
    if (_.isEqual(oldVal, newVal)) return;
    appState.setKey(key, newVal);
  }
  function changeImage(index, fn) {
    changeAppStateValue('images', images => ({
      ...images,
      [index]: { ...images?.[index], ...fn(images?.[index] ?? {}) },
    }));
  }
  function getLocaleString(name) {
    const currentLocale = locales.find(l => l.ID === getSettingsValue('locale')) ?? locales[1];
    if (isKey(currentLocale, name)) return currentLocale?.[name] ?? locales[1]?.[name];
    return `##MISSING_STRING_${name}##`;
  }
  function resetSettings() {
    if (isSettingsLocal()) {
      removeValueGM(window.location.hostname);
      localSettings = getDefault(false);
    } else {
      removeValueGM('settings');
      globalSettings = getDefault();
    }
    logScript('Settings Reset');
    refreshSettings();
  }
  function toggleLocalSettings(activate = false) {
    localSettings.enabled = activate;
    saveLocalSettings(diffObj(localSettings, getDefault(false)));
    logScript('Local Settings ', activate ? 'Enabled' : 'Disabled');
    refreshSettings();
    return isSettingsLocal();
  }
  function isBookmarked(url = window.location.href) {
    return getSettingsValue('bookmarks').find(el => el.url === url)?.page;
  }
  function showSettings(key = null) {
    logScriptVerbose(
      'Current Settings (Local:',
      isSettingsLocal(),
      ') ',
      key ? settings$1.get()[key] : settings$1.get(),
      '\nGlobal Settings',
      key ? globalSettings[key] : globalSettings,
      '\nLocal Settings',
      key ? localSettings[key] : localSettings,
      '\nAppState',
      appState.get(),
    );
  }
  giveToWindow('MOVSettings', showSettings);
  const navbarSize = 34;

  const sample = {
    navy: '#001f3f',
    darkblue: '#1e4f7a',
    blue: '#1A2F4B',
    darkgreen: '#062925',
    green: '#1A3636',
    grass: '#1B3C53',
    teal: '#044A42',
    darkpurple: '#1B0044',
    purple: '#363062',
    grape: '#31326F',
    maroon: '#44000D',
  };
  const colors = {
    dark: {
      50: '#C1C2C5',
      100: '#A6A7AB',
      200: '#909296',
      300: '#5c5f66',
      400: '#373A40',
      500: '#2C2E33',
      600: '#25262b',
      700: '#1A1B1E',
      800: '#141517',
      900: '#101113',
      950: '#000000',
    },
    slate: {
      '50': 'oklch(98.4% 0.003 247.858)',
      '100': 'oklch(96.8% 0.007 247.896)',
      '200': 'oklch(92.9% 0.013 255.508)',
      '300': 'oklch(86.9% 0.022 252.894)',
      '400': 'oklch(70.4% 0.04 256.788)',
      '500': 'oklch(55.4% 0.046 257.417)',
      '600': 'oklch(44.6% 0.043 257.281)',
      '700': 'oklch(37.2% 0.044 257.287)',
      '800': 'oklch(27.9% 0.041 260.031)',
      '900': 'oklch(20.8% 0.042 265.755)',
      '950': 'oklch(12.9% 0.042 264.695)',
    },
    gray: {
      '50': 'oklch(98.5% 0.002 247.839)',
      '100': 'oklch(96.7% 0.003 264.542)',
      '200': 'oklch(92.8% 0.006 264.531)',
      '300': 'oklch(87.2% 0.01 258.338)',
      '400': 'oklch(70.7% 0.022 261.325)',
      '500': 'oklch(55.1% 0.027 264.364)',
      '600': 'oklch(44.6% 0.03 256.802)',
      '700': 'oklch(37.3% 0.034 259.733)',
      '800': 'oklch(27.8% 0.033 256.848)',
      '900': 'oklch(21% 0.034 264.665)',
      '950': 'oklch(13% 0.028 261.692)',
    },
    zinc: {
      '50': 'oklch(98.5% 0 0)',
      '100': 'oklch(96.7% 0.001 286.375)',
      '200': 'oklch(92% 0.004 286.32)',
      '300': 'oklch(87.1% 0.006 286.286)',
      '400': 'oklch(70.5% 0.015 286.067)',
      '500': 'oklch(55.2% 0.016 285.938)',
      '600': 'oklch(44.2% 0.017 285.786)',
      '700': 'oklch(37% 0.013 285.805)',
      '800': 'oklch(27.4% 0.006 286.033)',
      '900': 'oklch(21% 0.006 285.885)',
      '950': 'oklch(14.1% 0.005 285.823)',
    },
    neutral: {
      '50': 'oklch(98.5% 0 0)',
      '100': 'oklch(97% 0 0)',
      '200': 'oklch(92.2% 0 0)',
      '300': 'oklch(87% 0 0)',
      '400': 'oklch(70.8% 0 0)',
      '500': 'oklch(55.6% 0 0)',
      '600': 'oklch(43.9% 0 0)',
      '700': 'oklch(37.1% 0 0)',
      '800': 'oklch(26.9% 0 0)',
      '900': 'oklch(20.5% 0 0)',
      '950': 'oklch(14.5% 0 0)',
    },
    stone: {
      '50': 'oklch(98.5% 0.001 106.423)',
      '100': 'oklch(97% 0.001 106.424)',
      '200': 'oklch(92.3% 0.003 48.717)',
      '300': 'oklch(86.9% 0.005 56.366)',
      '400': 'oklch(70.9% 0.01 56.259)',
      '500': 'oklch(55.3% 0.013 58.071)',
      '600': 'oklch(44.4% 0.011 73.639)',
      '700': 'oklch(37.4% 0.01 67.558)',
      '800': 'oklch(26.8% 0.007 34.298)',
      '900': 'oklch(21.6% 0.006 56.043)',
      '950': 'oklch(14.7% 0.004 49.25)',
    },
    red: {
      '50': 'oklch(97.1% 0.013 17.38)',
      '100': 'oklch(93.6% 0.032 17.717)',
      '200': 'oklch(88.5% 0.062 18.334)',
      '300': 'oklch(80.8% 0.114 19.571)',
      '400': 'oklch(70.4% 0.191 22.216)',
      '500': 'oklch(63.7% 0.237 25.331)',
      '600': 'oklch(57.7% 0.245 27.325)',
      '700': 'oklch(50.5% 0.213 27.518)',
      '800': 'oklch(44.4% 0.177 26.899)',
      '900': 'oklch(39.6% 0.141 25.723)',
      '950': 'oklch(25.8% 0.092 26.042)',
    },
    orange: {
      '50': 'oklch(98% 0.016 73.684)',
      '100': 'oklch(95.4% 0.038 75.164)',
      '200': 'oklch(90.1% 0.076 70.697)',
      '300': 'oklch(83.7% 0.128 66.29)',
      '400': 'oklch(75% 0.183 55.934)',
      '500': 'oklch(70.5% 0.213 47.604)',
      '600': 'oklch(64.6% 0.222 41.116)',
      '700': 'oklch(55.3% 0.195 38.402)',
      '800': 'oklch(47% 0.157 37.304)',
      '900': 'oklch(40.8% 0.123 38.172)',
      '950': 'oklch(26.6% 0.079 36.259)',
    },
    amber: {
      '50': 'oklch(98.7% 0.022 95.277)',
      '100': 'oklch(96.2% 0.059 95.617)',
      '200': 'oklch(92.4% 0.12 95.746)',
      '300': 'oklch(87.9% 0.169 91.605)',
      '400': 'oklch(82.8% 0.189 84.429)',
      '500': 'oklch(76.9% 0.188 70.08)',
      '600': 'oklch(66.6% 0.179 58.318)',
      '700': 'oklch(55.5% 0.163 48.998)',
      '800': 'oklch(47.3% 0.137 46.201)',
      '900': 'oklch(41.4% 0.112 45.904)',
      '950': 'oklch(27.9% 0.077 45.635)',
    },
    yellow: {
      '50': 'oklch(98.7% 0.026 102.212)',
      '100': 'oklch(97.3% 0.071 103.193)',
      '200': 'oklch(94.5% 0.129 101.54)',
      '300': 'oklch(90.5% 0.182 98.111)',
      '400': 'oklch(85.2% 0.199 91.936)',
      '500': 'oklch(79.5% 0.184 86.047)',
      '600': 'oklch(68.1% 0.162 75.834)',
      '700': 'oklch(55.4% 0.135 66.442)',
      '800': 'oklch(47.6% 0.114 61.907)',
      '900': 'oklch(42.1% 0.095 57.708)',
      '950': 'oklch(28.6% 0.066 53.813)',
    },
    lime: {
      '50': 'oklch(98.6% 0.031 120.757)',
      '100': 'oklch(96.7% 0.067 122.328)',
      '200': 'oklch(93.8% 0.127 124.321)',
      '300': 'oklch(89.7% 0.196 126.665)',
      '400': 'oklch(84.1% 0.238 128.85)',
      '500': 'oklch(76.8% 0.233 130.85)',
      '600': 'oklch(64.8% 0.2 131.684)',
      '700': 'oklch(53.2% 0.157 131.589)',
      '800': 'oklch(45.3% 0.124 130.933)',
      '900': 'oklch(40.5% 0.101 131.063)',
      '950': 'oklch(27.4% 0.072 132.109)',
    },
    green: {
      '50': 'oklch(98.2% 0.018 155.826)',
      '100': 'oklch(96.2% 0.044 156.743)',
      '200': 'oklch(92.5% 0.084 155.995)',
      '300': 'oklch(87.1% 0.15 154.449)',
      '400': 'oklch(79.2% 0.209 151.711)',
      '500': 'oklch(72.3% 0.219 149.579)',
      '600': 'oklch(62.7% 0.194 149.214)',
      '700': 'oklch(52.7% 0.154 150.069)',
      '800': 'oklch(44.8% 0.119 151.328)',
      '900': 'oklch(39.3% 0.095 152.535)',
      '950': 'oklch(26.6% 0.065 152.934)',
    },
    emerald: {
      '50': 'oklch(97.9% 0.021 166.113)',
      '100': 'oklch(95% 0.052 163.051)',
      '200': 'oklch(90.5% 0.093 164.15)',
      '300': 'oklch(84.5% 0.143 164.978)',
      '400': 'oklch(76.5% 0.177 163.223)',
      '500': 'oklch(69.6% 0.17 162.48)',
      '600': 'oklch(59.6% 0.145 163.225)',
      '700': 'oklch(50.8% 0.118 165.612)',
      '800': 'oklch(43.2% 0.095 166.913)',
      '900': 'oklch(37.8% 0.077 168.94)',
      '950': 'oklch(26.2% 0.051 172.552)',
    },
    teal: {
      '50': 'oklch(98.4% 0.014 180.72)',
      '100': 'oklch(95.3% 0.051 180.801)',
      '200': 'oklch(91% 0.096 180.426)',
      '300': 'oklch(85.5% 0.138 181.071)',
      '400': 'oklch(77.7% 0.152 181.912)',
      '500': 'oklch(70.4% 0.14 182.503)',
      '600': 'oklch(60% 0.118 184.704)',
      '700': 'oklch(51.1% 0.096 186.391)',
      '800': 'oklch(43.7% 0.078 188.216)',
      '900': 'oklch(38.6% 0.063 188.416)',
      '950': 'oklch(27.7% 0.046 192.524)',
    },
    cyan: {
      '50': 'oklch(98.4% 0.019 200.873)',
      '100': 'oklch(95.6% 0.045 203.388)',
      '200': 'oklch(91.7% 0.08 205.041)',
      '300': 'oklch(86.5% 0.127 207.078)',
      '400': 'oklch(78.9% 0.154 211.53)',
      '500': 'oklch(71.5% 0.143 215.221)',
      '600': 'oklch(60.9% 0.126 221.723)',
      '700': 'oklch(52% 0.105 223.128)',
      '800': 'oklch(45% 0.085 224.283)',
      '900': 'oklch(39.8% 0.07 227.392)',
      '950': 'oklch(30.2% 0.056 229.695)',
    },
    sky: {
      '50': 'oklch(97.7% 0.013 236.62)',
      '100': 'oklch(95.1% 0.026 236.824)',
      '200': 'oklch(90.1% 0.058 230.902)',
      '300': 'oklch(82.8% 0.111 230.318)',
      '400': 'oklch(74.6% 0.16 232.661)',
      '500': 'oklch(68.5% 0.169 237.323)',
      '600': 'oklch(58.8% 0.158 241.966)',
      '700': 'oklch(50% 0.134 242.749)',
      '800': 'oklch(44.3% 0.11 240.79)',
      '900': 'oklch(39.1% 0.09 240.876)',
      '950': 'oklch(29.3% 0.066 243.157)',
    },
    blue: {
      '50': 'oklch(97% 0.014 254.604)',
      '100': 'oklch(93.2% 0.032 255.585)',
      '200': 'oklch(88.2% 0.059 254.128)',
      '300': 'oklch(80.9% 0.105 251.813)',
      '400': 'oklch(70.7% 0.165 254.624)',
      '500': 'oklch(62.3% 0.214 259.815)',
      '600': 'oklch(54.6% 0.245 262.881)',
      '700': 'oklch(48.8% 0.243 264.376)',
      '800': 'oklch(42.4% 0.199 265.638)',
      '900': 'oklch(37.9% 0.146 265.522)',
      '950': 'oklch(28.2% 0.091 267.935)',
    },
    indigo: {
      '50': 'oklch(96.2% 0.018 272.314)',
      '100': 'oklch(93% 0.034 272.788)',
      '200': 'oklch(87% 0.065 274.039)',
      '300': 'oklch(78.5% 0.115 274.713)',
      '400': 'oklch(67.3% 0.182 276.935)',
      '500': 'oklch(58.5% 0.233 277.117)',
      '600': 'oklch(51.1% 0.262 276.966)',
      '700': 'oklch(45.7% 0.24 277.023)',
      '800': 'oklch(39.8% 0.195 277.366)',
      '900': 'oklch(35.9% 0.144 278.697)',
      '950': 'oklch(25.7% 0.09 281.288)',
    },
    violet: {
      '50': 'oklch(96.9% 0.016 293.756)',
      '100': 'oklch(94.3% 0.029 294.588)',
      '200': 'oklch(89.4% 0.057 293.283)',
      '300': 'oklch(81.1% 0.111 293.571)',
      '400': 'oklch(70.2% 0.183 293.541)',
      '500': 'oklch(60.6% 0.25 292.717)',
      '600': 'oklch(54.1% 0.281 293.009)',
      '700': 'oklch(49.1% 0.27 292.581)',
      '800': 'oklch(43.2% 0.232 292.759)',
      '900': 'oklch(38% 0.189 293.745)',
      '950': 'oklch(28.3% 0.141 291.089)',
    },
    purple: {
      '50': 'oklch(97.7% 0.014 308.299)',
      '100': 'oklch(94.6% 0.033 307.174)',
      '200': 'oklch(90.2% 0.063 306.703)',
      '300': 'oklch(82.7% 0.119 306.383)',
      '400': 'oklch(71.4% 0.203 305.504)',
      '500': 'oklch(62.7% 0.265 303.9)',
      '600': 'oklch(55.8% 0.288 302.321)',
      '700': 'oklch(49.6% 0.265 301.924)',
      '800': 'oklch(43.8% 0.218 303.724)',
      '900': 'oklch(38.1% 0.176 304.987)',
      '950': 'oklch(29.1% 0.149 302.717)',
    },
    fuchsia: {
      '50': 'oklch(97.7% 0.017 320.058)',
      '100': 'oklch(95.2% 0.037 318.852)',
      '200': 'oklch(90.3% 0.076 319.62)',
      '300': 'oklch(83.3% 0.145 321.434)',
      '400': 'oklch(74% 0.238 322.16)',
      '500': 'oklch(66.7% 0.295 322.15)',
      '600': 'oklch(59.1% 0.293 322.896)',
      '700': 'oklch(51.8% 0.253 323.949)',
      '800': 'oklch(45.2% 0.211 324.591)',
      '900': 'oklch(40.1% 0.17 325.612)',
      '950': 'oklch(29.3% 0.136 325.661)',
    },
    pink: {
      '50': 'oklch(97.1% 0.014 343.198)',
      '100': 'oklch(94.8% 0.028 342.258)',
      '200': 'oklch(89.9% 0.061 343.231)',
      '300': 'oklch(82.3% 0.12 346.018)',
      '400': 'oklch(71.8% 0.202 349.761)',
      '500': 'oklch(65.6% 0.241 354.308)',
      '600': 'oklch(59.2% 0.249 0.584)',
      '700': 'oklch(52.5% 0.223 3.958)',
      '800': 'oklch(45.9% 0.187 3.815)',
      '900': 'oklch(40.8% 0.153 2.432)',
      '950': 'oklch(28.4% 0.109 3.907)',
    },
    rose: {
      '50': 'oklch(96.9% 0.015 12.422)',
      '100': 'oklch(94.1% 0.03 12.58)',
      '200': 'oklch(89.2% 0.058 10.001)',
      '300': 'oklch(81% 0.117 11.638)',
      '400': 'oklch(71.2% 0.194 13.428)',
      '500': 'oklch(64.5% 0.246 16.439)',
      '600': 'oklch(58.6% 0.253 17.585)',
      '700': 'oklch(51.4% 0.222 16.935)',
      '800': 'oklch(45.5% 0.188 13.697)',
      '900': 'oklch(41% 0.159 10.272)',
      '950': 'oklch(27.1% 0.105 12.094)',
    },
  };
  function isDark(color) {
    if (!Color.parse(color)) {
      return true;
    }
    const contrastWhite = Color.contrast(color, 'white', 'Lstar');
    const contrastBlack = Color.contrast(color, 'black', 'Lstar');
    return contrastWhite > contrastBlack;
  }
  function getTextColor(color) {
    return isDark(color) ? '#FFFFFF' : '#000000';
  }

  function svgToUrl(str) {
    const cleaned = str.replace(/[\t\n\r]/gim, '').replace(/\s\s+/g, ' ');
    const encoded = encodeURIComponent(cleaned).replace(/\(/g, '%28').replace(/\)/g, '%29');
    return `data:image/svg+xml;charset=UTF-8,${encoded}`;
  }
  const rulerMarkerLength = len => {
    if (len % 100 === 0) {
      return 15;
    }
    if (len % 50 === 0) {
      return 10;
    }
    if (len % 25 === 0) {
      return 5;
    }
    return 2.5;
  };
  function rectangleRuler(width, height, bgColor, textColor) {
    let markers = '';
    for (let x = 0; x <= width; x += 5) {
      const tick = html` <line
        x1="${x}"
        y1="0"
        x2="${x}"
        y2="${rulerMarkerLength(x)}"
      />`;
      markers += tick;
      if (x !== 0 && x % 50 === 0) {
        const label = html` <text
          x="${x}"
          y="25"
          text-anchor="middle"
          font-size="${rulerMarkerLength(x)}px"
        >
          ${x}
        </text>`;
        markers += label;
      }
    }
    for (let y = 0; y <= height; y += 5) {
      const tick = html` <line
        x1="0"
        y1="${y}"
        x2="${rulerMarkerLength(y)}"
        y2="${y}"
      />`;
      markers += tick;
      if (y !== 0 && y % 50 === 0) {
        const label = html` <text
          x="25"
          y="${y}"
          text-anchor="middle"
          dominant-baseline="middle"
          font-size="${rulerMarkerLength(y)}px"
        >
          ${y}
        </text>`;
        markers += label;
      }
    }
    return html` <svg
      xmlns="http://www.w3.org/2000/svg"
      width="${width}"
      height="${height}"
      viewBox="0 0 ${width} ${height}"
    >
      <rect
        width="${width}"
        height="${height}"
        fill="${bgColor}"
      />
      <text
        fill="${textColor}"
        font-family="Verdana, Arial, Helvetica, sans-serif"
        font-size="30"
        dy="10.5"
        font-weight="bold"
        x="50%"
        y="50%"
        text-anchor="middle"
      >
        ${width}x${height}
      </text>
      <g
        stroke-width="1"
        font-family="Verdana, Arial, Helvetica, sans-serif"
        font-size="10px"
        font-weight="100"
        fill="${textColor}"
        stroke="${textColor}"
      >
        ${markers}
      </g>
    </svg>`;
  }
  function placeholder(width, height, bgColor = '#0F1C3F', textColor = '#ECEAD9') {
    const str = rectangleRuler(width, height, bgColor, textColor);
    return svgToUrl(str);
  }
  const backgrounds = Object.values(colors).map(i => i['900']);
  const widths = [400, 600, 900, 1200, 1400, 1600, 1970];
  const heights = [600, 800, 1e3, 1200, 1400, 2e3, 2600];
  function randomPlaceholder() {
    const randomWidth = Math.floor(Math.random() * widths.length);
    const randomHeight = Math.floor(Math.random() * heights.length);
    const randomColor = Math.floor(Math.random() * backgrounds.length);
    return placeholder(widths[randomWidth], heights[randomHeight], backgrounds[randomColor]);
  }

  const localhost = {
    name: 'Local Files',
    url: /(file:\/\/\/.+(index)?.html)/,
    homepage: '/index.html?raw=1',
    language: [Language.RAW],
    category: Category.MANGA,
    run() {
      const num = parseInt(/\d+/.exec(window.location.search)?.toString() ?? '5', 10);
      const comments = document.createElement('div');
      const lorem =
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
      const commentsEn = [
        lorem,
        `<span style="color: white; background-color: black;">${lorem.substring(0, 100)}</span>`,
        `<span style="color: black; background-color: white;">${lorem.substring(100, 200)}</span>`,
        `<b>${lorem.substring(200, 300)}</b>`,
        `<i>${lorem.substring(300, 400)}</i>`,
      ];
      comments.innerHTML = Array(100)
        .fill(0)
        .map(() => commentsEn[Math.floor(Math.random() * commentsEn.length)])
        .join('<br><br>');
      return {
        title: 'Placeholder Manga Loaded',
        series: '?reload',
        pages: num,
        begin: 1,
        prev: '?pages=50',
        next: '?pages=1',
        listImages: [
          placeholder(1970, 1400, '#2D1657'),
          placeholder(985, 1400, '#152C55'),
          placeholder(985, 1400, '#7A1420'),
          placeholder(985, 1400, '#0F5B30'),
          placeholder(1970, 1400, '#806D15'),
          ...Array(num).fill(0).map(randomPlaceholder),
        ],
        comments,
      };
    },
  };

  function removeAllEventListeners(element) {
    if (!element || !element.parentNode) {
      return element;
    }
    const newElement = element.cloneNode(true);
    element.parentNode.replaceChild(newElement, element);
    return newElement;
  }
  const removeAttributes = element => {
    element.getAttributeNames().forEach(attr => element?.removeAttribute(attr));
  };
  const cleanUpElement = (...elements) => {
    elements?.forEach(removeAttributes);
    elements?.forEach(removeAllEventListeners);
  };

  function createStyleElement(id, content) {
    const style = document.createElement('style');
    style.id = id;
    style.appendChild(document.createTextNode(content));
    return style;
  }
  function appendStyleSheet(id, content) {
    if (!document.querySelector(`#${id}`)) {
      const head = document.head ?? document.querySelector('head');
      head.appendChild(createStyleElement(id, content));
    }
  }
  function removeStyleSheet(id) {
    document.querySelectorAll(`style[id="${id}"]`).forEach(elem => {
      elem.remove();
    });
  }
  function replaceStyleSheet(id, content) {
    removeStyleSheet(id);
    appendStyleSheet(id, content);
  }
  function wrapStyle(id, css) {
    return html`
      <style id="${id}">
        ${css}
      </style>
    `;
  }

  function head(manga) {
    return html`
      <title>${manga.title}</title>
      <meta charset="UTF-8" />
      ${wrapStyle('externals', sweetalertStyle)}
    `;
  }

  // src/internal/validators/mirror-validator.ts
  var MirrorValidator = () => {
    return {
      checkValidity(element) {
        const formControl = element.input;
        const validity = {
          message: '',
          isValid: true,
          invalidKeys: [],
        };
        if (!formControl) {
          return validity;
        }
        let isValid = true;
        if ('checkValidity' in formControl) {
          isValid = formControl.checkValidity();
        }
        if (isValid) {
          return validity;
        }
        validity.isValid = false;
        if ('validationMessage' in formControl) {
          validity.message = formControl.validationMessage;
        }
        if (!('validity' in formControl)) {
          validity.invalidKeys.push('customError');
          return validity;
        }
        for (const key in formControl.validity) {
          if (key === 'valid') {
            continue;
          }
          const checkedKey = key;
          if (formControl.validity[checkedKey]) {
            validity.invalidKeys.push(checkedKey);
          }
        }
        return validity;
      },
    };
  };

  var __defProp$e = Object.defineProperty;
  var __getOwnPropDesc$i = Object.getOwnPropertyDescriptor;
  var __typeError = msg => {
    throw TypeError(msg);
  };
  var __decorateClass$i = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$i(target, key) : target;
    for (var i = decorators.length - 1, decorator; i >= 0; i--)
      if ((decorator = decorators[i]))
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result) __defProp$e(target, key, result);
    return result;
  };
  var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError('Cannot ' + msg);
  var __privateGet = (obj, member, getter) => (
    __accessCheck(obj, member, 'read from private field'),
    member.get(obj)
  );
  var __privateAdd = (obj, member, value) =>
    member.has(obj)
      ? __typeError('Cannot add the same private member more than once')
      : member instanceof WeakSet
        ? member.add(obj)
        : member.set(obj, value);
  var __privateSet = (obj, member, value, setter) => (
    __accessCheck(obj, member, 'write to private field'),
    member.set(obj, value),
    value
  );

  /**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const t$2 = globalThis,
    e$7 =
      t$2.ShadowRoot &&
      (void 0 === t$2.ShadyCSS || t$2.ShadyCSS.nativeShadow) &&
      'adoptedStyleSheets' in Document.prototype &&
      'replace' in CSSStyleSheet.prototype,
    s$1 = Symbol(),
    o$a = new WeakMap();
  let n$4 = class n {
    constructor(t, e, o) {
      if (((this._$cssResult$ = true), o !== s$1))
        throw Error('CSSResult is not constructable. Use `unsafeCSS` or `css` instead.');
      ((this.cssText = t), (this.t = e));
    }
    get styleSheet() {
      let t = this.o;
      const s = this.t;
      if (e$7 && void 0 === t) {
        const e = void 0 !== s && 1 === s.length;
        (e && (t = o$a.get(s)),
          void 0 === t &&
            ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), e && o$a.set(s, t)));
      }
      return t;
    }
    toString() {
      return this.cssText;
    }
  };
  const r$5 = t => new n$4('string' == typeof t ? t : t + '', void 0, s$1),
    i$5 = (t, ...e) => {
      const o =
        1 === t.length
          ? t[0]
          : e.reduce(
              (e, s, o) =>
                e +
                (t => {
                  if (true === t._$cssResult$) return t.cssText;
                  if ('number' == typeof t) return t;
                  throw Error(
                    "Value passed to 'css' function must be a 'css' function result: " +
                      t +
                      ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.",
                  );
                })(s) +
                t[o + 1],
              t[0],
            );
      return new n$4(o, t, s$1);
    },
    S = (s, o) => {
      if (e$7) s.adoptedStyleSheets = o.map(t => (t instanceof CSSStyleSheet ? t : t.styleSheet));
      else
        for (const e of o) {
          const o = document.createElement('style'),
            n = t$2.litNonce;
          (void 0 !== n && o.setAttribute('nonce', n),
            (o.textContent = e.cssText),
            s.appendChild(o));
        }
    },
    c$1 = e$7
      ? t => t
      : t =>
          t instanceof CSSStyleSheet
            ? (t => {
                let e = '';
                for (const s of t.cssRules) e += s.cssText;
                return r$5(e);
              })(t)
            : t;

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */ const {
      is: i$4,
      defineProperty: e$6,
      getOwnPropertyDescriptor: h,
      getOwnPropertyNames: r$4,
      getOwnPropertySymbols: o$9,
      getPrototypeOf: n$3,
    } = Object,
    a$1 = globalThis,
    c = a$1.trustedTypes,
    l$1 = c ? c.emptyScript : '',
    p = a$1.reactiveElementPolyfillSupport,
    d$1 = (t, s) => t,
    u$1 = {
      toAttribute(t, s) {
        switch (s) {
          case Boolean:
            t = t ? l$1 : null;
            break;
          case Object:
          case Array:
            t = null == t ? t : JSON.stringify(t);
        }
        return t;
      },
      fromAttribute(t, s) {
        let i = t;
        switch (s) {
          case Boolean:
            i = null !== t;
            break;
          case Number:
            i = null === t ? null : Number(t);
            break;
          case Object:
          case Array:
            try {
              i = JSON.parse(t);
            } catch (t) {
              i = null;
            }
        }
        return i;
      },
    },
    f = (t, s) => !i$4(t, s),
    b = {
      attribute: true,
      type: String,
      converter: u$1,
      reflect: false,
      useDefault: false,
      hasChanged: f,
    };
  ((Symbol.metadata ??= Symbol('metadata')), (a$1.litPropertyMetadata ??= new WeakMap()));
  class y extends HTMLElement {
    static addInitializer(t) {
      (this._$Ei(), (this.l ??= []).push(t));
    }
    static get observedAttributes() {
      return (this.finalize(), this._$Eh && [...this._$Eh.keys()]);
    }
    static createProperty(t, s = b) {
      if (
        (s.state && (s.attribute = false),
        this._$Ei(),
        this.prototype.hasOwnProperty(t) && ((s = Object.create(s)).wrapped = true),
        this.elementProperties.set(t, s),
        !s.noAccessor)
      ) {
        const i = Symbol(),
          h = this.getPropertyDescriptor(t, i, s);
        void 0 !== h && e$6(this.prototype, t, h);
      }
    }
    static getPropertyDescriptor(t, s, i) {
      const { get: e, set: r } = h(this.prototype, t) ?? {
        get() {
          return this[s];
        },
        set(t) {
          this[s] = t;
        },
      };
      return {
        get: e,
        set(s) {
          const h = e?.call(this);
          (r?.call(this, s), this.requestUpdate(t, h, i));
        },
        configurable: true,
        enumerable: true,
      };
    }
    static getPropertyOptions(t) {
      return this.elementProperties.get(t) ?? b;
    }
    static _$Ei() {
      if (this.hasOwnProperty(d$1('elementProperties'))) return;
      const t = n$3(this);
      (t.finalize(),
        void 0 !== t.l && (this.l = [...t.l]),
        (this.elementProperties = new Map(t.elementProperties)));
    }
    static finalize() {
      if (this.hasOwnProperty(d$1('finalized'))) return;
      if (((this.finalized = true), this._$Ei(), this.hasOwnProperty(d$1('properties')))) {
        const t = this.properties,
          s = [...r$4(t), ...o$9(t)];
        for (const i of s) this.createProperty(i, t[i]);
      }
      const t = this[Symbol.metadata];
      if (null !== t) {
        const s = litPropertyMetadata.get(t);
        if (void 0 !== s) for (const [t, i] of s) this.elementProperties.set(t, i);
      }
      this._$Eh = new Map();
      for (const [t, s] of this.elementProperties) {
        const i = this._$Eu(t, s);
        void 0 !== i && this._$Eh.set(i, t);
      }
      this.elementStyles = this.finalizeStyles(this.styles);
    }
    static finalizeStyles(s) {
      const i = [];
      if (Array.isArray(s)) {
        const e = new Set(s.flat(1 / 0).reverse());
        for (const s of e) i.unshift(c$1(s));
      } else void 0 !== s && i.push(c$1(s));
      return i;
    }
    static _$Eu(t, s) {
      const i = s.attribute;
      return false === i
        ? void 0
        : 'string' == typeof i
          ? i
          : 'string' == typeof t
            ? t.toLowerCase()
            : void 0;
    }
    constructor() {
      (super(),
        (this._$Ep = void 0),
        (this.isUpdatePending = false),
        (this.hasUpdated = false),
        (this._$Em = null),
        this._$Ev());
    }
    _$Ev() {
      ((this._$ES = new Promise(t => (this.enableUpdating = t))),
        (this._$AL = new Map()),
        this._$E_(),
        this.requestUpdate(),
        this.constructor.l?.forEach(t => t(this)));
    }
    addController(t) {
      ((this._$EO ??= new Set()).add(t),
        void 0 !== this.renderRoot && this.isConnected && t.hostConnected?.());
    }
    removeController(t) {
      this._$EO?.delete(t);
    }
    _$E_() {
      const t = new Map(),
        s = this.constructor.elementProperties;
      for (const i of s.keys()) this.hasOwnProperty(i) && (t.set(i, this[i]), delete this[i]);
      t.size > 0 && (this._$Ep = t);
    }
    createRenderRoot() {
      const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
      return (S(t, this.constructor.elementStyles), t);
    }
    connectedCallback() {
      ((this.renderRoot ??= this.createRenderRoot()),
        this.enableUpdating(true),
        this._$EO?.forEach(t => t.hostConnected?.()));
    }
    enableUpdating(t) {}
    disconnectedCallback() {
      this._$EO?.forEach(t => t.hostDisconnected?.());
    }
    attributeChangedCallback(t, s, i) {
      this._$AK(t, i);
    }
    _$ET(t, s) {
      const i = this.constructor.elementProperties.get(t),
        e = this.constructor._$Eu(t, i);
      if (void 0 !== e && true === i.reflect) {
        const h = (void 0 !== i.converter?.toAttribute ? i.converter : u$1).toAttribute(s, i.type);
        ((this._$Em = t),
          null == h ? this.removeAttribute(e) : this.setAttribute(e, h),
          (this._$Em = null));
      }
    }
    _$AK(t, s) {
      const i = this.constructor,
        e = i._$Eh.get(t);
      if (void 0 !== e && this._$Em !== e) {
        const t = i.getPropertyOptions(e),
          h =
            'function' == typeof t.converter
              ? { fromAttribute: t.converter }
              : void 0 !== t.converter?.fromAttribute
                ? t.converter
                : u$1;
        this._$Em = e;
        const r = h.fromAttribute(s, t.type);
        ((this[e] = r ?? this._$Ej?.get(e) ?? r), (this._$Em = null));
      }
    }
    requestUpdate(t, s, i) {
      if (void 0 !== t) {
        const e = this.constructor,
          h = this[t];
        if (
          ((i ??= e.getPropertyOptions(t)),
          !(
            (i.hasChanged ?? f)(h, s) ||
            (i.useDefault &&
              i.reflect &&
              h === this._$Ej?.get(t) &&
              !this.hasAttribute(e._$Eu(t, i)))
          ))
        )
          return;
        this.C(t, s, i);
      }
      false === this.isUpdatePending && (this._$ES = this._$EP());
    }
    C(t, s, { useDefault: i, reflect: e, wrapped: h }, r) {
      (i &&
        !(this._$Ej ??= new Map()).has(t) &&
        (this._$Ej.set(t, r ?? s ?? this[t]), true !== h || void 0 !== r)) ||
        (this._$AL.has(t) || (this.hasUpdated || i || (s = void 0), this._$AL.set(t, s)),
        true === e && this._$Em !== t && (this._$Eq ??= new Set()).add(t));
    }
    async _$EP() {
      this.isUpdatePending = true;
      try {
        await this._$ES;
      } catch (t) {
        Promise.reject(t);
      }
      const t = this.scheduleUpdate();
      return (null != t && (await t), !this.isUpdatePending);
    }
    scheduleUpdate() {
      return this.performUpdate();
    }
    performUpdate() {
      if (!this.isUpdatePending) return;
      if (!this.hasUpdated) {
        if (((this.renderRoot ??= this.createRenderRoot()), this._$Ep)) {
          for (const [t, s] of this._$Ep) this[t] = s;
          this._$Ep = void 0;
        }
        const t = this.constructor.elementProperties;
        if (t.size > 0)
          for (const [s, i] of t) {
            const { wrapped: t } = i,
              e = this[s];
            true !== t || this._$AL.has(s) || void 0 === e || this.C(s, void 0, i, e);
          }
      }
      let t = false;
      const s = this._$AL;
      try {
        ((t = this.shouldUpdate(s)),
          t
            ? (this.willUpdate(s), this._$EO?.forEach(t => t.hostUpdate?.()), this.update(s))
            : this._$EM());
      } catch (s) {
        throw ((t = false), this._$EM(), s);
      }
      t && this._$AE(s);
    }
    willUpdate(t) {}
    _$AE(t) {
      (this._$EO?.forEach(t => t.hostUpdated?.()),
        this.hasUpdated || ((this.hasUpdated = true), this.firstUpdated(t)),
        this.updated(t));
    }
    _$EM() {
      ((this._$AL = new Map()), (this.isUpdatePending = false));
    }
    get updateComplete() {
      return this.getUpdateComplete();
    }
    getUpdateComplete() {
      return this._$ES;
    }
    shouldUpdate(t) {
      return true;
    }
    update(t) {
      ((this._$Eq &&= this._$Eq.forEach(t => this._$ET(t, this[t]))), this._$EM());
    }
    updated(t) {}
    firstUpdated(t) {}
  }
  ((y.elementStyles = []),
    (y.shadowRootOptions = { mode: 'open' }),
    (y[d$1('elementProperties')] = new Map()),
    (y[d$1('finalized')] = new Map()),
    p?.({ ReactiveElement: y }),
    (a$1.reactiveElementVersions ??= []).push('2.1.1'));

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */ const s = globalThis;
  let i$3 = class i extends y {
    constructor() {
      (super(...arguments), (this.renderOptions = { host: this }), (this._$Do = void 0));
    }
    createRenderRoot() {
      const t = super.createRenderRoot();
      return ((this.renderOptions.renderBefore ??= t.firstChild), t);
    }
    update(t) {
      const r = this.render();
      (this.hasUpdated || (this.renderOptions.isConnected = this.isConnected),
        super.update(t),
        (this._$Do = B(r, this.renderRoot, this.renderOptions)));
    }
    connectedCallback() {
      (super.connectedCallback(), this._$Do?.setConnected(true));
    }
    disconnectedCallback() {
      (super.disconnectedCallback(), this._$Do?.setConnected(false));
    }
    render() {
      return T;
    }
  };
  ((i$3._$litElement$ = true),
    (i$3['finalized'] = true),
    s.litElementHydrateSupport?.({ LitElement: i$3 }));
  const o$8 = s.litElementPolyfillSupport;
  o$8?.({ LitElement: i$3 });
  (s.litElementVersions ??= []).push('4.2.1');

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const t$1 = t => (e, o) => {
    void 0 !== o
      ? o.addInitializer(() => {
          customElements.define(t, e);
        })
      : customElements.define(t, e);
  };

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */ const o$7 = { attribute: true, type: String, converter: u$1, reflect: false, hasChanged: f },
    r$3 = (t = o$7, e, r) => {
      const { kind: n, metadata: i } = r;
      let s = globalThis.litPropertyMetadata.get(i);
      if (
        (void 0 === s && globalThis.litPropertyMetadata.set(i, (s = new Map())),
        'setter' === n && ((t = Object.create(t)).wrapped = true),
        s.set(r.name, t),
        'accessor' === n)
      ) {
        const { name: o } = r;
        return {
          set(r) {
            const n = e.get.call(this);
            (e.set.call(this, r), this.requestUpdate(o, n, t));
          },
          init(e) {
            return (void 0 !== e && this.C(o, void 0, t, e), e);
          },
        };
      }
      if ('setter' === n) {
        const { name: o } = r;
        return function (r) {
          const n = this[o];
          (e.call(this, r), this.requestUpdate(o, n, t));
        };
      }
      throw Error('Unsupported decorator location: ' + n);
    };
  function n$2(t) {
    return (e, o) =>
      'object' == typeof o
        ? r$3(t, e, o)
        : ((t, e, o) => {
            const r = e.hasOwnProperty(o);
            return (
              e.constructor.createProperty(o, t),
              r ? Object.getOwnPropertyDescriptor(e, o) : void 0
            );
          })(t, e, o);
  }

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */ function r$2(r) {
    return n$2({ ...r, state: true, attribute: false });
  }

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const e$5 = (e, t, c) => (
    (c.configurable = true),
    (c.enumerable = true),
    Reflect.decorate && 'object' != typeof t && Object.defineProperty(e, t, c),
    c
  );

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */ function e$4(e, r) {
    return (n, s, i) => {
      const o = t => t.renderRoot?.querySelector(e) ?? null;
      return e$5(n, s, {
        get() {
          return o(this);
        },
      });
    };
  }

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  let e$3;
  function r$1(r) {
    return (n, o) =>
      e$5(n, o, {
        get() {
          return (this.renderRoot ?? (e$3 ??= document.createDocumentFragment())).querySelectorAll(
            r,
          );
        },
      });
  }

  // src/styles/component/host.css
  var host_default =
    ':host {\n  box-sizing: border-box !important;\n}\n\n:host *,\n:host *::before,\n:host *::after {\n  box-sizing: inherit !important;\n}\n\n[hidden] {\n  display: none !important;\n}\n';

  // src/internal/webawesome-element.ts
  var _hasRecordedInitialProperties;
  var WebAwesomeElement = class extends i$3 {
    constructor() {
      super();
      __privateAdd(this, _hasRecordedInitialProperties, false);
      this.initialReflectedProperties = /* @__PURE__ */ new Map();
      this.didSSR = Boolean(this.shadowRoot);
      /**
       * Methods for setting and checking custom states.
       */
      this.customStates = {
        /** Adds or removes the specified custom state. */
        set: (customState, active) => {
          if (!Boolean(this.internals?.states)) return;
          if (active) {
            this.internals.states.add(customState);
          } else {
            this.internals.states.delete(customState);
          }
        },
        /** Determines whether or not the element currently has the specified state. */
        has: customState => {
          if (!Boolean(this.internals?.states)) return false;
          return this.internals.states.has(customState);
        },
      };
      try {
        this.internals = this.attachInternals();
      } catch {
        console.error(
          'Element internals are not supported in your browser. Consider using a polyfill',
        );
      }
      this.customStates.set('wa-defined', true);
      let Self = this.constructor;
      for (let [property2, spec] of Self.elementProperties) {
        if (
          spec.default === 'inherit' &&
          spec.initial !== void 0 &&
          typeof property2 === 'string'
        ) {
          this.customStates.set(`initial-${property2}-${spec.initial}`, true);
        }
      }
    }
    /**
     * Override the default styles property to fetch and convert string CSS files. Components can override this behavior
     * by setting their own `static styles = []` property.
     */
    static get styles() {
      const styles = Array.isArray(this.css) ? this.css : this.css ? [this.css] : [];
      return [host_default, ...styles].map(style =>
        typeof style === 'string' ? r$5(style) : style,
      );
    }
    attributeChangedCallback(name, oldValue, newValue) {
      if (!__privateGet(this, _hasRecordedInitialProperties)) {
        this.constructor.elementProperties.forEach((obj, prop) => {
          if (obj.reflect && this[prop] != null) {
            this.initialReflectedProperties.set(prop, this[prop]);
          }
        });
        __privateSet(this, _hasRecordedInitialProperties, true);
      }
      super.attributeChangedCallback(name, oldValue, newValue);
    }
    willUpdate(changedProperties) {
      super.willUpdate(changedProperties);
      this.initialReflectedProperties.forEach((value, prop) => {
        if (changedProperties.has(prop) && this[prop] == null) {
          this[prop] = value;
        }
      });
    }
    firstUpdated(changedProperties) {
      super.firstUpdated(changedProperties);
      if (this.didSSR) {
        this.shadowRoot?.querySelectorAll('slot').forEach(slotElement => {
          slotElement.dispatchEvent(
            new Event('slotchange', { bubbles: true, composed: false, cancelable: false }),
          );
        });
      }
    }
    update(changedProperties) {
      try {
        super.update(changedProperties);
      } catch (e) {
        if (this.didSSR && !this.hasUpdated) {
          const event = new Event('lit-hydration-error', {
            bubbles: true,
            composed: true,
            cancelable: false,
          });
          event.error = e;
          this.dispatchEvent(event);
        }
        throw e;
      }
    }
    /**
     * Given a native event, this function cancels it and dispatches it again from the host element using the desired
     * event options.
     */
    relayNativeEvent(event, eventOptions) {
      event.stopImmediatePropagation();
      this.dispatchEvent(
        new event.constructor(event.type, {
          ...event,
          ...eventOptions,
        }),
      );
    }
  };
  _hasRecordedInitialProperties = new WeakMap();
  __decorateClass$i([n$2()], WebAwesomeElement.prototype, 'dir', 2);
  __decorateClass$i([n$2()], WebAwesomeElement.prototype, 'lang', 2);
  __decorateClass$i(
    [n$2({ type: Boolean, reflect: true, attribute: 'did-ssr' })],
    WebAwesomeElement.prototype,
    'didSSR',
    2,
  );

  // src/events/invalid.ts
  var WaInvalidEvent = class extends Event {
    constructor() {
      super('wa-invalid', { bubbles: true, cancelable: false, composed: true });
    }
  };

  // src/internal/validators/custom-error-validator.ts
  var CustomErrorValidator = () => {
    return {
      observedAttributes: ['custom-error'],
      checkValidity(element) {
        const validity = {
          message: '',
          isValid: true,
          invalidKeys: [],
        };
        if (element.customError) {
          validity.message = element.customError;
          validity.isValid = false;
          validity.invalidKeys = ['customError'];
        }
        return validity;
      },
    };
  };

  // src/internal/webawesome-form-associated-element.ts
  var WebAwesomeFormAssociatedElement = class extends WebAwesomeElement {
    constructor() {
      super();
      this.name = null;
      this.disabled = false;
      this.required = false;
      this.assumeInteractionOn = ['input'];
      this.validators = [];
      this.valueHasChanged = false;
      this.hasInteracted = false;
      this.customError = null;
      this.emittedEvents = [];
      this.emitInvalid = e => {
        if (e.target !== this) return;
        this.hasInteracted = true;
        this.dispatchEvent(new WaInvalidEvent());
      };
      this.handleInteraction = event => {
        const emittedEvents = this.emittedEvents;
        if (!emittedEvents.includes(event.type)) {
          emittedEvents.push(event.type);
        }
        if (emittedEvents.length === this.assumeInteractionOn?.length) {
          this.hasInteracted = true;
        }
      };
      {
        this.addEventListener('invalid', this.emitInvalid);
      }
    }
    /**
     * Validators are static because they have `observedAttributes`, essentially attributes to "watch"
     * for changes. Whenever these attributes change, we want to be notified and update the validator.
     */
    static get validators() {
      return [CustomErrorValidator()];
    }
    // Append all Validator "observedAttributes" into the "observedAttributes" so they can run.
    static get observedAttributes() {
      const parentAttrs = new Set(super.observedAttributes || []);
      for (const validator of this.validators) {
        if (!validator.observedAttributes) {
          continue;
        }
        for (const attr of validator.observedAttributes) {
          parentAttrs.add(attr);
        }
      }
      return [...parentAttrs];
    }
    connectedCallback() {
      super.connectedCallback();
      this.updateValidity();
      this.assumeInteractionOn.forEach(event => {
        this.addEventListener(event, this.handleInteraction);
      });
    }
    firstUpdated(...args) {
      super.firstUpdated(...args);
      this.updateValidity();
    }
    willUpdate(changedProperties) {
      if (changedProperties.has('customError')) {
        if (!this.customError) {
          this.customError = null;
        }
        this.setCustomValidity(this.customError || '');
      }
      if (changedProperties.has('value') || changedProperties.has('disabled')) {
        const value = this.value;
        if (Array.isArray(value)) {
          if (this.name) {
            const formData = new FormData();
            for (const val of value) {
              formData.append(this.name, val);
            }
            this.setValue(formData, formData);
          }
        } else {
          this.setValue(value, value);
        }
      }
      if (changedProperties.has('disabled')) {
        this.customStates.set('disabled', this.disabled);
        if (this.hasAttribute('disabled') || !this.matches(':disabled')) {
          this.toggleAttribute('disabled', this.disabled);
        }
      }
      this.updateValidity();
      super.willUpdate(changedProperties);
    }
    get labels() {
      return this.internals.labels;
    }
    getForm() {
      return this.internals.form;
    }
    get validity() {
      return this.internals.validity;
    }
    // Not sure if this supports `novalidate`. Will need to test.
    get willValidate() {
      return this.internals.willValidate;
    }
    get validationMessage() {
      return this.internals.validationMessage;
    }
    checkValidity() {
      this.updateValidity();
      return this.internals.checkValidity();
    }
    reportValidity() {
      this.updateValidity();
      this.hasInteracted = true;
      return this.internals.reportValidity();
    }
    /**
     * Override this to change where constraint validation popups are anchored.
     */
    get validationTarget() {
      return this.input || void 0;
    }
    setValidity(...args) {
      const flags = args[0];
      const message = args[1];
      let anchor = args[2];
      if (!anchor) {
        anchor = this.validationTarget;
      }
      this.internals.setValidity(flags, message, anchor || void 0);
      this.requestUpdate('validity');
      this.setCustomStates();
    }
    setCustomStates() {
      const required = Boolean(this.required);
      const isValid = this.internals.validity.valid;
      const hasInteracted = this.hasInteracted;
      this.customStates.set('required', required);
      this.customStates.set('optional', !required);
      this.customStates.set('invalid', !isValid);
      this.customStates.set('valid', isValid);
      this.customStates.set('user-invalid', !isValid && hasInteracted);
      this.customStates.set('user-valid', isValid && hasInteracted);
    }
    /**
     * Do not use this when creating a "Validator". This is intended for end users of components.
     * We track manually defined custom errors so we don't clear them on accident in our validators.
     *
     */
    setCustomValidity(message) {
      if (!message) {
        this.customError = null;
        this.setValidity({});
        return;
      }
      this.customError = message;
      this.setValidity({ customError: true }, message, this.validationTarget);
    }
    formResetCallback() {
      this.resetValidity();
      this.hasInteracted = false;
      this.valueHasChanged = false;
      this.emittedEvents = [];
      this.updateValidity();
    }
    formDisabledCallback(isDisabled) {
      this.disabled = isDisabled;
      this.updateValidity();
    }
    /**
     * Called when the browser is trying to restore element’s state to state in which case reason is "restore", or when
     * the browser is trying to fulfill autofill on behalf of user in which case reason is "autocomplete". In the case of
     * "restore", state is a string, File, or FormData object previously set as the second argument to setFormValue.
     */
    formStateRestoreCallback(state, reason) {
      this.value = state;
      if (reason === 'restore') {
        this.resetValidity();
      }
      this.updateValidity();
    }
    setValue(...args) {
      const [value, state] = args;
      this.internals.setFormValue(value, state);
    }
    get allValidators() {
      const staticValidators = this.constructor.validators || [];
      const validators = this.validators || [];
      return [...staticValidators, ...validators];
    }
    /**
     * Reset validity is a way of removing manual custom errors and native validation.
     */
    resetValidity() {
      this.setCustomValidity('');
      this.setValidity({});
    }
    updateValidity() {
      if (this.disabled || this.hasAttribute('disabled') || !this.willValidate) {
        this.resetValidity();
        return;
      }
      const validators = this.allValidators;
      if (!validators?.length) {
        return;
      }
      const flags = {
        // Don't trust custom errors from the Browser. Safari breaks the spec.
        customError: Boolean(this.customError),
      };
      const formControl = this.validationTarget || this.input || void 0;
      let finalMessage = '';
      for (const validator of validators) {
        const { isValid, message, invalidKeys } = validator.checkValidity(this);
        if (isValid) {
          continue;
        }
        if (!finalMessage) {
          finalMessage = message;
        }
        if (invalidKeys?.length >= 0) {
          invalidKeys.forEach(str => (flags[str] = true));
        }
      }
      if (!finalMessage) {
        finalMessage = this.validationMessage;
      }
      this.setValidity(flags, finalMessage, formControl);
    }
  };
  WebAwesomeFormAssociatedElement.formAssociated = true;
  __decorateClass$i([n$2({ reflect: true })], WebAwesomeFormAssociatedElement.prototype, 'name', 2);
  __decorateClass$i(
    [n$2({ type: Boolean })],
    WebAwesomeFormAssociatedElement.prototype,
    'disabled',
    2,
  );
  __decorateClass$i(
    [n$2({ state: true, attribute: false })],
    WebAwesomeFormAssociatedElement.prototype,
    'valueHasChanged',
    2,
  );
  __decorateClass$i(
    [n$2({ state: true, attribute: false })],
    WebAwesomeFormAssociatedElement.prototype,
    'hasInteracted',
    2,
  );
  __decorateClass$i(
    [n$2({ attribute: 'custom-error', reflect: true })],
    WebAwesomeFormAssociatedElement.prototype,
    'customError',
    2,
  );
  __decorateClass$i(
    [n$2({ attribute: false, state: true, type: Object })],
    WebAwesomeFormAssociatedElement.prototype,
    'validity',
    1,
  );

  // src/internal/slot.ts
  var HasSlotController = class {
    constructor(host, ...slotNames) {
      this.slotNames = [];
      this.handleSlotChange = event => {
        const slot = event.target;
        if (
          (this.slotNames.includes('[default]') && !slot.name) ||
          (slot.name && this.slotNames.includes(slot.name))
        ) {
          this.host.requestUpdate();
        }
      };
      (this.host = host).addController(this);
      this.slotNames = slotNames;
    }
    hasDefaultSlot() {
      return [...this.host.childNodes].some(node => {
        if (node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== '') {
          return true;
        }
        if (node.nodeType === Node.ELEMENT_NODE) {
          const el = node;
          const tagName = el.tagName.toLowerCase();
          if (tagName === 'wa-visually-hidden') {
            return false;
          }
          if (!el.hasAttribute('slot')) {
            return true;
          }
        }
        return false;
      });
    }
    hasNamedSlot(name) {
      return this.host.querySelector(`:scope > [slot="${name}"]`) !== null;
    }
    test(slotName) {
      return slotName === '[default]' ? this.hasDefaultSlot() : this.hasNamedSlot(slotName);
    }
    hostConnected() {
      this.host.shadowRoot.addEventListener('slotchange', this.handleSlotChange);
    }
    hostDisconnected() {
      this.host.shadowRoot.removeEventListener('slotchange', this.handleSlotChange);
    }
  };

  // src/styles/utilities/size.css
  var size_default =
    "@layer wa-utilities {\n  :host([size='small']),\n  .wa-size-s {\n    font-size: var(--wa-font-size-s);\n  }\n\n  :host([size='medium']),\n  .wa-size-m {\n    font-size: var(--wa-font-size-m);\n  }\n\n  :host([size='large']),\n  .wa-size-l {\n    font-size: var(--wa-font-size-l);\n  }\n}\n";

  const connectedElements = new Set();
  const translations = new Map();
  let fallback;
  let documentDirection = 'ltr';
  let documentLanguage = 'en';
  const isClient =
    typeof MutationObserver !== 'undefined' &&
    typeof document !== 'undefined' &&
    typeof document.documentElement !== 'undefined';
  if (isClient) {
    const documentElementObserver = new MutationObserver(update);
    documentDirection = document.documentElement.dir || 'ltr';
    documentLanguage = document.documentElement.lang || navigator.language;
    documentElementObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['dir', 'lang'],
    });
  }
  function registerTranslation(...translation) {
    translation.map(t => {
      const code = t.$code.toLowerCase();
      if (translations.has(code)) {
        translations.set(code, Object.assign(Object.assign({}, translations.get(code)), t));
      } else {
        translations.set(code, t);
      }
      if (!fallback) {
        fallback = t;
      }
    });
    update();
  }
  function update() {
    if (isClient) {
      documentDirection = document.documentElement.dir || 'ltr';
      documentLanguage = document.documentElement.lang || navigator.language;
    }
    [...connectedElements.keys()].map(el => {
      if (typeof el.requestUpdate === 'function') {
        el.requestUpdate();
      }
    });
  }
  let LocalizeController$1 = class LocalizeController {
    constructor(host) {
      this.host = host;
      this.host.addController(this);
    }
    hostConnected() {
      connectedElements.add(this.host);
    }
    hostDisconnected() {
      connectedElements.delete(this.host);
    }
    dir() {
      return `${this.host.dir || documentDirection}`.toLowerCase();
    }
    lang() {
      return `${this.host.lang || documentLanguage}`.toLowerCase();
    }
    getTranslationData(lang) {
      var _a, _b;
      const locale = new Intl.Locale(lang.replace(/_/g, '-'));
      const language =
        locale === null || locale === void 0 ? void 0 : locale.language.toLowerCase();
      const region =
        (_b =
          (_a = locale === null || locale === void 0 ? void 0 : locale.region) === null ||
          _a === void 0
            ? void 0
            : _a.toLowerCase()) !== null && _b !== void 0
          ? _b
          : '';
      const primary = translations.get(`${language}-${region}`);
      const secondary = translations.get(language);
      return { locale, language, region, primary, secondary };
    }
    exists(key, options) {
      var _a;
      const { primary, secondary } = this.getTranslationData(
        (_a = options.lang) !== null && _a !== void 0 ? _a : this.lang(),
      );
      options = Object.assign({ includeFallback: false }, options);
      if (
        (primary && primary[key]) ||
        (secondary && secondary[key]) ||
        (options.includeFallback && fallback && fallback[key])
      ) {
        return true;
      }
      return false;
    }
    term(key, ...args) {
      const { primary, secondary } = this.getTranslationData(this.lang());
      let term;
      if (primary && primary[key]) {
        term = primary[key];
      } else if (secondary && secondary[key]) {
        term = secondary[key];
      } else if (fallback && fallback[key]) {
        term = fallback[key];
      } else {
        console.error(`No translation found for: ${String(key)}`);
        return String(key);
      }
      if (typeof term === 'function') {
        return term(...args);
      }
      return term;
    }
    date(dateToFormat, options) {
      dateToFormat = new Date(dateToFormat);
      return new Intl.DateTimeFormat(this.lang(), options).format(dateToFormat);
    }
    number(numberToFormat, options) {
      numberToFormat = Number(numberToFormat);
      return isNaN(numberToFormat)
        ? ''
        : new Intl.NumberFormat(this.lang(), options).format(numberToFormat);
    }
    relativeTime(value, unit, options) {
      return new Intl.RelativeTimeFormat(this.lang(), options).format(value, unit);
    }
  };

  // src/translations/en.ts
  var translation = {
    $code: 'en',
    $name: 'English',
    $dir: 'ltr',
    carousel: 'Carousel',
    clearEntry: 'Clear entry',
    close: 'Close',
    copied: 'Copied',
    copy: 'Copy',
    currentValue: 'Current value',
    error: 'Error',
    goToSlide: (slide, count) => `Go to slide ${slide} of ${count}`,
    hidePassword: 'Hide password',
    loading: 'Loading',
    nextSlide: 'Next slide',
    numOptionsSelected: num => {
      if (num === 0) return 'No options selected';
      if (num === 1) return '1 option selected';
      return `${num} options selected`;
    },
    pauseAnimation: 'Pause animation',
    playAnimation: 'Play animation',
    previousSlide: 'Previous slide',
    progress: 'Progress',
    remove: 'Remove',
    resize: 'Resize',
    scrollableRegion: 'Scrollable region',
    scrollToEnd: 'Scroll to end',
    scrollToStart: 'Scroll to start',
    selectAColorFromTheScreen: 'Select a color from the screen',
    showPassword: 'Show password',
    slideNum: slide => `Slide ${slide}`,
    toggleColorFormat: 'Toggle color format',
    zoomIn: 'Zoom in',
    zoomOut: 'Zoom out',
  };
  registerTranslation(translation);
  var en_default = translation;

  var LocalizeController = class extends LocalizeController$1 {};
  registerTranslation(en_default);

  // src/internal/watch.ts
  function watch(propertyName, options) {
    const resolvedOptions = {
      waitUntilFirstUpdate: false,
      ...options,
    };
    return (proto, decoratedFnName) => {
      const { update } = proto;
      const watchedProperties = Array.isArray(propertyName) ? propertyName : [propertyName];
      proto.update = function (changedProps) {
        watchedProperties.forEach(property => {
          const key = property;
          if (changedProps.has(key)) {
            const oldValue = changedProps.get(key);
            const newValue = this[key];
            if (oldValue !== newValue) {
              if (!resolvedOptions.waitUntilFirstUpdate || this.hasUpdated) {
                this[decoratedFnName](oldValue, newValue);
              }
            }
          }
        });
        update.call(this, changedProps);
      };
    };
  }

  // src/styles/utilities/variants.css
  var variants_default =
    "@layer wa-utilities {\n  :where(:root),\n  .wa-neutral,\n  :host([variant='neutral']) {\n    --wa-color-fill-loud: var(--wa-color-neutral-fill-loud);\n    --wa-color-fill-normal: var(--wa-color-neutral-fill-normal);\n    --wa-color-fill-quiet: var(--wa-color-neutral-fill-quiet);\n    --wa-color-border-loud: var(--wa-color-neutral-border-loud);\n    --wa-color-border-normal: var(--wa-color-neutral-border-normal);\n    --wa-color-border-quiet: var(--wa-color-neutral-border-quiet);\n    --wa-color-on-loud: var(--wa-color-neutral-on-loud);\n    --wa-color-on-normal: var(--wa-color-neutral-on-normal);\n    --wa-color-on-quiet: var(--wa-color-neutral-on-quiet);\n  }\n\n  .wa-brand,\n  :host([variant='brand']) {\n    --wa-color-fill-loud: var(--wa-color-brand-fill-loud);\n    --wa-color-fill-normal: var(--wa-color-brand-fill-normal);\n    --wa-color-fill-quiet: var(--wa-color-brand-fill-quiet);\n    --wa-color-border-loud: var(--wa-color-brand-border-loud);\n    --wa-color-border-normal: var(--wa-color-brand-border-normal);\n    --wa-color-border-quiet: var(--wa-color-brand-border-quiet);\n    --wa-color-on-loud: var(--wa-color-brand-on-loud);\n    --wa-color-on-normal: var(--wa-color-brand-on-normal);\n    --wa-color-on-quiet: var(--wa-color-brand-on-quiet);\n  }\n\n  .wa-success,\n  :host([variant='success']) {\n    --wa-color-fill-loud: var(--wa-color-success-fill-loud);\n    --wa-color-fill-normal: var(--wa-color-success-fill-normal);\n    --wa-color-fill-quiet: var(--wa-color-success-fill-quiet);\n    --wa-color-border-loud: var(--wa-color-success-border-loud);\n    --wa-color-border-normal: var(--wa-color-success-border-normal);\n    --wa-color-border-quiet: var(--wa-color-success-border-quiet);\n    --wa-color-on-loud: var(--wa-color-success-on-loud);\n    --wa-color-on-normal: var(--wa-color-success-on-normal);\n    --wa-color-on-quiet: var(--wa-color-success-on-quiet);\n  }\n\n  .wa-warning,\n  :host([variant='warning']) {\n    --wa-color-fill-loud: var(--wa-color-warning-fill-loud);\n    --wa-color-fill-normal: var(--wa-color-warning-fill-normal);\n    --wa-color-fill-quiet: var(--wa-color-warning-fill-quiet);\n    --wa-color-border-loud: var(--wa-color-warning-border-loud);\n    --wa-color-border-normal: var(--wa-color-warning-border-normal);\n    --wa-color-border-quiet: var(--wa-color-warning-border-quiet);\n    --wa-color-on-loud: var(--wa-color-warning-on-loud);\n    --wa-color-on-normal: var(--wa-color-warning-on-normal);\n    --wa-color-on-quiet: var(--wa-color-warning-on-quiet);\n  }\n\n  .wa-danger,\n  :host([variant='danger']) {\n    --wa-color-fill-loud: var(--wa-color-danger-fill-loud);\n    --wa-color-fill-normal: var(--wa-color-danger-fill-normal);\n    --wa-color-fill-quiet: var(--wa-color-danger-fill-quiet);\n    --wa-color-border-loud: var(--wa-color-danger-border-loud);\n    --wa-color-border-normal: var(--wa-color-danger-border-normal);\n    --wa-color-border-quiet: var(--wa-color-danger-border-quiet);\n    --wa-color-on-loud: var(--wa-color-danger-on-loud);\n    --wa-color-on-normal: var(--wa-color-danger-on-normal);\n    --wa-color-on-quiet: var(--wa-color-danger-on-quiet);\n  }\n}\n";

  /**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */ const e$2 = e$9(
    class extends i$6 {
      constructor(t) {
        if ((super(t), t.type !== t$3.ATTRIBUTE || 'class' !== t.name || t.strings?.length > 2))
          throw Error(
            '`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.',
          );
      }
      render(t) {
        return (
          ' ' +
          Object.keys(t)
            .filter(s => t[s])
            .join(' ') +
          ' '
        );
      }
      update(s, [i]) {
        if (void 0 === this.st) {
          ((this.st = new Set()),
            void 0 !== s.strings &&
              (this.nt = new Set(
                s.strings
                  .join(' ')
                  .split(/\s/)
                  .filter(t => '' !== t),
              )));
          for (const t in i) i[t] && !this.nt?.has(t) && this.st.add(t);
          return this.render(i);
        }
        const r = s.element.classList;
        for (const t of this.st) t in i || (r.remove(t), this.st.delete(t));
        for (const t in i) {
          const s = !!i[t];
          s === this.st.has(t) ||
            this.nt?.has(t) ||
            (s ? (r.add(t), this.st.add(t)) : (r.remove(t), this.st.delete(t)));
        }
        return T;
      }
    },
  );

  /**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */ const o$6 = o => o ?? E;

  /**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const a = Symbol.for(''),
    o$5 = t => {
      if (t?.r === a) return t?._$litStatic$;
    },
    i$2 = (t, ...r) => ({
      _$litStatic$: r.reduce(
        (r, e, a) =>
          r +
          (t => {
            if (void 0 !== t._$litStatic$) return t._$litStatic$;
            throw Error(
              `Value passed to 'literal' function must be a 'literal' result: ${t}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`,
            );
          })(e) +
          t[a + 1],
        t[0],
      ),
      r: a,
    }),
    l = new Map(),
    n$1 =
      t =>
      (r, ...e) => {
        const a = e.length;
        let s, i;
        const n = [],
          u = [];
        let c,
          $ = 0,
          f = false;
        for (; $ < a; ) {
          for (c = r[$]; $ < a && void 0 !== ((i = e[$]), (s = o$5(i))); )
            ((c += s + r[++$]), (f = true));
          ($ !== a && u.push(i), n.push(c), $++);
        }
        if (($ === a && n.push(r[a]), f)) {
          const t = n.join('$$lit$$');
          (void 0 === (r = l.get(t)) && ((n.raw = n), l.set(t, (r = n))), (e = u));
        }
        return t(r, ...e);
      },
    u = n$1(x$1);

  // src/components/button/button.css
  var button_default =
    "@layer wa-component {\n  :host {\n    display: inline-block;\n\n    /* Workaround because Chrome doesn't like :host(:has()) below\n     * https://issues.chromium.org/issues/40062355 \n     * Firefox doesn't like this nested rule, so both are needed */\n    &:has(wa-badge) {\n      position: relative;\n    }\n  }\n\n  /* Apply relative positioning only when needed to position wa-badge\n   * This avoids creating a new stacking context for every button */\n  :host(:has(wa-badge)) {\n    position: relative;\n  }\n}\n\n.button {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  text-decoration: none;\n  user-select: none;\n  -webkit-user-select: none;\n  white-space: nowrap;\n  vertical-align: middle;\n  transition-property: background, border, box-shadow, color;\n  transition-duration: var(--wa-transition-fast);\n  transition-timing-function: var(--wa-transition-easing);\n  cursor: pointer;\n  padding: 0 var(--wa-form-control-padding-inline);\n  font-family: inherit;\n  font-size: inherit;\n  font-weight: var(--wa-font-weight-action);\n  line-height: calc(var(--wa-form-control-height) - var(--border-width) * 2);\n  height: var(--wa-form-control-height);\n  width: 100%;\n\n  background-color: var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud));\n  border-color: transparent;\n  color: var(--wa-color-on-loud, var(--wa-color-neutral-on-loud));\n  border-radius: var(--wa-form-control-border-radius);\n  border-style: var(--wa-border-style);\n  border-width: var(--wa-border-width-s);\n}\n\n/* Appearance modifiers */\n:host([appearance~='plain']) {\n  .button {\n    color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));\n    background-color: transparent;\n    border-color: transparent;\n  }\n  @media (hover: hover) {\n    .button:not(.disabled):not(.loading):hover {\n      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));\n      background-color: var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet));\n    }\n  }\n  .button:not(.disabled):not(.loading):active {\n    color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));\n    background-color: color-mix(\n      in oklab,\n      var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)),\n      var(--wa-color-mix-active)\n    );\n  }\n}\n\n:host([appearance~='outlined']) {\n  .button {\n    color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));\n    background-color: transparent;\n    border-color: var(--wa-color-border-loud, var(--wa-color-neutral-border-loud));\n  }\n  @media (hover: hover) {\n    .button:not(.disabled):not(.loading):hover {\n      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));\n      background-color: var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet));\n    }\n  }\n  .button:not(.disabled):not(.loading):active {\n    color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));\n    background-color: color-mix(\n      in oklab,\n      var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)),\n      var(--wa-color-mix-active)\n    );\n  }\n}\n\n:host([appearance~='filled']) {\n  .button {\n    color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));\n    background-color: var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal));\n    border-color: transparent;\n  }\n  @media (hover: hover) {\n    .button:not(.disabled):not(.loading):hover {\n      color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));\n      background-color: color-mix(\n        in oklab,\n        var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal)),\n        var(--wa-color-mix-hover)\n      );\n    }\n  }\n  .button:not(.disabled):not(.loading):active {\n    color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));\n    background-color: color-mix(\n      in oklab,\n      var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal)),\n      var(--wa-color-mix-active)\n    );\n  }\n}\n\n:host([appearance~='filled'][appearance~='outlined']) .button {\n  border-color: var(--wa-color-border-normal, var(--wa-color-neutral-border-normal));\n}\n\n:host([appearance~='accent']) {\n  .button {\n    color: var(--wa-color-on-loud, var(--wa-color-neutral-on-loud));\n    background-color: var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud));\n    border-color: transparent;\n  }\n  @media (hover: hover) {\n    .button:not(.disabled):not(.loading):hover {\n      background-color: color-mix(\n        in oklab,\n        var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud)),\n        var(--wa-color-mix-hover)\n      );\n    }\n  }\n  .button:not(.disabled):not(.loading):active {\n    background-color: color-mix(\n      in oklab,\n      var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud)),\n      var(--wa-color-mix-active)\n    );\n  }\n}\n\n/* Focus states */\n.button:focus {\n  outline: none;\n}\n\n.button:focus-visible {\n  outline: var(--wa-focus-ring);\n  outline-offset: var(--wa-focus-ring-offset);\n}\n\n/* Disabled state */\n.button.disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n/* When disabled, prevent mouse events from bubbling up from children */\n.button.disabled * {\n  pointer-events: none;\n}\n\n/* Keep it last so Safari doesn't stop parsing this block */\n.button::-moz-focus-inner {\n  border: 0;\n}\n\n/* Icon buttons */\n.button.is-icon-button {\n  outline-offset: 2px;\n  width: var(--wa-form-control-height);\n  aspect-ratio: 1;\n}\n\n/* Pill modifier */\n:host([pill]) .button {\n  border-radius: var(--wa-border-radius-pill);\n}\n\n/*\n * Label\n */\n\n.start,\n.end {\n  flex: 0 0 auto;\n  display: flex;\n  align-items: center;\n  pointer-events: none;\n}\n\n.label {\n  display: inline-block;\n}\n\n.is-icon-button .label {\n  display: flex;\n}\n\n.label::slotted(wa-icon) {\n  align-self: center;\n}\n\n/*\n * Caret modifier\n */\n\nwa-icon[part~='caret'] {\n  display: flex;\n  align-self: center;\n  align-items: center;\n\n  &::part(svg) {\n    width: 0.875em;\n    height: 0.875em;\n  }\n\n  .button:has(&) .end {\n    display: none;\n  }\n}\n\n/*\n * Loading modifier\n */\n\n.loading {\n  position: relative;\n  cursor: wait;\n\n  .start,\n  .label,\n  .end,\n  .caret {\n    visibility: hidden;\n  }\n\n  wa-spinner {\n    --indicator-color: currentColor;\n    --track-color: color-mix(in oklab, currentColor, transparent 90%);\n\n    position: absolute;\n    font-size: 1em;\n    height: 1em;\n    width: 1em;\n    top: calc(50% - 0.5em);\n    left: calc(50% - 0.5em);\n  }\n}\n\n/*\n * Badges\n */\n\nbutton ::slotted(wa-badge) {\n  border-color: var(--wa-color-surface-default);\n  position: absolute;\n  inset-block-start: 0;\n  inset-inline-end: 0;\n  translate: 50% -50%;\n  pointer-events: none;\n}\n\n:host(:dir(rtl)) ::slotted(wa-badge) {\n  translate: -50% -50%;\n}\n\n/*\n* Button spacing\n*/\n\nslot[name='start']::slotted(*) {\n  margin-inline-end: 0.75em;\n}\n\nslot[name='end']::slotted(*),\n.button:not(.visually-hidden-label) [part~='caret'] {\n  margin-inline-start: 0.75em;\n}\n\n/*\n * Button group border radius modifications\n */\n\n/* Remove border radius from all grouped buttons by default */\n:host(.wa-button-group__button) .button {\n  border-radius: 0;\n}\n\n/* Horizontal orientation */\n:host(.wa-button-group__horizontal.wa-button-group__button-first) .button {\n  border-start-start-radius: var(--wa-form-control-border-radius);\n  border-end-start-radius: var(--wa-form-control-border-radius);\n}\n\n:host(.wa-button-group__horizontal.wa-button-group__button-last) .button {\n  border-start-end-radius: var(--wa-form-control-border-radius);\n  border-end-end-radius: var(--wa-form-control-border-radius);\n}\n\n/* Vertical orientation */\n:host(.wa-button-group__vertical) {\n  flex: 1 1 auto;\n}\n\n:host(.wa-button-group__vertical) .button {\n  width: 100%;\n  justify-content: start;\n}\n\n:host(.wa-button-group__vertical.wa-button-group__button-first) .button {\n  border-start-start-radius: var(--wa-form-control-border-radius);\n  border-start-end-radius: var(--wa-form-control-border-radius);\n}\n\n:host(.wa-button-group__vertical.wa-button-group__button-last) .button {\n  border-end-start-radius: var(--wa-form-control-border-radius);\n  border-end-end-radius: var(--wa-form-control-border-radius);\n}\n\n/* Handle pill modifier for button groups */\n:host([pill].wa-button-group__horizontal.wa-button-group__button-first) .button {\n  border-start-start-radius: var(--wa-border-radius-pill);\n  border-end-start-radius: var(--wa-border-radius-pill);\n}\n\n:host([pill].wa-button-group__horizontal.wa-button-group__button-last) .button {\n  border-start-end-radius: var(--wa-border-radius-pill);\n  border-end-end-radius: var(--wa-border-radius-pill);\n}\n\n:host([pill].wa-button-group__vertical.wa-button-group__button-first) .button {\n  border-start-start-radius: var(--wa-border-radius-pill);\n  border-start-end-radius: var(--wa-border-radius-pill);\n}\n\n:host([pill].wa-button-group__vertical.wa-button-group__button-last) .button {\n  border-end-start-radius: var(--wa-border-radius-pill);\n  border-end-end-radius: var(--wa-border-radius-pill);\n}\n";

  // src/components/button/button.ts
  var WaButton = class extends WebAwesomeFormAssociatedElement {
    constructor() {
      super(...arguments);
      this.assumeInteractionOn = ['click'];
      this.hasSlotController = new HasSlotController(this, '[default]', 'start', 'end');
      this.localize = new LocalizeController(this);
      this.invalid = false;
      this.isIconButton = false;
      this.title = '';
      this.variant = 'neutral';
      this.appearance = 'accent';
      this.size = 'medium';
      this.withCaret = false;
      this.disabled = false;
      this.loading = false;
      this.pill = false;
      this.type = 'button';
      this.form = null;
    }
    static get validators() {
      return [...super.validators, MirrorValidator()];
    }
    constructLightDOMButton() {
      const button = document.createElement('button');
      button.type = this.type;
      button.style.position = 'absolute';
      button.style.width = '0';
      button.style.height = '0';
      button.style.clipPath = 'inset(50%)';
      button.style.overflow = 'hidden';
      button.style.whiteSpace = 'nowrap';
      if (this.name) {
        button.name = this.name;
      }
      button.value = this.value || '';
      ['form', 'formaction', 'formenctype', 'formmethod', 'formnovalidate', 'formtarget'].forEach(
        attr => {
          if (this.hasAttribute(attr)) {
            button.setAttribute(attr, this.getAttribute(attr));
          }
        },
      );
      return button;
    }
    handleClick() {
      const form = this.getForm();
      if (!form) return;
      const lightDOMButton = this.constructLightDOMButton();
      this.parentElement?.append(lightDOMButton);
      lightDOMButton.click();
      lightDOMButton.remove();
    }
    handleInvalid() {
      this.dispatchEvent(new WaInvalidEvent());
    }
    handleLabelSlotChange() {
      const nodes = this.labelSlot.assignedNodes({ flatten: true });
      let hasIconLabel = false;
      let hasIcon = false;
      let text = '';
      [...nodes].forEach(node => {
        if (node.nodeType === Node.ELEMENT_NODE && node.localName === 'wa-icon') {
          hasIcon = true;
          if (!hasIconLabel) hasIconLabel = node.hasAttribute('label');
        }
        if (node.nodeType === Node.TEXT_NODE) {
          text += node.textContent;
        }
      });
      this.isIconButton = text.trim() === '' && hasIcon;
      if (this.isIconButton && !hasIconLabel) {
        console.warn(
          'Icon buttons must have a label for screen readers. Add <wa-icon label="..."> to remove this warning.',
          this,
        );
      }
    }
    isButton() {
      return this.href ? false : true;
    }
    isLink() {
      return this.href ? true : false;
    }
    handleDisabledChange() {
      this.updateValidity();
    }
    // eslint-disable-next-line
    setValue(..._args) {}
    /** Simulates a click on the button. */
    click() {
      this.button.click();
    }
    /** Sets focus on the button. */
    focus(options) {
      this.button.focus(options);
    }
    /** Removes focus from the button. */
    blur() {
      this.button.blur();
    }
    render() {
      const isLink = this.isLink();
      const tag = isLink ? i$2`a` : i$2`button`;
      return u`
      <${tag}
        part="base"
        class=${e$2({
          button: true,
          caret: this.withCaret,
          disabled: this.disabled,
          loading: this.loading,
          rtl: this.localize.dir() === 'rtl',
          'has-label': this.hasSlotController.test('[default]'),
          'has-start': this.hasSlotController.test('start'),
          'has-end': this.hasSlotController.test('end'),
          'is-icon-button': this.isIconButton,
        })}
        ?disabled=${o$6(isLink ? void 0 : this.disabled)}
        type=${o$6(isLink ? void 0 : this.type)}
        title=${this.title}
        name=${o$6(isLink ? void 0 : this.name)}
        value=${o$6(isLink ? void 0 : this.value)}
        href=${o$6(isLink ? this.href : void 0)}
        target=${o$6(isLink ? this.target : void 0)}
        download=${o$6(isLink ? this.download : void 0)}
        rel=${o$6(isLink && this.rel ? this.rel : void 0)}
        role=${o$6(isLink ? void 0 : 'button')}
        aria-disabled=${this.disabled ? 'true' : 'false'}
        tabindex=${this.disabled ? '-1' : '0'}
        @invalid=${this.isButton() ? this.handleInvalid : null}
        @click=${this.handleClick}
      >
        <slot name="start" part="start" class="start"></slot>
        <slot part="label" class="label" @slotchange=${this.handleLabelSlotChange}></slot>
        <slot name="end" part="end" class="end"></slot>
        ${
          this.withCaret
            ? u`
                <wa-icon part="caret" class="caret" library="system" name="chevron-down" variant="solid"></wa-icon>
              `
            : ''
        }
        ${this.loading ? u`<wa-spinner part="spinner"></wa-spinner>` : ''}
      </${tag}>
    `;
    }
  };
  WaButton.css = [button_default, variants_default, size_default];
  __decorateClass$i([e$4('.button')], WaButton.prototype, 'button', 2);
  __decorateClass$i([e$4('slot:not([name])')], WaButton.prototype, 'labelSlot', 2);
  __decorateClass$i([r$2()], WaButton.prototype, 'invalid', 2);
  __decorateClass$i([r$2()], WaButton.prototype, 'isIconButton', 2);
  __decorateClass$i([n$2()], WaButton.prototype, 'title', 2);
  __decorateClass$i([n$2({ reflect: true })], WaButton.prototype, 'variant', 2);
  __decorateClass$i([n$2({ reflect: true })], WaButton.prototype, 'appearance', 2);
  __decorateClass$i([n$2({ reflect: true })], WaButton.prototype, 'size', 2);
  __decorateClass$i(
    [n$2({ attribute: 'with-caret', type: Boolean, reflect: true })],
    WaButton.prototype,
    'withCaret',
    2,
  );
  __decorateClass$i([n$2({ type: Boolean })], WaButton.prototype, 'disabled', 2);
  __decorateClass$i([n$2({ type: Boolean, reflect: true })], WaButton.prototype, 'loading', 2);
  __decorateClass$i([n$2({ type: Boolean, reflect: true })], WaButton.prototype, 'pill', 2);
  __decorateClass$i([n$2()], WaButton.prototype, 'type', 2);
  __decorateClass$i([n$2({ reflect: true })], WaButton.prototype, 'name', 2);
  __decorateClass$i([n$2({ reflect: true })], WaButton.prototype, 'value', 2);
  __decorateClass$i([n$2({ reflect: true })], WaButton.prototype, 'href', 2);
  __decorateClass$i([n$2()], WaButton.prototype, 'target', 2);
  __decorateClass$i([n$2()], WaButton.prototype, 'rel', 2);
  __decorateClass$i([n$2()], WaButton.prototype, 'download', 2);
  __decorateClass$i([n$2({ reflect: true })], WaButton.prototype, 'form', 2);
  __decorateClass$i([n$2({ attribute: 'formaction' })], WaButton.prototype, 'formAction', 2);
  __decorateClass$i([n$2({ attribute: 'formenctype' })], WaButton.prototype, 'formEnctype', 2);
  __decorateClass$i([n$2({ attribute: 'formmethod' })], WaButton.prototype, 'formMethod', 2);
  __decorateClass$i(
    [n$2({ attribute: 'formnovalidate', type: Boolean })],
    WaButton.prototype,
    'formNoValidate',
    2,
  );
  __decorateClass$i([n$2({ attribute: 'formtarget' })], WaButton.prototype, 'formTarget', 2);
  __decorateClass$i(
    [watch('disabled', { waitUntilFirstUpdate: true })],
    WaButton.prototype,
    'handleDisabledChange',
    1,
  );
  WaButton = __decorateClass$i([t$1('wa-button')], WaButton);

  // src/components/spinner/spinner.css
  var spinner_default =
    ':host {\n  --track-width: 2px;\n  --track-color: var(--wa-color-neutral-fill-normal);\n  --indicator-color: var(--wa-color-brand-fill-loud);\n  --speed: 2s;\n\n  /* Resizing a spinner element using anything but font-size will break the animation because the animation uses em units.\n   Therefore, if a spinner is used in a flex container without `flex: none` applied, the spinner can grow/shrink and\n   break the animation. The use of `flex: none` on the host element prevents this by always having the spinner sized\n   according to its actual dimensions.\n  */\n  flex: none;\n  display: inline-flex;\n  width: 1em;\n  height: 1em;\n}\n\nsvg {\n  width: 100%;\n  height: 100%;\n  aspect-ratio: 1;\n  animation: spin var(--speed) linear infinite;\n}\n\n.track {\n  stroke: var(--track-color);\n}\n\n.indicator {\n  stroke: var(--indicator-color);\n  stroke-dasharray: 75, 100;\n  stroke-dashoffset: -5;\n  animation: dash 1.5s ease-in-out infinite;\n  stroke-linecap: round;\n}\n\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes dash {\n  0% {\n    stroke-dasharray: 1, 150;\n    stroke-dashoffset: 0;\n  }\n  50% {\n    stroke-dasharray: 90, 150;\n    stroke-dashoffset: -35;\n  }\n  100% {\n    stroke-dasharray: 90, 150;\n    stroke-dashoffset: -124;\n  }\n}\n';

  // src/components/spinner/spinner.ts
  var WaSpinner = class extends WebAwesomeElement {
    constructor() {
      super(...arguments);
      this.localize = new LocalizeController(this);
    }
    render() {
      return x$1`
      <svg
        part="base"
        role="progressbar"
        aria-label=${this.localize.term('loading')}
        fill="none"
        viewBox="0 0 50 50"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle class="track" cx="25" cy="25" r="20" fill="none" stroke-width="5" />
        <circle class="indicator" cx="25" cy="25" r="20" fill="none" stroke-width="5" />
      </svg>
    `;
    }
  };
  WaSpinner.css = spinner_default;
  WaSpinner = __decorateClass$i([t$1('wa-spinner')], WaSpinner);

  // src/events/load.ts
  var WaLoadEvent = class extends Event {
    constructor() {
      super('wa-load', { bubbles: true, cancelable: false, composed: true });
    }
  };

  // src/utilities/base-path.ts
  var basePath = '';
  var kitCode = '';
  function setBasePath(path) {
    basePath = path;
  }
  function getBasePath(subpath = '') {
    if (!basePath) {
      const el = document.querySelector('[data-webawesome]');
      if (el?.hasAttribute('data-webawesome')) {
        const rootRelativeUrl = new URL(
          el.getAttribute('data-webawesome') ?? '',
          window.location.href,
        ).pathname;
        setBasePath(rootRelativeUrl);
      } else {
        const scripts = [...document.getElementsByTagName('script')];
        const waScript = scripts.find(
          script =>
            script.src.endsWith('webawesome.js') ||
            script.src.endsWith('webawesome.loader.js') ||
            script.src.endsWith('webawesome.ssr-loader.js'),
        );
        if (waScript) {
          const path = String(waScript.getAttribute('src'));
          setBasePath(path.split('/').slice(0, -1).join('/'));
        }
      }
    }
    return basePath.replace(/\/$/, '') + (subpath ? `/${subpath.replace(/^\//, '')}` : ``);
  }
  function setKitCode(code) {
    kitCode = code;
  }
  function getKitCode() {
    if (!kitCode) {
      const el = document.querySelector('[data-fa-kit-code]');
      if (el) {
        setKitCode(el.getAttribute('data-fa-kit-code') || '');
      }
    }
    return kitCode;
  }

  // src/components/icon/library.default.ts
  var FA_VERSION = '7.0.1';
  function getIconUrl(name, family, variant) {
    const kitCode2 = getKitCode();
    const isPro = kitCode2.length > 0;
    let folder = 'solid';
    if (family === 'notdog') {
      if (variant === 'solid') folder = 'solid';
      if (variant === 'duo-solid') folder = 'duo-solid';
      return `https://ka-p.fontawesome.com/releases/v${FA_VERSION}/svgs/notdog-${folder}/${name}.svg?token=${encodeURIComponent(kitCode2)}`;
    }
    if (family === 'chisel') {
      return `https://ka-p.fontawesome.com/releases/v${FA_VERSION}/svgs/chisel-regular/${name}.svg?token=${encodeURIComponent(kitCode2)}`;
    }
    if (family === 'etch') {
      return `https://ka-p.fontawesome.com/releases/v${FA_VERSION}/svgs/etch-solid/${name}.svg?token=${encodeURIComponent(kitCode2)}`;
    }
    if (family === 'jelly') {
      if (variant === 'regular') folder = 'regular';
      if (variant === 'duo-regular') folder = 'duo-regular';
      if (variant === 'fill-regular') folder = 'fill-regular';
      return `https://ka-p.fontawesome.com/releases/v${FA_VERSION}/svgs/jelly-${folder}/${name}.svg?token=${encodeURIComponent(kitCode2)}`;
    }
    if (family === 'slab') {
      if (variant === 'solid' || variant === 'regular') folder = 'regular';
      if (variant === 'press-regular') folder = 'press-regular';
      return `https://ka-p.fontawesome.com/releases/v${FA_VERSION}/svgs/slab-${folder}/${name}.svg?token=${encodeURIComponent(kitCode2)}`;
    }
    if (family === 'thumbprint') {
      return `https://ka-p.fontawesome.com/releases/v${FA_VERSION}/svgs/thumbprint-light/${name}.svg?token=${encodeURIComponent(kitCode2)}`;
    }
    if (family === 'whiteboard') {
      return `https://ka-p.fontawesome.com/releases/v${FA_VERSION}/svgs/whiteboard-semibold/${name}.svg?token=${encodeURIComponent(kitCode2)}`;
    }
    if (family === 'classic') {
      if (variant === 'thin') folder = 'thin';
      if (variant === 'light') folder = 'light';
      if (variant === 'regular') folder = 'regular';
      if (variant === 'solid') folder = 'solid';
    }
    if (family === 'sharp') {
      if (variant === 'thin') folder = 'sharp-thin';
      if (variant === 'light') folder = 'sharp-light';
      if (variant === 'regular') folder = 'sharp-regular';
      if (variant === 'solid') folder = 'sharp-solid';
    }
    if (family === 'duotone') {
      if (variant === 'thin') folder = 'duotone-thin';
      if (variant === 'light') folder = 'duotone-light';
      if (variant === 'regular') folder = 'duotone-regular';
      if (variant === 'solid') folder = 'duotone';
    }
    if (family === 'sharp-duotone') {
      if (variant === 'thin') folder = 'sharp-duotone-thin';
      if (variant === 'light') folder = 'sharp-duotone-light';
      if (variant === 'regular') folder = 'sharp-duotone-regular';
      if (variant === 'solid') folder = 'sharp-duotone-solid';
    }
    if (family === 'brands') {
      folder = 'brands';
    }
    return isPro
      ? `https://ka-p.fontawesome.com/releases/v${FA_VERSION}/svgs/${folder}/${name}.svg?token=${encodeURIComponent(kitCode2)}`
      : `https://ka-f.fontawesome.com/releases/v${FA_VERSION}/svgs/${folder}/${name}.svg`;
  }
  var library = {
    name: 'default',
    resolver: (name, family = 'classic', variant = 'solid') => {
      return getIconUrl(name, family, variant);
    },
    mutator: (svg, hostEl) => {
      if (hostEl?.family && !svg.hasAttribute('data-duotone-initialized')) {
        const { family, variant } = hostEl;
        if (
          // Duotone
          family === 'duotone' || // Sharp duotone
          family === 'sharp-duotone' || // Notdog duo-solid
          (family === 'notdog' && variant === 'duo-solid') || // Jelly duo-regular
          (family === 'jelly' && variant === 'duo-regular') || // Thumbprint
          family === 'thumbprint'
        ) {
          const paths = [...svg.querySelectorAll('path')];
          const primaryPath = paths.find(p => !p.hasAttribute('opacity'));
          const secondaryPath = paths.find(p => p.hasAttribute('opacity'));
          if (!primaryPath || !secondaryPath) return;
          primaryPath.setAttribute('data-duotone-primary', '');
          secondaryPath.setAttribute('data-duotone-secondary', '');
          if (hostEl.swapOpacity && primaryPath && secondaryPath) {
            const originalOpacity = secondaryPath.getAttribute('opacity') || '0.4';
            primaryPath.style.setProperty('--path-opacity', originalOpacity);
            secondaryPath.style.setProperty('--path-opacity', '1');
          }
          svg.setAttribute('data-duotone-initialized', '');
        }
      }
    },
  };
  var library_default_default = library;

  // src/components/icon/library.system.ts
  function dataUri(svg) {
    return `data:image/svg+xml,${encodeURIComponent(svg)}`;
  }
  var icons = {
    //
    // Solid variant
    //
    solid: {
      check: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"/></svg>`,
      'chevron-down': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>`,
      'chevron-left': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>`,
      'chevron-right': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M311.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L243.2 256 73.9 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>`,
      circle: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0z"/></svg>`,
      eyedropper: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M341.6 29.2l-101.6 101.6-9.4-9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-9.4-9.4 101.6-101.6c39-39 39-102.2 0-141.1s-102.2-39-141.1 0zM55.4 323.3c-15 15-23.4 35.4-23.4 56.6l0 42.4-26.6 39.9c-8.5 12.7-6.8 29.6 4 40.4s27.7 12.5 40.4 4l39.9-26.6 42.4 0c21.2 0 41.6-8.4 56.6-23.4l109.4-109.4-45.3-45.3-109.4 109.4c-3 3-7.1 4.7-11.3 4.7l-36.1 0 0-36.1c0-4.2 1.7-8.3 4.7-11.3l109.4-109.4-45.3-45.3-109.4 109.4z"/></svg>`,
      'grip-vertical': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M128 40c0-22.1-17.9-40-40-40L40 0C17.9 0 0 17.9 0 40L0 88c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm0 192c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM0 424l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 40c0-22.1-17.9-40-40-40L232 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM192 232l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 424c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48z"/></svg>`,
      indeterminate: `<svg part="indeterminate-icon" class="icon" viewBox="0 0 16 16"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round"><g stroke="currentColor" stroke-width="2"><g transform="translate(2.285714 6.857143)"><path d="M10.2857143,1.14285714 L1.14285714,1.14285714"/></g></g></g></svg>`,
      minus: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32z"/></svg>`,
      pause: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M48 32C21.5 32 0 53.5 0 80L0 432c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48L48 32zm224 0c-26.5 0-48 21.5-48 48l0 352c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48l-64 0z"/></svg>`,
      play: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M91.2 36.9c-12.4-6.8-27.4-6.5-39.6 .7S32 57.9 32 72l0 368c0 14.1 7.5 27.2 19.6 34.4s27.2 7.5 39.6 .7l336-184c12.8-7 20.8-20.5 20.8-35.1s-8-28.1-20.8-35.1l-336-184z"/></svg>`,
      star: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z"/></svg>`,
      user: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"/></svg>`,
      xmark: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"/></svg>`,
    },
    //
    // Regular variant
    //
    regular: {
      'circle-question': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M464 256a208 208 0 1 0 -416 0 208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm256-80c-17.7 0-32 14.3-32 32 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-44.2 35.8-80 80-80s80 35.8 80 80c0 47.2-36 67.2-56 74.5l0 3.8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8.1c0-20.5 14.8-35.2 30.1-40.2 6.4-2.1 13.2-5.5 18.2-10.3 4.3-4.2 7.7-10 7.7-19.6 0-17.7-14.3-32-32-32zM224 368a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>`,
      'circle-xmark': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM167 167c-9.4 9.4-9.4 24.6 0 33.9l55 55-55 55c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l55-55 55 55c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-55-55 55-55c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-55 55-55-55c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>`,
      copy: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l133.5 0c4.2 0 8.3 1.7 11.3 4.7l58.5 58.5c3 3 4.7 7.1 4.7 11.3L400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-197.5c0-17-6.7-33.3-18.7-45.3L370.7 18.7C358.7 6.7 342.5 0 325.5 0L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-48 0 0 16c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l16 0 0-48-16 0z"/></svg>`,
      eye: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M288 80C222.8 80 169.2 109.6 128.1 147.7 89.6 183.5 63 226 49.4 256 63 286 89.6 328.5 128.1 364.3 169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256 513 226 486.4 183.5 447.9 147.7 406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1 3.3 7.9 3.3 16.7 0 24.6-14.9 35.7-46.2 87.7-93 131.1-47.1 43.7-111.8 80.6-192.6 80.6S142.5 443.2 95.4 399.4c-46.8-43.5-78.1-95.4-93-131.1-3.3-7.9-3.3-16.7 0-24.6 14.9-35.7 46.2-87.7 93-131.1zM288 336c44.2 0 80-35.8 80-80 0-29.6-16.1-55.5-40-69.3-1.4 59.7-49.6 107.9-109.3 109.3 13.8 23.9 39.7 40 69.3 40zm-79.6-88.4c2.5 .3 5 .4 7.6 .4 35.3 0 64-28.7 64-64 0-2.6-.2-5.1-.4-7.6-37.4 3.9-67.2 33.7-71.1 71.1zm45.6-115c10.8-3 22.2-4.5 33.9-4.5 8.8 0 17.5 .9 25.8 2.6 .3 .1 .5 .1 .8 .2 57.9 12.2 101.4 63.7 101.4 125.2 0 70.7-57.3 128-128 128-61.6 0-113-43.5-125.2-101.4-1.8-8.6-2.8-17.5-2.8-26.6 0-11 1.4-21.8 4-32 .2-.7 .3-1.3 .5-1.9 11.9-43.4 46.1-77.6 89.5-89.5z"/></svg>`,
      'eye-slash': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-96.4-96.4c2.7-2.4 5.4-4.8 8-7.2 46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6-56.8 0-105.6 18.2-146 44.2L41-24.9zM176.9 111.1c32.1-18.9 69.2-31.1 111.1-31.1 65.2 0 118.8 29.6 159.9 67.7 38.5 35.7 65.1 78.3 78.6 108.3-13.6 30-40.2 72.5-78.6 108.3-3.1 2.8-6.2 5.6-9.4 8.4L393.8 328c14-20.5 22.2-45.3 22.2-72 0-70.7-57.3-128-128-128-26.7 0-51.5 8.2-72 22.2l-39.1-39.1zm182 182l-108-108c11.1-5.8 23.7-9.1 37.1-9.1 44.2 0 80 35.8 80 80 0 13.4-3.3 26-9.1 37.1zM103.4 173.2l-34-34c-32.6 36.8-55 75.8-66.9 104.5-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6 37.3 0 71.2-7.9 101.5-20.6L352.2 422c-20 6.4-41.4 10-64.2 10-65.2 0-118.8-29.6-159.9-67.7-38.5-35.7-65.1-78.3-78.6-108.3 10.4-23.1 28.6-53.6 54-82.8z"/></svg>`,
      star: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z"/></svg>`,
    },
  };
  var systemLibrary = {
    name: 'system',
    resolver: (name, _family = 'classic', variant = 'solid') => {
      let collection = icons[variant];
      let svg = collection[name] ?? icons.regular[name] ?? icons.regular['circle-question'];
      if (svg) {
        return dataUri(svg);
      }
      return '';
    },
  };
  var library_system_default = systemLibrary;

  // src/components/icon/library.ts
  var defaultIconFamily = 'classic';
  var registry = [library_default_default, library_system_default];
  var watchedIcons = [];
  function watchIcon(icon) {
    watchedIcons.push(icon);
  }
  function unwatchIcon(icon) {
    watchedIcons = watchedIcons.filter(el => el !== icon);
  }
  function getIconLibrary(name) {
    return registry.find(lib => lib.name === name);
  }
  function registerIconLibrary(name, options) {
    unregisterIconLibrary(name);
    registry.push({
      name,
      resolver: options.resolver,
      mutator: options.mutator,
      spriteSheet: options.spriteSheet,
    });
    watchedIcons.forEach(icon => {
      if (icon.library === name) {
        icon.setIcon();
      }
    });
  }
  function unregisterIconLibrary(name) {
    registry = registry.filter(lib => lib.name !== name);
  }
  function getDefaultIconFamily() {
    return defaultIconFamily;
  }

  // src/events/error.ts
  var WaErrorEvent = class extends Event {
    constructor() {
      super('wa-error', { bubbles: true, cancelable: false, composed: true });
    }
  };

  // src/components/icon/icon.css
  var icon_default =
    ':host {\n  --primary-color: currentColor;\n  --primary-opacity: 1;\n  --secondary-color: currentColor;\n  --secondary-opacity: 0.4;\n\n  box-sizing: content-box;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  vertical-align: -0.125em;\n}\n\n/* Standard */\n:host(:not([auto-width])) {\n  width: 1.25em;\n  height: 1em;\n}\n\n/* Auto-width */\n:host([auto-width]) {\n  width: auto;\n  height: 1em;\n}\n\nsvg {\n  height: 1em;\n  fill: currentColor;\n  overflow: visible;\n\n  /* Duotone colors with path-specific opacity fallback */\n  path[data-duotone-primary] {\n    color: var(--primary-color);\n    opacity: var(--path-opacity, var(--primary-opacity));\n  }\n\n  path[data-duotone-secondary] {\n    color: var(--secondary-color);\n    opacity: var(--path-opacity, var(--secondary-opacity));\n  }\n}\n';

  // src/components/icon/icon.ts
  var CACHEABLE_ERROR = Symbol();
  var RETRYABLE_ERROR = Symbol();
  var parser$1;
  var iconCache = /* @__PURE__ */ new Map();
  var WaIcon = class extends WebAwesomeElement {
    constructor() {
      super(...arguments);
      this.svg = null;
      this.swapOpacity = false;
      this.label = '';
      this.library = 'default';
      /** Given a URL, this function returns the resulting SVG element or an appropriate error symbol. */
      this.resolveIcon = async (url, library) => {
        let fileData;
        if (library?.spriteSheet) {
          if (!this.hasUpdated) {
            await this.updateComplete;
          }
          this.svg = x$1`<svg part="svg">
        <use part="use" href="${url}"></use>
      </svg>`;
          await this.updateComplete;
          const svg = this.shadowRoot.querySelector("[part='svg']");
          if (typeof library.mutator === 'function') {
            library.mutator(svg, this);
          }
          return this.svg;
        }
        try {
          fileData = await fetch(url, { mode: 'cors' });
          if (!fileData.ok) return fileData.status === 410 ? CACHEABLE_ERROR : RETRYABLE_ERROR;
        } catch {
          return RETRYABLE_ERROR;
        }
        try {
          const div = document.createElement('div');
          div.innerHTML = await fileData.text();
          const svg = div.firstElementChild;
          if (svg?.tagName?.toLowerCase() !== 'svg') return CACHEABLE_ERROR;
          if (!parser$1) parser$1 = new DOMParser();
          const doc = parser$1.parseFromString(svg.outerHTML, 'text/html');
          const svgEl = doc.body.querySelector('svg');
          if (!svgEl) return CACHEABLE_ERROR;
          svgEl.part.add('svg');
          return document.adoptNode(svgEl);
        } catch {
          return CACHEABLE_ERROR;
        }
      };
    }
    connectedCallback() {
      super.connectedCallback();
      watchIcon(this);
    }
    firstUpdated(changedProperties) {
      super.firstUpdated(changedProperties);
      this.setIcon();
    }
    disconnectedCallback() {
      super.disconnectedCallback();
      unwatchIcon(this);
    }
    getIconSource() {
      const library = getIconLibrary(this.library);
      const family = this.family || getDefaultIconFamily();
      if (this.name && library) {
        return {
          url: library.resolver(this.name, family, this.variant, this.autoWidth),
          fromLibrary: true,
        };
      }
      return {
        url: this.src,
        fromLibrary: false,
      };
    }
    handleLabelChange() {
      const hasLabel = typeof this.label === 'string' && this.label.length > 0;
      if (hasLabel) {
        this.setAttribute('role', 'img');
        this.setAttribute('aria-label', this.label);
        this.removeAttribute('aria-hidden');
      } else {
        this.removeAttribute('role');
        this.removeAttribute('aria-label');
        this.setAttribute('aria-hidden', 'true');
      }
    }
    async setIcon() {
      const { url, fromLibrary } = this.getIconSource();
      const library = fromLibrary ? getIconLibrary(this.library) : void 0;
      if (!url) {
        this.svg = null;
        return;
      }
      let iconResolver = iconCache.get(url);
      if (!iconResolver) {
        iconResolver = this.resolveIcon(url, library);
        iconCache.set(url, iconResolver);
      }
      const svg = await iconResolver;
      if (svg === RETRYABLE_ERROR) {
        iconCache.delete(url);
      }
      if (url !== this.getIconSource().url) {
        return;
      }
      if (e$a(svg)) {
        this.svg = svg;
        return;
      }
      switch (svg) {
        case RETRYABLE_ERROR:
        case CACHEABLE_ERROR:
          this.svg = null;
          this.dispatchEvent(new WaErrorEvent());
          break;
        default:
          this.svg = svg.cloneNode(true);
          library?.mutator?.(this.svg, this);
          this.dispatchEvent(new WaLoadEvent());
      }
    }
    updated(changedProperties) {
      super.updated(changedProperties);
      const library = getIconLibrary(this.library);
      const svg = this.shadowRoot?.querySelector('svg');
      if (svg) {
        library?.mutator?.(svg, this);
      }
    }
    render() {
      if (this.hasUpdated) {
        return this.svg;
      }
      return x$1`<svg part="svg" fill="currentColor" width="16" height="16"></svg>`;
    }
  };
  WaIcon.css = icon_default;
  __decorateClass$i([r$2()], WaIcon.prototype, 'svg', 2);
  __decorateClass$i([n$2({ reflect: true })], WaIcon.prototype, 'name', 2);
  __decorateClass$i([n$2({ reflect: true })], WaIcon.prototype, 'family', 2);
  __decorateClass$i([n$2({ reflect: true })], WaIcon.prototype, 'variant', 2);
  __decorateClass$i(
    [n$2({ attribute: 'auto-width', type: Boolean, reflect: true })],
    WaIcon.prototype,
    'autoWidth',
    2,
  );
  __decorateClass$i(
    [n$2({ attribute: 'swap-opacity', type: Boolean, reflect: true })],
    WaIcon.prototype,
    'swapOpacity',
    2,
  );
  __decorateClass$i([n$2()], WaIcon.prototype, 'src', 2);
  __decorateClass$i([n$2()], WaIcon.prototype, 'label', 2);
  __decorateClass$i([n$2({ reflect: true })], WaIcon.prototype, 'library', 2);
  __decorateClass$i([watch('label')], WaIcon.prototype, 'handleLabelChange', 1);
  __decorateClass$i(
    [watch(['family', 'name', 'library', 'variant', 'src', 'autoWidth', 'swapOpacity'])],
    WaIcon.prototype,
    'setIcon',
    1,
  );
  WaIcon = __decorateClass$i([t$1('wa-icon')], WaIcon);

  // src/components/button-group/button-group.css
  var button_group_default =
    ":host {\n  display: inline-flex;\n}\n\n.button-group {\n  display: flex;\n  position: relative;\n  isolation: isolate;\n  flex-wrap: wrap;\n  gap: 1px;\n\n  @media (hover: hover) {\n    > :hover,\n    &::slotted(:hover) {\n      z-index: 1;\n    }\n  }\n\n  /* Focus and checked are always on top */\n  > :focus,\n  &::slotted(:focus),\n  > [aria-checked='true'],\n  &::slotted([aria-checked='true']),\n  > [checked],\n  &::slotted([checked]) {\n    z-index: 2 !important;\n  }\n}\n:host([orientation='vertical']) .button-group {\n  flex-direction: column;\n}\n\n/* Button groups with at least one outlined button will not have a gap and instead have borders overlap */\n.button-group.has-outlined {\n  gap: 0;\n\n  &:not([aria-orientation='vertical']):not(.button-group-vertical)::slotted(:not(:first-child)) {\n    margin-inline-start: calc(-1 * var(--border-width));\n  }\n\n  &:is([aria-orientation='vertical'], .button-group-vertical)::slotted(:not(:first-child)) {\n    margin-block-start: calc(-1 * var(--border-width));\n  }\n}\n";

  // src/components/button-group/button-group.ts
  var WaButtonGroup = class extends WebAwesomeElement {
    constructor() {
      super(...arguments);
      this.disableRole = false;
      this.hasOutlined = false;
      this.label = '';
      this.orientation = 'horizontal';
      this.variant = 'neutral';
    }
    updated(changedProperties) {
      super.updated(changedProperties);
      if (changedProperties.has('orientation')) {
        this.setAttribute('aria-orientation', this.orientation);
        this.updateClassNames();
      }
    }
    handleFocus(event) {
      const button = findButton(event.target);
      button?.classList.add('button-focus');
    }
    handleBlur(event) {
      const button = findButton(event.target);
      button?.classList.remove('button-focus');
    }
    handleMouseOver(event) {
      const button = findButton(event.target);
      button?.classList.add('button-hover');
    }
    handleMouseOut(event) {
      const button = findButton(event.target);
      button?.classList.remove('button-hover');
    }
    handleSlotChange() {
      this.updateClassNames();
    }
    updateClassNames() {
      const slottedElements = [...this.defaultSlot.assignedElements({ flatten: true })];
      this.hasOutlined = false;
      slottedElements.forEach(el => {
        const index = slottedElements.indexOf(el);
        const button = findButton(el);
        if (button) {
          if (button.appearance === 'outlined') this.hasOutlined = true;
          button.classList.add('wa-button-group__button');
          button.classList.toggle('wa-button-group__horizontal', this.orientation === 'horizontal');
          button.classList.toggle('wa-button-group__vertical', this.orientation === 'vertical');
          button.classList.toggle('wa-button-group__button-first', index === 0);
          button.classList.toggle(
            'wa-button-group__button-inner',
            index > 0 && index < slottedElements.length - 1,
          );
          button.classList.toggle(
            'wa-button-group__button-last',
            index === slottedElements.length - 1,
          );
          button.classList.toggle(
            'wa-button-group__button-radio',
            button.tagName.toLowerCase() === 'wa-radio-button',
          );
        }
      });
    }
    render() {
      return x$1`
      <slot
        part="base"
        class=${e$2({
          'button-group': true,
          'has-outlined': this.hasOutlined,
        })}
        role="${this.disableRole ? 'presentation' : 'group'}"
        aria-label=${this.label}
        aria-orientation=${this.orientation}
        @focusout=${this.handleBlur}
        @focusin=${this.handleFocus}
        @mouseover=${this.handleMouseOver}
        @mouseout=${this.handleMouseOut}
        @slotchange=${this.handleSlotChange}
      ></slot>
    `;
    }
  };
  WaButtonGroup.css = [variants_default, button_group_default];
  __decorateClass$i([e$4('slot')], WaButtonGroup.prototype, 'defaultSlot', 2);
  __decorateClass$i([r$2()], WaButtonGroup.prototype, 'disableRole', 2);
  __decorateClass$i([r$2()], WaButtonGroup.prototype, 'hasOutlined', 2);
  __decorateClass$i([n$2()], WaButtonGroup.prototype, 'label', 2);
  __decorateClass$i([n$2({ reflect: true })], WaButtonGroup.prototype, 'orientation', 2);
  __decorateClass$i([n$2({ reflect: true })], WaButtonGroup.prototype, 'variant', 2);
  WaButtonGroup = __decorateClass$i([t$1('wa-button-group')], WaButtonGroup);
  function findButton(el) {
    const selector = 'wa-button, wa-radio-button';
    return el.closest(selector) ?? el.querySelector(selector);
  }

  // src/internal/offset.ts

  // src/internal/scroll.ts
  var locks = /* @__PURE__ */ new Set();
  function getScrollbarWidth() {
    const documentWidth = document.documentElement.clientWidth;
    return Math.abs(window.innerWidth - documentWidth);
  }
  function getExistingBodyPadding() {
    const padding = Number(getComputedStyle(document.body).paddingRight.replace(/px/, ''));
    if (isNaN(padding) || !padding) {
      return 0;
    }
    return padding;
  }
  function lockBodyScrolling(lockingEl) {
    locks.add(lockingEl);
    if (!document.documentElement.classList.contains('wa-scroll-lock')) {
      const scrollbarWidth = getScrollbarWidth() + getExistingBodyPadding();
      let scrollbarGutterProperty = getComputedStyle(document.documentElement).scrollbarGutter;
      if (!scrollbarGutterProperty || scrollbarGutterProperty === 'auto') {
        scrollbarGutterProperty = 'stable';
      }
      if (scrollbarWidth < 2) {
        scrollbarGutterProperty = '';
      }
      document.documentElement.style.setProperty(
        '--wa-scroll-lock-gutter',
        scrollbarGutterProperty,
      );
      document.documentElement.classList.add('wa-scroll-lock');
      document.documentElement.style.setProperty('--wa-scroll-lock-size', `${scrollbarWidth}px`);
    }
  }
  function unlockBodyScrolling(lockingEl) {
    locks.delete(lockingEl);
    if (locks.size === 0) {
      document.documentElement.classList.remove('wa-scroll-lock');
      document.documentElement.style.removeProperty('--wa-scroll-lock-size');
    }
  }

  // src/internal/parse.ts
  function parseSpaceDelimitedTokens(input) {
    return input
      .split(' ')
      .map(token => token.trim())
      .filter(token => token !== '');
  }

  // src/events/after-hide.ts
  var WaAfterHideEvent = class extends Event {
    constructor() {
      super('wa-after-hide', { bubbles: true, cancelable: false, composed: true });
    }
  };

  // src/events/after-show.ts
  var WaAfterShowEvent = class extends Event {
    constructor() {
      super('wa-after-show', { bubbles: true, cancelable: false, composed: true });
    }
  };

  // src/events/hide.ts
  var WaHideEvent = class extends Event {
    constructor(detail) {
      super('wa-hide', { bubbles: true, cancelable: true, composed: true });
      this.detail = detail;
    }
  };

  // src/events/show.ts
  var WaShowEvent = class extends Event {
    constructor() {
      super('wa-show', { bubbles: true, cancelable: true, composed: true });
    }
  };

  // src/internal/animate.ts
  function animateWithClass(el, className) {
    return new Promise(resolve => {
      const controller = new AbortController();
      const { signal } = controller;
      if (el.classList.contains(className)) {
        return;
      }
      el.classList.remove(className);
      el.classList.add(className);
      let onEnd = () => {
        el.classList.remove(className);
        resolve();
        controller.abort();
      };
      el.addEventListener('animationend', onEnd, { once: true, signal });
      el.addEventListener('animationcancel', onEnd, { once: true, signal });
    });
  }

  // src/components/drawer/drawer.css
  var drawer_default =
    ":host {\n  --size: 25rem;\n  --spacing: var(--wa-space-l);\n  --show-duration: 200ms;\n  --hide-duration: 200ms;\n\n  display: none;\n}\n\n:host([open]) {\n  display: block;\n}\n\n.drawer {\n  display: flex;\n  flex-direction: column;\n  top: 0;\n  inset-inline-start: 0;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n  max-height: 100%;\n  overflow: hidden;\n  background-color: var(--wa-color-surface-raised);\n  border: none;\n  box-shadow: var(--wa-shadow-l);\n  overflow: auto;\n  padding: 0;\n  margin: 0;\n  animation-duration: var(--show-duration);\n  animation-timing-function: ease;\n\n  &.show::backdrop {\n    animation: show-backdrop var(--show-duration, 200ms) ease;\n  }\n\n  &.hide::backdrop {\n    animation: show-backdrop var(--hide-duration, 200ms) ease reverse;\n  }\n\n  &.show.top {\n    animation: show-drawer-from-top var(--show-duration) ease;\n  }\n\n  &.hide.top {\n    animation: show-drawer-from-top var(--hide-duration) ease reverse;\n  }\n\n  &.show.end {\n    animation: show-drawer-from-end var(--show-duration) ease;\n\n    &:dir(rtl) {\n      animation-name: show-drawer-from-start;\n    }\n  }\n\n  &.hide.end {\n    animation: show-drawer-from-end var(--hide-duration) ease reverse;\n\n    &:dir(rtl) {\n      animation-name: show-drawer-from-start;\n    }\n  }\n\n  &.show.bottom {\n    animation: show-drawer-from-bottom var(--show-duration) ease;\n  }\n\n  &.hide.bottom {\n    animation: show-drawer-from-bottom var(--hide-duration) ease reverse;\n  }\n\n  &.show.start {\n    animation: show-drawer-from-start var(--show-duration) ease;\n\n    &:dir(rtl) {\n      animation-name: show-drawer-from-end;\n    }\n  }\n\n  &.hide.start {\n    animation: show-drawer-from-start var(--hide-duration) ease reverse;\n\n    &:dir(rtl) {\n      animation-name: show-drawer-from-end;\n    }\n  }\n\n  &.pulse {\n    animation: pulse 250ms ease;\n  }\n}\n\n.drawer:focus {\n  outline: none;\n}\n\n.top {\n  top: 0;\n  inset-inline-end: auto;\n  bottom: auto;\n  inset-inline-start: 0;\n  width: 100%;\n  height: var(--size);\n}\n\n.end {\n  top: 0;\n  inset-inline-end: 0;\n  bottom: auto;\n  inset-inline-start: auto;\n  width: var(--size);\n  height: 100%;\n}\n\n.bottom {\n  top: auto;\n  inset-inline-end: auto;\n  bottom: 0;\n  inset-inline-start: 0;\n  width: 100%;\n  height: var(--size);\n}\n\n.start {\n  top: 0;\n  inset-inline-end: auto;\n  bottom: auto;\n  inset-inline-start: 0;\n  width: var(--size);\n  height: 100%;\n}\n\n.header {\n  display: flex;\n  flex-wrap: nowrap;\n  padding-inline-start: var(--spacing);\n  padding-block-end: 0;\n\n  /* Subtract the close button's padding so that the X is visually aligned with the edges of the dialog content */\n  padding-inline-end: calc(var(--spacing) - var(--wa-form-control-padding-block));\n  padding-block-start: calc(var(--spacing) - var(--wa-form-control-padding-block));\n}\n\n.title {\n  align-self: center;\n  flex: 1 1 auto;\n  font: inherit;\n  font-size: var(--wa-font-size-l);\n  font-weight: var(--wa-font-weight-heading);\n  line-height: var(--wa-line-height-condensed);\n  margin: 0;\n}\n\n.header-actions {\n  align-self: start;\n  display: flex;\n  flex-shrink: 0;\n  flex-wrap: wrap;\n  justify-content: end;\n  gap: var(--wa-space-2xs);\n  padding-inline-start: var(--spacing);\n}\n\n.header-actions wa-button,\n.header-actions ::slotted(wa-button) {\n  flex: 0 0 auto;\n  display: flex;\n  align-items: center;\n}\n\n.body {\n  flex: 1 1 auto;\n  display: block;\n  padding: var(--spacing);\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n}\n\n.footer {\n  display: flex;\n  flex-wrap: wrap;\n  gap: var(--wa-space-xs);\n  justify-content: end;\n  padding: var(--spacing);\n  padding-block-start: 0;\n}\n\n.footer ::slotted(wa-button:not(:last-of-type)) {\n  margin-inline-end: var(--wa-spacing-xs);\n}\n\n.drawer::backdrop {\n  /*\n      NOTE: the ::backdrop element doesn't inherit properly in Safari yet, but it will in 17.4! At that time, we can\n      remove the fallback values here.\n    */\n  background-color: var(--wa-color-overlay-modal, rgb(0 0 0 / 0.25));\n}\n\n@keyframes pulse {\n  0% {\n    scale: 1;\n  }\n  50% {\n    scale: 1.01;\n  }\n  100% {\n    scale: 1;\n  }\n}\n\n@keyframes show-drawer {\n  from {\n    opacity: 0;\n    scale: 0.8;\n  }\n  to {\n    opacity: 1;\n    scale: 1;\n  }\n}\n\n@keyframes show-drawer-from-top {\n  from {\n    opacity: 0;\n    translate: 0 -100%;\n  }\n  to {\n    opacity: 1;\n    translate: 0 0;\n  }\n}\n\n@keyframes show-drawer-from-end {\n  from {\n    opacity: 0;\n    translate: 100%;\n  }\n  to {\n    opacity: 1;\n    translate: 0 0;\n  }\n}\n\n@keyframes show-drawer-from-bottom {\n  from {\n    opacity: 0;\n    translate: 0 100%;\n  }\n  to {\n    opacity: 1;\n    translate: 0 0;\n  }\n}\n\n@keyframes show-drawer-from-start {\n  from {\n    opacity: 0;\n    translate: -100% 0;\n  }\n  to {\n    opacity: 1;\n    translate: 0 0;\n  }\n}\n\n@keyframes show-backdrop {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@media (forced-colors: active) {\n  .drawer {\n    border: solid 1px white;\n  }\n}\n";

  // src/components/drawer/drawer.ts
  var WaDrawer = class extends WebAwesomeElement {
    constructor() {
      super(...arguments);
      this.localize = new LocalizeController(this);
      this.hasSlotController = new HasSlotController(this, 'footer', 'header-actions', 'label');
      this.open = false;
      this.label = '';
      this.placement = 'end';
      this.withoutHeader = false;
      this.lightDismiss = true;
      this.handleDocumentKeyDown = event => {
        if (event.key === 'Escape' && this.open) {
          event.preventDefault();
          event.stopPropagation();
          this.requestClose(this.drawer);
        }
      };
    }
    firstUpdated() {
      if (this.open) {
        this.addOpenListeners();
        this.drawer.showModal();
        lockBodyScrolling(this);
      }
    }
    disconnectedCallback() {
      super.disconnectedCallback();
      unlockBodyScrolling(this);
      this.removeOpenListeners();
    }
    async requestClose(source) {
      const waHideEvent = new WaHideEvent({ source });
      this.dispatchEvent(waHideEvent);
      if (waHideEvent.defaultPrevented) {
        this.open = true;
        animateWithClass(this.drawer, 'pulse');
        return;
      }
      this.removeOpenListeners();
      await animateWithClass(this.drawer, 'hide');
      this.open = false;
      this.drawer.close();
      unlockBodyScrolling(this);
      const trigger = this.originalTrigger;
      if (typeof trigger?.focus === 'function') {
        setTimeout(() => trigger.focus());
      }
      this.dispatchEvent(new WaAfterHideEvent());
    }
    addOpenListeners() {
      document.addEventListener('keydown', this.handleDocumentKeyDown);
    }
    removeOpenListeners() {
      document.removeEventListener('keydown', this.handleDocumentKeyDown);
    }
    handleDialogCancel(event) {
      event.preventDefault();
      if (!this.drawer.classList.contains('hide')) {
        this.requestClose(this.drawer);
      }
    }
    handleDialogClick(event) {
      const target = event.target;
      const button = target.closest('[data-drawer="close"]');
      if (button) {
        event.stopPropagation();
        this.requestClose(button);
      }
    }
    async handleDialogPointerDown(event) {
      if (event.target === this.drawer) {
        if (this.lightDismiss) {
          this.requestClose(this.drawer);
        } else {
          await animateWithClass(this.drawer, 'pulse');
        }
      }
    }
    handleOpenChange() {
      if (this.open && !this.drawer.open) {
        this.show();
      } else if (this.drawer.open) {
        this.open = true;
        this.requestClose(this.drawer);
      }
    }
    /** Shows the drawer. */
    async show() {
      const waShowEvent = new WaShowEvent();
      this.dispatchEvent(waShowEvent);
      if (waShowEvent.defaultPrevented) {
        this.open = false;
        return;
      }
      this.addOpenListeners();
      this.originalTrigger = document.activeElement;
      this.open = true;
      this.drawer.showModal();
      lockBodyScrolling(this);
      requestAnimationFrame(() => {
        const elementToFocus = this.querySelector('[autofocus]');
        if (elementToFocus && typeof elementToFocus.focus === 'function') {
          elementToFocus.focus();
        }
      });
      await animateWithClass(this.drawer, 'show');
      this.dispatchEvent(new WaAfterShowEvent());
    }
    render() {
      const hasHeader = !this.withoutHeader;
      const hasFooter = this.hasSlotController.test('footer');
      return x$1`
      <dialog
        part="dialog"
        class=${e$2({
          drawer: true,
          open: this.open,
          top: this.placement === 'top',
          end: this.placement === 'end',
          bottom: this.placement === 'bottom',
          start: this.placement === 'start',
        })}
        @cancel=${this.handleDialogCancel}
        @click=${this.handleDialogClick}
        @pointerdown=${this.handleDialogPointerDown}
      >
        ${
          hasHeader
            ? x$1`
              <header part="header" class="header">
                <h2 part="title" class="title" id="title">
                  <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                  <slot name="label"> ${this.label.length > 0 ? this.label : String.fromCharCode(8203)} </slot>
                </h2>
                <div part="header-actions" class="header-actions">
                  <slot name="header-actions"></slot>
                  <wa-button
                    part="close-button"
                    exportparts="base:close-button__base"
                    class="close"
                    appearance="plain"
                    @click="${event => this.requestClose(event.target)}"
                  >
                    <wa-icon
                      name="xmark"
                      label=${this.localize.term('close')}
                      library="system"
                      variant="solid"
                    ></wa-icon>
                  </wa-button>
                </div>
              </header>
            `
            : ''
        }

        <div part="body" class="body"><slot></slot></div>

        ${
          hasFooter
            ? x$1`
              <footer part="footer" class="footer">
                <slot name="footer"></slot>
              </footer>
            `
            : ''
        }
      </dialog>
    `;
    }
  };
  WaDrawer.css = drawer_default;
  __decorateClass$i([e$4('.drawer')], WaDrawer.prototype, 'drawer', 2);
  __decorateClass$i([n$2({ type: Boolean, reflect: true })], WaDrawer.prototype, 'open', 2);
  __decorateClass$i([n$2({ reflect: true })], WaDrawer.prototype, 'label', 2);
  __decorateClass$i([n$2({ reflect: true })], WaDrawer.prototype, 'placement', 2);
  __decorateClass$i(
    [n$2({ attribute: 'without-header', type: Boolean, reflect: true })],
    WaDrawer.prototype,
    'withoutHeader',
    2,
  );
  __decorateClass$i(
    [n$2({ attribute: 'light-dismiss', type: Boolean })],
    WaDrawer.prototype,
    'lightDismiss',
    2,
  );
  __decorateClass$i(
    [watch('open', { waitUntilFirstUpdate: true })],
    WaDrawer.prototype,
    'handleOpenChange',
    1,
  );
  WaDrawer = __decorateClass$i([t$1('wa-drawer')], WaDrawer);
  document.addEventListener('click', event => {
    const drawerAttrEl = event.target.closest('[data-drawer]');
    if (drawerAttrEl instanceof Element) {
      const [command, id] = parseSpaceDelimitedTokens(
        drawerAttrEl.getAttribute('data-drawer') || '',
      );
      if (command === 'open' && id?.length) {
        const doc = drawerAttrEl.getRootNode();
        const drawer = doc.getElementById(id);
        if (drawer?.localName === 'wa-drawer') {
          drawer.open = true;
        } else {
          console.warn(`A drawer with an ID of "${id}" could not be found in this document.`);
        }
      }
    }
  });
  {
    document.body.addEventListener('pointerdown', () => {});
  }

  // src/components/dialog/dialog.css
  var dialog_default =
    ":host {\n  --width: 31rem;\n  --spacing: var(--wa-space-l);\n  --show-duration: 200ms;\n  --hide-duration: 200ms;\n\n  display: none;\n}\n\n:host([open]) {\n  display: block;\n}\n\n.dialog {\n  display: flex;\n  flex-direction: column;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  width: var(--width);\n  max-width: calc(100% - var(--wa-space-2xl));\n  max-height: calc(100% - var(--wa-space-2xl));\n  background-color: var(--wa-color-surface-raised);\n  border-radius: var(--wa-panel-border-radius);\n  border: none;\n  box-shadow: var(--wa-shadow-l);\n  padding: 0;\n  margin: auto;\n\n  &.show {\n    animation: show-dialog var(--show-duration) ease;\n\n    &::backdrop {\n      animation: show-backdrop var(--show-duration, 200ms) ease;\n    }\n  }\n\n  &.hide {\n    animation: show-dialog var(--hide-duration) ease reverse;\n\n    &::backdrop {\n      animation: show-backdrop var(--hide-duration, 200ms) ease reverse;\n    }\n  }\n\n  &.pulse {\n    animation: pulse 250ms ease;\n  }\n}\n\n.dialog:focus {\n  outline: none;\n}\n\n/* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */\n@media screen and (max-width: 420px) {\n  .dialog {\n    max-height: 80vh;\n  }\n}\n\n.open {\n  display: flex;\n  opacity: 1;\n}\n\n.header {\n  flex: 0 0 auto;\n  display: flex;\n  flex-wrap: nowrap;\n\n  padding-inline-start: var(--spacing);\n  padding-block-end: 0;\n\n  /* Subtract the close button's padding so that the X is visually aligned with the edges of the dialog content */\n  padding-inline-end: calc(var(--spacing) - var(--wa-form-control-padding-block));\n  padding-block-start: calc(var(--spacing) - var(--wa-form-control-padding-block));\n}\n\n.title {\n  align-self: center;\n  flex: 1 1 auto;\n  font-family: inherit;\n  font-size: var(--wa-font-size-l);\n  font-weight: var(--wa-font-weight-heading);\n  line-height: var(--wa-line-height-condensed);\n  margin: 0;\n}\n\n.header-actions {\n  align-self: start;\n  display: flex;\n  flex-shrink: 0;\n  flex-wrap: wrap;\n  justify-content: end;\n  gap: var(--wa-space-2xs);\n  padding-inline-start: var(--spacing);\n}\n\n.header-actions wa-button,\n.header-actions ::slotted(wa-button) {\n  flex: 0 0 auto;\n  display: flex;\n  align-items: center;\n}\n\n.body {\n  flex: 1 1 auto;\n  display: block;\n  padding: var(--spacing);\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n}\n\n.footer {\n  flex: 0 0 auto;\n  display: flex;\n  flex-wrap: wrap;\n  gap: var(--wa-space-xs);\n  justify-content: end;\n  padding: var(--spacing);\n  padding-block-start: 0;\n}\n\n.footer ::slotted(wa-button:not(:first-of-type)) {\n  margin-inline-start: var(--wa-spacing-xs);\n}\n\n.dialog::backdrop {\n  /*\n    NOTE: the ::backdrop element doesn't inherit properly in Safari yet, but it will in 17.4! At that time, we can\n    remove the fallback values here.\n  */\n  background-color: var(--wa-color-overlay-modal, rgb(0 0 0 / 0.25));\n}\n\n@keyframes pulse {\n  0% {\n    scale: 1;\n  }\n  50% {\n    scale: 1.02;\n  }\n  100% {\n    scale: 1;\n  }\n}\n\n@keyframes show-dialog {\n  from {\n    opacity: 0;\n    scale: 0.8;\n  }\n  to {\n    opacity: 1;\n    scale: 1;\n  }\n}\n\n@keyframes show-backdrop {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@media (forced-colors: active) {\n  .dialog {\n    border: solid 1px white;\n  }\n}\n";

  // src/components/dialog/dialog.ts
  var WaDialog = class extends WebAwesomeElement {
    constructor() {
      super(...arguments);
      this.localize = new LocalizeController(this);
      this.hasSlotController = new HasSlotController(this, 'footer', 'header-actions', 'label');
      this.open = false;
      this.label = '';
      this.withoutHeader = false;
      this.lightDismiss = false;
      this.handleDocumentKeyDown = event => {
        if (event.key === 'Escape' && this.open) {
          event.preventDefault();
          event.stopPropagation();
          this.requestClose(this.dialog);
        }
      };
    }
    firstUpdated() {
      if (this.open) {
        this.addOpenListeners();
        this.dialog.showModal();
        lockBodyScrolling(this);
      }
    }
    disconnectedCallback() {
      super.disconnectedCallback();
      unlockBodyScrolling(this);
      this.removeOpenListeners();
    }
    async requestClose(source) {
      const waHideEvent = new WaHideEvent({ source });
      this.dispatchEvent(waHideEvent);
      if (waHideEvent.defaultPrevented) {
        this.open = true;
        animateWithClass(this.dialog, 'pulse');
        return;
      }
      this.removeOpenListeners();
      await animateWithClass(this.dialog, 'hide');
      this.open = false;
      this.dialog.close();
      unlockBodyScrolling(this);
      const trigger = this.originalTrigger;
      if (typeof trigger?.focus === 'function') {
        setTimeout(() => trigger.focus());
      }
      this.dispatchEvent(new WaAfterHideEvent());
    }
    addOpenListeners() {
      document.addEventListener('keydown', this.handleDocumentKeyDown);
    }
    removeOpenListeners() {
      document.removeEventListener('keydown', this.handleDocumentKeyDown);
    }
    handleDialogCancel(event) {
      event.preventDefault();
      if (!this.dialog.classList.contains('hide')) {
        this.requestClose(this.dialog);
      }
    }
    handleDialogClick(event) {
      const target = event.target;
      const button = target.closest('[data-dialog="close"]');
      if (button) {
        event.stopPropagation();
        this.requestClose(button);
      }
    }
    async handleDialogPointerDown(event) {
      if (event.target === this.dialog) {
        if (this.lightDismiss) {
          this.requestClose(this.dialog);
        } else {
          await animateWithClass(this.dialog, 'pulse');
        }
      }
    }
    handleOpenChange() {
      if (this.open && !this.dialog.open) {
        this.show();
      } else if (!this.open && this.dialog.open) {
        this.open = true;
        this.requestClose(this.dialog);
      }
    }
    /** Shows the dialog. */
    async show() {
      const waShowEvent = new WaShowEvent();
      this.dispatchEvent(waShowEvent);
      if (waShowEvent.defaultPrevented) {
        this.open = false;
        return;
      }
      this.addOpenListeners();
      this.originalTrigger = document.activeElement;
      this.open = true;
      this.dialog.showModal();
      lockBodyScrolling(this);
      requestAnimationFrame(() => {
        const elementToFocus = this.querySelector('[autofocus]');
        if (elementToFocus && typeof elementToFocus.focus === 'function') {
          elementToFocus.focus();
        }
      });
      await animateWithClass(this.dialog, 'show');
      this.dispatchEvent(new WaAfterShowEvent());
    }
    render() {
      const hasHeader = !this.withoutHeader;
      const hasFooter = this.hasSlotController.test('footer');
      return x$1`
      <dialog
        part="dialog"
        class=${e$2({
          dialog: true,
          open: this.open,
        })}
        @cancel=${this.handleDialogCancel}
        @click=${this.handleDialogClick}
        @pointerdown=${this.handleDialogPointerDown}
      >
        ${
          hasHeader
            ? x$1`
              <header part="header" class="header">
                <h2 part="title" class="title" id="title">
                  <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                  <slot name="label"> ${this.label.length > 0 ? this.label : String.fromCharCode(8203)} </slot>
                </h2>
                <div part="header-actions" class="header-actions">
                  <slot name="header-actions"></slot>
                  <wa-button
                    part="close-button"
                    exportparts="base:close-button__base"
                    class="close"
                    appearance="plain"
                    @click="${event => this.requestClose(event.target)}"
                  >
                    <wa-icon
                      name="xmark"
                      label=${this.localize.term('close')}
                      library="system"
                      variant="solid"
                    ></wa-icon>
                  </wa-button>
                </div>
              </header>
            `
            : ''
        }

        <div part="body" class="body"><slot></slot></div>

        ${
          hasFooter
            ? x$1`
              <footer part="footer" class="footer">
                <slot name="footer"></slot>
              </footer>
            `
            : ''
        }
      </dialog>
    `;
    }
  };
  WaDialog.css = dialog_default;
  __decorateClass$i([e$4('.dialog')], WaDialog.prototype, 'dialog', 2);
  __decorateClass$i([n$2({ type: Boolean, reflect: true })], WaDialog.prototype, 'open', 2);
  __decorateClass$i([n$2({ reflect: true })], WaDialog.prototype, 'label', 2);
  __decorateClass$i(
    [n$2({ attribute: 'without-header', type: Boolean, reflect: true })],
    WaDialog.prototype,
    'withoutHeader',
    2,
  );
  __decorateClass$i(
    [n$2({ attribute: 'light-dismiss', type: Boolean })],
    WaDialog.prototype,
    'lightDismiss',
    2,
  );
  __decorateClass$i(
    [watch('open', { waitUntilFirstUpdate: true })],
    WaDialog.prototype,
    'handleOpenChange',
    1,
  );
  WaDialog = __decorateClass$i([t$1('wa-dialog')], WaDialog);
  document.addEventListener('click', event => {
    const dialogAttrEl = event.target.closest('[data-dialog]');
    if (dialogAttrEl instanceof Element) {
      const [command, id] = parseSpaceDelimitedTokens(
        dialogAttrEl.getAttribute('data-dialog') || '',
      );
      if (command === 'open' && id?.length) {
        const doc = dialogAttrEl.getRootNode();
        const dialog = doc.getElementById(id);
        if (dialog?.localName === 'wa-dialog') {
          dialog.open = true;
        } else {
          console.warn(`A dialog with an ID of "${id}" could not be found in this document.`);
        }
      }
    }
  });
  {
    document.addEventListener('pointerdown', () => {});
  }

  // src/internal/submit-on-enter.ts
  function submitOnEnter(event, el) {
    const hasModifier = event.metaKey || event.ctrlKey || event.shiftKey || event.altKey;
    if (event.key === 'Enter' && !hasModifier) {
      setTimeout(() => {
        if (!event.defaultPrevented && !event.isComposing) {
          submitForm(el);
        }
      });
    }
  }
  function submitForm(el) {
    let form = null;
    if ('form' in el) {
      form = el.form;
    }
    if (!form && 'getForm' in el) {
      form = el.getForm();
    }
    if (!form) {
      return;
    }
    const formElements = [...form.elements];
    if (formElements.length === 1) {
      form.requestSubmit(null);
      return;
    }
    const button = formElements.find(el2 => el2.type === 'submit' && !el2.matches(':disabled'));
    if (!button) {
      return;
    }
    if (['input', 'button'].includes(button.localName)) {
      form.requestSubmit(button);
    } else {
      button.click();
    }
  }

  // src/styles/component/form-control.css
  var form_control_default =
    ":host {\n  display: flex;\n  flex-direction: column;\n}\n\n/* Label */\n:is([part~='form-control-label'], [part~='label']):has(*:not(:empty)) {\n  display: inline-block;\n  color: var(--wa-form-control-label-color);\n  font-weight: var(--wa-form-control-label-font-weight);\n  line-height: var(--wa-form-control-label-line-height);\n  margin-block-end: 0.5em;\n\n  :host([required]) &::after {\n    content: var(--wa-form-control-required-content);\n    margin-inline-start: var(--wa-form-control-required-content-offset);\n    color: var(--wa-form-control-required-content-color);\n  }\n}\n\n/* Help text */\n[part~='hint'] {\n  display: block;\n  color: var(--wa-form-control-hint-color);\n  font-weight: var(--wa-form-control-hint-font-weight);\n  line-height: var(--wa-form-control-hint-line-height);\n  margin-block-start: 0.5em;\n  font-size: var(--wa-font-size-smaller);\n  line-height: var(--wa-form-control-label-line-height);\n\n  &:not(.has-slotted) {\n    display: none;\n  }\n}\n";

  // src/internal/drag.ts
  var supportsTouch = typeof window !== 'undefined' && 'ontouchstart' in window;
  var DraggableElement = class {
    constructor(el, options) {
      this.isActive = false;
      this.isDragging = false;
      this.handleDragStart = event => {
        const clientX =
          supportsTouch && 'touches' in event ? event.touches[0].clientX : event.clientX;
        const clientY =
          supportsTouch && 'touches' in event ? event.touches[0].clientY : event.clientY;
        if (
          this.isDragging || // Prevent right-clicks from triggering drags
          (!supportsTouch && event.buttons > 1)
        ) {
          return;
        }
        this.isDragging = true;
        document.addEventListener('pointerup', this.handleDragStop);
        document.addEventListener('pointermove', this.handleDragMove);
        document.addEventListener('touchend', this.handleDragStop);
        document.addEventListener('touchmove', this.handleDragMove);
        this.options.start(clientX, clientY);
      };
      this.handleDragStop = event => {
        const clientX =
          supportsTouch && 'touches' in event ? event.touches[0].clientX : event.clientX;
        const clientY =
          supportsTouch && 'touches' in event ? event.touches[0].clientY : event.clientY;
        this.isDragging = false;
        document.removeEventListener('pointerup', this.handleDragStop);
        document.removeEventListener('pointermove', this.handleDragMove);
        document.removeEventListener('touchend', this.handleDragStop);
        document.removeEventListener('touchmove', this.handleDragMove);
        this.options.stop(clientX, clientY);
      };
      this.handleDragMove = event => {
        const clientX =
          supportsTouch && 'touches' in event ? event.touches[0].clientX : event.clientX;
        const clientY =
          supportsTouch && 'touches' in event ? event.touches[0].clientY : event.clientY;
        window.getSelection()?.removeAllRanges();
        this.options.move(clientX, clientY);
      };
      this.element = el;
      this.options = {
        start: () => void 0,
        stop: () => void 0,
        move: () => void 0,
        ...options,
      };
      this.start();
    }
    /** Start listening to drags. */
    start() {
      if (!this.isActive) {
        this.element.addEventListener('pointerdown', this.handleDragStart);
        if (supportsTouch) {
          this.element.addEventListener('touchstart', this.handleDragStart);
        }
        this.isActive = true;
      }
    }
    /** Stop listening to drags. */
    stop() {
      document.removeEventListener('pointerup', this.handleDragStop);
      document.removeEventListener('pointermove', this.handleDragMove);
      document.removeEventListener('touchend', this.handleDragStop);
      document.removeEventListener('touchmove', this.handleDragMove);
      this.element.removeEventListener('pointerdown', this.handleDragStart);
      if (supportsTouch) {
        this.element.removeEventListener('touchstart', this.handleDragStart);
      }
      this.isActive = false;
      this.isDragging = false;
    }
    /** Starts or stops the drag listeners. */
    toggle(isActive) {
      const isGoingToBeActive = isActive !== void 0 ? isActive : !this.isActive;
      if (isGoingToBeActive) {
        this.start();
      } else {
        this.stop();
      }
    }
  };

  const urlAlphabet = 'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict';

  /* @ts-self-types="./index.d.ts" */
  let nanoid = (size = 21) => {
    let id = '';
    let bytes = crypto.getRandomValues(new Uint8Array((size |= 0)));
    while (size--) {
      id += urlAlphabet[bytes[size] & 63];
    }
    return id;
  };

  // src/internal/math.ts
  function clamp$1(value, min, max) {
    const noNegativeZero = n => (Object.is(n, -0) ? 0 : n);
    if (value < min) {
      return noNegativeZero(min);
    }
    if (value > max) {
      return noNegativeZero(max);
    }
    return noNegativeZero(value);
  }
  function uniqueId(prefix = '') {
    return `${prefix}${nanoid()}`;
  }

  // src/internal/validators/slider-validator.ts
  var SliderValidator = () => {
    const nativeRequiredRange = Object.assign(document.createElement('input'), {
      type: 'range',
      required: true,
    });
    return {
      observedAttributes: ['required', 'min', 'max', 'step'],
      checkValidity(element) {
        const validity = {
          message: '',
          isValid: true,
          invalidKeys: [],
        };
        const createNativeRange = (value, min, max, step) => {
          const input = document.createElement('input');
          input.type = 'range';
          input.min = String(min);
          input.max = String(max);
          input.step = String(step);
          input.value = String(value);
          input.checkValidity();
          return input.validationMessage;
        };
        if (element.required && !element.hasInteracted) {
          validity.isValid = false;
          validity.invalidKeys.push('valueMissing');
          validity.message = nativeRequiredRange.validationMessage || 'Please fill out this field.';
          return validity;
        }
        if (element.isRange) {
          const minValue = element.minValue;
          const maxValue = element.maxValue;
          if (minValue < element.min) {
            validity.isValid = false;
            validity.invalidKeys.push('rangeUnderflow');
            validity.message =
              createNativeRange(minValue, element.min, element.max, element.step) ||
              `Value must be greater than or equal to ${element.min}.`;
            return validity;
          }
          if (maxValue > element.max) {
            validity.isValid = false;
            validity.invalidKeys.push('rangeOverflow');
            validity.message =
              createNativeRange(maxValue, element.min, element.max, element.step) ||
              `Value must be less than or equal to ${element.max}.`;
            return validity;
          }
          if (element.step && element.step !== 1) {
            const minStepMismatch = (minValue - element.min) % element.step !== 0;
            const maxStepMismatch = (maxValue - element.min) % element.step !== 0;
            if (minStepMismatch || maxStepMismatch) {
              validity.isValid = false;
              validity.invalidKeys.push('stepMismatch');
              const testValue = minStepMismatch ? minValue : maxValue;
              validity.message =
                createNativeRange(testValue, element.min, element.max, element.step) ||
                `Value must be a multiple of ${element.step}.`;
              return validity;
            }
          }
        } else {
          const value = element.value;
          if (value < element.min) {
            validity.isValid = false;
            validity.invalidKeys.push('rangeUnderflow');
            validity.message =
              createNativeRange(value, element.min, element.max, element.step) ||
              `Value must be greater than or equal to ${element.min}.`;
            return validity;
          }
          if (value > element.max) {
            validity.isValid = false;
            validity.invalidKeys.push('rangeOverflow');
            validity.message =
              createNativeRange(value, element.min, element.max, element.step) ||
              `Value must be less than or equal to ${element.max}.`;
            return validity;
          }
          if (element.step && element.step !== 1 && (value - element.min) % element.step !== 0) {
            validity.isValid = false;
            validity.invalidKeys.push('stepMismatch');
            validity.message =
              createNativeRange(value, element.min, element.max, element.step) ||
              `Value must be a multiple of ${element.step}.`;
            return validity;
          }
        }
        return validity;
      },
    };
  };

  // src/components/slider/slider.css
  var slider_default =
    ":host {\n  --track-size: 0.5em;\n  --thumb-width: 1.4em;\n  --thumb-height: 1.4em;\n  --marker-width: 0.1875em;\n  --marker-height: 0.1875em;\n}\n\n:host([orientation='vertical']) {\n  width: auto;\n}\n\n#label:has(~ .vertical) {\n  display: block;\n  order: 2;\n  max-width: none;\n  text-align: center;\n}\n\n#description:has(~ .vertical) {\n  order: 3;\n  text-align: center;\n}\n\n/* Add extra space between slider and label, when present */\n#label:has(*:not(:empty)) ~ #slider {\n  &.horizontal {\n    margin-block-start: 0.5em;\n  }\n  &.vertical {\n    margin-block-end: 0.5em;\n  }\n}\n\n#slider {\n  touch-action: none;\n\n  &:focus {\n    outline: none;\n  }\n\n  &:focus-visible:not(.disabled) #thumb,\n  &:focus-visible:not(.disabled) #thumb-min,\n  &:focus-visible:not(.disabled) #thumb-max {\n    outline: var(--wa-focus-ring);\n    /* intentionally no offset due to border */\n  }\n}\n\n#track {\n  position: relative;\n  border-radius: 9999px;\n  background: var(--wa-color-neutral-fill-normal);\n  isolation: isolate;\n}\n\n/* Orientation */\n.horizontal #track {\n  height: var(--track-size);\n}\n\n.vertical #track {\n  order: 1;\n  width: var(--track-size);\n  height: 200px;\n}\n\n/* Disabled */\n.disabled #track {\n  cursor: not-allowed;\n  opacity: 0.5;\n}\n\n/* Indicator */\n#indicator {\n  position: absolute;\n  border-radius: inherit;\n  background-color: var(--wa-form-control-activated-color);\n\n  &:dir(ltr) {\n    right: calc(100% - max(var(--start), var(--end)));\n    left: min(var(--start), var(--end));\n  }\n\n  &:dir(rtl) {\n    right: min(var(--start), var(--end));\n    left: calc(100% - max(var(--start), var(--end)));\n  }\n}\n\n.horizontal #indicator {\n  top: 0;\n  height: 100%;\n}\n\n.vertical #indicator {\n  top: calc(100% - var(--end));\n  bottom: var(--start);\n  left: 0;\n  width: 100%;\n}\n\n/* Thumbs */\n#thumb,\n#thumb-min,\n#thumb-max {\n  z-index: 3;\n  position: absolute;\n  width: var(--thumb-width);\n  height: var(--thumb-height);\n  border: solid 0.125em var(--wa-color-surface-default);\n  border-radius: 50%;\n  background-color: var(--wa-form-control-activated-color);\n  cursor: pointer;\n}\n\n.disabled #thumb,\n.disabled #thumb-min,\n.disabled #thumb-max {\n  cursor: inherit;\n}\n\n.horizontal #thumb,\n.horizontal #thumb-min,\n.horizontal #thumb-max {\n  top: calc(50% - var(--thumb-height) / 2);\n\n  &:dir(ltr) {\n    right: auto;\n    left: calc(var(--position) - var(--thumb-width) / 2);\n  }\n\n  &:dir(rtl) {\n    right: calc(var(--position) - var(--thumb-width) / 2);\n    left: auto;\n  }\n}\n\n.vertical #thumb,\n.vertical #thumb-min,\n.vertical #thumb-max {\n  bottom: calc(var(--position) - var(--thumb-height) / 2);\n  left: calc(50% - var(--thumb-width) / 2);\n}\n\n/* Range-specific thumb styles */\n:host([range]) {\n  #thumb-min:focus-visible,\n  #thumb-max:focus-visible {\n    z-index: 4; /* Ensure focused thumb appears on top */\n    outline: var(--wa-focus-ring);\n    /* intentionally no offset due to border */\n  }\n}\n\n/* Markers */\n#markers {\n  pointer-events: none;\n}\n\n.marker {\n  z-index: 2;\n  position: absolute;\n  width: var(--marker-width);\n  height: var(--marker-height);\n  border-radius: 50%;\n  background-color: var(--wa-color-surface-default);\n}\n\n.marker:first-of-type,\n.marker:last-of-type {\n  display: none;\n}\n\n.horizontal .marker {\n  top: calc(50% - var(--marker-height) / 2);\n  left: calc(var(--position) - var(--marker-width) / 2);\n}\n\n.vertical .marker {\n  top: calc(var(--position) - var(--marker-height) / 2);\n  left: calc(50% - var(--marker-width) / 2);\n}\n\n/* Marker labels */\n#references {\n  position: relative;\n\n  slot {\n    display: flex;\n    justify-content: space-between;\n    height: 100%;\n  }\n\n  ::slotted(*) {\n    color: var(--wa-color-text-quiet);\n    font-size: 0.875em;\n    line-height: 1;\n  }\n}\n\n.horizontal {\n  #references {\n    margin-block-start: 0.5em;\n  }\n}\n\n.vertical {\n  display: flex;\n  margin-inline: auto;\n\n  #track {\n    order: 1;\n  }\n\n  #references {\n    order: 2;\n    width: min-content;\n    margin-inline-start: 0.75em;\n\n    slot {\n      flex-direction: column;\n    }\n  }\n}\n\n.vertical #references slot {\n  flex-direction: column;\n}\n";

  // src/components/slider/slider.ts
  var WaSlider = class extends WebAwesomeFormAssociatedElement {
    constructor() {
      super(...arguments);
      this.draggableThumbMin = null;
      this.draggableThumbMax = null;
      this.hasSlotController = new HasSlotController(this, 'hint', 'label');
      this.localize = new LocalizeController(this);
      this.activeThumb = null;
      this.lastTrackPosition = null;
      this.label = '';
      this.hint = '';
      this.minValue = 0;
      this.maxValue = 50;
      this.defaultValue =
        this.getAttribute('value') == null ? this.minValue : Number(this.getAttribute('value'));
      this._value = this.defaultValue;
      this.range = false;
      this.disabled = false;
      this.readonly = false;
      this.orientation = 'horizontal';
      this.size = 'medium';
      this.form = null;
      this.min = 0;
      this.max = 100;
      this.step = 1;
      this.required = false;
      this.tooltipDistance = 8;
      this.tooltipPlacement = 'top';
      this.withMarkers = false;
      this.withTooltip = false;
    }
    static get validators() {
      return [...super.validators, SliderValidator()];
    }
    // Track last position for direction detection
    get focusableAnchor() {
      return this.isRange ? this.thumbMin || this.slider : this.slider;
    }
    /** Override validation target to point to the focusable element */
    get validationTarget() {
      return this.focusableAnchor;
    }
    /** The current value of the slider, submitted as a name/value pair with form data. */
    get value() {
      if (this.valueHasChanged) {
        return this._value;
      }
      return this._value ?? this.defaultValue;
    }
    set value(val) {
      val = Number(val) ?? this.minValue;
      if (this._value === val) {
        return;
      }
      this.valueHasChanged = true;
      this._value = val;
    }
    /** Get if this is a range slider */
    get isRange() {
      return this.range;
    }
    firstUpdated() {
      if (this.isRange) {
        this.draggableThumbMin = new DraggableElement(this.thumbMin, {
          start: () => {
            this.activeThumb = 'min';
            this.trackBoundingClientRect = this.track.getBoundingClientRect();
            this.valueWhenDraggingStarted = this.minValue;
            this.customStates.set('dragging', true);
            this.showRangeTooltips();
          },
          move: (x, y) => {
            this.setThumbValueFromCoordinates(x, y, 'min');
          },
          stop: () => {
            if (this.minValue !== this.valueWhenDraggingStarted) {
              this.updateComplete.then(() => {
                this.dispatchEvent(new Event('change', { bubbles: true, composed: true }));
              });
              this.hasInteracted = true;
            }
            this.hideRangeTooltips();
            this.customStates.set('dragging', false);
            this.valueWhenDraggingStarted = void 0;
            this.activeThumb = null;
          },
        });
        this.draggableThumbMax = new DraggableElement(this.thumbMax, {
          start: () => {
            this.activeThumb = 'max';
            this.trackBoundingClientRect = this.track.getBoundingClientRect();
            this.valueWhenDraggingStarted = this.maxValue;
            this.customStates.set('dragging', true);
            this.showRangeTooltips();
          },
          move: (x, y) => {
            this.setThumbValueFromCoordinates(x, y, 'max');
          },
          stop: () => {
            if (this.maxValue !== this.valueWhenDraggingStarted) {
              this.updateComplete.then(() => {
                this.dispatchEvent(new Event('change', { bubbles: true, composed: true }));
              });
              this.hasInteracted = true;
            }
            this.hideRangeTooltips();
            this.customStates.set('dragging', false);
            this.valueWhenDraggingStarted = void 0;
            this.activeThumb = null;
          },
        });
        this.draggableTrack = new DraggableElement(this.track, {
          start: (x, y) => {
            this.trackBoundingClientRect = this.track.getBoundingClientRect();
            if (this.activeThumb) {
              this.valueWhenDraggingStarted =
                this.activeThumb === 'min' ? this.minValue : this.maxValue;
            } else {
              const value = this.getValueFromCoordinates(x, y);
              const minDistance = Math.abs(value - this.minValue);
              const maxDistance = Math.abs(value - this.maxValue);
              if (minDistance === maxDistance) {
                if (value > this.maxValue) {
                  this.activeThumb = 'max';
                } else if (value < this.minValue) {
                  this.activeThumb = 'min';
                } else {
                  const isRtl = this.localize.dir() === 'rtl';
                  const isVertical = this.orientation === 'vertical';
                  const position = isVertical ? y : x;
                  const previousPosition = this.lastTrackPosition || position;
                  this.lastTrackPosition = position;
                  const movingForward =
                    (position > previousPosition !== isRtl && !isVertical) ||
                    (position < previousPosition && isVertical);
                  this.activeThumb = movingForward ? 'max' : 'min';
                }
              } else {
                this.activeThumb = minDistance <= maxDistance ? 'min' : 'max';
              }
              this.valueWhenDraggingStarted =
                this.activeThumb === 'min' ? this.minValue : this.maxValue;
            }
            this.customStates.set('dragging', true);
            this.setThumbValueFromCoordinates(x, y, this.activeThumb);
            this.showRangeTooltips();
          },
          move: (x, y) => {
            if (this.activeThumb) {
              this.setThumbValueFromCoordinates(x, y, this.activeThumb);
            }
          },
          stop: () => {
            if (this.activeThumb) {
              const currentValue = this.activeThumb === 'min' ? this.minValue : this.maxValue;
              if (currentValue !== this.valueWhenDraggingStarted) {
                this.updateComplete.then(() => {
                  this.dispatchEvent(new Event('change', { bubbles: true, composed: true }));
                });
                this.hasInteracted = true;
              }
            }
            this.hideRangeTooltips();
            this.customStates.set('dragging', false);
            this.valueWhenDraggingStarted = void 0;
            this.activeThumb = null;
          },
        });
      } else {
        this.draggableTrack = new DraggableElement(this.slider, {
          start: (x, y) => {
            this.trackBoundingClientRect = this.track.getBoundingClientRect();
            this.valueWhenDraggingStarted = this.value;
            this.customStates.set('dragging', true);
            this.setValueFromCoordinates(x, y);
            this.showTooltip();
          },
          move: (x, y) => {
            this.setValueFromCoordinates(x, y);
          },
          stop: () => {
            if (this.value !== this.valueWhenDraggingStarted) {
              this.updateComplete.then(() => {
                this.dispatchEvent(new Event('change', { bubbles: true, composed: true }));
              });
              this.hasInteracted = true;
            }
            this.hideTooltip();
            this.customStates.set('dragging', false);
            this.valueWhenDraggingStarted = void 0;
          },
        });
      }
    }
    updated(changedProperties) {
      if (changedProperties.has('range')) {
        this.requestUpdate();
      }
      if (this.isRange) {
        if (changedProperties.has('minValue') || changedProperties.has('maxValue')) {
          this.minValue = clamp$1(this.minValue, this.min, this.maxValue);
          this.maxValue = clamp$1(this.maxValue, this.minValue, this.max);
          this.updateFormValue();
        }
      } else {
        if (changedProperties.has('value')) {
          this.value = clamp$1(this.value, this.min, this.max);
          this.setValue(String(this.value));
        }
      }
      if (changedProperties.has('min') || changedProperties.has('max')) {
        if (this.isRange) {
          this.minValue = clamp$1(this.minValue, this.min, this.max);
          this.maxValue = clamp$1(this.maxValue, this.min, this.max);
        } else {
          this.value = clamp$1(this.value, this.min, this.max);
        }
      }
      if (changedProperties.has('disabled')) {
        this.customStates.set('disabled', this.disabled);
      }
      if (changedProperties.has('disabled') || changedProperties.has('readonly')) {
        const enabled = !(this.disabled || this.readonly);
        if (this.isRange) {
          if (this.draggableThumbMin) this.draggableThumbMin.toggle(enabled);
          if (this.draggableThumbMax) this.draggableThumbMax.toggle(enabled);
        }
        if (this.draggableTrack) {
          this.draggableTrack.toggle(enabled);
        }
      }
      super.updated(changedProperties);
    }
    /** @internal Called when a containing fieldset is disabled. */
    formDisabledCallback(isDisabled) {
      this.disabled = isDisabled;
    }
    /** @internal Called when the form is reset. */
    formResetCallback() {
      if (this.isRange) {
        this.minValue = parseFloat(this.getAttribute('min-value') ?? String(this.min));
        this.maxValue = parseFloat(this.getAttribute('max-value') ?? String(this.max));
      } else {
        this.value = parseFloat(this.getAttribute('value') ?? String(this.min));
      }
      this.hasInteracted = false;
      super.formResetCallback();
    }
    /** Clamps a number to min/max while ensuring it's a valid step interval. */
    clampAndRoundToStep(value) {
      const stepPrecision = (String(this.step).split('.')[1] || '').replace(/0+$/g, '').length;
      value = Math.round(value / this.step) * this.step;
      value = clamp$1(value, this.min, this.max);
      return parseFloat(value.toFixed(stepPrecision));
    }
    /** Given a value, returns its percentage within a range of min/max. */
    getPercentageFromValue(value) {
      return ((value - this.min) / (this.max - this.min)) * 100;
    }
    /** Converts coordinates to slider value */
    getValueFromCoordinates(x, y) {
      const isRtl = this.localize.dir() === 'rtl';
      const isVertical = this.orientation === 'vertical';
      const { top, right, bottom, left, height, width } = this.trackBoundingClientRect;
      const pointerPosition = isVertical ? y : x;
      const sliderCoords = isVertical
        ? { start: top, end: bottom, size: height }
        : { start: left, end: right, size: width };
      const relativePosition = isVertical
        ? sliderCoords.end - pointerPosition
        : isRtl
          ? sliderCoords.end - pointerPosition
          : pointerPosition - sliderCoords.start;
      const percentage = relativePosition / sliderCoords.size;
      return this.clampAndRoundToStep(this.min + (this.max - this.min) * percentage);
    }
    handleBlur() {
      if (this.isRange) {
        requestAnimationFrame(() => {
          const focusedElement = this.shadowRoot?.activeElement;
          const thumbHasFocus =
            focusedElement === this.thumbMin || focusedElement === this.thumbMax;
          if (!thumbHasFocus) {
            this.hideRangeTooltips();
          }
        });
      } else {
        this.hideTooltip();
      }
      this.customStates.set('focused', false);
      this.dispatchEvent(new FocusEvent('blur', { bubbles: true, composed: true }));
    }
    handleFocus(event) {
      const target = event.target;
      if (this.isRange) {
        if (target === this.thumbMin) {
          this.activeThumb = 'min';
        } else if (target === this.thumbMax) {
          this.activeThumb = 'max';
        }
        this.showRangeTooltips();
      } else {
        this.showTooltip();
      }
      this.customStates.set('focused', true);
      this.dispatchEvent(new FocusEvent('focus', { bubbles: true, composed: true }));
    }
    handleKeyDown(event) {
      const isRtl = this.localize.dir() === 'rtl';
      const target = event.target;
      if (this.disabled || this.readonly) return;
      if (this.isRange) {
        if (target === this.thumbMin) {
          this.activeThumb = 'min';
        } else if (target === this.thumbMax) {
          this.activeThumb = 'max';
        }
        if (!this.activeThumb) return;
      }
      const current = this.isRange
        ? this.activeThumb === 'min'
          ? this.minValue
          : this.maxValue
        : this.value;
      let newValue = current;
      switch (event.key) {
        // Increase
        case 'ArrowUp':
        case isRtl ? 'ArrowLeft' : 'ArrowRight':
          event.preventDefault();
          newValue = this.clampAndRoundToStep(current + this.step);
          break;
        // Decrease
        case 'ArrowDown':
        case isRtl ? 'ArrowRight' : 'ArrowLeft':
          event.preventDefault();
          newValue = this.clampAndRoundToStep(current - this.step);
          break;
        // Minimum value
        case 'Home':
          event.preventDefault();
          newValue =
            this.isRange && this.activeThumb === 'min'
              ? this.min
              : this.isRange
                ? this.minValue
                : this.min;
          break;
        // Maximum value
        case 'End':
          event.preventDefault();
          newValue =
            this.isRange && this.activeThumb === 'max'
              ? this.max
              : this.isRange
                ? this.maxValue
                : this.max;
          break;
        // Move up 10%
        case 'PageUp':
          event.preventDefault();
          const stepUp = Math.max(
            current + (this.max - this.min) / 10,
            current + this.step,
            // make sure we at least move up to the next step
          );
          newValue = this.clampAndRoundToStep(stepUp);
          break;
        // Move down 10%
        case 'PageDown':
          event.preventDefault();
          const stepDown = Math.min(
            current - (this.max - this.min) / 10,
            current - this.step,
            // make sure we at least move down to the previous step
          );
          newValue = this.clampAndRoundToStep(stepDown);
          break;
        // Handle form submission on Enter
        case 'Enter':
          submitOnEnter(event, this);
          return;
      }
      if (newValue === current) return;
      if (this.isRange) {
        if (this.activeThumb === 'min') {
          if (newValue > this.maxValue) {
            this.maxValue = newValue;
            this.minValue = newValue;
          } else {
            this.minValue = Math.max(this.min, newValue);
          }
        } else {
          if (newValue < this.minValue) {
            this.minValue = newValue;
            this.maxValue = newValue;
          } else {
            this.maxValue = Math.min(this.max, newValue);
          }
        }
        this.updateFormValue();
      } else {
        this.value = clamp$1(newValue, this.min, this.max);
      }
      this.updateComplete.then(() => {
        this.dispatchEvent(new InputEvent('input', { bubbles: true, composed: true }));
        this.dispatchEvent(new Event('change', { bubbles: true, composed: true }));
      });
      this.hasInteracted = true;
    }
    handleLabelPointerDown(event) {
      event.preventDefault();
      if (!this.disabled) {
        if (this.isRange) {
          this.thumbMin?.focus();
        } else {
          this.slider.focus();
        }
      }
    }
    setValueFromCoordinates(x, y) {
      const oldValue = this.value;
      this.value = this.getValueFromCoordinates(x, y);
      if (this.value !== oldValue) {
        this.updateComplete.then(() => {
          this.dispatchEvent(new InputEvent('input', { bubbles: true, composed: true }));
        });
      }
    }
    setThumbValueFromCoordinates(x, y, thumb) {
      const value = this.getValueFromCoordinates(x, y);
      const oldValue = thumb === 'min' ? this.minValue : this.maxValue;
      if (thumb === 'min') {
        if (value > this.maxValue) {
          this.maxValue = value;
          this.minValue = value;
        } else {
          this.minValue = Math.max(this.min, value);
        }
      } else {
        if (value < this.minValue) {
          this.minValue = value;
          this.maxValue = value;
        } else {
          this.maxValue = Math.min(this.max, value);
        }
      }
      if (oldValue !== (thumb === 'min' ? this.minValue : this.maxValue)) {
        this.updateFormValue();
        this.updateComplete.then(() => {
          this.dispatchEvent(new InputEvent('input', { bubbles: true, composed: true }));
        });
      }
    }
    showTooltip() {
      if (this.withTooltip && this.tooltip) {
        this.tooltip.open = true;
      }
    }
    hideTooltip() {
      if (this.withTooltip && this.tooltip) {
        this.tooltip.open = false;
      }
    }
    showRangeTooltips() {
      if (this.withTooltip) {
        this.tooltips.forEach(tooltip => {
          tooltip.open = true;
        });
      }
    }
    hideRangeTooltips() {
      if (this.withTooltip) {
        this.tooltips.forEach(tooltip => {
          tooltip.open = false;
        });
      }
    }
    /** Updates the form value submission for range sliders */
    updateFormValue() {
      if (this.isRange) {
        const formData = new FormData();
        formData.append(this.name || '', String(this.minValue));
        formData.append(this.name || '', String(this.maxValue));
        this.setValue(formData);
      }
    }
    /** Sets focus to the slider. */
    focus() {
      if (this.isRange) {
        this.thumbMin?.focus();
      } else {
        this.slider.focus();
      }
    }
    /** Removes focus from the slider. */
    blur() {
      if (this.isRange) {
        if (document.activeElement === this.thumbMin) {
          this.thumbMin.blur();
        } else if (document.activeElement === this.thumbMax) {
          this.thumbMax.blur();
        }
      } else {
        this.slider.blur();
      }
    }
    /**
     * Decreases the slider's value by `step`. This is a programmatic change, so `input` and `change` events will not be
     * emitted when this is called.
     */
    stepDown() {
      if (this.isRange) {
        const newValue = this.clampAndRoundToStep(this.minValue - this.step);
        this.minValue = clamp$1(newValue, this.min, this.maxValue);
        this.updateFormValue();
      } else {
        const newValue = this.clampAndRoundToStep(this.value - this.step);
        this.value = newValue;
      }
    }
    /**
     * Increases the slider's value by `step`. This is a programmatic change, so `input` and `change` events will not be
     * emitted when this is called.
     */
    stepUp() {
      if (this.isRange) {
        const newValue = this.clampAndRoundToStep(this.maxValue + this.step);
        this.maxValue = clamp$1(newValue, this.minValue, this.max);
        this.updateFormValue();
      } else {
        const newValue = this.clampAndRoundToStep(this.value + this.step);
        this.value = newValue;
      }
    }
    render() {
      const hasLabelSlot = this.hasSlotController.test('label');
      const hasHintSlot = this.hasSlotController.test('hint');
      const hasLabel = this.label ? true : !!hasLabelSlot;
      const hasHint = this.hint ? true : !!hasHintSlot;
      const hasReference = this.hasSlotController.test('reference');
      const sliderClasses = e$2({
        small: this.size === 'small',
        medium: this.size === 'medium',
        large: this.size === 'large',
        horizontal: this.orientation === 'horizontal',
        vertical: this.orientation === 'vertical',
        disabled: this.disabled,
      });
      const markers = [];
      if (this.withMarkers) {
        for (let i = this.min; i <= this.max; i += this.step) {
          markers.push(this.getPercentageFromValue(i));
        }
      }
      const label = x$1`
      <label
        id="label"
        part="label"
        for=${this.isRange ? 'thumb-min' : 'text-box'}
        class=${e$2({ vh: !hasLabel })}
        @pointerdown=${this.handleLabelPointerDown}
      >
        <slot name="label">${this.label}</slot>
      </label>
    `;
      const hint = x$1`
      <div
        id="hint"
        part="hint"
        class=${e$2({
          'has-slotted': hasHint,
        })}
      >
        <slot name="hint">${this.hint}</slot>
      </div>
    `;
      const markersTemplate = this.withMarkers
        ? x$1`
          <div id="markers" part="markers">
            ${markers.map(marker => x$1`<span part="marker" class="marker" style="--position: ${marker}%"></span>`)}
          </div>
        `
        : '';
      const referencesTemplate = hasReference
        ? x$1`
          <div id="references" part="references" aria-hidden="true">
            <slot name="reference"></slot>
          </div>
        `
        : '';
      const createTooltip = (thumbId, value) =>
        this.withTooltip
          ? x$1`
            <wa-tooltip
              id=${`tooltip${thumbId !== 'thumb' ? '-' + thumbId : ''}`}
              part="tooltip"
              exportparts="
                base:tooltip__base,
                body:tooltip__body,
                arrow:tooltip__arrow
              "
              trigger="manual"
              distance=${this.tooltipDistance}
              placement=${this.tooltipPlacement}
              for=${thumbId}
              activation="manual"
              dir=${this.localize.dir()}
            >
              <span aria-hidden="true">
                ${typeof this.valueFormatter === 'function' ? this.valueFormatter(value) : this.localize.number(value)}
              </span>
            </wa-tooltip>
          `
          : '';
      if (this.isRange) {
        const minThumbPosition = clamp$1(this.getPercentageFromValue(this.minValue), 0, 100);
        const maxThumbPosition = clamp$1(this.getPercentageFromValue(this.maxValue), 0, 100);
        return x$1`
        ${label}

        <div id="slider" part="slider" class=${sliderClasses}>
          <div id="track" part="track">
            <div
              id="indicator"
              part="indicator"
              style="--start: ${Math.min(minThumbPosition, maxThumbPosition)}%; --end: ${Math.max(
                minThumbPosition,
                maxThumbPosition,
              )}%"
            ></div>

            ${markersTemplate}

            <span
              id="thumb-min"
              part="thumb thumb-min"
              style="--position: ${minThumbPosition}%"
              role="slider"
              aria-valuemin=${this.min}
              aria-valuenow=${this.minValue}
              aria-valuetext=${typeof this.valueFormatter === 'function' ? this.valueFormatter(this.minValue) : this.localize.number(this.minValue)}
              aria-valuemax=${this.max}
              aria-label="${this.label ? `${this.label} (minimum value)` : 'Minimum value'}"
              aria-orientation=${this.orientation}
              aria-disabled=${this.disabled ? 'true' : 'false'}
              aria-readonly=${this.readonly ? 'true' : 'false'}
              tabindex=${this.disabled ? -1 : 0}
              @blur=${this.handleBlur}
              @focus=${this.handleFocus}
              @keydown=${this.handleKeyDown}
            ></span>

            <span
              id="thumb-max"
              part="thumb thumb-max"
              style="--position: ${maxThumbPosition}%"
              role="slider"
              aria-valuemin=${this.min}
              aria-valuenow=${this.maxValue}
              aria-valuetext=${typeof this.valueFormatter === 'function' ? this.valueFormatter(this.maxValue) : this.localize.number(this.maxValue)}
              aria-valuemax=${this.max}
              aria-label="${this.label ? `${this.label} (maximum value)` : 'Maximum value'}"
              aria-orientation=${this.orientation}
              aria-disabled=${this.disabled ? 'true' : 'false'}
              aria-readonly=${this.readonly ? 'true' : 'false'}
              tabindex=${this.disabled ? -1 : 0}
              @blur=${this.handleBlur}
              @focus=${this.handleFocus}
              @keydown=${this.handleKeyDown}
            ></span>
          </div>

          ${referencesTemplate} ${hint}
        </div>

        ${createTooltip('thumb-min', this.minValue)} ${createTooltip('thumb-max', this.maxValue)}
      `;
      } else {
        const thumbPosition = clamp$1(this.getPercentageFromValue(this.value), 0, 100);
        const indicatorOffsetPosition = clamp$1(
          this.getPercentageFromValue(
            typeof this.indicatorOffset === 'number' ? this.indicatorOffset : this.min,
          ),
          0,
          100,
        );
        return x$1`
        ${label}

        <div
          id="slider"
          part="slider"
          class=${sliderClasses}
          role="slider"
          aria-disabled=${this.disabled ? 'true' : 'false'}
          aria-readonly=${this.disabled ? 'true' : 'false'}
          aria-orientation=${this.orientation}
          aria-valuemin=${this.min}
          aria-valuenow=${this.value}
          aria-valuetext=${typeof this.valueFormatter === 'function' ? this.valueFormatter(this.value) : this.localize.number(this.value)}
          aria-valuemax=${this.max}
          aria-labelledby="label"
          aria-describedby="hint"
          tabindex=${this.disabled ? -1 : 0}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @keydown=${this.handleKeyDown}
        >
          <div id="track" part="track">
            <div
              id="indicator"
              part="indicator"
              style="--start: ${indicatorOffsetPosition}%; --end: ${thumbPosition}%"
            ></div>

            ${markersTemplate}
            <span id="thumb" part="thumb" style="--position: ${thumbPosition}%"></span>
          </div>

          ${referencesTemplate} ${hint}
        </div>

        ${createTooltip('thumb', this.value)}
      `;
      }
    }
  };
  WaSlider.formAssociated = true;
  WaSlider.observeSlots = true;
  WaSlider.css = [size_default, form_control_default, slider_default];
  __decorateClass$i([e$4('#slider')], WaSlider.prototype, 'slider', 2);
  __decorateClass$i([e$4('#thumb')], WaSlider.prototype, 'thumb', 2);
  __decorateClass$i([e$4('#thumb-min')], WaSlider.prototype, 'thumbMin', 2);
  __decorateClass$i([e$4('#thumb-max')], WaSlider.prototype, 'thumbMax', 2);
  __decorateClass$i([e$4('#track')], WaSlider.prototype, 'track', 2);
  __decorateClass$i([e$4('#tooltip')], WaSlider.prototype, 'tooltip', 2);
  __decorateClass$i([r$1('wa-tooltip')], WaSlider.prototype, 'tooltips', 2);
  __decorateClass$i([n$2()], WaSlider.prototype, 'label', 2);
  __decorateClass$i([n$2({ attribute: 'hint' })], WaSlider.prototype, 'hint', 2);
  __decorateClass$i([n$2({ reflect: true })], WaSlider.prototype, 'name', 2);
  __decorateClass$i(
    [n$2({ type: Number, attribute: 'min-value' })],
    WaSlider.prototype,
    'minValue',
    2,
  );
  __decorateClass$i(
    [n$2({ type: Number, attribute: 'max-value' })],
    WaSlider.prototype,
    'maxValue',
    2,
  );
  __decorateClass$i(
    [n$2({ attribute: 'value', reflect: true, type: Number })],
    WaSlider.prototype,
    'defaultValue',
    2,
  );
  __decorateClass$i([r$2()], WaSlider.prototype, 'value', 1);
  __decorateClass$i([n$2({ type: Boolean, reflect: true })], WaSlider.prototype, 'range', 2);
  __decorateClass$i([n$2({ type: Boolean })], WaSlider.prototype, 'disabled', 2);
  __decorateClass$i([n$2({ type: Boolean, reflect: true })], WaSlider.prototype, 'readonly', 2);
  __decorateClass$i([n$2({ reflect: true })], WaSlider.prototype, 'orientation', 2);
  __decorateClass$i([n$2({ reflect: true })], WaSlider.prototype, 'size', 2);
  __decorateClass$i(
    [n$2({ attribute: 'indicator-offset', type: Number })],
    WaSlider.prototype,
    'indicatorOffset',
    2,
  );
  __decorateClass$i([n$2({ reflect: true })], WaSlider.prototype, 'form', 2);
  __decorateClass$i([n$2({ type: Number })], WaSlider.prototype, 'min', 2);
  __decorateClass$i([n$2({ type: Number })], WaSlider.prototype, 'max', 2);
  __decorateClass$i([n$2({ type: Number })], WaSlider.prototype, 'step', 2);
  __decorateClass$i([n$2({ type: Boolean, reflect: true })], WaSlider.prototype, 'required', 2);
  __decorateClass$i([n$2({ type: Boolean })], WaSlider.prototype, 'autofocus', 2);
  __decorateClass$i(
    [n$2({ attribute: 'tooltip-distance', type: Number })],
    WaSlider.prototype,
    'tooltipDistance',
    2,
  );
  __decorateClass$i(
    [n$2({ attribute: 'tooltip-placement', reflect: true })],
    WaSlider.prototype,
    'tooltipPlacement',
    2,
  );
  __decorateClass$i(
    [n$2({ attribute: 'with-markers', type: Boolean })],
    WaSlider.prototype,
    'withMarkers',
    2,
  );
  __decorateClass$i(
    [n$2({ attribute: 'with-tooltip', type: Boolean })],
    WaSlider.prototype,
    'withTooltip',
    2,
  );
  __decorateClass$i([n$2({ attribute: false })], WaSlider.prototype, 'valueFormatter', 2);
  WaSlider = __decorateClass$i([t$1('wa-slider')], WaSlider);

  // src/events/reposition.ts
  var WaRepositionEvent = class extends Event {
    constructor() {
      super('wa-reposition', { bubbles: true, cancelable: false, composed: true });
    }
  };

  /**
   * Custom positioning reference element.
   * @see https://floating-ui.com/docs/virtual-elements
   */

  const min = Math.min;
  const max = Math.max;
  const round = Math.round;
  const floor = Math.floor;
  const createCoords = v => ({
    x: v,
    y: v,
  });
  const oppositeSideMap = {
    left: 'right',
    right: 'left',
    bottom: 'top',
    top: 'bottom',
  };
  const oppositeAlignmentMap = {
    start: 'end',
    end: 'start',
  };
  function clamp(start, value, end) {
    return max(start, min(value, end));
  }
  function evaluate(value, param) {
    return typeof value === 'function' ? value(param) : value;
  }
  function getSide(placement) {
    return placement.split('-')[0];
  }
  function getAlignment(placement) {
    return placement.split('-')[1];
  }
  function getOppositeAxis(axis) {
    return axis === 'x' ? 'y' : 'x';
  }
  function getAxisLength(axis) {
    return axis === 'y' ? 'height' : 'width';
  }
  const yAxisSides = /*#__PURE__*/ new Set(['top', 'bottom']);
  function getSideAxis(placement) {
    return yAxisSides.has(getSide(placement)) ? 'y' : 'x';
  }
  function getAlignmentAxis(placement) {
    return getOppositeAxis(getSideAxis(placement));
  }
  function getAlignmentSides(placement, rects, rtl) {
    if (rtl === void 0) {
      rtl = false;
    }
    const alignment = getAlignment(placement);
    const alignmentAxis = getAlignmentAxis(placement);
    const length = getAxisLength(alignmentAxis);
    let mainAlignmentSide =
      alignmentAxis === 'x'
        ? alignment === (rtl ? 'end' : 'start')
          ? 'right'
          : 'left'
        : alignment === 'start'
          ? 'bottom'
          : 'top';
    if (rects.reference[length] > rects.floating[length]) {
      mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
    }
    return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
  }
  function getExpandedPlacements(placement) {
    const oppositePlacement = getOppositePlacement(placement);
    return [
      getOppositeAlignmentPlacement(placement),
      oppositePlacement,
      getOppositeAlignmentPlacement(oppositePlacement),
    ];
  }
  function getOppositeAlignmentPlacement(placement) {
    return placement.replace(/start|end/g, alignment => oppositeAlignmentMap[alignment]);
  }
  const lrPlacement = ['left', 'right'];
  const rlPlacement = ['right', 'left'];
  const tbPlacement = ['top', 'bottom'];
  const btPlacement = ['bottom', 'top'];
  function getSideList(side, isStart, rtl) {
    switch (side) {
      case 'top':
      case 'bottom':
        if (rtl) return isStart ? rlPlacement : lrPlacement;
        return isStart ? lrPlacement : rlPlacement;
      case 'left':
      case 'right':
        return isStart ? tbPlacement : btPlacement;
      default:
        return [];
    }
  }
  function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
    const alignment = getAlignment(placement);
    let list = getSideList(getSide(placement), direction === 'start', rtl);
    if (alignment) {
      list = list.map(side => side + '-' + alignment);
      if (flipAlignment) {
        list = list.concat(list.map(getOppositeAlignmentPlacement));
      }
    }
    return list;
  }
  function getOppositePlacement(placement) {
    return placement.replace(/left|right|bottom|top/g, side => oppositeSideMap[side]);
  }
  function expandPaddingObject(padding) {
    return {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      ...padding,
    };
  }
  function getPaddingObject(padding) {
    return typeof padding !== 'number'
      ? expandPaddingObject(padding)
      : {
          top: padding,
          right: padding,
          bottom: padding,
          left: padding,
        };
  }
  function rectToClientRect(rect) {
    const { x, y, width, height } = rect;
    return {
      width,
      height,
      top: y,
      left: x,
      right: x + width,
      bottom: y + height,
      x,
      y,
    };
  }

  function computeCoordsFromPlacement(_ref, placement, rtl) {
    let { reference, floating } = _ref;
    const sideAxis = getSideAxis(placement);
    const alignmentAxis = getAlignmentAxis(placement);
    const alignLength = getAxisLength(alignmentAxis);
    const side = getSide(placement);
    const isVertical = sideAxis === 'y';
    const commonX = reference.x + reference.width / 2 - floating.width / 2;
    const commonY = reference.y + reference.height / 2 - floating.height / 2;
    const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
    let coords;
    switch (side) {
      case 'top':
        coords = {
          x: commonX,
          y: reference.y - floating.height,
        };
        break;
      case 'bottom':
        coords = {
          x: commonX,
          y: reference.y + reference.height,
        };
        break;
      case 'right':
        coords = {
          x: reference.x + reference.width,
          y: commonY,
        };
        break;
      case 'left':
        coords = {
          x: reference.x - floating.width,
          y: commonY,
        };
        break;
      default:
        coords = {
          x: reference.x,
          y: reference.y,
        };
    }
    switch (getAlignment(placement)) {
      case 'start':
        coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
        break;
      case 'end':
        coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
        break;
    }
    return coords;
  }

  /**
   * Computes the `x` and `y` coordinates that will place the floating element
   * next to a given reference element.
   *
   * This export does not have any `platform` interface logic. You will need to
   * write one for the platform you are using Floating UI with.
   */
  const computePosition$1 = async (reference, floating, config) => {
    const { placement = 'bottom', strategy = 'absolute', middleware = [], platform } = config;
    const validMiddleware = middleware.filter(Boolean);
    const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(floating));
    let rects = await platform.getElementRects({
      reference,
      floating,
      strategy,
    });
    let { x, y } = computeCoordsFromPlacement(rects, placement, rtl);
    let statefulPlacement = placement;
    let middlewareData = {};
    let resetCount = 0;
    for (let i = 0; i < validMiddleware.length; i++) {
      const { name, fn } = validMiddleware[i];
      const {
        x: nextX,
        y: nextY,
        data,
        reset,
      } = await fn({
        x,
        y,
        initialPlacement: placement,
        placement: statefulPlacement,
        strategy,
        middlewareData,
        rects,
        platform,
        elements: {
          reference,
          floating,
        },
      });
      x = nextX != null ? nextX : x;
      y = nextY != null ? nextY : y;
      middlewareData = {
        ...middlewareData,
        [name]: {
          ...middlewareData[name],
          ...data,
        },
      };
      if (reset && resetCount <= 50) {
        resetCount++;
        if (typeof reset === 'object') {
          if (reset.placement) {
            statefulPlacement = reset.placement;
          }
          if (reset.rects) {
            rects =
              reset.rects === true
                ? await platform.getElementRects({
                    reference,
                    floating,
                    strategy,
                  })
                : reset.rects;
          }
          ({ x, y } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
        }
        i = -1;
      }
    }
    return {
      x,
      y,
      placement: statefulPlacement,
      strategy,
      middlewareData,
    };
  };

  /**
   * Resolves with an object of overflow side offsets that determine how much the
   * element is overflowing a given clipping boundary on each side.
   * - positive = overflowing the boundary by that number of pixels
   * - negative = how many pixels left before it will overflow
   * - 0 = lies flush with the boundary
   * @see https://floating-ui.com/docs/detectOverflow
   */
  async function detectOverflow(state, options) {
    var _await$platform$isEle;
    if (options === void 0) {
      options = {};
    }
    const { x, y, platform, rects, elements, strategy } = state;
    const {
      boundary = 'clippingAncestors',
      rootBoundary = 'viewport',
      elementContext = 'floating',
      altBoundary = false,
      padding = 0,
    } = evaluate(options, state);
    const paddingObject = getPaddingObject(padding);
    const altContext = elementContext === 'floating' ? 'reference' : 'floating';
    const element = elements[altBoundary ? altContext : elementContext];
    const clippingClientRect = rectToClientRect(
      await platform.getClippingRect({
        element: (
          (_await$platform$isEle = await (platform.isElement == null
            ? void 0
            : platform.isElement(element))) != null
            ? _await$platform$isEle
            : true
        )
          ? element
          : element.contextElement ||
            (await (platform.getDocumentElement == null
              ? void 0
              : platform.getDocumentElement(elements.floating))),
        boundary,
        rootBoundary,
        strategy,
      }),
    );
    const rect =
      elementContext === 'floating'
        ? {
            x,
            y,
            width: rects.floating.width,
            height: rects.floating.height,
          }
        : rects.reference;
    const offsetParent = await (platform.getOffsetParent == null
      ? void 0
      : platform.getOffsetParent(elements.floating));
    const offsetScale = (await (platform.isElement == null
      ? void 0
      : platform.isElement(offsetParent)))
      ? (await (platform.getScale == null ? void 0 : platform.getScale(offsetParent))) || {
          x: 1,
          y: 1,
        }
      : {
          x: 1,
          y: 1,
        };
    const elementClientRect = rectToClientRect(
      platform.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await platform.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements,
            rect,
            offsetParent,
            strategy,
          })
        : rect,
    );
    return {
      top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
      bottom:
        (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) /
        offsetScale.y,
      left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
      right:
        (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x,
    };
  }

  /**
   * Provides data to position an inner element of the floating element so that it
   * appears centered to the reference element.
   * @see https://floating-ui.com/docs/arrow
   */
  const arrow$1 = options => ({
    name: 'arrow',
    options,
    async fn(state) {
      const { x, y, placement, rects, platform, elements, middlewareData } = state;
      // Since `element` is required, we don't Partial<> the type.
      const { element, padding = 0 } = evaluate(options, state) || {};
      if (element == null) {
        return {};
      }
      const paddingObject = getPaddingObject(padding);
      const coords = {
        x,
        y,
      };
      const axis = getAlignmentAxis(placement);
      const length = getAxisLength(axis);
      const arrowDimensions = await platform.getDimensions(element);
      const isYAxis = axis === 'y';
      const minProp = isYAxis ? 'top' : 'left';
      const maxProp = isYAxis ? 'bottom' : 'right';
      const clientProp = isYAxis ? 'clientHeight' : 'clientWidth';
      const endDiff =
        rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
      const startDiff = coords[axis] - rects.reference[axis];
      const arrowOffsetParent = await (platform.getOffsetParent == null
        ? void 0
        : platform.getOffsetParent(element));
      let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;

      // DOM platform can return `window` as the `offsetParent`.
      if (
        !clientSize ||
        !(await (platform.isElement == null ? void 0 : platform.isElement(arrowOffsetParent)))
      ) {
        clientSize = elements.floating[clientProp] || rects.floating[length];
      }
      const centerToReference = endDiff / 2 - startDiff / 2;

      // If the padding is large enough that it causes the arrow to no longer be
      // centered, modify the padding so that it is centered.
      const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
      const minPadding = min(paddingObject[minProp], largestPossiblePadding);
      const maxPadding = min(paddingObject[maxProp], largestPossiblePadding);

      // Make sure the arrow doesn't overflow the floating element if the center
      // point is outside the floating element's bounds.
      const min$1 = minPadding;
      const max = clientSize - arrowDimensions[length] - maxPadding;
      const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
      const offset = clamp(min$1, center, max);

      // If the reference is small enough that the arrow's padding causes it to
      // to point to nothing for an aligned placement, adjust the offset of the
      // floating element itself. To ensure `shift()` continues to take action,
      // a single reset is performed when this is true.
      const shouldAddOffset =
        !middlewareData.arrow &&
        getAlignment(placement) != null &&
        center !== offset &&
        rects.reference[length] / 2 -
          (center < min$1 ? minPadding : maxPadding) -
          arrowDimensions[length] / 2 <
          0;
      const alignmentOffset = shouldAddOffset
        ? center < min$1
          ? center - min$1
          : center - max
        : 0;
      return {
        [axis]: coords[axis] + alignmentOffset,
        data: {
          [axis]: offset,
          centerOffset: center - offset - alignmentOffset,
          ...(shouldAddOffset && {
            alignmentOffset,
          }),
        },
        reset: shouldAddOffset,
      };
    },
  });

  /**
   * Optimizes the visibility of the floating element by flipping the `placement`
   * in order to keep it in view when the preferred placement(s) will overflow the
   * clipping boundary. Alternative to `autoPlacement`.
   * @see https://floating-ui.com/docs/flip
   */
  const flip$1 = function (options) {
    if (options === void 0) {
      options = {};
    }
    return {
      name: 'flip',
      options,
      async fn(state) {
        var _middlewareData$arrow, _middlewareData$flip;
        const { placement, middlewareData, rects, initialPlacement, platform, elements } = state;
        const {
          mainAxis: checkMainAxis = true,
          crossAxis: checkCrossAxis = true,
          fallbackPlacements: specifiedFallbackPlacements,
          fallbackStrategy = 'bestFit',
          fallbackAxisSideDirection = 'none',
          flipAlignment = true,
          ...detectOverflowOptions
        } = evaluate(options, state);

        // If a reset by the arrow was caused due to an alignment offset being
        // added, we should skip any logic now since `flip()` has already done its
        // work.
        // https://github.com/floating-ui/floating-ui/issues/2549#issuecomment-1719601643
        if (
          (_middlewareData$arrow = middlewareData.arrow) != null &&
          _middlewareData$arrow.alignmentOffset
        ) {
          return {};
        }
        const side = getSide(placement);
        const initialSideAxis = getSideAxis(initialPlacement);
        const isBasePlacement = getSide(initialPlacement) === initialPlacement;
        const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
        const fallbackPlacements =
          specifiedFallbackPlacements ||
          (isBasePlacement || !flipAlignment
            ? [getOppositePlacement(initialPlacement)]
            : getExpandedPlacements(initialPlacement));
        const hasFallbackAxisSideDirection = fallbackAxisSideDirection !== 'none';
        if (!specifiedFallbackPlacements && hasFallbackAxisSideDirection) {
          fallbackPlacements.push(
            ...getOppositeAxisPlacements(
              initialPlacement,
              flipAlignment,
              fallbackAxisSideDirection,
              rtl,
            ),
          );
        }
        const placements = [initialPlacement, ...fallbackPlacements];
        const overflow = await detectOverflow(state, detectOverflowOptions);
        const overflows = [];
        let overflowsData =
          ((_middlewareData$flip = middlewareData.flip) == null
            ? void 0
            : _middlewareData$flip.overflows) || [];
        if (checkMainAxis) {
          overflows.push(overflow[side]);
        }
        if (checkCrossAxis) {
          const sides = getAlignmentSides(placement, rects, rtl);
          overflows.push(overflow[sides[0]], overflow[sides[1]]);
        }
        overflowsData = [
          ...overflowsData,
          {
            placement,
            overflows,
          },
        ];

        // One or more sides is overflowing.
        if (!overflows.every(side => side <= 0)) {
          var _middlewareData$flip2, _overflowsData$filter;
          const nextIndex =
            (((_middlewareData$flip2 = middlewareData.flip) == null
              ? void 0
              : _middlewareData$flip2.index) || 0) + 1;
          const nextPlacement = placements[nextIndex];
          if (nextPlacement) {
            const ignoreCrossAxisOverflow =
              checkCrossAxis === 'alignment'
                ? initialSideAxis !== getSideAxis(nextPlacement)
                : false;
            if (
              !ignoreCrossAxisOverflow ||
              // We leave the current main axis only if every placement on that axis
              // overflows the main axis.
              overflowsData.every(d =>
                getSideAxis(d.placement) === initialSideAxis ? d.overflows[0] > 0 : true,
              )
            ) {
              // Try next placement and re-run the lifecycle.
              return {
                data: {
                  index: nextIndex,
                  overflows: overflowsData,
                },
                reset: {
                  placement: nextPlacement,
                },
              };
            }
          }

          // First, find the candidates that fit on the mainAxis side of overflow,
          // then find the placement that fits the best on the main crossAxis side.
          let resetPlacement =
            (_overflowsData$filter = overflowsData
              .filter(d => d.overflows[0] <= 0)
              .sort((a, b) => a.overflows[1] - b.overflows[1])[0]) == null
              ? void 0
              : _overflowsData$filter.placement;

          // Otherwise fallback.
          if (!resetPlacement) {
            switch (fallbackStrategy) {
              case 'bestFit': {
                var _overflowsData$filter2;
                const placement =
                  (_overflowsData$filter2 = overflowsData
                    .filter(d => {
                      if (hasFallbackAxisSideDirection) {
                        const currentSideAxis = getSideAxis(d.placement);
                        return (
                          currentSideAxis === initialSideAxis ||
                          // Create a bias to the `y` side axis due to horizontal
                          // reading directions favoring greater width.
                          currentSideAxis === 'y'
                        );
                      }
                      return true;
                    })
                    .map(d => [
                      d.placement,
                      d.overflows
                        .filter(overflow => overflow > 0)
                        .reduce((acc, overflow) => acc + overflow, 0),
                    ])
                    .sort((a, b) => a[1] - b[1])[0]) == null
                    ? void 0
                    : _overflowsData$filter2[0];
                if (placement) {
                  resetPlacement = placement;
                }
                break;
              }
              case 'initialPlacement':
                resetPlacement = initialPlacement;
                break;
            }
          }
          if (placement !== resetPlacement) {
            return {
              reset: {
                placement: resetPlacement,
              },
            };
          }
        }
        return {};
      },
    };
  };

  const originSides = /*#__PURE__*/ new Set(['left', 'top']);

  // For type backwards-compatibility, the `OffsetOptions` type was also
  // Derivable.

  async function convertValueToCoords(state, options) {
    const { placement, platform, elements } = state;
    const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
    const side = getSide(placement);
    const alignment = getAlignment(placement);
    const isVertical = getSideAxis(placement) === 'y';
    const mainAxisMulti = originSides.has(side) ? -1 : 1;
    const crossAxisMulti = rtl && isVertical ? -1 : 1;
    const rawValue = evaluate(options, state);

    // eslint-disable-next-line prefer-const
    let { mainAxis, crossAxis, alignmentAxis } =
      typeof rawValue === 'number'
        ? {
            mainAxis: rawValue,
            crossAxis: 0,
            alignmentAxis: null,
          }
        : {
            mainAxis: rawValue.mainAxis || 0,
            crossAxis: rawValue.crossAxis || 0,
            alignmentAxis: rawValue.alignmentAxis,
          };
    if (alignment && typeof alignmentAxis === 'number') {
      crossAxis = alignment === 'end' ? alignmentAxis * -1 : alignmentAxis;
    }
    return isVertical
      ? {
          x: crossAxis * crossAxisMulti,
          y: mainAxis * mainAxisMulti,
        }
      : {
          x: mainAxis * mainAxisMulti,
          y: crossAxis * crossAxisMulti,
        };
  }

  /**
   * Modifies the placement by translating the floating element along the
   * specified axes.
   * A number (shorthand for `mainAxis` or distance), or an axes configuration
   * object may be passed.
   * @see https://floating-ui.com/docs/offset
   */
  const offset$1 = function (options) {
    if (options === void 0) {
      options = 0;
    }
    return {
      name: 'offset',
      options,
      async fn(state) {
        var _middlewareData$offse, _middlewareData$arrow;
        const { x, y, placement, middlewareData } = state;
        const diffCoords = await convertValueToCoords(state, options);

        // If the placement is the same and the arrow caused an alignment offset
        // then we don't need to change the positioning coordinates.
        if (
          placement ===
            ((_middlewareData$offse = middlewareData.offset) == null
              ? void 0
              : _middlewareData$offse.placement) &&
          (_middlewareData$arrow = middlewareData.arrow) != null &&
          _middlewareData$arrow.alignmentOffset
        ) {
          return {};
        }
        return {
          x: x + diffCoords.x,
          y: y + diffCoords.y,
          data: {
            ...diffCoords,
            placement,
          },
        };
      },
    };
  };

  /**
   * Optimizes the visibility of the floating element by shifting it in order to
   * keep it in view when it will overflow the clipping boundary.
   * @see https://floating-ui.com/docs/shift
   */
  const shift$1 = function (options) {
    if (options === void 0) {
      options = {};
    }
    return {
      name: 'shift',
      options,
      async fn(state) {
        const { x, y, placement } = state;
        const {
          mainAxis: checkMainAxis = true,
          crossAxis: checkCrossAxis = false,
          limiter = {
            fn: _ref => {
              let { x, y } = _ref;
              return {
                x,
                y,
              };
            },
          },
          ...detectOverflowOptions
        } = evaluate(options, state);
        const coords = {
          x,
          y,
        };
        const overflow = await detectOverflow(state, detectOverflowOptions);
        const crossAxis = getSideAxis(getSide(placement));
        const mainAxis = getOppositeAxis(crossAxis);
        let mainAxisCoord = coords[mainAxis];
        let crossAxisCoord = coords[crossAxis];
        if (checkMainAxis) {
          const minSide = mainAxis === 'y' ? 'top' : 'left';
          const maxSide = mainAxis === 'y' ? 'bottom' : 'right';
          const min = mainAxisCoord + overflow[minSide];
          const max = mainAxisCoord - overflow[maxSide];
          mainAxisCoord = clamp(min, mainAxisCoord, max);
        }
        if (checkCrossAxis) {
          const minSide = crossAxis === 'y' ? 'top' : 'left';
          const maxSide = crossAxis === 'y' ? 'bottom' : 'right';
          const min = crossAxisCoord + overflow[minSide];
          const max = crossAxisCoord - overflow[maxSide];
          crossAxisCoord = clamp(min, crossAxisCoord, max);
        }
        const limitedCoords = limiter.fn({
          ...state,
          [mainAxis]: mainAxisCoord,
          [crossAxis]: crossAxisCoord,
        });
        return {
          ...limitedCoords,
          data: {
            x: limitedCoords.x - x,
            y: limitedCoords.y - y,
            enabled: {
              [mainAxis]: checkMainAxis,
              [crossAxis]: checkCrossAxis,
            },
          },
        };
      },
    };
  };

  /**
   * Provides data that allows you to change the size of the floating element —
   * for instance, prevent it from overflowing the clipping boundary or match the
   * width of the reference element.
   * @see https://floating-ui.com/docs/size
   */
  const size$1 = function (options) {
    if (options === void 0) {
      options = {};
    }
    return {
      name: 'size',
      options,
      async fn(state) {
        var _state$middlewareData, _state$middlewareData2;
        const { placement, rects, platform, elements } = state;
        const { apply = () => {}, ...detectOverflowOptions } = evaluate(options, state);
        const overflow = await detectOverflow(state, detectOverflowOptions);
        const side = getSide(placement);
        const alignment = getAlignment(placement);
        const isYAxis = getSideAxis(placement) === 'y';
        const { width, height } = rects.floating;
        let heightSide;
        let widthSide;
        if (side === 'top' || side === 'bottom') {
          heightSide = side;
          widthSide =
            alignment ===
            ((await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating)))
              ? 'start'
              : 'end')
              ? 'left'
              : 'right';
        } else {
          widthSide = side;
          heightSide = alignment === 'end' ? 'top' : 'bottom';
        }
        const maximumClippingHeight = height - overflow.top - overflow.bottom;
        const maximumClippingWidth = width - overflow.left - overflow.right;
        const overflowAvailableHeight = min(height - overflow[heightSide], maximumClippingHeight);
        const overflowAvailableWidth = min(width - overflow[widthSide], maximumClippingWidth);
        const noShift = !state.middlewareData.shift;
        let availableHeight = overflowAvailableHeight;
        let availableWidth = overflowAvailableWidth;
        if (
          (_state$middlewareData = state.middlewareData.shift) != null &&
          _state$middlewareData.enabled.x
        ) {
          availableWidth = maximumClippingWidth;
        }
        if (
          (_state$middlewareData2 = state.middlewareData.shift) != null &&
          _state$middlewareData2.enabled.y
        ) {
          availableHeight = maximumClippingHeight;
        }
        if (noShift && !alignment) {
          const xMin = max(overflow.left, 0);
          const xMax = max(overflow.right, 0);
          const yMin = max(overflow.top, 0);
          const yMax = max(overflow.bottom, 0);
          if (isYAxis) {
            availableWidth =
              width -
              2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : max(overflow.left, overflow.right));
          } else {
            availableHeight =
              height -
              2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : max(overflow.top, overflow.bottom));
          }
        }
        await apply({
          ...state,
          availableWidth,
          availableHeight,
        });
        const nextDimensions = await platform.getDimensions(elements.floating);
        if (width !== nextDimensions.width || height !== nextDimensions.height) {
          return {
            reset: {
              rects: true,
            },
          };
        }
        return {};
      },
    };
  };

  function hasWindow() {
    return typeof window !== 'undefined';
  }
  function getNodeName(node) {
    if (isNode(node)) {
      return (node.nodeName || '').toLowerCase();
    }
    // Mocked nodes in testing environments may not be instances of Node. By
    // returning `#document` an infinite loop won't occur.
    // https://github.com/floating-ui/floating-ui/issues/2317
    return '#document';
  }
  function getWindow(node) {
    var _node$ownerDocument;
    return (
      (node == null || (_node$ownerDocument = node.ownerDocument) == null
        ? void 0
        : _node$ownerDocument.defaultView) || window
    );
  }
  function getDocumentElement(node) {
    var _ref;
    return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null
      ? void 0
      : _ref.documentElement;
  }
  function isNode(value) {
    if (!hasWindow()) {
      return false;
    }
    return value instanceof Node || value instanceof getWindow(value).Node;
  }
  function isElement(value) {
    if (!hasWindow()) {
      return false;
    }
    return value instanceof Element || value instanceof getWindow(value).Element;
  }
  function isHTMLElement(value) {
    if (!hasWindow()) {
      return false;
    }
    return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
  }
  function isShadowRoot(value) {
    if (!hasWindow() || typeof ShadowRoot === 'undefined') {
      return false;
    }
    return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
  }
  const invalidOverflowDisplayValues = /*#__PURE__*/ new Set(['inline', 'contents']);
  function isOverflowElement(element) {
    const { overflow, overflowX, overflowY, display } = getComputedStyle$1(element);
    return (
      /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) &&
      !invalidOverflowDisplayValues.has(display)
    );
  }
  const tableElements = /*#__PURE__*/ new Set(['table', 'td', 'th']);
  function isTableElement(element) {
    return tableElements.has(getNodeName(element));
  }
  const topLayerSelectors = [':popover-open', ':modal'];
  function isTopLayer(element) {
    return topLayerSelectors.some(selector => {
      try {
        return element.matches(selector);
      } catch (_e) {
        return false;
      }
    });
  }
  const transformProperties = ['transform', 'translate', 'scale', 'rotate', 'perspective'];
  const willChangeValues = ['transform', 'translate', 'scale', 'rotate', 'perspective', 'filter'];
  const containValues = ['paint', 'layout', 'strict', 'content'];
  function isContainingBlock(elementOrCss) {
    const webkit = isWebKit();
    const css = isElement(elementOrCss) ? getComputedStyle$1(elementOrCss) : elementOrCss;

    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
    // https://drafts.csswg.org/css-transforms-2/#individual-transforms
    return (
      transformProperties.some(value => (css[value] ? css[value] !== 'none' : false)) ||
      (css.containerType ? css.containerType !== 'normal' : false) ||
      (!webkit && (css.backdropFilter ? css.backdropFilter !== 'none' : false)) ||
      (!webkit && (css.filter ? css.filter !== 'none' : false)) ||
      willChangeValues.some(value => (css.willChange || '').includes(value)) ||
      containValues.some(value => (css.contain || '').includes(value))
    );
  }
  function getContainingBlock(element) {
    let currentNode = getParentNode(element);
    while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
      if (isContainingBlock(currentNode)) {
        return currentNode;
      } else if (isTopLayer(currentNode)) {
        return null;
      }
      currentNode = getParentNode(currentNode);
    }
    return null;
  }
  function isWebKit() {
    if (typeof CSS === 'undefined' || !CSS.supports) return false;
    return CSS.supports('-webkit-backdrop-filter', 'none');
  }
  const lastTraversableNodeNames = /*#__PURE__*/ new Set(['html', 'body', '#document']);
  function isLastTraversableNode(node) {
    return lastTraversableNodeNames.has(getNodeName(node));
  }
  function getComputedStyle$1(element) {
    return getWindow(element).getComputedStyle(element);
  }
  function getNodeScroll(element) {
    if (isElement(element)) {
      return {
        scrollLeft: element.scrollLeft,
        scrollTop: element.scrollTop,
      };
    }
    return {
      scrollLeft: element.scrollX,
      scrollTop: element.scrollY,
    };
  }
  function getParentNode(node) {
    if (getNodeName(node) === 'html') {
      return node;
    }
    const result =
      // Step into the shadow DOM of the parent of a slotted node.
      node.assignedSlot ||
      // DOM Element detected.
      node.parentNode ||
      // ShadowRoot detected.
      (isShadowRoot(node) && node.host) ||
      // Fallback.
      getDocumentElement(node);
    return isShadowRoot(result) ? result.host : result;
  }
  function getNearestOverflowAncestor(node) {
    const parentNode = getParentNode(node);
    if (isLastTraversableNode(parentNode)) {
      return node.ownerDocument ? node.ownerDocument.body : node.body;
    }
    if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
      return parentNode;
    }
    return getNearestOverflowAncestor(parentNode);
  }
  function getOverflowAncestors(node, list, traverseIframes) {
    var _node$ownerDocument2;
    if (list === void 0) {
      list = [];
    }
    if (traverseIframes === void 0) {
      traverseIframes = true;
    }
    const scrollableAncestor = getNearestOverflowAncestor(node);
    const isBody =
      scrollableAncestor ===
      ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
    const win = getWindow(scrollableAncestor);
    if (isBody) {
      const frameElement = getFrameElement(win);
      return list.concat(
        win,
        win.visualViewport || [],
        isOverflowElement(scrollableAncestor) ? scrollableAncestor : [],
        frameElement && traverseIframes ? getOverflowAncestors(frameElement) : [],
      );
    }
    return list.concat(
      scrollableAncestor,
      getOverflowAncestors(scrollableAncestor, [], traverseIframes),
    );
  }
  function getFrameElement(win) {
    return win.parent && Object.getPrototypeOf(win.parent) ? win.frameElement : null;
  }

  function getCssDimensions(element) {
    const css = getComputedStyle$1(element);
    // In testing environments, the `width` and `height` properties are empty
    // strings for SVG elements, returning NaN. Fallback to `0` in this case.
    let width = parseFloat(css.width) || 0;
    let height = parseFloat(css.height) || 0;
    const hasOffset = isHTMLElement(element);
    const offsetWidth = hasOffset ? element.offsetWidth : width;
    const offsetHeight = hasOffset ? element.offsetHeight : height;
    const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
    if (shouldFallback) {
      width = offsetWidth;
      height = offsetHeight;
    }
    return {
      width,
      height,
      $: shouldFallback,
    };
  }

  function unwrapElement(element) {
    return !isElement(element) ? element.contextElement : element;
  }

  function getScale(element) {
    const domElement = unwrapElement(element);
    if (!isHTMLElement(domElement)) {
      return createCoords(1);
    }
    const rect = domElement.getBoundingClientRect();
    const { width, height, $ } = getCssDimensions(domElement);
    let x = ($ ? round(rect.width) : rect.width) / width;
    let y = ($ ? round(rect.height) : rect.height) / height;

    // 0, NaN, or Infinity should always fallback to 1.

    if (!x || !Number.isFinite(x)) {
      x = 1;
    }
    if (!y || !Number.isFinite(y)) {
      y = 1;
    }
    return {
      x,
      y,
    };
  }

  const noOffsets = /*#__PURE__*/ createCoords(0);
  function getVisualOffsets(element) {
    const win = getWindow(element);
    if (!isWebKit() || !win.visualViewport) {
      return noOffsets;
    }
    return {
      x: win.visualViewport.offsetLeft,
      y: win.visualViewport.offsetTop,
    };
  }
  function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
    if (isFixed === void 0) {
      isFixed = false;
    }
    if (!floatingOffsetParent || (isFixed && floatingOffsetParent !== getWindow(element))) {
      return false;
    }
    return isFixed;
  }

  function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
    if (includeScale === void 0) {
      includeScale = false;
    }
    if (isFixedStrategy === void 0) {
      isFixedStrategy = false;
    }
    const clientRect = element.getBoundingClientRect();
    const domElement = unwrapElement(element);
    let scale = createCoords(1);
    if (includeScale) {
      if (offsetParent) {
        if (isElement(offsetParent)) {
          scale = getScale(offsetParent);
        }
      } else {
        scale = getScale(element);
      }
    }
    const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent)
      ? getVisualOffsets(domElement)
      : createCoords(0);
    let x = (clientRect.left + visualOffsets.x) / scale.x;
    let y = (clientRect.top + visualOffsets.y) / scale.y;
    let width = clientRect.width / scale.x;
    let height = clientRect.height / scale.y;
    if (domElement) {
      const win = getWindow(domElement);
      const offsetWin =
        offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
      let currentWin = win;
      let currentIFrame = getFrameElement(currentWin);
      while (currentIFrame && offsetParent && offsetWin !== currentWin) {
        const iframeScale = getScale(currentIFrame);
        const iframeRect = currentIFrame.getBoundingClientRect();
        const css = getComputedStyle$1(currentIFrame);
        const left =
          iframeRect.left +
          (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
        const top =
          iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
        x *= iframeScale.x;
        y *= iframeScale.y;
        width *= iframeScale.x;
        height *= iframeScale.y;
        x += left;
        y += top;
        currentWin = getWindow(currentIFrame);
        currentIFrame = getFrameElement(currentWin);
      }
    }
    return rectToClientRect({
      width,
      height,
      x,
      y,
    });
  }

  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  function getWindowScrollBarX(element, rect) {
    const leftScroll = getNodeScroll(element).scrollLeft;
    if (!rect) {
      return getBoundingClientRect(getDocumentElement(element)).left + leftScroll;
    }
    return rect.left + leftScroll;
  }

  function getHTMLOffset(documentElement, scroll) {
    const htmlRect = documentElement.getBoundingClientRect();
    const x = htmlRect.left + scroll.scrollLeft - getWindowScrollBarX(documentElement, htmlRect);
    const y = htmlRect.top + scroll.scrollTop;
    return {
      x,
      y,
    };
  }

  function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
    let { elements, rect, offsetParent, strategy } = _ref;
    const isFixed = strategy === 'fixed';
    const documentElement = getDocumentElement(offsetParent);
    const topLayer = elements ? isTopLayer(elements.floating) : false;
    if (offsetParent === documentElement || (topLayer && isFixed)) {
      return rect;
    }
    let scroll = {
      scrollLeft: 0,
      scrollTop: 0,
    };
    let scale = createCoords(1);
    const offsets = createCoords(0);
    const isOffsetParentAnElement = isHTMLElement(offsetParent);
    if (isOffsetParentAnElement || (!isOffsetParentAnElement && !isFixed)) {
      if (getNodeName(offsetParent) !== 'body' || isOverflowElement(documentElement)) {
        scroll = getNodeScroll(offsetParent);
      }
      if (isHTMLElement(offsetParent)) {
        const offsetRect = getBoundingClientRect(offsetParent);
        scale = getScale(offsetParent);
        offsets.x = offsetRect.x + offsetParent.clientLeft;
        offsets.y = offsetRect.y + offsetParent.clientTop;
      }
    }
    const htmlOffset =
      documentElement && !isOffsetParentAnElement && !isFixed
        ? getHTMLOffset(documentElement, scroll)
        : createCoords(0);
    return {
      width: rect.width * scale.x,
      height: rect.height * scale.y,
      x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x + htmlOffset.x,
      y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y + htmlOffset.y,
    };
  }

  function getClientRects(element) {
    return Array.from(element.getClientRects());
  }

  // Gets the entire size of the scrollable document area, even extending outside
  // of the `<html>` and `<body>` rect bounds if horizontally scrollable.
  function getDocumentRect(element) {
    const html = getDocumentElement(element);
    const scroll = getNodeScroll(element);
    const body = element.ownerDocument.body;
    const width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
    const height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
    let x = -scroll.scrollLeft + getWindowScrollBarX(element);
    const y = -scroll.scrollTop;
    if (getComputedStyle$1(body).direction === 'rtl') {
      x += max(html.clientWidth, body.clientWidth) - width;
    }
    return {
      width,
      height,
      x,
      y,
    };
  }

  // Safety check: ensure the scrollbar space is reasonable in case this
  // calculation is affected by unusual styles.
  // Most scrollbars leave 15-18px of space.
  const SCROLLBAR_MAX = 25;
  function getViewportRect(element, strategy) {
    const win = getWindow(element);
    const html = getDocumentElement(element);
    const visualViewport = win.visualViewport;
    let width = html.clientWidth;
    let height = html.clientHeight;
    let x = 0;
    let y = 0;
    if (visualViewport) {
      width = visualViewport.width;
      height = visualViewport.height;
      const visualViewportBased = isWebKit();
      if (!visualViewportBased || (visualViewportBased && strategy === 'fixed')) {
        x = visualViewport.offsetLeft;
        y = visualViewport.offsetTop;
      }
    }
    const windowScrollbarX = getWindowScrollBarX(html);
    // <html> `overflow: hidden` + `scrollbar-gutter: stable` reduces the
    // visual width of the <html> but this is not considered in the size
    // of `html.clientWidth`.
    if (windowScrollbarX <= 0) {
      const doc = html.ownerDocument;
      const body = doc.body;
      const bodyStyles = getComputedStyle(body);
      const bodyMarginInline =
        doc.compatMode === 'CSS1Compat'
          ? parseFloat(bodyStyles.marginLeft) + parseFloat(bodyStyles.marginRight) || 0
          : 0;
      const clippingStableScrollbarWidth = Math.abs(
        html.clientWidth - body.clientWidth - bodyMarginInline,
      );
      if (clippingStableScrollbarWidth <= SCROLLBAR_MAX) {
        width -= clippingStableScrollbarWidth;
      }
    } else if (windowScrollbarX <= SCROLLBAR_MAX) {
      // If the <body> scrollbar is on the left, the width needs to be extended
      // by the scrollbar amount so there isn't extra space on the right.
      width += windowScrollbarX;
    }
    return {
      width,
      height,
      x,
      y,
    };
  }

  const absoluteOrFixed = /*#__PURE__*/ new Set(['absolute', 'fixed']);
  // Returns the inner client rect, subtracting scrollbars if present.
  function getInnerBoundingClientRect(element, strategy) {
    const clientRect = getBoundingClientRect(element, true, strategy === 'fixed');
    const top = clientRect.top + element.clientTop;
    const left = clientRect.left + element.clientLeft;
    const scale = isHTMLElement(element) ? getScale(element) : createCoords(1);
    const width = element.clientWidth * scale.x;
    const height = element.clientHeight * scale.y;
    const x = left * scale.x;
    const y = top * scale.y;
    return {
      width,
      height,
      x,
      y,
    };
  }
  function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
    let rect;
    if (clippingAncestor === 'viewport') {
      rect = getViewportRect(element, strategy);
    } else if (clippingAncestor === 'document') {
      rect = getDocumentRect(getDocumentElement(element));
    } else if (isElement(clippingAncestor)) {
      rect = getInnerBoundingClientRect(clippingAncestor, strategy);
    } else {
      const visualOffsets = getVisualOffsets(element);
      rect = {
        x: clippingAncestor.x - visualOffsets.x,
        y: clippingAncestor.y - visualOffsets.y,
        width: clippingAncestor.width,
        height: clippingAncestor.height,
      };
    }
    return rectToClientRect(rect);
  }
  function hasFixedPositionAncestor(element, stopNode) {
    const parentNode = getParentNode(element);
    if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
      return false;
    }
    return (
      getComputedStyle$1(parentNode).position === 'fixed' ||
      hasFixedPositionAncestor(parentNode, stopNode)
    );
  }

  // A "clipping ancestor" is an `overflow` element with the characteristic of
  // clipping (or hiding) child elements. This returns all clipping ancestors
  // of the given element up the tree.
  function getClippingElementAncestors(element, cache) {
    const cachedResult = cache.get(element);
    if (cachedResult) {
      return cachedResult;
    }
    let result = getOverflowAncestors(element, [], false).filter(
      el => isElement(el) && getNodeName(el) !== 'body',
    );
    let currentContainingBlockComputedStyle = null;
    const elementIsFixed = getComputedStyle$1(element).position === 'fixed';
    let currentNode = elementIsFixed ? getParentNode(element) : element;

    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
    while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
      const computedStyle = getComputedStyle$1(currentNode);
      const currentNodeIsContaining = isContainingBlock(currentNode);
      if (!currentNodeIsContaining && computedStyle.position === 'fixed') {
        currentContainingBlockComputedStyle = null;
      }
      const shouldDropCurrentNode = elementIsFixed
        ? !currentNodeIsContaining && !currentContainingBlockComputedStyle
        : (!currentNodeIsContaining &&
            computedStyle.position === 'static' &&
            !!currentContainingBlockComputedStyle &&
            absoluteOrFixed.has(currentContainingBlockComputedStyle.position)) ||
          (isOverflowElement(currentNode) &&
            !currentNodeIsContaining &&
            hasFixedPositionAncestor(element, currentNode));
      if (shouldDropCurrentNode) {
        // Drop non-containing blocks.
        result = result.filter(ancestor => ancestor !== currentNode);
      } else {
        // Record last containing block for next iteration.
        currentContainingBlockComputedStyle = computedStyle;
      }
      currentNode = getParentNode(currentNode);
    }
    cache.set(element, result);
    return result;
  }

  // Gets the maximum area that the element is visible in due to any number of
  // clipping ancestors.
  function getClippingRect(_ref) {
    let { element, boundary, rootBoundary, strategy } = _ref;
    const elementClippingAncestors =
      boundary === 'clippingAncestors'
        ? isTopLayer(element)
          ? []
          : getClippingElementAncestors(element, this._c)
        : [].concat(boundary);
    const clippingAncestors = [...elementClippingAncestors, rootBoundary];
    const firstClippingAncestor = clippingAncestors[0];
    const clippingRect = clippingAncestors.reduce(
      (accRect, clippingAncestor) => {
        const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
        accRect.top = max(rect.top, accRect.top);
        accRect.right = min(rect.right, accRect.right);
        accRect.bottom = min(rect.bottom, accRect.bottom);
        accRect.left = max(rect.left, accRect.left);
        return accRect;
      },
      getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy),
    );
    return {
      width: clippingRect.right - clippingRect.left,
      height: clippingRect.bottom - clippingRect.top,
      x: clippingRect.left,
      y: clippingRect.top,
    };
  }

  function getDimensions(element) {
    const { width, height } = getCssDimensions(element);
    return {
      width,
      height,
    };
  }

  function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
    const isOffsetParentAnElement = isHTMLElement(offsetParent);
    const documentElement = getDocumentElement(offsetParent);
    const isFixed = strategy === 'fixed';
    const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
    let scroll = {
      scrollLeft: 0,
      scrollTop: 0,
    };
    const offsets = createCoords(0);

    // If the <body> scrollbar appears on the left (e.g. RTL systems). Use
    // Firefox with layout.scrollbar.side = 3 in about:config to test this.
    function setLeftRTLScrollbarOffset() {
      offsets.x = getWindowScrollBarX(documentElement);
    }
    if (isOffsetParentAnElement || (!isOffsetParentAnElement && !isFixed)) {
      if (getNodeName(offsetParent) !== 'body' || isOverflowElement(documentElement)) {
        scroll = getNodeScroll(offsetParent);
      }
      if (isOffsetParentAnElement) {
        const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
        offsets.x = offsetRect.x + offsetParent.clientLeft;
        offsets.y = offsetRect.y + offsetParent.clientTop;
      } else if (documentElement) {
        setLeftRTLScrollbarOffset();
      }
    }
    if (isFixed && !isOffsetParentAnElement && documentElement) {
      setLeftRTLScrollbarOffset();
    }
    const htmlOffset =
      documentElement && !isOffsetParentAnElement && !isFixed
        ? getHTMLOffset(documentElement, scroll)
        : createCoords(0);
    const x = rect.left + scroll.scrollLeft - offsets.x - htmlOffset.x;
    const y = rect.top + scroll.scrollTop - offsets.y - htmlOffset.y;
    return {
      x,
      y,
      width: rect.width,
      height: rect.height,
    };
  }

  function isStaticPositioned(element) {
    return getComputedStyle$1(element).position === 'static';
  }

  function getTrueOffsetParent(element, polyfill) {
    if (!isHTMLElement(element) || getComputedStyle$1(element).position === 'fixed') {
      return null;
    }
    if (polyfill) {
      return polyfill(element);
    }
    let rawOffsetParent = element.offsetParent;

    // Firefox returns the <html> element as the offsetParent if it's non-static,
    // while Chrome and Safari return the <body> element. The <body> element must
    // be used to perform the correct calculations even if the <html> element is
    // non-static.
    if (getDocumentElement(element) === rawOffsetParent) {
      rawOffsetParent = rawOffsetParent.ownerDocument.body;
    }
    return rawOffsetParent;
  }

  // Gets the closest ancestor positioned element. Handles some edge cases,
  // such as table ancestors and cross browser bugs.
  function getOffsetParent(element, polyfill) {
    const win = getWindow(element);
    if (isTopLayer(element)) {
      return win;
    }
    if (!isHTMLElement(element)) {
      let svgOffsetParent = getParentNode(element);
      while (svgOffsetParent && !isLastTraversableNode(svgOffsetParent)) {
        if (isElement(svgOffsetParent) && !isStaticPositioned(svgOffsetParent)) {
          return svgOffsetParent;
        }
        svgOffsetParent = getParentNode(svgOffsetParent);
      }
      return win;
    }
    let offsetParent = getTrueOffsetParent(element, polyfill);
    while (offsetParent && isTableElement(offsetParent) && isStaticPositioned(offsetParent)) {
      offsetParent = getTrueOffsetParent(offsetParent, polyfill);
    }
    if (
      offsetParent &&
      isLastTraversableNode(offsetParent) &&
      isStaticPositioned(offsetParent) &&
      !isContainingBlock(offsetParent)
    ) {
      return win;
    }
    return offsetParent || getContainingBlock(element) || win;
  }

  const getElementRects = async function (data) {
    const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
    const getDimensionsFn = this.getDimensions;
    const floatingDimensions = await getDimensionsFn(data.floating);
    return {
      reference: getRectRelativeToOffsetParent(
        data.reference,
        await getOffsetParentFn(data.floating),
        data.strategy,
      ),
      floating: {
        x: 0,
        y: 0,
        width: floatingDimensions.width,
        height: floatingDimensions.height,
      },
    };
  };

  function isRTL(element) {
    return getComputedStyle$1(element).direction === 'rtl';
  }

  const platform = {
    convertOffsetParentRelativeRectToViewportRelativeRect,
    getDocumentElement,
    getClippingRect,
    getOffsetParent,
    getElementRects,
    getClientRects,
    getDimensions,
    getScale,
    isElement,
    isRTL,
  };

  function rectsAreEqual(a, b) {
    return a.x === b.x && a.y === b.y && a.width === b.width && a.height === b.height;
  }

  // https://samthor.au/2021/observing-dom/
  function observeMove(element, onMove) {
    let io = null;
    let timeoutId;
    const root = getDocumentElement(element);
    function cleanup() {
      var _io;
      clearTimeout(timeoutId);
      (_io = io) == null || _io.disconnect();
      io = null;
    }
    function refresh(skip, threshold) {
      if (skip === void 0) {
        skip = false;
      }
      if (threshold === void 0) {
        threshold = 1;
      }
      cleanup();
      const elementRectForRootMargin = element.getBoundingClientRect();
      const { left, top, width, height } = elementRectForRootMargin;
      if (!skip) {
        onMove();
      }
      if (!width || !height) {
        return;
      }
      const insetTop = floor(top);
      const insetRight = floor(root.clientWidth - (left + width));
      const insetBottom = floor(root.clientHeight - (top + height));
      const insetLeft = floor(left);
      const rootMargin =
        -insetTop + 'px ' + -insetRight + 'px ' + -insetBottom + 'px ' + -insetLeft + 'px';
      const options = {
        rootMargin,
        threshold: max(0, min(1, threshold)) || 1,
      };
      let isFirstUpdate = true;
      function handleObserve(entries) {
        const ratio = entries[0].intersectionRatio;
        if (ratio !== threshold) {
          if (!isFirstUpdate) {
            return refresh();
          }
          if (!ratio) {
            // If the reference is clipped, the ratio is 0. Throttle the refresh
            // to prevent an infinite loop of updates.
            timeoutId = setTimeout(() => {
              refresh(false, 1e-7);
            }, 1000);
          } else {
            refresh(false, ratio);
          }
        }
        if (
          ratio === 1 &&
          !rectsAreEqual(elementRectForRootMargin, element.getBoundingClientRect())
        ) {
          // It's possible that even though the ratio is reported as 1, the
          // element is not actually fully within the IntersectionObserver's root
          // area anymore. This can happen under performance constraints. This may
          // be a bug in the browser's IntersectionObserver implementation. To
          // work around this, we compare the element's bounding rect now with
          // what it was at the time we created the IntersectionObserver. If they
          // are not equal then the element moved, so we refresh.
          refresh();
        }
        isFirstUpdate = false;
      }

      // Older browsers don't support a `document` as the root and will throw an
      // error.
      try {
        io = new IntersectionObserver(handleObserve, {
          ...options,
          // Handle <iframe>s
          root: root.ownerDocument,
        });
      } catch (_e) {
        io = new IntersectionObserver(handleObserve, options);
      }
      io.observe(element);
    }
    refresh(true);
    return cleanup;
  }

  /**
   * Automatically updates the position of the floating element when necessary.
   * Should only be called when the floating element is mounted on the DOM or
   * visible on the screen.
   * @returns cleanup function that should be invoked when the floating element is
   * removed from the DOM or hidden from the screen.
   * @see https://floating-ui.com/docs/autoUpdate
   */
  function autoUpdate(reference, floating, update, options) {
    if (options === void 0) {
      options = {};
    }
    const {
      ancestorScroll = true,
      ancestorResize = true,
      elementResize = typeof ResizeObserver === 'function',
      layoutShift = typeof IntersectionObserver === 'function',
      animationFrame = false,
    } = options;
    const referenceEl = unwrapElement(reference);
    const ancestors =
      ancestorScroll || ancestorResize
        ? [
            ...(referenceEl ? getOverflowAncestors(referenceEl) : []),
            ...getOverflowAncestors(floating),
          ]
        : [];
    ancestors.forEach(ancestor => {
      ancestorScroll &&
        ancestor.addEventListener('scroll', update, {
          passive: true,
        });
      ancestorResize && ancestor.addEventListener('resize', update);
    });
    const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
    let reobserveFrame = -1;
    let resizeObserver = null;
    if (elementResize) {
      resizeObserver = new ResizeObserver(_ref => {
        let [firstEntry] = _ref;
        if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
          // Prevent update loops when using the `size` middleware.
          // https://github.com/floating-ui/floating-ui/issues/1740
          resizeObserver.unobserve(floating);
          cancelAnimationFrame(reobserveFrame);
          reobserveFrame = requestAnimationFrame(() => {
            var _resizeObserver;
            (_resizeObserver = resizeObserver) == null || _resizeObserver.observe(floating);
          });
        }
        update();
      });
      if (referenceEl && !animationFrame) {
        resizeObserver.observe(referenceEl);
      }
      resizeObserver.observe(floating);
    }
    let frameId;
    let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
    if (animationFrame) {
      frameLoop();
    }
    function frameLoop() {
      const nextRefRect = getBoundingClientRect(reference);
      if (prevRefRect && !rectsAreEqual(prevRefRect, nextRefRect)) {
        update();
      }
      prevRefRect = nextRefRect;
      frameId = requestAnimationFrame(frameLoop);
    }
    update();
    return () => {
      var _resizeObserver2;
      ancestors.forEach(ancestor => {
        ancestorScroll && ancestor.removeEventListener('scroll', update);
        ancestorResize && ancestor.removeEventListener('resize', update);
      });
      cleanupIo == null || cleanupIo();
      (_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect();
      resizeObserver = null;
      if (animationFrame) {
        cancelAnimationFrame(frameId);
      }
    };
  }

  /**
   * Modifies the placement by translating the floating element along the
   * specified axes.
   * A number (shorthand for `mainAxis` or distance), or an axes configuration
   * object may be passed.
   * @see https://floating-ui.com/docs/offset
   */
  const offset = offset$1;

  /**
   * Optimizes the visibility of the floating element by shifting it in order to
   * keep it in view when it will overflow the clipping boundary.
   * @see https://floating-ui.com/docs/shift
   */
  const shift = shift$1;

  /**
   * Optimizes the visibility of the floating element by flipping the `placement`
   * in order to keep it in view when the preferred placement(s) will overflow the
   * clipping boundary. Alternative to `autoPlacement`.
   * @see https://floating-ui.com/docs/flip
   */
  const flip = flip$1;

  /**
   * Provides data that allows you to change the size of the floating element —
   * for instance, prevent it from overflowing the clipping boundary or match the
   * width of the reference element.
   * @see https://floating-ui.com/docs/size
   */
  const size = size$1;

  /**
   * Provides data to position an inner element of the floating element so that it
   * appears centered to the reference element.
   * @see https://floating-ui.com/docs/arrow
   */
  const arrow = arrow$1;

  /**
   * Computes the `x` and `y` coordinates that will place the floating element
   * next to a given reference element.
   */
  const computePosition = (reference, floating, options) => {
    // This caches the expensive `getClippingElementAncestors` function so that
    // multiple lifecycle resets re-use the same result. It only lives for a
    // single call. If other functions become expensive, we can add them as well.
    const cache = new Map();
    const mergedOptions = {
      platform,
      ...options,
    };
    const platformWithCache = {
      ...mergedOptions.platform,
      _c: cache,
    };
    return computePosition$1(reference, floating, {
      ...mergedOptions,
      platform: platformWithCache,
    });
  };

  function e$1(t) {
    return i$1(t);
  }
  function r(t) {
    return t.assignedSlot
      ? t.assignedSlot
      : t.parentNode instanceof ShadowRoot
        ? t.parentNode.host
        : t.parentNode;
  }
  function i$1(e) {
    for (let t = e; t; t = r(t))
      if (t instanceof Element && 'none' === getComputedStyle(t).display) return null;
    for (let n = r(e); n; n = r(n)) {
      if (!(n instanceof Element)) continue;
      const e = getComputedStyle(n);
      if ('contents' !== e.display) {
        if ('static' !== e.position || isContainingBlock(e)) return n;
        if ('BODY' === n.tagName) return n;
      }
    }
    return null;
  }

  // src/components/popup/popup.css
  var popup_default =
    ":host {\n  --arrow-color: black;\n  --arrow-size: var(--wa-tooltip-arrow-size);\n  --show-duration: 100ms;\n  --hide-duration: 100ms;\n\n  /*\n     * These properties are computed to account for the arrow's dimensions after being rotated 45\xBA. The constant\n     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.\n     */\n  --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);\n  --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));\n\n  display: contents;\n}\n\n.popup {\n  position: absolute;\n  isolation: isolate;\n  max-width: var(--auto-size-available-width, none);\n  max-height: var(--auto-size-available-height, none);\n\n  /* Clear UA styles for [popover] */\n  :where(&) {\n    inset: unset;\n    padding: unset;\n    margin: unset;\n    width: unset;\n    height: unset;\n    color: unset;\n    background: unset;\n    border: unset;\n    overflow: unset;\n  }\n}\n\n.popup-fixed {\n  position: fixed;\n}\n\n.popup:not(.popup-active) {\n  display: none;\n}\n\n.arrow {\n  position: absolute;\n  width: calc(var(--arrow-size-diagonal) * 2);\n  height: calc(var(--arrow-size-diagonal) * 2);\n  rotate: 45deg;\n  background: var(--arrow-color);\n  z-index: 3;\n}\n\n:host([data-current-placement~='left']) .arrow {\n  rotate: -45deg;\n}\n\n:host([data-current-placement~='right']) .arrow {\n  rotate: 135deg;\n}\n\n:host([data-current-placement~='bottom']) .arrow {\n  rotate: 225deg;\n}\n\n/* Hover bridge */\n.popup-hover-bridge:not(.popup-hover-bridge-visible) {\n  display: none;\n}\n\n.popup-hover-bridge {\n  position: fixed;\n  z-index: 899;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  clip-path: polygon(\n    var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),\n    var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),\n    var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),\n    var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)\n  );\n}\n\n/* Built-in animations */\n.show {\n  animation: show var(--show-duration) ease;\n}\n\n.hide {\n  animation: show var(--hide-duration) ease reverse;\n}\n\n@keyframes show {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n.show-with-scale {\n  animation: show-with-scale var(--show-duration) ease;\n}\n\n.hide-with-scale {\n  animation: show-with-scale var(--hide-duration) ease reverse;\n}\n\n@keyframes show-with-scale {\n  from {\n    opacity: 0;\n    scale: 0.8;\n  }\n  to {\n    opacity: 1;\n    scale: 1;\n  }\n}\n";

  // src/components/popup/popup.ts
  function isVirtualElement(e) {
    return (
      e !== null &&
      typeof e === 'object' &&
      'getBoundingClientRect' in e &&
      ('contextElement' in e ? e instanceof Element : true)
    );
  }
  var SUPPORTS_POPOVER = globalThis?.HTMLElement?.prototype.hasOwnProperty('popover');
  var WaPopup = class extends WebAwesomeElement {
    constructor() {
      super(...arguments);
      this.localize = new LocalizeController(this);
      this.active = false;
      this.placement = 'top';
      this.boundary = 'viewport';
      this.distance = 0;
      this.skidding = 0;
      this.arrow = false;
      this.arrowPlacement = 'anchor';
      this.arrowPadding = 10;
      this.flip = false;
      this.flipFallbackPlacements = '';
      this.flipFallbackStrategy = 'best-fit';
      this.flipPadding = 0;
      this.shift = false;
      this.shiftPadding = 0;
      this.autoSizePadding = 0;
      this.hoverBridge = false;
      this.updateHoverBridge = () => {
        if (this.hoverBridge && this.anchorEl) {
          const anchorRect = this.anchorEl.getBoundingClientRect();
          const popupRect = this.popup.getBoundingClientRect();
          const isVertical = this.placement.includes('top') || this.placement.includes('bottom');
          let topLeftX = 0;
          let topLeftY = 0;
          let topRightX = 0;
          let topRightY = 0;
          let bottomLeftX = 0;
          let bottomLeftY = 0;
          let bottomRightX = 0;
          let bottomRightY = 0;
          if (isVertical) {
            if (anchorRect.top < popupRect.top) {
              topLeftX = anchorRect.left;
              topLeftY = anchorRect.bottom;
              topRightX = anchorRect.right;
              topRightY = anchorRect.bottom;
              bottomLeftX = popupRect.left;
              bottomLeftY = popupRect.top;
              bottomRightX = popupRect.right;
              bottomRightY = popupRect.top;
            } else {
              topLeftX = popupRect.left;
              topLeftY = popupRect.bottom;
              topRightX = popupRect.right;
              topRightY = popupRect.bottom;
              bottomLeftX = anchorRect.left;
              bottomLeftY = anchorRect.top;
              bottomRightX = anchorRect.right;
              bottomRightY = anchorRect.top;
            }
          } else {
            if (anchorRect.left < popupRect.left) {
              topLeftX = anchorRect.right;
              topLeftY = anchorRect.top;
              topRightX = popupRect.left;
              topRightY = popupRect.top;
              bottomLeftX = anchorRect.right;
              bottomLeftY = anchorRect.bottom;
              bottomRightX = popupRect.left;
              bottomRightY = popupRect.bottom;
            } else {
              topLeftX = popupRect.right;
              topLeftY = popupRect.top;
              topRightX = anchorRect.left;
              topRightY = anchorRect.top;
              bottomLeftX = popupRect.right;
              bottomLeftY = popupRect.bottom;
              bottomRightX = anchorRect.left;
              bottomRightY = anchorRect.bottom;
            }
          }
          this.style.setProperty('--hover-bridge-top-left-x', `${topLeftX}px`);
          this.style.setProperty('--hover-bridge-top-left-y', `${topLeftY}px`);
          this.style.setProperty('--hover-bridge-top-right-x', `${topRightX}px`);
          this.style.setProperty('--hover-bridge-top-right-y', `${topRightY}px`);
          this.style.setProperty('--hover-bridge-bottom-left-x', `${bottomLeftX}px`);
          this.style.setProperty('--hover-bridge-bottom-left-y', `${bottomLeftY}px`);
          this.style.setProperty('--hover-bridge-bottom-right-x', `${bottomRightX}px`);
          this.style.setProperty('--hover-bridge-bottom-right-y', `${bottomRightY}px`);
        }
      };
    }
    async connectedCallback() {
      super.connectedCallback();
      await this.updateComplete;
      this.start();
    }
    disconnectedCallback() {
      super.disconnectedCallback();
      this.stop();
    }
    async updated(changedProperties) {
      super.updated(changedProperties);
      if (changedProperties.has('active')) {
        if (this.active) {
          this.start();
        } else {
          this.stop();
        }
      }
      if (changedProperties.has('anchor')) {
        this.handleAnchorChange();
      }
      if (this.active) {
        await this.updateComplete;
        this.reposition();
      }
    }
    async handleAnchorChange() {
      await this.stop();
      if (this.anchor && typeof this.anchor === 'string') {
        const root = this.getRootNode();
        this.anchorEl = root.getElementById(this.anchor);
      } else if (this.anchor instanceof Element || isVirtualElement(this.anchor)) {
        this.anchorEl = this.anchor;
      } else {
        this.anchorEl = this.querySelector('[slot="anchor"]');
      }
      if (this.anchorEl instanceof HTMLSlotElement) {
        this.anchorEl = this.anchorEl.assignedElements({ flatten: true })[0];
      }
      if (this.anchorEl) {
        this.start();
      }
    }
    start() {
      if (!this.anchorEl || !this.active) {
        return;
      }
      this.popup.showPopover?.();
      this.cleanup = autoUpdate(this.anchorEl, this.popup, () => {
        this.reposition();
      });
    }
    async stop() {
      return new Promise(resolve => {
        this.popup.hidePopover?.();
        if (this.cleanup) {
          this.cleanup();
          this.cleanup = void 0;
          this.removeAttribute('data-current-placement');
          this.style.removeProperty('--auto-size-available-width');
          this.style.removeProperty('--auto-size-available-height');
          requestAnimationFrame(() => resolve());
        } else {
          resolve();
        }
      });
    }
    /** Forces the popup to recalculate and reposition itself. */
    reposition() {
      if (!this.active || !this.anchorEl) {
        return;
      }
      const middleware = [
        // The offset middleware goes first
        offset({ mainAxis: this.distance, crossAxis: this.skidding }),
      ];
      if (this.sync) {
        middleware.push(
          size({
            apply: ({ rects }) => {
              const syncWidth = this.sync === 'width' || this.sync === 'both';
              const syncHeight = this.sync === 'height' || this.sync === 'both';
              this.popup.style.width = syncWidth ? `${rects.reference.width}px` : '';
              this.popup.style.height = syncHeight ? `${rects.reference.height}px` : '';
            },
          }),
        );
      } else {
        this.popup.style.width = '';
        this.popup.style.height = '';
      }
      let defaultBoundary;
      if (SUPPORTS_POPOVER && !isVirtualElement(this.anchor) && this.boundary === 'scroll') {
        defaultBoundary = getOverflowAncestors(this.anchorEl).filter(el => el instanceof Element);
      }
      if (this.flip) {
        middleware.push(
          flip({
            boundary: this.flipBoundary || defaultBoundary,
            // @ts-expect-error - We're converting a string attribute to an array here
            fallbackPlacements: this.flipFallbackPlacements,
            fallbackStrategy:
              this.flipFallbackStrategy === 'best-fit' ? 'bestFit' : 'initialPlacement',
            padding: this.flipPadding,
          }),
        );
      }
      if (this.shift) {
        middleware.push(
          shift({
            boundary: this.shiftBoundary || defaultBoundary,
            padding: this.shiftPadding,
          }),
        );
      }
      if (this.autoSize) {
        middleware.push(
          size({
            boundary: this.autoSizeBoundary || defaultBoundary,
            padding: this.autoSizePadding,
            apply: ({ availableWidth, availableHeight }) => {
              if (this.autoSize === 'vertical' || this.autoSize === 'both') {
                this.style.setProperty('--auto-size-available-height', `${availableHeight}px`);
              } else {
                this.style.removeProperty('--auto-size-available-height');
              }
              if (this.autoSize === 'horizontal' || this.autoSize === 'both') {
                this.style.setProperty('--auto-size-available-width', `${availableWidth}px`);
              } else {
                this.style.removeProperty('--auto-size-available-width');
              }
            },
          }),
        );
      } else {
        this.style.removeProperty('--auto-size-available-width');
        this.style.removeProperty('--auto-size-available-height');
      }
      if (this.arrow) {
        middleware.push(
          arrow({
            element: this.arrowEl,
            padding: this.arrowPadding,
          }),
        );
      }
      const getOffsetParent = SUPPORTS_POPOVER
        ? element => platform.getOffsetParent(element, e$1)
        : platform.getOffsetParent;
      computePosition(this.anchorEl, this.popup, {
        placement: this.placement,
        middleware,
        strategy: SUPPORTS_POPOVER ? 'absolute' : 'fixed',
        platform: {
          ...platform,
          getOffsetParent,
        },
      }).then(({ x, y, middlewareData, placement }) => {
        const isRtl = this.localize.dir() === 'rtl';
        const staticSide = { top: 'bottom', right: 'left', bottom: 'top', left: 'right' }[
          placement.split('-')[0]
        ];
        this.setAttribute('data-current-placement', placement);
        Object.assign(this.popup.style, {
          left: `${x}px`,
          top: `${y}px`,
        });
        if (this.arrow) {
          const arrowX = middlewareData.arrow.x;
          const arrowY = middlewareData.arrow.y;
          let top = '';
          let right = '';
          let bottom = '';
          let left = '';
          if (this.arrowPlacement === 'start') {
            const value =
              typeof arrowX === 'number'
                ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))`
                : '';
            top =
              typeof arrowY === 'number'
                ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))`
                : '';
            right = isRtl ? value : '';
            left = isRtl ? '' : value;
          } else if (this.arrowPlacement === 'end') {
            const value =
              typeof arrowX === 'number'
                ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))`
                : '';
            right = isRtl ? '' : value;
            left = isRtl ? value : '';
            bottom =
              typeof arrowY === 'number'
                ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))`
                : '';
          } else if (this.arrowPlacement === 'center') {
            left = typeof arrowX === 'number' ? `calc(50% - var(--arrow-size-diagonal))` : '';
            top = typeof arrowY === 'number' ? `calc(50% - var(--arrow-size-diagonal))` : '';
          } else {
            left = typeof arrowX === 'number' ? `${arrowX}px` : '';
            top = typeof arrowY === 'number' ? `${arrowY}px` : '';
          }
          Object.assign(this.arrowEl.style, {
            top,
            right,
            bottom,
            left,
            [staticSide]: 'calc(var(--arrow-size-diagonal) * -1)',
          });
        }
      });
      requestAnimationFrame(() => this.updateHoverBridge());
      this.dispatchEvent(new WaRepositionEvent());
    }
    render() {
      return x$1`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${e$2({
          'popup-hover-bridge': true,
          'popup-hover-bridge-visible': this.hoverBridge && this.active,
        })}
      ></span>

      <div
        popover="manual"
        part="popup"
        class=${e$2({
          popup: true,
          'popup-active': this.active,
          'popup-fixed': !SUPPORTS_POPOVER,
          'popup-has-arrow': this.arrow,
        })}
      >
        <slot></slot>
        ${this.arrow ? x$1`<div part="arrow" class="arrow" role="presentation"></div>` : ''}
      </div>
    `;
    }
  };
  WaPopup.css = popup_default;
  __decorateClass$i([e$4('.popup')], WaPopup.prototype, 'popup', 2);
  __decorateClass$i([e$4('.arrow')], WaPopup.prototype, 'arrowEl', 2);
  __decorateClass$i([n$2()], WaPopup.prototype, 'anchor', 2);
  __decorateClass$i([n$2({ type: Boolean, reflect: true })], WaPopup.prototype, 'active', 2);
  __decorateClass$i([n$2({ reflect: true })], WaPopup.prototype, 'placement', 2);
  __decorateClass$i([n$2()], WaPopup.prototype, 'boundary', 2);
  __decorateClass$i([n$2({ type: Number })], WaPopup.prototype, 'distance', 2);
  __decorateClass$i([n$2({ type: Number })], WaPopup.prototype, 'skidding', 2);
  __decorateClass$i([n$2({ type: Boolean })], WaPopup.prototype, 'arrow', 2);
  __decorateClass$i(
    [n$2({ attribute: 'arrow-placement' })],
    WaPopup.prototype,
    'arrowPlacement',
    2,
  );
  __decorateClass$i(
    [n$2({ attribute: 'arrow-padding', type: Number })],
    WaPopup.prototype,
    'arrowPadding',
    2,
  );
  __decorateClass$i([n$2({ type: Boolean })], WaPopup.prototype, 'flip', 2);
  __decorateClass$i(
    [
      n$2({
        attribute: 'flip-fallback-placements',
        converter: {
          fromAttribute: value => {
            return value
              .split(' ')
              .map(p => p.trim())
              .filter(p => p !== '');
          },
          toAttribute: value => {
            return value.join(' ');
          },
        },
      }),
    ],
    WaPopup.prototype,
    'flipFallbackPlacements',
    2,
  );
  __decorateClass$i(
    [n$2({ attribute: 'flip-fallback-strategy' })],
    WaPopup.prototype,
    'flipFallbackStrategy',
    2,
  );
  __decorateClass$i([n$2({ type: Object })], WaPopup.prototype, 'flipBoundary', 2);
  __decorateClass$i(
    [n$2({ attribute: 'flip-padding', type: Number })],
    WaPopup.prototype,
    'flipPadding',
    2,
  );
  __decorateClass$i([n$2({ type: Boolean })], WaPopup.prototype, 'shift', 2);
  __decorateClass$i([n$2({ type: Object })], WaPopup.prototype, 'shiftBoundary', 2);
  __decorateClass$i(
    [n$2({ attribute: 'shift-padding', type: Number })],
    WaPopup.prototype,
    'shiftPadding',
    2,
  );
  __decorateClass$i([n$2({ attribute: 'auto-size' })], WaPopup.prototype, 'autoSize', 2);
  __decorateClass$i([n$2()], WaPopup.prototype, 'sync', 2);
  __decorateClass$i([n$2({ type: Object })], WaPopup.prototype, 'autoSizeBoundary', 2);
  __decorateClass$i(
    [n$2({ attribute: 'auto-size-padding', type: Number })],
    WaPopup.prototype,
    'autoSizePadding',
    2,
  );
  __decorateClass$i(
    [n$2({ attribute: 'hover-bridge', type: Boolean })],
    WaPopup.prototype,
    'hoverBridge',
    2,
  );
  WaPopup = __decorateClass$i([t$1('wa-popup')], WaPopup);

  // src/internal/event.ts
  function waitForEvent(el, eventName) {
    return new Promise(resolve => {
      function done(event) {
        if (event.target === el) {
          el.removeEventListener(eventName, done);
          resolve();
        }
      }
      el.addEventListener(eventName, done);
    });
  }

  // src/components/tooltip/tooltip.css
  var tooltip_default =
    ":host {\n  --max-width: 30ch;\n\n  /** These styles are added so we don't interfere in the DOM. */\n  display: inline-block;\n  position: absolute;\n\n  /** Defaults for inherited CSS properties */\n  color: var(--wa-tooltip-content-color);\n  font-size: var(--wa-tooltip-font-size);\n  line-height: var(--wa-tooltip-line-height);\n  text-align: start;\n  white-space: normal;\n}\n\n.tooltip {\n  --arrow-size: var(--wa-tooltip-arrow-size);\n  --arrow-color: var(--wa-tooltip-background-color);\n}\n\n.tooltip::part(popup) {\n  z-index: 1000;\n}\n\n.tooltip[placement^='top']::part(popup) {\n  transform-origin: bottom;\n}\n\n.tooltip[placement^='bottom']::part(popup) {\n  transform-origin: top;\n}\n\n.tooltip[placement^='left']::part(popup) {\n  transform-origin: right;\n}\n\n.tooltip[placement^='right']::part(popup) {\n  transform-origin: left;\n}\n\n.body {\n  display: block;\n  width: max-content;\n  max-width: var(--max-width);\n  border-radius: var(--wa-tooltip-border-radius);\n  background-color: var(--wa-tooltip-background-color);\n  border: var(--wa-tooltip-border-width) var(--wa-tooltip-border-style) var(--wa-tooltip-border-color);\n  padding: 0.25em 0.5em;\n  user-select: none;\n  -webkit-user-select: none;\n}\n\n.tooltip::part(arrow) {\n  border-bottom: var(--wa-tooltip-border-width) var(--wa-tooltip-border-style) var(--wa-tooltip-border-color);\n  border-right: var(--wa-tooltip-border-width) var(--wa-tooltip-border-style) var(--wa-tooltip-border-color);\n}\n";

  // src/components/tooltip/tooltip.ts
  var WaTooltip = class extends WebAwesomeElement {
    constructor() {
      super(...arguments);
      this.placement = 'top';
      this.disabled = false;
      this.distance = 8;
      this.open = false;
      this.skidding = 0;
      this.showDelay = 150;
      this.hideDelay = 0;
      this.trigger = 'hover focus';
      this.withoutArrow = false;
      this.for = null;
      this.anchor = null;
      this.eventController = new AbortController();
      this.handleBlur = () => {
        if (this.hasTrigger('focus')) {
          this.hide();
        }
      };
      this.handleClick = () => {
        if (this.hasTrigger('click')) {
          if (this.open) {
            this.hide();
          } else {
            this.show();
          }
        }
      };
      this.handleFocus = () => {
        if (this.hasTrigger('focus')) {
          this.show();
        }
      };
      this.handleDocumentKeyDown = event => {
        if (event.key === 'Escape') {
          event.stopPropagation();
          this.hide();
        }
      };
      this.handleMouseOver = () => {
        if (this.hasTrigger('hover')) {
          clearTimeout(this.hoverTimeout);
          this.hoverTimeout = window.setTimeout(() => this.show(), this.showDelay);
        }
      };
      this.handleMouseOut = () => {
        if (this.hasTrigger('hover')) {
          clearTimeout(this.hoverTimeout);
          this.hoverTimeout = window.setTimeout(() => this.hide(), this.hideDelay);
        }
      };
    }
    connectedCallback() {
      super.connectedCallback();
      if (this.open) {
        this.open = false;
        this.updateComplete.then(() => {
          this.open = true;
        });
      }
      if (!this.id) {
        this.id = uniqueId('wa-tooltip-');
      }
    }
    disconnectedCallback() {
      super.disconnectedCallback();
      document.removeEventListener('keydown', this.handleDocumentKeyDown);
      this.eventController.abort();
      if (this.anchor) {
        const label = this.anchor.getAttribute('aria-labelledby') || '';
        this.anchor.setAttribute('aria-labelledby', label.replace(this.id, ''));
      }
    }
    firstUpdated() {
      this.body.hidden = !this.open;
      if (this.open) {
        this.popup.active = true;
        this.popup.reposition();
      }
    }
    hasTrigger(triggerType) {
      const triggers = this.trigger.split(' ');
      return triggers.includes(triggerType);
    }
    async handleOpenChange() {
      if (this.open) {
        if (this.disabled) {
          return;
        }
        const waShowEvent = new WaShowEvent();
        this.dispatchEvent(waShowEvent);
        if (waShowEvent.defaultPrevented) {
          this.open = false;
          return;
        }
        document.addEventListener('keydown', this.handleDocumentKeyDown, {
          signal: this.eventController.signal,
        });
        this.body.hidden = false;
        this.popup.active = true;
        await animateWithClass(this.popup.popup, 'show-with-scale');
        this.popup.reposition();
        this.dispatchEvent(new WaAfterShowEvent());
      } else {
        const waHideEvent = new WaHideEvent();
        this.dispatchEvent(waHideEvent);
        if (waHideEvent.defaultPrevented) {
          this.open = false;
          return;
        }
        document.removeEventListener('keydown', this.handleDocumentKeyDown);
        await animateWithClass(this.popup.popup, 'hide-with-scale');
        this.popup.active = false;
        this.body.hidden = true;
        this.dispatchEvent(new WaAfterHideEvent());
      }
    }
    handleForChange() {
      const rootNode = this.getRootNode();
      if (!rootNode) {
        return;
      }
      const newAnchor = this.for ? rootNode.querySelector(`#${this.for}`) : null;
      const oldAnchor = this.anchor;
      if (newAnchor === oldAnchor) {
        return;
      }
      const { signal } = this.eventController;
      const labelRegex = new RegExp(`\\b${this.id}\\b`);
      if (newAnchor) {
        const currentLabel = newAnchor.getAttribute('aria-labelledby') || '';
        if (!currentLabel.match(labelRegex)) {
          newAnchor.setAttribute('aria-labelledby', currentLabel + ' ' + this.id);
        }
        newAnchor.addEventListener('blur', this.handleBlur, { capture: true, signal });
        newAnchor.addEventListener('focus', this.handleFocus, { capture: true, signal });
        newAnchor.addEventListener('click', this.handleClick, { signal });
        newAnchor.addEventListener('mouseover', this.handleMouseOver, { signal });
        newAnchor.addEventListener('mouseout', this.handleMouseOut, { signal });
      }
      if (oldAnchor) {
        const label = oldAnchor.getAttribute('aria-labelledby') || '';
        oldAnchor.setAttribute('aria-labelledby', label.replace(labelRegex, ''));
        oldAnchor.removeEventListener('blur', this.handleBlur, { capture: true });
        oldAnchor.removeEventListener('focus', this.handleFocus, { capture: true });
        oldAnchor.removeEventListener('click', this.handleClick);
        oldAnchor.removeEventListener('mouseover', this.handleMouseOver);
        oldAnchor.removeEventListener('mouseout', this.handleMouseOut);
      }
      this.anchor = newAnchor;
    }
    async handleOptionsChange() {
      if (this.hasUpdated) {
        await this.updateComplete;
        this.popup.reposition();
      }
    }
    handleDisabledChange() {
      if (this.disabled && this.open) {
        this.hide();
      }
    }
    /** Shows the tooltip. */
    async show() {
      if (this.open) {
        return void 0;
      }
      this.open = true;
      return waitForEvent(this, 'wa-after-show');
    }
    /** Hides the tooltip */
    async hide() {
      if (!this.open) {
        return void 0;
      }
      this.open = false;
      return waitForEvent(this, 'wa-after-hide');
    }
    render() {
      return x$1`
      <wa-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${e$2({
          tooltip: true,
          'tooltip-open': this.open,
        })}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        flip
        shift
        ?arrow=${!this.withoutArrow}
        hover-bridge
        .anchor=${this.anchor}
      >
        <div part="body" class="body">
          <slot></slot>
        </div>
      </wa-popup>
    `;
    }
  };
  WaTooltip.css = tooltip_default;
  WaTooltip.dependencies = { 'wa-popup': WaPopup };
  __decorateClass$i([e$4('slot:not([name])')], WaTooltip.prototype, 'defaultSlot', 2);
  __decorateClass$i([e$4('.body')], WaTooltip.prototype, 'body', 2);
  __decorateClass$i([e$4('wa-popup')], WaTooltip.prototype, 'popup', 2);
  __decorateClass$i([n$2()], WaTooltip.prototype, 'placement', 2);
  __decorateClass$i([n$2({ type: Boolean, reflect: true })], WaTooltip.prototype, 'disabled', 2);
  __decorateClass$i([n$2({ type: Number })], WaTooltip.prototype, 'distance', 2);
  __decorateClass$i([n$2({ type: Boolean, reflect: true })], WaTooltip.prototype, 'open', 2);
  __decorateClass$i([n$2({ type: Number })], WaTooltip.prototype, 'skidding', 2);
  __decorateClass$i(
    [n$2({ attribute: 'show-delay', type: Number })],
    WaTooltip.prototype,
    'showDelay',
    2,
  );
  __decorateClass$i(
    [n$2({ attribute: 'hide-delay', type: Number })],
    WaTooltip.prototype,
    'hideDelay',
    2,
  );
  __decorateClass$i([n$2()], WaTooltip.prototype, 'trigger', 2);
  __decorateClass$i(
    [n$2({ attribute: 'without-arrow', type: Boolean, reflect: true })],
    WaTooltip.prototype,
    'withoutArrow',
    2,
  );
  __decorateClass$i([n$2()], WaTooltip.prototype, 'for', 2);
  __decorateClass$i([r$2()], WaTooltip.prototype, 'anchor', 2);
  __decorateClass$i(
    [watch('open', { waitUntilFirstUpdate: true })],
    WaTooltip.prototype,
    'handleOpenChange',
    1,
  );
  __decorateClass$i([watch('for')], WaTooltip.prototype, 'handleForChange', 1);
  __decorateClass$i(
    [watch(['distance', 'placement', 'skidding'])],
    WaTooltip.prototype,
    'handleOptionsChange',
    1,
  );
  __decorateClass$i([watch('disabled')], WaTooltip.prototype, 'handleDisabledChange', 1);
  WaTooltip = __decorateClass$i([t$1('wa-tooltip')], WaTooltip);

  // src/events/select.ts
  var WaSelectEvent = class extends Event {
    constructor(detail) {
      super('wa-select', { bubbles: true, cancelable: true, composed: true });
      this.detail = detail;
    }
  };

  // src/internal/active-elements.ts
  function* activeElements(activeElement = document.activeElement) {
    if (activeElement === null || activeElement === void 0) return;
    yield activeElement;
    if (
      'shadowRoot' in activeElement &&
      activeElement.shadowRoot &&
      activeElement.shadowRoot.mode !== 'closed'
    ) {
      yield* activeElements(activeElement.shadowRoot.activeElement);
    }
  }

  // src/components/dropdown/dropdown.css
  var dropdown_default =
    ":host {\n  --show-duration: 50ms;\n  --hide-duration: 50ms;\n  display: contents;\n}\n\n#menu {\n  display: flex;\n  flex-direction: column;\n  width: max-content;\n  margin: 0;\n  padding: 0.25em;\n  border: var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-surface-border);\n  border-radius: var(--wa-border-radius-m);\n  background-color: var(--wa-color-surface-raised);\n  box-shadow: var(--wa-shadow-m);\n  color: var(--wa-color-text-normal);\n  text-align: start;\n  user-select: none;\n  overflow: auto;\n  max-width: var(--auto-size-available-width) !important;\n  max-height: var(--auto-size-available-height) !important;\n\n  &.show {\n    animation: show var(--show-duration) ease;\n  }\n\n  &.hide {\n    animation: show var(--hide-duration) ease reverse;\n  }\n\n  ::slotted(h1),\n  ::slotted(h2),\n  ::slotted(h3),\n  ::slotted(h4),\n  ::slotted(h5),\n  ::slotted(h6) {\n    display: block !important;\n    margin: 0.25em 0 !important;\n    padding: 0.25em 0.75em !important;\n    color: var(--wa-color-text-quiet) !important;\n    font-family: var(--wa-font-family-body) !important;\n    font-weight: var(--wa-font-weight-semibold) !important;\n    font-size: var(--wa-font-size-smaller) !important;\n  }\n\n  ::slotted(wa-divider) {\n    --spacing: 0.25em; /* Component-specific, left as-is */\n  }\n}\n\nwa-popup[data-current-placement^='top'] #menu {\n  transform-origin: bottom;\n}\n\nwa-popup[data-current-placement^='bottom'] #menu {\n  transform-origin: top;\n}\n\nwa-popup[data-current-placement^='left'] #menu {\n  transform-origin: right;\n}\n\nwa-popup[data-current-placement^='right'] #menu {\n  transform-origin: left;\n}\n\nwa-popup[data-current-placement='left-start'] #menu {\n  transform-origin: right top;\n}\n\nwa-popup[data-current-placement='left-end'] #menu {\n  transform-origin: right bottom;\n}\n\nwa-popup[data-current-placement='right-start'] #menu {\n  transform-origin: left top;\n}\n\nwa-popup[data-current-placement='right-end'] #menu {\n  transform-origin: left bottom;\n}\n\n@keyframes show {\n  from {\n    scale: 0.9;\n    opacity: 0;\n  }\n  to {\n    scale: 1;\n    opacity: 1;\n  }\n}\n";

  // src/components/dropdown/dropdown.ts
  var openDropdowns = /* @__PURE__ */ new Set();
  var WaDropdown = class extends WebAwesomeElement {
    constructor() {
      super(...arguments);
      this.submenuCleanups = /* @__PURE__ */ new Map();
      this.localize = new LocalizeController(this);
      this.userTypedQuery = '';
      this.openSubmenuStack = [];
      this.open = false;
      this.size = 'medium';
      this.placement = 'bottom-start';
      this.distance = 0;
      this.skidding = 0;
      /** Handles key down events when the menu is open */
      this.handleDocumentKeyDown = async event => {
        const isRtl = this.localize.dir() === 'rtl';
        if (event.key === 'Escape') {
          const trigger = this.getTrigger();
          event.preventDefault();
          event.stopPropagation();
          this.open = false;
          trigger?.focus();
          return;
        }
        const activeElement = [...activeElements()].find(el => el.localName === 'wa-dropdown-item');
        const isFocusedOnItem = activeElement?.localName === 'wa-dropdown-item';
        const currentSubmenuItem = this.getCurrentSubmenuItem();
        const isInSubmenu = !!currentSubmenuItem;
        let items;
        let activeItem;
        let activeItemIndex;
        if (isInSubmenu) {
          items = this.getSubmenuItems(currentSubmenuItem);
          activeItem = items.find(item => item.active || item === activeElement);
          activeItemIndex = activeItem ? items.indexOf(activeItem) : -1;
        } else {
          items = this.getItems();
          activeItem = items.find(item => item.active || item === activeElement);
          activeItemIndex = activeItem ? items.indexOf(activeItem) : -1;
        }
        let itemToSelect;
        if (event.key === 'ArrowUp') {
          event.preventDefault();
          event.stopPropagation();
          if (activeItemIndex > 0) {
            itemToSelect = items[activeItemIndex - 1];
          } else {
            itemToSelect = items[items.length - 1];
          }
        }
        if (event.key === 'ArrowDown') {
          event.preventDefault();
          event.stopPropagation();
          if (activeItemIndex !== -1 && activeItemIndex < items.length - 1) {
            itemToSelect = items[activeItemIndex + 1];
          } else {
            itemToSelect = items[0];
          }
        }
        if (event.key === (isRtl ? 'ArrowLeft' : 'ArrowRight') && isFocusedOnItem && activeItem) {
          if (activeItem.hasSubmenu) {
            event.preventDefault();
            event.stopPropagation();
            activeItem.submenuOpen = true;
            this.addToSubmenuStack(activeItem);
            setTimeout(() => {
              const submenuItems = this.getSubmenuItems(activeItem);
              if (submenuItems.length > 0) {
                submenuItems.forEach((item, index) => (item.active = index === 0));
                submenuItems[0].focus();
              }
            }, 0);
            return;
          }
        }
        if (event.key === (isRtl ? 'ArrowRight' : 'ArrowLeft') && isInSubmenu) {
          event.preventDefault();
          event.stopPropagation();
          const removedItem = this.removeFromSubmenuStack();
          if (removedItem) {
            removedItem.submenuOpen = false;
            setTimeout(() => {
              removedItem.focus();
              removedItem.active = true;
              const parentItems =
                removedItem.slot === 'submenu'
                  ? this.getSubmenuItems(removedItem.parentElement)
                  : this.getItems();
              parentItems.forEach(item => {
                if (item !== removedItem) {
                  item.active = false;
                }
              });
            }, 0);
          }
          return;
        }
        if (event.key === 'Home' || event.key === 'End') {
          event.preventDefault();
          event.stopPropagation();
          itemToSelect = event.key === 'Home' ? items[0] : items[items.length - 1];
        }
        if (event.key === 'Tab') {
          await this.hideMenu();
        }
        if (
          event.key.length === 1 &&
          !(event.metaKey || event.ctrlKey || event.altKey) &&
          !(event.key === ' ' && this.userTypedQuery === '')
        ) {
          clearTimeout(this.userTypedTimeout);
          this.userTypedTimeout = setTimeout(() => {
            this.userTypedQuery = '';
          }, 1e3);
          this.userTypedQuery += event.key;
          items.some(item => {
            const label = (item.textContent || '').trim().toLowerCase();
            const selectionQuery = this.userTypedQuery.trim().toLowerCase();
            if (label.startsWith(selectionQuery)) {
              itemToSelect = item;
              return true;
            }
            return false;
          });
        }
        if (itemToSelect) {
          event.preventDefault();
          event.stopPropagation();
          items.forEach(item => (item.active = item === itemToSelect));
          itemToSelect.focus();
          return;
        }
        if (
          (event.key === 'Enter' || (event.key === ' ' && this.userTypedQuery === '')) &&
          isFocusedOnItem &&
          activeItem
        ) {
          event.preventDefault();
          event.stopPropagation();
          if (activeItem.hasSubmenu) {
            activeItem.submenuOpen = true;
            this.addToSubmenuStack(activeItem);
            setTimeout(() => {
              const submenuItems = this.getSubmenuItems(activeItem);
              if (submenuItems.length > 0) {
                submenuItems.forEach((item, index) => (item.active = index === 0));
                submenuItems[0].focus();
              }
            }, 0);
          } else {
            this.makeSelection(activeItem);
          }
        }
      };
      /** Handles pointer down events when the dropdown is open. */
      this.handleDocumentPointerDown = event => {
        const path = event.composedPath();
        const isInDropdownHierarchy = path.some(el => {
          if (el instanceof HTMLElement) {
            return el === this || el.closest('wa-dropdown, [part="submenu"]');
          }
          return false;
        });
        if (!isInDropdownHierarchy) {
          this.open = false;
        }
      };
      /** Handle global mouse movement for safe triangle logic */
      this.handleGlobalMouseMove = event => {
        const currentSubmenuItem = this.getCurrentSubmenuItem();
        if (!currentSubmenuItem?.submenuOpen || !currentSubmenuItem.submenuElement) return;
        const submenuRect = currentSubmenuItem.submenuElement.getBoundingClientRect();
        const isRtl = this.localize.dir() === 'rtl';
        const submenuEdgeX = isRtl ? submenuRect.right : submenuRect.left;
        const constrainedX = isRtl
          ? Math.max(event.clientX, submenuEdgeX)
          : Math.min(event.clientX, submenuEdgeX);
        const constrainedY = Math.max(submenuRect.top, Math.min(event.clientY, submenuRect.bottom));
        currentSubmenuItem.submenuElement.style.setProperty(
          '--safe-triangle-cursor-x',
          `${constrainedX}px`,
        );
        currentSubmenuItem.submenuElement.style.setProperty(
          '--safe-triangle-cursor-y',
          `${constrainedY}px`,
        );
        const isOverItem = currentSubmenuItem.matches(':hover');
        const isOverSubmenu =
          currentSubmenuItem.submenuElement?.matches(':hover') ||
          !!event
            .composedPath()
            .find(
              el =>
                el instanceof HTMLElement &&
                el.closest('[part="submenu"]') === currentSubmenuItem.submenuElement,
            );
        if (!isOverItem && !isOverSubmenu) {
          setTimeout(() => {
            if (
              !currentSubmenuItem.matches(':hover') &&
              !currentSubmenuItem.submenuElement?.matches(':hover')
            ) {
              currentSubmenuItem.submenuOpen = false;
            }
          }, 100);
        }
      };
    }
    disconnectedCallback() {
      super.disconnectedCallback();
      clearInterval(this.userTypedTimeout);
      this.closeAllSubmenus();
      this.submenuCleanups.forEach(cleanup => cleanup());
      this.submenuCleanups.clear();
      document.removeEventListener('mousemove', this.handleGlobalMouseMove);
    }
    firstUpdated() {
      this.syncAriaAttributes();
    }
    async updated(changedProperties) {
      if (changedProperties.has('open')) {
        this.customStates.set('open', this.open);
        if (this.open) {
          await this.showMenu();
        } else {
          this.closeAllSubmenus();
          await this.hideMenu();
        }
      }
      if (changedProperties.has('size')) {
        this.syncItemSizes();
      }
    }
    /** Gets all dropdown items slotted in the menu. */
    getItems(includeDisabled = false) {
      const items = this.defaultSlot
        .assignedElements({ flatten: true })
        .filter(el => el.localName === 'wa-dropdown-item');
      return includeDisabled ? items : items.filter(item => !item.disabled);
    }
    /** Gets all dropdown items in a specific submenu. */
    getSubmenuItems(parentItem, includeDisabled = false) {
      const submenuSlot =
        parentItem.shadowRoot?.querySelector('slot[name="submenu"]') ||
        parentItem.querySelector('slot[name="submenu"]');
      if (!submenuSlot) {
        return [];
      }
      const items = submenuSlot
        .assignedElements({ flatten: true })
        .filter(el => el.localName === 'wa-dropdown-item');
      return includeDisabled ? items : items.filter(item => !item.disabled);
    }
    /** Syncs item sizes with the dropdown's size property. */
    syncItemSizes() {
      const items = this.defaultSlot
        .assignedElements({ flatten: true })
        .filter(el => el.localName === 'wa-dropdown-item');
      items.forEach(item => (item.size = this.size));
    }
    /** Handles the submenu navigation stack */
    addToSubmenuStack(item) {
      const index = this.openSubmenuStack.indexOf(item);
      if (index !== -1) {
        this.openSubmenuStack = this.openSubmenuStack.slice(0, index + 1);
      } else {
        this.openSubmenuStack.push(item);
      }
    }
    /** Removes the last item from the submenu stack */
    removeFromSubmenuStack() {
      return this.openSubmenuStack.pop();
    }
    /** Gets the current active submenu item */
    getCurrentSubmenuItem() {
      return this.openSubmenuStack.length > 0
        ? this.openSubmenuStack[this.openSubmenuStack.length - 1]
        : void 0;
    }
    /** Closes all submenus in the dropdown. */
    closeAllSubmenus() {
      const items = this.getItems(true);
      items.forEach(item => {
        item.submenuOpen = false;
      });
      this.openSubmenuStack = [];
    }
    /** Closes sibling submenus at the same level as the specified item. */
    closeSiblingSubmenus(item) {
      const parentDropdownItem = item.closest('wa-dropdown-item:not([slot="submenu"])');
      let siblingItems;
      if (parentDropdownItem) {
        siblingItems = this.getSubmenuItems(parentDropdownItem, true);
      } else {
        siblingItems = this.getItems(true);
      }
      siblingItems.forEach(siblingItem => {
        if (siblingItem !== item && siblingItem.submenuOpen) {
          siblingItem.submenuOpen = false;
        }
      });
      if (!this.openSubmenuStack.includes(item)) {
        this.openSubmenuStack.push(item);
      }
    }
    /** Get the slotted trigger button, a <wa-button> or <button> element */
    getTrigger() {
      return this.querySelector('[slot="trigger"]');
    }
    /** Shows the dropdown menu. This should only be called from within updated(). */
    async showMenu() {
      const anchor = this.getTrigger();
      if (!anchor) return;
      const showEvent = new WaShowEvent();
      this.dispatchEvent(showEvent);
      if (showEvent.defaultPrevented) {
        this.open = false;
        return;
      }
      openDropdowns.forEach(dropdown => (dropdown.open = false));
      this.popup.active = true;
      this.open = true;
      openDropdowns.add(this);
      this.syncAriaAttributes();
      document.addEventListener('keydown', this.handleDocumentKeyDown);
      document.addEventListener('pointerdown', this.handleDocumentPointerDown);
      document.addEventListener('mousemove', this.handleGlobalMouseMove);
      this.menu.classList.remove('hide');
      await animateWithClass(this.menu, 'show');
      const items = this.getItems();
      if (items.length > 0) {
        items.forEach((item, index) => (item.active = index === 0));
        items[0].focus();
      }
      this.dispatchEvent(new WaAfterShowEvent());
    }
    /** Hides the dropdown menu. This should only be called from within updated(). */
    async hideMenu() {
      const hideEvent = new WaHideEvent({ source: this });
      this.dispatchEvent(hideEvent);
      if (hideEvent.defaultPrevented) {
        this.open = true;
        return;
      }
      this.open = false;
      openDropdowns.delete(this);
      this.syncAriaAttributes();
      document.removeEventListener('keydown', this.handleDocumentKeyDown);
      document.removeEventListener('pointerdown', this.handleDocumentPointerDown);
      document.removeEventListener('mousemove', this.handleGlobalMouseMove);
      this.menu.classList.remove('show');
      await animateWithClass(this.menu, 'hide');
      this.popup.active = this.open;
      this.dispatchEvent(new WaAfterHideEvent());
    }
    /** Handles clicks on the menu. */
    handleMenuClick(event) {
      const item = event.target.closest('wa-dropdown-item');
      if (!item || item.disabled) return;
      if (item.hasSubmenu) {
        if (!item.submenuOpen) {
          this.closeSiblingSubmenus(item);
          this.addToSubmenuStack(item);
          item.submenuOpen = true;
        }
        event.stopPropagation();
        return;
      }
      this.makeSelection(item);
    }
    /** Prepares dropdown items when they get added or removed */
    async handleMenuSlotChange() {
      const items = this.getItems(true);
      await Promise.all(items.map(item => item.updateComplete));
      this.syncItemSizes();
      const hasCheckbox = items.some(item => item.type === 'checkbox');
      const hasSubmenu = items.some(item => item.hasSubmenu);
      items.forEach((item, index) => {
        item.active = index === 0;
        item.checkboxAdjacent = hasCheckbox;
        item.submenuAdjacent = hasSubmenu;
      });
    }
    /** Toggles the dropdown menu */
    handleTriggerClick() {
      this.open = !this.open;
    }
    /** Handles submenu opening events */
    handleSubmenuOpening(event) {
      const openingItem = event.detail.item;
      this.closeSiblingSubmenus(openingItem);
      this.addToSubmenuStack(openingItem);
      this.setupSubmenuPosition(openingItem);
      this.processSubmenuItems(openingItem);
    }
    /** Sets up submenu positioning with autoUpdate */
    setupSubmenuPosition(item) {
      if (!item.submenuElement) return;
      this.cleanupSubmenuPosition(item);
      const cleanup = autoUpdate(item, item.submenuElement, () => {
        this.positionSubmenu(item);
        this.updateSafeTriangleCoordinates(item);
      });
      this.submenuCleanups.set(item, cleanup);
      const submenuSlot = item.submenuElement.querySelector('slot[name="submenu"]');
      if (submenuSlot) {
        submenuSlot.removeEventListener('slotchange', WaDropdown.handleSubmenuSlotChange);
        submenuSlot.addEventListener('slotchange', WaDropdown.handleSubmenuSlotChange);
        WaDropdown.handleSubmenuSlotChange({ target: submenuSlot });
      }
    }
    static handleSubmenuSlotChange(event) {
      const slot = event.target;
      if (!slot) return;
      const items = slot.assignedElements().filter(el => el.localName === 'wa-dropdown-item');
      if (items.length === 0) return;
      const hasSubmenuItems = items.some(item => item.hasSubmenu);
      const hasCheckboxItems = items.some(item => item.type === 'checkbox');
      items.forEach(item => {
        item.submenuAdjacent = hasSubmenuItems;
        item.checkboxAdjacent = hasCheckboxItems;
      });
    }
    processSubmenuItems(item) {
      if (!item.submenuElement) return;
      const submenuItems = this.getSubmenuItems(item, true);
      const hasSubmenuItems = submenuItems.some(subItem => subItem.hasSubmenu);
      submenuItems.forEach(subItem => {
        subItem.submenuAdjacent = hasSubmenuItems;
      });
    }
    /** Cleans up submenu positioning */
    cleanupSubmenuPosition(item) {
      const cleanup = this.submenuCleanups.get(item);
      if (cleanup) {
        cleanup();
        this.submenuCleanups.delete(item);
      }
    }
    /** Positions a submenu relative to its parent item */
    positionSubmenu(item) {
      if (!item.submenuElement) return;
      const isRtl = this.localize.dir() === 'rtl';
      const placement = isRtl ? 'left-start' : 'right-start';
      computePosition(item, item.submenuElement, {
        placement,
        middleware: [
          offset({
            mainAxis: 0,
            crossAxis: -5,
          }),
          flip({
            fallbackStrategy: 'bestFit',
          }),
          shift({
            padding: 8,
          }),
        ],
      }).then(({ x, y, placement: placement2 }) => {
        item.submenuElement.setAttribute('data-placement', placement2);
        Object.assign(item.submenuElement.style, {
          left: `${x}px`,
          top: `${y}px`,
        });
      });
    }
    /** Updates the safe triangle coordinates for a submenu */
    updateSafeTriangleCoordinates(item) {
      if (!item.submenuElement || !item.submenuOpen) return;
      const isKeyboardNavigation = document.activeElement?.matches(':focus-visible');
      if (isKeyboardNavigation) {
        item.submenuElement.style.setProperty('--safe-triangle-visible', 'none');
        return;
      }
      item.submenuElement.style.setProperty('--safe-triangle-visible', 'block');
      const submenuRect = item.submenuElement.getBoundingClientRect();
      const isRtl = this.localize.dir() === 'rtl';
      item.submenuElement.style.setProperty(
        '--safe-triangle-submenu-start-x',
        `${isRtl ? submenuRect.right : submenuRect.left}px`,
      );
      item.submenuElement.style.setProperty(
        '--safe-triangle-submenu-start-y',
        `${submenuRect.top}px`,
      );
      item.submenuElement.style.setProperty(
        '--safe-triangle-submenu-end-x',
        `${isRtl ? submenuRect.right : submenuRect.left}px`,
      );
      item.submenuElement.style.setProperty(
        '--safe-triangle-submenu-end-y',
        `${submenuRect.bottom}px`,
      );
    }
    /** Makes a selection, emits the wa-select event, and closes the dropdown. */
    makeSelection(item) {
      const trigger = this.getTrigger();
      if (item.disabled) {
        return;
      }
      if (item.type === 'checkbox') {
        item.checked = !item.checked;
      }
      const selectEvent = new WaSelectEvent({ item });
      this.dispatchEvent(selectEvent);
      if (!selectEvent.defaultPrevented) {
        this.open = false;
        trigger?.focus();
      }
    }
    /** Syncs aria attributes on the slotted trigger element and the menu based on the dropdown's current state */
    async syncAriaAttributes() {
      const trigger = this.getTrigger();
      let nativeButton;
      if (!trigger) {
        return;
      }
      if (trigger.localName === 'wa-button') {
        await customElements.whenDefined('wa-button');
        await trigger.updateComplete;
        nativeButton = trigger.shadowRoot.querySelector('[part="base"]');
      } else {
        nativeButton = trigger;
      }
      if (!nativeButton.hasAttribute('id')) {
        nativeButton.setAttribute('id', uniqueId('wa-dropdown-trigger-'));
      }
      nativeButton.setAttribute('aria-haspopup', 'menu');
      nativeButton.setAttribute('aria-expanded', this.open ? 'true' : 'false');
      this.menu.setAttribute('aria-expanded', 'false');
    }
    render() {
      let active = this.hasUpdated ? this.popup.active : this.open;
      return x$1`
      <wa-popup
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        ?active=${active}
        flip
        flip-fallback-strategy="best-fit"
        shift
        shift-padding="10"
        auto-size="vertical"
        auto-size-padding="10"
      >
        <slot
          name="trigger"
          slot="anchor"
          @click=${this.handleTriggerClick}
          @slotchange=${this.syncAriaAttributes}
        ></slot>
        <div
          id="menu"
          part="menu"
          role="menu"
          tabindex="-1"
          aria-orientation="vertical"
          @click=${this.handleMenuClick}
          @submenu-opening=${this.handleSubmenuOpening}
        >
          <slot @slotchange=${this.handleMenuSlotChange}></slot>
        </div>
      </wa-popup>
    `;
    }
  };
  WaDropdown.css = [size_default, dropdown_default];
  __decorateClass$i([e$4('slot:not([name])')], WaDropdown.prototype, 'defaultSlot', 2);
  __decorateClass$i([e$4('#menu')], WaDropdown.prototype, 'menu', 2);
  __decorateClass$i([e$4('wa-popup')], WaDropdown.prototype, 'popup', 2);
  __decorateClass$i([n$2({ type: Boolean, reflect: true })], WaDropdown.prototype, 'open', 2);
  __decorateClass$i([n$2({ reflect: true })], WaDropdown.prototype, 'size', 2);
  __decorateClass$i([n$2({ reflect: true })], WaDropdown.prototype, 'placement', 2);
  __decorateClass$i([n$2({ type: Number })], WaDropdown.prototype, 'distance', 2);
  __decorateClass$i([n$2({ type: Number })], WaDropdown.prototype, 'skidding', 2);
  WaDropdown = __decorateClass$i([t$1('wa-dropdown')], WaDropdown);

  // src/components/dropdown-item/dropdown-item.css
  var dropdown_item_default =
    ":host {\n  display: flex;\n  position: relative;\n  align-items: center;\n  padding: 0.5em 1em;\n  border-radius: var(--wa-border-radius-s);\n  isolation: isolate;\n  color: var(--wa-color-text-normal);\n  line-height: var(--wa-line-height-condensed);\n  cursor: pointer;\n  transition:\n    100ms background-color ease,\n    100ms color ease;\n}\n\n@media (hover: hover) {\n  :host(:hover:not(:state(disabled))) {\n    background-color: var(--wa-color-neutral-fill-normal);\n  }\n}\n\n:host(:focus-visible) {\n  z-index: 1;\n  outline: var(--wa-focus-ring);\n  background-color: var(--wa-color-neutral-fill-normal);\n}\n\n:host(:state(disabled)) {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n/* Danger variant */\n:host([variant='danger']),\n:host([variant='danger']) #details {\n  color: var(--wa-color-danger-on-quiet);\n}\n\n@media (hover: hover) {\n  :host([variant='danger']:hover) {\n    background-color: var(--wa-color-danger-fill-normal);\n    color: var(--wa-color-danger-on-normal);\n  }\n}\n\n:host([variant='danger']:focus-visible) {\n  background-color: var(--wa-color-danger-fill-normal);\n  color: var(--wa-color-danger-on-normal);\n}\n\n:host([checkbox-adjacent]) {\n  padding-inline-start: 2em;\n}\n\n/* Only add padding when item actually has a submenu */\n:host([submenu-adjacent]:not(:state(has-submenu))) #details {\n  padding-inline-end: 0;\n}\n\n:host(:state(has-submenu)[submenu-adjacent]) #details {\n  padding-inline-end: 1.75em;\n}\n\n#check {\n  visibility: hidden;\n  margin-inline-start: -1.5em;\n  margin-inline-end: 0.5em;\n  font-size: var(--wa-font-size-smaller);\n}\n\n:host(:state(checked)) #check {\n  visibility: visible;\n}\n\n#icon ::slotted(*) {\n  display: flex;\n  flex: 0 0 auto;\n  align-items: center;\n  margin-inline-end: 0.75em !important;\n  font-size: var(--wa-font-size-smaller);\n}\n\n#label {\n  flex: 1 1 auto;\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n#details {\n  display: flex;\n  flex: 0 0 auto;\n  align-items: center;\n  justify-content: end;\n  color: var(--wa-color-text-quiet);\n  font-size: var(--wa-font-size-smaller) !important;\n}\n\n#details ::slotted(*) {\n  margin-inline-start: 2em !important;\n}\n\n/* Submenu indicator icon */\n#submenu-indicator {\n  position: absolute;\n  inset-inline-end: 1em;\n  color: var(--wa-color-neutral-on-quiet);\n  font-size: var(--wa-font-size-smaller);\n}\n\n/* Flip chevron icon when RTL */\n:host(:dir(rtl)) #submenu-indicator {\n  transform: scaleX(-1);\n}\n\n/* Submenu styles */\n#submenu {\n  display: flex;\n  z-index: 10;\n  position: absolute;\n  top: 0;\n  left: 0;\n  flex-direction: column;\n  width: max-content;\n  margin: 0;\n  padding: 0.25em;\n  border: var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-surface-border);\n  border-radius: var(--wa-border-radius-m);\n  background-color: var(--wa-color-surface-raised);\n  box-shadow: var(--wa-shadow-m);\n  color: var(--wa-color-text-normal);\n  text-align: start;\n  user-select: none;\n\n  /* Override default popover styles */\n  &[popover] {\n    margin: 0;\n    inset: auto;\n    padding: 0.25em;\n    overflow: visible;\n    border-radius: var(--wa-border-radius-m);\n  }\n\n  &.show {\n    animation: submenu-show var(--show-duration, 50ms) ease;\n  }\n\n  &.hide {\n    animation: submenu-show var(--show-duration, 50ms) ease reverse;\n  }\n\n  /* Submenu placement transform origins */\n  &[data-placement^='top'] {\n    transform-origin: bottom;\n  }\n\n  &[data-placement^='bottom'] {\n    transform-origin: top;\n  }\n\n  &[data-placement^='left'] {\n    transform-origin: right;\n  }\n\n  &[data-placement^='right'] {\n    transform-origin: left;\n  }\n\n  &[data-placement='left-start'] {\n    transform-origin: right top;\n  }\n\n  &[data-placement='left-end'] {\n    transform-origin: right bottom;\n  }\n\n  &[data-placement='right-start'] {\n    transform-origin: left top;\n  }\n\n  &[data-placement='right-end'] {\n    transform-origin: left bottom;\n  }\n\n  /* Safe triangle styling */\n  &::before {\n    display: none;\n    z-index: 9;\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-color: transparent;\n    content: '';\n    clip-path: polygon(\n      var(--safe-triangle-cursor-x, 0) var(--safe-triangle-cursor-y, 0),\n      var(--safe-triangle-submenu-start-x, 0) var(--safe-triangle-submenu-start-y, 0),\n      var(--safe-triangle-submenu-end-x, 0) var(--safe-triangle-submenu-end-y, 0)\n    );\n    pointer-events: auto; /* Enable mouse events on the triangle */\n  }\n\n  &[data-visible]::before {\n    display: block;\n  }\n}\n\n::slotted(wa-dropdown-item) {\n  font-size: inherit;\n}\n\n::slotted(wa-divider) {\n  --spacing: 0.25em;\n}\n\n@keyframes submenu-show {\n  from {\n    scale: 0.9;\n    opacity: 0;\n  }\n  to {\n    scale: 1;\n    opacity: 1;\n  }\n}\n";

  // src/components/dropdown-item/dropdown-item.ts
  var WaDropdownItem = class extends WebAwesomeElement {
    constructor() {
      super(...arguments);
      this.hasSlotController = new HasSlotController(this, '[default]', 'start', 'end');
      this.active = false;
      this.variant = 'default';
      this.size = 'medium';
      this.checkboxAdjacent = false;
      this.submenuAdjacent = false;
      this.type = 'normal';
      this.checked = false;
      this.disabled = false;
      this.submenuOpen = false;
      this.hasSubmenu = false;
      this.handleSlotChange = () => {
        this.hasSubmenu = this.hasSlotController.test('submenu');
        this.updateHasSubmenuState();
        if (this.hasSubmenu) {
          this.setAttribute('aria-haspopup', 'menu');
          this.setAttribute('aria-expanded', this.submenuOpen ? 'true' : 'false');
        } else {
          this.removeAttribute('aria-haspopup');
          this.removeAttribute('aria-expanded');
        }
      };
    }
    connectedCallback() {
      super.connectedCallback();
      this.addEventListener('mouseenter', this.handleMouseEnter.bind(this));
      this.shadowRoot.addEventListener('slotchange', this.handleSlotChange);
    }
    disconnectedCallback() {
      super.disconnectedCallback();
      this.closeSubmenu();
      this.removeEventListener('mouseenter', this.handleMouseEnter);
      this.shadowRoot.removeEventListener('slotchange', this.handleSlotChange);
    }
    firstUpdated() {
      this.setAttribute('tabindex', '-1');
      this.hasSubmenu = this.hasSlotController.test('submenu');
      this.updateHasSubmenuState();
    }
    updated(changedProperties) {
      if (changedProperties.has('active')) {
        this.setAttribute('tabindex', this.active ? '0' : '-1');
        this.customStates.set('active', this.active);
      }
      if (changedProperties.has('checked')) {
        this.setAttribute('aria-checked', this.checked ? 'true' : 'false');
        this.customStates.set('checked', this.checked);
      }
      if (changedProperties.has('disabled')) {
        this.setAttribute('aria-disabled', this.disabled ? 'true' : 'false');
        this.customStates.set('disabled', this.disabled);
      }
      if (changedProperties.has('type')) {
        if (this.type === 'checkbox') {
          this.setAttribute('role', 'menuitemcheckbox');
        } else {
          this.setAttribute('role', 'menuitem');
        }
      }
      if (changedProperties.has('submenuOpen')) {
        this.customStates.set('submenu-open', this.submenuOpen);
        if (this.submenuOpen) {
          this.openSubmenu();
        } else {
          this.closeSubmenu();
        }
      }
    }
    /** Update the has-submenu custom state */
    updateHasSubmenuState() {
      this.customStates.set('has-submenu', this.hasSubmenu);
    }
    /** Opens the submenu. */
    async openSubmenu() {
      if (!this.hasSubmenu || !this.submenuElement) return;
      this.notifyParentOfOpening();
      this.submenuElement.showPopover();
      this.submenuElement.hidden = false;
      this.submenuElement.setAttribute('data-visible', '');
      this.submenuOpen = true;
      this.setAttribute('aria-expanded', 'true');
      await animateWithClass(this.submenuElement, 'show');
      setTimeout(() => {
        const items = this.getSubmenuItems();
        if (items.length > 0) {
          items.forEach((item, index) => (item.active = index === 0));
          items[0].focus();
        }
      }, 0);
    }
    /** Notifies the parent dropdown that this item is opening its submenu */
    notifyParentOfOpening() {
      const event = new CustomEvent('submenu-opening', {
        bubbles: true,
        composed: true,
        detail: { item: this },
      });
      this.dispatchEvent(event);
      const parent = this.parentElement;
      if (parent) {
        const siblings = [...parent.children].filter(
          el =>
            el !== this &&
            el.localName === 'wa-dropdown-item' &&
            el.getAttribute('slot') === this.getAttribute('slot') &&
            el.submenuOpen,
        );
        siblings.forEach(sibling => {
          sibling.submenuOpen = false;
        });
      }
    }
    /** Closes the submenu. */
    async closeSubmenu() {
      if (!this.hasSubmenu || !this.submenuElement) return;
      this.submenuOpen = false;
      this.setAttribute('aria-expanded', 'false');
      if (!this.submenuElement.hidden) {
        await animateWithClass(this.submenuElement, 'hide');
        this.submenuElement.hidden = true;
        this.submenuElement.removeAttribute('data-visible');
        this.submenuElement.hidePopover();
      }
    }
    /** Gets all dropdown items in the submenu. */
    getSubmenuItems() {
      return [...this.children].filter(
        el =>
          el.localName === 'wa-dropdown-item' &&
          el.getAttribute('slot') === 'submenu' &&
          !el.hasAttribute('disabled'),
      );
    }
    /** Handles mouse enter to open the submenu */
    handleMouseEnter() {
      if (this.hasSubmenu && !this.disabled) {
        this.notifyParentOfOpening();
        this.submenuOpen = true;
      }
    }
    render() {
      return x$1`
      ${
        this.type === 'checkbox'
          ? x$1`
            <wa-icon
              id="check"
              part="checkmark"
              exportparts="svg:checkmark__svg"
              library="system"
              name="check"
            ></wa-icon>
          `
          : ''
      }

      <span id="icon" part="icon">
        <slot name="icon"></slot>
      </span>

      <span id="label" part="label">
        <slot></slot>
      </span>

      <span id="details" part="details">
        <slot name="details"></slot>
      </span>

      ${
        this.hasSubmenu
          ? x$1`
            <wa-icon
              id="submenu-indicator"
              part="submenu-icon"
              exportparts="svg:submenu-icon__svg"
              library="system"
              name="chevron-right"
            ></wa-icon>
          `
          : ''
      }
      ${
        this.hasSubmenu
          ? x$1`
            <div
              id="submenu"
              part="submenu"
              popover="manual"
              role="menu"
              tabindex="-1"
              aria-orientation="vertical"
              hidden
            >
              <slot name="submenu"></slot>
            </div>
          `
          : ''
      }
    `;
    }
  };
  WaDropdownItem.css = dropdown_item_default;
  __decorateClass$i([e$4('#submenu')], WaDropdownItem.prototype, 'submenuElement', 2);
  __decorateClass$i([n$2({ type: Boolean })], WaDropdownItem.prototype, 'active', 2);
  __decorateClass$i([n$2({ reflect: true })], WaDropdownItem.prototype, 'variant', 2);
  __decorateClass$i([n$2({ reflect: true })], WaDropdownItem.prototype, 'size', 2);
  __decorateClass$i(
    [n$2({ attribute: 'checkbox-adjacent', type: Boolean, reflect: true })],
    WaDropdownItem.prototype,
    'checkboxAdjacent',
    2,
  );
  __decorateClass$i(
    [n$2({ attribute: 'submenu-adjacent', type: Boolean, reflect: true })],
    WaDropdownItem.prototype,
    'submenuAdjacent',
    2,
  );
  __decorateClass$i([n$2()], WaDropdownItem.prototype, 'value', 2);
  __decorateClass$i([n$2({ reflect: true })], WaDropdownItem.prototype, 'type', 2);
  __decorateClass$i([n$2({ type: Boolean })], WaDropdownItem.prototype, 'checked', 2);
  __decorateClass$i(
    [n$2({ type: Boolean, reflect: true })],
    WaDropdownItem.prototype,
    'disabled',
    2,
  );
  __decorateClass$i(
    [n$2({ type: Boolean, reflect: true })],
    WaDropdownItem.prototype,
    'submenuOpen',
    2,
  );
  __decorateClass$i([r$2()], WaDropdownItem.prototype, 'hasSubmenu', 2);
  WaDropdownItem = __decorateClass$i([t$1('wa-dropdown-item')], WaDropdownItem);

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */ class e extends i$6 {
    constructor(i) {
      if ((super(i), (this.it = E), i.type !== t$3.CHILD))
        throw Error(this.constructor.directiveName + '() can only be used in child bindings');
    }
    render(r) {
      if (r === E || null == r) return ((this._t = void 0), (this.it = r));
      if (r === T) return r;
      if ('string' != typeof r)
        throw Error(this.constructor.directiveName + '() called with a non-string value');
      if (r === this.it) return this._t;
      this.it = r;
      const s = [r];
      return (
        (s.raw = s),
        (this._t = { _$litType$: this.constructor.resultType, strings: s, values: [] })
      );
    }
  }
  ((e.directiveName = 'unsafeHTML'), (e.resultType = 1));
  const o$4 = e$9(e);

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */ class t extends e {}
  ((t.directiveName = 'unsafeSVG'), (t.resultType = 2));
  const o$3 = e$9(t);

  function toPascalCase(name) {
    if (name.startsWith('Icon') && !name.includes('-') && !name.includes('_')) {
      return name;
    }
    const withoutPrefix = name.startsWith('Icon') ? name.substring(4) : name;
    const parts = withoutPrefix.split(/[-_]/);
    const pascalCased = parts.map(part => part.charAt(0).toUpperCase() + part.slice(1)).join('');
    return `Icon${pascalCased}`;
  }
  function toKebabCase(name) {
    if (name.includes('-') && name === name.toLowerCase()) {
      return name;
    }
    const withoutPrefix = name.startsWith('Icon') ? name.substring(4) : name;
    const kebabCased = withoutPrefix
      .trim()
      .replace(/([A-Z]+)([A-Z][a-z])/g, '$1-$2')
      .replace(/([a-z\d])([A-Z])/g, '$1-$2')
      .toLowerCase();
    return kebabCased;
  }

  const iconsCSS =
    '.icon-tabler-file-download > :nth-child(n + 4) {\r\n  color: gold;\r\n}\r\n\r\n.icon-tabler-arrow-autofit-width > :nth-child(n + 3) {\r\n  color: yellow;\r\n}\r\n\r\n.icon-tabler-arrow-autofit-height > :nth-child(n + 3) {\r\n  color: yellow;\r\n}\r\n\r\n.icon-tabler-zoom-in-area > :nth-child(2),\r\n.icon-tabler-zoom-in-area > :nth-child(3) {\r\n  color: lime;\r\n}\r\n\r\n.icon-tabler-zoom-out-area > :nth-child(2) {\r\n  color: red;\r\n}\r\n\r\n.icon-tabler-zoom-pan > :nth-child(n + 4) {\r\n  color: #9966ff;\r\n}\r\n\r\n.icon-tabler-arrow-autofit-down > :nth-child(n + 3) {\r\n  color: #28ffbf;\r\n}\r\n\r\n.icon-tabler-arrow-autofit-left > :nth-child(n + 3) {\r\n  color: #28ffbf;\r\n}\r\n\r\n.icon-tabler-arrow-autofit-right > :nth-child(n + 3) {\r\n  color: #28ffbf;\r\n}\r\n\r\n.icon-tabler-spacing-vertical > :nth-child(4) {\r\n  color: fuchsia;\r\n}\r\n\r\n.icon-tabler-list-numbers > :nth-child(n + 5) {\r\n  color: #e48900;\r\n}\r\n\r\n.icon-tabler-bookmarks > :nth-child(n + 2) {\r\n  color: orange;\r\n}\r\n\r\n.icon-tabler-bookmark > :nth-child(2) {\r\n  color: orange;\r\n}\r\n\r\n.icon-tabler-bookmark-off > :nth-child(2) {\r\n  color: orange;\r\n}\r\n\r\n.icon-tabler-bookmark-off > :nth-child(3) {\r\n  color: red;\r\n}\r\n\r\n.icon-tabler-eye-off > :nth-child(4) {\r\n  color: red;\r\n}\r\n\r\n.icon-tabler-zoom-cancel > :nth-child(3),\r\n.icon-tabler-zoom-cancel > :nth-child(4) {\r\n  color: #9966ff;\r\n}\r\n\r\n.icon-tabler-zoom-in > :nth-child(3),\r\n.icon-tabler-zoom-in > :nth-child(4) {\r\n  color: lime;\r\n}\r\n\r\n.icon-tabler-zoom-out > :nth-child(3) {\r\n  color: red;\r\n}\r\n\r\n.icon-tabler-refresh > :nth-child(n + 2) {\r\n  color: cyan;\r\n}\r\n\r\n.icon-tabler-photo > :nth-child(n + 2) {\r\n  color: silver;\r\n}\r\n\r\n.icon-tabler-photo-off > :nth-child(n + 2) {\r\n  color: silver;\r\n}\r\n\r\n.icon-tabler-photo-off > :nth-child(6) {\r\n  color: orange;\r\n}\r\n\r\n.icon-tabler-message > :nth-child(2),\r\n.icon-tabler-message > :nth-child(3) {\r\n  color: greenyellow;\r\n}\r\n\r\n.icon-tabler-book-return > g {\r\n  color: greenyellow;\r\n}\r\n\r\n.icon-tabler-file-percent > :nth-child(2),\r\n.icon-tabler-file-percent > :nth-child(5),\r\n.icon-tabler-file-percent > :nth-child(6) {\r\n  color: yellow;\r\n}\r\n\r\n.icon-tabler-settings-off > :nth-child(4) {\r\n  color: red;\r\n}\r\n';

  const arrowAutofitDown =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  class="icon icon-tabler icon-tabler-arrow-autofit-down"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  stroke-width="2"\r\n  stroke="currentColor"\r\n  fill="none"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M12 20h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h8" />\r\n  <path d="M18 4v17" />\r\n  <path d="M15 18l3 3l3 -3" />\r\n</svg>\r\n';

  const arrowAutofitHeight =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  class="icon icon-tabler icon-tabler-arrow-autofit-height"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  stroke-width="2"\r\n  stroke="currentColor"\r\n  fill="none"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M12 20h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h6" />\r\n  <path d="M18 14v7" />\r\n  <path d="M18 3v7" />\r\n  <path d="M15 18l3 3l3 -3" />\r\n  <path d="M15 6l3 -3l3 3" />\r\n</svg>\r\n';

  const arrowAutofitLeft =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  class="icon icon-tabler icon-tabler-arrow-autofit-left"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  stroke-width="2"\r\n  stroke="currentColor"\r\n  fill="none"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M4 12v-6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v8" />\r\n  <path d="M20 18h-17" />\r\n  <path d="M6 15l-3 3l3 3" />\r\n</svg>\r\n';

  const arrowAutofitRight =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  class="icon icon-tabler icon-tabler-arrow-autofit-right"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  stroke-width="2"\r\n  stroke="currentColor"\r\n  fill="none"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M20 12v-6a2 2 0 0 0 -2 -2h-12a2 2 0 0 0 -2 2v8" />\r\n  <path d="M4 18h17" />\r\n  <path d="M18 15l3 3l-3 3" />\r\n</svg>\r\n';

  const arrowAutofitWidth =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  class="icon icon-tabler icon-tabler-arrow-autofit-width"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  stroke-width="2"\r\n  stroke="currentColor"\r\n  fill="none"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M4 12v-6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v6" />\r\n  <path d="M10 18h-7" />\r\n  <path d="M21 18h-7" />\r\n  <path d="M6 15l-3 3l3 3" />\r\n  <path d="M18 15l3 3l-3 3" />\r\n</svg>\r\n';

  const arrowBigLeft =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  class="icon icon-tabler icon-tabler-arrow-big-left"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  stroke-width="2"\r\n  stroke="currentColor"\r\n  fill="none"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path\r\n    d="M20 15h-8v3.586a1 1 0 0 1 -1.707 .707l-6.586 -6.586a1 1 0 0 1 0 -1.414l6.586 -6.586a1 1 0 0 1 1.707 .707v3.586h8a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1z"\r\n  />\r\n</svg>\r\n';

  const arrowBigRight =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  class="icon icon-tabler icon-tabler-arrow-big-right"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  stroke-width="2"\r\n  stroke="currentColor"\r\n  fill="none"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path\r\n    d="M4 9h8v-3.586a1 1 0 0 1 1.707 -.707l6.586 6.586a1 1 0 0 1 0 1.414l-6.586 6.586a1 1 0 0 1 -1.707 -.707v-3.586h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1z"\r\n  />\r\n</svg>\r\n';

  const arrowsMove =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  fill="none"\r\n  stroke="currentColor"\r\n  stroke-width="2"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n  class="icon icon-tabler icons-tabler-outline icon-tabler-arrows-move"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M18 9l3 3l-3 3" />\r\n  <path d="M15 12h6" />\r\n  <path d="M6 9l-3 3l3 3" />\r\n  <path d="M3 12h6" />\r\n  <path d="M9 18l3 3l3 -3" />\r\n  <path d="M12 15v6" />\r\n  <path d="M15 6l-3 -3l-3 3" />\r\n  <path d="M12 3v6" />\r\n</svg>\r\n';

  const arrowsMoveVertical =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  fill="none"\r\n  stroke="currentColor"\r\n  stroke-width="2"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n  class="icon icon-tabler icons-tabler-outline icon-tabler-arrows-move-vertical"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M9 18l3 3l3 -3" />\r\n  <path d="M12 15v6" />\r\n  <path d="M15 6l-3 -3l-3 3" />\r\n  <path d="M12 3v6" />\r\n</svg>\r\n';

  const arrowsVertical =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  fill="none"\r\n  stroke="currentColor"\r\n  stroke-width="2"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n  class="icon icon-tabler icons-tabler-outline icon-tabler-arrows-vertical"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M8 7l4 -4l4 4" />\r\n  <path d="M8 17l4 4l4 -4" />\r\n  <path d="M12 3l0 18" />\r\n</svg>\r\n';

  const book =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  fill="none"\r\n  stroke="currentColor"\r\n  stroke-width="2"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n  class="icon icon-tabler icons-tabler-outline icon-tabler-book"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />\r\n  <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />\r\n  <path d="M3 6l0 13" />\r\n  <path d="M12 6l0 13" />\r\n  <path d="M21 6l0 13" />\r\n</svg>\r\n';

  const bookReturn =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  fill="none"\r\n  stroke="currentColor"\r\n  stroke-width="2"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n  class="icon icon-tabler icons-tabler-outline icon-tabler-return"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 2 -1" />\r\n  <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />\r\n  <path d="M3 6l0 13" />\r\n  <path d="M12 6l0 13" />\r\n  <path d="M21 6l0 4" />\r\n  <g transform="rotate(-90, 19, 15)">\r\n    <path d="M15 16l3 -3l3 3" />\r\n    <path d="M18 13v9" />\r\n  </g>\r\n</svg>\r\n';

  const bookUpload =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  fill="none"\r\n  stroke="currentColor"\r\n  stroke-width="2"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n  class="icon icon-tabler icons-tabler-outline icon-tabler-book-upload"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M14 20h-8a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12v5" />\r\n  <path d="M11 16h-5a2 2 0 0 0 -2 2" />\r\n  <path d="M15 16l3 -3l3 3" />\r\n  <path d="M18 13v9" />\r\n</svg>\r\n';

  const bookmark =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  class="icon icon-tabler icon-tabler-bookmark"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  stroke-width="2"\r\n  stroke="currentColor"\r\n  fill="none"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M18 7v14l-6 -4l-6 4v-14a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4z" />\r\n</svg>\r\n';

  const bookmarkOff =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  class="icon icon-tabler icon-tabler-bookmark-off"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  stroke-width="2"\r\n  stroke="currentColor"\r\n  fill="none"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path\r\n    d="M7.708 3.721a3.982 3.982 0 0 1 2.292 -.721h4a4 4 0 0 1 4 4v7m0 4v3l-6 -4l-6 4v-14c0 -.308 .035 -.609 .1 -.897"\r\n  />\r\n  <path d="M3 3l18 18" />\r\n</svg>\r\n';

  const bookmarks =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  class="icon icon-tabler icon-tabler-bookmarks"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  stroke-width="2"\r\n  stroke="currentColor"\r\n  fill="none"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M15 10v11l-5 -3l-5 3v-11a3 3 0 0 1 3 -3h4a3 3 0 0 1 3 3z" />\r\n  <path d="M11 3h5a3 3 0 0 1 3 3v11" />\r\n</svg>\r\n';

  const boxAlignTop =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  fill="none"\r\n  stroke="currentColor"\r\n  stroke-width="2"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n  class="icon icon-tabler icons-tabler-outline icon-tabler-box-align-top"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M4 10.005h16v-5a1 1 0 0 0 -1 -1h-14a1 1 0 0 0 -1 1v5z" />\r\n  <path d="M4 15.005v-.01" />\r\n  <path d="M4 20.005v-.01" />\r\n  <path d="M9 20.005v-.01" />\r\n  <path d="M15 20.005v-.01" />\r\n  <path d="M20 20.005v-.01" />\r\n  <path d="M20 15.005v-.01" />\r\n</svg>\r\n';

  const category =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  class="icon icon-tabler icon-tabler-category"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  stroke-width="2"\r\n  stroke="currentColor"\r\n  fill="none"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M4 4h6v6h-6z" />\r\n  <path d="M14 4h6v6h-6z" />\r\n  <path d="M4 14h6v6h-6z" />\r\n  <path d="M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />\r\n</svg>\r\n';

  const check =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  class="icon icon-tabler icon-tabler-check"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  stroke-width="2"\r\n  stroke="currentColor"\r\n  fill="none"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M5 12l5 5l10 -10" />\r\n</svg>\r\n';

  const chevronRight =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  fill="none"\r\n  stroke="currentColor"\r\n  stroke-width="2"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n  class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M9 6l6 6l-6 6" />\r\n</svg>\r\n';

  const Comic1SpecialLinealColor =
    '<?xml version="1.0" encoding="UTF-8"?>\r\n<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  version="1.1"\r\n  id="Capa_1"\r\n  x="0px"\r\n  y="0px"\r\n  viewBox="0 0 512 512"\r\n  style="enable-background: new 0 0 512 512"\r\n  xml:space="preserve"\r\n  width="512"\r\n  height="512"\r\n>\r\n  <g>\r\n    <g>\r\n      <g>\r\n        <path\r\n          style="fill: #f2eff2"\r\n          d="M422.485,504.5H89.515c-5.523,0-10-4.477-10-10v-477c0-5.523,4.477-10,10-10h332.971&#10;&#9;&#9;&#9;&#9;c5.523,0,10,4.477,10,10v477C432.485,500.023,428.008,504.5,422.485,504.5z"\r\n        />\r\n      </g>\r\n    </g>\r\n    <g>\r\n      <g>\r\n        <path\r\n          style="fill: #e1dde1"\r\n          d="M432.49,17.5v477c0,5.52-4.48,10-10,10h-40.03c5.52,0,10-4.48,10-10v-477c0-5.52-4.48-10-10-10&#10;&#9;&#9;&#9;&#9;h40.03C428.01,7.5,432.49,11.98,432.49,17.5z"\r\n        />\r\n      </g>\r\n    </g>\r\n    <g>\r\n      <path\r\n        style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        "\r\n        d="&#10;&#9;&#9;&#9;M334.56,7.5H89.515c-5.523,0-10,4.477-10,10v477c0,5.523,4.477,10,10,10h332.971c5.523,0,10-4.477,10-10v-477&#10;&#9;&#9;&#9;c0-5.523-4.477-10-10-10h-54.763"\r\n      />\r\n    </g>\r\n    <g>\r\n      <path\r\n        style="fill: #3ad1e0"\r\n        d="M313.86,452.74L159.16,55.63c-0.75-1.92-2.6-3.18-4.66-3.18h-29.96c-2.76,0-5,2.24-5,5v397.1&#10;&#9;&#9;&#9;c0,2.76,2.24,5,5,5h184.67C312.72,459.55,315.14,456.01,313.86,452.74z"\r\n      />\r\n      <path\r\n        style="fill: #22c7db"\r\n        d="M309.21,459.55h-30.02c3.51,0,5.93-3.54,4.65-6.81L129.14,55.63c-0.74-1.9-2.56-3.16-4.6-3.18&#10;&#9;&#9;&#9;h29.96c2.06,0,3.91,1.26,4.66,3.18l154.7,397.11C315.14,456.01,312.72,459.55,309.21,459.55z"\r\n      />\r\n      <path\r\n        style="fill: #fb33a8"\r\n        d="M258.193,309.845c-9.05-1.894-18.424-2.909-28.037-2.909c-45.55,0-85.862,22.354-110.616,56.676&#10;&#9;&#9;&#9;v90.938c0,2.76,2.24,5,5,5h184.67c3.51,0,5.93-3.54,4.65-6.81L258.193,309.845z"\r\n      />\r\n      <path\r\n        style="fill: #ee2d9a"\r\n        d="M193.362,311.966c-5.64,10.161-16.48,17.055-28.912,17.055c-0.57,0-1.14-0.01-1.72-0.04&#10;&#9;&#9;&#9;c-4.02-0.2-6.72,3.06-6.72,6.44c0,1.66,0.65,3.35,2.12,4.67c7.27,6.57,10.91,15.56,10.91,24.55s-3.64,17.99-10.91,24.55&#10;&#9;&#9;&#9;c-4.37,3.94-1.51,11.12,4.24,11.12c0.12,0,0.24,0,0.36-0.01c19-0.97,34.76,14.2,34.76,33c0,0.57-0.01,1.14-0.04,1.72&#10;&#9;&#9;&#9;c-0.21,4.02,3.05,6.72,6.43,6.72c1.67,0,3.36-0.65,4.68-2.12c6.56-7.27,15.56-10.91,24.55-10.91c8.99,0,17.98,3.64,24.55,10.91&#10;&#9;&#9;&#9;c3.94,4.37,11.12,1.51,11.12-4.24c0-0.12,0-0.24-0.01-0.36c-0.264-5.151,0.666-10.058,2.527-14.479l12.543,32.197&#10;&#9;&#9;&#9;c1.28,3.27-1.14,6.81-4.65,6.81h30.02c3.51,0,5.93-3.54,4.65-6.81l-55.667-142.895L193.362,311.966z"\r\n      />\r\n      <path\r\n        style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        "\r\n        d="&#10;&#9;&#9;&#9;M230.156,306.937c-45.55,0-85.862,22.354-110.616,56.676"\r\n      />\r\n      <path\r\n        style="fill: #fcb44d"\r\n        d="M392.46,57.45v148.5c0,2.76-2.24,5-5,5H260.65c-2.06,0-3.91-1.26-4.66-3.18l-57.85-148.5&#10;&#9;&#9;&#9;c-1.28-3.28,1.14-6.82,4.65-6.82h184.67C390.22,52.45,392.46,54.69,392.46,57.45z"\r\n      />\r\n      <path\r\n        style="fill: #fb9927"\r\n        d="M392.46,57.45v148.5c0,2.76-2.24,5-5,5h-30.021c2.76,0,5-2.24,5-5V57.45c0-2.76-2.24-5-5-5h30.021&#10;&#9;&#9;&#9;C390.22,52.45,392.46,54.69,392.46,57.45z"\r\n      />\r\n      <g>\r\n        <path\r\n          style="fill: #ae6ad8"\r\n          d="M356.4,183.26v27.69h-78.45v-27.69c0-21.67,17.57-39.23,39.23-39.23&#10;&#9;&#9;&#9;&#9;c10.83,0,20.64,4.39,27.73,11.49C352.01,162.62,356.4,172.42,356.4,183.26z"\r\n        />\r\n        <path\r\n          style="fill: #975bbb"\r\n          d="M356.402,183.26v27.69h-28.38v-27.69c0-10.84-4.39-20.64-11.49-27.74&#10;&#9;&#9;&#9;&#9;c-3.82-3.82-8.42-6.86-13.54-8.84c4.4-1.71,9.19-2.65,14.19-2.65c10.83,0,20.64,4.39,27.73,11.49&#10;&#9;&#9;&#9;&#9;C352.012,162.62,356.402,172.42,356.402,183.26z"\r\n        />\r\n        <path\r\n          style="\r\n            fill: none;\r\n            stroke: #000000;\r\n            stroke-width: 15;\r\n            stroke-linecap: round;\r\n            stroke-linejoin: round;\r\n            stroke-miterlimit: 10;\r\n          "\r\n          d="&#10;&#9;&#9;&#9;&#9;M277.95,210.95v-27.69c0-21.67,17.57-39.23,39.23-39.23c10.83,0,20.64,4.39,27.73,11.49c7.1,7.1,11.49,16.9,11.49,27.74v27.69"\r\n        />\r\n        <g>\r\n          <circle\r\n            style="fill: #f2eff2"\r\n            cx="317.179"\r\n            cy="125.438"\r\n            r="25.456"\r\n          />\r\n\r\n          <circle\r\n            style="\r\n              fill: none;\r\n              stroke: #000000;\r\n              stroke-width: 15;\r\n              stroke-linecap: round;\r\n              stroke-linejoin: round;\r\n              stroke-miterlimit: 10;\r\n            "\r\n            cx="317.179"\r\n            cy="125.438"\r\n            r="25.456"\r\n          />\r\n        </g>\r\n      </g>\r\n      <path\r\n        style="fill: #23f1a8"\r\n        d="M392.46,250.95v67.96c0,2.761-2.239,5-5,5h-82.812c-2.061,0-3.911-1.265-4.659-3.185l-26.474-67.96&#10;&#9;&#9;&#9;c-1.277-3.278,1.141-6.815,4.659-6.815H387.46C390.221,245.95,392.46,248.189,392.46,250.95z"\r\n      />\r\n      <path\r\n        style="fill: #27e19d"\r\n        d="M392.46,250.95v67.96c0,2.76-2.24,5-5,5h-30.021c2.76,0,5-2.24,5-5v-67.96c0-2.76-2.24-5-5-5&#10;&#9;&#9;&#9;h30.021C390.22,245.95,392.46,248.19,392.46,250.95z"\r\n      />\r\n      <path\r\n        style="fill: #23f1a8"\r\n        d="M322.184,358.91h65.276c2.761,0,5,2.239,5,5v90.64c0,2.761-2.239,5-5,5h-29.962&#10;&#9;&#9;&#9;c-2.061,0-3.911-1.265-4.659-3.185l-35.314-90.64C316.248,362.447,318.666,358.91,322.184,358.91z"\r\n      />\r\n      <path\r\n        style="fill: #27e19d"\r\n        d="M392.46,363.91v90.64c0,2.76-2.24,5-5,5h-30.021c2.76,0,5-2.24,5-5v-90.64c0-2.76-2.24-5-5-5&#10;&#9;&#9;&#9;h30.021C390.22,358.91,392.46,361.15,392.46,363.91z"\r\n      />\r\n      <path\r\n        style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        "\r\n        d="&#10;&#9;&#9;&#9;M119.54,242.003V454.55c0,2.761,2.239,5,5,5h184.666c3.518,0,5.936-3.537,4.659-6.815l-154.704-397.1&#10;&#9;&#9;&#9;c-0.748-1.92-2.598-3.185-4.659-3.185H124.54c-2.761,0-5,2.239-5,5v151.391"\r\n      />\r\n      <path\r\n        style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        "\r\n        d="&#10;&#9;&#9;&#9;M392.46,57.45v148.5c0,2.761-2.239,5-5,5H260.648c-2.061,0-3.911-1.265-4.659-3.185l-57.854-148.5&#10;&#9;&#9;&#9;c-1.277-3.278,1.141-6.815,4.659-6.815H387.46C390.221,52.45,392.46,54.689,392.46,57.45z"\r\n      />\r\n      <path\r\n        style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        "\r\n        d="&#10;&#9;&#9;&#9;M306.627,245.95h-28.454c-3.518,0-5.936,3.537-4.659,6.815l26.474,67.96c0.748,1.92,2.598,3.185,4.659,3.185h82.812&#10;&#9;&#9;&#9;c2.761,0,5-2.239,5-5v-67.96c0-2.761-2.239-5-5-5h-47.67"\r\n      />\r\n      <path\r\n        style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        "\r\n        d="&#10;&#9;&#9;&#9;M322.184,358.91h65.276c2.761,0,5,2.239,5,5v90.64c0,2.761-2.239,5-5,5h-29.962c-2.061,0-3.911-1.265-4.659-3.185l-35.314-90.64&#10;&#9;&#9;&#9;C316.248,362.447,318.666,358.91,322.184,358.91z"\r\n      />\r\n    </g>\r\n    <g>\r\n      <path\r\n        style="fill: #fdef63"\r\n        d="M268.77,409.35c0.01,0.12,0.01,0.24,0.01,0.36c0,5.75-7.18,8.61-11.12,4.24&#10;&#9;&#9;&#9;c-6.57-7.27-15.56-10.91-24.55-10.91c-8.99,0-17.99,3.64-24.55,10.91c-1.32,1.47-3.01,2.12-4.68,2.12c-3.38,0-6.64-2.7-6.43-6.72&#10;&#9;&#9;&#9;c0.03-0.58,0.04-1.15,0.04-1.72c0-18.8-15.76-33.97-34.76-33c-0.12,0.01-0.24,0.01-0.36,0.01c-5.75,0-8.61-7.18-4.24-11.12&#10;&#9;&#9;&#9;c7.27-6.56,10.91-15.56,10.91-24.55s-3.64-17.98-10.91-24.55c-1.47-1.32-2.12-3.01-2.12-4.67c0-3.38,2.7-6.64,6.72-6.44&#10;&#9;&#9;&#9;c0.58,0.03,1.15,0.04,1.72,0.04c18.8,0,33.97-15.76,33-34.75c-0.01-0.12-0.01-0.24-0.01-0.36c0-5.76,7.18-8.61,11.12-4.25&#10;&#9;&#9;&#9;c6.56,7.27,15.56,10.91,24.55,10.91c3.65,0,7.29-0.6,10.77-1.79l41.28,105.96C274.88,385.07,268.11,396.46,268.77,409.35z"\r\n      />\r\n      <path\r\n        style="fill: #f3d730"\r\n        d="M268.151,412.468c0.394-0.814,0.629-1.738,0.629-2.758c0-0.12,0-0.24-0.01-0.36&#10;&#9;&#9;&#9;c-0.66-12.89,6.11-24.28,16.39-30.28l-41.28-105.96c-3.48,1.19-7.12,1.79-10.77,1.79c-7.758,0-15.52-2.717-21.718-8.132&#10;&#9;&#9;&#9;L268.151,412.468z"\r\n      />\r\n      <path\r\n        style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        "\r\n        d="&#10;&#9;&#9;&#9;M268.77,409.35c0.01,0.12,0.01,0.24,0.01,0.36c0,5.75-7.18,8.61-11.12,4.24c-6.57-7.27-15.56-10.91-24.55-10.91&#10;&#9;&#9;&#9;c-8.99,0-17.99,3.64-24.55,10.91c-1.32,1.47-3.01,2.12-4.68,2.12c-3.38,0-6.64-2.7-6.43-6.72c0.03-0.58,0.04-1.15,0.04-1.72&#10;&#9;&#9;&#9;c0-18.8-15.76-33.97-34.76-33c-0.12,0.01-0.24,0.01-0.36,0.01c-5.75,0-8.61-7.18-4.24-11.12c7.27-6.56,10.91-15.56,10.91-24.55&#10;&#9;&#9;&#9;s-3.64-17.98-10.91-24.55c-1.47-1.32-2.12-3.01-2.12-4.67c0-3.38,2.7-6.64,6.72-6.44c0.58,0.03,1.15,0.04,1.72,0.04&#10;&#9;&#9;&#9;c18.8,0,33.97-15.76,33-34.75c-0.01-0.12-0.01-0.24-0.01-0.36c0-5.76,7.18-8.61,11.12-4.25c6.56,7.27,15.56,10.91,24.55,10.91&#10;&#9;&#9;&#9;c3.65,0,7.29-0.6,10.77-1.79l41.28,105.96C274.88,385.07,268.11,396.46,268.77,409.35z"\r\n      />\r\n    </g>\r\n    <g>\r\n      <line\r\n        style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        "\r\n        x1="230.156"\r\n        y1="339.714"\r\n        x2="230.156"\r\n        y2="311.299"\r\n      />\r\n\r\n      <line\r\n        style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        "\r\n        x1="230.156"\r\n        y1="364.644"\r\n        x2="230.156"\r\n        y2="366.646"\r\n      />\r\n    </g>\r\n    <g>\r\n      <line\r\n        style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        "\r\n        x1="240.429"\r\n        y1="83.83"\r\n        x2="258.124"\r\n        y2="83.83"\r\n      />\r\n\r\n      <line\r\n        style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        "\r\n        x1="248.276"\r\n        y1="107.911"\r\n        x2="265.97"\r\n        y2="107.911"\r\n      />\r\n    </g>\r\n  </g>\r\n</svg>\r\n';

  const Comic1SpecialFlat =
    '<svg\r\n  id="Capa_1"\r\n  enable-background="new 0 0 512 512"\r\n  height="512"\r\n  viewBox="0 0 512 512"\r\n  width="512"\r\n  xmlns="http://www.w3.org/2000/svg"\r\n>\r\n  <g>\r\n    <g>\r\n      <g>\r\n        <path\r\n          d="m427.508 512h-343.02c-5.69 0-10.302-4.612-10.302-10.302v-491.396c0-5.69 4.612-10.302 10.302-10.302h343.02c5.69 0 10.302 4.612 10.302 10.302v491.396c-.001 5.69-4.613 10.302-10.302 10.302z"\r\n          fill="#f2eff2"\r\n        />\r\n      </g>\r\n    </g>\r\n    <path\r\n      d="m427.512 0h-41.238c5.687 0 10.302 4.615 10.302 10.302v41.156l-18.039 71.714 18.039 81.268v46.358l-18.039 45.164 18.039 24.847v46.358l-10.302 61.227 10.302 32.149v41.156c0 5.687-4.615 10.302-10.302 10.302h41.238c5.687 0 10.302-4.615 10.302-10.302v-491.397c0-5.687-4.615-10.302-10.302-10.302z"\r\n      fill="#e1dde1"\r\n    />\r\n    <g>\r\n      <path\r\n        d="m243.51 273.63-47.48 104.08-80.61-10.85v-315.4c0-2.85 2.31-5.15 5.15-5.15h30.86c2.13 0 4.03 1.29 4.8 3.27z"\r\n        fill="#3ad1e0"\r\n      />\r\n      <path\r\n        d="m243.51 273.63-16.68 36.56-101.52-260.61c-.76-1.95-2.64-3.25-4.74-3.27h30.86c2.13 0 4.03 1.29 4.8 3.27z"\r\n        fill="#22c7db"\r\n      />\r\n      <path\r\n        d="m310.81 465.69h-190.24c-2.84 0-5.15-2.3-5.15-5.15v-93.68c25.18-34.92 65.99-57.81 112.19-58.37l-16.07 35.21 74.5 39.08 29.56 75.9c1.32 3.37-1.17 7.01-4.79 7.01z"\r\n        fill="#fb33a8"\r\n      />\r\n      <path\r\n        d="m310.81 465.69h-30.92c3.61 0 6.11-3.64 4.79-7.01l-12.92-33.17c-1.92 4.55-2.88 9.61-2.61 14.91.01.13.01.25.01.38 0 5.92-7.39 8.87-11.45 4.36-6.77-7.49-16.03-11.24-25.29-11.24s-18.54 3.75-25.29 11.24c-1.36 1.52-3.11 2.19-4.83 2.19-3.48 0-6.84-2.78-6.62-6.93.03-.59.04-1.18.04-1.77 0-19.36-16.23-34.99-35.81-33.99-.12.01-.24.01-.37.01-5.92 0-8.87-7.4-4.37-11.46 7.49-6.76 11.24-16.03 11.24-25.29s-3.75-18.52-11.24-25.29c-1.51-1.36-2.18-3.1-2.18-4.81 0-3.48 2.78-6.84 6.92-6.64.6.04 1.19.05 1.77.05 12.81 0 23.98-7.11 29.79-17.57l34.29-1.12-14.22 31.16 74.5 39.08 29.56 75.9c1.32 3.37-1.17 7.01-4.79 7.01z"\r\n        fill="#fb33a8"\r\n      />\r\n      <path\r\n        d="m396.58 51.46v152.98c0 2.84-2.31 5.15-5.15 5.15h-32l-40.41-29.31-40.41 29.31h-17.82c-2.12 0-4.03-1.3-4.8-3.28l-59.6-152.98c-1.32-3.38 1.18-7.02 4.79-7.02h190.25c2.84 0 5.15 2.3 5.15 5.15z"\r\n        fill="#fcb44d"\r\n      />\r\n      <path\r\n        d="m396.576 51.457v152.982c0 2.843-2.308 5.151-5.151 5.151h-30.927c2.843 0 5.151-2.308 5.151-5.151v-152.982c0-2.843-2.308-5.151-5.151-5.151h30.927c2.843.001 5.151 2.308 5.151 5.151z"\r\n        fill="#fb9927"\r\n      />\r\n      <g>\r\n        <path\r\n          d="m359.428 181.065v28.526h-80.818v-28.526c0-22.324 18.1-40.414 40.414-40.414 11.157 0 21.263 4.522 28.567 11.837 7.314 7.314 11.837 17.409 11.837 28.577z"\r\n          fill="#ae6ad8"\r\n        />\r\n        <path\r\n          d="m359.43 181.065v28.526h-29.237v-28.526c0-11.167-4.522-21.263-11.837-28.577-3.935-3.935-8.674-7.067-13.949-9.107 4.533-1.762 9.467-2.73 14.618-2.73 11.157 0 21.263 4.522 28.567 11.837 7.316 7.314 11.838 17.409 11.838 28.577z"\r\n          fill="#975bbb"\r\n        />\r\n        <g>\r\n          <g>\r\n            <circle\r\n              cx="319.023"\r\n              cy="121.497"\r\n              fill="#f2eff2"\r\n              r="26.224"\r\n            />\r\n          </g>\r\n        </g>\r\n      </g>\r\n      <path\r\n        d="m396.576 250.798v70.011c0 2.845-2.306 5.151-5.151 5.151h-85.311c-2.123 0-4.029-1.303-4.8-3.281l-27.273-70.011c-1.316-3.377 1.175-7.021 4.8-7.021h112.585c2.844 0 5.15 2.306 5.15 5.151z"\r\n        fill="#23f1a8"\r\n      />\r\n      <path\r\n        d="m396.576 250.798v70.011c0 2.843-2.308 5.151-5.151 5.151h-30.927c2.843 0 5.151-2.308 5.151-5.151v-70.011c0-2.843-2.308-5.151-5.151-5.151h30.927c2.843 0 5.151 2.307 5.151 5.151z"\r\n        fill="#27e19d"\r\n      />\r\n      <path\r\n        d="m324.179 362.016h67.246c2.845 0 5.151 2.306 5.151 5.151v93.376c0 2.845-2.306 5.151-5.151 5.151h-30.866c-2.123 0-4.029-1.303-4.799-3.281l-36.38-93.376c-1.316-3.377 1.175-7.021 4.799-7.021z"\r\n        fill="#23f1a8"\r\n      />\r\n      <path\r\n        d="m396.576 367.167v93.376c0 2.843-2.308 5.151-5.151 5.151h-30.927c2.843 0 5.151-2.308 5.151-5.151v-93.376c0-2.843-2.308-5.151-5.151-5.151h30.927c2.843 0 5.151 2.308 5.151 5.151z"\r\n        fill="#27e19d"\r\n      />\r\n    </g>\r\n    <g>\r\n      <path\r\n        d="m269.153 413.978c.01.124.01.247.01.371 0 5.924-7.397 8.87-11.456 4.368-6.768-7.489-16.03-11.239-25.291-11.239s-18.533 3.75-25.291 11.239c-1.36 1.514-3.101 2.184-4.821 2.184-3.482 0-6.84-2.782-6.624-6.923.031-.597.041-1.185.041-1.772 0-19.367-16.236-34.995-35.809-33.996-.124.01-.247.01-.371.01-5.924 0-8.87-7.397-4.368-11.456 7.489-6.758 11.239-16.03 11.239-25.291s-3.75-18.523-11.239-25.291c-1.514-1.36-2.184-3.101-2.184-4.811 0-3.482 2.782-6.84 6.923-6.634.597.031 1.185.041 1.772.041 19.367 0 34.995-16.236 33.996-35.799-.01-.124-.01-.247-.01-.371 0-5.934 7.397-8.87 11.456-4.378 6.758 7.489 16.03 11.239 25.291 11.239 3.76 0 7.51-.618 11.095-1.844l42.526 109.158c-10.591 6.183-17.565 17.916-16.885 31.195z"\r\n        fill="#fdef63"\r\n      />\r\n      <path\r\n        d="m268.516 417.19c.406-.839.648-1.79.648-2.841 0-.123 0-.247-.01-.371-.68-13.279 6.294-25.013 16.885-31.194l-42.526-109.158c-3.585 1.226-7.335 1.844-11.095 1.844-7.992 0-15.988-2.799-22.374-8.378z"\r\n        fill="#f3d730"\r\n      />\r\n    </g>\r\n    <g>\r\n      <g>\r\n        <path\r\n          d="m229.374 349.967c-4.267 0-7.726-3.459-7.726-7.726v-29.272c0-4.267 3.459-7.726 7.726-7.726s7.726 3.459 7.726 7.726v29.272c0 4.267-3.459 7.726-7.726 7.726z"\r\n          fill="#554e55"\r\n        />\r\n      </g>\r\n      <g>\r\n        <path\r\n          d="m229.374 377.711c-4.267 0-7.726-3.459-7.726-7.726v-2.061c0-4.267 3.459-7.726 7.726-7.726s7.726 3.459 7.726 7.726v2.061c0 4.267-3.459 7.726-7.726 7.726z"\r\n          fill="#554e55"\r\n        />\r\n      </g>\r\n    </g>\r\n    <g>\r\n      <g>\r\n        <path\r\n          d="m258.185 86.361h-18.228c-4.267 0-7.726-3.459-7.726-7.726s3.459-7.726 7.726-7.726h18.228c4.267 0 7.726 3.459 7.726 7.726 0 4.266-3.459 7.726-7.726 7.726z"\r\n          fill="#f2eff2"\r\n        />\r\n      </g>\r\n      <g>\r\n        <path\r\n          d="m266.269 111.168h-18.229c-4.267 0-7.726-3.459-7.726-7.726s3.459-7.726 7.726-7.726h18.228c4.267 0 7.726 3.459 7.726 7.726s-3.458 7.726-7.725 7.726z"\r\n          fill="#f2eff2"\r\n        />\r\n      </g>\r\n    </g>\r\n  </g>\r\n</svg>\r\n';

  const Comic2SpecialLinealColor =
    '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\r\n<!-- Created with Inkscape (http://www.inkscape.org/) -->\r\n\r\n<svg\r\n  version="1.1"\r\n  id="svg5007"\r\n  xml:space="preserve"\r\n  width="682.66669"\r\n  height="682.66669"\r\n  viewBox="0 0 682.66669 682.66669"\r\n  xmlns="http://www.w3.org/2000/svg"\r\n>\r\n  <defs id="defs5011">\r\n    <clipPath\r\n      clipPathUnits="userSpaceOnUse"\r\n      id="clipPath5021"\r\n    >\r\n      <path\r\n        d="M 0,512 H 512 V 0 H 0 Z"\r\n        id="path5019"\r\n      />\r\n    </clipPath>\r\n  </defs>\r\n  <g\r\n    id="g5013"\r\n    transform="matrix(1.3333333,0,0,-1.3333333,0,682.66667)"\r\n  >\r\n    <g id="g5015">\r\n      <g\r\n        id="g5017"\r\n        clip-path="url(#clipPath5021)"\r\n      >\r\n        <g\r\n          id="g5023"\r\n          transform="translate(446,7.5)"\r\n        >\r\n          <path\r\n            d="m 0,0 h -380 c -11.046,0 -20,8.954 -20,20 v 457 c 0,11.046 8.954,20 20,20 H 0 c 11.046,0 20,-8.954 20,-20 V 20 C 20,8.954 11.046,0 0,0"\r\n            style="fill: #efe6e6; fill-opacity: 1; fill-rule: nonzero; stroke: none"\r\n            id="path5025"\r\n          />\r\n        </g>\r\n        <g\r\n          id="g5027"\r\n          transform="translate(465.9996,47.5)"\r\n        >\r\n          <path\r\n            d="m 0,0 c -209.868,0 -380,170.132 -380,380 v 77 h -20 c -11.045,0 -20,-8.954 -20,-20 V -20 c 0,-11.046 8.955,-20 20,-20 h 380 c 11.046,0 20,8.954 20,20 z"\r\n            style="fill: #e2d7d7; fill-opacity: 1; fill-rule: nonzero; stroke: none"\r\n            id="path5029"\r\n          />\r\n        </g>\r\n        <g\r\n          id="g5031"\r\n          transform="translate(236,199.8333)"\r\n        >\r\n          <path\r\n            d="M 0,0 H 190 V 264.667 H 80 Z"\r\n            style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none"\r\n            id="path5033"\r\n          />\r\n        </g>\r\n        <g\r\n          id="g5035"\r\n          transform="translate(236,199.8333)"\r\n        >\r\n          <path\r\n            d="M 0,0 H 190 V 264.667 H 80 Z"\r\n            style="fill: #5ad6ff; fill-opacity: 1; fill-rule: nonzero; stroke: none"\r\n            id="path5037"\r\n          />\r\n        </g>\r\n        <g\r\n          id="g5039"\r\n          transform="translate(86,199.8333)"\r\n        >\r\n          <path\r\n            d="m 0,0 h 110 l 80,264.667 H 0 Z"\r\n            style="fill: #f4e74d; fill-opacity: 1; fill-rule: nonzero; stroke: none"\r\n            id="path5041"\r\n          />\r\n        </g>\r\n        <g\r\n          id="g5043"\r\n          transform="translate(86,427.4996)"\r\n        >\r\n          <path\r\n            d="M 0,0 V -227.666 H 75.725 C 28.171,-164.213 0,-85.397 0,0"\r\n            style="fill: #eedb00; fill-opacity: 1; fill-rule: nonzero; stroke: none"\r\n            id="path5045"\r\n          />\r\n        </g>\r\n        <path\r\n          d="M 426,47.5 H 86 v 112.333 h 340 z"\r\n          style="fill: #b18cd9; fill-opacity: 1; fill-rule: nonzero; stroke: none"\r\n          id="path5047"\r\n        />\r\n        <g\r\n          id="g5049"\r\n          transform="translate(196.2775,159.8334)"\r\n        >\r\n          <path\r\n            d="m 0,0 h -110.278 v -112.333 h 340 v 2.085 C 140.254,-100.888 60.026,-60.484 0,0"\r\n            style="fill: #996acc; fill-opacity: 1; fill-rule: nonzero; stroke: none"\r\n            id="path5051"\r\n          />\r\n        </g>\r\n        <g\r\n          id="g5053"\r\n          transform="translate(214.5152,99.0695)"\r\n        >\r\n          <path\r\n            d="m 0,0 c 0,-10.669 -10.861,-19.318 -24.258,-19.318 -13.397,0 -24.257,8.649 -24.257,19.318 0,10.669 10.86,19.317 24.257,19.317 C -10.861,19.317 0,10.669 0,0"\r\n            style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none"\r\n            id="path5055"\r\n          />\r\n        </g>\r\n        <g\r\n          id="g5057"\r\n          transform="translate(297.4848,99.0695)"\r\n        >\r\n          <path\r\n            d="m 0,0 c 0,-10.669 10.861,-19.318 24.258,-19.318 13.397,0 24.257,8.649 24.257,19.318 0,10.669 -10.86,19.317 -24.257,19.317 C 10.861,19.317 0,10.669 0,0"\r\n            style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none"\r\n            id="path5059"\r\n          />\r\n        </g>\r\n        <g\r\n          id="g5061"\r\n          transform="translate(204.3949,127.5815)"\r\n        >\r\n          <path\r\n            d="M 0,0 V -9.916"\r\n            style="\r\n              fill: none;\r\n              stroke: #000000;\r\n              stroke-width: 15;\r\n              stroke-linecap: round;\r\n              stroke-linejoin: round;\r\n              stroke-miterlimit: 10;\r\n              stroke-dasharray: none;\r\n              stroke-opacity: 1;\r\n            "\r\n            id="path5063"\r\n          />\r\n        </g>\r\n        <g\r\n          id="g5065"\r\n          transform="translate(307.605,127.5815)"\r\n        >\r\n          <path\r\n            d="M 0,0 V -9.916"\r\n            style="\r\n              fill: none;\r\n              stroke: #000000;\r\n              stroke-width: 15;\r\n              stroke-linecap: round;\r\n              stroke-linejoin: round;\r\n              stroke-miterlimit: 10;\r\n              stroke-dasharray: none;\r\n              stroke-opacity: 1;\r\n            "\r\n            id="path5067"\r\n          />\r\n        </g>\r\n        <g\r\n          id="g5069"\r\n          transform="translate(242.3946,117.9604)"\r\n        >\r\n          <path\r\n            d="m 0,0 c 3.308,-3.796 8.175,-6.198 13.605,-6.198 5.431,0 10.298,2.402 13.606,6.198"\r\n            style="\r\n              fill: none;\r\n              stroke: #000000;\r\n              stroke-width: 15;\r\n              stroke-linecap: round;\r\n              stroke-linejoin: round;\r\n              stroke-miterlimit: 10;\r\n              stroke-dasharray: none;\r\n              stroke-opacity: 1;\r\n            "\r\n            id="path5071"\r\n          />\r\n        </g>\r\n        <g\r\n          id="g5073"\r\n          transform="translate(153.1665,442.2645)"\r\n        >\r\n          <path\r\n            d="m 0,0 32.456,22.235 h -99.623 v -156.568 l 20.756,70.454 58.203,-44.799 -24.62,69.199 73.42,-2.032 z"\r\n            style="fill: #fd5c6f; fill-opacity: 1; fill-rule: nonzero; stroke: none"\r\n            id="path5075"\r\n          />\r\n        </g>\r\n        <g\r\n          id="g5077"\r\n          transform="translate(86,427.4996)"\r\n        >\r\n          <path\r\n            d="m 0,0 v -119.568 l 9.825,33.351 C 3.399,-58.516 0,-29.655 0,0"\r\n            style="fill: #f6334c; fill-opacity: 1; fill-rule: nonzero; stroke: none"\r\n            id="path5079"\r\n          />\r\n        </g>\r\n        <g\r\n          id="g5081"\r\n          transform="translate(426,270.6974)"\r\n        >\r\n          <path\r\n            d="m 0,0 -56.008,-43.108 23.692,66.587 -70.65,-1.955 58.306,39.945 -58.306,39.945 70.65,-1.955 -23.692,66.588 L 0,122.939 Z"\r\n            style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none"\r\n            id="path5083"\r\n          />\r\n        </g>\r\n        <g\r\n          id="g5085"\r\n          transform="translate(446,7.5)"\r\n        >\r\n          <path\r\n            d="m 0,0 h -380 c -11.046,0 -20,8.954 -20,20 v 457 c 0,11.046 8.954,20 20,20 H 0 c 11.046,0 20,-8.954 20,-20 V 20 C 20,8.954 11.046,0 0,0 Z"\r\n            style="\r\n              fill: none;\r\n              stroke: #000000;\r\n              stroke-width: 15;\r\n              stroke-linecap: round;\r\n              stroke-linejoin: round;\r\n              stroke-miterlimit: 10;\r\n              stroke-dasharray: none;\r\n              stroke-opacity: 1;\r\n            "\r\n            id="path5087"\r\n          />\r\n        </g>\r\n        <g\r\n          id="g5089"\r\n          transform="translate(426,346.167)"\r\n        >\r\n          <path\r\n            d="m 0,0 v 118.333 h -110 l -80,-264.667 H 0 V -28"\r\n            style="\r\n              fill: none;\r\n              stroke: #000000;\r\n              stroke-width: 15;\r\n              stroke-linecap: round;\r\n              stroke-linejoin: round;\r\n              stroke-miterlimit: 10;\r\n              stroke-dasharray: none;\r\n              stroke-opacity: 1;\r\n            "\r\n            id="path5091"\r\n          />\r\n        </g>\r\n        <g\r\n          id="g5093"\r\n          transform="translate(86,199.8333)"\r\n        >\r\n          <path\r\n            d="m 0,0 h 110 l 80,264.667 H 0 Z"\r\n            style="\r\n              fill: none;\r\n              stroke: #000000;\r\n              stroke-width: 15;\r\n              stroke-linecap: round;\r\n              stroke-linejoin: round;\r\n              stroke-miterlimit: 10;\r\n              stroke-dasharray: none;\r\n              stroke-opacity: 1;\r\n            "\r\n            id="path5095"\r\n          />\r\n        </g>\r\n        <g\r\n          id="g5097"\r\n          transform="translate(154.0172,159.8334)"\r\n        >\r\n          <path\r\n            d="m 0,0 h 271.983 v -112.333 h -340 V 0 H -28"\r\n            style="\r\n              fill: none;\r\n              stroke: #000000;\r\n              stroke-width: 15;\r\n              stroke-linecap: round;\r\n              stroke-linejoin: round;\r\n              stroke-miterlimit: 10;\r\n              stroke-dasharray: none;\r\n              stroke-opacity: 1;\r\n            "\r\n            id="path5099"\r\n          />\r\n        </g>\r\n        <g\r\n          id="g5101"\r\n          transform="translate(86,307.9314)"\r\n        >\r\n          <path\r\n            d="m 0,0 20.756,70.454 58.203,-44.799 -24.62,69.199 73.419,-2.032 -60.591,41.511 32.455,22.236"\r\n            style="\r\n              fill: none;\r\n              stroke: #000000;\r\n              stroke-width: 15;\r\n              stroke-linecap: round;\r\n              stroke-linejoin: round;\r\n              stroke-miterlimit: 10;\r\n              stroke-dasharray: none;\r\n              stroke-opacity: 1;\r\n            "\r\n            id="path5103"\r\n          />\r\n        </g>\r\n        <g\r\n          id="g5105"\r\n          transform="translate(426,270.6974)"\r\n        >\r\n          <path\r\n            d="m 0,0 -56.008,-43.108 23.692,66.587 -70.65,-1.955 58.306,39.945 -58.306,39.945 70.65,-1.955 -23.692,66.588 L 0,122.939"\r\n            style="\r\n              fill: none;\r\n              stroke: #000000;\r\n              stroke-width: 15;\r\n              stroke-linecap: round;\r\n              stroke-linejoin: round;\r\n              stroke-miterlimit: 10;\r\n              stroke-dasharray: none;\r\n              stroke-opacity: 1;\r\n            "\r\n            id="path5107"\r\n          />\r\n        </g>\r\n      </g>\r\n    </g>\r\n  </g>\r\n</svg>\r\n';

  const Comic2SpecialFlat =
    '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\r\n<!-- Created with Inkscape (http://www.inkscape.org/) -->\r\n\r\n<svg\r\n  version="1.1"\r\n  id="svg3390"\r\n  xml:space="preserve"\r\n  width="682.66669"\r\n  height="682.66669"\r\n  viewBox="0 0 682.66669 682.66669"\r\n  xmlns="http://www.w3.org/2000/svg"\r\n>\r\n  <defs id="defs3394">\r\n    <clipPath\r\n      clipPathUnits="userSpaceOnUse"\r\n      id="clipPath3404"\r\n    >\r\n      <path\r\n        d="M 0,512 H 512 V 0 H 0 Z"\r\n        id="path3402"\r\n      />\r\n    </clipPath>\r\n  </defs>\r\n  <g\r\n    id="g3396"\r\n    transform="matrix(1.3333333,0,0,-1.3333333,0,682.66667)"\r\n  >\r\n    <g id="g3398">\r\n      <g\r\n        id="g3400"\r\n        clip-path="url(#clipPath3404)"\r\n      >\r\n        <g\r\n          id="g3406"\r\n          transform="translate(451.7344)"\r\n        >\r\n          <path\r\n            d="m 0,0 h -391.469 c -11.379,0 -20.603,9.225 -20.603,20.604 v 470.792 c 0,11.379 9.224,20.604 20.603,20.604 L 0,512 c 11.379,0 20.604,-9.225 20.604,-20.604 V 20.604 C 20.604,9.225 11.379,0 0,0"\r\n            style="fill: #efe6e6; fill-opacity: 1; fill-rule: nonzero; stroke: none"\r\n            id="path3408"\r\n          />\r\n        </g>\r\n        <g\r\n          id="g3410"\r\n          transform="translate(472.3376,41.2072)"\r\n        >\r\n          <path\r\n            d="m 0,0 c -216.202,0 -391.468,175.266 -391.468,391.468 v 79.325 h -20.604 c -11.379,0 -20.604,-9.225 -20.604,-20.604 V -20.604 c 0,-11.379 9.225,-20.603 20.604,-20.603 H -20.603 C -9.224,-41.207 0,-31.983 0,-20.604 Z"\r\n            style="fill: #e2d7d7; fill-opacity: 1; fill-rule: nonzero; stroke: none"\r\n            id="path3412"\r\n          />\r\n        </g>\r\n        <g\r\n          id="g3414"\r\n          transform="translate(235.3964,198.1382)"\r\n        >\r\n          <path\r\n            d="M 0,0 H 195.734 V 272.655 H 82.414 Z"\r\n            style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none"\r\n            id="path3416"\r\n          />\r\n        </g>\r\n        <g\r\n          id="g3418"\r\n          transform="translate(235.3964,198.1382)"\r\n        >\r\n          <path\r\n            d="M 0,0 H 195.734 V 272.655 H 82.414 Z"\r\n            style="fill: #5ad6ff; fill-opacity: 1; fill-rule: nonzero; stroke: none"\r\n            id="path3420"\r\n          />\r\n        </g>\r\n        <g\r\n          id="g3422"\r\n          transform="translate(80.8692,198.1382)"\r\n        >\r\n          <path\r\n            d="m 0,0 h 113.32 l 82.414,272.655 H 0 Z"\r\n            style="fill: #f4e74d; fill-opacity: 1; fill-rule: nonzero; stroke: none"\r\n            id="path3424"\r\n          />\r\n        </g>\r\n        <g\r\n          id="g3426"\r\n          transform="translate(80.8692,432.6757)"\r\n        >\r\n          <path\r\n            d="M 0,0 V -234.537 H 78.01 C 29.021,-169.169 0,-87.974 0,0"\r\n            style="fill: #eedb00; fill-opacity: 1; fill-rule: nonzero; stroke: none"\r\n            id="path3428"\r\n          />\r\n        </g>\r\n        <path\r\n          d="M 431.131,41.207 H 80.869 v 115.724 h 350.262 z"\r\n          style="fill: #b18cd9; fill-opacity: 1; fill-rule: nonzero; stroke: none"\r\n          id="path3430"\r\n        />\r\n        <g\r\n          id="g3432"\r\n          transform="translate(194.475,156.931)"\r\n        >\r\n          <path\r\n            d="m 0,0 h -113.606 v -115.724 h 350.262 v 2.149 C 144.487,-103.933 61.838,-62.31 0,0"\r\n            style="fill: #996acc; fill-opacity: 1; fill-rule: nonzero; stroke: none"\r\n            id="path3434"\r\n          />\r\n        </g>\r\n        <g\r\n          id="g3436"\r\n          transform="translate(213.2632,94.3332)"\r\n        >\r\n          <path\r\n            d="m 0,0 c 0,-10.991 -11.188,-19.901 -24.99,-19.901 -13.801,0 -24.989,8.91 -24.989,19.901 0,10.991 11.188,19.9 24.989,19.9 C -11.188,19.9 0,10.991 0,0"\r\n            style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none"\r\n            id="path3438"\r\n          />\r\n        </g>\r\n        <g\r\n          id="g3440"\r\n          transform="translate(298.7368,94.3332)"\r\n        >\r\n          <path\r\n            d="m 0,0 c 0,-10.991 11.188,-19.901 24.99,-19.901 13.801,0 24.989,8.91 24.989,19.901 0,10.991 -11.188,19.9 -24.989,19.9 C 11.188,19.9 0,10.991 0,0"\r\n            style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none"\r\n            id="path3442"\r\n          />\r\n        </g>\r\n        <g\r\n          id="g3444"\r\n          transform="translate(202.8374,123.7057)"\r\n        >\r\n          <path\r\n            d="M 0,0 V -10.216"\r\n            style="\r\n              fill: none;\r\n              stroke: #3d4751;\r\n              stroke-width: 15;\r\n              stroke-linecap: round;\r\n              stroke-linejoin: round;\r\n              stroke-miterlimit: 10;\r\n              stroke-dasharray: none;\r\n              stroke-opacity: 1;\r\n            "\r\n            id="path3446"\r\n          />\r\n        </g>\r\n        <g\r\n          id="g3448"\r\n          transform="translate(309.1625,123.7057)"\r\n        >\r\n          <path\r\n            d="M 0,0 V -10.216"\r\n            style="\r\n              fill: none;\r\n              stroke: #3d4751;\r\n              stroke-width: 15;\r\n              stroke-linecap: round;\r\n              stroke-linejoin: round;\r\n              stroke-miterlimit: 10;\r\n              stroke-dasharray: none;\r\n              stroke-opacity: 1;\r\n            "\r\n            id="path3450"\r\n          />\r\n        </g>\r\n        <g\r\n          id="g3452"\r\n          transform="translate(241.984,113.7942)"\r\n        >\r\n          <path\r\n            d="m 0,0 c 3.408,-3.911 8.421,-6.385 14.016,-6.385 5.595,0 10.608,2.474 14.016,6.385"\r\n            style="\r\n              fill: none;\r\n              stroke: #3d4751;\r\n              stroke-width: 15;\r\n              stroke-linecap: round;\r\n              stroke-linejoin: round;\r\n              stroke-miterlimit: 10;\r\n              stroke-dasharray: none;\r\n              stroke-opacity: 1;\r\n            "\r\n            id="path3454"\r\n          />\r\n        </g>\r\n        <g\r\n          id="g3456"\r\n          transform="translate(150.0629,447.8862)"\r\n        >\r\n          <path\r\n            d="m 0,0 33.436,22.907 h -102.63 v -161.294 l 21.382,72.58 59.96,-46.151 -25.363,71.287 75.636,-2.093 z"\r\n            style="fill: #fd5c6f; fill-opacity: 1; fill-rule: nonzero; stroke: none"\r\n            id="path3458"\r\n          />\r\n        </g>\r\n        <g\r\n          id="g3460"\r\n          transform="translate(80.8692,432.6757)"\r\n        >\r\n          <path\r\n            d="m 0,0 v -123.177 l 10.122,34.358 C 3.502,-60.282 0,-30.55 0,0"\r\n            style="fill: #f6334c; fill-opacity: 1; fill-rule: nonzero; stroke: none"\r\n            id="path3462"\r\n          />\r\n        </g>\r\n        <g\r\n          id="g3464"\r\n          transform="translate(431.1308,271.141)"\r\n        >\r\n          <path\r\n            d="m 0,0 -57.698,-44.41 24.406,68.598 -72.782,-2.014 60.066,41.15 -60.066,41.151 72.782,-2.014 -24.406,68.597 L 0,126.649 Z"\r\n            style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none"\r\n            id="path3466"\r\n          />\r\n        </g>\r\n      </g>\r\n    </g>\r\n  </g>\r\n</svg>\r\n';

  const Comic3SpecialLinealColor =
    '<?xml version="1.0" encoding="UTF-8"?>\r\n<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  version="1.1"\r\n  id="Capa_1"\r\n  x="0px"\r\n  y="0px"\r\n  viewBox="0 0 512 512"\r\n  style="enable-background: new 0 0 512 512"\r\n  xml:space="preserve"\r\n  width="512"\r\n  height="512"\r\n>\r\n  <g>\r\n    <g>\r\n      <g>\r\n        <path\r\n          style="fill: #f2eff2"\r\n          d="M422.485,504.5H89.515c-5.523,0-10-4.477-10-10v-477c0-5.523,4.477-10,10-10h332.971&#10;&#9;&#9;&#9;&#9;c5.523,0,10,4.477,10,10v477C432.485,500.023,428.008,504.5,422.485,504.5z"\r\n        />\r\n      </g>\r\n    </g>\r\n    <g>\r\n      <g>\r\n        <path\r\n          style="fill: #e1dde1"\r\n          d="M432.49,17.5v477c0,5.52-4.48,10-10,10h-40.03c5.52,0,10-4.48,10-10v-477c0-5.52-4.48-10-10-10&#10;&#9;&#9;&#9;&#9;h40.03C428.01,7.5,432.49,11.98,432.49,17.5z"\r\n        />\r\n      </g>\r\n    </g>\r\n    <g>\r\n      <path\r\n        style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        "\r\n        d="&#10;&#9;&#9;&#9;M158.639,7.5H89.515c-5.523,0-10,4.477-10,10v477c0,5.523,4.477,10,10,10h332.971c5.523,0,10-4.477,10-10v-477&#10;&#9;&#9;&#9;c0-5.523-4.477-10-10-10H191.801"\r\n      />\r\n    </g>\r\n    <path\r\n      style="fill: #3ad1e0"\r\n      d="M392.482,52.5v83.99c0,2.761-2.239,5-5,5H241.866c-2.761,0-5-2.239-5-5V52.5c0-2.761,2.239-5,5-5&#10;&#9;&#9;h145.617C390.244,47.5,392.482,49.739,392.482,52.5z"\r\n    />\r\n    <path\r\n      style="fill: #20bfd5"\r\n      d="M392.482,52.5v83.99c0,2.76-2.24,5-5,5h-30.02c2.76,0,5-2.24,5-5V52.5c0-2.76-2.24-5-5-5h30.02&#10;&#9;&#9;C390.242,47.5,392.482,49.74,392.482,52.5z"\r\n    />\r\n    <path\r\n      style="fill: #26d192"\r\n      d="M280.6,47.5h-38.735c-2.761,0-5,2.239-5,5v83.99c0,2.761,2.239,5,5,5H280.6V47.5z"\r\n    />\r\n\r\n    <line\r\n      style="\r\n        fill: none;\r\n        stroke: #000000;\r\n        stroke-width: 15;\r\n        stroke-linecap: round;\r\n        stroke-linejoin: round;\r\n        stroke-miterlimit: 10;\r\n      "\r\n      x1="280.6"\r\n      y1="141.49"\r\n      x2="280.6"\r\n      y2="47.5"\r\n    />\r\n    <path\r\n      style="fill: #23f1a8"\r\n      d="M124.512,370.51h125.143c1.706,0,3.295,0.87,4.214,2.308l53.65,83.99&#10;&#9;&#9;c2.126,3.328-0.264,7.692-4.214,7.692H124.512c-2.761,0-5-2.239-5-5v-83.99C119.512,372.749,121.751,370.51,124.512,370.51z"\r\n    />\r\n    <g>\r\n      <path\r\n        style="fill: #ae6ad8"\r\n        d="M227.87,437.622V464.5h-76.148v-26.878c0-21.034,17.054-38.079,38.079-38.079&#10;&#9;&#9;&#9;c10.512,0,20.034,4.261,26.916,11.153C223.609,417.588,227.87,427.1,227.87,437.622z"\r\n      />\r\n      <path\r\n        style="fill: #975bbb"\r\n        d="M227.872,437.62v26.88h-28.21v-26.88c0-10.52-4.26-20.03-11.15-26.92&#10;&#9;&#9;&#9;c-3.62-3.63-7.97-6.53-12.82-8.46c4.36-1.74,9.13-2.7,14.11-2.7c10.51,0,20.03,4.26,26.92,11.16&#10;&#9;&#9;&#9;C223.612,417.59,227.872,427.1,227.872,437.62z"\r\n      />\r\n      <path\r\n        style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        "\r\n        d="&#10;&#9;&#9;&#9;M151.722,464.5v-26.878c0-21.034,17.054-38.079,38.079-38.079c10.512,0,20.034,4.261,26.916,11.153&#10;&#9;&#9;&#9;c6.892,6.892,11.153,16.404,11.153,26.926V464.5"\r\n      />\r\n    </g>\r\n    <path\r\n      style="fill: #27e19d"\r\n      d="M303.302,464.5h-30.02c3.95,0,6.34-4.36,4.22-7.69l-53.65-83.99c-0.92-1.44-2.51-2.31-4.22-2.31&#10;&#9;&#9;h30.02c1.71,0,3.3,0.87,4.22,2.31l53.65,83.99C309.642,460.14,307.252,464.5,303.302,464.5z"\r\n    />\r\n    <path\r\n      style="fill: #ae6ad8"\r\n      d="M387.482,370.51h-78.73c-3.949,0-6.34,4.363-4.214,7.692l53.65,83.99&#10;&#9;&#9;c0.919,1.438,2.507,2.308,4.214,2.308h25.08c2.761,0,5-2.239,5-5v-83.99C392.482,372.749,390.244,370.51,387.482,370.51z"\r\n    />\r\n    <path\r\n      style="fill: #975bbb"\r\n      d="M392.482,375.51v83.99c0,2.76-2.24,5-5,5h-25.08c-0.88,0-1.72-0.23-2.46-0.66&#10;&#9;&#9;c1.51-0.86,2.52-2.48,2.52-4.34v-83.99c0-2.76-2.24-5-5-5h30.02C390.242,370.51,392.482,372.75,392.482,375.51z"\r\n    />\r\n    <path\r\n      style="\r\n        fill: none;\r\n        stroke: #000000;\r\n        stroke-width: 15;\r\n        stroke-linecap: round;\r\n        stroke-linejoin: round;\r\n        stroke-miterlimit: 10;\r\n      "\r\n      d="&#10;&#9;&#9;M392.482,52.5v83.99c0,2.761-2.239,5-5,5H241.866c-2.761,0-5-2.239-5-5V52.5c0-2.761,2.239-5,5-5h145.617&#10;&#9;&#9;C390.244,47.5,392.482,49.739,392.482,52.5z"\r\n    />\r\n    <g>\r\n      <path\r\n        style="fill: #3ad1e0"\r\n        d="M197.374,52.5v83.99c0,2.761-2.239,5-5,5h-67.862c-2.761,0-5-2.239-5-5V52.5c0-2.761,2.239-5,5-5&#10;&#9;&#9;&#9;h67.862C195.135,47.5,197.374,49.739,197.374,52.5z"\r\n      />\r\n      <path\r\n        style="fill: #20bfd5"\r\n        d="M197.372,52.5v83.99c0,2.76-2.24,5-5,5h-30.02c2.76,0,5-2.24,5-5V52.5c0-2.76-2.24-5-5-5h30.02&#10;&#9;&#9;&#9;C195.132,47.5,197.372,49.74,197.372,52.5z"\r\n      />\r\n      <path\r\n        style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        "\r\n        d="&#10;&#9;&#9;&#9;M197.374,52.5v83.99c0,2.761-2.239,5-5,5h-67.862c-2.761,0-5-2.239-5-5V52.5c0-2.761,2.239-5,5-5h67.862&#10;&#9;&#9;&#9;C195.135,47.5,197.374,49.739,197.374,52.5z"\r\n      />\r\n    </g>\r\n    <g>\r\n      <path\r\n        style="fill: #fb54b6"\r\n        d="M124.512,181.49h262.97c2.761,0,5,2.239,5,5v139.02c0,2.761-2.239,5-5,5h-262.97&#10;&#9;&#9;&#9;c-2.761,0-5-2.239-5-5V186.49C119.512,183.729,121.751,181.49,124.512,181.49z"\r\n      />\r\n    </g>\r\n    <path\r\n      style="fill: #fb9927"\r\n      d="M154.537,330.51c0-56.038,45.427-101.465,101.465-101.465s101.465,45.427,101.465,101.465H154.537z"\r\n    />\r\n    <path\r\n      style="fill: #f98824"\r\n      d="M357.462,330.51h-34.36c0-50.18-36.42-91.84-84.28-100.01c5.58-0.95,11.32-1.45,17.18-1.45&#10;&#9;&#9;C312.042,229.05,357.462,274.47,357.462,330.51z"\r\n    />\r\n    <path\r\n      style="\r\n        fill: none;\r\n        stroke: #000000;\r\n        stroke-width: 15;\r\n        stroke-linecap: round;\r\n        stroke-linejoin: round;\r\n        stroke-miterlimit: 10;\r\n      "\r\n      d="&#10;&#9;&#9;M154.537,330.51c0-56.038,45.427-101.465,101.465-101.465s101.465,45.427,101.465,101.465"\r\n    />\r\n    <g>\r\n      <path\r\n        style="fill: #fb33a8"\r\n        d="M392.482,186.49v139.02c0,2.76-2.24,5-5,5h-30.02c2.76,0,5-2.24,5-5V186.49c0-2.76-2.24-5-5-5&#10;&#9;&#9;&#9;h30.02C390.242,181.49,392.482,183.73,392.482,186.49z"\r\n      />\r\n    </g>\r\n    <g>\r\n      <g>\r\n        <path\r\n          style="fill: #fdef63"\r\n          d="M342.812,247.29c-0.14,0-0.29,0-0.44-0.01c-23.32-1.19-42.66,17.42-42.66,40.5&#10;&#9;&#9;&#9;&#9;c0,0.7,0.02,1.4,0.05,2.11c0.26,4.93-3.74,8.24-7.89,8.24c-2.05,0-4.12-0.79-5.74-2.6c-8.05-8.92-19.1-13.39-30.13-13.39&#10;&#9;&#9;&#9;&#9;s-22.08,4.47-30.13,13.39c-1.62,1.81-3.69,2.6-5.74,2.6c-4.15,0-8.15-3.31-7.89-8.24c0.03-0.71,0.04-1.41,0.04-2.11&#10;&#9;&#9;&#9;&#9;c0-23.08-19.34-41.69-42.65-40.5c-0.15,0.01-0.3,0.01-0.45,0.01c-7.05,0-10.56-8.81-5.2-13.65c8.92-8.05,13.39-19.09,13.39-30.13&#10;&#9;&#9;&#9;&#9;c0-7.68-2.16-15.35-6.49-22.02h170.24c-4.33,6.67-6.49,14.34-6.49,22.02c0,11.04,4.47,22.08,13.39,30.13&#10;&#9;&#9;&#9;&#9;C353.382,238.48,349.872,247.29,342.812,247.29z"\r\n        />\r\n        <g>\r\n          <line\r\n            id="XMLID_00000127012381744132405410000009872483291948348836_"\r\n            style="\r\n              fill: none;\r\n              stroke: #000000;\r\n              stroke-width: 15;\r\n              stroke-linecap: round;\r\n              stroke-linejoin: round;\r\n              stroke-miterlimit: 10;\r\n            "\r\n            x1="279.433"\r\n            y1="224.908"\r\n            x2="279.433"\r\n            y2="224.805"\r\n          />\r\n\r\n          <line\r\n            id="XMLID_00000080918978500845250090000017315552773041050031_"\r\n            style="\r\n              fill: none;\r\n              stroke: #000000;\r\n              stroke-width: 15;\r\n              stroke-linecap: round;\r\n              stroke-linejoin: round;\r\n              stroke-miterlimit: 10;\r\n            "\r\n            x1="256.002"\r\n            y1="224.908"\r\n            x2="256.002"\r\n            y2="224.805"\r\n          />\r\n\r\n          <line\r\n            id="XMLID_00000140711681861242238370000008769002181148908969_"\r\n            style="\r\n              fill: none;\r\n              stroke: #000000;\r\n              stroke-width: 15;\r\n              stroke-linecap: round;\r\n              stroke-linejoin: round;\r\n              stroke-miterlimit: 10;\r\n            "\r\n            x1="232.572"\r\n            y1="224.908"\r\n            x2="232.572"\r\n            y2="224.805"\r\n          />\r\n        </g>\r\n        <path\r\n          style="fill: #f3d730"\r\n          d="M342.812,247.3c-0.15,0-0.29,0-0.43-0.02c-23.33-1.19-42.66,17.43-42.66,40.5&#10;&#9;&#9;&#9;&#9;c0,0.7,0.01,1.39,0.05,2.11c0.25,4.93-3.75,8.25-7.89,8.25c-2.06,0-4.13-0.8-5.75-2.61c-6.75-7.46-15.58-11.81-24.76-13.03&#10;&#9;&#9;&#9;&#9;c29.09-14.37,49.1-44.34,49.1-78.98c0-7.61-0.97-14.99-2.78-22.03h33.42c-4.32,6.67-6.48,14.35-6.48,22.02&#10;&#9;&#9;&#9;&#9;c0,11.04,4.47,22.09,13.38,30.14C353.382,238.47,349.882,247.3,342.812,247.3z"\r\n        />\r\n      </g>\r\n      <path\r\n        style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        "\r\n        d="&#10;&#9;&#9;&#9;M341.122,181.49c-4.33,6.67-6.49,14.34-6.49,22.02c0,11.04,4.47,22.08,13.39,30.13c5.36,4.84,1.85,13.65-5.21,13.65&#10;&#9;&#9;&#9;c-0.14,0-0.29,0-0.44-0.01c-23.32-1.19-42.66,17.42-42.66,40.5c0,0.7,0.02,1.4,0.05,2.11c0.26,4.93-3.74,8.24-7.89,8.24&#10;&#9;&#9;&#9;c-2.05,0-4.12-0.79-5.74-2.6c-8.05-8.92-19.1-13.39-30.13-13.39s-22.08,4.47-30.13,13.39c-1.62,1.81-3.69,2.6-5.74,2.6&#10;&#9;&#9;&#9;c-4.15,0-8.15-3.31-7.89-8.24c0.03-0.71,0.04-1.41,0.04-2.11c0-23.08-19.34-41.69-42.65-40.5c-0.15,0.01-0.3,0.01-0.45,0.01&#10;&#9;&#9;&#9;c-7.05,0-10.56-8.81-5.2-13.65c8.92-8.05,13.39-19.09,13.39-30.13c0-7.68-2.16-15.35-6.49-22.02"\r\n      />\r\n    </g>\r\n    <g>\r\n      <path\r\n        style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        "\r\n        d="&#10;&#9;&#9;&#9;M208.726,181.49h-84.213c-2.761,0-5,2.239-5,5v139.02c0,2.761,2.239,5,5,5h262.97c2.761,0,5-2.239,5-5V186.49c0-2.761-2.239-5-5-5&#10;&#9;&#9;&#9;H241.888"\r\n      />\r\n    </g>\r\n    <path\r\n      style="\r\n        fill: none;\r\n        stroke: #000000;\r\n        stroke-width: 15;\r\n        stroke-linecap: round;\r\n        stroke-linejoin: round;\r\n        stroke-miterlimit: 10;\r\n      "\r\n      d="&#10;&#9;&#9;M124.512,370.51h125.143c1.706,0,3.295,0.87,4.214,2.308l53.65,83.99c2.126,3.328-0.264,7.692-4.214,7.692H124.512&#10;&#9;&#9;c-2.761,0-5-2.239-5-5v-83.99C119.512,372.749,121.751,370.51,124.512,370.51z"\r\n    />\r\n    <path\r\n      style="\r\n        fill: none;\r\n        stroke: #000000;\r\n        stroke-width: 15;\r\n        stroke-linecap: round;\r\n        stroke-linejoin: round;\r\n        stroke-miterlimit: 10;\r\n      "\r\n      d="&#10;&#9;&#9;M392.482,397.976V375.51c0-2.761-2.239-5-5-5h-78.73c-3.949,0-6.34,4.363-4.214,7.692l53.65,83.99&#10;&#9;&#9;c0.919,1.438,2.507,2.308,4.214,2.308h25.08c2.761,0,5-2.239,5-5v-28.362"\r\n    />\r\n    <g>\r\n      <g>\r\n        <g>\r\n          <circle\r\n            style="fill: #d8b2ec"\r\n            cx="189.8"\r\n            cy="381.497"\r\n            r="24.709"\r\n          />\r\n\r\n          <circle\r\n            style="\r\n              fill: none;\r\n              stroke: #000000;\r\n              stroke-width: 15;\r\n              stroke-linecap: round;\r\n              stroke-linejoin: round;\r\n              stroke-miterlimit: 10;\r\n            "\r\n            cx="189.8"\r\n            cy="381.497"\r\n            r="24.709"\r\n          />\r\n        </g>\r\n      </g>\r\n    </g>\r\n    <g>\r\n      <line\r\n        id="XMLID_00000028301319025648580530000009457246182494066313_"\r\n        style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        "\r\n        x1="314.674"\r\n        y1="108.185"\r\n        x2="354.689"\r\n        y2="108.075"\r\n      />\r\n\r\n      <line\r\n        style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        "\r\n        x1="333.566"\r\n        y1="80.805"\r\n        x2="354.689"\r\n        y2="80.805"\r\n      />\r\n    </g>\r\n  </g>\r\n</svg>\r\n';

  const Comic3SpecialFlat =
    '<svg\r\n  id="Capa_1"\r\n  enable-background="new 0 0 512 512"\r\n  height="512"\r\n  viewBox="0 0 512 512"\r\n  width="512"\r\n  xmlns="http://www.w3.org/2000/svg"\r\n>\r\n  <g>\r\n    <g>\r\n      <g>\r\n        <path\r\n          d="m427.508 512h-343.02c-5.69 0-10.302-4.612-10.302-10.302v-491.396c0-5.69 4.612-10.302 10.302-10.302h343.02c5.69 0 10.302 4.612 10.302 10.302v491.396c-.001 5.69-4.613 10.302-10.302 10.302z"\r\n          fill="#f2eff2"\r\n        />\r\n      </g>\r\n    </g>\r\n    <path\r\n      d="m427.512 0h-41.238c5.687 0 10.302 4.615 10.302 10.302v36.12l-18.016 49.462 18.016 36.952v51.701l-13.787 87.003 13.787 55.974v51.669l-18.016 52.406 18.016 34.008v36.1c0 5.687-4.615 10.302-10.302 10.302h41.238c5.687 0 10.302-4.615 10.302-10.302v-491.395c0-5.687-4.615-10.302-10.302-10.302z"\r\n      fill="#e1dde1"\r\n    />\r\n    <path\r\n      d="m396.6 46.36v86.52c0 2.85-2.31 5.15-5.15 5.15h-110.11l-22.53-48.41 22.53-48.41h110.11c2.84 0 5.15 2.3 5.15 5.15z"\r\n      fill="#3ad1e0"\r\n    />\r\n    <path\r\n      d="m396.599 46.358v86.525c0 2.843-2.308 5.151-5.151 5.151h-30.926c2.843 0 5.151-2.308 5.151-5.151v-86.525c0-2.843-2.308-5.151-5.151-5.151h30.926c2.844 0 5.151 2.308 5.151 5.151z"\r\n      fill="#20bfd5"\r\n    />\r\n    <path\r\n      d="m281.34 41.207h-39.904c-2.845 0-5.151 2.306-5.151 5.151v86.525c0 2.845 2.306 5.151 5.151 5.151h39.904z"\r\n      fill="#23f1a8"\r\n    />\r\n    <path\r\n      d="m304.73 470.79h-77.71l-39.22-20.29-39.23 20.29h-28.03c-2.84 0-5.15-2.3-5.15-5.15v-86.52c0-2.85 2.31-5.15 5.15-5.15h128.92c1.76 0 3.4.89 4.34 2.37l55.27 86.53c2.19 3.43-.27 7.92-4.34 7.92z"\r\n      fill="#23f1a8"\r\n    />\r\n    <g>\r\n      <path\r\n        d="m227.019 443.104v27.689h-78.446v-27.689c0-21.669 17.569-39.228 39.228-39.228 10.83 0 20.639 4.39 27.729 11.489 7.099 7.1 11.489 16.899 11.489 27.739z"\r\n        fill="#ae6ad8"\r\n      />\r\n      <path\r\n        d="m227.021 443.101v27.691h-29.061v-27.691c0-10.838-4.389-20.634-11.486-27.732-3.729-3.74-8.211-6.727-13.207-8.715 4.492-1.793 9.406-2.782 14.536-2.782 10.827 0 20.635 4.389 27.732 11.497 7.097 7.098 11.486 16.895 11.486 27.732z"\r\n        fill="#975bbb"\r\n      />\r\n    </g>\r\n    <path\r\n      d="m304.728 470.793h-30.926c4.069 0 6.531-4.492 4.347-7.922l-55.269-86.525c-.948-1.483-2.586-2.38-4.347-2.38h30.926c1.762 0 3.4.896 4.347 2.38l55.269 86.525c2.184 3.43-.278 7.922-4.347 7.922z"\r\n      fill="#27e19d"\r\n    />\r\n    <path\r\n      d="m391.448 373.966h-81.106c-4.068 0-6.531 4.495-4.341 7.924l55.269 86.525c.946 1.482 2.583 2.378 4.341 2.378h25.837c2.845 0 5.151-2.306 5.151-5.151v-86.525c0-2.845-2.306-5.151-5.151-5.151z"\r\n      fill="#ae6ad8"\r\n    />\r\n    <path\r\n      d="m396.599 379.117v86.525c0 2.843-2.308 5.151-5.151 5.151h-25.837c-.907 0-1.772-.237-2.534-.68 1.556-.886 2.596-2.555 2.596-4.471v-86.525c0-2.843-2.308-5.151-5.151-5.151h30.926c2.844 0 5.151 2.308 5.151 5.151z"\r\n      fill="#975bbb"\r\n    />\r\n    <g>\r\n      <path\r\n        d="m195.602 46.358v86.525c0 2.845-2.306 5.151-5.151 5.151h-69.91c-2.845 0-5.151-2.306-5.151-5.151v-86.525c0-2.845 2.306-5.151 5.151-5.151h69.91c2.845 0 5.151 2.306 5.151 5.151z"\r\n        fill="#3ad1e0"\r\n      />\r\n      <path\r\n        d="m195.6 46.358v86.525c0 2.843-2.308 5.151-5.151 5.151h-30.926c2.843 0 5.151-2.308 5.151-5.151v-86.525c0-2.843-2.308-5.151-5.151-5.151h30.926c2.844 0 5.151 2.308 5.151 5.151z"\r\n        fill="#20bfd5"\r\n      />\r\n    </g>\r\n    <g>\r\n      <path\r\n        d="m396.6 184.39v143.22c0 2.84-2.31 5.15-5.15 5.15h-30.93l-104.53-27.53-104.52 27.53h-30.93c-2.84 0-5.15-2.31-5.15-5.15v-143.22c0-2.84 2.31-5.15 5.15-5.15h47.77l87.68 16.15 87.69-16.15h47.77c2.84 0 5.15 2.31 5.15 5.15z"\r\n        fill="#fb54b6"\r\n      />\r\n    </g>\r\n    <path\r\n      d="m151.473 332.759c0-57.729 46.798-104.527 104.527-104.527s104.527 46.798 104.527 104.527z"\r\n      fill="#fb9927"\r\n    />\r\n    <path\r\n      d="m360.522 332.759h-35.397c0-51.694-37.519-94.612-86.824-103.028 5.748-.979 11.662-1.494 17.699-1.494 57.731 0 104.522 46.79 104.522 104.522z"\r\n      fill="#f98824"\r\n    />\r\n    <g>\r\n      <path\r\n        d="m396.599 184.392v143.216c0 2.843-2.308 5.151-5.151 5.151h-30.926c2.843 0 5.151-2.308 5.151-5.151v-143.216c0-2.843-2.308-5.151-5.151-5.151h30.926c2.844 0 5.151 2.308 5.151 5.151z"\r\n        fill="#fb33a8"\r\n      />\r\n    </g>\r\n    <g>\r\n      <g>\r\n        <path\r\n          d="m345.43 247.027c-.144 0-.299 0-.453-.01-24.024-1.226-43.947 17.946-43.947 41.722 0 .721.021 1.442.051 2.174.268 5.079-3.853 8.489-8.128 8.489-2.112 0-4.244-.814-5.913-2.678-8.293-9.189-19.676-13.794-31.039-13.794s-22.746 4.605-31.039 13.794c-1.669 1.865-3.801 2.678-5.913 2.678-4.275 0-8.396-3.41-8.128-8.489.031-.731.041-1.453.041-2.174 0-23.777-19.924-42.948-43.937-41.722-.155.01-.309.01-.464.01-7.263 0-10.879-9.076-5.357-14.062 9.189-8.293 13.794-19.666 13.794-31.039 0-7.912-2.225-15.813-6.686-22.685h175.378c-4.461 6.871-6.686 14.773-6.686 22.685 0 11.373 4.605 22.746 13.794 31.039 5.521 4.986 1.905 14.062-5.368 14.062z"\r\n          fill="#fdef63"\r\n        />\r\n        <g>\r\n          <g id="XMLID_00000127012381744132405410000009872483291948348836_">\r\n            <path\r\n              d="m280.138 231.696c-4.268 0-7.726-3.459-7.726-7.726v-.107c0-4.267 3.459-7.726 7.726-7.726s7.726 3.459 7.726 7.726v.107c0 4.267-3.459 7.726-7.726 7.726z"\r\n              fill="#554e55"\r\n            />\r\n          </g>\r\n          <g id="XMLID_00000080918978500845250090000017315552773041050031_">\r\n            <path\r\n              d="m256 231.696c-4.267 0-7.726-3.459-7.726-7.726v-.107c0-4.267 3.459-7.726 7.726-7.726 4.268 0 7.726 3.459 7.726 7.726v.107c0 4.267-3.458 7.726-7.726 7.726z"\r\n              fill="#554e55"\r\n            />\r\n          </g>\r\n          <g id="XMLID_00000140711681861242238370000008769002181148908969_">\r\n            <path\r\n              d="m231.862 231.696c-4.267 0-7.726-3.459-7.726-7.726v-.107c0-4.267 3.459-7.726 7.726-7.726s7.726 3.459 7.726 7.726v.107c.001 4.267-3.459 7.726-7.726 7.726z"\r\n              fill="#554e55"\r\n            />\r\n          </g>\r\n        </g>\r\n        <path\r\n          d="m345.43 247.037c-.155 0-.299 0-.443-.021-24.034-1.226-43.948 17.956-43.948 41.722 0 .721.01 1.432.052 2.174.258 5.079-3.863 8.499-8.128 8.499-2.122 0-4.255-.824-5.924-2.689-6.954-7.685-16.05-12.167-25.507-13.423 29.968-14.804 50.582-45.678 50.582-81.364 0-7.84-.999-15.442-2.864-22.695h34.429c-4.45 6.871-6.676 14.783-6.676 22.685 0 11.373 4.605 22.757 13.784 31.05 5.532 4.966 1.926 14.062-5.357 14.062z"\r\n          fill="#f3d730"\r\n        />\r\n      </g>\r\n    </g>\r\n    <g>\r\n      <g>\r\n        <g>\r\n          <circle\r\n            cx="187.8"\r\n            cy="385.284"\r\n            fill="#d8b2ec"\r\n            r="25.455"\r\n          />\r\n        </g>\r\n      </g>\r\n    </g>\r\n    <g>\r\n      <g id="XMLID_00000028301319025648580530000009457246182494066313_">\r\n        <path\r\n          d="m316.443 111.45c-4.258 0-7.714-3.445-7.726-7.705-.012-4.267 3.438-7.736 7.705-7.747l41.222-.114h.021c4.258 0 7.714 3.445 7.726 7.705.012 4.267-3.438 7.736-7.705 7.747l-41.222.114c-.007 0-.014 0-.021 0z"\r\n          fill="#f2eff2"\r\n        />\r\n      </g>\r\n      <g>\r\n        <path\r\n          d="m357.665 83.243h-21.761c-4.268 0-7.726-3.459-7.726-7.726s3.459-7.726 7.726-7.726h21.761c4.268 0 7.726 3.459 7.726 7.726s-3.458 7.726-7.726 7.726z"\r\n          fill="#f2eff2"\r\n        />\r\n      </g>\r\n    </g>\r\n  </g>\r\n</svg>\r\n';

  const deviceFloppy =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  class="icon icon-tabler icon-tabler-device-floppy"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  stroke-width="2"\r\n  stroke="currentColor"\r\n  fill="none"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2" />\r\n  <path d="M12 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />\r\n  <path d="M14 4l0 4l-6 0l0 -4" />\r\n</svg>\r\n';

  const dotsVertical =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  fill="none"\r\n  stroke="currentColor"\r\n  stroke-width="2"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n  class="icon icon-tabler icons-tabler-outline icon-tabler-dots-vertical"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />\r\n  <path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />\r\n  <path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />\r\n</svg>\r\n';

  const EReader1KawaiiLinealColor =
    '<svg\r\n  version="1.1"\r\n  id="Capa_1"\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  x="0px"\r\n  y="0px"\r\n  viewBox="0 0 512 512"\r\n  style="enable-background: new 0 0 512 512"\r\n  xml:space="preserve"\r\n>\r\n  <g>\r\n    <path\r\n      style="fill: #636978"\r\n      d="M366,504.5H146c-44.183,0-80-35.817-80-80v-337c0-44.183,35.817-80,80-80h220&#10;&#9;&#9;c44.183,0,80,35.817,80,80v337C446,468.683,410.183,504.5,366,504.5z"\r\n    />\r\n    <path\r\n      style="fill: #555a66"\r\n      d="M226,444.5v-377c0-33.137,26.863-60,60-60H146c-44.183,0-80,35.817-80,80v337&#10;&#9;&#9;c0,44.183,35.817,80,80,80h140C252.863,504.5,226,477.637,226,444.5z"\r\n    />\r\n    <path\r\n      style="fill: #96e8ff"\r\n      d="M366,67.5H146c-11.046,0-20,8.954-20,20v327c0,11.046,8.954,20,20,20h220c11.046,0,20-8.954,20-20&#10;&#9;&#9;v-327C386,76.454,377.046,67.5,366,67.5z"\r\n    />\r\n    <path\r\n      style="fill: #80dbff"\r\n      d="M126,87.5v327c0,11.046,8.954,20,20,20h80v-367h-80C134.954,67.5,126,76.454,126,87.5z"\r\n    />\r\n    <path\r\n      style="fill: #ffffff"\r\n      d="M256,115.517c-26.85-7.998-53.509-8.858-80.318-2.577c-5.664,1.327-9.682,6.363-9.682,12.18&#10;&#9;&#9;c0,39.161,0,53.805,0,92.965c0,6.374,5.886,11.128,12.113,9.768c23.172-5.058,46.241-4.777,69.425,0.841&#10;&#9;&#9;c5.563,1.348,11.361,1.348,16.924,0c23.184-5.618,46.252-5.898,69.425-0.841c6.227,1.359,12.113-3.395,12.113-9.768&#10;&#9;&#9;c0-39.161,0-53.805,0-92.965c0-5.818-4.018-10.853-9.682-12.18C309.509,106.659,282.85,107.518,256,115.517z"\r\n    />\r\n    <path\r\n      style="fill: #f5fafc"\r\n      d="M175.682,112.94c-5.664,1.327-9.682,6.363-9.682,12.18c0,39.161,0,53.805,0,92.965&#10;&#9;&#9;c0,6.374,5.886,11.128,12.113,9.769c23.172-5.058,46.241-4.777,69.425,0.841c2.782,0.674,5.622,1.011,8.462,1.011V115.517&#10;&#9;&#9;C229.15,107.518,202.491,106.659,175.682,112.94z"\r\n    />\r\n    <path\r\n      style="fill: #e1f1fa"\r\n      d="M206.53,108.873c-10.274,0.306-20.551,1.654-30.85,4.067c-5.663,1.327-9.681,6.368-9.681,12.184&#10;&#9;&#9;c0,39.155,0,53.801,0,92.955c0,6.355,5.86,11.141,12.068,9.785c23.188-5.068,46.271-4.791,69.47,0.831&#10;&#9;&#9;c2.782,0.674,8.462,1.011,8.462,1.011c0-12.844-13.338-21.214-26.163-26.293c-14.114-5.59-23.307-19.322-23.307-34.502V108.873z"\r\n    />\r\n    <g>\r\n      <path\r\n        style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        "\r\n        d="&#10;&#9;&#9;&#9;M366,504.5H146c-44.183,0-80-35.817-80-80v-337c0-44.183,35.817-80,80-80h220c44.183,0,80,35.817,80,80v337&#10;&#9;&#9;&#9;C446,468.683,410.183,504.5,366,504.5z"\r\n      />\r\n      <path\r\n        style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        "\r\n        d="&#10;&#9;&#9;&#9;M126,398.01v16.49c0,11.046,8.954,20,20,20h220c11.046,0,20-8.954,20-20v-327c0-11.046-8.954-20-20-20H146&#10;&#9;&#9;&#9;c-11.046,0-20,8.954-20,20v280.51"\r\n      />\r\n\r\n      <line\r\n        style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        "\r\n        x1="176"\r\n        y1="281.01"\r\n        x2="336"\r\n        y2="281.01"\r\n      />\r\n\r\n      <line\r\n        style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        "\r\n        x1="176"\r\n        y1="321.01"\r\n        x2="336"\r\n        y2="321.01"\r\n      />\r\n      <path\r\n        style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        "\r\n        d="&#10;&#9;&#9;&#9;M286.144,109.53c-10.033,0.992-20.075,2.987-30.144,5.986c-26.85-7.998-53.509-8.858-80.318-2.577&#10;&#9;&#9;&#9;c-5.664,1.327-9.682,6.363-9.682,12.18c0,39.161,0,53.805,0,92.965c0,6.374,5.886,11.128,12.113,9.768&#10;&#9;&#9;&#9;c23.172-5.058,46.241-4.777,69.425,0.841c5.563,1.348,11.361,1.348,16.924,0c23.184-5.618,46.252-5.898,69.425-0.841&#10;&#9;&#9;&#9;c6.227,1.359,12.113-3.395,12.113-9.768c0-39.161,0-53.805,0-92.965c0-5.818-4.018-10.853-9.682-12.18&#10;&#9;&#9;&#9;c-6.702-1.57-13.395-2.694-20.084-3.372"\r\n      />\r\n\r\n      <line\r\n        style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        "\r\n        x1="256"\r\n        y1="115.517"\r\n        x2="256"\r\n        y2="229.706"\r\n      />\r\n      <g>\r\n        <line\r\n          style="\r\n            fill: none;\r\n            stroke: #000000;\r\n            stroke-width: 15;\r\n            stroke-linecap: round;\r\n            stroke-linejoin: round;\r\n            stroke-miterlimit: 10;\r\n          "\r\n          x1="193.551"\r\n          y1="362.07"\r\n          x2="193.551"\r\n          y2="374.07"\r\n        />\r\n\r\n        <line\r\n          style="\r\n            fill: none;\r\n            stroke: #000000;\r\n            stroke-width: 15;\r\n            stroke-linecap: round;\r\n            stroke-linejoin: round;\r\n            stroke-miterlimit: 10;\r\n          "\r\n          x1="318.449"\r\n          y1="362.07"\r\n          x2="318.449"\r\n          y2="374.07"\r\n        />\r\n        <path\r\n          style="\r\n            fill: none;\r\n            stroke: #000000;\r\n            stroke-width: 15;\r\n            stroke-linecap: round;\r\n            stroke-linejoin: round;\r\n            stroke-miterlimit: 10;\r\n          "\r\n          d="&#10;&#9;&#9;&#9;&#9;M239.536,373.713c4.003,4.594,9.892,7.501,16.464,7.501c6.572,0,12.461-2.907,16.464-7.501"\r\n        />\r\n      </g>\r\n    </g>\r\n  </g>\r\n  <g></g>\r\n  <g></g>\r\n  <g></g>\r\n  <g></g>\r\n  <g></g>\r\n  <g></g>\r\n  <g></g>\r\n  <g></g>\r\n  <g></g>\r\n  <g></g>\r\n  <g></g>\r\n  <g></g>\r\n  <g></g>\r\n  <g></g>\r\n  <g></g>\r\n</svg>\r\n';

  const EReader1KawaiiFlat =
    '<svg\r\n  id="Capa_1"\r\n  enable-background="new 0 0 512 512"\r\n  viewBox="0 0 512 512"\r\n  xmlns="http://www.w3.org/2000/svg"\r\n>\r\n  <g>\r\n    <g>\r\n      <path\r\n        d="m369.32 512h-226.64c-45.516 0-82.414-36.898-82.414-82.414v-347.172c0-45.516 36.898-82.414 82.414-82.414h226.64c45.516 0 82.414 36.898 82.414 82.414v347.171c0 45.517-36.898 82.415-82.414 82.415z"\r\n        fill="#636978"\r\n      />\r\n    </g>\r\n    <g>\r\n      <path\r\n        d="m225.095 450.189v-388.378c0-34.137 27.673-61.811 61.81-61.811h-144.225c-45.516 0-82.414 36.898-82.414 82.414v347.171c0 45.516 36.898 82.414 82.414 82.414h144.225c-34.137.001-61.81-27.673-61.81-61.81z"\r\n        fill="#555a66"\r\n      />\r\n    </g>\r\n    <g>\r\n      <path\r\n        d="m369.32 61.811h-226.64c-11.379 0-20.604 9.225-20.604 20.604v336.869c0 11.379 9.225 20.604 20.604 20.604h226.64c11.379 0 20.604-9.225 20.604-20.604v-336.87c0-11.379-9.225-20.603-20.604-20.603z"\r\n        fill="#96e8ff"\r\n      />\r\n    </g>\r\n    <g>\r\n      <path\r\n        d="m122.076 82.414v336.869c0 11.379 9.225 20.604 20.604 20.604h82.414v-378.076h-82.414c-11.379 0-20.604 9.224-20.604 20.603z"\r\n        fill="#80dbff"\r\n      />\r\n    </g>\r\n    <g>\r\n      <path\r\n        d="m256 111.277c-27.66-8.24-55.124-9.125-82.742-2.655-5.835 1.367-9.975 6.555-9.975 12.548v95.771c0 6.566 6.064 11.463 12.479 10.063 23.872-5.21 47.636-4.921 71.52.866 5.731 1.389 11.704 1.389 17.435 0 23.884-5.788 47.648-6.077 71.52-.866 6.415 1.4 12.479-3.497 12.479-10.063 0-40.343 0-55.429 0-95.771 0-5.993-4.139-11.181-9.975-12.548-27.617-6.471-55.081-5.585-82.741 2.655z"\r\n        fill="#fff"\r\n      />\r\n    </g>\r\n    <g>\r\n      <path\r\n        d="m173.258 108.622c-5.835 1.367-9.975 6.555-9.975 12.548v95.771c0 6.566 6.064 11.463 12.479 10.063 23.872-5.21 47.636-4.921 71.52.866 2.866.694 5.791 1.041 8.717 1.041v-117.634c-27.659-8.24-55.123-9.126-82.741-2.655z"\r\n        fill="#f5fafc"\r\n      />\r\n    </g>\r\n    <g>\r\n      <path\r\n        d="m205.037 104.432c-10.584.315-21.171 1.704-31.781 4.19-5.834 1.367-9.973 6.56-9.973 12.552v95.761c0 6.547 6.037 11.478 12.432 10.08 23.888-5.221 47.667-4.935 71.567.856 2.866.694 8.717 1.042 8.717 1.042 0-13.231-13.741-21.854-26.952-27.087-14.54-5.759-24.011-19.905-24.011-35.544v-61.85z"\r\n        fill="#e1f1fa"\r\n      />\r\n    </g>\r\n    <g>\r\n      <g>\r\n        <path\r\n          d="m338.414 289.266h-164.829c-4.142 0-7.5-3.357-7.5-7.5s3.358-7.5 7.5-7.5h164.829c4.143 0 7.5 3.357 7.5 7.5s-3.357 7.5-7.5 7.5z"\r\n          fill="#19cffc"\r\n        />\r\n      </g>\r\n      <g>\r\n        <path\r\n          d="m338.414 330.473h-164.829c-4.142 0-7.5-3.357-7.5-7.5s3.358-7.5 7.5-7.5h164.829c4.143 0 7.5 3.357 7.5 7.5s-3.357 7.5-7.5 7.5z"\r\n          fill="#19cffc"\r\n        />\r\n      </g>\r\n      <g>\r\n        <g>\r\n          <path\r\n            d="m191.667 385.134c-4.142 0-7.5-3.357-7.5-7.5v-12.362c0-4.143 3.358-7.5 7.5-7.5s7.5 3.357 7.5 7.5v12.362c0 4.142-3.358 7.5-7.5 7.5z"\r\n            fill="#495560"\r\n          />\r\n        </g>\r\n        <g>\r\n          <path\r\n            d="m320.333 385.134c-4.143 0-7.5-3.357-7.5-7.5v-12.362c0-4.143 3.357-7.5 7.5-7.5s7.5 3.357 7.5 7.5v12.362c0 4.142-3.357 7.5-7.5 7.5z"\r\n            fill="#495560"\r\n          />\r\n        </g>\r\n        <g>\r\n          <path\r\n            d="m256 392.493c-8.668 0-16.911-3.754-22.615-10.3-2.721-3.123-2.396-7.86.727-10.582 3.122-2.721 7.86-2.396 10.582.727 2.855 3.276 6.976 5.155 11.307 5.155s8.452-1.879 11.307-5.155c2.723-3.122 7.457-3.447 10.582-.727 3.122 2.722 3.448 7.459.727 10.582-5.706 6.546-13.949 10.3-22.617 10.3z"\r\n            fill="#495560"\r\n          />\r\n        </g>\r\n      </g>\r\n    </g>\r\n  </g>\r\n  <g />\r\n  <g />\r\n  <g />\r\n  <g />\r\n  <g />\r\n  <g />\r\n  <g />\r\n  <g />\r\n  <g />\r\n  <g />\r\n  <g />\r\n  <g />\r\n  <g />\r\n  <g />\r\n  <g />\r\n</svg>\r\n';

  const EReader2KawaiiLinealColor =
    '<?xml version="1.0" encoding="UTF-8"?>\r\n<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  version="1.1"\r\n  id="Capa_1"\r\n  x="0px"\r\n  y="0px"\r\n  viewBox="0 0 511.941 511.941"\r\n  style="enable-background: new 0 0 511.941 511.941"\r\n  xml:space="preserve"\r\n  width="512"\r\n  height="512"\r\n>\r\n  <g>\r\n    <g>\r\n      <path\r\n        style="fill: #808fa4"\r\n        d="M444.211,67.5v376.94c0,33.14-26.87,60-60,60H127.73c-33.13,0-60-26.86-60-60V67.5&#10;&#9;&#9;&#9;c0-33.14,26.87-60,60-60h256.48C417.341,7.5,444.211,34.361,444.211,67.5z"\r\n      />\r\n      <path\r\n        style="fill: #64768e"\r\n        d="M190.421,504.44h-62.69c-33.13,0-60-26.86-60-60V67.5c0-33.14,26.87-60,60-60h48.86&#10;&#9;&#9;&#9;c-7.15,6.38-14.77,17.56-14.77,36.26v411.44C161.821,455.201,161.611,484.551,190.421,504.44z"\r\n      />\r\n      <path\r\n        style="fill: #c5ced6"\r\n        d="M414.091,67.62v143.17l-188.56,12.65l75.62-185.82h82.94&#10;&#9;&#9;&#9;C400.661,37.62,414.091,51.051,414.091,67.62z"\r\n      />\r\n      <polygon\r\n        style="fill: #abb6c4"\r\n        points="271.031,37.62 225.531,223.44 161.821,217.131 97.85,210.79 118.08,74.5 162.111,37.62 &#9;&#9;&#10;&#9;&#9;&#9;"\r\n      />\r\n      <path\r\n        style="fill: #9ca9ba"\r\n        d="M162.111,37.62c-0.19,1.95-0.29,4-0.29,6.14v173.37l-63.97-6.34V67.62c0-16.57,13.43-30,30-30&#10;&#9;&#9;&#9;H162.111z"\r\n      />\r\n      <polygon\r\n        style="fill: #c5ced6"\r\n        points="311.951,223.44 293.62,414.091 161.821,414.091 111.611,379.181 97.85,240.911 &#10;&#9;&#9;&#9;161.821,235.69 &#9;&#9;"\r\n      />\r\n      <path\r\n        style="fill: #abb6c4"\r\n        d="M97.85,240.911l63.97-5.22v178.4h-33.97c-16.57,0-30-13.43-30-30V240.911z"\r\n      />\r\n      <path\r\n        style="fill: #64768e"\r\n        d="M414.091,240.911v143.18c0,16.57-13.43,30-30,30h-60.36l-11.78-190.65L414.091,240.911z"\r\n      />\r\n      <path\r\n        style="fill: #64768e"\r\n        d="M286.088,474.324h-60.235c-8.317,0-15.059-6.742-15.059-15.059v0&#10;&#9;&#9;&#9;c0-8.317,6.742-15.059,15.059-15.059h60.235c8.317,0,15.059,6.742,15.059,15.059v0&#10;&#9;&#9;&#9;C301.147,467.581,294.405,474.324,286.088,474.324z"\r\n      />\r\n      <path\r\n        style="fill: #e8ecf9"\r\n        d="M414.091,210.79v30.12h-75.36c-8.28,0-15,6.72-15,15v158.18h-30.11v-158.18c0-8.28-6.72-15-15-15&#10;&#9;&#9;&#9;h-116.8l-12.76-12.88l12.76-17.24h42.84c6.52,0,12.3-4.22,14.29-10.43l52.08-162.74h30.12l-49.16,153.6&#10;&#9;&#9;&#9;c-3.09,9.68,4.13,19.57,14.29,19.57H414.091z"\r\n      />\r\n      <rect\r\n        x="97.85"\r\n        y="210.79"\r\n        style="fill: #d7ddf5"\r\n        width="63.97"\r\n        height="30.12"\r\n      />\r\n    </g>\r\n    <g>\r\n      <path\r\n        style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        "\r\n        d="&#10;&#9;&#9;&#9;M384.206,504.441H127.735c-33.137,0-60-26.863-60-60V67.5c0-33.137,26.863-60,60-60h256.471c33.137,0,60,26.863,60,60v376.941&#10;&#9;&#9;&#9;C444.206,477.578,417.343,504.441,384.206,504.441z"\r\n      />\r\n      <path\r\n        style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        "\r\n        d="&#10;&#9;&#9;&#9;M384.088,414.088H127.853c-16.569,0-30-13.431-30-30V67.618c0-16.569,13.431-30,30-30h256.235c16.569,0,30,13.431,30,30v316.471&#10;&#9;&#9;&#9;C414.088,400.657,400.657,414.088,384.088,414.088z"\r\n      />\r\n      <path\r\n        style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        "\r\n        d="&#10;&#9;&#9;&#9;M286.088,474.324h-60.235c-8.317,0-15.059-6.742-15.059-15.059c0-8.317,6.742-15.059,15.059-15.059h60.235&#10;&#9;&#9;&#9;c8.317,0,15.059,6.742,15.059,15.059C301.147,467.581,294.405,474.324,286.088,474.324z"\r\n      />\r\n      <path\r\n        style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        "\r\n        d="&#10;&#9;&#9;&#9;M100.85,210.79h103.811c6.523,0,12.298-4.215,14.286-10.428L270.56,39.09"\r\n      />\r\n      <path\r\n        style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        "\r\n        d="&#10;&#9;&#9;&#9;M293.62,410.091v-154.18c0-8.284-6.716-15-15-15H100.85"\r\n      />\r\n      <path\r\n        style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        "\r\n        d="&#10;&#9;&#9;&#9;M411.091,240.911h-72.36c-8.284,0-15,6.716-15,15v154.18"\r\n      />\r\n      <path\r\n        style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        "\r\n        d="&#10;&#9;&#9;&#9;M300.616,39.291l-48.622,151.927c-3.098,9.679,4.124,19.572,14.286,19.572h144.81"\r\n      />\r\n      <g>\r\n        <line\r\n          style="\r\n            fill: none;\r\n            stroke: #000000;\r\n            stroke-width: 15;\r\n            stroke-linecap: round;\r\n            stroke-linejoin: round;\r\n            stroke-miterlimit: 10;\r\n          "\r\n          x1="133.2"\r\n          y1="310.695"\r\n          x2="133.2"\r\n          y2="322.695"\r\n        />\r\n\r\n        <line\r\n          style="\r\n            fill: none;\r\n            stroke: #000000;\r\n            stroke-width: 15;\r\n            stroke-linecap: round;\r\n            stroke-linejoin: round;\r\n            stroke-miterlimit: 10;\r\n          "\r\n          x1="258.098"\r\n          y1="310.695"\r\n          x2="258.098"\r\n          y2="322.695"\r\n        />\r\n        <g>\r\n          <path\r\n            style="\r\n              fill: none;\r\n              stroke: #000000;\r\n              stroke-width: 15;\r\n              stroke-linecap: round;\r\n              stroke-miterlimit: 10;\r\n            "\r\n            d="M195.831,329.85&#10;&#9;&#9;&#9;&#9;&#9;c0,7.984-6.472,14.456-14.456,14.456s-14.456-6.472-14.456-14.456"\r\n          />\r\n          <path\r\n            style="\r\n              fill: none;\r\n              stroke: #000000;\r\n              stroke-width: 15;\r\n              stroke-linecap: round;\r\n              stroke-miterlimit: 10;\r\n            "\r\n            d="M224.742,329.85&#10;&#9;&#9;&#9;&#9;&#9;c0,7.984-6.472,14.456-14.456,14.456s-14.456-6.472-14.456-14.456"\r\n          />\r\n        </g>\r\n      </g>\r\n    </g>\r\n  </g>\r\n</svg>\r\n';

  const EReader2KawaiiFlat =
    '<svg\r\n  id="Capa_1"\r\n  enable-background="new 0 0 512 512"\r\n  height="512"\r\n  viewBox="0 0 512 512"\r\n  width="512"\r\n  xmlns="http://www.w3.org/2000/svg"\r\n>\r\n  <g>\r\n    <path\r\n      d="m449.945 61.818v388.363c0 34.144-27.684 61.818-61.818 61.818h-264.254c-34.134 0-61.818-27.674-61.818-61.818v-388.363c0-34.144 27.684-61.818 61.818-61.818h264.253c34.135 0 61.819 27.674 61.819 61.818z"\r\n      fill="#808fa4"\r\n    />\r\n    <path\r\n      d="m188.464 512h-64.59c-34.134 0-61.818-27.674-61.818-61.818v-388.364c-.001-34.144 27.683-61.818 61.817-61.818h50.341c-7.367 6.574-15.218 18.092-15.218 37.359v423.909c.001 0-.215 30.24 29.468 50.732z"\r\n      fill="#64768e"\r\n    />\r\n    <path\r\n      d="m418.912 61.942v147.509l-194.274 13.033 77.912-191.451h85.453c17.072 0 30.909 13.837 30.909 30.909z"\r\n      fill="#c5ced6"\r\n    />\r\n    <path\r\n      d="m271.516 31.033-46.878 191.451-65.641-6.501-65.909-6.532 20.843-140.421 45.365-37.997z"\r\n      fill="#abb6c4"\r\n    />\r\n    <path\r\n      d="m159.296 31.033c-.196 2.009-.299 4.121-.299 6.326v178.624l-65.909-6.532v-147.509c0-17.072 13.837-30.909 30.909-30.909z"\r\n      fill="#9ca9ba"\r\n    />\r\n    <path\r\n      d="m313.676 222.484-18.885 196.428h-135.794l-51.732-35.968-14.177-142.46 65.909-5.379z"\r\n      fill="#c5ced6"\r\n    />\r\n    <path\r\n      d="m93.088 240.484 65.909-5.378v183.807h-35c-17.072 0-30.909-13.837-30.909-30.909z"\r\n      fill="#abb6c4"\r\n    />\r\n    <path\r\n      d="m418.912 240.484v147.519c0 17.072-13.837 30.909-30.909 30.909h-62.19l-12.137-196.428z"\r\n      fill="#64768e"\r\n    />\r\n    <path\r\n      d="m287.487 480.971h-62.974c-8.317 0-15.059-6.742-15.059-15.059v-.913c0-8.317 6.742-15.059 15.059-15.059h62.974c8.317 0 15.059 6.742 15.059 15.059v.913c0 8.316-6.743 15.059-15.059 15.059z"\r\n      fill="#64768e"\r\n    />\r\n    <path\r\n      d="m418.912 209.451v31.033h-77.644c-8.531 0-15.455 6.924-15.455 15.455v162.974h-31.022v-162.975c0-8.531-6.923-15.455-15.455-15.455h-120.34l-13.147-13.27 13.147-17.763h44.138c6.718 0 12.673-4.348 14.723-10.746l53.658-167.672h31.033l-50.65 158.255c-3.183 9.974 4.255 20.163 14.723 20.163h152.291z"\r\n      fill="#e8ecf9"\r\n    />\r\n    <path\r\n      d="m93.088 209.451h65.909v31.033h-65.909z"\r\n      fill="#d7ddf5"\r\n    />\r\n    <g>\r\n      <g>\r\n        <path\r\n          d="m129.509 332.474c-4.268 0-7.727-3.459-7.727-7.727v-12.364c0-4.268 3.459-7.727 7.727-7.727s7.727 3.459 7.727 7.727v12.364c0 4.268-3.459 7.727-7.727 7.727z"\r\n          fill="#495560"\r\n        />\r\n      </g>\r\n      <g>\r\n        <path\r\n          d="m258.191 332.474c-4.268 0-7.727-3.459-7.727-7.727v-12.364c0-4.268 3.459-7.727 7.727-7.727s7.727 3.459 7.727 7.727v12.364c.001 4.268-3.458 7.727-7.727 7.727z"\r\n          fill="#495560"\r\n        />\r\n      </g>\r\n      <path\r\n        d="m223.825 324.391c-4.268 0-7.727 3.459-7.727 7.727 0 3.952-3.215 7.167-7.166 7.167-3.952 0-7.167-3.215-7.167-7.167 0-4.268-3.459-7.727-7.727-7.727s-7.727 3.459-7.727 7.727c0 3.952-3.215 7.167-7.166 7.167-3.952 0-7.167-3.215-7.167-7.167 0-4.268-3.459-7.727-7.727-7.727s-7.727 3.459-7.727 7.727c0 12.473 10.148 22.621 22.621 22.621 5.7 0 10.911-2.124 14.894-5.616 3.982 3.492 9.193 5.616 14.894 5.616 12.473 0 22.62-10.148 22.62-22.621-.001-4.268-3.46-7.727-7.728-7.727z"\r\n        fill="#495560"\r\n      />\r\n    </g>\r\n  </g>\r\n</svg>\r\n';

  const externalLink =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  class="icon icon-tabler icon-tabler-external-link"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  stroke-width="2"\r\n  stroke="currentColor"\r\n  fill="none"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />\r\n  <path d="M11 13l9 -9" />\r\n  <path d="M15 4h5v5" />\r\n</svg>\r\n';

  const eye =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  class="icon icon-tabler icon-tabler-eye"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  stroke-width="2"\r\n  stroke="currentColor"\r\n  fill="none"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />\r\n  <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />\r\n</svg>\r\n';

  const eyeOff =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  class="icon icon-tabler icon-tabler-eye-off"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  stroke-width="2"\r\n  stroke="currentColor"\r\n  fill="none"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M10.585 10.587a2 2 0 0 0 2.829 2.828" />\r\n  <path\r\n    d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87"\r\n  />\r\n  <path d="M3 3l18 18" />\r\n</svg>\r\n';

  const fileDownload =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  class="icon icon-tabler icon-tabler-file-download"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  stroke-width="2"\r\n  stroke="currentColor"\r\n  fill="none"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M14 3v4a1 1 0 0 0 1 1h4" />\r\n  <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />\r\n  <path d="M12 17v-6" />\r\n  <path d="M9.5 14.5l2.5 2.5l2.5 -2.5" />\r\n</svg>\r\n';

  const filePercent =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  fill="none"\r\n  stroke="currentColor"\r\n  stroke-width="2"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n  class="icon icon-tabler icons-tabler-outline icon-tabler-file-percent"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M10 17l4 -4" />\r\n  <path d="M14 3v4a1 1 0 0 0 1 1h4" />\r\n  <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />\r\n  <path d="M10 13h.01" />\r\n  <path d="M14 17h.01" />\r\n</svg>\r\n';

  const handClick =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  fill="none"\r\n  stroke="currentColor"\r\n  stroke-width="2"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n  class="icon icon-tabler icons-tabler-outline icon-tabler-hand-click"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M8 13v-8.5a1.5 1.5 0 0 1 3 0v7.5" />\r\n  <path d="M11 11.5v-2a1.5 1.5 0 0 1 3 0v2.5" />\r\n  <path d="M14 10.5a1.5 1.5 0 0 1 3 0v1.5" />\r\n  <path\r\n    d="M17 11.5a1.5 1.5 0 0 1 3 0v4.5a6 6 0 0 1 -6 6h-2h.208a6 6 0 0 1 -5.012 -2.7l-.196 -.3c-.312 -.479 -1.407 -2.388 -3.286 -5.728a1.5 1.5 0 0 1 .536 -2.022a1.867 1.867 0 0 1 2.28 .28l1.47 1.47"\r\n  />\r\n  <path d="M5 3l-1 -1" />\r\n  <path d="M4 7h-1" />\r\n  <path d="M14 3l1 -1" />\r\n  <path d="M15 6h1" />\r\n</svg>\r\n';

  const keyboard =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  class="icon icon-tabler icon-tabler-keyboard"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  stroke-width="2"\r\n  stroke="currentColor"\r\n  fill="none"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M2 6m0 2a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-16a2 2 0 0 1 -2 -2z" />\r\n  <path d="M6 10l0 .01" />\r\n  <path d="M10 10l0 .01" />\r\n  <path d="M14 10l0 .01" />\r\n  <path d="M18 10l0 .01" />\r\n  <path d="M6 14l0 .01" />\r\n  <path d="M18 14l0 .01" />\r\n  <path d="M10 14l4 .01" />\r\n</svg>\r\n';

  const layoutBottombar =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  fill="none"\r\n  stroke="currentColor"\r\n  stroke-width="2"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n  class="icon icon-tabler icons-tabler-outline icon-tabler-layout-bottombar"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />\r\n  <path d="M4 15l16 0" />\r\n</svg>\r\n';

  const layoutBottombarInactive =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  fill="none"\r\n  stroke="currentColor"\r\n  stroke-width="2"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n  class="icon icon-tabler icons-tabler-outline icon-tabler-layout-bottombar-inactive"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z" />\r\n  <path d="M4 15h1" />\r\n  <path d="M19 15h1" />\r\n  <path d="M9 15h1" />\r\n  <path d="M14 15h1" />\r\n</svg>\r\n';

  const layoutSidebar =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  fill="none"\r\n  stroke="currentColor"\r\n  stroke-width="2"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n  class="icon icon-tabler icons-tabler-outline icon-tabler-layout-sidebar"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />\r\n  <path d="M9 4l0 16" />\r\n</svg>\r\n';

  const layoutSidebarInactive =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  fill="none"\r\n  stroke="currentColor"\r\n  stroke-width="2"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n  class="icon icon-tabler icons-tabler-outline icon-tabler-layout-sidebar-inactive"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z" />\r\n  <path d="M9 4v1" />\r\n  <path d="M9 9v1" />\r\n  <path d="M9 14v1" />\r\n  <path d="M9 19v1" />\r\n</svg>\r\n';

  const layoutSidebarRight =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  fill="none"\r\n  stroke="currentColor"\r\n  stroke-width="2"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n  class="icon icon-tabler icons-tabler-outline icon-tabler-layout-sidebar-right"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />\r\n  <path d="M15 4l0 16" />\r\n</svg>\r\n';

  const layoutSidebarRightInactive =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  fill="none"\r\n  stroke="currentColor"\r\n  stroke-width="2"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n  class="icon icon-tabler icons-tabler-outline icon-tabler-layout-sidebar-right-inactive"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z" />\r\n  <path d="M15 4v1" />\r\n  <path d="M15 9v1" />\r\n  <path d="M15 14v1" />\r\n  <path d="M15 19v1" />\r\n</svg>\r\n';

  const listNumbers =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  class="icon icon-tabler icon-tabler-list-numbers"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  stroke-width="2"\r\n  stroke="currentColor"\r\n  fill="none"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M11 6h9" />\r\n  <path d="M11 12h9" />\r\n  <path d="M12 18h8" />\r\n  <path d="M4 16a2 2 0 1 1 4 0c0 .591 -.5 1 -1 1.5l-3 2.5h4" />\r\n  <path d="M6 10v-6l-2 2" />\r\n</svg>\r\n';

  const loader2 =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  class="icon icon-tabler icon-tabler-loader-2"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  stroke-width="2"\r\n  stroke="currentColor"\r\n  fill="none"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M12 3a9 9 0 1 0 9 9" />\r\n</svg>\r\n';

  const locationCog =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  fill="none"\r\n  stroke="currentColor"\r\n  stroke-width="2"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n  class="icon icon-tabler icons-tabler-outline icon-tabler-location-cog"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M12 18l-2 -4l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5l-3.14 8.697" />\r\n  <path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />\r\n  <path d="M19.001 15.5v1.5" />\r\n  <path d="M19.001 21v1.5" />\r\n  <path d="M22.032 17.25l-1.299 .75" />\r\n  <path d="M17.27 20l-1.3 .75" />\r\n  <path d="M15.97 17.25l1.3 .75" />\r\n  <path d="M20.733 20l1.3 .75" />\r\n</svg>\r\n';

  const menu2 =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  class="icon icon-tabler icon-tabler-menu-2"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  stroke-width="2"\r\n  stroke="currentColor"\r\n  fill="none"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M4 6l16 0" />\r\n  <path d="M4 12l16 0" />\r\n  <path d="M4 18l16 0" />\r\n</svg>\r\n';

  const menuDeep =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  fill="none"\r\n  stroke="currentColor"\r\n  stroke-width="2"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n  class="icon icon-tabler icons-tabler-outline icon-tabler-menu-deep"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M4 6h16" />\r\n  <path d="M7 12h13" />\r\n  <path d="M10 18h10" />\r\n</svg>\r\n';

  const message =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  class="icon icon-tabler icon-tabler-message"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  stroke-width="2"\r\n  stroke="currentColor"\r\n  fill="none"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M8 9h8" />\r\n  <path d="M8 13h6" />\r\n  <path\r\n    d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z"\r\n  />\r\n</svg>\r\n';

  const moon =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  class="icon icon-tabler icon-tabler-moon"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  stroke-width="2"\r\n  stroke="currentColor"\r\n  fill="none"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />\r\n</svg>\r\n';

  const PageKawaiiLinealColor =
    '<?xml version="1.0" encoding="UTF-8"?>\r\n<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  version="1.1"\r\n  id="Capa_1"\r\n  x="0px"\r\n  y="0px"\r\n  viewBox="0 0 511.94 511.94"\r\n  style="enable-background: new 0 0 511.94 511.94"\r\n  xml:space="preserve"\r\n  width="512"\r\n  height="512"\r\n>\r\n  <g>\r\n    <g>\r\n      <path\r\n        style="fill: #e8ecf9"\r\n        d="M444.21,67.5v376.94c0,33.14-26.87,60-60,60H127.73c-33.13,0-60-26.86-60-60V67.5&#10;&#9;&#9;&#9;c0-33.14,26.87-60,60-60h256.48C417.34,7.5,444.21,34.36,444.21,67.5z"\r\n      />\r\n      <path\r\n        style="fill: #d7ddf5"\r\n        d="M208.95,504.44h-81.22c-33.13,0-60-26.86-60-60V67.5c0-33.14,26.87-60,60-60h77.64&#10;&#9;&#9;&#9;c-10.96,3.32-26.02,12.08-26.02,35.19v424.02C179.35,492.41,198.62,501.44,208.95,504.44z"\r\n      />\r\n      <path\r\n        style="fill: #c5ced6"\r\n        d="M399.03,67.68v135.64c0,8.29-6.72,15-15,15H179.35l-50.04-21.09V76.2l50.04-23.52h204.68&#10;&#9;&#9;&#9;C392.31,52.68,399.03,59.39,399.03,67.68z"\r\n      />\r\n      <path\r\n        style="fill: #abb6c4"\r\n        d="M179.35,52.68v165.64h-51.44c-8.28,0-15-6.71-15-15V67.68c0-8.29,6.72-15,15-15H179.35z"\r\n      />\r\n      <path\r\n        style="fill: #c5ced6"\r\n        d="M218.32,278.5v7.8l-38.97,40.54l-8.55,8.9l-57.89,4.18l11.97-51.63l54.47-24.79h23.97&#10;&#9;&#9;&#9;C211.61,263.5,218.32,270.22,218.32,278.5z"\r\n      />\r\n      <path\r\n        style="fill: #abb6c4"\r\n        d="M127.91,263.5h51.44v63.34l-8.55,8.9l-57.89,4.18V278.5C112.91,270.22,119.63,263.5,127.91,263.5z"\r\n      />\r\n      <polygon\r\n        style="fill: #c5ced6"\r\n        points="218.32,332.03 218.32,390.66 179.35,432.82 175.27,437.23 112.91,428.85 121.23,408.1 &#10;&#9;&#9;&#9;112.91,382.33 162.16,332.03 &#9;&#9;"\r\n      />\r\n      <polygon\r\n        style="fill: #abb6c4"\r\n        points="179.35,332.03 179.35,432.82 175.27,437.23 112.91,428.85 112.91,382.33 162.16,332.03 &#9;&#9;&#10;&#9;&#9;&#9;"\r\n      />\r\n      <path\r\n        style="fill: #808fa4"\r\n        d="M218.32,286.3v45.73c-2.74,1.68-4.97,4.24-6.2,7.47c-2.29,6-8.01,9.69-14.07,9.69&#10;&#9;&#9;&#9;c-1.79,0-3.61-0.32-5.38-1c-0.53-0.2-1.06-0.37-1.59-0.51c-1.26-0.33-2.52-0.49-3.78-0.49c-2.83,0-5.58,0.8-7.95,2.27&#10;&#9;&#9;&#9;l-10.72-14.45l10.72-31.34c1,0.16,2,0.42,2.98,0.8c0.57,0.22,1.14,0.4,1.72,0.54c1.21,0.31,2.44,0.46,3.66,0.46&#10;&#9;&#9;&#9;c6.06,0,11.78-3.69,14.07-9.69c0.08-0.2,0.16-0.4,0.25-0.59c2.42-5.65,7.95-9.1,13.82-9.1&#10;&#9;&#9;&#9;C216.67,286.09,217.49,286.16,218.32,286.3z"\r\n      />\r\n      <path\r\n        style="fill: #64768e"\r\n        d="M179.35,303.67v45.79c-2.7,1.68-4.9,4.22-6.12,7.42c-0.19,0.49-0.39,0.96-0.63,1.41&#10;&#9;&#9;&#9;c-2.59,5.16-7.87,8.27-13.44,8.27c-0.3,0-0.6-0.01-0.9-0.03c-1.49-0.09-3-0.4-4.47-0.97c-1.77-0.68-3.59-1-5.38-1&#10;&#9;&#9;&#9;c-6.06,0-11.78,3.69-14.07,9.69s-8,9.69-14.07,9.69c-1.78,0-3.6-0.32-5.37-1c-0.66-0.25-1.32-0.46-1.99-0.61v-42.41&#10;&#9;&#9;&#9;c4.89-0.99,9.18-4.39,11.09-9.39c2.29-6,8.01-9.69,14.07-9.69c1.79,0,3.6,0.32,5.37,1c1.77,0.68,3.6,1,5.39,1&#10;&#9;&#9;&#9;c1.08,0,2.16-0.12,3.2-0.35c2.81-0.61,5.41-2.02,7.46-4.07c1.45-1.45,2.62-3.22,3.4-5.26c2.29-6,8-9.69,14.07-9.69&#10;&#9;&#9;&#9;C177.75,303.47,178.55,303.53,179.35,303.67z"\r\n      />\r\n      <path\r\n        style="fill: #808fa4"\r\n        d="M218.32,390.66v53.6c0,8.29-6.71,15-15,15h-23.97l-15.06-23.57l15.06-27.59&#10;&#9;&#9;&#9;c1.83-1.57,3.3-3.61,4.22-6.02c2.29-5.99,8.01-9.68,14.07-9.68c1.79,0,3.61,0.32,5.38,1c1.77,0.68,3.58,1,5.37,1&#10;&#9;&#9;&#9;c1.14,0,2.28-0.13,3.37-0.39h0.01C214.19,393.45,216.45,392.3,218.32,390.66z"\r\n      />\r\n      <path\r\n        style="fill: #64768e"\r\n        d="M169.5,411.77c3.63,0,7.13-1.32,9.85-3.67v51.16h-51.44c-8.28,0-15-6.71-15-15v-15.41&#10;&#9;&#9;&#9;c3.69-1.91,8.15-2.3,12.33-0.7c1.77,0.68,3.59,1,5.38,1c6.06,0,11.78-3.69,14.07-9.69c2.29-6,8-9.69,14.07-9.69&#10;&#9;&#9;&#9;c1.78,0,3.6,0.32,5.37,1C165.9,411.45,167.72,411.77,169.5,411.77z"\r\n      />\r\n      <path\r\n        style="fill: #808fa4"\r\n        d="M399.03,348.77v95.49c0,8.29-6.72,15-15,15h-67.02l-53.51-90.93V278.5c0-8.28,6.72-15,15-15h61.06&#10;&#9;&#9;&#9;L399.03,348.77z"\r\n      />\r\n      <path\r\n        style="fill: #abb6c4"\r\n        d="M376.44,331.26l-59.43,128H278.5c-8.28,0-15-6.71-15-15v-75.93l75.29-52.12L376.44,331.26z"\r\n      />\r\n      <path\r\n        style="fill: #c5ced6"\r\n        d="M399.03,278.5v70.27c-6.85,3.26-14.51,5.08-22.59,5.08c-3.43,0-6.79-0.33-10.04-0.96&#10;&#9;&#9;&#9;c-16.83-3.24-30.81-14.49-37.81-29.62c-3.12-6.72-4.86-14.22-4.86-22.12c0-14.75,6.06-28.09,15.83-37.65h44.47&#10;&#9;&#9;&#9;C392.31,263.5,399.03,270.22,399.03,278.5z"\r\n      />\r\n      <g>\r\n        <g>\r\n          <ellipse\r\n            style="fill: #ffffff"\r\n            cx="175.162"\r\n            cy="150.402"\r\n            rx="29.816"\r\n            ry="23.744"\r\n          />\r\n          <ellipse\r\n            style="fill: #ffffff"\r\n            cx="336.778"\r\n            cy="150.402"\r\n            rx="29.816"\r\n            ry="23.744"\r\n          />\r\n        </g>\r\n      </g>\r\n    </g>\r\n    <g>\r\n      <path\r\n        style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        "\r\n        d="&#10;&#9;&#9;&#9;M67.73,402.54v41.9c0,33.14,26.87,60,60,60h256.48c33.13,0,60-26.86,60-60V67.5c0-33.14-26.87-60-60-60H127.73&#10;&#9;&#9;&#9;c-33.13,0-60,26.86-60,60v300.04"\r\n      />\r\n      <path\r\n        style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        "\r\n        d="&#10;&#9;&#9;&#9;M359,52.68h25.03c8.28,0,15,6.71,15,15v135.64c0,8.29-6.72,15-15,15H127.91c-8.28,0-15-6.71-15-15V67.68c0-8.29,6.72-15,15-15H324&#10;&#9;&#9;&#9;"\r\n      />\r\n      <path\r\n        style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        "\r\n        d="&#10;&#9;&#9;&#9;M203.323,459.264h-75.412c-8.284,0-15-6.716-15-15V278.499c0-8.284,6.716-15,15-15h75.412c8.284,0,15,6.716,15,15v165.765&#10;&#9;&#9;&#9;C218.323,452.548,211.607,459.264,203.323,459.264z"\r\n      />\r\n      <path\r\n        style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        "\r\n        d="&#10;&#9;&#9;&#9;M399.03,278.5v165.76c0,8.29-6.72,15-15,15H278.5c-8.28,0-15-6.71-15-15V278.5c0-8.28,6.72-15,15-15h105.53&#10;&#9;&#9;&#9;C392.31,263.5,399.03,270.22,399.03,278.5z"\r\n      />\r\n\r\n      <line\r\n        style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        "\r\n        x1="264.641"\r\n        y1="367.54"\r\n        x2="327.14"\r\n        y2="324.275"\r\n      />\r\n\r\n      <line\r\n        style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        "\r\n        x1="335.24"\r\n        y1="420"\r\n        x2="317.58"\r\n        y2="458.04"\r\n      />\r\n\r\n      <line\r\n        style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        "\r\n        x1="365.42"\r\n        y1="354.99"\r\n        x2="349.98"\r\n        y2="388.25"\r\n      />\r\n      <path\r\n        style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        "\r\n        d="&#10;&#9;&#9;&#9;M337.07,266.11c-14.481,16.226-16.955,38.907-8.48,57.16c12.198,26.365,43.179,37.557,69.06,26.13"\r\n      />\r\n      <path\r\n        style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        "\r\n        d="&#10;&#9;&#9;&#9;M114.09,339.63c4.39-1.26,8.16-4.51,9.91-9.1c2.29-6,8.01-9.69,14.07-9.69c4.907,0,5.826,2,10.76,2&#10;&#9;&#9;&#9;c6.016,0,11.752-3.643,14.06-9.68c2.29-6,8-9.69,14.07-9.69c3.551,0,5.135,1.068,7.09,1.54c7.171,1.837,14.948-1.942,17.73-9.23&#10;&#9;&#9;&#9;c2.653-6.632,8.993-10.222,15.36-9.63"\r\n      />\r\n      <path\r\n        style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        "\r\n        d="&#10;&#9;&#9;&#9;M114.09,382.66c0.973,0.288,2.952,1.28,6.18,1.28c6.07,0,11.78-3.69,14.07-9.69c2.29-6,8.01-9.69,14.07-9.69&#10;&#9;&#9;&#9;c4.605,0,5.534,1.709,9.85,1.97c6.213,0.414,12.476-3.218,14.97-9.65c2.891-7.576,11.422-11.716,19.44-8.69&#10;&#9;&#9;&#9;c7.75,2.977,16.481-0.911,19.45-8.69c1.05-2.75,2.82-5.02,5.02-6.66"\r\n      />\r\n      <path\r\n        style="\r\n          fill: none;\r\n          stroke: #000000;\r\n          stroke-width: 15;\r\n          stroke-linecap: round;\r\n          stroke-linejoin: round;\r\n          stroke-miterlimit: 10;\r\n        "\r\n        d="&#10;&#9;&#9;&#9;M114.09,428.31c3.44-1.43,7.41-1.59,11.15-0.16c7.75,2.977,16.481-0.911,19.45-8.69c2.29-6,8-9.69,14.07-9.69&#10;&#9;&#9;&#9;c4.886,0,5.854,2,10.74,2c6.07,0,11.78-3.69,14.07-9.69c2.29-5.99,8.01-9.68,14.07-9.68c4.907,0,5.856,2,10.75,2&#10;&#9;&#9;&#9;c3.118,0,6.213-0.998,8.75-2.81"\r\n      />\r\n      <g>\r\n        <g>\r\n          <g>\r\n            <path\r\n              style="\r\n                fill: none;\r\n                stroke: #000000;\r\n                stroke-width: 15;\r\n                stroke-linecap: round;\r\n                stroke-miterlimit: 10;\r\n              "\r\n              d="M255.97,129.317&#10;&#9;&#9;&#9;&#9;&#9;&#9;c0,7.984-6.472,14.456-14.456,14.456c-7.984,0-14.456-6.472-14.456-14.456"\r\n            />\r\n            <path\r\n              style="\r\n                fill: none;\r\n                stroke: #000000;\r\n                stroke-width: 15;\r\n                stroke-linecap: round;\r\n                stroke-miterlimit: 10;\r\n              "\r\n              d="M284.881,129.317&#10;&#9;&#9;&#9;&#9;&#9;&#9;c0,7.984-6.472,14.456-14.456,14.456c-7.984,0-14.456-6.472-14.456-14.456"\r\n            />\r\n          </g>\r\n        </g>\r\n        <path\r\n          style="\r\n            fill: none;\r\n            stroke: #000000;\r\n            stroke-width: 15;\r\n            stroke-linecap: round;\r\n            stroke-linejoin: round;\r\n            stroke-miterlimit: 10;\r\n          "\r\n          d="&#10;&#9;&#9;&#9;&#9;M208.213,117.501c0-7.602-6.163-13.765-13.765-13.765c-7.602,0-13.765,6.163-13.765,13.765"\r\n        />\r\n        <path\r\n          style="\r\n            fill: none;\r\n            stroke: #000000;\r\n            stroke-width: 15;\r\n            stroke-linecap: round;\r\n            stroke-linejoin: round;\r\n            stroke-miterlimit: 10;\r\n          "\r\n          d="&#10;&#9;&#9;&#9;&#9;M303.727,117.501c0-7.602,6.163-13.765,13.765-13.765c7.602,0,13.765,6.163,13.765,13.765"\r\n        />\r\n      </g>\r\n    </g>\r\n  </g>\r\n</svg>\r\n';

  const PageKawaiiFlat =
    '<svg\r\n  id="Capa_1"\r\n  enable-background="new 0 0 512 512"\r\n  height="512"\r\n  viewBox="0 0 512 512"\r\n  width="512"\r\n  xmlns="http://www.w3.org/2000/svg"\r\n>\r\n  <g>\r\n    <path\r\n      d="m449.945 61.818v388.363c0 34.144-27.684 61.818-61.818 61.818h-264.253c-34.134 0-61.818-27.674-61.818-61.818v-388.363c-.001-34.144 27.684-61.818 61.818-61.818h264.253c34.133 0 61.818 27.674 61.818 61.818z"\r\n      fill="#e8ecf9"\r\n    />\r\n    <path\r\n      d="m207.555 512h-83.681c-34.134 0-61.818-27.674-61.818-61.818v-388.364c-.001-34.144 27.684-61.818 61.818-61.818h79.993c-11.292 3.421-26.809 12.446-26.809 36.256v436.87c0 26.479 19.854 35.783 30.497 38.874z"\r\n      fill="#d7ddf5"\r\n    />\r\n    <path\r\n      d="m403.396 62.004v139.751c0 8.541-6.924 15.455-15.455 15.455h-210.883l-51.556-21.729v-124.699l51.556-24.233h210.883c8.531 0 15.455 6.913 15.455 15.455z"\r\n      fill="#c5ced6"\r\n    />\r\n    <path\r\n      d="m177.058 46.549v170.66h-52.999c-8.531 0-15.455-6.913-15.455-15.455v-139.75c0-8.541 6.924-15.455 15.455-15.455z"\r\n      fill="#abb6c4"\r\n    />\r\n    <path\r\n      d="m217.209 279.213v8.036l-40.151 41.769-8.809 9.17-59.644 4.307 12.333-53.195 56.121-25.541h24.696c8.541-.001 15.454 6.923 15.454 15.454z"\r\n      fill="#c5ced6"\r\n    />\r\n    <path\r\n      d="m124.059 263.758h52.999v65.26l-8.809 9.17-59.644 4.307v-63.281c-.001-8.532 6.923-15.456 15.454-15.456z"\r\n      fill="#abb6c4"\r\n    />\r\n    <path\r\n      d="m217.209 334.365v60.407l-40.151 43.438-4.204 4.543-64.25-8.634 8.573-21.379-8.573-26.551 50.743-51.824z"\r\n      fill="#c5ced6"\r\n    />\r\n    <path\r\n      d="m177.058 334.365v103.845l-4.204 4.543-64.25-8.634v-47.93l50.743-51.824z"\r\n      fill="#abb6c4"\r\n    />\r\n    <path\r\n      d="m217.209 287.249v47.116c-2.823 1.731-5.121 4.368-6.388 7.696-2.359 6.182-8.253 9.984-14.496 9.984-1.844 0-3.719-.33-5.543-1.03-.546-.206-1.092-.381-1.638-.525-1.298-.34-2.596-.505-3.895-.505-2.916 0-5.749.824-8.191 2.339l-11.045-14.888 11.045-32.29c1.03.165 2.061.433 3.07.824.587.227 1.175.412 1.772.556 1.247.319 2.514.474 3.771.474 6.244 0 12.137-3.802 14.496-9.984.082-.206.165-.412.258-.608 2.493-5.821 8.191-9.376 14.239-9.376.845.001 1.69.073 2.545.217z"\r\n      fill="#808fa4"\r\n    />\r\n    <path\r\n      d="m177.058 305.146v47.178c-2.782 1.731-5.049 4.348-6.305 7.645-.196.505-.402.989-.649 1.453-2.669 5.316-8.108 8.521-13.847 8.521-.309 0-.618-.01-.927-.031-1.535-.093-3.091-.412-4.605-.999-1.824-.701-3.699-1.03-5.543-1.03-6.244 0-12.137 3.802-14.496 9.984s-8.242 9.984-14.496 9.984c-1.834 0-3.709-.33-5.533-1.03-.68-.258-1.36-.474-2.05-.628v-43.695c5.038-1.02 9.458-4.523 11.426-9.674 2.359-6.182 8.253-9.984 14.496-9.984 1.844 0 3.709.33 5.533 1.03 1.824.701 3.709 1.03 5.553 1.03 1.113 0 2.226-.124 3.297-.361 2.895-.629 5.574-2.081 7.686-4.193 1.494-1.494 2.699-3.318 3.503-5.419 2.359-6.182 8.242-9.984 14.496-9.984.813-.003 1.637.058 2.461.203z"\r\n      fill="#64768e"\r\n    />\r\n    <path\r\n      d="m217.209 394.772v55.224c0 8.541-6.913 15.455-15.455 15.455h-24.696l-15.516-24.284 15.516-28.426c1.885-1.618 3.4-3.719 4.348-6.202 2.359-6.172 8.253-9.973 14.496-9.973 1.844 0 3.719.33 5.543 1.03 1.824.701 3.689 1.03 5.533 1.03 1.175 0 2.349-.134 3.472-.402h.01c2.494-.578 4.822-1.762 6.749-3.452z"\r\n      fill="#808fa4"\r\n    />\r\n    <path\r\n      d="m166.91 416.522c3.74 0 7.346-1.36 10.148-3.781v52.71h-52.999c-8.531 0-15.455-6.913-15.455-15.455v-15.877c3.802-1.968 8.397-2.37 12.704-.721 1.824.701 3.699 1.03 5.543 1.03 6.244 0 12.137-3.802 14.496-9.984s8.242-9.984 14.496-9.984c1.834 0 3.709.33 5.533 1.03 1.824.702 3.7 1.032 5.534 1.032z"\r\n      fill="#64768e"\r\n    />\r\n    <path\r\n      d="m403.396 351.612v98.384c0 8.541-6.924 15.455-15.455 15.455h-69.051l-55.132-93.686v-92.552c0-8.531 6.924-15.455 15.455-15.455h62.91z"\r\n      fill="#808fa4"\r\n    />\r\n    <path\r\n      d="m380.121 333.572-61.231 131.879h-39.677c-8.531 0-15.455-6.913-15.455-15.455v-78.231l77.572-53.699z"\r\n      fill="#abb6c4"\r\n    />\r\n    <path\r\n      d="m403.396 279.213v72.4c-7.058 3.359-14.95 5.234-23.275 5.234-3.534 0-6.996-.34-10.344-.989-17.34-3.338-31.744-14.929-38.956-30.518-3.215-6.924-5.007-14.651-5.007-22.79 0-15.197 6.244-28.941 16.31-38.791h45.818c8.53-.001 15.454 6.923 15.454 15.454z"\r\n      fill="#c5ced6"\r\n    />\r\n    <g>\r\n      <g>\r\n        <ellipse\r\n          cx="172.744"\r\n          cy="147.233"\r\n          fill="#fff"\r\n          rx="30.72"\r\n          ry="24.464"\r\n        />\r\n        <ellipse\r\n          cx="339.256"\r\n          cy="147.233"\r\n          fill="#fff"\r\n          rx="30.72"\r\n          ry="24.464"\r\n        />\r\n        <path\r\n          d="m285.787 117.781c-4.268 0-7.727 3.46-7.727 7.727 0 3.952-3.215 7.166-7.166 7.166s-7.166-3.215-7.166-7.166c0-4.268-3.46-7.727-7.727-7.727-4.268 0-7.727 3.46-7.727 7.727 0 3.952-3.215 7.166-7.166 7.166-3.952 0-7.166-3.215-7.166-7.166 0-4.268-3.46-7.727-7.727-7.727-4.268 0-7.727 3.46-7.727 7.727 0 12.473 10.148 22.621 22.621 22.621 5.701 0 10.911-2.124 14.894-5.616 3.982 3.492 9.193 5.616 14.894 5.616 12.473 0 22.621-10.148 22.621-22.621-.003-4.267-3.463-7.727-7.731-7.727z"\r\n          fill="#495560"\r\n        />\r\n      </g>\r\n      <g>\r\n        <path\r\n          d="m206.795 121.062c-4.268 0-7.727-3.46-7.727-7.727 0-3.559-2.896-6.454-6.455-6.454s-6.455 2.895-6.455 6.454c0 4.268-3.46 7.727-7.727 7.727-4.268 0-7.727-3.46-7.727-7.727 0-12.081 9.829-21.909 21.91-21.909s21.91 9.828 21.91 21.909c-.001 4.267-3.461 7.727-7.729 7.727z"\r\n          fill="#495560"\r\n        />\r\n      </g>\r\n      <g>\r\n        <path\r\n          d="m333.569 121.062c-4.268 0-7.727-3.46-7.727-7.727 0-3.559-2.896-6.454-6.455-6.454s-6.455 2.895-6.455 6.454c0 4.268-3.46 7.727-7.727 7.727-4.268 0-7.727-3.46-7.727-7.727 0-12.081 9.829-21.909 21.91-21.909s21.91 9.828 21.91 21.909c-.001 4.267-3.461 7.727-7.729 7.727z"\r\n          fill="#495560"\r\n        />\r\n      </g>\r\n    </g>\r\n  </g>\r\n</svg>\r\n';

  const palette =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  class="icon icon-tabler icon-tabler-palette"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  stroke-width="2"\r\n  stroke="currentColor"\r\n  fill="none"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path\r\n    d="M12 21a9 9 0 0 1 0 -18c4.97 0 9 3.582 9 8c0 1.06 -.474 2.078 -1.318 2.828c-.844 .75 -1.989 1.172 -3.182 1.172h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25"\r\n  />\r\n  <path d="M8.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />\r\n  <path d="M12.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />\r\n  <path d="M16.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />\r\n</svg>\r\n';

  const pencil =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  class="icon icon-tabler icon-tabler-pencil"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  stroke-width="2"\r\n  stroke="currentColor"\r\n  fill="none"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />\r\n  <path d="M13.5 6.5l4 4" />\r\n</svg>\r\n';

  const pencilCog =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  fill="none"\r\n  stroke="currentColor"\r\n  stroke-width="2"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n  class="icon icon-tabler icons-tabler-outline icon-tabler-pencil-cog"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />\r\n  <path d="M13.5 6.5l4 4" />\r\n  <path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />\r\n  <path d="M19.001 15.5v1.5" />\r\n  <path d="M19.001 21v1.5" />\r\n  <path d="M22.032 17.25l-1.299 .75" />\r\n  <path d="M17.27 20l-1.3 .75" />\r\n  <path d="M15.97 17.25l1.3 .75" />\r\n  <path d="M20.733 20l1.3 .75" />\r\n</svg>\r\n';

  const photo =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  class="icon icon-tabler icon-tabler-photo"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  stroke-width="2"\r\n  stroke="currentColor"\r\n  fill="none"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M15 8h.01" />\r\n  <path d="M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z" />\r\n  <path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5" />\r\n  <path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3" />\r\n</svg>\r\n';

  const photoOff =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  class="icon icon-tabler icon-tabler-photo-off"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  stroke-width="2"\r\n  stroke="currentColor"\r\n  fill="none"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M15 8h.01" />\r\n  <path\r\n    d="M7 3h11a3 3 0 0 1 3 3v11m-.856 3.099a2.991 2.991 0 0 1 -2.144 .901h-12a3 3 0 0 1 -3 -3v-12c0 -.845 .349 -1.608 .91 -2.153"\r\n  />\r\n  <path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5" />\r\n  <path d="M16.33 12.338c.574 -.054 1.155 .166 1.67 .662l3 3" />\r\n  <path\r\n    d="M3 3l18 18"\r\n    color="orange"\r\n  />\r\n</svg>\r\n';

  const pin =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  fill="none"\r\n  stroke="currentColor"\r\n  stroke-width="2"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n  class="icon icon-tabler icons-tabler-outline icon-tabler-pin"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M15 4.5l-4 4l-4 1.5l-1.5 1.5l7 7l1.5 -1.5l1.5 -4l4 -4" />\r\n  <path d="M9 15l-4.5 4.5" />\r\n  <path d="M14.5 4l5.5 5.5" />\r\n</svg>\r\n';

  const playerPause =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  class="icon icon-tabler icon-tabler-player-pause"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  stroke-width="2"\r\n  stroke="currentColor"\r\n  fill="none"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M6 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />\r\n  <path d="M14 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />\r\n</svg>\r\n';

  const playerPlay =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  class="icon icon-tabler icon-tabler-player-play"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  stroke-width="2"\r\n  stroke="currentColor"\r\n  fill="none"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M7 4v16l13 -8z" />\r\n</svg>\r\n';

  const refresh =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  class="icon icon-tabler icon-tabler-refresh"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  stroke-width="2"\r\n  stroke="currentColor"\r\n  fill="none"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" />\r\n  <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" />\r\n</svg>\r\n';

  const settings =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  class="icon icon-tabler icon-tabler-settings"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  stroke-width="2"\r\n  stroke="currentColor"\r\n  fill="none"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path\r\n    d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"\r\n  />\r\n  <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />\r\n</svg>\r\n';

  const settingsOff =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  fill="none"\r\n  stroke="currentColor"\r\n  stroke-width="2"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n  class="icon icon-tabler icons-tabler-outline icon-tabler-settings-off"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path\r\n    d="M9.451 5.437c.418 -.218 .75 -.609 .874 -1.12c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35c-.486 .118 -.894 .44 -1.123 .878m-.188 3.803c-.517 .523 -1.349 .734 -2.125 .262a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.472 -.774 -.262 -1.604 .259 -2.121"\r\n  />\r\n  <path d="M9.889 9.869a3 3 0 1 0 4.226 4.26m.592 -3.424a3.012 3.012 0 0 0 -1.419 -1.415" />\r\n  <path d="M3 3l18 18" />\r\n</svg>\r\n';

  const spacingVertical =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  class="icon icon-tabler icon-tabler-spacing-vertical"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  stroke-width="2"\r\n  stroke="currentColor"\r\n  fill="none"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M4 20v-2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v2" />\r\n  <path d="M4 4v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />\r\n  <path d="M16 12h-8" />\r\n</svg>\r\n';

  const sun =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  class="icon icon-tabler icon-tabler-sun"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  stroke-width="2"\r\n  stroke="currentColor"\r\n  fill="none"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />\r\n  <path\r\n    d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"\r\n  />\r\n</svg>\r\n';

  const trash =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  class="icon icon-tabler icon-tabler-trash"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  stroke-width="2"\r\n  stroke="currentColor"\r\n  fill="none"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M4 7l16 0" />\r\n  <path d="M10 11l0 6" />\r\n  <path d="M14 11l0 6" />\r\n  <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />\r\n  <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />\r\n</svg>\r\n';

  const worldCog =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  fill="none"\r\n  stroke="currentColor"\r\n  stroke-width="2"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n  class="icon icon-tabler icons-tabler-outline icon-tabler-world-cog"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M21 12a9 9 0 1 0 -8.979 9" />\r\n  <path d="M3.6 9h16.8" />\r\n  <path d="M3.6 15h8.9" />\r\n  <path d="M11.5 3a17 17 0 0 0 0 18" />\r\n  <path d="M12.5 3a16.992 16.992 0 0 1 2.522 10.376" />\r\n  <path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />\r\n  <path d="M19.001 15.5v1.5" />\r\n  <path d="M19.001 21v1.5" />\r\n  <path d="M22.032 17.25l-1.299 .75" />\r\n  <path d="M17.27 20l-1.3 .75" />\r\n  <path d="M15.97 17.25l1.3 .75" />\r\n  <path d="M20.733 20l1.3 .75" />\r\n</svg>\r\n';

  const x =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  class="icon icon-tabler icon-tabler-x"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  stroke-width="2"\r\n  stroke="currentColor"\r\n  fill="none"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M18 6l-12 12" />\r\n  <path d="M6 6l12 12" />\r\n</svg>\r\n';

  const zoom =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  fill="none"\r\n  stroke="currentColor"\r\n  stroke-width="2"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n  class="icon icon-tabler icons-tabler-outline icon-tabler-zoom"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />\r\n  <path d="M21 21l-6 -6" />\r\n</svg>\r\n';

  const zoomCancel =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  class="icon icon-tabler icon-tabler-zoom-cancel"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  stroke-width="2"\r\n  stroke="currentColor"\r\n  fill="none"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />\r\n  <path d="M8 8l4 4" />\r\n  <path d="M12 8l-4 4" />\r\n  <path d="M21 21l-6 -6" />\r\n</svg>\r\n';

  const zoomIn =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  class="icon icon-tabler icon-tabler-zoom-in"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  stroke-width="2"\r\n  stroke="currentColor"\r\n  fill="none"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />\r\n  <path d="M7 10l6 0" />\r\n  <path d="M10 7l0 6" />\r\n  <path d="M21 21l-6 -6" />\r\n</svg>\r\n';

  const zoomInArea =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  class="icon icon-tabler icon-tabler-zoom-in-area"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  stroke-width="2"\r\n  stroke="currentColor"\r\n  fill="none"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M15 13v4" />\r\n  <path d="M13 15h4" />\r\n  <path d="M15 15m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />\r\n  <path d="M22 22l-3 -3" />\r\n  <path d="M6 18h-1a2 2 0 0 1 -2 -2v-1" />\r\n  <path d="M3 11v-1" />\r\n  <path d="M3 6v-1a2 2 0 0 1 2 -2h1" />\r\n  <path d="M10 3h1" />\r\n  <path d="M15 3h1a2 2 0 0 1 2 2v1" />\r\n</svg>\r\n';

  const zoomOut =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  class="icon icon-tabler icon-tabler-zoom-out"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  stroke-width="2"\r\n  stroke="currentColor"\r\n  fill="none"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />\r\n  <path d="M7 10l6 0" />\r\n  <path d="M21 21l-6 -6" />\r\n</svg>\r\n';

  const zoomOutArea =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  class="icon icon-tabler icon-tabler-zoom-out-area"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  stroke-width="2"\r\n  stroke="currentColor"\r\n  fill="none"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M13 15h4" />\r\n  <path d="M15 15m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />\r\n  <path d="M22 22l-3 -3" />\r\n  <path d="M6 18h-1a2 2 0 0 1 -2 -2v-1" />\r\n  <path d="M3 11v-1" />\r\n  <path d="M3 6v-1a2 2 0 0 1 2 -2h1" />\r\n  <path d="M10 3h1" />\r\n  <path d="M15 3h1a2 2 0 0 1 2 2v1" />\r\n</svg>\r\n';

  const zoomPan =
    '<svg\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  class="icon icon-tabler icon-tabler-zoom-pan"\r\n  width="24"\r\n  height="24"\r\n  viewBox="0 0 24 24"\r\n  stroke-width="2"\r\n  stroke="currentColor"\r\n  fill="none"\r\n  stroke-linecap="round"\r\n  stroke-linejoin="round"\r\n>\r\n  <path\r\n    stroke="none"\r\n    d="M0 0h24v24H0z"\r\n    fill="none"\r\n  />\r\n  <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />\r\n  <path d="M17 17l-2.5 -2.5" />\r\n  <path d="M10 5l2 -2l2 2" />\r\n  <path d="M19 10l2 2l-2 2" />\r\n  <path d="M5 10l-2 2l2 2" />\r\n  <path d="M10 19l2 2l2 -2" />\r\n</svg>\r\n';

  const rawIcons = /*#__PURE__*/ Object.freeze(
    /*#__PURE__*/ Object.defineProperty(
      {
        __proto__: null,
        IconArrowAutofitDown: arrowAutofitDown,
        IconArrowAutofitHeight: arrowAutofitHeight,
        IconArrowAutofitLeft: arrowAutofitLeft,
        IconArrowAutofitRight: arrowAutofitRight,
        IconArrowAutofitWidth: arrowAutofitWidth,
        IconArrowBigLeft: arrowBigLeft,
        IconArrowBigRight: arrowBigRight,
        IconArrowsMove: arrowsMove,
        IconArrowsMoveVertical: arrowsMoveVertical,
        IconArrowsVertical: arrowsVertical,
        IconBook: book,
        IconBookReturn: bookReturn,
        IconBookUpload: bookUpload,
        IconBookmark: bookmark,
        IconBookmarkOff: bookmarkOff,
        IconBookmarks: bookmarks,
        IconBoxAlignTop: boxAlignTop,
        IconCategory: category,
        IconCheck: check,
        IconChevronRight: chevronRight,
        IconComic1: Comic1SpecialLinealColor,
        IconComic1Flat: Comic1SpecialFlat,
        IconComic2: Comic2SpecialLinealColor,
        IconComic2Flat: Comic2SpecialFlat,
        IconComic3: Comic3SpecialLinealColor,
        IconComic3Flat: Comic3SpecialFlat,
        IconDeviceFloppy: deviceFloppy,
        IconDotsVertical: dotsVertical,
        IconEReader1: EReader1KawaiiLinealColor,
        IconEReader1Flat: EReader1KawaiiFlat,
        IconEReader2: EReader2KawaiiLinealColor,
        IconEReader2Flat: EReader2KawaiiFlat,
        IconExternalLink: externalLink,
        IconEye: eye,
        IconEyeOff: eyeOff,
        IconFileDownload: fileDownload,
        IconFilePercent: filePercent,
        IconHandClick: handClick,
        IconKeyboard: keyboard,
        IconLayoutBottombar: layoutBottombar,
        IconLayoutBottombarInactive: layoutBottombarInactive,
        IconLayoutSidebar: layoutSidebar,
        IconLayoutSidebarInactive: layoutSidebarInactive,
        IconLayoutSidebarRight: layoutSidebarRight,
        IconLayoutSidebarRightInactive: layoutSidebarRightInactive,
        IconListNumbers: listNumbers,
        IconLoader2: loader2,
        IconLocationCog: locationCog,
        IconMenu2: menu2,
        IconMenuDeep: menuDeep,
        IconMessage: message,
        IconMoon: moon,
        IconPage: PageKawaiiLinealColor,
        IconPageFlat: PageKawaiiFlat,
        IconPalette: palette,
        IconPencil: pencil,
        IconPencilCog: pencilCog,
        IconPhoto: photo,
        IconPhotoOff: photoOff,
        IconPin: pin,
        IconPlayerPause: playerPause,
        IconPlayerPlay: playerPlay,
        IconRefresh: refresh,
        IconSettings: settings,
        IconSettingsOff: settingsOff,
        IconSpacingVertical: spacingVertical,
        IconSun: sun,
        IconTrash: trash,
        IconWorldCog: worldCog,
        IconX: x,
        IconZoom: zoom,
        IconZoomCancel: zoomCancel,
        IconZoomIn: zoomIn,
        IconZoomInArea: zoomInArea,
        IconZoomOut: zoomOut,
        IconZoomOutArea: zoomOutArea,
        IconZoomPan: zoomPan,
      },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  );

  function parseCss(css) {
    const ruleRegex = /([^{}]+)\s*\{([^}]+)\}/g;
    return [...css.matchAll(ruleRegex)]
      .map(match => {
        const selectorsBlock = match[1].trim();
        const properties = match[2];
        const colorMatch = /color:\s*([^;]+)/.exec(properties);
        if (colorMatch) {
          const color = colorMatch[1].trim();
          const selectors = selectorsBlock.split(',').map(s => s.trim().replace(/\s\s+/g, ' '));
          return { selectors, color };
        }
        return null;
      })
      .filter(rule => rule !== null);
  }
  const colorRules = parseCss(iconsCSS);
  const parser = new DOMParser();
  const serializer = new XMLSerializer();
  function applyColorsToSvg(svgString, className) {
    const doc = parser.parseFromString(svgString, 'image/svg+xml');
    const svg = doc.documentElement;
    if (svg.querySelector('parsererror')) {
      console.error(`Error parsing SVG for ${className}`);
      return svgString;
    }
    for (const rule of colorRules) {
      for (const selector of rule.selectors) {
        if (selector.startsWith(`.${className}`)) {
          const selectorMatch = selector.match(new RegExp(`^\\.${className}\\s*(.*)$`));
          if (selectorMatch) {
            let subSelector = selectorMatch[1].trim() || '*';
            if (subSelector.startsWith('>')) {
              subSelector = subSelector.substring(1).trim();
            }
            try {
              const elements = svg.querySelectorAll(subSelector);
              elements.forEach(el => {
                el.setAttribute('stroke', rule.color);
              });
            } catch (e) {
              console.error(`Invalid selector "${subSelector}" for ${className}`, e);
            }
          }
        }
      }
    }
    return serializer.serializeToString(svg);
  }
  const styledIcons = Object.fromEntries(
    Object.keys(rawIcons).map(iconKey => {
      const kebabCaseName = iconKey
        .replace(/^Icon/, '')
        .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
        .toLowerCase();
      const rawSvg = rawIcons[iconKey];
      const className = `icon-tabler-${kebabCaseName}`;
      const styledSvg = applyColorsToSvg(rawSvg, className);
      return [iconKey, styledSvg];
    }),
  );
  const {
    IconArrowAutofitDown: IconArrowAutofitDown$1,
    IconArrowAutofitHeight: IconArrowAutofitHeight$1,
    IconArrowAutofitLeft: IconArrowAutofitLeft$1,
    IconArrowAutofitRight: IconArrowAutofitRight$1,
    IconArrowAutofitWidth: IconArrowAutofitWidth$1,
    IconArrowBigLeft: IconArrowBigLeft$1,
    IconArrowBigRight: IconArrowBigRight$1,
    IconArrowsMove: IconArrowsMove$1,
    IconArrowsMoveVertical: IconArrowsMoveVertical$1,
    IconArrowsVertical: IconArrowsVertical$1,
    IconBook: IconBook$1,
    IconBookReturn: IconBookReturn$1,
    IconBookUpload: IconBookUpload$1,
    IconBookmark: IconBookmark$1,
    IconBookmarkOff: IconBookmarkOff$1,
    IconBookmarks: IconBookmarks$1,
    IconBoxAlignTop: IconBoxAlignTop$1,
    IconCategory: IconCategory$1,
    IconCheck: IconCheck$1,
    IconChevronRight: IconChevronRight$1,
    IconComic1: IconComic1$1,
    IconComic1Flat: IconComic1Flat$1,
    IconComic2: IconComic2$1,
    IconComic2Flat: IconComic2Flat$1,
    IconComic3: IconComic3$1,
    IconComic3Flat: IconComic3Flat$1,
    IconDeviceFloppy: IconDeviceFloppy$1,
    IconDotsVertical: IconDotsVertical$1,
    IconEReader1: IconEReader1$1,
    IconEReader1Flat: IconEReader1Flat$1,
    IconEReader2: IconEReader2$1,
    IconEReader2Flat: IconEReader2Flat$1,
    IconExternalLink: IconExternalLink$1,
    IconEye: IconEye$1,
    IconEyeOff: IconEyeOff$1,
    IconFileDownload: IconFileDownload$1,
    IconFilePercent: IconFilePercent$1,
    IconHandClick: IconHandClick$1,
    IconKeyboard: IconKeyboard$1,
    IconLayoutBottombar: IconLayoutBottombar$1,
    IconLayoutBottombarInactive: IconLayoutBottombarInactive$1,
    IconLayoutSidebar: IconLayoutSidebar$1,
    IconLayoutSidebarInactive: IconLayoutSidebarInactive$1,
    IconLayoutSidebarRight: IconLayoutSidebarRight$1,
    IconLayoutSidebarRightInactive: IconLayoutSidebarRightInactive$1,
    IconListNumbers: IconListNumbers$1,
    IconLoader2: IconLoader2$1,
    IconLocationCog: IconLocationCog$1,
    IconMenu2: IconMenu2$1,
    IconMenuDeep: IconMenuDeep$1,
    IconMessage: IconMessage$1,
    IconMoon: IconMoon$1,
    IconPage: IconPage$1,
    IconPageFlat: IconPageFlat$1,
    IconPalette: IconPalette$1,
    IconPencil: IconPencil$1,
    IconPencilCog: IconPencilCog$1,
    IconPhoto: IconPhoto$1,
    IconPhotoOff: IconPhotoOff$1,
    IconPin: IconPin$1,
    IconPlayerPause: IconPlayerPause$1,
    IconPlayerPlay: IconPlayerPlay$1,
    IconRefresh: IconRefresh$1,
    IconSettings: IconSettings$1,
    IconSettingsOff: IconSettingsOff$1,
    IconSpacingVertical: IconSpacingVertical$1,
    IconSun: IconSun$1,
    IconTrash: IconTrash$1,
    IconWorldCog: IconWorldCog$1,
    IconX: IconX$1,
    IconZoom: IconZoom$1,
    IconZoomCancel: IconZoomCancel$1,
    IconZoomIn: IconZoomIn$1,
    IconZoomInArea: IconZoomInArea$1,
    IconZoomOut: IconZoomOut$1,
    IconZoomOutArea: IconZoomOutArea$1,
    IconZoomPan: IconZoomPan$1,
  } = styledIcons;

  const styledIcons$1 = /*#__PURE__*/ Object.freeze(
    /*#__PURE__*/ Object.defineProperty(
      {
        __proto__: null,
        IconArrowAutofitDown: IconArrowAutofitDown$1,
        IconArrowAutofitHeight: IconArrowAutofitHeight$1,
        IconArrowAutofitLeft: IconArrowAutofitLeft$1,
        IconArrowAutofitRight: IconArrowAutofitRight$1,
        IconArrowAutofitWidth: IconArrowAutofitWidth$1,
        IconArrowBigLeft: IconArrowBigLeft$1,
        IconArrowBigRight: IconArrowBigRight$1,
        IconArrowsMove: IconArrowsMove$1,
        IconArrowsMoveVertical: IconArrowsMoveVertical$1,
        IconArrowsVertical: IconArrowsVertical$1,
        IconBook: IconBook$1,
        IconBookReturn: IconBookReturn$1,
        IconBookUpload: IconBookUpload$1,
        IconBookmark: IconBookmark$1,
        IconBookmarkOff: IconBookmarkOff$1,
        IconBookmarks: IconBookmarks$1,
        IconBoxAlignTop: IconBoxAlignTop$1,
        IconCategory: IconCategory$1,
        IconCheck: IconCheck$1,
        IconChevronRight: IconChevronRight$1,
        IconComic1: IconComic1$1,
        IconComic1Flat: IconComic1Flat$1,
        IconComic2: IconComic2$1,
        IconComic2Flat: IconComic2Flat$1,
        IconComic3: IconComic3$1,
        IconComic3Flat: IconComic3Flat$1,
        IconDeviceFloppy: IconDeviceFloppy$1,
        IconDotsVertical: IconDotsVertical$1,
        IconEReader1: IconEReader1$1,
        IconEReader1Flat: IconEReader1Flat$1,
        IconEReader2: IconEReader2$1,
        IconEReader2Flat: IconEReader2Flat$1,
        IconExternalLink: IconExternalLink$1,
        IconEye: IconEye$1,
        IconEyeOff: IconEyeOff$1,
        IconFileDownload: IconFileDownload$1,
        IconFilePercent: IconFilePercent$1,
        IconHandClick: IconHandClick$1,
        IconKeyboard: IconKeyboard$1,
        IconLayoutBottombar: IconLayoutBottombar$1,
        IconLayoutBottombarInactive: IconLayoutBottombarInactive$1,
        IconLayoutSidebar: IconLayoutSidebar$1,
        IconLayoutSidebarInactive: IconLayoutSidebarInactive$1,
        IconLayoutSidebarRight: IconLayoutSidebarRight$1,
        IconLayoutSidebarRightInactive: IconLayoutSidebarRightInactive$1,
        IconListNumbers: IconListNumbers$1,
        IconLoader2: IconLoader2$1,
        IconLocationCog: IconLocationCog$1,
        IconMenu2: IconMenu2$1,
        IconMenuDeep: IconMenuDeep$1,
        IconMessage: IconMessage$1,
        IconMoon: IconMoon$1,
        IconPage: IconPage$1,
        IconPageFlat: IconPageFlat$1,
        IconPalette: IconPalette$1,
        IconPencil: IconPencil$1,
        IconPencilCog: IconPencilCog$1,
        IconPhoto: IconPhoto$1,
        IconPhotoOff: IconPhotoOff$1,
        IconPin: IconPin$1,
        IconPlayerPause: IconPlayerPause$1,
        IconPlayerPlay: IconPlayerPlay$1,
        IconRefresh: IconRefresh$1,
        IconSettings: IconSettings$1,
        IconSettingsOff: IconSettingsOff$1,
        IconSpacingVertical: IconSpacingVertical$1,
        IconSun: IconSun$1,
        IconTrash: IconTrash$1,
        IconWorldCog: IconWorldCog$1,
        IconX: IconX$1,
        IconZoom: IconZoom$1,
        IconZoomCancel: IconZoomCancel$1,
        IconZoomIn: IconZoomIn$1,
        IconZoomInArea: IconZoomInArea$1,
        IconZoomOut: IconZoomOut$1,
        IconZoomOutArea: IconZoomOutArea$1,
        IconZoomPan: IconZoomPan$1,
      },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  );

  var __defProp$d = Object.defineProperty;
  var __getOwnPropDesc$h = Object.getOwnPropertyDescriptor;
  var __decorateClass$h = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$h(target, key) : target;
    for (var i = decorators.length - 1, decorator; i >= 0; i--)
      if ((decorator = decorators[i]))
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result) __defProp$d(target, key, result);
    return result;
  };
  let Icon = class extends i$3 {
    constructor() {
      super(...arguments);
      this.name = '';
      this.label = '';
      this.size = '';
    }
    render() {
      const key = toPascalCase(this.name);
      const styledSvg = styledIcons$1[key];
      const style = this.size ? `--mov-icon-size: ${this.size};` : '';
      return x$1`<span
      role=${this.label ? 'img' : E}
      aria-label=${this.label || E}
      aria-hidden=${this.label ? E : 'true'}
      style=${style}
      >${o$3(styledSvg)}</span
    >`;
    }
  };
  Icon.styles = i$5`
    :host {
      --mov-icon-size: 1rem;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      vertical-align: middle;
      line-height: 1;
    }
    :host([hidden]) {
      display: none;
    }
    svg {
      width: var(--mov-icon-size, 1rem);
      height: var(--mov-icon-size, 1rem);
      display: block;
      color: inherit; /* This will inherit from the host element */
    }
    /* Fallback if no color is set */
    :host(:not([style*='color'])) svg {
      color: var(--mov-color-on-loud);
    }
  `;
  __decorateClass$h([n$2({ type: String })], Icon.prototype, 'name', 2);
  __decorateClass$h([n$2({ type: String })], Icon.prototype, 'label', 2);
  __decorateClass$h([n$2({ type: String })], Icon.prototype, 'size', 2);
  Icon = __decorateClass$h([t$1('mov-icon')], Icon);

  const styles$7 =
    ':host {\r\n  display: inline-block;\r\n  --mov-font-size-scale: 1;\r\n  --mov-font-size-m: calc(1rem * var(--mov-font-size-scale));\r\n  --mov-font-size-s: round(calc(var(--mov-font-size-m) / 1.125), 1px);\r\n  --mov-font-size-l: round(calc(var(--mov-font-size-m) * 1.125 * 1.125), 1px);\r\n  --mov-border-width-s: 0.0625rem;\r\n  --mov-border-radius-m: 0.375rem;\r\n  --mov-border-radius-pill: 9999px;\r\n  --mov-transition-fast: 75ms;\r\n  --mov-font-weight-action: 500;\r\n  --mov-focus-ring: solid 0.1875rem var(--mov-color-fill-loud);\r\n  --mov-focus-ring-offset: 0.0625rem;\r\n  --mov-line-height-condensed: 1.2;\r\n  --mov-form-control-padding-block: 0.75em;\r\n  --mov-form-control-padding-inline: 1em;\r\n  --mov-form-control-height: round(\r\n    calc(2 * var(--mov-form-control-padding-block) + 1em * var(--mov-line-height-condensed)),\r\n    1px\r\n  );\r\n}\r\n\r\n:host([size="small"]) {\r\n  font-size: var(--mov-font-size-s);\r\n}\r\n:host([size="medium"]) {\r\n  font-size: var(--mov-font-size-m);\r\n}\r\n:host([size="large"]) {\r\n  font-size: var(--mov-font-size-l);\r\n}\r\n\r\n.button {\r\n  box-sizing: border-box;\r\n  display: inline-flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  text-decoration: none;\r\n  user-select: none;\r\n  white-space: nowrap;\r\n  vertical-align: middle;\r\n  transition-property: background, border, box-shadow, color;\r\n  transition-duration: var(--mov-transition-fast);\r\n  cursor: pointer;\r\n  padding: 0 var(--mov-form-control-padding-inline);\r\n  font-family: inherit;\r\n  font-size: inherit;\r\n  font-weight: var(--mov-font-weight-action);\r\n  line-height: calc(var(--mov-form-control-height) - var(--mov-border-width-s) * 2);\r\n  height: var(--mov-form-control-height);\r\n  border-radius: var(--mov-border-radius-m);\r\n  border-style: solid;\r\n  border-width: var(--mov-border-width-s);\r\n  background-color: var(--mov-color-fill-loud);\r\n  color: var(--mov-color-on-loud);\r\n  border-color: transparent;\r\n}\r\n\r\n/* Appearance modifiers */\r\n:host([appearance~="plain"]) {\r\n  .button {\r\n    color: var(--mov-color-on-quiet);\r\n    background-color: transparent;\r\n    border-color: transparent;\r\n  }\r\n  @media (hover: hover) {\r\n    .button:not(.disabled):not(.loading):hover {\r\n      color: var(--mov-color-on-quiet);\r\n      background-color: var(--mov-color-fill-quiet);\r\n    }\r\n  }\r\n  .button:not(.disabled):not(.loading):active {\r\n    color: var(--mov-color-on-quiet);\r\n    background-color: color-mix(in oklab, var(--mov-color-fill-quiet), var(--mov-color-mix-active));\r\n  }\r\n}\r\n\r\n:host([appearance~="outlined"]) {\r\n  .button {\r\n    color: var(--mov-color-on-quiet);\r\n    background-color: transparent;\r\n    border-color: var(--mov-color-border-loud);\r\n  }\r\n  @media (hover: hover) {\r\n    .button:not(.disabled):not(.loading):hover {\r\n      color: var(--mov-color-on-quiet);\r\n      background-color: var(--mov-color-fill-quiet);\r\n    }\r\n  }\r\n  .button:not(.disabled):not(.loading):active {\r\n    color: var(--mov-color-on-quiet);\r\n    background-color: color-mix(in oklab, var(--mov-color-fill-quiet), var(--mov-color-mix-active));\r\n  }\r\n}\r\n\r\n:host([appearance~="filled"]) {\r\n  .button {\r\n    color: var(--mov-color-on-normal);\r\n    background-color: var(--mov-color-fill-normal);\r\n    border-color: transparent;\r\n  }\r\n  @media (hover: hover) {\r\n    .button:not(.disabled):not(.loading):hover {\r\n      color: var(--mov-color-on-normal);\r\n      background-color: color-mix(\r\n        in oklab,\r\n        var(--mov-color-fill-normal),\r\n        var(--mov-color-mix-hover)\r\n      );\r\n    }\r\n  }\r\n  .button:not(.disabled):not(.loading):active {\r\n    color: var(--mov-color-on-normal);\r\n    background-color: color-mix(\r\n      in oklab,\r\n      var(--mov-color-fill-normal),\r\n      var(--mov-color-mix-active)\r\n    );\r\n  }\r\n}\r\n\r\n:host([appearance~="filled"][appearance~="outlined"]) .button {\r\n  border-color: var(--mov-color-border-normal);\r\n}\r\n\r\n:host([appearance~="accent"]) {\r\n  .button {\r\n    color: var(--mov-color-on-loud);\r\n    background-color: var(--mov-color-fill-loud);\r\n    border-color: transparent;\r\n  }\r\n  @media (hover: hover) {\r\n    .button:not(.disabled):not(.loading):hover {\r\n      background-color: color-mix(in oklab, var(--mov-color-fill-loud), var(--mov-color-mix-hover));\r\n    }\r\n  }\r\n  .button:not(.disabled):not(.loading):active {\r\n    background-color: color-mix(in oklab, var(--mov-color-fill-loud), var(--mov-color-mix-active));\r\n  }\r\n}\r\n/* Focus states */\r\n.button:focus {\r\n  outline: none;\r\n}\r\n.button:focus-visible {\r\n  outline: var(--mov-focus-ring);\r\n  outline-offset: var(--mov-focus-ring-offset);\r\n}\r\n\r\n/* Disabled state */\r\n.button.disabled {\r\n  opacity: 0.5;\r\n  cursor: not-allowed;\r\n}\r\n.button.disabled * {\r\n  pointer-events: none;\r\n}\r\n\r\n/* Icon buttons */\r\n.button.is-icon-button {\r\n  outline-offset: 2px;\r\n  width: var(--mov-form-control-height);\r\n  aspect-ratio: 1;\r\n}\r\n\r\n/* Pill modifier */\r\n:host([pill]) .button {\r\n  border-radius: var(--mov-border-radius-pill);\r\n}\r\n\r\n.start,\r\n.end {\r\n  flex: 0 0 auto;\r\n  display: flex;\r\n  align-items: center;\r\n  pointer-events: none;\r\n}\r\n\r\n.label {\r\n  display: inline-block;\r\n}\r\n.is-icon-button .label {\r\n  display: flex;\r\n}\r\n\r\nwa-icon[part~="caret"] {\r\n  display: flex;\r\n  align-self: center;\r\n  align-items: center;\r\n}\r\nwa-icon[part~="caret"]::part(svg) {\r\n  width: 0.875em;\r\n  height: 0.875em;\r\n}\r\n\r\n.loading {\r\n  position: relative;\r\n  cursor: wait;\r\n}\r\n.loading .start,\r\n.loading .label,\r\n.loading .end,\r\n.loading .caret {\r\n  visibility: hidden;\r\n}\r\n\r\n.spinner {\r\n  --indicator-color: currentColor;\r\n  --track-color: color-mix(in oklab, currentColor, transparent 90%);\r\n  position: absolute;\r\n  font-size: 1em;\r\n  height: 1em;\r\n  width: 1em;\r\n  top: calc(50% - 0.5em);\r\n  left: calc(50% - 0.5em);\r\n  border-radius: 50%;\r\n  border: 2px solid var(--track-color);\r\n  border-top-color: var(--indicator-color);\r\n  animation: spin 1s linear infinite;\r\n}\r\n\r\n@keyframes spin {\r\n  to {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\nslot[name="start"]::slotted(*) {\r\n  margin-inline-end: 0.75em;\r\n}\r\nslot[name="end"]::slotted(*),\r\n.button:not(.visually-hidden-label) [part~="caret"] {\r\n  margin-inline-start: 0.75em;\r\n}\r\n';

  var __defProp$c = Object.defineProperty;
  var __getOwnPropDesc$g = Object.getOwnPropertyDescriptor;
  var __decorateClass$g = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$g(target, key) : target;
    for (var i = decorators.length - 1, decorator; i >= 0; i--)
      if ((decorator = decorators[i]))
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result) __defProp$c(target, key, result);
    return result;
  };
  let Button = class extends i$3 {
    constructor() {
      super(...arguments);
      this.isIconButton = false;
      this.hasLabel = false;
      this.hasStart = false;
      this.hasEnd = false;
      this.title = '';
      this.appearance = 'accent';
      this.size = 'medium';
      this.withCaret = false;
      this.disabled = false;
      this.loading = false;
      this.pill = false;
      this.type = 'button';
      this.form = null;
    }
    handleClick(event) {
      if (this.disabled || this.loading) {
        event.preventDefault();
        event.stopPropagation();
        return;
      }
      if (this.type === 'submit' && !this.href) {
        const form = this.closest('form');
        if (form) {
          event.preventDefault();
          const tempButton = document.createElement('button');
          tempButton.type = this.type;
          tempButton.style.display = 'none';
          if (this.name) tempButton.name = this.name;
          if (this.value) tempButton.value = this.value;
          form.appendChild(tempButton);
          tempButton.click();
          form.removeChild(tempButton);
        }
      }
    }
    click() {
      this.button?.click();
    }
    focus(options) {
      this.button?.focus(options);
    }
    blur() {
      this.button?.blur();
    }
    render() {
      const isLink = !!this.href;
      const classes = {
        button: true,
        'with-caret': this.withCaret,
        disabled: this.disabled,
        loading: this.loading,
        pill: this.pill,
        'has-label': this.hasLabel,
        'has-start': this.hasStart,
        'has-end': this.hasEnd,
        'is-icon-button': this.isIconButton,
      };
      const buttonContent = x$1`
      <slot
        name="start"
        @slotchange=${this.handleLabelSlotChange}
        part="start"
        class="start"
      ></slot>
      <slot
        @slotchange=${this.handleLabelSlotChange}
        part="label"
        class="label"
      ></slot>
      <slot
        name="end"
        @slotchange=${this.handleLabelSlotChange}
        part="end"
        class="end"
      ></slot>
      ${
        this.withCaret
          ? x$1`<mov-icon
            part="caret"
            class="caret"
            name="IconChevronRight"
            style="transform: rotate(90deg)"
          ></mov-icon>`
          : ''
      }
      ${
        this.loading
          ? x$1`<span
            part="spinner"
            class="spinner"
          ></span>`
          : ''
      }
    `;
      return isLink
        ? x$1`
          <a
            part="base"
            class=${e$2(classes)}
            href=${o$6(this.href)}
            target=${o$6(this.target)}
            title=${o$6(this.title)}
            role="button"
            aria-disabled=${this.disabled ? 'true' : 'false'}
            tabindex=${this.disabled ? '-1' : '0'}
            download=${o$6(this.download)}
            @click=${this.handleClick}
          >
            ${buttonContent}
          </a>
        `
        : x$1`
          <button
            part="base"
            class=${e$2(classes)}
            ?disabled=${this.disabled || this.loading}
            type=${o$6(this.type)}
            title=${o$6(this.title)}
            name=${o$6(this.name)}
            value=${o$6(this.value)}
            aria-disabled=${this.disabled ? 'true' : 'false'}
            tabindex=${this.disabled ? '-1' : '0'}
            @click=${this.handleClick}
          >
            ${buttonContent}
          </button>
        `;
    }
    handleLabelSlotChange() {
      const isIconEl = el => {
        if (!el) return false;
        const name = el.localName;
        return name === 'wa-icon' || name === 'mov-icon' || name === 'svg';
      };
      const nodes = this.labelSlot?.assignedNodes({ flatten: true }) ?? [];
      let hasIconLabel = false;
      let hasIcon = false;
      let text = '';
      [...nodes].forEach((node, index) => {
        if (node.nodeType === Node.ELEMENT_NODE && isIconEl(node)) {
          hasIcon = true;
          if (!hasIconLabel) hasIconLabel = node.hasAttribute('label');
        }
        if (node.nodeType === Node.TEXT_NODE) {
          text += node.textContent;
        }
        if (index === 0 && isIconEl(node)) {
          node.setAttribute('slot', 'start');
        }
        if (index === nodes.length - 1 && isIconEl(node)) {
          node.setAttribute('slot', 'end');
        }
      });
      this.isIconButton = text.trim() === '' && hasIcon;
    }
  };
  Button.styles = [r$5(styles$7)];
  __decorateClass$g([e$4('.button')], Button.prototype, 'button', 2);
  __decorateClass$g([e$4('slot:not([name])')], Button.prototype, 'labelSlot', 2);
  __decorateClass$g([r$2()], Button.prototype, 'isIconButton', 2);
  __decorateClass$g([r$2()], Button.prototype, 'hasLabel', 2);
  __decorateClass$g([r$2()], Button.prototype, 'hasStart', 2);
  __decorateClass$g([r$2()], Button.prototype, 'hasEnd', 2);
  __decorateClass$g([n$2()], Button.prototype, 'title', 2);
  __decorateClass$g([n$2({ reflect: true })], Button.prototype, 'appearance', 2);
  __decorateClass$g([n$2({ reflect: true })], Button.prototype, 'size', 2);
  __decorateClass$g(
    [n$2({ attribute: 'with-caret', type: Boolean, reflect: true })],
    Button.prototype,
    'withCaret',
    2,
  );
  __decorateClass$g([n$2({ type: Boolean, reflect: true })], Button.prototype, 'disabled', 2);
  __decorateClass$g([n$2({ type: Boolean, reflect: true })], Button.prototype, 'loading', 2);
  __decorateClass$g([n$2({ type: Boolean, reflect: true })], Button.prototype, 'pill', 2);
  __decorateClass$g([n$2()], Button.prototype, 'type', 2);
  __decorateClass$g([n$2({ reflect: true })], Button.prototype, 'name', 2);
  __decorateClass$g([n$2({ reflect: true })], Button.prototype, 'value', 2);
  __decorateClass$g([n$2({ reflect: true })], Button.prototype, 'href', 2);
  __decorateClass$g([n$2()], Button.prototype, 'target', 2);
  __decorateClass$g([n$2()], Button.prototype, 'rel', 2);
  __decorateClass$g([n$2()], Button.prototype, 'download', 2);
  __decorateClass$g([n$2({ reflect: true })], Button.prototype, 'form', 2);
  Button = __decorateClass$g([t$1('mov-button')], Button);

  var __defProp$b = Object.defineProperty;
  var __getOwnPropDesc$f = Object.getOwnPropertyDescriptor;
  var __decorateClass$f = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$f(target, key) : target;
    for (var i = decorators.length - 1, decorator; i >= 0; i--)
      if ((decorator = decorators[i]))
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result) __defProp$b(target, key, result);
    return result;
  };
  let ToggleButton = class extends i$3 {
    constructor() {
      super(...arguments);
      this.mode = 'menu';
      this.active = false;
      this.label = '';
      this.icon = '';
      this.activeIcon = '';
      this.appearance = 'accent';
      this.size = 'medium';
      this.disabled = false;
      this.loading = false;
    }
    connectedCallback() {
      super.connectedCallback();
      if (!this.label) {
        this.label = this._getDefaultLabel();
      }
    }
    render() {
      const currentLabel = this.active ? (this.activeLabel ?? this.label) : this.label;
      const classes = {
        'two-icon-mode': ['menu', 'custom', 'theme'].includes(this.mode),
        'single-icon-mode': ['chevron', 'expand', 'play-pause'].includes(this.mode),
      };
      return x$1`
      <mov-button
        @click=${this._onClick}
        .appearance=${o$6(this.appearance)}
        .size=${o$6(this.size)}
        ?disabled=${o$6(this.disabled)}
        ?loading=${o$6(this.loading)}
        .title=${o$6(this.title)}
        class=${e$2(classes)}
        title=${currentLabel}
        aria-label=${currentLabel}
        aria-pressed=${this.active ? 'true' : 'false'}
        icon-only
      >
        ${this._renderIcons()}
      </mov-button>
    `;
    }
    _getDefaultLabel() {
      switch (this.mode) {
        case 'menu':
          return 'Toggle menu';
        case 'chevron':
          return 'Toggle expand';
        case 'theme':
          return 'Toggle theme';
        case 'play-pause':
          return 'Toggle play';
        case 'expand':
          return 'Toggle expand';
        case 'custom':
          return 'Toggle';
        default:
          return 'Toggle';
      }
    }
    _getIcons() {
      switch (this.mode) {
        case 'menu':
          return { inactive: 'menu-2', active: 'x' };
        case 'chevron':
          return { inactive: 'chevron-right', active: 'chevron-right' };
        case 'theme':
          return { inactive: 'moon', active: 'sun' };
        case 'play-pause':
          return { inactive: 'player-play', active: 'player-pause' };
        case 'expand':
          return { inactive: 'arrow-autofit-down', active: 'arrow-autofit-down' };
        case 'custom':
          return { inactive: this.icon, active: this.activeIcon };
        default:
          return { inactive: '', active: '' };
      }
    }
    _renderIcons() {
      const icons = this._getIcons();
      if (!icons.inactive) return E;
      if (this.mode === 'chevron') {
        return x$1`<mov-icon
        class="chevron-icon"
        name=${icons.inactive}
      ></mov-icon>`;
      }
      if (this.mode === 'expand') {
        return x$1`<mov-icon
        class="expand-icon"
        name=${icons.inactive}
      ></mov-icon>`;
      }
      if (this.mode === 'play-pause') {
        return x$1`<mov-icon
        class="play-pause-icon"
        name=${this.active ? icons.active : icons.inactive}
      ></mov-icon>`;
      }
      return x$1`
      <mov-icon
        class="inactive-icon"
        name=${icons.inactive}
      ></mov-icon>
      <mov-icon
        class="active-icon"
        name=${icons.active}
      ></mov-icon>
    `;
    }
    _onClick() {
      if (this.disabled || this.loading) return;
      const oldActive = this.active;
      this.active = !this.active;
      this.dispatchEvent(
        new CustomEvent('toggle', {
          detail: {
            value: this.active,
            oldValue: oldActive,
            mode: this.mode,
          },
          bubbles: true,
          composed: true,
        }),
      );
    }
    /** Programmatically triggers the toggle action. */
    toggle() {
      this._onClick();
    }
    /**
     * Sets the active state of the button without dispatching a `toggle` event.
     * @param {boolean} active - The new active state.
     */
    setActive(active) {
      this.active = active;
    }
  };
  ToggleButton.styles = i$5`
    :host {
      display: inline-flex;
      vertical-align: middle;
    }

    /* Base button styling */
    mov-button {
      position: relative;
    }

    /* Single icon modes - simple rotation in place */
    .single-icon-mode mov-icon {
      transition: transform 0.3s ease;
      display: block;
    }

    .chevron-icon {
      transform: rotate(0deg);
    }

    :host([active]) .chevron-icon {
      transform: rotate(90deg);
    }

    .expand-icon {
      transform: rotate(0deg);
    }

    :host([active]) .expand-icon {
      transform: rotate(180deg);
    }

    /* Two icon modes - positioned for smooth swap */
    .two-icon-mode {
      position: relative;
    }

    .two-icon-mode mov-icon {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      transition:
        opacity 0.25s ease,
        transform 0.3s ease;
    }

    /* Default state: inactive visible, active hidden */
    .inactive-icon {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }

    .active-icon {
      opacity: 0;
      transform: translate(-50%, -50%) scale(0.8);
    }

    /* Active state: inactive hidden, active visible */
    :host([active]) .inactive-icon {
      opacity: 0;
      transform: translate(-50%, -50%) scale(0.8);
    }

    :host([active]) .active-icon {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }

    /* Play-pause uses single icon swap without positioning issues */
    .play-pause-icon {
      transition: opacity 0.2s ease;
      display: block;
    }

    /* Simple click feedback without disrupting layout */
    mov-button:active {
      transform: scale(0.96);
    }

    /* Loading state */
    :host([loading]) mov-icon {
      animation: spin 1s linear infinite;
    }

    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }

    /* Hover effects */
    mov-button:hover:not(:disabled) {
      filter: brightness(1.05);
    }

    /* Focus visible enhancement */
    mov-button:focus-visible {
      outline: 2px solid var(--mov-color-fill-loud, currentColor);
      outline-offset: 2px;
    }

    /* Ensure proper centering for all modes */
    mov-button.single-icon-mode {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    /* Fix icon sizing consistency */
    mov-icon {
      flex-shrink: 0;
    }
  `;
  __decorateClass$f([n$2({ type: String })], ToggleButton.prototype, 'mode', 2);
  __decorateClass$f([n$2({ type: Boolean, reflect: true })], ToggleButton.prototype, 'active', 2);
  __decorateClass$f([n$2({ type: String })], ToggleButton.prototype, 'label', 2);
  __decorateClass$f([n$2({ type: String })], ToggleButton.prototype, 'activeLabel', 2);
  __decorateClass$f([n$2({ type: String })], ToggleButton.prototype, 'icon', 2);
  __decorateClass$f([n$2({ type: String })], ToggleButton.prototype, 'activeIcon', 2);
  __decorateClass$f(
    [n$2({ type: String, reflect: true })],
    ToggleButton.prototype,
    'appearance',
    2,
  );
  __decorateClass$f([n$2({ type: String, reflect: true })], ToggleButton.prototype, 'size', 2);
  __decorateClass$f([n$2({ type: Boolean })], ToggleButton.prototype, 'disabled', 2);
  __decorateClass$f([n$2({ type: Boolean, reflect: true })], ToggleButton.prototype, 'loading', 2);
  ToggleButton = __decorateClass$f([t$1('toggle-button')], ToggleButton);

  /**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */ const n = 'important',
    i = ' !' + n,
    o$2 = e$9(
      class extends i$6 {
        constructor(t) {
          if ((super(t), t.type !== t$3.ATTRIBUTE || 'style' !== t.name || t.strings?.length > 2))
            throw Error(
              'The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.',
            );
        }
        render(t) {
          return Object.keys(t).reduce((e, r) => {
            const s = t[r];
            return null == s
              ? e
              : e +
                  `${(r = r.includes('-') ? r : r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, '-$&').toLowerCase())}:${s};`;
          }, '');
        }
        update(e, [r]) {
          const { style: s } = e.element;
          if (void 0 === this.ft) return ((this.ft = new Set(Object.keys(r))), this.render(r));
          for (const t of this.ft)
            null == r[t] &&
              (this.ft.delete(t), t.includes('-') ? s.removeProperty(t) : (s[t] = null));
          for (const t in r) {
            const e = r[t];
            if (null != e) {
              this.ft.add(t);
              const r = 'string' == typeof e && e.endsWith(i);
              t.includes('-') || r
                ? s.setProperty(t, r ? e.slice(0, -11) : e, r ? n : '')
                : (s[t] = e);
            }
          }
          return T;
        }
      },
    );

  const styledIconsSVG = Object.fromEntries(
    Object.keys(styledIcons$1).map(iconKey => [iconKey, o$3(styledIcons$1[iconKey])]),
  );
  const {
    IconArrowAutofitDown,
    IconArrowAutofitHeight,
    IconArrowAutofitLeft,
    IconArrowAutofitRight,
    IconArrowAutofitWidth,
    IconArrowBigLeft,
    IconArrowBigRight,
    IconArrowsMove,
    IconArrowsMoveVertical,
    IconArrowsVertical,
    IconBook,
    IconBookReturn,
    IconBookUpload,
    IconBookmark,
    IconBookmarkOff,
    IconBookmarks,
    IconBoxAlignTop,
    IconCategory,
    IconCheck,
    IconChevronRight,
    IconComic1,
    IconComic1Flat,
    IconComic2,
    IconComic2Flat,
    IconComic3,
    IconComic3Flat,
    IconDeviceFloppy,
    IconDotsVertical,
    IconEReader1,
    IconEReader1Flat,
    IconEReader2,
    IconEReader2Flat,
    IconExternalLink,
    IconEye,
    IconEyeOff,
    IconFileDownload,
    IconFilePercent,
    IconHandClick,
    IconKeyboard,
    IconLayoutBottombar,
    IconLayoutBottombarInactive,
    IconLayoutSidebar,
    IconLayoutSidebarInactive,
    IconLayoutSidebarRight,
    IconLayoutSidebarRightInactive,
    IconListNumbers,
    IconLoader2,
    IconLocationCog,
    IconMenu2,
    IconMenuDeep,
    IconMessage,
    IconMoon,
    IconPage,
    IconPageFlat,
    IconPalette,
    IconPencil,
    IconPencilCog,
    IconPhoto,
    IconPhotoOff,
    IconPin,
    IconPlayerPause,
    IconPlayerPlay,
    IconRefresh,
    IconSettings,
    IconSettingsOff,
    IconSpacingVertical,
    IconSun,
    IconTrash,
    IconWorldCog,
    IconX,
    IconZoom,
    IconZoomCancel,
    IconZoomIn,
    IconZoomInArea,
    IconZoomOut,
    IconZoomOutArea,
    IconZoomPan,
  } = styledIconsSVG;

  var __defProp$a = Object.defineProperty;
  var __getOwnPropDesc$e = Object.getOwnPropertyDescriptor;
  var __decorateClass$e = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$e(target, key) : target;
    for (var i = decorators.length - 1, decorator; i >= 0; i--)
      if ((decorator = decorators[i]))
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result) __defProp$a(target, key, result);
    return result;
  };
  let ColorSwatch = class extends i$3 {
    constructor() {
      super(...arguments);
      this.value = '#228be6';
      this.selected = false;
      this.size = 26;
      this.radius = '50%';
      this.contrastColor = '#FFFFFF';
    }
    /**
     * Recalculates the contrasting color for the checkmark whenever the swatch color changes.
     * @internal
     */
    willUpdate(changedProperties) {
      if (changedProperties.has('color')) {
        this.contrastColor = getTextColor(this.value);
      }
    }
    render() {
      const hostStyles = {
        width: `${this.size}px`,
        height: `${this.size}px`,
      };
      const swatchStyles = {
        '--radius': typeof this.radius === 'number' ? `${this.radius}px` : this.radius,
        '--color': this.value,
        '--contrast-color': this.contrastColor,
      };
      return x$1`
      <div style=${o$2(hostStyles)}>
        <div
          class="swatch"
          style=${o$2(swatchStyles)}
        >
          <slot></slot>
          <span class="check-icon"> ${IconCheck} </span>
        </div>
      </div>
    `;
    }
  };
  ColorSwatch.styles = i$5`
    :host {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      position: relative;
      box-sizing: border-box;
      -webkit-tap-highlight-color: transparent;
    }

    .swatch {
      position: relative;
      width: 100%;
      height: 100%;
      border-radius: var(--radius);
      background-color: var(--color);
      display: flex;
      align-items: center;
      justify-content: center;
      transition: transform 0.15s ease;
      box-sizing: border-box;
      border: 1px solid var(--theme-border-color, rgba(0, 0, 0, 0.1));
      color: var(--contrast-color);
    }

    :host(:hover) .swatch {
      transform: scale(1.1);
    }

    ::slotted(*) {
      width: 60%;
      height: 60%;
    }

    .check-icon {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      color: var(--contrast-color);
      opacity: 0;
      transition: opacity 0.15s ease;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .check-icon svg {
      width: 60%;
      height: 60%;
    }

    :host([selected]) .check-icon {
      opacity: 1;
    }
  `;
  __decorateClass$e([n$2({ type: String })], ColorSwatch.prototype, 'value', 2);
  __decorateClass$e([n$2({ type: Boolean, reflect: true })], ColorSwatch.prototype, 'selected', 2);
  __decorateClass$e([n$2({ type: Number })], ColorSwatch.prototype, 'size', 2);
  __decorateClass$e([n$2({ type: String })], ColorSwatch.prototype, 'radius', 2);
  __decorateClass$e([n$2({ state: true })], ColorSwatch.prototype, 'contrastColor', 2);
  ColorSwatch = __decorateClass$e([t$1('color-swatch')], ColorSwatch);

  var __defProp$9 = Object.defineProperty;
  var __getOwnPropDesc$d = Object.getOwnPropertyDescriptor;
  var __decorateClass$d = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$d(target, key) : target;
    for (var i = decorators.length - 1, decorator; i >= 0; i--)
      if ((decorator = decorators[i]))
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result) __defProp$9(target, key, result);
    return result;
  };
  let ColorPanel = class extends i$3 {
    constructor() {
      super(...arguments);
      this.value = '';
    }
    /**
     * Handles clicks on individual color swatches. It stops the event from bubbling,
     * sets the host's title to the swatch's color, and dispatches a new click event
     * from the host. This allows the parent listener to use `event.currentTarget.title`
     * to get the color.
     */
    handleColorClick(event) {
      event.stopPropagation();
      this.title = event.currentTarget.title;
      this.click();
    }
    /**
     * Renders the grid of color swatches grouped by color family.
     * @internal
     */
    render() {
      const swatchKeys = Object.keys(colors).filter(
        k => !['dark', 'gray', 'zinc', 'neutral', 'stone'].includes(k),
      );
      const shades = [
        /*50, 100,*/
        200, 300, 400, 500, 600, 700, 800, 900, 950,
      ];
      return swatchKeys.map(key => {
        const swatches = shades.map(shade => {
          const hex = colors[key][shade];
          const text = getTextColor(hex);
          return x$1`
          <span
            title="${hex}"
            class="${e$2({
              ThemeRadio: true,
              selected: this.value === hex,
            })}"
            style="background-color: ${hex}; color: ${text}"
            @click=${this.handleColorClick}
          >
            ${IconCheck}
          </span>
        `;
        });
        return x$1` <div class="SwatchGroup">
        <span class="ColorName">${key}</span>
        <div class="Swatches">${swatches}</div>
      </div>`;
      });
    }
  };
  ColorPanel.styles = i$5`
    :host {
      display: flex;
      flex-direction: column;
      gap: 4px;
      width: 100%;
    }
    .SwatchGroup {
      display: grid;
      grid-template-columns: auto 1fr;
      align-items: center;
      column-gap: 8px;
    }
    .ColorName {
      font-size: 12px;
      color: var(--theme-text-color);
      text-transform: capitalize;
      min-width: 64px;
    }
    .Swatches {
      display: grid;
      grid-template-columns: repeat(9, 16px);
      gap: 8px;
      align-items: center;
    }
    .ThemeRadio {
      color: var(--mov-color-on-loud);
      height: 20px;
      width: 20px;
      border-radius: 3px;
      margin: 0;
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);
    }
    .ThemeRadio:hover,
    .ThemeRadio:focus-visible {
      outline: 2px solid var(--theme-border-color);
      outline-offset: 1px;
    }
    .ThemeRadio.selected {
      box-shadow:
        0 0 0 2px var(--theme-body-background),
        0 0 0 3px var(--theme-text-color);
    }
    .ThemeRadio svg {
      width: 10px;
      height: 10px;
    }
    .ThemeRadio.selected .icon-tabler-check {
      display: inline;
    }
    .ThemeRadio:not(.selected) .icon-tabler-check {
      display: none;
    }
  `;
  __decorateClass$d([n$2({ type: String })], ColorPanel.prototype, 'value', 2);
  ColorPanel = __decorateClass$d([t$1('color-panel')], ColorPanel);

  var __defProp$8 = Object.defineProperty;
  var __getOwnPropDesc$c = Object.getOwnPropertyDescriptor;
  var __decorateClass$c = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$c(target, key) : target;
    for (var i = decorators.length - 1, decorator; i >= 0; i--)
      if ((decorator = decorators[i]))
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result) __defProp$8(target, key, result);
    return result;
  };
  let SegmentedControl = class extends i$3 {
    constructor() {
      super(...arguments);
      this.options = [];
      this.value = '';
      this.labelPosition = 'side';
    }
    /**
     * Handles the change event from the internal radio inputs, updates the component's value,
     * and dispatches a `change` event.
     * @internal
     */
    handleChange(event) {
      const target = event.currentTarget;
      this.value = target.value;
      this.dispatchEvent(
        new CustomEvent('change', { detail: this.value, bubbles: true, composed: true }),
      );
    }
    /**
     * @internal
     */
    render() {
      return x$1`
      <div class="segmented-control">
        ${this.options.map(
          option => x$1`
            <label
              class="option"
              title="${this.labelPosition === 'tooltip' ? option.label : ''}"
            >
              <input
                type="radio"
                name="segmented-control"
                .value=${option.value}
                ?checked=${this.value === option.value}
                @change=${this.handleChange}
              />
              <span
                class="${e$2({
                  label: true,
                  bottom: this.labelPosition === 'bottom',
                })}"
              >
                ${option.icon}
                ${this.labelPosition !== 'tooltip' ? x$1`<span>${option.label}</span>` : ''}
              </span>
            </label>
          `,
        )}
      </div>
    `;
    }
  };
  SegmentedControl.styles = i$5`
    :host {
      width: 100%;
    }
    .segmented-control {
      display: flex;
      gap: 0.25rem;
      border-radius: 0.5rem;
      background-color: var(--theme-border-color);
      padding: 0.25rem;
    }
    .option {
      flex: 1;
      text-align: center;
    }
    input {
      display: none;
    }
    .label {
      display: flex;
      cursor: pointer;
      align-items: center;
      justify-content: center;
      border-radius: 0.5rem;
      border: none;
      padding: 0.5rem 0;
      color: var(--theme-text-color);
      background-color: var(--theme-border-color);
      transition: all 0.15s ease-in-out;
      flex-direction: row;
      gap: 0.25rem;
    }
    .label.bottom {
      flex-direction: column;
    }
    input:checked + .label {
      background-color: var(--mov-color-fill-loud);
      color: var(--mov-color-on-loud);
      font-weight: 600;
    }
  `;
  __decorateClass$c([n$2({ type: Array })], SegmentedControl.prototype, 'options', 2);
  __decorateClass$c([n$2({ type: String })], SegmentedControl.prototype, 'value', 2);
  __decorateClass$c([n$2({ type: String })], SegmentedControl.prototype, 'labelPosition', 2);
  SegmentedControl = __decorateClass$c([t$1('segmented-control')], SegmentedControl);

  var __defProp$7 = Object.defineProperty;
  var __getOwnPropDesc$b = Object.getOwnPropertyDescriptor;
  var __decorateClass$b = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$b(target, key) : target;
    for (var i = decorators.length - 1, decorator; i >= 0; i--)
      if ((decorator = decorators[i]))
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result) __defProp$7(target, key, result);
    return result;
  };
  let ToggleSwitch = class extends i$3 {
    constructor() {
      super(...arguments);
      this.name = '';
      this.checked = false;
      this.disabled = false;
      this.design = 'graphical';
      this.textOn = 'ON';
      this.textOff = 'OFF';
    }
    toggleChecked() {
      if (!this.disabled) {
        this.checked = !this.checked;
        this.dispatchEvent(new Event('change'));
      }
    }
    render() {
      const knobContent =
        this.design === 'graphical'
          ? x$1`${this.checked ? IconCheck : IconX}`
          : x$1`<span class="text">${this.checked ? this.textOn : this.textOff}</span>`;
      return x$1`
      <input
        type="checkbox"
        id="${this.name}"
        name="${this.name}"
        ?checked=${this.checked}
        ?disabled=${this.disabled}
        @change=${this.onChange}
      />
      <div
        class="${e$2({
          switch: true,
          [this.design]: true,
        })}"
        role="switch"
        aria-checked="${this.checked}"
        tabindex="${this.disabled ? -1 : 0}"
        @click=${this.toggleChecked}
        @keydown=${e => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this.toggleChecked();
          }
        }}
      >
        <div class="knob">${knobContent}</div>
      </div>
    `;
    }
  };
  ToggleSwitch.styles = i$5`
    :host {
      --switch-width: 3rem;
      --switch-height: 1.5rem;
      --knob-size: 1.25rem;
      display: inline-block;
    }

    input {
      display: none;
    }

    .switch {
      position: relative;
      width: var(--switch-width);
      height: var(--switch-height);
      border-radius: var(--switch-height);
      background-color: #d7062a;
      border: 1px solid #d7062a;
      transition:
        background-color 0.3s,
        border-color 0.3s;
      cursor: pointer;
    }

    input:checked + .switch {
      background-color: #50ac5d;
      border-color: #50ac5d;
    }

    .switch.textual {
      background-color: var(--mov-color-on-loud);
      border-color: var(--mov-color-on-loud);
    }

    input:checked + .switch.textual {
      background-color: var(--mov-color-fill-loud);
      border-color: var(--mov-color-fill-loud);
    }

    input:disabled + .switch {
      background-color: #eee;
      border-color: #ccc;
      cursor: not-allowed;
    }

    .knob {
      position: absolute;
      top: 50%;
      left: 2px;
      transform: translateY(-50%);
      width: var(--knob-size);
      height: var(--knob-size);
      background-color: #fff;
      border-radius: 50%;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
      transition: left 0.3s;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.75rem;
      font-weight: bold;
      font-family: Arial;
      color: #333;
    }

    input:checked + .switch .knob {
      left: calc(100% - var(--knob-size) - 2px);
    }

    .switch:focus {
      outline: 2px solid #0a6ed1;
      outline-offset: 2px;
    }

    .icon {
      width: 1rem;
      height: 1rem;
      fill: none;
    }

    .text {
      font-size: 0.75rem;
      font-weight: bold;
      color: #333;
    }
  `;
  __decorateClass$b([n$2({ type: String })], ToggleSwitch.prototype, 'name', 2);
  __decorateClass$b([n$2({ type: Boolean, reflect: true })], ToggleSwitch.prototype, 'checked', 2);
  __decorateClass$b([n$2({ type: Boolean, reflect: true })], ToggleSwitch.prototype, 'disabled', 2);
  __decorateClass$b([n$2({ type: String, reflect: true })], ToggleSwitch.prototype, 'design', 2);
  __decorateClass$b([n$2({ type: String })], ToggleSwitch.prototype, 'textOn', 2);
  __decorateClass$b([n$2({ type: String })], ToggleSwitch.prototype, 'textOff', 2);
  __decorateClass$b([n$2({ attribute: false })], ToggleSwitch.prototype, 'onChange', 2);
  ToggleSwitch = __decorateClass$b([t$1('toggle-switch')], ToggleSwitch);

  var commonjsGlobal =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof window !== 'undefined'
        ? window
        : typeof global !== 'undefined'
          ? global
          : typeof self !== 'undefined'
            ? self
            : {};

  var dist = {};

  var constants = {};

  var hasRequiredConstants;

  function requireConstants() {
    if (hasRequiredConstants) return constants;
    hasRequiredConstants = 1;
    Object.defineProperty(constants, '__esModule', { value: true });
    constants.BLANK_URL =
      constants.relativeFirstCharacters =
      constants.whitespaceEscapeCharsRegex =
      constants.urlSchemeRegex =
      constants.ctrlCharactersRegex =
      constants.htmlCtrlEntityRegex =
      constants.htmlEntitiesRegex =
      constants.invalidProtocolRegex =
        void 0;
    constants.invalidProtocolRegex = /^([^\w]*)(javascript|data|vbscript)/im;
    constants.htmlEntitiesRegex = /&#(\w+)(^\w|;)?/g;
    constants.htmlCtrlEntityRegex = /&(newline|tab);/gi;
    constants.ctrlCharactersRegex = /[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim;
    constants.urlSchemeRegex = /^.+(:|&colon;)/gim;
    constants.whitespaceEscapeCharsRegex = /(\\|%5[cC])((%(6[eE]|72|74))|[nrt])/g;
    constants.relativeFirstCharacters = ['.', '/'];
    constants.BLANK_URL = 'about:blank';
    return constants;
  }

  var hasRequiredDist;

  function requireDist() {
    if (hasRequiredDist) return dist;
    hasRequiredDist = 1;
    Object.defineProperty(dist, '__esModule', { value: true });
    dist.sanitizeUrl = void 0;
    var constants_1 = requireConstants();
    function isRelativeUrlWithoutProtocol(url) {
      return constants_1.relativeFirstCharacters.indexOf(url[0]) > -1;
    }
    function decodeHtmlCharacters(str) {
      var removedNullByte = str.replace(constants_1.ctrlCharactersRegex, '');
      return removedNullByte.replace(constants_1.htmlEntitiesRegex, function (match, dec) {
        return String.fromCharCode(dec);
      });
    }
    function isValidUrl(url) {
      return URL.canParse(url);
    }
    function decodeURI(uri) {
      try {
        return decodeURIComponent(uri);
      } catch (e) {
        // Ignoring error
        // It is possible that the URI contains a `%` not associated
        // with URI/URL-encoding.
        return uri;
      }
    }
    function sanitizeUrl(url) {
      if (!url) {
        return constants_1.BLANK_URL;
      }
      var charsToDecode;
      var decodedUrl = decodeURI(url.trim());
      do {
        decodedUrl = decodeHtmlCharacters(decodedUrl)
          .replace(constants_1.htmlCtrlEntityRegex, '')
          .replace(constants_1.ctrlCharactersRegex, '')
          .replace(constants_1.whitespaceEscapeCharsRegex, '')
          .trim();
        decodedUrl = decodeURI(decodedUrl);
        charsToDecode =
          decodedUrl.match(constants_1.ctrlCharactersRegex) ||
          decodedUrl.match(constants_1.htmlEntitiesRegex) ||
          decodedUrl.match(constants_1.htmlCtrlEntityRegex) ||
          decodedUrl.match(constants_1.whitespaceEscapeCharsRegex);
      } while (charsToDecode && charsToDecode.length > 0);
      var sanitizedUrl = decodedUrl;
      if (!sanitizedUrl) {
        return constants_1.BLANK_URL;
      }
      if (isRelativeUrlWithoutProtocol(sanitizedUrl)) {
        return sanitizedUrl;
      }
      // Remove any leading whitespace before checking the URL scheme
      var trimmedUrl = sanitizedUrl.trimStart();
      var urlSchemeParseResults = trimmedUrl.match(constants_1.urlSchemeRegex);
      if (!urlSchemeParseResults) {
        return sanitizedUrl;
      }
      var urlScheme = urlSchemeParseResults[0].toLowerCase().trim();
      if (constants_1.invalidProtocolRegex.test(urlScheme)) {
        return constants_1.BLANK_URL;
      }
      var backSanitized = trimmedUrl.replace(/\\/g, '/');
      // Handle special cases for mailto: and custom deep-link protocols
      if (urlScheme === 'mailto:' || urlScheme.includes('://')) {
        return backSanitized;
      }
      // For http and https URLs, perform additional validation
      if (urlScheme === 'http:' || urlScheme === 'https:') {
        if (!isValidUrl(backSanitized)) {
          return constants_1.BLANK_URL;
        }
        var url_1 = new URL(backSanitized);
        url_1.protocol = url_1.protocol.toLowerCase();
        url_1.hostname = url_1.hostname.toLowerCase();
        return url_1.toString();
      }
      return backSanitized;
    }
    dist.sanitizeUrl = sanitizeUrl;
    return dist;
  }

  var distExports = requireDist();

  var FileSaver_min$1 = { exports: {} };

  var FileSaver_min = FileSaver_min$1.exports;

  var hasRequiredFileSaver_min;

  function requireFileSaver_min() {
    if (hasRequiredFileSaver_min) return FileSaver_min$1.exports;
    hasRequiredFileSaver_min = 1;
    (function (module, exports) {
      (function (a, b) {
        b();
      })(FileSaver_min, function () {
        function b(a, b) {
          return (
            'undefined' == typeof b
              ? (b = { autoBom: false })
              : 'object' != typeof b &&
                (console.warn('Deprecated: Expected third argument to be a object'),
                (b = { autoBom: !b })),
            b.autoBom &&
            /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(
              a.type,
            )
              ? new Blob(['\uFEFF', a], { type: a.type })
              : a
          );
        }
        function c(a, b, c) {
          var d = new XMLHttpRequest();
          (d.open('GET', a),
            (d.responseType = 'blob'),
            (d.onload = function () {
              g(d.response, b, c);
            }),
            (d.onerror = function () {
              console.error('could not download file');
            }),
            d.send());
        }
        function d(a) {
          var b = new XMLHttpRequest();
          b.open('HEAD', a, false);
          try {
            b.send();
          } catch (a) {}
          return 200 <= b.status && 299 >= b.status;
        }
        function e(a) {
          try {
            a.dispatchEvent(new MouseEvent('click'));
          } catch (c) {
            var b = document.createEvent('MouseEvents');
            (b.initMouseEvent(
              'click',
              true,
              true,
              window,
              0,
              0,
              0,
              80,
              20,
              false,
              false,
              false,
              false,
              0,
              null,
            ),
              a.dispatchEvent(b));
          }
        }
        var f =
            'object' == typeof window && window.window === window
              ? window
              : 'object' == typeof self && self.self === self
                ? self
                : 'object' == typeof commonjsGlobal && commonjsGlobal.global === commonjsGlobal
                  ? commonjsGlobal
                  : void 0,
          a =
            f.navigator &&
            /Macintosh/.test(navigator.userAgent) &&
            /AppleWebKit/.test(navigator.userAgent) &&
            !/Safari/.test(navigator.userAgent),
          g =
            f.saveAs ||
            ('object' != typeof window || window !== f
              ? function () {}
              : 'download' in HTMLAnchorElement.prototype && !a
                ? function (b, g, h) {
                    var i = f.URL || f.webkitURL,
                      j = document.createElement('a');
                    ((g = g || b.name || 'download'),
                      (j.download = g),
                      (j.rel = 'noopener'),
                      'string' == typeof b
                        ? ((j.href = b),
                          j.origin === location.origin
                            ? e(j)
                            : d(j.href)
                              ? c(b, g, h)
                              : e(j, (j.target = '_blank')))
                        : ((j.href = i.createObjectURL(b)),
                          setTimeout(function () {
                            i.revokeObjectURL(j.href);
                          }, 4e4),
                          setTimeout(function () {
                            e(j);
                          }, 0)));
                  }
                : 'msSaveOrOpenBlob' in navigator
                  ? function (f, g, h) {
                      if (((g = g || f.name || 'download'), 'string' != typeof f))
                        navigator.msSaveOrOpenBlob(b(f, h), g);
                      else if (d(f)) c(f, g, h);
                      else {
                        var i = document.createElement('a');
                        ((i.href = f),
                          (i.target = '_blank'),
                          setTimeout(function () {
                            e(i);
                          }));
                      }
                    }
                  : function (b, d, e, g) {
                      if (
                        ((g = g || open('', '_blank')),
                        g && (g.document.title = g.document.body.innerText = 'downloading...'),
                        'string' == typeof b)
                      )
                        return c(b, d, e);
                      var h = 'application/octet-stream' === b.type,
                        i = /constructor/i.test(f.HTMLElement) || f.safari,
                        j = /CriOS\/[\d]+/.test(navigator.userAgent);
                      if ((j || (h && i) || a) && 'undefined' != typeof FileReader) {
                        var k = new FileReader();
                        ((k.onloadend = function () {
                          var a = k.result;
                          ((a = j ? a : a.replace(/^data:[^;]*;/, 'data:attachment/file;')),
                            g ? (g.location.href = a) : (location = a),
                            (g = null));
                        }),
                          k.readAsDataURL(b));
                      } else {
                        var l = f.URL || f.webkitURL,
                          m = l.createObjectURL(b);
                        (g ? (g.location = m) : (location.href = m),
                          (g = null),
                          setTimeout(function () {
                            l.revokeObjectURL(m);
                          }, 4e4));
                      }
                    });
        ((f.saveAs = g.saveAs = g), (module.exports = g));
      });
    })(FileSaver_min$1);
    return FileSaver_min$1.exports;
  }

  var FileSaver_minExports = requireFileSaver_min();

  function extFromMime(mime) {
    switch (mime) {
      case 'image/jpeg':
        return 'jpg';
      case 'image/png':
        return 'png';
      case 'image/webp':
        return 'webp';
      case 'image/gif':
        return 'gif';
      case 'image/bmp':
        return 'bmp';
      default:
        return 'png';
    }
  }
  async function generateZip() {
    setAppStateValue('download', 'working');
    const zip = new JSZip();
    const images = getAppStateValue('images') ?? {};
    const manga = getAppStateValue('manga');
    const digits = Math.floor(Math.log10(manga?.pages ?? 1)) + 1;
    Object.entries(images)
      .sort((a, b) => Number(a[0]) - Number(b[0]))
      .forEach(([key, page]) => {
        if (!page || !page.blob) return;
        const blob = page.blob;
        const ext = extFromMime(blob.type);
        const name = `Page-${Number(key).toString().padStart(digits, '0')}.${ext}`;
        logScript(`${name} Added to Zip from Blob`);
        zip.file(name, blob, {
          createFolders: true,
          compression: 'DEFLATE',
        });
      });
    logScript('Generating Zip');
    zip
      .generateAsync({ type: 'blob' })
      .then(content => {
        logScript('Download Ready');
        const zipName = `${manga?.title ?? document.title}.zip`;
        FileSaver_minExports.saveAs(content, zipName, { autoBom: false });
      })
      .catch(err => {
        logScript('Error generating zip', err);
      })
      .finally(() => {
        setAppStateValue('download', void 0);
      });
  }

  function buttonStartDownload() {
    if (getAppStateValue('download') === 'working') return;
    logScript('Downloading Chapter');
    generateZip().catch(err => logScript('Error downloading chapter', err));
  }
  function buttonGlobalHideImageControls() {
    changeSettingsValue('hidePageControls', b => !b);
  }
  function buttonRedirectURL(event) {
    const element = event.target;
    const url = element.getAttribute('value') ?? element.getAttribute('href');
    if (event.button !== 1 && !event.ctrlKey) {
      if (url && url !== '#') {
        window.location.href = distExports.sanitizeUrl(url);
      } else if (element.id === 'series') {
        window.history.back();
      }
    }
  }
  function buttonCommentsOpen() {
    setAppStateValue('panel', 'comments');
  }

  function scrollToElement(ele) {
    if (getSettingsValue('viewMode').startsWith('Fluid')) {
      getAppStateValue('chapter').value?.scroll(ele?.offsetLeft ?? 0, ele?.offsetTop ?? 0);
    } else {
      window?.scroll(ele?.offsetLeft ?? 0, ele?.offsetTop ?? 0);
    }
  }
  appState.listen((value, _oldValue, changedKey) => {
    if (changedKey === 'scrollToPage' && value.scrollToPage !== void 0) {
      if (value.scrollToPage <= 0) {
        window.scrollTo(0, 0);
      } else {
        scrollToElement(getAppStateValue('images')?.[value.scrollToPage]?.ref?.value);
      }
      setTimeout(() => setAppStateValue('scrollToPage', void 0), 10);
    }
  });
  function selectGoToPage(event) {
    const target = event.currentTarget.value;
    setAppStateValue('scrollToPage', parseInt(target, 10));
  }
  function clickThumbnail(target) {
    setAppStateValue('scrollToPage', target);
  }

  var __defProp$6 = Object.defineProperty;
  var __getOwnPropDesc$a = Object.getOwnPropertyDescriptor;
  var __decorateClass$a = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$a(target, key) : target;
    for (var i = decorators.length - 1, decorator; i >= 0; i--)
      if ((decorator = decorators[i]))
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result) __defProp$6(target, key, result);
    return result;
  };
  let Pagination = class extends i$3 {
    constructor() {
      super(...arguments);
      this.currentPage = 1;
      this.totalPages = 1;
      this.startPage = 1;
    }
    render() {
      return x$1`
      <button
        class="pagination-button"
        @click=${buttonRedirectURL}
        value="${this.prev}"
        ?disabled=${isNothing(this.prev) || this.prev === '#'}
      >
        <svg viewBox="0 0 24 24">
          <path d="M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z" />
        </svg>
        <div class="tooltip">Previous Chapter</div>
      </button>

      <button
        class="pagination-button"
        @click=${this.goToPreviousPage}
        ?disabled=${this.currentPage <= this.startPage}
      >
        <svg viewBox="0 0 24 24">
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
        </svg>
        <div class="tooltip">Previous Page</div>
      </button>

      <div class="slider-container">
        <input
          type="range"
          class="pagination-slider"
          min="${this.startPage}"
          max="${this.totalPages}"
          .value="${this.currentPage.toString()}"
          @input="${selectGoToPage}"
        />
        <div class="slider-tooltip">${this.currentPage} / ${this.totalPages}</div>
      </div>

      <button
        class="pagination-button"
        @click=${this.goToNextPage}
        ?disabled="${this.currentPage === this.totalPages - (this.startPage - 1)}"
      >
        <svg viewBox="0 0 24 24">
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
        </svg>
        <div class="tooltip">Next Page</div>
      </button>

      <button
        class="pagination-button"
        @click=${buttonRedirectURL}
        value="${this.next}"
        ?disabled=${isNothing(this.next) || this.next === '#'}
      >
        <svg viewBox="0 0 24 24">
          <path d="M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z" />
        </svg>
        <div class="tooltip">Next Chapter</div>
      </button>
    `;
    }
    goToPreviousPage() {
      this.goToPage(this.currentPage - 1);
    }
    goToNextPage() {
      this.goToPage(this.currentPage + 1);
    }
    goToPage(page) {
      setAppStateValue('scrollToPage', page);
    }
  };
  Pagination.styles = i$5`
    :host {
      display: flex;
      position: fixed;
      bottom: 30px;
      left: 0;
      right: 0;
      background-color: transparent;
      justify-content: center;
      align-items: center;
      gap: 3px;
      width: 100%;
      font-family:
        system-ui,
        -apple-system,
        sans-serif;
      max-width: 100%;
    }

    .pagination-button {
      background: var(--mov-color-fill-loud);
      border: 1px solid var(--mov-color-fill-loud);
      color: var(--mov-color-on-loud);
      padding: 8px 12px;
      border-radius: 4px;
      cursor: pointer;
      font-size: 14px;
      transition: all 0.2s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 36px;
      height: 36px;
    }

    .pagination-button:hover:not(:disabled) {
      opacity: 0.8;
      transform: translateY(-1px);
    }

    .pagination-button:disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }

    .pagination-button svg {
      width: 16px;
      height: 16px;
      fill: currentColor;
    }

    .slider-container {
      position: relative;
      max-width: 1000px;
      width: inherit;
      margin: 0 5px;
    }

    .pagination-slider {
      -webkit-appearance: none;
      appearance: none;
      width: 100%;
      height: 4px;
      background: var(--mov-color-fill-loud);
      opacity: 0.5;
      border-radius: 2px;
      outline: none;
      cursor: pointer;
    }

    .pagination-slider::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 16px;
      height: 16px;
      background: white;
      border-radius: 50%;
      cursor: pointer;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
      border: 1px solid var(--mov-color-fill-loud);
    }

    .pagination-slider::-moz-range-thumb {
      width: 16px;
      height: 16px;
      background: white;
      border-radius: 50%;
      cursor: pointer;
      border: 1px solid var(--mov-color-fill-loud);
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    }

    .slider-tooltip {
      position: absolute;
      top: -35px;
      left: 50%;
      transform: translateX(-50%);
      background: rgba(0, 0, 0, 0.9);
      color: white;
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 12px;
      white-space: nowrap;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.2s ease;
    }

    .slider-container:hover .slider-tooltip {
      opacity: 1;
    }

    .tooltip {
      position: absolute;
      bottom: 45px;
      left: 50%;
      transform: translateX(-50%);
      background: var(--theme-body-background);
      color: white;
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 12px;
      white-space: nowrap;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.2s ease;
      z-index: 1001;
    }

    .pagination-button:hover .tooltip {
      opacity: 1;
    }
  `;
  __decorateClass$a([n$2({ type: Number })], Pagination.prototype, 'currentPage', 2);
  __decorateClass$a([n$2({ type: Number })], Pagination.prototype, 'totalPages', 2);
  __decorateClass$a([n$2({ type: Number })], Pagination.prototype, 'startPage', 2);
  __decorateClass$a([n$2({ type: String })], Pagination.prototype, 'next', 2);
  __decorateClass$a([n$2({ type: String })], Pagination.prototype, 'prev', 2);
  Pagination = __decorateClass$a([t$1('manga-pagination')], Pagination);

  var __defProp$5 = Object.defineProperty;
  var __getOwnPropDesc$9 = Object.getOwnPropertyDescriptor;
  var __decorateClass$9 = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$9(target, key) : target;
    for (var i = decorators.length - 1, decorator; i >= 0; i--)
      if ((decorator = decorators[i]))
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result) __defProp$5(target, key, result);
    return result;
  };
  let Drawer = class extends i$3 {
    constructor() {
      super(...arguments);
      this.open = false;
      this.placement = 'end';
    }
    close() {
      this.open = false;
    }
    handleCancel(e) {
      e.preventDefault();
      this.close();
    }
    handleClick(event) {
      if (event.target === this.dialog) {
        this.close();
      }
    }
    updated(changedProperties) {
      if (changedProperties.has('open')) {
        if (this.open) {
          this.dialog.show();
          this.dispatchEvent(new CustomEvent('open', { bubbles: true, composed: true }));
        } else {
          if (changedProperties.get('open') === true) {
            this.dispatchEvent(new CustomEvent('close', { bubbles: true, composed: true }));
          }
          setTimeout(() => {
            if (this.dialog.open) {
              this.dialog.close();
            }
          }, 300);
        }
      }
    }
    render() {
      return x$1`
      <div
        class="backdrop"
        @click=${this.close}
      ></div>
      <dialog
        part="dialog"
        @cancel=${this.handleCancel}
        @click=${this.handleClick}
      >
        <div
          class="header-bar"
          part="header-bar"
        >
          <div class="action-item">
            <slot name="header-actions"></slot>
          </div>
          <div class="header-content">
            <slot name="label"></slot>
          </div>
          <div
            class="close-button-container"
            part="close-button-container"
          >
            <button
              class="close-button"
              part="close-button"
              @click=${this.close}
              aria-label="Close"
            >
              ${IconX}
            </button>
          </div>
        </div>
        <slot class="content-slot"></slot>
      </dialog>
    `;
    }
  };
  Drawer.styles = i$5`
    :host {
      --panel-overlay-transition: opacity linear 0.25s;
      --panel-overlay-opacity: 0.5;
      --panel-z-index: 1000;
      --panel-transition: transform 0.25s ease-out;
    }

    .backdrop {
      display: none;
      position: fixed;
      inset: 0;
      background-color: #000;
      opacity: 0;
      transition: var(--panel-overlay-transition);
      z-index: var(--panel-z-index);
    }

    :host([open]) .backdrop {
      display: block;
      opacity: var(--panel-overlay-opacity);
    }

    dialog {
      all: unset;
      background-color: var(--theme-background-color, #fff);
      color: var(--theme-text-color, #000);
      z-index: calc(var(--panel-z-index) + 1);
      position: fixed;
      box-shadow: 0 0 25px rgba(0, 0, 0, 0.5);
      display: flex;
      flex-direction: column;
      visibility: hidden;
      max-width: 100vw;
      max-height: 100vh;
      width: 350px;
      top: 0;
      bottom: 0;
      height: 100%;
      transition: var(--panel-transition);
    }

    :host([open]) dialog {
      visibility: visible;
    }

    /* Header Styles */
    .header-bar {
      display: flex;
      align-items: center;
      padding: 0.75rem 1rem;
      border-bottom: 1px solid var(--theme-border-color, #e0e0e0);
      flex-shrink: 0;
    }
    .action-item {
      order: 1;
    }
    .header-content {
      order: 2;
      flex-grow: 1;
      text-align: center;
      font-weight: bold;
    }
    .close-button-container {
      order: 3;
      display: flex;
      justify-content: flex-end;
    }
    .action-item,
    .close-button-container {
      min-width: 40px;
    }
    .close-button {
      background: none;
      border: none;
      cursor: pointer;
      font-size: 1.5rem;
      line-height: 1;
      padding: 0;
      color: inherit;
    }
    .content-slot {
      display: block;
      padding: 1rem;
      overflow-y: auto;
      flex-grow: 1;
    }

    :host([placement='start']) dialog {
      left: 0;
      transform: translateX(-100%);
    }
    :host([placement='end']) dialog {
      right: 0;
      transform: translateX(100%);
    }
    :host([open]) dialog {
      transform: none;
    }
    :host([placement='end']) .action-item {
      order: 3;
    }
    :host([placement='end']) .header-content {
      order: 2;
    }
    :host([placement='end']) .close-button-container {
      order: 1;
      justify-content: flex-start;
    }
  `;
  __decorateClass$9([n$2({ type: Boolean, reflect: true })], Drawer.prototype, 'open', 2);
  __decorateClass$9([n$2({ type: String, reflect: true })], Drawer.prototype, 'placement', 2);
  __decorateClass$9([e$4('dialog')], Drawer.prototype, 'dialog', 2);
  Drawer = __decorateClass$9([t$1('mov-drawer')], Drawer);

  var __defProp$4 = Object.defineProperty;
  var __getOwnPropDesc$8 = Object.getOwnPropertyDescriptor;
  var __decorateClass$8 = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$8(target, key) : target;
    for (var i = decorators.length - 1, decorator; i >= 0; i--)
      if ((decorator = decorators[i]))
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result) __defProp$4(target, key, result);
    return result;
  };
  let Dialog = class extends i$3 {
    constructor() {
      super(...arguments);
      this.open = false;
      this.mode = 'dialog';
      this.fullscreen = false;
    }
    close() {
      this.open = false;
    }
    handleCancel(e) {
      e.preventDefault();
      this.close();
    }
    handleClick(event) {
      if (this.mode !== 'inline' && event.target === this.dialog) {
        this.close();
      }
    }
    updated(changedProperties) {
      if (this.mode === 'inline') {
        return;
      }
      if (changedProperties.has('open')) {
        if (this.open) {
          this.dialog.show();
          this.dispatchEvent(new CustomEvent('open', { bubbles: true, composed: true }));
        } else {
          if (changedProperties.get('open') === true) {
            this.dispatchEvent(new CustomEvent('close', { bubbles: true, composed: true }));
          }
          setTimeout(() => {
            if (this.dialog.open) {
              this.dialog.close();
            }
          }, 300);
        }
      }
    }
    render() {
      return x$1`
      <div
        class="backdrop"
        @click=${this.close}
      ></div>
      <dialog
        part="dialog"
        @cancel=${this.handleCancel}
        @click=${this.handleClick}
      >
        <div
          class="header-bar"
          part="header-bar"
        >
          <div class="action-item">
            <slot name="header-actions"></slot>
          </div>
          <div class="header-content">
            <slot name="label"></slot>
          </div>
          <div
            class="close-button-container"
            part="close-button-container"
          >
            <button
              class="close-button"
              part="close-button"
              @click=${this.close}
              aria-label="Close"
            >
              ${IconX}
            </button>
          </div>
        </div>
        <slot class="content-slot"></slot>
      </dialog>
    `;
    }
  };
  Dialog.styles = i$5`
    :host {
      --panel-overlay-transition: opacity linear 0.25s;
      --panel-overlay-opacity: 0.5;
      --panel-z-index: 1000;
    }

    .backdrop {
      display: none;
      position: fixed;
      inset: 0;
      background-color: #000;
      opacity: 0;
      transition: var(--panel-overlay-transition);
      z-index: var(--panel-z-index);
    }

    :host([open]) .backdrop {
      display: block;
      opacity: var(--panel-overlay-opacity);
    }

    dialog {
      all: unset;
      background-color: var(--theme-background-color, #fff);
      color: var(--theme-text-color, #000);
      z-index: calc(var(--panel-z-index) + 1);
      position: fixed;
      box-shadow: 0 0 25px rgba(0, 0, 0, 0.5);
      display: flex;
      flex-direction: column;
      visibility: hidden;
      max-width: 100vw;
      max-height: 100vh;
    }

    :host([open]:not([mode='inline'])) dialog {
      visibility: visible;
    }

    /* Header Styles */
    .header-bar {
      display: flex;
      align-items: center;
      padding: 0.75rem 1rem;
      border-bottom: 1px solid var(--theme-border-color, #e0e0e0);
      flex-shrink: 0;
    }
    .action-item {
      order: 1;
    }
    .header-content {
      order: 2;
      flex-grow: 1;
      text-align: center;
      font-weight: bold;
    }
    .close-button-container {
      order: 3;
      display: flex;
      justify-content: flex-end;
    }
    .action-item,
    .close-button-container {
      min-width: 40px;
    }
    .close-button {
      background: none;
      border: none;
      cursor: pointer;
      font-size: 1.5rem;
      line-height: 1;
      padding: 0;
      color: inherit;
    }
    .content-slot {
      display: block;
      padding: 1rem;
      overflow-y: auto;
      flex-grow: 1;
    }

    /* --- MODE: INLINE --- */
    :host([mode='inline']) {
      display: block;
      width: 100%;
    }
    :host([mode='inline']) dialog {
      all: unset;
      background-color: var(--theme-background-color, #fff);
      color: var(--theme-text-color, #000);
      box-shadow: none;
      display: flex;
      flex-direction: column;
      visibility: visible;
      position: relative;
      width: 100%;
      border: 1px solid var(--theme-border-color, #e0e0e0);
      border-radius: 12px;
    }
    :host([mode='inline']) .backdrop {
      display: none;
    }
    :host([mode='inline']) .close-button {
      display: none; /* No close button in inline mode */
    }

    /* --- MODE: DIALOG --- */
    :host([mode='dialog']) {
      --panel-transition: transform 0.15s ease-out, opacity 0.15s ease-out;
    }
    :host([mode='dialog']) dialog {
      opacity: 0;
      transition: var(--panel-transition);
    }
    :host([mode='dialog'][open]) dialog {
      opacity: 1;
    }
    :host([mode='dialog']:not([fullscreen])) dialog {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(0.9);
      border-radius: 12px;
      width: var(--dialog-width, 700px);
    }
    :host([mode='dialog']:not([fullscreen])[open]) dialog {
      transform: translate(-50%, -50%) scale(1);
    }
    :host([fullscreen]) {
      --panel-overlay-transition: none;
    }
    :host([fullscreen]) dialog {
      width: 100vw;
      height: 100vh;
      top: 0;
      left: 0;
      transform: none;
      border-radius: 0;
      transition: none;
    }
  `;
  __decorateClass$8([n$2({ type: Boolean, reflect: true })], Dialog.prototype, 'open', 2);
  __decorateClass$8([n$2({ type: String, reflect: true })], Dialog.prototype, 'mode', 2);
  __decorateClass$8([n$2({ type: Boolean, reflect: true })], Dialog.prototype, 'fullscreen', 2);
  __decorateClass$8([e$4('dialog')], Dialog.prototype, 'dialog', 2);
  Dialog = __decorateClass$8([t$1('mov-dialog')], Dialog);

  var __defProp$3 = Object.defineProperty;
  var __getOwnPropDesc$7 = Object.getOwnPropertyDescriptor;
  var __decorateClass$7 = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$7(target, key) : target;
    for (var i = decorators.length - 1, decorator; i >= 0; i--)
      if ((decorator = decorators[i]))
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result) __defProp$3(target, key, result);
    return result;
  };
  let MovDropdown = class extends i$3 {
    constructor() {
      super();
      this.open = false;
      this.checkable = false;
      this.boundClickHandler = this.handleClickOutside.bind(this);
    }
    connectedCallback() {
      super.connectedCallback();
      document.addEventListener('click', this.boundClickHandler);
    }
    disconnectedCallback() {
      super.disconnectedCallback();
      document.removeEventListener('click', this.boundClickHandler);
    }
    handleClickOutside(event) {
      if (this.open && !event.composedPath().includes(this)) {
        this.open = false;
      }
    }
    toggle() {
      this.open = !this.open;
    }
    render() {
      return x$1`
      <div
        @click=${this.toggle}
        class="trigger-wrapper"
      >
        <slot name="trigger"></slot>
      </div>
      <div class="dropdown-content">
        <slot></slot>
      </div>
    `;
    }
  };
  MovDropdown.styles = i$5`
    :host {
      position: relative;
      display: inline-block;
    }
    :host([checkable]) {
      --mov-dropdown-item-checkmark-display: inline-block;
    }
    .dropdown-content {
      display: none;
      position: absolute;
      background-color: var(--theme-background-color, #f9f9f9);
      min-width: 160px;
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
      z-index: 1;
      list-style: none;
      padding: 0;
      margin: 0;
      border: 1px solid var(--theme-border-color, #ccc);
      border-radius: 5px;
    }
    :host([open]) .dropdown-content {
      display: block;
    }
  `;
  __decorateClass$7([n$2({ type: Boolean, reflect: true })], MovDropdown.prototype, 'open', 2);
  __decorateClass$7([n$2({ type: Boolean, reflect: true })], MovDropdown.prototype, 'checkable', 2);
  MovDropdown = __decorateClass$7([t$1('mov-dropdown')], MovDropdown);
  let MovDropdownItem = class extends i$3 {
    constructor() {
      super(...arguments);
      this.selected = false;
    }
    render() {
      return x$1`
      <div class="item">
        <div class="item-content">
          <mov-icon
            class="check-icon"
            name="IconCheck"
          ></mov-icon>
          <slot name="icon"></slot>
          <slot></slot>
        </div>
        <slot name="details"></slot>
      </div>
    `;
    }
  };
  MovDropdownItem.styles = i$5`
    :host {
      display: block;
    }
    .item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 8px 12px;
      cursor: pointer;
      color: var(--mov-color-on-loud);
      background-color: var(--mov-color-fill-loud);
      gap: 10px;
    }
    .item:hover {
      background-color: var(--mov-color-fill-normal);
      color: var(--mov-color-on-normal);
    }
    :host([selected]) .item {
      background-color: var(--mov-color-fill-normal);
      color: var(--mov-color-on-normal);
    }
    .item-content {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .check-icon {
      display: var(--mov-dropdown-item-checkmark-display, none);
      visibility: hidden;
      width: 1.2em;
      height: 1.2em;
    }
    :host([selected]) .check-icon {
      visibility: visible;
    }
    ::slotted([slot='details']) {
      font-size: 0.9em;
      opacity: 0.7;
    }
  `;
  __decorateClass$7(
    [n$2({ type: Boolean, reflect: true })],
    MovDropdownItem.prototype,
    'selected',
    2,
  );
  MovDropdownItem = __decorateClass$7([t$1('mov-dropdown-item')], MovDropdownItem);

  const keycss =
    '/**\r\n * KEYS.css\r\n *\r\n * A simple stylesheet for rendering beautiful keyboard-style elements.\r\n *\r\n * Author:  Michael Hüneburg\r\n * Website: http://michaelhue.com/keyscss\r\n * License: MIT License (see LICENSE.txt)\r\n */\r\n\r\nkbd,\r\n.key {\r\n  display: inline;\r\n  display: inline-block;\r\n  white-space: nowrap;\r\n  min-width: 1em;\r\n  padding: .3em .4em .2em .3em;\r\n  font-style: normal;\r\n  font-family: "Lucida Grande", Lucida, Arial, sans-serif;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  border-radius: .3em;\r\n  border: none;\r\n  background-color: #505050;\r\n  background-color: gradient(linear, left top, left bottom, from(#3c3c3c), to(#505050));\r\n  color: #fafafa;\r\n  text-shadow: -1px -1px 0 #464646;\r\n  -webkit-box-shadow: inset 0 0 1px #969696, inset 0 -0.05em 0.4em #505050, 0 0.1em 0 #1e1e1e, 0 0.1em 0.1em rgba(0, 0, 0, 0.3);\r\n          box-shadow: inset 0 0 1px #969696, inset 0 -0.05em 0.4em #505050, 0 0.1em 0 #1e1e1e, 0 0.1em 0.1em rgba(0, 0, 0, 0.3);\r\n  font-size: .85em;\r\n  line-height: 1;\r\n  cursor: default;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n}\r\nkbd[title],\r\n.key[title] {\r\n  cursor: help;\r\n}\r\nkbd.dark,\r\n.dark-keys kbd,\r\n.key.dark,\r\n.dark-keys .key {\r\n  display: inline;\r\n  display: inline-block;\r\n  white-space: nowrap;\r\n  min-width: 1em;\r\n  padding: .3em .4em .2em .3em;\r\n  font-style: normal;\r\n  font-family: "Lucida Grande", Lucida, Arial, sans-serif;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  border-radius: .3em;\r\n  border: none;\r\n  background-color: #505050;\r\n  background-color: gradient(linear, left top, left bottom, from(#3c3c3c), to(#505050));\r\n  color: #fafafa;\r\n  text-shadow: -1px -1px 0 #464646;\r\n  -webkit-box-shadow: inset 0 0 1px #969696, inset 0 -0.05em 0.4em #505050, 0 0.1em 0 #1e1e1e, 0 0.1em 0.1em rgba(0, 0, 0, 0.3);\r\n          box-shadow: inset 0 0 1px #969696, inset 0 -0.05em 0.4em #505050, 0 0.1em 0 #1e1e1e, 0 0.1em 0.1em rgba(0, 0, 0, 0.3);\r\n}\r\nkbd.light,\r\n.light-keys kbd,\r\n.key.light,\r\n.light-keys .key {\r\n  display: inline;\r\n  display: inline-block;\r\n  white-space: nowrap;\r\n  min-width: 1em;\r\n  padding: .3em .4em .2em .3em;\r\n  font-style: normal;\r\n  font-family: "Lucida Grande", Lucida, Arial, sans-serif;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  border-radius: .3em;\r\n  border: none;\r\n  background-color: #fafafa;\r\n  background-color: gradient(linear, left top, left bottom, from(#d2d2d2), to(#ffffff));\r\n  color: #323232;\r\n  text-shadow: 0 0 2px #ffffff;\r\n  -webkit-box-shadow: inset 0 0 1px #ffffff, inset 0 0 0.4em #c8c8c8, 0 0.1em 0 #828282, 0 0.11em 0 rgba(0, 0, 0, 0.4), 0 0.1em 0.11em rgba(0, 0, 0, 0.9);\r\n          box-shadow: inset 0 0 1px #ffffff, inset 0 0 0.4em #c8c8c8, 0 0.1em 0 #828282, 0 0.11em 0 rgba(0, 0, 0, 0.4), 0 0.1em 0.11em rgba(0, 0, 0, 0.9);\r\n}\r\nkbd.so,\r\n.so-keys kbd,\r\n.key.so,\r\n.so-keys .key {\r\n  display: inline;\r\n  display: inline-block;\r\n  white-space: nowrap;\r\n  min-width: 1em;\r\n  padding: .3em .4em .2em .3em;\r\n  font-style: normal;\r\n  font-family: "Lucida Grande", Lucida, Arial, sans-serif;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  border-radius: .3em;\r\n  border: none;\r\n  margin: 0 .1em;\r\n  padding: .1em .6em;\r\n  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;\r\n  line-height: 1.4;\r\n  color: #242729;\r\n  text-shadow: 0 1px 0 #FFF;\r\n  background-color: #e1e3e5;\r\n  border: 1px solid #adb3b9;\r\n  border-radius: 0.27272727em;\r\n  -webkit-box-shadow: 0 1px 0 rgba(12, 13, 14, 0.2), 0 0 0 2px #FFF inset;\r\n          box-shadow: 0 1px 0 rgba(12, 13, 14, 0.2), 0 0 0 2px #FFF inset;\r\n}\r\nkbd.github,\r\n.github-keys kbd,\r\n.key.github,\r\n.github-keys .key {\r\n  display: inline;\r\n  display: inline-block;\r\n  white-space: nowrap;\r\n  min-width: 1em;\r\n  padding: .3em .4em .2em .3em;\r\n  font-style: normal;\r\n  font-family: "Lucida Grande", Lucida, Arial, sans-serif;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  border-radius: .3em;\r\n  border: none;\r\n  padding: 0.27272727em 0.45454545em;\r\n  font-size: 68.75%;\r\n  line-height: 0.90909091;\r\n  color: #444d56;\r\n  vertical-align: middle;\r\n  background-color: #fafbfc;\r\n  border: solid 1px #c6cbd1;\r\n  border-bottom-color: #959da5;\r\n  border-radius: 0.27272727em;\r\n  -webkit-box-shadow: inset 0 -1px 0 #959da5;\r\n          box-shadow: inset 0 -1px 0 #959da5;\r\n  font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  text-shadow: none;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImtleXMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLHdEQUF3RDtFQUN4RCxtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2IsMEJBQTBCO0VBQzFCLHNGQUFzRjtFQUN0RixlQUFlO0VBQ2YsaUNBQWlDO0VBQ2pDLDhIQUFzSDtVQUF0SCxzSEFBc0g7RUFDdEgsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsMEJBQWtCO0tBQWxCLHVCQUFrQjtNQUFsQixzQkFBa0I7VUFBbEIsa0JBQWtCO0NBQ25CO0FBQ0Q7O0VBRUUsYUFBYTtDQUNkO0FBQ0Q7Ozs7RUFJRSxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQix3REFBd0Q7RUFDeEQsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLDBCQUEwQjtFQUMxQixzRkFBc0Y7RUFDdEYsZUFBZTtFQUNmLGlDQUFpQztFQUNqQyw4SEFBc0g7VUFBdEgsc0hBQXNIO0NBQ3ZIO0FBQ0Q7Ozs7RUFJRSxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQix3REFBd0Q7RUFDeEQsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLDBCQUEwQjtFQUMxQixzRkFBc0Y7RUFDdEYsZUFBZTtFQUNmLDZCQUE2QjtFQUM3Qix3SkFBZ0o7VUFBaEosZ0pBQWdKO0NBQ2pKO0FBQ0Q7Ozs7RUFJRSxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQix3REFBd0Q7RUFDeEQsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsNERBQTREO0VBQzVELGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsMEJBQTBCO0VBQzFCLDBCQUEwQjtFQUMxQiwwQkFBMEI7RUFDMUIsNEJBQTRCO0VBQzVCLHdFQUFnRTtVQUFoRSxnRUFBZ0U7Q0FDakU7QUFDRDs7OztFQUlFLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLHdEQUF3RDtFQUN4RCxtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2IsbUNBQW1DO0VBQ25DLGtCQUFrQjtFQUNsQix3QkFBd0I7RUFDeEIsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QiwwQkFBMEI7RUFDMUIsMEJBQTBCO0VBQzFCLDZCQUE2QjtFQUM3Qiw0QkFBNEI7RUFDNUIsMkNBQW1DO1VBQW5DLG1DQUFtQztFQUNuQyxzRkFBc0Y7RUFDdEYsK0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2QixrQkFBa0I7Q0FDbkIiLCJmaWxlIjoidG1wMi5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJrYmQsXG4ua2V5IHtcbiAgZGlzcGxheTogaW5saW5lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG1pbi13aWR0aDogMWVtO1xuICBwYWRkaW5nOiAuM2VtIC40ZW0gLjJlbSAuM2VtO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZmFtaWx5OiBcIkx1Y2lkYSBHcmFuZGVcIiwgTHVjaWRhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IC4zZW07XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUwNTA1MDtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGZyb20oIzNjM2MzYyksIHRvKCM1MDUwNTApKTtcbiAgY29sb3I6ICNmYWZhZmE7XG4gIHRleHQtc2hhZG93OiAtMXB4IC0xcHggMCAjNDY0NjQ2O1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMXB4ICM5Njk2OTYsIGluc2V0IDAgLTAuMDVlbSAwLjRlbSAjNTA1MDUwLCAwIDAuMWVtIDAgIzFlMWUxZSwgMCAwLjFlbSAwLjFlbSByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIGZvbnQtc2l6ZTogLjg1ZW07XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxua2JkW3RpdGxlXSxcbi5rZXlbdGl0bGVdIHtcbiAgY3Vyc29yOiBoZWxwO1xufVxua2JkLmRhcmssXG4uZGFyay1rZXlzIGtiZCxcbi5rZXkuZGFyayxcbi5kYXJrLWtleXMgLmtleSB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBtaW4td2lkdGg6IDFlbTtcbiAgcGFkZGluZzogLjNlbSAuNGVtIC4yZW0gLjNlbTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWZhbWlseTogXCJMdWNpZGEgR3JhbmRlXCIsIEx1Y2lkYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAuM2VtO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1MDUwNTA7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBmcm9tKCMzYzNjM2MpLCB0bygjNTA1MDUwKSk7XG4gIGNvbG9yOiAjZmFmYWZhO1xuICB0ZXh0LXNoYWRvdzogLTFweCAtMXB4IDAgIzQ2NDY0NjtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDFweCAjOTY5Njk2LCBpbnNldCAwIC0wLjA1ZW0gMC40ZW0gIzUwNTA1MCwgMCAwLjFlbSAwICMxZTFlMWUsIDAgMC4xZW0gMC4xZW0gcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxua2JkLmxpZ2h0LFxuLmxpZ2h0LWtleXMga2JkLFxuLmtleS5saWdodCxcbi5saWdodC1rZXlzIC5rZXkge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgbWluLXdpZHRoOiAxZW07XG4gIHBhZGRpbmc6IC4zZW0gLjRlbSAuMmVtIC4zZW07XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1mYW1pbHk6IFwiTHVjaWRhIEdyYW5kZVwiLCBMdWNpZGEsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogLjNlbTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgZnJvbSgjZDJkMmQyKSwgdG8oI2ZmZmZmZikpO1xuICBjb2xvcjogIzMyMzIzMjtcbiAgdGV4dC1zaGFkb3c6IDAgMCAycHggI2ZmZmZmZjtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDFweCAjZmZmZmZmLCBpbnNldCAwIDAgMC40ZW0gI2M4YzhjOCwgMCAwLjFlbSAwICM4MjgyODIsIDAgMC4xMWVtIDAgcmdiYSgwLCAwLCAwLCAwLjQpLCAwIDAuMWVtIDAuMTFlbSByZ2JhKDAsIDAsIDAsIDAuOSk7XG59XG5rYmQuc28sXG4uc28ta2V5cyBrYmQsXG4ua2V5LnNvLFxuLnNvLWtleXMgLmtleSB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBtaW4td2lkdGg6IDFlbTtcbiAgcGFkZGluZzogLjNlbSAuNGVtIC4yZW0gLjNlbTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWZhbWlseTogXCJMdWNpZGEgR3JhbmRlXCIsIEx1Y2lkYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAuM2VtO1xuICBib3JkZXI6IG5vbmU7XG4gIG1hcmdpbjogMCAuMWVtO1xuICBwYWRkaW5nOiAuMWVtIC42ZW07XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gIGNvbG9yOiAjMjQyNzI5O1xuICB0ZXh0LXNoYWRvdzogMCAxcHggMCAjRkZGO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTFlM2U1O1xuICBib3JkZXI6IDFweCBzb2xpZCAjYWRiM2I5O1xuICBib3JkZXItcmFkaXVzOiAwLjI3MjcyNzI3ZW07XG4gIGJveC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgxMiwgMTMsIDE0LCAwLjIpLCAwIDAgMCAycHggI0ZGRiBpbnNldDtcbn1cbmtiZC5naXRodWIsXG4uZ2l0aHViLWtleXMga2JkLFxuLmtleS5naXRodWIsXG4uZ2l0aHViLWtleXMgLmtleSB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBtaW4td2lkdGg6IDFlbTtcbiAgcGFkZGluZzogLjNlbSAuNGVtIC4yZW0gLjNlbTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWZhbWlseTogXCJMdWNpZGEgR3JhbmRlXCIsIEx1Y2lkYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAuM2VtO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDAuMjcyNzI3MjdlbSAwLjQ1NDU0NTQ1ZW07XG4gIGZvbnQtc2l6ZTogNjguNzUlO1xuICBsaW5lLWhlaWdodDogMC45MDkwOTA5MTtcbiAgY29sb3I6ICM0NDRkNTY7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZiZmM7XG4gIGJvcmRlcjogc29saWQgMXB4ICNjNmNiZDE7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICM5NTlkYTU7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjcyNzI3MjdlbTtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAtMXB4IDAgIzk1OWRhNTtcbiAgZm9udC1mYW1pbHk6IFwiU0ZNb25vLVJlZ3VsYXJcIiwgQ29uc29sYXMsIFwiTGliZXJhdGlvbiBNb25vXCIsIE1lbmxvLCBDb3VyaWVyLCBtb25vc3BhY2U7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHRleHQtc2hhZG93OiBub25lO1xufVxuIl19 */';

  var lib = {};

  var StoreController = {};

  var hasRequiredStoreController;

  function requireStoreController() {
    if (hasRequiredStoreController) return StoreController;
    hasRequiredStoreController = 1;
    Object.defineProperty(StoreController, '__esModule', { value: true });
    StoreController.StoreController = void 0;
    /**
     * A `ReactiveController` that subscribes a `LitElement` to a `nanostores` atom and updates the host element when the atom changes.
     *
     * @example
     * ```ts
     * import { atom } from 'nanostores';
     * import { StoreController } from '@nanostores/lit';
     * import { LitElement, html } from 'lit';
     * import { customElement } from 'lit/decorators.js';
     *
     * const count = atom(0);
     *
     * @customElement('my-element')
     * class MyElement extends LitElement {
     * private controller = new StoreController(this, count);
     *  render() {
     *   const $count = this.controller.value;
     *   return html\`Count: \${$count}\`;
     *  }
     * }
     * ```
     */
    let StoreController$1 = class StoreController {
      constructor(host, atom) {
        this.host = host;
        this.atom = atom;
        host.addController(this);
      }
      // Subscribe to the atom when the host connects
      hostConnected() {
        this.unsubscribe = this.atom.subscribe(() => {
          this.host.requestUpdate();
        });
      }
      // Unsubscribe from the atom when the host disconnects
      hostDisconnected() {
        var _a;
        (_a = this.unsubscribe) === null || _a === void 0 ? void 0 : _a.call(this);
      }
      /**
       * The current value of the atom.
       * @readonly
       */
      get value() {
        return this.atom.get();
      }
    };
    StoreController.StoreController = StoreController$1;
    return StoreController;
  }

  var MultiStoreController = {};

  var hasRequiredMultiStoreController;

  function requireMultiStoreController() {
    if (hasRequiredMultiStoreController) return MultiStoreController;
    hasRequiredMultiStoreController = 1;
    Object.defineProperty(MultiStoreController, '__esModule', { value: true });
    MultiStoreController.MultiStoreController = void 0;
    /**
     * A `ReactiveController` that subscribes a `LitElement` to several `nanostores` atoms and updates the host element when any of the atoms changes.
     *
     * @example
     * ```ts
     * import { atom } from 'nanostores';
     * import { StoreController } from '@nanostores/lit';
     * import { LitElement, html } from 'lit';
     * import { customElement } from 'lit/decorators.js';
     *
     * const count1 = atom(0);
     * const count2 = atom(0);
     *
     * @customElement('my-element')
     * class MyElement extends LitElement {
     * private controller = new MultiStoreController(this, [count1, count2]);
     *  render() {
     *   const [$count1, $count2] = controller.values;
     *   return html\`Count 1: \${count1}\, Count 2: \${count2}\`;
     *  }
     * }
     * ```
     */
    let MultiStoreController$1 = class MultiStoreController {
      constructor(host, atoms) {
        this.host = host;
        this.atoms = atoms;
        host.addController(this);
      }
      // Subscribe to the atom when the host connects
      hostConnected() {
        this.unsubscribes = this.atoms.map(atom => atom.subscribe(() => this.host.requestUpdate()));
      }
      // Unsubscribe from the atom when the host disconnects
      hostDisconnected() {
        var _a;
        (_a = this.unsubscribes) === null || _a === void 0
          ? void 0
          : _a.forEach(unsubscribe => unsubscribe());
      }
      /**
       * The current values of the atoms.
       * @readonly
       */
      get values() {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return this.atoms.map(atom => atom.get());
      }
    };
    MultiStoreController.MultiStoreController = MultiStoreController$1;
    return MultiStoreController;
  }

  var useStores = {};

  var hasRequiredUseStores;

  function requireUseStores() {
    if (hasRequiredUseStores) return useStores;
    hasRequiredUseStores = 1;
    Object.defineProperty(useStores, '__esModule', { value: true });
    useStores.useStores = void 0;
    const MultiStoreController_1 = requireMultiStoreController();
    /**
     * A TypeScript decorator that creates a new `MultiStoreController` for the atoms
     * @decorator `withStores(atoms)`
     * @param atoms The atoms to subscribe to.
     *
     * @example
     * ```ts
     * import { LitElement, html } from 'lit';
     * import { customElement } from 'lit/decorators.js';
     * import { atom } from 'nanostores';
     * import { useStores } from '@nanostores/lit';
     *
     * const count = atom(0);
     *
     * @customElement('my-element')
     * @useStores(count)
     * class MyElement extends LitElement {
     *  render() {
     *   return html\`Count: \${count.get()}\`;
     *   }
     * }
     * ```
     */
    function useStores$1(...atoms) {
      return constructor => {
        return class extends constructor {
          constructor(...args) {
            super(...args);
            new MultiStoreController_1.MultiStoreController(this, atoms);
          }
        };
      };
    }
    useStores.useStores = useStores$1;
    return useStores;
  }

  var withStores = {};

  var hasRequiredWithStores;

  function requireWithStores() {
    if (hasRequiredWithStores) return withStores;
    hasRequiredWithStores = 1;
    Object.defineProperty(withStores, '__esModule', { value: true });
    withStores.withStores = void 0;
    const MultiStoreController_1 = requireMultiStoreController();
    /**
     * A mixin that subscribes a LitElement to a list of atoms.
     * @mixin `withStores`
     * @param LitElementClass The LitElement class to extend.
     * @param atoms The atoms to subscribe to.
     *
     * @example
     * ```ts
     * import { LitElement, html } from 'lit';
     * import { customElement } from 'lit/decorators.js';
     * import { atom } from 'nanostores';
     * import { withStores } from '@nanostores/lit';
     *
     * const count = atom(0);
     *
     * @customElement('my-element')
     * class MyElement extends withStores(LitElement, [count]) {
     *  render() {
     *   return html\`Count: \${count.get()}\`;
     *  }
     * }
     * ```
     */
    const withStores$1 = (LitElementClass, atoms) => {
      return class LitElementWithStores extends LitElementClass {
        constructor(...args) {
          super(...args);
          new MultiStoreController_1.MultiStoreController(this, atoms);
        }
      };
    };
    withStores.withStores = withStores$1;
    return withStores;
  }

  var hasRequiredLib;

  function requireLib() {
    if (hasRequiredLib) return lib;
    hasRequiredLib = 1;
    (function (exports) {
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.withStores =
        exports.useStores =
        exports.MultiStoreController =
        exports.StoreController =
          void 0;
      var StoreController_1 = requireStoreController();
      Object.defineProperty(exports, 'StoreController', {
        enumerable: true,
        get: function () {
          return StoreController_1.StoreController;
        },
      });
      var MultiStoreController_1 = requireMultiStoreController();
      Object.defineProperty(exports, 'MultiStoreController', {
        enumerable: true,
        get: function () {
          return MultiStoreController_1.MultiStoreController;
        },
      });
      var useStores_1 = requireUseStores();
      Object.defineProperty(exports, 'useStores', {
        enumerable: true,
        get: function () {
          return useStores_1.useStores;
        },
      });
      var withStores_1 = requireWithStores();
      Object.defineProperty(exports, 'withStores', {
        enumerable: true,
        get: function () {
          return withStores_1.withStores;
        },
      });
    })(lib);
    return lib;
  }

  var libExports = requireLib();

  function scroll() {
    const chapterElement = getAppStateValue('chapter').value;
    if (getSettingsValue('viewMode').startsWith('Fluid')) {
      const scrollDirection = getSettingsValue('viewMode') === 'FluidRTL' ? -1 : 1;
      chapterElement?.scrollBy({
        top: 0,
        left: getSettingsValue('scrollHeight') * scrollDirection,
        behavior: 'smooth',
      });
      if (
        chapterElement &&
        chapterElement.scrollLeft + chapterElement.clientWidth >= chapterElement.scrollWidth - 2
      ) {
        setAppStateValue('autoScroll', false);
        logScript('Finished auto scroll');
      }
    } else {
      window.scrollBy({
        top: getSettingsValue('scrollHeight'),
        left: 0,
        behavior: 'smooth',
      });
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
        setAppStateValue('autoScroll', false);
        logScript('Finished auto scroll');
      }
    }
    if (getAppStateValue('autoScroll')) {
      requestAnimationFrame(scroll);
    }
  }
  function toggleAutoScroll() {
    if (getAppStateValue('autoScroll')) {
      setAppStateValue('autoScroll', false);
      logScript('Stopped auto scroll');
    } else {
      setAppStateValue('autoScroll', true);
      requestAnimationFrame(scroll);
      logScript('Start auto scroll');
    }
  }
  let resume = false;
  const debounceAutoScroll = _.debounce(() => {
    toggleAutoScroll();
    resume = false;
  }, 500);
  function manualScroll() {
    if (!resume && getAppStateValue('autoScroll')) {
      toggleAutoScroll();
      resume = true;
    }
    if (resume && !getAppStateValue('autoScroll')) {
      debounceAutoScroll();
    }
  }
  function autoscroll() {
    window.addEventListener('wheel', _.throttle(manualScroll, 500));
  }

  function removeURLBookmark(url = window.location.href) {
    if (!isNothing(isBookmarked(url))) {
      logScript(`Bookmark Removed ${url}`);
      changeSettingsValue('bookmarks', b => [...b.filter(el => el.url !== url)]);
    }
  }
  function buttonEraseBookmarks(event) {
    const target = event.currentTarget.value;
    logScript(`Bookmark Removed ${target}`);
    Swal.fire({
      title: getLocaleString('BOOKMARK_REMOVED'),
      timer: 1e4,
      icon: 'error',
    });
    removeURLBookmark(target);
  }
  function buttonBookmarksOpen() {
    setAppStateValue('panel', 'bookmarks');
  }
  function buttonBookmark() {
    const num = getAppStateValue('currentPage');
    const mark = {
      name:
        getAppStateValue('manga')?.title ??
        document.documentElement.title ??
        window.location.hostname,
      url: window.location.href,
      page: num,
      date: /* @__PURE__ */ new Date().toISOString().slice(0, 10),
    };
    if (isBookmarked(mark.url)) {
      changeSettingsValue('bookmarks', b => [...b.filter(el => el.url !== mark.url)]);
      Swal.fire({
        title: getLocaleString('BOOKMARK_REMOVED'),
        timer: 1e4,
        icon: 'error',
      });
    } else {
      changeSettingsValue('bookmarks', b => [...b, mark]);
      Swal.fire({
        title: getLocaleString('BOOKMARK_SAVED'),
        html: getLocaleString('BOOKMARK_MESSAGE').replace('##num##', num.toString()),
        icon: 'success',
      });
    }
  }

  const headerHeight = 49;
  const showEnd = 100;
  class HeadroomController {
    constructor(host) {
      this.prevOffset = 0;
      this.headroom = 'top';
      this.headerVisible = true;
      this.handleScroll = _.throttle(() => {
        const header = getSettingsValue('header');
        const { scrollY } = window;
        let newHeadroom = 'none';
        if (
          getSettingsValue('zoomMode') !== 'height' &&
          scrollY + window.innerHeight + showEnd > document.body.scrollHeight
        ) {
          newHeadroom = 'end';
        } else if (scrollY > this.prevOffset && scrollY > headerHeight) {
          newHeadroom = 'hide';
        } else if (header === 'scroll' && scrollY < this.prevOffset && scrollY > headerHeight) {
          newHeadroom = 'show';
        } else if (header !== 'click' && scrollY <= headerHeight) {
          newHeadroom = 'top';
        }
        let needsUpdate = false;
        if (this.headroom !== newHeadroom) {
          this.headroom = newHeadroom;
          needsUpdate = true;
        }
        if (header === 'scroll') {
          const newHeaderVisible = newHeadroom !== 'hide';
          if (this.headerVisible !== newHeaderVisible) {
            this.headerVisible = newHeaderVisible;
            needsUpdate = true;
          }
        }
        if (needsUpdate) {
          this.host.requestUpdate();
        }
        this.prevOffset = scrollY;
      }, 300);
      this.handleMouseMove = _.throttle(event => {
        if (['hover', 'scroll'].includes(getSettingsValue('header'))) {
          const newHeaderVisible = HeadroomController.isMouseInsideRegion(
            event,
            window.innerWidth,
            headerHeight * 1.5,
          );
          if (this.headerVisible !== newHeaderVisible) {
            this.headerVisible = newHeaderVisible;
            this.host.requestUpdate();
          }
        }
      }, 300);
      this.toggleHeaderVisibility = () => {
        if (getSettingsValue('header') === 'click') {
          this.headerVisible = !this.headerVisible;
          this.host.requestUpdate();
        }
      };
      this.host = host;
      host.addController(this);
    }
    hostConnected() {
      window.addEventListener('scroll', this.handleScroll);
      window.addEventListener('mousemove', this.handleMouseMove);
      this.handleScroll();
    }
    hostDisconnected() {
      window.removeEventListener('scroll', this.handleScroll);
      window.removeEventListener('mousemove', this.handleMouseMove);
    }
    static isMouseInsideRegion(event, headerWidth, headerHeight2) {
      return (
        event.clientX >= 0 &&
        event.clientX <= headerWidth &&
        event.clientY >= 0 &&
        event.clientY <= headerHeight2
      );
    }
  }

  function calculatePageZoom(
    page,
    mode = getSettingsValue('zoomMode'),
    value = getSettingsValue('zoomValue'),
  ) {
    const nextWidth =
      window.innerWidth +
      (getSettingsValue('navbar') === 'left' || getSettingsValue('navbar') === 'right'
        ? -navbarSize
        : 0);
    const nextHeight =
      window.innerHeight + (getSettingsValue('navbar') === 'bottom' ? -navbarSize : 0);
    if (mode === 'width') {
      page.width = nextWidth;
      page.height = void 0;
    } else if (mode === 'height') {
      page.width = void 0;
      page.height = nextHeight;
    } else if (mode === 'percent') {
      const width = page.naturalWidth ?? page.ref?.value?.naturalWidth;
      page.width = width ? width * (value / 100) : void 0;
      page.height = void 0;
    }
    return page;
  }
  function applyZoom(mode = getSettingsValue('zoomMode'), value = getSettingsValue('zoomValue')) {
    logScript('Zoom', mode, value);
    setSettingsValue('zoomMode', mode);
    setSettingsValue('zoomValue', value);
    if (mode === 'height') {
      setAppStateValue('scrollToPage', getAppStateValue('currentPage'));
    } else {
      refreshSettings('header');
    }
    const images = getAppStateValue('images');
    const manga = getAppStateValue('manga');
    const newImages = {};
    for (let i = manga?.begin ?? 1; i <= (manga?.pages ?? 1); i++) {
      newImages[i] = calculatePageZoom({ ...images?.[i] }, mode, value);
    }
    setAppStateValue('images', newImages);
  }
  function changeGlobalZoom(mode, value = getSettingsValue('zoomValue')) {
    return () => {
      applyZoom(mode, value);
    };
  }
  function changeZoomByStep(sign = 1) {
    return () => {
      const ratio = getSettingsValue('zoomValue') + sign * getSettingsValue('zoomStep');
      if (ratio > 0 && ratio < 500) applyZoom('percent', ratio);
    };
  }
  function changeDefaultZoomMode(event) {
    const target = event.currentTarget.value;
    saveSettingsValue('zoomMode', target);
  }
  function changeDefaultZoomValue(event) {
    const target = parseInt(event.currentTarget.value, 10);
    saveSettingsValue('zoomValue', target);
    applyZoom('percent', target);
  }
  function changeZoom(event) {
    const target = parseInt(event.currentTarget.value, 10);
    applyZoom('percent', target);
  }

  function updateViewMode(mode) {
    return () => {
      setSettingsValue('viewMode', mode);
      if (mode.startsWith('Fluid')) {
        setSettingsValue('zoomMode', 'height');
        setSettingsValue('header', 'click');
      } else {
        refreshSettings('zoomMode');
        refreshSettings('zoomValue');
        refreshSettings('header');
      }
      applyZoom();
    };
  }
  function changeDefaultViewMode(event) {
    const mode = event.currentTarget.value;
    saveSettingsValue('viewMode', mode);
    updateViewMode(mode)();
  }

  function doScrolling(sign) {
    const viewMode = getSettingsValue('viewMode');
    const zoomMode = getSettingsValue('zoomMode');
    logScript('Scrolling view', viewMode, 'zoom', zoomMode, 'sign', sign);
    if (viewMode.startsWith('Fluid')) {
      const scrollDirection = viewMode === 'FluidRTL' ? -1 : 1;
      getAppStateValue('chapter').value?.scrollBy({
        left: 0.8 * window.innerWidth * sign * scrollDirection,
        behavior: 'smooth',
      });
    } else if (zoomMode === 'height') {
      const currentPage = getAppStateValue('currentPage');
      const target = currentPage + sign;
      if (target < 0) {
        setAppStateValue('scrollToPage', 0);
      } else if (target > (getAppStateValue('manga')?.pages ?? 1));
      else {
        setAppStateValue('scrollToPage', target);
      }
    } else {
      window.scrollBy({
        top: 0.8 * window.innerHeight * sign,
        behavior: 'smooth',
      });
    }
  }
  function redirectUrl(url) {
    if (url && url !== '#') {
      window.location.href = distExports.sanitizeUrl(url);
    } else {
      window.history.back();
    }
  }
  const actions = {
    SCROLL_UP() {
      doScrolling(-1);
    },
    SCROLL_DOWN() {
      doScrolling(1);
    },
    NEXT_CHAPTER() {
      redirectUrl(getAppStateValue('manga')?.next);
    },
    PREVIOUS_CHAPTER() {
      redirectUrl(getAppStateValue('manga')?.prev);
    },
    RETURN_CHAPTER_LIST() {
      redirectUrl(getAppStateValue('manga')?.series);
    },
    ENLARGE() {
      changeZoomByStep(1)();
    },
    REDUCE() {
      changeZoomByStep(-1)();
    },
    RESTORE() {
      changeGlobalZoom('percent', 100)();
    },
    FIT_WIDTH() {
      changeGlobalZoom('width')();
    },
    FIT_HEIGHT() {
      changeGlobalZoom('height')();
    },
    SETTINGS() {
      changeAppStateValue('panel', p => (p === 'none' ? 'settings' : 'none'));
    },
    VIEW_MODE_WEBCOMIC() {
      updateViewMode('WebComic')();
    },
    VIEW_MODE_VERTICAL() {
      updateViewMode('Vertical')();
    },
    VIEW_MODE_LEFT() {
      updateViewMode('FluidRTL')();
    },
    VIEW_MODE_RIGHT() {
      updateViewMode('FluidLTR')();
    },
    SCROLL_START() {
      toggleAutoScroll();
    },
  };
  function keybindings() {
    document.onkeydown = null;
    document.onkeyup = null;
    window.onkeydown = null;
    window.onkeyup = null;
    window.onload = null;
    document.body.onload = null;
    hotkeys.unbind();
    Object.keys(getSettingsValue('keybinds')).forEach(key => {
      hotkeys(
        getSettingsValue('keybinds')[key]?.join(',') ?? '',
        _.throttle(event => {
          event.preventDefault();
          event.stopImmediatePropagation();
          event.stopPropagation();
          actions[key]();
        }, 100),
      );
    });
  }

  function buttonPanelsClose() {
    setAppStateValue('panel', 'none');
  }
  function buttonSettingsOpen() {
    setAppStateValue('panel', 'settings');
  }
  function buttonKeybindingsOpen() {
    setAppStateValue('panel', 'keybindings');
  }
  function saveKeybindings(keybindsRefs) {
    const newKeybinds = {};
    Object.keys(keybindsRefs).forEach(id => {
      const element = keybindsRefs[id].value;
      if (element) {
        const keys = element.value
          .split(',')
          .map(value => value.trim())
          .filter(key => key !== '');
        newKeybinds[id] = keys.length > 0 ? keys : void 0;
      }
    });
    saveSettingsValue('keybinds', newKeybinds);
    setAppStateValue('panel', 'keybindings');
    keybindings();
  }
  function editKeybindings() {
    setAppStateValue('panel', 'keybindingsEditor');
  }

  const styles$6 =
    '#Header {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  flex-flow: row nowrap;\r\n  transition: transform 0.3s ease-in;\r\n  position: sticky;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  background-color: var(--theme-background-color);\r\n  box-shadow: 0 0 25px rgba(0, 0, 0, 0.5);\r\n  z-index: 900;\r\n}\r\n\r\n#Header.click {\r\n  padding-left: 40px;\r\n}\r\n\r\n@keyframes headroom {\r\n  from {\r\n    transform: translateY(-100%);\r\n  }\r\n  to {\r\n    transform: translateY(0%);\r\n  }\r\n}\r\n\r\n#Header:not(.visible, .headroom-top, .fixed, .simple) {\r\n  animation: headroom 0.3s ease-in reverse;\r\n  transform: translateY(-100%);\r\n  position: sticky;\r\n  top: 0;\r\n}\r\n\r\n#Header.scroll.headroom-hide:not(.visible) {\r\n  animation: none;\r\n  transform: translateY(-100%);\r\n  position: sticky;\r\n  top: 0;\r\n}\r\n\r\n#Header.scroll.headroom-show,\r\n#Header.headroom-end,\r\n#Header.visible {\r\n  animation: headroom 0.3s ease-in;\r\n  transform: translateY(0%);\r\n  position: sticky;\r\n  top: 0;\r\n}\r\n\r\n#Header.headroom-top {\r\n  animation: none;\r\n}\r\n\r\n#Header.fixed {\r\n  position: sticky;\r\n  animation: none;\r\n  top: 0;\r\n  transform: translateY(0%);\r\n}\r\n\r\n#Header.simple {\r\n  position: static;\r\n  animation: none;\r\n  top: 0;\r\n  transform: translateY(0%);\r\n}\r\n\r\n#menu {\r\n  position: fixed;\r\n  z-index: 1;\r\n  color: var(--theme-body-text-color);\r\n  height: 40px;\r\n  width: 40px;\r\n}\r\n\r\n#menu:not(.click),\r\n#menu.hide {\r\n  display: none;\r\n}\r\n\r\n#menu.click {\r\n  z-index: 901;\r\n}\r\n\r\n#MangaTitle {\r\n  padding: 2px;\r\n  margin: 0;\r\n  font-size: 1.2rem;\r\n  font-weight: 400;\r\n  word-wrap: anywhere;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  min-width: 200px;\r\n  max-width: 40vw;\r\n}\r\n\r\n#GlobalFunctions {\r\n  display: flex;\r\n  gap: 3px;\r\n  padding: 3px 3px 3px 0;\r\n  flex-wrap: wrap;\r\n  z-index: 100;\r\n}\r\n\r\n#ZoomControl {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 3px;\r\n  padding: 10px 5px;\r\n}\r\n';

  const media =
    '#Header.mobile,\r\n#Header.tablet {\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.mobile #ViewerTitle,\r\n.tablet #ViewerTitle {\r\n  order: 4;\r\n  min-height: auto;\r\n}\r\n\r\n.mobile #GlobalFunctions,\r\n.tablet #GlobalFunctions {\r\n  order: 2;\r\n  width: auto;\r\n  padding: 5px;\r\n}\r\n\r\n.mobile #GlobalFunctions span {\r\n  flex-direction: column;\r\n}\r\n\r\n.mobile #ZoomControl,\r\n.tablet #ZoomControl {\r\n  order: 3;\r\n}\r\n\r\n.mobile #Toolbar,\r\n.tabler #Toolbar {\r\n  order: 1;\r\n}\r\n\r\n#Header.mobile {\r\n  flex-direction: row;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n#Header.mobile.click + #Chapter:not(.webcomic, .vertical) {\r\n  position: sticky;\r\n}\r\n\r\n.tablet #MangaTitle,\r\n.mobile #MangaTitle {\r\n  max-width: 90vw;\r\n}\r\n\r\n.mobile #ViewerTitle {\r\n  order: 3;\r\n  margin-top: 0;\r\n  height: auto;\r\n  padding: 0;\r\n}\r\n\r\n.mobile #GlobalFunctions {\r\n  order: 2;\r\n  padding: 0;\r\n  width: auto;\r\n  gap: 0;\r\n}\r\n\r\n.mobile wa-button::part(base) {\r\n  border-radius: 0;\r\n}\r\n\r\n.mobile #FileDropdown wa-button:first-of-type::part(base) {\r\n  border-radius: 5px 0 0 5px;\r\n}\r\n\r\n.mobile #GlobalFunctions wa-button:last-of-type::part(base) {\r\n  border-radius: 0 5px 5px 0;\r\n}\r\n\r\n.mobile .PageFunctions {\r\n  padding: 0;\r\n}\r\n\r\n.mobile .PageFunctions .PageButton.Bookmark {\r\n  opacity: 1;\r\n}\r\n\r\n.mobile #GlobalFunctions #ZoomSlider,\r\n.tablet #GlobalFunctions #ZoomSlider,\r\n.mobile .PageFunctions .PageButton:not(.Bookmark),\r\n.tablet #Counters,\r\n.mobile #ZoomControl,\r\n.mobile #ZoomDropdown,\r\n.mobile #ViewDropdown,\r\n.mobile #FileDropdown :where(:nth-child(3), :nth-child(4)) {\r\n  display: none;\r\n}\r\n';

  var __defProp$2 = Object.defineProperty;
  var __getOwnPropDesc$6 = Object.getOwnPropertyDescriptor;
  var __decorateClass$6 = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$6(target, key) : target;
    for (var i = decorators.length - 1, decorator; i >= 0; i--)
      if ((decorator = decorators[i]))
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result) __defProp$2(target, key, result);
    return result;
  };
  let Header = class extends i$3 {
    constructor() {
      super(...arguments);
      this.headroomController = new HeadroomController(this);
    }
    render() {
      if (!this.manga) return x$1``;
      const { headroom, headerVisible } = this.headroomController;
      const keybinds = getSettingsValue('keybinds');
      const renderKeybind = action => {
        if (getAppStateValue('device') !== 'desktop') return E;
        const keys = keybinds[action];
        if (!keys || keys.length === 0) {
          return E;
        }
        return keys.map(key => x$1`<kbd slot="details">${key}</kbd>`);
      };
      return x$1`
      <wa-button
        id="menu"
        class="${e$2({
          [getSettingsValue('header')]: true,
          hide: ['top', 'end'].includes(headroom),
        })}"
        @click=${this.headroomController.toggleHeaderVisibility}
      >
        <wa-icon name="IconMenu2"></wa-icon>
      </wa-button>
      <header
        id="Header"
        class="${e$2({
          [getSettingsValue('header')]: true,
          [`headroom-${headroom}`]: true,
          visible: headerVisible && ['hide', 'none'].includes(headroom),
          [getAppStateValue('device')]: true,
        })}"
      >
        <div
          id="Toolbar"
          class="button-group"
        >
          <wa-dropdown id="FileDropdown">
            <wa-button
              slot="trigger"
              title="${getLocaleString('FILE_MENU')}"
            >
              <wa-icon
                label="File"
                name="IconDotsVertical"
              ></wa-icon>
            </wa-button>
            <wa-dropdown-item
              id="settings"
              @click=${buttonSettingsOpen}
            >
              <wa-icon
                slot="icon"
                name="IconSettings"
              ></wa-icon>
              ${getLocaleString('SETTINGS')} ${renderKeybind('SETTINGS')}
            </wa-dropdown-item>
            <wa-dropdown-item
              id="keybindings"
              @click=${buttonKeybindingsOpen}
            >
              <wa-icon
                slot="icon"
                name="IconKeyboard"
              ></wa-icon>
              ${getLocaleString('KEYBINDINGS')}
            </wa-dropdown-item>
            <wa-dropdown-item
              id="AutoScroll"
              class="${e$2({ running: getAppStateValue('autoScroll') })}"
              @click=${toggleAutoScroll}
            >
              <wa-icon
                slot="icon"
                name="${getAppStateValue('autoScroll') ? 'IconPlayerPause' : 'IconPlayerPlay'}"
              ></wa-icon>
              ${getLocaleString('SCROLL_START')} ${renderKeybind('SCROLL_START')}
            </wa-dropdown-item>
            <wa-dropdown-item
              id="bookmarks"
              class="tablets"
              @click=${buttonBookmarksOpen}
            >
              <wa-icon
                slot="icon"
                name="IconBookmarks"
              ></wa-icon>
              ${getLocaleString('BOOKMARKS')}
            </wa-dropdown-item>
            <wa-dropdown-item
              id="pageControls"
              class="tablets phones"
              @click="${buttonGlobalHideImageControls}"
              ?selected=${getSettingsValue('hidePageControls')}
            >
              <wa-icon
                slot="icon"
                name="IconListNumbers"
              ></wa-icon>
              ${getLocaleString('TOGGLE_CONTROLS')}
            </wa-dropdown-item>
          </wa-dropdown>

          <wa-dropdown
            id="ViewDropdown"
            checkable
          >
            <wa-button
              slot="trigger"
              title="${getLocaleString('VIEW_MENU')}"
            >
              <wa-icon
                label="View"
                name="IconBook"
              ></wa-icon>
            </wa-button>
            <wa-dropdown-item
              id="webComic"
              class="tablets"
              @click="${updateViewMode('WebComic')}"
              ?selected=${getSettingsValue('viewMode') === 'WebComic'}
            >
              <wa-icon
                slot="icon"
                name="IconSpacingVertical"
              ></wa-icon>
              ${getLocaleString('VIEW_MODE_WEBCOMIC')} ${renderKeybind('VIEW_MODE_WEBCOMIC')}
            </wa-dropdown-item>
            <wa-dropdown-item
              id="verticalMode"
              class="tablets"
              @click="${updateViewMode('Vertical')}"
              ?selected=${getSettingsValue('viewMode') === 'Vertical'}
            >
              <wa-icon
                slot="icon"
                name="IconArrowAutofitDown"
              ></wa-icon>
              ${getLocaleString('VIEW_MODE_VERTICAL')} ${renderKeybind('VIEW_MODE_VERTICAL')}
            </wa-dropdown-item>
            <wa-dropdown-item
              id="ltrMode"
              @click="${updateViewMode('FluidLTR')}"
              ?selected=${getSettingsValue('viewMode') === 'FluidLTR'}
            >
              <wa-icon
                slot="icon"
                name="IconArrowAutofitRight"
              ></wa-icon>
              ${getLocaleString('VIEW_MODE_LEFT')} ${renderKeybind('VIEW_MODE_LEFT')}
            </wa-dropdown-item>
            <wa-dropdown-item
              id="rtlMode"
              @click="${updateViewMode('FluidRTL')}"
              ?selected=${getSettingsValue('viewMode') === 'FluidRTL'}
            >
              <wa-icon
                slot="icon"
                name="IconArrowAutofitLeft"
              ></wa-icon>
              ${getLocaleString('VIEW_MODE_RIGHT')} ${renderKeybind('VIEW_MODE_RIGHT')}
            </wa-dropdown-item>
          </wa-dropdown>
          <wa-dropdown
            id="ZoomDropdown"
            checkable
          >
            <wa-button
              slot="trigger"
              title="${getLocaleString('ZOOM_MENU')}"
            >
              <wa-icon
                label="Zoom"
                name="IconZoom"
              ></wa-icon>
            </wa-button>
            <wa-dropdown-item
              id="enlarge"
              @click="${changeZoomByStep()}"
            >
              <wa-icon
                slot="icon"
                name="IconZoomInArea"
              ></wa-icon>
              ${getLocaleString('ENLARGE')} ${renderKeybind('ENLARGE')}
            </wa-dropdown-item>
            <wa-dropdown-item
              id="restore"
              @click="${changeGlobalZoom('percent', 100)}"
            >
              <wa-icon
                slot="icon"
                name="IconZoomPan"
              ></wa-icon>
              ${getLocaleString('RESTORE')} ${renderKeybind('RESTORE')}
            </wa-dropdown-item>
            <wa-dropdown-item
              id="reduce"
              @click="${changeZoomByStep(-1)}"
            >
              <wa-icon
                slot="icon"
                name="IconZoomOutArea"
              ></wa-icon>
              ${getLocaleString('REDUCE')} ${renderKeybind('REDUCE')}
            </wa-dropdown-item>
            <wa-dropdown-item
              id="fitWidth"
              @click="${changeGlobalZoom('width')}"
              ?selected=${getSettingsValue('zoomMode') === 'width'}
            >
              <wa-icon
                slot="icon"
                name="IconArrowAutofitWidth"
              ></wa-icon>
              ${getLocaleString('FIT_WIDTH')} ${renderKeybind('FIT_WIDTH')}
            </wa-dropdown-item>
            <wa-dropdown-item
              id="fitHeight"
              @click="${changeGlobalZoom('height')}"
              ?selected=${getSettingsValue('zoomMode') === 'height'}
            >
              <wa-icon
                slot="icon"
                name="IconArrowAutofitHeight"
              ></wa-icon>
              ${getLocaleString('FIT_HEIGHT')} ${renderKeybind('FIT_HEIGHT')}
            </wa-dropdown-item>
          </wa-dropdown>
        </div>
        <div id="ViewerTitle">
          <h1 id="MangaTitle">${this.manga.title}</h1>
        </div>
        <div id="ZoomControl">
          <wa-slider
            .value="${getSettingsValue('zoomValue')}"
            name="Zoom"
            id="Zoom"
            min="${getSettingsValue('minZoom')}"
            max="200"
            step="20"
            with-markers
            with-tooltip
            label="Zoom : ${getSettingsValue('zoomValue')}"
            @input=${changeZoom}
            style="max-width: 300px;"
          >
          </wa-slider>
        </div>
        <div
          id="GlobalFunctions"
          class="button-group"
        >
          <wa-button
            id="series"
            href="${this.manga.series ?? E}"
            @click=${buttonRedirectURL}
            title="${getLocaleString('RETURN_CHAPTER_LIST')}"
            ?disabled=${!this.manga.series}
          >
            <wa-icon name="IconBookReturn"></wa-icon>
          </wa-button>
          <wa-button
            id="CommentsButton"
            title="${getLocaleString('DISPLAY_COMMENTS')}"
            @click=${buttonCommentsOpen}
            ?disabled=${!this.manga.comments}
          >
            <wa-icon name="IconMessage"></wa-icon>
          </wa-button>
          <wa-button
            id="download"
            title="${getLocaleString('DOWNLOAD_ZIP')}"
            @click=${buttonStartDownload}
            ?disabled=${getAppStateValue('download') !== 'available'}
            ?loading=${getAppStateValue('download') === 'working'}
          >
            <wa-icon
              name="${getAppStateValue('download') === 'working' ? 'IconLoader2' : 'IconFileDownload'}"
            ></wa-icon>
          </wa-button>
          <wa-button
            id="prev"
            href="${this.manga.prev ?? E}"
            title="${getLocaleString('PREVIOUS_CHAPTER')}"
            @click=${buttonRedirectURL}
            ?disabled=${!this.manga.prev}
          >
            <wa-icon name="IconArrowBigLeft"></wa-icon>
          </wa-button>
          <wa-button
            id="next"
            href="${this.manga.next ?? E}"
            title="${getLocaleString('NEXT_CHAPTER')}"
            @click=${buttonRedirectURL}
            ?disabled=${!this.manga.next}
          >
            <wa-icon name="IconArrowBigRight"></wa-icon>
          </wa-button>
        </div>
      </header>
    `;
    }
  };
  Header.styles = [r$5(styles$6), r$5(media), r$5(keycss), i$5``];
  __decorateClass$6([n$2({ type: Object })], Header.prototype, 'manga', 2);
  Header = __decorateClass$6(
    [t$1('reader-header'), libExports.useStores(settings$1, locale, appState)],
    Header,
  );

  const styles$5 =
    '#BookmarksPanel {\r\n  text-align: center;\r\n  --width: 100vw;\r\n}\r\n\r\n#BookmarksList {\r\n  padding: 0 5px;\r\n  overflow: auto;\r\n  max-height: 60vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 5px;\r\n}\r\n\r\n.bookmark-item {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 1rem;\r\n  padding: 0.75rem 1rem;\r\n  border-radius: 5px;\r\n  transition: background-color 150ms ease-in-out;\r\n  text-align: left;\r\n}\r\n\r\n.bookmark-item:hover {\r\n  background-color: var(--mov-color-fill-quiet, rgba(128, 128, 128, 0.1));\r\n}\r\n\r\n.bookmark-info {\r\n  flex-grow: 1;\r\n  min-width: 0;\r\n}\r\n\r\n.bookmark-name {\r\n  font-weight: 500;\r\n}\r\n\r\n.bookmark-url {\r\n  font-size: 0.875rem;\r\n  text-decoration: none;\r\n  display: block;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  color: color-mix(in oklab, var(--theme-body-text-color), transparent 30%);\r\n}\r\n.bookmark-url:hover {\r\n  text-decoration: underline;\r\n}\r\n\r\n.bookmark-details {\r\n  flex-shrink: 0;\r\n  width: 90px;\r\n  font-size: 0.875rem;\r\n  text-align: right;\r\n  color: color-mix(in oklab, var(--theme-body-text-color), transparent 30%);\r\n}\r\n.bookmark-details > div {\r\n  padding: 2px 0;\r\n}\r\n\r\n.bookmark-actions {\r\n  flex-shrink: 0;\r\n  display: flex;\r\n  gap: 0.5rem;\r\n}\r\n';

  var __getOwnPropDesc$5 = Object.getOwnPropertyDescriptor;
  var __decorateClass$5 = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$5(target, key) : target;
    for (var i = decorators.length - 1, decorator; i >= 0; i--)
      if ((decorator = decorators[i])) result = decorator(result) || result;
    return result;
  };
  let BookmarkPanel = class extends i$3 {
    // protected createRenderRoot() {
    //   return this; // No shadow DOM
    // }
    /**
     * Renders the list of saved bookmarks.
     * If no bookmarks are present, it displays a "List Empty" message.
     * Otherwise, it maps over the bookmarks from settings and creates a display element for each.
     *
     * @returns {import('lit').TemplateResult[] | string[]} An array of Lit templates for each bookmark, or a message if the list is empty.
     */
    listBookmarks() {
      if (isEmpty(getSettingsValue('bookmarks'))) {
        return [getLocaleString('LIST_EMPTY')];
      }
      return getSettingsValue('bookmarks').map(
        (mark, index) => x$1`
        <div
          id="Bookmark${index + 1}"
          class="bookmark-item"
        >
          <div class="bookmark-info">
            <div class="bookmark-name">${mark.name}</div>
            <a
              class="bookmark-url"
              href="${mark.url}"
              target="_blank"
              >${mark.url}</a
            >
          </div>
          <div class="bookmark-details">
            <div class="bookmark-date">${new Date(mark.date).toISOString().slice(0, 10)}</div>
            <div class="bookmark-page">Page: ${mark.page}</div>
          </div>
          <div class="bookmark-actions">
            <a
              href="${mark.url}"
              target="_blank"
            >
              <wa-button
                title="Open Bookmark"
                size="small"
              >
                <wa-icon
                  name="IconExternalLink"
                  size="16px"
                ></wa-icon>
              </wa-button>
            </a>
            <wa-button
              title="Delete Bookmark"
              size="small"
              value="${mark.url}"
              @click=${buttonEraseBookmarks}
            >
              <wa-icon
                name="IconTrash"
                size="16px"
              ></wa-icon>
            </wa-button>
          </div>
        </div>
      `,
      );
    }
    render() {
      return x$1`
      <wa-dialog
        id="BookmarksPanel"
        ?open=${getAppStateValue('panel') === 'bookmarks'}
        @close=${buttonPanelsClose}
      >
        <wa-button
          class="Bookmark"
          title="${getLocaleString('BOOKMARK')}"
          @click=${buttonBookmark}
          slot="header-actions"
        >
          <wa-icon
            name="${isBookmarked() === void 0 ? 'IconBookmark' : 'IconBookmarkOff'}"
            size="24px"
          ></wa-icon>
        </wa-button>
        <h2 slot="label">${getLocaleString('BOOKMARKS')}</h2>
        <div id="BookmarksList">${this.listBookmarks()}</div>
      </wa-dialog>
    `;
    }
  };
  BookmarkPanel.styles = [r$5(styles$5)];
  BookmarkPanel = __decorateClass$5(
    [t$1('bookmark-panel'), libExports.useStores(settings$1, locale, appState)],
    BookmarkPanel,
  );

  /**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  function* o$1(o, t) {
    if (void 0 !== o) {
      let i = -1;
      for (const n of o) (i > -1 && (yield t), i++, yield n);
    }
  }

  const styles$4 =
    '#KeybindingsPanel {\r\n  padding: 10px;\r\n  line-height: 1.5em;\r\n}\r\n\r\n#KeybindingsPanel #KeybindingsList {\r\n  display: grid;\r\n  grid-template-columns: 1fr 2fr;\r\n  gap: 5px;\r\n}\r\n\r\n#KeybindingsPanel .ControlButton {\r\n  margin-left: 3px;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding: 5px 10px;\r\n  gap: 0.5em;\r\n}\r\n\r\n#KeybindingsPanel label {\r\n  display: ruby;\r\n}\r\n\r\n#KeybindingsPanel input {\r\n  display: inline-block;\r\n  width: 100%;\r\n}\r\n\r\n#KeybindingsPanel #HotKeysRules {\r\n  grid-column: span 2;\r\n}\r\n';

  var __getOwnPropDesc$4 = Object.getOwnPropertyDescriptor;
  var __decorateClass$4 = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$4(target, key) : target;
    for (var i = decorators.length - 1, decorator; i >= 0; i--)
      if ((decorator = decorators[i])) result = decorator(result) || result;
    return result;
  };
  let KeybindingsPanel = class extends i$3 {
    constructor() {
      super(...arguments);
      // protected createRenderRoot() {
      //   return this; // No shadow DOM
      // }
      this.keybindsRefs = Object.keys(getSettingsValue('keybinds')).reduce((acc, key) => {
        acc[key] = e$8();
        return acc;
      }, {});
    }
    /**
     * Renders a read-only list of the current keybindings.
     * Each keybinding is displayed with its description and the assigned keys.
     *
     * @returns An array of Lit templates, each representing a keybinding entry.
     */
    keybindList() {
      const keybinds = getSettingsValue('keybinds');
      return Object.keys(keybinds).map(kb => {
        const keys = keybinds[kb]?.length
          ? o$1(
              keybinds[kb]?.map(key => x$1`<kbd class="dark">${key}</kbd>`),
              ' / ',
            )
          : '';
        return x$1`<span>${getLocaleString(kb)}:</span> <span>${keys}</span>`;
      });
    }
    /**
     * Renders an editable form for modifying keybindings.
     * It creates a text input for each keybinding action and displays the current assignments.
     * Also includes a section with rules for defining keybindings.
     *
     * @returns An array of Lit templates for the keybinding editor form.
     */
    keybindEditor() {
      const keybinds = getSettingsValue('keybinds');
      return Object.keys(keybinds).map(
        kb => x$1`<label for="${kb}">${getLocaleString(kb)}:</label>
          <input
            type="text"
            class="KeybindInput"
            id="${kb}"
            name="${kb}"
            value="${keybinds[kb]?.join(' , ') ?? E}"
            ${n$5(this.keybindsRefs[kb])}
          />`,
      );
    }
    render() {
      return x$1`
      <wa-drawer
        id="KeybindingsPanel"
        ?open=${getAppStateValue('panel').startsWith('keybindings')}
        placement="end"
        @close=${buttonPanelsClose}
      >
        <h2 slot="label">${getLocaleString('KEYBINDINGS')}</h2>
        <div
          class="controls"
          slot="header-actions"
        >
          ${
            getAppStateValue('panel') === 'keybindingsEditor'
              ? x$1` <wa-button
                id="SaveKeybindings"
                type="button"
                title="${getLocaleString('SAVE_KEYBINDS')}"
                @click=${() => saveKeybindings(this.keybindsRefs)}
              >
                <wa-icon
                  name="IconDeviceFloppy"
                  size="16px"
                  slot="start"
                ></wa-icon>
                ${getLocaleString('BUTTON_SAVE')}
              </wa-button>`
              : x$1` <wa-button
                id="EditKeybindings"
                type="button"
                title="${getLocaleString('EDIT_KEYBINDS')}"
                @click=${editKeybindings}
              >
                <wa-icon
                  name="IconPencil"
                  size="16px"
                  slot="start"
                ></wa-icon>
                ${getLocaleString('BUTTON_EDIT')}
              </wa-button>`
          }
        </div>
        <div id="KeybindingsList">
          ${getAppStateValue('panel') === 'keybindingsEditor' ? this.keybindEditor() : this.keybindList()}
        </div>
        <div id="HotKeysRules">${o$4(getLocaleString('KEYBIND_RULES'))}</div>
      </wa-drawer>
    `;
    }
  };
  KeybindingsPanel.styles = [r$5(styles$4), r$5(keycss)];
  KeybindingsPanel = __decorateClass$4(
    [t$1('keybindings-panel'), libExports.useStores(settings$1, locale, appState)],
    KeybindingsPanel,
  );

  /**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  function* o(o, f) {
    if (void 0 !== o) {
      let i = 0;
      for (const t of o) yield f(t, i++);
    }
  }

  function sequence(repeat, begin = 1) {
    return Array(repeat)
      .fill(0)
      .map((_, i) => i + 1)
      .filter(i => i >= begin);
  }

  function transformScrollToHorizontal(event) {
    if (!event.deltaY) {
      return;
    }
    event.currentTarget.scrollLeft += event.deltaY + event.deltaX;
    event.preventDefault();
  }
  function transformScrollToHorizontalReverse(event) {
    if (!event.deltaY) {
      return;
    }
    event.currentTarget.scrollLeft -= event.deltaY - event.deltaX;
    event.preventDefault();
  }

  const styles$3 =
    ':host {\r\n  --nav-collapsed-size: 34px;\r\n  --nav-expanded-size: 200px;\r\n  --header-height: 80px;\r\n}\r\n#Navigation {\r\n  color: var(--theme-text-color);\r\n  background-color: var(--theme-hightlight-color);\r\n  overflow: hidden;\r\n  display: flex;\r\n  box-sizing: border-box;\r\n  gap: 5px;\r\n  white-space: nowrap;\r\n  text-align: center;\r\n  line-height: 0;\r\n  transition: all 0.3s ease;\r\n  position: fixed;\r\n  z-index: 1000;\r\n}\r\n:host(:not([forceExpanded])) #Navigation:not(:hover) #Thumbnails {\r\n  display: none;\r\n}\r\n#NavigationCounters {\r\n  flex-shrink: 0; /* Prevent this from shrinking */\r\n  padding: 5px;\r\n  line-height: 1rem;\r\n  text-align: center;\r\n  white-space: nowrap;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 0.5rem;\r\n}\r\n#Thumbnails {\r\n  flex-grow: 1;\r\n  display: flex;\r\n  gap: 5px;\r\n  justify-content: flex-start;\r\n}\r\n/* == Horizontal Orientation (for top/bottom position) == */\r\n#Navigation.horizontal {\r\n  flex-direction: column;\r\n  height: var(--nav-collapsed-size);\r\n  width: 100%;\r\n  left: 0;\r\n  right: 0;\r\n}\r\n:host([forceExpanded]) #Navigation.horizontal,\r\n#Navigation.horizontal:hover {\r\n  height: var(--nav-expanded-size);\r\n}\r\n#Navigation.bottom {\r\n  bottom: 0;\r\n}\r\n#Navigation.horizontal #Thumbnails {\r\n  flex-direction: row;\r\n  overflow-x: auto;\r\n  overflow-y: hidden;\r\n}\r\n/* == Vertical Orientation (for left/right position) == */\r\n#Navigation.vertical {\r\n  flex-direction: row;\r\n  width: var(--nav-collapsed-size);\r\n  height: 100%;\r\n  bottom: 0;\r\n  transition:\r\n    top 0.3s ease,\r\n    height 0.3s ease,\r\n    width 0.3s ease;\r\n}\r\n:host([forceExpanded]) #Navigation.vertical,\r\n#Navigation.vertical:hover {\r\n  width: var(--nav-expanded-size);\r\n}\r\n#Navigation.left {\r\n  left: 0;\r\n  flex-direction: row-reverse;\r\n}\r\n#Navigation.right {\r\n  right: 0;\r\n}\r\n#Navigation.vertical #NavigationCounters {\r\n  writing-mode: vertical-rl;\r\n  transform: rotate(180deg);\r\n}\r\n#Navigation.right #NavigationCounters {\r\n  transform: rotate(0deg);\r\n}\r\n#Navigation.vertical #Thumbnails {\r\n  flex-direction: column;\r\n  overflow-y: auto;\r\n  overflow-x: hidden;\r\n  justify-content: flex-start;\r\n}\r\n\r\n#Navigation.left #Thumbnails {\r\n  direction: rtl;\r\n}\r\n/* Adjust for header visibility */\r\n#Navigation.vertical.header {\r\n  top: var(--header-height);\r\n  height: calc(100% - var(--header-height));\r\n}\r\n\r\n#Navigation .Thumbnail {\r\n  display: inline-flex;\r\n  height: 150px;\r\n  width: 150px;\r\n  margin: 0 5px;\r\n  position: relative;\r\n  justify-content: center;\r\n  align-items: center;\r\n  /*border: 1px solid var(--mov-color-fill-loud);*/\r\n}\r\n#Navigation.vertical .Thumbnail {\r\n  /*border: 1px solid var(--mov-color-fill-loud);*/\r\n}\r\n.ThumbnailIndex {\r\n  color: var(--mov-color-on-loud);\r\n  background-color: var(--mov-color-fill-loud);\r\n  display: block;\r\n  opacity: 0.9;\r\n  position: absolute;\r\n  left: 0;\r\n  bottom: 30%;\r\n  width: 100%;\r\n  line-height: 1.2rem;\r\n  text-align: center;\r\n  font-weight: 600;\r\n  z-index: 1;\r\n}\r\n.ThumbnailImg {\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  max-height: 150px;\r\n  min-height: 150px;\r\n  min-width: 80px;\r\n  max-width: 150px;\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  background-size: 48px 48px;\r\n}\r\n';

  var __defProp$1 = Object.defineProperty;
  var __getOwnPropDesc$3 = Object.getOwnPropertyDescriptor;
  var __decorateClass$3 = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$3(target, key) : target;
    for (var i = decorators.length - 1, decorator; i >= 0; i--)
      if ((decorator = decorators[i]))
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result) __defProp$1(target, key, result);
    return result;
  };
  let Navbar = class extends i$3 {
    constructor() {
      super(...arguments);
      this.mode = 'bottom';
      this.forceExpanded = false;
      this.isHiding = false;
    }
    /**
     * Lit-element lifecycle method.
     * Hides the navbar just before its position is about to change.
     */
    willUpdate(changedProperties) {
      if (changedProperties.has('mode')) {
        this.isHiding = true;
      }
    }
    /**
     * Lit-element lifecycle method.
     * Fades the navbar back in after it has been re-rendered in the new position.
     */
    updated(changedProperties) {
      if (changedProperties.has('mode') && this.isHiding) {
        setTimeout(() => {
          this.isHiding = false;
        }, 50);
      }
    }
    /**
     * Renders the navigation bar, including page counters and thumbnails.
     * @returns The rendered template.
     */
    render() {
      const manga = getAppStateValue('manga');
      const navClasses = {
        horizontal: this.mode === 'bottom',
        vertical: this.mode !== 'bottom',
        left: this.mode === 'left',
        right: this.mode === 'right',
        bottom: this.mode === 'bottom',
        hiding: this.isHiding,
      };
      return x$1`
      <nav
        id="Navigation"
        class="${e$2(navClasses)}"
      >
        <div
          id="NavigationCounters"
          class="ControlLabel"
        >
          ${IconCategory}
          <i>${getAppStateValue('loaded')}</i> /
          <b> ${(manga?.pages ?? 1) - ((manga?.begin ?? 1) - 1)} </b>
          ${getLocaleString('PAGES_LOADED')}
          <span>: ${getAppStateValue('currentPage')}</span>
        </div>
        <div
          id="Thumbnails"
          @wheel=${this.mode === 'bottom' ? transformScrollToHorizontal : null}
        >
          ${o(
            sequence(manga?.pages ?? 1, manga?.begin ?? 1),
            index => x$1` <figure
                id="Thumbnail${index}"
                class="Thumbnail"
                role="button"
                tabindex="0"
                title="Go to page ${index}"
                @click=${() => clickThumbnail(index)}
              >
                <img
                  id="ThumbnailImg${index}"
                  alt=""
                  class="ThumbnailImg"
                  src=${getAppStateValue('images')?.[index]?.src ?? E}
                />
                <figcaption class="ThumbnailIndex">${index}</figcaption>
              </figure>`,
          )}
        </div>
      </nav>
    `;
    }
  };
  /**
   * The component's styles, including imported CSS and dynamic styles for image placeholders.
   */
  Navbar.styles = [
    r$5(styles$3),
    i$5`
      #Navigation {
        transition: opacity 0.2s ease-in-out;
      }
      #Navigation.hiding {
        opacity: 0;
        /* Disable transition during position change to avoid animating the hide */
        transition: none;
      }

      .Thumbnail .ThumbnailImg[src=''],
      .Thumbnail .ThumbnailImg:not([src]) {
        background-image: url('${r$5(svgToUrl(IconPhoto$1))}');
      }

      .Thumbnail .ThumbnailImg.imgBroken {
        background-image: url('${r$5(svgToUrl(IconPhotoOff$1))}');
      }
    `,
  ];
  __decorateClass$3([n$2({ type: String })], Navbar.prototype, 'mode', 2);
  __decorateClass$3([n$2({ type: Boolean })], Navbar.prototype, 'forceExpanded', 2);
  __decorateClass$3([r$2()], Navbar.prototype, 'isHiding', 2);
  Navbar = __decorateClass$3(
    [t$1('navbar-thumbnails'), libExports.useStores(settings$1, locale, appState)],
    Navbar,
  );

  const styles$2 =
    '#CommentsPanel {\r\n  text-align: center;\r\n  --width: 100vw;\r\n}\r\n\r\n#CommentsArea {\r\n  overflow-y: auto;\r\n  overscroll-behavior: contain;\r\n  height: 100%;\r\n  width: 100%;\r\n  background-color: var(--theme-body-background);\r\n}\r\n';

  const darkest = 10;
  const lightest = 95;
  const darkSteps = 4;
  const lightSteps = 5;
  const lightnessStep = (lightest - 50) / lightSteps;
  const darknessStep = (50 - darkest) / darkSteps;
  function gradientBySteps(baseColor) {
    const baseHsl = baseColor.to('hsl');
    const results = [];
    const steps = [
      50 + lightnessStep * 5,
      50 + lightnessStep * 4,
      50 + lightnessStep * 3,
      50 + lightnessStep * 2,
      50 + lightnessStep,
      50,
      50 - darknessStep,
      50 - darknessStep * 2,
      50 - darknessStep * 3,
      50 - darknessStep * 4,
      50 - darknessStep * 5,
    ];
    for (const l of steps) {
      results.push(baseHsl.clone().set('hsl.l', l).toString({ format: 'hex' }));
    }
    return results;
  }
  function gradientBySaturation(baseColor) {
    const baseHsl = baseColor.to('hsl');
    const lightnessScale = [0.97, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1, 0.05];
    const colors = [];
    for (const l of lightnessScale) {
      const newColor = baseHsl.clone();
      newColor.set('hsl.l', l * 100);
      if (l > 0.8) {
        newColor.set('hsl.s', s => s * 0.4);
      } else if (l > 0.6) {
        newColor.set('hsl.s', s => s * 0.8);
      } else if (l < 0.3) {
        newColor.set('hsl.s', s => Math.min(100, s * 1.1));
      }
      colors.push(newColor.toString({ format: 'hex' }).toUpperCase());
    }
    return colors;
  }
  function gradientByLightness(baseColor) {
    const colors = [];
    const lightnessSteps = [95, 90, 80, 70, 60, 50, 40, 30, 20, 10, 5];
    const baseHsl = baseColor.to('hsl');
    for (const lightness of lightnessSteps) {
      colors.push(
        baseHsl.clone().set('hsl.l', lightness).toString({ format: 'hex' }).toUpperCase(),
      );
    }
    return colors;
  }
  function gradientByChakra(baseColor) {
    const palette = new Array(11).fill('');
    const baseHsl = baseColor.to('hsl');
    const config = {
      lightest: { lightness: 95, rotate: -10, saturate: -30 },
      darkest: { lightness: 10, rotate: 10, saturate: 10 },
    };
    const lightStepsCount = 5;
    const darkStepsCount = 5;
    const lightnessStep2 = (config.lightest.lightness - 50) / lightStepsCount;
    const darknessStep2 = (50 - config.darkest.lightness) / darkStepsCount;
    const lightRotateStep = config.lightest.rotate / lightStepsCount;
    const darkRotateStep = config.darkest.rotate / darkStepsCount;
    const lightSaturateStep = config.lightest.saturate / lightStepsCount;
    const darkSaturateStep = config.darkest.saturate / darkStepsCount;
    for (let i = 1; i <= lightStepsCount; i++) {
      const step = lightStepsCount - i;
      const color = baseHsl
        .clone()
        .set('hsl.l', l => l + lightnessStep2 * (i - 0.5))
        .set('hsl.h', h => h + lightRotateStep * i)
        .set('hsl.s', s => s + lightSaturateStep * i);
      palette[step] = color.toString({ format: 'hex' });
    }
    palette[5] = baseHsl.clone().toString({ format: 'hex' });
    for (let i = 1; i <= darkStepsCount; i++) {
      const step = lightStepsCount + i;
      const color = baseHsl
        .clone()
        .set('hsl.l', l => l - darknessStep2 * (i - 0.5))
        .set('hsl.h', h => h + darkRotateStep * i)
        .set('hsl.s', s => s + darkSaturateStep * i);
      palette[step] = color.toString({ format: 'hex' });
    }
    return palette;
  }
  function gradientByMantine(baseColor) {
    const baseHsl = baseColor.to('hsl');
    const [h, s, l] = baseHsl.coords;
    const palette = new Array(11);
    palette[5] = baseColor.toString({ format: 'hex' });
    for (let i = 0; i < 5; i++) {
      const factor = (5 - i) / 6;
      const newL = l + (100 - l) * factor;
      const newS = s - s * factor;
      palette[i] = new Color({ space: 'hsl', coords: [h, newS, newL] }).toString({ format: 'hex' });
    }
    for (let i = 0; i < 5; i++) {
      const factor = (i + 1) / 6;
      const newL = l - l * factor;
      const newS = s + (100 - s) * factor;
      palette[i + 6] = new Color({ space: 'hsl', coords: [h, newS, newL] }).toString({
        format: 'hex',
      });
    }
    return palette;
  }
  function generateColorGradient(baseHexColor, mode = 'steps') {
    const baseColor = Color.parse(baseHexColor) ? new Color(baseHexColor) : new Color(sample.navy);
    switch (mode) {
      case 'saturation':
        return gradientBySaturation(baseColor);
      case 'lightness':
        return gradientByLightness(baseColor);
      case 'mantine':
        return gradientByMantine(baseColor);
      case 'chakra':
        return gradientByChakra(baseColor);
      default:
        return gradientBySteps(baseColor);
    }
  }

  const themesCSS = (selector = '#MangaOnlineViewer', hex = getSettingsValue('theme')) => {
    const gradient = generateColorGradient(hex);
    const text = getTextColor(hex);
    const secondary = getSettingsValue('colorScheme') === 'dark' ? gradient[8] : gradient[2];
    const secondaryText = getTextColor(secondary);
    return css`
      :where(:root),
      ${selector}, ${selector}.dark, .dark,
      ${selector}.wa-dark, .wa-dark {
        --theme-primary-color: ${hex};
        --theme-primary-text-color: ${text};
        --theme-secondary-color: ${secondary};
        --theme-secondary-text-color: ${secondaryText};

        color-scheme: dark;
        --theme-body-background: ${colors.dark['600']};
        --theme-body-text-color: ${colors.dark['50']};
        --theme-text-color: ${colors.dark['50']};
        --theme-background-color: ${colors.dark['600']};
        --theme-hightlight-color: ${colors.dark['500']};
        --theme-border-color: ${colors.dark['400']};

        --mov-color-fill-quiet: ${gradient[9]};
        --mov-color-fill-normal: var(--theme-secondary-color, ${gradient[8]});
        --mov-color-fill-loud: var(--theme-primary-color);
        --mov-color-border-quiet: ${gradient[8]};
        --mov-color-border-normal: ${gradient[7]};
        --mov-color-border-loud: ${gradient[6]};
        --mov-color-on-quiet: ${gradient[4]};
        --mov-color-on-normal: var(--theme-secondary-text-color, ${gradient[3]});
        --mov-color-on-loud: var(--theme-primary-text-color, white);

        --wa-color-neutral-fill-quiet: var(--mov-color-fill-quiet);
        --wa-color-neutral-fill-normal: var(--mov-color-fill-normal);
        --wa-color-neutral-fill-loud: var(--mov-color-fill-loud);
        --wa-color-neutral-border-quiet: var(--mov-color-border-quiet);
        --wa-color-neutral-border-normal: var(--mov-color-border-normal);
        --wa-color-neutral-border-loud: var(--mov-color-border-loud);
        --wa-color-neutral-on-quiet: var(--mov-color-on-quiet);
        --wa-color-neutral-on-normal: var(--mov-color-on-normal);
        --wa-color-neutral-on-loud: var(--mov-color-on-loud);

        --mov-color-mix-hover: black 8%;
        --mov-color-mix-active: black 16%;
      }

      ${selector}.light,
      .light,
    ${selector}.wa-light,
    .wa-light {
        color-scheme: light;
        --theme-body-background: ${colors.gray['50']};
        --theme-body-text-color: ${colors.gray['900']};
        --theme-text-color: ${colors.gray['900']};
        --theme-background-color: ${colors.gray['50']};
        --theme-hightlight-color: ${colors.gray['500']};
        --theme-border-color: ${colors.gray['100']};

        --mov-color-fill-quiet: ${gradient[0]};
        --mov-color-fill-normal: var(--theme-secondary-color, ${gradient[1]});
        --mov-color-fill-loud: var(--theme-primary-color);
        --mov-color-border-quiet: ${gradient[1]};
        --mov-color-border-normal: ${gradient[2]};
        --mov-color-border-loud: ${gradient[4]};
        --mov-color-on-quiet: ${gradient[6]};
        --mov-color-on-normal: var(--theme-secondary-text-color, ${gradient[3]});
        --mov-color-on-loud: var(--theme-primary-text-color, white);

        --mov-color-mix-hover: black 10%;
        --mov-color-mix-active: black 20%;
      }
    `;
  };

  var __defProp = Object.defineProperty;
  var __getOwnPropDesc$2 = Object.getOwnPropertyDescriptor;
  var __decorateClass$2 = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$2(target, key) : target;
    for (var i = decorators.length - 1, decorator; i >= 0; i--)
      if ((decorator = decorators[i]))
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result) __defProp(target, key, result);
    return result;
  };
  let CommentsPanel = class extends i$3 {
    constructor() {
      super(...arguments);
      this.colorScheme = getSettingsValue('colorScheme');
    }
    render() {
      return x$1`
      <wa-dialog
        id="CommentsPanel"
        ?open=${getAppStateValue('panel') === 'comments'}
        fullscreen
        @close=${buttonPanelsClose}
      >
        <h2 slot="label">${getLocaleString('COMMENTS')}</h2>
        <div
          id="CommentsArea"
          class="${this.colorScheme}"
        >
          ${getAppStateValue('manga')?.comments}
        </div>
        <toggle-button
          id="CommentsColorScheme"
          mode="theme"
          @click=${this.changeCommentsColor}
          slot="header-actions"
          ?active=${this.colorScheme === 'dark'}
        >
        </toggle-button>
      </wa-dialog>
    `;
    }
    /**
     * Event handler to toggle the color scheme of the comments panel.
     * It toggles 'light' and 'dark' classes on the parent element of the button.
     * @param {MouseEvent} e - The click event.
     */
    changeCommentsColor(_e) {
      this.colorScheme = this.colorScheme === 'dark' ? 'light' : 'dark';
    }
  };
  CommentsPanel.styles = [r$5(styles$2), r$5(themesCSS(':host'))];
  __decorateClass$2([r$2()], CommentsPanel.prototype, 'colorScheme', 2);
  CommentsPanel = __decorateClass$2(
    [t$1('comments-panel'), libExports.useStores(settings$1, locale, appState)],
    CommentsPanel,
  );

  function changeSettingsScope(event) {
    const scope = event.currentTarget.value;
    toggleLocalSettings(scope === 'true');
  }
  function changeLocale(event) {
    const locale = event.currentTarget.value;
    saveSettingsValue('locale', locale);
  }
  function changeLoadMode(event) {
    const mode = event.currentTarget.value;
    saveSettingsValue('loadMode', mode);
  }
  function checkFitWidthOversize(event) {
    const checked = event.currentTarget.checked;
    saveSettingsValue('fitWidthIfOversize', checked);
  }
  function changeNavbarType(event) {
    const navbarType = event.currentTarget.value;
    saveSettingsValue('navbar', navbarType);
  }
  function checkEnableComments(event) {
    const checked = event.currentTarget.checked;
    saveSettingsValue('enableComments', checked);
  }
  function checkPagination(event) {
    const checked = event.currentTarget.checked;
    saveSettingsValue('pagination', checked);
  }
  function checkAutoDownload(event) {
    const checked = event.currentTarget.checked;
    saveSettingsValue('downloadZip', checked);
    if (checked) {
      Swal.fire({
        title: getLocaleString('ATTENTION'),
        text: getLocaleString('AUTO_DOWNLOAD'),
        timer: 1e4,
        icon: 'info',
      });
    }
  }
  function checkLazyLoad(event) {
    const checked = event.currentTarget.checked;
    saveSettingsValue('lazyLoadImages', checked);
    if (checked) {
      Swal.fire({
        title: getLocaleString('WARNING'),
        html: getLocaleString('LAZY_LOAD'),
        icon: 'warning',
      });
    }
  }
  function changeLazyStart(event) {
    const start = event.currentTarget.value;
    saveSettingsValue('lazyStart', parseInt(start, 10));
  }
  function changePagesPerSecond(event) {
    const timer = parseInt(event.currentTarget.value, 10);
    saveSettingsValue('throttlePageLoad', timer);
    if (timer < 100) {
      Swal.fire({
        title: getLocaleString('SPEED_WARNING'),
        html: getLocaleString('SPEED_WARNING_MESSAGE'),
        icon: 'warning',
      });
    }
  }
  function changeZoomStep(event) {
    const step = event.currentTarget.value;
    saveSettingsValue('zoomStep', parseInt(step, 10));
  }
  function changeMinZoom(event) {
    const min = event.currentTarget.value;
    replaceStyleSheet('MinZoom', `#MangaOnlineViewer .PageContent .PageImg {min-width: ${min}vw;}`);
    saveSettingsValue('minZoom', parseInt(min, 10));
  }
  function checkHideImageControls(event) {
    const checked = event.currentTarget.checked;
    saveSettingsValue('hidePageControls', checked);
  }
  function changeHeaderType(event) {
    const headerType = event.currentTarget.value;
    saveSettingsValue('header', headerType);
  }
  function changeScrollHeight(event) {
    const { value } = event.currentTarget;
    saveSettingsValue('scrollHeight', parseInt(value, 10));
  }

  function settingsScope() {
    const options = [
      {
        value: 'false',
        label: getLocaleString('GLOBAL'),
        icon: IconWorldCog,
      },
      {
        value: 'true',
        label: window.location.hostname,
        icon: IconLocationCog,
      },
    ];
    const value = isSettingsLocal() ? 'true' : 'false';
    return x$1` <div class="ControlLabel">
    ${getLocaleString('SCOPE')}
    <segmented-control
      .options=${options}
      .value=${value}
      @change=${changeSettingsScope}
    ></segmented-control>
  </div>`;
  }
  function localeSelector() {
    return locales.map(
      locale => x$1`
      <option
        value="${locale.ID}"
        ?selected=${getSettingsValue('locale') === locale.ID}
      >
        ${locale.NAME}
      </option>
    `,
    );
  }
  function language() {
    return x$1` <div class="ControlLabel locale">
    ${getLocaleString('LANGUAGE')}
    <select
      id="locale"
      @change="${changeLocale}"
    >
      ${localeSelector()}
    </select>
  </div>`;
  }
  const SettingsPanelGeneral = () => x$1`${settingsScope()} ${language()}`;

  function loadMode() {
    return x$1`
    <div class="ControlLabel loadMode">
      ${getLocaleString('DEFAULT_LOAD_MODE')}
      <select
        id="loadMode"
        @change="${changeLoadMode}"
      >
        <option
          value="wait"
          ?selected=${getSettingsValue('loadMode') === 'wait'}
        >
          ${getLocaleString('LOAD_MODE_NORMAL')}
        </option>
        <option
          value="always"
          ?selected=${getSettingsValue('loadMode') === 'always'}
        >
          ${getLocaleString('LOAD_MODE_ALWAYS')}
        </option>
        <option
          value="never"
          ?selected=${getSettingsValue('loadMode') === 'never'}
        >
          ${getLocaleString('LOAD_MODE_NEVER')}
        </option>
      </select>
    </div>
  `;
  }
  function loadSpeed() {
    return x$1`
    <div class="ControlLabel PagesPerSecond">
      ${getLocaleString('LOAD_SPEED')}
      <select
        id="PagesPerSecond"
        @change="${changePagesPerSecond}"
      >
        <option
          value="3000"
          ?selected=${getSettingsValue('throttlePageLoad') === 3e3}
        >
          0.3(${getLocaleString('SLOWLY')})
        </option>
        <option
          value="2000"
          ?selected=${getSettingsValue('throttlePageLoad') === 2e3}
        >
          0.5
        </option>
        <option
          value="1000"
          ?selected=${getSettingsValue('throttlePageLoad') === 1e3}
        >
          01(${getLocaleString('NORMAL')})
        </option>
        <option
          value="500"
          ?selected=${getSettingsValue('throttlePageLoad') === 500}
        >
          02
        </option>
        <option
          value="250"
          ?selected=${getSettingsValue('throttlePageLoad') === 250}
        >
          04(${getLocaleString('FAST')})
        </option>
        <option
          value="125"
          ?selected=${getSettingsValue('throttlePageLoad') === 125}
        >
          08
        </option>
        <option
          value="100"
          ?selected=${getSettingsValue('throttlePageLoad') === 100}
        >
          10(${getLocaleString('EXTREME')})
        </option>
        <option
          value="1"
          ?selected=${getSettingsValue('throttlePageLoad') === 1}
        >
          ${getLocaleString('ALL_PAGES')}
        </option>
      </select>
    </div>
  `;
  }
  const SettingsPanelLoading = () => x$1`${loadMode()} ${loadSpeed()}`;

  function checkboxOptions() {
    return x$1`
    <div class="ControlLabel fitIfOversize">
      ${getLocaleString('FIT_WIDTH_OVERSIZED')}
      <toggle-switch
        name="fitIfOversize"
        ?checked=${getSettingsValue('fitWidthIfOversize')}
        .onChange=${checkFitWidthOversize}
      ></toggle-switch>
    </div>
    <div class="ControlLabel pagination">
      ${getLocaleString('ENABLE_PAGINATION')}
      <toggle-switch
        name="pagination"
        ?checked=${getSettingsValue('pagination')}
        .onChange=${checkPagination}
      ></toggle-switch>
    </div>
    <div class="ControlLabel enableComments">
      ${getLocaleString('ENABLE_COMMENTS')}
      <toggle-switch
        name="enableComments"
        ?checked=${getSettingsValue('enableComments')}
        .onChange=${checkEnableComments}
      ></toggle-switch>
    </div>
    <div class="ControlLabel downloadZip">
      ${getLocaleString('DOWNLOAD_IMAGES')}
      <toggle-switch
        name="downloadZip"
        ?checked=${getSettingsValue('downloadZip')}
        .onChange=${checkAutoDownload}
      ></toggle-switch>
    </div>
    <div class="ControlLabel hidePageControls">
      ${getLocaleString('HIDE_CONTROLS')}
      <toggle-switch
        name="hidePageControls"
        ?checked=${getSettingsValue('hidePageControls')}
        .onChange=${checkHideImageControls}
      ></toggle-switch>
    </div>
    <div class="ControlLabel lazyLoadImages">
      ${getLocaleString('LAZY_LOAD_IMAGES_ENABLE')}
      <toggle-switch
        name="lazyLoadImages"
        ?checked=${getSettingsValue('lazyLoadImages')}
        .onChange=${checkLazyLoad}
      ></toggle-switch>
    </div>
  `;
  }
  function lazyLoad() {
    return x$1`
    <div
      class="${e$2({
        ControlLabel: true,
        lazyStart: true,
        ControlLabelItem: true,
        show: getSettingsValue('lazyLoadImages'),
      })}"
    >
      <span>
        ${getLocaleString('LAZY_LOAD_IMAGES')}
        <output
          id="lazyStartVal"
          for="lazyStart"
        >
          ${getSettingsValue('lazyStart')}
        </output>
      </span>
      <input
        type="range"
        value="${getSettingsValue('lazyStart')}"
        name="lazyStart"
        id="lazyStart"
        min="5"
        max="100"
        step="5"
        oninput="lazyStartVal.value = this.value"
        @change="${changeLazyStart}"
      />
    </div>
  `;
  }
  function headerType() {
    const headerOptions = [
      { value: 'hover', label: getLocaleString('HEADER_HOVER'), icon: IconArrowsMove },
      { value: 'scroll', label: getLocaleString('HEADER_SCROLL'), icon: IconArrowsVertical },
      { value: 'click', label: getLocaleString('HEADER_CLICK'), icon: IconHandClick },
      { value: 'fixed', label: getLocaleString('HEADER_FIXED'), icon: IconPin },
      { value: 'simple', label: getLocaleString('HEADER_SIMPLE'), icon: IconBoxAlignTop },
    ];
    return x$1`
    <div class="ControlLabel headerType">
      ${getLocaleString('HEADER_TYPE')}
      <segmented-control
        .options=${headerOptions}
        .value=${getSettingsValue('header')}
        @change=${changeHeaderType}
        labelPosition="bottom"
      ></segmented-control>
    </div>
  `;
  }
  function navbarType() {
    const navbarOptions = [
      { value: 'bottom', label: getLocaleString('NAVBAR_BOTTOM'), icon: IconLayoutBottombar },
      { value: 'left', label: getLocaleString('NAVBAR_LEFT'), icon: IconLayoutSidebar },
      { value: 'right', label: getLocaleString('NAVBAR_RIGHT'), icon: IconLayoutSidebarRight },
      { value: 'disabled', label: getLocaleString('NAVBAR_DISABLED'), icon: IconX },
    ];
    return x$1`
    <div class="ControlLabel navbarType">
      ${getLocaleString('NAVBAR_TYPE')}
      <segmented-control
        .options=${navbarOptions}
        .value=${getSettingsValue('navbar')}
        @change=${changeNavbarType}
        labelPosition="tooltip"
      ></segmented-control>
    </div>
  `;
  }
  function autoScroll() {
    return x$1`
    <div class="ControlLabel autoScroll">
      <span>
        ${getLocaleString('AUTO_SCROLL_HEIGHT')}
        <output
          id="scrollHeightVal"
          for="scrollHeight"
        >
          ${getSettingsValue('scrollHeight')} </output
        >px
      </span>
      <input
        type="range"
        value="${getSettingsValue('scrollHeight')}"
        name="scrollHeight"
        id="scrollHeight"
        min="1"
        max="100"
        step="1"
        @change="${changeScrollHeight}"
      />
    </div>
  `;
  }
  const SettingsPanelOthers = () =>
    x$1`${checkboxOptions()} ${lazyLoad()} ${headerType()} ${navbarType()} ${autoScroll()}`;

  function changeColorScheme() {
    const isDark = getSettingsValue('colorScheme') === 'dark';
    saveSettingsValue('colorScheme', isDark ? 'light' : 'dark');
    document.documentElement.classList.remove('dark', 'light', 'wa-dark', 'wa-light');
    document.documentElement.classList.add(
      getSettingsValue('colorScheme'),
      `wa-${getSettingsValue('colorScheme')}`,
    );
  }
  function buttonSelectTheme(event) {
    const target = event.currentTarget;
    saveSettingsValue('theme', target.title);
  }
  function changeThemeHex(event) {
    const value = event.currentTarget.value;
    saveSettingsValue('theme', value);
  }

  function theme() {
    return x$1`
    <div class="ControlLabel ColorSchemeSelector">
      <label>${getLocaleString('COLOR_SCHEME')}</label>
      <toggle-button
        id="ColorScheme"
        mode="theme"
        @click=${changeColorScheme}
        ?active=${getSettingsValue('colorScheme') === 'dark'}
      >
      </toggle-button>
    </div>
    <div class="ControlLabel ThemeSelector">
      <label>${getLocaleString('THEME_COLOR')}</label>
      <input
        id="ThemeHex"
        type="color"
        .value="${getSettingsValue('theme')}"
        class="colorpicker"
        title="${getSettingsValue('theme')}"
        @input=${changeThemeHex}
        list="color-sample"
      />
      <datalist id="color-sample">
        ${Object.values(sample).map(c => x$1`<option value="${c}"></option>`)}
      </datalist>
    </div>
    <span id="ColorRecommendations">
      ${Object.values(sample).map(
        c => x$1`<color-swatch
            .value="${c}"
            ?selected=${getSettingsValue('theme') === c}
            @click=${changeThemeHex}
          ></color-swatch>`,
      )}
    </span>
    <details class="ControlLabel">
      <summary>${getLocaleString('THEME_HUE')} & ${getLocaleString('THEME_SHADE')}</summary>
      <color-panel
        .value=${getSettingsValue('theme')}
        @click=${buttonSelectTheme}
      ></color-panel>
    </details>
  `;
  }

  function defaultZoomMode() {
    const zoomOptions = [
      { value: 'percent', label: getLocaleString('PERCENT'), icon: IconFilePercent },
      { value: 'width', label: getLocaleString('FIT_WIDTH'), icon: IconArrowAutofitWidth },
      { value: 'height', label: getLocaleString('FIT_HEIGHT'), icon: IconArrowAutofitHeight },
    ];
    return x$1` <div class="ControlLabel DefaultZoomMode">
    ${getLocaleString('DEFAULT_ZOOM_MODE')}
    <segmented-control
      .options=${zoomOptions}
      .value=${getSettingsValue('zoomMode')}
      @change=${changeDefaultZoomMode}
      labelPosition="tooltip"
    ></segmented-control>
  </div>`;
  }
  function zoomValue() {
    return x$1`
    <div
      class="${e$2({
        ControlLabel: true,
        zoomValue: true,
        ControlLabelItem: true,
        show: getSettingsValue('zoomMode') === 'percent',
      })}"
    >
      <span>
        ${getLocaleString('DEFAULT_ZOOM')}
        <output
          id="zoomValueVal"
          class="RangeValue"
          for="zoomValue"
        >
          ${getSettingsValue('zoomValue')}%
        </output>
      </span>
      <input
        type="range"
        value="${getSettingsValue('zoomValue')}"
        name="zoomValue"
        id="zoomValue"
        min="5"
        max="200"
        step="5"
        list="zoomValueList"
        @input="${changeDefaultZoomValue}"
      />
      <datalist id="zoomValueList">
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
  `;
  }
  function minZoom() {
    return x$1`
    <div class="ControlLabel minZoom">
      <span>
        ${getLocaleString('MINIMUM_ZOOM')}
        <output
          id="minZoomVal"
          class="RangeValue"
          for="minZoom"
        >
          ${getSettingsValue('minZoom')}%
        </output>
      </span>
      <input
        type="range"
        value="${getSettingsValue('minZoom')}"
        name="minZoom"
        id="minZoom"
        min="25"
        max="100"
        step="5"
        @input="${changeMinZoom}"
        list="minZoomList"
      />
      <datalist id="minZoomList">
        <option value="25">25</option>
        <option value="50">50</option>
        <option value="75">75</option>
        <option value="100">100</option>
      </datalist>
    </div>
  `;
  }
  function zoomStep() {
    return x$1`
    <div class="ControlLabel zoomStep">
      <span>
        ${getLocaleString('ZOOM_STEP')}
        <output
          id="zoomStepVal"
          class="RangeValue"
          for="zoomStep"
        >
          ${getSettingsValue('zoomStep')}%
        </output>
      </span>
      <input
        type="range"
        value="${getSettingsValue('zoomStep')}"
        name="zoomStep"
        id="zoomStep"
        min="10"
        max="50"
        step="5"
        @input="${changeZoomStep}"
        list="zoomStepList"
      />
      <datalist id="zoomStepList">
        <option value="10">10</option>
        <option value="30">30</option>
        <option value="50">50</option>
      </datalist>
    </div>
  `;
  }
  function viewMode() {
    const viewModeOptions = [
      {
        value: 'Vertical',
        label: getLocaleString('VIEW_MODE_VERTICAL'),
        icon: IconArrowAutofitDown,
      },
      {
        value: 'WebComic',
        label: getLocaleString('VIEW_MODE_WEBCOMIC'),
        icon: IconSpacingVertical,
      },
      { value: 'FluidLTR', label: getLocaleString('VIEW_MODE_LEFT'), icon: IconArrowAutofitRight },
      { value: 'FluidRTL', label: getLocaleString('VIEW_MODE_RIGHT'), icon: IconArrowAutofitLeft },
    ];
    return x$1`
    <div class="ControlLabel viewMode">
      ${getLocaleString('DEFAULT_VIEW_MODE')}
      <segmented-control
        .options=${viewModeOptions}
        .value=${getSettingsValue('viewMode')}
        @change=${changeDefaultViewMode}
        labelPosition="tooltip"
      ></segmented-control>
    </div>
  `;
  }
  const SettingsPanelZoom = () =>
    x$1`${defaultZoomMode()} ${zoomValue()} ${minZoom()} ${zoomStep()} ${viewMode()}`;

  const styles$1 =
    '#SettingsPanel {\r\n  color: var(--theme-text-color);\r\n  padding: 10px;\r\n  gap: 5px;\r\n}\r\n\r\n#SettingsPanel fieldset {\r\n  border: 1px solid var(--theme-body-text-color);\r\n  padding: 3px;\r\n  border-radius: 10px;\r\n}\r\n\r\n#SettingsPanel .ControlLabel {\r\n  display: flex;\r\n  flex-flow: row wrap;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 2px;\r\n}\r\n\r\n#SettingsPanel .ControlLabelItem {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\n#SettingsPanel .ControlLabelItem:not(.show) {\r\n  display: none;\r\n}\r\n\r\n#SettingsPanel input[type="range"] {\r\n  width: 100%;\r\n}\r\n\r\n#SettingsPanel .RangeValue {\r\n  display: inline-block;\r\n  color: var(--mov-color-on-loud);\r\n  line-height: 20px;\r\n  text-align: center;\r\n  border-radius: 3px;\r\n  background: var(--mov-color-fill-loud);\r\n  padding: 2px 5px;\r\n  margin-left: 8px;\r\n}\r\n\r\n#SettingsPanel datalist {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  width: 100%;\r\n}\r\n\r\n#SettingsPanel datalist option {\r\n  padding: 0;\r\n  writing-mode: vertical-lr;\r\n}\r\n\r\n#ThemeSelector {\r\n  width: 110px;\r\n}\r\n\r\n#ColorRecommendations {\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: wrap;\r\n  gap: 2px;\r\n}\r\n#Chapter:not(.Vertical) ~ #SettingsPanel .verticalSeparator {\r\n  display: none;\r\n}\r\n\r\n#ColorScheme {\r\n  padding: 5px;\r\n  min-height: 28px;\r\n  min-width: 28px;\r\n}\r\n\r\n#ResetSettings,\r\n#ResetSettings::part(base) {\r\n  width: 100%;\r\n}\r\n';

  var __getOwnPropDesc$1 = Object.getOwnPropertyDescriptor;
  var __decorateClass$1 = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$1(target, key) : target;
    for (var i = decorators.length - 1, decorator; i >= 0; i--)
      if ((decorator = decorators[i])) result = decorator(result) || result;
    return result;
  };
  let SettingsPanel = class extends i$3 {
    // protected createRenderRoot() {
    //   return this; // No shadow DOM
    // }
    render() {
      return x$1`
      <wa-drawer
        id="SettingsPanel"
        ?open=${getAppStateValue('panel') === 'settings'}
        @close=${buttonPanelsClose}
        placement="start"
        class="${getAppStateValue('device')}"
      >
        <h2 slot="label">${getLocaleString('SETTINGS')}</h2>
        <wa-button
          id="ResetSettings"
          @click="${resetSettings}"
          title="${getLocaleString('BUTTON_RESET_SETTINGS')}"
        >
          <wa-icon
            name="IconSettingsOff"
            size="20px"
            slot="start"
          ></wa-icon>
          ${getLocaleString('BUTTON_RESET_SETTINGS')}
        </wa-button>
        <div class="content">
          <fieldset id="SettingsPanelGeneral">
            <legend>${getLocaleString('GENERAL')}</legend>
            ${SettingsPanelGeneral()}
          </fieldset>
          <fieldset id="SettingsPanelTheme">
            <legend>${getLocaleString('THEME')}</legend>
            ${theme()}
          </fieldset>
          <fieldset id="SettingsPanelLoading">
            <legend>${getLocaleString('LOADING')}</legend>
            ${SettingsPanelLoading()}
          </fieldset>
          <fieldset id="SettingsPanelZoom">
            <legend>${getLocaleString('ZOOM')}</legend>
            ${SettingsPanelZoom()}
          </fieldset>
          <fieldset id="SettingsPanelOthers">
            <legend>${getLocaleString('OTHERS')}</legend>
            ${SettingsPanelOthers()}
          </fieldset>
        </div>
      </wa-drawer>
    `;
    }
  };
  SettingsPanel.styles = [
    i$5`
      #SettingsPanel.mobile #SettingsPanelZoom,
      #SettingsPanel.mobile .fitIfOversize,
      #SettingsPanel.mobile .showThumbnails,
      #SettingsPanel.mobile .lazyLoadImages,
      #SettingsPanel.mobile .downloadZip,
      #SettingsPanel.mobile .minZoom,
      #SettingsPanel.mobile .zoomStep,
      #SettingsPanel.mobile .headerType,
      #SettingsPanel.mobile .navbarType,
      #SettingsPanel.mobile .autoScroll {
        display: none;
      }
    `,
    r$5(styles$1),
  ];
  SettingsPanel = __decorateClass$1(
    [t$1('settings-panel'), libExports.useStores(settings$1, locale, appState)],
    SettingsPanel,
  );

  // src/utilities/autoloader.ts
  new MutationObserver(mutations => {
    for (const { addedNodes } of mutations) {
      for (const node of addedNodes) {
        if (node.nodeType === Node.ELEMENT_NODE) {
          discover(node);
        }
      }
    }
  });
  async function discover(root) {
    const rootTagName = root instanceof Element ? root.tagName.toLowerCase() : '';
    const rootIsWebAwesomeComponent = rootTagName?.startsWith('wa-');
    const tags = [...root.querySelectorAll(':not(:defined)')]
      .map(el => el.tagName.toLowerCase())
      .filter(tag => tag.startsWith('wa-'));
    if (rootIsWebAwesomeComponent && !customElements.get(rootTagName)) {
      tags.push(rootTagName);
    }
    const tagsToRegister = [...new Set(tags)];
    const imports = await Promise.allSettled(tagsToRegister.map(tagName => register(tagName)));
    for (const imp of imports) {
      if (imp.status === 'rejected') {
        console.warn(imp.reason);
      }
    }
    await new Promise(requestAnimationFrame);
    root.dispatchEvent(
      new CustomEvent('wa-discovery-complete', {
        bubbles: false,
        cancelable: false,
        composed: true,
      }),
    );
  }
  function register(tagName) {
    if (customElements.get(tagName)) {
      return Promise.resolve();
    }
    const tagWithoutPrefix = tagName.replace(/^wa-/i, '');
    const path = getBasePath(`components/${tagWithoutPrefix}/${tagWithoutPrefix}.js`);
    return new Promise((resolve, reject) => {
      import(path)
        .then(() => resolve())
        .catch(() => reject(new Error(`Unable to autoload <${tagName}> from ${path}`)));
    });
  }

  const tablerResolver = name =>
    `https://cdn.jsdelivr.net/npm/@tabler/icons/icons/${toKebabCase(name)}.svg`;
  registerIconLibrary('default', {
    resolver: (name, family) => {
      const customIcon =
        family === 'unstyled' ? rawIcons[toPascalCase(name)] : styledIcons$1[toPascalCase(name)];
      if (customIcon) {
        return `data:image/svg+xml,${encodeURIComponent(customIcon)}`;
      }
      return tablerResolver(name);
    },
    mutator: svg => {
      svg.style.fill = 'none';
      svg.setAttribute('stroke', 'currentColor');
    },
  });

  class IfDirective extends i$6 {
    /**
     * Renders a template if a condition is true, otherwise renders nothing.
     * @param condition The boolean condition to evaluate.
     * @param template A function that returns the TemplateResult to render if the condition is true.
     */
    render(condition, template) {
      return condition ? template : E;
    }
  }
  const ifTrue = e$9(IfDirective);

  function computeCurrentPage() {
    const pages = getAppStateValue('images');
    if (!pages) return null;
    const viewMode = getSettingsValue('viewMode');
    const isHorizontal = viewMode === 'FluidLTR' || viewMode === 'FluidRTL';
    const isRTL = viewMode === 'FluidRTL';
    const viewportCenterY = window.innerHeight / 2;
    const viewportCenterX = window.innerWidth / 2;
    let best = null;
    for (const index in pages) {
      const image = pages[index].ref?.value;
      if (!image) continue;
      const rect = image?.getBoundingClientRect();
      const edge = isHorizontal ? (isRTL ? rect.right : rect.left) : rect.top;
      const passed = isHorizontal ? edge <= viewportCenterX : edge <= viewportCenterY;
      if (passed) {
        if (!best || edge > best.edge) {
          best = { index: parseInt(index, 10), edge };
        }
      }
    }
    if (!best) {
      return getAppStateValue('manga')?.begin ?? 1;
    }
    return best.index;
  }
  function updateCurrentPage() {
    const page = computeCurrentPage();
    if (page == null) return;
    if (getAppStateValue('currentPage') !== page) {
      setAppStateValue('currentPage', page);
    }
  }
  function attachListeners() {
    const handler = _.throttle(() => {
      requestAnimationFrame(updateCurrentPage);
    }, 100);
    window.addEventListener('scroll', handler, { passive: true });
    window.addEventListener('resize', handler);
    getAppStateValue('chapter').value?.addEventListener('scroll', handler, {
      passive: true,
    });
    requestAnimationFrame(updateCurrentPage);
  }
  function trackCurrentPage() {
    if (!getAppStateValue('chapter').value) {
      setTimeout(trackCurrentPage, 50);
      return;
    }
    attachListeners();
  }

  function events() {
    keybindings();
    window.addEventListener('resize', () => {
      setAppStateValue('device', getDevice());
    });
    autoscroll();
    trackCurrentPage();
  }

  async function fetchText(url, format) {
    return new Promise(resolve => {
      logScript('Fetching page: ', url);
      fetch(url)
        .then(async response =>
          // When the page is loaded convert it to text
          response.text(),
        )
        .then(html => {
          const parser = new DOMParser();
          const doc = parser.parseFromString(html, format);
          resolve(doc);
        })
        .catch(err => {
          logScript('Failed to fetch page: ', err);
        });
    });
  }
  async function fetchHtml(url) {
    return fetchText(url, 'text/html');
  }
  async function getElementAttribute(url, selector, attribute) {
    return fetchHtml(url).then(doc => doc.querySelector(selector)?.getAttribute(attribute));
  }

  const objectURLRegex = /^blob:(.+?)\/(.+)$/;
  function isBase64ImageUrl(imageUrl) {
    const base64Pattern = /^data:image\/(png|jpg|jpeg|gif|svg)/;
    return base64Pattern.test(imageUrl);
  }
  function isObjectURL(url) {
    return objectURLRegex.test(url);
  }

  function normalizeUrl(url) {
    if (url) {
      let uri = url.trim();
      if (uri.startsWith('//')) {
        uri = `https:${uri}`;
      }
      return uri;
    }
    return '';
  }
  async function addImg(manga, index, imageSrc, position = 0) {
    setTimeout(
      async () => {
        let src = normalizeUrl(imageSrc);
        if (!isObjectURL(src) && !isBase64ImageUrl(src) && manga.fetchOptions) {
          src = await fetch(src, manga.fetchOptions)
            .then(resp => resp.blob())
            .then(blob => blobUtil.blobToDataURL(blob));
        }
        changeAppStateValue('images', images => {
          return { ...images, [index]: { ...images?.[index], src } };
        });
        logScriptVerbose('Loaded Image:', index, 'Source:', src);
      },
      (manga.timer ?? getSettingsValue('throttlePageLoad')) * position,
    );
    if (manga.pages === index) removeURLBookmark();
  }
  async function addPage(manga, index, pageUrl, position = 0) {
    setTimeout(
      async () => {
        const imageSrc = await getElementAttribute(pageUrl, manga.img, manga.lazyAttr ?? 'src');
        if (imageSrc) {
          const src = normalizeUrl(imageSrc);
          changeAppStateValue('images', images => {
            return { ...images, [index]: { src } };
          });
          logScript(`Loaded Page: `, index, ' Source: ', src);
        }
      },
      (manga.timer ?? getSettingsValue('throttlePageLoad')) * position,
    );
    if (manga.pages === position) removeURLBookmark();
  }
  function loadMangaPages(begin, manga) {
    sequence(manga.pages, begin)
      .filter(
        (_index, position) =>
          !(manga.lazy ?? getSettingsValue('lazyLoadImages')) ||
          position <= getSettingsValue('lazyStart'),
      )
      .forEach((index, position) => {
        addPage(manga, index, manga.listPages[index - 1], position);
      });
  }
  function loadMangaImages(begin, manga) {
    sequence(manga.pages, begin)
      .filter(
        (_index, position) =>
          !(manga.lazy ?? getSettingsValue('lazyLoadImages')) ||
          position <= getSettingsValue('lazyStart'),
      )
      .forEach((index, position) => {
        addImg(manga, index, manga.listImages[index - 1], position);
      });
  }
  async function loadImages() {
    await waitForFunc(() => getAppStateValue('manga') !== void 0);
    const manga = getAppStateValue('manga');
    const begin = manga.begin ?? 1;
    logScriptVerbose('Loading Images');
    logScriptVerbose(
      `Intervals: ${manga.timer ?? getSettingsValue('throttlePageLoad') ?? 'Default(1000)'}`,
    );
    logScriptVerbose(
      `Lazy: ${manga.lazy ?? getSettingsValue('lazyLoadImages')}, Starting from: ${getSettingsValue('lazyStart')}`,
    );
    applyZoom();
    if (isImagesManga(manga)) {
      logScriptVerbose('Method: Images:', manga.listImages);
      loadMangaImages(begin, manga);
    } else if (isPagesManga(manga)) {
      logScriptVerbose('Method: Pages:', manga.listPages);
      loadMangaPages(begin, manga);
    } else if (isBruteforceManga(manga)) {
      logScriptVerbose('Method: Brute Force');
      manga.bruteForce({
        begin,
        addImg,
        loadImages(list) {
          loadMangaImages(begin, { ...manga, listImages: list });
        },
        loadPages(list, img, lazyAttr) {
          loadMangaPages(begin, {
            ...manga,
            listPages: list,
            img,
            lazyAttr,
          });
        },
        wait: getSettingsValue('throttlePageLoad'),
      });
    } else {
      logScript('No Loading Method Found');
    }
    appState.listen((value, oldValue, changedKey) => {
      if (changedKey === 'currentPage' && value.currentPage > oldValue.currentPage) {
        for (let i = value.currentPage; i < value.currentPage + 5; i++) {
          if (value.images?.[i]?.src !== void 0) continue;
          if (isImagesManga(manga)) {
            addImg(manga, i, manga.listImages[i - 1]);
          } else if (isPagesManga(manga)) {
            addPage(manga, i, manga.listPages[i - 1]);
          }
        }
      }
    });
  }

  function invalidateImageCache(src, repeat) {
    const url = src.replace(/[?&]forceReload=\d+$/, '');
    const symbol = !url.includes('?') ? '?' : '&';
    return `${url + symbol}forceReload=${repeat}`;
  }
  function getRepeatValue(src) {
    let repeat = 1;
    const cache = src?.match(/forceReload=(\d+)$/);
    if (cache?.at(1)) {
      repeat = parseInt(cache[1], 10) + 1;
    }
    return repeat;
  }
  function reloadImage(index, img) {
    logScript(`Reloading Page ${index}`, img);
    const src = getAppStateValue('images')?.[index]?.src;
    if (!src) return;
    const repeat = getRepeatValue(src);
    if (repeat > getSettingsValue('maxReload')) return;
    img?.removeAttribute('src');
    if (isBase64ImageUrl(src) || isObjectURL(src)) {
      img?.setAttribute('src', src);
    } else {
      img?.setAttribute('src', invalidateImageCache(src, repeat));
    }
  }
  function buttonReloadPage(event) {
    const button = event.currentTarget;
    const index = parseInt(button.value, 10);
    const img = getAppStateValue('images')?.[index]?.ref?.value;
    if (img) {
      reloadImage(index, img);
    }
  }
  function buttonHidePage(event) {
    const button = event.currentTarget;
    const index = parseInt(button.value, 10);
    changeImage(index, image => ({ hide: !image.hide }));
  }
  function imageLoaded(event) {
    const img = event.currentTarget;
    img.classList.add('imgLoaded');
    img.classList.remove('imgBroken');
    const index = parseInt(img.id.replace('PageImg', ''), 10);
    changeImage(index, _image =>
      calculatePageZoom({
        naturalWidth: img.naturalWidth,
        naturalHeight: img.naturalHeight,
      }),
    );
    try {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (ctx) {
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        ctx.drawImage(img, 0, 0);
        canvas.toBlob(blob => {
          if (!blob) return;
          changeImage(index, _image => ({ blob }));
        }, 'image/png');
      }
    } catch (e) {
      console.error('Failed to transform image to blob for page', index, e);
    }
    changeAppStateValue('loaded', n => n + 1);
    const loaded = getAppStateValue('loaded') ?? 0;
    const total =
      (getAppStateValue('manga')?.pages ?? 1) - ((getAppStateValue('manga')?.begin ?? 1) - 1);
    const percentage = loaded / total;
    NProgress.configure({
      showSpinner: false,
    }).set(percentage);
    if (loaded === total) {
      logScript('Images Loading Complete');
      if (getSettingsValue('downloadZip')) buttonStartDownload();
    }
  }
  function imageLoadError(event) {
    const img = event.currentTarget;
    if (isEmpty(img.getAttribute('src'))) return;
    img.classList.add('imgBroken');
    const index = parseInt(img.id.replace('PageImg', ''), 10);
    reloadImage(index, img);
  }

  function buttonZoomIn(event) {
    const button = event.currentTarget;
    const index = parseInt(button.value, 10);
    const images = getAppStateValue('images');
    const img = getAppStateValue('images')?.[index];
    if (img?.naturalWidth) {
      setAppStateValue('images', {
        ...images,
        [index]: {
          ...img,
          width: (img?.width || img?.naturalWidth) * (1 + getSettingsValue('zoomStep') / 100),
          height: void 0,
        },
      });
    }
  }
  function buttonZoomOut(event) {
    const button = event.currentTarget;
    const index = parseInt(button.value, 10);
    const images = getAppStateValue('images');
    const img = getAppStateValue('images')?.[index];
    if (img?.naturalWidth) {
      setAppStateValue('images', {
        ...images,
        [index]: {
          ...img,
          width: (img?.width || img?.naturalWidth) * (1 - getSettingsValue('zoomStep') / 100),
          height: void 0,
        },
      });
    }
  }
  function buttonRestoreZoom(event) {
    const button = event.currentTarget;
    const index = parseInt(button.value, 10);
    const images = getAppStateValue('images');
    const img = getAppStateValue('images')?.[index];
    if (img) {
      setAppStateValue('images', {
        ...images,
        [index]: {
          ...img,
          width: void 0,
          height: void 0,
        },
      });
    }
  }
  function buttonZoomWidth(event) {
    const button = event.currentTarget;
    const index = parseInt(button.value, 10);
    const images = getAppStateValue('images');
    const img = getAppStateValue('images')?.[index];
    if (img) {
      setAppStateValue('images', {
        ...images,
        [index]: {
          ...img,
          width:
            window.innerWidth +
            (getSettingsValue('navbar') === 'left' || getSettingsValue('navbar') === 'right'
              ? -navbarSize
              : 0),
          height: void 0,
        },
      });
    }
  }
  function buttonZoomHeight(event) {
    const button = event.currentTarget;
    const index = parseInt(button.value, 10);
    const images = getAppStateValue('images');
    const img = getAppStateValue('images')?.[index];
    if (img) {
      setAppStateValue('images', {
        ...images,
        [index]: {
          ...img,
          width: void 0,
          height: window.innerHeight + (getSettingsValue('navbar') === 'bottom' ? -navbarSize : 0),
        },
      });
    }
  }

  function getImageStyle(index) {
    const image = getAppStateValue('images')?.[index];
    return {
      width: image?.width ? `${image.width}px` : 'auto',
      height: image?.height ? `${image.height}px` : 'auto',
      'max-height': getSettingsValue('viewMode').startsWith('Fluid')
        ? `${window.innerHeight + (getSettingsValue('navbar') === 'bottom' ? -navbarSize : 0)}px`
        : void 0,
      'min-width': `${getSettingsValue('minZoom')}vw`,
    };
  }
  const listPages = (times, begin) =>
    sequence(times, begin).map(index => {
      if (!getAppStateValue('images')?.[index]?.ref) {
        changeImage(index, _image => ({ ref: e$8() }));
      }
      return x$1`
      <div
        id="Page${index}"
        class="${e$2({
          MangaPage: true,
          hide: !!getAppStateValue('images')?.[index].hide,
        })}"
      >
        <div class="PageFunctions">
          <button
            class="Bookmark PageButton"
            title="${getLocaleString('BOOKMARK')}"
            @click=${buttonBookmark}
            value="${index}"
          >
            ${isBookmarked() ? IconBookmarkOff : IconBookmark}
          </button>
          <button
            class="ZoomIn PageButton"
            title="${getLocaleString('ZOOM_IN')}"
            @click=${buttonZoomIn}
            value="${index}"
          >
            ${IconZoomIn}
          </button>
          <button
            class="ZoomRestore PageButton"
            title="${getLocaleString('ZOOM_RESET')}"
            @click=${buttonRestoreZoom}
            value="${index}"
          >
            ${IconZoomCancel}
          </button>
          <button
            class="ZoomOut PageButton"
            title="${getLocaleString('ZOOM_OUT')}"
            @click=${buttonZoomOut}
            value="${index}"
          >
            ${IconZoomOut}
          </button>
          <button
            class="ZoomWidth PageButton"
            title="${getLocaleString('ZOOM_WIDTH')}"
            @click=${buttonZoomWidth}
            value="${index}"
          >
            ${IconArrowAutofitWidth}
          </button>
          <button
            class="ZoomHeight PageButton"
            title="${getLocaleString('ZOOM_HEIGHT')}"
            @click=${buttonZoomHeight}
            value="${index}"
          >
            ${IconArrowAutofitHeight}
          </button>
          <button
            class="Hide PageButton"
            title="${getLocaleString('HIDE')}"
            @click=${buttonHidePage}
            value="${index}"
          >
            ${getAppStateValue('images')?.[index].hide ? IconEye : IconEyeOff}
          </button>
          <button
            class="Reload PageButton"
            title="${getLocaleString('RELOAD')}"
            @click=${buttonReloadPage}
            value="${index}"
          >
            ${IconRefresh}
          </button>
          <span class="PageIndex">${index}</span>
        </div>
        <div class="PageContent">
          <img
            id="PageImg${index}"
            alt="Page ${index}"
            class="PageImg"
            src=${getAppStateValue('images')?.[index]?.src ?? E}
            style="${o$2(getImageStyle(index))}"
            @load=${imageLoaded}
            @error=${imageLoadError}
            ${n$5(getAppStateValue('images')?.[index].ref)}
          />
        </div>
      </div>
      <div class="separator">
        [ ${index === times ? getLocaleString('END') : `${index} / ${times}`} ]
      </div>
    `;
    });

  const Reader = manga => x$1`
  <main
    id="Chapter"
    ${n$5(getAppStateValue('chapter'))}
    class="${e$2({
      fitWidthIfOversize: getSettingsValue('fitWidthIfOversize'),
      [getSettingsValue('viewMode')]: true,
      separator: getSettingsValue('viewMode') === 'Vertical',
    })}"
    @wheel=${e => {
      if (getSettingsValue('viewMode') === 'FluidLTR') transformScrollToHorizontal(e);
      else if (getSettingsValue('viewMode') === 'FluidRTL') transformScrollToHorizontalReverse(e);
    }}
  >
    ${listPages(manga.pages, manga.begin ?? 0)}
  </main>
`;

  const styles =
    ':root:not(.light, .dark) {\r\n  --theme-body-background: #25262b;\r\n  --theme-body-text-color: #c1c2c5;\r\n  --theme-text-color: #c1c2c5;\r\n  --theme-primary-color: #1a1b1e;\r\n  --theme-primary-text-color: #c1c2c5;\r\n  --theme-background-color: #25262b;\r\n  --theme-hightlight-color: #2c2e33;\r\n  --theme-border-color: #373a40;\r\n  --theme-secondary-color: #2c2e33;\r\n  --theme-secondary-text-color: #c1c2c5;\r\n}\r\n\r\n:host {\r\n  box-sizing: border-box;\r\n}\r\n\r\n#MangaOnlineViewer {\r\n  text-decoration: none;\r\n  color: var(--theme-body-text-color);\r\n  background-color: var(--theme-body-background);\r\n  box-sizing: border-box;\r\n  min-height: 100vh;\r\n}\r\n\r\n#Chapter {\r\n  display: grid;\r\n  grid-template-columns: repeat(1, 1fr);\r\n  min-width: 225px;\r\n  box-sizing: border-box;\r\n}\r\n\r\n#Chapter.Vertical:has(+ #Navigation:not(.disabled)),\r\n#Chapter.WebComic:has(+ #Navigation:not(.disabled)) {\r\n  padding-bottom: 31px;\r\n}\r\n\r\n#Chapter.Vertical .PageContent {\r\n  margin-bottom: 8px;\r\n  margin-top: 8px;\r\n}\r\n\r\n.closeButton {\r\n  width: fit-content;\r\n  height: fit-content;\r\n  position: absolute;\r\n  right: 10px;\r\n  top: 10px;\r\n}\r\n\r\n.overlay {\r\n  position: fixed;\r\n  display: none;\r\n  width: 100%;\r\n  height: 100%;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n  z-index: 950;\r\n  cursor: pointer;\r\n}\r\n\r\n.overlay.visible {\r\n  display: block;\r\n}\r\n\r\nselect {\r\n  height: 20px;\r\n  margin: 2px;\r\n}\r\n\r\n:not(.FluidRTL, .FluidLTR).fitWidthIfOversize .PageContent .PageImg {\r\n  max-width: 100%;\r\n  object-fit: contain;\r\n}\r\n\r\n.hideControls .PageFunctions {\r\n  visibility: hidden;\r\n}\r\n';

  const animation =
    '@-webkit-keyframes spin {\r\n  to {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n@keyframes spin {\r\n  to {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n@-webkit-keyframes spin-reverse {\r\n  0% {\r\n    transform: rotate(360deg);\r\n  }\r\n\r\n  to {\r\n    transform: rotate(0);\r\n  }\r\n}\r\n\r\n@keyframes spin-reverse {\r\n  0% {\r\n    transform: rotate(360deg);\r\n  }\r\n\r\n  to {\r\n    transform: rotate(0);\r\n  }\r\n}\r\n\r\n.icon-tabler-loader-2,\r\n.animate-spin {\r\n  -webkit-animation: spin 1s linear infinite;\r\n  animation: spin 1s linear infinite;\r\n}\r\n\r\n.animate-spin-reverse {\r\n  -webkit-animation: spin-reverse 1s linear infinite;\r\n  animation: spin-reverse 1s linear infinite;\r\n}\r\n';

  const fluid =
    '#Chapter.FluidLTR,\r\n#Chapter.FluidRTL {\r\n  display: flex;\r\n  overflow-x: auto;\r\n  min-width: auto;\r\n\r\n  .ZoomWidth {\r\n    display: none;\r\n  }\r\n\r\n  .PageImg {\r\n    min-width: unset;\r\n  }\r\n\r\n  .MangaPage {\r\n    width: initial;\r\n    min-width: fit-content;\r\n    position: relative;\r\n  }\r\n\r\n  .MangaPage.DoublePage {\r\n    grid-column: span 2;\r\n  }\r\n}\r\n\r\n#Chapter.FluidLTR {\r\n  flex-direction: row;\r\n\r\n  .MangaPage .PageFunctions {\r\n    right: auto;\r\n    left: 0;\r\n    direction: rtl;\r\n  }\r\n}\r\n\r\n#Chapter.FluidRTL {\r\n  flex-direction: row-reverse;\r\n}\r\n';

  const page =
    '.PageButton .icon-tabler {\r\n  height: 1rem;\r\n  width: 1rem;\r\n  vertical-align: sub;\r\n}\r\n\r\n.PageButton,\r\n.PageButton:visited,\r\n.PageButton:link {\r\n  cursor: pointer;\r\n  border-radius: 5px;\r\n  border-width: 1px;\r\n  border-style: solid;\r\n  padding: 2px;\r\n  min-height: 32px;\r\n  color: var(--mov-color-on-loud);\r\n  background-color: var(--mov-color-fill-loud);\r\n  border-color: var(--theme-border-color);\r\n  text-decoration: none;\r\n}\r\n\r\n.PageButton:active,\r\n.PageButton:hover {\r\n  opacity: 0.8;\r\n}\r\n\r\n.PageButton[selected] {\r\n  background-color: var(--mov-color-fill-normal);\r\n  color: var(--mov-color-on-normal);\r\n  border: 1px solid var(--theme-border-color);\r\n}\r\n\r\n.PageButton.hidden {\r\n  display: none;\r\n}\r\n\r\n.MangaPage {\r\n  width: 100%;\r\n  display: inline-block;\r\n  text-align: center;\r\n  line-height: 0;\r\n  min-height: 22px;\r\n  min-width: 100%;\r\n}\r\n\r\n.PageContent {\r\n  text-align: center;\r\n  display: inline-block;\r\n  overflow-x: auto;\r\n  max-width: 100%;\r\n  transition: all 0.3s ease-in-out;\r\n  height: 100%;\r\n  overflow-y: hidden;\r\n}\r\n\r\n.MangaPage.hide .PageContent {\r\n  height: 0;\r\n}\r\n\r\n.PageContent .PageImg[src=""],\r\n.PageContent .PageImg:not([src]),\r\n.PageContent .PageImg.imgBroken {\r\n  width: 40vw;\r\n  height: 80vh;\r\n  display: inline-block;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: 20%;\r\n  background-color: var(--theme-hightlight-color);\r\n  position: relative;\r\n  text-align: center;\r\n  line-height: 80vh;\r\n  vertical-align: top;\r\n  color: var(--theme-text-color);\r\n  font-size: 1rem;\r\n  min-width: 40vw;\r\n  min-height: 50vh;\r\n  max-width: 100%;\r\n  max-height: 100%;\r\n  margin: 0;\r\n}\r\n\r\n.PageContent .PageImg[src=""]:before,\r\n.PageContent .PageImg:not([src]):before,\r\n.PageContent .PageImg.imgBroken:before {\r\n  content: attr(alt);\r\n  position: absolute;\r\n  top: 40%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  white-space: pre-wrap;\r\n  text-align: center;\r\n  color: var(--theme-text-color);\r\n  font-size: 1rem;\r\n}\r\n\r\n.PageFunctions {\r\n  font-family: monospace;\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  align-items: center;\r\n  margin: 0;\r\n  padding: 0;\r\n  gap: 3px;\r\n  position: absolute;\r\n  right: 0;\r\n}\r\n\r\n.PageFunctions > .PageIndex {\r\n  background-color: var(--mov-color-fill-loud);\r\n  color: var(--mov-color-on-loud);\r\n  min-width: 20px;\r\n  text-align: center;\r\n  display: inline-block;\r\n  padding: 3px 5px;\r\n  line-height: 1rem;\r\n  border-radius: 5px;\r\n}\r\n\r\n.PageFunctions .PageButton {\r\n  padding: 3px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin: 0;\r\n  border-width: 0;\r\n  min-height: auto;\r\n  opacity: 0.5;\r\n}\r\n\r\n.PageFunctions:hover .PageButton {\r\n  opacity: 1;\r\n}\r\n\r\n.PageFunctions .PageButton:hover {\r\n  opacity: 0.9;\r\n}\r\n\r\n#Chapter.Vertical .separator {\r\n  display: flex;\r\n  align-items: center;\r\n  text-align: center;\r\n  font-style: italic;\r\n}\r\n\r\n#Chapter.Vertical .separator::before,\r\n#Chapter.Vertical .separator::after {\r\n  content: "";\r\n  flex: 1;\r\n  border-bottom: 1px solid var(--theme-text-color);\r\n}\r\n\r\n#Chapter.Vertical.separator:not(:empty)::before {\r\n  margin-right: 0.25em;\r\n}\r\n\r\n#Chapter.Vertical.separator:not(:empty)::after {\r\n  margin-left: 0.25em;\r\n}\r\n\r\n#Chapter:not(.separator) .separator,\r\n#Chapter:not(.Vertical) .separator {\r\n  display: none;\r\n}\r\n';

  const normalize =
    '/*  Simple Normalizer */\r\nhtml {\r\n  font-size: 100%;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;\r\n  font-size: 14px;\r\n  line-height: 20px;\r\n  color: var(--theme-body-text-color);\r\n  background-color: var(--theme-body-background);\r\n  padding: 0;\r\n}\r\n\r\na,\r\na:link,\r\na:visited,\r\na:active,\r\na:focus {\r\n  color: var(--theme-body-text-color);\r\n  text-decoration: none;\r\n}\r\n\r\nimg {\r\n  height: auto;\r\n  vertical-align: middle;\r\n  border: 0 none;\r\n}\r\n';

  const cssStyles = css`
    .PageContent .PageImg[src=''],
    .PageContent .PageImg:not([src]) {
      background-image: url('${svgToUrl(IconPhoto$1)}');
    }

    .PageContent .PageImg.imgBroken {
      background-image: url('${svgToUrl(IconPhotoOff$1)}');
    }

    ${normalize}
    ${styles}
  ${page}
  ${fluid}
  ${media}
  ${animation}
  `;

  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __decorateClass = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
    for (var i = decorators.length - 1, decorator; i >= 0; i--)
      if ((decorator = decorators[i])) result = decorator(result) || result;
    return result;
  };
  let App = class extends i$3 {
    /**
     * LitElement lifecycle hook, called after the component's first render.
     * It initializes global event listeners and registers the component's `shadowRoot`
     * in the application state, making it accessible to other parts of the application
     * that may need to interact with the DOM.
     */
    firstUpdated() {
      events();
      loadImages();
      document.documentElement.classList.add(
        getSettingsValue('colorScheme'),
        `wa-${getSettingsValue('colorScheme')}`,
      );
    }
    /**
     * Renders the application's UI.
     * This includes applying the current theme and rendering the header, reader,
     * navigation bar, overlay, and all dialog panels.
     * @returns The rendered template.
     */
    render() {
      const manga = getAppStateValue('manga');
      if (!manga) return x$1``;
      return x$1`
      <style>
        ${themesCSS()}
      </style>
      <div
        id="MangaOnlineViewer"
        class="${e$2({
          [getSettingsValue('colorScheme')]: true,
          hideControls: getSettingsValue('hidePageControls'),
          bookmarked: !!isBookmarked(),
          [getAppStateValue('device')]: true,
        })}"
        style="${o$2({
          [`padding-${getSettingsValue('navbar')}`]: `${navbarSize}px`,
        })}"
        .locale="${getSettingsValue('locale')}"
      >
        <reader-header .manga=${manga}></reader-header>
        ${Reader(manga)}
        ${ifTrue(
          getSettingsValue('navbar') !== 'disabled',
          x$1`<navbar-thumbnails .mode=${getSettingsValue('navbar')}></navbar-thumbnails>`,
        )}
        ${ifTrue(
          getSettingsValue('pagination'),
          x$1` <manga-pagination
            .startPage=${manga.begin}
            .totalPages=${manga.pages}
            .currentPage=${getAppStateValue('currentPage')}
            .next=${manga.next}
            .prev=${manga.prev}
          ></manga-pagination>`,
        )}
        <comments-panel></comments-panel>
        <keybindings-panel></keybindings-panel>
        <bookmark-panel></bookmark-panel>
        <settings-panel></settings-panel>
      </div>
    `;
    }
  };
  App.styles = [i$5``, r$5(cssStyles)];
  App = __decorateClass(
    [t$1('manga-online-viewer'), libExports.useStores(settings$1, locale, appState)],
    App,
  );

  function display(manga) {
    console.warn('Running Lit-ts');
    cleanUpElement(document.documentElement, document.head, document.body);
    window.scrollTo(0, 0);
    logScriptVerbose(`Page Cleaned Up`);
    document.head.innerHTML = head(manga);
    document.body.innerHTML = `<manga-online-viewer></manga-online-viewer>`;
    setAppStateValue('manga', manga);
  }

  async function captureComments$1() {
    if (!getSettingsValue('enableComments')) return null;
    let comments = document.querySelector('#disqus_thread, #fb-comments');
    if (comments) {
      logScript(`Waiting to Comments to load`, comments);
      window.scrollTo(0, document.body.scrollHeight);
      await waitWithTimeout(
        waitForFunc(() => {
          comments = document.querySelector('#disqus_thread, #fb-comments');
          const iframe = comments?.querySelector('iframe:not(#indicator-north, #indicator-south)');
          return (
            iframe?.contentWindow?.document.readyState === 'complete' &&
            !!iframe?.contentWindow?.document?.body?.textContent?.length
          );
        }),
      );
      if (comments.children.length) {
        logScript(`Got Comments`, comments);
      } else {
        logScript(`Timeout Comments`);
      }
    }
    window.scrollTo(0, 0);
    return comments;
  }
  async function viewer(manga) {
    if (manga.before !== void 0) {
      logScriptVerbose(`Executing Preparation`);
      await manga.before(manga.begin ?? 0);
    }
    if (getSettingsValue('enableComments') && !manga.comments) {
      manga.comments = await captureComments$1();
    }
    setTimeout(() => {
      try {
        display(manga);
      } catch (e) {
        logScript(e);
      }
    }, 50);
  }

  const fileTypes = [
    'image/apng',
    'image/bmp',
    'image/gif',
    'image/jpeg',
    'image/pjpeg',
    'image/png',
    'image/svg+xml',
    'image/tiff',
    'image/webp',
    'image/x-icon',
  ];
  const fileImageExt = /.(png|jpg|jpeg|gif|bmp|webp)$/i;
  const orderFiles = (a, b) =>
    a.localeCompare(b, navigator.languages[0] || navigator.language, {
      numeric: true,
      ignorePunctuation: true,
    });
  function validFileType(file) {
    return fileTypes.includes(file.type);
  }
  const getImageBlob = content => {
    const buffer = new Uint8Array(content);
    const blob = new Blob([buffer.buffer]);
    return URL.createObjectURL(blob);
  };
  async function loadZipFile(filePath) {
    const zip = await JSZip.loadAsync(filePath);
    const files = zip
      .filter((_, file) => !file.dir && fileImageExt.test(file.name))
      .sort((a, b) => orderFiles(a.name, b.name));
    logScript('Files in zip:', zip.files);
    return Promise.all(files.map(file => file.async('arraybuffer').then(getImageBlob)));
  }
  function displayUploadedFiles(title, listImages) {
    viewer({
      title,
      series: '?reload',
      pages: listImages.length,
      begin: 1,
      prev: '#',
      next: '#',
      lazy: false,
      listImages,
    }).then(() => logScript('Page loaded'));
  }
  async function loadMangaFromZip(zipFile) {
    const listImages = await loadZipFile(zipFile);
    displayUploadedFiles(typeof zipFile === 'string' ? zipFile : zipFile.name, listImages);
  }
  function openFileImages(evt) {
    const input = evt.target;
    const files = Array.from(input.files)
      .filter(validFileType)
      .sort((a, b) => orderFiles(a.webkitRelativePath || a.name, b.webkitRelativePath || b.name));
    logScript(
      'Local Files: ',
      files,
      files.map(f => f.webkitRelativePath || f.name),
    );
    if (input.files?.[0]) {
      displayUploadedFiles(
        input.files[0].webkitRelativePath.split('/')[0] || 'Local Images',
        files.map(URL.createObjectURL),
      );
    }
  }
  function allowUpload() {
    if (localhost.url.test(window.location.href)) {
      if (document.querySelector('#MangaOnlineViewer, #LocalTest')) {
        document.querySelector('#LocalTest')?.setAttribute('style', 'display:none');
        document.querySelector('#file')?.addEventListener('change', evt => {
          const input = evt.target;
          if (input.files?.[0]) loadMangaFromZip(input.files[0]);
        });
        document.querySelector('#folder')?.addEventListener('change', openFileImages);
        document.querySelector('#images')?.addEventListener('change', openFileImages);
        logScript(`Waiting for zip/images upload`);
      }
      return true;
    }
    return false;
  }

  function validateMin(valBegin, endPage, rs) {
    let val = valBegin;
    if (Number.isNaN(val) || val < rs.min()) {
      val = rs.min();
    } else if (val > rs.max()) {
      val = rs.max();
    } else if (val > endPage) {
      val = endPage;
    }
    return val;
  }
  function validateMax(valEnd, beginPage, rs) {
    let val = valEnd;
    if (Number.isNaN(val) || val > rs.max()) {
      val = rs.max();
    } else if (val < rs.min()) {
      val = rs.min();
    } else if (val < beginPage) {
      val = beginPage;
    }
    return val;
  }
  async function lateStart(site, begin = 1) {
    const manga = await site.run();
    logScript('LateStart');
    let beginPage = begin;
    let endPage = manga.pages;
    const options = {
      title: getLocaleString('STARTING'),
      html: html`
        ${getLocaleString('CHOOSE_BEGINNING')}
        <div id="pageInputGroup">
          <div id="pageInputs">
            <input
              type="number"
              id="pageBegin"
              class="pageInput"
              min="1"
              inputmode="numeric"
              pattern="[0-9]*"
              max="${manga.pages}"
              value="${beginPage}"
            />
            -
            <input
              type="number"
              id="pageEnd"
              class="pageInput"
              min="1"
              inputmode="numeric"
              pattern="[0-9]*"
              max="${manga.pages}"
              value="${endPage}"
            />
          </div>
          <div id="pagesSlider"></div>
        </div>
      `,
      showCancelButton: true,
      cancelButtonColor: '#d33',
      reverseButtons: true,
      icon: 'question',
      didOpen() {
        const pageBeginInput = document.querySelector('#pageBegin');
        const pageEndInput = document.querySelector('#pageEnd');
        const inputSlider = document.getElementById('pagesSlider');
        if (inputSlider) {
          let changedInput = function () {
            if (
              (pageBeginInput && pageBeginInput.value === '') ||
              (pageEndInput && pageEndInput.value === '')
            ) {
              return;
            }
            const valBegin = validateMin(
              parseInt(pageBeginInput?.value ?? '0', 10),
              endPage,
              rangeSliderElement,
            );
            const valEnd = validateMax(
              parseInt(pageEndInput?.value ?? '0', 10),
              beginPage,
              rangeSliderElement,
            );
            if (pageBeginInput) pageBeginInput.value = valBegin.toString();
            if (pageEndInput) pageEndInput.value = valEnd.toString();
            beginPage = valBegin;
            endPage = valEnd;
            rangeSliderElement.value([valBegin, valEnd]);
          };
          const rangeSliderElement = rangeSlider(inputSlider, {
            min: 1,
            max: manga.pages,
            value: [beginPage, endPage],
            onInput(value, userInteraction) {
              if (userInteraction) {
                [beginPage, endPage] = value;
                if (pageBeginInput) {
                  pageBeginInput.value = beginPage.toString();
                }
                if (pageEndInput) {
                  pageEndInput.value = endPage.toString();
                }
              }
            },
          });
          const observerEvent = _.debounce(changedInput, 600);
          ['change', 'mouseup', 'keyup', 'touchend'].forEach(event => {
            pageBeginInput?.addEventListener(event, observerEvent);
            pageEndInput?.addEventListener(event, observerEvent);
          });
        }
      },
    };
    Swal.fire(options).then(result => {
      if (result.value) {
        logScript(`Choice: ${beginPage} - ${endPage}`);
        manga.begin = beginPage;
        manga.pages = endPage;
        viewer(manga).then(() => logScript('Page loaded'));
      } else {
        logScript(result.dismiss);
      }
    });
  }
  function createLateStartButton(site, beginning) {
    const button = document.createElement('button');
    button.innerText = getLocaleString('BUTTON_START');
    button.id = 'StartMOV';
    button.onclick = () => {
      lateStart(site, beginning).catch(logScript);
    };
    document.body.appendChild(button);
    const style = document.createElement('style');
    style.appendChild(document.createTextNode(startButton + rangeSliderStyles));
    document.head.appendChild(style);
    logScript('Start Button added to page', button);
  }
  function showWaitPopup(site, manga) {
    Swal.fire({
      title: getLocaleString('STARTING'),
      html: html`${manga.begin && manga.begin > 1
        ? `${getLocaleString('RESUME')}${manga.begin}.<br/>`
        : ''}${getLocaleString('WAITING')}`,
      showCancelButton: true,
      cancelButtonColor: '#d33',
      reverseButtons: true,
      timer: 3e3,
    }).then(result => {
      if (result.value || result.dismiss === Swal.DismissReason.timer) {
        viewer(manga).then(() => logScript('Page loaded'));
      } else {
        createLateStartButton(site, manga.begin ?? 0);
        logScript(result.dismiss);
      }
    });
  }
  async function preparePage([site, manga]) {
    logScript(`Found Pages: ${manga.pages} in ${site.name}`);
    if (!manga.title) {
      manga.title = document.querySelector('title')?.textContent?.trim();
    }
    manga.begin = isBookmarked() ?? manga.begin ?? 1;
    const style = document.createElement('style');
    style.appendChild(document.createTextNode(sweetalertStyle));
    document.body.appendChild(style);
    giveToWindow('MOV', (startPage, endPage) => {
      if (startPage !== void 0) {
        manga.begin = startPage;
      }
      if (endPage !== void 0) {
        manga.pages = endPage;
      }
      viewer(manga).then(() => logScript('Page loaded'));
    });
    switch (site.start ?? getSettingsValue('loadMode')) {
      case 'never':
        createLateStartButton(site, manga.begin);
        break;
      case 'always':
        viewer(manga).then(() => logScript('Page loaded'));
        break;
      // case 'wait':
      default:
        showWaitPopup(site, manga);
        break;
    }
  }
  async function start(sites) {
    logScript(
      `Starting ${getInfoGM.script.name} ${getInfoGM.script.version} on ${getDevice()} ${getBrowser()} with ${getEngine()}`,
    );
    if (allowUpload()) return;
    logScript(sites.length, 'Known Manga Sites:', sites);
    const foundSites = sites.filter(s => s.url.test(window.location.href));
    logScript(foundSites.length, 'Found sites:', foundSites);
    const testedSites = foundSites.map(async site => {
      logScript(`Testing site: ${site.name}`);
      return new Promise((resolve, reject) => {
        Promise.all([
          testTime(site),
          testElement(site),
          testAttribute(site),
          testVariable(site),
          testFunc(site),
        ])
          .then(async () => site.run())
          .then(manga =>
            manga.pages > 0
              ? resolve([site, manga])
              : reject(new Error(`${site.name} found ${manga.pages} pages`)),
          );
      });
    });
    Promise.race(testedSites.map((promise, index) => promise.then(() => index))).then(
      fastestIndex => {
        testedSites.forEach((_promise, i) => {
          if (i !== fastestIndex) logScript(`Failed/Skipped: ${foundSites[i].name}`);
        });
        testedSites[fastestIndex].then(result => {
          preparePage(result);
        });
      },
    );
  }

  const matchers = {
    eq: (element, content) => element.textContent?.trim() === content,
    starts: (element, content) => !!element.textContent?.trim()?.startsWith(content),
    ends: (element, content) => !!element.textContent?.trim()?.endsWith(content),
  };
  function findElements(selector, content, matcherKey) {
    const matcher = matchers[matcherKey];
    if (!matcher) {
      throw new Error(`Invalid matcherKey: ${matcherKey}`);
    }
    return [...document.querySelectorAll(selector)].filter(element =>
      Array.isArray(content) ? content.some(c => matcher(element, c)) : matcher(element, content),
    );
  }
  function findOneElement(selector, content, matcherKey) {
    return findElements(selector, content, matcherKey)?.[0];
  }
  function findClosest(selector, content, matcherKey, ancestor = 'a') {
    const element = findOneElement(selector, content, matcherKey);
    return element?.closest(ancestor) ?? null;
  }
  const findByContentEq = (selector, content) => findElements(selector, content, 'eq');
  const findOneByContentStarts = (selector, content) => findOneElement(selector, content, 'starts');
  const findClosestByContentEq = (selector, content, ancestor = 'a') =>
    findClosest(selector, content, 'eq', ancestor);
  const findClosestByContentStarts = (selector, content, ancestor = 'a') =>
    findClosest(selector, content, 'starts', ancestor);
  const findClosestByContentEnds = (selector, content, ancestor = 'a') =>
    findClosest(selector, content, 'ends', ancestor);

  const asura = {
    name: 'Asura Scans',
    url: /https?:\/\/(www.)?(asuracomic).(net)\/.+/,
    homepage: 'https://asuracomic.net/',
    language: [Language.ENGLISH],
    category: Category.MANGA,
    waitEle: 'img[alt*="chapter"]',
    waitTime: 2e3,
    run() {
      const images = [...document.querySelectorAll('img[alt*="chapter"]')];
      const ref = findOneByContentStarts('p', 'All chapters are in');
      return {
        title: ref?.previousSibling?.textContent?.trim(),
        series: ref?.querySelector('a')?.getAttribute('href'),
        pages: images.length,
        prev: findClosestByContentEq('h2', 'Prev', 'a')?.getAttribute('href'),
        next: findClosestByContentEq('h2', 'Next', 'a')?.getAttribute('href'),
        listImages: images.map(img => img.getAttribute('src') ?? ''),
        async before() {
          document
            .querySelectorAll('button.absolute')
            .forEach(e => e.dispatchEvent(new Event('click', { bubbles: true })));
          await waitForTimer(1e3);
        },
      };
    },
  };

  const batoto = {
    name: 'Batoto',
    url: /https?:\/\/(?:www\.)?(?:fto|jto|hto|dto|mto|wto|bato|battwo|batotwo|comiko|batocomic|readtoto|zbato|xbato|mangatoto)\.(?:to|com|net|org)\/(chapter|title).*/,
    homepage: 'https://rentry.co/batoto',
    language: [Language.ENGLISH],
    category: Category.MANGA,
    waitEle: 'div[name="image-item"] img, .page-img',
    run() {
      if (window.location.pathname.startsWith('/title')) {
        if (window.location.search !== '?load=2') {
          window.location.search = '?load=2';
        }
        const images2 = [...document.querySelectorAll('div[name="image-item"] img')];
        return {
          title: document.querySelector('h6')?.textContent?.trim(),
          series: document.querySelector('h3 a')?.getAttribute('href'),
          pages: images2.length,
          prev: findClosestByContentEnds('span', 'Prev Chapter', 'a')?.getAttribute('href'),
          next: findClosestByContentStarts('span', 'Next Chapter', 'a')?.getAttribute('href'),
          listImages: images2.map(img => img.getAttribute('src') ?? ''),
        };
      }
      const images = [...document.querySelectorAll('.page-img')];
      return {
        title: document.querySelector('.nav-title a')?.textContent?.trim(),
        series: document.querySelector('.nav-title a')?.getAttribute('href'),
        pages: images.length,
        prev: document.querySelector('.nav-prev a')?.getAttribute('href'),
        next: document.querySelector('.nav-next a')?.getAttribute('href'),
        listImages: images.map(img => img.getAttribute('src') ?? ''),
      };
    },
  };

  const bilibilicomics = {
    name: 'BilibiliComics',
    url: /https?:\/\/(www\.)?(bilibilicomics).net\/episode\/.+/,
    homepage: 'https://www.bilibilicomics.net/',
    language: [Language.ENGLISH],
    category: Category.MANGA,
    waitEle: '#__NUXT_DATA__',
    async run() {
      const json = JSON.parse(document.querySelector('#__NUXT_DATA__')?.innerHTML ?? '');
      const images = json.filter(
        x => typeof x === 'string' && /.(png|jpg|jpeg|gif|bmp|webp)$/i.exec(x),
      );
      return {
        title: document.querySelector('.chapterTitle')?.textContent?.trim(),
        series: document.querySelector('.book-name')?.getAttribute('href'),
        pages: images.length,
        prev: document.querySelectorAll('.pre-next-btns').item(0)?.getAttribute('href'),
        next: document.querySelectorAll('.pre-next-btns').item(2)?.getAttribute('href'),
        listImages: images.map(image => `https://static.comicfans.io/${image}`),
      };
    },
  };

  function captureComments() {
    const comments = document.querySelector('#comments-container');
    if (!comments) return null;
    const css = [...document.styleSheets]
      .filter(stylesheet => !stylesheet.href || stylesheet.href.startsWith(window.location.origin))
      .map(stylesheet => [...stylesheet.cssRules]?.map(({ cssText }) => cssText)?.join('\n') ?? '');
    comments.classList.remove('blur-sm');
    const container = document.createElement('div');
    const shadowRoot = container.attachShadow({ mode: 'open' });
    const commentsParent = document.createElement('div');
    commentsParent.appendChild(comments);
    shadowRoot.appendChild(commentsParent);
    const style = document.createElement('style');
    style.textContent = css.join('\n');
    shadowRoot.appendChild(style);
    return container;
  }
  const comick = {
    name: 'Comick',
    url: /https?:\/\/(www\.)?comick.io\/.+/,
    homepage: 'https://comick.io/',
    language: [Language.ENGLISH],
    category: Category.MANGA,
    waitFunc() {
      return /\/([^/]+)-chapter.+$/.test(window.location.pathname);
    },
    waitEle: '#__NEXT_DATA__',
    waitTime: 3e3,
    run() {
      const data = JSON.parse(document.getElementById('__NEXT_DATA__')?.innerHTML ?? '')?.props
        ?.pageProps;
      const pages = data?.chapter?.md_images?.map(
        image => `https://meo.comick.pictures/${image?.b2key}`,
      );
      return {
        title: data?.seoTitle ?? `${data.chapter?.md_comics?.title} ${data?.chapter?.chap}`,
        series: `/comic/${data?.chapter?.md_comics?.slug}`,
        pages: pages?.length,
        prev: data?.prev?.href,
        next: data?.next?.href,
        listImages: pages,
        comments: captureComments(),
      };
    },
  };

  const dynastyscans = {
    name: 'Dynasty-Scans',
    url: /https?:\/\/(www\.)?dynasty-scans.com\/chapters\/.+/,
    homepage: 'https://dynasty-scans.com/',
    language: [Language.ENGLISH],
    category: Category.MANGA,
    run() {
      return {
        title: document.querySelector('#chapter-title')?.textContent?.trim(),
        series: document.querySelector('#chapter-title a')?.getAttribute('href'),
        pages: unsafeWindow.pages.length,
        prev: document.querySelector('#prev_link')?.getAttribute('href'),
        next: document.querySelector('#next_link')?.getAttribute('href'),
        listImages: unsafeWindow.pages.map(x => x.image),
      };
    },
  };

  const flamecomics = {
    name: 'Flame Comics',
    url: /https?:\/\/(www.)?(flamecomics).(xyz)\/series\/.+/,
    homepage: 'https://flamecomics.xyz/',
    language: [Language.ENGLISH],
    category: Category.MANGA,
    run() {
      const cdn = 'https://cdn.flamecomics.xyz/uploads/images/series';
      const json = JSON.parse(document.getElementById('__NEXT_DATA__')?.innerHTML ?? '');
      const chapter = json?.props?.pageProps?.chapter;
      const images = Object.keys(chapter?.images).map(
        i =>
          `${cdn}/${chapter?.series_id}/${chapter?.token}/${chapter?.images?.[i]?.name}?${chapter?.unix_timestamp}`,
      );
      return {
        title: `${chapter?.title} ${chapter?.chapter}`,
        series: `../${chapter?.series_id}`,
        pages: images.length,
        prev: json?.props?.pageProps?.previous,
        next: json?.props?.pageProps?.next,
        listImages: images,
      };
    },
  };

  const foolslide = {
    name: ['FoOlSlide', 'Kireicake'],
    url: /^(?!.*jaiminisbox).*\/read\/.+/,
    homepage: ['https://github.com/saintly2k/FoOlSlideX', 'https://reader.kireicake.com'],
    language: [Language.ENGLISH],
    obs: 'Any Site that uses FoOLSlide',
    category: Category.MANGA,
    waitEle: 'img.open',
    run() {
      const chapter = [
        ...document.querySelectorAll('.topbar_left .dropdown_parent:last-of-type li'),
      ];
      const origin = chapter.findIndex(item => {
        const url = item.querySelector('a')?.getAttribute('href');
        if (url) {
          return window.location.href.startsWith(url);
        }
        return false;
      });
      const pages = [...document.querySelectorAll('.topbar_right .dropdown li')];
      const images = [...document.querySelectorAll('.inner img:not(.open)')];
      const num = images.length > 1 ? images.length : pages.length;
      const manga = {
        title:
          chapter.at(origin)?.querySelector('a')?.textContent?.trim() ??
          document.querySelector('title')?.textContent?.trim(),
        series: document.querySelector('div.tbtitle div.text a')?.getAttribute('href'),
        pages: num,
        prev: chapter
          .at(origin + 1)
          ?.querySelector('a')
          ?.getAttribute('href'),
        next: chapter
          .at(origin - 1)
          ?.querySelector('a')
          ?.getAttribute('href'),
      };
      if (images.length > 1) {
        return { ...manga, listImages: images.map(img => img.getAttribute('src') ?? '') };
      }
      return {
        ...manga,
        listPages: Array(num)
          .fill(0)
          .map((_, i) => `${window.location.href.replace(/\/\d+$/, '')}/${i + 1}`),
        img: 'img.open',
      };
    },
  };

  const ikigai = {
    name: ['Ikigai Mangas - EltaNews', 'Ikigai Mangas - Ajaco'],
    url: /https?:\/\/visorikigai.(ajaco|eltanews).(com|net)\/capitulo\/\d+/,
    homepage: ['https://visorikigai.eltanews.com/', 'https://visorikigai.ajaco.net/'],
    language: [Language.SPANISH],
    category: Category.MANGA,
    run() {
      const images =
        document
          .querySelector('script[type="qwik/json"]')
          ?.textContent?.match(/http[^'"]+webp/gi) ?? [];
      return {
        title: document.querySelector('title')?.text.replace(' — Manga en línea | MangaOni', ''),
        pages: images?.length,
        prev: findClosestByContentEq('span', 'Siguiente')?.getAttribute('href'),
        next: findClosestByContentEq('span', 'Anterior')?.getAttribute('href'),
        listImages: images,
      };
    },
  };

  const kumanga = {
    name: 'KuManga',
    url: /https?:\/\/(www\.)?kumanga.com\/manga\/leer\/.+/,
    homepage: 'https://www.kumanga.com/',
    language: [Language.SPANISH],
    category: Category.MANGA,
    run() {
      const chapter = document.querySelectorAll('select').item(1).querySelector('option[selected]');
      return {
        title: document.querySelector('title')?.textContent?.trim(),
        series: document.querySelector('h2 a')?.getAttribute('href'),
        pages: unsafeWindow.pUrl.length,
        prev: `/manga/leer/${chapter?.previousElementSibling?.getAttribute('value')}`,
        next: `/manga/leer/${chapter?.nextElementSibling?.getAttribute('value')}`,
        listImages: unsafeWindow.pUrl.map(item => item.imgURL),
      };
    },
  };

  const leercapitulo = {
    name: 'LeerCapitulo',
    url: /https?:\/\/(www.)?leercapitulo.co\/leer\/.+/,
    homepage: 'https://www.leercapitulo.co/',
    language: [Language.SPANISH],
    category: Category.MANGA,
    waitEle: '#page_select',
    run() {
      const img = [...document.querySelectorAll('#page_select option')].map(
        el => el.getAttribute('value') ?? '',
      );
      return {
        title: document.querySelector('h1')?.textContent?.trim(),
        series: document.querySelector('.chapter-title a')?.getAttribute('href'),
        pages: img.length,
        prev: document.querySelector('.pre')?.getAttribute('href'),
        next: document.querySelector('.next')?.getAttribute('href'),
        listImages: img,
      };
    },
  };

  const lhtranslation = {
    name: 'LHTranslation',
    url: /https?:\/\/(www\.)?lhtranslation.net\/read.+/,
    homepage: 'https://lhtranslation.net/',
    language: [Language.ENGLISH],
    category: Category.MANGA,
    run() {
      const chapter = document.querySelector('.form-control option:checked');
      const images = [...document.querySelectorAll('img.chapter-img')];
      return {
        title: document.querySelector('.chapter-img.tieude font')?.textContent?.trim(),
        series: document.querySelector('.navbar-brand.manga-name')?.getAttribute('href'),
        pages: images.length,
        prev: chapter?.nextElementSibling?.getAttribute('value'),
        next: chapter?.previousElementSibling?.getAttribute('value'),
        listImages: images.map(img => img.getAttribute('src') ?? ''),
      };
    },
  };

  const m440 = {
    name: 'M440',
    url: /https?:\/\/(www\.)?m440.in\/manga\/.+\/.+\/\d+/,
    homepage: 'https://m440.in/',
    language: [Language.SPANISH],
    category: Category.MANGA,
    run() {
      const images = [...document.querySelectorAll('#all img')];
      const chapter = document.querySelector('#chapter-list li.active');
      return {
        title: document.querySelector('title')?.textContent?.trim(),
        series: document
          .querySelector('#navbar-collapse-1 ul:nth-child(2) a')
          ?.getAttribute('href'),
        pages: images.length,
        prev: chapter?.nextElementSibling?.firstElementChild?.getAttribute('href'),
        next: chapter?.previousElementSibling?.firstElementChild?.getAttribute('href'),
        listImages: images.map(img => img.getAttribute('data-src') ?? ''),
      };
    },
  };

  const imageRegex = /^([\t\n])*(https?:\/\/)?.+\.(jpg|jpeg|png|gif|bmp|webp).*$/;
  function findImages() {
    return [
      ...document.querySelectorAll(
        '.wp-manga-chapter-img, .blocks-gallery-item img, .reading-content img, #chapter-images img, #chapterContent img',
      ),
    ].map(img => {
      const attrs = [...img.attributes].filter(
        attr => /.*(src|url).*/i.test(attr.name) && !/^.*(blank|lazy|load).*$/.test(attr.value),
      );
      if (attrs.length === 0) return '';
      return (
        attrs.find(attr => imageRegex.test(attr.value))?.value ?? img?.getAttribute('src') ?? ''
      );
    });
  }
  const madarawp = {
    name: [
      'Madara WordPress Plugin',
      'MangaHaus',
      'Isekai Scan',
      'Comic Kiba',
      'Zinmanga',
      'mangatx',
      'Toonily',
      'Mngazuki',
      'JaiminisBox',
      'DisasterScans',
      'ManhuaPlus',
      'TopManhua',
      'NovelMic',
      'Reset-Scans',
      'LeviatanScans',
      'Dragon Tea',
      'SetsuScans',
      'ToonGod',
    ],
    url: /https?:\/\/.+\/(manga|series|manhua|comic|ch|novel|webtoon)\/.+\/.+/,
    homepage: [
      'https://mangabooth.com/',
      'https://manhuaus.com',
      'https://isekaiscan.com/',
      'https://comickiba.com/',
      'https://zinmanga.com/',
      'https://mangatx.com/',
      'https://toonily.net/',
      'https://mangazuki.me/',
      'https://jaiminisbox.net',
      'https://disasterscans.com/',
      'https://manhuaplus.org/',
      'https://www.topmanhua.com/',
      'https://novelmic.com/',
      'https://reset-scans.com/',
      'https://leviatanscans.com/',
      'https://dragontea.ink/',
      'https://setsuscans.com/',
      'https://toongod.org/home/',
    ],
    language: [Language.ENGLISH],
    obs: 'Any Site that uses Madara WordPress Plugin',
    category: Category.MANGA,
    waitFunc: () => {
      const images = findImages();
      return images.length > 0 && images.every(s => s && imageRegex.test(s));
    },
    run() {
      const images = findImages();
      return {
        title: document.querySelector('#chapter-heading')?.textContent?.trim(),
        series: (
          document.querySelector('.breadcrumb li:nth-child(3) a') ??
          document.querySelector('.breadcrumb li:nth-child(2) a')
        )?.getAttribute('href'),
        pages: images.length,
        prev: document.querySelector('.prev_page')?.getAttribute('href'),
        next: document.querySelector('.next_page')?.getAttribute('href'),
        listImages: images,
      };
    },
  };

  const mangabuddy = {
    name: 'MangaBuddy',
    url: /https?:\/\/(www\.)?mangabuddy.com\/.+\/chapter.+/,
    homepage: 'https://mangabuddy.com/',
    language: [Language.ENGLISH],
    category: Category.MANGA,
    waitVar: 'chapImages',
    run() {
      const images = unsafeWindow.chapImages
        .split(',')
        .map(s => new URL(s).pathname.replace('/res/', 'https://sb.mbcdn.xyz/'));
      return {
        title: document.querySelector('.chapter-info')?.textContent?.trim(),
        series: document
          .querySelector('#breadcrumbs-container div:nth-child(2) a')
          ?.getAttribute('href'),
        pages: images.length,
        prev: document.querySelector('a.prev')?.getAttribute('href'),
        next: document.querySelector('a.next')?.getAttribute('href'),
        listImages: images,
      };
    },
  };

  const mangademon = {
    name: 'MangaDemon',
    url: /https?:\/\/(www\.)?demonicscans\.org\/title\/.+\/chapter\/.+/,
    homepage: 'https://demonicscans.org/',
    language: [Language.ENGLISH],
    category: Category.MANGA,
    run() {
      const images = [...document.querySelectorAll('.imgholder')];
      return {
        title: document.querySelector('title')?.textContent?.trim(),
        series: document.querySelector('h1 a')?.getAttribute('href'),
        pages: images.length,
        prev: document.querySelector('.prevchap')?.getAttribute('href'),
        next: document.querySelector('.nextchap')?.getAttribute('href'),
        listImages: images.map(
          img => (img.getAttribute('data-src') || img.getAttribute('src')) ?? '',
        ),
        before() {
          const iframe = document.createElement('iframe');
          iframe.style.display = 'none';
          document.body.appendChild(iframe);
          const originalDocument = iframe.contentWindow?.document;
          if (originalDocument) document.createTextNode = originalDocument.createTextNode;
          document.body.removeChild(iframe);
        },
      };
    },
  };

  const mangadex = {
    name: 'MangaDex',
    url: /https?:\/\/(www\.)?mangadex.org/,
    homepage: 'https://mangadex.org/',
    language: [Language.ENGLISH],
    category: Category.MANGA,
    waitEle: '#chapter-selector a',
    async run() {
      const chapterId = /\/chapter\/([^/]+)(\/\d+)?/.exec(window.location.pathname)?.at(1);
      const home = `https://api.mangadex.org/at-home/server/${chapterId}`;
      const server = await fetch(home).then(async res => res.json());
      const images = server.chapter.data;
      const chapters = document.querySelectorAll('#chapter-selector a');
      return {
        title: document.querySelector('title')?.text.replace(' - MangaDex', ''),
        series: document.querySelector("a.text-primary[href^='/title/']")?.getAttribute('href'),
        pages: images.length,
        prev: chapters?.item(0)?.getAttribute('href'),
        next: chapters?.item(1)?.getAttribute('href'),
        listImages: images.map(img => `${server.baseUrl}/data/${server.chapter.hash}/${img}`),
      };
    },
  };

  const mangafox = {
    name: ['MangaFox', 'MangaHere'],
    url: /https?:\/\/(www\.)?(fanfox.net|mangahere.cc)\/manga\/.+\/.+\//,
    homepage: ['https://fanfox.net/', 'https://www.mangahere.cc/'],
    language: [Language.ENGLISH],
    category: Category.MANGA,
    waitVar: 'chapterid',
    async run() {
      const key = document.querySelector('#dm5_key')?.getAttribute('value');
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'text/plain',
        },
      };
      const src = Array(unsafeWindow.imagecount)
        .fill(0)
        .map(async (_, i) => {
          const url = `chapterfun.ashx?cid=${unsafeWindow.chapterid ?? unsafeWindow.chapter_id}&page=${i}&key=${key}`;
          const api = await fetch(url, options).then(async res => res.text());
          (0, eval)(api);
          return d;
        });
      const images = await Promise.all(src);
      return {
        title: document.querySelector('.reader-header-title div')?.textContent?.trim(),
        series: document.querySelector('.reader-header-title a')?.getAttribute('href'),
        pages: unsafeWindow.imagecount,
        prev: unsafeWindow.prechapterurl,
        next: unsafeWindow.nextchapterurl,
        listImages: images.map((img, i) => img[i === 0 ? 0 : 1]),
      };
    },
  };

  const mangago = {
    name: 'Mangago',
    url: /https?:\/\/(www\.)?mangago.me\/.*\/.*\/.*/,
    homepage: 'https://www.mangago.me/',
    language: [Language.ENGLISH],
    category: Category.MANGA,
    waitVar: 'imgsrcs',
    run() {
      const key = CryptoJS.enc.Hex.parse('e11adc3949ba59abbe56e057f20f883e');
      const iv = CryptoJS.enc.Hex.parse('1234567890abcdef1234567890abcdef');
      const opinion = { iv, padding: CryptoJS.pad.ZeroPadding };
      const images = CryptoJS.AES.decrypt(unsafeWindow.imgsrcs, key, opinion)
        .toString(CryptoJS.enc.Utf8)
        .split(',');
      return {
        title: `${unsafeWindow.manga_name} ${unsafeWindow.chapter_name}`,
        series: unsafeWindow.mid,
        pages: unsafeWindow.total_pages,
        prev: document.querySelector('.recom p:nth-child(5) a')?.getAttribute('href'),
        next: unsafeWindow.next_c_url,
        listImages: images,
        before() {
          if (images.some(s => s === '')) {
            document.querySelector('#nform')?.submit();
          }
        },
      };
    },
  };

  const mangahub = {
    name: 'MangaHub',
    url: /https?:\/\/(www\.)?(mangahub).io\/chapter\/.+\/.+/,
    homepage: 'https://mangahub.io/',
    language: [Language.ENGLISH],
    category: Category.MANGA,
    waitEle: '#select-chapter',
    async run() {
      function getCookie(name) {
        const re = new RegExp(`${name}=([^;]+)`);
        const value = re.exec(document.cookie);
        return value != null ? decodeURIComponent(value[1]) : null;
      }
      const slug = unsafeWindow.CURRENT_MANGA_SLUG ?? window.location.pathname.split('/')[2];
      const number = window.location.pathname.split('/')[3].replace('chapter-', '');
      const data = { query: `{chapter(x:m01,slug:"${slug}",number:${number}){pages}}` };
      const options = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
          'x-mhub-access': getCookie('mhub_access') ?? '',
        },
      };
      const api = await fetch('https://api.mghcdn.com/graphql', options).then(async res =>
        res.json(),
      );
      const images = JSON.parse(api?.data.chapter.pages.toString());
      return {
        title: document.querySelector('#mangareader h3')?.textContent?.trim(),
        series: document.querySelector('#mangareader a')?.getAttribute('href'),
        pages: images.i.length,
        prev: document.querySelector('.previous a')?.getAttribute('href'),
        next: document.querySelector('.next a')?.getAttribute('href'),
        listImages: images.i.map(i => `https://imgx.mghcdn.com/${images.p + i}`),
      };
    },
  };

  const mangakakalot = {
    name: ['MangaKakalot', 'NeloManga ', 'MangaNato', 'NatoManga', 'MangaBats'],
    url: /https?:\/\/(www\.)?(read|chap)?(nelomanga|mangakakalot|natomanga|manganato|mangabats|mangakakalove).(com|gg|net).*\/(chapter|manga)\/.+\/.+/,
    homepage: [
      'https://mangakakalot.gg/',
      'https://www.nelomanga.com/',
      'https://www.manganato.gg/',
      'https://www.natomanga.com/',
      'https://www.mangabats.com/',
    ],
    language: [Language.ENGLISH],
    category: Category.MANGA,
    waitEle: '.navi-change-chapter-btn-prev, .next, .navi-change-chapter-btn-next, .back',
    run() {
      const images = [...document.querySelectorAll('#vungdoc img, .container-chapter-reader img')];
      return {
        title: document
          .querySelector(
            '.info-top-chapter h2, .imageOptions-chapter-info-top h1, .panel-chapter-info-top h1',
          )
          ?.textContent?.trim(),
        series: document.querySelectorAll('span a[title]').item(1).getAttribute('href'),
        pages: images.length,
        prev: document.querySelector('.navi-change-chapter-btn-prev, .next')?.getAttribute('href'),
        next: document.querySelector('.navi-change-chapter-btn-next, .back')?.getAttribute('href'),
        listImages: images.map(img => img.getAttribute('src') ?? ''),
      };
    },
  };

  const mangaoni = {
    name: 'MangaOni',
    url: /https?:\/\/(www\.)?manga-oni.com\/lector\/.+\/\d+\/cascada/,
    homepage: 'https://manga-oni.com/',
    language: [Language.SPANISH],
    category: Category.MANGA,
    run() {
      document.querySelector('#c_list')?.dispatchEvent(new Event('mouseover'));
      const chapter = document.querySelector('#c_list option:checked');
      const images = [...document.querySelectorAll('#slider img')];
      return {
        title: document.querySelector('title')?.text.replace(' — Manga en línea | MangaOni', ''),
        pages: images?.length,
        prev: chapter?.nextElementSibling?.getAttribute('value'),
        next: chapter?.previousElementSibling?.getAttribute('value'),
        listImages: images.map(
          img => img.getAttribute('data-src') ?? img.getAttribute('src') ?? '',
        ),
      };
    },
  };

  const mangapark = {
    name: 'MangaPark',
    url: /https?:\/\/(www\.)?(mangapark|mpark|comicpark|readpark|parkmanga).(com|me|org|net|io|to)\/title\/.+\/.+/,
    homepage: 'https://mangapark.net/',
    language: [Language.ENGLISH],
    category: Category.MANGA,
    waitEle: 'main div div a.btn-primary',
    run() {
      const images = [...document.querySelectorAll('main div div > img.w-full')];
      return {
        title: [...document.querySelectorAll('.comic-detail h3 a, .comic-detail h6 span')]
          .map(e => e.textContent?.trim())
          .join(' '),
        series: document.querySelector('.comic-detail a')?.getAttribute('href'),
        pages: images.length,
        prev: document
          .querySelectorAll('main div div a.btn-primary')
          ?.item(0)
          ?.getAttribute('href'),
        next: document
          .querySelectorAll('main div div a.btn-primary')
          ?.item(1)
          ?.getAttribute('href'),
        listImages: images.map(src => src.getAttribute('src') ?? ''),
      };
    },
  };

  const mangareader = {
    name: 'MangaReader',
    url: /https?:\/\/(www\.)?mangareader.to\/read\/.+\/.+\/.+/,
    homepage: 'https://mangareader.to',
    language: [Language.ENGLISH],
    category: Category.MANGA,
    obs: 'Some galleries will not be usable',
    waitEle: '.ds-image, .iv-card',
    async run() {
      const chapter = document.querySelector('.chapter-item.active');
      const images = [...document.querySelectorAll('.ds-image[data-url], .iv-card[data-url]')];
      const src = images.map(async img => {
        const url = img.getAttribute('data-url') ?? '';
        if (url && img.classList.contains('shuffled')) {
          return (await imgReverser(url)).toDataURL();
        }
        return url;
      });
      return {
        title: document.querySelector('.hr-manga h2')?.textContent?.trim(),
        series: document.querySelector('.hr-manga')?.getAttribute('href'),
        pages: src.length,
        prev: chapter?.nextElementSibling?.querySelector('a')?.getAttribute('href'),
        next: chapter?.previousElementSibling?.querySelector('a')?.getAttribute('href'),
        listImages: await Promise.all(src),
      };
    },
  };

  const mangastreamwp = {
    name: [
      'MangaStream WordPress Plugin',
      'Realm Oasis',
      'Voids-Scans',
      'Luminous Scans',
      'Shimada Scans',
      'Night Scans',
      'Manhwa-Freak',
      'OzulScansEn',
      'CypherScans',
      'MangaGalaxy',
      'LuaScans',
      'Drake Scans',
      'Rizzfables',
      'NovatoScans',
      'TresDaos',
      'Lectormiau',
      'NTRGod',
      'Threedaos',
    ],
    url: /https?:\/\/[^/]*(scans?|comic|realm|rizz|hivetoon|tresdaos|zonamiau|ntrgod|threedaos)[^/]*\/.+/,
    homepage: [
      'https://themesia.com/mangastream-wordpress-theme/',
      'https://realmoasis.com/',
      'https://void-scans.com/',
      'https://luminous-scans.com/',
      'https://shimadascans.com/',
      'https://night-scans.com/',
      'https://freakcomic.com/',
      'https://ozulscansen.com/',
      'https://cypherscans.xyz/',
      'https://mangagalaxy.me/',
      'https://luascans.com/',
      'https://drake-scans.com/',
      'https://rizzfables.com/',
      'https://www.novatoscans.top/',
      'https://tresdaos.com',
      'https://zonamiau.com/',
      'https://ntrgod.com/',
      'https://threedaos.zdrz.xyz/',
    ],
    language: [Language.ENGLISH, Language.SPANISH],
    category: Category.MANGA,
    // waitTime: 2000,
    waitEle: ':where(#chapter, #nPL_select) option:nth-child(2)',
    run() {
      const images = [
        ...document.querySelectorAll(
          ':where(#readerarea, .check-box) img:not(.asurascans):not([src*="loader"]):not([src*="chevron"])',
        ),
      ];
      return {
        title: document.querySelector('title')?.textContent?.trim(),
        series:
          document.querySelector(':where(.allc, .tac) a')?.getAttribute('href') ??
          document.querySelectorAll('[class*="breadcrumb"] a').item(1)?.getAttribute('href'),
        pages: images.length,
        prev: findByContentEq(':where(.nextprev, .inner_nPL) a', [
          'Prev',
          'Anterior',
        ])?.[0]?.getAttribute('href'),
        next: findByContentEq(':where(.nextprev, .inner_nPL) a', [
          'Next',
          'Siguiente',
        ])?.[0]?.getAttribute('href'),
        listImages: images.map(
          img =>
            img.getAttribute('data-src') ??
            img.getAttribute('data-lazy-src') ??
            img.getAttribute('src') ??
            '',
        ),
      };
    },
  };

  const mangatoon = {
    name: 'MangaToons',
    url: /https?:\/\/.*mangatoon.mobi\/.+\/watch\/.+/,
    homepage: 'https://mangatoon.mobi/',
    language: [Language.ENGLISH],
    category: Category.MANGA,
    waitEle: '.pictures img:not(.cover)',
    run() {
      const images = [...document.querySelectorAll('.pictures img:not(.cover)')];
      return {
        title: document.querySelector('title')?.textContent?.trim(),
        series: document.querySelector('.top-left a')?.getAttribute('href'),
        pages: images.length,
        prev: document.querySelector('.page-icons-prev')?.getAttribute('href'),
        next: document.querySelector('.page-icons-next')?.getAttribute('href'),
        listImages: images.map(img => img.getAttribute('data-src') ?? ''),
      };
    },
  };

  const manhwaweb = {
    name: 'ManhwaWeb',
    url: /https?:\/\/(www\.)?manhwaweb.com\/leer\/.+/,
    homepage: 'https://manhwaweb.com/',
    language: [Language.SPANISH],
    category: Category.MANGA,
    async run() {
      const slug = window.location.pathname.replace('/leer', '');
      const api = await fetch(
        `https://manhwawebbackend-production.up.railway.app/chapters/see${slug}`,
      ).then(async res => res.json());
      const data = await fetch(
        `https://manhwawebbackend-production.up.railway.app/chapters/seeprevpost${slug}`,
      ).then(async res => res.json());
      return {
        title: `${api.name} ${api.chapter.chapter}`,
        series: [...document.querySelectorAll('div')]
          .filter(i => i.textContent === 'Episodios')?.[0]
          ?.parentElement?.getAttribute('href'),
        pages: api.chapter.img.length,
        prev: data.chapterAnterior.replace(api._id, api.real_id),
        next: data.chapterSiguiente.replace(api._id, api.real_id),
        listImages: api.chapter.img,
      };
    },
  };

  const mgeko = {
    name: ['MangaGeko.com', 'MangaGeko.cc'],
    url: /https?:\/\/(www\.)?mgeko.(com|cc)?\/reader\/.*/,
    homepage: ['https://www.mgeko.com/', 'https://www.mgeko.cc/'],
    language: [Language.ENGLISH],
    category: Category.MANGA,
    run() {
      const images = [...document.querySelectorAll('#chapter-reader img')];
      return {
        title: document.querySelector('.titles')?.textContent?.trim(),
        series: document.querySelector('.titles a')?.getAttribute('href'),
        pages: images.length,
        prev: document.querySelector('.chnav.prev')?.getAttribute('href'),
        next: document.querySelector('.chnav.next')?.getAttribute('href'),
        listImages: images.map(img => img.getAttribute('src') ?? ''),
      };
    },
  };

  const nineanime = {
    name: 'NineAnime',
    url: /https?:\/\/(www\.)?nineanime.com\/chapter\/.+/,
    homepage: 'https://www.nineanime.com/',
    language: [Language.ENGLISH],
    category: Category.MANGA,
    run() {
      const pages = [...document.querySelectorAll('.sl-page option')];
      const chapter = document.querySelector('.mangaread-pagenav select option[selected]');
      return {
        title: `${document.querySelector('.title h1')?.textContent?.trim()}/${document.querySelector('.title h2')?.textContent?.trim()}`,
        series: document.querySelector('.title a:has(h2)')?.getAttribute('href'),
        pages: pages.length,
        prev: chapter?.nextElementSibling?.getAttribute('value'),
        next: chapter?.previousElementSibling?.getAttribute('value'),
        listPages: pages.map(o => o.getAttribute('value') ?? ''),
        img: '.manga_pic',
      };
    },
  };

  const olympusbiblioteca = {
    name: 'OlympusBiblioteca',
    url: /https?:\/\/(www\.)?olympusbiblioteca.com\/capitulo\/\d+\/.+/,
    homepage: 'https://olympusbiblioteca.com/',
    language: [Language.SPANISH],
    category: Category.MANGA,
    run() {
      const images = [...document.querySelectorAll('section img.w-full.h-full')];
      return {
        title: document.querySelector('title')?.textContent?.replace(/\|.+/, '').trim(),
        series: document.querySelector('h1')?.closest('a')?.getAttribute('href'),
        pages: images.length,
        prev: document.querySelector('a[name="capitulo anterior"]')?.getAttribute('href'),
        next: document.querySelector('a[name="capitulo siguiente"]')?.getAttribute('href'),
        listImages: images.map(img => img.getAttribute('src') ?? ''),
      };
    },
  };

  const readcomicsonline = {
    name: 'ReadComicsOnline',
    url: /https?:\/\/(www\.)?readcomicsonline.ru\/comic\/.*\/\d*/,
    homepage: 'https://readcomicsonline.ru/',
    language: [Language.ENGLISH],
    category: Category.COMIC,
    run() {
      const images = [...document.querySelectorAll('#all img')];
      return {
        title: unsafeWindow.title.replace(/ - Page \d+/, ''),
        series: document.querySelector('div.pager-cnt a')?.getAttribute('href'),
        pages: unsafeWindow.pages.length,
        prev: unsafeWindow.prev_chapter,
        next: unsafeWindow.next_chapter,
        listImages: images.map(img => img.getAttribute('data-src') ?? ''),
      };
    },
  };

  const reaperscans = {
    name: 'ReaperScans',
    url: /https?:\/\/(www\.)?reaperscans\.com\/series\/.+\/chapter.+/,
    homepage: 'https://reaperscans.com/',
    language: [Language.ENGLISH],
    category: Category.MANGA,
    waitEle: '#content .container img:not(.rounded)',
    run() {
      const images = [...document.querySelectorAll('#content .container img:not(.rounded)')];
      return {
        title: document.querySelector('title')?.textContent?.trim(),
        series: document.querySelector('button .fa-house')?.closest('a')?.getAttribute('href'),
        pages: images.length,
        prev: document.querySelector('.fa-chevron-left')?.closest('a')?.getAttribute('href'),
        next: document.querySelector('.fa-chevron-right')?.closest('a')?.getAttribute('href'),
        listImages: images.map(
          img => (img.getAttribute('data-src') || img.getAttribute('src')) ?? '',
        ),
      };
    },
  };

  const tmofans = {
    name: 'TuMangaOnline',
    url: /https?:\/\/(www\.)?(.+).com\/(viewer|news)\/.+\/(paginated|cascade)/,
    homepage: 'https://lectortmo.com/',
    language: [Language.SPANISH],
    category: Category.MANGA,
    run() {
      const images = [...document.querySelectorAll('.img-container img, .viewer-container img')];
      const pages = [
        ...document.querySelectorAll(
          'div.container:nth-child(4) select#viewer-pages-select option',
        ),
      ];
      const num = images.length > 1 ? images.length : pages.length;
      const manga = {
        title: document.querySelector('title')?.textContent?.trim(),
        series: document.querySelector('a[title="Volver"]')?.getAttribute('href'),
        pages: num,
        prev: document.querySelector('.chapter-prev a')?.getAttribute('href'),
        next: document.querySelector('.chapter-next a')?.getAttribute('href'),
      };
      if (images.length > 1) {
        return { ...manga, listImages: images.map(item => item.getAttribute('data-src') ?? '') };
      }
      return {
        ...manga,
        listPages: Array(pages.length)
          .fill(0)
          .map((_, i) => `${window.location.href.replace(/\/\d+$/, '')}/${i + 1}`),
        img: '#viewer-container img, .viewer-page',
      };
    },
  };

  const vortexscans = {
    name: 'Vortex Scans',
    url: /https?:\/\/(www.)?(vortexscans).(org)\/.+/,
    homepage: 'https://vortexscans.org/',
    language: [Language.ENGLISH],
    category: Category.MANGA,
    waitVar: '__next_f',
    waitFunc() {
      return unsafeWindow.__next_f.find(i => /images/.test(i?.[1]))?.length > 0;
    },
    run() {
      const data = unsafeWindow.__next_f.find(i => /images/.test(i?.[1]))?.[1];
      const images =
        data.slice(data.indexOf('images')).match(/http[^"]+\.(png|gif|jpg|jpeg|webp)/g) ?? [];
      return {
        title: document
          .querySelector('time')
          ?.closest('div')
          ?.querySelector('div')
          ?.textContent?.trim(),
        series: document.querySelector('time')?.closest('a')?.getAttribute('href'),
        pages: images?.length,
        prev: findClosestByContentEq('button', 'Prev', 'a')?.getAttribute('href'),
        next: findClosestByContentEq('button', 'Next', 'a')?.getAttribute('href'),
        listImages: images,
      };
    },
  };

  const webnovel = {
    name: 'WebNovel',
    url: /https?:\/\/(www\.)?webnovel.com\/comic\/.+/,
    homepage: 'https://www.webnovel.com/',
    language: [Language.ENGLISH],
    category: Category.MANGA,
    waitVar: 'g_data',
    run() {
      const images = unsafeWindow.g_data.chapter.chapterInfo.chapterPage.map(img => img.url);
      return {
        title: document.querySelector('title')?.textContent?.trim(),
        series: './',
        pages: images.length,
        prev: `${unsafeWindow.g_data.chapter.chapterInfo.preChapterName}_${unsafeWindow.g_data.chapter.chapterInfo.preChapterId}`,
        next: `${unsafeWindow.g_data.chapter.chapterInfo.nextChapterName}_${unsafeWindow.g_data.chapter.chapterInfo.nextChapterId}`,
        listImages: images,
      };
    },
  };

  const webtoons = {
    name: 'WebToons',
    url: /https?:\/\/(www\.)?webtoons.com\/.+viewer.+/,
    homepage: 'https://www.webtoons.com/',
    language: [Language.ENGLISH],
    category: Category.MANGA,
    run() {
      const images = [...document.querySelectorAll('#_imageList img')];
      return {
        title: document.querySelector('.subj_info')?.textContent?.trim(),
        series: document.querySelector('.subj_info a')?.getAttribute('href'),
        pages: images.length,
        prev: document.querySelector('._prevEpisode')?.getAttribute('href'),
        next: document.querySelector('._nextEpisode')?.getAttribute('href'),
        listImages: images.map(
          img =>
            img.getAttribute('data-url') ??
            img.getAttribute('data-src') ??
            img.getAttribute('src') ??
            '',
        ),
      };
    },
  };

  const weebcentral = {
    name: 'WeebCentral',
    url: /https?:\/\/(www\.)?(weebcentral).com\/chapters\/.+/,
    homepage: 'https://weebcentral.com/',
    language: [Language.ENGLISH],
    category: Category.MANGA,
    waitEle: 'main section .maw-w-full',
    async run() {
      const src = [...document.querySelectorAll('main section .maw-w-full')].map(
        elem => elem.getAttribute('src') ?? '',
      );
      const chaptersList = await fetch(
        document.querySelector('main section a + button')?.getAttribute('hx-get') ?? '',
      ).then(res => res.text());
      const parser = new DOMParser();
      const chapters = parser.parseFromString(chaptersList, 'text/html');
      return {
        title: document.querySelector('title')?.textContent?.replace(/ | .+/, '').trim(),
        series: document.querySelector('main section a')?.getAttribute('href'),
        pages: src.length,
        prev: chapters.querySelector('#selected_chapter')?.nextElementSibling?.getAttribute('href'),
        next: chapters
          .querySelector('#selected_chapter')
          ?.previousElementSibling?.getAttribute('href'),
        listImages: src,
      };
    },
  };

  const zeroscans = {
    name: 'ZeroScans',
    url: /https?:\/\/(www\.)?zscans.com\/comics\/.+/,
    homepage: 'https://zscans.com/',
    language: [Language.ENGLISH],
    category: Category.MANGA,
    waitVar: '__ZEROSCANS__',
    run() {
      const images = unsafeWindow.__ZEROSCANS__.data.at(0).current_chapter.high_quality;
      const chapters = document.querySelectorAll('.v-btn--router');
      return {
        title: document.querySelector('title')?.textContent?.trim(),
        series: document.querySelector('.v-breadcrumbs li:nth-child(2) + a')?.getAttribute('href'),
        pages: images.length,
        prev: chapters[0]?.getAttribute('href'),
        next: chapters[1]?.getAttribute('href'),
        listImages: images,
      };
    },
  };

  const sites = [
    asura,
    batoto,
    bilibilicomics,
    comick,
    dynastyscans,
    flamecomics,
    ikigai,
    kumanga,
    leercapitulo,
    lhtranslation,
    localhost,
    m440,
    mangabuddy,
    mangademon,
    mangadex,
    mangafox,
    mangago,
    mangahub,
    mangakakalot,
    mangaoni,
    mangapark,
    mangareader,
    mangatoon,
    manhwaweb,
    mgeko,
    nineanime,
    olympusbiblioteca,
    readcomicsonline,
    reaperscans,
    tmofans,
    webnovel,
    webtoons,
    weebcentral,
    // wpmanga, // Archived
    vortexscans,
    zeroscans,
    mangastreamwp,
    // Must be at the end because is a generic check
    foolslide,
    // Must be at the end because is a generic check
    madarawp,
    // Must be at the end because is a generic check
  ];

  start(sites).catch(logScript);
})();
