// ==UserScript==
// @name Manga OnlineViewer Adult
// @author Tago
// @updateURL https://github.com/TagoDR/MangaOnlineViewer/raw/master/Manga_OnlineViewer_Adult.meta.js
// @downloadURL https://github.com/TagoDR/MangaOnlineViewer/raw/master/Manga_OnlineViewer_Adult.user.js
// @namespace https://github.com/TagoDR
// @description Shows all pages at once in online view for these sites: 8Muses, DoujinMoeNM, ExHentai,e-Hentai, HBrowser, Hentai2Read, HentaiFox, HentaIHere, hitomi, Luscious,Wondersluts, nHentai, Pururin, Simply-Hentai, Tsumino, HentaiCafe, PornComixOnline,xyzcomics, SuperHentais, 9Hentai, ASMHentai, MultPorn, Hentai Comic, HentaiNexus
// @version 15.01.0
// @license MIT
// @date 2019-11-04
// @grant GM_getValue
// @grant GM_setValue
// @grant GM_listValues
// @grant GM_deleteValue
// @grant GM_xmlhttpRequest
// @connect *
// @require https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/jszip/3.2.2/jszip.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.js
// @require https://cdn.jsdelivr.net/npm/sweetalert2@8.18.0/dist/sweetalert2.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/jscolor/2.0.4/jscolor.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/color-scheme/1.0.1/color-scheme.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/ramda/0.26.1/ramda.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/jquery-scrollTo/2.1.2/jquery.scrollTo.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/unveil2/2.0.8/jquery.unveil2.min.js
// @include /https?:\/\/(www.)?8muses.com\/comics\/.+\/[0-9]+/
// @include /https?:\/\/(www.)?doujins.com\/.+/
// @include /https?:\/\/(g.)?(exhentai|e-hentai).org\/g\/.+\/.+/
// @include /https?:\/\/(www.)?hbrowse.com\/.+/
// @include /https?:\/\/(www.)?hentai2read.com\/[^/]+\/[0-9]+(.[0-9]+)?\//
// @include /https?:\/\/(www.)?hentaifox.com\/g\/.+/
// @include /https?:\/\/(www.)?hentaihere.com\/.+\/.+\//
// @include /https?:\/\/hitomi.la\/reader\/.+/
// @include /https?:\/\/(www.)?(luscious.net|wondersluts.com)\/pictures\/.+/
// @include /https?:\/\/(www.)?nhentai.net\/g\/.+\/.+/
// @include /https?:\/\/(www.)?pururin.io\/(view|read)\/.+\/.+\/.+/
// @include /https?:\/\/.*simply-hentai.com\/.+\/page\/.+/
// @include /https?:\/\/(www.)?tsumino.com\/Read\/Index\/[0-9]+\?page=.+/
// @include /https?:\/\/hentai.cafe\/manga\/read\/.*\/en\/0\/1\/(page\/.+)?/
// @include /https?:\/\/(www.)?(porncomixonline.net|xyzcomics.com)\/.+/
// @include /https?:\/\/(www.)?superhentais.com\/.+\/.+\/[0-9]+/
// @include /https?:\/\/(www.)?9hentai.com\/g\/.+/
// @include /https?:\/\/(www.)?asmhentai.com\/gallery\/.+/
// @include /https?:\/\/(www.)?multporn.net\/(comics|hentai_manga)\/.+/
// @include /https?:\/\/(www.)?(hentai|porn)-.+.com\/image\/.+/
// @include /https?:\/\/(www.)?hentainexus.com\/read\/[0-9]+\/[0-9]+/
// ==/UserScript==