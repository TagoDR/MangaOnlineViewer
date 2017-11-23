// ==UserScript==
// @name Manga OnlineViewer Adult
// @author Tago
// @updateURL https://github.com/TagoDR/MangaOnlineViewer/raw/master/Manga_OnlineViewer_Adult.meta.js
// @downloadURL https://github.com/TagoDR/MangaOnlineViewer/raw/master/Manga_OnlineViewer_Adult.user.js
// @namespace https://github.com/TagoDR
// @description Shows all pages at once in online view for these sites: DoujinMoeNM, ExHentai,e-Hentai, HBrowser, Hentai2Read, hentaifox, HentaIHere, hitomi, Luscious,Wondersluts, nHentai, Pururin, Simply-Hentai, Tsumino
// @version 13.20.1
// @date 2017-11-23
// @grant GM_getValue
// @grant GM_setValue
// @grant GM_listValues
// @grant GM_deleteValue
// @grant GM_xmlhttpRequest
// @connect *
// @require https://code.jquery.com/jquery-latest.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.3/jszip.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/6.10.1/sweetalert2.all.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/jscolor/2.0.4/jscolor.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/color-scheme/1.0.0/color-scheme.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/ramda/0.24.1/ramda.min.js
// @include /https?:\/\/(www.)?doujins.com\/.+/
// @include /https?:\/\/(g.)?(exhentai|e-hentai).org\/g\/.+\/.+/
// @include /https?:\/\/(www.)?hbrowse.com\/.+/
// @include /https?:\/\/(www.)?hentai2read.com\/[^\/]+\/[0-9]+\//
// @include /https?:\/\/(www.)?hentaifox.com\/g\/.+/
// @include /https?:\/\/(www.)?hentaihere.com\/.+\/.+\//
// @include /https?:\/\/hitomi.la\/reader\/.+/
// @include /https?:\/\/(www.)?(luscious.net|wondersluts.com)\/c\/.+/
// @include /https?:\/\/(www.)?nhentai.net\/g\/.+\/.+/
// @include /https?:\/\/(www.)?pururin.us\/(view|read)\/.+\/.+\/.+/
// @include /https?:\/\/.*simply-hentai.com\/.+\/page\/.+/
// @include /https?:\/\/(www.)?tsumino.com\/Read\/View\/.+(\/.+)?/
// ==/UserScript==