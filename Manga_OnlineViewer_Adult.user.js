// ==UserScript==
// @name  Manga OnlineViewer Adult
// @description  Extension for Manga OnlineViewer for Adult sites mainly Hentai: Fakku, HBrowse, Hentai2Read and Doujin-moe Hentai sites.
// @version 01.06
// @date 2017-06-10
// @author  Tago
// @namespace https://github.com/TagoDR
// @require https://code.jquery.com/jquery-latest.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.3/jszip.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/AlertifyJS/1.10.0/alertify.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/jscolor/2.0.4/jscolor.min.js
// @require https://cdn.rawgit.com/TagoDR/MangaOnlineViewer/2ff59bd9/Manga_OnlineViewer.user.js
// @updateURL https://github.com/TagoDR/MangaOnlineViewer/raw/master/Manga_OnlineViewer_Adult.user.js
// @downloadURL https://github.com/TagoDR/MangaOnlineViewer/raw/master/Manga_OnlineViewer_Adult.user.js
// @grant  GM_getValue
// @grant  GM_setValue
// @grant  GM_xmlhttpRequest
// @include /https?://(www.)?(luscious.net|wondersluts.com)/c/.+/
// @include /https?://exhentai.org/s/.+/.+/
// @include /https?://(g.)?e-hentai.org/s/.+/.+/
// @include /https?://(www.)?mangafap.com/image/.+/
// @include /https?://(www.)?pururin.us/(view|read)/.+/.+/.+/
// @include /https?://(www.)?hentai4manga.com/hentai_manga/.+/.+/
// @include /https?://(www.)?doujinshihentai.com/manga/index.php/.+/
// @include /https?://hitomi.la/reader/.+/
// @include /https?://(www.)?nhentai.net/g/.+/.+/
// @include /https?://(www.)?fakku.net/.+/.+/
// @include /https?://(www.)?hbrowse.com/.+/
// @include /https?://(www.)?doujins.com/.+/
// @include /https?://(www.)?(hentai2read|hentaihere).com/.+/.+//
// @include /https?://(www.)?tsumino.com/Read/View/.+(/.+)?/
// @history 01.00 It Begins
// @history 01.01 Fixed e-hentai
// @history 01.02 Fixed Pururin
// @history 01.03 Fixed Requirements
// @history 01.04 Fixed Typo
// @history 01.05 Added Tsumino
// @history 01.06 Fixed doujinshihentai
// ==/UserScript==
(function (W) {
    var m = [
        // == Fakku ============================================================================================================================
        {
            name: "Fakku",
            url: /fakku.net/,
            run: function() {
                return {
                    title: $(".chapter a:eq(1)").text().trim(),
                    series: $("a.a-series-title:first").attr("href"),
                    quant: $(".drop option:last").val(),
                    prev: "#",
                    next: "#",
                    data: $("#thumbs img, .current-page").attr("src").replace("thumbs", "images").replace(/[0-9]+(\.thumb)?\.jpg$/, ""),
                    page: function(i, addImg, addAltImg) {
                        var str = '' + i;
                        while (str.length < 3) str = '0' + str;
                        addImg(i, this.data + str + ".jpg");
                    }
                };
            }
        },
        // == HBrowser =========================================================================================================================
        {
            name: "HBrowser",
            url: /hbrowse/,
            run: function() {
                return {
                    title: $('.listTable td.listLong:first').text().trim(),
                    series: location.href.match(/.+\/[0-9]+\//),
                    quant: $('td.pageList a, td.pageList strong').length - 1,
                    prev: $("#chapters + table a.listLink").eq($("#chapters + table a.listLink").index($("#chapters + table a.listLink[href='" + location.href + "']")) - 1).attr("href"),
                    next: $("#chapters + table a.listLink").eq($("#chapters + table a.listLink").index($("#chapters + table a.listLink[href='" + location.href + "']")) + 1).attr("href"),
                    url: function(i) {
                        var str = '' + i;
                        while (str.length < 4) str = '0' + str;
                        return location.href + (location.href.slice(-1) == "/" ? "" : "/") + str;
                    },
                    img: 'td.pageImage a img',
                    before: function() {
                        $('html > head').append($('<style>#main a:visited, #pageMain a:visited { color: darkred !important; }</style>'));
                    }
                };
            }
        },
        // == Doujin-Moe Non-members ===========================================================================================================
        {
            name: "DoujinMoeNM",
            url: /doujins.com/,
            run: function() {
                return {
                    title: $(".title").text(),
                    series: $(".title a").eq(-2).attr("href"),
                    quant: $("#gallery > :not(.thumbs)").length,
                    prev: "#",
                    next: "#",
                    data: $("#gallery > djm:not(.thumbs)"),
                    page: function(i, addImg, addAltImg) {
                        addImg(i, this.data.eq(i - 1).attr("file").replace("static2", "static"));
                    }
                };
            }
        },
        // == Luscious =========================================================================================================================
        {
            name: "Luscious",
            url: /(luscious|wondersluts)/,
            run: function() {
                return {
                    title: $("#main .center h1:first").text().split("|")[0].trim(),
                    series: "#",
                    quant: $("#pj_no_pictures").html().trim(),
                    prev: "#",
                    next: "#",
                    url: location.pathname,
                    page: function(i, addImg, addAltImg) {
                        var self = this;
                        $.ajax({
                            type: "GET",
                            url: self.url,
                            dataType: "html",
                            async: false,
                            success: function(html) {
                                addImg(i, $(html).find("img#single_picture").attr("src"));
                                self.url = $(html).find("#next").attr("href");
                            }
                        });
                    }
                };
            }
        },
        // == MangaFap =========================================================================================================================
        {
            name: "MangaFap",
            url: /mangafap/,
            run: function() {
                return {
                    title: $(".breadcrumb a:nth(2)").text().trim(),
                    series: $(".breadcrumb a:nth(2)").attr("href"),
                    quant: $("select[name='menu'] option").length,
                    prev: "#",
                    next: "#",
                    data: $("select[name='menu'] option"),
                    img: "img#p"
                };
            }
        },
        // == ExHentai =========================================================================================================================
        {
            name: "ExHentai",
            url: /(exhentai|e-hentai)/,
            run: function() {
                return {
                    title: $("#il h1").text().trim(),
                    series: $("div#i5 div.sb a").attr("href"),
                    quant: $(".sn div span:last").text(),
                    prev: "#",
                    next: "#",
                    url: location.href,
                    timer: 3000,
                    page: function(i, addImg, addAltImg) {
                        var self = this;
                        $.ajax({
                            type: "GET",
                            url: self.url,
                            dataType: "html",
                            async: false,
                            success: function(html) {
                                var ref = $(html).find("div#i7 a, #img");
                                var src = ref.attr(ref.is("img") ? "src" : "href");
                                addImg(i, src);
                                addAltImg(i, src + " ?nl=1");
                                self.url = $(html).find("#img").parent().attr("href");
                            }
                        });
                    }
                };
            }
        },
        // == Pururin ==========================================================================================================================
        {
            name: "Pururin",
            url: /pururin/,
            run: function() {
                return {
                    title: $(".title").text().trim(),
                    series: $(".control a:nth(3)").attr("href"),
                    quant: $(".form-control option").length,
                    prev: "#",
                    next: "#",
                    data: $(".images-holder img").attr("src"),
                    page: function(i, addImg, addAltImg) {
                        console.log("Page " + i);
                        addImg(i, this.data.replace(/\/[0-9]+\./, "/" + i + "."));
                    }
                };
            }
        },
        // == hentai4manga =====================================================================================================================
        {
            name: "hentai4manga",
            url: /hentai4manga/,
            run: function() {
                return {
                    title: $(".category-label").text().trim(),
                    series: location.href.replace(/\/\d+\//, '/'),
                    quant: $('select#sl option').size(),
                    prev: "#",
                    next: "#",
                    url: function(i) {
                        return "../" + i + "/";
                    },
                    img: '#textboxContent img'
                };
            }
        },
        // == DoujinshiHentai ==================================================================================================================
        {
            name: "DoujinshiHentai",
            url: /doujinshihentai/,
            run: function() {
                return {
                    title: $(".category-label").text().trim(),
                    series: "http://doujinshihentai.com/series.html",
                    quant: $('#page_last').attr("href").match(/[0-9]+\./),
                    prev: "#",
                    next: "#",
                    data: location.href,
                    url: function(i) {
                        var str = '' + i;
                        while (str.length < 3) str = '0' + str;
                        return this.data.replace("001.", str + ".");
                    },
                    img: '.weatimages_bigimage'
                };
            }
        },
        // == hitomi ===========================================================================================================================
        {
            name: "hitomi",
            url: /hitomi.la/,
            run: function() {
                return {
                    title: $("title").text().replace("| Hitomi.la", "").trim(),
                    series: $(".brand").attr("href"),
                    quant: $("#single-page-select option").length,
                    prev: "#",
                    next: "#",
                    data: $(".img-url"),
                    key: $("#comicImages img").attr("src").split(".")[0],
                    page: function(i, addImg, addAltImg) {
                        console.log("Page " + i);
                        addImg(i, this.data.eq(i - 1).text().replace("//g", this.key));
                    }
                };
            }
        },
        // == Hentai2Read ======================================================================================================================
        {
            name: "Hentai2Read",
            url: /hentai2read/,
            run: function() {
                return {
                    title: $(".breadcrumb a:nth(2)").text().trim(),
                    series: $(".breadcrumb a:nth(2)").attr("href"),
                    quant: $(".pageDropdown:first li").length,
                    prev: "#",
                    next: "#",
                    url: function(i) {
                        var pathname = location.pathname.split('/');
                        return "/" + pathname[1] + "/" + pathname[2] + "/" + i + "/";
                    },
                    img: "img#arf-reader"
                };
            }
        },
        // == HentaIHere =======================================================================================================================
        {
            name: "HentaIHere",
            url: /hentaihere/,
            run: function() {
                return {
                    title: $(".breadcrumb a:nth(2)").text().trim(),
                    series: $(".breadcrumb a:nth(2)").attr("href"),
                    quant: $("#pageDropdown li").length,
                    prev: "#",
                    next: "#",
                    data: $("#reader-content img").attr("src"),
                    page: function(i, addImg, addAltImg) {
                        var str = '' + i;
                        var size = this.data.match(/([0-9]+)\..+/)[1].length;
                        var ext = this.data.match(/[0-9]+(\..+)/)[1];
                        while (str.length < size) str = '0' + str;
                        addImg(i, this.data.replace(/[0-9]+.jpg/, str + ext));
                    }
                };
            }
        },
        // == nHentai ==========================================================================================================================
        {
            name: "nHentai",
            url: /nhentai/,
            run: function() {
                return {
                    title: $('title').text().split('- Page')[0].trim(),
                    series: $("div#page-container div a").attr("href"),
                    quant: $(".num-pages:first").html(),
                    prev: "#",
                    next: "#",
                    url: function(i) {
                        return "../" + i + "/";
                    },
                    img: '#page-container img'
                };
            }
        },
        // == Tsumino =======================================================================================================================
        {
            name: "Tsumino",
            url: /tsumino/,
			waitVar: "reader_page_locs",
            run: function() {
                return {
                    title: $("title").text().trim().match(/(.+: Read )(.+)/)[2],
                    series: $("#backToIndex").next("a").attr("href"),
                    quant: $("h1").text().match(/[0-9]+$/),
                    prev: "#",
                    next: "#",
					data: W.reader_page_locs.map(function(x){
						return W.reader_baseobj_url + "?name=" + encodeURIComponent(x);
					}),
                    page: function(i, addImg, addAltImg) {
                        addImg(i, this.data[i-1]);
                    }
                };
            }
        }
    ];
    W.MangaOnlineViewer.setSites(m);
})((typeof unsafeWindow === 'undefined') ? window : unsafeWindow);
