// ==UserScript==
// @name  Manga OnlineViewer
// @description  Shows all pages at once in online view. MangaFox, MangaReader/MangaPanda, MangaStream, MangaInn, MangaHere, MangaShare, Batoto, MangaDevil, MangaCow, MangaChapter, 7manga, MangaPirate.net and MangaBee/OneManga.me manga sites. Fakku, HBrowse, Hentai2Read and Doujin-moe Hentai sites.
// @version 12.01
// @date 2017-04-14
// @author  Tago
// @namespace https://github.com/TagoDR
// @require https://code.jquery.com/jquery-latest.min.js
// @require https://raw.githubusercontent.com/Stuk/jszip/master/dist/jszip.min.js
// @grant  GM_getValue
// @grant  GM_setValue
// @grant  GM_xmlhttpRequest
// @include /https?://(www.)?mangafox.me/manga/.+/.+//
// @include /https?://(www.)?(mangareader|mangapanda)(.net|.com)/.+/.+/
// @include /https?://(www.)?(mangastream|readms)(.net|.com)/r.*/.+/
// @include /https?://(www.)?mangainn.net/manga/chapter/.+/
// @include /https?://(www.)?mangahere.co/manga/.+/.+/
// @include /https?://(www.)?bato.to/reader.*/
// @include /https?://(www.)?(mangaspy|mangamap).com/.+/[0-9]+/
// @include /https?://(www.)?mangadoom.co/.+/[0-9]+/
// @include /https?://(www.)?mangamint.com/[a-z\-]+[0-9]+/
// @include /https?://(www.)?eatmanga.com/Manga-Scan/.+/.+//
// @include /https?://.*senmanga.com/.+/.+\/?/
// @include /https?://manga.lyght.net/series/.+\.html/
// @include /https?://(www.)?dynasty-scans.com/chapters/.+/
// @include /https?://(www.)?tenmanga.com/chapter/.+/
// @include /https?://(www.)?mangapark.me/manga/.+/.+/
// @include /https?://(www.)?mangago.me/read-manga/.+/.+/
// @include /https?://(www.)?ninemanga.com/chapter/.+/.+\.html/
// @include /https?://(www.)?mangatown.com/manga/.+/.+/
// @include /https?://view.thespectrum.net/.+/
// @include /https?://(www.)?(luscious.net|wondersluts.com)/c/.+/
// @include /https?://exhentai.org/s/.+/.+/
// @include /https?://g.e-hentai.org/s/.+/.+/
// @include /https?://(www.)?mangafap.com/image/.+/
// @include /https?://(www.)?pururin.us/view/.+/.+/.+/
// @include /https?://(www.)?hentai4manga.com/hentai_manga/.+/.+/
// @include /https?://(www.)?doujinshihentai.com/manga/index.php/.+/
// @include /https?://hitomi.la/reader/.+/
// @include /https?://(www.)?nhentai.net/g/.+/.+/
// @include /https?://(www.)?fakku.net/.+/.+/
// @include /https?://(www.)?hbrowse.com/.+/
// @include /https?://(www.)?doujins.com/.+/
// @include /https?://(www.)?(hentai2read|hentaihere).com/.+/.+//
// @include /.+/read/.+/
// @history 12.00 Full Review
// @history 12.01 Added HentaIhere
// ==/UserScript==
console.log("Loading Manga OnlineViewer");
$.noConflict();
(function ($) {
    $.MangaOnlineViewer = (function () {
        function getValueGM(name,defaultValue){
            try{
                return GM_getValue(name, defaultValue);
            } catch (e){
                console.log(e);
                return defaultValue;
            }
        }
        function setValueGM(name,value){
            try{
                GM_setValue(name, value);
            } catch (e){
                console.log(e);
            }
        }
        var cache = {};
        try{
            cache ={
                zip: new JSZip(),
                downloadFiles: 0,
                Data: {}
            };
        } catch (e){
                console.log(e);
        }
        var sites = [];
        var settings = {
            Theme: getValueGM("MangaTheme", "Light"),
            FitWidthIfOversized: getValueGM("MangaFitWidthIfOversized", "true"),
            ShowThumbnails: getValueGM("MangaShowThumbnails", "true"),
            DownloadZip: getValueGM("MangaDownloadZip", "false"),
            Timer: getValueGM("MangaTimer", 1000),
            Zoom: getValueGM("MangaZoom", 100)
        };
        //Icons in Base64 format
        var icon = {
            enlage: "data:image/png;base64,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",
            reduce: "data:image/png;base64,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%3D%3D",
            restore: "data:image/png;base64,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%3D",
            fitwidth: "data:image/png;base64,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",
            reload: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAC70lEQVR4XrXQa0xTdxgG8Pd/es6x2JbL2iINtCQdAkvAuOAwBMKMfiBZJGWMYQIx68plwwEbUfACeIlGyJbQVYMxsjGGZkHDIFZHIBurboOQESgLldaISMu6cmprSi/0cnp6TL8IiSb9tN+H5+OTJw/8r/rHVgCgAr7qmZKoLown7y3rgiMnf4aY2q/roeP6Aio/9RtZc/F33kedMw0lx3WnDzcP88pbhmE7DLb5dcYKc4+cmG2DfXva5D5qecFe0JuD3Wa7T+XYxOp8RNIhQZIfK+8Yeb1gdMEFhDgR1xoDBxxhUuOkUY+XxVq9GPnFBmLzvDhK93B31lu58sxnkAOl6gmIwqNx1eCDD3P2waUHf+Q7gsEOGoWkDArq6YjfhyfFZ0X4vEyaA5gHMfsZv/f9t+z9T6hwLvNqgWnZAicmx/mrNluR3W7+208ZVLRtXpnEed6YmCn6E0Q7vGGOf3bTtXbNaTZO25aMEceKCV4p674Dn3yvEyi6bhfkHW0XjrIsFKon4NPhxYT83qmz0vPa07tqr7ybuL8qLq1uEF4jEUuh9KQaiqubUXF1E6hnLaCZ+5dT1TsWv+ezb8QJB1VkG8tCTDcWKfjBQOHKSUpeol1TFfb99fGe1qtEkfoefD4wB19PPI1v/k4nrzg3QNRotFsnqkaWgAcvsIePPRlOGi9x0JjCFwplRdxhdXZKKpEpyyVJMk5KebwKT4ixUVbTEAMZsHWi1Q5GysE1WV21z9b8lxxr3kN+q18IG/wD/3l3n11YYTSrtsCPLqe7aNNpX/yyryvkWP4HolA0pGf6gSWmMCxYUYloUTfQWDoKM4AAsRiLIlwcC6UIgrNCZLnsNmoncZ4ofP+mZqsgStY0CCzji8ciu08hmtfIBNZXI3TQirGEm2AC8wJ2/Zc485AxCHxGP6+DN5LV3gJZ3VB2uuruT2mV3yoTi6tTxIX1wuR3PiDeazMACTFIlC2QWnOOk1rVWSApOyaXKBoglpfB+En628ogAgAAAABJRU5ErkJggg%3D%3D",
            zoomin: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACoUlEQVQ4jZXQu2tTYRjH8e9535OTmDQxaZuYU6NNi9a7CaiQSczmWBGKm0WHLkL9DxTETSkF0YqD1kEUvCJI6yBxUiTVqPUKLa1JJfZiehLTkzQ3h1htQBB/08sLz+e5KKzKmXMXgk1O16lyuRJ0N7cemJv9lpifn0/ksrnhK4NnY/wlcuUxcPn6gKPJeVNv2xhuD24OtrT4aXK1+NfYHeHFbLa3o2uXe/zls9G/AucvXRtwujwnd+/ey7auLvR1PrwtHvR1Xta3BViqOjCM75HOLduD7149f9AAXBy+Ha5Uqtf27Y3Q2R7AqqlIqSAVBVUKbFYNn7eV5HdBcWku3NG14+mHxIupFUDMpJL9fn0D7YH1lCoK+QKUynD07CRCAaFAs8vKntBOmv2bsdrs/asnEJUq4TZdR5UKDiustYMUUDRzmMtQAwTgb3bh14NYNK17NaDmzULYscaGFPXCI6cnKZo5CmaOQ/0jFMwsDy/1oKoKrR4XFovWcEQ19yM/ZWSNoCo3IBW4faYTgP3HRnhy5SDVGmTy9VVUKbBqlgZAmEtLicmpaaSoISWovyYpmFmEAEX582eaBppFJhqAUml5MP7qNV/Ts6gSpKx3G7vVg1CgWoVSBbI/8mTmviAUBhuAu8MXYkZm4f6Ne4+YXcjULy9AAWo1MJdhYdHg8cgdPr2Nk/oYb5hAAmzaFho1DGPr64+TW/PFMlbNSiZXYN4wmfgyw/j4Sz6/f4PHViWdTh+JRqOj8Xg8DfVGv9Nz/GSv2+3pd3s84SanE01KqrVKorxcHNzZ4SOdTl+NxWIUi8VFXdejQ0NDiQbgX+nr6+sNhUK/EbvdHpX/LvuTsbGxRCAQmI5EIt2pVMqWTCYP/xewgvh8vmmv19s9MTFx4ifGBwN4Ure0EAAAAABJRU5ErkJggg%3D%3D",
            zoomout: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAClElEQVQ4jZWQTUsbURiFz9w7mYmOSfNhYkZjjVJTba0J1EKW8R8IBXEpdOGmoP+gBemuRQJSCV1Uuyhd2C8KhXSVrlqK0bGkrS4MamJNNRonMZmJSSZdxFgHBOmBy3u5cJ733MPgnKYfz3paTOYHlUrVY7G1Bvf3/kiZTEbK5/ILz0KPorhAtHGZCb+YEVpMr8T2q/4uT6/HbnehxWx3NTUJ/qNcbrzbe8sSX/4SuRDwZG5+xmS2Tg0ODqHf64XY5oTDboXY5kBHuxtFTYAsHwZ6rt/w/Fj5+l4HeLqw6K9Wtfk7QwH0dLnBcywoZUAZBiwlMPIcnI5WJA8JSsV9f7f35udf0rfNBoDspJKTLrETXe4OlKsMCipQrgAMA5DTYzPzuO0bgM3VC97YPHk+Aalq8LeLIljKQOCBK80AJUChBCgnQA0AAeCymeESPTBw3Mh5AFtQVL/QZAQldePYwwRKSh6qkkdJOYaq5PBhbhQsy6DVaobBwOlKZPPHhU05J3tY2gnKAIvTPQAArQZoWn1mC/WvsJSA5ww6AFGKRSmxuQVKaqAUYE+TUAYgpN5F401RZHAGKukA5fJJaGllFb/Te2ApQOlpeaQ+NQ0oV4HccQHZ/W0QBiEd4M3CbFTOHrx7+fYj9g6yZ2YGQK1WL/LgSManyGusx5eQWlvSJaAAcK3fF5FluW91LdFXKFXAczyyeRUZWUFiewfx+DLWf36Hjdewu7s7FgwGI7FYLA3UF51p9N7UuMVinbRYrX6TyQQDpdBqValyUgoNdDuRTqefR6NRqKp6JIricDgclnSAyzQxMTHu8/nOIIIgDNPLbf8Ui8Ukt9u9FQgERlKplDGZTN79L0AD4nQ6txwOx8jGxsb9vyYg/nmG24G2AAAAAElFTkSuQmCC",
            zoomrestore: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACsUlEQVR4Xp2SW0iTYRjH/5/fYdtnTc0jrhPW0Dwt7HC3mZBeKF1pbVoO26V3RkK3URcqiLBADRxEXZR2o9LuDAaKeSHOw1ZuRdBhTs3cNL9tbt/29m6gqASBP/jB8168fx6e50FHR0eb1Wp9PjAwMJS0v79/aHBw0NbV1fWiurr6Av5Hc3PzbXKAQCBAnE4nsdvtpLe3N2Qyme7W19fnVVVV8fgXra2t9wglFouR5eVl4nA4SDAYJHvE4/HE1OSkq6WlxczzfAaOkMayrAKUiYn3cLncMBgM8K1vYnbxIz55v2B6doEprdSV9XR399TV1d0CIBwKoChBYdk01NbehNv7FcHtPziVnQ3CKxCJxjDhmMYJdVa+xdL2QBTFs4cCqFw4HIbX+xlqtRo//GvIzc9HFDx2EgK2IMLj/42ZuXkY9IZiGlB8NECIRqNITxeRhBMU8EsEHzeicK2F8TPEYEVi8GP1F3Jy80SO43IAMHsBXLImhCCwGQAt8G1lHf7vEviTWal3PCFDIXA4f7oQ66v+CB327qEOGAYQBAEZGWr4fD6Ua89BlgKAHIHA0/DwDs5nqXCl4hLG39lXJGnHA4DsdwBCwPMcWI7H6OgYzGYz0pUiphY+YXMjhJIzBbhxVY/ZmQ/o6+uTI5HdNBzEct/SGYmEydLiIrHZbOSZ1ZqqSVwmSf5sBcn42Bi5dv06KSoqInTtSwAq9odIQCDLMra2t6DRFILlWLwZHsaDh53JM8fjJ0/hnJ+HrrICoVAoodfrywG8pl7e2wKbHIRWq4VOp0NDQwNMRiOampqojTAa76Rsb2+HJElzHo8HNTU1ZSqV6hWAEoZenkmrvfhIqVTy2IMACUJSBcMwKelneWTk7UvaRalGo7FkZmbC7XY34hiUUa1UG7Ucx0BBzaMWUMW/uh49keTZSXYAAAAASUVORK5CYII%3D",
            zoomwidth: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACyUlEQVR4XqWSX0hTbRjAn/ecdSbbNJdFK/p3tTAvXI4IwrwJ6vtEqK819abIG1GCYRcFs+FNXdS+z82tP1ARpX7VVUVoYgWl07oItH8KUcHUxf7Y5v667exse3rfEUsxr/rBw3k453l/D895XmI2m3dJkqQGilwuj25YX2FGgFpCuApEhGw2G+QITCdT6QZRFJEQAkvhKisrr1RVVY3Q53OFQjGcTqebjxmObjMYDMqmxkal8djR7YhYX6pSuZhwBQ6HYw4RpcHBAan7v3/ziWQK/7Z7kJFIxPGv7jkMR6LodPRgj912x2KxQFdXVzHAbrfPIqW/rw8XQiFsuu7Djvte9M8H0fPNi6f/n8XDlz0YDC1gZ6f5lc1mY2eKIYOf8DyB9l4vfIqoYMaPYPiaBkYuD5AUJWi9HYfdcqG0rKwMlv6HoiBPC6+d2ARtdxOgKefhwpG1wCY+PxgDd0CCWy2bwWoVI5FIlDbjVgrWCAJEowtgN5bDuScZUClKCp2CyTjcbNkA8ej3rChmwjzJQy6HwCA0iiqtVgsvR8Ygk4rBxQYOovFFiC2mwGlUQSIWgkePB5J0zVU8yZUCEuConOeWCHQ6Hej1ehh1jUE4HCl0RzqX1+eD4eGnyPOykuPG+i0YfO+XcXgij2T5CIgI1dXVLIGhoaHiOyZSq9Ugzb/1ZKWdOw7otspdHyZu5Mr1OSq5y1Yxg4i5TCaDLBhut3tZeDwebG0/ZbW21Uw6THvj7+6dwauW5rSz2/qPDCk5Cr2yhXFoChqN5tdV5TjgeR54QhSX+idrLCf3BJ65RsnB/bXKkenJXiZghwrxG4o75whCKAHgmvi8sU6v9Y9PffGVKDUVMtpBTovWwOoUJIIglLD8ozsND1+/0Tg79o0LXH5AFggEHphMJgUASLAKAmVqauoFyxfFPLQdWgc1dYbaOuNZIGyEP+EHsrF5Hxph5xoAAAAASUVORK5CYII%3D",
            hide: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAbpJREFUeNrUk8FKAlEUhu9oqRQ2JCG0UBgNWijWQkFhiAqaXERLceE21+16A1+gRQshCFy5MGiTCROBguEqzGkVI0kgumihOKQw3f4zOL2Aqw58MHPv+f9zzr0zAuecLRIOtmAsbCAgrIf5KGtgHyggBHzzvC+ggxp4AiNbZxsIMDh1u91niqJs5XI5v6Zpq41Gw0WbsizPIpHIpFQqDWu12vt0Oi1Cd0d1aQQPOE8kEhf1el2uVCrbpmmuBwIB12RiMAIiF63RHuVQLmksrdPpTKPq42AwmBqGwQlVVTlFsXjNZfmAK8oJR1fc3qdc0pB2CS7ZZDLpQ/uu2WxmzVUoFFDZZJeXV9Z7OBxln59vzN6nXNKgUJYMblqt1vpoNNr2IChBkiSmqk2WSh1ZAo/HzZaXpT+DbwQ0H6R1OhyOfrfb/Wk2m2Y8Ht8QRdGLeZmmvbJQaIeJog/VNXZ4uGcZ67rez+fz9ziLW7oVAXPYV5FEA8fpdDqayWSivV5vs91ue6liLBYbB4PBfrlc7lSr1Q4aeMDyM52TbWB/FysgAnaBH3jn62MwBC9AA4b97Qj//19Y2OBXgAEA3HnRUkre/J0AAAAASUVORK5CYII%3D",
            settings: "data:image/png;base64,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%3D",
            menu: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABqUlEQVR4XqWTPWtUQRhGz/vO7HWDYNJaWyz5FSJEgoWlYCGInaClCGpI4geC1mJjIWshqGn9CGwQf4TmJo0/wRRK1Jt7H+eOO8VCsIgHHjjD8MDMy4ydfLD57cfvdqFphZjFAB3mBgM3jldhjxOr73RU5lM3Np0A+Fp/BjcMw62PeL7jXBm1AMlDdil5bayeX6TvRkRmvBsJbikD3CPQUIUDXuwGAConuwTBBYCAyJRLyyOCQYxw7ZHx5KZ4tbnDhaURABuTbS4uLSLBm+QFB8ty/bExDHD1ofH0hqAFU0voyHF1ZFcKohDL7Me3xeVUHt8STQvRyFcaOJni6j0YGUEElaPwckVIEAAPUAVjOCBTHCU3oxCLvp7UuDnBI+4BOGAYnY2tGoBjUxeiKi2AuTtv1fNrmi5l+T5qJT2b1PoppfT+Jft+9m319N0yRM7dNSrg7D3jw4oAMHU45Fin7AHww4a4tSbOrBsf10UHWHmyZDC37ALC7AxUPJcBvGwimHUsl6As/usv9N0413z/NL/2/nTTdnSigP3jO5oZg2D0XQNOAQscjb0/9SM6Il0maJIAAAAASUVORK5CYII%3D"
        };
        // Start the script
        function main(m) {
            console.log("Starting Manga OnlineViewer");
            sites = m;
            var exec = false;
            $( document ).ready( function () {
                run();
                exec = true
            });
            setTimeout(function () {
                if (!exec){
                    run();
                    console.log("Forced Execution");
                }
            }, 20000);
        }
        function run (){
            setTimeout(function () {
                    console.log(sites.length + " Known Manga Sites");
                    console.log("Identifying Site");
                    var i = 0;
                    if ($("meta[content~='FoOlSlide']").length > 0) {
                        formatPage(sites[i].run());
                    } else {
                        for (++i; i <= sites.length; i++) {
                            if (sites[i].url.test(window.location.host)) {
                                console.log("Loading " + sites[i].name);
                                formatPage(sites[i].run());
                                break;
                            }
                        }
                    }
                }, 3000);
        }

        //Organize the site adding place holders for the manga pages
        function formatPage(Manga) {
            console.log("Found " + Manga.quant + " pages");
            if (Manga.before !== undefined) Manga.before();
            if (Manga.quant > 0) {
                cache.Data = Manga;
                $("body > :not(#MangaOnlineViewer)").remove();
                $("body").removeClass().addClass(settings.Theme);
                $("script").remove();
                $("head > :not(title, meta)").remove();
                //$('head').append("<script src='https://code.jquery.com/jquery-latest.min.js'></script>");
                reader(Manga);
                $("#PagesPerSecond option[value=" + settings.Timer + "]").attr("selected", "true");
                $("#DefaultZoom option[value=" + settings.Zoom + "]").attr("selected", "true");
                $(".ChapterControl a[href*='undefined']").attr("href", "");
                configCSS();
                setTimeout(function () {
                    addPages(Manga);
                    controls();
                    setKeyDownEvents();
                    checkImagesLoaded();
                    console.log("Site rebuild done");
                    setTimeout(function () {
                        loadPages(Manga);
                    }, 50);
                }, 50);
            }
        }

        //Inject CSS for this script
        function configCSS() {
            $("style, link[type='text/css'], link[href$='css']").remove();
            var css = '<style type="text/css">' +
                /*! normalize.css v1.0.0 | MIT License | git.io/normalize */'article,aside,details,figcaption,figure,footer,header,hgroup,nav,section,summary{display:block}audio,canvas,video{display:inline-block;*display:inline;*zoom:1}audio:not([controls]){display:none;height:0}[hidden]{display:none}html{font-size:100%;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}html,button,input,select,textarea{font-family:sans-serif}body{margin:0}a:focus{outline:thin dotted}a:active,a:hover{outline:0}h1{font-size:2em;margin:.67em 0}h2{font-size:1.5em;margin:.83em 0}h3{font-size:1.17em;margin:1em 0}h4{font-size:1em;margin:1.33em 0}h5{font-size:.83em;margin:1.67em 0}h6{font-size:.75em;margin:2.33em 0}abbr[title]{border-bottom:1px dotted}b,strong{font-weight:bold}blockquote{margin:1em 40px}dfn{font-style:italic}mark{background:#ff0;color:#000}p,pre{margin:1em 0}code,kbd,pre,samp{font-family:monospace,serif;_font-family:"courier new",monospace;font-size:1em}pre{white-space:pre;white-space:pre-wrap;word-wrap:break-word}q{quotes:none}q:before,q:after{content:"";content:none}small{font-size:75%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-0.5em}sub{bottom:-0.25em}dl,menu,ol,ul{margin:1em 0}dd{margin:0 0 0 40px}menu,ol,ul{padding:0 0 0 40px}nav ul,nav ol{list-style:none;list-style-image:none}img{border:0;-ms-interpolation-mode:bicubic}svg:not(:root){overflow:hidden}figure{margin:0}form{margin:0}fieldset{border:1px solid #c0c0c0;margin:0 2px;padding:.35em .625em .75em}legend{border:0;padding:0;white-space:normal;*margin-left:-7px}button,input,select,textarea{font-size:100%;margin:0;vertical-align:baseline;*vertical-align:middle}button,input{line-height:normal}button,html input[type="button"],input[type="reset"],input[type="submit"]{-webkit-appearance:button;cursor:pointer;*overflow:visible}button[disabled],input[disabled]{cursor:default}input[type="checkbox"],input[type="radio"]{box-sizing:border-box;padding:0;*height:13px;*width:13px}input[type="search"]{-webkit-appearance:textfield;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;box-sizing:content-box}input[type="search"]::-webkit-search-cancel-button,input[type="search"]::-webkit-search-decoration{-webkit-appearance:none}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}textarea{overflow:auto;vertical-align:top}table{border-collapse:collapse;border-spacing:0}' +
                'html{font-size:100%}' +
                'img{height:auto;max-width:100%;vertical-align:middle;border:0 none}' +
                'button,input,select,textarea{margin:0;font-size:100%;vertical-align:middle}' +
                'button,input{line-height:normal}' +
                'body{margin:0;font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:14px;line-height:20px;color:#333;background-color:#FFF}' +
                'a{color:#08C;text-decoration:none}' +
                'label,input,button,select,textarea{font-size:14px;font-weight:normal;line-height:20px}' +
                'input,button,select,textarea{font-family:"Helvetica Neue",Helvetica,Arial,sans-serif}' +
                'select,textarea,input[type="text"],input[type="password"],input[type="datetime"],input[type="datetime-local"],input[type="date"],input[type="month"],input[type="time"],input[type="week"],input[type="number"],input[type="email"],input[type="url"],input[type="search"],input[type="tel"],input[type="color"],.uneditable-input{display:inline-block;height:20px;padding:4px 6px;margin-bottom:10px;font-size:14px;line-height:20px;color:#555;vertical-align:middle;border-radius:4px 4px 4px 4px}' +
                'input:not([type="checkbox"]),textarea,.uneditable-input{width:206px}' +
                'textarea,input[type="text"],input[type="password"],input[type="datetime"],input[type="datetime-local"],input[type="date"],input[type="month"],input[type="time"],input[type="week"],input[type="number"],input[type="email"],input[type="url"],input[type="search"],input[type="tel"],input[type="color"],.uneditable-input{background-color:#FFF;border:1px solid #CCC;box-shadow:0 1px 1px rgba(0,0,0,0.075) inset;transition:border .2s linear 0,box-shadow .2s linear 0}' +
                'input,textarea,.uneditable-input{margin-left:0}' +
                'body{font-family:sans-serif;font-size:12pt;padding:0}' +
                '#MangaOnlineViewer{width:100%;height:100%;padding-bottom: 100px;}' +
                '#MangaOnlineViewer #Chapter{text-align:center;margin: 25px auto 0;display:block;}' +
                '#MangaOnlineViewer #ViewerControls{padding: 8px;position:fixed;top:0;left:190px;}' +
                '#MangaOnlineViewer select{height:20px;padding:0;margin-bottom:5px}' +
                '#MangaOnlineViewer .controlButton{cursor:pointer;border:0 none;}' +
                '#MangaOnlineViewer #ImageOptions {left: 0px;position: absolute;top: 0px;width: 200px;}' +
                '#MangaOnlineViewer #ImageOptions .painel {padding:4.5px;position: inherit;}' +
                '#MangaOnlineViewer #ImageOptions:hover {position:fixed;}' +
                '#MangaOnlineViewer #ImageOptions.settingsOpen {position:fixed;}' +
                '#MangaOnlineViewer #ImageOptions #menu {position:fixed;top: 45px;height: 64px;width: 200px;top: 0;}' +
                '#MangaOnlineViewer #ImageOptions #Zoom {position:absolute;left: 18px;bottom: -65px;}' +
                '#MangaOnlineViewer .MangaPage{width:100%;display:inline-block;text-align:center;align:center}' +
                '#MangaOnlineViewer .PageContent{margin:0 0 15px;text-align:center;display:inline-block}' +
                '#MangaOnlineViewer .fitWidthIfOversized .PageContent img { max-width: ' + $(window).width() + 'px;}' +
                '#MangaOnlineViewer #gotoPage{width:35px;}' +
                '#MangaOnlineViewer #ThemeSelector{width:110px;}' +
                '#MangaOnlineViewer #PagesPerSecond{width:46px;}' +
                '#MangaOnlineViewer .ChapterControl{-moz-user-select:none;-webkit-user-select: none;margin-right:120px;margin-top: 1px;float: right;}' +
                '#MangaOnlineViewer .ChapterControl a{display:inline-block;width: 80px;height:25px;text-align:center;margin-left: 3px;margin-left: 3px;}' +
                '#MangaOnlineViewer .ChapterControl a[href="#"],#MangaOnlineViewer .ChapterControl a[href=""]{visibility:hidden}' +
                '#MangaOnlineViewer .ViewerTitle{display: block;text-align: center;height:35px;}' +
                '#MangaOnlineViewer #Counters {position: absolute;right: 10px;top: 10px;}' +
                '#MangaOnlineViewer .PageFunctions{-moz-user-select:none;-webkit-user-select: none;font-family:monospace;font-size:10pt;padding-right:120px;text-align:right}' +
                '#MangaOnlineViewer .PageFunctions>span{min-width:20px;text-align:center;display:inline-block;padding:2px 10px}' +
                '#MangaOnlineViewer .PageFunctions > a {height: 16px;width: 16px; padding: 10px;}' +
                '#MangaOnlineViewer .PageFunctions .Reload {background: url("' + icon.reload + '") no-repeat scroll center center transparent;}' +
                '#MangaOnlineViewer .PageFunctions .Hide {background: url("' + icon.hide + '") no-repeat scroll center center transparent;}' +
                '#MangaOnlineViewer .PageFunctions .ZoomIn {background: url("' + icon.zoomin + '") no-repeat scroll center center transparent;}' +
                '#MangaOnlineViewer .PageFunctions .ZoomOut {background: url("' + icon.zoomout + '") no-repeat scroll center center transparent;}' +
                '#MangaOnlineViewer .PageFunctions .ZoomRestore {background: url("' + icon.zoomrestore + '") no-repeat scroll center center transparent;}' +
                '#MangaOnlineViewer .PageFunctions .ZoomWidth {background: url("' + icon.zoomwidth + '") no-repeat scroll center center transparent;}' +
                '#MangaOnlineViewer .PageFunctions a{opacity:0.2}' +
                '#MangaOnlineViewer .PageFunctions:hover a{opacity:1}' +
                '#MangaOnlineViewer #NavigationCounters {margin-top: 5px;width: 100%;}' +
                '#MangaOnlineViewer #Navigation {bottom: -170px;height: 180px;overflow: auto;overflow-x: auto;overflow-y: hidden;padding-bottom: 20px;position: fixed;white-space: nowrap;width: 100%;}' +
                '#MangaOnlineViewer #Navigation:hover {bottom: 0;}' +
                '#MangaOnlineViewer #Navigation.disabled {display: none;}' +
                '#MangaOnlineViewer #Navigation.visible {bottom: 0;}' +
                '#MangaOnlineViewer #Navigation .ThumbNail {display: inline-block;height: 150px;margin: 0 5px;position: relative;}' +
                '#MangaOnlineViewer #Navigation .ThumbNail span {display: block;opacity: 0.8;position: relative;top: -30px;width: 100%;}' +
                '#MangaOnlineViewer #Navigation .ThumbNail img {align-content: center;cursor: pointer;display: inline-block;margin-bottom: -10px;margin-top: 10px;max-height: 150px;min-height: 150px;min-width: 100px;}' +
                '#MangaOnlineViewer #Navigation .nav {behavior:url(-ms-transform.htc);-moz-transform:rotate(-90deg);-webkit-transform:rotate(-90deg);-o-transform:rotate(-90deg);}'+
				'#MangaOnlineViewer #ImageOptions .menuOuterArrow  {width: 0;height: 0;border-top: 10px solid transparent;border-bottom: 10px solid transparent;border-left:10px solid blue;display: inline-block;position: absolute;bottom: 0;}'+
				'#MangaOnlineViewer #ImageOptions .menuInnerArrow {width: 0;height: 0;border-top: 5px solid transparent;border-bottom: 5px solid transparent;border-left:5px solid white;left: -10px;position: absolute;top: -5px;display: inline-block;}';
            var themes = [ //   body       text       border     painel     dark1      dark2
                ["Dark", "#000000", "#ffffff", "#666666", "#333333", "#111111", "#282828"],
                ["Light", "#eeeeec", "#2e3436", "#888a85", "#babdb6", "#c8cec2", "#d3d7cf"],
                ["Clear", "#ffffff", "#2e3436", "#888a85", "#eeeeec", "#c8cec2", "#d3d7cf"],
                ["Dark_Blue", "#000000", "#91a0b0", "#586980", "#3e4b5b", "#161c24", "#222c3b"],
                ["Tango_Blue", "#000000", "#82a0bf", "#3d669b", "#304c77", "#081425", "#102747"],
                ["Lime", "#000000", "#8abd59", "#608d34", "#38531f", "#233413", "#293e17"],
                ["Plum", "#000000", "#ad7fa8", "#75507b", "#49324d", "#1d1020", "#311b37"],
                ["Light_Plum", "#eeeeec", "#5c3566", "#9b71a2", "#ad7fa8", "#d2b8ce", "#c4a3c0"],
                ["Alpha_Blue", "#000000", "#82a0bf", "rgba(56,109,164,0.9)", "#304c77", "#081425", "rgba(18,41,75,0.8)"]
            ];
            for (var i = 0; i < themes.length; i++) {
                css += '.' + themes[i][0] + ' .controlLable, .' + themes[i][0] + ' .ViewerTitle, .' + themes[i][0] + '{color: ' + themes[i][2] + ';}';
                css += '.' + themes[i][0] + ' {background: none repeat scroll 0 0 ' + themes[i][1] + ';}';
                css += '.' + themes[i][0] + ' #ImageOptions #menu .menuOuterArrow {border-left:10px solid ' + themes[i][4] + ';}';
                css += '.' + themes[i][0] + ' #ImageOptions #menu .menuInnerArrow {border-left:5px solid ' + themes[i][1] + ';}';
                css += '.' + themes[i][0] + ' .PageFunctions a.visible, .' + themes[i][0] + ' a, .' + themes[i][0] + ' a:link, .' + themes[i][0] + ' a:visited, .' + themes[i][0] + ' a:active, .' + themes[i][0] + ' a:focus{ text-decoration:none; color: ' + themes[i][2] + ';}';
                css += '.' + themes[i][0] + ' .PageFunctions { border: 1px solid ' + themes[i][3] + '; border-bottom: medium none;    border-left: medium none;    border-right: medium none;}';
                css += '.' + themes[i][0] + ' .PageFunctions > span, .' + themes[i][0] + ' .ThumbNail span {background: none repeat scroll 0 0 ' + themes[i][4] + '; color: ' + themes[i][2] + ';}';
                css += '.' + themes[i][0] + ' .painel {background: none repeat scroll 0 0 ' + themes[i][4] + '; color: ' + themes[i][2] + ';border: thin solid ' + themes[i][3] + ';}';
                css += '.' + themes[i][0] + ' .PageContent, .' + themes[i][0] + ' .ThumbNail img { outline: 2px solid ' + themes[i][6] + '; background: none repeat scroll 0 0 ' + themes[i][5] + ';}';
                css += '.' + themes[i][0] + ' .ChapterControl a { border: 1px solid ' + themes[i][3] + '; background: -moz-linear-gradient(left top , ' + themes[i][6] + ', ' + themes[i][4] + ') repeat scroll 0 0 transparent; background: -webkit-linear-gradient(left , ' + themes[i][6] + ' 41%, ' + themes[i][4] + ' 71%) repeat scroll 0 0 transparent; }';
				$("#ThemeSelector").append("<option value='" + themes[i][0] + "' " + (settings.Theme == themes[i][0] ? "selected" : "") + ">" + themes[i][0].replace("_", " ") + "</option>");
            }
            css += '</style>';
            $('head').append(css);
        }

        //Build the reader main body
        function reader(Manga) {
            var reader = "<div id='MangaOnlineViewer' class='" + settings.Theme+ "' style='min-height: 1080px;' >" +
                "<div class='ViewerTitle'><br/>" +
                "<a id='series' href='" + Manga.series + "'> " + Manga.title + " <br/>(Return to Chapter List)</a>" +
                "</div>" +
                "<div id='ChapterControlTop' class='ChapterControl'>" +
                "<a name='bottom' href='#ChapterControlBottom' style='display: none;'>Bottom</a>" +
                "<a class='prev' name='prev' href='" + Manga.prev + "'>Previous</a>" +
                "<a class='next' name='next' href='" + Manga.next + "'>Next</a>" +
                "</div>" +
                "<div id='Chapter' align='center' class='" + (settings.FitWidthIfOversized == "true" ? "fitWidthIfOversized" : "" ) + "'></div>" +
                "<div class='ViewerTitle'><br/>" +
                "<a id='series' href='" + Manga.series + "'> " + Manga.title + " <br/>(Return to Chapter List)</a>" +
                "</div>" +
                "<div id='ChapterControlBottom' class='ChapterControl'>" +
                "<a href='#' id='blob'>Download</a>"+
                "<a name='top' href='#MangaOnlineViewer'>Top</a>" +
                "<a class='prev' name='prev' href='" + Manga.prev + "'>Previous</a>" +
                "<a class='next' name='next' href='" + Manga.next + "'>Next</a>" +
                "</div>" +
                "<div id='ImageOptions'>" +
				"<div id='menu'><span class='menuOuterArrow'><span class='menuInnerArrow'></span></span></div>" +
                "<div class='painel'>" +
                "<img id='enlarge' alt='Enlarge' src='" + icon.enlage + "' class='controlButton'/> " +
                "<img id='restore' alt='Restore' src='" + icon.restore + "' class='controlButton'/> " +
                "<img id='reduce' alt='Reduce' src='" + icon.reduce + "' class='controlButton'/> " +
                "<img id='fitwidth' alt='Fit Width' src='" + icon.fitwidth + "' class='controlButton'/> " +
                "<img id='settings' alt='settings' src='" + icon.settings + "' class='controlButton'/>" +
                "</div>" +
                "<div id='Zoom' class='controlLable'>Zoom: <b>" + settings.Zoom + "</b> %</div>" +
                "</div>" +
                "<div id='ViewerControls' class='painel' style='display: none;>" +
                "<span class='controlLable'>Theme:</span> <select id='ThemeSelector'></select> " +
                "<span class='controlLable'>Pages/Second:</span> " +
                "<select id='PagesPerSecond'>" +
                "<option value='3000'>0.3</option>" +
                "<option value='2000'>0.5</option>" +
                "<option value='1000'>01</option>" +
                "<option value='500'>02</option>" +
                "<option value='250'>04</option>" +
                "<option value='125'>08</option>" +
                "<option value='100'>10</option>" +
                "</select> " +
                "<span class='controlLable'>Default Zoom:</span> " +
                "<select id='DefaultZoom'>" +
                "<option value='50'>50%</option>" +
                "<option value='75'>75%</option>" +
                "<option value='100'>100%</option>" +
                "<option value='125'>125%</option>" +
                "<option value='150'>150%</option>" +
                "<option value='175'>175%</option>" +
                "<option value='200'>200%</option>" +
                "<option value='1000'>Fit Width</option>" +
                "</select> " +
                "<span class='controlLable'>Fit Width if Oversized:</span> " +
                "<input type='checkbox' val='true' name='fitIfOversized' id='fitIfOversized' " + (settings.FitWidthIfOversized == "true" ? "checked" : "" ) + "> " +
                "<span class='controlLable'>Show Thumbnails:</span> " +
                "<input type='checkbox' val='true' name='showThumbnails' id='showThumbnails' " + (settings.ShowThumbnails == "true" ? "checked" : "" ) + "> " +
                "<span class='controlLable'>Download Images as Zip:</span> " +
                "<input type='checkbox' val='false' name='downloadZip' id='downloadZip' " + (settings.DownloadZip == "true" ? "checked" : "" ) + "> " +
                "</div>" +
                "<div id='Counters' class='controlLable'>" +
                "<i>0</i> of <b>" + Manga.quant + "</b> Pages Loaded " +
                "<span class='controlLable'>Go to Page:</span> <select id='gotoPage'><option selected>#</option></select>" +
                "</div>" +
                "<div id='Navigation' align='center' class='painel " + (settings.ShowThumbnails == "true" ? "" : "disabled" ) + "'>" +
                "<div id='NavigationCounters' class='controlLable'>" +
                "<img id='' alt='menu' src='" + icon.menu + "' class='nav'/>" +
                " <i>0</i> of <b>" + Manga.quant + "</b> Pages Loaded " +
                "</div>" +
                "</div>" +
                "</div>"+
                ""
            ;
            $("body").append(reader);
        }

        //Add Pages Place holders
        function addPages(Manga) {
            var pages = [], options = [], thumbs = [];
            for (var i = 1; i <= Manga.quant; i++) {
                pages.push("<div id='Page" + i + "' class='MangaPage'>" +
                           "<div class='PageFunctions'>" +
                           "<a class='ZoomIn controlButton'></a> " +
                           "<a class='ZoomRestore controlButton'></a>" +
                           "<a class='ZoomOut controlButton'></a>" +
                           "<a class='ZoomWidth controlButton'></a> " +
                           "<a class='Hide controlButton'></a> " +
                           "<a class='Reload controlButton'></a> " +
                           "<span>" + i + "</span>" +
                           "</div>" +
                           "<div class='PageContent' style='display: none;'></div>" +
                           "</div>");
                options.push("<option value='" + i + "'>" + i + "</option>");
                thumbs.push("<div id='ThumbNail" + i + "' class='ThumbNail'>" +
                            "<img id='ThumbNailImg" + i + "' alt='' src=''/>" +
                            "<span>" + i + "</span>" +
                            "</div>");
            }
            $("#Chapter").append(pages.join(''));
            $("#gotoPage").append(options.join(''));
            $("#Navigation").append(thumbs.join(''));
        }
		//Converts Images into Base64
		function customBase64Encode (inputStr) {
		// Source: http://stackoverflow.com/questions/8778863/downloading-an-image-using-xmlhttprequest-in-a-userscript/8781262#8781262
			var
				bbLen               = 3,
				enCharLen           = 4,
				inpLen              = inputStr.length,
				inx                 = 0,
				jnx,
				keyStr              = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
				output              = "",
				paddingBytes        = 0;
			var
				bytebuffer          = new Array (bbLen),
				encodedCharIndexes  = new Array (enCharLen);

			while (inx < inpLen) {
				for (jnx = 0;  jnx < bbLen;  ++jnx) {
					/*--- Throw away high-order byte, as documented at:
					  https://developer.mozilla.org/En/Using_XMLHttpRequest#Handling_binary_data
					*/
					if (inx < inpLen)
						bytebuffer[jnx] = inputStr.charCodeAt (inx++) & 0xff;
					else
						bytebuffer[jnx] = 0;
				}

				/*--- Get each encoded character, 6 bits at a time.
					index 0: first  6 bits
					index 1: second 6 bits
								(2 least significant bits from inputStr byte 1
								 + 4 most significant bits from byte 2)
					index 2: third  6 bits
								(4 least significant bits from inputStr byte 2
								 + 2 most significant bits from byte 3)
					index 3: forth  6 bits (6 least significant bits from inputStr byte 3)
				*/
				encodedCharIndexes[0] = bytebuffer[0] >> 2;
				encodedCharIndexes[1] = ( (bytebuffer[0] & 0x3) << 4)   |  (bytebuffer[1] >> 4);
				encodedCharIndexes[2] = ( (bytebuffer[1] & 0x0f) << 2)  |  (bytebuffer[2] >> 6);
				encodedCharIndexes[3] = bytebuffer[2] & 0x3f;

				//--- Determine whether padding happened, and adjust accordingly.
				paddingBytes          = inx - (inpLen - 1);
				switch (paddingBytes) {
					case 1:
						// Set last character to padding char
						encodedCharIndexes[3] = 64;
						break;
					case 2:
						// Set last 2 characters to padding char
						encodedCharIndexes[3] = 64;
						encodedCharIndexes[2] = 64;
						break;
					default:
						break; // No padding - proceed
				}

				/*--- Now grab each appropriate character out of our keystring,
					based on our index array and append it to the output string.
				*/
				for (jnx = 0;  jnx < enCharLen;  ++jnx)
					output += keyStr.charAt ( encodedCharIndexes[jnx] );
			}
			return output;
		}
        //Adds an image to the place-holder div
        function addImg(index, src, error) {
            var page = '#Page' + index + ' .PageContent';
            var img = "<img id='PageImg" + index + "' alt='PageImg" + index + "' src='" + src + "'/>";
            $(page).append(img).slideToggle();
            $("#ThumbNailImg" + index).attr("src", src);
            if(settings.DownloadZip == "true"){
				var str = '' + index;
                while (str.length < 3) str = '0' + str;
				var filename = "Page "+str+".png";
				if(src.indexOf("base64") > -1){
					var base64 = src.replace("data:image/png;base64,","");
					var i = base64.indexOf(",");
					if (i !== -1) {
						base64 = base64.substring(index + 1, base64.length);
					}
					cache.zip.file(filename,base64,{base64:true,createFolders:true});
					console.log(filename+" Added to Zip from Base64 Image");
					cache.downloadFiles++;
				} else {
					try{
						GM_xmlhttpRequest({
							method: "GET",
							url: src,
							overrideMimeType: 'text/plain; charset=x-user-defined',
							onload: function(e) {
								var base64  = customBase64Encode (e.responseText);
								cache.zip.file(filename,base64,{base64:true,createFolders:true});
								console.log(filename+" Added to Zip as Base64 Image");
								cache.downloadFiles++;
							}
						});
					} catch (e){
						console.log(e);
					}
				}
            }
        }

        //Adds an optional image just in case the primary does not load
        function addAltImg(index, src) {
            $('img#PageImg' + index).attr("altsrc", src);
        }

        //Default ajax operation
        function getHtml(url, action) {
            $.ajax({
                type: "GET",
                url: url,
                dataType: "html",
                async: false,
                success: action
            });
        }

        //Load Pages Entry
        function loadPages(Manga) {
            console.log("Loading Images");
            if (Manga.pages !== undefined) {
                console.log("Method manual bulk");
                Manga.pages(addImg, addAltImg);
            } else {
                if (Manga.page !== undefined) {
                    console.log("Method manual individual");
                } else {
                    console.log("Method automatic");
                }
                console.log("Intervals: " + (Manga.timer || settings.Timer || "Default(1000)"));
                loadImg(Manga, 0);
            }
        }

        //Load Images on the background
        function loadImg(Manga, index) {
            if (++index <= Manga.quant) {
                console.log("Page " + index);
                setTimeout(function () {
                    if (Manga.page !== undefined) {
                        Manga.page(index, addImg, addAltImg);
                    } else {
                        getHtml(resolveUrl(Manga, index), function (html) {
                            addImg(index, $(html).find(Manga.img).attr('src'));
                        });
                    }
                    loadImg(Manga, index);
                }, Manga.timer || settings.Timer);
            }
        }

        //Get the pages url
        function resolveUrl(Manga, index) {
            var url = window.location.href;
            if (Manga.url !== undefined) {
                url = Manga.url(index);
            } else if (Manga.data !== undefined) {
                url = $(Manga.data).eq(index - 1).val();
            } else {
                if (window.location.href.lastIndexOf("/") != window.location.href.length - 1) {
                    url += "/";
                }
                url += index;
            }
            return url;
        }
        // Generate Zip File for download
        function generateZip(){
            if(cache.downloadFiles != cache.Data.quant){
                setTimeout(generateZip,2000);
                console.log("Waiting for Files to Download "+cache.downloadFiles+" of "+cache.Data.quant);
            } else {
                var blobLink = document.getElementById('blob');
                try {
                    blobLink.download = $(".ViewerTitle:first a").text().replace("(Return to Chapter List)","").trim() + ".zip";
                    blobLink.href = window.URL.createObjectURL(cache.zip.generate({type:"blob"}));
                    console.log("Download Ready");
					$("#blob")[0].click();
                } catch(e) {
                    blobLink.innerHTML += " (not supported on this browser)";
                }
            }
        }
        //Checks if all images loaded correctly
        function checkImagesLoaded() {
            var p = $(".PageContent:empty").length;
            $(".PageContent img").filter(function () {
                var image = $(this);
                if (image.context.naturalWidth === 0 ||
                    image.readyState == 'uninitialized') {
                    return true;
                } else {
					applyDefaultZoom(this);
				}
                return false;
            }).each(function () {
                p++;
                reloadImage($(this));
            });
            $("#Counters i").html($("#Counters b").html() - p);
            $("#NavigationCounters i").html($("#NavigationCounters b").html() - p);
            if (p > 0) {
                setTimeout(function () {
                    checkImagesLoaded();
                }, 3000);
            } else {
                applyDefaultZoom();
                console.log("Images Loading Complete");
                if(settings.DownloadZip == "true"){
                    generateZip();
                }
            }
        }
        //Force reload the image
        function reloadImage(img) {
            var src = img.attr("src");
            if ($(this).attr("altsrc") !== undefined) {
                var altsrc = img.attr("altsrc");
                img.removeAttr("src");
                img.attr("altsrc", src);
                setTimeout(function () {
                    img.attr("src", altsrc);
                    img.removeAttr('width');
                }, 500);
            } else {
                img.removeAttr("src");
                setTimeout(function () {
                    img.attr("src", src);
                    img.removeAttr('width');
                }, 500);
            }
        }

        //After pages load apply default Zoom
        function applyDefaultZoom(page) {
			var pages = page || ".PageContent img";
            var w = settings.Zoom;
            if (w == 1000) {
                $("#fitwidth").click();
            } else {
                $("#Zoom b").html(w);
                $(pages).removeAttr('width');
                $(pages).each(function () {
                    $(this).attr('width', $(this).width() * (w / 100));
                });
            }
        }

        //Clean key press configurations and set some when specified
        function setKeyDownEvents() {
            document.onkeydown = null;
            document.onkeypress = null;
            window.onkeydown = null;
            window.onkeypress = null;
            window.onload = null;
            document.body.onload = null;
            $(document).unbind("keypress");
            $(document).unbind("keydown");
            function processKey(e) {
                var a = e.keyCode || e.which;
                if ($.inArray(a, [39, 46, 190, 37, 44, 188, 43, 107, 61, 45, 109, 42, 106, 56, 104, 53, 101]) != -1) {
                    e.preventDefault();
                    e.stopPropagation();
                    e.stopImmediatePropagation();
                    switch (a) {
                        case 39://down:right
                        case 46://press:right / down:.
                        case 190://press:.
                            $(".ChapterControl:first .next")[0].click();
                            break;
                        case 37://down:left
                        case 44://press:left / down:,
                        case 188://press:,
                            $(".ChapterControl:first .prev")[0].click();
                            break;
                        case 43://+
                        case 107://numpad+
                        case 61://=
                            $('#enlarge').click();
                            break;
                        case 45://-
                        case 109://numpad-
                            $('#reduce').click();
                            break;
                        case 42://5
                        case 106://numpad5
                        case 56://8
                        case 104://numpad8
                            $('#restore').click();
                            break;
                        case 53://*
                        case 101://numpad*
                            $('#fitwidth').click();
                            break;
                    }
                    return false;
                }
            }

            if (navigator.userAgent.match(/mozilla/i)) {
                $(document).keypress(processKey);
            } else {
                $(document).keydown(processKey);
            }
        }

        //Controls for the extra features added to the sites
        function controls() {
            // Size Controls
            $('#enlarge').click(function () {
                $("#Zoom b").html(parseInt($("#Zoom b").html()) + 10);
                $(".PageContent img").removeAttr('width');
                $(".PageContent img").each(function () {
                    $(this).attr('width', $(this).width() * ($("#Zoom b").html() / 100));
                });
            });
            $('#reduce').click(function () {
                $("#Zoom b").html(parseInt($("#Zoom b").html()) - 10);
                $(".PageContent img").removeAttr('width');
                $(".PageContent img").each(function () {
                    $(this).attr('width', $(this).width() * ($("#Zoom b").html() / 100));
                });
            });
            $('#restore').click(function () {
                $("#Zoom b").html("100");
                $(".PageContent img").removeAttr('width');
            });
            $('#fitwidth').click(function () {
                $("#Zoom b").html("1000");
                $(".PageContent img").each(function () {
                    $(this).attr('width', $("html").width());
                });
            });
            $("#fitIfOversized").change(function () {
                $("#Chapter").toggleClass("fitWidthIfOversized");
                if ($(this).is(':checked'))
                    setValueGM("MangaFitWidthIfOversized", "true");
                else
                    setValueGM("MangaFitWidthIfOversized", "false");
            });
            $("#showThumbnails").change(function () {
                $("#Navigation").toggleClass("disabled");
                if ($(this).is(':checked'))
                    setValueGM("MangaShowThumbnails", "true");
                else
                    setValueGM("MangaShowThumbnails", "false");
            });
            $("#downloadZip").change(function () {
                if ($(this).is(':checked')){
                    setValueGM("MangaDownloadZip", "true");
                    alert("Reload Page to Generate the Zip File, the link will be at the bottom of the page after all images finish loading.");
                }else
                    setValueGM("MangaDownloadZip", "false");
            });
            $('#PagesPerSecond').change(function () {
                setValueGM("MangaTimer", $(this).val());
            });
            $('#DefaultZoom').change(function () {
                var w = $(this).val();
                $("#Zoom b").html(w);
                setValueGM("MangaZoom", w);
				settings.Zoom = w;
                applyDefaultZoom();
            });
            // Theme Control
            $('#ThemeSelector').change(function () {
                $("#MangaOnlineViewer , body").removeClass();
                $("#MangaOnlineViewer , body").addClass($(this).val());
                setValueGM("MangaTheme", $(this).val());
            });
            // Goto Page and ThumbNails
            function scrollToElement(ele) {
                $(window).scrollTop(ele.offset().top).scrollLeft(ele.offset().left);
            }

            $("#gotoPage").bind("change", function () {
                scrollToElement($("#Page" + $(this).val()));
            });
            $(".ThumbNail").bind("click", function () {
                scrollToElement($("#Page" + $(this).find("span").html()));
            });
            //Settings Control
            $("#settings").click(function () {
                $("#ViewerControls").slideToggle();
                $("#ImageOptions").toggleClass("settingsOpen");
                $("#Navigation").toggleClass("visible");
            });
            //Individual Page functions
            //Reload Page
            $('.Reload').click(function () {
                reloadImage($(this).parents(".MangaPage").find(".PageContent img"));
            });
            //ZoomIn
            $('.ZoomIn').click(function () {
                var img = $(this).parents(".MangaPage").find(".PageContent img");
                img.attr('width', img.width() + (img.width() / 3));
            });
            //ZoomOut
            $('.ZoomOut').click(function () {
                var img = $(this).parents(".MangaPage").find(".PageContent img");
                img.attr('width', img.width() - (img.width() / 3));
            });
            //ZoomRestore
            $('.ZoomRestore').click(function () {
                $(".PageContent img").removeAttr('width');
            });
            //ZoomWidth
            $('.ZoomWidth').click(function () {
                var img = $(this).parents(".MangaPage").find(".PageContent img");
                img.attr('width', $("html").width());
            });
            //Hide
            $('.Hide').click(function () {
                var img = $(this).parents(".MangaPage").find(".PageContent");
                img.slideToggle("slow");
            });
        }

        return {
            start: function (m) {
                main(m);
            },
            setSites: function(extraSites){
                sites = extraSites;
            }
        };
    })();

    var m = [
        // == FoOlSlide ========================================================================================================================
        {
            name: "FoOlSlide",
            url: /a^/,
            run: function () {
                return {
                    title: $("title").text().trim(),
                    series: $("div.tbtitle div.text a:first").attr("href"),
                    quant: $(".topbar_right .dropdown li").length,
                    prev: "#",
                    next: "#",
                    url: function (i) {
                        var url = window.location.href.substr(0, window.location.href.lastIndexOf("/")) + "/";
                        return url.match(/page\/$/ ? url : url += "page/") + i;
                    },
                    img: "img.open"
                };
            }
        },
        // == MangaFox =========================================================================================================================
        {
            name: "MangaFox",
            url: /mangafox/,
            run: function () {
                return {
                    title: $("#series .no").text().trim(),
                    series: $("#series a:last").attr("href"),
                    quant: $('select.m:first option:last').prev().val(),
                    prev: $("#chnav p:first a").attr("href"),
                    next: $("#chnav p:last a").attr("href"),
                    url: function (i) {
                        return i + ".html";
                    },
                    img: 'img#image'
                };
            }
        },
        // == MangaReader ======================================================================================================================
        {
            name: "MangaReader",
            url: /(mangareader|mangapanda)/,
            run: function () {
                return {
                    title: $("#mangainfo h1").text(),
                    series: $("#mangainfo a").attr("href"),
                    quant: $('select#pageMenu option:last').html(),
                    prev: $("#mangainfo_bas a:last").attr("href"),
                    next: $("#mangainfo_bas a:first").attr("href"),
                    img: 'img#img',
                    before: function () {
                        if (window.location.pathname.match(/\/.+\/.+\/chapter-[0-9]+.*/)) {
                            var path = window.location.pathname.split("/");
                            window.location.pathname = "/" + path[2] + "/" + path[3].match(/[0-9]+/);
                        } else if (window.location.search) {
                            window.location.href = window.location.pathname;
                        }
                            }
                };
            }
        },
        // == MangaStream ======================================================================================================================
        {
            name: "MangaStream",
            url: /(mangastream|readms)/,
            run: function () {
                return {
                    title: $(".btn:eq(1)").text().trim(),
                    series: $("div.controls div.btn-group ul.dropdown-menu:first li a:last").attr("href"),
                    quant: $("div.controls div.btn-group ul.dropdown-menu li:last").text().match(/[0-9]+/),
                    prev: $(".dropdown-menu:eq(1) a").eq($(".dropdown-menu:eq(1) a").index($(".dropdown-menu:eq(1) a[href*='" + location.pathname + "']")) + 1).attr("href"),
                    next: $(".dropdown-menu:eq(1) a").eq($(".dropdown-menu:eq(1) a").index($(".dropdown-menu:eq(1) a[href*='" + location.pathname + "']")) - 1).attr("href"),
                    url: function (i) {
                        return window.location.href.substring(0, window.location.href.lastIndexOf("\/") + 1) + i;
                    },
                    img: 'img#manga-page'
                };
            }
        },
        // == MangaInn  ========================================================================================================================
        {
            name: "MangaInn",
            url: /mangainn/,
            run: function () {
                return {
                    title: $("#gotomangainfo2").text().replace(" - ", ""),
                    series: $("#gotoMangaInfo").attr("href"),
                    quant: $('select#cmbpages option:last').html(),
                    prev: $("#chapters option:selected").prev().val(),
                    next: $("#chapters option:selected").next().val(),
                    url: function (i) {
                        return location.href + '/page_' + i;
                    },
                    img: 'img#imgPage'
                };
            }
        },
        // == MangaHere ========================================================================================================================
        {
            name: "MangaHere",
            url: /mangahere/,
            run: function () {
                return {
                    title: $(".title h1").text(),
                    series: $("div.title h2 a").attr("href"),
                    quant: $(".right select:first option:last").html(),
                    prev: $("#top_chapter_list option:selected").prev().val(),
                    next: $("#top_chapter_list option:selected").next().val(),
                    data: $(".right select.wid60:first").html().replace(/(\n *)/g, ""),
                    img: 'img#image'
                };
            }
        },
        // == Batoto ===========================================================================================================================
        {
            name: "Batoto",
            url: /bato\.to/,
            run: function () {
                return {
                    title: $(".moderation_bar li:first").text(),
                    series: $("div.moderation_bar a:first").attr("href"),
                    quant: $("select#page_select:first option").length,
                    prev: $("img[src$='pprev.png']:first").parent().attr("href"),
                    next: $("img[src$='nnext.png']:first").parent().attr("href"),
                    url: function (i) {
                        return window.location.hash.replace("#","/areader?id=") + "&p=" + i;
                    },
                    img: '#comic_page'
                };
            }
        },
        // == WPManga ==========================================================================================================================
        {
            name: "WPManga",
            url: /(mangaspy|mangamap)/,
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
		// == MangaDoom ========================================================================================================================
        {
            name: "MangaDoom",
            url: /mangadoom/,
            run: function () {
                return {
                    title: $(".widget-heading").text().trim(),
                    series: $(".widget-heading a").attr("href"),
                    quant: $(".selectPage:first option").length-1,
                    prev: $(".chapterSelect:first option:selected").next().val(),
                    next: $(".chapterSelect:first option:selected").prev().val(),
                    data: $(".selectPage:first option:not(:first)"),
                    img: 'img.img-responsive'
                };
            }
        },
        // == SenManga =========================================================================================================================
        {
            name: "SenManga",
            url: /senmanga/,
            run: function () {
                return {
                    title: $(".title").text().trim(),
                    series: $(".title a").attr("href"),
                    quant: $("select[name='page'] option:last").val(),
                    prev: $(".title a").attr("href") + $("select[name='chapter'] option:selected").next().val(),
                    next: $(".title a").attr("href") + $("select[name='chapter'] option:selected").prev().val(),
                    url: function (i) {
                        var pathname = window.location.pathname.split('/');
                        return "/" + pathname[1] + "/" + pathname[2] + "/" + i + "/";
                    },
                    img: "#picture",
                    before: function () {
                        $("body").contents().filter(function () {
                            return this.nodeType == 3; //Node.TEXT_NODE
                        }).remove();
                    }
                };
            }
        },
        // == EatManga =========================================================================================================================
        {
            name: "EatManga",
            url: /eatmanga/,
            run: function () {
                return {
                    title: $("#main_content h1").text().split(",")[0].trim(),
                    series: $("ul#crumbs li a:eq(2)").attr("href"),
                    quant: $('select#pages option:last').html(),
                    prev: $("#top_chapter_list option:selected").next().val(),
                    next: $("#top_chapter_list option:selected").prev().val(),
                    data: $('select#pages').html(),
                    img: "#eatmanga_image , #eatmanga_image_big"
                };
            }
        },
        // == MangaMint  =======================================================================================================================
        {
            name: "MangaMint",
            url: /mangamint/,
            run: function () {
                return {
                    title: $("div#squeeze2 h2 a").text(),
                    series: $("div#squeeze2 h2 a").attr("href"),
                    quant: $("#manga_page option").length,
                    prev: $("#select_node option:selected").prev().val(),
                    next: $("#select_node option:selected").next().val(),
                    url: function (i) {
                        return window.location.href + '?page=' + (i - 1);
                    },
                    img: "#images a img"
                };
            }
        },
        // == MangaLyght =======================================================================================================================
        {
            name: "MangaLyght",
            url: /manga.lyght/,
            run: function () {
                return {
                    title: $("div.entry h1 a").text().trim(),
                    series: $("div.entry h1 a").attr("href"),
                    quant: $(".selectpage option").length,
                    prev: (window.location.pathname + "?ch=" + $(".selectchapter option:selected").prev().val()).replace(" ", "+"),
                    next: (window.location.pathname + "?ch=" + $(".selectchapter option:selected").next().val()).replace(" ", "+"),
                    data: $("form[name='pageSelector1']").attr("action") + "?ch=" + $(".selectchapter option:selected").val().replace(" ", "+") + "&page=",
                    url: function (i) {
                        return this.data + i;
                    },
                    img: "#mainimage"
                };
            }
        },
        // == DynastyScans =====================================================================================================================
        {
            name: "Dynasty-Scans",
            url: /dynasty\-scans/,
            run: function () {
                return {
                    data: JSON.parse($("script:last").html().match(/\[.+\]/)),
                    title: $("#chapter-title").text(),
                    series: "#",
                    quant: JSON.parse($("script:last").html().match(/\[.+\]/)).length,
                    prev: "#",
                    next: "#",
                    page: function (i, addImg, addAltImg) {
						addImg(i, this.data[i - 1].image);
                    }
                };
            }
        },
        // == TenManga =========================================================================================================================
        {
            name: "TenManga",
            url: /tenmanga/,
            run: function () {
                return {
                    title: $("span.normal").text().replace("\n","").replace("\n","").replace(/.*>>.*>> /,"").replace(/ Page.*/,""),
                    series: $("span.normal a:eq(1)").attr("href"),
                    quant: $(".sl-page:first option").length,
                    prev: $(".sl-chap:first option:selected").next().val(),
                    next: $(".sl-chap:first option:selected").prev().val(),
                    data: $(".sl-page:first option"),
                    img: ".manga_pic"
                };
            }
        },
        // == MangaPark ========================================================================================================================
        {
            name: "MangaPark",
            url: /mangapark/,
            run: function () {
                return {
                    title: $(".location:first span a").text().trim(),
                    series: $(".location:first span a").attr("href"),
                    quant: $("#sel_page_1 option").length,
                    prev: $("#sel_book_1 option:selected").prev("option").val(),
                    next: $("#sel_book_1 option:selected").next("option").val(),
                    img: ".img "
                };
            }
        },
        // == MangaGo ==========================================================================================================================
        {
            name: "MangaGo",
            url: /mangago/,
            run: function () {
                return {
                    title: $("#series").text(),
                    series: $("#series").attr("href"),
                    quant: $(".page a:first").text().replace(/page 1 of /,""),
                    prev: "#",
                    next: "#",
                    data: $(".page a"),
                    url: function (i) {
                        return $(this.data[i-1]).attr("href");
                    },
                    img: "#page1"
                };
            }
        },
        // == NineManga ========================================================================================================================
        {
            name: "NineManga",
            url: /ninemanga/,
            run: function () {
                return {
                    title: $(".tip a:first").text(),
                    series: $(".subgiude a:nth(1)").attr("href"),
                    quant:$("#page:first option").length,
                    prev: $(".chnav a:first").attr("href"),
                    next:$(".chnav a:nth(1)").attr("href"),
                    data:$("#page:first option"),
                    img: ".manga_pic"
                };
            }
        },
		// == MangaTown ========================================================================================================================
        {
            name: "MangaTown",
            url: /mangatown/,
            run: function () {
                return {
                    title: $(".title h1").text(),
                    series: $(".title h2 a").attr("href"),
                    quant:$(".page_select select:first option").length,
                    prev: $("#top_chapter_list option:selected").prev().val(),
                    next:$("#top_chapter_list option:selected").next().val(),
                    data:$(".page_select select option"),
                    img: "#image"
                };
            }
        },
		// == TheSpectrum ======================================================================================================================
        {
            name: "TheSpectrum",
            url: /thespectrum/,
            run: function () {
                return {
                    title: $(".viewerLabel:nth(1)").text(),
                    series: "#",
                    quant:$(".selectpage option").length,
                    prev: window.location.pathname + "?ch=" + $(".selectchapter option:selected").prev().val(),
                    next: window.location.pathname + "?ch=" + $(".selectchapter option:selected").next().val(),
					data: window.location.pathname + "?" + $("form").serialize().substring(0,$("form").serialize().lastIndexOf("=")) + "=",
					url: function (i) {
						return this.data + i;
                    },
					img:"#imgContainer img"
                };
            }
        },
        // == Fakku ============================================================================================================================
        {
            name: "Fakku",
            url: /fakku.net/,
            run: function () {
                return {
                    title: $(".chapter a:eq(1)").text().trim(),
                    series: $("a.a-series-title:first").attr("href"),
                    quant: $(".drop option:last").val(),
                    prev: "#",
                    next: "#",
                    data: $("#thumbs img, .current-page").attr("src").replace("thumbs", "images").replace(/[0-9]+(\.thumb)?\.jpg$/, ""),
                    page: function (i, addImg, addAltImg) {
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
            run: function () {
                return {
                    title: $('.listTable td.listLong:first').text().trim(),
                    series: window.location.href.match(/.+\/[0-9]+\//),
                    quant: $('td.pageList a, td.pageList strong').length - 1,
                    prev: $("#chapters + table a.listLink").eq($("#chapters + table a.listLink").index($("#chapters + table a.listLink[href='" + window.location.href + "']")) - 1).attr("href"),
                    next: $("#chapters + table a.listLink").eq($("#chapters + table a.listLink").index($("#chapters + table a.listLink[href='" + window.location.href + "']")) + 1).attr("href"),
                    url: function (i) {
                        var str = '' + i;
                        while (str.length < 4) str = '0' + str;
                        return window.location.href + (window.location.href.slice(-1) == "/" ? "": "/") + str;
                    },
                    img: 'td.pageImage a img',
                    before: function () {
                        $('html > head').append($('<style>#main a:visited, #pageMain a:visited { color: darkred !important; }</style>'));
                    }
                };
            }
        },
        // == Doujin-Moe Non-members ===========================================================================================================
        {
            name: "DoujinMoeNM",
            url: /doujins/,
            run: function () {
                return {
                    title: $(".title").text(),
                    series: $(".title a").eq(-2).attr("href"),
                    quant: $("#gallery > :not(.thumbs)").length,
                    prev: "#",
                    next: "#",
                    data: $("#gallery > djm:not(.thumbs)"),
                    page: function (i, addImg, addAltImg) {
                        addImg(i, this.data.eq(i - 1).attr("file").replace("static2","static"));
                    }
                };
            }
        },
        // == Luscious =========================================================================================================================
        {
            name: "Luscious",
            url: /(luscious|wondersluts)/,
            run: function () {
                return {
                    title: $("#main .center h1:first").text().split("|")[0].trim(),
                    series: "#",
                    quant: $("#pj_no_pictures").html().trim(),
                    prev: "#",
                    next: "#",
                    url: window.location.pathname,
                    page: function (i, addImg, addAltImg) {
                        var self = this;
                        $.ajax({
                            type: "GET",
                            url: self.url,
                            dataType: "html",
                            async: false,
                            success: function (html) {
                                addImg(i,$(html).find("img#single_picture").attr("src"));
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
            run: function () {
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
            run: function () {
                return {
                    title: $("#il h1").text().trim(),
                    series: $("div#i5 div.sb a").attr("href"),
                    quant: $(".sn div span:last").text(),
                    prev: "#",
                    next: "#",
                    url: window.location.href,
                    timer: 3000,
                    page: function (i, addImg, addAltImg) {
                        var self = this;
                        $.ajax({
                            type: "GET",
                            url: self.url,
                            dataType: "html",
                            async: false,
                            success: function (html) {
                                var ref = $(html).find("div#i7 a, #img");
								var src = ref.attr(ref.is("img")?"src":"href");
                                addImg(i,src);
                                addAltImg(i, src+" ?nl=1");
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
            run: function () {
                return {
                    title: $(".header-breadcrumbs a:eq(3)").text().trim(),
                    series: $(".header-breadcrumbs a:eq(3)").attr("href"),
                    quant: $(".image-pageSelect option").length,
                    prev: "#",
                    next: "#",
                    data: $("img.b").attr("src"),
                    page: function (i,addImg, addAltImg) {
                            console.log("Page " + i);
                            addImg(i, this.data.replace(/\/[0-9]+\./ , "/"+ i +"."));
                    }
                };
            }
        },
        // == hentai4manga =====================================================================================================================
        {
            name: "hentai4manga",
            url: /hentai4manga/,
            run: function () {
                return {
                    title: $(".category-label").text().trim(),
                    series: location.href.replace(/\/\d+\//, '/'),
                    quant: $('select#sl option').size(),
                    prev: "#",
                    next: "#",
                    url: function (i) {
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
            run: function () {
                return {
                    title: $(".category-label").text().trim(),
                    series: "http://doujinshihentai.com/series.html",
                    quant: $('#page_last').attr("href").match(/[0-9]+\./),
                    prev: "#",
                    next: "#",
                    data: location.href,
                    url: function (i) {
                        var str = '' + i;
                        while (str.length < 3) str = '0' + str;
                        return this.data.replace("001.",str+".");
                    },
                    img: '.weatimages_bigimage'
                };
            }
        },
		// == hitomi ===========================================================================================================================
        {
            name: "hitomi",
            url: /hitomi.la/,
            run: function () {
                return {
                    title: $("title").text().replace("| Hitomi.la","").trim(),
                    series: $(".brand").attr("href"),
                    quant: $("#single-page-select option").length,
                    prev: "#",
                    next: "#",
					data:$(".img-url"),
					page: function (i,addImg, addAltImg) {
                            console.log("Page " + i);
                            addImg(i, this.data.eq(i - 1).text().replace("//g","//la"));
                    }
                };
            }
        },
        // == Hentai2Read ======================================================================================================================
        {
            name: "Hentai2Read",
            url: /hentai2read/,
            run: function () {
                return {
                    title: $(".breadcrumb a:nth(2)").text().trim(),
                    series: $(".breadcrumb a:nth(2)").attr("href"),
                    quant: $(".pageDropdown:first li").length,
                    prev: "#",
                    next: "#",
                    url: function (i) {
                        var pathname = window.location.pathname.split('/');
                        return "/" + pathname[1] + "/" + pathname[2] + "/" + i + "/";
                    },
                    img: "img#arf-reader"
                };
            }
        },
        // == HentaIHere ======================================================================================================================
        {
            name: "HentaIHere",
            url: /hentaihere/,
            run: function () {
                return {
                    title: $(".breadcrumb a:nth(2)").text().trim(),
                    series: $(".breadcrumb a:nth(2)").attr("href"),
                    quant: $("#pageDropdown li").length,
                    prev: "#",
                    next: "#",
                    data: $("#reader-content img").attr("src"),
                    page: function (i, addImg, addAltImg) {
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
            run: function () {
                return {
                    title: $('title').text().split('- Page')[0].trim(),
                    series: $("div#page-container div a").attr("href"),
                    quant: $(".num-pages:first").html(),
                    prev: "#",
                    next: "#",
                    url: function (i) {
                        return "../" + i + "/";
                    },
                    img: '#page-container img'
                };
            }
        }
    ];

    $.MangaOnlineViewer.start(m);

})(jQuery);
