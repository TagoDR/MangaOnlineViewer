// ==UserScript==
// @name          Manga OnlineViewer Adult
// @author        Tago
// @updateURL     https://github.com/TagoDR/MangaOnlineViewer/raw/master/dist/Manga_OnlineViewer_Adult.meta.js
// @downloadURL   https://github.com/TagoDR/MangaOnlineViewer/raw/master/dist/Manga_OnlineViewer_Adult.user.js
// @supportURL    https://github.com/TagoDR/MangaOnlineViewer/issues
// @namespace     https://github.com/TagoDR
// @description   Shows all pages at once in online view for these sites: AkumaMoe, BestPornComix, DoujinMoeNM, Dragon Translation, 8Muses.com, 8Muses.io, ExHentai, e-Hentai, FSIComics, FreeAdultComix, GNTAI.net, HDoujin, Hentai2Read, HentaiEra, HentaiForce, HentaiFox, HentaiHand, nHentai.com, HentaIHere, HentaiNexus, HenTalk, Hitomi, Imhentai, KingComix, Chochox, Comics18, Luscious, MultPorn, MyHentaiGallery, nHentai.net, 9Hentai, PornComicsHD, Pururin, SchaleNetwork, Simply-Hentai, TMOHentai, 3Hentai, HentaiVox, Tsumino, vermangasporno, vercomicsporno, wnacg, XlecxOne, xyzcomics, Yabai, Madara WordPress Plugin, AllPornComic, Manytoon, Manga District
// @version       2026.04.20.build-0116
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
// @include       /https?:\/\/(www\.)?akuma\.moe\/g\/.+\/.+/
// @include       /https?:\/\/(www\.)?bestporncomix.com\/gallery\/.+/
// @include       /https?:\/\/(www\.)?doujins.com\/.+/
// @include       /https?:\/\/(www\.)?dragontranslation.net\/leer\/.+/
// @include       /https?:\/\/(comics.)?8muses.(com|io)\/(comics\/)?picture\/.+/
// @include       /https?:\/\/(g\.)?(exhentai|e-hentai).org\/s\/.+\/.+/
// @include       /https?:\/\/(www\.)?fsicomics.com\/.+/
// @include       /https?:\/\/(www\.)?freeadultcomix.com\/.+/
// @include       /https?:\/\/(www\.)?gntai.net\/(?!(category|tags|autores))[^/]+\/.+/
// @include       /https?:\/\/(www\.)?hdoujin\.org\/.+/
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
(function(){var Gf=Object.create,$i=Object.defineProperty,Wf=Object.getOwnPropertyDescriptor,Uf=Object.getOwnPropertyNames,Vf=Object.getPrototypeOf,Zf=Object.prototype.hasOwnProperty,_n=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),Yc=(e,t)=>{let r={};for(var i in e)$i(r,i,{get:e[i],enumerable:!0});return t||$i(r,Symbol.toStringTag,{value:"Module"}),r},jf=(e,t,r,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(var a=Uf(t),s=0,l=a.length,u;s<l;s++)u=a[s],!Zf.call(e,u)&&u!==r&&$i(e,u,{get:(d=>t[d]).bind(null,u),enumerable:!(i=Wf(t,u))||i.enumerable});return e},Di=(e,t,r)=>(r=e!=null?Gf(Vf(e)):{},jf(t||!e||!e.__esModule?$i(r,"default",{value:e,enumerable:!0}):r,e)),qf=_n(((e,t)=>{(function(){var r,i="4.18.1",a=200,s="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",l="Expected a function",u="Invalid `variable` option passed into `_.template`",d="Invalid `imports` option passed into `_.template`",h="__lodash_hash_undefined__",f=500,b="__lodash_placeholder__",v=1,m=2,g=4,k=1,y=2,S=1,M=2,T=4,O=8,z=16,K=32,Z=64,oe=128,G=256,pe=512,we=30,R="...",X=800,E=16,Q=1,Ie=2,ce=3,Ce=1/0,ie=9007199254740991,Me=17976931348623157e292,W=NaN,F=4294967295,Se=F-1,ge=F>>>1,fe=[["ary",oe],["bind",S],["bindKey",M],["curry",O],["curryRight",z],["flip",pe],["partial",K],["partialRight",Z],["rearg",G]],qe="[object Arguments]",gt="[object Array]",Ue="[object AsyncFunction]",Ge="[object Boolean]",ht="[object Date]",mt="[object DOMException]",Zt="[object Error]",Gt="[object Function]",w="[object GeneratorFunction]",J="[object Map]",V="[object Number]",C="[object Null]",I="[object Object]",B="[object Promise]",ae="[object Proxy]",se="[object RegExp]",H="[object Set]",de="[object String]",me="[object Symbol]",ue="[object Undefined]",Ee="[object WeakMap]",et="[object WeakSet]",We="[object ArrayBuffer]",Tt="[object DataView]",nr="[object Float32Array]",Qt="[object Float64Array]",rr="[object Int8Array]",st="[object Int16Array]",Ar="[object Int32Array]",Yr="[object Uint8Array]",pn="[object Uint8ClampedArray]",Io="[object Uint16Array]",wi="[object Uint32Array]",$l=/\b__p \+= '';/g,Dl=/\b(__p \+=) '' \+/g,La=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Mr=/&(?:amp|lt|gt|quot|#39);/g,Xr=/[&<>"']/g,$9=RegExp(Mr.source),D9=RegExp(Xr.source),z9=/<%-([\s\S]+?)%>/g,B9=/<%([\s\S]+?)%>/g,lh=/<%=([\s\S]+?)%>/g,N9=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,H9=/^\w*$/,F9=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,zl=/[\\^$.*+?()[\]{}|]/g,G9=RegExp(zl.source),Bl=/^\s+/,W9=/\s/,U9=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,V9=/\{\n\/\* \[wrapped with (.+)\] \*/,Z9=/,? & /,j9=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,ch=/[()=,{}\[\]\/\s]/,q9=/\\(\\)?/g,K9=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,dh=/\w*$/,Y9=/^[-+]0x[0-9a-f]+$/i,X9=/^0b[01]+$/i,J9=/^\[object .+?Constructor\]$/,Q9=/^0o[0-7]+$/i,e7=/^(?:0|[1-9]\d*)$/,t7=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Ra=/($^)/,n7=/['\n\r\u2028\u2029\\]/g,Pa="\\ud800-\\udfff",uh="\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",hh="\\u2700-\\u27bf",fh="a-z\\xdf-\\xf6\\xf8-\\xff",r7="\\xac\\xb1\\xd7\\xf7",o7="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",i7="\\u2000-\\u206f",a7=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",ph="A-Z\\xc0-\\xd6\\xd8-\\xde",gh="\\ufe0e\\ufe0f",mh=r7+o7+i7+a7,Nl="['’]",s7="["+Pa+"]",vh="["+mh+"]",$a="["+uh+"]",bh="\\d+",l7="["+hh+"]",wh="["+fh+"]",_h="[^"+Pa+mh+bh+hh+fh+ph+"]",Hl="\\ud83c[\\udffb-\\udfff]",c7="(?:"+$a+"|"+Hl+")",yh="[^"+Pa+"]",Fl="(?:\\ud83c[\\udde6-\\uddff]){2}",Gl="[\\ud800-\\udbff][\\udc00-\\udfff]",Co="["+ph+"]",kh="\\u200d",Eh="(?:"+wh+"|"+_h+")",d7="(?:"+Co+"|"+_h+")",Sh="(?:"+Nl+"(?:d|ll|m|re|s|t|ve))?",Ah="(?:"+Nl+"(?:D|LL|M|RE|S|T|VE))?",Mh=c7+"?",xh="["+gh+"]?",u7="(?:"+kh+"(?:"+[yh,Fl,Gl].join("|")+")"+xh+Mh+")*",h7="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",f7="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Ih=xh+Mh+u7,p7="(?:"+[l7,Fl,Gl].join("|")+")"+Ih,g7="(?:"+[yh+$a+"?",$a,Fl,Gl,s7].join("|")+")",m7=RegExp(Nl,"g"),v7=RegExp($a,"g"),Wl=RegExp(Hl+"(?="+Hl+")|"+g7+Ih,"g"),b7=RegExp([Co+"?"+wh+"+"+Sh+"(?="+[vh,Co,"$"].join("|")+")",d7+"+"+Ah+"(?="+[vh,Co+Eh,"$"].join("|")+")",Co+"?"+Eh+"+"+Sh,Co+"+"+Ah,f7,h7,bh,p7].join("|"),"g"),w7=RegExp("["+kh+Pa+uh+gh+"]"),_7=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,y7=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],k7=-1,lt={};lt[nr]=lt[Qt]=lt[rr]=lt[st]=lt[Ar]=lt[Yr]=lt[pn]=lt[Io]=lt[wi]=!0,lt[qe]=lt[gt]=lt[We]=lt[Ge]=lt[Tt]=lt[ht]=lt[Zt]=lt[Gt]=lt[J]=lt[V]=lt[I]=lt[se]=lt[H]=lt[de]=lt[Ee]=!1;var it={};it[qe]=it[gt]=it[We]=it[Tt]=it[Ge]=it[ht]=it[nr]=it[Qt]=it[rr]=it[st]=it[Ar]=it[J]=it[V]=it[I]=it[se]=it[H]=it[de]=it[me]=it[Yr]=it[pn]=it[Io]=it[wi]=!0,it[Zt]=it[Gt]=it[Ee]=!1;var E7={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},S7={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},A7={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},M7={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},x7=parseFloat,I7=parseInt,Ch=typeof global=="object"&&global&&global.Object===Object&&global,C7=typeof self=="object"&&self&&self.Object===Object&&self,Pt=Ch||C7||Function("return this")(),Ul=typeof e=="object"&&e&&!e.nodeType&&e,Jr=Ul&&typeof t=="object"&&t&&!t.nodeType&&t,Oh=Jr&&Jr.exports===Ul,Vl=Oh&&Ch.process,Mn=(function(){try{var D=Jr&&Jr.require&&Jr.require("util").types;return D||Vl&&Vl.binding&&Vl.binding("util")}catch{}})(),Th=Mn&&Mn.isArrayBuffer,Lh=Mn&&Mn.isDate,Rh=Mn&&Mn.isMap,Ph=Mn&&Mn.isRegExp,$h=Mn&&Mn.isSet,Dh=Mn&&Mn.isTypedArray;function gn(D,ee,U){switch(U.length){case 0:return D.call(ee);case 1:return D.call(ee,U[0]);case 2:return D.call(ee,U[0],U[1]);case 3:return D.call(ee,U[0],U[1],U[2])}return D.apply(ee,U)}function O7(D,ee,U,be){for(var $e=-1,Ye=D==null?0:D.length;++$e<Ye;){var Lt=D[$e];ee(be,Lt,U(Lt),D)}return be}function mn(D,ee){for(var U=-1,be=D==null?0:D.length;++U<be&&ee(D[U],U,D)!==!1;);return D}function T7(D,ee){for(var U=D==null?0:D.length;U--&&ee(D[U],U,D)!==!1;);return D}function zh(D,ee){for(var U=-1,be=D==null?0:D.length;++U<be;)if(!ee(D[U],U,D))return!1;return!0}function xr(D,ee){for(var U=-1,be=D==null?0:D.length,$e=0,Ye=[];++U<be;){var Lt=D[U];ee(Lt,U,D)&&(Ye[$e++]=Lt)}return Ye}function Da(D,ee){return!!(D!=null&&D.length)&&Oo(D,ee,0)>-1}function Zl(D,ee,U){for(var be=-1,$e=D==null?0:D.length;++be<$e;)if(U(ee,D[be]))return!0;return!1}function ft(D,ee){for(var U=-1,be=D==null?0:D.length,$e=Array(be);++U<be;)$e[U]=ee(D[U],U,D);return $e}function Ir(D,ee){for(var U=-1,be=ee.length,$e=D.length;++U<be;)D[$e+U]=ee[U];return D}function jl(D,ee,U,be){var $e=-1,Ye=D==null?0:D.length;for(be&&Ye&&(U=D[++$e]);++$e<Ye;)U=ee(U,D[$e],$e,D);return U}function L7(D,ee,U,be){var $e=D==null?0:D.length;for(be&&$e&&(U=D[--$e]);$e--;)U=ee(U,D[$e],$e,D);return U}function ql(D,ee){for(var U=-1,be=D==null?0:D.length;++U<be;)if(ee(D[U],U,D))return!0;return!1}var R7=Kl("length");function P7(D){return D.split("")}function $7(D){return D.match(j9)||[]}function Bh(D,ee,U){var be;return U(D,function($e,Ye,Lt){if(ee($e,Ye,Lt))return be=Ye,!1}),be}function za(D,ee,U,be){for(var $e=D.length,Ye=U+(be?1:-1);be?Ye--:++Ye<$e;)if(ee(D[Ye],Ye,D))return Ye;return-1}function Oo(D,ee,U){return ee===ee?j7(D,ee,U):za(D,Nh,U)}function D7(D,ee,U,be){for(var $e=U-1,Ye=D.length;++$e<Ye;)if(be(D[$e],ee))return $e;return-1}function Nh(D){return D!==D}function Hh(D,ee){var U=D==null?0:D.length;return U?Xl(D,ee)/U:W}function Kl(D){return function(ee){return ee==null?r:ee[D]}}function Yl(D){return function(ee){return D==null?r:D[ee]}}function Fh(D,ee,U,be,$e){return $e(D,function(Ye,Lt,tt){U=be?(be=!1,Ye):ee(U,Ye,Lt,tt)}),U}function z7(D,ee){var U=D.length;for(D.sort(ee);U--;)D[U]=D[U].value;return D}function Xl(D,ee){for(var U,be=-1,$e=D.length;++be<$e;){var Ye=ee(D[be]);Ye!==r&&(U=U===r?Ye:U+Ye)}return U}function Jl(D,ee){for(var U=-1,be=Array(D);++U<D;)be[U]=ee(U);return be}function B7(D,ee){return ft(ee,function(U){return[U,D[U]]})}function Gh(D){return D&&D.slice(0,Zh(D)+1).replace(Bl,"")}function vn(D){return function(ee){return D(ee)}}function Ql(D,ee){return ft(ee,function(U){return D[U]})}function _i(D,ee){return D.has(ee)}function Wh(D,ee){for(var U=-1,be=D.length;++U<be&&Oo(ee,D[U],0)>-1;);return U}function Uh(D,ee){for(var U=D.length;U--&&Oo(ee,D[U],0)>-1;);return U}function N7(D,ee){for(var U=D.length,be=0;U--;)D[U]===ee&&++be;return be}var H7=Yl(E7),F7=Yl(S7);function G7(D){return"\\"+M7[D]}function W7(D,ee){return D==null?r:D[ee]}function To(D){return w7.test(D)}function U7(D){return _7.test(D)}function V7(D){for(var ee,U=[];!(ee=D.next()).done;)U.push(ee.value);return U}function ec(D){var ee=-1,U=Array(D.size);return D.forEach(function(be,$e){U[++ee]=[$e,be]}),U}function Vh(D,ee){return function(U){return D(ee(U))}}function Cr(D,ee){for(var U=-1,be=D.length,$e=0,Ye=[];++U<be;){var Lt=D[U];(Lt===ee||Lt===b)&&(D[U]=b,Ye[$e++]=U)}return Ye}function Ba(D){var ee=-1,U=Array(D.size);return D.forEach(function(be){U[++ee]=be}),U}function Z7(D){var ee=-1,U=Array(D.size);return D.forEach(function(be){U[++ee]=[be,be]}),U}function j7(D,ee,U){for(var be=U-1,$e=D.length;++be<$e;)if(D[be]===ee)return be;return-1}function q7(D,ee,U){for(var be=U+1;be--;)if(D[be]===ee)return be;return be}function Lo(D){return To(D)?Y7(D):R7(D)}function zn(D){return To(D)?X7(D):P7(D)}function Zh(D){for(var ee=D.length;ee--&&W9.test(D.charAt(ee)););return ee}var K7=Yl(A7);function Y7(D){for(var ee=Wl.lastIndex=0;Wl.test(D);)++ee;return ee}function X7(D){return D.match(Wl)||[]}function J7(D){return D.match(b7)||[]}var Or=(function D(ee){ee=ee==null?Pt:Or.defaults(Pt.Object(),ee,Or.pick(Pt,y7));var U=ee.Array,be=ee.Date,$e=ee.Error,Ye=ee.Function,Lt=ee.Math,tt=ee.Object,tc=ee.RegExp,Q7=ee.String,xn=ee.TypeError,Na=U.prototype,ew=Ye.prototype,Ro=tt.prototype,Ha=ee["__core-js_shared__"],Fa=ew.toString,Je=Ro.hasOwnProperty,tw=0,jh=(function(){var n=/[^.]+$/.exec(Ha&&Ha.keys&&Ha.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""})(),Ga=Ro.toString,nw=Fa.call(tt),rw=Pt._,ow=tc("^"+Fa.call(Je).replace(zl,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Wa=Oh?ee.Buffer:r,Tr=ee.Symbol,Ua=ee.Uint8Array,qh=Wa?Wa.allocUnsafe:r,Va=Vh(tt.getPrototypeOf,tt),Kh=tt.create,Yh=Ro.propertyIsEnumerable,Za=Na.splice,Xh=Tr?Tr.isConcatSpreadable:r,yi=Tr?Tr.iterator:r,Qr=Tr?Tr.toStringTag:r,ja=(function(){try{var n=oo(tt,"defineProperty");return n({},"",{}),n}catch{}})(),iw=ee.clearTimeout!==Pt.clearTimeout&&ee.clearTimeout,aw=be&&be.now!==Pt.Date.now&&be.now,sw=ee.setTimeout!==Pt.setTimeout&&ee.setTimeout,qa=Lt.ceil,Ka=Lt.floor,nc=tt.getOwnPropertySymbols,lw=Wa?Wa.isBuffer:r,Jh=ee.isFinite,cw=Na.join,dw=Vh(tt.keys,tt),Rt=Lt.max,Wt=Lt.min,uw=be.now,hw=ee.parseInt,Qh=Lt.random,fw=Na.reverse,rc=oo(ee,"DataView"),ki=oo(ee,"Map"),oc=oo(ee,"Promise"),Po=oo(ee,"Set"),Ei=oo(ee,"WeakMap"),Si=oo(tt,"create"),Ya=Ei&&new Ei,$o={},pw=io(rc),gw=io(ki),mw=io(oc),vw=io(Po),bw=io(Ei),Xa=Tr?Tr.prototype:r,Ai=Xa?Xa.valueOf:r,e1=Xa?Xa.toString:r;function A(n){if(wt(n)&&!Be(n)&&!(n instanceof Ze)){if(n instanceof In)return n;if(Je.call(n,"__wrapped__"))return tf(n)}return new In(n)}var Do=(function(){function n(){}return function(o){if(!vt(o))return{};if(Kh)return Kh(o);n.prototype=o;var c=new n;return n.prototype=r,c}})();function Ja(){}function In(n,o){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!o,this.__index__=0,this.__values__=r}A.templateSettings={escape:z9,evaluate:B9,interpolate:lh,variable:"",imports:{_:A}},A.prototype=Ja.prototype,A.prototype.constructor=A,In.prototype=Do(Ja.prototype),In.prototype.constructor=In;function Ze(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=F,this.__views__=[]}function ww(){var n=new Ze(this.__wrapped__);return n.__actions__=en(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=en(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=en(this.__views__),n}function _w(){if(this.__filtered__){var n=new Ze(this);n.__dir__=-1,n.__filtered__=!0}else n=this.clone(),n.__dir__*=-1;return n}function yw(){var n=this.__wrapped__.value(),o=this.__dir__,c=Be(n),p=o<0,_=c?n.length:0,x=R8(0,_,this.__views__),L=x.start,P=x.end,N=P-L,ne=p?P:L-1,te=this.__iteratees__,le=te.length,ve=0,_e=Wt(N,this.__takeCount__);if(!c||!p&&_==N&&_e==N)return S1(n,this.__actions__);var Oe=[];e:for(;N--&&ve<_e;){ne+=o;for(var De=-1,Te=n[ne];++De<le;){var nt=te[De],je=nt.iteratee,Kt=nt.type,Yn=je(Te);if(Kt==Ie)Te=Yn;else if(!Yn){if(Kt==Q)continue e;break e}}Oe[ve++]=Te}return Oe}Ze.prototype=Do(Ja.prototype),Ze.prototype.constructor=Ze;function eo(n){var o=-1,c=n==null?0:n.length;for(this.clear();++o<c;){var p=n[o];this.set(p[0],p[1])}}function kw(){this.__data__=Si?Si(null):{},this.size=0}function Ew(n){var o=this.has(n)&&delete this.__data__[n];return this.size-=o?1:0,o}function Sw(n){var o=this.__data__;if(Si){var c=o[n];return c===h?r:c}return Je.call(o,n)?o[n]:r}function Aw(n){var o=this.__data__;return Si?o[n]!==r:Je.call(o,n)}function Mw(n,o){var c=this.__data__;return this.size+=this.has(n)?0:1,c[n]=Si&&o===r?h:o,this}eo.prototype.clear=kw,eo.prototype.delete=Ew,eo.prototype.get=Sw,eo.prototype.has=Aw,eo.prototype.set=Mw;function or(n){var o=-1,c=n==null?0:n.length;for(this.clear();++o<c;){var p=n[o];this.set(p[0],p[1])}}function xw(){this.__data__=[],this.size=0}function Iw(n){var o=this.__data__,c=Qa(o,n);return c<0?!1:(c==o.length-1?o.pop():Za.call(o,c,1),--this.size,!0)}function Cw(n){var o=this.__data__,c=Qa(o,n);return c<0?r:o[c][1]}function Ow(n){return Qa(this.__data__,n)>-1}function Tw(n,o){var c=this.__data__,p=Qa(c,n);return p<0?(++this.size,c.push([n,o])):c[p][1]=o,this}or.prototype.clear=xw,or.prototype.delete=Iw,or.prototype.get=Cw,or.prototype.has=Ow,or.prototype.set=Tw;function ir(n){var o=-1,c=n==null?0:n.length;for(this.clear();++o<c;){var p=n[o];this.set(p[0],p[1])}}function Lw(){this.size=0,this.__data__={hash:new eo,map:new(ki||or),string:new eo}}function Rw(n){var o=us(this,n).delete(n);return this.size-=o?1:0,o}function Pw(n){return us(this,n).get(n)}function $w(n){return us(this,n).has(n)}function Dw(n,o){var c=us(this,n),p=c.size;return c.set(n,o),this.size+=c.size==p?0:1,this}ir.prototype.clear=Lw,ir.prototype.delete=Rw,ir.prototype.get=Pw,ir.prototype.has=$w,ir.prototype.set=Dw;function to(n){var o=-1,c=n==null?0:n.length;for(this.__data__=new ir;++o<c;)this.add(n[o])}function zw(n){return this.__data__.set(n,h),this}function Bw(n){return this.__data__.has(n)}to.prototype.add=to.prototype.push=zw,to.prototype.has=Bw;function Bn(n){this.size=(this.__data__=new or(n)).size}function Nw(){this.__data__=new or,this.size=0}function Hw(n){var o=this.__data__,c=o.delete(n);return this.size=o.size,c}function Fw(n){return this.__data__.get(n)}function Gw(n){return this.__data__.has(n)}function Ww(n,o){var c=this.__data__;if(c instanceof or){var p=c.__data__;if(!ki||p.length<a-1)return p.push([n,o]),this.size=++c.size,this;c=this.__data__=new ir(p)}return c.set(n,o),this.size=c.size,this}Bn.prototype.clear=Nw,Bn.prototype.delete=Hw,Bn.prototype.get=Fw,Bn.prototype.has=Gw,Bn.prototype.set=Ww;function t1(n,o){var c=Be(n),p=!c&&ao(n),_=!c&&!p&&Dr(n),x=!c&&!p&&!_&&Ho(n),L=c||p||_||x,P=L?Jl(n.length,Q7):[],N=P.length;for(var ne in n)(o||Je.call(n,ne))&&!(L&&(ne=="length"||_&&(ne=="offset"||ne=="parent")||x&&(ne=="buffer"||ne=="byteLength"||ne=="byteOffset")||lr(ne,N)))&&P.push(ne);return P}function n1(n){var o=n.length;return o?n[gc(0,o-1)]:r}function Uw(n,o){return hs(en(n),no(o,0,n.length))}function Vw(n){return hs(en(n))}function ic(n,o,c){(c!==r&&!Hn(n[o],c)||c===r&&!(o in n))&&jn(n,o,c)}function Mi(n,o,c){var p=n[o];(!(Je.call(n,o)&&Hn(p,c))||c===r&&!(o in n))&&jn(n,o,c)}function Qa(n,o){for(var c=n.length;c--;)if(Hn(n[c][0],o))return c;return-1}function Zw(n,o,c,p){return Lr(n,function(_,x,L){o(p,_,c(_),L)}),p}function r1(n,o){return n&&Kn(o,$t(o),n)}function jw(n,o){return n&&Kn(o,nn(o),n)}function jn(n,o,c){o=="__proto__"&&ja?ja(n,o,{configurable:!0,enumerable:!0,value:c,writable:!0}):n[o]=c}function ac(n,o){for(var c=-1,p=o.length,_=U(p),x=n==null;++c<p;)_[c]=x?r:Fc(n,o[c]);return _}function no(n,o,c){return n===n&&(c!==r&&(n=n<=c?n:c),o!==r&&(n=n>=o?n:o)),n}function Cn(n,o,c,p,_,x){var L,P=o&v,N=o&m,ne=o&g;if(c&&(L=_?c(n,p,_,x):c(n)),L!==r)return L;if(!vt(n))return n;var te=Be(n);if(te){if(L=$8(n),!P)return en(n,L)}else{var le=Ut(n),ve=le==Gt||le==w;if(Dr(n))return x1(n,P);if(le==I||le==qe||ve&&!_){if(L=N||ve?{}:Z1(n),!P)return N?S8(n,jw(L,n)):E8(n,r1(L,n))}else{if(!it[le])return _?n:{};L=D8(n,le,P)}}x||(x=new Bn);var _e=x.get(n);if(_e)return _e;x.set(n,L),kf(n)?n.forEach(function(De){L.add(Cn(De,o,c,De,n,x))}):_f(n)&&n.forEach(function(De,Te){L.set(Te,Cn(De,o,c,Te,n,x))});var Oe=te?r:(ne?N?Mc:Ac:N?nn:$t)(n);return mn(Oe||n,function(De,Te){Oe&&(Te=De,De=n[Te]),Mi(L,Te,Cn(De,o,c,Te,n,x))}),L}function qw(n){var o=$t(n);return function(c){return o1(c,n,o)}}function o1(n,o,c){var p=c.length;if(n==null)return!p;for(n=tt(n);p--;){var _=c[p],x=o[_],L=n[_];if(L===r&&!(_ in n)||!x(L))return!1}return!0}function i1(n,o,c){if(typeof n!="function")throw new xn(l);return Ri(function(){n.apply(r,c)},o)}function xi(n,o,c,p){var _=-1,x=Da,L=!0,P=n.length,N=[],ne=o.length;if(!P)return N;c&&(o=ft(o,vn(c))),p?(x=Zl,L=!1):o.length>=a&&(x=_i,L=!1,o=new to(o));e:for(;++_<P;){var te=n[_],le=c==null?te:c(te);if(te=p||te!==0?te:0,L&&le===le){for(var ve=ne;ve--;)if(o[ve]===le)continue e;N.push(te)}else x(o,le,p)||N.push(te)}return N}var Lr=L1(qn),a1=L1(lc,!0);function Kw(n,o){var c=!0;return Lr(n,function(p,_,x){return c=!!o(p,_,x),c}),c}function es(n,o,c){for(var p=-1,_=n.length;++p<_;){var x=n[p],L=o(x);if(L!=null&&(P===r?L===L&&!wn(L):c(L,P)))var P=L,N=x}return N}function Yw(n,o,c,p){var _=n.length;for(c=He(c),c<0&&(c=-c>_?0:_+c),p=p===r||p>_?_:He(p),p<0&&(p+=_),p=c>p?0:Sf(p);c<p;)n[c++]=o;return n}function s1(n,o){var c=[];return Lr(n,function(p,_,x){o(p,_,x)&&c.push(p)}),c}function Ht(n,o,c,p,_){var x=-1,L=n.length;for(c||(c=B8),_||(_=[]);++x<L;){var P=n[x];o>0&&c(P)?o>1?Ht(P,o-1,c,p,_):Ir(_,P):p||(_[_.length]=P)}return _}var sc=R1(),l1=R1(!0);function qn(n,o){return n&&sc(n,o,$t)}function lc(n,o){return n&&l1(n,o,$t)}function ts(n,o){return xr(o,function(c){return cr(n[c])})}function ro(n,o){o=Pr(o,n);for(var c=0,p=o.length;n!=null&&c<p;)n=n[Nn(o[c++])];return c&&c==p?n:r}function c1(n,o,c){var p=o(n);return Be(n)?p:Ir(p,c(n))}function jt(n){return n==null?n===r?ue:C:Qr&&Qr in tt(n)?L8(n):V8(n)}function cc(n,o){return n>o}function Xw(n,o){return n!=null&&Je.call(n,o)}function Jw(n,o){return n!=null&&o in tt(n)}function Qw(n,o,c){return n>=Wt(o,c)&&n<Rt(o,c)}function dc(n,o,c){for(var p=c?Zl:Da,_=n[0].length,x=n.length,L=x,P=U(x),N=1/0,ne=[];L--;){var te=n[L];L&&o&&(te=ft(te,vn(o))),N=Wt(te.length,N),P[L]=!c&&(o||_>=120&&te.length>=120)?new to(L&&te):r}te=n[0];var le=-1,ve=P[0];e:for(;++le<_&&ne.length<N;){var _e=te[le],Oe=o?o(_e):_e;if(_e=c||_e!==0?_e:0,!(ve?_i(ve,Oe):p(ne,Oe,c))){for(L=x;--L;){var De=P[L];if(!(De?_i(De,Oe):p(n[L],Oe,c)))continue e}ve&&ve.push(Oe),ne.push(_e)}}return ne}function e8(n,o,c,p){return qn(n,function(_,x,L){o(p,c(_),x,L)}),p}function Ii(n,o,c){o=Pr(o,n),n=Y1(n,o);var p=n==null?n:n[Nn(Tn(o))];return p==null?r:gn(p,n,c)}function d1(n){return wt(n)&&jt(n)==qe}function t8(n){return wt(n)&&jt(n)==We}function n8(n){return wt(n)&&jt(n)==ht}function Ci(n,o,c,p,_){return n===o?!0:n==null||o==null||!wt(n)&&!wt(o)?n!==n&&o!==o:r8(n,o,c,p,Ci,_)}function r8(n,o,c,p,_,x){var L=Be(n),P=Be(o),N=L?gt:Ut(n),ne=P?gt:Ut(o);N=N==qe?I:N,ne=ne==qe?I:ne;var te=N==I,le=ne==I,ve=N==ne;if(ve&&Dr(n)){if(!Dr(o))return!1;L=!0,te=!1}if(ve&&!te)return x||(x=new Bn),L||Ho(n)?W1(n,o,c,p,_,x):O8(n,o,N,c,p,_,x);if(!(c&k)){var _e=te&&Je.call(n,"__wrapped__"),Oe=le&&Je.call(o,"__wrapped__");if(_e||Oe){var De=_e?n.value():n,Te=Oe?o.value():o;return x||(x=new Bn),_(De,Te,c,p,x)}}return ve?(x||(x=new Bn),T8(n,o,c,p,_,x)):!1}function o8(n){return wt(n)&&Ut(n)==J}function uc(n,o,c,p){var _=c.length,x=_,L=!p;if(n==null)return!x;for(n=tt(n);_--;){var P=c[_];if(L&&P[2]?P[1]!==n[P[0]]:!(P[0]in n))return!1}for(;++_<x;){P=c[_];var N=P[0],ne=n[N],te=P[1];if(L&&P[2]){if(ne===r&&!(N in n))return!1}else{var le=new Bn;if(p)var ve=p(ne,te,N,n,o,le);if(!(ve===r?Ci(te,ne,k|y,p,le):ve))return!1}}return!0}function u1(n){return!vt(n)||H8(n)?!1:(cr(n)?ow:J9).test(io(n))}function i8(n){return wt(n)&&jt(n)==se}function a8(n){return wt(n)&&Ut(n)==H}function s8(n){return wt(n)&&bs(n.length)&&!!lt[jt(n)]}function h1(n){return typeof n=="function"?n:n==null?rn:typeof n=="object"?Be(n)?g1(n[0],n[1]):p1(n):Df(n)}function hc(n){if(!Li(n))return dw(n);var o=[];for(var c in tt(n))Je.call(n,c)&&c!="constructor"&&o.push(c);return o}function l8(n){if(!vt(n))return U8(n);var o=Li(n),c=[];for(var p in n)p=="constructor"&&(o||!Je.call(n,p))||c.push(p);return c}function fc(n,o){return n<o}function f1(n,o){var c=-1,p=tn(n)?U(n.length):[];return Lr(n,function(_,x,L){p[++c]=o(_,x,L)}),p}function p1(n){var o=Ic(n);return o.length==1&&o[0][2]?q1(o[0][0],o[0][1]):function(c){return c===n||uc(c,n,o)}}function g1(n,o){return Oc(n)&&j1(o)?q1(Nn(n),o):function(c){var p=Fc(c,n);return p===r&&p===o?Gc(c,n):Ci(o,p,k|y)}}function ns(n,o,c,p,_){n!==o&&sc(o,function(x,L){if(_||(_=new Bn),vt(x))c8(n,o,L,c,ns,p,_);else{var P=p?p(Lc(n,L),x,L+"",n,o,_):r;P===r&&(P=x),ic(n,L,P)}},nn)}function c8(n,o,c,p,_,x,L){var P=Lc(n,c),N=Lc(o,c),ne=L.get(N);if(ne){ic(n,c,ne);return}var te=x?x(P,N,c+"",n,o,L):r,le=te===r;if(le){var ve=Be(N),_e=!ve&&Dr(N),Oe=!ve&&!_e&&Ho(N);te=N,ve||_e||Oe?Be(P)?te=P:kt(P)?te=en(P):_e?(le=!1,te=x1(N,!0)):Oe?(le=!1,te=I1(N,!0)):te=[]:Pi(N)||ao(N)?(te=P,ao(P)?te=Af(P):(!vt(P)||cr(P))&&(te=Z1(N))):le=!1}le&&(L.set(N,te),_(te,N,p,x,L),L.delete(N)),ic(n,c,te)}function m1(n,o){var c=n.length;if(c)return o+=o<0?c:0,lr(o,c)?n[o]:r}function v1(n,o,c){o.length?o=ft(o,function(_){return Be(_)?function(x){return ro(x,_.length===1?_[0]:_)}:_}):o=[rn];var p=-1;return o=ft(o,vn(Le())),z7(f1(n,function(_,x,L){return{criteria:ft(o,function(P){return P(_)}),index:++p,value:_}}),function(_,x){return k8(_,x,c)})}function d8(n,o){return b1(n,o,function(c,p){return Gc(n,p)})}function b1(n,o,c){for(var p=-1,_=o.length,x={};++p<_;){var L=o[p],P=ro(n,L);c(P,L)&&Oi(x,Pr(L,n),P)}return x}function u8(n){return function(o){return ro(o,n)}}function pc(n,o,c,p){var _=p?D7:Oo,x=-1,L=o.length,P=n;for(n===o&&(o=en(o)),c&&(P=ft(n,vn(c)));++x<L;)for(var N=0,ne=o[x],te=c?c(ne):ne;(N=_(P,te,N,p))>-1;)P!==n&&Za.call(P,N,1),Za.call(n,N,1);return n}function w1(n,o){for(var c=n?o.length:0,p=c-1;c--;){var _=o[c];if(c==p||_!==x){var x=_;lr(_)?Za.call(n,_,1):bc(n,_)}}return n}function gc(n,o){return n+Ka(Qh()*(o-n+1))}function h8(n,o,c,p){for(var _=-1,x=Rt(qa((o-n)/(c||1)),0),L=U(x);x--;)L[p?x:++_]=n,n+=c;return L}function mc(n,o){var c="";if(!n||o<1||o>ie)return c;do o%2&&(c+=n),o=Ka(o/2),o&&(n+=n);while(o);return c}function Ve(n,o){return Rc(K1(n,o,rn),n+"")}function f8(n){return n1(Fo(n))}function p8(n,o){var c=Fo(n);return hs(c,no(o,0,c.length))}function Oi(n,o,c,p){if(!vt(n))return n;o=Pr(o,n);for(var _=-1,x=o.length,L=x-1,P=n;P!=null&&++_<x;){var N=Nn(o[_]),ne=c;if(N==="__proto__"||N==="constructor"||N==="prototype")return n;if(_!=L){var te=P[N];ne=p?p(te,N,P):r,ne===r&&(ne=vt(te)?te:lr(o[_+1])?[]:{})}Mi(P,N,ne),P=P[N]}return n}var _1=Ya?function(n,o){return Ya.set(n,o),n}:rn,g8=ja?function(n,o){return ja(n,"toString",{configurable:!0,enumerable:!1,value:Uc(o),writable:!0})}:rn;function m8(n){return hs(Fo(n))}function On(n,o,c){var p=-1,_=n.length;o<0&&(o=-o>_?0:_+o),c=c>_?_:c,c<0&&(c+=_),_=o>c?0:c-o>>>0,o>>>=0;for(var x=U(_);++p<_;)x[p]=n[p+o];return x}function v8(n,o){var c;return Lr(n,function(p,_,x){return c=o(p,_,x),!c}),!!c}function rs(n,o,c){var p=0,_=n==null?p:n.length;if(typeof o=="number"&&o===o&&_<=ge){for(;p<_;){var x=p+_>>>1,L=n[x];L!==null&&!wn(L)&&(c?L<=o:L<o)?p=x+1:_=x}return _}return vc(n,o,rn,c)}function vc(n,o,c,p){var _=0,x=n==null?0:n.length;if(x===0)return 0;o=c(o);for(var L=o!==o,P=o===null,N=wn(o),ne=o===r;_<x;){var te=Ka((_+x)/2),le=c(n[te]),ve=le!==r,_e=le===null,Oe=le===le,De=wn(le);if(L)var Te=p||Oe;else ne?Te=Oe&&(p||ve):P?Te=Oe&&ve&&(p||!_e):N?Te=Oe&&ve&&!_e&&(p||!De):_e||De?Te=!1:Te=p?le<=o:le<o;Te?_=te+1:x=te}return Wt(x,Se)}function y1(n,o){for(var c=-1,p=n.length,_=0,x=[];++c<p;){var L=n[c],P=o?o(L):L;if(!c||!Hn(P,N)){var N=P;x[_++]=L===0?0:L}}return x}function k1(n){return typeof n=="number"?n:wn(n)?W:+n}function bn(n){if(typeof n=="string")return n;if(Be(n))return ft(n,bn)+"";if(wn(n))return e1?e1.call(n):"";var o=n+"";return o=="0"&&1/n==-Ce?"-0":o}function Rr(n,o,c){var p=-1,_=Da,x=n.length,L=!0,P=[],N=P;if(c)L=!1,_=Zl;else if(x>=a){var ne=o?null:I8(n);if(ne)return Ba(ne);L=!1,_=_i,N=new to}else N=o?[]:P;e:for(;++p<x;){var te=n[p],le=o?o(te):te;if(te=c||te!==0?te:0,L&&le===le){for(var ve=N.length;ve--;)if(N[ve]===le)continue e;o&&N.push(le),P.push(te)}else _(N,le,c)||(N!==P&&N.push(le),P.push(te))}return P}function bc(n,o){o=Pr(o,n);var c=-1,p=o.length;if(!p)return!0;for(;++c<p;){var _=Nn(o[c]);if(_==="__proto__"&&!Je.call(n,"__proto__")||(_==="constructor"||_==="prototype")&&c<p-1)return!1}var x=Y1(n,o);return x==null||delete x[Nn(Tn(o))]}function E1(n,o,c,p){return Oi(n,o,c(ro(n,o)),p)}function os(n,o,c,p){for(var _=n.length,x=p?_:-1;(p?x--:++x<_)&&o(n[x],x,n););return c?On(n,p?0:x,p?x+1:_):On(n,p?x+1:0,p?_:x)}function S1(n,o){var c=n;return c instanceof Ze&&(c=c.value()),jl(o,function(p,_){return _.func.apply(_.thisArg,Ir([p],_.args))},c)}function wc(n,o,c){var p=n.length;if(p<2)return p?Rr(n[0]):[];for(var _=-1,x=U(p);++_<p;)for(var L=n[_],P=-1;++P<p;)P!=_&&(x[_]=xi(x[_]||L,n[P],o,c));return Rr(Ht(x,1),o,c)}function A1(n,o,c){for(var p=-1,_=n.length,x=o.length,L={};++p<_;){var P=p<x?o[p]:r;c(L,n[p],P)}return L}function _c(n){return kt(n)?n:[]}function yc(n){return typeof n=="function"?n:rn}function Pr(n,o){return Be(n)?n:Oc(n,o)?[n]:ef(Qe(n))}var b8=Ve;function $r(n,o,c){var p=n.length;return c=c===r?p:c,!o&&c>=p?n:On(n,o,c)}var M1=iw||function(n){return Pt.clearTimeout(n)};function x1(n,o){if(o)return n.slice();var c=n.length,p=qh?qh(c):new n.constructor(c);return n.copy(p),p}function kc(n){var o=new n.constructor(n.byteLength);return new Ua(o).set(new Ua(n)),o}function w8(n,o){var c=o?kc(n.buffer):n.buffer;return new n.constructor(c,n.byteOffset,n.byteLength)}function _8(n){var o=new n.constructor(n.source,dh.exec(n));return o.lastIndex=n.lastIndex,o}function y8(n){return Ai?tt(Ai.call(n)):{}}function I1(n,o){var c=o?kc(n.buffer):n.buffer;return new n.constructor(c,n.byteOffset,n.length)}function C1(n,o){if(n!==o){var c=n!==r,p=n===null,_=n===n,x=wn(n),L=o!==r,P=o===null,N=o===o,ne=wn(o);if(!P&&!ne&&!x&&n>o||x&&L&&N&&!P&&!ne||p&&L&&N||!c&&N||!_)return 1;if(!p&&!x&&!ne&&n<o||ne&&c&&_&&!p&&!x||P&&c&&_||!L&&_||!N)return-1}return 0}function k8(n,o,c){for(var p=-1,_=n.criteria,x=o.criteria,L=_.length,P=c.length;++p<L;){var N=C1(_[p],x[p]);if(N)return p>=P?N:N*(c[p]=="desc"?-1:1)}return n.index-o.index}function O1(n,o,c,p){for(var _=-1,x=n.length,L=c.length,P=-1,N=o.length,ne=Rt(x-L,0),te=U(N+ne),le=!p;++P<N;)te[P]=o[P];for(;++_<L;)(le||_<x)&&(te[c[_]]=n[_]);for(;ne--;)te[P++]=n[_++];return te}function T1(n,o,c,p){for(var _=-1,x=n.length,L=-1,P=c.length,N=-1,ne=o.length,te=Rt(x-P,0),le=U(te+ne),ve=!p;++_<te;)le[_]=n[_];for(var _e=_;++N<ne;)le[_e+N]=o[N];for(;++L<P;)(ve||_<x)&&(le[_e+c[L]]=n[_++]);return le}function en(n,o){var c=-1,p=n.length;for(o||(o=U(p));++c<p;)o[c]=n[c];return o}function Kn(n,o,c,p){var _=!c;c||(c={});for(var x=-1,L=o.length;++x<L;){var P=o[x],N=p?p(c[P],n[P],P,c,n):r;N===r&&(N=n[P]),_?jn(c,P,N):Mi(c,P,N)}return c}function E8(n,o){return Kn(n,Cc(n),o)}function S8(n,o){return Kn(n,U1(n),o)}function is(n,o){return function(c,p){var _=Be(c)?O7:Zw,x=o?o():{};return _(c,n,Le(p,2),x)}}function zo(n){return Ve(function(o,c){var p=-1,_=c.length,x=_>1?c[_-1]:r,L=_>2?c[2]:r;for(x=n.length>3&&typeof x=="function"?(_--,x):r,L&&qt(c[0],c[1],L)&&(x=_<3?r:x,_=1),o=tt(o);++p<_;){var P=c[p];P&&n(o,P,p,x)}return o})}function L1(n,o){return function(c,p){if(c==null)return c;if(!tn(c))return n(c,p);for(var _=c.length,x=o?_:-1,L=tt(c);(o?x--:++x<_)&&p(L[x],x,L)!==!1;);return c}}function R1(n){return function(o,c,p){for(var _=-1,x=tt(o),L=p(o),P=L.length;P--;){var N=L[n?P:++_];if(c(x[N],N,x)===!1)break}return o}}function A8(n,o,c){var p=o&S,_=Ti(n);function x(){return(this&&this!==Pt&&this instanceof x?_:n).apply(p?c:this,arguments)}return x}function P1(n){return function(o){o=Qe(o);var c=To(o)?zn(o):r,p=c?c[0]:o.charAt(0),_=c?$r(c,1).join(""):o.slice(1);return p[n]()+_}}function Bo(n){return function(o){return jl(Pf(Rf(o).replace(m7,"")),n,"")}}function Ti(n){return function(){var o=arguments;switch(o.length){case 0:return new n;case 1:return new n(o[0]);case 2:return new n(o[0],o[1]);case 3:return new n(o[0],o[1],o[2]);case 4:return new n(o[0],o[1],o[2],o[3]);case 5:return new n(o[0],o[1],o[2],o[3],o[4]);case 6:return new n(o[0],o[1],o[2],o[3],o[4],o[5]);case 7:return new n(o[0],o[1],o[2],o[3],o[4],o[5],o[6])}var c=Do(n.prototype),p=n.apply(c,o);return vt(p)?p:c}}function M8(n,o,c){var p=Ti(n);function _(){for(var x=arguments.length,L=U(x),P=x,N=No(_);P--;)L[P]=arguments[P];var ne=x<3&&L[0]!==N&&L[x-1]!==N?[]:Cr(L,N);return x-=ne.length,x<c?N1(n,o,as,_.placeholder,r,L,ne,r,r,c-x):gn(this&&this!==Pt&&this instanceof _?p:n,this,L)}return _}function $1(n){return function(o,c,p){var _=tt(o);if(!tn(o)){var x=Le(c,3);o=$t(o),c=function(P){return x(_[P],P,_)}}var L=n(o,c,p);return L>-1?_[x?o[L]:L]:r}}function D1(n){return sr(function(o){var c=o.length,p=c,_=In.prototype.thru;for(n&&o.reverse();p--;){var x=o[p];if(typeof x!="function")throw new xn(l);if(_&&!L&&ds(x)=="wrapper")var L=new In([],!0)}for(p=L?p:c;++p<c;){x=o[p];var P=ds(x),N=P=="wrapper"?xc(x):r;N&&Tc(N[0])&&N[1]==(oe|O|K|G)&&!N[4].length&&N[9]==1?L=L[ds(N[0])].apply(L,N[3]):L=x.length==1&&Tc(x)?L[P]():L.thru(x)}return function(){var ne=arguments,te=ne[0];if(L&&ne.length==1&&Be(te))return L.plant(te).value();for(var le=0,ve=c?o[le].apply(this,ne):te;++le<c;)ve=o[le].call(this,ve);return ve}})}function as(n,o,c,p,_,x,L,P,N,ne){var te=o&oe,le=o&S,ve=o&M,_e=o&(O|z),Oe=o&pe,De=ve?r:Ti(n);function Te(){for(var nt=arguments.length,je=U(nt),Kt=nt;Kt--;)je[Kt]=arguments[Kt];if(_e)var Yn=No(Te),zr=N7(je,Yn);if(p&&(je=O1(je,p,_,_e)),x&&(je=T1(je,x,L,_e)),nt-=zr,_e&&nt<ne){var Et=Cr(je,Yn);return N1(n,o,as,Te.placeholder,c,je,Et,P,N,ne-nt)}var Fn=le?c:this,ur=ve?Fn[n]:n;return nt=je.length,P?je=Z8(je,P):Oe&&nt>1&&je.reverse(),te&&N<nt&&(je.length=N),this&&this!==Pt&&this instanceof Te&&(ur=De||Ti(ur)),ur.apply(Fn,je)}return Te}function z1(n,o){return function(c,p){return e8(c,n,o(p),{})}}function ss(n,o){return function(c,p){var _;if(c===r&&p===r)return o;if(c!==r&&(_=c),p!==r){if(_===r)return p;typeof c=="string"||typeof p=="string"?(c=bn(c),p=bn(p)):(c=k1(c),p=k1(p)),_=n(c,p)}return _}}function Ec(n){return sr(function(o){return o=ft(o,vn(Le())),Ve(function(c){var p=this;return n(o,function(_){return gn(_,p,c)})})})}function ls(n,o){o=o===r?" ":bn(o);var c=o.length;if(c<2)return c?mc(o,n):o;var p=mc(o,qa(n/Lo(o)));return To(o)?$r(zn(p),0,n).join(""):p.slice(0,n)}function x8(n,o,c,p){var _=o&S,x=Ti(n);function L(){for(var P=-1,N=arguments.length,ne=-1,te=p.length,le=U(te+N),ve=this&&this!==Pt&&this instanceof L?x:n;++ne<te;)le[ne]=p[ne];for(;N--;)le[ne++]=arguments[++P];return gn(ve,_?c:this,le)}return L}function B1(n){return function(o,c,p){return p&&typeof p!="number"&&qt(o,c,p)&&(c=p=r),o=dr(o),c===r?(c=o,o=0):c=dr(c),p=p===r?o<c?1:-1:dr(p),h8(o,c,p,n)}}function cs(n){return function(o,c){return typeof o=="string"&&typeof c=="string"||(o=Ln(o),c=Ln(c)),n(o,c)}}function N1(n,o,c,p,_,x,L,P,N,ne){var te=o&O,le=te?L:r,ve=te?r:L,_e=te?x:r,Oe=te?r:x;o|=te?K:Z,o&=~(te?Z:K),o&T||(o&=~(S|M));var De=[n,o,_,_e,le,Oe,ve,P,N,ne],Te=c.apply(r,De);return Tc(n)&&X1(Te,De),Te.placeholder=p,J1(Te,n,o)}function Sc(n){var o=Lt[n];return function(c,p){if(c=Ln(c),p=p==null?0:Wt(He(p),292),p&&Jh(c)){var _=(Qe(c)+"e").split("e");return _=(Qe(o(_[0]+"e"+(+_[1]+p)))+"e").split("e"),+(_[0]+"e"+(+_[1]-p))}return o(c)}}var I8=Po&&1/Ba(new Po([,-0]))[1]==Ce?function(n){return new Po(n)}:jc;function H1(n){return function(o){var c=Ut(o);return c==J?ec(o):c==H?Z7(o):B7(o,n(o))}}function ar(n,o,c,p,_,x,L,P){var N=o&M;if(!N&&typeof n!="function")throw new xn(l);var ne=p?p.length:0;if(ne||(o&=~(K|Z),p=_=r),L=L===r?L:Rt(He(L),0),P=P===r?P:He(P),ne-=_?_.length:0,o&Z){var te=p,le=_;p=_=r}var ve=N?r:xc(n),_e=[n,o,c,p,_,te,le,x,L,P];if(ve&&W8(_e,ve),n=_e[0],o=_e[1],c=_e[2],p=_e[3],_=_e[4],P=_e[9]=_e[9]===r?N?0:n.length:Rt(_e[9]-ne,0),!P&&o&(O|z)&&(o&=~(O|z)),!o||o==S)var Oe=A8(n,o,c);else o==O||o==z?Oe=M8(n,o,P):(o==K||o==(S|K))&&!_.length?Oe=x8(n,o,c,p):Oe=as.apply(r,_e);return J1((ve?_1:X1)(Oe,_e),n,o)}function F1(n,o,c,p){return n===r||Hn(n,Ro[c])&&!Je.call(p,c)?o:n}function G1(n,o,c,p,_,x){return vt(n)&&vt(o)&&(x.set(o,n),ns(n,o,r,G1,x),x.delete(o)),n}function C8(n){return Pi(n)?r:n}function W1(n,o,c,p,_,x){var L=c&k,P=n.length,N=o.length;if(P!=N&&!(L&&N>P))return!1;var ne=x.get(n),te=x.get(o);if(ne&&te)return ne==o&&te==n;var le=-1,ve=!0,_e=c&y?new to:r;for(x.set(n,o),x.set(o,n);++le<P;){var Oe=n[le],De=o[le];if(p)var Te=L?p(De,Oe,le,o,n,x):p(Oe,De,le,n,o,x);if(Te!==r){if(Te)continue;ve=!1;break}if(_e){if(!ql(o,function(nt,je){if(!_i(_e,je)&&(Oe===nt||_(Oe,nt,c,p,x)))return _e.push(je)})){ve=!1;break}}else if(!(Oe===De||_(Oe,De,c,p,x))){ve=!1;break}}return x.delete(n),x.delete(o),ve}function O8(n,o,c,p,_,x,L){switch(c){case Tt:if(n.byteLength!=o.byteLength||n.byteOffset!=o.byteOffset)return!1;n=n.buffer,o=o.buffer;case We:return!(n.byteLength!=o.byteLength||!x(new Ua(n),new Ua(o)));case Ge:case ht:case V:return Hn(+n,+o);case Zt:return n.name==o.name&&n.message==o.message;case se:case de:return n==o+"";case J:var P=ec;case H:var N=p&k;if(P||(P=Ba),n.size!=o.size&&!N)return!1;var ne=L.get(n);if(ne)return ne==o;p|=y,L.set(n,o);var te=W1(P(n),P(o),p,_,x,L);return L.delete(n),te;case me:if(Ai)return Ai.call(n)==Ai.call(o)}return!1}function T8(n,o,c,p,_,x){var L=c&k,P=Ac(n),N=P.length;if(N!=Ac(o).length&&!L)return!1;for(var ne=N;ne--;){var te=P[ne];if(!(L?te in o:Je.call(o,te)))return!1}var le=x.get(n),ve=x.get(o);if(le&&ve)return le==o&&ve==n;var _e=!0;x.set(n,o),x.set(o,n);for(var Oe=L;++ne<N;){te=P[ne];var De=n[te],Te=o[te];if(p)var nt=L?p(Te,De,te,o,n,x):p(De,Te,te,n,o,x);if(!(nt===r?De===Te||_(De,Te,c,p,x):nt)){_e=!1;break}Oe||(Oe=te=="constructor")}if(_e&&!Oe){var je=n.constructor,Kt=o.constructor;je!=Kt&&"constructor"in n&&"constructor"in o&&!(typeof je=="function"&&je instanceof je&&typeof Kt=="function"&&Kt instanceof Kt)&&(_e=!1)}return x.delete(n),x.delete(o),_e}function sr(n){return Rc(K1(n,r,of),n+"")}function Ac(n){return c1(n,$t,Cc)}function Mc(n){return c1(n,nn,U1)}var xc=Ya?function(n){return Ya.get(n)}:jc;function ds(n){for(var o=n.name+"",c=$o[o],p=Je.call($o,o)?c.length:0;p--;){var _=c[p],x=_.func;if(x==null||x==n)return _.name}return o}function No(n){return(Je.call(A,"placeholder")?A:n).placeholder}function Le(){var n=A.iteratee||Vc;return n=n===Vc?h1:n,arguments.length?n(arguments[0],arguments[1]):n}function us(n,o){var c=n.__data__;return N8(o)?c[typeof o=="string"?"string":"hash"]:c.map}function Ic(n){for(var o=$t(n),c=o.length;c--;){var p=o[c],_=n[p];o[c]=[p,_,j1(_)]}return o}function oo(n,o){var c=W7(n,o);return u1(c)?c:r}function L8(n){var o=Je.call(n,Qr),c=n[Qr];try{n[Qr]=r;var p=!0}catch{}var _=Ga.call(n);return p&&(o?n[Qr]=c:delete n[Qr]),_}var Cc=nc?function(n){return n==null?[]:(n=tt(n),xr(nc(n),function(o){return Yh.call(n,o)}))}:qc,U1=nc?function(n){for(var o=[];n;)Ir(o,Cc(n)),n=Va(n);return o}:qc,Ut=jt;(rc&&Ut(new rc(new ArrayBuffer(1)))!=Tt||ki&&Ut(new ki)!=J||oc&&Ut(oc.resolve())!=B||Po&&Ut(new Po)!=H||Ei&&Ut(new Ei)!=Ee)&&(Ut=function(n){var o=jt(n),c=o==I?n.constructor:r,p=c?io(c):"";if(p)switch(p){case pw:return Tt;case gw:return J;case mw:return B;case vw:return H;case bw:return Ee}return o});function R8(n,o,c){for(var p=-1,_=c.length;++p<_;){var x=c[p],L=x.size;switch(x.type){case"drop":n+=L;break;case"dropRight":o-=L;break;case"take":o=Wt(o,n+L);break;case"takeRight":n=Rt(n,o-L);break}}return{start:n,end:o}}function P8(n){var o=n.match(V9);return o?o[1].split(Z9):[]}function V1(n,o,c){o=Pr(o,n);for(var p=-1,_=o.length,x=!1;++p<_;){var L=Nn(o[p]);if(!(x=n!=null&&c(n,L)))break;n=n[L]}return x||++p!=_?x:(_=n==null?0:n.length,!!_&&bs(_)&&lr(L,_)&&(Be(n)||ao(n)))}function $8(n){var o=n.length,c=new n.constructor(o);return o&&typeof n[0]=="string"&&Je.call(n,"index")&&(c.index=n.index,c.input=n.input),c}function Z1(n){return typeof n.constructor=="function"&&!Li(n)?Do(Va(n)):{}}function D8(n,o,c){var p=n.constructor;switch(o){case We:return kc(n);case Ge:case ht:return new p(+n);case Tt:return w8(n,c);case nr:case Qt:case rr:case st:case Ar:case Yr:case pn:case Io:case wi:return I1(n,c);case J:return new p;case V:case de:return new p(n);case se:return _8(n);case H:return new p;case me:return y8(n)}}function z8(n,o){var c=o.length;if(!c)return n;var p=c-1;return o[p]=(c>1?"& ":"")+o[p],o=o.join(c>2?", ":" "),n.replace(U9,`{
/* [wrapped with `+o+`] */
`)}function B8(n){return Be(n)||ao(n)||!!(Xh&&n&&n[Xh])}function lr(n,o){var c=typeof n;return o=o??ie,!!o&&(c=="number"||c!="symbol"&&e7.test(n))&&n>-1&&n%1==0&&n<o}function qt(n,o,c){if(!vt(c))return!1;var p=typeof o;return(p=="number"?tn(c)&&lr(o,c.length):p=="string"&&o in c)?Hn(c[o],n):!1}function Oc(n,o){if(Be(n))return!1;var c=typeof n;return c=="number"||c=="symbol"||c=="boolean"||n==null||wn(n)?!0:H9.test(n)||!N9.test(n)||o!=null&&n in tt(o)}function N8(n){var o=typeof n;return o=="string"||o=="number"||o=="symbol"||o=="boolean"?n!=="__proto__":n===null}function Tc(n){var o=ds(n),c=A[o];if(typeof c!="function"||!(o in Ze.prototype))return!1;if(n===c)return!0;var p=xc(c);return!!p&&n===p[0]}function H8(n){return!!jh&&jh in n}var F8=Ha?cr:Kc;function Li(n){var o=n&&n.constructor;return n===(typeof o=="function"&&o.prototype||Ro)}function j1(n){return n===n&&!vt(n)}function q1(n,o){return function(c){return c==null?!1:c[n]===o&&(o!==r||n in tt(c))}}function G8(n){var o=ms(n,function(p){return c.size===f&&c.clear(),p}),c=o.cache;return o}function W8(n,o){var c=n[1],p=o[1],_=c|p,x=_<(S|M|oe),L=p==oe&&c==O||p==oe&&c==G&&n[7].length<=o[8]||p==(oe|G)&&o[7].length<=o[8]&&c==O;if(!(x||L))return n;p&S&&(n[2]=o[2],_|=c&S?0:T);var P=o[3];if(P){var N=n[3];n[3]=N?O1(N,P,o[4]):P,n[4]=N?Cr(n[3],b):o[4]}return P=o[5],P&&(N=n[5],n[5]=N?T1(N,P,o[6]):P,n[6]=N?Cr(n[5],b):o[6]),P=o[7],P&&(n[7]=P),p&oe&&(n[8]=n[8]==null?o[8]:Wt(n[8],o[8])),n[9]==null&&(n[9]=o[9]),n[0]=o[0],n[1]=_,n}function U8(n){var o=[];if(n!=null)for(var c in tt(n))o.push(c);return o}function V8(n){return Ga.call(n)}function K1(n,o,c){return o=Rt(o===r?n.length-1:o,0),function(){for(var p=arguments,_=-1,x=Rt(p.length-o,0),L=U(x);++_<x;)L[_]=p[o+_];_=-1;for(var P=U(o+1);++_<o;)P[_]=p[_];return P[o]=c(L),gn(n,this,P)}}function Y1(n,o){return o.length<2?n:ro(n,On(o,0,-1))}function Z8(n,o){for(var c=n.length,p=Wt(o.length,c),_=en(n);p--;){var x=o[p];n[p]=lr(x,c)?_[x]:r}return n}function Lc(n,o){if(!(o==="constructor"&&typeof n[o]=="function")&&o!="__proto__")return n[o]}var X1=Q1(_1),Ri=sw||function(n,o){return Pt.setTimeout(n,o)},Rc=Q1(g8);function J1(n,o,c){var p=o+"";return Rc(n,z8(p,j8(P8(p),c)))}function Q1(n){var o=0,c=0;return function(){var p=uw(),_=E-(p-c);if(c=p,_>0){if(++o>=X)return arguments[0]}else o=0;return n.apply(r,arguments)}}function hs(n,o){var c=-1,p=n.length,_=p-1;for(o=o===r?p:o;++c<o;){var x=gc(c,_),L=n[x];n[x]=n[c],n[c]=L}return n.length=o,n}var ef=G8(function(n){var o=[];return n.charCodeAt(0)===46&&o.push(""),n.replace(F9,function(c,p,_,x){o.push(_?x.replace(q9,"$1"):p||c)}),o});function Nn(n){if(typeof n=="string"||wn(n))return n;var o=n+"";return o=="0"&&1/n==-Ce?"-0":o}function io(n){if(n!=null){try{return Fa.call(n)}catch{}try{return n+""}catch{}}return""}function j8(n,o){return mn(fe,function(c){var p="_."+c[0];o&c[1]&&!Da(n,p)&&n.push(p)}),n.sort()}function tf(n){if(n instanceof Ze)return n.clone();var o=new In(n.__wrapped__,n.__chain__);return o.__actions__=en(n.__actions__),o.__index__=n.__index__,o.__values__=n.__values__,o}function q8(n,o,c){(c?qt(n,o,c):o===r)?o=1:o=Rt(He(o),0);var p=n==null?0:n.length;if(!p||o<1)return[];for(var _=0,x=0,L=U(qa(p/o));_<p;)L[x++]=On(n,_,_+=o);return L}function K8(n){for(var o=-1,c=n==null?0:n.length,p=0,_=[];++o<c;){var x=n[o];x&&(_[p++]=x)}return _}function Y8(){var n=arguments.length;if(!n)return[];for(var o=U(n-1),c=arguments[0],p=n;p--;)o[p-1]=arguments[p];return Ir(Be(c)?en(c):[c],Ht(o,1))}var X8=Ve(function(n,o){return kt(n)?xi(n,Ht(o,1,kt,!0)):[]}),J8=Ve(function(n,o){var c=Tn(o);return kt(c)&&(c=r),kt(n)?xi(n,Ht(o,1,kt,!0),Le(c,2)):[]}),Q8=Ve(function(n,o){var c=Tn(o);return kt(c)&&(c=r),kt(n)?xi(n,Ht(o,1,kt,!0),r,c):[]});function e_(n,o,c){var p=n==null?0:n.length;return p?(o=c||o===r?1:He(o),On(n,o<0?0:o,p)):[]}function t_(n,o,c){var p=n==null?0:n.length;return p?(o=c||o===r?1:He(o),o=p-o,On(n,0,o<0?0:o)):[]}function n_(n,o){return n&&n.length?os(n,Le(o,3),!0,!0):[]}function r_(n,o){return n&&n.length?os(n,Le(o,3),!0):[]}function o_(n,o,c,p){var _=n==null?0:n.length;return _?(c&&typeof c!="number"&&qt(n,o,c)&&(c=0,p=_),Yw(n,o,c,p)):[]}function nf(n,o,c){var p=n==null?0:n.length;if(!p)return-1;var _=c==null?0:He(c);return _<0&&(_=Rt(p+_,0)),za(n,Le(o,3),_)}function rf(n,o,c){var p=n==null?0:n.length;if(!p)return-1;var _=p-1;return c!==r&&(_=He(c),_=c<0?Rt(p+_,0):Wt(_,p-1)),za(n,Le(o,3),_,!0)}function of(n){return n!=null&&n.length?Ht(n,1):[]}function i_(n){return n!=null&&n.length?Ht(n,Ce):[]}function a_(n,o){return n!=null&&n.length?(o=o===r?1:He(o),Ht(n,o)):[]}function s_(n){for(var o=-1,c=n==null?0:n.length,p={};++o<c;){var _=n[o];jn(p,_[0],_[1])}return p}function af(n){return n&&n.length?n[0]:r}function l_(n,o,c){var p=n==null?0:n.length;if(!p)return-1;var _=c==null?0:He(c);return _<0&&(_=Rt(p+_,0)),Oo(n,o,_)}function c_(n){return n!=null&&n.length?On(n,0,-1):[]}var d_=Ve(function(n){var o=ft(n,_c);return o.length&&o[0]===n[0]?dc(o):[]}),u_=Ve(function(n){var o=Tn(n),c=ft(n,_c);return o===Tn(c)?o=r:c.pop(),c.length&&c[0]===n[0]?dc(c,Le(o,2)):[]}),h_=Ve(function(n){var o=Tn(n),c=ft(n,_c);return o=typeof o=="function"?o:r,o&&c.pop(),c.length&&c[0]===n[0]?dc(c,r,o):[]});function f_(n,o){return n==null?"":cw.call(n,o)}function Tn(n){var o=n==null?0:n.length;return o?n[o-1]:r}function p_(n,o,c){var p=n==null?0:n.length;if(!p)return-1;var _=p;return c!==r&&(_=He(c),_=_<0?Rt(p+_,0):Wt(_,p-1)),o===o?q7(n,o,_):za(n,Nh,_,!0)}function g_(n,o){return n&&n.length?m1(n,He(o)):r}var m_=Ve(sf);function sf(n,o){return n&&n.length&&o&&o.length?pc(n,o):n}function v_(n,o,c){return n&&n.length&&o&&o.length?pc(n,o,Le(c,2)):n}function b_(n,o,c){return n&&n.length&&o&&o.length?pc(n,o,r,c):n}var w_=sr(function(n,o){var c=n==null?0:n.length,p=ac(n,o);return w1(n,ft(o,function(_){return lr(_,c)?+_:_}).sort(C1)),p});function __(n,o){var c=[];if(!(n&&n.length))return c;var p=-1,_=[],x=n.length;for(o=Le(o,3);++p<x;){var L=n[p];o(L,p,n)&&(c.push(L),_.push(p))}return w1(n,_),c}function Pc(n){return n==null?n:fw.call(n)}function y_(n,o,c){var p=n==null?0:n.length;return p?(c&&typeof c!="number"&&qt(n,o,c)?(o=0,c=p):(o=o==null?0:He(o),c=c===r?p:He(c)),On(n,o,c)):[]}function k_(n,o){return rs(n,o)}function E_(n,o,c){return vc(n,o,Le(c,2))}function S_(n,o){var c=n==null?0:n.length;if(c){var p=rs(n,o);if(p<c&&Hn(n[p],o))return p}return-1}function A_(n,o){return rs(n,o,!0)}function M_(n,o,c){return vc(n,o,Le(c,2),!0)}function x_(n,o){if(n!=null&&n.length){var c=rs(n,o,!0)-1;if(Hn(n[c],o))return c}return-1}function I_(n){return n&&n.length?y1(n):[]}function C_(n,o){return n&&n.length?y1(n,Le(o,2)):[]}function O_(n){var o=n==null?0:n.length;return o?On(n,1,o):[]}function T_(n,o,c){return n&&n.length?(o=c||o===r?1:He(o),On(n,0,o<0?0:o)):[]}function L_(n,o,c){var p=n==null?0:n.length;return p?(o=c||o===r?1:He(o),o=p-o,On(n,o<0?0:o,p)):[]}function R_(n,o){return n&&n.length?os(n,Le(o,3),!1,!0):[]}function P_(n,o){return n&&n.length?os(n,Le(o,3)):[]}var $_=Ve(function(n){return Rr(Ht(n,1,kt,!0))}),D_=Ve(function(n){var o=Tn(n);return kt(o)&&(o=r),Rr(Ht(n,1,kt,!0),Le(o,2))}),z_=Ve(function(n){var o=Tn(n);return o=typeof o=="function"?o:r,Rr(Ht(n,1,kt,!0),r,o)});function B_(n){return n&&n.length?Rr(n):[]}function N_(n,o){return n&&n.length?Rr(n,Le(o,2)):[]}function H_(n,o){return o=typeof o=="function"?o:r,n&&n.length?Rr(n,r,o):[]}function $c(n){if(!(n&&n.length))return[];var o=0;return n=xr(n,function(c){if(kt(c))return o=Rt(c.length,o),!0}),Jl(o,function(c){return ft(n,Kl(c))})}function lf(n,o){if(!(n&&n.length))return[];var c=$c(n);return o==null?c:ft(c,function(p){return gn(o,r,p)})}var F_=Ve(function(n,o){return kt(n)?xi(n,o):[]}),G_=Ve(function(n){return wc(xr(n,kt))}),W_=Ve(function(n){var o=Tn(n);return kt(o)&&(o=r),wc(xr(n,kt),Le(o,2))}),U_=Ve(function(n){var o=Tn(n);return o=typeof o=="function"?o:r,wc(xr(n,kt),r,o)}),V_=Ve($c);function Z_(n,o){return A1(n||[],o||[],Mi)}function j_(n,o){return A1(n||[],o||[],Oi)}var q_=Ve(function(n){var o=n.length,c=o>1?n[o-1]:r;return c=typeof c=="function"?(n.pop(),c):r,lf(n,c)});function cf(n){var o=A(n);return o.__chain__=!0,o}function K_(n,o){return o(n),n}function fs(n,o){return o(n)}var Y_=sr(function(n){var o=n.length,c=o?n[0]:0,p=this.__wrapped__,_=function(x){return ac(x,n)};return o>1||this.__actions__.length||!(p instanceof Ze)||!lr(c)?this.thru(_):(p=p.slice(c,+c+(o?1:0)),p.__actions__.push({func:fs,args:[_],thisArg:r}),new In(p,this.__chain__).thru(function(x){return o&&!x.length&&x.push(r),x}))});function X_(){return cf(this)}function J_(){return new In(this.value(),this.__chain__)}function Q_(){this.__values__===r&&(this.__values__=Ef(this.value()));var n=this.__index__>=this.__values__.length;return{done:n,value:n?r:this.__values__[this.__index__++]}}function ey(){return this}function ty(n){for(var o,c=this;c instanceof Ja;){var p=tf(c);p.__index__=0,p.__values__=r,o?_.__wrapped__=p:o=p;var _=p;c=c.__wrapped__}return _.__wrapped__=n,o}function ny(){var n=this.__wrapped__;if(n instanceof Ze){var o=n;return this.__actions__.length&&(o=new Ze(this)),o=o.reverse(),o.__actions__.push({func:fs,args:[Pc],thisArg:r}),new In(o,this.__chain__)}return this.thru(Pc)}function ry(){return S1(this.__wrapped__,this.__actions__)}var oy=is(function(n,o,c){Je.call(n,c)?++n[c]:jn(n,c,1)});function iy(n,o,c){var p=Be(n)?zh:Kw;return c&&qt(n,o,c)&&(o=r),p(n,Le(o,3))}function ay(n,o){return(Be(n)?xr:s1)(n,Le(o,3))}var sy=$1(nf),ly=$1(rf);function cy(n,o){return Ht(ps(n,o),1)}function dy(n,o){return Ht(ps(n,o),Ce)}function uy(n,o,c){return c=c===r?1:He(c),Ht(ps(n,o),c)}function df(n,o){return(Be(n)?mn:Lr)(n,Le(o,3))}function uf(n,o){return(Be(n)?T7:a1)(n,Le(o,3))}var hy=is(function(n,o,c){Je.call(n,c)?n[c].push(o):jn(n,c,[o])});function fy(n,o,c,p){n=tn(n)?n:Fo(n),c=c&&!p?He(c):0;var _=n.length;return c<0&&(c=Rt(_+c,0)),ws(n)?c<=_&&n.indexOf(o,c)>-1:!!_&&Oo(n,o,c)>-1}var py=Ve(function(n,o,c){var p=-1,_=typeof o=="function",x=tn(n)?U(n.length):[];return Lr(n,function(L){x[++p]=_?gn(o,L,c):Ii(L,o,c)}),x}),gy=is(function(n,o,c){jn(n,c,o)});function ps(n,o){return(Be(n)?ft:f1)(n,Le(o,3))}function my(n,o,c,p){return n==null?[]:(Be(o)||(o=o==null?[]:[o]),c=p?r:c,Be(c)||(c=c==null?[]:[c]),v1(n,o,c))}var vy=is(function(n,o,c){n[c?0:1].push(o)},function(){return[[],[]]});function by(n,o,c){var p=Be(n)?jl:Fh,_=arguments.length<3;return p(n,Le(o,4),c,_,Lr)}function wy(n,o,c){var p=Be(n)?L7:Fh,_=arguments.length<3;return p(n,Le(o,4),c,_,a1)}function _y(n,o){return(Be(n)?xr:s1)(n,vs(Le(o,3)))}function yy(n){return(Be(n)?n1:f8)(n)}function ky(n,o,c){return(c?qt(n,o,c):o===r)?o=1:o=He(o),(Be(n)?Uw:p8)(n,o)}function Ey(n){return(Be(n)?Vw:m8)(n)}function Sy(n){if(n==null)return 0;if(tn(n))return ws(n)?Lo(n):n.length;var o=Ut(n);return o==J||o==H?n.size:hc(n).length}function Ay(n,o,c){var p=Be(n)?ql:v8;return c&&qt(n,o,c)&&(o=r),p(n,Le(o,3))}var My=Ve(function(n,o){if(n==null)return[];var c=o.length;return c>1&&qt(n,o[0],o[1])?o=[]:c>2&&qt(o[0],o[1],o[2])&&(o=[o[0]]),v1(n,Ht(o,1),[])}),gs=aw||function(){return Pt.Date.now()};function xy(n,o){if(typeof o!="function")throw new xn(l);return n=He(n),function(){if(--n<1)return o.apply(this,arguments)}}function hf(n,o,c){return o=c?r:o,o=n&&o==null?n.length:o,ar(n,oe,r,r,r,r,o)}function ff(n,o){var c;if(typeof o!="function")throw new xn(l);return n=He(n),function(){return--n>0&&(c=o.apply(this,arguments)),n<=1&&(o=r),c}}var Dc=Ve(function(n,o,c){var p=S;if(c.length){var _=Cr(c,No(Dc));p|=K}return ar(n,p,o,c,_)}),pf=Ve(function(n,o,c){var p=S|M;if(c.length){var _=Cr(c,No(pf));p|=K}return ar(o,p,n,c,_)});function gf(n,o,c){o=c?r:o;var p=ar(n,O,r,r,r,r,r,o);return p.placeholder=gf.placeholder,p}function mf(n,o,c){o=c?r:o;var p=ar(n,z,r,r,r,r,r,o);return p.placeholder=mf.placeholder,p}function vf(n,o,c){var p,_,x,L,P,N,ne=0,te=!1,le=!1,ve=!0;if(typeof n!="function")throw new xn(l);o=Ln(o)||0,vt(c)&&(te=!!c.leading,le="maxWait"in c,x=le?Rt(Ln(c.maxWait)||0,o):x,ve="trailing"in c?!!c.trailing:ve);function _e(Et){var Fn=p,ur=_;return p=_=r,ne=Et,L=n.apply(ur,Fn),L}function Oe(Et){return ne=Et,P=Ri(nt,o),te?_e(Et):L}function De(Et){var Fn=Et-N,ur=Et-ne,zf=o-Fn;return le?Wt(zf,x-ur):zf}function Te(Et){var Fn=Et-N,ur=Et-ne;return N===r||Fn>=o||Fn<0||le&&ur>=x}function nt(){var Et=gs();if(Te(Et))return je(Et);P=Ri(nt,De(Et))}function je(Et){return P=r,ve&&p?_e(Et):(p=_=r,L)}function Kt(){P!==r&&M1(P),ne=0,p=N=_=P=r}function Yn(){return P===r?L:je(gs())}function zr(){var Et=gs(),Fn=Te(Et);if(p=arguments,_=this,N=Et,Fn){if(P===r)return Oe(N);if(le)return M1(P),P=Ri(nt,o),_e(N)}return P===r&&(P=Ri(nt,o)),L}return zr.cancel=Kt,zr.flush=Yn,zr}var Iy=Ve(function(n,o){return i1(n,1,o)}),Cy=Ve(function(n,o,c){return i1(n,Ln(o)||0,c)});function Oy(n){return ar(n,pe)}function ms(n,o){if(typeof n!="function"||o!=null&&typeof o!="function")throw new xn(l);var c=function(){var p=arguments,_=o?o.apply(this,p):p[0],x=c.cache;if(x.has(_))return x.get(_);var L=n.apply(this,p);return c.cache=x.set(_,L)||x,L};return c.cache=new(ms.Cache||ir),c}ms.Cache=ir;function vs(n){if(typeof n!="function")throw new xn(l);return function(){var o=arguments;switch(o.length){case 0:return!n.call(this);case 1:return!n.call(this,o[0]);case 2:return!n.call(this,o[0],o[1]);case 3:return!n.call(this,o[0],o[1],o[2])}return!n.apply(this,o)}}function Ty(n){return ff(2,n)}var Ly=b8(function(n,o){o=o.length==1&&Be(o[0])?ft(o[0],vn(Le())):ft(Ht(o,1),vn(Le()));var c=o.length;return Ve(function(p){for(var _=-1,x=Wt(p.length,c);++_<x;)p[_]=o[_].call(this,p[_]);return gn(n,this,p)})}),zc=Ve(function(n,o){return ar(n,K,r,o,Cr(o,No(zc)))}),bf=Ve(function(n,o){return ar(n,Z,r,o,Cr(o,No(bf)))}),Ry=sr(function(n,o){return ar(n,G,r,r,r,o)});function Py(n,o){if(typeof n!="function")throw new xn(l);return o=o===r?o:He(o),Ve(n,o)}function $y(n,o){if(typeof n!="function")throw new xn(l);return o=o==null?0:Rt(He(o),0),Ve(function(c){var p=c[o],_=$r(c,0,o);return p&&Ir(_,p),gn(n,this,_)})}function Dy(n,o,c){var p=!0,_=!0;if(typeof n!="function")throw new xn(l);return vt(c)&&(p="leading"in c?!!c.leading:p,_="trailing"in c?!!c.trailing:_),vf(n,o,{leading:p,maxWait:o,trailing:_})}function zy(n){return hf(n,1)}function By(n,o){return zc(yc(o),n)}function Ny(){if(!arguments.length)return[];var n=arguments[0];return Be(n)?n:[n]}function Hy(n){return Cn(n,g)}function Fy(n,o){return o=typeof o=="function"?o:r,Cn(n,g,o)}function Gy(n){return Cn(n,v|g)}function Wy(n,o){return o=typeof o=="function"?o:r,Cn(n,v|g,o)}function Uy(n,o){return o==null||o1(n,o,$t(o))}function Hn(n,o){return n===o||n!==n&&o!==o}var Vy=cs(cc),Zy=cs(function(n,o){return n>=o}),ao=d1((function(){return arguments})())?d1:function(n){return wt(n)&&Je.call(n,"callee")&&!Yh.call(n,"callee")},Be=U.isArray,jy=Th?vn(Th):t8;function tn(n){return n!=null&&bs(n.length)&&!cr(n)}function kt(n){return wt(n)&&tn(n)}function qy(n){return n===!0||n===!1||wt(n)&&jt(n)==Ge}var Dr=lw||Kc,Ky=Lh?vn(Lh):n8;function Yy(n){return wt(n)&&n.nodeType===1&&!Pi(n)}function Xy(n){if(n==null)return!0;if(tn(n)&&(Be(n)||typeof n=="string"||typeof n.splice=="function"||Dr(n)||Ho(n)||ao(n)))return!n.length;var o=Ut(n);if(o==J||o==H)return!n.size;if(Li(n))return!hc(n).length;for(var c in n)if(Je.call(n,c))return!1;return!0}function Jy(n,o){return Ci(n,o)}function Qy(n,o,c){c=typeof c=="function"?c:r;var p=c?c(n,o):r;return p===r?Ci(n,o,r,c):!!p}function Bc(n){if(!wt(n))return!1;var o=jt(n);return o==Zt||o==mt||typeof n.message=="string"&&typeof n.name=="string"&&!Pi(n)}function ek(n){return typeof n=="number"&&Jh(n)}function cr(n){if(!vt(n))return!1;var o=jt(n);return o==Gt||o==w||o==Ue||o==ae}function wf(n){return typeof n=="number"&&n==He(n)}function bs(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=ie}function vt(n){var o=typeof n;return n!=null&&(o=="object"||o=="function")}function wt(n){return n!=null&&typeof n=="object"}var _f=Rh?vn(Rh):o8;function tk(n,o){return n===o||uc(n,o,Ic(o))}function nk(n,o,c){return c=typeof c=="function"?c:r,uc(n,o,Ic(o),c)}function rk(n){return yf(n)&&n!=+n}function ok(n){if(F8(n))throw new $e(s);return u1(n)}function ik(n){return n===null}function ak(n){return n==null}function yf(n){return typeof n=="number"||wt(n)&&jt(n)==V}function Pi(n){if(!wt(n)||jt(n)!=I)return!1;var o=Va(n);if(o===null)return!0;var c=Je.call(o,"constructor")&&o.constructor;return typeof c=="function"&&c instanceof c&&Fa.call(c)==nw}var Nc=Ph?vn(Ph):i8;function sk(n){return wf(n)&&n>=-ie&&n<=ie}var kf=$h?vn($h):a8;function ws(n){return typeof n=="string"||!Be(n)&&wt(n)&&jt(n)==de}function wn(n){return typeof n=="symbol"||wt(n)&&jt(n)==me}var Ho=Dh?vn(Dh):s8;function lk(n){return n===r}function ck(n){return wt(n)&&Ut(n)==Ee}function dk(n){return wt(n)&&jt(n)==et}var uk=cs(fc),hk=cs(function(n,o){return n<=o});function Ef(n){if(!n)return[];if(tn(n))return ws(n)?zn(n):en(n);if(yi&&n[yi])return V7(n[yi]());var o=Ut(n);return(o==J?ec:o==H?Ba:Fo)(n)}function dr(n){return n?(n=Ln(n),n===Ce||n===-Ce?(n<0?-1:1)*Me:n===n?n:0):n===0?n:0}function He(n){var o=dr(n),c=o%1;return o===o?c?o-c:o:0}function Sf(n){return n?no(He(n),0,F):0}function Ln(n){if(typeof n=="number")return n;if(wn(n))return W;if(vt(n)){var o=typeof n.valueOf=="function"?n.valueOf():n;n=vt(o)?o+"":o}if(typeof n!="string")return n===0?n:+n;n=Gh(n);var c=X9.test(n);return c||Q9.test(n)?I7(n.slice(2),c?2:8):Y9.test(n)?W:+n}function Af(n){return Kn(n,nn(n))}function fk(n){return n?no(He(n),-ie,ie):n===0?n:0}function Qe(n){return n==null?"":bn(n)}var pk=zo(function(n,o){if(Li(o)||tn(o)){Kn(o,$t(o),n);return}for(var c in o)Je.call(o,c)&&Mi(n,c,o[c])}),Mf=zo(function(n,o){Kn(o,nn(o),n)}),xf=zo(function(n,o,c,p){Kn(o,nn(o),n,p)}),Hc=zo(function(n,o,c,p){Kn(o,$t(o),n,p)}),gk=sr(ac);function mk(n,o){var c=Do(n);return o==null?c:r1(c,o)}var vk=Ve(function(n,o){n=tt(n);var c=-1,p=o.length,_=p>2?o[2]:r;for(_&&qt(o[0],o[1],_)&&(p=1);++c<p;)for(var x=o[c],L=nn(x),P=-1,N=L.length;++P<N;){var ne=L[P],te=n[ne];(te===r||Hn(te,Ro[ne])&&!Je.call(n,ne))&&(n[ne]=x[ne])}return n}),bk=Ve(function(n){return n.push(r,G1),gn(If,r,n)});function wk(n,o){return Bh(n,Le(o,3),qn)}function _k(n,o){return Bh(n,Le(o,3),lc)}function yk(n,o){return n==null?n:sc(n,Le(o,3),nn)}function kk(n,o){return n==null?n:l1(n,Le(o,3),nn)}function Ek(n,o){return n&&qn(n,Le(o,3))}function Sk(n,o){return n&&lc(n,Le(o,3))}function Ak(n){return n==null?[]:ts(n,$t(n))}function Mk(n){return n==null?[]:ts(n,nn(n))}function Fc(n,o,c){var p=n==null?r:ro(n,o);return p===r?c:p}function xk(n,o){return n!=null&&V1(n,o,Xw)}function Gc(n,o){return n!=null&&V1(n,o,Jw)}var Ik=z1(function(n,o,c){o!=null&&typeof o.toString!="function"&&(o=Ga.call(o)),n[o]=c},Uc(rn)),Ck=z1(function(n,o,c){o!=null&&typeof o.toString!="function"&&(o=Ga.call(o)),Je.call(n,o)?n[o].push(c):n[o]=[c]},Le),Ok=Ve(Ii);function $t(n){return tn(n)?t1(n):hc(n)}function nn(n){return tn(n)?t1(n,!0):l8(n)}function Tk(n,o){var c={};return o=Le(o,3),qn(n,function(p,_,x){jn(c,o(p,_,x),p)}),c}function Lk(n,o){var c={};return o=Le(o,3),qn(n,function(p,_,x){jn(c,_,o(p,_,x))}),c}var Rk=zo(function(n,o,c){ns(n,o,c)}),If=zo(function(n,o,c,p){ns(n,o,c,p)}),Pk=sr(function(n,o){var c={};if(n==null)return c;var p=!1;o=ft(o,function(x){return x=Pr(x,n),p||(p=x.length>1),x}),Kn(n,Mc(n),c),p&&(c=Cn(c,v|m|g,C8));for(var _=o.length;_--;)bc(c,o[_]);return c});function $k(n,o){return Cf(n,vs(Le(o)))}var Dk=sr(function(n,o){return n==null?{}:d8(n,o)});function Cf(n,o){if(n==null)return{};var c=ft(Mc(n),function(p){return[p]});return o=Le(o),b1(n,c,function(p,_){return o(p,_[0])})}function zk(n,o,c){o=Pr(o,n);var p=-1,_=o.length;for(_||(_=1,n=r);++p<_;){var x=n==null?r:n[Nn(o[p])];x===r&&(p=_,x=c),n=cr(x)?x.call(n):x}return n}function Bk(n,o,c){return n==null?n:Oi(n,o,c)}function Nk(n,o,c,p){return p=typeof p=="function"?p:r,n==null?n:Oi(n,o,c,p)}var Of=H1($t),Tf=H1(nn);function Hk(n,o,c){var p=Be(n),_=p||Dr(n)||Ho(n);if(o=Le(o,4),c==null){var x=n&&n.constructor;_?c=p?new x:[]:vt(n)?c=cr(x)?Do(Va(n)):{}:c={}}return(_?mn:qn)(n,function(L,P,N){return o(c,L,P,N)}),c}function Fk(n,o){return n==null?!0:bc(n,o)}function Gk(n,o,c){return n==null?n:E1(n,o,yc(c))}function Wk(n,o,c,p){return p=typeof p=="function"?p:r,n==null?n:E1(n,o,yc(c),p)}function Fo(n){return n==null?[]:Ql(n,$t(n))}function Uk(n){return n==null?[]:Ql(n,nn(n))}function Vk(n,o,c){return c===r&&(c=o,o=r),c!==r&&(c=Ln(c),c=c===c?c:0),o!==r&&(o=Ln(o),o=o===o?o:0),no(Ln(n),o,c)}function Zk(n,o,c){return o=dr(o),c===r?(c=o,o=0):c=dr(c),n=Ln(n),Qw(n,o,c)}function jk(n,o,c){if(c&&typeof c!="boolean"&&qt(n,o,c)&&(o=c=r),c===r&&(typeof o=="boolean"?(c=o,o=r):typeof n=="boolean"&&(c=n,n=r)),n===r&&o===r?(n=0,o=1):(n=dr(n),o===r?(o=n,n=0):o=dr(o)),n>o){var p=n;n=o,o=p}if(c||n%1||o%1){var _=Qh();return Wt(n+_*(o-n+x7("1e-"+((_+"").length-1))),o)}return gc(n,o)}var qk=Bo(function(n,o,c){return o=o.toLowerCase(),n+(c?Lf(o):o)});function Lf(n){return Wc(Qe(n).toLowerCase())}function Rf(n){return n=Qe(n),n&&n.replace(t7,H7).replace(v7,"")}function Kk(n,o,c){n=Qe(n),o=bn(o);var p=n.length;c=c===r?p:no(He(c),0,p);var _=c;return c-=o.length,c>=0&&n.slice(c,_)==o}function Yk(n){return n=Qe(n),n&&D9.test(n)?n.replace(Xr,F7):n}function Xk(n){return n=Qe(n),n&&G9.test(n)?n.replace(zl,"\\$&"):n}var Jk=Bo(function(n,o,c){return n+(c?"-":"")+o.toLowerCase()}),Qk=Bo(function(n,o,c){return n+(c?" ":"")+o.toLowerCase()}),eE=P1("toLowerCase");function tE(n,o,c){n=Qe(n),o=He(o);var p=o?Lo(n):0;if(!o||p>=o)return n;var _=(o-p)/2;return ls(Ka(_),c)+n+ls(qa(_),c)}function nE(n,o,c){n=Qe(n),o=He(o);var p=o?Lo(n):0;return o&&p<o?n+ls(o-p,c):n}function rE(n,o,c){n=Qe(n),o=He(o);var p=o?Lo(n):0;return o&&p<o?ls(o-p,c)+n:n}function oE(n,o,c){return c||o==null?o=0:o&&(o=+o),hw(Qe(n).replace(Bl,""),o||0)}function iE(n,o,c){return(c?qt(n,o,c):o===r)?o=1:o=He(o),mc(Qe(n),o)}function aE(){var n=arguments,o=Qe(n[0]);return n.length<3?o:o.replace(n[1],n[2])}var sE=Bo(function(n,o,c){return n+(c?"_":"")+o.toLowerCase()});function lE(n,o,c){return c&&typeof c!="number"&&qt(n,o,c)&&(o=c=r),c=c===r?F:c>>>0,c?(n=Qe(n),n&&(typeof o=="string"||o!=null&&!Nc(o))&&(o=bn(o),!o&&To(n))?$r(zn(n),0,c):n.split(o,c)):[]}var cE=Bo(function(n,o,c){return n+(c?" ":"")+Wc(o)});function dE(n,o,c){return n=Qe(n),c=c==null?0:no(He(c),0,n.length),o=bn(o),n.slice(c,c+o.length)==o}function uE(n,o,c){var p=A.templateSettings;c&&qt(n,o,c)&&(o=r),n=Qe(n),o=Hc({},o,p,F1);var _=Hc({},o.imports,p.imports,F1),x=$t(_),L=Ql(_,x);mn(x,function(Te){if(ch.test(Te))throw new $e(d)});var P,N,ne=0,te=o.interpolate||Ra,le="__p += '",ve=tc((o.escape||Ra).source+"|"+te.source+"|"+(te===lh?K9:Ra).source+"|"+(o.evaluate||Ra).source+"|$","g"),_e="//# sourceURL="+(Je.call(o,"sourceURL")?(o.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++k7+"]")+`
`;n.replace(ve,function(Te,nt,je,Kt,Yn,zr){return je||(je=Kt),le+=n.slice(ne,zr).replace(n7,G7),nt&&(P=!0,le+=`' +
__e(`+nt+`) +
'`),Yn&&(N=!0,le+=`';
`+Yn+`;
__p += '`),je&&(le+=`' +
((__t = (`+je+`)) == null ? '' : __t) +
'`),ne=zr+Te.length,Te}),le+=`';
`;var Oe=Je.call(o,"variable")&&o.variable;if(!Oe)le=`with (obj) {
`+le+`
}
`;else if(ch.test(Oe))throw new $e(u);le=(N?le.replace($l,""):le).replace(Dl,"$1").replace(La,"$1;"),le="function("+(Oe||"obj")+`) {
`+(Oe?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(P?", __e = _.escape":"")+(N?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+le+`return __p
}`;var De=$f(function(){return Ye(x,_e+"return "+le).apply(r,L)});if(De.source=le,Bc(De))throw De;return De}function hE(n){return Qe(n).toLowerCase()}function fE(n){return Qe(n).toUpperCase()}function pE(n,o,c){if(n=Qe(n),n&&(c||o===r))return Gh(n);if(!n||!(o=bn(o)))return n;var p=zn(n),_=zn(o);return $r(p,Wh(p,_),Uh(p,_)+1).join("")}function gE(n,o,c){if(n=Qe(n),n&&(c||o===r))return n.slice(0,Zh(n)+1);if(!n||!(o=bn(o)))return n;var p=zn(n);return $r(p,0,Uh(p,zn(o))+1).join("")}function mE(n,o,c){if(n=Qe(n),n&&(c||o===r))return n.replace(Bl,"");if(!n||!(o=bn(o)))return n;var p=zn(n);return $r(p,Wh(p,zn(o))).join("")}function vE(n,o){var c=we,p=R;if(vt(o)){var _="separator"in o?o.separator:_;c="length"in o?He(o.length):c,p="omission"in o?bn(o.omission):p}n=Qe(n);var x=n.length;if(To(n)){var L=zn(n);x=L.length}if(c>=x)return n;var P=c-Lo(p);if(P<1)return p;var N=L?$r(L,0,P).join(""):n.slice(0,P);if(_===r)return N+p;if(L&&(P+=N.length-P),Nc(_)){if(n.slice(P).search(_)){var ne,te=N;for(_.global||(_=tc(_.source,Qe(dh.exec(_))+"g")),_.lastIndex=0;ne=_.exec(te);)var le=ne.index;N=N.slice(0,le===r?P:le)}}else if(n.indexOf(bn(_),P)!=P){var ve=N.lastIndexOf(_);ve>-1&&(N=N.slice(0,ve))}return N+p}function bE(n){return n=Qe(n),n&&$9.test(n)?n.replace(Mr,K7):n}var wE=Bo(function(n,o,c){return n+(c?" ":"")+o.toUpperCase()}),Wc=P1("toUpperCase");function Pf(n,o,c){return n=Qe(n),o=c?r:o,o===r?U7(n)?J7(n):$7(n):n.match(o)||[]}var $f=Ve(function(n,o){try{return gn(n,r,o)}catch(c){return Bc(c)?c:new $e(c)}}),_E=sr(function(n,o){return mn(o,function(c){c=Nn(c),jn(n,c,Dc(n[c],n))}),n});function yE(n){var o=n==null?0:n.length,c=Le();return n=o?ft(n,function(p){if(typeof p[1]!="function")throw new xn(l);return[c(p[0]),p[1]]}):[],Ve(function(p){for(var _=-1;++_<o;){var x=n[_];if(gn(x[0],this,p))return gn(x[1],this,p)}})}function kE(n){return qw(Cn(n,v))}function Uc(n){return function(){return n}}function EE(n,o){return n==null||n!==n?o:n}var SE=D1(),AE=D1(!0);function rn(n){return n}function Vc(n){return h1(typeof n=="function"?n:Cn(n,v))}function ME(n){return p1(Cn(n,v))}function xE(n,o){return g1(n,Cn(o,v))}var IE=Ve(function(n,o){return function(c){return Ii(c,n,o)}}),CE=Ve(function(n,o){return function(c){return Ii(n,c,o)}});function Zc(n,o,c){var p=$t(o),_=ts(o,p);c==null&&!(vt(o)&&(_.length||!p.length))&&(c=o,o=n,n=this,_=ts(o,$t(o)));var x=!(vt(c)&&"chain"in c)||!!c.chain,L=cr(n);return mn(_,function(P){var N=o[P];n[P]=N,L&&(n.prototype[P]=function(){var ne=this.__chain__;if(x||ne){var te=n(this.__wrapped__);return(te.__actions__=en(this.__actions__)).push({func:N,args:arguments,thisArg:n}),te.__chain__=ne,te}return N.apply(n,Ir([this.value()],arguments))})}),n}function OE(){return Pt._===this&&(Pt._=rw),this}function jc(){}function TE(n){return n=He(n),Ve(function(o){return m1(o,n)})}var LE=Ec(ft),RE=Ec(zh),PE=Ec(ql);function Df(n){return Oc(n)?Kl(Nn(n)):u8(n)}function $E(n){return function(o){return n==null?r:ro(n,o)}}var DE=B1(),zE=B1(!0);function qc(){return[]}function Kc(){return!1}function BE(){return{}}function NE(){return""}function HE(){return!0}function FE(n,o){if(n=He(n),n<1||n>ie)return[];var c=F,p=Wt(n,F);o=Le(o),n-=F;for(var _=Jl(p,o);++c<n;)o(c);return _}function GE(n){return Be(n)?ft(n,Nn):wn(n)?[n]:en(ef(Qe(n)))}function WE(n){var o=++tw;return Qe(n)+o}var UE=ss(function(n,o){return n+o},0),VE=Sc("ceil"),ZE=ss(function(n,o){return n/o},1),jE=Sc("floor");function qE(n){return n&&n.length?es(n,rn,cc):r}function KE(n,o){return n&&n.length?es(n,Le(o,2),cc):r}function YE(n){return Hh(n,rn)}function XE(n,o){return Hh(n,Le(o,2))}function JE(n){return n&&n.length?es(n,rn,fc):r}function QE(n,o){return n&&n.length?es(n,Le(o,2),fc):r}var eS=ss(function(n,o){return n*o},1),tS=Sc("round"),nS=ss(function(n,o){return n-o},0);function rS(n){return n&&n.length?Xl(n,rn):0}function oS(n,o){return n&&n.length?Xl(n,Le(o,2)):0}return A.after=xy,A.ary=hf,A.assign=pk,A.assignIn=Mf,A.assignInWith=xf,A.assignWith=Hc,A.at=gk,A.before=ff,A.bind=Dc,A.bindAll=_E,A.bindKey=pf,A.castArray=Ny,A.chain=cf,A.chunk=q8,A.compact=K8,A.concat=Y8,A.cond=yE,A.conforms=kE,A.constant=Uc,A.countBy=oy,A.create=mk,A.curry=gf,A.curryRight=mf,A.debounce=vf,A.defaults=vk,A.defaultsDeep=bk,A.defer=Iy,A.delay=Cy,A.difference=X8,A.differenceBy=J8,A.differenceWith=Q8,A.drop=e_,A.dropRight=t_,A.dropRightWhile=n_,A.dropWhile=r_,A.fill=o_,A.filter=ay,A.flatMap=cy,A.flatMapDeep=dy,A.flatMapDepth=uy,A.flatten=of,A.flattenDeep=i_,A.flattenDepth=a_,A.flip=Oy,A.flow=SE,A.flowRight=AE,A.fromPairs=s_,A.functions=Ak,A.functionsIn=Mk,A.groupBy=hy,A.initial=c_,A.intersection=d_,A.intersectionBy=u_,A.intersectionWith=h_,A.invert=Ik,A.invertBy=Ck,A.invokeMap=py,A.iteratee=Vc,A.keyBy=gy,A.keys=$t,A.keysIn=nn,A.map=ps,A.mapKeys=Tk,A.mapValues=Lk,A.matches=ME,A.matchesProperty=xE,A.memoize=ms,A.merge=Rk,A.mergeWith=If,A.method=IE,A.methodOf=CE,A.mixin=Zc,A.negate=vs,A.nthArg=TE,A.omit=Pk,A.omitBy=$k,A.once=Ty,A.orderBy=my,A.over=LE,A.overArgs=Ly,A.overEvery=RE,A.overSome=PE,A.partial=zc,A.partialRight=bf,A.partition=vy,A.pick=Dk,A.pickBy=Cf,A.property=Df,A.propertyOf=$E,A.pull=m_,A.pullAll=sf,A.pullAllBy=v_,A.pullAllWith=b_,A.pullAt=w_,A.range=DE,A.rangeRight=zE,A.rearg=Ry,A.reject=_y,A.remove=__,A.rest=Py,A.reverse=Pc,A.sampleSize=ky,A.set=Bk,A.setWith=Nk,A.shuffle=Ey,A.slice=y_,A.sortBy=My,A.sortedUniq=I_,A.sortedUniqBy=C_,A.split=lE,A.spread=$y,A.tail=O_,A.take=T_,A.takeRight=L_,A.takeRightWhile=R_,A.takeWhile=P_,A.tap=K_,A.throttle=Dy,A.thru=fs,A.toArray=Ef,A.toPairs=Of,A.toPairsIn=Tf,A.toPath=GE,A.toPlainObject=Af,A.transform=Hk,A.unary=zy,A.union=$_,A.unionBy=D_,A.unionWith=z_,A.uniq=B_,A.uniqBy=N_,A.uniqWith=H_,A.unset=Fk,A.unzip=$c,A.unzipWith=lf,A.update=Gk,A.updateWith=Wk,A.values=Fo,A.valuesIn=Uk,A.without=F_,A.words=Pf,A.wrap=By,A.xor=G_,A.xorBy=W_,A.xorWith=U_,A.zip=V_,A.zipObject=Z_,A.zipObjectDeep=j_,A.zipWith=q_,A.entries=Of,A.entriesIn=Tf,A.extend=Mf,A.extendWith=xf,Zc(A,A),A.add=UE,A.attempt=$f,A.camelCase=qk,A.capitalize=Lf,A.ceil=VE,A.clamp=Vk,A.clone=Hy,A.cloneDeep=Gy,A.cloneDeepWith=Wy,A.cloneWith=Fy,A.conformsTo=Uy,A.deburr=Rf,A.defaultTo=EE,A.divide=ZE,A.endsWith=Kk,A.eq=Hn,A.escape=Yk,A.escapeRegExp=Xk,A.every=iy,A.find=sy,A.findIndex=nf,A.findKey=wk,A.findLast=ly,A.findLastIndex=rf,A.findLastKey=_k,A.floor=jE,A.forEach=df,A.forEachRight=uf,A.forIn=yk,A.forInRight=kk,A.forOwn=Ek,A.forOwnRight=Sk,A.get=Fc,A.gt=Vy,A.gte=Zy,A.has=xk,A.hasIn=Gc,A.head=af,A.identity=rn,A.includes=fy,A.indexOf=l_,A.inRange=Zk,A.invoke=Ok,A.isArguments=ao,A.isArray=Be,A.isArrayBuffer=jy,A.isArrayLike=tn,A.isArrayLikeObject=kt,A.isBoolean=qy,A.isBuffer=Dr,A.isDate=Ky,A.isElement=Yy,A.isEmpty=Xy,A.isEqual=Jy,A.isEqualWith=Qy,A.isError=Bc,A.isFinite=ek,A.isFunction=cr,A.isInteger=wf,A.isLength=bs,A.isMap=_f,A.isMatch=tk,A.isMatchWith=nk,A.isNaN=rk,A.isNative=ok,A.isNil=ak,A.isNull=ik,A.isNumber=yf,A.isObject=vt,A.isObjectLike=wt,A.isPlainObject=Pi,A.isRegExp=Nc,A.isSafeInteger=sk,A.isSet=kf,A.isString=ws,A.isSymbol=wn,A.isTypedArray=Ho,A.isUndefined=lk,A.isWeakMap=ck,A.isWeakSet=dk,A.join=f_,A.kebabCase=Jk,A.last=Tn,A.lastIndexOf=p_,A.lowerCase=Qk,A.lowerFirst=eE,A.lt=uk,A.lte=hk,A.max=qE,A.maxBy=KE,A.mean=YE,A.meanBy=XE,A.min=JE,A.minBy=QE,A.stubArray=qc,A.stubFalse=Kc,A.stubObject=BE,A.stubString=NE,A.stubTrue=HE,A.multiply=eS,A.nth=g_,A.noConflict=OE,A.noop=jc,A.now=gs,A.pad=tE,A.padEnd=nE,A.padStart=rE,A.parseInt=oE,A.random=jk,A.reduce=by,A.reduceRight=wy,A.repeat=iE,A.replace=aE,A.result=zk,A.round=tS,A.runInContext=D,A.sample=yy,A.size=Sy,A.snakeCase=sE,A.some=Ay,A.sortedIndex=k_,A.sortedIndexBy=E_,A.sortedIndexOf=S_,A.sortedLastIndex=A_,A.sortedLastIndexBy=M_,A.sortedLastIndexOf=x_,A.startCase=cE,A.startsWith=dE,A.subtract=nS,A.sum=rS,A.sumBy=oS,A.template=uE,A.times=FE,A.toFinite=dr,A.toInteger=He,A.toLength=Sf,A.toLower=hE,A.toNumber=Ln,A.toSafeInteger=fk,A.toString=Qe,A.toUpper=fE,A.trim=pE,A.trimEnd=gE,A.trimStart=mE,A.truncate=vE,A.unescape=bE,A.uniqueId=WE,A.upperCase=wE,A.upperFirst=Wc,A.each=df,A.eachRight=uf,A.first=af,Zc(A,(function(){var n={};return qn(A,function(o,c){Je.call(A.prototype,c)||(n[c]=o)}),n})(),{chain:!1}),A.VERSION=i,mn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(n){A[n].placeholder=A}),mn(["drop","take"],function(n,o){Ze.prototype[n]=function(c){c=c===r?1:Rt(He(c),0);var p=this.__filtered__&&!o?new Ze(this):this.clone();return p.__filtered__?p.__takeCount__=Wt(c,p.__takeCount__):p.__views__.push({size:Wt(c,F),type:n+(p.__dir__<0?"Right":"")}),p},Ze.prototype[n+"Right"]=function(c){return this.reverse()[n](c).reverse()}}),mn(["filter","map","takeWhile"],function(n,o){var c=o+1,p=c==Q||c==ce;Ze.prototype[n]=function(_){var x=this.clone();return x.__iteratees__.push({iteratee:Le(_,3),type:c}),x.__filtered__=x.__filtered__||p,x}}),mn(["head","last"],function(n,o){var c="take"+(o?"Right":"");Ze.prototype[n]=function(){return this[c](1).value()[0]}}),mn(["initial","tail"],function(n,o){var c="drop"+(o?"":"Right");Ze.prototype[n]=function(){return this.__filtered__?new Ze(this):this[c](1)}}),Ze.prototype.compact=function(){return this.filter(rn)},Ze.prototype.find=function(n){return this.filter(n).head()},Ze.prototype.findLast=function(n){return this.reverse().find(n)},Ze.prototype.invokeMap=Ve(function(n,o){return typeof n=="function"?new Ze(this):this.map(function(c){return Ii(c,n,o)})}),Ze.prototype.reject=function(n){return this.filter(vs(Le(n)))},Ze.prototype.slice=function(n,o){n=He(n);var c=this;return c.__filtered__&&(n>0||o<0)?new Ze(c):(n<0?c=c.takeRight(-n):n&&(c=c.drop(n)),o!==r&&(o=He(o),c=o<0?c.dropRight(-o):c.take(o-n)),c)},Ze.prototype.takeRightWhile=function(n){return this.reverse().takeWhile(n).reverse()},Ze.prototype.toArray=function(){return this.take(F)},qn(Ze.prototype,function(n,o){var c=/^(?:filter|find|map|reject)|While$/.test(o),p=/^(?:head|last)$/.test(o),_=A[p?"take"+(o=="last"?"Right":""):o],x=p||/^find/.test(o);_&&(A.prototype[o]=function(){var L=this.__wrapped__,P=p?[1]:arguments,N=L instanceof Ze,ne=P[0],te=N||Be(L),le=function(nt){var je=_.apply(A,Ir([nt],P));return p&&ve?je[0]:je};te&&c&&typeof ne=="function"&&ne.length!=1&&(N=te=!1);var ve=this.__chain__,_e=!!this.__actions__.length,Oe=x&&!ve,De=N&&!_e;if(!x&&te){L=De?L:new Ze(this);var Te=n.apply(L,P);return Te.__actions__.push({func:fs,args:[le],thisArg:r}),new In(Te,ve)}return Oe&&De?n.apply(this,P):(Te=this.thru(le),Oe?p?Te.value()[0]:Te.value():Te)})}),mn(["pop","push","shift","sort","splice","unshift"],function(n){var o=Na[n],c=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",p=/^(?:pop|shift)$/.test(n);A.prototype[n]=function(){var _=arguments;if(p&&!this.__chain__){var x=this.value();return o.apply(Be(x)?x:[],_)}return this[c](function(L){return o.apply(Be(L)?L:[],_)})}}),qn(Ze.prototype,function(n,o){var c=A[o];if(c){var p=c.name+"";Je.call($o,p)||($o[p]=[]),$o[p].push({name:o,func:c})}}),$o[as(r,M).name]=[{name:"wrapper",func:r}],Ze.prototype.clone=ww,Ze.prototype.reverse=_w,Ze.prototype.value=yw,A.prototype.at=Y_,A.prototype.chain=X_,A.prototype.commit=J_,A.prototype.next=Q_,A.prototype.plant=ty,A.prototype.reverse=ny,A.prototype.toJSON=A.prototype.valueOf=A.prototype.value=ry,A.prototype.first=A.prototype.head,yi&&(A.prototype[yi]=ey),A})();typeof define=="function"&&typeof define.amd=="object"&&define.amd?(Pt._=Or,define(function(){return Or})):Jr?((Jr.exports=Or)._=Or,Ul._=Or):Pt._=Or}).call(e)})),xe=Di(qf(),1);function _s(e){return xe.default.isEmpty(e)||xe.default.isNil(e)}function yn(e){return _s(e)||e===!1||e===0}function Xc(e){return"listImages"in e&&!yn(e.listImages)}function Jc(e){return"listPages"in e&&!yn(e.listPages)}function Kf(e){return"bruteForce"in e&&!yn(e.bruteForce)}var Ne=(function(e){return e.ENGLISH="English",e.SPANISH="Spanish",e.PORTUGUESE="Portuguese",e.CHINESE="Chinese",e.RAW="Raw",e})({}),Fe=(function(e){return e.MANGA="manga",e.COMIC="comic",e.HENTAI="hentai",e})({});function Yf(e,t){return t in e}var Xf={name:["3Hentai","HentaiVox"],url:/https?:\/\/(www\.)?(3hentai|hentaivox).(net|com)\/(d|view)\/.+\/.+/,homepage:["https://3hentai.net/","https://hentaivox.com/"],language:[Ne.ENGLISH],category:Fe.HENTAI,waitVar:"readerPages",run(){return{title:unsafeWindow.readerPages.title.replace(/- Page.+/,"").trim(),series:unsafeWindow.readerPages.baseUri.replace("%s",""),pages:unsafeWindow.readerPages.lastPage,prev:"#",next:"#",listImages:xe.default.keys(unsafeWindow.readerPages.pages).map(e=>unsafeWindow.readerPages.baseUriImg.replace("%s",unsafeWindow.readerPages.pages[e].f))}}};function Jf(e,t=document.body){return new Promise(r=>{const i=document.querySelector(e);if(i){r(i);return}const a=new MutationObserver(()=>{const s=document.querySelector(e);s&&(r(s),a.disconnect())});a.observe(t,{childList:!0,subtree:!0,attributes:!0})})}function ys(e,t=250){return new Promise(r=>{const i=setInterval(()=>{e()&&(clearInterval(i),r(!0))},t)})}function Qc(e,t,r=document.body){return new Promise(i=>{const a=r.querySelector(e);if(a?.getAttribute(t)){i(a.getAttribute(t)??"");return}const s=new MutationObserver(()=>{const l=r.querySelector(e);l?.getAttribute(t)&&(i(l.getAttribute(t)??""),s.disconnect())});s.observe(r,{childList:!0,subtree:!0,attributes:!0,attributeFilter:[t]})})}function ed(e,t=document.body){return new Promise(r=>{if(!yn(unsafeWindow[e])){r(unsafeWindow[e]);return}const i=new MutationObserver(()=>{yn(unsafeWindow[e])||(r(unsafeWindow[e]),i.disconnect())});i.observe(t,{childList:!0,subtree:!0,attributes:!0})})}function Qf(e=1e3,t){return new Promise(r=>{setTimeout(()=>r(t),e)})}async function e2(e,t=1e3){const[r]=await Promise.all([e,Qf(t)]);return r}async function td(e,t,r,i,a="img",s="src"){const l=document.createElement("div");l.setAttribute("style","height: 100vh;width: 100vw;position: fixed;top: 0;left: 0;z-index: 100000;background: white;opacity: 0.5;"),document.body.append(l),e();const u=document.querySelector(r),d=document.querySelector(i),h=[];for(let f=1;f<=t;f+=1)h[f-1]=await e2(Qc(a,s,d??document.body),100),d?.querySelector(a)?.removeAttribute(s),u?.dispatchEvent(new Event("click"));return h}var t2={name:["8Muses.com","8Muses.io"],obs:"Slow start, bruteforce may be required",url:/https?:\/\/(comics.)?8muses.(com|io)\/(comics\/)?picture\/.+/,homepage:["https://comics.8muses.com/","https://8muses.io/"],language:[Ne.ENGLISH],category:Fe.HENTAI,async run(){const e=unsafeWindow.link_images?.slice(1,unsafeWindow.link_images.length)??[],t=document.querySelector('link[rel="last"]')?.getAttribute("href")?.match(/\d+$/)?.at(0),r=e?.length??parseInt(t??"0",10),i={title:[...document.querySelectorAll(".top-menu-breadcrumb li:not(:last-child)")].map(a=>a?.textContent?.trim()).join("/"),series:document.querySelector(".top-menu-breadcrumb li:nth-last-child(2) a")?.getAttribute("href"),pages:r,prev:"#",next:"#",lazy:!1,timer:10,listImages:e,async before(){unsafeWindow.link_images?.length||(i.listImages=await td(()=>{const a=document.querySelector(".page-prev");for(;document.querySelector(".c-dropdown-toggle")?.textContent?.match(/\d+/)?.at(0)!=="1";)a?.dispatchEvent(new Event("click"))},r,".page-next",".p-picture",".photo img","src"))}};return i}},n2={name:"9Hentai",url:/https?:\/\/(www\.)?9hentai.(so)\/g\/.+\/.+/,homepage:"https://9hentai.so",language:[Ne.ENGLISH],category:Fe.HENTAI,waitAttr:["#jumpPageModal input","max"],async run(){const e={id:parseInt(/\d+/.exec(window.location.pathname)?.at(0)??"0",10)},t={method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}},r=await fetch("/api/getBookByID",t).then(async i=>i.json());return{title:r.results.title,series:`/g/${r.results.id}/`,pages:r.results.total_page,prev:"#",next:"#",listImages:Array(r.results.total_page).fill(0).map((i,a)=>`${r.results.image_server.replace(".com",".so")+r.results.id}/${a+1}.jpg`)}}},r2={name:"AkumaMoe",url:/https?:\/\/(www\.)?akuma\.moe\/g\/.+\/.+/,homepage:"https://akuma.moe",language:[Ne.RAW],category:Fe.HENTAI,waitFunc:()=>unsafeWindow.img_lst?.length===document.querySelectorAll(".reader-nav:first-child .nav-select option")?.length,async run(){return{title:document.querySelector("h1.sr-only")?.textContent?.trim().replace(/^Reading /,""),series:`https://akuma.moe/g/${/\/g\/([^/]+)\//.exec(window.location.pathname)?.[1]}/`,pages:unsafeWindow.img_lst.length,prev:"#",next:"#",listImages:unsafeWindow.img_lst.map(e=>`${unsafeWindow.img_prt}/${e}`)}}},o2={name:"BestPornComix",url:/https?:\/\/(www\.)?bestporncomix.com\/gallery\/.+/,homepage:"https://www.bestporncomix.com",language:[Ne.ENGLISH],category:Fe.HENTAI,waitTime:5e3,run(){const e=[...document.querySelectorAll("figure a")];return{title:document.querySelector("h1.entry-title")?.textContent?.trim(),pages:e.length,prev:"#",next:"#",listImages:e.map(t=>t.getAttribute("href")??"")}}},i2={name:"DoujinMoeNM",url:/https?:\/\/(www\.)?doujins.com\/.+/,homepage:"https://doujins.com/",language:[Ne.ENGLISH],category:Fe.HENTAI,waitEle:".doujin",run(){const e=[...document.querySelectorAll(".doujin")];return{title:document.querySelector(".folder-title a:last-child")?.textContent?.trim(),series:document.querySelector(".folder-title a:nth-last-child(2)")?.getAttribute("href"),pages:e.length,prev:"#",next:"#",listImages:e.map(t=>t.getAttribute("data-file")??"")}}},a2={name:"Dragon Translation",url:/https?:\/\/(www\.)?dragontranslation.net\/leer\/.+/,homepage:"https://dragontranslation.net/es",language:[Ne.SPANISH],category:Fe.HENTAI,waitEle:"#chapter_imgs img",run(){const e=[...document.querySelectorAll("#chapter_imgs img")].map(t=>t.getAttribute("src")??"").filter(t=>t&&t!=="/discord2.jpg");return{title:document.querySelector("h1")?.textContent?.trim(),series:document.querySelector("h2 + div a")?.getAttribute("href"),pages:e.length,prev:document.querySelector(".fa-chevron-circle-left")?.parentElement?.getAttribute("href"),next:document.querySelector(".fa-chevron-circle-right")?.parentElement?.getAttribute("href"),listImages:e}}},s2={name:["ExHentai","e-Hentai"],url:/https?:\/\/(g\.)?(exhentai|e-hentai).org\/s\/.+\/.+/,homepage:["https://exhentai.org/","https://e-hentai.org/"],language:[Ne.ENGLISH],obs:"May get your IP Banned, use with moderation",category:Fe.HENTAI,async run(){const e=parseInt(document.querySelector(".sn div span:nth-child(2)")?.textContent??"0",10),t=Math.ceil(e/20),r=document.querySelector(".sb a")?.getAttribute("href")?.replace(/\?p=\d+/,""),i=Array(t).fill(0).map(async(s,l)=>fetch(`${r}?p=${l}`).then(async u=>u.text()).then(u=>new DOMParser().parseFromString(u,"text/html"))),a=(await Promise.all(i)).flatMap(s=>[...s.querySelectorAll("#gdt a")].map(l=>l.getAttribute("href")??""));return{title:document.querySelector("#i1 h1")?.textContent?.trim(),series:r,pages:e,begin:parseInt(document.querySelector("div#i2 span")?.textContent??"1",10),prev:"#",next:"#",listPages:a,img:"#img",lazy:!0,async reload(s){const l=`${a[s-1]}`,u=await fetch(l).then(h=>h.text()).then(h=>/nl\('([\d-]+)'\)/.exec(h)?.[1]),d=`${l}${l.indexOf("?")?"&":"?"}nl=${u}`;return fetch(d).then(h=>h.text()).then(h=>new DOMParser()?.parseFromString(h,"text/html")?.querySelector("#img")?.getAttribute("src")??"")}}}},l2={name:"FreeAdultComix",url:/https?:\/\/(www\.)?freeadultcomix.com\/.+/,homepage:"https://www.freeadultcomix.com",language:[Ne.ENGLISH],category:Fe.HENTAI,waitTime:5e3,run(){const e=[...document.querySelectorAll(".foto img")];return{title:document.querySelector(".post-conteudo h1")?.textContent?.trim(),pages:e.length,prev:"#",next:"#",listImages:e.map(t=>t.getAttribute("src")??"")}}},c2={name:"FSIComics",url:/https?:\/\/(www\.)?fsicomics.com\/.+/,homepage:"https://fsicomics.com/",language:[Ne.ENGLISH],category:Fe.HENTAI,run(){const e=[...document.querySelectorAll(".wp-block-gallery img")];return{title:document.querySelector(".s-title")?.textContent?.trim(),pages:e.length,prev:"#",next:"#",listImages:e.map(t=>t.getAttribute("data-large-file")??"")}}},d2={name:"GNTAI.net",url:/https?:\/\/(www\.)?gntai.net\/(?!(category|tags|autores))[^/]+\/.+/,homepage:"https://www.gntai.net/",language:[Ne.SPANISH],category:Fe.HENTAI,run(){const e=document.querySelector("#main > script")?.innerHTML.match(/var pages = [^;]+/)?.at(0)?.toString().match(/https?[^"]+/g)??[];return{title:document.querySelector(".entry-header h1")?.textContent?.trim(),pages:e?.length,prev:"#",next:"#",listImages:e}}},u2={name:"HDoujin",url:/https?:\/\/(www\.)?hdoujin\.org\/.+/,homepage:"https://hdoujin.org/",language:[Ne.ENGLISH],category:Fe.HENTAI,waitEle:"nav select option",async run(){const e=history.state.memo.gallery,t=e.resolution,{base:r,entries:i}=history.state.memo.data,a=i.map(s=>`${r}/${s.path}?w=${t}`);return{title:e.title,series:`/g/${e.id}/${e.key}/`,pages:a.length,prev:"#",next:"#",fetchOptions:{method:"GET",redirect:"follow"},listImages:a}}},h2={name:"Hentai2Read",url:/https?:\/\/(www\.)?hentai2read.com\/[^/]+\/\d+(.\d+)?\//,homepage:"https://hentai2read.com/",language:[Ne.ENGLISH],category:Fe.HENTAI,run(){return{title:document.querySelector(".reader-left-text")?.textContent?.trim(),series:unsafeWindow.gData.mainURL,pages:unsafeWindow.gData.images.length,prev:unsafeWindow.gData.previousURL,next:unsafeWindow.gData.nextURL,listImages:unsafeWindow.gData.images.map(e=>`https://static.hentaicdn.com/hentai${e}`)}}},f2={name:"HentaiEra",url:/https?:\/\/(www\.)?hentaiera.com\/view\/.+\/\d+\/?/,homepage:"https://hentaiera.com/",language:[Ne.ENGLISH],category:Fe.HENTAI,run(){const e=parseInt(document.querySelector(".total_pages")?.textContent??"0",10);return{title:document.querySelector("h1")?.textContent?.trim().replace(/ - Page .+$/,""),series:document.querySelector(".return_btn ")?.getAttribute("href"),pages:e,prev:"#",next:"#",listPages:Array(e).fill(0).map((t,r)=>window.location.href.replace(/\/\d*\/?$/,`/${r+1}`)),img:"#gimg",lazyAttr:"data-src"}}},p2={name:"HentaiForce",url:/https?:\/\/(www\.)?hentaiforce.net\/view\/.+\/\d+/,homepage:"https://hentaiforce.net/",language:[Ne.ENGLISH],category:Fe.HENTAI,run(){return{title:document.querySelector("h1")?.textContent?.trim().replace(/ - Page .+$/,""),series:document.querySelector(".reader-go-back ")?.getAttribute("href"),pages:unsafeWindow.readerPages.lastPage,prev:"#",next:"#",listImages:Array(unsafeWindow.readerPages.lastPage).fill(0).map((e,t)=>unsafeWindow.readerPages.baseUriImg.replace("%c",unsafeWindow.readerPages.pages[t+1].l).replace("%s",unsafeWindow.readerPages.pages[t+1].f))}}},g2=/^blob:(.+?)\/(.+)$/;function m2(e){return/^data:image\/(png|jpg|jpeg|gif|svg)/.test(e)}function v2(e){return g2.test(e)}function nd(e){switch(e){case"p":return"png";case"b":return"bmp";case"g":return"gif";case"w":return"webp";default:return"jpg"}}var b2={name:"HentaiFox",url:/https?:\/\/(www\.)?hentaifox.com\/g\/.+/,homepage:"https://www.hentaifox.com/",language:[Ne.ENGLISH],category:Fe.HENTAI,waitVar:"g_th",waitFunc:()=>document.querySelector("#gimg")?.classList.contains("loaded")??!1,run(){const e=parseInt(document.querySelector(".total_pages")?.textContent??"",10),t=document.querySelector("#gimg")?.getAttribute("src")?.replace(/\d+.\w+$/,"")??"";return{title:document.querySelector("title")?.textContent?.replace(/ - Page .+/,"").trim(),series:document.querySelector(".browse_buttons a")?.getAttribute("href"),pages:e,prev:"#",next:"#",listImages:Array(e).fill(0).map((r,i)=>`${t+(i+1)}.${nd(unsafeWindow.g_th[i+1][0])}`)}}},w2={name:["HentaiHand","nHentai.com"],url:/https?:\/\/(www\.)?(hentaihand|nhentai).com\/.+\/reader/,homepage:["https://hentaihand.com/","https://nhentai.com"],language:[Ne.ENGLISH],category:Fe.HENTAI,waitEle:".reader img",run(){const e=[...document.querySelectorAll(".reader img")];return{title:document.querySelector(".reader-header h5")?.textContent?.trim(),series:document.querySelector(".reader-header h5 a")?.getAttribute("href"),pages:e.length,prev:"#",next:"#",listImages:e.map(t=>t.getAttribute("data-src")??t.getAttribute("src")??"")}}},_2={name:"HentaIHere",url:/https?:\/\/(www\.)?hentaihere.com\/.+\/.+\/.+/,homepage:"https://www.hentaihere.com/",language:[Ne.ENGLISH],category:Fe.HENTAI,waitVar:"rff_imageList",run(){const e=document.querySelector("#arf-reader-img")?.getAttribute("src")?.replace(/\d.+/,"");return{title:unsafeWindow.rff_pageTitle.replace(/.+\|/,"").trim(),series:unsafeWindow.rff_thisManga,pages:unsafeWindow.rff_imageList.length,prev:unsafeWindow.rff_previousChapter,next:unsafeWindow.rff_nextChapter,listImages:unsafeWindow.rff_imageList.map(t=>e+t)}}},y2={name:"HentaiNexus",url:/https?:\/\/((www\.)?hentainexus.com|nexus.fakku.cc)\/read\/.+/,homepage:"https://hentainexus.com/",language:[Ne.ENGLISH],category:Fe.HENTAI,run(){const e=unsafeWindow.pageData?.map(t=>t.image)??unsafeWindow.images?.map(t=>t.url);return{title:document.querySelector("title")?.textContent?.replace(/^\[[\d/]+\]/,"").trim(),series:document.querySelector("#returnGalleryFooter a")?.getAttribute("href"),pages:e.length,prev:"#",next:"#",listImages:e}}},k2={name:"HenTalk",url:/https?:\/\/(www.)?hentalk.pw/,homepage:"https://hentalk.pw/",language:[Ne.ENGLISH],category:Fe.HENTAI,async run(){const e="https://hentalk.pw",t=await fetch(`${window.location.pathname}/__data.json?x-sveltekit-trailing-slash=1&x-sveltekit-invalidated=001`).then(async s=>s.json()).then(s=>s.nodes[2].data),r=t?.[t.find(s=>s?.gallery)?.gallery],i=t?.[r?.hash]||t?.[t.find(s=>s?.hash&&s?.id).hash],a=t?.[r.images].map(s=>t[s]).map(s=>t[s.filename]);return{title:t?.[r.title],series:window.location.href.replace(/read\/.+/,""),pages:a?.length,prev:"#",next:"#",listImages:a?.map(s=>`${e}/image/${i}/${s}`)}}},E2={name:"Hitomi",url:/https?:\/\/hitomi.la\/reader\/.+/,homepage:"https://hitomi.la/",language:[Ne.ENGLISH],category:Fe.HENTAI,waitAttr:["#comicImages img","src"],waitVar:"galleryinfo",run(){return{title:document.querySelector("title")?.textContent?.replace("| Hitomi.la","").trim(),series:document.querySelector(".brand")?.getAttribute("href"),pages:unsafeWindow.galleryinfo.files.length,prev:"#",next:"#",listImages:unsafeWindow.galleryinfo.files.map(e=>unsafeWindow.url_from_url_from_hash(unsafeWindow.galleryinfo,e,"webp"))}}},S2={name:"Imhentai",url:/https?:\/\/(www\.)?imhentai.xxx\/view\/.+\/.+\//,homepage:"https://imhentai.xxx/",language:[Ne.ENGLISH],category:Fe.HENTAI,waitVar:"g_th",async run(){const e=document.querySelector("#gallery_id")?.getAttribute("value"),t=document.querySelector("#image_dir")?.getAttribute("value"),r=parseInt(document.querySelector("#pages")?.getAttribute("value")??"",10),i=await ed("random_server");return{title:document.querySelector("title")?.textContent?.trim(),series:document.querySelector(".return_btn")?.getAttribute("href"),pages:r,prev:"#",next:"#",listImages:Array(r).fill(0).map((a,s)=>`//${i}/${t}/${e}/${s+1}.${nd(unsafeWindow.g_th[s+1][0])}`)}}},A2={name:["KingComix","Chochox","Comics18"],url:/https?:\/\/(www\.)?(kingcomix|chochox|comics18).(com|org)\/.+/,homepage:["https://kingcomix.com/","https://chochox.com/porno/","https://comics18.org/"],language:[Ne.ENGLISH,Ne.SPANISH],category:Fe.HENTAI,run(){const e=[...document.querySelectorAll("figure img, .entry-content img:not(a img), .wp-content img")];return{title:document.querySelector("h1.singleTitle-h1")?.textContent?.trim(),pages:e.length,prev:"#",next:"#",listImages:e.map(t=>t.getAttribute("data-src")??t.getAttribute("data-full-url")??t.getAttribute("data-lazy-src")??t.getAttribute("src")??"")}}},M2={name:"Luscious",url:/https?:\/\/(www\.)?luscious.net\/.+\/read\/.+/,homepage:"https://luscious.net/",language:[Ne.ENGLISH],category:Fe.HENTAI,waitEle:".album-info div",async run(){const e=parseInt(document.querySelector('input[name="page_number"] + span')?.textContent?.match(/\d+/)?.pop()??"0",10),t=Math.ceil(e/50),r=parseInt(document.querySelector(".album-heading a")?.getAttribute("href")?.match(/\d+\//)?.toString()??"0",10),i="&query=%20query%20PictureListInsideAlbum(%24input%3A%20PictureListInput!)%20%7B%20picture%20%7B%20list(input%3A%20%24input)%20%7B%20info%20%7B%20...FacetCollectionInfo%20%7D%20items%20%7B%20__typename%20id%20title%20description%20created%20like_status%20number_of_comments%20number_of_favorites%20moderation_status%20width%20height%20resolution%20aspect_ratio%20url_to_original%20url_to_video%20is_animated%20position%20permissions%20url%20tags%20%7B%20category%20text%20url%20%7D%20thumbnails%20%7B%20width%20height%20size%20url%20%7D%20%7D%20%7D%20%7D%20%7D%20fragment%20FacetCollectionInfo%20on%20FacetCollectionInfo%20%7B%20page%20has_next_page%20has_previous_page%20total_items%20total_pages%20items_per_page%20url_complete%20%7D%20",a=Array(t).fill(0).map(async(l,u)=>{const d=`https://apicdn.luscious.net/graphql/nobatch/?operationName=PictureListInsideAlbum&variables={"input":{"filters":[{"name":"album_id","value":"${r}"}],"display":"position","items_per_page":50,"page":${u+1}}}${i}`;return GM.xmlHttpRequest({method:"GET",url:d}).then(h=>JSON.parse(h.responseText))}),s=(await Promise.all(a)).flatMap(l=>l.data.picture.list.items.map(u=>u.url_to_original));return{title:document.querySelector(".album-heading a")?.textContent?.trim(),series:document.querySelector(".album-heading a")?.getAttribute("href"),pages:e,prev:"#",next:"#",listImages:s}}},rd=/^([\t\n])*(https?:\/\/)?.+\.(jpg|jpeg|png|gif|bmp|webp).*$/;function od(){return[...document.querySelectorAll(".wp-manga-chapter-img, .blocks-gallery-item img, .reading-content img, #chapter-images img, #chapterContent img")].map(e=>{const t=[...e.attributes].filter(r=>/.*(src|url).*/i.test(r.name)&&!/^.*(blank|lazy|loading).*$/.test(r.value));return t.length===0?"":t.find(r=>rd.test(r.value))?.value??e?.getAttribute("src")??""})}var x2={name:["Madara WordPress Plugin","MangaHaus","Isekai Scan","Comic Kiba","Zinmanga","mangatx","Toonily","Mngazuki","JaiminisBox","DisasterScans","ManhuaPlus","TopManhua","NovelMic","Reset-Scans","LeviatanScans","Dragon Tea","SetsuScans","ToonGod","Hades Scans"],url:/https?:\/\/.+\/(manga|series|manhua|comic|ch|novel|webtoon|tmo)\/.+\/.+/,homepage:["https://mangabooth.com/","https://manhuaus.com","https://isekaiscan.com/","https://comickiba.com/","https://zinmanga.com/","https://mangatx.com/","https://toonily.net/","https://mangazuki.me/","https://jaiminisbox.net","https://disasterscans.com/","https://manhuaplus.org/","https://www.topmanhua.com/","https://novelmic.com/","https://reset-scans.com/","https://leviatanscans.com/","https://dragontea.ink/","https://setsuscans.com/","https://toongod.org/home/","https://lectorhades.latamtoon.com"],language:[Ne.ENGLISH],obs:"Any Site that uses Madara WordPress Plugin",category:Fe.MANGA,waitFunc:()=>{const e=od();return e.length>0&&e.every(t=>t&&rd.test(t))},run(){const e=od();return{title:document.querySelector("#chapter-heading")?.textContent?.trim(),series:(document.querySelector(".breadcrumb li:nth-child(3) a")??document.querySelector(".breadcrumb li:nth-child(2) a"))?.getAttribute("href"),pages:e.length,prev:document.querySelector(".prev_page")?.getAttribute("href"),next:document.querySelector(".next_page")?.getAttribute("href"),listImages:e}}},I2={...x2,name:["Madara WordPress Plugin","AllPornComic","Manytoon","Manga District"],url:/https?:\/\/.+\/(porncomic|read-scan|title)\/.+\/.+/,homepage:["#","https://allporncomic.com/","https://manytoon.com/","https://mangadistrict.com/"],category:Fe.HENTAI},C2={name:"MultPorn",url:/https?:\/\/(www\.)?multporn.net\/(comics|hentai_manga)\/.+/,homepage:"https://multporn.net/",language:[Ne.ENGLISH],category:Fe.HENTAI,async run(){const e=/"configUrl":"(.+?)",/.exec(document.head.textContent)?.at(1)?.replaceAll("\\","")??"",t=[...(await fetch(e).then(async r=>r.text()).then(r=>new DOMParser().parseFromString(r,"text/xml"))).querySelectorAll("image")];return{title:document.querySelector("#page-title")?.textContent?.trim(),pages:t.length,prev:"#",next:"#",listImages:t.map(r=>r.getAttribute("imageURL")??"")}}},O2={name:"MyHentaiGallery",url:/https?:\/\/(www\.)?myhentaigallery.com\/g\/.+\/\d+/,homepage:"https://www.myhentaigallery.com",language:[Ne.ENGLISH],category:Fe.HENTAI,run(){const e=document.getElementById("js__pagination__next")?.parentElement?.previousElementSibling?.querySelector("a"),t=parseInt(e?.textContent??"",10);return{title:document.querySelector("title")?.textContent?.trim(),series:document.querySelector(".back-to-gallery a")?.getAttribute("href"),pages:t,prev:"#",next:"#",listPages:Array(t).fill(0).map((r,i)=>window.location.href.replace(/\/\d+$/,`/${i+1}`)),img:".gallery-slide img"}}},T2={name:["nHentai.net"],url:/https?:\/\/(www\.)?(nhentai).(net|xxx|com|to)\/g\/.+/,homepage:["https://nhentai.net/"],language:[Ne.ENGLISH],category:Fe.HENTAI,waitEle:"#image-container img",async run(){const e=await fetch("https://nhentai.net/api/v2/config").then(async r=>r.json()),t=await fetch(`https://nhentai.net/api/v2/galleries/${window.location.pathname.split("/")[2]}`).then(async r=>r.json());return{title:document.querySelector("title")?.textContent?.split("- Page")[0].trim(),series:document.querySelector(".go-back")?.getAttribute("href"),pages:t.pages.length,prev:"#",next:"#",listImages:t.pages.map(r=>`${e.image_servers[Math.floor(Math.random()*e.image_servers.length)]}/${r.path}`)}}},L2={name:"PornComicsHD",url:/https?:\/\/(www\.)?porncomicshd.com\/es.*/,homepage:"https://porncomicshd.com/es",language:[Ne.SPANISH],category:Fe.HENTAI,waitEle:"app-comic-reader img",async run(){const e=[...document.querySelectorAll("app-comic-reader img")];return{title:document.querySelector("h1")?.textContent?.trim(),pages:e.length,prev:"#",next:"#",lazy:!1,listImages:e.map(t=>t.getAttribute("src")??"")}}},R2={name:"Pururin",url:/https?:\/\/(www\.)?pururin.me\/(view|read)\/.+\/.+\/.+/,homepage:"https://pururin.me/",language:[Ne.ENGLISH],category:Fe.HENTAI,waitAttr:[".img-viewer img","src"],run(){const e=document.querySelector(".img-viewer img")?.getAttribute("src")??"",t=[...document.querySelectorAll(".img-select option")];return{title:document.querySelector(".title")?.textContent?.trim(),series:document.querySelector(".breadcrumb-item:nth-child(4) a")?.getAttribute("href"),pages:t.length,prev:"#",next:"#",listImages:t.map((r,i)=>e.replace(/\/\d+\./,`/${i+1}.`))}}},P2={name:"SchaleNetwork",url:/https?:\/\/(www\.)?(niyaniya|shupogaki|hoshino).(moe|one)/,homepage:"https://schale.network/",language:[Ne.ENGLISH],category:Fe.HENTAI,waitEle:"nav select option",async run(){const e=history.state.memo.gallery,t=e.resolution,{base:r,entries:i}=history.state.memo.data,a=i.map(s=>`${r}/${s.path}?w=${t}`);return{title:e.title,series:`/g/${e.id}/${e.key}/`,pages:a.length,prev:"#",next:"#",fetchOptions:{method:"GET",redirect:"follow"},listImages:a}}},$2={name:"Simply-Hentai",url:/https?:\/\/(www\.)?simply-hentai.com\/.+\/page\/.+/,homepage:"https://simply-hentai.com/",language:[Ne.ENGLISH],category:Fe.HENTAI,waitEle:"#__NEXT_DATA__",async run(){const e=JSON.parse(document.querySelector("#__NEXT_DATA__")?.innerHTML??"").props.pageProps.data.pages.map(t=>t.sizes.full);return{title:document.querySelector(".content-headline a")?.textContent?.trim(),series:document.querySelector(".content-headline a")?.getAttribute("href"),pages:e.length,prev:"#",next:"#",listImages:e}}},D2={name:"TMOHentai",url:/https?:\/\/(www\.)?tmohentai.com\/reader\/.+\/(paginated\/\d+|cascade)/,homepage:"https://tmohentai.com/",language:[Ne.SPANISH],category:Fe.HENTAI,run(){const e=[...document.querySelectorAll(".content-image")].map(t=>t.getAttribute("data-original")??t.getAttribute("src")??"");return{before(){window.location.pathname.includes("paginated")&&(window.location.pathname=window.location.pathname.replace(/paginated.*/,"cascade"))},title:document.querySelector(".reader-title")?.textContent?.trim(),series:document.querySelector(".nav-justified li a")?.getAttribute("href"),pages:e.length,prev:"#",next:"#",listImages:e}}},z2={name:"Tsumino",url:/https?:\/\/(www\.)?tsumino.com\/Read\/Index\/\d+(\?page=.+)?/,homepage:"https://tsumino.com/",language:[Ne.ENGLISH],category:Fe.HENTAI,async run(){const e=document.querySelector("#image-container")?.getAttribute("data-opt"),t=document.querySelector("#image-container")?.getAttribute("data-cdn")??"",r=`https://www.tsumino.com/Read/Load?q=${e}`,i=await fetch(r).then(async a=>a.json());return{title:document.querySelector("title")?.textContent?.replace(/.+Read/,"").trim(),series:i.reader_start_url,pages:i.reader_page_total,prev:"#",next:"#",listImages:Array(i.reader_page_total).fill(0).map((a,s)=>t.replace("[PAGE]",`${s+1}`))}}},B2={name:["vermangasporno","vercomicsporno"],url:/https?:\/\/(www\.)?(vermangasporno|vercomicsporno).com\/.+/,homepage:["https://vermangasporno.com/","https://vercomicsporno.com/"],language:[Ne.SPANISH],category:Fe.HENTAI,waitEle:'img[loading="lazy"].size-full, .comicimg picture img, .wp-content img',run(){const e=[...document.querySelectorAll('img[loading="lazy"].size-full, .comicimg picture img, .wp-content img')];return{title:document.querySelector("h1.titl, title")?.textContent?.trim(),pages:e.length,prev:"#",next:"#",listImages:e.map(t=>t.getAttribute("data-lazy-src")??t.getAttribute("data-src")??t.getAttribute("src")??"")}}},N2={name:"wnacg",url:/https?:\/\/(www\.)?wnacg.com\/photos-view-id-.+/,homepage:"https://wnacg.com/",language:[Ne.ENGLISH,Ne.RAW,Ne.CHINESE],category:Fe.HENTAI,run(){const e=[...document.querySelectorAll(".pageselect option")];return{title:document.querySelector(".bread a:last-of-type")?.textContent?.trim(),pages:e.length,prev:"#",next:"#",listPages:e.map(t=>window.location.pathname.replace(/\d+/,t.value)),img:"#picarea"}}},H2={name:"XlecxOne",url:/https?:\/\/(www\.)?xlecx.one\/.+/,homepage:"https://xlecx.one/",language:[Ne.ENGLISH],category:Fe.HENTAI,run(){const e=[...new Set([...document.querySelectorAll("article .page__text img , article #content-2 img")].map(t=>t.getAttribute("data-src")??t.getAttribute("data-srce")??t.closest("a")?.getAttribute("href")??t.getAttribute("src")??""))];return{title:document.querySelector("title")?.textContent?.trim(),pages:e.length,prev:"#",next:"#",listImages:e}}},F2={name:"xyzcomics",url:/https?:\/\/(www\.)?xyzcomics.com\/.+/,homepage:"https://xyzcomics.com/",language:[Ne.ENGLISH],category:Fe.HENTAI,run(){const e=[...document.querySelectorAll(".jig-link")];return{title:document.querySelector(".entry-title")?.textContent?.trim(),pages:e.length,prev:"#",next:"#",listImages:e.map(t=>t.getAttribute("href")??"")}}},G2={name:"Yabai",url:/https?:\/\/(www\.)?yabai.si\/g\/.+\/read/,homepage:"https://yabai.si/",language:[Ne.ENGLISH],category:Fe.HENTAI,async run(){const e=document.querySelectorAll("nav select option").length,t={title:document.querySelector("title")?.textContent?.trim(),series:"../",pages:e,prev:"#",next:"#",listImages:[""],async before(){t.listImages=await td(()=>{const r=document.querySelector("select option");r&&(r.selected=!0),document.querySelector("select")?.dispatchEvent(new Event("change"))},e,'button[title="Next"]',"h1 + div","img.mx-auto","src")}};return t}},W2=[r2,o2,i2,a2,t2,s2,c2,l2,d2,u2,h2,f2,p2,b2,w2,_2,y2,k2,E2,S2,A2,M2,C2,O2,T2,n2,L2,R2,P2,$2,D2,Xf,z2,B2,N2,H2,F2,G2,I2],U2=_n(((e,t)=>{(function(r,i){typeof e=="object"&&typeof t=="object"?t.exports=i():typeof define=="function"&&define.amd?define([],i):typeof e=="object"?e.bowser=i():r.bowser=i()})(e,(function(){return(function(r){var i={};function a(s){if(i[s])return i[s].exports;var l=i[s]={i:s,l:!1,exports:{}};return r[s].call(l.exports,l,l.exports,a),l.l=!0,l.exports}return a.m=r,a.c=i,a.d=function(s,l,u){a.o(s,l)||Object.defineProperty(s,l,{enumerable:!0,get:u})},a.r=function(s){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})},a.t=function(s,l){if(1&l&&(s=a(s)),8&l||4&l&&typeof s=="object"&&s&&s.__esModule)return s;var u=Object.create(null);if(a.r(u),Object.defineProperty(u,"default",{enumerable:!0,value:s}),2&l&&typeof s!="string")for(var d in s)a.d(u,d,function(h){return s[h]}.bind(null,d));return u},a.n=function(s){var l=s&&s.__esModule?function(){return s.default}:function(){return s};return a.d(l,"a",l),l},a.o=function(s,l){return Object.prototype.hasOwnProperty.call(s,l)},a.p="",a(a.s=90)})({17:function(r,i,a){"use strict";i.__esModule=!0,i.default=void 0;var s=a(18);i.default=(function(){function l(){}return l.getFirstMatch=function(u,d){var h=d.match(u);return h&&h.length>0&&h[1]||""},l.getSecondMatch=function(u,d){var h=d.match(u);return h&&h.length>1&&h[2]||""},l.matchAndReturnConst=function(u,d,h){if(u.test(d))return h},l.getWindowsVersionName=function(u){switch(u){case"NT":return"NT";case"XP":return"XP";case"NT 5.0":return"2000";case"NT 5.1":return"XP";case"NT 5.2":return"2003";case"NT 6.0":return"Vista";case"NT 6.1":return"7";case"NT 6.2":return"8";case"NT 6.3":return"8.1";case"NT 10.0":return"10";default:return}},l.getMacOSVersionName=function(u){var d=u.split(".").splice(0,2).map((function(b){return parseInt(b,10)||0}));d.push(0);var h=d[0],f=d[1];if(h===10)switch(f){case 5:return"Leopard";case 6:return"Snow Leopard";case 7:return"Lion";case 8:return"Mountain Lion";case 9:return"Mavericks";case 10:return"Yosemite";case 11:return"El Capitan";case 12:return"Sierra";case 13:return"High Sierra";case 14:return"Mojave";case 15:return"Catalina";default:return}switch(h){case 11:return"Big Sur";case 12:return"Monterey";case 13:return"Ventura";case 14:return"Sonoma";case 15:return"Sequoia";default:return}},l.getAndroidVersionName=function(u){var d=u.split(".").splice(0,2).map((function(h){return parseInt(h,10)||0}));if(d.push(0),!(d[0]===1&&d[1]<5))return d[0]===1&&d[1]<6?"Cupcake":d[0]===1&&d[1]>=6?"Donut":d[0]===2&&d[1]<2?"Eclair":d[0]===2&&d[1]===2?"Froyo":d[0]===2&&d[1]>2?"Gingerbread":d[0]===3?"Honeycomb":d[0]===4&&d[1]<1?"Ice Cream Sandwich":d[0]===4&&d[1]<4?"Jelly Bean":d[0]===4&&d[1]>=4?"KitKat":d[0]===5?"Lollipop":d[0]===6?"Marshmallow":d[0]===7?"Nougat":d[0]===8?"Oreo":d[0]===9?"Pie":void 0},l.getVersionPrecision=function(u){return u.split(".").length},l.compareVersions=function(u,d,h){h===void 0&&(h=!1);var f=l.getVersionPrecision(u),b=l.getVersionPrecision(d),v=Math.max(f,b),m=0,g=l.map([u,d],(function(k){var y=v-l.getVersionPrecision(k),S=k+new Array(y+1).join(".0");return l.map(S.split("."),(function(M){return new Array(20-M.length).join("0")+M})).reverse()}));for(h&&(m=v-Math.min(f,b)),v-=1;v>=m;){if(g[0][v]>g[1][v])return 1;if(g[0][v]===g[1][v]){if(v===m)return 0;v-=1}else if(g[0][v]<g[1][v])return-1}},l.map=function(u,d){var h,f=[];if(Array.prototype.map)return Array.prototype.map.call(u,d);for(h=0;h<u.length;h+=1)f.push(d(u[h]));return f},l.find=function(u,d){var h,f;if(Array.prototype.find)return Array.prototype.find.call(u,d);for(h=0,f=u.length;h<f;h+=1){var b=u[h];if(d(b,h))return b}},l.assign=function(u){for(var d,h,f=u,b=arguments.length,v=new Array(b>1?b-1:0),m=1;m<b;m++)v[m-1]=arguments[m];if(Object.assign)return Object.assign.apply(Object,[u].concat(v));var g=function(){var k=v[d];typeof k=="object"&&k!==null&&Object.keys(k).forEach((function(y){f[y]=k[y]}))};for(d=0,h=v.length;d<h;d+=1)g();return u},l.getBrowserAlias=function(u){return s.BROWSER_ALIASES_MAP[u]},l.getBrowserTypeByAlias=function(u){return s.BROWSER_MAP[u]||""},l})(),r.exports=i.default},18:function(r,i,a){"use strict";i.__esModule=!0,i.ENGINE_MAP=i.OS_MAP=i.PLATFORMS_MAP=i.BROWSER_MAP=i.BROWSER_ALIASES_MAP=void 0,i.BROWSER_ALIASES_MAP={AmazonBot:"amazonbot","Amazon Silk":"amazon_silk","Android Browser":"android",BaiduSpider:"baiduspider",Bada:"bada",BingCrawler:"bingcrawler",Brave:"brave",BlackBerry:"blackberry","ChatGPT-User":"chatgpt_user",Chrome:"chrome",ClaudeBot:"claudebot",Chromium:"chromium",Diffbot:"diffbot",DuckDuckBot:"duckduckbot",DuckDuckGo:"duckduckgo",Electron:"electron",Epiphany:"epiphany",FacebookExternalHit:"facebookexternalhit",Firefox:"firefox",Focus:"focus",Generic:"generic","Google Search":"google_search",Googlebot:"googlebot",GPTBot:"gptbot","Internet Explorer":"ie",InternetArchiveCrawler:"internetarchivecrawler","K-Meleon":"k_meleon",LibreWolf:"librewolf",Linespider:"linespider",Maxthon:"maxthon","Meta-ExternalAds":"meta_externalads","Meta-ExternalAgent":"meta_externalagent","Meta-ExternalFetcher":"meta_externalfetcher","Meta-WebIndexer":"meta_webindexer","Microsoft Edge":"edge","MZ Browser":"mz","NAVER Whale Browser":"naver","OAI-SearchBot":"oai_searchbot",Omgilibot:"omgilibot",Opera:"opera","Opera Coast":"opera_coast","Pale Moon":"pale_moon",PerplexityBot:"perplexitybot","Perplexity-User":"perplexity_user",PhantomJS:"phantomjs",PingdomBot:"pingdombot",Puffin:"puffin",QQ:"qq",QQLite:"qqlite",QupZilla:"qupzilla",Roku:"roku",Safari:"safari",Sailfish:"sailfish","Samsung Internet for Android":"samsung_internet",SlackBot:"slackbot",SeaMonkey:"seamonkey",Sleipnir:"sleipnir","Sogou Browser":"sogou",Swing:"swing",Tizen:"tizen","UC Browser":"uc",Vivaldi:"vivaldi","WebOS Browser":"webos",WeChat:"wechat",YahooSlurp:"yahooslurp","Yandex Browser":"yandex",YandexBot:"yandexbot",YouBot:"youbot"},i.BROWSER_MAP={amazonbot:"AmazonBot",amazon_silk:"Amazon Silk",android:"Android Browser",baiduspider:"BaiduSpider",bada:"Bada",bingcrawler:"BingCrawler",blackberry:"BlackBerry",brave:"Brave",chatgpt_user:"ChatGPT-User",chrome:"Chrome",claudebot:"ClaudeBot",chromium:"Chromium",diffbot:"Diffbot",duckduckbot:"DuckDuckBot",duckduckgo:"DuckDuckGo",edge:"Microsoft Edge",electron:"Electron",epiphany:"Epiphany",facebookexternalhit:"FacebookExternalHit",firefox:"Firefox",focus:"Focus",generic:"Generic",google_search:"Google Search",googlebot:"Googlebot",gptbot:"GPTBot",ie:"Internet Explorer",internetarchivecrawler:"InternetArchiveCrawler",k_meleon:"K-Meleon",librewolf:"LibreWolf",linespider:"Linespider",maxthon:"Maxthon",meta_externalads:"Meta-ExternalAds",meta_externalagent:"Meta-ExternalAgent",meta_externalfetcher:"Meta-ExternalFetcher",meta_webindexer:"Meta-WebIndexer",mz:"MZ Browser",naver:"NAVER Whale Browser",oai_searchbot:"OAI-SearchBot",omgilibot:"Omgilibot",opera:"Opera",opera_coast:"Opera Coast",pale_moon:"Pale Moon",perplexitybot:"PerplexityBot",perplexity_user:"Perplexity-User",phantomjs:"PhantomJS",pingdombot:"PingdomBot",puffin:"Puffin",qq:"QQ Browser",qqlite:"QQ Browser Lite",qupzilla:"QupZilla",roku:"Roku",safari:"Safari",sailfish:"Sailfish",samsung_internet:"Samsung Internet for Android",seamonkey:"SeaMonkey",slackbot:"SlackBot",sleipnir:"Sleipnir",sogou:"Sogou Browser",swing:"Swing",tizen:"Tizen",uc:"UC Browser",vivaldi:"Vivaldi",webos:"WebOS Browser",wechat:"WeChat",yahooslurp:"YahooSlurp",yandex:"Yandex Browser",yandexbot:"YandexBot",youbot:"YouBot"},i.PLATFORMS_MAP={bot:"bot",desktop:"desktop",mobile:"mobile",tablet:"tablet",tv:"tv"},i.OS_MAP={Android:"Android",Bada:"Bada",BlackBerry:"BlackBerry",ChromeOS:"Chrome OS",HarmonyOS:"HarmonyOS",iOS:"iOS",Linux:"Linux",MacOS:"macOS",PlayStation4:"PlayStation 4",Roku:"Roku",Tizen:"Tizen",WebOS:"WebOS",Windows:"Windows",WindowsPhone:"Windows Phone"},i.ENGINE_MAP={Blink:"Blink",EdgeHTML:"EdgeHTML",Gecko:"Gecko",Presto:"Presto",Trident:"Trident",WebKit:"WebKit"}},90:function(r,i,a){"use strict";i.__esModule=!0,i.default=void 0;var s,l=(s=a(91))&&s.__esModule?s:{default:s},u=a(18);function d(h,f){for(var b=0;b<f.length;b++){var v=f[b];v.enumerable=v.enumerable||!1,v.configurable=!0,"value"in v&&(v.writable=!0),Object.defineProperty(h,v.key,v)}}i.default=(function(){function h(){}var f,b,v;return h.getParser=function(m,g,k){if(g===void 0&&(g=!1),k===void 0&&(k=null),typeof m!="string")throw new Error("UserAgent should be a string");return new l.default(m,g,k)},h.parse=function(m,g){return g===void 0&&(g=null),new l.default(m,g).getResult()},f=h,v=[{key:"BROWSER_MAP",get:function(){return u.BROWSER_MAP}},{key:"ENGINE_MAP",get:function(){return u.ENGINE_MAP}},{key:"OS_MAP",get:function(){return u.OS_MAP}},{key:"PLATFORMS_MAP",get:function(){return u.PLATFORMS_MAP}}],(b=null)&&d(f.prototype,b),v&&d(f,v),h})(),r.exports=i.default},91:function(r,i,a){"use strict";i.__esModule=!0,i.default=void 0;var s=f(a(92)),l=f(a(93)),u=f(a(94)),d=f(a(95)),h=f(a(17));function f(b){return b&&b.__esModule?b:{default:b}}i.default=(function(){function b(m,g,k){if(g===void 0&&(g=!1),k===void 0&&(k=null),m==null||m==="")throw new Error("UserAgent parameter can't be empty");this._ua=m;var y=!1;typeof g=="boolean"?(y=g,this._hints=k):this._hints=g!=null&&typeof g=="object"?g:null,this.parsedResult={},y!==!0&&this.parse()}var v=b.prototype;return v.getHints=function(){return this._hints},v.hasBrand=function(m){if(!this._hints||!Array.isArray(this._hints.brands))return!1;var g=m.toLowerCase();return this._hints.brands.some((function(k){return k.brand&&k.brand.toLowerCase()===g}))},v.getBrandVersion=function(m){if(this._hints&&Array.isArray(this._hints.brands)){var g=m.toLowerCase(),k=this._hints.brands.find((function(y){return y.brand&&y.brand.toLowerCase()===g}));return k?k.version:void 0}},v.getUA=function(){return this._ua},v.test=function(m){return m.test(this._ua)},v.parseBrowser=function(){var m=this;this.parsedResult.browser={};var g=h.default.find(s.default,(function(k){if(typeof k.test=="function")return k.test(m);if(Array.isArray(k.test))return k.test.some((function(y){return m.test(y)}));throw new Error("Browser's test function is not valid")}));return g&&(this.parsedResult.browser=g.describe(this.getUA(),this)),this.parsedResult.browser},v.getBrowser=function(){return this.parsedResult.browser?this.parsedResult.browser:this.parseBrowser()},v.getBrowserName=function(m){return m?String(this.getBrowser().name).toLowerCase()||"":this.getBrowser().name||""},v.getBrowserVersion=function(){return this.getBrowser().version},v.getOS=function(){return this.parsedResult.os?this.parsedResult.os:this.parseOS()},v.parseOS=function(){var m=this;this.parsedResult.os={};var g=h.default.find(l.default,(function(k){if(typeof k.test=="function")return k.test(m);if(Array.isArray(k.test))return k.test.some((function(y){return m.test(y)}));throw new Error("Browser's test function is not valid")}));return g&&(this.parsedResult.os=g.describe(this.getUA())),this.parsedResult.os},v.getOSName=function(m){var g=this.getOS().name;return m?String(g).toLowerCase()||"":g||""},v.getOSVersion=function(){return this.getOS().version},v.getPlatform=function(){return this.parsedResult.platform?this.parsedResult.platform:this.parsePlatform()},v.getPlatformType=function(m){m===void 0&&(m=!1);var g=this.getPlatform().type;return m?String(g).toLowerCase()||"":g||""},v.parsePlatform=function(){var m=this;this.parsedResult.platform={};var g=h.default.find(u.default,(function(k){if(typeof k.test=="function")return k.test(m);if(Array.isArray(k.test))return k.test.some((function(y){return m.test(y)}));throw new Error("Browser's test function is not valid")}));return g&&(this.parsedResult.platform=g.describe(this.getUA())),this.parsedResult.platform},v.getEngine=function(){return this.parsedResult.engine?this.parsedResult.engine:this.parseEngine()},v.getEngineName=function(m){return m?String(this.getEngine().name).toLowerCase()||"":this.getEngine().name||""},v.parseEngine=function(){var m=this;this.parsedResult.engine={};var g=h.default.find(d.default,(function(k){if(typeof k.test=="function")return k.test(m);if(Array.isArray(k.test))return k.test.some((function(y){return m.test(y)}));throw new Error("Browser's test function is not valid")}));return g&&(this.parsedResult.engine=g.describe(this.getUA())),this.parsedResult.engine},v.parse=function(){return this.parseBrowser(),this.parseOS(),this.parsePlatform(),this.parseEngine(),this},v.getResult=function(){return h.default.assign({},this.parsedResult)},v.satisfies=function(m){var g=this,k={},y=0,S={},M=0;if(Object.keys(m).forEach((function(pe){var we=m[pe];typeof we=="string"?(S[pe]=we,M+=1):typeof we=="object"&&(k[pe]=we,y+=1)})),y>0){var T=Object.keys(k),O=h.default.find(T,(function(pe){return g.isOS(pe)}));if(O){var z=this.satisfies(k[O]);if(z!==void 0)return z}var K=h.default.find(T,(function(pe){return g.isPlatform(pe)}));if(K){var Z=this.satisfies(k[K]);if(Z!==void 0)return Z}}if(M>0){var oe=Object.keys(S),G=h.default.find(oe,(function(pe){return g.isBrowser(pe,!0)}));if(G!==void 0)return this.compareVersion(S[G])}},v.isBrowser=function(m,g){g===void 0&&(g=!1);var k=this.getBrowserName().toLowerCase(),y=m.toLowerCase(),S=h.default.getBrowserTypeByAlias(y);return g&&S&&(y=S.toLowerCase()),y===k},v.compareVersion=function(m){var g=[0],k=m,y=!1,S=this.getBrowserVersion();if(typeof S=="string")return m[0]===">"||m[0]==="<"?(k=m.substr(1),m[1]==="="?(y=!0,k=m.substr(2)):g=[],m[0]===">"?g.push(1):g.push(-1)):m[0]==="="?k=m.substr(1):m[0]==="~"&&(y=!0,k=m.substr(1)),g.indexOf(h.default.compareVersions(S,k,y))>-1},v.isOS=function(m){return this.getOSName(!0)===String(m).toLowerCase()},v.isPlatform=function(m){return this.getPlatformType(!0)===String(m).toLowerCase()},v.isEngine=function(m){return this.getEngineName(!0)===String(m).toLowerCase()},v.is=function(m,g){return g===void 0&&(g=!1),this.isBrowser(m,g)||this.isOS(m)||this.isPlatform(m)},v.some=function(m){var g=this;return m===void 0&&(m=[]),m.some((function(k){return g.is(k)}))},b})(),r.exports=i.default},92:function(r,i,a){"use strict";i.__esModule=!0,i.default=void 0;var s,l=(s=a(17))&&s.__esModule?s:{default:s},u=/version\/(\d+(\.?_?\d+)+)/i;i.default=[{test:[/gptbot/i],describe:function(d){var h={name:"GPTBot"},f=l.default.getFirstMatch(/gptbot\/(\d+(\.\d+)+)/i,d)||l.default.getFirstMatch(u,d);return f&&(h.version=f),h}},{test:[/chatgpt-user/i],describe:function(d){var h={name:"ChatGPT-User"},f=l.default.getFirstMatch(/chatgpt-user\/(\d+(\.\d+)+)/i,d)||l.default.getFirstMatch(u,d);return f&&(h.version=f),h}},{test:[/oai-searchbot/i],describe:function(d){var h={name:"OAI-SearchBot"},f=l.default.getFirstMatch(/oai-searchbot\/(\d+(\.\d+)+)/i,d)||l.default.getFirstMatch(u,d);return f&&(h.version=f),h}},{test:[/claudebot/i,/claude-web/i,/claude-user/i,/claude-searchbot/i],describe:function(d){var h={name:"ClaudeBot"},f=l.default.getFirstMatch(/(?:claudebot|claude-web|claude-user|claude-searchbot)\/(\d+(\.\d+)+)/i,d)||l.default.getFirstMatch(u,d);return f&&(h.version=f),h}},{test:[/omgilibot/i,/webzio-extended/i],describe:function(d){var h={name:"Omgilibot"},f=l.default.getFirstMatch(/(?:omgilibot|webzio-extended)\/(\d+(\.\d+)+)/i,d)||l.default.getFirstMatch(u,d);return f&&(h.version=f),h}},{test:[/diffbot/i],describe:function(d){var h={name:"Diffbot"},f=l.default.getFirstMatch(/diffbot\/(\d+(\.\d+)+)/i,d)||l.default.getFirstMatch(u,d);return f&&(h.version=f),h}},{test:[/perplexitybot/i],describe:function(d){var h={name:"PerplexityBot"},f=l.default.getFirstMatch(/perplexitybot\/(\d+(\.\d+)+)/i,d)||l.default.getFirstMatch(u,d);return f&&(h.version=f),h}},{test:[/perplexity-user/i],describe:function(d){var h={name:"Perplexity-User"},f=l.default.getFirstMatch(/perplexity-user\/(\d+(\.\d+)+)/i,d)||l.default.getFirstMatch(u,d);return f&&(h.version=f),h}},{test:[/youbot/i],describe:function(d){var h={name:"YouBot"},f=l.default.getFirstMatch(/youbot\/(\d+(\.\d+)+)/i,d)||l.default.getFirstMatch(u,d);return f&&(h.version=f),h}},{test:[/meta-webindexer/i],describe:function(d){var h={name:"Meta-WebIndexer"},f=l.default.getFirstMatch(/meta-webindexer\/(\d+(\.\d+)+)/i,d)||l.default.getFirstMatch(u,d);return f&&(h.version=f),h}},{test:[/meta-externalads/i],describe:function(d){var h={name:"Meta-ExternalAds"},f=l.default.getFirstMatch(/meta-externalads\/(\d+(\.\d+)+)/i,d)||l.default.getFirstMatch(u,d);return f&&(h.version=f),h}},{test:[/meta-externalagent/i],describe:function(d){var h={name:"Meta-ExternalAgent"},f=l.default.getFirstMatch(/meta-externalagent\/(\d+(\.\d+)+)/i,d)||l.default.getFirstMatch(u,d);return f&&(h.version=f),h}},{test:[/meta-externalfetcher/i],describe:function(d){var h={name:"Meta-ExternalFetcher"},f=l.default.getFirstMatch(/meta-externalfetcher\/(\d+(\.\d+)+)/i,d)||l.default.getFirstMatch(u,d);return f&&(h.version=f),h}},{test:[/googlebot/i],describe:function(d){var h={name:"Googlebot"},f=l.default.getFirstMatch(/googlebot\/(\d+(\.\d+))/i,d)||l.default.getFirstMatch(u,d);return f&&(h.version=f),h}},{test:[/linespider/i],describe:function(d){var h={name:"Linespider"},f=l.default.getFirstMatch(/(?:linespider)(?:-[-\w]+)?[\s/](\d+(\.\d+)+)/i,d)||l.default.getFirstMatch(u,d);return f&&(h.version=f),h}},{test:[/amazonbot/i],describe:function(d){var h={name:"AmazonBot"},f=l.default.getFirstMatch(/amazonbot\/(\d+(\.\d+)+)/i,d)||l.default.getFirstMatch(u,d);return f&&(h.version=f),h}},{test:[/bingbot/i],describe:function(d){var h={name:"BingCrawler"},f=l.default.getFirstMatch(/bingbot\/(\d+(\.\d+)+)/i,d)||l.default.getFirstMatch(u,d);return f&&(h.version=f),h}},{test:[/baiduspider/i],describe:function(d){var h={name:"BaiduSpider"},f=l.default.getFirstMatch(/baiduspider\/(\d+(\.\d+)+)/i,d)||l.default.getFirstMatch(u,d);return f&&(h.version=f),h}},{test:[/duckduckbot/i],describe:function(d){var h={name:"DuckDuckBot"},f=l.default.getFirstMatch(/duckduckbot\/(\d+(\.\d+)+)/i,d)||l.default.getFirstMatch(u,d);return f&&(h.version=f),h}},{test:[/ia_archiver/i],describe:function(d){var h={name:"InternetArchiveCrawler"},f=l.default.getFirstMatch(/ia_archiver\/(\d+(\.\d+)+)/i,d)||l.default.getFirstMatch(u,d);return f&&(h.version=f),h}},{test:[/facebookexternalhit/i,/facebookcatalog/i],describe:function(){return{name:"FacebookExternalHit"}}},{test:[/slackbot/i,/slack-imgProxy/i],describe:function(d){var h={name:"SlackBot"},f=l.default.getFirstMatch(/(?:slackbot|slack-imgproxy)(?:-[-\w]+)?[\s/](\d+(\.\d+)+)/i,d)||l.default.getFirstMatch(u,d);return f&&(h.version=f),h}},{test:[/yahoo!?[\s/]*slurp/i],describe:function(){return{name:"YahooSlurp"}}},{test:[/yandexbot/i,/yandexmobilebot/i],describe:function(){return{name:"YandexBot"}}},{test:[/pingdom/i],describe:function(){return{name:"PingdomBot"}}},{test:[/opera/i],describe:function(d){var h={name:"Opera"},f=l.default.getFirstMatch(u,d)||l.default.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i,d);return f&&(h.version=f),h}},{test:[/opr\/|opios/i],describe:function(d){var h={name:"Opera"},f=l.default.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i,d)||l.default.getFirstMatch(u,d);return f&&(h.version=f),h}},{test:[/SamsungBrowser/i],describe:function(d){var h={name:"Samsung Internet for Android"},f=l.default.getFirstMatch(u,d)||l.default.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i,d);return f&&(h.version=f),h}},{test:[/Whale/i],describe:function(d){var h={name:"NAVER Whale Browser"},f=l.default.getFirstMatch(u,d)||l.default.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i,d);return f&&(h.version=f),h}},{test:[/PaleMoon/i],describe:function(d){var h={name:"Pale Moon"},f=l.default.getFirstMatch(u,d)||l.default.getFirstMatch(/(?:PaleMoon)[\s/](\d+(?:\.\d+)+)/i,d);return f&&(h.version=f),h}},{test:[/MZBrowser/i],describe:function(d){var h={name:"MZ Browser"},f=l.default.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i,d)||l.default.getFirstMatch(u,d);return f&&(h.version=f),h}},{test:[/focus/i],describe:function(d){var h={name:"Focus"},f=l.default.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i,d)||l.default.getFirstMatch(u,d);return f&&(h.version=f),h}},{test:[/swing/i],describe:function(d){var h={name:"Swing"},f=l.default.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i,d)||l.default.getFirstMatch(u,d);return f&&(h.version=f),h}},{test:[/coast/i],describe:function(d){var h={name:"Opera Coast"},f=l.default.getFirstMatch(u,d)||l.default.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i,d);return f&&(h.version=f),h}},{test:[/opt\/\d+(?:.?_?\d+)+/i],describe:function(d){var h={name:"Opera Touch"},f=l.default.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i,d)||l.default.getFirstMatch(u,d);return f&&(h.version=f),h}},{test:[/yabrowser/i],describe:function(d){var h={name:"Yandex Browser"},f=l.default.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i,d)||l.default.getFirstMatch(u,d);return f&&(h.version=f),h}},{test:[/ucbrowser/i],describe:function(d){var h={name:"UC Browser"},f=l.default.getFirstMatch(u,d)||l.default.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i,d);return f&&(h.version=f),h}},{test:[/Maxthon|mxios/i],describe:function(d){var h={name:"Maxthon"},f=l.default.getFirstMatch(u,d)||l.default.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i,d);return f&&(h.version=f),h}},{test:[/epiphany/i],describe:function(d){var h={name:"Epiphany"},f=l.default.getFirstMatch(u,d)||l.default.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i,d);return f&&(h.version=f),h}},{test:[/puffin/i],describe:function(d){var h={name:"Puffin"},f=l.default.getFirstMatch(u,d)||l.default.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i,d);return f&&(h.version=f),h}},{test:[/sleipnir/i],describe:function(d){var h={name:"Sleipnir"},f=l.default.getFirstMatch(u,d)||l.default.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i,d);return f&&(h.version=f),h}},{test:[/k-meleon/i],describe:function(d){var h={name:"K-Meleon"},f=l.default.getFirstMatch(u,d)||l.default.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i,d);return f&&(h.version=f),h}},{test:[/micromessenger/i],describe:function(d){var h={name:"WeChat"},f=l.default.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i,d)||l.default.getFirstMatch(u,d);return f&&(h.version=f),h}},{test:[/qqbrowser/i],describe:function(d){var h={name:/qqbrowserlite/i.test(d)?"QQ Browser Lite":"QQ Browser"},f=l.default.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i,d)||l.default.getFirstMatch(u,d);return f&&(h.version=f),h}},{test:[/msie|trident/i],describe:function(d){var h={name:"Internet Explorer"},f=l.default.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i,d);return f&&(h.version=f),h}},{test:[/\sedg\//i],describe:function(d){var h={name:"Microsoft Edge"},f=l.default.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i,d);return f&&(h.version=f),h}},{test:[/edg([ea]|ios)/i],describe:function(d){var h={name:"Microsoft Edge"},f=l.default.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i,d);return f&&(h.version=f),h}},{test:[/vivaldi/i],describe:function(d){var h={name:"Vivaldi"},f=l.default.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i,d);return f&&(h.version=f),h}},{test:[/seamonkey/i],describe:function(d){var h={name:"SeaMonkey"},f=l.default.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i,d);return f&&(h.version=f),h}},{test:[/sailfish/i],describe:function(d){var h={name:"Sailfish"},f=l.default.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i,d);return f&&(h.version=f),h}},{test:[/silk/i],describe:function(d){var h={name:"Amazon Silk"},f=l.default.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i,d);return f&&(h.version=f),h}},{test:[/phantom/i],describe:function(d){var h={name:"PhantomJS"},f=l.default.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i,d);return f&&(h.version=f),h}},{test:[/slimerjs/i],describe:function(d){var h={name:"SlimerJS"},f=l.default.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i,d);return f&&(h.version=f),h}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe:function(d){var h={name:"BlackBerry"},f=l.default.getFirstMatch(u,d)||l.default.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i,d);return f&&(h.version=f),h}},{test:[/(web|hpw)[o0]s/i],describe:function(d){var h={name:"WebOS Browser"},f=l.default.getFirstMatch(u,d)||l.default.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i,d);return f&&(h.version=f),h}},{test:[/bada/i],describe:function(d){var h={name:"Bada"},f=l.default.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i,d);return f&&(h.version=f),h}},{test:[/tizen/i],describe:function(d){var h={name:"Tizen"},f=l.default.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i,d)||l.default.getFirstMatch(u,d);return f&&(h.version=f),h}},{test:[/qupzilla/i],describe:function(d){var h={name:"QupZilla"},f=l.default.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i,d)||l.default.getFirstMatch(u,d);return f&&(h.version=f),h}},{test:[/librewolf/i],describe:function(d){var h={name:"LibreWolf"},f=l.default.getFirstMatch(/(?:librewolf)[\s/](\d+(\.?_?\d+)+)/i,d);return f&&(h.version=f),h}},{test:[/firefox|iceweasel|fxios/i],describe:function(d){var h={name:"Firefox"},f=l.default.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i,d);return f&&(h.version=f),h}},{test:[/electron/i],describe:function(d){var h={name:"Electron"},f=l.default.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i,d);return f&&(h.version=f),h}},{test:[/sogoumobilebrowser/i,/metasr/i,/se 2\.[x]/i],describe:function(d){var h={name:"Sogou Browser"},f=l.default.getFirstMatch(/(?:sogoumobilebrowser)[\s/](\d+(\.?_?\d+)+)/i,d),b=l.default.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i,d),v=l.default.getFirstMatch(/se ([\d.]+)x/i,d),m=f||b||v;return m&&(h.version=m),h}},{test:[/MiuiBrowser/i],describe:function(d){var h={name:"Miui"},f=l.default.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i,d);return f&&(h.version=f),h}},{test:function(d){return!!d.hasBrand("DuckDuckGo")||d.test(/\sDdg\/[\d.]+$/i)},describe:function(d,h){var f={name:"DuckDuckGo"};if(h){var b=h.getBrandVersion("DuckDuckGo");if(b)return f.version=b,f}var v=l.default.getFirstMatch(/\sDdg\/([\d.]+)$/i,d);return v&&(f.version=v),f}},{test:function(d){return d.hasBrand("Brave")},describe:function(d,h){var f={name:"Brave"};if(h){var b=h.getBrandVersion("Brave");if(b)return f.version=b,f}return f}},{test:[/chromium/i],describe:function(d){var h={name:"Chromium"},f=l.default.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i,d)||l.default.getFirstMatch(u,d);return f&&(h.version=f),h}},{test:[/chrome|crios|crmo/i],describe:function(d){var h={name:"Chrome"},f=l.default.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i,d);return f&&(h.version=f),h}},{test:[/GSA/i],describe:function(d){var h={name:"Google Search"},f=l.default.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i,d);return f&&(h.version=f),h}},{test:function(d){var h=!d.test(/like android/i),f=d.test(/android/i);return h&&f},describe:function(d){var h={name:"Android Browser"},f=l.default.getFirstMatch(u,d);return f&&(h.version=f),h}},{test:[/playstation 4/i],describe:function(d){var h={name:"PlayStation 4"},f=l.default.getFirstMatch(u,d);return f&&(h.version=f),h}},{test:[/safari|applewebkit/i],describe:function(d){var h={name:"Safari"},f=l.default.getFirstMatch(u,d);return f&&(h.version=f),h}},{test:[/.*/i],describe:function(d){var h=d.search("\\(")!==-1?/^(.*)\/(.*)[ \t]\((.*)/:/^(.*)\/(.*) /;return{name:l.default.getFirstMatch(h,d),version:l.default.getSecondMatch(h,d)}}}],r.exports=i.default},93:function(r,i,a){"use strict";i.__esModule=!0,i.default=void 0;var s,l=(s=a(17))&&s.__esModule?s:{default:s},u=a(18);i.default=[{test:[/Roku\/DVP/],describe:function(d){var h=l.default.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i,d);return{name:u.OS_MAP.Roku,version:h}}},{test:[/windows phone/i],describe:function(d){var h=l.default.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i,d);return{name:u.OS_MAP.WindowsPhone,version:h}}},{test:[/windows /i],describe:function(d){var h=l.default.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i,d),f=l.default.getWindowsVersionName(h);return{name:u.OS_MAP.Windows,version:h,versionName:f}}},{test:[/Macintosh(.*?) FxiOS(.*?)\//],describe:function(d){var h={name:u.OS_MAP.iOS},f=l.default.getSecondMatch(/(Version\/)(\d[\d.]+)/,d);return f&&(h.version=f),h}},{test:[/macintosh/i],describe:function(d){var h=l.default.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i,d).replace(/[_\s]/g,"."),f=l.default.getMacOSVersionName(h),b={name:u.OS_MAP.MacOS,version:h};return f&&(b.versionName=f),b}},{test:[/(ipod|iphone|ipad)/i],describe:function(d){var h=l.default.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i,d).replace(/[_\s]/g,".");return{name:u.OS_MAP.iOS,version:h}}},{test:[/OpenHarmony/i],describe:function(d){var h=l.default.getFirstMatch(/OpenHarmony\s+(\d+(\.\d+)*)/i,d);return{name:u.OS_MAP.HarmonyOS,version:h}}},{test:function(d){var h=!d.test(/like android/i),f=d.test(/android/i);return h&&f},describe:function(d){var h=l.default.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i,d),f=l.default.getAndroidVersionName(h),b={name:u.OS_MAP.Android,version:h};return f&&(b.versionName=f),b}},{test:[/(web|hpw)[o0]s/i],describe:function(d){var h=l.default.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i,d),f={name:u.OS_MAP.WebOS};return h&&h.length&&(f.version=h),f}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe:function(d){var h=l.default.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i,d)||l.default.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i,d)||l.default.getFirstMatch(/\bbb(\d+)/i,d);return{name:u.OS_MAP.BlackBerry,version:h}}},{test:[/bada/i],describe:function(d){var h=l.default.getFirstMatch(/bada\/(\d+(\.\d+)*)/i,d);return{name:u.OS_MAP.Bada,version:h}}},{test:[/tizen/i],describe:function(d){var h=l.default.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i,d);return{name:u.OS_MAP.Tizen,version:h}}},{test:[/linux/i],describe:function(){return{name:u.OS_MAP.Linux}}},{test:[/CrOS/],describe:function(){return{name:u.OS_MAP.ChromeOS}}},{test:[/PlayStation 4/],describe:function(d){var h=l.default.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i,d);return{name:u.OS_MAP.PlayStation4,version:h}}}],r.exports=i.default},94:function(r,i,a){"use strict";i.__esModule=!0,i.default=void 0;var s,l=(s=a(17))&&s.__esModule?s:{default:s},u=a(18);i.default=[{test:[/googlebot/i],describe:function(){return{type:u.PLATFORMS_MAP.bot,vendor:"Google"}}},{test:[/linespider/i],describe:function(){return{type:u.PLATFORMS_MAP.bot,vendor:"Line"}}},{test:[/amazonbot/i],describe:function(){return{type:u.PLATFORMS_MAP.bot,vendor:"Amazon"}}},{test:[/gptbot/i],describe:function(){return{type:u.PLATFORMS_MAP.bot,vendor:"OpenAI"}}},{test:[/chatgpt-user/i],describe:function(){return{type:u.PLATFORMS_MAP.bot,vendor:"OpenAI"}}},{test:[/oai-searchbot/i],describe:function(){return{type:u.PLATFORMS_MAP.bot,vendor:"OpenAI"}}},{test:[/baiduspider/i],describe:function(){return{type:u.PLATFORMS_MAP.bot,vendor:"Baidu"}}},{test:[/bingbot/i],describe:function(){return{type:u.PLATFORMS_MAP.bot,vendor:"Bing"}}},{test:[/duckduckbot/i],describe:function(){return{type:u.PLATFORMS_MAP.bot,vendor:"DuckDuckGo"}}},{test:[/claudebot/i,/claude-web/i,/claude-user/i,/claude-searchbot/i],describe:function(){return{type:u.PLATFORMS_MAP.bot,vendor:"Anthropic"}}},{test:[/omgilibot/i,/webzio-extended/i],describe:function(){return{type:u.PLATFORMS_MAP.bot,vendor:"Webz.io"}}},{test:[/diffbot/i],describe:function(){return{type:u.PLATFORMS_MAP.bot,vendor:"Diffbot"}}},{test:[/perplexitybot/i],describe:function(){return{type:u.PLATFORMS_MAP.bot,vendor:"Perplexity AI"}}},{test:[/perplexity-user/i],describe:function(){return{type:u.PLATFORMS_MAP.bot,vendor:"Perplexity AI"}}},{test:[/youbot/i],describe:function(){return{type:u.PLATFORMS_MAP.bot,vendor:"You.com"}}},{test:[/ia_archiver/i],describe:function(){return{type:u.PLATFORMS_MAP.bot,vendor:"Internet Archive"}}},{test:[/meta-webindexer/i],describe:function(){return{type:u.PLATFORMS_MAP.bot,vendor:"Meta"}}},{test:[/meta-externalads/i],describe:function(){return{type:u.PLATFORMS_MAP.bot,vendor:"Meta"}}},{test:[/meta-externalagent/i],describe:function(){return{type:u.PLATFORMS_MAP.bot,vendor:"Meta"}}},{test:[/meta-externalfetcher/i],describe:function(){return{type:u.PLATFORMS_MAP.bot,vendor:"Meta"}}},{test:[/facebookexternalhit/i,/facebookcatalog/i],describe:function(){return{type:u.PLATFORMS_MAP.bot,vendor:"Meta"}}},{test:[/slackbot/i,/slack-imgProxy/i],describe:function(){return{type:u.PLATFORMS_MAP.bot,vendor:"Slack"}}},{test:[/yahoo/i],describe:function(){return{type:u.PLATFORMS_MAP.bot,vendor:"Yahoo"}}},{test:[/yandexbot/i,/yandexmobilebot/i],describe:function(){return{type:u.PLATFORMS_MAP.bot,vendor:"Yandex"}}},{test:[/pingdom/i],describe:function(){return{type:u.PLATFORMS_MAP.bot,vendor:"Pingdom"}}},{test:[/huawei/i],describe:function(d){var h=l.default.getFirstMatch(/(can-l01)/i,d)&&"Nova",f={type:u.PLATFORMS_MAP.mobile,vendor:"Huawei"};return h&&(f.model=h),f}},{test:[/nexus\s*(?:7|8|9|10).*/i],describe:function(){return{type:u.PLATFORMS_MAP.tablet,vendor:"Nexus"}}},{test:[/ipad/i],describe:function(){return{type:u.PLATFORMS_MAP.tablet,vendor:"Apple",model:"iPad"}}},{test:[/Macintosh(.*?) FxiOS(.*?)\//],describe:function(){return{type:u.PLATFORMS_MAP.tablet,vendor:"Apple",model:"iPad"}}},{test:[/kftt build/i],describe:function(){return{type:u.PLATFORMS_MAP.tablet,vendor:"Amazon",model:"Kindle Fire HD 7"}}},{test:[/silk/i],describe:function(){return{type:u.PLATFORMS_MAP.tablet,vendor:"Amazon"}}},{test:[/tablet(?! pc)/i],describe:function(){return{type:u.PLATFORMS_MAP.tablet}}},{test:function(d){var h=d.test(/ipod|iphone/i),f=d.test(/like (ipod|iphone)/i);return h&&!f},describe:function(d){var h=l.default.getFirstMatch(/(ipod|iphone)/i,d);return{type:u.PLATFORMS_MAP.mobile,vendor:"Apple",model:h}}},{test:[/nexus\s*[0-6].*/i,/galaxy nexus/i],describe:function(){return{type:u.PLATFORMS_MAP.mobile,vendor:"Nexus"}}},{test:[/Nokia/i],describe:function(d){var h=l.default.getFirstMatch(/Nokia\s+([0-9]+(\.[0-9]+)?)/i,d),f={type:u.PLATFORMS_MAP.mobile,vendor:"Nokia"};return h&&(f.model=h),f}},{test:[/[^-]mobi/i],describe:function(){return{type:u.PLATFORMS_MAP.mobile}}},{test:function(d){return d.getBrowserName(!0)==="blackberry"},describe:function(){return{type:u.PLATFORMS_MAP.mobile,vendor:"BlackBerry"}}},{test:function(d){return d.getBrowserName(!0)==="bada"},describe:function(){return{type:u.PLATFORMS_MAP.mobile}}},{test:function(d){return d.getBrowserName()==="windows phone"},describe:function(){return{type:u.PLATFORMS_MAP.mobile,vendor:"Microsoft"}}},{test:function(d){var h=Number(String(d.getOSVersion()).split(".")[0]);return d.getOSName(!0)==="android"&&h>=3},describe:function(){return{type:u.PLATFORMS_MAP.tablet}}},{test:function(d){return d.getOSName(!0)==="android"},describe:function(){return{type:u.PLATFORMS_MAP.mobile}}},{test:[/smart-?tv|smarttv/i],describe:function(){return{type:u.PLATFORMS_MAP.tv}}},{test:[/netcast/i],describe:function(){return{type:u.PLATFORMS_MAP.tv}}},{test:function(d){return d.getOSName(!0)==="macos"},describe:function(){return{type:u.PLATFORMS_MAP.desktop,vendor:"Apple"}}},{test:function(d){return d.getOSName(!0)==="windows"},describe:function(){return{type:u.PLATFORMS_MAP.desktop}}},{test:function(d){return d.getOSName(!0)==="linux"},describe:function(){return{type:u.PLATFORMS_MAP.desktop}}},{test:function(d){return d.getOSName(!0)==="playstation 4"},describe:function(){return{type:u.PLATFORMS_MAP.tv}}},{test:function(d){return d.getOSName(!0)==="roku"},describe:function(){return{type:u.PLATFORMS_MAP.tv}}}],r.exports=i.default},95:function(r,i,a){"use strict";i.__esModule=!0,i.default=void 0;var s,l=(s=a(17))&&s.__esModule?s:{default:s},u=a(18);i.default=[{test:function(d){return d.getBrowserName(!0)==="microsoft edge"},describe:function(d){if(/\sedg\//i.test(d))return{name:u.ENGINE_MAP.Blink};var h=l.default.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i,d);return{name:u.ENGINE_MAP.EdgeHTML,version:h}}},{test:[/trident/i],describe:function(d){var h={name:u.ENGINE_MAP.Trident},f=l.default.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i,d);return f&&(h.version=f),h}},{test:function(d){return d.test(/presto/i)},describe:function(d){var h={name:u.ENGINE_MAP.Presto},f=l.default.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i,d);return f&&(h.version=f),h}},{test:function(d){var h=d.test(/gecko/i),f=d.test(/like gecko/i);return h&&!f},describe:function(d){var h={name:u.ENGINE_MAP.Gecko},f=l.default.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i,d);return f&&(h.version=f),h}},{test:[/(apple)?webkit\/537\.36/i],describe:function(){return{name:u.ENGINE_MAP.Blink}}},{test:[/(apple)?webkit/i],describe:function(d){var h={name:u.ENGINE_MAP.WebKit},f=l.default.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i,d);return f&&(h.version=f),h}}],r.exports=i.default}})}))})),id=Di(U2(),1);function V2(e,t){typeof unsafeWindow<"u"&&(unsafeWindow[e]=t),typeof window<"u"&&(window[e]=t)}function Ae(...e){return console.log("MangaOnlineViewer-adult-min: ",...e),e}function kn(...e){return["dev","development"].includes("adult-min")&&console.info("MangaOnlineViewer: ",...e),e}function ad(e){typeof GM_deleteValue<"u"?GM_deleteValue(e):kn("Fake Removing: ",e)}var ks=typeof GM_info<"u"?GM_info:{scriptHandler:"Console",script:{name:"Debug",version:"Testing"}};function Z2(e,t){return typeof GM_getValue<"u"?GM_getValue(e,t):(kn("Fake Getting: ",e," = ",t),t)}function sd(e,t){const r=Z2(e,t);if(typeof r=="string"&&r.trim()!=="")try{return JSON.parse(r)}catch(i){return Ae("Failed to parse JSON from storage",e,i),t}return r}function j2(e){return sd("settings",e)}function q2(e){return sd(window.location.hostname,e)}function ld(e,t){return typeof GM_setValue<"u"?(GM_setValue(e,t),Ae("Setting: ",e," = ",t),t.toString()):(kn("Fake Setting: ",e," = ",t),String(t))}function K2(e){return ld("settings",e)}function cd(e){return ld(window.location.hostname,e)}function Y2(){const e=id.default.getParser(window.navigator.userAgent).getBrowser();return`${e.name} ${e.version}`}function X2(){return ks.scriptHandler??"Greasemonkey"}var Go=()=>{const e=id.default.getParser(window.navigator.userAgent).getPlatformType(!0);return e==="mobile"||window.matchMedia("screen and (max-width: 600px)").matches?"mobile":e==="tablet"||window.matchMedia("screen and (max-width: 992px)").matches?"tablet":"desktop"},J2=()=>Go()==="mobile"||Go()==="tablet",Es=()=>window.location.protocol==="file:"||window.location.pathname.endsWith("Manga_Local_Viewer.html"),dd=(e,t="settings")=>{if(typeof GM_addValueChangeListener<"u")try{return GM_addValueChangeListener(t,(r,i,a,s)=>{s&&e(a)})}catch(r){Ae("Failed to add settings listener",r)}};async function Wo(e,t,r,i){e!==void 0&&(Ae(r),Ae(i,await t(e)))}async function Q2(e){await Wo(e.waitAttr,t=>Qc(t?.[0],t?.[1]),`Waiting for Attribute ${e.waitAttr?.[1]} of ${e.waitAttr?.[0]}`,`Found Attribute ${e.waitAttr?.[1]} of ${e.waitAttr?.[0]} =`),await Wo(e.waitEle,Jf,`Waiting for Element ${e.waitEle}`,"Found Element"),await Wo(e.waitVar,ed,`Waiting for Variable ${e.waitVar}`,"Found Variable"),await Wo(e.waitFunc,ys,`Waiting to pass Function check ${e.waitFunc}`,"Found Function check"),await Wo(e.waitTime,t=>new Promise(r=>setTimeout(r,t)),`Waiting for ${e.waitTime} milliseconds`,"Continuing after timer")}var Rn=[],hr=0,zi=4,Bi=0,ud=e=>{let t=[],r={get(){return r.lc||r.listen(()=>{})(),r.value},init:e,lc:0,listen(i){return r.lc=t.push(i),()=>{for(let s=hr+zi;s<Rn.length;)Rn[s]===i?Rn.splice(s,zi):s+=zi;let a=t.indexOf(i);~a&&(t.splice(a,1),--r.lc||r.off())}},notify(i,a){Bi++;let s=!Rn.length;for(let l of t)Rn.push(l,r.value,i,a);if(s){for(hr=0;hr<Rn.length;hr+=zi)Rn[hr](Rn[hr+1],Rn[hr+2],Rn[hr+3]);Rn.length=0}},off(){},set(i){let a=r.value;a!==i&&(r.value=i,r.notify(a))},subscribe(i){let a=r.listen(i);return i(r.value),a},value:e};return r},ep=5,Ni=6,Hi=10,tp=(e,t,r,i)=>(e.events=e.events||{},e.events[r+Hi]||(e.events[r+Hi]=i(a=>{e.events[r].reduceRight((s,l)=>(l(s),s),{shared:{},...a})})),e.events[r]=e.events[r]||[],e.events[r].push(t),()=>{let a=e.events[r],s=a.indexOf(t);a.splice(s,1),a.length||(delete e.events[r],e.events[r+Hi](),delete e.events[r+Hi])}),np=1e3,rp=(e,t)=>tp(e,i=>{let a=t(i);a&&e.events[Ni].push(a)},ep,i=>{let a=e.listen;e.listen=(...l)=>(!e.lc&&!e.active&&(e.active=!0,i()),a(...l));let s=e.off;return e.events[Ni]=[],e.off=()=>{s(),setTimeout(()=>{if(e.active&&!e.lc){e.active=!1;for(let l of e.events[Ni])l();e.events[Ni]=[]}},np)},()=>{e.listen=a,e.off=s}}),op=(e,t,r)=>{Array.isArray(e)||(e=[e]);let i,a,s=()=>{if(a===Bi)return;a=Bi;let f=e.map(b=>b.get());if(!i||f.some((b,v)=>b!==i[v])){i=f;let b=t(...f);b&&b.then&&b.t?b.then(v=>{i===f&&l.set(v)}):(l.set(b),a=Bi)}},l=ud(void 0),u=l.get;l.get=()=>(s(),u());let d,h=r?()=>{clearTimeout(d),d=setTimeout(s)}:s;return rp(l,()=>{let f=e.map(b=>b.listen(h));return s(),()=>{for(let b of f)b()}}),l},ip=(e,t)=>op(e,t),hd=(e={})=>{let t=ud(e);return t.setKey=function(r,i){let a=t.value;typeof i>"u"&&r in t.value?(t.value={...t.value},delete t.value[r],t.notify(a,r)):t.value[r]!==i&&(t.value={...t.value,[r]:i},t.notify(a,r))},t},Ss=globalThis,fd=e=>e,Fi=Ss.trustedTypes,pd=Fi?Fi.createPolicy("lit-html",{createHTML:e=>e}):void 0,As="$lit$",Xn=`lit$${Math.random().toFixed(9).slice(2)}$`,Ms="?"+Xn,ap=`<${Ms}>`,Br=document,Uo=()=>Br.createComment(""),Vo=e=>e===null||typeof e!="object"&&typeof e!="function",xs=Array.isArray,gd=e=>xs(e)||typeof e?.[Symbol.iterator]=="function",Is=`[ 	
\f\r]`,Zo=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,md=/-->/g,vd=/>/g,Nr=RegExp(`>|${Is}(?:([^\\s"'>=/]+)(${Is}*=${Is}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),bd=/'/g,wd=/"/g,_d=/^(?:script|style|textarea|title)$/i,Cs=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),re=Cs(1),iS=Cs(2),aS=Cs(3),Jn=Symbol.for("lit-noChange"),ze=Symbol.for("lit-nothing"),yd=new WeakMap,Hr=Br.createTreeWalker(Br,129);function kd(e,t){if(!xs(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return pd!==void 0?pd.createHTML(t):t}var Ed=(e,t)=>{const r=e.length-1,i=[];let a,s=t===2?"<svg>":t===3?"<math>":"",l=Zo;for(let u=0;u<r;u++){const d=e[u];let h,f,b=-1,v=0;for(;v<d.length&&(l.lastIndex=v,f=l.exec(d),f!==null);)v=l.lastIndex,l===Zo?f[1]==="!--"?l=md:f[1]!==void 0?l=vd:f[2]!==void 0?(_d.test(f[2])&&(a=RegExp("</"+f[2],"g")),l=Nr):f[3]!==void 0&&(l=Nr):l===Nr?f[0]===">"?(l=a??Zo,b=-1):f[1]===void 0?b=-2:(b=l.lastIndex-f[2].length,h=f[1],l=f[3]===void 0?Nr:f[3]==='"'?wd:bd):l===wd||l===bd?l=Nr:l===md||l===vd?l=Zo:(l=Nr,a=void 0);const m=l===Nr&&e[u+1].startsWith("/>")?" ":"";s+=l===Zo?d+ap:b>=0?(i.push(h),d.slice(0,b)+As+d.slice(b)+Xn+m):d+Xn+(b===-2?u:m)}return[kd(e,s+(e[r]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]},Os=class Bf{constructor({strings:t,_$litType$:r},i){let a;this.parts=[];let s=0,l=0;const u=t.length-1,d=this.parts,[h,f]=Ed(t,r);if(this.el=Bf.createElement(h,i),Hr.currentNode=this.el.content,r===2||r===3){const b=this.el.content.firstChild;b.replaceWith(...b.childNodes)}for(;(a=Hr.nextNode())!==null&&d.length<u;){if(a.nodeType===1){if(a.hasAttributes())for(const b of a.getAttributeNames())if(b.endsWith(As)){const v=f[l++],m=a.getAttribute(b).split(Xn),g=/([.?@])?(.*)/.exec(v);d.push({type:1,index:s,name:g[2],strings:m,ctor:g[1]==="."?Ad:g[1]==="?"?Md:g[1]==="@"?xd:jo}),a.removeAttribute(b)}else b.startsWith(Xn)&&(d.push({type:6,index:s}),a.removeAttribute(b));if(_d.test(a.tagName)){const b=a.textContent.split(Xn),v=b.length-1;if(v>0){a.textContent=Fi?Fi.emptyScript:"";for(let m=0;m<v;m++)a.append(b[m],Uo()),Hr.nextNode(),d.push({type:2,index:++s});a.append(b[v],Uo())}}}else if(a.nodeType===8)if(a.data===Ms)d.push({type:2,index:s});else{let b=-1;for(;(b=a.data.indexOf(Xn,b+1))!==-1;)d.push({type:7,index:s}),b+=Xn.length-1}s++}}static createElement(t,r){const i=Br.createElement("template");return i.innerHTML=t,i}};function Fr(e,t,r=e,i){if(t===Jn)return t;let a=i!==void 0?r._$Co?.[i]:r._$Cl;const s=Vo(t)?void 0:t._$litDirective$;return a?.constructor!==s&&(a?._$AO?.(!1),s===void 0?a=void 0:(a=new s(e),a._$AT(e,r,i)),i!==void 0?(r._$Co??=[])[i]=a:r._$Cl=a),a!==void 0&&(t=Fr(e,a._$AS(e,t.values),a,i)),t}var Sd=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:r}=this._$AD,i=(e?.creationScope??Br).importNode(t,!0);Hr.currentNode=i;let a=Hr.nextNode(),s=0,l=0,u=r[0];for(;u!==void 0;){if(s===u.index){let d;u.type===2?d=new Gi(a,a.nextSibling,this,e):u.type===1?d=new u.ctor(a,u.name,u.strings,this,e):u.type===6&&(d=new Id(a,this,e)),this._$AV.push(d),u=r[++l]}s!==u?.index&&(a=Hr.nextNode(),s++)}return Hr.currentNode=Br,i}p(e){let t=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}},Gi=class Nf{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,r,i,a){this.type=2,this._$AH=ze,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=i,this.options=a,this._$Cv=a?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&t?.nodeType===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=Fr(this,t,r),Vo(t)?t===ze||t==null||t===""?(this._$AH!==ze&&this._$AR(),this._$AH=ze):t!==this._$AH&&t!==Jn&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):gd(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==ze&&Vo(this._$AH)?this._$AA.nextSibling.data=t:this.T(Br.createTextNode(t)),this._$AH=t}$(t){const{values:r,_$litType$:i}=t,a=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=Os.createElement(kd(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===a)this._$AH.p(r);else{const s=new Sd(a,this),l=s.u(this.options);s.p(r),this.T(l),this._$AH=s}}_$AC(t){let r=yd.get(t.strings);return r===void 0&&yd.set(t.strings,r=new Os(t)),r}k(t){xs(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let i,a=0;for(const s of t)a===r.length?r.push(i=new Nf(this.O(Uo()),this.O(Uo()),this,this.options)):i=r[a],i._$AI(s),a++;a<r.length&&(this._$AR(i&&i._$AB.nextSibling,a),r.length=a)}_$AR(t=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);t!==this._$AB;){const i=fd(t).nextSibling;fd(t).remove(),t=i}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},jo=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,i,a){this.type=1,this._$AH=ze,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=a,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=ze}_$AI(e,t=this,r,i){const a=this.strings;let s=!1;if(a===void 0)e=Fr(this,e,t,0),s=!Vo(e)||e!==this._$AH&&e!==Jn,s&&(this._$AH=e);else{const l=e;let u,d;for(e=a[0],u=0;u<a.length-1;u++)d=Fr(this,l[r+u],t,u),d===Jn&&(d=this._$AH[u]),s||=!Vo(d)||d!==this._$AH[u],d===ze?e=ze:e!==ze&&(e+=(d??"")+a[u+1]),this._$AH[u]=d}s&&!i&&this.j(e)}j(e){e===ze?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Ad=class extends jo{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===ze?void 0:e}},Md=class extends jo{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==ze)}},xd=class extends jo{constructor(e,t,r,i,a){super(e,t,r,i,a),this.type=5}_$AI(e,t=this){if((e=Fr(this,e,t,0)??ze)===Jn)return;const r=this._$AH,i=e===ze&&r!==ze||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,a=e!==ze&&(r===ze||i);i&&this.element.removeEventListener(this.name,this,r),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Id=class{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){Fr(this,e)}},sp={M:As,P:Xn,A:Ms,C:1,L:Ed,R:Sd,D:gd,V:Fr,I:Gi,H:jo,N:Md,U:xd,B:Ad,F:Id},lp=Ss.litHtmlPolyfillSupport;lp?.(Os,Gi),(Ss.litHtmlVersions??=[]).push("3.3.2");var cp=(e,t,r)=>{const i=r?.renderBefore??t;let a=i._$litPart$;if(a===void 0){const s=r?.renderBefore??null;i._$litPart$=a=new Gi(t.insertBefore(Uo(),s),s,void 0,r??{})}return a._$AI(e),a},{I:dp}=sp,Cd=e=>e,sS=e=>e===null||typeof e!="object"&&typeof e!="function",lS={HTML:1,SVG:2,MATHML:3},cS=(e,t)=>t===void 0?e?._$litType$!==void 0:e?._$litType$===t,dS=e=>e?._$litType$?.h!=null,uS=e=>e?._$litDirective$!==void 0,hS=e=>e?._$litDirective$,up=e=>e.strings===void 0,Od=()=>document.createComment(""),fS=(e,t,r)=>{const i=e._$AA.parentNode,a=t===void 0?e._$AB:t._$AA;if(r===void 0)r=new dp(i.insertBefore(Od(),a),i.insertBefore(Od(),a),e,e.options);else{const s=r._$AB.nextSibling,l=r._$AM,u=l!==e;if(u){let d;r._$AQ?.(e),r._$AM=e,r._$AP!==void 0&&(d=e._$AU)!==l._$AU&&r._$AP(d)}if(s!==a||u){let d=r._$AA;for(;d!==s;){const h=Cd(d).nextSibling;Cd(i).insertBefore(d,a),d=h}}}return r},pS=(e,t,r=e)=>(e._$AI(t,r),e),hp={},gS=(e,t=hp)=>e._$AH=t,mS=e=>e._$AH,vS=e=>{e._$AR(),e._$AA.remove()},bS=e=>{e._$AR()},Wi={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},qo=e=>(...t)=>({_$litDirective$:e,values:t}),Ui=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}},Ko=(e,t)=>{const r=e._$AN;if(r===void 0)return!1;for(const i of r)i._$AO?.(t,!1),Ko(i,t);return!0},Vi=e=>{let t,r;do{if((t=e._$AM)===void 0)break;r=t._$AN,r.delete(e),e=t}while(r?.size===0)},Td=e=>{for(let t;t=e._$AM;e=t){let r=t._$AN;if(r===void 0)t._$AN=r=new Set;else if(r.has(e))break;r.add(e),gp(t)}};function fp(e){this._$AN!==void 0?(Vi(this),this._$AM=e,Td(this)):this._$AM=e}function pp(e,t=!1,r=0){const i=this._$AH,a=this._$AN;if(a!==void 0&&a.size!==0)if(t)if(Array.isArray(i))for(let s=r;s<i.length;s++)Ko(i[s],!1),Vi(i[s]);else i!=null&&(Ko(i,!1),Vi(i));else Ko(this,e)}var gp=e=>{e.type==Wi.CHILD&&(e._$AP??=pp,e._$AQ??=fp)},mp=class extends Ui{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,r){super._$AT(e,t,r),Td(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(Ko(this,e),Vi(this))}setValue(e){if(up(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}},Ts=()=>new vp,vp=class{},Ls=new WeakMap,Rs=qo(class extends mp{render(e){return ze}update(e,[t]){const r=t!==this.G;return r&&this.G!==void 0&&this.rt(void 0),(r||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),ze}rt(e){if(this.isConnected||(e=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let r=Ls.get(t);r===void 0&&(r=new WeakMap,Ls.set(t,r)),r.get(this.G)!==void 0&&this.G.call(this.ht,void 0),r.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G=="function"?Ls.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),bp={ID:"de_DE",NAME:"Deutsch",STARTING:"Starte Manga OnlineViewer",RESUME:"Fortsetzen ab Seite ",WAITING:"Bitte warten, 3 Sekunden...",CHOOSE_BEGINNING:"Wähle die Startseite:",BUTTON_START:"Manga OnlineViewer starten",SETTINGS:"Einstellungen",LANGUAGE:"Sprache",COLOR_SCHEME:"Farbschema",THEME:"Design",THEME_COLOR:"Farbe",THEME_HUE:"Farbton",THEME_SHADE:"Schattierung",DEFAULT_LOAD_MODE:"Standard-Lademodus",LOAD_MODE_NORMAL:"Normal (3 Sek. warten)",LOAD_MODE_ALWAYS:"Immer (sofort)",LOAD_MODE_NEVER:"Nie (manuell)",LOAD_SPEED:"Ladegeschwindigkeit",DEFAULT_ZOOM:"Standard-Zoom (zwischen 5 und 200)",DEFAULT_ZOOM_MODE:"Standard-Zoommodus",MINIMUM_ZOOM:"Minimaler Zoom relativ zur Bildschirmbreite (zwischen 30 und 100)",ZOOM_STEP:"Zoom-Schrittgröße (zwischen 5 und 50)",DEFAULT_VIEW_MODE:"Standard-Ansichtsmodus",VIEW_MODE_VERTICAL:"Vertikal",VIEW_MODE_LEFT:"Horizontal - Links nach Rechts",VIEW_MODE_RIGHT:"Horizontal - Rechts nach Links",VIEW_MODE_WEBCOMIC:"WebComic",VIEW_MODE_BOOK:"Buch - Links nach Rechts",VIEW_MODE_MANGA:"Manga - Rechts nach Links",VIEW_MODE_GALLERY:"Galerie",FIT_WIDTH_OVERSIZED:"Breite anpassen bei Übergröße",SHOW_THUMBNAILS:"Miniaturansichten anzeigen",HIDE_CONTROLS:"Seitensteuerung immer ausblenden",HEADER_TYPE:"Kopfbereichstyp ändern",HEADER_HOVER:"Hover",HEADER_SCROLL:"Scrollen",HEADER_CLICK:"Klicken",HEADER_FIXED:"Fixiert",HEADER_SIMPLE:"Einfach",BUTTON_DOWNLOAD:"Herunterladen",DOWNLOAD_ZIP:"Zip-Datei herunterladen",DOWNLOAD_IMAGES:"Bilder automatisch als Zip herunterladen",DOWNLOAD_PROGRESS:"Herunterladen: ##num## von ##total##",GENERATING_ZIP:"Zip-Datei wird erstellt...",DOWNLOAD_INCOMPLETE:"Download unvollständig",DOWNLOAD_INCOMPLETE_MESSAGE:"Einige Seiten konnten nicht heruntergeladen werden und wurden übersprungen. Eine Liste der fehlgeschlagenen Seiten wurde der ZIP-Datei hinzugefügt.",BUTTON_NEXT:"Weiter",NEXT_CHAPTER:"Nächstes Kapitel",BUTTON_PREVIOUS:"Zurück",PREVIOUS_CHAPTER:"Vorheriges Kapitel",BOOKMARKS:"Lesezeichen",BOOKMARK:"Lesezeichen",BOOKMARK_REMOVED:"Lesezeichen entfernt",BOOKMARK_SAVED:"Lesezeichen gespeichert",BOOKMARK_MESSAGE:"Beim nächsten Öffnen dieses Kapitels wird ab fortgesetzt: Seite ##num## (Nur EINMAL pro Lesezeichen)",KEYBINDINGS:"Tastenkürzel",EDIT_KEYBINDS:"Tastenkürzel bearbeiten",SAVE_KEYBINDS:"Tastenkürzel speichern",BUTTON_EDIT:"Bearbeiten",BUTTON_SAVE:"Speichern",KEYBIND_RULES:`
    <h3>Unterstützte Tasten</h3>
    Erlaubte Modifikatoren: shift, option, alt, ctrl, control, command. <br/>
    Spezielle Tasten: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide. <br/>
    Beispiele: <kbd>a</kbd>, <kbd>ctrl+a</kbd>, <kbd>shift+a</kbd>, <kbd>num_2</kbd>, <kbd>2</kbd>
  `,ATTENTION:"Achtung",WARNING:"Warnung",BUTTON_RESET_SETTINGS:"Einstellungen zurücksetzen(Reset Settings)",SETTINGS_RESET:"Die Einstellungen wurden zurückgesetzt, bitte Seite neu laden",LANGUAGE_CHANGED:"Die Sprache wurde geändert, bitte Seite neu laden",AUTO_DOWNLOAD:"Beim nächsten Laden eines Kapitels wirst du automatisch gefragt, ob du speichern möchtest",LAZY_LOAD:"Lazy Load ist mit Zip-Download nicht kompatibel, mit dieser Einstellung kannst du nicht herunterladen.<br/> Empfehlung: <span style='color:red;font-weight:bold'>Miniaturansichten deaktivieren</span> um Bandbreite/Speicher zu sparen.",LAZY_LOAD_IMAGES_ENABLE:"Lazy Load Bilder aktivieren",LAZY_LOAD_IMAGES:"Lazy Start ab Seite (zwischen 5 und 100)",RETURN_CHAPTER_LIST:"Zur Kapitelübersicht zurückkehren",PAGES_LOADED:"Seiten geladen",GO_TO_PAGE:"Gehe zu Seite",ENLARGE:"Vergrößern",RESTORE:"Wiederherstellen",REDUCE:"Wiederherstellen",FIT_WIDTH:"Breite anpassen",FIT_HEIGHT:"Höhe anpassen",PERCENT:"Prozent",TOGGLE_CONTROLS:"Seitensteuerung umschalten",ZOOM_IN:"Hineinzoomen",ZOOM_OUT:"Herauszoomen",ZOOM_RESET:"Zoom zurücksetzen",ZOOM_WIDTH:"Auf Breite zoomen",ZOOM_HEIGHT:"Auf Höhe zoomen",HIDE:"Ausblenden",RELOAD:"Neu laden",SLOWLY:"Langsam",NORMAL:"Normal",FAST:"Schnell",EXTREME:"Extrem",ALL_PAGES:"Alle Seiten",SPEED_WARNING:"Ladegeschwindigkeit zu hoch",SPEED_WARNING_MESSAGE:"Diese Geschwindigkeit wird nicht empfohlen.<br/> Sie kann einige Server überlasten oder deine IP als DDoS-Angreifer markieren.<br/> Bitte mit Vorsicht verwenden!",SCROLL_UP:"Nach oben scrollen",SCROLL_DOWN:"Nach unten scrollen",CLOSE:"Schließen",CANCEL:"Abbrechen",LIST_EMPTY:"Liste leer",SCROLL_START:"Auto-Scroll umschalten",INCREASE_SPEED:"Scrollgeschwindigkeit erhöhen",DECREASE_SPEED:"Scrollgeschwindigkeit verringern",AUTO_SCROLL_HEIGHT:"Auto-Scroll-Geschwindigkeit in Pixel",VERTICAL_SEPARATOR:"Vertikale Trenner anzeigen",END:"Ende",SCOPE:"Bereich",GLOBAL:"Global",GENERAL:"Allgemein",LOADING:"Lädt",ZOOM:"Zoom",OTHERS:"Sonstiges",NAVBAR_TYPE:"Navigationsleistentyp ändern",NAVBAR_BOTTOM:"Unten",NAVBAR_LEFT:"Links",NAVBAR_RIGHT:"Rechts",NAVBAR_DISABLED:"Deaktiviert",PAGINATION_TYPE:"Paginierungstyp",PAGINATION_DISABLED:"Deaktiviert",PAGINATION_SLIDER:"Schieberegler",PAGINATION_ARROWS:"Seitenpfeile",PAGINATION_BOTH:"Beides",FILE_MENU:"Hauptmenü",VIEW_MENU:"Menü „Ansicht“",ZOOM_MENU:"Zoom-Menü",DOUBLE_PAGE:"Doppelseite umschalten",CHOOSE_FILE:"Datei auswählen",NO_FILES_SELECTED:"Keine Dateien ausgewählt"},wp={ID:"en_US",NAME:"English (US)",STARTING:"Starting Manga OnlineViewer",RESUME:"Resuming reading from Page ",WAITING:"Please wait, 3 seconds...",CHOOSE_BEGINNING:"Choose the Page to start from:",BUTTON_START:"Start Manga OnlineViewer",SETTINGS:"Settings",LANGUAGE:"Language",COLOR_SCHEME:"Color Scheme",THEME:"Theme",THEME_COLOR:"Color",THEME_HUE:"Color Hue",THEME_SHADE:"Color Shade",DEFAULT_LOAD_MODE:"Default Load Mode",LOAD_MODE_NORMAL:"Normal(Wait 3 sec)",LOAD_MODE_ALWAYS:"Always(Immediately)",LOAD_MODE_NEVER:"Never(Manually)",LOAD_SPEED:"Load Speed",DEFAULT_ZOOM:"Default Zoom (between 5 and 200)",DEFAULT_ZOOM_MODE:"Default Zoom Mode",MINIMUM_ZOOM:"Minimum Zoom relative to the width of screen (between 30 and 100)",ZOOM_STEP:"Zoom Change Step (between 5 and 50)",DEFAULT_VIEW_MODE:"Default View Mode",VIEW_MODE_VERTICAL:"Vertical",VIEW_MODE_LEFT:"Horizontal - Left to Right",VIEW_MODE_RIGHT:"Horizontal - Right to Left",VIEW_MODE_WEBCOMIC:"WebComic",VIEW_MODE_BOOK:"Book - Left to Right",VIEW_MODE_MANGA:"Manga - Right to Left",VIEW_MODE_GALLERY:"Gallery",FIT_WIDTH_OVERSIZED:"Fit Width if Oversized",SHOW_THUMBNAILS:"Show Thumbnails",HIDE_CONTROLS:"Always Hide Page Controls",HEADER_TYPE:"Change Header Type",HEADER_HOVER:"Hover",HEADER_SCROLL:"Scroll",HEADER_CLICK:"Click",HEADER_FIXED:"Fixed",HEADER_SIMPLE:"Simple",BUTTON_DOWNLOAD:"Download",DOWNLOAD_ZIP:"Download Zip file",DOWNLOAD_IMAGES:"Download Images as Zip Automatically",DOWNLOAD_PROGRESS:"Downloading: ##num## of ##total##",GENERATING_ZIP:"Generating Zip file...",DOWNLOAD_INCOMPLETE:"Download Incomplete",DOWNLOAD_INCOMPLETE_MESSAGE:"Some pages failed to download and were skipped. A list of failed pages has been added to the ZIP file.",BUTTON_NEXT:"Next",NEXT_CHAPTER:"Next Chapter",BUTTON_PREVIOUS:"Previous",PREVIOUS_CHAPTER:"Previous Chapter",BOOKMARKS:"Bookmarks",BOOKMARK:"Bookmark",BOOKMARK_REMOVED:"Bookmark Removed",BOOKMARK_SAVED:"Bookmark Saved",BOOKMARK_MESSAGE:"Next time you open this chapter it will resume from: Page ##num## (Only ONCE per Bookmark)",KEYBINDINGS:"Keybindings",EDIT_KEYBINDS:"Edit KeyBindings",SAVE_KEYBINDS:"Save KeyBindings",BUTTON_EDIT:"Edit",BUTTON_SAVE:"Save",KEYBIND_RULES:`
    <h3>Supported Keys</h3>
    Allowed modifiers: shift, option, alt, ctrl, control, command. <br/>
    Special keys: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide. <br/>
    Examples: <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd>
  `,ATTENTION:"Attention",WARNING:"Warning",BUTTON_RESET_SETTINGS:"Reset Settings",SETTINGS_RESET:"Settings have been reset, reload the page to take effect",LANGUAGE_CHANGED:"Language has been changed, reload the page to take effect",AUTO_DOWNLOAD:"Next time a chapter finish loading you will be prompted to save automatically",LAZY_LOAD:"Lazy load is incompatible with zip download, you will not be able to download with this setting ON.<br/> Suggestion: <span style='color:red;font-weight:bold'>Disable Thumbnails</span> to save Bandwidth/Memory.",LAZY_LOAD_IMAGES_ENABLE:"Enable Lazy Load Images",LAZY_LOAD_IMAGES:"Lazy Start From Page (between 5 and 100)",RETURN_CHAPTER_LIST:"Return to Chapter List",PAGES_LOADED:"Pages Loaded",GO_TO_PAGE:"Go to Page",ENLARGE:"Enlarge",RESTORE:"Restore",REDUCE:"Reduce",FIT_WIDTH:"Fit Width",FIT_HEIGHT:"Fit Height",PERCENT:"Percent",TOGGLE_CONTROLS:"Toggle page controls",ZOOM_IN:"Zoom In",ZOOM_OUT:"Zoom Out",ZOOM_RESET:"Zoom Reset",ZOOM_WIDTH:"Zoom to Width",ZOOM_HEIGHT:"Zoom to Height",HIDE:"Hide",RELOAD:"Reload",SLOWLY:"Slowly",NORMAL:"Normal",FAST:"Fast",EXTREME:"Extreme",ALL_PAGES:"All Pages",SPEED_WARNING:"Loading Speed too High",SPEED_WARNING_MESSAGE:"This speed is not recommended.<br/> It may hurt some servers or get your IP marked as DDoS attacker.<br/> Please use with caution!",SCROLL_UP:"Scroll Up",SCROLL_DOWN:"Scroll Down",CLOSE:"Close",CANCEL:"Cancel",LIST_EMPTY:"List Empty",SCROLL_START:"Toggle Auto Scroll",INCREASE_SPEED:"Increase Scroll Speed",DECREASE_SPEED:"Decrease Scroll Speed",AUTO_SCROLL_HEIGHT:"Auto Scroll Speed in Pixels",VERTICAL_SEPARATOR:"Show Vertical Separators",END:"End",SCOPE:"Scope",GLOBAL:"Global",GENERAL:"General",LOADING:"Loading",ZOOM:"Zoom",OTHERS:"Others",NAVBAR_TYPE:"Change Navbar Type",NAVBAR_BOTTOM:"Bottom",NAVBAR_LEFT:"Left",NAVBAR_RIGHT:"Right",NAVBAR_DISABLED:"Disabled",PAGINATION_TYPE:"Pagination Type",PAGINATION_DISABLED:"Disabled",PAGINATION_SLIDER:"Slider",PAGINATION_ARROWS:"Side Arrows",PAGINATION_BOTH:"Both",FILE_MENU:"Main Menu",VIEW_MENU:"View Menu",ZOOM_MENU:"Zoom Menu",DOUBLE_PAGE:"Toggle Double Page",CHOOSE_FILE:"Choose File",NO_FILES_SELECTED:"No files selected"},_p={ID:"es_ES",NAME:"Español (ES)",STARTING:"Iniciando Manga OnlineViewer",RESUME:"Continuando lectura desde la Página ",WAITING:"Por favor espere, 3 segundos...",CHOOSE_BEGINNING:"Elija la página en la que comenzar:",BUTTON_START:"Iniciar Manga OnlineViewer",SETTINGS:"Ajustes",LANGUAGE:"Idioma",COLOR_SCHEME:"Esquema de color",THEME:"Tema",THEME_COLOR:"Color",THEME_HUE:"Matiz del color",THEME_SHADE:"Saturación del color",DEFAULT_LOAD_MODE:"Modo de carga por defecto",LOAD_MODE_NORMAL:"Normal (Espera 3s)",LOAD_MODE_ALWAYS:"Siempre (Inmediatamente)",LOAD_MODE_NEVER:"Nunca (Manualmente)",LOAD_SPEED:"Velocidad carga",DEFAULT_ZOOM:"Zoom por defecto (entre 5 y 200)",DEFAULT_ZOOM_MODE:"Modo de zoom por defecto",MINIMUM_ZOOM:"Zoom mínimo relativo al ancho de la pantalla",ZOOM_STEP:"Paso entre cambios de zoom (entre 5 y 50)",DEFAULT_VIEW_MODE:"Modo de visualización por defecto",VIEW_MODE_VERTICAL:"Vertical",VIEW_MODE_LEFT:"Horizontal - Izquierda a derecha",VIEW_MODE_RIGHT:"Horizontal - Derecha a izquierda",VIEW_MODE_WEBCOMIC:"WebComic",VIEW_MODE_BOOK:"Libro - Izquierda a derecha",VIEW_MODE_MANGA:"Manga - Derecha a izquierda",VIEW_MODE_GALLERY:"Galería",FIT_WIDTH_OVERSIZED:"Ajustar ancho si es demasiado grande",SHOW_THUMBNAILS:"Mostrar miniaturas",HIDE_CONTROLS:"Ocultar siempre la barra de controles",HEADER_TYPE:"Cambiar tipo de cabecera",HEADER_HOVER:"Pasar por encima",HEADER_SCROLL:"Desplazamiento",HEADER_CLICK:"Hacer click",HEADER_FIXED:"Fijo",HEADER_SIMPLE:"Sencillo",BUTTON_DOWNLOAD:"Descargar",DOWNLOAD_ZIP:"Descargar fichero Zip",DOWNLOAD_IMAGES:"Autodescargar imágenes como Zip",DOWNLOAD_PROGRESS:"Descargando: ##num## de ##total##",GENERATING_ZIP:"Generando archivo Zip...",DOWNLOAD_INCOMPLETE:"Descarga Incompleta",DOWNLOAD_INCOMPLETE_MESSAGE:"Algunas páginas no se pudieron descargar y se saltaron. Se ha añadido una lista de páginas fallidas al archivo ZIP.",BUTTON_NEXT:"Siguiente",NEXT_CHAPTER:"Siguiente capítulo",BUTTON_PREVIOUS:"Anterior",PREVIOUS_CHAPTER:"Capítulo anterior",BOOKMARKS:"Marcadores",BOOKMARK:"Marcador",BOOKMARK_REMOVED:"Marcador eliminado",BOOKMARK_SAVED:"Marcador guardado",BOOKMARK_MESSAGE:"La próxima vez que abra este capítulo, continuará desde la página ##num## (Sólo UNA VEZ por Marcador)",KEYBINDINGS:"Atajos de teclado",EDIT_KEYBINDS:"Editar atajos",SAVE_KEYBINDS:"Guardar atajos",BUTTON_EDIT:"Editar",BUTTON_SAVE:"Guardar",KEYBIND_RULES:`
    <h3>Teclas soportadas</h3>
    Modificadores permitidos: shift, option, alt, ctrl, control, command. <br/>
    Teclas especiales: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide. <br/>
    Ejemplos: <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd>
  `,ATTENTION:"Atención",WARNING:"Alerta",BUTTON_RESET_SETTINGS:"Reiniciar ajustes(Reset Settings)",SETTINGS_RESET:"Se han restablecido los ajustes, vuelve a cargar la página para que surta efecto",LANGUAGE_CHANGED:"Se ha cambiado el idioma, vuelve a cargar la página para que surta efecto",AUTO_DOWNLOAD:"La próxima vez que termine de cargarse un capítulo, se le pedirá que guarde automáticamente",LAZY_LOAD:"La carga diferida es incompatible con la descarga zip, no podrá descargar con este ajuste activado.<br/> Sugerencia: <span style='color:red;font-weight:bold'>Desactivar miniaturas</span> para ahorrar Ancho de banda/Memoria.",LAZY_LOAD_IMAGES_ENABLE:"Habilitar carga de imágenes diferida",LAZY_LOAD_IMAGES:"Empezar carga diferida a partir de la página (entre 5 y 100)",RETURN_CHAPTER_LIST:"Regresar a la lista de capítulos",PAGES_LOADED:"Páginas cargadas",GO_TO_PAGE:"Ir a página",ENLARGE:"Agrandar",RESTORE:"Restaurar",REDUCE:"Reducir",FIT_WIDTH:"Ajustar al ancho",FIT_HEIGHT:"Ajustar al alto",PERCENT:"Porcentual",TOGGLE_CONTROLS:"Alternar controles de página",ZOOM_IN:"Acercar",ZOOM_OUT:"Alejar",ZOOM_RESET:"Restablecer zoom",ZOOM_WIDTH:"Zoom al ancho",ZOOM_HEIGHT:"Zoom al alto",HIDE:"Ocultar",RELOAD:"Recargar",SLOWLY:"Lento",NORMAL:"Normal",FAST:"Rápido",EXTREME:"Extremo",ALL_PAGES:"Todas las páginas",SPEED_WARNING:"Velocidad de carga muy alta",SPEED_WARNING_MESSAGE:"No se recomienda esta velocidad.<br/> Puede dañar algunos servidores o marcar su IP como atacante DDoS.<br/> ¡Utilícelo con precaución!",SCROLL_UP:"Desplazar arriba",SCROLL_DOWN:"Desplazarse hacia abajo",CLOSE:"Cerrar",CANCEL:"Cancelar",LIST_EMPTY:"Lista vacía",SCROLL_START:"Alternar desplazamiento automático",INCREASE_SPEED:"Aumentar la velocidad de desplazamiento",DECREASE_SPEED:"Disminuir la velocidad de desplazamiento",AUTO_SCROLL_HEIGHT:"Velocidad de desplazamiento automático en píxeles",VERTICAL_SEPARATOR:"Mostrar separadores verticales",END:"Fin",SCOPE:"Alcance",GLOBAL:"Global",GENERAL:"General",LOADING:"Carga",ZOOM:"Zoom",OTHERS:"Otros",NAVBAR_TYPE:"Cambiar el tipo de barra de navegación",NAVBAR_BOTTOM:"Abajo",NAVBAR_LEFT:"Izquierda",NAVBAR_RIGHT:"Derecha",NAVBAR_DISABLED:"Desactivado",PAGINATION_TYPE:"Tipo de paginación",PAGINATION_DISABLED:"Desactivado",PAGINATION_SLIDER:"Control deslizante",PAGINATION_ARROWS:"Flechas laterales",PAGINATION_BOTH:"Ambos",FILE_MENU:"Menú principal",VIEW_MENU:"Ver menú",ZOOM_MENU:"Menú Zoom",DOUBLE_PAGE:"Alternar Página Doble",CHOOSE_FILE:"Elegir archivo",NO_FILES_SELECTED:"No se han seleccionado archivos"},yp={ID:"fr_FR",NAME:"Français (FR)",STARTING:"Démarrage Manga OnlineViewer",RESUME:"Reprise de la lecture à partir de la Page ",WAITING:"Veuillez patienter, 3 secondes...",CHOOSE_BEGINNING:"Choisissez la page par laquelle commencer :",BUTTON_START:"Démarrer Manga OnlineViewer",SETTINGS:"Paramètres",LANGUAGE:"Langue",COLOR_SCHEME:"Palette de couleurs",THEME:"Thème",THEME_COLOR:"Couleur",THEME_HUE:"Teinte de couleur",THEME_SHADE:"Nuance de couleur",DEFAULT_LOAD_MODE:"Mode de chargement par défaut",LOAD_MODE_NORMAL:"Normal (attendre 3 s)",LOAD_MODE_ALWAYS:"Toujours (immédiatement)",LOAD_MODE_NEVER:"Jamais (manuellement)",LOAD_SPEED:"Vitesse de chargement",DEFAULT_ZOOM:"Zoom par défaut (entre 5 et 200)",DEFAULT_ZOOM_MODE:"Mode de zoom par défaut",MINIMUM_ZOOM:"Zoom minimum par rapport à la largeur de l'écran (entre 30 et 100)",ZOOM_STEP:"Pas de changement de zoom (entre 5 et 50)",DEFAULT_VIEW_MODE:"Mode d'affichage par défaut",VIEW_MODE_VERTICAL:"Vertical",VIEW_MODE_LEFT:"Horizontal - De gauche à droite",VIEW_MODE_RIGHT:"Horizontal - De droite à gauche",VIEW_MODE_WEBCOMIC:"WebComic",VIEW_MODE_BOOK:"Livre - De gauche à droite",VIEW_MODE_MANGA:"Manga - De droite à gauche",VIEW_MODE_GALLERY:"Galerie",FIT_WIDTH_OVERSIZED:"Ajuster à la largeur si surdimensionné",SHOW_THUMBNAILS:"Afficher les vignettes",HIDE_CONTROLS:"Toujours masquer les contrôles de page",HEADER_TYPE:"Changer le type d'en-tête",HEADER_HOVER:"Survol",HEADER_SCROLL:"Défilement",HEADER_CLICK:"Clic",HEADER_FIXED:"Fixe",HEADER_SIMPLE:"Simple",BUTTON_DOWNLOAD:"Télécharger",DOWNLOAD_ZIP:"Télécharger le fichier Zip",DOWNLOAD_IMAGES:"Télécharger les images en Zip automatiquement",DOWNLOAD_PROGRESS:"Téléchargement : ##num## sur ##total##",GENERATING_ZIP:"Génération du fichier Zip...",DOWNLOAD_INCOMPLETE:"Téléchargement incomplet",DOWNLOAD_INCOMPLETE_MESSAGE:"Certaines pages n'ont pas pu être téléchargées et ont été ignorées. Une liste des pages concernées a été ajoutée au fichier ZIP.",BUTTON_NEXT:"Suivant",NEXT_CHAPTER:"Chapitre suivant",BUTTON_PREVIOUS:"Précédent",PREVIOUS_CHAPTER:"Chapitre précédent",BOOKMARKS:"Favoris",BOOKMARK:"Favori",BOOKMARK_REMOVED:"Favori supprimé",BOOKMARK_SAVED:"Favori enregistré",BOOKMARK_MESSAGE:"La prochaine fois que vous ouvrirez ce chapitre, il reprendra à partir de: Page ##num## (Seulement UNE FOIS par favori)",KEYBINDINGS:"Raccourcis clavier",EDIT_KEYBINDS:"Modifier les raccourcis clavier",SAVE_KEYBINDS:"Enregistrer les raccourcis clavier",BUTTON_EDIT:"Modifier",BUTTON_SAVE:"Enregistrer",KEYBIND_RULES:`
    <h3>Touches prises en charge</h3>
    Modificateurs autorisés : shift, option, alt, ctrl, control, command. <br/>
    Touches spéciales : backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide. <br/>
    Exemples : <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd>
  `,ATTENTION:"Attention",WARNING:"Avertissement",BUTTON_RESET_SETTINGS:"Réinitialiser les paramètres",SETTINGS_RESET:"Les paramètres ont été réinitialisés, rechargez la page pour prendre effet",LANGUAGE_CHANGED:"La langue a été modifiée, rechargez la page pour prendre effet",AUTO_DOWNLOAD:"La prochaine fois qu'un chapitre finira de se charger, il vous sera proposé de l'enregistrer automatiquement",LAZY_LOAD:"Le chargement paresseux est incompatible avec le téléchargement zip, vous ne pourrez pas télécharger avec ce paramètre activé.<br/> Suggestion : <span style='color:red;font-weight:bold'>Désactivez les vignettes</span> pour économiser de la bande passante/mémoire.",LAZY_LOAD_IMAGES_ENABLE:"Activer le chargement paresseux des images",LAZY_LOAD_IMAGES:"Début du chargement paresseux à partir de la page (entre 5 et 100)",RETURN_CHAPTER_LIST:"Retour à la liste des chapitres",PAGES_LOADED:"Pages chargées",GO_TO_PAGE:"Aller à la page",ENLARGE:"Agrandir",RESTORE:"Restaurer",REDUCE:"Réduire",FIT_WIDTH:"Ajuster à la largeur",FIT_HEIGHT:"Ajuster à la hauteur",PERCENT:"Pourcentage",TOGGLE_CONTROLS:"Basculer les contrôles de page",ZOOM_IN:"Zoom avant",ZOOM_OUT:"Zoom arrière",ZOOM_RESET:"Réinitialiser le zoom",ZOOM_WIDTH:"Zoomer à la largeur",ZOOM_HEIGHT:"Zoomer à la hauteur",HIDE:"Masquer",RELOAD:"Recharger",SLOWLY:"Lentement",NORMAL:"Normal",FAST:"Rapide",EXTREME:"Extrême",ALL_PAGES:"Toutes les pages",SPEED_WARNING:"Vitesse de chargement trop élevée",SPEED_WARNING_MESSAGE:"Cette vitesse n'est pas recommandée.<br/> Elle peut nuire à certains serveurs ou marquer votre IP comme un attaquant DDoS.<br/> Veuillez l'utiliser avec prudence !",SCROLL_UP:"Faire défiler vers le haut",SCROLL_DOWN:"Faire défiler vers le bas",CLOSE:"Fermer",CANCEL:"Annuler",LIST_EMPTY:"Liste vide",SCROLL_START:"Basculer le défilement automatique",INCREASE_SPEED:"Augmenter la vitesse de défilement",DECREASE_SPEED:"Diminuer la vitesse de défilement",AUTO_SCROLL_HEIGHT:"Vitesse de défilement automatique en pixels",VERTICAL_SEPARATOR:"Afficher les séparateurs verticaux",END:"Fin",SCOPE:"Portée",GLOBAL:"Global",GENERAL:"Général",LOADING:"Chargement",ZOOM:"Zoom",OTHERS:"Autres",NAVBAR_TYPE:"Changer le type de barre de navigation",NAVBAR_BOTTOM:"Bas",NAVBAR_LEFT:"Gauche",NAVBAR_RIGHT:"Droite",NAVBAR_DISABLED:"Désactivé",PAGINATION_TYPE:"Type de pagination",PAGINATION_DISABLED:"Désactivé",PAGINATION_SLIDER:"Curseur",PAGINATION_ARROWS:"Flèches latérales",PAGINATION_BOTH:"Les deux",FILE_MENU:"Menu principal",VIEW_MENU:"Menu Affichage",ZOOM_MENU:"Menu Zoom",DOUBLE_PAGE:"Basculer Double Page",CHOOSE_FILE:"Choisir un fichier",NO_FILES_SELECTED:"Aucun fichier sélectionné"},kp={ID:"pt_BR",NAME:"Portugues (Brasil)",STARTING:"Iniciando Manga OnlineViewer",RESUME:"Continuando leitura na Pagina ",WAITING:"Por Favor espere, 3 segundos...",CHOOSE_BEGINNING:"Escolha a pagina de onde começar:",BUTTON_START:"Iniciar Manga OnlineViewer",SETTINGS:"Configurações",LANGUAGE:"Idioma",COLOR_SCHEME:"Esquema de Color",THEME:"Tema",THEME_COLOR:"Cor",THEME_HUE:"Tom da Cor",THEME_SHADE:"Saturação da Cor",DEFAULT_LOAD_MODE:"Forma de Carregamento Padrão",LOAD_MODE_NORMAL:"Normal(Esperando 3 sec)",LOAD_MODE_ALWAYS:"Sempre(Imediatamente)",LOAD_MODE_NEVER:"Nunca(Manualmente)",LOAD_SPEED:"Velocidade de Carregamento",DEFAULT_ZOOM:"Zoom padrão (entre 5 e 200)",DEFAULT_ZOOM_MODE:"Modo de Zoom padrão",MINIMUM_ZOOM:"Zoom minimo, relativo ao tamanho da tela (entre 30 e 100)",ZOOM_STEP:"Precisão da Mudança do Zoom (entre 5 e 50)",DEFAULT_VIEW_MODE:"Modo de Visualização Padrão",VIEW_MODE_VERTICAL:"Vertical",VIEW_MODE_LEFT:"Horizontal - Esquerda para Direita",VIEW_MODE_RIGHT:"Horizontal - Direita para Esquerda",VIEW_MODE_WEBCOMIC:"WebComic",VIEW_MODE_BOOK:"Livro - Esquerda para Direita",VIEW_MODE_MANGA:"Mangá - Direita para Esquerda",VIEW_MODE_GALLERY:"Galeria",FIT_WIDTH_OVERSIZED:"Encher a tela se grande demais",SHOW_THUMBNAILS:"Mostra Miniaturas",HIDE_CONTROLS:"Sempre esconder controles das paginas",HEADER_TYPE:"Mudar Tipo de Cabeçalho",HEADER_HOVER:"Passar por perto",HEADER_SCROLL:"Rolagem do Mouse",HEADER_CLICK:"Click",HEADER_FIXED:"Fixo",HEADER_SIMPLE:"Simples",BUTTON_DOWNLOAD:"Download",DOWNLOAD_ZIP:"Baixar arquivo Zip",DOWNLOAD_IMAGES:"Download das Imagens como Zip Automaticamente",DOWNLOAD_PROGRESS:"Baixando: ##num## de ##total##",GENERATING_ZIP:"Gerando arquivo Zip...",DOWNLOAD_INCOMPLETE:"Download Incompleto",DOWNLOAD_INCOMPLETE_MESSAGE:"Algumas páginas falharam ao baixar e foram puladas. Uma lista de páginas que falharam foi adicionada ao arquivo ZIP.",BUTTON_NEXT:"Proximo",NEXT_CHAPTER:"Proximo Capitulo",BUTTON_PREVIOUS:"Anterior",PREVIOUS_CHAPTER:"Capitulo Anterior",BOOKMARKS:"Marca paginas",BOOKMARK:"Marcar pagina",BOOKMARK_REMOVED:"Marca pagina Removido",BOOKMARK_SAVED:"Marca pagina Salvo",BOOKMARK_MESSAGE:"Proxima vez que abrir este capitulo continuará a partir da Pagina ##num## (Apenas UMA VEZ por marca pagina)",KEYBINDINGS:"Atalhos",EDIT_KEYBINDS:"Editar Atalhos",SAVE_KEYBINDS:"Salvar Atalhos",BUTTON_EDIT:"Editar",BUTTON_SAVE:"Salvar",KEYBIND_RULES:`
    <h3>Teclas Suportadas</h3>
    Modificadores permitidos: shift, option, alt, ctrl, control, command. <br/>
    Teclas Especiais: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide.<br/>
    Exemplos: <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd>
  `,ATTENTION:"Atenção",WARNING:"Alerta",BUTTON_RESET_SETTINGS:"Limpar Configurações(Reset Settings)",SETTINGS_RESET:"Configurações foram limpas, recarregue o site para efetivar a alteração",LANGUAGE_CHANGED:"Idioma foi alterado, recarregue o site para efetivar a alteração",AUTO_DOWNLOAD:"Proxima vez que abrir um capitulo download iniciara automaticamente",LAZY_LOAD:"Carregamento preguiçoso não é compativel com download de zip, não conseguira com essa configuração ativa.<br/> Sugestão: <span style='color:red;font-weight:bold'>Desative Miniaturas</span> para economizar memoria e cota de internet.",LAZY_LOAD_IMAGES_ENABLE:"Ativar Carregamento de imagens preguiçoso",LAZY_LOAD_IMAGES:"Carregamento de paginas preguiçoso começa a partir de (entre 5 e 100)",RETURN_CHAPTER_LIST:"Voltar a lista de Capitulos",PAGES_LOADED:"Paginas Carregadas",GO_TO_PAGE:"Pular para",ENLARGE:"Aumentar",RESTORE:"Restaurar",REDUCE:"Diminuir",FIT_WIDTH:"Preencher Largura",FIT_HEIGHT:"Preencher Altura ",PERCENT:"Percentual",TOGGLE_CONTROLS:"Mostar controles de pagina",ZOOM_IN:"Mais Zoom",ZOOM_OUT:"Menos Zoom",ZOOM_RESET:"Resetar Zoom",ZOOM_WIDTH:"Zoom para Largura",ZOOM_HEIGHT:"Zoom para Altura",HIDE:"Esconder",RELOAD:"Recarregar",SLOWLY:"Devagar",NORMAL:"Normal",FAST:"Rapido",EXTREME:"Extremo",ALL_PAGES:"Todas as Paginas",SPEED_WARNING:"Velocidade de Carregamento muito alta",SPEED_WARNING_MESSAGE:"Essa velocidade não é recomendada.<br/> Ela pode derrubar um servidor or marcar voce como um ataque hacker de DDoS.<br/> Use com cuidado!",SCROLL_UP:"Subir Pagina",SCROLL_DOWN:"Descer Pagina",CLOSE:"Fechar",CANCEL:"Cancelar",LIST_EMPTY:"Lista Vazia",SCROLL_START:"Ativar Rolagem Automatica",INCREASE_SPEED:"Aumentar Valocidade da Rolagem",DECREASE_SPEED:"Diminuir Valocidade da Rolagem",AUTO_SCROLL_HEIGHT:"Velocidade da Rolagem Automatica em Pixels",VERTICAL_SEPARATOR:"Mostrar Separadores Verticais",END:"Fin",SCOPE:"Escopo",GLOBAL:"Global",GENERAL:"Geral",LOADING:"Carregamento",ZOOM:"Zoom",OTHERS:"Outros",NAVBAR_TYPE:"Mudar barra de navegação",NAVBAR_BOTTOM:"Embaixo",NAVBAR_LEFT:"Esquerda",NAVBAR_RIGHT:"Direita",NAVBAR_DISABLED:"Desativado",PAGINATION_TYPE:"Tipo de Paginação",PAGINATION_DISABLED:"Desativado",PAGINATION_SLIDER:"Controle deslizante",PAGINATION_ARROWS:"Setas Laterais",PAGINATION_BOTH:"Ambos",FILE_MENU:"Menu Principal",VIEW_MENU:"Menu de Visualizações",ZOOM_MENU:"Menu de Zoom",DOUBLE_PAGE:"Alternar Página Dupla",CHOOSE_FILE:"Escolher arquivo",NO_FILES_SELECTED:"Nenhum arquivo selecionado"},Ep={ID:"zh_CN",NAME:"中文 (简体)",STARTING:"正在启动 Manga OnlineViewer",RESUME:"从页面继续阅读 ",WAITING:"请等待3秒钟...",CHOOSE_BEGINNING:"选择要开始的页数:",BUTTON_START:"启动Manga OnlineViewer",SETTINGS:"设置",LANGUAGE:"语言",COLOR_SCHEME:"配色方案",THEME:"主题",THEME_COLOR:"颜色",THEME_HUE:"色相",THEME_SHADE:"色度",DEFAULT_LOAD_MODE:"默认加载模式",LOAD_MODE_NORMAL:"等待模式(等待3秒自动加载 )",LOAD_MODE_ALWAYS:"自动模式(无需等待)",LOAD_MODE_NEVER:"手动模式(点击启动)",LOAD_SPEED:"加载速度",DEFAULT_ZOOM:"默认缩放 (最小 5 最大 200)",DEFAULT_ZOOM_MODE:"默认缩放模式",MINIMUM_ZOOM:"相对于屏幕宽度的最小缩放 (最小 30 最大 100)",ZOOM_STEP:"缩放级别 (最小 5 最大 50)",DEFAULT_VIEW_MODE:"默认视图模式",VIEW_MODE_VERTICAL:"垂直有缝",VIEW_MODE_LEFT:"横向 - 从左到右",VIEW_MODE_RIGHT:"横向 - 从右到左",VIEW_MODE_WEBCOMIC:"垂直无缝",VIEW_MODE_BOOK:"书籍 - 从左到右",VIEW_MODE_MANGA:"漫画 - 从右到左",VIEW_MODE_GALLERY:"图库",FIT_WIDTH_OVERSIZED:"如果尺寸过大、则适合宽度",SHOW_THUMBNAILS:"显示缩略图",HIDE_CONTROLS:"始终隐藏页面控件",HEADER_TYPE:"更改标题显示方式",HEADER_HOVER:"悬停",HEADER_SCROLL:"滚动",HEADER_CLICK:"点击",HEADER_FIXED:"固定",HEADER_SIMPLE:"简单",BUTTON_DOWNLOAD:"下载",DOWNLOAD_ZIP:"下载压缩文件",DOWNLOAD_IMAGES:"自动将图片下载成ZIP",DOWNLOAD_PROGRESS:"正在下载：第 ##num## 页，共 ##total## 页",GENERATING_ZIP:"正在生成 Zip 文件...",DOWNLOAD_INCOMPLETE:"下载不完整",DOWNLOAD_INCOMPLETE_MESSAGE:"部分页面下载失败并已跳过。失败页面列表已添加到 ZIP 文件中。",BUTTON_NEXT:"下一页",NEXT_CHAPTER:"下一章",BUTTON_PREVIOUS:"上一页",PREVIOUS_CHAPTER:"上一章",BOOKMARKS:"书签",BOOKMARK:"Bookmark",BOOKMARK_REMOVED:"删除书签",BOOKMARK_SAVED:"保存书签",BOOKMARK_MESSAGE:"下次打开本章时，将从: 页码 ##num## (仅一次 每个书签)",KEYBINDINGS:"快捷键",EDIT_KEYBINDS:"编辑键绑定",SAVE_KEYBINDS:"保存键绑定",BUTTON_EDIT:"编辑",BUTTON_SAVE:"救",KEYBIND_RULES:`
    <h3>支持的密钥</h3>
    允许的修饰符: shift, option, alt, ctrl, control, command. <br/>
    特殊键: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide.<br/>
    例子: <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd>
  `,ATTENTION:"注意",WARNING:"警告",BUTTON_RESET_SETTINGS:"重置设置(Reset Settings)",SETTINGS_RESET:"设置已重置、重新加载页面才能生效",LANGUAGE_CHANGED:"语言已更改、重新加载页面才能生效",AUTO_DOWNLOAD:"下次章节加载完成时、系统将提示您自动保存",LAZY_LOAD:"延迟加载与zip下载不兼容、您将无法使用此设置下载.<br/> 建议: <span style='color:red;font-weight:bold'>禁用缩略图</span> 以节省流量和内存.",LAZY_LOAD_IMAGES_ENABLE:"启用延迟加载图像",LAZY_LOAD_IMAGES:"惰性加载从页面 (最小 5 最大 100)",RETURN_CHAPTER_LIST:"返回章节列表",PAGES_LOADED:"已加载的页数",GO_TO_PAGE:"转到页数",ENLARGE:"放大",RESTORE:"还原",REDUCE:"缩小",FIT_WIDTH:"适合宽度",FIT_HEIGHT:"适合高度",PERCENT:"百分之",TOGGLE_CONTROLS:"显示隐藏页面控件",ZOOM_IN:"放大",ZOOM_OUT:"缩小",ZOOM_RESET:"还原",ZOOM_WIDTH:"适合宽度",ZOOM_HEIGHT:"适合高度",HIDE:"显示隐藏页面控件",RELOAD:"重新加载",SLOWLY:"慢速",NORMAL:"正常",FAST:"快速",EXTREME:"极端",ALL_PAGES:"所有页面",SPEED_WARNING:"加载速度过高",SPEED_WARNING_MESSAGE:"不建议使用此速度.<br/>它可能会伤害某些服务器或将您的 IP 标记为 DDoS 攻击者.<br/>请谨慎使用!",SCROLL_UP:"向上滚动",SCROLL_DOWN:"向下滚动",CLOSE:"关闭",CANCEL:"取消",LIST_EMPTY:"没有收藏书签",SCROLL_START:"切换自动滚动",INCREASE_SPEED:"增加滚动速度",DECREASE_SPEED:"降低滚动速度",AUTO_SCROLL_HEIGHT:"自动滚动速度（以像素为单位）",VERTICAL_SEPARATOR:"显示垂直分隔符",END:"结尾",SCOPE:"范围",GLOBAL:"全球",GENERAL:"常规",LOADING:"装载",ZOOM:"缩放",OTHERS:"别人",NAVBAR_TYPE:"更改导航栏类型",NAVBAR_BOTTOM:"底部",NAVBAR_LEFT:"左边",NAVBAR_RIGHT:"正确的",NAVBAR_DISABLED:"已禁用",PAGINATION_TYPE:"分页类型",PAGINATION_DISABLED:"已禁用",PAGINATION_SLIDER:"滑块",PAGINATION_ARROWS:"侧边箭头",PAGINATION_BOTH:"两者",FILE_MENU:"主菜单",VIEW_MENU:"查看菜单",ZOOM_MENU:"缩放菜单",DOUBLE_PAGE:"切换双页",CHOOSE_FILE:"选择文件",NO_FILES_SELECTED:"未选择任何文件"},so=[wp,_p,kp,Ep,bp,yp],Zi=globalThis,Ps=Zi.ShadowRoot&&(Zi.ShadyCSS===void 0||Zi.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,$s=Symbol(),Ld=new WeakMap,Rd=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==$s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Ps&&e===void 0){const r=t!==void 0&&t.length===1;r&&(e=Ld.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&Ld.set(t,e))}return e}toString(){return this.cssText}},ke=e=>new Rd(typeof e=="string"?e:e+"",void 0,$s),_t=(e,...t)=>new Rd(e.length===1?e[0]:t.reduce((r,i,a)=>r+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[a+1],e[0]),e,$s),Sp=(e,t)=>{if(Ps)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of t){const i=document.createElement("style"),a=Zi.litNonce;a!==void 0&&i.setAttribute("nonce",a),i.textContent=r.cssText,e.appendChild(i)}},Pd=Ps?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const i of t.cssRules)r+=i.cssText;return ke(r)})(e):e,{is:Ap,defineProperty:Mp,getOwnPropertyDescriptor:xp,getOwnPropertyNames:Ip,getOwnPropertySymbols:Cp,getPrototypeOf:Op}=Object,ji=globalThis,$d=ji.trustedTypes,Tp=$d?$d.emptyScript:"",Lp=ji.reactiveElementPolyfillSupport,Yo=(e,t)=>e,qi={toAttribute(e,t){switch(t){case Boolean:e=e?Tp:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},Ds=(e,t)=>!Ap(e,t),Dd={attribute:!0,type:String,converter:qi,reflect:!1,useDefault:!1,hasChanged:Ds};Symbol.metadata??=Symbol("metadata"),ji.litPropertyMetadata??=new WeakMap;var lo=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Dd){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const r=Symbol(),i=this.getPropertyDescriptor(e,r,t);i!==void 0&&Mp(this.prototype,e,i)}}static getPropertyDescriptor(e,t,r){const{get:i,set:a}=xp(this.prototype,e)??{get(){return this[t]},set(s){this[t]=s}};return{get:i,set(s){const l=i?.call(this);a?.call(this,s),this.requestUpdate(e,l,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Dd}static _$Ei(){if(this.hasOwnProperty(Yo("elementProperties")))return;const e=Op(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Yo("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Yo("properties"))){const t=this.properties,r=[...Ip(t),...Cp(t)];for(const i of r)this.createProperty(i,t[i])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[r,i]of t)this.elementProperties.set(r,i)}this._$Eh=new Map;for(const[t,r]of this.elementProperties){const i=this._$Eu(t,r);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const i of r)t.unshift(Pd(i))}else e!==void 0&&t.push(Pd(e));return t}static _$Eu(e,t){const r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Sp(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$ET(e,t){const r=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,r);if(i!==void 0&&r.reflect===!0){const a=(r.converter?.toAttribute!==void 0?r.converter:qi).toAttribute(t,r.type);this._$Em=e,a==null?this.removeAttribute(i):this.setAttribute(i,a),this._$Em=null}}_$AK(e,t){const r=this.constructor,i=r._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const a=r.getPropertyOptions(i),s=typeof a.converter=="function"?{fromAttribute:a.converter}:a.converter?.fromAttribute!==void 0?a.converter:qi;this._$Em=i;const l=s.fromAttribute(t,a.type);this[i]=l??this._$Ej?.get(i)??l,this._$Em=null}}requestUpdate(e,t,r,i=!1,a){if(e!==void 0){const s=this.constructor;if(i===!1&&(a=this[e]),r??=s.getPropertyOptions(e),!((r.hasChanged??Ds)(a,t)||r.useDefault&&r.reflect&&a===this._$Ej?.get(e)&&!this.hasAttribute(s._$Eu(e,r))))return;this.C(e,t,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:r,reflect:i,wrapped:a},s){r&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,s??t??this[e]),a!==!0||s!==void 0)||(this._$AL.has(e)||(this.hasUpdated||r||(t=void 0),this._$AL.set(e,t)),i===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[i,a]of this._$Ep)this[i]=a;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[i,a]of r){const{wrapped:s}=a,l=this[i];s!==!0||this._$AL.has(i)||l===void 0||this.C(i,void 0,a,l)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(t)):this._$EM()}catch(r){throw e=!1,this._$EM(),r}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};lo.elementStyles=[],lo.shadowRootOptions={mode:"open"},lo[Yo("elementProperties")]=new Map,lo[Yo("finalized")]=new Map,Lp?.({ReactiveElement:lo}),(ji.reactiveElementVersions??=[]).push("2.1.2");var zs=globalThis,Xe=class extends lo{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=cp(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Jn}};Xe._$litElement$=!0,Xe.finalized=!0,zs.litElementHydrateSupport?.({LitElement:Xe});var Rp=zs.litElementPolyfillSupport;Rp?.({LitElement:Xe}),(zs.litElementVersions??=[]).push("4.2.2");var rt=e=>(t,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},Pp={attribute:!0,type:String,converter:qi,reflect:!1,hasChanged:Ds},$p=(e=Pp,t,r)=>{const{kind:i,metadata:a}=r;let s=globalThis.litPropertyMetadata.get(a);if(s===void 0&&globalThis.litPropertyMetadata.set(a,s=new Map),i==="setter"&&((e=Object.create(e)).wrapped=!0),s.set(r.name,e),i==="accessor"){const{name:l}=r;return{set(u){const d=t.get.call(this);t.set.call(this,u),this.requestUpdate(l,d,e,!0,u)},init(u){return u!==void 0&&this.C(l,void 0,e,u),u}}}if(i==="setter"){const{name:l}=r;return function(u){const d=this[l];t.call(this,u),this.requestUpdate(l,d,e,!0,u)}}throw Error("Unsupported decorator location: "+i)};function j(e){return(t,r)=>typeof r=="object"?$p(e,t,r):((i,a,s)=>{const l=a.hasOwnProperty(s);return a.constructor.createProperty(s,i),l?Object.getOwnPropertyDescriptor(a,s):void 0})(e,t,r)}function Dt(e){return j({...e,state:!0,attribute:!1})}var zd=(e,t,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,r),r);function Qn(e,t){return(r,i,a)=>{const s=l=>l.renderRoot?.querySelector(e)??null;if(t){const{get:l,set:u}=typeof i=="object"?r:a??(()=>{const d=Symbol();return{get(){return this[d]},set(h){this[d]=h}}})();return zd(r,i,{get(){let d=l.call(this);return d===void 0&&(d=s(this),(d!==null||this.hasUpdated)&&u.call(this,d)),d}})}return zd(r,i,{get(){return s(this)}})}}var yt=qo(class extends Ui{constructor(e){if(super(e),e.type!==Wi.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in t)t[i]&&!this.nt?.has(i)&&this.st.add(i);return this.render(t)}const r=e.element.classList;for(const i of this.st)i in t||(r.remove(i),this.st.delete(i));for(const i in t){const a=!!t[i];a===this.st.has(i)||this.nt?.has(i)||(a?(r.add(i),this.st.add(i)):(r.remove(i),this.st.delete(i)))}return Jn}}),Ki=class extends Ui{constructor(e){if(super(e),this.it=ze,e.type!==Wi.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===ze||e==null)return this._t=void 0,this.it=e;if(e===Jn)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};Ki.directiveName="unsafeHTML",Ki.resultType=1;var Bd=qo(Ki),Bs=class extends Ki{};Bs.directiveName="unsafeSVG",Bs.resultType=2;var Nd=qo(Bs);function Hd(e){if(e.startsWith("Icon")&&!e.includes("-")&&!e.includes("_"))return e;const t=e.startsWith("Icon")?e.substring(4):e;return`Icon${xe.default.upperFirst(xe.default.camelCase(t))}`}var Dp=".icon-tabler-file-download>:nth-child(n+4){color:gold}.icon-tabler-arrow-autofit-width>:nth-child(n+3),.icon-tabler-arrow-autofit-height>:nth-child(n+3){color:#ff0}.icon-tabler-zoom-in-area>:nth-child(2),.icon-tabler-zoom-in-area>:nth-child(3){color:#0f0}.icon-tabler-zoom-out-area>:nth-child(2){color:red}.icon-tabler-zoom-pan>:nth-child(n+4){color:#96f}.icon-tabler-arrow-autofit-down>:nth-child(n+3),.icon-tabler-arrow-autofit-left>:nth-child(n+3),.icon-tabler-arrow-autofit-right>:nth-child(n+3){color:#28ffbf}.icon-tabler-spacing-vertical>:nth-child(4),.icon-tabler-spacing-horizontal>:nth-child(4){color:#f0f}.icon-tabler-list-numbers>:nth-child(n+5){color:#e48900}.icon-tabler-bookmarks>:nth-child(n+2),.icon-tabler-bookmark>:nth-child(2),.icon-tabler-bookmark-off>:nth-child(2){color:orange}.icon-tabler-bookmark-off>:nth-child(3),.icon-tabler-eye-off>:nth-child(4){color:red}.icon-tabler-zoom-cancel>:nth-child(3),.icon-tabler-zoom-cancel>:nth-child(4){color:#96f}.icon-tabler-zoom-in>:nth-child(3),.icon-tabler-zoom-in>:nth-child(4){color:#0f0}.icon-tabler-zoom-out>:nth-child(3){color:red}.icon-tabler-refresh>:nth-child(n+2){color:#0ff}.icon-tabler-photo>:nth-child(n+2),.icon-tabler-photo-off>:nth-child(n+2){color:silver}.icon-tabler-photo-off>:nth-child(6){color:orange}.icon-tabler-message>:nth-child(2),.icon-tabler-message>:nth-child(3),.icon-tabler-book-arrow-left>:nth-child(7),.icon-tabler-book-arrow-left>:nth-child(8),.icon-tabler-book-arrow-right>:nth-child(7),.icon-tabler-book-arrow-right>:nth-child(8),.icon-tabler-books-return>:nth-child(8),.icon-tabler-books-return>:nth-child(9){color:#adff2f}.icon-tabler-file-percent>:nth-child(2),.icon-tabler-file-percent>:nth-child(5),.icon-tabler-file-percent>:nth-child(6){color:#ff0}.icon-tabler-settings-off>:nth-child(4),.icon-tabler-book-off>:nth-child(7){color:red}",zp='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-adjustments-horizontal"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M4 6l8 0"/><path d="M16 6l4 0"/><path d="M8 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M4 12l2 0"/><path d="M10 12l10 0"/><path d="M17 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M4 18l11 0"/><path d="M19 18l1 0"/></svg>',Bp='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-alert-circle"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>',Np='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-api-book"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 1.006 -.5"/><path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0"/><path d="M3 6v13"/><path d="M12 6v13"/><path d="M21 6v6"/><path d="M17.001 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M19.001 15.5v1.5"/><path d="M19.001 21v1.5"/><path d="M22.032 17.25l-1.299 .75"/><path d="M17.27 20l-1.3 .75"/><path d="M15.97 17.25l1.3 .75"/><path d="M20.733 20l1.3 .75"/></svg>',Hp='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-autofit-down" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 20h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h8"/><path d="M18 4v17"/><path d="M15 18l3 3l3 -3"/></svg>',Fp='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-autofit-height" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 20h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h6"/><path d="M18 14v7"/><path d="M18 3v7"/><path d="M15 18l3 3l3 -3"/><path d="M15 6l3 -3l3 3"/></svg>',Gp='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-autofit-left" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 12v-6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v8"/><path d="M20 18h-17"/><path d="M6 15l-3 3l3 3"/></svg>',Wp='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-autofit-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 12v-6a2 2 0 0 0 -2 -2h-12a2 2 0 0 0 -2 2v8"/><path d="M4 18h17"/><path d="M18 15l3 3l-3 3"/></svg>',Up='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-autofit-width" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 12v-6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v6"/><path d="M10 18h-7"/><path d="M21 18h-7"/><path d="M6 15l-3 3l3 3"/><path d="M18 15l3 3l-3 3"/></svg>',Vp='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-big-left" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 15h-8v3.586a1 1 0 0 1 -1.707 .707l-6.586 -6.586a1 1 0 0 1 0 -1.414l6.586 -6.586a1 1 0 0 1 1.707 .707v3.586h8a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1z"/></svg>',Zp='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-big-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 9h8v-3.586a1 1 0 0 1 1.707 -.707l6.586 6.586a1 1 0 0 1 0 1.414l-6.586 6.586a1 1 0 0 1 -1.707 -.707v-3.586h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1z"/></svg>',jp='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrows-horizontal"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 8l-4 4l4 4"/><path d="M17 8l4 4l-4 4"/><path d="M3 12l18 0"/></svg>',qp='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrows-left-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M21 17l-18 0"/><path d="M6 10l-3 -3l3 -3"/><path d="M3 7l18 0"/><path d="M18 20l3 -3l-3 -3"/></svg>',Kp='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrows-move"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 9l3 3l-3 3"/><path d="M15 12h6"/><path d="M6 9l-3 3l3 3"/><path d="M3 12h6"/><path d="M9 18l3 3l3 -3"/><path d="M12 15v6"/><path d="M15 6l-3 -3l-3 3"/><path d="M12 3v6"/></svg>',Yp='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrows-move-vertical"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 18l3 3l3 -3"/><path d="M12 15v6"/><path d="M15 6l-3 -3l-3 3"/><path d="M12 3v6"/></svg>',Xp='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrows-vertical"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 7l4 -4l4 4"/><path d="M8 17l4 4l4 -4"/><path d="M12 3l0 18"/></svg>',Jp='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-book"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0"/><path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0"/><path d="M3 6l0 13"/><path d="M12 6l0 13"/><path d="M21 6l0 13"/></svg>',Qp='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-book-arrow-left"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 1.006 -.5"/><path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0"/><path d="M3 6v13"/><path d="M12 6v13"/><path d="M21 6v6"/><path d="M16 19h6"/><path d="M19 16l-3 3l3 3"/></svg>',eg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-book-arrow-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 1.006 -.5"/><path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0"/><path d="M3 6v13"/><path d="M12 6v13"/><path d="M21 6v6"/><path d="M16 19h6"/><path d="M19 16l3 3l-3 3"/></svg>',tg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-book-off"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 5.899 -1.096"/><path d="M3 6a9 9 0 0 1 2.114 -.884m3.8 -.21c1.07 .17 2.116 .534 3.086 1.094a9 9 0 0 1 9 0"/><path d="M3 6v13"/><path d="M12 6v2m0 4v7"/><path d="M21 6v11"/><path d="M3 3l18 18"/></svg>',ng='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-book-upload"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 20h-8a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12v5"/><path d="M11 16h-5a2 2 0 0 0 -2 2"/><path d="M15 16l3 -3l3 3"/><path d="M18 13v9"/></svg>',rg='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bookmark" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 7v14l-6 -4l-6 4v-14a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4z"/></svg>',og='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bookmark-off" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7.708 3.721a3.982 3.982 0 0 1 2.292 -.721h4a4 4 0 0 1 4 4v7m0 4v3l-6 -4l-6 4v-14c0 -.308 .035 -.609 .1 -.897"/><path d="M3 3l18 18"/></svg>',ig='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bookmarks" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 10v11l-5 -3l-5 3v-11a3 3 0 0 1 3 -3h4a3 3 0 0 1 3 3z"/><path d="M11 3h5a3 3 0 0 1 3 3v11"/></svg>',ag='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-books-return"><defs><mask id="arrow-mask"><rect width="24" height="24" fill="white"/><rect x="15" y="15" width="8" height="8" fill="black"/></mask></defs><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 5a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -14"/><path d="M9 5a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -14"/><path d="M5 8h4"/><path d="M9 16h4"/><g mask="url(#arrow-mask)"><path d="M13.803 4.56l2.184 -.53c.562 -.135 1.133 .19 1.282 .732l3.695 13.418a1.02 1.02 0 0 1 -.634 1.219l-.133 .041l-2.184 .53c-.562 .135 -1.133 -.19 -1.282 -.732l-3.695 -13.418a1.02 1.02 0 0 1 .634 -1.219l.133 -.041"/><path d="M14 9l4 -1"/><path d="M16 16l3.923 -.98"/></g><path d="M16 19h6"/><path d="M19 16l-3 3l3 3"/></svg>',sg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-box-align-top"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 10.005h16v-5a1 1 0 0 0 -1 -1h-14a1 1 0 0 0 -1 1v5z"/><path d="M4 15.005v-.01"/><path d="M4 20.005v-.01"/><path d="M9 20.005v-.01"/><path d="M15 20.005v-.01"/><path d="M20 20.005v-.01"/><path d="M20 15.005v-.01"/></svg>',lg='<svg id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><g><g><path d="m427.508 512h-343.02c-5.69 0-10.302-4.612-10.302-10.302v-491.396c0-5.69 4.612-10.302 10.302-10.302h343.02c5.69 0 10.302 4.612 10.302 10.302v491.396c-.001 5.69-4.613 10.302-10.302 10.302z" fill="#f2eff2"/></g></g><path d="m427.512 0h-41.238c5.687 0 10.302 4.615 10.302 10.302v41.156l-18.039 71.714 18.039 81.268v46.358l-18.039 45.164 18.039 24.847v46.358l-10.302 61.227 10.302 32.149v41.156c0 5.687-4.615 10.302-10.302 10.302h41.238c5.687 0 10.302-4.615 10.302-10.302v-491.397c0-5.687-4.615-10.302-10.302-10.302z" fill="#e1dde1"/><g><path d="m243.51 273.63-47.48 104.08-80.61-10.85v-315.4c0-2.85 2.31-5.15 5.15-5.15h30.86c2.13 0 4.03 1.29 4.8 3.27z" fill="#3ad1e0"/><path d="m243.51 273.63-16.68 36.56-101.52-260.61c-.76-1.95-2.64-3.25-4.74-3.27h30.86c2.13 0 4.03 1.29 4.8 3.27z" fill="#22c7db"/><path d="m310.81 465.69h-190.24c-2.84 0-5.15-2.3-5.15-5.15v-93.68c25.18-34.92 65.99-57.81 112.19-58.37l-16.07 35.21 74.5 39.08 29.56 75.9c1.32 3.37-1.17 7.01-4.79 7.01z" fill="#fb33a8"/><path d="m310.81 465.69h-30.92c3.61 0 6.11-3.64 4.79-7.01l-12.92-33.17c-1.92 4.55-2.88 9.61-2.61 14.91.01.13.01.25.01.38 0 5.92-7.39 8.87-11.45 4.36-6.77-7.49-16.03-11.24-25.29-11.24s-18.54 3.75-25.29 11.24c-1.36 1.52-3.11 2.19-4.83 2.19-3.48 0-6.84-2.78-6.62-6.93.03-.59.04-1.18.04-1.77 0-19.36-16.23-34.99-35.81-33.99-.12.01-.24.01-.37.01-5.92 0-8.87-7.4-4.37-11.46 7.49-6.76 11.24-16.03 11.24-25.29s-3.75-18.52-11.24-25.29c-1.51-1.36-2.18-3.1-2.18-4.81 0-3.48 2.78-6.84 6.92-6.64.6.04 1.19.05 1.77.05 12.81 0 23.98-7.11 29.79-17.57l34.29-1.12-14.22 31.16 74.5 39.08 29.56 75.9c1.32 3.37-1.17 7.01-4.79 7.01z" fill="#fb33a8"/><path d="m396.58 51.46v152.98c0 2.84-2.31 5.15-5.15 5.15h-32l-40.41-29.31-40.41 29.31h-17.82c-2.12 0-4.03-1.3-4.8-3.28l-59.6-152.98c-1.32-3.38 1.18-7.02 4.79-7.02h190.25c2.84 0 5.15 2.3 5.15 5.15z" fill="#fcb44d"/><path d="m396.576 51.457v152.982c0 2.843-2.308 5.151-5.151 5.151h-30.927c2.843 0 5.151-2.308 5.151-5.151v-152.982c0-2.843-2.308-5.151-5.151-5.151h30.927c2.843.001 5.151 2.308 5.151 5.151z" fill="#fb9927"/><g><path d="m359.428 181.065v28.526h-80.818v-28.526c0-22.324 18.1-40.414 40.414-40.414 11.157 0 21.263 4.522 28.567 11.837 7.314 7.314 11.837 17.409 11.837 28.577z" fill="#ae6ad8"/><path d="m359.43 181.065v28.526h-29.237v-28.526c0-11.167-4.522-21.263-11.837-28.577-3.935-3.935-8.674-7.067-13.949-9.107 4.533-1.762 9.467-2.73 14.618-2.73 11.157 0 21.263 4.522 28.567 11.837 7.316 7.314 11.838 17.409 11.838 28.577z" fill="#975bbb"/><g><g><circle cx="319.023" cy="121.497" fill="#f2eff2" r="26.224"/></g></g></g><path d="m396.576 250.798v70.011c0 2.845-2.306 5.151-5.151 5.151h-85.311c-2.123 0-4.029-1.303-4.8-3.281l-27.273-70.011c-1.316-3.377 1.175-7.021 4.8-7.021h112.585c2.844 0 5.15 2.306 5.15 5.151z" fill="#23f1a8"/><path d="m396.576 250.798v70.011c0 2.843-2.308 5.151-5.151 5.151h-30.927c2.843 0 5.151-2.308 5.151-5.151v-70.011c0-2.843-2.308-5.151-5.151-5.151h30.927c2.843 0 5.151 2.307 5.151 5.151z" fill="#27e19d"/><path d="m324.179 362.016h67.246c2.845 0 5.151 2.306 5.151 5.151v93.376c0 2.845-2.306 5.151-5.151 5.151h-30.866c-2.123 0-4.029-1.303-4.799-3.281l-36.38-93.376c-1.316-3.377 1.175-7.021 4.799-7.021z" fill="#23f1a8"/><path d="m396.576 367.167v93.376c0 2.843-2.308 5.151-5.151 5.151h-30.927c2.843 0 5.151-2.308 5.151-5.151v-93.376c0-2.843-2.308-5.151-5.151-5.151h30.927c2.843 0 5.151 2.308 5.151 5.151z" fill="#27e19d"/></g><g><path d="m269.153 413.978c.01.124.01.247.01.371 0 5.924-7.397 8.87-11.456 4.368-6.768-7.489-16.03-11.239-25.291-11.239s-18.533 3.75-25.291 11.239c-1.36 1.514-3.101 2.184-4.821 2.184-3.482 0-6.84-2.782-6.624-6.923.031-.597.041-1.185.041-1.772 0-19.367-16.236-34.995-35.809-33.996-.124.01-.247.01-.371.01-5.924 0-8.87-7.397-4.368-11.456 7.489-6.758 11.239-16.03 11.239-25.291s-3.75-18.523-11.239-25.291c-1.514-1.36-2.184-3.101-2.184-4.811 0-3.482 2.782-6.84 6.923-6.634.597.031 1.185.041 1.772.041 19.367 0 34.995-16.236 33.996-35.799-.01-.124-.01-.247-.01-.371 0-5.934 7.397-8.87 11.456-4.378 6.758 7.489 16.03 11.239 25.291 11.239 3.76 0 7.51-.618 11.095-1.844l42.526 109.158c-10.591 6.183-17.565 17.916-16.885 31.195z" fill="#fdef63"/><path d="m268.516 417.19c.406-.839.648-1.79.648-2.841 0-.123 0-.247-.01-.371-.68-13.279 6.294-25.013 16.885-31.194l-42.526-109.158c-3.585 1.226-7.335 1.844-11.095 1.844-7.992 0-15.988-2.799-22.374-8.378z" fill="#f3d730"/></g><g><g><path d="m229.374 349.967c-4.267 0-7.726-3.459-7.726-7.726v-29.272c0-4.267 3.459-7.726 7.726-7.726s7.726 3.459 7.726 7.726v29.272c0 4.267-3.459 7.726-7.726 7.726z" fill="#554e55"/></g><g><path d="m229.374 377.711c-4.267 0-7.726-3.459-7.726-7.726v-2.061c0-4.267 3.459-7.726 7.726-7.726s7.726 3.459 7.726 7.726v2.061c0 4.267-3.459 7.726-7.726 7.726z" fill="#554e55"/></g></g><g><g><path d="m258.185 86.361h-18.228c-4.267 0-7.726-3.459-7.726-7.726s3.459-7.726 7.726-7.726h18.228c4.267 0 7.726 3.459 7.726 7.726 0 4.266-3.459 7.726-7.726 7.726z" fill="#f2eff2"/></g><g><path d="m266.269 111.168h-18.229c-4.267 0-7.726-3.459-7.726-7.726s3.459-7.726 7.726-7.726h18.228c4.267 0 7.726 3.459 7.726 7.726s-3.458 7.726-7.725 7.726z" fill="#f2eff2"/></g></g></g></svg>',cg=`<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background: new 0 0 512 512" xml:space="preserve" width="512" height="512"><g><g><g><path style="fill: #f2eff2" d="M422.485,504.5H89.515c-5.523,0-10-4.477-10-10v-477c0-5.523,4.477-10,10-10h332.971&#10;&#9;&#9;&#9;&#9;c5.523,0,10,4.477,10,10v477C432.485,500.023,428.008,504.5,422.485,504.5z"/></g></g><g><g><path style="fill: #e1dde1" d="M432.49,17.5v477c0,5.52-4.48,10-10,10h-40.03c5.52,0,10-4.48,10-10v-477c0-5.52-4.48-10-10-10&#10;&#9;&#9;&#9;&#9;h40.03C428.01,7.5,432.49,11.98,432.49,17.5z"/></g></g><g><path style="
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
        " x1="248.276" y1="107.911" x2="265.97" y2="107.911"/></g></g></svg>`,dg=`<?xml version="1.0" encoding="UTF-8"?><svg version="1.1" id="svg3390" xml:space="preserve" width="682.66669" height="682.66669" viewBox="0 0 682.66669 682.66669" xmlns="http://www.w3.org/2000/svg"><defs id="defs3394"><clipPath clipPathUnits="userSpaceOnUse" id="clipPath3404"><path d="M 0,512 H 512 V 0 H 0 Z" id="path3402"/></clipPath></defs><g id="g3396" transform="matrix(1.3333333,0,0,-1.3333333,0,682.66667)"><g id="g3398"><g id="g3400" clip-path="url(#clipPath3404)"><g id="g3406" transform="translate(451.7344)"><path d="m 0,0 h -391.469 c -11.379,0 -20.603,9.225 -20.603,20.604 v 470.792 c 0,11.379 9.224,20.604 20.603,20.604 L 0,512 c 11.379,0 20.604,-9.225 20.604,-20.604 V 20.604 C 20.604,9.225 11.379,0 0,0" style="fill: #efe6e6; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3408"/></g><g id="g3410" transform="translate(472.3376,41.2072)"><path d="m 0,0 c -216.202,0 -391.468,175.266 -391.468,391.468 v 79.325 h -20.604 c -11.379,0 -20.604,-9.225 -20.604,-20.604 V -20.604 c 0,-11.379 9.225,-20.603 20.604,-20.603 H -20.603 C -9.224,-41.207 0,-31.983 0,-20.604 Z" style="fill: #e2d7d7; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3412"/></g><g id="g3414" transform="translate(235.3964,198.1382)"><path d="M 0,0 H 195.734 V 272.655 H 82.414 Z" style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3416"/></g><g id="g3418" transform="translate(235.3964,198.1382)"><path d="M 0,0 H 195.734 V 272.655 H 82.414 Z" style="fill: #5ad6ff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3420"/></g><g id="g3422" transform="translate(80.8692,198.1382)"><path d="m 0,0 h 113.32 l 82.414,272.655 H 0 Z" style="fill: #f4e74d; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3424"/></g><g id="g3426" transform="translate(80.8692,432.6757)"><path d="M 0,0 V -234.537 H 78.01 C 29.021,-169.169 0,-87.974 0,0" style="fill: #eedb00; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3428"/></g><path d="M 431.131,41.207 H 80.869 v 115.724 h 350.262 z" style="fill: #b18cd9; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3430"/><g id="g3432" transform="translate(194.475,156.931)"><path d="m 0,0 h -113.606 v -115.724 h 350.262 v 2.149 C 144.487,-103.933 61.838,-62.31 0,0" style="fill: #996acc; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3434"/></g><g id="g3436" transform="translate(213.2632,94.3332)"><path d="m 0,0 c 0,-10.991 -11.188,-19.901 -24.99,-19.901 -13.801,0 -24.989,8.91 -24.989,19.901 0,10.991 11.188,19.9 24.989,19.9 C -11.188,19.9 0,10.991 0,0" style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3438"/></g><g id="g3440" transform="translate(298.7368,94.3332)"><path d="m 0,0 c 0,-10.991 11.188,-19.901 24.99,-19.901 13.801,0 24.989,8.91 24.989,19.901 0,10.991 -11.188,19.9 -24.989,19.9 C 11.188,19.9 0,10.991 0,0" style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3442"/></g><g id="g3444" transform="translate(202.8374,123.7057)"><path d="M 0,0 V -10.216" style="
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
            " id="path3454"/></g><g id="g3456" transform="translate(150.0629,447.8862)"><path d="m 0,0 33.436,22.907 h -102.63 v -161.294 l 21.382,72.58 59.96,-46.151 -25.363,71.287 75.636,-2.093 z" style="fill: #fd5c6f; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3458"/></g><g id="g3460" transform="translate(80.8692,432.6757)"><path d="m 0,0 v -123.177 l 10.122,34.358 C 3.502,-60.282 0,-30.55 0,0" style="fill: #f6334c; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3462"/></g><g id="g3464" transform="translate(431.1308,271.141)"><path d="m 0,0 -57.698,-44.41 24.406,68.598 -72.782,-2.014 60.066,41.15 -60.066,41.151 72.782,-2.014 -24.406,68.597 L 0,126.649 Z" style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3466"/></g></g></g></g></svg>`,ug=`<?xml version="1.0" encoding="UTF-8"?><svg version="1.1" id="svg5007" xml:space="preserve" width="682.66669" height="682.66669" viewBox="0 0 682.66669 682.66669" xmlns="http://www.w3.org/2000/svg"><defs id="defs5011"><clipPath clipPathUnits="userSpaceOnUse" id="clipPath5021"><path d="M 0,512 H 512 V 0 H 0 Z" id="path5019"/></clipPath></defs><g id="g5013" transform="matrix(1.3333333,0,0,-1.3333333,0,682.66667)"><g id="g5015"><g id="g5017" clip-path="url(#clipPath5021)"><g id="g5023" transform="translate(446,7.5)"><path d="m 0,0 h -380 c -11.046,0 -20,8.954 -20,20 v 457 c 0,11.046 8.954,20 20,20 H 0 c 11.046,0 20,-8.954 20,-20 V 20 C 20,8.954 11.046,0 0,0" style="fill: #efe6e6; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5025"/></g><g id="g5027" transform="translate(465.9996,47.5)"><path d="m 0,0 c -209.868,0 -380,170.132 -380,380 v 77 h -20 c -11.045,0 -20,-8.954 -20,-20 V -20 c 0,-11.046 8.955,-20 20,-20 h 380 c 11.046,0 20,8.954 20,20 z" style="fill: #e2d7d7; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5029"/></g><g id="g5031" transform="translate(236,199.8333)"><path d="M 0,0 H 190 V 264.667 H 80 Z" style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5033"/></g><g id="g5035" transform="translate(236,199.8333)"><path d="M 0,0 H 190 V 264.667 H 80 Z" style="fill: #5ad6ff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5037"/></g><g id="g5039" transform="translate(86,199.8333)"><path d="m 0,0 h 110 l 80,264.667 H 0 Z" style="fill: #f4e74d; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5041"/></g><g id="g5043" transform="translate(86,427.4996)"><path d="M 0,0 V -227.666 H 75.725 C 28.171,-164.213 0,-85.397 0,0" style="fill: #eedb00; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5045"/></g><path d="M 426,47.5 H 86 v 112.333 h 340 z" style="fill: #b18cd9; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5047"/><g id="g5049" transform="translate(196.2775,159.8334)"><path d="m 0,0 h -110.278 v -112.333 h 340 v 2.085 C 140.254,-100.888 60.026,-60.484 0,0" style="fill: #996acc; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5051"/></g><g id="g5053" transform="translate(214.5152,99.0695)"><path d="m 0,0 c 0,-10.669 -10.861,-19.318 -24.258,-19.318 -13.397,0 -24.257,8.649 -24.257,19.318 0,10.669 10.86,19.317 24.257,19.317 C -10.861,19.317 0,10.669 0,0" style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5055"/></g><g id="g5057" transform="translate(297.4848,99.0695)"><path d="m 0,0 c 0,-10.669 10.861,-19.318 24.258,-19.318 13.397,0 24.257,8.649 24.257,19.318 0,10.669 -10.86,19.317 -24.257,19.317 C 10.861,19.317 0,10.669 0,0" style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5059"/></g><g id="g5061" transform="translate(204.3949,127.5815)"><path d="M 0,0 V -9.916" style="
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
            " id="path5107"/></g></g></g></g></svg>`,hg='<svg id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><g><g><path d="m427.508 512h-343.02c-5.69 0-10.302-4.612-10.302-10.302v-491.396c0-5.69 4.612-10.302 10.302-10.302h343.02c5.69 0 10.302 4.612 10.302 10.302v491.396c-.001 5.69-4.613 10.302-10.302 10.302z" fill="#f2eff2"/></g></g><path d="m427.512 0h-41.238c5.687 0 10.302 4.615 10.302 10.302v36.12l-18.016 49.462 18.016 36.952v51.701l-13.787 87.003 13.787 55.974v51.669l-18.016 52.406 18.016 34.008v36.1c0 5.687-4.615 10.302-10.302 10.302h41.238c5.687 0 10.302-4.615 10.302-10.302v-491.395c0-5.687-4.615-10.302-10.302-10.302z" fill="#e1dde1"/><path d="m396.6 46.36v86.52c0 2.85-2.31 5.15-5.15 5.15h-110.11l-22.53-48.41 22.53-48.41h110.11c2.84 0 5.15 2.3 5.15 5.15z" fill="#3ad1e0"/><path d="m396.599 46.358v86.525c0 2.843-2.308 5.151-5.151 5.151h-30.926c2.843 0 5.151-2.308 5.151-5.151v-86.525c0-2.843-2.308-5.151-5.151-5.151h30.926c2.844 0 5.151 2.308 5.151 5.151z" fill="#20bfd5"/><path d="m281.34 41.207h-39.904c-2.845 0-5.151 2.306-5.151 5.151v86.525c0 2.845 2.306 5.151 5.151 5.151h39.904z" fill="#23f1a8"/><path d="m304.73 470.79h-77.71l-39.22-20.29-39.23 20.29h-28.03c-2.84 0-5.15-2.3-5.15-5.15v-86.52c0-2.85 2.31-5.15 5.15-5.15h128.92c1.76 0 3.4.89 4.34 2.37l55.27 86.53c2.19 3.43-.27 7.92-4.34 7.92z" fill="#23f1a8"/><g><path d="m227.019 443.104v27.689h-78.446v-27.689c0-21.669 17.569-39.228 39.228-39.228 10.83 0 20.639 4.39 27.729 11.489 7.099 7.1 11.489 16.899 11.489 27.739z" fill="#ae6ad8"/><path d="m227.021 443.101v27.691h-29.061v-27.691c0-10.838-4.389-20.634-11.486-27.732-3.729-3.74-8.211-6.727-13.207-8.715 4.492-1.793 9.406-2.782 14.536-2.782 10.827 0 20.635 4.389 27.732 11.497 7.097 7.098 11.486 16.895 11.486 27.732z" fill="#975bbb"/></g><path d="m304.728 470.793h-30.926c4.069 0 6.531-4.492 4.347-7.922l-55.269-86.525c-.948-1.483-2.586-2.38-4.347-2.38h30.926c1.762 0 3.4.896 4.347 2.38l55.269 86.525c2.184 3.43-.278 7.922-4.347 7.922z" fill="#27e19d"/><path d="m391.448 373.966h-81.106c-4.068 0-6.531 4.495-4.341 7.924l55.269 86.525c.946 1.482 2.583 2.378 4.341 2.378h25.837c2.845 0 5.151-2.306 5.151-5.151v-86.525c0-2.845-2.306-5.151-5.151-5.151z" fill="#ae6ad8"/><path d="m396.599 379.117v86.525c0 2.843-2.308 5.151-5.151 5.151h-25.837c-.907 0-1.772-.237-2.534-.68 1.556-.886 2.596-2.555 2.596-4.471v-86.525c0-2.843-2.308-5.151-5.151-5.151h30.926c2.844 0 5.151 2.308 5.151 5.151z" fill="#975bbb"/><g><path d="m195.602 46.358v86.525c0 2.845-2.306 5.151-5.151 5.151h-69.91c-2.845 0-5.151-2.306-5.151-5.151v-86.525c0-2.845 2.306-5.151 5.151-5.151h69.91c2.845 0 5.151 2.306 5.151 5.151z" fill="#3ad1e0"/><path d="m195.6 46.358v86.525c0 2.843-2.308 5.151-5.151 5.151h-30.926c2.843 0 5.151-2.308 5.151-5.151v-86.525c0-2.843-2.308-5.151-5.151-5.151h30.926c2.844 0 5.151 2.308 5.151 5.151z" fill="#20bfd5"/></g><g><path d="m396.6 184.39v143.22c0 2.84-2.31 5.15-5.15 5.15h-30.93l-104.53-27.53-104.52 27.53h-30.93c-2.84 0-5.15-2.31-5.15-5.15v-143.22c0-2.84 2.31-5.15 5.15-5.15h47.77l87.68 16.15 87.69-16.15h47.77c2.84 0 5.15 2.31 5.15 5.15z" fill="#fb54b6"/></g><path d="m151.473 332.759c0-57.729 46.798-104.527 104.527-104.527s104.527 46.798 104.527 104.527z" fill="#fb9927"/><path d="m360.522 332.759h-35.397c0-51.694-37.519-94.612-86.824-103.028 5.748-.979 11.662-1.494 17.699-1.494 57.731 0 104.522 46.79 104.522 104.522z" fill="#f98824"/><g><path d="m396.599 184.392v143.216c0 2.843-2.308 5.151-5.151 5.151h-30.926c2.843 0 5.151-2.308 5.151-5.151v-143.216c0-2.843-2.308-5.151-5.151-5.151h30.926c2.844 0 5.151 2.308 5.151 5.151z" fill="#fb33a8"/></g><g><g><path d="m345.43 247.027c-.144 0-.299 0-.453-.01-24.024-1.226-43.947 17.946-43.947 41.722 0 .721.021 1.442.051 2.174.268 5.079-3.853 8.489-8.128 8.489-2.112 0-4.244-.814-5.913-2.678-8.293-9.189-19.676-13.794-31.039-13.794s-22.746 4.605-31.039 13.794c-1.669 1.865-3.801 2.678-5.913 2.678-4.275 0-8.396-3.41-8.128-8.489.031-.731.041-1.453.041-2.174 0-23.777-19.924-42.948-43.937-41.722-.155.01-.309.01-.464.01-7.263 0-10.879-9.076-5.357-14.062 9.189-8.293 13.794-19.666 13.794-31.039 0-7.912-2.225-15.813-6.686-22.685h175.378c-4.461 6.871-6.686 14.773-6.686 22.685 0 11.373 4.605 22.746 13.794 31.039 5.521 4.986 1.905 14.062-5.368 14.062z" fill="#fdef63"/><g><g id="XMLID_00000127012381744132405410000009872483291948348836_"><path d="m280.138 231.696c-4.268 0-7.726-3.459-7.726-7.726v-.107c0-4.267 3.459-7.726 7.726-7.726s7.726 3.459 7.726 7.726v.107c0 4.267-3.459 7.726-7.726 7.726z" fill="#554e55"/></g><g id="XMLID_00000080918978500845250090000017315552773041050031_"><path d="m256 231.696c-4.267 0-7.726-3.459-7.726-7.726v-.107c0-4.267 3.459-7.726 7.726-7.726 4.268 0 7.726 3.459 7.726 7.726v.107c0 4.267-3.458 7.726-7.726 7.726z" fill="#554e55"/></g><g id="XMLID_00000140711681861242238370000008769002181148908969_"><path d="m231.862 231.696c-4.267 0-7.726-3.459-7.726-7.726v-.107c0-4.267 3.459-7.726 7.726-7.726s7.726 3.459 7.726 7.726v.107c.001 4.267-3.459 7.726-7.726 7.726z" fill="#554e55"/></g></g><path d="m345.43 247.037c-.155 0-.299 0-.443-.021-24.034-1.226-43.948 17.956-43.948 41.722 0 .721.01 1.432.052 2.174.258 5.079-3.863 8.499-8.128 8.499-2.122 0-4.255-.824-5.924-2.689-6.954-7.685-16.05-12.167-25.507-13.423 29.968-14.804 50.582-45.678 50.582-81.364 0-7.84-.999-15.442-2.864-22.695h34.429c-4.45 6.871-6.676 14.783-6.676 22.685 0 11.373 4.605 22.757 13.784 31.05 5.532 4.966 1.926 14.062-5.357 14.062z" fill="#f3d730"/></g></g><g><g><g><circle cx="187.8" cy="385.284" fill="#d8b2ec" r="25.455"/></g></g></g><g><g id="XMLID_00000028301319025648580530000009457246182494066313_"><path d="m316.443 111.45c-4.258 0-7.714-3.445-7.726-7.705-.012-4.267 3.438-7.736 7.705-7.747l41.222-.114h.021c4.258 0 7.714 3.445 7.726 7.705.012 4.267-3.438 7.736-7.705 7.747l-41.222.114c-.007 0-.014 0-.021 0z" fill="#f2eff2"/></g><g><path d="m357.665 83.243h-21.761c-4.268 0-7.726-3.459-7.726-7.726s3.459-7.726 7.726-7.726h21.761c4.268 0 7.726 3.459 7.726 7.726s-3.458 7.726-7.726 7.726z" fill="#f2eff2"/></g></g></g></svg>',fg=`<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background: new 0 0 512 512" xml:space="preserve" width="512" height="512"><g><g><g><path style="fill: #f2eff2" d="M422.485,504.5H89.515c-5.523,0-10-4.477-10-10v-477c0-5.523,4.477-10,10-10h332.971&#10;&#9;&#9;&#9;&#9;c5.523,0,10,4.477,10,10v477C432.485,500.023,428.008,504.5,422.485,504.5z"/></g></g><g><g><path style="fill: #e1dde1" d="M432.49,17.5v477c0,5.52-4.48,10-10,10h-40.03c5.52,0,10-4.48,10-10v-477c0-5.52-4.48-10-10-10&#10;&#9;&#9;&#9;&#9;h40.03C428.01,7.5,432.49,11.98,432.49,17.5z"/></g></g><g><path style="
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
        " x1="333.566" y1="80.805" x2="354.689" y2="80.805"/></g></g></svg>`,pg='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-category" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4h6v6h-6z"/><path d="M14 4h6v6h-6z"/><path d="M4 14h6v6h-6z"/><path d="M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"/></svg>',gg='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-check" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l5 5l10 -10"/></svg>',mg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 6l-6 6l6 6"/></svg>',vg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 6l6 6l-6 6"/></svg>',bg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-circle-check"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"/><path d="M9 12l2 2l4 -4"/></svg>',wg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-circle-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"/><path d="M10 10l4 4m0 -4l-4 4"/></svg>',_g='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-floppy" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2"/><path d="M12 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M14 4l0 4l-6 0l0 -4"/></svg>',yg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-dots-vertical"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/><path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/><path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/></svg>',kg='<svg id="Capa_1" enable-background="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g><g><path d="m369.32 512h-226.64c-45.516 0-82.414-36.898-82.414-82.414v-347.172c0-45.516 36.898-82.414 82.414-82.414h226.64c45.516 0 82.414 36.898 82.414 82.414v347.171c0 45.517-36.898 82.415-82.414 82.415z" fill="#636978"/></g><g><path d="m225.095 450.189v-388.378c0-34.137 27.673-61.811 61.81-61.811h-144.225c-45.516 0-82.414 36.898-82.414 82.414v347.171c0 45.516 36.898 82.414 82.414 82.414h144.225c-34.137.001-61.81-27.673-61.81-61.81z" fill="#555a66"/></g><g><path d="m369.32 61.811h-226.64c-11.379 0-20.604 9.225-20.604 20.604v336.869c0 11.379 9.225 20.604 20.604 20.604h226.64c11.379 0 20.604-9.225 20.604-20.604v-336.87c0-11.379-9.225-20.603-20.604-20.603z" fill="#96e8ff"/></g><g><path d="m122.076 82.414v336.869c0 11.379 9.225 20.604 20.604 20.604h82.414v-378.076h-82.414c-11.379 0-20.604 9.224-20.604 20.603z" fill="#80dbff"/></g><g><path d="m256 111.277c-27.66-8.24-55.124-9.125-82.742-2.655-5.835 1.367-9.975 6.555-9.975 12.548v95.771c0 6.566 6.064 11.463 12.479 10.063 23.872-5.21 47.636-4.921 71.52.866 5.731 1.389 11.704 1.389 17.435 0 23.884-5.788 47.648-6.077 71.52-.866 6.415 1.4 12.479-3.497 12.479-10.063 0-40.343 0-55.429 0-95.771 0-5.993-4.139-11.181-9.975-12.548-27.617-6.471-55.081-5.585-82.741 2.655z" fill="#fff"/></g><g><path d="m173.258 108.622c-5.835 1.367-9.975 6.555-9.975 12.548v95.771c0 6.566 6.064 11.463 12.479 10.063 23.872-5.21 47.636-4.921 71.52.866 2.866.694 5.791 1.041 8.717 1.041v-117.634c-27.659-8.24-55.123-9.126-82.741-2.655z" fill="#f5fafc"/></g><g><path d="m205.037 104.432c-10.584.315-21.171 1.704-31.781 4.19-5.834 1.367-9.973 6.56-9.973 12.552v95.761c0 6.547 6.037 11.478 12.432 10.08 23.888-5.221 47.667-4.935 71.567.856 2.866.694 8.717 1.042 8.717 1.042 0-13.231-13.741-21.854-26.952-27.087-14.54-5.759-24.011-19.905-24.011-35.544v-61.85z" fill="#e1f1fa"/></g><g><g><path d="m338.414 289.266h-164.829c-4.142 0-7.5-3.357-7.5-7.5s3.358-7.5 7.5-7.5h164.829c4.143 0 7.5 3.357 7.5 7.5s-3.357 7.5-7.5 7.5z" fill="#19cffc"/></g><g><path d="m338.414 330.473h-164.829c-4.142 0-7.5-3.357-7.5-7.5s3.358-7.5 7.5-7.5h164.829c4.143 0 7.5 3.357 7.5 7.5s-3.357 7.5-7.5 7.5z" fill="#19cffc"/></g><g><g><path d="m191.667 385.134c-4.142 0-7.5-3.357-7.5-7.5v-12.362c0-4.143 3.358-7.5 7.5-7.5s7.5 3.357 7.5 7.5v12.362c0 4.142-3.358 7.5-7.5 7.5z" fill="#495560"/></g><g><path d="m320.333 385.134c-4.143 0-7.5-3.357-7.5-7.5v-12.362c0-4.143 3.357-7.5 7.5-7.5s7.5 3.357 7.5 7.5v12.362c0 4.142-3.357 7.5-7.5 7.5z" fill="#495560"/></g><g><path d="m256 392.493c-8.668 0-16.911-3.754-22.615-10.3-2.721-3.123-2.396-7.86.727-10.582 3.122-2.721 7.86-2.396 10.582.727 2.855 3.276 6.976 5.155 11.307 5.155s8.452-1.879 11.307-5.155c2.723-3.122 7.457-3.447 10.582-.727 3.122 2.722 3.448 7.459.727 10.582-5.706 6.546-13.949 10.3-22.617 10.3z" fill="#495560"/></g></g></g></g><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/></svg>',Eg=`<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background: new 0 0 512 512" xml:space="preserve"><g><path style="fill: #636978" d="M366,504.5H146c-44.183,0-80-35.817-80-80v-337c0-44.183,35.817-80,80-80h220&#10;&#9;&#9;c44.183,0,80,35.817,80,80v337C446,468.683,410.183,504.5,366,504.5z"/><path style="fill: #555a66" d="M226,444.5v-377c0-33.137,26.863-60,60-60H146c-44.183,0-80,35.817-80,80v337&#10;&#9;&#9;c0,44.183,35.817,80,80,80h140C252.863,504.5,226,477.637,226,444.5z"/><path style="fill: #96e8ff" d="M366,67.5H146c-11.046,0-20,8.954-20,20v327c0,11.046,8.954,20,20,20h220c11.046,0,20-8.954,20-20&#10;&#9;&#9;v-327C386,76.454,377.046,67.5,366,67.5z"/><path style="fill: #80dbff" d="M126,87.5v327c0,11.046,8.954,20,20,20h80v-367h-80C134.954,67.5,126,76.454,126,87.5z"/><path style="fill: #ffffff" d="M256,115.517c-26.85-7.998-53.509-8.858-80.318-2.577c-5.664,1.327-9.682,6.363-9.682,12.18&#10;&#9;&#9;c0,39.161,0,53.805,0,92.965c0,6.374,5.886,11.128,12.113,9.768c23.172-5.058,46.241-4.777,69.425,0.841&#10;&#9;&#9;c5.563,1.348,11.361,1.348,16.924,0c23.184-5.618,46.252-5.898,69.425-0.841c6.227,1.359,12.113-3.395,12.113-9.768&#10;&#9;&#9;c0-39.161,0-53.805,0-92.965c0-5.818-4.018-10.853-9.682-12.18C309.509,106.659,282.85,107.518,256,115.517z"/><path style="fill: #f5fafc" d="M175.682,112.94c-5.664,1.327-9.682,6.363-9.682,12.18c0,39.161,0,53.805,0,92.965&#10;&#9;&#9;c0,6.374,5.886,11.128,12.113,9.769c23.172-5.058,46.241-4.777,69.425,0.841c2.782,0.674,5.622,1.011,8.462,1.011V115.517&#10;&#9;&#9;C229.15,107.518,202.491,106.659,175.682,112.94z"/><path style="fill: #e1f1fa" d="M206.53,108.873c-10.274,0.306-20.551,1.654-30.85,4.067c-5.663,1.327-9.681,6.368-9.681,12.184&#10;&#9;&#9;c0,39.155,0,53.801,0,92.955c0,6.355,5.86,11.141,12.068,9.785c23.188-5.068,46.271-4.791,69.47,0.831&#10;&#9;&#9;c2.782,0.674,8.462,1.011,8.462,1.011c0-12.844-13.338-21.214-26.163-26.293c-14.114-5.59-23.307-19.322-23.307-34.502V108.873z"/><g><path style="
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
          " d="&#10;&#9;&#9;&#9;&#9;M239.536,373.713c4.003,4.594,9.892,7.501,16.464,7.501c6.572,0,12.461-2.907,16.464-7.501"/></g></g></g><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/></svg>`,Sg='<svg id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m449.945 61.818v388.363c0 34.144-27.684 61.818-61.818 61.818h-264.254c-34.134 0-61.818-27.674-61.818-61.818v-388.363c0-34.144 27.684-61.818 61.818-61.818h264.253c34.135 0 61.819 27.674 61.819 61.818z" fill="#808fa4"/><path d="m188.464 512h-64.59c-34.134 0-61.818-27.674-61.818-61.818v-388.364c-.001-34.144 27.683-61.818 61.817-61.818h50.341c-7.367 6.574-15.218 18.092-15.218 37.359v423.909c.001 0-.215 30.24 29.468 50.732z" fill="#64768e"/><path d="m418.912 61.942v147.509l-194.274 13.033 77.912-191.451h85.453c17.072 0 30.909 13.837 30.909 30.909z" fill="#c5ced6"/><path d="m271.516 31.033-46.878 191.451-65.641-6.501-65.909-6.532 20.843-140.421 45.365-37.997z" fill="#abb6c4"/><path d="m159.296 31.033c-.196 2.009-.299 4.121-.299 6.326v178.624l-65.909-6.532v-147.509c0-17.072 13.837-30.909 30.909-30.909z" fill="#9ca9ba"/><path d="m313.676 222.484-18.885 196.428h-135.794l-51.732-35.968-14.177-142.46 65.909-5.379z" fill="#c5ced6"/><path d="m93.088 240.484 65.909-5.378v183.807h-35c-17.072 0-30.909-13.837-30.909-30.909z" fill="#abb6c4"/><path d="m418.912 240.484v147.519c0 17.072-13.837 30.909-30.909 30.909h-62.19l-12.137-196.428z" fill="#64768e"/><path d="m287.487 480.971h-62.974c-8.317 0-15.059-6.742-15.059-15.059v-.913c0-8.317 6.742-15.059 15.059-15.059h62.974c8.317 0 15.059 6.742 15.059 15.059v.913c0 8.316-6.743 15.059-15.059 15.059z" fill="#64768e"/><path d="m418.912 209.451v31.033h-77.644c-8.531 0-15.455 6.924-15.455 15.455v162.974h-31.022v-162.975c0-8.531-6.923-15.455-15.455-15.455h-120.34l-13.147-13.27 13.147-17.763h44.138c6.718 0 12.673-4.348 14.723-10.746l53.658-167.672h31.033l-50.65 158.255c-3.183 9.974 4.255 20.163 14.723 20.163h152.291z" fill="#e8ecf9"/><path d="m93.088 209.451h65.909v31.033h-65.909z" fill="#d7ddf5"/><g><g><path d="m129.509 332.474c-4.268 0-7.727-3.459-7.727-7.727v-12.364c0-4.268 3.459-7.727 7.727-7.727s7.727 3.459 7.727 7.727v12.364c0 4.268-3.459 7.727-7.727 7.727z" fill="#495560"/></g><g><path d="m258.191 332.474c-4.268 0-7.727-3.459-7.727-7.727v-12.364c0-4.268 3.459-7.727 7.727-7.727s7.727 3.459 7.727 7.727v12.364c.001 4.268-3.458 7.727-7.727 7.727z" fill="#495560"/></g><path d="m223.825 324.391c-4.268 0-7.727 3.459-7.727 7.727 0 3.952-3.215 7.167-7.166 7.167-3.952 0-7.167-3.215-7.167-7.167 0-4.268-3.459-7.727-7.727-7.727s-7.727 3.459-7.727 7.727c0 3.952-3.215 7.167-7.166 7.167-3.952 0-7.167-3.215-7.167-7.167 0-4.268-3.459-7.727-7.727-7.727s-7.727 3.459-7.727 7.727c0 12.473 10.148 22.621 22.621 22.621 5.7 0 10.911-2.124 14.894-5.616 3.982 3.492 9.193 5.616 14.894 5.616 12.473 0 22.62-10.148 22.62-22.621-.001-4.268-3.46-7.727-7.728-7.727z" fill="#495560"/></g></g></svg>',Ag=`<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 511.941 511.941" style="enable-background: new 0 0 511.941 511.941" xml:space="preserve" width="512" height="512"><g><g><path style="fill: #808fa4" d="M444.211,67.5v376.94c0,33.14-26.87,60-60,60H127.73c-33.13,0-60-26.86-60-60V67.5&#10;&#9;&#9;&#9;c0-33.14,26.87-60,60-60h256.48C417.341,7.5,444.211,34.361,444.211,67.5z"/><path style="fill: #64768e" d="M190.421,504.44h-62.69c-33.13,0-60-26.86-60-60V67.5c0-33.14,26.87-60,60-60h48.86&#10;&#9;&#9;&#9;c-7.15,6.38-14.77,17.56-14.77,36.26v411.44C161.821,455.201,161.611,484.551,190.421,504.44z"/><path style="fill: #c5ced6" d="M414.091,67.62v143.17l-188.56,12.65l75.62-185.82h82.94&#10;&#9;&#9;&#9;C400.661,37.62,414.091,51.051,414.091,67.62z"/><polygon style="fill: #abb6c4" points="271.031,37.62 225.531,223.44 161.821,217.131 97.85,210.79 118.08,74.5 162.111,37.62 &#9;&#9;&#10;&#9;&#9;&#9;"/><path style="fill: #9ca9ba" d="M162.111,37.62c-0.19,1.95-0.29,4-0.29,6.14v173.37l-63.97-6.34V67.62c0-16.57,13.43-30,30-30&#10;&#9;&#9;&#9;H162.111z"/><polygon style="fill: #c5ced6" points="311.951,223.44 293.62,414.091 161.821,414.091 111.611,379.181 97.85,240.911 &#10;&#9;&#9;&#9;161.821,235.69 &#9;&#9;"/><path style="fill: #abb6c4" d="M97.85,240.911l63.97-5.22v178.4h-33.97c-16.57,0-30-13.43-30-30V240.911z"/><path style="fill: #64768e" d="M414.091,240.911v143.18c0,16.57-13.43,30-30,30h-60.36l-11.78-190.65L414.091,240.911z"/><path style="fill: #64768e" d="M286.088,474.324h-60.235c-8.317,0-15.059-6.742-15.059-15.059v0&#10;&#9;&#9;&#9;c0-8.317,6.742-15.059,15.059-15.059h60.235c8.317,0,15.059,6.742,15.059,15.059v0&#10;&#9;&#9;&#9;C301.147,467.581,294.405,474.324,286.088,474.324z"/><path style="fill: #e8ecf9" d="M414.091,210.79v30.12h-75.36c-8.28,0-15,6.72-15,15v158.18h-30.11v-158.18c0-8.28-6.72-15-15-15&#10;&#9;&#9;&#9;h-116.8l-12.76-12.88l12.76-17.24h42.84c6.52,0,12.3-4.22,14.29-10.43l52.08-162.74h30.12l-49.16,153.6&#10;&#9;&#9;&#9;c-3.09,9.68,4.13,19.57,14.29,19.57H414.091z"/><rect x="97.85" y="210.79" style="fill: #d7ddf5" width="63.97" height="30.12"/></g><g><path style="
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
            " d="M224.742,329.85&#10;&#9;&#9;&#9;&#9;&#9;c0,7.984-6.472,14.456-14.456,14.456s-14.456-6.472-14.456-14.456"/></g></g></g></g></svg>`,Mg='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-external-link" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"/><path d="M11 13l9 -9"/><path d="M15 4h5v5"/></svg>',xg='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"/><path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6"/></svg>',Ig='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye-off" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10.585 10.587a2 2 0 0 0 2.829 2.828"/><path d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87"/><path d="M3 3l18 18"/></svg>',Cg='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file-download" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 3v4a1 1 0 0 0 1 1h4"/><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"/><path d="M12 17v-6"/><path d="M9.5 14.5l2.5 2.5l2.5 -2.5"/></svg>',Og='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-file-percent"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 17l4 -4"/><path d="M14 3v4a1 1 0 0 0 1 1h4"/><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"/><path d="M10 13h.01"/><path d="M14 17h.01"/></svg>',Tg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-folder-open"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 19l2.757 -7.351a1 1 0 0 1 .936 -.649h12.307a1 1 0 0 1 .986 1.164l-.996 5.211a2 2 0 0 1 -1.964 1.625h-14.026a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2h4l3 3h7a2 2 0 0 1 2 2v2" /></svg>',Lg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-hand-click"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 13v-8.5a1.5 1.5 0 0 1 3 0v7.5"/><path d="M11 11.5v-2a1.5 1.5 0 0 1 3 0v2.5"/><path d="M14 10.5a1.5 1.5 0 0 1 3 0v1.5"/><path d="M17 11.5a1.5 1.5 0 0 1 3 0v4.5a6 6 0 0 1 -6 6h-2h.208a6 6 0 0 1 -5.012 -2.7l-.196 -.3c-.312 -.479 -1.407 -2.388 -3.286 -5.728a1.5 1.5 0 0 1 .536 -2.022a1.867 1.867 0 0 1 2.28 .28l1.47 1.47"/><path d="M5 3l-1 -1"/><path d="M4 7h-1"/><path d="M14 3l1 -1"/><path d="M15 6h1"/></svg>',Rg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-help"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"/><path d="M12 17l0 .01"/><path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4"/></svg>',Pg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-info-circle"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg>',$g='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-keyboard" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M2 6m0 2a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-16a2 2 0 0 1 -2 -2z"/><path d="M6 10l0 .01"/><path d="M10 10l0 .01"/><path d="M14 10l0 .01"/><path d="M18 10l0 .01"/><path d="M6 14l0 .01"/><path d="M18 14l0 .01"/><path d="M10 14l4 .01"/></svg>',Dg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-layout-bottombar"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"/><path d="M4 15l16 0"/></svg>',zg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-layout-bottombar-inactive"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"/><path d="M4 15h1"/><path d="M19 15h1"/><path d="M9 15h1"/><path d="M14 15h1"/></svg>',Bg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-layout-dashboard"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 4h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1" /><path d="M5 16h4a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1" /><path d="M15 12h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1" /><path d="M15 4h4a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1" /></svg>',Ng='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-layout-sidebar"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"/><path d="M9 4l0 16"/></svg>',Hg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-layout-sidebar-inactive"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"/><path d="M9 4v1"/><path d="M9 9v1"/><path d="M9 14v1"/><path d="M9 19v1"/></svg>',Fg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-layout-sidebar-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"/><path d="M15 4l0 16"/></svg>',Gg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-layout-sidebar-right-inactive"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"/><path d="M15 4v1"/><path d="M15 9v1"/><path d="M15 14v1"/><path d="M15 19v1"/></svg>',Wg='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-list-numbers" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M11 6h9"/><path d="M11 12h9"/><path d="M12 18h8"/><path d="M4 16a2 2 0 1 1 4 0c0 .591 -.5 1 -1 1.5l-3 2.5h4"/><path d="M6 10v-6l-2 2"/></svg>',Ug='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-loader-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 3a9 9 0 1 0 9 9"/></svg>',Vg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-location-cog"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 18l-2 -4l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5l-3.14 8.697"/><path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M19.001 15.5v1.5"/><path d="M19.001 21v1.5"/><path d="M22.032 17.25l-1.299 .75"/><path d="M17.27 20l-1.3 .75"/><path d="M15.97 17.25l1.3 .75"/><path d="M20.733 20l1.3 .75"/></svg>',Zg='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6l16 0"/><path d="M4 12l16 0"/><path d="M4 18l16 0"/></svg>',jg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-menu-deep"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6h16"/><path d="M7 12h13"/><path d="M10 18h10"/></svg>',qg='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-message" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 9h8"/><path d="M8 13h6"/><path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z"/></svg>',Kg='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-moon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"/></svg>',Yg='<svg id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m449.945 61.818v388.363c0 34.144-27.684 61.818-61.818 61.818h-264.253c-34.134 0-61.818-27.674-61.818-61.818v-388.363c-.001-34.144 27.684-61.818 61.818-61.818h264.253c34.133 0 61.818 27.674 61.818 61.818z" fill="#e8ecf9"/><path d="m207.555 512h-83.681c-34.134 0-61.818-27.674-61.818-61.818v-388.364c-.001-34.144 27.684-61.818 61.818-61.818h79.993c-11.292 3.421-26.809 12.446-26.809 36.256v436.87c0 26.479 19.854 35.783 30.497 38.874z" fill="#d7ddf5"/><path d="m403.396 62.004v139.751c0 8.541-6.924 15.455-15.455 15.455h-210.883l-51.556-21.729v-124.699l51.556-24.233h210.883c8.531 0 15.455 6.913 15.455 15.455z" fill="#c5ced6"/><path d="m177.058 46.549v170.66h-52.999c-8.531 0-15.455-6.913-15.455-15.455v-139.75c0-8.541 6.924-15.455 15.455-15.455z" fill="#abb6c4"/><path d="m217.209 279.213v8.036l-40.151 41.769-8.809 9.17-59.644 4.307 12.333-53.195 56.121-25.541h24.696c8.541-.001 15.454 6.923 15.454 15.454z" fill="#c5ced6"/><path d="m124.059 263.758h52.999v65.26l-8.809 9.17-59.644 4.307v-63.281c-.001-8.532 6.923-15.456 15.454-15.456z" fill="#abb6c4"/><path d="m217.209 334.365v60.407l-40.151 43.438-4.204 4.543-64.25-8.634 8.573-21.379-8.573-26.551 50.743-51.824z" fill="#c5ced6"/><path d="m177.058 334.365v103.845l-4.204 4.543-64.25-8.634v-47.93l50.743-51.824z" fill="#abb6c4"/><path d="m217.209 287.249v47.116c-2.823 1.731-5.121 4.368-6.388 7.696-2.359 6.182-8.253 9.984-14.496 9.984-1.844 0-3.719-.33-5.543-1.03-.546-.206-1.092-.381-1.638-.525-1.298-.34-2.596-.505-3.895-.505-2.916 0-5.749.824-8.191 2.339l-11.045-14.888 11.045-32.29c1.03.165 2.061.433 3.07.824.587.227 1.175.412 1.772.556 1.247.319 2.514.474 3.771.474 6.244 0 12.137-3.802 14.496-9.984.082-.206.165-.412.258-.608 2.493-5.821 8.191-9.376 14.239-9.376.845.001 1.69.073 2.545.217z" fill="#808fa4"/><path d="m177.058 305.146v47.178c-2.782 1.731-5.049 4.348-6.305 7.645-.196.505-.402.989-.649 1.453-2.669 5.316-8.108 8.521-13.847 8.521-.309 0-.618-.01-.927-.031-1.535-.093-3.091-.412-4.605-.999-1.824-.701-3.699-1.03-5.543-1.03-6.244 0-12.137 3.802-14.496 9.984s-8.242 9.984-14.496 9.984c-1.834 0-3.709-.33-5.533-1.03-.68-.258-1.36-.474-2.05-.628v-43.695c5.038-1.02 9.458-4.523 11.426-9.674 2.359-6.182 8.253-9.984 14.496-9.984 1.844 0 3.709.33 5.533 1.03 1.824.701 3.709 1.03 5.553 1.03 1.113 0 2.226-.124 3.297-.361 2.895-.629 5.574-2.081 7.686-4.193 1.494-1.494 2.699-3.318 3.503-5.419 2.359-6.182 8.242-9.984 14.496-9.984.813-.003 1.637.058 2.461.203z" fill="#64768e"/><path d="m217.209 394.772v55.224c0 8.541-6.913 15.455-15.455 15.455h-24.696l-15.516-24.284 15.516-28.426c1.885-1.618 3.4-3.719 4.348-6.202 2.359-6.172 8.253-9.973 14.496-9.973 1.844 0 3.719.33 5.543 1.03 1.824.701 3.689 1.03 5.533 1.03 1.175 0 2.349-.134 3.472-.402h.01c2.494-.578 4.822-1.762 6.749-3.452z" fill="#808fa4"/><path d="m166.91 416.522c3.74 0 7.346-1.36 10.148-3.781v52.71h-52.999c-8.531 0-15.455-6.913-15.455-15.455v-15.877c3.802-1.968 8.397-2.37 12.704-.721 1.824.701 3.699 1.03 5.543 1.03 6.244 0 12.137-3.802 14.496-9.984s8.242-9.984 14.496-9.984c1.834 0 3.709.33 5.533 1.03 1.824.702 3.7 1.032 5.534 1.032z" fill="#64768e"/><path d="m403.396 351.612v98.384c0 8.541-6.924 15.455-15.455 15.455h-69.051l-55.132-93.686v-92.552c0-8.531 6.924-15.455 15.455-15.455h62.91z" fill="#808fa4"/><path d="m380.121 333.572-61.231 131.879h-39.677c-8.531 0-15.455-6.913-15.455-15.455v-78.231l77.572-53.699z" fill="#abb6c4"/><path d="m403.396 279.213v72.4c-7.058 3.359-14.95 5.234-23.275 5.234-3.534 0-6.996-.34-10.344-.989-17.34-3.338-31.744-14.929-38.956-30.518-3.215-6.924-5.007-14.651-5.007-22.79 0-15.197 6.244-28.941 16.31-38.791h45.818c8.53-.001 15.454 6.923 15.454 15.454z" fill="#c5ced6"/><g><g><ellipse cx="172.744" cy="147.233" fill="#fff" rx="30.72" ry="24.464"/><ellipse cx="339.256" cy="147.233" fill="#fff" rx="30.72" ry="24.464"/><path d="m285.787 117.781c-4.268 0-7.727 3.46-7.727 7.727 0 3.952-3.215 7.166-7.166 7.166s-7.166-3.215-7.166-7.166c0-4.268-3.46-7.727-7.727-7.727-4.268 0-7.727 3.46-7.727 7.727 0 3.952-3.215 7.166-7.166 7.166-3.952 0-7.166-3.215-7.166-7.166 0-4.268-3.46-7.727-7.727-7.727-4.268 0-7.727 3.46-7.727 7.727 0 12.473 10.148 22.621 22.621 22.621 5.701 0 10.911-2.124 14.894-5.616 3.982 3.492 9.193 5.616 14.894 5.616 12.473 0 22.621-10.148 22.621-22.621-.003-4.267-3.463-7.727-7.731-7.727z" fill="#495560"/></g><g><path d="m206.795 121.062c-4.268 0-7.727-3.46-7.727-7.727 0-3.559-2.896-6.454-6.455-6.454s-6.455 2.895-6.455 6.454c0 4.268-3.46 7.727-7.727 7.727-4.268 0-7.727-3.46-7.727-7.727 0-12.081 9.829-21.909 21.91-21.909s21.91 9.828 21.91 21.909c-.001 4.267-3.461 7.727-7.729 7.727z" fill="#495560"/></g><g><path d="m333.569 121.062c-4.268 0-7.727-3.46-7.727-7.727 0-3.559-2.896-6.454-6.455-6.454s-6.455 2.895-6.455 6.454c0 4.268-3.46 7.727-7.727 7.727-4.268 0-7.727-3.46-7.727-7.727 0-12.081 9.829-21.909 21.91-21.909s21.91 9.828 21.91 21.909c-.001 4.267-3.461 7.727-7.729 7.727z" fill="#495560"/></g></g></g></svg>',Xg=`<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 511.94 511.94" style="enable-background: new 0 0 511.94 511.94" xml:space="preserve" width="512" height="512"><g><g><path style="fill: #e8ecf9" d="M444.21,67.5v376.94c0,33.14-26.87,60-60,60H127.73c-33.13,0-60-26.86-60-60V67.5&#10;&#9;&#9;&#9;c0-33.14,26.87-60,60-60h256.48C417.34,7.5,444.21,34.36,444.21,67.5z"/><path style="fill: #d7ddf5" d="M208.95,504.44h-81.22c-33.13,0-60-26.86-60-60V67.5c0-33.14,26.87-60,60-60h77.64&#10;&#9;&#9;&#9;c-10.96,3.32-26.02,12.08-26.02,35.19v424.02C179.35,492.41,198.62,501.44,208.95,504.44z"/><path style="fill: #c5ced6" d="M399.03,67.68v135.64c0,8.29-6.72,15-15,15H179.35l-50.04-21.09V76.2l50.04-23.52h204.68&#10;&#9;&#9;&#9;C392.31,52.68,399.03,59.39,399.03,67.68z"/><path style="fill: #abb6c4" d="M179.35,52.68v165.64h-51.44c-8.28,0-15-6.71-15-15V67.68c0-8.29,6.72-15,15-15H179.35z"/><path style="fill: #c5ced6" d="M218.32,278.5v7.8l-38.97,40.54l-8.55,8.9l-57.89,4.18l11.97-51.63l54.47-24.79h23.97&#10;&#9;&#9;&#9;C211.61,263.5,218.32,270.22,218.32,278.5z"/><path style="fill: #abb6c4" d="M127.91,263.5h51.44v63.34l-8.55,8.9l-57.89,4.18V278.5C112.91,270.22,119.63,263.5,127.91,263.5z"/><polygon style="fill: #c5ced6" points="218.32,332.03 218.32,390.66 179.35,432.82 175.27,437.23 112.91,428.85 121.23,408.1 &#10;&#9;&#9;&#9;112.91,382.33 162.16,332.03 &#9;&#9;"/><polygon style="fill: #abb6c4" points="179.35,332.03 179.35,432.82 175.27,437.23 112.91,428.85 112.91,382.33 162.16,332.03 &#9;&#9;&#10;&#9;&#9;&#9;"/><path style="fill: #808fa4" d="M218.32,286.3v45.73c-2.74,1.68-4.97,4.24-6.2,7.47c-2.29,6-8.01,9.69-14.07,9.69&#10;&#9;&#9;&#9;c-1.79,0-3.61-0.32-5.38-1c-0.53-0.2-1.06-0.37-1.59-0.51c-1.26-0.33-2.52-0.49-3.78-0.49c-2.83,0-5.58,0.8-7.95,2.27&#10;&#9;&#9;&#9;l-10.72-14.45l10.72-31.34c1,0.16,2,0.42,2.98,0.8c0.57,0.22,1.14,0.4,1.72,0.54c1.21,0.31,2.44,0.46,3.66,0.46&#10;&#9;&#9;&#9;c6.06,0,11.78-3.69,14.07-9.69c0.08-0.2,0.16-0.4,0.25-0.59c2.42-5.65,7.95-9.1,13.82-9.1&#10;&#9;&#9;&#9;C216.67,286.09,217.49,286.16,218.32,286.3z"/><path style="fill: #64768e" d="M179.35,303.67v45.79c-2.7,1.68-4.9,4.22-6.12,7.42c-0.19,0.49-0.39,0.96-0.63,1.41&#10;&#9;&#9;&#9;c-2.59,5.16-7.87,8.27-13.44,8.27c-0.3,0-0.6-0.01-0.9-0.03c-1.49-0.09-3-0.4-4.47-0.97c-1.77-0.68-3.59-1-5.38-1&#10;&#9;&#9;&#9;c-6.06,0-11.78,3.69-14.07,9.69s-8,9.69-14.07,9.69c-1.78,0-3.6-0.32-5.37-1c-0.66-0.25-1.32-0.46-1.99-0.61v-42.41&#10;&#9;&#9;&#9;c4.89-0.99,9.18-4.39,11.09-9.39c2.29-6,8.01-9.69,14.07-9.69c1.79,0,3.6,0.32,5.37,1c1.77,0.68,3.6,1,5.39,1&#10;&#9;&#9;&#9;c1.08,0,2.16-0.12,3.2-0.35c2.81-0.61,5.41-2.02,7.46-4.07c1.45-1.45,2.62-3.22,3.4-5.26c2.29-6,8-9.69,14.07-9.69&#10;&#9;&#9;&#9;C177.75,303.47,178.55,303.53,179.35,303.67z"/><path style="fill: #808fa4" d="M218.32,390.66v53.6c0,8.29-6.71,15-15,15h-23.97l-15.06-23.57l15.06-27.59&#10;&#9;&#9;&#9;c1.83-1.57,3.3-3.61,4.22-6.02c2.29-5.99,8.01-9.68,14.07-9.68c1.79,0,3.61,0.32,5.38,1c1.77,0.68,3.58,1,5.37,1&#10;&#9;&#9;&#9;c1.14,0,2.28-0.13,3.37-0.39h0.01C214.19,393.45,216.45,392.3,218.32,390.66z"/><path style="fill: #64768e" d="M169.5,411.77c3.63,0,7.13-1.32,9.85-3.67v51.16h-51.44c-8.28,0-15-6.71-15-15v-15.41&#10;&#9;&#9;&#9;c3.69-1.91,8.15-2.3,12.33-0.7c1.77,0.68,3.59,1,5.38,1c6.06,0,11.78-3.69,14.07-9.69c2.29-6,8-9.69,14.07-9.69&#10;&#9;&#9;&#9;c1.78,0,3.6,0.32,5.37,1C165.9,411.45,167.72,411.77,169.5,411.77z"/><path style="fill: #808fa4" d="M399.03,348.77v95.49c0,8.29-6.72,15-15,15h-67.02l-53.51-90.93V278.5c0-8.28,6.72-15,15-15h61.06&#10;&#9;&#9;&#9;L399.03,348.77z"/><path style="fill: #abb6c4" d="M376.44,331.26l-59.43,128H278.5c-8.28,0-15-6.71-15-15v-75.93l75.29-52.12L376.44,331.26z"/><path style="fill: #c5ced6" d="M399.03,278.5v70.27c-6.85,3.26-14.51,5.08-22.59,5.08c-3.43,0-6.79-0.33-10.04-0.96&#10;&#9;&#9;&#9;c-16.83-3.24-30.81-14.49-37.81-29.62c-3.12-6.72-4.86-14.22-4.86-22.12c0-14.75,6.06-28.09,15.83-37.65h44.47&#10;&#9;&#9;&#9;C392.31,263.5,399.03,270.22,399.03,278.5z"/><g><g><ellipse style="fill: #ffffff" cx="175.162" cy="150.402" rx="29.816" ry="23.744"/><ellipse style="fill: #ffffff" cx="336.778" cy="150.402" rx="29.816" ry="23.744"/></g></g></g><g><path style="
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
          " d="&#10;&#9;&#9;&#9;&#9;M303.727,117.501c0-7.602,6.163-13.765,13.765-13.765c7.602,0,13.765,6.163,13.765,13.765"/></g></g></g></svg>`,Jg='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-palette" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 21a9 9 0 0 1 0 -18c4.97 0 9 3.582 9 8c0 1.06 -.474 2.078 -1.318 2.828c-.844 .75 -1.989 1.172 -3.182 1.172h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25"/><path d="M8.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/><path d="M12.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/><path d="M16.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/></svg>',Qg='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-pencil" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4"/><path d="M13.5 6.5l4 4"/></svg>',em='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-pencil-cog"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4"/><path d="M13.5 6.5l4 4"/><path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M19.001 15.5v1.5"/><path d="M19.001 21v1.5"/><path d="M22.032 17.25l-1.299 .75"/><path d="M17.27 20l-1.3 .75"/><path d="M15.97 17.25l1.3 .75"/><path d="M20.733 20l1.3 .75"/></svg>',tm='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-photo" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 8h.01"/><path d="M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z"/><path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5"/><path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3"/></svg>',nm='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-photo-off" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 8h.01"/><path d="M7 3h11a3 3 0 0 1 3 3v11m-.856 3.099a2.991 2.991 0 0 1 -2.144 .901h-12a3 3 0 0 1 -3 -3v-12c0 -.845 .349 -1.608 .91 -2.153"/><path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5"/><path d="M16.33 12.338c.574 -.054 1.155 .166 1.67 .662l3 3"/><path d="M3 3l18 18" color="orange"/></svg>',rm='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-pin"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 4.5l-4 4l-4 1.5l-1.5 1.5l7 7l1.5 -1.5l1.5 -4l4 -4"/><path d="M9 15l-4.5 4.5"/><path d="M14.5 4l5.5 5.5"/></svg>',om='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-player-pause" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z"/><path d="M14 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z"/></svg>',im='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-player-play" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 4v16l13 -8z"/></svg>',am='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-refresh" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4"/><path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4"/></svg>',sm='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-settings" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"/><path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"/></svg>',lm='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-settings-off"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9.451 5.437c.418 -.218 .75 -.609 .874 -1.12c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35c-.486 .118 -.894 .44 -1.123 .878m-.188 3.803c-.517 .523 -1.349 .734 -2.125 .262a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.472 -.774 -.262 -1.604 .259 -2.121"/><path d="M9.889 9.869a3 3 0 1 0 4.226 4.26m.592 -3.424a3.012 3.012 0 0 0 -1.419 -1.415"/><path d="M3 3l18 18"/></svg>',cm='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-spacing-horizontal"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 20h-2a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h2"/><path d="M4 20h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2"/><path d="M12 8v8"/></svg>',dm='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-spacing-vertical" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 20v-2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v2"/><path d="M4 4v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"/><path d="M16 12h-8"/></svg>',um='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-sun" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"/><path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"/></svg>',hm='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 7l16 0"/><path d="M10 11l0 6"/><path d="M14 11l0 6"/><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"/><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"/></svg>',fm='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-world-cog"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M21 12a9 9 0 1 0 -8.979 9"/><path d="M3.6 9h16.8"/><path d="M3.6 15h8.9"/><path d="M11.5 3a17 17 0 0 0 0 18"/><path d="M12.5 3a16.992 16.992 0 0 1 2.522 10.376"/><path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M19.001 15.5v1.5"/><path d="M19.001 21v1.5"/><path d="M22.032 17.25l-1.299 .75"/><path d="M17.27 20l-1.3 .75"/><path d="M15.97 17.25l1.3 .75"/><path d="M20.733 20l1.3 .75"/></svg>',pm='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12"/><path d="M6 6l12 12"/></svg>',gm='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-zoom"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"/><path d="M21 21l-6 -6"/></svg>',mm='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-cancel" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"/><path d="M8 8l4 4"/><path d="M12 8l-4 4"/><path d="M21 21l-6 -6"/></svg>',vm='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-in" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"/><path d="M7 10l6 0"/><path d="M10 7l0 6"/><path d="M21 21l-6 -6"/></svg>',bm='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-in-area" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 13v4"/><path d="M13 15h4"/><path d="M15 15m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0"/><path d="M22 22l-3 -3"/><path d="M6 18h-1a2 2 0 0 1 -2 -2v-1"/><path d="M3 11v-1"/><path d="M3 6v-1a2 2 0 0 1 2 -2h1"/><path d="M10 3h1"/><path d="M15 3h1a2 2 0 0 1 2 2v1"/></svg>',wm='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-out" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"/><path d="M7 10l6 0"/><path d="M21 21l-6 -6"/></svg>',_m='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-out-area" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M13 15h4"/><path d="M15 15m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0"/><path d="M22 22l-3 -3"/><path d="M6 18h-1a2 2 0 0 1 -2 -2v-1"/><path d="M3 11v-1"/><path d="M3 6v-1a2 2 0 0 1 2 -2h1"/><path d="M10 3h1"/><path d="M15 3h1a2 2 0 0 1 2 2v1"/></svg>',ym='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-pan" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"/><path d="M17 17l-2.5 -2.5"/><path d="M10 5l2 -2l2 2"/><path d="M19 10l2 2l-2 2"/><path d="M5 10l-2 2l2 2"/><path d="M10 19l2 2l2 -2"/></svg>',km=Yc({IconAdjustmentsHorizontal:()=>zp,IconAlertCircle:()=>Bp,IconApiBook:()=>Np,IconArrowAutofitDown:()=>Hp,IconArrowAutofitHeight:()=>Fp,IconArrowAutofitLeft:()=>Gp,IconArrowAutofitRight:()=>Wp,IconArrowAutofitWidth:()=>Up,IconArrowBigLeft:()=>Vp,IconArrowBigRight:()=>Zp,IconArrowsHorizontal:()=>jp,IconArrowsLeftRight:()=>qp,IconArrowsMove:()=>Kp,IconArrowsMoveVertical:()=>Yp,IconArrowsVertical:()=>Xp,IconBook:()=>Jp,IconBookArrowLeft:()=>Qp,IconBookArrowRight:()=>eg,IconBookOff:()=>tg,IconBookUpload:()=>ng,IconBookmark:()=>rg,IconBookmarkOff:()=>og,IconBookmarks:()=>ig,IconBooksReturn:()=>ag,IconBoxAlignTop:()=>sg,IconCategory:()=>pg,IconCheck:()=>gg,IconChevronLeft:()=>mg,IconChevronRight:()=>vg,IconCircleCheck:()=>bg,IconCircleX:()=>wg,IconComic1:()=>cg,IconComic1Flat:()=>lg,IconComic2:()=>ug,IconComic2Flat:()=>dg,IconComic3:()=>fg,IconComic3Flat:()=>hg,IconDeviceFloppy:()=>_g,IconDotsVertical:()=>yg,IconEReader1:()=>Eg,IconEReader1Flat:()=>kg,IconEReader2:()=>Ag,IconEReader2Flat:()=>Sg,IconExternalLink:()=>Mg,IconEye:()=>xg,IconEyeOff:()=>Ig,IconFileDownload:()=>Cg,IconFilePercent:()=>Og,IconFolderOpen:()=>Tg,IconHandClick:()=>Lg,IconHelp:()=>Rg,IconInfoCircle:()=>Pg,IconKeyboard:()=>$g,IconLayoutBottombar:()=>Dg,IconLayoutBottombarInactive:()=>zg,IconLayoutDashboard:()=>Bg,IconLayoutSidebar:()=>Ng,IconLayoutSidebarInactive:()=>Hg,IconLayoutSidebarRight:()=>Fg,IconLayoutSidebarRightInactive:()=>Gg,IconListNumbers:()=>Wg,IconLoader2:()=>Ug,IconLocationCog:()=>Vg,IconMenu2:()=>Zg,IconMenuDeep:()=>jg,IconMessage:()=>qg,IconMoon:()=>Kg,IconPage:()=>Xg,IconPageFlat:()=>Yg,IconPalette:()=>Jg,IconPencil:()=>Qg,IconPencilCog:()=>em,IconPhoto:()=>tm,IconPhotoOff:()=>nm,IconPin:()=>rm,IconPlayerPause:()=>om,IconPlayerPlay:()=>im,IconRefresh:()=>am,IconSettings:()=>sm,IconSettingsOff:()=>lm,IconSpacingHorizontal:()=>cm,IconSpacingVertical:()=>dm,IconSun:()=>um,IconTrash:()=>hm,IconWorldCog:()=>fm,IconX:()=>pm,IconZoom:()=>gm,IconZoomCancel:()=>mm,IconZoomIn:()=>vm,IconZoomInArea:()=>bm,IconZoomOut:()=>wm,IconZoomOutArea:()=>_m,IconZoomPan:()=>ym}),Ns=Yc({IconAdjustmentsHorizontal:()=>Cm,IconAlertCircle:()=>r5,IconApiBook:()=>Om,IconArrowAutofitDown:()=>Rm,IconArrowAutofitHeight:()=>Pm,IconArrowAutofitLeft:()=>$m,IconArrowAutofitRight:()=>Dm,IconArrowAutofitWidth:()=>zm,IconArrowBigLeft:()=>Bm,IconArrowBigRight:()=>Nm,IconArrowsHorizontal:()=>Tm,IconArrowsLeftRight:()=>Lm,IconArrowsMove:()=>Hm,IconArrowsMoveVertical:()=>Fm,IconArrowsVertical:()=>Gm,IconBook:()=>Wm,IconBookArrowLeft:()=>Vm,IconBookArrowRight:()=>Zm,IconBookOff:()=>Um,IconBookUpload:()=>qm,IconBookmark:()=>Km,IconBookmarkOff:()=>Ym,IconBookmarks:()=>Xm,IconBooksReturn:()=>jm,IconBoxAlignTop:()=>Jm,IconCategory:()=>Qm,IconCheck:()=>e5,IconChevronLeft:()=>t5,IconChevronRight:()=>n5,IconCircleCheck:()=>o5,IconCircleX:()=>i5,IconComic1:()=>l5,IconComic1Flat:()=>c5,IconComic2:()=>d5,IconComic2Flat:()=>u5,IconComic3:()=>h5,IconComic3Flat:()=>f5,IconDeviceFloppy:()=>p5,IconDotsVertical:()=>g5,IconEReader1:()=>m5,IconEReader1Flat:()=>v5,IconEReader2:()=>b5,IconEReader2Flat:()=>w5,IconExternalLink:()=>_5,IconEye:()=>y5,IconEyeOff:()=>k5,IconFileDownload:()=>E5,IconFilePercent:()=>S5,IconFolderOpen:()=>A5,IconHandClick:()=>M5,IconHelp:()=>a5,IconInfoCircle:()=>s5,IconKeyboard:()=>x5,IconLayoutBottombar:()=>C5,IconLayoutBottombarInactive:()=>O5,IconLayoutDashboard:()=>I5,IconLayoutSidebar:()=>T5,IconLayoutSidebarInactive:()=>L5,IconLayoutSidebarRight:()=>R5,IconLayoutSidebarRightInactive:()=>P5,IconListNumbers:()=>$5,IconLoader2:()=>D5,IconLocationCog:()=>z5,IconMenu2:()=>B5,IconMenuDeep:()=>N5,IconMessage:()=>H5,IconMoon:()=>F5,IconPage:()=>G5,IconPageFlat:()=>W5,IconPalette:()=>U5,IconPencil:()=>V5,IconPencilCog:()=>Z5,IconPhoto:()=>Hs,IconPhotoOff:()=>Fs,IconPin:()=>j5,IconPlayerPause:()=>q5,IconPlayerPlay:()=>K5,IconRefresh:()=>Y5,IconSettings:()=>X5,IconSettingsOff:()=>J5,IconSpacingHorizontal:()=>Q5,IconSpacingVertical:()=>ev,IconSun:()=>tv,IconTrash:()=>nv,IconWorldCog:()=>rv,IconX:()=>ov,IconZoom:()=>iv,IconZoomCancel:()=>av,IconZoomIn:()=>sv,IconZoomInArea:()=>lv,IconZoomOut:()=>cv,IconZoomOutArea:()=>dv,IconZoomPan:()=>uv});function Em(e){return[...e.matchAll(/([^{}]+)\s*\{([^}]+)\}/g)].map(t=>{const r=t[1].trim(),i=t[2],a=/color:\s*([^;]+)/.exec(i);if(a){const s=a[1].trim();return{selectors:r.split(",").map(l=>l.trim().replace(/\s\s+/g," ")),color:s}}return null}).filter(t=>t!==null)}var Sm=Em(Dp),Yi=new Map;for(const e of Sm)for(const t of e.selectors){const r=t.match(/^\s*\.([^ ]+)\s*(.*)$/);if(!r)continue;const[,i,a]=r;let s=a.trim();s.startsWith(">")&&(s=s.substring(1).trim()),s===""&&(s="*"),Yi.has(i)||Yi.set(i,[]),Yi.get(i)?.push({subSelector:s,color:e.color})}var Am=new DOMParser,Mm=new XMLSerializer;function xm(e,t){const r=Yi.get(t);if(!r?.length)return e;const i=Am.parseFromString(e,"image/svg+xml").documentElement;if(i.querySelector("parsererror"))return console.error(`Error parsing SVG for ${t}`),e;for(const{subSelector:a,color:s}of r)try{i.querySelectorAll(a).forEach(l=>{l.setAttribute("stroke",s)})}catch(l){console.error(`Invalid selector "${a}" for ${t}`,l)}return Mm.serializeToString(i)}var Im=xe.default.mapValues(km,(e,t)=>xm(e,`icon-tabler-${xe.default.kebabCase(t.replace(/^Icon/,""))}`)),{IconAdjustmentsHorizontal:Cm,IconApiBook:Om,IconArrowsHorizontal:Tm,IconArrowsLeftRight:Lm,IconArrowAutofitDown:Rm,IconArrowAutofitHeight:Pm,IconArrowAutofitLeft:$m,IconArrowAutofitRight:Dm,IconArrowAutofitWidth:zm,IconArrowBigLeft:Bm,IconArrowBigRight:Nm,IconArrowsMove:Hm,IconArrowsMoveVertical:Fm,IconArrowsVertical:Gm,IconBook:Wm,IconBookOff:Um,IconBookArrowLeft:Vm,IconBookArrowRight:Zm,IconBooksReturn:jm,IconBookUpload:qm,IconBookmark:Km,IconBookmarkOff:Ym,IconBookmarks:Xm,IconBoxAlignTop:Jm,IconCategory:Qm,IconCheck:e5,IconChevronLeft:t5,IconChevronRight:n5,IconAlertCircle:r5,IconCircleCheck:o5,IconCircleX:i5,IconHelp:a5,IconInfoCircle:s5,IconComic1:l5,IconComic1Flat:c5,IconComic2:d5,IconComic2Flat:u5,IconComic3:h5,IconComic3Flat:f5,IconDeviceFloppy:p5,IconDotsVertical:g5,IconEReader1:m5,IconEReader1Flat:v5,IconEReader2:b5,IconEReader2Flat:w5,IconExternalLink:_5,IconEye:y5,IconEyeOff:k5,IconFileDownload:E5,IconFilePercent:S5,IconFolderOpen:A5,IconHandClick:M5,IconKeyboard:x5,IconLayoutDashboard:I5,IconLayoutBottombar:C5,IconLayoutBottombarInactive:O5,IconLayoutSidebar:T5,IconLayoutSidebarInactive:L5,IconLayoutSidebarRight:R5,IconLayoutSidebarRightInactive:P5,IconListNumbers:$5,IconLoader2:D5,IconLocationCog:z5,IconMenu2:B5,IconMenuDeep:N5,IconMessage:H5,IconMoon:F5,IconPage:G5,IconPageFlat:W5,IconPalette:U5,IconPencil:V5,IconPencilCog:Z5,IconPhoto:Hs,IconPhotoOff:Fs,IconPin:j5,IconPlayerPause:q5,IconPlayerPlay:K5,IconRefresh:Y5,IconSettings:X5,IconSettingsOff:J5,IconSpacingHorizontal:Q5,IconSpacingVertical:ev,IconSun:tv,IconTrash:nv,IconWorldCog:rv,IconX:ov,IconZoom:iv,IconZoomCancel:av,IconZoomIn:sv,IconZoomInArea:lv,IconZoomOut:cv,IconZoomOutArea:dv,IconZoomPan:uv}=Im;function $(e,t,r,i){var a=arguments.length,s=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,r):i,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,i);else for(var u=e.length-1;u>=0;u--)(l=e[u])&&(s=(a<3?l(s):a>3?l(t,r,s):l(t,r))||s);return a>3&&s&&Object.defineProperty(t,r,s),s}var Gr=class extends Xe{constructor(...t){super(...t),this.name="",this.variant="regular",this.family="classic",this.label="",this.size=""}static{this.styles=_t`
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
  `}updated(t){super.updated(t),t.has("name")&&(Ns[Hd(this.name)]?(this.dispatchEvent(new CustomEvent("load",{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("wa-load",{bubbles:!0,composed:!0}))):(this.dispatchEvent(new CustomEvent("error",{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("wa-error",{bubbles:!0,composed:!0}))))}render(){const t=Ns[Hd(this.name)];if(!t)return ze;const r=this.size?`--mov-icon-size: ${this.size};`:"";return re`<span
      role=${this.label?"img":ze}
      aria-label=${this.label||ze}
      aria-hidden=${this.label?ze:"true"}
      style=${r}
      >${Nd(t)}</span
    >`}};$([j({type:String})],Gr.prototype,"name",void 0),$([j({type:String,reflect:!0})],Gr.prototype,"variant",void 0),$([j({type:String,reflect:!0})],Gr.prototype,"family",void 0),$([j({type:String})],Gr.prototype,"label",void 0),$([j({type:String})],Gr.prototype,"size",void 0),Gr=$([rt("mov-icon")],Gr);var hv=(e,...t)=>t.length===0?e[0]:String.raw({raw:e},...t),fv=hv;function pv(e,t){const r=document.createElement("style");return r.id=e,r.appendChild(document.createTextNode(t)),r}function Fd(e,t){document.querySelector(`#${e}`)||(document.head??document.querySelector("head")).appendChild(pv(e,t))}function gv(e){document.querySelectorAll(`style[id="${e}"]`).forEach(t=>{t.remove()})}function mv(e,t){gv(e),Fd(e,t)}function vv(e,t){return fv`
    <style id="${e}">
      ${t}
    </style>
  `}var Xi=".mov-toast-stack{z-index:2000;pointer-events:none;flex-direction:column;gap:.5rem;width:350px;max-width:100vw;max-height:100vh;padding:1rem;display:flex;position:fixed;overflow:hidden}.mov-toast-stack-top-start{top:0;left:0}.mov-toast-stack-top-center{align-items:center;top:0;left:50%;transform:translate(-50%)}.mov-toast-stack-top-end{top:0;right:0}.mov-toast-stack-bottom-start{flex-direction:column-reverse;bottom:0;left:0}.mov-toast-stack-bottom-center{flex-direction:column-reverse;align-items:center;bottom:0;left:50%;transform:translate(-50%)}.mov-toast-stack-bottom-end{flex-direction:column-reverse;bottom:0;right:0}:host{width:100%;display:block}.mov-toast{pointer-events:auto;background-color:var(--theme-background-color);color:var(--theme-text-color);border:1px solid var(--theme-border-color);opacity:0;visibility:hidden;border-radius:.5rem;flex-direction:column;width:100%;transition:transform .3s cubic-bezier(.4,0,.2,1),opacity .3s cubic-bezier(.4,0,.2,1),visibility .3s cubic-bezier(.4,0,.2,1);display:flex;overflow:hidden;box-shadow:0 4px 12px #00000026}:host([placement$=-end]) .mov-toast{transform:translate(110%)}:host([placement$=-start]) .mov-toast{transform:translate(-110%)}:host([placement=top-center]) .mov-toast{transform:translateY(-110%)}:host([placement=bottom-center]) .mov-toast{transform:translateY(110%)}:host([open]) .mov-toast{opacity:1;visibility:visible;transform:translate(0)}.mov-toast-body{align-items:flex-start;gap:.75rem;padding:.75rem 1rem;display:flex}.mov-toast-icon{flex-shrink:0;justify-content:center;align-items:center;margin-top:.125rem;font-size:20px;display:flex}.mov-toast-icon mov-icon{--mov-icon-size:1.25rem}.mov-toast-content{flex-direction:column;flex-grow:1;gap:.125rem;display:flex}.mov-toast-title{font-size:14px;font-weight:600;line-height:1.25}.mov-toast-description{opacity:.8;font-size:13px;line-height:1.4}.mov-toast-close{cursor:pointer;color:inherit;opacity:.5;background:0 0;border:none;flex-shrink:0;justify-content:center;align-items:center;margin-right:-.25rem;padding:.25rem;transition:opacity .2s;display:flex}.mov-toast-close:hover{opacity:1}.mov-toast-variant-primary .mov-toast-icon{color:var(--mov-color-fill-loud)}.mov-toast-variant-success .mov-toast-icon{color:#28a745}.mov-toast-variant-warning .mov-toast-icon{color:#ffc107}.mov-toast-variant-danger .mov-toast-icon{color:#dc3545}.mov-toast-variant-neutral .mov-toast-icon{color:var(--theme-text-color)}.mov-toast-variant-primary{border-left:4px solid var(--mov-color-fill-loud)}.mov-toast-variant-success{border-left:4px solid #28a745}.mov-toast-variant-warning{border-left:4px solid #ffc107}.mov-toast-variant-danger{border-left:4px solid #dc3545}.mov-toast-variant-neutral{border-left:4px solid var(--theme-border-color)}",Wn=class extends Xe{constructor(...t){super(...t),this.open=!1,this.variant="primary",this.duration=3e3,this.closable=!1,this.title="",this.description="",this.placement="bottom-end"}static{this.styles=[ke(Xi)]}async show(){if(!this.open)return await this.updateComplete,this.dispatchEvent(new CustomEvent("wa-show",{bubbles:!0,composed:!0})),this.open=!0,this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration)),new Promise(t=>{setTimeout(()=>{this.dispatchEvent(new CustomEvent("wa-after-show",{bubbles:!0,composed:!0})),t()},300)})}async hide(){if(this.open)return window.clearTimeout(this.autoHideTimeout),this.dispatchEvent(new CustomEvent("wa-hide",{bubbles:!0,composed:!0})),this.open=!1,new Promise(t=>{setTimeout(()=>{this.dispatchEvent(new CustomEvent("wa-after-hide",{bubbles:!0,composed:!0})),this.remove(),t()},300)})}handleCloseClick(){this.hide()}getDefaultIcon(){if(this.icon)return this.icon;switch(this.variant){case"success":return"IconCircleCheck";case"warning":return"IconAlertCircle";case"danger":return"IconCircleX";default:return"IconInfoCircle"}}render(){return re`
      <div
        part="base"
        class=${yt({"mov-toast":!0,[`mov-toast-variant-${this.variant}`]:!0})}
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
        aria-hidden=${this.open?"false":"true"}
      >
        <div class="mov-toast-body" part="body">
          <div class="mov-toast-icon" part="icon">
            <slot name="icon">
              <mov-icon name=${this.getDefaultIcon()}></mov-icon>
            </slot>
          </div>

          <div class="mov-toast-content" part="content">
            ${this.title?re`<div class="mov-toast-title" part="title">${this.title}</div>`:""}
            <div class="mov-toast-description" part="description">
              <slot>${this.description}</slot>
            </div>
          </div>

          <slot name="action"></slot>

          ${this.closable?re`
                <button
                  type="button"
                  class="mov-toast-close"
                  part="close-button"
                  @click=${this.handleCloseClick}
                  aria-label="Close"
                >
                  <mov-icon name="IconX"></mov-icon>
                </button>
              `:""}
        </div>
      </div>
    `}};$([j({type:Boolean,reflect:!0})],Wn.prototype,"open",void 0),$([j({reflect:!0})],Wn.prototype,"variant",void 0),$([j({type:Number})],Wn.prototype,"duration",void 0),$([j({type:Boolean})],Wn.prototype,"closable",void 0),$([j()],Wn.prototype,"title",void 0),$([j()],Wn.prototype,"description",void 0),$([j()],Wn.prototype,"icon",void 0),$([j({reflect:!0})],Wn.prototype,"placement",void 0),Wn=$([rt("mov-toast")],Wn);var an=e=>{const t=e.placement||"bottom-end",r=`mov-toast-stack-${t}`;let i=document.querySelector(`.mov-toast-stack.${r}`);const a=Xi.indexOf(":host");Fd("mov-toast-stack-styles",a>-1?Xi.substring(0,a).trim():Xi),i||(i=document.createElement("div"),i.className=`mov-toast-stack ${r}`,document.body.appendChild(i));const s=document.createElement("mov-toast");let l=e.variant||"primary";return l==="info"&&(l="primary"),l==="error"&&(l="danger"),s.variant=l,s.title=e.title||"",s.description=e.description||e.message||"",s.duration=e.duration??3e3,s.closable=e.closable??!0,s.placement=t,e.icon&&(s.icon=e.icon),i.appendChild(s),requestAnimationFrame(()=>{s.show()}),s};an.info=e=>an({...e,variant:"primary"}),an.success=e=>an({...e,variant:"success"}),an.warning=e=>an({...e,variant:"warning"}),an.error=e=>an({...e,variant:"danger"});var Xo=(e,t)=>{const r=(i,a)=>xe.default.transform(i,(s,l,u)=>{xe.default.isEqual(l,a[u])||(xe.default.isObject(l)&&xe.default.isObject(a[u])&&!xe.default.isArray(l)?s[u]=r(l,a[u]):s[u]=l)});return r(e,t)},bv={bookmarks:[],colorScheme:"dark",downloadZip:!1,enabled:!1,fitWidthIfOversize:!0,header:"scroll",hidePageControls:!1,lazyLoadImages:!1,lazyStart:50,loadMode:"wait",locale:"en_US",maxReload:5,minZoom:30,navbar:"bottom",pagination:"disabled",scrollHeight:25,theme:"#29487D",loadSpeed:"Extreme",viewMode:"WebComic",zoomMode:"percent",zoomStep:30,zoomValue:100,keybinds:{SCROLL_UP:["up","W","num_8"],SCROLL_DOWN:["down","S","num_2"],NEXT_CHAPTER:["right","/","D","num_6"],PREVIOUS_CHAPTER:["left",";","A","num_4"],RETURN_CHAPTER_LIST:["backspace","del","num_decimal"],ENLARGE:["-","num_add","E"],REDUCE:["=","num_subtract","Q"],RESTORE:["9","num_divide","R"],FIT_WIDTH:["0","num_multiply","F"],FIT_HEIGHT:["H","num_0"],SETTINGS:["num_divide","num_5","X"],VIEW_MODE_WEBCOMIC:["C"],VIEW_MODE_VERTICAL:["V"],VIEW_MODE_LEFT:["N"],VIEW_MODE_RIGHT:["B"],VIEW_MODE_GALLERY:["G"],SCROLL_START:["space"],INCREASE_SPEED:["."],DECREASE_SPEED:[","]}},wv={lazyLoadImages:!0,fitWidthIfOversize:!0,navbar:"disabled",viewMode:"WebComic",header:"scroll",hidePageControls:!0,pagination:"disabled"},_v={loadSpeed:"All",lazyLoadImages:!1,downloadZip:!1,theme:"oklch(44.6% 0.043 257.281)"};function Pn(e=!0){const t={...bv,theme:e?"#29487D":"#004526"};let r=J2()?xe.default.defaultsDeep(wv,t):t;return Es()&&(r=xe.default.defaultsDeep(_v,r)),r}function yv(e,t){if(Array.isArray(e)&&Array.isArray(t)){if(e.length!==t.length)return!1;const r=s=>`${s.url}-${s.date}`,i=[...e].sort((s,l)=>r(s).localeCompare(r(l))),a=[...t].sort((s,l)=>r(s).localeCompare(r(l)));return xe.default.isEqual(i,a)}}function kv(e,t){if(e&&typeof e=="object"&&t&&typeof t=="object"){const r=e,i=t,a=xe.default.keys(r).sort((l,u)=>l.localeCompare(u)),s=xe.default.keys(i).sort((l,u)=>l.localeCompare(u));if(!xe.default.isEqual(a,s))return!1;for(const l of a){const u=r[l]?[...r[l]].sort((h,f)=>h.localeCompare(f)):[],d=i[l]?[...i[l]].sort((h,f)=>h.localeCompare(f)):[];if(!xe.default.isEqual(u,d))return!1}return!0}}function Gd(e,t,r){if(r==="bookmarks")return yv(e,t);if(r==="keybinds")return kv(e,t)}function Ji(e,t,r){if(e===t)return!1;if(r){const i={[r]:e},a={[r]:t};return!xe.default.isEqualWith(i,a,Gd)}return!xe.default.isEqualWith(e,t,Gd)}var Yt=xe.default.defaultsDeep(j2(Pn()),Pn()),Xt=xe.default.defaultsDeep(q2(Pn(!1)),Pn(!1)),Wr=()=>Xt?.enabled===!0,Gs=e=>Wr()&&!["locale","bookmarks","keybinds"].includes(e),It=hd(Wr()?{...Xt,locale:Yt.locale,keybinds:Yt.keybinds,bookmarks:Yt.bookmarks}:Yt),co=ip(It,e=>so.find(t=>t.ID===e.locale)??so[1]),Jt=hd({autoScroll:!1,chapter:Ts(),currentPage:0,device:Go(),manga:void 0,panel:"none",scrollToPage:void 0});function Ur(e){if(e){const t=Gs(e)?Xt[e]:Yt[e],r=It.get()?.[e];Ji(r,t,e)&&(It.setKey(e,t),Ae("Refreshed Settings",e,t));return}for(const t in It.get()){const r=It.get()[t],i=Gs(t)?Xt[t]:Yt[t];Ji(r,i)&&It.setKey(t,i)}Ae("Refreshed All Settings")}function Ev(e){const t=xe.default.defaultsDeep(e,Pn()),r=Yt?Xo(t,Yt):t;if(!yn(r)){Ae("Imported Global Settings",r),Yt=t;for(const i in r)Ur(i)}}dd(xe.default.debounce(Ev,300),"settings");function Sv(e){const t=xe.default.defaultsDeep(e,Pn(!1)),r=Xt?Xo(t,Xt):t;if(!yn(r)){Ae("Imported Local Settings",r),Xt=t;for(const i in r)Ur(i)}}dd(xe.default.debounce(Sv,300),location.hostname);function Y(e){return It.get()?.[e]}function uo(e,t){const r=It.get()?.[e];Ji(r,t,e)&&It.setKey(e,t)}function St(e,t){Ji(Y(e),t,e)&&(It.setKey(e,t),Gs(e)?(Xt[e]=t,cd(Xo(Xt,Pn(!1)))):(Yt[e]=t,K2(Xo(Yt,Pn()))))}function Jo(e,t){uo(e,t(Y(e)))}function he(e){return Jt.get()[e]}function Pe(e,t){const r=Jt.get()[e];xe.default.isEqual(r,t)||Jt.setKey(e,t)}function Wd(e,t){const r=Jt.get()[e],i=t(r);xe.default.isEqual(r,i)||Jt.setKey(e,i)}function $n(e,t){Wd("images",r=>({...r,[e]:{...r?.[e],...t(r?.[e]??{})}}))}function q(e){const t=so.find(r=>r.ID===Y("locale"))??so[1];return Yf(t,e)?t?.[e]??so[1]?.[e]:`##MISSING_STRING_${e}##`}function Ud(e=!1){return Xt.enabled=e,cd(Xo(Xt,Pn(!1))),Ae("Local Settings ",e?"Enabled":"Disabled"),an.info({title:"Changed Settings to",description:Wr()?"Local":"Global",duration:2e3}),Wr()}function Av(){Wr()?(ad(location.hostname),Xt=Pn(!1),Ud(!1)):(ad("settings"),Yt=Pn(),Ur()),Ae("Settings Reset")}function ho(e=location.href){return Y("bookmarks").find(t=>t.url===e)?.page}function Mv(e=null){kn("Current Settings (Local:",Wr(),") ",e?It.get()[e]:It.get(),`
Global Settings`,e?Yt[e]:Yt,`
Local Settings`,e?Xt[e]:Xt,`
AppState`,Jt.get())}V2("MOVSettings",Mv);var xv=(e,t,r)=>{if(r&&!["bookmarks","zoomValue"].includes(r)){const i=t[r],a=e[r];an.info({title:`${r} Changed`,description:`from ${JSON.stringify(i)} to ${JSON.stringify(a)}`,duration:2e3})}};It.listen(xe.default.debounce(xv,300));var sn=e=>e??ze,Iv=":host{--mov-font-size-scale:1;--mov-font-size-m:calc(16px * var(--mov-font-size-scale));--mov-font-size-s:round(calc(var(--mov-font-size-m) / 1.125), 1px);--mov-font-size-l:round(calc(var(--mov-font-size-m) * 1.125 * 1.125), 1px);--mov-border-width-s:.0625rem;--mov-border-radius-pill:9999px;--mov-transition-fast:75ms;--mov-font-weight-action:500;--mov-focus-ring:solid .1875rem var(--mov-color-fill-loud);--mov-focus-ring-offset:.0625rem;--mov-line-height-condensed:1.2;--mov-form-control-padding-block:.75em;--mov-form-control-padding-inline:1em;--mov-form-control-height:round(calc(2 * var(--mov-form-control-padding-block) + 1em * var(--mov-line-height-condensed)), 1px);display:inline-block}:host([size=small]){font-size:var(--mov-font-size-s)}:host([size=medium]){font-size:var(--mov-font-size-m)}:host([size=large]){font-size:var(--mov-font-size-l)}.button{box-sizing:border-box;user-select:none;white-space:nowrap;vertical-align:middle;transition-property:background,border,box-shadow,color;transition-duration:var(--mov-transition-fast);cursor:pointer;padding:0 var(--mov-form-control-padding-inline);font-family:inherit;font-size:inherit;font-weight:var(--mov-font-weight-action);line-height:calc(var(--mov-form-control-height) - var(--mov-border-width-s) * 2);height:var(--mov-form-control-height);border-radius:var(--mov-border-radius-m,.375rem);border-style:solid;border-width:var(--mov-border-width-s);background-color:var(--mov-color-fill-loud);color:var(--mov-color-on-loud);border-color:#0000;justify-content:center;align-items:center;text-decoration:none;display:inline-flex}:host([appearance~=plain]){& .button{color:var(--mov-color-on-quiet);background-color:#0000;border-color:#0000}@media (hover:hover){& .button:not(.disabled):not(.loading):hover{color:var(--mov-color-on-quiet);background-color:var(--mov-color-fill-quiet)}}& .button:not(.disabled):not(.loading):active{color:var(--mov-color-on-quiet);background-color:color-mix(in oklab, var(--mov-color-fill-quiet), var(--mov-color-mix-active))}}:host([appearance~=outlined]){& .button{color:var(--mov-color-on-quiet);border-color:var(--mov-color-border-loud);background-color:#0000}@media (hover:hover){& .button:not(.disabled):not(.loading):hover{color:var(--mov-color-on-quiet);background-color:var(--mov-color-fill-quiet)}}& .button:not(.disabled):not(.loading):active{color:var(--mov-color-on-quiet);background-color:color-mix(in oklab, var(--mov-color-fill-quiet), var(--mov-color-mix-active))}}:host([appearance~=filled]){& .button{color:var(--mov-color-on-normal);background-color:var(--mov-color-fill-normal);border-color:#0000}@media (hover:hover){& .button:not(.disabled):not(.loading):hover{color:var(--mov-color-on-normal);background-color:color-mix(in oklab, var(--mov-color-fill-normal), var(--mov-color-mix-hover))}}& .button:not(.disabled):not(.loading):active{color:var(--mov-color-on-normal);background-color:color-mix(in oklab, var(--mov-color-fill-normal), var(--mov-color-mix-active))}}:host([appearance~=filled][appearance~=outlined]) .button{border-color:var(--mov-color-border-normal)}:host([appearance~=accent]){& .button{color:var(--mov-color-on-loud);background-color:var(--mov-color-fill-loud);border-color:#0000}@media (hover:hover){& .button:not(.disabled):not(.loading):hover{background-color:color-mix(in oklab, var(--mov-color-fill-loud), var(--mov-color-mix-hover))}}& .button:not(.disabled):not(.loading):active{background-color:color-mix(in oklab, var(--mov-color-fill-loud), var(--mov-color-mix-active))}}.button:focus{outline:none}.button:focus-visible{outline:var(--mov-focus-ring);outline-offset:var(--mov-focus-ring-offset)}.button.disabled{opacity:.5;cursor:not-allowed}.button.disabled *{pointer-events:none}.button.is-icon-button{outline-offset:2px;width:var(--mov-form-control-height);aspect-ratio:1}:host([pill]) .button{border-radius:var(--mov-border-radius-pill)}.start,.end{pointer-events:none;flex:none;align-items:center;display:flex}.label{display:inline-block}.is-icon-button .label{display:flex}mov-icon[part~=caret]{align-self:center;align-items:center;display:flex}mov-icon[part~=caret]::part(svg){width:.875em;height:.875em}.loading{cursor:wait;position:relative}.loading .start,.loading .label,.loading .end,.loading .caret{visibility:hidden}.spinner{--indicator-color:currentColor;--track-color:color-mix(in oklab, currentColor, transparent 90%);border:2px solid var(--track-color);border-top-color:var(--indicator-color);border-radius:50%;width:1em;height:1em;font-size:1em;animation:1s linear infinite spin;position:absolute;top:calc(50% - .5em);left:calc(50% - .5em)}@keyframes spin{to{transform:rotate(360deg)}}slot[name=start]::slotted(*){margin-inline-end:.75em}slot[name=end]::slotted(*),.button:not(.visually-hidden-label) [part~=caret]{margin-inline-start:.75em}",ct=class extends Xe{constructor(...t){super(...t),this.isIconButton=!1,this.hasLabel=!1,this.hasStart=!1,this.hasEnd=!1,this.title="",this.appearance="accent",this.variant="brand",this.size="medium",this.withCaret=!1,this.disabled=!1,this.loading=!1,this.pill=!1,this.type="button"}static{this.styles=[ke(Iv)]}handleClick(t){(this.disabled||this.loading)&&(t.preventDefault(),t.stopPropagation())}click(){this.button?.click()}focus(t){this.button?.focus(t)}blur(){this.button?.blur()}render(){const t=!!this.href,r={button:!0,"with-caret":this.withCaret,disabled:this.disabled,loading:this.loading,pill:this.pill,"has-label":this.hasLabel,"has-start":this.hasStart,"has-end":this.hasEnd,"is-icon-button":this.isIconButton},i=re`
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
      ${this.withCaret?re`<mov-icon
            part="caret"
            class="caret"
            name="IconChevronRight"
            style="transform: rotate(90deg)"
          ></mov-icon>`:""}
      ${this.loading?re`<span
            part="spinner"
            class="spinner"
          ></span>`:""}
    `;return t?re`
        <a
          part="base"
          class=${yt(r)}
          href=${sn(this.href)}
          target=${sn(this.target)}
          title=${sn(this.title)}
          role="button"
          aria-disabled=${this.disabled?"true":"false"}
          tabindex=${this.disabled?"-1":"0"}
          download=${sn(this.download)}
          @click=${this.handleClick}
        >
          ${i}
        </a>
      `:re`
        <button
          part="base"
          class=${yt(r)}
          ?disabled=${this.disabled||this.loading}
          type=${sn(this.type)}
          title=${sn(this.title)}
          name=${sn(this.name)}
          value=${sn(this.value)}
          aria-disabled=${this.disabled?"true":"false"}
          tabindex=${this.disabled?"-1":"0"}
        >
          ${i}
        </button>
      `}handleLabelSlotChange(){const t=this.labelSlot?.assignedNodes({flatten:!0})??[],r=t.filter(l=>l.nodeType===Node.ELEMENT_NODE),i=t.filter(l=>l.nodeType===Node.TEXT_NODE&&l.textContent?.trim()!==""),a=l=>["wa-icon","mov-icon","svg"].includes(l.localName),s=r.some(a);this.isIconButton=i.length===0&&s}};$([Qn(".button")],ct.prototype,"button",void 0),$([Qn("slot:not([name])")],ct.prototype,"labelSlot",void 0),$([Dt()],ct.prototype,"isIconButton",void 0),$([Dt()],ct.prototype,"hasLabel",void 0),$([Dt()],ct.prototype,"hasStart",void 0),$([Dt()],ct.prototype,"hasEnd",void 0),$([j()],ct.prototype,"title",void 0),$([j({reflect:!0})],ct.prototype,"appearance",void 0),$([j({reflect:!0})],ct.prototype,"variant",void 0),$([j({reflect:!0})],ct.prototype,"size",void 0),$([j({attribute:"with-caret",type:Boolean,reflect:!0})],ct.prototype,"withCaret",void 0),$([j({type:Boolean,reflect:!0})],ct.prototype,"disabled",void 0),$([j({type:Boolean,reflect:!0})],ct.prototype,"loading",void 0),$([j({type:Boolean,reflect:!0})],ct.prototype,"pill",void 0),$([j()],ct.prototype,"type",void 0),$([j({reflect:!0})],ct.prototype,"name",void 0),$([j({reflect:!0})],ct.prototype,"value",void 0),$([j({reflect:!0})],ct.prototype,"href",void 0),$([j()],ct.prototype,"target",void 0),$([j({reflect:!0})],ct.prototype,"rel",void 0),$([j()],ct.prototype,"download",void 0),$([j({reflect:!0})],ct.prototype,"form",void 0),ct=$([rt("mov-button")],ct);var En=class extends Xe{constructor(...t){super(...t),this.mode="burger",this.active=!1,this.label="",this.icon="",this.activeIcon="",this.appearance="accent",this.size="medium",this.disabled=!1,this.loading=!1}static{this.styles=_t`
    :host {
      display: inline-flex;
      vertical-align: middle;
      --burger-size: 1.25rem;
      --burger-line-height: 2px;
      --burger-line-color: currentColor;
      --burger-transition-duration: 0.3s;
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

    /* Burger Mode Styling */
    .burger-mode {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: var(--burger-size);
      height: var(--burger-size);
      position: relative;
    }

    .burger-line {
      width: 100%;
      height: var(--burger-line-height);
      background-color: var(--burger-line-color);
      border-radius: var(--burger-line-height);
      transition: transform var(--burger-transition-duration) ease,
                  opacity var(--burger-transition-duration) ease;
      position: absolute;
    }

    .burger-line:nth-child(1) { transform: translateY(-6px); }
    .burger-line:nth-child(2) { transform: translateY(0); }
    .burger-line:nth-child(3) { transform: translateY(6px); }

    :host([active]) .burger-line:nth-child(1) {
      transform: translateY(0) rotate(45deg);
    }

    :host([active]) .burger-line:nth-child(2) {
      opacity: 0;
      transform: translateX(4px);
    }

    :host([active]) .burger-line:nth-child(3) {
      transform: translateY(0) rotate(-45deg);
    }

    /* Size adjustments for burger */
    :host([size="small"]) { --burger-size: 1rem; }
    :host([size="large"]) { --burger-size: 1.5rem; }

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
  `}connectedCallback(){super.connectedCallback(),this.label||(this.label=this._getDefaultLabel())}render(){const t=this.active?this.activeLabel??this.label:this.label,r={"two-icon-mode":["custom","theme"].includes(this.mode),"single-icon-mode":["chevron","expand","play-pause"].includes(this.mode),"burger-mode-active":this.mode==="burger"};return re`
      <mov-button
        @click=${this._onClick}
        .appearance=${sn(this.appearance)}
        .size=${sn(this.size)}
        ?disabled=${sn(this.disabled)}
        ?loading=${sn(this.loading)}
        .title=${sn(this.title)}
        class=${yt(r)}
        title=${t}
        aria-label=${t}
        aria-pressed=${this.active?"true":"false"}
        icon-only
      >
        ${this._renderIcons()}
      </mov-button>
    `}_getDefaultLabel(){switch(this.mode){case"burger":return"Toggle menu";case"chevron":return"Toggle expand";case"theme":return"Toggle theme";case"play-pause":return"Toggle play";case"expand":return"Toggle expand";case"custom":return"Toggle";default:return"Toggle"}}_getIcons(){switch(this.mode){case"chevron":return{inactive:"chevron-right",active:"chevron-right"};case"theme":return{inactive:"moon",active:"sun"};case"play-pause":return{inactive:"player-play",active:"player-pause"};case"expand":return{inactive:"arrow-autofit-down",active:"arrow-autofit-down"};case"custom":return{inactive:this.icon,active:this.activeIcon};default:return{inactive:"",active:""}}}_renderIcons(){if(this.mode==="burger")return re`
        <div class="burger-mode">
          <div class="burger-line"></div>
          <div class="burger-line"></div>
          <div class="burger-line"></div>
        </div>
      `;const t=this._getIcons();return t.inactive?this.mode==="chevron"?re`<mov-icon
        class="chevron-icon"
        name=${t.inactive}
      ></mov-icon>`:this.mode==="expand"?re`<mov-icon
        class="expand-icon"
        name=${t.inactive}
      ></mov-icon>`:this.mode==="play-pause"?re`<mov-icon
        class="play-pause-icon"
        name=${this.active?t.active:t.inactive}
      ></mov-icon>`:re`
      <mov-icon
        class="inactive-icon"
        name=${t.inactive}
      ></mov-icon>
      <mov-icon
        class="active-icon"
        name=${t.active}
      ></mov-icon>
    `:ze}_onClick(){if(this.disabled||this.loading)return;const t=this.active;this.active=!this.active,this.dispatchEvent(new CustomEvent("toggle",{detail:{value:this.active,oldValue:t,mode:this.mode},bubbles:!0,composed:!0}))}toggle(){this._onClick()}setActive(t){this.active=t}};$([j({type:String})],En.prototype,"mode",void 0),$([j({type:Boolean,reflect:!0})],En.prototype,"active",void 0),$([j({type:String})],En.prototype,"label",void 0),$([j({type:String})],En.prototype,"activeLabel",void 0),$([j({type:String})],En.prototype,"icon",void 0),$([j({type:String})],En.prototype,"activeIcon",void 0),$([j({type:String,reflect:!0})],En.prototype,"appearance",void 0),$([j({type:String,reflect:!0})],En.prototype,"size",void 0),$([j({type:Boolean})],En.prototype,"disabled",void 0),$([j({type:Boolean,reflect:!0})],En.prototype,"loading",void 0),En=$([rt("toggle-button")],En);var Vd="important",Cv=" !"+Vd,Un=qo(class extends Ui{constructor(e){if(super(e),e.type!==Wi.ATTRIBUTE||e.name!=="style"||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,r)=>{const i=e[r];return i==null?t:t+`${r=r.includes("-")?r:r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(e,[t]){const{style:r}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const i of this.ft)t[i]??(this.ft.delete(i),i.includes("-")?r.removeProperty(i):r[i]=null);for(const i in t){const a=t[i];if(a!=null){this.ft.add(i);const s=typeof a=="string"&&a.endsWith(Cv);i.includes("-")||s?r.setProperty(i,s?a.slice(0,-11):a,s?Vd:""):r[i]=a}}return Jn}});function Qo(e,t){let r=e.length,i,a,s=!1,l=!1;Array.isArray(e[0])?i=e:(i=[e],r=i.length,s=!0),Array.isArray(t[0])?a=t:(a=t.length>0?t.map(f=>[f]):[[]],l=!0);let u=a[0].length,d=a[0].map((f,b)=>a.map(v=>v[b])),h=i.map(f=>d.map(b=>{let v=0;if(!Array.isArray(f)){for(let m of b)v+=f*m;return v}for(let m=0;m<f.length;m++)v+=f[m]*(b[m]||0);return v}));return r===1&&s&&(h=h[0]),u===1&&l?r===1&&s?h[0]:h.map(f=>f[0]):h}function Ws(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function bt(e,t,r=[0,0,0]){const i=Ws(e,t[0]),a=Ws(e,t[1]),s=Ws(e,t[2]);return r[0]=i,r[1]=a,r[2]=s,r}function fo(e){return fr(e)==="string"}function fr(e){return(Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function Us(e,{precision:t=16,unit:r}){return Ke(e)?"none":(e=+Vs(e,t),e+(r??""))}function Ke(e){return e===null}function At(e){return Ke(e)?0:e}function Vs(e,t){if(e===0)return 0;let r=~~e,i=0;r&&t&&(i=~~Math.log10(Math.abs(r))+1);const a=10**(t-i);return Math.floor(e*a+.5)/a}function ei(e,t,r){return isNaN(e)?t:isNaN(t)?e:e+(t-e)*r}function Zd(e,t,r){return(r-e)/(t-e)}function Zs(e,t,r){return!e||!t||e===t||e[0]===t[0]&&e[1]===t[1]||isNaN(r)||r===null?r:ei(t[0],t[1],Zd(e[0],e[1],r))}function Qi(e,t,r){return Math.max(Math.min(r,t),e)}function ea(e,t){return Math.sign(e)===Math.sign(t)?e:-e}function Mt(e,t){return ea(Math.abs(e)**t,e)}function js(e,t){return t===0?0:e/t}function jd(e,t,r=0,i=e.length){for(;r<i;){const a=r+i>>1;e[a]<t?r=a+1:i=a}return r}function po(e,t){if(e instanceof t)return!0;const r=t.name;for(;e;){const i=Object.getPrototypeOf(e),a=i?.constructor?.name;if(a===r)return!0;if(!a||a==="Object")return!1;e=i}return!1}var Ov=Object.freeze({__proto__:null,bisectLeft:jd,clamp:Qi,copySign:ea,interpolate:ei,interpolateInv:Zd,isInstance:po,isNone:Ke,isString:fo,mapRange:Zs,multiplyMatrices:Qo,multiply_v3_m3x3:bt,serializeNumber:Us,skipNone:At,spow:Mt,toPrecision:Vs,type:fr,zdiv:js}),Tv=class{add(e,t,r){if(typeof arguments[0]!="string"){for(var e in arguments[0])this.add(e,arguments[0][e],arguments[1]);return}(Array.isArray(e)?e:[e]).forEach(function(i){this[i]=this[i]||[],t&&this[i][r?"unshift":"push"](t)},this)}run(e,t){this[e]=this[e]||[],this[e].forEach(function(r){r.call(t&&t.context?t.context:t,t)})}},pr=new Tv,ln={gamut_mapping:"css",precision:5,deltaE:"76",verbose:"production".toLowerCase()!=="test",warn:function(t){this.verbose&&globalThis?.console?.warn?.(t)}},qd=class{type;coordMeta;coordRange;range;constructor(e,t){if(typeof e=="object"&&(this.coordMeta=e),t&&(this.coordMeta=t,this.coordRange=t.range??t.refRange),typeof e=="string"){let r=e.trim().match(/^(?<type><[a-z]+>)(\[(?<min>-?[.\d]+),\s*(?<max>-?[.\d]+)\])?$/);if(!r)throw new TypeError(`Cannot parse ${e} as a type definition.`);this.type=r.groups.type;let{min:i,max:a}=r.groups;(i||a)&&(this.range=[+i,+a])}}get computedRange(){return this.range?this.range:this.type==="<percentage>"?this.percentageRange():this.type==="<angle>"?[0,360]:null}get unit(){return this.type==="<percentage>"?"%":this.type==="<angle>"?"deg":""}resolve(e){if(this.type==="<angle>")return e;let t=this.computedRange,r=this.coordRange;return this.type==="<percentage>"&&(r??=this.percentageRange()),Zs(t,r,e)}serialize(e,t){let r=this.type==="<percentage>"?this.percentageRange(100):this.computedRange,i=this.unit;return e=Zs(this.coordRange,r,e),Us(e,{unit:i,precision:t})}toString(){let e=this.type;if(this.range){let[t="",r=""]=this.range;e+=`[${t},${r}]`}return e}percentageRange(e=1){let t;return this.coordMeta&&this.coordMeta.range||this.coordRange&&this.coordRange[0]>=0?t=[0,1]:t=[-1,1],[t[0]*e,t[1]*e]}static get(e,t){return po(e,this)?e:new this(e,t)}},qs=Symbol("instance"),Kd=class Hf{type;name;spaceCoords;coords;id;alpha;constructor(t,r=t.space){t[qs]=this,this.type="function",this.name="color",Object.assign(this,t),this.space=r,this.type!=="custom"&&(this.spaceCoords=Object.values(r.coords),this.coords||(this.coords=this.spaceCoords.map(i=>{let a=["<number>","<percentage>"];return i.type==="angle"&&a.push("<angle>"),a})),this.coords=this.coords.map((i,a)=>{let s=this.spaceCoords[a];return typeof i=="string"&&(i=i.trim().split(/\s*\|\s*/)),i.map(l=>qd.get(l,s))}))}serializeCoords(t,r,i){return i=t.map((a,s)=>qd.get(i?.[s]??this.coords[s][0],this.spaceCoords[s])),t.map((a,s)=>i[s].serialize(a,r))}coerceCoords(t,r){return Object.entries(this.space.coords).map(([i,a],s)=>{let l=t[s];if(Ke(l)||isNaN(l))return l;let u=r[s],d=this.coords[s].find(h=>h.type==u);if(!d){let h=a.name||i;throw new TypeError(`${u??l?.raw??l} not allowed for ${h} in ${this.name}()`)}return l=d.resolve(l),d.range&&(r[s]=d.toString()),l})}canSerialize(){return this.type==="function"||this.serialize}parse(t){return null}static get(t,...r){return!t||po(t,this)?t:t[qs]?t[qs]:new Hf(t,...r)}},Vt={D50:[.3457/.3585,1,.2958/.3585],D65:[.3127/.329,1,.3583/.329]};function Ks(e){return Array.isArray(e)?e:Vt[e]}function ta(e,t,r,i={}){if(e=Ks(e),t=Ks(t),!e||!t)throw new TypeError(`Missing white point to convert ${e?"":"from"}${!e&&!t?"/":""}${t?"":"to"}`);if(e===t)return r;let a={W1:e,W2:t,XYZ:r,options:i};if(pr.run("chromatic-adaptation-start",a),a.M||(a.W1===Vt.D65&&a.W2===Vt.D50?a.M=[[1.0479297925449969,.022946870601609652,-.05019226628920524],[.02962780877005599,.9904344267538799,-.017073799063418826],[-.009243040646204504,.015055191490298152,.7518742814281371]]:a.W1===Vt.D50&&a.W2===Vt.D65&&(a.M=[[.955473421488075,-.02309845494876471,.06325924320057072],[-.0283697093338637,1.0099953980813041,.021041441191917323],[.012314014864481998,-.020507649298898964,1.330365926242124]])),pr.run("chromatic-adaptation-end",a),a.M)return bt(a.XYZ,a.M);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}function Yd(e,t){let r={str:String(e)?.trim(),options:t};if(pr.run("parse-start",r),r.color)return r.color;r.parsed=Rv(r.str);let i,a=r.options?r.options.parseMeta??r.options.meta:null;if(r.parsed){let s=r.parsed.name,l,u,d=r.parsed.args,h=d.map((v,m)=>r.parsed.argMeta[m]?.type);if(s==="color"){let v=d.shift();h.shift();let m=v.startsWith("--")?v.substring(2):`--${v}`,g=[v,m];if(l=ye.findFormat({name:s,id:g,type:"function"}),!l){let k,y=v in ye.registry?v:m;if(y in ye.registry){let S=ye.registry[y].formats?.color?.id;S&&(k=`Did you mean ${e.replace("color("+v,"color("+S)}?`)}throw new TypeError(`Cannot parse ${r.str}. `+(k??"Missing a plugin?"))}u=l.space,l.id.startsWith("--")&&!v.startsWith("--")&&ln.warn(`${u.name} is a non-standard space and not currently supported in the CSS spec. Use prefixed color(${l.id}) instead of color(${v}).`),v.startsWith("--")&&!l.id.startsWith("--")&&ln.warn(`${u.name} is a standard space and supported in the CSS spec. Use color(${l.id}) instead of prefixed color(${v}).`)}else l=ye.findFormat({name:s,type:"function"}),u=l.space;a&&Object.assign(a,{format:l,formatId:l.name,types:h,commas:r.parsed.commas});let f=1;r.parsed.lastAlpha&&(f=r.parsed.args.pop(),a&&(a.alphaType=h.pop()));let b=l.coords.length;if(d.length!==b)throw new TypeError(`Expected ${b} coordinates for ${u.id} in ${r.str}), got ${d.length}`);d=l.coerceCoords(d,h),i={spaceId:u.id,coords:d,alpha:f}}else e:for(let s of ye.all)for(let l in s.formats){let u=s.formats[l];if(u.type!=="custom"||u.test&&!u.test(r.str))continue;let d=s.getFormat(u),h=d.parse(r.str);if(h){a&&Object.assign(a,{format:d,formatId:l}),i=h;break e}}if(!i)throw new TypeError(`Could not parse ${e} as a color. Missing a plugin?`);return i.alpha=Ke(i.alpha)?i.alpha:i.alpha===void 0?1:Qi(0,i.alpha,1),i}var Xd={"%":.01,deg:1,grad:.9,rad:180/Math.PI,turn:360},na={function:/^([a-z]+)\(((?:calc\(NaN\)|.)+?)\)$/i,number:/^([-+]?(?:[0-9]*\.)?[0-9]+(e[-+]?[0-9]+)?)$/i,unitValue:RegExp(`(${Object.keys(Xd).join("|")})$`),singleArgument:/\/?\s*(none|NaN|calc\(NaN\)|[-+\w.]+(?:%|deg|g?rad|turn)?)/g};function Lv(e){let t={},r=e.match(na.unitValue)?.[0],i=t.raw=e;return r?(t.type=r==="%"?"<percentage>":"<angle>",t.unit=r,t.unitless=Number(i.slice(0,-r.length)),i=t.unitless*Xd[r]):na.number.test(i)?(i=Number(i),t.type="<number>"):i==="none"?i=null:i==="NaN"||i==="calc(NaN)"?(i=NaN,t.type="<number>"):t.type="<ident>",{value:i,meta:t}}function Rv(e){if(!e)return;e=e.trim();let t=e.match(na.function);if(t){let r=[],i=[],a=!1,s=t[1].toLowerCase(),l=t[2].replace(na.singleArgument,(u,d)=>{let{value:h,meta:f}=Lv(d);return(u.startsWith("/")||s!=="color"&&r.length===3)&&(a=!0),r.push(h),i.push(f),""});return{name:s,args:r,argMeta:i,lastAlpha:a,commas:l.includes(","),rawName:t[1],rawArgs:t[2]}}}function Re(e,t){if(Array.isArray(e))return e.map(i=>Re(i,t));if(!e)throw new TypeError("Empty color reference");fo(e)&&(e=Yd(e,t));let r=e.space||e.spaceId;return typeof r=="string"&&(e.space=ye.get(r)),e.alpha===void 0&&(e.alpha=1),e}var Pv=75e-6,ye=class Gn{constructor(t){this.id=t.id,this.name=t.name,this.base=t.base?Gn.get(t.base):null,this.aliases=t.aliases,this.base&&(this.fromBase=t.fromBase,this.toBase=t.toBase);let r=t.coords??this.base.coords;for(let i in r)"name"in r[i]||(r[i].name=i);this.coords=r,this.white=Ks(t.white??this.base.white??"D65"),this.formats=t.formats??{};for(let i in this.formats){let a=this.formats[i];a.type||="function",a.name||=i}this.formats.color?.id||(this.formats.color={...this.formats.color??{},id:t.cssId||this.id}),t.gamutSpace?this.gamutSpace=t.gamutSpace==="self"?this:Gn.get(t.gamutSpace):this.isPolar?this.gamutSpace=this.base:this.gamutSpace=this,this.gamutSpace.isUnbounded&&(this.inGamut=(i,a)=>!0),this.referred=t.referred,Object.defineProperty(this,"path",{value:$v(this).reverse(),writable:!1,enumerable:!0,configurable:!0}),pr.run("colorspace-init-end",this)}inGamut(t,{epsilon:r=Pv}={}){if(!this.equals(this.gamutSpace))return t=this.to(this.gamutSpace,t),this.gamutSpace.inGamut(t,{epsilon:r});let i=Object.values(this.coords);return t.every((a,s)=>{let l=i[s];if(l.type!=="angle"&&l.range){if(Ke(a))return!0;let[u,d]=l.range;return(u===void 0||a>=u-r)&&(d===void 0||a<=d+r)}return!0})}get isUnbounded(){return Object.values(this.coords).every(t=>!("range"in t))}get cssId(){return this.formats?.color?.id||this.id}get isPolar(){for(let t in this.coords)if(this.coords[t].type==="angle")return!0;return!1}getFormat(t){if(!t)return null;t==="default"?t=Object.values(this.formats)[0]:typeof t=="string"&&(t=this.formats[t]);let r=Kd.get(t,this);return r!==t&&t.name in this.formats&&(this.formats[t.name]=r),r}equals(t){return t?this===t||this.id===t||this.id===t.id:!1}to(t,r){if(arguments.length===1){const u=Re(t);[t,r]=[u.space,u.coords]}if(t=Gn.get(t),this.equals(t))return r;r=r.map(u=>Ke(u)?0:u);let i=this.path,a=t.path,s,l;for(let u=0;u<i.length&&i[u].equals(a[u]);u++)s=i[u],l=u;if(!s)throw new Error(`Cannot convert between color spaces ${this} and ${t}: no connection space was found`);for(let u=i.length-1;u>l;u--)r=i[u].toBase(r);for(let u=l+1;u<a.length;u++)r=a[u].fromBase(r);return r}from(t,r){if(arguments.length===1){const i=Re(t);[t,r]=[i.space,i.coords]}return t=Gn.get(t),t.to(this,r)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let t=[];for(let r in this.coords){let i=this.coords[r],a=i.range||i.refRange;t.push(a?.min??0)}return t}static registry={};static get all(){return[...new Set(Object.values(Gn.registry))]}static register(t,r){if(arguments.length===1&&(r=arguments[0],t=r.id),r=this.get(r),this.registry[t]&&this.registry[t]!==r)throw new Error(`Duplicate color space registration: '${t}'`);if(this.registry[t]=r,arguments.length===1&&r.aliases)for(let i of r.aliases)this.register(i,r);return r}static get(t,...r){if(!t||po(t,this))return t;if(fr(t)==="string"){let i=Gn.registry[t.toLowerCase()];if(!i)throw new TypeError(`No color space found with id = "${t}"`);return i}if(r.length)return Gn.get(...r);throw new TypeError(`${t} is not a valid color space`)}static findFormat(t,r=Gn.all){if(!t)return null;typeof t=="string"&&(t={name:t});for(let i of r)for(let[a,s]of Object.entries(i.formats)){s.name??=a,s.type??="function";let l=(!t.name||s.name===t.name)&&(!t.type||s.type===t.type);if(t.id){let u=s.ids||[s.id],d=Array.isArray(t.id)?t.id:[t.id];l&&=d.some(h=>u.includes(h))}if(l){let u=Kd.get(s,i);return u!==s&&(i.formats[s.name]=u),u}}return null}static resolveCoord(t,r){let i=fr(t),a,s;if(i==="string"?t.includes(".")?[a,s]=t.split("."):[a,s]=[,t]:Array.isArray(t)?[a,s]=t:(a=t.space,s=t.coordId),a=Gn.get(a),a||(a=r),!a)throw new TypeError(`Cannot resolve coordinate reference ${t}: No color space specified and relative references are not allowed here`);if(i=fr(s),i==="number"||i==="string"&&s>=0){let d=Object.entries(a.coords)[s];if(d)return{space:a,id:d[0],index:s,...d[1]}}a=Gn.get(a);let l=s.toLowerCase(),u=0;for(let d in a.coords){let h=a.coords[d];if(d.toLowerCase()===l||h.name?.toLowerCase()===l)return{space:a,id:d,index:u,...h};u++}throw new TypeError(`No "${s}" coordinate found in ${a.name}. Its coordinates are: ${Object.keys(a.coords).join(", ")}`)}static DEFAULT_FORMAT={type:"functions",name:"color"}};function $v(e){let t=[e];for(let r=e;r=r.base;)t.push(r);return t}var zt=new ye({id:"xyz-d65",name:"XYZ D65",coords:{x:{refRange:[0,1],name:"X"},y:{refRange:[0,1],name:"Y"},z:{refRange:[0,1],name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]}),Ft=class extends ye{constructor(e){e.coords||(e.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),e.base||(e.base=zt),e.toXYZ_M&&e.fromXYZ_M&&(e.toBase??=t=>{let r=bt(t,e.toXYZ_M);return this.white!==this.base.white&&(r=ta(this.white,this.base.white,r)),r},e.fromBase??=t=>(t=ta(this.base.white,this.white,t),bt(t,e.fromXYZ_M))),e.referred??="display",super(e)}};function Jd(e,t={}){if(Array.isArray(e))return e.map(d=>Jd(d,t));let{cssProperty:r="background-color",element:i,...a}=t,s=null;try{return Re(e,a)}catch(d){s=d}let{CSS:l,getComputedStyle:u}=globalThis;if(fo(e)&&i&&l&&u&&l.supports(r,e)){let d=i.style[r];e!==d&&(i.style[r]=e);let h=u(i).getPropertyValue(r);if(e!==d&&(i.style[r]=d),h!==e)try{return Re(h,a)}catch(f){s=f}else s={message:"Color value is a valid CSS color, but it could not be resolved :("}}return t.errorMeta&&(t.errorMeta.error=s),null}function ti(e,t){e=Re(e);let r=ye.get(t,t?.space),i=t?.precision,a;return!r||e.space.equals(r)?a=e.coords.slice():a=r.from(e),i===void 0?a:a.map(s=>Vs(s,i))}function cn(e,t){if(e=Re(e),t==="alpha")return e.alpha??1;let{space:r,index:i}=ye.resolveCoord(t,e.space);return ti(e,r)[i]}function Ys(e,t,r,i){return e=Re(e),Array.isArray(t)&&([t,r,i]=[e.space,t,r]),t=ye.get(t),e.coords=t===e.space?r.slice():t.to(e.space,r),i!==void 0&&(e.alpha=i),e}Ys.returns="color";function er(e,t,r){if(e=Re(e),arguments.length===2&&fr(arguments[1])==="object"){let i=arguments[1];for(let a in i)er(e,a,i[a])}else if(typeof r=="function"&&(r=r(cn(e,t))),t==="alpha")e.alpha=r;else{let{space:i,index:a}=ye.resolveCoord(t,e.space),s=ti(e,i);s[a]=r,Ys(e,i,s)}return e}er.returns="color";var Xs=new ye({id:"xyz-d50",name:"XYZ D50",white:"D50",base:zt,fromBase:e=>ta(zt.white,"D50",e),toBase:e=>ta("D50",zt.white,e)}),Dv=216/24389,Qd=24/116,ra=24389/27,Js=Vt.D50,dn=new ye({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:Js,base:Xs,fromBase(e){let t=e.map((r,i)=>r/Js[i]).map(r=>r>Dv?Math.cbrt(r):(ra*r+16)/116);return[116*t[1]-16,500*(t[0]-t[1]),200*(t[1]-t[2])]},toBase(e){let[t,r,i]=e,a=[];return a[1]=(t+16)/116,a[0]=r/500+a[1],a[2]=a[1]-i/200,[a[0]>Qd?Math.pow(a[0],3):(116*a[0]-16)/ra,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/ra,a[2]>Qd?Math.pow(a[2],3):(116*a[2]-16)/ra].map((s,l)=>s*Js[l])},formats:{lab:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <percentage>"]}}});function Sn(e){return typeof e!="number"?e:(e%360+360)%360}function eu(e,t){let[r,i]=t,a=Ke(r),s=Ke(i);if(a&&s)return[r,i];if(a?r=i:s&&(i=r),e==="raw")return t;r=Sn(r),i=Sn(i);let l=i-r;return e==="increasing"?l<0&&(i+=360):e==="decreasing"?l>0&&(r+=360):e==="longer"?-180<l&&l<180&&(l>0?r+=360:i+=360):e==="shorter"&&(l>180?r+=360:l<-180&&(i+=360)),[r,i]}var un=new ye({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:dn,fromBase(e){if(this.ε===void 0){let l=Object.values(this.base.coords)[1].refRange;this.ε=(l[1]-l[0])/1e5}let[t,r,i]=e,a=Math.abs(r)<this.ε&&Math.abs(i)<this.ε,s=a?null:Sn(Math.atan2(i,r)*180/Math.PI);return[t,a?0:Math.sqrt(r**2+i**2),s]},toBase(e){let[t,r,i]=e,a=null,s=null;return Ke(i)||(r=r<0?0:r,a=r*Math.cos(i*Math.PI/180),s=r*Math.sin(i*Math.PI/180)),[t,a,s]},formats:{lch:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <angle>"]}}}),tu=25**7,oa=Math.PI,nu=180/oa,go=oa/180;function ru(e){const t=e*e;return t*t*t*e}function ou(e,t,{kL:r=1,kC:i=1,kH:a=1}={}){[e,t]=Re([e,t]);let[s,l,u]=dn.from(e),d=un.from(dn,[s,l,u])[1],[h,f,b]=dn.from(t),v=un.from(dn,[h,f,b])[1];d<0&&(d=0),v<0&&(v=0);let m=ru((d+v)/2),g=.5*(1-Math.sqrt(m/(m+tu))),k=(1+g)*l,y=(1+g)*f,S=Math.sqrt(k**2+u**2),M=Math.sqrt(y**2+b**2),T=k===0&&u===0?0:Math.atan2(u,k),O=y===0&&b===0?0:Math.atan2(b,y);T<0&&(T+=2*oa),O<0&&(O+=2*oa),T*=nu,O*=nu;let z=h-s,K=M-S,Z=O-T,oe=T+O,G=Math.abs(Z),pe;S*M===0?pe=0:G<=180?pe=Z:Z>180?pe=Z-360:Z<-180?pe=Z+360:ln.warn("the unthinkable has happened");let we=2*Math.sqrt(M*S)*Math.sin(pe*go/2),R=(s+h)/2,X=(S+M)/2,E=ru(X),Q;S*M===0?Q=oe:G<=180?Q=oe/2:oe<360?Q=(oe+360)/2:Q=(oe-360)/2;let Ie=(R-50)**2,ce=1+.015*Ie/Math.sqrt(20+Ie),Ce=1+.045*X,ie=1;ie-=.17*Math.cos((Q-30)*go),ie+=.24*Math.cos(2*Q*go),ie+=.32*Math.cos((3*Q+6)*go),ie-=.2*Math.cos((4*Q-63)*go);let Me=1+.015*X*ie,W=30*Math.exp(-1*((Q-275)/25)**2),F=2*Math.sqrt(E/(E+tu)),Se=-1*Math.sin(2*W*go)*F,ge=(z/(r*ce))**2;return ge+=(K/(i*Ce))**2,ge+=(we/(a*Me))**2,ge+=Se*(K/(i*Ce))*(we/(a*Me)),Math.sqrt(ge)}var zv=[[.819022437996703,.3619062600528904,-.1288737815209879],[.0329836539323885,.9292868615863434,.0361446663506424],[.0481771893596242,.2642395317527308,.6335478284694309]],Bv=[[1.2268798758459243,-.5578149944602171,.2813910456659647],[-.0405757452148008,1.112286803280317,-.0717110580655164],[-.0763729366746601,-.4214933324022432,1.5869240198367816]],Nv=[[.210454268309314,.7936177747023054,-.0040720430116193],[1.9779985324311684,-2.42859224204858,.450593709617411],[.0259040424655478,.7827717124575296,-.8086757549230774]],gr=[[1,.3963377773761749,.2158037573099136],[1,-.1055613458156586,-.0638541728258133],[1,-.0894841775298119,-1.2914855480194092]],Dn=new ye({id:"oklab",name:"Oklab",coords:{l:{refRange:[0,1],name:"Lightness"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:zt,fromBase(e){let t=bt(e,zv);return t[0]=Math.cbrt(t[0]),t[1]=Math.cbrt(t[1]),t[2]=Math.cbrt(t[2]),bt(t,Nv,t)},toBase(e){let t=bt(e,gr);return t[0]=t[0]**3,t[1]=t[1]**3,t[2]=t[2]**3,bt(t,Bv,t)},formats:{oklab:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <percentage>"]}}});function Qs(e,t){[e,t]=Re([e,t]);let[r,i,a]=Dn.from(e),[s,l,u]=Dn.from(t),d=r-s,h=i-l,f=a-u;return Math.sqrt(d**2+h**2+f**2)}var Hv=75e-6;function Vr(e,t,{epsilon:r=Hv}={}){e=Re(e),t||(t=e.space),t=ye.get(t);let i=e.coords;return t!==e.space&&(i=t.from(e)),t.inGamut(i,{epsilon:r})}function mo(e){return{space:e.space,coords:e.coords.slice(),alpha:e.alpha}}function iu(e,t,r="lab"){r=ye.get(r);let i=r.from(e),a=r.from(t);return Math.sqrt(i.reduce((s,l,u)=>{let d=a[u];return Ke(l)||Ke(d)?s:s+(d-l)**2},0))}function Fv(e,t){return iu(e,t,"lab")}var au=Math.PI/180;function Gv(e,t,{l:r=2,c:i=1}={}){[e,t]=Re([e,t]);let[a,s,l]=dn.from(e),[,u,d]=un.from(dn,[a,s,l]),[h,f,b]=dn.from(t),v=un.from(dn,[h,f,b])[1];u<0&&(u=0),v<0&&(v=0);let m=a-h,g=u-v,k=s-f,y=l-b,S=k**2+y**2-g**2,M=.511;a>=16&&(M=.040975*a/(1+.01765*a));let T=.0638*u/(1+.0131*u)+.638,O;Ke(d)&&(d=0),d>=164&&d<=345?O=.56+Math.abs(.2*Math.cos((d+168)*au)):O=.36+Math.abs(.4*Math.cos((d+35)*au));let z=Math.pow(u,4),K=Math.sqrt(z/(z+1900)),Z=T*(K*O+1-K),oe=(m/(r*M))**2;return oe+=(g/(i*T))**2,oe+=S/Z**2,Math.sqrt(oe)}var su=203,el=new ye({id:"xyz-abs-d65",cssId:"--xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:zt,fromBase(e){return e.map(t=>t*su)},toBase(e){return e.map(t=>t/su)}}),ia=1.15,aa=.66,lu=2610/2**14,Wv=2**14/2610,cu=3424/2**12,du=2413/2**7,uu=2392/2**7,Uv=1.7*2523/2**5,hu=2**5/(1.7*2523),sa=-.56,tl=16295499532821565e-27,Vv=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],Zv=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],jv=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],qv=[[1,.13860504327153927,.05804731615611883],[1,-.1386050432715393,-.058047316156118904],[1,-.09601924202631895,-.811891896056039]],fu=new ye({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.21,.21]},bz:{refRange:[-.21,.21]}},base:el,fromBase(e){let[t,r,i]=e,[a,s,l]=bt(bt([ia*t-(ia-1)*i,aa*r-(aa-1)*t,i],Vv).map(function(u){return Mt((cu+du*Mt(u/1e4,lu))/(1+uu*Mt(u/1e4,lu)),Uv)}),jv);return[(1+sa)*a/(1+sa*a)-tl,s,l]},toBase(e){let[t,r,i]=e,[a,s,l]=bt(bt([(t+tl)/(1+sa-sa*(t+tl)),r,i],qv).map(function(d){return 1e4*Mt((cu-Mt(d,hu))/(uu*Mt(d,hu)-du),Wv)}),Zv),u=(a+(ia-1)*l)/ia;return[u,(s+(aa-1)*u)/aa,l]},formats:{jzazbz:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <percentage>"]}}}),nl=new ye({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,.26],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:fu,fromBase:un.fromBase,toBase:un.toBase,formats:{jzczhz:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <angle>"]}}});function Kv(e,t){[e,t]=Re([e,t]);let[r,i,a]=nl.from(e),[s,l,u]=nl.from(t),d=r-s,h=i-l;Ke(a)&&Ke(u)?(a=0,u=0):Ke(a)?a=u:Ke(u)&&(u=a);let f=a-u,b=2*Math.sqrt(i*l)*Math.sin(f/2*(Math.PI/180));return Math.sqrt(d**2+h**2+b**2)}var pu=3424/4096,gu=2413/128,mu=2392/128,vu=2610/16384,Yv=2523/32,Xv=16384/2610,bu=32/2523,Jv=[[.3592832590121217,.6976051147779502,-.035891593232029],[-.1920808463704993,1.100476797037432,.0753748658519118],[.0070797844607479,.0748396662186362,.8433265453898765]],Qv=[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],e4=[[.9999999999999998,.0086090370379328,.111029625003026],[.9999999999999998,-.0086090370379328,-.1110296250030259],[.9999999999999998,.5600313357106791,-.3206271749873188]],t4=[[2.0701522183894223,-1.3263473389671563,.2066510476294053],[.3647385209748072,.6805660249472273,-.0453045459220347],[-.0497472075358123,-.0492609666966131,1.1880659249923042]],rl=new ye({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:el,fromBase(e){return n4(bt(e,Jv))},toBase(e){return bt(r4(e),t4)},formats:{ictcp:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <percentage>"]}}});function n4(e){return bt(e.map(function(t){return((pu+gu*(t/1e4)**vu)/(1+mu*(t/1e4)**vu))**Yv}),Qv)}function r4(e){return bt(e,e4).map(function(t){return 1e4*(Math.max(t**bu-pu,0)/(gu-mu*t**bu))**Xv})}function o4(e,t){[e,t]=Re([e,t]);let[r,i,a]=rl.from(e),[s,l,u]=rl.from(t);return 720*Math.sqrt((r-s)**2+.25*(i-l)**2+(a-u)**2)}function i4(e,t){[e,t]=Re([e,t]);let r=2,[i,a,s]=Dn.from(e),[l,u,d]=Dn.from(t),h=i-l,f=r*(a-u),b=r*(s-d);return Math.sqrt(h**2+f**2+b**2)}var a4=Vt.D65,wu=.42,_u=1/wu,ol=2*Math.PI,yu=[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],s4=[[1.8620678550872327,-1.0112546305316843,.14918677544445175],[.38752654323613717,.6214474419314753,-.008973985167612518],[-.015841498849333856,-.03412293802851557,1.0499644368778496]],l4=[[460,451,288],[460,-891,-261],[460,-220,-6300]],c4={dark:[.8,.525,.8],dim:[.9,.59,.9],average:[1,.69,1]},Zr={h:[20.14,90,164.25,237.53,380.14],e:[.8,.7,1,1.2,.8],H:[0,100,200,300,400]},d4=180/Math.PI,ku=Math.PI/180;function Eu(e,t){return e.map(r=>{const i=Mt(t*Math.abs(r)*.01,wu);return 400*ea(i,r)/(i+27.13)})}function u4(e,t){const r=100/t*27.13**_u;return e.map(i=>{const a=Math.abs(i);return ea(r*Mt(a/(400-a),_u),i)})}function h4(e){let t=Sn(e);t<=Zr.h[0]&&(t+=360);const r=jd(Zr.h,t)-1,[i,a]=Zr.h.slice(r,r+2),[s,l]=Zr.e.slice(r,r+2),u=Zr.H[r],d=(t-i)/s;return u+100*d/(d+(a-t)/l)}function f4(e){let t=(e%400+400)%400;const r=Math.floor(.01*t);t=t%100;const[i,a]=Zr.h.slice(r,r+2),[s,l]=Zr.e.slice(r,r+2);return Sn((t*(l*i-s*a)-100*i*l)/(t*(l-s)-100*l))}function Su(e,t,r,i,a){const s={};s.discounting=a,s.refWhite=e,s.surround=i;const l=e.map(g=>g*100);s.la=t,s.yb=r;const u=l[1],d=bt(l,yu);let h=c4[s.surround];const f=h[0];s.c=h[1],s.nc=h[2];const b=(1/(5*s.la+1))**4;s.fl=b*s.la+.1*(1-b)*(1-b)*Math.cbrt(5*s.la),s.flRoot=s.fl**.25,s.n=s.yb/u,s.z=1.48+Math.sqrt(s.n),s.nbb=.725*s.n**-.2,s.ncb=s.nbb;const v=Math.max(Math.min(f*(1-1/3.6*Math.exp((-s.la-42)/92)),1),0);s.dRgb=d.map(g=>ei(1,u/g,v)),s.dRgbInv=s.dRgb.map(g=>1/g);const m=Eu(d.map((g,k)=>g*s.dRgb[k]),s.fl);return s.aW=s.nbb*(2*m[0]+m[1]+.05*m[2]),s}var Au=Su(a4,64/Math.PI*.2,20,"average",!1);function il(e,t){if(!(e.J!==void 0^e.Q!==void 0))throw new Error("Conversion requires one and only one: 'J' or 'Q'");if(!(e.C!==void 0^e.M!==void 0^e.s!==void 0))throw new Error("Conversion requires one and only one: 'C', 'M' or 's'");if(!(e.h!==void 0^e.H!==void 0))throw new Error("Conversion requires one and only one: 'h' or 'H'");if(e.J===0||e.Q===0)return[0,0,0];let r=0;e.h!==void 0?r=Sn(e.h)*ku:r=f4(e.H)*ku;const i=Math.cos(r),a=Math.sin(r);let s=0;e.J!==void 0?s=Mt(e.J,1/2)*.1:e.Q!==void 0&&(s=.25*t.c*e.Q/((t.aW+4)*t.flRoot));let l=0;e.C!==void 0?l=e.C/s:e.M!==void 0?l=e.M/t.flRoot/s:e.s!==void 0&&(l=4e-4*e.s**2*(t.aW+4)/t.c);const u=Mt(l*Math.pow(1.64-Math.pow(.29,t.n),-.73),10/9),d=.25*(Math.cos(r+2)+3.8),h=t.aW*Mt(s,2/t.c/t.z),f=5e4/13*t.nc*t.ncb*d,b=h/t.nbb,v=23*(b+.305)*js(u,23*f+u*(11*i+108*a));return bt(u4(bt([b,v*i,v*a],l4).map(m=>m*1/1403),t.fl).map((m,g)=>m*t.dRgbInv[g]),s4).map(m=>m/100)}function Mu(e,t){const r=Eu(bt(e.map(k=>k*100),yu).map((k,y)=>k*t.dRgb[y]),t.fl),i=r[0]+(-12*r[1]+r[2])/11,a=(r[0]+r[1]-2*r[2])/9,s=(Math.atan2(a,i)%ol+ol)%ol,l=.25*(Math.cos(s+2)+3.8),u=Mt(5e4/13*t.nc*t.ncb*js(l*Math.sqrt(i**2+a**2),r[0]+r[1]+1.05*r[2]+.305),.9)*Math.pow(1.64-Math.pow(.29,t.n),.73),d=Mt(t.nbb*(2*r[0]+r[1]+.05*r[2])/t.aW,.5*t.c*t.z),h=100*Mt(d,2),f=4/t.c*d*(t.aW+4)*t.flRoot,b=u*d,v=b*t.flRoot,m=Sn(s*d4),g=h4(m);return{J:h,C:b,h:m,s:50*Mt(t.c*u/(t.aW+4),1/2),Q:f,M:v,H:g}}var p4=new ye({id:"cam16-jmh",cssId:"--cam16-jmh",name:"CAM16-JMh",coords:{j:{refRange:[0,100],name:"J"},m:{refRange:[0,105],name:"Colorfulness"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:zt,fromBase(e){this.ε===void 0&&(this.ε=Object.values(this.coords)[1].refRange[1]/1e5);const t=Mu(e,Au),r=Math.abs(t.M)<this.ε;return[t.J,r?0:t.M,r?null:t.h]},toBase(e){return il({J:e[0],M:e[1],h:e[2]},Au)}}),g4=Vt.D65,m4=216/24389,xu=24389/27;function v4(e){return 116*(e>m4?Math.cbrt(e):(xu*e+16)/116)-16}function al(e){return e>8?Math.pow((e+16)/116,3):e/xu}function b4(e,t){let[r,i,a]=e,s=[],l=0;if(a===0)return[0,0,0];let u=al(a);a>0?l=.00379058511492914*a**2+.608983189401032*a+.9155088574762233:l=9514440756550361e-21*a**2+.08693057439788597*a-21.928975842194614;const d=2e-12,h=15;let f=0,b=1/0;for(;f<=h;){s=il({J:l,C:i,h:r},t);const v=Math.abs(s[1]-u);if(v<b){if(v<=d)return s;b=v}l=l-(s[1]-u)*l/(2*s[1]),f+=1}return il({J:l,C:i,h:r},t)}function w4(e,t){const r=v4(e[1]);if(r===0)return[0,0,0];const i=Mu(e,sl);return[Sn(i.h),i.C,r]}var sl=Su(g4,200/Math.PI*al(50),al(50)*100,"average",!1),ni=new ye({id:"hct",name:"HCT",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},c:{refRange:[0,145],name:"Colorfulness"},t:{refRange:[0,100],name:"Tone"}},base:zt,fromBase(e){this.ε===void 0&&(this.ε=Object.values(this.coords)[1].refRange[1]/1e5);let t=w4(e);return t[1]<this.ε&&(t[1]=0,t[0]=null),t},toBase(e){return b4(e,sl)},formats:{color:{id:"--hct",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),_4=Math.PI/180,Iu=[1,.007,.0228];function Cu(e){e[1]<0&&(e=ni.fromBase(ni.toBase(e)));const t=Math.log(Math.max(1+Iu[2]*e[1]*sl.flRoot,1))/Iu[2],r=e[0]*_4,i=t*Math.cos(r),a=t*Math.sin(r);return[e[2],i,a]}function y4(e,t){[e,t]=Re([e,t]);let[r,i,a]=Cu(ni.from(e)),[s,l,u]=Cu(ni.from(t));return Math.sqrt((r-s)**2+(i-l)**2+(a-u)**2)}var vo={deltaE76:Fv,deltaECMC:Gv,deltaE2000:ou,deltaEJz:Kv,deltaEITP:o4,deltaEOK:Qs,deltaEOK2:i4,deltaEHCT:y4};function k4(e){return Math.max(parseFloat(`1e${(e?Math.floor(Math.log10(Math.abs(e))):0)-2}`),1e-6)}var Ou={hct:{method:"hct.c",jnd:2,deltaEMethod:"hct",blackWhiteClamp:{}},"hct-tonal":{method:"hct.c",jnd:0,deltaEMethod:"hct",blackWhiteClamp:{channel:"hct.t",min:0,max:100}}};function mr(e,{method:t=ln.gamut_mapping,space:r=void 0,deltaEMethod:i="",jnd:a=2,blackWhiteClamp:s=void 0}={}){if(e=Re(e),fo(arguments[1])?r=arguments[1]:r||(r=e.space),r=ye.get(r),Vr(e,r,{epsilon:0}))return e;let l;if(t==="css")l=E4(e,{space:r});else{if(t!=="clip"&&!Vr(e,r)){Object.prototype.hasOwnProperty.call(Ou,t)&&({method:t,jnd:a,deltaEMethod:i,blackWhiteClamp:s}=Ou[t]);let u=ou;if(i!==""){for(let h in vo)if("deltae"+i.toLowerCase()===h.toLowerCase()){u=vo[h];break}}a===0&&(a=1e-16);let d=mr(ot(e,r),{method:"clip",space:r});if(u(e,d)>a){if(s&&Object.keys(s).length===3){let S=ye.resolveCoord(s.channel),M=cn(ot(e,S.space),S.id);if(Ke(M)&&(M=0),M>=s.max)return ot({space:"xyz-d65",coords:Vt.D65},e.space);if(M<=s.min)return ot({space:"xyz-d65",coords:[0,0,0]},e.space)}let h=ye.resolveCoord(t),f=h.space,b=h.id,v=ot(e,f);v.coords.forEach((S,M)=>{Ke(S)&&(v.coords[M]=0)});let m=(h.range||h.refRange)[0],g=k4(a),k=m,y=cn(v,b);for(;y-k>g;){let S=mo(v);S=mr(S,{space:r,method:"clip"}),u(v,S)-a<g?k=cn(v,b):y=cn(v,b),er(v,b,(k+y)/2)}l=ot(v,r)}else l=d}else l=ot(e,r);if(t==="clip"||!Vr(l,r,{epsilon:0})){let u=Object.values(r.coords).map(d=>d.range||[]);l.coords=l.coords.map((d,h)=>{let[f,b]=u[h];return f!==void 0&&(d=Math.max(f,d)),b!==void 0&&(d=Math.min(d,b)),d})}}return r!==e.space&&(l=ot(l,e.space)),e.coords=l.coords,e}mr.returns="color";var Tu={WHITE:{space:Dn,coords:[1,0,0],alpha:1},BLACK:{space:Dn,coords:[0,0,0],alpha:1}};function E4(e,{space:t}={}){e=Re(e),t||(t=e.space),t=ye.get(t);const a=ye.get("oklch");if(t.isUnbounded)return ot(e,t);const s=ot(e,a);let l=s.coords[0];if(l>=1){const g=ot(Tu.WHITE,t);return g.alpha=e.alpha,ot(g,t)}if(l<=0){const g=ot(Tu.BLACK,t);return g.alpha=e.alpha,ot(g,t)}if(Vr(s,t,{epsilon:0}))return ot(s,t);function u(g){const k=ot(g,t),y=Object.values(t.coords);return k.coords=k.coords.map((S,M)=>{if("range"in y[M]){const[T,O]=y[M].range;return Qi(T,S,O)}return S}),k}let d=0,h=s.coords[1],f=!0,b=mo(s),v=u(b),m=Qs(v,b);if(m<.02)return v;for(;h-d>1e-4;){const g=(d+h)/2;if(b.coords[1]=g,f&&Vr(b,t,{epsilon:0}))d=g;else if(v=u(b),m=Qs(v,b),m<.02){if(.02-m<1e-4)break;f=!1,d=g}else h=g}return v}function ot(e,t,{inGamut:r}={}){e=Re(e),t=ye.get(t);let i=t.from(e),a={space:t,coords:i,alpha:e.alpha};return r&&(a=mr(a,r===!0?void 0:r)),a}ot.returns="color";function ri(e,t={}){let{precision:r=ln.precision,format:i,inGamut:a=!0,coords:s,alpha:l,commas:u}=t,d,h=Re(e),f=i,b=h.parseMeta;b&&!i&&(b.format.canSerialize()&&(i=b.format,f=b.formatId),s??=b.types,l??=b.alphaType,u??=b.commas),f&&(i=h.space.getFormat(i)??ye.findFormat(f)),i||(i=h.space.getFormat("default")??ye.DEFAULT_FORMAT,f=i.name),i&&i.space&&i.space!==h.space&&(h=ot(h,i.space));let v=h.coords.slice();if(a||=i.toGamut,a&&!Vr(h)&&(v=mr(mo(h),a===!0?void 0:a).coords),i.type==="custom")if(i.serialize)d=i.serialize(v,h.alpha,t);else throw new TypeError(`format ${f} can only be used to parse colors, not for serialization`);else{let m=i.name||"color",g=i.serializeCoords(v,r,s);if(m==="color"){let T=i.id||i.ids?.[0]||h.space.cssId||h.space.id;g.unshift(T)}let k=h.alpha;l!==void 0&&typeof l!="object"&&(l=typeof l=="string"?{type:l}:{include:l});let y=l?.type??"<number>",S=l?.include===!0||i.alpha===!0||l?.include!==!1&&i.alpha!==!1&&k<1,M="";if(u??=i.commas,S){if(r!==null){let T;y==="<percentage>"&&(T="%",k*=100),k=Us(k,{precision:r,unit:T})}M=`${u?",":" /"} ${k}`}d=`${m}(${g.join(u?", ":" ")}${M})`}return d}var oi=new Ft({id:"rec2020-linear",cssId:"--rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],fromXYZ_M:[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]]}),Lu=new Ft({id:"rec2020",name:"REC.2020",base:oi,toBase(e){return e.map(function(t){let r=t<0?-1:1,i=t*r;return r*Math.pow(i,2.4)})},fromBase(e){return e.map(function(t){let r=t<0?-1:1,i=t*r;return r*Math.pow(i,1/2.4)})}}),Ru=new Ft({id:"p3-linear",cssId:"display-p3-linear",name:"Linear P3",white:"D65",toXYZ_M:[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],fromXYZ_M:[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]]}),S4=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],Ct=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]],Pu=new Ft({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:S4,fromXYZ_M:Ct}),$u={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]},Du=Array(3).fill("<percentage> | <number>[0, 255]"),zu=Array(3).fill("<number>[0, 255]"),jr=new Ft({id:"srgb",name:"sRGB",base:Pu,fromBase:e=>e.map(t=>{let r=t<0?-1:1,i=t*r;return i>.0031308?r*(1.055*i**(1/2.4)-.055):12.92*t}),toBase:e=>e.map(t=>{let r=t<0?-1:1,i=t*r;return i<=.04045?t/12.92:r*((i+.055)/1.055)**2.4}),formats:{rgb:{coords:Du},rgb_number:{name:"rgb",commas:!0,coords:zu,alpha:!1},color:{},rgba:{coords:Du,commas:!0,alpha:!0},rgba_number:{name:"rgba",commas:!0,coords:zu},hex:{type:"custom",toGamut:!0,test:e=>/^#(([a-f0-9]{2}){3,4}|[a-f0-9]{3,4})$/i.test(e),parse(e){e.length<=5&&(e=e.replace(/[a-f0-9]/gi,"$&$&"));let t=[];return e.replace(/[a-f0-9]{2}/gi,r=>{t.push(parseInt(r,16)/255)}),{spaceId:"srgb",coords:t.slice(0,3),alpha:t.slice(3)[0]}},serialize:(e,t,{collapse:r=!0,alpha:i}={})=>{(i!==!1&&t<1||i===!0)&&e.push(t),e=e.map(s=>Math.round(s*255));let a=r&&e.every(s=>s%17===0);return"#"+e.map(s=>a?(s/17).toString(16):s.toString(16).padStart(2,"0")).join("")}},keyword:{type:"custom",test:e=>/^[a-z]+$/i.test(e),parse(e){e=e.toLowerCase();let t={spaceId:"srgb",coords:null,alpha:1};if(e==="transparent"?(t.coords=$u.black,t.alpha=0):t.coords=$u[e],t.coords)return t}}}}),Bu=new Ft({id:"p3",cssId:"display-p3",name:"P3",base:Ru,fromBase:jr.fromBase,toBase:jr.toBase});ln.display_space=jr;var A4;if(typeof CSS<"u"&&CSS.supports)for(let e of[dn,Lu,Bu]){let t=ri({space:e,coords:e.getMinCoords(),alpha:1});if(CSS.supports("color",t)){ln.display_space=e;break}}function M4(e,{space:t=ln.display_space,...r}={}){e=Re(e);let i=ri(e,r);if(typeof CSS>"u"||CSS.supports("color",i)||!ln.display_space)i=new String(i),i.color=e;else{let a=e;if((e.coords.some(Ke)||Ke(e.alpha))&&!(A4??=CSS.supports("color","hsl(none 50% 50%)"))&&(a=mo(e),a.coords=a.coords.map(At),a.alpha=At(a.alpha),i=ri(a,r),CSS.supports("color",i)))return i=new String(i),i.color=a,i;a=ot(a,t),i=new String(ri(a,r)),i.color=a}return i}function x4(e,t,{space:r,hue:i="shorter"}={}){e=Re(e),r||=e.space,r=ye.get(r);let a=Object.values(r.coords);[e,t]=[e,t].map(h=>ot(h,r));let[s,l]=[e,t].map(h=>h.coords),u=s.map((h,f)=>{let b=a[f],v=l[f];return b.type==="angle"&&([h,v]=eu(i,[h,v])),Nu(h,v)}),d=Nu(e.alpha,t.alpha);return{space:r,coords:u,alpha:d}}function Nu(e,t){return Ke(e)||Ke(t)?e===t?null:0:e-t}function I4(e,t){return e=Re(e),t=Re(t),e.space===t.space&&e.alpha===t.alpha&&e.coords.every((r,i)=>r===t.coords[i])}function vr(e){return cn(e,[zt,"y"])}function Hu(e,t){er(e,[zt,"y"],t)}function C4(e){Object.defineProperty(e.prototype,"luminance",{get(){return vr(this)},set(t){Hu(this,t)}})}var O4=Object.freeze({__proto__:null,getLuminance:vr,register:C4,setLuminance:Hu});function T4(e,t){e=Re(e),t=Re(t);let r=Math.max(vr(e),0),i=Math.max(vr(t),0);return i>r&&([r,i]=[i,r]),(r+.05)/(i+.05)}var L4=.56,R4=.57,P4=.62,$4=.65,Fu=.022,D4=1.414,z4=.1,B4=5e-4,N4=1.14,Gu=.027,H4=1.14;function Wu(e){return e>=Fu?e:e+(Fu-e)**D4}function bo(e){return(e<0?-1:1)*Math.pow(Math.abs(e),2.4)}function F4(e,t){t=Re(t),e=Re(e);let r,i,a,s,l,u;t=ot(t,"srgb"),[s,l,u]=t.coords.map(m=>Ke(m)?0:m);let d=bo(s)*.2126729+bo(l)*.7151522+bo(u)*.072175;e=ot(e,"srgb"),[s,l,u]=e.coords.map(m=>Ke(m)?0:m);let h=bo(s)*.2126729+bo(l)*.7151522+bo(u)*.072175,f=Wu(d),b=Wu(h),v=b>f;return Math.abs(b-f)<B4?i=0:v?(r=b**L4-f**R4,i=r*N4):(r=b**$4-f**P4,i=r*H4),Math.abs(i)<z4?a=0:i>0?a=i-Gu:a=i+Gu,a*100}function G4(e,t){e=Re(e),t=Re(t);let r=Math.max(vr(e),0),i=Math.max(vr(t),0);i>r&&([r,i]=[i,r]);let a=r+i;return a===0?0:(r-i)/a}var W4=5e4;function U4(e,t){e=Re(e),t=Re(t);let r=Math.max(vr(e),0),i=Math.max(vr(t),0);return i>r&&([r,i]=[i,r]),i===0?W4:(r-i)/i}function V4(e,t){e=Re(e),t=Re(t);let r=cn(e,[dn,"l"]),i=cn(t,[dn,"l"]);return Math.abs(r-i)}var Z4=216/24389,Uu=24/116,la=24389/27,ll=Vt.D65,cl=new ye({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:ll,base:zt,fromBase(e){let t=e.map((r,i)=>r/ll[i]).map(r=>r>Z4?Math.cbrt(r):(la*r+16)/116);return[116*t[1]-16,500*(t[0]-t[1]),200*(t[1]-t[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>Uu?Math.pow(t[0],3):(116*t[0]-16)/la,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/la,t[2]>Uu?Math.pow(t[2],3):(116*t[2]-16)/la].map((r,i)=>r*ll[i])},formats:{"lab-d65":{coords:["<number> | <percentage>","<number> | <percentage>","<number> | <percentage>"]}}}),dl=Math.pow(5,.5)*.5+.5;function j4(e,t){e=Re(e),t=Re(t);let r=cn(e,[cl,"l"]),i=cn(t,[cl,"l"]),a=Math.abs(Math.pow(r,dl)-Math.pow(i,dl)),s=Math.pow(a,1/dl)*Math.SQRT2-40;return s<7.5?0:s}var ca=Object.freeze({__proto__:null,contrastAPCA:F4,contrastDeltaPhi:j4,contrastLstar:V4,contrastMichelson:G4,contrastWCAG21:T4,contrastWeber:U4});function q4(e,t,r){fo(r)&&(r={algorithm:r});let{algorithm:i,...a}=r||{};if(!i){let s=Object.keys(ca).map(l=>l.replace(/^contrast/,"")).join(", ");throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${s}`)}e=Re(e),t=Re(t);for(let s in ca)if("contrast"+i.toLowerCase()===s.toLowerCase())return ca[s](e,t,a);throw new TypeError(`Unknown contrast algorithm: ${i}`)}function da(e){let[t,r,i]=ti(e,zt),a=t+15*r+3*i;return[4*t/a,9*r/a]}function Vu(e){let[t,r,i]=ti(e,zt),a=t+r+i;return[t/a,r/a]}function K4(e){Object.defineProperty(e.prototype,"uv",{get(){return da(this)}}),Object.defineProperty(e.prototype,"xy",{get(){return Vu(this)}})}var Y4=Object.freeze({__proto__:null,register:K4,uv:da,xy:Vu});function ii(e,t,r={}){fo(r)&&(r={method:r});let{method:i=ln.deltaE,...a}=r;for(let s in vo)if("deltae"+i.toLowerCase()===s.toLowerCase())return vo[s](e,t,a);throw new TypeError(`Unknown deltaE method: ${i}`)}function Zu(e,t=.25){return er(e,[ye.get("oklch","lch"),"l"],r=>r*(1+t))}function ju(e,t=.25){return er(e,[ye.get("oklch","lch"),"l"],r=>r*(1-t))}Zu.returns="color",ju.returns="color";var X4=Object.freeze({__proto__:null,darken:ju,lighten:Zu});function qu(e,t,r,i={}){return[e,t]=[Re(e),Re(t)],fr(r)==="object"&&([r,i]=[.5,r]),ai(e,t,i)(r??.5)}function Ku(e,t,r={}){let i;ul(e)&&([i,r]=[e,t],[e,t]=i.rangeArgs.colors);let{maxDeltaE:a,deltaEMethod:s,steps:l=2,maxSteps:u=1e3,...d}=r;i||([e,t]=[Re(e),Re(t)],i=ai(e,t,d));let h=ii(e,t),f=a>0?Math.max(l,Math.ceil(h/a)+1):l,b=[];if(u!==void 0&&(f=Math.min(f,u)),f===1)b=[{p:.5,color:i(.5)}];else{let v=1/(f-1);b=Array.from({length:f},(m,g)=>{let k=g*v;return{p:k,color:i(k)}})}if(a>0){let v=b.reduce((m,g,k)=>{if(k===0)return 0;let y=ii(g.color,b[k-1].color,s);return Math.max(m,y)},0);for(;v>a;){v=0;for(let m=1;m<b.length&&b.length<u;m++){let g=b[m-1],k=b[m],y=(k.p+g.p)/2,S=i(y);v=Math.max(v,ii(S,g.color),ii(S,k.color)),b.splice(m,0,{p:y,color:i(y)}),m++}}}return b=b.map(v=>v.color),b}function ai(e,t,r={}){if(ul(e)){let[d,h]=[e,t];return ai(...d.rangeArgs.colors,{...d.rangeArgs.options,...h})}let{space:i,outputSpace:a,progression:s,premultiplied:l}=r;e=Re(e),t=Re(t),e=mo(e),t=mo(t);let u={colors:[e,t],options:r};if(i?i=ye.get(i):i=ye.registry[ln.interpolationSpace]||e.space,a=a?ye.get(a):i,e=ot(e,i),t=ot(t,i),e=mr(e),t=mr(t),i.coords.h&&i.coords.h.type==="angle"){let d=r.hue=r.hue||"shorter",h=[i,"h"],[f,b]=[cn(e,h),cn(t,h)];Ke(f)&&!Ke(b)?f=b:Ke(b)&&!Ke(f)&&(b=f),[f,b]=eu(d,[f,b]),er(e,h,f),er(t,h,b)}return l&&(e.coords=e.coords.map(d=>d*e.alpha),t.coords=t.coords.map(d=>d*t.alpha)),Object.assign(d=>{d=s?s(d):d;let h=e.coords.map((v,m)=>{let g=t.coords[m];return ei(v,g,d)}),f=ei(e.alpha,t.alpha,d),b={space:i,coords:h,alpha:f};return l&&(b.coords=b.coords.map(v=>v/f)),a!==i&&(b=ot(b,a)),b},{rangeArgs:u})}function ul(e){return fr(e)==="function"&&!!e.rangeArgs}ln.interpolationSpace="lab";function J4(e){e.defineFunction("mix",qu,{returns:"color"}),e.defineFunction("range",ai,{returns:"function<color>"}),e.defineFunction("steps",Ku,{returns:"array<color>"})}var Q4=Object.freeze({__proto__:null,isRange:ul,mix:qu,range:ai,register:J4,steps:Ku}),e3=new ye({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:jr,fromBase:e=>{let t=Math.max(...e),r=Math.min(...e),[i,a,s]=e,[l,u,d]=[null,0,(r+t)/2],h=t-r;if(h!==0){switch(u=d===0||d===1?0:(t-d)/Math.min(d,1-d),t){case i:l=(a-s)/h+(a<s?6:0);break;case a:l=(s-i)/h+2;break;case s:l=(i-a)/h+4}l=l*60}return u<0&&(l+=180,u=Math.abs(u)),l>=360&&(l-=360),[l,u*100,d*100]},toBase:e=>{let[t,r,i]=e;t=t%360,t<0&&(t+=360),r/=100,i/=100;function a(s){let l=(s+t/30)%12,u=r*Math.min(i,1-i);return i-u*Math.max(-1,Math.min(l-3,9-l,1))}return[a(0),a(8),a(4)]},formats:{hsl:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]},hsla:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"],commas:!0,alpha:!0}}}),Yu=new ye({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:jr,fromBase(e){let t=Math.max(...e),r=Math.min(...e),[i,a,s]=e,[l,u,d]=[null,0,t],h=t-r;if(h!==0){switch(t){case i:l=(a-s)/h+(a<s?6:0);break;case a:l=(s-i)/h+2;break;case s:l=(i-a)/h+4}l=l*60}return d&&(u=h/d),l>=360&&(l-=360),[l,u*100,d*100]},toBase(e){let[t,r,i]=e;t=t%360,t<0&&(t+=360),r/=100,i/=100;function a(s){let l=(s+t/60)%6;return i-i*r*Math.max(0,Math.min(l,4-l,1))}return[a(5),a(3),a(1)]},formats:{color:{id:"--hsv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),t3=new ye({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:Yu,fromBase(e){let[t,r,i]=e;return[t,i*(100-r)/100,100-i]},toBase(e){let[t,r,i]=e;r/=100,i/=100;let a=r+i;if(a>=1)return[t,0,r/a*100];let s=1-i;return[t,(s===0?0:1-r/s)*100,s*100]},formats:{hwb:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),Xu=new Ft({id:"a98rgb-linear",cssId:"--a98-rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",toXYZ_M:[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],fromXYZ_M:[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]]}),n3=new Ft({id:"a98rgb",cssId:"a98-rgb",name:"Adobe® 98 RGB compatible",base:Xu,toBase:e=>e.map(t=>Math.pow(Math.abs(t),563/256)*Math.sign(t)),fromBase:e=>e.map(t=>Math.pow(Math.abs(t),256/563)*Math.sign(t))}),Ju=new Ft({id:"prophoto-linear",cssId:"--prophoto-rgb-linear",name:"Linear ProPhoto",white:"D50",base:Xs,toXYZ_M:[[.7977666449006423,.13518129740053308,.0313477341283922],[.2880748288194013,.711835234241873,8993693872564e-17],[0,0,.8251046025104602]],fromXYZ_M:[[1.3457868816471583,-.25557208737979464,-.05110186497554526],[-.5446307051249019,1.5082477428451468,.02052744743642139],[0,0,1.2119675456389452]]}),r3=1/512,o3=16/512,i3=new Ft({id:"prophoto",cssId:"prophoto-rgb",name:"ProPhoto",base:Ju,toBase(e){return e.map(t=>{let r=t<0?-1:1,i=t*r;return i<o3?t/16:r*i**1.8})},fromBase(e){return e.map(t=>{let r=t<0?-1:1,i=t*r;return i>=r3?r*i**(1/1.8):16*t})}}),ua=1.09929682680944,Qu=.018053968510807,a3=new Ft({id:"--rec2020-oetf",name:"REC.2020_Scene_Referred",base:oi,referred:"scene",toBase(e){return e.map(function(t){let r=t<0?-1:1,i=t*r;return i<Qu*4.5?t/4.5:r*Math.pow((i+ua-1)/ua,1/.45)})},fromBase(e){return e.map(function(t){let r=t<0?-1:1,i=t*r;return i>=Qu?r*(ua*Math.pow(i,.45)-(ua-1)):4.5*t})}}),s3=new ye({id:"oklch",name:"OkLCh",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:Dn,fromBase:un.fromBase,toBase:un.toBase,formats:{oklch:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <angle>"]}}}),wo=2*Math.PI,ha=[[4.076741636075958,-3.307711539258063,.2309699031821043],[-1.2684379732850315,2.609757349287688,-.341319376002657],[-.0041960761386756,-.7034186179359362,1.7076146940746117]],fa=[[[-1.8817031,-.80936501],[1.19086277,1.76576728,.59662641,.75515197,.56771245]],[[1.8144408,-1.19445267],[.73956515,-.45954404,.08285427,.12541073,-.14503204]],[[.13110758,1.81333971],[1.35733652,-.00915799,-1.1513021,-.50559606,.00692167]]],hl=Number.MAX_VALUE,si=.206,fl=.03,li=(1+si)/(1+fl);function Bt(e,t){let r=e.length;if(r!==t.length)throw new Error(`Vectors of size ${r} and ${t.length} are not aligned`);let i=0;return e.forEach((a,s)=>{i+=a*t[s]}),i}function ci(e){return .5*(li*e-si+Math.sqrt((li*e-si)*(li*e-si)+4*fl*li*e))}function _o(e){return(e**2+si*e)/(li*(e+fl))}function pl(e){let[t,r]=e;return[r/t,r/(1-t)]}function l3(e,t){return[.11516993+1/(7.4477897+4.1590124*t+e*(-2.19557347+1.75198401*t+e*(-2.13704948-10.02301043*t+e*(-4.24894561+5.38770819*t+4.69891013*e)))),.11239642+1/(1.6132032-.68124379*t+e*(.40370612+.90148123*t+e*(-.27087943+.6122399*t+e*(.00299215-.45399568*t-.14661872*e))))]}function gl(e,t){let r=bt(e,gr);return r[0]=r[0]**3,r[1]=r[1]**3,r[2]=r[2]**3,bt(r,t,r)}function pa(e,t,r,i){let a=d3(e,t,r,i),s=gl([1,a*e,a*t],r),l=Mt(1/Math.max(...s),1/3);return[l,l*a]}function c3(e,t,r,i,a,s,l,u){let d;if(u===void 0&&(u=pa(e,t,s,l)),(r-a)*u[1]-(u[0]-a)*i<=0)d=u[1]*a/(i*u[0]+u[1]*(a-r));else{d=u[1]*(a-1)/(i*(u[0]-1)+u[1]*(a-r));let h=r-a,f=i,b=Bt(gr[0].slice(1),[e,t]),v=Bt(gr[1].slice(1),[e,t]),m=Bt(gr[2].slice(1),[e,t]),g=h+f*b,k=h+f*v,y=h+f*m,S=a*(1-d)+d*r,M=d*i,T=S+M*b,O=S+M*v,z=S+M*m,K=T**3,Z=O**3,oe=z**3,G=3*g*T**2,pe=3*k*O**2,we=3*y*z**2,R=6*g**2*T,X=6*k**2*O,E=6*y**2*z,Q=Bt(s[0],[K,Z,oe])-1,Ie=Bt(s[0],[G,pe,we]),ce=Bt(s[0],[R,X,E]),Ce=Ie/(Ie*Ie-.5*Q*ce),ie=-Q*Ce,Me=Bt(s[1],[K,Z,oe])-1,W=Bt(s[1],[G,pe,we]),F=Bt(s[1],[R,X,E]),Se=W/(W*W-.5*Me*F),ge=-Me*Se,fe=Bt(s[2],[K,Z,oe])-1,qe=Bt(s[2],[G,pe,we]),gt=Bt(s[2],[R,X,E]),Ue=qe/(qe*qe-.5*fe*gt),Ge=-fe*Ue;ie=Ce>=0?ie:hl,ge=Se>=0?ge:hl,Ge=Ue>=0?Ge:hl,d+=Math.min(ie,Math.min(ge,Ge))}return d}function e0(e,t,r){let[i,a,s]=e,l=pa(a,s,t,r),u=c3(a,s,i,1,i,t,r,l),d=pl(l),h=u/Math.min(i*d[0],(1-i)*d[1]),f=l3(a,s),b=i*f[0],v=(1-i)*f[1],m=.9*h*Math.sqrt(Math.sqrt(1/(1/b**4+1/v**4)));return b=i*.4,v=(1-i)*.8,[Math.sqrt(1/(1/b**2+1/v**2)),m,u]}function d3(e,t,r,i){let a,s,l,u,d,h,f,b;Bt(i[0][0],[e,t])>1?([a,s,l,u,d]=i[0][1],[h,f,b]=r[0]):Bt(i[1][0],[e,t])>1?([a,s,l,u,d]=i[1][1],[h,f,b]=r[1]):([a,s,l,u,d]=i[2][1],[h,f,b]=r[2]);let v=a+s*e+l*t+u*e**2+d*e*t,m=Bt(gr[0].slice(1),[e,t]),g=Bt(gr[1].slice(1),[e,t]),k=Bt(gr[2].slice(1),[e,t]),y=1+v*m,S=1+v*g,M=1+v*k,T=y**3,O=S**3,z=M**3,K=3*m*y**2,Z=3*g*S**2,oe=3*k*M**2,G=6*m**2*y,pe=6*g**2*S,we=6*k**2*M,R=h*T+f*O+b*z,X=h*K+f*Z+b*oe,E=h*G+f*pe+b*we;return v=v-R*X/(X**2-.5*R*E),v}function u3(e,t,r){let[i,a,s]=e,l=_o(s),u=null,d=null;if(i=Sn(i)/360,l!==0&&l!==1&&a!==0){let h=Math.cos(wo*i),f=Math.sin(wo*i),[b,v,m]=e0([l,h,f],t,r),g=.8,k=1.25,y,S,M,T;a<g?(y=k*a,S=0,M=g*b,T=1-M/v):(y=5*(a-.8),S=v,M=.2*v**2*1.25**2/b,T=1-M/(m-v));let O=S+y*M/(1-T*y);u=O*h,d=O*f}return[l,u,d]}function h3(e,t,r){let i=1e-7,a=1e-4,s=e[0],l=0,u=ci(s),d=Math.sqrt(e[1]**2+e[2]**2),h=.5+Math.atan2(-e[2],-e[1])/wo;if(u!==0&&u!==1&&d!==0){let[b,v,m]=e0([s,e[1]/d,e[2]/d],t,r),g=.8,k=1.25,y,S,M,T;d<v?(S=g*b,M=1-S/v,T=d/(S+M*d),l=T*g):(y=v,S=.2*v**2*k**2/b,M=1-S/(m-v),T=(d-y)/(S+M*(d-y)),l=g+.2*T)}const f=Math.abs(l)<a;return f||u===0||Math.abs(1-u)<i?(h=null,f||(l=0)):h=Sn(h*360),[h,l,u]}var f3=new ye({id:"okhsl",name:"Okhsl",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,1],name:"Saturation"},l:{range:[0,1],name:"Lightness"}},base:Dn,gamutSpace:"self",fromBase(e){return h3(e,ha,fa)},toBase(e){return u3(e,ha,fa)},formats:{color:{id:"--okhsl",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),t0=new ye({id:"oklrab",name:"Oklrab",coords:{l:{refRange:[0,1],name:"Lightness"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:Dn,fromBase(e){return[ci(e[0]),e[1],e[2]]},toBase(e){return[_o(e[0]),e[1],e[2]]},formats:{color:{coords:["<percentage> | <number>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}}),p3=new ye({id:"oklrch",name:"Oklrch",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:t0,fromBase:un.fromBase,toBase:un.toBase,formats:{color:{coords:["<percentage> | <number>","<number> | <percentage>[0,1]","<number> | <angle>"]}}});function g3(e,t,r){let[i,a,s]=e;i=Sn(i)/360;let l=_o(s),u=null,d=null;if(l!==0&&a!==0){let h=Math.cos(wo*i),f=Math.sin(wo*i),[b,v]=pl(pa(h,f,t,r)),m=.5,g=1-m/b,k=1-a*m/(m+v-v*g*a),y=a*v*m/(m+v-v*g*a);l=s*k;let S=s*y,M=_o(k),T=y*M/k,O=_o(l);S=S*O/l,l=O;let[z,K,Z]=gl([M,h*T,f*T],t),oe=Mt(1/Math.max(Math.max(z,K),Math.max(Z,0)),1/3);l=l*oe,S=S*oe,u=S*h,d=S*f}return[l,u,d]}function m3(e,t,r){let i=1e-4,a=e[0],s=0,l=ci(a),u=Math.sqrt(e[1]**2+e[2]**2),d=.5+Math.atan2(-e[2],-e[1])/wo;if(a!==0&&a!==1&&u!==0){let h=e[1]/u,f=e[2]/u,[b,v]=pl(pa(h,f,t,r)),m=.5,g=1-m/b,k=v/(u+a*v),y=k*a,S=k*u,M=_o(y),T=S*M/y,[O,z,K]=gl([M,h*T,f*T],t),Z=Mt(1/Math.max(Math.max(O,z),Math.max(K,0)),1/3);a=a/Z,u=u/Z,u=u*ci(a)/a,a=ci(a),l=a/y,s=(m+v)*S/(v*m+v*g*S)}return Math.abs(s)<i||l===0?d=null:d=Sn(d*360),[d,s,l]}var v3=new ye({id:"okhsv",name:"Okhsv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,1],name:"Saturation"},v:{range:[0,1],name:"Value"}},base:Dn,gamutSpace:"self",fromBase(e){return m3(e,ha,fa)},toBase(e){return g3(e,ha,fa)},formats:{color:{id:"--okhsv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),n0=Vt.D65,b3=216/24389,r0=24389/27,[o0,i0]=da({space:zt,coords:n0}),a0=new ye({id:"luv",name:"Luv",coords:{l:{refRange:[0,100],name:"Lightness"},u:{refRange:[-215,215]},v:{refRange:[-215,215]}},white:n0,base:zt,fromBase(e){let t=[At(e[0]),At(e[1]),At(e[2])],r=t[1],[i,a]=da({space:zt,coords:t});if(!Number.isFinite(i)||!Number.isFinite(a))return[0,0,0];let s=r<=b3?r0*r:116*Math.cbrt(r)-16;return[s,13*s*(i-o0),13*s*(a-i0)]},toBase(e){let[t,r,i]=e;if(t===0||Ke(t))return[0,0,0];r=At(r),i=At(i);let a=r/(13*t)+o0,s=i/(13*t)+i0,l=t<=8?t/r0:Math.pow((t+16)/116,3);return[l*(9*a/(4*s)),l,l*((12-3*a-20*s)/(4*s))]},formats:{color:{id:"--luv",coords:["<number> | <percentage>","<number> | <percentage>","<number> | <percentage>"]}}}),ml=new ye({id:"lchuv",name:"LChuv",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,220],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:a0,fromBase:un.fromBase,toBase:un.toBase,formats:{color:{id:"--lchuv",coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}}),w3=216/24389,_3=24389/27,s0=Ct[0][0],l0=Ct[0][1],vl=Ct[0][2],c0=Ct[1][0],d0=Ct[1][1],bl=Ct[1][2],u0=Ct[2][0],h0=Ct[2][1],wl=Ct[2][2];function yo(e,t,r){const i=t/(Math.sin(r)-e*Math.cos(r));return i<0?1/0:i}function ga(e){const t=Math.pow(e+16,3)/1560896,r=t>w3?t:e/_3,i=r*(284517*s0-94839*vl),a=r*(838422*vl+769860*l0+731718*s0),s=r*(632260*vl-126452*l0),l=r*(284517*c0-94839*bl),u=r*(838422*bl+769860*d0+731718*c0),d=r*(632260*bl-126452*d0),h=r*(284517*u0-94839*wl),f=r*(838422*wl+769860*h0+731718*u0),b=r*(632260*wl-126452*h0);return{r0s:i/s,r0i:a*e/s,r1s:i/(s+126452),r1i:(a-769860)*e/(s+126452),g0s:l/d,g0i:u*e/d,g1s:l/(d+126452),g1i:(u-769860)*e/(d+126452),b0s:h/b,b0i:f*e/b,b1s:h/(b+126452),b1i:(f-769860)*e/(b+126452)}}function f0(e,t){const r=t/360*Math.PI*2,i=yo(e.r0s,e.r0i,r),a=yo(e.r1s,e.r1i,r),s=yo(e.g0s,e.g0i,r),l=yo(e.g1s,e.g1i,r),u=yo(e.b0s,e.b0i,r),d=yo(e.b1s,e.b1i,r);return Math.min(i,a,s,l,u,d)}var y3=new ye({id:"hsluv",name:"HSLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:ml,gamutSpace:jr,fromBase(e){let[t,r,i]=[At(e[0]),At(e[1]),At(e[2])],a;return t>99.9999999?(a=0,t=100):t<1e-8?(a=0,t=0):a=r/f0(ga(t),i)*100,[i,a,t]},toBase(e){let[t,r,i]=[At(e[0]),At(e[1]),At(e[2])],a;return i>99.9999999?(i=100,a=0):i<1e-8?(i=0,a=0):a=f0(ga(i),t)/100*r,[i,a,t]},formats:{color:{id:"--hsluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});Ct[0][0],Ct[0][1],Ct[0][2],Ct[1][0],Ct[1][1],Ct[1][2],Ct[2][0],Ct[2][1],Ct[2][2];function ko(e,t){return Math.abs(t)/Math.sqrt(Math.pow(e,2)+1)}function p0(e){let t=ko(e.r0s,e.r0i),r=ko(e.r1s,e.r1i),i=ko(e.g0s,e.g0i),a=ko(e.g1s,e.g1i),s=ko(e.b0s,e.b0i),l=ko(e.b1s,e.b1i);return Math.min(t,r,i,a,s,l)}var k3=new ye({id:"hpluv",name:"HPLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:ml,gamutSpace:"self",fromBase(e){let[t,r,i]=[At(e[0]),At(e[1]),At(e[2])],a;return t>99.9999999?(a=0,t=100):t<1e-8?(a=0,t=0):a=r/p0(ga(t))*100,[i,a,t]},toBase(e){let[t,r,i]=[At(e[0]),At(e[1]),At(e[2])],a;return i>99.9999999?(i=100,a=0):i<1e-8?(i=0,a=0):a=p0(ga(i))/100*r,[i,a,t]},formats:{color:{id:"--hpluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),_l=new Ft({id:"rec2100-linear",name:"Linear REC.2100",white:"D65",toBase:oi.toBase,fromBase:oi.fromBase}),g0=203,m0=2610/2**14,E3=2**14/2610,S3=2523/2**5,v0=2**5/2523,b0=3424/2**12,w0=2413/2**7,_0=2392/2**7,A3=new Ft({id:"rec2100pq",cssId:"rec2100-pq",name:"REC.2100-PQ",base:_l,toBase(e){return e.map(function(t){return(Math.max(t**v0-b0,0)/(w0-_0*t**v0))**E3*1e4/g0})},fromBase(e){return e.map(function(t){let r=Math.max(t*g0/1e4,0);return((b0+w0*r**m0)/(1+_0*r**m0))**S3})}}),y0=.17883277,k0=.28466892,E0=.55991073,yl=3.7743,M3=new Ft({id:"rec2100hlg",cssId:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:_l,toBase(e){return e.map(function(t){return t<=.5?t**2/3*yl:(Math.exp((t-E0)/y0)+k0)/12*yl})},fromBase(e){return e.map(function(t){return t/=yl,t<=1/12?Mt(3*t,.5):y0*Math.log(12*t-k0)+E0})}}),S0={};pr.add("chromatic-adaptation-start",e=>{e.options.method&&(e.M=A0(e.W1,e.W2,e.options.method))}),pr.add("chromatic-adaptation-end",e=>{e.M||(e.M=A0(e.W1,e.W2,e.options.method))});function ma({id:e,toCone_M:t,fromCone_M:r}){S0[e]=arguments[0]}function A0(e,t,r="Bradford"){let i=S0[r],[a,s,l]=Qo(i.toCone_M,e),[u,d,h]=Qo(i.toCone_M,t),f=Qo([[u/a,0,0],[0,d/s,0],[0,0,h/l]],i.toCone_M);return Qo(i.fromCone_M,f)}ma({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599363874558397,-1.1293816185800916,.21989740959619328],[.3611914362417676,.6388124632850422,-6370596838649899e-21],[0,0,1.0890636230968613]]}),ma({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929054667121,-.14705425642099013,.15996265166373122],[.4323052697233945,.5183602715367774,.049291228212855594],[-.00852866457517732,.04004282165408486,.96848669578755]]}),ma({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238208355142,-.27886900021828726,.18274517938277307],[.4543690419753592,.4735331543074117,.07209780371722911],[-.009627608738429355,-.00569803121611342,1.0153256399545427]]}),ma({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.0112546305316845,.14918677544445172],[.3875265432361372,.6214474419314753,-.008973985167612521],[-.01584149884933386,-.03412293802851557,1.0499644368778496]]}),Object.assign(Vt,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]}),Vt.ACES=[.32168/.33767,1,.34065/.33767];var M0=new Ft({id:"acescg",cssId:"--acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:Vt.ACES,toXYZ_M:[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],fromXYZ_M:[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]]}),va=2**-16,kl=-.35828683,ba=(Math.log2(65504)+9.72)/17.52,x3=new Ft({id:"acescc",cssId:"--acescc",name:"ACEScc",coords:{r:{range:[kl,ba],name:"Red"},g:{range:[kl,ba],name:"Green"},b:{range:[kl,ba],name:"Blue"}},referred:"scene",base:M0,toBase(e){const t=-.3013698630136986;return e.map(function(r){return r<=t?(2**(r*17.52-9.72)-va)*2:r<ba?2**(r*17.52-9.72):65504})},fromBase(e){return e.map(function(t){return t<=0?(Math.log2(va)+9.72)/17.52:t<va?(Math.log2(va+t*.5)+9.72)/17.52:(Math.log2(t)+9.72)/17.52})}}),x0=Object.freeze({__proto__:null,A98RGB:n3,A98RGB_Linear:Xu,ACEScc:x3,ACEScg:M0,CAM16_JMh:p4,HCT:ni,HPLuv:k3,HSL:e3,HSLuv:y3,HSV:Yu,HWB:t3,ICTCP:rl,JzCzHz:nl,Jzazbz:fu,LCH:un,LCHuv:ml,Lab:dn,Lab_D65:cl,Luv:a0,OKLCH:s3,OKLab:Dn,OKLrCH:p3,OKLrab:t0,Okhsl:f3,Okhsv:v3,P3:Bu,P3_Linear:Ru,ProPhoto:i3,ProPhoto_Linear:Ju,REC_2020:Lu,REC_2020_Linear:oi,REC_2020_Scene_Referred:a3,REC_2100_HLG:M3,REC_2100_Linear:_l,REC_2100_PQ:A3,XYZ_ABS_D65:el,XYZ_D50:Xs,XYZ_D65:zt,sRGB:jr,sRGB_Linear:Pu}),dt=class on{constructor(...t){let r;if(t.length===1){let l={};typeof t[0]=="object"&&Object.getPrototypeOf(t[0]).constructor===Object&&(t[0]={...t[0]}),r=Re(t[0],{parseMeta:l}),l.format&&(this.parseMeta=l)}let i,a,s;r?(i=r.space||r.spaceId,a=r.coords,s=r.alpha):[i,a,s]=t,Object.defineProperty(this,"space",{value:ye.get(i),writable:!1,enumerable:!0,configurable:!0}),this.coords=a?a.slice():[0,0,0],this.alpha=Ke(s)?s:s===void 0?1:Qi(0,s,1);for(let l in this.space.coords)Object.defineProperty(this,l,{get:()=>this.get(l),set:u=>this.set(l,u)})}get spaceId(){return this.space.id}clone(){return new on(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...t){let r=M4(this,...t);return r.color=new on(r.color),r}static get(t,...r){return po(t,this)?t:new on(t,...r)}static try(t,r){if(po(t,this))return t;let i=Jd(t,r);return i?new on(i):null}static defineFunction(t,r,i=r){let{instance:a=!0,returns:s}=i,l=function(...u){let d=r(...u);if(s==="color")d=on.get(d);else if(s==="function<color>"){let h=d;d=function(...f){let b=h(...f);return on.get(b)},Object.assign(d,h)}else s==="array<color>"&&(d=d.map(h=>on.get(h)));return d};t in on||(on[t]=l),a&&(on.prototype[t]=function(...u){return l(this,...u)})}static defineFunctions(t){for(let r in t)on.defineFunction(r,t[r],t[r])}static extend(t){if(t.register)t.register(on);else for(let r in t)on.defineFunction(r,t[r])}};dt.defineFunctions({get:cn,getAll:ti,set:er,setAll:Ys,to:ot,equals:I4,inGamut:Vr,toGamut:mr,distance:iu,deltas:x4,toString:ri}),Object.assign(dt,{util:Ov,hooks:pr,WHITES:Vt,Space:ye,spaces:ye.registry,parse:Yd,defaults:ln});for(let e of Object.keys(x0))ye.register(x0[e]);for(let e in ye.registry)El(e,ye.registry[e]);pr.add("colorspace-init-end",e=>{El(e.id,e),e.aliases?.forEach(t=>{El(t,e)})});function El(e,t){let r=e.replace(/-/g,"_");Object.defineProperty(dt.prototype,r,{get(){let i=this.getAll(e);if(typeof Proxy>"u")return i;let a=new Proxy(i,{has:(s,l)=>{try{return ye.resolveCoord([t,l]),!0}catch{}return Reflect.has(s,l)},get:(s,l,u)=>{if(l&&typeof l!="symbol"&&!(l in s)&&l in a){let{index:d}=ye.resolveCoord([t,l]);if(d>=0)return s[d]}return Reflect.get(s,l,u)},set:(s,l,u,d)=>{if(l&&typeof l!="symbol"&&!(l in s)||Number(l)>=0){let{index:h}=ye.resolveCoord([t,l]);if(h>=0)return s[h]=u,this.setAll(e,s),!0}return Reflect.set(s,l,u,d)}});return a},set(i){this.setAll(e,i)},configurable:!0,enumerable:!0})}dt.extend(vo),dt.extend({deltaE:ii}),Object.assign(dt,{deltaEMethods:vo}),dt.extend(X4),dt.extend({contrast:q4}),dt.extend(Y4),dt.extend(O4),dt.extend(Q4),dt.extend(ca);var Sl={navy:"#001f3f",darkblue:"#1e4f7a",blue:"#1A2F4B",darkgreen:"#062925",green:"#1A3636",grass:"#1B3C53",teal:"#044A42",darkpurple:"#1B0044",purple:"#363062",grape:"#31326F",maroon:"#44000D"},xt={dark:{50:"#C1C2C5",100:"#A6A7AB",200:"#909296",300:"#5c5f66",400:"#373A40",500:"#2C2E33",600:"#25262b",700:"#1A1B1E",800:"#141517",900:"#101113",950:"#000000"},slate:{50:"oklch(98.4% 0.003 247.858)",100:"oklch(96.8% 0.007 247.896)",200:"oklch(92.9% 0.013 255.508)",300:"oklch(86.9% 0.022 252.894)",400:"oklch(70.4% 0.04 256.788)",500:"oklch(55.4% 0.046 257.417)",600:"oklch(44.6% 0.043 257.281)",700:"oklch(37.2% 0.044 257.287)",800:"oklch(27.9% 0.041 260.031)",900:"oklch(20.8% 0.042 265.755)",950:"oklch(12.9% 0.042 264.695)"},gray:{50:"oklch(98.5% 0.002 247.839)",100:"oklch(96.7% 0.003 264.542)",200:"oklch(92.8% 0.006 264.531)",300:"oklch(87.2% 0.01 258.338)",400:"oklch(70.7% 0.022 261.325)",500:"oklch(55.1% 0.027 264.364)",600:"oklch(44.6% 0.03 256.802)",700:"oklch(37.3% 0.034 259.733)",800:"oklch(27.8% 0.033 256.848)",900:"oklch(21% 0.034 264.665)",950:"oklch(13% 0.028 261.692)"},zinc:{50:"oklch(98.5% 0 0)",100:"oklch(96.7% 0.001 286.375)",200:"oklch(92% 0.004 286.32)",300:"oklch(87.1% 0.006 286.286)",400:"oklch(70.5% 0.015 286.067)",500:"oklch(55.2% 0.016 285.938)",600:"oklch(44.2% 0.017 285.786)",700:"oklch(37% 0.013 285.805)",800:"oklch(27.4% 0.006 286.033)",900:"oklch(21% 0.006 285.885)",950:"oklch(14.1% 0.005 285.823)"},neutral:{50:"oklch(98.5% 0 0)",100:"oklch(97% 0 0)",200:"oklch(92.2% 0 0)",300:"oklch(87% 0 0)",400:"oklch(70.8% 0 0)",500:"oklch(55.6% 0 0)",600:"oklch(43.9% 0 0)",700:"oklch(37.1% 0 0)",800:"oklch(26.9% 0 0)",900:"oklch(20.5% 0 0)",950:"oklch(14.5% 0 0)"},stone:{50:"oklch(98.5% 0.001 106.423)",100:"oklch(97% 0.001 106.424)",200:"oklch(92.3% 0.003 48.717)",300:"oklch(86.9% 0.005 56.366)",400:"oklch(70.9% 0.01 56.259)",500:"oklch(55.3% 0.013 58.071)",600:"oklch(44.4% 0.011 73.639)",700:"oklch(37.4% 0.01 67.558)",800:"oklch(26.8% 0.007 34.298)",900:"oklch(21.6% 0.006 56.043)",950:"oklch(14.7% 0.004 49.25)"},red:{50:"oklch(97.1% 0.013 17.38)",100:"oklch(93.6% 0.032 17.717)",200:"oklch(88.5% 0.062 18.334)",300:"oklch(80.8% 0.114 19.571)",400:"oklch(70.4% 0.191 22.216)",500:"oklch(63.7% 0.237 25.331)",600:"oklch(57.7% 0.245 27.325)",700:"oklch(50.5% 0.213 27.518)",800:"oklch(44.4% 0.177 26.899)",900:"oklch(39.6% 0.141 25.723)",950:"oklch(25.8% 0.092 26.042)"},orange:{50:"oklch(98% 0.016 73.684)",100:"oklch(95.4% 0.038 75.164)",200:"oklch(90.1% 0.076 70.697)",300:"oklch(83.7% 0.128 66.29)",400:"oklch(75% 0.183 55.934)",500:"oklch(70.5% 0.213 47.604)",600:"oklch(64.6% 0.222 41.116)",700:"oklch(55.3% 0.195 38.402)",800:"oklch(47% 0.157 37.304)",900:"oklch(40.8% 0.123 38.172)",950:"oklch(26.6% 0.079 36.259)"},amber:{50:"oklch(98.7% 0.022 95.277)",100:"oklch(96.2% 0.059 95.617)",200:"oklch(92.4% 0.12 95.746)",300:"oklch(87.9% 0.169 91.605)",400:"oklch(82.8% 0.189 84.429)",500:"oklch(76.9% 0.188 70.08)",600:"oklch(66.6% 0.179 58.318)",700:"oklch(55.5% 0.163 48.998)",800:"oklch(47.3% 0.137 46.201)",900:"oklch(41.4% 0.112 45.904)",950:"oklch(27.9% 0.077 45.635)"},yellow:{50:"oklch(98.7% 0.026 102.212)",100:"oklch(97.3% 0.071 103.193)",200:"oklch(94.5% 0.129 101.54)",300:"oklch(90.5% 0.182 98.111)",400:"oklch(85.2% 0.199 91.936)",500:"oklch(79.5% 0.184 86.047)",600:"oklch(68.1% 0.162 75.834)",700:"oklch(55.4% 0.135 66.442)",800:"oklch(47.6% 0.114 61.907)",900:"oklch(42.1% 0.095 57.708)",950:"oklch(28.6% 0.066 53.813)"},lime:{50:"oklch(98.6% 0.031 120.757)",100:"oklch(96.7% 0.067 122.328)",200:"oklch(93.8% 0.127 124.321)",300:"oklch(89.7% 0.196 126.665)",400:"oklch(84.1% 0.238 128.85)",500:"oklch(76.8% 0.233 130.85)",600:"oklch(64.8% 0.2 131.684)",700:"oklch(53.2% 0.157 131.589)",800:"oklch(45.3% 0.124 130.933)",900:"oklch(40.5% 0.101 131.063)",950:"oklch(27.4% 0.072 132.109)"},green:{50:"oklch(98.2% 0.018 155.826)",100:"oklch(96.2% 0.044 156.743)",200:"oklch(92.5% 0.084 155.995)",300:"oklch(87.1% 0.15 154.449)",400:"oklch(79.2% 0.209 151.711)",500:"oklch(72.3% 0.219 149.579)",600:"oklch(62.7% 0.194 149.214)",700:"oklch(52.7% 0.154 150.069)",800:"oklch(44.8% 0.119 151.328)",900:"oklch(39.3% 0.095 152.535)",950:"oklch(26.6% 0.065 152.934)"},emerald:{50:"oklch(97.9% 0.021 166.113)",100:"oklch(95% 0.052 163.051)",200:"oklch(90.5% 0.093 164.15)",300:"oklch(84.5% 0.143 164.978)",400:"oklch(76.5% 0.177 163.223)",500:"oklch(69.6% 0.17 162.48)",600:"oklch(59.6% 0.145 163.225)",700:"oklch(50.8% 0.118 165.612)",800:"oklch(43.2% 0.095 166.913)",900:"oklch(37.8% 0.077 168.94)",950:"oklch(26.2% 0.051 172.552)"},teal:{50:"oklch(98.4% 0.014 180.72)",100:"oklch(95.3% 0.051 180.801)",200:"oklch(91% 0.096 180.426)",300:"oklch(85.5% 0.138 181.071)",400:"oklch(77.7% 0.152 181.912)",500:"oklch(70.4% 0.14 182.503)",600:"oklch(60% 0.118 184.704)",700:"oklch(51.1% 0.096 186.391)",800:"oklch(43.7% 0.078 188.216)",900:"oklch(38.6% 0.063 188.416)",950:"oklch(27.7% 0.046 192.524)"},cyan:{50:"oklch(98.4% 0.019 200.873)",100:"oklch(95.6% 0.045 203.388)",200:"oklch(91.7% 0.08 205.041)",300:"oklch(86.5% 0.127 207.078)",400:"oklch(78.9% 0.154 211.53)",500:"oklch(71.5% 0.143 215.221)",600:"oklch(60.9% 0.126 221.723)",700:"oklch(52% 0.105 223.128)",800:"oklch(45% 0.085 224.283)",900:"oklch(39.8% 0.07 227.392)",950:"oklch(30.2% 0.056 229.695)"},sky:{50:"oklch(97.7% 0.013 236.62)",100:"oklch(95.1% 0.026 236.824)",200:"oklch(90.1% 0.058 230.902)",300:"oklch(82.8% 0.111 230.318)",400:"oklch(74.6% 0.16 232.661)",500:"oklch(68.5% 0.169 237.323)",600:"oklch(58.8% 0.158 241.966)",700:"oklch(50% 0.134 242.749)",800:"oklch(44.3% 0.11 240.79)",900:"oklch(39.1% 0.09 240.876)",950:"oklch(29.3% 0.066 243.157)"},blue:{50:"oklch(97% 0.014 254.604)",100:"oklch(93.2% 0.032 255.585)",200:"oklch(88.2% 0.059 254.128)",300:"oklch(80.9% 0.105 251.813)",400:"oklch(70.7% 0.165 254.624)",500:"oklch(62.3% 0.214 259.815)",600:"oklch(54.6% 0.245 262.881)",700:"oklch(48.8% 0.243 264.376)",800:"oklch(42.4% 0.199 265.638)",900:"oklch(37.9% 0.146 265.522)",950:"oklch(28.2% 0.091 267.935)"},indigo:{50:"oklch(96.2% 0.018 272.314)",100:"oklch(93% 0.034 272.788)",200:"oklch(87% 0.065 274.039)",300:"oklch(78.5% 0.115 274.713)",400:"oklch(67.3% 0.182 276.935)",500:"oklch(58.5% 0.233 277.117)",600:"oklch(51.1% 0.262 276.966)",700:"oklch(45.7% 0.24 277.023)",800:"oklch(39.8% 0.195 277.366)",900:"oklch(35.9% 0.144 278.697)",950:"oklch(25.7% 0.09 281.288)"},violet:{50:"oklch(96.9% 0.016 293.756)",100:"oklch(94.3% 0.029 294.588)",200:"oklch(89.4% 0.057 293.283)",300:"oklch(81.1% 0.111 293.571)",400:"oklch(70.2% 0.183 293.541)",500:"oklch(60.6% 0.25 292.717)",600:"oklch(54.1% 0.281 293.009)",700:"oklch(49.1% 0.27 292.581)",800:"oklch(43.2% 0.232 292.759)",900:"oklch(38% 0.189 293.745)",950:"oklch(28.3% 0.141 291.089)"},purple:{50:"oklch(97.7% 0.014 308.299)",100:"oklch(94.6% 0.033 307.174)",200:"oklch(90.2% 0.063 306.703)",300:"oklch(82.7% 0.119 306.383)",400:"oklch(71.4% 0.203 305.504)",500:"oklch(62.7% 0.265 303.9)",600:"oklch(55.8% 0.288 302.321)",700:"oklch(49.6% 0.265 301.924)",800:"oklch(43.8% 0.218 303.724)",900:"oklch(38.1% 0.176 304.987)",950:"oklch(29.1% 0.149 302.717)"},fuchsia:{50:"oklch(97.7% 0.017 320.058)",100:"oklch(95.2% 0.037 318.852)",200:"oklch(90.3% 0.076 319.62)",300:"oklch(83.3% 0.145 321.434)",400:"oklch(74% 0.238 322.16)",500:"oklch(66.7% 0.295 322.15)",600:"oklch(59.1% 0.293 322.896)",700:"oklch(51.8% 0.253 323.949)",800:"oklch(45.2% 0.211 324.591)",900:"oklch(40.1% 0.17 325.612)",950:"oklch(29.3% 0.136 325.661)"},pink:{50:"oklch(97.1% 0.014 343.198)",100:"oklch(94.8% 0.028 342.258)",200:"oklch(89.9% 0.061 343.231)",300:"oklch(82.3% 0.12 346.018)",400:"oklch(71.8% 0.202 349.761)",500:"oklch(65.6% 0.241 354.308)",600:"oklch(59.2% 0.249 0.584)",700:"oklch(52.5% 0.223 3.958)",800:"oklch(45.9% 0.187 3.815)",900:"oklch(40.8% 0.153 2.432)",950:"oklch(28.4% 0.109 3.907)"},rose:{50:"oklch(96.9% 0.015 12.422)",100:"oklch(94.1% 0.03 12.58)",200:"oklch(89.2% 0.058 10.001)",300:"oklch(81% 0.117 11.638)",400:"oklch(71.2% 0.194 13.428)",500:"oklch(64.5% 0.246 16.439)",600:"oklch(58.6% 0.253 17.585)",700:"oklch(51.4% 0.222 16.935)",800:"oklch(45.5% 0.188 13.697)",900:"oklch(41% 0.159 10.272)",950:"oklch(27.1% 0.105 12.094)"}};function I3(e){try{dt.get(e)}catch{return!0}return dt.contrast(e,"white","Lstar")>dt.contrast(e,"black","Lstar")}function Eo(e){return I3(e)?"#FFFFFF":"#000000"}var C3=xe.default.fromPairs(xe.default.entries(Ns).map(([e,t])=>[e,Nd(t)])),{IconAdjustmentsHorizontal:wS,IconApiBook:_S,IconArrowsHorizontal:yS,IconArrowsLeftRight:kS,IconArrowAutofitDown:ES,IconArrowAutofitHeight:O3,IconArrowAutofitLeft:SS,IconArrowAutofitRight:AS,IconArrowAutofitWidth:T3,IconArrowBigLeft:MS,IconArrowBigRight:xS,IconArrowsMove:IS,IconArrowsMoveVertical:CS,IconArrowsVertical:OS,IconBook:TS,IconBookOff:LS,IconBookArrowLeft:RS,IconBookArrowRight:PS,IconBooksReturn:$S,IconBookUpload:DS,IconBookmark:L3,IconBookmarkOff:R3,IconBookmarks:zS,IconBoxAlignTop:BS,IconCategory:P3,IconCheck:wa,IconChevronLeft:NS,IconChevronRight:HS,IconAlertCircle:FS,IconCircleCheck:GS,IconCircleX:WS,IconHelp:US,IconInfoCircle:VS,IconComic1:ZS,IconComic1Flat:jS,IconComic2:qS,IconComic2Flat:KS,IconComic3:YS,IconComic3Flat:XS,IconDeviceFloppy:JS,IconDotsVertical:QS,IconEReader1:eA,IconEReader1Flat:tA,IconEReader2:nA,IconEReader2Flat:rA,IconExternalLink:oA,IconEye:$3,IconEyeOff:D3,IconFileDownload:iA,IconFilePercent:aA,IconFolderOpen:sA,IconHandClick:lA,IconKeyboard:cA,IconLayoutDashboard:dA,IconLayoutBottombar:uA,IconLayoutBottombarInactive:hA,IconLayoutSidebar:fA,IconLayoutSidebarInactive:pA,IconLayoutSidebarRight:gA,IconLayoutSidebarRightInactive:mA,IconListNumbers:vA,IconLoader2:bA,IconLocationCog:wA,IconMenu2:_A,IconMenuDeep:yA,IconMessage:kA,IconMoon:EA,IconPage:SA,IconPageFlat:AA,IconPalette:MA,IconPencil:xA,IconPencilCog:IA,IconPhoto:CA,IconPhotoOff:OA,IconPin:TA,IconPlayerPause:LA,IconPlayerPlay:RA,IconRefresh:z3,IconSettings:PA,IconSettingsOff:$A,IconSpacingHorizontal:B3,IconSpacingVertical:DA,IconSun:zA,IconTrash:BA,IconWorldCog:NA,IconX:Al,IconZoom:HA,IconZoomCancel:N3,IconZoomIn:H3,IconZoomInArea:FA,IconZoomOut:F3,IconZoomOutArea:GA,IconZoomPan:WA}=C3,br=class extends Xe{constructor(...t){super(...t),this.color="#000000",this.size=26,this.radius="50%",this.contrastColor="#FFFFFF",this.checked=!1}static{this.styles=_t`
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
  `}willUpdate(t){t.has("color")&&(this.contrastColor=Eo(this.color)),t.has("selected")&&(this.checked=this.color.toLowerCase()===this.selected?.toLowerCase())}handleClick(){this.dispatchEvent(new CustomEvent("input",{detail:{value:this.color},bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("change",{detail:{value:this.color},bubbles:!0,composed:!0}))}render(){const t={width:`${this.size}px`,height:`${this.size}px`},r={"--radius":typeof this.radius=="number"?`${this.radius}px`:this.radius,"--color":this.color,"--contrast-color":this.contrastColor};return re`
      <div style=${Un(t)}>
        <div
          class="swatch"
          style=${Un(r)}
          @click=${this.handleClick}
        >
          <slot></slot>
          <span class="check-icon"> ${wa} </span>
        </div>
      </div>
    `}};$([j({type:String})],br.prototype,"color",void 0),$([j({type:String})],br.prototype,"selected",void 0),$([j({type:Number})],br.prototype,"size",void 0),$([j({type:String})],br.prototype,"radius",void 0),$([j({state:!0})],br.prototype,"contrastColor",void 0),$([j({type:Boolean,reflect:!0})],br.prototype,"checked",void 0),br=$([rt("color-swatch")],br);function G3(e){const[t,r,i]=e.to("oklch").coords.map(d=>d??0),a=[.95,.9,.8,.7,.6,.5,.4,.3,.2,.1,.05],s=a.map(d=>new dt("oklch",[d,r,i]).toString({format:"hex"}));let l=-1,u=1/0;for(let d=0;d<a.length;d++){const h=Math.abs(a[d]-t);h<u&&(u=h,l=d)}return l!==-1&&(s[l]=e.toString({format:"hex"})),s.map(d=>d.toUpperCase())}function W3(e){const t=e.to("hsl"),r=[.97,.9,.8,.7,.6,.5,.4,.3,.2,.1,.05],i=[];for(const a of r){const s=t.clone();s.coords[2]=a*100;const l=s.coords[1]??0;a>.8?s.coords[1]=l*.4:a>.6?s.coords[1]=l*.8:a<.3&&(s.coords[1]=Math.min(100,l*1.1)),i.push(s.toString({format:"hex"}).toUpperCase())}return i}function U3(e){const t=[],r=[95,90,80,70,60,50,40,30,20,10,5],i=e.to("hsl");for(const a of r){const s=i.clone();s.coords[2]=a,t.push(s.toString({format:"hex"}).toUpperCase())}return t}function V3(e){const t=new Array(11).fill(""),r=e.to("hsl"),i={lightest:{lightness:95,rotate:-10,saturate:-30},darkest:{lightness:10,rotate:10,saturate:10}},a=5,s=5,l=(i.lightest.lightness-50)/a,u=(50-i.darkest.lightness)/s,d=i.lightest.rotate/a,h=i.darkest.rotate/s,f=i.lightest.saturate/a,b=i.darkest.saturate/s;for(let v=1;v<=a;v++){const m=a-v,g=r.clone();g.coords[2]=(g.coords[2]??0)+l*(v-.5),g.coords[0]=(g.coords[0]??0)+d*v,g.coords[1]=(g.coords[1]??0)+f*v,t[m]=g.toString({format:"hex"})}t[5]=r.clone().toString({format:"hex"});for(let v=1;v<=s;v++){const m=a+v,g=r.clone();g.coords[2]=(g.coords[2]??0)-u*(v-.5),g.coords[0]=(g.coords[0]??0)+h*v,g.coords[1]=(g.coords[1]??0)+b*v,t[m]=g.toString({format:"hex"})}return t}function Z3(e){const[t,r,i]=e.to("hsl").coords.map(s=>s??0),a=new Array(11);a[5]=e.toString({format:"hex"});for(let s=0;s<5;s++){const l=(5-s)/6,u=i+(100-i)*l;a[s]=new dt("hsl",[t,r-r*l,u]).toString({format:"hex"})}for(let s=0;s<5;s++){const l=(s+1)/6,u=i-i*l,d=r+(100-r)*l;a[s+6]=new dt("hsl",[t,d,u]).toString({format:"hex"})}return a}function I0(e,t="steps"){let r;try{r=dt.get(e)}catch{r=dt.get(Sl.navy)}switch(t){case"saturation":return W3(r);case"lightness":return U3(r);case"mantine":return Z3(r);case"chakra":return V3(r);default:return G3(r)}}var wr=class extends Xe{constructor(...t){super(...t),this.baseColor="#228be6",this.mode="steps",this.orientation="horizontal",this.value="",this.gradient=[]}static{this.styles=_t`
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
  `}willUpdate(t){(t.has("baseColor")||t.has("mode"))&&(this.gradient=I0(this.baseColor,this.mode)??[])}handleSwatchClick(t){this.value=t,this.dispatchEvent(new CustomEvent("input",{detail:{value:this.value},bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))}render(){return re`
      ${this.gradient.map(t=>re`
          <div
            class="swatch"
            ?checked=${this.selected&&t.toLowerCase()===this.selected.toLowerCase()}
            title=${t}
            @click=${()=>this.handleSwatchClick(t)}
          >
            <div
              class="swatch-inner"
              style="--color: ${t}; --text-color: ${Eo(t)}"
            >
              <span class="checkmark">${wa}</span>
            </div>
          </div>
        `)}
    `}};$([j({type:String})],wr.prototype,"baseColor",void 0),$([j({type:String})],wr.prototype,"mode",void 0),$([j({type:String,reflect:!0})],wr.prototype,"orientation",void 0),$([j({type:String})],wr.prototype,"selected",void 0),$([j({type:String,reflect:!0})],wr.prototype,"value",void 0),$([Dt()],wr.prototype,"gradient",void 0),wr=$([rt("color-palette")],wr);var _a=class extends Xe{constructor(...t){super(...t),this.value=""}static{this.styles=_t`
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
  `}handleColorClick(t){this.value=t.currentTarget.title,this.dispatchEvent(new CustomEvent("input",{detail:{value:this.value},bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))}render(){const t=xe.default.keys(xt).filter(i=>!["dark","gray","zinc","neutral","stone"].includes(i)),r=[200,300,400,500,600,700,800,900,950];return t.map(i=>re` <div class="SwatchGroup">
        <span class="ColorName">${i}</span>
        <div class="Swatches">${r.map(a=>{const s=xt[i][a],l=Eo(s);return re`
          <span
            title="${s}"
            class="${yt({ThemeRadio:!0,selected:this.selected?.toLowerCase()===s.toLowerCase()})}"
            style="background-color: ${s}; color: ${l}"
            @click=${this.handleColorClick}
          >
            ${wa}
          </span>
        `})}</div>
      </div>`)}};$([j({type:String,reflect:!0})],_a.prototype,"value",void 0),$([j({type:String})],_a.prototype,"selected",void 0),_a=$([rt("color-panel")],_a);var Nt=class extends Xe{constructor(...t){super(...t),this.value="#228be6",this.defaultValue="#228be6",this.label="",this.hint="",this.name="",this.disabled=!1,this.size="medium",this.swatches=null,this.mode="popup",this.opened=!1,this.popupDirection="left",this.sourceSpace="srgb",this.hsv={h:0,s:0,v:0},this.saturationThumbPosition={x:0,y:0},this.hueThumbPosition=0,this.isDraggingSaturation=!1,this.isDraggingHue=!1}static{this.styles=_t`
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
  `}connectedCallback(){super.connectedCallback(),this.updateStateFromValue(this.value),window.addEventListener("mousemove",this.handleDrag.bind(this)),window.addEventListener("mouseup",this.handleDragEnd.bind(this)),window.addEventListener("touchmove",this.handleDrag.bind(this),{passive:!1}),window.addEventListener("touchend",this.handleDragEnd.bind(this))}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("mousemove",this.handleDrag.bind(this)),window.removeEventListener("mouseup",this.handleDragEnd.bind(this)),window.removeEventListener("touchmove",this.handleDrag.bind(this)),window.removeEventListener("touchend",this.handleDragEnd.bind(this)),window.removeEventListener("click",this.handleClickOutside.bind(this))}updated(t){t.has("mode")&&(this.mode==="popup"?window.addEventListener("click",this.handleClickOutside.bind(this)):window.removeEventListener("click",this.handleClickOutside.bind(this)))}willUpdate(t){t.has("value")&&this.updateStateFromValue(this.value),t.has("mode")&&this.mode==="inline"&&(this.opened=!1)}handleClickOutside(t){this.opened&&!t.composedPath().includes(this)&&this.hide()}show(){this.disabled||this.opened||(this.opened=!0,this.dispatchEvent(new CustomEvent("wa-show",{bubbles:!0,composed:!0})),setTimeout(()=>{this.dispatchEvent(new CustomEvent("wa-after-show",{bubbles:!0,composed:!0}))},150))}hide(){this.opened&&(this.opened=!1,this.dispatchEvent(new CustomEvent("wa-hide",{bubbles:!0,composed:!0})),setTimeout(()=>{this.dispatchEvent(new CustomEvent("wa-after-hide",{bubbles:!0,composed:!0}))},150))}togglePopup(){if(this.mode==="popup")if(this.opened)this.hide();else{const t=this.getBoundingClientRect(),r=250;let i;const a=this.closest("mov-drawer");if(a?.shadowRoot){const s=a.shadowRoot.querySelector("dialog");s?i=s.getBoundingClientRect():i={left:0,right:window.innerWidth}}else i={left:0,right:window.innerWidth};t.left+r>i.right?t.right-r>i.left?this.popupDirection="right":this.popupDirection="left":this.popupDirection="left",this.show()}}isSameColor(t,r){return!t||!r?!1:dt.deltaE(t,r,{method:"2000"})<1}renderCheckIcon(t){return re`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
        style=${Un({stroke:Eo(t)})}
      >
        <path d="M5 12l5 5l10 -10" />
      </svg>
    `}renderPickerBody(){const t={backgroundColor:`hsl(${this.hsv.h}, 100%, 50%)`},r={h:this.hsv.h,s:this.hsv.s*100,v:this.hsv.v*100},i={top:`${this.saturationThumbPosition.y}%`,left:`${this.saturationThumbPosition.x}%`,backgroundColor:new dt("hsv",[r.h,r.s,r.v]).toString({format:"hex"})},a={left:`${this.hueThumbPosition}%`};return re`
      <div
        class="saturation-panel"
        style=${Un(t)}
        @mousedown=${this.handleSaturationDragStart.bind(this)}
        @touchstart=${this.handleSaturationDragStart.bind(this)}
      >
        <div class="saturation-overlay-1"></div>
        <div class="saturation-overlay-2"></div>
        <div
          class="saturation-thumb"
          style=${Un(i)}
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
            style=${Un(a)}
          ></div>
        </div>
      </div>

      <div class="swatches">
        ${(this.swatches||xe.default.entries(xt).filter(([s])=>!["dark","gray","zinc","neutral","stone"].includes(s)).map(([,s])=>s[600])).map(s=>re`
            <button
              class="swatch"
              title=${s}
              style=${Un({backgroundColor:s})}
              @click=${()=>this.selectSwatch(s)}
            >
              ${this.isSameColor(this.value,s)?this.renderCheckIcon(s):""}
            </button>
          `)}
      </div>
    `}render(){const t={"picker-container":!0,popup:this.mode==="popup",right:this.popupDirection==="right"},r=this.renderPickerBody();return this.mode==="popup"?re`
        <div
          class="popup-trigger"
          @click=${this.togglePopup}
        >
          <div
            class="preview"
            style=${Un({backgroundColor:this.value})}
          ></div>
        </div>
        ${this.opened?re`<div class=${yt(t)}>${r}</div>`:""}
      `:re`<div class=${yt(t)}>${r}</div>`}parseColor(t){try{return dt.get(t)}catch(r){return console.error(`[mov-color-picker] Invalid color value: "${t}"`,r),null}}colorToHsv(t){let[r,i,a]=t.to("srgb").to("hsv").coords.map(s=>s??0);return Number.isNaN(r)&&(r=this.hsv.h||0,i=0),i=Math.max(0,Math.min(100,i))/100,a=Math.max(0,Math.min(100,a))/100,{h:r,s:i,v:a}}updateStateFromValue(t){const r=this.parseColor(t);if(!r)return;this.sourceSpace=r.space.id;const i=this.colorToHsv(r);(i.h!==this.hsv.h||i.s!==this.hsv.s||i.v!==this.hsv.v)&&(this.hsv=i,this.updateThumbPositions())}dispatchInput(){this.dispatchEvent(new CustomEvent("input",{detail:{value:this.value},bubbles:!0,composed:!0}))}dispatchChange(){this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))}updateValueFromHsv(){const t={h:this.hsv.h,s:this.hsv.s*100,v:this.hsv.v*100},r=new dt("hsv",[t.h,t.s,t.v]);let i;try{!this.sourceSpace||["srgb","hsl","hsv"].includes(this.sourceSpace)?i=r.to("srgb").toString({format:"hex"}):i=r.to(this.sourceSpace).toString({precision:5})}catch(a){console.error(`[mov-color-picker] Could not convert color to space ${this.sourceSpace}`,a),i=r.to("srgb").toString({format:"hex"})}this.value!==i&&(this.value=i,this.dispatchInput())}updateThumbPositions(){this.saturationThumbPosition={x:this.hsv.s*100,y:(1-this.hsv.v)*100},this.hueThumbPosition=this.hsv.h/360*100}handleSaturationDragStart(t){t.preventDefault(),this.isDraggingSaturation=!0,this.saturationPanel=this.shadowRoot?.querySelector(".saturation-panel"),this.updateSaturation(t)}handleHueDragStart(t){t.preventDefault(),this.isDraggingHue=!0,this.hueSlider=this.shadowRoot?.querySelector(".hue-slider"),this.updateHue(t)}handleDrag(t){this.isDraggingSaturation&&this.updateSaturation(t),this.isDraggingHue&&this.updateHue(t)}handleDragEnd(){(this.isDraggingSaturation||this.isDraggingHue)&&this.dispatchChange(),this.isDraggingSaturation=!1,this.isDraggingHue=!1}getEventPosition(t){return"touches"in t?{clientX:t.touches[0].clientX,clientY:t.touches[0].clientY}:{clientX:t.clientX,clientY:t.clientY}}updateSaturation(t){if(!this.saturationPanel)return;const{clientX:r,clientY:i}=this.getEventPosition(t),a=this.saturationPanel.getBoundingClientRect(),s=Math.max(0,Math.min(r-a.left,a.width)),l=Math.max(0,Math.min(i-a.top,a.height));this.hsv.s=s/a.width,this.hsv.v=1-l/a.height,this.updateValueFromHsv(),this.updateThumbPositions()}updateHue(t){if(!this.hueSlider)return;const{clientX:r}=this.getEventPosition(t),i=this.hueSlider.getBoundingClientRect(),a=Math.max(0,Math.min(r-i.left,i.width));this.hsv.h=a/i.width*360,this.updateValueFromHsv(),this.updateThumbPositions()}selectSwatch(t){this.value=t,this.dispatchInput(),this.dispatchChange()}};$([j({type:String})],Nt.prototype,"value",void 0),$([j({type:String,attribute:"default-value"})],Nt.prototype,"defaultValue",void 0),$([j({type:String})],Nt.prototype,"label",void 0),$([j({type:String})],Nt.prototype,"hint",void 0),$([j({type:String})],Nt.prototype,"name",void 0),$([j({type:Boolean,reflect:!0})],Nt.prototype,"disabled",void 0),$([j({type:String,reflect:!0})],Nt.prototype,"size",void 0),$([j({type:Array})],Nt.prototype,"swatches",void 0),$([j({type:String})],Nt.prototype,"mode",void 0),$([Dt()],Nt.prototype,"opened",void 0),$([Dt()],Nt.prototype,"popupDirection",void 0),$([Dt()],Nt.prototype,"sourceSpace",void 0),$([Dt()],Nt.prototype,"hsv",void 0),$([Dt()],Nt.prototype,"saturationThumbPosition",void 0),$([Dt()],Nt.prototype,"hueThumbPosition",void 0),Nt=$([rt("mov-color-picker")],Nt);var j3=(e,t,r)=>{for(const i of t)if(i[0]===e)return(0,i[1])();return r?.()},_r=class extends Xe{constructor(...t){super(...t),this.value="",this.labelPosition="side",this.size="medium",this._options=[],this.resizeObserver=new ResizeObserver(()=>this.updateThumbPosition())}static{this.styles=_t`
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
      font-size: 16px; /* Default font-size (medium) */
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
      font-size: 14px;
    }
    .button.large {
      padding: 0.75rem 1rem;
      font-size: 18px;
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
  `}connectedCallback(){super.connectedCallback(),this.resizeObserver.observe(this)}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this)}handleClick(t,r){this.value=r,this.dispatchEvent(new CustomEvent("change",{detail:this.value,bubbles:!0,composed:!0}))}handleSlotChange(){this._options=this._slotEl.assignedNodes({flatten:!0}).filter(t=>t.nodeName==="SEGMENTED-CONTROL-OPTION").map(t=>({value:t.getAttribute("value")??"",label:t.getAttribute("label")??"",icon:t.getAttribute("icon")??void 0}))}firstUpdated(){this.handleSlotChange(),this.updateComplete.then(()=>this.updateThumbPosition())}updated(t){super.updated(t),(t.has("value")||t.has("_options")||t.has("labelPosition")||t.has("size"))&&Promise.resolve().then(()=>this.updateThumbPosition())}updateThumbPosition(){if(!this.thumb)return;const t=this.shadowRoot?.querySelector(".button.selected");if(t){const{offsetWidth:r,offsetHeight:i}=t,a=t.getBoundingClientRect(),s=this.shadowRoot?.querySelector(".segmented-control")?.getBoundingClientRect(),l=a.left-(s?.left??0),u=a.top-(s?.top??0);this.thumb.style.transform=`translate(${l}px, ${u}px)`,this.thumb.style.width=`${r}px`,this.thumb.style.height=`${i}px`}else this.thumb.style.width="0px",this.thumb.style.height="0px"}render(){return re`
      <div class="segmented-control">
        <div class="thumb"></div>
        ${this._options.map(t=>re`
            <div
              class="option"
              title="${this.labelPosition==="tooltip"?t.label:ze}"
            >
              <button
                class="${yt({button:!0,selected:this.value===t.value,bottom:this.labelPosition==="bottom",small:this.size==="small",medium:this.size==="medium",large:this.size==="large"})}"
                @click=${r=>this.handleClick(r,t.value)}
                role="radio"
                aria-checked="${this.value===t.value}"
              >
                ${t.icon?re`<mov-icon
                      name="${t.icon}"
                      .size=${j3(this.size,[["small",()=>"16px"],["medium",()=>"24px"],["large",()=>"36px"]],()=>this.size)}
                    ></mov-icon>`:ze}
                ${this.labelPosition!=="tooltip"?re`<span>${t.label}</span>`:ze}
              </button>
            </div>
          `)}
      </div>
      <div style="display: none;">
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}};$([j({type:String,reflect:!0})],_r.prototype,"value",void 0),$([j({type:String})],_r.prototype,"labelPosition",void 0),$([j({type:String})],_r.prototype,"size",void 0),$([Dt()],_r.prototype,"_options",void 0),$([Qn(".thumb")],_r.prototype,"thumb",void 0),$([Qn("slot")],_r.prototype,"_slotEl",void 0),_r=$([rt("segmented-control")],_r);var di=class extends Xe{constructor(...t){super(...t),this.value="",this.label=""}createRenderRoot(){return this}};$([j({type:String,reflect:!0})],di.prototype,"value",void 0),$([j({type:String,reflect:!0})],di.prototype,"label",void 0),$([j({type:String,reflect:!0})],di.prototype,"icon",void 0),di=$([rt("segmented-control-option")],di);var hn=class extends Xe{constructor(...t){super(...t),this.name="",this.value="on",this.checked=!1,this.defaultChecked=!1,this.disabled=!1,this.required=!1,this.size="medium",this.hint="",this.design="graphical",this.textOn="ON",this.textOff="OFF"}static{this.styles=_t`
    :host {
      --switch-width: 3rem;
      --switch-height: 1.5rem;
      --knob-size: 1.25rem;
      display: inline-block;
    }

    :host([size='small']) {
      --switch-width: 2.5rem;
      --switch-height: 1.25rem;
      --knob-size: 16px;
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
      font-size: 16px;
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
      width: 16px;
      height: 16px;
      fill: none;
    }

    .text {
      font-size: 12px;
      font-weight: bold;
      color: #333;
    }

    .hint {
      font-size: 13px;
      opacity: 0.7;
      margin-top: 0.25rem;
    }
  `}handleChange(t){this.disabled||(this.checked=t.target.checked,this.dispatchEvent(new CustomEvent("change",{detail:{checked:this.checked},bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("input",{detail:{checked:this.checked},bubbles:!0,composed:!0})))}render(){const t=this.design.toLowerCase();let r;return t==="graphical"?r=re`${this.checked?wa:Al}`:r=re`<span class="text">${this.checked?this.textOn:this.textOff}</span>`,re`
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
            class="${yt({switch:!0,[t]:!0})}"
          >
            <div class="knob">${r}</div>
          </div>
        </label>
        <div class="hint">
          <slot name="hint">${this.hint}</slot>
        </div>
      </div>
    `}};$([j({type:String})],hn.prototype,"name",void 0),$([j({type:String})],hn.prototype,"value",void 0),$([j({type:Boolean,reflect:!0})],hn.prototype,"checked",void 0),$([j({type:Boolean,reflect:!0,attribute:"default-checked"})],hn.prototype,"defaultChecked",void 0),$([j({type:Boolean,reflect:!0})],hn.prototype,"disabled",void 0),$([j({type:Boolean,reflect:!0})],hn.prototype,"required",void 0),$([j({type:String,reflect:!0})],hn.prototype,"size",void 0),$([j({type:String})],hn.prototype,"hint",void 0),$([j({type:String,reflect:!0})],hn.prototype,"design",void 0),$([j({type:String})],hn.prototype,"textOn",void 0),$([j({type:String})],hn.prototype,"textOff",void 0),hn=$([rt("mov-switch")],hn);var q3=":host{--mov-slider-track-height:6px;--mov-slider-thumb-size:18px;--mov-slider-tooltip-offset:24px;user-select:none;touch-action:none;width:100%;display:block}:host([vertical]){display:inline-block}.mov-slider__container{align-items:center;min-height:24px;display:flex;position:relative}:host([vertical]) .mov-slider__container{flex-direction:column;min-width:24px;min-height:auto}.mov-slider__track{height:var(--mov-slider-track-height);background:var(--theme-border-color,#ccc);cursor:pointer;border-radius:9999px;flex:1;position:relative}:host([vertical]) .mov-slider__track{width:var(--mov-slider-track-height);height:100%;min-height:8rem}.mov-slider__progress{background:var(--mov-color-fill-loud);pointer-events:none;border-radius:9999px;height:100%;transition:background-color .15s;position:absolute}.mov-slider__progress--min-gap{background:#f59e0b;animation:2s ease-in-out infinite pulse-gap}@keyframes pulse-gap{0%,to{opacity:1}50%{opacity:.7}}:host([vertical]) .mov-slider__progress{width:100%;height:auto}.mov-slider__thumb{width:var(--mov-slider-thumb-size);height:var(--mov-slider-thumb-size);border:3px solid var(--mov-color-fill-loud);cursor:grab;touch-action:none;box-sizing:border-box;background:#fff;border-radius:9999px;transition:transform .15s,border-color .15s,box-shadow .15s;position:absolute;top:50%;transform:translate(-50%,-50%);box-shadow:0 1px 3px #0003}.mov-slider__thumb:active{cursor:grabbing;transform:translate(-50%,-50%)scale(1.1)}:host([vertical]) .mov-slider__thumb{inset-inline-start:50%;top:auto;transform:translate(-50%,50%)}:host([vertical]) .mov-slider__thumb:active{transform:translate(-50%,50%)scale(1.1)}.mov-slider__thumb:hover{border-color:var(--mov-color-fill-loud);box-shadow:0 4px 6px -1px #0000001a}.mov-slider__thumb--focused{outline:3px solid var(--mov-color-fill-loud);outline-offset:2px}.mov-slider__thumb--active{z-index:1;transform:translate(-50%,-50%)scale(1.1)}:host([vertical]) .mov-slider__thumb--active{transform:translate(-50%,50%)scale(1.1)}:host([readonly]) .mov-slider__thumb{cursor:default;border-color:var(--theme-border-color)}:host([readonly]) .mov-slider__thumb:active{transform:translate(-50%,-50%)}.mov-slider__input{opacity:0;pointer-events:none;position:absolute}.mov-slider__tooltip{bottom:var(--mov-slider-tooltip-offset);background:var(--theme-hightlight-color,#333);color:#fff;white-space:nowrap;pointer-events:none;opacity:0;z-index:2;border-radius:4px;padding:2px 8px;font-size:14px;transition:opacity .15s;position:absolute;inset-inline-start:50%;transform:translate(-50%)}.mov-slider__thumb:hover .mov-slider__tooltip,.mov-slider__thumb--focused .mov-slider__tooltip,.mov-slider__thumb--active .mov-slider__tooltip{opacity:1}:host([vertical]) .mov-slider__tooltip{bottom:auto;inset-inline-start:var(--mov-slider-tooltip-offset);top:50%;transform:translateY(-50%)}.mov-slider__ticks{top:50%;pointer-events:none;height:8px;position:absolute;inset-inline:0}:host([vertical]) .mov-slider__ticks{top:0;bottom:0;width:8px;height:auto;inset-inline-start:50%}.mov-slider__tick{background:var(--theme-border-color);width:1px;height:8px;position:absolute;transform:translate(-50%)}:host([vertical]) .mov-slider__tick{width:8px;height:1px;transform:translateY(-50%)}.mov-slider__tick-label{color:var(--theme-text-color);opacity:.7;white-space:nowrap;font-size:12px;position:absolute;top:12px;transform:translate(-50%)}:host([vertical]) .mov-slider__tick-label{top:auto;inset-inline-start:12px;transform:translateY(-50%)}:host([size=small]){--mov-slider-track-height:4px;--mov-slider-thumb-size:14px}:host([size=large]){--mov-slider-track-height:10px;--mov-slider-thumb-size:22px}:host([disabled]){opacity:.6;pointer-events:none}:host([disabled]) .mov-slider__thumb{cursor:not-allowed;border-color:var(--theme-border-color);background:#f3f4f6}:host([invalid]) .mov-slider__progress{background:#ef4444}.mov-form-control__label{color:var(--theme-text-color);margin-bottom:.5rem;display:block}.mov-form-control__helper,.mov-form-control__error{margin-top:.5rem;font-size:14px}.mov-form-control__helper{color:var(--theme-text-color);opacity:.8}.mov-form-control__error{color:#ef4444}.mov-slider__live-region{clip:rect(0 0 0 0);border:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}:host([show-ticks]){margin-left:5px;margin-right:5px;padding-bottom:15px}:host([filled]) .mov-slider__thumb{background:var(--mov-color-fill-loud);border-color:var(--mov-color-fill-loud)}",ut=class extends Xe{static{this.styles=[ke(q3)]}constructor(){super(),this.label="",this.helpText="",this.errorMessage="",this.min=0,this.max=100,this.step=1,this.value=0,this.dual=!1,this.vertical=!1,this.filled=!1,this.size="medium",this.disabled=!1,this.readonly=!1,this.invalid=!1,this.showTooltip=!1,this.showTicks=!1,this.tickStep=0,this.tickCount=0,this.focusedThumb=null,this.draggingThumb=null,this.activeDrag=null,this._handlePointerMove=this._handlePointerMove.bind(this),this._handlePointerUp=this._handlePointerUp.bind(this)}get values(){return Array.isArray(this.value)?this.value:[this.min,this.value]}getPercentage(t){return(t-this.min)/(this.max-this.min)*100}getValueFromPercentage(t){const r=this.min+t/100*(this.max-this.min);return this.step?Math.round(r/this.step)*this.step:r}getValueFromPointer(t,r,i){let a;return this.vertical?a=(i.bottom-r)/i.height*100:a=(t-i.left)/i.width*100,a=Math.max(0,Math.min(100,a)),this.getValueFromPercentage(a)}clampValue(t){let r=Math.max(this.min,Math.min(this.max,t));return this.step&&(r=Math.round(r/this.step)*this.step),Number(r.toFixed(10))}handleThumbPointerDown(t,r){this.disabled||this.readonly||!this.track||(t.preventDefault(),t.stopPropagation(),t.currentTarget.setPointerCapture(t.pointerId),this.activeDrag={thumb:r,trackRect:this.track.getBoundingClientRect()},this.draggingThumb=r,document.addEventListener("pointermove",this._handlePointerMove),document.addEventListener("pointerup",this._handlePointerUp),document.addEventListener("pointercancel",this._handlePointerUp))}_handlePointerMove(t){if(!this.activeDrag||this.disabled||this.readonly)return;const{thumb:r,trackRect:i}=this.activeDrag,a=this.getValueFromPointer(t.clientX,t.clientY,i);if(this.dual){const s=this.values;if(r==="min"){const l=Math.min(a,s[1]-(this.step||1));this.updateValue([l,s[1]],"input")}else{const l=Math.max(a,s[0]+(this.step||1));this.updateValue([s[0],l],"input")}}else this.updateValue(a,"input")}_handlePointerUp(t){this.activeDrag&&(this.shadowRoot?.querySelector(".mov-slider__thumb--active")?.releasePointerCapture(t.pointerId),this.updateValue(this.value,"change"),this.activeDrag=null,this.draggingThumb=null,document.removeEventListener("pointermove",this._handlePointerMove),document.removeEventListener("pointerup",this._handlePointerUp),document.removeEventListener("pointercancel",this._handlePointerUp))}updateValue(t,r="change"){this.readonly||this.disabled||(this.dual&&Array.isArray(t)?(t=[this.clampValue(t[0]),this.clampValue(t[1])],t[0]>t[1]&&(t=[t[1],t[0]])):!this.dual&&typeof t=="number"&&(t=this.clampValue(t)),this.value=t,this.dispatchEvent(new CustomEvent(r,{bubbles:!0,composed:!0,detail:{value:t}})))}handleTrackClick(t){if(this.disabled||this.readonly||!this.track)return;const r=this.track.getBoundingClientRect(),i=this.getValueFromPointer(t.clientX,t.clientY,r);if(this.dual){const a=this.values;Math.abs(i-a[0])<Math.abs(i-a[1])?this.updateValue([i,a[1]]):this.updateValue([a[0],i])}else this.updateValue(i)}renderTicks(){if(!this.showTicks)return null;const t=new Set;t.add(this.min),t.add(this.max);let r=this.tickStep;if(this.tickCount>1&&(r=Math.round((this.max-this.min)/(this.tickCount-1))),r>0){const i=Math.floor((this.max-this.min)/r);if(i<=100)for(let a=1;a<=i;a++){const s=this.min+a*r;s<this.max&&t.add(Number(s.toFixed(10)))}}return re`<div class="mov-slider__ticks">${Array.from(t).sort((i,a)=>i-a).map(i=>{const a=this.getPercentage(i);return re`
        <div class="mov-slider__tick" style="${this.vertical?`bottom: ${a}%`:`inset-inline-start: ${a}%`}">
          <div class="mov-slider__tick-label">${i}</div>
        </div>
      `})}</div>`}renderThumb(t,r){const i=this.getPercentage(t),a=this.focusedThumb===r,s=this.draggingThumb===r,l=this.vertical?`bottom: ${i}%`:`inset-inline-start: ${i}%`;return re`
      <div
        class="mov-slider__thumb ${a?"mov-slider__thumb--focused":""} ${s?"mov-slider__thumb--active":""}"
        style="${l}"
        @pointerdown=${u=>this.handleThumbPointerDown(u,r)}
      >
        ${this.showTooltip?re`<div class="mov-slider__tooltip">${t}</div>`:""}
      </div>
    `}renderProgress(){const t=this.values;if(this.dual){const i=this.getPercentage(t[0]),a=this.getPercentage(t[1]);return re`<div
        class="mov-slider__progress"
        style="${this.vertical?`bottom: ${i}%; height: ${a-i}%`:`left: ${i}%; width: ${a-i}%`}"
      ></div>`}const r=this.getPercentage(t[1]);return re`<div
      class="mov-slider__progress"
      style="${this.vertical?`bottom: 0; height: ${r}%`:`left: 0; width: ${r}%`}"
    ></div>`}render(){const t=this.values;return re`
      <div
        class="mov-slider"
        part="base"
      >
        ${this.label?re`<label class="mov-form-control__label">${this.label}</label>`:""}
        <div
          class="mov-slider__container"
          @click=${this.handleTrackClick}
        >
          <div class="mov-slider__track">
            ${this.renderProgress()} ${this.renderTicks()}
            ${this.dual?re`${this.renderThumb(t[0],"min")}${this.renderThumb(t[1],"max")}`:this.renderThumb(t[1],"single")}
          </div>
        </div>
        ${this.helpText&&!this.invalid?re`<div class="mov-form-control__helper">${this.helpText}</div>`:""}
        ${this.invalid&&this.errorMessage?re`<div class="mov-form-control__error">${this.errorMessage}</div>`:""}
      </div>
    `}};$([j({type:String})],ut.prototype,"label",void 0),$([j({attribute:"help-text"})],ut.prototype,"helpText",void 0),$([j({attribute:"error-message"})],ut.prototype,"errorMessage",void 0),$([j({type:Number})],ut.prototype,"min",void 0),$([j({type:Number})],ut.prototype,"max",void 0),$([j({type:Number})],ut.prototype,"step",void 0),$([j({type:Object})],ut.prototype,"value",void 0),$([j({type:Boolean,reflect:!0})],ut.prototype,"dual",void 0),$([j({type:Boolean,reflect:!0})],ut.prototype,"vertical",void 0),$([j({type:Boolean,reflect:!0})],ut.prototype,"filled",void 0),$([j({reflect:!0})],ut.prototype,"size",void 0),$([j({type:Boolean,reflect:!0})],ut.prototype,"disabled",void 0),$([j({type:Boolean,reflect:!0})],ut.prototype,"readonly",void 0),$([j({type:Boolean,reflect:!0})],ut.prototype,"invalid",void 0),$([j({type:Boolean,attribute:"show-tooltip"})],ut.prototype,"showTooltip",void 0),$([j({type:Boolean,attribute:"show-ticks"})],ut.prototype,"showTicks",void 0),$([j({type:Number,attribute:"tick-step"})],ut.prototype,"tickStep",void 0),$([j({type:Number,attribute:"tick-count"})],ut.prototype,"tickCount",void 0),$([Dt()],ut.prototype,"focusedThumb",void 0),$([Dt()],ut.prototype,"draggingThumb",void 0),$([Qn(".mov-slider__track")],ut.prototype,"track",void 0),$([Qn(".mov-slider__live-region")],ut.prototype,"liveRegion",void 0),ut=$([rt("mov-slider")],ut);var K3=_n((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.BLANK_URL=e.relativeFirstCharacters=e.whitespaceEscapeCharsRegex=e.urlSchemeRegex=e.ctrlCharactersRegex=e.htmlCtrlEntityRegex=e.htmlEntitiesRegex=e.invalidProtocolRegex=void 0,e.invalidProtocolRegex=/^([^\w]*)(javascript|data|vbscript)/im,e.htmlEntitiesRegex=/&#(\w+)(^\w|;)?/g,e.htmlCtrlEntityRegex=/&(newline|tab);/gi,e.ctrlCharactersRegex=/[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim,e.urlSchemeRegex=/^.+(:|&colon;)/gim,e.whitespaceEscapeCharsRegex=/(\\|%5[cC])((%(6[eE]|72|74))|[nrt])/g,e.relativeFirstCharacters=[".","/"],e.BLANK_URL="about:blank"})),Y3=_n((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.sanitizeUrl=l;var t=K3();function r(u){return t.relativeFirstCharacters.indexOf(u[0])>-1}function i(u){return u.replace(t.ctrlCharactersRegex,"").replace(t.htmlEntitiesRegex,function(d,h){return String.fromCharCode(h)})}function a(u){return URL.canParse(u)}function s(u){try{return decodeURIComponent(u)}catch{return u}}function l(u){if(!u)return t.BLANK_URL;var d,h=s(u.trim());do h=i(h).replace(t.htmlCtrlEntityRegex,"").replace(t.ctrlCharactersRegex,"").replace(t.whitespaceEscapeCharsRegex,"").trim(),h=s(h),d=h.match(t.ctrlCharactersRegex)||h.match(t.htmlEntitiesRegex)||h.match(t.htmlCtrlEntityRegex)||h.match(t.whitespaceEscapeCharsRegex);while(d&&d.length>0);var f=h;if(!f)return t.BLANK_URL;if(r(f))return f;var b=f.trimStart(),v=b.match(t.urlSchemeRegex);if(!v)return f;var m=v[0].toLowerCase().trim();if(t.invalidProtocolRegex.test(m))return t.BLANK_URL;var g=b.replace(/\\/g,"/");if(m==="mailto:"||m.includes("://"))return g;if(m==="http:"||m==="https:"){if(!a(g))return t.BLANK_URL;var k=new URL(g);return k.protocol=k.protocol.toLowerCase(),k.hostname=k.hostname.toLowerCase(),k.toString()}return g}})),X3=_n(((e,t)=>{(function(r,i){typeof define=="function"&&define.amd?define([],i):typeof e<"u"?i():(i(),r.FileSaver={})})(e,function(){"use strict";function r(h,f){return typeof f>"u"?f={autoBom:!1}:typeof f!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),f={autoBom:!f}),f.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(h.type)?new Blob(["\uFEFF",h],{type:h.type}):h}function i(h,f,b){var v=new XMLHttpRequest;v.open("GET",h),v.responseType="blob",v.onload=function(){d(v.response,f,b)},v.onerror=function(){console.error("could not download file")},v.send()}function a(h){var f=new XMLHttpRequest;f.open("HEAD",h,!1);try{f.send()}catch{}return 200<=f.status&&299>=f.status}function s(h){try{h.dispatchEvent(new MouseEvent("click"))}catch{var f=document.createEvent("MouseEvents");f.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),h.dispatchEvent(f)}}var l=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof global=="object"&&global.global===global?global:void 0,u=l.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),d=l.saveAs||(typeof window!="object"||window!==l?function(){}:"download"in HTMLAnchorElement.prototype&&!u?function(h,f,b){var v=l.URL||l.webkitURL,m=document.createElement("a");f=f||h.name||"download",m.download=f,m.rel="noopener",typeof h=="string"?(m.href=h,m.origin===location.origin?s(m):a(m.href)?i(h,f,b):s(m,m.target="_blank")):(m.href=v.createObjectURL(h),setTimeout(function(){v.revokeObjectURL(m.href)},4e4),setTimeout(function(){s(m)},0))}:"msSaveOrOpenBlob"in navigator?function(h,f,b){if(f=f||h.name||"download",typeof h!="string")navigator.msSaveOrOpenBlob(r(h,b),f);else if(a(h))i(h,f,b);else{var v=document.createElement("a");v.href=h,v.target="_blank",setTimeout(function(){s(v)})}}:function(h,f,b,v){if(v=v||open("","_blank"),v&&(v.document.title=v.document.body.innerText="downloading..."),typeof h=="string")return i(h,f,b);var m=h.type==="application/octet-stream",g=/constructor/i.test(l.HTMLElement)||l.safari,k=/CriOS\/[\d]+/.test(navigator.userAgent);if((k||m&&g||u)&&typeof FileReader<"u"){var y=new FileReader;y.onloadend=function(){var T=y.result;T=k?T:T.replace(/^data:[^;]*;/,"data:attachment/file;"),v?v.location.href=T:location=T,v=null},y.readAsDataURL(h)}else{var S=l.URL||l.webkitURL,M=S.createObjectURL(h);v?v.location=M:location.href=M,v=null,setTimeout(function(){S.revokeObjectURL(M)},4e4)}});l.saveAs=d.saveAs=d,typeof t<"u"&&(t.exports=d)})})),J3=_n(((e,t)=>{(function(r){typeof e=="object"&&typeof t<"u"?t.exports=r():typeof define=="function"&&define.amd?define([],r):(typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:this).JSZip=r()})(function(){return(function r(i,a,s){function l(h,f){if(!a[h]){if(!i[h]){var b=typeof require=="function"&&require;if(!f&&b)return b(h,!0);if(u)return u(h,!0);var v=new Error("Cannot find module '"+h+"'");throw v.code="MODULE_NOT_FOUND",v}var m=a[h]={exports:{}};i[h][0].call(m.exports,function(g){var k=i[h][1][g];return l(k||g)},m,m.exports,r,i,a,s)}return a[h].exports}for(var u=typeof require=="function"&&require,d=0;d<s.length;d++)l(s[d]);return l})({1:[function(r,i,a){"use strict";var s=r("./utils"),l=r("./support"),u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";a.encode=function(d){for(var h,f,b,v,m,g,k,y=[],S=0,M=d.length,T=M,O=s.getTypeOf(d)!=="string";S<d.length;)T=M-S,b=O?(h=d[S++],f=S<M?d[S++]:0,S<M?d[S++]:0):(h=d.charCodeAt(S++),f=S<M?d.charCodeAt(S++):0,S<M?d.charCodeAt(S++):0),v=h>>2,m=(3&h)<<4|f>>4,g=1<T?(15&f)<<2|b>>6:64,k=2<T?63&b:64,y.push(u.charAt(v)+u.charAt(m)+u.charAt(g)+u.charAt(k));return y.join("")},a.decode=function(d){var h,f,b,v,m,g,k=0,y=0,S="data:";if(d.substr(0,S.length)===S)throw new Error("Invalid base64 input, it looks like a data url.");var M,T=3*(d=d.replace(/[^A-Za-z0-9\+\/\=]/g,"")).length/4;if(d.charAt(d.length-1)===u.charAt(64)&&T--,d.charAt(d.length-2)===u.charAt(64)&&T--,T%1!=0)throw new Error("Invalid base64 input, bad content length.");for(M=l.uint8array?new Uint8Array(0|T):new Array(0|T);k<d.length;)h=u.indexOf(d.charAt(k++))<<2|(v=u.indexOf(d.charAt(k++)))>>4,f=(15&v)<<4|(m=u.indexOf(d.charAt(k++)))>>2,b=(3&m)<<6|(g=u.indexOf(d.charAt(k++))),M[y++]=h,m!==64&&(M[y++]=f),g!==64&&(M[y++]=b);return M}},{"./support":30,"./utils":32}],2:[function(r,i,a){"use strict";var s=r("./external"),l=r("./stream/DataWorker"),u=r("./stream/Crc32Probe"),d=r("./stream/DataLengthProbe");function h(f,b,v,m,g){this.compressedSize=f,this.uncompressedSize=b,this.crc32=v,this.compression=m,this.compressedContent=g}h.prototype={getContentWorker:function(){var f=new l(s.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new d("data_length")),b=this;return f.on("end",function(){if(this.streamInfo.data_length!==b.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),f},getCompressedWorker:function(){return new l(s.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},h.createWorkerFrom=function(f,b,v){return f.pipe(new u).pipe(new d("uncompressedSize")).pipe(b.compressWorker(v)).pipe(new d("compressedSize")).withStreamInfo("compression",b)},i.exports=h},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(r,i,a){"use strict";var s=r("./stream/GenericWorker");a.STORE={magic:"\0\0",compressWorker:function(l){return new s("STORE compression")},uncompressWorker:function(){return new s("STORE decompression")}},a.DEFLATE=r("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(r,i,a){"use strict";var s=r("./utils"),l=(function(){for(var u,d=[],h=0;h<256;h++){u=h;for(var f=0;f<8;f++)u=1&u?3988292384^u>>>1:u>>>1;d[h]=u}return d})();i.exports=function(u,d){return u!==void 0&&u.length?s.getTypeOf(u)!=="string"?(function(h,f,b,v){var m=l,g=v+b;h^=-1;for(var k=v;k<g;k++)h=h>>>8^m[255&(h^f[k])];return-1^h})(0|d,u,u.length,0):(function(h,f,b,v){var m=l,g=v+b;h^=-1;for(var k=v;k<g;k++)h=h>>>8^m[255&(h^f.charCodeAt(k))];return-1^h})(0|d,u,u.length,0):0}},{"./utils":32}],5:[function(r,i,a){"use strict";a.base64=!1,a.binary=!1,a.dir=!1,a.createFolders=!0,a.date=null,a.compression=null,a.compressionOptions=null,a.comment=null,a.unixPermissions=null,a.dosPermissions=null},{}],6:[function(r,i,a){"use strict";var s=null;s=typeof Promise<"u"?Promise:r("lie"),i.exports={Promise:s}},{lie:37}],7:[function(r,i,a){"use strict";var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",l=r("pako"),u=r("./utils"),d=r("./stream/GenericWorker"),h=s?"uint8array":"array";function f(b,v){d.call(this,"FlateWorker/"+b),this._pako=null,this._pakoAction=b,this._pakoOptions=v,this.meta={}}a.magic="\b\0",u.inherits(f,d),f.prototype.processChunk=function(b){this.meta=b.meta,this._pako===null&&this._createPako(),this._pako.push(u.transformTo(h,b.data),!1)},f.prototype.flush=function(){d.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},f.prototype.cleanUp=function(){d.prototype.cleanUp.call(this),this._pako=null},f.prototype._createPako=function(){this._pako=new l[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var b=this;this._pako.onData=function(v){b.push({data:v,meta:b.meta})}},a.compressWorker=function(b){return new f("Deflate",b)},a.uncompressWorker=function(){return new f("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(r,i,a){"use strict";function s(m,g){var k,y="";for(k=0;k<g;k++)y+=String.fromCharCode(255&m),m>>>=8;return y}function l(m,g,k,y,S,M){var T,O,z=m.file,K=m.compression,Z=M!==h.utf8encode,oe=u.transformTo("string",M(z.name)),G=u.transformTo("string",h.utf8encode(z.name)),pe=z.comment,we=u.transformTo("string",M(pe)),R=u.transformTo("string",h.utf8encode(pe)),X=G.length!==z.name.length,E=R.length!==pe.length,Q="",Ie="",ce="",Ce=z.dir,ie=z.date,Me={crc32:0,compressedSize:0,uncompressedSize:0};g&&!k||(Me.crc32=m.crc32,Me.compressedSize=m.compressedSize,Me.uncompressedSize=m.uncompressedSize);var W=0;g&&(W|=8),Z||!X&&!E||(W|=2048);var F=0,Se=0;Ce&&(F|=16),S==="UNIX"?(Se=798,F|=(function(fe,qe){var gt=fe;return fe||(gt=qe?16893:33204),(65535&gt)<<16})(z.unixPermissions,Ce)):(Se=20,F|=(function(fe){return 63&(fe||0)})(z.dosPermissions)),T=ie.getUTCHours(),T<<=6,T|=ie.getUTCMinutes(),T<<=5,T|=ie.getUTCSeconds()/2,O=ie.getUTCFullYear()-1980,O<<=4,O|=ie.getUTCMonth()+1,O<<=5,O|=ie.getUTCDate(),X&&(Ie=s(1,1)+s(f(oe),4)+G,Q+="up"+s(Ie.length,2)+Ie),E&&(ce=s(1,1)+s(f(we),4)+R,Q+="uc"+s(ce.length,2)+ce);var ge="";return ge+=`
\0`,ge+=s(W,2),ge+=K.magic,ge+=s(T,2),ge+=s(O,2),ge+=s(Me.crc32,4),ge+=s(Me.compressedSize,4),ge+=s(Me.uncompressedSize,4),ge+=s(oe.length,2),ge+=s(Q.length,2),{fileRecord:b.LOCAL_FILE_HEADER+ge+oe+Q,dirRecord:b.CENTRAL_FILE_HEADER+s(Se,2)+ge+s(we.length,2)+"\0\0\0\0"+s(F,4)+s(y,4)+oe+Q+we}}var u=r("../utils"),d=r("../stream/GenericWorker"),h=r("../utf8"),f=r("../crc32"),b=r("../signature");function v(m,g,k,y){d.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=g,this.zipPlatform=k,this.encodeFileName=y,this.streamFiles=m,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}u.inherits(v,d),v.prototype.push=function(m){var g=m.meta.percent||0,k=this.entriesCount,y=this._sources.length;this.accumulate?this.contentBuffer.push(m):(this.bytesWritten+=m.data.length,d.prototype.push.call(this,{data:m.data,meta:{currentFile:this.currentFile,percent:k?(g+100*(k-y-1))/k:100}}))},v.prototype.openedSource=function(m){this.currentSourceOffset=this.bytesWritten,this.currentFile=m.file.name;var g=this.streamFiles&&!m.file.dir;if(g){var k=l(m,g,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:k.fileRecord,meta:{percent:0}})}else this.accumulate=!0},v.prototype.closedSource=function(m){this.accumulate=!1;var g=this.streamFiles&&!m.file.dir,k=l(m,g,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(k.dirRecord),g)this.push({data:(function(y){return b.DATA_DESCRIPTOR+s(y.crc32,4)+s(y.compressedSize,4)+s(y.uncompressedSize,4)})(m),meta:{percent:100}});else for(this.push({data:k.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},v.prototype.flush=function(){for(var m=this.bytesWritten,g=0;g<this.dirRecords.length;g++)this.push({data:this.dirRecords[g],meta:{percent:100}});var k=this.bytesWritten-m,y=(function(S,M,T,O,z){var K=u.transformTo("string",z(O));return b.CENTRAL_DIRECTORY_END+"\0\0\0\0"+s(S,2)+s(S,2)+s(M,4)+s(T,4)+s(K.length,2)+K})(this.dirRecords.length,k,m,this.zipComment,this.encodeFileName);this.push({data:y,meta:{percent:100}})},v.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},v.prototype.registerPrevious=function(m){this._sources.push(m);var g=this;return m.on("data",function(k){g.processChunk(k)}),m.on("end",function(){g.closedSource(g.previous.streamInfo),g._sources.length?g.prepareNextSource():g.end()}),m.on("error",function(k){g.error(k)}),this},v.prototype.resume=function(){return!!d.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},v.prototype.error=function(m){var g=this._sources;if(!d.prototype.error.call(this,m))return!1;for(var k=0;k<g.length;k++)try{g[k].error(m)}catch{}return!0},v.prototype.lock=function(){d.prototype.lock.call(this);for(var m=this._sources,g=0;g<m.length;g++)m[g].lock()},i.exports=v},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(r,i,a){"use strict";var s=r("../compressions"),l=r("./ZipFileWorker");a.generateWorker=function(u,d,h){var f=new l(d.streamFiles,h,d.platform,d.encodeFileName),b=0;try{u.forEach(function(v,m){b++;var g=(function(M,T){var O=M||T,z=s[O];if(!z)throw new Error(O+" is not a valid compression method !");return z})(m.options.compression,d.compression),k=m.options.compressionOptions||d.compressionOptions||{},y=m.dir,S=m.date;m._compressWorker(g,k).withStreamInfo("file",{name:v,dir:y,date:S,comment:m.comment||"",unixPermissions:m.unixPermissions,dosPermissions:m.dosPermissions}).pipe(f)}),f.entriesCount=b}catch(v){f.error(v)}return f}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(r,i,a){"use strict";function s(){if(!(this instanceof s))return new s;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var l=new s;for(var u in this)typeof this[u]!="function"&&(l[u]=this[u]);return l}}(s.prototype=r("./object")).loadAsync=r("./load"),s.support=r("./support"),s.defaults=r("./defaults"),s.version="3.9.1",s.loadAsync=function(l,u){return new s().loadAsync(l,u)},s.external=r("./external"),i.exports=s},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(r,i,a){"use strict";var s=r("./utils"),l=r("./external"),u=r("./utf8"),d=r("./zipEntries"),h=r("./stream/Crc32Probe"),f=r("./nodejsUtils");function b(v){return new l.Promise(function(m,g){var k=v.decompressed.getContentWorker().pipe(new h);k.on("error",function(y){g(y)}).on("end",function(){k.streamInfo.crc32!==v.decompressed.crc32?g(new Error("Corrupted zip : CRC32 mismatch")):m()}).resume()})}i.exports=function(v,m){var g=this;return m=s.extend(m||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:u.utf8decode}),f.isNode&&f.isStream(v)?l.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):s.prepareContent("the loaded zip file",v,!0,m.optimizedBinaryString,m.base64).then(function(k){var y=new d(m);return y.load(k),y}).then(function(k){var y=[l.Promise.resolve(k)],S=k.files;if(m.checkCRC32)for(var M=0;M<S.length;M++)y.push(b(S[M]));return l.Promise.all(y)}).then(function(k){for(var y=k.shift(),S=y.files,M=0;M<S.length;M++){var T=S[M],O=T.fileNameStr,z=s.resolve(T.fileNameStr);g.file(z,T.decompressed,{binary:!0,optimizedBinaryString:!0,date:T.date,dir:T.dir,comment:T.fileCommentStr.length?T.fileCommentStr:null,unixPermissions:T.unixPermissions,dosPermissions:T.dosPermissions,createFolders:m.createFolders}),T.dir||(g.file(z).unsafeOriginalName=O)}return y.zipComment.length&&(g.comment=y.zipComment),g})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(r,i,a){"use strict";var s=r("../utils"),l=r("../stream/GenericWorker");function u(d,h){l.call(this,"Nodejs stream input adapter for "+d),this._upstreamEnded=!1,this._bindStream(h)}s.inherits(u,l),u.prototype._bindStream=function(d){var h=this;(this._stream=d).pause(),d.on("data",function(f){h.push({data:f,meta:{percent:0}})}).on("error",function(f){h.isPaused?this.generatedError=f:h.error(f)}).on("end",function(){h.isPaused?h._upstreamEnded=!0:h.end()})},u.prototype.pause=function(){return!!l.prototype.pause.call(this)&&(this._stream.pause(),!0)},u.prototype.resume=function(){return!!l.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},i.exports=u},{"../stream/GenericWorker":28,"../utils":32}],13:[function(r,i,a){"use strict";var s=r("readable-stream").Readable;function l(u,d,h){s.call(this,d),this._helper=u;var f=this;u.on("data",function(b,v){f.push(b)||f._helper.pause(),h&&h(v)}).on("error",function(b){f.emit("error",b)}).on("end",function(){f.push(null)})}r("../utils").inherits(l,s),l.prototype._read=function(){this._helper.resume()},i.exports=l},{"../utils":32,"readable-stream":16}],14:[function(r,i,a){"use strict";i.exports={isNode:typeof Buffer<"u",newBufferFrom:function(s,l){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(s,l);if(typeof s=="number")throw new Error('The "data" argument must not be a number');return new Buffer(s,l)},allocBuffer:function(s){if(Buffer.alloc)return Buffer.alloc(s);var l=new Buffer(s);return l.fill(0),l},isBuffer:function(s){return Buffer.isBuffer(s)},isStream:function(s){return s&&typeof s.on=="function"&&typeof s.pause=="function"&&typeof s.resume=="function"}}},{}],15:[function(r,i,a){"use strict";function s(O,z,K){var Z,oe=u.getTypeOf(z),G=u.extend(K||{},f);G.date=G.date||new Date,G.compression!==null&&(G.compression=G.compression.toUpperCase()),typeof G.unixPermissions=="string"&&(G.unixPermissions=parseInt(G.unixPermissions,8)),G.unixPermissions&&16384&G.unixPermissions&&(G.dir=!0),G.dosPermissions&&16&G.dosPermissions&&(G.dir=!0),G.dir&&(O=S(O)),G.createFolders&&(Z=y(O))&&M.call(this,Z,!0);var pe=oe==="string"&&G.binary===!1&&G.base64===!1;K&&K.binary!==void 0||(G.binary=!pe),(z instanceof b&&z.uncompressedSize===0||G.dir||!z||z.length===0)&&(G.base64=!1,G.binary=!0,z="",G.compression="STORE",oe="string");var we=null;we=z instanceof b||z instanceof d?z:g.isNode&&g.isStream(z)?new k(O,z):u.prepareContent(O,z,G.binary,G.optimizedBinaryString,G.base64);var R=new v(O,we,G);this.files[O]=R}var l=r("./utf8"),u=r("./utils"),d=r("./stream/GenericWorker"),h=r("./stream/StreamHelper"),f=r("./defaults"),b=r("./compressedObject"),v=r("./zipObject"),m=r("./generate"),g=r("./nodejsUtils"),k=r("./nodejs/NodejsStreamInputAdapter"),y=function(O){O.slice(-1)==="/"&&(O=O.substring(0,O.length-1));var z=O.lastIndexOf("/");return 0<z?O.substring(0,z):""},S=function(O){return O.slice(-1)!=="/"&&(O+="/"),O},M=function(O,z){return z=z!==void 0?z:f.createFolders,O=S(O),this.files[O]||s.call(this,O,null,{dir:!0,createFolders:z}),this.files[O]};function T(O){return Object.prototype.toString.call(O)==="[object RegExp]"}i.exports={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(O){var z,K,Z;for(z in this.files)Z=this.files[z],(K=z.slice(this.root.length,z.length))&&z.slice(0,this.root.length)===this.root&&O(K,Z)},filter:function(O){var z=[];return this.forEach(function(K,Z){O(K,Z)&&z.push(Z)}),z},file:function(O,z,K){if(arguments.length!==1)return O=this.root+O,s.call(this,O,z,K),this;if(T(O)){var Z=O;return this.filter(function(G,pe){return!pe.dir&&Z.test(G)})}var oe=this.files[this.root+O];return oe&&!oe.dir?oe:null},folder:function(O){if(!O)return this;if(T(O))return this.filter(function(oe,G){return G.dir&&O.test(oe)});var z=this.root+O,K=M.call(this,z),Z=this.clone();return Z.root=K.name,Z},remove:function(O){O=this.root+O;var z=this.files[O];if(z||(O.slice(-1)!=="/"&&(O+="/"),z=this.files[O]),z&&!z.dir)delete this.files[O];else for(var K=this.filter(function(oe,G){return G.name.slice(0,O.length)===O}),Z=0;Z<K.length;Z++)delete this.files[K[Z].name];return this},generate:function(O){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(O){var z,K={};try{if((K=u.extend(O||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:l.utf8encode})).type=K.type.toLowerCase(),K.compression=K.compression.toUpperCase(),K.type==="binarystring"&&(K.type="string"),!K.type)throw new Error("No output type specified.");u.checkSupport(K.type),K.platform!=="darwin"&&K.platform!=="freebsd"&&K.platform!=="linux"&&K.platform!=="sunos"||(K.platform="UNIX"),K.platform==="win32"&&(K.platform="DOS");var Z=K.comment||this.comment||"";z=m.generateWorker(this,K,Z)}catch(oe){(z=new d("error")).error(oe)}return new h(z,K.type||"string",K.mimeType)},generateAsync:function(O,z){return this.generateInternalStream(O).accumulate(z)},generateNodeStream:function(O,z){return(O=O||{}).type||(O.type="nodebuffer"),this.generateInternalStream(O).toNodejsStream(z)}}},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(r,i,a){i.exports=r("stream")},{stream:void 0}],17:[function(r,i,a){"use strict";var s=r("./DataReader");function l(u){s.call(this,u);for(var d=0;d<this.data.length;d++)u[d]=255&u[d]}r("../utils").inherits(l,s),l.prototype.byteAt=function(u){return this.data[this.zero+u]},l.prototype.lastIndexOfSignature=function(u){for(var d=u.charCodeAt(0),h=u.charCodeAt(1),f=u.charCodeAt(2),b=u.charCodeAt(3),v=this.length-4;0<=v;--v)if(this.data[v]===d&&this.data[v+1]===h&&this.data[v+2]===f&&this.data[v+3]===b)return v-this.zero;return-1},l.prototype.readAndCheckSignature=function(u){var d=u.charCodeAt(0),h=u.charCodeAt(1),f=u.charCodeAt(2),b=u.charCodeAt(3),v=this.readData(4);return d===v[0]&&h===v[1]&&f===v[2]&&b===v[3]},l.prototype.readData=function(u){if(this.checkOffset(u),u===0)return[];var d=this.data.slice(this.zero+this.index,this.zero+this.index+u);return this.index+=u,d},i.exports=l},{"../utils":32,"./DataReader":18}],18:[function(r,i,a){"use strict";var s=r("../utils");function l(u){this.data=u,this.length=u.length,this.index=0,this.zero=0}l.prototype={checkOffset:function(u){this.checkIndex(this.index+u)},checkIndex:function(u){if(this.length<this.zero+u||u<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+u+"). Corrupted zip ?")},setIndex:function(u){this.checkIndex(u),this.index=u},skip:function(u){this.setIndex(this.index+u)},byteAt:function(u){},readInt:function(u){var d,h=0;for(this.checkOffset(u),d=this.index+u-1;d>=this.index;d--)h=(h<<8)+this.byteAt(d);return this.index+=u,h},readString:function(u){return s.transformTo("string",this.readData(u))},readData:function(u){},lastIndexOfSignature:function(u){},readAndCheckSignature:function(u){},readDate:function(){var u=this.readInt(4);return new Date(Date.UTC(1980+(u>>25&127),(u>>21&15)-1,u>>16&31,u>>11&31,u>>5&63,(31&u)<<1))}},i.exports=l},{"../utils":32}],19:[function(r,i,a){"use strict";var s=r("./Uint8ArrayReader");function l(u){s.call(this,u)}r("../utils").inherits(l,s),l.prototype.readData=function(u){this.checkOffset(u);var d=this.data.slice(this.zero+this.index,this.zero+this.index+u);return this.index+=u,d},i.exports=l},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(r,i,a){"use strict";var s=r("./DataReader");function l(u){s.call(this,u)}r("../utils").inherits(l,s),l.prototype.byteAt=function(u){return this.data.charCodeAt(this.zero+u)},l.prototype.lastIndexOfSignature=function(u){return this.data.lastIndexOf(u)-this.zero},l.prototype.readAndCheckSignature=function(u){return u===this.readData(4)},l.prototype.readData=function(u){this.checkOffset(u);var d=this.data.slice(this.zero+this.index,this.zero+this.index+u);return this.index+=u,d},i.exports=l},{"../utils":32,"./DataReader":18}],21:[function(r,i,a){"use strict";var s=r("./ArrayReader");function l(u){s.call(this,u)}r("../utils").inherits(l,s),l.prototype.readData=function(u){if(this.checkOffset(u),u===0)return new Uint8Array(0);var d=this.data.subarray(this.zero+this.index,this.zero+this.index+u);return this.index+=u,d},i.exports=l},{"../utils":32,"./ArrayReader":17}],22:[function(r,i,a){"use strict";var s=r("../utils"),l=r("../support"),u=r("./ArrayReader"),d=r("./StringReader"),h=r("./NodeBufferReader"),f=r("./Uint8ArrayReader");i.exports=function(b){var v=s.getTypeOf(b);return s.checkSupport(v),v!=="string"||l.uint8array?v==="nodebuffer"?new h(b):l.uint8array?new f(s.transformTo("uint8array",b)):new u(s.transformTo("array",b)):new d(b)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(r,i,a){"use strict";a.LOCAL_FILE_HEADER="PK",a.CENTRAL_FILE_HEADER="PK",a.CENTRAL_DIRECTORY_END="PK",a.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",a.ZIP64_CENTRAL_DIRECTORY_END="PK",a.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(r,i,a){"use strict";var s=r("./GenericWorker"),l=r("../utils");function u(d){s.call(this,"ConvertWorker to "+d),this.destType=d}l.inherits(u,s),u.prototype.processChunk=function(d){this.push({data:l.transformTo(this.destType,d.data),meta:d.meta})},i.exports=u},{"../utils":32,"./GenericWorker":28}],25:[function(r,i,a){"use strict";var s=r("./GenericWorker"),l=r("../crc32");function u(){s.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}r("../utils").inherits(u,s),u.prototype.processChunk=function(d){this.streamInfo.crc32=l(d.data,this.streamInfo.crc32||0),this.push(d)},i.exports=u},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(r,i,a){"use strict";var s=r("../utils"),l=r("./GenericWorker");function u(d){l.call(this,"DataLengthProbe for "+d),this.propName=d,this.withStreamInfo(d,0)}s.inherits(u,l),u.prototype.processChunk=function(d){if(d){var h=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=h+d.data.length}l.prototype.processChunk.call(this,d)},i.exports=u},{"../utils":32,"./GenericWorker":28}],27:[function(r,i,a){"use strict";var s=r("../utils"),l=r("./GenericWorker");function u(d){l.call(this,"DataWorker");var h=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,d.then(function(f){h.dataIsReady=!0,h.data=f,h.max=f&&f.length||0,h.type=s.getTypeOf(f),h.isPaused||h._tickAndRepeat()},function(f){h.error(f)})}s.inherits(u,l),u.prototype.cleanUp=function(){l.prototype.cleanUp.call(this),this.data=null},u.prototype.resume=function(){return!!l.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,s.delay(this._tickAndRepeat,[],this)),!0)},u.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(s.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},u.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var d=null,h=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":d=this.data.substring(this.index,h);break;case"uint8array":d=this.data.subarray(this.index,h);break;case"array":case"nodebuffer":d=this.data.slice(this.index,h)}return this.index=h,this.push({data:d,meta:{percent:this.max?this.index/this.max*100:0}})},i.exports=u},{"../utils":32,"./GenericWorker":28}],28:[function(r,i,a){"use strict";function s(l){this.name=l||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}s.prototype={push:function(l){this.emit("data",l)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(l){this.emit("error",l)}return!0},error:function(l){return!this.isFinished&&(this.isPaused?this.generatedError=l:(this.isFinished=!0,this.emit("error",l),this.previous&&this.previous.error(l),this.cleanUp()),!0)},on:function(l,u){return this._listeners[l].push(u),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(l,u){if(this._listeners[l])for(var d=0;d<this._listeners[l].length;d++)this._listeners[l][d].call(this,u)},pipe:function(l){return l.registerPrevious(this)},registerPrevious:function(l){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=l.streamInfo,this.mergeStreamInfo(),this.previous=l;var u=this;return l.on("data",function(d){u.processChunk(d)}),l.on("end",function(){u.end()}),l.on("error",function(d){u.error(d)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var l=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),l=!0),this.previous&&this.previous.resume(),!l},flush:function(){},processChunk:function(l){this.push(l)},withStreamInfo:function(l,u){return this.extraStreamInfo[l]=u,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var l in this.extraStreamInfo)this.extraStreamInfo.hasOwnProperty(l)&&(this.streamInfo[l]=this.extraStreamInfo[l])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var l="Worker "+this.name;return this.previous?this.previous+" -> "+l:l}},i.exports=s},{}],29:[function(r,i,a){"use strict";var s=r("../utils"),l=r("./ConvertWorker"),u=r("./GenericWorker"),d=r("../base64"),h=r("../support"),f=r("../external"),b=null;if(h.nodestream)try{b=r("../nodejs/NodejsStreamOutputAdapter")}catch{}function v(g,k){return new f.Promise(function(y,S){var M=[],T=g._internalType,O=g._outputType,z=g._mimeType;g.on("data",function(K,Z){M.push(K),k&&k(Z)}).on("error",function(K){M=[],S(K)}).on("end",function(){try{y((function(K,Z,oe){switch(K){case"blob":return s.newBlob(s.transformTo("arraybuffer",Z),oe);case"base64":return d.encode(Z);default:return s.transformTo(K,Z)}})(O,(function(K,Z){var oe,G=0,pe=null,we=0;for(oe=0;oe<Z.length;oe++)we+=Z[oe].length;switch(K){case"string":return Z.join("");case"array":return Array.prototype.concat.apply([],Z);case"uint8array":for(pe=new Uint8Array(we),oe=0;oe<Z.length;oe++)pe.set(Z[oe],G),G+=Z[oe].length;return pe;case"nodebuffer":return Buffer.concat(Z);default:throw new Error("concat : unsupported type '"+K+"'")}})(T,M),z))}catch(K){S(K)}M=[]}).resume()})}function m(g,k,y){var S=k;switch(k){case"blob":case"arraybuffer":S="uint8array";break;case"base64":S="string"}try{this._internalType=S,this._outputType=k,this._mimeType=y,s.checkSupport(S),this._worker=g.pipe(new l(S)),g.lock()}catch(M){this._worker=new u("error"),this._worker.error(M)}}m.prototype={accumulate:function(g){return v(this,g)},on:function(g,k){var y=this;return g==="data"?this._worker.on(g,function(S){k.call(y,S.data,S.meta)}):this._worker.on(g,function(){s.delay(k,arguments,y)}),this},resume:function(){return s.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(g){if(s.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new b(this,{objectMode:this._outputType!=="nodebuffer"},g)}},i.exports=m},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(r,i,a){"use strict";if(a.base64=!0,a.array=!0,a.string=!0,a.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",a.nodebuffer=typeof Buffer<"u",a.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")a.blob=!1;else{var s=new ArrayBuffer(0);try{a.blob=new Blob([s],{type:"application/zip"}).size===0}catch{try{var l=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);l.append(s),a.blob=l.getBlob("application/zip").size===0}catch{a.blob=!1}}}try{a.nodestream=!!r("readable-stream").Readable}catch{a.nodestream=!1}},{"readable-stream":16}],31:[function(r,i,a){"use strict";for(var s=r("./utils"),l=r("./support"),u=r("./nodejsUtils"),d=r("./stream/GenericWorker"),h=new Array(256),f=0;f<256;f++)h[f]=252<=f?6:248<=f?5:240<=f?4:224<=f?3:192<=f?2:1;h[254]=h[254]=1;function b(){d.call(this,"utf-8 decode"),this.leftOver=null}function v(){d.call(this,"utf-8 encode")}a.utf8encode=function(m){return l.nodebuffer?u.newBufferFrom(m,"utf-8"):(function(g){var k,y,S,M,T,O=g.length,z=0;for(M=0;M<O;M++)(64512&(y=g.charCodeAt(M)))==55296&&M+1<O&&(64512&(S=g.charCodeAt(M+1)))==56320&&(y=65536+(y-55296<<10)+(S-56320),M++),z+=y<128?1:y<2048?2:y<65536?3:4;for(k=l.uint8array?new Uint8Array(z):new Array(z),M=T=0;T<z;M++)(64512&(y=g.charCodeAt(M)))==55296&&M+1<O&&(64512&(S=g.charCodeAt(M+1)))==56320&&(y=65536+(y-55296<<10)+(S-56320),M++),y<128?k[T++]=y:(y<2048?k[T++]=192|y>>>6:(y<65536?k[T++]=224|y>>>12:(k[T++]=240|y>>>18,k[T++]=128|y>>>12&63),k[T++]=128|y>>>6&63),k[T++]=128|63&y);return k})(m)},a.utf8decode=function(m){return l.nodebuffer?s.transformTo("nodebuffer",m).toString("utf-8"):(function(g){var k,y,S,M,T=g.length,O=new Array(2*T);for(k=y=0;k<T;)if((S=g[k++])<128)O[y++]=S;else if(4<(M=h[S]))O[y++]=65533,k+=M-1;else{for(S&=M===2?31:M===3?15:7;1<M&&k<T;)S=S<<6|63&g[k++],M--;1<M?O[y++]=65533:S<65536?O[y++]=S:(S-=65536,O[y++]=55296|S>>10&1023,O[y++]=56320|1023&S)}return O.length!==y&&(O.subarray?O=O.subarray(0,y):O.length=y),s.applyFromCharCode(O)})(m=s.transformTo(l.uint8array?"uint8array":"array",m))},s.inherits(b,d),b.prototype.processChunk=function(m){var g=s.transformTo(l.uint8array?"uint8array":"array",m.data);if(this.leftOver&&this.leftOver.length){if(l.uint8array){var k=g;(g=new Uint8Array(k.length+this.leftOver.length)).set(this.leftOver,0),g.set(k,this.leftOver.length)}else g=this.leftOver.concat(g);this.leftOver=null}var y=(function(M,T){var O;for((T=T||M.length)>M.length&&(T=M.length),O=T-1;0<=O&&(192&M[O])==128;)O--;return O<0||O===0?T:O+h[M[O]]>T?O:T})(g),S=g;y!==g.length&&(l.uint8array?(S=g.subarray(0,y),this.leftOver=g.subarray(y,g.length)):(S=g.slice(0,y),this.leftOver=g.slice(y,g.length))),this.push({data:a.utf8decode(S),meta:m.meta})},b.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:a.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},a.Utf8DecodeWorker=b,s.inherits(v,d),v.prototype.processChunk=function(m){this.push({data:a.utf8encode(m.data),meta:m.meta})},a.Utf8EncodeWorker=v},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(r,i,a){"use strict";var s=r("./support"),l=r("./base64"),u=r("./nodejsUtils"),d=r("set-immediate-shim"),h=r("./external");function f(y){return y}function b(y,S){for(var M=0;M<y.length;++M)S[M]=255&y.charCodeAt(M);return S}a.newBlob=function(y,S){a.checkSupport("blob");try{return new Blob([y],{type:S})}catch{try{var M=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return M.append(y),M.getBlob(S)}catch{throw new Error("Bug : can't construct the Blob.")}}};var v={stringifyByChunk:function(y,S,M){var T=[],O=0,z=y.length;if(z<=M)return String.fromCharCode.apply(null,y);for(;O<z;)S==="array"||S==="nodebuffer"?T.push(String.fromCharCode.apply(null,y.slice(O,Math.min(O+M,z)))):T.push(String.fromCharCode.apply(null,y.subarray(O,Math.min(O+M,z)))),O+=M;return T.join("")},stringifyByChar:function(y){for(var S="",M=0;M<y.length;M++)S+=String.fromCharCode(y[M]);return S},applyCanBeUsed:{uint8array:(function(){try{return s.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}})(),nodebuffer:(function(){try{return s.nodebuffer&&String.fromCharCode.apply(null,u.allocBuffer(1)).length===1}catch{return!1}})()}};function m(y){var S=65536,M=a.getTypeOf(y),T=!0;if(M==="uint8array"?T=v.applyCanBeUsed.uint8array:M==="nodebuffer"&&(T=v.applyCanBeUsed.nodebuffer),T)for(;1<S;)try{return v.stringifyByChunk(y,M,S)}catch{S=Math.floor(S/2)}return v.stringifyByChar(y)}function g(y,S){for(var M=0;M<y.length;M++)S[M]=y[M];return S}a.applyFromCharCode=m;var k={};k.string={string:f,array:function(y){return b(y,new Array(y.length))},arraybuffer:function(y){return k.string.uint8array(y).buffer},uint8array:function(y){return b(y,new Uint8Array(y.length))},nodebuffer:function(y){return b(y,u.allocBuffer(y.length))}},k.array={string:m,array:f,arraybuffer:function(y){return new Uint8Array(y).buffer},uint8array:function(y){return new Uint8Array(y)},nodebuffer:function(y){return u.newBufferFrom(y)}},k.arraybuffer={string:function(y){return m(new Uint8Array(y))},array:function(y){return g(new Uint8Array(y),new Array(y.byteLength))},arraybuffer:f,uint8array:function(y){return new Uint8Array(y)},nodebuffer:function(y){return u.newBufferFrom(new Uint8Array(y))}},k.uint8array={string:m,array:function(y){return g(y,new Array(y.length))},arraybuffer:function(y){return y.buffer},uint8array:f,nodebuffer:function(y){return u.newBufferFrom(y)}},k.nodebuffer={string:m,array:function(y){return g(y,new Array(y.length))},arraybuffer:function(y){return k.nodebuffer.uint8array(y).buffer},uint8array:function(y){return g(y,new Uint8Array(y.length))},nodebuffer:f},a.transformTo=function(y,S){return S=S||"",y?(a.checkSupport(y),k[a.getTypeOf(S)][y](S)):S},a.resolve=function(y){for(var S=y.split("/"),M=[],T=0;T<S.length;T++){var O=S[T];O==="."||O===""&&T!==0&&T!==S.length-1||(O===".."?M.pop():M.push(O))}return M.join("/")},a.getTypeOf=function(y){return typeof y=="string"?"string":Object.prototype.toString.call(y)==="[object Array]"?"array":s.nodebuffer&&u.isBuffer(y)?"nodebuffer":s.uint8array&&y instanceof Uint8Array?"uint8array":s.arraybuffer&&y instanceof ArrayBuffer?"arraybuffer":void 0},a.checkSupport=function(y){if(!s[y.toLowerCase()])throw new Error(y+" is not supported by this platform")},a.MAX_VALUE_16BITS=65535,a.MAX_VALUE_32BITS=-1,a.pretty=function(y){var S,M,T="";for(M=0;M<(y||"").length;M++)T+="\\x"+((S=y.charCodeAt(M))<16?"0":"")+S.toString(16).toUpperCase();return T},a.delay=function(y,S,M){d(function(){y.apply(M||null,S||[])})},a.inherits=function(y,S){function M(){}M.prototype=S.prototype,y.prototype=new M},a.extend=function(){var y,S,M={};for(y=0;y<arguments.length;y++)for(S in arguments[y])arguments[y].hasOwnProperty(S)&&M[S]===void 0&&(M[S]=arguments[y][S]);return M},a.prepareContent=function(y,S,M,T,O){return h.Promise.resolve(S).then(function(z){return s.blob&&(z instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(z))!==-1)&&typeof FileReader<"u"?new h.Promise(function(K,Z){var oe=new FileReader;oe.onload=function(G){K(G.target.result)},oe.onerror=function(G){Z(G.target.error)},oe.readAsArrayBuffer(z)}):z}).then(function(z){var K=a.getTypeOf(z);return K?(K==="arraybuffer"?z=a.transformTo("uint8array",z):K==="string"&&(O?z=l.decode(z):M&&T!==!0&&(z=(function(Z){return b(Z,s.uint8array?new Uint8Array(Z.length):new Array(Z.length))})(z))),z):h.Promise.reject(new Error("Can't read the data of '"+y+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,"set-immediate-shim":54}],33:[function(r,i,a){"use strict";var s=r("./reader/readerFor"),l=r("./utils"),u=r("./signature"),d=r("./zipEntry"),h=(r("./utf8"),r("./support"));function f(b){this.files=[],this.loadOptions=b}f.prototype={checkSignature:function(b){if(!this.reader.readAndCheckSignature(b)){this.reader.index-=4;var v=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+l.pretty(v)+", expected "+l.pretty(b)+")")}},isSignature:function(b,v){var m=this.reader.index;this.reader.setIndex(b);var g=this.reader.readString(4)===v;return this.reader.setIndex(m),g},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var b=this.reader.readData(this.zipCommentLength),v=h.uint8array?"uint8array":"array",m=l.transformTo(v,b);this.zipComment=this.loadOptions.decodeFileName(m)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var b,v,m,g=this.zip64EndOfCentralSize-44;0<g;)b=this.reader.readInt(2),v=this.reader.readInt(4),m=this.reader.readData(v),this.zip64ExtensibleData[b]={id:b,length:v,value:m}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var b,v;for(b=0;b<this.files.length;b++)v=this.files[b],this.reader.setIndex(v.localHeaderOffset),this.checkSignature(u.LOCAL_FILE_HEADER),v.readLocalPart(this.reader),v.handleUTF8(),v.processAttributes()},readCentralDir:function(){var b;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(u.CENTRAL_FILE_HEADER);)(b=new d({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(b);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var b=this.reader.lastIndexOfSignature(u.CENTRAL_DIRECTORY_END);if(b<0)throw this.isSignature(0,u.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(b);var v=b;if(this.checkSignature(u.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===l.MAX_VALUE_16BITS||this.diskWithCentralDirStart===l.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===l.MAX_VALUE_16BITS||this.centralDirRecords===l.MAX_VALUE_16BITS||this.centralDirSize===l.MAX_VALUE_32BITS||this.centralDirOffset===l.MAX_VALUE_32BITS){if(this.zip64=!0,(b=this.reader.lastIndexOfSignature(u.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(b),this.checkSignature(u.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,u.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(u.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(u.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var m=this.centralDirOffset+this.centralDirSize;this.zip64&&(m+=20,m+=12+this.zip64EndOfCentralSize);var g=v-m;if(0<g)this.isSignature(v,u.CENTRAL_FILE_HEADER)||(this.reader.zero=g);else if(g<0)throw new Error("Corrupted zip: missing "+Math.abs(g)+" bytes.")},prepareReader:function(b){this.reader=s(b)},load:function(b){this.prepareReader(b),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},i.exports=f},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utf8":31,"./utils":32,"./zipEntry":34}],34:[function(r,i,a){"use strict";var s=r("./reader/readerFor"),l=r("./utils"),u=r("./compressedObject"),d=r("./crc32"),h=r("./utf8"),f=r("./compressions"),b=r("./support");function v(m,g){this.options=m,this.loadOptions=g}v.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(m){var g,k;if(m.skip(22),this.fileNameLength=m.readInt(2),k=m.readInt(2),this.fileName=m.readData(this.fileNameLength),m.skip(k),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((g=(function(y){for(var S in f)if(f.hasOwnProperty(S)&&f[S].magic===y)return f[S];return null})(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+l.pretty(this.compressionMethod)+" unknown (inner file : "+l.transformTo("string",this.fileName)+")");this.decompressed=new u(this.compressedSize,this.uncompressedSize,this.crc32,g,m.readData(this.compressedSize))},readCentralPart:function(m){this.versionMadeBy=m.readInt(2),m.skip(2),this.bitFlag=m.readInt(2),this.compressionMethod=m.readString(2),this.date=m.readDate(),this.crc32=m.readInt(4),this.compressedSize=m.readInt(4),this.uncompressedSize=m.readInt(4);var g=m.readInt(2);if(this.extraFieldsLength=m.readInt(2),this.fileCommentLength=m.readInt(2),this.diskNumberStart=m.readInt(2),this.internalFileAttributes=m.readInt(2),this.externalFileAttributes=m.readInt(4),this.localHeaderOffset=m.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");m.skip(g),this.readExtraFields(m),this.parseZIP64ExtraField(m),this.fileComment=m.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var m=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),m==0&&(this.dosPermissions=63&this.externalFileAttributes),m==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(m){if(this.extraFields[1]){var g=s(this.extraFields[1].value);this.uncompressedSize===l.MAX_VALUE_32BITS&&(this.uncompressedSize=g.readInt(8)),this.compressedSize===l.MAX_VALUE_32BITS&&(this.compressedSize=g.readInt(8)),this.localHeaderOffset===l.MAX_VALUE_32BITS&&(this.localHeaderOffset=g.readInt(8)),this.diskNumberStart===l.MAX_VALUE_32BITS&&(this.diskNumberStart=g.readInt(4))}},readExtraFields:function(m){var g,k,y,S=m.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});m.index+4<S;)g=m.readInt(2),k=m.readInt(2),y=m.readData(k),this.extraFields[g]={id:g,length:k,value:y};m.setIndex(S)},handleUTF8:function(){var m=b.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=h.utf8decode(this.fileName),this.fileCommentStr=h.utf8decode(this.fileComment);else{var g=this.findExtraFieldUnicodePath();if(g!==null)this.fileNameStr=g;else{var k=l.transformTo(m,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(k)}var y=this.findExtraFieldUnicodeComment();if(y!==null)this.fileCommentStr=y;else{var S=l.transformTo(m,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(S)}}},findExtraFieldUnicodePath:function(){var m=this.extraFields[28789];if(m){var g=s(m.value);return g.readInt(1)!==1||d(this.fileName)!==g.readInt(4)?null:h.utf8decode(g.readData(m.length-5))}return null},findExtraFieldUnicodeComment:function(){var m=this.extraFields[25461];if(m){var g=s(m.value);return g.readInt(1)!==1||d(this.fileComment)!==g.readInt(4)?null:h.utf8decode(g.readData(m.length-5))}return null}},i.exports=v},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(r,i,a){"use strict";function s(g,k,y){this.name=g,this.dir=y.dir,this.date=y.date,this.comment=y.comment,this.unixPermissions=y.unixPermissions,this.dosPermissions=y.dosPermissions,this._data=k,this._dataBinary=y.binary,this.options={compression:y.compression,compressionOptions:y.compressionOptions}}var l=r("./stream/StreamHelper"),u=r("./stream/DataWorker"),d=r("./utf8"),h=r("./compressedObject"),f=r("./stream/GenericWorker");s.prototype={internalStream:function(g){var k=null,y="string";try{if(!g)throw new Error("No output type specified.");var S=(y=g.toLowerCase())==="string"||y==="text";y!=="binarystring"&&y!=="text"||(y="string"),k=this._decompressWorker();var M=!this._dataBinary;M&&!S&&(k=k.pipe(new d.Utf8EncodeWorker)),!M&&S&&(k=k.pipe(new d.Utf8DecodeWorker))}catch(T){(k=new f("error")).error(T)}return new l(k,y,"")},async:function(g,k){return this.internalStream(g).accumulate(k)},nodeStream:function(g,k){return this.internalStream(g||"nodebuffer").toNodejsStream(k)},_compressWorker:function(g,k){if(this._data instanceof h&&this._data.compression.magic===g.magic)return this._data.getCompressedWorker();var y=this._decompressWorker();return this._dataBinary||(y=y.pipe(new d.Utf8EncodeWorker)),h.createWorkerFrom(y,g,k)},_decompressWorker:function(){return this._data instanceof h?this._data.getContentWorker():this._data instanceof f?this._data:new u(this._data)}};for(var b=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],v=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},m=0;m<b.length;m++)s.prototype[b[m]]=v;i.exports=s},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(r,i,a){(function(s){"use strict";var l,u,d=s.MutationObserver||s.WebKitMutationObserver;if(d){var h=0,f=new d(g),b=s.document.createTextNode("");f.observe(b,{characterData:!0}),l=function(){b.data=h=++h%2}}else if(s.setImmediate||s.MessageChannel===void 0)l="document"in s&&"onreadystatechange"in s.document.createElement("script")?function(){var k=s.document.createElement("script");k.onreadystatechange=function(){g(),k.onreadystatechange=null,k.parentNode.removeChild(k),k=null},s.document.documentElement.appendChild(k)}:function(){setTimeout(g,0)};else{var v=new s.MessageChannel;v.port1.onmessage=g,l=function(){v.port2.postMessage(0)}}var m=[];function g(){var k,y;u=!0;for(var S=m.length;S;){for(y=m,m=[],k=-1;++k<S;)y[k]();S=m.length}u=!1}i.exports=function(k){m.push(k)!==1||u||l()}}).call(this,typeof global<"u"?global:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(r,i,a){"use strict";var s=r("immediate");function l(){}var u={},d=["REJECTED"],h=["FULFILLED"],f=["PENDING"];function b(S){if(typeof S!="function")throw new TypeError("resolver must be a function");this.state=f,this.queue=[],this.outcome=void 0,S!==l&&k(this,S)}function v(S,M,T){this.promise=S,typeof M=="function"&&(this.onFulfilled=M,this.callFulfilled=this.otherCallFulfilled),typeof T=="function"&&(this.onRejected=T,this.callRejected=this.otherCallRejected)}function m(S,M,T){s(function(){var O;try{O=M(T)}catch(z){return u.reject(S,z)}O===S?u.reject(S,new TypeError("Cannot resolve promise with itself")):u.resolve(S,O)})}function g(S){var M=S&&S.then;if(S&&(typeof S=="object"||typeof S=="function")&&typeof M=="function")return function(){M.apply(S,arguments)}}function k(S,M){var T=!1;function O(Z){T||(T=!0,u.reject(S,Z))}function z(Z){T||(T=!0,u.resolve(S,Z))}var K=y(function(){M(z,O)});K.status==="error"&&O(K.value)}function y(S,M){var T={};try{T.value=S(M),T.status="success"}catch(O){T.status="error",T.value=O}return T}(i.exports=b).prototype.finally=function(S){if(typeof S!="function")return this;var M=this.constructor;return this.then(function(T){return M.resolve(S()).then(function(){return T})},function(T){return M.resolve(S()).then(function(){throw T})})},b.prototype.catch=function(S){return this.then(null,S)},b.prototype.then=function(S,M){if(typeof S!="function"&&this.state===h||typeof M!="function"&&this.state===d)return this;var T=new this.constructor(l);return this.state!==f?m(T,this.state===h?S:M,this.outcome):this.queue.push(new v(T,S,M)),T},v.prototype.callFulfilled=function(S){u.resolve(this.promise,S)},v.prototype.otherCallFulfilled=function(S){m(this.promise,this.onFulfilled,S)},v.prototype.callRejected=function(S){u.reject(this.promise,S)},v.prototype.otherCallRejected=function(S){m(this.promise,this.onRejected,S)},u.resolve=function(S,M){var T=y(g,M);if(T.status==="error")return u.reject(S,T.value);var O=T.value;if(O)k(S,O);else{S.state=h,S.outcome=M;for(var z=-1,K=S.queue.length;++z<K;)S.queue[z].callFulfilled(M)}return S},u.reject=function(S,M){S.state=d,S.outcome=M;for(var T=-1,O=S.queue.length;++T<O;)S.queue[T].callRejected(M);return S},b.resolve=function(S){return S instanceof this?S:u.resolve(new this(l),S)},b.reject=function(S){var M=new this(l);return u.reject(M,S)},b.all=function(S){var M=this;if(Object.prototype.toString.call(S)!=="[object Array]")return this.reject(new TypeError("must be an array"));var T=S.length,O=!1;if(!T)return this.resolve([]);for(var z=new Array(T),K=0,Z=-1,oe=new this(l);++Z<T;)G(S[Z],Z);return oe;function G(pe,we){M.resolve(pe).then(function(R){z[we]=R,++K!==T||O||(O=!0,u.resolve(oe,z))},function(R){O||(O=!0,u.reject(oe,R))})}},b.race=function(S){var M=this;if(Object.prototype.toString.call(S)!=="[object Array]")return this.reject(new TypeError("must be an array"));var T=S.length,O=!1;if(!T)return this.resolve([]);for(var z=-1,K=new this(l);++z<T;)Z=S[z],M.resolve(Z).then(function(oe){O||(O=!0,u.resolve(K,oe))},function(oe){O||(O=!0,u.reject(K,oe))});var Z;return K}},{immediate:36}],38:[function(r,i,a){"use strict";var s={};(0,r("./lib/utils/common").assign)(s,r("./lib/deflate"),r("./lib/inflate"),r("./lib/zlib/constants")),i.exports=s},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(r,i,a){"use strict";var s=r("./zlib/deflate"),l=r("./utils/common"),u=r("./utils/strings"),d=r("./zlib/messages"),h=r("./zlib/zstream"),f=Object.prototype.toString,b=0,v=-1,m=0,g=8;function k(S){if(!(this instanceof k))return new k(S);this.options=l.assign({level:v,method:g,chunkSize:16384,windowBits:15,memLevel:8,strategy:m,to:""},S||{});var M=this.options;M.raw&&0<M.windowBits?M.windowBits=-M.windowBits:M.gzip&&0<M.windowBits&&M.windowBits<16&&(M.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new h,this.strm.avail_out=0;var T=s.deflateInit2(this.strm,M.level,M.method,M.windowBits,M.memLevel,M.strategy);if(T!==b)throw new Error(d[T]);if(M.header&&s.deflateSetHeader(this.strm,M.header),M.dictionary){var O;if(O=typeof M.dictionary=="string"?u.string2buf(M.dictionary):f.call(M.dictionary)==="[object ArrayBuffer]"?new Uint8Array(M.dictionary):M.dictionary,(T=s.deflateSetDictionary(this.strm,O))!==b)throw new Error(d[T]);this._dict_set=!0}}function y(S,M){var T=new k(M);if(T.push(S,!0),T.err)throw T.msg||d[T.err];return T.result}k.prototype.push=function(S,M){var T,O,z=this.strm,K=this.options.chunkSize;if(this.ended)return!1;O=M===~~M?M:M===!0?4:0,typeof S=="string"?z.input=u.string2buf(S):f.call(S)==="[object ArrayBuffer]"?z.input=new Uint8Array(S):z.input=S,z.next_in=0,z.avail_in=z.input.length;do{if(z.avail_out===0&&(z.output=new l.Buf8(K),z.next_out=0,z.avail_out=K),(T=s.deflate(z,O))!==1&&T!==b)return this.onEnd(T),!(this.ended=!0);z.avail_out!==0&&(z.avail_in!==0||O!==4&&O!==2)||(this.options.to==="string"?this.onData(u.buf2binstring(l.shrinkBuf(z.output,z.next_out))):this.onData(l.shrinkBuf(z.output,z.next_out)))}while((0<z.avail_in||z.avail_out===0)&&T!==1);return O===4?(T=s.deflateEnd(this.strm),this.onEnd(T),this.ended=!0,T===b):O!==2||(this.onEnd(b),!(z.avail_out=0))},k.prototype.onData=function(S){this.chunks.push(S)},k.prototype.onEnd=function(S){S===b&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=l.flattenChunks(this.chunks)),this.chunks=[],this.err=S,this.msg=this.strm.msg},a.Deflate=k,a.deflate=y,a.deflateRaw=function(S,M){return(M=M||{}).raw=!0,y(S,M)},a.gzip=function(S,M){return(M=M||{}).gzip=!0,y(S,M)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(r,i,a){"use strict";var s=r("./zlib/inflate"),l=r("./utils/common"),u=r("./utils/strings"),d=r("./zlib/constants"),h=r("./zlib/messages"),f=r("./zlib/zstream"),b=r("./zlib/gzheader"),v=Object.prototype.toString;function m(k){if(!(this instanceof m))return new m(k);this.options=l.assign({chunkSize:16384,windowBits:0,to:""},k||{});var y=this.options;y.raw&&0<=y.windowBits&&y.windowBits<16&&(y.windowBits=-y.windowBits,y.windowBits===0&&(y.windowBits=-15)),!(0<=y.windowBits&&y.windowBits<16)||k&&k.windowBits||(y.windowBits+=32),15<y.windowBits&&y.windowBits<48&&(15&y.windowBits)==0&&(y.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new f,this.strm.avail_out=0;var S=s.inflateInit2(this.strm,y.windowBits);if(S!==d.Z_OK)throw new Error(h[S]);this.header=new b,s.inflateGetHeader(this.strm,this.header)}function g(k,y){var S=new m(y);if(S.push(k,!0),S.err)throw S.msg||h[S.err];return S.result}m.prototype.push=function(k,y){var S,M,T,O,z,K,Z=this.strm,oe=this.options.chunkSize,G=this.options.dictionary,pe=!1;if(this.ended)return!1;M=y===~~y?y:y===!0?d.Z_FINISH:d.Z_NO_FLUSH,typeof k=="string"?Z.input=u.binstring2buf(k):v.call(k)==="[object ArrayBuffer]"?Z.input=new Uint8Array(k):Z.input=k,Z.next_in=0,Z.avail_in=Z.input.length;do{if(Z.avail_out===0&&(Z.output=new l.Buf8(oe),Z.next_out=0,Z.avail_out=oe),(S=s.inflate(Z,d.Z_NO_FLUSH))===d.Z_NEED_DICT&&G&&(K=typeof G=="string"?u.string2buf(G):v.call(G)==="[object ArrayBuffer]"?new Uint8Array(G):G,S=s.inflateSetDictionary(this.strm,K)),S===d.Z_BUF_ERROR&&pe===!0&&(S=d.Z_OK,pe=!1),S!==d.Z_STREAM_END&&S!==d.Z_OK)return this.onEnd(S),!(this.ended=!0);Z.next_out&&(Z.avail_out!==0&&S!==d.Z_STREAM_END&&(Z.avail_in!==0||M!==d.Z_FINISH&&M!==d.Z_SYNC_FLUSH)||(this.options.to==="string"?(T=u.utf8border(Z.output,Z.next_out),O=Z.next_out-T,z=u.buf2string(Z.output,T),Z.next_out=O,Z.avail_out=oe-O,O&&l.arraySet(Z.output,Z.output,T,O,0),this.onData(z)):this.onData(l.shrinkBuf(Z.output,Z.next_out)))),Z.avail_in===0&&Z.avail_out===0&&(pe=!0)}while((0<Z.avail_in||Z.avail_out===0)&&S!==d.Z_STREAM_END);return S===d.Z_STREAM_END&&(M=d.Z_FINISH),M===d.Z_FINISH?(S=s.inflateEnd(this.strm),this.onEnd(S),this.ended=!0,S===d.Z_OK):M!==d.Z_SYNC_FLUSH||(this.onEnd(d.Z_OK),!(Z.avail_out=0))},m.prototype.onData=function(k){this.chunks.push(k)},m.prototype.onEnd=function(k){k===d.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=l.flattenChunks(this.chunks)),this.chunks=[],this.err=k,this.msg=this.strm.msg},a.Inflate=m,a.inflate=g,a.inflateRaw=function(k,y){return(y=y||{}).raw=!0,g(k,y)},a.ungzip=g},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(r,i,a){"use strict";var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";a.assign=function(d){for(var h=Array.prototype.slice.call(arguments,1);h.length;){var f=h.shift();if(f){if(typeof f!="object")throw new TypeError(f+"must be non-object");for(var b in f)f.hasOwnProperty(b)&&(d[b]=f[b])}}return d},a.shrinkBuf=function(d,h){return d.length===h?d:d.subarray?d.subarray(0,h):(d.length=h,d)};var l={arraySet:function(d,h,f,b,v){if(h.subarray&&d.subarray)d.set(h.subarray(f,f+b),v);else for(var m=0;m<b;m++)d[v+m]=h[f+m]},flattenChunks:function(d){var h,f,b,v,m,g;for(h=b=0,f=d.length;h<f;h++)b+=d[h].length;for(g=new Uint8Array(b),h=v=0,f=d.length;h<f;h++)m=d[h],g.set(m,v),v+=m.length;return g}},u={arraySet:function(d,h,f,b,v){for(var m=0;m<b;m++)d[v+m]=h[f+m]},flattenChunks:function(d){return[].concat.apply([],d)}};a.setTyped=function(d){d?(a.Buf8=Uint8Array,a.Buf16=Uint16Array,a.Buf32=Int32Array,a.assign(a,l)):(a.Buf8=Array,a.Buf16=Array,a.Buf32=Array,a.assign(a,u))},a.setTyped(s)},{}],42:[function(r,i,a){"use strict";var s=r("./common"),l=!0,u=!0;try{String.fromCharCode.apply(null,[0])}catch{l=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{u=!1}for(var d=new s.Buf8(256),h=0;h<256;h++)d[h]=252<=h?6:248<=h?5:240<=h?4:224<=h?3:192<=h?2:1;function f(b,v){if(v<65537&&(b.subarray&&u||!b.subarray&&l))return String.fromCharCode.apply(null,s.shrinkBuf(b,v));for(var m="",g=0;g<v;g++)m+=String.fromCharCode(b[g]);return m}d[254]=d[254]=1,a.string2buf=function(b){var v,m,g,k,y,S=b.length,M=0;for(k=0;k<S;k++)(64512&(m=b.charCodeAt(k)))==55296&&k+1<S&&(64512&(g=b.charCodeAt(k+1)))==56320&&(m=65536+(m-55296<<10)+(g-56320),k++),M+=m<128?1:m<2048?2:m<65536?3:4;for(v=new s.Buf8(M),k=y=0;y<M;k++)(64512&(m=b.charCodeAt(k)))==55296&&k+1<S&&(64512&(g=b.charCodeAt(k+1)))==56320&&(m=65536+(m-55296<<10)+(g-56320),k++),m<128?v[y++]=m:(m<2048?v[y++]=192|m>>>6:(m<65536?v[y++]=224|m>>>12:(v[y++]=240|m>>>18,v[y++]=128|m>>>12&63),v[y++]=128|m>>>6&63),v[y++]=128|63&m);return v},a.buf2binstring=function(b){return f(b,b.length)},a.binstring2buf=function(b){for(var v=new s.Buf8(b.length),m=0,g=v.length;m<g;m++)v[m]=b.charCodeAt(m);return v},a.buf2string=function(b,v){var m,g,k,y,S=v||b.length,M=new Array(2*S);for(m=g=0;m<S;)if((k=b[m++])<128)M[g++]=k;else if(4<(y=d[k]))M[g++]=65533,m+=y-1;else{for(k&=y===2?31:y===3?15:7;1<y&&m<S;)k=k<<6|63&b[m++],y--;1<y?M[g++]=65533:k<65536?M[g++]=k:(k-=65536,M[g++]=55296|k>>10&1023,M[g++]=56320|1023&k)}return f(M,g)},a.utf8border=function(b,v){var m;for((v=v||b.length)>b.length&&(v=b.length),m=v-1;0<=m&&(192&b[m])==128;)m--;return m<0||m===0?v:m+d[b[m]]>v?m:v}},{"./common":41}],43:[function(r,i,a){"use strict";i.exports=function(s,l,u,d){for(var h=65535&s|0,f=s>>>16&65535|0,b=0;u!==0;){for(u-=b=2e3<u?2e3:u;f=f+(h=h+l[d++]|0)|0,--b;);h%=65521,f%=65521}return h|f<<16|0}},{}],44:[function(r,i,a){"use strict";i.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(r,i,a){"use strict";var s=(function(){for(var l,u=[],d=0;d<256;d++){l=d;for(var h=0;h<8;h++)l=1&l?3988292384^l>>>1:l>>>1;u[d]=l}return u})();i.exports=function(l,u,d,h){var f=s,b=h+d;l^=-1;for(var v=h;v<b;v++)l=l>>>8^f[255&(l^u[v])];return-1^l}},{}],46:[function(r,i,a){"use strict";var s,l=r("../utils/common"),u=r("./trees"),d=r("./adler32"),h=r("./crc32"),f=r("./messages"),b=0,v=4,m=0,g=-2,k=-1,y=4,S=2,M=8,T=9,O=286,z=30,K=19,Z=2*O+1,oe=15,G=3,pe=258,we=pe+G+1,R=42,X=113,E=1,Q=2,Ie=3,ce=4;function Ce(w,J){return w.msg=f[J],J}function ie(w){return(w<<1)-(4<w?9:0)}function Me(w){for(var J=w.length;0<=--J;)w[J]=0}function W(w){var J=w.state,V=J.pending;V>w.avail_out&&(V=w.avail_out),V!==0&&(l.arraySet(w.output,J.pending_buf,J.pending_out,V,w.next_out),w.next_out+=V,J.pending_out+=V,w.total_out+=V,w.avail_out-=V,J.pending-=V,J.pending===0&&(J.pending_out=0))}function F(w,J){u._tr_flush_block(w,0<=w.block_start?w.block_start:-1,w.strstart-w.block_start,J),w.block_start=w.strstart,W(w.strm)}function Se(w,J){w.pending_buf[w.pending++]=J}function ge(w,J){w.pending_buf[w.pending++]=J>>>8&255,w.pending_buf[w.pending++]=255&J}function fe(w,J){var V,C,I=w.max_chain_length,B=w.strstart,ae=w.prev_length,se=w.nice_match,H=w.strstart>w.w_size-we?w.strstart-(w.w_size-we):0,de=w.window,me=w.w_mask,ue=w.prev,Ee=w.strstart+pe,et=de[B+ae-1],We=de[B+ae];w.prev_length>=w.good_match&&(I>>=2),se>w.lookahead&&(se=w.lookahead);do if(de[(V=J)+ae]===We&&de[V+ae-1]===et&&de[V]===de[B]&&de[++V]===de[B+1]){B+=2,V++;do;while(de[++B]===de[++V]&&de[++B]===de[++V]&&de[++B]===de[++V]&&de[++B]===de[++V]&&de[++B]===de[++V]&&de[++B]===de[++V]&&de[++B]===de[++V]&&de[++B]===de[++V]&&B<Ee);if(C=pe-(Ee-B),B=Ee-pe,ae<C){if(w.match_start=J,se<=(ae=C))break;et=de[B+ae-1],We=de[B+ae]}}while((J=ue[J&me])>H&&--I!=0);return ae<=w.lookahead?ae:w.lookahead}function qe(w){var J,V,C,I,B,ae,se,H,de,me,ue=w.w_size;do{if(I=w.window_size-w.lookahead-w.strstart,w.strstart>=ue+(ue-we)){for(l.arraySet(w.window,w.window,ue,ue,0),w.match_start-=ue,w.strstart-=ue,w.block_start-=ue,J=V=w.hash_size;C=w.head[--J],w.head[J]=ue<=C?C-ue:0,--V;);for(J=V=ue;C=w.prev[--J],w.prev[J]=ue<=C?C-ue:0,--V;);I+=ue}if(w.strm.avail_in===0)break;if(ae=w.strm,se=w.window,H=w.strstart+w.lookahead,de=I,me=void 0,me=ae.avail_in,de<me&&(me=de),V=me===0?0:(ae.avail_in-=me,l.arraySet(se,ae.input,ae.next_in,me,H),ae.state.wrap===1?ae.adler=d(ae.adler,se,me,H):ae.state.wrap===2&&(ae.adler=h(ae.adler,se,me,H)),ae.next_in+=me,ae.total_in+=me,me),w.lookahead+=V,w.lookahead+w.insert>=G)for(B=w.strstart-w.insert,w.ins_h=w.window[B],w.ins_h=(w.ins_h<<w.hash_shift^w.window[B+1])&w.hash_mask;w.insert&&(w.ins_h=(w.ins_h<<w.hash_shift^w.window[B+G-1])&w.hash_mask,w.prev[B&w.w_mask]=w.head[w.ins_h],w.head[w.ins_h]=B,B++,w.insert--,!(w.lookahead+w.insert<G)););}while(w.lookahead<we&&w.strm.avail_in!==0)}function gt(w,J){for(var V,C;;){if(w.lookahead<we){if(qe(w),w.lookahead<we&&J===b)return E;if(w.lookahead===0)break}if(V=0,w.lookahead>=G&&(w.ins_h=(w.ins_h<<w.hash_shift^w.window[w.strstart+G-1])&w.hash_mask,V=w.prev[w.strstart&w.w_mask]=w.head[w.ins_h],w.head[w.ins_h]=w.strstart),V!==0&&w.strstart-V<=w.w_size-we&&(w.match_length=fe(w,V)),w.match_length>=G)if(C=u._tr_tally(w,w.strstart-w.match_start,w.match_length-G),w.lookahead-=w.match_length,w.match_length<=w.max_lazy_match&&w.lookahead>=G){for(w.match_length--;w.strstart++,w.ins_h=(w.ins_h<<w.hash_shift^w.window[w.strstart+G-1])&w.hash_mask,V=w.prev[w.strstart&w.w_mask]=w.head[w.ins_h],w.head[w.ins_h]=w.strstart,--w.match_length!=0;);w.strstart++}else w.strstart+=w.match_length,w.match_length=0,w.ins_h=w.window[w.strstart],w.ins_h=(w.ins_h<<w.hash_shift^w.window[w.strstart+1])&w.hash_mask;else C=u._tr_tally(w,0,w.window[w.strstart]),w.lookahead--,w.strstart++;if(C&&(F(w,!1),w.strm.avail_out===0))return E}return w.insert=w.strstart<G-1?w.strstart:G-1,J===v?(F(w,!0),w.strm.avail_out===0?Ie:ce):w.last_lit&&(F(w,!1),w.strm.avail_out===0)?E:Q}function Ue(w,J){for(var V,C,I;;){if(w.lookahead<we){if(qe(w),w.lookahead<we&&J===b)return E;if(w.lookahead===0)break}if(V=0,w.lookahead>=G&&(w.ins_h=(w.ins_h<<w.hash_shift^w.window[w.strstart+G-1])&w.hash_mask,V=w.prev[w.strstart&w.w_mask]=w.head[w.ins_h],w.head[w.ins_h]=w.strstart),w.prev_length=w.match_length,w.prev_match=w.match_start,w.match_length=G-1,V!==0&&w.prev_length<w.max_lazy_match&&w.strstart-V<=w.w_size-we&&(w.match_length=fe(w,V),w.match_length<=5&&(w.strategy===1||w.match_length===G&&4096<w.strstart-w.match_start)&&(w.match_length=G-1)),w.prev_length>=G&&w.match_length<=w.prev_length){for(I=w.strstart+w.lookahead-G,C=u._tr_tally(w,w.strstart-1-w.prev_match,w.prev_length-G),w.lookahead-=w.prev_length-1,w.prev_length-=2;++w.strstart<=I&&(w.ins_h=(w.ins_h<<w.hash_shift^w.window[w.strstart+G-1])&w.hash_mask,V=w.prev[w.strstart&w.w_mask]=w.head[w.ins_h],w.head[w.ins_h]=w.strstart),--w.prev_length!=0;);if(w.match_available=0,w.match_length=G-1,w.strstart++,C&&(F(w,!1),w.strm.avail_out===0))return E}else if(w.match_available){if((C=u._tr_tally(w,0,w.window[w.strstart-1]))&&F(w,!1),w.strstart++,w.lookahead--,w.strm.avail_out===0)return E}else w.match_available=1,w.strstart++,w.lookahead--}return w.match_available&&(C=u._tr_tally(w,0,w.window[w.strstart-1]),w.match_available=0),w.insert=w.strstart<G-1?w.strstart:G-1,J===v?(F(w,!0),w.strm.avail_out===0?Ie:ce):w.last_lit&&(F(w,!1),w.strm.avail_out===0)?E:Q}function Ge(w,J,V,C,I){this.good_length=w,this.max_lazy=J,this.nice_length=V,this.max_chain=C,this.func=I}function ht(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=M,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new l.Buf16(2*Z),this.dyn_dtree=new l.Buf16(2*(2*z+1)),this.bl_tree=new l.Buf16(2*(2*K+1)),Me(this.dyn_ltree),Me(this.dyn_dtree),Me(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new l.Buf16(oe+1),this.heap=new l.Buf16(2*O+1),Me(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new l.Buf16(2*O+1),Me(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function mt(w){var J;return w&&w.state?(w.total_in=w.total_out=0,w.data_type=S,(J=w.state).pending=0,J.pending_out=0,J.wrap<0&&(J.wrap=-J.wrap),J.status=J.wrap?R:X,w.adler=J.wrap===2?0:1,J.last_flush=b,u._tr_init(J),m):Ce(w,g)}function Zt(w){var J=mt(w);return J===m&&(function(V){V.window_size=2*V.w_size,Me(V.head),V.max_lazy_match=s[V.level].max_lazy,V.good_match=s[V.level].good_length,V.nice_match=s[V.level].nice_length,V.max_chain_length=s[V.level].max_chain,V.strstart=0,V.block_start=0,V.lookahead=0,V.insert=0,V.match_length=V.prev_length=G-1,V.match_available=0,V.ins_h=0})(w.state),J}function Gt(w,J,V,C,I,B){if(!w)return g;var ae=1;if(J===k&&(J=6),C<0?(ae=0,C=-C):15<C&&(ae=2,C-=16),I<1||T<I||V!==M||C<8||15<C||J<0||9<J||B<0||y<B)return Ce(w,g);C===8&&(C=9);var se=new ht;return(w.state=se).strm=w,se.wrap=ae,se.gzhead=null,se.w_bits=C,se.w_size=1<<se.w_bits,se.w_mask=se.w_size-1,se.hash_bits=I+7,se.hash_size=1<<se.hash_bits,se.hash_mask=se.hash_size-1,se.hash_shift=~~((se.hash_bits+G-1)/G),se.window=new l.Buf8(2*se.w_size),se.head=new l.Buf16(se.hash_size),se.prev=new l.Buf16(se.w_size),se.lit_bufsize=1<<I+6,se.pending_buf_size=4*se.lit_bufsize,se.pending_buf=new l.Buf8(se.pending_buf_size),se.d_buf=1*se.lit_bufsize,se.l_buf=3*se.lit_bufsize,se.level=J,se.strategy=B,se.method=V,Zt(w)}s=[new Ge(0,0,0,0,function(w,J){var V=65535;for(V>w.pending_buf_size-5&&(V=w.pending_buf_size-5);;){if(w.lookahead<=1){if(qe(w),w.lookahead===0&&J===b)return E;if(w.lookahead===0)break}w.strstart+=w.lookahead,w.lookahead=0;var C=w.block_start+V;if((w.strstart===0||w.strstart>=C)&&(w.lookahead=w.strstart-C,w.strstart=C,F(w,!1),w.strm.avail_out===0)||w.strstart-w.block_start>=w.w_size-we&&(F(w,!1),w.strm.avail_out===0))return E}return w.insert=0,J===v?(F(w,!0),w.strm.avail_out===0?Ie:ce):(w.strstart>w.block_start&&(F(w,!1),w.strm.avail_out),E)}),new Ge(4,4,8,4,gt),new Ge(4,5,16,8,gt),new Ge(4,6,32,32,gt),new Ge(4,4,16,16,Ue),new Ge(8,16,32,32,Ue),new Ge(8,16,128,128,Ue),new Ge(8,32,128,256,Ue),new Ge(32,128,258,1024,Ue),new Ge(32,258,258,4096,Ue)],a.deflateInit=function(w,J){return Gt(w,J,M,15,8,0)},a.deflateInit2=Gt,a.deflateReset=Zt,a.deflateResetKeep=mt,a.deflateSetHeader=function(w,J){return w&&w.state?w.state.wrap!==2?g:(w.state.gzhead=J,m):g},a.deflate=function(w,J){var V,C,I,B;if(!w||!w.state||5<J||J<0)return w?Ce(w,g):g;if(C=w.state,!w.output||!w.input&&w.avail_in!==0||C.status===666&&J!==v)return Ce(w,w.avail_out===0?-5:g);if(C.strm=w,V=C.last_flush,C.last_flush=J,C.status===R)if(C.wrap===2)w.adler=0,Se(C,31),Se(C,139),Se(C,8),C.gzhead?(Se(C,(C.gzhead.text?1:0)+(C.gzhead.hcrc?2:0)+(C.gzhead.extra?4:0)+(C.gzhead.name?8:0)+(C.gzhead.comment?16:0)),Se(C,255&C.gzhead.time),Se(C,C.gzhead.time>>8&255),Se(C,C.gzhead.time>>16&255),Se(C,C.gzhead.time>>24&255),Se(C,C.level===9?2:2<=C.strategy||C.level<2?4:0),Se(C,255&C.gzhead.os),C.gzhead.extra&&C.gzhead.extra.length&&(Se(C,255&C.gzhead.extra.length),Se(C,C.gzhead.extra.length>>8&255)),C.gzhead.hcrc&&(w.adler=h(w.adler,C.pending_buf,C.pending,0)),C.gzindex=0,C.status=69):(Se(C,0),Se(C,0),Se(C,0),Se(C,0),Se(C,0),Se(C,C.level===9?2:2<=C.strategy||C.level<2?4:0),Se(C,3),C.status=X);else{var ae=M+(C.w_bits-8<<4)<<8;ae|=(2<=C.strategy||C.level<2?0:C.level<6?1:C.level===6?2:3)<<6,C.strstart!==0&&(ae|=32),ae+=31-ae%31,C.status=X,ge(C,ae),C.strstart!==0&&(ge(C,w.adler>>>16),ge(C,65535&w.adler)),w.adler=1}if(C.status===69)if(C.gzhead.extra){for(I=C.pending;C.gzindex<(65535&C.gzhead.extra.length)&&(C.pending!==C.pending_buf_size||(C.gzhead.hcrc&&C.pending>I&&(w.adler=h(w.adler,C.pending_buf,C.pending-I,I)),W(w),I=C.pending,C.pending!==C.pending_buf_size));)Se(C,255&C.gzhead.extra[C.gzindex]),C.gzindex++;C.gzhead.hcrc&&C.pending>I&&(w.adler=h(w.adler,C.pending_buf,C.pending-I,I)),C.gzindex===C.gzhead.extra.length&&(C.gzindex=0,C.status=73)}else C.status=73;if(C.status===73)if(C.gzhead.name){I=C.pending;do{if(C.pending===C.pending_buf_size&&(C.gzhead.hcrc&&C.pending>I&&(w.adler=h(w.adler,C.pending_buf,C.pending-I,I)),W(w),I=C.pending,C.pending===C.pending_buf_size)){B=1;break}B=C.gzindex<C.gzhead.name.length?255&C.gzhead.name.charCodeAt(C.gzindex++):0,Se(C,B)}while(B!==0);C.gzhead.hcrc&&C.pending>I&&(w.adler=h(w.adler,C.pending_buf,C.pending-I,I)),B===0&&(C.gzindex=0,C.status=91)}else C.status=91;if(C.status===91)if(C.gzhead.comment){I=C.pending;do{if(C.pending===C.pending_buf_size&&(C.gzhead.hcrc&&C.pending>I&&(w.adler=h(w.adler,C.pending_buf,C.pending-I,I)),W(w),I=C.pending,C.pending===C.pending_buf_size)){B=1;break}B=C.gzindex<C.gzhead.comment.length?255&C.gzhead.comment.charCodeAt(C.gzindex++):0,Se(C,B)}while(B!==0);C.gzhead.hcrc&&C.pending>I&&(w.adler=h(w.adler,C.pending_buf,C.pending-I,I)),B===0&&(C.status=103)}else C.status=103;if(C.status===103&&(C.gzhead.hcrc?(C.pending+2>C.pending_buf_size&&W(w),C.pending+2<=C.pending_buf_size&&(Se(C,255&w.adler),Se(C,w.adler>>8&255),w.adler=0,C.status=X)):C.status=X),C.pending!==0){if(W(w),w.avail_out===0)return C.last_flush=-1,m}else if(w.avail_in===0&&ie(J)<=ie(V)&&J!==v)return Ce(w,-5);if(C.status===666&&w.avail_in!==0)return Ce(w,-5);if(w.avail_in!==0||C.lookahead!==0||J!==b&&C.status!==666){var se=C.strategy===2?(function(H,de){for(var me;;){if(H.lookahead===0&&(qe(H),H.lookahead===0)){if(de===b)return E;break}if(H.match_length=0,me=u._tr_tally(H,0,H.window[H.strstart]),H.lookahead--,H.strstart++,me&&(F(H,!1),H.strm.avail_out===0))return E}return H.insert=0,de===v?(F(H,!0),H.strm.avail_out===0?Ie:ce):H.last_lit&&(F(H,!1),H.strm.avail_out===0)?E:Q})(C,J):C.strategy===3?(function(H,de){for(var me,ue,Ee,et,We=H.window;;){if(H.lookahead<=pe){if(qe(H),H.lookahead<=pe&&de===b)return E;if(H.lookahead===0)break}if(H.match_length=0,H.lookahead>=G&&0<H.strstart&&(ue=We[Ee=H.strstart-1])===We[++Ee]&&ue===We[++Ee]&&ue===We[++Ee]){et=H.strstart+pe;do;while(ue===We[++Ee]&&ue===We[++Ee]&&ue===We[++Ee]&&ue===We[++Ee]&&ue===We[++Ee]&&ue===We[++Ee]&&ue===We[++Ee]&&ue===We[++Ee]&&Ee<et);H.match_length=pe-(et-Ee),H.match_length>H.lookahead&&(H.match_length=H.lookahead)}if(H.match_length>=G?(me=u._tr_tally(H,1,H.match_length-G),H.lookahead-=H.match_length,H.strstart+=H.match_length,H.match_length=0):(me=u._tr_tally(H,0,H.window[H.strstart]),H.lookahead--,H.strstart++),me&&(F(H,!1),H.strm.avail_out===0))return E}return H.insert=0,de===v?(F(H,!0),H.strm.avail_out===0?Ie:ce):H.last_lit&&(F(H,!1),H.strm.avail_out===0)?E:Q})(C,J):s[C.level].func(C,J);if(se!==Ie&&se!==ce||(C.status=666),se===E||se===Ie)return w.avail_out===0&&(C.last_flush=-1),m;if(se===Q&&(J===1?u._tr_align(C):J!==5&&(u._tr_stored_block(C,0,0,!1),J===3&&(Me(C.head),C.lookahead===0&&(C.strstart=0,C.block_start=0,C.insert=0))),W(w),w.avail_out===0))return C.last_flush=-1,m}return J!==v?m:C.wrap<=0?1:(C.wrap===2?(Se(C,255&w.adler),Se(C,w.adler>>8&255),Se(C,w.adler>>16&255),Se(C,w.adler>>24&255),Se(C,255&w.total_in),Se(C,w.total_in>>8&255),Se(C,w.total_in>>16&255),Se(C,w.total_in>>24&255)):(ge(C,w.adler>>>16),ge(C,65535&w.adler)),W(w),0<C.wrap&&(C.wrap=-C.wrap),C.pending!==0?m:1)},a.deflateEnd=function(w){var J;return w&&w.state?(J=w.state.status)!==R&&J!==69&&J!==73&&J!==91&&J!==103&&J!==X&&J!==666?Ce(w,g):(w.state=null,J===X?Ce(w,-3):m):g},a.deflateSetDictionary=function(w,J){var V,C,I,B,ae,se,H,de,me=J.length;if(!w||!w.state||(B=(V=w.state).wrap)===2||B===1&&V.status!==R||V.lookahead)return g;for(B===1&&(w.adler=d(w.adler,J,me,0)),V.wrap=0,me>=V.w_size&&(B===0&&(Me(V.head),V.strstart=0,V.block_start=0,V.insert=0),de=new l.Buf8(V.w_size),l.arraySet(de,J,me-V.w_size,V.w_size,0),J=de,me=V.w_size),ae=w.avail_in,se=w.next_in,H=w.input,w.avail_in=me,w.next_in=0,w.input=J,qe(V);V.lookahead>=G;){for(C=V.strstart,I=V.lookahead-(G-1);V.ins_h=(V.ins_h<<V.hash_shift^V.window[C+G-1])&V.hash_mask,V.prev[C&V.w_mask]=V.head[V.ins_h],V.head[V.ins_h]=C,C++,--I;);V.strstart=C,V.lookahead=G-1,qe(V)}return V.strstart+=V.lookahead,V.block_start=V.strstart,V.insert=V.lookahead,V.lookahead=0,V.match_length=V.prev_length=G-1,V.match_available=0,w.next_in=se,w.input=H,w.avail_in=ae,V.wrap=B,m},a.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(r,i,a){"use strict";i.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(r,i,a){"use strict";i.exports=function(s,l){var u=s.state,d=s.next_in,h,f,b,v,m,g,k,y,S,M,T,O,z,K,Z,oe,G,pe,we,R,X,E=s.input,Q;h=d+(s.avail_in-5),f=s.next_out,Q=s.output,b=f-(l-s.avail_out),v=f+(s.avail_out-257),m=u.dmax,g=u.wsize,k=u.whave,y=u.wnext,S=u.window,M=u.hold,T=u.bits,O=u.lencode,z=u.distcode,K=(1<<u.lenbits)-1,Z=(1<<u.distbits)-1;e:do{T<15&&(M+=E[d++]<<T,T+=8,M+=E[d++]<<T,T+=8),oe=O[M&K];t:for(;;){if(M>>>=G=oe>>>24,T-=G,(G=oe>>>16&255)===0)Q[f++]=65535&oe;else{if(!(16&G)){if((64&G)==0){oe=O[(65535&oe)+(M&(1<<G)-1)];continue t}if(32&G){u.mode=12;break e}s.msg="invalid literal/length code",u.mode=30;break e}pe=65535&oe,(G&=15)&&(T<G&&(M+=E[d++]<<T,T+=8),pe+=M&(1<<G)-1,M>>>=G,T-=G),T<15&&(M+=E[d++]<<T,T+=8,M+=E[d++]<<T,T+=8),oe=z[M&Z];n:for(;;){if(M>>>=G=oe>>>24,T-=G,!(16&(G=oe>>>16&255))){if((64&G)==0){oe=z[(65535&oe)+(M&(1<<G)-1)];continue n}s.msg="invalid distance code",u.mode=30;break e}if(we=65535&oe,T<(G&=15)&&(M+=E[d++]<<T,(T+=8)<G&&(M+=E[d++]<<T,T+=8)),m<(we+=M&(1<<G)-1)){s.msg="invalid distance too far back",u.mode=30;break e}if(M>>>=G,T-=G,(G=f-b)<we){if(k<(G=we-G)&&u.sane){s.msg="invalid distance too far back",u.mode=30;break e}if(X=S,(R=0)===y){if(R+=g-G,G<pe){for(pe-=G;Q[f++]=S[R++],--G;);R=f-we,X=Q}}else if(y<G){if(R+=g+y-G,(G-=y)<pe){for(pe-=G;Q[f++]=S[R++],--G;);if(R=0,y<pe){for(pe-=G=y;Q[f++]=S[R++],--G;);R=f-we,X=Q}}}else if(R+=y-G,G<pe){for(pe-=G;Q[f++]=S[R++],--G;);R=f-we,X=Q}for(;2<pe;)Q[f++]=X[R++],Q[f++]=X[R++],Q[f++]=X[R++],pe-=3;pe&&(Q[f++]=X[R++],1<pe&&(Q[f++]=X[R++]))}else{for(R=f-we;Q[f++]=Q[R++],Q[f++]=Q[R++],Q[f++]=Q[R++],2<(pe-=3););pe&&(Q[f++]=Q[R++],1<pe&&(Q[f++]=Q[R++]))}break}}break}}while(d<h&&f<v);d-=pe=T>>3,M&=(1<<(T-=pe<<3))-1,s.next_in=d,s.next_out=f,s.avail_in=d<h?h-d+5:5-(d-h),s.avail_out=f<v?v-f+257:257-(f-v),u.hold=M,u.bits=T}},{}],49:[function(r,i,a){"use strict";var s=r("../utils/common"),l=r("./adler32"),u=r("./crc32"),d=r("./inffast"),h=r("./inftrees"),f=1,b=2,v=0,m=-2,g=1,k=852,y=592;function S(R){return(R>>>24&255)+(R>>>8&65280)+((65280&R)<<8)+((255&R)<<24)}function M(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new s.Buf16(320),this.work=new s.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function T(R){var X;return R&&R.state?(X=R.state,R.total_in=R.total_out=X.total=0,R.msg="",X.wrap&&(R.adler=1&X.wrap),X.mode=g,X.last=0,X.havedict=0,X.dmax=32768,X.head=null,X.hold=0,X.bits=0,X.lencode=X.lendyn=new s.Buf32(k),X.distcode=X.distdyn=new s.Buf32(y),X.sane=1,X.back=-1,v):m}function O(R){var X;return R&&R.state?((X=R.state).wsize=0,X.whave=0,X.wnext=0,T(R)):m}function z(R,X){var E,Q;return R&&R.state?(Q=R.state,X<0?(E=0,X=-X):(E=1+(X>>4),X<48&&(X&=15)),X&&(X<8||15<X)?m:(Q.window!==null&&Q.wbits!==X&&(Q.window=null),Q.wrap=E,Q.wbits=X,O(R))):m}function K(R,X){var E,Q;return R?(Q=new M,(R.state=Q).window=null,(E=z(R,X))!==v&&(R.state=null),E):m}var Z,oe,G=!0;function pe(R){if(G){var X;for(Z=new s.Buf32(512),oe=new s.Buf32(32),X=0;X<144;)R.lens[X++]=8;for(;X<256;)R.lens[X++]=9;for(;X<280;)R.lens[X++]=7;for(;X<288;)R.lens[X++]=8;for(h(f,R.lens,0,288,Z,0,R.work,{bits:9}),X=0;X<32;)R.lens[X++]=5;h(b,R.lens,0,32,oe,0,R.work,{bits:5}),G=!1}R.lencode=Z,R.lenbits=9,R.distcode=oe,R.distbits=5}function we(R,X,E,Q){var Ie,ce=R.state;return ce.window===null&&(ce.wsize=1<<ce.wbits,ce.wnext=0,ce.whave=0,ce.window=new s.Buf8(ce.wsize)),Q>=ce.wsize?(s.arraySet(ce.window,X,E-ce.wsize,ce.wsize,0),ce.wnext=0,ce.whave=ce.wsize):(Q<(Ie=ce.wsize-ce.wnext)&&(Ie=Q),s.arraySet(ce.window,X,E-Q,Ie,ce.wnext),(Q-=Ie)?(s.arraySet(ce.window,X,E-Q,Q,0),ce.wnext=Q,ce.whave=ce.wsize):(ce.wnext+=Ie,ce.wnext===ce.wsize&&(ce.wnext=0),ce.whave<ce.wsize&&(ce.whave+=Ie))),0}a.inflateReset=O,a.inflateReset2=z,a.inflateResetKeep=T,a.inflateInit=function(R){return K(R,15)},a.inflateInit2=K,a.inflate=function(R,X){var E,Q,Ie,ce,Ce,ie,Me,W,F,Se,ge,fe,qe,gt,Ue,Ge,ht,mt,Zt,Gt,w,J,V,C,I=0,B=new s.Buf8(4),ae=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!R||!R.state||!R.output||!R.input&&R.avail_in!==0)return m;(E=R.state).mode===12&&(E.mode=13),Ce=R.next_out,Ie=R.output,Me=R.avail_out,ce=R.next_in,Q=R.input,ie=R.avail_in,W=E.hold,F=E.bits,Se=ie,ge=Me,J=v;e:for(;;)switch(E.mode){case g:if(E.wrap===0){E.mode=13;break}for(;F<16;){if(ie===0)break e;ie--,W+=Q[ce++]<<F,F+=8}if(2&E.wrap&&W===35615){B[E.check=0]=255&W,B[1]=W>>>8&255,E.check=u(E.check,B,2,0),F=W=0,E.mode=2;break}if(E.flags=0,E.head&&(E.head.done=!1),!(1&E.wrap)||(((255&W)<<8)+(W>>8))%31){R.msg="incorrect header check",E.mode=30;break}if((15&W)!=8){R.msg="unknown compression method",E.mode=30;break}if(F-=4,w=8+(15&(W>>>=4)),E.wbits===0)E.wbits=w;else if(w>E.wbits){R.msg="invalid window size",E.mode=30;break}E.dmax=1<<w,R.adler=E.check=1,E.mode=512&W?10:12,F=W=0;break;case 2:for(;F<16;){if(ie===0)break e;ie--,W+=Q[ce++]<<F,F+=8}if(E.flags=W,(255&E.flags)!=8){R.msg="unknown compression method",E.mode=30;break}if(57344&E.flags){R.msg="unknown header flags set",E.mode=30;break}E.head&&(E.head.text=W>>8&1),512&E.flags&&(B[0]=255&W,B[1]=W>>>8&255,E.check=u(E.check,B,2,0)),F=W=0,E.mode=3;case 3:for(;F<32;){if(ie===0)break e;ie--,W+=Q[ce++]<<F,F+=8}E.head&&(E.head.time=W),512&E.flags&&(B[0]=255&W,B[1]=W>>>8&255,B[2]=W>>>16&255,B[3]=W>>>24&255,E.check=u(E.check,B,4,0)),F=W=0,E.mode=4;case 4:for(;F<16;){if(ie===0)break e;ie--,W+=Q[ce++]<<F,F+=8}E.head&&(E.head.xflags=255&W,E.head.os=W>>8),512&E.flags&&(B[0]=255&W,B[1]=W>>>8&255,E.check=u(E.check,B,2,0)),F=W=0,E.mode=5;case 5:if(1024&E.flags){for(;F<16;){if(ie===0)break e;ie--,W+=Q[ce++]<<F,F+=8}E.length=W,E.head&&(E.head.extra_len=W),512&E.flags&&(B[0]=255&W,B[1]=W>>>8&255,E.check=u(E.check,B,2,0)),F=W=0}else E.head&&(E.head.extra=null);E.mode=6;case 6:if(1024&E.flags&&(ie<(fe=E.length)&&(fe=ie),fe&&(E.head&&(w=E.head.extra_len-E.length,E.head.extra||(E.head.extra=new Array(E.head.extra_len)),s.arraySet(E.head.extra,Q,ce,fe,w)),512&E.flags&&(E.check=u(E.check,Q,fe,ce)),ie-=fe,ce+=fe,E.length-=fe),E.length))break e;E.length=0,E.mode=7;case 7:if(2048&E.flags){if(ie===0)break e;for(fe=0;w=Q[ce+fe++],E.head&&w&&E.length<65536&&(E.head.name+=String.fromCharCode(w)),w&&fe<ie;);if(512&E.flags&&(E.check=u(E.check,Q,fe,ce)),ie-=fe,ce+=fe,w)break e}else E.head&&(E.head.name=null);E.length=0,E.mode=8;case 8:if(4096&E.flags){if(ie===0)break e;for(fe=0;w=Q[ce+fe++],E.head&&w&&E.length<65536&&(E.head.comment+=String.fromCharCode(w)),w&&fe<ie;);if(512&E.flags&&(E.check=u(E.check,Q,fe,ce)),ie-=fe,ce+=fe,w)break e}else E.head&&(E.head.comment=null);E.mode=9;case 9:if(512&E.flags){for(;F<16;){if(ie===0)break e;ie--,W+=Q[ce++]<<F,F+=8}if(W!==(65535&E.check)){R.msg="header crc mismatch",E.mode=30;break}F=W=0}E.head&&(E.head.hcrc=E.flags>>9&1,E.head.done=!0),R.adler=E.check=0,E.mode=12;break;case 10:for(;F<32;){if(ie===0)break e;ie--,W+=Q[ce++]<<F,F+=8}R.adler=E.check=S(W),F=W=0,E.mode=11;case 11:if(E.havedict===0)return R.next_out=Ce,R.avail_out=Me,R.next_in=ce,R.avail_in=ie,E.hold=W,E.bits=F,2;R.adler=E.check=1,E.mode=12;case 12:if(X===5||X===6)break e;case 13:if(E.last){W>>>=7&F,F-=7&F,E.mode=27;break}for(;F<3;){if(ie===0)break e;ie--,W+=Q[ce++]<<F,F+=8}switch(E.last=1&W,F-=1,3&(W>>>=1)){case 0:E.mode=14;break;case 1:if(pe(E),E.mode=20,X!==6)break;W>>>=2,F-=2;break e;case 2:E.mode=17;break;case 3:R.msg="invalid block type",E.mode=30}W>>>=2,F-=2;break;case 14:for(W>>>=7&F,F-=7&F;F<32;){if(ie===0)break e;ie--,W+=Q[ce++]<<F,F+=8}if((65535&W)!=(W>>>16^65535)){R.msg="invalid stored block lengths",E.mode=30;break}if(E.length=65535&W,F=W=0,E.mode=15,X===6)break e;case 15:E.mode=16;case 16:if(fe=E.length){if(ie<fe&&(fe=ie),Me<fe&&(fe=Me),fe===0)break e;s.arraySet(Ie,Q,ce,fe,Ce),ie-=fe,ce+=fe,Me-=fe,Ce+=fe,E.length-=fe;break}E.mode=12;break;case 17:for(;F<14;){if(ie===0)break e;ie--,W+=Q[ce++]<<F,F+=8}if(E.nlen=257+(31&W),W>>>=5,F-=5,E.ndist=1+(31&W),W>>>=5,F-=5,E.ncode=4+(15&W),W>>>=4,F-=4,286<E.nlen||30<E.ndist){R.msg="too many length or distance symbols",E.mode=30;break}E.have=0,E.mode=18;case 18:for(;E.have<E.ncode;){for(;F<3;){if(ie===0)break e;ie--,W+=Q[ce++]<<F,F+=8}E.lens[ae[E.have++]]=7&W,W>>>=3,F-=3}for(;E.have<19;)E.lens[ae[E.have++]]=0;if(E.lencode=E.lendyn,E.lenbits=7,V={bits:E.lenbits},J=h(0,E.lens,0,19,E.lencode,0,E.work,V),E.lenbits=V.bits,J){R.msg="invalid code lengths set",E.mode=30;break}E.have=0,E.mode=19;case 19:for(;E.have<E.nlen+E.ndist;){for(;Ge=(I=E.lencode[W&(1<<E.lenbits)-1])>>>16&255,ht=65535&I,!((Ue=I>>>24)<=F);){if(ie===0)break e;ie--,W+=Q[ce++]<<F,F+=8}if(ht<16)W>>>=Ue,F-=Ue,E.lens[E.have++]=ht;else{if(ht===16){for(C=Ue+2;F<C;){if(ie===0)break e;ie--,W+=Q[ce++]<<F,F+=8}if(W>>>=Ue,F-=Ue,E.have===0){R.msg="invalid bit length repeat",E.mode=30;break}w=E.lens[E.have-1],fe=3+(3&W),W>>>=2,F-=2}else if(ht===17){for(C=Ue+3;F<C;){if(ie===0)break e;ie--,W+=Q[ce++]<<F,F+=8}F-=Ue,w=0,fe=3+(7&(W>>>=Ue)),W>>>=3,F-=3}else{for(C=Ue+7;F<C;){if(ie===0)break e;ie--,W+=Q[ce++]<<F,F+=8}F-=Ue,w=0,fe=11+(127&(W>>>=Ue)),W>>>=7,F-=7}if(E.have+fe>E.nlen+E.ndist){R.msg="invalid bit length repeat",E.mode=30;break}for(;fe--;)E.lens[E.have++]=w}}if(E.mode===30)break;if(E.lens[256]===0){R.msg="invalid code -- missing end-of-block",E.mode=30;break}if(E.lenbits=9,V={bits:E.lenbits},J=h(f,E.lens,0,E.nlen,E.lencode,0,E.work,V),E.lenbits=V.bits,J){R.msg="invalid literal/lengths set",E.mode=30;break}if(E.distbits=6,E.distcode=E.distdyn,V={bits:E.distbits},J=h(b,E.lens,E.nlen,E.ndist,E.distcode,0,E.work,V),E.distbits=V.bits,J){R.msg="invalid distances set",E.mode=30;break}if(E.mode=20,X===6)break e;case 20:E.mode=21;case 21:if(6<=ie&&258<=Me){R.next_out=Ce,R.avail_out=Me,R.next_in=ce,R.avail_in=ie,E.hold=W,E.bits=F,d(R,ge),Ce=R.next_out,Ie=R.output,Me=R.avail_out,ce=R.next_in,Q=R.input,ie=R.avail_in,W=E.hold,F=E.bits,E.mode===12&&(E.back=-1);break}for(E.back=0;Ge=(I=E.lencode[W&(1<<E.lenbits)-1])>>>16&255,ht=65535&I,!((Ue=I>>>24)<=F);){if(ie===0)break e;ie--,W+=Q[ce++]<<F,F+=8}if(Ge&&(240&Ge)==0){for(mt=Ue,Zt=Ge,Gt=ht;Ge=(I=E.lencode[Gt+((W&(1<<mt+Zt)-1)>>mt)])>>>16&255,ht=65535&I,!(mt+(Ue=I>>>24)<=F);){if(ie===0)break e;ie--,W+=Q[ce++]<<F,F+=8}W>>>=mt,F-=mt,E.back+=mt}if(W>>>=Ue,F-=Ue,E.back+=Ue,E.length=ht,Ge===0){E.mode=26;break}if(32&Ge){E.back=-1,E.mode=12;break}if(64&Ge){R.msg="invalid literal/length code",E.mode=30;break}E.extra=15&Ge,E.mode=22;case 22:if(E.extra){for(C=E.extra;F<C;){if(ie===0)break e;ie--,W+=Q[ce++]<<F,F+=8}E.length+=W&(1<<E.extra)-1,W>>>=E.extra,F-=E.extra,E.back+=E.extra}E.was=E.length,E.mode=23;case 23:for(;Ge=(I=E.distcode[W&(1<<E.distbits)-1])>>>16&255,ht=65535&I,!((Ue=I>>>24)<=F);){if(ie===0)break e;ie--,W+=Q[ce++]<<F,F+=8}if((240&Ge)==0){for(mt=Ue,Zt=Ge,Gt=ht;Ge=(I=E.distcode[Gt+((W&(1<<mt+Zt)-1)>>mt)])>>>16&255,ht=65535&I,!(mt+(Ue=I>>>24)<=F);){if(ie===0)break e;ie--,W+=Q[ce++]<<F,F+=8}W>>>=mt,F-=mt,E.back+=mt}if(W>>>=Ue,F-=Ue,E.back+=Ue,64&Ge){R.msg="invalid distance code",E.mode=30;break}E.offset=ht,E.extra=15&Ge,E.mode=24;case 24:if(E.extra){for(C=E.extra;F<C;){if(ie===0)break e;ie--,W+=Q[ce++]<<F,F+=8}E.offset+=W&(1<<E.extra)-1,W>>>=E.extra,F-=E.extra,E.back+=E.extra}if(E.offset>E.dmax){R.msg="invalid distance too far back",E.mode=30;break}E.mode=25;case 25:if(Me===0)break e;if(fe=ge-Me,E.offset>fe){if((fe=E.offset-fe)>E.whave&&E.sane){R.msg="invalid distance too far back",E.mode=30;break}qe=fe>E.wnext?(fe-=E.wnext,E.wsize-fe):E.wnext-fe,fe>E.length&&(fe=E.length),gt=E.window}else gt=Ie,qe=Ce-E.offset,fe=E.length;for(Me<fe&&(fe=Me),Me-=fe,E.length-=fe;Ie[Ce++]=gt[qe++],--fe;);E.length===0&&(E.mode=21);break;case 26:if(Me===0)break e;Ie[Ce++]=E.length,Me--,E.mode=21;break;case 27:if(E.wrap){for(;F<32;){if(ie===0)break e;ie--,W|=Q[ce++]<<F,F+=8}if(ge-=Me,R.total_out+=ge,E.total+=ge,ge&&(R.adler=E.check=E.flags?u(E.check,Ie,ge,Ce-ge):l(E.check,Ie,ge,Ce-ge)),ge=Me,(E.flags?W:S(W))!==E.check){R.msg="incorrect data check",E.mode=30;break}F=W=0}E.mode=28;case 28:if(E.wrap&&E.flags){for(;F<32;){if(ie===0)break e;ie--,W+=Q[ce++]<<F,F+=8}if(W!==(4294967295&E.total)){R.msg="incorrect length check",E.mode=30;break}F=W=0}E.mode=29;case 29:J=1;break e;case 30:J=-3;break e;case 31:return-4;default:return m}return R.next_out=Ce,R.avail_out=Me,R.next_in=ce,R.avail_in=ie,E.hold=W,E.bits=F,(E.wsize||ge!==R.avail_out&&E.mode<30&&(E.mode<27||X!==4))&&we(R,R.output,R.next_out,ge-R.avail_out)?(E.mode=31,-4):(Se-=R.avail_in,ge-=R.avail_out,R.total_in+=Se,R.total_out+=ge,E.total+=ge,E.wrap&&ge&&(R.adler=E.check=E.flags?u(E.check,Ie,ge,R.next_out-ge):l(E.check,Ie,ge,R.next_out-ge)),R.data_type=E.bits+(E.last?64:0)+(E.mode===12?128:0)+(E.mode===20||E.mode===15?256:0),(Se==0&&ge===0||X===4)&&J===v&&(J=-5),J)},a.inflateEnd=function(R){if(!R||!R.state)return m;var X=R.state;return X.window&&(X.window=null),R.state=null,v},a.inflateGetHeader=function(R,X){var E;return R&&R.state?(2&(E=R.state).wrap)==0?m:((E.head=X).done=!1,v):m},a.inflateSetDictionary=function(R,X){var E,Q=X.length;return R&&R.state?(E=R.state).wrap!==0&&E.mode!==11?m:E.mode===11&&l(1,X,Q,0)!==E.check?-3:we(R,X,Q,Q)?(E.mode=31,-4):(E.havedict=1,v):m},a.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(r,i,a){"use strict";var s=r("../utils/common"),l=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],u=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],d=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],h=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];i.exports=function(f,b,v,m,g,k,y,S){var M,T,O,z,K,Z,oe,G,pe,we=S.bits,R=0,X=0,E=0,Q=0,Ie=0,ce=0,Ce=0,ie=0,Me=0,W=0,F=null,Se=0,ge=new s.Buf16(16),fe=new s.Buf16(16),qe=null,gt=0;for(R=0;R<=15;R++)ge[R]=0;for(X=0;X<m;X++)ge[b[v+X]]++;for(Ie=we,Q=15;1<=Q&&ge[Q]===0;Q--);if(Q<Ie&&(Ie=Q),Q===0)return g[k++]=20971520,g[k++]=20971520,S.bits=1,0;for(E=1;E<Q&&ge[E]===0;E++);for(Ie<E&&(Ie=E),R=ie=1;R<=15;R++)if(ie<<=1,(ie-=ge[R])<0)return-1;if(0<ie&&(f===0||Q!==1))return-1;for(fe[1]=0,R=1;R<15;R++)fe[R+1]=fe[R]+ge[R];for(X=0;X<m;X++)b[v+X]!==0&&(y[fe[b[v+X]]++]=X);if(Z=f===0?(F=qe=y,19):f===1?(F=l,Se-=257,qe=u,gt-=257,256):(F=d,qe=h,-1),R=E,K=k,Ce=X=W=0,O=-1,z=(Me=1<<(ce=Ie))-1,f===1&&852<Me||f===2&&592<Me)return 1;for(;;){for(oe=R-Ce,pe=y[X]<Z?(G=0,y[X]):y[X]>Z?(G=qe[gt+y[X]],F[Se+y[X]]):(G=96,0),M=1<<R-Ce,E=T=1<<ce;g[K+(W>>Ce)+(T-=M)]=oe<<24|G<<16|pe|0,T!==0;);for(M=1<<R-1;W&M;)M>>=1;if(M!==0?(W&=M-1,W+=M):W=0,X++,--ge[R]==0){if(R===Q)break;R=b[v+y[X]]}if(Ie<R&&(W&z)!==O){for(Ce===0&&(Ce=Ie),K+=E,ie=1<<(ce=R-Ce);ce+Ce<Q&&!((ie-=ge[ce+Ce])<=0);)ce++,ie<<=1;if(Me+=1<<ce,f===1&&852<Me||f===2&&592<Me)return 1;g[O=W&z]=Ie<<24|ce<<16|K-k|0}}return W!==0&&(g[K+W]=R-Ce<<24|4194304),S.bits=Ie,0}},{"../utils/common":41}],51:[function(r,i,a){"use strict";i.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(r,i,a){"use strict";var s=r("../utils/common"),l=0,u=1;function d(I){for(var B=I.length;0<=--B;)I[B]=0}var h=0,f=29,b=256,v=b+1+f,m=30,g=19,k=2*v+1,y=15,S=16,M=7,T=256,O=16,z=17,K=18,Z=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],oe=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],G=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],pe=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],we=new Array(2*(v+2));d(we);var R=new Array(2*m);d(R);var X=new Array(512);d(X);var E=new Array(256);d(E);var Q=new Array(f);d(Q);var Ie,ce,Ce,ie=new Array(m);function Me(I,B,ae,se,H){this.static_tree=I,this.extra_bits=B,this.extra_base=ae,this.elems=se,this.max_length=H,this.has_stree=I&&I.length}function W(I,B){this.dyn_tree=I,this.max_code=0,this.stat_desc=B}function F(I){return I<256?X[I]:X[256+(I>>>7)]}function Se(I,B){I.pending_buf[I.pending++]=255&B,I.pending_buf[I.pending++]=B>>>8&255}function ge(I,B,ae){I.bi_valid>S-ae?(I.bi_buf|=B<<I.bi_valid&65535,Se(I,I.bi_buf),I.bi_buf=B>>S-I.bi_valid,I.bi_valid+=ae-S):(I.bi_buf|=B<<I.bi_valid&65535,I.bi_valid+=ae)}function fe(I,B,ae){ge(I,ae[2*B],ae[2*B+1])}function qe(I,B){for(var ae=0;ae|=1&I,I>>>=1,ae<<=1,0<--B;);return ae>>>1}function gt(I,B,ae){var se,H,de=new Array(y+1),me=0;for(se=1;se<=y;se++)de[se]=me=me+ae[se-1]<<1;for(H=0;H<=B;H++){var ue=I[2*H+1];ue!==0&&(I[2*H]=qe(de[ue]++,ue))}}function Ue(I){var B;for(B=0;B<v;B++)I.dyn_ltree[2*B]=0;for(B=0;B<m;B++)I.dyn_dtree[2*B]=0;for(B=0;B<g;B++)I.bl_tree[2*B]=0;I.dyn_ltree[2*T]=1,I.opt_len=I.static_len=0,I.last_lit=I.matches=0}function Ge(I){8<I.bi_valid?Se(I,I.bi_buf):0<I.bi_valid&&(I.pending_buf[I.pending++]=I.bi_buf),I.bi_buf=0,I.bi_valid=0}function ht(I,B,ae,se){var H=2*B,de=2*ae;return I[H]<I[de]||I[H]===I[de]&&se[B]<=se[ae]}function mt(I,B,ae){for(var se=I.heap[ae],H=ae<<1;H<=I.heap_len&&(H<I.heap_len&&ht(B,I.heap[H+1],I.heap[H],I.depth)&&H++,!ht(B,se,I.heap[H],I.depth));)I.heap[ae]=I.heap[H],ae=H,H<<=1;I.heap[ae]=se}function Zt(I,B,ae){var se,H,de,me,ue=0;if(I.last_lit!==0)for(;se=I.pending_buf[I.d_buf+2*ue]<<8|I.pending_buf[I.d_buf+2*ue+1],H=I.pending_buf[I.l_buf+ue],ue++,se===0?fe(I,H,B):(fe(I,(de=E[H])+b+1,B),(me=Z[de])!==0&&ge(I,H-=Q[de],me),fe(I,de=F(--se),ae),(me=oe[de])!==0&&ge(I,se-=ie[de],me)),ue<I.last_lit;);fe(I,T,B)}function Gt(I,B){var ae,se,H,de=B.dyn_tree,me=B.stat_desc.static_tree,ue=B.stat_desc.has_stree,Ee=B.stat_desc.elems,et=-1;for(I.heap_len=0,I.heap_max=k,ae=0;ae<Ee;ae++)de[2*ae]!==0?(I.heap[++I.heap_len]=et=ae,I.depth[ae]=0):de[2*ae+1]=0;for(;I.heap_len<2;)de[2*(H=I.heap[++I.heap_len]=et<2?++et:0)]=1,I.depth[H]=0,I.opt_len--,ue&&(I.static_len-=me[2*H+1]);for(B.max_code=et,ae=I.heap_len>>1;1<=ae;ae--)mt(I,de,ae);for(H=Ee;ae=I.heap[1],I.heap[1]=I.heap[I.heap_len--],mt(I,de,1),se=I.heap[1],I.heap[--I.heap_max]=ae,I.heap[--I.heap_max]=se,de[2*H]=de[2*ae]+de[2*se],I.depth[H]=(I.depth[ae]>=I.depth[se]?I.depth[ae]:I.depth[se])+1,de[2*ae+1]=de[2*se+1]=H,I.heap[1]=H++,mt(I,de,1),2<=I.heap_len;);I.heap[--I.heap_max]=I.heap[1],(function(We,Tt){var nr,Qt,rr,st,Ar,Yr,pn=Tt.dyn_tree,Io=Tt.max_code,wi=Tt.stat_desc.static_tree,$l=Tt.stat_desc.has_stree,Dl=Tt.stat_desc.extra_bits,La=Tt.stat_desc.extra_base,Mr=Tt.stat_desc.max_length,Xr=0;for(st=0;st<=y;st++)We.bl_count[st]=0;for(pn[2*We.heap[We.heap_max]+1]=0,nr=We.heap_max+1;nr<k;nr++)Mr<(st=pn[2*pn[2*(Qt=We.heap[nr])+1]+1]+1)&&(st=Mr,Xr++),pn[2*Qt+1]=st,Io<Qt||(We.bl_count[st]++,Ar=0,La<=Qt&&(Ar=Dl[Qt-La]),Yr=pn[2*Qt],We.opt_len+=Yr*(st+Ar),$l&&(We.static_len+=Yr*(wi[2*Qt+1]+Ar)));if(Xr!==0){do{for(st=Mr-1;We.bl_count[st]===0;)st--;We.bl_count[st]--,We.bl_count[st+1]+=2,We.bl_count[Mr]--,Xr-=2}while(0<Xr);for(st=Mr;st!==0;st--)for(Qt=We.bl_count[st];Qt!==0;)Io<(rr=We.heap[--nr])||(pn[2*rr+1]!==st&&(We.opt_len+=(st-pn[2*rr+1])*pn[2*rr],pn[2*rr+1]=st),Qt--)}})(I,B),gt(de,et,I.bl_count)}function w(I,B,ae){var se,H,de=-1,me=B[1],ue=0,Ee=7,et=4;for(me===0&&(Ee=138,et=3),B[2*(ae+1)+1]=65535,se=0;se<=ae;se++)H=me,me=B[2*(se+1)+1],++ue<Ee&&H===me||(ue<et?I.bl_tree[2*H]+=ue:H!==0?(H!==de&&I.bl_tree[2*H]++,I.bl_tree[2*O]++):ue<=10?I.bl_tree[2*z]++:I.bl_tree[2*K]++,de=H,et=(ue=0)===me?(Ee=138,3):H===me?(Ee=6,3):(Ee=7,4))}function J(I,B,ae){var se,H,de=-1,me=B[1],ue=0,Ee=7,et=4;for(me===0&&(Ee=138,et=3),se=0;se<=ae;se++)if(H=me,me=B[2*(se+1)+1],!(++ue<Ee&&H===me)){if(ue<et)for(;fe(I,H,I.bl_tree),--ue!=0;);else H!==0?(H!==de&&(fe(I,H,I.bl_tree),ue--),fe(I,O,I.bl_tree),ge(I,ue-3,2)):ue<=10?(fe(I,z,I.bl_tree),ge(I,ue-3,3)):(fe(I,K,I.bl_tree),ge(I,ue-11,7));de=H,et=(ue=0)===me?(Ee=138,3):H===me?(Ee=6,3):(Ee=7,4)}}d(ie);var V=!1;function C(I,B,ae,se){ge(I,(h<<1)+(se?1:0),3),(function(H,de,me,ue){Ge(H),ue&&(Se(H,me),Se(H,~me)),s.arraySet(H.pending_buf,H.window,de,me,H.pending),H.pending+=me})(I,B,ae,!0)}a._tr_init=function(I){V||((function(){var B,ae,se,H,de,me=new Array(y+1);for(H=se=0;H<f-1;H++)for(Q[H]=se,B=0;B<1<<Z[H];B++)E[se++]=H;for(E[se-1]=H,H=de=0;H<16;H++)for(ie[H]=de,B=0;B<1<<oe[H];B++)X[de++]=H;for(de>>=7;H<m;H++)for(ie[H]=de<<7,B=0;B<1<<oe[H]-7;B++)X[256+de++]=H;for(ae=0;ae<=y;ae++)me[ae]=0;for(B=0;B<=143;)we[2*B+1]=8,B++,me[8]++;for(;B<=255;)we[2*B+1]=9,B++,me[9]++;for(;B<=279;)we[2*B+1]=7,B++,me[7]++;for(;B<=287;)we[2*B+1]=8,B++,me[8]++;for(gt(we,v+1,me),B=0;B<m;B++)R[2*B+1]=5,R[2*B]=qe(B,5);Ie=new Me(we,Z,b+1,v,y),ce=new Me(R,oe,0,m,y),Ce=new Me(new Array(0),G,0,g,M)})(),V=!0),I.l_desc=new W(I.dyn_ltree,Ie),I.d_desc=new W(I.dyn_dtree,ce),I.bl_desc=new W(I.bl_tree,Ce),I.bi_buf=0,I.bi_valid=0,Ue(I)},a._tr_stored_block=C,a._tr_flush_block=function(I,B,ae,se){var H,de,me=0;0<I.level?(I.strm.data_type===2&&(I.strm.data_type=(function(ue){var Ee,et=4093624447;for(Ee=0;Ee<=31;Ee++,et>>>=1)if(1&et&&ue.dyn_ltree[2*Ee]!==0)return l;if(ue.dyn_ltree[18]!==0||ue.dyn_ltree[20]!==0||ue.dyn_ltree[26]!==0)return u;for(Ee=32;Ee<b;Ee++)if(ue.dyn_ltree[2*Ee]!==0)return u;return l})(I)),Gt(I,I.l_desc),Gt(I,I.d_desc),me=(function(ue){var Ee;for(w(ue,ue.dyn_ltree,ue.l_desc.max_code),w(ue,ue.dyn_dtree,ue.d_desc.max_code),Gt(ue,ue.bl_desc),Ee=g-1;3<=Ee&&ue.bl_tree[2*pe[Ee]+1]===0;Ee--);return ue.opt_len+=3*(Ee+1)+5+5+4,Ee})(I),H=I.opt_len+3+7>>>3,(de=I.static_len+3+7>>>3)<=H&&(H=de)):H=de=ae+5,ae+4<=H&&B!==-1?C(I,B,ae,se):I.strategy===4||de===H?(ge(I,2+(se?1:0),3),Zt(I,we,R)):(ge(I,4+(se?1:0),3),(function(ue,Ee,et,We){var Tt;for(ge(ue,Ee-257,5),ge(ue,et-1,5),ge(ue,We-4,4),Tt=0;Tt<We;Tt++)ge(ue,ue.bl_tree[2*pe[Tt]+1],3);J(ue,ue.dyn_ltree,Ee-1),J(ue,ue.dyn_dtree,et-1)})(I,I.l_desc.max_code+1,I.d_desc.max_code+1,me+1),Zt(I,I.dyn_ltree,I.dyn_dtree)),Ue(I),se&&Ge(I)},a._tr_tally=function(I,B,ae){return I.pending_buf[I.d_buf+2*I.last_lit]=B>>>8&255,I.pending_buf[I.d_buf+2*I.last_lit+1]=255&B,I.pending_buf[I.l_buf+I.last_lit]=255&ae,I.last_lit++,B===0?I.dyn_ltree[2*ae]++:(I.matches++,B--,I.dyn_ltree[2*(E[ae]+b+1)]++,I.dyn_dtree[2*F(B)]++),I.last_lit===I.lit_bufsize-1},a._tr_align=function(I){ge(I,2,3),fe(I,T,we),(function(B){B.bi_valid===16?(Se(B,B.bi_buf),B.bi_buf=0,B.bi_valid=0):8<=B.bi_valid&&(B.pending_buf[B.pending++]=255&B.bi_buf,B.bi_buf>>=8,B.bi_valid-=8)})(I)}},{"../utils/common":41}],53:[function(r,i,a){"use strict";i.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(r,i,a){"use strict";i.exports=typeof setImmediate=="function"?setImmediate:function(){var s=[].slice.apply(arguments);s.splice(1,0,0),setTimeout.apply(null,s)}},{}]},{},[10])(10)})})),C0=Y3(),Q3=X3(),e6=Di(J3(),1);function t6(e){switch(e){case"image/jpeg":return"jpg";case"image/png":return"png";case"image/webp":return"webp";case"image/gif":return"gif";case"image/bmp":return"bmp";default:return"png"}}async function n6(e){if(!e.src)return null;try{const t=await fetch(e.src);if(t.ok)return Ae(`Got blob for page ${e.src} from fetch`),await t.blob()}catch(t){Ae(`Failed to get blob for page ${e.src} from fetch`,t)}return typeof GM_xmlhttpRequest<"u"?new Promise(t=>{GM_xmlhttpRequest({method:"GET",url:e.src,responseType:"blob",onload:r=>{r.status===200?(Ae(`Got blob for page ${e.src} from GM_xmlhttpRequest`),t(r.response)):(Ae(`Failed to get blob for page ${e.src} from GM_xmlhttpRequest`,r.statusText),t(null))},onerror:r=>{Ae(`Failed to get blob for page ${e.src} from GM_xmlhttpRequest`,r),t(null)}})}):null}async function r6(e){const t=e.ref?.value;if(!t)return null;try{const r=document.createElement("canvas"),i=r.getContext("2d");if(i)return r.width=t.naturalWidth,r.height=t.naturalHeight,i.drawImage(t,0,0),await new Promise(a=>{r.toBlob(s=>{s&&Ae(`Got blob for page ${e.src} from canvas`),a(s)},"image/png",1)})}catch(r){Ae(`Failed to get blob for page ${e.src} from canvas`,r)}return null}async function o6(e){if(e.blob)return Ae(`Got blob for page ${e.src} from cache`),e.blob;const t=await n6(e)||await r6(e);return t||Ae(`Failed to get blob for page ${e.src}`),t}async function i6(){Pe("download","working");const e=new e6.default,t=he("images")??{},r=he("manga"),i=r?.pages??0,a=Math.floor(Math.log10(i||1))+1,s=xe.default.sortBy(xe.default.entries(t),([h])=>Number(h)),l=[],u=h=>{Pe("dialog",{open:!0,title:q("BUTTON_DOWNLOAD"),content:re`
        <div style='display: flex; flex-direction: column; gap: 10px;'>
          <p>${q("DOWNLOAD_PROGRESS").replace("##num##",h.toString()).replace("##total##",i.toString())}</p>
          <progress value='${h}' max='${i}' style='width: 100%; height: 20px;'></progress>
        </div>
      `,footer:re`
        <mov-button @click=${()=>Pe("download","cancelled")}>
          ${q("CANCEL")}
        </mov-button>
      `})};u(0);let d=0;for(const[h,f]of s){if(he("download")==="cancelled"){Ae("Download cancelled"),Pe("dialog",null),Pe("download",void 0);return}try{const b=await o6(f);if(b){const v=t6(b.type),m=`Page-${Number(h).toString().padStart(a,"0")}.${v}`;Ae(`${m} Added to Zip from Blob`),e.file(m,b,{createFolders:!0,compression:"DEFLATE"})}else l.push(f.src??h)}catch(b){Ae(`Error processing page ${h}`,b),l.push(f.src??h)}finally{d+=1,u(d)}}Pe("dialog",{open:!0,title:q("BUTTON_DOWNLOAD"),content:re`
      <div style='display: flex; flex-direction: column; gap: 10px;'>
        <p>${q("GENERATING_ZIP")}</p>
        <progress style='width: 100%; height: 20px;'></progress>
      </div>
    `,footer:re``}),l.length>0&&(Ae("Some images failed to download:",l),e.file("failed_pages.txt",l.join(`
`))),Ae("Generating Zip"),e.generateAsync({type:"blob"}).then(h=>{Ae("Download Ready"),(0,Q3.saveAs)(h,`${r?.title??document.title}.zip`,{autoBom:!1}),l.length>0?Pe("dialog",{open:!0,title:q("DOWNLOAD_INCOMPLETE"),icon:"warning",content:re`<p>${q("DOWNLOAD_INCOMPLETE_MESSAGE")}</p>`,footer:re`<mov-button @click=${()=>Pe("dialog",null)}>
            ${q("CLOSE")}
          </mov-button>`}):Pe("dialog",null)}).catch(h=>{Ae("Error generating zip",h),Pe("dialog",{open:!0,title:q("WARNING"),icon:"error",content:re`<p>Error generating zip: ${h.message}</p>`,footer:re`<mov-button @click=${()=>Pe("dialog",null)}>
          ${q("CLOSE")}
        </mov-button>`})}).finally(()=>{Pe("download",void 0)})}function O0(){he("download")!=="working"&&(Ae("Downloading Chapter"),i6().catch(e=>Ae("Error downloading chapter",e)))}function a6(){Jo("hidePageControls",e=>!e)}function ui(e){const t=e.currentTarget||e.target,r=t.getAttribute("value")??t.getAttribute("href");e.button!==1&&!e.ctrlKey&&(r&&r!=="#"?window.location.href=(0,C0.sanitizeUrl)(r):t.id==="series"&&(Es()?window.location.href=window.location.pathname:window.history.back()))}function s6(e){if(e)if(Y("viewMode").startsWith("Fluid")){const t=he("chapter").value;if(t){const r=e.getBoundingClientRect(),i=t.getBoundingClientRect();t.scrollBy({left:r.left-i.left,top:r.top-i.top,behavior:"instant"})}}else{const t=e.getBoundingClientRect();window.scrollTo({top:t.top+window.scrollY,left:t.left+window.scrollX,behavior:"instant"})}}Jt.listen((e,t,r)=>{r==="scrollToPage"&&e.scrollToPage!==void 0&&(e.scrollToPage<=0?window.scrollTo(0,0):s6(he("images")?.[e.scrollToPage]?.ref?.value),setTimeout(()=>Pe("scrollToPage",void 0),10))});function l6(e){const t=e.detail.value;Pe("scrollToPage",typeof t=="string"?parseInt(t,10):t)}function c6(e){Pe("scrollToPage",e)}var Ml=typeof navigator<"u"?navigator.userAgent.toLowerCase().indexOf("firefox")>0:!1;function xl(e,t,r,i){e.addEventListener?e.addEventListener(t,r,i):e.attachEvent&&e.attachEvent(`on${t}`,r)}function hi(e,t,r,i){e&&(e.removeEventListener?e.removeEventListener(t,r,i):e.detachEvent&&e.detachEvent(`on${t}`,r))}function T0(e,t){const r=t.slice(0,t.length-1),i=[];for(let a=0;a<r.length;a++)i.push(e[r[a].toLowerCase()]);return i}function L0(e){typeof e!="string"&&(e=""),e=e.replace(/\s/g,"");const t=e.split(",");let r=t.lastIndexOf("");for(;r>=0;)t[r-1]+=",",t.splice(r,1),r=t.lastIndexOf("");return t}function d6(e,t){const r=e.length>=t.length?e:t,i=e.length>=t.length?t:e;let a=!0;for(let s=0;s<r.length;s++)i.indexOf(r[s])===-1&&(a=!1);return a}function R0(e){let t=e.keyCode||e.which||e.charCode;return e.code&&/^Key[A-Z]$/.test(e.code)&&(t=e.code.charCodeAt(3)),t}var fi={backspace:8,"⌫":8,tab:9,clear:12,enter:13,"↩":13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,arrowup:38,arrowdown:40,arrowleft:37,arrowright:39,del:46,delete:46,ins:45,insert:45,home:36,end:35,pageup:33,pagedown:34,capslock:20,num_0:96,num_1:97,num_2:98,num_3:99,num_4:100,num_5:101,num_6:102,num_7:103,num_8:104,num_9:105,num_multiply:106,num_add:107,num_enter:108,num_subtract:109,num_decimal:110,num_divide:111,"⇪":20,",":188,".":190,"/":191,"`":192,"-":Ml?173:189,"=":Ml?61:187,";":Ml?59:186,"'":222,"{":219,"}":221,"[":219,"]":221,"\\":220},An={"⇧":16,shift:16,"⌥":18,alt:18,option:18,"⌃":17,ctrl:17,control:17,"⌘":91,cmd:91,meta:91,command:91},pi={16:"shiftKey",18:"altKey",17:"ctrlKey",91:"metaKey",shiftKey:16,ctrlKey:17,altKey:18,metaKey:91},Ot={16:!1,18:!1,17:!1,91:!1},pt={};for(let e=1;e<20;e++)fi[`f${e}`]=111+e;var at=[],gi=null,So=null,P0="all",tr=new Map,Ao=e=>fi[e.toLowerCase()]||An[e.toLowerCase()]||e.toUpperCase().charCodeAt(0),u6=e=>Object.keys(fi).find(t=>fi[t]===e),h6=e=>Object.keys(An).find(t=>An[t]===e),$0=e=>{P0=e||"all"},mi=()=>P0||"all",f6=()=>at.slice(0),p6=()=>at.map(e=>u6(e)||h6(e)||String.fromCharCode(e)),g6=()=>{const e=[];return Object.keys(pt).forEach(t=>{pt[t].forEach(({key:r,scope:i,mods:a,shortcut:s})=>{e.push({scope:i,shortcut:s,mods:a,keys:r.split("+").map(l=>Ao(l))})})}),e},D0=e=>{const t=e.target||e.srcElement,{tagName:r}=t;let i=!0;const a=r==="INPUT"&&!["checkbox","radio","range","button","file","reset","submit","color"].includes(t.type);return(t.isContentEditable||(a||r==="TEXTAREA"||r==="SELECT")&&!t.readOnly)&&(i=!1),i},m6=e=>(typeof e=="string"&&(e=Ao(e)),at.indexOf(e)!==-1),v6=(e,t)=>{let r,i;e||(e=mi());for(const a in pt)if(Object.prototype.hasOwnProperty.call(pt,a))for(r=pt[a],i=0;i<r.length;)r[i].scope===e?r.splice(i,1).forEach(({element:s})=>Il(s)):i++;mi()===e&&$0(t||"all")};function b6(e){let t=R0(e);e.key&&e.key.toLowerCase()==="capslock"&&(t=Ao(e.key));const r=at.indexOf(t);if(r>=0&&at.splice(r,1),e.key&&e.key.toLowerCase()==="meta"&&at.splice(0,at.length),(t===93||t===224)&&(t=91),t in Ot){Ot[t]=!1;for(const i in An)An[i]===t&&(Vn[i]=!1)}}var z0=(e,...t)=>{if(typeof e>"u")Object.keys(pt).forEach(r=>{Array.isArray(pt[r])&&pt[r].forEach(i=>ya(i)),delete pt[r]}),Il(null);else if(Array.isArray(e))e.forEach(r=>{r.key&&ya(r)});else if(typeof e=="object")e.key&&ya(e);else if(typeof e=="string"){let[r,i]=t;typeof r=="function"&&(i=r,r=""),ya({key:e,scope:r,method:i,splitKey:"+"})}},ya=({key:e,scope:t,method:r,splitKey:i="+"})=>{L0(e).forEach(a=>{const s=a.split(i),l=s.length,u=s[l-1],d=u==="*"?"*":Ao(u);if(!pt[d])return;t||(t=mi());const h=l>1?T0(An,s):[],f=[];pt[d]=pt[d].filter(b=>{const v=(r?b.method===r:!0)&&b.scope===t&&d6(b.mods,h);return v&&f.push(b.element),!v}),f.forEach(b=>Il(b))})};function B0(e,t,r,i){if(t.element!==i)return;let a;if(t.scope===r||t.scope==="all"){a=t.mods.length>0;for(const s in Ot)Object.prototype.hasOwnProperty.call(Ot,s)&&(!Ot[s]&&t.mods.indexOf(+s)>-1||Ot[s]&&t.mods.indexOf(+s)===-1)&&(a=!1);(t.mods.length===0&&!Ot[16]&&!Ot[18]&&!Ot[17]&&!Ot[91]||a||t.shortcut==="*")&&(t.keys=[],t.keys=t.keys.concat(at),t.method(e,t)===!1&&(e.preventDefault?e.preventDefault():e.returnValue=!1,e.stopPropagation&&e.stopPropagation(),e.cancelBubble&&(e.cancelBubble=!0)))}}function N0(e,t){const r=pt["*"];let i=R0(e);if(e.key&&e.key.toLowerCase()==="capslock"||!(Vn.filter||D0).call(this,e))return;if((i===93||i===224)&&(i=91),at.indexOf(i)===-1&&i!==229&&at.push(i),["metaKey","ctrlKey","altKey","shiftKey"].forEach(u=>{const d=pi[u];e[u]&&at.indexOf(d)===-1?at.push(d):!e[u]&&at.indexOf(d)>-1?at.splice(at.indexOf(d),1):u==="metaKey"&&e[u]&&(at=at.filter(h=>h in pi||h===i))}),i in Ot){Ot[i]=!0;for(const u in An)Object.prototype.hasOwnProperty.call(An,u)&&(Vn[u]=e[pi[An[u]]]);if(!r)return}for(const u in Ot)Object.prototype.hasOwnProperty.call(Ot,u)&&(Ot[u]=e[pi[u]]);e.getModifierState&&!(e.altKey&&!e.ctrlKey)&&e.getModifierState("AltGraph")&&(at.indexOf(17)===-1&&at.push(17),at.indexOf(18)===-1&&at.push(18),Ot[17]=!0,Ot[18]=!0);const a=mi();if(r)for(let u=0;u<r.length;u++)r[u].scope===a&&(e.type==="keydown"&&r[u].keydown||e.type==="keyup"&&r[u].keyup)&&B0(e,r[u],a,t);if(!(i in pt))return;const s=pt[i],l=s.length;for(let u=0;u<l;u++)if((e.type==="keydown"&&s[u].keydown||e.type==="keyup"&&s[u].keyup)&&s[u].key){const d=s[u],{splitKey:h}=d,f=d.key.split(h),b=[];for(let v=0;v<f.length;v++)b.push(Ao(f[v]));b.sort().join("")===at.sort().join("")&&B0(e,d,a,t)}}var Vn=function e(t,r,i){at=[];const a=L0(t);let s=[],l="all",u=document,d=0,h=!1,f=!0,b="+",v=!1,m=!1;if(i===void 0&&typeof r=="function"&&(i=r),Object.prototype.toString.call(r)==="[object Object]"){const g=r;g.scope&&(l=g.scope),g.element&&(u=g.element),g.keyup&&(h=g.keyup),g.keydown!==void 0&&(f=g.keydown),g.capture!==void 0&&(v=g.capture),typeof g.splitKey=="string"&&(b=g.splitKey),g.single===!0&&(m=!0)}for(typeof r=="string"&&(l=r),m&&z0(t,l);d<a.length;d++){const g=a[d].split(b);s=[],g.length>1&&(s=T0(An,g));let k=g[g.length-1];k=k==="*"?"*":Ao(k),k in pt||(pt[k]=[]),pt[k].push({keyup:h,keydown:f,scope:l,mods:s,shortcut:a[d],method:i,key:a[d],splitKey:b,element:u})}if(typeof u<"u"&&typeof window<"u"){if(!tr.has(u)){const g=(y=window.event)=>N0(y,u),k=(y=window.event)=>{N0(y,u),b6(y)};tr.set(u,{keydownListener:g,keyupListenr:k,capture:v}),xl(u,"keydown",g,v),xl(u,"keyup",k,v)}if(!gi){const g=()=>{at=[]};gi={listener:g,capture:v},xl(window,"focus",g,v)}if(!So&&typeof document<"u"){const g=()=>{at=[];for(const S in Ot)Ot[S]=!1;for(const S in An)e[S]=!1},k=g,y=g;document.addEventListener("fullscreenchange",k),document.addEventListener("webkitfullscreenchange",y),So={fullscreen:k,webkit:y}}}};function w6(e,t="all"){Object.keys(pt).forEach(r=>{pt[r].filter(i=>i.scope===t&&i.shortcut===e).forEach(i=>{i&&i.method&&i.method({},i)})})}function Il(e){const t=Object.values(pt).flat();if(t.findIndex(({element:r})=>r===e)<0&&e){const{keydownListener:r,keyupListenr:i,capture:a}=tr.get(e)||{};r&&i&&(hi(e,"keyup",i,a),hi(e,"keydown",r,a),tr.delete(e))}if(t.length<=0||tr.size<=0){if(Array.from(tr.keys()).forEach(r=>{const{keydownListener:i,keyupListenr:a,capture:s}=tr.get(r)||{};i&&a&&(hi(r,"keyup",a,s),hi(r,"keydown",i,s),tr.delete(r))}),tr.clear(),Object.keys(pt).forEach(r=>delete pt[r]),gi){const{listener:r,capture:i}=gi;hi(window,"focus",r,i),gi=null}So&&typeof document<"u"&&(document.removeEventListener("fullscreenchange",So.fullscreen),document.removeEventListener("webkitfullscreenchange",So.webkit),So=null)}}var Cl={getPressedKeyString:p6,setScope:$0,getScope:mi,deleteScope:v6,getPressedKeyCodes:f6,getAllKeyCodes:g6,isPressed:m6,filter:D0,trigger:w6,unbind:z0,keyMap:fi,modifier:An,modifierMap:pi};for(const e in Cl){const t=e;Object.prototype.hasOwnProperty.call(Cl,t)&&(Vn[t]=Cl[t])}if(typeof window<"u"){const e=window.hotkeys;Vn.noConflict=t=>(t&&window.hotkeys===Vn&&(window.hotkeys=e),Vn),window.hotkeys=Vn}function H0(){const e=he("chapter").value;if(Y("viewMode").startsWith("Fluid")){const t=Y("viewMode")==="FluidRTL"?-1:1;e?.scrollBy({top:0,left:Y("scrollHeight")*t,behavior:"smooth"}),e&&e.scrollLeft+e.clientWidth>=e.scrollWidth-2&&(Pe("autoScroll",!1),Ae("Finished auto scroll"))}else window.scrollBy({top:Y("scrollHeight"),left:0,behavior:"smooth"}),window.scrollY+window.innerHeight>=document.documentElement.scrollHeight&&(Pe("autoScroll",!1),Ae("Finished auto scroll"));he("autoScroll")&&requestAnimationFrame(H0)}function ka(){he("autoScroll")?(Pe("autoScroll",!1),Ae("Stopped auto scroll")):(Pe("autoScroll",!0),requestAnimationFrame(H0),Ae("Start auto scroll"))}var Ea=!1,_6=xe.default.debounce(()=>{ka(),Ea=!1},500);function y6(){!Ea&&he("autoScroll")&&(ka(),Ea=!0),Ea&&!he("autoScroll")&&_6()}function k6(){window.addEventListener("wheel",xe.default.throttle(y6,500))}var Zn=class extends Xe{constructor(...t){super(...t),this.open=!1,this.mode="dialog",this.fullscreen=!1,this.label="",this.withoutHeader=!1,this.lightDismiss=!0}static{this.styles=_t`
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
      font-size: 24px;
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
  `}close(){this.open=!1}handleCancel(t){t.preventDefault(),this.close()}handleBackdropClick(){this.mode!=="inline"&&this.lightDismiss&&this.close()}handleClick(t){this.mode!=="inline"&&this.lightDismiss&&t.target===this.dialog&&this.close()}updated(t){this.mode!=="inline"&&t.has("open")&&(this.open?(this.dialog.classList.remove("closing"),this.dialog.show(),this.dispatchEvent(new CustomEvent("open",{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("wa-show",{bubbles:!0,composed:!0})),setTimeout(()=>{this.dispatchEvent(new CustomEvent("wa-after-show",{bubbles:!0,composed:!0}))},150)):t.get("open")===!0&&(this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("wa-hide",{bubbles:!0,composed:!0})),this.dialog.classList.add("closing"),setTimeout(()=>{this.dialog.classList.remove("closing"),this.dialog.open&&this.dialog.close(),this.dispatchEvent(new CustomEvent("wa-after-hide",{bubbles:!0,composed:!0}))},300)))}render(){return re`
      <div
        class="backdrop"
        @click=${this.handleBackdropClick}
      ></div>
      <dialog
        part="dialog"
        @cancel=${this.handleCancel}
        @click=${this.handleClick}
      >
        ${this.withoutHeader?"":re`
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
                ${Al}
              </button>
            </div>
          </div>
        `}
        <div class="content-slot" part="body">
          ${this.icon?re`
                <div class="icon-container">
                  <mov-icon
                    .name=${E6(this.icon)}
                    size="4rem"
                  ></mov-icon>
                </div>
              `:""}
          <slot></slot>
        </div>
        <slot name="footer" part="footer"></slot>
      </dialog>
    `}};$([j({type:Boolean,reflect:!0})],Zn.prototype,"open",void 0),$([j({type:String,reflect:!0})],Zn.prototype,"mode",void 0),$([j({type:Boolean,reflect:!0})],Zn.prototype,"fullscreen",void 0),$([j({type:String,reflect:!0})],Zn.prototype,"label",void 0),$([j({type:Boolean,reflect:!0,attribute:"without-header"})],Zn.prototype,"withoutHeader",void 0),$([j({type:Boolean,reflect:!0,attribute:"light-dismiss"})],Zn.prototype,"lightDismiss",void 0),$([j({type:String,reflect:!0})],Zn.prototype,"icon",void 0),$([Qn("dialog")],Zn.prototype,"dialog",void 0),Zn=$([rt("mov-dialog")],Zn);function Ol(e){const t=()=>Pe("dialog",null);e.timer&&setTimeout(t,e.timer),Pe("dialog",{open:!0,icon:e.icon,title:e.title,content:re`<div style="padding: 1rem;">${Bd(e.html)}</div>`,footer:re`
      <div
        slot="footer"
        style="display: flex; justify-content: flex-end; padding: 0.5rem 1rem 1rem;"
      >
        <mov-button @click=${t}>OK</mov-button>
      </div>
    `})}function E6(e){switch(e){case"info":return"info-circle";case"warning":return"alert-circle";case"success":return"circle-check";case"error":return"circle-x";case"question":return"help";default:return""}}function S6(e){const t=e.currentTarget.value;Ud(t==="true")}function A6(e){const t=e.currentTarget.value;St("locale",t)}function M6(e){const t=e.currentTarget.value;St("loadMode",t)}function x6(e){const t=e.detail.checked;St("fitWidthIfOversize",t)}function I6(e){const t=e.currentTarget.value;St("navbar",t)}function C6(e){const t=e.currentTarget.value;St("pagination",t)}function O6(e){const t=e.detail.checked;St("downloadZip",t),t&&Ol({title:q("ATTENTION"),html:q("AUTO_DOWNLOAD"),timer:1e4,icon:"info"})}function T6(e){const t=e.detail.checked;St("lazyLoadImages",t),t&&Ol({title:q("WARNING"),html:q("LAZY_LOAD"),icon:"warning"})}function L6(e){const t=e.detail.value;St("lazyStart",typeof t=="string"?parseInt(t,10):t)}function R6(e){const t=e.currentTarget.value;St("loadSpeed",t),["Extreme","All"].includes(t)&&Ol({title:q("SPEED_WARNING"),html:q("SPEED_WARNING_MESSAGE"),icon:"warning"})}function P6(e){const t=e.detail.value;St("zoomStep",typeof t=="string"?parseInt(t,10):t)}function $6(e){const t=e.detail.value,r=typeof t=="string"?parseInt(t,10):t;mv("MinZoom",`#MangaOnlineViewer .PageContent .PageImg {min-width: ${r}vw;}`),St("minZoom",r)}function D6(e){const t=e.detail.checked;St("hidePageControls",t)}function z6(e){const t=e.currentTarget.value;St("header",t)}function B6(e){const t=e.detail.value;St("scrollHeight",typeof t=="string"?parseInt(t,10):t)}function F0(e){Jo("scrollHeight",t=>{const r=t+e*25;if(r<=0)return 0;const i=Math.ceil(window.innerHeight/200)*100;return r>=i?i:r})}function N6(){const e=Y("navbar");return e==="left"||e==="right"?window.innerWidth-34:window.innerWidth}function H6(){return Y("navbar")==="bottom"?window.innerHeight-34:window.innerHeight}function G0(e,t=Y("zoomMode"),r=Y("zoomValue")){const i=N6(),a=H6();if(t==="width")e.width=i,e.height=void 0;else if(t==="height")e.width=void 0,e.height=a;else if(t==="percent"){const s=e.naturalWidth??e.ref?.value?.naturalWidth;e.width=s?s*(r/100):void 0,e.height=void 0}return e}function qr(e=Y("zoomMode"),t=Y("zoomValue")){Ae("Zoom",e,t),uo("zoomMode",e),uo("zoomValue",t),e==="height"?Pe("scrollToPage",he("currentPage")):Ur("header");const r=he("images"),i=he("manga"),a={};for(let s=i?.begin??1;s<=(i?.pages??1);s++)a[s]=G0({...r?.[s]},e,t);Pe("images",a)}function Mo(e,t=Y("zoomValue")){return()=>{qr(e,t)}}function Sa(e=1){return()=>{const t=Y("zoomValue")+e*Y("zoomStep");t>0&&t<500&&qr("percent",t)}}function F6(e){const t=e.currentTarget.value;St("zoomMode",t)}function G6(e){const t=e.detail.value,r=typeof t=="string"?parseInt(t,10):t;St("zoomValue",r),qr("percent",r)}function W6(e){const t=e.detail.value;qr("percent",typeof t=="string"?parseInt(t,10):t)}function fn(e){return()=>{uo("viewMode",e),e.startsWith("Fluid")?(uo("zoomMode","height"),uo("header","click")):(Ur("zoomMode"),Ur("zoomValue"),Ur("header")),qr()}}function U6(e){const t=e.currentTarget.value;St("viewMode",t),fn(t)()}function V6(e){const t=Y("viewMode")==="FluidRTL"?-1:1;he("chapter").value?.scrollBy({left:.8*window.innerWidth*e*t,behavior:"smooth"})}function Z6(e){const t=he("currentPage")+e;t<0?Pe("scrollToPage",0):t>(he("manga")?.pages??1)||Pe("scrollToPage",t)}function j6(e){window.scrollBy({top:.8*window.innerHeight*e,behavior:"smooth"})}function q6(e){const t=he("currentPage"),r=he("manga");if(!r)return;const i=he("images")??{},a=r.begin??1,s=r.pages??1,l=d=>{if(d<a||d>s)return!1;if(i[d]?.doublePage)return!0;let h=0;for(let f=d-1;f>=a&&!i[f]?.doublePage;f--)h++;return h%2===0};let u;if(e===1)for(u=t+1;u<=s&&!l(u);)u++;else if(l(t))for(u=t-1;u>a&&!l(u);)u--;else for(u=t;u>a&&!l(u);)u--;u<a?Pe("scrollToPage",0):u>s?Pe("scrollToPage",s):Pe("scrollToPage",u)}function W0(e){const t=Y("viewMode"),r=Y("zoomMode");Ae("Scrolling view",t,"zoom",r,"sign",e),t.match(/^(Book|Manga)$/)&&r==="height"?q6(e):t.startsWith("Fluid")?V6(e):r==="height"?Z6(e):j6(e)}function vi(e){const t=he("manga")?.[e];t&&t!=="#"?window.location.href=(0,C0.sanitizeUrl)(t):e==="series"&&(Es()?window.location.href=window.location.pathname:window.history.back())}var K6={SCROLL_UP(){W0(-1)},SCROLL_DOWN(){W0(1)},NEXT_CHAPTER(){vi("next")},PREVIOUS_CHAPTER(){vi("prev")},RETURN_CHAPTER_LIST(){vi("series")},ENLARGE(){Sa(1)()},REDUCE(){Sa(-1)()},RESTORE(){Mo("percent",100)()},FIT_WIDTH(){Mo("width")()},FIT_HEIGHT(){Mo("height")()},SETTINGS(){Wd("panel",e=>e==="none"?"settings":"none")},VIEW_MODE_WEBCOMIC(){fn("WebComic")()},VIEW_MODE_VERTICAL(){fn("Vertical")()},VIEW_MODE_LEFT(){fn("FluidRTL")()},VIEW_MODE_RIGHT(){fn("FluidLTR")()},VIEW_MODE_GALLERY(){fn("Gallery")()},SCROLL_START(){ka()},INCREASE_SPEED(){F0(1)},DECREASE_SPEED(){F0(-1)}};function U0(){document.onkeydown=null,document.onkeyup=null,window.onkeydown=null,window.onkeyup=null,window.onload=null,document.body.onload=null,Vn.unbind(),xe.default.keys(Y("keybinds")).forEach(e=>{Vn(Y("keybinds")[e]?.join(",")??"",xe.default.throttle(t=>{t.preventDefault(),t.stopImmediatePropagation(),t.stopPropagation(),K6[e]()},100))})}var yr=class extends Xe{constructor(...t){super(...t),this.mode="disabled",this.currentPage=1,this.totalPages=1,this.startPage=1}static{this.styles=_t`
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
      --mov-slider-track-height: 4px;
      --mov-slider-thumb-size: 16px;
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
  `}get isFirstPage(){return this.currentPage<=this.startPage}get isLastPage(){return this.currentPage>=this.totalPages-(1-this.startPage)}renderSlider(){return re`
      <div class="slider-pagination">
        <button
          class="pagination-button"
          @click=${ui}
          value="${this.prev}"
          ?disabled=${yn(this.prev)||this.prev==="#"}
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
          <mov-slider
            class="pagination-slider"
            min="${this.startPage}"
            max="${this.totalPages}"
            .value="${this.currentPage}"
            show-tooltip
            @input="${l6}"
          ></mov-slider>
        </div>

        <button class="pagination-button" @click=${this.goToNextPage} ?disabled=${this.isLastPage}>
          <mov-icon name="chevron-right"></mov-icon>
          <div class="tooltip">Next Page</div>
        </button>

        <button
          class="pagination-button"
          @click=${ui}
          value="${this.next}"
          ?disabled=${yn(this.next)||this.next==="#"}
        >
          <mov-icon name="arrow-big-right"></mov-icon>
          <div class="tooltip">Next Chapter</div>
        </button>
      </div>
    `}renderSideArrows(){return re`
      <div class="arrows-pagination">
        <button
          class="side-arrow left"
          @click=${this.handleLeftArrowClick}
          ?disabled=${this.isFirstPage&&(yn(this.prev)||this.prev==="#")}
        >
          <mov-icon name="chevron-left"></mov-icon>
        </button>
        <button
          class="side-arrow right"
          @click=${this.handleRightArrowClick}
          ?disabled=${this.isLastPage&&(yn(this.next)||this.next==="#")}
        >
          <mov-icon name="chevron-right"></mov-icon>
        </button>
      </div>
    `}render(){if(this.mode==="disabled")return ze;const t=this.mode==="slider"||this.mode==="both",r=this.mode==="side-arrows"||this.mode==="both";return re`
      ${t?this.renderSlider():ze} ${r?this.renderSideArrows():ze}
    `}handleLeftArrowClick(){this.isFirstPage?vi("prev"):this.goToPreviousPage()}handleRightArrowClick(){this.isLastPage?vi("next"):this.goToNextPage()}goToPreviousPage(){this.goToPage(this.currentPage-1)}goToNextPage(){this.goToPage(this.currentPage+1)}goToPage(t){Pe("scrollToPage",t)}};$([j({type:String})],yr.prototype,"mode",void 0),$([j({type:Number})],yr.prototype,"currentPage",void 0),$([j({type:Number})],yr.prototype,"totalPages",void 0),$([j({type:Number})],yr.prototype,"startPage",void 0),$([j({type:String})],yr.prototype,"next",void 0),$([j({type:String})],yr.prototype,"prev",void 0),yr=$([rt("manga-pagination")],yr);var kr=class extends Xe{constructor(...t){super(...t),this.open=!1,this.placement="end",this.label="",this.withoutHeader=!1,this.lightDismiss=!0}static{this.styles=_t`
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
      font-size: 24px;
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
  `}close(){this.open=!1}handleCancel(t){t.preventDefault(),this.close()}handleBackdropClick(){this.lightDismiss&&this.close()}handleClick(t){this.lightDismiss&&t.target===this.dialog&&this.close()}updated(t){t.has("open")&&(this.open?(this.dialog.classList.remove("closing"),this.dialog.show(),this.dispatchEvent(new CustomEvent("open",{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("wa-show",{bubbles:!0,composed:!0})),setTimeout(()=>{this.dispatchEvent(new CustomEvent("wa-after-show",{bubbles:!0,composed:!0}))},250)):t.get("open")===!0&&(this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("wa-hide",{bubbles:!0,composed:!0})),this.dialog.classList.add("closing"),setTimeout(()=>{this.dialog.classList.remove("closing"),this.dialog.open&&this.dialog.close(),this.dispatchEvent(new CustomEvent("wa-after-hide",{bubbles:!0,composed:!0}))},300)))}render(){return re`
      <div
        class="backdrop"
        @click=${this.handleBackdropClick}
      ></div>
      <dialog
        part="dialog"
        @cancel=${this.handleCancel}
        @click=${this.handleClick}
      >
        ${this.withoutHeader?"":re`
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
                ${Al}
              </button>
            </div>
          </div>
        `}
        <slot class="content-slot" part="body"></slot>
        <slot name="footer" class="footer-slot" part="footer"></slot>
      </dialog>
    `}};$([j({type:Boolean,reflect:!0})],kr.prototype,"open",void 0),$([j({type:String,reflect:!0})],kr.prototype,"placement",void 0),$([j({type:String,reflect:!0})],kr.prototype,"label",void 0),$([j({type:Boolean,reflect:!0,attribute:"without-header"})],kr.prototype,"withoutHeader",void 0),$([j({type:Boolean,reflect:!0,attribute:"light-dismiss"})],kr.prototype,"lightDismiss",void 0),$([Qn("dialog")],kr.prototype,"dialog",void 0),kr=$([rt("mov-drawer")],kr);var Kr=class extends Xe{static{this.styles=_t`
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
      top: 100%;
      left: 0;
      background-color: var(--theme-background-color, #f9f9f9);
      min-width: 160px;
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
      z-index: 100;
      list-style: none;
      padding: 0;
      margin: 4px 0 0;
      border: 1px solid var(--theme-border-color, #ccc);
      border-radius: 5px;
    }
    :host([placement^='top']) .dropdown-content {
      top: auto;
      bottom: 100%;
      margin: 0 0 4px;
    }
    :host([placement$='end']) .dropdown-content {
      left: auto;
      right: 0;
    }
    :host([open]) .dropdown-content {
      display: block;
    }
  `}constructor(){super(),this.open=!1,this.checkable=!1,this.distance=0,this.skidding=0,this.placement="bottom-start",this.boundClickHandler=this.handleClickOutside.bind(this)}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this.boundClickHandler)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this.boundClickHandler)}handleClickOutside(t){this.open&&!t.composedPath().includes(this)&&this.hide()}show(){this.open||(this.open=!0,this.dispatchEvent(new CustomEvent("wa-show",{bubbles:!0,composed:!0})),setTimeout(()=>{this.dispatchEvent(new CustomEvent("wa-after-show",{bubbles:!0,composed:!0}))},150))}hide(){this.open&&(this.open=!1,this.dispatchEvent(new CustomEvent("wa-hide",{bubbles:!0,composed:!0})),setTimeout(()=>{this.dispatchEvent(new CustomEvent("wa-after-hide",{bubbles:!0,composed:!0}))},150))}toggle(){this.open?this.hide():this.show()}render(){return re`
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
    `}};$([j({type:Boolean,reflect:!0})],Kr.prototype,"open",void 0),$([j({type:Boolean,reflect:!0})],Kr.prototype,"checkable",void 0),$([j({type:Number})],Kr.prototype,"distance",void 0),$([j({type:Number})],Kr.prototype,"skidding",void 0),$([j({type:String})],Kr.prototype,"placement",void 0),Kr=$([rt("mov-dropdown")],Kr);var Er=class extends Xe{constructor(...t){super(...t),this.selected=!1,this.checked=!1,this.disabled=!1,this.value="",this.variant="default",this.type="normal"}static{this.styles=_t`
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
  `}handleSelect(){this.disabled||this.dispatchEvent(new CustomEvent("wa-select",{detail:{item:this},bubbles:!0,composed:!0}))}render(){return re`
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
    `}};$([j({type:Boolean,reflect:!0})],Er.prototype,"selected",void 0),$([j({type:Boolean,reflect:!0})],Er.prototype,"checked",void 0),$([j({type:Boolean,reflect:!0})],Er.prototype,"disabled",void 0),$([j({type:String})],Er.prototype,"value",void 0),$([j({type:String,reflect:!0})],Er.prototype,"variant",void 0),$([j({type:String,reflect:!0})],Er.prototype,"type",void 0),Er=$([rt("mov-dropdown-item")],Er);var Tl=class extends Xe{constructor(...t){super(...t),this.orientation="horizontal"}static{this.styles=_t`
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
  `}render(){return re`<div
      class="divider"
      role="separator"
    ></div>`}};$([j({type:String,reflect:!0})],Tl.prototype,"orientation",void 0),Tl=$([rt("mov-divider")],Tl);var V0="kbd,.key{white-space:nowrap;text-align:center;background-color:#505050;background-color:gradient(linear, left top, left bottom, from(#3c3c3c), to(#505050));color:#fafafa;text-shadow:-1px -1px #464646;cursor:default;user-select:none;border:none;border-radius:.3em;min-width:1em;padding:.3em .4em .2em .3em;font-family:Lucida Grande,Lucida,Arial,sans-serif;font-size:.85em;font-style:normal;line-height:1;text-decoration:none;display:inline-block;box-shadow:inset 0 0 1px #969696,inset 0 -.05em .4em #505050,0 .1em #1e1e1e,0 .1em .1em #0000004d}kbd[title],.key[title]{cursor:help}kbd.dark,.dark-keys kbd,.key.dark,.dark-keys .key{white-space:nowrap;text-align:center;background-color:#505050;background-color:gradient(linear, left top, left bottom, from(#3c3c3c), to(#505050));color:#fafafa;text-shadow:-1px -1px #464646;border:none;border-radius:.3em;min-width:1em;padding:.3em .4em .2em .3em;font-family:Lucida Grande,Lucida,Arial,sans-serif;font-style:normal;text-decoration:none;display:inline-block;box-shadow:inset 0 0 1px #969696,inset 0 -.05em .4em #505050,0 .1em #1e1e1e,0 .1em .1em #0000004d}kbd.light,.light-keys kbd,.key.light,.light-keys .key{white-space:nowrap;text-align:center;background-color:#fafafa;background-color:gradient(linear, left top, left bottom, from(#d2d2d2), to(#fff));color:#323232;text-shadow:0 0 2px #fff;border:none;border-radius:.3em;min-width:1em;padding:.3em .4em .2em .3em;font-family:Lucida Grande,Lucida,Arial,sans-serif;font-style:normal;text-decoration:none;display:inline-block;box-shadow:inset 0 0 1px #fff,inset 0 0 .4em #c8c8c8,0 .1em #828282,0 .11em #0006,0 .1em .11em #000000e6}kbd.so,.so-keys kbd,.key.so,.so-keys .key{white-space:nowrap;text-align:center;color:#242729;text-shadow:0 1px #fff;background-color:#e1e3e5;border:1px solid #adb3b9;border-radius:.272727em;min-width:1em;margin:0 .1em;padding:.1em .6em;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;font-style:normal;line-height:1.4;text-decoration:none;display:inline-block;box-shadow:0 1px #0c0d0e33,inset 0 0 0 2px #fff}kbd.github,.github-keys kbd,.key.github,.github-keys .key{white-space:nowrap;text-align:center;color:#444d56;vertical-align:middle;box-sizing:border-box;min-width:1em;text-shadow:none;background-color:#fafbfc;border:1px solid #c6cbd1;border-bottom-color:#959da5;border-radius:.272727em;padding:.272727em .454545em;font-family:SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace;font-size:68.75%;font-style:normal;line-height:.909091;text-decoration:none;display:inline-block;box-shadow:inset 0 -1px #959da5}",Y6=_n((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.StoreController=void 0;var t=class{constructor(r,i){this.host=r,this.atom=i,r.addController(this)}hostConnected(){this.unsubscribe=this.atom.subscribe(()=>{this.host.requestUpdate()})}hostDisconnected(){var r;(r=this.unsubscribe)===null||r===void 0||r.call(this)}get value(){return this.atom.get()}};e.StoreController=t})),Ll=_n((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.MultiStoreController=void 0;var t=class{constructor(r,i){this.host=r,this.atoms=i,r.addController(this)}hostConnected(){this.unsubscribes=this.atoms.map(r=>r.subscribe(()=>this.host.requestUpdate()))}hostDisconnected(){var r;(r=this.unsubscribes)===null||r===void 0||r.forEach(i=>i())}get values(){return this.atoms.map(r=>r.get())}};e.MultiStoreController=t})),X6=_n((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.useStores=void 0;var t=Ll();function r(...i){return a=>class extends a{constructor(...s){super(...s),new t.MultiStoreController(this,i)}}}e.useStores=r})),J6=_n((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.withStores=void 0;var t=Ll(),r=(i,a)=>class extends i{constructor(...l){super(...l),new t.MultiStoreController(this,a)}};e.withStores=r})),Q6=_n((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.withStores=e.useStores=e.MultiStoreController=e.StoreController=void 0;var t=Y6();Object.defineProperty(e,"StoreController",{enumerable:!0,get:function(){return t.StoreController}});var r=Ll();Object.defineProperty(e,"MultiStoreController",{enumerable:!0,get:function(){return r.MultiStoreController}});var i=X6();Object.defineProperty(e,"useStores",{enumerable:!0,get:function(){return i.useStores}});var a=J6();Object.defineProperty(e,"withStores",{enumerable:!0,get:function(){return a.withStores}})})),xo=Q6(),Z0=class extends Xe{static{this.styles=_t`
    :host {
      display: inline-flex;
      vertical-align: middle;
      z-index: 100;
    }

    :host(:has(mov-dropdown[open])) {
      z-index: 110;
    }

    .button-group {
      display: flex;
      flex-wrap: wrap;
    }

    ::slotted(mov-button),
    ::slotted(mov-dropdown) {
      margin-inline-start: -1px;
      --mov-border-radius-m: 0;
    }

    ::slotted(mov-button:first-child),
    ::slotted(mov-dropdown:first-child) {
      margin-inline-start: 0;
      --mov-border-radius-m: 0.375rem 0 0 0.375rem;
    }

    ::slotted(mov-button:last-child),
    ::slotted(mov-dropdown:last-child) {
      --mov-border-radius-m: 0 0.375rem 0.375rem 0;
    }

    ::slotted(mov-button:first-child:last-child),
    ::slotted(mov-dropdown:first-child:last-child) {
      --mov-border-radius-m: 0.375rem;
    }

    /* Handling adjacent button groups visual merge */
    :host(.button-group-merged-start) {
      margin-inline-start: -1px;
    }
    :host(.button-group-merged-start) ::slotted(mov-button:first-child),
    :host(.button-group-merged-start) ::slotted(mov-dropdown:first-child) {
      --mov-border-radius-m: 0 0 0 0;
    }

    :host(.button-group-merged-end) ::slotted(mov-button:last-child),
    :host(.button-group-merged-end) ::slotted(mov-dropdown:last-child) {
      --mov-border-radius-m: 0 0 0 0;
    }

    ::slotted(mov-dropdown) {
      display: flex;
    }
  `}render(){return re`
      <div
        class="button-group"
        role="group"
      >
        <slot></slot>
      </div>
    `}};Z0=$([rt("mov-button-group")],Z0);var Aa=49,eb=100,tb=class Ff{constructor(t){this.prevOffset=0,this.headroom="top",this.headerVisible=!0,this.handleScroll=xe.default.throttle(()=>{if(this.isAnyDropdownOpen()){this.prevOffset=window.scrollY;return}const i=Y("header"),{scrollY:a}=window;let s="none";Y("zoomMode")!=="height"&&a+window.innerHeight+eb>document.body.scrollHeight?s="end":a>this.prevOffset&&a>Aa?s="hide":i==="scroll"&&a<this.prevOffset&&a>Aa?s="show":i!=="click"&&a<=Aa&&(s="top");let l=!1;if(this.headroom!==s&&(this.headroom=s,l=!0),i==="scroll"){const u=s!=="hide";this.headerVisible!==u&&(this.headerVisible=u,l=!0)}l&&this.host.requestUpdate(),this.prevOffset=a},300),this.handleMouseMove=xe.default.throttle(i=>{if(this.isAnyDropdownOpen()){this.headerVisible||(this.headerVisible=!0,this.host.requestUpdate());return}if(["hover","scroll"].includes(Y("header"))){const a=Ff.isMouseInsideRegion(i,window.innerWidth,Aa*1.5);this.headerVisible!==a&&(this.headerVisible=a,this.host.requestUpdate())}},300),this.toggleHeaderVisibility=()=>{Y("header")==="click"&&(this.headerVisible=!this.headerVisible,this.host.requestUpdate())},this.host=t,t.addController(this);const r=Y("header");Y("zoomMode")==="height"&&["click","hover"].includes(r)&&(this.headerVisible=!1)}hostConnected(){window.addEventListener("scroll",this.handleScroll),window.addEventListener("mousemove",this.handleMouseMove)}hostDisconnected(){window.removeEventListener("scroll",this.handleScroll),window.removeEventListener("mousemove",this.handleMouseMove)}isAnyDropdownOpen(){if(!this.host.shadowRoot)return!1;const t=this.host.shadowRoot.querySelectorAll("mov-dropdown");for(const r of t)if(r.open)return!0;return!1}static isMouseInsideRegion(t,r,i){return t.clientX>=0&&t.clientX<=r&&t.clientY>=0&&t.clientY<=i}},nb=class{constructor(e){this.canvasContext=null,this.host=e,e.addController(this),this.canvasContext=document.createElement("canvas").getContext("2d"),this.resizeObserver=new ResizeObserver(()=>this.update())}hostConnected(){}hostDisconnected(){this.resizeObserver.disconnect()}observe(e,t){!e||!t||(this.element=e,this.text=t,this.resizeObserver.disconnect(),this.resizeObserver.observe(this.element),this.update())}update(){if(!this.element||!this.text||!this.canvasContext){this.value=this.text,this.host.requestUpdate();return}const e=window.getComputedStyle(this.element);this.canvasContext.font=`${e.fontWeight} ${e.fontSize} ${e.fontFamily}`;const t=this.text,r=this.element.clientWidth;if(this.canvasContext.measureText(t).width<=r){this.value=t,this.host.requestUpdate();return}const i="...",a=r-this.canvasContext.measureText(i).width;let s="",l="";for(let u=1;u<t.length;u++){const d=t.substring(0,u),h=t.substring(t.length-u);if(this.canvasContext.measureText(d).width+this.canvasContext.measureText(h).width>a)break;s=d,l=h}this.value=`${s}${i}${l}`,this.host.requestUpdate()}};function j0(e=window.location.href){yn(ho(e))||(Ae(`Bookmark Removed ${e}`),Jo("bookmarks",t=>[...t.filter(r=>r.url!==e)]))}function rb(e){const t=e.currentTarget.value;Ae(`Bookmark Removed ${t}`),an.error({title:q("BOOKMARK_REMOVED"),duration:1e4}),j0(t)}function ob(){Pe("panel","bookmarks")}function q0(){const e=he("currentPage"),t={name:he("manga")?.title??document.documentElement.title??window.location.hostname,url:window.location.href,page:e,date:new Date().toISOString().slice(0,10)};ho(t.url)?(Jo("bookmarks",r=>[...r.filter(i=>i.url!==t.url)]),an.error({title:q("BOOKMARK_REMOVED"),duration:1e4})):(Jo("bookmarks",r=>[...r,t]),an.success({title:q("BOOKMARK_SAVED"),description:q("BOOKMARK_MESSAGE").replace("##num##",e.toString()),duration:1e4}))}function Rl(){Pe("panel","none")}function ib(){Pe("panel","settings")}function ab(){Pe("panel","keybindings")}function sb(e){const t={};xe.default.keys(e).forEach(r=>{const i=e[r].value;if(i){const a=i.value.split(",").map(s=>s.trim()).filter(s=>s!=="");t[r]=a.length>0?a:void 0}}),St("keybinds",t),Pe("panel","keybindings"),U0()}function lb(){Pe("panel","keybindingsEditor")}var cb="#Header{background-color:var(--theme-background-color);z-index:900;flex-flow:row;justify-content:space-around;align-items:center;gap:10px;padding:0 20px;transition:transform .3s ease-in;display:flex;position:sticky;top:0;left:0;right:0;box-shadow:0 0 25px #00000080}#Header.click{padding-left:60px}@keyframes headroom{0%{transform:translateY(-100%)}to{transform:translateY(0%)}}#Header:not(.visible,.headroom-top,.fixed,.simple){animation:.3s ease-in reverse headroom;position:sticky;top:0;transform:translateY(-100%)}#Header.scroll.headroom-hide:not(.visible){animation:none;position:sticky;top:0;transform:translateY(-100%)}#Header.scroll.headroom-show,#Header.headroom-end,#Header.visible{animation:.3s ease-in headroom;position:sticky;top:0;transform:translateY(0%)}#Header.headroom-top{animation:none}#Header.fixed{animation:none;position:sticky;top:0;transform:translateY(0%)}#Header.simple{animation:none;position:static;top:0;transform:translateY(0%)}#menu{z-index:1;color:var(--theme-body-text-color);width:40px;height:40px;position:fixed}#menu:not(.click),#menu.hide{display:none}#menu.click{z-index:901;top:0;left:0}#Toolbar{order:1}#GlobalFunctions{order:4}#ViewerTitle{order:2;justify-content:center;display:flex}#ZoomControl{flex-direction:column;order:3;align-items:center;gap:3px;min-width:100px;padding:10px 5px;display:flex}#MangaTitle{word-wrap:anywhere;white-space:nowrap;text-overflow:ellipsis;min-width:200px;max-width:40vw;margin:0;padding:2px;font-size:19px;font-weight:400;overflow:hidden}",K0="#Header.mobile,#Header.tablet{flex-flow:wrap;justify-content:center;gap:0;display:flex}.mobile #ViewerTitle,.tablet #ViewerTitle{order:4;min-height:auto}.mobile #Toolbar,.tablet #Toolbar{order:1}#Header.mobile{flex-flow:wrap;justify-content:center;align-items:center}#Header.mobile.click+#Chapter:not(.webcomic,.vertical){position:sticky}.tablet #MangaTitle,.mobile #MangaTitle{max-width:90vw}.mobile #ViewerTitle{order:3;height:auto;margin-top:0;padding:0}.mobile #GlobalFunctions,.tablet #GlobalFunctions{order:2}.mobile .PageFunctions{padding:0}.mobile .PageFunctions .PageButton.Bookmark{opacity:1}.mobile #GlobalFunctions #ZoomSlider,.tablet #GlobalFunctions #ZoomSlider,.mobile .PageFunctions .PageButton:not(.Bookmark),.tablet #Counters,.mobile #ZoomControl,.mobile #ZoomDropdown,.mobile #ViewDropdown,.mobile #FileDropdown :where(:nth-child(3),:nth-child(4)),.mobile #BookMode,.mobile #MangaMode,.tablet #BookMode,.tablet #MangaMode{display:none}",Ma=class extends Xe{static{this.styles=[ke(cb),ke(K0),ke(V0),_t``]}constructor(){super(),this.headroomController=new tb(this),this.titleController=new nb(this)}updated(t){super.updated(t),t.has("manga")&&this.manga&&requestAnimationFrame(()=>{this.manga&&this.titleController.observe(this.mangaTitleElement,this.manga?.title??"Manga Online Viewer")})}render(){if(!this.manga)return re``;const{headroom:t,headerVisible:r}=this.headroomController,i=Y("keybinds"),a=s=>{if(he("device")!=="desktop")return ze;const l=i[s];return!l||l.length===0?ze:l.map(u=>re`<kbd slot="details">${u}</kbd>`)};return re`
      <toggle-button
        id="menu"
        mode="burger"
        class="${yt({[Y("header")]:!0,hide:["top","end"].includes(t)})}"
        ?active=${r}
        @toggle=${this.headroomController.toggleHeaderVisibility}
      >
      </toggle-button>
      <header
        id="Header"
        class="${yt({[Y("header")]:!0,[`headroom-${t}`]:!0,visible:r&&["hide","none"].includes(t),[he("device")]:!0})}"
      >
        <mov-button-group
          id="Toolbar"
          class="${yt({"button-group-merged-end":["mobile","tablet"].includes(he("device"))})}"
        >
          <mov-dropdown id="FileDropdown">
            <mov-button
              slot="trigger"
              title="${q("FILE_MENU")}"
            >
              <mov-icon
                label="File"
                name="IconDotsVertical"
              ></mov-icon>
            </mov-button>
            <mov-dropdown-item
              id="settings"
              @click=${ib}
            >
              <mov-icon
                slot="icon"
                name="IconSettings"
              ></mov-icon>
              ${q("SETTINGS")} ${a("SETTINGS")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="keybindings"
              @click=${ab}
            >
              <mov-icon
                slot="icon"
                name="IconKeyboard"
              ></mov-icon>
              ${q("KEYBINDINGS")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="bookmarks"
              class="tablets"
              @click=${ob}
            >
              <mov-icon
                slot="icon"
                name="IconBookmarks"
              ></mov-icon>
              ${q("BOOKMARKS")}
            </mov-dropdown-item>
            <mov-divider></mov-divider>
            <mov-dropdown-item
              id="AutoScroll"
              class="${yt({running:he("autoScroll")})}"
              @click=${ka}
            >
              <mov-icon
                slot="icon"
                name="${he("autoScroll")?"IconPlayerPause":"IconPlayerPlay"}"
              ></mov-icon>
              ${q("SCROLL_START")} ${a("SCROLL_START")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="pageControls"
              class="tablets phones"
              @click="${a6}"
              ?selected=${Y("hidePageControls")}
            >
              <mov-icon
                slot="icon"
                name="IconListNumbers"
              ></mov-icon>
              ${q("TOGGLE_CONTROLS")}
            </mov-dropdown-item>
          </mov-dropdown>

          <mov-dropdown
            id="ViewDropdown"
            checkable
          >
            <mov-button
              slot="trigger"
              title="${q("VIEW_MENU")}"
            >
              <mov-icon
                label="View"
                name="IconApiBook"
              ></mov-icon>
            </mov-button>
            <mov-dropdown-item
              id="webComic"
              class="tablets"
              @click="${fn("WebComic")}"
              ?selected=${Y("viewMode")==="WebComic"}
            >
              <mov-icon
                slot="icon"
                name="IconSpacingVertical"
              ></mov-icon>
              ${q("VIEW_MODE_WEBCOMIC")} ${a("VIEW_MODE_WEBCOMIC")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="verticalMode"
              class="tablets"
              @click="${fn("Vertical")}"
              ?selected=${Y("viewMode")==="Vertical"}
            >
              <mov-icon
                slot="icon"
                name="IconArrowAutofitDown"
              ></mov-icon>
              ${q("VIEW_MODE_VERTICAL")} ${a("VIEW_MODE_VERTICAL")}
            </mov-dropdown-item>
            <mov-divider></mov-divider>
            <mov-dropdown-item
              id="ltrMode"
              @click="${fn("FluidLTR")}"
              ?selected=${Y("viewMode")==="FluidLTR"}
            >
              <mov-icon
                slot="icon"
                name="IconArrowAutofitRight"
              ></mov-icon>
              ${q("VIEW_MODE_LEFT")} ${a("VIEW_MODE_LEFT")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="rtlMode"
              @click="${fn("FluidRTL")}"
              ?selected=${Y("viewMode")==="FluidRTL"}
            >
              <mov-icon
                slot="icon"
                name="IconArrowAutofitLeft"
              ></mov-icon>
              ${q("VIEW_MODE_RIGHT")} ${a("VIEW_MODE_RIGHT")}
            </mov-dropdown-item>
            <mov-divider></mov-divider>
            <mov-dropdown-item
              id="BookMode"
              @click="${fn("Book")}"
              ?selected=${Y("viewMode")==="Book"}
            >
              <mov-icon
                slot="icon"
                name="IconBookArrowRight"
              ></mov-icon>
              ${q("VIEW_MODE_BOOK")} ${a("VIEW_MODE_BOOK")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="MangaMode"
              @click="${fn("Manga")}"
              ?selected=${Y("viewMode")==="Manga"}
            >
              <mov-icon
                slot="icon"
                name="IconBookArrowLeft"
              ></mov-icon>
              ${q("VIEW_MODE_MANGA")} ${a("VIEW_MODE_MANGA")}
            </mov-dropdown-item>
            <mov-divider></mov-divider>
            <mov-dropdown-item
              id="GalleryMode"
              @click="${fn("Gallery")}"
              ?selected=${Y("viewMode")==="Gallery"}
            >
              <mov-icon
                slot="icon"
                name="IconLayoutDashboard"
              ></mov-icon>
              ${q("VIEW_MODE_GALLERY")} ${a("VIEW_MODE_GALLERY")}
            </mov-dropdown-item>
          </mov-dropdown>
          <mov-dropdown
            id="ZoomDropdown"
            checkable
          >
            <mov-button
              slot="trigger"
              title="${q("ZOOM_MENU")}"
            >
              <mov-icon
                label="Zoom"
                name="IconZoom"
              ></mov-icon>
            </mov-button>
            <mov-dropdown-item
              id="enlarge"
              @click="${Sa()}"
            >
              <mov-icon
                slot="icon"
                name="IconZoomInArea"
              ></mov-icon>
              ${q("ENLARGE")} ${a("ENLARGE")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="restore"
              @click="${Mo("percent",100)}"
            >
              <mov-icon
                slot="icon"
                name="IconZoomPan"
              ></mov-icon>
              ${q("RESTORE")} ${a("RESTORE")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="reduce"
              @click="${Sa(-1)}"
            >
              <mov-icon
                slot="icon"
                name="IconZoomOutArea"
              ></mov-icon>
              ${q("REDUCE")} ${a("REDUCE")}
            </mov-dropdown-item>
            <mov-divider></mov-divider>
            <mov-dropdown-item
              id="fitWidth"
              @click="${Mo("width")}"
              ?selected=${Y("zoomMode")==="width"}
            >
              <mov-icon
                slot="icon"
                name="IconArrowAutofitWidth"
              ></mov-icon>
              ${q("FIT_WIDTH")} ${a("FIT_WIDTH")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="fitHeight"
              @click="${Mo("height")}"
              ?selected=${Y("zoomMode")==="height"}
            >
              <mov-icon
                slot="icon"
                name="IconArrowAutofitHeight"
              ></mov-icon>
              ${q("FIT_HEIGHT")} ${a("FIT_HEIGHT")}
            </mov-dropdown-item>
          </mov-dropdown>
        </mov-button-group>
        <mov-button-group
          id="GlobalFunctions"
          class="${yt({"button-group-merged-start":["mobile","tablet"].includes(he("device"))})}"
        >
          <mov-button
            id="series"
            href="${this.manga.series??ze}"
            @click=${ui}
            title="${q("RETURN_CHAPTER_LIST")}"
            ?disabled=${!this.manga.series}
          >
            <mov-icon name="IconBooksReturn"></mov-icon>
          </mov-button>
          <mov-button
            id="download"
            title="${q("DOWNLOAD_ZIP")}"
            @click=${O0}
            ?disabled=${he("download")!=="available"}
            ?loading=${he("download")==="working"}
          >
            <mov-icon
              name="${he("download")==="working"?"IconLoader2":"IconFileDownload"}"
            ></mov-icon>
          </mov-button>
          <mov-button
            id="prev"
            href="${this.manga.prev??ze}"
            title="${q("PREVIOUS_CHAPTER")}"
            @click=${ui}
            ?disabled=${!this.manga.prev}
          >
            <mov-icon name="IconArrowBigLeft"></mov-icon>
          </mov-button>
          <mov-button
            id="next"
            href="${this.manga.next??ze}"
            title="${q("NEXT_CHAPTER")}"
            @click=${ui}
            ?disabled=${!this.manga.next}
          >
            <mov-icon name="IconArrowBigRight"></mov-icon>
          </mov-button>
        </mov-button-group>
        <div id="ViewerTitle">
          <h1
            id="MangaTitle"
            title="${this.manga.title}"
          >
            ${this.titleController.value??this.manga.title}
          </h1>
        </div>
        <div id="ZoomControl">
          <output id="ZoomVal">
            Zoom:
            ${Y("zoomMode")==="percent"?`${Y("zoomValue")}%`:Y("zoomMode")}
          </output>
          <mov-slider
            id="Zoom"
            name="Zoom"
            .value="${Y("zoomValue")}"
            min="${Y("minZoom")}"
            max="200"
            show-tooltip
            @input=${W6}
          ></mov-slider>
        </div>
      </header>
    `}};$([Qn("#MangaTitle")],Ma.prototype,"mangaTitleElement",void 0),$([j({type:Object})],Ma.prototype,"manga",void 0),Ma=$([rt("reader-header"),(0,xo.useStores)(It,co,Jt)],Ma);var db="#BookmarksPanel{text-align:center;--width:100vw}#BookmarksList{flex-direction:column;gap:5px;max-height:60vh;padding:0 5px;display:flex;overflow:auto}.bookmark-item{text-align:left;border-radius:5px;align-items:center;gap:1rem;padding:.75rem 1rem;transition:background-color .15s ease-in-out;display:flex}.bookmark-item:hover{background-color:var(--mov-color-fill-quiet,#8080801a)}.bookmark-info{flex-grow:1;min-width:0}.bookmark-name{font-weight:500}.bookmark-url{white-space:nowrap;text-overflow:ellipsis;color:color-mix(in oklab, var(--theme-body-text-color), transparent 30%);font-size:14px;text-decoration:none;display:block;overflow:hidden}.bookmark-url:hover{text-decoration:underline}.bookmark-details{text-align:right;width:90px;color:color-mix(in oklab, var(--theme-body-text-color), transparent 30%);flex-shrink:0;font-size:14px}.bookmark-details>div{padding:2px 0}.bookmark-actions{flex-shrink:0;gap:.5rem;display:flex}",Y0=class extends Xe{static{this.styles=[ke(db)]}listBookmarks(){return _s(Y("bookmarks"))?[q("LIST_EMPTY")]:Y("bookmarks").map((t,r)=>re`
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
              @click=${rb}
            >
              <mov-icon
                name="IconTrash"
                size="16px"
              ></mov-icon>
            </mov-button>
          </div>
        </div>
      `)}render(){return re`
      <mov-dialog
        id="BookmarksPanel"
        ?open=${he("panel")==="bookmarks"}
        light-dismiss
        @close=${Rl}
      >
        <mov-button
          class="Bookmark"
          title="${q("BOOKMARK")}"
          @click=${q0}
          slot="header-actions"
        >
          <mov-icon
            name="${ho()===void 0?"IconBookmark":"IconBookmarkOff"}"
            size="24px"
          ></mov-icon>
        </mov-button>
        <h2 slot="header">${q("BOOKMARKS")}</h2>
        <h2 slot="label">${q("BOOKMARKS")}</h2>
        <div id="BookmarksList">${this.listBookmarks()}</div>
      </mov-dialog>
    `}};Y0=$([rt("bookmark-panel"),(0,xo.useStores)(It,co,Jt)],Y0);function*ub(e,t){const r=typeof t=="function";if(e!==void 0){let i=-1;for(const a of e)i>-1&&(yield r?t(i):t),i++,yield a}}var hb="#KeybindingsPanel div{line-height:1.5em}#KeybindingsPanel #KeybindingsList{grid-template-columns:1fr 2fr;gap:5px;display:grid}#KeybindingsPanel .ControlButton{justify-content:center;align-items:center;gap:.5em;margin-left:3px;padding:5px 10px}#KeybindingsPanel label{display:ruby}#KeybindingsPanel input{width:100%;display:inline-block}#KeybindingsPanel #HotKeysRules{grid-column:span 2}",X0=class extends Xe{constructor(...t){super(...t),this.keybindsRefs=xe.default.keys(Y("keybinds")).reduce((r,i)=>(r[i]=Ts(),r),{})}static{this.styles=[ke(hb),ke(V0)]}keybindList(){const t=Y("keybinds");return xe.default.keys(t).map(r=>{const i=t[r]?.length?ub(t[r]?.map(a=>re`<kbd class="dark">${a}</kbd>`)," / "):"";return re`<span>${q(r)}:</span> <span>${i}</span>`})}keybindEditor(){const t=Y("keybinds");return xe.default.keys(t).map(r=>re`<label for="${r}">${q(r)}:</label>
          <input
            type="text"
            class="KeybindInput"
            id="${r}"
            name="${r}"
            value="${t[r]?.join(" , ")??ze}"
            ${Rs(this.keybindsRefs[r])}
          />`)}render(){return re`
      <mov-drawer
        id="KeybindingsPanel"
        ?open=${he("panel").startsWith("keybindings")}
        placement="end"
        @close=${Rl}
      >
        <h2 slot="label">${q("KEYBINDINGS")}</h2>
        <div
          class="controls"
          slot="header-actions"
        >
          ${he("panel")==="keybindingsEditor"?re` <mov-button
                id="SaveKeybindings"
                type="button"
                title="${q("SAVE_KEYBINDS")}"
                @click=${()=>sb(this.keybindsRefs)}
              >
                <mov-icon
                  name="IconDeviceFloppy"
                  size="16px"
                  slot="start"
                ></mov-icon>
                ${q("BUTTON_SAVE")}
              </mov-button>`:re` <mov-button
                id="EditKeybindings"
                type="button"
                title="${q("EDIT_KEYBINDS")}"
                @click=${lb}
              >
                <mov-icon
                  name="IconPencil"
                  size="16px"
                  slot="start"
                ></mov-icon>
                ${q("BUTTON_EDIT")}
              </mov-button>`}
        </div>
        <div id="KeybindingsList">
          ${he("panel")==="keybindingsEditor"?this.keybindEditor():this.keybindList()}
        </div>
        <div id="HotKeysRules">${Bd(q("KEYBIND_RULES"))}</div>
      </mov-drawer>
    `}};X0=$([rt("keybindings-panel"),(0,xo.useStores)(It,co,Jt)],X0);function*fb(e,t){if(e!==void 0){let r=0;for(const i of e)yield t(i,r++)}}function xa(e,t=1){return Array(e).fill(0).map((r,i)=>i+1).filter(r=>r>=t)}function Ia(e){const t=e.replace(/[\t\n\r]/gim,"").replace(/\s\s+/g," ");return`data:image/svg+xml;charset=UTF-8,${encodeURIComponent(t).replace(/\(/g,"%28").replace(/\)/g,"%29")}`}var UA=xe.default.values(xt).map(e=>e[900]);function J0(e){e.deltaY&&(e.currentTarget.scrollLeft+=e.deltaY+e.deltaX,e.preventDefault())}function pb(e){e.deltaY&&(e.currentTarget.scrollLeft-=e.deltaY-e.deltaX,e.preventDefault())}var gb=":host{--nav-collapsed-size:34px;--nav-expanded-size:200px;--header-height:80px}#Navigation{color:var(--theme-text-color);background-color:var(--theme-hightlight-color);box-sizing:border-box;white-space:nowrap;text-align:center;z-index:1000;gap:5px;line-height:0;transition:all .3s;display:flex;position:fixed;overflow:hidden}#Thumbnails{flex-grow:1;justify-content:flex-start;gap:5px;display:flex}#Navigation.horizontal #Thumbnails{flex-direction:row;overflow:auto hidden}#Navigation.vertical #Thumbnails{flex-direction:column;justify-content:flex-start;overflow:hidden auto}#Navigation.left #Thumbnails{direction:rtl}:host(:not([forceExpanded])) #Navigation:not(:hover) #Thumbnails{display:none}#NavigationCounters{text-align:center;white-space:nowrap;flex-shrink:0;justify-content:center;align-items:center;gap:.5rem;padding:5px;line-height:1rem;display:flex}#Navigation.horizontal{height:var(--nav-collapsed-size);flex-direction:column;width:100%;left:0;right:0}:host([forceExpanded]) #Navigation.horizontal,#Navigation.horizontal:hover{height:var(--nav-expanded-size)}#Navigation.bottom{bottom:0}#Navigation.vertical{width:var(--nav-collapsed-size);flex-direction:row;height:100%;transition:top .3s,height .3s,width .3s;bottom:0}:host([forceExpanded]) #Navigation.vertical,#Navigation.vertical:hover{width:var(--nav-expanded-size)}#Navigation.left{flex-direction:row-reverse;left:0}#Navigation.right{right:0}#Navigation.vertical #NavigationCounters{writing-mode:vertical-rl;transform:rotate(180deg)}#Navigation.right #NavigationCounters{transform:rotate(0)}#Navigation.vertical.header{top:var(--header-height);height:calc(100% - var(--header-height))}#Navigation .Thumbnail{justify-content:center;align-items:center;width:150px;height:150px;margin:0 5px;display:inline-flex;position:relative}.ThumbnailIndex{color:var(--mov-color-on-loud);background-color:var(--mov-color-fill-loud);opacity:.9;text-align:center;z-index:1;width:100%;font-weight:600;line-height:1.2rem;display:block;position:absolute;bottom:30%;left:0}.ThumbnailImg{cursor:pointer;background-position:50%;background-repeat:no-repeat;background-size:48px 48px;min-width:80px;max-width:150px;min-height:150px;max-height:150px;display:inline-block}",bi=class extends Xe{constructor(...t){super(...t),this.mode="bottom",this.forceExpanded=!1,this.isHiding=!1}static{this.styles=[ke(gb),_t`
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
        background-image: url('${ke(Ia(Hs))}');
      }

      .Thumbnail .ThumbnailImg.imgBroken {
        background-image: url('${ke(Ia(Fs))}');
      }
    `]}willUpdate(t){t.has("mode")&&(this.isHiding=!0)}updated(t){t.has("mode")&&this.isHiding&&setTimeout(()=>{this.isHiding=!1},50)}render(){if(this.mode==="disabled")return ze;const t=he("manga"),r={horizontal:this.mode==="bottom",vertical:this.mode!=="bottom",left:this.mode==="left",right:this.mode==="right",bottom:this.mode==="bottom",hiding:this.isHiding},i=he("images")||{},a=xe.default.keys(i).filter(s=>{const l=parseInt(s,10);return l>=(t?.begin??1)&&l<=(t?.pages??1)&&i[l]?.status==="loaded"}).length;return re`
      <nav
        id="Navigation"
        class="${yt(r)}"
      >
        <div
          id="NavigationCounters"
          class="ControlLabel"
        >
          ${P3}
          <i>${a}</i> /
          <b> ${(t?.pages??1)-((t?.begin??1)-1)} </b>
          ${q("PAGES_LOADED")}
          <span>: ${he("currentPage")}</span>
        </div>
        <div
          id="Thumbnails"
          @wheel=${this.mode==="bottom"?J0:null}
        >
          ${fb(xa(t?.pages??1,t?.begin??1),s=>re` <figure
                id="Thumbnail${s}"
                class="Thumbnail"
                role="button"
                tabindex="0"
                title="Go to page ${s}"
                @click=${()=>c6(s)}
              >
                <img
                  id="ThumbnailImg${s}"
                  alt=""
                  class="ThumbnailImg"
                  src=${he("images")?.[s]?.src??ze}
                />
                <figcaption class="ThumbnailIndex">${s}</figcaption>
              </figure>`)}
        </div>
      </nav>
    `}};$([j({type:String})],bi.prototype,"mode",void 0),$([j({type:Boolean})],bi.prototype,"forceExpanded",void 0),$([Dt()],bi.prototype,"isHiding",void 0),bi=$([rt("navbar-thumbnails"),(0,xo.useStores)(It,co,Jt)],bi);function mb(){const e=Wr()?"true":"false";return re` <div class="ControlLabel">
    ${q("SCOPE")}
    <segmented-control
      .value=${e}
      @change=${S6}
    >
      <segmented-control-option
        value="false"
        label=${q("GLOBAL")}
        icon="IconWorldCog"
      ></segmented-control-option>
      <segmented-control-option
        value="true"
        label=${window.location.hostname}
        icon="IconLocationCog"
      ></segmented-control-option>
    </segmented-control>
  </div>`}function vb(){return so.map(e=>re`
      <option
        value="${e.ID}"
        ?selected=${Y("locale")===e.ID}
      >
        ${e.NAME}
      </option>
    `)}function bb(){return re` <div class="ControlLabel locale">
    ${q("LANGUAGE")}
    <select
      id="locale"
      @change="${A6}"
    >
      ${vb()}
    </select>
  </div>`}var wb=()=>re`${mb()} ${bb()}`;function _b(){return re`
    <div class="ControlLabel loadMode">
      ${q("DEFAULT_LOAD_MODE")}
      <select
        id="loadMode"
        @change="${M6}"
      >
        <option
          value="wait"
          ?selected=${Y("loadMode")==="wait"}
        >
          ${q("LOAD_MODE_NORMAL")}
        </option>
        <option
          value="always"
          ?selected=${Y("loadMode")==="always"}
        >
          ${q("LOAD_MODE_ALWAYS")}
        </option>
        <option
          value="never"
          ?selected=${Y("loadMode")==="never"}
        >
          ${q("LOAD_MODE_NEVER")}
        </option>
      </select>
    </div>
  `}function yb(){return re`
    <div class="ControlLabel PagesPerSecond">
      ${q("LOAD_SPEED")}
      <select
        id="PagesPerSecond"
        @change="${R6}"
      >
        <option
          value="Safe"
          ?selected=${Y("loadSpeed")==="Safe"}
        >
          ${q("SLOWLY")} (Safe)
        </option>
        <option
          value="Standard"
          ?selected=${Y("loadSpeed")==="Standard"}
        >
          ${q("NORMAL")} (Standard)
        </option>
        <option
          value="Faster"
          ?selected=${Y("loadSpeed")==="Faster"}
        >
          ${q("FAST")} (Faster)
        </option>
        <option
          value="Extreme"
          ?selected=${Y("loadSpeed")==="Extreme"}
        >
          ${q("EXTREME")} (Extreme)
        </option>
        <option
          value="All"
          ?selected=${Y("loadSpeed")==="All"}
        >
          ${q("ALL_PAGES")} (All)
        </option>
      </select>
    </div>
  `}var kb=()=>re`${_b()} ${yb()}`;function Eb(){return re`
    <div class="ControlLabel fitIfOversize">
      ${q("FIT_WIDTH_OVERSIZED")}
      <mov-switch
        name="fitIfOversize"
        ?checked=${Y("fitWidthIfOversize")}
        @change=${x6}
      ></mov-switch>
    </div>
    <div class="ControlLabel downloadZip">
      ${q("DOWNLOAD_IMAGES")}
      <mov-switch
        name="downloadZip"
        ?checked=${Y("downloadZip")}
        @change=${O6}
      ></mov-switch>
    </div>
    <div class="ControlLabel hidePageControls">
      ${q("HIDE_CONTROLS")}
      <mov-switch
        name="hidePageControls"
        ?checked=${Y("hidePageControls")}
        @change=${D6}
      ></mov-switch>
    </div>
    <div class="ControlLabel lazyLoadImages">
      ${q("LAZY_LOAD_IMAGES_ENABLE")}
      <mov-switch
        name="lazyLoadImages"
        ?checked=${Y("lazyLoadImages")}
        @change=${T6}
      ></mov-switch>
    </div>
  `}function Sb(){return re`
    <div
      class="${yt({ControlLabel:!0,lazyStart:!0,ControlLabelItem:!0,show:Y("lazyLoadImages")})}"
    >
      <span>
        ${q("LAZY_LOAD_IMAGES")}
        <output
          id="lazyStartVal"
          class="RangeValue"
          for="lazyStart"
        >
          ${Y("lazyStart")}
        </output>
      </span>
      <mov-slider
        name="lazyStart"
        id="lazyStart"
        .value="${Y("lazyStart")}"
        min="5"
        max="100"
        step="5"
        show-tooltip
        show-ticks
        tick-count="3"
        @input="${L6}"
      ></mov-slider>
    </div>
  `}function Ab(){return re`
    <div class="ControlLabel headerType">
      ${q("HEADER_TYPE")}
      <segmented-control
        .value=${Y("header")}
        @change=${z6}
        labelPosition="bottom"
      >
        <segmented-control-option
          value="hover"
          label=${q("HEADER_HOVER")}
          icon="arrows-move"
        ></segmented-control-option>
        <segmented-control-option
          value="scroll"
          label=${q("HEADER_SCROLL")}
          icon="arrows-vertical"
        ></segmented-control-option>
        <segmented-control-option
          value="click"
          label=${q("HEADER_CLICK")}
          icon="hand-click"
        ></segmented-control-option>
        <segmented-control-option
          value="fixed"
          label=${q("HEADER_FIXED")}
          icon="pin"
        ></segmented-control-option>
        <segmented-control-option
          value="simple"
          label=${q("HEADER_SIMPLE")}
          icon="box-align-top"
        ></segmented-control-option>
      </segmented-control>
    </div>
  `}function Mb(){return re`
    <div class="ControlLabel pagination">
      ${q("PAGINATION_TYPE")}
      <segmented-control
        .value=${Y("pagination")}
        @change=${C6}
        labelPosition="side"
      >
        <segmented-control-option
          value="disabled"
          label=${q("PAGINATION_DISABLED")}
          icon="x"
        ></segmented-control-option>
        <segmented-control-option
          value="slider"
          label=${q("PAGINATION_SLIDER")}
          icon="adjustments-horizontal"
        ></segmented-control-option>
        <segmented-control-option
          value="side-arrows"
          label=${q("PAGINATION_ARROWS")}
          icon="arrows-left-right"
        ></segmented-control-option>
        <segmented-control-option
          value="both"
          label=${q("PAGINATION_BOTH")}
          icon="arrows-horizontal"
        ></segmented-control-option>
      </segmented-control>
    </div>
  `}function xb(){return re`
    <div class="ControlLabel navbarType">
      ${q("NAVBAR_TYPE")}
      <segmented-control
        .value=${Y("navbar")}
        @change=${I6}
        labelPosition="tooltip"
      >
        <segmented-control-option
          value="bottom"
          label=${q("NAVBAR_BOTTOM")}
          icon="layout-bottombar"
        ></segmented-control-option>
        <segmented-control-option
          value="left"
          label=${q("NAVBAR_LEFT")}
          icon="layout-sidebar"
        ></segmented-control-option>
        <segmented-control-option
          value="right"
          label=${q("NAVBAR_RIGHT")}
          icon="layout-sidebar-right"
        ></segmented-control-option>
        <segmented-control-option
          value="disabled"
          label=${q("NAVBAR_DISABLED")}
          icon="x"
        ></segmented-control-option>
      </segmented-control>
    </div>
  `}function Ib(){return re`
    <div class="ControlLabel autoScroll">
      <span>
        ${q("AUTO_SCROLL_HEIGHT")}
        <output
          id="scrollHeightVal"
          class="RangeValue"
          for="scrollHeight"
        >
          ${Y("scrollHeight")}px
        </output>
      </span>
      <mov-slider
        name="scrollHeight"
        id="scrollHeight"
        .value="${Y("scrollHeight")}"
        min="1"
        max="${Math.ceil(window.innerHeight/200)*100}"
        step="1"
        show-tooltip
        show-ticks
        tick-count="5"
        @input="${B6}"
      ></mov-slider>
    </div>
  `}var Cb=()=>re`${Eb()} ${Mb()} ${Sb()} ${Ab()} ${xb()} ${Ib()}`;function Ob(){const e=Y("colorScheme")==="dark";St("colorScheme",e?"light":"dark"),document.documentElement.classList.remove(e?"dark":"light"),document.documentElement.classList.add(Y("colorScheme"))}function Ca(e){St("theme",e instanceof CustomEvent?e.detail.value:e.currentTarget.value)}function Tb(){return re`
    <div class="ControlLabel ColorSchemeSelector">
      <label>${q("COLOR_SCHEME")}</label>
      <toggle-button
        id="ColorScheme"
        mode="theme"
        @click=${Ob}
        ?active=${Y("colorScheme")==="dark"}
      >
      </toggle-button>
    </div>
    <div class="ControlLabel ThemeSelector">
      <label>${q("THEME_COLOR")}</label>
      <mov-color-picker
        id="ThemeHex"
        .value="${Y("theme")}"
        title="${Y("theme")}"
        @input=${Ca}
        .swatches=${xe.default.values(Sl)}
      ></mov-color-picker>
    </div>
    <color-palette
      .baseColor="${Y("theme")}"
      mode="steps"
      .selected=${Y("theme")}
      @change="${Ca}"
    ></color-palette>
    <span id="ColorRecommendations">
      ${xe.default.values(Sl).map(e=>re`<color-swatch
            .color="${e}"
            .selected=${Y("theme")}
            @change=${Ca}
          ></color-swatch>`)}
    </span>
    <details class="ControlLabel">
      <summary>${q("THEME_HUE")} & ${q("THEME_SHADE")}</summary>
      <color-panel
        .selected=${Y("theme")}
        @change=${Ca}
      ></color-panel>
    </details>
  `}function Lb(){return re` <div class="ControlLabel DefaultZoomMode">
    ${q("DEFAULT_ZOOM_MODE")}
    <segmented-control
      .value=${Y("zoomMode")}
      @change=${F6}
      labelPosition="tooltip"
    >
      <segmented-control-option
        value="percent"
        label=${q("PERCENT")}
        icon="file-percent"
      ></segmented-control-option>
      <segmented-control-option
        value="width"
        label=${q("FIT_WIDTH")}
        icon="arrow-autofit-width"
      ></segmented-control-option>
      <segmented-control-option
        value="height"
        label=${q("FIT_HEIGHT")}
        icon="arrow-autofit-height"
      ></segmented-control-option>
    </segmented-control>
  </div>`}function Rb(){return re`
    <div
      class="${yt({ControlLabel:!0,zoomValue:!0,ControlLabelItem:!0,show:Y("zoomMode")==="percent"})}"
    >
      <span>
        ${q("DEFAULT_ZOOM")}
        <output
          id="zoomValueVal"
          class="RangeValue"
          for="zoomValue"
        >
          ${Y("zoomValue")}%
        </output>
      </span>
      <mov-slider
        name="zoomValue"
        id="zoomValue"
        .value="${Y("zoomValue")}"
        min="5"
        max="200"
        step="5"
        show-tooltip
        show-ticks
        tick-count="5"
        @input="${G6}"
      ></mov-slider>
    </div>
  `}function Pb(){return re`
    <div class="ControlLabel minZoom">
      <span>
        ${q("MINIMUM_ZOOM")}
        <output
          id="minZoomVal"
          class="RangeValue"
          for="minZoom"
        >
          ${Y("minZoom")}%
        </output>
      </span>
      <mov-slider
        name="minZoom"
        id="minZoom"
        .value="${Y("minZoom")}"
        min="25"
        max="100"
        step="5"
        show-tooltip
        show-ticks
        tick-count="4"
        @input="${$6}"
      ></mov-slider>
    </div>
  `}function $b(){return re`
    <div class="ControlLabel zoomStep">
      <span>
        ${q("ZOOM_STEP")}
        <output
          id="zoomStepVal"
          class="RangeValue"
          for="zoomStep"
        >
          ${Y("zoomStep")}%
        </output>
      </span>
      <mov-slider
        name="zoomStep"
        id="zoomStep"
        .value="${Y("zoomStep")}"
        min="10"
        max="50"
        step="5"
        show-tooltip
        show-ticks
        tick-count="5"
        @input="${P6}"
      ></mov-slider>
    </div>
  `}function Db(){return re`
    <div class="ControlLabel viewMode">
      ${q("DEFAULT_VIEW_MODE")}
      <segmented-control
        .value=${Y("viewMode")}
        @change=${U6}
        labelPosition="tooltip"
      >
        <segmented-control-option
          value="Vertical"
          label=${q("VIEW_MODE_VERTICAL")}
          icon="arrow-autofit-down"
        ></segmented-control-option>
        <segmented-control-option
          value="WebComic"
          label=${q("VIEW_MODE_WEBCOMIC")}
          icon="spacing-vertical"
        ></segmented-control-option>
        <segmented-control-option
          value="FluidLTR"
          label=${q("VIEW_MODE_LEFT")}
          icon="arrow-autofit-right"
        ></segmented-control-option>
        <segmented-control-option
          value="FluidRTL"
          label=${q("VIEW_MODE_RIGHT")}
          icon="arrow-autofit-left"
        ></segmented-control-option>
        <segmented-control-option
            value="Book"
            label=${q("VIEW_MODE_BOOK")}
            icon="IconBookArrowRight"
        ></segmented-control-option>
        <segmented-control-option
            value="Manga"
            label=${q("VIEW_MODE_MANGA")}
            icon="IconBookArrowLeft"
        ></segmented-control-option>
        <segmented-control-option
            value="Gallery"
            label=${q("VIEW_MODE_GALLERY")}
            icon="IconLayoutDashboard"
        ></segmented-control-option>
      </segmented-control>
    </div>
  `}var zb=()=>re`${Lb()} ${Rb()} ${Pb()} ${$b()} ${Db()}`,Bb="#SettingsPanel{color:var(--theme-text-color)}#SettingsPanel fieldset{border:1px solid var(--theme-body-text-color);border-radius:10px;padding:3px}#SettingsPanel .ControlLabel{flex-flow:wrap;justify-content:space-between;align-items:center;padding:2px;display:flex}#SettingsPanel .ControlLabelItem{justify-content:space-between;align-items:center;display:flex}#SettingsPanel .ControlLabelItem:not(.show){display:none}#SettingsPanel input[type=range]{width:100%}#SettingsPanel .RangeValue{color:var(--mov-color-on-loud);text-align:center;background:var(--mov-color-fill-loud);border-radius:3px;margin-left:8px;padding:2px 5px;line-height:20px;display:inline-block}#SettingsPanel datalist{flex-direction:row;justify-content:space-between;width:100%;display:flex}#SettingsPanel datalist option{writing-mode:vertical-lr;padding:0}#ThemeSelector{width:110px}#ColorRecommendations{flex-flow:wrap;gap:2px;display:flex}#Chapter:not(.Vertical)~#SettingsPanel .verticalSeparator{display:none}#ColorScheme{min-width:28px;min-height:28px;padding:5px}#ResetSettings,#ResetSettings::part(base){width:100%}",Q0=class extends Xe{static{this.styles=[_t`
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
    `,ke(Bb)]}render(){return re`
      <mov-drawer
        id="SettingsPanel"
        ?open=${he("panel")==="settings"}
        @close=${Rl}
        placement="start"
        class="${he("device")}"
      >
        <h2 slot="label">${q("SETTINGS")}</h2>
        <mov-button
          id="ResetSettings"
          @click="${Av}"
          title="${q("BUTTON_RESET_SETTINGS")}"
        >
          <mov-icon
            name="IconSettingsOff"
            size="20px"
            slot="start"
          ></mov-icon>
          ${q("BUTTON_RESET_SETTINGS")}
        </mov-button>
        <div class="content">
          <fieldset id="SettingsPanelGeneral">
            <legend>${q("GENERAL")}</legend>
            ${wb()}
          </fieldset>
          <fieldset id="SettingsPanelTheme">
            <legend>${q("THEME")}</legend>
            ${Tb()}
          </fieldset>
          <fieldset id="SettingsPanelLoading">
            <legend>${q("LOADING")}</legend>
            ${kb()}
          </fieldset>
          <fieldset id="SettingsPanelZoom">
            <legend>${q("ZOOM")}</legend>
            ${zb()}
          </fieldset>
          <fieldset id="SettingsPanelOthers">
            <legend>${q("OTHERS")}</legend>
            ${Cb()}
          </fieldset>
        </div>
      </mov-drawer>
    `}};Q0=$([rt("settings-panel"),(0,xo.useStores)(It,co,Jt)],Q0);function Nb(e){return new Promise(function(t,r){var i=new FileReader,a=typeof i.readAsBinaryString=="function";i.onloadend=function(){var s=i.result||"";if(a)return t(s);t(Gb(s))},i.onerror=r,a?i.readAsBinaryString(e):i.readAsArrayBuffer(e)})}function Hb(e){return Nb(e).then(btoa)}function Fb(e){return Hb(e).then(function(t){return"data:"+e.type+";base64,"+t})}function Gb(e){for(var t="",r=new Uint8Array(e),i=r.byteLength,a=-1;++a<i;)t+=String.fromCharCode(r[a]);return t}async function Wb(e,t){Ae("Fetching page: ",e);try{const r=await(await fetch(e)).text();return new DOMParser().parseFromString(r,t)}catch(r){throw Ae("Failed to fetch page: ",r),r}}async function Ub(e){return Wb(e,"text/html")}async function Vb(e,t,r){try{return(await Ub(e)).querySelector(t)?.getAttribute(r)}catch(i){return Ae("Failed to get element attribute: ",i),null}}var Zb=class{constructor(e,t){this.queue=[],this.activeCount=0,this.lastRunTime=0;const r={Safe:{concurrency:5,delay:1e3},Standard:{concurrency:5,delay:500},Faster:{concurrency:10,delay:500},Extreme:{concurrency:10,delay:250},All:{concurrency:20,delay:50}}[e];this.maxConcurrency=r.concurrency,this.minDelay=t??r.delay}add(e){this.queue.push(e),this.runNext()}async runNext(){if(this.activeCount>=this.maxConcurrency||this.queue.length===0)return;const e=Date.now()-this.lastRunTime;if(e<this.minDelay){setTimeout(()=>this.runNext(),this.minDelay-e);return}const t=this.queue.shift();if(t){this.activeCount+=1,this.lastRunTime=Date.now();try{await t()}finally{this.activeCount-=1,this.runNext()}}}},Pl;function jb(e){if(e){let t=e.trim();return t.startsWith("//")&&(t=`https:${t}`),t}return""}async function Oa(e,t,r){const i=he("images")?.[t];i?.status&&i.status!=="pending"||($n(t,()=>({status:"loading"})),Pl.add(async()=>{let a=jb(r),s,l="loaded";try{const u=await fetch(a,e.fetchOptions);u.ok?(s=await u.blob(),a=await Fb(s)):l="error"}catch(u){Ae("Failed to fetch image",u),l="error"}$n(t,()=>({src:a,blob:s,status:l})),kn("Loaded Image:",t,"Source:",a)}),e.pages===t&&j0())}async function eh(e,t,r){const i=he("images")?.[t];i?.status&&i.status!=="pending"||($n(t,()=>({status:"loading"})),Pl.add(async()=>{try{const a=await Vb(r,e.img,e.lazyAttr??"src");a?($n(t,()=>({status:"pending"})),await Oa(e,t,a)):$n(t,()=>({status:"error"}))}catch(a){Ae("Failed to get page attribute",a),$n(t,()=>({status:"error"}))}}))}function th(e,t){xa(t.pages,e).filter((r,i)=>!(t.lazy??Y("lazyLoadImages"))||i<=Y("lazyStart")).forEach(r=>{eh(t,r,t.listPages[r-1])})}function nh(e,t){xa(t.pages,e).filter((r,i)=>!(t.lazy??Y("lazyLoadImages"))||i<=Y("lazyStart")).forEach(r=>{Oa(t,r,t.listImages[r-1])})}async function qb(){await ys(()=>he("manga")!==void 0);const e=he("manga"),t=e.begin??1;Pl=new Zb(Y("loadSpeed"),e.timer),kn("Loading Images"),kn(`Speed: ${Y("loadSpeed")}`),kn(`Lazy: ${e.lazy??Y("lazyLoadImages")}, Starting from: ${Y("lazyStart")}`),qr(),Xc(e)?(kn("Method: Images:",e.listImages),nh(t,e)):Jc(e)?(kn("Method: Pages:",e.listPages),th(t,e)):Kf(e)?(kn("Method: Brute Force"),e.bruteForce({begin:t,addImg:Oa,loadImages(r){nh(t,{...e,listImages:r})},loadPages(r,i,a){th(t,{...e,listPages:r,img:i,lazyAttr:a})},wait:0})):Ae("No Loading Method Found"),Jt.listen((r,i,a)=>{if(a==="currentPage"&&r.currentPage>i.currentPage)for(let s=r.currentPage;s<Math.min(r.currentPage+5,e.pages+1);s++)r.images?.[s]?.src!==void 0||r.images?.[s]?.status==="loading"||(Xc(e)?Oa(e,s,e.listImages[s-1]):Jc(e)&&eh(e,s,e.listPages[s-1]))})}function Kb(){const e=he("images");if(!e)return null;const t=Y("viewMode"),r=t==="FluidLTR"||t==="FluidRTL",i=t==="FluidRTL",a=window.innerHeight/2,s=window.innerWidth/2;let l=null;for(const u in e){const d=e[u].ref?.value;if(!d)continue;const h=d?.getBoundingClientRect();let f;r?i?f=h.right:f=h.left:f=h.top,(r?f<=s:f<=a)&&(!l||f>l.edge)&&(l={index:parseInt(u,10),edge:f})}return l?l.index:he("manga")?.begin??1}function rh(){const e=Kb();e!=null&&he("currentPage")!==e&&Pe("currentPage",e)}function Yb(){const e=xe.default.throttle(()=>{requestAnimationFrame(rh)},100);window.addEventListener("scroll",e,{passive:!0}),window.addEventListener("resize",e),he("chapter").value?.addEventListener("scroll",e,{passive:!0}),requestAnimationFrame(rh)}function oh(){if(!he("chapter").value){setTimeout(oh,50);return}Yb()}var ih=xe.default.debounce(()=>{Pe("device",Go()),qr()},200);async function Xb(){await ys(()=>he("manga")!==void 0),U0(),window.addEventListener("resize",ih),window.addEventListener("orientationchange",ih),k6(),oh()}var Jb=_n(((e,t)=>{(function(r,i){typeof define=="function"&&define.amd?define(i):typeof e=="object"?t.exports=i():r.NProgress=i()})(e,function(){var r={};r.version="0.2.0";var i=r.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};r.configure=function(g){var k,y;for(k in g)y=g[k],y!==void 0&&g.hasOwnProperty(k)&&(i[k]=y);return this},r.status=null,r.set=function(g){var k=r.isStarted();g=a(g,i.minimum,1),r.status=g===1?null:g;var y=r.render(!k),S=y.querySelector(i.barSelector),M=i.speed,T=i.easing;return y.offsetWidth,u(function(O){i.positionUsing===""&&(i.positionUsing=r.getPositioningCSS()),d(S,l(g,M,T)),g===1?(d(y,{transition:"none",opacity:1}),y.offsetWidth,setTimeout(function(){d(y,{transition:"all "+M+"ms linear",opacity:0}),setTimeout(function(){r.remove(),O()},M)},M)):setTimeout(O,M)}),this},r.isStarted=function(){return typeof r.status=="number"},r.start=function(){r.status||r.set(0);var g=function(){setTimeout(function(){r.status&&(r.trickle(),g())},i.trickleSpeed)};return i.trickle&&g(),this},r.done=function(g){return!g&&!r.status?this:r.inc(.3+.5*Math.random()).set(1)},r.inc=function(g){var k=r.status;return k?(typeof g!="number"&&(g=(1-k)*a(Math.random()*k,.1,.95)),k=a(k+g,0,.994),r.set(k)):r.start()},r.trickle=function(){return r.inc(Math.random()*i.trickleRate)},(function(){var g=0,k=0;r.promise=function(y){return!y||y.state()==="resolved"?this:(k===0&&r.start(),g++,k++,y.always(function(){k--,k===0?(g=0,r.done()):r.set((g-k)/g)}),this)}})(),r.render=function(g){if(r.isRendered())return document.getElementById("nprogress");f(document.documentElement,"nprogress-busy");var k=document.createElement("div");k.id="nprogress",k.innerHTML=i.template;var y=k.querySelector(i.barSelector),S=g?"-100":s(r.status||0),M=document.querySelector(i.parent),T;return d(y,{transition:"all 0 linear",transform:"translate3d("+S+"%,0,0)"}),i.showSpinner||(T=k.querySelector(i.spinnerSelector),T&&m(T)),M!=document.body&&f(M,"nprogress-custom-parent"),M.appendChild(k),k},r.remove=function(){b(document.documentElement,"nprogress-busy"),b(document.querySelector(i.parent),"nprogress-custom-parent");var g=document.getElementById("nprogress");g&&m(g)},r.isRendered=function(){return!!document.getElementById("nprogress")},r.getPositioningCSS=function(){var g=document.body.style,k="WebkitTransform"in g?"Webkit":"MozTransform"in g?"Moz":"msTransform"in g?"ms":"OTransform"in g?"O":"";return k+"Perspective"in g?"translate3d":k+"Transform"in g?"translate":"margin"};function a(g,k,y){return g<k?k:g>y?y:g}function s(g){return(-1+g)*100}function l(g,k,y){var S;return i.positionUsing==="translate3d"?S={transform:"translate3d("+s(g)+"%,0,0)"}:i.positionUsing==="translate"?S={transform:"translate("+s(g)+"%,0)"}:S={"margin-left":s(g)+"%"},S.transition="all "+k+"ms "+y,S}var u=(function(){var g=[];function k(){var y=g.shift();y&&y(k)}return function(y){g.push(y),g.length==1&&k()}})(),d=(function(){var g=["Webkit","O","Moz","ms"],k={};function y(O){return O.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(z,K){return K.toUpperCase()})}function S(O){var z=document.body.style;if(O in z)return O;for(var K=g.length,Z=O.charAt(0).toUpperCase()+O.slice(1),oe;K--;)if(oe=g[K]+Z,oe in z)return oe;return O}function M(O){return O=y(O),k[O]||(k[O]=S(O))}function T(O,z,K){z=M(z),O.style[z]=K}return function(O,z){var K=arguments,Z,oe;if(K.length==2)for(Z in z)oe=z[Z],oe!==void 0&&z.hasOwnProperty(Z)&&T(O,Z,oe);else T(O,K[1],K[2])}})();function h(g,k){return(typeof g=="string"?g:v(g)).indexOf(" "+k+" ")>=0}function f(g,k){var y=v(g),S=y+k;h(y,k)||(g.className=S.substring(1))}function b(g,k){var y=v(g),S;h(g,k)&&(S=y.replace(" "+k+" "," "),g.className=S.substring(1,S.length-1))}function v(g){return(" "+(g.className||"")+" ").replace(/\s+/gi," ")}function m(g){g&&g.parentNode&&g.parentNode.removeChild(g)}return r})})),Qb=Di(Jb(),1);function e9(e,t){const r=e.replace(/[?&]forceReload=\d+$/,"");return`${r+(r.includes("?")?"&":"?")}forceReload=${t}`}function t9(e){let t=1;const r=e?.match(/forceReload=(\d+)$/);return r?.at(1)&&(t=parseInt(r[1],10)+1),t}function ah(e,t){Ae(`Reloading Page ${e}`,t);const r=he("images")?.[e]?.src;if(!r)return;const i=t9(r);i>Y("maxReload")||(t?.removeAttribute("src"),m2(r)||v2(r)?t?.setAttribute("src",r):t?.setAttribute("src",e9(r,i)))}function n9(e){const t=e.currentTarget,r=parseInt(t.value,10),i=he("images")?.[r]?.ref?.value;i&&ah(r,i)}function r9(e){const t=e.currentTarget;$n(parseInt(t.value,10),r=>({hide:!r.hide}))}function o9(e){const t=e.currentTarget;$n(parseInt(t.id.replace("PageImg",""),10),u=>({...G0({naturalWidth:t.naturalWidth,naturalHeight:t.naturalHeight}),status:"loaded",doublePage:t.naturalWidth>t.naturalHeight}));const r=he("manga"),i=he("images")||{},a=xe.default.keys(i).filter(u=>{const d=parseInt(u,10);return d>=(r?.begin??1)&&d<=(r?.pages??1)&&i[d]?.status==="loaded"}).length,s=(r?.pages??1)-((r?.begin??1)-1),l=Math.floor(a/s*100);document.title=`(${l}%) ${he("manga")?.title}`,Qb.default.configure({showSpinner:!1}).set(a/s),Ae(`Progress: ${l}%`),a===s&&(Ae("Images Loading Complete"),Pe("download","available"),Y("downloadZip")&&O0())}function i9(e){const t=e.currentTarget;if(_s(t.getAttribute("src")))return;const r=parseInt(t.id.replace("PageImg",""),10);$n(r,()=>({status:"error"})),ah(r,t)}function a9(e){const t=e.currentTarget,r=parseInt(t.value,10),i=he("images"),a=he("images")?.[r];a?.naturalWidth&&Pe("images",{...i,[r]:{...a,width:(a?.width||a?.naturalWidth)*(1+Y("zoomStep")/100),height:void 0}})}function s9(e){const t=e.currentTarget,r=parseInt(t.value,10),i=he("images"),a=he("images")?.[r];a?.naturalWidth&&Pe("images",{...i,[r]:{...a,width:(a?.width||a?.naturalWidth)*(1-Y("zoomStep")/100),height:void 0}})}function l9(e){const t=e.currentTarget,r=parseInt(t.value,10),i=he("images"),a=he("images")?.[r];a&&Pe("images",{...i,[r]:{...a,width:void 0,height:void 0}})}function c9(e){const t=e.currentTarget,r=parseInt(t.value,10),i=he("images"),a=he("images")?.[r];a&&Pe("images",{...i,[r]:{...a,width:window.innerWidth+(Y("navbar")==="left"||Y("navbar")==="right"?-34:0),height:void 0}})}function d9(e){const t=e.currentTarget,r=parseInt(t.value,10),i=he("images"),a=he("images")?.[r];a&&Pe("images",{...i,[r]:{...a,width:void 0,height:window.innerHeight+(Y("navbar")==="bottom"?-34:0)}})}function u9(e){const t=he("images")?.[e],r=Y("viewMode").match(/^(Book|Manga)$/),i=Y("viewMode")==="Gallery",a=Y("viewMode").startsWith("Fluid"),s=Y("navbar")==="bottom";return{width:t?.width?`${t.width}px`:"auto",height:t?.height?`${t.height}px`:"auto","max-height":a?`${window.innerHeight+(s?-34:0)}px`:void 0,"min-width":!r&&!i?`${Y("minZoom")}vw`:void 0}}var h9=(e,t)=>xa(e,t).map(r=>{he("images")?.[r]?.ref||$n(r,d=>({ref:Ts()}));let i=0;for(let d=r-1;d>=t&&!he("images")?.[d].doublePage;d--)he("images")?.[d].doublePage||i++;const a=he("images")?.[r].doublePage??!1,s=Y("viewMode")==="Book",l=!a&&(s?i%2===0:i%2===1),u=!a&&(s?i%2===1:i%2===0);return re`
      <div
        id="Page${r}"
        class="${yt({MangaPage:!0,hide:!!he("images")?.[r].hide,DoublePage:a,LeftPage:l&&!a,RightPage:u&&!a})}"
      >
        <div class="PageFunctions">
          <button
            class="Bookmark PageButton"
            title="${q("BOOKMARK")}"
            @click=${q0}
            value="${r}"
          >
            ${ho()?R3:L3}
          </button>
          <button
            class="ZoomIn PageButton"
            title="${q("ZOOM_IN")}"
            @click=${a9}
            value="${r}"
          >
            ${H3}
          </button>
          <button
            class="ZoomRestore PageButton"
            title="${q("ZOOM_RESET")}"
            @click=${l9}
            value="${r}"
          >
            ${N3}
          </button>
          <button
            class="ZoomOut PageButton"
            title="${q("ZOOM_OUT")}"
            @click=${s9}
            value="${r}"
          >
            ${F3}
          </button>
          <button
            class="ZoomHeight PageButton"
            title="${q("ZOOM_HEIGHT")}"
            @click=${d9}
            value="${r}"
          >
            ${O3}
          </button>
          ${Y("viewMode").match(/^(Book|Manga)$/)?re`
            <button
              class="DoublePage PageButton"
              title="${q("DOUBLE_PAGE")}"
              @click=${()=>{$n(r,d=>({doublePage:!d.doublePage}))}}
              value="${r}"
            >
              ${B3}
            </button>`:re`
              <button
                class="ZoomWidth PageButton"
                title="${q("ZOOM_WIDTH")}"
                @click=${c9}
                value="${r}"
              >
                ${T3}
              </button>`}
          <button
            class="Hide PageButton"
            title="${q("HIDE")}"
            @click=${r9}
            value="${r}"
          >
            ${he("images")?.[r].hide?$3:D3}
          </button>
          <button
            class="Reload PageButton"
            title="${q("RELOAD")}"
            @click=${n9}
            value="${r}"
          >
            ${z3}
          </button>
          <span class="PageIndex">${r}</span>
        </div>
        <div class="PageContent">
          <img
            id="PageImg${r}"
            alt="Page ${r}"
            class="${yt({PageImg:!0,imgBroken:he("images")?.[r]?.status==="error"})}"
            src=${he("images")?.[r]?.src??ze}
            style="${Un(u9(r))}"
            @load=${o9}
            @error=${i9}
            ${Rs(he("images")?.[r].ref)}
          />
        </div>
      </div>
      <div class="separator">
        [ ${r===e?q("END"):`${r} / ${e}`} ]
      </div>
    `}),f9=e=>re`
  <main
    id="Chapter"
    ${Rs(he("chapter"))}
    class="${yt({fitWidthIfOversize:Y("fitWidthIfOversize"),[Y("viewMode")]:!0,separator:Y("viewMode")==="Vertical"})}"
    @wheel=${t=>{Y("viewMode")==="FluidLTR"?J0(t):Y("viewMode")==="FluidRTL"&&pb(t)}}
  >
    ${h9(e.pages,e.begin??0)}
  </main>
`,p9=":root:not(.light,.dark){--theme-body-background:#25262b;--theme-body-text-color:#c1c2c5;--theme-text-color:#c1c2c5;--theme-primary-color:#1a1b1e;--theme-primary-text-color:#c1c2c5;--theme-background-color:#25262b;--theme-hightlight-color:#2c2e33;--theme-border-color:#373a40;--theme-secondary-color:#2c2e33;--theme-secondary-text-color:#c1c2c5}:host{all:initial;box-sizing:border-box;display:block}#MangaOnlineViewer{color:var(--theme-body-text-color);background-color:var(--theme-body-background);box-sizing:border-box;--mov-font-size-m:16px;min-height:100vh;text-decoration:none}#Chapter{box-sizing:border-box;grid-template-columns:repeat(1,1fr);min-width:225px;display:grid}#Chapter.Vertical:has(+#Navigation:not(.disabled)),#Chapter.WebComic:has(+#Navigation:not(.disabled)){padding-bottom:31px}#Chapter.Vertical .PageContent{margin-top:8px;margin-bottom:8px}.closeButton{width:fit-content;height:fit-content;position:absolute;top:10px;right:10px}.overlay{z-index:950;cursor:pointer;background-color:#00000080;width:100%;height:100%;display:none;position:fixed;inset:0}.overlay.visible{display:block}select{height:20px;margin:2px}:not(.FluidRTL,.FluidLTR).fitWidthIfOversize .PageContent .PageImg{object-fit:contain;max-width:100%}.hideControls .PageFunctions{visibility:hidden}",g9="@keyframes spin{to{transform:rotate(360deg)}}@keyframes spin-reverse{0%{transform:rotate(360deg)}to{transform:rotate(0)}}.icon-tabler-loader-2,.animate-spin{animation:1s linear infinite spin}.animate-spin-reverse{animation:1s linear infinite spin-reverse}",m9="#Chapter:where(.Book,.Manga){grid-template-columns:1fr 1fr;grid-auto-flow:row;gap:0;width:100%;min-width:auto;display:grid}#Chapter:where(.Book,.Manga) .MangaPage{width:100%;min-height:22px;display:block;position:relative;overflow:hidden}#Chapter:where(.Book,.Manga) .MangaPage .PageFunctions{border-radius:0 0 0 4px;flex-direction:row;top:0;left:auto;right:0}#Chapter:where(.Book,.Manga) .MangaPage.LeftPage .PageFunctions{border-radius:0 0 4px;flex-direction:row-reverse;left:0;right:auto}#Chapter:where(.Book,.Manga) .MangaPage.DoublePage{grid-column:span 2}#Chapter:where(.Book,.Manga) .MangaPage .PageContent{flex-shrink:0;justify-content:center;align-items:center;display:flex;overflow:hidden}#Chapter:where(.Book,.Manga) .MangaPage.LeftPage .PageContent{justify-content:flex-end;padding-right:0}#Chapter:where(.Book,.Manga) .MangaPage.RightPage .PageContent{justify-content:flex-start;padding-left:0}#Chapter:where(.Book,.Manga) .MangaPage.DoublePage .PageContent{justify-content:center}#Chapter.Manga{direction:rtl}#Chapter.Manga .MangaPage{direction:ltr}",v9="#Chapter.FluidLTR,#Chapter.FluidRTL{min-width:auto;display:flex;overflow-x:auto;& .ZoomWidth{display:none}& .PageImg{min-width:unset}& .MangaPage{width:initial;min-width:fit-content;position:relative}& .MangaPage.DoublePage{grid-column:span 2}}#Chapter.FluidLTR{flex-direction:row;& .MangaPage .PageFunctions{direction:rtl;left:0;right:auto}}#Chapter.FluidRTL{flex-direction:row-reverse}",b9="#Chapter.Gallery{flex-wrap:wrap;justify-content:center;gap:10px;padding:10px;display:flex}.Gallery .MangaPage{width:auto;min-width:unset;flex:0 auto}.Gallery .MangaPage .PageContent .PageImg{min-width:unset}.Gallery .PageFunctions,.Gallery .separator{display:none}",w9='.PageButton .icon-tabler{vertical-align:sub;width:1rem;height:1rem}.PageButton,.PageButton:visited,.PageButton:link{cursor:pointer;min-height:32px;color:var(--mov-color-on-loud);background-color:var(--mov-color-fill-loud);border-style:solid;border-width:1px;border-color:var(--theme-border-color);border-radius:5px;padding:2px;text-decoration:none}.PageButton:active,.PageButton:hover{opacity:.8}.PageButton[selected]{background-color:var(--mov-color-fill-normal);color:var(--mov-color-on-normal);border:1px solid var(--theme-border-color)}.PageButton.hidden{display:none}.MangaPage{text-align:center;width:100%;min-width:100%;min-height:22px;line-height:0;display:inline-block}.PageContent{text-align:center;max-width:100%;height:100%;transition:all .3s ease-in-out;display:inline-block;overflow:auto hidden}.MangaPage.hide .PageContent{height:0}.PageContent .PageImg[src=""],.PageContent .PageImg:not([src]),.PageContent .PageImg.imgBroken{background-position:50%;background-repeat:no-repeat;background-size:20%;background-color:var(--theme-hightlight-color);text-align:center;vertical-align:top;width:40vw;height:80vh;color:var(--theme-text-color);min-width:40vw;max-width:100%;min-height:50vh;max-height:100%;margin:0;font-size:16px;line-height:80vh;display:inline-block;position:relative}.PageContent .PageImg[src=""]:before,.PageContent .PageImg:not([src]):before,.PageContent .PageImg.imgBroken:before{content:attr(alt);white-space:pre-wrap;text-align:center;color:var(--theme-text-color);font-size:16px;position:absolute;top:40%;left:50%;transform:translate(-50%,-50%)}.PageFunctions{justify-content:flex-end;align-items:center;gap:3px;margin:0;padding:0;font-family:monospace;display:flex;position:absolute;right:0}.PageFunctions>.PageIndex{background-color:var(--mov-color-fill-loud);color:var(--mov-color-on-loud);text-align:center;border-radius:5px;min-width:20px;padding:3px 5px;line-height:1rem;display:inline-block}.PageFunctions .PageButton{opacity:.5;border-width:0;justify-content:center;align-items:center;min-height:auto;margin:0;padding:3px;display:flex}.PageFunctions:hover .PageButton{opacity:1}.PageFunctions .PageButton:hover{opacity:.9}#Chapter.Vertical .separator{text-align:center;align-items:center;font-style:italic;display:flex}#Chapter.Vertical .separator:before,#Chapter.Vertical .separator:after{content:"";border-bottom:1px solid var(--theme-text-color);flex:1}#Chapter.Vertical.separator:not(:empty):before{margin-right:.25em}#Chapter.Vertical.separator:not(:empty):after{margin-left:.25em}#Chapter:not(.separator) .separator,#Chapter:not(.Vertical) .separator{display:none}',_9="#MangaOnlineViewer{color:var(--theme-body-text-color);background-color:var(--theme-body-background);margin:0;padding:0;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:16px;line-height:20px}a,a:link,a:visited,a:active,a:focus{color:var(--theme-body-text-color);text-decoration:none}img{vertical-align:middle;border:0;height:auto}",y9=":root{--theme-primary-color:#007bff;--theme-primary-text-color:#fff;--theme-secondary-color:#6c757d;--theme-secondary-text-color:#fff;--theme-body-background:#212529;--theme-body-text-color:#f8f9fa;--theme-text-color:#f8f9fa;--theme-background-color:#212529;--theme-hightlight-color:#343a40;--theme-border-color:#495057;--mov-color-fill-quiet:#ced4da;--mov-color-fill-normal:#adb5bd;--mov-color-fill-loud:#007bff;--mov-color-border-quiet:#adb5bd;--mov-color-border-normal:#6c757d;--mov-color-border-loud:#495057;--mov-color-on-quiet:#343a40;--mov-color-on-normal:#fff;--mov-color-on-loud:#fff;--mov-color-mix-hover:#00000014;--mov-color-mix-active:#00000029}.light{--theme-body-background:#f8f9fa;--theme-body-text-color:#212529;--theme-text-color:#212529;--theme-background-color:#f8f9fa;--theme-hightlight-color:#e9ecef;--theme-border-color:#dee2e6;--mov-color-fill-quiet:#f8f9fa;--mov-color-fill-normal:#e9ecef;--mov-color-fill-loud:#007bff;--mov-color-border-quiet:#e9ecef;--mov-color-border-normal:#dee2e6;--mov-color-border-loud:#adb5bd;--mov-color-on-quiet:#6c757d;--mov-color-on-normal:#fff;--mov-color-on-loud:#fff;--mov-color-mix-hover:#0000001a;--mov-color-mix-active:#0003}",k9=_t`
  .PageContent .PageImg[src=''],
  .PageContent .PageImg:not([src]) {
    background-image: url('${ke(Ia(Hs))}');
  }

  .PageContent .PageImg.imgBroken {
    background-image: url('${ke(Ia(Fs))}');
  }

  ${ke(y9)}
  ${ke(_9)}
  ${ke(p9)}
  ${ke(w9)}
  ${ke(v9)}
  ${ke(m9)}
  ${ke(b9)}
  ${ke(K0)}
  ${ke(g9)}
`,E9=(e="#MangaOnlineViewer",t=Y("theme"))=>{const r=I0(t),i=Eo(t),a=Y("colorScheme")==="dark"?r[8]:r[2],s=Eo(a);return _t`
    :where(:root),
    ${ke(e)}, .dark,
    ${ke(e)}.dark {
      --theme-primary-color: ${ke(t)};;
      --theme-primary-text-color: ${ke(i)};;
      --theme-secondary-color: ${ke(a)};;
      --theme-secondary-text-color: ${ke(s)};;

      color-scheme: dark;
      --theme-body-background: ${ke(xt.dark[600])};;
      --theme-body-text-color: ${ke(xt.dark[50])};;
      --theme-text-color: ${ke(xt.dark[50])};;
      --theme-background-color: ${ke(xt.dark[600])};;
      --theme-hightlight-color: ${ke(xt.dark[500])};;
      --theme-border-color: ${ke(xt.dark[400])};;

      --mov-color-fill-quiet: ${ke(r[9])};;
      --mov-color-fill-normal: var(--theme-secondary-color, ${ke(r[8])};);
      --mov-color-fill-loud: var(--theme-primary-color);
      --mov-color-border-quiet: ${ke(r[8])};;
      --mov-color-border-normal: ${ke(r[7])};;
      --mov-color-border-loud: ${ke(r[6])};;
      --mov-color-on-quiet: ${ke(r[4])};;
      --mov-color-on-normal: var(--theme-secondary-text-color, ${ke(r[3])};);
      --mov-color-on-loud: var(--theme-primary-text-color, white);

      --mov-color-mix-hover: black 8%;
      --mov-color-mix-active: black 16%;
    }

    .light,
    ${ke(e)};.light {
      color-scheme: light;
      --theme-body-background: ${ke(xt.gray[50])};;
      --theme-body-text-color: ${ke(xt.gray[900])};;
      --theme-text-color: ${ke(xt.gray[900])};;
      --theme-background-color: ${ke(xt.gray[50])};;
      --theme-hightlight-color: ${ke(xt.gray[500])};;
      --theme-border-color: ${ke(xt.gray[100])};;

      --mov-color-fill-quiet: ${ke(r[0])};;
      --mov-color-fill-normal: var(--theme-secondary-color, ${ke(r[1])};);
      --mov-color-fill-loud: var(--theme-primary-color);
      --mov-color-border-quiet: ${ke(r[1])};;
      --mov-color-border-normal: ${ke(r[2])};;
      --mov-color-border-loud: ${ke(r[4])};;
      --mov-color-on-quiet: ${ke(r[6])};;
      --mov-color-on-normal: var(--theme-secondary-text-color, ${ke(r[3])};);
      --mov-color-on-loud: var(--theme-primary-text-color, white);

      --mov-color-mix-hover: black 10%;
      --mov-color-mix-active: black 20%;
    }
  `},S9="#StartMOV{all:revert;backface-visibility:hidden;color:#fff;cursor:pointer;text-align:center;z-index:105000;background-image:linear-gradient(90deg,#667eea,#764ba2,#6b8dd6,#8e37d7);background-size:300% 100%;border:none;border-radius:10px;width:80%;min-height:50px;margin:0 auto;padding:.5rem 1rem;font-size:32px;transition:all .4s ease-in-out;position:fixed;bottom:0;left:0;right:0;box-shadow:0 4px 15px #744fa8bf}#StartMOV:hover{background-position:100% 0;transition:all .4s ease-in-out}#StartMOV:focus{outline:none}#pagesSliderVal{text-align:center;margin-top:15px;font-weight:700;display:block}",Sr=class extends Xe{constructor(...t){super(...t),this.mangaPages=0,this.begin=1,this.timeoutMs=3e3,this.status="initial-prompt"}static{this.styles=[ke(S9)]}connectedCallback(){super.connectedCallback(),this.status==="initial-prompt"&&(this.timeoutId=window.setTimeout(()=>{this.handleStart()},this.timeoutMs))}disconnectedCallback(){super.disconnectedCallback(),window.clearTimeout(this.timeoutId)}handleStart(){window.clearTimeout(this.timeoutId),this.dispatchEvent(new CustomEvent("start",{detail:null}))}handleLateStart(t,r){this.dispatchEvent(new CustomEvent("start",{detail:{begin:t,end:r}}))}handleButtonCLick(){this.status="late-start-prompt"}handleDialogClose(t){t.stopPropagation(),window.clearTimeout(this.timeoutId),this.status="late-start-button"}render(){switch(this.status){case"late-start-button":return this.renderLateStartButton();case"late-start-prompt":return this.renderLateStartPrompt();default:return this.renderInitialPrompt()}}renderInitialPrompt(){return re`
      <mov-dialog
        ?open=${this.status==="initial-prompt"}
        icon="info"
        @close=${this.handleDialogClose}
      >
        <span slot="label">${q("STARTING")}</span>
        <div style="padding: 1rem;">${q("WAITING")}</div>
        <div
          slot="footer"
          style="display: flex; justify-content: space-between; padding: 0.5rem 1rem 1rem;"
        >
          <mov-button
            @click=${this.handleDialogClose}
            style="--mov-color-fill-loud: ${xt.red[700]}; --mov-color-on-loud: white;"
          >
            Cancel
          </mov-button>
          <mov-button
            @click=${this.handleStart}
            style="--mov-color-fill-loud: ${xt.green[700]}; --mov-color-on-loud: white;"
          >
            Start Now
          </mov-button>
        </div>
      </mov-dialog>
    `}renderLateStartButton(){return re`
      <button
        id="StartMOV"
        @click=${this.handleButtonCLick}
      >
        ${q("BUTTON_START")}
      </button>
    `}renderLateStartPrompt(){this.beginPage??=this.begin,this.endPage??=this.mangaPages;const t=r=>{this.beginPage=r.detail.value[0],this.endPage=r.detail.value[1]};return re`
      <mov-dialog
        ?open=${this.status==="late-start-prompt"}
        icon="question"
        @close=${this.handleDialogClose}
      >
        <span slot="label">${q("STARTING")}</span>
        <div style="padding: 1rem;">
          ${q("CHOOSE_BEGINNING")}
          <div
            id="pageInputGroup"
            style="padding: 1rem 0;"
          >
            <mov-slider
              id="pagesSlider"
              dual
              show-tooltip
              show-ticks
              tick-count="10"
              step="1"
              .value=${[this.beginPage,this.endPage]}
              min="0"
              max="${this.mangaPages}"
              @input=${t}
            ></mov-slider>
            <output
              id="pagesSliderVal"
              class="RangeValue"
              for="pagesSlider"
            >
              [${String(this.beginPage).padStart(3,"0")} ,
              ${String(this.endPage).padStart(3,"0")}]
            </output>
          </div>
        </div>
        <div
          slot="footer"
          style="display: flex; justify-content: flex-end; gap: 0.5rem; padding: 0.5rem 1rem 1rem;"
        >
          <mov-button
            @click=${this.handleDialogClose}
            style="--mov-color-fill-loud: ${xt.red[700]}; --mov-color-on-loud: white;"
          >
            Close
          </mov-button>
          <mov-button
            @click=${()=>this.handleLateStart(this.beginPage??0,this.endPage??this.mangaPages)}
            style="--mov-color-fill-loud: ${xt.green[700]}; --mov-color-on-loud: white;"
          >
            Run
          </mov-button>
        </div>
      </mov-dialog>
    `}};$([j({type:Number,reflect:!0})],Sr.prototype,"mangaPages",void 0),$([j({type:Number,reflect:!0})],Sr.prototype,"begin",void 0),$([j({type:Number})],Sr.prototype,"timeoutMs",void 0),$([j({type:String,reflect:!0})],Sr.prototype,"status",void 0),$([Dt()],Sr.prototype,"beginPage",void 0),$([Dt()],Sr.prototype,"endPage",void 0),Sr=$([rt("script-startup")],Sr);function A9(e){if(!e?.parentNode)return e;const t=e.cloneNode(!0);return e.parentNode.replaceChild(t,e),t}var M9=e=>{e.getAttributeNames().forEach(t=>{e?.removeAttribute(t)})},x9=(...e)=>{e?.forEach(M9),e?.forEach(A9)};function I9(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var sh,Ta=class extends Xe{constructor(...t){super(...t),this.loadMode="wait"}static{this.styles=[_t``,ke(k9)]}async start(t,r){this.manga&&(document.documentElement.hasAttribute("mov")||(x9(document.documentElement,document.head,document.body),document.documentElement.setAttribute("mov","")),window.scrollTo(0,0),Pe("manga",{...this.manga,begin:t??this.manga.begin,pages:r??this.manga.pages}))}firstUpdated(){this.loadMode==="always"&&this.start(),Xb(),qb()}render(){const t=he("manga"),r=he("dialog");return re`
      <style>
        ${E9()}
      </style>
      <div
        id="MangaOnlineViewer"
        class="${yt({[Y("colorScheme")]:!0,hideControls:Y("hidePageControls"),bookmarked:!!ho(),[he("device")]:!0})}"
        style="${Un({[`padding-${Y("navbar")}`]:"34px"})}"
        .locale="${Y("locale")}"
      >
        ${t?re` <reader-header .manga=${t}></reader-header>
              ${f9(t)}
              <navbar-thumbnails .mode=${Y("navbar")}></navbar-thumbnails>
              <manga-pagination
                .mode="${Y("pagination")}"
                .startPage=${t.begin}
                .totalPages=${t.pages}
                .currentPage=${he("currentPage")}
                .next=${t.next}
                .prev=${t.prev}
              ></manga-pagination>
              <keybindings-panel></keybindings-panel>
              <bookmark-panel></bookmark-panel>
              <settings-panel></settings-panel>
              <moaqz-toaster dismissable></moaqz-toaster>`:re(sh||(sh=I9([` <script-startup
              .mangaPages="`,`"
              begin="`,`"
              status="`,`"
              @start=`,`
            ><\/script-startup>`])),this.manga?.pages,this.manga?.begin,this.loadMode==="never"?"late-start-button":"initial-prompt",i=>{this.start(i.detail?.begin,i.detail?.end)})}
        ${r?re`
              <mov-dialog
                open
                .icon=${r.icon}
                @close=${()=>Pe("dialog",null)}
              >
                <span slot="label">${r.title}</span>
                ${r.content} ${r.footer}
              </mov-dialog>
            `:""}
      </div>
    `}};$([j({type:String,reflect:!0})],Ta.prototype,"loadMode",void 0),$([j({type:Object})],Ta.prototype,"manga",void 0),Ta=$([rt("manga-online-viewer"),(0,xo.useStores)(It,co,Jt)],Ta);var C9=`/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */
html{-webkit-text-size-adjust:100%;line-height:1.15}body{margin:0}main{display:block}h1{margin:.67em 0;font-size:2em}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace;font-size:1em}a{background-color:#0000}abbr[title]{border-bottom:none;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace;font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{margin:0;font-family:inherit;font-size:100%;line-height:1.15}button,input{overflow:visible}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button}button::-moz-focus-inner{border-style:none;padding:0}[type=button]::-moz-focus-inner{border-style:none;padding:0}[type=reset]::-moz-focus-inner{border-style:none;padding:0}[type=submit]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring{outline:1px dotted buttontext}[type=button]:-moz-focusring{outline:1px dotted buttontext}[type=reset]:-moz-focusring{outline:1px dotted buttontext}[type=submit]:-moz-focusring{outline:1px dotted buttontext}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;white-space:normal;max-width:100%;padding:0;display:table}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button{height:auto}[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template,[hidden]{display:none}`,O9="#nprogress{pointer-events:none}#nprogress .bar{z-index:1031;background:#29d;width:100%;height:2px;position:fixed;top:0;left:0}#nprogress .peg{opacity:1;width:100px;height:100%;display:block;position:absolute;right:0;transform:rotate(3deg)translateY(-4px);box-shadow:0 0 10px #29d,0 0 5px #29d}#nprogress .spinner{z-index:1031;display:block;position:fixed;top:15px;right:15px}#nprogress .spinner-icon{box-sizing:border-box;border:2px solid #0000;border-color:#29d #0000 #0000 #29d;border-radius:50%;width:18px;height:18px;animation:.4s linear infinite nprogress-spinner}.nprogress-custom-parent{position:relative;overflow:hidden}.nprogress-custom-parent #nprogress .spinner,.nprogress-custom-parent #nprogress .bar{position:absolute}@-webkit-keyframes nprogress-spinner{0%{-webkit-transform:rotate(0)}to{-webkit-transform:rotate(360deg)}}@keyframes nprogress-spinner{0%{transform:rotate(0)}to{transform:rotate(360deg)}}",T9="#nprogress .bar{z-index:1031;background:#29d;width:100%;height:4px;position:fixed;top:0;left:0}html[mov] body>:not(manga-online-viewer,#nprogress){display:none!important}html[mov]{all:unset;font-size:16px}",L9=[C9,O9,T9].join(`
`);async function R9([e,t]){Ae(`Found Pages: ${t.pages} in ${e?.name}`),t.title||(t.title=document.querySelector("title")?.textContent?.trim()),t.begin=ho()??t.begin??1,t.before!==void 0&&(kn("Executing Preparation"),await t.before(t.begin??0)),document.head.innerHTML+=vv("externals",L9);const r=document.createElement("manga-online-viewer");r.loadMode=e?.start??Y("loadMode"),r.manga=t,document.body.appendChild(r)}async function P9(e){Ae(`Starting ${ks.script.name} ${ks.script.version} on ${Go()} ${Y2()} with ${X2()}`),Ae(e.length,"Known Manga Sites:",e);const t=e.filter(i=>i.url.test(window.location.href));Ae(t.length,"Found sites:",t);const r=t.map(async i=>{Ae(`Testing site: ${i.name}`),await Q2(i);const a=await i.run();if(a.pages>0)return[i,a];throw new Error(`${i.name} found ${a.pages} pages`)});try{R9(await Promise.any(r))}catch(i){if(i instanceof AggregateError){Ae("All sites failed to run:");for(const a of i.errors)Ae(a.message)}else Ae("An unexpected error occurred:",i)}}P9(W2).catch(Ae)})();
