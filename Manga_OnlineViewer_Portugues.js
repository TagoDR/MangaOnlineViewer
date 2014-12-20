// ==UserScript==
// @name  Manga OnlineViewer Portugues
// @description  Extencion for  Manga OnlineViewer for ste in Portuguese
// @version 1.00
// @date 2014-08-13
// @author  Tago
// @namespace https://greasyfork.org/users/1849-tago
// @require https://greasyfork.org/scripts/1319-manga-onlineviewer/code/Manga%20OnlineViewer.user.js
// @grant  GM_getValue
// @grant  GM_setValue
// @include /http://br.mangahost.com/manga/.+/.+/
// @history 1.00 It Begins
// ==/UserScript==
//OnlineViewer
(function (){
    $(document).ready(function () {
		mConsole("Identifying Site");
        // Manga Sites
        OnlineViewer(/br\.mangahost/, MangaHost);

    });
    // == MangaHost ===================================================================================================================================
    var MangaHost = function () {
		mConsole("Loading MangaHost");
        return {
            title: $(".breadcrumb span[itemprop=title]:last").html(),
            series: $(".breadcrumb span[itemprop=title]:nth(2)").parent().attr("href"),
            quant: $(".viewerPage option:last").html(),
            prev: $(".viewerChapter:first option:selected").next().val(),
            next: $(".viewerChapter:first option:selected").prev().val(),
            img: "#imageWrapper img"
        };
    }
})();
