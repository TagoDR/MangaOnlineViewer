// ==UserScript==
// @name Manga OnlineViewer Adult
// @author Tago
// @updateURL https://github.com/TagoDR/MangaOnlineViewer/raw/master/Manga_OnlineViewer_Adult.meta.js
// @downloadURL https://github.com/TagoDR/MangaOnlineViewer/raw/master/Manga_OnlineViewer_Adult.user.js
// @namespace https://github.com/TagoDR
// @description Shows all pages at once in online view for these sites: 8Muses, DoujinMoeNM, ExHentai,e-Hentai, HBrowser, Hentai2Read, hentaifox, HentaIHere, hitomi, Luscious,Wondersluts, nHentai, Pururin, Simply-Hentai, Tsumino, HentaiCafe, PornComixOnline,xyzcomics, SuperHentais
// @version 13.71.0
// @license MIT
// @date 2019-03-04
// @grant GM_getValue
// @grant GM_setValue
// @grant GM_listValues
// @grant GM_deleteValue
// @grant GM_xmlhttpRequest
// @connect *
// @require https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/jquery-scrollTo/2.1.2/jquery.scrollTo.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.5/jszip.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/6.11.5/sweetalert2.all.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/jscolor/2.0.4/jscolor.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/color-scheme/1.0.0/color-scheme.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/ramda/0.24.1/ramda.min.js
// @include /https?:\/\/(www.)?8muses.com\/comics\/.+\/[0-9]+/
// @include /https?:\/\/(www.)?doujins.com\/.+/
// @include /https?:\/\/(g.)?(exhentai|e-hentai).org\/g\/.+\/.+/
// @include /https?:\/\/(www.)?hbrowse.com\/.+/
// @include /https?:\/\/(www.)?hentai2read.com\/[^\/]+\/[0-9]+\//
// @include /https?:\/\/(www.)?hentaifox.com\/g\/.+/
// @include /https?:\/\/(www.)?hentaihere.com\/.+\/.+\//
// @include /https?:\/\/hitomi.la\/reader\/.+/
// @include /https?:\/\/(www.)?(luscious.net|wondersluts.com)\/pictures\/.+/
// @include /https?:\/\/(www.)?nhentai.net\/g\/.+\/.+/
// @include /https?:\/\/(www.)?pururin.io\/(view|read)\/.+\/.+\/.+/
// @include /https?:\/\/.*simply-hentai.com\/.+\/page\/.+/
// @include /https?:\/\/(www.)?tsumino.com\/Read\/View\/.+(\/.+)?/
// @include /https?:\/\/hentai.cafe\/manga\/read\/.*\/en\/0\/1\/(page\/.+)?/
// @include /https?:\/\/(www.)?(porncomixonline.net|xyzcomics.com)\/.+/
// @include /https?:\/\/(www.)?superhentais.com\/(manga|hq)\/.+\/.+/
// ==/UserScript==