// ==UserScript==
// @name          Manga OnlineViewer Adult
// @author        Tago
// @updateURL     https://github.com/TagoDR/MangaOnlineViewer/raw/master/dist/Manga_OnlineViewer_Adult.meta.js
// @downloadURL   https://github.com/TagoDR/MangaOnlineViewer/raw/master/dist/Manga_OnlineViewer_Adult.user.js
// @supportURL    https://github.com/TagoDR/MangaOnlineViewer/issues
// @namespace     https://github.com/TagoDR
// @description   Shows all pages at once in online view for these sites: AkumaMoe, BestPornComix, DoujinMoeNM, Dragon Translation, 8Muses.com, 8Muses.io, ExHentai, e-Hentai, FSIComics, FreeAdultComix, GNTAI.net, Hentai2Read, HentaiEra, HentaiForce, HentaiFox, HentaiHand, nHentai.com, HentaIHere, HentaiNexus, HenTalk, Hitomi, Imhentai, KingComix, Chochox, Comics18, Luscious, MultPorn, MyHentaiGallery, nHentai.net, 9Hentai, PornComicsHD, Pururin, SchaleNetwork, Simply-Hentai, TMOHentai, 3Hentai, HentaiVox, Tsumino, vermangasporno, vercomicsporno, wnacg, XlecxOne, xyzcomics, Yabai, Madara WordPress Plugin, AllPornComic, Manytoon, Manga District
// @version       2026.04.07.build-2011
// @license       MIT
// @icon          https://cdn-icons-png.flaticon.com/32/9824/9824312.png
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
// @require       https://cdn.jsdelivr.net/npm/colorjs.io@0.6.1/dist/color.global.min.js
// @require       https://cdnjs.cloudflare.com/ajax/libs/jszip/3.9.1/jszip.min.js
// @require       https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.js
// @require       https://cdn.jsdelivr.net/npm/lodash@4.17.23/lodash.min.js
// @require       https://cdn.jsdelivr.net/npm/hotkeys-js@4.0.2/dist/hotkeys-js.min.js
// @require       https://cdn.jsdelivr.net/npm/bowser@2.14.1/bundled.js
// @require       https://cdnjs.cloudflare.com/ajax/libs/blob-util/2.0.2/blob-util.min.js
// @require       https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.5/FileSaver.min.js
// @require       https://cdn.jsdelivr.net/npm/toolcool-range-slider@4.0.28/dist/toolcool-range-slider.min.js
// @require       https://cdn.jsdelivr.net/npm/toolcool-range-slider@4.0.28/dist/plugins/tcrs-generated-labels.min.js
// @require       https://cdn.jsdelivr.net/npm/toolcool-range-slider@4.0.28/dist/plugins/tcrs-marks.min.js
// @include       /https?:\/\/(www\.)?akuma\.moe\/g\/.+\/.+/
// @include       /https?:\/\/(www\.)?bestporncomix.com\/gallery\/.+/
// @include       /https?:\/\/(www\.)?doujins.com\/.+/
// @include       /https?:\/\/(www\.)?dragontranslation.net\/leer\/.+/
// @include       /https?:\/\/(comics.)?8muses.(com|io)\/(comics\/)?picture\/.+/
// @include       /https?:\/\/(g\.)?(exhentai|e-hentai).org\/s\/.+\/.+/
// @include       /https?:\/\/(www\.)?fsicomics.com\/.+/
// @include       /https?:\/\/(www\.)?freeadultcomix.com\/.+/
// @include       /https?:\/\/(www\.)?gntai.net\/(?!(category|tags|autores))[^/]+\/.+/
// @include       /https?:\/\/(www\.)?hentai2read.com\/[^/]+\/\d+(.\d+)?\//
// @include       /https?:\/\/(www\.)?hentaiera.com\/view\/.+\/\d+\/?/
// @include       /https?:\/\/(www\.)?hentaiforce.net\/view\/.+\/\d+/
// @include       /https?:\/\/(www\.)?hentaifox.com\/g\/.+/
// @include       /https?:\/\/(www\.)?(hentaihand|nhentai).com\/.+\/reader/
// @include       /https?:\/\/(www\.)?hentaihere.com\/.+\/.+\/.+/
// @include       /https?:\/\/((www\.)?hentainexus.com|nexus.fakku.cc)\/read\/.+/
// @include       /https?:\/\/(www.)?hentalk.pw/
// @include       /https?:\/\/hitomi.la\/reader\/.+/
// @include       /https?:\/\/(www\.)?imhentai.xxx\/view\/.+\/.+\//
// @include       /https?:\/\/(www\.)?(kingcomix|chochox|comics18).(com|org)\/.+/
// @include       /https?:\/\/(www\.)?luscious.net\/.+\/read\/.+/
// @include       /https?:\/\/(www\.)?multporn.net\/(comics|hentai_manga)\/.+/
// @include       /https?:\/\/(www\.)?myhentaigallery.com\/g\/.+\/\d+/
// @include       /https?:\/\/(www\.)?(nhentai).(net|xxx|com|to)\/g\/.+/
// @include       /https?:\/\/(www\.)?9hentai.(so)\/g\/.+\/.+/
// @include       /https?:\/\/(www\.)?porncomicshd.com\/es.*/
// @include       /https?:\/\/(www\.)?pururin.me\/(view|read)\/.+\/.+\/.+/
// @include       /https?:\/\/(www\.)?(niyaniya|shupogaki|hoshino).(moe|one)/
// @include       /https?:\/\/(www\.)?simply-hentai.com\/.+\/page\/.+/
// @include       /https?:\/\/(www\.)?tmohentai.com\/reader\/.+\/(paginated\/\d+|cascade)/
// @include       /https?:\/\/(www\.)?(3hentai|hentaivox).(net|com)\/(d|view)\/.+\/.+/
// @include       /https?:\/\/(www\.)?tsumino.com\/Read\/Index\/\d+(\?page=.+)?/
// @include       /https?:\/\/(www\.)?(vermangasporno|vercomicsporno).com\/.+/
// @include       /https?:\/\/(www\.)?wnacg.com\/photos-view-id-.+/
// @include       /https?:\/\/(www\.)?xlecx.one\/.+/
// @include       /https?:\/\/(www\.)?xyzcomics.com\/.+/
// @include       /https?:\/\/(www\.)?yabai.si\/g\/.+\/read/
// @include       /https?:\/\/.+\/(porncomic|read-scan|title)\/.+\/.+/
// ==/UserScript==
(function(){var Qf=Object.create,zi=Object.defineProperty,e2=Object.getOwnPropertyDescriptor,t2=Object.getOwnPropertyNames,n2=Object.getPrototypeOf,r2=Object.prototype.hasOwnProperty,wn=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),Xc=(e,t)=>{let r={};for(var i in e)zi(r,i,{get:e[i],enumerable:!0});return t||zi(r,Symbol.toStringTag,{value:"Module"}),r},o2=(e,t,r,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(var a=t2(t),s=0,c=a.length,u;s<c;s++)u=a[s],!r2.call(e,u)&&u!==r&&zi(e,u,{get:(d=>t[d]).bind(null,u),enumerable:!(i=e2(t,u))||i.enumerable});return e},Bi=(e,t,r)=>(r=e!=null?Qf(n2(e)):{},o2(t||!e||!e.__esModule?zi(r,"default",{value:e,enumerable:!0}):r,e)),i2=wn(((e,t)=>{(function(){var r,i="4.18.1",a=200,s="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",c="Expected a function",u="Invalid `variable` option passed into `_.template`",d="Invalid `imports` option passed into `_.template`",h="__lodash_hash_undefined__",f=500,b="__lodash_placeholder__",v=1,m=2,g=4,k=1,_=2,E=1,M=2,T=4,C=8,D=16,q=32,Z=64,ne=128,F=256,pe=512,we=30,R="...",Y=800,A=16,J=1,xe=2,le=3,Ie=1/0,oe=9007199254740991,Se=17976931348623157e292,W=NaN,H=4294967295,Ae=H-1,ge=H>>>1,he=[["ary",ne],["bind",E],["bindKey",M],["curry",C],["curryRight",D],["flip",pe],["partial",q],["partialRight",Z],["rearg",F]],je="[object Arguments]",ft="[object Array]",We="[object AsyncFunction]",Fe="[object Boolean]",ct="[object Date]",pt="[object DOMException]",Ut="[object Error]",Nt="[object Function]",w="[object GeneratorFunction]",X="[object Map]",V="[object Number]",O="[object Null]",I="[object Object]",z="[object Promise]",ie="[object Proxy]",ae="[object RegExp]",N="[object Set]",de="[object String]",me="[object Symbol]",ue="[object Undefined]",Ee="[object WeakMap]",Je="[object WeakSet]",Ge="[object ArrayBuffer]",xt="[object DataView]",Qn="[object Float32Array]",Jt="[object Float64Array]",er="[object Int8Array]",it="[object Int16Array]",yr="[object Int32Array]",jr="[object Uint8Array]",fn="[object Uint8ClampedArray]",xo="[object Uint16Array]",yi="[object Uint32Array]",Dl=/\b__p \+= '';/g,zl=/\b(__p \+=) '' \+/g,La=/(__e\(.*?\)|\b__t\)) \+\n'';/g,kr=/&(?:amp|lt|gt|quot|#39);/g,qr=/[&<>"']/g,K9=RegExp(kr.source),Y9=RegExp(qr.source),X9=/<%-([\s\S]+?)%>/g,J9=/<%([\s\S]+?)%>/g,wh=/<%=([\s\S]+?)%>/g,Q9=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,e7=/^\w*$/,t7=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Bl=/[\\^$.*+?()[\]{}|]/g,n7=RegExp(Bl.source),Nl=/^\s+/,r7=/\s/,o7=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,i7=/\{\n\/\* \[wrapped with (.+)\] \*/,a7=/,? & /,s7=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,_h=/[()=,{}\[\]\/\s]/,l7=/\\(\\)?/g,c7=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,yh=/\w*$/,d7=/^[-+]0x[0-9a-f]+$/i,u7=/^0b[01]+$/i,h7=/^\[object .+?Constructor\]$/,f7=/^0o[0-7]+$/i,p7=/^(?:0|[1-9]\d*)$/,g7=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Ra=/($^)/,m7=/['\n\r\u2028\u2029\\]/g,Pa="\\ud800-\\udfff",kh="\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",Eh="\\u2700-\\u27bf",Ah="a-z\\xdf-\\xf6\\xf8-\\xff",v7="\\xac\\xb1\\xd7\\xf7",b7="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",w7="\\u2000-\\u206f",_7=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Sh="A-Z\\xc0-\\xd6\\xd8-\\xde",Mh="\\ufe0e\\ufe0f",xh=v7+b7+w7+_7,Hl="['’]",y7="["+Pa+"]",Ih="["+xh+"]",$a="["+kh+"]",Ch="\\d+",k7="["+Eh+"]",Oh="["+Ah+"]",Th="[^"+Pa+xh+Ch+Eh+Ah+Sh+"]",Fl="\\ud83c[\\udffb-\\udfff]",E7="(?:"+$a+"|"+Fl+")",Lh="[^"+Pa+"]",Gl="(?:\\ud83c[\\udde6-\\uddff]){2}",Wl="[\\ud800-\\udbff][\\udc00-\\udfff]",Io="["+Sh+"]",Rh="\\u200d",Ph="(?:"+Oh+"|"+Th+")",A7="(?:"+Io+"|"+Th+")",$h="(?:"+Hl+"(?:d|ll|m|re|s|t|ve))?",Dh="(?:"+Hl+"(?:D|LL|M|RE|S|T|VE))?",zh=E7+"?",Bh="["+Mh+"]?",S7="(?:"+Rh+"(?:"+[Lh,Gl,Wl].join("|")+")"+Bh+zh+")*",M7="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",x7="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Nh=Bh+zh+S7,I7="(?:"+[k7,Gl,Wl].join("|")+")"+Nh,C7="(?:"+[Lh+$a+"?",$a,Gl,Wl,y7].join("|")+")",O7=RegExp(Hl,"g"),T7=RegExp($a,"g"),Ul=RegExp(Fl+"(?="+Fl+")|"+C7+Nh,"g"),L7=RegExp([Io+"?"+Oh+"+"+$h+"(?="+[Ih,Io,"$"].join("|")+")",A7+"+"+Dh+"(?="+[Ih,Io+Ph,"$"].join("|")+")",Io+"?"+Ph+"+"+$h,Io+"+"+Dh,x7,M7,Ch,I7].join("|"),"g"),R7=RegExp("["+Rh+Pa+kh+Mh+"]"),P7=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,$7=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],D7=-1,at={};at[Qn]=at[Jt]=at[er]=at[it]=at[yr]=at[jr]=at[fn]=at[xo]=at[yi]=!0,at[je]=at[ft]=at[Ge]=at[Fe]=at[xt]=at[ct]=at[Ut]=at[Nt]=at[X]=at[V]=at[I]=at[ae]=at[N]=at[de]=at[Ee]=!1;var rt={};rt[je]=rt[ft]=rt[Ge]=rt[xt]=rt[Fe]=rt[ct]=rt[Qn]=rt[Jt]=rt[er]=rt[it]=rt[yr]=rt[X]=rt[V]=rt[I]=rt[ae]=rt[N]=rt[de]=rt[me]=rt[jr]=rt[fn]=rt[xo]=rt[yi]=!0,rt[Ut]=rt[Nt]=rt[Ee]=!1;var z7={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},B7={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},N7={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},H7={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},F7=parseFloat,G7=parseInt,Hh=typeof global=="object"&&global&&global.Object===Object&&global,W7=typeof self=="object"&&self&&self.Object===Object&&self,Lt=Hh||W7||Function("return this")(),Vl=typeof e=="object"&&e&&!e.nodeType&&e,Kr=Vl&&typeof t=="object"&&t&&!t.nodeType&&t,Fh=Kr&&Kr.exports===Vl,Zl=Fh&&Hh.process,Sn=(function(){try{var $=Kr&&Kr.require&&Kr.require("util").types;return $||Zl&&Zl.binding&&Zl.binding("util")}catch{}})(),Gh=Sn&&Sn.isArrayBuffer,Wh=Sn&&Sn.isDate,Uh=Sn&&Sn.isMap,Vh=Sn&&Sn.isRegExp,Zh=Sn&&Sn.isSet,jh=Sn&&Sn.isTypedArray;function pn($,Q,U){switch(U.length){case 0:return $.call(Q);case 1:return $.call(Q,U[0]);case 2:return $.call(Q,U[0],U[1]);case 3:return $.call(Q,U[0],U[1],U[2])}return $.apply(Q,U)}function U7($,Q,U,be){for(var Pe=-1,Ke=$==null?0:$.length;++Pe<Ke;){var It=$[Pe];Q(be,It,U(It),$)}return be}function gn($,Q){for(var U=-1,be=$==null?0:$.length;++U<be&&Q($[U],U,$)!==!1;);return $}function V7($,Q){for(var U=$==null?0:$.length;U--&&Q($[U],U,$)!==!1;);return $}function qh($,Q){for(var U=-1,be=$==null?0:$.length;++U<be;)if(!Q($[U],U,$))return!1;return!0}function Er($,Q){for(var U=-1,be=$==null?0:$.length,Pe=0,Ke=[];++U<be;){var It=$[U];Q(It,U,$)&&(Ke[Pe++]=It)}return Ke}function Da($,Q){return!!($!=null&&$.length)&&Co($,Q,0)>-1}function jl($,Q,U){for(var be=-1,Pe=$==null?0:$.length;++be<Pe;)if(U(Q,$[be]))return!0;return!1}function dt($,Q){for(var U=-1,be=$==null?0:$.length,Pe=Array(be);++U<be;)Pe[U]=Q($[U],U,$);return Pe}function Ar($,Q){for(var U=-1,be=Q.length,Pe=$.length;++U<be;)$[Pe+U]=Q[U];return $}function ql($,Q,U,be){var Pe=-1,Ke=$==null?0:$.length;for(be&&Ke&&(U=$[++Pe]);++Pe<Ke;)U=Q(U,$[Pe],Pe,$);return U}function Z7($,Q,U,be){var Pe=$==null?0:$.length;for(be&&Pe&&(U=$[--Pe]);Pe--;)U=Q(U,$[Pe],Pe,$);return U}function Kl($,Q){for(var U=-1,be=$==null?0:$.length;++U<be;)if(Q($[U],U,$))return!0;return!1}var j7=Yl("length");function q7($){return $.split("")}function K7($){return $.match(s7)||[]}function Kh($,Q,U){var be;return U($,function(Pe,Ke,It){if(Q(Pe,Ke,It))return be=Ke,!1}),be}function za($,Q,U,be){for(var Pe=$.length,Ke=U+(be?1:-1);be?Ke--:++Ke<Pe;)if(Q($[Ke],Ke,$))return Ke;return-1}function Co($,Q,U){return Q===Q?sw($,Q,U):za($,Yh,U)}function Y7($,Q,U,be){for(var Pe=U-1,Ke=$.length;++Pe<Ke;)if(be($[Pe],Q))return Pe;return-1}function Yh($){return $!==$}function Xh($,Q){var U=$==null?0:$.length;return U?Jl($,Q)/U:W}function Yl($){return function(Q){return Q==null?r:Q[$]}}function Xl($){return function(Q){return $==null?r:$[Q]}}function Jh($,Q,U,be,Pe){return Pe($,function(Ke,It,et){U=be?(be=!1,Ke):Q(U,Ke,It,et)}),U}function X7($,Q){var U=$.length;for($.sort(Q);U--;)$[U]=$[U].value;return $}function Jl($,Q){for(var U,be=-1,Pe=$.length;++be<Pe;){var Ke=Q($[be]);Ke!==r&&(U=U===r?Ke:U+Ke)}return U}function Ql($,Q){for(var U=-1,be=Array($);++U<$;)be[U]=Q(U);return be}function J7($,Q){return dt(Q,function(U){return[U,$[U]]})}function Qh($){return $&&$.slice(0,r1($)+1).replace(Nl,"")}function mn($){return function(Q){return $(Q)}}function ec($,Q){return dt(Q,function(U){return $[U]})}function ki($,Q){return $.has(Q)}function e1($,Q){for(var U=-1,be=$.length;++U<be&&Co(Q,$[U],0)>-1;);return U}function t1($,Q){for(var U=$.length;U--&&Co(Q,$[U],0)>-1;);return U}function Q7($,Q){for(var U=$.length,be=0;U--;)$[U]===Q&&++be;return be}var ew=Xl(z7),tw=Xl(B7);function nw($){return"\\"+H7[$]}function rw($,Q){return $==null?r:$[Q]}function Oo($){return R7.test($)}function ow($){return P7.test($)}function iw($){for(var Q,U=[];!(Q=$.next()).done;)U.push(Q.value);return U}function tc($){var Q=-1,U=Array($.size);return $.forEach(function(be,Pe){U[++Q]=[Pe,be]}),U}function n1($,Q){return function(U){return $(Q(U))}}function Sr($,Q){for(var U=-1,be=$.length,Pe=0,Ke=[];++U<be;){var It=$[U];(It===Q||It===b)&&($[U]=b,Ke[Pe++]=U)}return Ke}function Ba($){var Q=-1,U=Array($.size);return $.forEach(function(be){U[++Q]=be}),U}function aw($){var Q=-1,U=Array($.size);return $.forEach(function(be){U[++Q]=[be,be]}),U}function sw($,Q,U){for(var be=U-1,Pe=$.length;++be<Pe;)if($[be]===Q)return be;return-1}function lw($,Q,U){for(var be=U+1;be--;)if($[be]===Q)return be;return be}function To($){return Oo($)?dw($):j7($)}function Dn($){return Oo($)?uw($):q7($)}function r1($){for(var Q=$.length;Q--&&r7.test($.charAt(Q)););return Q}var cw=Xl(N7);function dw($){for(var Q=Ul.lastIndex=0;Ul.test($);)++Q;return Q}function uw($){return $.match(Ul)||[]}function hw($){return $.match(L7)||[]}var Mr=(function $(Q){Q=Q==null?Lt:Mr.defaults(Lt.Object(),Q,Mr.pick(Lt,$7));var U=Q.Array,be=Q.Date,Pe=Q.Error,Ke=Q.Function,It=Q.Math,et=Q.Object,nc=Q.RegExp,fw=Q.String,Mn=Q.TypeError,Na=U.prototype,pw=Ke.prototype,Lo=et.prototype,Ha=Q["__core-js_shared__"],Fa=pw.toString,Ye=Lo.hasOwnProperty,gw=0,o1=(function(){var n=/[^.]+$/.exec(Ha&&Ha.keys&&Ha.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""})(),Ga=Lo.toString,mw=Fa.call(et),vw=Lt._,bw=nc("^"+Fa.call(Ye).replace(Bl,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Wa=Fh?Q.Buffer:r,xr=Q.Symbol,Ua=Q.Uint8Array,i1=Wa?Wa.allocUnsafe:r,Va=n1(et.getPrototypeOf,et),a1=et.create,s1=Lo.propertyIsEnumerable,Za=Na.splice,l1=xr?xr.isConcatSpreadable:r,Ei=xr?xr.iterator:r,Yr=xr?xr.toStringTag:r,ja=(function(){try{var n=to(et,"defineProperty");return n({},"",{}),n}catch{}})(),ww=Q.clearTimeout!==Lt.clearTimeout&&Q.clearTimeout,_w=be&&be.now!==Lt.Date.now&&be.now,yw=Q.setTimeout!==Lt.setTimeout&&Q.setTimeout,qa=It.ceil,Ka=It.floor,rc=et.getOwnPropertySymbols,kw=Wa?Wa.isBuffer:r,c1=Q.isFinite,Ew=Na.join,Aw=n1(et.keys,et),Ct=It.max,Ht=It.min,Sw=be.now,Mw=Q.parseInt,d1=It.random,xw=Na.reverse,oc=to(Q,"DataView"),Ai=to(Q,"Map"),ic=to(Q,"Promise"),Ro=to(Q,"Set"),Si=to(Q,"WeakMap"),Mi=to(et,"create"),Ya=Si&&new Si,Po={},Iw=no(oc),Cw=no(Ai),Ow=no(ic),Tw=no(Ro),Lw=no(Si),Xa=xr?xr.prototype:r,xi=Xa?Xa.valueOf:r,u1=Xa?Xa.toString:r;function S(n){if(vt(n)&&!ze(n)&&!(n instanceof Ve)){if(n instanceof xn)return n;if(Ye.call(n,"__wrapped__"))return ff(n)}return new xn(n)}var $o=(function(){function n(){}return function(o){if(!gt(o))return{};if(a1)return a1(o);n.prototype=o;var l=new n;return n.prototype=r,l}})();function Ja(){}function xn(n,o){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!o,this.__index__=0,this.__values__=r}S.templateSettings={escape:X9,evaluate:J9,interpolate:wh,variable:"",imports:{_:S}},S.prototype=Ja.prototype,S.prototype.constructor=S,xn.prototype=$o(Ja.prototype),xn.prototype.constructor=xn;function Ve(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=H,this.__views__=[]}function Rw(){var n=new Ve(this.__wrapped__);return n.__actions__=Qt(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=Qt(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=Qt(this.__views__),n}function Pw(){if(this.__filtered__){var n=new Ve(this);n.__dir__=-1,n.__filtered__=!0}else n=this.clone(),n.__dir__*=-1;return n}function $w(){var n=this.__wrapped__.value(),o=this.__dir__,l=ze(n),p=o<0,y=l?n.length:0,x=j8(0,y,this.__views__),L=x.start,P=x.end,B=P-L,te=p?P:L-1,ee=this.__iteratees__,se=ee.length,ve=0,_e=Ht(B,this.__takeCount__);if(!l||!p&&y==B&&_e==B)return $1(n,this.__actions__);var Ce=[];e:for(;B--&&ve<_e;){te+=o;for(var $e=-1,Oe=n[te];++$e<se;){var tt=ee[$e],Ze=tt.iteratee,jt=tt.type,qn=Ze(Oe);if(jt==xe)Oe=qn;else if(!qn){if(jt==J)continue e;break e}}Ce[ve++]=Oe}return Ce}Ve.prototype=$o(Ja.prototype),Ve.prototype.constructor=Ve;function Xr(n){var o=-1,l=n==null?0:n.length;for(this.clear();++o<l;){var p=n[o];this.set(p[0],p[1])}}function Dw(){this.__data__=Mi?Mi(null):{},this.size=0}function zw(n){var o=this.has(n)&&delete this.__data__[n];return this.size-=o?1:0,o}function Bw(n){var o=this.__data__;if(Mi){var l=o[n];return l===h?r:l}return Ye.call(o,n)?o[n]:r}function Nw(n){var o=this.__data__;return Mi?o[n]!==r:Ye.call(o,n)}function Hw(n,o){var l=this.__data__;return this.size+=this.has(n)?0:1,l[n]=Mi&&o===r?h:o,this}Xr.prototype.clear=Dw,Xr.prototype.delete=zw,Xr.prototype.get=Bw,Xr.prototype.has=Nw,Xr.prototype.set=Hw;function tr(n){var o=-1,l=n==null?0:n.length;for(this.clear();++o<l;){var p=n[o];this.set(p[0],p[1])}}function Fw(){this.__data__=[],this.size=0}function Gw(n){var o=this.__data__,l=Qa(o,n);return l<0?!1:(l==o.length-1?o.pop():Za.call(o,l,1),--this.size,!0)}function Ww(n){var o=this.__data__,l=Qa(o,n);return l<0?r:o[l][1]}function Uw(n){return Qa(this.__data__,n)>-1}function Vw(n,o){var l=this.__data__,p=Qa(l,n);return p<0?(++this.size,l.push([n,o])):l[p][1]=o,this}tr.prototype.clear=Fw,tr.prototype.delete=Gw,tr.prototype.get=Ww,tr.prototype.has=Uw,tr.prototype.set=Vw;function nr(n){var o=-1,l=n==null?0:n.length;for(this.clear();++o<l;){var p=n[o];this.set(p[0],p[1])}}function Zw(){this.size=0,this.__data__={hash:new Xr,map:new(Ai||tr),string:new Xr}}function jw(n){var o=us(this,n).delete(n);return this.size-=o?1:0,o}function qw(n){return us(this,n).get(n)}function Kw(n){return us(this,n).has(n)}function Yw(n,o){var l=us(this,n),p=l.size;return l.set(n,o),this.size+=l.size==p?0:1,this}nr.prototype.clear=Zw,nr.prototype.delete=jw,nr.prototype.get=qw,nr.prototype.has=Kw,nr.prototype.set=Yw;function Jr(n){var o=-1,l=n==null?0:n.length;for(this.__data__=new nr;++o<l;)this.add(n[o])}function Xw(n){return this.__data__.set(n,h),this}function Jw(n){return this.__data__.has(n)}Jr.prototype.add=Jr.prototype.push=Xw,Jr.prototype.has=Jw;function zn(n){this.size=(this.__data__=new tr(n)).size}function Qw(){this.__data__=new tr,this.size=0}function e8(n){var o=this.__data__,l=o.delete(n);return this.size=o.size,l}function t8(n){return this.__data__.get(n)}function n8(n){return this.__data__.has(n)}function r8(n,o){var l=this.__data__;if(l instanceof tr){var p=l.__data__;if(!Ai||p.length<a-1)return p.push([n,o]),this.size=++l.size,this;l=this.__data__=new nr(p)}return l.set(n,o),this.size=l.size,this}zn.prototype.clear=Qw,zn.prototype.delete=e8,zn.prototype.get=t8,zn.prototype.has=n8,zn.prototype.set=r8;function h1(n,o){var l=ze(n),p=!l&&ro(n),y=!l&&!p&&Lr(n),x=!l&&!p&&!y&&No(n),L=l||p||y||x,P=L?Ql(n.length,fw):[],B=P.length;for(var te in n)(o||Ye.call(n,te))&&!(L&&(te=="length"||y&&(te=="offset"||te=="parent")||x&&(te=="buffer"||te=="byteLength"||te=="byteOffset")||ir(te,B)))&&P.push(te);return P}function f1(n){var o=n.length;return o?n[mc(0,o-1)]:r}function o8(n,o){return hs(Qt(n),Qr(o,0,n.length))}function i8(n){return hs(Qt(n))}function ac(n,o,l){(l!==r&&!Nn(n[o],l)||l===r&&!(o in n))&&Vn(n,o,l)}function Ii(n,o,l){var p=n[o];(!(Ye.call(n,o)&&Nn(p,l))||l===r&&!(o in n))&&Vn(n,o,l)}function Qa(n,o){for(var l=n.length;l--;)if(Nn(n[l][0],o))return l;return-1}function a8(n,o,l,p){return Ir(n,function(y,x,L){o(p,y,l(y),L)}),p}function p1(n,o){return n&&jn(o,Rt(o),n)}function s8(n,o){return n&&jn(o,tn(o),n)}function Vn(n,o,l){o=="__proto__"&&ja?ja(n,o,{configurable:!0,enumerable:!0,value:l,writable:!0}):n[o]=l}function sc(n,o){for(var l=-1,p=o.length,y=U(p),x=n==null;++l<p;)y[l]=x?r:Gc(n,o[l]);return y}function Qr(n,o,l){return n===n&&(l!==r&&(n=n<=l?n:l),o!==r&&(n=n>=o?n:o)),n}function In(n,o,l,p,y,x){var L,P=o&v,B=o&m,te=o&g;if(l&&(L=y?l(n,p,y,x):l(n)),L!==r)return L;if(!gt(n))return n;var ee=ze(n);if(ee){if(L=K8(n),!P)return Qt(n,L)}else{var se=Ft(n),ve=se==Nt||se==w;if(Lr(n))return B1(n,P);if(se==I||se==je||ve&&!y){if(L=B||ve?{}:rf(n),!P)return B?B8(n,s8(L,n)):z8(n,p1(L,n))}else{if(!rt[se])return y?n:{};L=Y8(n,se,P)}}x||(x=new zn);var _e=x.get(n);if(_e)return _e;x.set(n,L),Rf(n)?n.forEach(function($e){L.add(In($e,o,l,$e,n,x))}):Tf(n)&&n.forEach(function($e,Oe){L.set(Oe,In($e,o,l,Oe,n,x))});var Ce=ee?r:(te?B?xc:Mc:B?tn:Rt)(n);return gn(Ce||n,function($e,Oe){Ce&&(Oe=$e,$e=n[Oe]),Ii(L,Oe,In($e,o,l,Oe,n,x))}),L}function l8(n){var o=Rt(n);return function(l){return g1(l,n,o)}}function g1(n,o,l){var p=l.length;if(n==null)return!p;for(n=et(n);p--;){var y=l[p],x=o[y],L=n[y];if(L===r&&!(y in n)||!x(L))return!1}return!0}function m1(n,o,l){if(typeof n!="function")throw new Mn(c);return $i(function(){n.apply(r,l)},o)}function Ci(n,o,l,p){var y=-1,x=Da,L=!0,P=n.length,B=[],te=o.length;if(!P)return B;l&&(o=dt(o,mn(l))),p?(x=jl,L=!1):o.length>=a&&(x=ki,L=!1,o=new Jr(o));e:for(;++y<P;){var ee=n[y],se=l==null?ee:l(ee);if(ee=p||ee!==0?ee:0,L&&se===se){for(var ve=te;ve--;)if(o[ve]===se)continue e;B.push(ee)}else x(o,se,p)||B.push(ee)}return B}var Ir=W1(Zn),v1=W1(cc,!0);function c8(n,o){var l=!0;return Ir(n,function(p,y,x){return l=!!o(p,y,x),l}),l}function es(n,o,l){for(var p=-1,y=n.length;++p<y;){var x=n[p],L=o(x);if(L!=null&&(P===r?L===L&&!bn(L):l(L,P)))var P=L,B=x}return B}function d8(n,o,l,p){var y=n.length;for(l=Ne(l),l<0&&(l=-l>y?0:y+l),p=p===r||p>y?y:Ne(p),p<0&&(p+=y),p=l>p?0:$f(p);l<p;)n[l++]=o;return n}function b1(n,o){var l=[];return Ir(n,function(p,y,x){o(p,y,x)&&l.push(p)}),l}function zt(n,o,l,p,y){var x=-1,L=n.length;for(l||(l=J8),y||(y=[]);++x<L;){var P=n[x];o>0&&l(P)?o>1?zt(P,o-1,l,p,y):Ar(y,P):p||(y[y.length]=P)}return y}var lc=U1(),w1=U1(!0);function Zn(n,o){return n&&lc(n,o,Rt)}function cc(n,o){return n&&w1(n,o,Rt)}function ts(n,o){return Er(o,function(l){return ar(n[l])})}function eo(n,o){o=Or(o,n);for(var l=0,p=o.length;n!=null&&l<p;)n=n[Bn(o[l++])];return l&&l==p?n:r}function _1(n,o,l){var p=o(n);return ze(n)?p:Ar(p,l(n))}function Vt(n){return n==null?n===r?ue:O:Yr&&Yr in et(n)?Z8(n):i_(n)}function dc(n,o){return n>o}function u8(n,o){return n!=null&&Ye.call(n,o)}function h8(n,o){return n!=null&&o in et(n)}function f8(n,o,l){return n>=Ht(o,l)&&n<Ct(o,l)}function uc(n,o,l){for(var p=l?jl:Da,y=n[0].length,x=n.length,L=x,P=U(x),B=1/0,te=[];L--;){var ee=n[L];L&&o&&(ee=dt(ee,mn(o))),B=Ht(ee.length,B),P[L]=!l&&(o||y>=120&&ee.length>=120)?new Jr(L&&ee):r}ee=n[0];var se=-1,ve=P[0];e:for(;++se<y&&te.length<B;){var _e=ee[se],Ce=o?o(_e):_e;if(_e=l||_e!==0?_e:0,!(ve?ki(ve,Ce):p(te,Ce,l))){for(L=x;--L;){var $e=P[L];if(!($e?ki($e,Ce):p(n[L],Ce,l)))continue e}ve&&ve.push(Ce),te.push(_e)}}return te}function p8(n,o,l,p){return Zn(n,function(y,x,L){o(p,l(y),x,L)}),p}function Oi(n,o,l){o=Or(o,n),n=lf(n,o);var p=n==null?n:n[Bn(On(o))];return p==null?r:pn(p,n,l)}function y1(n){return vt(n)&&Vt(n)==je}function g8(n){return vt(n)&&Vt(n)==Ge}function m8(n){return vt(n)&&Vt(n)==ct}function Ti(n,o,l,p,y){return n===o?!0:n==null||o==null||!vt(n)&&!vt(o)?n!==n&&o!==o:v8(n,o,l,p,Ti,y)}function v8(n,o,l,p,y,x){var L=ze(n),P=ze(o),B=L?ft:Ft(n),te=P?ft:Ft(o);B=B==je?I:B,te=te==je?I:te;var ee=B==I,se=te==I,ve=B==te;if(ve&&Lr(n)){if(!Lr(o))return!1;L=!0,ee=!1}if(ve&&!ee)return x||(x=new zn),L||No(n)?ef(n,o,l,p,y,x):U8(n,o,B,l,p,y,x);if(!(l&k)){var _e=ee&&Ye.call(n,"__wrapped__"),Ce=se&&Ye.call(o,"__wrapped__");if(_e||Ce){var $e=_e?n.value():n,Oe=Ce?o.value():o;return x||(x=new zn),y($e,Oe,l,p,x)}}return ve?(x||(x=new zn),V8(n,o,l,p,y,x)):!1}function b8(n){return vt(n)&&Ft(n)==X}function hc(n,o,l,p){var y=l.length,x=y,L=!p;if(n==null)return!x;for(n=et(n);y--;){var P=l[y];if(L&&P[2]?P[1]!==n[P[0]]:!(P[0]in n))return!1}for(;++y<x;){P=l[y];var B=P[0],te=n[B],ee=P[1];if(L&&P[2]){if(te===r&&!(B in n))return!1}else{var se=new zn;if(p)var ve=p(te,ee,B,n,o,se);if(!(ve===r?Ti(ee,te,k|_,p,se):ve))return!1}}return!0}function k1(n){return!gt(n)||e_(n)?!1:(ar(n)?bw:h7).test(no(n))}function w8(n){return vt(n)&&Vt(n)==ae}function _8(n){return vt(n)&&Ft(n)==N}function y8(n){return vt(n)&&bs(n.length)&&!!at[Vt(n)]}function E1(n){return typeof n=="function"?n:n==null?nn:typeof n=="object"?ze(n)?M1(n[0],n[1]):S1(n):jf(n)}function fc(n){if(!Pi(n))return Aw(n);var o=[];for(var l in et(n))Ye.call(n,l)&&l!="constructor"&&o.push(l);return o}function k8(n){if(!gt(n))return o_(n);var o=Pi(n),l=[];for(var p in n)p=="constructor"&&(o||!Ye.call(n,p))||l.push(p);return l}function pc(n,o){return n<o}function A1(n,o){var l=-1,p=en(n)?U(n.length):[];return Ir(n,function(y,x,L){p[++l]=o(y,x,L)}),p}function S1(n){var o=Cc(n);return o.length==1&&o[0][2]?af(o[0][0],o[0][1]):function(l){return l===n||hc(l,n,o)}}function M1(n,o){return Tc(n)&&of(o)?af(Bn(n),o):function(l){var p=Gc(l,n);return p===r&&p===o?Wc(l,n):Ti(o,p,k|_)}}function ns(n,o,l,p,y){n!==o&&lc(o,function(x,L){if(y||(y=new zn),gt(x))E8(n,o,L,l,ns,p,y);else{var P=p?p(Rc(n,L),x,L+"",n,o,y):r;P===r&&(P=x),ac(n,L,P)}},tn)}function E8(n,o,l,p,y,x,L){var P=Rc(n,l),B=Rc(o,l),te=L.get(B);if(te){ac(n,l,te);return}var ee=x?x(P,B,l+"",n,o,L):r,se=ee===r;if(se){var ve=ze(B),_e=!ve&&Lr(B),Ce=!ve&&!_e&&No(B);ee=B,ve||_e||Ce?ze(P)?ee=P:bt(P)?ee=Qt(P):_e?(se=!1,ee=B1(B,!0)):Ce?(se=!1,ee=N1(B,!0)):ee=[]:Di(B)||ro(B)?(ee=P,ro(P)?ee=Df(P):(!gt(P)||ar(P))&&(ee=rf(B))):se=!1}se&&(L.set(B,ee),y(ee,B,p,x,L),L.delete(B)),ac(n,l,ee)}function x1(n,o){var l=n.length;if(l)return o+=o<0?l:0,ir(o,l)?n[o]:r}function I1(n,o,l){o.length?o=dt(o,function(y){return ze(y)?function(x){return eo(x,y.length===1?y[0]:y)}:y}):o=[nn];var p=-1;return o=dt(o,mn(Te())),X7(A1(n,function(y,x,L){return{criteria:dt(o,function(P){return P(y)}),index:++p,value:y}}),function(y,x){return D8(y,x,l)})}function A8(n,o){return C1(n,o,function(l,p){return Wc(n,p)})}function C1(n,o,l){for(var p=-1,y=o.length,x={};++p<y;){var L=o[p],P=eo(n,L);l(P,L)&&Li(x,Or(L,n),P)}return x}function S8(n){return function(o){return eo(o,n)}}function gc(n,o,l,p){var y=p?Y7:Co,x=-1,L=o.length,P=n;for(n===o&&(o=Qt(o)),l&&(P=dt(n,mn(l)));++x<L;)for(var B=0,te=o[x],ee=l?l(te):te;(B=y(P,ee,B,p))>-1;)P!==n&&Za.call(P,B,1),Za.call(n,B,1);return n}function O1(n,o){for(var l=n?o.length:0,p=l-1;l--;){var y=o[l];if(l==p||y!==x){var x=y;ir(y)?Za.call(n,y,1):wc(n,y)}}return n}function mc(n,o){return n+Ka(d1()*(o-n+1))}function M8(n,o,l,p){for(var y=-1,x=Ct(qa((o-n)/(l||1)),0),L=U(x);x--;)L[p?x:++y]=n,n+=l;return L}function vc(n,o){var l="";if(!n||o<1||o>oe)return l;do o%2&&(l+=n),o=Ka(o/2),o&&(n+=n);while(o);return l}function Ue(n,o){return Pc(sf(n,o,nn),n+"")}function x8(n){return f1(Ho(n))}function I8(n,o){var l=Ho(n);return hs(l,Qr(o,0,l.length))}function Li(n,o,l,p){if(!gt(n))return n;o=Or(o,n);for(var y=-1,x=o.length,L=x-1,P=n;P!=null&&++y<x;){var B=Bn(o[y]),te=l;if(B==="__proto__"||B==="constructor"||B==="prototype")return n;if(y!=L){var ee=P[B];te=p?p(ee,B,P):r,te===r&&(te=gt(ee)?ee:ir(o[y+1])?[]:{})}Ii(P,B,te),P=P[B]}return n}var T1=Ya?function(n,o){return Ya.set(n,o),n}:nn,C8=ja?function(n,o){return ja(n,"toString",{configurable:!0,enumerable:!1,value:Vc(o),writable:!0})}:nn;function O8(n){return hs(Ho(n))}function Cn(n,o,l){var p=-1,y=n.length;o<0&&(o=-o>y?0:y+o),l=l>y?y:l,l<0&&(l+=y),y=o>l?0:l-o>>>0,o>>>=0;for(var x=U(y);++p<y;)x[p]=n[p+o];return x}function T8(n,o){var l;return Ir(n,function(p,y,x){return l=o(p,y,x),!l}),!!l}function rs(n,o,l){var p=0,y=n==null?p:n.length;if(typeof o=="number"&&o===o&&y<=ge){for(;p<y;){var x=p+y>>>1,L=n[x];L!==null&&!bn(L)&&(l?L<=o:L<o)?p=x+1:y=x}return y}return bc(n,o,nn,l)}function bc(n,o,l,p){var y=0,x=n==null?0:n.length;if(x===0)return 0;o=l(o);for(var L=o!==o,P=o===null,B=bn(o),te=o===r;y<x;){var ee=Ka((y+x)/2),se=l(n[ee]),ve=se!==r,_e=se===null,Ce=se===se,$e=bn(se);if(L)var Oe=p||Ce;else te?Oe=Ce&&(p||ve):P?Oe=Ce&&ve&&(p||!_e):B?Oe=Ce&&ve&&!_e&&(p||!$e):_e||$e?Oe=!1:Oe=p?se<=o:se<o;Oe?y=ee+1:x=ee}return Ht(x,Ae)}function L1(n,o){for(var l=-1,p=n.length,y=0,x=[];++l<p;){var L=n[l],P=o?o(L):L;if(!l||!Nn(P,B)){var B=P;x[y++]=L===0?0:L}}return x}function R1(n){return typeof n=="number"?n:bn(n)?W:+n}function vn(n){if(typeof n=="string")return n;if(ze(n))return dt(n,vn)+"";if(bn(n))return u1?u1.call(n):"";var o=n+"";return o=="0"&&1/n==-Ie?"-0":o}function Cr(n,o,l){var p=-1,y=Da,x=n.length,L=!0,P=[],B=P;if(l)L=!1,y=jl;else if(x>=a){var te=o?null:G8(n);if(te)return Ba(te);L=!1,y=ki,B=new Jr}else B=o?[]:P;e:for(;++p<x;){var ee=n[p],se=o?o(ee):ee;if(ee=l||ee!==0?ee:0,L&&se===se){for(var ve=B.length;ve--;)if(B[ve]===se)continue e;o&&B.push(se),P.push(ee)}else y(B,se,l)||(B!==P&&B.push(se),P.push(ee))}return P}function wc(n,o){o=Or(o,n);var l=-1,p=o.length;if(!p)return!0;for(;++l<p;){var y=Bn(o[l]);if(y==="__proto__"&&!Ye.call(n,"__proto__")||(y==="constructor"||y==="prototype")&&l<p-1)return!1}var x=lf(n,o);return x==null||delete x[Bn(On(o))]}function P1(n,o,l,p){return Li(n,o,l(eo(n,o)),p)}function os(n,o,l,p){for(var y=n.length,x=p?y:-1;(p?x--:++x<y)&&o(n[x],x,n););return l?Cn(n,p?0:x,p?x+1:y):Cn(n,p?x+1:0,p?y:x)}function $1(n,o){var l=n;return l instanceof Ve&&(l=l.value()),ql(o,function(p,y){return y.func.apply(y.thisArg,Ar([p],y.args))},l)}function _c(n,o,l){var p=n.length;if(p<2)return p?Cr(n[0]):[];for(var y=-1,x=U(p);++y<p;)for(var L=n[y],P=-1;++P<p;)P!=y&&(x[y]=Ci(x[y]||L,n[P],o,l));return Cr(zt(x,1),o,l)}function D1(n,o,l){for(var p=-1,y=n.length,x=o.length,L={};++p<y;){var P=p<x?o[p]:r;l(L,n[p],P)}return L}function yc(n){return bt(n)?n:[]}function kc(n){return typeof n=="function"?n:nn}function Or(n,o){return ze(n)?n:Tc(n,o)?[n]:hf(Xe(n))}var L8=Ue;function Tr(n,o,l){var p=n.length;return l=l===r?p:l,!o&&l>=p?n:Cn(n,o,l)}var z1=ww||function(n){return Lt.clearTimeout(n)};function B1(n,o){if(o)return n.slice();var l=n.length,p=i1?i1(l):new n.constructor(l);return n.copy(p),p}function Ec(n){var o=new n.constructor(n.byteLength);return new Ua(o).set(new Ua(n)),o}function R8(n,o){var l=o?Ec(n.buffer):n.buffer;return new n.constructor(l,n.byteOffset,n.byteLength)}function P8(n){var o=new n.constructor(n.source,yh.exec(n));return o.lastIndex=n.lastIndex,o}function $8(n){return xi?et(xi.call(n)):{}}function N1(n,o){var l=o?Ec(n.buffer):n.buffer;return new n.constructor(l,n.byteOffset,n.length)}function H1(n,o){if(n!==o){var l=n!==r,p=n===null,y=n===n,x=bn(n),L=o!==r,P=o===null,B=o===o,te=bn(o);if(!P&&!te&&!x&&n>o||x&&L&&B&&!P&&!te||p&&L&&B||!l&&B||!y)return 1;if(!p&&!x&&!te&&n<o||te&&l&&y&&!p&&!x||P&&l&&y||!L&&y||!B)return-1}return 0}function D8(n,o,l){for(var p=-1,y=n.criteria,x=o.criteria,L=y.length,P=l.length;++p<L;){var B=H1(y[p],x[p]);if(B)return p>=P?B:B*(l[p]=="desc"?-1:1)}return n.index-o.index}function F1(n,o,l,p){for(var y=-1,x=n.length,L=l.length,P=-1,B=o.length,te=Ct(x-L,0),ee=U(B+te),se=!p;++P<B;)ee[P]=o[P];for(;++y<L;)(se||y<x)&&(ee[l[y]]=n[y]);for(;te--;)ee[P++]=n[y++];return ee}function G1(n,o,l,p){for(var y=-1,x=n.length,L=-1,P=l.length,B=-1,te=o.length,ee=Ct(x-P,0),se=U(ee+te),ve=!p;++y<ee;)se[y]=n[y];for(var _e=y;++B<te;)se[_e+B]=o[B];for(;++L<P;)(ve||y<x)&&(se[_e+l[L]]=n[y++]);return se}function Qt(n,o){var l=-1,p=n.length;for(o||(o=U(p));++l<p;)o[l]=n[l];return o}function jn(n,o,l,p){var y=!l;l||(l={});for(var x=-1,L=o.length;++x<L;){var P=o[x],B=p?p(l[P],n[P],P,l,n):r;B===r&&(B=n[P]),y?Vn(l,P,B):Ii(l,P,B)}return l}function z8(n,o){return jn(n,Oc(n),o)}function B8(n,o){return jn(n,tf(n),o)}function is(n,o){return function(l,p){var y=ze(l)?U7:a8,x=o?o():{};return y(l,n,Te(p,2),x)}}function Do(n){return Ue(function(o,l){var p=-1,y=l.length,x=y>1?l[y-1]:r,L=y>2?l[2]:r;for(x=n.length>3&&typeof x=="function"?(y--,x):r,L&&Zt(l[0],l[1],L)&&(x=y<3?r:x,y=1),o=et(o);++p<y;){var P=l[p];P&&n(o,P,p,x)}return o})}function W1(n,o){return function(l,p){if(l==null)return l;if(!en(l))return n(l,p);for(var y=l.length,x=o?y:-1,L=et(l);(o?x--:++x<y)&&p(L[x],x,L)!==!1;);return l}}function U1(n){return function(o,l,p){for(var y=-1,x=et(o),L=p(o),P=L.length;P--;){var B=L[n?P:++y];if(l(x[B],B,x)===!1)break}return o}}function N8(n,o,l){var p=o&E,y=Ri(n);function x(){return(this&&this!==Lt&&this instanceof x?y:n).apply(p?l:this,arguments)}return x}function V1(n){return function(o){o=Xe(o);var l=Oo(o)?Dn(o):r,p=l?l[0]:o.charAt(0),y=l?Tr(l,1).join(""):o.slice(1);return p[n]()+y}}function zo(n){return function(o){return ql(Vf(Uf(o).replace(O7,"")),n,"")}}function Ri(n){return function(){var o=arguments;switch(o.length){case 0:return new n;case 1:return new n(o[0]);case 2:return new n(o[0],o[1]);case 3:return new n(o[0],o[1],o[2]);case 4:return new n(o[0],o[1],o[2],o[3]);case 5:return new n(o[0],o[1],o[2],o[3],o[4]);case 6:return new n(o[0],o[1],o[2],o[3],o[4],o[5]);case 7:return new n(o[0],o[1],o[2],o[3],o[4],o[5],o[6])}var l=$o(n.prototype),p=n.apply(l,o);return gt(p)?p:l}}function H8(n,o,l){var p=Ri(n);function y(){for(var x=arguments.length,L=U(x),P=x,B=Bo(y);P--;)L[P]=arguments[P];var te=x<3&&L[0]!==B&&L[x-1]!==B?[]:Sr(L,B);return x-=te.length,x<l?Y1(n,o,as,y.placeholder,r,L,te,r,r,l-x):pn(this&&this!==Lt&&this instanceof y?p:n,this,L)}return y}function Z1(n){return function(o,l,p){var y=et(o);if(!en(o)){var x=Te(l,3);o=Rt(o),l=function(P){return x(y[P],P,y)}}var L=n(o,l,p);return L>-1?y[x?o[L]:L]:r}}function j1(n){return or(function(o){var l=o.length,p=l,y=xn.prototype.thru;for(n&&o.reverse();p--;){var x=o[p];if(typeof x!="function")throw new Mn(c);if(y&&!L&&ds(x)=="wrapper")var L=new xn([],!0)}for(p=L?p:l;++p<l;){x=o[p];var P=ds(x),B=P=="wrapper"?Ic(x):r;B&&Lc(B[0])&&B[1]==(ne|C|q|F)&&!B[4].length&&B[9]==1?L=L[ds(B[0])].apply(L,B[3]):L=x.length==1&&Lc(x)?L[P]():L.thru(x)}return function(){var te=arguments,ee=te[0];if(L&&te.length==1&&ze(ee))return L.plant(ee).value();for(var se=0,ve=l?o[se].apply(this,te):ee;++se<l;)ve=o[se].call(this,ve);return ve}})}function as(n,o,l,p,y,x,L,P,B,te){var ee=o&ne,se=o&E,ve=o&M,_e=o&(C|D),Ce=o&pe,$e=ve?r:Ri(n);function Oe(){for(var tt=arguments.length,Ze=U(tt),jt=tt;jt--;)Ze[jt]=arguments[jt];if(_e)var qn=Bo(Oe),Rr=Q7(Ze,qn);if(p&&(Ze=F1(Ze,p,y,_e)),x&&(Ze=G1(Ze,x,L,_e)),tt-=Rr,_e&&tt<te){var wt=Sr(Ze,qn);return Y1(n,o,as,Oe.placeholder,l,Ze,wt,P,B,te-tt)}var Hn=se?l:this,lr=ve?Hn[n]:n;return tt=Ze.length,P?Ze=a_(Ze,P):Ce&&tt>1&&Ze.reverse(),ee&&B<tt&&(Ze.length=B),this&&this!==Lt&&this instanceof Oe&&(lr=$e||Ri(lr)),lr.apply(Hn,Ze)}return Oe}function q1(n,o){return function(l,p){return p8(l,n,o(p),{})}}function ss(n,o){return function(l,p){var y;if(l===r&&p===r)return o;if(l!==r&&(y=l),p!==r){if(y===r)return p;typeof l=="string"||typeof p=="string"?(l=vn(l),p=vn(p)):(l=R1(l),p=R1(p)),y=n(l,p)}return y}}function Ac(n){return or(function(o){return o=dt(o,mn(Te())),Ue(function(l){var p=this;return n(o,function(y){return pn(y,p,l)})})})}function ls(n,o){o=o===r?" ":vn(o);var l=o.length;if(l<2)return l?vc(o,n):o;var p=vc(o,qa(n/To(o)));return Oo(o)?Tr(Dn(p),0,n).join(""):p.slice(0,n)}function F8(n,o,l,p){var y=o&E,x=Ri(n);function L(){for(var P=-1,B=arguments.length,te=-1,ee=p.length,se=U(ee+B),ve=this&&this!==Lt&&this instanceof L?x:n;++te<ee;)se[te]=p[te];for(;B--;)se[te++]=arguments[++P];return pn(ve,y?l:this,se)}return L}function K1(n){return function(o,l,p){return p&&typeof p!="number"&&Zt(o,l,p)&&(l=p=r),o=sr(o),l===r?(l=o,o=0):l=sr(l),p=p===r?o<l?1:-1:sr(p),M8(o,l,p,n)}}function cs(n){return function(o,l){return typeof o=="string"&&typeof l=="string"||(o=Tn(o),l=Tn(l)),n(o,l)}}function Y1(n,o,l,p,y,x,L,P,B,te){var ee=o&C,se=ee?L:r,ve=ee?r:L,_e=ee?x:r,Ce=ee?r:x;o|=ee?q:Z,o&=~(ee?Z:q),o&T||(o&=~(E|M));var $e=[n,o,y,_e,se,Ce,ve,P,B,te],Oe=l.apply(r,$e);return Lc(n)&&cf(Oe,$e),Oe.placeholder=p,df(Oe,n,o)}function Sc(n){var o=It[n];return function(l,p){if(l=Tn(l),p=p==null?0:Ht(Ne(p),292),p&&c1(l)){var y=(Xe(l)+"e").split("e");return y=(Xe(o(y[0]+"e"+(+y[1]+p)))+"e").split("e"),+(y[0]+"e"+(+y[1]-p))}return o(l)}}var G8=Ro&&1/Ba(new Ro([,-0]))[1]==Ie?function(n){return new Ro(n)}:qc;function X1(n){return function(o){var l=Ft(o);return l==X?tc(o):l==N?aw(o):J7(o,n(o))}}function rr(n,o,l,p,y,x,L,P){var B=o&M;if(!B&&typeof n!="function")throw new Mn(c);var te=p?p.length:0;if(te||(o&=~(q|Z),p=y=r),L=L===r?L:Ct(Ne(L),0),P=P===r?P:Ne(P),te-=y?y.length:0,o&Z){var ee=p,se=y;p=y=r}var ve=B?r:Ic(n),_e=[n,o,l,p,y,ee,se,x,L,P];if(ve&&r_(_e,ve),n=_e[0],o=_e[1],l=_e[2],p=_e[3],y=_e[4],P=_e[9]=_e[9]===r?B?0:n.length:Ct(_e[9]-te,0),!P&&o&(C|D)&&(o&=~(C|D)),!o||o==E)var Ce=N8(n,o,l);else o==C||o==D?Ce=H8(n,o,P):(o==q||o==(E|q))&&!y.length?Ce=F8(n,o,l,p):Ce=as.apply(r,_e);return df((ve?T1:cf)(Ce,_e),n,o)}function J1(n,o,l,p){return n===r||Nn(n,Lo[l])&&!Ye.call(p,l)?o:n}function Q1(n,o,l,p,y,x){return gt(n)&&gt(o)&&(x.set(o,n),ns(n,o,r,Q1,x),x.delete(o)),n}function W8(n){return Di(n)?r:n}function ef(n,o,l,p,y,x){var L=l&k,P=n.length,B=o.length;if(P!=B&&!(L&&B>P))return!1;var te=x.get(n),ee=x.get(o);if(te&&ee)return te==o&&ee==n;var se=-1,ve=!0,_e=l&_?new Jr:r;for(x.set(n,o),x.set(o,n);++se<P;){var Ce=n[se],$e=o[se];if(p)var Oe=L?p($e,Ce,se,o,n,x):p(Ce,$e,se,n,o,x);if(Oe!==r){if(Oe)continue;ve=!1;break}if(_e){if(!Kl(o,function(tt,Ze){if(!ki(_e,Ze)&&(Ce===tt||y(Ce,tt,l,p,x)))return _e.push(Ze)})){ve=!1;break}}else if(!(Ce===$e||y(Ce,$e,l,p,x))){ve=!1;break}}return x.delete(n),x.delete(o),ve}function U8(n,o,l,p,y,x,L){switch(l){case xt:if(n.byteLength!=o.byteLength||n.byteOffset!=o.byteOffset)return!1;n=n.buffer,o=o.buffer;case Ge:return!(n.byteLength!=o.byteLength||!x(new Ua(n),new Ua(o)));case Fe:case ct:case V:return Nn(+n,+o);case Ut:return n.name==o.name&&n.message==o.message;case ae:case de:return n==o+"";case X:var P=tc;case N:var B=p&k;if(P||(P=Ba),n.size!=o.size&&!B)return!1;var te=L.get(n);if(te)return te==o;p|=_,L.set(n,o);var ee=ef(P(n),P(o),p,y,x,L);return L.delete(n),ee;case me:if(xi)return xi.call(n)==xi.call(o)}return!1}function V8(n,o,l,p,y,x){var L=l&k,P=Mc(n),B=P.length;if(B!=Mc(o).length&&!L)return!1;for(var te=B;te--;){var ee=P[te];if(!(L?ee in o:Ye.call(o,ee)))return!1}var se=x.get(n),ve=x.get(o);if(se&&ve)return se==o&&ve==n;var _e=!0;x.set(n,o),x.set(o,n);for(var Ce=L;++te<B;){ee=P[te];var $e=n[ee],Oe=o[ee];if(p)var tt=L?p(Oe,$e,ee,o,n,x):p($e,Oe,ee,n,o,x);if(!(tt===r?$e===Oe||y($e,Oe,l,p,x):tt)){_e=!1;break}Ce||(Ce=ee=="constructor")}if(_e&&!Ce){var Ze=n.constructor,jt=o.constructor;Ze!=jt&&"constructor"in n&&"constructor"in o&&!(typeof Ze=="function"&&Ze instanceof Ze&&typeof jt=="function"&&jt instanceof jt)&&(_e=!1)}return x.delete(n),x.delete(o),_e}function or(n){return Pc(sf(n,r,mf),n+"")}function Mc(n){return _1(n,Rt,Oc)}function xc(n){return _1(n,tn,tf)}var Ic=Ya?function(n){return Ya.get(n)}:qc;function ds(n){for(var o=n.name+"",l=Po[o],p=Ye.call(Po,o)?l.length:0;p--;){var y=l[p],x=y.func;if(x==null||x==n)return y.name}return o}function Bo(n){return(Ye.call(S,"placeholder")?S:n).placeholder}function Te(){var n=S.iteratee||Zc;return n=n===Zc?E1:n,arguments.length?n(arguments[0],arguments[1]):n}function us(n,o){var l=n.__data__;return Q8(o)?l[typeof o=="string"?"string":"hash"]:l.map}function Cc(n){for(var o=Rt(n),l=o.length;l--;){var p=o[l],y=n[p];o[l]=[p,y,of(y)]}return o}function to(n,o){var l=rw(n,o);return k1(l)?l:r}function Z8(n){var o=Ye.call(n,Yr),l=n[Yr];try{n[Yr]=r;var p=!0}catch{}var y=Ga.call(n);return p&&(o?n[Yr]=l:delete n[Yr]),y}var Oc=rc?function(n){return n==null?[]:(n=et(n),Er(rc(n),function(o){return s1.call(n,o)}))}:Kc,tf=rc?function(n){for(var o=[];n;)Ar(o,Oc(n)),n=Va(n);return o}:Kc,Ft=Vt;(oc&&Ft(new oc(new ArrayBuffer(1)))!=xt||Ai&&Ft(new Ai)!=X||ic&&Ft(ic.resolve())!=z||Ro&&Ft(new Ro)!=N||Si&&Ft(new Si)!=Ee)&&(Ft=function(n){var o=Vt(n),l=o==I?n.constructor:r,p=l?no(l):"";if(p)switch(p){case Iw:return xt;case Cw:return X;case Ow:return z;case Tw:return N;case Lw:return Ee}return o});function j8(n,o,l){for(var p=-1,y=l.length;++p<y;){var x=l[p],L=x.size;switch(x.type){case"drop":n+=L;break;case"dropRight":o-=L;break;case"take":o=Ht(o,n+L);break;case"takeRight":n=Ct(n,o-L);break}}return{start:n,end:o}}function q8(n){var o=n.match(i7);return o?o[1].split(a7):[]}function nf(n,o,l){o=Or(o,n);for(var p=-1,y=o.length,x=!1;++p<y;){var L=Bn(o[p]);if(!(x=n!=null&&l(n,L)))break;n=n[L]}return x||++p!=y?x:(y=n==null?0:n.length,!!y&&bs(y)&&ir(L,y)&&(ze(n)||ro(n)))}function K8(n){var o=n.length,l=new n.constructor(o);return o&&typeof n[0]=="string"&&Ye.call(n,"index")&&(l.index=n.index,l.input=n.input),l}function rf(n){return typeof n.constructor=="function"&&!Pi(n)?$o(Va(n)):{}}function Y8(n,o,l){var p=n.constructor;switch(o){case Ge:return Ec(n);case Fe:case ct:return new p(+n);case xt:return R8(n,l);case Qn:case Jt:case er:case it:case yr:case jr:case fn:case xo:case yi:return N1(n,l);case X:return new p;case V:case de:return new p(n);case ae:return P8(n);case N:return new p;case me:return $8(n)}}function X8(n,o){var l=o.length;if(!l)return n;var p=l-1;return o[p]=(l>1?"& ":"")+o[p],o=o.join(l>2?", ":" "),n.replace(o7,`{
/* [wrapped with `+o+`] */
`)}function J8(n){return ze(n)||ro(n)||!!(l1&&n&&n[l1])}function ir(n,o){var l=typeof n;return o=o??oe,!!o&&(l=="number"||l!="symbol"&&p7.test(n))&&n>-1&&n%1==0&&n<o}function Zt(n,o,l){if(!gt(l))return!1;var p=typeof o;return(p=="number"?en(l)&&ir(o,l.length):p=="string"&&o in l)?Nn(l[o],n):!1}function Tc(n,o){if(ze(n))return!1;var l=typeof n;return l=="number"||l=="symbol"||l=="boolean"||n==null||bn(n)?!0:e7.test(n)||!Q9.test(n)||o!=null&&n in et(o)}function Q8(n){var o=typeof n;return o=="string"||o=="number"||o=="symbol"||o=="boolean"?n!=="__proto__":n===null}function Lc(n){var o=ds(n),l=S[o];if(typeof l!="function"||!(o in Ve.prototype))return!1;if(n===l)return!0;var p=Ic(l);return!!p&&n===p[0]}function e_(n){return!!o1&&o1 in n}var t_=Ha?ar:Yc;function Pi(n){var o=n&&n.constructor;return n===(typeof o=="function"&&o.prototype||Lo)}function of(n){return n===n&&!gt(n)}function af(n,o){return function(l){return l==null?!1:l[n]===o&&(o!==r||n in et(l))}}function n_(n){var o=ms(n,function(p){return l.size===f&&l.clear(),p}),l=o.cache;return o}function r_(n,o){var l=n[1],p=o[1],y=l|p,x=y<(E|M|ne),L=p==ne&&l==C||p==ne&&l==F&&n[7].length<=o[8]||p==(ne|F)&&o[7].length<=o[8]&&l==C;if(!(x||L))return n;p&E&&(n[2]=o[2],y|=l&E?0:T);var P=o[3];if(P){var B=n[3];n[3]=B?F1(B,P,o[4]):P,n[4]=B?Sr(n[3],b):o[4]}return P=o[5],P&&(B=n[5],n[5]=B?G1(B,P,o[6]):P,n[6]=B?Sr(n[5],b):o[6]),P=o[7],P&&(n[7]=P),p&ne&&(n[8]=n[8]==null?o[8]:Ht(n[8],o[8])),n[9]==null&&(n[9]=o[9]),n[0]=o[0],n[1]=y,n}function o_(n){var o=[];if(n!=null)for(var l in et(n))o.push(l);return o}function i_(n){return Ga.call(n)}function sf(n,o,l){return o=Ct(o===r?n.length-1:o,0),function(){for(var p=arguments,y=-1,x=Ct(p.length-o,0),L=U(x);++y<x;)L[y]=p[o+y];y=-1;for(var P=U(o+1);++y<o;)P[y]=p[y];return P[o]=l(L),pn(n,this,P)}}function lf(n,o){return o.length<2?n:eo(n,Cn(o,0,-1))}function a_(n,o){for(var l=n.length,p=Ht(o.length,l),y=Qt(n);p--;){var x=o[p];n[p]=ir(x,l)?y[x]:r}return n}function Rc(n,o){if(!(o==="constructor"&&typeof n[o]=="function")&&o!="__proto__")return n[o]}var cf=uf(T1),$i=yw||function(n,o){return Lt.setTimeout(n,o)},Pc=uf(C8);function df(n,o,l){var p=o+"";return Pc(n,X8(p,s_(q8(p),l)))}function uf(n){var o=0,l=0;return function(){var p=Sw(),y=A-(p-l);if(l=p,y>0){if(++o>=Y)return arguments[0]}else o=0;return n.apply(r,arguments)}}function hs(n,o){var l=-1,p=n.length,y=p-1;for(o=o===r?p:o;++l<o;){var x=mc(l,y),L=n[x];n[x]=n[l],n[l]=L}return n.length=o,n}var hf=n_(function(n){var o=[];return n.charCodeAt(0)===46&&o.push(""),n.replace(t7,function(l,p,y,x){o.push(y?x.replace(l7,"$1"):p||l)}),o});function Bn(n){if(typeof n=="string"||bn(n))return n;var o=n+"";return o=="0"&&1/n==-Ie?"-0":o}function no(n){if(n!=null){try{return Fa.call(n)}catch{}try{return n+""}catch{}}return""}function s_(n,o){return gn(he,function(l){var p="_."+l[0];o&l[1]&&!Da(n,p)&&n.push(p)}),n.sort()}function ff(n){if(n instanceof Ve)return n.clone();var o=new xn(n.__wrapped__,n.__chain__);return o.__actions__=Qt(n.__actions__),o.__index__=n.__index__,o.__values__=n.__values__,o}function l_(n,o,l){(l?Zt(n,o,l):o===r)?o=1:o=Ct(Ne(o),0);var p=n==null?0:n.length;if(!p||o<1)return[];for(var y=0,x=0,L=U(qa(p/o));y<p;)L[x++]=Cn(n,y,y+=o);return L}function c_(n){for(var o=-1,l=n==null?0:n.length,p=0,y=[];++o<l;){var x=n[o];x&&(y[p++]=x)}return y}function d_(){var n=arguments.length;if(!n)return[];for(var o=U(n-1),l=arguments[0],p=n;p--;)o[p-1]=arguments[p];return Ar(ze(l)?Qt(l):[l],zt(o,1))}var u_=Ue(function(n,o){return bt(n)?Ci(n,zt(o,1,bt,!0)):[]}),h_=Ue(function(n,o){var l=On(o);return bt(l)&&(l=r),bt(n)?Ci(n,zt(o,1,bt,!0),Te(l,2)):[]}),f_=Ue(function(n,o){var l=On(o);return bt(l)&&(l=r),bt(n)?Ci(n,zt(o,1,bt,!0),r,l):[]});function p_(n,o,l){var p=n==null?0:n.length;return p?(o=l||o===r?1:Ne(o),Cn(n,o<0?0:o,p)):[]}function g_(n,o,l){var p=n==null?0:n.length;return p?(o=l||o===r?1:Ne(o),o=p-o,Cn(n,0,o<0?0:o)):[]}function m_(n,o){return n&&n.length?os(n,Te(o,3),!0,!0):[]}function v_(n,o){return n&&n.length?os(n,Te(o,3),!0):[]}function b_(n,o,l,p){var y=n==null?0:n.length;return y?(l&&typeof l!="number"&&Zt(n,o,l)&&(l=0,p=y),d8(n,o,l,p)):[]}function pf(n,o,l){var p=n==null?0:n.length;if(!p)return-1;var y=l==null?0:Ne(l);return y<0&&(y=Ct(p+y,0)),za(n,Te(o,3),y)}function gf(n,o,l){var p=n==null?0:n.length;if(!p)return-1;var y=p-1;return l!==r&&(y=Ne(l),y=l<0?Ct(p+y,0):Ht(y,p-1)),za(n,Te(o,3),y,!0)}function mf(n){return n!=null&&n.length?zt(n,1):[]}function w_(n){return n!=null&&n.length?zt(n,Ie):[]}function __(n,o){return n!=null&&n.length?(o=o===r?1:Ne(o),zt(n,o)):[]}function y_(n){for(var o=-1,l=n==null?0:n.length,p={};++o<l;){var y=n[o];Vn(p,y[0],y[1])}return p}function vf(n){return n&&n.length?n[0]:r}function k_(n,o,l){var p=n==null?0:n.length;if(!p)return-1;var y=l==null?0:Ne(l);return y<0&&(y=Ct(p+y,0)),Co(n,o,y)}function E_(n){return n!=null&&n.length?Cn(n,0,-1):[]}var A_=Ue(function(n){var o=dt(n,yc);return o.length&&o[0]===n[0]?uc(o):[]}),S_=Ue(function(n){var o=On(n),l=dt(n,yc);return o===On(l)?o=r:l.pop(),l.length&&l[0]===n[0]?uc(l,Te(o,2)):[]}),M_=Ue(function(n){var o=On(n),l=dt(n,yc);return o=typeof o=="function"?o:r,o&&l.pop(),l.length&&l[0]===n[0]?uc(l,r,o):[]});function x_(n,o){return n==null?"":Ew.call(n,o)}function On(n){var o=n==null?0:n.length;return o?n[o-1]:r}function I_(n,o,l){var p=n==null?0:n.length;if(!p)return-1;var y=p;return l!==r&&(y=Ne(l),y=y<0?Ct(p+y,0):Ht(y,p-1)),o===o?lw(n,o,y):za(n,Yh,y,!0)}function C_(n,o){return n&&n.length?x1(n,Ne(o)):r}var O_=Ue(bf);function bf(n,o){return n&&n.length&&o&&o.length?gc(n,o):n}function T_(n,o,l){return n&&n.length&&o&&o.length?gc(n,o,Te(l,2)):n}function L_(n,o,l){return n&&n.length&&o&&o.length?gc(n,o,r,l):n}var R_=or(function(n,o){var l=n==null?0:n.length,p=sc(n,o);return O1(n,dt(o,function(y){return ir(y,l)?+y:y}).sort(H1)),p});function P_(n,o){var l=[];if(!(n&&n.length))return l;var p=-1,y=[],x=n.length;for(o=Te(o,3);++p<x;){var L=n[p];o(L,p,n)&&(l.push(L),y.push(p))}return O1(n,y),l}function $c(n){return n==null?n:xw.call(n)}function $_(n,o,l){var p=n==null?0:n.length;return p?(l&&typeof l!="number"&&Zt(n,o,l)?(o=0,l=p):(o=o==null?0:Ne(o),l=l===r?p:Ne(l)),Cn(n,o,l)):[]}function D_(n,o){return rs(n,o)}function z_(n,o,l){return bc(n,o,Te(l,2))}function B_(n,o){var l=n==null?0:n.length;if(l){var p=rs(n,o);if(p<l&&Nn(n[p],o))return p}return-1}function N_(n,o){return rs(n,o,!0)}function H_(n,o,l){return bc(n,o,Te(l,2),!0)}function F_(n,o){if(n!=null&&n.length){var l=rs(n,o,!0)-1;if(Nn(n[l],o))return l}return-1}function G_(n){return n&&n.length?L1(n):[]}function W_(n,o){return n&&n.length?L1(n,Te(o,2)):[]}function U_(n){var o=n==null?0:n.length;return o?Cn(n,1,o):[]}function V_(n,o,l){return n&&n.length?(o=l||o===r?1:Ne(o),Cn(n,0,o<0?0:o)):[]}function Z_(n,o,l){var p=n==null?0:n.length;return p?(o=l||o===r?1:Ne(o),o=p-o,Cn(n,o<0?0:o,p)):[]}function j_(n,o){return n&&n.length?os(n,Te(o,3),!1,!0):[]}function q_(n,o){return n&&n.length?os(n,Te(o,3)):[]}var K_=Ue(function(n){return Cr(zt(n,1,bt,!0))}),Y_=Ue(function(n){var o=On(n);return bt(o)&&(o=r),Cr(zt(n,1,bt,!0),Te(o,2))}),X_=Ue(function(n){var o=On(n);return o=typeof o=="function"?o:r,Cr(zt(n,1,bt,!0),r,o)});function J_(n){return n&&n.length?Cr(n):[]}function Q_(n,o){return n&&n.length?Cr(n,Te(o,2)):[]}function ey(n,o){return o=typeof o=="function"?o:r,n&&n.length?Cr(n,r,o):[]}function Dc(n){if(!(n&&n.length))return[];var o=0;return n=Er(n,function(l){if(bt(l))return o=Ct(l.length,o),!0}),Ql(o,function(l){return dt(n,Yl(l))})}function wf(n,o){if(!(n&&n.length))return[];var l=Dc(n);return o==null?l:dt(l,function(p){return pn(o,r,p)})}var ty=Ue(function(n,o){return bt(n)?Ci(n,o):[]}),ny=Ue(function(n){return _c(Er(n,bt))}),ry=Ue(function(n){var o=On(n);return bt(o)&&(o=r),_c(Er(n,bt),Te(o,2))}),oy=Ue(function(n){var o=On(n);return o=typeof o=="function"?o:r,_c(Er(n,bt),r,o)}),iy=Ue(Dc);function ay(n,o){return D1(n||[],o||[],Ii)}function sy(n,o){return D1(n||[],o||[],Li)}var ly=Ue(function(n){var o=n.length,l=o>1?n[o-1]:r;return l=typeof l=="function"?(n.pop(),l):r,wf(n,l)});function _f(n){var o=S(n);return o.__chain__=!0,o}function cy(n,o){return o(n),n}function fs(n,o){return o(n)}var dy=or(function(n){var o=n.length,l=o?n[0]:0,p=this.__wrapped__,y=function(x){return sc(x,n)};return o>1||this.__actions__.length||!(p instanceof Ve)||!ir(l)?this.thru(y):(p=p.slice(l,+l+(o?1:0)),p.__actions__.push({func:fs,args:[y],thisArg:r}),new xn(p,this.__chain__).thru(function(x){return o&&!x.length&&x.push(r),x}))});function uy(){return _f(this)}function hy(){return new xn(this.value(),this.__chain__)}function fy(){this.__values__===r&&(this.__values__=Pf(this.value()));var n=this.__index__>=this.__values__.length;return{done:n,value:n?r:this.__values__[this.__index__++]}}function py(){return this}function gy(n){for(var o,l=this;l instanceof Ja;){var p=ff(l);p.__index__=0,p.__values__=r,o?y.__wrapped__=p:o=p;var y=p;l=l.__wrapped__}return y.__wrapped__=n,o}function my(){var n=this.__wrapped__;if(n instanceof Ve){var o=n;return this.__actions__.length&&(o=new Ve(this)),o=o.reverse(),o.__actions__.push({func:fs,args:[$c],thisArg:r}),new xn(o,this.__chain__)}return this.thru($c)}function vy(){return $1(this.__wrapped__,this.__actions__)}var by=is(function(n,o,l){Ye.call(n,l)?++n[l]:Vn(n,l,1)});function wy(n,o,l){var p=ze(n)?qh:c8;return l&&Zt(n,o,l)&&(o=r),p(n,Te(o,3))}function _y(n,o){return(ze(n)?Er:b1)(n,Te(o,3))}var yy=Z1(pf),ky=Z1(gf);function Ey(n,o){return zt(ps(n,o),1)}function Ay(n,o){return zt(ps(n,o),Ie)}function Sy(n,o,l){return l=l===r?1:Ne(l),zt(ps(n,o),l)}function yf(n,o){return(ze(n)?gn:Ir)(n,Te(o,3))}function kf(n,o){return(ze(n)?V7:v1)(n,Te(o,3))}var My=is(function(n,o,l){Ye.call(n,l)?n[l].push(o):Vn(n,l,[o])});function xy(n,o,l,p){n=en(n)?n:Ho(n),l=l&&!p?Ne(l):0;var y=n.length;return l<0&&(l=Ct(y+l,0)),ws(n)?l<=y&&n.indexOf(o,l)>-1:!!y&&Co(n,o,l)>-1}var Iy=Ue(function(n,o,l){var p=-1,y=typeof o=="function",x=en(n)?U(n.length):[];return Ir(n,function(L){x[++p]=y?pn(o,L,l):Oi(L,o,l)}),x}),Cy=is(function(n,o,l){Vn(n,l,o)});function ps(n,o){return(ze(n)?dt:A1)(n,Te(o,3))}function Oy(n,o,l,p){return n==null?[]:(ze(o)||(o=o==null?[]:[o]),l=p?r:l,ze(l)||(l=l==null?[]:[l]),I1(n,o,l))}var Ty=is(function(n,o,l){n[l?0:1].push(o)},function(){return[[],[]]});function Ly(n,o,l){var p=ze(n)?ql:Jh,y=arguments.length<3;return p(n,Te(o,4),l,y,Ir)}function Ry(n,o,l){var p=ze(n)?Z7:Jh,y=arguments.length<3;return p(n,Te(o,4),l,y,v1)}function Py(n,o){return(ze(n)?Er:b1)(n,vs(Te(o,3)))}function $y(n){return(ze(n)?f1:x8)(n)}function Dy(n,o,l){return(l?Zt(n,o,l):o===r)?o=1:o=Ne(o),(ze(n)?o8:I8)(n,o)}function zy(n){return(ze(n)?i8:O8)(n)}function By(n){if(n==null)return 0;if(en(n))return ws(n)?To(n):n.length;var o=Ft(n);return o==X||o==N?n.size:fc(n).length}function Ny(n,o,l){var p=ze(n)?Kl:T8;return l&&Zt(n,o,l)&&(o=r),p(n,Te(o,3))}var Hy=Ue(function(n,o){if(n==null)return[];var l=o.length;return l>1&&Zt(n,o[0],o[1])?o=[]:l>2&&Zt(o[0],o[1],o[2])&&(o=[o[0]]),I1(n,zt(o,1),[])}),gs=_w||function(){return Lt.Date.now()};function Fy(n,o){if(typeof o!="function")throw new Mn(c);return n=Ne(n),function(){if(--n<1)return o.apply(this,arguments)}}function Ef(n,o,l){return o=l?r:o,o=n&&o==null?n.length:o,rr(n,ne,r,r,r,r,o)}function Af(n,o){var l;if(typeof o!="function")throw new Mn(c);return n=Ne(n),function(){return--n>0&&(l=o.apply(this,arguments)),n<=1&&(o=r),l}}var zc=Ue(function(n,o,l){var p=E;if(l.length){var y=Sr(l,Bo(zc));p|=q}return rr(n,p,o,l,y)}),Sf=Ue(function(n,o,l){var p=E|M;if(l.length){var y=Sr(l,Bo(Sf));p|=q}return rr(o,p,n,l,y)});function Mf(n,o,l){o=l?r:o;var p=rr(n,C,r,r,r,r,r,o);return p.placeholder=Mf.placeholder,p}function xf(n,o,l){o=l?r:o;var p=rr(n,D,r,r,r,r,r,o);return p.placeholder=xf.placeholder,p}function If(n,o,l){var p,y,x,L,P,B,te=0,ee=!1,se=!1,ve=!0;if(typeof n!="function")throw new Mn(c);o=Tn(o)||0,gt(l)&&(ee=!!l.leading,se="maxWait"in l,x=se?Ct(Tn(l.maxWait)||0,o):x,ve="trailing"in l?!!l.trailing:ve);function _e(wt){var Hn=p,lr=y;return p=y=r,te=wt,L=n.apply(lr,Hn),L}function Ce(wt){return te=wt,P=$i(tt,o),ee?_e(wt):L}function $e(wt){var Hn=wt-B,lr=wt-te,qf=o-Hn;return se?Ht(qf,x-lr):qf}function Oe(wt){var Hn=wt-B,lr=wt-te;return B===r||Hn>=o||Hn<0||se&&lr>=x}function tt(){var wt=gs();if(Oe(wt))return Ze(wt);P=$i(tt,$e(wt))}function Ze(wt){return P=r,ve&&p?_e(wt):(p=y=r,L)}function jt(){P!==r&&z1(P),te=0,p=B=y=P=r}function qn(){return P===r?L:Ze(gs())}function Rr(){var wt=gs(),Hn=Oe(wt);if(p=arguments,y=this,B=wt,Hn){if(P===r)return Ce(B);if(se)return z1(P),P=$i(tt,o),_e(B)}return P===r&&(P=$i(tt,o)),L}return Rr.cancel=jt,Rr.flush=qn,Rr}var Gy=Ue(function(n,o){return m1(n,1,o)}),Wy=Ue(function(n,o,l){return m1(n,Tn(o)||0,l)});function Uy(n){return rr(n,pe)}function ms(n,o){if(typeof n!="function"||o!=null&&typeof o!="function")throw new Mn(c);var l=function(){var p=arguments,y=o?o.apply(this,p):p[0],x=l.cache;if(x.has(y))return x.get(y);var L=n.apply(this,p);return l.cache=x.set(y,L)||x,L};return l.cache=new(ms.Cache||nr),l}ms.Cache=nr;function vs(n){if(typeof n!="function")throw new Mn(c);return function(){var o=arguments;switch(o.length){case 0:return!n.call(this);case 1:return!n.call(this,o[0]);case 2:return!n.call(this,o[0],o[1]);case 3:return!n.call(this,o[0],o[1],o[2])}return!n.apply(this,o)}}function Vy(n){return Af(2,n)}var Zy=L8(function(n,o){o=o.length==1&&ze(o[0])?dt(o[0],mn(Te())):dt(zt(o,1),mn(Te()));var l=o.length;return Ue(function(p){for(var y=-1,x=Ht(p.length,l);++y<x;)p[y]=o[y].call(this,p[y]);return pn(n,this,p)})}),Bc=Ue(function(n,o){return rr(n,q,r,o,Sr(o,Bo(Bc)))}),Cf=Ue(function(n,o){return rr(n,Z,r,o,Sr(o,Bo(Cf)))}),jy=or(function(n,o){return rr(n,F,r,r,r,o)});function qy(n,o){if(typeof n!="function")throw new Mn(c);return o=o===r?o:Ne(o),Ue(n,o)}function Ky(n,o){if(typeof n!="function")throw new Mn(c);return o=o==null?0:Ct(Ne(o),0),Ue(function(l){var p=l[o],y=Tr(l,0,o);return p&&Ar(y,p),pn(n,this,y)})}function Yy(n,o,l){var p=!0,y=!0;if(typeof n!="function")throw new Mn(c);return gt(l)&&(p="leading"in l?!!l.leading:p,y="trailing"in l?!!l.trailing:y),If(n,o,{leading:p,maxWait:o,trailing:y})}function Xy(n){return Ef(n,1)}function Jy(n,o){return Bc(kc(o),n)}function Qy(){if(!arguments.length)return[];var n=arguments[0];return ze(n)?n:[n]}function ek(n){return In(n,g)}function tk(n,o){return o=typeof o=="function"?o:r,In(n,g,o)}function nk(n){return In(n,v|g)}function rk(n,o){return o=typeof o=="function"?o:r,In(n,v|g,o)}function ok(n,o){return o==null||g1(n,o,Rt(o))}function Nn(n,o){return n===o||n!==n&&o!==o}var ik=cs(dc),ak=cs(function(n,o){return n>=o}),ro=y1((function(){return arguments})())?y1:function(n){return vt(n)&&Ye.call(n,"callee")&&!s1.call(n,"callee")},ze=U.isArray,sk=Gh?mn(Gh):g8;function en(n){return n!=null&&bs(n.length)&&!ar(n)}function bt(n){return vt(n)&&en(n)}function lk(n){return n===!0||n===!1||vt(n)&&Vt(n)==Fe}var Lr=kw||Yc,ck=Wh?mn(Wh):m8;function dk(n){return vt(n)&&n.nodeType===1&&!Di(n)}function uk(n){if(n==null)return!0;if(en(n)&&(ze(n)||typeof n=="string"||typeof n.splice=="function"||Lr(n)||No(n)||ro(n)))return!n.length;var o=Ft(n);if(o==X||o==N)return!n.size;if(Pi(n))return!fc(n).length;for(var l in n)if(Ye.call(n,l))return!1;return!0}function hk(n,o){return Ti(n,o)}function fk(n,o,l){l=typeof l=="function"?l:r;var p=l?l(n,o):r;return p===r?Ti(n,o,r,l):!!p}function Nc(n){if(!vt(n))return!1;var o=Vt(n);return o==Ut||o==pt||typeof n.message=="string"&&typeof n.name=="string"&&!Di(n)}function pk(n){return typeof n=="number"&&c1(n)}function ar(n){if(!gt(n))return!1;var o=Vt(n);return o==Nt||o==w||o==We||o==ie}function Of(n){return typeof n=="number"&&n==Ne(n)}function bs(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=oe}function gt(n){var o=typeof n;return n!=null&&(o=="object"||o=="function")}function vt(n){return n!=null&&typeof n=="object"}var Tf=Uh?mn(Uh):b8;function gk(n,o){return n===o||hc(n,o,Cc(o))}function mk(n,o,l){return l=typeof l=="function"?l:r,hc(n,o,Cc(o),l)}function vk(n){return Lf(n)&&n!=+n}function bk(n){if(t_(n))throw new Pe(s);return k1(n)}function wk(n){return n===null}function _k(n){return n==null}function Lf(n){return typeof n=="number"||vt(n)&&Vt(n)==V}function Di(n){if(!vt(n)||Vt(n)!=I)return!1;var o=Va(n);if(o===null)return!0;var l=Ye.call(o,"constructor")&&o.constructor;return typeof l=="function"&&l instanceof l&&Fa.call(l)==mw}var Hc=Vh?mn(Vh):w8;function yk(n){return Of(n)&&n>=-oe&&n<=oe}var Rf=Zh?mn(Zh):_8;function ws(n){return typeof n=="string"||!ze(n)&&vt(n)&&Vt(n)==de}function bn(n){return typeof n=="symbol"||vt(n)&&Vt(n)==me}var No=jh?mn(jh):y8;function kk(n){return n===r}function Ek(n){return vt(n)&&Ft(n)==Ee}function Ak(n){return vt(n)&&Vt(n)==Je}var Sk=cs(pc),Mk=cs(function(n,o){return n<=o});function Pf(n){if(!n)return[];if(en(n))return ws(n)?Dn(n):Qt(n);if(Ei&&n[Ei])return iw(n[Ei]());var o=Ft(n);return(o==X?tc:o==N?Ba:Ho)(n)}function sr(n){return n?(n=Tn(n),n===Ie||n===-Ie?(n<0?-1:1)*Se:n===n?n:0):n===0?n:0}function Ne(n){var o=sr(n),l=o%1;return o===o?l?o-l:o:0}function $f(n){return n?Qr(Ne(n),0,H):0}function Tn(n){if(typeof n=="number")return n;if(bn(n))return W;if(gt(n)){var o=typeof n.valueOf=="function"?n.valueOf():n;n=gt(o)?o+"":o}if(typeof n!="string")return n===0?n:+n;n=Qh(n);var l=u7.test(n);return l||f7.test(n)?G7(n.slice(2),l?2:8):d7.test(n)?W:+n}function Df(n){return jn(n,tn(n))}function xk(n){return n?Qr(Ne(n),-oe,oe):n===0?n:0}function Xe(n){return n==null?"":vn(n)}var Ik=Do(function(n,o){if(Pi(o)||en(o)){jn(o,Rt(o),n);return}for(var l in o)Ye.call(o,l)&&Ii(n,l,o[l])}),zf=Do(function(n,o){jn(o,tn(o),n)}),Bf=Do(function(n,o,l,p){jn(o,tn(o),n,p)}),Fc=Do(function(n,o,l,p){jn(o,Rt(o),n,p)}),Ck=or(sc);function Ok(n,o){var l=$o(n);return o==null?l:p1(l,o)}var Tk=Ue(function(n,o){n=et(n);var l=-1,p=o.length,y=p>2?o[2]:r;for(y&&Zt(o[0],o[1],y)&&(p=1);++l<p;)for(var x=o[l],L=tn(x),P=-1,B=L.length;++P<B;){var te=L[P],ee=n[te];(ee===r||Nn(ee,Lo[te])&&!Ye.call(n,te))&&(n[te]=x[te])}return n}),Lk=Ue(function(n){return n.push(r,Q1),pn(Nf,r,n)});function Rk(n,o){return Kh(n,Te(o,3),Zn)}function Pk(n,o){return Kh(n,Te(o,3),cc)}function $k(n,o){return n==null?n:lc(n,Te(o,3),tn)}function Dk(n,o){return n==null?n:w1(n,Te(o,3),tn)}function zk(n,o){return n&&Zn(n,Te(o,3))}function Bk(n,o){return n&&cc(n,Te(o,3))}function Nk(n){return n==null?[]:ts(n,Rt(n))}function Hk(n){return n==null?[]:ts(n,tn(n))}function Gc(n,o,l){var p=n==null?r:eo(n,o);return p===r?l:p}function Fk(n,o){return n!=null&&nf(n,o,u8)}function Wc(n,o){return n!=null&&nf(n,o,h8)}var Gk=q1(function(n,o,l){o!=null&&typeof o.toString!="function"&&(o=Ga.call(o)),n[o]=l},Vc(nn)),Wk=q1(function(n,o,l){o!=null&&typeof o.toString!="function"&&(o=Ga.call(o)),Ye.call(n,o)?n[o].push(l):n[o]=[l]},Te),Uk=Ue(Oi);function Rt(n){return en(n)?h1(n):fc(n)}function tn(n){return en(n)?h1(n,!0):k8(n)}function Vk(n,o){var l={};return o=Te(o,3),Zn(n,function(p,y,x){Vn(l,o(p,y,x),p)}),l}function Zk(n,o){var l={};return o=Te(o,3),Zn(n,function(p,y,x){Vn(l,y,o(p,y,x))}),l}var jk=Do(function(n,o,l){ns(n,o,l)}),Nf=Do(function(n,o,l,p){ns(n,o,l,p)}),qk=or(function(n,o){var l={};if(n==null)return l;var p=!1;o=dt(o,function(x){return x=Or(x,n),p||(p=x.length>1),x}),jn(n,xc(n),l),p&&(l=In(l,v|m|g,W8));for(var y=o.length;y--;)wc(l,o[y]);return l});function Kk(n,o){return Hf(n,vs(Te(o)))}var Yk=or(function(n,o){return n==null?{}:A8(n,o)});function Hf(n,o){if(n==null)return{};var l=dt(xc(n),function(p){return[p]});return o=Te(o),C1(n,l,function(p,y){return o(p,y[0])})}function Xk(n,o,l){o=Or(o,n);var p=-1,y=o.length;for(y||(y=1,n=r);++p<y;){var x=n==null?r:n[Bn(o[p])];x===r&&(p=y,x=l),n=ar(x)?x.call(n):x}return n}function Jk(n,o,l){return n==null?n:Li(n,o,l)}function Qk(n,o,l,p){return p=typeof p=="function"?p:r,n==null?n:Li(n,o,l,p)}var Ff=X1(Rt),Gf=X1(tn);function eE(n,o,l){var p=ze(n),y=p||Lr(n)||No(n);if(o=Te(o,4),l==null){var x=n&&n.constructor;y?l=p?new x:[]:gt(n)?l=ar(x)?$o(Va(n)):{}:l={}}return(y?gn:Zn)(n,function(L,P,B){return o(l,L,P,B)}),l}function tE(n,o){return n==null?!0:wc(n,o)}function nE(n,o,l){return n==null?n:P1(n,o,kc(l))}function rE(n,o,l,p){return p=typeof p=="function"?p:r,n==null?n:P1(n,o,kc(l),p)}function Ho(n){return n==null?[]:ec(n,Rt(n))}function oE(n){return n==null?[]:ec(n,tn(n))}function iE(n,o,l){return l===r&&(l=o,o=r),l!==r&&(l=Tn(l),l=l===l?l:0),o!==r&&(o=Tn(o),o=o===o?o:0),Qr(Tn(n),o,l)}function aE(n,o,l){return o=sr(o),l===r?(l=o,o=0):l=sr(l),n=Tn(n),f8(n,o,l)}function sE(n,o,l){if(l&&typeof l!="boolean"&&Zt(n,o,l)&&(o=l=r),l===r&&(typeof o=="boolean"?(l=o,o=r):typeof n=="boolean"&&(l=n,n=r)),n===r&&o===r?(n=0,o=1):(n=sr(n),o===r?(o=n,n=0):o=sr(o)),n>o){var p=n;n=o,o=p}if(l||n%1||o%1){var y=d1();return Ht(n+y*(o-n+F7("1e-"+((y+"").length-1))),o)}return mc(n,o)}var lE=zo(function(n,o,l){return o=o.toLowerCase(),n+(l?Wf(o):o)});function Wf(n){return Uc(Xe(n).toLowerCase())}function Uf(n){return n=Xe(n),n&&n.replace(g7,ew).replace(T7,"")}function cE(n,o,l){n=Xe(n),o=vn(o);var p=n.length;l=l===r?p:Qr(Ne(l),0,p);var y=l;return l-=o.length,l>=0&&n.slice(l,y)==o}function dE(n){return n=Xe(n),n&&Y9.test(n)?n.replace(qr,tw):n}function uE(n){return n=Xe(n),n&&n7.test(n)?n.replace(Bl,"\\$&"):n}var hE=zo(function(n,o,l){return n+(l?"-":"")+o.toLowerCase()}),fE=zo(function(n,o,l){return n+(l?" ":"")+o.toLowerCase()}),pE=V1("toLowerCase");function gE(n,o,l){n=Xe(n),o=Ne(o);var p=o?To(n):0;if(!o||p>=o)return n;var y=(o-p)/2;return ls(Ka(y),l)+n+ls(qa(y),l)}function mE(n,o,l){n=Xe(n),o=Ne(o);var p=o?To(n):0;return o&&p<o?n+ls(o-p,l):n}function vE(n,o,l){n=Xe(n),o=Ne(o);var p=o?To(n):0;return o&&p<o?ls(o-p,l)+n:n}function bE(n,o,l){return l||o==null?o=0:o&&(o=+o),Mw(Xe(n).replace(Nl,""),o||0)}function wE(n,o,l){return(l?Zt(n,o,l):o===r)?o=1:o=Ne(o),vc(Xe(n),o)}function _E(){var n=arguments,o=Xe(n[0]);return n.length<3?o:o.replace(n[1],n[2])}var yE=zo(function(n,o,l){return n+(l?"_":"")+o.toLowerCase()});function kE(n,o,l){return l&&typeof l!="number"&&Zt(n,o,l)&&(o=l=r),l=l===r?H:l>>>0,l?(n=Xe(n),n&&(typeof o=="string"||o!=null&&!Hc(o))&&(o=vn(o),!o&&Oo(n))?Tr(Dn(n),0,l):n.split(o,l)):[]}var EE=zo(function(n,o,l){return n+(l?" ":"")+Uc(o)});function AE(n,o,l){return n=Xe(n),l=l==null?0:Qr(Ne(l),0,n.length),o=vn(o),n.slice(l,l+o.length)==o}function SE(n,o,l){var p=S.templateSettings;l&&Zt(n,o,l)&&(o=r),n=Xe(n),o=Fc({},o,p,J1);var y=Fc({},o.imports,p.imports,J1),x=Rt(y),L=ec(y,x);gn(x,function(Oe){if(_h.test(Oe))throw new Pe(d)});var P,B,te=0,ee=o.interpolate||Ra,se="__p += '",ve=nc((o.escape||Ra).source+"|"+ee.source+"|"+(ee===wh?c7:Ra).source+"|"+(o.evaluate||Ra).source+"|$","g"),_e="//# sourceURL="+(Ye.call(o,"sourceURL")?(o.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++D7+"]")+`
`;n.replace(ve,function(Oe,tt,Ze,jt,qn,Rr){return Ze||(Ze=jt),se+=n.slice(te,Rr).replace(m7,nw),tt&&(P=!0,se+=`' +
__e(`+tt+`) +
'`),qn&&(B=!0,se+=`';
`+qn+`;
__p += '`),Ze&&(se+=`' +
((__t = (`+Ze+`)) == null ? '' : __t) +
'`),te=Rr+Oe.length,Oe}),se+=`';
`;var Ce=Ye.call(o,"variable")&&o.variable;if(!Ce)se=`with (obj) {
`+se+`
}
`;else if(_h.test(Ce))throw new Pe(u);se=(B?se.replace(Dl,""):se).replace(zl,"$1").replace(La,"$1;"),se="function("+(Ce||"obj")+`) {
`+(Ce?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(P?", __e = _.escape":"")+(B?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+se+`return __p
}`;var $e=Zf(function(){return Ke(x,_e+"return "+se).apply(r,L)});if($e.source=se,Nc($e))throw $e;return $e}function ME(n){return Xe(n).toLowerCase()}function xE(n){return Xe(n).toUpperCase()}function IE(n,o,l){if(n=Xe(n),n&&(l||o===r))return Qh(n);if(!n||!(o=vn(o)))return n;var p=Dn(n),y=Dn(o);return Tr(p,e1(p,y),t1(p,y)+1).join("")}function CE(n,o,l){if(n=Xe(n),n&&(l||o===r))return n.slice(0,r1(n)+1);if(!n||!(o=vn(o)))return n;var p=Dn(n);return Tr(p,0,t1(p,Dn(o))+1).join("")}function OE(n,o,l){if(n=Xe(n),n&&(l||o===r))return n.replace(Nl,"");if(!n||!(o=vn(o)))return n;var p=Dn(n);return Tr(p,e1(p,Dn(o))).join("")}function TE(n,o){var l=we,p=R;if(gt(o)){var y="separator"in o?o.separator:y;l="length"in o?Ne(o.length):l,p="omission"in o?vn(o.omission):p}n=Xe(n);var x=n.length;if(Oo(n)){var L=Dn(n);x=L.length}if(l>=x)return n;var P=l-To(p);if(P<1)return p;var B=L?Tr(L,0,P).join(""):n.slice(0,P);if(y===r)return B+p;if(L&&(P+=B.length-P),Hc(y)){if(n.slice(P).search(y)){var te,ee=B;for(y.global||(y=nc(y.source,Xe(yh.exec(y))+"g")),y.lastIndex=0;te=y.exec(ee);)var se=te.index;B=B.slice(0,se===r?P:se)}}else if(n.indexOf(vn(y),P)!=P){var ve=B.lastIndexOf(y);ve>-1&&(B=B.slice(0,ve))}return B+p}function LE(n){return n=Xe(n),n&&K9.test(n)?n.replace(kr,cw):n}var RE=zo(function(n,o,l){return n+(l?" ":"")+o.toUpperCase()}),Uc=V1("toUpperCase");function Vf(n,o,l){return n=Xe(n),o=l?r:o,o===r?ow(n)?hw(n):K7(n):n.match(o)||[]}var Zf=Ue(function(n,o){try{return pn(n,r,o)}catch(l){return Nc(l)?l:new Pe(l)}}),PE=or(function(n,o){return gn(o,function(l){l=Bn(l),Vn(n,l,zc(n[l],n))}),n});function $E(n){var o=n==null?0:n.length,l=Te();return n=o?dt(n,function(p){if(typeof p[1]!="function")throw new Mn(c);return[l(p[0]),p[1]]}):[],Ue(function(p){for(var y=-1;++y<o;){var x=n[y];if(pn(x[0],this,p))return pn(x[1],this,p)}})}function DE(n){return l8(In(n,v))}function Vc(n){return function(){return n}}function zE(n,o){return n==null||n!==n?o:n}var BE=j1(),NE=j1(!0);function nn(n){return n}function Zc(n){return E1(typeof n=="function"?n:In(n,v))}function HE(n){return S1(In(n,v))}function FE(n,o){return M1(n,In(o,v))}var GE=Ue(function(n,o){return function(l){return Oi(l,n,o)}}),WE=Ue(function(n,o){return function(l){return Oi(n,l,o)}});function jc(n,o,l){var p=Rt(o),y=ts(o,p);l==null&&!(gt(o)&&(y.length||!p.length))&&(l=o,o=n,n=this,y=ts(o,Rt(o)));var x=!(gt(l)&&"chain"in l)||!!l.chain,L=ar(n);return gn(y,function(P){var B=o[P];n[P]=B,L&&(n.prototype[P]=function(){var te=this.__chain__;if(x||te){var ee=n(this.__wrapped__);return(ee.__actions__=Qt(this.__actions__)).push({func:B,args:arguments,thisArg:n}),ee.__chain__=te,ee}return B.apply(n,Ar([this.value()],arguments))})}),n}function UE(){return Lt._===this&&(Lt._=vw),this}function qc(){}function VE(n){return n=Ne(n),Ue(function(o){return x1(o,n)})}var ZE=Ac(dt),jE=Ac(qh),qE=Ac(Kl);function jf(n){return Tc(n)?Yl(Bn(n)):S8(n)}function KE(n){return function(o){return n==null?r:eo(n,o)}}var YE=K1(),XE=K1(!0);function Kc(){return[]}function Yc(){return!1}function JE(){return{}}function QE(){return""}function eA(){return!0}function tA(n,o){if(n=Ne(n),n<1||n>oe)return[];var l=H,p=Ht(n,H);o=Te(o),n-=H;for(var y=Ql(p,o);++l<n;)o(l);return y}function nA(n){return ze(n)?dt(n,Bn):bn(n)?[n]:Qt(hf(Xe(n)))}function rA(n){var o=++gw;return Xe(n)+o}var oA=ss(function(n,o){return n+o},0),iA=Sc("ceil"),aA=ss(function(n,o){return n/o},1),sA=Sc("floor");function lA(n){return n&&n.length?es(n,nn,dc):r}function cA(n,o){return n&&n.length?es(n,Te(o,2),dc):r}function dA(n){return Xh(n,nn)}function uA(n,o){return Xh(n,Te(o,2))}function hA(n){return n&&n.length?es(n,nn,pc):r}function fA(n,o){return n&&n.length?es(n,Te(o,2),pc):r}var pA=ss(function(n,o){return n*o},1),gA=Sc("round"),mA=ss(function(n,o){return n-o},0);function vA(n){return n&&n.length?Jl(n,nn):0}function bA(n,o){return n&&n.length?Jl(n,Te(o,2)):0}return S.after=Fy,S.ary=Ef,S.assign=Ik,S.assignIn=zf,S.assignInWith=Bf,S.assignWith=Fc,S.at=Ck,S.before=Af,S.bind=zc,S.bindAll=PE,S.bindKey=Sf,S.castArray=Qy,S.chain=_f,S.chunk=l_,S.compact=c_,S.concat=d_,S.cond=$E,S.conforms=DE,S.constant=Vc,S.countBy=by,S.create=Ok,S.curry=Mf,S.curryRight=xf,S.debounce=If,S.defaults=Tk,S.defaultsDeep=Lk,S.defer=Gy,S.delay=Wy,S.difference=u_,S.differenceBy=h_,S.differenceWith=f_,S.drop=p_,S.dropRight=g_,S.dropRightWhile=m_,S.dropWhile=v_,S.fill=b_,S.filter=_y,S.flatMap=Ey,S.flatMapDeep=Ay,S.flatMapDepth=Sy,S.flatten=mf,S.flattenDeep=w_,S.flattenDepth=__,S.flip=Uy,S.flow=BE,S.flowRight=NE,S.fromPairs=y_,S.functions=Nk,S.functionsIn=Hk,S.groupBy=My,S.initial=E_,S.intersection=A_,S.intersectionBy=S_,S.intersectionWith=M_,S.invert=Gk,S.invertBy=Wk,S.invokeMap=Iy,S.iteratee=Zc,S.keyBy=Cy,S.keys=Rt,S.keysIn=tn,S.map=ps,S.mapKeys=Vk,S.mapValues=Zk,S.matches=HE,S.matchesProperty=FE,S.memoize=ms,S.merge=jk,S.mergeWith=Nf,S.method=GE,S.methodOf=WE,S.mixin=jc,S.negate=vs,S.nthArg=VE,S.omit=qk,S.omitBy=Kk,S.once=Vy,S.orderBy=Oy,S.over=ZE,S.overArgs=Zy,S.overEvery=jE,S.overSome=qE,S.partial=Bc,S.partialRight=Cf,S.partition=Ty,S.pick=Yk,S.pickBy=Hf,S.property=jf,S.propertyOf=KE,S.pull=O_,S.pullAll=bf,S.pullAllBy=T_,S.pullAllWith=L_,S.pullAt=R_,S.range=YE,S.rangeRight=XE,S.rearg=jy,S.reject=Py,S.remove=P_,S.rest=qy,S.reverse=$c,S.sampleSize=Dy,S.set=Jk,S.setWith=Qk,S.shuffle=zy,S.slice=$_,S.sortBy=Hy,S.sortedUniq=G_,S.sortedUniqBy=W_,S.split=kE,S.spread=Ky,S.tail=U_,S.take=V_,S.takeRight=Z_,S.takeRightWhile=j_,S.takeWhile=q_,S.tap=cy,S.throttle=Yy,S.thru=fs,S.toArray=Pf,S.toPairs=Ff,S.toPairsIn=Gf,S.toPath=nA,S.toPlainObject=Df,S.transform=eE,S.unary=Xy,S.union=K_,S.unionBy=Y_,S.unionWith=X_,S.uniq=J_,S.uniqBy=Q_,S.uniqWith=ey,S.unset=tE,S.unzip=Dc,S.unzipWith=wf,S.update=nE,S.updateWith=rE,S.values=Ho,S.valuesIn=oE,S.without=ty,S.words=Vf,S.wrap=Jy,S.xor=ny,S.xorBy=ry,S.xorWith=oy,S.zip=iy,S.zipObject=ay,S.zipObjectDeep=sy,S.zipWith=ly,S.entries=Ff,S.entriesIn=Gf,S.extend=zf,S.extendWith=Bf,jc(S,S),S.add=oA,S.attempt=Zf,S.camelCase=lE,S.capitalize=Wf,S.ceil=iA,S.clamp=iE,S.clone=ek,S.cloneDeep=nk,S.cloneDeepWith=rk,S.cloneWith=tk,S.conformsTo=ok,S.deburr=Uf,S.defaultTo=zE,S.divide=aA,S.endsWith=cE,S.eq=Nn,S.escape=dE,S.escapeRegExp=uE,S.every=wy,S.find=yy,S.findIndex=pf,S.findKey=Rk,S.findLast=ky,S.findLastIndex=gf,S.findLastKey=Pk,S.floor=sA,S.forEach=yf,S.forEachRight=kf,S.forIn=$k,S.forInRight=Dk,S.forOwn=zk,S.forOwnRight=Bk,S.get=Gc,S.gt=ik,S.gte=ak,S.has=Fk,S.hasIn=Wc,S.head=vf,S.identity=nn,S.includes=xy,S.indexOf=k_,S.inRange=aE,S.invoke=Uk,S.isArguments=ro,S.isArray=ze,S.isArrayBuffer=sk,S.isArrayLike=en,S.isArrayLikeObject=bt,S.isBoolean=lk,S.isBuffer=Lr,S.isDate=ck,S.isElement=dk,S.isEmpty=uk,S.isEqual=hk,S.isEqualWith=fk,S.isError=Nc,S.isFinite=pk,S.isFunction=ar,S.isInteger=Of,S.isLength=bs,S.isMap=Tf,S.isMatch=gk,S.isMatchWith=mk,S.isNaN=vk,S.isNative=bk,S.isNil=_k,S.isNull=wk,S.isNumber=Lf,S.isObject=gt,S.isObjectLike=vt,S.isPlainObject=Di,S.isRegExp=Hc,S.isSafeInteger=yk,S.isSet=Rf,S.isString=ws,S.isSymbol=bn,S.isTypedArray=No,S.isUndefined=kk,S.isWeakMap=Ek,S.isWeakSet=Ak,S.join=x_,S.kebabCase=hE,S.last=On,S.lastIndexOf=I_,S.lowerCase=fE,S.lowerFirst=pE,S.lt=Sk,S.lte=Mk,S.max=lA,S.maxBy=cA,S.mean=dA,S.meanBy=uA,S.min=hA,S.minBy=fA,S.stubArray=Kc,S.stubFalse=Yc,S.stubObject=JE,S.stubString=QE,S.stubTrue=eA,S.multiply=pA,S.nth=C_,S.noConflict=UE,S.noop=qc,S.now=gs,S.pad=gE,S.padEnd=mE,S.padStart=vE,S.parseInt=bE,S.random=sE,S.reduce=Ly,S.reduceRight=Ry,S.repeat=wE,S.replace=_E,S.result=Xk,S.round=gA,S.runInContext=$,S.sample=$y,S.size=By,S.snakeCase=yE,S.some=Ny,S.sortedIndex=D_,S.sortedIndexBy=z_,S.sortedIndexOf=B_,S.sortedLastIndex=N_,S.sortedLastIndexBy=H_,S.sortedLastIndexOf=F_,S.startCase=EE,S.startsWith=AE,S.subtract=mA,S.sum=vA,S.sumBy=bA,S.template=SE,S.times=tA,S.toFinite=sr,S.toInteger=Ne,S.toLength=$f,S.toLower=ME,S.toNumber=Tn,S.toSafeInteger=xk,S.toString=Xe,S.toUpper=xE,S.trim=IE,S.trimEnd=CE,S.trimStart=OE,S.truncate=TE,S.unescape=LE,S.uniqueId=rA,S.upperCase=RE,S.upperFirst=Uc,S.each=yf,S.eachRight=kf,S.first=vf,jc(S,(function(){var n={};return Zn(S,function(o,l){Ye.call(S.prototype,l)||(n[l]=o)}),n})(),{chain:!1}),S.VERSION=i,gn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(n){S[n].placeholder=S}),gn(["drop","take"],function(n,o){Ve.prototype[n]=function(l){l=l===r?1:Ct(Ne(l),0);var p=this.__filtered__&&!o?new Ve(this):this.clone();return p.__filtered__?p.__takeCount__=Ht(l,p.__takeCount__):p.__views__.push({size:Ht(l,H),type:n+(p.__dir__<0?"Right":"")}),p},Ve.prototype[n+"Right"]=function(l){return this.reverse()[n](l).reverse()}}),gn(["filter","map","takeWhile"],function(n,o){var l=o+1,p=l==J||l==le;Ve.prototype[n]=function(y){var x=this.clone();return x.__iteratees__.push({iteratee:Te(y,3),type:l}),x.__filtered__=x.__filtered__||p,x}}),gn(["head","last"],function(n,o){var l="take"+(o?"Right":"");Ve.prototype[n]=function(){return this[l](1).value()[0]}}),gn(["initial","tail"],function(n,o){var l="drop"+(o?"":"Right");Ve.prototype[n]=function(){return this.__filtered__?new Ve(this):this[l](1)}}),Ve.prototype.compact=function(){return this.filter(nn)},Ve.prototype.find=function(n){return this.filter(n).head()},Ve.prototype.findLast=function(n){return this.reverse().find(n)},Ve.prototype.invokeMap=Ue(function(n,o){return typeof n=="function"?new Ve(this):this.map(function(l){return Oi(l,n,o)})}),Ve.prototype.reject=function(n){return this.filter(vs(Te(n)))},Ve.prototype.slice=function(n,o){n=Ne(n);var l=this;return l.__filtered__&&(n>0||o<0)?new Ve(l):(n<0?l=l.takeRight(-n):n&&(l=l.drop(n)),o!==r&&(o=Ne(o),l=o<0?l.dropRight(-o):l.take(o-n)),l)},Ve.prototype.takeRightWhile=function(n){return this.reverse().takeWhile(n).reverse()},Ve.prototype.toArray=function(){return this.take(H)},Zn(Ve.prototype,function(n,o){var l=/^(?:filter|find|map|reject)|While$/.test(o),p=/^(?:head|last)$/.test(o),y=S[p?"take"+(o=="last"?"Right":""):o],x=p||/^find/.test(o);y&&(S.prototype[o]=function(){var L=this.__wrapped__,P=p?[1]:arguments,B=L instanceof Ve,te=P[0],ee=B||ze(L),se=function(tt){var Ze=y.apply(S,Ar([tt],P));return p&&ve?Ze[0]:Ze};ee&&l&&typeof te=="function"&&te.length!=1&&(B=ee=!1);var ve=this.__chain__,_e=!!this.__actions__.length,Ce=x&&!ve,$e=B&&!_e;if(!x&&ee){L=$e?L:new Ve(this);var Oe=n.apply(L,P);return Oe.__actions__.push({func:fs,args:[se],thisArg:r}),new xn(Oe,ve)}return Ce&&$e?n.apply(this,P):(Oe=this.thru(se),Ce?p?Oe.value()[0]:Oe.value():Oe)})}),gn(["pop","push","shift","sort","splice","unshift"],function(n){var o=Na[n],l=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",p=/^(?:pop|shift)$/.test(n);S.prototype[n]=function(){var y=arguments;if(p&&!this.__chain__){var x=this.value();return o.apply(ze(x)?x:[],y)}return this[l](function(L){return o.apply(ze(L)?L:[],y)})}}),Zn(Ve.prototype,function(n,o){var l=S[o];if(l){var p=l.name+"";Ye.call(Po,p)||(Po[p]=[]),Po[p].push({name:o,func:l})}}),Po[as(r,M).name]=[{name:"wrapper",func:r}],Ve.prototype.clone=Rw,Ve.prototype.reverse=Pw,Ve.prototype.value=$w,S.prototype.at=dy,S.prototype.chain=uy,S.prototype.commit=hy,S.prototype.next=fy,S.prototype.plant=gy,S.prototype.reverse=my,S.prototype.toJSON=S.prototype.valueOf=S.prototype.value=vy,S.prototype.first=S.prototype.head,Ei&&(S.prototype[Ei]=py),S})();typeof define=="function"&&typeof define.amd=="object"&&define.amd?(Lt._=Mr,define(function(){return Mr})):Kr?((Kr.exports=Mr)._=Mr,Vl._=Mr):Lt._=Mr}).call(e)})),Me=Bi(i2(),1);function ys(e){return Me.default.isEmpty(e)||Me.default.isNil(e)}function _n(e){return ys(e)||e===!1||e===0}function Jc(e){return"listImages"in e&&!_n(e.listImages)}function Qc(e){return"listPages"in e&&!_n(e.listPages)}function a2(e){return"bruteForce"in e&&!_n(e.bruteForce)}var Be=(function(e){return e.ENGLISH="English",e.SPANISH="Spanish",e.PORTUGUESE="Portuguese",e.CHINESE="Chinese",e.RAW="Raw",e})({}),He=(function(e){return e.MANGA="manga",e.COMIC="comic",e.HENTAI="hentai",e})({});function s2(e,t){return t in e}var l2={name:["3Hentai","HentaiVox"],url:/https?:\/\/(www\.)?(3hentai|hentaivox).(net|com)\/(d|view)\/.+\/.+/,homepage:["https://3hentai.net/","https://hentaivox.com/"],language:[Be.ENGLISH],category:He.HENTAI,waitVar:"readerPages",run(){return{title:unsafeWindow.readerPages.title.replace(/- Page.+/,"").trim(),series:unsafeWindow.readerPages.baseUri.replace("%s",""),pages:unsafeWindow.readerPages.lastPage,prev:"#",next:"#",listImages:Me.default.keys(unsafeWindow.readerPages.pages).map(e=>unsafeWindow.readerPages.baseUriImg.replace("%s",unsafeWindow.readerPages.pages[e].f))}}};function c2(e,t=document.body){return new Promise(r=>{const i=document.querySelector(e);if(i){r(i);return}const a=new MutationObserver(()=>{const s=document.querySelector(e);s&&(r(s),a.disconnect())});a.observe(t,{childList:!0,subtree:!0,attributes:!0})})}function ks(e,t=250){return new Promise(r=>{const i=setInterval(()=>{e()&&(clearInterval(i),r(!0))},t)})}function ed(e,t,r=document.body){return new Promise(i=>{const a=r.querySelector(e);if(a?.getAttribute(t)){i(a.getAttribute(t)??"");return}const s=new MutationObserver(()=>{const c=r.querySelector(e);c?.getAttribute(t)&&(i(c.getAttribute(t)??""),s.disconnect())});s.observe(r,{childList:!0,subtree:!0,attributes:!0,attributeFilter:[t]})})}function td(e,t=document.body){return new Promise(r=>{if(!_n(unsafeWindow[e])){r(unsafeWindow[e]);return}const i=new MutationObserver(()=>{_n(unsafeWindow[e])||(r(unsafeWindow[e]),i.disconnect())});i.observe(t,{childList:!0,subtree:!0,attributes:!0})})}function d2(e=1e3,t){return new Promise(r=>{setTimeout(()=>r(t),e)})}async function u2(e,t=1e3){const[r]=await Promise.all([e,d2(t)]);return r}async function nd(e,t,r,i,a="img",s="src"){const c=document.createElement("div");c.setAttribute("style","height: 100vh;width: 100vw;position: fixed;top: 0;left: 0;z-index: 100000;background: white;opacity: 0.5;"),document.body.append(c),e();const u=document.querySelector(r),d=document.querySelector(i),h=[];for(let f=1;f<=t;f+=1)h[f-1]=await u2(ed(a,s,d??document.body),100),d?.querySelector(a)?.removeAttribute(s),u?.dispatchEvent(new Event("click"));return h}var h2={name:["8Muses.com","8Muses.io"],obs:"Slow start, bruteforce may be required",url:/https?:\/\/(comics.)?8muses.(com|io)\/(comics\/)?picture\/.+/,homepage:["https://comics.8muses.com/","https://8muses.io/"],language:[Be.ENGLISH],category:He.HENTAI,async run(){const e=unsafeWindow.link_images?.slice(1,unsafeWindow.link_images.length)??[],t=document.querySelector('link[rel="last"]')?.getAttribute("href")?.match(/\d+$/)?.at(0),r=e?.length??parseInt(t??"0",10),i={title:[...document.querySelectorAll(".top-menu-breadcrumb li:not(:last-child)")].map(a=>a?.textContent?.trim()).join("/"),series:document.querySelector(".top-menu-breadcrumb li:nth-last-child(2) a")?.getAttribute("href"),pages:r,prev:"#",next:"#",lazy:!1,timer:10,listImages:e,async before(){unsafeWindow.link_images?.length||(i.listImages=await nd(()=>{const a=document.querySelector(".page-prev");for(;document.querySelector(".c-dropdown-toggle")?.textContent?.match(/\d+/)?.at(0)!=="1";)a?.dispatchEvent(new Event("click"))},r,".page-next",".p-picture",".photo img","src"))}};return i}},f2={name:"9Hentai",url:/https?:\/\/(www\.)?9hentai.(so)\/g\/.+\/.+/,homepage:"https://9hentai.so",language:[Be.ENGLISH],category:He.HENTAI,waitAttr:["#jumpPageModal input","max"],async run(){const e={id:parseInt(/\d+/.exec(window.location.pathname)?.at(0)??"0",10)},t={method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}},r=await fetch("/api/getBookByID",t).then(async i=>i.json());return{title:r.results.title,series:`/g/${r.results.id}/`,pages:r.results.total_page,prev:"#",next:"#",listImages:Array(r.results.total_page).fill(0).map((i,a)=>`${r.results.image_server.replace(".com",".so")+r.results.id}/${a+1}.jpg`)}}},p2={name:"AkumaMoe",url:/https?:\/\/(www\.)?akuma\.moe\/g\/.+\/.+/,homepage:"https://akuma.moe",language:[Be.RAW],category:He.HENTAI,waitFunc:()=>unsafeWindow.img_lst?.length===document.querySelectorAll(".reader-nav:first-child .nav-select option")?.length,async run(){return{title:document.querySelector("h1.sr-only")?.textContent?.trim().replace(/^Reading /,""),series:`https://akuma.moe/g/${/\/g\/([^/]+)\//.exec(window.location.pathname)?.[1]}/`,pages:unsafeWindow.img_lst.length,prev:"#",next:"#",listImages:unsafeWindow.img_lst.map(e=>`${unsafeWindow.img_prt}/${e}`)}}},g2={name:"BestPornComix",url:/https?:\/\/(www\.)?bestporncomix.com\/gallery\/.+/,homepage:"https://www.bestporncomix.com",language:[Be.ENGLISH],category:He.HENTAI,waitTime:5e3,run(){const e=[...document.querySelectorAll("figure a")];return{title:document.querySelector("h1.entry-title")?.textContent?.trim(),pages:e.length,prev:"#",next:"#",listImages:e.map(t=>t.getAttribute("href")??"")}}},m2={name:"DoujinMoeNM",url:/https?:\/\/(www\.)?doujins.com\/.+/,homepage:"https://doujins.com/",language:[Be.ENGLISH],category:He.HENTAI,waitEle:".doujin",run(){const e=[...document.querySelectorAll(".doujin")];return{title:document.querySelector(".folder-title a:last-child")?.textContent?.trim(),series:document.querySelector(".folder-title a:nth-last-child(2)")?.getAttribute("href"),pages:e.length,prev:"#",next:"#",listImages:e.map(t=>t.getAttribute("data-file")??"")}}},v2={name:"Dragon Translation",url:/https?:\/\/(www\.)?dragontranslation.net\/leer\/.+/,homepage:"https://dragontranslation.net/es",language:[Be.SPANISH],category:He.HENTAI,waitEle:"#chapter_imgs img",run(){const e=[...document.querySelectorAll("#chapter_imgs img")].map(t=>t.getAttribute("src")??"").filter(t=>t&&t!=="/discord2.jpg");return{title:document.querySelector("h1")?.textContent?.trim(),series:document.querySelector("h2 + div a")?.getAttribute("href"),pages:e.length,prev:document.querySelector(".fa-chevron-circle-left")?.parentElement?.getAttribute("href"),next:document.querySelector(".fa-chevron-circle-right")?.parentElement?.getAttribute("href"),listImages:e}}},b2={name:["ExHentai","e-Hentai"],url:/https?:\/\/(g\.)?(exhentai|e-hentai).org\/s\/.+\/.+/,homepage:["https://exhentai.org/","https://e-hentai.org/"],language:[Be.ENGLISH],obs:"May get your IP Banned, use with moderation",category:He.HENTAI,async run(){const e=parseInt(document.querySelector(".sn div span:nth-child(2)")?.textContent??"0",10),t=Math.ceil(e/20),r=document.querySelector(".sb a")?.getAttribute("href")?.replace(/\?p=\d+/,""),i=Array(t).fill(0).map(async(s,c)=>fetch(`${r}?p=${c}`).then(async u=>u.text()).then(u=>new DOMParser().parseFromString(u,"text/html"))),a=(await Promise.all(i)).flatMap(s=>[...s.querySelectorAll("#gdt a")].map(c=>c.getAttribute("href")??""));return{title:document.querySelector("#i1 h1")?.textContent?.trim(),series:r,pages:e,begin:parseInt(document.querySelector("div#i2 span")?.textContent??"1",10),prev:"#",next:"#",listPages:a,img:"#img",lazy:!0,async reload(s){const c=`${a[s-1]}`,u=await fetch(c).then(h=>h.text()).then(h=>/nl\('([\d-]+)'\)/.exec(h)?.[1]),d=`${c}${c.indexOf("?")?"&":"?"}nl=${u}`;return fetch(d).then(h=>h.text()).then(h=>new DOMParser()?.parseFromString(h,"text/html")?.querySelector("#img")?.getAttribute("src")??"")}}}},w2={name:"FreeAdultComix",url:/https?:\/\/(www\.)?freeadultcomix.com\/.+/,homepage:"https://www.freeadultcomix.com",language:[Be.ENGLISH],category:He.HENTAI,waitTime:5e3,run(){const e=[...document.querySelectorAll(".foto img")];return{title:document.querySelector(".post-conteudo h1")?.textContent?.trim(),pages:e.length,prev:"#",next:"#",listImages:e.map(t=>t.getAttribute("src")??"")}}},_2={name:"FSIComics",url:/https?:\/\/(www\.)?fsicomics.com\/.+/,homepage:"https://fsicomics.com/",language:[Be.ENGLISH],category:He.HENTAI,run(){const e=[...document.querySelectorAll(".wp-block-gallery img")];return{title:document.querySelector(".s-title")?.textContent?.trim(),pages:e.length,prev:"#",next:"#",listImages:e.map(t=>t.getAttribute("data-large-file")??"")}}},y2={name:"GNTAI.net",url:/https?:\/\/(www\.)?gntai.net\/(?!(category|tags|autores))[^/]+\/.+/,homepage:"https://www.gntai.net/",language:[Be.SPANISH],category:He.HENTAI,run(){const e=document.querySelector("#main > script")?.innerHTML.match(/var pages = [^;]+/)?.at(0)?.toString().match(/https?[^"]+/g)??[];return{title:document.querySelector(".entry-header h1")?.textContent?.trim(),pages:e?.length,prev:"#",next:"#",listImages:e}}},k2={name:"Hentai2Read",url:/https?:\/\/(www\.)?hentai2read.com\/[^/]+\/\d+(.\d+)?\//,homepage:"https://hentai2read.com/",language:[Be.ENGLISH],category:He.HENTAI,run(){return{title:document.querySelector(".reader-left-text")?.textContent?.trim(),series:unsafeWindow.gData.mainURL,pages:unsafeWindow.gData.images.length,prev:unsafeWindow.gData.previousURL,next:unsafeWindow.gData.nextURL,listImages:unsafeWindow.gData.images.map(e=>`https://static.hentaicdn.com/hentai${e}`)}}},E2={name:"HentaiEra",url:/https?:\/\/(www\.)?hentaiera.com\/view\/.+\/\d+\/?/,homepage:"https://hentaiera.com/",language:[Be.ENGLISH],category:He.HENTAI,run(){const e=parseInt(document.querySelector(".total_pages")?.textContent??"0",10);return{title:document.querySelector("h1")?.textContent?.trim().replace(/ - Page .+$/,""),series:document.querySelector(".return_btn ")?.getAttribute("href"),pages:e,prev:"#",next:"#",listPages:Array(e).fill(0).map((t,r)=>window.location.href.replace(/\/\d*\/?$/,`/${r+1}`)),img:"#gimg",lazyAttr:"data-src"}}},A2={name:"HentaiForce",url:/https?:\/\/(www\.)?hentaiforce.net\/view\/.+\/\d+/,homepage:"https://hentaiforce.net/",language:[Be.ENGLISH],category:He.HENTAI,run(){return{title:document.querySelector("h1")?.textContent?.trim().replace(/ - Page .+$/,""),series:document.querySelector(".reader-go-back ")?.getAttribute("href"),pages:unsafeWindow.readerPages.lastPage,prev:"#",next:"#",listImages:Array(unsafeWindow.readerPages.lastPage).fill(0).map((e,t)=>unsafeWindow.readerPages.baseUriImg.replace("%c",unsafeWindow.readerPages.pages[t+1].l).replace("%s",unsafeWindow.readerPages.pages[t+1].f))}}},S2=/^blob:(.+?)\/(.+)$/;function M2(e){return/^data:image\/(png|jpg|jpeg|gif|svg)/.test(e)}function x2(e){return S2.test(e)}function rd(e){switch(e){case"p":return"png";case"b":return"bmp";case"g":return"gif";case"w":return"webp";default:return"jpg"}}var I2={name:"HentaiFox",url:/https?:\/\/(www\.)?hentaifox.com\/g\/.+/,homepage:"https://www.hentaifox.com/",language:[Be.ENGLISH],category:He.HENTAI,waitVar:"g_th",waitFunc:()=>document.querySelector("#gimg")?.classList.contains("loaded")??!1,run(){const e=parseInt(document.querySelector(".total_pages")?.textContent??"",10),t=document.querySelector("#gimg")?.getAttribute("src")?.replace(/\d+.\w+$/,"")??"";return{title:document.querySelector("title")?.textContent?.replace(/ - Page .+/,"").trim(),series:document.querySelector(".browse_buttons a")?.getAttribute("href"),pages:e,prev:"#",next:"#",listImages:Array(e).fill(0).map((r,i)=>`${t+(i+1)}.${rd(unsafeWindow.g_th[i+1][0])}`)}}},C2={name:["HentaiHand","nHentai.com"],url:/https?:\/\/(www\.)?(hentaihand|nhentai).com\/.+\/reader/,homepage:["https://hentaihand.com/","https://nhentai.com"],language:[Be.ENGLISH],category:He.HENTAI,waitEle:".reader img",run(){const e=[...document.querySelectorAll(".reader img")];return{title:document.querySelector(".reader-header h5")?.textContent?.trim(),series:document.querySelector(".reader-header h5 a")?.getAttribute("href"),pages:e.length,prev:"#",next:"#",listImages:e.map(t=>t.getAttribute("data-src")??t.getAttribute("src")??"")}}},O2={name:"HentaIHere",url:/https?:\/\/(www\.)?hentaihere.com\/.+\/.+\/.+/,homepage:"https://www.hentaihere.com/",language:[Be.ENGLISH],category:He.HENTAI,waitVar:"rff_imageList",run(){const e=document.querySelector("#arf-reader-img")?.getAttribute("src")?.replace(/\d.+/,"");return{title:unsafeWindow.rff_pageTitle.replace(/.+\|/,"").trim(),series:unsafeWindow.rff_thisManga,pages:unsafeWindow.rff_imageList.length,prev:unsafeWindow.rff_previousChapter,next:unsafeWindow.rff_nextChapter,listImages:unsafeWindow.rff_imageList.map(t=>e+t)}}},T2={name:"HentaiNexus",url:/https?:\/\/((www\.)?hentainexus.com|nexus.fakku.cc)\/read\/.+/,homepage:"https://hentainexus.com/",language:[Be.ENGLISH],category:He.HENTAI,run(){const e=unsafeWindow.pageData?.map(t=>t.image)??unsafeWindow.images?.map(t=>t.url);return{title:document.querySelector("title")?.textContent?.replace(/^\[[\d/]+\]/,"").trim(),series:document.querySelector("#returnGalleryFooter a")?.getAttribute("href"),pages:e.length,prev:"#",next:"#",listImages:e}}},L2={name:"HenTalk",url:/https?:\/\/(www.)?hentalk.pw/,homepage:"https://hentalk.pw/",language:[Be.ENGLISH],category:He.HENTAI,async run(){const e="https://hentalk.pw",t=await fetch(`${window.location.pathname}/__data.json?x-sveltekit-trailing-slash=1&x-sveltekit-invalidated=001`).then(async s=>s.json()).then(s=>s.nodes[2].data),r=t?.[t.find(s=>s?.gallery)?.gallery],i=t?.[r?.hash]||t?.[t.find(s=>s?.hash&&s?.id).hash],a=t?.[r.images].map(s=>t[s]).map(s=>t[s.filename]);return{title:t?.[r.title],series:window.location.href.replace(/read\/.+/,""),pages:a?.length,prev:"#",next:"#",listImages:a?.map(s=>`${e}/image/${i}/${s}`)}}},R2={name:"Hitomi",url:/https?:\/\/hitomi.la\/reader\/.+/,homepage:"https://hitomi.la/",language:[Be.ENGLISH],category:He.HENTAI,waitAttr:["#comicImages img","src"],waitVar:"galleryinfo",run(){return{title:document.querySelector("title")?.textContent?.replace("| Hitomi.la","").trim(),series:document.querySelector(".brand")?.getAttribute("href"),pages:unsafeWindow.galleryinfo.files.length,prev:"#",next:"#",listImages:unsafeWindow.galleryinfo.files.map(e=>unsafeWindow.url_from_url_from_hash(unsafeWindow.galleryinfo,e,"webp"))}}},P2={name:"Imhentai",url:/https?:\/\/(www\.)?imhentai.xxx\/view\/.+\/.+\//,homepage:"https://imhentai.xxx/",language:[Be.ENGLISH],category:He.HENTAI,waitVar:"g_th",async run(){const e=document.querySelector("#gallery_id")?.getAttribute("value"),t=document.querySelector("#image_dir")?.getAttribute("value"),r=parseInt(document.querySelector("#pages")?.getAttribute("value")??"",10),i=await td("random_server");return{title:document.querySelector("title")?.textContent?.trim(),series:document.querySelector(".return_btn")?.getAttribute("href"),pages:r,prev:"#",next:"#",listImages:Array(r).fill(0).map((a,s)=>`//${i}/${t}/${e}/${s+1}.${rd(unsafeWindow.g_th[s+1][0])}`)}}},$2={name:["KingComix","Chochox","Comics18"],url:/https?:\/\/(www\.)?(kingcomix|chochox|comics18).(com|org)\/.+/,homepage:["https://kingcomix.com/","https://chochox.com/porno/","https://comics18.org/"],language:[Be.ENGLISH,Be.SPANISH],category:He.HENTAI,run(){const e=[...document.querySelectorAll("figure img, .entry-content img:not(a img), .wp-content img")];return{title:document.querySelector("h1.singleTitle-h1")?.textContent?.trim(),pages:e.length,prev:"#",next:"#",listImages:e.map(t=>t.getAttribute("data-src")??t.getAttribute("data-full-url")??t.getAttribute("data-lazy-src")??t.getAttribute("src")??"")}}},D2={name:"Luscious",url:/https?:\/\/(www\.)?luscious.net\/.+\/read\/.+/,homepage:"https://luscious.net/",language:[Be.ENGLISH],category:He.HENTAI,waitEle:".album-info div",async run(){const e=parseInt(document.querySelector('input[name="page_number"] + span')?.textContent?.match(/\d+/)?.pop()??"0",10),t=Math.ceil(e/50),r=parseInt(document.querySelector(".album-heading a")?.getAttribute("href")?.match(/\d+\//)?.toString()??"0",10),i="&query=%20query%20PictureListInsideAlbum(%24input%3A%20PictureListInput!)%20%7B%20picture%20%7B%20list(input%3A%20%24input)%20%7B%20info%20%7B%20...FacetCollectionInfo%20%7D%20items%20%7B%20__typename%20id%20title%20description%20created%20like_status%20number_of_comments%20number_of_favorites%20moderation_status%20width%20height%20resolution%20aspect_ratio%20url_to_original%20url_to_video%20is_animated%20position%20permissions%20url%20tags%20%7B%20category%20text%20url%20%7D%20thumbnails%20%7B%20width%20height%20size%20url%20%7D%20%7D%20%7D%20%7D%20%7D%20fragment%20FacetCollectionInfo%20on%20FacetCollectionInfo%20%7B%20page%20has_next_page%20has_previous_page%20total_items%20total_pages%20items_per_page%20url_complete%20%7D%20",a=Array(t).fill(0).map(async(c,u)=>{const d=`https://apicdn.luscious.net/graphql/nobatch/?operationName=PictureListInsideAlbum&variables={"input":{"filters":[{"name":"album_id","value":"${r}"}],"display":"position","items_per_page":50,"page":${u+1}}}${i}`;return GM.xmlHttpRequest({method:"GET",url:d}).then(h=>JSON.parse(h.responseText))}),s=(await Promise.all(a)).flatMap(c=>c.data.picture.list.items.map(u=>u.url_to_original));return{title:document.querySelector(".album-heading a")?.textContent?.trim(),series:document.querySelector(".album-heading a")?.getAttribute("href"),pages:e,prev:"#",next:"#",listImages:s}}},od=/^([\t\n])*(https?:\/\/)?.+\.(jpg|jpeg|png|gif|bmp|webp).*$/;function id(){return[...document.querySelectorAll(".wp-manga-chapter-img, .blocks-gallery-item img, .reading-content img, #chapter-images img, #chapterContent img")].map(e=>{const t=[...e.attributes].filter(r=>/.*(src|url).*/i.test(r.name)&&!/^.*(blank|lazy|loading).*$/.test(r.value));return t.length===0?"":t.find(r=>od.test(r.value))?.value??e?.getAttribute("src")??""})}var z2={name:["Madara WordPress Plugin","MangaHaus","Isekai Scan","Comic Kiba","Zinmanga","mangatx","Toonily","Mngazuki","JaiminisBox","DisasterScans","ManhuaPlus","TopManhua","NovelMic","Reset-Scans","LeviatanScans","Dragon Tea","SetsuScans","ToonGod","Hades Scans"],url:/https?:\/\/.+\/(manga|series|manhua|comic|ch|novel|webtoon|tmo)\/.+\/.+/,homepage:["https://mangabooth.com/","https://manhuaus.com","https://isekaiscan.com/","https://comickiba.com/","https://zinmanga.com/","https://mangatx.com/","https://toonily.net/","https://mangazuki.me/","https://jaiminisbox.net","https://disasterscans.com/","https://manhuaplus.org/","https://www.topmanhua.com/","https://novelmic.com/","https://reset-scans.com/","https://leviatanscans.com/","https://dragontea.ink/","https://setsuscans.com/","https://toongod.org/home/","https://lectorhades.latamtoon.com"],language:[Be.ENGLISH],obs:"Any Site that uses Madara WordPress Plugin",category:He.MANGA,waitFunc:()=>{const e=id();return e.length>0&&e.every(t=>t&&od.test(t))},run(){const e=id();return{title:document.querySelector("#chapter-heading")?.textContent?.trim(),series:(document.querySelector(".breadcrumb li:nth-child(3) a")??document.querySelector(".breadcrumb li:nth-child(2) a"))?.getAttribute("href"),pages:e.length,prev:document.querySelector(".prev_page")?.getAttribute("href"),next:document.querySelector(".next_page")?.getAttribute("href"),listImages:e}}},B2={...z2,name:["Madara WordPress Plugin","AllPornComic","Manytoon","Manga District"],url:/https?:\/\/.+\/(porncomic|read-scan|title)\/.+\/.+/,homepage:["#","https://allporncomic.com/","https://manytoon.com/","https://mangadistrict.com/"],category:He.HENTAI},N2={name:"MultPorn",url:/https?:\/\/(www\.)?multporn.net\/(comics|hentai_manga)\/.+/,homepage:"https://multporn.net/",language:[Be.ENGLISH],category:He.HENTAI,async run(){const e=/"configUrl":"(.+?)",/.exec(document.head.textContent)?.at(1)?.replaceAll("\\","")??"",t=[...(await fetch(e).then(async r=>r.text()).then(r=>new DOMParser().parseFromString(r,"text/xml"))).querySelectorAll("image")];return{title:document.querySelector("#page-title")?.textContent?.trim(),pages:t.length,prev:"#",next:"#",listImages:t.map(r=>r.getAttribute("imageURL")??"")}}},H2={name:"MyHentaiGallery",url:/https?:\/\/(www\.)?myhentaigallery.com\/g\/.+\/\d+/,homepage:"https://www.myhentaigallery.com",language:[Be.ENGLISH],category:He.HENTAI,run(){const e=document.getElementById("js__pagination__next")?.parentElement?.previousElementSibling?.querySelector("a"),t=parseInt(e?.textContent??"",10);return{title:document.querySelector("title")?.textContent?.trim(),series:document.querySelector(".back-to-gallery a")?.getAttribute("href"),pages:t,prev:"#",next:"#",listPages:Array(t).fill(0).map((r,i)=>window.location.href.replace(/\/\d+$/,`/${i+1}`)),img:".gallery-slide img"}}},F2={name:["nHentai.net"],url:/https?:\/\/(www\.)?(nhentai).(net|xxx|com|to)\/g\/.+/,homepage:["https://nhentai.net/"],language:[Be.ENGLISH],category:He.HENTAI,waitEle:"#image-container img",async run(){const e=await fetch("https://nhentai.net/api/v2/config").then(async r=>r.json()),t=await fetch(`https://nhentai.net/api/v2/galleries/${window.location.pathname.split("/")[2]}`).then(async r=>r.json());return{title:document.querySelector("title")?.textContent?.split("- Page")[0].trim(),series:document.querySelector(".go-back")?.getAttribute("href"),pages:t.pages.length,prev:"#",next:"#",listImages:t.pages.map(r=>`${e.image_servers[Math.floor(Math.random()*e.image_servers.length)]}/${r.path}`)}}},G2={name:"PornComicsHD",url:/https?:\/\/(www\.)?porncomicshd.com\/es.*/,homepage:"https://porncomicshd.com/es",language:[Be.SPANISH],category:He.HENTAI,waitEle:"app-comic-reader img",async run(){const e=[...document.querySelectorAll("app-comic-reader img")];return{title:document.querySelector("h1")?.textContent?.trim(),pages:e.length,prev:"#",next:"#",lazy:!1,listImages:e.map(t=>t.getAttribute("src")??"")}}},W2={name:"Pururin",url:/https?:\/\/(www\.)?pururin.me\/(view|read)\/.+\/.+\/.+/,homepage:"https://pururin.me/",language:[Be.ENGLISH],category:He.HENTAI,waitAttr:[".img-viewer img","src"],run(){const e=document.querySelector(".img-viewer img")?.getAttribute("src")??"",t=[...document.querySelectorAll(".img-select option")];return{title:document.querySelector(".title")?.textContent?.trim(),series:document.querySelector(".breadcrumb-item:nth-child(4) a")?.getAttribute("href"),pages:t.length,prev:"#",next:"#",listImages:t.map((r,i)=>e.replace(/\/\d+\./,`/${i+1}.`))}}},U2={name:"SchaleNetwork",url:/https?:\/\/(www\.)?(niyaniya|shupogaki|hoshino).(moe|one)/,homepage:"https://schale.network/",language:[Be.ENGLISH],category:He.HENTAI,waitEle:"nav select option",async run(){const e=history.state.memo.gallery,t=e.resolution,{base:r,entries:i}=history.state.memo.data,a=i.map(s=>`${r}/${s.path}?w=${t}`);return{title:e.title,series:`/g/${e.id}/${e.key}/`,pages:a.length,prev:"#",next:"#",fetchOptions:{method:"GET",redirect:"follow"},listImages:a}}},V2={name:"Simply-Hentai",url:/https?:\/\/(www\.)?simply-hentai.com\/.+\/page\/.+/,homepage:"https://simply-hentai.com/",language:[Be.ENGLISH],category:He.HENTAI,waitEle:"#__NEXT_DATA__",async run(){const e=JSON.parse(document.querySelector("#__NEXT_DATA__")?.innerHTML??"").props.pageProps.data.pages.map(t=>t.sizes.full);return{title:document.querySelector(".content-headline a")?.textContent?.trim(),series:document.querySelector(".content-headline a")?.getAttribute("href"),pages:e.length,prev:"#",next:"#",listImages:e}}},Z2={name:"TMOHentai",url:/https?:\/\/(www\.)?tmohentai.com\/reader\/.+\/(paginated\/\d+|cascade)/,homepage:"https://tmohentai.com/",language:[Be.SPANISH],category:He.HENTAI,run(){const e=[...document.querySelectorAll(".content-image")].map(t=>t.getAttribute("data-original")??t.getAttribute("src")??"");return{before(){window.location.pathname.includes("paginated")&&(window.location.pathname=window.location.pathname.replace(/paginated.*/,"cascade"))},title:document.querySelector(".reader-title")?.textContent?.trim(),series:document.querySelector(".nav-justified li a")?.getAttribute("href"),pages:e.length,prev:"#",next:"#",listImages:e}}},j2={name:"Tsumino",url:/https?:\/\/(www\.)?tsumino.com\/Read\/Index\/\d+(\?page=.+)?/,homepage:"https://tsumino.com/",language:[Be.ENGLISH],category:He.HENTAI,async run(){const e=document.querySelector("#image-container")?.getAttribute("data-opt"),t=document.querySelector("#image-container")?.getAttribute("data-cdn")??"",r=`https://www.tsumino.com/Read/Load?q=${e}`,i=await fetch(r).then(async a=>a.json());return{title:document.querySelector("title")?.textContent?.replace(/.+Read/,"").trim(),series:i.reader_start_url,pages:i.reader_page_total,prev:"#",next:"#",listImages:Array(i.reader_page_total).fill(0).map((a,s)=>t.replace("[PAGE]",`${s+1}`))}}},q2={name:["vermangasporno","vercomicsporno"],url:/https?:\/\/(www\.)?(vermangasporno|vercomicsporno).com\/.+/,homepage:["https://vermangasporno.com/","https://vercomicsporno.com/"],language:[Be.SPANISH],category:He.HENTAI,waitEle:'img[loading="lazy"].size-full, .comicimg picture img, .wp-content img',run(){const e=[...document.querySelectorAll('img[loading="lazy"].size-full, .comicimg picture img, .wp-content img')];return{title:document.querySelector("h1.titl, title")?.textContent?.trim(),pages:e.length,prev:"#",next:"#",listImages:e.map(t=>t.getAttribute("data-lazy-src")??t.getAttribute("data-src")??t.getAttribute("src")??"")}}},K2={name:"wnacg",url:/https?:\/\/(www\.)?wnacg.com\/photos-view-id-.+/,homepage:"https://wnacg.com/",language:[Be.ENGLISH,Be.RAW,Be.CHINESE],category:He.HENTAI,run(){const e=[...document.querySelectorAll(".pageselect option")];return{title:document.querySelector(".bread a:last-of-type")?.textContent?.trim(),pages:e.length,prev:"#",next:"#",listPages:e.map(t=>window.location.pathname.replace(/\d+/,t.value)),img:"#picarea"}}},Y2={name:"XlecxOne",url:/https?:\/\/(www\.)?xlecx.one\/.+/,homepage:"https://xlecx.one/",language:[Be.ENGLISH],category:He.HENTAI,run(){const e=[...new Set([...document.querySelectorAll("article .page__text img , article #content-2 img")].map(t=>t.getAttribute("data-src")??t.getAttribute("data-srce")??t.closest("a")?.getAttribute("href")??t.getAttribute("src")??""))];return{title:document.querySelector("title")?.textContent?.trim(),pages:e.length,prev:"#",next:"#",listImages:e}}},X2={name:"xyzcomics",url:/https?:\/\/(www\.)?xyzcomics.com\/.+/,homepage:"https://xyzcomics.com/",language:[Be.ENGLISH],category:He.HENTAI,run(){const e=[...document.querySelectorAll(".jig-link")];return{title:document.querySelector(".entry-title")?.textContent?.trim(),pages:e.length,prev:"#",next:"#",listImages:e.map(t=>t.getAttribute("href")??"")}}},J2={name:"Yabai",url:/https?:\/\/(www\.)?yabai.si\/g\/.+\/read/,homepage:"https://yabai.si/",language:[Be.ENGLISH],category:He.HENTAI,async run(){const e=document.querySelectorAll("nav select option").length,t={title:document.querySelector("title")?.textContent?.trim(),series:"../",pages:e,prev:"#",next:"#",listImages:[""],async before(){t.listImages=await nd(()=>{const r=document.querySelector("select option");r&&(r.selected=!0),document.querySelector("select")?.dispatchEvent(new Event("change"))},e,'button[title="Next"]',"h1 + div","img.mx-auto","src")}};return t}},Q2=[p2,g2,m2,v2,h2,b2,_2,w2,y2,k2,E2,A2,I2,C2,O2,T2,L2,R2,P2,$2,D2,N2,H2,F2,f2,G2,W2,U2,V2,Z2,l2,j2,q2,K2,Y2,X2,J2,B2],ep=wn(((e,t)=>{(function(r,i){typeof e=="object"&&typeof t=="object"?t.exports=i():typeof define=="function"&&define.amd?define([],i):typeof e=="object"?e.bowser=i():r.bowser=i()})(e,(function(){return(function(r){var i={};function a(s){if(i[s])return i[s].exports;var c=i[s]={i:s,l:!1,exports:{}};return r[s].call(c.exports,c,c.exports,a),c.l=!0,c.exports}return a.m=r,a.c=i,a.d=function(s,c,u){a.o(s,c)||Object.defineProperty(s,c,{enumerable:!0,get:u})},a.r=function(s){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})},a.t=function(s,c){if(1&c&&(s=a(s)),8&c||4&c&&typeof s=="object"&&s&&s.__esModule)return s;var u=Object.create(null);if(a.r(u),Object.defineProperty(u,"default",{enumerable:!0,value:s}),2&c&&typeof s!="string")for(var d in s)a.d(u,d,function(h){return s[h]}.bind(null,d));return u},a.n=function(s){var c=s&&s.__esModule?function(){return s.default}:function(){return s};return a.d(c,"a",c),c},a.o=function(s,c){return Object.prototype.hasOwnProperty.call(s,c)},a.p="",a(a.s=90)})({17:function(r,i,a){"use strict";i.__esModule=!0,i.default=void 0;var s=a(18);i.default=(function(){function c(){}return c.getFirstMatch=function(u,d){var h=d.match(u);return h&&h.length>0&&h[1]||""},c.getSecondMatch=function(u,d){var h=d.match(u);return h&&h.length>1&&h[2]||""},c.matchAndReturnConst=function(u,d,h){if(u.test(d))return h},c.getWindowsVersionName=function(u){switch(u){case"NT":return"NT";case"XP":return"XP";case"NT 5.0":return"2000";case"NT 5.1":return"XP";case"NT 5.2":return"2003";case"NT 6.0":return"Vista";case"NT 6.1":return"7";case"NT 6.2":return"8";case"NT 6.3":return"8.1";case"NT 10.0":return"10";default:return}},c.getMacOSVersionName=function(u){var d=u.split(".").splice(0,2).map((function(b){return parseInt(b,10)||0}));d.push(0);var h=d[0],f=d[1];if(h===10)switch(f){case 5:return"Leopard";case 6:return"Snow Leopard";case 7:return"Lion";case 8:return"Mountain Lion";case 9:return"Mavericks";case 10:return"Yosemite";case 11:return"El Capitan";case 12:return"Sierra";case 13:return"High Sierra";case 14:return"Mojave";case 15:return"Catalina";default:return}switch(h){case 11:return"Big Sur";case 12:return"Monterey";case 13:return"Ventura";case 14:return"Sonoma";case 15:return"Sequoia";default:return}},c.getAndroidVersionName=function(u){var d=u.split(".").splice(0,2).map((function(h){return parseInt(h,10)||0}));if(d.push(0),!(d[0]===1&&d[1]<5))return d[0]===1&&d[1]<6?"Cupcake":d[0]===1&&d[1]>=6?"Donut":d[0]===2&&d[1]<2?"Eclair":d[0]===2&&d[1]===2?"Froyo":d[0]===2&&d[1]>2?"Gingerbread":d[0]===3?"Honeycomb":d[0]===4&&d[1]<1?"Ice Cream Sandwich":d[0]===4&&d[1]<4?"Jelly Bean":d[0]===4&&d[1]>=4?"KitKat":d[0]===5?"Lollipop":d[0]===6?"Marshmallow":d[0]===7?"Nougat":d[0]===8?"Oreo":d[0]===9?"Pie":void 0},c.getVersionPrecision=function(u){return u.split(".").length},c.compareVersions=function(u,d,h){h===void 0&&(h=!1);var f=c.getVersionPrecision(u),b=c.getVersionPrecision(d),v=Math.max(f,b),m=0,g=c.map([u,d],(function(k){var _=v-c.getVersionPrecision(k),E=k+new Array(_+1).join(".0");return c.map(E.split("."),(function(M){return new Array(20-M.length).join("0")+M})).reverse()}));for(h&&(m=v-Math.min(f,b)),v-=1;v>=m;){if(g[0][v]>g[1][v])return 1;if(g[0][v]===g[1][v]){if(v===m)return 0;v-=1}else if(g[0][v]<g[1][v])return-1}},c.map=function(u,d){var h,f=[];if(Array.prototype.map)return Array.prototype.map.call(u,d);for(h=0;h<u.length;h+=1)f.push(d(u[h]));return f},c.find=function(u,d){var h,f;if(Array.prototype.find)return Array.prototype.find.call(u,d);for(h=0,f=u.length;h<f;h+=1){var b=u[h];if(d(b,h))return b}},c.assign=function(u){for(var d,h,f=u,b=arguments.length,v=new Array(b>1?b-1:0),m=1;m<b;m++)v[m-1]=arguments[m];if(Object.assign)return Object.assign.apply(Object,[u].concat(v));var g=function(){var k=v[d];typeof k=="object"&&k!==null&&Object.keys(k).forEach((function(_){f[_]=k[_]}))};for(d=0,h=v.length;d<h;d+=1)g();return u},c.getBrowserAlias=function(u){return s.BROWSER_ALIASES_MAP[u]},c.getBrowserTypeByAlias=function(u){return s.BROWSER_MAP[u]||""},c})(),r.exports=i.default},18:function(r,i,a){"use strict";i.__esModule=!0,i.ENGINE_MAP=i.OS_MAP=i.PLATFORMS_MAP=i.BROWSER_MAP=i.BROWSER_ALIASES_MAP=void 0,i.BROWSER_ALIASES_MAP={AmazonBot:"amazonbot","Amazon Silk":"amazon_silk","Android Browser":"android",BaiduSpider:"baiduspider",Bada:"bada",BingCrawler:"bingcrawler",Brave:"brave",BlackBerry:"blackberry","ChatGPT-User":"chatgpt_user",Chrome:"chrome",ClaudeBot:"claudebot",Chromium:"chromium",Diffbot:"diffbot",DuckDuckBot:"duckduckbot",DuckDuckGo:"duckduckgo",Electron:"electron",Epiphany:"epiphany",FacebookExternalHit:"facebookexternalhit",Firefox:"firefox",Focus:"focus",Generic:"generic","Google Search":"google_search",Googlebot:"googlebot",GPTBot:"gptbot","Internet Explorer":"ie",InternetArchiveCrawler:"internetarchivecrawler","K-Meleon":"k_meleon",LibreWolf:"librewolf",Linespider:"linespider",Maxthon:"maxthon","Meta-ExternalAds":"meta_externalads","Meta-ExternalAgent":"meta_externalagent","Meta-ExternalFetcher":"meta_externalfetcher","Meta-WebIndexer":"meta_webindexer","Microsoft Edge":"edge","MZ Browser":"mz","NAVER Whale Browser":"naver","OAI-SearchBot":"oai_searchbot",Omgilibot:"omgilibot",Opera:"opera","Opera Coast":"opera_coast","Pale Moon":"pale_moon",PerplexityBot:"perplexitybot","Perplexity-User":"perplexity_user",PhantomJS:"phantomjs",PingdomBot:"pingdombot",Puffin:"puffin",QQ:"qq",QQLite:"qqlite",QupZilla:"qupzilla",Roku:"roku",Safari:"safari",Sailfish:"sailfish","Samsung Internet for Android":"samsung_internet",SlackBot:"slackbot",SeaMonkey:"seamonkey",Sleipnir:"sleipnir","Sogou Browser":"sogou",Swing:"swing",Tizen:"tizen","UC Browser":"uc",Vivaldi:"vivaldi","WebOS Browser":"webos",WeChat:"wechat",YahooSlurp:"yahooslurp","Yandex Browser":"yandex",YandexBot:"yandexbot",YouBot:"youbot"},i.BROWSER_MAP={amazonbot:"AmazonBot",amazon_silk:"Amazon Silk",android:"Android Browser",baiduspider:"BaiduSpider",bada:"Bada",bingcrawler:"BingCrawler",blackberry:"BlackBerry",brave:"Brave",chatgpt_user:"ChatGPT-User",chrome:"Chrome",claudebot:"ClaudeBot",chromium:"Chromium",diffbot:"Diffbot",duckduckbot:"DuckDuckBot",duckduckgo:"DuckDuckGo",edge:"Microsoft Edge",electron:"Electron",epiphany:"Epiphany",facebookexternalhit:"FacebookExternalHit",firefox:"Firefox",focus:"Focus",generic:"Generic",google_search:"Google Search",googlebot:"Googlebot",gptbot:"GPTBot",ie:"Internet Explorer",internetarchivecrawler:"InternetArchiveCrawler",k_meleon:"K-Meleon",librewolf:"LibreWolf",linespider:"Linespider",maxthon:"Maxthon",meta_externalads:"Meta-ExternalAds",meta_externalagent:"Meta-ExternalAgent",meta_externalfetcher:"Meta-ExternalFetcher",meta_webindexer:"Meta-WebIndexer",mz:"MZ Browser",naver:"NAVER Whale Browser",oai_searchbot:"OAI-SearchBot",omgilibot:"Omgilibot",opera:"Opera",opera_coast:"Opera Coast",pale_moon:"Pale Moon",perplexitybot:"PerplexityBot",perplexity_user:"Perplexity-User",phantomjs:"PhantomJS",pingdombot:"PingdomBot",puffin:"Puffin",qq:"QQ Browser",qqlite:"QQ Browser Lite",qupzilla:"QupZilla",roku:"Roku",safari:"Safari",sailfish:"Sailfish",samsung_internet:"Samsung Internet for Android",seamonkey:"SeaMonkey",slackbot:"SlackBot",sleipnir:"Sleipnir",sogou:"Sogou Browser",swing:"Swing",tizen:"Tizen",uc:"UC Browser",vivaldi:"Vivaldi",webos:"WebOS Browser",wechat:"WeChat",yahooslurp:"YahooSlurp",yandex:"Yandex Browser",yandexbot:"YandexBot",youbot:"YouBot"},i.PLATFORMS_MAP={bot:"bot",desktop:"desktop",mobile:"mobile",tablet:"tablet",tv:"tv"},i.OS_MAP={Android:"Android",Bada:"Bada",BlackBerry:"BlackBerry",ChromeOS:"Chrome OS",HarmonyOS:"HarmonyOS",iOS:"iOS",Linux:"Linux",MacOS:"macOS",PlayStation4:"PlayStation 4",Roku:"Roku",Tizen:"Tizen",WebOS:"WebOS",Windows:"Windows",WindowsPhone:"Windows Phone"},i.ENGINE_MAP={Blink:"Blink",EdgeHTML:"EdgeHTML",Gecko:"Gecko",Presto:"Presto",Trident:"Trident",WebKit:"WebKit"}},90:function(r,i,a){"use strict";i.__esModule=!0,i.default=void 0;var s,c=(s=a(91))&&s.__esModule?s:{default:s},u=a(18);function d(h,f){for(var b=0;b<f.length;b++){var v=f[b];v.enumerable=v.enumerable||!1,v.configurable=!0,"value"in v&&(v.writable=!0),Object.defineProperty(h,v.key,v)}}i.default=(function(){function h(){}var f,b,v;return h.getParser=function(m,g,k){if(g===void 0&&(g=!1),k===void 0&&(k=null),typeof m!="string")throw new Error("UserAgent should be a string");return new c.default(m,g,k)},h.parse=function(m,g){return g===void 0&&(g=null),new c.default(m,g).getResult()},f=h,v=[{key:"BROWSER_MAP",get:function(){return u.BROWSER_MAP}},{key:"ENGINE_MAP",get:function(){return u.ENGINE_MAP}},{key:"OS_MAP",get:function(){return u.OS_MAP}},{key:"PLATFORMS_MAP",get:function(){return u.PLATFORMS_MAP}}],(b=null)&&d(f.prototype,b),v&&d(f,v),h})(),r.exports=i.default},91:function(r,i,a){"use strict";i.__esModule=!0,i.default=void 0;var s=f(a(92)),c=f(a(93)),u=f(a(94)),d=f(a(95)),h=f(a(17));function f(b){return b&&b.__esModule?b:{default:b}}i.default=(function(){function b(m,g,k){if(g===void 0&&(g=!1),k===void 0&&(k=null),m==null||m==="")throw new Error("UserAgent parameter can't be empty");this._ua=m;var _=!1;typeof g=="boolean"?(_=g,this._hints=k):this._hints=g!=null&&typeof g=="object"?g:null,this.parsedResult={},_!==!0&&this.parse()}var v=b.prototype;return v.getHints=function(){return this._hints},v.hasBrand=function(m){if(!this._hints||!Array.isArray(this._hints.brands))return!1;var g=m.toLowerCase();return this._hints.brands.some((function(k){return k.brand&&k.brand.toLowerCase()===g}))},v.getBrandVersion=function(m){if(this._hints&&Array.isArray(this._hints.brands)){var g=m.toLowerCase(),k=this._hints.brands.find((function(_){return _.brand&&_.brand.toLowerCase()===g}));return k?k.version:void 0}},v.getUA=function(){return this._ua},v.test=function(m){return m.test(this._ua)},v.parseBrowser=function(){var m=this;this.parsedResult.browser={};var g=h.default.find(s.default,(function(k){if(typeof k.test=="function")return k.test(m);if(Array.isArray(k.test))return k.test.some((function(_){return m.test(_)}));throw new Error("Browser's test function is not valid")}));return g&&(this.parsedResult.browser=g.describe(this.getUA(),this)),this.parsedResult.browser},v.getBrowser=function(){return this.parsedResult.browser?this.parsedResult.browser:this.parseBrowser()},v.getBrowserName=function(m){return m?String(this.getBrowser().name).toLowerCase()||"":this.getBrowser().name||""},v.getBrowserVersion=function(){return this.getBrowser().version},v.getOS=function(){return this.parsedResult.os?this.parsedResult.os:this.parseOS()},v.parseOS=function(){var m=this;this.parsedResult.os={};var g=h.default.find(c.default,(function(k){if(typeof k.test=="function")return k.test(m);if(Array.isArray(k.test))return k.test.some((function(_){return m.test(_)}));throw new Error("Browser's test function is not valid")}));return g&&(this.parsedResult.os=g.describe(this.getUA())),this.parsedResult.os},v.getOSName=function(m){var g=this.getOS().name;return m?String(g).toLowerCase()||"":g||""},v.getOSVersion=function(){return this.getOS().version},v.getPlatform=function(){return this.parsedResult.platform?this.parsedResult.platform:this.parsePlatform()},v.getPlatformType=function(m){m===void 0&&(m=!1);var g=this.getPlatform().type;return m?String(g).toLowerCase()||"":g||""},v.parsePlatform=function(){var m=this;this.parsedResult.platform={};var g=h.default.find(u.default,(function(k){if(typeof k.test=="function")return k.test(m);if(Array.isArray(k.test))return k.test.some((function(_){return m.test(_)}));throw new Error("Browser's test function is not valid")}));return g&&(this.parsedResult.platform=g.describe(this.getUA())),this.parsedResult.platform},v.getEngine=function(){return this.parsedResult.engine?this.parsedResult.engine:this.parseEngine()},v.getEngineName=function(m){return m?String(this.getEngine().name).toLowerCase()||"":this.getEngine().name||""},v.parseEngine=function(){var m=this;this.parsedResult.engine={};var g=h.default.find(d.default,(function(k){if(typeof k.test=="function")return k.test(m);if(Array.isArray(k.test))return k.test.some((function(_){return m.test(_)}));throw new Error("Browser's test function is not valid")}));return g&&(this.parsedResult.engine=g.describe(this.getUA())),this.parsedResult.engine},v.parse=function(){return this.parseBrowser(),this.parseOS(),this.parsePlatform(),this.parseEngine(),this},v.getResult=function(){return h.default.assign({},this.parsedResult)},v.satisfies=function(m){var g=this,k={},_=0,E={},M=0;if(Object.keys(m).forEach((function(pe){var we=m[pe];typeof we=="string"?(E[pe]=we,M+=1):typeof we=="object"&&(k[pe]=we,_+=1)})),_>0){var T=Object.keys(k),C=h.default.find(T,(function(pe){return g.isOS(pe)}));if(C){var D=this.satisfies(k[C]);if(D!==void 0)return D}var q=h.default.find(T,(function(pe){return g.isPlatform(pe)}));if(q){var Z=this.satisfies(k[q]);if(Z!==void 0)return Z}}if(M>0){var ne=Object.keys(E),F=h.default.find(ne,(function(pe){return g.isBrowser(pe,!0)}));if(F!==void 0)return this.compareVersion(E[F])}},v.isBrowser=function(m,g){g===void 0&&(g=!1);var k=this.getBrowserName().toLowerCase(),_=m.toLowerCase(),E=h.default.getBrowserTypeByAlias(_);return g&&E&&(_=E.toLowerCase()),_===k},v.compareVersion=function(m){var g=[0],k=m,_=!1,E=this.getBrowserVersion();if(typeof E=="string")return m[0]===">"||m[0]==="<"?(k=m.substr(1),m[1]==="="?(_=!0,k=m.substr(2)):g=[],m[0]===">"?g.push(1):g.push(-1)):m[0]==="="?k=m.substr(1):m[0]==="~"&&(_=!0,k=m.substr(1)),g.indexOf(h.default.compareVersions(E,k,_))>-1},v.isOS=function(m){return this.getOSName(!0)===String(m).toLowerCase()},v.isPlatform=function(m){return this.getPlatformType(!0)===String(m).toLowerCase()},v.isEngine=function(m){return this.getEngineName(!0)===String(m).toLowerCase()},v.is=function(m,g){return g===void 0&&(g=!1),this.isBrowser(m,g)||this.isOS(m)||this.isPlatform(m)},v.some=function(m){var g=this;return m===void 0&&(m=[]),m.some((function(k){return g.is(k)}))},b})(),r.exports=i.default},92:function(r,i,a){"use strict";i.__esModule=!0,i.default=void 0;var s,c=(s=a(17))&&s.__esModule?s:{default:s},u=/version\/(\d+(\.?_?\d+)+)/i;i.default=[{test:[/gptbot/i],describe:function(d){var h={name:"GPTBot"},f=c.default.getFirstMatch(/gptbot\/(\d+(\.\d+)+)/i,d)||c.default.getFirstMatch(u,d);return f&&(h.version=f),h}},{test:[/chatgpt-user/i],describe:function(d){var h={name:"ChatGPT-User"},f=c.default.getFirstMatch(/chatgpt-user\/(\d+(\.\d+)+)/i,d)||c.default.getFirstMatch(u,d);return f&&(h.version=f),h}},{test:[/oai-searchbot/i],describe:function(d){var h={name:"OAI-SearchBot"},f=c.default.getFirstMatch(/oai-searchbot\/(\d+(\.\d+)+)/i,d)||c.default.getFirstMatch(u,d);return f&&(h.version=f),h}},{test:[/claudebot/i,/claude-web/i,/claude-user/i,/claude-searchbot/i],describe:function(d){var h={name:"ClaudeBot"},f=c.default.getFirstMatch(/(?:claudebot|claude-web|claude-user|claude-searchbot)\/(\d+(\.\d+)+)/i,d)||c.default.getFirstMatch(u,d);return f&&(h.version=f),h}},{test:[/omgilibot/i,/webzio-extended/i],describe:function(d){var h={name:"Omgilibot"},f=c.default.getFirstMatch(/(?:omgilibot|webzio-extended)\/(\d+(\.\d+)+)/i,d)||c.default.getFirstMatch(u,d);return f&&(h.version=f),h}},{test:[/diffbot/i],describe:function(d){var h={name:"Diffbot"},f=c.default.getFirstMatch(/diffbot\/(\d+(\.\d+)+)/i,d)||c.default.getFirstMatch(u,d);return f&&(h.version=f),h}},{test:[/perplexitybot/i],describe:function(d){var h={name:"PerplexityBot"},f=c.default.getFirstMatch(/perplexitybot\/(\d+(\.\d+)+)/i,d)||c.default.getFirstMatch(u,d);return f&&(h.version=f),h}},{test:[/perplexity-user/i],describe:function(d){var h={name:"Perplexity-User"},f=c.default.getFirstMatch(/perplexity-user\/(\d+(\.\d+)+)/i,d)||c.default.getFirstMatch(u,d);return f&&(h.version=f),h}},{test:[/youbot/i],describe:function(d){var h={name:"YouBot"},f=c.default.getFirstMatch(/youbot\/(\d+(\.\d+)+)/i,d)||c.default.getFirstMatch(u,d);return f&&(h.version=f),h}},{test:[/meta-webindexer/i],describe:function(d){var h={name:"Meta-WebIndexer"},f=c.default.getFirstMatch(/meta-webindexer\/(\d+(\.\d+)+)/i,d)||c.default.getFirstMatch(u,d);return f&&(h.version=f),h}},{test:[/meta-externalads/i],describe:function(d){var h={name:"Meta-ExternalAds"},f=c.default.getFirstMatch(/meta-externalads\/(\d+(\.\d+)+)/i,d)||c.default.getFirstMatch(u,d);return f&&(h.version=f),h}},{test:[/meta-externalagent/i],describe:function(d){var h={name:"Meta-ExternalAgent"},f=c.default.getFirstMatch(/meta-externalagent\/(\d+(\.\d+)+)/i,d)||c.default.getFirstMatch(u,d);return f&&(h.version=f),h}},{test:[/meta-externalfetcher/i],describe:function(d){var h={name:"Meta-ExternalFetcher"},f=c.default.getFirstMatch(/meta-externalfetcher\/(\d+(\.\d+)+)/i,d)||c.default.getFirstMatch(u,d);return f&&(h.version=f),h}},{test:[/googlebot/i],describe:function(d){var h={name:"Googlebot"},f=c.default.getFirstMatch(/googlebot\/(\d+(\.\d+))/i,d)||c.default.getFirstMatch(u,d);return f&&(h.version=f),h}},{test:[/linespider/i],describe:function(d){var h={name:"Linespider"},f=c.default.getFirstMatch(/(?:linespider)(?:-[-\w]+)?[\s/](\d+(\.\d+)+)/i,d)||c.default.getFirstMatch(u,d);return f&&(h.version=f),h}},{test:[/amazonbot/i],describe:function(d){var h={name:"AmazonBot"},f=c.default.getFirstMatch(/amazonbot\/(\d+(\.\d+)+)/i,d)||c.default.getFirstMatch(u,d);return f&&(h.version=f),h}},{test:[/bingbot/i],describe:function(d){var h={name:"BingCrawler"},f=c.default.getFirstMatch(/bingbot\/(\d+(\.\d+)+)/i,d)||c.default.getFirstMatch(u,d);return f&&(h.version=f),h}},{test:[/baiduspider/i],describe:function(d){var h={name:"BaiduSpider"},f=c.default.getFirstMatch(/baiduspider\/(\d+(\.\d+)+)/i,d)||c.default.getFirstMatch(u,d);return f&&(h.version=f),h}},{test:[/duckduckbot/i],describe:function(d){var h={name:"DuckDuckBot"},f=c.default.getFirstMatch(/duckduckbot\/(\d+(\.\d+)+)/i,d)||c.default.getFirstMatch(u,d);return f&&(h.version=f),h}},{test:[/ia_archiver/i],describe:function(d){var h={name:"InternetArchiveCrawler"},f=c.default.getFirstMatch(/ia_archiver\/(\d+(\.\d+)+)/i,d)||c.default.getFirstMatch(u,d);return f&&(h.version=f),h}},{test:[/facebookexternalhit/i,/facebookcatalog/i],describe:function(){return{name:"FacebookExternalHit"}}},{test:[/slackbot/i,/slack-imgProxy/i],describe:function(d){var h={name:"SlackBot"},f=c.default.getFirstMatch(/(?:slackbot|slack-imgproxy)(?:-[-\w]+)?[\s/](\d+(\.\d+)+)/i,d)||c.default.getFirstMatch(u,d);return f&&(h.version=f),h}},{test:[/yahoo!?[\s/]*slurp/i],describe:function(){return{name:"YahooSlurp"}}},{test:[/yandexbot/i,/yandexmobilebot/i],describe:function(){return{name:"YandexBot"}}},{test:[/pingdom/i],describe:function(){return{name:"PingdomBot"}}},{test:[/opera/i],describe:function(d){var h={name:"Opera"},f=c.default.getFirstMatch(u,d)||c.default.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i,d);return f&&(h.version=f),h}},{test:[/opr\/|opios/i],describe:function(d){var h={name:"Opera"},f=c.default.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i,d)||c.default.getFirstMatch(u,d);return f&&(h.version=f),h}},{test:[/SamsungBrowser/i],describe:function(d){var h={name:"Samsung Internet for Android"},f=c.default.getFirstMatch(u,d)||c.default.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i,d);return f&&(h.version=f),h}},{test:[/Whale/i],describe:function(d){var h={name:"NAVER Whale Browser"},f=c.default.getFirstMatch(u,d)||c.default.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i,d);return f&&(h.version=f),h}},{test:[/PaleMoon/i],describe:function(d){var h={name:"Pale Moon"},f=c.default.getFirstMatch(u,d)||c.default.getFirstMatch(/(?:PaleMoon)[\s/](\d+(?:\.\d+)+)/i,d);return f&&(h.version=f),h}},{test:[/MZBrowser/i],describe:function(d){var h={name:"MZ Browser"},f=c.default.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i,d)||c.default.getFirstMatch(u,d);return f&&(h.version=f),h}},{test:[/focus/i],describe:function(d){var h={name:"Focus"},f=c.default.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i,d)||c.default.getFirstMatch(u,d);return f&&(h.version=f),h}},{test:[/swing/i],describe:function(d){var h={name:"Swing"},f=c.default.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i,d)||c.default.getFirstMatch(u,d);return f&&(h.version=f),h}},{test:[/coast/i],describe:function(d){var h={name:"Opera Coast"},f=c.default.getFirstMatch(u,d)||c.default.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i,d);return f&&(h.version=f),h}},{test:[/opt\/\d+(?:.?_?\d+)+/i],describe:function(d){var h={name:"Opera Touch"},f=c.default.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i,d)||c.default.getFirstMatch(u,d);return f&&(h.version=f),h}},{test:[/yabrowser/i],describe:function(d){var h={name:"Yandex Browser"},f=c.default.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i,d)||c.default.getFirstMatch(u,d);return f&&(h.version=f),h}},{test:[/ucbrowser/i],describe:function(d){var h={name:"UC Browser"},f=c.default.getFirstMatch(u,d)||c.default.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i,d);return f&&(h.version=f),h}},{test:[/Maxthon|mxios/i],describe:function(d){var h={name:"Maxthon"},f=c.default.getFirstMatch(u,d)||c.default.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i,d);return f&&(h.version=f),h}},{test:[/epiphany/i],describe:function(d){var h={name:"Epiphany"},f=c.default.getFirstMatch(u,d)||c.default.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i,d);return f&&(h.version=f),h}},{test:[/puffin/i],describe:function(d){var h={name:"Puffin"},f=c.default.getFirstMatch(u,d)||c.default.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i,d);return f&&(h.version=f),h}},{test:[/sleipnir/i],describe:function(d){var h={name:"Sleipnir"},f=c.default.getFirstMatch(u,d)||c.default.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i,d);return f&&(h.version=f),h}},{test:[/k-meleon/i],describe:function(d){var h={name:"K-Meleon"},f=c.default.getFirstMatch(u,d)||c.default.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i,d);return f&&(h.version=f),h}},{test:[/micromessenger/i],describe:function(d){var h={name:"WeChat"},f=c.default.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i,d)||c.default.getFirstMatch(u,d);return f&&(h.version=f),h}},{test:[/qqbrowser/i],describe:function(d){var h={name:/qqbrowserlite/i.test(d)?"QQ Browser Lite":"QQ Browser"},f=c.default.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i,d)||c.default.getFirstMatch(u,d);return f&&(h.version=f),h}},{test:[/msie|trident/i],describe:function(d){var h={name:"Internet Explorer"},f=c.default.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i,d);return f&&(h.version=f),h}},{test:[/\sedg\//i],describe:function(d){var h={name:"Microsoft Edge"},f=c.default.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i,d);return f&&(h.version=f),h}},{test:[/edg([ea]|ios)/i],describe:function(d){var h={name:"Microsoft Edge"},f=c.default.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i,d);return f&&(h.version=f),h}},{test:[/vivaldi/i],describe:function(d){var h={name:"Vivaldi"},f=c.default.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i,d);return f&&(h.version=f),h}},{test:[/seamonkey/i],describe:function(d){var h={name:"SeaMonkey"},f=c.default.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i,d);return f&&(h.version=f),h}},{test:[/sailfish/i],describe:function(d){var h={name:"Sailfish"},f=c.default.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i,d);return f&&(h.version=f),h}},{test:[/silk/i],describe:function(d){var h={name:"Amazon Silk"},f=c.default.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i,d);return f&&(h.version=f),h}},{test:[/phantom/i],describe:function(d){var h={name:"PhantomJS"},f=c.default.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i,d);return f&&(h.version=f),h}},{test:[/slimerjs/i],describe:function(d){var h={name:"SlimerJS"},f=c.default.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i,d);return f&&(h.version=f),h}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe:function(d){var h={name:"BlackBerry"},f=c.default.getFirstMatch(u,d)||c.default.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i,d);return f&&(h.version=f),h}},{test:[/(web|hpw)[o0]s/i],describe:function(d){var h={name:"WebOS Browser"},f=c.default.getFirstMatch(u,d)||c.default.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i,d);return f&&(h.version=f),h}},{test:[/bada/i],describe:function(d){var h={name:"Bada"},f=c.default.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i,d);return f&&(h.version=f),h}},{test:[/tizen/i],describe:function(d){var h={name:"Tizen"},f=c.default.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i,d)||c.default.getFirstMatch(u,d);return f&&(h.version=f),h}},{test:[/qupzilla/i],describe:function(d){var h={name:"QupZilla"},f=c.default.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i,d)||c.default.getFirstMatch(u,d);return f&&(h.version=f),h}},{test:[/librewolf/i],describe:function(d){var h={name:"LibreWolf"},f=c.default.getFirstMatch(/(?:librewolf)[\s/](\d+(\.?_?\d+)+)/i,d);return f&&(h.version=f),h}},{test:[/firefox|iceweasel|fxios/i],describe:function(d){var h={name:"Firefox"},f=c.default.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i,d);return f&&(h.version=f),h}},{test:[/electron/i],describe:function(d){var h={name:"Electron"},f=c.default.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i,d);return f&&(h.version=f),h}},{test:[/sogoumobilebrowser/i,/metasr/i,/se 2\.[x]/i],describe:function(d){var h={name:"Sogou Browser"},f=c.default.getFirstMatch(/(?:sogoumobilebrowser)[\s/](\d+(\.?_?\d+)+)/i,d),b=c.default.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i,d),v=c.default.getFirstMatch(/se ([\d.]+)x/i,d),m=f||b||v;return m&&(h.version=m),h}},{test:[/MiuiBrowser/i],describe:function(d){var h={name:"Miui"},f=c.default.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i,d);return f&&(h.version=f),h}},{test:function(d){return!!d.hasBrand("DuckDuckGo")||d.test(/\sDdg\/[\d.]+$/i)},describe:function(d,h){var f={name:"DuckDuckGo"};if(h){var b=h.getBrandVersion("DuckDuckGo");if(b)return f.version=b,f}var v=c.default.getFirstMatch(/\sDdg\/([\d.]+)$/i,d);return v&&(f.version=v),f}},{test:function(d){return d.hasBrand("Brave")},describe:function(d,h){var f={name:"Brave"};if(h){var b=h.getBrandVersion("Brave");if(b)return f.version=b,f}return f}},{test:[/chromium/i],describe:function(d){var h={name:"Chromium"},f=c.default.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i,d)||c.default.getFirstMatch(u,d);return f&&(h.version=f),h}},{test:[/chrome|crios|crmo/i],describe:function(d){var h={name:"Chrome"},f=c.default.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i,d);return f&&(h.version=f),h}},{test:[/GSA/i],describe:function(d){var h={name:"Google Search"},f=c.default.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i,d);return f&&(h.version=f),h}},{test:function(d){var h=!d.test(/like android/i),f=d.test(/android/i);return h&&f},describe:function(d){var h={name:"Android Browser"},f=c.default.getFirstMatch(u,d);return f&&(h.version=f),h}},{test:[/playstation 4/i],describe:function(d){var h={name:"PlayStation 4"},f=c.default.getFirstMatch(u,d);return f&&(h.version=f),h}},{test:[/safari|applewebkit/i],describe:function(d){var h={name:"Safari"},f=c.default.getFirstMatch(u,d);return f&&(h.version=f),h}},{test:[/.*/i],describe:function(d){var h=d.search("\\(")!==-1?/^(.*)\/(.*)[ \t]\((.*)/:/^(.*)\/(.*) /;return{name:c.default.getFirstMatch(h,d),version:c.default.getSecondMatch(h,d)}}}],r.exports=i.default},93:function(r,i,a){"use strict";i.__esModule=!0,i.default=void 0;var s,c=(s=a(17))&&s.__esModule?s:{default:s},u=a(18);i.default=[{test:[/Roku\/DVP/],describe:function(d){var h=c.default.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i,d);return{name:u.OS_MAP.Roku,version:h}}},{test:[/windows phone/i],describe:function(d){var h=c.default.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i,d);return{name:u.OS_MAP.WindowsPhone,version:h}}},{test:[/windows /i],describe:function(d){var h=c.default.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i,d),f=c.default.getWindowsVersionName(h);return{name:u.OS_MAP.Windows,version:h,versionName:f}}},{test:[/Macintosh(.*?) FxiOS(.*?)\//],describe:function(d){var h={name:u.OS_MAP.iOS},f=c.default.getSecondMatch(/(Version\/)(\d[\d.]+)/,d);return f&&(h.version=f),h}},{test:[/macintosh/i],describe:function(d){var h=c.default.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i,d).replace(/[_\s]/g,"."),f=c.default.getMacOSVersionName(h),b={name:u.OS_MAP.MacOS,version:h};return f&&(b.versionName=f),b}},{test:[/(ipod|iphone|ipad)/i],describe:function(d){var h=c.default.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i,d).replace(/[_\s]/g,".");return{name:u.OS_MAP.iOS,version:h}}},{test:[/OpenHarmony/i],describe:function(d){var h=c.default.getFirstMatch(/OpenHarmony\s+(\d+(\.\d+)*)/i,d);return{name:u.OS_MAP.HarmonyOS,version:h}}},{test:function(d){var h=!d.test(/like android/i),f=d.test(/android/i);return h&&f},describe:function(d){var h=c.default.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i,d),f=c.default.getAndroidVersionName(h),b={name:u.OS_MAP.Android,version:h};return f&&(b.versionName=f),b}},{test:[/(web|hpw)[o0]s/i],describe:function(d){var h=c.default.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i,d),f={name:u.OS_MAP.WebOS};return h&&h.length&&(f.version=h),f}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe:function(d){var h=c.default.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i,d)||c.default.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i,d)||c.default.getFirstMatch(/\bbb(\d+)/i,d);return{name:u.OS_MAP.BlackBerry,version:h}}},{test:[/bada/i],describe:function(d){var h=c.default.getFirstMatch(/bada\/(\d+(\.\d+)*)/i,d);return{name:u.OS_MAP.Bada,version:h}}},{test:[/tizen/i],describe:function(d){var h=c.default.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i,d);return{name:u.OS_MAP.Tizen,version:h}}},{test:[/linux/i],describe:function(){return{name:u.OS_MAP.Linux}}},{test:[/CrOS/],describe:function(){return{name:u.OS_MAP.ChromeOS}}},{test:[/PlayStation 4/],describe:function(d){var h=c.default.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i,d);return{name:u.OS_MAP.PlayStation4,version:h}}}],r.exports=i.default},94:function(r,i,a){"use strict";i.__esModule=!0,i.default=void 0;var s,c=(s=a(17))&&s.__esModule?s:{default:s},u=a(18);i.default=[{test:[/googlebot/i],describe:function(){return{type:u.PLATFORMS_MAP.bot,vendor:"Google"}}},{test:[/linespider/i],describe:function(){return{type:u.PLATFORMS_MAP.bot,vendor:"Line"}}},{test:[/amazonbot/i],describe:function(){return{type:u.PLATFORMS_MAP.bot,vendor:"Amazon"}}},{test:[/gptbot/i],describe:function(){return{type:u.PLATFORMS_MAP.bot,vendor:"OpenAI"}}},{test:[/chatgpt-user/i],describe:function(){return{type:u.PLATFORMS_MAP.bot,vendor:"OpenAI"}}},{test:[/oai-searchbot/i],describe:function(){return{type:u.PLATFORMS_MAP.bot,vendor:"OpenAI"}}},{test:[/baiduspider/i],describe:function(){return{type:u.PLATFORMS_MAP.bot,vendor:"Baidu"}}},{test:[/bingbot/i],describe:function(){return{type:u.PLATFORMS_MAP.bot,vendor:"Bing"}}},{test:[/duckduckbot/i],describe:function(){return{type:u.PLATFORMS_MAP.bot,vendor:"DuckDuckGo"}}},{test:[/claudebot/i,/claude-web/i,/claude-user/i,/claude-searchbot/i],describe:function(){return{type:u.PLATFORMS_MAP.bot,vendor:"Anthropic"}}},{test:[/omgilibot/i,/webzio-extended/i],describe:function(){return{type:u.PLATFORMS_MAP.bot,vendor:"Webz.io"}}},{test:[/diffbot/i],describe:function(){return{type:u.PLATFORMS_MAP.bot,vendor:"Diffbot"}}},{test:[/perplexitybot/i],describe:function(){return{type:u.PLATFORMS_MAP.bot,vendor:"Perplexity AI"}}},{test:[/perplexity-user/i],describe:function(){return{type:u.PLATFORMS_MAP.bot,vendor:"Perplexity AI"}}},{test:[/youbot/i],describe:function(){return{type:u.PLATFORMS_MAP.bot,vendor:"You.com"}}},{test:[/ia_archiver/i],describe:function(){return{type:u.PLATFORMS_MAP.bot,vendor:"Internet Archive"}}},{test:[/meta-webindexer/i],describe:function(){return{type:u.PLATFORMS_MAP.bot,vendor:"Meta"}}},{test:[/meta-externalads/i],describe:function(){return{type:u.PLATFORMS_MAP.bot,vendor:"Meta"}}},{test:[/meta-externalagent/i],describe:function(){return{type:u.PLATFORMS_MAP.bot,vendor:"Meta"}}},{test:[/meta-externalfetcher/i],describe:function(){return{type:u.PLATFORMS_MAP.bot,vendor:"Meta"}}},{test:[/facebookexternalhit/i,/facebookcatalog/i],describe:function(){return{type:u.PLATFORMS_MAP.bot,vendor:"Meta"}}},{test:[/slackbot/i,/slack-imgProxy/i],describe:function(){return{type:u.PLATFORMS_MAP.bot,vendor:"Slack"}}},{test:[/yahoo/i],describe:function(){return{type:u.PLATFORMS_MAP.bot,vendor:"Yahoo"}}},{test:[/yandexbot/i,/yandexmobilebot/i],describe:function(){return{type:u.PLATFORMS_MAP.bot,vendor:"Yandex"}}},{test:[/pingdom/i],describe:function(){return{type:u.PLATFORMS_MAP.bot,vendor:"Pingdom"}}},{test:[/huawei/i],describe:function(d){var h=c.default.getFirstMatch(/(can-l01)/i,d)&&"Nova",f={type:u.PLATFORMS_MAP.mobile,vendor:"Huawei"};return h&&(f.model=h),f}},{test:[/nexus\s*(?:7|8|9|10).*/i],describe:function(){return{type:u.PLATFORMS_MAP.tablet,vendor:"Nexus"}}},{test:[/ipad/i],describe:function(){return{type:u.PLATFORMS_MAP.tablet,vendor:"Apple",model:"iPad"}}},{test:[/Macintosh(.*?) FxiOS(.*?)\//],describe:function(){return{type:u.PLATFORMS_MAP.tablet,vendor:"Apple",model:"iPad"}}},{test:[/kftt build/i],describe:function(){return{type:u.PLATFORMS_MAP.tablet,vendor:"Amazon",model:"Kindle Fire HD 7"}}},{test:[/silk/i],describe:function(){return{type:u.PLATFORMS_MAP.tablet,vendor:"Amazon"}}},{test:[/tablet(?! pc)/i],describe:function(){return{type:u.PLATFORMS_MAP.tablet}}},{test:function(d){var h=d.test(/ipod|iphone/i),f=d.test(/like (ipod|iphone)/i);return h&&!f},describe:function(d){var h=c.default.getFirstMatch(/(ipod|iphone)/i,d);return{type:u.PLATFORMS_MAP.mobile,vendor:"Apple",model:h}}},{test:[/nexus\s*[0-6].*/i,/galaxy nexus/i],describe:function(){return{type:u.PLATFORMS_MAP.mobile,vendor:"Nexus"}}},{test:[/Nokia/i],describe:function(d){var h=c.default.getFirstMatch(/Nokia\s+([0-9]+(\.[0-9]+)?)/i,d),f={type:u.PLATFORMS_MAP.mobile,vendor:"Nokia"};return h&&(f.model=h),f}},{test:[/[^-]mobi/i],describe:function(){return{type:u.PLATFORMS_MAP.mobile}}},{test:function(d){return d.getBrowserName(!0)==="blackberry"},describe:function(){return{type:u.PLATFORMS_MAP.mobile,vendor:"BlackBerry"}}},{test:function(d){return d.getBrowserName(!0)==="bada"},describe:function(){return{type:u.PLATFORMS_MAP.mobile}}},{test:function(d){return d.getBrowserName()==="windows phone"},describe:function(){return{type:u.PLATFORMS_MAP.mobile,vendor:"Microsoft"}}},{test:function(d){var h=Number(String(d.getOSVersion()).split(".")[0]);return d.getOSName(!0)==="android"&&h>=3},describe:function(){return{type:u.PLATFORMS_MAP.tablet}}},{test:function(d){return d.getOSName(!0)==="android"},describe:function(){return{type:u.PLATFORMS_MAP.mobile}}},{test:[/smart-?tv|smarttv/i],describe:function(){return{type:u.PLATFORMS_MAP.tv}}},{test:[/netcast/i],describe:function(){return{type:u.PLATFORMS_MAP.tv}}},{test:function(d){return d.getOSName(!0)==="macos"},describe:function(){return{type:u.PLATFORMS_MAP.desktop,vendor:"Apple"}}},{test:function(d){return d.getOSName(!0)==="windows"},describe:function(){return{type:u.PLATFORMS_MAP.desktop}}},{test:function(d){return d.getOSName(!0)==="linux"},describe:function(){return{type:u.PLATFORMS_MAP.desktop}}},{test:function(d){return d.getOSName(!0)==="playstation 4"},describe:function(){return{type:u.PLATFORMS_MAP.tv}}},{test:function(d){return d.getOSName(!0)==="roku"},describe:function(){return{type:u.PLATFORMS_MAP.tv}}}],r.exports=i.default},95:function(r,i,a){"use strict";i.__esModule=!0,i.default=void 0;var s,c=(s=a(17))&&s.__esModule?s:{default:s},u=a(18);i.default=[{test:function(d){return d.getBrowserName(!0)==="microsoft edge"},describe:function(d){if(/\sedg\//i.test(d))return{name:u.ENGINE_MAP.Blink};var h=c.default.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i,d);return{name:u.ENGINE_MAP.EdgeHTML,version:h}}},{test:[/trident/i],describe:function(d){var h={name:u.ENGINE_MAP.Trident},f=c.default.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i,d);return f&&(h.version=f),h}},{test:function(d){return d.test(/presto/i)},describe:function(d){var h={name:u.ENGINE_MAP.Presto},f=c.default.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i,d);return f&&(h.version=f),h}},{test:function(d){var h=d.test(/gecko/i),f=d.test(/like gecko/i);return h&&!f},describe:function(d){var h={name:u.ENGINE_MAP.Gecko},f=c.default.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i,d);return f&&(h.version=f),h}},{test:[/(apple)?webkit\/537\.36/i],describe:function(){return{name:u.ENGINE_MAP.Blink}}},{test:[/(apple)?webkit/i],describe:function(d){var h={name:u.ENGINE_MAP.WebKit},f=c.default.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i,d);return f&&(h.version=f),h}}],r.exports=i.default}})}))})),ad=Bi(ep(),1);function tp(e,t){typeof unsafeWindow<"u"&&(unsafeWindow[e]=t),typeof window<"u"&&(window[e]=t)}function ke(...e){return console.log("MangaOnlineViewer-adult-min: ",...e),e}function yn(...e){return["dev","development"].includes("adult-min")&&console.info("MangaOnlineViewer: ",...e),e}function sd(e){typeof GM_deleteValue<"u"?GM_deleteValue(e):yn("Fake Removing: ",e)}var Es=typeof GM_info<"u"?GM_info:{scriptHandler:"Console",script:{name:"Debug",version:"Testing"}};function np(e,t){return typeof GM_getValue<"u"?GM_getValue(e,t):(yn("Fake Getting: ",e," = ",t),t)}function ld(e,t){const r=np(e,t);if(typeof r=="string"&&r.trim()!=="")try{return JSON.parse(r)}catch(i){return ke("Failed to parse JSON from storage",e,i),t}return r}function rp(e){return ld("settings",e)}function op(e){return ld(window.location.hostname,e)}function cd(e,t){return typeof GM_setValue<"u"?(GM_setValue(e,t),ke("Setting: ",e," = ",t),t.toString()):(yn("Fake Setting: ",e," = ",t),String(t))}function ip(e){return cd("settings",e)}function dd(e){return cd(window.location.hostname,e)}function ap(){const e=ad.default.getParser(window.navigator.userAgent).getBrowser();return`${e.name} ${e.version}`}function sp(){return Es.scriptHandler??"Greasemonkey"}var Fo=()=>{const e=ad.default.getParser(window.navigator.userAgent).getPlatformType(!0);return e==="mobile"||window.matchMedia("screen and (max-width: 600px)").matches?"mobile":e==="tablet"||window.matchMedia("screen and (max-width: 992px)").matches?"tablet":"desktop"},lp=()=>Fo()==="mobile"||Fo()==="tablet",cp=()=>window.location.protocol==="file:"||window.location.pathname.endsWith("Manga_Local_Viewer.html"),ud=(e,t="settings")=>{if(typeof GM_addValueChangeListener<"u")try{return GM_addValueChangeListener(t,(r,i,a,s)=>{s&&e(a)})}catch(r){ke("Failed to add settings listener",r)}};async function Go(e,t,r,i){e!==void 0&&(ke(r),ke(i,await t(e)))}async function dp(e){await Go(e.waitAttr,t=>ed(t?.[0],t?.[1]),`Waiting for Attribute ${e.waitAttr?.[1]} of ${e.waitAttr?.[0]}`,`Found Attribute ${e.waitAttr?.[1]} of ${e.waitAttr?.[0]} =`),await Go(e.waitEle,c2,`Waiting for Element ${e.waitEle}`,"Found Element"),await Go(e.waitVar,td,`Waiting for Variable ${e.waitVar}`,"Found Variable"),await Go(e.waitFunc,ks,`Waiting to pass Function check ${e.waitFunc}`,"Found Function check"),await Go(e.waitTime,t=>new Promise(r=>setTimeout(r,t)),`Waiting for ${e.waitTime} milliseconds`,"Continuing after timer")}var up="@moaqzdev/toast",Wo={_dispatchToast(e,t){Object.assign(t,{type:e});const r=new CustomEvent(up,{detail:t});document.dispatchEvent(r)},success(e){this._dispatchToast("success",e)},error(e){this._dispatchToast("error",e)},warning(e){this._dispatchToast("warning",e)},info(e){this._dispatchToast("info",e)},confirm(e){this._dispatchToast("confirm",e)}},Ln=[],cr=0,Ni=4,Hi=0,hd=e=>{let t=[],r={get(){return r.lc||r.listen(()=>{})(),r.value},init:e,lc:0,listen(i){return r.lc=t.push(i),()=>{for(let s=cr+Ni;s<Ln.length;)Ln[s]===i?Ln.splice(s,Ni):s+=Ni;let a=t.indexOf(i);~a&&(t.splice(a,1),--r.lc||r.off())}},notify(i,a){Hi++;let s=!Ln.length;for(let c of t)Ln.push(c,r.value,i,a);if(s){for(cr=0;cr<Ln.length;cr+=Ni)Ln[cr](Ln[cr+1],Ln[cr+2],Ln[cr+3]);Ln.length=0}},off(){},set(i){let a=r.value;a!==i&&(r.value=i,r.notify(a))},subscribe(i){let a=r.listen(i);return i(r.value),a},value:e};return r},hp=5,Fi=6,Gi=10,fp=(e,t,r,i)=>(e.events=e.events||{},e.events[r+Gi]||(e.events[r+Gi]=i(a=>{e.events[r].reduceRight((s,c)=>(c(s),s),{shared:{},...a})})),e.events[r]=e.events[r]||[],e.events[r].push(t),()=>{let a=e.events[r],s=a.indexOf(t);a.splice(s,1),a.length||(delete e.events[r],e.events[r+Gi](),delete e.events[r+Gi])}),pp=1e3,gp=(e,t)=>fp(e,i=>{let a=t(i);a&&e.events[Fi].push(a)},hp,i=>{let a=e.listen;e.listen=(...c)=>(!e.lc&&!e.active&&(e.active=!0,i()),a(...c));let s=e.off;return e.events[Fi]=[],e.off=()=>{s(),setTimeout(()=>{if(e.active&&!e.lc){e.active=!1;for(let c of e.events[Fi])c();e.events[Fi]=[]}},pp)},()=>{e.listen=a,e.off=s}}),mp=(e,t,r)=>{Array.isArray(e)||(e=[e]);let i,a,s=()=>{if(a===Hi)return;a=Hi;let f=e.map(b=>b.get());if(!i||f.some((b,v)=>b!==i[v])){i=f;let b=t(...f);b&&b.then&&b.t?b.then(v=>{i===f&&c.set(v)}):(c.set(b),a=Hi)}},c=hd(void 0),u=c.get;c.get=()=>(s(),u());let d,h=r?()=>{clearTimeout(d),d=setTimeout(s)}:s;return gp(c,()=>{let f=e.map(b=>b.listen(h));return s(),()=>{for(let b of f)b()}}),c},vp=(e,t)=>mp(e,t),fd=(e={})=>{let t=hd(e);return t.setKey=function(r,i){let a=t.value;typeof i>"u"&&r in t.value?(t.value={...t.value},delete t.value[r],t.notify(a,r)):t.value[r]!==i&&(t.value={...t.value,[r]:i},t.notify(a,r))},t},As=globalThis,pd=e=>e,Wi=As.trustedTypes,gd=Wi?Wi.createPolicy("lit-html",{createHTML:e=>e}):void 0,Ss="$lit$",Kn=`lit$${Math.random().toFixed(9).slice(2)}$`,Ms="?"+Kn,bp=`<${Ms}>`,Pr=document,Uo=()=>Pr.createComment(""),Vo=e=>e===null||typeof e!="object"&&typeof e!="function",xs=Array.isArray,md=e=>xs(e)||typeof e?.[Symbol.iterator]=="function",Is=`[ 	
\f\r]`,Zo=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,vd=/-->/g,bd=/>/g,$r=RegExp(`>|${Is}(?:([^\\s"'>=/]+)(${Is}*=${Is}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),wd=/'/g,_d=/"/g,yd=/^(?:script|style|textarea|title)$/i,Cs=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),ce=Cs(1),wA=Cs(2),_A=Cs(3),Yn=Symbol.for("lit-noChange"),De=Symbol.for("lit-nothing"),kd=new WeakMap,Dr=Pr.createTreeWalker(Pr,129);function Ed(e,t){if(!xs(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return gd!==void 0?gd.createHTML(t):t}var Ad=(e,t)=>{const r=e.length-1,i=[];let a,s=t===2?"<svg>":t===3?"<math>":"",c=Zo;for(let u=0;u<r;u++){const d=e[u];let h,f,b=-1,v=0;for(;v<d.length&&(c.lastIndex=v,f=c.exec(d),f!==null);)v=c.lastIndex,c===Zo?f[1]==="!--"?c=vd:f[1]!==void 0?c=bd:f[2]!==void 0?(yd.test(f[2])&&(a=RegExp("</"+f[2],"g")),c=$r):f[3]!==void 0&&(c=$r):c===$r?f[0]===">"?(c=a??Zo,b=-1):f[1]===void 0?b=-2:(b=c.lastIndex-f[2].length,h=f[1],c=f[3]===void 0?$r:f[3]==='"'?_d:wd):c===_d||c===wd?c=$r:c===vd||c===bd?c=Zo:(c=$r,a=void 0);const m=c===$r&&e[u+1].startsWith("/>")?" ":"";s+=c===Zo?d+bp:b>=0?(i.push(h),d.slice(0,b)+Ss+d.slice(b)+Kn+m):d+Kn+(b===-2?u:m)}return[Ed(e,s+(e[r]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]},Os=class Kf{constructor({strings:t,_$litType$:r},i){let a;this.parts=[];let s=0,c=0;const u=t.length-1,d=this.parts,[h,f]=Ad(t,r);if(this.el=Kf.createElement(h,i),Dr.currentNode=this.el.content,r===2||r===3){const b=this.el.content.firstChild;b.replaceWith(...b.childNodes)}for(;(a=Dr.nextNode())!==null&&d.length<u;){if(a.nodeType===1){if(a.hasAttributes())for(const b of a.getAttributeNames())if(b.endsWith(Ss)){const v=f[c++],m=a.getAttribute(b).split(Kn),g=/([.?@])?(.*)/.exec(v);d.push({type:1,index:s,name:g[2],strings:m,ctor:g[1]==="."?Md:g[1]==="?"?xd:g[1]==="@"?Id:jo}),a.removeAttribute(b)}else b.startsWith(Kn)&&(d.push({type:6,index:s}),a.removeAttribute(b));if(yd.test(a.tagName)){const b=a.textContent.split(Kn),v=b.length-1;if(v>0){a.textContent=Wi?Wi.emptyScript:"";for(let m=0;m<v;m++)a.append(b[m],Uo()),Dr.nextNode(),d.push({type:2,index:++s});a.append(b[v],Uo())}}}else if(a.nodeType===8)if(a.data===Ms)d.push({type:2,index:s});else{let b=-1;for(;(b=a.data.indexOf(Kn,b+1))!==-1;)d.push({type:7,index:s}),b+=Kn.length-1}s++}}static createElement(t,r){const i=Pr.createElement("template");return i.innerHTML=t,i}};function zr(e,t,r=e,i){if(t===Yn)return t;let a=i!==void 0?r._$Co?.[i]:r._$Cl;const s=Vo(t)?void 0:t._$litDirective$;return a?.constructor!==s&&(a?._$AO?.(!1),s===void 0?a=void 0:(a=new s(e),a._$AT(e,r,i)),i!==void 0?(r._$Co??=[])[i]=a:r._$Cl=a),a!==void 0&&(t=zr(e,a._$AS(e,t.values),a,i)),t}var Sd=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:r}=this._$AD,i=(e?.creationScope??Pr).importNode(t,!0);Dr.currentNode=i;let a=Dr.nextNode(),s=0,c=0,u=r[0];for(;u!==void 0;){if(s===u.index){let d;u.type===2?d=new Ui(a,a.nextSibling,this,e):u.type===1?d=new u.ctor(a,u.name,u.strings,this,e):u.type===6&&(d=new Cd(a,this,e)),this._$AV.push(d),u=r[++c]}s!==u?.index&&(a=Dr.nextNode(),s++)}return Dr.currentNode=Pr,i}p(e){let t=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}},Ui=class Yf{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,r,i,a){this.type=2,this._$AH=De,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=i,this.options=a,this._$Cv=a?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&t?.nodeType===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=zr(this,t,r),Vo(t)?t===De||t==null||t===""?(this._$AH!==De&&this._$AR(),this._$AH=De):t!==this._$AH&&t!==Yn&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):md(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==De&&Vo(this._$AH)?this._$AA.nextSibling.data=t:this.T(Pr.createTextNode(t)),this._$AH=t}$(t){const{values:r,_$litType$:i}=t,a=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=Os.createElement(Ed(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===a)this._$AH.p(r);else{const s=new Sd(a,this),c=s.u(this.options);s.p(r),this.T(c),this._$AH=s}}_$AC(t){let r=kd.get(t.strings);return r===void 0&&kd.set(t.strings,r=new Os(t)),r}k(t){xs(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let i,a=0;for(const s of t)a===r.length?r.push(i=new Yf(this.O(Uo()),this.O(Uo()),this,this.options)):i=r[a],i._$AI(s),a++;a<r.length&&(this._$AR(i&&i._$AB.nextSibling,a),r.length=a)}_$AR(t=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);t!==this._$AB;){const i=pd(t).nextSibling;pd(t).remove(),t=i}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},jo=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,i,a){this.type=1,this._$AH=De,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=a,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=De}_$AI(e,t=this,r,i){const a=this.strings;let s=!1;if(a===void 0)e=zr(this,e,t,0),s=!Vo(e)||e!==this._$AH&&e!==Yn,s&&(this._$AH=e);else{const c=e;let u,d;for(e=a[0],u=0;u<a.length-1;u++)d=zr(this,c[r+u],t,u),d===Yn&&(d=this._$AH[u]),s||=!Vo(d)||d!==this._$AH[u],d===De?e=De:e!==De&&(e+=(d??"")+a[u+1]),this._$AH[u]=d}s&&!i&&this.j(e)}j(e){e===De?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Md=class extends jo{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===De?void 0:e}},xd=class extends jo{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==De)}},Id=class extends jo{constructor(e,t,r,i,a){super(e,t,r,i,a),this.type=5}_$AI(e,t=this){if((e=zr(this,e,t,0)??De)===Yn)return;const r=this._$AH,i=e===De&&r!==De||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,a=e!==De&&(r===De||i);i&&this.element.removeEventListener(this.name,this,r),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Cd=class{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){zr(this,e)}},wp={M:Ss,P:Kn,A:Ms,C:1,L:Ad,R:Sd,D:md,V:zr,I:Ui,H:jo,N:xd,U:Id,B:Md,F:Cd},_p=As.litHtmlPolyfillSupport;_p?.(Os,Ui),(As.litHtmlVersions??=[]).push("3.3.2");var yp=(e,t,r)=>{const i=r?.renderBefore??t;let a=i._$litPart$;if(a===void 0){const s=r?.renderBefore??null;i._$litPart$=a=new Ui(t.insertBefore(Uo(),s),s,void 0,r??{})}return a._$AI(e),a},{I:kp}=wp,Od=e=>e,yA=e=>e===null||typeof e!="object"&&typeof e!="function",kA={HTML:1,SVG:2,MATHML:3},EA=(e,t)=>t===void 0?e?._$litType$!==void 0:e?._$litType$===t,AA=e=>e?._$litType$?.h!=null,SA=e=>e?._$litDirective$!==void 0,MA=e=>e?._$litDirective$,Ep=e=>e.strings===void 0,Td=()=>document.createComment(""),xA=(e,t,r)=>{const i=e._$AA.parentNode,a=t===void 0?e._$AB:t._$AA;if(r===void 0)r=new kp(i.insertBefore(Td(),a),i.insertBefore(Td(),a),e,e.options);else{const s=r._$AB.nextSibling,c=r._$AM,u=c!==e;if(u){let d;r._$AQ?.(e),r._$AM=e,r._$AP!==void 0&&(d=e._$AU)!==c._$AU&&r._$AP(d)}if(s!==a||u){let d=r._$AA;for(;d!==s;){const h=Od(d).nextSibling;Od(i).insertBefore(d,a),d=h}}}return r},IA=(e,t,r=e)=>(e._$AI(t,r),e),Ap={},CA=(e,t=Ap)=>e._$AH=t,OA=e=>e._$AH,TA=e=>{e._$AR(),e._$AA.remove()},LA=e=>{e._$AR()},Vi={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},qo=e=>(...t)=>({_$litDirective$:e,values:t}),Zi=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}},Ko=(e,t)=>{const r=e._$AN;if(r===void 0)return!1;for(const i of r)i._$AO?.(t,!1),Ko(i,t);return!0},ji=e=>{let t,r;do{if((t=e._$AM)===void 0)break;r=t._$AN,r.delete(e),e=t}while(r?.size===0)},Ld=e=>{for(let t;t=e._$AM;e=t){let r=t._$AN;if(r===void 0)t._$AN=r=new Set;else if(r.has(e))break;r.add(e),xp(t)}};function Sp(e){this._$AN!==void 0?(ji(this),this._$AM=e,Ld(this)):this._$AM=e}function Mp(e,t=!1,r=0){const i=this._$AH,a=this._$AN;if(a!==void 0&&a.size!==0)if(t)if(Array.isArray(i))for(let s=r;s<i.length;s++)Ko(i[s],!1),ji(i[s]);else i!=null&&(Ko(i,!1),ji(i));else Ko(this,e)}var xp=e=>{e.type==Vi.CHILD&&(e._$AP??=Mp,e._$AQ??=Sp)},Ip=class extends Zi{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,r){super._$AT(e,t,r),Ld(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(Ko(this,e),ji(this))}setValue(e){if(Ep(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}},Ts=()=>new Cp,Cp=class{},Ls=new WeakMap,Rs=qo(class extends Ip{render(e){return De}update(e,[t]){const r=t!==this.G;return r&&this.G!==void 0&&this.rt(void 0),(r||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),De}rt(e){if(this.isConnected||(e=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let r=Ls.get(t);r===void 0&&(r=new WeakMap,Ls.set(t,r)),r.get(this.G)!==void 0&&this.G.call(this.ht,void 0),r.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G=="function"?Ls.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),Op={ID:"de_DE",NAME:"Deutsch",STARTING:"Starte Manga OnlineViewer",RESUME:"Fortsetzen ab Seite ",WAITING:"Bitte warten, 3 Sekunden...",CHOOSE_BEGINNING:"Wähle die Startseite:",BUTTON_START:"Manga OnlineViewer starten",SETTINGS:"Einstellungen",LANGUAGE:"Sprache",COLOR_SCHEME:"Farbschema",THEME:"Design",THEME_COLOR:"Farbe",THEME_HUE:"Farbton",THEME_SHADE:"Schattierung",DEFAULT_LOAD_MODE:"Standard-Lademodus",LOAD_MODE_NORMAL:"Normal (3 Sek. warten)",LOAD_MODE_ALWAYS:"Immer (sofort)",LOAD_MODE_NEVER:"Nie (manuell)",LOAD_SPEED:"Ladegeschwindigkeit",DEFAULT_ZOOM:"Standard-Zoom (zwischen 5 und 200)",DEFAULT_ZOOM_MODE:"Standard-Zoommodus",MINIMUM_ZOOM:"Minimaler Zoom relativ zur Bildschirmbreite (zwischen 30 und 100)",ZOOM_STEP:"Zoom-Schrittgröße (zwischen 5 und 50)",DEFAULT_VIEW_MODE:"Standard-Ansichtsmodus",VIEW_MODE_VERTICAL:"Vertikal",VIEW_MODE_LEFT:"Horizontal - Links nach Rechts",VIEW_MODE_RIGHT:"Horizontal - Rechts nach Links",VIEW_MODE_WEBCOMIC:"WebComic",VIEW_MODE_BOOK:"Buch - Links nach Rechts",VIEW_MODE_MANGA:"Manga - Rechts nach Links",VIEW_MODE_GALLERY:"Galerie",FIT_WIDTH_OVERSIZED:"Breite anpassen bei Übergröße",SHOW_THUMBNAILS:"Miniaturansichten anzeigen",HIDE_CONTROLS:"Seitensteuerung immer ausblenden",HEADER_TYPE:"Kopfbereichstyp ändern",HEADER_HOVER:"Hover",HEADER_SCROLL:"Scrollen",HEADER_CLICK:"Klicken",HEADER_FIXED:"Fixiert",HEADER_SIMPLE:"Einfach",BUTTON_DOWNLOAD:"Herunterladen",DOWNLOAD_ZIP:"Zip-Datei herunterladen",DOWNLOAD_IMAGES:"Bilder automatisch als Zip herunterladen",DOWNLOAD_PROGRESS:"Herunterladen: ##num## von ##total##",GENERATING_ZIP:"Zip-Datei wird erstellt...",DOWNLOAD_INCOMPLETE:"Download unvollständig",DOWNLOAD_INCOMPLETE_MESSAGE:"Einige Seiten konnten nicht heruntergeladen werden und wurden übersprungen. Eine Liste der fehlgeschlagenen Seiten wurde der ZIP-Datei hinzugefügt.",BUTTON_NEXT:"Weiter",NEXT_CHAPTER:"Nächstes Kapitel",BUTTON_PREVIOUS:"Zurück",PREVIOUS_CHAPTER:"Vorheriges Kapitel",BOOKMARKS:"Lesezeichen",BOOKMARK:"Lesezeichen",BOOKMARK_REMOVED:"Lesezeichen entfernt",BOOKMARK_SAVED:"Lesezeichen gespeichert",BOOKMARK_MESSAGE:"Beim nächsten Öffnen dieses Kapitels wird ab fortgesetzt: Seite ##num## (Nur EINMAL pro Lesezeichen)",KEYBINDINGS:"Tastenkürzel",EDIT_KEYBINDS:"Tastenkürzel bearbeiten",SAVE_KEYBINDS:"Tastenkürzel speichern",BUTTON_EDIT:"Bearbeiten",BUTTON_SAVE:"Speichern",KEYBIND_RULES:`
    <h3>Unterstützte Tasten</h3>
    Erlaubte Modifikatoren: shift, option, alt, ctrl, control, command. <br/>
    Spezielle Tasten: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide. <br/>
    Beispiele: <kbd>a</kbd>, <kbd>ctrl+a</kbd>, <kbd>shift+a</kbd>, <kbd>num_2</kbd>, <kbd>2</kbd>
  `,ATTENTION:"Achtung",WARNING:"Warnung",BUTTON_RESET_SETTINGS:"Einstellungen zurücksetzen(Reset Settings)",SETTINGS_RESET:"Die Einstellungen wurden zurückgesetzt, bitte Seite neu laden",LANGUAGE_CHANGED:"Die Sprache wurde geändert, bitte Seite neu laden",AUTO_DOWNLOAD:"Beim nächsten Laden eines Kapitels wirst du automatisch gefragt, ob du speichern möchtest",LAZY_LOAD:"Lazy Load ist mit Zip-Download nicht kompatibel, mit dieser Einstellung kannst du nicht herunterladen.<br/> Empfehlung: <span style='color:red;font-weight:bold'>Miniaturansichten deaktivieren</span> um Bandbreite/Speicher zu sparen.",LAZY_LOAD_IMAGES_ENABLE:"Lazy Load Bilder aktivieren",LAZY_LOAD_IMAGES:"Lazy Start ab Seite (zwischen 5 und 100)",RETURN_CHAPTER_LIST:"Zur Kapitelübersicht zurückkehren",PAGES_LOADED:"Seiten geladen",GO_TO_PAGE:"Gehe zu Seite",ENLARGE:"Vergrößern",RESTORE:"Wiederherstellen",REDUCE:"Wiederherstellen",FIT_WIDTH:"Breite anpassen",FIT_HEIGHT:"Höhe anpassen",PERCENT:"Prozent",TOGGLE_CONTROLS:"Seitensteuerung umschalten",ZOOM_IN:"Hineinzoomen",ZOOM_OUT:"Herauszoomen",ZOOM_RESET:"Zoom zurücksetzen",ZOOM_WIDTH:"Auf Breite zoomen",ZOOM_HEIGHT:"Auf Höhe zoomen",HIDE:"Ausblenden",RELOAD:"Neu laden",SLOWLY:"Langsam",NORMAL:"Normal",FAST:"Schnell",EXTREME:"Extrem",ALL_PAGES:"Alle Seiten",SPEED_WARNING:"Ladegeschwindigkeit zu hoch",SPEED_WARNING_MESSAGE:"Diese Geschwindigkeit wird nicht empfohlen.<br/> Sie kann einige Server überlasten oder deine IP als DDoS-Angreifer markieren.<br/> Bitte mit Vorsicht verwenden!",SCROLL_UP:"Nach oben scrollen",SCROLL_DOWN:"Nach unten scrollen",CLOSE:"Schließen",CANCEL:"Abbrechen",LIST_EMPTY:"Liste leer",SCROLL_START:"Auto-Scroll umschalten",INCREASE_SPEED:"Scrollgeschwindigkeit erhöhen",DECREASE_SPEED:"Scrollgeschwindigkeit verringern",AUTO_SCROLL_HEIGHT:"Auto-Scroll-Geschwindigkeit in Pixel",VERTICAL_SEPARATOR:"Vertikale Trenner anzeigen",END:"Ende",SCOPE:"Bereich",GLOBAL:"Global",GENERAL:"Allgemein",LOADING:"Lädt",ZOOM:"Zoom",OTHERS:"Sonstiges",NAVBAR_TYPE:"Navigationsleistentyp ändern",NAVBAR_BOTTOM:"Unten",NAVBAR_LEFT:"Links",NAVBAR_RIGHT:"Rechts",NAVBAR_DISABLED:"Deaktiviert",PAGINATION_TYPE:"Paginierungstyp",PAGINATION_DISABLED:"Deaktiviert",PAGINATION_SLIDER:"Schieberegler",PAGINATION_ARROWS:"Seitenpfeile",PAGINATION_BOTH:"Beides",FILE_MENU:"Hauptmenü",VIEW_MENU:"Menü „Ansicht“",ZOOM_MENU:"Zoom-Menü",DOUBLE_PAGE:"Doppelseite umschalten"},Tp={ID:"en_US",NAME:"English (US)",STARTING:"Starting Manga OnlineViewer",RESUME:"Resuming reading from Page ",WAITING:"Please wait, 3 seconds...",CHOOSE_BEGINNING:"Choose the Page to start from:",BUTTON_START:"Start Manga OnlineViewer",SETTINGS:"Settings",LANGUAGE:"Language",COLOR_SCHEME:"Color Scheme",THEME:"Theme",THEME_COLOR:"Color",THEME_HUE:"Color Hue",THEME_SHADE:"Color Shade",DEFAULT_LOAD_MODE:"Default Load Mode",LOAD_MODE_NORMAL:"Normal(Wait 3 sec)",LOAD_MODE_ALWAYS:"Always(Immediately)",LOAD_MODE_NEVER:"Never(Manually)",LOAD_SPEED:"Load Speed",DEFAULT_ZOOM:"Default Zoom (between 5 and 200)",DEFAULT_ZOOM_MODE:"Default Zoom Mode",MINIMUM_ZOOM:"Minimum Zoom relative to the width of screen (between 30 and 100)",ZOOM_STEP:"Zoom Change Step (between 5 and 50)",DEFAULT_VIEW_MODE:"Default View Mode",VIEW_MODE_VERTICAL:"Vertical",VIEW_MODE_LEFT:"Horizontal - Left to Right",VIEW_MODE_RIGHT:"Horizontal - Right to Left",VIEW_MODE_WEBCOMIC:"WebComic",VIEW_MODE_BOOK:"Book - Left to Right",VIEW_MODE_MANGA:"Manga - Right to Left",VIEW_MODE_GALLERY:"Gallery",FIT_WIDTH_OVERSIZED:"Fit Width if Oversized",SHOW_THUMBNAILS:"Show Thumbnails",HIDE_CONTROLS:"Always Hide Page Controls",HEADER_TYPE:"Change Header Type",HEADER_HOVER:"Hover",HEADER_SCROLL:"Scroll",HEADER_CLICK:"Click",HEADER_FIXED:"Fixed",HEADER_SIMPLE:"Simple",BUTTON_DOWNLOAD:"Download",DOWNLOAD_ZIP:"Download Zip file",DOWNLOAD_IMAGES:"Download Images as Zip Automatically",DOWNLOAD_PROGRESS:"Downloading: ##num## of ##total##",GENERATING_ZIP:"Generating Zip file...",DOWNLOAD_INCOMPLETE:"Download Incomplete",DOWNLOAD_INCOMPLETE_MESSAGE:"Some pages failed to download and were skipped. A list of failed pages has been added to the ZIP file.",BUTTON_NEXT:"Next",NEXT_CHAPTER:"Next Chapter",BUTTON_PREVIOUS:"Previous",PREVIOUS_CHAPTER:"Previous Chapter",BOOKMARKS:"Bookmarks",BOOKMARK:"Bookmark",BOOKMARK_REMOVED:"Bookmark Removed",BOOKMARK_SAVED:"Bookmark Saved",BOOKMARK_MESSAGE:"Next time you open this chapter it will resume from: Page ##num## (Only ONCE per Bookmark)",KEYBINDINGS:"Keybindings",EDIT_KEYBINDS:"Edit KeyBindings",SAVE_KEYBINDS:"Save KeyBindings",BUTTON_EDIT:"Edit",BUTTON_SAVE:"Save",KEYBIND_RULES:`
    <h3>Supported Keys</h3>
    Allowed modifiers: shift, option, alt, ctrl, control, command. <br/>
    Special keys: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide. <br/>
    Examples: <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd>
  `,ATTENTION:"Attention",WARNING:"Warning",BUTTON_RESET_SETTINGS:"Reset Settings",SETTINGS_RESET:"Settings have been reset, reload the page to take effect",LANGUAGE_CHANGED:"Language has been changed, reload the page to take effect",AUTO_DOWNLOAD:"Next time a chapter finish loading you will be prompted to save automatically",LAZY_LOAD:"Lazy load is incompatible with zip download, you will not be able to download with this setting ON.<br/> Suggestion: <span style='color:red;font-weight:bold'>Disable Thumbnails</span> to save Bandwidth/Memory.",LAZY_LOAD_IMAGES_ENABLE:"Enable Lazy Load Images",LAZY_LOAD_IMAGES:"Lazy Start From Page (between 5 and 100)",RETURN_CHAPTER_LIST:"Return to Chapter List",PAGES_LOADED:"Pages Loaded",GO_TO_PAGE:"Go to Page",ENLARGE:"Enlarge",RESTORE:"Restore",REDUCE:"Reduce",FIT_WIDTH:"Fit Width",FIT_HEIGHT:"Fit Height",PERCENT:"Percent",TOGGLE_CONTROLS:"Toggle page controls",ZOOM_IN:"Zoom In",ZOOM_OUT:"Zoom Out",ZOOM_RESET:"Zoom Reset",ZOOM_WIDTH:"Zoom to Width",ZOOM_HEIGHT:"Zoom to Height",HIDE:"Hide",RELOAD:"Reload",SLOWLY:"Slowly",NORMAL:"Normal",FAST:"Fast",EXTREME:"Extreme",ALL_PAGES:"All Pages",SPEED_WARNING:"Loading Speed too High",SPEED_WARNING_MESSAGE:"This speed is not recommended.<br/> It may hurt some servers or get your IP marked as DDoS attacker.<br/> Please use with caution!",SCROLL_UP:"Scroll Up",SCROLL_DOWN:"Scroll Down",CLOSE:"Close",CANCEL:"Cancel",LIST_EMPTY:"List Empty",SCROLL_START:"Toggle Auto Scroll",INCREASE_SPEED:"Increase Scroll Speed",DECREASE_SPEED:"Decrease Scroll Speed",AUTO_SCROLL_HEIGHT:"Auto Scroll Speed in Pixels",VERTICAL_SEPARATOR:"Show Vertical Separators",END:"End",SCOPE:"Scope",GLOBAL:"Global",GENERAL:"General",LOADING:"Loading",ZOOM:"Zoom",OTHERS:"Others",NAVBAR_TYPE:"Change Navbar Type",NAVBAR_BOTTOM:"Bottom",NAVBAR_LEFT:"Left",NAVBAR_RIGHT:"Right",NAVBAR_DISABLED:"Disabled",PAGINATION_TYPE:"Pagination Type",PAGINATION_DISABLED:"Disabled",PAGINATION_SLIDER:"Slider",PAGINATION_ARROWS:"Side Arrows",PAGINATION_BOTH:"Both",FILE_MENU:"Main Menu",VIEW_MENU:"View Menu",ZOOM_MENU:"Zoom Menu",DOUBLE_PAGE:"Toggle Double Page"},Lp={ID:"es_ES",NAME:"Español (ES)",STARTING:"Iniciando Manga OnlineViewer",RESUME:"Continuando lectura desde la Página ",WAITING:"Por favor espere, 3 segundos...",CHOOSE_BEGINNING:"Elija la página en la que comenzar:",BUTTON_START:"Iniciar Manga OnlineViewer",SETTINGS:"Ajustes",LANGUAGE:"Idioma",COLOR_SCHEME:"Esquema de color",THEME:"Tema",THEME_COLOR:"Color",THEME_HUE:"Matiz del color",THEME_SHADE:"Saturación del color",DEFAULT_LOAD_MODE:"Modo de carga por defecto",LOAD_MODE_NORMAL:"Normal (Espera 3s)",LOAD_MODE_ALWAYS:"Siempre (Inmediatamente)",LOAD_MODE_NEVER:"Nunca (Manualmente)",LOAD_SPEED:"Velocidad carga",DEFAULT_ZOOM:"Zoom por defecto (entre 5 y 200)",DEFAULT_ZOOM_MODE:"Modo de zoom por defecto",MINIMUM_ZOOM:"Zoom mínimo relativo al ancho de la pantalla",ZOOM_STEP:"Paso entre cambios de zoom (entre 5 y 50)",DEFAULT_VIEW_MODE:"Modo de visualización por defecto",VIEW_MODE_VERTICAL:"Vertical",VIEW_MODE_LEFT:"Horizontal - Izquierda a derecha",VIEW_MODE_RIGHT:"Horizontal - Derecha a izquierda",VIEW_MODE_WEBCOMIC:"WebComic",VIEW_MODE_BOOK:"Libro - Izquierda a derecha",VIEW_MODE_MANGA:"Manga - Derecha a izquierda",VIEW_MODE_GALLERY:"Galería",FIT_WIDTH_OVERSIZED:"Ajustar ancho si es demasiado grande",SHOW_THUMBNAILS:"Mostrar miniaturas",HIDE_CONTROLS:"Ocultar siempre la barra de controles",HEADER_TYPE:"Cambiar tipo de cabecera",HEADER_HOVER:"Pasar por encima",HEADER_SCROLL:"Desplazamiento",HEADER_CLICK:"Hacer click",HEADER_FIXED:"Fijo",HEADER_SIMPLE:"Sencillo",BUTTON_DOWNLOAD:"Descargar",DOWNLOAD_ZIP:"Descargar fichero Zip",DOWNLOAD_IMAGES:"Autodescargar imágenes como Zip",DOWNLOAD_PROGRESS:"Descargando: ##num## de ##total##",GENERATING_ZIP:"Generando archivo Zip...",DOWNLOAD_INCOMPLETE:"Descarga Incompleta",DOWNLOAD_INCOMPLETE_MESSAGE:"Algunas páginas no se pudieron descargar y se saltaron. Se ha añadido una lista de páginas fallidas al archivo ZIP.",BUTTON_NEXT:"Siguiente",NEXT_CHAPTER:"Siguiente capítulo",BUTTON_PREVIOUS:"Anterior",PREVIOUS_CHAPTER:"Capítulo anterior",BOOKMARKS:"Marcadores",BOOKMARK:"Marcador",BOOKMARK_REMOVED:"Marcador eliminado",BOOKMARK_SAVED:"Marcador guardado",BOOKMARK_MESSAGE:"La próxima vez que abra este capítulo, continuará desde la página ##num## (Sólo UNA VEZ por Marcador)",KEYBINDINGS:"Atajos de teclado",EDIT_KEYBINDS:"Editar atajos",SAVE_KEYBINDS:"Guardar atajos",BUTTON_EDIT:"Editar",BUTTON_SAVE:"Guardar",KEYBIND_RULES:`
    <h3>Teclas soportadas</h3>
    Modificadores permitidos: shift, option, alt, ctrl, control, command. <br/>
    Teclas especiales: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide. <br/>
    Ejemplos: <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd>
  `,ATTENTION:"Atención",WARNING:"Alerta",BUTTON_RESET_SETTINGS:"Reiniciar ajustes(Reset Settings)",SETTINGS_RESET:"Se han restablecido los ajustes, vuelve a cargar la página para que surta efecto",LANGUAGE_CHANGED:"Se ha cambiado el idioma, vuelve a cargar la página para que surta efecto",AUTO_DOWNLOAD:"La próxima vez que termine de cargarse un capítulo, se le pedirá que guarde automáticamente",LAZY_LOAD:"La carga diferida es incompatible con la descarga zip, no podrá descargar con este ajuste activado.<br/> Sugerencia: <span style='color:red;font-weight:bold'>Desactivar miniaturas</span> para ahorrar Ancho de banda/Memoria.",LAZY_LOAD_IMAGES_ENABLE:"Habilitar carga de imágenes diferida",LAZY_LOAD_IMAGES:"Empezar carga diferida a partir de la página (entre 5 y 100)",RETURN_CHAPTER_LIST:"Regresar a la lista de capítulos",PAGES_LOADED:"Páginas cargadas",GO_TO_PAGE:"Ir a página",ENLARGE:"Agrandar",RESTORE:"Restaurar",REDUCE:"Reducir",FIT_WIDTH:"Ajustar al ancho",FIT_HEIGHT:"Ajustar al alto",PERCENT:"Porcentual",TOGGLE_CONTROLS:"Alternar controles de página",ZOOM_IN:"Acercar",ZOOM_OUT:"Alejar",ZOOM_RESET:"Restablecer zoom",ZOOM_WIDTH:"Zoom al ancho",ZOOM_HEIGHT:"Zoom al alto",HIDE:"Ocultar",RELOAD:"Recargar",SLOWLY:"Lento",NORMAL:"Normal",FAST:"Rápido",EXTREME:"Extremo",ALL_PAGES:"Todas las páginas",SPEED_WARNING:"Velocidad de carga muy alta",SPEED_WARNING_MESSAGE:"No se recomienda esta velocidad.<br/> Puede dañar algunos servidores o marcar su IP como atacante DDoS.<br/> ¡Utilícelo con precaución!",SCROLL_UP:"Desplazar arriba",SCROLL_DOWN:"Desplazarse hacia abajo",CLOSE:"Cerrar",CANCEL:"Cancelar",LIST_EMPTY:"Lista vacía",SCROLL_START:"Alternar desplazamiento automático",INCREASE_SPEED:"Aumentar la velocidad de desplazamiento",DECREASE_SPEED:"Disminuir la velocidad de desplazamiento",AUTO_SCROLL_HEIGHT:"Velocidad de desplazamiento automático en píxeles",VERTICAL_SEPARATOR:"Mostrar separadores verticales",END:"Fin",SCOPE:"Alcance",GLOBAL:"Global",GENERAL:"General",LOADING:"Carga",ZOOM:"Zoom",OTHERS:"Otros",NAVBAR_TYPE:"Cambiar el tipo de barra de navegación",NAVBAR_BOTTOM:"Abajo",NAVBAR_LEFT:"Izquierda",NAVBAR_RIGHT:"Derecha",NAVBAR_DISABLED:"Desactivado",PAGINATION_TYPE:"Tipo de paginación",PAGINATION_DISABLED:"Desactivado",PAGINATION_SLIDER:"Control deslizante",PAGINATION_ARROWS:"Flechas laterales",PAGINATION_BOTH:"Ambos",FILE_MENU:"Menú principal",VIEW_MENU:"Ver menú",ZOOM_MENU:"Menú Zoom",DOUBLE_PAGE:"Alternar Página Doble"},Rp={ID:"fr_FR",NAME:"Français (FR)",STARTING:"Démarrage Manga OnlineViewer",RESUME:"Reprise de la lecture à partir de la Page ",WAITING:"Veuillez patienter, 3 secondes...",CHOOSE_BEGINNING:"Choisissez la page par laquelle commencer :",BUTTON_START:"Démarrer Manga OnlineViewer",SETTINGS:"Paramètres",LANGUAGE:"Langue",COLOR_SCHEME:"Palette de couleurs",THEME:"Thème",THEME_COLOR:"Couleur",THEME_HUE:"Teinte de couleur",THEME_SHADE:"Nuance de couleur",DEFAULT_LOAD_MODE:"Mode de chargement par défaut",LOAD_MODE_NORMAL:"Normal (attendre 3 s)",LOAD_MODE_ALWAYS:"Toujours (immédiatement)",LOAD_MODE_NEVER:"Jamais (manuellement)",LOAD_SPEED:"Vitesse de chargement",DEFAULT_ZOOM:"Zoom par défaut (entre 5 et 200)",DEFAULT_ZOOM_MODE:"Mode de zoom par défaut",MINIMUM_ZOOM:"Zoom minimum par rapport à la largeur de l'écran (entre 30 et 100)",ZOOM_STEP:"Pas de changement de zoom (entre 5 et 50)",DEFAULT_VIEW_MODE:"Mode d'affichage par défaut",VIEW_MODE_VERTICAL:"Vertical",VIEW_MODE_LEFT:"Horizontal - De gauche à droite",VIEW_MODE_RIGHT:"Horizontal - De droite à gauche",VIEW_MODE_WEBCOMIC:"WebComic",VIEW_MODE_BOOK:"Livre - De gauche à droite",VIEW_MODE_MANGA:"Manga - De droite à gauche",VIEW_MODE_GALLERY:"Galerie",FIT_WIDTH_OVERSIZED:"Ajuster à la largeur si surdimensionné",SHOW_THUMBNAILS:"Afficher les vignettes",HIDE_CONTROLS:"Toujours masquer les contrôles de page",HEADER_TYPE:"Changer le type d'en-tête",HEADER_HOVER:"Survol",HEADER_SCROLL:"Défilement",HEADER_CLICK:"Clic",HEADER_FIXED:"Fixe",HEADER_SIMPLE:"Simple",BUTTON_DOWNLOAD:"Télécharger",DOWNLOAD_ZIP:"Télécharger le fichier Zip",DOWNLOAD_IMAGES:"Télécharger les images en Zip automatiquement",DOWNLOAD_PROGRESS:"Téléchargement : ##num## sur ##total##",GENERATING_ZIP:"Génération du fichier Zip...",DOWNLOAD_INCOMPLETE:"Téléchargement incomplet",DOWNLOAD_INCOMPLETE_MESSAGE:"Certaines pages n'ont pas pu être téléchargées et ont été ignorées. Une liste des pages concernées a été ajoutée au fichier ZIP.",BUTTON_NEXT:"Suivant",NEXT_CHAPTER:"Chapitre suivant",BUTTON_PREVIOUS:"Précédent",PREVIOUS_CHAPTER:"Chapitre précédent",BOOKMARKS:"Favoris",BOOKMARK:"Favori",BOOKMARK_REMOVED:"Favori supprimé",BOOKMARK_SAVED:"Favori enregistré",BOOKMARK_MESSAGE:"La prochaine fois que vous ouvrirez ce chapitre, il reprendra à partir de: Page ##num## (Seulement UNE FOIS par favori)",KEYBINDINGS:"Raccourcis clavier",EDIT_KEYBINDS:"Modifier les raccourcis clavier",SAVE_KEYBINDS:"Enregistrer les raccourcis clavier",BUTTON_EDIT:"Modifier",BUTTON_SAVE:"Enregistrer",KEYBIND_RULES:`
    <h3>Touches prises en charge</h3>
    Modificateurs autorisés : shift, option, alt, ctrl, control, command. <br/>
    Touches spéciales : backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide. <br/>
    Exemples : <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd>
  `,ATTENTION:"Attention",WARNING:"Avertissement",BUTTON_RESET_SETTINGS:"Réinitialiser les paramètres",SETTINGS_RESET:"Les paramètres ont été réinitialisés, rechargez la page pour prendre effet",LANGUAGE_CHANGED:"La langue a été modifiée, rechargez la page pour prendre effet",AUTO_DOWNLOAD:"La prochaine fois qu'un chapitre finira de se charger, il vous sera proposé de l'enregistrer automatiquement",LAZY_LOAD:"Le chargement paresseux est incompatible avec le téléchargement zip, vous ne pourrez pas télécharger avec ce paramètre activé.<br/> Suggestion : <span style='color:red;font-weight:bold'>Désactivez les vignettes</span> pour économiser de la bande passante/mémoire.",LAZY_LOAD_IMAGES_ENABLE:"Activer le chargement paresseux des images",LAZY_LOAD_IMAGES:"Début du chargement paresseux à partir de la page (entre 5 et 100)",RETURN_CHAPTER_LIST:"Retour à la liste des chapitres",PAGES_LOADED:"Pages chargées",GO_TO_PAGE:"Aller à la page",ENLARGE:"Agrandir",RESTORE:"Restaurer",REDUCE:"Réduire",FIT_WIDTH:"Ajuster à la largeur",FIT_HEIGHT:"Ajuster à la hauteur",PERCENT:"Pourcentage",TOGGLE_CONTROLS:"Basculer les contrôles de page",ZOOM_IN:"Zoom avant",ZOOM_OUT:"Zoom arrière",ZOOM_RESET:"Réinitialiser le zoom",ZOOM_WIDTH:"Zoomer à la largeur",ZOOM_HEIGHT:"Zoomer à la hauteur",HIDE:"Masquer",RELOAD:"Recharger",SLOWLY:"Lentement",NORMAL:"Normal",FAST:"Rapide",EXTREME:"Extrême",ALL_PAGES:"Toutes les pages",SPEED_WARNING:"Vitesse de chargement trop élevée",SPEED_WARNING_MESSAGE:"Cette vitesse n'est pas recommandée.<br/> Elle peut nuire à certains serveurs ou marquer votre IP comme un attaquant DDoS.<br/> Veuillez l'utiliser avec prudence !",SCROLL_UP:"Faire défiler vers le haut",SCROLL_DOWN:"Faire défiler vers le bas",CLOSE:"Fermer",CANCEL:"Annuler",LIST_EMPTY:"Liste vide",SCROLL_START:"Basculer le défilement automatique",INCREASE_SPEED:"Augmenter la vitesse de défilement",DECREASE_SPEED:"Diminuer la vitesse de défilement",AUTO_SCROLL_HEIGHT:"Vitesse de défilement automatique en pixels",VERTICAL_SEPARATOR:"Afficher les séparateurs verticaux",END:"Fin",SCOPE:"Portée",GLOBAL:"Global",GENERAL:"Général",LOADING:"Chargement",ZOOM:"Zoom",OTHERS:"Autres",NAVBAR_TYPE:"Changer le type de barre de navigation",NAVBAR_BOTTOM:"Bas",NAVBAR_LEFT:"Gauche",NAVBAR_RIGHT:"Droite",NAVBAR_DISABLED:"Désactivé",PAGINATION_TYPE:"Type de pagination",PAGINATION_DISABLED:"Désactivé",PAGINATION_SLIDER:"Curseur",PAGINATION_ARROWS:"Flèches latérales",PAGINATION_BOTH:"Les deux",FILE_MENU:"Menu principal",VIEW_MENU:"Menu Affichage",ZOOM_MENU:"Menu Zoom",DOUBLE_PAGE:"Basculer Double Page"},Pp={ID:"pt_BR",NAME:"Portugues (Brasil)",STARTING:"Iniciando Manga OnlineViewer",RESUME:"Continuando leitura na Pagina ",WAITING:"Por Favor espere, 3 segundos...",CHOOSE_BEGINNING:"Escolha a pagina de onde começar:",BUTTON_START:"Iniciar Manga OnlineViewer",SETTINGS:"Configurações",LANGUAGE:"Idioma",COLOR_SCHEME:"Esquema de Color",THEME:"Tema",THEME_COLOR:"Cor",THEME_HUE:"Tom da Cor",THEME_SHADE:"Saturação da Cor",DEFAULT_LOAD_MODE:"Forma de Carregamento Padrão",LOAD_MODE_NORMAL:"Normal(Esperando 3 sec)",LOAD_MODE_ALWAYS:"Sempre(Imediatamente)",LOAD_MODE_NEVER:"Nunca(Manualmente)",LOAD_SPEED:"Velocidade de Carregamento",DEFAULT_ZOOM:"Zoom padrão (entre 5 e 200)",DEFAULT_ZOOM_MODE:"Modo de Zoom padrão",MINIMUM_ZOOM:"Zoom minimo, relativo ao tamanho da tela (entre 30 e 100)",ZOOM_STEP:"Precisão da Mudança do Zoom (entre 5 e 50)",DEFAULT_VIEW_MODE:"Modo de Visualização Padrão",VIEW_MODE_VERTICAL:"Vertical",VIEW_MODE_LEFT:"Horizontal - Esquerda para Direita",VIEW_MODE_RIGHT:"Horizontal - Direita para Esquerda",VIEW_MODE_WEBCOMIC:"WebComic",VIEW_MODE_BOOK:"Livro - Esquerda para Direita",VIEW_MODE_MANGA:"Mangá - Direita para Esquerda",VIEW_MODE_GALLERY:"Galeria",FIT_WIDTH_OVERSIZED:"Encher a tela se grande demais",SHOW_THUMBNAILS:"Mostra Miniaturas",HIDE_CONTROLS:"Sempre esconder controles das paginas",HEADER_TYPE:"Mudar Tipo de Cabeçalho",HEADER_HOVER:"Passar por perto",HEADER_SCROLL:"Rolagem do Mouse",HEADER_CLICK:"Click",HEADER_FIXED:"Fixo",HEADER_SIMPLE:"Simples",BUTTON_DOWNLOAD:"Download",DOWNLOAD_ZIP:"Baixar arquivo Zip",DOWNLOAD_IMAGES:"Download das Imagens como Zip Automaticamente",DOWNLOAD_PROGRESS:"Baixando: ##num## de ##total##",GENERATING_ZIP:"Gerando arquivo Zip...",DOWNLOAD_INCOMPLETE:"Download Incompleto",DOWNLOAD_INCOMPLETE_MESSAGE:"Algumas páginas falharam ao baixar e foram puladas. Uma lista de páginas que falharam foi adicionada ao arquivo ZIP.",BUTTON_NEXT:"Proximo",NEXT_CHAPTER:"Proximo Capitulo",BUTTON_PREVIOUS:"Anterior",PREVIOUS_CHAPTER:"Capitulo Anterior",BOOKMARKS:"Marca paginas",BOOKMARK:"Marcar pagina",BOOKMARK_REMOVED:"Marca pagina Removido",BOOKMARK_SAVED:"Marca pagina Salvo",BOOKMARK_MESSAGE:"Proxima vez que abrir este capitulo continuará a partir da Pagina ##num## (Apenas UMA VEZ por marca pagina)",KEYBINDINGS:"Atalhos",EDIT_KEYBINDS:"Editar Atalhos",SAVE_KEYBINDS:"Salvar Atalhos",BUTTON_EDIT:"Editar",BUTTON_SAVE:"Salvar",KEYBIND_RULES:`
    <h3>Teclas Suportadas</h3>
    Modificadores permitidos: shift, option, alt, ctrl, control, command. <br/>
    Teclas Especiais: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide.<br/>
    Exemplos: <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd>
  `,ATTENTION:"Atenção",WARNING:"Alerta",BUTTON_RESET_SETTINGS:"Limpar Configurações(Reset Settings)",SETTINGS_RESET:"Configurações foram limpas, recarregue o site para efetivar a alteração",LANGUAGE_CHANGED:"Idioma foi alterado, recarregue o site para efetivar a alteração",AUTO_DOWNLOAD:"Proxima vez que abrir um capitulo download iniciara automaticamente",LAZY_LOAD:"Carregamento preguiçoso não é compativel com download de zip, não conseguira com essa configuração ativa.<br/> Sugestão: <span style='color:red;font-weight:bold'>Desative Miniaturas</span> para economizar memoria e cota de internet.",LAZY_LOAD_IMAGES_ENABLE:"Ativar Carregamento de imagens preguiçoso",LAZY_LOAD_IMAGES:"Carregamento de paginas preguiçoso começa a partir de (entre 5 e 100)",RETURN_CHAPTER_LIST:"Voltar a lista de Capitulos",PAGES_LOADED:"Paginas Carregadas",GO_TO_PAGE:"Pular para",ENLARGE:"Aumentar",RESTORE:"Restaurar",REDUCE:"Diminuir",FIT_WIDTH:"Preencher Largura",FIT_HEIGHT:"Preencher Altura ",PERCENT:"Percentual",TOGGLE_CONTROLS:"Mostar controles de pagina",ZOOM_IN:"Mais Zoom",ZOOM_OUT:"Menos Zoom",ZOOM_RESET:"Resetar Zoom",ZOOM_WIDTH:"Zoom para Largura",ZOOM_HEIGHT:"Zoom para Altura",HIDE:"Esconder",RELOAD:"Recarregar",SLOWLY:"Devagar",NORMAL:"Normal",FAST:"Rapido",EXTREME:"Extremo",ALL_PAGES:"Todas as Paginas",SPEED_WARNING:"Velocidade de Carregamento muito alta",SPEED_WARNING_MESSAGE:"Essa velocidade não é recomendada.<br/> Ela pode derrubar um servidor or marcar voce como um ataque hacker de DDoS.<br/> Use com cuidado!",SCROLL_UP:"Subir Pagina",SCROLL_DOWN:"Descer Pagina",CLOSE:"Fechar",CANCEL:"Cancelar",LIST_EMPTY:"Lista Vazia",SCROLL_START:"Ativar Rolagem Automatica",INCREASE_SPEED:"Aumentar Valocidade da Rolagem",DECREASE_SPEED:"Diminuir Valocidade da Rolagem",AUTO_SCROLL_HEIGHT:"Velocidade da Rolagem Automatica em Pixels",VERTICAL_SEPARATOR:"Mostrar Separadores Verticais",END:"Fin",SCOPE:"Escopo",GLOBAL:"Global",GENERAL:"Geral",LOADING:"Carregamento",ZOOM:"Zoom",OTHERS:"Outros",NAVBAR_TYPE:"Mudar barra de navegação",NAVBAR_BOTTOM:"Embaixo",NAVBAR_LEFT:"Esquerda",NAVBAR_RIGHT:"Direita",NAVBAR_DISABLED:"Desativado",PAGINATION_TYPE:"Tipo de Paginação",PAGINATION_DISABLED:"Desativado",PAGINATION_SLIDER:"Controle deslizante",PAGINATION_ARROWS:"Setas Laterais",PAGINATION_BOTH:"Ambos",FILE_MENU:"Menu Principal",VIEW_MENU:"Menu de Visualizações",ZOOM_MENU:"Menu de Zoom",DOUBLE_PAGE:"Alternar Página Dupla"},$p={ID:"zh_CN",NAME:"中文 (简体)",STARTING:"正在启动 Manga OnlineViewer",RESUME:"从页面继续阅读 ",WAITING:"请等待3秒钟...",CHOOSE_BEGINNING:"选择要开始的页数:",BUTTON_START:"启动Manga OnlineViewer",SETTINGS:"设置",LANGUAGE:"语言",COLOR_SCHEME:"配色方案",THEME:"主题",THEME_COLOR:"颜色",THEME_HUE:"色相",THEME_SHADE:"色度",DEFAULT_LOAD_MODE:"默认加载模式",LOAD_MODE_NORMAL:"等待模式(等待3秒自动加载 )",LOAD_MODE_ALWAYS:"自动模式(无需等待)",LOAD_MODE_NEVER:"手动模式(点击启动)",LOAD_SPEED:"加载速度",DEFAULT_ZOOM:"默认缩放 (最小 5 最大 200)",DEFAULT_ZOOM_MODE:"默认缩放模式",MINIMUM_ZOOM:"相对于屏幕宽度的最小缩放 (最小 30 最大 100)",ZOOM_STEP:"缩放级别 (最小 5 最大 50)",DEFAULT_VIEW_MODE:"默认视图模式",VIEW_MODE_VERTICAL:"垂直有缝",VIEW_MODE_LEFT:"横向 - 从左到右",VIEW_MODE_RIGHT:"横向 - 从右到左",VIEW_MODE_WEBCOMIC:"垂直无缝",VIEW_MODE_BOOK:"书籍 - 从左到右",VIEW_MODE_MANGA:"漫画 - 从右到左",VIEW_MODE_GALLERY:"图库",FIT_WIDTH_OVERSIZED:"如果尺寸过大、则适合宽度",SHOW_THUMBNAILS:"显示缩略图",HIDE_CONTROLS:"始终隐藏页面控件",HEADER_TYPE:"更改标题显示方式",HEADER_HOVER:"悬停",HEADER_SCROLL:"滚动",HEADER_CLICK:"点击",HEADER_FIXED:"固定",HEADER_SIMPLE:"简单",BUTTON_DOWNLOAD:"下载",DOWNLOAD_ZIP:"下载压缩文件",DOWNLOAD_IMAGES:"自动将图片下载成ZIP",DOWNLOAD_PROGRESS:"正在下载：第 ##num## 页，共 ##total## 页",GENERATING_ZIP:"正在生成 Zip 文件...",DOWNLOAD_INCOMPLETE:"下载不完整",DOWNLOAD_INCOMPLETE_MESSAGE:"部分页面下载失败并已跳过。失败页面列表已添加到 ZIP 文件中。",BUTTON_NEXT:"下一页",NEXT_CHAPTER:"下一章",BUTTON_PREVIOUS:"上一页",PREVIOUS_CHAPTER:"上一章",BOOKMARKS:"书签",BOOKMARK:"Bookmark",BOOKMARK_REMOVED:"删除书签",BOOKMARK_SAVED:"保存书签",BOOKMARK_MESSAGE:"下次打开本章时，将从: 页码 ##num## (仅一次 每个书签)",KEYBINDINGS:"快捷键",EDIT_KEYBINDS:"编辑键绑定",SAVE_KEYBINDS:"保存键绑定",BUTTON_EDIT:"编辑",BUTTON_SAVE:"救",KEYBIND_RULES:`
    <h3>支持的密钥</h3>
    允许的修饰符: shift, option, alt, ctrl, control, command. <br/>
    特殊键: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide.<br/>
    例子: <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd>
  `,ATTENTION:"注意",WARNING:"警告",BUTTON_RESET_SETTINGS:"重置设置(Reset Settings)",SETTINGS_RESET:"设置已重置、重新加载页面才能生效",LANGUAGE_CHANGED:"语言已更改、重新加载页面才能生效",AUTO_DOWNLOAD:"下次章节加载完成时、系统将提示您自动保存",LAZY_LOAD:"延迟加载与zip下载不兼容、您将无法使用此设置下载.<br/> 建议: <span style='color:red;font-weight:bold'>禁用缩略图</span> 以节省流量和内存.",LAZY_LOAD_IMAGES_ENABLE:"启用延迟加载图像",LAZY_LOAD_IMAGES:"惰性加载从页面 (最小 5 最大 100)",RETURN_CHAPTER_LIST:"返回章节列表",PAGES_LOADED:"已加载的页数",GO_TO_PAGE:"转到页数",ENLARGE:"放大",RESTORE:"还原",REDUCE:"缩小",FIT_WIDTH:"适合宽度",FIT_HEIGHT:"适合高度",PERCENT:"百分之",TOGGLE_CONTROLS:"显示隐藏页面控件",ZOOM_IN:"放大",ZOOM_OUT:"缩小",ZOOM_RESET:"还原",ZOOM_WIDTH:"适合宽度",ZOOM_HEIGHT:"适合高度",HIDE:"显示隐藏页面控件",RELOAD:"重新加载",SLOWLY:"慢速",NORMAL:"正常",FAST:"快速",EXTREME:"极端",ALL_PAGES:"所有页面",SPEED_WARNING:"加载速度过高",SPEED_WARNING_MESSAGE:"不建议使用此速度.<br/>它可能会伤害某些服务器或将您的 IP 标记为 DDoS 攻击者.<br/>请谨慎使用!",SCROLL_UP:"向上滚动",SCROLL_DOWN:"向下滚动",CLOSE:"关闭",CANCEL:"取消",LIST_EMPTY:"没有收藏书签",SCROLL_START:"切换自动滚动",INCREASE_SPEED:"增加滚动速度",DECREASE_SPEED:"降低滚动速度",AUTO_SCROLL_HEIGHT:"自动滚动速度（以像素为单位）",VERTICAL_SEPARATOR:"显示垂直分隔符",END:"结尾",SCOPE:"范围",GLOBAL:"全球",GENERAL:"常规",LOADING:"装载",ZOOM:"缩放",OTHERS:"别人",NAVBAR_TYPE:"更改导航栏类型",NAVBAR_BOTTOM:"底部",NAVBAR_LEFT:"左边",NAVBAR_RIGHT:"正确的",NAVBAR_DISABLED:"已禁用",PAGINATION_TYPE:"分页类型",PAGINATION_DISABLED:"已禁用",PAGINATION_SLIDER:"滑块",PAGINATION_ARROWS:"侧边箭头",PAGINATION_BOTH:"两者",FILE_MENU:"主菜单",VIEW_MENU:"查看菜单",ZOOM_MENU:"缩放菜单",DOUBLE_PAGE:"切换双页"},oo=[Tp,Lp,Pp,$p,Op,Rp],Yo=(e,t)=>{const r=(i,a)=>Me.default.transform(i,(s,c,u)=>{Me.default.isEqual(c,a[u])||(Me.default.isObject(c)&&Me.default.isObject(a[u])&&!Me.default.isArray(c)?s[u]=r(c,a[u]):s[u]=c)});return r(e,t)},Dp={bookmarks:[],colorScheme:"dark",downloadZip:!1,enabled:!1,fitWidthIfOversize:!0,header:"scroll",hidePageControls:!1,lazyLoadImages:!1,lazyStart:50,loadMode:"wait",locale:"en_US",maxReload:5,minZoom:30,navbar:"bottom",pagination:"disabled",scrollHeight:25,theme:"#29487D",loadSpeed:"Extreme",viewMode:"WebComic",zoomMode:"percent",zoomStep:30,zoomValue:100,keybinds:{SCROLL_UP:["up","W","num_8"],SCROLL_DOWN:["down","S","num_2"],NEXT_CHAPTER:["right","/","D","num_6"],PREVIOUS_CHAPTER:["left",";","A","num_4"],RETURN_CHAPTER_LIST:["backspace","del","num_decimal"],ENLARGE:["-","num_add","E"],REDUCE:["=","num_subtract","Q"],RESTORE:["9","num_divide","R"],FIT_WIDTH:["0","num_multiply","F"],FIT_HEIGHT:["H","num_0"],SETTINGS:["num_divide","num_5","X"],VIEW_MODE_WEBCOMIC:["C"],VIEW_MODE_VERTICAL:["V"],VIEW_MODE_LEFT:["N"],VIEW_MODE_RIGHT:["B"],VIEW_MODE_GALLERY:["G"],SCROLL_START:["space"],INCREASE_SPEED:["."],DECREASE_SPEED:[","]}},zp={lazyLoadImages:!0,fitWidthIfOversize:!0,navbar:"disabled",viewMode:"WebComic",header:"scroll",hidePageControls:!0,pagination:"disabled"},Bp={loadSpeed:"All",lazyLoadImages:!1,downloadZip:!1,theme:"oklch(44.6% 0.043 257.281)"};function Rn(e=!0){const t={...Dp,theme:e?"#29487D":"#004526"};let r=lp()?Me.default.defaultsDeep(zp,t):t;return cp()&&(r=Me.default.defaultsDeep(Bp,r)),r}function Np(e,t){if(Array.isArray(e)&&Array.isArray(t)){if(e.length!==t.length)return!1;const r=s=>`${s.url}-${s.date}`,i=[...e].sort((s,c)=>r(s).localeCompare(r(c))),a=[...t].sort((s,c)=>r(s).localeCompare(r(c)));return Me.default.isEqual(i,a)}}function Hp(e,t){if(e&&typeof e=="object"&&t&&typeof t=="object"){const r=e,i=t,a=Me.default.keys(r).sort((c,u)=>c.localeCompare(u)),s=Me.default.keys(i).sort((c,u)=>c.localeCompare(u));if(!Me.default.isEqual(a,s))return!1;for(const c of a){const u=r[c]?[...r[c]].sort((h,f)=>h.localeCompare(f)):[],d=i[c]?[...i[c]].sort((h,f)=>h.localeCompare(f)):[];if(!Me.default.isEqual(u,d))return!1}return!0}}function Rd(e,t,r){if(r==="bookmarks")return Np(e,t);if(r==="keybinds")return Hp(e,t)}function qi(e,t,r){if(e===t)return!1;if(r){const i={[r]:e},a={[r]:t};return!Me.default.isEqualWith(i,a,Rd)}return!Me.default.isEqualWith(e,t,Rd)}var qt=Me.default.defaultsDeep(rp(Rn()),Rn()),Kt=Me.default.defaultsDeep(op(Rn(!1)),Rn(!1)),Br=()=>Kt?.enabled===!0,Ps=e=>Br()&&!["locale","bookmarks","keybinds"].includes(e),At=fd(Br()?{...Kt,locale:qt.locale,keybinds:qt.keybinds,bookmarks:qt.bookmarks}:qt),io=vp(At,e=>oo.find(t=>t.ID===e.locale)??oo[1]),Yt=fd({autoScroll:!1,chapter:Ts(),currentPage:0,device:Fo(),manga:void 0,panel:"none",scrollToPage:void 0});function Nr(e){if(e){const t=Ps(e)?Kt[e]:qt[e],r=At.get()?.[e];qi(r,t,e)&&(At.setKey(e,t),ke("Refreshed Settings",e,t));return}for(const t in At.get()){const r=At.get()[t],i=Ps(t)?Kt[t]:qt[t];qi(r,i)&&At.setKey(t,i)}ke("Refreshed All Settings")}function Fp(e){const t=Me.default.defaultsDeep(e,Rn()),r=qt?Yo(t,qt):t;if(!_n(r)){ke("Imported Global Settings",r),qt=t;for(const i in r)Nr(i)}}ud(Me.default.debounce(Fp,300),"settings");function Gp(e){const t=Me.default.defaultsDeep(e,Rn(!1)),r=Kt?Yo(t,Kt):t;if(!_n(r)){ke("Imported Local Settings",r),Kt=t;for(const i in r)Nr(i)}}ud(Me.default.debounce(Gp,300),location.hostname);function K(e){return At.get()?.[e]}function ao(e,t){const r=At.get()?.[e];qi(r,t,e)&&At.setKey(e,t)}function _t(e,t){qi(K(e),t,e)&&(At.setKey(e,t),Ps(e)?(Kt[e]=t,dd(Yo(Kt,Rn(!1)))):(qt[e]=t,ip(Yo(qt,Rn()))))}function Xo(e,t){ao(e,t(K(e)))}function fe(e){return Yt.get()[e]}function Re(e,t){const r=Yt.get()[e];Me.default.isEqual(r,t)||Yt.setKey(e,t)}function Pd(e,t){const r=Yt.get()[e],i=t(r);Me.default.isEqual(r,i)||Yt.setKey(e,i)}function Pn(e,t){Pd("images",r=>({...r,[e]:{...r?.[e],...t(r?.[e]??{})}}))}function j(e){const t=oo.find(r=>r.ID===K("locale"))??oo[1];return s2(t,e)?t?.[e]??oo[1]?.[e]:`##MISSING_STRING_${e}##`}function $d(e=!1){return Kt.enabled=e,dd(Yo(Kt,Rn(!1))),ke("Local Settings ",e?"Enabled":"Disabled"),Wo.info({title:"Changed Settings to",description:Br()?"Local":"Global",duration:2e3}),Br()}function Wp(){Br()?(sd(location.hostname),Kt=Rn(!1),$d(!1)):(sd("settings"),qt=Rn(),Nr()),ke("Settings Reset")}function so(e=location.href){return K("bookmarks").find(t=>t.url===e)?.page}function Up(e=null){yn("Current Settings (Local:",Br(),") ",e?At.get()[e]:At.get(),`
Global Settings`,e?qt[e]:qt,`
Local Settings`,e?Kt[e]:Kt,`
AppState`,Yt.get())}tp("MOVSettings",Up);var Vp=(e,t,r)=>{if(r&&!["bookmarks","zoomValue"].includes(r)){const i=t[r],a=e[r];Wo.info({title:`${r} Changed`,description:`from ${JSON.stringify(i)} to ${JSON.stringify(a)}`,duration:2e3})}};At.listen(Me.default.debounce(Vp,300));var Zp=wn(((e,t)=>{(function(r){typeof e=="object"&&typeof t<"u"?t.exports=r():typeof define=="function"&&define.amd?define([],r):(typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:this).JSZip=r()})(function(){return(function r(i,a,s){function c(h,f){if(!a[h]){if(!i[h]){var b=typeof require=="function"&&require;if(!f&&b)return b(h,!0);if(u)return u(h,!0);var v=new Error("Cannot find module '"+h+"'");throw v.code="MODULE_NOT_FOUND",v}var m=a[h]={exports:{}};i[h][0].call(m.exports,function(g){var k=i[h][1][g];return c(k||g)},m,m.exports,r,i,a,s)}return a[h].exports}for(var u=typeof require=="function"&&require,d=0;d<s.length;d++)c(s[d]);return c})({1:[function(r,i,a){"use strict";var s=r("./utils"),c=r("./support"),u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";a.encode=function(d){for(var h,f,b,v,m,g,k,_=[],E=0,M=d.length,T=M,C=s.getTypeOf(d)!=="string";E<d.length;)T=M-E,b=C?(h=d[E++],f=E<M?d[E++]:0,E<M?d[E++]:0):(h=d.charCodeAt(E++),f=E<M?d.charCodeAt(E++):0,E<M?d.charCodeAt(E++):0),v=h>>2,m=(3&h)<<4|f>>4,g=1<T?(15&f)<<2|b>>6:64,k=2<T?63&b:64,_.push(u.charAt(v)+u.charAt(m)+u.charAt(g)+u.charAt(k));return _.join("")},a.decode=function(d){var h,f,b,v,m,g,k=0,_=0,E="data:";if(d.substr(0,E.length)===E)throw new Error("Invalid base64 input, it looks like a data url.");var M,T=3*(d=d.replace(/[^A-Za-z0-9\+\/\=]/g,"")).length/4;if(d.charAt(d.length-1)===u.charAt(64)&&T--,d.charAt(d.length-2)===u.charAt(64)&&T--,T%1!=0)throw new Error("Invalid base64 input, bad content length.");for(M=c.uint8array?new Uint8Array(0|T):new Array(0|T);k<d.length;)h=u.indexOf(d.charAt(k++))<<2|(v=u.indexOf(d.charAt(k++)))>>4,f=(15&v)<<4|(m=u.indexOf(d.charAt(k++)))>>2,b=(3&m)<<6|(g=u.indexOf(d.charAt(k++))),M[_++]=h,m!==64&&(M[_++]=f),g!==64&&(M[_++]=b);return M}},{"./support":30,"./utils":32}],2:[function(r,i,a){"use strict";var s=r("./external"),c=r("./stream/DataWorker"),u=r("./stream/Crc32Probe"),d=r("./stream/DataLengthProbe");function h(f,b,v,m,g){this.compressedSize=f,this.uncompressedSize=b,this.crc32=v,this.compression=m,this.compressedContent=g}h.prototype={getContentWorker:function(){var f=new c(s.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new d("data_length")),b=this;return f.on("end",function(){if(this.streamInfo.data_length!==b.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),f},getCompressedWorker:function(){return new c(s.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},h.createWorkerFrom=function(f,b,v){return f.pipe(new u).pipe(new d("uncompressedSize")).pipe(b.compressWorker(v)).pipe(new d("compressedSize")).withStreamInfo("compression",b)},i.exports=h},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(r,i,a){"use strict";var s=r("./stream/GenericWorker");a.STORE={magic:"\0\0",compressWorker:function(c){return new s("STORE compression")},uncompressWorker:function(){return new s("STORE decompression")}},a.DEFLATE=r("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(r,i,a){"use strict";var s=r("./utils"),c=(function(){for(var u,d=[],h=0;h<256;h++){u=h;for(var f=0;f<8;f++)u=1&u?3988292384^u>>>1:u>>>1;d[h]=u}return d})();i.exports=function(u,d){return u!==void 0&&u.length?s.getTypeOf(u)!=="string"?(function(h,f,b,v){var m=c,g=v+b;h^=-1;for(var k=v;k<g;k++)h=h>>>8^m[255&(h^f[k])];return-1^h})(0|d,u,u.length,0):(function(h,f,b,v){var m=c,g=v+b;h^=-1;for(var k=v;k<g;k++)h=h>>>8^m[255&(h^f.charCodeAt(k))];return-1^h})(0|d,u,u.length,0):0}},{"./utils":32}],5:[function(r,i,a){"use strict";a.base64=!1,a.binary=!1,a.dir=!1,a.createFolders=!0,a.date=null,a.compression=null,a.compressionOptions=null,a.comment=null,a.unixPermissions=null,a.dosPermissions=null},{}],6:[function(r,i,a){"use strict";var s=null;s=typeof Promise<"u"?Promise:r("lie"),i.exports={Promise:s}},{lie:37}],7:[function(r,i,a){"use strict";var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",c=r("pako"),u=r("./utils"),d=r("./stream/GenericWorker"),h=s?"uint8array":"array";function f(b,v){d.call(this,"FlateWorker/"+b),this._pako=null,this._pakoAction=b,this._pakoOptions=v,this.meta={}}a.magic="\b\0",u.inherits(f,d),f.prototype.processChunk=function(b){this.meta=b.meta,this._pako===null&&this._createPako(),this._pako.push(u.transformTo(h,b.data),!1)},f.prototype.flush=function(){d.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},f.prototype.cleanUp=function(){d.prototype.cleanUp.call(this),this._pako=null},f.prototype._createPako=function(){this._pako=new c[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var b=this;this._pako.onData=function(v){b.push({data:v,meta:b.meta})}},a.compressWorker=function(b){return new f("Deflate",b)},a.uncompressWorker=function(){return new f("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(r,i,a){"use strict";function s(m,g){var k,_="";for(k=0;k<g;k++)_+=String.fromCharCode(255&m),m>>>=8;return _}function c(m,g,k,_,E,M){var T,C,D=m.file,q=m.compression,Z=M!==h.utf8encode,ne=u.transformTo("string",M(D.name)),F=u.transformTo("string",h.utf8encode(D.name)),pe=D.comment,we=u.transformTo("string",M(pe)),R=u.transformTo("string",h.utf8encode(pe)),Y=F.length!==D.name.length,A=R.length!==pe.length,J="",xe="",le="",Ie=D.dir,oe=D.date,Se={crc32:0,compressedSize:0,uncompressedSize:0};g&&!k||(Se.crc32=m.crc32,Se.compressedSize=m.compressedSize,Se.uncompressedSize=m.uncompressedSize);var W=0;g&&(W|=8),Z||!Y&&!A||(W|=2048);var H=0,Ae=0;Ie&&(H|=16),E==="UNIX"?(Ae=798,H|=(function(he,je){var ft=he;return he||(ft=je?16893:33204),(65535&ft)<<16})(D.unixPermissions,Ie)):(Ae=20,H|=(function(he){return 63&(he||0)})(D.dosPermissions)),T=oe.getUTCHours(),T<<=6,T|=oe.getUTCMinutes(),T<<=5,T|=oe.getUTCSeconds()/2,C=oe.getUTCFullYear()-1980,C<<=4,C|=oe.getUTCMonth()+1,C<<=5,C|=oe.getUTCDate(),Y&&(xe=s(1,1)+s(f(ne),4)+F,J+="up"+s(xe.length,2)+xe),A&&(le=s(1,1)+s(f(we),4)+R,J+="uc"+s(le.length,2)+le);var ge="";return ge+=`
\0`,ge+=s(W,2),ge+=q.magic,ge+=s(T,2),ge+=s(C,2),ge+=s(Se.crc32,4),ge+=s(Se.compressedSize,4),ge+=s(Se.uncompressedSize,4),ge+=s(ne.length,2),ge+=s(J.length,2),{fileRecord:b.LOCAL_FILE_HEADER+ge+ne+J,dirRecord:b.CENTRAL_FILE_HEADER+s(Ae,2)+ge+s(we.length,2)+"\0\0\0\0"+s(H,4)+s(_,4)+ne+J+we}}var u=r("../utils"),d=r("../stream/GenericWorker"),h=r("../utf8"),f=r("../crc32"),b=r("../signature");function v(m,g,k,_){d.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=g,this.zipPlatform=k,this.encodeFileName=_,this.streamFiles=m,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}u.inherits(v,d),v.prototype.push=function(m){var g=m.meta.percent||0,k=this.entriesCount,_=this._sources.length;this.accumulate?this.contentBuffer.push(m):(this.bytesWritten+=m.data.length,d.prototype.push.call(this,{data:m.data,meta:{currentFile:this.currentFile,percent:k?(g+100*(k-_-1))/k:100}}))},v.prototype.openedSource=function(m){this.currentSourceOffset=this.bytesWritten,this.currentFile=m.file.name;var g=this.streamFiles&&!m.file.dir;if(g){var k=c(m,g,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:k.fileRecord,meta:{percent:0}})}else this.accumulate=!0},v.prototype.closedSource=function(m){this.accumulate=!1;var g=this.streamFiles&&!m.file.dir,k=c(m,g,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(k.dirRecord),g)this.push({data:(function(_){return b.DATA_DESCRIPTOR+s(_.crc32,4)+s(_.compressedSize,4)+s(_.uncompressedSize,4)})(m),meta:{percent:100}});else for(this.push({data:k.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},v.prototype.flush=function(){for(var m=this.bytesWritten,g=0;g<this.dirRecords.length;g++)this.push({data:this.dirRecords[g],meta:{percent:100}});var k=this.bytesWritten-m,_=(function(E,M,T,C,D){var q=u.transformTo("string",D(C));return b.CENTRAL_DIRECTORY_END+"\0\0\0\0"+s(E,2)+s(E,2)+s(M,4)+s(T,4)+s(q.length,2)+q})(this.dirRecords.length,k,m,this.zipComment,this.encodeFileName);this.push({data:_,meta:{percent:100}})},v.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},v.prototype.registerPrevious=function(m){this._sources.push(m);var g=this;return m.on("data",function(k){g.processChunk(k)}),m.on("end",function(){g.closedSource(g.previous.streamInfo),g._sources.length?g.prepareNextSource():g.end()}),m.on("error",function(k){g.error(k)}),this},v.prototype.resume=function(){return!!d.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},v.prototype.error=function(m){var g=this._sources;if(!d.prototype.error.call(this,m))return!1;for(var k=0;k<g.length;k++)try{g[k].error(m)}catch{}return!0},v.prototype.lock=function(){d.prototype.lock.call(this);for(var m=this._sources,g=0;g<m.length;g++)m[g].lock()},i.exports=v},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(r,i,a){"use strict";var s=r("../compressions"),c=r("./ZipFileWorker");a.generateWorker=function(u,d,h){var f=new c(d.streamFiles,h,d.platform,d.encodeFileName),b=0;try{u.forEach(function(v,m){b++;var g=(function(M,T){var C=M||T,D=s[C];if(!D)throw new Error(C+" is not a valid compression method !");return D})(m.options.compression,d.compression),k=m.options.compressionOptions||d.compressionOptions||{},_=m.dir,E=m.date;m._compressWorker(g,k).withStreamInfo("file",{name:v,dir:_,date:E,comment:m.comment||"",unixPermissions:m.unixPermissions,dosPermissions:m.dosPermissions}).pipe(f)}),f.entriesCount=b}catch(v){f.error(v)}return f}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(r,i,a){"use strict";function s(){if(!(this instanceof s))return new s;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var c=new s;for(var u in this)typeof this[u]!="function"&&(c[u]=this[u]);return c}}(s.prototype=r("./object")).loadAsync=r("./load"),s.support=r("./support"),s.defaults=r("./defaults"),s.version="3.9.1",s.loadAsync=function(c,u){return new s().loadAsync(c,u)},s.external=r("./external"),i.exports=s},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(r,i,a){"use strict";var s=r("./utils"),c=r("./external"),u=r("./utf8"),d=r("./zipEntries"),h=r("./stream/Crc32Probe"),f=r("./nodejsUtils");function b(v){return new c.Promise(function(m,g){var k=v.decompressed.getContentWorker().pipe(new h);k.on("error",function(_){g(_)}).on("end",function(){k.streamInfo.crc32!==v.decompressed.crc32?g(new Error("Corrupted zip : CRC32 mismatch")):m()}).resume()})}i.exports=function(v,m){var g=this;return m=s.extend(m||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:u.utf8decode}),f.isNode&&f.isStream(v)?c.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):s.prepareContent("the loaded zip file",v,!0,m.optimizedBinaryString,m.base64).then(function(k){var _=new d(m);return _.load(k),_}).then(function(k){var _=[c.Promise.resolve(k)],E=k.files;if(m.checkCRC32)for(var M=0;M<E.length;M++)_.push(b(E[M]));return c.Promise.all(_)}).then(function(k){for(var _=k.shift(),E=_.files,M=0;M<E.length;M++){var T=E[M],C=T.fileNameStr,D=s.resolve(T.fileNameStr);g.file(D,T.decompressed,{binary:!0,optimizedBinaryString:!0,date:T.date,dir:T.dir,comment:T.fileCommentStr.length?T.fileCommentStr:null,unixPermissions:T.unixPermissions,dosPermissions:T.dosPermissions,createFolders:m.createFolders}),T.dir||(g.file(D).unsafeOriginalName=C)}return _.zipComment.length&&(g.comment=_.zipComment),g})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(r,i,a){"use strict";var s=r("../utils"),c=r("../stream/GenericWorker");function u(d,h){c.call(this,"Nodejs stream input adapter for "+d),this._upstreamEnded=!1,this._bindStream(h)}s.inherits(u,c),u.prototype._bindStream=function(d){var h=this;(this._stream=d).pause(),d.on("data",function(f){h.push({data:f,meta:{percent:0}})}).on("error",function(f){h.isPaused?this.generatedError=f:h.error(f)}).on("end",function(){h.isPaused?h._upstreamEnded=!0:h.end()})},u.prototype.pause=function(){return!!c.prototype.pause.call(this)&&(this._stream.pause(),!0)},u.prototype.resume=function(){return!!c.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},i.exports=u},{"../stream/GenericWorker":28,"../utils":32}],13:[function(r,i,a){"use strict";var s=r("readable-stream").Readable;function c(u,d,h){s.call(this,d),this._helper=u;var f=this;u.on("data",function(b,v){f.push(b)||f._helper.pause(),h&&h(v)}).on("error",function(b){f.emit("error",b)}).on("end",function(){f.push(null)})}r("../utils").inherits(c,s),c.prototype._read=function(){this._helper.resume()},i.exports=c},{"../utils":32,"readable-stream":16}],14:[function(r,i,a){"use strict";i.exports={isNode:typeof Buffer<"u",newBufferFrom:function(s,c){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(s,c);if(typeof s=="number")throw new Error('The "data" argument must not be a number');return new Buffer(s,c)},allocBuffer:function(s){if(Buffer.alloc)return Buffer.alloc(s);var c=new Buffer(s);return c.fill(0),c},isBuffer:function(s){return Buffer.isBuffer(s)},isStream:function(s){return s&&typeof s.on=="function"&&typeof s.pause=="function"&&typeof s.resume=="function"}}},{}],15:[function(r,i,a){"use strict";function s(C,D,q){var Z,ne=u.getTypeOf(D),F=u.extend(q||{},f);F.date=F.date||new Date,F.compression!==null&&(F.compression=F.compression.toUpperCase()),typeof F.unixPermissions=="string"&&(F.unixPermissions=parseInt(F.unixPermissions,8)),F.unixPermissions&&16384&F.unixPermissions&&(F.dir=!0),F.dosPermissions&&16&F.dosPermissions&&(F.dir=!0),F.dir&&(C=E(C)),F.createFolders&&(Z=_(C))&&M.call(this,Z,!0);var pe=ne==="string"&&F.binary===!1&&F.base64===!1;q&&q.binary!==void 0||(F.binary=!pe),(D instanceof b&&D.uncompressedSize===0||F.dir||!D||D.length===0)&&(F.base64=!1,F.binary=!0,D="",F.compression="STORE",ne="string");var we=null;we=D instanceof b||D instanceof d?D:g.isNode&&g.isStream(D)?new k(C,D):u.prepareContent(C,D,F.binary,F.optimizedBinaryString,F.base64);var R=new v(C,we,F);this.files[C]=R}var c=r("./utf8"),u=r("./utils"),d=r("./stream/GenericWorker"),h=r("./stream/StreamHelper"),f=r("./defaults"),b=r("./compressedObject"),v=r("./zipObject"),m=r("./generate"),g=r("./nodejsUtils"),k=r("./nodejs/NodejsStreamInputAdapter"),_=function(C){C.slice(-1)==="/"&&(C=C.substring(0,C.length-1));var D=C.lastIndexOf("/");return 0<D?C.substring(0,D):""},E=function(C){return C.slice(-1)!=="/"&&(C+="/"),C},M=function(C,D){return D=D!==void 0?D:f.createFolders,C=E(C),this.files[C]||s.call(this,C,null,{dir:!0,createFolders:D}),this.files[C]};function T(C){return Object.prototype.toString.call(C)==="[object RegExp]"}i.exports={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(C){var D,q,Z;for(D in this.files)Z=this.files[D],(q=D.slice(this.root.length,D.length))&&D.slice(0,this.root.length)===this.root&&C(q,Z)},filter:function(C){var D=[];return this.forEach(function(q,Z){C(q,Z)&&D.push(Z)}),D},file:function(C,D,q){if(arguments.length!==1)return C=this.root+C,s.call(this,C,D,q),this;if(T(C)){var Z=C;return this.filter(function(F,pe){return!pe.dir&&Z.test(F)})}var ne=this.files[this.root+C];return ne&&!ne.dir?ne:null},folder:function(C){if(!C)return this;if(T(C))return this.filter(function(ne,F){return F.dir&&C.test(ne)});var D=this.root+C,q=M.call(this,D),Z=this.clone();return Z.root=q.name,Z},remove:function(C){C=this.root+C;var D=this.files[C];if(D||(C.slice(-1)!=="/"&&(C+="/"),D=this.files[C]),D&&!D.dir)delete this.files[C];else for(var q=this.filter(function(ne,F){return F.name.slice(0,C.length)===C}),Z=0;Z<q.length;Z++)delete this.files[q[Z].name];return this},generate:function(C){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(C){var D,q={};try{if((q=u.extend(C||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:c.utf8encode})).type=q.type.toLowerCase(),q.compression=q.compression.toUpperCase(),q.type==="binarystring"&&(q.type="string"),!q.type)throw new Error("No output type specified.");u.checkSupport(q.type),q.platform!=="darwin"&&q.platform!=="freebsd"&&q.platform!=="linux"&&q.platform!=="sunos"||(q.platform="UNIX"),q.platform==="win32"&&(q.platform="DOS");var Z=q.comment||this.comment||"";D=m.generateWorker(this,q,Z)}catch(ne){(D=new d("error")).error(ne)}return new h(D,q.type||"string",q.mimeType)},generateAsync:function(C,D){return this.generateInternalStream(C).accumulate(D)},generateNodeStream:function(C,D){return(C=C||{}).type||(C.type="nodebuffer"),this.generateInternalStream(C).toNodejsStream(D)}}},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(r,i,a){i.exports=r("stream")},{stream:void 0}],17:[function(r,i,a){"use strict";var s=r("./DataReader");function c(u){s.call(this,u);for(var d=0;d<this.data.length;d++)u[d]=255&u[d]}r("../utils").inherits(c,s),c.prototype.byteAt=function(u){return this.data[this.zero+u]},c.prototype.lastIndexOfSignature=function(u){for(var d=u.charCodeAt(0),h=u.charCodeAt(1),f=u.charCodeAt(2),b=u.charCodeAt(3),v=this.length-4;0<=v;--v)if(this.data[v]===d&&this.data[v+1]===h&&this.data[v+2]===f&&this.data[v+3]===b)return v-this.zero;return-1},c.prototype.readAndCheckSignature=function(u){var d=u.charCodeAt(0),h=u.charCodeAt(1),f=u.charCodeAt(2),b=u.charCodeAt(3),v=this.readData(4);return d===v[0]&&h===v[1]&&f===v[2]&&b===v[3]},c.prototype.readData=function(u){if(this.checkOffset(u),u===0)return[];var d=this.data.slice(this.zero+this.index,this.zero+this.index+u);return this.index+=u,d},i.exports=c},{"../utils":32,"./DataReader":18}],18:[function(r,i,a){"use strict";var s=r("../utils");function c(u){this.data=u,this.length=u.length,this.index=0,this.zero=0}c.prototype={checkOffset:function(u){this.checkIndex(this.index+u)},checkIndex:function(u){if(this.length<this.zero+u||u<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+u+"). Corrupted zip ?")},setIndex:function(u){this.checkIndex(u),this.index=u},skip:function(u){this.setIndex(this.index+u)},byteAt:function(u){},readInt:function(u){var d,h=0;for(this.checkOffset(u),d=this.index+u-1;d>=this.index;d--)h=(h<<8)+this.byteAt(d);return this.index+=u,h},readString:function(u){return s.transformTo("string",this.readData(u))},readData:function(u){},lastIndexOfSignature:function(u){},readAndCheckSignature:function(u){},readDate:function(){var u=this.readInt(4);return new Date(Date.UTC(1980+(u>>25&127),(u>>21&15)-1,u>>16&31,u>>11&31,u>>5&63,(31&u)<<1))}},i.exports=c},{"../utils":32}],19:[function(r,i,a){"use strict";var s=r("./Uint8ArrayReader");function c(u){s.call(this,u)}r("../utils").inherits(c,s),c.prototype.readData=function(u){this.checkOffset(u);var d=this.data.slice(this.zero+this.index,this.zero+this.index+u);return this.index+=u,d},i.exports=c},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(r,i,a){"use strict";var s=r("./DataReader");function c(u){s.call(this,u)}r("../utils").inherits(c,s),c.prototype.byteAt=function(u){return this.data.charCodeAt(this.zero+u)},c.prototype.lastIndexOfSignature=function(u){return this.data.lastIndexOf(u)-this.zero},c.prototype.readAndCheckSignature=function(u){return u===this.readData(4)},c.prototype.readData=function(u){this.checkOffset(u);var d=this.data.slice(this.zero+this.index,this.zero+this.index+u);return this.index+=u,d},i.exports=c},{"../utils":32,"./DataReader":18}],21:[function(r,i,a){"use strict";var s=r("./ArrayReader");function c(u){s.call(this,u)}r("../utils").inherits(c,s),c.prototype.readData=function(u){if(this.checkOffset(u),u===0)return new Uint8Array(0);var d=this.data.subarray(this.zero+this.index,this.zero+this.index+u);return this.index+=u,d},i.exports=c},{"../utils":32,"./ArrayReader":17}],22:[function(r,i,a){"use strict";var s=r("../utils"),c=r("../support"),u=r("./ArrayReader"),d=r("./StringReader"),h=r("./NodeBufferReader"),f=r("./Uint8ArrayReader");i.exports=function(b){var v=s.getTypeOf(b);return s.checkSupport(v),v!=="string"||c.uint8array?v==="nodebuffer"?new h(b):c.uint8array?new f(s.transformTo("uint8array",b)):new u(s.transformTo("array",b)):new d(b)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(r,i,a){"use strict";a.LOCAL_FILE_HEADER="PK",a.CENTRAL_FILE_HEADER="PK",a.CENTRAL_DIRECTORY_END="PK",a.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",a.ZIP64_CENTRAL_DIRECTORY_END="PK",a.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(r,i,a){"use strict";var s=r("./GenericWorker"),c=r("../utils");function u(d){s.call(this,"ConvertWorker to "+d),this.destType=d}c.inherits(u,s),u.prototype.processChunk=function(d){this.push({data:c.transformTo(this.destType,d.data),meta:d.meta})},i.exports=u},{"../utils":32,"./GenericWorker":28}],25:[function(r,i,a){"use strict";var s=r("./GenericWorker"),c=r("../crc32");function u(){s.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}r("../utils").inherits(u,s),u.prototype.processChunk=function(d){this.streamInfo.crc32=c(d.data,this.streamInfo.crc32||0),this.push(d)},i.exports=u},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(r,i,a){"use strict";var s=r("../utils"),c=r("./GenericWorker");function u(d){c.call(this,"DataLengthProbe for "+d),this.propName=d,this.withStreamInfo(d,0)}s.inherits(u,c),u.prototype.processChunk=function(d){if(d){var h=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=h+d.data.length}c.prototype.processChunk.call(this,d)},i.exports=u},{"../utils":32,"./GenericWorker":28}],27:[function(r,i,a){"use strict";var s=r("../utils"),c=r("./GenericWorker");function u(d){c.call(this,"DataWorker");var h=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,d.then(function(f){h.dataIsReady=!0,h.data=f,h.max=f&&f.length||0,h.type=s.getTypeOf(f),h.isPaused||h._tickAndRepeat()},function(f){h.error(f)})}s.inherits(u,c),u.prototype.cleanUp=function(){c.prototype.cleanUp.call(this),this.data=null},u.prototype.resume=function(){return!!c.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,s.delay(this._tickAndRepeat,[],this)),!0)},u.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(s.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},u.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var d=null,h=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":d=this.data.substring(this.index,h);break;case"uint8array":d=this.data.subarray(this.index,h);break;case"array":case"nodebuffer":d=this.data.slice(this.index,h)}return this.index=h,this.push({data:d,meta:{percent:this.max?this.index/this.max*100:0}})},i.exports=u},{"../utils":32,"./GenericWorker":28}],28:[function(r,i,a){"use strict";function s(c){this.name=c||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}s.prototype={push:function(c){this.emit("data",c)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(c){this.emit("error",c)}return!0},error:function(c){return!this.isFinished&&(this.isPaused?this.generatedError=c:(this.isFinished=!0,this.emit("error",c),this.previous&&this.previous.error(c),this.cleanUp()),!0)},on:function(c,u){return this._listeners[c].push(u),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(c,u){if(this._listeners[c])for(var d=0;d<this._listeners[c].length;d++)this._listeners[c][d].call(this,u)},pipe:function(c){return c.registerPrevious(this)},registerPrevious:function(c){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=c.streamInfo,this.mergeStreamInfo(),this.previous=c;var u=this;return c.on("data",function(d){u.processChunk(d)}),c.on("end",function(){u.end()}),c.on("error",function(d){u.error(d)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var c=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),c=!0),this.previous&&this.previous.resume(),!c},flush:function(){},processChunk:function(c){this.push(c)},withStreamInfo:function(c,u){return this.extraStreamInfo[c]=u,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var c in this.extraStreamInfo)this.extraStreamInfo.hasOwnProperty(c)&&(this.streamInfo[c]=this.extraStreamInfo[c])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var c="Worker "+this.name;return this.previous?this.previous+" -> "+c:c}},i.exports=s},{}],29:[function(r,i,a){"use strict";var s=r("../utils"),c=r("./ConvertWorker"),u=r("./GenericWorker"),d=r("../base64"),h=r("../support"),f=r("../external"),b=null;if(h.nodestream)try{b=r("../nodejs/NodejsStreamOutputAdapter")}catch{}function v(g,k){return new f.Promise(function(_,E){var M=[],T=g._internalType,C=g._outputType,D=g._mimeType;g.on("data",function(q,Z){M.push(q),k&&k(Z)}).on("error",function(q){M=[],E(q)}).on("end",function(){try{_((function(q,Z,ne){switch(q){case"blob":return s.newBlob(s.transformTo("arraybuffer",Z),ne);case"base64":return d.encode(Z);default:return s.transformTo(q,Z)}})(C,(function(q,Z){var ne,F=0,pe=null,we=0;for(ne=0;ne<Z.length;ne++)we+=Z[ne].length;switch(q){case"string":return Z.join("");case"array":return Array.prototype.concat.apply([],Z);case"uint8array":for(pe=new Uint8Array(we),ne=0;ne<Z.length;ne++)pe.set(Z[ne],F),F+=Z[ne].length;return pe;case"nodebuffer":return Buffer.concat(Z);default:throw new Error("concat : unsupported type '"+q+"'")}})(T,M),D))}catch(q){E(q)}M=[]}).resume()})}function m(g,k,_){var E=k;switch(k){case"blob":case"arraybuffer":E="uint8array";break;case"base64":E="string"}try{this._internalType=E,this._outputType=k,this._mimeType=_,s.checkSupport(E),this._worker=g.pipe(new c(E)),g.lock()}catch(M){this._worker=new u("error"),this._worker.error(M)}}m.prototype={accumulate:function(g){return v(this,g)},on:function(g,k){var _=this;return g==="data"?this._worker.on(g,function(E){k.call(_,E.data,E.meta)}):this._worker.on(g,function(){s.delay(k,arguments,_)}),this},resume:function(){return s.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(g){if(s.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new b(this,{objectMode:this._outputType!=="nodebuffer"},g)}},i.exports=m},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(r,i,a){"use strict";if(a.base64=!0,a.array=!0,a.string=!0,a.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",a.nodebuffer=typeof Buffer<"u",a.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")a.blob=!1;else{var s=new ArrayBuffer(0);try{a.blob=new Blob([s],{type:"application/zip"}).size===0}catch{try{var c=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);c.append(s),a.blob=c.getBlob("application/zip").size===0}catch{a.blob=!1}}}try{a.nodestream=!!r("readable-stream").Readable}catch{a.nodestream=!1}},{"readable-stream":16}],31:[function(r,i,a){"use strict";for(var s=r("./utils"),c=r("./support"),u=r("./nodejsUtils"),d=r("./stream/GenericWorker"),h=new Array(256),f=0;f<256;f++)h[f]=252<=f?6:248<=f?5:240<=f?4:224<=f?3:192<=f?2:1;h[254]=h[254]=1;function b(){d.call(this,"utf-8 decode"),this.leftOver=null}function v(){d.call(this,"utf-8 encode")}a.utf8encode=function(m){return c.nodebuffer?u.newBufferFrom(m,"utf-8"):(function(g){var k,_,E,M,T,C=g.length,D=0;for(M=0;M<C;M++)(64512&(_=g.charCodeAt(M)))==55296&&M+1<C&&(64512&(E=g.charCodeAt(M+1)))==56320&&(_=65536+(_-55296<<10)+(E-56320),M++),D+=_<128?1:_<2048?2:_<65536?3:4;for(k=c.uint8array?new Uint8Array(D):new Array(D),M=T=0;T<D;M++)(64512&(_=g.charCodeAt(M)))==55296&&M+1<C&&(64512&(E=g.charCodeAt(M+1)))==56320&&(_=65536+(_-55296<<10)+(E-56320),M++),_<128?k[T++]=_:(_<2048?k[T++]=192|_>>>6:(_<65536?k[T++]=224|_>>>12:(k[T++]=240|_>>>18,k[T++]=128|_>>>12&63),k[T++]=128|_>>>6&63),k[T++]=128|63&_);return k})(m)},a.utf8decode=function(m){return c.nodebuffer?s.transformTo("nodebuffer",m).toString("utf-8"):(function(g){var k,_,E,M,T=g.length,C=new Array(2*T);for(k=_=0;k<T;)if((E=g[k++])<128)C[_++]=E;else if(4<(M=h[E]))C[_++]=65533,k+=M-1;else{for(E&=M===2?31:M===3?15:7;1<M&&k<T;)E=E<<6|63&g[k++],M--;1<M?C[_++]=65533:E<65536?C[_++]=E:(E-=65536,C[_++]=55296|E>>10&1023,C[_++]=56320|1023&E)}return C.length!==_&&(C.subarray?C=C.subarray(0,_):C.length=_),s.applyFromCharCode(C)})(m=s.transformTo(c.uint8array?"uint8array":"array",m))},s.inherits(b,d),b.prototype.processChunk=function(m){var g=s.transformTo(c.uint8array?"uint8array":"array",m.data);if(this.leftOver&&this.leftOver.length){if(c.uint8array){var k=g;(g=new Uint8Array(k.length+this.leftOver.length)).set(this.leftOver,0),g.set(k,this.leftOver.length)}else g=this.leftOver.concat(g);this.leftOver=null}var _=(function(M,T){var C;for((T=T||M.length)>M.length&&(T=M.length),C=T-1;0<=C&&(192&M[C])==128;)C--;return C<0||C===0?T:C+h[M[C]]>T?C:T})(g),E=g;_!==g.length&&(c.uint8array?(E=g.subarray(0,_),this.leftOver=g.subarray(_,g.length)):(E=g.slice(0,_),this.leftOver=g.slice(_,g.length))),this.push({data:a.utf8decode(E),meta:m.meta})},b.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:a.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},a.Utf8DecodeWorker=b,s.inherits(v,d),v.prototype.processChunk=function(m){this.push({data:a.utf8encode(m.data),meta:m.meta})},a.Utf8EncodeWorker=v},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(r,i,a){"use strict";var s=r("./support"),c=r("./base64"),u=r("./nodejsUtils"),d=r("set-immediate-shim"),h=r("./external");function f(_){return _}function b(_,E){for(var M=0;M<_.length;++M)E[M]=255&_.charCodeAt(M);return E}a.newBlob=function(_,E){a.checkSupport("blob");try{return new Blob([_],{type:E})}catch{try{var M=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return M.append(_),M.getBlob(E)}catch{throw new Error("Bug : can't construct the Blob.")}}};var v={stringifyByChunk:function(_,E,M){var T=[],C=0,D=_.length;if(D<=M)return String.fromCharCode.apply(null,_);for(;C<D;)E==="array"||E==="nodebuffer"?T.push(String.fromCharCode.apply(null,_.slice(C,Math.min(C+M,D)))):T.push(String.fromCharCode.apply(null,_.subarray(C,Math.min(C+M,D)))),C+=M;return T.join("")},stringifyByChar:function(_){for(var E="",M=0;M<_.length;M++)E+=String.fromCharCode(_[M]);return E},applyCanBeUsed:{uint8array:(function(){try{return s.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}})(),nodebuffer:(function(){try{return s.nodebuffer&&String.fromCharCode.apply(null,u.allocBuffer(1)).length===1}catch{return!1}})()}};function m(_){var E=65536,M=a.getTypeOf(_),T=!0;if(M==="uint8array"?T=v.applyCanBeUsed.uint8array:M==="nodebuffer"&&(T=v.applyCanBeUsed.nodebuffer),T)for(;1<E;)try{return v.stringifyByChunk(_,M,E)}catch{E=Math.floor(E/2)}return v.stringifyByChar(_)}function g(_,E){for(var M=0;M<_.length;M++)E[M]=_[M];return E}a.applyFromCharCode=m;var k={};k.string={string:f,array:function(_){return b(_,new Array(_.length))},arraybuffer:function(_){return k.string.uint8array(_).buffer},uint8array:function(_){return b(_,new Uint8Array(_.length))},nodebuffer:function(_){return b(_,u.allocBuffer(_.length))}},k.array={string:m,array:f,arraybuffer:function(_){return new Uint8Array(_).buffer},uint8array:function(_){return new Uint8Array(_)},nodebuffer:function(_){return u.newBufferFrom(_)}},k.arraybuffer={string:function(_){return m(new Uint8Array(_))},array:function(_){return g(new Uint8Array(_),new Array(_.byteLength))},arraybuffer:f,uint8array:function(_){return new Uint8Array(_)},nodebuffer:function(_){return u.newBufferFrom(new Uint8Array(_))}},k.uint8array={string:m,array:function(_){return g(_,new Array(_.length))},arraybuffer:function(_){return _.buffer},uint8array:f,nodebuffer:function(_){return u.newBufferFrom(_)}},k.nodebuffer={string:m,array:function(_){return g(_,new Array(_.length))},arraybuffer:function(_){return k.nodebuffer.uint8array(_).buffer},uint8array:function(_){return g(_,new Uint8Array(_.length))},nodebuffer:f},a.transformTo=function(_,E){return E=E||"",_?(a.checkSupport(_),k[a.getTypeOf(E)][_](E)):E},a.resolve=function(_){for(var E=_.split("/"),M=[],T=0;T<E.length;T++){var C=E[T];C==="."||C===""&&T!==0&&T!==E.length-1||(C===".."?M.pop():M.push(C))}return M.join("/")},a.getTypeOf=function(_){return typeof _=="string"?"string":Object.prototype.toString.call(_)==="[object Array]"?"array":s.nodebuffer&&u.isBuffer(_)?"nodebuffer":s.uint8array&&_ instanceof Uint8Array?"uint8array":s.arraybuffer&&_ instanceof ArrayBuffer?"arraybuffer":void 0},a.checkSupport=function(_){if(!s[_.toLowerCase()])throw new Error(_+" is not supported by this platform")},a.MAX_VALUE_16BITS=65535,a.MAX_VALUE_32BITS=-1,a.pretty=function(_){var E,M,T="";for(M=0;M<(_||"").length;M++)T+="\\x"+((E=_.charCodeAt(M))<16?"0":"")+E.toString(16).toUpperCase();return T},a.delay=function(_,E,M){d(function(){_.apply(M||null,E||[])})},a.inherits=function(_,E){function M(){}M.prototype=E.prototype,_.prototype=new M},a.extend=function(){var _,E,M={};for(_=0;_<arguments.length;_++)for(E in arguments[_])arguments[_].hasOwnProperty(E)&&M[E]===void 0&&(M[E]=arguments[_][E]);return M},a.prepareContent=function(_,E,M,T,C){return h.Promise.resolve(E).then(function(D){return s.blob&&(D instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(D))!==-1)&&typeof FileReader<"u"?new h.Promise(function(q,Z){var ne=new FileReader;ne.onload=function(F){q(F.target.result)},ne.onerror=function(F){Z(F.target.error)},ne.readAsArrayBuffer(D)}):D}).then(function(D){var q=a.getTypeOf(D);return q?(q==="arraybuffer"?D=a.transformTo("uint8array",D):q==="string"&&(C?D=c.decode(D):M&&T!==!0&&(D=(function(Z){return b(Z,s.uint8array?new Uint8Array(Z.length):new Array(Z.length))})(D))),D):h.Promise.reject(new Error("Can't read the data of '"+_+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,"set-immediate-shim":54}],33:[function(r,i,a){"use strict";var s=r("./reader/readerFor"),c=r("./utils"),u=r("./signature"),d=r("./zipEntry"),h=(r("./utf8"),r("./support"));function f(b){this.files=[],this.loadOptions=b}f.prototype={checkSignature:function(b){if(!this.reader.readAndCheckSignature(b)){this.reader.index-=4;var v=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+c.pretty(v)+", expected "+c.pretty(b)+")")}},isSignature:function(b,v){var m=this.reader.index;this.reader.setIndex(b);var g=this.reader.readString(4)===v;return this.reader.setIndex(m),g},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var b=this.reader.readData(this.zipCommentLength),v=h.uint8array?"uint8array":"array",m=c.transformTo(v,b);this.zipComment=this.loadOptions.decodeFileName(m)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var b,v,m,g=this.zip64EndOfCentralSize-44;0<g;)b=this.reader.readInt(2),v=this.reader.readInt(4),m=this.reader.readData(v),this.zip64ExtensibleData[b]={id:b,length:v,value:m}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var b,v;for(b=0;b<this.files.length;b++)v=this.files[b],this.reader.setIndex(v.localHeaderOffset),this.checkSignature(u.LOCAL_FILE_HEADER),v.readLocalPart(this.reader),v.handleUTF8(),v.processAttributes()},readCentralDir:function(){var b;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(u.CENTRAL_FILE_HEADER);)(b=new d({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(b);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var b=this.reader.lastIndexOfSignature(u.CENTRAL_DIRECTORY_END);if(b<0)throw this.isSignature(0,u.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(b);var v=b;if(this.checkSignature(u.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===c.MAX_VALUE_16BITS||this.diskWithCentralDirStart===c.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===c.MAX_VALUE_16BITS||this.centralDirRecords===c.MAX_VALUE_16BITS||this.centralDirSize===c.MAX_VALUE_32BITS||this.centralDirOffset===c.MAX_VALUE_32BITS){if(this.zip64=!0,(b=this.reader.lastIndexOfSignature(u.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(b),this.checkSignature(u.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,u.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(u.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(u.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var m=this.centralDirOffset+this.centralDirSize;this.zip64&&(m+=20,m+=12+this.zip64EndOfCentralSize);var g=v-m;if(0<g)this.isSignature(v,u.CENTRAL_FILE_HEADER)||(this.reader.zero=g);else if(g<0)throw new Error("Corrupted zip: missing "+Math.abs(g)+" bytes.")},prepareReader:function(b){this.reader=s(b)},load:function(b){this.prepareReader(b),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},i.exports=f},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utf8":31,"./utils":32,"./zipEntry":34}],34:[function(r,i,a){"use strict";var s=r("./reader/readerFor"),c=r("./utils"),u=r("./compressedObject"),d=r("./crc32"),h=r("./utf8"),f=r("./compressions"),b=r("./support");function v(m,g){this.options=m,this.loadOptions=g}v.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(m){var g,k;if(m.skip(22),this.fileNameLength=m.readInt(2),k=m.readInt(2),this.fileName=m.readData(this.fileNameLength),m.skip(k),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((g=(function(_){for(var E in f)if(f.hasOwnProperty(E)&&f[E].magic===_)return f[E];return null})(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+c.pretty(this.compressionMethod)+" unknown (inner file : "+c.transformTo("string",this.fileName)+")");this.decompressed=new u(this.compressedSize,this.uncompressedSize,this.crc32,g,m.readData(this.compressedSize))},readCentralPart:function(m){this.versionMadeBy=m.readInt(2),m.skip(2),this.bitFlag=m.readInt(2),this.compressionMethod=m.readString(2),this.date=m.readDate(),this.crc32=m.readInt(4),this.compressedSize=m.readInt(4),this.uncompressedSize=m.readInt(4);var g=m.readInt(2);if(this.extraFieldsLength=m.readInt(2),this.fileCommentLength=m.readInt(2),this.diskNumberStart=m.readInt(2),this.internalFileAttributes=m.readInt(2),this.externalFileAttributes=m.readInt(4),this.localHeaderOffset=m.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");m.skip(g),this.readExtraFields(m),this.parseZIP64ExtraField(m),this.fileComment=m.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var m=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),m==0&&(this.dosPermissions=63&this.externalFileAttributes),m==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(m){if(this.extraFields[1]){var g=s(this.extraFields[1].value);this.uncompressedSize===c.MAX_VALUE_32BITS&&(this.uncompressedSize=g.readInt(8)),this.compressedSize===c.MAX_VALUE_32BITS&&(this.compressedSize=g.readInt(8)),this.localHeaderOffset===c.MAX_VALUE_32BITS&&(this.localHeaderOffset=g.readInt(8)),this.diskNumberStart===c.MAX_VALUE_32BITS&&(this.diskNumberStart=g.readInt(4))}},readExtraFields:function(m){var g,k,_,E=m.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});m.index+4<E;)g=m.readInt(2),k=m.readInt(2),_=m.readData(k),this.extraFields[g]={id:g,length:k,value:_};m.setIndex(E)},handleUTF8:function(){var m=b.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=h.utf8decode(this.fileName),this.fileCommentStr=h.utf8decode(this.fileComment);else{var g=this.findExtraFieldUnicodePath();if(g!==null)this.fileNameStr=g;else{var k=c.transformTo(m,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(k)}var _=this.findExtraFieldUnicodeComment();if(_!==null)this.fileCommentStr=_;else{var E=c.transformTo(m,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(E)}}},findExtraFieldUnicodePath:function(){var m=this.extraFields[28789];if(m){var g=s(m.value);return g.readInt(1)!==1||d(this.fileName)!==g.readInt(4)?null:h.utf8decode(g.readData(m.length-5))}return null},findExtraFieldUnicodeComment:function(){var m=this.extraFields[25461];if(m){var g=s(m.value);return g.readInt(1)!==1||d(this.fileComment)!==g.readInt(4)?null:h.utf8decode(g.readData(m.length-5))}return null}},i.exports=v},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(r,i,a){"use strict";function s(g,k,_){this.name=g,this.dir=_.dir,this.date=_.date,this.comment=_.comment,this.unixPermissions=_.unixPermissions,this.dosPermissions=_.dosPermissions,this._data=k,this._dataBinary=_.binary,this.options={compression:_.compression,compressionOptions:_.compressionOptions}}var c=r("./stream/StreamHelper"),u=r("./stream/DataWorker"),d=r("./utf8"),h=r("./compressedObject"),f=r("./stream/GenericWorker");s.prototype={internalStream:function(g){var k=null,_="string";try{if(!g)throw new Error("No output type specified.");var E=(_=g.toLowerCase())==="string"||_==="text";_!=="binarystring"&&_!=="text"||(_="string"),k=this._decompressWorker();var M=!this._dataBinary;M&&!E&&(k=k.pipe(new d.Utf8EncodeWorker)),!M&&E&&(k=k.pipe(new d.Utf8DecodeWorker))}catch(T){(k=new f("error")).error(T)}return new c(k,_,"")},async:function(g,k){return this.internalStream(g).accumulate(k)},nodeStream:function(g,k){return this.internalStream(g||"nodebuffer").toNodejsStream(k)},_compressWorker:function(g,k){if(this._data instanceof h&&this._data.compression.magic===g.magic)return this._data.getCompressedWorker();var _=this._decompressWorker();return this._dataBinary||(_=_.pipe(new d.Utf8EncodeWorker)),h.createWorkerFrom(_,g,k)},_decompressWorker:function(){return this._data instanceof h?this._data.getContentWorker():this._data instanceof f?this._data:new u(this._data)}};for(var b=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],v=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},m=0;m<b.length;m++)s.prototype[b[m]]=v;i.exports=s},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(r,i,a){(function(s){"use strict";var c,u,d=s.MutationObserver||s.WebKitMutationObserver;if(d){var h=0,f=new d(g),b=s.document.createTextNode("");f.observe(b,{characterData:!0}),c=function(){b.data=h=++h%2}}else if(s.setImmediate||s.MessageChannel===void 0)c="document"in s&&"onreadystatechange"in s.document.createElement("script")?function(){var k=s.document.createElement("script");k.onreadystatechange=function(){g(),k.onreadystatechange=null,k.parentNode.removeChild(k),k=null},s.document.documentElement.appendChild(k)}:function(){setTimeout(g,0)};else{var v=new s.MessageChannel;v.port1.onmessage=g,c=function(){v.port2.postMessage(0)}}var m=[];function g(){var k,_;u=!0;for(var E=m.length;E;){for(_=m,m=[],k=-1;++k<E;)_[k]();E=m.length}u=!1}i.exports=function(k){m.push(k)!==1||u||c()}}).call(this,typeof global<"u"?global:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(r,i,a){"use strict";var s=r("immediate");function c(){}var u={},d=["REJECTED"],h=["FULFILLED"],f=["PENDING"];function b(E){if(typeof E!="function")throw new TypeError("resolver must be a function");this.state=f,this.queue=[],this.outcome=void 0,E!==c&&k(this,E)}function v(E,M,T){this.promise=E,typeof M=="function"&&(this.onFulfilled=M,this.callFulfilled=this.otherCallFulfilled),typeof T=="function"&&(this.onRejected=T,this.callRejected=this.otherCallRejected)}function m(E,M,T){s(function(){var C;try{C=M(T)}catch(D){return u.reject(E,D)}C===E?u.reject(E,new TypeError("Cannot resolve promise with itself")):u.resolve(E,C)})}function g(E){var M=E&&E.then;if(E&&(typeof E=="object"||typeof E=="function")&&typeof M=="function")return function(){M.apply(E,arguments)}}function k(E,M){var T=!1;function C(Z){T||(T=!0,u.reject(E,Z))}function D(Z){T||(T=!0,u.resolve(E,Z))}var q=_(function(){M(D,C)});q.status==="error"&&C(q.value)}function _(E,M){var T={};try{T.value=E(M),T.status="success"}catch(C){T.status="error",T.value=C}return T}(i.exports=b).prototype.finally=function(E){if(typeof E!="function")return this;var M=this.constructor;return this.then(function(T){return M.resolve(E()).then(function(){return T})},function(T){return M.resolve(E()).then(function(){throw T})})},b.prototype.catch=function(E){return this.then(null,E)},b.prototype.then=function(E,M){if(typeof E!="function"&&this.state===h||typeof M!="function"&&this.state===d)return this;var T=new this.constructor(c);return this.state!==f?m(T,this.state===h?E:M,this.outcome):this.queue.push(new v(T,E,M)),T},v.prototype.callFulfilled=function(E){u.resolve(this.promise,E)},v.prototype.otherCallFulfilled=function(E){m(this.promise,this.onFulfilled,E)},v.prototype.callRejected=function(E){u.reject(this.promise,E)},v.prototype.otherCallRejected=function(E){m(this.promise,this.onRejected,E)},u.resolve=function(E,M){var T=_(g,M);if(T.status==="error")return u.reject(E,T.value);var C=T.value;if(C)k(E,C);else{E.state=h,E.outcome=M;for(var D=-1,q=E.queue.length;++D<q;)E.queue[D].callFulfilled(M)}return E},u.reject=function(E,M){E.state=d,E.outcome=M;for(var T=-1,C=E.queue.length;++T<C;)E.queue[T].callRejected(M);return E},b.resolve=function(E){return E instanceof this?E:u.resolve(new this(c),E)},b.reject=function(E){var M=new this(c);return u.reject(M,E)},b.all=function(E){var M=this;if(Object.prototype.toString.call(E)!=="[object Array]")return this.reject(new TypeError("must be an array"));var T=E.length,C=!1;if(!T)return this.resolve([]);for(var D=new Array(T),q=0,Z=-1,ne=new this(c);++Z<T;)F(E[Z],Z);return ne;function F(pe,we){M.resolve(pe).then(function(R){D[we]=R,++q!==T||C||(C=!0,u.resolve(ne,D))},function(R){C||(C=!0,u.reject(ne,R))})}},b.race=function(E){var M=this;if(Object.prototype.toString.call(E)!=="[object Array]")return this.reject(new TypeError("must be an array"));var T=E.length,C=!1;if(!T)return this.resolve([]);for(var D=-1,q=new this(c);++D<T;)Z=E[D],M.resolve(Z).then(function(ne){C||(C=!0,u.resolve(q,ne))},function(ne){C||(C=!0,u.reject(q,ne))});var Z;return q}},{immediate:36}],38:[function(r,i,a){"use strict";var s={};(0,r("./lib/utils/common").assign)(s,r("./lib/deflate"),r("./lib/inflate"),r("./lib/zlib/constants")),i.exports=s},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(r,i,a){"use strict";var s=r("./zlib/deflate"),c=r("./utils/common"),u=r("./utils/strings"),d=r("./zlib/messages"),h=r("./zlib/zstream"),f=Object.prototype.toString,b=0,v=-1,m=0,g=8;function k(E){if(!(this instanceof k))return new k(E);this.options=c.assign({level:v,method:g,chunkSize:16384,windowBits:15,memLevel:8,strategy:m,to:""},E||{});var M=this.options;M.raw&&0<M.windowBits?M.windowBits=-M.windowBits:M.gzip&&0<M.windowBits&&M.windowBits<16&&(M.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new h,this.strm.avail_out=0;var T=s.deflateInit2(this.strm,M.level,M.method,M.windowBits,M.memLevel,M.strategy);if(T!==b)throw new Error(d[T]);if(M.header&&s.deflateSetHeader(this.strm,M.header),M.dictionary){var C;if(C=typeof M.dictionary=="string"?u.string2buf(M.dictionary):f.call(M.dictionary)==="[object ArrayBuffer]"?new Uint8Array(M.dictionary):M.dictionary,(T=s.deflateSetDictionary(this.strm,C))!==b)throw new Error(d[T]);this._dict_set=!0}}function _(E,M){var T=new k(M);if(T.push(E,!0),T.err)throw T.msg||d[T.err];return T.result}k.prototype.push=function(E,M){var T,C,D=this.strm,q=this.options.chunkSize;if(this.ended)return!1;C=M===~~M?M:M===!0?4:0,typeof E=="string"?D.input=u.string2buf(E):f.call(E)==="[object ArrayBuffer]"?D.input=new Uint8Array(E):D.input=E,D.next_in=0,D.avail_in=D.input.length;do{if(D.avail_out===0&&(D.output=new c.Buf8(q),D.next_out=0,D.avail_out=q),(T=s.deflate(D,C))!==1&&T!==b)return this.onEnd(T),!(this.ended=!0);D.avail_out!==0&&(D.avail_in!==0||C!==4&&C!==2)||(this.options.to==="string"?this.onData(u.buf2binstring(c.shrinkBuf(D.output,D.next_out))):this.onData(c.shrinkBuf(D.output,D.next_out)))}while((0<D.avail_in||D.avail_out===0)&&T!==1);return C===4?(T=s.deflateEnd(this.strm),this.onEnd(T),this.ended=!0,T===b):C!==2||(this.onEnd(b),!(D.avail_out=0))},k.prototype.onData=function(E){this.chunks.push(E)},k.prototype.onEnd=function(E){E===b&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=c.flattenChunks(this.chunks)),this.chunks=[],this.err=E,this.msg=this.strm.msg},a.Deflate=k,a.deflate=_,a.deflateRaw=function(E,M){return(M=M||{}).raw=!0,_(E,M)},a.gzip=function(E,M){return(M=M||{}).gzip=!0,_(E,M)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(r,i,a){"use strict";var s=r("./zlib/inflate"),c=r("./utils/common"),u=r("./utils/strings"),d=r("./zlib/constants"),h=r("./zlib/messages"),f=r("./zlib/zstream"),b=r("./zlib/gzheader"),v=Object.prototype.toString;function m(k){if(!(this instanceof m))return new m(k);this.options=c.assign({chunkSize:16384,windowBits:0,to:""},k||{});var _=this.options;_.raw&&0<=_.windowBits&&_.windowBits<16&&(_.windowBits=-_.windowBits,_.windowBits===0&&(_.windowBits=-15)),!(0<=_.windowBits&&_.windowBits<16)||k&&k.windowBits||(_.windowBits+=32),15<_.windowBits&&_.windowBits<48&&(15&_.windowBits)==0&&(_.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new f,this.strm.avail_out=0;var E=s.inflateInit2(this.strm,_.windowBits);if(E!==d.Z_OK)throw new Error(h[E]);this.header=new b,s.inflateGetHeader(this.strm,this.header)}function g(k,_){var E=new m(_);if(E.push(k,!0),E.err)throw E.msg||h[E.err];return E.result}m.prototype.push=function(k,_){var E,M,T,C,D,q,Z=this.strm,ne=this.options.chunkSize,F=this.options.dictionary,pe=!1;if(this.ended)return!1;M=_===~~_?_:_===!0?d.Z_FINISH:d.Z_NO_FLUSH,typeof k=="string"?Z.input=u.binstring2buf(k):v.call(k)==="[object ArrayBuffer]"?Z.input=new Uint8Array(k):Z.input=k,Z.next_in=0,Z.avail_in=Z.input.length;do{if(Z.avail_out===0&&(Z.output=new c.Buf8(ne),Z.next_out=0,Z.avail_out=ne),(E=s.inflate(Z,d.Z_NO_FLUSH))===d.Z_NEED_DICT&&F&&(q=typeof F=="string"?u.string2buf(F):v.call(F)==="[object ArrayBuffer]"?new Uint8Array(F):F,E=s.inflateSetDictionary(this.strm,q)),E===d.Z_BUF_ERROR&&pe===!0&&(E=d.Z_OK,pe=!1),E!==d.Z_STREAM_END&&E!==d.Z_OK)return this.onEnd(E),!(this.ended=!0);Z.next_out&&(Z.avail_out!==0&&E!==d.Z_STREAM_END&&(Z.avail_in!==0||M!==d.Z_FINISH&&M!==d.Z_SYNC_FLUSH)||(this.options.to==="string"?(T=u.utf8border(Z.output,Z.next_out),C=Z.next_out-T,D=u.buf2string(Z.output,T),Z.next_out=C,Z.avail_out=ne-C,C&&c.arraySet(Z.output,Z.output,T,C,0),this.onData(D)):this.onData(c.shrinkBuf(Z.output,Z.next_out)))),Z.avail_in===0&&Z.avail_out===0&&(pe=!0)}while((0<Z.avail_in||Z.avail_out===0)&&E!==d.Z_STREAM_END);return E===d.Z_STREAM_END&&(M=d.Z_FINISH),M===d.Z_FINISH?(E=s.inflateEnd(this.strm),this.onEnd(E),this.ended=!0,E===d.Z_OK):M!==d.Z_SYNC_FLUSH||(this.onEnd(d.Z_OK),!(Z.avail_out=0))},m.prototype.onData=function(k){this.chunks.push(k)},m.prototype.onEnd=function(k){k===d.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=c.flattenChunks(this.chunks)),this.chunks=[],this.err=k,this.msg=this.strm.msg},a.Inflate=m,a.inflate=g,a.inflateRaw=function(k,_){return(_=_||{}).raw=!0,g(k,_)},a.ungzip=g},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(r,i,a){"use strict";var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";a.assign=function(d){for(var h=Array.prototype.slice.call(arguments,1);h.length;){var f=h.shift();if(f){if(typeof f!="object")throw new TypeError(f+"must be non-object");for(var b in f)f.hasOwnProperty(b)&&(d[b]=f[b])}}return d},a.shrinkBuf=function(d,h){return d.length===h?d:d.subarray?d.subarray(0,h):(d.length=h,d)};var c={arraySet:function(d,h,f,b,v){if(h.subarray&&d.subarray)d.set(h.subarray(f,f+b),v);else for(var m=0;m<b;m++)d[v+m]=h[f+m]},flattenChunks:function(d){var h,f,b,v,m,g;for(h=b=0,f=d.length;h<f;h++)b+=d[h].length;for(g=new Uint8Array(b),h=v=0,f=d.length;h<f;h++)m=d[h],g.set(m,v),v+=m.length;return g}},u={arraySet:function(d,h,f,b,v){for(var m=0;m<b;m++)d[v+m]=h[f+m]},flattenChunks:function(d){return[].concat.apply([],d)}};a.setTyped=function(d){d?(a.Buf8=Uint8Array,a.Buf16=Uint16Array,a.Buf32=Int32Array,a.assign(a,c)):(a.Buf8=Array,a.Buf16=Array,a.Buf32=Array,a.assign(a,u))},a.setTyped(s)},{}],42:[function(r,i,a){"use strict";var s=r("./common"),c=!0,u=!0;try{String.fromCharCode.apply(null,[0])}catch{c=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{u=!1}for(var d=new s.Buf8(256),h=0;h<256;h++)d[h]=252<=h?6:248<=h?5:240<=h?4:224<=h?3:192<=h?2:1;function f(b,v){if(v<65537&&(b.subarray&&u||!b.subarray&&c))return String.fromCharCode.apply(null,s.shrinkBuf(b,v));for(var m="",g=0;g<v;g++)m+=String.fromCharCode(b[g]);return m}d[254]=d[254]=1,a.string2buf=function(b){var v,m,g,k,_,E=b.length,M=0;for(k=0;k<E;k++)(64512&(m=b.charCodeAt(k)))==55296&&k+1<E&&(64512&(g=b.charCodeAt(k+1)))==56320&&(m=65536+(m-55296<<10)+(g-56320),k++),M+=m<128?1:m<2048?2:m<65536?3:4;for(v=new s.Buf8(M),k=_=0;_<M;k++)(64512&(m=b.charCodeAt(k)))==55296&&k+1<E&&(64512&(g=b.charCodeAt(k+1)))==56320&&(m=65536+(m-55296<<10)+(g-56320),k++),m<128?v[_++]=m:(m<2048?v[_++]=192|m>>>6:(m<65536?v[_++]=224|m>>>12:(v[_++]=240|m>>>18,v[_++]=128|m>>>12&63),v[_++]=128|m>>>6&63),v[_++]=128|63&m);return v},a.buf2binstring=function(b){return f(b,b.length)},a.binstring2buf=function(b){for(var v=new s.Buf8(b.length),m=0,g=v.length;m<g;m++)v[m]=b.charCodeAt(m);return v},a.buf2string=function(b,v){var m,g,k,_,E=v||b.length,M=new Array(2*E);for(m=g=0;m<E;)if((k=b[m++])<128)M[g++]=k;else if(4<(_=d[k]))M[g++]=65533,m+=_-1;else{for(k&=_===2?31:_===3?15:7;1<_&&m<E;)k=k<<6|63&b[m++],_--;1<_?M[g++]=65533:k<65536?M[g++]=k:(k-=65536,M[g++]=55296|k>>10&1023,M[g++]=56320|1023&k)}return f(M,g)},a.utf8border=function(b,v){var m;for((v=v||b.length)>b.length&&(v=b.length),m=v-1;0<=m&&(192&b[m])==128;)m--;return m<0||m===0?v:m+d[b[m]]>v?m:v}},{"./common":41}],43:[function(r,i,a){"use strict";i.exports=function(s,c,u,d){for(var h=65535&s|0,f=s>>>16&65535|0,b=0;u!==0;){for(u-=b=2e3<u?2e3:u;f=f+(h=h+c[d++]|0)|0,--b;);h%=65521,f%=65521}return h|f<<16|0}},{}],44:[function(r,i,a){"use strict";i.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(r,i,a){"use strict";var s=(function(){for(var c,u=[],d=0;d<256;d++){c=d;for(var h=0;h<8;h++)c=1&c?3988292384^c>>>1:c>>>1;u[d]=c}return u})();i.exports=function(c,u,d,h){var f=s,b=h+d;c^=-1;for(var v=h;v<b;v++)c=c>>>8^f[255&(c^u[v])];return-1^c}},{}],46:[function(r,i,a){"use strict";var s,c=r("../utils/common"),u=r("./trees"),d=r("./adler32"),h=r("./crc32"),f=r("./messages"),b=0,v=4,m=0,g=-2,k=-1,_=4,E=2,M=8,T=9,C=286,D=30,q=19,Z=2*C+1,ne=15,F=3,pe=258,we=pe+F+1,R=42,Y=113,A=1,J=2,xe=3,le=4;function Ie(w,X){return w.msg=f[X],X}function oe(w){return(w<<1)-(4<w?9:0)}function Se(w){for(var X=w.length;0<=--X;)w[X]=0}function W(w){var X=w.state,V=X.pending;V>w.avail_out&&(V=w.avail_out),V!==0&&(c.arraySet(w.output,X.pending_buf,X.pending_out,V,w.next_out),w.next_out+=V,X.pending_out+=V,w.total_out+=V,w.avail_out-=V,X.pending-=V,X.pending===0&&(X.pending_out=0))}function H(w,X){u._tr_flush_block(w,0<=w.block_start?w.block_start:-1,w.strstart-w.block_start,X),w.block_start=w.strstart,W(w.strm)}function Ae(w,X){w.pending_buf[w.pending++]=X}function ge(w,X){w.pending_buf[w.pending++]=X>>>8&255,w.pending_buf[w.pending++]=255&X}function he(w,X){var V,O,I=w.max_chain_length,z=w.strstart,ie=w.prev_length,ae=w.nice_match,N=w.strstart>w.w_size-we?w.strstart-(w.w_size-we):0,de=w.window,me=w.w_mask,ue=w.prev,Ee=w.strstart+pe,Je=de[z+ie-1],Ge=de[z+ie];w.prev_length>=w.good_match&&(I>>=2),ae>w.lookahead&&(ae=w.lookahead);do if(de[(V=X)+ie]===Ge&&de[V+ie-1]===Je&&de[V]===de[z]&&de[++V]===de[z+1]){z+=2,V++;do;while(de[++z]===de[++V]&&de[++z]===de[++V]&&de[++z]===de[++V]&&de[++z]===de[++V]&&de[++z]===de[++V]&&de[++z]===de[++V]&&de[++z]===de[++V]&&de[++z]===de[++V]&&z<Ee);if(O=pe-(Ee-z),z=Ee-pe,ie<O){if(w.match_start=X,ae<=(ie=O))break;Je=de[z+ie-1],Ge=de[z+ie]}}while((X=ue[X&me])>N&&--I!=0);return ie<=w.lookahead?ie:w.lookahead}function je(w){var X,V,O,I,z,ie,ae,N,de,me,ue=w.w_size;do{if(I=w.window_size-w.lookahead-w.strstart,w.strstart>=ue+(ue-we)){for(c.arraySet(w.window,w.window,ue,ue,0),w.match_start-=ue,w.strstart-=ue,w.block_start-=ue,X=V=w.hash_size;O=w.head[--X],w.head[X]=ue<=O?O-ue:0,--V;);for(X=V=ue;O=w.prev[--X],w.prev[X]=ue<=O?O-ue:0,--V;);I+=ue}if(w.strm.avail_in===0)break;if(ie=w.strm,ae=w.window,N=w.strstart+w.lookahead,de=I,me=void 0,me=ie.avail_in,de<me&&(me=de),V=me===0?0:(ie.avail_in-=me,c.arraySet(ae,ie.input,ie.next_in,me,N),ie.state.wrap===1?ie.adler=d(ie.adler,ae,me,N):ie.state.wrap===2&&(ie.adler=h(ie.adler,ae,me,N)),ie.next_in+=me,ie.total_in+=me,me),w.lookahead+=V,w.lookahead+w.insert>=F)for(z=w.strstart-w.insert,w.ins_h=w.window[z],w.ins_h=(w.ins_h<<w.hash_shift^w.window[z+1])&w.hash_mask;w.insert&&(w.ins_h=(w.ins_h<<w.hash_shift^w.window[z+F-1])&w.hash_mask,w.prev[z&w.w_mask]=w.head[w.ins_h],w.head[w.ins_h]=z,z++,w.insert--,!(w.lookahead+w.insert<F)););}while(w.lookahead<we&&w.strm.avail_in!==0)}function ft(w,X){for(var V,O;;){if(w.lookahead<we){if(je(w),w.lookahead<we&&X===b)return A;if(w.lookahead===0)break}if(V=0,w.lookahead>=F&&(w.ins_h=(w.ins_h<<w.hash_shift^w.window[w.strstart+F-1])&w.hash_mask,V=w.prev[w.strstart&w.w_mask]=w.head[w.ins_h],w.head[w.ins_h]=w.strstart),V!==0&&w.strstart-V<=w.w_size-we&&(w.match_length=he(w,V)),w.match_length>=F)if(O=u._tr_tally(w,w.strstart-w.match_start,w.match_length-F),w.lookahead-=w.match_length,w.match_length<=w.max_lazy_match&&w.lookahead>=F){for(w.match_length--;w.strstart++,w.ins_h=(w.ins_h<<w.hash_shift^w.window[w.strstart+F-1])&w.hash_mask,V=w.prev[w.strstart&w.w_mask]=w.head[w.ins_h],w.head[w.ins_h]=w.strstart,--w.match_length!=0;);w.strstart++}else w.strstart+=w.match_length,w.match_length=0,w.ins_h=w.window[w.strstart],w.ins_h=(w.ins_h<<w.hash_shift^w.window[w.strstart+1])&w.hash_mask;else O=u._tr_tally(w,0,w.window[w.strstart]),w.lookahead--,w.strstart++;if(O&&(H(w,!1),w.strm.avail_out===0))return A}return w.insert=w.strstart<F-1?w.strstart:F-1,X===v?(H(w,!0),w.strm.avail_out===0?xe:le):w.last_lit&&(H(w,!1),w.strm.avail_out===0)?A:J}function We(w,X){for(var V,O,I;;){if(w.lookahead<we){if(je(w),w.lookahead<we&&X===b)return A;if(w.lookahead===0)break}if(V=0,w.lookahead>=F&&(w.ins_h=(w.ins_h<<w.hash_shift^w.window[w.strstart+F-1])&w.hash_mask,V=w.prev[w.strstart&w.w_mask]=w.head[w.ins_h],w.head[w.ins_h]=w.strstart),w.prev_length=w.match_length,w.prev_match=w.match_start,w.match_length=F-1,V!==0&&w.prev_length<w.max_lazy_match&&w.strstart-V<=w.w_size-we&&(w.match_length=he(w,V),w.match_length<=5&&(w.strategy===1||w.match_length===F&&4096<w.strstart-w.match_start)&&(w.match_length=F-1)),w.prev_length>=F&&w.match_length<=w.prev_length){for(I=w.strstart+w.lookahead-F,O=u._tr_tally(w,w.strstart-1-w.prev_match,w.prev_length-F),w.lookahead-=w.prev_length-1,w.prev_length-=2;++w.strstart<=I&&(w.ins_h=(w.ins_h<<w.hash_shift^w.window[w.strstart+F-1])&w.hash_mask,V=w.prev[w.strstart&w.w_mask]=w.head[w.ins_h],w.head[w.ins_h]=w.strstart),--w.prev_length!=0;);if(w.match_available=0,w.match_length=F-1,w.strstart++,O&&(H(w,!1),w.strm.avail_out===0))return A}else if(w.match_available){if((O=u._tr_tally(w,0,w.window[w.strstart-1]))&&H(w,!1),w.strstart++,w.lookahead--,w.strm.avail_out===0)return A}else w.match_available=1,w.strstart++,w.lookahead--}return w.match_available&&(O=u._tr_tally(w,0,w.window[w.strstart-1]),w.match_available=0),w.insert=w.strstart<F-1?w.strstart:F-1,X===v?(H(w,!0),w.strm.avail_out===0?xe:le):w.last_lit&&(H(w,!1),w.strm.avail_out===0)?A:J}function Fe(w,X,V,O,I){this.good_length=w,this.max_lazy=X,this.nice_length=V,this.max_chain=O,this.func=I}function ct(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=M,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new c.Buf16(2*Z),this.dyn_dtree=new c.Buf16(2*(2*D+1)),this.bl_tree=new c.Buf16(2*(2*q+1)),Se(this.dyn_ltree),Se(this.dyn_dtree),Se(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new c.Buf16(ne+1),this.heap=new c.Buf16(2*C+1),Se(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new c.Buf16(2*C+1),Se(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function pt(w){var X;return w&&w.state?(w.total_in=w.total_out=0,w.data_type=E,(X=w.state).pending=0,X.pending_out=0,X.wrap<0&&(X.wrap=-X.wrap),X.status=X.wrap?R:Y,w.adler=X.wrap===2?0:1,X.last_flush=b,u._tr_init(X),m):Ie(w,g)}function Ut(w){var X=pt(w);return X===m&&(function(V){V.window_size=2*V.w_size,Se(V.head),V.max_lazy_match=s[V.level].max_lazy,V.good_match=s[V.level].good_length,V.nice_match=s[V.level].nice_length,V.max_chain_length=s[V.level].max_chain,V.strstart=0,V.block_start=0,V.lookahead=0,V.insert=0,V.match_length=V.prev_length=F-1,V.match_available=0,V.ins_h=0})(w.state),X}function Nt(w,X,V,O,I,z){if(!w)return g;var ie=1;if(X===k&&(X=6),O<0?(ie=0,O=-O):15<O&&(ie=2,O-=16),I<1||T<I||V!==M||O<8||15<O||X<0||9<X||z<0||_<z)return Ie(w,g);O===8&&(O=9);var ae=new ct;return(w.state=ae).strm=w,ae.wrap=ie,ae.gzhead=null,ae.w_bits=O,ae.w_size=1<<ae.w_bits,ae.w_mask=ae.w_size-1,ae.hash_bits=I+7,ae.hash_size=1<<ae.hash_bits,ae.hash_mask=ae.hash_size-1,ae.hash_shift=~~((ae.hash_bits+F-1)/F),ae.window=new c.Buf8(2*ae.w_size),ae.head=new c.Buf16(ae.hash_size),ae.prev=new c.Buf16(ae.w_size),ae.lit_bufsize=1<<I+6,ae.pending_buf_size=4*ae.lit_bufsize,ae.pending_buf=new c.Buf8(ae.pending_buf_size),ae.d_buf=1*ae.lit_bufsize,ae.l_buf=3*ae.lit_bufsize,ae.level=X,ae.strategy=z,ae.method=V,Ut(w)}s=[new Fe(0,0,0,0,function(w,X){var V=65535;for(V>w.pending_buf_size-5&&(V=w.pending_buf_size-5);;){if(w.lookahead<=1){if(je(w),w.lookahead===0&&X===b)return A;if(w.lookahead===0)break}w.strstart+=w.lookahead,w.lookahead=0;var O=w.block_start+V;if((w.strstart===0||w.strstart>=O)&&(w.lookahead=w.strstart-O,w.strstart=O,H(w,!1),w.strm.avail_out===0)||w.strstart-w.block_start>=w.w_size-we&&(H(w,!1),w.strm.avail_out===0))return A}return w.insert=0,X===v?(H(w,!0),w.strm.avail_out===0?xe:le):(w.strstart>w.block_start&&(H(w,!1),w.strm.avail_out),A)}),new Fe(4,4,8,4,ft),new Fe(4,5,16,8,ft),new Fe(4,6,32,32,ft),new Fe(4,4,16,16,We),new Fe(8,16,32,32,We),new Fe(8,16,128,128,We),new Fe(8,32,128,256,We),new Fe(32,128,258,1024,We),new Fe(32,258,258,4096,We)],a.deflateInit=function(w,X){return Nt(w,X,M,15,8,0)},a.deflateInit2=Nt,a.deflateReset=Ut,a.deflateResetKeep=pt,a.deflateSetHeader=function(w,X){return w&&w.state?w.state.wrap!==2?g:(w.state.gzhead=X,m):g},a.deflate=function(w,X){var V,O,I,z;if(!w||!w.state||5<X||X<0)return w?Ie(w,g):g;if(O=w.state,!w.output||!w.input&&w.avail_in!==0||O.status===666&&X!==v)return Ie(w,w.avail_out===0?-5:g);if(O.strm=w,V=O.last_flush,O.last_flush=X,O.status===R)if(O.wrap===2)w.adler=0,Ae(O,31),Ae(O,139),Ae(O,8),O.gzhead?(Ae(O,(O.gzhead.text?1:0)+(O.gzhead.hcrc?2:0)+(O.gzhead.extra?4:0)+(O.gzhead.name?8:0)+(O.gzhead.comment?16:0)),Ae(O,255&O.gzhead.time),Ae(O,O.gzhead.time>>8&255),Ae(O,O.gzhead.time>>16&255),Ae(O,O.gzhead.time>>24&255),Ae(O,O.level===9?2:2<=O.strategy||O.level<2?4:0),Ae(O,255&O.gzhead.os),O.gzhead.extra&&O.gzhead.extra.length&&(Ae(O,255&O.gzhead.extra.length),Ae(O,O.gzhead.extra.length>>8&255)),O.gzhead.hcrc&&(w.adler=h(w.adler,O.pending_buf,O.pending,0)),O.gzindex=0,O.status=69):(Ae(O,0),Ae(O,0),Ae(O,0),Ae(O,0),Ae(O,0),Ae(O,O.level===9?2:2<=O.strategy||O.level<2?4:0),Ae(O,3),O.status=Y);else{var ie=M+(O.w_bits-8<<4)<<8;ie|=(2<=O.strategy||O.level<2?0:O.level<6?1:O.level===6?2:3)<<6,O.strstart!==0&&(ie|=32),ie+=31-ie%31,O.status=Y,ge(O,ie),O.strstart!==0&&(ge(O,w.adler>>>16),ge(O,65535&w.adler)),w.adler=1}if(O.status===69)if(O.gzhead.extra){for(I=O.pending;O.gzindex<(65535&O.gzhead.extra.length)&&(O.pending!==O.pending_buf_size||(O.gzhead.hcrc&&O.pending>I&&(w.adler=h(w.adler,O.pending_buf,O.pending-I,I)),W(w),I=O.pending,O.pending!==O.pending_buf_size));)Ae(O,255&O.gzhead.extra[O.gzindex]),O.gzindex++;O.gzhead.hcrc&&O.pending>I&&(w.adler=h(w.adler,O.pending_buf,O.pending-I,I)),O.gzindex===O.gzhead.extra.length&&(O.gzindex=0,O.status=73)}else O.status=73;if(O.status===73)if(O.gzhead.name){I=O.pending;do{if(O.pending===O.pending_buf_size&&(O.gzhead.hcrc&&O.pending>I&&(w.adler=h(w.adler,O.pending_buf,O.pending-I,I)),W(w),I=O.pending,O.pending===O.pending_buf_size)){z=1;break}z=O.gzindex<O.gzhead.name.length?255&O.gzhead.name.charCodeAt(O.gzindex++):0,Ae(O,z)}while(z!==0);O.gzhead.hcrc&&O.pending>I&&(w.adler=h(w.adler,O.pending_buf,O.pending-I,I)),z===0&&(O.gzindex=0,O.status=91)}else O.status=91;if(O.status===91)if(O.gzhead.comment){I=O.pending;do{if(O.pending===O.pending_buf_size&&(O.gzhead.hcrc&&O.pending>I&&(w.adler=h(w.adler,O.pending_buf,O.pending-I,I)),W(w),I=O.pending,O.pending===O.pending_buf_size)){z=1;break}z=O.gzindex<O.gzhead.comment.length?255&O.gzhead.comment.charCodeAt(O.gzindex++):0,Ae(O,z)}while(z!==0);O.gzhead.hcrc&&O.pending>I&&(w.adler=h(w.adler,O.pending_buf,O.pending-I,I)),z===0&&(O.status=103)}else O.status=103;if(O.status===103&&(O.gzhead.hcrc?(O.pending+2>O.pending_buf_size&&W(w),O.pending+2<=O.pending_buf_size&&(Ae(O,255&w.adler),Ae(O,w.adler>>8&255),w.adler=0,O.status=Y)):O.status=Y),O.pending!==0){if(W(w),w.avail_out===0)return O.last_flush=-1,m}else if(w.avail_in===0&&oe(X)<=oe(V)&&X!==v)return Ie(w,-5);if(O.status===666&&w.avail_in!==0)return Ie(w,-5);if(w.avail_in!==0||O.lookahead!==0||X!==b&&O.status!==666){var ae=O.strategy===2?(function(N,de){for(var me;;){if(N.lookahead===0&&(je(N),N.lookahead===0)){if(de===b)return A;break}if(N.match_length=0,me=u._tr_tally(N,0,N.window[N.strstart]),N.lookahead--,N.strstart++,me&&(H(N,!1),N.strm.avail_out===0))return A}return N.insert=0,de===v?(H(N,!0),N.strm.avail_out===0?xe:le):N.last_lit&&(H(N,!1),N.strm.avail_out===0)?A:J})(O,X):O.strategy===3?(function(N,de){for(var me,ue,Ee,Je,Ge=N.window;;){if(N.lookahead<=pe){if(je(N),N.lookahead<=pe&&de===b)return A;if(N.lookahead===0)break}if(N.match_length=0,N.lookahead>=F&&0<N.strstart&&(ue=Ge[Ee=N.strstart-1])===Ge[++Ee]&&ue===Ge[++Ee]&&ue===Ge[++Ee]){Je=N.strstart+pe;do;while(ue===Ge[++Ee]&&ue===Ge[++Ee]&&ue===Ge[++Ee]&&ue===Ge[++Ee]&&ue===Ge[++Ee]&&ue===Ge[++Ee]&&ue===Ge[++Ee]&&ue===Ge[++Ee]&&Ee<Je);N.match_length=pe-(Je-Ee),N.match_length>N.lookahead&&(N.match_length=N.lookahead)}if(N.match_length>=F?(me=u._tr_tally(N,1,N.match_length-F),N.lookahead-=N.match_length,N.strstart+=N.match_length,N.match_length=0):(me=u._tr_tally(N,0,N.window[N.strstart]),N.lookahead--,N.strstart++),me&&(H(N,!1),N.strm.avail_out===0))return A}return N.insert=0,de===v?(H(N,!0),N.strm.avail_out===0?xe:le):N.last_lit&&(H(N,!1),N.strm.avail_out===0)?A:J})(O,X):s[O.level].func(O,X);if(ae!==xe&&ae!==le||(O.status=666),ae===A||ae===xe)return w.avail_out===0&&(O.last_flush=-1),m;if(ae===J&&(X===1?u._tr_align(O):X!==5&&(u._tr_stored_block(O,0,0,!1),X===3&&(Se(O.head),O.lookahead===0&&(O.strstart=0,O.block_start=0,O.insert=0))),W(w),w.avail_out===0))return O.last_flush=-1,m}return X!==v?m:O.wrap<=0?1:(O.wrap===2?(Ae(O,255&w.adler),Ae(O,w.adler>>8&255),Ae(O,w.adler>>16&255),Ae(O,w.adler>>24&255),Ae(O,255&w.total_in),Ae(O,w.total_in>>8&255),Ae(O,w.total_in>>16&255),Ae(O,w.total_in>>24&255)):(ge(O,w.adler>>>16),ge(O,65535&w.adler)),W(w),0<O.wrap&&(O.wrap=-O.wrap),O.pending!==0?m:1)},a.deflateEnd=function(w){var X;return w&&w.state?(X=w.state.status)!==R&&X!==69&&X!==73&&X!==91&&X!==103&&X!==Y&&X!==666?Ie(w,g):(w.state=null,X===Y?Ie(w,-3):m):g},a.deflateSetDictionary=function(w,X){var V,O,I,z,ie,ae,N,de,me=X.length;if(!w||!w.state||(z=(V=w.state).wrap)===2||z===1&&V.status!==R||V.lookahead)return g;for(z===1&&(w.adler=d(w.adler,X,me,0)),V.wrap=0,me>=V.w_size&&(z===0&&(Se(V.head),V.strstart=0,V.block_start=0,V.insert=0),de=new c.Buf8(V.w_size),c.arraySet(de,X,me-V.w_size,V.w_size,0),X=de,me=V.w_size),ie=w.avail_in,ae=w.next_in,N=w.input,w.avail_in=me,w.next_in=0,w.input=X,je(V);V.lookahead>=F;){for(O=V.strstart,I=V.lookahead-(F-1);V.ins_h=(V.ins_h<<V.hash_shift^V.window[O+F-1])&V.hash_mask,V.prev[O&V.w_mask]=V.head[V.ins_h],V.head[V.ins_h]=O,O++,--I;);V.strstart=O,V.lookahead=F-1,je(V)}return V.strstart+=V.lookahead,V.block_start=V.strstart,V.insert=V.lookahead,V.lookahead=0,V.match_length=V.prev_length=F-1,V.match_available=0,w.next_in=ae,w.input=N,w.avail_in=ie,V.wrap=z,m},a.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(r,i,a){"use strict";i.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(r,i,a){"use strict";i.exports=function(s,c){var u=s.state,d=s.next_in,h,f,b,v,m,g,k,_,E,M,T,C,D,q,Z,ne,F,pe,we,R,Y,A=s.input,J;h=d+(s.avail_in-5),f=s.next_out,J=s.output,b=f-(c-s.avail_out),v=f+(s.avail_out-257),m=u.dmax,g=u.wsize,k=u.whave,_=u.wnext,E=u.window,M=u.hold,T=u.bits,C=u.lencode,D=u.distcode,q=(1<<u.lenbits)-1,Z=(1<<u.distbits)-1;e:do{T<15&&(M+=A[d++]<<T,T+=8,M+=A[d++]<<T,T+=8),ne=C[M&q];t:for(;;){if(M>>>=F=ne>>>24,T-=F,(F=ne>>>16&255)===0)J[f++]=65535&ne;else{if(!(16&F)){if((64&F)==0){ne=C[(65535&ne)+(M&(1<<F)-1)];continue t}if(32&F){u.mode=12;break e}s.msg="invalid literal/length code",u.mode=30;break e}pe=65535&ne,(F&=15)&&(T<F&&(M+=A[d++]<<T,T+=8),pe+=M&(1<<F)-1,M>>>=F,T-=F),T<15&&(M+=A[d++]<<T,T+=8,M+=A[d++]<<T,T+=8),ne=D[M&Z];n:for(;;){if(M>>>=F=ne>>>24,T-=F,!(16&(F=ne>>>16&255))){if((64&F)==0){ne=D[(65535&ne)+(M&(1<<F)-1)];continue n}s.msg="invalid distance code",u.mode=30;break e}if(we=65535&ne,T<(F&=15)&&(M+=A[d++]<<T,(T+=8)<F&&(M+=A[d++]<<T,T+=8)),m<(we+=M&(1<<F)-1)){s.msg="invalid distance too far back",u.mode=30;break e}if(M>>>=F,T-=F,(F=f-b)<we){if(k<(F=we-F)&&u.sane){s.msg="invalid distance too far back",u.mode=30;break e}if(Y=E,(R=0)===_){if(R+=g-F,F<pe){for(pe-=F;J[f++]=E[R++],--F;);R=f-we,Y=J}}else if(_<F){if(R+=g+_-F,(F-=_)<pe){for(pe-=F;J[f++]=E[R++],--F;);if(R=0,_<pe){for(pe-=F=_;J[f++]=E[R++],--F;);R=f-we,Y=J}}}else if(R+=_-F,F<pe){for(pe-=F;J[f++]=E[R++],--F;);R=f-we,Y=J}for(;2<pe;)J[f++]=Y[R++],J[f++]=Y[R++],J[f++]=Y[R++],pe-=3;pe&&(J[f++]=Y[R++],1<pe&&(J[f++]=Y[R++]))}else{for(R=f-we;J[f++]=J[R++],J[f++]=J[R++],J[f++]=J[R++],2<(pe-=3););pe&&(J[f++]=J[R++],1<pe&&(J[f++]=J[R++]))}break}}break}}while(d<h&&f<v);d-=pe=T>>3,M&=(1<<(T-=pe<<3))-1,s.next_in=d,s.next_out=f,s.avail_in=d<h?h-d+5:5-(d-h),s.avail_out=f<v?v-f+257:257-(f-v),u.hold=M,u.bits=T}},{}],49:[function(r,i,a){"use strict";var s=r("../utils/common"),c=r("./adler32"),u=r("./crc32"),d=r("./inffast"),h=r("./inftrees"),f=1,b=2,v=0,m=-2,g=1,k=852,_=592;function E(R){return(R>>>24&255)+(R>>>8&65280)+((65280&R)<<8)+((255&R)<<24)}function M(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new s.Buf16(320),this.work=new s.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function T(R){var Y;return R&&R.state?(Y=R.state,R.total_in=R.total_out=Y.total=0,R.msg="",Y.wrap&&(R.adler=1&Y.wrap),Y.mode=g,Y.last=0,Y.havedict=0,Y.dmax=32768,Y.head=null,Y.hold=0,Y.bits=0,Y.lencode=Y.lendyn=new s.Buf32(k),Y.distcode=Y.distdyn=new s.Buf32(_),Y.sane=1,Y.back=-1,v):m}function C(R){var Y;return R&&R.state?((Y=R.state).wsize=0,Y.whave=0,Y.wnext=0,T(R)):m}function D(R,Y){var A,J;return R&&R.state?(J=R.state,Y<0?(A=0,Y=-Y):(A=1+(Y>>4),Y<48&&(Y&=15)),Y&&(Y<8||15<Y)?m:(J.window!==null&&J.wbits!==Y&&(J.window=null),J.wrap=A,J.wbits=Y,C(R))):m}function q(R,Y){var A,J;return R?(J=new M,(R.state=J).window=null,(A=D(R,Y))!==v&&(R.state=null),A):m}var Z,ne,F=!0;function pe(R){if(F){var Y;for(Z=new s.Buf32(512),ne=new s.Buf32(32),Y=0;Y<144;)R.lens[Y++]=8;for(;Y<256;)R.lens[Y++]=9;for(;Y<280;)R.lens[Y++]=7;for(;Y<288;)R.lens[Y++]=8;for(h(f,R.lens,0,288,Z,0,R.work,{bits:9}),Y=0;Y<32;)R.lens[Y++]=5;h(b,R.lens,0,32,ne,0,R.work,{bits:5}),F=!1}R.lencode=Z,R.lenbits=9,R.distcode=ne,R.distbits=5}function we(R,Y,A,J){var xe,le=R.state;return le.window===null&&(le.wsize=1<<le.wbits,le.wnext=0,le.whave=0,le.window=new s.Buf8(le.wsize)),J>=le.wsize?(s.arraySet(le.window,Y,A-le.wsize,le.wsize,0),le.wnext=0,le.whave=le.wsize):(J<(xe=le.wsize-le.wnext)&&(xe=J),s.arraySet(le.window,Y,A-J,xe,le.wnext),(J-=xe)?(s.arraySet(le.window,Y,A-J,J,0),le.wnext=J,le.whave=le.wsize):(le.wnext+=xe,le.wnext===le.wsize&&(le.wnext=0),le.whave<le.wsize&&(le.whave+=xe))),0}a.inflateReset=C,a.inflateReset2=D,a.inflateResetKeep=T,a.inflateInit=function(R){return q(R,15)},a.inflateInit2=q,a.inflate=function(R,Y){var A,J,xe,le,Ie,oe,Se,W,H,Ae,ge,he,je,ft,We,Fe,ct,pt,Ut,Nt,w,X,V,O,I=0,z=new s.Buf8(4),ie=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!R||!R.state||!R.output||!R.input&&R.avail_in!==0)return m;(A=R.state).mode===12&&(A.mode=13),Ie=R.next_out,xe=R.output,Se=R.avail_out,le=R.next_in,J=R.input,oe=R.avail_in,W=A.hold,H=A.bits,Ae=oe,ge=Se,X=v;e:for(;;)switch(A.mode){case g:if(A.wrap===0){A.mode=13;break}for(;H<16;){if(oe===0)break e;oe--,W+=J[le++]<<H,H+=8}if(2&A.wrap&&W===35615){z[A.check=0]=255&W,z[1]=W>>>8&255,A.check=u(A.check,z,2,0),H=W=0,A.mode=2;break}if(A.flags=0,A.head&&(A.head.done=!1),!(1&A.wrap)||(((255&W)<<8)+(W>>8))%31){R.msg="incorrect header check",A.mode=30;break}if((15&W)!=8){R.msg="unknown compression method",A.mode=30;break}if(H-=4,w=8+(15&(W>>>=4)),A.wbits===0)A.wbits=w;else if(w>A.wbits){R.msg="invalid window size",A.mode=30;break}A.dmax=1<<w,R.adler=A.check=1,A.mode=512&W?10:12,H=W=0;break;case 2:for(;H<16;){if(oe===0)break e;oe--,W+=J[le++]<<H,H+=8}if(A.flags=W,(255&A.flags)!=8){R.msg="unknown compression method",A.mode=30;break}if(57344&A.flags){R.msg="unknown header flags set",A.mode=30;break}A.head&&(A.head.text=W>>8&1),512&A.flags&&(z[0]=255&W,z[1]=W>>>8&255,A.check=u(A.check,z,2,0)),H=W=0,A.mode=3;case 3:for(;H<32;){if(oe===0)break e;oe--,W+=J[le++]<<H,H+=8}A.head&&(A.head.time=W),512&A.flags&&(z[0]=255&W,z[1]=W>>>8&255,z[2]=W>>>16&255,z[3]=W>>>24&255,A.check=u(A.check,z,4,0)),H=W=0,A.mode=4;case 4:for(;H<16;){if(oe===0)break e;oe--,W+=J[le++]<<H,H+=8}A.head&&(A.head.xflags=255&W,A.head.os=W>>8),512&A.flags&&(z[0]=255&W,z[1]=W>>>8&255,A.check=u(A.check,z,2,0)),H=W=0,A.mode=5;case 5:if(1024&A.flags){for(;H<16;){if(oe===0)break e;oe--,W+=J[le++]<<H,H+=8}A.length=W,A.head&&(A.head.extra_len=W),512&A.flags&&(z[0]=255&W,z[1]=W>>>8&255,A.check=u(A.check,z,2,0)),H=W=0}else A.head&&(A.head.extra=null);A.mode=6;case 6:if(1024&A.flags&&(oe<(he=A.length)&&(he=oe),he&&(A.head&&(w=A.head.extra_len-A.length,A.head.extra||(A.head.extra=new Array(A.head.extra_len)),s.arraySet(A.head.extra,J,le,he,w)),512&A.flags&&(A.check=u(A.check,J,he,le)),oe-=he,le+=he,A.length-=he),A.length))break e;A.length=0,A.mode=7;case 7:if(2048&A.flags){if(oe===0)break e;for(he=0;w=J[le+he++],A.head&&w&&A.length<65536&&(A.head.name+=String.fromCharCode(w)),w&&he<oe;);if(512&A.flags&&(A.check=u(A.check,J,he,le)),oe-=he,le+=he,w)break e}else A.head&&(A.head.name=null);A.length=0,A.mode=8;case 8:if(4096&A.flags){if(oe===0)break e;for(he=0;w=J[le+he++],A.head&&w&&A.length<65536&&(A.head.comment+=String.fromCharCode(w)),w&&he<oe;);if(512&A.flags&&(A.check=u(A.check,J,he,le)),oe-=he,le+=he,w)break e}else A.head&&(A.head.comment=null);A.mode=9;case 9:if(512&A.flags){for(;H<16;){if(oe===0)break e;oe--,W+=J[le++]<<H,H+=8}if(W!==(65535&A.check)){R.msg="header crc mismatch",A.mode=30;break}H=W=0}A.head&&(A.head.hcrc=A.flags>>9&1,A.head.done=!0),R.adler=A.check=0,A.mode=12;break;case 10:for(;H<32;){if(oe===0)break e;oe--,W+=J[le++]<<H,H+=8}R.adler=A.check=E(W),H=W=0,A.mode=11;case 11:if(A.havedict===0)return R.next_out=Ie,R.avail_out=Se,R.next_in=le,R.avail_in=oe,A.hold=W,A.bits=H,2;R.adler=A.check=1,A.mode=12;case 12:if(Y===5||Y===6)break e;case 13:if(A.last){W>>>=7&H,H-=7&H,A.mode=27;break}for(;H<3;){if(oe===0)break e;oe--,W+=J[le++]<<H,H+=8}switch(A.last=1&W,H-=1,3&(W>>>=1)){case 0:A.mode=14;break;case 1:if(pe(A),A.mode=20,Y!==6)break;W>>>=2,H-=2;break e;case 2:A.mode=17;break;case 3:R.msg="invalid block type",A.mode=30}W>>>=2,H-=2;break;case 14:for(W>>>=7&H,H-=7&H;H<32;){if(oe===0)break e;oe--,W+=J[le++]<<H,H+=8}if((65535&W)!=(W>>>16^65535)){R.msg="invalid stored block lengths",A.mode=30;break}if(A.length=65535&W,H=W=0,A.mode=15,Y===6)break e;case 15:A.mode=16;case 16:if(he=A.length){if(oe<he&&(he=oe),Se<he&&(he=Se),he===0)break e;s.arraySet(xe,J,le,he,Ie),oe-=he,le+=he,Se-=he,Ie+=he,A.length-=he;break}A.mode=12;break;case 17:for(;H<14;){if(oe===0)break e;oe--,W+=J[le++]<<H,H+=8}if(A.nlen=257+(31&W),W>>>=5,H-=5,A.ndist=1+(31&W),W>>>=5,H-=5,A.ncode=4+(15&W),W>>>=4,H-=4,286<A.nlen||30<A.ndist){R.msg="too many length or distance symbols",A.mode=30;break}A.have=0,A.mode=18;case 18:for(;A.have<A.ncode;){for(;H<3;){if(oe===0)break e;oe--,W+=J[le++]<<H,H+=8}A.lens[ie[A.have++]]=7&W,W>>>=3,H-=3}for(;A.have<19;)A.lens[ie[A.have++]]=0;if(A.lencode=A.lendyn,A.lenbits=7,V={bits:A.lenbits},X=h(0,A.lens,0,19,A.lencode,0,A.work,V),A.lenbits=V.bits,X){R.msg="invalid code lengths set",A.mode=30;break}A.have=0,A.mode=19;case 19:for(;A.have<A.nlen+A.ndist;){for(;Fe=(I=A.lencode[W&(1<<A.lenbits)-1])>>>16&255,ct=65535&I,!((We=I>>>24)<=H);){if(oe===0)break e;oe--,W+=J[le++]<<H,H+=8}if(ct<16)W>>>=We,H-=We,A.lens[A.have++]=ct;else{if(ct===16){for(O=We+2;H<O;){if(oe===0)break e;oe--,W+=J[le++]<<H,H+=8}if(W>>>=We,H-=We,A.have===0){R.msg="invalid bit length repeat",A.mode=30;break}w=A.lens[A.have-1],he=3+(3&W),W>>>=2,H-=2}else if(ct===17){for(O=We+3;H<O;){if(oe===0)break e;oe--,W+=J[le++]<<H,H+=8}H-=We,w=0,he=3+(7&(W>>>=We)),W>>>=3,H-=3}else{for(O=We+7;H<O;){if(oe===0)break e;oe--,W+=J[le++]<<H,H+=8}H-=We,w=0,he=11+(127&(W>>>=We)),W>>>=7,H-=7}if(A.have+he>A.nlen+A.ndist){R.msg="invalid bit length repeat",A.mode=30;break}for(;he--;)A.lens[A.have++]=w}}if(A.mode===30)break;if(A.lens[256]===0){R.msg="invalid code -- missing end-of-block",A.mode=30;break}if(A.lenbits=9,V={bits:A.lenbits},X=h(f,A.lens,0,A.nlen,A.lencode,0,A.work,V),A.lenbits=V.bits,X){R.msg="invalid literal/lengths set",A.mode=30;break}if(A.distbits=6,A.distcode=A.distdyn,V={bits:A.distbits},X=h(b,A.lens,A.nlen,A.ndist,A.distcode,0,A.work,V),A.distbits=V.bits,X){R.msg="invalid distances set",A.mode=30;break}if(A.mode=20,Y===6)break e;case 20:A.mode=21;case 21:if(6<=oe&&258<=Se){R.next_out=Ie,R.avail_out=Se,R.next_in=le,R.avail_in=oe,A.hold=W,A.bits=H,d(R,ge),Ie=R.next_out,xe=R.output,Se=R.avail_out,le=R.next_in,J=R.input,oe=R.avail_in,W=A.hold,H=A.bits,A.mode===12&&(A.back=-1);break}for(A.back=0;Fe=(I=A.lencode[W&(1<<A.lenbits)-1])>>>16&255,ct=65535&I,!((We=I>>>24)<=H);){if(oe===0)break e;oe--,W+=J[le++]<<H,H+=8}if(Fe&&(240&Fe)==0){for(pt=We,Ut=Fe,Nt=ct;Fe=(I=A.lencode[Nt+((W&(1<<pt+Ut)-1)>>pt)])>>>16&255,ct=65535&I,!(pt+(We=I>>>24)<=H);){if(oe===0)break e;oe--,W+=J[le++]<<H,H+=8}W>>>=pt,H-=pt,A.back+=pt}if(W>>>=We,H-=We,A.back+=We,A.length=ct,Fe===0){A.mode=26;break}if(32&Fe){A.back=-1,A.mode=12;break}if(64&Fe){R.msg="invalid literal/length code",A.mode=30;break}A.extra=15&Fe,A.mode=22;case 22:if(A.extra){for(O=A.extra;H<O;){if(oe===0)break e;oe--,W+=J[le++]<<H,H+=8}A.length+=W&(1<<A.extra)-1,W>>>=A.extra,H-=A.extra,A.back+=A.extra}A.was=A.length,A.mode=23;case 23:for(;Fe=(I=A.distcode[W&(1<<A.distbits)-1])>>>16&255,ct=65535&I,!((We=I>>>24)<=H);){if(oe===0)break e;oe--,W+=J[le++]<<H,H+=8}if((240&Fe)==0){for(pt=We,Ut=Fe,Nt=ct;Fe=(I=A.distcode[Nt+((W&(1<<pt+Ut)-1)>>pt)])>>>16&255,ct=65535&I,!(pt+(We=I>>>24)<=H);){if(oe===0)break e;oe--,W+=J[le++]<<H,H+=8}W>>>=pt,H-=pt,A.back+=pt}if(W>>>=We,H-=We,A.back+=We,64&Fe){R.msg="invalid distance code",A.mode=30;break}A.offset=ct,A.extra=15&Fe,A.mode=24;case 24:if(A.extra){for(O=A.extra;H<O;){if(oe===0)break e;oe--,W+=J[le++]<<H,H+=8}A.offset+=W&(1<<A.extra)-1,W>>>=A.extra,H-=A.extra,A.back+=A.extra}if(A.offset>A.dmax){R.msg="invalid distance too far back",A.mode=30;break}A.mode=25;case 25:if(Se===0)break e;if(he=ge-Se,A.offset>he){if((he=A.offset-he)>A.whave&&A.sane){R.msg="invalid distance too far back",A.mode=30;break}je=he>A.wnext?(he-=A.wnext,A.wsize-he):A.wnext-he,he>A.length&&(he=A.length),ft=A.window}else ft=xe,je=Ie-A.offset,he=A.length;for(Se<he&&(he=Se),Se-=he,A.length-=he;xe[Ie++]=ft[je++],--he;);A.length===0&&(A.mode=21);break;case 26:if(Se===0)break e;xe[Ie++]=A.length,Se--,A.mode=21;break;case 27:if(A.wrap){for(;H<32;){if(oe===0)break e;oe--,W|=J[le++]<<H,H+=8}if(ge-=Se,R.total_out+=ge,A.total+=ge,ge&&(R.adler=A.check=A.flags?u(A.check,xe,ge,Ie-ge):c(A.check,xe,ge,Ie-ge)),ge=Se,(A.flags?W:E(W))!==A.check){R.msg="incorrect data check",A.mode=30;break}H=W=0}A.mode=28;case 28:if(A.wrap&&A.flags){for(;H<32;){if(oe===0)break e;oe--,W+=J[le++]<<H,H+=8}if(W!==(4294967295&A.total)){R.msg="incorrect length check",A.mode=30;break}H=W=0}A.mode=29;case 29:X=1;break e;case 30:X=-3;break e;case 31:return-4;default:return m}return R.next_out=Ie,R.avail_out=Se,R.next_in=le,R.avail_in=oe,A.hold=W,A.bits=H,(A.wsize||ge!==R.avail_out&&A.mode<30&&(A.mode<27||Y!==4))&&we(R,R.output,R.next_out,ge-R.avail_out)?(A.mode=31,-4):(Ae-=R.avail_in,ge-=R.avail_out,R.total_in+=Ae,R.total_out+=ge,A.total+=ge,A.wrap&&ge&&(R.adler=A.check=A.flags?u(A.check,xe,ge,R.next_out-ge):c(A.check,xe,ge,R.next_out-ge)),R.data_type=A.bits+(A.last?64:0)+(A.mode===12?128:0)+(A.mode===20||A.mode===15?256:0),(Ae==0&&ge===0||Y===4)&&X===v&&(X=-5),X)},a.inflateEnd=function(R){if(!R||!R.state)return m;var Y=R.state;return Y.window&&(Y.window=null),R.state=null,v},a.inflateGetHeader=function(R,Y){var A;return R&&R.state?(2&(A=R.state).wrap)==0?m:((A.head=Y).done=!1,v):m},a.inflateSetDictionary=function(R,Y){var A,J=Y.length;return R&&R.state?(A=R.state).wrap!==0&&A.mode!==11?m:A.mode===11&&c(1,Y,J,0)!==A.check?-3:we(R,Y,J,J)?(A.mode=31,-4):(A.havedict=1,v):m},a.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(r,i,a){"use strict";var s=r("../utils/common"),c=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],u=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],d=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],h=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];i.exports=function(f,b,v,m,g,k,_,E){var M,T,C,D,q,Z,ne,F,pe,we=E.bits,R=0,Y=0,A=0,J=0,xe=0,le=0,Ie=0,oe=0,Se=0,W=0,H=null,Ae=0,ge=new s.Buf16(16),he=new s.Buf16(16),je=null,ft=0;for(R=0;R<=15;R++)ge[R]=0;for(Y=0;Y<m;Y++)ge[b[v+Y]]++;for(xe=we,J=15;1<=J&&ge[J]===0;J--);if(J<xe&&(xe=J),J===0)return g[k++]=20971520,g[k++]=20971520,E.bits=1,0;for(A=1;A<J&&ge[A]===0;A++);for(xe<A&&(xe=A),R=oe=1;R<=15;R++)if(oe<<=1,(oe-=ge[R])<0)return-1;if(0<oe&&(f===0||J!==1))return-1;for(he[1]=0,R=1;R<15;R++)he[R+1]=he[R]+ge[R];for(Y=0;Y<m;Y++)b[v+Y]!==0&&(_[he[b[v+Y]]++]=Y);if(Z=f===0?(H=je=_,19):f===1?(H=c,Ae-=257,je=u,ft-=257,256):(H=d,je=h,-1),R=A,q=k,Ie=Y=W=0,C=-1,D=(Se=1<<(le=xe))-1,f===1&&852<Se||f===2&&592<Se)return 1;for(;;){for(ne=R-Ie,pe=_[Y]<Z?(F=0,_[Y]):_[Y]>Z?(F=je[ft+_[Y]],H[Ae+_[Y]]):(F=96,0),M=1<<R-Ie,A=T=1<<le;g[q+(W>>Ie)+(T-=M)]=ne<<24|F<<16|pe|0,T!==0;);for(M=1<<R-1;W&M;)M>>=1;if(M!==0?(W&=M-1,W+=M):W=0,Y++,--ge[R]==0){if(R===J)break;R=b[v+_[Y]]}if(xe<R&&(W&D)!==C){for(Ie===0&&(Ie=xe),q+=A,oe=1<<(le=R-Ie);le+Ie<J&&!((oe-=ge[le+Ie])<=0);)le++,oe<<=1;if(Se+=1<<le,f===1&&852<Se||f===2&&592<Se)return 1;g[C=W&D]=xe<<24|le<<16|q-k|0}}return W!==0&&(g[q+W]=R-Ie<<24|4194304),E.bits=xe,0}},{"../utils/common":41}],51:[function(r,i,a){"use strict";i.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(r,i,a){"use strict";var s=r("../utils/common"),c=0,u=1;function d(I){for(var z=I.length;0<=--z;)I[z]=0}var h=0,f=29,b=256,v=b+1+f,m=30,g=19,k=2*v+1,_=15,E=16,M=7,T=256,C=16,D=17,q=18,Z=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],ne=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],F=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],pe=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],we=new Array(2*(v+2));d(we);var R=new Array(2*m);d(R);var Y=new Array(512);d(Y);var A=new Array(256);d(A);var J=new Array(f);d(J);var xe,le,Ie,oe=new Array(m);function Se(I,z,ie,ae,N){this.static_tree=I,this.extra_bits=z,this.extra_base=ie,this.elems=ae,this.max_length=N,this.has_stree=I&&I.length}function W(I,z){this.dyn_tree=I,this.max_code=0,this.stat_desc=z}function H(I){return I<256?Y[I]:Y[256+(I>>>7)]}function Ae(I,z){I.pending_buf[I.pending++]=255&z,I.pending_buf[I.pending++]=z>>>8&255}function ge(I,z,ie){I.bi_valid>E-ie?(I.bi_buf|=z<<I.bi_valid&65535,Ae(I,I.bi_buf),I.bi_buf=z>>E-I.bi_valid,I.bi_valid+=ie-E):(I.bi_buf|=z<<I.bi_valid&65535,I.bi_valid+=ie)}function he(I,z,ie){ge(I,ie[2*z],ie[2*z+1])}function je(I,z){for(var ie=0;ie|=1&I,I>>>=1,ie<<=1,0<--z;);return ie>>>1}function ft(I,z,ie){var ae,N,de=new Array(_+1),me=0;for(ae=1;ae<=_;ae++)de[ae]=me=me+ie[ae-1]<<1;for(N=0;N<=z;N++){var ue=I[2*N+1];ue!==0&&(I[2*N]=je(de[ue]++,ue))}}function We(I){var z;for(z=0;z<v;z++)I.dyn_ltree[2*z]=0;for(z=0;z<m;z++)I.dyn_dtree[2*z]=0;for(z=0;z<g;z++)I.bl_tree[2*z]=0;I.dyn_ltree[2*T]=1,I.opt_len=I.static_len=0,I.last_lit=I.matches=0}function Fe(I){8<I.bi_valid?Ae(I,I.bi_buf):0<I.bi_valid&&(I.pending_buf[I.pending++]=I.bi_buf),I.bi_buf=0,I.bi_valid=0}function ct(I,z,ie,ae){var N=2*z,de=2*ie;return I[N]<I[de]||I[N]===I[de]&&ae[z]<=ae[ie]}function pt(I,z,ie){for(var ae=I.heap[ie],N=ie<<1;N<=I.heap_len&&(N<I.heap_len&&ct(z,I.heap[N+1],I.heap[N],I.depth)&&N++,!ct(z,ae,I.heap[N],I.depth));)I.heap[ie]=I.heap[N],ie=N,N<<=1;I.heap[ie]=ae}function Ut(I,z,ie){var ae,N,de,me,ue=0;if(I.last_lit!==0)for(;ae=I.pending_buf[I.d_buf+2*ue]<<8|I.pending_buf[I.d_buf+2*ue+1],N=I.pending_buf[I.l_buf+ue],ue++,ae===0?he(I,N,z):(he(I,(de=A[N])+b+1,z),(me=Z[de])!==0&&ge(I,N-=J[de],me),he(I,de=H(--ae),ie),(me=ne[de])!==0&&ge(I,ae-=oe[de],me)),ue<I.last_lit;);he(I,T,z)}function Nt(I,z){var ie,ae,N,de=z.dyn_tree,me=z.stat_desc.static_tree,ue=z.stat_desc.has_stree,Ee=z.stat_desc.elems,Je=-1;for(I.heap_len=0,I.heap_max=k,ie=0;ie<Ee;ie++)de[2*ie]!==0?(I.heap[++I.heap_len]=Je=ie,I.depth[ie]=0):de[2*ie+1]=0;for(;I.heap_len<2;)de[2*(N=I.heap[++I.heap_len]=Je<2?++Je:0)]=1,I.depth[N]=0,I.opt_len--,ue&&(I.static_len-=me[2*N+1]);for(z.max_code=Je,ie=I.heap_len>>1;1<=ie;ie--)pt(I,de,ie);for(N=Ee;ie=I.heap[1],I.heap[1]=I.heap[I.heap_len--],pt(I,de,1),ae=I.heap[1],I.heap[--I.heap_max]=ie,I.heap[--I.heap_max]=ae,de[2*N]=de[2*ie]+de[2*ae],I.depth[N]=(I.depth[ie]>=I.depth[ae]?I.depth[ie]:I.depth[ae])+1,de[2*ie+1]=de[2*ae+1]=N,I.heap[1]=N++,pt(I,de,1),2<=I.heap_len;);I.heap[--I.heap_max]=I.heap[1],(function(Ge,xt){var Qn,Jt,er,it,yr,jr,fn=xt.dyn_tree,xo=xt.max_code,yi=xt.stat_desc.static_tree,Dl=xt.stat_desc.has_stree,zl=xt.stat_desc.extra_bits,La=xt.stat_desc.extra_base,kr=xt.stat_desc.max_length,qr=0;for(it=0;it<=_;it++)Ge.bl_count[it]=0;for(fn[2*Ge.heap[Ge.heap_max]+1]=0,Qn=Ge.heap_max+1;Qn<k;Qn++)kr<(it=fn[2*fn[2*(Jt=Ge.heap[Qn])+1]+1]+1)&&(it=kr,qr++),fn[2*Jt+1]=it,xo<Jt||(Ge.bl_count[it]++,yr=0,La<=Jt&&(yr=zl[Jt-La]),jr=fn[2*Jt],Ge.opt_len+=jr*(it+yr),Dl&&(Ge.static_len+=jr*(yi[2*Jt+1]+yr)));if(qr!==0){do{for(it=kr-1;Ge.bl_count[it]===0;)it--;Ge.bl_count[it]--,Ge.bl_count[it+1]+=2,Ge.bl_count[kr]--,qr-=2}while(0<qr);for(it=kr;it!==0;it--)for(Jt=Ge.bl_count[it];Jt!==0;)xo<(er=Ge.heap[--Qn])||(fn[2*er+1]!==it&&(Ge.opt_len+=(it-fn[2*er+1])*fn[2*er],fn[2*er+1]=it),Jt--)}})(I,z),ft(de,Je,I.bl_count)}function w(I,z,ie){var ae,N,de=-1,me=z[1],ue=0,Ee=7,Je=4;for(me===0&&(Ee=138,Je=3),z[2*(ie+1)+1]=65535,ae=0;ae<=ie;ae++)N=me,me=z[2*(ae+1)+1],++ue<Ee&&N===me||(ue<Je?I.bl_tree[2*N]+=ue:N!==0?(N!==de&&I.bl_tree[2*N]++,I.bl_tree[2*C]++):ue<=10?I.bl_tree[2*D]++:I.bl_tree[2*q]++,de=N,Je=(ue=0)===me?(Ee=138,3):N===me?(Ee=6,3):(Ee=7,4))}function X(I,z,ie){var ae,N,de=-1,me=z[1],ue=0,Ee=7,Je=4;for(me===0&&(Ee=138,Je=3),ae=0;ae<=ie;ae++)if(N=me,me=z[2*(ae+1)+1],!(++ue<Ee&&N===me)){if(ue<Je)for(;he(I,N,I.bl_tree),--ue!=0;);else N!==0?(N!==de&&(he(I,N,I.bl_tree),ue--),he(I,C,I.bl_tree),ge(I,ue-3,2)):ue<=10?(he(I,D,I.bl_tree),ge(I,ue-3,3)):(he(I,q,I.bl_tree),ge(I,ue-11,7));de=N,Je=(ue=0)===me?(Ee=138,3):N===me?(Ee=6,3):(Ee=7,4)}}d(oe);var V=!1;function O(I,z,ie,ae){ge(I,(h<<1)+(ae?1:0),3),(function(N,de,me,ue){Fe(N),ue&&(Ae(N,me),Ae(N,~me)),s.arraySet(N.pending_buf,N.window,de,me,N.pending),N.pending+=me})(I,z,ie,!0)}a._tr_init=function(I){V||((function(){var z,ie,ae,N,de,me=new Array(_+1);for(N=ae=0;N<f-1;N++)for(J[N]=ae,z=0;z<1<<Z[N];z++)A[ae++]=N;for(A[ae-1]=N,N=de=0;N<16;N++)for(oe[N]=de,z=0;z<1<<ne[N];z++)Y[de++]=N;for(de>>=7;N<m;N++)for(oe[N]=de<<7,z=0;z<1<<ne[N]-7;z++)Y[256+de++]=N;for(ie=0;ie<=_;ie++)me[ie]=0;for(z=0;z<=143;)we[2*z+1]=8,z++,me[8]++;for(;z<=255;)we[2*z+1]=9,z++,me[9]++;for(;z<=279;)we[2*z+1]=7,z++,me[7]++;for(;z<=287;)we[2*z+1]=8,z++,me[8]++;for(ft(we,v+1,me),z=0;z<m;z++)R[2*z+1]=5,R[2*z]=je(z,5);xe=new Se(we,Z,b+1,v,_),le=new Se(R,ne,0,m,_),Ie=new Se(new Array(0),F,0,g,M)})(),V=!0),I.l_desc=new W(I.dyn_ltree,xe),I.d_desc=new W(I.dyn_dtree,le),I.bl_desc=new W(I.bl_tree,Ie),I.bi_buf=0,I.bi_valid=0,We(I)},a._tr_stored_block=O,a._tr_flush_block=function(I,z,ie,ae){var N,de,me=0;0<I.level?(I.strm.data_type===2&&(I.strm.data_type=(function(ue){var Ee,Je=4093624447;for(Ee=0;Ee<=31;Ee++,Je>>>=1)if(1&Je&&ue.dyn_ltree[2*Ee]!==0)return c;if(ue.dyn_ltree[18]!==0||ue.dyn_ltree[20]!==0||ue.dyn_ltree[26]!==0)return u;for(Ee=32;Ee<b;Ee++)if(ue.dyn_ltree[2*Ee]!==0)return u;return c})(I)),Nt(I,I.l_desc),Nt(I,I.d_desc),me=(function(ue){var Ee;for(w(ue,ue.dyn_ltree,ue.l_desc.max_code),w(ue,ue.dyn_dtree,ue.d_desc.max_code),Nt(ue,ue.bl_desc),Ee=g-1;3<=Ee&&ue.bl_tree[2*pe[Ee]+1]===0;Ee--);return ue.opt_len+=3*(Ee+1)+5+5+4,Ee})(I),N=I.opt_len+3+7>>>3,(de=I.static_len+3+7>>>3)<=N&&(N=de)):N=de=ie+5,ie+4<=N&&z!==-1?O(I,z,ie,ae):I.strategy===4||de===N?(ge(I,2+(ae?1:0),3),Ut(I,we,R)):(ge(I,4+(ae?1:0),3),(function(ue,Ee,Je,Ge){var xt;for(ge(ue,Ee-257,5),ge(ue,Je-1,5),ge(ue,Ge-4,4),xt=0;xt<Ge;xt++)ge(ue,ue.bl_tree[2*pe[xt]+1],3);X(ue,ue.dyn_ltree,Ee-1),X(ue,ue.dyn_dtree,Je-1)})(I,I.l_desc.max_code+1,I.d_desc.max_code+1,me+1),Ut(I,I.dyn_ltree,I.dyn_dtree)),We(I),ae&&Fe(I)},a._tr_tally=function(I,z,ie){return I.pending_buf[I.d_buf+2*I.last_lit]=z>>>8&255,I.pending_buf[I.d_buf+2*I.last_lit+1]=255&z,I.pending_buf[I.l_buf+I.last_lit]=255&ie,I.last_lit++,z===0?I.dyn_ltree[2*ie]++:(I.matches++,z--,I.dyn_ltree[2*(A[ie]+b+1)]++,I.dyn_dtree[2*H(z)]++),I.last_lit===I.lit_bufsize-1},a._tr_align=function(I){ge(I,2,3),he(I,T,we),(function(z){z.bi_valid===16?(Ae(z,z.bi_buf),z.bi_buf=0,z.bi_valid=0):8<=z.bi_valid&&(z.pending_buf[z.pending++]=255&z.bi_buf,z.bi_buf>>=8,z.bi_valid-=8)})(I)}},{"../utils/common":41}],53:[function(r,i,a){"use strict";i.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(r,i,a){"use strict";i.exports=typeof setImmediate=="function"?setImmediate:function(){var s=[].slice.apply(arguments);s.splice(1,0,0),setTimeout.apply(null,s)}},{}]},{},[10])(10)})})),Dd=Bi(Zp(),1),zd=(e,...t)=>t.length===0?e[0]:String.raw({raw:e},...t),lo=zd,Bd=zd;function Jo(e,t){let r=e.length,i,a,s=!1,c=!1;Array.isArray(e[0])?i=e:(i=[e],r=i.length,s=!0),Array.isArray(t[0])?a=t:(a=t.length>0?t.map(f=>[f]):[[]],c=!0);let u=a[0].length,d=a[0].map((f,b)=>a.map(v=>v[b])),h=i.map(f=>d.map(b=>{let v=0;if(!Array.isArray(f)){for(let m of b)v+=f*m;return v}for(let m=0;m<f.length;m++)v+=f[m]*(b[m]||0);return v}));return r===1&&s&&(h=h[0]),u===1&&c?r===1&&s?h[0]:h.map(f=>f[0]):h}function $s(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function mt(e,t,r=[0,0,0]){const i=$s(e,t[0]),a=$s(e,t[1]),s=$s(e,t[2]);return r[0]=i,r[1]=a,r[2]=s,r}function co(e){return dr(e)==="string"}function dr(e){return(Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function Ds(e,{precision:t=16,unit:r}){return qe(e)?"none":(e=+zs(e,t),e+(r??""))}function qe(e){return e===null}function yt(e){return qe(e)?0:e}function zs(e,t){if(e===0)return 0;let r=~~e,i=0;r&&t&&(i=~~Math.log10(Math.abs(r))+1);const a=10**(t-i);return Math.floor(e*a+.5)/a}function Qo(e,t,r){return isNaN(e)?t:isNaN(t)?e:e+(t-e)*r}function Nd(e,t,r){return(r-e)/(t-e)}function Bs(e,t,r){return!e||!t||e===t||e[0]===t[0]&&e[1]===t[1]||isNaN(r)||r===null?r:Qo(t[0],t[1],Nd(e[0],e[1],r))}function Ki(e,t,r){return Math.max(Math.min(r,t),e)}function Yi(e,t){return Math.sign(e)===Math.sign(t)?e:-e}function kt(e,t){return Yi(Math.abs(e)**t,e)}function Ns(e,t){return t===0?0:e/t}function Hd(e,t,r=0,i=e.length){for(;r<i;){const a=r+i>>1;e[a]<t?r=a+1:i=a}return r}function uo(e,t){if(e instanceof t)return!0;const r=t.name;for(;e;){const i=Object.getPrototypeOf(e),a=i?.constructor?.name;if(a===r)return!0;if(!a||a==="Object")return!1;e=i}return!1}var jp=Object.freeze({__proto__:null,bisectLeft:Hd,clamp:Ki,copySign:Yi,interpolate:Qo,interpolateInv:Nd,isInstance:uo,isNone:qe,isString:co,mapRange:Bs,multiplyMatrices:Jo,multiply_v3_m3x3:mt,serializeNumber:Ds,skipNone:yt,spow:kt,toPrecision:zs,type:dr,zdiv:Ns}),qp=class{add(e,t,r){if(typeof arguments[0]!="string"){for(var e in arguments[0])this.add(e,arguments[0][e],arguments[1]);return}(Array.isArray(e)?e:[e]).forEach(function(i){this[i]=this[i]||[],t&&this[i][r?"unshift":"push"](t)},this)}run(e,t){this[e]=this[e]||[],this[e].forEach(function(r){r.call(t&&t.context?t.context:t,t)})}},ur=new qp,on={gamut_mapping:"css",precision:5,deltaE:"76",verbose:"production".toLowerCase()!=="test",warn:function(t){this.verbose&&globalThis?.console?.warn?.(t)}},Fd=class{type;coordMeta;coordRange;range;constructor(e,t){if(typeof e=="object"&&(this.coordMeta=e),t&&(this.coordMeta=t,this.coordRange=t.range??t.refRange),typeof e=="string"){let r=e.trim().match(/^(?<type><[a-z]+>)(\[(?<min>-?[.\d]+),\s*(?<max>-?[.\d]+)\])?$/);if(!r)throw new TypeError(`Cannot parse ${e} as a type definition.`);this.type=r.groups.type;let{min:i,max:a}=r.groups;(i||a)&&(this.range=[+i,+a])}}get computedRange(){return this.range?this.range:this.type==="<percentage>"?this.percentageRange():this.type==="<angle>"?[0,360]:null}get unit(){return this.type==="<percentage>"?"%":this.type==="<angle>"?"deg":""}resolve(e){if(this.type==="<angle>")return e;let t=this.computedRange,r=this.coordRange;return this.type==="<percentage>"&&(r??=this.percentageRange()),Bs(t,r,e)}serialize(e,t){let r=this.type==="<percentage>"?this.percentageRange(100):this.computedRange,i=this.unit;return e=Bs(this.coordRange,r,e),Ds(e,{unit:i,precision:t})}toString(){let e=this.type;if(this.range){let[t="",r=""]=this.range;e+=`[${t},${r}]`}return e}percentageRange(e=1){let t;return this.coordMeta&&this.coordMeta.range||this.coordRange&&this.coordRange[0]>=0?t=[0,1]:t=[-1,1],[t[0]*e,t[1]*e]}static get(e,t){return uo(e,this)?e:new this(e,t)}},Hs=Symbol("instance"),Gd=class Xf{type;name;spaceCoords;coords;id;alpha;constructor(t,r=t.space){t[Hs]=this,this.type="function",this.name="color",Object.assign(this,t),this.space=r,this.type!=="custom"&&(this.spaceCoords=Object.values(r.coords),this.coords||(this.coords=this.spaceCoords.map(i=>{let a=["<number>","<percentage>"];return i.type==="angle"&&a.push("<angle>"),a})),this.coords=this.coords.map((i,a)=>{let s=this.spaceCoords[a];return typeof i=="string"&&(i=i.trim().split(/\s*\|\s*/)),i.map(c=>Fd.get(c,s))}))}serializeCoords(t,r,i){return i=t.map((a,s)=>Fd.get(i?.[s]??this.coords[s][0],this.spaceCoords[s])),t.map((a,s)=>i[s].serialize(a,r))}coerceCoords(t,r){return Object.entries(this.space.coords).map(([i,a],s)=>{let c=t[s];if(qe(c)||isNaN(c))return c;let u=r[s],d=this.coords[s].find(h=>h.type==u);if(!d){let h=a.name||i;throw new TypeError(`${u??c?.raw??c} not allowed for ${h} in ${this.name}()`)}return c=d.resolve(c),d.range&&(r[s]=d.toString()),c})}canSerialize(){return this.type==="function"||this.serialize}parse(t){return null}static get(t,...r){return!t||uo(t,this)?t:t[Hs]?t[Hs]:new Xf(t,...r)}},Gt={D50:[.3457/.3585,1,.2958/.3585],D65:[.3127/.329,1,.3583/.329]};function Fs(e){return Array.isArray(e)?e:Gt[e]}function Xi(e,t,r,i={}){if(e=Fs(e),t=Fs(t),!e||!t)throw new TypeError(`Missing white point to convert ${e?"":"from"}${!e&&!t?"/":""}${t?"":"to"}`);if(e===t)return r;let a={W1:e,W2:t,XYZ:r,options:i};if(ur.run("chromatic-adaptation-start",a),a.M||(a.W1===Gt.D65&&a.W2===Gt.D50?a.M=[[1.0479297925449969,.022946870601609652,-.05019226628920524],[.02962780877005599,.9904344267538799,-.017073799063418826],[-.009243040646204504,.015055191490298152,.7518742814281371]]:a.W1===Gt.D50&&a.W2===Gt.D65&&(a.M=[[.955473421488075,-.02309845494876471,.06325924320057072],[-.0283697093338637,1.0099953980813041,.021041441191917323],[.012314014864481998,-.020507649298898964,1.330365926242124]])),ur.run("chromatic-adaptation-end",a),a.M)return mt(a.XYZ,a.M);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}function Wd(e,t){let r={str:String(e)?.trim(),options:t};if(ur.run("parse-start",r),r.color)return r.color;r.parsed=Yp(r.str);let i,a=r.options?r.options.parseMeta??r.options.meta:null;if(r.parsed){let s=r.parsed.name,c,u,d=r.parsed.args,h=d.map((v,m)=>r.parsed.argMeta[m]?.type);if(s==="color"){let v=d.shift();h.shift();let m=v.startsWith("--")?v.substring(2):`--${v}`,g=[v,m];if(c=ye.findFormat({name:s,id:g,type:"function"}),!c){let k,_=v in ye.registry?v:m;if(_ in ye.registry){let E=ye.registry[_].formats?.color?.id;E&&(k=`Did you mean ${e.replace("color("+v,"color("+E)}?`)}throw new TypeError(`Cannot parse ${r.str}. `+(k??"Missing a plugin?"))}u=c.space,c.id.startsWith("--")&&!v.startsWith("--")&&on.warn(`${u.name} is a non-standard space and not currently supported in the CSS spec. Use prefixed color(${c.id}) instead of color(${v}).`),v.startsWith("--")&&!c.id.startsWith("--")&&on.warn(`${u.name} is a standard space and supported in the CSS spec. Use color(${c.id}) instead of prefixed color(${v}).`)}else c=ye.findFormat({name:s,type:"function"}),u=c.space;a&&Object.assign(a,{format:c,formatId:c.name,types:h,commas:r.parsed.commas});let f=1;r.parsed.lastAlpha&&(f=r.parsed.args.pop(),a&&(a.alphaType=h.pop()));let b=c.coords.length;if(d.length!==b)throw new TypeError(`Expected ${b} coordinates for ${u.id} in ${r.str}), got ${d.length}`);d=c.coerceCoords(d,h),i={spaceId:u.id,coords:d,alpha:f}}else e:for(let s of ye.all)for(let c in s.formats){let u=s.formats[c];if(u.type!=="custom"||u.test&&!u.test(r.str))continue;let d=s.getFormat(u),h=d.parse(r.str);if(h){a&&Object.assign(a,{format:d,formatId:c}),i=h;break e}}if(!i)throw new TypeError(`Could not parse ${e} as a color. Missing a plugin?`);return i.alpha=qe(i.alpha)?i.alpha:i.alpha===void 0?1:Ki(0,i.alpha,1),i}var Ud={"%":.01,deg:1,grad:.9,rad:180/Math.PI,turn:360},Ji={function:/^([a-z]+)\(((?:calc\(NaN\)|.)+?)\)$/i,number:/^([-+]?(?:[0-9]*\.)?[0-9]+(e[-+]?[0-9]+)?)$/i,unitValue:RegExp(`(${Object.keys(Ud).join("|")})$`),singleArgument:/\/?\s*(none|NaN|calc\(NaN\)|[-+\w.]+(?:%|deg|g?rad|turn)?)/g};function Kp(e){let t={},r=e.match(Ji.unitValue)?.[0],i=t.raw=e;return r?(t.type=r==="%"?"<percentage>":"<angle>",t.unit=r,t.unitless=Number(i.slice(0,-r.length)),i=t.unitless*Ud[r]):Ji.number.test(i)?(i=Number(i),t.type="<number>"):i==="none"?i=null:i==="NaN"||i==="calc(NaN)"?(i=NaN,t.type="<number>"):t.type="<ident>",{value:i,meta:t}}function Yp(e){if(!e)return;e=e.trim();let t=e.match(Ji.function);if(t){let r=[],i=[],a=!1,s=t[1].toLowerCase(),c=t[2].replace(Ji.singleArgument,(u,d)=>{let{value:h,meta:f}=Kp(d);return(u.startsWith("/")||s!=="color"&&r.length===3)&&(a=!0),r.push(h),i.push(f),""});return{name:s,args:r,argMeta:i,lastAlpha:a,commas:c.includes(","),rawName:t[1],rawArgs:t[2]}}}function Le(e,t){if(Array.isArray(e))return e.map(i=>Le(i,t));if(!e)throw new TypeError("Empty color reference");co(e)&&(e=Wd(e,t));let r=e.space||e.spaceId;return typeof r=="string"&&(e.space=ye.get(r)),e.alpha===void 0&&(e.alpha=1),e}var Xp=75e-6,ye=class Fn{constructor(t){this.id=t.id,this.name=t.name,this.base=t.base?Fn.get(t.base):null,this.aliases=t.aliases,this.base&&(this.fromBase=t.fromBase,this.toBase=t.toBase);let r=t.coords??this.base.coords;for(let i in r)"name"in r[i]||(r[i].name=i);this.coords=r,this.white=Fs(t.white??this.base.white??"D65"),this.formats=t.formats??{};for(let i in this.formats){let a=this.formats[i];a.type||="function",a.name||=i}this.formats.color?.id||(this.formats.color={...this.formats.color??{},id:t.cssId||this.id}),t.gamutSpace?this.gamutSpace=t.gamutSpace==="self"?this:Fn.get(t.gamutSpace):this.isPolar?this.gamutSpace=this.base:this.gamutSpace=this,this.gamutSpace.isUnbounded&&(this.inGamut=(i,a)=>!0),this.referred=t.referred,Object.defineProperty(this,"path",{value:Jp(this).reverse(),writable:!1,enumerable:!0,configurable:!0}),ur.run("colorspace-init-end",this)}inGamut(t,{epsilon:r=Xp}={}){if(!this.equals(this.gamutSpace))return t=this.to(this.gamutSpace,t),this.gamutSpace.inGamut(t,{epsilon:r});let i=Object.values(this.coords);return t.every((a,s)=>{let c=i[s];if(c.type!=="angle"&&c.range){if(qe(a))return!0;let[u,d]=c.range;return(u===void 0||a>=u-r)&&(d===void 0||a<=d+r)}return!0})}get isUnbounded(){return Object.values(this.coords).every(t=>!("range"in t))}get cssId(){return this.formats?.color?.id||this.id}get isPolar(){for(let t in this.coords)if(this.coords[t].type==="angle")return!0;return!1}getFormat(t){if(!t)return null;t==="default"?t=Object.values(this.formats)[0]:typeof t=="string"&&(t=this.formats[t]);let r=Gd.get(t,this);return r!==t&&t.name in this.formats&&(this.formats[t.name]=r),r}equals(t){return t?this===t||this.id===t||this.id===t.id:!1}to(t,r){if(arguments.length===1){const u=Le(t);[t,r]=[u.space,u.coords]}if(t=Fn.get(t),this.equals(t))return r;r=r.map(u=>qe(u)?0:u);let i=this.path,a=t.path,s,c;for(let u=0;u<i.length&&i[u].equals(a[u]);u++)s=i[u],c=u;if(!s)throw new Error(`Cannot convert between color spaces ${this} and ${t}: no connection space was found`);for(let u=i.length-1;u>c;u--)r=i[u].toBase(r);for(let u=c+1;u<a.length;u++)r=a[u].fromBase(r);return r}from(t,r){if(arguments.length===1){const i=Le(t);[t,r]=[i.space,i.coords]}return t=Fn.get(t),t.to(this,r)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let t=[];for(let r in this.coords){let i=this.coords[r],a=i.range||i.refRange;t.push(a?.min??0)}return t}static registry={};static get all(){return[...new Set(Object.values(Fn.registry))]}static register(t,r){if(arguments.length===1&&(r=arguments[0],t=r.id),r=this.get(r),this.registry[t]&&this.registry[t]!==r)throw new Error(`Duplicate color space registration: '${t}'`);if(this.registry[t]=r,arguments.length===1&&r.aliases)for(let i of r.aliases)this.register(i,r);return r}static get(t,...r){if(!t||uo(t,this))return t;if(dr(t)==="string"){let i=Fn.registry[t.toLowerCase()];if(!i)throw new TypeError(`No color space found with id = "${t}"`);return i}if(r.length)return Fn.get(...r);throw new TypeError(`${t} is not a valid color space`)}static findFormat(t,r=Fn.all){if(!t)return null;typeof t=="string"&&(t={name:t});for(let i of r)for(let[a,s]of Object.entries(i.formats)){s.name??=a,s.type??="function";let c=(!t.name||s.name===t.name)&&(!t.type||s.type===t.type);if(t.id){let u=s.ids||[s.id],d=Array.isArray(t.id)?t.id:[t.id];c&&=d.some(h=>u.includes(h))}if(c){let u=Gd.get(s,i);return u!==s&&(i.formats[s.name]=u),u}}return null}static resolveCoord(t,r){let i=dr(t),a,s;if(i==="string"?t.includes(".")?[a,s]=t.split("."):[a,s]=[,t]:Array.isArray(t)?[a,s]=t:(a=t.space,s=t.coordId),a=Fn.get(a),a||(a=r),!a)throw new TypeError(`Cannot resolve coordinate reference ${t}: No color space specified and relative references are not allowed here`);if(i=dr(s),i==="number"||i==="string"&&s>=0){let d=Object.entries(a.coords)[s];if(d)return{space:a,id:d[0],index:s,...d[1]}}a=Fn.get(a);let c=s.toLowerCase(),u=0;for(let d in a.coords){let h=a.coords[d];if(d.toLowerCase()===c||h.name?.toLowerCase()===c)return{space:a,id:d,index:u,...h};u++}throw new TypeError(`No "${s}" coordinate found in ${a.name}. Its coordinates are: ${Object.keys(a.coords).join(", ")}`)}static DEFAULT_FORMAT={type:"functions",name:"color"}};function Jp(e){let t=[e];for(let r=e;r=r.base;)t.push(r);return t}var Pt=new ye({id:"xyz-d65",name:"XYZ D65",coords:{x:{refRange:[0,1],name:"X"},y:{refRange:[0,1],name:"Y"},z:{refRange:[0,1],name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]}),Bt=class extends ye{constructor(e){e.coords||(e.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),e.base||(e.base=Pt),e.toXYZ_M&&e.fromXYZ_M&&(e.toBase??=t=>{let r=mt(t,e.toXYZ_M);return this.white!==this.base.white&&(r=Xi(this.white,this.base.white,r)),r},e.fromBase??=t=>(t=Xi(this.base.white,this.white,t),mt(t,e.fromXYZ_M))),e.referred??="display",super(e)}};function Vd(e,t={}){if(Array.isArray(e))return e.map(d=>Vd(d,t));let{cssProperty:r="background-color",element:i,...a}=t,s=null;try{return Le(e,a)}catch(d){s=d}let{CSS:c,getComputedStyle:u}=globalThis;if(co(e)&&i&&c&&u&&c.supports(r,e)){let d=i.style[r];e!==d&&(i.style[r]=e);let h=u(i).getPropertyValue(r);if(e!==d&&(i.style[r]=d),h!==e)try{return Le(h,a)}catch(f){s=f}else s={message:"Color value is a valid CSS color, but it could not be resolved :("}}return t.errorMeta&&(t.errorMeta.error=s),null}function ei(e,t){e=Le(e);let r=ye.get(t,t?.space),i=t?.precision,a;return!r||e.space.equals(r)?a=e.coords.slice():a=r.from(e),i===void 0?a:a.map(s=>zs(s,i))}function an(e,t){if(e=Le(e),t==="alpha")return e.alpha??1;let{space:r,index:i}=ye.resolveCoord(t,e.space);return ei(e,r)[i]}function Gs(e,t,r,i){return e=Le(e),Array.isArray(t)&&([t,r,i]=[e.space,t,r]),t=ye.get(t),e.coords=t===e.space?r.slice():t.to(e.space,r),i!==void 0&&(e.alpha=i),e}Gs.returns="color";function Xn(e,t,r){if(e=Le(e),arguments.length===2&&dr(arguments[1])==="object"){let i=arguments[1];for(let a in i)Xn(e,a,i[a])}else if(typeof r=="function"&&(r=r(an(e,t))),t==="alpha")e.alpha=r;else{let{space:i,index:a}=ye.resolveCoord(t,e.space),s=ei(e,i);s[a]=r,Gs(e,i,s)}return e}Xn.returns="color";var Ws=new ye({id:"xyz-d50",name:"XYZ D50",white:"D50",base:Pt,fromBase:e=>Xi(Pt.white,"D50",e),toBase:e=>Xi("D50",Pt.white,e)}),Qp=216/24389,Zd=24/116,Qi=24389/27,Us=Gt.D50,sn=new ye({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:Us,base:Ws,fromBase(e){let t=e.map((r,i)=>r/Us[i]).map(r=>r>Qp?Math.cbrt(r):(Qi*r+16)/116);return[116*t[1]-16,500*(t[0]-t[1]),200*(t[1]-t[2])]},toBase(e){let[t,r,i]=e,a=[];return a[1]=(t+16)/116,a[0]=r/500+a[1],a[2]=a[1]-i/200,[a[0]>Zd?Math.pow(a[0],3):(116*a[0]-16)/Qi,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/Qi,a[2]>Zd?Math.pow(a[2],3):(116*a[2]-16)/Qi].map((s,c)=>s*Us[c])},formats:{lab:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <percentage>"]}}});function kn(e){return typeof e!="number"?e:(e%360+360)%360}function jd(e,t){let[r,i]=t,a=qe(r),s=qe(i);if(a&&s)return[r,i];if(a?r=i:s&&(i=r),e==="raw")return t;r=kn(r),i=kn(i);let c=i-r;return e==="increasing"?c<0&&(i+=360):e==="decreasing"?c>0&&(r+=360):e==="longer"?-180<c&&c<180&&(c>0?r+=360:i+=360):e==="shorter"&&(c>180?r+=360:c<-180&&(i+=360)),[r,i]}var ln=new ye({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:sn,fromBase(e){if(this.ε===void 0){let c=Object.values(this.base.coords)[1].refRange;this.ε=(c[1]-c[0])/1e5}let[t,r,i]=e,a=Math.abs(r)<this.ε&&Math.abs(i)<this.ε,s=a?null:kn(Math.atan2(i,r)*180/Math.PI);return[t,a?0:Math.sqrt(r**2+i**2),s]},toBase(e){let[t,r,i]=e,a=null,s=null;return qe(i)||(r=r<0?0:r,a=r*Math.cos(i*Math.PI/180),s=r*Math.sin(i*Math.PI/180)),[t,a,s]},formats:{lch:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <angle>"]}}}),qd=25**7,ea=Math.PI,Kd=180/ea,ho=ea/180;function Yd(e){const t=e*e;return t*t*t*e}function Xd(e,t,{kL:r=1,kC:i=1,kH:a=1}={}){[e,t]=Le([e,t]);let[s,c,u]=sn.from(e),d=ln.from(sn,[s,c,u])[1],[h,f,b]=sn.from(t),v=ln.from(sn,[h,f,b])[1];d<0&&(d=0),v<0&&(v=0);let m=Yd((d+v)/2),g=.5*(1-Math.sqrt(m/(m+qd))),k=(1+g)*c,_=(1+g)*f,E=Math.sqrt(k**2+u**2),M=Math.sqrt(_**2+b**2),T=k===0&&u===0?0:Math.atan2(u,k),C=_===0&&b===0?0:Math.atan2(b,_);T<0&&(T+=2*ea),C<0&&(C+=2*ea),T*=Kd,C*=Kd;let D=h-s,q=M-E,Z=C-T,ne=T+C,F=Math.abs(Z),pe;E*M===0?pe=0:F<=180?pe=Z:Z>180?pe=Z-360:Z<-180?pe=Z+360:on.warn("the unthinkable has happened");let we=2*Math.sqrt(M*E)*Math.sin(pe*ho/2),R=(s+h)/2,Y=(E+M)/2,A=Yd(Y),J;E*M===0?J=ne:F<=180?J=ne/2:ne<360?J=(ne+360)/2:J=(ne-360)/2;let xe=(R-50)**2,le=1+.015*xe/Math.sqrt(20+xe),Ie=1+.045*Y,oe=1;oe-=.17*Math.cos((J-30)*ho),oe+=.24*Math.cos(2*J*ho),oe+=.32*Math.cos((3*J+6)*ho),oe-=.2*Math.cos((4*J-63)*ho);let Se=1+.015*Y*oe,W=30*Math.exp(-1*((J-275)/25)**2),H=2*Math.sqrt(A/(A+qd)),Ae=-1*Math.sin(2*W*ho)*H,ge=(D/(r*le))**2;return ge+=(q/(i*Ie))**2,ge+=(we/(a*Se))**2,ge+=Ae*(q/(i*Ie))*(we/(a*Se)),Math.sqrt(ge)}var eg=[[.819022437996703,.3619062600528904,-.1288737815209879],[.0329836539323885,.9292868615863434,.0361446663506424],[.0481771893596242,.2642395317527308,.6335478284694309]],tg=[[1.2268798758459243,-.5578149944602171,.2813910456659647],[-.0405757452148008,1.112286803280317,-.0717110580655164],[-.0763729366746601,-.4214933324022432,1.5869240198367816]],ng=[[.210454268309314,.7936177747023054,-.0040720430116193],[1.9779985324311684,-2.42859224204858,.450593709617411],[.0259040424655478,.7827717124575296,-.8086757549230774]],hr=[[1,.3963377773761749,.2158037573099136],[1,-.1055613458156586,-.0638541728258133],[1,-.0894841775298119,-1.2914855480194092]],$n=new ye({id:"oklab",name:"Oklab",coords:{l:{refRange:[0,1],name:"Lightness"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:Pt,fromBase(e){let t=mt(e,eg);return t[0]=Math.cbrt(t[0]),t[1]=Math.cbrt(t[1]),t[2]=Math.cbrt(t[2]),mt(t,ng,t)},toBase(e){let t=mt(e,hr);return t[0]=t[0]**3,t[1]=t[1]**3,t[2]=t[2]**3,mt(t,tg,t)},formats:{oklab:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <percentage>"]}}});function Vs(e,t){[e,t]=Le([e,t]);let[r,i,a]=$n.from(e),[s,c,u]=$n.from(t),d=r-s,h=i-c,f=a-u;return Math.sqrt(d**2+h**2+f**2)}var rg=75e-6;function Hr(e,t,{epsilon:r=rg}={}){e=Le(e),t||(t=e.space),t=ye.get(t);let i=e.coords;return t!==e.space&&(i=t.from(e)),t.inGamut(i,{epsilon:r})}function fo(e){return{space:e.space,coords:e.coords.slice(),alpha:e.alpha}}function Jd(e,t,r="lab"){r=ye.get(r);let i=r.from(e),a=r.from(t);return Math.sqrt(i.reduce((s,c,u)=>{let d=a[u];return qe(c)||qe(d)?s:s+(d-c)**2},0))}function og(e,t){return Jd(e,t,"lab")}var Qd=Math.PI/180;function ig(e,t,{l:r=2,c:i=1}={}){[e,t]=Le([e,t]);let[a,s,c]=sn.from(e),[,u,d]=ln.from(sn,[a,s,c]),[h,f,b]=sn.from(t),v=ln.from(sn,[h,f,b])[1];u<0&&(u=0),v<0&&(v=0);let m=a-h,g=u-v,k=s-f,_=c-b,E=k**2+_**2-g**2,M=.511;a>=16&&(M=.040975*a/(1+.01765*a));let T=.0638*u/(1+.0131*u)+.638,C;qe(d)&&(d=0),d>=164&&d<=345?C=.56+Math.abs(.2*Math.cos((d+168)*Qd)):C=.36+Math.abs(.4*Math.cos((d+35)*Qd));let D=Math.pow(u,4),q=Math.sqrt(D/(D+1900)),Z=T*(q*C+1-q),ne=(m/(r*M))**2;return ne+=(g/(i*T))**2,ne+=E/Z**2,Math.sqrt(ne)}var eu=203,Zs=new ye({id:"xyz-abs-d65",cssId:"--xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:Pt,fromBase(e){return e.map(t=>t*eu)},toBase(e){return e.map(t=>t/eu)}}),ta=1.15,na=.66,tu=2610/2**14,ag=2**14/2610,nu=3424/2**12,ru=2413/2**7,ou=2392/2**7,sg=1.7*2523/2**5,iu=2**5/(1.7*2523),ra=-.56,js=16295499532821565e-27,lg=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],cg=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],dg=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],ug=[[1,.13860504327153927,.05804731615611883],[1,-.1386050432715393,-.058047316156118904],[1,-.09601924202631895,-.811891896056039]],au=new ye({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.21,.21]},bz:{refRange:[-.21,.21]}},base:Zs,fromBase(e){let[t,r,i]=e,[a,s,c]=mt(mt([ta*t-(ta-1)*i,na*r-(na-1)*t,i],lg).map(function(u){return kt((nu+ru*kt(u/1e4,tu))/(1+ou*kt(u/1e4,tu)),sg)}),dg);return[(1+ra)*a/(1+ra*a)-js,s,c]},toBase(e){let[t,r,i]=e,[a,s,c]=mt(mt([(t+js)/(1+ra-ra*(t+js)),r,i],ug).map(function(d){return 1e4*kt((nu-kt(d,iu))/(ou*kt(d,iu)-ru),ag)}),cg),u=(a+(ta-1)*c)/ta;return[u,(s+(na-1)*u)/na,c]},formats:{jzazbz:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <percentage>"]}}}),qs=new ye({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,.26],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:au,fromBase:ln.fromBase,toBase:ln.toBase,formats:{jzczhz:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <angle>"]}}});function hg(e,t){[e,t]=Le([e,t]);let[r,i,a]=qs.from(e),[s,c,u]=qs.from(t),d=r-s,h=i-c;qe(a)&&qe(u)?(a=0,u=0):qe(a)?a=u:qe(u)&&(u=a);let f=a-u,b=2*Math.sqrt(i*c)*Math.sin(f/2*(Math.PI/180));return Math.sqrt(d**2+h**2+b**2)}var su=3424/4096,lu=2413/128,cu=2392/128,du=2610/16384,fg=2523/32,pg=16384/2610,uu=32/2523,gg=[[.3592832590121217,.6976051147779502,-.035891593232029],[-.1920808463704993,1.100476797037432,.0753748658519118],[.0070797844607479,.0748396662186362,.8433265453898765]],mg=[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],vg=[[.9999999999999998,.0086090370379328,.111029625003026],[.9999999999999998,-.0086090370379328,-.1110296250030259],[.9999999999999998,.5600313357106791,-.3206271749873188]],bg=[[2.0701522183894223,-1.3263473389671563,.2066510476294053],[.3647385209748072,.6805660249472273,-.0453045459220347],[-.0497472075358123,-.0492609666966131,1.1880659249923042]],Ks=new ye({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:Zs,fromBase(e){return wg(mt(e,gg))},toBase(e){return mt(_g(e),bg)},formats:{ictcp:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <percentage>"]}}});function wg(e){return mt(e.map(function(t){return((su+lu*(t/1e4)**du)/(1+cu*(t/1e4)**du))**fg}),mg)}function _g(e){return mt(e,vg).map(function(t){return 1e4*(Math.max(t**uu-su,0)/(lu-cu*t**uu))**pg})}function yg(e,t){[e,t]=Le([e,t]);let[r,i,a]=Ks.from(e),[s,c,u]=Ks.from(t);return 720*Math.sqrt((r-s)**2+.25*(i-c)**2+(a-u)**2)}function kg(e,t){[e,t]=Le([e,t]);let r=2,[i,a,s]=$n.from(e),[c,u,d]=$n.from(t),h=i-c,f=r*(a-u),b=r*(s-d);return Math.sqrt(h**2+f**2+b**2)}var Eg=Gt.D65,hu=.42,fu=1/hu,Ys=2*Math.PI,pu=[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],Ag=[[1.8620678550872327,-1.0112546305316843,.14918677544445175],[.38752654323613717,.6214474419314753,-.008973985167612518],[-.015841498849333856,-.03412293802851557,1.0499644368778496]],Sg=[[460,451,288],[460,-891,-261],[460,-220,-6300]],Mg={dark:[.8,.525,.8],dim:[.9,.59,.9],average:[1,.69,1]},Fr={h:[20.14,90,164.25,237.53,380.14],e:[.8,.7,1,1.2,.8],H:[0,100,200,300,400]},xg=180/Math.PI,gu=Math.PI/180;function mu(e,t){return e.map(r=>{const i=kt(t*Math.abs(r)*.01,hu);return 400*Yi(i,r)/(i+27.13)})}function Ig(e,t){const r=100/t*27.13**fu;return e.map(i=>{const a=Math.abs(i);return Yi(r*kt(a/(400-a),fu),i)})}function Cg(e){let t=kn(e);t<=Fr.h[0]&&(t+=360);const r=Hd(Fr.h,t)-1,[i,a]=Fr.h.slice(r,r+2),[s,c]=Fr.e.slice(r,r+2),u=Fr.H[r],d=(t-i)/s;return u+100*d/(d+(a-t)/c)}function Og(e){let t=(e%400+400)%400;const r=Math.floor(.01*t);t=t%100;const[i,a]=Fr.h.slice(r,r+2),[s,c]=Fr.e.slice(r,r+2);return kn((t*(c*i-s*a)-100*i*c)/(t*(c-s)-100*c))}function vu(e,t,r,i,a){const s={};s.discounting=a,s.refWhite=e,s.surround=i;const c=e.map(g=>g*100);s.la=t,s.yb=r;const u=c[1],d=mt(c,pu);let h=Mg[s.surround];const f=h[0];s.c=h[1],s.nc=h[2];const b=(1/(5*s.la+1))**4;s.fl=b*s.la+.1*(1-b)*(1-b)*Math.cbrt(5*s.la),s.flRoot=s.fl**.25,s.n=s.yb/u,s.z=1.48+Math.sqrt(s.n),s.nbb=.725*s.n**-.2,s.ncb=s.nbb;const v=Math.max(Math.min(f*(1-1/3.6*Math.exp((-s.la-42)/92)),1),0);s.dRgb=d.map(g=>Qo(1,u/g,v)),s.dRgbInv=s.dRgb.map(g=>1/g);const m=mu(d.map((g,k)=>g*s.dRgb[k]),s.fl);return s.aW=s.nbb*(2*m[0]+m[1]+.05*m[2]),s}var bu=vu(Eg,64/Math.PI*.2,20,"average",!1);function Xs(e,t){if(!(e.J!==void 0^e.Q!==void 0))throw new Error("Conversion requires one and only one: 'J' or 'Q'");if(!(e.C!==void 0^e.M!==void 0^e.s!==void 0))throw new Error("Conversion requires one and only one: 'C', 'M' or 's'");if(!(e.h!==void 0^e.H!==void 0))throw new Error("Conversion requires one and only one: 'h' or 'H'");if(e.J===0||e.Q===0)return[0,0,0];let r=0;e.h!==void 0?r=kn(e.h)*gu:r=Og(e.H)*gu;const i=Math.cos(r),a=Math.sin(r);let s=0;e.J!==void 0?s=kt(e.J,1/2)*.1:e.Q!==void 0&&(s=.25*t.c*e.Q/((t.aW+4)*t.flRoot));let c=0;e.C!==void 0?c=e.C/s:e.M!==void 0?c=e.M/t.flRoot/s:e.s!==void 0&&(c=4e-4*e.s**2*(t.aW+4)/t.c);const u=kt(c*Math.pow(1.64-Math.pow(.29,t.n),-.73),10/9),d=.25*(Math.cos(r+2)+3.8),h=t.aW*kt(s,2/t.c/t.z),f=5e4/13*t.nc*t.ncb*d,b=h/t.nbb,v=23*(b+.305)*Ns(u,23*f+u*(11*i+108*a));return mt(Ig(mt([b,v*i,v*a],Sg).map(m=>m*1/1403),t.fl).map((m,g)=>m*t.dRgbInv[g]),Ag).map(m=>m/100)}function wu(e,t){const r=mu(mt(e.map(k=>k*100),pu).map((k,_)=>k*t.dRgb[_]),t.fl),i=r[0]+(-12*r[1]+r[2])/11,a=(r[0]+r[1]-2*r[2])/9,s=(Math.atan2(a,i)%Ys+Ys)%Ys,c=.25*(Math.cos(s+2)+3.8),u=kt(5e4/13*t.nc*t.ncb*Ns(c*Math.sqrt(i**2+a**2),r[0]+r[1]+1.05*r[2]+.305),.9)*Math.pow(1.64-Math.pow(.29,t.n),.73),d=kt(t.nbb*(2*r[0]+r[1]+.05*r[2])/t.aW,.5*t.c*t.z),h=100*kt(d,2),f=4/t.c*d*(t.aW+4)*t.flRoot,b=u*d,v=b*t.flRoot,m=kn(s*xg),g=Cg(m);return{J:h,C:b,h:m,s:50*kt(t.c*u/(t.aW+4),1/2),Q:f,M:v,H:g}}var Tg=new ye({id:"cam16-jmh",cssId:"--cam16-jmh",name:"CAM16-JMh",coords:{j:{refRange:[0,100],name:"J"},m:{refRange:[0,105],name:"Colorfulness"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:Pt,fromBase(e){this.ε===void 0&&(this.ε=Object.values(this.coords)[1].refRange[1]/1e5);const t=wu(e,bu),r=Math.abs(t.M)<this.ε;return[t.J,r?0:t.M,r?null:t.h]},toBase(e){return Xs({J:e[0],M:e[1],h:e[2]},bu)}}),Lg=Gt.D65,Rg=216/24389,_u=24389/27;function Pg(e){return 116*(e>Rg?Math.cbrt(e):(_u*e+16)/116)-16}function Js(e){return e>8?Math.pow((e+16)/116,3):e/_u}function $g(e,t){let[r,i,a]=e,s=[],c=0;if(a===0)return[0,0,0];let u=Js(a);a>0?c=.00379058511492914*a**2+.608983189401032*a+.9155088574762233:c=9514440756550361e-21*a**2+.08693057439788597*a-21.928975842194614;const d=2e-12,h=15;let f=0,b=1/0;for(;f<=h;){s=Xs({J:c,C:i,h:r},t);const v=Math.abs(s[1]-u);if(v<b){if(v<=d)return s;b=v}c=c-(s[1]-u)*c/(2*s[1]),f+=1}return Xs({J:c,C:i,h:r},t)}function Dg(e,t){const r=Pg(e[1]);if(r===0)return[0,0,0];const i=wu(e,Qs);return[kn(i.h),i.C,r]}var Qs=vu(Lg,200/Math.PI*Js(50),Js(50)*100,"average",!1),ti=new ye({id:"hct",name:"HCT",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},c:{refRange:[0,145],name:"Colorfulness"},t:{refRange:[0,100],name:"Tone"}},base:Pt,fromBase(e){this.ε===void 0&&(this.ε=Object.values(this.coords)[1].refRange[1]/1e5);let t=Dg(e);return t[1]<this.ε&&(t[1]=0,t[0]=null),t},toBase(e){return $g(e,Qs)},formats:{color:{id:"--hct",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),zg=Math.PI/180,yu=[1,.007,.0228];function ku(e){e[1]<0&&(e=ti.fromBase(ti.toBase(e)));const t=Math.log(Math.max(1+yu[2]*e[1]*Qs.flRoot,1))/yu[2],r=e[0]*zg,i=t*Math.cos(r),a=t*Math.sin(r);return[e[2],i,a]}function Bg(e,t){[e,t]=Le([e,t]);let[r,i,a]=ku(ti.from(e)),[s,c,u]=ku(ti.from(t));return Math.sqrt((r-s)**2+(i-c)**2+(a-u)**2)}var po={deltaE76:og,deltaECMC:ig,deltaE2000:Xd,deltaEJz:hg,deltaEITP:yg,deltaEOK:Vs,deltaEOK2:kg,deltaEHCT:Bg};function Ng(e){return Math.max(parseFloat(`1e${(e?Math.floor(Math.log10(Math.abs(e))):0)-2}`),1e-6)}var Eu={hct:{method:"hct.c",jnd:2,deltaEMethod:"hct",blackWhiteClamp:{}},"hct-tonal":{method:"hct.c",jnd:0,deltaEMethod:"hct",blackWhiteClamp:{channel:"hct.t",min:0,max:100}}};function fr(e,{method:t=on.gamut_mapping,space:r=void 0,deltaEMethod:i="",jnd:a=2,blackWhiteClamp:s=void 0}={}){if(e=Le(e),co(arguments[1])?r=arguments[1]:r||(r=e.space),r=ye.get(r),Hr(e,r,{epsilon:0}))return e;let c;if(t==="css")c=Hg(e,{space:r});else{if(t!=="clip"&&!Hr(e,r)){Object.prototype.hasOwnProperty.call(Eu,t)&&({method:t,jnd:a,deltaEMethod:i,blackWhiteClamp:s}=Eu[t]);let u=Xd;if(i!==""){for(let h in po)if("deltae"+i.toLowerCase()===h.toLowerCase()){u=po[h];break}}a===0&&(a=1e-16);let d=fr(nt(e,r),{method:"clip",space:r});if(u(e,d)>a){if(s&&Object.keys(s).length===3){let E=ye.resolveCoord(s.channel),M=an(nt(e,E.space),E.id);if(qe(M)&&(M=0),M>=s.max)return nt({space:"xyz-d65",coords:Gt.D65},e.space);if(M<=s.min)return nt({space:"xyz-d65",coords:[0,0,0]},e.space)}let h=ye.resolveCoord(t),f=h.space,b=h.id,v=nt(e,f);v.coords.forEach((E,M)=>{qe(E)&&(v.coords[M]=0)});let m=(h.range||h.refRange)[0],g=Ng(a),k=m,_=an(v,b);for(;_-k>g;){let E=fo(v);E=fr(E,{space:r,method:"clip"}),u(v,E)-a<g?k=an(v,b):_=an(v,b),Xn(v,b,(k+_)/2)}c=nt(v,r)}else c=d}else c=nt(e,r);if(t==="clip"||!Hr(c,r,{epsilon:0})){let u=Object.values(r.coords).map(d=>d.range||[]);c.coords=c.coords.map((d,h)=>{let[f,b]=u[h];return f!==void 0&&(d=Math.max(f,d)),b!==void 0&&(d=Math.min(d,b)),d})}}return r!==e.space&&(c=nt(c,e.space)),e.coords=c.coords,e}fr.returns="color";var Au={WHITE:{space:$n,coords:[1,0,0],alpha:1},BLACK:{space:$n,coords:[0,0,0],alpha:1}};function Hg(e,{space:t}={}){e=Le(e),t||(t=e.space),t=ye.get(t);const a=ye.get("oklch");if(t.isUnbounded)return nt(e,t);const s=nt(e,a);let c=s.coords[0];if(c>=1){const g=nt(Au.WHITE,t);return g.alpha=e.alpha,nt(g,t)}if(c<=0){const g=nt(Au.BLACK,t);return g.alpha=e.alpha,nt(g,t)}if(Hr(s,t,{epsilon:0}))return nt(s,t);function u(g){const k=nt(g,t),_=Object.values(t.coords);return k.coords=k.coords.map((E,M)=>{if("range"in _[M]){const[T,C]=_[M].range;return Ki(T,E,C)}return E}),k}let d=0,h=s.coords[1],f=!0,b=fo(s),v=u(b),m=Vs(v,b);if(m<.02)return v;for(;h-d>1e-4;){const g=(d+h)/2;if(b.coords[1]=g,f&&Hr(b,t,{epsilon:0}))d=g;else if(v=u(b),m=Vs(v,b),m<.02){if(.02-m<1e-4)break;f=!1,d=g}else h=g}return v}function nt(e,t,{inGamut:r}={}){e=Le(e),t=ye.get(t);let i=t.from(e),a={space:t,coords:i,alpha:e.alpha};return r&&(a=fr(a,r===!0?void 0:r)),a}nt.returns="color";function ni(e,t={}){let{precision:r=on.precision,format:i,inGamut:a=!0,coords:s,alpha:c,commas:u}=t,d,h=Le(e),f=i,b=h.parseMeta;b&&!i&&(b.format.canSerialize()&&(i=b.format,f=b.formatId),s??=b.types,c??=b.alphaType,u??=b.commas),f&&(i=h.space.getFormat(i)??ye.findFormat(f)),i||(i=h.space.getFormat("default")??ye.DEFAULT_FORMAT,f=i.name),i&&i.space&&i.space!==h.space&&(h=nt(h,i.space));let v=h.coords.slice();if(a||=i.toGamut,a&&!Hr(h)&&(v=fr(fo(h),a===!0?void 0:a).coords),i.type==="custom")if(i.serialize)d=i.serialize(v,h.alpha,t);else throw new TypeError(`format ${f} can only be used to parse colors, not for serialization`);else{let m=i.name||"color",g=i.serializeCoords(v,r,s);if(m==="color"){let T=i.id||i.ids?.[0]||h.space.cssId||h.space.id;g.unshift(T)}let k=h.alpha;c!==void 0&&typeof c!="object"&&(c=typeof c=="string"?{type:c}:{include:c});let _=c?.type??"<number>",E=c?.include===!0||i.alpha===!0||c?.include!==!1&&i.alpha!==!1&&k<1,M="";if(u??=i.commas,E){if(r!==null){let T;_==="<percentage>"&&(T="%",k*=100),k=Ds(k,{precision:r,unit:T})}M=`${u?",":" /"} ${k}`}d=`${m}(${g.join(u?", ":" ")}${M})`}return d}var ri=new Bt({id:"rec2020-linear",cssId:"--rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],fromXYZ_M:[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]]}),Su=new Bt({id:"rec2020",name:"REC.2020",base:ri,toBase(e){return e.map(function(t){let r=t<0?-1:1,i=t*r;return r*Math.pow(i,2.4)})},fromBase(e){return e.map(function(t){let r=t<0?-1:1,i=t*r;return r*Math.pow(i,1/2.4)})}}),Mu=new Bt({id:"p3-linear",cssId:"display-p3-linear",name:"Linear P3",white:"D65",toXYZ_M:[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],fromXYZ_M:[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]]}),Fg=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],St=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]],xu=new Bt({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:Fg,fromXYZ_M:St}),Iu={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]},Cu=Array(3).fill("<percentage> | <number>[0, 255]"),Ou=Array(3).fill("<number>[0, 255]"),Gr=new Bt({id:"srgb",name:"sRGB",base:xu,fromBase:e=>e.map(t=>{let r=t<0?-1:1,i=t*r;return i>.0031308?r*(1.055*i**(1/2.4)-.055):12.92*t}),toBase:e=>e.map(t=>{let r=t<0?-1:1,i=t*r;return i<=.04045?t/12.92:r*((i+.055)/1.055)**2.4}),formats:{rgb:{coords:Cu},rgb_number:{name:"rgb",commas:!0,coords:Ou,alpha:!1},color:{},rgba:{coords:Cu,commas:!0,alpha:!0},rgba_number:{name:"rgba",commas:!0,coords:Ou},hex:{type:"custom",toGamut:!0,test:e=>/^#(([a-f0-9]{2}){3,4}|[a-f0-9]{3,4})$/i.test(e),parse(e){e.length<=5&&(e=e.replace(/[a-f0-9]/gi,"$&$&"));let t=[];return e.replace(/[a-f0-9]{2}/gi,r=>{t.push(parseInt(r,16)/255)}),{spaceId:"srgb",coords:t.slice(0,3),alpha:t.slice(3)[0]}},serialize:(e,t,{collapse:r=!0,alpha:i}={})=>{(i!==!1&&t<1||i===!0)&&e.push(t),e=e.map(s=>Math.round(s*255));let a=r&&e.every(s=>s%17===0);return"#"+e.map(s=>a?(s/17).toString(16):s.toString(16).padStart(2,"0")).join("")}},keyword:{type:"custom",test:e=>/^[a-z]+$/i.test(e),parse(e){e=e.toLowerCase();let t={spaceId:"srgb",coords:null,alpha:1};if(e==="transparent"?(t.coords=Iu.black,t.alpha=0):t.coords=Iu[e],t.coords)return t}}}}),Tu=new Bt({id:"p3",cssId:"display-p3",name:"P3",base:Mu,fromBase:Gr.fromBase,toBase:Gr.toBase});on.display_space=Gr;var Gg;if(typeof CSS<"u"&&CSS.supports)for(let e of[sn,Su,Tu]){let t=ni({space:e,coords:e.getMinCoords(),alpha:1});if(CSS.supports("color",t)){on.display_space=e;break}}function Wg(e,{space:t=on.display_space,...r}={}){e=Le(e);let i=ni(e,r);if(typeof CSS>"u"||CSS.supports("color",i)||!on.display_space)i=new String(i),i.color=e;else{let a=e;if((e.coords.some(qe)||qe(e.alpha))&&!(Gg??=CSS.supports("color","hsl(none 50% 50%)"))&&(a=fo(e),a.coords=a.coords.map(yt),a.alpha=yt(a.alpha),i=ni(a,r),CSS.supports("color",i)))return i=new String(i),i.color=a,i;a=nt(a,t),i=new String(ni(a,r)),i.color=a}return i}function Ug(e,t,{space:r,hue:i="shorter"}={}){e=Le(e),r||=e.space,r=ye.get(r);let a=Object.values(r.coords);[e,t]=[e,t].map(h=>nt(h,r));let[s,c]=[e,t].map(h=>h.coords),u=s.map((h,f)=>{let b=a[f],v=c[f];return b.type==="angle"&&([h,v]=jd(i,[h,v])),Lu(h,v)}),d=Lu(e.alpha,t.alpha);return{space:r,coords:u,alpha:d}}function Lu(e,t){return qe(e)||qe(t)?e===t?null:0:e-t}function Vg(e,t){return e=Le(e),t=Le(t),e.space===t.space&&e.alpha===t.alpha&&e.coords.every((r,i)=>r===t.coords[i])}function pr(e){return an(e,[Pt,"y"])}function Ru(e,t){Xn(e,[Pt,"y"],t)}function Zg(e){Object.defineProperty(e.prototype,"luminance",{get(){return pr(this)},set(t){Ru(this,t)}})}var jg=Object.freeze({__proto__:null,getLuminance:pr,register:Zg,setLuminance:Ru});function qg(e,t){e=Le(e),t=Le(t);let r=Math.max(pr(e),0),i=Math.max(pr(t),0);return i>r&&([r,i]=[i,r]),(r+.05)/(i+.05)}var Kg=.56,Yg=.57,Xg=.62,Jg=.65,Pu=.022,Qg=1.414,em=.1,tm=5e-4,nm=1.14,$u=.027,rm=1.14;function Du(e){return e>=Pu?e:e+(Pu-e)**Qg}function go(e){return(e<0?-1:1)*Math.pow(Math.abs(e),2.4)}function om(e,t){t=Le(t),e=Le(e);let r,i,a,s,c,u;t=nt(t,"srgb"),[s,c,u]=t.coords.map(m=>qe(m)?0:m);let d=go(s)*.2126729+go(c)*.7151522+go(u)*.072175;e=nt(e,"srgb"),[s,c,u]=e.coords.map(m=>qe(m)?0:m);let h=go(s)*.2126729+go(c)*.7151522+go(u)*.072175,f=Du(d),b=Du(h),v=b>f;return Math.abs(b-f)<tm?i=0:v?(r=b**Kg-f**Yg,i=r*nm):(r=b**Jg-f**Xg,i=r*rm),Math.abs(i)<em?a=0:i>0?a=i-$u:a=i+$u,a*100}function im(e,t){e=Le(e),t=Le(t);let r=Math.max(pr(e),0),i=Math.max(pr(t),0);i>r&&([r,i]=[i,r]);let a=r+i;return a===0?0:(r-i)/a}var am=5e4;function sm(e,t){e=Le(e),t=Le(t);let r=Math.max(pr(e),0),i=Math.max(pr(t),0);return i>r&&([r,i]=[i,r]),i===0?am:(r-i)/i}function lm(e,t){e=Le(e),t=Le(t);let r=an(e,[sn,"l"]),i=an(t,[sn,"l"]);return Math.abs(r-i)}var cm=216/24389,zu=24/116,oa=24389/27,el=Gt.D65,tl=new ye({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:el,base:Pt,fromBase(e){let t=e.map((r,i)=>r/el[i]).map(r=>r>cm?Math.cbrt(r):(oa*r+16)/116);return[116*t[1]-16,500*(t[0]-t[1]),200*(t[1]-t[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>zu?Math.pow(t[0],3):(116*t[0]-16)/oa,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/oa,t[2]>zu?Math.pow(t[2],3):(116*t[2]-16)/oa].map((r,i)=>r*el[i])},formats:{"lab-d65":{coords:["<number> | <percentage>","<number> | <percentage>","<number> | <percentage>"]}}}),nl=Math.pow(5,.5)*.5+.5;function dm(e,t){e=Le(e),t=Le(t);let r=an(e,[tl,"l"]),i=an(t,[tl,"l"]),a=Math.abs(Math.pow(r,nl)-Math.pow(i,nl)),s=Math.pow(a,1/nl)*Math.SQRT2-40;return s<7.5?0:s}var ia=Object.freeze({__proto__:null,contrastAPCA:om,contrastDeltaPhi:dm,contrastLstar:lm,contrastMichelson:im,contrastWCAG21:qg,contrastWeber:sm});function um(e,t,r){co(r)&&(r={algorithm:r});let{algorithm:i,...a}=r||{};if(!i){let s=Object.keys(ia).map(c=>c.replace(/^contrast/,"")).join(", ");throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${s}`)}e=Le(e),t=Le(t);for(let s in ia)if("contrast"+i.toLowerCase()===s.toLowerCase())return ia[s](e,t,a);throw new TypeError(`Unknown contrast algorithm: ${i}`)}function aa(e){let[t,r,i]=ei(e,Pt),a=t+15*r+3*i;return[4*t/a,9*r/a]}function Bu(e){let[t,r,i]=ei(e,Pt),a=t+r+i;return[t/a,r/a]}function hm(e){Object.defineProperty(e.prototype,"uv",{get(){return aa(this)}}),Object.defineProperty(e.prototype,"xy",{get(){return Bu(this)}})}var fm=Object.freeze({__proto__:null,register:hm,uv:aa,xy:Bu});function oi(e,t,r={}){co(r)&&(r={method:r});let{method:i=on.deltaE,...a}=r;for(let s in po)if("deltae"+i.toLowerCase()===s.toLowerCase())return po[s](e,t,a);throw new TypeError(`Unknown deltaE method: ${i}`)}function Nu(e,t=.25){return Xn(e,[ye.get("oklch","lch"),"l"],r=>r*(1+t))}function Hu(e,t=.25){return Xn(e,[ye.get("oklch","lch"),"l"],r=>r*(1-t))}Nu.returns="color",Hu.returns="color";var pm=Object.freeze({__proto__:null,darken:Hu,lighten:Nu});function Fu(e,t,r,i={}){return[e,t]=[Le(e),Le(t)],dr(r)==="object"&&([r,i]=[.5,r]),ii(e,t,i)(r??.5)}function Gu(e,t,r={}){let i;rl(e)&&([i,r]=[e,t],[e,t]=i.rangeArgs.colors);let{maxDeltaE:a,deltaEMethod:s,steps:c=2,maxSteps:u=1e3,...d}=r;i||([e,t]=[Le(e),Le(t)],i=ii(e,t,d));let h=oi(e,t),f=a>0?Math.max(c,Math.ceil(h/a)+1):c,b=[];if(u!==void 0&&(f=Math.min(f,u)),f===1)b=[{p:.5,color:i(.5)}];else{let v=1/(f-1);b=Array.from({length:f},(m,g)=>{let k=g*v;return{p:k,color:i(k)}})}if(a>0){let v=b.reduce((m,g,k)=>{if(k===0)return 0;let _=oi(g.color,b[k-1].color,s);return Math.max(m,_)},0);for(;v>a;){v=0;for(let m=1;m<b.length&&b.length<u;m++){let g=b[m-1],k=b[m],_=(k.p+g.p)/2,E=i(_);v=Math.max(v,oi(E,g.color),oi(E,k.color)),b.splice(m,0,{p:_,color:i(_)}),m++}}}return b=b.map(v=>v.color),b}function ii(e,t,r={}){if(rl(e)){let[d,h]=[e,t];return ii(...d.rangeArgs.colors,{...d.rangeArgs.options,...h})}let{space:i,outputSpace:a,progression:s,premultiplied:c}=r;e=Le(e),t=Le(t),e=fo(e),t=fo(t);let u={colors:[e,t],options:r};if(i?i=ye.get(i):i=ye.registry[on.interpolationSpace]||e.space,a=a?ye.get(a):i,e=nt(e,i),t=nt(t,i),e=fr(e),t=fr(t),i.coords.h&&i.coords.h.type==="angle"){let d=r.hue=r.hue||"shorter",h=[i,"h"],[f,b]=[an(e,h),an(t,h)];qe(f)&&!qe(b)?f=b:qe(b)&&!qe(f)&&(b=f),[f,b]=jd(d,[f,b]),Xn(e,h,f),Xn(t,h,b)}return c&&(e.coords=e.coords.map(d=>d*e.alpha),t.coords=t.coords.map(d=>d*t.alpha)),Object.assign(d=>{d=s?s(d):d;let h=e.coords.map((v,m)=>{let g=t.coords[m];return Qo(v,g,d)}),f=Qo(e.alpha,t.alpha,d),b={space:i,coords:h,alpha:f};return c&&(b.coords=b.coords.map(v=>v/f)),a!==i&&(b=nt(b,a)),b},{rangeArgs:u})}function rl(e){return dr(e)==="function"&&!!e.rangeArgs}on.interpolationSpace="lab";function gm(e){e.defineFunction("mix",Fu,{returns:"color"}),e.defineFunction("range",ii,{returns:"function<color>"}),e.defineFunction("steps",Gu,{returns:"array<color>"})}var mm=Object.freeze({__proto__:null,isRange:rl,mix:Fu,range:ii,register:gm,steps:Gu}),vm=new ye({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:Gr,fromBase:e=>{let t=Math.max(...e),r=Math.min(...e),[i,a,s]=e,[c,u,d]=[null,0,(r+t)/2],h=t-r;if(h!==0){switch(u=d===0||d===1?0:(t-d)/Math.min(d,1-d),t){case i:c=(a-s)/h+(a<s?6:0);break;case a:c=(s-i)/h+2;break;case s:c=(i-a)/h+4}c=c*60}return u<0&&(c+=180,u=Math.abs(u)),c>=360&&(c-=360),[c,u*100,d*100]},toBase:e=>{let[t,r,i]=e;t=t%360,t<0&&(t+=360),r/=100,i/=100;function a(s){let c=(s+t/30)%12,u=r*Math.min(i,1-i);return i-u*Math.max(-1,Math.min(c-3,9-c,1))}return[a(0),a(8),a(4)]},formats:{hsl:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]},hsla:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"],commas:!0,alpha:!0}}}),Wu=new ye({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:Gr,fromBase(e){let t=Math.max(...e),r=Math.min(...e),[i,a,s]=e,[c,u,d]=[null,0,t],h=t-r;if(h!==0){switch(t){case i:c=(a-s)/h+(a<s?6:0);break;case a:c=(s-i)/h+2;break;case s:c=(i-a)/h+4}c=c*60}return d&&(u=h/d),c>=360&&(c-=360),[c,u*100,d*100]},toBase(e){let[t,r,i]=e;t=t%360,t<0&&(t+=360),r/=100,i/=100;function a(s){let c=(s+t/60)%6;return i-i*r*Math.max(0,Math.min(c,4-c,1))}return[a(5),a(3),a(1)]},formats:{color:{id:"--hsv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),bm=new ye({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:Wu,fromBase(e){let[t,r,i]=e;return[t,i*(100-r)/100,100-i]},toBase(e){let[t,r,i]=e;r/=100,i/=100;let a=r+i;if(a>=1)return[t,0,r/a*100];let s=1-i;return[t,(s===0?0:1-r/s)*100,s*100]},formats:{hwb:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),Uu=new Bt({id:"a98rgb-linear",cssId:"--a98-rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",toXYZ_M:[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],fromXYZ_M:[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]]}),wm=new Bt({id:"a98rgb",cssId:"a98-rgb",name:"Adobe® 98 RGB compatible",base:Uu,toBase:e=>e.map(t=>Math.pow(Math.abs(t),563/256)*Math.sign(t)),fromBase:e=>e.map(t=>Math.pow(Math.abs(t),256/563)*Math.sign(t))}),Vu=new Bt({id:"prophoto-linear",cssId:"--prophoto-rgb-linear",name:"Linear ProPhoto",white:"D50",base:Ws,toXYZ_M:[[.7977666449006423,.13518129740053308,.0313477341283922],[.2880748288194013,.711835234241873,8993693872564e-17],[0,0,.8251046025104602]],fromXYZ_M:[[1.3457868816471583,-.25557208737979464,-.05110186497554526],[-.5446307051249019,1.5082477428451468,.02052744743642139],[0,0,1.2119675456389452]]}),_m=1/512,ym=16/512,km=new Bt({id:"prophoto",cssId:"prophoto-rgb",name:"ProPhoto",base:Vu,toBase(e){return e.map(t=>{let r=t<0?-1:1,i=t*r;return i<ym?t/16:r*i**1.8})},fromBase(e){return e.map(t=>{let r=t<0?-1:1,i=t*r;return i>=_m?r*i**(1/1.8):16*t})}}),sa=1.09929682680944,Zu=.018053968510807,Em=new Bt({id:"--rec2020-oetf",name:"REC.2020_Scene_Referred",base:ri,referred:"scene",toBase(e){return e.map(function(t){let r=t<0?-1:1,i=t*r;return i<Zu*4.5?t/4.5:r*Math.pow((i+sa-1)/sa,1/.45)})},fromBase(e){return e.map(function(t){let r=t<0?-1:1,i=t*r;return i>=Zu?r*(sa*Math.pow(i,.45)-(sa-1)):4.5*t})}}),Am=new ye({id:"oklch",name:"OkLCh",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:$n,fromBase:ln.fromBase,toBase:ln.toBase,formats:{oklch:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <angle>"]}}}),mo=2*Math.PI,la=[[4.076741636075958,-3.307711539258063,.2309699031821043],[-1.2684379732850315,2.609757349287688,-.341319376002657],[-.0041960761386756,-.7034186179359362,1.7076146940746117]],ca=[[[-1.8817031,-.80936501],[1.19086277,1.76576728,.59662641,.75515197,.56771245]],[[1.8144408,-1.19445267],[.73956515,-.45954404,.08285427,.12541073,-.14503204]],[[.13110758,1.81333971],[1.35733652,-.00915799,-1.1513021,-.50559606,.00692167]]],ol=Number.MAX_VALUE,ai=.206,il=.03,si=(1+ai)/(1+il);function $t(e,t){let r=e.length;if(r!==t.length)throw new Error(`Vectors of size ${r} and ${t.length} are not aligned`);let i=0;return e.forEach((a,s)=>{i+=a*t[s]}),i}function li(e){return .5*(si*e-ai+Math.sqrt((si*e-ai)*(si*e-ai)+4*il*si*e))}function vo(e){return(e**2+ai*e)/(si*(e+il))}function al(e){let[t,r]=e;return[r/t,r/(1-t)]}function Sm(e,t){return[.11516993+1/(7.4477897+4.1590124*t+e*(-2.19557347+1.75198401*t+e*(-2.13704948-10.02301043*t+e*(-4.24894561+5.38770819*t+4.69891013*e)))),.11239642+1/(1.6132032-.68124379*t+e*(.40370612+.90148123*t+e*(-.27087943+.6122399*t+e*(.00299215-.45399568*t-.14661872*e))))]}function sl(e,t){let r=mt(e,hr);return r[0]=r[0]**3,r[1]=r[1]**3,r[2]=r[2]**3,mt(r,t,r)}function da(e,t,r,i){let a=xm(e,t,r,i),s=sl([1,a*e,a*t],r),c=kt(1/Math.max(...s),1/3);return[c,c*a]}function Mm(e,t,r,i,a,s,c,u){let d;if(u===void 0&&(u=da(e,t,s,c)),(r-a)*u[1]-(u[0]-a)*i<=0)d=u[1]*a/(i*u[0]+u[1]*(a-r));else{d=u[1]*(a-1)/(i*(u[0]-1)+u[1]*(a-r));let h=r-a,f=i,b=$t(hr[0].slice(1),[e,t]),v=$t(hr[1].slice(1),[e,t]),m=$t(hr[2].slice(1),[e,t]),g=h+f*b,k=h+f*v,_=h+f*m,E=a*(1-d)+d*r,M=d*i,T=E+M*b,C=E+M*v,D=E+M*m,q=T**3,Z=C**3,ne=D**3,F=3*g*T**2,pe=3*k*C**2,we=3*_*D**2,R=6*g**2*T,Y=6*k**2*C,A=6*_**2*D,J=$t(s[0],[q,Z,ne])-1,xe=$t(s[0],[F,pe,we]),le=$t(s[0],[R,Y,A]),Ie=xe/(xe*xe-.5*J*le),oe=-J*Ie,Se=$t(s[1],[q,Z,ne])-1,W=$t(s[1],[F,pe,we]),H=$t(s[1],[R,Y,A]),Ae=W/(W*W-.5*Se*H),ge=-Se*Ae,he=$t(s[2],[q,Z,ne])-1,je=$t(s[2],[F,pe,we]),ft=$t(s[2],[R,Y,A]),We=je/(je*je-.5*he*ft),Fe=-he*We;oe=Ie>=0?oe:ol,ge=Ae>=0?ge:ol,Fe=We>=0?Fe:ol,d+=Math.min(oe,Math.min(ge,Fe))}return d}function ju(e,t,r){let[i,a,s]=e,c=da(a,s,t,r),u=Mm(a,s,i,1,i,t,r,c),d=al(c),h=u/Math.min(i*d[0],(1-i)*d[1]),f=Sm(a,s),b=i*f[0],v=(1-i)*f[1],m=.9*h*Math.sqrt(Math.sqrt(1/(1/b**4+1/v**4)));return b=i*.4,v=(1-i)*.8,[Math.sqrt(1/(1/b**2+1/v**2)),m,u]}function xm(e,t,r,i){let a,s,c,u,d,h,f,b;$t(i[0][0],[e,t])>1?([a,s,c,u,d]=i[0][1],[h,f,b]=r[0]):$t(i[1][0],[e,t])>1?([a,s,c,u,d]=i[1][1],[h,f,b]=r[1]):([a,s,c,u,d]=i[2][1],[h,f,b]=r[2]);let v=a+s*e+c*t+u*e**2+d*e*t,m=$t(hr[0].slice(1),[e,t]),g=$t(hr[1].slice(1),[e,t]),k=$t(hr[2].slice(1),[e,t]),_=1+v*m,E=1+v*g,M=1+v*k,T=_**3,C=E**3,D=M**3,q=3*m*_**2,Z=3*g*E**2,ne=3*k*M**2,F=6*m**2*_,pe=6*g**2*E,we=6*k**2*M,R=h*T+f*C+b*D,Y=h*q+f*Z+b*ne,A=h*F+f*pe+b*we;return v=v-R*Y/(Y**2-.5*R*A),v}function Im(e,t,r){let[i,a,s]=e,c=vo(s),u=null,d=null;if(i=kn(i)/360,c!==0&&c!==1&&a!==0){let h=Math.cos(mo*i),f=Math.sin(mo*i),[b,v,m]=ju([c,h,f],t,r),g=.8,k=1.25,_,E,M,T;a<g?(_=k*a,E=0,M=g*b,T=1-M/v):(_=5*(a-.8),E=v,M=.2*v**2*1.25**2/b,T=1-M/(m-v));let C=E+_*M/(1-T*_);u=C*h,d=C*f}return[c,u,d]}function Cm(e,t,r){let i=1e-7,a=1e-4,s=e[0],c=0,u=li(s),d=Math.sqrt(e[1]**2+e[2]**2),h=.5+Math.atan2(-e[2],-e[1])/mo;if(u!==0&&u!==1&&d!==0){let[b,v,m]=ju([s,e[1]/d,e[2]/d],t,r),g=.8,k=1.25,_,E,M,T;d<v?(E=g*b,M=1-E/v,T=d/(E+M*d),c=T*g):(_=v,E=.2*v**2*k**2/b,M=1-E/(m-v),T=(d-_)/(E+M*(d-_)),c=g+.2*T)}const f=Math.abs(c)<a;return f||u===0||Math.abs(1-u)<i?(h=null,f||(c=0)):h=kn(h*360),[h,c,u]}var Om=new ye({id:"okhsl",name:"Okhsl",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,1],name:"Saturation"},l:{range:[0,1],name:"Lightness"}},base:$n,gamutSpace:"self",fromBase(e){return Cm(e,la,ca)},toBase(e){return Im(e,la,ca)},formats:{color:{id:"--okhsl",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),qu=new ye({id:"oklrab",name:"Oklrab",coords:{l:{refRange:[0,1],name:"Lightness"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:$n,fromBase(e){return[li(e[0]),e[1],e[2]]},toBase(e){return[vo(e[0]),e[1],e[2]]},formats:{color:{coords:["<percentage> | <number>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}}),Tm=new ye({id:"oklrch",name:"Oklrch",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:qu,fromBase:ln.fromBase,toBase:ln.toBase,formats:{color:{coords:["<percentage> | <number>","<number> | <percentage>[0,1]","<number> | <angle>"]}}});function Lm(e,t,r){let[i,a,s]=e;i=kn(i)/360;let c=vo(s),u=null,d=null;if(c!==0&&a!==0){let h=Math.cos(mo*i),f=Math.sin(mo*i),[b,v]=al(da(h,f,t,r)),m=.5,g=1-m/b,k=1-a*m/(m+v-v*g*a),_=a*v*m/(m+v-v*g*a);c=s*k;let E=s*_,M=vo(k),T=_*M/k,C=vo(c);E=E*C/c,c=C;let[D,q,Z]=sl([M,h*T,f*T],t),ne=kt(1/Math.max(Math.max(D,q),Math.max(Z,0)),1/3);c=c*ne,E=E*ne,u=E*h,d=E*f}return[c,u,d]}function Rm(e,t,r){let i=1e-4,a=e[0],s=0,c=li(a),u=Math.sqrt(e[1]**2+e[2]**2),d=.5+Math.atan2(-e[2],-e[1])/mo;if(a!==0&&a!==1&&u!==0){let h=e[1]/u,f=e[2]/u,[b,v]=al(da(h,f,t,r)),m=.5,g=1-m/b,k=v/(u+a*v),_=k*a,E=k*u,M=vo(_),T=E*M/_,[C,D,q]=sl([M,h*T,f*T],t),Z=kt(1/Math.max(Math.max(C,D),Math.max(q,0)),1/3);a=a/Z,u=u/Z,u=u*li(a)/a,a=li(a),c=a/_,s=(m+v)*E/(v*m+v*g*E)}return Math.abs(s)<i||c===0?d=null:d=kn(d*360),[d,s,c]}var Pm=new ye({id:"okhsv",name:"Okhsv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,1],name:"Saturation"},v:{range:[0,1],name:"Value"}},base:$n,gamutSpace:"self",fromBase(e){return Rm(e,la,ca)},toBase(e){return Lm(e,la,ca)},formats:{color:{id:"--okhsv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),Ku=Gt.D65,$m=216/24389,Yu=24389/27,[Xu,Ju]=aa({space:Pt,coords:Ku}),Qu=new ye({id:"luv",name:"Luv",coords:{l:{refRange:[0,100],name:"Lightness"},u:{refRange:[-215,215]},v:{refRange:[-215,215]}},white:Ku,base:Pt,fromBase(e){let t=[yt(e[0]),yt(e[1]),yt(e[2])],r=t[1],[i,a]=aa({space:Pt,coords:t});if(!Number.isFinite(i)||!Number.isFinite(a))return[0,0,0];let s=r<=$m?Yu*r:116*Math.cbrt(r)-16;return[s,13*s*(i-Xu),13*s*(a-Ju)]},toBase(e){let[t,r,i]=e;if(t===0||qe(t))return[0,0,0];r=yt(r),i=yt(i);let a=r/(13*t)+Xu,s=i/(13*t)+Ju,c=t<=8?t/Yu:Math.pow((t+16)/116,3);return[c*(9*a/(4*s)),c,c*((12-3*a-20*s)/(4*s))]},formats:{color:{id:"--luv",coords:["<number> | <percentage>","<number> | <percentage>","<number> | <percentage>"]}}}),ll=new ye({id:"lchuv",name:"LChuv",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,220],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:Qu,fromBase:ln.fromBase,toBase:ln.toBase,formats:{color:{id:"--lchuv",coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}}),Dm=216/24389,zm=24389/27,e0=St[0][0],t0=St[0][1],cl=St[0][2],n0=St[1][0],r0=St[1][1],dl=St[1][2],o0=St[2][0],i0=St[2][1],ul=St[2][2];function bo(e,t,r){const i=t/(Math.sin(r)-e*Math.cos(r));return i<0?1/0:i}function ua(e){const t=Math.pow(e+16,3)/1560896,r=t>Dm?t:e/zm,i=r*(284517*e0-94839*cl),a=r*(838422*cl+769860*t0+731718*e0),s=r*(632260*cl-126452*t0),c=r*(284517*n0-94839*dl),u=r*(838422*dl+769860*r0+731718*n0),d=r*(632260*dl-126452*r0),h=r*(284517*o0-94839*ul),f=r*(838422*ul+769860*i0+731718*o0),b=r*(632260*ul-126452*i0);return{r0s:i/s,r0i:a*e/s,r1s:i/(s+126452),r1i:(a-769860)*e/(s+126452),g0s:c/d,g0i:u*e/d,g1s:c/(d+126452),g1i:(u-769860)*e/(d+126452),b0s:h/b,b0i:f*e/b,b1s:h/(b+126452),b1i:(f-769860)*e/(b+126452)}}function a0(e,t){const r=t/360*Math.PI*2,i=bo(e.r0s,e.r0i,r),a=bo(e.r1s,e.r1i,r),s=bo(e.g0s,e.g0i,r),c=bo(e.g1s,e.g1i,r),u=bo(e.b0s,e.b0i,r),d=bo(e.b1s,e.b1i,r);return Math.min(i,a,s,c,u,d)}var Bm=new ye({id:"hsluv",name:"HSLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:ll,gamutSpace:Gr,fromBase(e){let[t,r,i]=[yt(e[0]),yt(e[1]),yt(e[2])],a;return t>99.9999999?(a=0,t=100):t<1e-8?(a=0,t=0):a=r/a0(ua(t),i)*100,[i,a,t]},toBase(e){let[t,r,i]=[yt(e[0]),yt(e[1]),yt(e[2])],a;return i>99.9999999?(i=100,a=0):i<1e-8?(i=0,a=0):a=a0(ua(i),t)/100*r,[i,a,t]},formats:{color:{id:"--hsluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});St[0][0],St[0][1],St[0][2],St[1][0],St[1][1],St[1][2],St[2][0],St[2][1],St[2][2];function wo(e,t){return Math.abs(t)/Math.sqrt(Math.pow(e,2)+1)}function s0(e){let t=wo(e.r0s,e.r0i),r=wo(e.r1s,e.r1i),i=wo(e.g0s,e.g0i),a=wo(e.g1s,e.g1i),s=wo(e.b0s,e.b0i),c=wo(e.b1s,e.b1i);return Math.min(t,r,i,a,s,c)}var Nm=new ye({id:"hpluv",name:"HPLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:ll,gamutSpace:"self",fromBase(e){let[t,r,i]=[yt(e[0]),yt(e[1]),yt(e[2])],a;return t>99.9999999?(a=0,t=100):t<1e-8?(a=0,t=0):a=r/s0(ua(t))*100,[i,a,t]},toBase(e){let[t,r,i]=[yt(e[0]),yt(e[1]),yt(e[2])],a;return i>99.9999999?(i=100,a=0):i<1e-8?(i=0,a=0):a=s0(ua(i))/100*r,[i,a,t]},formats:{color:{id:"--hpluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),hl=new Bt({id:"rec2100-linear",name:"Linear REC.2100",white:"D65",toBase:ri.toBase,fromBase:ri.fromBase}),l0=203,c0=2610/2**14,Hm=2**14/2610,Fm=2523/2**5,d0=2**5/2523,u0=3424/2**12,h0=2413/2**7,f0=2392/2**7,Gm=new Bt({id:"rec2100pq",cssId:"rec2100-pq",name:"REC.2100-PQ",base:hl,toBase(e){return e.map(function(t){return(Math.max(t**d0-u0,0)/(h0-f0*t**d0))**Hm*1e4/l0})},fromBase(e){return e.map(function(t){let r=Math.max(t*l0/1e4,0);return((u0+h0*r**c0)/(1+f0*r**c0))**Fm})}}),p0=.17883277,g0=.28466892,m0=.55991073,fl=3.7743,Wm=new Bt({id:"rec2100hlg",cssId:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:hl,toBase(e){return e.map(function(t){return t<=.5?t**2/3*fl:(Math.exp((t-m0)/p0)+g0)/12*fl})},fromBase(e){return e.map(function(t){return t/=fl,t<=1/12?kt(3*t,.5):p0*Math.log(12*t-g0)+m0})}}),v0={};ur.add("chromatic-adaptation-start",e=>{e.options.method&&(e.M=b0(e.W1,e.W2,e.options.method))}),ur.add("chromatic-adaptation-end",e=>{e.M||(e.M=b0(e.W1,e.W2,e.options.method))});function ha({id:e,toCone_M:t,fromCone_M:r}){v0[e]=arguments[0]}function b0(e,t,r="Bradford"){let i=v0[r],[a,s,c]=Jo(i.toCone_M,e),[u,d,h]=Jo(i.toCone_M,t),f=Jo([[u/a,0,0],[0,d/s,0],[0,0,h/c]],i.toCone_M);return Jo(i.fromCone_M,f)}ha({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599363874558397,-1.1293816185800916,.21989740959619328],[.3611914362417676,.6388124632850422,-6370596838649899e-21],[0,0,1.0890636230968613]]}),ha({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929054667121,-.14705425642099013,.15996265166373122],[.4323052697233945,.5183602715367774,.049291228212855594],[-.00852866457517732,.04004282165408486,.96848669578755]]}),ha({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238208355142,-.27886900021828726,.18274517938277307],[.4543690419753592,.4735331543074117,.07209780371722911],[-.009627608738429355,-.00569803121611342,1.0153256399545427]]}),ha({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.0112546305316845,.14918677544445172],[.3875265432361372,.6214474419314753,-.008973985167612521],[-.01584149884933386,-.03412293802851557,1.0499644368778496]]}),Object.assign(Gt,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]}),Gt.ACES=[.32168/.33767,1,.34065/.33767];var w0=new Bt({id:"acescg",cssId:"--acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:Gt.ACES,toXYZ_M:[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],fromXYZ_M:[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]]}),fa=2**-16,pl=-.35828683,pa=(Math.log2(65504)+9.72)/17.52,Um=new Bt({id:"acescc",cssId:"--acescc",name:"ACEScc",coords:{r:{range:[pl,pa],name:"Red"},g:{range:[pl,pa],name:"Green"},b:{range:[pl,pa],name:"Blue"}},referred:"scene",base:w0,toBase(e){const t=-.3013698630136986;return e.map(function(r){return r<=t?(2**(r*17.52-9.72)-fa)*2:r<pa?2**(r*17.52-9.72):65504})},fromBase(e){return e.map(function(t){return t<=0?(Math.log2(fa)+9.72)/17.52:t<fa?(Math.log2(fa+t*.5)+9.72)/17.52:(Math.log2(t)+9.72)/17.52})}}),_0=Object.freeze({__proto__:null,A98RGB:wm,A98RGB_Linear:Uu,ACEScc:Um,ACEScg:w0,CAM16_JMh:Tg,HCT:ti,HPLuv:Nm,HSL:vm,HSLuv:Bm,HSV:Wu,HWB:bm,ICTCP:Ks,JzCzHz:qs,Jzazbz:au,LCH:ln,LCHuv:ll,Lab:sn,Lab_D65:tl,Luv:Qu,OKLCH:Am,OKLab:$n,OKLrCH:Tm,OKLrab:qu,Okhsl:Om,Okhsv:Pm,P3:Tu,P3_Linear:Mu,ProPhoto:km,ProPhoto_Linear:Vu,REC_2020:Su,REC_2020_Linear:ri,REC_2020_Scene_Referred:Em,REC_2100_HLG:Wm,REC_2100_Linear:hl,REC_2100_PQ:Gm,XYZ_ABS_D65:Zs,XYZ_D50:Ws,XYZ_D65:Pt,sRGB:Gr,sRGB_Linear:xu}),st=class rn{constructor(...t){let r;if(t.length===1){let c={};typeof t[0]=="object"&&Object.getPrototypeOf(t[0]).constructor===Object&&(t[0]={...t[0]}),r=Le(t[0],{parseMeta:c}),c.format&&(this.parseMeta=c)}let i,a,s;r?(i=r.space||r.spaceId,a=r.coords,s=r.alpha):[i,a,s]=t,Object.defineProperty(this,"space",{value:ye.get(i),writable:!1,enumerable:!0,configurable:!0}),this.coords=a?a.slice():[0,0,0],this.alpha=qe(s)?s:s===void 0?1:Ki(0,s,1);for(let c in this.space.coords)Object.defineProperty(this,c,{get:()=>this.get(c),set:u=>this.set(c,u)})}get spaceId(){return this.space.id}clone(){return new rn(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...t){let r=Wg(this,...t);return r.color=new rn(r.color),r}static get(t,...r){return uo(t,this)?t:new rn(t,...r)}static try(t,r){if(uo(t,this))return t;let i=Vd(t,r);return i?new rn(i):null}static defineFunction(t,r,i=r){let{instance:a=!0,returns:s}=i,c=function(...u){let d=r(...u);if(s==="color")d=rn.get(d);else if(s==="function<color>"){let h=d;d=function(...f){let b=h(...f);return rn.get(b)},Object.assign(d,h)}else s==="array<color>"&&(d=d.map(h=>rn.get(h)));return d};t in rn||(rn[t]=c),a&&(rn.prototype[t]=function(...u){return c(this,...u)})}static defineFunctions(t){for(let r in t)rn.defineFunction(r,t[r],t[r])}static extend(t){if(t.register)t.register(rn);else for(let r in t)rn.defineFunction(r,t[r])}};st.defineFunctions({get:an,getAll:ei,set:Xn,setAll:Gs,to:nt,equals:Vg,inGamut:Hr,toGamut:fr,distance:Jd,deltas:Ug,toString:ni}),Object.assign(st,{util:jp,hooks:ur,WHITES:Gt,Space:ye,spaces:ye.registry,parse:Wd,defaults:on});for(let e of Object.keys(_0))ye.register(_0[e]);for(let e in ye.registry)gl(e,ye.registry[e]);ur.add("colorspace-init-end",e=>{gl(e.id,e),e.aliases?.forEach(t=>{gl(t,e)})});function gl(e,t){let r=e.replace(/-/g,"_");Object.defineProperty(st.prototype,r,{get(){let i=this.getAll(e);if(typeof Proxy>"u")return i;let a=new Proxy(i,{has:(s,c)=>{try{return ye.resolveCoord([t,c]),!0}catch{}return Reflect.has(s,c)},get:(s,c,u)=>{if(c&&typeof c!="symbol"&&!(c in s)&&c in a){let{index:d}=ye.resolveCoord([t,c]);if(d>=0)return s[d]}return Reflect.get(s,c,u)},set:(s,c,u,d)=>{if(c&&typeof c!="symbol"&&!(c in s)||Number(c)>=0){let{index:h}=ye.resolveCoord([t,c]);if(h>=0)return s[h]=u,this.setAll(e,s),!0}return Reflect.set(s,c,u,d)}});return a},set(i){this.setAll(e,i)},configurable:!0,enumerable:!0})}st.extend(po),st.extend({deltaE:oi}),Object.assign(st,{deltaEMethods:po}),st.extend(pm),st.extend({contrast:um}),st.extend(fm),st.extend(jg),st.extend(mm),st.extend(ia);var ml={navy:"#001f3f",darkblue:"#1e4f7a",blue:"#1A2F4B",darkgreen:"#062925",green:"#1A3636",grass:"#1B3C53",teal:"#044A42",darkpurple:"#1B0044",purple:"#363062",grape:"#31326F",maroon:"#44000D"},Et={dark:{50:"#C1C2C5",100:"#A6A7AB",200:"#909296",300:"#5c5f66",400:"#373A40",500:"#2C2E33",600:"#25262b",700:"#1A1B1E",800:"#141517",900:"#101113",950:"#000000"},slate:{50:"oklch(98.4% 0.003 247.858)",100:"oklch(96.8% 0.007 247.896)",200:"oklch(92.9% 0.013 255.508)",300:"oklch(86.9% 0.022 252.894)",400:"oklch(70.4% 0.04 256.788)",500:"oklch(55.4% 0.046 257.417)",600:"oklch(44.6% 0.043 257.281)",700:"oklch(37.2% 0.044 257.287)",800:"oklch(27.9% 0.041 260.031)",900:"oklch(20.8% 0.042 265.755)",950:"oklch(12.9% 0.042 264.695)"},gray:{50:"oklch(98.5% 0.002 247.839)",100:"oklch(96.7% 0.003 264.542)",200:"oklch(92.8% 0.006 264.531)",300:"oklch(87.2% 0.01 258.338)",400:"oklch(70.7% 0.022 261.325)",500:"oklch(55.1% 0.027 264.364)",600:"oklch(44.6% 0.03 256.802)",700:"oklch(37.3% 0.034 259.733)",800:"oklch(27.8% 0.033 256.848)",900:"oklch(21% 0.034 264.665)",950:"oklch(13% 0.028 261.692)"},zinc:{50:"oklch(98.5% 0 0)",100:"oklch(96.7% 0.001 286.375)",200:"oklch(92% 0.004 286.32)",300:"oklch(87.1% 0.006 286.286)",400:"oklch(70.5% 0.015 286.067)",500:"oklch(55.2% 0.016 285.938)",600:"oklch(44.2% 0.017 285.786)",700:"oklch(37% 0.013 285.805)",800:"oklch(27.4% 0.006 286.033)",900:"oklch(21% 0.006 285.885)",950:"oklch(14.1% 0.005 285.823)"},neutral:{50:"oklch(98.5% 0 0)",100:"oklch(97% 0 0)",200:"oklch(92.2% 0 0)",300:"oklch(87% 0 0)",400:"oklch(70.8% 0 0)",500:"oklch(55.6% 0 0)",600:"oklch(43.9% 0 0)",700:"oklch(37.1% 0 0)",800:"oklch(26.9% 0 0)",900:"oklch(20.5% 0 0)",950:"oklch(14.5% 0 0)"},stone:{50:"oklch(98.5% 0.001 106.423)",100:"oklch(97% 0.001 106.424)",200:"oklch(92.3% 0.003 48.717)",300:"oklch(86.9% 0.005 56.366)",400:"oklch(70.9% 0.01 56.259)",500:"oklch(55.3% 0.013 58.071)",600:"oklch(44.4% 0.011 73.639)",700:"oklch(37.4% 0.01 67.558)",800:"oklch(26.8% 0.007 34.298)",900:"oklch(21.6% 0.006 56.043)",950:"oklch(14.7% 0.004 49.25)"},red:{50:"oklch(97.1% 0.013 17.38)",100:"oklch(93.6% 0.032 17.717)",200:"oklch(88.5% 0.062 18.334)",300:"oklch(80.8% 0.114 19.571)",400:"oklch(70.4% 0.191 22.216)",500:"oklch(63.7% 0.237 25.331)",600:"oklch(57.7% 0.245 27.325)",700:"oklch(50.5% 0.213 27.518)",800:"oklch(44.4% 0.177 26.899)",900:"oklch(39.6% 0.141 25.723)",950:"oklch(25.8% 0.092 26.042)"},orange:{50:"oklch(98% 0.016 73.684)",100:"oklch(95.4% 0.038 75.164)",200:"oklch(90.1% 0.076 70.697)",300:"oklch(83.7% 0.128 66.29)",400:"oklch(75% 0.183 55.934)",500:"oklch(70.5% 0.213 47.604)",600:"oklch(64.6% 0.222 41.116)",700:"oklch(55.3% 0.195 38.402)",800:"oklch(47% 0.157 37.304)",900:"oklch(40.8% 0.123 38.172)",950:"oklch(26.6% 0.079 36.259)"},amber:{50:"oklch(98.7% 0.022 95.277)",100:"oklch(96.2% 0.059 95.617)",200:"oklch(92.4% 0.12 95.746)",300:"oklch(87.9% 0.169 91.605)",400:"oklch(82.8% 0.189 84.429)",500:"oklch(76.9% 0.188 70.08)",600:"oklch(66.6% 0.179 58.318)",700:"oklch(55.5% 0.163 48.998)",800:"oklch(47.3% 0.137 46.201)",900:"oklch(41.4% 0.112 45.904)",950:"oklch(27.9% 0.077 45.635)"},yellow:{50:"oklch(98.7% 0.026 102.212)",100:"oklch(97.3% 0.071 103.193)",200:"oklch(94.5% 0.129 101.54)",300:"oklch(90.5% 0.182 98.111)",400:"oklch(85.2% 0.199 91.936)",500:"oklch(79.5% 0.184 86.047)",600:"oklch(68.1% 0.162 75.834)",700:"oklch(55.4% 0.135 66.442)",800:"oklch(47.6% 0.114 61.907)",900:"oklch(42.1% 0.095 57.708)",950:"oklch(28.6% 0.066 53.813)"},lime:{50:"oklch(98.6% 0.031 120.757)",100:"oklch(96.7% 0.067 122.328)",200:"oklch(93.8% 0.127 124.321)",300:"oklch(89.7% 0.196 126.665)",400:"oklch(84.1% 0.238 128.85)",500:"oklch(76.8% 0.233 130.85)",600:"oklch(64.8% 0.2 131.684)",700:"oklch(53.2% 0.157 131.589)",800:"oklch(45.3% 0.124 130.933)",900:"oklch(40.5% 0.101 131.063)",950:"oklch(27.4% 0.072 132.109)"},green:{50:"oklch(98.2% 0.018 155.826)",100:"oklch(96.2% 0.044 156.743)",200:"oklch(92.5% 0.084 155.995)",300:"oklch(87.1% 0.15 154.449)",400:"oklch(79.2% 0.209 151.711)",500:"oklch(72.3% 0.219 149.579)",600:"oklch(62.7% 0.194 149.214)",700:"oklch(52.7% 0.154 150.069)",800:"oklch(44.8% 0.119 151.328)",900:"oklch(39.3% 0.095 152.535)",950:"oklch(26.6% 0.065 152.934)"},emerald:{50:"oklch(97.9% 0.021 166.113)",100:"oklch(95% 0.052 163.051)",200:"oklch(90.5% 0.093 164.15)",300:"oklch(84.5% 0.143 164.978)",400:"oklch(76.5% 0.177 163.223)",500:"oklch(69.6% 0.17 162.48)",600:"oklch(59.6% 0.145 163.225)",700:"oklch(50.8% 0.118 165.612)",800:"oklch(43.2% 0.095 166.913)",900:"oklch(37.8% 0.077 168.94)",950:"oklch(26.2% 0.051 172.552)"},teal:{50:"oklch(98.4% 0.014 180.72)",100:"oklch(95.3% 0.051 180.801)",200:"oklch(91% 0.096 180.426)",300:"oklch(85.5% 0.138 181.071)",400:"oklch(77.7% 0.152 181.912)",500:"oklch(70.4% 0.14 182.503)",600:"oklch(60% 0.118 184.704)",700:"oklch(51.1% 0.096 186.391)",800:"oklch(43.7% 0.078 188.216)",900:"oklch(38.6% 0.063 188.416)",950:"oklch(27.7% 0.046 192.524)"},cyan:{50:"oklch(98.4% 0.019 200.873)",100:"oklch(95.6% 0.045 203.388)",200:"oklch(91.7% 0.08 205.041)",300:"oklch(86.5% 0.127 207.078)",400:"oklch(78.9% 0.154 211.53)",500:"oklch(71.5% 0.143 215.221)",600:"oklch(60.9% 0.126 221.723)",700:"oklch(52% 0.105 223.128)",800:"oklch(45% 0.085 224.283)",900:"oklch(39.8% 0.07 227.392)",950:"oklch(30.2% 0.056 229.695)"},sky:{50:"oklch(97.7% 0.013 236.62)",100:"oklch(95.1% 0.026 236.824)",200:"oklch(90.1% 0.058 230.902)",300:"oklch(82.8% 0.111 230.318)",400:"oklch(74.6% 0.16 232.661)",500:"oklch(68.5% 0.169 237.323)",600:"oklch(58.8% 0.158 241.966)",700:"oklch(50% 0.134 242.749)",800:"oklch(44.3% 0.11 240.79)",900:"oklch(39.1% 0.09 240.876)",950:"oklch(29.3% 0.066 243.157)"},blue:{50:"oklch(97% 0.014 254.604)",100:"oklch(93.2% 0.032 255.585)",200:"oklch(88.2% 0.059 254.128)",300:"oklch(80.9% 0.105 251.813)",400:"oklch(70.7% 0.165 254.624)",500:"oklch(62.3% 0.214 259.815)",600:"oklch(54.6% 0.245 262.881)",700:"oklch(48.8% 0.243 264.376)",800:"oklch(42.4% 0.199 265.638)",900:"oklch(37.9% 0.146 265.522)",950:"oklch(28.2% 0.091 267.935)"},indigo:{50:"oklch(96.2% 0.018 272.314)",100:"oklch(93% 0.034 272.788)",200:"oklch(87% 0.065 274.039)",300:"oklch(78.5% 0.115 274.713)",400:"oklch(67.3% 0.182 276.935)",500:"oklch(58.5% 0.233 277.117)",600:"oklch(51.1% 0.262 276.966)",700:"oklch(45.7% 0.24 277.023)",800:"oklch(39.8% 0.195 277.366)",900:"oklch(35.9% 0.144 278.697)",950:"oklch(25.7% 0.09 281.288)"},violet:{50:"oklch(96.9% 0.016 293.756)",100:"oklch(94.3% 0.029 294.588)",200:"oklch(89.4% 0.057 293.283)",300:"oklch(81.1% 0.111 293.571)",400:"oklch(70.2% 0.183 293.541)",500:"oklch(60.6% 0.25 292.717)",600:"oklch(54.1% 0.281 293.009)",700:"oklch(49.1% 0.27 292.581)",800:"oklch(43.2% 0.232 292.759)",900:"oklch(38% 0.189 293.745)",950:"oklch(28.3% 0.141 291.089)"},purple:{50:"oklch(97.7% 0.014 308.299)",100:"oklch(94.6% 0.033 307.174)",200:"oklch(90.2% 0.063 306.703)",300:"oklch(82.7% 0.119 306.383)",400:"oklch(71.4% 0.203 305.504)",500:"oklch(62.7% 0.265 303.9)",600:"oklch(55.8% 0.288 302.321)",700:"oklch(49.6% 0.265 301.924)",800:"oklch(43.8% 0.218 303.724)",900:"oklch(38.1% 0.176 304.987)",950:"oklch(29.1% 0.149 302.717)"},fuchsia:{50:"oklch(97.7% 0.017 320.058)",100:"oklch(95.2% 0.037 318.852)",200:"oklch(90.3% 0.076 319.62)",300:"oklch(83.3% 0.145 321.434)",400:"oklch(74% 0.238 322.16)",500:"oklch(66.7% 0.295 322.15)",600:"oklch(59.1% 0.293 322.896)",700:"oklch(51.8% 0.253 323.949)",800:"oklch(45.2% 0.211 324.591)",900:"oklch(40.1% 0.17 325.612)",950:"oklch(29.3% 0.136 325.661)"},pink:{50:"oklch(97.1% 0.014 343.198)",100:"oklch(94.8% 0.028 342.258)",200:"oklch(89.9% 0.061 343.231)",300:"oklch(82.3% 0.12 346.018)",400:"oklch(71.8% 0.202 349.761)",500:"oklch(65.6% 0.241 354.308)",600:"oklch(59.2% 0.249 0.584)",700:"oklch(52.5% 0.223 3.958)",800:"oklch(45.9% 0.187 3.815)",900:"oklch(40.8% 0.153 2.432)",950:"oklch(28.4% 0.109 3.907)"},rose:{50:"oklch(96.9% 0.015 12.422)",100:"oklch(94.1% 0.03 12.58)",200:"oklch(89.2% 0.058 10.001)",300:"oklch(81% 0.117 11.638)",400:"oklch(71.2% 0.194 13.428)",500:"oklch(64.5% 0.246 16.439)",600:"oklch(58.6% 0.253 17.585)",700:"oklch(51.4% 0.222 16.935)",800:"oklch(45.5% 0.188 13.697)",900:"oklch(41% 0.159 10.272)",950:"oklch(27.1% 0.105 12.094)"}};function Vm(e){try{st.get(e)}catch{return!0}return st.contrast(e,"white","Lstar")>st.contrast(e,"black","Lstar")}function _o(e){return Vm(e)?"#FFFFFF":"#000000"}function ci(e){const t=e.replace(/[\t\n\r]/gim,"").replace(/\s\s+/g," ");return`data:image/svg+xml;charset=UTF-8,${encodeURIComponent(t).replace(/\(/g,"%28").replace(/\)/g,"%29")}`}var ga=e=>e%100===0?15:e%50===0?10:e%25===0?5:2.5;function Zm(e,t,r,i){let a="";for(let s=0;s<=e;s+=5){const c=lo` <line
      x1="${s}"
      y1="0"
      x2="${s}"
      y2="${ga(s)}"
    />`;if(a+=c,s!==0&&s%50===0){const u=lo` <text
        x="${s}"
        y="25"
        text-anchor="middle"
        font-size="${ga(s)}px"
      >
        ${s}
      </text>`;a+=u}}for(let s=0;s<=t;s+=5){const c=lo` <line
      x1="0"
      y1="${s}"
      x2="${ga(s)}"
      y2="${s}"
    />`;if(a+=c,s!==0&&s%50===0){const u=lo` <text
        x="25"
        y="${s}"
        text-anchor="middle"
        dominant-baseline="middle"
        font-size="${ga(s)}px"
      >
        ${s}
      </text>`;a+=u}}return lo` <svg
    xmlns="http://www.w3.org/2000/svg"
    width="${e}"
    height="${t}"
    viewBox="0 0 ${e} ${t}"
  >
    <rect
      width="${e}"
      height="${t}"
      fill="${r}"
    />
    <text
      fill="${i}"
      font-family="Verdana, Arial, Helvetica, sans-serif"
      font-size="30"
      dy="10.5"
      font-weight="bold"
      x="50%"
      y="50%"
      text-anchor="middle"
    >
      ${e}x${t}
    </text>
    <g
      stroke-width="1"
      font-family="Verdana, Arial, Helvetica, sans-serif"
      font-size="10px"
      font-weight="100"
      fill="${i}"
      stroke="${i}"
    >
      ${a}
    </g>
  </svg>`}function Wt(e,t,r="#0F1C3F",i="#ECEAD9"){return ci(Zm(e,t,r,i))}var y0=Me.default.values(Et).map(e=>e[900]),k0=[400,600,900,1200,1400,1600,1970],E0=[600,800,1e3,1200,1400,2e3,2600];function jm(){const e=Math.floor(Math.random()*k0.length),t=Math.floor(Math.random()*E0.length),r=Math.floor(Math.random()*y0.length);return Wt(k0[e],E0[t],y0[r])}var A0={name:"Local Files",url:/(file:\/\/\/.+(index)?.html)/,homepage:"/index.html?raw=1",language:[Be.RAW],category:He.MANGA,run(e){const t=e??parseInt(/\d+/.exec(window.location.search)?.toString()??"5",10);return{title:"Placeholder Manga Loaded",series:"?reload",pages:t,begin:1,prev:"?pages=50",next:"?pages=1",listImages:[Wt(1970,1400,"#2D1657"),Wt(985,1400,"#152C55"),Wt(985,1400,"#7A1420"),Wt(1970,1400,"#806D15"),Wt(985,1400,"#0F5B30"),Wt(1970,1400,"#1a3e3c"),Wt(985,1400,"#480f5b"),Wt(985,1400,"#a9bf7a"),Wt(985,1400,"#147a56"),Wt(1970,1400,"#190343"),Wt(985,1400,"#d5b91e"),Wt(985,1400,"#836ecd"),Wt(985,1400,"#bf19b2"),Wt(985,1400,"#152055"),...Array(t).fill(0).map(jm)]}}},qm=["image/apng","image/bmp","image/gif","image/jpeg","image/pjpeg","image/png","image/svg+xml","image/tiff","image/webp","image/x-icon"],Km=/.(png|jpg|jpeg|gif|bmp|webp)$/i,S0=(e,t)=>e.localeCompare(t,navigator.languages[0]||navigator.language,{numeric:!0,ignorePunctuation:!0});function Ym(e){return qm.includes(e.type)}var Xm=e=>{const t=new Uint8Array(e),r=new Blob([t.buffer]);return URL.createObjectURL(r)};async function Jm(e){const t=await Dd.default.loadAsync(e),r=t.filter((i,a)=>!a.dir&&Km.test(a.name)).sort((i,a)=>S0(i.name,a.name));return ke("Files in zip:",t.files),Promise.all(r.map(i=>i.async("arraybuffer").then(Xm)))}function M0(e,t){bh([{...A0,start:"always"},{title:e,series:"?reload",pages:t.length,begin:1,prev:"#",next:"#",lazy:!1,listImages:t}]).then(()=>ke("Page loaded"))}async function Qm(e){const t=await Jm(e);M0(typeof e=="string"?e:e.name,t)}function x0(e){const t=e.target,r=Array.from(t.files).filter(Ym).sort((i,a)=>S0(i.webkitRelativePath||i.name,a.webkitRelativePath||a.name));ke("Local Files: ",r,r.map(i=>i.webkitRelativePath||i.name)),t.files?.[0]&&M0(t.files[0].webkitRelativePath.split("/")[0]||"Local Images",r.map(URL.createObjectURL))}function e5(){return A0.url.test(window.location.href)?(document.querySelector("#MangaOnlineViewer, #LocalTest")&&(document.querySelector("#LocalTest")?.setAttribute("style","display:none"),document.querySelector("#file")?.addEventListener("change",e=>{const t=e.target;t.files?.[0]&&Qm(t.files[0])}),document.querySelector("#folder")?.addEventListener("change",x0),document.querySelector("#images")?.addEventListener("change",x0),ke("Waiting for zip/images upload")),!0):!1}var ma=globalThis,vl=ma.ShadowRoot&&(ma.ShadyCSS===void 0||ma.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,bl=Symbol(),I0=new WeakMap,C0=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==bl)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(vl&&e===void 0){const r=t!==void 0&&t.length===1;r&&(e=I0.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&I0.set(t,e))}return e}toString(){return this.cssText}},Xt=e=>new C0(typeof e=="string"?e:e+"",void 0,bl),Ot=(e,...t)=>new C0(e.length===1?e[0]:t.reduce((r,i,a)=>r+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[a+1],e[0]),e,bl),t5=(e,t)=>{if(vl)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of t){const i=document.createElement("style"),a=ma.litNonce;a!==void 0&&i.setAttribute("nonce",a),i.textContent=r.cssText,e.appendChild(i)}},O0=vl?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const i of t.cssRules)r+=i.cssText;return Xt(r)})(e):e,{is:n5,defineProperty:r5,getOwnPropertyDescriptor:o5,getOwnPropertyNames:i5,getOwnPropertySymbols:a5,getPrototypeOf:s5}=Object,va=globalThis,T0=va.trustedTypes,l5=T0?T0.emptyScript:"",c5=va.reactiveElementPolyfillSupport,di=(e,t)=>e,ba={toAttribute(e,t){switch(t){case Boolean:e=e?l5:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},wl=(e,t)=>!n5(e,t),L0={attribute:!0,type:String,converter:ba,reflect:!1,useDefault:!1,hasChanged:wl};Symbol.metadata??=Symbol("metadata"),va.litPropertyMetadata??=new WeakMap;var yo=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=L0){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const r=Symbol(),i=this.getPropertyDescriptor(e,r,t);i!==void 0&&r5(this.prototype,e,i)}}static getPropertyDescriptor(e,t,r){const{get:i,set:a}=o5(this.prototype,e)??{get(){return this[t]},set(s){this[t]=s}};return{get:i,set(s){const c=i?.call(this);a?.call(this,s),this.requestUpdate(e,c,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??L0}static _$Ei(){if(this.hasOwnProperty(di("elementProperties")))return;const e=s5(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(di("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(di("properties"))){const t=this.properties,r=[...i5(t),...a5(t)];for(const i of r)this.createProperty(i,t[i])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[r,i]of t)this.elementProperties.set(r,i)}this._$Eh=new Map;for(const[t,r]of this.elementProperties){const i=this._$Eu(t,r);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const i of r)t.unshift(O0(i))}else e!==void 0&&t.push(O0(e));return t}static _$Eu(e,t){const r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return t5(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$ET(e,t){const r=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,r);if(i!==void 0&&r.reflect===!0){const a=(r.converter?.toAttribute!==void 0?r.converter:ba).toAttribute(t,r.type);this._$Em=e,a==null?this.removeAttribute(i):this.setAttribute(i,a),this._$Em=null}}_$AK(e,t){const r=this.constructor,i=r._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const a=r.getPropertyOptions(i),s=typeof a.converter=="function"?{fromAttribute:a.converter}:a.converter?.fromAttribute!==void 0?a.converter:ba;this._$Em=i;const c=s.fromAttribute(t,a.type);this[i]=c??this._$Ej?.get(i)??c,this._$Em=null}}requestUpdate(e,t,r,i=!1,a){if(e!==void 0){const s=this.constructor;if(i===!1&&(a=this[e]),r??=s.getPropertyOptions(e),!((r.hasChanged??wl)(a,t)||r.useDefault&&r.reflect&&a===this._$Ej?.get(e)&&!this.hasAttribute(s._$Eu(e,r))))return;this.C(e,t,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:r,reflect:i,wrapped:a},s){r&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,s??t??this[e]),a!==!0||s!==void 0)||(this._$AL.has(e)||(this.hasUpdated||r||(t=void 0),this._$AL.set(e,t)),i===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[i,a]of this._$Ep)this[i]=a;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[i,a]of r){const{wrapped:s}=a,c=this[i];s!==!0||this._$AL.has(i)||c===void 0||this.C(i,void 0,a,c)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(t)):this._$EM()}catch(r){throw e=!1,this._$EM(),r}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};yo.elementStyles=[],yo.shadowRootOptions={mode:"open"},yo[di("elementProperties")]=new Map,yo[di("finalized")]=new Map,c5?.({ReactiveElement:yo}),(va.reactiveElementVersions??=[]).push("2.1.2");var _l=globalThis,Qe=class extends yo{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=yp(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Yn}};Qe._$litElement$=!0,Qe.finalized=!0,_l.litElementHydrateSupport?.({LitElement:Qe});var d5=_l.litElementPolyfillSupport;d5?.({LitElement:Qe}),(_l.litElementVersions??=[]).push("4.2.2");var ut=e=>(t,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},u5={attribute:!0,type:String,converter:ba,reflect:!1,hasChanged:wl},h5=(e=u5,t,r)=>{const{kind:i,metadata:a}=r;let s=globalThis.litPropertyMetadata.get(a);if(s===void 0&&globalThis.litPropertyMetadata.set(a,s=new Map),i==="setter"&&((e=Object.create(e)).wrapped=!0),s.set(r.name,e),i==="accessor"){const{name:c}=r;return{set(u){const d=t.get.call(this);t.set.call(this,u),this.requestUpdate(c,d,e,!0,u)},init(u){return u!==void 0&&this.C(c,void 0,e,u),u}}}if(i==="setter"){const{name:c}=r;return function(u){const d=this[c];t.call(this,u),this.requestUpdate(c,d,e,!0,u)}}throw Error("Unsupported decorator location: "+i)};function re(e){return(t,r)=>typeof r=="object"?h5(e,t,r):((i,a,s)=>{const c=a.hasOwnProperty(s);return a.constructor.createProperty(s,i),c?Object.getOwnPropertyDescriptor(a,s):void 0})(e,t,r)}function cn(e){return re({...e,state:!0,attribute:!1})}var R0=(e,t,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,r),r);function Wr(e,t){return(r,i,a)=>{const s=c=>c.renderRoot?.querySelector(e)??null;if(t){const{get:c,set:u}=typeof i=="object"?r:a??(()=>{const d=Symbol();return{get(){return this[d]},set(h){this[d]=h}}})();return R0(r,i,{get(){let d=c.call(this);return d===void 0&&(d=s(this),(d!==null||this.hasUpdated)&&u.call(this,d)),d}})}return R0(r,i,{get(){return s(this)}})}}var wa=class extends Zi{constructor(e){if(super(e),this.it=De,e.type!==Vi.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===De||e==null)return this._t=void 0,this.it=e;if(e===Yn)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};wa.directiveName="unsafeHTML",wa.resultType=1;var P0=qo(wa),yl=class extends wa{};yl.directiveName="unsafeSVG",yl.resultType=2;var $0=qo(yl);function D0(e){if(e.startsWith("Icon")&&!e.includes("-")&&!e.includes("_"))return e;const t=e.startsWith("Icon")?e.substring(4):e;return`Icon${Me.default.upperFirst(Me.default.camelCase(t))}`}var f5=".icon-tabler-file-download>:nth-child(n+4){color:gold}.icon-tabler-arrow-autofit-width>:nth-child(n+3),.icon-tabler-arrow-autofit-height>:nth-child(n+3){color:#ff0}.icon-tabler-zoom-in-area>:nth-child(2),.icon-tabler-zoom-in-area>:nth-child(3){color:#0f0}.icon-tabler-zoom-out-area>:nth-child(2){color:red}.icon-tabler-zoom-pan>:nth-child(n+4){color:#96f}.icon-tabler-arrow-autofit-down>:nth-child(n+3),.icon-tabler-arrow-autofit-left>:nth-child(n+3),.icon-tabler-arrow-autofit-right>:nth-child(n+3){color:#28ffbf}.icon-tabler-spacing-vertical>:nth-child(4),.icon-tabler-spacing-horizontal>:nth-child(4){color:#f0f}.icon-tabler-list-numbers>:nth-child(n+5){color:#e48900}.icon-tabler-bookmarks>:nth-child(n+2),.icon-tabler-bookmark>:nth-child(2),.icon-tabler-bookmark-off>:nth-child(2){color:orange}.icon-tabler-bookmark-off>:nth-child(3),.icon-tabler-eye-off>:nth-child(4){color:red}.icon-tabler-zoom-cancel>:nth-child(3),.icon-tabler-zoom-cancel>:nth-child(4){color:#96f}.icon-tabler-zoom-in>:nth-child(3),.icon-tabler-zoom-in>:nth-child(4){color:#0f0}.icon-tabler-zoom-out>:nth-child(3){color:red}.icon-tabler-refresh>:nth-child(n+2){color:#0ff}.icon-tabler-photo>:nth-child(n+2),.icon-tabler-photo-off>:nth-child(n+2){color:silver}.icon-tabler-photo-off>:nth-child(6){color:orange}.icon-tabler-message>:nth-child(2),.icon-tabler-message>:nth-child(3),.icon-tabler-book-arrow-left>:nth-child(7),.icon-tabler-book-arrow-left>:nth-child(8),.icon-tabler-book-arrow-right>:nth-child(7),.icon-tabler-book-arrow-right>:nth-child(8),.icon-tabler-books-return>:nth-child(8),.icon-tabler-books-return>:nth-child(9){color:#adff2f}.icon-tabler-file-percent>:nth-child(2),.icon-tabler-file-percent>:nth-child(5),.icon-tabler-file-percent>:nth-child(6){color:#ff0}.icon-tabler-settings-off>:nth-child(4),.icon-tabler-book-off>:nth-child(7){color:red}",p5='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-adjustments-horizontal"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M4 6l8 0"/><path d="M16 6l4 0"/><path d="M8 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M4 12l2 0"/><path d="M10 12l10 0"/><path d="M17 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M4 18l11 0"/><path d="M19 18l1 0"/></svg>',g5='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-alert-circle"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>',m5='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-api-book"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 1.006 -.5"/><path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0"/><path d="M3 6v13"/><path d="M12 6v13"/><path d="M21 6v6"/><path d="M17.001 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M19.001 15.5v1.5"/><path d="M19.001 21v1.5"/><path d="M22.032 17.25l-1.299 .75"/><path d="M17.27 20l-1.3 .75"/><path d="M15.97 17.25l1.3 .75"/><path d="M20.733 20l1.3 .75"/></svg>',v5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-autofit-down" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 20h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h8"/><path d="M18 4v17"/><path d="M15 18l3 3l3 -3"/></svg>',b5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-autofit-height" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 20h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h6"/><path d="M18 14v7"/><path d="M18 3v7"/><path d="M15 18l3 3l3 -3"/><path d="M15 6l3 -3l3 3"/></svg>',w5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-autofit-left" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 12v-6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v8"/><path d="M20 18h-17"/><path d="M6 15l-3 3l3 3"/></svg>',_5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-autofit-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 12v-6a2 2 0 0 0 -2 -2h-12a2 2 0 0 0 -2 2v8"/><path d="M4 18h17"/><path d="M18 15l3 3l-3 3"/></svg>',y5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-autofit-width" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 12v-6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v6"/><path d="M10 18h-7"/><path d="M21 18h-7"/><path d="M6 15l-3 3l3 3"/><path d="M18 15l3 3l-3 3"/></svg>',k5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-big-left" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 15h-8v3.586a1 1 0 0 1 -1.707 .707l-6.586 -6.586a1 1 0 0 1 0 -1.414l6.586 -6.586a1 1 0 0 1 1.707 .707v3.586h8a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1z"/></svg>',E5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-big-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 9h8v-3.586a1 1 0 0 1 1.707 -.707l6.586 6.586a1 1 0 0 1 0 1.414l-6.586 6.586a1 1 0 0 1 -1.707 -.707v-3.586h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1z"/></svg>',A5='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrows-horizontal"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 8l-4 4l4 4"/><path d="M17 8l4 4l-4 4"/><path d="M3 12l18 0"/></svg>',S5='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrows-left-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M21 17l-18 0"/><path d="M6 10l-3 -3l3 -3"/><path d="M3 7l18 0"/><path d="M18 20l3 -3l-3 -3"/></svg>',M5='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrows-move"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 9l3 3l-3 3"/><path d="M15 12h6"/><path d="M6 9l-3 3l3 3"/><path d="M3 12h6"/><path d="M9 18l3 3l3 -3"/><path d="M12 15v6"/><path d="M15 6l-3 -3l-3 3"/><path d="M12 3v6"/></svg>',x5='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrows-move-vertical"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 18l3 3l3 -3"/><path d="M12 15v6"/><path d="M15 6l-3 -3l-3 3"/><path d="M12 3v6"/></svg>',I5='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrows-vertical"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 7l4 -4l4 4"/><path d="M8 17l4 4l4 -4"/><path d="M12 3l0 18"/></svg>',C5='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-book"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0"/><path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0"/><path d="M3 6l0 13"/><path d="M12 6l0 13"/><path d="M21 6l0 13"/></svg>',O5='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-book-arrow-left"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 1.006 -.5"/><path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0"/><path d="M3 6v13"/><path d="M12 6v13"/><path d="M21 6v6"/><path d="M16 19h6"/><path d="M19 16l-3 3l3 3"/></svg>',T5='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-book-arrow-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 1.006 -.5"/><path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0"/><path d="M3 6v13"/><path d="M12 6v13"/><path d="M21 6v6"/><path d="M16 19h6"/><path d="M19 16l3 3l-3 3"/></svg>',L5='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-book-off"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 5.899 -1.096"/><path d="M3 6a9 9 0 0 1 2.114 -.884m3.8 -.21c1.07 .17 2.116 .534 3.086 1.094a9 9 0 0 1 9 0"/><path d="M3 6v13"/><path d="M12 6v2m0 4v7"/><path d="M21 6v11"/><path d="M3 3l18 18"/></svg>',R5='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-book-upload"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 20h-8a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12v5"/><path d="M11 16h-5a2 2 0 0 0 -2 2"/><path d="M15 16l3 -3l3 3"/><path d="M18 13v9"/></svg>',P5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bookmark" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 7v14l-6 -4l-6 4v-14a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4z"/></svg>',$5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bookmark-off" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7.708 3.721a3.982 3.982 0 0 1 2.292 -.721h4a4 4 0 0 1 4 4v7m0 4v3l-6 -4l-6 4v-14c0 -.308 .035 -.609 .1 -.897"/><path d="M3 3l18 18"/></svg>',D5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bookmarks" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 10v11l-5 -3l-5 3v-11a3 3 0 0 1 3 -3h4a3 3 0 0 1 3 3z"/><path d="M11 3h5a3 3 0 0 1 3 3v11"/></svg>',z5='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-books-return"><defs><mask id="arrow-mask"><rect width="24" height="24" fill="white"/><rect x="15" y="15" width="8" height="8" fill="black"/></mask></defs><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 5a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -14"/><path d="M9 5a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -14"/><path d="M5 8h4"/><path d="M9 16h4"/><g mask="url(#arrow-mask)"><path d="M13.803 4.56l2.184 -.53c.562 -.135 1.133 .19 1.282 .732l3.695 13.418a1.02 1.02 0 0 1 -.634 1.219l-.133 .041l-2.184 .53c-.562 .135 -1.133 -.19 -1.282 -.732l-3.695 -13.418a1.02 1.02 0 0 1 .634 -1.219l.133 -.041"/><path d="M14 9l4 -1"/><path d="M16 16l3.923 -.98"/></g><path d="M16 19h6"/><path d="M19 16l-3 3l3 3"/></svg>',B5='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-box-align-top"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 10.005h16v-5a1 1 0 0 0 -1 -1h-14a1 1 0 0 0 -1 1v5z"/><path d="M4 15.005v-.01"/><path d="M4 20.005v-.01"/><path d="M9 20.005v-.01"/><path d="M15 20.005v-.01"/><path d="M20 20.005v-.01"/><path d="M20 15.005v-.01"/></svg>',N5='<svg id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><g><g><path d="m427.508 512h-343.02c-5.69 0-10.302-4.612-10.302-10.302v-491.396c0-5.69 4.612-10.302 10.302-10.302h343.02c5.69 0 10.302 4.612 10.302 10.302v491.396c-.001 5.69-4.613 10.302-10.302 10.302z" fill="#f2eff2"/></g></g><path d="m427.512 0h-41.238c5.687 0 10.302 4.615 10.302 10.302v41.156l-18.039 71.714 18.039 81.268v46.358l-18.039 45.164 18.039 24.847v46.358l-10.302 61.227 10.302 32.149v41.156c0 5.687-4.615 10.302-10.302 10.302h41.238c5.687 0 10.302-4.615 10.302-10.302v-491.397c0-5.687-4.615-10.302-10.302-10.302z" fill="#e1dde1"/><g><path d="m243.51 273.63-47.48 104.08-80.61-10.85v-315.4c0-2.85 2.31-5.15 5.15-5.15h30.86c2.13 0 4.03 1.29 4.8 3.27z" fill="#3ad1e0"/><path d="m243.51 273.63-16.68 36.56-101.52-260.61c-.76-1.95-2.64-3.25-4.74-3.27h30.86c2.13 0 4.03 1.29 4.8 3.27z" fill="#22c7db"/><path d="m310.81 465.69h-190.24c-2.84 0-5.15-2.3-5.15-5.15v-93.68c25.18-34.92 65.99-57.81 112.19-58.37l-16.07 35.21 74.5 39.08 29.56 75.9c1.32 3.37-1.17 7.01-4.79 7.01z" fill="#fb33a8"/><path d="m310.81 465.69h-30.92c3.61 0 6.11-3.64 4.79-7.01l-12.92-33.17c-1.92 4.55-2.88 9.61-2.61 14.91.01.13.01.25.01.38 0 5.92-7.39 8.87-11.45 4.36-6.77-7.49-16.03-11.24-25.29-11.24s-18.54 3.75-25.29 11.24c-1.36 1.52-3.11 2.19-4.83 2.19-3.48 0-6.84-2.78-6.62-6.93.03-.59.04-1.18.04-1.77 0-19.36-16.23-34.99-35.81-33.99-.12.01-.24.01-.37.01-5.92 0-8.87-7.4-4.37-11.46 7.49-6.76 11.24-16.03 11.24-25.29s-3.75-18.52-11.24-25.29c-1.51-1.36-2.18-3.1-2.18-4.81 0-3.48 2.78-6.84 6.92-6.64.6.04 1.19.05 1.77.05 12.81 0 23.98-7.11 29.79-17.57l34.29-1.12-14.22 31.16 74.5 39.08 29.56 75.9c1.32 3.37-1.17 7.01-4.79 7.01z" fill="#fb33a8"/><path d="m396.58 51.46v152.98c0 2.84-2.31 5.15-5.15 5.15h-32l-40.41-29.31-40.41 29.31h-17.82c-2.12 0-4.03-1.3-4.8-3.28l-59.6-152.98c-1.32-3.38 1.18-7.02 4.79-7.02h190.25c2.84 0 5.15 2.3 5.15 5.15z" fill="#fcb44d"/><path d="m396.576 51.457v152.982c0 2.843-2.308 5.151-5.151 5.151h-30.927c2.843 0 5.151-2.308 5.151-5.151v-152.982c0-2.843-2.308-5.151-5.151-5.151h30.927c2.843.001 5.151 2.308 5.151 5.151z" fill="#fb9927"/><g><path d="m359.428 181.065v28.526h-80.818v-28.526c0-22.324 18.1-40.414 40.414-40.414 11.157 0 21.263 4.522 28.567 11.837 7.314 7.314 11.837 17.409 11.837 28.577z" fill="#ae6ad8"/><path d="m359.43 181.065v28.526h-29.237v-28.526c0-11.167-4.522-21.263-11.837-28.577-3.935-3.935-8.674-7.067-13.949-9.107 4.533-1.762 9.467-2.73 14.618-2.73 11.157 0 21.263 4.522 28.567 11.837 7.316 7.314 11.838 17.409 11.838 28.577z" fill="#975bbb"/><g><g><circle cx="319.023" cy="121.497" fill="#f2eff2" r="26.224"/></g></g></g><path d="m396.576 250.798v70.011c0 2.845-2.306 5.151-5.151 5.151h-85.311c-2.123 0-4.029-1.303-4.8-3.281l-27.273-70.011c-1.316-3.377 1.175-7.021 4.8-7.021h112.585c2.844 0 5.15 2.306 5.15 5.151z" fill="#23f1a8"/><path d="m396.576 250.798v70.011c0 2.843-2.308 5.151-5.151 5.151h-30.927c2.843 0 5.151-2.308 5.151-5.151v-70.011c0-2.843-2.308-5.151-5.151-5.151h30.927c2.843 0 5.151 2.307 5.151 5.151z" fill="#27e19d"/><path d="m324.179 362.016h67.246c2.845 0 5.151 2.306 5.151 5.151v93.376c0 2.845-2.306 5.151-5.151 5.151h-30.866c-2.123 0-4.029-1.303-4.799-3.281l-36.38-93.376c-1.316-3.377 1.175-7.021 4.799-7.021z" fill="#23f1a8"/><path d="m396.576 367.167v93.376c0 2.843-2.308 5.151-5.151 5.151h-30.927c2.843 0 5.151-2.308 5.151-5.151v-93.376c0-2.843-2.308-5.151-5.151-5.151h30.927c2.843 0 5.151 2.308 5.151 5.151z" fill="#27e19d"/></g><g><path d="m269.153 413.978c.01.124.01.247.01.371 0 5.924-7.397 8.87-11.456 4.368-6.768-7.489-16.03-11.239-25.291-11.239s-18.533 3.75-25.291 11.239c-1.36 1.514-3.101 2.184-4.821 2.184-3.482 0-6.84-2.782-6.624-6.923.031-.597.041-1.185.041-1.772 0-19.367-16.236-34.995-35.809-33.996-.124.01-.247.01-.371.01-5.924 0-8.87-7.397-4.368-11.456 7.489-6.758 11.239-16.03 11.239-25.291s-3.75-18.523-11.239-25.291c-1.514-1.36-2.184-3.101-2.184-4.811 0-3.482 2.782-6.84 6.923-6.634.597.031 1.185.041 1.772.041 19.367 0 34.995-16.236 33.996-35.799-.01-.124-.01-.247-.01-.371 0-5.934 7.397-8.87 11.456-4.378 6.758 7.489 16.03 11.239 25.291 11.239 3.76 0 7.51-.618 11.095-1.844l42.526 109.158c-10.591 6.183-17.565 17.916-16.885 31.195z" fill="#fdef63"/><path d="m268.516 417.19c.406-.839.648-1.79.648-2.841 0-.123 0-.247-.01-.371-.68-13.279 6.294-25.013 16.885-31.194l-42.526-109.158c-3.585 1.226-7.335 1.844-11.095 1.844-7.992 0-15.988-2.799-22.374-8.378z" fill="#f3d730"/></g><g><g><path d="m229.374 349.967c-4.267 0-7.726-3.459-7.726-7.726v-29.272c0-4.267 3.459-7.726 7.726-7.726s7.726 3.459 7.726 7.726v29.272c0 4.267-3.459 7.726-7.726 7.726z" fill="#554e55"/></g><g><path d="m229.374 377.711c-4.267 0-7.726-3.459-7.726-7.726v-2.061c0-4.267 3.459-7.726 7.726-7.726s7.726 3.459 7.726 7.726v2.061c0 4.267-3.459 7.726-7.726 7.726z" fill="#554e55"/></g></g><g><g><path d="m258.185 86.361h-18.228c-4.267 0-7.726-3.459-7.726-7.726s3.459-7.726 7.726-7.726h18.228c4.267 0 7.726 3.459 7.726 7.726 0 4.266-3.459 7.726-7.726 7.726z" fill="#f2eff2"/></g><g><path d="m266.269 111.168h-18.229c-4.267 0-7.726-3.459-7.726-7.726s3.459-7.726 7.726-7.726h18.228c4.267 0 7.726 3.459 7.726 7.726s-3.458 7.726-7.725 7.726z" fill="#f2eff2"/></g></g></g></svg>',H5=`<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background: new 0 0 512 512" xml:space="preserve" width="512" height="512"><g><g><g><path style="fill: #f2eff2" d="M422.485,504.5H89.515c-5.523,0-10-4.477-10-10v-477c0-5.523,4.477-10,10-10h332.971&#10;&#9;&#9;&#9;&#9;c5.523,0,10,4.477,10,10v477C432.485,500.023,428.008,504.5,422.485,504.5z"/></g></g><g><g><path style="fill: #e1dde1" d="M432.49,17.5v477c0,5.52-4.48,10-10,10h-40.03c5.52,0,10-4.48,10-10v-477c0-5.52-4.48-10-10-10&#10;&#9;&#9;&#9;&#9;h40.03C428.01,7.5,432.49,11.98,432.49,17.5z"/></g></g><g><path style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        " d="&#10;&#9;&#9;&#9;M334.56,7.5H89.515c-5.523,0-10,4.477-10,10v477c0,5.523,4.477,10,10,10h332.971c5.523,0,10-4.477,10-10v-477&#10;&#9;&#9;&#9;c0-5.523-4.477-10-10-10h-54.763"/></g><g><path style="fill: #3ad1e0" d="M313.86,452.74L159.16,55.63c-0.75-1.92-2.6-3.18-4.66-3.18h-29.96c-2.76,0-5,2.24-5,5v397.1&#10;&#9;&#9;&#9;c0,2.76,2.24,5,5,5h184.67C312.72,459.55,315.14,456.01,313.86,452.74z"/><path style="fill: #22c7db" d="M309.21,459.55h-30.02c3.51,0,5.93-3.54,4.65-6.81L129.14,55.63c-0.74-1.9-2.56-3.16-4.6-3.18&#10;&#9;&#9;&#9;h29.96c2.06,0,3.91,1.26,4.66,3.18l154.7,397.11C315.14,456.01,312.72,459.55,309.21,459.55z"/><path style="fill: #fb33a8" d="M258.193,309.845c-9.05-1.894-18.424-2.909-28.037-2.909c-45.55,0-85.862,22.354-110.616,56.676&#10;&#9;&#9;&#9;v90.938c0,2.76,2.24,5,5,5h184.67c3.51,0,5.93-3.54,4.65-6.81L258.193,309.845z"/><path style="fill: #ee2d9a" d="M193.362,311.966c-5.64,10.161-16.48,17.055-28.912,17.055c-0.57,0-1.14-0.01-1.72-0.04&#10;&#9;&#9;&#9;c-4.02-0.2-6.72,3.06-6.72,6.44c0,1.66,0.65,3.35,2.12,4.67c7.27,6.57,10.91,15.56,10.91,24.55s-3.64,17.99-10.91,24.55&#10;&#9;&#9;&#9;c-4.37,3.94-1.51,11.12,4.24,11.12c0.12,0,0.24,0,0.36-0.01c19-0.97,34.76,14.2,34.76,33c0,0.57-0.01,1.14-0.04,1.72&#10;&#9;&#9;&#9;c-0.21,4.02,3.05,6.72,6.43,6.72c1.67,0,3.36-0.65,4.68-2.12c6.56-7.27,15.56-10.91,24.55-10.91c8.99,0,17.98,3.64,24.55,10.91&#10;&#9;&#9;&#9;c3.94,4.37,11.12,1.51,11.12-4.24c0-0.12,0-0.24-0.01-0.36c-0.264-5.151,0.666-10.058,2.527-14.479l12.543,32.197&#10;&#9;&#9;&#9;c1.28,3.27-1.14,6.81-4.65,6.81h30.02c3.51,0,5.93-3.54,4.65-6.81l-55.667-142.895L193.362,311.966z"/><path style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        " d="&#10;&#9;&#9;&#9;M230.156,306.937c-45.55,0-85.862,22.354-110.616,56.676"/><path style="fill: #fcb44d" d="M392.46,57.45v148.5c0,2.76-2.24,5-5,5H260.65c-2.06,0-3.91-1.26-4.66-3.18l-57.85-148.5&#10;&#9;&#9;&#9;c-1.28-3.28,1.14-6.82,4.65-6.82h184.67C390.22,52.45,392.46,54.69,392.46,57.45z"/><path style="fill: #fb9927" d="M392.46,57.45v148.5c0,2.76-2.24,5-5,5h-30.021c2.76,0,5-2.24,5-5V57.45c0-2.76-2.24-5-5-5h30.021&#10;&#9;&#9;&#9;C390.22,52.45,392.46,54.69,392.46,57.45z"/><g><path style="fill: #ae6ad8" d="M356.4,183.26v27.69h-78.45v-27.69c0-21.67,17.57-39.23,39.23-39.23&#10;&#9;&#9;&#9;&#9;c10.83,0,20.64,4.39,27.73,11.49C352.01,162.62,356.4,172.42,356.4,183.26z"/><path style="fill: #975bbb" d="M356.402,183.26v27.69h-28.38v-27.69c0-10.84-4.39-20.64-11.49-27.74&#10;&#9;&#9;&#9;&#9;c-3.82-3.82-8.42-6.86-13.54-8.84c4.4-1.71,9.19-2.65,14.19-2.65c10.83,0,20.64,4.39,27.73,11.49&#10;&#9;&#9;&#9;&#9;C352.012,162.62,356.402,172.42,356.402,183.26z"/><path style="
            fill: none;
            stroke: #000000;
            stroke-width: 15;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-miterlimit: 10;
          " d="&#10;&#9;&#9;&#9;&#9;M277.95,210.95v-27.69c0-21.67,17.57-39.23,39.23-39.23c10.83,0,20.64,4.39,27.73,11.49c7.1,7.1,11.49,16.9,11.49,27.74v27.69"/><g><circle style="fill: #f2eff2" cx="317.179" cy="125.438" r="25.456"/><circle style="
              fill: none;
              stroke: #000000;
              stroke-width: 15;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-miterlimit: 10;
            " cx="317.179" cy="125.438" r="25.456"/></g></g><path style="fill: #23f1a8" d="M392.46,250.95v67.96c0,2.761-2.239,5-5,5h-82.812c-2.061,0-3.911-1.265-4.659-3.185l-26.474-67.96&#10;&#9;&#9;&#9;c-1.277-3.278,1.141-6.815,4.659-6.815H387.46C390.221,245.95,392.46,248.189,392.46,250.95z"/><path style="fill: #27e19d" d="M392.46,250.95v67.96c0,2.76-2.24,5-5,5h-30.021c2.76,0,5-2.24,5-5v-67.96c0-2.76-2.24-5-5-5&#10;&#9;&#9;&#9;h30.021C390.22,245.95,392.46,248.19,392.46,250.95z"/><path style="fill: #23f1a8" d="M322.184,358.91h65.276c2.761,0,5,2.239,5,5v90.64c0,2.761-2.239,5-5,5h-29.962&#10;&#9;&#9;&#9;c-2.061,0-3.911-1.265-4.659-3.185l-35.314-90.64C316.248,362.447,318.666,358.91,322.184,358.91z"/><path style="fill: #27e19d" d="M392.46,363.91v90.64c0,2.76-2.24,5-5,5h-30.021c2.76,0,5-2.24,5-5v-90.64c0-2.76-2.24-5-5-5&#10;&#9;&#9;&#9;h30.021C390.22,358.91,392.46,361.15,392.46,363.91z"/><path style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        " d="&#10;&#9;&#9;&#9;M119.54,242.003V454.55c0,2.761,2.239,5,5,5h184.666c3.518,0,5.936-3.537,4.659-6.815l-154.704-397.1&#10;&#9;&#9;&#9;c-0.748-1.92-2.598-3.185-4.659-3.185H124.54c-2.761,0-5,2.239-5,5v151.391"/><path style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        " d="&#10;&#9;&#9;&#9;M392.46,57.45v148.5c0,2.761-2.239,5-5,5H260.648c-2.061,0-3.911-1.265-4.659-3.185l-57.854-148.5&#10;&#9;&#9;&#9;c-1.277-3.278,1.141-6.815,4.659-6.815H387.46C390.221,52.45,392.46,54.689,392.46,57.45z"/><path style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        " d="&#10;&#9;&#9;&#9;M306.627,245.95h-28.454c-3.518,0-5.936,3.537-4.659,6.815l26.474,67.96c0.748,1.92,2.598,3.185,4.659,3.185h82.812&#10;&#9;&#9;&#9;c2.761,0,5-2.239,5-5v-67.96c0-2.761-2.239-5-5-5h-47.67"/><path style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        " d="&#10;&#9;&#9;&#9;M322.184,358.91h65.276c2.761,0,5,2.239,5,5v90.64c0,2.761-2.239,5-5,5h-29.962c-2.061,0-3.911-1.265-4.659-3.185l-35.314-90.64&#10;&#9;&#9;&#9;C316.248,362.447,318.666,358.91,322.184,358.91z"/></g><g><path style="fill: #fdef63" d="M268.77,409.35c0.01,0.12,0.01,0.24,0.01,0.36c0,5.75-7.18,8.61-11.12,4.24&#10;&#9;&#9;&#9;c-6.57-7.27-15.56-10.91-24.55-10.91c-8.99,0-17.99,3.64-24.55,10.91c-1.32,1.47-3.01,2.12-4.68,2.12c-3.38,0-6.64-2.7-6.43-6.72&#10;&#9;&#9;&#9;c0.03-0.58,0.04-1.15,0.04-1.72c0-18.8-15.76-33.97-34.76-33c-0.12,0.01-0.24,0.01-0.36,0.01c-5.75,0-8.61-7.18-4.24-11.12&#10;&#9;&#9;&#9;c7.27-6.56,10.91-15.56,10.91-24.55s-3.64-17.98-10.91-24.55c-1.47-1.32-2.12-3.01-2.12-4.67c0-3.38,2.7-6.64,6.72-6.44&#10;&#9;&#9;&#9;c0.58,0.03,1.15,0.04,1.72,0.04c18.8,0,33.97-15.76,33-34.75c-0.01-0.12-0.01-0.24-0.01-0.36c0-5.76,7.18-8.61,11.12-4.25&#10;&#9;&#9;&#9;c6.56,7.27,15.56,10.91,24.55,10.91c3.65,0,7.29-0.6,10.77-1.79l41.28,105.96C274.88,385.07,268.11,396.46,268.77,409.35z"/><path style="fill: #f3d730" d="M268.151,412.468c0.394-0.814,0.629-1.738,0.629-2.758c0-0.12,0-0.24-0.01-0.36&#10;&#9;&#9;&#9;c-0.66-12.89,6.11-24.28,16.39-30.28l-41.28-105.96c-3.48,1.19-7.12,1.79-10.77,1.79c-7.758,0-15.52-2.717-21.718-8.132&#10;&#9;&#9;&#9;L268.151,412.468z"/><path style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        " d="&#10;&#9;&#9;&#9;M268.77,409.35c0.01,0.12,0.01,0.24,0.01,0.36c0,5.75-7.18,8.61-11.12,4.24c-6.57-7.27-15.56-10.91-24.55-10.91&#10;&#9;&#9;&#9;c-8.99,0-17.99,3.64-24.55,10.91c-1.32,1.47-3.01,2.12-4.68,2.12c-3.38,0-6.64-2.7-6.43-6.72c0.03-0.58,0.04-1.15,0.04-1.72&#10;&#9;&#9;&#9;c0-18.8-15.76-33.97-34.76-33c-0.12,0.01-0.24,0.01-0.36,0.01c-5.75,0-8.61-7.18-4.24-11.12c7.27-6.56,10.91-15.56,10.91-24.55&#10;&#9;&#9;&#9;s-3.64-17.98-10.91-24.55c-1.47-1.32-2.12-3.01-2.12-4.67c0-3.38,2.7-6.64,6.72-6.44c0.58,0.03,1.15,0.04,1.72,0.04&#10;&#9;&#9;&#9;c18.8,0,33.97-15.76,33-34.75c-0.01-0.12-0.01-0.24-0.01-0.36c0-5.76,7.18-8.61,11.12-4.25c6.56,7.27,15.56,10.91,24.55,10.91&#10;&#9;&#9;&#9;c3.65,0,7.29-0.6,10.77-1.79l41.28,105.96C274.88,385.07,268.11,396.46,268.77,409.35z"/></g><g><line style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        " x1="230.156" y1="339.714" x2="230.156" y2="311.299"/><line style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        " x1="230.156" y1="364.644" x2="230.156" y2="366.646"/></g><g><line style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        " x1="240.429" y1="83.83" x2="258.124" y2="83.83"/><line style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        " x1="248.276" y1="107.911" x2="265.97" y2="107.911"/></g></g></svg>`,F5=`<?xml version="1.0" encoding="UTF-8"?><svg version="1.1" id="svg3390" xml:space="preserve" width="682.66669" height="682.66669" viewBox="0 0 682.66669 682.66669" xmlns="http://www.w3.org/2000/svg"><defs id="defs3394"><clipPath clipPathUnits="userSpaceOnUse" id="clipPath3404"><path d="M 0,512 H 512 V 0 H 0 Z" id="path3402"/></clipPath></defs><g id="g3396" transform="matrix(1.3333333,0,0,-1.3333333,0,682.66667)"><g id="g3398"><g id="g3400" clip-path="url(#clipPath3404)"><g id="g3406" transform="translate(451.7344)"><path d="m 0,0 h -391.469 c -11.379,0 -20.603,9.225 -20.603,20.604 v 470.792 c 0,11.379 9.224,20.604 20.603,20.604 L 0,512 c 11.379,0 20.604,-9.225 20.604,-20.604 V 20.604 C 20.604,9.225 11.379,0 0,0" style="fill: #efe6e6; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3408"/></g><g id="g3410" transform="translate(472.3376,41.2072)"><path d="m 0,0 c -216.202,0 -391.468,175.266 -391.468,391.468 v 79.325 h -20.604 c -11.379,0 -20.604,-9.225 -20.604,-20.604 V -20.604 c 0,-11.379 9.225,-20.603 20.604,-20.603 H -20.603 C -9.224,-41.207 0,-31.983 0,-20.604 Z" style="fill: #e2d7d7; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3412"/></g><g id="g3414" transform="translate(235.3964,198.1382)"><path d="M 0,0 H 195.734 V 272.655 H 82.414 Z" style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3416"/></g><g id="g3418" transform="translate(235.3964,198.1382)"><path d="M 0,0 H 195.734 V 272.655 H 82.414 Z" style="fill: #5ad6ff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3420"/></g><g id="g3422" transform="translate(80.8692,198.1382)"><path d="m 0,0 h 113.32 l 82.414,272.655 H 0 Z" style="fill: #f4e74d; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3424"/></g><g id="g3426" transform="translate(80.8692,432.6757)"><path d="M 0,0 V -234.537 H 78.01 C 29.021,-169.169 0,-87.974 0,0" style="fill: #eedb00; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3428"/></g><path d="M 431.131,41.207 H 80.869 v 115.724 h 350.262 z" style="fill: #b18cd9; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3430"/><g id="g3432" transform="translate(194.475,156.931)"><path d="m 0,0 h -113.606 v -115.724 h 350.262 v 2.149 C 144.487,-103.933 61.838,-62.31 0,0" style="fill: #996acc; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3434"/></g><g id="g3436" transform="translate(213.2632,94.3332)"><path d="m 0,0 c 0,-10.991 -11.188,-19.901 -24.99,-19.901 -13.801,0 -24.989,8.91 -24.989,19.901 0,10.991 11.188,19.9 24.989,19.9 C -11.188,19.9 0,10.991 0,0" style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3438"/></g><g id="g3440" transform="translate(298.7368,94.3332)"><path d="m 0,0 c 0,-10.991 11.188,-19.901 24.99,-19.901 13.801,0 24.989,8.91 24.989,19.901 0,10.991 -11.188,19.9 -24.989,19.9 C 11.188,19.9 0,10.991 0,0" style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3442"/></g><g id="g3444" transform="translate(202.8374,123.7057)"><path d="M 0,0 V -10.216" style="
              fill: none;
              stroke: #3d4751;
              stroke-width: 15;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-miterlimit: 10;
              stroke-dasharray: none;
              stroke-opacity: 1;
            " id="path3446"/></g><g id="g3448" transform="translate(309.1625,123.7057)"><path d="M 0,0 V -10.216" style="
              fill: none;
              stroke: #3d4751;
              stroke-width: 15;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-miterlimit: 10;
              stroke-dasharray: none;
              stroke-opacity: 1;
            " id="path3450"/></g><g id="g3452" transform="translate(241.984,113.7942)"><path d="m 0,0 c 3.408,-3.911 8.421,-6.385 14.016,-6.385 5.595,0 10.608,2.474 14.016,6.385" style="
              fill: none;
              stroke: #3d4751;
              stroke-width: 15;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-miterlimit: 10;
              stroke-dasharray: none;
              stroke-opacity: 1;
            " id="path3454"/></g><g id="g3456" transform="translate(150.0629,447.8862)"><path d="m 0,0 33.436,22.907 h -102.63 v -161.294 l 21.382,72.58 59.96,-46.151 -25.363,71.287 75.636,-2.093 z" style="fill: #fd5c6f; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3458"/></g><g id="g3460" transform="translate(80.8692,432.6757)"><path d="m 0,0 v -123.177 l 10.122,34.358 C 3.502,-60.282 0,-30.55 0,0" style="fill: #f6334c; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3462"/></g><g id="g3464" transform="translate(431.1308,271.141)"><path d="m 0,0 -57.698,-44.41 24.406,68.598 -72.782,-2.014 60.066,41.15 -60.066,41.151 72.782,-2.014 -24.406,68.597 L 0,126.649 Z" style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3466"/></g></g></g></g></svg>`,G5=`<?xml version="1.0" encoding="UTF-8"?><svg version="1.1" id="svg5007" xml:space="preserve" width="682.66669" height="682.66669" viewBox="0 0 682.66669 682.66669" xmlns="http://www.w3.org/2000/svg"><defs id="defs5011"><clipPath clipPathUnits="userSpaceOnUse" id="clipPath5021"><path d="M 0,512 H 512 V 0 H 0 Z" id="path5019"/></clipPath></defs><g id="g5013" transform="matrix(1.3333333,0,0,-1.3333333,0,682.66667)"><g id="g5015"><g id="g5017" clip-path="url(#clipPath5021)"><g id="g5023" transform="translate(446,7.5)"><path d="m 0,0 h -380 c -11.046,0 -20,8.954 -20,20 v 457 c 0,11.046 8.954,20 20,20 H 0 c 11.046,0 20,-8.954 20,-20 V 20 C 20,8.954 11.046,0 0,0" style="fill: #efe6e6; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5025"/></g><g id="g5027" transform="translate(465.9996,47.5)"><path d="m 0,0 c -209.868,0 -380,170.132 -380,380 v 77 h -20 c -11.045,0 -20,-8.954 -20,-20 V -20 c 0,-11.046 8.955,-20 20,-20 h 380 c 11.046,0 20,8.954 20,20 z" style="fill: #e2d7d7; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5029"/></g><g id="g5031" transform="translate(236,199.8333)"><path d="M 0,0 H 190 V 264.667 H 80 Z" style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5033"/></g><g id="g5035" transform="translate(236,199.8333)"><path d="M 0,0 H 190 V 264.667 H 80 Z" style="fill: #5ad6ff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5037"/></g><g id="g5039" transform="translate(86,199.8333)"><path d="m 0,0 h 110 l 80,264.667 H 0 Z" style="fill: #f4e74d; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5041"/></g><g id="g5043" transform="translate(86,427.4996)"><path d="M 0,0 V -227.666 H 75.725 C 28.171,-164.213 0,-85.397 0,0" style="fill: #eedb00; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5045"/></g><path d="M 426,47.5 H 86 v 112.333 h 340 z" style="fill: #b18cd9; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5047"/><g id="g5049" transform="translate(196.2775,159.8334)"><path d="m 0,0 h -110.278 v -112.333 h 340 v 2.085 C 140.254,-100.888 60.026,-60.484 0,0" style="fill: #996acc; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5051"/></g><g id="g5053" transform="translate(214.5152,99.0695)"><path d="m 0,0 c 0,-10.669 -10.861,-19.318 -24.258,-19.318 -13.397,0 -24.257,8.649 -24.257,19.318 0,10.669 10.86,19.317 24.257,19.317 C -10.861,19.317 0,10.669 0,0" style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5055"/></g><g id="g5057" transform="translate(297.4848,99.0695)"><path d="m 0,0 c 0,-10.669 10.861,-19.318 24.258,-19.318 13.397,0 24.257,8.649 24.257,19.318 0,10.669 -10.86,19.317 -24.257,19.317 C 10.861,19.317 0,10.669 0,0" style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5059"/></g><g id="g5061" transform="translate(204.3949,127.5815)"><path d="M 0,0 V -9.916" style="
              fill: none;
              stroke: #000000;
              stroke-width: 15;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-miterlimit: 10;
              stroke-dasharray: none;
              stroke-opacity: 1;
            " id="path5063"/></g><g id="g5065" transform="translate(307.605,127.5815)"><path d="M 0,0 V -9.916" style="
              fill: none;
              stroke: #000000;
              stroke-width: 15;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-miterlimit: 10;
              stroke-dasharray: none;
              stroke-opacity: 1;
            " id="path5067"/></g><g id="g5069" transform="translate(242.3946,117.9604)"><path d="m 0,0 c 3.308,-3.796 8.175,-6.198 13.605,-6.198 5.431,0 10.298,2.402 13.606,6.198" style="
              fill: none;
              stroke: #000000;
              stroke-width: 15;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-miterlimit: 10;
              stroke-dasharray: none;
              stroke-opacity: 1;
            " id="path5071"/></g><g id="g5073" transform="translate(153.1665,442.2645)"><path d="m 0,0 32.456,22.235 h -99.623 v -156.568 l 20.756,70.454 58.203,-44.799 -24.62,69.199 73.42,-2.032 z" style="fill: #fd5c6f; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5075"/></g><g id="g5077" transform="translate(86,427.4996)"><path d="m 0,0 v -119.568 l 9.825,33.351 C 3.399,-58.516 0,-29.655 0,0" style="fill: #f6334c; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5079"/></g><g id="g5081" transform="translate(426,270.6974)"><path d="m 0,0 -56.008,-43.108 23.692,66.587 -70.65,-1.955 58.306,39.945 -58.306,39.945 70.65,-1.955 -23.692,66.588 L 0,122.939 Z" style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5083"/></g><g id="g5085" transform="translate(446,7.5)"><path d="m 0,0 h -380 c -11.046,0 -20,8.954 -20,20 v 457 c 0,11.046 8.954,20 20,20 H 0 c 11.046,0 20,-8.954 20,-20 V 20 C 20,8.954 11.046,0 0,0 Z" style="
              fill: none;
              stroke: #000000;
              stroke-width: 15;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-miterlimit: 10;
              stroke-dasharray: none;
              stroke-opacity: 1;
            " id="path5087"/></g><g id="g5089" transform="translate(426,346.167)"><path d="m 0,0 v 118.333 h -110 l -80,-264.667 H 0 V -28" style="
              fill: none;
              stroke: #000000;
              stroke-width: 15;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-miterlimit: 10;
              stroke-dasharray: none;
              stroke-opacity: 1;
            " id="path5091"/></g><g id="g5093" transform="translate(86,199.8333)"><path d="m 0,0 h 110 l 80,264.667 H 0 Z" style="
              fill: none;
              stroke: #000000;
              stroke-width: 15;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-miterlimit: 10;
              stroke-dasharray: none;
              stroke-opacity: 1;
            " id="path5095"/></g><g id="g5097" transform="translate(154.0172,159.8334)"><path d="m 0,0 h 271.983 v -112.333 h -340 V 0 H -28" style="
              fill: none;
              stroke: #000000;
              stroke-width: 15;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-miterlimit: 10;
              stroke-dasharray: none;
              stroke-opacity: 1;
            " id="path5099"/></g><g id="g5101" transform="translate(86,307.9314)"><path d="m 0,0 20.756,70.454 58.203,-44.799 -24.62,69.199 73.419,-2.032 -60.591,41.511 32.455,22.236" style="
              fill: none;
              stroke: #000000;
              stroke-width: 15;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-miterlimit: 10;
              stroke-dasharray: none;
              stroke-opacity: 1;
            " id="path5103"/></g><g id="g5105" transform="translate(426,270.6974)"><path d="m 0,0 -56.008,-43.108 23.692,66.587 -70.65,-1.955 58.306,39.945 -58.306,39.945 70.65,-1.955 -23.692,66.588 L 0,122.939" style="
              fill: none;
              stroke: #000000;
              stroke-width: 15;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-miterlimit: 10;
              stroke-dasharray: none;
              stroke-opacity: 1;
            " id="path5107"/></g></g></g></g></svg>`,W5='<svg id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><g><g><path d="m427.508 512h-343.02c-5.69 0-10.302-4.612-10.302-10.302v-491.396c0-5.69 4.612-10.302 10.302-10.302h343.02c5.69 0 10.302 4.612 10.302 10.302v491.396c-.001 5.69-4.613 10.302-10.302 10.302z" fill="#f2eff2"/></g></g><path d="m427.512 0h-41.238c5.687 0 10.302 4.615 10.302 10.302v36.12l-18.016 49.462 18.016 36.952v51.701l-13.787 87.003 13.787 55.974v51.669l-18.016 52.406 18.016 34.008v36.1c0 5.687-4.615 10.302-10.302 10.302h41.238c5.687 0 10.302-4.615 10.302-10.302v-491.395c0-5.687-4.615-10.302-10.302-10.302z" fill="#e1dde1"/><path d="m396.6 46.36v86.52c0 2.85-2.31 5.15-5.15 5.15h-110.11l-22.53-48.41 22.53-48.41h110.11c2.84 0 5.15 2.3 5.15 5.15z" fill="#3ad1e0"/><path d="m396.599 46.358v86.525c0 2.843-2.308 5.151-5.151 5.151h-30.926c2.843 0 5.151-2.308 5.151-5.151v-86.525c0-2.843-2.308-5.151-5.151-5.151h30.926c2.844 0 5.151 2.308 5.151 5.151z" fill="#20bfd5"/><path d="m281.34 41.207h-39.904c-2.845 0-5.151 2.306-5.151 5.151v86.525c0 2.845 2.306 5.151 5.151 5.151h39.904z" fill="#23f1a8"/><path d="m304.73 470.79h-77.71l-39.22-20.29-39.23 20.29h-28.03c-2.84 0-5.15-2.3-5.15-5.15v-86.52c0-2.85 2.31-5.15 5.15-5.15h128.92c1.76 0 3.4.89 4.34 2.37l55.27 86.53c2.19 3.43-.27 7.92-4.34 7.92z" fill="#23f1a8"/><g><path d="m227.019 443.104v27.689h-78.446v-27.689c0-21.669 17.569-39.228 39.228-39.228 10.83 0 20.639 4.39 27.729 11.489 7.099 7.1 11.489 16.899 11.489 27.739z" fill="#ae6ad8"/><path d="m227.021 443.101v27.691h-29.061v-27.691c0-10.838-4.389-20.634-11.486-27.732-3.729-3.74-8.211-6.727-13.207-8.715 4.492-1.793 9.406-2.782 14.536-2.782 10.827 0 20.635 4.389 27.732 11.497 7.097 7.098 11.486 16.895 11.486 27.732z" fill="#975bbb"/></g><path d="m304.728 470.793h-30.926c4.069 0 6.531-4.492 4.347-7.922l-55.269-86.525c-.948-1.483-2.586-2.38-4.347-2.38h30.926c1.762 0 3.4.896 4.347 2.38l55.269 86.525c2.184 3.43-.278 7.922-4.347 7.922z" fill="#27e19d"/><path d="m391.448 373.966h-81.106c-4.068 0-6.531 4.495-4.341 7.924l55.269 86.525c.946 1.482 2.583 2.378 4.341 2.378h25.837c2.845 0 5.151-2.306 5.151-5.151v-86.525c0-2.845-2.306-5.151-5.151-5.151z" fill="#ae6ad8"/><path d="m396.599 379.117v86.525c0 2.843-2.308 5.151-5.151 5.151h-25.837c-.907 0-1.772-.237-2.534-.68 1.556-.886 2.596-2.555 2.596-4.471v-86.525c0-2.843-2.308-5.151-5.151-5.151h30.926c2.844 0 5.151 2.308 5.151 5.151z" fill="#975bbb"/><g><path d="m195.602 46.358v86.525c0 2.845-2.306 5.151-5.151 5.151h-69.91c-2.845 0-5.151-2.306-5.151-5.151v-86.525c0-2.845 2.306-5.151 5.151-5.151h69.91c2.845 0 5.151 2.306 5.151 5.151z" fill="#3ad1e0"/><path d="m195.6 46.358v86.525c0 2.843-2.308 5.151-5.151 5.151h-30.926c2.843 0 5.151-2.308 5.151-5.151v-86.525c0-2.843-2.308-5.151-5.151-5.151h30.926c2.844 0 5.151 2.308 5.151 5.151z" fill="#20bfd5"/></g><g><path d="m396.6 184.39v143.22c0 2.84-2.31 5.15-5.15 5.15h-30.93l-104.53-27.53-104.52 27.53h-30.93c-2.84 0-5.15-2.31-5.15-5.15v-143.22c0-2.84 2.31-5.15 5.15-5.15h47.77l87.68 16.15 87.69-16.15h47.77c2.84 0 5.15 2.31 5.15 5.15z" fill="#fb54b6"/></g><path d="m151.473 332.759c0-57.729 46.798-104.527 104.527-104.527s104.527 46.798 104.527 104.527z" fill="#fb9927"/><path d="m360.522 332.759h-35.397c0-51.694-37.519-94.612-86.824-103.028 5.748-.979 11.662-1.494 17.699-1.494 57.731 0 104.522 46.79 104.522 104.522z" fill="#f98824"/><g><path d="m396.599 184.392v143.216c0 2.843-2.308 5.151-5.151 5.151h-30.926c2.843 0 5.151-2.308 5.151-5.151v-143.216c0-2.843-2.308-5.151-5.151-5.151h30.926c2.844 0 5.151 2.308 5.151 5.151z" fill="#fb33a8"/></g><g><g><path d="m345.43 247.027c-.144 0-.299 0-.453-.01-24.024-1.226-43.947 17.946-43.947 41.722 0 .721.021 1.442.051 2.174.268 5.079-3.853 8.489-8.128 8.489-2.112 0-4.244-.814-5.913-2.678-8.293-9.189-19.676-13.794-31.039-13.794s-22.746 4.605-31.039 13.794c-1.669 1.865-3.801 2.678-5.913 2.678-4.275 0-8.396-3.41-8.128-8.489.031-.731.041-1.453.041-2.174 0-23.777-19.924-42.948-43.937-41.722-.155.01-.309.01-.464.01-7.263 0-10.879-9.076-5.357-14.062 9.189-8.293 13.794-19.666 13.794-31.039 0-7.912-2.225-15.813-6.686-22.685h175.378c-4.461 6.871-6.686 14.773-6.686 22.685 0 11.373 4.605 22.746 13.794 31.039 5.521 4.986 1.905 14.062-5.368 14.062z" fill="#fdef63"/><g><g id="XMLID_00000127012381744132405410000009872483291948348836_"><path d="m280.138 231.696c-4.268 0-7.726-3.459-7.726-7.726v-.107c0-4.267 3.459-7.726 7.726-7.726s7.726 3.459 7.726 7.726v.107c0 4.267-3.459 7.726-7.726 7.726z" fill="#554e55"/></g><g id="XMLID_00000080918978500845250090000017315552773041050031_"><path d="m256 231.696c-4.267 0-7.726-3.459-7.726-7.726v-.107c0-4.267 3.459-7.726 7.726-7.726 4.268 0 7.726 3.459 7.726 7.726v.107c0 4.267-3.458 7.726-7.726 7.726z" fill="#554e55"/></g><g id="XMLID_00000140711681861242238370000008769002181148908969_"><path d="m231.862 231.696c-4.267 0-7.726-3.459-7.726-7.726v-.107c0-4.267 3.459-7.726 7.726-7.726s7.726 3.459 7.726 7.726v.107c.001 4.267-3.459 7.726-7.726 7.726z" fill="#554e55"/></g></g><path d="m345.43 247.037c-.155 0-.299 0-.443-.021-24.034-1.226-43.948 17.956-43.948 41.722 0 .721.01 1.432.052 2.174.258 5.079-3.863 8.499-8.128 8.499-2.122 0-4.255-.824-5.924-2.689-6.954-7.685-16.05-12.167-25.507-13.423 29.968-14.804 50.582-45.678 50.582-81.364 0-7.84-.999-15.442-2.864-22.695h34.429c-4.45 6.871-6.676 14.783-6.676 22.685 0 11.373 4.605 22.757 13.784 31.05 5.532 4.966 1.926 14.062-5.357 14.062z" fill="#f3d730"/></g></g><g><g><g><circle cx="187.8" cy="385.284" fill="#d8b2ec" r="25.455"/></g></g></g><g><g id="XMLID_00000028301319025648580530000009457246182494066313_"><path d="m316.443 111.45c-4.258 0-7.714-3.445-7.726-7.705-.012-4.267 3.438-7.736 7.705-7.747l41.222-.114h.021c4.258 0 7.714 3.445 7.726 7.705.012 4.267-3.438 7.736-7.705 7.747l-41.222.114c-.007 0-.014 0-.021 0z" fill="#f2eff2"/></g><g><path d="m357.665 83.243h-21.761c-4.268 0-7.726-3.459-7.726-7.726s3.459-7.726 7.726-7.726h21.761c4.268 0 7.726 3.459 7.726 7.726s-3.458 7.726-7.726 7.726z" fill="#f2eff2"/></g></g></g></svg>',U5=`<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background: new 0 0 512 512" xml:space="preserve" width="512" height="512"><g><g><g><path style="fill: #f2eff2" d="M422.485,504.5H89.515c-5.523,0-10-4.477-10-10v-477c0-5.523,4.477-10,10-10h332.971&#10;&#9;&#9;&#9;&#9;c5.523,0,10,4.477,10,10v477C432.485,500.023,428.008,504.5,422.485,504.5z"/></g></g><g><g><path style="fill: #e1dde1" d="M432.49,17.5v477c0,5.52-4.48,10-10,10h-40.03c5.52,0,10-4.48,10-10v-477c0-5.52-4.48-10-10-10&#10;&#9;&#9;&#9;&#9;h40.03C428.01,7.5,432.49,11.98,432.49,17.5z"/></g></g><g><path style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        " d="&#10;&#9;&#9;&#9;M158.639,7.5H89.515c-5.523,0-10,4.477-10,10v477c0,5.523,4.477,10,10,10h332.971c5.523,0,10-4.477,10-10v-477&#10;&#9;&#9;&#9;c0-5.523-4.477-10-10-10H191.801"/></g><path style="fill: #3ad1e0" d="M392.482,52.5v83.99c0,2.761-2.239,5-5,5H241.866c-2.761,0-5-2.239-5-5V52.5c0-2.761,2.239-5,5-5&#10;&#9;&#9;h145.617C390.244,47.5,392.482,49.739,392.482,52.5z"/><path style="fill: #20bfd5" d="M392.482,52.5v83.99c0,2.76-2.24,5-5,5h-30.02c2.76,0,5-2.24,5-5V52.5c0-2.76-2.24-5-5-5h30.02&#10;&#9;&#9;C390.242,47.5,392.482,49.74,392.482,52.5z"/><path style="fill: #26d192" d="M280.6,47.5h-38.735c-2.761,0-5,2.239-5,5v83.99c0,2.761,2.239,5,5,5H280.6V47.5z"/><line style="
        fill: none;
        stroke: #000000;
        stroke-width: 15;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-miterlimit: 10;
      " x1="280.6" y1="141.49" x2="280.6" y2="47.5"/><path style="fill: #23f1a8" d="M124.512,370.51h125.143c1.706,0,3.295,0.87,4.214,2.308l53.65,83.99&#10;&#9;&#9;c2.126,3.328-0.264,7.692-4.214,7.692H124.512c-2.761,0-5-2.239-5-5v-83.99C119.512,372.749,121.751,370.51,124.512,370.51z"/><g><path style="fill: #ae6ad8" d="M227.87,437.622V464.5h-76.148v-26.878c0-21.034,17.054-38.079,38.079-38.079&#10;&#9;&#9;&#9;c10.512,0,20.034,4.261,26.916,11.153C223.609,417.588,227.87,427.1,227.87,437.622z"/><path style="fill: #975bbb" d="M227.872,437.62v26.88h-28.21v-26.88c0-10.52-4.26-20.03-11.15-26.92&#10;&#9;&#9;&#9;c-3.62-3.63-7.97-6.53-12.82-8.46c4.36-1.74,9.13-2.7,14.11-2.7c10.51,0,20.03,4.26,26.92,11.16&#10;&#9;&#9;&#9;C223.612,417.59,227.872,427.1,227.872,437.62z"/><path style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        " d="&#10;&#9;&#9;&#9;M151.722,464.5v-26.878c0-21.034,17.054-38.079,38.079-38.079c10.512,0,20.034,4.261,26.916,11.153&#10;&#9;&#9;&#9;c6.892,6.892,11.153,16.404,11.153,26.926V464.5"/></g><path style="fill: #27e19d" d="M303.302,464.5h-30.02c3.95,0,6.34-4.36,4.22-7.69l-53.65-83.99c-0.92-1.44-2.51-2.31-4.22-2.31&#10;&#9;&#9;h30.02c1.71,0,3.3,0.87,4.22,2.31l53.65,83.99C309.642,460.14,307.252,464.5,303.302,464.5z"/><path style="fill: #ae6ad8" d="M387.482,370.51h-78.73c-3.949,0-6.34,4.363-4.214,7.692l53.65,83.99&#10;&#9;&#9;c0.919,1.438,2.507,2.308,4.214,2.308h25.08c2.761,0,5-2.239,5-5v-83.99C392.482,372.749,390.244,370.51,387.482,370.51z"/><path style="fill: #975bbb" d="M392.482,375.51v83.99c0,2.76-2.24,5-5,5h-25.08c-0.88,0-1.72-0.23-2.46-0.66&#10;&#9;&#9;c1.51-0.86,2.52-2.48,2.52-4.34v-83.99c0-2.76-2.24-5-5-5h30.02C390.242,370.51,392.482,372.75,392.482,375.51z"/><path style="
        fill: none;
        stroke: #000000;
        stroke-width: 15;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-miterlimit: 10;
      " d="&#10;&#9;&#9;M392.482,52.5v83.99c0,2.761-2.239,5-5,5H241.866c-2.761,0-5-2.239-5-5V52.5c0-2.761,2.239-5,5-5h145.617&#10;&#9;&#9;C390.244,47.5,392.482,49.739,392.482,52.5z"/><g><path style="fill: #3ad1e0" d="M197.374,52.5v83.99c0,2.761-2.239,5-5,5h-67.862c-2.761,0-5-2.239-5-5V52.5c0-2.761,2.239-5,5-5&#10;&#9;&#9;&#9;h67.862C195.135,47.5,197.374,49.739,197.374,52.5z"/><path style="fill: #20bfd5" d="M197.372,52.5v83.99c0,2.76-2.24,5-5,5h-30.02c2.76,0,5-2.24,5-5V52.5c0-2.76-2.24-5-5-5h30.02&#10;&#9;&#9;&#9;C195.132,47.5,197.372,49.74,197.372,52.5z"/><path style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        " d="&#10;&#9;&#9;&#9;M197.374,52.5v83.99c0,2.761-2.239,5-5,5h-67.862c-2.761,0-5-2.239-5-5V52.5c0-2.761,2.239-5,5-5h67.862&#10;&#9;&#9;&#9;C195.135,47.5,197.374,49.739,197.374,52.5z"/></g><g><path style="fill: #fb54b6" d="M124.512,181.49h262.97c2.761,0,5,2.239,5,5v139.02c0,2.761-2.239,5-5,5h-262.97&#10;&#9;&#9;&#9;c-2.761,0-5-2.239-5-5V186.49C119.512,183.729,121.751,181.49,124.512,181.49z"/></g><path style="fill: #fb9927" d="M154.537,330.51c0-56.038,45.427-101.465,101.465-101.465s101.465,45.427,101.465,101.465H154.537z"/><path style="fill: #f98824" d="M357.462,330.51h-34.36c0-50.18-36.42-91.84-84.28-100.01c5.58-0.95,11.32-1.45,17.18-1.45&#10;&#9;&#9;C312.042,229.05,357.462,274.47,357.462,330.51z"/><path style="
        fill: none;
        stroke: #000000;
        stroke-width: 15;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-miterlimit: 10;
      " d="&#10;&#9;&#9;M154.537,330.51c0-56.038,45.427-101.465,101.465-101.465s101.465,45.427,101.465,101.465"/><g><path style="fill: #fb33a8" d="M392.482,186.49v139.02c0,2.76-2.24,5-5,5h-30.02c2.76,0,5-2.24,5-5V186.49c0-2.76-2.24-5-5-5&#10;&#9;&#9;&#9;h30.02C390.242,181.49,392.482,183.73,392.482,186.49z"/></g><g><g><path style="fill: #fdef63" d="M342.812,247.29c-0.14,0-0.29,0-0.44-0.01c-23.32-1.19-42.66,17.42-42.66,40.5&#10;&#9;&#9;&#9;&#9;c0,0.7,0.02,1.4,0.05,2.11c0.26,4.93-3.74,8.24-7.89,8.24c-2.05,0-4.12-0.79-5.74-2.6c-8.05-8.92-19.1-13.39-30.13-13.39&#10;&#9;&#9;&#9;&#9;s-22.08,4.47-30.13,13.39c-1.62,1.81-3.69,2.6-5.74,2.6c-4.15,0-8.15-3.31-7.89-8.24c0.03-0.71,0.04-1.41,0.04-2.11&#10;&#9;&#9;&#9;&#9;c0-23.08-19.34-41.69-42.65-40.5c-0.15,0.01-0.3,0.01-0.45,0.01c-7.05,0-10.56-8.81-5.2-13.65c8.92-8.05,13.39-19.09,13.39-30.13&#10;&#9;&#9;&#9;&#9;c0-7.68-2.16-15.35-6.49-22.02h170.24c-4.33,6.67-6.49,14.34-6.49,22.02c0,11.04,4.47,22.08,13.39,30.13&#10;&#9;&#9;&#9;&#9;C353.382,238.48,349.872,247.29,342.812,247.29z"/><g><line id="XMLID_00000127012381744132405410000009872483291948348836_" style="
              fill: none;
              stroke: #000000;
              stroke-width: 15;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-miterlimit: 10;
            " x1="279.433" y1="224.908" x2="279.433" y2="224.805"/><line id="XMLID_00000080918978500845250090000017315552773041050031_" style="
              fill: none;
              stroke: #000000;
              stroke-width: 15;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-miterlimit: 10;
            " x1="256.002" y1="224.908" x2="256.002" y2="224.805"/><line id="XMLID_00000140711681861242238370000008769002181148908969_" style="
              fill: none;
              stroke: #000000;
              stroke-width: 15;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-miterlimit: 10;
            " x1="232.572" y1="224.908" x2="232.572" y2="224.805"/></g><path style="fill: #f3d730" d="M342.812,247.3c-0.15,0-0.29,0-0.43-0.02c-23.33-1.19-42.66,17.43-42.66,40.5&#10;&#9;&#9;&#9;&#9;c0,0.7,0.01,1.39,0.05,2.11c0.25,4.93-3.75,8.25-7.89,8.25c-2.06,0-4.13-0.8-5.75-2.61c-6.75-7.46-15.58-11.81-24.76-13.03&#10;&#9;&#9;&#9;&#9;c29.09-14.37,49.1-44.34,49.1-78.98c0-7.61-0.97-14.99-2.78-22.03h33.42c-4.32,6.67-6.48,14.35-6.48,22.02&#10;&#9;&#9;&#9;&#9;c0,11.04,4.47,22.09,13.38,30.14C353.382,238.47,349.882,247.3,342.812,247.3z"/></g><path style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        " d="&#10;&#9;&#9;&#9;M341.122,181.49c-4.33,6.67-6.49,14.34-6.49,22.02c0,11.04,4.47,22.08,13.39,30.13c5.36,4.84,1.85,13.65-5.21,13.65&#10;&#9;&#9;&#9;c-0.14,0-0.29,0-0.44-0.01c-23.32-1.19-42.66,17.42-42.66,40.5c0,0.7,0.02,1.4,0.05,2.11c0.26,4.93-3.74,8.24-7.89,8.24&#10;&#9;&#9;&#9;c-2.05,0-4.12-0.79-5.74-2.6c-8.05-8.92-19.1-13.39-30.13-13.39s-22.08,4.47-30.13,13.39c-1.62,1.81-3.69,2.6-5.74,2.6&#10;&#9;&#9;&#9;c-4.15,0-8.15-3.31-7.89-8.24c0.03-0.71,0.04-1.41,0.04-2.11c0-23.08-19.34-41.69-42.65-40.5c-0.15,0.01-0.3,0.01-0.45,0.01&#10;&#9;&#9;&#9;c-7.05,0-10.56-8.81-5.2-13.65c8.92-8.05,13.39-19.09,13.39-30.13c0-7.68-2.16-15.35-6.49-22.02"/></g><g><path style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        " d="&#10;&#9;&#9;&#9;M208.726,181.49h-84.213c-2.761,0-5,2.239-5,5v139.02c0,2.761,2.239,5,5,5h262.97c2.761,0,5-2.239,5-5V186.49c0-2.761-2.239-5-5-5&#10;&#9;&#9;&#9;H241.888"/></g><path style="
        fill: none;
        stroke: #000000;
        stroke-width: 15;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-miterlimit: 10;
      " d="&#10;&#9;&#9;M124.512,370.51h125.143c1.706,0,3.295,0.87,4.214,2.308l53.65,83.99c2.126,3.328-0.264,7.692-4.214,7.692H124.512&#10;&#9;&#9;c-2.761,0-5-2.239-5-5v-83.99C119.512,372.749,121.751,370.51,124.512,370.51z"/><path style="
        fill: none;
        stroke: #000000;
        stroke-width: 15;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-miterlimit: 10;
      " d="&#10;&#9;&#9;M392.482,397.976V375.51c0-2.761-2.239-5-5-5h-78.73c-3.949,0-6.34,4.363-4.214,7.692l53.65,83.99&#10;&#9;&#9;c0.919,1.438,2.507,2.308,4.214,2.308h25.08c2.761,0,5-2.239,5-5v-28.362"/><g><g><g><circle style="fill: #d8b2ec" cx="189.8" cy="381.497" r="24.709"/><circle style="
              fill: none;
              stroke: #000000;
              stroke-width: 15;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-miterlimit: 10;
            " cx="189.8" cy="381.497" r="24.709"/></g></g></g><g><line id="XMLID_00000028301319025648580530000009457246182494066313_" style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        " x1="314.674" y1="108.185" x2="354.689" y2="108.075"/><line style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        " x1="333.566" y1="80.805" x2="354.689" y2="80.805"/></g></g></svg>`,V5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-category" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4h6v6h-6z"/><path d="M14 4h6v6h-6z"/><path d="M4 14h6v6h-6z"/><path d="M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"/></svg>',Z5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-check" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l5 5l10 -10"/></svg>',j5='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 6l-6 6l6 6"/></svg>',q5='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 6l6 6l-6 6"/></svg>',K5='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-circle-check"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"/><path d="M9 12l2 2l4 -4"/></svg>',Y5='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-circle-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"/><path d="M10 10l4 4m0 -4l-4 4"/></svg>',X5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-floppy" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2"/><path d="M12 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M14 4l0 4l-6 0l0 -4"/></svg>',J5='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-dots-vertical"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/><path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/><path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/></svg>',Q5='<svg id="Capa_1" enable-background="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g><g><path d="m369.32 512h-226.64c-45.516 0-82.414-36.898-82.414-82.414v-347.172c0-45.516 36.898-82.414 82.414-82.414h226.64c45.516 0 82.414 36.898 82.414 82.414v347.171c0 45.517-36.898 82.415-82.414 82.415z" fill="#636978"/></g><g><path d="m225.095 450.189v-388.378c0-34.137 27.673-61.811 61.81-61.811h-144.225c-45.516 0-82.414 36.898-82.414 82.414v347.171c0 45.516 36.898 82.414 82.414 82.414h144.225c-34.137.001-61.81-27.673-61.81-61.81z" fill="#555a66"/></g><g><path d="m369.32 61.811h-226.64c-11.379 0-20.604 9.225-20.604 20.604v336.869c0 11.379 9.225 20.604 20.604 20.604h226.64c11.379 0 20.604-9.225 20.604-20.604v-336.87c0-11.379-9.225-20.603-20.604-20.603z" fill="#96e8ff"/></g><g><path d="m122.076 82.414v336.869c0 11.379 9.225 20.604 20.604 20.604h82.414v-378.076h-82.414c-11.379 0-20.604 9.224-20.604 20.603z" fill="#80dbff"/></g><g><path d="m256 111.277c-27.66-8.24-55.124-9.125-82.742-2.655-5.835 1.367-9.975 6.555-9.975 12.548v95.771c0 6.566 6.064 11.463 12.479 10.063 23.872-5.21 47.636-4.921 71.52.866 5.731 1.389 11.704 1.389 17.435 0 23.884-5.788 47.648-6.077 71.52-.866 6.415 1.4 12.479-3.497 12.479-10.063 0-40.343 0-55.429 0-95.771 0-5.993-4.139-11.181-9.975-12.548-27.617-6.471-55.081-5.585-82.741 2.655z" fill="#fff"/></g><g><path d="m173.258 108.622c-5.835 1.367-9.975 6.555-9.975 12.548v95.771c0 6.566 6.064 11.463 12.479 10.063 23.872-5.21 47.636-4.921 71.52.866 2.866.694 5.791 1.041 8.717 1.041v-117.634c-27.659-8.24-55.123-9.126-82.741-2.655z" fill="#f5fafc"/></g><g><path d="m205.037 104.432c-10.584.315-21.171 1.704-31.781 4.19-5.834 1.367-9.973 6.56-9.973 12.552v95.761c0 6.547 6.037 11.478 12.432 10.08 23.888-5.221 47.667-4.935 71.567.856 2.866.694 8.717 1.042 8.717 1.042 0-13.231-13.741-21.854-26.952-27.087-14.54-5.759-24.011-19.905-24.011-35.544v-61.85z" fill="#e1f1fa"/></g><g><g><path d="m338.414 289.266h-164.829c-4.142 0-7.5-3.357-7.5-7.5s3.358-7.5 7.5-7.5h164.829c4.143 0 7.5 3.357 7.5 7.5s-3.357 7.5-7.5 7.5z" fill="#19cffc"/></g><g><path d="m338.414 330.473h-164.829c-4.142 0-7.5-3.357-7.5-7.5s3.358-7.5 7.5-7.5h164.829c4.143 0 7.5 3.357 7.5 7.5s-3.357 7.5-7.5 7.5z" fill="#19cffc"/></g><g><g><path d="m191.667 385.134c-4.142 0-7.5-3.357-7.5-7.5v-12.362c0-4.143 3.358-7.5 7.5-7.5s7.5 3.357 7.5 7.5v12.362c0 4.142-3.358 7.5-7.5 7.5z" fill="#495560"/></g><g><path d="m320.333 385.134c-4.143 0-7.5-3.357-7.5-7.5v-12.362c0-4.143 3.357-7.5 7.5-7.5s7.5 3.357 7.5 7.5v12.362c0 4.142-3.357 7.5-7.5 7.5z" fill="#495560"/></g><g><path d="m256 392.493c-8.668 0-16.911-3.754-22.615-10.3-2.721-3.123-2.396-7.86.727-10.582 3.122-2.721 7.86-2.396 10.582.727 2.855 3.276 6.976 5.155 11.307 5.155s8.452-1.879 11.307-5.155c2.723-3.122 7.457-3.447 10.582-.727 3.122 2.722 3.448 7.459.727 10.582-5.706 6.546-13.949 10.3-22.617 10.3z" fill="#495560"/></g></g></g></g><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/></svg>',ev=`<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background: new 0 0 512 512" xml:space="preserve"><g><path style="fill: #636978" d="M366,504.5H146c-44.183,0-80-35.817-80-80v-337c0-44.183,35.817-80,80-80h220&#10;&#9;&#9;c44.183,0,80,35.817,80,80v337C446,468.683,410.183,504.5,366,504.5z"/><path style="fill: #555a66" d="M226,444.5v-377c0-33.137,26.863-60,60-60H146c-44.183,0-80,35.817-80,80v337&#10;&#9;&#9;c0,44.183,35.817,80,80,80h140C252.863,504.5,226,477.637,226,444.5z"/><path style="fill: #96e8ff" d="M366,67.5H146c-11.046,0-20,8.954-20,20v327c0,11.046,8.954,20,20,20h220c11.046,0,20-8.954,20-20&#10;&#9;&#9;v-327C386,76.454,377.046,67.5,366,67.5z"/><path style="fill: #80dbff" d="M126,87.5v327c0,11.046,8.954,20,20,20h80v-367h-80C134.954,67.5,126,76.454,126,87.5z"/><path style="fill: #ffffff" d="M256,115.517c-26.85-7.998-53.509-8.858-80.318-2.577c-5.664,1.327-9.682,6.363-9.682,12.18&#10;&#9;&#9;c0,39.161,0,53.805,0,92.965c0,6.374,5.886,11.128,12.113,9.768c23.172-5.058,46.241-4.777,69.425,0.841&#10;&#9;&#9;c5.563,1.348,11.361,1.348,16.924,0c23.184-5.618,46.252-5.898,69.425-0.841c6.227,1.359,12.113-3.395,12.113-9.768&#10;&#9;&#9;c0-39.161,0-53.805,0-92.965c0-5.818-4.018-10.853-9.682-12.18C309.509,106.659,282.85,107.518,256,115.517z"/><path style="fill: #f5fafc" d="M175.682,112.94c-5.664,1.327-9.682,6.363-9.682,12.18c0,39.161,0,53.805,0,92.965&#10;&#9;&#9;c0,6.374,5.886,11.128,12.113,9.769c23.172-5.058,46.241-4.777,69.425,0.841c2.782,0.674,5.622,1.011,8.462,1.011V115.517&#10;&#9;&#9;C229.15,107.518,202.491,106.659,175.682,112.94z"/><path style="fill: #e1f1fa" d="M206.53,108.873c-10.274,0.306-20.551,1.654-30.85,4.067c-5.663,1.327-9.681,6.368-9.681,12.184&#10;&#9;&#9;c0,39.155,0,53.801,0,92.955c0,6.355,5.86,11.141,12.068,9.785c23.188-5.068,46.271-4.791,69.47,0.831&#10;&#9;&#9;c2.782,0.674,8.462,1.011,8.462,1.011c0-12.844-13.338-21.214-26.163-26.293c-14.114-5.59-23.307-19.322-23.307-34.502V108.873z"/><g><path style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        " d="&#10;&#9;&#9;&#9;M366,504.5H146c-44.183,0-80-35.817-80-80v-337c0-44.183,35.817-80,80-80h220c44.183,0,80,35.817,80,80v337&#10;&#9;&#9;&#9;C446,468.683,410.183,504.5,366,504.5z"/><path style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        " d="&#10;&#9;&#9;&#9;M126,398.01v16.49c0,11.046,8.954,20,20,20h220c11.046,0,20-8.954,20-20v-327c0-11.046-8.954-20-20-20H146&#10;&#9;&#9;&#9;c-11.046,0-20,8.954-20,20v280.51"/><line style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        " x1="176" y1="281.01" x2="336" y2="281.01"/><line style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        " x1="176" y1="321.01" x2="336" y2="321.01"/><path style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        " d="&#10;&#9;&#9;&#9;M286.144,109.53c-10.033,0.992-20.075,2.987-30.144,5.986c-26.85-7.998-53.509-8.858-80.318-2.577&#10;&#9;&#9;&#9;c-5.664,1.327-9.682,6.363-9.682,12.18c0,39.161,0,53.805,0,92.965c0,6.374,5.886,11.128,12.113,9.768&#10;&#9;&#9;&#9;c23.172-5.058,46.241-4.777,69.425,0.841c5.563,1.348,11.361,1.348,16.924,0c23.184-5.618,46.252-5.898,69.425-0.841&#10;&#9;&#9;&#9;c6.227,1.359,12.113-3.395,12.113-9.768c0-39.161,0-53.805,0-92.965c0-5.818-4.018-10.853-9.682-12.18&#10;&#9;&#9;&#9;c-6.702-1.57-13.395-2.694-20.084-3.372"/><line style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        " x1="256" y1="115.517" x2="256" y2="229.706"/><g><line style="
            fill: none;
            stroke: #000000;
            stroke-width: 15;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-miterlimit: 10;
          " x1="193.551" y1="362.07" x2="193.551" y2="374.07"/><line style="
            fill: none;
            stroke: #000000;
            stroke-width: 15;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-miterlimit: 10;
          " x1="318.449" y1="362.07" x2="318.449" y2="374.07"/><path style="
            fill: none;
            stroke: #000000;
            stroke-width: 15;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-miterlimit: 10;
          " d="&#10;&#9;&#9;&#9;&#9;M239.536,373.713c4.003,4.594,9.892,7.501,16.464,7.501c6.572,0,12.461-2.907,16.464-7.501"/></g></g></g><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/></svg>`,tv='<svg id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m449.945 61.818v388.363c0 34.144-27.684 61.818-61.818 61.818h-264.254c-34.134 0-61.818-27.674-61.818-61.818v-388.363c0-34.144 27.684-61.818 61.818-61.818h264.253c34.135 0 61.819 27.674 61.819 61.818z" fill="#808fa4"/><path d="m188.464 512h-64.59c-34.134 0-61.818-27.674-61.818-61.818v-388.364c-.001-34.144 27.683-61.818 61.817-61.818h50.341c-7.367 6.574-15.218 18.092-15.218 37.359v423.909c.001 0-.215 30.24 29.468 50.732z" fill="#64768e"/><path d="m418.912 61.942v147.509l-194.274 13.033 77.912-191.451h85.453c17.072 0 30.909 13.837 30.909 30.909z" fill="#c5ced6"/><path d="m271.516 31.033-46.878 191.451-65.641-6.501-65.909-6.532 20.843-140.421 45.365-37.997z" fill="#abb6c4"/><path d="m159.296 31.033c-.196 2.009-.299 4.121-.299 6.326v178.624l-65.909-6.532v-147.509c0-17.072 13.837-30.909 30.909-30.909z" fill="#9ca9ba"/><path d="m313.676 222.484-18.885 196.428h-135.794l-51.732-35.968-14.177-142.46 65.909-5.379z" fill="#c5ced6"/><path d="m93.088 240.484 65.909-5.378v183.807h-35c-17.072 0-30.909-13.837-30.909-30.909z" fill="#abb6c4"/><path d="m418.912 240.484v147.519c0 17.072-13.837 30.909-30.909 30.909h-62.19l-12.137-196.428z" fill="#64768e"/><path d="m287.487 480.971h-62.974c-8.317 0-15.059-6.742-15.059-15.059v-.913c0-8.317 6.742-15.059 15.059-15.059h62.974c8.317 0 15.059 6.742 15.059 15.059v.913c0 8.316-6.743 15.059-15.059 15.059z" fill="#64768e"/><path d="m418.912 209.451v31.033h-77.644c-8.531 0-15.455 6.924-15.455 15.455v162.974h-31.022v-162.975c0-8.531-6.923-15.455-15.455-15.455h-120.34l-13.147-13.27 13.147-17.763h44.138c6.718 0 12.673-4.348 14.723-10.746l53.658-167.672h31.033l-50.65 158.255c-3.183 9.974 4.255 20.163 14.723 20.163h152.291z" fill="#e8ecf9"/><path d="m93.088 209.451h65.909v31.033h-65.909z" fill="#d7ddf5"/><g><g><path d="m129.509 332.474c-4.268 0-7.727-3.459-7.727-7.727v-12.364c0-4.268 3.459-7.727 7.727-7.727s7.727 3.459 7.727 7.727v12.364c0 4.268-3.459 7.727-7.727 7.727z" fill="#495560"/></g><g><path d="m258.191 332.474c-4.268 0-7.727-3.459-7.727-7.727v-12.364c0-4.268 3.459-7.727 7.727-7.727s7.727 3.459 7.727 7.727v12.364c.001 4.268-3.458 7.727-7.727 7.727z" fill="#495560"/></g><path d="m223.825 324.391c-4.268 0-7.727 3.459-7.727 7.727 0 3.952-3.215 7.167-7.166 7.167-3.952 0-7.167-3.215-7.167-7.167 0-4.268-3.459-7.727-7.727-7.727s-7.727 3.459-7.727 7.727c0 3.952-3.215 7.167-7.166 7.167-3.952 0-7.167-3.215-7.167-7.167 0-4.268-3.459-7.727-7.727-7.727s-7.727 3.459-7.727 7.727c0 12.473 10.148 22.621 22.621 22.621 5.7 0 10.911-2.124 14.894-5.616 3.982 3.492 9.193 5.616 14.894 5.616 12.473 0 22.62-10.148 22.62-22.621-.001-4.268-3.46-7.727-7.728-7.727z" fill="#495560"/></g></g></svg>',nv=`<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 511.941 511.941" style="enable-background: new 0 0 511.941 511.941" xml:space="preserve" width="512" height="512"><g><g><path style="fill: #808fa4" d="M444.211,67.5v376.94c0,33.14-26.87,60-60,60H127.73c-33.13,0-60-26.86-60-60V67.5&#10;&#9;&#9;&#9;c0-33.14,26.87-60,60-60h256.48C417.341,7.5,444.211,34.361,444.211,67.5z"/><path style="fill: #64768e" d="M190.421,504.44h-62.69c-33.13,0-60-26.86-60-60V67.5c0-33.14,26.87-60,60-60h48.86&#10;&#9;&#9;&#9;c-7.15,6.38-14.77,17.56-14.77,36.26v411.44C161.821,455.201,161.611,484.551,190.421,504.44z"/><path style="fill: #c5ced6" d="M414.091,67.62v143.17l-188.56,12.65l75.62-185.82h82.94&#10;&#9;&#9;&#9;C400.661,37.62,414.091,51.051,414.091,67.62z"/><polygon style="fill: #abb6c4" points="271.031,37.62 225.531,223.44 161.821,217.131 97.85,210.79 118.08,74.5 162.111,37.62 &#9;&#9;&#10;&#9;&#9;&#9;"/><path style="fill: #9ca9ba" d="M162.111,37.62c-0.19,1.95-0.29,4-0.29,6.14v173.37l-63.97-6.34V67.62c0-16.57,13.43-30,30-30&#10;&#9;&#9;&#9;H162.111z"/><polygon style="fill: #c5ced6" points="311.951,223.44 293.62,414.091 161.821,414.091 111.611,379.181 97.85,240.911 &#10;&#9;&#9;&#9;161.821,235.69 &#9;&#9;"/><path style="fill: #abb6c4" d="M97.85,240.911l63.97-5.22v178.4h-33.97c-16.57,0-30-13.43-30-30V240.911z"/><path style="fill: #64768e" d="M414.091,240.911v143.18c0,16.57-13.43,30-30,30h-60.36l-11.78-190.65L414.091,240.911z"/><path style="fill: #64768e" d="M286.088,474.324h-60.235c-8.317,0-15.059-6.742-15.059-15.059v0&#10;&#9;&#9;&#9;c0-8.317,6.742-15.059,15.059-15.059h60.235c8.317,0,15.059,6.742,15.059,15.059v0&#10;&#9;&#9;&#9;C301.147,467.581,294.405,474.324,286.088,474.324z"/><path style="fill: #e8ecf9" d="M414.091,210.79v30.12h-75.36c-8.28,0-15,6.72-15,15v158.18h-30.11v-158.18c0-8.28-6.72-15-15-15&#10;&#9;&#9;&#9;h-116.8l-12.76-12.88l12.76-17.24h42.84c6.52,0,12.3-4.22,14.29-10.43l52.08-162.74h30.12l-49.16,153.6&#10;&#9;&#9;&#9;c-3.09,9.68,4.13,19.57,14.29,19.57H414.091z"/><rect x="97.85" y="210.79" style="fill: #d7ddf5" width="63.97" height="30.12"/></g><g><path style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        " d="&#10;&#9;&#9;&#9;M384.206,504.441H127.735c-33.137,0-60-26.863-60-60V67.5c0-33.137,26.863-60,60-60h256.471c33.137,0,60,26.863,60,60v376.941&#10;&#9;&#9;&#9;C444.206,477.578,417.343,504.441,384.206,504.441z"/><path style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        " d="&#10;&#9;&#9;&#9;M384.088,414.088H127.853c-16.569,0-30-13.431-30-30V67.618c0-16.569,13.431-30,30-30h256.235c16.569,0,30,13.431,30,30v316.471&#10;&#9;&#9;&#9;C414.088,400.657,400.657,414.088,384.088,414.088z"/><path style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        " d="&#10;&#9;&#9;&#9;M286.088,474.324h-60.235c-8.317,0-15.059-6.742-15.059-15.059c0-8.317,6.742-15.059,15.059-15.059h60.235&#10;&#9;&#9;&#9;c8.317,0,15.059,6.742,15.059,15.059C301.147,467.581,294.405,474.324,286.088,474.324z"/><path style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        " d="&#10;&#9;&#9;&#9;M100.85,210.79h103.811c6.523,0,12.298-4.215,14.286-10.428L270.56,39.09"/><path style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        " d="&#10;&#9;&#9;&#9;M293.62,410.091v-154.18c0-8.284-6.716-15-15-15H100.85"/><path style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        " d="&#10;&#9;&#9;&#9;M411.091,240.911h-72.36c-8.284,0-15,6.716-15,15v154.18"/><path style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        " d="&#10;&#9;&#9;&#9;M300.616,39.291l-48.622,151.927c-3.098,9.679,4.124,19.572,14.286,19.572h144.81"/><g><line style="
            fill: none;
            stroke: #000000;
            stroke-width: 15;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-miterlimit: 10;
          " x1="133.2" y1="310.695" x2="133.2" y2="322.695"/><line style="
            fill: none;
            stroke: #000000;
            stroke-width: 15;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-miterlimit: 10;
          " x1="258.098" y1="310.695" x2="258.098" y2="322.695"/><g><path style="
              fill: none;
              stroke: #000000;
              stroke-width: 15;
              stroke-linecap: round;
              stroke-miterlimit: 10;
            " d="M195.831,329.85&#10;&#9;&#9;&#9;&#9;&#9;c0,7.984-6.472,14.456-14.456,14.456s-14.456-6.472-14.456-14.456"/><path style="
              fill: none;
              stroke: #000000;
              stroke-width: 15;
              stroke-linecap: round;
              stroke-miterlimit: 10;
            " d="M224.742,329.85&#10;&#9;&#9;&#9;&#9;&#9;c0,7.984-6.472,14.456-14.456,14.456s-14.456-6.472-14.456-14.456"/></g></g></g></g></svg>`,rv='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-external-link" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"/><path d="M11 13l9 -9"/><path d="M15 4h5v5"/></svg>',ov='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"/><path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6"/></svg>',iv='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye-off" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10.585 10.587a2 2 0 0 0 2.829 2.828"/><path d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87"/><path d="M3 3l18 18"/></svg>',av='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file-download" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 3v4a1 1 0 0 0 1 1h4"/><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"/><path d="M12 17v-6"/><path d="M9.5 14.5l2.5 2.5l2.5 -2.5"/></svg>',sv='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-file-percent"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 17l4 -4"/><path d="M14 3v4a1 1 0 0 0 1 1h4"/><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"/><path d="M10 13h.01"/><path d="M14 17h.01"/></svg>',lv='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-hand-click"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 13v-8.5a1.5 1.5 0 0 1 3 0v7.5"/><path d="M11 11.5v-2a1.5 1.5 0 0 1 3 0v2.5"/><path d="M14 10.5a1.5 1.5 0 0 1 3 0v1.5"/><path d="M17 11.5a1.5 1.5 0 0 1 3 0v4.5a6 6 0 0 1 -6 6h-2h.208a6 6 0 0 1 -5.012 -2.7l-.196 -.3c-.312 -.479 -1.407 -2.388 -3.286 -5.728a1.5 1.5 0 0 1 .536 -2.022a1.867 1.867 0 0 1 2.28 .28l1.47 1.47"/><path d="M5 3l-1 -1"/><path d="M4 7h-1"/><path d="M14 3l1 -1"/><path d="M15 6h1"/></svg>',cv='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-help"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"/><path d="M12 17l0 .01"/><path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4"/></svg>',dv='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-info-circle"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg>',uv='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-keyboard" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M2 6m0 2a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-16a2 2 0 0 1 -2 -2z"/><path d="M6 10l0 .01"/><path d="M10 10l0 .01"/><path d="M14 10l0 .01"/><path d="M18 10l0 .01"/><path d="M6 14l0 .01"/><path d="M18 14l0 .01"/><path d="M10 14l4 .01"/></svg>',hv='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-layout-bottombar"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"/><path d="M4 15l16 0"/></svg>',fv='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-layout-bottombar-inactive"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"/><path d="M4 15h1"/><path d="M19 15h1"/><path d="M9 15h1"/><path d="M14 15h1"/></svg>',pv='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-layout-dashboard"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 4h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1" /><path d="M5 16h4a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1" /><path d="M15 12h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1" /><path d="M15 4h4a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1" /></svg>',gv='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-layout-sidebar"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"/><path d="M9 4l0 16"/></svg>',mv='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-layout-sidebar-inactive"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"/><path d="M9 4v1"/><path d="M9 9v1"/><path d="M9 14v1"/><path d="M9 19v1"/></svg>',vv='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-layout-sidebar-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"/><path d="M15 4l0 16"/></svg>',bv='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-layout-sidebar-right-inactive"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"/><path d="M15 4v1"/><path d="M15 9v1"/><path d="M15 14v1"/><path d="M15 19v1"/></svg>',wv='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-list-numbers" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M11 6h9"/><path d="M11 12h9"/><path d="M12 18h8"/><path d="M4 16a2 2 0 1 1 4 0c0 .591 -.5 1 -1 1.5l-3 2.5h4"/><path d="M6 10v-6l-2 2"/></svg>',_v='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-loader-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 3a9 9 0 1 0 9 9"/></svg>',yv='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-location-cog"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 18l-2 -4l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5l-3.14 8.697"/><path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M19.001 15.5v1.5"/><path d="M19.001 21v1.5"/><path d="M22.032 17.25l-1.299 .75"/><path d="M17.27 20l-1.3 .75"/><path d="M15.97 17.25l1.3 .75"/><path d="M20.733 20l1.3 .75"/></svg>',kv='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6l16 0"/><path d="M4 12l16 0"/><path d="M4 18l16 0"/></svg>',Ev='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-menu-deep"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6h16"/><path d="M7 12h13"/><path d="M10 18h10"/></svg>',Av='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-message" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 9h8"/><path d="M8 13h6"/><path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z"/></svg>',Sv='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-moon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"/></svg>',Mv='<svg id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m449.945 61.818v388.363c0 34.144-27.684 61.818-61.818 61.818h-264.253c-34.134 0-61.818-27.674-61.818-61.818v-388.363c-.001-34.144 27.684-61.818 61.818-61.818h264.253c34.133 0 61.818 27.674 61.818 61.818z" fill="#e8ecf9"/><path d="m207.555 512h-83.681c-34.134 0-61.818-27.674-61.818-61.818v-388.364c-.001-34.144 27.684-61.818 61.818-61.818h79.993c-11.292 3.421-26.809 12.446-26.809 36.256v436.87c0 26.479 19.854 35.783 30.497 38.874z" fill="#d7ddf5"/><path d="m403.396 62.004v139.751c0 8.541-6.924 15.455-15.455 15.455h-210.883l-51.556-21.729v-124.699l51.556-24.233h210.883c8.531 0 15.455 6.913 15.455 15.455z" fill="#c5ced6"/><path d="m177.058 46.549v170.66h-52.999c-8.531 0-15.455-6.913-15.455-15.455v-139.75c0-8.541 6.924-15.455 15.455-15.455z" fill="#abb6c4"/><path d="m217.209 279.213v8.036l-40.151 41.769-8.809 9.17-59.644 4.307 12.333-53.195 56.121-25.541h24.696c8.541-.001 15.454 6.923 15.454 15.454z" fill="#c5ced6"/><path d="m124.059 263.758h52.999v65.26l-8.809 9.17-59.644 4.307v-63.281c-.001-8.532 6.923-15.456 15.454-15.456z" fill="#abb6c4"/><path d="m217.209 334.365v60.407l-40.151 43.438-4.204 4.543-64.25-8.634 8.573-21.379-8.573-26.551 50.743-51.824z" fill="#c5ced6"/><path d="m177.058 334.365v103.845l-4.204 4.543-64.25-8.634v-47.93l50.743-51.824z" fill="#abb6c4"/><path d="m217.209 287.249v47.116c-2.823 1.731-5.121 4.368-6.388 7.696-2.359 6.182-8.253 9.984-14.496 9.984-1.844 0-3.719-.33-5.543-1.03-.546-.206-1.092-.381-1.638-.525-1.298-.34-2.596-.505-3.895-.505-2.916 0-5.749.824-8.191 2.339l-11.045-14.888 11.045-32.29c1.03.165 2.061.433 3.07.824.587.227 1.175.412 1.772.556 1.247.319 2.514.474 3.771.474 6.244 0 12.137-3.802 14.496-9.984.082-.206.165-.412.258-.608 2.493-5.821 8.191-9.376 14.239-9.376.845.001 1.69.073 2.545.217z" fill="#808fa4"/><path d="m177.058 305.146v47.178c-2.782 1.731-5.049 4.348-6.305 7.645-.196.505-.402.989-.649 1.453-2.669 5.316-8.108 8.521-13.847 8.521-.309 0-.618-.01-.927-.031-1.535-.093-3.091-.412-4.605-.999-1.824-.701-3.699-1.03-5.543-1.03-6.244 0-12.137 3.802-14.496 9.984s-8.242 9.984-14.496 9.984c-1.834 0-3.709-.33-5.533-1.03-.68-.258-1.36-.474-2.05-.628v-43.695c5.038-1.02 9.458-4.523 11.426-9.674 2.359-6.182 8.253-9.984 14.496-9.984 1.844 0 3.709.33 5.533 1.03 1.824.701 3.709 1.03 5.553 1.03 1.113 0 2.226-.124 3.297-.361 2.895-.629 5.574-2.081 7.686-4.193 1.494-1.494 2.699-3.318 3.503-5.419 2.359-6.182 8.242-9.984 14.496-9.984.813-.003 1.637.058 2.461.203z" fill="#64768e"/><path d="m217.209 394.772v55.224c0 8.541-6.913 15.455-15.455 15.455h-24.696l-15.516-24.284 15.516-28.426c1.885-1.618 3.4-3.719 4.348-6.202 2.359-6.172 8.253-9.973 14.496-9.973 1.844 0 3.719.33 5.543 1.03 1.824.701 3.689 1.03 5.533 1.03 1.175 0 2.349-.134 3.472-.402h.01c2.494-.578 4.822-1.762 6.749-3.452z" fill="#808fa4"/><path d="m166.91 416.522c3.74 0 7.346-1.36 10.148-3.781v52.71h-52.999c-8.531 0-15.455-6.913-15.455-15.455v-15.877c3.802-1.968 8.397-2.37 12.704-.721 1.824.701 3.699 1.03 5.543 1.03 6.244 0 12.137-3.802 14.496-9.984s8.242-9.984 14.496-9.984c1.834 0 3.709.33 5.533 1.03 1.824.702 3.7 1.032 5.534 1.032z" fill="#64768e"/><path d="m403.396 351.612v98.384c0 8.541-6.924 15.455-15.455 15.455h-69.051l-55.132-93.686v-92.552c0-8.531 6.924-15.455 15.455-15.455h62.91z" fill="#808fa4"/><path d="m380.121 333.572-61.231 131.879h-39.677c-8.531 0-15.455-6.913-15.455-15.455v-78.231l77.572-53.699z" fill="#abb6c4"/><path d="m403.396 279.213v72.4c-7.058 3.359-14.95 5.234-23.275 5.234-3.534 0-6.996-.34-10.344-.989-17.34-3.338-31.744-14.929-38.956-30.518-3.215-6.924-5.007-14.651-5.007-22.79 0-15.197 6.244-28.941 16.31-38.791h45.818c8.53-.001 15.454 6.923 15.454 15.454z" fill="#c5ced6"/><g><g><ellipse cx="172.744" cy="147.233" fill="#fff" rx="30.72" ry="24.464"/><ellipse cx="339.256" cy="147.233" fill="#fff" rx="30.72" ry="24.464"/><path d="m285.787 117.781c-4.268 0-7.727 3.46-7.727 7.727 0 3.952-3.215 7.166-7.166 7.166s-7.166-3.215-7.166-7.166c0-4.268-3.46-7.727-7.727-7.727-4.268 0-7.727 3.46-7.727 7.727 0 3.952-3.215 7.166-7.166 7.166-3.952 0-7.166-3.215-7.166-7.166 0-4.268-3.46-7.727-7.727-7.727-4.268 0-7.727 3.46-7.727 7.727 0 12.473 10.148 22.621 22.621 22.621 5.701 0 10.911-2.124 14.894-5.616 3.982 3.492 9.193 5.616 14.894 5.616 12.473 0 22.621-10.148 22.621-22.621-.003-4.267-3.463-7.727-7.731-7.727z" fill="#495560"/></g><g><path d="m206.795 121.062c-4.268 0-7.727-3.46-7.727-7.727 0-3.559-2.896-6.454-6.455-6.454s-6.455 2.895-6.455 6.454c0 4.268-3.46 7.727-7.727 7.727-4.268 0-7.727-3.46-7.727-7.727 0-12.081 9.829-21.909 21.91-21.909s21.91 9.828 21.91 21.909c-.001 4.267-3.461 7.727-7.729 7.727z" fill="#495560"/></g><g><path d="m333.569 121.062c-4.268 0-7.727-3.46-7.727-7.727 0-3.559-2.896-6.454-6.455-6.454s-6.455 2.895-6.455 6.454c0 4.268-3.46 7.727-7.727 7.727-4.268 0-7.727-3.46-7.727-7.727 0-12.081 9.829-21.909 21.91-21.909s21.91 9.828 21.91 21.909c-.001 4.267-3.461 7.727-7.729 7.727z" fill="#495560"/></g></g></g></svg>',xv=`<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 511.94 511.94" style="enable-background: new 0 0 511.94 511.94" xml:space="preserve" width="512" height="512"><g><g><path style="fill: #e8ecf9" d="M444.21,67.5v376.94c0,33.14-26.87,60-60,60H127.73c-33.13,0-60-26.86-60-60V67.5&#10;&#9;&#9;&#9;c0-33.14,26.87-60,60-60h256.48C417.34,7.5,444.21,34.36,444.21,67.5z"/><path style="fill: #d7ddf5" d="M208.95,504.44h-81.22c-33.13,0-60-26.86-60-60V67.5c0-33.14,26.87-60,60-60h77.64&#10;&#9;&#9;&#9;c-10.96,3.32-26.02,12.08-26.02,35.19v424.02C179.35,492.41,198.62,501.44,208.95,504.44z"/><path style="fill: #c5ced6" d="M399.03,67.68v135.64c0,8.29-6.72,15-15,15H179.35l-50.04-21.09V76.2l50.04-23.52h204.68&#10;&#9;&#9;&#9;C392.31,52.68,399.03,59.39,399.03,67.68z"/><path style="fill: #abb6c4" d="M179.35,52.68v165.64h-51.44c-8.28,0-15-6.71-15-15V67.68c0-8.29,6.72-15,15-15H179.35z"/><path style="fill: #c5ced6" d="M218.32,278.5v7.8l-38.97,40.54l-8.55,8.9l-57.89,4.18l11.97-51.63l54.47-24.79h23.97&#10;&#9;&#9;&#9;C211.61,263.5,218.32,270.22,218.32,278.5z"/><path style="fill: #abb6c4" d="M127.91,263.5h51.44v63.34l-8.55,8.9l-57.89,4.18V278.5C112.91,270.22,119.63,263.5,127.91,263.5z"/><polygon style="fill: #c5ced6" points="218.32,332.03 218.32,390.66 179.35,432.82 175.27,437.23 112.91,428.85 121.23,408.1 &#10;&#9;&#9;&#9;112.91,382.33 162.16,332.03 &#9;&#9;"/><polygon style="fill: #abb6c4" points="179.35,332.03 179.35,432.82 175.27,437.23 112.91,428.85 112.91,382.33 162.16,332.03 &#9;&#9;&#10;&#9;&#9;&#9;"/><path style="fill: #808fa4" d="M218.32,286.3v45.73c-2.74,1.68-4.97,4.24-6.2,7.47c-2.29,6-8.01,9.69-14.07,9.69&#10;&#9;&#9;&#9;c-1.79,0-3.61-0.32-5.38-1c-0.53-0.2-1.06-0.37-1.59-0.51c-1.26-0.33-2.52-0.49-3.78-0.49c-2.83,0-5.58,0.8-7.95,2.27&#10;&#9;&#9;&#9;l-10.72-14.45l10.72-31.34c1,0.16,2,0.42,2.98,0.8c0.57,0.22,1.14,0.4,1.72,0.54c1.21,0.31,2.44,0.46,3.66,0.46&#10;&#9;&#9;&#9;c6.06,0,11.78-3.69,14.07-9.69c0.08-0.2,0.16-0.4,0.25-0.59c2.42-5.65,7.95-9.1,13.82-9.1&#10;&#9;&#9;&#9;C216.67,286.09,217.49,286.16,218.32,286.3z"/><path style="fill: #64768e" d="M179.35,303.67v45.79c-2.7,1.68-4.9,4.22-6.12,7.42c-0.19,0.49-0.39,0.96-0.63,1.41&#10;&#9;&#9;&#9;c-2.59,5.16-7.87,8.27-13.44,8.27c-0.3,0-0.6-0.01-0.9-0.03c-1.49-0.09-3-0.4-4.47-0.97c-1.77-0.68-3.59-1-5.38-1&#10;&#9;&#9;&#9;c-6.06,0-11.78,3.69-14.07,9.69s-8,9.69-14.07,9.69c-1.78,0-3.6-0.32-5.37-1c-0.66-0.25-1.32-0.46-1.99-0.61v-42.41&#10;&#9;&#9;&#9;c4.89-0.99,9.18-4.39,11.09-9.39c2.29-6,8.01-9.69,14.07-9.69c1.79,0,3.6,0.32,5.37,1c1.77,0.68,3.6,1,5.39,1&#10;&#9;&#9;&#9;c1.08,0,2.16-0.12,3.2-0.35c2.81-0.61,5.41-2.02,7.46-4.07c1.45-1.45,2.62-3.22,3.4-5.26c2.29-6,8-9.69,14.07-9.69&#10;&#9;&#9;&#9;C177.75,303.47,178.55,303.53,179.35,303.67z"/><path style="fill: #808fa4" d="M218.32,390.66v53.6c0,8.29-6.71,15-15,15h-23.97l-15.06-23.57l15.06-27.59&#10;&#9;&#9;&#9;c1.83-1.57,3.3-3.61,4.22-6.02c2.29-5.99,8.01-9.68,14.07-9.68c1.79,0,3.61,0.32,5.38,1c1.77,0.68,3.58,1,5.37,1&#10;&#9;&#9;&#9;c1.14,0,2.28-0.13,3.37-0.39h0.01C214.19,393.45,216.45,392.3,218.32,390.66z"/><path style="fill: #64768e" d="M169.5,411.77c3.63,0,7.13-1.32,9.85-3.67v51.16h-51.44c-8.28,0-15-6.71-15-15v-15.41&#10;&#9;&#9;&#9;c3.69-1.91,8.15-2.3,12.33-0.7c1.77,0.68,3.59,1,5.38,1c6.06,0,11.78-3.69,14.07-9.69c2.29-6,8-9.69,14.07-9.69&#10;&#9;&#9;&#9;c1.78,0,3.6,0.32,5.37,1C165.9,411.45,167.72,411.77,169.5,411.77z"/><path style="fill: #808fa4" d="M399.03,348.77v95.49c0,8.29-6.72,15-15,15h-67.02l-53.51-90.93V278.5c0-8.28,6.72-15,15-15h61.06&#10;&#9;&#9;&#9;L399.03,348.77z"/><path style="fill: #abb6c4" d="M376.44,331.26l-59.43,128H278.5c-8.28,0-15-6.71-15-15v-75.93l75.29-52.12L376.44,331.26z"/><path style="fill: #c5ced6" d="M399.03,278.5v70.27c-6.85,3.26-14.51,5.08-22.59,5.08c-3.43,0-6.79-0.33-10.04-0.96&#10;&#9;&#9;&#9;c-16.83-3.24-30.81-14.49-37.81-29.62c-3.12-6.72-4.86-14.22-4.86-22.12c0-14.75,6.06-28.09,15.83-37.65h44.47&#10;&#9;&#9;&#9;C392.31,263.5,399.03,270.22,399.03,278.5z"/><g><g><ellipse style="fill: #ffffff" cx="175.162" cy="150.402" rx="29.816" ry="23.744"/><ellipse style="fill: #ffffff" cx="336.778" cy="150.402" rx="29.816" ry="23.744"/></g></g></g><g><path style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        " d="&#10;&#9;&#9;&#9;M67.73,402.54v41.9c0,33.14,26.87,60,60,60h256.48c33.13,0,60-26.86,60-60V67.5c0-33.14-26.87-60-60-60H127.73&#10;&#9;&#9;&#9;c-33.13,0-60,26.86-60,60v300.04"/><path style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        " d="&#10;&#9;&#9;&#9;M359,52.68h25.03c8.28,0,15,6.71,15,15v135.64c0,8.29-6.72,15-15,15H127.91c-8.28,0-15-6.71-15-15V67.68c0-8.29,6.72-15,15-15H324&#10;&#9;&#9;&#9;"/><path style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        " d="&#10;&#9;&#9;&#9;M203.323,459.264h-75.412c-8.284,0-15-6.716-15-15V278.499c0-8.284,6.716-15,15-15h75.412c8.284,0,15,6.716,15,15v165.765&#10;&#9;&#9;&#9;C218.323,452.548,211.607,459.264,203.323,459.264z"/><path style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        " d="&#10;&#9;&#9;&#9;M399.03,278.5v165.76c0,8.29-6.72,15-15,15H278.5c-8.28,0-15-6.71-15-15V278.5c0-8.28,6.72-15,15-15h105.53&#10;&#9;&#9;&#9;C392.31,263.5,399.03,270.22,399.03,278.5z"/><line style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        " x1="264.641" y1="367.54" x2="327.14" y2="324.275"/><line style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        " x1="335.24" y1="420" x2="317.58" y2="458.04"/><line style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        " x1="365.42" y1="354.99" x2="349.98" y2="388.25"/><path style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        " d="&#10;&#9;&#9;&#9;M337.07,266.11c-14.481,16.226-16.955,38.907-8.48,57.16c12.198,26.365,43.179,37.557,69.06,26.13"/><path style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        " d="&#10;&#9;&#9;&#9;M114.09,339.63c4.39-1.26,8.16-4.51,9.91-9.1c2.29-6,8.01-9.69,14.07-9.69c4.907,0,5.826,2,10.76,2&#10;&#9;&#9;&#9;c6.016,0,11.752-3.643,14.06-9.68c2.29-6,8-9.69,14.07-9.69c3.551,0,5.135,1.068,7.09,1.54c7.171,1.837,14.948-1.942,17.73-9.23&#10;&#9;&#9;&#9;c2.653-6.632,8.993-10.222,15.36-9.63"/><path style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        " d="&#10;&#9;&#9;&#9;M114.09,382.66c0.973,0.288,2.952,1.28,6.18,1.28c6.07,0,11.78-3.69,14.07-9.69c2.29-6,8.01-9.69,14.07-9.69&#10;&#9;&#9;&#9;c4.605,0,5.534,1.709,9.85,1.97c6.213,0.414,12.476-3.218,14.97-9.65c2.891-7.576,11.422-11.716,19.44-8.69&#10;&#9;&#9;&#9;c7.75,2.977,16.481-0.911,19.45-8.69c1.05-2.75,2.82-5.02,5.02-6.66"/><path style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        " d="&#10;&#9;&#9;&#9;M114.09,428.31c3.44-1.43,7.41-1.59,11.15-0.16c7.75,2.977,16.481-0.911,19.45-8.69c2.29-6,8-9.69,14.07-9.69&#10;&#9;&#9;&#9;c4.886,0,5.854,2,10.74,2c6.07,0,11.78-3.69,14.07-9.69c2.29-5.99,8.01-9.68,14.07-9.68c4.907,0,5.856,2,10.75,2&#10;&#9;&#9;&#9;c3.118,0,6.213-0.998,8.75-2.81"/><g><g><g><path style="
                fill: none;
                stroke: #000000;
                stroke-width: 15;
                stroke-linecap: round;
                stroke-miterlimit: 10;
              " d="M255.97,129.317&#10;&#9;&#9;&#9;&#9;&#9;&#9;c0,7.984-6.472,14.456-14.456,14.456c-7.984,0-14.456-6.472-14.456-14.456"/><path style="
                fill: none;
                stroke: #000000;
                stroke-width: 15;
                stroke-linecap: round;
                stroke-miterlimit: 10;
              " d="M284.881,129.317&#10;&#9;&#9;&#9;&#9;&#9;&#9;c0,7.984-6.472,14.456-14.456,14.456c-7.984,0-14.456-6.472-14.456-14.456"/></g></g><path style="
            fill: none;
            stroke: #000000;
            stroke-width: 15;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-miterlimit: 10;
          " d="&#10;&#9;&#9;&#9;&#9;M208.213,117.501c0-7.602-6.163-13.765-13.765-13.765c-7.602,0-13.765,6.163-13.765,13.765"/><path style="
            fill: none;
            stroke: #000000;
            stroke-width: 15;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-miterlimit: 10;
          " d="&#10;&#9;&#9;&#9;&#9;M303.727,117.501c0-7.602,6.163-13.765,13.765-13.765c7.602,0,13.765,6.163,13.765,13.765"/></g></g></g></svg>`,Iv='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-palette" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 21a9 9 0 0 1 0 -18c4.97 0 9 3.582 9 8c0 1.06 -.474 2.078 -1.318 2.828c-.844 .75 -1.989 1.172 -3.182 1.172h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25"/><path d="M8.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/><path d="M12.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/><path d="M16.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/></svg>',Cv='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-pencil" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4"/><path d="M13.5 6.5l4 4"/></svg>',Ov='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-pencil-cog"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4"/><path d="M13.5 6.5l4 4"/><path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M19.001 15.5v1.5"/><path d="M19.001 21v1.5"/><path d="M22.032 17.25l-1.299 .75"/><path d="M17.27 20l-1.3 .75"/><path d="M15.97 17.25l1.3 .75"/><path d="M20.733 20l1.3 .75"/></svg>',Tv='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-photo" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 8h.01"/><path d="M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z"/><path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5"/><path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3"/></svg>',Lv='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-photo-off" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 8h.01"/><path d="M7 3h11a3 3 0 0 1 3 3v11m-.856 3.099a2.991 2.991 0 0 1 -2.144 .901h-12a3 3 0 0 1 -3 -3v-12c0 -.845 .349 -1.608 .91 -2.153"/><path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5"/><path d="M16.33 12.338c.574 -.054 1.155 .166 1.67 .662l3 3"/><path d="M3 3l18 18" color="orange"/></svg>',Rv='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-pin"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 4.5l-4 4l-4 1.5l-1.5 1.5l7 7l1.5 -1.5l1.5 -4l4 -4"/><path d="M9 15l-4.5 4.5"/><path d="M14.5 4l5.5 5.5"/></svg>',Pv='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-player-pause" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z"/><path d="M14 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z"/></svg>',$v='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-player-play" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 4v16l13 -8z"/></svg>',Dv='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-refresh" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4"/><path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4"/></svg>',zv='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-settings" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"/><path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"/></svg>',Bv='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-settings-off"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9.451 5.437c.418 -.218 .75 -.609 .874 -1.12c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35c-.486 .118 -.894 .44 -1.123 .878m-.188 3.803c-.517 .523 -1.349 .734 -2.125 .262a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.472 -.774 -.262 -1.604 .259 -2.121"/><path d="M9.889 9.869a3 3 0 1 0 4.226 4.26m.592 -3.424a3.012 3.012 0 0 0 -1.419 -1.415"/><path d="M3 3l18 18"/></svg>',Nv='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-spacing-horizontal"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 20h-2a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h2"/><path d="M4 20h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2"/><path d="M12 8v8"/></svg>',Hv='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-spacing-vertical" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 20v-2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v2"/><path d="M4 4v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"/><path d="M16 12h-8"/></svg>',Fv='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-sun" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"/><path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"/></svg>',Gv='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 7l16 0"/><path d="M10 11l0 6"/><path d="M14 11l0 6"/><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"/><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"/></svg>',Wv='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-world-cog"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M21 12a9 9 0 1 0 -8.979 9"/><path d="M3.6 9h16.8"/><path d="M3.6 15h8.9"/><path d="M11.5 3a17 17 0 0 0 0 18"/><path d="M12.5 3a16.992 16.992 0 0 1 2.522 10.376"/><path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M19.001 15.5v1.5"/><path d="M19.001 21v1.5"/><path d="M22.032 17.25l-1.299 .75"/><path d="M17.27 20l-1.3 .75"/><path d="M15.97 17.25l1.3 .75"/><path d="M20.733 20l1.3 .75"/></svg>',Uv='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12"/><path d="M6 6l12 12"/></svg>',Vv='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-zoom"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"/><path d="M21 21l-6 -6"/></svg>',Zv='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-cancel" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"/><path d="M8 8l4 4"/><path d="M12 8l-4 4"/><path d="M21 21l-6 -6"/></svg>',jv='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-in" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"/><path d="M7 10l6 0"/><path d="M10 7l0 6"/><path d="M21 21l-6 -6"/></svg>',qv='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-in-area" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 13v4"/><path d="M13 15h4"/><path d="M15 15m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0"/><path d="M22 22l-3 -3"/><path d="M6 18h-1a2 2 0 0 1 -2 -2v-1"/><path d="M3 11v-1"/><path d="M3 6v-1a2 2 0 0 1 2 -2h1"/><path d="M10 3h1"/><path d="M15 3h1a2 2 0 0 1 2 2v1"/></svg>',Kv='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-out" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"/><path d="M7 10l6 0"/><path d="M21 21l-6 -6"/></svg>',Yv='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-out-area" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M13 15h4"/><path d="M15 15m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0"/><path d="M22 22l-3 -3"/><path d="M6 18h-1a2 2 0 0 1 -2 -2v-1"/><path d="M3 11v-1"/><path d="M3 6v-1a2 2 0 0 1 2 -2h1"/><path d="M10 3h1"/><path d="M15 3h1a2 2 0 0 1 2 2v1"/></svg>',Xv='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-pan" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"/><path d="M17 17l-2.5 -2.5"/><path d="M10 5l2 -2l2 2"/><path d="M19 10l2 2l-2 2"/><path d="M5 10l-2 2l2 2"/><path d="M10 19l2 2l2 -2"/></svg>',Jv=Xc({IconAdjustmentsHorizontal:()=>p5,IconAlertCircle:()=>g5,IconApiBook:()=>m5,IconArrowAutofitDown:()=>v5,IconArrowAutofitHeight:()=>b5,IconArrowAutofitLeft:()=>w5,IconArrowAutofitRight:()=>_5,IconArrowAutofitWidth:()=>y5,IconArrowBigLeft:()=>k5,IconArrowBigRight:()=>E5,IconArrowsHorizontal:()=>A5,IconArrowsLeftRight:()=>S5,IconArrowsMove:()=>M5,IconArrowsMoveVertical:()=>x5,IconArrowsVertical:()=>I5,IconBook:()=>C5,IconBookArrowLeft:()=>O5,IconBookArrowRight:()=>T5,IconBookOff:()=>L5,IconBookUpload:()=>R5,IconBookmark:()=>P5,IconBookmarkOff:()=>$5,IconBookmarks:()=>D5,IconBooksReturn:()=>z5,IconBoxAlignTop:()=>B5,IconCategory:()=>V5,IconCheck:()=>Z5,IconChevronLeft:()=>j5,IconChevronRight:()=>q5,IconCircleCheck:()=>K5,IconCircleX:()=>Y5,IconComic1:()=>H5,IconComic1Flat:()=>N5,IconComic2:()=>G5,IconComic2Flat:()=>F5,IconComic3:()=>U5,IconComic3Flat:()=>W5,IconDeviceFloppy:()=>X5,IconDotsVertical:()=>J5,IconEReader1:()=>ev,IconEReader1Flat:()=>Q5,IconEReader2:()=>nv,IconEReader2Flat:()=>tv,IconExternalLink:()=>rv,IconEye:()=>ov,IconEyeOff:()=>iv,IconFileDownload:()=>av,IconFilePercent:()=>sv,IconHandClick:()=>lv,IconHelp:()=>cv,IconInfoCircle:()=>dv,IconKeyboard:()=>uv,IconLayoutBottombar:()=>hv,IconLayoutBottombarInactive:()=>fv,IconLayoutDashboard:()=>pv,IconLayoutSidebar:()=>gv,IconLayoutSidebarInactive:()=>mv,IconLayoutSidebarRight:()=>vv,IconLayoutSidebarRightInactive:()=>bv,IconListNumbers:()=>wv,IconLoader2:()=>_v,IconLocationCog:()=>yv,IconMenu2:()=>kv,IconMenuDeep:()=>Ev,IconMessage:()=>Av,IconMoon:()=>Sv,IconPage:()=>xv,IconPageFlat:()=>Mv,IconPalette:()=>Iv,IconPencil:()=>Cv,IconPencilCog:()=>Ov,IconPhoto:()=>Tv,IconPhotoOff:()=>Lv,IconPin:()=>Rv,IconPlayerPause:()=>Pv,IconPlayerPlay:()=>$v,IconRefresh:()=>Dv,IconSettings:()=>zv,IconSettingsOff:()=>Bv,IconSpacingHorizontal:()=>Nv,IconSpacingVertical:()=>Hv,IconSun:()=>Fv,IconTrash:()=>Gv,IconWorldCog:()=>Wv,IconX:()=>Uv,IconZoom:()=>Vv,IconZoomCancel:()=>Zv,IconZoomIn:()=>jv,IconZoomInArea:()=>qv,IconZoomOut:()=>Kv,IconZoomOutArea:()=>Yv,IconZoomPan:()=>Xv}),kl=Xc({IconAdjustmentsHorizontal:()=>i4,IconAlertCircle:()=>R4,IconApiBook:()=>a4,IconArrowAutofitDown:()=>c4,IconArrowAutofitHeight:()=>d4,IconArrowAutofitLeft:()=>u4,IconArrowAutofitRight:()=>h4,IconArrowAutofitWidth:()=>f4,IconArrowBigLeft:()=>p4,IconArrowBigRight:()=>g4,IconArrowsHorizontal:()=>s4,IconArrowsLeftRight:()=>l4,IconArrowsMove:()=>m4,IconArrowsMoveVertical:()=>v4,IconArrowsVertical:()=>b4,IconBook:()=>w4,IconBookArrowLeft:()=>y4,IconBookArrowRight:()=>k4,IconBookOff:()=>_4,IconBookUpload:()=>A4,IconBookmark:()=>S4,IconBookmarkOff:()=>M4,IconBookmarks:()=>x4,IconBooksReturn:()=>E4,IconBoxAlignTop:()=>I4,IconCategory:()=>C4,IconCheck:()=>O4,IconChevronLeft:()=>T4,IconChevronRight:()=>L4,IconCircleCheck:()=>P4,IconCircleX:()=>$4,IconComic1:()=>B4,IconComic1Flat:()=>N4,IconComic2:()=>H4,IconComic2Flat:()=>F4,IconComic3:()=>G4,IconComic3Flat:()=>W4,IconDeviceFloppy:()=>U4,IconDotsVertical:()=>V4,IconEReader1:()=>Z4,IconEReader1Flat:()=>j4,IconEReader2:()=>q4,IconEReader2Flat:()=>K4,IconExternalLink:()=>Y4,IconEye:()=>X4,IconEyeOff:()=>J4,IconFileDownload:()=>Q4,IconFilePercent:()=>e3,IconHandClick:()=>t3,IconHelp:()=>D4,IconInfoCircle:()=>z4,IconKeyboard:()=>n3,IconLayoutBottombar:()=>o3,IconLayoutBottombarInactive:()=>i3,IconLayoutDashboard:()=>r3,IconLayoutSidebar:()=>a3,IconLayoutSidebarInactive:()=>s3,IconLayoutSidebarRight:()=>l3,IconLayoutSidebarRightInactive:()=>c3,IconListNumbers:()=>d3,IconLoader2:()=>u3,IconLocationCog:()=>h3,IconMenu2:()=>f3,IconMenuDeep:()=>p3,IconMessage:()=>g3,IconMoon:()=>m3,IconPage:()=>v3,IconPageFlat:()=>b3,IconPalette:()=>w3,IconPencil:()=>_3,IconPencilCog:()=>y3,IconPhoto:()=>El,IconPhotoOff:()=>Al,IconPin:()=>k3,IconPlayerPause:()=>E3,IconPlayerPlay:()=>A3,IconRefresh:()=>S3,IconSettings:()=>M3,IconSettingsOff:()=>x3,IconSpacingHorizontal:()=>I3,IconSpacingVertical:()=>C3,IconSun:()=>O3,IconTrash:()=>T3,IconWorldCog:()=>L3,IconX:()=>R3,IconZoom:()=>P3,IconZoomCancel:()=>$3,IconZoomIn:()=>D3,IconZoomInArea:()=>z3,IconZoomOut:()=>B3,IconZoomOutArea:()=>N3,IconZoomPan:()=>H3});function Qv(e){return[...e.matchAll(/([^{}]+)\s*\{([^}]+)\}/g)].map(t=>{const r=t[1].trim(),i=t[2],a=/color:\s*([^;]+)/.exec(i);if(a){const s=a[1].trim();return{selectors:r.split(",").map(c=>c.trim().replace(/\s\s+/g," ")),color:s}}return null}).filter(t=>t!==null)}var e4=Qv(f5),_a=new Map;for(const e of e4)for(const t of e.selectors){const r=t.match(/^\s*\.([^ ]+)\s*(.*)$/);if(!r)continue;const[,i,a]=r;let s=a.trim();s.startsWith(">")&&(s=s.substring(1).trim()),s===""&&(s="*"),_a.has(i)||_a.set(i,[]),_a.get(i)?.push({subSelector:s,color:e.color})}var t4=new DOMParser,n4=new XMLSerializer;function r4(e,t){const r=_a.get(t);if(!r?.length)return e;const i=t4.parseFromString(e,"image/svg+xml").documentElement;if(i.querySelector("parsererror"))return console.error(`Error parsing SVG for ${t}`),e;for(const{subSelector:a,color:s}of r)try{i.querySelectorAll(a).forEach(c=>{c.setAttribute("stroke",s)})}catch(c){console.error(`Invalid selector "${a}" for ${t}`,c)}return n4.serializeToString(i)}var o4=Me.default.mapValues(Jv,(e,t)=>r4(e,`icon-tabler-${Me.default.kebabCase(t.replace(/^Icon/,""))}`)),{IconAdjustmentsHorizontal:i4,IconApiBook:a4,IconArrowsHorizontal:s4,IconArrowsLeftRight:l4,IconArrowAutofitDown:c4,IconArrowAutofitHeight:d4,IconArrowAutofitLeft:u4,IconArrowAutofitRight:h4,IconArrowAutofitWidth:f4,IconArrowBigLeft:p4,IconArrowBigRight:g4,IconArrowsMove:m4,IconArrowsMoveVertical:v4,IconArrowsVertical:b4,IconBook:w4,IconBookOff:_4,IconBookArrowLeft:y4,IconBookArrowRight:k4,IconBooksReturn:E4,IconBookUpload:A4,IconBookmark:S4,IconBookmarkOff:M4,IconBookmarks:x4,IconBoxAlignTop:I4,IconCategory:C4,IconCheck:O4,IconChevronLeft:T4,IconChevronRight:L4,IconAlertCircle:R4,IconCircleCheck:P4,IconCircleX:$4,IconHelp:D4,IconInfoCircle:z4,IconComic1:B4,IconComic1Flat:N4,IconComic2:H4,IconComic2Flat:F4,IconComic3:G4,IconComic3Flat:W4,IconDeviceFloppy:U4,IconDotsVertical:V4,IconEReader1:Z4,IconEReader1Flat:j4,IconEReader2:q4,IconEReader2Flat:K4,IconExternalLink:Y4,IconEye:X4,IconEyeOff:J4,IconFileDownload:Q4,IconFilePercent:e3,IconHandClick:t3,IconKeyboard:n3,IconLayoutDashboard:r3,IconLayoutBottombar:o3,IconLayoutBottombarInactive:i3,IconLayoutSidebar:a3,IconLayoutSidebarInactive:s3,IconLayoutSidebarRight:l3,IconLayoutSidebarRightInactive:c3,IconListNumbers:d3,IconLoader2:u3,IconLocationCog:h3,IconMenu2:f3,IconMenuDeep:p3,IconMessage:g3,IconMoon:m3,IconPage:v3,IconPageFlat:b3,IconPalette:w3,IconPencil:_3,IconPencilCog:y3,IconPhoto:El,IconPhotoOff:Al,IconPin:k3,IconPlayerPause:E3,IconPlayerPlay:A3,IconRefresh:S3,IconSettings:M3,IconSettingsOff:x3,IconSpacingHorizontal:I3,IconSpacingVertical:C3,IconSun:O3,IconTrash:T3,IconWorldCog:L3,IconX:R3,IconZoom:P3,IconZoomCancel:$3,IconZoomIn:D3,IconZoomInArea:z3,IconZoomOut:B3,IconZoomOutArea:N3,IconZoomPan:H3}=o4;function G(e,t,r,i){var a=arguments.length,s=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,r):i,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,i);else for(var u=e.length-1;u>=0;u--)(c=e[u])&&(s=(a<3?c(s):a>3?c(t,r,s):c(t,r))||s);return a>3&&s&&Object.defineProperty(t,r,s),s}var Ur=class extends Qe{constructor(...t){super(...t),this.name="",this.variant="regular",this.family="classic",this.label="",this.size=""}static{this.styles=Ot`
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
  `}updated(t){super.updated(t),t.has("name")&&(kl[D0(this.name)]?(this.dispatchEvent(new CustomEvent("load",{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("wa-load",{bubbles:!0,composed:!0}))):(this.dispatchEvent(new CustomEvent("error",{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("wa-error",{bubbles:!0,composed:!0}))))}render(){const t=kl[D0(this.name)];if(!t)return De;const r=this.size?`--mov-icon-size: ${this.size};`:"";return ce`<span
      role=${this.label?"img":De}
      aria-label=${this.label||De}
      aria-hidden=${this.label?De:"true"}
      style=${r}
      >${$0(t)}</span
    >`}};G([re({type:String})],Ur.prototype,"name",void 0),G([re({type:String,reflect:!0})],Ur.prototype,"variant",void 0),G([re({type:String,reflect:!0})],Ur.prototype,"family",void 0),G([re({type:String})],Ur.prototype,"label",void 0),G([re({type:String})],Ur.prototype,"size",void 0),Ur=G([ut("mov-icon")],Ur);var Tt=qo(class extends Zi{constructor(e){if(super(e),e.type!==Vi.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in t)t[i]&&!this.nt?.has(i)&&this.st.add(i);return this.render(t)}const r=e.element.classList;for(const i of this.st)i in t||(r.remove(i),this.st.delete(i));for(const i in t){const a=!!t[i];a===this.st.has(i)||this.nt?.has(i)||(a?(r.add(i),this.st.add(i)):(r.remove(i),this.st.delete(i)))}return Yn}}),dn=e=>e??De,F3=":host{--mov-font-size-scale:1;--mov-font-size-m:calc(1rem * var(--mov-font-size-scale));--mov-font-size-s:round(calc(var(--mov-font-size-m) / 1.125), 1px);--mov-font-size-l:round(calc(var(--mov-font-size-m) * 1.125 * 1.125), 1px);--mov-border-width-s:.0625rem;--mov-border-radius-m:.375rem;--mov-border-radius-pill:9999px;--mov-transition-fast:75ms;--mov-font-weight-action:500;--mov-focus-ring:solid .1875rem var(--mov-color-fill-loud);--mov-focus-ring-offset:.0625rem;--mov-line-height-condensed:1.2;--mov-form-control-padding-block:.75em;--mov-form-control-padding-inline:1em;--mov-form-control-height:round(calc(2 * var(--mov-form-control-padding-block) + 1em * var(--mov-line-height-condensed)), 1px);display:inline-block}:host([size=small]){font-size:var(--mov-font-size-s)}:host([size=medium]){font-size:var(--mov-font-size-m)}:host([size=large]){font-size:var(--mov-font-size-l)}.button{box-sizing:border-box;user-select:none;white-space:nowrap;vertical-align:middle;transition-property:background,border,box-shadow,color;transition-duration:var(--mov-transition-fast);cursor:pointer;padding:0 var(--mov-form-control-padding-inline);font-family:inherit;font-size:inherit;font-weight:var(--mov-font-weight-action);line-height:calc(var(--mov-form-control-height) - var(--mov-border-width-s) * 2);height:var(--mov-form-control-height);border-radius:var(--mov-border-radius-m);border-style:solid;border-width:var(--mov-border-width-s);background-color:var(--mov-color-fill-loud);color:var(--mov-color-on-loud);border-color:#0000;justify-content:center;align-items:center;text-decoration:none;display:inline-flex}:host([appearance~=plain]){& .button{color:var(--mov-color-on-quiet);background-color:#0000;border-color:#0000}@media (hover:hover){& .button:not(.disabled):not(.loading):hover{color:var(--mov-color-on-quiet);background-color:var(--mov-color-fill-quiet)}}& .button:not(.disabled):not(.loading):active{color:var(--mov-color-on-quiet);background-color:color-mix(in oklab, var(--mov-color-fill-quiet), var(--mov-color-mix-active))}}:host([appearance~=outlined]){& .button{color:var(--mov-color-on-quiet);border-color:var(--mov-color-border-loud);background-color:#0000}@media (hover:hover){& .button:not(.disabled):not(.loading):hover{color:var(--mov-color-on-quiet);background-color:var(--mov-color-fill-quiet)}}& .button:not(.disabled):not(.loading):active{color:var(--mov-color-on-quiet);background-color:color-mix(in oklab, var(--mov-color-fill-quiet), var(--mov-color-mix-active))}}:host([appearance~=filled]){& .button{color:var(--mov-color-on-normal);background-color:var(--mov-color-fill-normal);border-color:#0000}@media (hover:hover){& .button:not(.disabled):not(.loading):hover{color:var(--mov-color-on-normal);background-color:color-mix(in oklab, var(--mov-color-fill-normal), var(--mov-color-mix-hover))}}& .button:not(.disabled):not(.loading):active{color:var(--mov-color-on-normal);background-color:color-mix(in oklab, var(--mov-color-fill-normal), var(--mov-color-mix-active))}}:host([appearance~=filled][appearance~=outlined]) .button{border-color:var(--mov-color-border-normal)}:host([appearance~=accent]){& .button{color:var(--mov-color-on-loud);background-color:var(--mov-color-fill-loud);border-color:#0000}@media (hover:hover){& .button:not(.disabled):not(.loading):hover{background-color:color-mix(in oklab, var(--mov-color-fill-loud), var(--mov-color-mix-hover))}}& .button:not(.disabled):not(.loading):active{background-color:color-mix(in oklab, var(--mov-color-fill-loud), var(--mov-color-mix-active))}}.button:focus{outline:none}.button:focus-visible{outline:var(--mov-focus-ring);outline-offset:var(--mov-focus-ring-offset)}.button.disabled{opacity:.5;cursor:not-allowed}.button.disabled *{pointer-events:none}.button.is-icon-button{outline-offset:2px;width:var(--mov-form-control-height);aspect-ratio:1}:host([pill]) .button{border-radius:var(--mov-border-radius-pill)}.start,.end{pointer-events:none;flex:none;align-items:center;display:flex}.label{display:inline-block}.is-icon-button .label{display:flex}mov-icon[part~=caret]{align-self:center;align-items:center;display:flex}mov-icon[part~=caret]::part(svg){width:.875em;height:.875em}.loading{cursor:wait;position:relative}.loading .start,.loading .label,.loading .end,.loading .caret{visibility:hidden}.spinner{--indicator-color:currentColor;--track-color:color-mix(in oklab, currentColor, transparent 90%);border:2px solid var(--track-color);border-top-color:var(--indicator-color);border-radius:50%;width:1em;height:1em;font-size:1em;animation:1s linear infinite spin;position:absolute;top:calc(50% - .5em);left:calc(50% - .5em)}@keyframes spin{to{transform:rotate(360deg)}}slot[name=start]::slotted(*){margin-inline-end:.75em}slot[name=end]::slotted(*),.button:not(.visually-hidden-label) [part~=caret]{margin-inline-start:.75em}",lt=class extends Qe{constructor(...t){super(...t),this.isIconButton=!1,this.hasLabel=!1,this.hasStart=!1,this.hasEnd=!1,this.title="",this.appearance="accent",this.variant="brand",this.size="medium",this.withCaret=!1,this.disabled=!1,this.loading=!1,this.pill=!1,this.type="button"}static{this.styles=[Xt(F3)]}handleClick(t){(this.disabled||this.loading)&&(t.preventDefault(),t.stopPropagation())}click(){this.button?.click()}focus(t){this.button?.focus(t)}blur(){this.button?.blur()}render(){const t=!!this.href,r={button:!0,"with-caret":this.withCaret,disabled:this.disabled,loading:this.loading,pill:this.pill,"has-label":this.hasLabel,"has-start":this.hasStart,"has-end":this.hasEnd,"is-icon-button":this.isIconButton},i=ce`
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
      ${this.withCaret?ce`<mov-icon
            part="caret"
            class="caret"
            name="IconChevronRight"
            style="transform: rotate(90deg)"
          ></mov-icon>`:""}
      ${this.loading?ce`<span
            part="spinner"
            class="spinner"
          ></span>`:""}
    `;return t?ce`
        <a
          part="base"
          class=${Tt(r)}
          href=${dn(this.href)}
          target=${dn(this.target)}
          title=${dn(this.title)}
          role="button"
          aria-disabled=${this.disabled?"true":"false"}
          tabindex=${this.disabled?"-1":"0"}
          download=${dn(this.download)}
          @click=${this.handleClick}
        >
          ${i}
        </a>
      `:ce`
        <button
          part="base"
          class=${Tt(r)}
          ?disabled=${this.disabled||this.loading}
          type=${dn(this.type)}
          title=${dn(this.title)}
          name=${dn(this.name)}
          value=${dn(this.value)}
          aria-disabled=${this.disabled?"true":"false"}
          tabindex=${this.disabled?"-1":"0"}
        >
          ${i}
        </button>
      `}handleLabelSlotChange(){const t=this.labelSlot?.assignedNodes({flatten:!0})??[],r=t.filter(c=>c.nodeType===Node.ELEMENT_NODE),i=t.filter(c=>c.nodeType===Node.TEXT_NODE&&c.textContent?.trim()!==""),a=c=>["wa-icon","mov-icon","svg"].includes(c.localName),s=r.some(a);this.isIconButton=i.length===0&&s}};G([Wr(".button")],lt.prototype,"button",void 0),G([Wr("slot:not([name])")],lt.prototype,"labelSlot",void 0),G([cn()],lt.prototype,"isIconButton",void 0),G([cn()],lt.prototype,"hasLabel",void 0),G([cn()],lt.prototype,"hasStart",void 0),G([cn()],lt.prototype,"hasEnd",void 0),G([re()],lt.prototype,"title",void 0),G([re({reflect:!0})],lt.prototype,"appearance",void 0),G([re({reflect:!0})],lt.prototype,"variant",void 0),G([re({reflect:!0})],lt.prototype,"size",void 0),G([re({attribute:"with-caret",type:Boolean,reflect:!0})],lt.prototype,"withCaret",void 0),G([re({type:Boolean,reflect:!0})],lt.prototype,"disabled",void 0),G([re({type:Boolean,reflect:!0})],lt.prototype,"loading",void 0),G([re({type:Boolean,reflect:!0})],lt.prototype,"pill",void 0),G([re()],lt.prototype,"type",void 0),G([re({reflect:!0})],lt.prototype,"name",void 0),G([re({reflect:!0})],lt.prototype,"value",void 0),G([re({reflect:!0})],lt.prototype,"href",void 0),G([re()],lt.prototype,"target",void 0),G([re({reflect:!0})],lt.prototype,"rel",void 0),G([re()],lt.prototype,"download",void 0),G([re({reflect:!0})],lt.prototype,"form",void 0),lt=G([ut("mov-button")],lt);var En=class extends Qe{constructor(...t){super(...t),this.mode="menu",this.active=!1,this.label="",this.icon="",this.activeIcon="",this.appearance="accent",this.size="medium",this.disabled=!1,this.loading=!1}static{this.styles=Ot`
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
  `}connectedCallback(){super.connectedCallback(),this.label||(this.label=this._getDefaultLabel())}render(){const t=this.active?this.activeLabel??this.label:this.label,r={"two-icon-mode":["menu","custom","theme"].includes(this.mode),"single-icon-mode":["chevron","expand","play-pause"].includes(this.mode)};return ce`
      <mov-button
        @click=${this._onClick}
        .appearance=${dn(this.appearance)}
        .size=${dn(this.size)}
        ?disabled=${dn(this.disabled)}
        ?loading=${dn(this.loading)}
        .title=${dn(this.title)}
        class=${Tt(r)}
        title=${t}
        aria-label=${t}
        aria-pressed=${this.active?"true":"false"}
        icon-only
      >
        ${this._renderIcons()}
      </mov-button>
    `}_getDefaultLabel(){switch(this.mode){case"menu":return"Toggle menu";case"chevron":return"Toggle expand";case"theme":return"Toggle theme";case"play-pause":return"Toggle play";case"expand":return"Toggle expand";case"custom":return"Toggle";default:return"Toggle"}}_getIcons(){switch(this.mode){case"menu":return{inactive:"menu-2",active:"x"};case"chevron":return{inactive:"chevron-right",active:"chevron-right"};case"theme":return{inactive:"moon",active:"sun"};case"play-pause":return{inactive:"player-play",active:"player-pause"};case"expand":return{inactive:"arrow-autofit-down",active:"arrow-autofit-down"};case"custom":return{inactive:this.icon,active:this.activeIcon};default:return{inactive:"",active:""}}}_renderIcons(){const t=this._getIcons();return t.inactive?this.mode==="chevron"?ce`<mov-icon
        class="chevron-icon"
        name=${t.inactive}
      ></mov-icon>`:this.mode==="expand"?ce`<mov-icon
        class="expand-icon"
        name=${t.inactive}
      ></mov-icon>`:this.mode==="play-pause"?ce`<mov-icon
        class="play-pause-icon"
        name=${this.active?t.active:t.inactive}
      ></mov-icon>`:ce`
      <mov-icon
        class="inactive-icon"
        name=${t.inactive}
      ></mov-icon>
      <mov-icon
        class="active-icon"
        name=${t.active}
      ></mov-icon>
    `:De}_onClick(){if(this.disabled||this.loading)return;const t=this.active;this.active=!this.active,this.dispatchEvent(new CustomEvent("toggle",{detail:{value:this.active,oldValue:t,mode:this.mode},bubbles:!0,composed:!0}))}toggle(){this._onClick()}setActive(t){this.active=t}};G([re({type:String})],En.prototype,"mode",void 0),G([re({type:Boolean,reflect:!0})],En.prototype,"active",void 0),G([re({type:String})],En.prototype,"label",void 0),G([re({type:String})],En.prototype,"activeLabel",void 0),G([re({type:String})],En.prototype,"icon",void 0),G([re({type:String})],En.prototype,"activeIcon",void 0),G([re({type:String,reflect:!0})],En.prototype,"appearance",void 0),G([re({type:String,reflect:!0})],En.prototype,"size",void 0),G([re({type:Boolean})],En.prototype,"disabled",void 0),G([re({type:Boolean,reflect:!0})],En.prototype,"loading",void 0),En=G([ut("toggle-button")],En);var z0="important",G3=" !"+z0,Gn=qo(class extends Zi{constructor(e){if(super(e),e.type!==Vi.ATTRIBUTE||e.name!=="style"||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,r)=>{const i=e[r];return i==null?t:t+`${r=r.includes("-")?r:r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(e,[t]){const{style:r}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const i of this.ft)t[i]??(this.ft.delete(i),i.includes("-")?r.removeProperty(i):r[i]=null);for(const i in t){const a=t[i];if(a!=null){this.ft.add(i);const s=typeof a=="string"&&a.endsWith(G3);i.includes("-")||s?r.setProperty(i,s?a.slice(0,-11):a,s?z0:""):r[i]=a}}return Yn}}),W3=Me.default.fromPairs(Me.default.entries(kl).map(([e,t])=>[e,$0(t)])),{IconAdjustmentsHorizontal:RA,IconApiBook:PA,IconArrowsHorizontal:$A,IconArrowsLeftRight:DA,IconArrowAutofitDown:zA,IconArrowAutofitHeight:U3,IconArrowAutofitLeft:BA,IconArrowAutofitRight:NA,IconArrowAutofitWidth:V3,IconArrowBigLeft:HA,IconArrowBigRight:FA,IconArrowsMove:GA,IconArrowsMoveVertical:WA,IconArrowsVertical:UA,IconBook:VA,IconBookOff:ZA,IconBookArrowLeft:jA,IconBookArrowRight:qA,IconBooksReturn:KA,IconBookUpload:YA,IconBookmark:Z3,IconBookmarkOff:j3,IconBookmarks:XA,IconBoxAlignTop:JA,IconCategory:q3,IconCheck:ya,IconChevronLeft:QA,IconChevronRight:eS,IconAlertCircle:tS,IconCircleCheck:nS,IconCircleX:rS,IconHelp:oS,IconInfoCircle:iS,IconComic1:aS,IconComic1Flat:sS,IconComic2:lS,IconComic2Flat:cS,IconComic3:dS,IconComic3Flat:uS,IconDeviceFloppy:hS,IconDotsVertical:fS,IconEReader1:pS,IconEReader1Flat:gS,IconEReader2:mS,IconEReader2Flat:vS,IconExternalLink:bS,IconEye:K3,IconEyeOff:Y3,IconFileDownload:wS,IconFilePercent:_S,IconHandClick:yS,IconKeyboard:kS,IconLayoutDashboard:ES,IconLayoutBottombar:AS,IconLayoutBottombarInactive:SS,IconLayoutSidebar:MS,IconLayoutSidebarInactive:xS,IconLayoutSidebarRight:IS,IconLayoutSidebarRightInactive:CS,IconListNumbers:OS,IconLoader2:TS,IconLocationCog:LS,IconMenu2:RS,IconMenuDeep:PS,IconMessage:$S,IconMoon:DS,IconPage:zS,IconPageFlat:BS,IconPalette:NS,IconPencil:HS,IconPencilCog:FS,IconPhoto:GS,IconPhotoOff:WS,IconPin:US,IconPlayerPause:VS,IconPlayerPlay:ZS,IconRefresh:X3,IconSettings:jS,IconSettingsOff:qS,IconSpacingHorizontal:J3,IconSpacingVertical:KS,IconSun:YS,IconTrash:XS,IconWorldCog:JS,IconX:Sl,IconZoom:QS,IconZoomCancel:Q3,IconZoomIn:e6,IconZoomInArea:eM,IconZoomOut:t6,IconZoomOutArea:tM,IconZoomPan:nM}=W3,gr=class extends Qe{constructor(...t){super(...t),this.color="#000000",this.size=26,this.radius="50%",this.contrastColor="#FFFFFF",this.checked=!1}static{this.styles=Ot`
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
      font-weight: bold;
      font-size: 16px;
      line-height: 1;
    }

    .check-icon svg {
      width: 60%;
      height: 60%;
    }

    :host([checked]) .check-icon {
      opacity: 1;
    }
  `}willUpdate(t){t.has("color")&&(this.contrastColor=_o(this.color)),t.has("selected")&&(this.checked=this.color.toLowerCase()===this.selected?.toLowerCase())}handleClick(){this.dispatchEvent(new CustomEvent("input",{detail:{value:this.color},bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("change",{detail:{value:this.color},bubbles:!0,composed:!0}))}render(){const t={width:`${this.size}px`,height:`${this.size}px`},r={"--radius":typeof this.radius=="number"?`${this.radius}px`:this.radius,"--color":this.color,"--contrast-color":this.contrastColor};return ce`
      <div style=${Gn(t)}>
        <div
          class="swatch"
          style=${Gn(r)}
          @click=${this.handleClick}
        >
          <slot></slot>
          <span class="check-icon"> ${ya} </span>
        </div>
      </div>
    `}};G([re({type:String})],gr.prototype,"color",void 0),G([re({type:String})],gr.prototype,"selected",void 0),G([re({type:Number})],gr.prototype,"size",void 0),G([re({type:String})],gr.prototype,"radius",void 0),G([re({state:!0})],gr.prototype,"contrastColor",void 0),G([re({type:Boolean,reflect:!0})],gr.prototype,"checked",void 0),gr=G([ut("color-swatch")],gr);function n6(e){const[t,r,i]=e.to("oklch").coords.map(d=>d??0),a=[.95,.9,.8,.7,.6,.5,.4,.3,.2,.1,.05],s=a.map(d=>new st("oklch",[d,r,i]).toString({format:"hex"}));let c=-1,u=1/0;for(let d=0;d<a.length;d++){const h=Math.abs(a[d]-t);h<u&&(u=h,c=d)}return c!==-1&&(s[c]=e.toString({format:"hex"})),s.map(d=>d.toUpperCase())}function r6(e){const t=e.to("hsl"),r=[.97,.9,.8,.7,.6,.5,.4,.3,.2,.1,.05],i=[];for(const a of r){const s=t.clone();s.coords[2]=a*100;const c=s.coords[1]??0;a>.8?s.coords[1]=c*.4:a>.6?s.coords[1]=c*.8:a<.3&&(s.coords[1]=Math.min(100,c*1.1)),i.push(s.toString({format:"hex"}).toUpperCase())}return i}function o6(e){const t=[],r=[95,90,80,70,60,50,40,30,20,10,5],i=e.to("hsl");for(const a of r){const s=i.clone();s.coords[2]=a,t.push(s.toString({format:"hex"}).toUpperCase())}return t}function i6(e){const t=new Array(11).fill(""),r=e.to("hsl"),i={lightest:{lightness:95,rotate:-10,saturate:-30},darkest:{lightness:10,rotate:10,saturate:10}},a=5,s=5,c=(i.lightest.lightness-50)/a,u=(50-i.darkest.lightness)/s,d=i.lightest.rotate/a,h=i.darkest.rotate/s,f=i.lightest.saturate/a,b=i.darkest.saturate/s;for(let v=1;v<=a;v++){const m=a-v,g=r.clone();g.coords[2]=(g.coords[2]??0)+c*(v-.5),g.coords[0]=(g.coords[0]??0)+d*v,g.coords[1]=(g.coords[1]??0)+f*v,t[m]=g.toString({format:"hex"})}t[5]=r.clone().toString({format:"hex"});for(let v=1;v<=s;v++){const m=a+v,g=r.clone();g.coords[2]=(g.coords[2]??0)-u*(v-.5),g.coords[0]=(g.coords[0]??0)+h*v,g.coords[1]=(g.coords[1]??0)+b*v,t[m]=g.toString({format:"hex"})}return t}function a6(e){const[t,r,i]=e.to("hsl").coords.map(s=>s??0),a=new Array(11);a[5]=e.toString({format:"hex"});for(let s=0;s<5;s++){const c=(5-s)/6,u=i+(100-i)*c;a[s]=new st("hsl",[t,r-r*c,u]).toString({format:"hex"})}for(let s=0;s<5;s++){const c=(s+1)/6,u=i-i*c,d=r+(100-r)*c;a[s+6]=new st("hsl",[t,d,u]).toString({format:"hex"})}return a}function B0(e,t="steps"){let r;try{r=st.get(e)}catch{r=st.get(ml.navy)}switch(t){case"saturation":return r6(r);case"lightness":return o6(r);case"mantine":return a6(r);case"chakra":return i6(r);default:return n6(r)}}var mr=class extends Qe{constructor(...t){super(...t),this.baseColor="#228be6",this.mode="steps",this.orientation="horizontal",this.value="",this.gradient=[]}static{this.styles=Ot`
    :host {
      display: flex;
      gap: var(--palette-gap, 4px);
      align-items: center;
      justify-content: center;
    }

    .swatch {
      width: var(--swatch-size, 22px);
      height: var(--swatch-size, 22px);
      border-radius: var(--swatch-radius, 4px);
      border: 1px solid var(--theme-border-color, #ccc);
      transition: transform 0.15s ease;
      cursor: pointer;
      background-clip: content-box;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
    }
    .swatch-inner {
      width: 100%;
      height: 100%;
      border-radius: var(--swatch-radius, 4px);
      background-color: var(--color);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .checkmark {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      opacity: 0;
      transition: opacity 0.15s ease;
      width: 100%;
      height: 100%;
      align-items: center;
      justify-content: center;
      display: flex;
      color: var(--text-color);
      font-weight: bold;
      font-size: 16px;
      line-height: 1;
    }

    .checkmark svg {
      width: 60%;
      height: 60%;
    }
    .swatch[checked] .checkmark {
      opacity: 1;
    }
    .swatch:hover {
      transform: scale(1.1);
    }
  `}willUpdate(t){(t.has("baseColor")||t.has("mode"))&&(this.gradient=B0(this.baseColor,this.mode)??[])}handleSwatchClick(t){this.value=t,this.dispatchEvent(new CustomEvent("input",{detail:{value:this.value},bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))}render(){return ce`
      ${this.gradient.map(t=>ce`
          <div
            class="swatch"
            ?checked=${this.selected&&t.toLowerCase()===this.selected.toLowerCase()}
            title=${t}
            @click=${()=>this.handleSwatchClick(t)}
          >
            <div
              class="swatch-inner"
              style="--color: ${t}; --text-color: ${_o(t)}"
            >
              <span class="checkmark">${ya}</span>
            </div>
          </div>
        `)}
    `}};G([re({type:String})],mr.prototype,"baseColor",void 0),G([re({type:String})],mr.prototype,"mode",void 0),G([re({type:String,reflect:!0})],mr.prototype,"orientation",void 0),G([re({type:String})],mr.prototype,"selected",void 0),G([re({type:String,reflect:!0})],mr.prototype,"value",void 0),G([cn()],mr.prototype,"gradient",void 0),mr=G([ut("color-palette")],mr);var ka=class extends Qe{constructor(...t){super(...t),this.value=""}static{this.styles=Ot`
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
  `}handleColorClick(t){this.value=t.currentTarget.title,this.dispatchEvent(new CustomEvent("input",{detail:{value:this.value},bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))}render(){const t=Me.default.keys(Et).filter(i=>!["dark","gray","zinc","neutral","stone"].includes(i)),r=[200,300,400,500,600,700,800,900,950];return t.map(i=>ce` <div class="SwatchGroup">
        <span class="ColorName">${i}</span>
        <div class="Swatches">${r.map(a=>{const s=Et[i][a],c=_o(s);return ce`
          <span
            title="${s}"
            class="${Tt({ThemeRadio:!0,selected:this.selected?.toLowerCase()===s.toLowerCase()})}"
            style="background-color: ${s}; color: ${c}"
            @click=${this.handleColorClick}
          >
            ${ya}
          </span>
        `})}</div>
      </div>`)}};G([re({type:String,reflect:!0})],ka.prototype,"value",void 0),G([re({type:String})],ka.prototype,"selected",void 0),ka=G([ut("color-panel")],ka);var Dt=class extends Qe{constructor(...t){super(...t),this.value="#228be6",this.defaultValue="#228be6",this.label="",this.hint="",this.name="",this.disabled=!1,this.size="medium",this.swatches=null,this.mode="popup",this.opened=!1,this.popupDirection="left",this.sourceSpace="srgb",this.hsv={h:0,s:0,v:0},this.saturationThumbPosition={x:0,y:0},this.hueThumbPosition=0,this.isDraggingSaturation=!1,this.isDraggingHue=!1}static{this.styles=Ot`
    :host {
      display: inline-block;
      position: relative;
    }

    .picker-container {
      width: 250px;
      box-sizing: border-box;
    }

    .picker-container.popup {
      position: absolute;
      top: calc(100% + 4px);
      left: 0;
      z-index: 10;
      border: 1px solid var(--theme-border-color);
      border-radius: 8px;
      background: var(--theme-background-color);
      padding: 12px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }

    .picker-container.popup.right {
      left: auto;
      right: 0;
    }

    .saturation-panel {
      position: relative;
      width: 100%;
      height: 180px;
      border-radius: 8px;
      cursor: crosshair;
      -webkit-tap-highlight-color: transparent;
    }

    .saturation-overlay-1,
    .saturation-overlay-2 {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: inherit;
    }

    .saturation-overlay-1 {
      background: linear-gradient(to right, #fff, transparent);
    }

    .saturation-overlay-2 {
      background: linear-gradient(to top, #000, transparent);
    }

    .saturation-thumb {
      position: absolute;
      width: 16px;
      height: 16px;
      border: 2px solid #fff;
      border-radius: 50%;
      box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
      transform: translate(-8px, -8px);
      pointer-events: none;
    }

    .sliders {
      display: flex;
      flex-direction: column;
      gap: 12px;
      margin-top: 12px;
    }

    .hue-slider {
      position: relative;
      width: 100%;
      height: 10px;
      border-radius: 5px;
      background: linear-gradient(to right, #f00, #ff0, #0f0, #0ff, #00f, #f0f, #f00);
      cursor: pointer;
    }

    .hue-thumb {
      position: absolute;
      top: 50%;
      width: 16px;
      height: 16px;
      border: 2px solid #fff;
      border-radius: 50%;
      box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
      transform: translate(-8px, -50%);
      pointer-events: none;
    }

    .swatches {
      display: grid;
      grid-template-columns: repeat(10, 1fr);
      gap: 8px;
      margin-top: 12px;
    }

    .swatch {
      width: 100%;
      aspect-ratio: 1;
      border-radius: 4px;
      border: 1px solid #dee2e6;
      cursor: pointer;
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      transition: transform 0.1s;
    }

    .swatch:hover {
      transform: scale(1.1);
    }

    .popup-trigger {
      width: 96px;
      height: 32px;
      border-radius: 4px;
      border: 1px solid var(--theme-background-color);
      padding: 4px;
      box-sizing: border-box;
      cursor: pointer;
      background-color: var(--theme-hightlight-color);
    }

    .preview {
      width: 100%;
      height: 100%;
      border-radius: 2px;
    }
  `}connectedCallback(){super.connectedCallback(),this.updateStateFromValue(this.value),window.addEventListener("mousemove",this.handleDrag.bind(this)),window.addEventListener("mouseup",this.handleDragEnd.bind(this)),window.addEventListener("touchmove",this.handleDrag.bind(this),{passive:!1}),window.addEventListener("touchend",this.handleDragEnd.bind(this))}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("mousemove",this.handleDrag.bind(this)),window.removeEventListener("mouseup",this.handleDragEnd.bind(this)),window.removeEventListener("touchmove",this.handleDrag.bind(this)),window.removeEventListener("touchend",this.handleDragEnd.bind(this)),window.removeEventListener("click",this.handleClickOutside.bind(this))}updated(t){t.has("mode")&&(this.mode==="popup"?window.addEventListener("click",this.handleClickOutside.bind(this)):window.removeEventListener("click",this.handleClickOutside.bind(this)))}willUpdate(t){t.has("value")&&this.updateStateFromValue(this.value),t.has("mode")&&this.mode==="inline"&&(this.opened=!1)}handleClickOutside(t){this.opened&&!t.composedPath().includes(this)&&this.hide()}show(){this.disabled||this.opened||(this.opened=!0,this.dispatchEvent(new CustomEvent("wa-show",{bubbles:!0,composed:!0})),setTimeout(()=>{this.dispatchEvent(new CustomEvent("wa-after-show",{bubbles:!0,composed:!0}))},150))}hide(){this.opened&&(this.opened=!1,this.dispatchEvent(new CustomEvent("wa-hide",{bubbles:!0,composed:!0})),setTimeout(()=>{this.dispatchEvent(new CustomEvent("wa-after-hide",{bubbles:!0,composed:!0}))},150))}togglePopup(){if(this.mode==="popup")if(this.opened)this.hide();else{const t=this.getBoundingClientRect(),r=250;let i;const a=this.closest("mov-drawer");if(a?.shadowRoot){const s=a.shadowRoot.querySelector("dialog");s?i=s.getBoundingClientRect():i={left:0,right:window.innerWidth}}else i={left:0,right:window.innerWidth};t.left+r>i.right?t.right-r>i.left?this.popupDirection="right":this.popupDirection="left":this.popupDirection="left",this.show()}}isSameColor(t,r){return!t||!r?!1:st.deltaE(t,r,{method:"2000"})<1}renderCheckIcon(t){return ce`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
        style=${Gn({stroke:_o(t)})}
      >
        <path d="M5 12l5 5l10 -10" />
      </svg>
    `}renderPickerBody(){const t={backgroundColor:`hsl(${this.hsv.h}, 100%, 50%)`},r={h:this.hsv.h,s:this.hsv.s*100,v:this.hsv.v*100},i={top:`${this.saturationThumbPosition.y}%`,left:`${this.saturationThumbPosition.x}%`,backgroundColor:new st("hsv",[r.h,r.s,r.v]).toString({format:"hex"})},a={left:`${this.hueThumbPosition}%`};return ce`
      <div
        class="saturation-panel"
        style=${Gn(t)}
        @mousedown=${this.handleSaturationDragStart.bind(this)}
        @touchstart=${this.handleSaturationDragStart.bind(this)}
      >
        <div class="saturation-overlay-1"></div>
        <div class="saturation-overlay-2"></div>
        <div
          class="saturation-thumb"
          style=${Gn(i)}
        ></div>
      </div>

      <div class="sliders">
        <div
          class="hue-slider"
          @mousedown=${this.handleHueDragStart.bind(this)}
          @touchstart=${this.handleHueDragStart.bind(this)}
        >
          <div
            class="hue-thumb"
            style=${Gn(a)}
          ></div>
        </div>
      </div>

      <div class="swatches">
        ${(this.swatches||Me.default.entries(Et).filter(([s])=>!["dark","gray","zinc","neutral","stone"].includes(s)).map(([,s])=>s[600])).map(s=>ce`
            <button
              class="swatch"
              title=${s}
              style=${Gn({backgroundColor:s})}
              @click=${()=>this.selectSwatch(s)}
            >
              ${this.isSameColor(this.value,s)?this.renderCheckIcon(s):""}
            </button>
          `)}
      </div>
    `}render(){const t={"picker-container":!0,popup:this.mode==="popup",right:this.popupDirection==="right"},r=this.renderPickerBody();return this.mode==="popup"?ce`
        <div
          class="popup-trigger"
          @click=${this.togglePopup}
        >
          <div
            class="preview"
            style=${Gn({backgroundColor:this.value})}
          ></div>
        </div>
        ${this.opened?ce`<div class=${Tt(t)}>${r}</div>`:""}
      `:ce`<div class=${Tt(t)}>${r}</div>`}parseColor(t){try{return st.get(t)}catch(r){return console.error(`[mov-color-picker] Invalid color value: "${t}"`,r),null}}colorToHsv(t){let[r,i,a]=t.to("srgb").to("hsv").coords.map(s=>s??0);return Number.isNaN(r)&&(r=this.hsv.h||0,i=0),i=Math.max(0,Math.min(100,i))/100,a=Math.max(0,Math.min(100,a))/100,{h:r,s:i,v:a}}updateStateFromValue(t){const r=this.parseColor(t);if(!r)return;this.sourceSpace=r.space.id;const i=this.colorToHsv(r);(i.h!==this.hsv.h||i.s!==this.hsv.s||i.v!==this.hsv.v)&&(this.hsv=i,this.updateThumbPositions())}dispatchInput(){this.dispatchEvent(new CustomEvent("input",{detail:{value:this.value},bubbles:!0,composed:!0}))}dispatchChange(){this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))}updateValueFromHsv(){const t={h:this.hsv.h,s:this.hsv.s*100,v:this.hsv.v*100},r=new st("hsv",[t.h,t.s,t.v]);let i;try{!this.sourceSpace||["srgb","hsl","hsv"].includes(this.sourceSpace)?i=r.to("srgb").toString({format:"hex"}):i=r.to(this.sourceSpace).toString({precision:5})}catch(a){console.error(`[mov-color-picker] Could not convert color to space ${this.sourceSpace}`,a),i=r.to("srgb").toString({format:"hex"})}this.value!==i&&(this.value=i,this.dispatchInput())}updateThumbPositions(){this.saturationThumbPosition={x:this.hsv.s*100,y:(1-this.hsv.v)*100},this.hueThumbPosition=this.hsv.h/360*100}handleSaturationDragStart(t){t.preventDefault(),this.isDraggingSaturation=!0,this.saturationPanel=this.shadowRoot?.querySelector(".saturation-panel"),this.updateSaturation(t)}handleHueDragStart(t){t.preventDefault(),this.isDraggingHue=!0,this.hueSlider=this.shadowRoot?.querySelector(".hue-slider"),this.updateHue(t)}handleDrag(t){this.isDraggingSaturation&&this.updateSaturation(t),this.isDraggingHue&&this.updateHue(t)}handleDragEnd(){(this.isDraggingSaturation||this.isDraggingHue)&&this.dispatchChange(),this.isDraggingSaturation=!1,this.isDraggingHue=!1}getEventPosition(t){return"touches"in t?{clientX:t.touches[0].clientX,clientY:t.touches[0].clientY}:{clientX:t.clientX,clientY:t.clientY}}updateSaturation(t){if(!this.saturationPanel)return;const{clientX:r,clientY:i}=this.getEventPosition(t),a=this.saturationPanel.getBoundingClientRect(),s=Math.max(0,Math.min(r-a.left,a.width)),c=Math.max(0,Math.min(i-a.top,a.height));this.hsv.s=s/a.width,this.hsv.v=1-c/a.height,this.updateValueFromHsv(),this.updateThumbPositions()}updateHue(t){if(!this.hueSlider)return;const{clientX:r}=this.getEventPosition(t),i=this.hueSlider.getBoundingClientRect(),a=Math.max(0,Math.min(r-i.left,i.width));this.hsv.h=a/i.width*360,this.updateValueFromHsv(),this.updateThumbPositions()}selectSwatch(t){this.value=t,this.dispatchInput(),this.dispatchChange()}};G([re({type:String})],Dt.prototype,"value",void 0),G([re({type:String,attribute:"default-value"})],Dt.prototype,"defaultValue",void 0),G([re({type:String})],Dt.prototype,"label",void 0),G([re({type:String})],Dt.prototype,"hint",void 0),G([re({type:String})],Dt.prototype,"name",void 0),G([re({type:Boolean,reflect:!0})],Dt.prototype,"disabled",void 0),G([re({type:String,reflect:!0})],Dt.prototype,"size",void 0),G([re({type:Array})],Dt.prototype,"swatches",void 0),G([re({type:String})],Dt.prototype,"mode",void 0),G([cn()],Dt.prototype,"opened",void 0),G([cn()],Dt.prototype,"popupDirection",void 0),G([cn()],Dt.prototype,"sourceSpace",void 0),G([cn()],Dt.prototype,"hsv",void 0),G([cn()],Dt.prototype,"saturationThumbPosition",void 0),G([cn()],Dt.prototype,"hueThumbPosition",void 0),Dt=G([ut("mov-color-picker")],Dt);var N0=(e,t,r)=>{for(const i of t)if(i[0]===e)return(0,i[1])();return r?.()},vr=class extends Qe{constructor(...t){super(...t),this.value="",this.labelPosition="side",this.size="medium",this._options=[],this.resizeObserver=new ResizeObserver(()=>this.updateThumbPosition())}static{this.styles=Ot`
    :host {
      width: 100%;
      display: block;
    }
    .segmented-control {
      position: relative;
      display: flex;
      gap: 0.25rem;
      border-radius: 0.5rem;
      background-color: var(--theme-border-color);
      padding: 0.25rem;
      flex-wrap: wrap;
    }
    .thumb {
      position: absolute;
      top: 0;
      left: 0;
      border-radius: 0.5rem;
      background-color: var(--mov-color-fill-loud);
      transition:
        transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),
        width 0.3s cubic-bezier(0.4, 0, 0.2, 1),
        height 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      z-index: 1;
    }
    .option {
      flex: 1;
      text-align: center;
      z-index: 2; /* Ensure button is above thumb */
      position: relative; /* Needed to correctly position the button */
    }

    .button {
      /* The button now acts as the interactive label */
      width: 100%;
      display: flex;
      cursor: pointer;
      align-items: center;
      justify-content: center;
      border-radius: 0.5rem;
      border: none;
      /* Default colors when not selected */
      color: var(--theme-text-color);
      background-color: transparent;
      transition: color 0.15s ease-in-out;
      flex-direction: row;
      gap: 0.25rem;
      padding: 0.5rem 0.75rem; /* Default padding (medium) */
      font-size: 1rem; /* Default font-size (medium) */
      box-sizing: border-box; /* Include padding/border in element's total width/height */
    }

    /* Selected State Styles - Driven by the 'selected' class */
    .button.selected {
      color: var(--mov-color-on-loud);
      font-weight: 600;
    }

    /* Size Variations */
    .button.small {
      padding: 0.25rem 0.5rem;
      font-size: 0.875rem;
    }
    .button.large {
      padding: 0.75rem 1rem;
      font-size: 1.125rem;
    }

    /* Label Position Variations */
    .button.bottom {
      flex-direction: column;
    }
    .button.bottom.small {
      padding: 0.25rem;
    }
    .button.bottom.medium {
      padding: 0.5rem;
    }
    .button.bottom.large {
      padding: 0.75rem;
    }
  `}connectedCallback(){super.connectedCallback(),this.resizeObserver.observe(this)}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this)}handleClick(t,r){this.value=r,this.dispatchEvent(new CustomEvent("change",{detail:this.value,bubbles:!0,composed:!0}))}handleSlotChange(){this._options=this._slotEl.assignedNodes({flatten:!0}).filter(t=>t.nodeName==="SEGMENTED-CONTROL-OPTION").map(t=>({value:t.getAttribute("value")??"",label:t.getAttribute("label")??"",icon:t.getAttribute("icon")??void 0}))}firstUpdated(){this.handleSlotChange(),this.updateComplete.then(()=>this.updateThumbPosition())}updated(t){super.updated(t),(t.has("value")||t.has("_options")||t.has("labelPosition")||t.has("size"))&&Promise.resolve().then(()=>this.updateThumbPosition())}updateThumbPosition(){if(!this.thumb)return;const t=this.shadowRoot?.querySelector(".button.selected");if(t){const{offsetWidth:r,offsetHeight:i}=t,a=t.getBoundingClientRect(),s=this.shadowRoot?.querySelector(".segmented-control")?.getBoundingClientRect(),c=a.left-(s?.left??0),u=a.top-(s?.top??0);this.thumb.style.transform=`translate(${c}px, ${u}px)`,this.thumb.style.width=`${r}px`,this.thumb.style.height=`${i}px`}else this.thumb.style.width="0px",this.thumb.style.height="0px"}render(){return ce`
      <div class="segmented-control">
        <div class="thumb"></div>
        ${this._options.map(t=>ce`
            <div
              class="option"
              title="${this.labelPosition==="tooltip"?t.label:De}"
            >
              <button
                class="${Tt({button:!0,selected:this.value===t.value,bottom:this.labelPosition==="bottom",small:this.size==="small",medium:this.size==="medium",large:this.size==="large"})}"
                @click=${r=>this.handleClick(r,t.value)}
                role="radio"
                aria-checked="${this.value===t.value}"
              >
                ${t.icon?ce`<mov-icon
                      name="${t.icon}"
                      .size=${N0(this.size,[["small",()=>"16px"],["medium",()=>"24px"],["large",()=>"36px"]],()=>this.size)}
                    ></mov-icon>`:De}
                ${this.labelPosition!=="tooltip"?ce`<span>${t.label}</span>`:De}
              </button>
            </div>
          `)}
      </div>
      <div style="display: none;">
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}};G([re({type:String,reflect:!0})],vr.prototype,"value",void 0),G([re({type:String})],vr.prototype,"labelPosition",void 0),G([re({type:String})],vr.prototype,"size",void 0),G([cn()],vr.prototype,"_options",void 0),G([Wr(".thumb")],vr.prototype,"thumb",void 0),G([Wr("slot")],vr.prototype,"_slotEl",void 0),vr=G([ut("segmented-control")],vr);var ui=class extends Qe{constructor(...t){super(...t),this.value="",this.label=""}createRenderRoot(){return this}};G([re({type:String,reflect:!0})],ui.prototype,"value",void 0),G([re({type:String,reflect:!0})],ui.prototype,"label",void 0),G([re({type:String,reflect:!0})],ui.prototype,"icon",void 0),ui=G([ut("segmented-control-option")],ui);var un=class extends Qe{constructor(...t){super(...t),this.name="",this.value="on",this.checked=!1,this.defaultChecked=!1,this.disabled=!1,this.required=!1,this.size="medium",this.hint="",this.design="graphical",this.textOn="ON",this.textOff="OFF"}static{this.styles=Ot`
    :host {
      --switch-width: 3rem;
      --switch-height: 1.5rem;
      --knob-size: 1.25rem;
      display: inline-block;
    }

    :host([size='small']) {
      --switch-width: 2.5rem;
      --switch-height: 1.25rem;
      --knob-size: 1rem;
    }

    :host([size='large']) {
      --switch-width: 4rem;
      --switch-height: 2rem;
      --knob-size: 1.75rem;
    }

    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }

    input {
      display: none;
    }

    .switch {
      display: inline-block;
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
      top: 1px;
      left: 1px;
      width: var(--knob-size);
      height: var(--knob-size);
      background-color: #fff;
      border-radius: 50%;
      box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
      transition: left 0.3s;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1rem;
      font-weight: bold;
      font-family: Arial;
      color: #333;
    }

    input:checked + .switch .knob {
      left: calc(100% - var(--knob-size) - 1px);
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

    .hint {
      font-size: 0.8rem;
      opacity: 0.7;
      margin-top: 0.25rem;
    }
  `}handleChange(t){this.disabled||(this.checked=t.target.checked,this.dispatchEvent(new CustomEvent("change",{detail:{checked:this.checked},bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("input",{detail:{checked:this.checked},bubbles:!0,composed:!0})))}render(){const t=this.design.toLowerCase();let r;return t==="graphical"?r=ce`${this.checked?ya:Sl}`:r=ce`<span class="text">${this.checked?this.textOn:this.textOff}</span>`,ce`
      <div class="base">
        <label class="label">
          <slot></slot>
          <input
            type="checkbox"
            .name="${this.name}"
            .value="${this.value}"
            .checked=${this.checked}
            ?disabled=${this.disabled}
            ?required=${this.required}
            @change=${this.handleChange}
          />
          <div
            class="${Tt({switch:!0,[t]:!0})}"
          >
            <div class="knob">${r}</div>
          </div>
        </label>
        <div class="hint">
          <slot name="hint">${this.hint}</slot>
        </div>
      </div>
    `}};G([re({type:String})],un.prototype,"name",void 0),G([re({type:String})],un.prototype,"value",void 0),G([re({type:Boolean,reflect:!0})],un.prototype,"checked",void 0),G([re({type:Boolean,reflect:!0,attribute:"default-checked"})],un.prototype,"defaultChecked",void 0),G([re({type:Boolean,reflect:!0})],un.prototype,"disabled",void 0),G([re({type:Boolean,reflect:!0})],un.prototype,"required",void 0),G([re({type:String,reflect:!0})],un.prototype,"size",void 0),G([re({type:String})],un.prototype,"hint",void 0),G([re({type:String,reflect:!0})],un.prototype,"design",void 0),G([re({type:String})],un.prototype,"textOn",void 0),G([re({type:String})],un.prototype,"textOff",void 0),un=G([ut("mov-switch")],un);var s6=wn((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.BLANK_URL=e.relativeFirstCharacters=e.whitespaceEscapeCharsRegex=e.urlSchemeRegex=e.ctrlCharactersRegex=e.htmlCtrlEntityRegex=e.htmlEntitiesRegex=e.invalidProtocolRegex=void 0,e.invalidProtocolRegex=/^([^\w]*)(javascript|data|vbscript)/im,e.htmlEntitiesRegex=/&#(\w+)(^\w|;)?/g,e.htmlCtrlEntityRegex=/&(newline|tab);/gi,e.ctrlCharactersRegex=/[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim,e.urlSchemeRegex=/^.+(:|&colon;)/gim,e.whitespaceEscapeCharsRegex=/(\\|%5[cC])((%(6[eE]|72|74))|[nrt])/g,e.relativeFirstCharacters=[".","/"],e.BLANK_URL="about:blank"})),l6=wn((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.sanitizeUrl=c;var t=s6();function r(u){return t.relativeFirstCharacters.indexOf(u[0])>-1}function i(u){return u.replace(t.ctrlCharactersRegex,"").replace(t.htmlEntitiesRegex,function(d,h){return String.fromCharCode(h)})}function a(u){return URL.canParse(u)}function s(u){try{return decodeURIComponent(u)}catch{return u}}function c(u){if(!u)return t.BLANK_URL;var d,h=s(u.trim());do h=i(h).replace(t.htmlCtrlEntityRegex,"").replace(t.ctrlCharactersRegex,"").replace(t.whitespaceEscapeCharsRegex,"").trim(),h=s(h),d=h.match(t.ctrlCharactersRegex)||h.match(t.htmlEntitiesRegex)||h.match(t.htmlCtrlEntityRegex)||h.match(t.whitespaceEscapeCharsRegex);while(d&&d.length>0);var f=h;if(!f)return t.BLANK_URL;if(r(f))return f;var b=f.trimStart(),v=b.match(t.urlSchemeRegex);if(!v)return f;var m=v[0].toLowerCase().trim();if(t.invalidProtocolRegex.test(m))return t.BLANK_URL;var g=b.replace(/\\/g,"/");if(m==="mailto:"||m.includes("://"))return g;if(m==="http:"||m==="https:"){if(!a(g))return t.BLANK_URL;var k=new URL(g);return k.protocol=k.protocol.toLowerCase(),k.hostname=k.hostname.toLowerCase(),k.toString()}return g}})),c6=wn(((e,t)=>{(function(r,i){typeof define=="function"&&define.amd?define([],i):typeof e<"u"?i():(i(),r.FileSaver={})})(e,function(){"use strict";function r(h,f){return typeof f>"u"?f={autoBom:!1}:typeof f!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),f={autoBom:!f}),f.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(h.type)?new Blob(["\uFEFF",h],{type:h.type}):h}function i(h,f,b){var v=new XMLHttpRequest;v.open("GET",h),v.responseType="blob",v.onload=function(){d(v.response,f,b)},v.onerror=function(){console.error("could not download file")},v.send()}function a(h){var f=new XMLHttpRequest;f.open("HEAD",h,!1);try{f.send()}catch{}return 200<=f.status&&299>=f.status}function s(h){try{h.dispatchEvent(new MouseEvent("click"))}catch{var f=document.createEvent("MouseEvents");f.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),h.dispatchEvent(f)}}var c=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof global=="object"&&global.global===global?global:void 0,u=c.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),d=c.saveAs||(typeof window!="object"||window!==c?function(){}:"download"in HTMLAnchorElement.prototype&&!u?function(h,f,b){var v=c.URL||c.webkitURL,m=document.createElement("a");f=f||h.name||"download",m.download=f,m.rel="noopener",typeof h=="string"?(m.href=h,m.origin===location.origin?s(m):a(m.href)?i(h,f,b):s(m,m.target="_blank")):(m.href=v.createObjectURL(h),setTimeout(function(){v.revokeObjectURL(m.href)},4e4),setTimeout(function(){s(m)},0))}:"msSaveOrOpenBlob"in navigator?function(h,f,b){if(f=f||h.name||"download",typeof h!="string")navigator.msSaveOrOpenBlob(r(h,b),f);else if(a(h))i(h,f,b);else{var v=document.createElement("a");v.href=h,v.target="_blank",setTimeout(function(){s(v)})}}:function(h,f,b,v){if(v=v||open("","_blank"),v&&(v.document.title=v.document.body.innerText="downloading..."),typeof h=="string")return i(h,f,b);var m=h.type==="application/octet-stream",g=/constructor/i.test(c.HTMLElement)||c.safari,k=/CriOS\/[\d]+/.test(navigator.userAgent);if((k||m&&g||u)&&typeof FileReader<"u"){var _=new FileReader;_.onloadend=function(){var T=_.result;T=k?T:T.replace(/^data:[^;]*;/,"data:attachment/file;"),v?v.location.href=T:location=T,v=null},_.readAsDataURL(h)}else{var E=c.URL||c.webkitURL,M=E.createObjectURL(h);v?v.location=M:location.href=M,v=null,setTimeout(function(){E.revokeObjectURL(M)},4e4)}});c.saveAs=d.saveAs=d,typeof t<"u"&&(t.exports=d)})})),H0=l6(),d6=c6();function u6(e){switch(e){case"image/jpeg":return"jpg";case"image/png":return"png";case"image/webp":return"webp";case"image/gif":return"gif";case"image/bmp":return"bmp";default:return"png"}}async function h6(e){if(!e.src)return null;try{const t=await fetch(e.src);if(t.ok)return ke(`Got blob for page ${e.src} from fetch`),await t.blob()}catch(t){ke(`Failed to get blob for page ${e.src} from fetch`,t)}return typeof GM_xmlhttpRequest<"u"?new Promise(t=>{GM_xmlhttpRequest({method:"GET",url:e.src,responseType:"blob",onload:r=>{r.status===200?(ke(`Got blob for page ${e.src} from GM_xmlhttpRequest`),t(r.response)):(ke(`Failed to get blob for page ${e.src} from GM_xmlhttpRequest`,r.statusText),t(null))},onerror:r=>{ke(`Failed to get blob for page ${e.src} from GM_xmlhttpRequest`,r),t(null)}})}):null}async function f6(e){const t=e.ref?.value;if(!t)return null;try{const r=document.createElement("canvas"),i=r.getContext("2d");if(i)return r.width=t.naturalWidth,r.height=t.naturalHeight,i.drawImage(t,0,0),await new Promise(a=>{r.toBlob(s=>{s&&ke(`Got blob for page ${e.src} from canvas`),a(s)},"image/png",1)})}catch(r){ke(`Failed to get blob for page ${e.src} from canvas`,r)}return null}async function p6(e){if(e.blob)return ke(`Got blob for page ${e.src} from cache`),e.blob;const t=await h6(e)||await f6(e);return t||ke(`Failed to get blob for page ${e.src}`),t}async function g6(){Re("download","working");const e=new Dd.default,t=fe("images")??{},r=fe("manga"),i=r?.pages??0,a=Math.floor(Math.log10(i||1))+1,s=Me.default.sortBy(Me.default.entries(t),([h])=>Number(h)),c=[],u=h=>{Re("dialog",{open:!0,title:j("BUTTON_DOWNLOAD"),content:ce`
        <div style='display: flex; flex-direction: column; gap: 10px;'>
          <p>${j("DOWNLOAD_PROGRESS").replace("##num##",h.toString()).replace("##total##",i.toString())}</p>
          <progress value='${h}' max='${i}' style='width: 100%; height: 20px;'></progress>
        </div>
      `,footer:ce`
        <mov-button @click=${()=>Re("download","cancelled")}>
          ${j("CANCEL")}
        </mov-button>
      `})};u(0);let d=0;for(const[h,f]of s){if(fe("download")==="cancelled"){ke("Download cancelled"),Re("dialog",null),Re("download",void 0);return}try{const b=await p6(f);if(b){const v=u6(b.type),m=`Page-${Number(h).toString().padStart(a,"0")}.${v}`;ke(`${m} Added to Zip from Blob`),e.file(m,b,{createFolders:!0,compression:"DEFLATE"})}else c.push(f.src??h)}catch(b){ke(`Error processing page ${h}`,b),c.push(f.src??h)}finally{d+=1,u(d)}}Re("dialog",{open:!0,title:j("BUTTON_DOWNLOAD"),content:ce`
      <div style='display: flex; flex-direction: column; gap: 10px;'>
        <p>${j("GENERATING_ZIP")}</p>
        <progress style='width: 100%; height: 20px;'></progress>
      </div>
    `,footer:ce``}),c.length>0&&(ke("Some images failed to download:",c),e.file("failed_pages.txt",c.join(`
`))),ke("Generating Zip"),e.generateAsync({type:"blob"}).then(h=>{ke("Download Ready"),(0,d6.saveAs)(h,`${r?.title??document.title}.zip`,{autoBom:!1}),c.length>0?Re("dialog",{open:!0,title:j("DOWNLOAD_INCOMPLETE"),icon:"warning",content:ce`<p>${j("DOWNLOAD_INCOMPLETE_MESSAGE")}</p>`,footer:ce`<mov-button @click=${()=>Re("dialog",null)}>
            ${j("CLOSE")}
          </mov-button>`}):Re("dialog",null)}).catch(h=>{ke("Error generating zip",h),Re("dialog",{open:!0,title:j("WARNING"),icon:"error",content:ce`<p>Error generating zip: ${h.message}</p>`,footer:ce`<mov-button @click=${()=>Re("dialog",null)}>
          ${j("CLOSE")}
        </mov-button>`})}).finally(()=>{Re("download",void 0)})}function F0(){fe("download")!=="working"&&(ke("Downloading Chapter"),g6().catch(e=>ke("Error downloading chapter",e)))}function m6(){Xo("hidePageControls",e=>!e)}function hi(e){const t=e.target,r=t.getAttribute("value")??t.getAttribute("href");e.button!==1&&!e.ctrlKey&&(r&&r!=="#"?window.location.href=(0,H0.sanitizeUrl)(r):t.id==="series"&&window.history.back())}function v6(e){if(e)if(K("viewMode").startsWith("Fluid")){const t=fe("chapter").value;if(t){const r=e.getBoundingClientRect(),i=t.getBoundingClientRect();t.scrollBy({left:r.left-i.left,top:r.top-i.top,behavior:"instant"})}}else{const t=e.getBoundingClientRect();window.scrollTo({top:t.top+window.scrollY,left:t.left+window.scrollX,behavior:"instant"})}}Yt.listen((e,t,r)=>{r==="scrollToPage"&&e.scrollToPage!==void 0&&(e.scrollToPage<=0?window.scrollTo(0,0):v6(fe("images")?.[e.scrollToPage]?.ref?.value),setTimeout(()=>Re("scrollToPage",void 0),10))});function b6(e){const t=e.currentTarget.value;Re("scrollToPage",parseInt(t,10))}function w6(e){Re("scrollToPage",e)}var Ml=typeof navigator<"u"?navigator.userAgent.toLowerCase().indexOf("firefox")>0:!1;function xl(e,t,r,i){e.addEventListener?e.addEventListener(t,r,i):e.attachEvent&&e.attachEvent(`on${t}`,r)}function fi(e,t,r,i){e&&(e.removeEventListener?e.removeEventListener(t,r,i):e.detachEvent&&e.detachEvent(`on${t}`,r))}function G0(e,t){const r=t.slice(0,t.length-1),i=[];for(let a=0;a<r.length;a++)i.push(e[r[a].toLowerCase()]);return i}function W0(e){typeof e!="string"&&(e=""),e=e.replace(/\s/g,"");const t=e.split(",");let r=t.lastIndexOf("");for(;r>=0;)t[r-1]+=",",t.splice(r,1),r=t.lastIndexOf("");return t}function _6(e,t){const r=e.length>=t.length?e:t,i=e.length>=t.length?t:e;let a=!0;for(let s=0;s<r.length;s++)i.indexOf(r[s])===-1&&(a=!1);return a}function U0(e){let t=e.keyCode||e.which||e.charCode;return e.code&&/^Key[A-Z]$/.test(e.code)&&(t=e.code.charCodeAt(3)),t}var pi={backspace:8,"⌫":8,tab:9,clear:12,enter:13,"↩":13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,arrowup:38,arrowdown:40,arrowleft:37,arrowright:39,del:46,delete:46,ins:45,insert:45,home:36,end:35,pageup:33,pagedown:34,capslock:20,num_0:96,num_1:97,num_2:98,num_3:99,num_4:100,num_5:101,num_6:102,num_7:103,num_8:104,num_9:105,num_multiply:106,num_add:107,num_enter:108,num_subtract:109,num_decimal:110,num_divide:111,"⇪":20,",":188,".":190,"/":191,"`":192,"-":Ml?173:189,"=":Ml?61:187,";":Ml?59:186,"'":222,"{":219,"}":221,"[":219,"]":221,"\\":220},An={"⇧":16,shift:16,"⌥":18,alt:18,option:18,"⌃":17,ctrl:17,control:17,"⌘":91,cmd:91,meta:91,command:91},gi={16:"shiftKey",18:"altKey",17:"ctrlKey",91:"metaKey",shiftKey:16,ctrlKey:17,altKey:18,metaKey:91},Mt={16:!1,18:!1,17:!1,91:!1},ht={};for(let e=1;e<20;e++)pi[`f${e}`]=111+e;var ot=[],mi=null,ko=null,V0="all",Jn=new Map,Eo=e=>pi[e.toLowerCase()]||An[e.toLowerCase()]||e.toUpperCase().charCodeAt(0),y6=e=>Object.keys(pi).find(t=>pi[t]===e),k6=e=>Object.keys(An).find(t=>An[t]===e),Z0=e=>{V0=e||"all"},vi=()=>V0||"all",E6=()=>ot.slice(0),A6=()=>ot.map(e=>y6(e)||k6(e)||String.fromCharCode(e)),S6=()=>{const e=[];return Object.keys(ht).forEach(t=>{ht[t].forEach(({key:r,scope:i,mods:a,shortcut:s})=>{e.push({scope:i,shortcut:s,mods:a,keys:r.split("+").map(c=>Eo(c))})})}),e},j0=e=>{const t=e.target||e.srcElement,{tagName:r}=t;let i=!0;const a=r==="INPUT"&&!["checkbox","radio","range","button","file","reset","submit","color"].includes(t.type);return(t.isContentEditable||(a||r==="TEXTAREA"||r==="SELECT")&&!t.readOnly)&&(i=!1),i},M6=e=>(typeof e=="string"&&(e=Eo(e)),ot.indexOf(e)!==-1),x6=(e,t)=>{let r,i;e||(e=vi());for(const a in ht)if(Object.prototype.hasOwnProperty.call(ht,a))for(r=ht[a],i=0;i<r.length;)r[i].scope===e?r.splice(i,1).forEach(({element:s})=>Il(s)):i++;vi()===e&&Z0(t||"all")};function I6(e){let t=U0(e);e.key&&e.key.toLowerCase()==="capslock"&&(t=Eo(e.key));const r=ot.indexOf(t);if(r>=0&&ot.splice(r,1),e.key&&e.key.toLowerCase()==="meta"&&ot.splice(0,ot.length),(t===93||t===224)&&(t=91),t in Mt){Mt[t]=!1;for(const i in An)An[i]===t&&(Wn[i]=!1)}}var q0=(e,...t)=>{if(typeof e>"u")Object.keys(ht).forEach(r=>{Array.isArray(ht[r])&&ht[r].forEach(i=>Ea(i)),delete ht[r]}),Il(null);else if(Array.isArray(e))e.forEach(r=>{r.key&&Ea(r)});else if(typeof e=="object")e.key&&Ea(e);else if(typeof e=="string"){let[r,i]=t;typeof r=="function"&&(i=r,r=""),Ea({key:e,scope:r,method:i,splitKey:"+"})}},Ea=({key:e,scope:t,method:r,splitKey:i="+"})=>{W0(e).forEach(a=>{const s=a.split(i),c=s.length,u=s[c-1],d=u==="*"?"*":Eo(u);if(!ht[d])return;t||(t=vi());const h=c>1?G0(An,s):[],f=[];ht[d]=ht[d].filter(b=>{const v=(r?b.method===r:!0)&&b.scope===t&&_6(b.mods,h);return v&&f.push(b.element),!v}),f.forEach(b=>Il(b))})};function K0(e,t,r,i){if(t.element!==i)return;let a;if(t.scope===r||t.scope==="all"){a=t.mods.length>0;for(const s in Mt)Object.prototype.hasOwnProperty.call(Mt,s)&&(!Mt[s]&&t.mods.indexOf(+s)>-1||Mt[s]&&t.mods.indexOf(+s)===-1)&&(a=!1);(t.mods.length===0&&!Mt[16]&&!Mt[18]&&!Mt[17]&&!Mt[91]||a||t.shortcut==="*")&&(t.keys=[],t.keys=t.keys.concat(ot),t.method(e,t)===!1&&(e.preventDefault?e.preventDefault():e.returnValue=!1,e.stopPropagation&&e.stopPropagation(),e.cancelBubble&&(e.cancelBubble=!0)))}}function Y0(e,t){const r=ht["*"];let i=U0(e);if(e.key&&e.key.toLowerCase()==="capslock"||!(Wn.filter||j0).call(this,e))return;if((i===93||i===224)&&(i=91),ot.indexOf(i)===-1&&i!==229&&ot.push(i),["metaKey","ctrlKey","altKey","shiftKey"].forEach(u=>{const d=gi[u];e[u]&&ot.indexOf(d)===-1?ot.push(d):!e[u]&&ot.indexOf(d)>-1?ot.splice(ot.indexOf(d),1):u==="metaKey"&&e[u]&&(ot=ot.filter(h=>h in gi||h===i))}),i in Mt){Mt[i]=!0;for(const u in An)Object.prototype.hasOwnProperty.call(An,u)&&(Wn[u]=e[gi[An[u]]]);if(!r)return}for(const u in Mt)Object.prototype.hasOwnProperty.call(Mt,u)&&(Mt[u]=e[gi[u]]);e.getModifierState&&!(e.altKey&&!e.ctrlKey)&&e.getModifierState("AltGraph")&&(ot.indexOf(17)===-1&&ot.push(17),ot.indexOf(18)===-1&&ot.push(18),Mt[17]=!0,Mt[18]=!0);const a=vi();if(r)for(let u=0;u<r.length;u++)r[u].scope===a&&(e.type==="keydown"&&r[u].keydown||e.type==="keyup"&&r[u].keyup)&&K0(e,r[u],a,t);if(!(i in ht))return;const s=ht[i],c=s.length;for(let u=0;u<c;u++)if((e.type==="keydown"&&s[u].keydown||e.type==="keyup"&&s[u].keyup)&&s[u].key){const d=s[u],{splitKey:h}=d,f=d.key.split(h),b=[];for(let v=0;v<f.length;v++)b.push(Eo(f[v]));b.sort().join("")===ot.sort().join("")&&K0(e,d,a,t)}}var Wn=function e(t,r,i){ot=[];const a=W0(t);let s=[],c="all",u=document,d=0,h=!1,f=!0,b="+",v=!1,m=!1;if(i===void 0&&typeof r=="function"&&(i=r),Object.prototype.toString.call(r)==="[object Object]"){const g=r;g.scope&&(c=g.scope),g.element&&(u=g.element),g.keyup&&(h=g.keyup),g.keydown!==void 0&&(f=g.keydown),g.capture!==void 0&&(v=g.capture),typeof g.splitKey=="string"&&(b=g.splitKey),g.single===!0&&(m=!0)}for(typeof r=="string"&&(c=r),m&&q0(t,c);d<a.length;d++){const g=a[d].split(b);s=[],g.length>1&&(s=G0(An,g));let k=g[g.length-1];k=k==="*"?"*":Eo(k),k in ht||(ht[k]=[]),ht[k].push({keyup:h,keydown:f,scope:c,mods:s,shortcut:a[d],method:i,key:a[d],splitKey:b,element:u})}if(typeof u<"u"&&typeof window<"u"){if(!Jn.has(u)){const g=(_=window.event)=>Y0(_,u),k=(_=window.event)=>{Y0(_,u),I6(_)};Jn.set(u,{keydownListener:g,keyupListenr:k,capture:v}),xl(u,"keydown",g,v),xl(u,"keyup",k,v)}if(!mi){const g=()=>{ot=[]};mi={listener:g,capture:v},xl(window,"focus",g,v)}if(!ko&&typeof document<"u"){const g=()=>{ot=[];for(const E in Mt)Mt[E]=!1;for(const E in An)e[E]=!1},k=g,_=g;document.addEventListener("fullscreenchange",k),document.addEventListener("webkitfullscreenchange",_),ko={fullscreen:k,webkit:_}}}};function C6(e,t="all"){Object.keys(ht).forEach(r=>{ht[r].filter(i=>i.scope===t&&i.shortcut===e).forEach(i=>{i&&i.method&&i.method({},i)})})}function Il(e){const t=Object.values(ht).flat();if(t.findIndex(({element:r})=>r===e)<0&&e){const{keydownListener:r,keyupListenr:i,capture:a}=Jn.get(e)||{};r&&i&&(fi(e,"keyup",i,a),fi(e,"keydown",r,a),Jn.delete(e))}if(t.length<=0||Jn.size<=0){if(Array.from(Jn.keys()).forEach(r=>{const{keydownListener:i,keyupListenr:a,capture:s}=Jn.get(r)||{};i&&a&&(fi(r,"keyup",a,s),fi(r,"keydown",i,s),Jn.delete(r))}),Jn.clear(),Object.keys(ht).forEach(r=>delete ht[r]),mi){const{listener:r,capture:i}=mi;fi(window,"focus",r,i),mi=null}ko&&typeof document<"u"&&(document.removeEventListener("fullscreenchange",ko.fullscreen),document.removeEventListener("webkitfullscreenchange",ko.webkit),ko=null)}}var Cl={getPressedKeyString:A6,setScope:Z0,getScope:vi,deleteScope:x6,getPressedKeyCodes:E6,getAllKeyCodes:S6,isPressed:M6,filter:j0,trigger:C6,unbind:q0,keyMap:pi,modifier:An,modifierMap:gi};for(const e in Cl){const t=e;Object.prototype.hasOwnProperty.call(Cl,t)&&(Wn[t]=Cl[t])}if(typeof window<"u"){const e=window.hotkeys;Wn.noConflict=t=>(t&&window.hotkeys===Wn&&(window.hotkeys=e),Wn),window.hotkeys=Wn}function X0(){const e=fe("chapter").value;if(K("viewMode").startsWith("Fluid")){const t=K("viewMode")==="FluidRTL"?-1:1;e?.scrollBy({top:0,left:K("scrollHeight")*t,behavior:"smooth"}),e&&e.scrollLeft+e.clientWidth>=e.scrollWidth-2&&(Re("autoScroll",!1),ke("Finished auto scroll"))}else window.scrollBy({top:K("scrollHeight"),left:0,behavior:"smooth"}),window.scrollY+window.innerHeight>=document.documentElement.scrollHeight&&(Re("autoScroll",!1),ke("Finished auto scroll"));fe("autoScroll")&&requestAnimationFrame(X0)}function Aa(){fe("autoScroll")?(Re("autoScroll",!1),ke("Stopped auto scroll")):(Re("autoScroll",!0),requestAnimationFrame(X0),ke("Start auto scroll"))}var Sa=!1,O6=Me.default.debounce(()=>{Aa(),Sa=!1},500);function T6(){!Sa&&fe("autoScroll")&&(Aa(),Sa=!0),Sa&&!fe("autoScroll")&&O6()}function L6(){window.addEventListener("wheel",Me.default.throttle(T6,500))}function R6(e,t){const r=document.createElement("style");return r.id=e,r.appendChild(document.createTextNode(t)),r}function P6(e,t){document.querySelector(`#${e}`)||(document.head??document.querySelector("head")).appendChild(R6(e,t))}function $6(e){document.querySelectorAll(`style[id="${e}"]`).forEach(t=>{t.remove()})}function D6(e,t){$6(e),P6(e,t)}function z6(e,t){return lo`
    <style id="${e}">
      ${t}
    </style>
  `}var Un=class extends Qe{constructor(...t){super(...t),this.open=!1,this.mode="dialog",this.fullscreen=!1,this.label="",this.withoutHeader=!1,this.lightDismiss=!0}static{this.styles=Ot`
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

    :host([open]:not([mode='inline'])) dialog,
    .closing {
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

    .icon-container {
      display: flex;
      justify-content: center;
      padding-block-end: 1rem;
      text-align: center;
    }
    :host([icon='success']) .icon-container mov-icon {
      color: var(--theme-color-success, #28a745);
    }
    :host([icon='error']) .icon-container mov-icon {
      color: var(--theme-color-danger, #dc3545);
    }
    :host([icon='warning']) .icon-container mov-icon {
      color: var(--theme-color-warning, #ffc107);
    }
    :host([icon='info']) .icon-container mov-icon {
      color: var(--theme-color-info, #17a2b8);
    }
    :host([icon='question']) .icon-container mov-icon {
      color: var(--theme-color-secondary, #6c757d);
    }

    /* --- MODE: INLINE --- */
    :host([mode='inline']) {
      display: block;
      width: 500px;
      max-width: 100%;
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
      width: 500px;
      max-width: 100%;
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
      transform: translateY(2rem);
      border-radius: 0;
    }
    :host([fullscreen][open]) dialog {
      transform: translateY(0);
    }
  `}close(){this.open=!1}handleCancel(t){t.preventDefault(),this.close()}handleBackdropClick(){this.mode!=="inline"&&this.lightDismiss&&this.close()}handleClick(t){this.mode!=="inline"&&this.lightDismiss&&t.target===this.dialog&&this.close()}updated(t){this.mode!=="inline"&&t.has("open")&&(this.open?(this.dialog.classList.remove("closing"),this.dialog.show(),this.dispatchEvent(new CustomEvent("open",{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("wa-show",{bubbles:!0,composed:!0})),setTimeout(()=>{this.dispatchEvent(new CustomEvent("wa-after-show",{bubbles:!0,composed:!0}))},150)):t.get("open")===!0&&(this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("wa-hide",{bubbles:!0,composed:!0})),this.dialog.classList.add("closing"),setTimeout(()=>{this.dialog.classList.remove("closing"),this.dialog.open&&this.dialog.close(),this.dispatchEvent(new CustomEvent("wa-after-hide",{bubbles:!0,composed:!0}))},300)))}render(){return ce`
      <div
        class="backdrop"
        @click=${this.handleBackdropClick}
      ></div>
      <dialog
        part="dialog"
        @cancel=${this.handleCancel}
        @click=${this.handleClick}
      >
        ${this.withoutHeader?"":ce`
          <div
            class="header-bar"
            part="header-bar"
          >
            <div class="action-item">
              <slot name="header-actions"></slot>
            </div>
            <div class="header-content" part="title">
              <slot name="label">${this.label}</slot>
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
                ${Sl}
              </button>
            </div>
          </div>
        `}
        <div class="content-slot" part="body">
          ${this.icon?ce`
                <div class="icon-container">
                  <mov-icon
                    .name=${B6(this.icon)}
                    size="4rem"
                  ></mov-icon>
                </div>
              `:""}
          <slot></slot>
        </div>
        <slot name="footer" part="footer"></slot>
      </dialog>
    `}};G([re({type:Boolean,reflect:!0})],Un.prototype,"open",void 0),G([re({type:String,reflect:!0})],Un.prototype,"mode",void 0),G([re({type:Boolean,reflect:!0})],Un.prototype,"fullscreen",void 0),G([re({type:String,reflect:!0})],Un.prototype,"label",void 0),G([re({type:Boolean,reflect:!0,attribute:"without-header"})],Un.prototype,"withoutHeader",void 0),G([re({type:Boolean,reflect:!0,attribute:"light-dismiss"})],Un.prototype,"lightDismiss",void 0),G([re({type:String,reflect:!0})],Un.prototype,"icon",void 0),G([Wr("dialog")],Un.prototype,"dialog",void 0),Un=G([ut("mov-dialog")],Un);function Ol(e){const t=()=>Re("dialog",null);e.timer&&setTimeout(t,e.timer),Re("dialog",{open:!0,icon:e.icon,title:e.title,content:ce`<div style="padding: 1rem;">${P0(e.html)}</div>`,footer:ce`
      <div
        slot="footer"
        style="display: flex; justify-content: flex-end; padding: 0.5rem 1rem 1rem;"
      >
        <mov-button @click=${t}>OK</mov-button>
      </div>
    `})}function B6(e){switch(e){case"info":return"info-circle";case"warning":return"alert-circle";case"success":return"circle-check";case"error":return"circle-x";case"question":return"help";default:return""}}function N6(e){const t=e.currentTarget.value;$d(t==="true")}function H6(e){const t=e.currentTarget.value;_t("locale",t)}function F6(e){const t=e.currentTarget.value;_t("loadMode",t)}function G6(e){const t=e.detail.checked;_t("fitWidthIfOversize",t)}function W6(e){const t=e.currentTarget.value;_t("navbar",t)}function U6(e){const t=e.currentTarget.value;_t("pagination",t)}function V6(e){const t=e.detail.checked;_t("downloadZip",t),t&&Ol({title:j("ATTENTION"),html:j("AUTO_DOWNLOAD"),timer:1e4,icon:"info"})}function Z6(e){const t=e.detail.checked;_t("lazyLoadImages",t),t&&Ol({title:j("WARNING"),html:j("LAZY_LOAD"),icon:"warning"})}function j6(e){const t=e.currentTarget.value;_t("lazyStart",parseInt(t,10))}function q6(e){const t=e.currentTarget.value;_t("loadSpeed",t),["Extreme","All"].includes(t)&&Ol({title:j("SPEED_WARNING"),html:j("SPEED_WARNING_MESSAGE"),icon:"warning"})}function K6(e){const t=e.currentTarget.value;_t("zoomStep",parseInt(t,10))}function Y6(e){const t=e.currentTarget.value;D6("MinZoom",`#MangaOnlineViewer .PageContent .PageImg {min-width: ${t}vw;}`),_t("minZoom",parseInt(t,10))}function X6(e){const t=e.detail.checked;_t("hidePageControls",t)}function J6(e){const t=e.currentTarget.value;_t("header",t)}function Q6(e){const{value:t}=e.currentTarget;_t("scrollHeight",parseInt(t,10))}function J0(e){Xo("scrollHeight",t=>{const r=t+e*25;if(r<=0)return 0;const i=Math.ceil(window.innerHeight/200)*100;return r>=i?i:r})}function eb(){const e=K("navbar");return e==="left"||e==="right"?window.innerWidth-34:window.innerWidth}function tb(){return K("navbar")==="bottom"?window.innerHeight-34:window.innerHeight}function Q0(e,t=K("zoomMode"),r=K("zoomValue")){const i=eb(),a=tb();if(t==="width")e.width=i,e.height=void 0;else if(t==="height")e.width=void 0,e.height=a;else if(t==="percent"){const s=e.naturalWidth??e.ref?.value?.naturalWidth;e.width=s?s*(r/100):void 0,e.height=void 0}return e}function Vr(e=K("zoomMode"),t=K("zoomValue")){ke("Zoom",e,t),ao("zoomMode",e),ao("zoomValue",t),e==="height"?Re("scrollToPage",fe("currentPage")):Nr("header");const r=fe("images"),i=fe("manga"),a={};for(let s=i?.begin??1;s<=(i?.pages??1);s++)a[s]=Q0({...r?.[s]},e,t);Re("images",a)}function Ao(e,t=K("zoomValue")){return()=>{Vr(e,t)}}function Ma(e=1){return()=>{const t=K("zoomValue")+e*K("zoomStep");t>0&&t<500&&Vr("percent",t)}}function nb(e){const t=e.currentTarget.value;_t("zoomMode",t)}function rb(e){const t=parseInt(e.currentTarget.value,10);_t("zoomValue",t),Vr("percent",t)}function ob(e){Vr("percent",parseInt(e.currentTarget.value,10))}function hn(e){return()=>{ao("viewMode",e),e.startsWith("Fluid")?(ao("zoomMode","height"),ao("header","click")):(Nr("zoomMode"),Nr("zoomValue"),Nr("header")),Vr()}}function ib(e){const t=e.currentTarget.value;_t("viewMode",t),hn(t)()}function ab(e){const t=K("viewMode")==="FluidRTL"?-1:1;fe("chapter").value?.scrollBy({left:.8*window.innerWidth*e*t,behavior:"smooth"})}function sb(e){const t=fe("currentPage")+e;t<0?Re("scrollToPage",0):t>(fe("manga")?.pages??1)||Re("scrollToPage",t)}function lb(e){window.scrollBy({top:.8*window.innerHeight*e,behavior:"smooth"})}function cb(e){const t=fe("currentPage"),r=fe("manga");if(!r)return;const i=fe("images")??{},a=r.begin??1,s=r.pages??1,c=d=>{if(d<a||d>s)return!1;if(i[d]?.doublePage)return!0;let h=0;for(let f=d-1;f>=a&&!i[f]?.doublePage;f--)h++;return h%2===0};let u;if(e===1)for(u=t+1;u<=s&&!c(u);)u++;else if(c(t))for(u=t-1;u>a&&!c(u);)u--;else for(u=t;u>a&&!c(u);)u--;u<a?Re("scrollToPage",0):u>s?Re("scrollToPage",s):Re("scrollToPage",u)}function eh(e){const t=K("viewMode"),r=K("zoomMode");ke("Scrolling view",t,"zoom",r,"sign",e),t.match(/^(Book|Manga)$/)&&r==="height"?cb(e):t.startsWith("Fluid")?ab(e):r==="height"?sb(e):lb(e)}function bi(e){const t=fe("manga")?.[e];t&&t!=="#"?location.href=(0,H0.sanitizeUrl)(t):e!=="next"&&history.back()}var db={SCROLL_UP(){eh(-1)},SCROLL_DOWN(){eh(1)},NEXT_CHAPTER(){bi("next")},PREVIOUS_CHAPTER(){bi("prev")},RETURN_CHAPTER_LIST(){bi("series")},ENLARGE(){Ma(1)()},REDUCE(){Ma(-1)()},RESTORE(){Ao("percent",100)()},FIT_WIDTH(){Ao("width")()},FIT_HEIGHT(){Ao("height")()},SETTINGS(){Pd("panel",e=>e==="none"?"settings":"none")},VIEW_MODE_WEBCOMIC(){hn("WebComic")()},VIEW_MODE_VERTICAL(){hn("Vertical")()},VIEW_MODE_LEFT(){hn("FluidRTL")()},VIEW_MODE_RIGHT(){hn("FluidLTR")()},VIEW_MODE_GALLERY(){hn("Gallery")()},SCROLL_START(){Aa()},INCREASE_SPEED(){J0(1)},DECREASE_SPEED(){J0(-1)}};function th(){document.onkeydown=null,document.onkeyup=null,window.onkeydown=null,window.onkeyup=null,window.onload=null,document.body.onload=null,Wn.unbind(),Me.default.keys(K("keybinds")).forEach(e=>{Wn(K("keybinds")[e]?.join(",")??"",Me.default.throttle(t=>{t.preventDefault(),t.stopImmediatePropagation(),t.stopPropagation(),db[e]()},100))})}var br=class extends Qe{constructor(...t){super(...t),this.mode="disabled",this.currentPage=1,this.totalPages=1,this.startPage=1}static{this.styles=Ot`
    :host {
      display: contents; /* Use contents to not interfere with layout */
      font-family:
        system-ui,
        -apple-system,
        sans-serif;
    }

    .slider-pagination {
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
      max-width: 100%;
      z-index: 100;
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

    .pagination-button mov-icon {
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

    .side-arrow {
      position: fixed;
      top: var(--header-height, 50px);
      bottom: 0;
      width: 10vw;
      height: calc(100vh - var(--header-height, 50px));
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      z-index: 99;
      opacity: 0;
      transition: opacity 0.2s ease-in-out;
      -webkit-tap-highlight-color: transparent;
    }

    .side-arrow:hover {
      background-color: var(--mov-color-primary-alpha-10);
      opacity: 1;
    }

    .side-arrow.left {
      left: 0;
    }

    .side-arrow.right {
      right: 0;
    }

    .side-arrow:active {
      background-color: var(--mov-color-primary-alpha-20);
    }

    .side-arrow mov-icon {
      width: 48px;
      height: 48px;
      fill: var(--mov-color-on-primary);
      filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.5));
    }

    .side-arrow:disabled {
      display: none;
    }
  `}get isFirstPage(){return this.currentPage<=this.startPage}get isLastPage(){return this.currentPage>=this.totalPages-(1-this.startPage)}renderSlider(){return ce`
      <div class="slider-pagination">
        <button
          class="pagination-button"
          @click=${hi}
          value="${this.prev}"
          ?disabled=${_n(this.prev)||this.prev==="#"}
        >
          <mov-icon name="arrow-big-left"></mov-icon>
          <div class="tooltip">Previous Chapter</div>
        </button>

        <button
          class="pagination-button"
          @click=${this.goToPreviousPage}
          ?disabled=${this.isFirstPage}
        >
          <mov-icon name="chevron-left"></mov-icon>
          <div class="tooltip">Previous Page</div>
        </button>

        <div class="slider-container">
          <input
            type="range"
            class="pagination-slider"
            min="${this.startPage}"
            max="${this.totalPages}"
            .value="${this.currentPage.toString()}"
            @input="${b6}"
          />
          <div class="slider-tooltip">${this.currentPage} / ${this.totalPages}</div>
        </div>

        <button class="pagination-button" @click=${this.goToNextPage} ?disabled=${this.isLastPage}>
          <mov-icon name="chevron-right"></mov-icon>
          <div class="tooltip">Next Page</div>
        </button>

        <button
          class="pagination-button"
          @click=${hi}
          value="${this.next}"
          ?disabled=${_n(this.next)||this.next==="#"}
        >
          <mov-icon name="arrow-big-right"></mov-icon>
          <div class="tooltip">Next Chapter</div>
        </button>
      </div>
    `}renderSideArrows(){return ce`
      <div class="arrows-pagination">
        <button
          class="side-arrow left"
          @click=${this.handleLeftArrowClick}
          ?disabled=${this.isFirstPage&&(_n(this.prev)||this.prev==="#")}
        >
          <mov-icon name="chevron-left"></mov-icon>
        </button>
        <button
          class="side-arrow right"
          @click=${this.handleRightArrowClick}
          ?disabled=${this.isLastPage&&(_n(this.next)||this.next==="#")}
        >
          <mov-icon name="chevron-right"></mov-icon>
        </button>
      </div>
    `}render(){if(this.mode==="disabled")return De;const t=this.mode==="slider"||this.mode==="both",r=this.mode==="side-arrows"||this.mode==="both";return ce`
      ${t?this.renderSlider():De} ${r?this.renderSideArrows():De}
    `}handleLeftArrowClick(){this.isFirstPage?bi("prev"):this.goToPreviousPage()}handleRightArrowClick(){this.isLastPage?bi("next"):this.goToNextPage()}goToPreviousPage(){this.goToPage(this.currentPage-1)}goToNextPage(){this.goToPage(this.currentPage+1)}goToPage(t){Re("scrollToPage",t)}};G([re({type:String})],br.prototype,"mode",void 0),G([re({type:Number})],br.prototype,"currentPage",void 0),G([re({type:Number})],br.prototype,"totalPages",void 0),G([re({type:Number})],br.prototype,"startPage",void 0),G([re({type:String})],br.prototype,"next",void 0),G([re({type:String})],br.prototype,"prev",void 0),br=G([ut("manga-pagination")],br);var wr=class extends Qe{constructor(...t){super(...t),this.open=!1,this.placement="end",this.label="",this.withoutHeader=!1,this.lightDismiss=!0}static{this.styles=Ot`
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

    :host([open]) dialog,
    .closing {
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
    :host([placement='top']) dialog {
      top: 0;
      left: 0;
      width: 100%;
      height: auto;
      transform: translateY(-100%);
    }
    :host([placement='bottom']) dialog {
      bottom: 0;
      left: 0;
      width: 100%;
      height: auto;
      top: auto;
      transform: translateY(100%);
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
    .footer-slot {
      display: block;
      padding: 1rem;
      border-top: 1px solid var(--theme-border-color, #e0e0e0);
    }
  `}close(){this.open=!1}handleCancel(t){t.preventDefault(),this.close()}handleBackdropClick(){this.lightDismiss&&this.close()}handleClick(t){this.lightDismiss&&t.target===this.dialog&&this.close()}updated(t){t.has("open")&&(this.open?(this.dialog.classList.remove("closing"),this.dialog.show(),this.dispatchEvent(new CustomEvent("open",{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("wa-show",{bubbles:!0,composed:!0})),setTimeout(()=>{this.dispatchEvent(new CustomEvent("wa-after-show",{bubbles:!0,composed:!0}))},250)):t.get("open")===!0&&(this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("wa-hide",{bubbles:!0,composed:!0})),this.dialog.classList.add("closing"),setTimeout(()=>{this.dialog.classList.remove("closing"),this.dialog.open&&this.dialog.close(),this.dispatchEvent(new CustomEvent("wa-after-hide",{bubbles:!0,composed:!0}))},300)))}render(){return ce`
      <div
        class="backdrop"
        @click=${this.handleBackdropClick}
      ></div>
      <dialog
        part="dialog"
        @cancel=${this.handleCancel}
        @click=${this.handleClick}
      >
        ${this.withoutHeader?"":ce`
          <div
            class="header-bar"
            part="header-bar"
          >
            <div class="action-item">
              <slot name="header-actions"></slot>
            </div>
            <div class="header-content" part="title">
              <slot name="label">${this.label}</slot>
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
                ${Sl}
              </button>
            </div>
          </div>
        `}
        <slot class="content-slot" part="body"></slot>
        <slot name="footer" class="footer-slot" part="footer"></slot>
      </dialog>
    `}};G([re({type:Boolean,reflect:!0})],wr.prototype,"open",void 0),G([re({type:String,reflect:!0})],wr.prototype,"placement",void 0),G([re({type:String,reflect:!0})],wr.prototype,"label",void 0),G([re({type:Boolean,reflect:!0,attribute:"without-header"})],wr.prototype,"withoutHeader",void 0),G([re({type:Boolean,reflect:!0,attribute:"light-dismiss"})],wr.prototype,"lightDismiss",void 0),G([Wr("dialog")],wr.prototype,"dialog",void 0),wr=G([ut("mov-drawer")],wr);var Zr=class extends Qe{static{this.styles=Ot`
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
  `}constructor(){super(),this.open=!1,this.checkable=!1,this.distance=0,this.skidding=0,this.placement="bottom-start",this.boundClickHandler=this.handleClickOutside.bind(this)}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this.boundClickHandler)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this.boundClickHandler)}handleClickOutside(t){this.open&&!t.composedPath().includes(this)&&this.hide()}show(){this.open||(this.open=!0,this.dispatchEvent(new CustomEvent("wa-show",{bubbles:!0,composed:!0})),setTimeout(()=>{this.dispatchEvent(new CustomEvent("wa-after-show",{bubbles:!0,composed:!0}))},150))}hide(){this.open&&(this.open=!1,this.dispatchEvent(new CustomEvent("wa-hide",{bubbles:!0,composed:!0})),setTimeout(()=>{this.dispatchEvent(new CustomEvent("wa-after-hide",{bubbles:!0,composed:!0}))},150))}toggle(){this.open?this.hide():this.show()}render(){return ce`
      <div
        @click=${this.toggle}
        class="trigger-wrapper"
        part="trigger"
      >
        <slot name="trigger"></slot>
      </div>
      <div
        class="dropdown-content"
        part="menu"
      >
        <slot></slot>
      </div>
    `}};G([re({type:Boolean,reflect:!0})],Zr.prototype,"open",void 0),G([re({type:Boolean,reflect:!0})],Zr.prototype,"checkable",void 0),G([re({type:Number})],Zr.prototype,"distance",void 0),G([re({type:Number})],Zr.prototype,"skidding",void 0),G([re({type:String})],Zr.prototype,"placement",void 0),Zr=G([ut("mov-dropdown")],Zr);var _r=class extends Qe{constructor(...t){super(...t),this.selected=!1,this.checked=!1,this.disabled=!1,this.value="",this.variant="default",this.type="normal"}static{this.styles=Ot`
    :host {
      display: block;
      min-width: max-content;
    }
    .item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 8px 12px;
      cursor: pointer;
      color: var(--theme-body-text-color);
      background-color: var(--theme-background-color);
      gap: 10px;
    }
    .item:hover {
      background-color: var(--mov-color-fill-normal);
      color: var(--mov-color-on-normal);
    }
    :host([selected]) .item,
    :host([checked]) .item {
      background-color: var(--mov-color-fill-normal);
      color: var(--mov-color-on-normal);
    }
    :host([disabled]) .item {
      opacity: 0.5;
      cursor: not-allowed;
      pointer-events: none;
    }
    :host([variant='danger']) .item {
      color: var(--theme-color-danger, #dc3545);
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
    :host([selected]) .check-icon,
    :host([checked]) .check-icon {
      visibility: visible;
    }
    ::slotted([slot='details']) {
      font-size: 0.9em;
      opacity: 0.7;
    }
  `}handleSelect(){this.disabled||this.dispatchEvent(new CustomEvent("wa-select",{detail:{item:this},bubbles:!0,composed:!0}))}render(){return ce`
      <div
        class="item"
        @click=${this.handleSelect}
        part="base"
      >
        <div
          class="item-content"
          part="label"
        >
          <mov-icon
            class="check-icon"
            name="IconCheck"
            part="checkmark"
          ></mov-icon>
          <slot
            name="icon"
            part="icon"
          ></slot>
          <slot></slot>
        </div>
        <slot
          name="details"
          part="details"
        ></slot>
      </div>
    `}};G([re({type:Boolean,reflect:!0})],_r.prototype,"selected",void 0),G([re({type:Boolean,reflect:!0})],_r.prototype,"checked",void 0),G([re({type:Boolean,reflect:!0})],_r.prototype,"disabled",void 0),G([re({type:String})],_r.prototype,"value",void 0),G([re({type:String,reflect:!0})],_r.prototype,"variant",void 0),G([re({type:String,reflect:!0})],_r.prototype,"type",void 0),_r=G([ut("mov-dropdown-item")],_r);var Tl=class extends Qe{constructor(...t){super(...t),this.orientation="horizontal"}static{this.styles=Ot`
    :host {
      display: block;
    }
    :host([orientation='horizontal']) .divider {
      border-top: 1px solid var(--theme-border-color, #ccc);
      margin: 4px 0;
    }
    :host([orientation='vertical']) .divider {
      border-left: 1px solid var(--theme-border-color, #ccc);
      height: 100%;
      margin: 0 4px;
      display: inline-block;
    }
  `}render(){return ce`<div
      class="divider"
      role="separator"
    ></div>`}};G([re({type:String,reflect:!0})],Tl.prototype,"orientation",void 0),Tl=G([ut("mov-divider")],Tl);var nh="kbd,.key{white-space:nowrap;text-align:center;background-color:#505050;background-color:gradient(linear, left top, left bottom, from(#3c3c3c), to(#505050));color:#fafafa;text-shadow:-1px -1px #464646;cursor:default;user-select:none;border:none;border-radius:.3em;min-width:1em;padding:.3em .4em .2em .3em;font-family:Lucida Grande,Lucida,Arial,sans-serif;font-size:.85em;font-style:normal;line-height:1;text-decoration:none;display:inline-block;box-shadow:inset 0 0 1px #969696,inset 0 -.05em .4em #505050,0 .1em #1e1e1e,0 .1em .1em #0000004d}kbd[title],.key[title]{cursor:help}kbd.dark,.dark-keys kbd,.key.dark,.dark-keys .key{white-space:nowrap;text-align:center;background-color:#505050;background-color:gradient(linear, left top, left bottom, from(#3c3c3c), to(#505050));color:#fafafa;text-shadow:-1px -1px #464646;border:none;border-radius:.3em;min-width:1em;padding:.3em .4em .2em .3em;font-family:Lucida Grande,Lucida,Arial,sans-serif;font-style:normal;text-decoration:none;display:inline-block;box-shadow:inset 0 0 1px #969696,inset 0 -.05em .4em #505050,0 .1em #1e1e1e,0 .1em .1em #0000004d}kbd.light,.light-keys kbd,.key.light,.light-keys .key{white-space:nowrap;text-align:center;background-color:#fafafa;background-color:gradient(linear, left top, left bottom, from(#d2d2d2), to(#fff));color:#323232;text-shadow:0 0 2px #fff;border:none;border-radius:.3em;min-width:1em;padding:.3em .4em .2em .3em;font-family:Lucida Grande,Lucida,Arial,sans-serif;font-style:normal;text-decoration:none;display:inline-block;box-shadow:inset 0 0 1px #fff,inset 0 0 .4em #c8c8c8,0 .1em #828282,0 .11em #0006,0 .1em .11em #000000e6}kbd.so,.so-keys kbd,.key.so,.so-keys .key{white-space:nowrap;text-align:center;color:#242729;text-shadow:0 1px #fff;background-color:#e1e3e5;border:1px solid #adb3b9;border-radius:.272727em;min-width:1em;margin:0 .1em;padding:.1em .6em;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;font-style:normal;line-height:1.4;text-decoration:none;display:inline-block;box-shadow:0 1px #0c0d0e33,inset 0 0 0 2px #fff}kbd.github,.github-keys kbd,.key.github,.github-keys .key{white-space:nowrap;text-align:center;color:#444d56;vertical-align:middle;box-sizing:border-box;min-width:1em;text-shadow:none;background-color:#fafbfc;border:1px solid #c6cbd1;border-bottom-color:#959da5;border-radius:.272727em;padding:.272727em .454545em;font-family:SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace;font-size:68.75%;font-style:normal;line-height:.909091;text-decoration:none;display:inline-block;box-shadow:inset 0 -1px #959da5}",ub=wn((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.StoreController=void 0;var t=class{constructor(r,i){this.host=r,this.atom=i,r.addController(this)}hostConnected(){this.unsubscribe=this.atom.subscribe(()=>{this.host.requestUpdate()})}hostDisconnected(){var r;(r=this.unsubscribe)===null||r===void 0||r.call(this)}get value(){return this.atom.get()}};e.StoreController=t})),Ll=wn((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.MultiStoreController=void 0;var t=class{constructor(r,i){this.host=r,this.atoms=i,r.addController(this)}hostConnected(){this.unsubscribes=this.atoms.map(r=>r.subscribe(()=>this.host.requestUpdate()))}hostDisconnected(){var r;(r=this.unsubscribes)===null||r===void 0||r.forEach(i=>i())}get values(){return this.atoms.map(r=>r.get())}};e.MultiStoreController=t})),hb=wn((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.useStores=void 0;var t=Ll();function r(...i){return a=>class extends a{constructor(...s){super(...s),new t.MultiStoreController(this,i)}}}e.useStores=r})),fb=wn((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.withStores=void 0;var t=Ll(),r=(i,a)=>class extends i{constructor(...c){super(...c),new t.MultiStoreController(this,a)}};e.withStores=r})),pb=wn((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.withStores=e.useStores=e.MultiStoreController=e.StoreController=void 0;var t=ub();Object.defineProperty(e,"StoreController",{enumerable:!0,get:function(){return t.StoreController}});var r=Ll();Object.defineProperty(e,"MultiStoreController",{enumerable:!0,get:function(){return r.MultiStoreController}});var i=hb();Object.defineProperty(e,"useStores",{enumerable:!0,get:function(){return i.useStores}});var a=fb();Object.defineProperty(e,"withStores",{enumerable:!0,get:function(){return a.withStores}})})),So=pb(),xa=49,gb=100,mb=class Jf{constructor(t){this.prevOffset=0,this.headroom="top",this.headerVisible=!0,this.handleScroll=Me.default.throttle(()=>{if(this.isAnyDropdownOpen()){this.prevOffset=window.scrollY;return}const i=K("header"),{scrollY:a}=window;let s="none";K("zoomMode")!=="height"&&a+window.innerHeight+gb>document.body.scrollHeight?s="end":a>this.prevOffset&&a>xa?s="hide":i==="scroll"&&a<this.prevOffset&&a>xa?s="show":i!=="click"&&a<=xa&&(s="top");let c=!1;if(this.headroom!==s&&(this.headroom=s,c=!0),i==="scroll"){const u=s!=="hide";this.headerVisible!==u&&(this.headerVisible=u,c=!0)}c&&this.host.requestUpdate(),this.prevOffset=a},300),this.handleMouseMove=Me.default.throttle(i=>{if(this.isAnyDropdownOpen()){this.headerVisible||(this.headerVisible=!0,this.host.requestUpdate());return}if(["hover","scroll"].includes(K("header"))){const a=Jf.isMouseInsideRegion(i,window.innerWidth,xa*1.5);this.headerVisible!==a&&(this.headerVisible=a,this.host.requestUpdate())}},300),this.toggleHeaderVisibility=()=>{K("header")==="click"&&(this.headerVisible=!this.headerVisible,this.host.requestUpdate())},this.host=t,t.addController(this);const r=K("header");K("zoomMode")==="height"&&["click","hover"].includes(r)&&(this.headerVisible=!1)}hostConnected(){window.addEventListener("scroll",this.handleScroll),window.addEventListener("mousemove",this.handleMouseMove)}hostDisconnected(){window.removeEventListener("scroll",this.handleScroll),window.removeEventListener("mousemove",this.handleMouseMove)}isAnyDropdownOpen(){if(!this.host.shadowRoot)return!1;const t=this.host.shadowRoot.querySelectorAll("mov-dropdown");for(const r of t)if(r.open)return!0;return!1}static isMouseInsideRegion(t,r,i){return t.clientX>=0&&t.clientX<=r&&t.clientY>=0&&t.clientY<=i}},vb=class{constructor(e){this.canvasContext=null,this.host=e,e.addController(this),this.canvasContext=document.createElement("canvas").getContext("2d"),this.resizeObserver=new ResizeObserver(()=>this.update())}hostConnected(){}hostDisconnected(){this.resizeObserver.disconnect()}observe(e,t){!e||!t||(this.element=e,this.text=t,this.resizeObserver.disconnect(),this.resizeObserver.observe(this.element),this.update())}update(){if(!this.element||!this.text||!this.canvasContext){this.value=this.text,this.host.requestUpdate();return}const e=window.getComputedStyle(this.element);this.canvasContext.font=`${e.fontWeight} ${e.fontSize} ${e.fontFamily}`;const t=this.text,r=this.element.clientWidth;if(this.canvasContext.measureText(t).width<=r){this.value=t,this.host.requestUpdate();return}const i="...",a=r-this.canvasContext.measureText(i).width;let s="",c="";for(let u=1;u<t.length;u++){const d=t.substring(0,u),h=t.substring(t.length-u);if(this.canvasContext.measureText(d).width+this.canvasContext.measureText(h).width>a)break;s=d,c=h}this.value=`${s}${i}${c}`,this.host.requestUpdate()}};function rh(e=window.location.href){_n(so(e))||(ke(`Bookmark Removed ${e}`),Xo("bookmarks",t=>[...t.filter(r=>r.url!==e)]))}function bb(e){const t=e.currentTarget.value;ke(`Bookmark Removed ${t}`),Wo.error({title:j("BOOKMARK_REMOVED"),duration:1e4}),rh(t)}function wb(){Re("panel","bookmarks")}function oh(){const e=fe("currentPage"),t={name:fe("manga")?.title??document.documentElement.title??window.location.hostname,url:window.location.href,page:e,date:new Date().toISOString().slice(0,10)};so(t.url)?(Xo("bookmarks",r=>[...r.filter(i=>i.url!==t.url)]),Wo.error({title:j("BOOKMARK_REMOVED"),duration:1e4})):(Xo("bookmarks",r=>[...r,t]),Wo.success({title:j("BOOKMARK_SAVED"),description:j("BOOKMARK_MESSAGE").replace("##num##",e.toString()),duration:1e4}))}function Rl(){Re("panel","none")}function _b(){Re("panel","settings")}function yb(){Re("panel","keybindings")}function kb(e){const t={};Me.default.keys(e).forEach(r=>{const i=e[r].value;if(i){const a=i.value.split(",").map(s=>s.trim()).filter(s=>s!=="");t[r]=a.length>0?a:void 0}}),_t("keybinds",t),Re("panel","keybindings"),th()}function Eb(){Re("panel","keybindingsEditor")}var Ab="#Header{background-color:var(--theme-background-color);z-index:900;flex-flow:row;justify-content:space-around;align-items:center;transition:transform .3s ease-in;display:flex;position:sticky;top:0;left:0;right:0;box-shadow:0 0 25px #00000080}#Header.click{padding-left:40px}@keyframes headroom{0%{transform:translateY(-100%)}to{transform:translateY(0%)}}#Header:not(.visible,.headroom-top,.fixed,.simple){animation:.3s ease-in reverse headroom;position:sticky;top:0;transform:translateY(-100%)}#Header.scroll.headroom-hide:not(.visible){animation:none;position:sticky;top:0;transform:translateY(-100%)}#Header.scroll.headroom-show,#Header.headroom-end,#Header.visible{animation:.3s ease-in headroom;position:sticky;top:0;transform:translateY(0%)}#Header.headroom-top{animation:none}#Header.fixed{animation:none;position:sticky;top:0;transform:translateY(0%)}#Header.simple{animation:none;position:static;top:0;transform:translateY(0%)}#menu{z-index:1;color:var(--theme-body-text-color);width:40px;height:40px;position:fixed}#menu:not(.click),#menu.hide{display:none}#menu.click{z-index:901;top:0;left:0}#MangaTitle{word-wrap:anywhere;white-space:nowrap;text-overflow:ellipsis;min-width:200px;max-width:40vw;margin:0;padding:2px;font-size:1.2rem;font-weight:400;overflow:hidden}#GlobalFunctions{z-index:100;flex-wrap:wrap;gap:3px;padding:3px 3px 3px 0;display:flex}#ZoomControl{flex-direction:column;align-items:center;gap:3px;padding:10px 5px;display:flex}",ih="#Header.mobile,#Header.tablet{flex-flow:wrap;display:flex}.mobile #ViewerTitle,.tablet #ViewerTitle{order:4;min-height:auto}.mobile #GlobalFunctions,.tablet #GlobalFunctions{order:2;width:auto;padding:5px}.mobile #GlobalFunctions span{flex-direction:column}.mobile #ZoomControl,.tablet #ZoomControl{order:3}.mobile #Toolbar,.tabler #Toolbar{order:1}#Header.mobile{flex-flow:wrap;justify-content:center;align-items:center}#Header.mobile.click+#Chapter:not(.webcomic,.vertical){position:sticky}.tablet #MangaTitle,.mobile #MangaTitle{max-width:90vw}.mobile #ViewerTitle{order:3;height:auto;margin-top:0;padding:0}.mobile #GlobalFunctions{order:2;gap:0;width:auto;padding:0}.mobile mov-button::part(base){border-radius:0}.mobile #FileDropdown mov-button:first-of-type::part(base){border-radius:5px 0 0 5px}.mobile #GlobalFunctions mov-button:last-of-type::part(base){border-radius:0 5px 5px 0}.mobile .PageFunctions{padding:0}.mobile .PageFunctions .PageButton.Bookmark{opacity:1}.mobile #GlobalFunctions #ZoomSlider,.tablet #GlobalFunctions #ZoomSlider,.mobile .PageFunctions .PageButton:not(.Bookmark),.tablet #Counters,.mobile #ZoomControl,.mobile #ZoomDropdown,.mobile #ViewDropdown,.mobile #FileDropdown :where(:nth-child(3),:nth-child(4)),.mobile #BookMode,.mobile #MangaMode,.tablet #BookMode,.tablet #MangaMode{display:none}",Ia=class extends Qe{static{this.styles=[Xt(Ab),Xt(ih),Xt(nh),Ot``]}constructor(){super(),this.headroomController=new mb(this),this.titleController=new vb(this)}updated(t){super.updated(t),t.has("manga")&&this.manga&&requestAnimationFrame(()=>{this.manga&&this.titleController.observe(this.mangaTitleElement,this.manga?.title??"Manga Online Viewer")})}render(){if(!this.manga)return ce``;const{headroom:t,headerVisible:r}=this.headroomController,i=K("keybinds"),a=s=>{if(fe("device")!=="desktop")return De;const c=i[s];return!c||c.length===0?De:c.map(u=>ce`<kbd slot="details">${u}</kbd>`)};return ce`
      <mov-button
        id="menu"
        class="${Tt({[K("header")]:!0,hide:["top","end"].includes(t)})}"
        @click=${this.headroomController.toggleHeaderVisibility}
      >
        <mov-icon name="IconMenu2"></mov-icon>
      </mov-button>
      <header
        id="Header"
        class="${Tt({[K("header")]:!0,[`headroom-${t}`]:!0,visible:r&&["hide","none"].includes(t),[fe("device")]:!0})}"
      >
        <div
          id="Toolbar"
          class="button-group"
        >
          <mov-dropdown id="FileDropdown">
            <mov-button
              slot="trigger"
              title="${j("FILE_MENU")}"
            >
              <mov-icon
                label="File"
                name="IconDotsVertical"
              ></mov-icon>
            </mov-button>
            <mov-dropdown-item
              id="settings"
              @click=${_b}
            >
              <mov-icon
                slot="icon"
                name="IconSettings"
              ></mov-icon>
              ${j("SETTINGS")} ${a("SETTINGS")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="keybindings"
              @click=${yb}
            >
              <mov-icon
                slot="icon"
                name="IconKeyboard"
              ></mov-icon>
              ${j("KEYBINDINGS")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="bookmarks"
              class="tablets"
              @click=${wb}
            >
              <mov-icon
                slot="icon"
                name="IconBookmarks"
              ></mov-icon>
              ${j("BOOKMARKS")}
            </mov-dropdown-item>
            <mov-divider></mov-divider>
            <mov-dropdown-item
              id="AutoScroll"
              class="${Tt({running:fe("autoScroll")})}"
              @click=${Aa}
            >
              <mov-icon
                slot="icon"
                name="${fe("autoScroll")?"IconPlayerPause":"IconPlayerPlay"}"
              ></mov-icon>
              ${j("SCROLL_START")} ${a("SCROLL_START")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="pageControls"
              class="tablets phones"
              @click="${m6}"
              ?selected=${K("hidePageControls")}
            >
              <mov-icon
                slot="icon"
                name="IconListNumbers"
              ></mov-icon>
              ${j("TOGGLE_CONTROLS")}
            </mov-dropdown-item>
          </mov-dropdown>

          <mov-dropdown
            id="ViewDropdown"
            checkable
          >
            <mov-button
              slot="trigger"
              title="${j("VIEW_MENU")}"
            >
              <mov-icon
                label="View"
                name="IconApiBook"
              ></mov-icon>
            </mov-button>
            <mov-dropdown-item
              id="webComic"
              class="tablets"
              @click="${hn("WebComic")}"
              ?selected=${K("viewMode")==="WebComic"}
            >
              <mov-icon
                slot="icon"
                name="IconSpacingVertical"
              ></mov-icon>
              ${j("VIEW_MODE_WEBCOMIC")} ${a("VIEW_MODE_WEBCOMIC")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="verticalMode"
              class="tablets"
              @click="${hn("Vertical")}"
              ?selected=${K("viewMode")==="Vertical"}
            >
              <mov-icon
                slot="icon"
                name="IconArrowAutofitDown"
              ></mov-icon>
              ${j("VIEW_MODE_VERTICAL")} ${a("VIEW_MODE_VERTICAL")}
            </mov-dropdown-item>
            <mov-divider></mov-divider>
            <mov-dropdown-item
              id="ltrMode"
              @click="${hn("FluidLTR")}"
              ?selected=${K("viewMode")==="FluidLTR"}
            >
              <mov-icon
                slot="icon"
                name="IconArrowAutofitRight"
              ></mov-icon>
              ${j("VIEW_MODE_LEFT")} ${a("VIEW_MODE_LEFT")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="rtlMode"
              @click="${hn("FluidRTL")}"
              ?selected=${K("viewMode")==="FluidRTL"}
            >
              <mov-icon
                slot="icon"
                name="IconArrowAutofitLeft"
              ></mov-icon>
              ${j("VIEW_MODE_RIGHT")} ${a("VIEW_MODE_RIGHT")}
            </mov-dropdown-item>
            <mov-divider></mov-divider>
            <mov-dropdown-item
              id="BookMode"
              @click="${hn("Book")}"
              ?selected=${K("viewMode")==="Book"}
            >
              <mov-icon
                slot="icon"
                name="IconBookArrowRight"
              ></mov-icon>
              ${j("VIEW_MODE_BOOK")} ${a("VIEW_MODE_BOOK")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="MangaMode"
              @click="${hn("Manga")}"
              ?selected=${K("viewMode")==="Manga"}
            >
              <mov-icon
                slot="icon"
                name="IconBookArrowLeft"
              ></mov-icon>
              ${j("VIEW_MODE_MANGA")} ${a("VIEW_MODE_MANGA")}
            </mov-dropdown-item>
            <mov-divider></mov-divider>
            <mov-dropdown-item
              id="GalleryMode"
              @click="${hn("Gallery")}"
              ?selected=${K("viewMode")==="Gallery"}
            >
              <mov-icon
                slot="icon"
                name="IconLayoutDashboard"
              ></mov-icon>
              ${j("VIEW_MODE_GALLERY")} ${a("VIEW_MODE_GALLERY")}
            </mov-dropdown-item>
          </mov-dropdown>
          <mov-dropdown
            id="ZoomDropdown"
            checkable
          >
            <mov-button
              slot="trigger"
              title="${j("ZOOM_MENU")}"
            >
              <mov-icon
                label="Zoom"
                name="IconZoom"
              ></mov-icon>
            </mov-button>
            <mov-dropdown-item
              id="enlarge"
              @click="${Ma()}"
            >
              <mov-icon
                slot="icon"
                name="IconZoomInArea"
              ></mov-icon>
              ${j("ENLARGE")} ${a("ENLARGE")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="restore"
              @click="${Ao("percent",100)}"
            >
              <mov-icon
                slot="icon"
                name="IconZoomPan"
              ></mov-icon>
              ${j("RESTORE")} ${a("RESTORE")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="reduce"
              @click="${Ma(-1)}"
            >
              <mov-icon
                slot="icon"
                name="IconZoomOutArea"
              ></mov-icon>
              ${j("REDUCE")} ${a("REDUCE")}
            </mov-dropdown-item>
            <mov-divider></mov-divider>
            <mov-dropdown-item
              id="fitWidth"
              @click="${Ao("width")}"
              ?selected=${K("zoomMode")==="width"}
            >
              <mov-icon
                slot="icon"
                name="IconArrowAutofitWidth"
              ></mov-icon>
              ${j("FIT_WIDTH")} ${a("FIT_WIDTH")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="fitHeight"
              @click="${Ao("height")}"
              ?selected=${K("zoomMode")==="height"}
            >
              <mov-icon
                slot="icon"
                name="IconArrowAutofitHeight"
              ></mov-icon>
              ${j("FIT_HEIGHT")} ${a("FIT_HEIGHT")}
            </mov-dropdown-item>
          </mov-dropdown>
        </div>
        <div id="ViewerTitle">
          <h1
            id="MangaTitle"
            title="${this.manga.title}"
          >
            ${this.titleController.value??this.manga.title}
          </h1>
        </div>
        <div id="ZoomControl">
          <input
            type="range"
            id="Zoom"
            name="Zoom"
            .value="${K("zoomValue")}"
            min="${K("minZoom")}"
            max="200"
            @input=${ob}
          />
          <span id="ZoomVal">
            Zoom:
            ${K("zoomMode")==="percent"?`${K("zoomValue")}%`:K("zoomMode")}</span
          >
        </div>
        <div
          id="GlobalFunctions"
          class="button-group"
        >
          <mov-button
            id="series"
            href="${this.manga.series??De}"
            @click=${hi}
            title="${j("RETURN_CHAPTER_LIST")}"
            ?disabled=${!this.manga.series}
          >
            <mov-icon name="IconBooksReturn"></mov-icon>
          </mov-button>
          <mov-button
            id="download"
            title="${j("DOWNLOAD_ZIP")}"
            @click=${F0}
            ?disabled=${fe("download")!=="available"}
            ?loading=${fe("download")==="working"}
          >
            <mov-icon
              name="${fe("download")==="working"?"IconLoader2":"IconFileDownload"}"
            ></mov-icon>
          </mov-button>
          <mov-button
            id="prev"
            href="${this.manga.prev??De}"
            title="${j("PREVIOUS_CHAPTER")}"
            @click=${hi}
            ?disabled=${!this.manga.prev}
          >
            <mov-icon name="IconArrowBigLeft"></mov-icon>
          </mov-button>
          <mov-button
            id="next"
            href="${this.manga.next??De}"
            title="${j("NEXT_CHAPTER")}"
            @click=${hi}
            ?disabled=${!this.manga.next}
          >
            <mov-icon name="IconArrowBigRight"></mov-icon>
          </mov-button>
        </div>
      </header>
    `}};G([Wr("#MangaTitle")],Ia.prototype,"mangaTitleElement",void 0),G([re({type:Object})],Ia.prototype,"manga",void 0),Ia=G([ut("reader-header"),(0,So.useStores)(At,io,Yt)],Ia);var Sb="#BookmarksPanel{text-align:center;--width:100vw}#BookmarksList{flex-direction:column;gap:5px;max-height:60vh;padding:0 5px;display:flex;overflow:auto}.bookmark-item{text-align:left;border-radius:5px;align-items:center;gap:1rem;padding:.75rem 1rem;transition:background-color .15s ease-in-out;display:flex}.bookmark-item:hover{background-color:var(--mov-color-fill-quiet,#8080801a)}.bookmark-info{flex-grow:1;min-width:0}.bookmark-name{font-weight:500}.bookmark-url{white-space:nowrap;text-overflow:ellipsis;color:color-mix(in oklab, var(--theme-body-text-color), transparent 30%);font-size:.875rem;text-decoration:none;display:block;overflow:hidden}.bookmark-url:hover{text-decoration:underline}.bookmark-details{text-align:right;width:90px;color:color-mix(in oklab, var(--theme-body-text-color), transparent 30%);flex-shrink:0;font-size:.875rem}.bookmark-details>div{padding:2px 0}.bookmark-actions{flex-shrink:0;gap:.5rem;display:flex}",ah=class extends Qe{static{this.styles=[Xt(Sb)]}listBookmarks(){return ys(K("bookmarks"))?[j("LIST_EMPTY")]:K("bookmarks").map((t,r)=>ce`
        <div
          id="Bookmark${r+1}"
          class="bookmark-item"
        >
          <div class="bookmark-info">
            <div class="bookmark-name">${t.name}</div>
            <a
              class="bookmark-url"
              href="${t.url}"
              target="_blank"
              >${t.url}</a
            >
          </div>
          <div class="bookmark-details">
            <div class="bookmark-date">${new Date(t.date).toISOString().slice(0,10)}</div>
            <div class="bookmark-page">Page: ${t.page}</div>
          </div>
          <div class="bookmark-actions">
            <a
              href="${t.url}"
              target="_blank"
            >
              <mov-button
                title="Open Bookmark"
                size="small"
              >
                <mov-icon
                  name="IconExternalLink"
                  size="16px"
                ></mov-icon>
              </mov-button>
            </a>
            <mov-button
              title="Delete Bookmark"
              size="small"
              value="${t.url}"
              @click=${bb}
            >
              <mov-icon
                name="IconTrash"
                size="16px"
              ></mov-icon>
            </mov-button>
          </div>
        </div>
      `)}render(){return ce`
      <mov-dialog
        id="BookmarksPanel"
        ?open=${fe("panel")==="bookmarks"}
        light-dismiss
        @close=${Rl}
      >
        <mov-button
          class="Bookmark"
          title="${j("BOOKMARK")}"
          @click=${oh}
          slot="header-actions"
        >
          <mov-icon
            name="${so()===void 0?"IconBookmark":"IconBookmarkOff"}"
            size="24px"
          ></mov-icon>
        </mov-button>
        <h2 slot="header">${j("BOOKMARKS")}</h2>
        <h2 slot="label">${j("BOOKMARKS")}</h2>
        <div id="BookmarksList">${this.listBookmarks()}</div>
      </mov-dialog>
    `}};ah=G([ut("bookmark-panel"),(0,So.useStores)(At,io,Yt)],ah);function*Mb(e,t){const r=typeof t=="function";if(e!==void 0){let i=-1;for(const a of e)i>-1&&(yield r?t(i):t),i++,yield a}}var xb="#KeybindingsPanel div{line-height:1.5em}#KeybindingsPanel #KeybindingsList{grid-template-columns:1fr 2fr;gap:5px;display:grid}#KeybindingsPanel .ControlButton{justify-content:center;align-items:center;gap:.5em;margin-left:3px;padding:5px 10px}#KeybindingsPanel label{display:ruby}#KeybindingsPanel input{width:100%;display:inline-block}#KeybindingsPanel #HotKeysRules{grid-column:span 2}",sh=class extends Qe{constructor(...t){super(...t),this.keybindsRefs=Me.default.keys(K("keybinds")).reduce((r,i)=>(r[i]=Ts(),r),{})}static{this.styles=[Xt(xb),Xt(nh)]}keybindList(){const t=K("keybinds");return Me.default.keys(t).map(r=>{const i=t[r]?.length?Mb(t[r]?.map(a=>ce`<kbd class="dark">${a}</kbd>`)," / "):"";return ce`<span>${j(r)}:</span> <span>${i}</span>`})}keybindEditor(){const t=K("keybinds");return Me.default.keys(t).map(r=>ce`<label for="${r}">${j(r)}:</label>
          <input
            type="text"
            class="KeybindInput"
            id="${r}"
            name="${r}"
            value="${t[r]?.join(" , ")??De}"
            ${Rs(this.keybindsRefs[r])}
          />`)}render(){return ce`
      <mov-drawer
        id="KeybindingsPanel"
        ?open=${fe("panel").startsWith("keybindings")}
        placement="end"
        @close=${Rl}
      >
        <h2 slot="label">${j("KEYBINDINGS")}</h2>
        <div
          class="controls"
          slot="header-actions"
        >
          ${fe("panel")==="keybindingsEditor"?ce` <mov-button
                id="SaveKeybindings"
                type="button"
                title="${j("SAVE_KEYBINDS")}"
                @click=${()=>kb(this.keybindsRefs)}
              >
                <mov-icon
                  name="IconDeviceFloppy"
                  size="16px"
                  slot="start"
                ></mov-icon>
                ${j("BUTTON_SAVE")}
              </mov-button>`:ce` <mov-button
                id="EditKeybindings"
                type="button"
                title="${j("EDIT_KEYBINDS")}"
                @click=${Eb}
              >
                <mov-icon
                  name="IconPencil"
                  size="16px"
                  slot="start"
                ></mov-icon>
                ${j("BUTTON_EDIT")}
              </mov-button>`}
        </div>
        <div id="KeybindingsList">
          ${fe("panel")==="keybindingsEditor"?this.keybindEditor():this.keybindList()}
        </div>
        <div id="HotKeysRules">${P0(j("KEYBIND_RULES"))}</div>
      </mov-drawer>
    `}};sh=G([ut("keybindings-panel"),(0,So.useStores)(At,io,Yt)],sh);function*Ib(e,t){if(e!==void 0){let r=0;for(const i of e)yield t(i,r++)}}function wi(e,t=1){return Array(e).fill(0).map((r,i)=>i+1).filter(r=>r>=t)}function lh(e){e.deltaY&&(e.currentTarget.scrollLeft+=e.deltaY+e.deltaX,e.preventDefault())}function Cb(e){e.deltaY&&(e.currentTarget.scrollLeft-=e.deltaY-e.deltaX,e.preventDefault())}var Ob=":host{--nav-collapsed-size:34px;--nav-expanded-size:200px;--header-height:80px}#Navigation{color:var(--theme-text-color);background-color:var(--theme-hightlight-color);box-sizing:border-box;white-space:nowrap;text-align:center;z-index:1000;gap:5px;line-height:0;transition:all .3s;display:flex;position:fixed;overflow:hidden}#Thumbnails{flex-grow:1;justify-content:flex-start;gap:5px;display:flex}#Navigation.horizontal #Thumbnails{flex-direction:row;overflow:auto hidden}#Navigation.vertical #Thumbnails{flex-direction:column;justify-content:flex-start;overflow:hidden auto}#Navigation.left #Thumbnails{direction:rtl}:host(:not([forceExpanded])) #Navigation:not(:hover) #Thumbnails{display:none}#NavigationCounters{text-align:center;white-space:nowrap;flex-shrink:0;justify-content:center;align-items:center;gap:.5rem;padding:5px;line-height:1rem;display:flex}#Navigation.horizontal{height:var(--nav-collapsed-size);flex-direction:column;width:100%;left:0;right:0}:host([forceExpanded]) #Navigation.horizontal,#Navigation.horizontal:hover{height:var(--nav-expanded-size)}#Navigation.bottom{bottom:0}#Navigation.vertical{width:var(--nav-collapsed-size);flex-direction:row;height:100%;transition:top .3s,height .3s,width .3s;bottom:0}:host([forceExpanded]) #Navigation.vertical,#Navigation.vertical:hover{width:var(--nav-expanded-size)}#Navigation.left{flex-direction:row-reverse;left:0}#Navigation.right{right:0}#Navigation.vertical #NavigationCounters{writing-mode:vertical-rl;transform:rotate(180deg)}#Navigation.right #NavigationCounters{transform:rotate(0)}#Navigation.vertical.header{top:var(--header-height);height:calc(100% - var(--header-height))}#Navigation .Thumbnail{justify-content:center;align-items:center;width:150px;height:150px;margin:0 5px;display:inline-flex;position:relative}.ThumbnailIndex{color:var(--mov-color-on-loud);background-color:var(--mov-color-fill-loud);opacity:.9;text-align:center;z-index:1;width:100%;font-weight:600;line-height:1.2rem;display:block;position:absolute;bottom:30%;left:0}.ThumbnailImg{cursor:pointer;background-position:50%;background-repeat:no-repeat;background-size:48px 48px;min-width:80px;max-width:150px;min-height:150px;max-height:150px;display:inline-block}",_i=class extends Qe{constructor(...t){super(...t),this.mode="bottom",this.forceExpanded=!1,this.isHiding=!1}static{this.styles=[Xt(Ob),Ot`
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
        background-image: url('${Xt(ci(El))}');
      }

      .Thumbnail .ThumbnailImg.imgBroken {
        background-image: url('${Xt(ci(Al))}');
      }
    `]}willUpdate(t){t.has("mode")&&(this.isHiding=!0)}updated(t){t.has("mode")&&this.isHiding&&setTimeout(()=>{this.isHiding=!1},50)}render(){if(this.mode==="disabled")return De;const t=fe("manga"),r={horizontal:this.mode==="bottom",vertical:this.mode!=="bottom",left:this.mode==="left",right:this.mode==="right",bottom:this.mode==="bottom",hiding:this.isHiding},i=fe("images")||{},a=Me.default.keys(i).filter(s=>{const c=parseInt(s,10);return c>=(t?.begin??1)&&c<=(t?.pages??1)&&i[c]?.status==="loaded"}).length;return ce`
      <nav
        id="Navigation"
        class="${Tt(r)}"
      >
        <div
          id="NavigationCounters"
          class="ControlLabel"
        >
          ${q3}
          <i>${a}</i> /
          <b> ${(t?.pages??1)-((t?.begin??1)-1)} </b>
          ${j("PAGES_LOADED")}
          <span>: ${fe("currentPage")}</span>
        </div>
        <div
          id="Thumbnails"
          @wheel=${this.mode==="bottom"?lh:null}
        >
          ${Ib(wi(t?.pages??1,t?.begin??1),s=>ce` <figure
                id="Thumbnail${s}"
                class="Thumbnail"
                role="button"
                tabindex="0"
                title="Go to page ${s}"
                @click=${()=>w6(s)}
              >
                <img
                  id="ThumbnailImg${s}"
                  alt=""
                  class="ThumbnailImg"
                  src=${fe("images")?.[s]?.src??De}
                />
                <figcaption class="ThumbnailIndex">${s}</figcaption>
              </figure>`)}
        </div>
      </nav>
    `}};G([re({type:String})],_i.prototype,"mode",void 0),G([re({type:Boolean})],_i.prototype,"forceExpanded",void 0),G([cn()],_i.prototype,"isHiding",void 0),_i=G([ut("navbar-thumbnails"),(0,So.useStores)(At,io,Yt)],_i);function Tb(){const e=Br()?"true":"false";return ce` <div class="ControlLabel">
    ${j("SCOPE")}
    <segmented-control
      .value=${e}
      @change=${N6}
    >
      <segmented-control-option
        value="false"
        label=${j("GLOBAL")}
        icon="IconWorldCog"
      ></segmented-control-option>
      <segmented-control-option
        value="true"
        label=${window.location.hostname}
        icon="IconLocationCog"
      ></segmented-control-option>
    </segmented-control>
  </div>`}function Lb(){return oo.map(e=>ce`
      <option
        value="${e.ID}"
        ?selected=${K("locale")===e.ID}
      >
        ${e.NAME}
      </option>
    `)}function Rb(){return ce` <div class="ControlLabel locale">
    ${j("LANGUAGE")}
    <select
      id="locale"
      @change="${H6}"
    >
      ${Lb()}
    </select>
  </div>`}var Pb=()=>ce`${Tb()} ${Rb()}`;function $b(){return ce`
    <div class="ControlLabel loadMode">
      ${j("DEFAULT_LOAD_MODE")}
      <select
        id="loadMode"
        @change="${F6}"
      >
        <option
          value="wait"
          ?selected=${K("loadMode")==="wait"}
        >
          ${j("LOAD_MODE_NORMAL")}
        </option>
        <option
          value="always"
          ?selected=${K("loadMode")==="always"}
        >
          ${j("LOAD_MODE_ALWAYS")}
        </option>
        <option
          value="never"
          ?selected=${K("loadMode")==="never"}
        >
          ${j("LOAD_MODE_NEVER")}
        </option>
      </select>
    </div>
  `}function Db(){return ce`
    <div class="ControlLabel PagesPerSecond">
      ${j("LOAD_SPEED")}
      <select
        id="PagesPerSecond"
        @change="${q6}"
      >
        <option
          value="Safe"
          ?selected=${K("loadSpeed")==="Safe"}
        >
          ${j("SLOWLY")} (Safe)
        </option>
        <option
          value="Standard"
          ?selected=${K("loadSpeed")==="Standard"}
        >
          ${j("NORMAL")} (Standard)
        </option>
        <option
          value="Faster"
          ?selected=${K("loadSpeed")==="Faster"}
        >
          ${j("FAST")} (Faster)
        </option>
        <option
          value="Extreme"
          ?selected=${K("loadSpeed")==="Extreme"}
        >
          ${j("EXTREME")} (Extreme)
        </option>
        <option
          value="All"
          ?selected=${K("loadSpeed")==="All"}
        >
          ${j("ALL_PAGES")} (All)
        </option>
      </select>
    </div>
  `}var zb=()=>ce`${$b()} ${Db()}`;function Bb(){return ce`
    <div class="ControlLabel fitIfOversize">
      ${j("FIT_WIDTH_OVERSIZED")}
      <mov-switch
        name="fitIfOversize"
        ?checked=${K("fitWidthIfOversize")}
        @change=${G6}
      ></mov-switch>
    </div>
    <div class="ControlLabel downloadZip">
      ${j("DOWNLOAD_IMAGES")}
      <mov-switch
        name="downloadZip"
        ?checked=${K("downloadZip")}
        @change=${V6}
      ></mov-switch>
    </div>
    <div class="ControlLabel hidePageControls">
      ${j("HIDE_CONTROLS")}
      <mov-switch
        name="hidePageControls"
        ?checked=${K("hidePageControls")}
        @change=${X6}
      ></mov-switch>
    </div>
    <div class="ControlLabel lazyLoadImages">
      ${j("LAZY_LOAD_IMAGES_ENABLE")}
      <mov-switch
        name="lazyLoadImages"
        ?checked=${K("lazyLoadImages")}
        @change=${Z6}
      ></mov-switch>
    </div>
  `}function Nb(){return ce`
    <div
      class="${Tt({ControlLabel:!0,lazyStart:!0,ControlLabelItem:!0,show:K("lazyLoadImages")})}"
    >
      <span>
        ${j("LAZY_LOAD_IMAGES")}
        <output
          id="lazyStartVal"
          for="lazyStart"
        >
          ${K("lazyStart")}
        </output>
      </span>
      <input
        type="range"
        value="${K("lazyStart")}"
        name="lazyStart"
        id="lazyStart"
        min="5"
        max="100"
        step="5"
        oninput="lazyStartVal.value = this.value"
        @change="${j6}"
      />
    </div>
  `}function Hb(){return ce`
    <div class="ControlLabel headerType">
      ${j("HEADER_TYPE")}
      <segmented-control
        .value=${K("header")}
        @change=${J6}
        labelPosition="bottom"
      >
        <segmented-control-option
          value="hover"
          label=${j("HEADER_HOVER")}
          icon="arrows-move"
        ></segmented-control-option>
        <segmented-control-option
          value="scroll"
          label=${j("HEADER_SCROLL")}
          icon="arrows-vertical"
        ></segmented-control-option>
        <segmented-control-option
          value="click"
          label=${j("HEADER_CLICK")}
          icon="hand-click"
        ></segmented-control-option>
        <segmented-control-option
          value="fixed"
          label=${j("HEADER_FIXED")}
          icon="pin"
        ></segmented-control-option>
        <segmented-control-option
          value="simple"
          label=${j("HEADER_SIMPLE")}
          icon="box-align-top"
        ></segmented-control-option>
      </segmented-control>
    </div>
  `}function Fb(){return ce`
    <div class="ControlLabel pagination">
      ${j("PAGINATION_TYPE")}
      <segmented-control
        .value=${K("pagination")}
        @change=${U6}
        labelPosition="side"
      >
        <segmented-control-option
          value="disabled"
          label=${j("PAGINATION_DISABLED")}
          icon="x"
        ></segmented-control-option>
        <segmented-control-option
          value="slider"
          label=${j("PAGINATION_SLIDER")}
          icon="adjustments-horizontal"
        ></segmented-control-option>
        <segmented-control-option
          value="side-arrows"
          label=${j("PAGINATION_ARROWS")}
          icon="arrows-left-right"
        ></segmented-control-option>
        <segmented-control-option
          value="both"
          label=${j("PAGINATION_BOTH")}
          icon="arrows-horizontal"
        ></segmented-control-option>
      </segmented-control>
    </div>
  `}function Gb(){return ce`
    <div class="ControlLabel navbarType">
      ${j("NAVBAR_TYPE")}
      <segmented-control
        .value=${K("navbar")}
        @change=${W6}
        labelPosition="tooltip"
      >
        <segmented-control-option
          value="bottom"
          label=${j("NAVBAR_BOTTOM")}
          icon="layout-bottombar"
        ></segmented-control-option>
        <segmented-control-option
          value="left"
          label=${j("NAVBAR_LEFT")}
          icon="layout-sidebar"
        ></segmented-control-option>
        <segmented-control-option
          value="right"
          label=${j("NAVBAR_RIGHT")}
          icon="layout-sidebar-right"
        ></segmented-control-option>
        <segmented-control-option
          value="disabled"
          label=${j("NAVBAR_DISABLED")}
          icon="x"
        ></segmented-control-option>
      </segmented-control>
    </div>
  `}function Wb(){return ce`
    <div class="ControlLabel autoScroll">
      <span>
        ${j("AUTO_SCROLL_HEIGHT")}
        <output
          id="scrollHeightVal"
          class="RangeValue"
          for="scrollHeight"
        >
          ${K("scrollHeight")}px
        </output>
      </span>
      <input
        type="range"
        value="${K("scrollHeight")}"
        name="scrollHeight"
        id="scrollHeight"
        min="1"
        max="${Math.ceil(window.innerHeight/200)*100}"
        step="1"
        @input="${Q6}"
      />
    </div>
  `}var Ub=()=>ce`${Bb()} ${Fb()} ${Nb()} ${Hb()} ${Gb()} ${Wb()}`;function Vb(){const e=K("colorScheme")==="dark";_t("colorScheme",e?"light":"dark"),document.documentElement.classList.remove(e?"dark":"light"),document.documentElement.classList.add(K("colorScheme"))}function Ca(e){_t("theme",e instanceof CustomEvent?e.detail.value:e.currentTarget.value)}function Zb(){return ce`
    <div class="ControlLabel ColorSchemeSelector">
      <label>${j("COLOR_SCHEME")}</label>
      <toggle-button
        id="ColorScheme"
        mode="theme"
        @click=${Vb}
        ?active=${K("colorScheme")==="dark"}
      >
      </toggle-button>
    </div>
    <div class="ControlLabel ThemeSelector">
      <label>${j("THEME_COLOR")}</label>
      <mov-color-picker
        id="ThemeHex"
        .value="${K("theme")}"
        title="${K("theme")}"
        @input=${Ca}
        .swatches=${Me.default.values(ml)}
      ></mov-color-picker>
    </div>
    <color-palette
      .baseColor="${K("theme")}"
      mode="steps"
      .selected=${K("theme")}
      @change="${Ca}"
    ></color-palette>
    <span id="ColorRecommendations">
      ${Me.default.values(ml).map(e=>ce`<color-swatch
            .color="${e}"
            .selected=${K("theme")}
            @change=${Ca}
          ></color-swatch>`)}
    </span>
    <details class="ControlLabel">
      <summary>${j("THEME_HUE")} & ${j("THEME_SHADE")}</summary>
      <color-panel
        .selected=${K("theme")}
        @change=${Ca}
      ></color-panel>
    </details>
  `}function jb(){return ce` <div class="ControlLabel DefaultZoomMode">
    ${j("DEFAULT_ZOOM_MODE")}
    <segmented-control
      .value=${K("zoomMode")}
      @change=${nb}
      labelPosition="tooltip"
    >
      <segmented-control-option
        value="percent"
        label=${j("PERCENT")}
        icon="file-percent"
      ></segmented-control-option>
      <segmented-control-option
        value="width"
        label=${j("FIT_WIDTH")}
        icon="arrow-autofit-width"
      ></segmented-control-option>
      <segmented-control-option
        value="height"
        label=${j("FIT_HEIGHT")}
        icon="arrow-autofit-height"
      ></segmented-control-option>
    </segmented-control>
  </div>`}function qb(){return ce`
    <div
      class="${Tt({ControlLabel:!0,zoomValue:!0,ControlLabelItem:!0,show:K("zoomMode")==="percent"})}"
    >
      <span>
        ${j("DEFAULT_ZOOM")}
        <output
          id="zoomValueVal"
          class="RangeValue"
          for="zoomValue"
        >
          ${K("zoomValue")}%
        </output>
      </span>
      <input
        type="range"
        value="${K("zoomValue")}"
        name="zoomValue"
        id="zoomValue"
        min="5"
        max="200"
        step="5"
        list="zoomValueList"
        @input="${rb}"
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
  `}function Kb(){return ce`
    <div class="ControlLabel minZoom">
      <span>
        ${j("MINIMUM_ZOOM")}
        <output
          id="minZoomVal"
          class="RangeValue"
          for="minZoom"
        >
          ${K("minZoom")}%
        </output>
      </span>
      <input
        type="range"
        value="${K("minZoom")}"
        name="minZoom"
        id="minZoom"
        min="25"
        max="100"
        step="5"
        @input="${Y6}"
        list="minZoomList"
      />
      <datalist id="minZoomList">
        <option value="25">25</option>
        <option value="50">50</option>
        <option value="75">75</option>
        <option value="100">100</option>
      </datalist>
    </div>
  `}function Yb(){return ce`
    <div class="ControlLabel zoomStep">
      <span>
        ${j("ZOOM_STEP")}
        <output
          id="zoomStepVal"
          class="RangeValue"
          for="zoomStep"
        >
          ${K("zoomStep")}%
        </output>
      </span>
      <input
        type="range"
        value="${K("zoomStep")}"
        name="zoomStep"
        id="zoomStep"
        min="10"
        max="50"
        step="5"
        @input="${K6}"
        list="zoomStepList"
      />
      <datalist id="zoomStepList">
        <option value="10">10</option>
        <option value="30">30</option>
        <option value="50">50</option>
      </datalist>
    </div>
  `}function Xb(){return ce`
    <div class="ControlLabel viewMode">
      ${j("DEFAULT_VIEW_MODE")}
      <segmented-control
        .value=${K("viewMode")}
        @change=${ib}
        labelPosition="tooltip"
      >
        <segmented-control-option
          value="Vertical"
          label=${j("VIEW_MODE_VERTICAL")}
          icon="arrow-autofit-down"
        ></segmented-control-option>
        <segmented-control-option
          value="WebComic"
          label=${j("VIEW_MODE_WEBCOMIC")}
          icon="spacing-vertical"
        ></segmented-control-option>
        <segmented-control-option
          value="FluidLTR"
          label=${j("VIEW_MODE_LEFT")}
          icon="arrow-autofit-right"
        ></segmented-control-option>
        <segmented-control-option
          value="FluidRTL"
          label=${j("VIEW_MODE_RIGHT")}
          icon="arrow-autofit-left"
        ></segmented-control-option>
        <segmented-control-option
            value="Book"
            label=${j("VIEW_MODE_BOOK")}
            icon="IconBookArrowRight"
        ></segmented-control-option>
        <segmented-control-option
            value="Manga"
            label=${j("VIEW_MODE_MANGA")}
            icon="IconBookArrowLeft"
        ></segmented-control-option>
        <segmented-control-option
            value="Gallery"
            label=${j("VIEW_MODE_GALLERY")}
            icon="IconLayoutDashboard"
        ></segmented-control-option>
      </segmented-control>
    </div>
  `}var Jb=()=>ce`${jb()} ${qb()} ${Kb()} ${Yb()} ${Xb()}`,Qb="#SettingsPanel{color:var(--theme-text-color)}#SettingsPanel fieldset{border:1px solid var(--theme-body-text-color);border-radius:10px;padding:3px}#SettingsPanel .ControlLabel{flex-flow:wrap;justify-content:space-between;align-items:center;padding:2px;display:flex}#SettingsPanel .ControlLabelItem{justify-content:space-between;align-items:center;display:flex}#SettingsPanel .ControlLabelItem:not(.show){display:none}#SettingsPanel input[type=range]{width:100%}#SettingsPanel .RangeValue{color:var(--mov-color-on-loud);text-align:center;background:var(--mov-color-fill-loud);border-radius:3px;margin-left:8px;padding:2px 5px;line-height:20px;display:inline-block}#SettingsPanel datalist{flex-direction:row;justify-content:space-between;width:100%;display:flex}#SettingsPanel datalist option{writing-mode:vertical-lr;padding:0}#ThemeSelector{width:110px}#ColorRecommendations{flex-flow:wrap;gap:2px;display:flex}#Chapter:not(.Vertical)~#SettingsPanel .verticalSeparator{display:none}#ColorScheme{min-width:28px;min-height:28px;padding:5px}#ResetSettings,#ResetSettings::part(base){width:100%}",ch=class extends Qe{static{this.styles=[Ot`
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
    `,Xt(Qb)]}render(){return ce`
      <mov-drawer
        id="SettingsPanel"
        ?open=${fe("panel")==="settings"}
        @close=${Rl}
        placement="start"
        class="${fe("device")}"
      >
        <h2 slot="label">${j("SETTINGS")}</h2>
        <mov-button
          id="ResetSettings"
          @click="${Wp}"
          title="${j("BUTTON_RESET_SETTINGS")}"
        >
          <mov-icon
            name="IconSettingsOff"
            size="20px"
            slot="start"
          ></mov-icon>
          ${j("BUTTON_RESET_SETTINGS")}
        </mov-button>
        <div class="content">
          <fieldset id="SettingsPanelGeneral">
            <legend>${j("GENERAL")}</legend>
            ${Pb()}
          </fieldset>
          <fieldset id="SettingsPanelTheme">
            <legend>${j("THEME")}</legend>
            ${Zb()}
          </fieldset>
          <fieldset id="SettingsPanelLoading">
            <legend>${j("LOADING")}</legend>
            ${zb()}
          </fieldset>
          <fieldset id="SettingsPanelZoom">
            <legend>${j("ZOOM")}</legend>
            ${Jb()}
          </fieldset>
          <fieldset id="SettingsPanelOthers">
            <legend>${j("OTHERS")}</legend>
            ${Ub()}
          </fieldset>
        </div>
      </mov-drawer>
    `}};ch=G([ut("settings-panel"),(0,So.useStores)(At,io,Yt)],ch);function e9(e){return new Promise(function(t,r){var i=new FileReader,a=typeof i.readAsBinaryString=="function";i.onloadend=function(){var s=i.result||"";if(a)return t(s);t(r9(s))},i.onerror=r,a?i.readAsBinaryString(e):i.readAsArrayBuffer(e)})}function t9(e){return e9(e).then(btoa)}function n9(e){return t9(e).then(function(t){return"data:"+e.type+";base64,"+t})}function r9(e){for(var t="",r=new Uint8Array(e),i=r.byteLength,a=-1;++a<i;)t+=String.fromCharCode(r[a]);return t}async function o9(e,t){ke("Fetching page: ",e);try{const r=await(await fetch(e)).text();return new DOMParser().parseFromString(r,t)}catch(r){throw ke("Failed to fetch page: ",r),r}}async function i9(e){return o9(e,"text/html")}async function a9(e,t,r){try{return(await i9(e)).querySelector(t)?.getAttribute(r)}catch(i){return ke("Failed to get element attribute: ",i),null}}var s9=class{constructor(e,t){this.queue=[],this.activeCount=0,this.lastRunTime=0;const r={Safe:{concurrency:5,delay:1e3},Standard:{concurrency:5,delay:500},Faster:{concurrency:10,delay:500},Extreme:{concurrency:10,delay:250},All:{concurrency:20,delay:50}}[e];this.maxConcurrency=r.concurrency,this.minDelay=t??r.delay}add(e){this.queue.push(e),this.runNext()}async runNext(){if(this.activeCount>=this.maxConcurrency||this.queue.length===0)return;const e=Date.now()-this.lastRunTime;if(e<this.minDelay){setTimeout(()=>this.runNext(),this.minDelay-e);return}const t=this.queue.shift();if(t){this.activeCount+=1,this.lastRunTime=Date.now();try{await t()}finally{this.activeCount-=1,this.runNext()}}}},Pl;function l9(e){if(e){let t=e.trim();return t.startsWith("//")&&(t=`https:${t}`),t}return""}async function Oa(e,t,r){const i=fe("images")?.[t];i?.status&&i.status!=="pending"||(Pn(t,()=>({status:"loading"})),Pl.add(async()=>{let a=l9(r),s,c="loaded";try{const u=await fetch(a,e.fetchOptions);u.ok?(s=await u.blob(),a=await n9(s)):c="error"}catch(u){ke("Failed to fetch image",u),c="error"}Pn(t,()=>({src:a,blob:s,status:c})),yn("Loaded Image:",t,"Source:",a)}),e.pages===t&&rh())}async function dh(e,t,r){const i=fe("images")?.[t];i?.status&&i.status!=="pending"||(Pn(t,()=>({status:"loading"})),Pl.add(async()=>{try{const a=await a9(r,e.img,e.lazyAttr??"src");a?(Pn(t,()=>({status:"pending"})),await Oa(e,t,a)):Pn(t,()=>({status:"error"}))}catch(a){ke("Failed to get page attribute",a),Pn(t,()=>({status:"error"}))}}))}function uh(e,t){wi(t.pages,e).filter((r,i)=>!(t.lazy??K("lazyLoadImages"))||i<=K("lazyStart")).forEach(r=>{dh(t,r,t.listPages[r-1])})}function hh(e,t){wi(t.pages,e).filter((r,i)=>!(t.lazy??K("lazyLoadImages"))||i<=K("lazyStart")).forEach(r=>{Oa(t,r,t.listImages[r-1])})}async function c9(){await ks(()=>fe("manga")!==void 0);const e=fe("manga"),t=e.begin??1;Pl=new s9(K("loadSpeed"),e.timer),yn("Loading Images"),yn(`Speed: ${K("loadSpeed")}`),yn(`Lazy: ${e.lazy??K("lazyLoadImages")}, Starting from: ${K("lazyStart")}`),Vr(),Jc(e)?(yn("Method: Images:",e.listImages),hh(t,e)):Qc(e)?(yn("Method: Pages:",e.listPages),uh(t,e)):a2(e)?(yn("Method: Brute Force"),e.bruteForce({begin:t,addImg:Oa,loadImages(r){hh(t,{...e,listImages:r})},loadPages(r,i,a){uh(t,{...e,listPages:r,img:i,lazyAttr:a})},wait:0})):ke("No Loading Method Found"),Yt.listen((r,i,a)=>{if(a==="currentPage"&&r.currentPage>i.currentPage)for(let s=r.currentPage;s<Math.min(r.currentPage+5,e.pages+1);s++)r.images?.[s]?.src!==void 0||r.images?.[s]?.status==="loading"||(Jc(e)?Oa(e,s,e.listImages[s-1]):Qc(e)&&dh(e,s,e.listPages[s-1]))})}function d9(){const e=fe("images");if(!e)return null;const t=K("viewMode"),r=t==="FluidLTR"||t==="FluidRTL",i=t==="FluidRTL",a=window.innerHeight/2,s=window.innerWidth/2;let c=null;for(const u in e){const d=e[u].ref?.value;if(!d)continue;const h=d?.getBoundingClientRect();let f;r?i?f=h.right:f=h.left:f=h.top,(r?f<=s:f<=a)&&(!c||f>c.edge)&&(c={index:parseInt(u,10),edge:f})}return c?c.index:fe("manga")?.begin??1}function fh(){const e=d9();e!=null&&fe("currentPage")!==e&&Re("currentPage",e)}function u9(){const e=Me.default.throttle(()=>{requestAnimationFrame(fh)},100);window.addEventListener("scroll",e,{passive:!0}),window.addEventListener("resize",e),fe("chapter").value?.addEventListener("scroll",e,{passive:!0}),requestAnimationFrame(fh)}function ph(){if(!fe("chapter").value){setTimeout(ph,50);return}u9()}var gh=Me.default.debounce(()=>{Re("device",Fo()),Vr()},200);async function h9(){await ks(()=>fe("manga")!==void 0),th(),window.addEventListener("resize",gh),window.addEventListener("orientationchange",gh),L6(),ph()}var f9=wn(((e,t)=>{(function(r,i){typeof define=="function"&&define.amd?define(i):typeof e=="object"?t.exports=i():r.NProgress=i()})(e,function(){var r={};r.version="0.2.0";var i=r.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};r.configure=function(g){var k,_;for(k in g)_=g[k],_!==void 0&&g.hasOwnProperty(k)&&(i[k]=_);return this},r.status=null,r.set=function(g){var k=r.isStarted();g=a(g,i.minimum,1),r.status=g===1?null:g;var _=r.render(!k),E=_.querySelector(i.barSelector),M=i.speed,T=i.easing;return _.offsetWidth,u(function(C){i.positionUsing===""&&(i.positionUsing=r.getPositioningCSS()),d(E,c(g,M,T)),g===1?(d(_,{transition:"none",opacity:1}),_.offsetWidth,setTimeout(function(){d(_,{transition:"all "+M+"ms linear",opacity:0}),setTimeout(function(){r.remove(),C()},M)},M)):setTimeout(C,M)}),this},r.isStarted=function(){return typeof r.status=="number"},r.start=function(){r.status||r.set(0);var g=function(){setTimeout(function(){r.status&&(r.trickle(),g())},i.trickleSpeed)};return i.trickle&&g(),this},r.done=function(g){return!g&&!r.status?this:r.inc(.3+.5*Math.random()).set(1)},r.inc=function(g){var k=r.status;return k?(typeof g!="number"&&(g=(1-k)*a(Math.random()*k,.1,.95)),k=a(k+g,0,.994),r.set(k)):r.start()},r.trickle=function(){return r.inc(Math.random()*i.trickleRate)},(function(){var g=0,k=0;r.promise=function(_){return!_||_.state()==="resolved"?this:(k===0&&r.start(),g++,k++,_.always(function(){k--,k===0?(g=0,r.done()):r.set((g-k)/g)}),this)}})(),r.render=function(g){if(r.isRendered())return document.getElementById("nprogress");f(document.documentElement,"nprogress-busy");var k=document.createElement("div");k.id="nprogress",k.innerHTML=i.template;var _=k.querySelector(i.barSelector),E=g?"-100":s(r.status||0),M=document.querySelector(i.parent),T;return d(_,{transition:"all 0 linear",transform:"translate3d("+E+"%,0,0)"}),i.showSpinner||(T=k.querySelector(i.spinnerSelector),T&&m(T)),M!=document.body&&f(M,"nprogress-custom-parent"),M.appendChild(k),k},r.remove=function(){b(document.documentElement,"nprogress-busy"),b(document.querySelector(i.parent),"nprogress-custom-parent");var g=document.getElementById("nprogress");g&&m(g)},r.isRendered=function(){return!!document.getElementById("nprogress")},r.getPositioningCSS=function(){var g=document.body.style,k="WebkitTransform"in g?"Webkit":"MozTransform"in g?"Moz":"msTransform"in g?"ms":"OTransform"in g?"O":"";return k+"Perspective"in g?"translate3d":k+"Transform"in g?"translate":"margin"};function a(g,k,_){return g<k?k:g>_?_:g}function s(g){return(-1+g)*100}function c(g,k,_){var E;return i.positionUsing==="translate3d"?E={transform:"translate3d("+s(g)+"%,0,0)"}:i.positionUsing==="translate"?E={transform:"translate("+s(g)+"%,0)"}:E={"margin-left":s(g)+"%"},E.transition="all "+k+"ms "+_,E}var u=(function(){var g=[];function k(){var _=g.shift();_&&_(k)}return function(_){g.push(_),g.length==1&&k()}})(),d=(function(){var g=["Webkit","O","Moz","ms"],k={};function _(C){return C.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(D,q){return q.toUpperCase()})}function E(C){var D=document.body.style;if(C in D)return C;for(var q=g.length,Z=C.charAt(0).toUpperCase()+C.slice(1),ne;q--;)if(ne=g[q]+Z,ne in D)return ne;return C}function M(C){return C=_(C),k[C]||(k[C]=E(C))}function T(C,D,q){D=M(D),C.style[D]=q}return function(C,D){var q=arguments,Z,ne;if(q.length==2)for(Z in D)ne=D[Z],ne!==void 0&&D.hasOwnProperty(Z)&&T(C,Z,ne);else T(C,q[1],q[2])}})();function h(g,k){return(typeof g=="string"?g:v(g)).indexOf(" "+k+" ")>=0}function f(g,k){var _=v(g),E=_+k;h(_,k)||(g.className=E.substring(1))}function b(g,k){var _=v(g),E;h(g,k)&&(E=_.replace(" "+k+" "," "),g.className=E.substring(1,E.length-1))}function v(g){return(" "+(g.className||"")+" ").replace(/\s+/gi," ")}function m(g){g&&g.parentNode&&g.parentNode.removeChild(g)}return r})})),p9=Bi(f9(),1);function g9(e,t){const r=e.replace(/[?&]forceReload=\d+$/,"");return`${r+(r.includes("?")?"&":"?")}forceReload=${t}`}function m9(e){let t=1;const r=e?.match(/forceReload=(\d+)$/);return r?.at(1)&&(t=parseInt(r[1],10)+1),t}function mh(e,t){ke(`Reloading Page ${e}`,t);const r=fe("images")?.[e]?.src;if(!r)return;const i=m9(r);i>K("maxReload")||(t?.removeAttribute("src"),M2(r)||x2(r)?t?.setAttribute("src",r):t?.setAttribute("src",g9(r,i)))}function v9(e){const t=e.currentTarget,r=parseInt(t.value,10),i=fe("images")?.[r]?.ref?.value;i&&mh(r,i)}function b9(e){const t=e.currentTarget;Pn(parseInt(t.value,10),r=>({hide:!r.hide}))}function w9(e){const t=e.currentTarget;Pn(parseInt(t.id.replace("PageImg",""),10),u=>({...Q0({naturalWidth:t.naturalWidth,naturalHeight:t.naturalHeight}),status:"loaded",doublePage:t.naturalWidth>t.naturalHeight}));const r=fe("manga"),i=fe("images")||{},a=Me.default.keys(i).filter(u=>{const d=parseInt(u,10);return d>=(r?.begin??1)&&d<=(r?.pages??1)&&i[d]?.status==="loaded"}).length,s=(r?.pages??1)-((r?.begin??1)-1),c=Math.floor(a/s*100);document.title=`(${c}%) ${fe("manga")?.title}`,p9.default.configure({showSpinner:!1}).set(a/s),ke(`Progress: ${c}%`),a===s&&(ke("Images Loading Complete"),Re("download","available"),K("downloadZip")&&F0())}function _9(e){const t=e.currentTarget;if(ys(t.getAttribute("src")))return;const r=parseInt(t.id.replace("PageImg",""),10);Pn(r,()=>({status:"error"})),mh(r,t)}function y9(e){const t=e.currentTarget,r=parseInt(t.value,10),i=fe("images"),a=fe("images")?.[r];a?.naturalWidth&&Re("images",{...i,[r]:{...a,width:(a?.width||a?.naturalWidth)*(1+K("zoomStep")/100),height:void 0}})}function k9(e){const t=e.currentTarget,r=parseInt(t.value,10),i=fe("images"),a=fe("images")?.[r];a?.naturalWidth&&Re("images",{...i,[r]:{...a,width:(a?.width||a?.naturalWidth)*(1-K("zoomStep")/100),height:void 0}})}function E9(e){const t=e.currentTarget,r=parseInt(t.value,10),i=fe("images"),a=fe("images")?.[r];a&&Re("images",{...i,[r]:{...a,width:void 0,height:void 0}})}function A9(e){const t=e.currentTarget,r=parseInt(t.value,10),i=fe("images"),a=fe("images")?.[r];a&&Re("images",{...i,[r]:{...a,width:window.innerWidth+(K("navbar")==="left"||K("navbar")==="right"?-34:0),height:void 0}})}function S9(e){const t=e.currentTarget,r=parseInt(t.value,10),i=fe("images"),a=fe("images")?.[r];a&&Re("images",{...i,[r]:{...a,width:void 0,height:window.innerHeight+(K("navbar")==="bottom"?-34:0)}})}function M9(e){const t=fe("images")?.[e],r=K("viewMode").match(/^(Book|Manga)$/),i=K("viewMode")==="Gallery",a=K("viewMode").startsWith("Fluid"),s=K("navbar")==="bottom";return{width:t?.width?`${t.width}px`:"auto",height:t?.height?`${t.height}px`:"auto","max-height":a?`${window.innerHeight+(s?-34:0)}px`:void 0,"min-width":!r&&!i?`${K("minZoom")}vw`:void 0}}var x9=(e,t)=>wi(e,t).map(r=>{fe("images")?.[r]?.ref||Pn(r,d=>({ref:Ts()}));let i=0;for(let d=r-1;d>=t&&!fe("images")?.[d].doublePage;d--)fe("images")?.[d].doublePage||i++;const a=fe("images")?.[r].doublePage??!1,s=K("viewMode")==="Book",c=!a&&(s?i%2===0:i%2===1),u=!a&&(s?i%2===1:i%2===0);return ce`
      <div
        id="Page${r}"
        class="${Tt({MangaPage:!0,hide:!!fe("images")?.[r].hide,DoublePage:a,LeftPage:c&&!a,RightPage:u&&!a})}"
      >
        <div class="PageFunctions">
          <button
            class="Bookmark PageButton"
            title="${j("BOOKMARK")}"
            @click=${oh}
            value="${r}"
          >
            ${so()?j3:Z3}
          </button>
          <button
            class="ZoomIn PageButton"
            title="${j("ZOOM_IN")}"
            @click=${y9}
            value="${r}"
          >
            ${e6}
          </button>
          <button
            class="ZoomRestore PageButton"
            title="${j("ZOOM_RESET")}"
            @click=${E9}
            value="${r}"
          >
            ${Q3}
          </button>
          <button
            class="ZoomOut PageButton"
            title="${j("ZOOM_OUT")}"
            @click=${k9}
            value="${r}"
          >
            ${t6}
          </button>
          <button
            class="ZoomHeight PageButton"
            title="${j("ZOOM_HEIGHT")}"
            @click=${S9}
            value="${r}"
          >
            ${U3}
          </button>
          ${K("viewMode").match(/^(Book|Manga)$/)?ce`
            <button
              class="DoublePage PageButton"
              title="${j("DOUBLE_PAGE")}"
              @click=${()=>{Pn(r,d=>({doublePage:!d.doublePage}))}}
              value="${r}"
            >
              ${J3}
            </button>`:ce`
              <button
                class="ZoomWidth PageButton"
                title="${j("ZOOM_WIDTH")}"
                @click=${A9}
                value="${r}"
              >
                ${V3}
              </button>`}
          <button
            class="Hide PageButton"
            title="${j("HIDE")}"
            @click=${b9}
            value="${r}"
          >
            ${fe("images")?.[r].hide?K3:Y3}
          </button>
          <button
            class="Reload PageButton"
            title="${j("RELOAD")}"
            @click=${v9}
            value="${r}"
          >
            ${X3}
          </button>
          <span class="PageIndex">${r}</span>
        </div>
        <div class="PageContent">
          <img
            id="PageImg${r}"
            alt="Page ${r}"
            class="${Tt({PageImg:!0,imgBroken:fe("images")?.[r]?.status==="error"})}"
            src=${fe("images")?.[r]?.src??De}
            style="${Gn(M9(r))}"
            @load=${w9}
            @error=${_9}
            ${Rs(fe("images")?.[r].ref)}
          />
        </div>
      </div>
      <div class="separator">
        [ ${r===e?j("END"):`${r} / ${e}`} ]
      </div>
    `}),I9=e=>ce`
  <main
    id="Chapter"
    ${Rs(fe("chapter"))}
    class="${Tt({fitWidthIfOversize:K("fitWidthIfOversize"),[K("viewMode")]:!0,separator:K("viewMode")==="Vertical"})}"
    @wheel=${t=>{K("viewMode")==="FluidLTR"?lh(t):K("viewMode")==="FluidRTL"&&Cb(t)}}
  >
    ${x9(e.pages,e.begin??0)}
  </main>
`,C9=":root:not(.light,.dark){--theme-body-background:#25262b;--theme-body-text-color:#c1c2c5;--theme-text-color:#c1c2c5;--theme-primary-color:#1a1b1e;--theme-primary-text-color:#c1c2c5;--theme-background-color:#25262b;--theme-hightlight-color:#2c2e33;--theme-border-color:#373a40;--theme-secondary-color:#2c2e33;--theme-secondary-text-color:#c1c2c5}:host{box-sizing:border-box}#MangaOnlineViewer{color:var(--theme-body-text-color);background-color:var(--theme-body-background);box-sizing:border-box;min-height:100vh;text-decoration:none}#Chapter{box-sizing:border-box;grid-template-columns:repeat(1,1fr);min-width:225px;display:grid}#Chapter.Vertical:has(+#Navigation:not(.disabled)),#Chapter.WebComic:has(+#Navigation:not(.disabled)){padding-bottom:31px}#Chapter.Vertical .PageContent{margin-top:8px;margin-bottom:8px}.closeButton{width:fit-content;height:fit-content;position:absolute;top:10px;right:10px}.overlay{z-index:950;cursor:pointer;background-color:#00000080;width:100%;height:100%;display:none;position:fixed;inset:0}.overlay.visible{display:block}select{height:20px;margin:2px}:not(.FluidRTL,.FluidLTR).fitWidthIfOversize .PageContent .PageImg{object-fit:contain;max-width:100%}.hideControls .PageFunctions{visibility:hidden}",O9="@keyframes spin{to{transform:rotate(360deg)}}@keyframes spin-reverse{0%{transform:rotate(360deg)}to{transform:rotate(0)}}.icon-tabler-loader-2,.animate-spin{animation:1s linear infinite spin}.animate-spin-reverse{animation:1s linear infinite spin-reverse}",T9="#Chapter:where(.Book,.Manga){grid-template-columns:1fr 1fr;grid-auto-flow:row;gap:0;width:100%;min-width:auto;display:grid}#Chapter:where(.Book,.Manga) .MangaPage{width:100%;min-height:22px;display:block;position:relative;overflow:hidden}#Chapter:where(.Book,.Manga) .MangaPage .PageFunctions{border-radius:0 0 0 4px;flex-direction:row;top:0;left:auto;right:0}#Chapter:where(.Book,.Manga) .MangaPage.LeftPage .PageFunctions{border-radius:0 0 4px;flex-direction:row-reverse;left:0;right:auto}#Chapter:where(.Book,.Manga) .MangaPage.DoublePage{grid-column:span 2}#Chapter:where(.Book,.Manga) .MangaPage .PageContent{flex-shrink:0;justify-content:center;align-items:center;display:flex;overflow:hidden}#Chapter:where(.Book,.Manga) .MangaPage.LeftPage .PageContent{justify-content:flex-end;padding-right:0}#Chapter:where(.Book,.Manga) .MangaPage.RightPage .PageContent{justify-content:flex-start;padding-left:0}#Chapter:where(.Book,.Manga) .MangaPage.DoublePage .PageContent{justify-content:center}#Chapter.Manga{direction:rtl}#Chapter.Manga .MangaPage{direction:ltr}",L9="#Chapter.FluidLTR,#Chapter.FluidRTL{min-width:auto;display:flex;overflow-x:auto;& .ZoomWidth{display:none}& .PageImg{min-width:unset}& .MangaPage{width:initial;min-width:fit-content;position:relative}& .MangaPage.DoublePage{grid-column:span 2}}#Chapter.FluidLTR{flex-direction:row;& .MangaPage .PageFunctions{direction:rtl;left:0;right:auto}}#Chapter.FluidRTL{flex-direction:row-reverse}",R9="#Chapter.Gallery{flex-wrap:wrap;justify-content:center;gap:10px;padding:10px;display:flex}.Gallery .MangaPage{width:auto;min-width:unset;flex:0 auto}.Gallery .MangaPage .PageContent .PageImg{min-width:unset}.Gallery .PageFunctions,.Gallery .separator{display:none}",P9='.PageButton .icon-tabler{vertical-align:sub;width:1rem;height:1rem}.PageButton,.PageButton:visited,.PageButton:link{cursor:pointer;min-height:32px;color:var(--mov-color-on-loud);background-color:var(--mov-color-fill-loud);border-style:solid;border-width:1px;border-color:var(--theme-border-color);border-radius:5px;padding:2px;text-decoration:none}.PageButton:active,.PageButton:hover{opacity:.8}.PageButton[selected]{background-color:var(--mov-color-fill-normal);color:var(--mov-color-on-normal);border:1px solid var(--theme-border-color)}.PageButton.hidden{display:none}.MangaPage{text-align:center;width:100%;min-width:100%;min-height:22px;line-height:0;display:inline-block}.PageContent{text-align:center;max-width:100%;height:100%;transition:all .3s ease-in-out;display:inline-block;overflow:auto hidden}.MangaPage.hide .PageContent{height:0}.PageContent .PageImg[src=""],.PageContent .PageImg:not([src]),.PageContent .PageImg.imgBroken{background-position:50%;background-repeat:no-repeat;background-size:20%;background-color:var(--theme-hightlight-color);text-align:center;vertical-align:top;width:40vw;height:80vh;color:var(--theme-text-color);min-width:40vw;max-width:100%;min-height:50vh;max-height:100%;margin:0;font-size:1rem;line-height:80vh;display:inline-block;position:relative}.PageContent .PageImg[src=""]:before,.PageContent .PageImg:not([src]):before,.PageContent .PageImg.imgBroken:before{content:attr(alt);white-space:pre-wrap;text-align:center;color:var(--theme-text-color);font-size:1rem;position:absolute;top:40%;left:50%;transform:translate(-50%,-50%)}.PageFunctions{justify-content:flex-end;align-items:center;gap:3px;margin:0;padding:0;font-family:monospace;display:flex;position:absolute;right:0}.PageFunctions>.PageIndex{background-color:var(--mov-color-fill-loud);color:var(--mov-color-on-loud);text-align:center;border-radius:5px;min-width:20px;padding:3px 5px;line-height:1rem;display:inline-block}.PageFunctions .PageButton{opacity:.5;border-width:0;justify-content:center;align-items:center;min-height:auto;margin:0;padding:3px;display:flex}.PageFunctions:hover .PageButton{opacity:1}.PageFunctions .PageButton:hover{opacity:.9}#Chapter.Vertical .separator{text-align:center;align-items:center;font-style:italic;display:flex}#Chapter.Vertical .separator:before,#Chapter.Vertical .separator:after{content:"";border-bottom:1px solid var(--theme-text-color);flex:1}#Chapter.Vertical.separator:not(:empty):before{margin-right:.25em}#Chapter.Vertical.separator:not(:empty):after{margin-left:.25em}#Chapter:not(.separator) .separator,#Chapter:not(.Vertical) .separator{display:none}',$9="html{font-size:100%}body{color:var(--theme-body-text-color);background-color:var(--theme-body-background);margin:0;padding:0;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:14px;line-height:20px}a,a:link,a:visited,a:active,a:focus{color:var(--theme-body-text-color);text-decoration:none}img{vertical-align:middle;border:0;height:auto}",D9=Bd`
  .PageContent .PageImg[src=''],
  .PageContent .PageImg:not([src]) {
    background-image: url('${ci(El)}');
  }

  .PageContent .PageImg.imgBroken {
    background-image: url('${ci(Al)}');
  }

  ${$9}
  ${C9}
  ${P9}
  ${L9}
  ${T9}
  ${R9}
  ${ih}
  ${O9}
`,z9=(e="#MangaOnlineViewer",t=K("theme"))=>{const r=B0(t),i=_o(t),a=K("colorScheme")==="dark"?r[8]:r[2];return Bd`
    :where(:root),
    ${e}, .dark,
    ${e}.dark {
      --theme-primary-color: ${t};
      --theme-primary-text-color: ${i};
      --theme-secondary-color: ${a};
      --theme-secondary-text-color: ${_o(a)};

      color-scheme: dark;
      --theme-body-background: ${Et.dark[600]};
      --theme-body-text-color: ${Et.dark[50]};
      --theme-text-color: ${Et.dark[50]};
      --theme-background-color: ${Et.dark[600]};
      --theme-hightlight-color: ${Et.dark[500]};
      --theme-border-color: ${Et.dark[400]};

      --mov-color-fill-quiet: ${r[9]};
      --mov-color-fill-normal: var(--theme-secondary-color, ${r[8]});
      --mov-color-fill-loud: var(--theme-primary-color);
      --mov-color-border-quiet: ${r[8]};
      --mov-color-border-normal: ${r[7]};
      --mov-color-border-loud: ${r[6]};
      --mov-color-on-quiet: ${r[4]};
      --mov-color-on-normal: var(--theme-secondary-text-color, ${r[3]});
      --mov-color-on-loud: var(--theme-primary-text-color, white);

      --mov-color-mix-hover: black 8%;
      --mov-color-mix-active: black 16%;
    }

    .light,
    ${e}.light {
      color-scheme: light;
      --theme-body-background: ${Et.gray[50]};
      --theme-body-text-color: ${Et.gray[900]};
      --theme-text-color: ${Et.gray[900]};
      --theme-background-color: ${Et.gray[50]};
      --theme-hightlight-color: ${Et.gray[500]};
      --theme-border-color: ${Et.gray[100]};

      --mov-color-fill-quiet: ${r[0]};
      --mov-color-fill-normal: var(--theme-secondary-color, ${r[1]});
      --mov-color-fill-loud: var(--theme-primary-color);
      --mov-color-border-quiet: ${r[1]};
      --mov-color-border-normal: ${r[2]};
      --mov-color-border-loud: ${r[4]};
      --mov-color-on-quiet: ${r[6]};
      --mov-color-on-normal: var(--theme-secondary-text-color, ${r[3]});
      --mov-color-on-loud: var(--theme-primary-text-color, white);

      --mov-color-mix-hover: black 10%;
      --mov-color-mix-active: black 20%;
    }
  `},B9="#StartMOV{all:revert;backface-visibility:hidden;color:#fff;cursor:pointer;text-align:center;z-index:105000;background-image:linear-gradient(90deg,#667eea,#764ba2,#6b8dd6,#8e37d7);background-size:300% 100%;border:none;border-radius:10px;width:80%;min-height:50px;margin:0 auto;padding:.5rem 1rem;font-size:2rem;transition:all .4s ease-in-out;position:fixed;bottom:0;left:0;right:0;box-shadow:0 4px 15px #744fa8bf}#StartMOV:hover{background-position:100% 0;transition:all .4s ease-in-out}#StartMOV:focus{outline:none}",Mo=class extends Qe{constructor(...t){super(...t),this.mangaPages=0,this.begin=1,this.timeoutMs=3e3,this.status="initial-prompt"}static{this.styles=[Xt(B9)]}connectedCallback(){super.connectedCallback(),this.status==="initial-prompt"&&(this.timeoutId=window.setTimeout(()=>{this.handleStart()},this.timeoutMs))}disconnectedCallback(){super.disconnectedCallback(),window.clearTimeout(this.timeoutId)}handleStart(){window.clearTimeout(this.timeoutId),this.dispatchEvent(new CustomEvent("start",{detail:null}))}handleLateStart(t,r){this.dispatchEvent(new CustomEvent("start",{detail:{begin:t,end:r}}))}handleButtonCLick(){this.status="late-start-prompt"}handleDialogClose(t){t.stopPropagation(),window.clearTimeout(this.timeoutId),this.status="late-start-button"}render(){switch(this.status){case"late-start-button":return this.renderLateStartButton();case"late-start-prompt":return this.renderLateStartPrompt();default:return this.renderInitialPrompt()}}renderInitialPrompt(){return ce`
      <mov-dialog
        ?open=${this.status==="initial-prompt"}
        icon="info"
        @close=${this.handleDialogClose}
      >
        <span slot="label">${j("STARTING")}</span>
        <div style="padding: 1rem;">${j("WAITING")}</div>
        <div
          slot="footer"
          style="display: flex; justify-content: space-between; padding: 0.5rem 1rem 1rem;"
        >
          <mov-button
            @click=${this.handleDialogClose}
            style="--mov-color-fill-loud: ${Et.red[700]}; --mov-color-on-loud: white;"
          >
            Cancel
          </mov-button>
          <mov-button
            @click=${this.handleStart}
            style="--mov-color-fill-loud: ${Et.green[700]}; --mov-color-on-loud: white;"
          >
            Start Now
          </mov-button>
        </div>
      </mov-dialog>
    `}renderLateStartButton(){return ce`
      <button
        id="StartMOV"
        @click=${this.handleButtonCLick}
      >
        ${j("BUTTON_START")}
      </button>
    `}renderLateStartPrompt(){let t=this.begin,r=this.mangaPages;const i=a=>{[t,r]=[a.detail.value1,a.detail.value2]};return ce`
      <mov-dialog
        ?open=${this.status==="late-start-prompt"}
        icon="question"
        @close=${this.handleDialogClose}
      >
        <span slot="label">${j("STARTING")}</span>
        <div style="padding: 1rem;">
          ${j("CHOOSE_BEGINNING")}
          <div
            id="pageInputGroup"
            style="padding: 1rem 0;"
          >
            <tc-range-slider
              id="pagesSlider"
              theme="glass"
              css-links="https://cdn.jsdelivr.net/npm/toolcool-range-slider@4.0.28/dist/plugins/tcrs-themes.min.css"
              min="1"
              max="${this.mangaPages}"
              round="0"
              step="1"
              value1="${t}"
              value2="${r}"
              data="${wi(this.mangaPages).join(", ")}"
              marks="true"
              marks-count="11"
              marks-values-count="11"
              generate-labels="true"
              slider-width="100%"
              pointers-overlap="false"
              generate-labels-text-color="var(--mov-color-on-loud)"
              @change=${i}
            ></tc-range-slider>
          </div>
        </div>
        <div
          slot="footer"
          style="display: flex; justify-content: flex-end; gap: 0.5rem; padding: 0.5rem 1rem 1rem;"
        >
          <mov-button
            @click=${this.handleDialogClose}
            style="--mov-color-fill-loud: ${Et.red[700]}; --mov-color-on-loud: white;"
          >
            Close
          </mov-button>
          <mov-button
            @click=${()=>this.handleLateStart(t,r)}
            style="--mov-color-fill-loud: ${Et.green[700]}; --mov-color-on-loud: white;"
          >
            Run
          </mov-button>
        </div>
      </mov-dialog>
    `}};G([re({type:Number,reflect:!0})],Mo.prototype,"mangaPages",void 0),G([re({type:Number,reflect:!0})],Mo.prototype,"begin",void 0),G([re({type:Number})],Mo.prototype,"timeoutMs",void 0),G([re({type:String,reflect:!0})],Mo.prototype,"status",void 0),Mo=G([ut("script-startup")],Mo);function N9(e){if(!e?.parentNode)return e;const t=e.cloneNode(!0);return e.parentNode.replaceChild(t,e),t}var H9=e=>{e.getAttributeNames().forEach(t=>{e?.removeAttribute(t)})},F9=(...e)=>{e?.forEach(H9),e?.forEach(N9)};function G9(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var vh,Ta=class extends Qe{constructor(...t){super(...t),this.loadMode="wait"}static{this.styles=[Ot``,Xt(D9)]}async start(t,r){this.manga&&(document.documentElement.hasAttribute("mov")||(F9(document.documentElement,document.head,document.body),document.documentElement.setAttribute("mov","")),window.scrollTo(0,0),Re("manga",{...this.manga,begin:t??this.manga.begin,pages:r??this.manga.pages}))}firstUpdated(){this.loadMode==="always"&&this.start(),h9(),c9()}render(){const t=fe("manga"),r=fe("dialog");return ce`
      <style>
        ${z9()}
      </style>
      <div
        id="MangaOnlineViewer"
        class="${Tt({[K("colorScheme")]:!0,hideControls:K("hidePageControls"),bookmarked:!!so(),[fe("device")]:!0})}"
        style="${Gn({[`padding-${K("navbar")}`]:"34px"})}"
        .locale="${K("locale")}"
      >
        ${t?ce`
              <reader-header .manga=${t}></reader-header>
              ${I9(t)}
              <navbar-thumbnails
                .mode=${K("navbar")}
              ></navbar-thumbnails>
              <manga-pagination
                .mode="${K("pagination")}"
                .startPage=${t.begin}
                .totalPages=${t.pages}
                .currentPage=${fe("currentPage")}
                .next=${t.next}
                .prev=${t.prev}
              ></manga-pagination>
              <keybindings-panel></keybindings-panel>
              <bookmark-panel></bookmark-panel>
              <settings-panel></settings-panel>
              <moaqz-toaster dismissable></moaqz-toaster>`:ce(vh||(vh=G9([`
              <script-startup
                .mangaPages="`,`"
                begin="`,`"
                initialStatus="`,`"
                @start=`,`
              ><\/script-startup>`])),this.manga?.pages,this.manga?.begin,N0(this.loadMode,[["wait",()=>"initial-prompt"],["never",()=>"late-start-button"]]),i=>{this.start(i.detail?.begin,i.detail?.end)})}
        ${r?ce`
              <mov-dialog
                open
                .icon=${r.icon}
                @close=${()=>Re("dialog",null)}
              >
                <span slot="label">${r.title}</span>
                ${r.content} ${r.footer}
              </mov-dialog>
            `:""}
      </div>
    `}};G([re({type:String,reflect:!0})],Ta.prototype,"loadMode",void 0),G([re({type:Object})],Ta.prototype,"manga",void 0),Ta=G([ut("manga-online-viewer"),(0,So.useStores)(At,io,Yt)],Ta);var $l="@moaqzdev/toast",W9=class _s extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static#e=3e3;parseDuration(t){if(t==="none"||Number.isInteger(t)&&t>_s.#e)return t;const r=this.getAttribute("duration");if(r){const i=Number.parseInt(r);if(!Number.isNaN(i))return i}return _s.#e}async createToast({title:t,type:r,description:i,onConfirm:a,onCancel:s,confirmText:c="✅",cancelText:u="❌",duration:d}){const h=this.shadowRoot.querySelector("#toast-tmpl").content.cloneNode(!0),f={container:h.querySelector("[data-toast]"),title:h.querySelector("[data-title]"),description:h.querySelector("[data-description]"),actions:h.querySelector("[data-actions]"),confirmBtn:h.querySelector("button[data-action-type='confirm']"),cancelBtn:h.querySelector("button[data-action-type='cancel']"),closeBtn:h.querySelector("[data-close-button]")};d=this.parseDuration(d),f.title.textContent=t||"",f.container.setAttribute("data-type",r),i==null?f.description?.remove():f.description.textContent=i;const b=()=>this.removeToast(f.container);if(r==="confirm"?(f.confirmBtn.textContent=c,f.confirmBtn.addEventListener("click",()=>{a?.(),b()},{once:!0}),f.cancelBtn.textContent=u,f.cancelBtn.addEventListener("click",()=>{s?.(),b()},{once:!0})):f.actions?.remove(),this.hasAttribute("dismissable")?f.closeBtn.addEventListener("click",b,{once:!0}):f.closeBtn?.remove(),this.shadowRoot.querySelector("[data-toaster]").appendChild(h),d!=="none"){const v=new AbortController,m=Date.now();let g=null,k=0;const _=()=>{v.abort(),b()};let E=setTimeout(_,d);const M=()=>{g??(clearTimeout(E),g=Date.now())},T=()=>{g!=null&&(k=g-m,g=null,E=setTimeout(_,Math.max(d-k,0)))};["focusin","pointerenter","mouseenter"].forEach(C=>{f.container.addEventListener(C,M,{signal:v.signal})}),["focusout","pointerleave","mouseleave"].forEach(C=>{f.container.addEventListener(C,T,{signal:v.signal})})}}removeToast(t){t.animate([{opacity:1},{opacity:0}],{duration:300,easing:"ease",fill:"forwards"}).finished.then(()=>t.remove())}handleEvent(t){if(t instanceof CustomEvent&&t.type===$l){const r=t.detail;this.createToast(r)}}connectedCallback(){this.render(),document.addEventListener($l,this)}disconnectedCallback(){document.removeEventListener($l,this)}render(){this.shadowRoot.innerHTML=`
    <style>${_s.STYLES}</style>

    <template id="toast-tmpl">
      <li data-toast tabindex="0">
        <button data-close-button aria-label="Close">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="14" 
            height="14" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            stroke-width="2" 
            stroke-linecap="round" 
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
          </svg>
        </button>
        <p data-title></p>
        <p data-description></p>
        <div data-actions>
          <button type="button" data-action-type="confirm"></button>
          <button type="button" data-action-type="cancel"></button>
        </div>
      </li>
    </template>

    <ol data-toaster tabindex="-1"></ol>`}static STYLES=`
  * {
    box-sizing: border-box;
  }

  :host {
    --_travel-distance: var(--toast-travel-distance, 5vh);

    --_toast-background: var(--toast-background, #FCFCFC);
    --_toast-border: var(--toast-border, #00000026);
    --_toast-title: var(--toast-title, #000000DF);
    --_toast-description: var(--toast-description, #0000009B);

    --_toast-success: var(--toast-success, #00924BA4);
    --_toast-error: var(--toast-error, #D2000571);
    --_toast-warning: var(--toast-warning, #E35F00AA);
    --_toast-info: var(--toast-info, #0084E6A1);
    --_toast-confirm: var(--toast-confirm, #6600C06C);

    --_toast-actions-direction: var(--toast-actions-direction, row);
    --_toast-actions-justify: var(--toast-actions-justify, flex-end);
    --_toast-actions-gap: var(--toast-actions-gap, 0.25rem);

    --_toast-actions-confirm-text-color: var(--toast-actions-confirm-text-color, white);
    --_toast-actions-confirm-background-color: var(--toast-actions-confirm-background-color, #00713FDE);
    --_toast-actions-cancel-text-color: var(--toast-actions-cancel-text-color, white);
    --_toast-actions-cancel-background-color: var(--toast-actions-cancel-background-color, #C40006D3);
  }

  @media (prefers-color-scheme: dark) {
    :host {
      --_toast-background: var(--toast-background, #111111);
      --_toast-border: var(--toast-border,  #FFFFFF2C);
      --_toast-title: var(--toast-title, #FFFFFFED);
      --_toast-description: var(--toast-description, #FFFFFFAF);
  
      --_toast-success: var(--toast-success, #54FFAD73);
      --_toast-error: var(--toast-error, #FF5D61B0);
      --_toast-warning: var(--toast-warning, #FE84389D);
      --_toast-info: var(--toast-info, #3094FEB9);
      --_toast-confirm: var(--toast-confirm, #C47EFFA4);

      --_toast-actions-confirm-text-color: var(--toast-actions-confirm-text-color, white);
      --_toast-actions-confirm-background-color: var(--toast-actions-confirm-background-color, #54FFAD73);
      --_toast-actions-cancel-text-color: var(--toast-actions-cancel-text-color, white);
      --_toast-actions-cancel-background-color: var(--toast-actions-cancel-background-color, #FF5D61B0);
    }
  }

  @keyframes slide-in {
    from { 
      transform: translateY(var(--_travel-distance)) 
    }
  }

  @keyframes fade-in {
    from { opacity: 0 }
    to { opacity: 1 }
  }

  [data-toaster] {
    --container-width: 20rem;

    position: fixed;
    z-index: 999;
    width: var(--container-width);
    height: 100dvh;
    max-height: 100dvh;
    overflow: hidden;
    top: 0;
    right: 0;
    pointer-events: none;
    margin: 0;
    padding: 1rem;
    display: flex;
    flex-direction: column-reverse;
    gap: 0.5rem;
  }

  :host([position="bottom-right"]) [data-toaster] {
    top: 0;
    right: 0;
  }
  
  :host([position="bottom-left"]) [data-toaster] {
    top: 0;
    left: 0;
  }

  :host([position="bottom-center"]) [data-toaster] {
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
  
  :host([position="top-right"]) [data-toaster] {
    top: 0;
    right: 0;
    flex-direction: column;
  }
  
  :host([position="top-left"]) [data-toaster] {
    top: 0;
    left: 0;
    flex-direction: column;
  }

  :host([position="top-center"]) [data-toaster] {
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    flex-direction: column;
  }

  [data-toast] {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    position: relative;

    pointer-events: none;
    user-select: none;

    list-style: none;
    background-color: var(--_toast-background);
    padding: 1rem;
    border: 1px solid var(--_toast-border);
    border-radius: 0.25rem;
    pointer-events: all;

    will-change: transform;
    animation: fade-in .3s ease, slide-in .3s ease;

    @media (prefers-reduced-motion: reduce){
      --_travel-distance: 0;
    }
  
    &[data-type="success"] {
      border-top: 4px solid var(--_toast-success);
    }
  
    &[data-type="error"] {
      border-top: 4px solid var(--_toast-error);
    }
  
    &[data-type="info"] {
      border-top: 4px solid var(--_toast-info)
    }

    &[data-type="warning"] {
      border-top: 4px solid var(--_toast-warning)
    }

    &[data-type="confirm"] {
      border-top: 4px solid var(--_toast-confirm);
    }
  }

  [data-close-button] {
    --size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--size);
    height: var(--size);
    position: absolute;
    top: 0;
    left: 0;
    color: var(--_toast-title);
    background-color: var(--_toast-background);
    border-radius: 50%;
    border: 1px solid var(--_toast-border);
    padding: 0.125rem;
    translate: -35% -35%;
    cursor: pointer;
  }

  [data-actions] {
    display: flex;
    flex-direction: var(--_toast-actions-direction);
    justify-content: var(--_toast-actions-justify);
    gap: var(--_toast-actions-gap);
    margin-top: 0.5rem;
  }

  button[data-action-type="confirm"],
  button[data-action-type="cancel"] {
    padding: 0.5rem;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
    transition-property: opacity;
    transition-duration: 200ms;

    &:hover,
    &:focus {
      opacity: 0.8;
    }
  }
      
  button[data-action-type="confirm"] {
    color: var(--_toast-actions-confirm-text-color);
    font-weight: 600;
    background-color: var(--_toast-actions-confirm-background-color);
  }

  button[data-action-type="cancel"] {
    color: var(--_toast-actions-cancel-text-color);
    font-weight: 600;
    background-color:var(--_toast-actions-cancel-background-color);
  }
  
  [data-title], [data-description] {
    margin: 0;
    all: initial; 
    font-family: inherit;
    line-height: 1.5;
  }

  [data-title] {
    font-size: 1rem;
    font-weight: 600;
    color: var(--_toast-title);
  }

  [data-description] {
    font-size: 0.875rem;
    color: var(--_toast-description);
    text-wrap: pretty;
  }`};customElements.define("moaqz-toaster",W9);var U9=`/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */
html{-webkit-text-size-adjust:100%;line-height:1.15}body{margin:0}main{display:block}h1{margin:.67em 0;font-size:2em}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace;font-size:1em}a{background-color:#0000}abbr[title]{border-bottom:none;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace;font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{margin:0;font-family:inherit;font-size:100%;line-height:1.15}button,input{overflow:visible}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button}button::-moz-focus-inner{border-style:none;padding:0}[type=button]::-moz-focus-inner{border-style:none;padding:0}[type=reset]::-moz-focus-inner{border-style:none;padding:0}[type=submit]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring{outline:1px dotted buttontext}[type=button]:-moz-focusring{outline:1px dotted buttontext}[type=reset]:-moz-focusring{outline:1px dotted buttontext}[type=submit]:-moz-focusring{outline:1px dotted buttontext}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;white-space:normal;max-width:100%;padding:0;display:table}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button{height:auto}[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template,[hidden]{display:none}`,V9="#nprogress{pointer-events:none}#nprogress .bar{z-index:1031;background:#29d;width:100%;height:2px;position:fixed;top:0;left:0}#nprogress .peg{opacity:1;width:100px;height:100%;display:block;position:absolute;right:0;transform:rotate(3deg)translateY(-4px);box-shadow:0 0 10px #29d,0 0 5px #29d}#nprogress .spinner{z-index:1031;display:block;position:fixed;top:15px;right:15px}#nprogress .spinner-icon{box-sizing:border-box;border:2px solid #0000;border-color:#29d #0000 #0000 #29d;border-radius:50%;width:18px;height:18px;animation:.4s linear infinite nprogress-spinner}.nprogress-custom-parent{position:relative;overflow:hidden}.nprogress-custom-parent #nprogress .spinner,.nprogress-custom-parent #nprogress .bar{position:absolute}@-webkit-keyframes nprogress-spinner{0%{-webkit-transform:rotate(0)}to{-webkit-transform:rotate(360deg)}}@keyframes nprogress-spinner{0%{transform:rotate(0)}to{transform:rotate(360deg)}}",Z9="#nprogress .bar{z-index:1031;background:#29d;width:100%;height:4px;position:fixed;top:0;left:0}html[mov] body>:not(manga-online-viewer,#nprogress){display:none!important}html[mov]{all:unset;font-size:16px}",j9=[U9,V9,Z9].join(`
`);async function bh([e,t]){ke(`Found Pages: ${t.pages} in ${e?.name}`),t.title||(t.title=document.querySelector("title")?.textContent?.trim()),t.begin=so()??t.begin??1,t.before!==void 0&&(yn("Executing Preparation"),await t.before(t.begin??0)),document.head.innerHTML+=z6("externals",j9);const r=document.createElement("manga-online-viewer");r.loadMode=e?.start??K("loadMode"),r.manga=t,document.body.appendChild(r)}async function q9(e){if(ke(`Starting ${Es.script.name} ${Es.script.version} on ${Fo()} ${ap()} with ${sp()}`),e5())return;ke(e.length,"Known Manga Sites:",e);const t=e.filter(i=>i.url.test(window.location.href));ke(t.length,"Found sites:",t);const r=t.map(async i=>{ke(`Testing site: ${i.name}`),await dp(i);const a=await i.run();if(a.pages>0)return[i,a];throw new Error(`${i.name} found ${a.pages} pages`)});try{bh(await Promise.any(r))}catch(i){if(i instanceof AggregateError){ke("All sites failed to run:");for(const a of i.errors)ke(a.message)}else ke("An unexpected error occurred:",i)}}q9(Q2).catch(ke)})();
