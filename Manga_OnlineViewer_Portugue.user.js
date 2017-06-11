// ==UserScript==
// @name  Manga OnlineViewer Portugues
// @description  Extension for Manga OnlineViewer for sites in Portuguese -- Extenção do Manga OnlineViewer para sites de Manga em Portugues
// @version 1.02
// @date 2015-02-19
// @author  Tago
// @namespace https://github.com/TagoDR
// @require https://code.jquery.com/jquery-latest.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.3/jszip.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/AlertifyJS/1.10.0/alertify.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/jscolor/2.0.4/jscolor.min.js
// @require https://cdn.rawgit.com/TagoDR/MangaOnlineViewer/2ff59bd9/Manga_OnlineViewer.user.js
// @grant  GM_getValue
// @grant  GM_setValue
// @include /http://www.maxmangas.com.br/.+/[0-9]+/
// @include /http://br.mangahost.com/manga/.+/[0-9]+/
// @include /http://.*rebmanga\.com/.+/.+//
// @include /http://unionmangas.com.br/leitor/.+/
// @history 1.00 It Begins
// @history 1.01 Adicionado UnionMangas
// @history 1.02 Prerequisitos atualizados
// ==/UserScript==
//OnlineViewer
(function (W) {
    var m = [
// == MaxMangas ===================================================================================================================================
        {
            name: "MaxMangas",
            url: /maxmangas/,
            run: function () {
                return {
                    title: $(".wpm_pag h1").text().trim(),
                    series: $("h1.ttl a").attr("href"),
                    quant: $("select.cbo_wpm_pag:first option:last").html(),
                    prev: $(".cbo_wpm_chp").attr("onchange").replace(/location.href=\'/, "").replace(/\'.+/, $(".cbo_wpm_chp option:selected").next().val()),
                    next: $(".cbo_wpm_chp").attr("onchange").replace(/location.href=\'/, "").replace(/\'.+/, $(".cbo_wpm_chp option:selected").prev().val()),
                    url: function (i) {
                        var pathname = window.location.pathname.split('/');
                        return "/" + pathname[1] + "/" + pathname[2] + "/" + i + "/";
                    },
                    img: "img.manga-page , .prw > a img, .prw a img"
                };
            }
        },
// == UnionMangas ===================================================================================================================================
        {
            name: "UnionMangas",
            url: /unionmangas/,
            run: function () {
                return {
                    title: $("#topo h1 a ").text(),
                    series: $("#topo h1 a ").attr("href"),
                    quant: $(".selectPage:first option").length,
                    prev: $("#cap_manga1 option:selected").prev().val(),
                    next: $("#cap_manga1 option:selected").next().val(),
					data: $(".item img.real"),
                    pages: function (addImg, addAltImg) {
                        for (var i = 1; i <= this.quant; i++) {
                            console.log("Page " + i);
                            addImg(i, $(this.data[i-1]).attr("src"));
                        }
                    }
                };
            }
        },
// == MangaHost ===================================================================================================================================
        {
            name: "MangaHost",
            url: /mangahost/,
            run: function () {
                return {
                    title: $(".breadcrumb li:nth(3)").text().trim(),
                    series: $(".breadcrumb li:nth(2) a").attr("href"),
                    quant: $(".viewerPage:first option:last").html(),
                    prev: $(".viewerChapter:first option:selected").next().val(),
                    next: $(".viewerChapter:first option:selected").prev().val(),
                    img: '.image-content img'
                };
            }
        },
// == RebManga ==================================================================================================================================
        {
            name: "RebManga",
            url: /rebmanga/,
            run: function () {
                return {
                    title: $("h1.ttl").text().trim(),
                    series: $("h1.ttl a").attr("href"),
                    quant: $("select.cbo_wpm_pag:first option:last").html(),
                    prev: $(".cbo_wpm_chp").attr("onchange").replace(/location.href=\'/, "").replace(/\'.+/, $(".cbo_wpm_chp option:selected").next().val()),
                    next: $(".cbo_wpm_chp").attr("onchange").replace(/location.href=\'/, "").replace(/\'.+/, $(".cbo_wpm_chp option:selected").prev().val()),
                    url: function (i) {
                        var pathname = window.location.pathname.split('/');
                        return decodeURIComponent("/" + pathname[1] + "/" + pathname[2] + "/" + i + "/");
                    },
					page: function(i, addImg, addAltImg){
						 var pathname = window.location.pathname.split('/');
                         var url = decodeURIComponent("/" + pathname[1] + "/" + pathname[2] + "/" + i + "/");
						 var xhReq = new XMLHttpRequest();
						 xhReq.open("GET", this.url(i), false);
						  xhReq.send(null);
						 var html = xhReq.responseText;
						 addImg(i,  $(html).find(this.img).attr('src'));
					},
                    img: " .prw a img"
                };
            }
        }
    ];	
    W.MangaOnlineViewer.setSites(m);
})((typeof unsafeWindow === 'undefined') ? window : unsafeWindow);
