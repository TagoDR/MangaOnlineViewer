// ==UserScript==
// @name          Manga OnlineViewer Adult
// @author        Tago
// @updateURL     https://github.com/TagoDR/MangaOnlineViewer/raw/master/dist/Manga_OnlineViewer_Adult.meta.js
// @downloadURL   https://github.com/TagoDR/MangaOnlineViewer/raw/master/dist/Manga_OnlineViewer_Adult.user.js
// @supportURL    https://github.com/TagoDR/MangaOnlineViewer/issues
// @namespace     https://github.com/TagoDR
// @description   Shows all pages at once in online view for these sites: AkumaMoe, BestPornComix, DoujinMoeNM, Dragon Translation, 8Muses.com, 8Muses.io, ExHentai, e-Hentai, FSIComics, FreeAdultComix, GNTAI.net, HDoujin, Hentai2Read, HentaiEra, HentaiForce, HentaiFox, HentaiHand, nHentai.com, HentaIHere, HentaiNexus, HenTalk, Hitomi, Imhentai, KingComix, Chochox, Comics18, Luscious, MultPorn, MyHentaiGallery, nHentai.net, nHentai.to, nHentai.xxx, 9Hentai, PornComicsHD, Pururin, SchaleNetwork, Simply-Hentai, TMOHentai, 3Hentai, HentaiVox, Tsumino, vermangasporno, vercomicsporno, wnacg, XlecxOne, xyzcomics, Yabai, Madara WordPress Plugin, AllPornComic, Manytoon, Manga District
// @version       2026.10.17.build-2343
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
// @require       https://cdn.jsdelivr.net/npm/colorjs.io@0.7.1/dist/color.global.min.js
// @require       https://cdnjs.cloudflare.com/ajax/libs/jszip/3.9.1/jszip.min.js
// @require       https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.js
// @require       https://cdn.jsdelivr.net/npm/lodash@4.18.1/lodash.min.js
// @require       https://cdn.jsdelivr.net/npm/hotkeys-js@4.0.7/dist/hotkeys-js.min.js
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
// @include       /https?:\/\/(www\.)?(hentaihand|nhentai)\.com\/(?:[a-z]{2}\/)?(?:comic|reader)\/.+\/\d+/
// @include       /https?:\/\/(www\.)?hentaihere.com\/.+\/.+\/.+/
// @include       /https?:\/\/(www\.)?hentainexus.com\/read\/.+/
// @include       /https?:\/\/(www.)?hentalk.pw/
// @include       /https?:\/\/hitomi.la\/reader\/.+/
// @include       /https?:\/\/(www\.)?imhentai.xxx\/view\/.+\/.+\//
// @include       /https?:\/\/(www\.)?(kingcomix|chochox|comics18).(com|org)\/.+/
// @include       /https?:\/\/(www\.)?luscious.net\/.+\/read\/.+/
// @include       /https?:\/\/(www\.)?multporn.net\/(comics|hentai_manga)\/.+/
// @include       /https?:\/\/(www\.)?myhentaigallery.com\/g\/.+\/\d+/
// @include       /https?:\/\/(www\.)?nhentai\.net\/g\/.+/
// @include       /https?:\/\/(www\.)?nhentai\.to\/g\/\d+\/\d+/
// @include       /https?:\/\/(www\.)?nhentai\.xxx\/g\/\d+\/\d+/
// @include       /https?:\/\/(www\.)?9hentai.(so)\/g\/.+\/.+/
// @include       /https?:\/\/(www\.)?porncomicshd.com\/es.*/
// @include       /https?:\/\/(www\.)?pururin.me\/(view|read)\/.+\/.+\/.+/
// @include       /https?:\/\/(www\.)?(niyaniya|shupogaki|hoshino).(moe|one)/
// @include       /https?:\/\/(www\.)?simply-hentai.com\/.+\/page\/.+/
// @include       /https?:\/\/(www\.)?tmohentai\.(com|app)\/(reader|library|view_uploads)\/.+/
// @include       /https?:\/\/(www|es|fr|it|pt|ru)?\.?(3hentai|hentaivox).(net|com)\/(d|view)\/.+\/.+/
// @include       /https?:\/\/(www\.)?tsumino.com\/Read\/Index\/\d+(\?page=.+)?/
// @include       /https?:\/\/(www\.)?(vermangasporno|vercomicsporno).com\/.+/
// @include       /https?:\/\/(www\.)?wnacg.com\/photos-view-id-.+/
// @include       /https?:\/\/(www\.)?xlecx.one\/.+/
// @include       /https?:\/\/(www\.)?xyzcomics.com\/.+/
// @include       /https?:\/\/(www\.)?yabai.si\/g\/.+\/read/
// @include       /https?:\/\/.+\/(porncomic|read-scan|title)\/.+\/.+/
// ==/UserScript==
(function(){var cp=Object.create,oa=Object.defineProperty,dp=Object.getOwnPropertyDescriptor,up=Object.getOwnPropertyNames,hp=Object.getPrototypeOf,Wd=Object.prototype.hasOwnProperty,Sr=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t,t.exports),e=null),t.exports),on=(e,t)=>{let n={};for(var o in e)oa(n,o,{get:e[o],enumerable:!0});return t||oa(n,Symbol.toStringTag,{value:"Module"}),n},fp=(e,t,n,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(var a=up(t),s=0,c=a.length,l;s<c;s++)l=a[s],!Wd.call(e,l)&&l!==n&&oa(e,l,{get:(h=>t[h]).bind(null,l),enumerable:!(o=dp(t,l))||o.enumerable});return e},ia=(e,t,n)=>(n=e!=null?cp(hp(e)):{},fp(t||!e||!e.__esModule||!Wd.call(e,"default")?oa(n,"default",{value:e,enumerable:!0}):n,e)),pp=Sr(((e,t,n)=>{(function(){var o,a="4.18.1",s=200,c="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",l="Expected a function",h="Invalid `variable` option passed into `_.template`",u="Invalid `imports` option passed into `_.template`",f="__lodash_hash_undefined__",p=500,_="__lodash_placeholder__",g=1,b=2,w=4,v=1,E=2,S=1,C=2,T=4,$=8,K=16,W=32,ne=64,N=128,pe=256,ge=512,P=30,X="...",M=800,Q=16,Ie=1,ce=2,Re=3,ae=1/0,Ee=9007199254740991,V=17976931348623157e292,G=NaN,ye=4294967295,me=ye-1,fe=ye>>>1,ot=[["ary",N],["bind",S],["bindKey",C],["curry",$],["curryRight",K],["flip",ge],["partial",W],["partialRight",ne],["rearg",pe]],ht="[object Arguments]",Ge="[object Array]",Ze="[object AsyncFunction]",gt="[object Boolean]",it="[object Date]",Tr="[object DOMException]",Ut="[object Error]",y="[object Function]",te="[object GeneratorFunction]",U="[object Map]",O="[object Number]",I="[object Null]",B="[object Object]",ie="[object Promise]",se="[object Proxy]",F="[object RegExp]",de="[object Set]",ve="[object String]",ue="[object Symbol]",Ae="[object Undefined]",Xe="[object WeakMap]",je="[object WeakSet]",Dt="[object ArrayBuffer]",Lr="[object DataView]",nr="[object Float32Array]",pn="[object Float64Array]",ft="[object Int8Array]",Bn="[object Int16Array]",lo="[object Int32Array]",wr="[object Uint8Array]",qo="[object Uint8ClampedArray]",Fi="[object Uint16Array]",Gi="[object Uint32Array]",Cc=/\b__p \+= '';/g,os=/\b(__p \+=) '' \+/g,co=/(__e\(.*?\)|\b__t\)) \+\n'';/g,uo=/&(?:amp|lt|gt|quot|#39);/g,I1=/[&<>"']/g,hw=RegExp(uo.source),fw=RegExp(I1.source),pw=/<%-([\s\S]+?)%>/g,mw=/<%([\s\S]+?)%>/g,C1=/<%=([\s\S]+?)%>/g,gw=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,vw=/^\w*$/,bw=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Oc=/[\\^$.*+?()[\]{}|]/g,ww=RegExp(Oc.source),Tc=/^\s+/,_w=/\s/,yw=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,kw=/\{\n\/\* \[wrapped with (.+)\] \*/,Ew=/,? & /,Mw=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,O1=/[()=,{}\[\]\/\s]/,Sw=/\\(\\)?/g,Aw=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,T1=/\w*$/,xw=/^[-+]0x[0-9a-f]+$/i,Iw=/^0b[01]+$/i,Cw=/^\[object .+?Constructor\]$/,Ow=/^0o[0-7]+$/i,Tw=/^(?:0|[1-9]\d*)$/,Lw=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,is=/($^)/,Pw=/['\n\r\u2028\u2029\\]/g,as="\\ud800-\\udfff",L1="\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",P1="\\u2700-\\u27bf",R1="a-z\\xdf-\\xf6\\xf8-\\xff",Rw="\\xac\\xb1\\xd7\\xf7",$w="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Dw="\\u2000-\\u206f",Bw=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",$1="A-Z\\xc0-\\xd6\\xd8-\\xde",D1="\\ufe0e\\ufe0f",B1=Rw+$w+Dw+Bw,Lc="['’]",zw="["+as+"]",z1="["+B1+"]",ss="["+L1+"]",N1="\\d+",Nw="["+P1+"]",H1="["+R1+"]",F1="[^"+as+B1+N1+P1+R1+$1+"]",Pc="\\ud83c[\\udffb-\\udfff]",Hw="(?:"+ss+"|"+Pc+")",G1="[^"+as+"]",Rc="(?:\\ud83c[\\udde6-\\uddff]){2}",$c="[\\ud800-\\udbff][\\udc00-\\udfff]",Ko="["+$1+"]",W1="\\u200d",U1="(?:"+H1+"|"+F1+")",Fw="(?:"+Ko+"|"+F1+")",V1="(?:"+Lc+"(?:d|ll|m|re|s|t|ve))?",Z1="(?:"+Lc+"(?:D|LL|M|RE|S|T|VE))?",j1=Hw+"?",q1="["+D1+"]?",Gw="(?:"+W1+"(?:"+[G1,Rc,$c].join("|")+")"+q1+j1+")*",Ww="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Uw="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",K1=q1+j1+Gw,Vw="(?:"+[Nw,Rc,$c].join("|")+")"+K1,Zw="(?:"+[G1+ss+"?",ss,Rc,$c,zw].join("|")+")",jw=RegExp(Lc,"g"),qw=RegExp(ss,"g"),Dc=RegExp(Pc+"(?="+Pc+")|"+Zw+K1,"g"),Kw=RegExp([Ko+"?"+H1+"+"+V1+"(?="+[z1,Ko,"$"].join("|")+")",Fw+"+"+Z1+"(?="+[z1,Ko+U1,"$"].join("|")+")",Ko+"?"+U1+"+"+V1,Ko+"+"+Z1,Uw,Ww,N1,Vw].join("|"),"g"),Yw=RegExp("["+W1+as+L1+D1+"]"),Xw=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Jw=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Qw=-1,pt={};pt[nr]=pt[pn]=pt[ft]=pt[Bn]=pt[lo]=pt[wr]=pt[qo]=pt[Fi]=pt[Gi]=!0,pt[ht]=pt[Ge]=pt[Dt]=pt[gt]=pt[Lr]=pt[it]=pt[Ut]=pt[y]=pt[U]=pt[O]=pt[B]=pt[F]=pt[de]=pt[ve]=pt[Xe]=!1;var dt={};dt[ht]=dt[Ge]=dt[Dt]=dt[Lr]=dt[gt]=dt[it]=dt[nr]=dt[pn]=dt[ft]=dt[Bn]=dt[lo]=dt[U]=dt[O]=dt[B]=dt[F]=dt[de]=dt[ve]=dt[ue]=dt[wr]=dt[qo]=dt[Fi]=dt[Gi]=!0,dt[Ut]=dt[y]=dt[Xe]=!1;var e_={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},t_={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},r_={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},n_={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},o_=parseFloat,i_=parseInt,Y1=typeof global=="object"&&global&&global.Object===Object&&global,a_=typeof self=="object"&&self&&self.Object===Object&&self,Bt=Y1||a_||Function("return this")(),Bc=typeof e=="object"&&e&&!e.nodeType&&e,ho=Bc&&typeof t=="object"&&t&&!t.nodeType&&t,X1=ho&&ho.exports===Bc,zc=X1&&Y1.process,Pr=(function(){try{var z=ho&&ho.require&&ho.require("util").types;return z||zc&&zc.binding&&zc.binding("util")}catch{}})(),J1=Pr&&Pr.isArrayBuffer,Q1=Pr&&Pr.isDate,ef=Pr&&Pr.isMap,tf=Pr&&Pr.isRegExp,rf=Pr&&Pr.isSet,nf=Pr&&Pr.isTypedArray;function _r(z,J,j){switch(j.length){case 0:return z.call(J);case 1:return z.call(J,j[0]);case 2:return z.call(J,j[0],j[1]);case 3:return z.call(J,j[0],j[1],j[2])}return z.apply(J,j)}function s_(z,J,j,_e){for(var De=-1,et=z==null?0:z.length;++De<et;){var Pt=z[De];J(_e,Pt,j(Pt),z)}return _e}function yr(z,J){for(var j=-1,_e=z==null?0:z.length;++j<_e&&J(z[j],j,z)!==!1;);return z}function l_(z,J){for(var j=z==null?0:z.length;j--&&J(z[j],j,z)!==!1;);return z}function of(z,J){for(var j=-1,_e=z==null?0:z.length;++j<_e;)if(!J(z[j],j,z))return!1;return!0}function zn(z,J){for(var j=-1,_e=z==null?0:z.length,De=0,et=[];++j<_e;){var Pt=z[j];J(Pt,j,z)&&(et[De++]=Pt)}return et}function ls(z,J){return!!(z!=null&&z.length)&&Yo(z,J,0)>-1}function Nc(z,J,j){for(var _e=-1,De=z==null?0:z.length;++_e<De;)if(j(J,z[_e]))return!0;return!1}function vt(z,J){for(var j=-1,_e=z==null?0:z.length,De=Array(_e);++j<_e;)De[j]=J(z[j],j,z);return De}function Nn(z,J){for(var j=-1,_e=J.length,De=z.length;++j<_e;)z[De+j]=J[j];return z}function Hc(z,J,j,_e){var De=-1,et=z==null?0:z.length;for(_e&&et&&(j=z[++De]);++De<et;)j=J(j,z[De],De,z);return j}function c_(z,J,j,_e){var De=z==null?0:z.length;for(_e&&De&&(j=z[--De]);De--;)j=J(j,z[De],De,z);return j}function Fc(z,J){for(var j=-1,_e=z==null?0:z.length;++j<_e;)if(J(z[j],j,z))return!0;return!1}var d_=Gc("length");function u_(z){return z.split("")}function h_(z){return z.match(Mw)||[]}function af(z,J,j){var _e;return j(z,function(De,et,Pt){if(J(De,et,Pt))return _e=et,!1}),_e}function cs(z,J,j,_e){for(var De=z.length,et=j+(_e?1:-1);_e?et--:++et<De;)if(J(z[et],et,z))return et;return-1}function Yo(z,J,j){return J===J?M_(z,J,j):cs(z,sf,j)}function f_(z,J,j,_e){for(var De=j-1,et=z.length;++De<et;)if(_e(z[De],J))return De;return-1}function sf(z){return z!==z}function lf(z,J){var j=z==null?0:z.length;return j?Uc(z,J)/j:G}function Gc(z){return function(J){return J==null?o:J[z]}}function Wc(z){return function(J){return z==null?o:z[J]}}function cf(z,J,j,_e,De){return De(z,function(et,Pt,at){j=_e?(_e=!1,et):J(j,et,Pt,at)}),j}function p_(z,J){var j=z.length;for(z.sort(J);j--;)z[j]=z[j].value;return z}function Uc(z,J){for(var j,_e=-1,De=z.length;++_e<De;){var et=J(z[_e]);et!==o&&(j=j===o?et:j+et)}return j}function Vc(z,J){for(var j=-1,_e=Array(z);++j<z;)_e[j]=J(j);return _e}function m_(z,J){return vt(J,function(j){return[j,z[j]]})}function df(z){return z&&z.slice(0,pf(z)+1).replace(Tc,"")}function kr(z){return function(J){return z(J)}}function Zc(z,J){return vt(J,function(j){return z[j]})}function Wi(z,J){return z.has(J)}function uf(z,J){for(var j=-1,_e=z.length;++j<_e&&Yo(J,z[j],0)>-1;);return j}function hf(z,J){for(var j=z.length;j--&&Yo(J,z[j],0)>-1;);return j}function g_(z,J){for(var j=z.length,_e=0;j--;)z[j]===J&&++_e;return _e}var v_=Wc(e_),b_=Wc(t_);function w_(z){return"\\"+n_[z]}function __(z,J){return z==null?o:z[J]}function Xo(z){return Yw.test(z)}function y_(z){return Xw.test(z)}function k_(z){for(var J,j=[];!(J=z.next()).done;)j.push(J.value);return j}function jc(z){var J=-1,j=Array(z.size);return z.forEach(function(_e,De){j[++J]=[De,_e]}),j}function ff(z,J){return function(j){return z(J(j))}}function Hn(z,J){for(var j=-1,_e=z.length,De=0,et=[];++j<_e;){var Pt=z[j];(Pt===J||Pt===_)&&(z[j]=_,et[De++]=j)}return et}function ds(z){var J=-1,j=Array(z.size);return z.forEach(function(_e){j[++J]=_e}),j}function E_(z){var J=-1,j=Array(z.size);return z.forEach(function(_e){j[++J]=[_e,_e]}),j}function M_(z,J,j){for(var _e=j-1,De=z.length;++_e<De;)if(z[_e]===J)return _e;return-1}function S_(z,J,j){for(var _e=j+1;_e--;)if(z[_e]===J)return _e;return _e}function Jo(z){return Xo(z)?x_(z):d_(z)}function Ur(z){return Xo(z)?I_(z):u_(z)}function pf(z){for(var J=z.length;J--&&_w.test(z.charAt(J)););return J}var A_=Wc(r_);function x_(z){for(var J=Dc.lastIndex=0;Dc.test(z);)++J;return J}function I_(z){return z.match(Dc)||[]}function C_(z){return z.match(Kw)||[]}var Fn=(function z(J){J=J==null?Bt:Fn.defaults(Bt.Object(),J,Fn.pick(Bt,Jw));var j=J.Array,_e=J.Date,De=J.Error,et=J.Function,Pt=J.Math,at=J.Object,qc=J.RegExp,O_=J.String,Rr=J.TypeError,us=j.prototype,T_=et.prototype,Qo=at.prototype,hs=J["__core-js_shared__"],fs=T_.toString,rt=Qo.hasOwnProperty,L_=0,mf=(function(){var r=/[^.]+$/.exec(hs&&hs.keys&&hs.keys.IE_PROTO||"");return r?"Symbol(src)_1."+r:""})(),ps=Qo.toString,P_=fs.call(at),R_=Bt._,$_=qc("^"+fs.call(rt).replace(Oc,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ms=X1?J.Buffer:o,Gn=J.Symbol,gs=J.Uint8Array,gf=ms?ms.allocUnsafe:o,vs=ff(at.getPrototypeOf,at),vf=at.create,bf=Qo.propertyIsEnumerable,bs=us.splice,wf=Gn?Gn.isConcatSpreadable:o,Ui=Gn?Gn.iterator:o,fo=Gn?Gn.toStringTag:o,ws=(function(){try{var r=bo(at,"defineProperty");return r({},"",{}),r}catch{}})(),D_=J.clearTimeout!==Bt.clearTimeout&&J.clearTimeout,B_=_e&&_e.now!==Bt.Date.now&&_e.now,z_=J.setTimeout!==Bt.setTimeout&&J.setTimeout,_s=Pt.ceil,ys=Pt.floor,Kc=at.getOwnPropertySymbols,N_=ms?ms.isBuffer:o,_f=J.isFinite,H_=us.join,F_=ff(at.keys,at),Rt=Pt.max,Vt=Pt.min,G_=_e.now,W_=J.parseInt,yf=Pt.random,U_=us.reverse,Yc=bo(J,"DataView"),Vi=bo(J,"Map"),Xc=bo(J,"Promise"),ei=bo(J,"Set"),Zi=bo(J,"WeakMap"),ji=bo(at,"create"),ks=Zi&&new Zi,ti={},V_=wo(Yc),Z_=wo(Vi),j_=wo(Xc),q_=wo(ei),K_=wo(Zi),Es=Gn?Gn.prototype:o,qi=Es?Es.valueOf:o,kf=Es?Es.toString:o;function A(r){if(yt(r)&&!Fe(r)&&!(r instanceof qe)){if(r instanceof $r)return r;if(rt.call(r,"__wrapped__"))return E2(r)}return new $r(r)}var ri=(function(){function r(){}return function(i){if(!_t(i))return{};if(vf)return vf(i);r.prototype=i;var d=new r;return r.prototype=o,d}})();function Ms(){}function $r(r,i){this.__wrapped__=r,this.__actions__=[],this.__chain__=!!i,this.__index__=0,this.__values__=o}A.templateSettings={escape:pw,evaluate:mw,interpolate:C1,variable:"",imports:{_:A}},A.prototype=Ms.prototype,A.prototype.constructor=A,$r.prototype=ri(Ms.prototype),$r.prototype.constructor=$r;function qe(r){this.__wrapped__=r,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=ye,this.__views__=[]}function Y_(){var r=new qe(this.__wrapped__);return r.__actions__=or(this.__actions__),r.__dir__=this.__dir__,r.__filtered__=this.__filtered__,r.__iteratees__=or(this.__iteratees__),r.__takeCount__=this.__takeCount__,r.__views__=or(this.__views__),r}function X_(){if(this.__filtered__){var r=new qe(this);r.__dir__=-1,r.__filtered__=!0}else r=this.clone(),r.__dir__*=-1;return r}function J_(){var r=this.__wrapped__.value(),i=this.__dir__,d=Fe(r),m=i<0,k=d?r.length:0,x=dk(0,k,this.__views__),L=x.start,R=x.end,H=R-L,oe=m?R:L-1,ee=this.__iteratees__,le=ee.length,be=0,ke=Vt(H,this.__takeCount__);if(!d||!m&&k==H&&ke==H)return Zf(r,this.__actions__);var Ce=[];e:for(;H--&&be<ke;){oe+=i;for(var Be=-1,Oe=r[oe];++Be<le;){var st=ee[Be],Ke=st.iteratee,Xt=st.type,nn=Ke(Oe);if(Xt==ce)Oe=nn;else if(!nn){if(Xt==Ie)continue e;break e}}Ce[be++]=Oe}return Ce}qe.prototype=ri(Ms.prototype),qe.prototype.constructor=qe;function po(r){var i=-1,d=r==null?0:r.length;for(this.clear();++i<d;){var m=r[i];this.set(m[0],m[1])}}function Q_(){this.__data__=ji?ji(null):{},this.size=0}function ey(r){var i=this.has(r)&&delete this.__data__[r];return this.size-=i?1:0,i}function ty(r){var i=this.__data__;if(ji){var d=i[r];return d===f?o:d}return rt.call(i,r)?i[r]:o}function ry(r){var i=this.__data__;return ji?i[r]!==o:rt.call(i,r)}function ny(r,i){var d=this.__data__;return this.size+=this.has(r)?0:1,d[r]=ji&&i===o?f:i,this}po.prototype.clear=Q_,po.prototype.delete=ey,po.prototype.get=ty,po.prototype.has=ry,po.prototype.set=ny;function mn(r){var i=-1,d=r==null?0:r.length;for(this.clear();++i<d;){var m=r[i];this.set(m[0],m[1])}}function oy(){this.__data__=[],this.size=0}function iy(r){var i=this.__data__,d=Ss(i,r);return d<0?!1:(d==i.length-1?i.pop():bs.call(i,d,1),--this.size,!0)}function ay(r){var i=this.__data__,d=Ss(i,r);return d<0?o:i[d][1]}function sy(r){return Ss(this.__data__,r)>-1}function ly(r,i){var d=this.__data__,m=Ss(d,r);return m<0?(++this.size,d.push([r,i])):d[m][1]=i,this}mn.prototype.clear=oy,mn.prototype.delete=iy,mn.prototype.get=ay,mn.prototype.has=sy,mn.prototype.set=ly;function gn(r){var i=-1,d=r==null?0:r.length;for(this.clear();++i<d;){var m=r[i];this.set(m[0],m[1])}}function cy(){this.size=0,this.__data__={hash:new po,map:new(Vi||mn),string:new po}}function dy(r){var i=Bs(this,r).delete(r);return this.size-=i?1:0,i}function uy(r){return Bs(this,r).get(r)}function hy(r){return Bs(this,r).has(r)}function fy(r,i){var d=Bs(this,r),m=d.size;return d.set(r,i),this.size+=d.size==m?0:1,this}gn.prototype.clear=cy,gn.prototype.delete=dy,gn.prototype.get=uy,gn.prototype.has=hy,gn.prototype.set=fy;function mo(r){var i=-1,d=r==null?0:r.length;for(this.__data__=new gn;++i<d;)this.add(r[i])}function py(r){return this.__data__.set(r,f),this}function my(r){return this.__data__.has(r)}mo.prototype.add=mo.prototype.push=py,mo.prototype.has=my;function Vr(r){var i=this.__data__=new mn(r);this.size=i.size}function gy(){this.__data__=new mn,this.size=0}function vy(r){var i=this.__data__,d=i.delete(r);return this.size=i.size,d}function by(r){return this.__data__.get(r)}function wy(r){return this.__data__.has(r)}function _y(r,i){var d=this.__data__;if(d instanceof mn){var m=d.__data__;if(!Vi||m.length<199)return m.push([r,i]),this.size=++d.size,this;d=this.__data__=new gn(m)}return d.set(r,i),this.size=d.size,this}Vr.prototype.clear=gy,Vr.prototype.delete=vy,Vr.prototype.get=by,Vr.prototype.has=wy,Vr.prototype.set=_y;function Ef(r,i){var d=Fe(r),m=!d&&_o(r),k=!d&&!m&&jn(r),x=!d&&!m&&!k&&ai(r),L=d||m||k||x,R=L?Vc(r.length,O_):[],H=R.length;for(var oe in r)(i||rt.call(r,oe))&&!(L&&(oe=="length"||k&&(oe=="offset"||oe=="parent")||x&&(oe=="buffer"||oe=="byteLength"||oe=="byteOffset")||wn(oe,H)))&&R.push(oe);return R}function Mf(r){var i=r.length;return i?r[ld(0,i-1)]:o}function yy(r,i){return zs(or(r),go(i,0,r.length))}function ky(r){return zs(or(r))}function Jc(r,i,d){(d!==o&&!jr(r[i],d)||d===o&&!(i in r))&&en(r,i,d)}function Ki(r,i,d){var m=r[i];(!(rt.call(r,i)&&jr(m,d))||d===o&&!(i in r))&&en(r,i,d)}function Ss(r,i){for(var d=r.length;d--;)if(jr(r[d][0],i))return d;return-1}function Ey(r,i,d,m){return Wn(r,function(k,x,L){i(m,k,d(k),L)}),m}function Sf(r,i){return r&&rn(i,zt(i),r)}function My(r,i){return r&&rn(i,ar(i),r)}function en(r,i,d){i=="__proto__"&&ws?ws(r,i,{configurable:!0,enumerable:!0,value:d,writable:!0}):r[i]=d}function Qc(r,i){for(var d=-1,m=i.length,k=j(m),x=r==null;++d<m;)k[d]=x?o:Rd(r,i[d]);return k}function go(r,i,d){return r===r&&(d!==o&&(r=r<=d?r:d),i!==o&&(r=r>=i?r:i)),r}function Dr(r,i,d,m,k,x){var L,R=i&g,H=i&b,oe=i&w;if(d&&(L=k?d(r,m,k,x):d(r)),L!==o)return L;if(!_t(r))return r;var ee=Fe(r);if(ee){if(L=hk(r),!R)return or(r,L)}else{var le=Zt(r),be=le==y||le==te;if(jn(r))return Kf(r,R);if(le==B||le==ht||be&&!k){if(L=H||be?{}:p2(r),!R)return H?tk(r,My(L,r)):ek(r,Sf(L,r))}else{if(!dt[le])return k?r:{};L=fk(r,le,R)}}x||(x=new Vr);var ke=x.get(r);if(ke)return ke;x.set(r,L),W2(r)?r.forEach(function(Be){L.add(Dr(Be,i,d,Be,r,x))}):F2(r)&&r.forEach(function(Be,Oe){L.set(Oe,Dr(Be,i,d,Oe,r,x))});var Ce=ee?o:(oe?H?wd:bd:H?ar:zt)(r);return yr(Ce||r,function(Be,Oe){Ce&&(Oe=Be,Be=r[Oe]),Ki(L,Oe,Dr(Be,i,d,Oe,r,x))}),L}function Sy(r){var i=zt(r);return function(d){return Af(d,r,i)}}function Af(r,i,d){var m=d.length;if(r==null)return!m;for(r=at(r);m--;){var k=d[m],x=i[k],L=r[k];if(L===o&&!(k in r)||!x(L))return!1}return!0}function xf(r,i,d){if(typeof r!="function")throw new Rr(l);return ra(function(){r.apply(o,d)},i)}function Yi(r,i,d,m){var k=-1,x=ls,L=!0,R=r.length,H=[],oe=i.length;if(!R)return H;d&&(i=vt(i,kr(d))),m?(x=Nc,L=!1):i.length>=s&&(x=Wi,L=!1,i=new mo(i));e:for(;++k<R;){var ee=r[k],le=d==null?ee:d(ee);if(ee=m||ee!==0?ee:0,L&&le===le){for(var be=oe;be--;)if(i[be]===le)continue e;H.push(ee)}else x(i,le,m)||H.push(ee)}return H}var Wn=e2(tn),If=e2(td,!0);function Ay(r,i){var d=!0;return Wn(r,function(m,k,x){return d=!!i(m,k,x),d}),d}function As(r,i,d){for(var m=-1,k=r.length;++m<k;){var x=r[m],L=i(x);if(L!=null&&(R===o?L===L&&!Mr(L):d(L,R)))var R=L,H=x}return H}function xy(r,i,d,m){var k=r.length;for(d=We(d),d<0&&(d=-d>k?0:k+d),m=m===o||m>k?k:We(m),m<0&&(m+=k),m=d>m?0:V2(m);d<m;)r[d++]=i;return r}function Cf(r,i){var d=[];return Wn(r,function(m,k,x){i(m,k,x)&&d.push(m)}),d}function Gt(r,i,d,m,k){var x=-1,L=r.length;for(d||(d=mk),k||(k=[]);++x<L;){var R=r[x];i>0&&d(R)?i>1?Gt(R,i-1,d,m,k):Nn(k,R):m||(k[k.length]=R)}return k}var ed=t2(),Of=t2(!0);function tn(r,i){return r&&ed(r,i,zt)}function td(r,i){return r&&Of(r,i,zt)}function xs(r,i){return zn(i,function(d){return _n(r[d])})}function vo(r,i){i=Vn(i,r);for(var d=0,m=i.length;r!=null&&d<m;)r=r[Zr(i[d++])];return d&&d==m?r:o}function Tf(r,i,d){var m=i(r);return Fe(r)?m:Nn(m,d(r))}function Kt(r){return r==null?r===o?Ae:I:fo&&fo in at(r)?ck(r):kk(r)}function rd(r,i){return r>i}function Iy(r,i){return r!=null&&rt.call(r,i)}function Cy(r,i){return r!=null&&i in at(r)}function Oy(r,i,d){return r>=Vt(i,d)&&r<Rt(i,d)}function nd(r,i,d){for(var m=d?Nc:ls,k=r[0].length,x=r.length,L=x,R=j(x),H=1/0,oe=[];L--;){var ee=r[L];L&&i&&(ee=vt(ee,kr(i))),H=Vt(ee.length,H),R[L]=!d&&(i||k>=120&&ee.length>=120)?new mo(L&&ee):o}ee=r[0];var le=-1,be=R[0];e:for(;++le<k&&oe.length<H;){var ke=ee[le],Ce=i?i(ke):ke;if(ke=d||ke!==0?ke:0,!(be?Wi(be,Ce):m(oe,Ce,d))){for(L=x;--L;){var Be=R[L];if(!(Be?Wi(Be,Ce):m(r[L],Ce,d)))continue e}be&&be.push(Ce),oe.push(ke)}}return oe}function Ty(r,i,d,m){return tn(r,function(k,x,L){i(m,d(k),x,L)}),m}function Xi(r,i,d){i=Vn(i,r),r=b2(r,i);var m=r==null?r:r[Zr(zr(i))];return m==null?o:_r(m,r,d)}function Lf(r){return yt(r)&&Kt(r)==ht}function Ly(r){return yt(r)&&Kt(r)==Dt}function Py(r){return yt(r)&&Kt(r)==it}function Ji(r,i,d,m,k){return r===i?!0:r==null||i==null||!yt(r)&&!yt(i)?r!==r&&i!==i:Ry(r,i,d,m,Ji,k)}function Ry(r,i,d,m,k,x){var L=Fe(r),R=Fe(i),H=L?Ge:Zt(r),oe=R?Ge:Zt(i);H=H==ht?B:H,oe=oe==ht?B:oe;var ee=H==B,le=oe==B,be=H==oe;if(be&&jn(r)){if(!jn(i))return!1;L=!0,ee=!1}if(be&&!ee)return x||(x=new Vr),L||ai(r)?u2(r,i,d,m,k,x):sk(r,i,H,d,m,k,x);if(!(d&v)){var ke=ee&&rt.call(r,"__wrapped__"),Ce=le&&rt.call(i,"__wrapped__");if(ke||Ce){var Be=ke?r.value():r,Oe=Ce?i.value():i;return x||(x=new Vr),k(Be,Oe,d,m,x)}}return be?(x||(x=new Vr),lk(r,i,d,m,k,x)):!1}function $y(r){return yt(r)&&Zt(r)==U}function od(r,i,d,m){var k=d.length,x=k,L=!m;if(r==null)return!x;for(r=at(r);k--;){var R=d[k];if(L&&R[2]?R[1]!==r[R[0]]:!(R[0]in r))return!1}for(;++k<x;){R=d[k];var H=R[0],oe=r[H],ee=R[1];if(L&&R[2]){if(oe===o&&!(H in r))return!1}else{var le=new Vr;if(m)var be=m(oe,ee,H,r,i,le);if(!(be===o?Ji(ee,oe,3,m,le):be))return!1}}return!0}function Pf(r){return!_t(r)||vk(r)?!1:(_n(r)?$_:Cw).test(wo(r))}function Dy(r){return yt(r)&&Kt(r)==F}function By(r){return yt(r)&&Zt(r)==de}function zy(r){return yt(r)&&Us(r.length)&&!!pt[Kt(r)]}function Rf(r){return typeof r=="function"?r:r==null?sr:typeof r=="object"?Fe(r)?Bf(r[0],r[1]):Df(r):np(r)}function id(r){if(!ta(r))return F_(r);var i=[];for(var d in at(r))rt.call(r,d)&&d!="constructor"&&i.push(d);return i}function Ny(r){if(!_t(r))return yk(r);var i=ta(r),d=[];for(var m in r)m=="constructor"&&(i||!rt.call(r,m))||d.push(m);return d}function ad(r,i){return r<i}function $f(r,i){var d=-1,m=ir(r)?j(r.length):[];return Wn(r,function(k,x,L){m[++d]=i(k,x,L)}),m}function Df(r){var i=yd(r);return i.length==1&&i[0][2]?g2(i[0][0],i[0][1]):function(d){return d===r||od(d,r,i)}}function Bf(r,i){return Ed(r)&&m2(i)?g2(Zr(r),i):function(d){var m=Rd(d,r);return m===o&&m===i?$d(d,r):Ji(i,m,3)}}function Is(r,i,d,m,k){r!==i&&ed(i,function(x,L){if(k||(k=new Vr),_t(x))Hy(r,i,L,d,Is,m,k);else{var R=m?m(Sd(r,L),x,L+"",r,i,k):o;R===o&&(R=x),Jc(r,L,R)}},ar)}function Hy(r,i,d,m,k,x,L){var R=Sd(r,d),H=Sd(i,d),oe=L.get(H);if(oe){Jc(r,d,oe);return}var ee=x?x(R,H,d+"",r,i,L):o,le=ee===o;if(le){var be=Fe(H),ke=!be&&jn(H),Ce=!be&&!ke&&ai(H);ee=H,be||ke||Ce?Fe(R)?ee=R:St(R)?ee=or(R):ke?(le=!1,ee=Kf(H,!0)):Ce?(le=!1,ee=Yf(H,!0)):ee=[]:na(H)||_o(H)?(ee=R,_o(R)?ee=Z2(R):(!_t(R)||_n(R))&&(ee=p2(H))):le=!1}le&&(L.set(H,ee),k(ee,H,m,x,L),L.delete(H)),Jc(r,d,ee)}function zf(r,i){var d=r.length;if(d)return i+=i<0?d:0,wn(i,d)?r[i]:o}function Nf(r,i,d){i.length?i=vt(i,function(k){return Fe(k)?function(x){return vo(x,k.length===1?k[0]:k)}:k}):i=[sr];var m=-1;return i=vt(i,kr(Te())),p_($f(r,function(k,x,L){return{criteria:vt(i,function(R){return R(k)}),index:++m,value:k}}),function(k,x){return Qy(k,x,d)})}function Fy(r,i){return Hf(r,i,function(d,m){return $d(r,m)})}function Hf(r,i,d){for(var m=-1,k=i.length,x={};++m<k;){var L=i[m],R=vo(r,L);d(R,L)&&Qi(x,Vn(L,r),R)}return x}function Gy(r){return function(i){return vo(i,r)}}function sd(r,i,d,m){var k=m?f_:Yo,x=-1,L=i.length,R=r;for(r===i&&(i=or(i)),d&&(R=vt(r,kr(d)));++x<L;)for(var H=0,oe=i[x],ee=d?d(oe):oe;(H=k(R,ee,H,m))>-1;)R!==r&&bs.call(R,H,1),bs.call(r,H,1);return r}function Ff(r,i){for(var d=r?i.length:0,m=d-1;d--;){var k=i[d];if(d==m||k!==x){var x=k;wn(k)?bs.call(r,k,1):ud(r,k)}}return r}function ld(r,i){return r+ys(yf()*(i-r+1))}function Wy(r,i,d,m){for(var k=-1,x=Rt(_s((i-r)/(d||1)),0),L=j(x);x--;)L[m?x:++k]=r,r+=d;return L}function cd(r,i){var d="";if(!r||i<1||i>Ee)return d;do i%2&&(d+=r),i=ys(i/2),i&&(r+=r);while(i);return d}function Ve(r,i){return Ad(v2(r,i,sr),r+"")}function Uy(r){return Mf(si(r))}function Vy(r,i){var d=si(r);return zs(d,go(i,0,d.length))}function Qi(r,i,d,m){if(!_t(r))return r;i=Vn(i,r);for(var k=-1,x=i.length,L=x-1,R=r;R!=null&&++k<x;){var H=Zr(i[k]),oe=d;if(H==="__proto__"||H==="constructor"||H==="prototype")return r;if(k!=L){var ee=R[H];oe=m?m(ee,H,R):o,oe===o&&(oe=_t(ee)?ee:wn(i[k+1])?[]:{})}Ki(R,H,oe),R=R[H]}return r}var Gf=ks?function(r,i){return ks.set(r,i),r}:sr,Zy=ws?function(r,i){return ws(r,"toString",{configurable:!0,enumerable:!1,value:Bd(i),writable:!0})}:sr;function jy(r){return zs(si(r))}function Br(r,i,d){var m=-1,k=r.length;i<0&&(i=-i>k?0:k+i),d=d>k?k:d,d<0&&(d+=k),k=i>d?0:d-i>>>0,i>>>=0;for(var x=j(k);++m<k;)x[m]=r[m+i];return x}function qy(r,i){var d;return Wn(r,function(m,k,x){return d=i(m,k,x),!d}),!!d}function Cs(r,i,d){var m=0,k=r==null?m:r.length;if(typeof i=="number"&&i===i&&k<=fe){for(;m<k;){var x=m+k>>>1,L=r[x];L!==null&&!Mr(L)&&(d?L<=i:L<i)?m=x+1:k=x}return k}return dd(r,i,sr,d)}function dd(r,i,d,m){var k=0,x=r==null?0:r.length;if(x===0)return 0;i=d(i);for(var L=i!==i,R=i===null,H=Mr(i),oe=i===o;k<x;){var ee=ys((k+x)/2),le=d(r[ee]),be=le!==o,ke=le===null,Ce=le===le,Be=Mr(le);if(L)var Oe=m||Ce;else oe?Oe=Ce&&(m||be):R?Oe=Ce&&be&&(m||!ke):H?Oe=Ce&&be&&!ke&&(m||!Be):ke||Be?Oe=!1:Oe=m?le<=i:le<i;Oe?k=ee+1:x=ee}return Vt(x,me)}function Wf(r,i){for(var d=-1,m=r.length,k=0,x=[];++d<m;){var L=r[d],R=i?i(L):L;if(!d||!jr(R,H)){var H=R;x[k++]=L===0?0:L}}return x}function Uf(r){return typeof r=="number"?r:Mr(r)?G:+r}function Er(r){if(typeof r=="string")return r;if(Fe(r))return vt(r,Er)+"";if(Mr(r))return kf?kf.call(r):"";var i=r+"";return i=="0"&&1/r==-1/0?"-0":i}function Un(r,i,d){var m=-1,k=ls,x=r.length,L=!0,R=[],H=R;if(d)L=!1,k=Nc;else if(x>=s){var oe=i?null:ik(r);if(oe)return ds(oe);L=!1,k=Wi,H=new mo}else H=i?[]:R;e:for(;++m<x;){var ee=r[m],le=i?i(ee):ee;if(ee=d||ee!==0?ee:0,L&&le===le){for(var be=H.length;be--;)if(H[be]===le)continue e;i&&H.push(le),R.push(ee)}else k(H,le,d)||(H!==R&&H.push(le),R.push(ee))}return R}function ud(r,i){i=Vn(i,r);var d=-1,m=i.length;if(!m)return!0;for(;++d<m;){var k=Zr(i[d]);if(k==="__proto__"&&!rt.call(r,"__proto__")||(k==="constructor"||k==="prototype")&&d<m-1)return!1}var x=b2(r,i);return x==null||delete x[Zr(zr(i))]}function Vf(r,i,d,m){return Qi(r,i,d(vo(r,i)),m)}function Os(r,i,d,m){for(var k=r.length,x=m?k:-1;(m?x--:++x<k)&&i(r[x],x,r););return d?Br(r,m?0:x,m?x+1:k):Br(r,m?x+1:0,m?k:x)}function Zf(r,i){var d=r;return d instanceof qe&&(d=d.value()),Hc(i,function(m,k){return k.func.apply(k.thisArg,Nn([m],k.args))},d)}function hd(r,i,d){var m=r.length;if(m<2)return m?Un(r[0]):[];for(var k=-1,x=j(m);++k<m;)for(var L=r[k],R=-1;++R<m;)R!=k&&(x[k]=Yi(x[k]||L,r[R],i,d));return Un(Gt(x,1),i,d)}function jf(r,i,d){for(var m=-1,k=r.length,x=i.length,L={};++m<k;){var R=m<x?i[m]:o;d(L,r[m],R)}return L}function fd(r){return St(r)?r:[]}function pd(r){return typeof r=="function"?r:sr}function Vn(r,i){return Fe(r)?r:Ed(r,i)?[r]:k2(nt(r))}var Ky=Ve;function Zn(r,i,d){var m=r.length;return d=d===o?m:d,!i&&d>=m?r:Br(r,i,d)}var qf=D_||function(r){return Bt.clearTimeout(r)};function Kf(r,i){if(i)return r.slice();var d=r.length,m=gf?gf(d):new r.constructor(d);return r.copy(m),m}function md(r){var i=new r.constructor(r.byteLength);return new gs(i).set(new gs(r)),i}function Yy(r,i){var d=i?md(r.buffer):r.buffer;return new r.constructor(d,r.byteOffset,r.byteLength)}function Xy(r){var i=new r.constructor(r.source,T1.exec(r));return i.lastIndex=r.lastIndex,i}function Jy(r){return qi?at(qi.call(r)):{}}function Yf(r,i){var d=i?md(r.buffer):r.buffer;return new r.constructor(d,r.byteOffset,r.length)}function Xf(r,i){if(r!==i){var d=r!==o,m=r===null,k=r===r,x=Mr(r),L=i!==o,R=i===null,H=i===i,oe=Mr(i);if(!R&&!oe&&!x&&r>i||x&&L&&H&&!R&&!oe||m&&L&&H||!d&&H||!k)return 1;if(!m&&!x&&!oe&&r<i||oe&&d&&k&&!m&&!x||R&&d&&k||!L&&k||!H)return-1}return 0}function Qy(r,i,d){for(var m=-1,k=r.criteria,x=i.criteria,L=k.length,R=d.length;++m<L;){var H=Xf(k[m],x[m]);if(H)return m>=R?H:H*(d[m]=="desc"?-1:1)}return r.index-i.index}function Jf(r,i,d,m){for(var k=-1,x=r.length,L=d.length,R=-1,H=i.length,oe=Rt(x-L,0),ee=j(H+oe),le=!m;++R<H;)ee[R]=i[R];for(;++k<L;)(le||k<x)&&(ee[d[k]]=r[k]);for(;oe--;)ee[R++]=r[k++];return ee}function Qf(r,i,d,m){for(var k=-1,x=r.length,L=-1,R=d.length,H=-1,oe=i.length,ee=Rt(x-R,0),le=j(ee+oe),be=!m;++k<ee;)le[k]=r[k];for(var ke=k;++H<oe;)le[ke+H]=i[H];for(;++L<R;)(be||k<x)&&(le[ke+d[L]]=r[k++]);return le}function or(r,i){var d=-1,m=r.length;for(i||(i=j(m));++d<m;)i[d]=r[d];return i}function rn(r,i,d,m){var k=!d;d||(d={});for(var x=-1,L=i.length;++x<L;){var R=i[x],H=m?m(d[R],r[R],R,d,r):o;H===o&&(H=r[R]),k?en(d,R,H):Ki(d,R,H)}return d}function ek(r,i){return rn(r,kd(r),i)}function tk(r,i){return rn(r,h2(r),i)}function Ts(r,i){return function(d,m){var k=Fe(d)?s_:Ey,x=i?i():{};return k(d,r,Te(m,2),x)}}function ni(r){return Ve(function(i,d){var m=-1,k=d.length,x=k>1?d[k-1]:o,L=k>2?d[2]:o;for(x=r.length>3&&typeof x=="function"?(k--,x):o,L&&Yt(d[0],d[1],L)&&(x=k<3?o:x,k=1),i=at(i);++m<k;){var R=d[m];R&&r(i,R,m,x)}return i})}function e2(r,i){return function(d,m){if(d==null)return d;if(!ir(d))return r(d,m);for(var k=d.length,x=i?k:-1,L=at(d);(i?x--:++x<k)&&m(L[x],x,L)!==!1;);return d}}function t2(r){return function(i,d,m){for(var k=-1,x=at(i),L=m(i),R=L.length;R--;){var H=L[r?R:++k];if(d(x[H],H,x)===!1)break}return i}}function rk(r,i,d){var m=i&S,k=ea(r);function x(){return(this&&this!==Bt&&this instanceof x?k:r).apply(m?d:this,arguments)}return x}function r2(r){return function(i){i=nt(i);var d=Xo(i)?Ur(i):o,m=d?d[0]:i.charAt(0),k=d?Zn(d,1).join(""):i.slice(1);return m[r]()+k}}function oi(r){return function(i){return Hc(tp(ep(i).replace(jw,"")),r,"")}}function ea(r){return function(){var i=arguments;switch(i.length){case 0:return new r;case 1:return new r(i[0]);case 2:return new r(i[0],i[1]);case 3:return new r(i[0],i[1],i[2]);case 4:return new r(i[0],i[1],i[2],i[3]);case 5:return new r(i[0],i[1],i[2],i[3],i[4]);case 6:return new r(i[0],i[1],i[2],i[3],i[4],i[5]);case 7:return new r(i[0],i[1],i[2],i[3],i[4],i[5],i[6])}var d=ri(r.prototype),m=r.apply(d,i);return _t(m)?m:d}}function nk(r,i,d){var m=ea(r);function k(){for(var x=arguments.length,L=j(x),R=x,H=ii(k);R--;)L[R]=arguments[R];var oe=x<3&&L[0]!==H&&L[x-1]!==H?[]:Hn(L,H);return x-=oe.length,x<d?s2(r,i,Ls,k.placeholder,o,L,oe,o,o,d-x):_r(this&&this!==Bt&&this instanceof k?m:r,this,L)}return k}function n2(r){return function(i,d,m){var k=at(i);if(!ir(i)){var x=Te(d,3);i=zt(i),d=function(R){return x(k[R],R,k)}}var L=r(i,d,m);return L>-1?k[x?i[L]:L]:o}}function o2(r){return bn(function(i){var d=i.length,m=d,k=$r.prototype.thru;for(r&&i.reverse();m--;){var x=i[m];if(typeof x!="function")throw new Rr(l);if(k&&!L&&Ds(x)=="wrapper")var L=new $r([],!0)}for(m=L?m:d;++m<d;){x=i[m];var R=Ds(x),H=R=="wrapper"?_d(x):o;H&&Md(H[0])&&H[1]==(N|$|W|pe)&&!H[4].length&&H[9]==1?L=L[Ds(H[0])].apply(L,H[3]):L=x.length==1&&Md(x)?L[R]():L.thru(x)}return function(){var oe=arguments,ee=oe[0];if(L&&oe.length==1&&Fe(ee))return L.plant(ee).value();for(var le=0,be=d?i[le].apply(this,oe):ee;++le<d;)be=i[le].call(this,be);return be}})}function Ls(r,i,d,m,k,x,L,R,H,oe){var ee=i&N,le=i&S,be=i&C,ke=i&($|K),Ce=i&ge,Be=be?o:ea(r);function Oe(){for(var st=arguments.length,Ke=j(st),Xt=st;Xt--;)Ke[Xt]=arguments[Xt];if(ke)var nn=ii(Oe),qn=g_(Ke,nn);if(m&&(Ke=Jf(Ke,m,k,ke)),x&&(Ke=Qf(Ke,x,L,ke)),st-=qn,ke&&st<oe){var At=Hn(Ke,nn);return s2(r,i,Ls,Oe.placeholder,d,Ke,At,R,H,oe-st)}var qr=le?d:this,kn=be?qr[r]:r;return st=Ke.length,R?Ke=Ek(Ke,R):Ce&&st>1&&Ke.reverse(),ee&&H<st&&(Ke.length=H),this&&this!==Bt&&this instanceof Oe&&(kn=Be||ea(kn)),kn.apply(qr,Ke)}return Oe}function i2(r,i){return function(d,m){return Ty(d,r,i(m),{})}}function Ps(r,i){return function(d,m){var k;if(d===o&&m===o)return i;if(d!==o&&(k=d),m!==o){if(k===o)return m;typeof d=="string"||typeof m=="string"?(d=Er(d),m=Er(m)):(d=Uf(d),m=Uf(m)),k=r(d,m)}return k}}function gd(r){return bn(function(i){return i=vt(i,kr(Te())),Ve(function(d){var m=this;return r(i,function(k){return _r(k,m,d)})})})}function Rs(r,i){i=i===o?" ":Er(i);var d=i.length;if(d<2)return d?cd(i,r):i;var m=cd(i,_s(r/Jo(i)));return Xo(i)?Zn(Ur(m),0,r).join(""):m.slice(0,r)}function ok(r,i,d,m){var k=i&S,x=ea(r);function L(){for(var R=-1,H=arguments.length,oe=-1,ee=m.length,le=j(ee+H),be=this&&this!==Bt&&this instanceof L?x:r;++oe<ee;)le[oe]=m[oe];for(;H--;)le[oe++]=arguments[++R];return _r(be,k?d:this,le)}return L}function a2(r){return function(i,d,m){return m&&typeof m!="number"&&Yt(i,d,m)&&(d=m=o),i=yn(i),d===o?(d=i,i=0):d=yn(d),m=m===o?i<d?1:-1:yn(m),Wy(i,d,m,r)}}function $s(r){return function(i,d){return typeof i=="string"&&typeof d=="string"||(i=Nr(i),d=Nr(d)),r(i,d)}}function s2(r,i,d,m,k,x,L,R,H,oe){var ee=i&$,le=ee?L:o,be=ee?o:L,ke=ee?x:o,Ce=ee?o:x;i|=ee?W:ne,i&=~(ee?ne:W),i&T||(i&=~(S|C));var Be=[r,i,k,ke,le,Ce,be,R,H,oe],Oe=d.apply(o,Be);return Md(r)&&w2(Oe,Be),Oe.placeholder=m,_2(Oe,r,i)}function vd(r){var i=Pt[r];return function(d,m){if(d=Nr(d),m=m==null?0:Vt(We(m),292),m&&_f(d)){var k=(nt(d)+"e").split("e");return k=(nt(i(k[0]+"e"+(+k[1]+m)))+"e").split("e"),+(k[0]+"e"+(+k[1]-m))}return i(d)}}var ik=ei&&1/ds(new ei([,-0]))[1]==ae?function(r){return new ei(r)}:Hd;function l2(r){return function(i){var d=Zt(i);return d==U?jc(i):d==de?E_(i):m_(i,r(i))}}function vn(r,i,d,m,k,x,L,R){var H=i&C;if(!H&&typeof r!="function")throw new Rr(l);var oe=m?m.length:0;if(oe||(i&=~(W|ne),m=k=o),L=L===o?L:Rt(We(L),0),R=R===o?R:We(R),oe-=k?k.length:0,i&ne){var ee=m,le=k;m=k=o}var be=H?o:_d(r),ke=[r,i,d,m,k,ee,le,x,L,R];if(be&&_k(ke,be),r=ke[0],i=ke[1],d=ke[2],m=ke[3],k=ke[4],R=ke[9]=ke[9]===o?H?0:r.length:Rt(ke[9]-oe,0),!R&&i&($|K)&&(i&=~($|K)),!i||i==S)var Ce=rk(r,i,d);else i==$||i==K?Ce=nk(r,i,R):(i==W||i==(S|W))&&!k.length?Ce=ok(r,i,d,m):Ce=Ls.apply(o,ke);return _2((be?Gf:w2)(Ce,ke),r,i)}function c2(r,i,d,m){return r===o||jr(r,Qo[d])&&!rt.call(m,d)?i:r}function d2(r,i,d,m,k,x){return _t(r)&&_t(i)&&(x.set(i,r),Is(r,i,o,d2,x),x.delete(i)),r}function ak(r){return na(r)?o:r}function u2(r,i,d,m,k,x){var L=d&v,R=r.length,H=i.length;if(R!=H&&!(L&&H>R))return!1;var oe=x.get(r),ee=x.get(i);if(oe&&ee)return oe==i&&ee==r;var le=-1,be=!0,ke=d&E?new mo:o;for(x.set(r,i),x.set(i,r);++le<R;){var Ce=r[le],Be=i[le];if(m)var Oe=L?m(Be,Ce,le,i,r,x):m(Ce,Be,le,r,i,x);if(Oe!==o){if(Oe)continue;be=!1;break}if(ke){if(!Fc(i,function(st,Ke){if(!Wi(ke,Ke)&&(Ce===st||k(Ce,st,d,m,x)))return ke.push(Ke)})){be=!1;break}}else if(!(Ce===Be||k(Ce,Be,d,m,x))){be=!1;break}}return x.delete(r),x.delete(i),be}function sk(r,i,d,m,k,x,L){switch(d){case Lr:if(r.byteLength!=i.byteLength||r.byteOffset!=i.byteOffset)return!1;r=r.buffer,i=i.buffer;case Dt:return!(r.byteLength!=i.byteLength||!x(new gs(r),new gs(i)));case gt:case it:case O:return jr(+r,+i);case Ut:return r.name==i.name&&r.message==i.message;case F:case ve:return r==i+"";case U:var R=jc;case de:var H=m&v;if(R||(R=ds),r.size!=i.size&&!H)return!1;var oe=L.get(r);if(oe)return oe==i;m|=E,L.set(r,i);var ee=u2(R(r),R(i),m,k,x,L);return L.delete(r),ee;case ue:if(qi)return qi.call(r)==qi.call(i)}return!1}function lk(r,i,d,m,k,x){var L=d&v,R=bd(r),H=R.length;if(H!=bd(i).length&&!L)return!1;for(var oe=H;oe--;){var ee=R[oe];if(!(L?ee in i:rt.call(i,ee)))return!1}var le=x.get(r),be=x.get(i);if(le&&be)return le==i&&be==r;var ke=!0;x.set(r,i),x.set(i,r);for(var Ce=L;++oe<H;){ee=R[oe];var Be=r[ee],Oe=i[ee];if(m)var st=L?m(Oe,Be,ee,i,r,x):m(Be,Oe,ee,r,i,x);if(!(st===o?Be===Oe||k(Be,Oe,d,m,x):st)){ke=!1;break}Ce||(Ce=ee=="constructor")}if(ke&&!Ce){var Ke=r.constructor,Xt=i.constructor;Ke!=Xt&&"constructor"in r&&"constructor"in i&&!(typeof Ke=="function"&&Ke instanceof Ke&&typeof Xt=="function"&&Xt instanceof Xt)&&(ke=!1)}return x.delete(r),x.delete(i),ke}function bn(r){return Ad(v2(r,o,A2),r+"")}function bd(r){return Tf(r,zt,kd)}function wd(r){return Tf(r,ar,h2)}var _d=ks?function(r){return ks.get(r)}:Hd;function Ds(r){for(var i=r.name+"",d=ti[i],m=rt.call(ti,i)?d.length:0;m--;){var k=d[m],x=k.func;if(x==null||x==r)return k.name}return i}function ii(r){return(rt.call(A,"placeholder")?A:r).placeholder}function Te(){var r=A.iteratee||zd;return r=r===zd?Rf:r,arguments.length?r(arguments[0],arguments[1]):r}function Bs(r,i){var d=r.__data__;return gk(i)?d[typeof i=="string"?"string":"hash"]:d.map}function yd(r){for(var i=zt(r),d=i.length;d--;){var m=i[d],k=r[m];i[d]=[m,k,m2(k)]}return i}function bo(r,i){var d=__(r,i);return Pf(d)?d:o}function ck(r){var i=rt.call(r,fo),d=r[fo];try{r[fo]=o;var m=!0}catch{}var k=ps.call(r);return m&&(i?r[fo]=d:delete r[fo]),k}var kd=Kc?function(r){return r==null?[]:(r=at(r),zn(Kc(r),function(i){return bf.call(r,i)}))}:Fd,h2=Kc?function(r){for(var i=[];r;)Nn(i,kd(r)),r=vs(r);return i}:Fd,Zt=Kt;(Yc&&Zt(new Yc(new ArrayBuffer(1)))!=Lr||Vi&&Zt(new Vi)!=U||Xc&&Zt(Xc.resolve())!=ie||ei&&Zt(new ei)!=de||Zi&&Zt(new Zi)!=Xe)&&(Zt=function(r){var i=Kt(r),d=i==B?r.constructor:o,m=d?wo(d):"";if(m)switch(m){case V_:return Lr;case Z_:return U;case j_:return ie;case q_:return de;case K_:return Xe}return i});function dk(r,i,d){for(var m=-1,k=d.length;++m<k;){var x=d[m],L=x.size;switch(x.type){case"drop":r+=L;break;case"dropRight":i-=L;break;case"take":i=Vt(i,r+L);break;case"takeRight":r=Rt(r,i-L)}}return{start:r,end:i}}function uk(r){var i=r.match(kw);return i?i[1].split(Ew):[]}function f2(r,i,d){i=Vn(i,r);for(var m=-1,k=i.length,x=!1;++m<k;){var L=Zr(i[m]);if(!(x=r!=null&&d(r,L)))break;r=r[L]}return x||++m!=k?x:(k=r==null?0:r.length,!!k&&Us(k)&&wn(L,k)&&(Fe(r)||_o(r)))}function hk(r){var i=r.length,d=new r.constructor(i);return i&&typeof r[0]=="string"&&rt.call(r,"index")&&(d.index=r.index,d.input=r.input),d}function p2(r){return typeof r.constructor=="function"&&!ta(r)?ri(vs(r)):{}}function fk(r,i,d){var m=r.constructor;switch(i){case Dt:return md(r);case gt:case it:return new m(+r);case Lr:return Yy(r,d);case nr:case pn:case ft:case Bn:case lo:case wr:case qo:case Fi:case Gi:return Yf(r,d);case U:return new m;case O:case ve:return new m(r);case F:return Xy(r);case de:return new m;case ue:return Jy(r)}}function pk(r,i){var d=i.length;if(!d)return r;var m=d-1;return i[m]=(d>1?"& ":"")+i[m],i=i.join(d>2?", ":" "),r.replace(yw,`{
/* [wrapped with `+i+`] */
`)}function mk(r){return Fe(r)||_o(r)||!!(wf&&r&&r[wf])}function wn(r,i){var d=typeof r;return i=i??Ee,!!i&&(d=="number"||d!="symbol"&&Tw.test(r))&&r>-1&&r%1==0&&r<i}function Yt(r,i,d){if(!_t(d))return!1;var m=typeof i;return(m=="number"?ir(d)&&wn(i,d.length):m=="string"&&i in d)?jr(d[i],r):!1}function Ed(r,i){if(Fe(r))return!1;var d=typeof r;return d=="number"||d=="symbol"||d=="boolean"||r==null||Mr(r)?!0:vw.test(r)||!gw.test(r)||i!=null&&r in at(i)}function gk(r){var i=typeof r;return i=="string"||i=="number"||i=="symbol"||i=="boolean"?r!=="__proto__":r===null}function Md(r){var i=Ds(r),d=A[i];if(typeof d!="function"||!(i in qe.prototype))return!1;if(r===d)return!0;var m=_d(d);return!!m&&r===m[0]}function vk(r){return!!mf&&mf in r}var bk=hs?_n:Gd;function ta(r){var i=r&&r.constructor;return r===(typeof i=="function"&&i.prototype||Qo)}function m2(r){return r===r&&!_t(r)}function g2(r,i){return function(d){return d==null?!1:d[r]===i&&(i!==o||r in at(d))}}function wk(r){var i=Gs(r,function(m){return d.size===p&&d.clear(),m}),d=i.cache;return i}function _k(r,i){var d=r[1],m=i[1],k=d|m,x=k<(S|C|N),L=m==N&&d==$||m==N&&d==pe&&r[7].length<=i[8]||m==(N|pe)&&i[7].length<=i[8]&&d==$;if(!(x||L))return r;m&S&&(r[2]=i[2],k|=d&S?0:T);var R=i[3];if(R){var H=r[3];r[3]=H?Jf(H,R,i[4]):R,r[4]=H?Hn(r[3],_):i[4]}return R=i[5],R&&(H=r[5],r[5]=H?Qf(H,R,i[6]):R,r[6]=H?Hn(r[5],_):i[6]),R=i[7],R&&(r[7]=R),m&N&&(r[8]=r[8]==null?i[8]:Vt(r[8],i[8])),r[9]==null&&(r[9]=i[9]),r[0]=i[0],r[1]=k,r}function yk(r){var i=[];if(r!=null)for(var d in at(r))i.push(d);return i}function kk(r){return ps.call(r)}function v2(r,i,d){return i=Rt(i===o?r.length-1:i,0),function(){for(var m=arguments,k=-1,x=Rt(m.length-i,0),L=j(x);++k<x;)L[k]=m[i+k];k=-1;for(var R=j(i+1);++k<i;)R[k]=m[k];return R[i]=d(L),_r(r,this,R)}}function b2(r,i){return i.length<2?r:vo(r,Br(i,0,-1))}function Ek(r,i){for(var d=r.length,m=Vt(i.length,d),k=or(r);m--;){var x=i[m];r[m]=wn(x,d)?k[x]:o}return r}function Sd(r,i){if(!(i==="constructor"&&typeof r[i]=="function")&&i!="__proto__")return r[i]}var w2=y2(Gf),ra=z_||function(r,i){return Bt.setTimeout(r,i)},Ad=y2(Zy);function _2(r,i,d){var m=i+"";return Ad(r,pk(m,Mk(uk(m),d)))}function y2(r){var i=0,d=0;return function(){var m=G_(),k=Q-(m-d);if(d=m,k>0){if(++i>=M)return arguments[0]}else i=0;return r.apply(o,arguments)}}function zs(r,i){var d=-1,m=r.length,k=m-1;for(i=i===o?m:i;++d<i;){var x=ld(d,k),L=r[x];r[x]=r[d],r[d]=L}return r.length=i,r}var k2=wk(function(r){var i=[];return r.charCodeAt(0)===46&&i.push(""),r.replace(bw,function(d,m,k,x){i.push(k?x.replace(Sw,"$1"):m||d)}),i});function Zr(r){if(typeof r=="string"||Mr(r))return r;var i=r+"";return i=="0"&&1/r==-1/0?"-0":i}function wo(r){if(r!=null){try{return fs.call(r)}catch{}try{return r+""}catch{}}return""}function Mk(r,i){return yr(ot,function(d){var m="_."+d[0];i&d[1]&&!ls(r,m)&&r.push(m)}),r.sort()}function E2(r){if(r instanceof qe)return r.clone();var i=new $r(r.__wrapped__,r.__chain__);return i.__actions__=or(r.__actions__),i.__index__=r.__index__,i.__values__=r.__values__,i}function Sk(r,i,d){(d?Yt(r,i,d):i===o)?i=1:i=Rt(We(i),0);var m=r==null?0:r.length;if(!m||i<1)return[];for(var k=0,x=0,L=j(_s(m/i));k<m;)L[x++]=Br(r,k,k+=i);return L}function Ak(r){for(var i=-1,d=r==null?0:r.length,m=0,k=[];++i<d;){var x=r[i];x&&(k[m++]=x)}return k}function xk(){var r=arguments.length;if(!r)return[];for(var i=j(r-1),d=arguments[0],m=r;m--;)i[m-1]=arguments[m];return Nn(Fe(d)?or(d):[d],Gt(i,1))}var Ik=Ve(function(r,i){return St(r)?Yi(r,Gt(i,1,St,!0)):[]}),Ck=Ve(function(r,i){var d=zr(i);return St(d)&&(d=o),St(r)?Yi(r,Gt(i,1,St,!0),Te(d,2)):[]}),Ok=Ve(function(r,i){var d=zr(i);return St(d)&&(d=o),St(r)?Yi(r,Gt(i,1,St,!0),o,d):[]});function Tk(r,i,d){var m=r==null?0:r.length;return m?(i=d||i===o?1:We(i),Br(r,i<0?0:i,m)):[]}function Lk(r,i,d){var m=r==null?0:r.length;return m?(i=d||i===o?1:We(i),i=m-i,Br(r,0,i<0?0:i)):[]}function Pk(r,i){return r&&r.length?Os(r,Te(i,3),!0,!0):[]}function Rk(r,i){return r&&r.length?Os(r,Te(i,3),!0):[]}function $k(r,i,d,m){var k=r==null?0:r.length;return k?(d&&typeof d!="number"&&Yt(r,i,d)&&(d=0,m=k),xy(r,i,d,m)):[]}function M2(r,i,d){var m=r==null?0:r.length;if(!m)return-1;var k=d==null?0:We(d);return k<0&&(k=Rt(m+k,0)),cs(r,Te(i,3),k)}function S2(r,i,d){var m=r==null?0:r.length;if(!m)return-1;var k=m-1;return d!==o&&(k=We(d),k=d<0?Rt(m+k,0):Vt(k,m-1)),cs(r,Te(i,3),k,!0)}function A2(r){return r!=null&&r.length?Gt(r,1):[]}function Dk(r){return r!=null&&r.length?Gt(r,ae):[]}function Bk(r,i){return r!=null&&r.length?(i=i===o?1:We(i),Gt(r,i)):[]}function zk(r){for(var i=-1,d=r==null?0:r.length,m={};++i<d;){var k=r[i];en(m,k[0],k[1])}return m}function x2(r){return r&&r.length?r[0]:o}function Nk(r,i,d){var m=r==null?0:r.length;if(!m)return-1;var k=d==null?0:We(d);return k<0&&(k=Rt(m+k,0)),Yo(r,i,k)}function Hk(r){return r!=null&&r.length?Br(r,0,-1):[]}var Fk=Ve(function(r){var i=vt(r,fd);return i.length&&i[0]===r[0]?nd(i):[]}),Gk=Ve(function(r){var i=zr(r),d=vt(r,fd);return i===zr(d)?i=o:d.pop(),d.length&&d[0]===r[0]?nd(d,Te(i,2)):[]}),Wk=Ve(function(r){var i=zr(r),d=vt(r,fd);return i=typeof i=="function"?i:o,i&&d.pop(),d.length&&d[0]===r[0]?nd(d,o,i):[]});function Uk(r,i){return r==null?"":H_.call(r,i)}function zr(r){var i=r==null?0:r.length;return i?r[i-1]:o}function Vk(r,i,d){var m=r==null?0:r.length;if(!m)return-1;var k=m;return d!==o&&(k=We(d),k=k<0?Rt(m+k,0):Vt(k,m-1)),i===i?S_(r,i,k):cs(r,sf,k,!0)}function Zk(r,i){return r&&r.length?zf(r,We(i)):o}var jk=Ve(I2);function I2(r,i){return r&&r.length&&i&&i.length?sd(r,i):r}function qk(r,i,d){return r&&r.length&&i&&i.length?sd(r,i,Te(d,2)):r}function Kk(r,i,d){return r&&r.length&&i&&i.length?sd(r,i,o,d):r}var Yk=bn(function(r,i){var d=r==null?0:r.length,m=Qc(r,i);return Ff(r,vt(i,function(k){return wn(k,d)?+k:k}).sort(Xf)),m});function Xk(r,i){var d=[];if(!(r&&r.length))return d;var m=-1,k=[],x=r.length;for(i=Te(i,3);++m<x;){var L=r[m];i(L,m,r)&&(d.push(L),k.push(m))}return Ff(r,k),d}function xd(r){return r==null?r:U_.call(r)}function Jk(r,i,d){var m=r==null?0:r.length;return m?(d&&typeof d!="number"&&Yt(r,i,d)?(i=0,d=m):(i=i==null?0:We(i),d=d===o?m:We(d)),Br(r,i,d)):[]}function Qk(r,i){return Cs(r,i)}function eE(r,i,d){return dd(r,i,Te(d,2))}function tE(r,i){var d=r==null?0:r.length;if(d){var m=Cs(r,i);if(m<d&&jr(r[m],i))return m}return-1}function rE(r,i){return Cs(r,i,!0)}function nE(r,i,d){return dd(r,i,Te(d,2),!0)}function oE(r,i){if(r!=null&&r.length){var d=Cs(r,i,!0)-1;if(jr(r[d],i))return d}return-1}function iE(r){return r&&r.length?Wf(r):[]}function aE(r,i){return r&&r.length?Wf(r,Te(i,2)):[]}function sE(r){var i=r==null?0:r.length;return i?Br(r,1,i):[]}function lE(r,i,d){return r&&r.length?(i=d||i===o?1:We(i),Br(r,0,i<0?0:i)):[]}function cE(r,i,d){var m=r==null?0:r.length;return m?(i=d||i===o?1:We(i),i=m-i,Br(r,i<0?0:i,m)):[]}function dE(r,i){return r&&r.length?Os(r,Te(i,3),!1,!0):[]}function uE(r,i){return r&&r.length?Os(r,Te(i,3)):[]}var hE=Ve(function(r){return Un(Gt(r,1,St,!0))}),fE=Ve(function(r){var i=zr(r);return St(i)&&(i=o),Un(Gt(r,1,St,!0),Te(i,2))}),pE=Ve(function(r){var i=zr(r);return i=typeof i=="function"?i:o,Un(Gt(r,1,St,!0),o,i)});function mE(r){return r&&r.length?Un(r):[]}function gE(r,i){return r&&r.length?Un(r,Te(i,2)):[]}function vE(r,i){return i=typeof i=="function"?i:o,r&&r.length?Un(r,o,i):[]}function Id(r){if(!(r&&r.length))return[];var i=0;return r=zn(r,function(d){if(St(d))return i=Rt(d.length,i),!0}),Vc(i,function(d){return vt(r,Gc(d))})}function C2(r,i){if(!(r&&r.length))return[];var d=Id(r);return i==null?d:vt(d,function(m){return _r(i,o,m)})}var bE=Ve(function(r,i){return St(r)?Yi(r,i):[]}),wE=Ve(function(r){return hd(zn(r,St))}),_E=Ve(function(r){var i=zr(r);return St(i)&&(i=o),hd(zn(r,St),Te(i,2))}),yE=Ve(function(r){var i=zr(r);return i=typeof i=="function"?i:o,hd(zn(r,St),o,i)}),kE=Ve(Id);function EE(r,i){return jf(r||[],i||[],Ki)}function ME(r,i){return jf(r||[],i||[],Qi)}var SE=Ve(function(r){var i=r.length,d=i>1?r[i-1]:o;return d=typeof d=="function"?(r.pop(),d):o,C2(r,d)});function O2(r){var i=A(r);return i.__chain__=!0,i}function AE(r,i){return i(r),r}function Ns(r,i){return i(r)}var xE=bn(function(r){var i=r.length,d=i?r[0]:0,m=this.__wrapped__,k=function(x){return Qc(x,r)};return i>1||this.__actions__.length||!(m instanceof qe)||!wn(d)?this.thru(k):(m=m.slice(d,+d+(i?1:0)),m.__actions__.push({func:Ns,args:[k],thisArg:o}),new $r(m,this.__chain__).thru(function(x){return i&&!x.length&&x.push(o),x}))});function IE(){return O2(this)}function CE(){return new $r(this.value(),this.__chain__)}function OE(){this.__values__===o&&(this.__values__=U2(this.value()));var r=this.__index__>=this.__values__.length;return{done:r,value:r?o:this.__values__[this.__index__++]}}function TE(){return this}function LE(r){for(var i,d=this;d instanceof Ms;){var m=E2(d);m.__index__=0,m.__values__=o,i?k.__wrapped__=m:i=m;var k=m;d=d.__wrapped__}return k.__wrapped__=r,i}function PE(){var r=this.__wrapped__;if(r instanceof qe){var i=r;return this.__actions__.length&&(i=new qe(this)),i=i.reverse(),i.__actions__.push({func:Ns,args:[xd],thisArg:o}),new $r(i,this.__chain__)}return this.thru(xd)}function RE(){return Zf(this.__wrapped__,this.__actions__)}var $E=Ts(function(r,i,d){rt.call(r,d)?++r[d]:en(r,d,1)});function DE(r,i,d){var m=Fe(r)?of:Ay;return d&&Yt(r,i,d)&&(i=o),m(r,Te(i,3))}function BE(r,i){return(Fe(r)?zn:Cf)(r,Te(i,3))}var zE=n2(M2),NE=n2(S2);function HE(r,i){return Gt(Hs(r,i),1)}function FE(r,i){return Gt(Hs(r,i),ae)}function GE(r,i,d){return d=d===o?1:We(d),Gt(Hs(r,i),d)}function T2(r,i){return(Fe(r)?yr:Wn)(r,Te(i,3))}function L2(r,i){return(Fe(r)?l_:If)(r,Te(i,3))}var WE=Ts(function(r,i,d){rt.call(r,d)?r[d].push(i):en(r,d,[i])});function UE(r,i,d,m){r=ir(r)?r:si(r),d=d&&!m?We(d):0;var k=r.length;return d<0&&(d=Rt(k+d,0)),Vs(r)?d<=k&&r.indexOf(i,d)>-1:!!k&&Yo(r,i,d)>-1}var VE=Ve(function(r,i,d){var m=-1,k=typeof i=="function",x=ir(r)?j(r.length):[];return Wn(r,function(L){x[++m]=k?_r(i,L,d):Xi(L,i,d)}),x}),ZE=Ts(function(r,i,d){en(r,d,i)});function Hs(r,i){return(Fe(r)?vt:$f)(r,Te(i,3))}function jE(r,i,d,m){return r==null?[]:(Fe(i)||(i=i==null?[]:[i]),d=m?o:d,Fe(d)||(d=d==null?[]:[d]),Nf(r,i,d))}var qE=Ts(function(r,i,d){r[d?0:1].push(i)},function(){return[[],[]]});function KE(r,i,d){var m=Fe(r)?Hc:cf,k=arguments.length<3;return m(r,Te(i,4),d,k,Wn)}function YE(r,i,d){var m=Fe(r)?c_:cf,k=arguments.length<3;return m(r,Te(i,4),d,k,If)}function XE(r,i){return(Fe(r)?zn:Cf)(r,Ws(Te(i,3)))}function JE(r){return(Fe(r)?Mf:Uy)(r)}function QE(r,i,d){return(d?Yt(r,i,d):i===o)?i=1:i=We(i),(Fe(r)?yy:Vy)(r,i)}function eM(r){return(Fe(r)?ky:jy)(r)}function tM(r){if(r==null)return 0;if(ir(r))return Vs(r)?Jo(r):r.length;var i=Zt(r);return i==U||i==de?r.size:id(r).length}function rM(r,i,d){var m=Fe(r)?Fc:qy;return d&&Yt(r,i,d)&&(i=o),m(r,Te(i,3))}var nM=Ve(function(r,i){if(r==null)return[];var d=i.length;return d>1&&Yt(r,i[0],i[1])?i=[]:d>2&&Yt(i[0],i[1],i[2])&&(i=[i[0]]),Nf(r,Gt(i,1),[])}),Fs=B_||function(){return Bt.Date.now()};function oM(r,i){if(typeof i!="function")throw new Rr(l);return r=We(r),function(){if(--r<1)return i.apply(this,arguments)}}function P2(r,i,d){return i=d?o:i,i=r&&i==null?r.length:i,vn(r,N,o,o,o,o,i)}function R2(r,i){var d;if(typeof i!="function")throw new Rr(l);return r=We(r),function(){return--r>0&&(d=i.apply(this,arguments)),r<=1&&(i=o),d}}var Cd=Ve(function(r,i,d){var m=S;if(d.length){var k=Hn(d,ii(Cd));m|=W}return vn(r,m,i,d,k)}),$2=Ve(function(r,i,d){var m=S|C;if(d.length){var k=Hn(d,ii($2));m|=W}return vn(i,m,r,d,k)});function D2(r,i,d){i=d?o:i;var m=vn(r,$,o,o,o,o,o,i);return m.placeholder=D2.placeholder,m}function B2(r,i,d){i=d?o:i;var m=vn(r,K,o,o,o,o,o,i);return m.placeholder=B2.placeholder,m}function z2(r,i,d){var m,k,x,L,R,H,oe=0,ee=!1,le=!1,be=!0;if(typeof r!="function")throw new Rr(l);i=Nr(i)||0,_t(d)&&(ee=!!d.leading,le="maxWait"in d,x=le?Rt(Nr(d.maxWait)||0,i):x,be="trailing"in d?!!d.trailing:be);function ke(At){var qr=m,kn=k;return m=k=o,oe=At,L=r.apply(kn,qr),L}function Ce(At){return oe=At,R=ra(st,i),ee?ke(At):L}function Be(At){var qr=At-H,kn=At-oe,op=i-qr;return le?Vt(op,x-kn):op}function Oe(At){var qr=At-H,kn=At-oe;return H===o||qr>=i||qr<0||le&&kn>=x}function st(){var At=Fs();if(Oe(At))return Ke(At);R=ra(st,Be(At))}function Ke(At){return R=o,be&&m?ke(At):(m=k=o,L)}function Xt(){R!==o&&qf(R),oe=0,m=H=k=R=o}function nn(){return R===o?L:Ke(Fs())}function qn(){var At=Fs(),qr=Oe(At);if(m=arguments,k=this,H=At,qr){if(R===o)return Ce(H);if(le)return qf(R),R=ra(st,i),ke(H)}return R===o&&(R=ra(st,i)),L}return qn.cancel=Xt,qn.flush=nn,qn}var iM=Ve(function(r,i){return xf(r,1,i)}),aM=Ve(function(r,i,d){return xf(r,Nr(i)||0,d)});function sM(r){return vn(r,ge)}function Gs(r,i){if(typeof r!="function"||i!=null&&typeof i!="function")throw new Rr(l);var d=function(){var m=arguments,k=i?i.apply(this,m):m[0],x=d.cache;if(x.has(k))return x.get(k);var L=r.apply(this,m);return d.cache=x.set(k,L)||x,L};return d.cache=new(Gs.Cache||gn),d}Gs.Cache=gn;function Ws(r){if(typeof r!="function")throw new Rr(l);return function(){var i=arguments;switch(i.length){case 0:return!r.call(this);case 1:return!r.call(this,i[0]);case 2:return!r.call(this,i[0],i[1]);case 3:return!r.call(this,i[0],i[1],i[2])}return!r.apply(this,i)}}function lM(r){return R2(2,r)}var cM=Ky(function(r,i){i=i.length==1&&Fe(i[0])?vt(i[0],kr(Te())):vt(Gt(i,1),kr(Te()));var d=i.length;return Ve(function(m){for(var k=-1,x=Vt(m.length,d);++k<x;)m[k]=i[k].call(this,m[k]);return _r(r,this,m)})}),Od=Ve(function(r,i){return vn(r,W,o,i,Hn(i,ii(Od)))}),N2=Ve(function(r,i){return vn(r,ne,o,i,Hn(i,ii(N2)))}),dM=bn(function(r,i){return vn(r,pe,o,o,o,i)});function uM(r,i){if(typeof r!="function")throw new Rr(l);return i=i===o?i:We(i),Ve(r,i)}function hM(r,i){if(typeof r!="function")throw new Rr(l);return i=i==null?0:Rt(We(i),0),Ve(function(d){var m=d[i],k=Zn(d,0,i);return m&&Nn(k,m),_r(r,this,k)})}function fM(r,i,d){var m=!0,k=!0;if(typeof r!="function")throw new Rr(l);return _t(d)&&(m="leading"in d?!!d.leading:m,k="trailing"in d?!!d.trailing:k),z2(r,i,{leading:m,maxWait:i,trailing:k})}function pM(r){return P2(r,1)}function mM(r,i){return Od(pd(i),r)}function gM(){if(!arguments.length)return[];var r=arguments[0];return Fe(r)?r:[r]}function vM(r){return Dr(r,w)}function bM(r,i){return i=typeof i=="function"?i:o,Dr(r,w,i)}function wM(r){return Dr(r,5)}function _M(r,i){return i=typeof i=="function"?i:o,Dr(r,5,i)}function yM(r,i){return i==null||Af(r,i,zt(i))}function jr(r,i){return r===i||r!==r&&i!==i}var kM=$s(rd),EM=$s(function(r,i){return r>=i}),_o=Lf((function(){return arguments})())?Lf:function(r){return yt(r)&&rt.call(r,"callee")&&!bf.call(r,"callee")},Fe=j.isArray,MM=J1?kr(J1):Ly;function ir(r){return r!=null&&Us(r.length)&&!_n(r)}function St(r){return yt(r)&&ir(r)}function SM(r){return r===!0||r===!1||yt(r)&&Kt(r)==gt}var jn=N_||Gd,AM=Q1?kr(Q1):Py;function xM(r){return yt(r)&&r.nodeType===1&&!na(r)}function IM(r){if(r==null)return!0;if(ir(r)&&(Fe(r)||typeof r=="string"||typeof r.splice=="function"||jn(r)||ai(r)||_o(r)))return!r.length;var i=Zt(r);if(i==U||i==de)return!r.size;if(ta(r))return!id(r).length;for(var d in r)if(rt.call(r,d))return!1;return!0}function CM(r,i){return Ji(r,i)}function OM(r,i,d){d=typeof d=="function"?d:o;var m=d?d(r,i):o;return m===o?Ji(r,i,o,d):!!m}function Td(r){if(!yt(r))return!1;var i=Kt(r);return i==Ut||i==Tr||typeof r.message=="string"&&typeof r.name=="string"&&!na(r)}function TM(r){return typeof r=="number"&&_f(r)}function _n(r){if(!_t(r))return!1;var i=Kt(r);return i==y||i==te||i==Ze||i==se}function H2(r){return typeof r=="number"&&r==We(r)}function Us(r){return typeof r=="number"&&r>-1&&r%1==0&&r<=Ee}function _t(r){var i=typeof r;return r!=null&&(i=="object"||i=="function")}function yt(r){return r!=null&&typeof r=="object"}var F2=ef?kr(ef):$y;function LM(r,i){return r===i||od(r,i,yd(i))}function PM(r,i,d){return d=typeof d=="function"?d:o,od(r,i,yd(i),d)}function RM(r){return G2(r)&&r!=+r}function $M(r){if(bk(r))throw new De(c);return Pf(r)}function DM(r){return r===null}function BM(r){return r==null}function G2(r){return typeof r=="number"||yt(r)&&Kt(r)==O}function na(r){if(!yt(r)||Kt(r)!=B)return!1;var i=vs(r);if(i===null)return!0;var d=rt.call(i,"constructor")&&i.constructor;return typeof d=="function"&&d instanceof d&&fs.call(d)==P_}var Ld=tf?kr(tf):Dy;function zM(r){return H2(r)&&r>=-Ee&&r<=Ee}var W2=rf?kr(rf):By;function Vs(r){return typeof r=="string"||!Fe(r)&&yt(r)&&Kt(r)==ve}function Mr(r){return typeof r=="symbol"||yt(r)&&Kt(r)==ue}var ai=nf?kr(nf):zy;function NM(r){return r===o}function HM(r){return yt(r)&&Zt(r)==Xe}function FM(r){return yt(r)&&Kt(r)==je}var WM=$s(ad),UM=$s(function(r,i){return r<=i});function U2(r){if(!r)return[];if(ir(r))return Vs(r)?Ur(r):or(r);if(Ui&&r[Ui])return k_(r[Ui]());var i=Zt(r);return(i==U?jc:i==de?ds:si)(r)}function yn(r){return r?(r=Nr(r),r===ae||r===-1/0?(r<0?-1:1)*V:r===r?r:0):r===0?r:0}function We(r){var i=yn(r),d=i%1;return i===i?d?i-d:i:0}function V2(r){return r?go(We(r),0,ye):0}function Nr(r){if(typeof r=="number")return r;if(Mr(r))return G;if(_t(r)){var i=typeof r.valueOf=="function"?r.valueOf():r;r=_t(i)?i+"":i}if(typeof r!="string")return r===0?r:+r;r=df(r);var d=Iw.test(r);return d||Ow.test(r)?i_(r.slice(2),d?2:8):xw.test(r)?G:+r}function Z2(r){return rn(r,ar(r))}function VM(r){return r?go(We(r),-Ee,Ee):r===0?r:0}function nt(r){return r==null?"":Er(r)}var ZM=ni(function(r,i){if(ta(i)||ir(i)){rn(i,zt(i),r);return}for(var d in i)rt.call(i,d)&&Ki(r,d,i[d])}),j2=ni(function(r,i){rn(i,ar(i),r)}),q2=ni(function(r,i,d,m){rn(i,ar(i),r,m)}),Pd=ni(function(r,i,d,m){rn(i,zt(i),r,m)}),jM=bn(Qc);function qM(r,i){var d=ri(r);return i==null?d:Sf(d,i)}var KM=Ve(function(r,i){r=at(r);var d=-1,m=i.length,k=m>2?i[2]:o;for(k&&Yt(i[0],i[1],k)&&(m=1);++d<m;)for(var x=i[d],L=ar(x),R=-1,H=L.length;++R<H;){var oe=L[R],ee=r[oe];(ee===o||jr(ee,Qo[oe])&&!rt.call(r,oe))&&(r[oe]=x[oe])}return r}),YM=Ve(function(r){return r.push(o,d2),_r(K2,o,r)});function XM(r,i){return af(r,Te(i,3),tn)}function JM(r,i){return af(r,Te(i,3),td)}function QM(r,i){return r==null?r:ed(r,Te(i,3),ar)}function eS(r,i){return r==null?r:Of(r,Te(i,3),ar)}function tS(r,i){return r&&tn(r,Te(i,3))}function rS(r,i){return r&&td(r,Te(i,3))}function nS(r){return r==null?[]:xs(r,zt(r))}function oS(r){return r==null?[]:xs(r,ar(r))}function Rd(r,i,d){var m=r==null?o:vo(r,i);return m===o?d:m}function iS(r,i){return r!=null&&f2(r,i,Iy)}function $d(r,i){return r!=null&&f2(r,i,Cy)}var aS=i2(function(r,i,d){i!=null&&typeof i.toString!="function"&&(i=ps.call(i)),r[i]=d},Bd(sr)),sS=i2(function(r,i,d){i!=null&&typeof i.toString!="function"&&(i=ps.call(i)),rt.call(r,i)?r[i].push(d):r[i]=[d]},Te),lS=Ve(Xi);function zt(r){return ir(r)?Ef(r):id(r)}function ar(r){return ir(r)?Ef(r,!0):Ny(r)}function cS(r,i){var d={};return i=Te(i,3),tn(r,function(m,k,x){en(d,i(m,k,x),m)}),d}function dS(r,i){var d={};return i=Te(i,3),tn(r,function(m,k,x){en(d,k,i(m,k,x))}),d}var uS=ni(function(r,i,d){Is(r,i,d)}),K2=ni(function(r,i,d,m){Is(r,i,d,m)}),hS=bn(function(r,i){var d={};if(r==null)return d;var m=!1;i=vt(i,function(x){return x=Vn(x,r),m||(m=x.length>1),x}),rn(r,wd(r),d),m&&(d=Dr(d,7,ak));for(var k=i.length;k--;)ud(d,i[k]);return d});function fS(r,i){return Y2(r,Ws(Te(i)))}var pS=bn(function(r,i){return r==null?{}:Fy(r,i)});function Y2(r,i){if(r==null)return{};var d=vt(wd(r),function(m){return[m]});return i=Te(i),Hf(r,d,function(m,k){return i(m,k[0])})}function mS(r,i,d){i=Vn(i,r);var m=-1,k=i.length;for(k||(k=1,r=o);++m<k;){var x=r==null?o:r[Zr(i[m])];x===o&&(m=k,x=d),r=_n(x)?x.call(r):x}return r}function gS(r,i,d){return r==null?r:Qi(r,i,d)}function vS(r,i,d,m){return m=typeof m=="function"?m:o,r==null?r:Qi(r,i,d,m)}var X2=l2(zt),J2=l2(ar);function bS(r,i,d){var m=Fe(r),k=m||jn(r)||ai(r);if(i=Te(i,4),d==null){var x=r&&r.constructor;k?d=m?new x:[]:_t(r)?d=_n(x)?ri(vs(r)):{}:d={}}return(k?yr:tn)(r,function(L,R,H){return i(d,L,R,H)}),d}function wS(r,i){return r==null?!0:ud(r,i)}function _S(r,i,d){return r==null?r:Vf(r,i,pd(d))}function yS(r,i,d,m){return m=typeof m=="function"?m:o,r==null?r:Vf(r,i,pd(d),m)}function si(r){return r==null?[]:Zc(r,zt(r))}function kS(r){return r==null?[]:Zc(r,ar(r))}function ES(r,i,d){return d===o&&(d=i,i=o),d!==o&&(d=Nr(d),d=d===d?d:0),i!==o&&(i=Nr(i),i=i===i?i:0),go(Nr(r),i,d)}function MS(r,i,d){return i=yn(i),d===o?(d=i,i=0):d=yn(d),r=Nr(r),Oy(r,i,d)}function SS(r,i,d){if(d&&typeof d!="boolean"&&Yt(r,i,d)&&(i=d=o),d===o&&(typeof i=="boolean"?(d=i,i=o):typeof r=="boolean"&&(d=r,r=o)),r===o&&i===o?(r=0,i=1):(r=yn(r),i===o?(i=r,r=0):i=yn(i)),r>i){var m=r;r=i,i=m}if(d||r%1||i%1){var k=yf();return Vt(r+k*(i-r+o_("1e-"+((k+"").length-1))),i)}return ld(r,i)}var AS=oi(function(r,i,d){return i=i.toLowerCase(),r+(d?Q2(i):i)});function Q2(r){return Dd(nt(r).toLowerCase())}function ep(r){return r=nt(r),r&&r.replace(Lw,v_).replace(qw,"")}function xS(r,i,d){r=nt(r),i=Er(i);var m=r.length;d=d===o?m:go(We(d),0,m);var k=d;return d-=i.length,d>=0&&r.slice(d,k)==i}function IS(r){return r=nt(r),r&&fw.test(r)?r.replace(I1,b_):r}function CS(r){return r=nt(r),r&&ww.test(r)?r.replace(Oc,"\\$&"):r}var OS=oi(function(r,i,d){return r+(d?"-":"")+i.toLowerCase()}),TS=oi(function(r,i,d){return r+(d?" ":"")+i.toLowerCase()}),LS=r2("toLowerCase");function PS(r,i,d){r=nt(r),i=We(i);var m=i?Jo(r):0;if(!i||m>=i)return r;var k=(i-m)/2;return Rs(ys(k),d)+r+Rs(_s(k),d)}function RS(r,i,d){r=nt(r),i=We(i);var m=i?Jo(r):0;return i&&m<i?r+Rs(i-m,d):r}function $S(r,i,d){r=nt(r),i=We(i);var m=i?Jo(r):0;return i&&m<i?Rs(i-m,d)+r:r}function DS(r,i,d){return d||i==null?i=0:i&&(i=+i),W_(nt(r).replace(Tc,""),i||0)}function BS(r,i,d){return(d?Yt(r,i,d):i===o)?i=1:i=We(i),cd(nt(r),i)}function zS(){var r=arguments,i=nt(r[0]);return r.length<3?i:i.replace(r[1],r[2])}var NS=oi(function(r,i,d){return r+(d?"_":"")+i.toLowerCase()});function HS(r,i,d){return d&&typeof d!="number"&&Yt(r,i,d)&&(i=d=o),d=d===o?ye:d>>>0,d?(r=nt(r),r&&(typeof i=="string"||i!=null&&!Ld(i))&&(i=Er(i),!i&&Xo(r))?Zn(Ur(r),0,d):r.split(i,d)):[]}var FS=oi(function(r,i,d){return r+(d?" ":"")+Dd(i)});function GS(r,i,d){return r=nt(r),d=d==null?0:go(We(d),0,r.length),i=Er(i),r.slice(d,d+i.length)==i}function WS(r,i,d){var m=A.templateSettings;d&&Yt(r,i,d)&&(i=o),r=nt(r),i=Pd({},i,m,c2);var k=Pd({},i.imports,m.imports,c2),x=zt(k),L=Zc(k,x);yr(x,function(Oe){if(O1.test(Oe))throw new De(u)});var R,H,oe=0,ee=i.interpolate||is,le="__p += '",be=qc((i.escape||is).source+"|"+ee.source+"|"+(ee===C1?Aw:is).source+"|"+(i.evaluate||is).source+"|$","g"),ke="//# sourceURL="+(rt.call(i,"sourceURL")?(i.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++Qw+"]")+`
`;r.replace(be,function(Oe,st,Ke,Xt,nn,qn){return Ke||(Ke=Xt),le+=r.slice(oe,qn).replace(Pw,w_),st&&(R=!0,le+=`' +
__e(`+st+`) +
'`),nn&&(H=!0,le+=`';
`+nn+`;
__p += '`),Ke&&(le+=`' +
((__t = (`+Ke+`)) == null ? '' : __t) +
'`),oe=qn+Oe.length,Oe}),le+=`';
`;var Ce=rt.call(i,"variable")&&i.variable;if(!Ce)le=`with (obj) {
`+le+`
}
`;else if(O1.test(Ce))throw new De(h);le=(H?le.replace(Cc,""):le).replace(os,"$1").replace(co,"$1;"),le="function("+(Ce||"obj")+`) {
`+(Ce?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(R?", __e = _.escape":"")+(H?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+le+`return __p
}`;var Be=rp(function(){return et(x,ke+"return "+le).apply(o,L)});if(Be.source=le,Td(Be))throw Be;return Be}function US(r){return nt(r).toLowerCase()}function VS(r){return nt(r).toUpperCase()}function ZS(r,i,d){if(r=nt(r),r&&(d||i===o))return df(r);if(!r||!(i=Er(i)))return r;var m=Ur(r),k=Ur(i);return Zn(m,uf(m,k),hf(m,k)+1).join("")}function jS(r,i,d){if(r=nt(r),r&&(d||i===o))return r.slice(0,pf(r)+1);if(!r||!(i=Er(i)))return r;var m=Ur(r);return Zn(m,0,hf(m,Ur(i))+1).join("")}function qS(r,i,d){if(r=nt(r),r&&(d||i===o))return r.replace(Tc,"");if(!r||!(i=Er(i)))return r;var m=Ur(r);return Zn(m,uf(m,Ur(i))).join("")}function KS(r,i){var d=P,m=X;if(_t(i)){var k="separator"in i?i.separator:k;d="length"in i?We(i.length):d,m="omission"in i?Er(i.omission):m}r=nt(r);var x=r.length;if(Xo(r)){var L=Ur(r);x=L.length}if(d>=x)return r;var R=d-Jo(m);if(R<1)return m;var H=L?Zn(L,0,R).join(""):r.slice(0,R);if(k===o)return H+m;if(L&&(R+=H.length-R),Ld(k)){if(r.slice(R).search(k)){var oe,ee=H;for(k.global||(k=qc(k.source,nt(T1.exec(k))+"g")),k.lastIndex=0;oe=k.exec(ee);)var le=oe.index;H=H.slice(0,le===o?R:le)}}else if(r.indexOf(Er(k),R)!=R){var be=H.lastIndexOf(k);be>-1&&(H=H.slice(0,be))}return H+m}function YS(r){return r=nt(r),r&&hw.test(r)?r.replace(uo,A_):r}var XS=oi(function(r,i,d){return r+(d?" ":"")+i.toUpperCase()}),Dd=r2("toUpperCase");function tp(r,i,d){return r=nt(r),i=d?o:i,i===o?y_(r)?C_(r):h_(r):r.match(i)||[]}var rp=Ve(function(r,i){try{return _r(r,o,i)}catch(d){return Td(d)?d:new De(d)}}),JS=bn(function(r,i){return yr(i,function(d){d=Zr(d),en(r,d,Cd(r[d],r))}),r});function QS(r){var i=r==null?0:r.length,d=Te();return r=i?vt(r,function(m){if(typeof m[1]!="function")throw new Rr(l);return[d(m[0]),m[1]]}):[],Ve(function(m){for(var k=-1;++k<i;){var x=r[k];if(_r(x[0],this,m))return _r(x[1],this,m)}})}function eA(r){return Sy(Dr(r,g))}function Bd(r){return function(){return r}}function tA(r,i){return r==null||r!==r?i:r}var rA=o2(),nA=o2(!0);function sr(r){return r}function zd(r){return Rf(typeof r=="function"?r:Dr(r,g))}function oA(r){return Df(Dr(r,g))}function iA(r,i){return Bf(r,Dr(i,g))}var aA=Ve(function(r,i){return function(d){return Xi(d,r,i)}}),sA=Ve(function(r,i){return function(d){return Xi(r,d,i)}});function Nd(r,i,d){var m=zt(i),k=xs(i,m);d==null&&!(_t(i)&&(k.length||!m.length))&&(d=i,i=r,r=this,k=xs(i,zt(i)));var x=!(_t(d)&&"chain"in d)||!!d.chain,L=_n(r);return yr(k,function(R){var H=i[R];r[R]=H,L&&(r.prototype[R]=function(){var oe=this.__chain__;if(x||oe){var ee=r(this.__wrapped__);return(ee.__actions__=or(this.__actions__)).push({func:H,args:arguments,thisArg:r}),ee.__chain__=oe,ee}return H.apply(r,Nn([this.value()],arguments))})}),r}function lA(){return Bt._===this&&(Bt._=R_),this}function Hd(){}function cA(r){return r=We(r),Ve(function(i){return zf(i,r)})}var dA=gd(vt),uA=gd(of),hA=gd(Fc);function np(r){return Ed(r)?Gc(Zr(r)):Gy(r)}function fA(r){return function(i){return r==null?o:vo(r,i)}}var pA=a2(),mA=a2(!0);function Fd(){return[]}function Gd(){return!1}function gA(){return{}}function vA(){return""}function bA(){return!0}function wA(r,i){if(r=We(r),r<1||r>Ee)return[];var d=ye,m=Vt(r,ye);i=Te(i),r-=ye;for(var k=Vc(m,i);++d<r;)i(d);return k}function _A(r){return Fe(r)?vt(r,Zr):Mr(r)?[r]:or(k2(nt(r)))}function yA(r){var i=++L_;return nt(r)+i}var kA=Ps(function(r,i){return r+i},0),EA=vd("ceil"),MA=Ps(function(r,i){return r/i},1),SA=vd("floor");function AA(r){return r&&r.length?As(r,sr,rd):o}function xA(r,i){return r&&r.length?As(r,Te(i,2),rd):o}function IA(r){return lf(r,sr)}function CA(r,i){return lf(r,Te(i,2))}function OA(r){return r&&r.length?As(r,sr,ad):o}function TA(r,i){return r&&r.length?As(r,Te(i,2),ad):o}var LA=Ps(function(r,i){return r*i},1),PA=vd("round"),RA=Ps(function(r,i){return r-i},0);function $A(r){return r&&r.length?Uc(r,sr):0}function DA(r,i){return r&&r.length?Uc(r,Te(i,2)):0}return A.after=oM,A.ary=P2,A.assign=ZM,A.assignIn=j2,A.assignInWith=q2,A.assignWith=Pd,A.at=jM,A.before=R2,A.bind=Cd,A.bindAll=JS,A.bindKey=$2,A.castArray=gM,A.chain=O2,A.chunk=Sk,A.compact=Ak,A.concat=xk,A.cond=QS,A.conforms=eA,A.constant=Bd,A.countBy=$E,A.create=qM,A.curry=D2,A.curryRight=B2,A.debounce=z2,A.defaults=KM,A.defaultsDeep=YM,A.defer=iM,A.delay=aM,A.difference=Ik,A.differenceBy=Ck,A.differenceWith=Ok,A.drop=Tk,A.dropRight=Lk,A.dropRightWhile=Pk,A.dropWhile=Rk,A.fill=$k,A.filter=BE,A.flatMap=HE,A.flatMapDeep=FE,A.flatMapDepth=GE,A.flatten=A2,A.flattenDeep=Dk,A.flattenDepth=Bk,A.flip=sM,A.flow=rA,A.flowRight=nA,A.fromPairs=zk,A.functions=nS,A.functionsIn=oS,A.groupBy=WE,A.initial=Hk,A.intersection=Fk,A.intersectionBy=Gk,A.intersectionWith=Wk,A.invert=aS,A.invertBy=sS,A.invokeMap=VE,A.iteratee=zd,A.keyBy=ZE,A.keys=zt,A.keysIn=ar,A.map=Hs,A.mapKeys=cS,A.mapValues=dS,A.matches=oA,A.matchesProperty=iA,A.memoize=Gs,A.merge=uS,A.mergeWith=K2,A.method=aA,A.methodOf=sA,A.mixin=Nd,A.negate=Ws,A.nthArg=cA,A.omit=hS,A.omitBy=fS,A.once=lM,A.orderBy=jE,A.over=dA,A.overArgs=cM,A.overEvery=uA,A.overSome=hA,A.partial=Od,A.partialRight=N2,A.partition=qE,A.pick=pS,A.pickBy=Y2,A.property=np,A.propertyOf=fA,A.pull=jk,A.pullAll=I2,A.pullAllBy=qk,A.pullAllWith=Kk,A.pullAt=Yk,A.range=pA,A.rangeRight=mA,A.rearg=dM,A.reject=XE,A.remove=Xk,A.rest=uM,A.reverse=xd,A.sampleSize=QE,A.set=gS,A.setWith=vS,A.shuffle=eM,A.slice=Jk,A.sortBy=nM,A.sortedUniq=iE,A.sortedUniqBy=aE,A.split=HS,A.spread=hM,A.tail=sE,A.take=lE,A.takeRight=cE,A.takeRightWhile=dE,A.takeWhile=uE,A.tap=AE,A.throttle=fM,A.thru=Ns,A.toArray=U2,A.toPairs=X2,A.toPairsIn=J2,A.toPath=_A,A.toPlainObject=Z2,A.transform=bS,A.unary=pM,A.union=hE,A.unionBy=fE,A.unionWith=pE,A.uniq=mE,A.uniqBy=gE,A.uniqWith=vE,A.unset=wS,A.unzip=Id,A.unzipWith=C2,A.update=_S,A.updateWith=yS,A.values=si,A.valuesIn=kS,A.without=bE,A.words=tp,A.wrap=mM,A.xor=wE,A.xorBy=_E,A.xorWith=yE,A.zip=kE,A.zipObject=EE,A.zipObjectDeep=ME,A.zipWith=SE,A.entries=X2,A.entriesIn=J2,A.extend=j2,A.extendWith=q2,Nd(A,A),A.add=kA,A.attempt=rp,A.camelCase=AS,A.capitalize=Q2,A.ceil=EA,A.clamp=ES,A.clone=vM,A.cloneDeep=wM,A.cloneDeepWith=_M,A.cloneWith=bM,A.conformsTo=yM,A.deburr=ep,A.defaultTo=tA,A.divide=MA,A.endsWith=xS,A.eq=jr,A.escape=IS,A.escapeRegExp=CS,A.every=DE,A.find=zE,A.findIndex=M2,A.findKey=XM,A.findLast=NE,A.findLastIndex=S2,A.findLastKey=JM,A.floor=SA,A.forEach=T2,A.forEachRight=L2,A.forIn=QM,A.forInRight=eS,A.forOwn=tS,A.forOwnRight=rS,A.get=Rd,A.gt=kM,A.gte=EM,A.has=iS,A.hasIn=$d,A.head=x2,A.identity=sr,A.includes=UE,A.indexOf=Nk,A.inRange=MS,A.invoke=lS,A.isArguments=_o,A.isArray=Fe,A.isArrayBuffer=MM,A.isArrayLike=ir,A.isArrayLikeObject=St,A.isBoolean=SM,A.isBuffer=jn,A.isDate=AM,A.isElement=xM,A.isEmpty=IM,A.isEqual=CM,A.isEqualWith=OM,A.isError=Td,A.isFinite=TM,A.isFunction=_n,A.isInteger=H2,A.isLength=Us,A.isMap=F2,A.isMatch=LM,A.isMatchWith=PM,A.isNaN=RM,A.isNative=$M,A.isNil=BM,A.isNull=DM,A.isNumber=G2,A.isObject=_t,A.isObjectLike=yt,A.isPlainObject=na,A.isRegExp=Ld,A.isSafeInteger=zM,A.isSet=W2,A.isString=Vs,A.isSymbol=Mr,A.isTypedArray=ai,A.isUndefined=NM,A.isWeakMap=HM,A.isWeakSet=FM,A.join=Uk,A.kebabCase=OS,A.last=zr,A.lastIndexOf=Vk,A.lowerCase=TS,A.lowerFirst=LS,A.lt=WM,A.lte=UM,A.max=AA,A.maxBy=xA,A.mean=IA,A.meanBy=CA,A.min=OA,A.minBy=TA,A.stubArray=Fd,A.stubFalse=Gd,A.stubObject=gA,A.stubString=vA,A.stubTrue=bA,A.multiply=LA,A.nth=Zk,A.noConflict=lA,A.noop=Hd,A.now=Fs,A.pad=PS,A.padEnd=RS,A.padStart=$S,A.parseInt=DS,A.random=SS,A.reduce=KE,A.reduceRight=YE,A.repeat=BS,A.replace=zS,A.result=mS,A.round=PA,A.runInContext=z,A.sample=JE,A.size=tM,A.snakeCase=NS,A.some=rM,A.sortedIndex=Qk,A.sortedIndexBy=eE,A.sortedIndexOf=tE,A.sortedLastIndex=rE,A.sortedLastIndexBy=nE,A.sortedLastIndexOf=oE,A.startCase=FS,A.startsWith=GS,A.subtract=RA,A.sum=$A,A.sumBy=DA,A.template=WS,A.times=wA,A.toFinite=yn,A.toInteger=We,A.toLength=V2,A.toLower=US,A.toNumber=Nr,A.toSafeInteger=VM,A.toString=nt,A.toUpper=VS,A.trim=ZS,A.trimEnd=jS,A.trimStart=qS,A.truncate=KS,A.unescape=YS,A.uniqueId=yA,A.upperCase=XS,A.upperFirst=Dd,A.each=T2,A.eachRight=L2,A.first=x2,Nd(A,(function(){var r={};return tn(A,function(i,d){rt.call(A.prototype,d)||(r[d]=i)}),r})(),{chain:!1}),A.VERSION=a,yr(["bind","bindKey","curry","curryRight","partial","partialRight"],function(r){A[r].placeholder=A}),yr(["drop","take"],function(r,i){qe.prototype[r]=function(d){d=d===o?1:Rt(We(d),0);var m=this.__filtered__&&!i?new qe(this):this.clone();return m.__filtered__?m.__takeCount__=Vt(d,m.__takeCount__):m.__views__.push({size:Vt(d,ye),type:r+(m.__dir__<0?"Right":"")}),m},qe.prototype[r+"Right"]=function(d){return this.reverse()[r](d).reverse()}}),yr(["filter","map","takeWhile"],function(r,i){var d=i+1,m=d==Ie||d==Re;qe.prototype[r]=function(k){var x=this.clone();return x.__iteratees__.push({iteratee:Te(k,3),type:d}),x.__filtered__=x.__filtered__||m,x}}),yr(["head","last"],function(r,i){var d="take"+(i?"Right":"");qe.prototype[r]=function(){return this[d](1).value()[0]}}),yr(["initial","tail"],function(r,i){var d="drop"+(i?"":"Right");qe.prototype[r]=function(){return this.__filtered__?new qe(this):this[d](1)}}),qe.prototype.compact=function(){return this.filter(sr)},qe.prototype.find=function(r){return this.filter(r).head()},qe.prototype.findLast=function(r){return this.reverse().find(r)},qe.prototype.invokeMap=Ve(function(r,i){return typeof r=="function"?new qe(this):this.map(function(d){return Xi(d,r,i)})}),qe.prototype.reject=function(r){return this.filter(Ws(Te(r)))},qe.prototype.slice=function(r,i){r=We(r);var d=this;return d.__filtered__&&(r>0||i<0)?new qe(d):(r<0?d=d.takeRight(-r):r&&(d=d.drop(r)),i!==o&&(i=We(i),d=i<0?d.dropRight(-i):d.take(i-r)),d)},qe.prototype.takeRightWhile=function(r){return this.reverse().takeWhile(r).reverse()},qe.prototype.toArray=function(){return this.take(ye)},tn(qe.prototype,function(r,i){var d=/^(?:filter|find|map|reject)|While$/.test(i),m=/^(?:head|last)$/.test(i),k=A[m?"take"+(i=="last"?"Right":""):i],x=m||/^find/.test(i);k&&(A.prototype[i]=function(){var L=this.__wrapped__,R=m?[1]:arguments,H=L instanceof qe,oe=R[0],ee=H||Fe(L),le=function(st){var Ke=k.apply(A,Nn([st],R));return m&&be?Ke[0]:Ke};ee&&d&&typeof oe=="function"&&oe.length!=1&&(H=ee=!1);var be=this.__chain__,ke=!!this.__actions__.length,Ce=x&&!be,Be=H&&!ke;if(!x&&ee){L=Be?L:new qe(this);var Oe=r.apply(L,R);return Oe.__actions__.push({func:Ns,args:[le],thisArg:o}),new $r(Oe,be)}return Ce&&Be?r.apply(this,R):(Oe=this.thru(le),Ce?m?Oe.value()[0]:Oe.value():Oe)})}),yr(["pop","push","shift","sort","splice","unshift"],function(r){var i=us[r],d=/^(?:push|sort|unshift)$/.test(r)?"tap":"thru",m=/^(?:pop|shift)$/.test(r);A.prototype[r]=function(){var k=arguments;if(m&&!this.__chain__){var x=this.value();return i.apply(Fe(x)?x:[],k)}return this[d](function(L){return i.apply(Fe(L)?L:[],k)})}}),tn(qe.prototype,function(r,i){var d=A[i];if(d){var m=d.name+"";rt.call(ti,m)||(ti[m]=[]),ti[m].push({name:i,func:d})}}),ti[Ls(o,C).name]=[{name:"wrapper",func:o}],qe.prototype.clone=Y_,qe.prototype.reverse=X_,qe.prototype.value=J_,A.prototype.at=xE,A.prototype.chain=IE,A.prototype.commit=CE,A.prototype.next=OE,A.prototype.plant=LE,A.prototype.reverse=PE,A.prototype.toJSON=A.prototype.valueOf=A.prototype.value=RE,A.prototype.first=A.prototype.head,Ui&&(A.prototype[Ui]=TE),A})();typeof define=="function"&&typeof define.amd=="object"&&define.amd?(Bt._=Fn,define(function(){return Fn})):ho?((ho.exports=Fn)._=Fn,Bc._=Fn):Bt._=Fn}).call(n)})),xe=ia(pp(),1);function Zs(e){return xe.default.isEmpty(e)||xe.default.isNil(e)}function Ar(e){return Zs(e)||e===!1||e===0}function Ud(e){return"listImages"in e&&!Ar(e.listImages)}function Vd(e){return"listPages"in e&&!Ar(e.listPages)}function mp(e){return"bruteForce"in e&&!Ar(e.bruteForce)}var $e=(function(e){return e.ENGLISH="English",e.SPANISH="Spanish",e.PORTUGUESE="Portuguese",e.CHINESE="Chinese",e.RAW="Raw",e})({}),ze=(function(e){return e.MANGA="manga",e.COMIC="comic",e.HENTAI="hentai",e})({});function gp(e,t){return t in e}var vp={name:["3Hentai","HentaiVox"],url:/https?:\/\/(www|es|fr|it|pt|ru)?\.?(3hentai|hentaivox).(net|com)\/(d|view)\/.+\/.+/,homepage:["https://3hentai.net/","https://hentaivox.com/"],language:[$e.ENGLISH],category:ze.HENTAI,waitVar:"readerPages",run(){return{title:unsafeWindow.readerPages.title.replace(/- Page.+/,"").trim(),series:unsafeWindow.readerPages.baseUri.replace("%s",""),pages:unsafeWindow.readerPages.lastPage,prev:"#",next:"#",listImages:xe.default.keys(unsafeWindow.readerPages.pages).map(e=>unsafeWindow.readerPages.baseUriImg.replace("%s",unsafeWindow.readerPages.pages[e].f))}}},bp=Sr(((e,t,n)=>{(function(o,a){typeof e=="object"&&typeof t=="object"?t.exports=a():typeof define=="function"&&define.amd?define([],a):typeof e=="object"?e.bowser=a():o.bowser=a()})(n,(function(){return(function(o){var a={};function s(c){if(a[c])return a[c].exports;var l=a[c]={i:c,l:!1,exports:{}};return o[c].call(l.exports,l,l.exports,s),l.l=!0,l.exports}return s.m=o,s.c=a,s.d=function(c,l,h){s.o(c,l)||Object.defineProperty(c,l,{enumerable:!0,get:h})},s.r=function(c){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(c,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(c,"__esModule",{value:!0})},s.t=function(c,l){if(1&l&&(c=s(c)),8&l||4&l&&typeof c=="object"&&c&&c.__esModule)return c;var h=Object.create(null);if(s.r(h),Object.defineProperty(h,"default",{enumerable:!0,value:c}),2&l&&typeof c!="string")for(var u in c)s.d(h,u,function(f){return c[f]}.bind(null,u));return h},s.n=function(c){var l=c&&c.__esModule?function(){return c.default}:function(){return c};return s.d(l,"a",l),l},s.o=function(c,l){return Object.prototype.hasOwnProperty.call(c,l)},s.p="",s(s.s=90)})({17:function(o,a,s){"use strict";a.__esModule=!0,a.default=void 0;var c=s(18);a.default=(function(){function l(){}return l.getFirstMatch=function(h,u){var f=u.match(h);return f&&f.length>0&&f[1]||""},l.getSecondMatch=function(h,u){var f=u.match(h);return f&&f.length>1&&f[2]||""},l.matchAndReturnConst=function(h,u,f){if(h.test(u))return f},l.getWindowsVersionName=function(h){switch(h){case"NT":return"NT";case"XP":return"XP";case"NT 5.0":return"2000";case"NT 5.1":return"XP";case"NT 5.2":return"2003";case"NT 6.0":return"Vista";case"NT 6.1":return"7";case"NT 6.2":return"8";case"NT 6.3":return"8.1";case"NT 10.0":return"10";default:return}},l.getMacOSVersionName=function(h){var u=h.split(".").splice(0,2).map((function(_){return parseInt(_,10)||0}));u.push(0);var f=u[0],p=u[1];if(f===10)switch(p){case 5:return"Leopard";case 6:return"Snow Leopard";case 7:return"Lion";case 8:return"Mountain Lion";case 9:return"Mavericks";case 10:return"Yosemite";case 11:return"El Capitan";case 12:return"Sierra";case 13:return"High Sierra";case 14:return"Mojave";case 15:return"Catalina";default:return}switch(f){case 11:return"Big Sur";case 12:return"Monterey";case 13:return"Ventura";case 14:return"Sonoma";case 15:return"Sequoia";default:return}},l.getAndroidVersionName=function(h){var u=h.split(".").splice(0,2).map((function(f){return parseInt(f,10)||0}));if(u.push(0),!(u[0]===1&&u[1]<5))return u[0]===1&&u[1]<6?"Cupcake":u[0]===1&&u[1]>=6?"Donut":u[0]===2&&u[1]<2?"Eclair":u[0]===2&&u[1]===2?"Froyo":u[0]===2&&u[1]>2?"Gingerbread":u[0]===3?"Honeycomb":u[0]===4&&u[1]<1?"Ice Cream Sandwich":u[0]===4&&u[1]<4?"Jelly Bean":u[0]===4&&u[1]>=4?"KitKat":u[0]===5?"Lollipop":u[0]===6?"Marshmallow":u[0]===7?"Nougat":u[0]===8?"Oreo":u[0]===9?"Pie":void 0},l.getVersionPrecision=function(h){return h.split(".").length},l.compareVersions=function(h,u,f){f===void 0&&(f=!1);var p=l.getVersionPrecision(h),_=l.getVersionPrecision(u),g=Math.max(p,_),b=0,w=l.map([h,u],(function(v){var E=g-l.getVersionPrecision(v),S=v+new Array(E+1).join(".0");return l.map(S.split("."),(function(C){return new Array(20-C.length).join("0")+C})).reverse()}));for(f&&(b=g-Math.min(p,_)),g-=1;g>=b;){if(w[0][g]>w[1][g])return 1;if(w[0][g]===w[1][g]){if(g===b)return 0;g-=1}else if(w[0][g]<w[1][g])return-1}},l.map=function(h,u){var f,p=[];if(Array.prototype.map)return Array.prototype.map.call(h,u);for(f=0;f<h.length;f+=1)p.push(u(h[f]));return p},l.find=function(h,u){var f,p;if(Array.prototype.find)return Array.prototype.find.call(h,u);for(f=0,p=h.length;f<p;f+=1){var _=h[f];if(u(_,f))return _}},l.assign=function(h){for(var u,f,p=h,_=arguments.length,g=new Array(_>1?_-1:0),b=1;b<_;b++)g[b-1]=arguments[b];if(Object.assign)return Object.assign.apply(Object,[h].concat(g));var w=function(){var v=g[u];typeof v=="object"&&v!==null&&Object.keys(v).forEach((function(E){p[E]=v[E]}))};for(u=0,f=g.length;u<f;u+=1)w();return h},l.getBrowserAlias=function(h){return c.BROWSER_ALIASES_MAP[h]},l.getBrowserTypeByAlias=function(h){return c.BROWSER_MAP[h]||""},l})(),o.exports=a.default},18:function(o,a,s){"use strict";a.__esModule=!0,a.ENGINE_MAP=a.OS_MAP=a.PLATFORMS_MAP=a.BROWSER_MAP=a.BROWSER_ALIASES_MAP=void 0,a.BROWSER_ALIASES_MAP={AmazonBot:"amazonbot","Amazon Silk":"amazon_silk","Android Browser":"android",BaiduSpider:"baiduspider",Bada:"bada",BingCrawler:"bingcrawler",Brave:"brave",BlackBerry:"blackberry","ChatGPT-User":"chatgpt_user",Chrome:"chrome",ClaudeBot:"claudebot",Chromium:"chromium",Diffbot:"diffbot",DuckDuckBot:"duckduckbot",DuckDuckGo:"duckduckgo",Electron:"electron",Epiphany:"epiphany",FacebookExternalHit:"facebookexternalhit",Firefox:"firefox",Focus:"focus",Generic:"generic","Google Search":"google_search",Googlebot:"googlebot",GPTBot:"gptbot","Internet Explorer":"ie",InternetArchiveCrawler:"internetarchivecrawler","K-Meleon":"k_meleon",LibreWolf:"librewolf",Linespider:"linespider",Maxthon:"maxthon","Meta-ExternalAds":"meta_externalads","Meta-ExternalAgent":"meta_externalagent","Meta-ExternalFetcher":"meta_externalfetcher","Meta-WebIndexer":"meta_webindexer","Microsoft Edge":"edge","MZ Browser":"mz","NAVER Whale Browser":"naver","OAI-SearchBot":"oai_searchbot",Omgilibot:"omgilibot",Opera:"opera","Opera Coast":"opera_coast","Pale Moon":"pale_moon",PerplexityBot:"perplexitybot","Perplexity-User":"perplexity_user",PhantomJS:"phantomjs",PingdomBot:"pingdombot",Puffin:"puffin",QQ:"qq",QQLite:"qqlite",QupZilla:"qupzilla",Roku:"roku",Safari:"safari",Sailfish:"sailfish","Samsung Internet for Android":"samsung_internet",SlackBot:"slackbot",SeaMonkey:"seamonkey",Sleipnir:"sleipnir","Sogou Browser":"sogou",Swing:"swing",Tizen:"tizen","UC Browser":"uc",Vivaldi:"vivaldi","WebOS Browser":"webos",WeChat:"wechat",YahooSlurp:"yahooslurp","Yandex Browser":"yandex",YandexBot:"yandexbot",YouBot:"youbot"},a.BROWSER_MAP={amazonbot:"AmazonBot",amazon_silk:"Amazon Silk",android:"Android Browser",baiduspider:"BaiduSpider",bada:"Bada",bingcrawler:"BingCrawler",blackberry:"BlackBerry",brave:"Brave",chatgpt_user:"ChatGPT-User",chrome:"Chrome",claudebot:"ClaudeBot",chromium:"Chromium",diffbot:"Diffbot",duckduckbot:"DuckDuckBot",duckduckgo:"DuckDuckGo",edge:"Microsoft Edge",electron:"Electron",epiphany:"Epiphany",facebookexternalhit:"FacebookExternalHit",firefox:"Firefox",focus:"Focus",generic:"Generic",google_search:"Google Search",googlebot:"Googlebot",gptbot:"GPTBot",ie:"Internet Explorer",internetarchivecrawler:"InternetArchiveCrawler",k_meleon:"K-Meleon",librewolf:"LibreWolf",linespider:"Linespider",maxthon:"Maxthon",meta_externalads:"Meta-ExternalAds",meta_externalagent:"Meta-ExternalAgent",meta_externalfetcher:"Meta-ExternalFetcher",meta_webindexer:"Meta-WebIndexer",mz:"MZ Browser",naver:"NAVER Whale Browser",oai_searchbot:"OAI-SearchBot",omgilibot:"Omgilibot",opera:"Opera",opera_coast:"Opera Coast",pale_moon:"Pale Moon",perplexitybot:"PerplexityBot",perplexity_user:"Perplexity-User",phantomjs:"PhantomJS",pingdombot:"PingdomBot",puffin:"Puffin",qq:"QQ Browser",qqlite:"QQ Browser Lite",qupzilla:"QupZilla",roku:"Roku",safari:"Safari",sailfish:"Sailfish",samsung_internet:"Samsung Internet for Android",seamonkey:"SeaMonkey",slackbot:"SlackBot",sleipnir:"Sleipnir",sogou:"Sogou Browser",swing:"Swing",tizen:"Tizen",uc:"UC Browser",vivaldi:"Vivaldi",webos:"WebOS Browser",wechat:"WeChat",yahooslurp:"YahooSlurp",yandex:"Yandex Browser",yandexbot:"YandexBot",youbot:"YouBot"},a.PLATFORMS_MAP={bot:"bot",desktop:"desktop",mobile:"mobile",tablet:"tablet",tv:"tv"},a.OS_MAP={Android:"Android",Bada:"Bada",BlackBerry:"BlackBerry",ChromeOS:"Chrome OS",HarmonyOS:"HarmonyOS",iOS:"iOS",Linux:"Linux",MacOS:"macOS",PlayStation4:"PlayStation 4",Roku:"Roku",Tizen:"Tizen",WebOS:"WebOS",Windows:"Windows",WindowsPhone:"Windows Phone"},a.ENGINE_MAP={Blink:"Blink",EdgeHTML:"EdgeHTML",Gecko:"Gecko",Presto:"Presto",Trident:"Trident",WebKit:"WebKit"}},90:function(o,a,s){"use strict";a.__esModule=!0,a.default=void 0;var c,l=(c=s(91))&&c.__esModule?c:{default:c},h=s(18);function u(f,p){for(var _=0;_<p.length;_++){var g=p[_];g.enumerable=g.enumerable||!1,g.configurable=!0,"value"in g&&(g.writable=!0),Object.defineProperty(f,g.key,g)}}a.default=(function(){function f(){}var p,_,g;return f.getParser=function(b,w,v){if(w===void 0&&(w=!1),v===void 0&&(v=null),typeof b!="string")throw new Error("UserAgent should be a string");return new l.default(b,w,v)},f.parse=function(b,w){return w===void 0&&(w=null),new l.default(b,w).getResult()},p=f,g=[{key:"BROWSER_MAP",get:function(){return h.BROWSER_MAP}},{key:"ENGINE_MAP",get:function(){return h.ENGINE_MAP}},{key:"OS_MAP",get:function(){return h.OS_MAP}},{key:"PLATFORMS_MAP",get:function(){return h.PLATFORMS_MAP}}],(_=null)&&u(p.prototype,_),g&&u(p,g),f})(),o.exports=a.default},91:function(o,a,s){"use strict";a.__esModule=!0,a.default=void 0;var c=p(s(92)),l=p(s(93)),h=p(s(94)),u=p(s(95)),f=p(s(17));function p(_){return _&&_.__esModule?_:{default:_}}a.default=(function(){function _(b,w,v){if(w===void 0&&(w=!1),v===void 0&&(v=null),b==null||b==="")throw new Error("UserAgent parameter can't be empty");this._ua=b;var E=!1;typeof w=="boolean"?(E=w,this._hints=v):this._hints=w!=null&&typeof w=="object"?w:null,this.parsedResult={},E!==!0&&this.parse()}var g=_.prototype;return g.getHints=function(){return this._hints},g.hasBrand=function(b){if(!this._hints||!Array.isArray(this._hints.brands))return!1;var w=b.toLowerCase();return this._hints.brands.some((function(v){return v.brand&&v.brand.toLowerCase()===w}))},g.getBrandVersion=function(b){if(this._hints&&Array.isArray(this._hints.brands)){var w=b.toLowerCase(),v=this._hints.brands.find((function(E){return E.brand&&E.brand.toLowerCase()===w}));return v?v.version:void 0}},g.getUA=function(){return this._ua},g.test=function(b){return b.test(this._ua)},g.parseBrowser=function(){var b=this;this.parsedResult.browser={};var w=f.default.find(c.default,(function(v){if(typeof v.test=="function")return v.test(b);if(Array.isArray(v.test))return v.test.some((function(E){return b.test(E)}));throw new Error("Browser's test function is not valid")}));return w&&(this.parsedResult.browser=w.describe(this.getUA(),this)),this.parsedResult.browser},g.getBrowser=function(){return this.parsedResult.browser?this.parsedResult.browser:this.parseBrowser()},g.getBrowserName=function(b){return b?String(this.getBrowser().name).toLowerCase()||"":this.getBrowser().name||""},g.getBrowserVersion=function(){return this.getBrowser().version},g.getOS=function(){return this.parsedResult.os?this.parsedResult.os:this.parseOS()},g.parseOS=function(){var b=this;this.parsedResult.os={};var w=f.default.find(l.default,(function(v){if(typeof v.test=="function")return v.test(b);if(Array.isArray(v.test))return v.test.some((function(E){return b.test(E)}));throw new Error("Browser's test function is not valid")}));return w&&(this.parsedResult.os=w.describe(this.getUA())),this.parsedResult.os},g.getOSName=function(b){var w=this.getOS().name;return b?String(w).toLowerCase()||"":w||""},g.getOSVersion=function(){return this.getOS().version},g.getPlatform=function(){return this.parsedResult.platform?this.parsedResult.platform:this.parsePlatform()},g.getPlatformType=function(b){b===void 0&&(b=!1);var w=this.getPlatform().type;return b?String(w).toLowerCase()||"":w||""},g.parsePlatform=function(){var b=this;this.parsedResult.platform={};var w=f.default.find(h.default,(function(v){if(typeof v.test=="function")return v.test(b);if(Array.isArray(v.test))return v.test.some((function(E){return b.test(E)}));throw new Error("Browser's test function is not valid")}));return w&&(this.parsedResult.platform=w.describe(this.getUA())),this.parsedResult.platform},g.getEngine=function(){return this.parsedResult.engine?this.parsedResult.engine:this.parseEngine()},g.getEngineName=function(b){return b?String(this.getEngine().name).toLowerCase()||"":this.getEngine().name||""},g.parseEngine=function(){var b=this;this.parsedResult.engine={};var w=f.default.find(u.default,(function(v){if(typeof v.test=="function")return v.test(b);if(Array.isArray(v.test))return v.test.some((function(E){return b.test(E)}));throw new Error("Browser's test function is not valid")}));return w&&(this.parsedResult.engine=w.describe(this.getUA())),this.parsedResult.engine},g.parse=function(){return this.parseBrowser(),this.parseOS(),this.parsePlatform(),this.parseEngine(),this},g.getResult=function(){return f.default.assign({},this.parsedResult)},g.satisfies=function(b){var w=this,v={},E=0,S={},C=0;if(Object.keys(b).forEach((function(ge){var P=b[ge];typeof P=="string"?(S[ge]=P,C+=1):typeof P=="object"&&(v[ge]=P,E+=1)})),E>0){var T=Object.keys(v),$=f.default.find(T,(function(ge){return w.isOS(ge)}));if($){var K=this.satisfies(v[$]);if(K!==void 0)return K}var W=f.default.find(T,(function(ge){return w.isPlatform(ge)}));if(W){var ne=this.satisfies(v[W]);if(ne!==void 0)return ne}}if(C>0){var N=Object.keys(S),pe=f.default.find(N,(function(ge){return w.isBrowser(ge,!0)}));if(pe!==void 0)return this.compareVersion(S[pe])}},g.isBrowser=function(b,w){w===void 0&&(w=!1);var v=this.getBrowserName().toLowerCase(),E=b.toLowerCase(),S=f.default.getBrowserTypeByAlias(E);return w&&S&&(E=S.toLowerCase()),E===v},g.compareVersion=function(b){var w=[0],v=b,E=!1,S=this.getBrowserVersion();if(typeof S=="string")return b[0]===">"||b[0]==="<"?(v=b.substr(1),b[1]==="="?(E=!0,v=b.substr(2)):w=[],b[0]===">"?w.push(1):w.push(-1)):b[0]==="="?v=b.substr(1):b[0]==="~"&&(E=!0,v=b.substr(1)),w.indexOf(f.default.compareVersions(S,v,E))>-1},g.isOS=function(b){return this.getOSName(!0)===String(b).toLowerCase()},g.isPlatform=function(b){return this.getPlatformType(!0)===String(b).toLowerCase()},g.isEngine=function(b){return this.getEngineName(!0)===String(b).toLowerCase()},g.is=function(b,w){return w===void 0&&(w=!1),this.isBrowser(b,w)||this.isOS(b)||this.isPlatform(b)},g.some=function(b){var w=this;return b===void 0&&(b=[]),b.some((function(v){return w.is(v)}))},_})(),o.exports=a.default},92:function(o,a,s){"use strict";a.__esModule=!0,a.default=void 0;var c,l=(c=s(17))&&c.__esModule?c:{default:c},h=/version\/(\d+(\.?_?\d+)+)/i;a.default=[{test:[/gptbot/i],describe:function(u){var f={name:"GPTBot"},p=l.default.getFirstMatch(/gptbot\/(\d+(\.\d+)+)/i,u)||l.default.getFirstMatch(h,u);return p&&(f.version=p),f}},{test:[/chatgpt-user/i],describe:function(u){var f={name:"ChatGPT-User"},p=l.default.getFirstMatch(/chatgpt-user\/(\d+(\.\d+)+)/i,u)||l.default.getFirstMatch(h,u);return p&&(f.version=p),f}},{test:[/oai-searchbot/i],describe:function(u){var f={name:"OAI-SearchBot"},p=l.default.getFirstMatch(/oai-searchbot\/(\d+(\.\d+)+)/i,u)||l.default.getFirstMatch(h,u);return p&&(f.version=p),f}},{test:[/claudebot/i,/claude-web/i,/claude-user/i,/claude-searchbot/i],describe:function(u){var f={name:"ClaudeBot"},p=l.default.getFirstMatch(/(?:claudebot|claude-web|claude-user|claude-searchbot)\/(\d+(\.\d+)+)/i,u)||l.default.getFirstMatch(h,u);return p&&(f.version=p),f}},{test:[/omgilibot/i,/webzio-extended/i],describe:function(u){var f={name:"Omgilibot"},p=l.default.getFirstMatch(/(?:omgilibot|webzio-extended)\/(\d+(\.\d+)+)/i,u)||l.default.getFirstMatch(h,u);return p&&(f.version=p),f}},{test:[/diffbot/i],describe:function(u){var f={name:"Diffbot"},p=l.default.getFirstMatch(/diffbot\/(\d+(\.\d+)+)/i,u)||l.default.getFirstMatch(h,u);return p&&(f.version=p),f}},{test:[/perplexitybot/i],describe:function(u){var f={name:"PerplexityBot"},p=l.default.getFirstMatch(/perplexitybot\/(\d+(\.\d+)+)/i,u)||l.default.getFirstMatch(h,u);return p&&(f.version=p),f}},{test:[/perplexity-user/i],describe:function(u){var f={name:"Perplexity-User"},p=l.default.getFirstMatch(/perplexity-user\/(\d+(\.\d+)+)/i,u)||l.default.getFirstMatch(h,u);return p&&(f.version=p),f}},{test:[/youbot/i],describe:function(u){var f={name:"YouBot"},p=l.default.getFirstMatch(/youbot\/(\d+(\.\d+)+)/i,u)||l.default.getFirstMatch(h,u);return p&&(f.version=p),f}},{test:[/meta-webindexer/i],describe:function(u){var f={name:"Meta-WebIndexer"},p=l.default.getFirstMatch(/meta-webindexer\/(\d+(\.\d+)+)/i,u)||l.default.getFirstMatch(h,u);return p&&(f.version=p),f}},{test:[/meta-externalads/i],describe:function(u){var f={name:"Meta-ExternalAds"},p=l.default.getFirstMatch(/meta-externalads\/(\d+(\.\d+)+)/i,u)||l.default.getFirstMatch(h,u);return p&&(f.version=p),f}},{test:[/meta-externalagent/i],describe:function(u){var f={name:"Meta-ExternalAgent"},p=l.default.getFirstMatch(/meta-externalagent\/(\d+(\.\d+)+)/i,u)||l.default.getFirstMatch(h,u);return p&&(f.version=p),f}},{test:[/meta-externalfetcher/i],describe:function(u){var f={name:"Meta-ExternalFetcher"},p=l.default.getFirstMatch(/meta-externalfetcher\/(\d+(\.\d+)+)/i,u)||l.default.getFirstMatch(h,u);return p&&(f.version=p),f}},{test:[/googlebot/i],describe:function(u){var f={name:"Googlebot"},p=l.default.getFirstMatch(/googlebot\/(\d+(\.\d+))/i,u)||l.default.getFirstMatch(h,u);return p&&(f.version=p),f}},{test:[/linespider/i],describe:function(u){var f={name:"Linespider"},p=l.default.getFirstMatch(/(?:linespider)(?:-[-\w]+)?[\s/](\d+(\.\d+)+)/i,u)||l.default.getFirstMatch(h,u);return p&&(f.version=p),f}},{test:[/amazonbot/i],describe:function(u){var f={name:"AmazonBot"},p=l.default.getFirstMatch(/amazonbot\/(\d+(\.\d+)+)/i,u)||l.default.getFirstMatch(h,u);return p&&(f.version=p),f}},{test:[/bingbot/i],describe:function(u){var f={name:"BingCrawler"},p=l.default.getFirstMatch(/bingbot\/(\d+(\.\d+)+)/i,u)||l.default.getFirstMatch(h,u);return p&&(f.version=p),f}},{test:[/baiduspider/i],describe:function(u){var f={name:"BaiduSpider"},p=l.default.getFirstMatch(/baiduspider\/(\d+(\.\d+)+)/i,u)||l.default.getFirstMatch(h,u);return p&&(f.version=p),f}},{test:[/duckduckbot/i],describe:function(u){var f={name:"DuckDuckBot"},p=l.default.getFirstMatch(/duckduckbot\/(\d+(\.\d+)+)/i,u)||l.default.getFirstMatch(h,u);return p&&(f.version=p),f}},{test:[/ia_archiver/i],describe:function(u){var f={name:"InternetArchiveCrawler"},p=l.default.getFirstMatch(/ia_archiver\/(\d+(\.\d+)+)/i,u)||l.default.getFirstMatch(h,u);return p&&(f.version=p),f}},{test:[/facebookexternalhit/i,/facebookcatalog/i],describe:function(){return{name:"FacebookExternalHit"}}},{test:[/slackbot/i,/slack-imgProxy/i],describe:function(u){var f={name:"SlackBot"},p=l.default.getFirstMatch(/(?:slackbot|slack-imgproxy)(?:-[-\w]+)?[\s/](\d+(\.\d+)+)/i,u)||l.default.getFirstMatch(h,u);return p&&(f.version=p),f}},{test:[/yahoo!?[\s/]*slurp/i],describe:function(){return{name:"YahooSlurp"}}},{test:[/yandexbot/i,/yandexmobilebot/i],describe:function(){return{name:"YandexBot"}}},{test:[/pingdom/i],describe:function(){return{name:"PingdomBot"}}},{test:[/opera/i],describe:function(u){var f={name:"Opera"},p=l.default.getFirstMatch(h,u)||l.default.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i,u);return p&&(f.version=p),f}},{test:[/opr\/|opios/i],describe:function(u){var f={name:"Opera"},p=l.default.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i,u)||l.default.getFirstMatch(h,u);return p&&(f.version=p),f}},{test:[/SamsungBrowser/i],describe:function(u){var f={name:"Samsung Internet for Android"},p=l.default.getFirstMatch(h,u)||l.default.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i,u);return p&&(f.version=p),f}},{test:[/Whale/i],describe:function(u){var f={name:"NAVER Whale Browser"},p=l.default.getFirstMatch(h,u)||l.default.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i,u);return p&&(f.version=p),f}},{test:[/PaleMoon/i],describe:function(u){var f={name:"Pale Moon"},p=l.default.getFirstMatch(h,u)||l.default.getFirstMatch(/(?:PaleMoon)[\s/](\d+(?:\.\d+)+)/i,u);return p&&(f.version=p),f}},{test:[/MZBrowser/i],describe:function(u){var f={name:"MZ Browser"},p=l.default.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i,u)||l.default.getFirstMatch(h,u);return p&&(f.version=p),f}},{test:[/focus/i],describe:function(u){var f={name:"Focus"},p=l.default.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i,u)||l.default.getFirstMatch(h,u);return p&&(f.version=p),f}},{test:[/swing/i],describe:function(u){var f={name:"Swing"},p=l.default.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i,u)||l.default.getFirstMatch(h,u);return p&&(f.version=p),f}},{test:[/coast/i],describe:function(u){var f={name:"Opera Coast"},p=l.default.getFirstMatch(h,u)||l.default.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i,u);return p&&(f.version=p),f}},{test:[/opt\/\d+(?:.?_?\d+)+/i],describe:function(u){var f={name:"Opera Touch"},p=l.default.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i,u)||l.default.getFirstMatch(h,u);return p&&(f.version=p),f}},{test:[/yabrowser/i],describe:function(u){var f={name:"Yandex Browser"},p=l.default.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i,u)||l.default.getFirstMatch(h,u);return p&&(f.version=p),f}},{test:[/ucbrowser/i],describe:function(u){var f={name:"UC Browser"},p=l.default.getFirstMatch(h,u)||l.default.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i,u);return p&&(f.version=p),f}},{test:[/Maxthon|mxios/i],describe:function(u){var f={name:"Maxthon"},p=l.default.getFirstMatch(h,u)||l.default.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i,u);return p&&(f.version=p),f}},{test:[/epiphany/i],describe:function(u){var f={name:"Epiphany"},p=l.default.getFirstMatch(h,u)||l.default.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i,u);return p&&(f.version=p),f}},{test:[/puffin/i],describe:function(u){var f={name:"Puffin"},p=l.default.getFirstMatch(h,u)||l.default.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i,u);return p&&(f.version=p),f}},{test:[/sleipnir/i],describe:function(u){var f={name:"Sleipnir"},p=l.default.getFirstMatch(h,u)||l.default.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i,u);return p&&(f.version=p),f}},{test:[/k-meleon/i],describe:function(u){var f={name:"K-Meleon"},p=l.default.getFirstMatch(h,u)||l.default.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i,u);return p&&(f.version=p),f}},{test:[/micromessenger/i],describe:function(u){var f={name:"WeChat"},p=l.default.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i,u)||l.default.getFirstMatch(h,u);return p&&(f.version=p),f}},{test:[/qqbrowser/i],describe:function(u){var f={name:/qqbrowserlite/i.test(u)?"QQ Browser Lite":"QQ Browser"},p=l.default.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i,u)||l.default.getFirstMatch(h,u);return p&&(f.version=p),f}},{test:[/msie|trident/i],describe:function(u){var f={name:"Internet Explorer"},p=l.default.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i,u);return p&&(f.version=p),f}},{test:[/\sedg\//i],describe:function(u){var f={name:"Microsoft Edge"},p=l.default.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i,u);return p&&(f.version=p),f}},{test:[/edg([ea]|ios)/i],describe:function(u){var f={name:"Microsoft Edge"},p=l.default.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i,u);return p&&(f.version=p),f}},{test:[/vivaldi/i],describe:function(u){var f={name:"Vivaldi"},p=l.default.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i,u);return p&&(f.version=p),f}},{test:[/seamonkey/i],describe:function(u){var f={name:"SeaMonkey"},p=l.default.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i,u);return p&&(f.version=p),f}},{test:[/sailfish/i],describe:function(u){var f={name:"Sailfish"},p=l.default.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i,u);return p&&(f.version=p),f}},{test:[/silk/i],describe:function(u){var f={name:"Amazon Silk"},p=l.default.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i,u);return p&&(f.version=p),f}},{test:[/phantom/i],describe:function(u){var f={name:"PhantomJS"},p=l.default.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i,u);return p&&(f.version=p),f}},{test:[/slimerjs/i],describe:function(u){var f={name:"SlimerJS"},p=l.default.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i,u);return p&&(f.version=p),f}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe:function(u){var f={name:"BlackBerry"},p=l.default.getFirstMatch(h,u)||l.default.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i,u);return p&&(f.version=p),f}},{test:[/(web|hpw)[o0]s/i],describe:function(u){var f={name:"WebOS Browser"},p=l.default.getFirstMatch(h,u)||l.default.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i,u);return p&&(f.version=p),f}},{test:[/bada/i],describe:function(u){var f={name:"Bada"},p=l.default.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i,u);return p&&(f.version=p),f}},{test:[/tizen/i],describe:function(u){var f={name:"Tizen"},p=l.default.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i,u)||l.default.getFirstMatch(h,u);return p&&(f.version=p),f}},{test:[/qupzilla/i],describe:function(u){var f={name:"QupZilla"},p=l.default.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i,u)||l.default.getFirstMatch(h,u);return p&&(f.version=p),f}},{test:[/librewolf/i],describe:function(u){var f={name:"LibreWolf"},p=l.default.getFirstMatch(/(?:librewolf)[\s/](\d+(\.?_?\d+)+)/i,u);return p&&(f.version=p),f}},{test:[/firefox|iceweasel|fxios/i],describe:function(u){var f={name:"Firefox"},p=l.default.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i,u);return p&&(f.version=p),f}},{test:[/electron/i],describe:function(u){var f={name:"Electron"},p=l.default.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i,u);return p&&(f.version=p),f}},{test:[/sogoumobilebrowser/i,/metasr/i,/se 2\.[x]/i],describe:function(u){var f={name:"Sogou Browser"},p=l.default.getFirstMatch(/(?:sogoumobilebrowser)[\s/](\d+(\.?_?\d+)+)/i,u),_=l.default.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i,u),g=l.default.getFirstMatch(/se ([\d.]+)x/i,u),b=p||_||g;return b&&(f.version=b),f}},{test:[/MiuiBrowser/i],describe:function(u){var f={name:"Miui"},p=l.default.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i,u);return p&&(f.version=p),f}},{test:function(u){return!!u.hasBrand("DuckDuckGo")||u.test(/\sDdg\/[\d.]+$/i)},describe:function(u,f){var p={name:"DuckDuckGo"};if(f){var _=f.getBrandVersion("DuckDuckGo");if(_)return p.version=_,p}var g=l.default.getFirstMatch(/\sDdg\/([\d.]+)$/i,u);return g&&(p.version=g),p}},{test:function(u){return u.hasBrand("Brave")},describe:function(u,f){var p={name:"Brave"};if(f){var _=f.getBrandVersion("Brave");if(_)return p.version=_,p}return p}},{test:[/chromium/i],describe:function(u){var f={name:"Chromium"},p=l.default.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i,u)||l.default.getFirstMatch(h,u);return p&&(f.version=p),f}},{test:[/chrome|crios|crmo/i],describe:function(u){var f={name:"Chrome"},p=l.default.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i,u);return p&&(f.version=p),f}},{test:[/GSA/i],describe:function(u){var f={name:"Google Search"},p=l.default.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i,u);return p&&(f.version=p),f}},{test:function(u){var f=!u.test(/like android/i),p=u.test(/android/i);return f&&p},describe:function(u){var f={name:"Android Browser"},p=l.default.getFirstMatch(h,u);return p&&(f.version=p),f}},{test:[/playstation 4/i],describe:function(u){var f={name:"PlayStation 4"},p=l.default.getFirstMatch(h,u);return p&&(f.version=p),f}},{test:[/safari|applewebkit/i],describe:function(u){var f={name:"Safari"},p=l.default.getFirstMatch(h,u);return p&&(f.version=p),f}},{test:[/.*/i],describe:function(u){var f=u.search("\\(")!==-1?/^(.*)\/(.*)[ \t]\((.*)/:/^(.*)\/(.*) /;return{name:l.default.getFirstMatch(f,u),version:l.default.getSecondMatch(f,u)}}}],o.exports=a.default},93:function(o,a,s){"use strict";a.__esModule=!0,a.default=void 0;var c,l=(c=s(17))&&c.__esModule?c:{default:c},h=s(18);a.default=[{test:[/Roku\/DVP/],describe:function(u){var f=l.default.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i,u);return{name:h.OS_MAP.Roku,version:f}}},{test:[/windows phone/i],describe:function(u){var f=l.default.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i,u);return{name:h.OS_MAP.WindowsPhone,version:f}}},{test:[/windows /i],describe:function(u){var f=l.default.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i,u),p=l.default.getWindowsVersionName(f);return{name:h.OS_MAP.Windows,version:f,versionName:p}}},{test:[/Macintosh(.*?) FxiOS(.*?)\//],describe:function(u){var f={name:h.OS_MAP.iOS},p=l.default.getSecondMatch(/(Version\/)(\d[\d.]+)/,u);return p&&(f.version=p),f}},{test:[/macintosh/i],describe:function(u){var f=l.default.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i,u).replace(/[_\s]/g,"."),p=l.default.getMacOSVersionName(f),_={name:h.OS_MAP.MacOS,version:f};return p&&(_.versionName=p),_}},{test:[/(ipod|iphone|ipad)/i],describe:function(u){var f=l.default.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i,u).replace(/[_\s]/g,".");return{name:h.OS_MAP.iOS,version:f}}},{test:[/OpenHarmony/i],describe:function(u){var f=l.default.getFirstMatch(/OpenHarmony\s+(\d+(\.\d+)*)/i,u);return{name:h.OS_MAP.HarmonyOS,version:f}}},{test:function(u){var f=!u.test(/like android/i),p=u.test(/android/i);return f&&p},describe:function(u){var f=l.default.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i,u),p=l.default.getAndroidVersionName(f),_={name:h.OS_MAP.Android,version:f};return p&&(_.versionName=p),_}},{test:[/(web|hpw)[o0]s/i],describe:function(u){var f=l.default.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i,u),p={name:h.OS_MAP.WebOS};return f&&f.length&&(p.version=f),p}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe:function(u){var f=l.default.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i,u)||l.default.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i,u)||l.default.getFirstMatch(/\bbb(\d+)/i,u);return{name:h.OS_MAP.BlackBerry,version:f}}},{test:[/bada/i],describe:function(u){var f=l.default.getFirstMatch(/bada\/(\d+(\.\d+)*)/i,u);return{name:h.OS_MAP.Bada,version:f}}},{test:[/tizen/i],describe:function(u){var f=l.default.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i,u);return{name:h.OS_MAP.Tizen,version:f}}},{test:[/linux/i],describe:function(){return{name:h.OS_MAP.Linux}}},{test:[/CrOS/],describe:function(){return{name:h.OS_MAP.ChromeOS}}},{test:[/PlayStation 4/],describe:function(u){var f=l.default.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i,u);return{name:h.OS_MAP.PlayStation4,version:f}}}],o.exports=a.default},94:function(o,a,s){"use strict";a.__esModule=!0,a.default=void 0;var c,l=(c=s(17))&&c.__esModule?c:{default:c},h=s(18);a.default=[{test:[/googlebot/i],describe:function(){return{type:h.PLATFORMS_MAP.bot,vendor:"Google"}}},{test:[/linespider/i],describe:function(){return{type:h.PLATFORMS_MAP.bot,vendor:"Line"}}},{test:[/amazonbot/i],describe:function(){return{type:h.PLATFORMS_MAP.bot,vendor:"Amazon"}}},{test:[/gptbot/i],describe:function(){return{type:h.PLATFORMS_MAP.bot,vendor:"OpenAI"}}},{test:[/chatgpt-user/i],describe:function(){return{type:h.PLATFORMS_MAP.bot,vendor:"OpenAI"}}},{test:[/oai-searchbot/i],describe:function(){return{type:h.PLATFORMS_MAP.bot,vendor:"OpenAI"}}},{test:[/baiduspider/i],describe:function(){return{type:h.PLATFORMS_MAP.bot,vendor:"Baidu"}}},{test:[/bingbot/i],describe:function(){return{type:h.PLATFORMS_MAP.bot,vendor:"Bing"}}},{test:[/duckduckbot/i],describe:function(){return{type:h.PLATFORMS_MAP.bot,vendor:"DuckDuckGo"}}},{test:[/claudebot/i,/claude-web/i,/claude-user/i,/claude-searchbot/i],describe:function(){return{type:h.PLATFORMS_MAP.bot,vendor:"Anthropic"}}},{test:[/omgilibot/i,/webzio-extended/i],describe:function(){return{type:h.PLATFORMS_MAP.bot,vendor:"Webz.io"}}},{test:[/diffbot/i],describe:function(){return{type:h.PLATFORMS_MAP.bot,vendor:"Diffbot"}}},{test:[/perplexitybot/i],describe:function(){return{type:h.PLATFORMS_MAP.bot,vendor:"Perplexity AI"}}},{test:[/perplexity-user/i],describe:function(){return{type:h.PLATFORMS_MAP.bot,vendor:"Perplexity AI"}}},{test:[/youbot/i],describe:function(){return{type:h.PLATFORMS_MAP.bot,vendor:"You.com"}}},{test:[/ia_archiver/i],describe:function(){return{type:h.PLATFORMS_MAP.bot,vendor:"Internet Archive"}}},{test:[/meta-webindexer/i],describe:function(){return{type:h.PLATFORMS_MAP.bot,vendor:"Meta"}}},{test:[/meta-externalads/i],describe:function(){return{type:h.PLATFORMS_MAP.bot,vendor:"Meta"}}},{test:[/meta-externalagent/i],describe:function(){return{type:h.PLATFORMS_MAP.bot,vendor:"Meta"}}},{test:[/meta-externalfetcher/i],describe:function(){return{type:h.PLATFORMS_MAP.bot,vendor:"Meta"}}},{test:[/facebookexternalhit/i,/facebookcatalog/i],describe:function(){return{type:h.PLATFORMS_MAP.bot,vendor:"Meta"}}},{test:[/slackbot/i,/slack-imgProxy/i],describe:function(){return{type:h.PLATFORMS_MAP.bot,vendor:"Slack"}}},{test:[/yahoo/i],describe:function(){return{type:h.PLATFORMS_MAP.bot,vendor:"Yahoo"}}},{test:[/yandexbot/i,/yandexmobilebot/i],describe:function(){return{type:h.PLATFORMS_MAP.bot,vendor:"Yandex"}}},{test:[/pingdom/i],describe:function(){return{type:h.PLATFORMS_MAP.bot,vendor:"Pingdom"}}},{test:[/huawei/i],describe:function(u){var f=l.default.getFirstMatch(/(can-l01)/i,u)&&"Nova",p={type:h.PLATFORMS_MAP.mobile,vendor:"Huawei"};return f&&(p.model=f),p}},{test:[/nexus\s*(?:7|8|9|10).*/i],describe:function(){return{type:h.PLATFORMS_MAP.tablet,vendor:"Nexus"}}},{test:[/ipad/i],describe:function(){return{type:h.PLATFORMS_MAP.tablet,vendor:"Apple",model:"iPad"}}},{test:[/Macintosh(.*?) FxiOS(.*?)\//],describe:function(){return{type:h.PLATFORMS_MAP.tablet,vendor:"Apple",model:"iPad"}}},{test:[/kftt build/i],describe:function(){return{type:h.PLATFORMS_MAP.tablet,vendor:"Amazon",model:"Kindle Fire HD 7"}}},{test:[/silk/i],describe:function(){return{type:h.PLATFORMS_MAP.tablet,vendor:"Amazon"}}},{test:[/tablet(?! pc)/i],describe:function(){return{type:h.PLATFORMS_MAP.tablet}}},{test:function(u){var f=u.test(/ipod|iphone/i),p=u.test(/like (ipod|iphone)/i);return f&&!p},describe:function(u){var f=l.default.getFirstMatch(/(ipod|iphone)/i,u);return{type:h.PLATFORMS_MAP.mobile,vendor:"Apple",model:f}}},{test:[/nexus\s*[0-6].*/i,/galaxy nexus/i],describe:function(){return{type:h.PLATFORMS_MAP.mobile,vendor:"Nexus"}}},{test:[/Nokia/i],describe:function(u){var f=l.default.getFirstMatch(/Nokia\s+([0-9]+(\.[0-9]+)?)/i,u),p={type:h.PLATFORMS_MAP.mobile,vendor:"Nokia"};return f&&(p.model=f),p}},{test:[/[^-]mobi/i],describe:function(){return{type:h.PLATFORMS_MAP.mobile}}},{test:function(u){return u.getBrowserName(!0)==="blackberry"},describe:function(){return{type:h.PLATFORMS_MAP.mobile,vendor:"BlackBerry"}}},{test:function(u){return u.getBrowserName(!0)==="bada"},describe:function(){return{type:h.PLATFORMS_MAP.mobile}}},{test:function(u){return u.getBrowserName()==="windows phone"},describe:function(){return{type:h.PLATFORMS_MAP.mobile,vendor:"Microsoft"}}},{test:function(u){var f=Number(String(u.getOSVersion()).split(".")[0]);return u.getOSName(!0)==="android"&&f>=3},describe:function(){return{type:h.PLATFORMS_MAP.tablet}}},{test:function(u){return u.getOSName(!0)==="android"},describe:function(){return{type:h.PLATFORMS_MAP.mobile}}},{test:[/smart-?tv|smarttv/i],describe:function(){return{type:h.PLATFORMS_MAP.tv}}},{test:[/netcast/i],describe:function(){return{type:h.PLATFORMS_MAP.tv}}},{test:function(u){return u.getOSName(!0)==="macos"},describe:function(){return{type:h.PLATFORMS_MAP.desktop,vendor:"Apple"}}},{test:function(u){return u.getOSName(!0)==="windows"},describe:function(){return{type:h.PLATFORMS_MAP.desktop}}},{test:function(u){return u.getOSName(!0)==="linux"},describe:function(){return{type:h.PLATFORMS_MAP.desktop}}},{test:function(u){return u.getOSName(!0)==="playstation 4"},describe:function(){return{type:h.PLATFORMS_MAP.tv}}},{test:function(u){return u.getOSName(!0)==="roku"},describe:function(){return{type:h.PLATFORMS_MAP.tv}}}],o.exports=a.default},95:function(o,a,s){"use strict";a.__esModule=!0,a.default=void 0;var c,l=(c=s(17))&&c.__esModule?c:{default:c},h=s(18);a.default=[{test:function(u){return u.getBrowserName(!0)==="microsoft edge"},describe:function(u){if(/\sedg\//i.test(u))return{name:h.ENGINE_MAP.Blink};var f=l.default.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i,u);return{name:h.ENGINE_MAP.EdgeHTML,version:f}}},{test:[/trident/i],describe:function(u){var f={name:h.ENGINE_MAP.Trident},p=l.default.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i,u);return p&&(f.version=p),f}},{test:function(u){return u.test(/presto/i)},describe:function(u){var f={name:h.ENGINE_MAP.Presto},p=l.default.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i,u);return p&&(f.version=p),f}},{test:function(u){var f=u.test(/gecko/i),p=u.test(/like gecko/i);return f&&!p},describe:function(u){var f={name:h.ENGINE_MAP.Gecko},p=l.default.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i,u);return p&&(f.version=p),f}},{test:[/(apple)?webkit\/537\.36/i],describe:function(){return{name:h.ENGINE_MAP.Blink}}},{test:[/(apple)?webkit/i],describe:function(u){var f={name:h.ENGINE_MAP.WebKit},p=l.default.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i,u);return p&&(f.version=p),f}}],o.exports=a.default}})}))})),Zd=ia(bp(),1);function wp(e,t){typeof unsafeWindow<"u"&&(unsafeWindow[e]=t),typeof window<"u"&&(window[e]=t)}function Me(...e){return console.log("MangaOnlineViewer-adult-min: ",...e),e}function jt(...e){return["dev","development"].includes("adult-min")&&console.info("MangaOnlineViewer: ",...e),e}function jd(e){typeof GM_deleteValue<"u"?GM_deleteValue(e):jt("Fake Removing: ",e)}var js=typeof GM_info<"u"?GM_info:{scriptHandler:"Console",script:{name:"Debug",version:"Testing"}};function _p(e,t){return typeof GM_getValue<"u"?GM_getValue(e,t):(jt("Fake Getting: ",e," = ",t),t)}function qd(e,t){const n=_p(e,t);if(typeof n=="string"&&n.trim()!=="")try{return JSON.parse(n)}catch(o){return Me("Failed to parse JSON from storage",e,o),t}return n}function yp(e){return qd("settings",e)}function kp(e){return qd(window.location.hostname,e)}function Kd(e,t){return typeof GM_setValue<"u"?(GM_setValue(e,t),Me("Setting: ",e," = ",t),t.toString()):(jt("Fake Setting: ",e," = ",t),String(t))}function Ep(e){return Kd("settings",e)}function Yd(e){return Kd(window.location.hostname,e)}function Mp(){const e=Zd.default.getParser(window.navigator.userAgent).getBrowser();return`${e.name} ${e.version}`}function Sp(){return js.scriptHandler??"Greasemonkey"}var aa=()=>{const e=Zd.default.getParser(window.navigator.userAgent).getPlatformType(!0);return e==="mobile"||window.matchMedia("screen and (max-width: 600px)").matches?"mobile":e==="tablet"||window.matchMedia("screen and (max-width: 992px)").matches?"tablet":"desktop"},Ap=()=>aa()==="mobile"||aa()==="tablet",qs=()=>window.location.protocol==="file:"||window.location.pathname.endsWith("Manga_Local_Viewer.html"),Xd=(e,t="settings")=>{if(typeof GM_addValueChangeListener<"u")try{return GM_addValueChangeListener(t,(n,o,a,s)=>{s&&e(a)})}catch(n){Me("Failed to add settings listener",n)}};function xp(e,t=document.body){return new Promise(n=>{const o=document.querySelector(e);if(o){n(o);return}const a=new MutationObserver(()=>{const s=document.querySelector(e);s&&(n(s),a.disconnect())});a.observe(t,{childList:!0,subtree:!0,attributes:!0})})}function Ks(e,t=250){return new Promise(n=>{const o=setInterval(()=>{e()&&(clearInterval(o),n(!0))},t)})}function Jd(e,t,n=document.body){return new Promise(o=>{const a=n.querySelector(e);if(a?.getAttribute(t)){o(a.getAttribute(t)??"");return}const s=new MutationObserver(()=>{const c=n.querySelector(e);c?.getAttribute(t)&&(o(c.getAttribute(t)??""),s.disconnect())});s.observe(n,{childList:!0,subtree:!0,attributes:!0,attributeFilter:[t]})})}function Qd(e,t=document.body){return new Promise(n=>{if(!Ar(unsafeWindow[e])){n(unsafeWindow[e]);return}const o=new MutationObserver(()=>{Ar(unsafeWindow[e])||(n(unsafeWindow[e]),o.disconnect())});o.observe(t,{childList:!0,subtree:!0,attributes:!0})})}function Ip(e=1e3,t){return new Promise(n=>{setTimeout(()=>n(t),e)})}async function Cp(e,t=1e3){const[n]=await Promise.all([e,Ip(t)]);return n}async function Op(e,t=5e3){const n=new Promise((o,a)=>{setTimeout(()=>a(new Error(`Timeout after ${t} ms`)),t)});return Promise.race([e,n])}async function eu(e,t,n,o,a="img",s="src"){const c=document.createElement("div");c.setAttribute("style","height: 100vh;width: 100vw;position: fixed;top: 0;left: 0;z-index: 100000;background: white;opacity: 0.5;"),document.body.append(c),e();const l=document.querySelector(n),h=document.querySelector(o),u=[];for(let f=1;f<=t;f+=1)u[f-1]=await Cp(Jd(a,s,h??document.body),100),h?.querySelector(a)?.removeAttribute(s),l?.dispatchEvent(new Event("click"));return u}var Tp={name:["8Muses.com","8Muses.io"],obs:"Slow start, bruteforce may be required",url:/https?:\/\/(comics.)?8muses.(com|io)\/(comics\/)?picture\/.+/,homepage:["https://comics.8muses.com/","https://8muses.io/"],language:[$e.ENGLISH],category:ze.HENTAI,async run(){const e=unsafeWindow.link_images?.slice(1,unsafeWindow.link_images.length)??[],t=document.querySelector('link[rel="last"]')?.getAttribute("href")?.match(/\d+$/)?.at(0),n=e?.length??parseInt(t??"0",10),o={title:[...document.querySelectorAll(".top-menu-breadcrumb li:not(:last-child)")].map(a=>a?.textContent?.trim()).join("/"),series:document.querySelector(".top-menu-breadcrumb li:nth-last-child(2) a")?.getAttribute("href"),pages:n,prev:"#",next:"#",lazy:!1,timer:10,listImages:e,async before(){unsafeWindow.link_images?.length||(o.listImages=await eu(()=>{const a=document.querySelector(".page-prev");for(;document.querySelector(".c-dropdown-toggle")?.textContent?.match(/\d+/)?.at(0)!=="1";)a?.dispatchEvent(new Event("click"))},n,".page-next",".p-picture",".photo img","src"))}};return o}},Lp={name:"9Hentai",url:/https?:\/\/(www\.)?9hentai.(so)\/g\/.+\/.+/,homepage:"https://9hentai.so",language:[$e.ENGLISH],category:ze.HENTAI,waitAttr:["#jumpPageModal input","max"],async run(){const e={id:parseInt(/\d+/.exec(window.location.pathname)?.at(0)??"0",10)},t={method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}},n=await fetch("/api/getBookByID",t).then(async o=>o.json());return{title:n.results.title,series:`/g/${n.results.id}/`,pages:n.results.total_page,prev:"#",next:"#",listImages:Array(n.results.total_page).fill(0).map((o,a)=>`${n.results.image_server.replace(".com",".so")+n.results.id}/${a+1}.jpg`)}}},Pp={name:"AkumaMoe",url:/https?:\/\/(www\.)?akuma\.moe\/g\/.+\/.+/,homepage:"https://akuma.moe",language:[$e.RAW],category:ze.HENTAI,waitFunc:()=>unsafeWindow.img_lst?.length===document.querySelectorAll(".reader-nav:first-child .nav-select option")?.length,async run(){return{title:document.querySelector("h1.sr-only")?.textContent?.trim().replace(/^Reading /,""),series:`https://akuma.moe/g/${/\/g\/([^/]+)\//.exec(window.location.pathname)?.[1]}/`,pages:unsafeWindow.img_lst.length,prev:"#",next:"#",listImages:unsafeWindow.img_lst.map(e=>`${unsafeWindow.img_prt}/${e}`)}}},Rp={name:"BestPornComix",url:/https?:\/\/(www\.)?bestporncomix.com\/gallery\/.+/,homepage:"https://www.bestporncomix.com",language:[$e.ENGLISH],category:ze.HENTAI,waitTime:5e3,run(){const e=[...document.querySelectorAll("figure a")];return{title:document.querySelector("h1.entry-title")?.textContent?.trim(),pages:e.length,prev:"#",next:"#",listImages:e.map(t=>t.getAttribute("href")??"")}}},$p={name:"DoujinMoeNM",url:/https?:\/\/(www\.)?doujins.com\/.+/,homepage:"https://doujins.com/",language:[$e.ENGLISH],category:ze.HENTAI,waitEle:".doujin",run(){const e=[...document.querySelectorAll(".doujin")];return{title:document.querySelector(".folder-title a:last-child")?.textContent?.trim(),series:document.querySelector(".folder-title a:nth-last-child(2)")?.getAttribute("href"),pages:e.length,prev:"#",next:"#",listImages:e.map(t=>t.getAttribute("data-file")??"")}}},Dp={name:"Dragon Translation",url:/https?:\/\/(www\.)?dragontranslation.net\/leer\/.+/,homepage:"https://dragontranslation.net/es",language:[$e.SPANISH],category:ze.HENTAI,waitEle:"#chapter_imgs img",run(){const e=[...document.querySelectorAll("#chapter_imgs img")].map(t=>t.getAttribute("src")??"").filter(t=>t&&t!=="/discord2.jpg");return{title:document.querySelector("h1")?.textContent?.trim(),series:document.querySelector("h2 + div a")?.getAttribute("href"),pages:e.length,prev:document.querySelector(".fa-chevron-circle-left")?.parentElement?.getAttribute("href"),next:document.querySelector(".fa-chevron-circle-right")?.parentElement?.getAttribute("href"),listImages:e}}},Bp={name:["ExHentai","e-Hentai"],url:/https?:\/\/(g\.)?(exhentai|e-hentai).org\/s\/.+\/.+/,homepage:["https://exhentai.org/","https://e-hentai.org/"],language:[$e.ENGLISH],obs:"May get your IP Banned, use with moderation",category:ze.HENTAI,async run(){const e=parseInt(document.querySelector(".sn div span:nth-child(2)")?.textContent??"0",10),t=Math.ceil(e/20),n=document.querySelector(".sb a")?.getAttribute("href")?.replace(/\?p=\d+/,""),o=Array(t).fill(0).map(async(s,c)=>fetch(`${n}?p=${c}`).then(async l=>l.text()).then(l=>new DOMParser().parseFromString(l,"text/html"))),a=(await Promise.all(o)).flatMap(s=>[...s.querySelectorAll("#gdt a")].map(c=>c.getAttribute("href")??""));return{title:document.querySelector("#i1 h1")?.textContent?.trim(),series:n,pages:e,begin:parseInt(document.querySelector("div#i2 span")?.textContent??"1",10),prev:"#",next:"#",listPages:a,img:"#img",lazy:!0,async reload(s){const c=`${a[s-1]}`,l=await fetch(c).then(u=>u.text()).then(u=>/nl\('([\d-]+)'\)/.exec(u)?.[1]),h=`${c}${c.indexOf("?")?"&":"?"}nl=${l}`;return fetch(h).then(u=>u.text()).then(u=>new DOMParser()?.parseFromString(u,"text/html")?.querySelector("#img")?.getAttribute("src")??"")}}}},zp={name:"FreeAdultComix",url:/https?:\/\/(www\.)?freeadultcomix.com\/.+/,homepage:"https://www.freeadultcomix.com",language:[$e.ENGLISH],category:ze.HENTAI,waitTime:5e3,run(){const e=[...document.querySelectorAll("figure img")];return{title:document.querySelector(".post-conteudo h1")?.textContent?.trim(),pages:e.length,prev:"#",next:"#",listImages:e.map(t=>t.getAttribute("src")??"")}}},Np={name:"FSIComics",url:/https?:\/\/(www\.)?fsicomics.com\/.+/,homepage:"https://fsicomics.com/",language:[$e.ENGLISH],category:ze.HENTAI,run(){const e=[...document.querySelectorAll(".wp-block-gallery img")];return{title:document.querySelector(".s-title")?.textContent?.trim(),pages:e.length,prev:"#",next:"#",listImages:e.map(t=>t.getAttribute("data-large-file")??"")}}},Hp={name:"GNTAI.net",url:/https?:\/\/(www\.)?gntai.net\/(?!(category|tags|autores))[^/]+\/.+/,homepage:"https://www.gntai.net/",language:[$e.SPANISH],category:ze.HENTAI,run(){const e=document.querySelector("#main > script")?.innerHTML.match(/var pages = [^;]+/)?.at(0)?.toString().match(/https?[^"]+/g)??[];return{title:document.querySelector(".entry-header h1")?.textContent?.trim(),pages:e?.length,prev:"#",next:"#",listImages:e}}},Fp={name:"HDoujin",url:/https?:\/\/(www\.)?hdoujin\.org\/.+/,homepage:"https://hdoujin.org/",language:[$e.ENGLISH],category:ze.HENTAI,waitEle:"nav select option",async run(){const e=history.state.memo.gallery,t=e.resolution,{base:n,entries:o}=history.state.memo.data,a=o.map(s=>`${n}/${s.path}?w=${t}`);return{title:e.title,series:`/g/${e.id}/${e.key}/`,pages:a.length,prev:"#",next:"#",fetchOptions:{method:"GET",redirect:"follow"},listImages:a}}},Gp={name:"Hentai2Read",url:/https?:\/\/(www\.)?hentai2read.com\/[^/]+\/\d+(.\d+)?\//,homepage:"https://hentai2read.com/",language:[$e.ENGLISH],category:ze.HENTAI,run(){return{title:document.querySelector(".reader-left-text")?.textContent?.trim(),series:unsafeWindow.gData.mainURL,pages:unsafeWindow.gData.images.length,prev:unsafeWindow.gData.previousURL,next:unsafeWindow.gData.nextURL,listImages:unsafeWindow.gData.images.map(e=>`https://static.hentaicdn.com/hentai${e}`)}}},Wp={name:"HentaiEra",url:/https?:\/\/(www\.)?hentaiera.com\/view\/.+\/\d+\/?/,homepage:"https://hentaiera.com/",language:[$e.ENGLISH],category:ze.HENTAI,run(){const e=parseInt(document.querySelector(".total_pages")?.textContent??"0",10);return{title:document.querySelector("h1")?.textContent?.trim().replace(/ - Page .+$/,""),series:document.querySelector(".return_btn ")?.getAttribute("href"),pages:e,prev:"#",next:"#",listPages:Array(e).fill(0).map((t,n)=>window.location.href.replace(/\/\d*\/?$/,`/${n+1}`)),img:"#gimg",lazyAttr:"data-src"}}},Up={name:"HentaiForce",url:/https?:\/\/(www\.)?hentaiforce.net\/view\/.+\/\d+/,homepage:"https://hentaiforce.net/",language:[$e.ENGLISH],category:ze.HENTAI,run(){return{title:document.querySelector("h1")?.textContent?.trim().replace(/ - Page .+$/,""),series:document.querySelector(".reader-go-back ")?.getAttribute("href"),pages:unsafeWindow.readerPages.lastPage,prev:"#",next:"#",listImages:Array(unsafeWindow.readerPages.lastPage).fill(0).map((e,t)=>unsafeWindow.readerPages.baseUriImg.replace("%c",unsafeWindow.readerPages.pages[t+1].l).replace("%s",unsafeWindow.readerPages.pages[t+1].f))}}},Vp=/^blob:(.+?)\/(.+)$/;function Zp(e){return/^data:image\/(png|jpg|jpeg|gif|svg)/.test(e)}function jp(e){return Vp.test(e)}function tu(e){switch(e){case"p":return"png";case"b":return"bmp";case"g":return"gif";case"w":return"webp";default:return"jpg"}}var qp={name:"HentaiFox",url:/https?:\/\/(www\.)?hentaifox.com\/g\/.+/,homepage:"https://www.hentaifox.com/",language:[$e.ENGLISH],category:ze.HENTAI,waitVar:"g_th",waitFunc:()=>document.querySelector("#gimg")?.classList.contains("loaded")??!1,run(){const e=parseInt(document.querySelector(".total_pages")?.textContent??"",10),t=document.querySelector("#gimg")?.getAttribute("src")?.replace(/\d+.\w+$/,"")??"";return{title:document.querySelector("title")?.textContent?.replace(/ - Page .+/,"").trim(),series:document.querySelector(".browse_buttons a")?.getAttribute("href"),pages:e,prev:"#",next:"#",listImages:Array(e).fill(0).map((n,o)=>`${t+(o+1)}.${tu(unsafeWindow.g_th[o+1][0])}`)}}},Kp={name:["HentaiHand","nHentai.com"],url:/https?:\/\/(www\.)?(hentaihand|nhentai)\.com\/(?:[a-z]{2}\/)?(?:comic|reader)\/.+\/\d+/,homepage:["https://hentaihand.com/","https://nhentai.com/"],language:[$e.ENGLISH],category:ze.HENTAI,waitEle:".reader img, #reader img, .comic-page img, .page-image img, #image-container img, .pages-selector, .comic-title",async run(){const e=document.querySelector('.reader-header h5 a, .comic-title a, a.back-to-gallery, a.go-back, a[href*="/comic/"]')?.getAttribute("href")??window.location.href.replace(/\/\d+\/?$/,""),t=document.querySelector(".reader-header h5, .comic-title, h1.title, h1")?.textContent?.trim()??document.querySelector("title")?.textContent?.replace(/\s*-\s*Page.*$/i,"")?.trim(),n=[...document.querySelectorAll(".reader img, #reader img, .comic-page img, .page-image img, .reader-images img")];if(n.length>1)return{title:t,series:e,pages:n.length,prev:"#",next:"#",listImages:n.map(s=>s.getAttribute("data-src")??s.getAttribute("src")??"")};try{const s=e.startsWith("http")?e:`${window.location.origin}${e}`,c=await fetch(s).then(async u=>u.text()),l=new DOMParser().parseFromString(c,"text/html"),h=[...l.querySelectorAll(".comic-thumb, .gallery-thumb, .thumbnails > div, #thumbnail-container .thumb-container, .thumbs > div, .grid > div")];if(h.length>0){const u=h.map(f=>{const p=f.querySelector("img");return(p?.getAttribute("data-src")??p?.getAttribute("src")??"").replace(/\/thumb\//,"/image/").replace(/t\.([a-zA-Z0-9]+)$/,".$1")}).filter(f=>f.length>0);return{title:l.querySelector("h1.title, h1, .comic-title")?.textContent?.trim()??t,series:e,pages:u.length,prev:"#",next:"#",listImages:u}}}catch{}const o=document.querySelectorAll("select.pages-selector option, select.page-select option, .page-dropdown option").length||n.length||1,a=(n[0]?.getAttribute("data-src")??n[0]?.getAttribute("src")??document.querySelector("#image-container img, .reader img")?.getAttribute("src")??"").match(/^(.*\/)(0*1)(\.[a-zA-Z0-9]+)(?:\?.*)?$/);if(a&&o>1){const[,s,c,l]=a,h=c.length;return{title:t,series:e,pages:o,prev:"#",next:"#",listImages:Array.from({length:o},(u,f)=>`${s}${String(f+1).padStart(h,"0")}${l}`)}}return{title:t,series:e,pages:o,prev:"#",next:"#",listImages:n.map(s=>s.getAttribute("data-src")??s.getAttribute("src")??"")}}},Yp={name:"HentaIHere",url:/https?:\/\/(www\.)?hentaihere.com\/.+\/.+\/.+/,homepage:"https://www.hentaihere.com/",language:[$e.ENGLISH],category:ze.HENTAI,waitVar:"rff_imageList",run(){const e=document.querySelector("#arf-reader-img")?.getAttribute("src")?.replace(/\d.+/,"");return{title:unsafeWindow.rff_pageTitle.replace(/.+\|/,"").trim(),series:unsafeWindow.rff_thisManga,pages:unsafeWindow.rff_imageList.length,prev:unsafeWindow.rff_previousChapter,next:unsafeWindow.rff_nextChapter,listImages:unsafeWindow.rff_imageList.map(t=>e+t)}}},Xp={name:"HentaiNexus",url:/https?:\/\/(www\.)?hentainexus.com\/read\/.+/,homepage:"https://hentainexus.com/",language:[$e.ENGLISH],category:ze.HENTAI,waitVar:"pageData",run(){const e=unsafeWindow.pageData?.map(t=>t.image_avif??t.image_fallback??t.image);return{title:document.querySelector("title")?.textContent?.replace(/^\[[\d/]+\]/,"").trim(),series:document.querySelector("#returnGalleryFooter a")?.getAttribute("href"),pages:e.length,prev:"#",next:"#",listImages:e}}},Jp={name:"HenTalk",url:/https?:\/\/(www.)?hentalk.pw/,homepage:"https://hentalk.pw/",language:[$e.ENGLISH],category:ze.HENTAI,async run(){const e="https://hentalk.pw",t=await fetch(`${window.location.pathname}/__data.json?x-sveltekit-trailing-slash=1&x-sveltekit-invalidated=001`).then(async s=>s.json()).then(s=>s.nodes[2].data),n=t?.[t.find(s=>s?.gallery)?.gallery],o=t?.[n?.hash]||t?.[t.find(s=>s?.hash&&s?.id).hash],a=t?.[n.images].map(s=>t[s]).map(s=>t[s.filename]);return{title:t?.[n.title],series:window.location.href.replace(/read\/.+/,""),pages:a?.length,prev:"#",next:"#",listImages:a?.map(s=>`${e}/image/${o}/${s}`)}}},Qp={name:"Hitomi",url:/https?:\/\/hitomi.la\/reader\/.+/,homepage:"https://hitomi.la/",language:[$e.ENGLISH],category:ze.HENTAI,waitAttr:["#comicImages img","src"],waitVar:"galleryinfo",run(){return{title:document.querySelector("title")?.textContent?.replace("| Hitomi.la","").trim(),series:document.querySelector(".brand")?.getAttribute("href"),pages:unsafeWindow.galleryinfo.files.length,prev:"#",next:"#",listImages:unsafeWindow.galleryinfo.files.map(e=>unsafeWindow.url_from_url_from_hash(unsafeWindow.galleryinfo,e,"webp"))}}},em={name:"Imhentai",url:/https?:\/\/(www\.)?imhentai.xxx\/view\/.+\/.+\//,homepage:"https://imhentai.xxx/",language:[$e.ENGLISH],category:ze.HENTAI,waitVar:"g_th",async run(){const e=document.querySelector("#gallery_id")?.getAttribute("value"),t=document.querySelector("#image_dir")?.getAttribute("value"),n=parseInt(document.querySelector("#pages")?.getAttribute("value")??"",10),o=await Qd("random_server");return{title:document.querySelector("title")?.textContent?.trim(),series:document.querySelector(".return_btn")?.getAttribute("href"),pages:n,prev:"#",next:"#",listImages:Array(n).fill(0).map((a,s)=>`//${o}/${t}/${e}/${s+1}.${tu(unsafeWindow.g_th[s+1][0])}`)}}},tm={name:["KingComix","Chochox","Comics18"],url:/https?:\/\/(www\.)?(kingcomix|chochox|comics18).(com|org)\/.+/,homepage:["https://kingcomix.com/","https://chochox.com/porno/","https://comics18.org/"],language:[$e.ENGLISH,$e.SPANISH],category:ze.HENTAI,run(){const e=[...document.querySelectorAll("figure img, .entry-content img:not(a img), .wp-content img")];return{title:document.querySelector("h1.singleTitle-h1")?.textContent?.trim(),pages:e.length,prev:"#",next:"#",listImages:e.map(t=>t.getAttribute("data-src")??t.getAttribute("data-full-url")??t.getAttribute("data-lazy-src")??t.getAttribute("src")??"")}}},rm={name:"Luscious",url:/https?:\/\/(www\.)?luscious.net\/.+\/read\/.+/,homepage:"https://luscious.net/",language:[$e.ENGLISH],category:ze.HENTAI,waitEle:".album-info div",async run(){const e=parseInt(document.querySelector('input[name="page_number"] + span')?.textContent?.match(/\d+/)?.pop()??"0",10),t=Math.ceil(e/50),n=parseInt(document.querySelector(".album-heading a")?.getAttribute("href")?.match(/\d+\//)?.toString()??"0",10),o="&query=%20query%20PictureListInsideAlbum(%24input%3A%20PictureListInput!)%20%7B%20picture%20%7B%20list(input%3A%20%24input)%20%7B%20info%20%7B%20...FacetCollectionInfo%20%7D%20items%20%7B%20__typename%20id%20title%20description%20created%20like_status%20number_of_comments%20number_of_favorites%20moderation_status%20width%20height%20resolution%20aspect_ratio%20url_to_original%20url_to_video%20is_animated%20position%20permissions%20url%20tags%20%7B%20category%20text%20url%20%7D%20thumbnails%20%7B%20width%20height%20size%20url%20%7D%20%7D%20%7D%20%7D%20%7D%20fragment%20FacetCollectionInfo%20on%20FacetCollectionInfo%20%7B%20page%20has_next_page%20has_previous_page%20total_items%20total_pages%20items_per_page%20url_complete%20%7D%20",a=Array(t).fill(0).map(async(c,l)=>{const h=`https://apicdn.luscious.net/graphql/nobatch/?operationName=PictureListInsideAlbum&variables={"input":{"filters":[{"name":"album_id","value":"${n}"}],"display":"position","items_per_page":50,"page":${l+1}}}${o}`;return GM.xmlHttpRequest({method:"GET",url:h}).then(u=>JSON.parse(u.responseText))}),s=(await Promise.all(a)).flatMap(c=>c.data.picture.list.items.map(l=>l.url_to_original));return{title:document.querySelector(".album-heading a")?.textContent?.trim(),series:document.querySelector(".album-heading a")?.getAttribute("href"),pages:e,prev:"#",next:"#",listImages:s}}},ru=/^([\t\n])*(https?:\/\/)?.+\.(jpg|jpeg|png|gif|bmp|webp).*$/;function nu(){return[...document.querySelectorAll(".wp-manga-chapter-img, .blocks-gallery-item img, .reading-content img, #chapter-images img, #chapterContent img")].map(e=>{const t=[...e.attributes].filter(n=>/.*(src|url).*/i.test(n.name)&&!/^.*(blank|lazy|loading).*$/.test(n.value));return t.length===0?"":t.find(n=>ru.test(n.value))?.value??e?.getAttribute("src")??""})}var nm={name:["Madara WordPress Plugin","MangaHaus","Isekai Scan","Comic Kiba","Zinmanga","mangatx","Toonily","Mngazuki","JaiminisBox","DisasterScans","ManhuaPlus","TopManhua","NovelMic","Reset-Scans","LeviatanScans","Dragon Tea","SetsuScans","ToonGod","Hades Scans"],url:/https?:\/\/.+\/(manga|series|manhua|comic|ch|novel|webtoon|tmo)\/.+\/.+/,homepage:["https://mangabooth.com/","https://manhuaus.com","https://isekaiscan.com/","https://comickiba.com/","https://zinmanga.com/","https://mangatx.com/","https://toonily.net/","https://mangazuki.me/","https://jaiminisbox.net","https://disasterscans.com/","https://manhuaplus.org/","https://www.topmanhua.com/","https://novelmic.com/","https://reset-scans.com/","https://leviatanscans.com/","https://dragontea.ink/","https://setsuscans.com/","https://toongod.org/home/","https://lectorhades.latamtoon.com"],language:[$e.ENGLISH],obs:"Any Site that uses Madara WordPress Plugin",category:ze.MANGA,waitFunc:()=>{const e=nu();return e.length>0&&e.every(t=>t&&ru.test(t))},run(){const e=nu();return{title:document.querySelector("#chapter-heading")?.textContent?.trim(),series:(document.querySelector(".breadcrumb li:nth-child(3) a")??document.querySelector(".breadcrumb li:nth-child(2) a"))?.getAttribute("href"),pages:e.length,prev:document.querySelector(".prev_page")?.getAttribute("href"),next:document.querySelector(".next_page")?.getAttribute("href"),listImages:e}}},om={...nm,name:["Madara WordPress Plugin","AllPornComic","Manytoon","Manga District"],url:/https?:\/\/.+\/(porncomic|read-scan|title)\/.+\/.+/,homepage:["#","https://allporncomic.com/","https://manytoon.com/","https://mangadistrict.com/"],category:ze.HENTAI},im={name:"MultPorn",url:/https?:\/\/(www\.)?multporn.net\/(comics|hentai_manga)\/.+/,homepage:"https://multporn.net/",language:[$e.ENGLISH],category:ze.HENTAI,async run(){const e=/"configUrl":"(.+?)",/.exec(document.head.textContent)?.at(1)?.replaceAll("\\","")??"",t=[...(await fetch(e).then(async n=>n.text()).then(n=>new DOMParser().parseFromString(n,"text/xml"))).querySelectorAll("image")];return{title:document.querySelector("#page-title")?.textContent?.trim(),pages:t.length,prev:"#",next:"#",listImages:t.map(n=>n.getAttribute("imageURL")??"")}}},am={name:"MyHentaiGallery",url:/https?:\/\/(www\.)?myhentaigallery.com\/g\/.+\/\d+/,homepage:"https://www.myhentaigallery.com",language:[$e.ENGLISH],category:ze.HENTAI,run(){const e=document.getElementById("js__pagination__next")?.parentElement?.previousElementSibling?.querySelector("a"),t=parseInt(e?.textContent??"",10);return{title:document.querySelector("title")?.textContent?.trim(),series:document.querySelector(".back-to-gallery a")?.getAttribute("href"),pages:t,prev:"#",next:"#",listPages:Array(t).fill(0).map((n,o)=>window.location.href.replace(/\/\d+$/,`/${o+1}`)),img:".gallery-slide img"}}},sm={j:"jpg",p:"png",w:"webp",g:"gif"},lm={name:"nHentai.net",url:/https?:\/\/(www\.)?nhentai\.net\/g\/.+/,homepage:"https://nhentai.net/",language:[$e.ENGLISH],category:ze.HENTAI,waitEle:"#image-container img",async run(){const e=window.location.pathname.split("/")[2],t=document.querySelector(".go-back, .back_btn")?.getAttribute("href")??`/g/${e}/`,n=document.querySelector("title")?.textContent?.split("- Page")[0]?.trim()??"";try{const c=await fetch(`https://nhentai.net/api/gallery/${e}`).then(async l=>l.json());if(c?.media_id&&Array.isArray(c.images?.pages))return{title:c.title?.pretty??c.title?.english??n,series:t,pages:c.images.pages.length,prev:"#",next:"#",listImages:c.images.pages.map((l,h)=>`https://i.nhentai.net/galleries/${c.media_id}/${h+1}.${sm[l.t]||"jpg"}`)}}catch{}try{const c=await fetch("https://nhentai.net/api/v2/config").then(async h=>h.json()),l=await fetch(`https://nhentai.net/api/v2/galleries/${e}`).then(async h=>h.json());if(Array.isArray(l?.pages)&&Array.isArray(c?.image_servers))return{title:n,series:t,pages:l.pages.length,prev:"#",next:"#",listImages:l.pages.map(h=>`${c.image_servers[Math.floor(Math.random()*c.image_servers.length)]}/${h.path}`)}}catch{}try{const c=await fetch(`https://nhentai.net/g/${e}/`).then(async u=>u.text()),l=new DOMParser().parseFromString(c,"text/html"),h=[...l.querySelectorAll("#thumbnail-container .thumb-container")];if(h.length>0){const u=h.map(f=>{const p=f.querySelector("img");return(p?.getAttribute("data-src")??p?.getAttribute("src")??"").replace(/\/\/t(\d*)\.nhentai\.net/,"//i$1.nhentai.net").replace(/t\.([a-zA-Z0-9]+)$/,".$1")}).filter(f=>f.length>0);return{title:l.querySelector("#info h1")?.textContent?.trim()??n,series:t,pages:u.length,prev:"#",next:"#",listImages:u}}}catch{}const o=document.querySelector("#image-container img")?.getAttribute("src")??"",a=o.match(/^(https?:\/\/.*\/galleries\/[^/]+\/)\d+\.([a-zA-Z0-9]+)$/),s=Number(document.querySelector(".num-pages")?.textContent?.trim()??0)||1;return{title:n,series:t,pages:s,prev:"#",next:"#",listImages:a?Array.from({length:s},(c,l)=>`${a[1]}${l+1}.${a[2]}`):[o]}}},cm={name:"nHentai.to",url:/https?:\/\/(www\.)?nhentai\.to\/g\/\d+\/\d+/,homepage:"https://nhentai.to/",language:[$e.ENGLISH],category:ze.HENTAI,waitEle:"#image-container img",async run(){const e=document.querySelector(".back_btn, .go-back")?.getAttribute("href")??window.location.pathname.replace(/\/\d+\/?$/,"/"),t=document.querySelector("#image-container img")?.getAttribute("src")??"",n=Number(document.querySelector(".num-pages")?.textContent?.trim()??0);try{const s=e.startsWith("http")?e:`${window.location.origin}${e}`,c=await fetch(s).then(async u=>u.text()),l=new DOMParser().parseFromString(c,"text/html"),h=[...l.querySelectorAll("#thumbnail-container .thumb-container")];if(h.length>0){const u=h.map(f=>{const p=f.querySelector("img");return(p?.getAttribute("data-src")??p?.getAttribute("src")??"").replace(/t\.([a-zA-Z0-9]+)$/,".$1")}).filter(f=>f.length>0);return{title:l.querySelector("#info h1")?.textContent?.trim()??document.querySelector("title")?.textContent?.split("> Page")[0]?.trim(),series:e,pages:u.length,prev:"#",next:"#",listImages:u}}}catch{}const o=t.match(/^(https?:\/\/.*\/galleries\/[^/]+\/)\d+\.([a-zA-Z0-9]+)$/),a=n||1;return{title:document.querySelector("title")?.textContent?.split("> Page")[0]?.trim(),series:e,pages:a,prev:"#",next:"#",listImages:o?Array.from({length:a},(s,c)=>`${o[1]}${c+1}.${o[2]}`):[t]}}},dm={name:"nHentai.xxx",url:/https?:\/\/(www\.)?nhentai\.xxx\/g\/\d+\/\d+/,homepage:"https://nhentai.xxx/",language:[$e.ENGLISH],category:ze.HENTAI,waitEle:"#pages, #fimg, .reader_wrap",run(){const e=document.querySelector("#server_id")?.value??document.querySelector("#load_server")?.value??"",t=document.querySelector("#image_dir")?.value??document.querySelector("#load_dir")?.value??"",n=document.querySelector("#gallery_id")?.value??document.querySelector("#load_id")?.value??"",o=Number(document.querySelector("#pages")?.value??document.querySelector("#load_pages")?.value??document.querySelector(".pages_btn .tp")?.textContent?.trim()??0),a=document.querySelector("#fimg"),s=a?.getAttribute("data-src")??a?.getAttribute("src")??"",c=s.match(/\.([a-zA-Z0-9]+)(?:\?.*)?$/),l=c?c[1]:"webp",h=s?s.replace(/\/\d+\.[a-zA-Z0-9]+(?:\?.*)?$/,""):e&&t&&n?`https://i${e}.nhentaimg.com/${t}/${n}`:"";return{title:document.querySelector("title")?.textContent?.split("- Page")[0]?.trim()??a?.getAttribute("alt")?.replace(/\s*page\s*\d+\s*full.*$/i,"")?.trim(),series:document.querySelector(".back_btn, .go-back")?.getAttribute("href")??window.location.pathname.replace(/\/\d+\/?$/,"/"),pages:o,prev:"#",next:"#",listImages:Array.from({length:o},(u,f)=>`${h}/${f+1}.${l}`)}}},um={name:"PornComicsHD",url:/https?:\/\/(www\.)?porncomicshd.com\/es.*/,homepage:"https://porncomicshd.com/es",language:[$e.SPANISH],category:ze.HENTAI,waitEle:"app-comic-reader img",async run(){const e=[...document.querySelectorAll("app-comic-reader img")];return{title:document.querySelector("h1")?.textContent?.trim(),pages:e.length,prev:"#",next:"#",lazy:!1,listImages:e.map(t=>t.getAttribute("src")??"")}}},hm={name:"Pururin",url:/https?:\/\/(www\.)?pururin.me\/(view|read)\/.+\/.+\/.+/,homepage:"https://pururin.me/",language:[$e.ENGLISH],category:ze.HENTAI,waitAttr:[".img-viewer img","src"],run(){const e=document.querySelector(".img-viewer img")?.getAttribute("src")??"",t=[...document.querySelectorAll(".img-select option")];return{title:document.querySelector(".title")?.textContent?.trim(),series:document.querySelector(".breadcrumb-item:nth-child(4) a")?.getAttribute("href"),pages:t.length,prev:"#",next:"#",listImages:t.map((n,o)=>e.replace(/\/\d+\./,`/${o+1}.`))}}},fm={name:"SchaleNetwork",url:/https?:\/\/(www\.)?(niyaniya|shupogaki|hoshino).(moe|one)/,homepage:"https://schale.network/",language:[$e.ENGLISH],category:ze.HENTAI,waitEle:"nav select option",async run(){const e=history.state.memo.gallery,t=e.resolution,{base:n,entries:o}=history.state.memo.data,a=o.map(s=>`${n}/${s.path}?w=${t}`);return{title:e.title,series:`/g/${e.id}/${e.key}/`,pages:a.length,prev:"#",next:"#",fetchOptions:{method:"GET",redirect:"follow"},listImages:a}}},pm={name:"Simply-Hentai",url:/https?:\/\/(www\.)?simply-hentai.com\/.+\/page\/.+/,homepage:"https://simply-hentai.com/",language:[$e.ENGLISH],category:ze.HENTAI,waitEle:"#__NEXT_DATA__",async run(){const e=JSON.parse(document.querySelector("#__NEXT_DATA__")?.innerHTML??"").props.pageProps.data.pages.map(t=>t.sizes.full);return{title:document.querySelector(".content-headline a")?.textContent?.trim(),series:document.querySelector(".content-headline a")?.getAttribute("href"),pages:e.length,prev:"#",next:"#",listImages:e}}},mm={name:"TuMangaOnline",url:/https?:\/\/(www\.)?zonatmo\.(com|org|app)\/(viewer|news|view_uploads|reader|library)\/.+/,homepage:"https://zonatmo.org/",language:[$e.SPANISH],category:ze.MANGA,run(){const e=[...document.querySelectorAll(".img-container img, .viewer-container img, .content-image, .viewer-image, .img-fluid, .reader-img-wrap img, .viewer-img, #viewer-container img, .viewer-page")],t=[...document.querySelectorAll("div.container:nth-child(4) select#viewer-pages-select option, #viewer-pages-select option, select#chapter-pages option, select#pages option")],n=e.length>1?e.length:t.length;return{title:document.querySelector("title")?.textContent?.trim(),series:(document.querySelector('a[title="Volver"]')??document.querySelector(".breadcrumb-item:nth-child(2) a")??document.querySelector(".book-name a")??document.querySelector(".breadcrumb-item a"))?.getAttribute("href"),pages:n||1,prev:(document.querySelector(".chapter-prev a")??document.querySelector(".prev_page")??document.querySelector("a.prev-chapter")??document.querySelector(".chapter-prev-btn"))?.getAttribute("href"),next:(document.querySelector(".chapter-next a")??document.querySelector(".next_page")??document.querySelector("a.next-chapter")??document.querySelector(".chapter-next-btn"))?.getAttribute("href"),...e.length<=1&&t.length>1?{listPages:Array(t.length).fill(0).map((o,a)=>`${window.location.href.replace(/\/\d+$/,"")}/${a+1}`)}:{listImages:e.map(o=>o.getAttribute("data-src")??o.getAttribute("data-original")??o.getAttribute("src")??"")},img:"#viewer-container img, .viewer-page, .img-container img, .content-image, .viewer-image, .reader-img-wrap img, .viewer-img",before(){if(window.location.pathname.includes("paginated")&&(window.location.pathname=window.location.pathname.replace(/paginated.*/,"cascade")),window.location.pathname.includes("view_uploads")){const o=document.querySelector("a.btn.btn-primary, .btn-primary a, a.btn-block");o&&o.click()}}}}},gm={...mm,name:"TMOHentai",url:/https?:\/\/(www\.)?tmohentai\.(com|app)\/(reader|library|view_uploads)\/.+/,homepage:"https://tmohentai.app/",language:[$e.SPANISH],category:ze.HENTAI},vm={name:"Tsumino",url:/https?:\/\/(www\.)?tsumino.com\/Read\/Index\/\d+(\?page=.+)?/,homepage:"https://tsumino.com/",language:[$e.ENGLISH],category:ze.HENTAI,async run(){const e=document.querySelector("#image-container")?.getAttribute("data-opt"),t=document.querySelector("#image-container")?.getAttribute("data-cdn")??"",n=`https://www.tsumino.com/Read/Load?q=${e}`,o=await fetch(n).then(async a=>a.json());return{title:document.querySelector("title")?.textContent?.replace(/.+Read/,"").trim(),series:o.reader_start_url,pages:o.reader_page_total,prev:"#",next:"#",listImages:Array(o.reader_page_total).fill(0).map((a,s)=>t.replace("[PAGE]",`${s+1}`))}}},bm={name:["vermangasporno","vercomicsporno"],url:/https?:\/\/(www\.)?(vermangasporno|vercomicsporno).com\/.+/,homepage:["https://vermangasporno.com/","https://vercomicsporno.com/"],language:[$e.SPANISH],category:ze.HENTAI,waitEle:".pp-comic-content img",run(){const e=[...document.querySelectorAll(".pp-comic-content img")];return{title:document.querySelector("h1.titl, title")?.textContent?.trim(),pages:e.length,prev:"#",next:"#",listImages:e.map(t=>t.getAttribute("data-lazy-src")??t.getAttribute("data-src")??t.getAttribute("src")??"")}}},wm={name:"wnacg",url:/https?:\/\/(www\.)?wnacg.com\/photos-view-id-.+/,homepage:"https://wnacg.com/",language:[$e.ENGLISH,$e.RAW,$e.CHINESE],category:ze.HENTAI,run(){const e=[...document.querySelectorAll(".pageselect option")];return{title:document.querySelector(".bread a:last-of-type")?.textContent?.trim(),pages:e.length,prev:"#",next:"#",listPages:e.map(t=>window.location.pathname.replace(/\d+/,t.value)),img:"#picarea"}}},_m={name:"XlecxOne",url:/https?:\/\/(www\.)?xlecx.one\/.+/,homepage:"https://xlecx.one/",language:[$e.ENGLISH],category:ze.HENTAI,run(){const e=[...new Set([...document.querySelectorAll("article .page__text img , article #content-2 img")].map(t=>t.getAttribute("data-src")??t.getAttribute("data-srce")??t.closest("a")?.getAttribute("href")??t.getAttribute("src")??""))];return{title:document.querySelector("title")?.textContent?.trim(),pages:e.length,prev:"#",next:"#",listImages:e}}},ym={name:"xyzcomics",url:/https?:\/\/(www\.)?xyzcomics.com\/.+/,homepage:"https://xyzcomics.com/",language:[$e.ENGLISH],category:ze.HENTAI,run(){const e=[...document.querySelectorAll(".jig-link")];return{title:document.querySelector(".entry-title")?.textContent?.trim(),pages:e.length,prev:"#",next:"#",listImages:e.map(t=>t.getAttribute("href")??"")}}},km={name:"Yabai",url:/https?:\/\/(www\.)?yabai.si\/g\/.+\/read/,homepage:"https://yabai.si/",language:[$e.ENGLISH],category:ze.HENTAI,async run(){const e=document.querySelectorAll("nav select option").length,t={title:document.querySelector("title")?.textContent?.trim(),series:"../",pages:e,prev:"#",next:"#",listImages:[""],async before(){t.listImages=await eu(()=>{const n=document.querySelector("select option");n&&(n.selected=!0),document.querySelector("select")?.dispatchEvent(new Event("change"))},e,'button[title="Next"]',"h1 + div","img.mx-auto","src")}};return t}},Em=[Pp,Rp,$p,Dp,Tp,Bp,Np,zp,Hp,Fp,Gp,Wp,Up,qp,Kp,Yp,Xp,Jp,Qp,em,tm,rm,im,am,lm,cm,dm,Lp,um,hm,fm,pm,gm,vp,vm,bm,wm,_m,ym,km,om];async function li(e,t,n,o){if(e!==void 0){Me(n);const a=await t(e);Me(o,a)}}async function Mm(e){await li(e.waitAttr,t=>Jd(t?.[0],t?.[1]),`Waiting for Attribute ${e.waitAttr?.[1]} of ${e.waitAttr?.[0]}`,`Found Attribute ${e.waitAttr?.[1]} of ${e.waitAttr?.[0]} =`),await li(e.waitEle,xp,`Waiting for Element ${e.waitEle}`,"Found Element"),await li(e.waitVar,Qd,`Waiting for Variable ${e.waitVar}`,"Found Variable"),await li(e.waitFunc,Ks,`Waiting to pass Function check ${e.waitFunc}`,"Found Function check"),await li(e.waitTime,t=>new Promise(n=>setTimeout(n,t)),`Waiting for ${e.waitTime} milliseconds`,"Continuing after timer")}var Jt=[],ci=0,Kn=null,Ys=4,sa=globalThis.nanostoresGlobal||={epoch:0},Sm=()=>{let e,t;for(;ci<Jt.length;){t=ci,ci+=Ys;let n=Kn?.get(Jt[t]);if(n){if(!n.has(Jt[t+1]))continue;n.clear()}try{Jt[t](Jt[t+1].value,Jt[t+2],Jt[t+3])}catch(o){e=o}}if(Jt.length=ci=0,e)throw e},ou=e=>{let t=[],n={eq:Object.is,get(){return n.lc||n.listen(()=>{})(),n.value},init:e,lc:0,listen(o){return n.lc=t.push(o),()=>{Kn?.get(o)?.delete(n);for(let s=ci;s<Jt.length;)Jt[s]===o&&Jt[s+1]===n?Jt.splice(s,Ys):s+=Ys;let a=t.indexOf(o);~a&&(t.splice(a,1),--n.lc||n.off())}},notify(o,a){sa.epoch++;let s=!Jt.length&&!Kn;for(let c of t){if(Kn){let l=Kn.get(c);if(l||Kn.set(c,l=new Set),l.has(n))continue;l.add(n)}Jt.push(c,n,o,Kn?void 0:a)}s&&Sm()},off(){},set(o){let a=n.value;n.eq(a,o)||(n.value=o,n.notify(a))},subscribe(o){let a=n.listen(o);return o(n.value),a},value:e};return n},Am=5,la=6,ca=10,xm=(e,t,n,o)=>(e.events=e.events||{},e.events[n+ca]||(e.events[n+ca]=o(a=>{e.events[n].reduceRight((s,c)=>(c(s),s),{shared:{},...a})})),e.events[n]=e.events[n]||[],e.events[n].push(t),()=>{let a=e.events[n],s=a.indexOf(t);~s&&(a.splice(s,1),a.length||(e.events[n+ca](),delete e.events[n+ca]))}),Im=1e3,Cm=(e,t)=>xm(e,o=>{let a=t(o);a&&e.events[la].push(a)},Am,o=>{let a=e.listen;e.listen=(...c)=>(!e.lc&&!e.active&&(e.active=!0,o()),a(...c));let s=e.off;return e.events[la]=[],e.off=()=>{s(),setTimeout(()=>{if(e.active&&!e.lc){e.active=!1;for(let c of e.events[la])c();e.events[la]=[]}},Im)},()=>{e.listen=a,e.off=s}}),Om=(e,t,n)=>{Array.isArray(e)||(e=[e]);let o,a,s=()=>{if(a===sa.epoch)return;a=sa.epoch;let f=e.map(p=>p.get());if(!o?.every((p,_)=>e[_].eq(p,f[_]))){o=f;let p=t(...f);p&&p.then&&p.t?p.then(_=>{o===f&&c.set(_)}):(c.set(p),a=sa.epoch)}},c=ou(),l=c.get;c.get=()=>(s(),l());let h,u=n?()=>{clearTimeout(h),h=setTimeout(s)}:s;return Cm(c,()=>{let f=e.map(p=>p.listen(u));return s(),()=>{for(let p of f)p()}}),c},Tm=(e,t)=>Om(e,t),iu=(e={})=>{let t=ou(e);return t.eqKey=Object.is,t.setKey=function(n,o){let a=t.value;typeof o>"u"&&n in t.value?(t.value={...t.value},delete t.value[n],t.notify(a,n)):t.eqKey(t.value[n],o,n)||(t.value={...t.value,[n]:o},t.notify(a,n))},t},Xs=globalThis,au=e=>e,da=Xs.trustedTypes,su=da?da.createPolicy("lit-html",{createHTML:e=>e}):void 0,Js="$lit$",an=`lit$${Math.random().toFixed(9).slice(2)}$`,Qs="?"+an,Lm=`<${Qs}>`,Yn=document,di=()=>Yn.createComment(""),ui=e=>e===null||typeof e!="object"&&typeof e!="function",el=Array.isArray,lu=e=>el(e)||typeof e?.[Symbol.iterator]=="function",tl=`[ 	
\f\r]`,hi=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,cu=/-->/g,du=/>/g,Xn=RegExp(`>|${tl}(?:([^\\s"'>=/]+)(${tl}*=${tl}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),uu=/'/g,hu=/"/g,fu=/^(?:script|style|textarea|title)$/i,rl=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),re=rl(1),BA=rl(2),zA=rl(3),sn=Symbol.for("lit-noChange"),Ne=Symbol.for("lit-nothing"),pu=new WeakMap,Jn=Yn.createTreeWalker(Yn,129);function mu(e,t){if(!el(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return su!==void 0?su.createHTML(t):t}var gu=(e,t)=>{const n=e.length-1,o=[];let a,s=t===2?"<svg>":t===3?"<math>":"",c=hi;for(let l=0;l<n;l++){const h=e[l];let u,f,p=-1,_=0;for(;_<h.length&&(c.lastIndex=_,f=c.exec(h),f!==null);)_=c.lastIndex,c===hi?f[1]==="!--"?c=cu:f[1]!==void 0?c=du:f[2]!==void 0?(fu.test(f[2])&&(a=RegExp("</"+f[2],"g")),c=Xn):f[3]!==void 0&&(c=Xn):c===Xn?f[0]===">"?(c=a??hi,p=-1):f[1]===void 0?p=-2:(p=c.lastIndex-f[2].length,u=f[1],c=f[3]===void 0?Xn:f[3]==='"'?hu:uu):c===hu||c===uu?c=Xn:c===cu||c===du?c=hi:(c=Xn,a=void 0);const g=c===Xn&&e[l+1].startsWith("/>")?" ":"";s+=c===hi?h+Lm:p>=0?(o.push(u),h.slice(0,p)+Js+h.slice(p)+an+g):h+an+(p===-2?l:g)}return[mu(e,s+(e[n]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),o]},nl=class ip{constructor({strings:t,_$litType$:n},o){let a;this.parts=[];let s=0,c=0;const l=t.length-1,h=this.parts,[u,f]=gu(t,n);if(this.el=ip.createElement(u,o),Jn.currentNode=this.el.content,n===2||n===3){const p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(a=Jn.nextNode())!==null&&h.length<l;){if(a.nodeType===1){if(a.hasAttributes())for(const p of a.getAttributeNames())if(p.endsWith(Js)){const _=f[c++],g=a.getAttribute(p).split(an),b=/([.?@])?(.*)/.exec(_);h.push({type:1,index:s,name:b[2],strings:g,ctor:b[1]==="."?bu:b[1]==="?"?wu:b[1]==="@"?_u:fi}),a.removeAttribute(p)}else p.startsWith(an)&&(h.push({type:6,index:s}),a.removeAttribute(p));if(fu.test(a.tagName)){const p=a.textContent.split(an),_=p.length-1;if(_>0){a.textContent=da?da.emptyScript:"";for(let g=0;g<_;g++)a.append(p[g],di()),Jn.nextNode(),h.push({type:2,index:++s});a.append(p[_],di())}}}else if(a.nodeType===8)if(a.data===Qs)h.push({type:2,index:s});else{let p=-1;for(;(p=a.data.indexOf(an,p+1))!==-1;)h.push({type:7,index:s}),p+=an.length-1}s++}}static createElement(t,n){const o=Yn.createElement("template");return o.innerHTML=t,o}};function Qn(e,t,n=e,o){if(t===sn)return t;let a=o!==void 0?n._$Co?.[o]:n._$Cl;const s=ui(t)?void 0:t._$litDirective$;return a?.constructor!==s&&(a?._$AO?.(!1),s===void 0?a=void 0:(a=new s(e),a._$AT(e,n,o)),o!==void 0?(n._$Co??=[])[o]=a:n._$Cl=a),a!==void 0&&(t=Qn(e,a._$AS(e,t.values),a,o)),t}var vu=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:n}=this._$AD,o=(e?.creationScope??Yn).importNode(t,!0);Jn.currentNode=o;let a=Jn.nextNode(),s=0,c=0,l=n[0];for(;l!==void 0;){if(s===l.index){let h;l.type===2?h=new ua(a,a.nextSibling,this,e):l.type===1?h=new l.ctor(a,l.name,l.strings,this,e):l.type===6&&(h=new yu(a,this,e)),this._$AV.push(h),l=n[++c]}s!==l?.index&&(a=Jn.nextNode(),s++)}return Jn.currentNode=Yn,o}p(e){let t=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}},ua=class ap{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,n,o,a){this.type=2,this._$AH=Ne,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=o,this.options=a,this._$Cv=a?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&t?.nodeType===11&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=Qn(this,t,n),ui(t)?t===Ne||t==null||t===""?(this._$AH!==Ne&&this._$AR(),this._$AH=Ne):t!==this._$AH&&t!==sn&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):lu(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==Ne&&ui(this._$AH)?this._$AA.nextSibling.data=t:this.T(Yn.createTextNode(t)),this._$AH=t}$(t){const{values:n,_$litType$:o}=t,a=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=nl.createElement(mu(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===a)this._$AH.p(n);else{const s=new vu(a,this),c=s.u(this.options);s.p(n),this.T(c),this._$AH=s}}_$AC(t){let n=pu.get(t.strings);return n===void 0&&pu.set(t.strings,n=new nl(t)),n}k(t){el(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let o,a=0;for(const s of t)a===n.length?n.push(o=new ap(this.O(di()),this.O(di()),this,this.options)):o=n[a],o._$AI(s),a++;a<n.length&&(this._$AR(o&&o._$AB.nextSibling,a),n.length=a)}_$AR(t=this._$AA.nextSibling,n){for(this._$AP?.(!1,!0,n);t!==this._$AB;){const o=au(t).nextSibling;au(t).remove(),t=o}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},fi=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,o,a){this.type=1,this._$AH=Ne,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=a,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=Ne}_$AI(e,t=this,n,o){const a=this.strings;let s=!1;if(a===void 0)e=Qn(this,e,t,0),s=!ui(e)||e!==this._$AH&&e!==sn,s&&(this._$AH=e);else{const c=e;let l,h;for(e=a[0],l=0;l<a.length-1;l++)h=Qn(this,c[n+l],t,l),h===sn&&(h=this._$AH[l]),s||=!ui(h)||h!==this._$AH[l],h===Ne?e=Ne:e!==Ne&&(e+=(h??"")+a[l+1]),this._$AH[l]=h}s&&!o&&this.j(e)}j(e){e===Ne?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},bu=class extends fi{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Ne?void 0:e}},wu=class extends fi{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Ne)}},_u=class extends fi{constructor(e,t,n,o,a){super(e,t,n,o,a),this.type=5}_$AI(e,t=this){if((e=Qn(this,e,t,0)??Ne)===sn)return;const n=this._$AH,o=e===Ne&&n!==Ne||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,a=e!==Ne&&(n===Ne||o);o&&this.element.removeEventListener(this.name,this,n),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},yu=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Qn(this,e)}},Pm={M:Js,P:an,A:Qs,C:1,L:gu,R:vu,D:lu,V:Qn,I:ua,H:fi,N:wu,U:_u,B:bu,F:yu},Rm=Xs.litHtmlPolyfillSupport;Rm?.(nl,ua),(Xs.litHtmlVersions??=[]).push("3.3.3");var $m=(e,t,n)=>{const o=n?.renderBefore??t;let a=o._$litPart$;if(a===void 0){const s=n?.renderBefore??null;o._$litPart$=a=new ua(t.insertBefore(di(),s),s,void 0,n??{})}return a._$AI(e),a},{I:Dm}=Pm,ku=e=>e,NA=e=>e===null||typeof e!="object"&&typeof e!="function",HA={HTML:1,SVG:2,MATHML:3},FA=(e,t)=>t===void 0?e?._$litType$!==void 0:e?._$litType$===t,GA=e=>e?._$litType$?.h!=null,WA=e=>e?._$litDirective$!==void 0,UA=e=>e?._$litDirective$,Bm=e=>e.strings===void 0,Eu=()=>document.createComment(""),VA=(e,t,n)=>{const o=e._$AA.parentNode,a=t===void 0?e._$AB:t._$AA;if(n===void 0){const s=o.insertBefore(Eu(),a),c=o.insertBefore(Eu(),a);n=new Dm(s,c,e,e.options)}else{const s=n._$AB.nextSibling,c=n._$AM,l=c!==e;if(l){let h;n._$AQ?.(e),n._$AM=e,n._$AP!==void 0&&(h=e._$AU)!==c._$AU&&n._$AP(h)}if(s!==a||l){let h=n._$AA;for(;h!==s;){const u=ku(h).nextSibling;ku(o).insertBefore(h,a),h=u}}}return n},ZA=(e,t,n=e)=>(e._$AI(t,n),e),zm={},jA=(e,t=zm)=>e._$AH=t,qA=e=>e._$AH,KA=e=>{e._$AR(),e._$AA.remove()},YA=e=>{e._$AR()},ha={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},pi=e=>(...t)=>({_$litDirective$:e,values:t}),fa=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}},mi=(e,t)=>{const n=e._$AN;if(n===void 0)return!1;for(const o of n)o._$AO?.(t,!1),mi(o,t);return!0},pa=e=>{let t,n;do{if((t=e._$AM)===void 0)break;n=t._$AN,n.delete(e),e=t}while(n?.size===0)},Mu=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(n===void 0)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),Fm(t)}};function Nm(e){this._$AN!==void 0?(pa(this),this._$AM=e,Mu(this)):this._$AM=e}function Hm(e,t=!1,n=0){const o=this._$AH,a=this._$AN;if(a!==void 0&&a.size!==0)if(t)if(Array.isArray(o))for(let s=n;s<o.length;s++)mi(o[s],!1),pa(o[s]);else o!=null&&(mi(o,!1),pa(o));else mi(this,e)}var Fm=e=>{e.type==ha.CHILD&&(e._$AP??=Hm,e._$AQ??=Nm)},Gm=class extends fa{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,n){super._$AT(e,t,n),Mu(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(mi(this,e),pa(this))}setValue(e){if(Bm(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}},ol=()=>new Wm,Wm=class{},il=new WeakMap,al=pi(class extends Gm{render(e){return Ne}update(e,[t]){const n=t!==this.G;return n&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),Ne}rt(e){if(this.G!==void 0)if(this.isConnected||(e=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let n=il.get(t);n===void 0&&(n=new WeakMap,il.set(t,n)),n.get(this.G)!==void 0&&this.G.call(this.ht,void 0),n.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G=="function"?il.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),Um={ID:"de_DE",NAME:"Deutsch",STARTING:"Starte Manga OnlineViewer",RESUME:"Fortsetzen ab Seite ",WAITING:"Bitte warten, 3 Sekunden...",CHOOSE_BEGINNING:"Wähle die Startseite:",BUTTON_START:"Manga OnlineViewer starten",SETTINGS:"Einstellungen",LANGUAGE:"Sprache",COLOR_SCHEME:"Farbschema",THEME:"Design",THEME_COLOR:"Farbe",THEME_HUE:"Farbton",THEME_SHADE:"Schattierung",DEFAULT_LOAD_MODE:"Standard-Lademodus",DEVICE_MODE:"Gerätemodus",DEVICE_MODE_AUTO:"Automatisch",DEVICE_MODE_DESKTOP:"Desktop",DEVICE_MODE_TABLET:"Tablet",DEVICE_MODE_MOBILE:"Mobil",LOAD_MODE_NORMAL:"Normal (3 Sek. warten)",LOAD_MODE_ALWAYS:"Immer (sofort)",LOAD_MODE_NEVER:"Nie (manuell)",LOAD_SPEED:"Ladegeschwindigkeit",DEFAULT_ZOOM:"Standard-Zoom (zwischen 5 und 200)",DEFAULT_ZOOM_MODE:"Standard-Zoommodus",MINIMUM_ZOOM:"Minimaler Zoom relativ zur Bildschirmbreite (zwischen 30 und 100)",ZOOM_STEP:"Zoom-Schrittgröße (zwischen 5 und 50)",DEFAULT_VIEW_MODE:"Standard-Ansichtsmodus",VIEW_MODE_VERTICAL:"Vertikal",VIEW_MODE_LEFT:"Horizontal - Links nach Rechts",VIEW_MODE_RIGHT:"Horizontal - Rechts nach Links",VIEW_MODE_WEBCOMIC:"WebComic",VIEW_MODE_BOOK:"Buch - Links nach Rechts",VIEW_MODE_MANGA:"Manga - Rechts nach Links",VIEW_MODE_GALLERY:"Galerie",FIT_WIDTH_OVERSIZED:"Breite anpassen bei Übergröße",SHOW_THUMBNAILS:"Miniaturansichten anzeigen",HIDE_CONTROLS:"Seitensteuerung immer ausblenden",HEADER_TYPE:"Kopfbereichstyp ändern",HEADER_HOVER:"Hover",HEADER_SCROLL:"Scrollen",HEADER_CLICK:"Klicken",HEADER_FIXED:"Fixiert",HEADER_SIMPLE:"Einfach",BUTTON_DOWNLOAD:"Herunterladen",DOWNLOAD_ZIP:"Zip-Datei herunterladen",DOWNLOAD_IMAGES:"Bilder automatisch als Zip herunterladen",DOWNLOAD_PROGRESS:"Herunterladen: ##num## von ##total##",GENERATING_ZIP:"Zip-Datei wird erstellt...",DOWNLOAD_INCOMPLETE:"Download unvollständig",DOWNLOAD_INCOMPLETE_MESSAGE:"Einige Seiten konnten nicht heruntergeladen werden und wurden übersprungen. Eine Liste der fehlgeschlagenen Seiten wurde der ZIP-Datei hinzugefügt.",BUTTON_NEXT:"Weiter",NEXT_CHAPTER:"Nächstes Kapitel",BUTTON_PREVIOUS:"Zurück",PREVIOUS_CHAPTER:"Vorheriges Kapitel",BOOKMARKS:"Lesezeichen",BOOKMARK:"Lesezeichen",BOOKMARK_REMOVED:"Lesezeichen entfernt",BOOKMARK_SAVED:"Lesezeichen gespeichert",BOOKMARK_MESSAGE:"Beim nächsten Öffnen dieses Kapitels wird ab fortgesetzt: Seite ##num## (Nur EINMAL pro Lesezeichen)",KEYBINDINGS:"Tastenkürzel",EDIT_KEYBINDS:"Tastenkürzel bearbeiten",SAVE_KEYBINDS:"Tastenkürzel speichern",BUTTON_EDIT:"Bearbeiten",BUTTON_SAVE:"Speichern",KEYBIND_RULES:`
    <h3>Unterstützte Tasten</h3>
    Erlaubte Modifikatoren: shift, option, alt, ctrl, control, command. <br/>
    Spezielle Tasten: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide. <br/>
    Beispiele: <kbd>a</kbd>, <kbd>ctrl+a</kbd>, <kbd>shift+a</kbd>, <kbd>num_2</kbd>, <kbd>2</kbd>
  `,ATTENTION:"Achtung",WARNING:"Warnung",BUTTON_RESET_SETTINGS:"Einstellungen zurücksetzen(Reset Settings)",SETTINGS_RESET:"Die Einstellungen wurden zurückgesetzt, bitte Seite neu laden",LANGUAGE_CHANGED:"Die Sprache wurde geändert, bitte Seite neu laden",AUTO_DOWNLOAD:"Beim nächsten Laden eines Kapitels wirst du automatisch gefragt, ob du speichern möchtest",LAZY_LOAD:"Lazy Load ist mit Zip-Download nicht kompatibel, mit dieser Einstellung kannst du nicht herunterladen.<br/> Empfehlung: <span style='color:red;font-weight:bold'>Miniaturansichten deaktivieren</span> um Bandbreite/Speicher zu sparen.",LAZY_LOAD_IMAGES_ENABLE:"Lazy Load Bilder aktivieren",LAZY_LOAD_IMAGES:"Lazy Start ab Seite (zwischen 5 und 100)",RETURN_CHAPTER_LIST:"Zur Kapitelübersicht zurückkehren",PAGES_LOADED:"Seiten geladen",GO_TO_PAGE:"Gehe zu Seite",ENLARGE:"Vergrößern",RESTORE:"Wiederherstellen",REDUCE:"Wiederherstellen",FIT_WIDTH:"Breite anpassen",FIT_HEIGHT:"Höhe anpassen",PERCENT:"Prozent",TOGGLE_CONTROLS:"Seitensteuerung umschalten",ZOOM_IN:"Hineinzoomen",ZOOM_OUT:"Herauszoomen",ZOOM_RESET:"Zoom zurücksetzen",ZOOM_WIDTH:"Auf Breite zoomen",ZOOM_HEIGHT:"Auf Höhe zoomen",HIDE:"Ausblenden",RELOAD:"Neu laden",SLOWLY:"Langsam",NORMAL:"Normal",FAST:"Schnell",EXTREME:"Extrem",ALL_PAGES:"Alle Seiten",SPEED_WARNING:"Ladegeschwindigkeit zu hoch",SPEED_WARNING_MESSAGE:"Diese Geschwindigkeit wird nicht empfohlen.<br/> Sie kann einige Server überlasten oder deine IP als DDoS-Angreifer markieren.<br/> Bitte mit Vorsicht verwenden!",SCROLL_UP:"Nach oben scrollen",SCROLL_DOWN:"Nach unten scrollen",CLOSE:"Schließen",CANCEL:"Abbrechen",LIST_EMPTY:"Liste leer",SCROLL_START:"Auto-Scroll umschalten",INCREASE_SPEED:"Scrollgeschwindigkeit erhöhen",DECREASE_SPEED:"Scrollgeschwindigkeit verringern",AUTO_SCROLL_HEIGHT:"Auto-Scroll-Geschwindigkeit in Pixel",VERTICAL_SEPARATOR:"Vertikale Trenner anzeigen",END:"Ende",SCOPE:"Bereich",GLOBAL:"Global",GENERAL:"Allgemein",LOADING:"Lädt",ZOOM:"Zoom",OTHERS:"Sonstiges",NAVBAR_TYPE:"Navigationsleistentyp ändern",NAVBAR_BOTTOM:"Unten",NAVBAR_LEFT:"Links",NAVBAR_RIGHT:"Rechts",NAVBAR_DISABLED:"Deaktiviert",PAGINATION_TYPE:"Paginierungstyp",PAGINATION_DISABLED:"Deaktiviert",PAGINATION_SLIDER:"Schieberegler",PAGINATION_ARROWS:"Seitenpfeile",PAGINATION_BOTH:"Beides",FILE_MENU:"Hauptmenü",VIEW_MENU:"Menü „Ansicht“",ZOOM_MENU:"Zoom-Menü",DOUBLE_PAGE:"Doppelseite umschalten",CHOOSE_FILE:"Datei auswählen",NO_FILES_SELECTED:"Keine Dateien ausgewählt"},Vm={ID:"en_US",NAME:"English (US)",STARTING:"Starting Manga OnlineViewer",RESUME:"Resuming reading from Page ",WAITING:"Please wait, 3 seconds...",CHOOSE_BEGINNING:"Choose the Page to start from:",BUTTON_START:"Start Manga OnlineViewer",SETTINGS:"Settings",LANGUAGE:"Language",COLOR_SCHEME:"Color Scheme",THEME:"Theme",THEME_COLOR:"Color",THEME_HUE:"Color Hue",THEME_SHADE:"Color Shade",DEFAULT_LOAD_MODE:"Default Load Mode",DEVICE_MODE:"Device Mode",DEVICE_MODE_AUTO:"Auto",DEVICE_MODE_DESKTOP:"Desktop",DEVICE_MODE_TABLET:"Tablet",DEVICE_MODE_MOBILE:"Mobile",LOAD_MODE_NORMAL:"Normal(Wait 3 sec)",LOAD_MODE_ALWAYS:"Always(Immediately)",LOAD_MODE_NEVER:"Never(Manually)",LOAD_SPEED:"Load Speed",DEFAULT_ZOOM:"Default Zoom (between 5 and 200)",DEFAULT_ZOOM_MODE:"Default Zoom Mode",MINIMUM_ZOOM:"Minimum Zoom relative to the width of screen (between 30 and 100)",ZOOM_STEP:"Zoom Change Step (between 5 and 50)",DEFAULT_VIEW_MODE:"Default View Mode",VIEW_MODE_VERTICAL:"Vertical",VIEW_MODE_LEFT:"Horizontal - Left to Right",VIEW_MODE_RIGHT:"Horizontal - Right to Left",VIEW_MODE_WEBCOMIC:"WebComic",VIEW_MODE_BOOK:"Book - Left to Right",VIEW_MODE_MANGA:"Manga - Right to Left",VIEW_MODE_GALLERY:"Gallery",FIT_WIDTH_OVERSIZED:"Fit Width if Oversized",SHOW_THUMBNAILS:"Show Thumbnails",HIDE_CONTROLS:"Always Hide Page Controls",HEADER_TYPE:"Change Header Type",HEADER_HOVER:"Hover",HEADER_SCROLL:"Scroll",HEADER_CLICK:"Click",HEADER_FIXED:"Fixed",HEADER_SIMPLE:"Simple",BUTTON_DOWNLOAD:"Download",DOWNLOAD_ZIP:"Download Zip file",DOWNLOAD_IMAGES:"Download Images as Zip Automatically",DOWNLOAD_PROGRESS:"Downloading: ##num## of ##total##",GENERATING_ZIP:"Generating Zip file...",DOWNLOAD_INCOMPLETE:"Download Incomplete",DOWNLOAD_INCOMPLETE_MESSAGE:"Some pages failed to download and were skipped. A list of failed pages has been added to the ZIP file.",BUTTON_NEXT:"Next",NEXT_CHAPTER:"Next Chapter",BUTTON_PREVIOUS:"Previous",PREVIOUS_CHAPTER:"Previous Chapter",BOOKMARKS:"Bookmarks",BOOKMARK:"Bookmark",BOOKMARK_REMOVED:"Bookmark Removed",BOOKMARK_SAVED:"Bookmark Saved",BOOKMARK_MESSAGE:"Next time you open this chapter it will resume from: Page ##num## (Only ONCE per Bookmark)",KEYBINDINGS:"Keybindings",EDIT_KEYBINDS:"Edit KeyBindings",SAVE_KEYBINDS:"Save KeyBindings",BUTTON_EDIT:"Edit",BUTTON_SAVE:"Save",KEYBIND_RULES:`
    <h3>Supported Keys</h3>
    Allowed modifiers: shift, option, alt, ctrl, control, command. <br/>
    Special keys: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide. <br/>
    Examples: <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd>
  `,ATTENTION:"Attention",WARNING:"Warning",BUTTON_RESET_SETTINGS:"Reset Settings",SETTINGS_RESET:"Settings have been reset, reload the page to take effect",LANGUAGE_CHANGED:"Language has been changed, reload the page to take effect",AUTO_DOWNLOAD:"Next time a chapter finish loading you will be prompted to save automatically",LAZY_LOAD:"Lazy load is incompatible with zip download, you will not be able to download with this setting ON.<br/> Suggestion: <span style='color:red;font-weight:bold'>Disable Thumbnails</span> to save Bandwidth/Memory.",LAZY_LOAD_IMAGES_ENABLE:"Enable Lazy Load Images",LAZY_LOAD_IMAGES:"Lazy Start From Page (between 5 and 100)",RETURN_CHAPTER_LIST:"Return to Chapter List",PAGES_LOADED:"Pages Loaded",GO_TO_PAGE:"Go to Page",ENLARGE:"Enlarge",RESTORE:"Restore",REDUCE:"Reduce",FIT_WIDTH:"Fit Width",FIT_HEIGHT:"Fit Height",PERCENT:"Percent",TOGGLE_CONTROLS:"Toggle page controls",ZOOM_IN:"Zoom In",ZOOM_OUT:"Zoom Out",ZOOM_RESET:"Zoom Reset",ZOOM_WIDTH:"Zoom to Width",ZOOM_HEIGHT:"Zoom to Height",HIDE:"Hide",RELOAD:"Reload",SLOWLY:"Slowly",NORMAL:"Normal",FAST:"Fast",EXTREME:"Extreme",ALL_PAGES:"All Pages",SPEED_WARNING:"Loading Speed too High",SPEED_WARNING_MESSAGE:"This speed is not recommended.<br/> It may hurt some servers or get your IP marked as DDoS attacker.<br/> Please use with caution!",SCROLL_UP:"Scroll Up",SCROLL_DOWN:"Scroll Down",CLOSE:"Close",CANCEL:"Cancel",LIST_EMPTY:"List Empty",SCROLL_START:"Toggle Auto Scroll",INCREASE_SPEED:"Increase Scroll Speed",DECREASE_SPEED:"Decrease Scroll Speed",AUTO_SCROLL_HEIGHT:"Auto Scroll Speed in Pixels",VERTICAL_SEPARATOR:"Show Vertical Separators",END:"End",SCOPE:"Scope",GLOBAL:"Global",GENERAL:"General",LOADING:"Loading",ZOOM:"Zoom",OTHERS:"Others",NAVBAR_TYPE:"Change Navbar Type",NAVBAR_BOTTOM:"Bottom",NAVBAR_LEFT:"Left",NAVBAR_RIGHT:"Right",NAVBAR_DISABLED:"Disabled",PAGINATION_TYPE:"Pagination Type",PAGINATION_DISABLED:"Disabled",PAGINATION_SLIDER:"Slider",PAGINATION_ARROWS:"Side Arrows",PAGINATION_BOTH:"Both",FILE_MENU:"Main Menu",VIEW_MENU:"View Menu",ZOOM_MENU:"Zoom Menu",DOUBLE_PAGE:"Toggle Double Page",CHOOSE_FILE:"Choose File",NO_FILES_SELECTED:"No files selected"},Zm={ID:"es_ES",NAME:"Español (ES)",STARTING:"Iniciando Manga OnlineViewer",RESUME:"Continuando lectura desde la Página ",WAITING:"Por favor espere, 3 segundos...",CHOOSE_BEGINNING:"Elija la página en la que comenzar:",BUTTON_START:"Iniciar Manga OnlineViewer",SETTINGS:"Ajustes",LANGUAGE:"Idioma",COLOR_SCHEME:"Esquema de color",THEME:"Tema",THEME_COLOR:"Color",THEME_HUE:"Matiz del color",THEME_SHADE:"Saturación del color",DEFAULT_LOAD_MODE:"Modo de carga por defecto",DEVICE_MODE:"Modo de dispositivo",DEVICE_MODE_AUTO:"Automático",DEVICE_MODE_DESKTOP:"Escritorio",DEVICE_MODE_TABLET:"Tableta",DEVICE_MODE_MOBILE:"Móvil",LOAD_MODE_NORMAL:"Normal (Espera 3s)",LOAD_MODE_ALWAYS:"Siempre (Inmediatamente)",LOAD_MODE_NEVER:"Nunca (Manualmente)",LOAD_SPEED:"Velocidad carga",DEFAULT_ZOOM:"Zoom por defecto (entre 5 y 200)",DEFAULT_ZOOM_MODE:"Modo de zoom por defecto",MINIMUM_ZOOM:"Zoom mínimo relativo al ancho de la pantalla",ZOOM_STEP:"Paso entre cambios de zoom (entre 5 y 50)",DEFAULT_VIEW_MODE:"Modo de visualización por defecto",VIEW_MODE_VERTICAL:"Vertical",VIEW_MODE_LEFT:"Horizontal - Izquierda a derecha",VIEW_MODE_RIGHT:"Horizontal - Derecha a izquierda",VIEW_MODE_WEBCOMIC:"WebComic",VIEW_MODE_BOOK:"Libro - Izquierda a derecha",VIEW_MODE_MANGA:"Manga - Derecha a izquierda",VIEW_MODE_GALLERY:"Galería",FIT_WIDTH_OVERSIZED:"Ajustar ancho si es demasiado grande",SHOW_THUMBNAILS:"Mostrar miniaturas",HIDE_CONTROLS:"Ocultar siempre la barra de controles",HEADER_TYPE:"Cambiar tipo de cabecera",HEADER_HOVER:"Pasar por encima",HEADER_SCROLL:"Desplazamiento",HEADER_CLICK:"Hacer click",HEADER_FIXED:"Fijo",HEADER_SIMPLE:"Sencillo",BUTTON_DOWNLOAD:"Descargar",DOWNLOAD_ZIP:"Descargar fichero Zip",DOWNLOAD_IMAGES:"Autodescargar imágenes como Zip",DOWNLOAD_PROGRESS:"Descargando: ##num## de ##total##",GENERATING_ZIP:"Generando archivo Zip...",DOWNLOAD_INCOMPLETE:"Descarga Incompleta",DOWNLOAD_INCOMPLETE_MESSAGE:"Algunas páginas no se pudieron descargar y se saltaron. Se ha añadido una lista de páginas fallidas al archivo ZIP.",BUTTON_NEXT:"Siguiente",NEXT_CHAPTER:"Siguiente capítulo",BUTTON_PREVIOUS:"Anterior",PREVIOUS_CHAPTER:"Capítulo anterior",BOOKMARKS:"Marcadores",BOOKMARK:"Marcador",BOOKMARK_REMOVED:"Marcador eliminado",BOOKMARK_SAVED:"Marcador guardado",BOOKMARK_MESSAGE:"La próxima vez que abra este capítulo, continuará desde la página ##num## (Sólo UNA VEZ por Marcador)",KEYBINDINGS:"Atajos de teclado",EDIT_KEYBINDS:"Editar atajos",SAVE_KEYBINDS:"Guardar atajos",BUTTON_EDIT:"Editar",BUTTON_SAVE:"Guardar",KEYBIND_RULES:`
    <h3>Teclas soportadas</h3>
    Modificadores permitidos: shift, option, alt, ctrl, control, command. <br/>
    Teclas especiales: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide. <br/>
    Ejemplos: <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd>
  `,ATTENTION:"Atención",WARNING:"Alerta",BUTTON_RESET_SETTINGS:"Reiniciar ajustes(Reset Settings)",SETTINGS_RESET:"Se han restablecido los ajustes, vuelve a cargar la página para que surta efecto",LANGUAGE_CHANGED:"Se ha cambiado el idioma, vuelve a cargar la página para que surta efecto",AUTO_DOWNLOAD:"La próxima vez que termine de cargarse un capítulo, se le pedirá que guarde automáticamente",LAZY_LOAD:"La carga diferida es incompatible con la descarga zip, no podrá descargar con este ajuste activado.<br/> Sugerencia: <span style='color:red;font-weight:bold'>Desactivar miniaturas</span> para ahorrar Ancho de banda/Memoria.",LAZY_LOAD_IMAGES_ENABLE:"Habilitar carga de imágenes diferida",LAZY_LOAD_IMAGES:"Empezar carga diferida a partir de la página (entre 5 y 100)",RETURN_CHAPTER_LIST:"Regresar a la lista de capítulos",PAGES_LOADED:"Páginas cargadas",GO_TO_PAGE:"Ir a página",ENLARGE:"Agrandar",RESTORE:"Restaurar",REDUCE:"Reducir",FIT_WIDTH:"Ajustar al ancho",FIT_HEIGHT:"Ajustar al alto",PERCENT:"Porcentual",TOGGLE_CONTROLS:"Alternar controles de página",ZOOM_IN:"Acercar",ZOOM_OUT:"Alejar",ZOOM_RESET:"Restablecer zoom",ZOOM_WIDTH:"Zoom al ancho",ZOOM_HEIGHT:"Zoom al alto",HIDE:"Ocultar",RELOAD:"Recargar",SLOWLY:"Lento",NORMAL:"Normal",FAST:"Rápido",EXTREME:"Extremo",ALL_PAGES:"Todas las páginas",SPEED_WARNING:"Velocidad de carga muy alta",SPEED_WARNING_MESSAGE:"No se recomienda esta velocidad.<br/> Puede dañar algunos servidores o marcar su IP como atacante DDoS.<br/> ¡Utilícelo con precaución!",SCROLL_UP:"Desplazar arriba",SCROLL_DOWN:"Desplazarse hacia abajo",CLOSE:"Cerrar",CANCEL:"Cancelar",LIST_EMPTY:"Lista vacía",SCROLL_START:"Alternar desplazamiento automático",INCREASE_SPEED:"Aumentar la velocidad de desplazamiento",DECREASE_SPEED:"Disminuir la velocidad de desplazamiento",AUTO_SCROLL_HEIGHT:"Velocidad de desplazamiento automático en píxeles",VERTICAL_SEPARATOR:"Mostrar separadores verticales",END:"Fin",SCOPE:"Alcance",GLOBAL:"Global",GENERAL:"General",LOADING:"Carga",ZOOM:"Zoom",OTHERS:"Otros",NAVBAR_TYPE:"Cambiar el tipo de barra de navegación",NAVBAR_BOTTOM:"Abajo",NAVBAR_LEFT:"Izquierda",NAVBAR_RIGHT:"Derecha",NAVBAR_DISABLED:"Desactivado",PAGINATION_TYPE:"Tipo de paginación",PAGINATION_DISABLED:"Desactivado",PAGINATION_SLIDER:"Control deslizante",PAGINATION_ARROWS:"Flechas laterales",PAGINATION_BOTH:"Ambos",FILE_MENU:"Menú principal",VIEW_MENU:"Ver menú",ZOOM_MENU:"Menú Zoom",DOUBLE_PAGE:"Alternar Página Doble",CHOOSE_FILE:"Elegir archivo",NO_FILES_SELECTED:"No se han seleccionado archivos"},jm={ID:"fr_FR",NAME:"Français (FR)",STARTING:"Démarrage Manga OnlineViewer",RESUME:"Reprise de la lecture à partir de la Page ",WAITING:"Veuillez patienter, 3 secondes...",CHOOSE_BEGINNING:"Choisissez la page par laquelle commencer :",BUTTON_START:"Démarrer Manga OnlineViewer",SETTINGS:"Paramètres",LANGUAGE:"Langue",COLOR_SCHEME:"Palette de couleurs",THEME:"Thème",THEME_COLOR:"Couleur",THEME_HUE:"Teinte de couleur",THEME_SHADE:"Nuance de couleur",DEFAULT_LOAD_MODE:"Mode de chargement par défaut",DEVICE_MODE:"Mode d'appareil",DEVICE_MODE_AUTO:"Automatique",DEVICE_MODE_DESKTOP:"Bureau",DEVICE_MODE_TABLET:"Tablette",DEVICE_MODE_MOBILE:"Mobile",LOAD_MODE_NORMAL:"Normal (attendre 3 s)",LOAD_MODE_ALWAYS:"Toujours (immédiatement)",LOAD_MODE_NEVER:"Jamais (manuellement)",LOAD_SPEED:"Vitesse de chargement",DEFAULT_ZOOM:"Zoom par défaut (entre 5 et 200)",DEFAULT_ZOOM_MODE:"Mode de zoom par défaut",MINIMUM_ZOOM:"Zoom minimum par rapport à la largeur de l'écran (entre 30 et 100)",ZOOM_STEP:"Pas de changement de zoom (entre 5 et 50)",DEFAULT_VIEW_MODE:"Mode d'affichage par défaut",VIEW_MODE_VERTICAL:"Vertical",VIEW_MODE_LEFT:"Horizontal - De gauche à droite",VIEW_MODE_RIGHT:"Horizontal - De droite à gauche",VIEW_MODE_WEBCOMIC:"WebComic",VIEW_MODE_BOOK:"Livre - De gauche à droite",VIEW_MODE_MANGA:"Manga - De droite à gauche",VIEW_MODE_GALLERY:"Galerie",FIT_WIDTH_OVERSIZED:"Ajuster à la largeur si surdimensionné",SHOW_THUMBNAILS:"Afficher les vignettes",HIDE_CONTROLS:"Toujours masquer les contrôles de page",HEADER_TYPE:"Changer le type d'en-tête",HEADER_HOVER:"Survol",HEADER_SCROLL:"Défilement",HEADER_CLICK:"Clic",HEADER_FIXED:"Fixe",HEADER_SIMPLE:"Simple",BUTTON_DOWNLOAD:"Télécharger",DOWNLOAD_ZIP:"Télécharger le fichier Zip",DOWNLOAD_IMAGES:"Télécharger les images en Zip automatiquement",DOWNLOAD_PROGRESS:"Téléchargement : ##num## sur ##total##",GENERATING_ZIP:"Génération du fichier Zip...",DOWNLOAD_INCOMPLETE:"Téléchargement incomplet",DOWNLOAD_INCOMPLETE_MESSAGE:"Certaines pages n'ont pas pu être téléchargées et ont été ignorées. Une liste des pages concernées a été ajoutée au fichier ZIP.",BUTTON_NEXT:"Suivant",NEXT_CHAPTER:"Chapitre suivant",BUTTON_PREVIOUS:"Précédent",PREVIOUS_CHAPTER:"Chapitre précédent",BOOKMARKS:"Favoris",BOOKMARK:"Favori",BOOKMARK_REMOVED:"Favori supprimé",BOOKMARK_SAVED:"Favori enregistré",BOOKMARK_MESSAGE:"La prochaine fois que vous ouvrirez ce chapitre, il reprendra à partir de: Page ##num## (Seulement UNE FOIS par favori)",KEYBINDINGS:"Raccourcis clavier",EDIT_KEYBINDS:"Modifier les raccourcis clavier",SAVE_KEYBINDS:"Enregistrer les raccourcis clavier",BUTTON_EDIT:"Modifier",BUTTON_SAVE:"Enregistrer",KEYBIND_RULES:`
    <h3>Touches prises en charge</h3>
    Modificateurs autorisés : shift, option, alt, ctrl, control, command. <br/>
    Touches spéciales : backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide. <br/>
    Exemples : <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd>
  `,ATTENTION:"Attention",WARNING:"Avertissement",BUTTON_RESET_SETTINGS:"Réinitialiser les paramètres",SETTINGS_RESET:"Les paramètres ont été réinitialisés, rechargez la page pour prendre effet",LANGUAGE_CHANGED:"La langue a été modifiée, rechargez la page pour prendre effet",AUTO_DOWNLOAD:"La prochaine fois qu'un chapitre finira de se charger, il vous sera proposé de l'enregistrer automatiquement",LAZY_LOAD:"Le chargement paresseux est incompatible avec le téléchargement zip, vous ne pourrez pas télécharger avec ce paramètre activé.<br/> Suggestion : <span style='color:red;font-weight:bold'>Désactivez les vignettes</span> pour économiser de la bande passante/mémoire.",LAZY_LOAD_IMAGES_ENABLE:"Activer le chargement paresseux des images",LAZY_LOAD_IMAGES:"Début du chargement paresseux à partir de la page (entre 5 et 100)",RETURN_CHAPTER_LIST:"Retour à la liste des chapitres",PAGES_LOADED:"Pages chargées",GO_TO_PAGE:"Aller à la page",ENLARGE:"Agrandir",RESTORE:"Restaurer",REDUCE:"Réduire",FIT_WIDTH:"Ajuster à la largeur",FIT_HEIGHT:"Ajuster à la hauteur",PERCENT:"Pourcentage",TOGGLE_CONTROLS:"Basculer les contrôles de page",ZOOM_IN:"Zoom avant",ZOOM_OUT:"Zoom arrière",ZOOM_RESET:"Réinitialiser le zoom",ZOOM_WIDTH:"Zoomer à la largeur",ZOOM_HEIGHT:"Zoomer à la hauteur",HIDE:"Masquer",RELOAD:"Recharger",SLOWLY:"Lentement",NORMAL:"Normal",FAST:"Rapide",EXTREME:"Extrême",ALL_PAGES:"Toutes les pages",SPEED_WARNING:"Vitesse de chargement trop élevée",SPEED_WARNING_MESSAGE:"Cette vitesse n'est pas recommandée.<br/> Elle peut nuire à certains serveurs ou marquer votre IP comme un attaquant DDoS.<br/> Veuillez l'utiliser avec prudence !",SCROLL_UP:"Faire défiler vers le haut",SCROLL_DOWN:"Faire défiler vers le bas",CLOSE:"Fermer",CANCEL:"Annuler",LIST_EMPTY:"Liste vide",SCROLL_START:"Basculer le défilement automatique",INCREASE_SPEED:"Augmenter la vitesse de défilement",DECREASE_SPEED:"Diminuer la vitesse de défilement",AUTO_SCROLL_HEIGHT:"Vitesse de défilement automatique en pixels",VERTICAL_SEPARATOR:"Afficher les séparateurs verticaux",END:"Fin",SCOPE:"Portée",GLOBAL:"Global",GENERAL:"Général",LOADING:"Chargement",ZOOM:"Zoom",OTHERS:"Autres",NAVBAR_TYPE:"Changer le type de barre de navigation",NAVBAR_BOTTOM:"Bas",NAVBAR_LEFT:"Gauche",NAVBAR_RIGHT:"Droite",NAVBAR_DISABLED:"Désactivé",PAGINATION_TYPE:"Type de pagination",PAGINATION_DISABLED:"Désactivé",PAGINATION_SLIDER:"Curseur",PAGINATION_ARROWS:"Flèches latérales",PAGINATION_BOTH:"Les deux",FILE_MENU:"Menu principal",VIEW_MENU:"Menu Affichage",ZOOM_MENU:"Menu Zoom",DOUBLE_PAGE:"Basculer Double Page",CHOOSE_FILE:"Choisir un fichier",NO_FILES_SELECTED:"Aucun fichier sélectionné"},qm={ID:"pt_BR",NAME:"Portugues (Brasil)",STARTING:"Iniciando Manga OnlineViewer",RESUME:"Continuando leitura na Pagina ",WAITING:"Por Favor espere, 3 segundos...",CHOOSE_BEGINNING:"Escolha a pagina de onde começar:",BUTTON_START:"Iniciar Manga OnlineViewer",SETTINGS:"Configurações",LANGUAGE:"Idioma",COLOR_SCHEME:"Esquema de Color",THEME:"Tema",THEME_COLOR:"Cor",THEME_HUE:"Tom da Cor",THEME_SHADE:"Saturação da Cor",DEFAULT_LOAD_MODE:"Forma de Carregamento Padrão",DEVICE_MODE:"Modo de Dispositivo",DEVICE_MODE_AUTO:"Automático",DEVICE_MODE_DESKTOP:"Desktop",DEVICE_MODE_TABLET:"Tablet",DEVICE_MODE_MOBILE:"Celular",LOAD_MODE_NORMAL:"Normal(Esperando 3 sec)",LOAD_MODE_ALWAYS:"Sempre(Imediatamente)",LOAD_MODE_NEVER:"Nunca(Manualmente)",LOAD_SPEED:"Velocidade de Carregamento",DEFAULT_ZOOM:"Zoom padrão (entre 5 e 200)",DEFAULT_ZOOM_MODE:"Modo de Zoom padrão",MINIMUM_ZOOM:"Zoom minimo, relativo ao tamanho da tela (entre 30 e 100)",ZOOM_STEP:"Precisão da Mudança do Zoom (entre 5 e 50)",DEFAULT_VIEW_MODE:"Modo de Visualização Padrão",VIEW_MODE_VERTICAL:"Vertical",VIEW_MODE_LEFT:"Horizontal - Esquerda para Direita",VIEW_MODE_RIGHT:"Horizontal - Direita para Esquerda",VIEW_MODE_WEBCOMIC:"WebComic",VIEW_MODE_BOOK:"Livro - Esquerda para Direita",VIEW_MODE_MANGA:"Mangá - Direita para Esquerda",VIEW_MODE_GALLERY:"Galeria",FIT_WIDTH_OVERSIZED:"Encher a tela se grande demais",SHOW_THUMBNAILS:"Mostra Miniaturas",HIDE_CONTROLS:"Sempre esconder controles das paginas",HEADER_TYPE:"Mudar Tipo de Cabeçalho",HEADER_HOVER:"Passar por perto",HEADER_SCROLL:"Rolagem do Mouse",HEADER_CLICK:"Click",HEADER_FIXED:"Fixo",HEADER_SIMPLE:"Simples",BUTTON_DOWNLOAD:"Download",DOWNLOAD_ZIP:"Baixar arquivo Zip",DOWNLOAD_IMAGES:"Download das Imagens como Zip Automaticamente",DOWNLOAD_PROGRESS:"Baixando: ##num## de ##total##",GENERATING_ZIP:"Gerando arquivo Zip...",DOWNLOAD_INCOMPLETE:"Download Incompleto",DOWNLOAD_INCOMPLETE_MESSAGE:"Algumas páginas falharam ao baixar e foram puladas. Uma lista de páginas que falharam foi adicionada ao arquivo ZIP.",BUTTON_NEXT:"Proximo",NEXT_CHAPTER:"Proximo Capitulo",BUTTON_PREVIOUS:"Anterior",PREVIOUS_CHAPTER:"Capitulo Anterior",BOOKMARKS:"Marca paginas",BOOKMARK:"Marcar pagina",BOOKMARK_REMOVED:"Marca pagina Removido",BOOKMARK_SAVED:"Marca pagina Salvo",BOOKMARK_MESSAGE:"Proxima vez que abrir este capitulo continuará a partir da Pagina ##num## (Apenas UMA VEZ por marca pagina)",KEYBINDINGS:"Atalhos",EDIT_KEYBINDS:"Editar Atalhos",SAVE_KEYBINDS:"Salvar Atalhos",BUTTON_EDIT:"Editar",BUTTON_SAVE:"Salvar",KEYBIND_RULES:`
    <h3>Teclas Suportadas</h3>
    Modificadores permitidos: shift, option, alt, ctrl, control, command. <br/>
    Teclas Especiais: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide.<br/>
    Exemplos: <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd>
  `,ATTENTION:"Atenção",WARNING:"Alerta",BUTTON_RESET_SETTINGS:"Limpar Configurações(Reset Settings)",SETTINGS_RESET:"Configurações foram limpas, recarregue o site para efetivar a alteração",LANGUAGE_CHANGED:"Idioma foi alterado, recarregue o site para efetivar a alteração",AUTO_DOWNLOAD:"Proxima vez que abrir um capitulo download iniciara automaticamente",LAZY_LOAD:"Carregamento preguiçoso não é compativel com download de zip, não conseguira com essa configuração ativa.<br/> Sugestão: <span style='color:red;font-weight:bold'>Desative Miniaturas</span> para economizar memoria e cota de internet.",LAZY_LOAD_IMAGES_ENABLE:"Ativar Carregamento de imagens preguiçoso",LAZY_LOAD_IMAGES:"Carregamento de paginas preguiçoso começa a partir de (entre 5 e 100)",RETURN_CHAPTER_LIST:"Voltar a lista de Capitulos",PAGES_LOADED:"Paginas Carregadas",GO_TO_PAGE:"Pular para",ENLARGE:"Aumentar",RESTORE:"Restaurar",REDUCE:"Diminuir",FIT_WIDTH:"Preencher Largura",FIT_HEIGHT:"Preencher Altura ",PERCENT:"Percentual",TOGGLE_CONTROLS:"Mostar controles de pagina",ZOOM_IN:"Mais Zoom",ZOOM_OUT:"Menos Zoom",ZOOM_RESET:"Resetar Zoom",ZOOM_WIDTH:"Zoom para Largura",ZOOM_HEIGHT:"Zoom para Altura",HIDE:"Esconder",RELOAD:"Recarregar",SLOWLY:"Devagar",NORMAL:"Normal",FAST:"Rapido",EXTREME:"Extremo",ALL_PAGES:"Todas as Paginas",SPEED_WARNING:"Velocidade de Carregamento muito alta",SPEED_WARNING_MESSAGE:"Essa velocidade não é recomendada.<br/> Ela pode derrubar um servidor or marcar voce como um ataque hacker de DDoS.<br/> Use com cuidado!",SCROLL_UP:"Subir Pagina",SCROLL_DOWN:"Descer Pagina",CLOSE:"Fechar",CANCEL:"Cancelar",LIST_EMPTY:"Lista Vazia",SCROLL_START:"Ativar Rolagem Automatica",INCREASE_SPEED:"Aumentar Valocidade da Rolagem",DECREASE_SPEED:"Diminuir Valocidade da Rolagem",AUTO_SCROLL_HEIGHT:"Velocidade da Rolagem Automatica em Pixels",VERTICAL_SEPARATOR:"Mostrar Separadores Verticais",END:"Fin",SCOPE:"Escopo",GLOBAL:"Global",GENERAL:"Geral",LOADING:"Carregamento",ZOOM:"Zoom",OTHERS:"Outros",NAVBAR_TYPE:"Mudar barra de navegação",NAVBAR_BOTTOM:"Embaixo",NAVBAR_LEFT:"Esquerda",NAVBAR_RIGHT:"Direita",NAVBAR_DISABLED:"Desativado",PAGINATION_TYPE:"Tipo de Paginação",PAGINATION_DISABLED:"Desativado",PAGINATION_SLIDER:"Controle deslizante",PAGINATION_ARROWS:"Setas Laterais",PAGINATION_BOTH:"Ambos",FILE_MENU:"Menu Principal",VIEW_MENU:"Menu de Visualizações",ZOOM_MENU:"Menu de Zoom",DOUBLE_PAGE:"Alternar Página Dupla",CHOOSE_FILE:"Escolher arquivo",NO_FILES_SELECTED:"Nenhum arquivo selecionado"},Km={ID:"zh_CN",NAME:"中文 (简体)",STARTING:"正在启动 Manga OnlineViewer",RESUME:"从页面继续阅读 ",WAITING:"请等待3秒钟...",CHOOSE_BEGINNING:"选择要开始的页数:",BUTTON_START:"启动Manga OnlineViewer",SETTINGS:"设置",LANGUAGE:"语言",COLOR_SCHEME:"配色方案",THEME:"主题",THEME_COLOR:"颜色",THEME_HUE:"色相",THEME_SHADE:"色度",DEFAULT_LOAD_MODE:"默认加载模式",DEVICE_MODE:"设备模式",DEVICE_MODE_AUTO:"自动",DEVICE_MODE_DESKTOP:"桌面",DEVICE_MODE_TABLET:"平板",DEVICE_MODE_MOBILE:"手机",LOAD_MODE_NORMAL:"等待模式(等待3秒自动加载 )",LOAD_MODE_ALWAYS:"自动模式(无需等待)",LOAD_MODE_NEVER:"手动模式(点击启动)",LOAD_SPEED:"加载速度",DEFAULT_ZOOM:"默认缩放 (最小 5 最大 200)",DEFAULT_ZOOM_MODE:"默认缩放模式",MINIMUM_ZOOM:"相对于屏幕宽度的最小缩放 (最小 30 最大 100)",ZOOM_STEP:"缩放级别 (最小 5 最大 50)",DEFAULT_VIEW_MODE:"默认视图模式",VIEW_MODE_VERTICAL:"垂直有缝",VIEW_MODE_LEFT:"横向 - 从左到右",VIEW_MODE_RIGHT:"横向 - 从右到左",VIEW_MODE_WEBCOMIC:"垂直无缝",VIEW_MODE_BOOK:"书籍 - 从左到右",VIEW_MODE_MANGA:"漫画 - 从右到左",VIEW_MODE_GALLERY:"图库",FIT_WIDTH_OVERSIZED:"如果尺寸过大、则适合宽度",SHOW_THUMBNAILS:"显示缩略图",HIDE_CONTROLS:"始终隐藏页面控件",HEADER_TYPE:"更改标题显示方式",HEADER_HOVER:"悬停",HEADER_SCROLL:"滚动",HEADER_CLICK:"点击",HEADER_FIXED:"固定",HEADER_SIMPLE:"简单",BUTTON_DOWNLOAD:"下载",DOWNLOAD_ZIP:"下载压缩文件",DOWNLOAD_IMAGES:"自动将图片下载成ZIP",DOWNLOAD_PROGRESS:"正在下载：第 ##num## 页，共 ##total## 页",GENERATING_ZIP:"正在生成 Zip 文件...",DOWNLOAD_INCOMPLETE:"下载不完整",DOWNLOAD_INCOMPLETE_MESSAGE:"部分页面下载失败并已跳过。失败页面列表已添加到 ZIP 文件中。",BUTTON_NEXT:"下一页",NEXT_CHAPTER:"下一章",BUTTON_PREVIOUS:"上一页",PREVIOUS_CHAPTER:"上一章",BOOKMARKS:"书签",BOOKMARK:"Bookmark",BOOKMARK_REMOVED:"删除书签",BOOKMARK_SAVED:"保存书签",BOOKMARK_MESSAGE:"下次打开本章时，将从: 页码 ##num## (仅一次 每个书签)",KEYBINDINGS:"快捷键",EDIT_KEYBINDS:"编辑键绑定",SAVE_KEYBINDS:"保存键绑定",BUTTON_EDIT:"编辑",BUTTON_SAVE:"救",KEYBIND_RULES:`
    <h3>支持的密钥</h3>
    允许的修饰符: shift, option, alt, ctrl, control, command. <br/>
    特殊键: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide.<br/>
    例子: <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd>
  `,ATTENTION:"注意",WARNING:"警告",BUTTON_RESET_SETTINGS:"重置设置(Reset Settings)",SETTINGS_RESET:"设置已重置、重新加载页面才能生效",LANGUAGE_CHANGED:"语言已更改、重新加载页面才能生效",AUTO_DOWNLOAD:"下次章节加载完成时、系统将提示您自动保存",LAZY_LOAD:"延迟加载与zip下载不兼容、您将无法使用此设置下载.<br/> 建议: <span style='color:red;font-weight:bold'>禁用缩略图</span> 以节省流量和内存.",LAZY_LOAD_IMAGES_ENABLE:"启用延迟加载图像",LAZY_LOAD_IMAGES:"惰性加载从页面 (最小 5 最大 100)",RETURN_CHAPTER_LIST:"返回章节列表",PAGES_LOADED:"已加载的页数",GO_TO_PAGE:"转到页数",ENLARGE:"放大",RESTORE:"还原",REDUCE:"缩小",FIT_WIDTH:"适合宽度",FIT_HEIGHT:"适合高度",PERCENT:"百分之",TOGGLE_CONTROLS:"显示隐藏页面控件",ZOOM_IN:"放大",ZOOM_OUT:"缩小",ZOOM_RESET:"还原",ZOOM_WIDTH:"适合宽度",ZOOM_HEIGHT:"适合高度",HIDE:"显示隐藏页面控件",RELOAD:"重新加载",SLOWLY:"慢速",NORMAL:"正常",FAST:"快速",EXTREME:"极端",ALL_PAGES:"所有页面",SPEED_WARNING:"加载速度过高",SPEED_WARNING_MESSAGE:"不建议使用此速度.<br/>它可能会伤害某些服务器或将您的 IP 标记为 DDoS 攻击者.<br/>请谨慎使用!",SCROLL_UP:"向上滚动",SCROLL_DOWN:"向下滚动",CLOSE:"关闭",CANCEL:"取消",LIST_EMPTY:"没有收藏书签",SCROLL_START:"切换自动滚动",INCREASE_SPEED:"增加滚动速度",DECREASE_SPEED:"降低滚动速度",AUTO_SCROLL_HEIGHT:"自动滚动速度（以像素为单位）",VERTICAL_SEPARATOR:"显示垂直分隔符",END:"结尾",SCOPE:"范围",GLOBAL:"全球",GENERAL:"常规",LOADING:"装载",ZOOM:"缩放",OTHERS:"别人",NAVBAR_TYPE:"更改导航栏类型",NAVBAR_BOTTOM:"底部",NAVBAR_LEFT:"左边",NAVBAR_RIGHT:"正确的",NAVBAR_DISABLED:"已禁用",PAGINATION_TYPE:"分页类型",PAGINATION_DISABLED:"已禁用",PAGINATION_SLIDER:"滑块",PAGINATION_ARROWS:"侧边箭头",PAGINATION_BOTH:"两者",FILE_MENU:"主菜单",VIEW_MENU:"查看菜单",ZOOM_MENU:"缩放菜单",DOUBLE_PAGE:"切换双页",CHOOSE_FILE:"选择文件",NO_FILES_SELECTED:"未选择任何文件"},yo=[Vm,Zm,qm,Km,Um,jm],ma=globalThis,sl=ma.ShadowRoot&&(ma.ShadyCSS===void 0||ma.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ll=Symbol(),Su=new WeakMap,Au=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==ll)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(sl&&e===void 0){const n=t!==void 0&&t.length===1;n&&(e=Su.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&Su.set(t,e))}return e}toString(){return this.cssText}},Se=e=>new Au(typeof e=="string"?e:e+"",void 0,ll),kt=(e,...t)=>{const n=e.length===1?e[0]:t.reduce((o,a,s)=>o+(c=>{if(c._$cssResult$===!0)return c.cssText;if(typeof c=="number")return c;throw Error("Value passed to 'css' function must be a 'css' function result: "+c+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(a)+e[s+1],e[0]);return new Au(n,e,ll)},Ym=(e,t)=>{if(sl)e.adoptedStyleSheets=t.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(const n of t){const o=document.createElement("style"),a=ma.litNonce;a!==void 0&&o.setAttribute("nonce",a),o.textContent=n.cssText,e.appendChild(o)}},xu=sl?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let n="";for(const o of t.cssRules)n+=o.cssText;return Se(n)})(e):e,{is:Xm,defineProperty:Jm,getOwnPropertyDescriptor:Qm,getOwnPropertyNames:eg,getOwnPropertySymbols:tg,getPrototypeOf:rg}=Object,ga=globalThis,Iu=ga.trustedTypes,ng=Iu?Iu.emptyScript:"",og=ga.reactiveElementPolyfillSupport,gi=(e,t)=>e,va={toAttribute(e,t){switch(t){case Boolean:e=e?ng:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},cl=(e,t)=>!Xm(e,t),Cu={attribute:!0,type:String,converter:va,reflect:!1,useDefault:!1,hasChanged:cl};Symbol.metadata??=Symbol("metadata"),ga.litPropertyMetadata??=new WeakMap;var ko=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Cu){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const n=Symbol(),o=this.getPropertyDescriptor(e,n,t);o!==void 0&&Jm(this.prototype,e,o)}}static getPropertyDescriptor(e,t,n){const{get:o,set:a}=Qm(this.prototype,e)??{get(){return this[t]},set(s){this[t]=s}};return{get:o,set(s){const c=o?.call(this);a?.call(this,s),this.requestUpdate(e,c,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Cu}static _$Ei(){if(this.hasOwnProperty(gi("elementProperties")))return;const e=rg(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(gi("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(gi("properties"))){const t=this.properties,n=[...eg(t),...tg(t)];for(const o of n)this.createProperty(o,t[o])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[n,o]of t)this.elementProperties.set(n,o)}this._$Eh=new Map;for(const[t,n]of this.elementProperties){const o=this._$Eu(t,n);o!==void 0&&this._$Eh.set(o,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const o of n)t.unshift(xu(o))}else e!==void 0&&t.push(xu(e));return t}static _$Eu(e,t){const n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ym(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){const n=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,n);if(o!==void 0&&n.reflect===!0){const a=(n.converter?.toAttribute!==void 0?n.converter:va).toAttribute(t,n.type);this._$Em=e,a==null?this.removeAttribute(o):this.setAttribute(o,a),this._$Em=null}}_$AK(e,t){const n=this.constructor,o=n._$Eh.get(e);if(o!==void 0&&this._$Em!==o){const a=n.getPropertyOptions(o),s=typeof a.converter=="function"?{fromAttribute:a.converter}:a.converter?.fromAttribute!==void 0?a.converter:va;this._$Em=o;const c=s.fromAttribute(t,a.type);this[o]=c??this._$Ej?.get(o)??c,this._$Em=null}}requestUpdate(e,t,n,o=!1,a){if(e!==void 0){const s=this.constructor;if(o===!1&&(a=this[e]),n??=s.getPropertyOptions(e),!((n.hasChanged??cl)(a,t)||n.useDefault&&n.reflect&&a===this._$Ej?.get(e)&&!this.hasAttribute(s._$Eu(e,n))))return;this.C(e,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:o,wrapped:a},s){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,s??t??this[e]),a!==!0||s!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),o===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[o,a]of this._$Ep)this[o]=a;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[o,a]of n){const{wrapped:s}=a,c=this[o];s!==!0||this._$AL.has(o)||c===void 0||this.C(o,void 0,a,c)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(t)):this._$EM()}catch(n){throw e=!1,this._$EM(),n}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};ko.elementStyles=[],ko.shadowRootOptions={mode:"open"},ko[gi("elementProperties")]=new Map,ko[gi("finalized")]=new Map,og?.({ReactiveElement:ko}),(ga.reactiveElementVersions??=[]).push("2.1.2");var dl=globalThis,tt=class extends ko{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=$m(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return sn}};tt._$litElement$=!0,tt.finalized=!0,dl.litElementHydrateSupport?.({LitElement:tt});var ig=dl.litElementPolyfillSupport;ig?.({LitElement:tt}),(dl.litElementVersions??=[]).push("4.2.2");var lt=e=>(t,n)=>{n!==void 0?n.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},ag={attribute:!0,type:String,converter:va,reflect:!1,hasChanged:cl},sg=(e=ag,t,n)=>{const{kind:o,metadata:a}=n;let s=globalThis.litPropertyMetadata.get(a);if(s===void 0&&globalThis.litPropertyMetadata.set(a,s=new Map),o==="setter"&&((e=Object.create(e)).wrapped=!0),s.set(n.name,e),o==="accessor"){const{name:c}=n;return{set(l){const h=t.get.call(this);t.set.call(this,l),this.requestUpdate(c,h,e,!0,l)},init(l){return l!==void 0&&this.C(c,void 0,e,l),l}}}if(o==="setter"){const{name:c}=n;return function(l){const h=this[c];t.call(this,l),this.requestUpdate(c,h,e,!0,l)}}throw Error("Unsupported decorator location: "+o)};function q(e){return(t,n)=>typeof n=="object"?sg(e,t,n):((o,a,s)=>{const c=a.hasOwnProperty(s);return a.constructor.createProperty(s,o),c?Object.getOwnPropertyDescriptor(a,s):void 0})(e,t,n)}function Nt(e){return q({...e,state:!0,attribute:!1})}var Ou=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,n),n);function En(e,t){return(n,o,a)=>{const s=c=>c.renderRoot?.querySelector(e)??null;if(t){const{get:c,set:l}=typeof o=="object"?n:a??(()=>{const h=Symbol();return{get(){return this[h]},set(u){this[h]=u}}})();return Ou(n,o,{get(){let h=c.call(this);return h===void 0&&(h=s(this),(h!==null||this.hasUpdated)&&l.call(this,h)),h}})}return Ou(n,o,{get(){return s(this)}})}}var Et=pi(class extends fa{constructor(e){if(super(e),e.type!==ha.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in t)t[o]&&!this.nt?.has(o)&&this.st.add(o);return this.render(t)}const n=e.element.classList;for(const o of this.st)o in t||(n.remove(o),this.st.delete(o));for(const o in t){const a=!!t[o];a===this.st.has(o)||this.nt?.has(o)||(a?(n.add(o),this.st.add(o)):(n.remove(o),this.st.delete(o)))}return sn}}),ba=class extends fa{constructor(e){if(super(e),this.it=Ne,e.type!==ha.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===Ne||e==null)return this._t=void 0,this.it=e;if(e===sn)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};ba.directiveName="unsafeHTML",ba.resultType=1;var Tu=pi(ba),ul=class extends ba{};ul.directiveName="unsafeSVG",ul.resultType=2;var Lu=pi(ul);function Pu(e){if(e.startsWith("Icon")&&!e.includes("-")&&!e.includes("_"))return e;const t=e.startsWith("Icon")?e.substring(4):e;return`Icon${xe.default.upperFirst(xe.default.camelCase(t))}`}var lg=".icon-tabler-file-download>:nth-child(n+4){color:gold}.icon-tabler-arrow-autofit-width>:nth-child(n+3),.icon-tabler-arrow-autofit-height>:nth-child(n+3){color:#ff0}.icon-tabler-zoom-in-area>:nth-child(2),.icon-tabler-zoom-in-area>:nth-child(3){color:#0f0}.icon-tabler-zoom-out-area>:nth-child(2){color:red}.icon-tabler-zoom-pan>:nth-child(n+4){color:#96f}.icon-tabler-arrow-autofit-down>:nth-child(n+3),.icon-tabler-arrow-autofit-left>:nth-child(n+3),.icon-tabler-arrow-autofit-right>:nth-child(n+3){color:#28ffbf}.icon-tabler-spacing-vertical>:nth-child(4),.icon-tabler-spacing-horizontal>:nth-child(4){color:#f0f}.icon-tabler-list-numbers>:nth-child(n+5){color:#e48900}.icon-tabler-bookmarks>:nth-child(n+2),.icon-tabler-bookmark>:nth-child(2),.icon-tabler-bookmark-off>:nth-child(2){color:orange}.icon-tabler-bookmark-off>:nth-child(3),.icon-tabler-eye-off>:nth-child(4){color:red}.icon-tabler-zoom-cancel>:nth-child(3),.icon-tabler-zoom-cancel>:nth-child(4){color:#96f}.icon-tabler-zoom-in>:nth-child(3),.icon-tabler-zoom-in>:nth-child(4){color:#0f0}.icon-tabler-zoom-out>:nth-child(3){color:red}.icon-tabler-refresh>:nth-child(n+2){color:#0ff}.icon-tabler-photo>:nth-child(n+2),.icon-tabler-photo-off>:nth-child(n+2){color:silver}.icon-tabler-photo-off>:nth-child(6){color:orange}.icon-tabler-message>:nth-child(2),.icon-tabler-message>:nth-child(3),.icon-tabler-book-arrow-left>:nth-child(7),.icon-tabler-book-arrow-left>:nth-child(8),.icon-tabler-book-arrow-right>:nth-child(7),.icon-tabler-book-arrow-right>:nth-child(8),.icon-tabler-books-return>:nth-child(8),.icon-tabler-books-return>:nth-child(9){color:#adff2f}.icon-tabler-file-percent>:nth-child(2),.icon-tabler-file-percent>:nth-child(5),.icon-tabler-file-percent>:nth-child(6){color:#ff0}.icon-tabler-settings-off>:nth-child(4),.icon-tabler-book-off>:nth-child(7){color:red}",cg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-adjustments-horizontal"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M4 6l8 0"/><path d="M16 6l4 0"/><path d="M8 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M4 12l2 0"/><path d="M10 12l10 0"/><path d="M17 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M4 18l11 0"/><path d="M19 18l1 0"/></svg>',dg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-alert-circle"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>',ug='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-api-book"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 1.006 -.5"/><path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0"/><path d="M3 6v13"/><path d="M12 6v13"/><path d="M21 6v6"/><path d="M17.001 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M19.001 15.5v1.5"/><path d="M19.001 21v1.5"/><path d="M22.032 17.25l-1.299 .75"/><path d="M17.27 20l-1.3 .75"/><path d="M15.97 17.25l1.3 .75"/><path d="M20.733 20l1.3 .75"/></svg>',hg='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-autofit-down" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 20h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h8"/><path d="M18 4v17"/><path d="M15 18l3 3l3 -3"/></svg>',fg='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-autofit-height" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 20h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h6"/><path d="M18 14v7"/><path d="M18 3v7"/><path d="M15 18l3 3l3 -3"/><path d="M15 6l3 -3l3 3"/></svg>',pg='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-autofit-left" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 12v-6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v8"/><path d="M20 18h-17"/><path d="M6 15l-3 3l3 3"/></svg>',mg='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-autofit-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 12v-6a2 2 0 0 0 -2 -2h-12a2 2 0 0 0 -2 2v8"/><path d="M4 18h17"/><path d="M18 15l3 3l-3 3"/></svg>',gg='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-autofit-width" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 12v-6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v6"/><path d="M10 18h-7"/><path d="M21 18h-7"/><path d="M6 15l-3 3l3 3"/><path d="M18 15l3 3l-3 3"/></svg>',vg='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-big-left" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 15h-8v3.586a1 1 0 0 1 -1.707 .707l-6.586 -6.586a1 1 0 0 1 0 -1.414l6.586 -6.586a1 1 0 0 1 1.707 .707v3.586h8a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1z"/></svg>',bg='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-big-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 9h8v-3.586a1 1 0 0 1 1.707 -.707l6.586 6.586a1 1 0 0 1 0 1.414l-6.586 6.586a1 1 0 0 1 -1.707 -.707v-3.586h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1z"/></svg>',wg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrows-horizontal"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 8l-4 4l4 4"/><path d="M17 8l4 4l-4 4"/><path d="M3 12l18 0"/></svg>',_g='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrows-left-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M21 17l-18 0"/><path d="M6 10l-3 -3l3 -3"/><path d="M3 7l18 0"/><path d="M18 20l3 -3l-3 -3"/></svg>',yg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrows-move"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 9l3 3l-3 3"/><path d="M15 12h6"/><path d="M6 9l-3 3l3 3"/><path d="M3 12h6"/><path d="M9 18l3 3l3 -3"/><path d="M12 15v6"/><path d="M15 6l-3 -3l-3 3"/><path d="M12 3v6"/></svg>',kg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrows-move-vertical"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 18l3 3l3 -3"/><path d="M12 15v6"/><path d="M15 6l-3 -3l-3 3"/><path d="M12 3v6"/></svg>',Eg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrows-vertical"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 7l4 -4l4 4"/><path d="M8 17l4 4l4 -4"/><path d="M12 3l0 18"/></svg>',Mg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-book"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0"/><path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0"/><path d="M3 6l0 13"/><path d="M12 6l0 13"/><path d="M21 6l0 13"/></svg>',Sg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-book-arrow-left"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 1.006 -.5"/><path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0"/><path d="M3 6v13"/><path d="M12 6v13"/><path d="M21 6v6"/><path d="M16 19h6"/><path d="M19 16l-3 3l3 3"/></svg>',Ag='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-book-arrow-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 1.006 -.5"/><path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0"/><path d="M3 6v13"/><path d="M12 6v13"/><path d="M21 6v6"/><path d="M16 19h6"/><path d="M19 16l3 3l-3 3"/></svg>',xg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-book-off"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 5.899 -1.096"/><path d="M3 6a9 9 0 0 1 2.114 -.884m3.8 -.21c1.07 .17 2.116 .534 3.086 1.094a9 9 0 0 1 9 0"/><path d="M3 6v13"/><path d="M12 6v2m0 4v7"/><path d="M21 6v11"/><path d="M3 3l18 18"/></svg>',Ig='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-book-upload"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 20h-8a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12v5"/><path d="M11 16h-5a2 2 0 0 0 -2 2"/><path d="M15 16l3 -3l3 3"/><path d="M18 13v9"/></svg>',Cg='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bookmark" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 7v14l-6 -4l-6 4v-14a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4z"/></svg>',Og='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bookmark-off" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7.708 3.721a3.982 3.982 0 0 1 2.292 -.721h4a4 4 0 0 1 4 4v7m0 4v3l-6 -4l-6 4v-14c0 -.308 .035 -.609 .1 -.897"/><path d="M3 3l18 18"/></svg>',Tg='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bookmarks" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 10v11l-5 -3l-5 3v-11a3 3 0 0 1 3 -3h4a3 3 0 0 1 3 3z"/><path d="M11 3h5a3 3 0 0 1 3 3v11"/></svg>',Lg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-books-return"><defs><mask id="arrow-mask"><rect width="24" height="24" fill="white"/><rect x="15" y="15" width="8" height="8" fill="black"/></mask></defs><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 5a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -14"/><path d="M9 5a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -14"/><path d="M5 8h4"/><path d="M9 16h4"/><g mask="url(#arrow-mask)"><path d="M13.803 4.56l2.184 -.53c.562 -.135 1.133 .19 1.282 .732l3.695 13.418a1.02 1.02 0 0 1 -.634 1.219l-.133 .041l-2.184 .53c-.562 .135 -1.133 -.19 -1.282 -.732l-3.695 -13.418a1.02 1.02 0 0 1 .634 -1.219l.133 -.041"/><path d="M14 9l4 -1"/><path d="M16 16l3.923 -.98"/></g><path d="M16 19h6"/><path d="M19 16l-3 3l3 3"/></svg>',Pg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-box-align-top"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 10.005h16v-5a1 1 0 0 0 -1 -1h-14a1 1 0 0 0 -1 1v5z"/><path d="M4 15.005v-.01"/><path d="M4 20.005v-.01"/><path d="M9 20.005v-.01"/><path d="M15 20.005v-.01"/><path d="M20 20.005v-.01"/><path d="M20 15.005v-.01"/></svg>',Rg='<svg id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><g><g><path d="m427.508 512h-343.02c-5.69 0-10.302-4.612-10.302-10.302v-491.396c0-5.69 4.612-10.302 10.302-10.302h343.02c5.69 0 10.302 4.612 10.302 10.302v491.396c-.001 5.69-4.613 10.302-10.302 10.302z" fill="#f2eff2"/></g></g><path d="m427.512 0h-41.238c5.687 0 10.302 4.615 10.302 10.302v41.156l-18.039 71.714 18.039 81.268v46.358l-18.039 45.164 18.039 24.847v46.358l-10.302 61.227 10.302 32.149v41.156c0 5.687-4.615 10.302-10.302 10.302h41.238c5.687 0 10.302-4.615 10.302-10.302v-491.397c0-5.687-4.615-10.302-10.302-10.302z" fill="#e1dde1"/><g><path d="m243.51 273.63-47.48 104.08-80.61-10.85v-315.4c0-2.85 2.31-5.15 5.15-5.15h30.86c2.13 0 4.03 1.29 4.8 3.27z" fill="#3ad1e0"/><path d="m243.51 273.63-16.68 36.56-101.52-260.61c-.76-1.95-2.64-3.25-4.74-3.27h30.86c2.13 0 4.03 1.29 4.8 3.27z" fill="#22c7db"/><path d="m310.81 465.69h-190.24c-2.84 0-5.15-2.3-5.15-5.15v-93.68c25.18-34.92 65.99-57.81 112.19-58.37l-16.07 35.21 74.5 39.08 29.56 75.9c1.32 3.37-1.17 7.01-4.79 7.01z" fill="#fb33a8"/><path d="m310.81 465.69h-30.92c3.61 0 6.11-3.64 4.79-7.01l-12.92-33.17c-1.92 4.55-2.88 9.61-2.61 14.91.01.13.01.25.01.38 0 5.92-7.39 8.87-11.45 4.36-6.77-7.49-16.03-11.24-25.29-11.24s-18.54 3.75-25.29 11.24c-1.36 1.52-3.11 2.19-4.83 2.19-3.48 0-6.84-2.78-6.62-6.93.03-.59.04-1.18.04-1.77 0-19.36-16.23-34.99-35.81-33.99-.12.01-.24.01-.37.01-5.92 0-8.87-7.4-4.37-11.46 7.49-6.76 11.24-16.03 11.24-25.29s-3.75-18.52-11.24-25.29c-1.51-1.36-2.18-3.1-2.18-4.81 0-3.48 2.78-6.84 6.92-6.64.6.04 1.19.05 1.77.05 12.81 0 23.98-7.11 29.79-17.57l34.29-1.12-14.22 31.16 74.5 39.08 29.56 75.9c1.32 3.37-1.17 7.01-4.79 7.01z" fill="#fb33a8"/><path d="m396.58 51.46v152.98c0 2.84-2.31 5.15-5.15 5.15h-32l-40.41-29.31-40.41 29.31h-17.82c-2.12 0-4.03-1.3-4.8-3.28l-59.6-152.98c-1.32-3.38 1.18-7.02 4.79-7.02h190.25c2.84 0 5.15 2.3 5.15 5.15z" fill="#fcb44d"/><path d="m396.576 51.457v152.982c0 2.843-2.308 5.151-5.151 5.151h-30.927c2.843 0 5.151-2.308 5.151-5.151v-152.982c0-2.843-2.308-5.151-5.151-5.151h30.927c2.843.001 5.151 2.308 5.151 5.151z" fill="#fb9927"/><g><path d="m359.428 181.065v28.526h-80.818v-28.526c0-22.324 18.1-40.414 40.414-40.414 11.157 0 21.263 4.522 28.567 11.837 7.314 7.314 11.837 17.409 11.837 28.577z" fill="#ae6ad8"/><path d="m359.43 181.065v28.526h-29.237v-28.526c0-11.167-4.522-21.263-11.837-28.577-3.935-3.935-8.674-7.067-13.949-9.107 4.533-1.762 9.467-2.73 14.618-2.73 11.157 0 21.263 4.522 28.567 11.837 7.316 7.314 11.838 17.409 11.838 28.577z" fill="#975bbb"/><g><g><circle cx="319.023" cy="121.497" fill="#f2eff2" r="26.224"/></g></g></g><path d="m396.576 250.798v70.011c0 2.845-2.306 5.151-5.151 5.151h-85.311c-2.123 0-4.029-1.303-4.8-3.281l-27.273-70.011c-1.316-3.377 1.175-7.021 4.8-7.021h112.585c2.844 0 5.15 2.306 5.15 5.151z" fill="#23f1a8"/><path d="m396.576 250.798v70.011c0 2.843-2.308 5.151-5.151 5.151h-30.927c2.843 0 5.151-2.308 5.151-5.151v-70.011c0-2.843-2.308-5.151-5.151-5.151h30.927c2.843 0 5.151 2.307 5.151 5.151z" fill="#27e19d"/><path d="m324.179 362.016h67.246c2.845 0 5.151 2.306 5.151 5.151v93.376c0 2.845-2.306 5.151-5.151 5.151h-30.866c-2.123 0-4.029-1.303-4.799-3.281l-36.38-93.376c-1.316-3.377 1.175-7.021 4.799-7.021z" fill="#23f1a8"/><path d="m396.576 367.167v93.376c0 2.843-2.308 5.151-5.151 5.151h-30.927c2.843 0 5.151-2.308 5.151-5.151v-93.376c0-2.843-2.308-5.151-5.151-5.151h30.927c2.843 0 5.151 2.308 5.151 5.151z" fill="#27e19d"/></g><g><path d="m269.153 413.978c.01.124.01.247.01.371 0 5.924-7.397 8.87-11.456 4.368-6.768-7.489-16.03-11.239-25.291-11.239s-18.533 3.75-25.291 11.239c-1.36 1.514-3.101 2.184-4.821 2.184-3.482 0-6.84-2.782-6.624-6.923.031-.597.041-1.185.041-1.772 0-19.367-16.236-34.995-35.809-33.996-.124.01-.247.01-.371.01-5.924 0-8.87-7.397-4.368-11.456 7.489-6.758 11.239-16.03 11.239-25.291s-3.75-18.523-11.239-25.291c-1.514-1.36-2.184-3.101-2.184-4.811 0-3.482 2.782-6.84 6.923-6.634.597.031 1.185.041 1.772.041 19.367 0 34.995-16.236 33.996-35.799-.01-.124-.01-.247-.01-.371 0-5.934 7.397-8.87 11.456-4.378 6.758 7.489 16.03 11.239 25.291 11.239 3.76 0 7.51-.618 11.095-1.844l42.526 109.158c-10.591 6.183-17.565 17.916-16.885 31.195z" fill="#fdef63"/><path d="m268.516 417.19c.406-.839.648-1.79.648-2.841 0-.123 0-.247-.01-.371-.68-13.279 6.294-25.013 16.885-31.194l-42.526-109.158c-3.585 1.226-7.335 1.844-11.095 1.844-7.992 0-15.988-2.799-22.374-8.378z" fill="#f3d730"/></g><g><g><path d="m229.374 349.967c-4.267 0-7.726-3.459-7.726-7.726v-29.272c0-4.267 3.459-7.726 7.726-7.726s7.726 3.459 7.726 7.726v29.272c0 4.267-3.459 7.726-7.726 7.726z" fill="#554e55"/></g><g><path d="m229.374 377.711c-4.267 0-7.726-3.459-7.726-7.726v-2.061c0-4.267 3.459-7.726 7.726-7.726s7.726 3.459 7.726 7.726v2.061c0 4.267-3.459 7.726-7.726 7.726z" fill="#554e55"/></g></g><g><g><path d="m258.185 86.361h-18.228c-4.267 0-7.726-3.459-7.726-7.726s3.459-7.726 7.726-7.726h18.228c4.267 0 7.726 3.459 7.726 7.726 0 4.266-3.459 7.726-7.726 7.726z" fill="#f2eff2"/></g><g><path d="m266.269 111.168h-18.229c-4.267 0-7.726-3.459-7.726-7.726s3.459-7.726 7.726-7.726h18.228c4.267 0 7.726 3.459 7.726 7.726s-3.458 7.726-7.725 7.726z" fill="#f2eff2"/></g></g></g></svg>',$g=`<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve" width="512" height="512"><g><g><g><path style="fill: #f2eff2" d="M422.485,504.5H89.515c-5.523,0-10-4.477-10-10v-477c0-5.523,4.477-10,10-10h332.971&#10;&#9;&#9;&#9;&#9;c5.523,0,10,4.477,10,10v477C432.485,500.023,428.008,504.5,422.485,504.5z"/></g></g><g><g><path style="fill: #e1dde1" d="M432.49,17.5v477c0,5.52-4.48,10-10,10h-40.03c5.52,0,10-4.48,10-10v-477c0-5.52-4.48-10-10-10&#10;&#9;&#9;&#9;&#9;h40.03C428.01,7.5,432.49,11.98,432.49,17.5z"/></g></g><g><path style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " d="&#10;&#9;&#9;&#9;M334.56,7.5H89.515c-5.523,0-10,4.477-10,10v477c0,5.523,4.477,10,10,10h332.971c5.523,0,10-4.477,10-10v-477&#10;&#9;&#9;&#9;c0-5.523-4.477-10-10-10h-54.763"/></g><g><path style="fill: #3ad1e0" d="M313.86,452.74L159.16,55.63c-0.75-1.92-2.6-3.18-4.66-3.18h-29.96c-2.76,0-5,2.24-5,5v397.1&#10;&#9;&#9;&#9;c0,2.76,2.24,5,5,5h184.67C312.72,459.55,315.14,456.01,313.86,452.74z"/><path style="fill: #22c7db" d="M309.21,459.55h-30.02c3.51,0,5.93-3.54,4.65-6.81L129.14,55.63c-0.74-1.9-2.56-3.16-4.6-3.18&#10;&#9;&#9;&#9;h29.96c2.06,0,3.91,1.26,4.66,3.18l154.7,397.11C315.14,456.01,312.72,459.55,309.21,459.55z"/><path style="fill: #fb33a8" d="M258.193,309.845c-9.05-1.894-18.424-2.909-28.037-2.909c-45.55,0-85.862,22.354-110.616,56.676&#10;&#9;&#9;&#9;v90.938c0,2.76,2.24,5,5,5h184.67c3.51,0,5.93-3.54,4.65-6.81L258.193,309.845z"/><path style="fill: #ee2d9a" d="M193.362,311.966c-5.64,10.161-16.48,17.055-28.912,17.055c-0.57,0-1.14-0.01-1.72-0.04&#10;&#9;&#9;&#9;c-4.02-0.2-6.72,3.06-6.72,6.44c0,1.66,0.65,3.35,2.12,4.67c7.27,6.57,10.91,15.56,10.91,24.55s-3.64,17.99-10.91,24.55&#10;&#9;&#9;&#9;c-4.37,3.94-1.51,11.12,4.24,11.12c0.12,0,0.24,0,0.36-0.01c19-0.97,34.76,14.2,34.76,33c0,0.57-0.01,1.14-0.04,1.72&#10;&#9;&#9;&#9;c-0.21,4.02,3.05,6.72,6.43,6.72c1.67,0,3.36-0.65,4.68-2.12c6.56-7.27,15.56-10.91,24.55-10.91c8.99,0,17.98,3.64,24.55,10.91&#10;&#9;&#9;&#9;c3.94,4.37,11.12,1.51,11.12-4.24c0-0.12,0-0.24-0.01-0.36c-0.264-5.151,0.666-10.058,2.527-14.479l12.543,32.197&#10;&#9;&#9;&#9;c1.28,3.27-1.14,6.81-4.65,6.81h30.02c3.51,0,5.93-3.54,4.65-6.81l-55.667-142.895L193.362,311.966z"/><path style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " d="&#10;&#9;&#9;&#9;M230.156,306.937c-45.55,0-85.862,22.354-110.616,56.676"/><path style="fill: #fcb44d" d="M392.46,57.45v148.5c0,2.76-2.24,5-5,5H260.65c-2.06,0-3.91-1.26-4.66-3.18l-57.85-148.5&#10;&#9;&#9;&#9;c-1.28-3.28,1.14-6.82,4.65-6.82h184.67C390.22,52.45,392.46,54.69,392.46,57.45z"/><path style="fill: #fb9927" d="M392.46,57.45v148.5c0,2.76-2.24,5-5,5h-30.021c2.76,0,5-2.24,5-5V57.45c0-2.76-2.24-5-5-5h30.021&#10;&#9;&#9;&#9;C390.22,52.45,392.46,54.69,392.46,57.45z"/><g><path style="fill: #ae6ad8" d="M356.4,183.26v27.69h-78.45v-27.69c0-21.67,17.57-39.23,39.23-39.23&#10;&#9;&#9;&#9;&#9;c10.83,0,20.64,4.39,27.73,11.49C352.01,162.62,356.4,172.42,356.4,183.26z"/><path style="fill: #975bbb" d="M356.402,183.26v27.69h-28.38v-27.69c0-10.84-4.39-20.64-11.49-27.74&#10;&#9;&#9;&#9;&#9;c-3.82-3.82-8.42-6.86-13.54-8.84c4.4-1.71,9.19-2.65,14.19-2.65c10.83,0,20.64,4.39,27.73,11.49&#10;&#9;&#9;&#9;&#9;C352.012,162.62,356.402,172.42,356.402,183.26z"/><path style="\r
            fill: none;\r
            stroke: #000000;\r
            stroke-width: 15;\r
            stroke-linecap: round;\r
            stroke-linejoin: round;\r
            stroke-miterlimit: 10;\r
          " d="&#10;&#9;&#9;&#9;&#9;M277.95,210.95v-27.69c0-21.67,17.57-39.23,39.23-39.23c10.83,0,20.64,4.39,27.73,11.49c7.1,7.1,11.49,16.9,11.49,27.74v27.69"/><g><circle style="fill: #f2eff2" cx="317.179" cy="125.438" r="25.456"/><circle style="\r
              fill: none;\r
              stroke: #000000;\r
              stroke-width: 15;\r
              stroke-linecap: round;\r
              stroke-linejoin: round;\r
              stroke-miterlimit: 10;\r
            " cx="317.179" cy="125.438" r="25.456"/></g></g><path style="fill: #23f1a8" d="M392.46,250.95v67.96c0,2.761-2.239,5-5,5h-82.812c-2.061,0-3.911-1.265-4.659-3.185l-26.474-67.96&#10;&#9;&#9;&#9;c-1.277-3.278,1.141-6.815,4.659-6.815H387.46C390.221,245.95,392.46,248.189,392.46,250.95z"/><path style="fill: #27e19d" d="M392.46,250.95v67.96c0,2.76-2.24,5-5,5h-30.021c2.76,0,5-2.24,5-5v-67.96c0-2.76-2.24-5-5-5&#10;&#9;&#9;&#9;h30.021C390.22,245.95,392.46,248.19,392.46,250.95z"/><path style="fill: #23f1a8" d="M322.184,358.91h65.276c2.761,0,5,2.239,5,5v90.64c0,2.761-2.239,5-5,5h-29.962&#10;&#9;&#9;&#9;c-2.061,0-3.911-1.265-4.659-3.185l-35.314-90.64C316.248,362.447,318.666,358.91,322.184,358.91z"/><path style="fill: #27e19d" d="M392.46,363.91v90.64c0,2.76-2.24,5-5,5h-30.021c2.76,0,5-2.24,5-5v-90.64c0-2.76-2.24-5-5-5&#10;&#9;&#9;&#9;h30.021C390.22,358.91,392.46,361.15,392.46,363.91z"/><path style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " d="&#10;&#9;&#9;&#9;M119.54,242.003V454.55c0,2.761,2.239,5,5,5h184.666c3.518,0,5.936-3.537,4.659-6.815l-154.704-397.1&#10;&#9;&#9;&#9;c-0.748-1.92-2.598-3.185-4.659-3.185H124.54c-2.761,0-5,2.239-5,5v151.391"/><path style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " d="&#10;&#9;&#9;&#9;M392.46,57.45v148.5c0,2.761-2.239,5-5,5H260.648c-2.061,0-3.911-1.265-4.659-3.185l-57.854-148.5&#10;&#9;&#9;&#9;c-1.277-3.278,1.141-6.815,4.659-6.815H387.46C390.221,52.45,392.46,54.689,392.46,57.45z"/><path style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " d="&#10;&#9;&#9;&#9;M306.627,245.95h-28.454c-3.518,0-5.936,3.537-4.659,6.815l26.474,67.96c0.748,1.92,2.598,3.185,4.659,3.185h82.812&#10;&#9;&#9;&#9;c2.761,0,5-2.239,5-5v-67.96c0-2.761-2.239-5-5-5h-47.67"/><path style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " d="&#10;&#9;&#9;&#9;M322.184,358.91h65.276c2.761,0,5,2.239,5,5v90.64c0,2.761-2.239,5-5,5h-29.962c-2.061,0-3.911-1.265-4.659-3.185l-35.314-90.64&#10;&#9;&#9;&#9;C316.248,362.447,318.666,358.91,322.184,358.91z"/></g><g><path style="fill: #fdef63" d="M268.77,409.35c0.01,0.12,0.01,0.24,0.01,0.36c0,5.75-7.18,8.61-11.12,4.24&#10;&#9;&#9;&#9;c-6.57-7.27-15.56-10.91-24.55-10.91c-8.99,0-17.99,3.64-24.55,10.91c-1.32,1.47-3.01,2.12-4.68,2.12c-3.38,0-6.64-2.7-6.43-6.72&#10;&#9;&#9;&#9;c0.03-0.58,0.04-1.15,0.04-1.72c0-18.8-15.76-33.97-34.76-33c-0.12,0.01-0.24,0.01-0.36,0.01c-5.75,0-8.61-7.18-4.24-11.12&#10;&#9;&#9;&#9;c7.27-6.56,10.91-15.56,10.91-24.55s-3.64-17.98-10.91-24.55c-1.47-1.32-2.12-3.01-2.12-4.67c0-3.38,2.7-6.64,6.72-6.44&#10;&#9;&#9;&#9;c0.58,0.03,1.15,0.04,1.72,0.04c18.8,0,33.97-15.76,33-34.75c-0.01-0.12-0.01-0.24-0.01-0.36c0-5.76,7.18-8.61,11.12-4.25&#10;&#9;&#9;&#9;c6.56,7.27,15.56,10.91,24.55,10.91c3.65,0,7.29-0.6,10.77-1.79l41.28,105.96C274.88,385.07,268.11,396.46,268.77,409.35z"/><path style="fill: #f3d730" d="M268.151,412.468c0.394-0.814,0.629-1.738,0.629-2.758c0-0.12,0-0.24-0.01-0.36&#10;&#9;&#9;&#9;c-0.66-12.89,6.11-24.28,16.39-30.28l-41.28-105.96c-3.48,1.19-7.12,1.79-10.77,1.79c-7.758,0-15.52-2.717-21.718-8.132&#10;&#9;&#9;&#9;L268.151,412.468z"/><path style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " d="&#10;&#9;&#9;&#9;M268.77,409.35c0.01,0.12,0.01,0.24,0.01,0.36c0,5.75-7.18,8.61-11.12,4.24c-6.57-7.27-15.56-10.91-24.55-10.91&#10;&#9;&#9;&#9;c-8.99,0-17.99,3.64-24.55,10.91c-1.32,1.47-3.01,2.12-4.68,2.12c-3.38,0-6.64-2.7-6.43-6.72c0.03-0.58,0.04-1.15,0.04-1.72&#10;&#9;&#9;&#9;c0-18.8-15.76-33.97-34.76-33c-0.12,0.01-0.24,0.01-0.36,0.01c-5.75,0-8.61-7.18-4.24-11.12c7.27-6.56,10.91-15.56,10.91-24.55&#10;&#9;&#9;&#9;s-3.64-17.98-10.91-24.55c-1.47-1.32-2.12-3.01-2.12-4.67c0-3.38,2.7-6.64,6.72-6.44c0.58,0.03,1.15,0.04,1.72,0.04&#10;&#9;&#9;&#9;c18.8,0,33.97-15.76,33-34.75c-0.01-0.12-0.01-0.24-0.01-0.36c0-5.76,7.18-8.61,11.12-4.25c6.56,7.27,15.56,10.91,24.55,10.91&#10;&#9;&#9;&#9;c3.65,0,7.29-0.6,10.77-1.79l41.28,105.96C274.88,385.07,268.11,396.46,268.77,409.35z"/></g><g><line style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " x1="230.156" y1="339.714" x2="230.156" y2="311.299"/><line style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " x1="230.156" y1="364.644" x2="230.156" y2="366.646"/></g><g><line style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " x1="240.429" y1="83.83" x2="258.124" y2="83.83"/><line style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " x1="248.276" y1="107.911" x2="265.97" y2="107.911"/></g></g></svg>`,Dg=`<?xml version="1.0" encoding="UTF-8"?><svg version="1.1" id="svg3390" xml:space="preserve" width="682.66669" height="682.66669" viewBox="0 0 682.66669 682.66669" xmlns="http://www.w3.org/2000/svg"><defs id="defs3394"><clipPath clipPathUnits="userSpaceOnUse" id="clipPath3404"><path d="M 0,512 H 512 V 0 H 0 Z" id="path3402"/></clipPath></defs><g id="g3396" transform="matrix(1.3333333,0,0,-1.3333333,0,682.66667)"><g id="g3398"><g id="g3400" clip-path="url(#clipPath3404)"><g id="g3406" transform="translate(451.7344)"><path d="m 0,0 h -391.469 c -11.379,0 -20.603,9.225 -20.603,20.604 v 470.792 c 0,11.379 9.224,20.604 20.603,20.604 L 0,512 c 11.379,0 20.604,-9.225 20.604,-20.604 V 20.604 C 20.604,9.225 11.379,0 0,0" style="fill: #efe6e6; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3408"/></g><g id="g3410" transform="translate(472.3376,41.2072)"><path d="m 0,0 c -216.202,0 -391.468,175.266 -391.468,391.468 v 79.325 h -20.604 c -11.379,0 -20.604,-9.225 -20.604,-20.604 V -20.604 c 0,-11.379 9.225,-20.603 20.604,-20.603 H -20.603 C -9.224,-41.207 0,-31.983 0,-20.604 Z" style="fill: #e2d7d7; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3412"/></g><g id="g3414" transform="translate(235.3964,198.1382)"><path d="M 0,0 H 195.734 V 272.655 H 82.414 Z" style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3416"/></g><g id="g3418" transform="translate(235.3964,198.1382)"><path d="M 0,0 H 195.734 V 272.655 H 82.414 Z" style="fill: #5ad6ff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3420"/></g><g id="g3422" transform="translate(80.8692,198.1382)"><path d="m 0,0 h 113.32 l 82.414,272.655 H 0 Z" style="fill: #f4e74d; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3424"/></g><g id="g3426" transform="translate(80.8692,432.6757)"><path d="M 0,0 V -234.537 H 78.01 C 29.021,-169.169 0,-87.974 0,0" style="fill: #eedb00; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3428"/></g><path d="M 431.131,41.207 H 80.869 v 115.724 h 350.262 z" style="fill: #b18cd9; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3430"/><g id="g3432" transform="translate(194.475,156.931)"><path d="m 0,0 h -113.606 v -115.724 h 350.262 v 2.149 C 144.487,-103.933 61.838,-62.31 0,0" style="fill: #996acc; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3434"/></g><g id="g3436" transform="translate(213.2632,94.3332)"><path d="m 0,0 c 0,-10.991 -11.188,-19.901 -24.99,-19.901 -13.801,0 -24.989,8.91 -24.989,19.901 0,10.991 11.188,19.9 24.989,19.9 C -11.188,19.9 0,10.991 0,0" style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3438"/></g><g id="g3440" transform="translate(298.7368,94.3332)"><path d="m 0,0 c 0,-10.991 11.188,-19.901 24.99,-19.901 13.801,0 24.989,8.91 24.989,19.901 0,10.991 -11.188,19.9 -24.989,19.9 C 11.188,19.9 0,10.991 0,0" style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3442"/></g><g id="g3444" transform="translate(202.8374,123.7057)"><path d="M 0,0 V -10.216" style="\r
              fill: none;\r
              stroke: #3d4751;\r
              stroke-width: 15;\r
              stroke-linecap: round;\r
              stroke-linejoin: round;\r
              stroke-miterlimit: 10;\r
              stroke-dasharray: none;\r
              stroke-opacity: 1;\r
            " id="path3446"/></g><g id="g3448" transform="translate(309.1625,123.7057)"><path d="M 0,0 V -10.216" style="\r
              fill: none;\r
              stroke: #3d4751;\r
              stroke-width: 15;\r
              stroke-linecap: round;\r
              stroke-linejoin: round;\r
              stroke-miterlimit: 10;\r
              stroke-dasharray: none;\r
              stroke-opacity: 1;\r
            " id="path3450"/></g><g id="g3452" transform="translate(241.984,113.7942)"><path d="m 0,0 c 3.408,-3.911 8.421,-6.385 14.016,-6.385 5.595,0 10.608,2.474 14.016,6.385" style="\r
              fill: none;\r
              stroke: #3d4751;\r
              stroke-width: 15;\r
              stroke-linecap: round;\r
              stroke-linejoin: round;\r
              stroke-miterlimit: 10;\r
              stroke-dasharray: none;\r
              stroke-opacity: 1;\r
            " id="path3454"/></g><g id="g3456" transform="translate(150.0629,447.8862)"><path d="m 0,0 33.436,22.907 h -102.63 v -161.294 l 21.382,72.58 59.96,-46.151 -25.363,71.287 75.636,-2.093 z" style="fill: #fd5c6f; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3458"/></g><g id="g3460" transform="translate(80.8692,432.6757)"><path d="m 0,0 v -123.177 l 10.122,34.358 C 3.502,-60.282 0,-30.55 0,0" style="fill: #f6334c; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3462"/></g><g id="g3464" transform="translate(431.1308,271.141)"><path d="m 0,0 -57.698,-44.41 24.406,68.598 -72.782,-2.014 60.066,41.15 -60.066,41.151 72.782,-2.014 -24.406,68.597 L 0,126.649 Z" style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3466"/></g></g></g></g></svg>`,Bg=`<?xml version="1.0" encoding="UTF-8"?><svg version="1.1" id="svg5007" xml:space="preserve" width="682.66669" height="682.66669" viewBox="0 0 682.66669 682.66669" xmlns="http://www.w3.org/2000/svg"><defs id="defs5011"><clipPath clipPathUnits="userSpaceOnUse" id="clipPath5021"><path d="M 0,512 H 512 V 0 H 0 Z" id="path5019"/></clipPath></defs><g id="g5013" transform="matrix(1.3333333,0,0,-1.3333333,0,682.66667)"><g id="g5015"><g id="g5017" clip-path="url(#clipPath5021)"><g id="g5023" transform="translate(446,7.5)"><path d="m 0,0 h -380 c -11.046,0 -20,8.954 -20,20 v 457 c 0,11.046 8.954,20 20,20 H 0 c 11.046,0 20,-8.954 20,-20 V 20 C 20,8.954 11.046,0 0,0" style="fill: #efe6e6; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5025"/></g><g id="g5027" transform="translate(465.9996,47.5)"><path d="m 0,0 c -209.868,0 -380,170.132 -380,380 v 77 h -20 c -11.045,0 -20,-8.954 -20,-20 V -20 c 0,-11.046 8.955,-20 20,-20 h 380 c 11.046,0 20,8.954 20,20 z" style="fill: #e2d7d7; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5029"/></g><g id="g5031" transform="translate(236,199.8333)"><path d="M 0,0 H 190 V 264.667 H 80 Z" style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5033"/></g><g id="g5035" transform="translate(236,199.8333)"><path d="M 0,0 H 190 V 264.667 H 80 Z" style="fill: #5ad6ff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5037"/></g><g id="g5039" transform="translate(86,199.8333)"><path d="m 0,0 h 110 l 80,264.667 H 0 Z" style="fill: #f4e74d; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5041"/></g><g id="g5043" transform="translate(86,427.4996)"><path d="M 0,0 V -227.666 H 75.725 C 28.171,-164.213 0,-85.397 0,0" style="fill: #eedb00; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5045"/></g><path d="M 426,47.5 H 86 v 112.333 h 340 z" style="fill: #b18cd9; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5047"/><g id="g5049" transform="translate(196.2775,159.8334)"><path d="m 0,0 h -110.278 v -112.333 h 340 v 2.085 C 140.254,-100.888 60.026,-60.484 0,0" style="fill: #996acc; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5051"/></g><g id="g5053" transform="translate(214.5152,99.0695)"><path d="m 0,0 c 0,-10.669 -10.861,-19.318 -24.258,-19.318 -13.397,0 -24.257,8.649 -24.257,19.318 0,10.669 10.86,19.317 24.257,19.317 C -10.861,19.317 0,10.669 0,0" style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5055"/></g><g id="g5057" transform="translate(297.4848,99.0695)"><path d="m 0,0 c 0,-10.669 10.861,-19.318 24.258,-19.318 13.397,0 24.257,8.649 24.257,19.318 0,10.669 -10.86,19.317 -24.257,19.317 C 10.861,19.317 0,10.669 0,0" style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5059"/></g><g id="g5061" transform="translate(204.3949,127.5815)"><path d="M 0,0 V -9.916" style="\r
              fill: none;\r
              stroke: #000000;\r
              stroke-width: 15;\r
              stroke-linecap: round;\r
              stroke-linejoin: round;\r
              stroke-miterlimit: 10;\r
              stroke-dasharray: none;\r
              stroke-opacity: 1;\r
            " id="path5063"/></g><g id="g5065" transform="translate(307.605,127.5815)"><path d="M 0,0 V -9.916" style="\r
              fill: none;\r
              stroke: #000000;\r
              stroke-width: 15;\r
              stroke-linecap: round;\r
              stroke-linejoin: round;\r
              stroke-miterlimit: 10;\r
              stroke-dasharray: none;\r
              stroke-opacity: 1;\r
            " id="path5067"/></g><g id="g5069" transform="translate(242.3946,117.9604)"><path d="m 0,0 c 3.308,-3.796 8.175,-6.198 13.605,-6.198 5.431,0 10.298,2.402 13.606,6.198" style="\r
              fill: none;\r
              stroke: #000000;\r
              stroke-width: 15;\r
              stroke-linecap: round;\r
              stroke-linejoin: round;\r
              stroke-miterlimit: 10;\r
              stroke-dasharray: none;\r
              stroke-opacity: 1;\r
            " id="path5071"/></g><g id="g5073" transform="translate(153.1665,442.2645)"><path d="m 0,0 32.456,22.235 h -99.623 v -156.568 l 20.756,70.454 58.203,-44.799 -24.62,69.199 73.42,-2.032 z" style="fill: #fd5c6f; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5075"/></g><g id="g5077" transform="translate(86,427.4996)"><path d="m 0,0 v -119.568 l 9.825,33.351 C 3.399,-58.516 0,-29.655 0,0" style="fill: #f6334c; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5079"/></g><g id="g5081" transform="translate(426,270.6974)"><path d="m 0,0 -56.008,-43.108 23.692,66.587 -70.65,-1.955 58.306,39.945 -58.306,39.945 70.65,-1.955 -23.692,66.588 L 0,122.939 Z" style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5083"/></g><g id="g5085" transform="translate(446,7.5)"><path d="m 0,0 h -380 c -11.046,0 -20,8.954 -20,20 v 457 c 0,11.046 8.954,20 20,20 H 0 c 11.046,0 20,-8.954 20,-20 V 20 C 20,8.954 11.046,0 0,0 Z" style="\r
              fill: none;\r
              stroke: #000000;\r
              stroke-width: 15;\r
              stroke-linecap: round;\r
              stroke-linejoin: round;\r
              stroke-miterlimit: 10;\r
              stroke-dasharray: none;\r
              stroke-opacity: 1;\r
            " id="path5087"/></g><g id="g5089" transform="translate(426,346.167)"><path d="m 0,0 v 118.333 h -110 l -80,-264.667 H 0 V -28" style="\r
              fill: none;\r
              stroke: #000000;\r
              stroke-width: 15;\r
              stroke-linecap: round;\r
              stroke-linejoin: round;\r
              stroke-miterlimit: 10;\r
              stroke-dasharray: none;\r
              stroke-opacity: 1;\r
            " id="path5091"/></g><g id="g5093" transform="translate(86,199.8333)"><path d="m 0,0 h 110 l 80,264.667 H 0 Z" style="\r
              fill: none;\r
              stroke: #000000;\r
              stroke-width: 15;\r
              stroke-linecap: round;\r
              stroke-linejoin: round;\r
              stroke-miterlimit: 10;\r
              stroke-dasharray: none;\r
              stroke-opacity: 1;\r
            " id="path5095"/></g><g id="g5097" transform="translate(154.0172,159.8334)"><path d="m 0,0 h 271.983 v -112.333 h -340 V 0 H -28" style="\r
              fill: none;\r
              stroke: #000000;\r
              stroke-width: 15;\r
              stroke-linecap: round;\r
              stroke-linejoin: round;\r
              stroke-miterlimit: 10;\r
              stroke-dasharray: none;\r
              stroke-opacity: 1;\r
            " id="path5099"/></g><g id="g5101" transform="translate(86,307.9314)"><path d="m 0,0 20.756,70.454 58.203,-44.799 -24.62,69.199 73.419,-2.032 -60.591,41.511 32.455,22.236" style="\r
              fill: none;\r
              stroke: #000000;\r
              stroke-width: 15;\r
              stroke-linecap: round;\r
              stroke-linejoin: round;\r
              stroke-miterlimit: 10;\r
              stroke-dasharray: none;\r
              stroke-opacity: 1;\r
            " id="path5103"/></g><g id="g5105" transform="translate(426,270.6974)"><path d="m 0,0 -56.008,-43.108 23.692,66.587 -70.65,-1.955 58.306,39.945 -58.306,39.945 70.65,-1.955 -23.692,66.588 L 0,122.939" style="\r
              fill: none;\r
              stroke: #000000;\r
              stroke-width: 15;\r
              stroke-linecap: round;\r
              stroke-linejoin: round;\r
              stroke-miterlimit: 10;\r
              stroke-dasharray: none;\r
              stroke-opacity: 1;\r
            " id="path5107"/></g></g></g></g></svg>`,zg='<svg id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><g><g><path d="m427.508 512h-343.02c-5.69 0-10.302-4.612-10.302-10.302v-491.396c0-5.69 4.612-10.302 10.302-10.302h343.02c5.69 0 10.302 4.612 10.302 10.302v491.396c-.001 5.69-4.613 10.302-10.302 10.302z" fill="#f2eff2"/></g></g><path d="m427.512 0h-41.238c5.687 0 10.302 4.615 10.302 10.302v36.12l-18.016 49.462 18.016 36.952v51.701l-13.787 87.003 13.787 55.974v51.669l-18.016 52.406 18.016 34.008v36.1c0 5.687-4.615 10.302-10.302 10.302h41.238c5.687 0 10.302-4.615 10.302-10.302v-491.395c0-5.687-4.615-10.302-10.302-10.302z" fill="#e1dde1"/><path d="m396.6 46.36v86.52c0 2.85-2.31 5.15-5.15 5.15h-110.11l-22.53-48.41 22.53-48.41h110.11c2.84 0 5.15 2.3 5.15 5.15z" fill="#3ad1e0"/><path d="m396.599 46.358v86.525c0 2.843-2.308 5.151-5.151 5.151h-30.926c2.843 0 5.151-2.308 5.151-5.151v-86.525c0-2.843-2.308-5.151-5.151-5.151h30.926c2.844 0 5.151 2.308 5.151 5.151z" fill="#20bfd5"/><path d="m281.34 41.207h-39.904c-2.845 0-5.151 2.306-5.151 5.151v86.525c0 2.845 2.306 5.151 5.151 5.151h39.904z" fill="#23f1a8"/><path d="m304.73 470.79h-77.71l-39.22-20.29-39.23 20.29h-28.03c-2.84 0-5.15-2.3-5.15-5.15v-86.52c0-2.85 2.31-5.15 5.15-5.15h128.92c1.76 0 3.4.89 4.34 2.37l55.27 86.53c2.19 3.43-.27 7.92-4.34 7.92z" fill="#23f1a8"/><g><path d="m227.019 443.104v27.689h-78.446v-27.689c0-21.669 17.569-39.228 39.228-39.228 10.83 0 20.639 4.39 27.729 11.489 7.099 7.1 11.489 16.899 11.489 27.739z" fill="#ae6ad8"/><path d="m227.021 443.101v27.691h-29.061v-27.691c0-10.838-4.389-20.634-11.486-27.732-3.729-3.74-8.211-6.727-13.207-8.715 4.492-1.793 9.406-2.782 14.536-2.782 10.827 0 20.635 4.389 27.732 11.497 7.097 7.098 11.486 16.895 11.486 27.732z" fill="#975bbb"/></g><path d="m304.728 470.793h-30.926c4.069 0 6.531-4.492 4.347-7.922l-55.269-86.525c-.948-1.483-2.586-2.38-4.347-2.38h30.926c1.762 0 3.4.896 4.347 2.38l55.269 86.525c2.184 3.43-.278 7.922-4.347 7.922z" fill="#27e19d"/><path d="m391.448 373.966h-81.106c-4.068 0-6.531 4.495-4.341 7.924l55.269 86.525c.946 1.482 2.583 2.378 4.341 2.378h25.837c2.845 0 5.151-2.306 5.151-5.151v-86.525c0-2.845-2.306-5.151-5.151-5.151z" fill="#ae6ad8"/><path d="m396.599 379.117v86.525c0 2.843-2.308 5.151-5.151 5.151h-25.837c-.907 0-1.772-.237-2.534-.68 1.556-.886 2.596-2.555 2.596-4.471v-86.525c0-2.843-2.308-5.151-5.151-5.151h30.926c2.844 0 5.151 2.308 5.151 5.151z" fill="#975bbb"/><g><path d="m195.602 46.358v86.525c0 2.845-2.306 5.151-5.151 5.151h-69.91c-2.845 0-5.151-2.306-5.151-5.151v-86.525c0-2.845 2.306-5.151 5.151-5.151h69.91c2.845 0 5.151 2.306 5.151 5.151z" fill="#3ad1e0"/><path d="m195.6 46.358v86.525c0 2.843-2.308 5.151-5.151 5.151h-30.926c2.843 0 5.151-2.308 5.151-5.151v-86.525c0-2.843-2.308-5.151-5.151-5.151h30.926c2.844 0 5.151 2.308 5.151 5.151z" fill="#20bfd5"/></g><g><path d="m396.6 184.39v143.22c0 2.84-2.31 5.15-5.15 5.15h-30.93l-104.53-27.53-104.52 27.53h-30.93c-2.84 0-5.15-2.31-5.15-5.15v-143.22c0-2.84 2.31-5.15 5.15-5.15h47.77l87.68 16.15 87.69-16.15h47.77c2.84 0 5.15 2.31 5.15 5.15z" fill="#fb54b6"/></g><path d="m151.473 332.759c0-57.729 46.798-104.527 104.527-104.527s104.527 46.798 104.527 104.527z" fill="#fb9927"/><path d="m360.522 332.759h-35.397c0-51.694-37.519-94.612-86.824-103.028 5.748-.979 11.662-1.494 17.699-1.494 57.731 0 104.522 46.79 104.522 104.522z" fill="#f98824"/><g><path d="m396.599 184.392v143.216c0 2.843-2.308 5.151-5.151 5.151h-30.926c2.843 0 5.151-2.308 5.151-5.151v-143.216c0-2.843-2.308-5.151-5.151-5.151h30.926c2.844 0 5.151 2.308 5.151 5.151z" fill="#fb33a8"/></g><g><g><path d="m345.43 247.027c-.144 0-.299 0-.453-.01-24.024-1.226-43.947 17.946-43.947 41.722 0 .721.021 1.442.051 2.174.268 5.079-3.853 8.489-8.128 8.489-2.112 0-4.244-.814-5.913-2.678-8.293-9.189-19.676-13.794-31.039-13.794s-22.746 4.605-31.039 13.794c-1.669 1.865-3.801 2.678-5.913 2.678-4.275 0-8.396-3.41-8.128-8.489.031-.731.041-1.453.041-2.174 0-23.777-19.924-42.948-43.937-41.722-.155.01-.309.01-.464.01-7.263 0-10.879-9.076-5.357-14.062 9.189-8.293 13.794-19.666 13.794-31.039 0-7.912-2.225-15.813-6.686-22.685h175.378c-4.461 6.871-6.686 14.773-6.686 22.685 0 11.373 4.605 22.746 13.794 31.039 5.521 4.986 1.905 14.062-5.368 14.062z" fill="#fdef63"/><g><g id="XMLID_00000127012381744132405410000009872483291948348836_"><path d="m280.138 231.696c-4.268 0-7.726-3.459-7.726-7.726v-.107c0-4.267 3.459-7.726 7.726-7.726s7.726 3.459 7.726 7.726v.107c0 4.267-3.459 7.726-7.726 7.726z" fill="#554e55"/></g><g id="XMLID_00000080918978500845250090000017315552773041050031_"><path d="m256 231.696c-4.267 0-7.726-3.459-7.726-7.726v-.107c0-4.267 3.459-7.726 7.726-7.726 4.268 0 7.726 3.459 7.726 7.726v.107c0 4.267-3.458 7.726-7.726 7.726z" fill="#554e55"/></g><g id="XMLID_00000140711681861242238370000008769002181148908969_"><path d="m231.862 231.696c-4.267 0-7.726-3.459-7.726-7.726v-.107c0-4.267 3.459-7.726 7.726-7.726s7.726 3.459 7.726 7.726v.107c.001 4.267-3.459 7.726-7.726 7.726z" fill="#554e55"/></g></g><path d="m345.43 247.037c-.155 0-.299 0-.443-.021-24.034-1.226-43.948 17.956-43.948 41.722 0 .721.01 1.432.052 2.174.258 5.079-3.863 8.499-8.128 8.499-2.122 0-4.255-.824-5.924-2.689-6.954-7.685-16.05-12.167-25.507-13.423 29.968-14.804 50.582-45.678 50.582-81.364 0-7.84-.999-15.442-2.864-22.695h34.429c-4.45 6.871-6.676 14.783-6.676 22.685 0 11.373 4.605 22.757 13.784 31.05 5.532 4.966 1.926 14.062-5.357 14.062z" fill="#f3d730"/></g></g><g><g><g><circle cx="187.8" cy="385.284" fill="#d8b2ec" r="25.455"/></g></g></g><g><g id="XMLID_00000028301319025648580530000009457246182494066313_"><path d="m316.443 111.45c-4.258 0-7.714-3.445-7.726-7.705-.012-4.267 3.438-7.736 7.705-7.747l41.222-.114h.021c4.258 0 7.714 3.445 7.726 7.705.012 4.267-3.438 7.736-7.705 7.747l-41.222.114c-.007 0-.014 0-.021 0z" fill="#f2eff2"/></g><g><path d="m357.665 83.243h-21.761c-4.268 0-7.726-3.459-7.726-7.726s3.459-7.726 7.726-7.726h21.761c4.268 0 7.726 3.459 7.726 7.726s-3.458 7.726-7.726 7.726z" fill="#f2eff2"/></g></g></g></svg>',Ng=`<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve" width="512" height="512"><g><g><g><path style="fill: #f2eff2" d="M422.485,504.5H89.515c-5.523,0-10-4.477-10-10v-477c0-5.523,4.477-10,10-10h332.971&#10;&#9;&#9;&#9;&#9;c5.523,0,10,4.477,10,10v477C432.485,500.023,428.008,504.5,422.485,504.5z"/></g></g><g><g><path style="fill: #e1dde1" d="M432.49,17.5v477c0,5.52-4.48,10-10,10h-40.03c5.52,0,10-4.48,10-10v-477c0-5.52-4.48-10-10-10&#10;&#9;&#9;&#9;&#9;h40.03C428.01,7.5,432.49,11.98,432.49,17.5z"/></g></g><g><path style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " d="&#10;&#9;&#9;&#9;M158.639,7.5H89.515c-5.523,0-10,4.477-10,10v477c0,5.523,4.477,10,10,10h332.971c5.523,0,10-4.477,10-10v-477&#10;&#9;&#9;&#9;c0-5.523-4.477-10-10-10H191.801"/></g><path style="fill: #3ad1e0" d="M392.482,52.5v83.99c0,2.761-2.239,5-5,5H241.866c-2.761,0-5-2.239-5-5V52.5c0-2.761,2.239-5,5-5&#10;&#9;&#9;h145.617C390.244,47.5,392.482,49.739,392.482,52.5z"/><path style="fill: #20bfd5" d="M392.482,52.5v83.99c0,2.76-2.24,5-5,5h-30.02c2.76,0,5-2.24,5-5V52.5c0-2.76-2.24-5-5-5h30.02&#10;&#9;&#9;C390.242,47.5,392.482,49.74,392.482,52.5z"/><path style="fill: #26d192" d="M280.6,47.5h-38.735c-2.761,0-5,2.239-5,5v83.99c0,2.761,2.239,5,5,5H280.6V47.5z"/><line style="\r
        fill: none;\r
        stroke: #000000;\r
        stroke-width: 15;\r
        stroke-linecap: round;\r
        stroke-linejoin: round;\r
        stroke-miterlimit: 10;\r
      " x1="280.6" y1="141.49" x2="280.6" y2="47.5"/><path style="fill: #23f1a8" d="M124.512,370.51h125.143c1.706,0,3.295,0.87,4.214,2.308l53.65,83.99&#10;&#9;&#9;c2.126,3.328-0.264,7.692-4.214,7.692H124.512c-2.761,0-5-2.239-5-5v-83.99C119.512,372.749,121.751,370.51,124.512,370.51z"/><g><path style="fill: #ae6ad8" d="M227.87,437.622V464.5h-76.148v-26.878c0-21.034,17.054-38.079,38.079-38.079&#10;&#9;&#9;&#9;c10.512,0,20.034,4.261,26.916,11.153C223.609,417.588,227.87,427.1,227.87,437.622z"/><path style="fill: #975bbb" d="M227.872,437.62v26.88h-28.21v-26.88c0-10.52-4.26-20.03-11.15-26.92&#10;&#9;&#9;&#9;c-3.62-3.63-7.97-6.53-12.82-8.46c4.36-1.74,9.13-2.7,14.11-2.7c10.51,0,20.03,4.26,26.92,11.16&#10;&#9;&#9;&#9;C223.612,417.59,227.872,427.1,227.872,437.62z"/><path style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " d="&#10;&#9;&#9;&#9;M151.722,464.5v-26.878c0-21.034,17.054-38.079,38.079-38.079c10.512,0,20.034,4.261,26.916,11.153&#10;&#9;&#9;&#9;c6.892,6.892,11.153,16.404,11.153,26.926V464.5"/></g><path style="fill: #27e19d" d="M303.302,464.5h-30.02c3.95,0,6.34-4.36,4.22-7.69l-53.65-83.99c-0.92-1.44-2.51-2.31-4.22-2.31&#10;&#9;&#9;h30.02c1.71,0,3.3,0.87,4.22,2.31l53.65,83.99C309.642,460.14,307.252,464.5,303.302,464.5z"/><path style="fill: #ae6ad8" d="M387.482,370.51h-78.73c-3.949,0-6.34,4.363-4.214,7.692l53.65,83.99&#10;&#9;&#9;c0.919,1.438,2.507,2.308,4.214,2.308h25.08c2.761,0,5-2.239,5-5v-83.99C392.482,372.749,390.244,370.51,387.482,370.51z"/><path style="fill: #975bbb" d="M392.482,375.51v83.99c0,2.76-2.24,5-5,5h-25.08c-0.88,0-1.72-0.23-2.46-0.66&#10;&#9;&#9;c1.51-0.86,2.52-2.48,2.52-4.34v-83.99c0-2.76-2.24-5-5-5h30.02C390.242,370.51,392.482,372.75,392.482,375.51z"/><path style="\r
        fill: none;\r
        stroke: #000000;\r
        stroke-width: 15;\r
        stroke-linecap: round;\r
        stroke-linejoin: round;\r
        stroke-miterlimit: 10;\r
      " d="&#10;&#9;&#9;M392.482,52.5v83.99c0,2.761-2.239,5-5,5H241.866c-2.761,0-5-2.239-5-5V52.5c0-2.761,2.239-5,5-5h145.617&#10;&#9;&#9;C390.244,47.5,392.482,49.739,392.482,52.5z"/><g><path style="fill: #3ad1e0" d="M197.374,52.5v83.99c0,2.761-2.239,5-5,5h-67.862c-2.761,0-5-2.239-5-5V52.5c0-2.761,2.239-5,5-5&#10;&#9;&#9;&#9;h67.862C195.135,47.5,197.374,49.739,197.374,52.5z"/><path style="fill: #20bfd5" d="M197.372,52.5v83.99c0,2.76-2.24,5-5,5h-30.02c2.76,0,5-2.24,5-5V52.5c0-2.76-2.24-5-5-5h30.02&#10;&#9;&#9;&#9;C195.132,47.5,197.372,49.74,197.372,52.5z"/><path style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " d="&#10;&#9;&#9;&#9;M197.374,52.5v83.99c0,2.761-2.239,5-5,5h-67.862c-2.761,0-5-2.239-5-5V52.5c0-2.761,2.239-5,5-5h67.862&#10;&#9;&#9;&#9;C195.135,47.5,197.374,49.739,197.374,52.5z"/></g><g><path style="fill: #fb54b6" d="M124.512,181.49h262.97c2.761,0,5,2.239,5,5v139.02c0,2.761-2.239,5-5,5h-262.97&#10;&#9;&#9;&#9;c-2.761,0-5-2.239-5-5V186.49C119.512,183.729,121.751,181.49,124.512,181.49z"/></g><path style="fill: #fb9927" d="M154.537,330.51c0-56.038,45.427-101.465,101.465-101.465s101.465,45.427,101.465,101.465H154.537z"/><path style="fill: #f98824" d="M357.462,330.51h-34.36c0-50.18-36.42-91.84-84.28-100.01c5.58-0.95,11.32-1.45,17.18-1.45&#10;&#9;&#9;C312.042,229.05,357.462,274.47,357.462,330.51z"/><path style="\r
        fill: none;\r
        stroke: #000000;\r
        stroke-width: 15;\r
        stroke-linecap: round;\r
        stroke-linejoin: round;\r
        stroke-miterlimit: 10;\r
      " d="&#10;&#9;&#9;M154.537,330.51c0-56.038,45.427-101.465,101.465-101.465s101.465,45.427,101.465,101.465"/><g><path style="fill: #fb33a8" d="M392.482,186.49v139.02c0,2.76-2.24,5-5,5h-30.02c2.76,0,5-2.24,5-5V186.49c0-2.76-2.24-5-5-5&#10;&#9;&#9;&#9;h30.02C390.242,181.49,392.482,183.73,392.482,186.49z"/></g><g><g><path style="fill: #fdef63" d="M342.812,247.29c-0.14,0-0.29,0-0.44-0.01c-23.32-1.19-42.66,17.42-42.66,40.5&#10;&#9;&#9;&#9;&#9;c0,0.7,0.02,1.4,0.05,2.11c0.26,4.93-3.74,8.24-7.89,8.24c-2.05,0-4.12-0.79-5.74-2.6c-8.05-8.92-19.1-13.39-30.13-13.39&#10;&#9;&#9;&#9;&#9;s-22.08,4.47-30.13,13.39c-1.62,1.81-3.69,2.6-5.74,2.6c-4.15,0-8.15-3.31-7.89-8.24c0.03-0.71,0.04-1.41,0.04-2.11&#10;&#9;&#9;&#9;&#9;c0-23.08-19.34-41.69-42.65-40.5c-0.15,0.01-0.3,0.01-0.45,0.01c-7.05,0-10.56-8.81-5.2-13.65c8.92-8.05,13.39-19.09,13.39-30.13&#10;&#9;&#9;&#9;&#9;c0-7.68-2.16-15.35-6.49-22.02h170.24c-4.33,6.67-6.49,14.34-6.49,22.02c0,11.04,4.47,22.08,13.39,30.13&#10;&#9;&#9;&#9;&#9;C353.382,238.48,349.872,247.29,342.812,247.29z"/><g><line id="XMLID_00000127012381744132405410000009872483291948348836_" style="\r
              fill: none;\r
              stroke: #000000;\r
              stroke-width: 15;\r
              stroke-linecap: round;\r
              stroke-linejoin: round;\r
              stroke-miterlimit: 10;\r
            " x1="279.433" y1="224.908" x2="279.433" y2="224.805"/><line id="XMLID_00000080918978500845250090000017315552773041050031_" style="\r
              fill: none;\r
              stroke: #000000;\r
              stroke-width: 15;\r
              stroke-linecap: round;\r
              stroke-linejoin: round;\r
              stroke-miterlimit: 10;\r
            " x1="256.002" y1="224.908" x2="256.002" y2="224.805"/><line id="XMLID_00000140711681861242238370000008769002181148908969_" style="\r
              fill: none;\r
              stroke: #000000;\r
              stroke-width: 15;\r
              stroke-linecap: round;\r
              stroke-linejoin: round;\r
              stroke-miterlimit: 10;\r
            " x1="232.572" y1="224.908" x2="232.572" y2="224.805"/></g><path style="fill: #f3d730" d="M342.812,247.3c-0.15,0-0.29,0-0.43-0.02c-23.33-1.19-42.66,17.43-42.66,40.5&#10;&#9;&#9;&#9;&#9;c0,0.7,0.01,1.39,0.05,2.11c0.25,4.93-3.75,8.25-7.89,8.25c-2.06,0-4.13-0.8-5.75-2.61c-6.75-7.46-15.58-11.81-24.76-13.03&#10;&#9;&#9;&#9;&#9;c29.09-14.37,49.1-44.34,49.1-78.98c0-7.61-0.97-14.99-2.78-22.03h33.42c-4.32,6.67-6.48,14.35-6.48,22.02&#10;&#9;&#9;&#9;&#9;c0,11.04,4.47,22.09,13.38,30.14C353.382,238.47,349.882,247.3,342.812,247.3z"/></g><path style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " d="&#10;&#9;&#9;&#9;M341.122,181.49c-4.33,6.67-6.49,14.34-6.49,22.02c0,11.04,4.47,22.08,13.39,30.13c5.36,4.84,1.85,13.65-5.21,13.65&#10;&#9;&#9;&#9;c-0.14,0-0.29,0-0.44-0.01c-23.32-1.19-42.66,17.42-42.66,40.5c0,0.7,0.02,1.4,0.05,2.11c0.26,4.93-3.74,8.24-7.89,8.24&#10;&#9;&#9;&#9;c-2.05,0-4.12-0.79-5.74-2.6c-8.05-8.92-19.1-13.39-30.13-13.39s-22.08,4.47-30.13,13.39c-1.62,1.81-3.69,2.6-5.74,2.6&#10;&#9;&#9;&#9;c-4.15,0-8.15-3.31-7.89-8.24c0.03-0.71,0.04-1.41,0.04-2.11c0-23.08-19.34-41.69-42.65-40.5c-0.15,0.01-0.3,0.01-0.45,0.01&#10;&#9;&#9;&#9;c-7.05,0-10.56-8.81-5.2-13.65c8.92-8.05,13.39-19.09,13.39-30.13c0-7.68-2.16-15.35-6.49-22.02"/></g><g><path style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " d="&#10;&#9;&#9;&#9;M208.726,181.49h-84.213c-2.761,0-5,2.239-5,5v139.02c0,2.761,2.239,5,5,5h262.97c2.761,0,5-2.239,5-5V186.49c0-2.761-2.239-5-5-5&#10;&#9;&#9;&#9;H241.888"/></g><path style="\r
        fill: none;\r
        stroke: #000000;\r
        stroke-width: 15;\r
        stroke-linecap: round;\r
        stroke-linejoin: round;\r
        stroke-miterlimit: 10;\r
      " d="&#10;&#9;&#9;M124.512,370.51h125.143c1.706,0,3.295,0.87,4.214,2.308l53.65,83.99c2.126,3.328-0.264,7.692-4.214,7.692H124.512&#10;&#9;&#9;c-2.761,0-5-2.239-5-5v-83.99C119.512,372.749,121.751,370.51,124.512,370.51z"/><path style="\r
        fill: none;\r
        stroke: #000000;\r
        stroke-width: 15;\r
        stroke-linecap: round;\r
        stroke-linejoin: round;\r
        stroke-miterlimit: 10;\r
      " d="&#10;&#9;&#9;M392.482,397.976V375.51c0-2.761-2.239-5-5-5h-78.73c-3.949,0-6.34,4.363-4.214,7.692l53.65,83.99&#10;&#9;&#9;c0.919,1.438,2.507,2.308,4.214,2.308h25.08c2.761,0,5-2.239,5-5v-28.362"/><g><g><g><circle style="fill: #d8b2ec" cx="189.8" cy="381.497" r="24.709"/><circle style="\r
              fill: none;\r
              stroke: #000000;\r
              stroke-width: 15;\r
              stroke-linecap: round;\r
              stroke-linejoin: round;\r
              stroke-miterlimit: 10;\r
            " cx="189.8" cy="381.497" r="24.709"/></g></g></g><g><line id="XMLID_00000028301319025648580530000009457246182494066313_" style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " x1="314.674" y1="108.185" x2="354.689" y2="108.075"/><line style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " x1="333.566" y1="80.805" x2="354.689" y2="80.805"/></g></g></svg>`,Hg='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-category" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4h6v6h-6z"/><path d="M14 4h6v6h-6z"/><path d="M4 14h6v6h-6z"/><path d="M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"/></svg>',Fg='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-check" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l5 5l10 -10"/></svg>',Gg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 6l-6 6l6 6"/></svg>',Wg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 6l6 6l-6 6"/></svg>',Ug='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-circle-check"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"/><path d="M9 12l2 2l4 -4"/></svg>',Vg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-circle-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"/><path d="M10 10l4 4m0 -4l-4 4"/></svg>',Zg=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-desktop" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 5a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1z"/><path d="M7 20h10"/><path d="M9 16v4"/><path d="M15 16v4"/></svg>\r
`,jg='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-floppy" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2"/><path d="M12 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M14 4l0 4l-6 0l0 -4"/></svg>',qg=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-mobile" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 5a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z"/><path d="M11 4h2"/><path d="M12 17v.01"/></svg>\r
`,Kg=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-tablet" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 4a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v16a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1z"/><path d="M11 17a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"/></svg>\r
`,Yg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-dots-vertical"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/><path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/><path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/></svg>',Xg='<svg id="Capa_1" enable-background="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g><g><path d="m369.32 512h-226.64c-45.516 0-82.414-36.898-82.414-82.414v-347.172c0-45.516 36.898-82.414 82.414-82.414h226.64c45.516 0 82.414 36.898 82.414 82.414v347.171c0 45.517-36.898 82.415-82.414 82.415z" fill="#636978"/></g><g><path d="m225.095 450.189v-388.378c0-34.137 27.673-61.811 61.81-61.811h-144.225c-45.516 0-82.414 36.898-82.414 82.414v347.171c0 45.516 36.898 82.414 82.414 82.414h144.225c-34.137.001-61.81-27.673-61.81-61.81z" fill="#555a66"/></g><g><path d="m369.32 61.811h-226.64c-11.379 0-20.604 9.225-20.604 20.604v336.869c0 11.379 9.225 20.604 20.604 20.604h226.64c11.379 0 20.604-9.225 20.604-20.604v-336.87c0-11.379-9.225-20.603-20.604-20.603z" fill="#96e8ff"/></g><g><path d="m122.076 82.414v336.869c0 11.379 9.225 20.604 20.604 20.604h82.414v-378.076h-82.414c-11.379 0-20.604 9.224-20.604 20.603z" fill="#80dbff"/></g><g><path d="m256 111.277c-27.66-8.24-55.124-9.125-82.742-2.655-5.835 1.367-9.975 6.555-9.975 12.548v95.771c0 6.566 6.064 11.463 12.479 10.063 23.872-5.21 47.636-4.921 71.52.866 5.731 1.389 11.704 1.389 17.435 0 23.884-5.788 47.648-6.077 71.52-.866 6.415 1.4 12.479-3.497 12.479-10.063 0-40.343 0-55.429 0-95.771 0-5.993-4.139-11.181-9.975-12.548-27.617-6.471-55.081-5.585-82.741 2.655z" fill="#fff"/></g><g><path d="m173.258 108.622c-5.835 1.367-9.975 6.555-9.975 12.548v95.771c0 6.566 6.064 11.463 12.479 10.063 23.872-5.21 47.636-4.921 71.52.866 2.866.694 5.791 1.041 8.717 1.041v-117.634c-27.659-8.24-55.123-9.126-82.741-2.655z" fill="#f5fafc"/></g><g><path d="m205.037 104.432c-10.584.315-21.171 1.704-31.781 4.19-5.834 1.367-9.973 6.56-9.973 12.552v95.761c0 6.547 6.037 11.478 12.432 10.08 23.888-5.221 47.667-4.935 71.567.856 2.866.694 8.717 1.042 8.717 1.042 0-13.231-13.741-21.854-26.952-27.087-14.54-5.759-24.011-19.905-24.011-35.544v-61.85z" fill="#e1f1fa"/></g><g><g><path d="m338.414 289.266h-164.829c-4.142 0-7.5-3.357-7.5-7.5s3.358-7.5 7.5-7.5h164.829c4.143 0 7.5 3.357 7.5 7.5s-3.357 7.5-7.5 7.5z" fill="#19cffc"/></g><g><path d="m338.414 330.473h-164.829c-4.142 0-7.5-3.357-7.5-7.5s3.358-7.5 7.5-7.5h164.829c4.143 0 7.5 3.357 7.5 7.5s-3.357 7.5-7.5 7.5z" fill="#19cffc"/></g><g><g><path d="m191.667 385.134c-4.142 0-7.5-3.357-7.5-7.5v-12.362c0-4.143 3.358-7.5 7.5-7.5s7.5 3.357 7.5 7.5v12.362c0 4.142-3.358 7.5-7.5 7.5z" fill="#495560"/></g><g><path d="m320.333 385.134c-4.143 0-7.5-3.357-7.5-7.5v-12.362c0-4.143 3.357-7.5 7.5-7.5s7.5 3.357 7.5 7.5v12.362c0 4.142-3.357 7.5-7.5 7.5z" fill="#495560"/></g><g><path d="m256 392.493c-8.668 0-16.911-3.754-22.615-10.3-2.721-3.123-2.396-7.86.727-10.582 3.122-2.721 7.86-2.396 10.582.727 2.855 3.276 6.976 5.155 11.307 5.155s8.452-1.879 11.307-5.155c2.723-3.122 7.457-3.447 10.582-.727 3.122 2.722 3.448 7.459.727 10.582-5.706 6.546-13.949 10.3-22.617 10.3z" fill="#495560"/></g></g></g></g><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/></svg>',Jg=`<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve"><g><path style="fill: #636978" d="M366,504.5H146c-44.183,0-80-35.817-80-80v-337c0-44.183,35.817-80,80-80h220&#10;&#9;&#9;c44.183,0,80,35.817,80,80v337C446,468.683,410.183,504.5,366,504.5z"/><path style="fill: #555a66" d="M226,444.5v-377c0-33.137,26.863-60,60-60H146c-44.183,0-80,35.817-80,80v337&#10;&#9;&#9;c0,44.183,35.817,80,80,80h140C252.863,504.5,226,477.637,226,444.5z"/><path style="fill: #96e8ff" d="M366,67.5H146c-11.046,0-20,8.954-20,20v327c0,11.046,8.954,20,20,20h220c11.046,0,20-8.954,20-20&#10;&#9;&#9;v-327C386,76.454,377.046,67.5,366,67.5z"/><path style="fill: #80dbff" d="M126,87.5v327c0,11.046,8.954,20,20,20h80v-367h-80C134.954,67.5,126,76.454,126,87.5z"/><path style="fill: #ffffff" d="M256,115.517c-26.85-7.998-53.509-8.858-80.318-2.577c-5.664,1.327-9.682,6.363-9.682,12.18&#10;&#9;&#9;c0,39.161,0,53.805,0,92.965c0,6.374,5.886,11.128,12.113,9.768c23.172-5.058,46.241-4.777,69.425,0.841&#10;&#9;&#9;c5.563,1.348,11.361,1.348,16.924,0c23.184-5.618,46.252-5.898,69.425-0.841c6.227,1.359,12.113-3.395,12.113-9.768&#10;&#9;&#9;c0-39.161,0-53.805,0-92.965c0-5.818-4.018-10.853-9.682-12.18C309.509,106.659,282.85,107.518,256,115.517z"/><path style="fill: #f5fafc" d="M175.682,112.94c-5.664,1.327-9.682,6.363-9.682,12.18c0,39.161,0,53.805,0,92.965&#10;&#9;&#9;c0,6.374,5.886,11.128,12.113,9.769c23.172-5.058,46.241-4.777,69.425,0.841c2.782,0.674,5.622,1.011,8.462,1.011V115.517&#10;&#9;&#9;C229.15,107.518,202.491,106.659,175.682,112.94z"/><path style="fill: #e1f1fa" d="M206.53,108.873c-10.274,0.306-20.551,1.654-30.85,4.067c-5.663,1.327-9.681,6.368-9.681,12.184&#10;&#9;&#9;c0,39.155,0,53.801,0,92.955c0,6.355,5.86,11.141,12.068,9.785c23.188-5.068,46.271-4.791,69.47,0.831&#10;&#9;&#9;c2.782,0.674,8.462,1.011,8.462,1.011c0-12.844-13.338-21.214-26.163-26.293c-14.114-5.59-23.307-19.322-23.307-34.502V108.873z"/><g><path style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " d="&#10;&#9;&#9;&#9;M366,504.5H146c-44.183,0-80-35.817-80-80v-337c0-44.183,35.817-80,80-80h220c44.183,0,80,35.817,80,80v337&#10;&#9;&#9;&#9;C446,468.683,410.183,504.5,366,504.5z"/><path style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " d="&#10;&#9;&#9;&#9;M126,398.01v16.49c0,11.046,8.954,20,20,20h220c11.046,0,20-8.954,20-20v-327c0-11.046-8.954-20-20-20H146&#10;&#9;&#9;&#9;c-11.046,0-20,8.954-20,20v280.51"/><line style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " x1="176" y1="281.01" x2="336" y2="281.01"/><line style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " x1="176" y1="321.01" x2="336" y2="321.01"/><path style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " d="&#10;&#9;&#9;&#9;M286.144,109.53c-10.033,0.992-20.075,2.987-30.144,5.986c-26.85-7.998-53.509-8.858-80.318-2.577&#10;&#9;&#9;&#9;c-5.664,1.327-9.682,6.363-9.682,12.18c0,39.161,0,53.805,0,92.965c0,6.374,5.886,11.128,12.113,9.768&#10;&#9;&#9;&#9;c23.172-5.058,46.241-4.777,69.425,0.841c5.563,1.348,11.361,1.348,16.924,0c23.184-5.618,46.252-5.898,69.425-0.841&#10;&#9;&#9;&#9;c6.227,1.359,12.113-3.395,12.113-9.768c0-39.161,0-53.805,0-92.965c0-5.818-4.018-10.853-9.682-12.18&#10;&#9;&#9;&#9;c-6.702-1.57-13.395-2.694-20.084-3.372"/><line style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " x1="256" y1="115.517" x2="256" y2="229.706"/><g><line style="\r
            fill: none;\r
            stroke: #000000;\r
            stroke-width: 15;\r
            stroke-linecap: round;\r
            stroke-linejoin: round;\r
            stroke-miterlimit: 10;\r
          " x1="193.551" y1="362.07" x2="193.551" y2="374.07"/><line style="\r
            fill: none;\r
            stroke: #000000;\r
            stroke-width: 15;\r
            stroke-linecap: round;\r
            stroke-linejoin: round;\r
            stroke-miterlimit: 10;\r
          " x1="318.449" y1="362.07" x2="318.449" y2="374.07"/><path style="\r
            fill: none;\r
            stroke: #000000;\r
            stroke-width: 15;\r
            stroke-linecap: round;\r
            stroke-linejoin: round;\r
            stroke-miterlimit: 10;\r
          " d="&#10;&#9;&#9;&#9;&#9;M239.536,373.713c4.003,4.594,9.892,7.501,16.464,7.501c6.572,0,12.461-2.907,16.464-7.501"/></g></g></g><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/></svg>`,Qg='<svg id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m449.945 61.818v388.363c0 34.144-27.684 61.818-61.818 61.818h-264.254c-34.134 0-61.818-27.674-61.818-61.818v-388.363c0-34.144 27.684-61.818 61.818-61.818h264.253c34.135 0 61.819 27.674 61.819 61.818z" fill="#808fa4"/><path d="m188.464 512h-64.59c-34.134 0-61.818-27.674-61.818-61.818v-388.364c-.001-34.144 27.683-61.818 61.817-61.818h50.341c-7.367 6.574-15.218 18.092-15.218 37.359v423.909c.001 0-.215 30.24 29.468 50.732z" fill="#64768e"/><path d="m418.912 61.942v147.509l-194.274 13.033 77.912-191.451h85.453c17.072 0 30.909 13.837 30.909 30.909z" fill="#c5ced6"/><path d="m271.516 31.033-46.878 191.451-65.641-6.501-65.909-6.532 20.843-140.421 45.365-37.997z" fill="#abb6c4"/><path d="m159.296 31.033c-.196 2.009-.299 4.121-.299 6.326v178.624l-65.909-6.532v-147.509c0-17.072 13.837-30.909 30.909-30.909z" fill="#9ca9ba"/><path d="m313.676 222.484-18.885 196.428h-135.794l-51.732-35.968-14.177-142.46 65.909-5.379z" fill="#c5ced6"/><path d="m93.088 240.484 65.909-5.378v183.807h-35c-17.072 0-30.909-13.837-30.909-30.909z" fill="#abb6c4"/><path d="m418.912 240.484v147.519c0 17.072-13.837 30.909-30.909 30.909h-62.19l-12.137-196.428z" fill="#64768e"/><path d="m287.487 480.971h-62.974c-8.317 0-15.059-6.742-15.059-15.059v-.913c0-8.317 6.742-15.059 15.059-15.059h62.974c8.317 0 15.059 6.742 15.059 15.059v.913c0 8.316-6.743 15.059-15.059 15.059z" fill="#64768e"/><path d="m418.912 209.451v31.033h-77.644c-8.531 0-15.455 6.924-15.455 15.455v162.974h-31.022v-162.975c0-8.531-6.923-15.455-15.455-15.455h-120.34l-13.147-13.27 13.147-17.763h44.138c6.718 0 12.673-4.348 14.723-10.746l53.658-167.672h31.033l-50.65 158.255c-3.183 9.974 4.255 20.163 14.723 20.163h152.291z" fill="#e8ecf9"/><path d="m93.088 209.451h65.909v31.033h-65.909z" fill="#d7ddf5"/><g><g><path d="m129.509 332.474c-4.268 0-7.727-3.459-7.727-7.727v-12.364c0-4.268 3.459-7.727 7.727-7.727s7.727 3.459 7.727 7.727v12.364c0 4.268-3.459 7.727-7.727 7.727z" fill="#495560"/></g><g><path d="m258.191 332.474c-4.268 0-7.727-3.459-7.727-7.727v-12.364c0-4.268 3.459-7.727 7.727-7.727s7.727 3.459 7.727 7.727v12.364c.001 4.268-3.458 7.727-7.727 7.727z" fill="#495560"/></g><path d="m223.825 324.391c-4.268 0-7.727 3.459-7.727 7.727 0 3.952-3.215 7.167-7.166 7.167-3.952 0-7.167-3.215-7.167-7.167 0-4.268-3.459-7.727-7.727-7.727s-7.727 3.459-7.727 7.727c0 3.952-3.215 7.167-7.166 7.167-3.952 0-7.167-3.215-7.167-7.167 0-4.268-3.459-7.727-7.727-7.727s-7.727 3.459-7.727 7.727c0 12.473 10.148 22.621 22.621 22.621 5.7 0 10.911-2.124 14.894-5.616 3.982 3.492 9.193 5.616 14.894 5.616 12.473 0 22.62-10.148 22.62-22.621-.001-4.268-3.46-7.727-7.728-7.727z" fill="#495560"/></g></g></svg>',e5=`<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 511.941 511.941" xml:space="preserve" width="512" height="512"><g><g><path style="fill: #808fa4" d="M444.211,67.5v376.94c0,33.14-26.87,60-60,60H127.73c-33.13,0-60-26.86-60-60V67.5&#10;&#9;&#9;&#9;c0-33.14,26.87-60,60-60h256.48C417.341,7.5,444.211,34.361,444.211,67.5z"/><path style="fill: #64768e" d="M190.421,504.44h-62.69c-33.13,0-60-26.86-60-60V67.5c0-33.14,26.87-60,60-60h48.86&#10;&#9;&#9;&#9;c-7.15,6.38-14.77,17.56-14.77,36.26v411.44C161.821,455.201,161.611,484.551,190.421,504.44z"/><path style="fill: #c5ced6" d="M414.091,67.62v143.17l-188.56,12.65l75.62-185.82h82.94&#10;&#9;&#9;&#9;C400.661,37.62,414.091,51.051,414.091,67.62z"/><polygon style="fill: #abb6c4" points="271.031,37.62 225.531,223.44 161.821,217.131 97.85,210.79 118.08,74.5 162.111,37.62 &#9;&#9;&#10;&#9;&#9;&#9;"/><path style="fill: #9ca9ba" d="M162.111,37.62c-0.19,1.95-0.29,4-0.29,6.14v173.37l-63.97-6.34V67.62c0-16.57,13.43-30,30-30&#10;&#9;&#9;&#9;H162.111z"/><polygon style="fill: #c5ced6" points="311.951,223.44 293.62,414.091 161.821,414.091 111.611,379.181 97.85,240.911 &#10;&#9;&#9;&#9;161.821,235.69 &#9;&#9;"/><path style="fill: #abb6c4" d="M97.85,240.911l63.97-5.22v178.4h-33.97c-16.57,0-30-13.43-30-30V240.911z"/><path style="fill: #64768e" d="M414.091,240.911v143.18c0,16.57-13.43,30-30,30h-60.36l-11.78-190.65L414.091,240.911z"/><path style="fill: #64768e" d="M286.088,474.324h-60.235c-8.317,0-15.059-6.742-15.059-15.059v0&#10;&#9;&#9;&#9;c0-8.317,6.742-15.059,15.059-15.059h60.235c8.317,0,15.059,6.742,15.059,15.059v0&#10;&#9;&#9;&#9;C301.147,467.581,294.405,474.324,286.088,474.324z"/><path style="fill: #e8ecf9" d="M414.091,210.79v30.12h-75.36c-8.28,0-15,6.72-15,15v158.18h-30.11v-158.18c0-8.28-6.72-15-15-15&#10;&#9;&#9;&#9;h-116.8l-12.76-12.88l12.76-17.24h42.84c6.52,0,12.3-4.22,14.29-10.43l52.08-162.74h30.12l-49.16,153.6&#10;&#9;&#9;&#9;c-3.09,9.68,4.13,19.57,14.29,19.57H414.091z"/><rect x="97.85" y="210.79" style="fill: #d7ddf5" width="63.97" height="30.12"/></g><g><path style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " d="&#10;&#9;&#9;&#9;M384.206,504.441H127.735c-33.137,0-60-26.863-60-60V67.5c0-33.137,26.863-60,60-60h256.471c33.137,0,60,26.863,60,60v376.941&#10;&#9;&#9;&#9;C444.206,477.578,417.343,504.441,384.206,504.441z"/><path style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " d="&#10;&#9;&#9;&#9;M384.088,414.088H127.853c-16.569,0-30-13.431-30-30V67.618c0-16.569,13.431-30,30-30h256.235c16.569,0,30,13.431,30,30v316.471&#10;&#9;&#9;&#9;C414.088,400.657,400.657,414.088,384.088,414.088z"/><path style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " d="&#10;&#9;&#9;&#9;M286.088,474.324h-60.235c-8.317,0-15.059-6.742-15.059-15.059c0-8.317,6.742-15.059,15.059-15.059h60.235&#10;&#9;&#9;&#9;c8.317,0,15.059,6.742,15.059,15.059C301.147,467.581,294.405,474.324,286.088,474.324z"/><path style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " d="&#10;&#9;&#9;&#9;M100.85,210.79h103.811c6.523,0,12.298-4.215,14.286-10.428L270.56,39.09"/><path style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " d="&#10;&#9;&#9;&#9;M293.62,410.091v-154.18c0-8.284-6.716-15-15-15H100.85"/><path style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " d="&#10;&#9;&#9;&#9;M411.091,240.911h-72.36c-8.284,0-15,6.716-15,15v154.18"/><path style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " d="&#10;&#9;&#9;&#9;M300.616,39.291l-48.622,151.927c-3.098,9.679,4.124,19.572,14.286,19.572h144.81"/><g><line style="\r
            fill: none;\r
            stroke: #000000;\r
            stroke-width: 15;\r
            stroke-linecap: round;\r
            stroke-linejoin: round;\r
            stroke-miterlimit: 10;\r
          " x1="133.2" y1="310.695" x2="133.2" y2="322.695"/><line style="\r
            fill: none;\r
            stroke: #000000;\r
            stroke-width: 15;\r
            stroke-linecap: round;\r
            stroke-linejoin: round;\r
            stroke-miterlimit: 10;\r
          " x1="258.098" y1="310.695" x2="258.098" y2="322.695"/><g><path style="\r
              fill: none;\r
              stroke: #000000;\r
              stroke-width: 15;\r
              stroke-linecap: round;\r
              stroke-miterlimit: 10;\r
            " d="M195.831,329.85&#10;&#9;&#9;&#9;&#9;&#9;c0,7.984-6.472,14.456-14.456,14.456s-14.456-6.472-14.456-14.456"/><path style="\r
              fill: none;\r
              stroke: #000000;\r
              stroke-width: 15;\r
              stroke-linecap: round;\r
              stroke-miterlimit: 10;\r
            " d="M224.742,329.85&#10;&#9;&#9;&#9;&#9;&#9;c0,7.984-6.472,14.456-14.456,14.456s-14.456-6.472-14.456-14.456"/></g></g></g></g></svg>`,t5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-external-link" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"/><path d="M11 13l9 -9"/><path d="M15 4h5v5"/></svg>',r5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"/><path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6"/></svg>',n5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye-off" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10.585 10.587a2 2 0 0 0 2.829 2.828"/><path d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87"/><path d="M3 3l18 18"/></svg>',o5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file-download" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 3v4a1 1 0 0 0 1 1h4"/><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"/><path d="M12 17v-6"/><path d="M9.5 14.5l2.5 2.5l2.5 -2.5"/></svg>',i5='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-file-percent"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 17l4 -4"/><path d="M14 3v4a1 1 0 0 0 1 1h4"/><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"/><path d="M10 13h.01"/><path d="M14 17h.01"/></svg>',a5='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-folder-open"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 19l2.757 -7.351a1 1 0 0 1 .936 -.649h12.307a1 1 0 0 1 .986 1.164l-.996 5.211a2 2 0 0 1 -1.964 1.625h-14.026a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2h4l3 3h7a2 2 0 0 1 2 2v2" /></svg>',s5='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-hand-click"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 13v-8.5a1.5 1.5 0 0 1 3 0v7.5"/><path d="M11 11.5v-2a1.5 1.5 0 0 1 3 0v2.5"/><path d="M14 10.5a1.5 1.5 0 0 1 3 0v1.5"/><path d="M17 11.5a1.5 1.5 0 0 1 3 0v4.5a6 6 0 0 1 -6 6h-2h.208a6 6 0 0 1 -5.012 -2.7l-.196 -.3c-.312 -.479 -1.407 -2.388 -3.286 -5.728a1.5 1.5 0 0 1 .536 -2.022a1.867 1.867 0 0 1 2.28 .28l1.47 1.47"/><path d="M5 3l-1 -1"/><path d="M4 7h-1"/><path d="M14 3l1 -1"/><path d="M15 6h1"/></svg>',l5='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-help"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"/><path d="M12 17l0 .01"/><path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4"/></svg>',c5='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-info-circle"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg>',d5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-keyboard" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M2 6m0 2a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-16a2 2 0 0 1 -2 -2z"/><path d="M6 10l0 .01"/><path d="M10 10l0 .01"/><path d="M14 10l0 .01"/><path d="M18 10l0 .01"/><path d="M6 14l0 .01"/><path d="M18 14l0 .01"/><path d="M10 14l4 .01"/></svg>',u5='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-layout-bottombar"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"/><path d="M4 15l16 0"/></svg>',h5='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-layout-bottombar-inactive"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"/><path d="M4 15h1"/><path d="M19 15h1"/><path d="M9 15h1"/><path d="M14 15h1"/></svg>',f5='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-layout-dashboard"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 4h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1" /><path d="M5 16h4a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1" /><path d="M15 12h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1" /><path d="M15 4h4a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1" /></svg>',p5='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-layout-sidebar"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"/><path d="M9 4l0 16"/></svg>',m5='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-layout-sidebar-inactive"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"/><path d="M9 4v1"/><path d="M9 9v1"/><path d="M9 14v1"/><path d="M9 19v1"/></svg>',g5='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-layout-sidebar-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"/><path d="M15 4l0 16"/></svg>',v5='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-layout-sidebar-right-inactive"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"/><path d="M15 4v1"/><path d="M15 9v1"/><path d="M15 14v1"/><path d="M15 19v1"/></svg>',b5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-list-numbers" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M11 6h9"/><path d="M11 12h9"/><path d="M12 18h8"/><path d="M4 16a2 2 0 1 1 4 0c0 .591 -.5 1 -1 1.5l-3 2.5h4"/><path d="M6 10v-6l-2 2"/></svg>',w5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-loader-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 3a9 9 0 1 0 9 9"/></svg>',_5='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-location-cog"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 18l-2 -4l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5l-3.14 8.697"/><path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M19.001 15.5v1.5"/><path d="M19.001 21v1.5"/><path d="M22.032 17.25l-1.299 .75"/><path d="M17.27 20l-1.3 .75"/><path d="M15.97 17.25l1.3 .75"/><path d="M20.733 20l1.3 .75"/></svg>',y5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6l16 0"/><path d="M4 12l16 0"/><path d="M4 18l16 0"/></svg>',k5='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-menu-deep"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6h16"/><path d="M7 12h13"/><path d="M10 18h10"/></svg>',E5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-message" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 9h8"/><path d="M8 13h6"/><path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z"/></svg>',M5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-moon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"/></svg>',S5='<svg id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m449.945 61.818v388.363c0 34.144-27.684 61.818-61.818 61.818h-264.253c-34.134 0-61.818-27.674-61.818-61.818v-388.363c-.001-34.144 27.684-61.818 61.818-61.818h264.253c34.133 0 61.818 27.674 61.818 61.818z" fill="#e8ecf9"/><path d="m207.555 512h-83.681c-34.134 0-61.818-27.674-61.818-61.818v-388.364c-.001-34.144 27.684-61.818 61.818-61.818h79.993c-11.292 3.421-26.809 12.446-26.809 36.256v436.87c0 26.479 19.854 35.783 30.497 38.874z" fill="#d7ddf5"/><path d="m403.396 62.004v139.751c0 8.541-6.924 15.455-15.455 15.455h-210.883l-51.556-21.729v-124.699l51.556-24.233h210.883c8.531 0 15.455 6.913 15.455 15.455z" fill="#c5ced6"/><path d="m177.058 46.549v170.66h-52.999c-8.531 0-15.455-6.913-15.455-15.455v-139.75c0-8.541 6.924-15.455 15.455-15.455z" fill="#abb6c4"/><path d="m217.209 279.213v8.036l-40.151 41.769-8.809 9.17-59.644 4.307 12.333-53.195 56.121-25.541h24.696c8.541-.001 15.454 6.923 15.454 15.454z" fill="#c5ced6"/><path d="m124.059 263.758h52.999v65.26l-8.809 9.17-59.644 4.307v-63.281c-.001-8.532 6.923-15.456 15.454-15.456z" fill="#abb6c4"/><path d="m217.209 334.365v60.407l-40.151 43.438-4.204 4.543-64.25-8.634 8.573-21.379-8.573-26.551 50.743-51.824z" fill="#c5ced6"/><path d="m177.058 334.365v103.845l-4.204 4.543-64.25-8.634v-47.93l50.743-51.824z" fill="#abb6c4"/><path d="m217.209 287.249v47.116c-2.823 1.731-5.121 4.368-6.388 7.696-2.359 6.182-8.253 9.984-14.496 9.984-1.844 0-3.719-.33-5.543-1.03-.546-.206-1.092-.381-1.638-.525-1.298-.34-2.596-.505-3.895-.505-2.916 0-5.749.824-8.191 2.339l-11.045-14.888 11.045-32.29c1.03.165 2.061.433 3.07.824.587.227 1.175.412 1.772.556 1.247.319 2.514.474 3.771.474 6.244 0 12.137-3.802 14.496-9.984.082-.206.165-.412.258-.608 2.493-5.821 8.191-9.376 14.239-9.376.845.001 1.69.073 2.545.217z" fill="#808fa4"/><path d="m177.058 305.146v47.178c-2.782 1.731-5.049 4.348-6.305 7.645-.196.505-.402.989-.649 1.453-2.669 5.316-8.108 8.521-13.847 8.521-.309 0-.618-.01-.927-.031-1.535-.093-3.091-.412-4.605-.999-1.824-.701-3.699-1.03-5.543-1.03-6.244 0-12.137 3.802-14.496 9.984s-8.242 9.984-14.496 9.984c-1.834 0-3.709-.33-5.533-1.03-.68-.258-1.36-.474-2.05-.628v-43.695c5.038-1.02 9.458-4.523 11.426-9.674 2.359-6.182 8.253-9.984 14.496-9.984 1.844 0 3.709.33 5.533 1.03 1.824.701 3.709 1.03 5.553 1.03 1.113 0 2.226-.124 3.297-.361 2.895-.629 5.574-2.081 7.686-4.193 1.494-1.494 2.699-3.318 3.503-5.419 2.359-6.182 8.242-9.984 14.496-9.984.813-.003 1.637.058 2.461.203z" fill="#64768e"/><path d="m217.209 394.772v55.224c0 8.541-6.913 15.455-15.455 15.455h-24.696l-15.516-24.284 15.516-28.426c1.885-1.618 3.4-3.719 4.348-6.202 2.359-6.172 8.253-9.973 14.496-9.973 1.844 0 3.719.33 5.543 1.03 1.824.701 3.689 1.03 5.533 1.03 1.175 0 2.349-.134 3.472-.402h.01c2.494-.578 4.822-1.762 6.749-3.452z" fill="#808fa4"/><path d="m166.91 416.522c3.74 0 7.346-1.36 10.148-3.781v52.71h-52.999c-8.531 0-15.455-6.913-15.455-15.455v-15.877c3.802-1.968 8.397-2.37 12.704-.721 1.824.701 3.699 1.03 5.543 1.03 6.244 0 12.137-3.802 14.496-9.984s8.242-9.984 14.496-9.984c1.834 0 3.709.33 5.533 1.03 1.824.702 3.7 1.032 5.534 1.032z" fill="#64768e"/><path d="m403.396 351.612v98.384c0 8.541-6.924 15.455-15.455 15.455h-69.051l-55.132-93.686v-92.552c0-8.531 6.924-15.455 15.455-15.455h62.91z" fill="#808fa4"/><path d="m380.121 333.572-61.231 131.879h-39.677c-8.531 0-15.455-6.913-15.455-15.455v-78.231l77.572-53.699z" fill="#abb6c4"/><path d="m403.396 279.213v72.4c-7.058 3.359-14.95 5.234-23.275 5.234-3.534 0-6.996-.34-10.344-.989-17.34-3.338-31.744-14.929-38.956-30.518-3.215-6.924-5.007-14.651-5.007-22.79 0-15.197 6.244-28.941 16.31-38.791h45.818c8.53-.001 15.454 6.923 15.454 15.454z" fill="#c5ced6"/><g><g><ellipse cx="172.744" cy="147.233" fill="#fff" rx="30.72" ry="24.464"/><ellipse cx="339.256" cy="147.233" fill="#fff" rx="30.72" ry="24.464"/><path d="m285.787 117.781c-4.268 0-7.727 3.46-7.727 7.727 0 3.952-3.215 7.166-7.166 7.166s-7.166-3.215-7.166-7.166c0-4.268-3.46-7.727-7.727-7.727-4.268 0-7.727 3.46-7.727 7.727 0 3.952-3.215 7.166-7.166 7.166-3.952 0-7.166-3.215-7.166-7.166 0-4.268-3.46-7.727-7.727-7.727-4.268 0-7.727 3.46-7.727 7.727 0 12.473 10.148 22.621 22.621 22.621 5.701 0 10.911-2.124 14.894-5.616 3.982 3.492 9.193 5.616 14.894 5.616 12.473 0 22.621-10.148 22.621-22.621-.003-4.267-3.463-7.727-7.731-7.727z" fill="#495560"/></g><g><path d="m206.795 121.062c-4.268 0-7.727-3.46-7.727-7.727 0-3.559-2.896-6.454-6.455-6.454s-6.455 2.895-6.455 6.454c0 4.268-3.46 7.727-7.727 7.727-4.268 0-7.727-3.46-7.727-7.727 0-12.081 9.829-21.909 21.91-21.909s21.91 9.828 21.91 21.909c-.001 4.267-3.461 7.727-7.729 7.727z" fill="#495560"/></g><g><path d="m333.569 121.062c-4.268 0-7.727-3.46-7.727-7.727 0-3.559-2.896-6.454-6.455-6.454s-6.455 2.895-6.455 6.454c0 4.268-3.46 7.727-7.727 7.727-4.268 0-7.727-3.46-7.727-7.727 0-12.081 9.829-21.909 21.91-21.909s21.91 9.828 21.91 21.909c-.001 4.267-3.461 7.727-7.729 7.727z" fill="#495560"/></g></g></g></svg>',A5=`<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 511.94 511.94" xml:space="preserve" width="512" height="512"><g><g><path style="fill: #e8ecf9" d="M444.21,67.5v376.94c0,33.14-26.87,60-60,60H127.73c-33.13,0-60-26.86-60-60V67.5&#10;&#9;&#9;&#9;c0-33.14,26.87-60,60-60h256.48C417.34,7.5,444.21,34.36,444.21,67.5z"/><path style="fill: #d7ddf5" d="M208.95,504.44h-81.22c-33.13,0-60-26.86-60-60V67.5c0-33.14,26.87-60,60-60h77.64&#10;&#9;&#9;&#9;c-10.96,3.32-26.02,12.08-26.02,35.19v424.02C179.35,492.41,198.62,501.44,208.95,504.44z"/><path style="fill: #c5ced6" d="M399.03,67.68v135.64c0,8.29-6.72,15-15,15H179.35l-50.04-21.09V76.2l50.04-23.52h204.68&#10;&#9;&#9;&#9;C392.31,52.68,399.03,59.39,399.03,67.68z"/><path style="fill: #abb6c4" d="M179.35,52.68v165.64h-51.44c-8.28,0-15-6.71-15-15V67.68c0-8.29,6.72-15,15-15H179.35z"/><path style="fill: #c5ced6" d="M218.32,278.5v7.8l-38.97,40.54l-8.55,8.9l-57.89,4.18l11.97-51.63l54.47-24.79h23.97&#10;&#9;&#9;&#9;C211.61,263.5,218.32,270.22,218.32,278.5z"/><path style="fill: #abb6c4" d="M127.91,263.5h51.44v63.34l-8.55,8.9l-57.89,4.18V278.5C112.91,270.22,119.63,263.5,127.91,263.5z"/><polygon style="fill: #c5ced6" points="218.32,332.03 218.32,390.66 179.35,432.82 175.27,437.23 112.91,428.85 121.23,408.1 &#10;&#9;&#9;&#9;112.91,382.33 162.16,332.03 &#9;&#9;"/><polygon style="fill: #abb6c4" points="179.35,332.03 179.35,432.82 175.27,437.23 112.91,428.85 112.91,382.33 162.16,332.03 &#9;&#9;&#10;&#9;&#9;&#9;"/><path style="fill: #808fa4" d="M218.32,286.3v45.73c-2.74,1.68-4.97,4.24-6.2,7.47c-2.29,6-8.01,9.69-14.07,9.69&#10;&#9;&#9;&#9;c-1.79,0-3.61-0.32-5.38-1c-0.53-0.2-1.06-0.37-1.59-0.51c-1.26-0.33-2.52-0.49-3.78-0.49c-2.83,0-5.58,0.8-7.95,2.27&#10;&#9;&#9;&#9;l-10.72-14.45l10.72-31.34c1,0.16,2,0.42,2.98,0.8c0.57,0.22,1.14,0.4,1.72,0.54c1.21,0.31,2.44,0.46,3.66,0.46&#10;&#9;&#9;&#9;c6.06,0,11.78-3.69,14.07-9.69c0.08-0.2,0.16-0.4,0.25-0.59c2.42-5.65,7.95-9.1,13.82-9.1&#10;&#9;&#9;&#9;C216.67,286.09,217.49,286.16,218.32,286.3z"/><path style="fill: #64768e" d="M179.35,303.67v45.79c-2.7,1.68-4.9,4.22-6.12,7.42c-0.19,0.49-0.39,0.96-0.63,1.41&#10;&#9;&#9;&#9;c-2.59,5.16-7.87,8.27-13.44,8.27c-0.3,0-0.6-0.01-0.9-0.03c-1.49-0.09-3-0.4-4.47-0.97c-1.77-0.68-3.59-1-5.38-1&#10;&#9;&#9;&#9;c-6.06,0-11.78,3.69-14.07,9.69s-8,9.69-14.07,9.69c-1.78,0-3.6-0.32-5.37-1c-0.66-0.25-1.32-0.46-1.99-0.61v-42.41&#10;&#9;&#9;&#9;c4.89-0.99,9.18-4.39,11.09-9.39c2.29-6,8.01-9.69,14.07-9.69c1.79,0,3.6,0.32,5.37,1c1.77,0.68,3.6,1,5.39,1&#10;&#9;&#9;&#9;c1.08,0,2.16-0.12,3.2-0.35c2.81-0.61,5.41-2.02,7.46-4.07c1.45-1.45,2.62-3.22,3.4-5.26c2.29-6,8-9.69,14.07-9.69&#10;&#9;&#9;&#9;C177.75,303.47,178.55,303.53,179.35,303.67z"/><path style="fill: #808fa4" d="M218.32,390.66v53.6c0,8.29-6.71,15-15,15h-23.97l-15.06-23.57l15.06-27.59&#10;&#9;&#9;&#9;c1.83-1.57,3.3-3.61,4.22-6.02c2.29-5.99,8.01-9.68,14.07-9.68c1.79,0,3.61,0.32,5.38,1c1.77,0.68,3.58,1,5.37,1&#10;&#9;&#9;&#9;c1.14,0,2.28-0.13,3.37-0.39h0.01C214.19,393.45,216.45,392.3,218.32,390.66z"/><path style="fill: #64768e" d="M169.5,411.77c3.63,0,7.13-1.32,9.85-3.67v51.16h-51.44c-8.28,0-15-6.71-15-15v-15.41&#10;&#9;&#9;&#9;c3.69-1.91,8.15-2.3,12.33-0.7c1.77,0.68,3.59,1,5.38,1c6.06,0,11.78-3.69,14.07-9.69c2.29-6,8-9.69,14.07-9.69&#10;&#9;&#9;&#9;c1.78,0,3.6,0.32,5.37,1C165.9,411.45,167.72,411.77,169.5,411.77z"/><path style="fill: #808fa4" d="M399.03,348.77v95.49c0,8.29-6.72,15-15,15h-67.02l-53.51-90.93V278.5c0-8.28,6.72-15,15-15h61.06&#10;&#9;&#9;&#9;L399.03,348.77z"/><path style="fill: #abb6c4" d="M376.44,331.26l-59.43,128H278.5c-8.28,0-15-6.71-15-15v-75.93l75.29-52.12L376.44,331.26z"/><path style="fill: #c5ced6" d="M399.03,278.5v70.27c-6.85,3.26-14.51,5.08-22.59,5.08c-3.43,0-6.79-0.33-10.04-0.96&#10;&#9;&#9;&#9;c-16.83-3.24-30.81-14.49-37.81-29.62c-3.12-6.72-4.86-14.22-4.86-22.12c0-14.75,6.06-28.09,15.83-37.65h44.47&#10;&#9;&#9;&#9;C392.31,263.5,399.03,270.22,399.03,278.5z"/><g><g><ellipse style="fill: #ffffff" cx="175.162" cy="150.402" rx="29.816" ry="23.744"/><ellipse style="fill: #ffffff" cx="336.778" cy="150.402" rx="29.816" ry="23.744"/></g></g></g><g><path style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " d="&#10;&#9;&#9;&#9;M67.73,402.54v41.9c0,33.14,26.87,60,60,60h256.48c33.13,0,60-26.86,60-60V67.5c0-33.14-26.87-60-60-60H127.73&#10;&#9;&#9;&#9;c-33.13,0-60,26.86-60,60v300.04"/><path style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " d="&#10;&#9;&#9;&#9;M359,52.68h25.03c8.28,0,15,6.71,15,15v135.64c0,8.29-6.72,15-15,15H127.91c-8.28,0-15-6.71-15-15V67.68c0-8.29,6.72-15,15-15H324&#10;&#9;&#9;&#9;"/><path style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " d="&#10;&#9;&#9;&#9;M203.323,459.264h-75.412c-8.284,0-15-6.716-15-15V278.499c0-8.284,6.716-15,15-15h75.412c8.284,0,15,6.716,15,15v165.765&#10;&#9;&#9;&#9;C218.323,452.548,211.607,459.264,203.323,459.264z"/><path style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " d="&#10;&#9;&#9;&#9;M399.03,278.5v165.76c0,8.29-6.72,15-15,15H278.5c-8.28,0-15-6.71-15-15V278.5c0-8.28,6.72-15,15-15h105.53&#10;&#9;&#9;&#9;C392.31,263.5,399.03,270.22,399.03,278.5z"/><line style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " x1="264.641" y1="367.54" x2="327.14" y2="324.275"/><line style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " x1="335.24" y1="420" x2="317.58" y2="458.04"/><line style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " x1="365.42" y1="354.99" x2="349.98" y2="388.25"/><path style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " d="&#10;&#9;&#9;&#9;M337.07,266.11c-14.481,16.226-16.955,38.907-8.48,57.16c12.198,26.365,43.179,37.557,69.06,26.13"/><path style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " d="&#10;&#9;&#9;&#9;M114.09,339.63c4.39-1.26,8.16-4.51,9.91-9.1c2.29-6,8.01-9.69,14.07-9.69c4.907,0,5.826,2,10.76,2&#10;&#9;&#9;&#9;c6.016,0,11.752-3.643,14.06-9.68c2.29-6,8-9.69,14.07-9.69c3.551,0,5.135,1.068,7.09,1.54c7.171,1.837,14.948-1.942,17.73-9.23&#10;&#9;&#9;&#9;c2.653-6.632,8.993-10.222,15.36-9.63"/><path style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " d="&#10;&#9;&#9;&#9;M114.09,382.66c0.973,0.288,2.952,1.28,6.18,1.28c6.07,0,11.78-3.69,14.07-9.69c2.29-6,8.01-9.69,14.07-9.69&#10;&#9;&#9;&#9;c4.605,0,5.534,1.709,9.85,1.97c6.213,0.414,12.476-3.218,14.97-9.65c2.891-7.576,11.422-11.716,19.44-8.69&#10;&#9;&#9;&#9;c7.75,2.977,16.481-0.911,19.45-8.69c1.05-2.75,2.82-5.02,5.02-6.66"/><path style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " d="&#10;&#9;&#9;&#9;M114.09,428.31c3.44-1.43,7.41-1.59,11.15-0.16c7.75,2.977,16.481-0.911,19.45-8.69c2.29-6,8-9.69,14.07-9.69&#10;&#9;&#9;&#9;c4.886,0,5.854,2,10.74,2c6.07,0,11.78-3.69,14.07-9.69c2.29-5.99,8.01-9.68,14.07-9.68c4.907,0,5.856,2,10.75,2&#10;&#9;&#9;&#9;c3.118,0,6.213-0.998,8.75-2.81"/><g><g><g><path style="\r
                fill: none;\r
                stroke: #000000;\r
                stroke-width: 15;\r
                stroke-linecap: round;\r
                stroke-miterlimit: 10;\r
              " d="M255.97,129.317&#10;&#9;&#9;&#9;&#9;&#9;&#9;c0,7.984-6.472,14.456-14.456,14.456c-7.984,0-14.456-6.472-14.456-14.456"/><path style="\r
                fill: none;\r
                stroke: #000000;\r
                stroke-width: 15;\r
                stroke-linecap: round;\r
                stroke-miterlimit: 10;\r
              " d="M284.881,129.317&#10;&#9;&#9;&#9;&#9;&#9;&#9;c0,7.984-6.472,14.456-14.456,14.456c-7.984,0-14.456-6.472-14.456-14.456"/></g></g><path style="\r
            fill: none;\r
            stroke: #000000;\r
            stroke-width: 15;\r
            stroke-linecap: round;\r
            stroke-linejoin: round;\r
            stroke-miterlimit: 10;\r
          " d="&#10;&#9;&#9;&#9;&#9;M208.213,117.501c0-7.602-6.163-13.765-13.765-13.765c-7.602,0-13.765,6.163-13.765,13.765"/><path style="\r
            fill: none;\r
            stroke: #000000;\r
            stroke-width: 15;\r
            stroke-linecap: round;\r
            stroke-linejoin: round;\r
            stroke-miterlimit: 10;\r
          " d="&#10;&#9;&#9;&#9;&#9;M303.727,117.501c0-7.602,6.163-13.765,13.765-13.765c7.602,0,13.765,6.163,13.765,13.765"/></g></g></g></svg>`,x5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-palette" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 21a9 9 0 0 1 0 -18c4.97 0 9 3.582 9 8c0 1.06 -.474 2.078 -1.318 2.828c-.844 .75 -1.989 1.172 -3.182 1.172h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25"/><path d="M8.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/><path d="M12.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/><path d="M16.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/></svg>',I5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-pencil" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4"/><path d="M13.5 6.5l4 4"/></svg>',C5='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-pencil-cog"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4"/><path d="M13.5 6.5l4 4"/><path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M19.001 15.5v1.5"/><path d="M19.001 21v1.5"/><path d="M22.032 17.25l-1.299 .75"/><path d="M17.27 20l-1.3 .75"/><path d="M15.97 17.25l1.3 .75"/><path d="M20.733 20l1.3 .75"/></svg>',O5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-photo" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 8h.01"/><path d="M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z"/><path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5"/><path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3"/></svg>',T5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-photo-off" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 8h.01"/><path d="M7 3h11a3 3 0 0 1 3 3v11m-.856 3.099a2.991 2.991 0 0 1 -2.144 .901h-12a3 3 0 0 1 -3 -3v-12c0 -.845 .349 -1.608 .91 -2.153"/><path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5"/><path d="M16.33 12.338c.574 -.054 1.155 .166 1.67 .662l3 3"/><path d="M3 3l18 18" color="orange"/></svg>',L5='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-pin"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 4.5l-4 4l-4 1.5l-1.5 1.5l7 7l1.5 -1.5l1.5 -4l4 -4"/><path d="M9 15l-4.5 4.5"/><path d="M14.5 4l5.5 5.5"/></svg>',P5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-player-pause" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z"/><path d="M14 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z"/></svg>',R5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-player-play" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 4v16l13 -8z"/></svg>',$5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-refresh" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4"/><path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4"/></svg>',D5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-settings" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"/><path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"/></svg>',B5='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-settings-off"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9.451 5.437c.418 -.218 .75 -.609 .874 -1.12c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35c-.486 .118 -.894 .44 -1.123 .878m-.188 3.803c-.517 .523 -1.349 .734 -2.125 .262a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.472 -.774 -.262 -1.604 .259 -2.121"/><path d="M9.889 9.869a3 3 0 1 0 4.226 4.26m.592 -3.424a3.012 3.012 0 0 0 -1.419 -1.415"/><path d="M3 3l18 18"/></svg>',z5='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-spacing-horizontal"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 20h-2a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h2"/><path d="M4 20h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2"/><path d="M12 8v8"/></svg>',N5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-spacing-vertical" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 20v-2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v2"/><path d="M4 4v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"/><path d="M16 12h-8"/></svg>',H5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-sun" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"/><path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"/></svg>',F5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 7l16 0"/><path d="M10 11l0 6"/><path d="M14 11l0 6"/><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"/><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"/></svg>',G5='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-world-cog"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M21 12a9 9 0 1 0 -8.979 9"/><path d="M3.6 9h16.8"/><path d="M3.6 15h8.9"/><path d="M11.5 3a17 17 0 0 0 0 18"/><path d="M12.5 3a16.992 16.992 0 0 1 2.522 10.376"/><path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M19.001 15.5v1.5"/><path d="M19.001 21v1.5"/><path d="M22.032 17.25l-1.299 .75"/><path d="M17.27 20l-1.3 .75"/><path d="M15.97 17.25l1.3 .75"/><path d="M20.733 20l1.3 .75"/></svg>',W5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12"/><path d="M6 6l12 12"/></svg>',U5='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-zoom"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"/><path d="M21 21l-6 -6"/></svg>',V5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-cancel" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"/><path d="M8 8l4 4"/><path d="M12 8l-4 4"/><path d="M21 21l-6 -6"/></svg>',Z5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-in" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"/><path d="M7 10l6 0"/><path d="M10 7l0 6"/><path d="M21 21l-6 -6"/></svg>',j5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-in-area" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 13v4"/><path d="M13 15h4"/><path d="M15 15m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0"/><path d="M22 22l-3 -3"/><path d="M6 18h-1a2 2 0 0 1 -2 -2v-1"/><path d="M3 11v-1"/><path d="M3 6v-1a2 2 0 0 1 2 -2h1"/><path d="M10 3h1"/><path d="M15 3h1a2 2 0 0 1 2 2v1"/></svg>',q5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-out" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"/><path d="M7 10l6 0"/><path d="M21 21l-6 -6"/></svg>',K5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-out-area" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M13 15h4"/><path d="M15 15m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0"/><path d="M22 22l-3 -3"/><path d="M6 18h-1a2 2 0 0 1 -2 -2v-1"/><path d="M3 11v-1"/><path d="M3 6v-1a2 2 0 0 1 2 -2h1"/><path d="M10 3h1"/><path d="M15 3h1a2 2 0 0 1 2 2v1"/></svg>',Y5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-pan" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"/><path d="M17 17l-2.5 -2.5"/><path d="M10 5l2 -2l2 2"/><path d="M19 10l2 2l-2 2"/><path d="M5 10l-2 2l2 2"/><path d="M10 19l2 2l2 -2"/></svg>',X5=on({IconAdjustmentsHorizontal:()=>cg,IconAlertCircle:()=>dg,IconApiBook:()=>ug,IconArrowAutofitDown:()=>hg,IconArrowAutofitHeight:()=>fg,IconArrowAutofitLeft:()=>pg,IconArrowAutofitRight:()=>mg,IconArrowAutofitWidth:()=>gg,IconArrowBigLeft:()=>vg,IconArrowBigRight:()=>bg,IconArrowsHorizontal:()=>wg,IconArrowsLeftRight:()=>_g,IconArrowsMove:()=>yg,IconArrowsMoveVertical:()=>kg,IconArrowsVertical:()=>Eg,IconBook:()=>Mg,IconBookArrowLeft:()=>Sg,IconBookArrowRight:()=>Ag,IconBookOff:()=>xg,IconBookUpload:()=>Ig,IconBookmark:()=>Cg,IconBookmarkOff:()=>Og,IconBookmarks:()=>Tg,IconBooksReturn:()=>Lg,IconBoxAlignTop:()=>Pg,IconCategory:()=>Hg,IconCheck:()=>Fg,IconChevronLeft:()=>Gg,IconChevronRight:()=>Wg,IconCircleCheck:()=>Ug,IconCircleX:()=>Vg,IconComic1:()=>$g,IconComic1Flat:()=>Rg,IconComic2:()=>Bg,IconComic2Flat:()=>Dg,IconComic3:()=>Ng,IconComic3Flat:()=>zg,IconDeviceDesktop:()=>Zg,IconDeviceFloppy:()=>jg,IconDeviceMobile:()=>qg,IconDeviceTablet:()=>Kg,IconDotsVertical:()=>Yg,IconEReader1:()=>Jg,IconEReader1Flat:()=>Xg,IconEReader2:()=>e5,IconEReader2Flat:()=>Qg,IconExternalLink:()=>t5,IconEye:()=>r5,IconEyeOff:()=>n5,IconFileDownload:()=>o5,IconFilePercent:()=>i5,IconFolderOpen:()=>a5,IconHandClick:()=>s5,IconHelp:()=>l5,IconInfoCircle:()=>c5,IconKeyboard:()=>d5,IconLayoutBottombar:()=>u5,IconLayoutBottombarInactive:()=>h5,IconLayoutDashboard:()=>f5,IconLayoutSidebar:()=>p5,IconLayoutSidebarInactive:()=>m5,IconLayoutSidebarRight:()=>g5,IconLayoutSidebarRightInactive:()=>v5,IconListNumbers:()=>b5,IconLoader2:()=>w5,IconLocationCog:()=>_5,IconMenu2:()=>y5,IconMenuDeep:()=>k5,IconMessage:()=>E5,IconMoon:()=>M5,IconPage:()=>A5,IconPageFlat:()=>S5,IconPalette:()=>x5,IconPencil:()=>I5,IconPencilCog:()=>C5,IconPhoto:()=>O5,IconPhotoOff:()=>T5,IconPin:()=>L5,IconPlayerPause:()=>P5,IconPlayerPlay:()=>R5,IconRefresh:()=>$5,IconSettings:()=>D5,IconSettingsOff:()=>B5,IconSpacingHorizontal:()=>z5,IconSpacingVertical:()=>N5,IconSun:()=>H5,IconTrash:()=>F5,IconWorldCog:()=>G5,IconX:()=>W5,IconZoom:()=>U5,IconZoomCancel:()=>V5,IconZoomIn:()=>Z5,IconZoomInArea:()=>j5,IconZoomOut:()=>q5,IconZoomOutArea:()=>K5,IconZoomPan:()=>Y5}),hl=on({IconAdjustmentsHorizontal:()=>ov,IconAlertCircle:()=>Lv,IconApiBook:()=>iv,IconArrowAutofitDown:()=>lv,IconArrowAutofitHeight:()=>cv,IconArrowAutofitLeft:()=>dv,IconArrowAutofitRight:()=>uv,IconArrowAutofitWidth:()=>hv,IconArrowBigLeft:()=>fv,IconArrowBigRight:()=>pv,IconArrowsHorizontal:()=>av,IconArrowsLeftRight:()=>sv,IconArrowsMove:()=>mv,IconArrowsMoveVertical:()=>gv,IconArrowsVertical:()=>vv,IconBook:()=>bv,IconBookArrowLeft:()=>_v,IconBookArrowRight:()=>yv,IconBookOff:()=>wv,IconBookUpload:()=>Ev,IconBookmark:()=>Mv,IconBookmarkOff:()=>Sv,IconBookmarks:()=>Av,IconBooksReturn:()=>kv,IconBoxAlignTop:()=>xv,IconCategory:()=>Iv,IconCheck:()=>Cv,IconChevronLeft:()=>Ov,IconChevronRight:()=>Tv,IconCircleCheck:()=>Pv,IconCircleX:()=>Rv,IconComic1:()=>Bv,IconComic1Flat:()=>zv,IconComic2:()=>Nv,IconComic2Flat:()=>Hv,IconComic3:()=>Fv,IconComic3Flat:()=>Gv,IconDeviceDesktop:()=>Wv,IconDeviceFloppy:()=>Uv,IconDeviceMobile:()=>Vv,IconDeviceTablet:()=>Zv,IconDotsVertical:()=>jv,IconEReader1:()=>qv,IconEReader1Flat:()=>Kv,IconEReader2:()=>Yv,IconEReader2Flat:()=>Xv,IconExternalLink:()=>Jv,IconEye:()=>Qv,IconEyeOff:()=>e4,IconFileDownload:()=>t4,IconFilePercent:()=>r4,IconFolderOpen:()=>n4,IconHandClick:()=>o4,IconHelp:()=>$v,IconInfoCircle:()=>Dv,IconKeyboard:()=>i4,IconLayoutBottombar:()=>s4,IconLayoutBottombarInactive:()=>l4,IconLayoutDashboard:()=>a4,IconLayoutSidebar:()=>c4,IconLayoutSidebarInactive:()=>d4,IconLayoutSidebarRight:()=>u4,IconLayoutSidebarRightInactive:()=>h4,IconListNumbers:()=>f4,IconLoader2:()=>p4,IconLocationCog:()=>m4,IconMenu2:()=>g4,IconMenuDeep:()=>v4,IconMessage:()=>b4,IconMoon:()=>w4,IconPage:()=>_4,IconPageFlat:()=>y4,IconPalette:()=>k4,IconPencil:()=>E4,IconPencilCog:()=>M4,IconPhoto:()=>fl,IconPhotoOff:()=>pl,IconPin:()=>S4,IconPlayerPause:()=>A4,IconPlayerPlay:()=>x4,IconRefresh:()=>I4,IconSettings:()=>C4,IconSettingsOff:()=>O4,IconSpacingHorizontal:()=>T4,IconSpacingVertical:()=>L4,IconSun:()=>P4,IconTrash:()=>R4,IconWorldCog:()=>$4,IconX:()=>D4,IconZoom:()=>B4,IconZoomCancel:()=>z4,IconZoomIn:()=>N4,IconZoomInArea:()=>H4,IconZoomOut:()=>F4,IconZoomOutArea:()=>G4,IconZoomPan:()=>W4});function J5(e){return[...e.matchAll(/([^{}]+)\s*\{([^}]+)\}/g)].map(t=>{const n=t[1].trim(),o=t[2],a=/color:\s*([^;]+)/.exec(o);if(a){const s=a[1].trim();return{selectors:n.split(",").map(c=>c.trim().replace(/\s\s+/g," ")),color:s}}return null}).filter(t=>t!==null)}var Q5=J5(lg),wa=new Map;for(const e of Q5)for(const t of e.selectors){const n=t.match(/^\s*\.([^ ]+)\s*(.*)$/);if(!n)continue;const[,o,a]=n;let s=a.trim();s.startsWith(">")&&(s=s.substring(1).trim()),s===""&&(s="*"),wa.has(o)||wa.set(o,[]),wa.get(o)?.push({subSelector:s,color:e.color})}var ev=new DOMParser,tv=new XMLSerializer;function rv(e,t){const n=wa.get(t);if(!n?.length)return e;const o=ev.parseFromString(e,"image/svg+xml").documentElement;if(o.querySelector("parsererror"))return console.error(`Error parsing SVG for ${t}`),e;for(const{subSelector:a,color:s}of n)try{o.querySelectorAll(a).forEach(c=>{c.setAttribute("stroke",s)})}catch(c){console.error(`Invalid selector "${a}" for ${t}`,c)}return tv.serializeToString(o)}var nv=xe.default.mapValues(X5,(e,t)=>rv(e,`icon-tabler-${xe.default.kebabCase(t.replace(/^Icon/,""))}`)),{IconAdjustmentsHorizontal:ov,IconApiBook:iv,IconArrowsHorizontal:av,IconArrowsLeftRight:sv,IconArrowAutofitDown:lv,IconArrowAutofitHeight:cv,IconArrowAutofitLeft:dv,IconArrowAutofitRight:uv,IconArrowAutofitWidth:hv,IconArrowBigLeft:fv,IconArrowBigRight:pv,IconArrowsMove:mv,IconArrowsMoveVertical:gv,IconArrowsVertical:vv,IconBook:bv,IconBookOff:wv,IconBookArrowLeft:_v,IconBookArrowRight:yv,IconBooksReturn:kv,IconBookUpload:Ev,IconBookmark:Mv,IconBookmarkOff:Sv,IconBookmarks:Av,IconBoxAlignTop:xv,IconCategory:Iv,IconCheck:Cv,IconChevronLeft:Ov,IconChevronRight:Tv,IconAlertCircle:Lv,IconCircleCheck:Pv,IconCircleX:Rv,IconHelp:$v,IconInfoCircle:Dv,IconComic1:Bv,IconComic1Flat:zv,IconComic2:Nv,IconComic2Flat:Hv,IconComic3:Fv,IconComic3Flat:Gv,IconDeviceDesktop:Wv,IconDeviceFloppy:Uv,IconDeviceMobile:Vv,IconDeviceTablet:Zv,IconDotsVertical:jv,IconEReader1:qv,IconEReader1Flat:Kv,IconEReader2:Yv,IconEReader2Flat:Xv,IconExternalLink:Jv,IconEye:Qv,IconEyeOff:e4,IconFileDownload:t4,IconFilePercent:r4,IconFolderOpen:n4,IconHandClick:o4,IconKeyboard:i4,IconLayoutDashboard:a4,IconLayoutBottombar:s4,IconLayoutBottombarInactive:l4,IconLayoutSidebar:c4,IconLayoutSidebarInactive:d4,IconLayoutSidebarRight:u4,IconLayoutSidebarRightInactive:h4,IconListNumbers:f4,IconLoader2:p4,IconLocationCog:m4,IconMenu2:g4,IconMenuDeep:v4,IconMessage:b4,IconMoon:w4,IconPage:_4,IconPageFlat:y4,IconPalette:k4,IconPencil:E4,IconPencilCog:M4,IconPhoto:fl,IconPhotoOff:pl,IconPin:S4,IconPlayerPause:A4,IconPlayerPlay:x4,IconRefresh:I4,IconSettings:C4,IconSettingsOff:O4,IconSpacingHorizontal:T4,IconSpacingVertical:L4,IconSun:P4,IconTrash:R4,IconWorldCog:$4,IconX:D4,IconZoom:B4,IconZoomCancel:z4,IconZoomIn:N4,IconZoomInArea:H4,IconZoomOut:F4,IconZoomOutArea:G4,IconZoomPan:W4}=nv;function D(e,t,n,o){var a=arguments.length,s=a<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(c=e[l])&&(s=(a<3?c(s):a>3?c(t,n,s):c(t,n))||s);return a>3&&s&&Object.defineProperty(t,n,s),s}var eo=class extends tt{constructor(...t){super(...t),this.name="",this.variant="regular",this.family="classic",this.label="",this.size=""}static{this.styles=kt`
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
  `}updated(t){if(super.updated(t),t.has("name")){const n=Pu(this.name);hl[n]?(this.dispatchEvent(new CustomEvent("load",{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("wa-load",{bubbles:!0,composed:!0}))):(this.dispatchEvent(new CustomEvent("error",{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("wa-error",{bubbles:!0,composed:!0})))}}render(){const t=Pu(this.name),n=hl[t];if(!n)return Ne;const o=this.size?`--mov-icon-size: ${this.size};`:"";return re`<span
      role=${this.label?"img":Ne}
      aria-label=${this.label||Ne}
      aria-hidden=${this.label?Ne:"true"}
      style=${o}
      >${Lu(n)}</span
    >`}};D([q({type:String})],eo.prototype,"name",void 0),D([q({type:String,reflect:!0})],eo.prototype,"variant",void 0),D([q({type:String,reflect:!0})],eo.prototype,"family",void 0),D([q({type:String})],eo.prototype,"label",void 0),D([q({type:String})],eo.prototype,"size",void 0),eo=D([lt("mov-icon")],eo);var U4=(e,...t)=>t.length===0?e[0]:String.raw({raw:e},...t),V4=U4;function Z4(e,t){const n=document.createElement("style");return n.id=e,n.appendChild(document.createTextNode(t)),n}function Ru(e,t){document.querySelector(`#${e}`)||(document.head??document.querySelector("head")).appendChild(Z4(e,t))}function j4(e){document.querySelectorAll(`style[id="${e}"]`).forEach(t=>{t.remove()})}function q4(e,t){j4(e),Ru(e,t)}function K4(e,t){return V4`
    <style id="${e}">
      ${t}
    </style>
  `}var _a=".mov-toast-stack{z-index:2000;pointer-events:none;flex-direction:column;gap:.5rem;width:350px;max-width:100vw;max-height:100vh;padding:1rem;display:flex;position:fixed;overflow:hidden}.mov-toast-stack-top-start{top:0;left:0}.mov-toast-stack-top-center{align-items:center;top:0;left:50%;transform:translate(-50%)}.mov-toast-stack-top-end{top:0;right:0}.mov-toast-stack-bottom-start{flex-direction:column-reverse;bottom:0;left:0}.mov-toast-stack-bottom-center{flex-direction:column-reverse;align-items:center;bottom:0;left:50%;transform:translate(-50%)}.mov-toast-stack-bottom-end{flex-direction:column-reverse;bottom:0;right:0}:host{width:100%;display:block}.mov-toast{pointer-events:auto;background-color:var(--theme-background-color);color:var(--theme-text-color);border:1px solid var(--theme-border-color);opacity:0;visibility:hidden;border-radius:.5rem;flex-direction:column;width:100%;transition:transform .3s cubic-bezier(.4,0,.2,1),opacity .3s cubic-bezier(.4,0,.2,1),visibility .3s cubic-bezier(.4,0,.2,1);display:flex;overflow:hidden;box-shadow:0 4px 12px #00000026}:host([placement$=-end]) .mov-toast{transform:translate(110%)}:host([placement$=-start]) .mov-toast{transform:translate(-110%)}:host([placement=top-center]) .mov-toast{transform:translateY(-110%)}:host([placement=bottom-center]) .mov-toast{transform:translateY(110%)}:host([open]) .mov-toast{opacity:1;visibility:visible;transform:translate(0)}.mov-toast-body{align-items:flex-start;gap:.75rem;padding:.75rem 1rem;display:flex}.mov-toast-icon{flex-shrink:0;justify-content:center;align-items:center;margin-top:.125rem;font-size:20px;display:flex}.mov-toast-icon mov-icon{--mov-icon-size:1.25rem}.mov-toast-content{flex-direction:column;flex-grow:1;gap:.125rem;display:flex}.mov-toast-title{font-size:14px;font-weight:600;line-height:1.25}.mov-toast-description{opacity:.8;font-size:13px;line-height:1.4}.mov-toast-close{cursor:pointer;color:inherit;opacity:.5;background:0 0;border:none;flex-shrink:0;justify-content:center;align-items:center;margin-right:-.25rem;padding:.25rem;transition:opacity .2s;display:flex}.mov-toast-close:hover{opacity:1}.mov-toast-variant-primary .mov-toast-icon{color:var(--mov-color-fill-loud)}.mov-toast-variant-success .mov-toast-icon{color:#28a745}.mov-toast-variant-warning .mov-toast-icon{color:#ffc107}.mov-toast-variant-danger .mov-toast-icon{color:#dc3545}.mov-toast-variant-neutral .mov-toast-icon{color:var(--theme-text-color)}.mov-toast-variant-primary{border-left:4px solid var(--mov-color-fill-loud)}.mov-toast-variant-success{border-left:4px solid #28a745}.mov-toast-variant-warning{border-left:4px solid #ffc107}.mov-toast-variant-danger{border-left:4px solid #dc3545}.mov-toast-variant-neutral{border-left:4px solid var(--theme-border-color)}",Kr=class extends tt{constructor(...t){super(...t),this.open=!1,this.variant="primary",this.duration=3e3,this.closable=!1,this.title="",this.description="",this.placement="bottom-end"}static{this.styles=[Se(_a)]}async show(){if(!this.open)return await this.updateComplete,this.dispatchEvent(new CustomEvent("wa-show",{bubbles:!0,composed:!0})),this.open=!0,this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration)),new Promise(t=>{setTimeout(()=>{this.dispatchEvent(new CustomEvent("wa-after-show",{bubbles:!0,composed:!0})),t()},300)})}async hide(){if(this.open)return window.clearTimeout(this.autoHideTimeout),this.dispatchEvent(new CustomEvent("wa-hide",{bubbles:!0,composed:!0})),this.open=!1,new Promise(t=>{setTimeout(()=>{this.dispatchEvent(new CustomEvent("wa-after-hide",{bubbles:!0,composed:!0})),this.remove(),t()},300)})}handleCloseClick(){this.hide()}getDefaultIcon(){if(this.icon)return this.icon;switch(this.variant){case"success":return"IconCircleCheck";case"warning":return"IconAlertCircle";case"danger":return"IconCircleX";default:return"IconInfoCircle"}}render(){return re`
      <div
        part="base"
        class=${Et({"mov-toast":!0,[`mov-toast-variant-${this.variant}`]:!0})}
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
    `}};D([q({type:Boolean,reflect:!0})],Kr.prototype,"open",void 0),D([q({reflect:!0})],Kr.prototype,"variant",void 0),D([q({type:Number})],Kr.prototype,"duration",void 0),D([q({type:Boolean})],Kr.prototype,"closable",void 0),D([q()],Kr.prototype,"title",void 0),D([q()],Kr.prototype,"description",void 0),D([q()],Kr.prototype,"icon",void 0),D([q({reflect:!0})],Kr.prototype,"placement",void 0),Kr=D([lt("mov-toast")],Kr);var cr=e=>{const t=e.placement||"bottom-end",n=`mov-toast-stack-${t}`;let o=document.querySelector(`.mov-toast-stack.${n}`);const a=_a.indexOf(":host"),s=a>-1?_a.substring(0,a).trim():_a;Ru("mov-toast-stack-styles",s),o||(o=document.createElement("div"),o.className=`mov-toast-stack ${n}`,document.body.appendChild(o));const c=document.createElement("mov-toast");let l=e.variant||"primary";return l==="info"&&(l="primary"),l==="error"&&(l="danger"),c.variant=l,c.title=e.title||"",c.description=e.description||e.message||"",c.duration=e.duration??3e3,c.closable=e.closable??!0,c.placement=t,e.icon&&(c.icon=e.icon),o.appendChild(c),requestAnimationFrame(()=>{c.show()}),c};cr.info=e=>cr({...e,variant:"primary"}),cr.success=e=>cr({...e,variant:"success"}),cr.warning=e=>cr({...e,variant:"warning"}),cr.error=e=>cr({...e,variant:"danger"});var vi=(e,t)=>{const n=(o,a)=>xe.default.transform(o,(s,c,l)=>{xe.default.isEqual(c,a[l])||(xe.default.isObject(c)&&xe.default.isObject(a[l])&&!xe.default.isArray(c)?s[l]=n(c,a[l]):s[l]=c)});return n(e,t)},Y4={bookmarks:[],colorScheme:"dark",deviceMode:"auto",downloadZip:!1,enabled:!1,fitWidthIfOversize:!0,header:"scroll",hidePageControls:!1,lazyLoadImages:!1,lazyStart:50,loadMode:"wait",locale:"en_US",maxReload:5,minZoom:30,navbar:"bottom",pagination:"disabled",scrollHeight:25,theme:"#29487D",loadSpeed:"Extreme",viewMode:"WebComic",zoomMode:"percent",zoomStep:30,zoomValue:100,keybinds:{SCROLL_UP:["up","W","num_8"],SCROLL_DOWN:["down","S","num_2"],NEXT_CHAPTER:["right","/","D","num_6"],PREVIOUS_CHAPTER:["left",";","A","num_4"],RETURN_CHAPTER_LIST:["backspace","del","num_decimal"],ENLARGE:["-","num_add","E"],REDUCE:["=","num_subtract","Q"],RESTORE:["9","num_divide","R"],FIT_WIDTH:["0","num_multiply","F"],FIT_HEIGHT:["H","num_0"],SETTINGS:["num_divide","num_5","X"],VIEW_MODE_WEBCOMIC:["C"],VIEW_MODE_VERTICAL:["V"],VIEW_MODE_LEFT:["N"],VIEW_MODE_RIGHT:["B"],VIEW_MODE_GALLERY:["G"],SCROLL_START:["space"],INCREASE_SPEED:["."],DECREASE_SPEED:[","],TOGGLE_CONTROLS:["L"]}},X4={lazyLoadImages:!0,fitWidthIfOversize:!0,navbar:"disabled",viewMode:"WebComic",header:"scroll",hidePageControls:!0,pagination:"disabled"},J4={loadSpeed:"All",lazyLoadImages:!1,downloadZip:!1,theme:"oklch(44.6% 0.043 257.281)"};function Fr(e=!0){const t={...Y4,theme:e?"#29487D":"#004526"};let n=Ap()?xe.default.defaultsDeep(X4,t):t;return qs()&&(n=xe.default.defaultsDeep(J4,n)),n}function Q4(e,t){if(Array.isArray(e)&&Array.isArray(t)){if(e.length!==t.length)return!1;const n=s=>`${s.url}-${s.date}`,o=[...e].sort((s,c)=>n(s).localeCompare(n(c))),a=[...t].sort((s,c)=>n(s).localeCompare(n(c)));return xe.default.isEqual(o,a)}}function e3(e,t){if(e&&typeof e=="object"&&t&&typeof t=="object"){const n=e,o=t,a=xe.default.keys(n).sort((c,l)=>c.localeCompare(l)),s=xe.default.keys(o).sort((c,l)=>c.localeCompare(l));if(!xe.default.isEqual(a,s))return!1;for(const c of a){const l=n[c]?[...n[c]].sort((u,f)=>u.localeCompare(f)):[],h=o[c]?[...o[c]].sort((u,f)=>u.localeCompare(f)):[];if(!xe.default.isEqual(l,h))return!1}return!0}}function $u(e,t,n){if(n==="bookmarks")return Q4(e,t);if(n==="keybinds")return e3(e,t)}function ya(e,t,n){if(e===t)return!1;if(n){const o={[n]:e},a={[n]:t};return!xe.default.isEqualWith(o,a,$u)}return!xe.default.isEqualWith(e,t,$u)}var Qt=xe.default.defaultsDeep(yp(Fr()),Fr()),er=xe.default.defaultsDeep(kp(Fr(!1)),Fr(!1)),to=()=>er?.enabled===!0,ml=e=>to()&&!["locale","bookmarks","keybinds"].includes(e),Ot=iu(to()?{...er,locale:Qt.locale,keybinds:Qt.keybinds,bookmarks:Qt.bookmarks}:Qt),Eo=Tm(Ot,e=>yo.find(t=>t.ID===e.locale)??yo[1]);function gl(e=Y("deviceMode")){return e==="auto"?aa():e}var tr=iu({autoScroll:!1,chapter:ol(),currentPage:0,device:gl(),manga:void 0,panel:"none",scrollToPage:void 0});function ro(e){if(e){const t=ml(e)?er[e]:Qt[e],n=Ot.get()?.[e];ya(n,t,e)&&(Ot.setKey(e,t),Me("Refreshed Settings",e,t));return}for(const t in Ot.get()){const n=Ot.get()[t],o=ml(t)?er[t]:Qt[t];ya(n,o)&&Ot.setKey(t,o)}Me("Refreshed All Settings")}function t3(e){const t=xe.default.defaultsDeep(e,Fr()),n=Qt?vi(t,Qt):t;if(!Ar(n)){Me("Imported Global Settings",n),Qt=t;for(const o in n)ro(o)}}Xd(xe.default.debounce(t3,300),"settings");function r3(e){const t=xe.default.defaultsDeep(e,Fr(!1)),n=er?vi(t,er):t;if(!Ar(n)){Me("Imported Local Settings",n),er=t;for(const o in n)ro(o)}}Xd(xe.default.debounce(r3,300),location.hostname);function Y(e){return Ot.get()?.[e]}function Mo(e,t){const n=Ot.get()?.[e];ya(n,t,e)&&Ot.setKey(e,t)}function Mt(e,t){ya(Y(e),t,e)&&(Ot.setKey(e,t),ml(e)?(er[e]=t,Yd(vi(er,Fr(!1)))):(Qt[e]=t,Ep(vi(Qt,Fr()))))}function So(e,t){Mo(e,t(Y(e)))}function he(e){return tr.get()[e]}function Pe(e,t){const n=tr.get()[e];xe.default.isEqual(n,t)||tr.setKey(e,t)}function Du(e,t){const n=tr.get()[e],o=t(n);xe.default.isEqual(n,o)||tr.setKey(e,o)}function dr(e,t){Du("images",n=>({...n,[e]:{...n?.[e],...t(n?.[e]??{})}}))}function Z(e){const t=yo.find(n=>n.ID===Y("locale"))??yo[1];return gp(t,e)?t?.[e]??yo[1]?.[e]:`##MISSING_STRING_${e}##`}function Bu(e=!1){return er.enabled=e,Yd(vi(er,Fr(!1))),Me("Local Settings ",e?"Enabled":"Disabled"),cr.info({title:"Changed Settings to",description:to()?"Local":"Global",duration:2e3}),to()}function n3(){to()?(jd(location.hostname),er=Fr(!1),Bu(!1)):(jd("settings"),Qt=Fr(),ro()),Me("Settings Reset")}function Ao(e=location.href){return Y("bookmarks").find(t=>t.url===e)?.page}function o3(e=null){jt("Current Settings (Local:",to(),") ",e?Ot.get()[e]:Ot.get(),`
Global Settings`,e?Qt[e]:Qt,`
Local Settings`,e?er[e]:er,`
AppState`,tr.get())}wp("MOVSettings",o3);var i3=(e,t,n)=>{if(n&&!["bookmarks","zoomValue"].includes(n)){const o=t[n],a=e[n];cr.info({title:`${n} Changed`,description:`from ${JSON.stringify(o)} to ${JSON.stringify(a)}`,duration:2e3})}};Ot.listen(xe.default.debounce(i3,300));var ur=e=>e??Ne,a3=":host{--mov-font-size-scale:1;--mov-font-size-m:calc(16px * var(--mov-font-size-scale));--mov-font-size-s:round(calc(var(--mov-font-size-m) / 1.125), 1px);--mov-font-size-l:round(calc(var(--mov-font-size-m) * 1.125 * 1.125), 1px);--mov-border-width-s:.0625rem;--mov-border-radius-pill:9999px;--mov-transition-fast:75ms;--mov-font-weight-action:500;--mov-focus-ring:solid .1875rem var(--mov-color-fill-loud);--mov-focus-ring-offset:.0625rem;--mov-line-height-condensed:1.2;--mov-form-control-padding-block:.75em;--mov-form-control-padding-inline:1em;--mov-form-control-height:round(calc(2 * var(--mov-form-control-padding-block) + 1em * var(--mov-line-height-condensed)), 1px);display:inline-block}:host([size=small]){font-size:var(--mov-font-size-s)}:host([size=medium]){font-size:var(--mov-font-size-m)}:host([size=large]){font-size:var(--mov-font-size-l)}.button{box-sizing:border-box;user-select:none;white-space:nowrap;vertical-align:middle;transition-property:background,border,box-shadow,color;transition-duration:var(--mov-transition-fast);cursor:pointer;padding:0 var(--mov-form-control-padding-inline);font-family:inherit;font-size:inherit;font-weight:var(--mov-font-weight-action);line-height:calc(var(--mov-form-control-height) - var(--mov-border-width-s) * 2);height:var(--mov-form-control-height);border-radius:var(--mov-border-radius-m,.375rem);border-style:solid;border-width:var(--mov-border-width-s);background-color:var(--mov-color-fill-loud);color:var(--mov-color-on-loud);border-color:#0000;justify-content:center;align-items:center;text-decoration:none;display:inline-flex}:host([appearance~=plain]){& .button{color:var(--mov-color-on-quiet);background-color:#0000;border-color:#0000}@media (hover:hover){& .button:not(.disabled):not(.loading):hover{color:var(--mov-color-on-quiet);background-color:var(--mov-color-fill-quiet)}}& .button:not(.disabled):not(.loading):active{color:var(--mov-color-on-quiet);background-color:color-mix(in oklab, var(--mov-color-fill-quiet), var(--mov-color-mix-active))}}:host([appearance~=outlined]){& .button{color:var(--mov-color-on-quiet);border-color:var(--mov-color-border-loud);background-color:#0000}@media (hover:hover){& .button:not(.disabled):not(.loading):hover{color:var(--mov-color-on-quiet);background-color:var(--mov-color-fill-quiet)}}& .button:not(.disabled):not(.loading):active{color:var(--mov-color-on-quiet);background-color:color-mix(in oklab, var(--mov-color-fill-quiet), var(--mov-color-mix-active))}}:host([appearance~=filled]){& .button{color:var(--mov-color-on-normal);background-color:var(--mov-color-fill-normal);border-color:#0000}@media (hover:hover){& .button:not(.disabled):not(.loading):hover{color:var(--mov-color-on-normal);background-color:color-mix(in oklab, var(--mov-color-fill-normal), var(--mov-color-mix-hover))}}& .button:not(.disabled):not(.loading):active{color:var(--mov-color-on-normal);background-color:color-mix(in oklab, var(--mov-color-fill-normal), var(--mov-color-mix-active))}}:host([appearance~=filled][appearance~=outlined]) .button{border-color:var(--mov-color-border-normal)}:host([appearance~=accent]){& .button{color:var(--mov-color-on-loud);background-color:var(--mov-color-fill-loud);border-color:#0000}@media (hover:hover){& .button:not(.disabled):not(.loading):hover{background-color:color-mix(in oklab, var(--mov-color-fill-loud), var(--mov-color-mix-hover))}}& .button:not(.disabled):not(.loading):active{background-color:color-mix(in oklab, var(--mov-color-fill-loud), var(--mov-color-mix-active))}}.button:focus{outline:none}.button:focus-visible{outline:var(--mov-focus-ring);outline-offset:var(--mov-focus-ring-offset)}.button.disabled{opacity:.5;cursor:not-allowed}.button.disabled *{pointer-events:none}.button.is-icon-button{outline-offset:2px;width:var(--mov-form-control-height);aspect-ratio:1}:host([pill]) .button{border-radius:var(--mov-border-radius-pill)}.start,.end{pointer-events:none;flex:none;align-items:center;display:flex}.label{display:inline-block}.is-icon-button .label{display:flex}mov-icon[part~=caret]{align-self:center;align-items:center;display:flex}mov-icon[part~=caret]::part(svg){width:.875em;height:.875em}.loading{cursor:wait;position:relative}.loading .start,.loading .label,.loading .end,.loading .caret{visibility:hidden}.spinner{--indicator-color:currentColor;--track-color:color-mix(in oklab, currentColor, transparent 90%);border:2px solid var(--track-color);border-top-color:var(--indicator-color);border-radius:50%;width:1em;height:1em;font-size:1em;animation:1s linear infinite spin;position:absolute;top:calc(50% - .5em);left:calc(50% - .5em)}@keyframes spin{to{transform:rotate(360deg)}}slot[name=start]::slotted(*){margin-inline-end:.75em}slot[name=end]::slotted(*),.button:not(.visually-hidden-label) [part~=caret]{margin-inline-start:.75em}",mt=class extends tt{constructor(...t){super(...t),this.isIconButton=!1,this.hasLabel=!1,this.hasStart=!1,this.hasEnd=!1,this.title="",this.appearance="accent",this.variant="brand",this.size="medium",this.withCaret=!1,this.disabled=!1,this.loading=!1,this.pill=!1,this.type="button"}static{this.styles=[Se(a3)]}handleClick(t){(this.disabled||this.loading)&&(t.preventDefault(),t.stopPropagation())}click(){this.button?.click()}focus(t){this.button?.focus(t)}blur(){this.button?.blur()}render(){const t=!!this.href,n={button:!0,"with-caret":this.withCaret,disabled:this.disabled,loading:this.loading,pill:this.pill,"has-label":this.hasLabel,"has-start":this.hasStart,"has-end":this.hasEnd,"is-icon-button":this.isIconButton},o=re`
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
          class=${Et(n)}
          href=${ur(this.href)}
          target=${ur(this.target)}
          title=${ur(this.title)}
          role="button"
          aria-disabled=${this.disabled?"true":"false"}
          tabindex=${this.disabled?"-1":"0"}
          download=${ur(this.download)}
          @click=${this.handleClick}
        >
          ${o}
        </a>
      `:re`
        <button
          part="base"
          class=${Et(n)}
          ?disabled=${this.disabled||this.loading}
          type=${ur(this.type)}
          title=${ur(this.title)}
          name=${ur(this.name)}
          value=${ur(this.value)}
          aria-disabled=${this.disabled?"true":"false"}
          tabindex=${this.disabled?"-1":"0"}
        >
          ${o}
        </button>
      `}handleLabelSlotChange(){const t=this.labelSlot?.assignedNodes({flatten:!0})??[],n=t.filter(c=>c.nodeType===Node.ELEMENT_NODE),o=t.filter(c=>c.nodeType===Node.TEXT_NODE&&c.textContent?.trim()!==""),a=c=>["wa-icon","mov-icon","svg"].includes(c.localName),s=n.some(a);this.isIconButton=o.length===0&&s}};D([En(".button")],mt.prototype,"button",void 0),D([En("slot:not([name])")],mt.prototype,"labelSlot",void 0),D([Nt()],mt.prototype,"isIconButton",void 0),D([Nt()],mt.prototype,"hasLabel",void 0),D([Nt()],mt.prototype,"hasStart",void 0),D([Nt()],mt.prototype,"hasEnd",void 0),D([q()],mt.prototype,"title",void 0),D([q({reflect:!0})],mt.prototype,"appearance",void 0),D([q({reflect:!0})],mt.prototype,"variant",void 0),D([q({reflect:!0})],mt.prototype,"size",void 0),D([q({attribute:"with-caret",type:Boolean,reflect:!0})],mt.prototype,"withCaret",void 0),D([q({type:Boolean,reflect:!0})],mt.prototype,"disabled",void 0),D([q({type:Boolean,reflect:!0})],mt.prototype,"loading",void 0),D([q({type:Boolean,reflect:!0})],mt.prototype,"pill",void 0),D([q()],mt.prototype,"type",void 0),D([q({reflect:!0})],mt.prototype,"name",void 0),D([q({reflect:!0})],mt.prototype,"value",void 0),D([q({reflect:!0})],mt.prototype,"href",void 0),D([q()],mt.prototype,"target",void 0),D([q({reflect:!0})],mt.prototype,"rel",void 0),D([q()],mt.prototype,"download",void 0),D([q({reflect:!0})],mt.prototype,"form",void 0),mt=D([lt("mov-button")],mt);var xr=class extends tt{constructor(...t){super(...t),this.mode="burger",this.active=!1,this.label="",this.icon="",this.activeIcon="",this.appearance="accent",this.size="medium",this.disabled=!1,this.loading=!1}static{this.styles=kt`
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
  `}connectedCallback(){super.connectedCallback(),this.label||(this.label=this._getDefaultLabel())}render(){const t=this.active?this.activeLabel??this.label:this.label,n={"two-icon-mode":["custom","theme"].includes(this.mode),"single-icon-mode":["chevron","expand","play-pause"].includes(this.mode),"burger-mode-active":this.mode==="burger"};return re`
      <mov-button
        @click=${this._onClick}
        .appearance=${ur(this.appearance)}
        .size=${ur(this.size)}
        ?disabled=${ur(this.disabled)}
        ?loading=${ur(this.loading)}
        .title=${ur(this.title)}
        class=${Et(n)}
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
    `:Ne}_onClick(){if(this.disabled||this.loading)return;const t=this.active;this.active=!this.active,this.dispatchEvent(new CustomEvent("toggle",{detail:{value:this.active,oldValue:t,mode:this.mode},bubbles:!0,composed:!0}))}toggle(){this._onClick()}setActive(t){this.active=t}};D([q({type:String})],xr.prototype,"mode",void 0),D([q({type:Boolean,reflect:!0})],xr.prototype,"active",void 0),D([q({type:String})],xr.prototype,"label",void 0),D([q({type:String})],xr.prototype,"activeLabel",void 0),D([q({type:String})],xr.prototype,"icon",void 0),D([q({type:String})],xr.prototype,"activeIcon",void 0),D([q({type:String,reflect:!0})],xr.prototype,"appearance",void 0),D([q({type:String,reflect:!0})],xr.prototype,"size",void 0),D([q({type:Boolean})],xr.prototype,"disabled",void 0),D([q({type:Boolean,reflect:!0})],xr.prototype,"loading",void 0),xr=D([lt("toggle-button")],xr);var zu="important",s3=" !"+zu,Yr=pi(class extends fa{constructor(e){if(super(e),e.type!==ha.ATTRIBUTE||e.name!=="style"||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,n)=>{const o=e[n];return o==null?t:t+`${n=n.includes("-")?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${o};`},"")}update(e,[t]){const{style:n}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const o of this.ft)t[o]??(this.ft.delete(o),o.includes("-")?n.removeProperty(o):n[o]=null);for(const o in t){const a=t[o];if(a!=null){this.ft.add(o);const s=typeof a=="string"&&a.endsWith(s3);o.includes("-")||s?n.setProperty(o,s?a.slice(0,-11):a,s?zu:""):n[o]=a}}return sn}});function bi(e,t){let n=e.length,o,a,s=!1,c=!1;Array.isArray(e[0])?o=e:(o=[e],n=o.length,s=!0),Array.isArray(t[0])?a=t:(a=t.length>0?t.map(f=>[f]):[[]],c=!0);let l=a[0].length,h=a[0].map((f,p)=>a.map(_=>_[p])),u=o.map(f=>h.map(p=>{let _=0;if(!Array.isArray(f)){for(let g of p)_+=f*g;return _}for(let g=0;g<f.length;g++)_+=f[g]*(p[g]||0);return _}));return n===1&&s&&(u=u[0]),l===1&&c?n===1&&s?u[0]:u.map(f=>f[0]):u}function vl(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function Ye(e,t,n=[0,0,0]){const o=vl(e,t[0]),a=vl(e,t[1]),s=vl(e,t[2]);return n[0]=o,n[1]=a,n[2]=s,n}var l3=on({bisectLeft:()=>Hu,clamp:()=>Gr,copySign:()=>ka,diag:()=>kl,interpolate:()=>wi,interpolateInv:()=>Nu,inv:()=>f3,isInstance:()=>no,isNone:()=>He,isString:()=>xo,lu:()=>El,mapRange:()=>_l,multiplyMatrices:()=>bi,multiply_v3_m3x3:()=>Ye,serializeNumber:()=>bl,skipNone:()=>xt,solve:()=>p3,spow:()=>ct,toPrecision:()=>wl,type:()=>Mn,zdiv:()=>yl});function xo(e){return Mn(e)==="string"}function Mn(e){return(Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function bl(e,{precision:t=16,unit:n}){return He(e)?"none":(e=+wl(e,t),e+(n??""))}function He(e){return e===null}function xt(e){return He(e)?0:e}function wl(e,t){if(e===0)return 0;let n=~~e,o=0;n&&t&&(o=~~Math.log10(Math.abs(n))+1);const a=10**(t-o);return Math.floor(e*a+.5)/a}function wi(e,t,n){return He(e)||isNaN(e)?t:He(t)||isNaN(t)?e:e+(t-e)*n}function Nu(e,t,n){return(n-e)/(t-e)}function _l(e,t,n){return!e||!t||e===t||e[0]===t[0]&&e[1]===t[1]||isNaN(n)||n===null?n:wi(t[0],t[1],Nu(e[0],e[1],n))}function Gr(e,t,n){return Math.max(Math.min(n,t),e)}function ka(e,t){return Math.sign(e)===Math.sign(t)?e:-e}function ct(e,t){return ka(Math.abs(e)**t,e)}function yl(e,t){return t===0?0:e/t}function Hu(e,t,n=0,o=e.length){for(;n<o;){const a=n+o>>1;e[a]<t?n=a+1:o=a}return n}function no(e,t){if(e instanceof t)return!0;const n=t.name;for(;e;){const o=Object.getPrototypeOf(e),a=o?.constructor?.name;if(a===n)return!0;if(!a||a==="Object")return!1;e=o}return!1}function kl(e){const t=e.length,n=[];for(let o=0;o<t;o++){n[o]=[];for(let a=0;a<t;a++)n[o][a]=o===a?e[o]:0}return n}function El(e,{pIndices:t=!1}={}){let n,o,a,s;const c=e.length;t?(n=Array.from({length:c},(l,h)=>h),a=kl(new Array(c).fill(1))):(o=kl(new Array(c).fill(1)),a=structuredClone(o)),s=structuredClone(e);for(let l=0;l<c-1;l++){let h=l,u=Math.abs(s[l][l]);for(let f=l+1;f<c;f++){const p=Math.abs(s[f][l]);p>u&&(h=f,u=p)}if(h!=l){if([s[l],s[h]]=[s[h],s[l]],t?[n[l],n[h]]=[n[h],n[l]]:[o[l],o[h]]=[o[h],o[l]],l)for(let f=0;f<l;f++)[a[l][f],a[h][f]]=[a[h][f],a[l][f]]}else if(!u)continue;for(let f=l+1;f<c;f++){const p=s[f][l]/s[l][l];for(let _=l;_<c;_++)s[f][_]+=-s[l][_]*p,a[f][_]+=a[l][_]*p}}return t?[n,a,s]:[o,a,s]}function c3(e,t,n){for(let o=0;o<n;o++){const a=t[o];for(let s=0;s<o;s++)for(let c=0;c<n;c++)a[c]-=e[o][s]*t[s][c];for(let s=0;s<n;s++)a[s]/=e[o][o]}return t}function d3(e,t,n){for(let a=n-1;a>-1;a--){const s=t[a];for(let c=a+1;c<n;c++)for(var o=0;o<n;o++)s[o]-=e[a][c]*t[c][o];for(let c=0;c<n;c++)t[a][c]/=e[a][a]}return t}function u3(e,t,n){for(let o=0;o<n;o++){let a=t[o];for(let s=0;s<o;s++)a-=e[o][s]*t[s];t[o]=a/e[o][o]}return t}function h3(e,t,n){for(let o=n-1;o>-1;o--){let a=t[o];for(let s=o+1;s<n;s++)a-=e[o][s]*t[s];t[o]=a/e[o][o]}return t}function f3(e){const[t,n,o]=El(e),a=n.length;if(n.map((s,c)=>s[c]*o[c][c]).reduce((s,c)=>s*c,1)===0)throw new Error("Matrix is singular");return d3(o,c3(n,t,a),a)}function p3(e,t){const[n,o,a]=El(e,{pIndices:!0}),s=o.length;if(o.map((c,l)=>c[l]*a[l][l]).reduce((c,l)=>c*l,1)===0)throw new Error("Matrix is singular");return h3(a,u3(o,n.map(c=>t[c]),s),s)}var m3=class{add(e,t,n){if(typeof arguments[0]!="string"){for(var e in arguments[0])this.add(e,arguments[0][e],arguments[1]);return}(Array.isArray(e)?e:[e]).forEach(function(o){this[o]=this[o]||[],t&&this[o][n?"unshift":"push"](t)},this)}run(e,t){this[e]=this[e]||[],this[e].forEach(function(n){n.call(t&&t.context?t.context:t,t)})}},Sn=new m3,hr={gamut_mapping:"css",precision:5,deltaE:"76",verbose:"production".toLowerCase()!=="test",warn:function(t){this.verbose&&globalThis?.console?.warn?.(t)}},Fu=class{type;coordMeta;coordRange;range;constructor(e,t){if(typeof e=="object"&&(this.coordMeta=e),t&&(this.coordMeta=t,this.coordRange=t.range??t.refRange),typeof e=="string"){let n=e.trim().match(/^(?<type><[a-z]+>)(\[(?<min>-?[.\d]+),\s*(?<max>-?[.\d]+)\])?$/);if(!n)throw new TypeError(`Cannot parse ${e} as a type definition.`);this.type=n.groups.type;let{min:o,max:a}=n.groups;(o||a)&&(this.range=[+o,+a])}}get computedRange(){return this.range?this.range:this.type==="<percentage>"?this.percentageRange():this.type==="<angle>"?[0,360]:null}get unit(){return this.type==="<percentage>"?"%":this.type==="<angle>"?"deg":""}resolve(e){if(this.type==="<angle>")return e;let t=this.computedRange,n=this.coordRange;return this.type==="<percentage>"&&(n??=this.percentageRange()),_l(t,n,e)}serialize(e,t){let n=this.type==="<percentage>"?this.percentageRange(100):this.computedRange,o=this.unit;return e=_l(this.coordRange,n,e),bl(e,{unit:o,precision:t})}toString(){let e=this.type;if(this.range){let[t="",n=""]=this.range;e+=`[${t},${n}]`}return e}percentageRange(e=1){let t;return this.coordMeta&&this.coordMeta.range||this.coordRange&&this.coordRange[0]>=0?t=[0,1]:t=[-1,1],[t[0]*e,t[1]*e]}static get(e,t){return no(e,this)?e:new this(e,t)}},Ml=Symbol("instance"),Gu=class sp{type;name;spaceCoords;coords;id;alpha;constructor(t,n=t.space){t[Ml]=this,this.type="function",this.name="color",Object.assign(this,t),this.space=n,this.type!=="custom"&&(this.spaceCoords=Object.values(n.coords),this.coords||(this.coords=this.spaceCoords.map(o=>{let a=["<number>","<percentage>"];return o.type==="angle"&&a.push("<angle>"),a})),this.coords=this.coords.map((o,a)=>{let s=this.spaceCoords[a];return typeof o=="string"&&(o=o.trim().split(/\s*\|\s*/)),o.map(c=>Fu.get(c,s))}))}serializeCoords(t,n,o){return o=t.map((a,s)=>Fu.get(o?.[s]??this.coords[s][0],this.spaceCoords[s])),t.map((a,s)=>o[s].serialize(a,n))}coerceCoords(t,n){return Object.entries(this.space.coords).map(([o,a],s)=>{let c=t[s];if(He(c)||isNaN(c))return c;let l=n[s],h=this.coords[s].find(u=>u.type==l);if(!h){let u=a.name||o;throw new TypeError(`${l??c?.raw??c} not allowed for ${u} in ${this.name}()`)}return c=h.resolve(c),h.range&&(n[s]=h.toString()),c})}canSerialize(){return this.type==="function"||this.serialize}parse(t){return null}static get(t,...n){return!t||no(t,this)?t:t[Ml]?t[Ml]:new sp(t,...n)}},qt={D50:[.3457/.3585,1,.2958/.3585],D65:[.3127/.329,1,.3583/.329]};function Sl(e){return Array.isArray(e)?e:qt[e]}function Ea(e,t,n,o={}){if(e=Sl(e),t=Sl(t),!e||!t)throw new TypeError(`Missing white point to convert ${e?"":"from"}${!e&&!t?"/":""}${t?"":"to"}`);if(e===t)return n;let a={W1:e,W2:t,XYZ:n,options:o};if(Sn.run("chromatic-adaptation-start",a),a.M||(a.W1===qt.D65&&a.W2===qt.D50?a.M=[[1.0479297925449969,.022946870601609652,-.05019226628920524],[.02962780877005599,.9904344267538799,-.017073799063418826],[-.009243040646204504,.015055191490298152,.7518742814281371]]:a.W1===qt.D50&&a.W2===qt.D65&&(a.M=[[.955473421488075,-.02309845494876471,.06325924320057072],[-.0283697093338637,1.0099953980813041,.021041441191917323],[.012314014864481998,-.020507649298898964,1.330365926242124]])),Sn.run("chromatic-adaptation-end",a),a.M)return Ye(a.XYZ,a.M);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}function Wu(e,t){let n={str:String(e)?.trim(),options:t};if(Sn.run("parse-start",n),n.color)return n.color;n.parsed=v3(n.str);let o,a=n.options?n.options.parseMeta??n.options.meta:null;if(n.parsed){let s=n.parsed.name,c,l,h=n.parsed.args,u=h.map((_,g)=>n.parsed.argMeta[g]?.type);if(s==="color"){let _=h.shift();u.shift();let g=_.startsWith("--")?_.substring(2):`--${_}`,b=[_,g];if(c=we.findFormat({name:s,id:b,type:"function"}),!c){let w,v=_ in we.registry?_:g;if(v in we.registry){let E=we.registry[v].formats?.color?.id;E&&(w=`Did you mean ${e.replace("color("+_,"color("+E)}?`)}throw new TypeError(`Cannot parse ${n.str}. `+(w??"Missing a plugin?"))}l=c.space,c.id.startsWith("--")&&!_.startsWith("--")&&hr.warn(`${l.name} is a non-standard space and not currently supported in the CSS spec. Use prefixed color(${c.id}) instead of color(${_}).`),_.startsWith("--")&&!c.id.startsWith("--")&&hr.warn(`${l.name} is a standard space and supported in the CSS spec. Use color(${c.id}) instead of prefixed color(${_}).`)}else c=we.findFormat({name:s,type:"function"}),l=c.space;a&&Object.assign(a,{format:c,formatId:c.name,types:u,commas:n.parsed.commas});let f=1;n.parsed.lastAlpha&&(f=n.parsed.args.pop(),a&&(a.alphaType=u.pop()));let p=c.coords.length;if(h.length!==p)throw new TypeError(`Expected ${p} coordinates for ${l.id} in ${n.str}), got ${h.length}`);h=c.coerceCoords(h,u),o={spaceId:l.id,coords:h,alpha:f}}else e:for(let s of we.all)for(let c in s.formats){let l=s.formats[c];if(l.type!=="custom"||l.test&&!l.test(n.str))continue;let h=s.getFormat(l),u=h.parse(n.str);if(u){a&&Object.assign(a,{format:h,formatId:c}),o=u;break e}}if(!o)throw new TypeError(`Could not parse ${e} as a color. Missing a plugin?`);return o.alpha=He(o.alpha)?o.alpha:o.alpha===void 0?1:Gr(0,o.alpha,1),o}var Uu={"%":.01,deg:1,grad:.9,rad:180/Math.PI,turn:360},Ma={function:/^([a-z]+)\(((?:calc\(NaN\)|.)+?)\)$/i,number:/^([-+]?(?:[0-9]*\.)?[0-9]+(e[-+]?[0-9]+)?)$/i,unitValue:RegExp(`(${Object.keys(Uu).join("|")})$`),singleArgument:/\/?\s*(none|NaN|calc\(NaN\)|[-+\w.]+(?:%|deg|g?rad|turn)?)/g};function g3(e){let t={},n=e.match(Ma.unitValue)?.[0],o=t.raw=e;return n?(t.type=n==="%"?"<percentage>":"<angle>",t.unit=n,t.unitless=Number(o.slice(0,-n.length)),o=t.unitless*Uu[n]):Ma.number.test(o)?(o=Number(o),t.type="<number>"):o==="none"?o=null:o==="NaN"||o==="calc(NaN)"?(o=NaN,t.type="<number>"):t.type="<ident>",{value:o,meta:t}}function v3(e){if(!e)return;e=e.trim();let t=e.match(Ma.function);if(t){let n=[],o=[],a=!1,s=t[1].toLowerCase(),c=t[2].replace(Ma.singleArgument,(l,h)=>{let{value:u,meta:f}=g3(h);return(l.startsWith("/")||s!=="color"&&n.length===3)&&(a=!0),n.push(u),o.push(f),""});return{name:s,args:n,argMeta:o,lastAlpha:a,commas:c.includes(","),rawName:t[1],rawArgs:t[2]}}}function Le(e,t){if(Array.isArray(e))return e.map(o=>Le(o,t));if(!e)throw new TypeError("Empty color reference");xo(e)&&(e=Wu(e,t));let n=e.space||e.spaceId;return typeof n=="string"&&(e.space=we.get(n)),e.alpha===void 0&&(e.alpha=1),e}var b3=75e-6,we=class Hr{constructor(t){this.id=t.id,this.name=t.name,this.base=t.base?Hr.get(t.base):null,this.aliases=t.aliases,this.displaySpaces=t.displaySpaces?.map(a=>Hr.get(a)),this.bases=[];for(let a=this.base;a;a=a.base)this.bases.push(a);t.rgbGamut&&(this.rgbGamut=t.rgbGamut),t.linearGamut&&(this.linearGamut=t.linearGamut),this.base&&(t.fromBase&&(this.fromBase=t.fromBase),t.toBase&&(this.toBase=t.toBase));let n=t.coords??this.base.coords;for(let a in n)"name"in n[a]||(n[a].name=a);this.coords=n;let o=t.white??this.base.white??"D65";this.white=Sl(o),this.formats=t.formats??{};for(let a in this.formats){let s=this.formats[a];s.type||="function",s.name||=a}this.formats.color?.id||(this.formats.color={...this.formats.color??{},id:t.cssId||this.id}),t.gamutSpace?this.gamutSpace=t.gamutSpace==="self"?this:Hr.get(t.gamutSpace):this.isPolar?this.gamutSpace=this.base:this.gamutSpace=this,this.gamutSpace.isUnbounded&&(this.inGamut=(a,s)=>!0),this.M=t.M??{},this.referred=t.referred,Object.defineProperty(this,"path",{value:w3(this).reverse(),writable:!1,enumerable:!0,configurable:!0}),Sn.run("colorspace-init-end",this)}inGamut(t,{epsilon:n=b3}={}){if(!this.equals(this.gamutSpace))return t=this.to(this.gamutSpace,t),this.gamutSpace.inGamut(t,{epsilon:n});let o=Object.values(this.coords);return t.every((a,s)=>{let c=o[s];if(c.type!=="angle"&&c.range){if(He(a))return!0;let[l,h]=c.range;return(l===void 0||a>=l-n)&&(h===void 0||a<=h+n)}return!0})}get isUnbounded(){return Object.values(this.coords).every(t=>!("range"in t))}get cssId(){return this.formats?.color?.id||this.id}get hueId(){for(let t in this.coords)if(this.coords[t].type==="angle")return t;return null}get hueIndex(){return Object.keys(this.coords).findIndex(t=>this.coords[t].type==="angle")}get isPolar(){return this.hueId!==null}getFormat(t){if(!t)return null;t==="default"?t=Object.values(this.formats)[0]:typeof t=="string"&&(t=this.formats[t]);let n=Gu.get(t,this);return n!==t&&t.name in this.formats&&(this.formats[t.name]=n),n}equals(t){return t?this===t||this.id===t||this.id===t.id:!1}to(t,n){if(arguments.length===1){const l=Le(t);[t,n]=[l.space,l.coords]}if(t=Hr.get(t),this.equals(t))return n;n=n.map(l=>He(l)?0:l);let o=this.path,a=t.path,s,c;for(let l=0;l<o.length&&o[l].equals(a[l]);l++)s=o[l],c=l;if(!s)throw new Error(`Cannot convert between color spaces ${this} and ${t}: no connection space was found`);for(let l=o.length-1;l>c;l--)n=o[l].toBase(n);for(let l=c+1;l<a.length;l++)n=a[l].fromBase(n);return n}from(t,n){if(arguments.length===1){const o=Le(t);[t,n]=[o.space,o.coords]}return t=Hr.get(t),t.to(this,n)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let t=[];for(let n in this.coords){let o=this.coords[n],a=o.range||o.refRange;t.push(a?.min??0)}return t}static registry={};static get all(){return[...new Set(Object.values(Hr.registry))]}static register(t,n){if(arguments.length===1&&(n=arguments[0],t=n.id),n=this.get(n),this.registry[t]&&this.registry[t]!==n)throw new Error(`Duplicate color space registration: '${t}'`);if(this.registry[t]=n,arguments.length===1&&n.aliases)for(let o of n.aliases)this.register(o,n);return n}static get(t,...n){if(!t||no(t,this))return t;if(Mn(t)==="string"){let o=Hr.registry[t.toLowerCase()];if(!o)throw new TypeError(`No color space found with id = "${t}"`);return o}if(n.length)return Hr.get(...n);throw new TypeError(`${t} is not a valid color space`)}static findFormat(t,n=Hr.all){if(!t)return null;typeof t=="string"&&(t={name:t});for(let o of n)for(let[a,s]of Object.entries(o.formats)){s.name??=a,s.type??="function";let c=(!t.name||s.name===t.name)&&(!t.type||s.type===t.type);if(t.id){let l=s.ids||[s.id],h=Array.isArray(t.id)?t.id:[t.id];c&&=h.some(u=>l.includes(u))}if(c){let l=Gu.get(s,o);return l!==s&&(o.formats[s.name]=l),l}}return null}static resolveCoord(t,n){let o=Mn(t),a,s;if(o==="string"?t.includes(".")?[a,s]=t.split("."):[a,s]=[,t]:Array.isArray(t)?[a,s]=t:(a=t.space,s=t.coordId),a=Hr.get(a),a||(a=n),!a)throw new TypeError(`Cannot resolve coordinate reference ${t}: No color space specified and relative references are not allowed here`);if(o=Mn(s),o==="number"||o==="string"&&s>=0){let h=Object.entries(a.coords)[s];if(h)return{space:a,id:h[0],index:s,...h[1]}}a=Hr.get(a);let c=s.toLowerCase(),l=0;for(let h in a.coords){let u=a.coords[h];if(h.toLowerCase()===c||u.name?.toLowerCase()===c)return{space:a,id:h,index:l,...u};l++}throw new TypeError(`No "${s}" coordinate found in ${a.name}. Its coordinates are: ${Object.keys(a.coords).join(", ")}`)}static DEFAULT_FORMAT={type:"functions",name:"color"}};function w3(e){let t=[e];for(let n=e;n=n.base;)t.push(n);return t}var Tt=new we({id:"xyz-d65",name:"XYZ D65",coords:{x:{refRange:[0,1],name:"X"},y:{refRange:[0,1],name:"Y"},z:{refRange:[0,1],name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]}),It=class extends we{constructor(e){e.coords||(e.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),e.base||(e.base=Tt);let t=e.toXYZ_M??e.M?.toXYZ,n=e.fromXYZ_M??e.M?.fromXYZ;e.referred??="display",super(e),t&&n&&(this.M.toXYZ=t,this.M.fromXYZ=n)}toBase(e){let t=Ye(e,this.M.toXYZ);return this.white!==this.base.white&&(t=Ea(this.white,this.base.white,t)),t}fromBase(e){return e=Ea(this.base.white,this.white,e),Ye(e,this.M.fromXYZ)}},Al=new we({id:"xyz-d50",name:"XYZ D50",white:"D50",base:Tt,fromBase:e=>Ea(Tt.white,"D50",e),toBase:e=>Ea("D50",Tt.white,e)}),_3=216/24389,Vu=24/116,Sa=24389/27,xl=qt.D50,fr=new we({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:xl,base:Al,fromBase(e){let t=e.map((n,o)=>n/xl[o]).map(n=>n>_3?Math.cbrt(n):(Sa*n+16)/116);return[116*t[1]-16,500*(t[0]-t[1]),200*(t[1]-t[2])]},toBase(e){let[t,n,o]=e,a=[];return a[1]=(t+16)/116,a[0]=n/500+a[1],a[2]=a[1]-o/200,[a[0]>Vu?Math.pow(a[0],3):(116*a[0]-16)/Sa,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/Sa,a[2]>Vu?Math.pow(a[2],3):(116*a[2]-16)/Sa].map((s,c)=>s*xl[c])},formats:{lab:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <percentage>"]}}});function Ir(e){return typeof e!="number"?e:(e%360+360)%360}function Zu(e,t){let[n,o]=t,a=He(n),s=He(o);if(a&&s)return[n,o];if(a?n=o:s&&(o=n),e==="raw")return t;n=Ir(n),o=Ir(o);let c=o-n;return e==="increasing"?c<0&&(o+=360):e==="decreasing"?c>0&&(n+=360):e==="longer"?-180<c&&c<180&&(c>0?n+=360:o+=360):e==="shorter"&&(c>180?n+=360:c<-180&&(o+=360)),[n,o]}var $t=new we({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:fr,fromBase(e){if(this.ε===void 0){let c=Object.values(this.base.coords)[1].refRange,l=c[1]-c[0];this.ε=l/1e5}let[t,n,o]=e,a=Math.abs(n)<this.ε&&Math.abs(o)<this.ε,s=a?null:Ir(Math.atan2(o,n)*180/Math.PI);return[t,a?0:Math.sqrt(n**2+o**2),s]},toBase(e){let[t,n,o]=e,a=null,s=null;return He(o)||(n=n<0?0:n,a=n*Math.cos(o*Math.PI/180),s=n*Math.sin(o*Math.PI/180)),[t,a,s]},formats:{lch:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <angle>"]}}}),ju=25**7,Aa=Math.PI,qu=180/Aa,Io=Aa/180;function Ku(e){const t=e*e;return t*t*t*e}function Yu(e,t,{kL:n=1,kC:o=1,kH:a=1}={}){[e,t]=Le([e,t]);let[s,c,l]=fr.from(e),h=$t.from(fr,[s,c,l])[1],[u,f,p]=fr.from(t),_=$t.from(fr,[u,f,p])[1];h<0&&(h=0),_<0&&(_=0);let g=Ku((h+_)/2),b=.5*(1-Math.sqrt(g/(g+ju))),w=(1+b)*c,v=(1+b)*f,E=Math.sqrt(w**2+l**2),S=Math.sqrt(v**2+p**2),C=w===0&&l===0?0:Math.atan2(l,w),T=v===0&&p===0?0:Math.atan2(p,v);C<0&&(C+=2*Aa),T<0&&(T+=2*Aa),C*=qu,T*=qu;let $=u-s,K=S-E,W=T-C,ne=C+T,N=Math.abs(W),pe;E*S===0?pe=0:N<=180?pe=W:W>180?pe=W-360:W<-180?pe=W+360:hr.warn("the unthinkable has happened");let ge=2*Math.sqrt(S*E)*Math.sin(pe*Io/2),P=(s+u)/2,X=(E+S)/2,M=Ku(X),Q;E*S===0?Q=ne:N<=180?Q=ne/2:ne<360?Q=(ne+360)/2:Q=(ne-360)/2;let Ie=(P-50)**2,ce=1+.015*Ie/Math.sqrt(20+Ie),Re=1+.045*X,ae=1;ae-=.17*Math.cos((Q-30)*Io),ae+=.24*Math.cos(2*Q*Io),ae+=.32*Math.cos((3*Q+6)*Io),ae-=.2*Math.cos((4*Q-63)*Io);let Ee=1+.015*X*ae,V=30*Math.exp(-1*((Q-275)/25)**2),G=2*Math.sqrt(M/(M+ju)),ye=-1*Math.sin(2*V*Io)*G,me=($/(n*ce))**2;return me+=(K/(o*Re))**2,me+=(ge/(a*Ee))**2,me+=ye*(K/(o*Re))*(ge/(a*Ee)),Math.sqrt(me)}var _i={XYZtoLMS:[[.819022437996703,.3619062600528904,-.1288737815209879],[.0329836539323885,.9292868615863434,.0361446663506424],[.0481771893596242,.2642395317527308,.6335478284694309]],LMStoXYZ:[[1.2268798758459243,-.5578149944602171,.2813910456659647],[-.0405757452148008,1.112286803280317,-.0717110580655164],[-.0763729366746601,-.4214933324022432,1.5869240198367816]],LMStoLab:[[.210454268309314,.7936177747023054,-.0040720430116193],[1.9779985324311684,-2.42859224204858,.450593709617411],[.0259040424655478,.7827717124575296,-.8086757549230774]],LabtoLMS:[[1,.3963377773761749,.2158037573099136],[1,-.1055613458156586,-.0638541728258133],[1,-.0894841775298119,-1.2914855480194092]]},Cr=new we({id:"oklab",name:"Oklab",coords:{l:{refRange:[0,1],name:"Lightness"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:Tt,M:_i,fromBase(e){let t=Ye(e,_i.XYZtoLMS);return t[0]=Math.cbrt(t[0]),t[1]=Math.cbrt(t[1]),t[2]=Math.cbrt(t[2]),Ye(t,_i.LMStoLab,t)},toBase(e){let t=Ye(e,_i.LabtoLMS);return t[0]=t[0]**3,t[1]=t[1]**3,t[2]=t[2]**3,Ye(t,_i.LMStoXYZ,t)},formats:{oklab:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <percentage>"]}}});function Il(e,t){[e,t]=Le([e,t]);let[n,o,a]=Cr.from(e),[s,c,l]=Cr.from(t),h=n-s,u=o-c,f=a-l;return Math.sqrt(h**2+u**2+f**2)}var y3=75e-6;function Co(e,t,{epsilon:n=y3}={}){e=Le(e),t||(t=e.space),t=we.get(t);let o=e.coords;return t!==e.space&&(o=t.from(e)),t.inGamut(o,{epsilon:n})}function Ue(e,t,{inGamut:n}={}){e=Le(e),t=we.get(t);let o=t.from(e),a={space:t,coords:o,alpha:e.alpha};return n&&(a=cn(a,n===!0?void 0:n)),a}Ue.returns="color";function yi(e,t){e=Le(e);let n=we.get(t,t?.space),o=t?.precision,a;return!n||e.space.equals(n)?a=e.coords.slice():a=n.from(e),o===void 0?a:a.map(s=>wl(s,o))}function pr(e,t){if(e=Le(e),t==="alpha")return e.alpha??1;let{space:n,index:o}=we.resolveCoord(t,e.space);return yi(e,n)[o]}var An=new we({id:"oklch",name:"OkLCh",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:Cr,fromBase:$t.fromBase,toBase:$t.toBase,formats:{oklch:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <angle>"]}}});function Cl(e,t,n,o){return e=Le(e),Array.isArray(t)&&([t,n,o]=[e.space,t,n]),t=we.get(t),e.coords=t===e.space?n.slice():t.to(e.space,n),o!==void 0&&(e.alpha=o),e}Cl.returns="color";function ln(e,t,n){if(e=Le(e),arguments.length===2&&Mn(arguments[1])==="object"){let o=arguments[1];for(let a in o)ln(e,a,o[a])}else if(typeof n=="function"&&(n=n(pr(e,t))),t==="alpha")e.alpha=n;else{let{space:o,index:a}=we.resolveCoord(t,e.space),s=yi(e,o);s[a]=n,Cl(e,o,s)}return e}ln.returns="color";function Oo(e){return{space:e.space,coords:e.coords.slice(),alpha:e.alpha}}function Xu(e,t,n="lab"){n=we.get(n);let o=n.from(e),a=n.from(t);return Math.sqrt(o.reduce((s,c,l)=>{let h=a[l];return He(c)||He(h)?s:s+(h-c)**2},0))}function k3(e,t){return Xu(e,t,"lab")}var Ju=Math.PI/180;function E3(e,t,{l:n=2,c:o=1}={}){[e,t]=Le([e,t]);let[a,s,c]=fr.from(e),[,l,h]=$t.from(fr,[a,s,c]),[u,f,p]=fr.from(t),_=$t.from(fr,[u,f,p])[1];l<0&&(l=0),_<0&&(_=0);let g=a-u,b=l-_,w=s-f,v=c-p,E=w**2+v**2-b**2,S=.511;a>=16&&(S=.040975*a/(1+.01765*a));let C=.0638*l/(1+.0131*l)+.638,T;He(h)&&(h=0),h>=164&&h<=345?T=.56+Math.abs(.2*Math.cos((h+168)*Ju)):T=.36+Math.abs(.4*Math.cos((h+35)*Ju));let $=Math.pow(l,4),K=Math.sqrt($/($+1900)),W=C*(K*T+1-K),ne=(g/(n*S))**2;return ne+=(b/(o*C))**2,ne+=E/W**2,Math.sqrt(ne)}var Qu=203,Ol=new we({id:"xyz-abs-d65",cssId:"--xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:Tt,fromBase(e){return e.map(t=>t*Qu)},toBase(e){return e.map(t=>t/Qu)}}),e0=1.15,t0=.66,r0=2610/2**14,M3=2**14/2610,n0=3424/4096,o0=2413/128,i0=2392/128,S3=1.7*2523/32,a0=32/(1.7*2523),s0=-.56,Tl=16295499532821565e-27,ki={XYZtoCone:[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],ConetoXYZ:[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],ConetoIab:[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],IabtoCone:[[1,.13860504327153927,.05804731615611883],[1,-.1386050432715393,-.058047316156118904],[1,-.09601924202631895,-.811891896056039]]},l0=new we({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.21,.21]},bz:{refRange:[-.21,.21]}},base:Ol,M:ki,fromBase(e){let[t,n,o]=e,a=e0*t-.1499999999999999*o,s=t0*n- -.33999999999999997*t,c=Ye([a,s,o],ki.XYZtoCone).map(function(f){let p=n0+o0*ct(f/1e4,r0),_=1+i0*ct(f/1e4,r0);return ct(p/_,S3)}),[l,h,u]=Ye(c,ki.ConetoIab);return[.43999999999999995*l/(1+s0*l)-Tl,h,u]},toBase(e){let[t,n,o]=e,a=(t+Tl)/(.43999999999999995-s0*(t+Tl)),s=Ye([a,n,o],ki.IabtoCone).map(function(f){let p=n0-ct(f,a0),_=i0*ct(f,a0)-o0;return 1e4*ct(p/_,M3)}),[c,l,h]=Ye(s,ki.ConetoXYZ),u=(c+.1499999999999999*h)/e0;return[u,(l+-.33999999999999997*u)/t0,h]},formats:{jzazbz:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <percentage>"]}}}),Ll=new we({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,.26],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:l0,fromBase:$t.fromBase,toBase:$t.toBase,formats:{jzczhz:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <angle>"]}}});function A3(e,t){[e,t]=Le([e,t]);let[n,o,a]=Ll.from(e),[s,c,l]=Ll.from(t),h=n-s,u=o-c;He(a)&&He(l)?(a=0,l=0):He(a)?a=l:He(l)&&(l=a);let f=a-l,p=2*Math.sqrt(o*c)*Math.sin(f/2*(Math.PI/180));return Math.sqrt(h**2+u**2+p**2)}var c0=3424/4096,d0=2413/128,u0=2392/128,h0=2610/16384,x3=2523/32,I3=16384/2610,f0=32/2523,Ei={XYZtoLMS:[[.3592832590121217,.6976051147779502,-.035891593232029],[-.1920808463704993,1.100476797037432,.0753748658519118],[.0070797844607479,.0748396662186362,.8433265453898765]],LMStoIPT:[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],IPTtoLMS:[[.9999999999999998,.0086090370379328,.111029625003026],[.9999999999999998,-.0086090370379328,-.1110296250030259],[.9999999999999998,.5600313357106791,-.3206271749873188]],LMStoXYZ:[[2.0701522183894223,-1.3263473389671563,.2066510476294053],[.3647385209748072,.6805660249472273,-.0453045459220347],[-.0497472075358123,-.0492609666966131,1.1880659249923042]]},Pl=new we({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:Ol,M:Ei,fromBase(e){return C3(Ye(e,Ei.XYZtoLMS))},toBase(e){let t=O3(e);return Ye(t,Ei.LMStoXYZ)},formats:{ictcp:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <percentage>"]}}});function C3(e){let t=e.map(function(n){return((c0+d0*(n/1e4)**h0)/(1+u0*(n/1e4)**h0))**x3});return Ye(t,Ei.LMStoIPT)}function O3(e){return Ye(e,Ei.IPTtoLMS).map(function(t){return 1e4*(Math.max(t**f0-c0,0)/(d0-u0*t**f0))**I3})}function T3(e,t){[e,t]=Le([e,t]);let[n,o,a]=Pl.from(e),[s,c,l]=Pl.from(t);return 720*Math.sqrt((n-s)**2+.25*(o-c)**2+(a-l)**2)}function L3(e,t){[e,t]=Le([e,t]);let n=2,[o,a,s]=Cr.from(e),[c,l,h]=Cr.from(t),u=o-c,f=n*(a-l),p=n*(s-h);return Math.sqrt(u**2+f**2+p**2)}var P3=qt.D65,p0=.42,m0=1/p0,Rl=2*Math.PI,Mi={cat16:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],cat16Inv:[[1.8620678550872327,-1.0112546305316843,.14918677544445175],[.38752654323613717,.6214474419314753,-.008973985167612518],[-.015841498849333856,-.03412293802851557,1.0499644368778496]],m1:[[460,451,288],[460,-891,-261],[460,-220,-6300]]},R3={dark:[.8,.525,.8],dim:[.9,.59,.9],average:[1,.69,1]},oo={h:[20.14,90,164.25,237.53,380.14],e:[.8,.7,1,1.2,.8],H:[0,100,200,300,400]},$3=180/Math.PI,g0=Math.PI/180;function v0(e,t){return e.map(n=>{const o=ct(t*Math.abs(n)*.01,p0);return 400*ka(o,n)/(o+27.13)})}function D3(e,t){const n=100/t*27.13**m0;return e.map(o=>{const a=Math.abs(o);return ka(n*ct(a/(400-a),m0),o)})}function B3(e){let t=Ir(e);t<=oo.h[0]&&(t+=360);const n=Hu(oo.h,t)-1,[o,a]=oo.h.slice(n,n+2),[s,c]=oo.e.slice(n,n+2),l=oo.H[n],h=(t-o)/s;return l+100*h/(h+(a-t)/c)}function z3(e){let t=(e%400+400)%400;const n=Math.floor(.01*t);t=t%100;const[o,a]=oo.h.slice(n,n+2),[s,c]=oo.e.slice(n,n+2);return Ir((t*(c*o-s*a)-100*o*c)/(t*(c-s)-100*c))}function b0(e,t,n,o,a){const s={};s.discounting=a,s.refWhite=e,s.surround=o;const c=e.map(b=>b*100);s.la=t,s.yb=n;const l=c[1],h=Ye(c,Mi.cat16);let u=R3[s.surround];const f=u[0];s.c=u[1],s.nc=u[2];const p=(1/(5*s.la+1))**4;s.fl=p*s.la+.1*(1-p)*(1-p)*Math.cbrt(5*s.la),s.flRoot=s.fl**.25,s.n=s.yb/l,s.z=1.48+Math.sqrt(s.n),s.nbb=.725*s.n**-.2,s.ncb=s.nbb;const _=a?1:Math.max(Math.min(f*(1-1/3.6*Math.exp((-s.la-42)/92)),1),0);s.dRgb=h.map(b=>wi(1,l/b,_)),s.dRgbInv=s.dRgb.map(b=>1/b);const g=v0(h.map((b,w)=>b*s.dRgb[w]),s.fl);return s.aW=s.nbb*(2*g[0]+g[1]+.05*g[2]),s}var w0=b0(P3,64/Math.PI*.2,20,"average",!1);function _0(e,t){if(!(e.J!==void 0^e.Q!==void 0))throw new Error("Conversion requires one and only one: 'J' or 'Q'");if(!(e.C!==void 0^e.M!==void 0^e.s!==void 0))throw new Error("Conversion requires one and only one: 'C', 'M' or 's'");if(!(e.h!==void 0^e.H!==void 0))throw new Error("Conversion requires one and only one: 'h' or 'H'");if(e.J===0||e.Q===0)return[0,0,0];let n=0;e.h!==void 0?n=Ir(e.h)*g0:n=z3(e.H)*g0;const o=Math.cos(n),a=Math.sin(n);let s=0;e.J!==void 0?s=ct(e.J,1/2)*.1:e.Q!==void 0&&(s=.25*t.c*e.Q/((t.aW+4)*t.flRoot));let c=0;e.C!==void 0?c=e.C/s:e.M!==void 0?c=e.M/t.flRoot/s:e.s!==void 0&&(c=4e-4*e.s**2*(t.aW+4)/t.c);const l=ct(c*Math.pow(1.64-Math.pow(.29,t.n),-.73),10/9),h=.25*(Math.cos(n+2)+3.8),u=t.aW*ct(s,2/t.c/t.z),f=5e4/13*t.nc*t.ncb*h,p=u/t.nbb,_=23*(p+.305)*yl(l,23*f+l*(11*o+108*a)),g=_*o,b=_*a,w=D3(Ye([p,g,b],Mi.m1).map(v=>v*1/1403),t.fl);return Ye(w.map((v,E)=>v*t.dRgbInv[E]),Mi.cat16Inv).map(v=>v/100)}function y0(e,t){const n=e.map(S=>S*100),o=v0(Ye(n,Mi.cat16).map((S,C)=>S*t.dRgb[C]),t.fl),a=o[0]+(-12*o[1]+o[2])/11,s=(o[0]+o[1]-2*o[2])/9,c=(Math.atan2(s,a)%Rl+Rl)%Rl,l=.25*(Math.cos(c+2)+3.8),h=5e4/13*t.nc*t.ncb*yl(l*Math.sqrt(a**2+s**2),o[0]+o[1]+1.05*o[2]+.305),u=ct(h,.9)*Math.pow(1.64-Math.pow(.29,t.n),.73),f=t.nbb*(2*o[0]+o[1]+.05*o[2]),p=ct(f/t.aW,.5*t.c*t.z),_=100*ct(p,2),g=4/t.c*p*(t.aW+4)*t.flRoot,b=u*p,w=b*t.flRoot,v=Ir(c*$3),E=B3(v);return{J:_,C:b,h:v,s:50*ct(t.c*u/(t.aW+4),1/2),Q:g,M:w,H:E}}var N3=new we({id:"cam16-jmh",cssId:"--cam16-jmh",name:"CAM16-JMh",coords:{j:{refRange:[0,100],name:"J"},m:{refRange:[0,105],name:"Colorfulness"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:Tt,M:Mi,fromBase(e){this.ε===void 0&&(this.ε=Object.values(this.coords)[1].refRange[1]/1e5);const t=y0(e,w0),n=Math.abs(t.M)<this.ε;return[t.J,n?0:t.M,n?null:t.h]},toBase(e){return _0({J:e[0],M:e[1],h:e[2]},w0)}}),H3=qt.D65,F3=216/24389,k0=24389/27;function G3(e){return 116*(e>F3?Math.cbrt(e):(k0*e+16)/116)-16}function $l(e){return e>8?Math.pow((e+16)/116,3):e/k0}function W3(e,t){let[n,o,a]=e,s=[],c=0;if(a===0)return[0,0,0];let l=$l(a);a>0?c=.00379058511492914*a**2+.608983189401032*a+.9155088574762233:c=9514440756550361e-21*a**2+.08693057439788597*a-21.928975842194614;const h=2e-12,u=15;let f=0,p=1/0,_=[0,0,0];for(;f<=u;){s=_0({J:c,C:o,h:n},t);const g=Math.abs(s[1]-l);if(g<p){if(g<=h)return s;_=s,p=g}c=c-(s[1]-l)*c/(2*s[1]),f+=1}return _}function U3(e,t){const n=G3(e[1]);if(n===0)return[0,0,0];const o=y0(e,xa);return[Ir(o.h),o.C,n]}var xa=b0(H3,200/Math.PI*$l(50),$l(50)*100,"average",!1),Si=new we({id:"hct",name:"HCT",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},c:{refRange:[0,145],name:"Colorfulness"},t:{refRange:[0,100],name:"Tone"}},base:Tt,fromBase(e){this.ε===void 0&&(this.ε=Object.values(this.coords)[1].refRange[1]/1e5);let t=U3(e,xa);return t[1]<this.ε&&(t[1]=0,t[0]=null),t},toBase(e){return W3(e,xa)},formats:{color:{id:"--hct",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),V3=Math.PI/180,E0=[1,.007,.0228];function M0(e){e[1]<0&&(e=Si.fromBase(Si.toBase(e)));const t=Math.log(Math.max(1+E0[2]*e[1]*xa.flRoot,1))/E0[2],n=e[0]*V3,o=t*Math.cos(n),a=t*Math.sin(n);return[e[2],o,a]}function Z3(e,t){[e,t]=Le([e,t]);let[n,o,a]=M0(Si.from(e)),[s,c,l]=M0(Si.from(t));return Math.sqrt((n-s)**2+(o-c)**2+(a-l)**2)}var{cos:Je,sin:Qe,sqrt:To,atan2:Wt,exp:Lo,abs:Dl,pow:Ia,PI:j3}=Math,q3=[[1.000042977349746,20718877053183e-18,-4361018085669474e-20],[26946201090235744e-21,.9999906145080147,-14898828405401079e-21],[-7941753620756204e-21,12875204405137254e-21,.9997859822609763]],K3=[[.9999570254019492,-2071874272730964e-20,4361733292468361e-20],[-2694517763358666e-20,1.000009385946497,1490098223546482e-20],[7943459292954202e-21,-1287824596735154e-20,1.000214063706999]],Y3=[[.7212986433113499,.45344826541531813,-.19288975751942616],[-.788211869495579,1.795241376757236,.0876172451181785],[-.0917700599912156,.45765588659459255,1.2922045513917677]],X3=[[1.065107295808859,-.3150044075301121,.1803492381741039],[.4721107713837796,.4271995765962455,.04150680489380985],[-.09156391926309541,-.1736709363194979,.7719790382558294]],Bl=[.47229813098762524,.5149184096354483,.5113233386366979],zl=[2.1173067060606283,1.9420552485353544,1.9557096741686448],J3=[[-.26355622180094096,.4168322883703174,.4926763141656403],[1.8897570508777322,-3.1212232034205774,1.0421666921060384],[.3585108617962056,1.7694028193790368,-1.4120626067695372]],Q3=[[.9183897822815021,.5232051237088666,.7065804598090856],[1.0899090574433026,.07005324849041904,.4319776874787044],[1.598895729264209,.22061850068770233,.012506037355220951]],io={CAT_TO_HELM:q3,CAT_FROM_HELM:K3,M1:Y3,M1_INV:X3,M2:J3,M2_INV:Q3},e6=-.02833024015436984,S0=-.21131429516166544,A0=.2189784817615645,x0=-.06871898981942523,I0=.005506053349515315,C0=-.0641329861299175,O0=-.053592461436994296,T0=-.00954137464208059,L0=.2676231133101982,P0=.8934892185255707,R0=.7173169828841472,$0=.6915224124600773,D0=.48647127559605596,B0=.9853124591201782,Nl=.5385456675962418,Hl=.12508858146241716,Fl=.6768950256217603,z0=-.4963251525324449,N0=-.09564696283240552,H0=-.029053748937210654,F0=1.3346761652952872,G0=-.1698908144723919,t6=-.195370576218515,r6=.5330819227283227,n6=.08863325582067766,o6=.9365540137751136,i6=.13789738139719568,a6=.061650260197979936,s6=.0641970862504494,l6=-.027401052793571013,c6=-.09900209889026965,d6=.059635520647228726,u6=-.013586499967803128,h6=.2253393118474472,f6=-1.5239477450767043,p6=-1.751157310240011,m6=-.43576378069144767,g6=1.060094063845983,v6=.47931193034584496,b6=-.2622579649434462,w6=.13610794232685908,_6=.1168702235362288,y6=-.01617739641422492,k6=.038145638815030566,W0=-28.2*j3/180,Ca=Je(W0),Oa=Qe(W0);function U0(e){return e6*Je(e)+S0*Qe(e)+A0*Je(2*e)+x0*Qe(2*e)+I0*Je(3*e)+C0*Qe(3*e)+O0*Je(4*e)+T0*Qe(4*e)}function E6(e){return .02833024015436984*Qe(e)+S0*Je(e)+-2*A0*Qe(2*e)+2*x0*Je(2*e)+-3*I0*Qe(3*e)+3*C0*Je(3*e)+-4*O0*Qe(4*e)+4*T0*Je(4*e)}function V0(e){let t=t6*Je(e)+r6*Qe(e)+n6*Je(2*e)+o6*Qe(2*e)+i6*Je(3*e)+a6*Qe(3*e)+s6*Je(4*e)+l6*Qe(4*e);return Lo(t)}function Z0(e){let t=e-.5;return Lo(Gr(-30,f6*t+p6*t*t,30))}function j0(e,t){let n=m6*Je(e)+g6*Qe(e)+v6*Je(2*e)+b6*Qe(2*e);return Lo(Gr(-30,(t-.5)*n,30))}function q0(e){let t=w6*Je(e)+_6*Qe(e)+y6*Je(2*e)+k6*Qe(2*e);return Lo(t)}function K0(e){return 1+c6*Je(e)+d6*Qe(e)+u6*Je(2*e)+h6*Qe(2*e)}function M6(e,t){let n=e*(1-e),o=e+Nl*n+Hl*n*(.5-e)+Fl*n*n;return o+=n*(z0*Je(t)+N0*Qe(t)),o}function S6(e,t){let n=z0*Je(t)+N0*Qe(t),o=e;for(let a=0;a<15;a++){let s=o*(1-o),c=1-2*o,l=o+(Nl+n)*s+Hl*s*(.5-o)+Fl*s*s-e,h=1+(Nl+n)*c+Hl*(c*(.5-o)-s)+Fl*2*s*c;Dl(h)<1e-10&&(h=1),o-=l/h}return o}function A6(e,t){let n=H0+F0*Je(t)+G0*Qe(t),o=e<1?1-e:0,a=n*e*o*o;return e*Lo(Gr(-30,a,30))}function x6(e,t){let n=H0+F0*Je(t)+G0*Qe(t),o=e;for(let a=0;a<12;a++){let s=o<1?1-o:0,c=n*o*s*s,l=Lo(Gr(-30,c,30)),h=o*l-e,u=n*s*(1-3*o),f=l*(1+o*u);Dl(f)<1e-10&&(f=1),o-=h/f}return o}var I6=function(e){let t=Ye(e,io.CAT_TO_HELM),[n,o,a]=Ye(t,io.M1),s=ct(n,Bl[0]),c=ct(o,Bl[1]),l=ct(a,Bl[2]),[h,u,f]=Ye([s,c,l],io.M2),p=Wt(f,u),_=To(u*u+f*f),g=U0(p),b=p+g;u=_*Je(b),f=_*Qe(b);let w=To(u*u+f*f),v=L0*Ia(w,Gr(.01,P0,10)),E=Wt(f,u),S=1+R0*Je(E)+$0*Qe(E)+D0*Je(2*E)+B0*Qe(2*E);h+=v*S,p=Wt(f,u),h=M6(h,p),p=Wt(f,u),h=A6(h,p),p=Wt(f,u);let C=V0(p);u*=C,f*=C,p=Wt(f,u),_=To(u*u+f*f);let T=K0(p),$=_>0?Ia(_,T):0;u=$*Je(p),f=$*Qe(p);let K=Z0(h);u*=K,f*=K,p=Wt(f,u);let W=j0(p,h);u*=W,f*=W,p=Wt(f,u),h*=q0(p);let ne=u*Ca-f*Oa,N=u*Oa+f*Ca;return[h,ne,N]},C6=function(e){let[t,n,o]=e,a=n*Ca+o*Oa,s=-n*Oa+o*Ca;n=a,o=s;let c=Wt(o,n);t/=q0(c),c=Wt(o,n);let l=j0(c,t);n/=l,o/=l;let h=Z0(t);n/=h,o/=h,c=Wt(o,n);let u=To(n*n+o*o),f=K0(c),p=u>0?Ia(u,1/f):0;n=p*Je(c),o=p*Qe(c),c=Wt(o,n);let _=V0(c);n/=_,o/=_,c=Wt(o,n),t=x6(t,c),c=Wt(o,n),t=S6(t,c);let g=To(n*n+o*o),b=L0*Ia(g,Gr(.01,P0,10)),w=Wt(o,n),v=1+R0*Je(w)+$0*Qe(w)+D0*Je(2*w)+B0*Qe(2*w);t-=b*v;let E=Wt(o,n);u=To(n*n+o*o);let S=E;for(let pe=0;pe<8;pe++){let ge=S+U0(S)-E,P=1+E6(S);Dl(P)<1e-10&&(P=1),S-=ge/P}n=u*Je(S),o=u*Qe(S);let[C,T,$]=Ye([t,n,o],io.M2_INV),K=ct(C,zl[0]),W=ct(T,zl[1]),ne=ct($,zl[2]),N=Ye([K,W,ne],io.M1_INV);return Ye(N,io.CAT_FROM_HELM)},Gl=new we({id:"helmlab-metric",name:"Helmlab MetricSpace",cssId:"--helmlab-metric",coords:{l:{refRange:[0,1.6],name:"Lightness"},a:{refRange:[-1.5,1.5]},b:{refRange:[-1.5,1.5]}},white:"D65",base:Tt,M:io,fromBase(e){return I6(e)},toBase(e){return C6(e)}}),O6=-.9155125151657894,T6=2.9268353744941558,L6=3.966003089807536,P6=1.9737081170404969,R6=52.473130649294724,$6=.47897301074925214;function D6(e,t){[e,t]=Le([e,t]);let[n,o,a]=Gl.from(e),[s,c,l]=Gl.from(t),h=n-s,u=o-c,f=a-l,p=(n+s)*.5,_=1+O6*(p-.5)**2,g=(Math.sqrt(o**2+a**2)+Math.sqrt(c**2+l**2))*.5,b=1+T6*g,w=(h**2/_**2+L6*(u**2+f**2)/b**2)**(P6/2);return(w/(1+R6*w))**$6}var Po={deltaE76:k3,deltaECMC:E3,deltaE2000:Yu,deltaEJz:A3,deltaEITP:T3,deltaEOK:Il,deltaEOK2:L3,deltaEHCT:Z3,deltaEHelmlab:D6};function B6(e){return Math.max(parseFloat(`1e${(e?Math.floor(Math.log10(Math.abs(e))):0)-2}`),1e-6)}var Y0={hct:{method:"hct.c",jnd:2,deltaEMethod:"hct",blackWhiteClamp:{}},"hct-tonal":{method:"hct.c",jnd:0,deltaEMethod:"hct",blackWhiteClamp:{channel:"hct.t",min:0,max:100}}};function cn(e,{method:t=hr.gamut_mapping,space:n=void 0,deltaEMethod:o="",jnd:a=2,blackWhiteClamp:s=void 0}={}){if(e=Le(e),xo(arguments[1])?n=arguments[1]:n||(n=e.space),n=we.get(n),Co(e,n,{epsilon:0}))return e;let c;if(t==="css")c=z6(e,{space:n});else if(t==="raytrace")c=H6(e,{space:n});else{if(t!=="clip"){Object.prototype.hasOwnProperty.call(Y0,t)&&({method:t,jnd:a,deltaEMethod:o,blackWhiteClamp:s}=Y0[t]);let l=Yu;if(o!==""){for(let u in Po)if("deltae"+o.toLowerCase()===u.toLowerCase()){l=Po[u];break}}a===0&&(a=1e-16);let h=cn(Ue(e,n),{method:"clip",space:n});if(l(e,h)>a){if(s&&Object.keys(s).length===3){let E=we.resolveCoord(s.channel),S=pr(Ue(e,E.space),E.id);if(He(S)&&(S=0),S>=s.max)return Ue({space:"xyz-d65",coords:qt.D65},e.space);if(S<=s.min)return Ue({space:"xyz-d65",coords:[0,0,0]},e.space)}let u=we.resolveCoord(t),f=u.space,p=u.id,_=Ue(e,f);_.coords.forEach((E,S)=>{He(E)&&(_.coords[S]=0)});let g=(u.range||u.refRange)[0],b=B6(a),w=g,v=pr(_,p);for(;v-w>b;){let E=Oo(_);E=cn(E,{space:n,method:"clip"}),l(_,E)-a<b?w=pr(_,p):v=pr(_,p),ln(_,p,(w+v)/2)}c=Ue(_,n)}else c=h}else c=Ue(e,n);if(t==="clip"||!Co(c,n,{epsilon:0})){let l=Object.values(n.coords).map(h=>h.range||[]);c.coords=c.coords.map((h,u)=>{let[f,p]=l[u];return f!==void 0&&(h=Math.max(f,h)),p!==void 0&&(h=Math.min(h,p)),h})}}return n!==e.space&&(c=Ue(c,e.space)),e.coords=c.coords,e}cn.returns="color";var Ta={WHITE:{space:Cr,coords:[1,0,0],alpha:1},BLACK:{space:Cr,coords:[0,0,0],alpha:1}};function z6(e,{space:t}={}){if(e=Le(e),t||(t=e.space),t=we.get(t),t.isUnbounded)return Ue(e,t);const a=Ue(e,An);let s=a.coords[0];if(s>=1){const g=Ue(Ta.WHITE,t);return g.alpha=e.alpha,Ue(g,t)}if(s<=0){const g=Ue(Ta.BLACK,t);return g.alpha=e.alpha,Ue(g,t)}if(Co(a,t,{epsilon:0}))return Ue(a,t);function c(g){const b=Ue(g,t),w=Object.values(t.coords);return b.coords=b.coords.map((v,E)=>{if("range"in w[E]){const[S,C]=w[E].range;return Gr(S,v,C)}return v}),b}let l=0,h=a.coords[1],u=!0,f=Oo(a),p=c(f),_=Il(p,f);if(_<.02)return p;for(;h-l>1e-4;){const g=(l+h)/2;if(f.coords[1]=g,u&&Co(f,t,{epsilon:0}))l=g;else if(p=c(f),_=Il(p,f),_<.02){if(.02-_<1e-4)break;u=!1,l=g}else h=g}return p}function N6(e,t,n=[0,0,0],o=[1,1,1]){let a=1/0,s=-1/0,c=[];for(let l=0;l<3;l++){const h=e[l],u=t[l]-h,f=n[l],p=o[l];if(c.push(u),Math.abs(u)>1e-12){const _=1/u,g=(f-h)*_,b=(p-h)*_;s=Math.max(Math.min(g,b),s),a=Math.min(Math.max(g,b),a)}else if(h<f||h>p)return[]}return s>a||a<0?[]:(s<0&&(s=a),isFinite(s)?[e[0]+c[0]*s,e[1]+c[1]*s,e[2]+c[2]*s]:[])}function H6(e,{space:t}={}){if(e=Le(e),t||(t=e.space),t=we.get(t),t.isUnbounded)return Ue(e,t);let n=Ue(e,An),[o,a,s]=n.coords;if(o>=1){const w=Ue(Ta.WHITE,t);return w.alpha=e.alpha,Ue(w,t)}else if(o<=0){const w=Ue(Ta.BLACK,t);return w.alpha=e.alpha,Ue(w,t)}const c=t,l=t.rgbGamut;if(l!==void 0&&(t=l),!no(t,It))throw Error("An RGB gamut is required");let[h,u]=Object.values(t.coords)[0].range,f=[u,u,u];const p=t.linearGamut;p!==void 0&&(u=Ue({space:t,coords:f,alpha:e.alpha},p).coords[0],f=[u,u,u],t=p,h=Object.values(t.coords)[0].range[0]);let _=[h,h,h],g=Ue(n,t);if(!g.coords.every(w=>h<=w&&w<=u)){let w=Ue({space:An,coords:[o,0,s]},t).coords;const v=h+1e-12,E=u-1e-12;let S=g.coords;for(let C=0;C<4;C++){if(C){const $=Ue(g,An);$.coords[0]=o,$.coords[2]=s,g=Ue($,t)}const T=N6(w,g.coords,_,f);if(T.length===0){g.coords=[...S];break}C&&g.coords.every($=>v<$&&$<E)&&(w=[...g.coords]),S=T,g.coords=[...T]}}g=Ue(g,c);const b=Object.values(c.coords);return g.coords=g.coords.map((w,v)=>{if("range"in b[v]){const[E,S]=b[v].range;return Gr(E,w,S)}return w}),g}var Ro=class extends we{constructor(e){let t=we.get(e.base),n=e.chroma??"c",o=Object.keys(t.coords),a=o.indexOf(n);if(a===-1)throw new TypeError(`GamutRelativeColorSpace needs a "${n}" coordinate, got ${t.id}`);let s=Object.fromEntries(Object.entries(t.coords).map(([l,h])=>[l,{...h}]));s[n].range=[0,1],delete s[n].refRange,e.coords??=s,e.formats??={color:{coords:o.map(l=>{if(t.coords[l].type==="angle")return"<number> | <angle>";let[h,u]=t.coords[l].range??t.coords[l].refRange??[];return l===n||h===0&&u===1?"<percentage> | <number>":"<number> | <percentage>"})}},super(e),this.chromaIndex=a,this.method=`${t.id}.${n}`;let c=[[0,0,1],[0,1,0],[0,1,1],[1,0,0],[1,0,1],[1,1,0]];this.oogChroma=1.01*Math.max(...c.map(l=>t.from(this.gamutSpace,l)[this.chromaIndex]||0))}maxChroma(e){let t=[...e];return t[this.chromaIndex]=this.oogChroma,cn({space:this.base,coords:t},{space:this.gamutSpace,method:this.method,deltaEMethod:"OK",jnd:0}).coords[this.chromaIndex]}toBase(e){return e=[...e],e.some((t,n)=>n!==this.chromaIndex&&He(t))?e[this.chromaIndex]!==0&&(e[this.chromaIndex]=null):He(e[this.chromaIndex])||(e[this.chromaIndex]*=this.maxChroma(e)),e}fromBase(e){if(e=[...e],e.some((t,n)=>n!==this.chromaIndex&&He(t)))e[this.chromaIndex]!==0&&(e[this.chromaIndex]=null);else if(!He(e[this.chromaIndex])){let t=this.maxChroma(e);e[this.chromaIndex]=t?e[this.chromaIndex]/t:0}return e}};function X0(e,t={}){if(Array.isArray(e))return e.map(h=>X0(h,t));let{cssProperty:n="background-color",element:o,...a}=t,s=null;try{return Le(e,a)}catch(h){s=h}let{CSS:c,getComputedStyle:l}=globalThis;if(xo(e)&&o&&c&&l&&c.supports(n,e)){let h=o.style[n];e!==h&&(o.style[n]=e);let u=l(o).getPropertyValue(n);if(e!==h&&(o.style[n]=h),u!==e)try{return Le(u,a)}catch(f){s=f}else s={message:"Color value is a valid CSS color, but it could not be resolved :("}}return t.errorMeta&&(t.errorMeta.error=s),null}function $o(e,t={}){let{precision:n=hr.precision,format:o,inGamut:a=!0,coords:s,alpha:c,commas:l}=t,h,u=Le(e),f=o,p=u.parseMeta;p&&!o&&(p.format.canSerialize()&&(o=p.format,f=p.formatId),s??=p.types,c??=p.alphaType,l??=p.commas),f&&(o=u.space.getFormat(o)??we.findFormat(f)),o||(o=u.space.getFormat("default")??we.DEFAULT_FORMAT,f=o.name),o&&o.space&&o.space!==u.space&&(u=Ue(u,o.space));let _=u.coords.slice();if(a||=o.toGamut,a&&!Co(u)&&(_=cn(Oo(u),a===!0?void 0:a).coords),o.type==="custom")if(o.serialize)h=o.serialize(_,u.alpha,t);else throw new TypeError(`format ${f} can only be used to parse colors, not for serialization`);else{let g=o.name||"color",b=o.serializeCoords(_,n,s);if(g==="color"){let C=o.id||o.ids?.[0]||u.space.cssId||u.space.id;b.unshift(C)}let w=u.alpha;c!==void 0&&typeof c!="object"&&(c=typeof c=="string"?{type:c}:{include:c});let v=c?.type??"<number>",E=c?.include===!0||o.alpha===!0||c?.include!==!1&&o.alpha!==!1&&w<1,S="";if(l??=o.commas,E){if(n!==null){let C;v==="<percentage>"&&(C="%",w*=100),w=bl(w,{precision:n,unit:C})}S=`${l?",":" /"} ${w}`}h=`${g}(${b.join(l?", ":" ")}${S})`}return h}var J0={toXYZ:[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],fromXYZ:[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]]},Ai=new It({id:"rec2020-linear",cssId:"--rec2020-linear",name:"Linear REC.2020",white:"D65",M:J0}),Do=new It({id:"rec2020",name:"REC.2020",base:Ai,linearGamut:Ai,toBase(e){return e.map(function(t){let n=t<0?-1:1,o=t*n;return n*Math.pow(o,2.4)})},fromBase(e){return e.map(function(t){let n=t<0?-1:1,o=t*n;return n*Math.pow(o,1/2.4)})}}),F6={toXYZ:[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],fromXYZ:[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]]},Wl=new It({id:"p3-linear",cssId:"display-p3-linear",name:"Linear P3",white:"D65",M:F6}),Ul={toXYZ:[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],fromXYZ:[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]]},Vl=new It({id:"srgb-linear",name:"Linear sRGB",white:"D65",M:Ul}),Q0={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]},eh=Array(3).fill("<percentage> | <number>[0, 255]"),th=Array(3).fill("<number>[0, 255]"),mr=new It({id:"srgb",name:"sRGB",base:Vl,linearGamut:Vl,fromBase:e=>e.map(t=>{let n=t<0?-1:1,o=t*n;return o>.0031308?n*(1.055*o**(1/2.4)-.055):12.92*t}),toBase:e=>e.map(t=>{let n=t<0?-1:1,o=t*n;return o<=.04045?t/12.92:n*((o+.055)/1.055)**2.4}),formats:{rgb:{coords:eh},rgb_number:{name:"rgb",commas:!0,coords:th,alpha:!1},color:{},rgba:{coords:eh,commas:!0,alpha:!0},rgba_number:{name:"rgba",commas:!0,coords:th},hex:{type:"custom",toGamut:!0,test:e=>/^#(([a-f0-9]{2}){3,4}|[a-f0-9]{3,4})$/i.test(e),parse(e){e.length<=5&&(e=e.replace(/[a-f0-9]/gi,"$&$&"));let t=[];return e.replace(/[a-f0-9]{2}/gi,n=>{t.push(parseInt(n,16)/255)}),{spaceId:"srgb",coords:t.slice(0,3),alpha:t.slice(3)[0]}},serialize:(e,t,{collapse:n=!0,alpha:o}={})=>{(o!==!1&&t<1||o===!0)&&e.push(t),e=e.map(s=>Math.round(s*255));let a=n&&e.every(s=>s%17===0);return"#"+e.map(s=>a?(s/17).toString(16):s.toString(16).padStart(2,"0")).join("")}},keyword:{type:"custom",test:e=>/^[a-z]+$/i.test(e),parse(e){e=e.toLowerCase();let t={spaceId:"srgb",coords:null,alpha:1};if(e==="transparent"?(t.coords=Q0.black,t.alpha=0):t.coords=Q0[e],t.coords)return t}}}}),Bo=new It({id:"p3",cssId:"display-p3",name:"P3",base:Wl,linearGamut:Wl,fromBase:mr.fromBase,toBase:mr.toBase});hr.display_space=mr;var G6;if(typeof CSS<"u"&&CSS.supports)for(let e of[fr,Do,Bo]){let t={space:e,coords:e.getMinCoords(),alpha:1},n=$o(t);if(CSS.supports("color",n)){hr.display_space=e;break}}function W6(e,{space:t,supports:n=globalThis.CSS?.supports,...o}={}){e=Le(e);let a=$o(e,o);if(!n||n("color",a)||!hr.display_space)a=new String(a),a.color=e;else{let s=e;if((e.coords.some(He)||He(e.alpha))&&!(G6??=n("color","hsl(none 50% 50%)"))&&(s=Oo(e),s.coords=s.coords.map(xt),s.alpha=xt(s.alpha),a=$o(s,o),n("color",a)))return a=new String(a),a.color=s,a;if(t===void 0){t=s.space;let c=t.displaySpaces??t.bases;!t.displaySpaces&&!t.id.startsWith("xyz-")&&(c=c.filter(l=>!l.id.startsWith("xyz-")));for(let l of c){let h=Ue(s,l),u=$o(h,o);if(n("color",u))return a=new String(u),a.color=h,a}t=hr.display_space}s=Ue(s,t),a=new String($o(s,o)),a.color=s}return a}function U6(e,t,{space:n,hue:o="shorter"}={}){e=Le(e),n||=e.space,n=we.get(n);let a=Object.values(n.coords);[e,t]=[e,t].map(u=>Ue(u,n));let[s,c]=[e,t].map(u=>u.coords),l=s.map((u,f)=>{let p=a[f],_=c[f];return p.type==="angle"&&([u,_]=Zu(o,[u,_])),rh(u,_)}),h=rh(e.alpha,t.alpha);return{space:n,coords:l,alpha:h}}function rh(e,t){return He(e)||He(t)?e===t?null:0:e-t}function V6(e,t){return e=Le(e),t=Le(t),e.space===t.space&&e.alpha===t.alpha&&e.coords.every((n,o)=>n===t.coords[o])}var Z6=on({getLuminance:()=>xn,register:()=>j6,setLuminance:()=>nh});function xn(e){return pr(e,[Tt,"y"])}function nh(e,t){ln(e,[Tt,"y"],t)}function j6(e){Object.defineProperty(e.prototype,"luminance",{get(){return xn(this)},set(t){nh(this,t)}})}function q6(e,t){e=Le(e),t=Le(t);let n=Math.max(xn(e),0),o=Math.max(xn(t),0);return o>n&&([n,o]=[o,n]),(n+.05)/(o+.05)}var K6=.56,Y6=.57,X6=.62,J6=.65,oh=.022,Q6=1.414,eb=.1,tb=5e-4,rb=1.14,ih=.027,nb=1.14;function ah(e){return e>=oh?e:e+(oh-e)**Q6}function zo(e){return(e<0?-1:1)*Math.pow(Math.abs(e),2.4)}function ob(e,t){t=Le(t),e=Le(e);let n,o,a,s,c,l;t=Ue(t,"srgb"),[s,c,l]=t.coords.map(g=>He(g)?0:g);let h=zo(s)*.2126729+zo(c)*.7151522+zo(l)*.072175;e=Ue(e,"srgb"),[s,c,l]=e.coords.map(g=>He(g)?0:g);let u=zo(s)*.2126729+zo(c)*.7151522+zo(l)*.072175,f=ah(h),p=ah(u),_=p>f;return Math.abs(p-f)<tb?o=0:_?(n=p**K6-f**Y6,o=n*rb):(n=p**J6-f**X6,o=n*nb),Math.abs(o)<eb?a=0:o>0?a=o-ih:a=o+ih,a*100}function ib(e,t){e=Le(e),t=Le(t);let n=Math.max(xn(e),0),o=Math.max(xn(t),0);o>n&&([n,o]=[o,n]);let a=n+o;return a===0?0:(n-o)/a}var ab=5e4;function sb(e,t){e=Le(e),t=Le(t);let n=Math.max(xn(e),0),o=Math.max(xn(t),0);return o>n&&([n,o]=[o,n]),o===0?ab:(n-o)/o}function lb(e,t){e=Le(e),t=Le(t);let n=pr(e,[fr,"l"]),o=pr(t,[fr,"l"]);return Math.abs(n-o)}var cb=216/24389,sh=24/116,La=24389/27,Zl=qt.D65,jl=new we({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:Zl,base:Tt,fromBase(e){let t=e.map((n,o)=>n/Zl[o]).map(n=>n>cb?Math.cbrt(n):(La*n+16)/116);return[116*t[1]-16,500*(t[0]-t[1]),200*(t[1]-t[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>sh?Math.pow(t[0],3):(116*t[0]-16)/La,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/La,t[2]>sh?Math.pow(t[2],3):(116*t[2]-16)/La].map((n,o)=>n*Zl[o])},formats:{"lab-d65":{coords:["<number> | <percentage>","<number> | <percentage>","<number> | <percentage>"]}}}),ql=Math.pow(5,.5)*.5+.5;function db(e,t){e=Le(e),t=Le(t);let n=pr(e,[jl,"l"]),o=pr(t,[jl,"l"]),a=Math.abs(Math.pow(n,ql)-Math.pow(o,ql)),s=Math.pow(a,1/ql)*Math.SQRT2-40;return s<7.5?0:s}var Pa=on({contrastAPCA:()=>ob,contrastDeltaPhi:()=>db,contrastLstar:()=>lb,contrastMichelson:()=>ib,contrastWCAG21:()=>q6,contrastWeber:()=>sb});function ub(e,t,n){xo(n)&&(n={algorithm:n});let{algorithm:o,...a}=n||{};if(!o){let s=Object.keys(Pa).map(c=>c.replace(/^contrast/,"")).join(", ");throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${s}`)}e=Le(e),t=Le(t);for(let s in Pa)if("contrast"+o.toLowerCase()===s.toLowerCase())return Pa[s](e,t,a);throw new TypeError(`Unknown contrast algorithm: ${o}`)}var hb=on({register:()=>fb,uv:()=>Ra,xy:()=>lh});function Ra(e){let[t,n,o]=yi(e,Tt),a=t+15*n+3*o;return[4*t/a,9*n/a]}function lh(e){let[t,n,o]=yi(e,Tt),a=t+n+o;return[t/a,n/a]}function fb(e){Object.defineProperty(e.prototype,"uv",{get(){return Ra(this)}}),Object.defineProperty(e.prototype,"xy",{get(){return lh(this)}})}function xi(e,t,n={}){xo(n)&&(n={method:n});let{method:o=hr.deltaE,...a}=n;for(let s in Po)if("deltae"+o.toLowerCase()===s.toLowerCase())return Po[s](e,t,a);throw new TypeError(`Unknown deltaE method: ${o}`)}var pb=on({darken:()=>dh,lighten:()=>ch});function ch(e,t=.25){let n=[we.get("oklch","lch"),"l"];return ln(e,n,o=>o*(1+t))}function dh(e,t=.25){let n=[we.get("oklch","lch"),"l"];return ln(e,n,o=>o*(1-t))}ch.returns="color",dh.returns="color";var mb=on({isRange:()=>Yl,mix:()=>uh,range:()=>Ii,register:()=>gb,steps:()=>hh});function uh(e,t,n,o={}){return[e,t]=[Le(e),Le(t)],Mn(n)==="object"&&([n,o]=[.5,n]),Ii(e,t,o)(n??.5)}function hh(e,t,n={}){let o;Yl(e)&&([o,n]=[e,t],[e,t]=o.rangeArgs.colors);let{maxDeltaE:a,deltaEMethod:s,steps:c=2,maxSteps:l=1e3,...h}=n;o||([e,t]=[Le(e),Le(t)],o=Ii(e,t,h));let u=xi(e,t,s),f=a>0?Math.max(c,Math.ceil(u/a)+1):c,p=[];if(l!==void 0&&(f=Math.min(f,l)),f===1)p=[{p:.5,color:o(.5)}];else{let _=1/(f-1);p=Array.from({length:f},(g,b)=>{let w=b*_;return{p:w,color:o(w)}})}if(a>0){let _=p.reduce((g,b,w)=>{if(w===0)return 0;let v=xi(b.color,p[w-1].color,s);return Math.max(g,v)},0);for(;_>a;){_=0;for(let g=1;g<p.length&&p.length<l;g++){let b=p[g-1],w=p[g],v=(w.p+b.p)/2,E=o(v);_=Math.max(_,xi(E,b.color,s),xi(E,w.color,s)),p.splice(g,0,{p:v,color:o(v)}),g++}}}return p=p.map(_=>_.color),p}function Ii(e,t,n={}){if(Yl(e)){let[f,p]=[e,t];return Ii(...f.rangeArgs.colors,{...f.rangeArgs.options,...p})}let{space:o,outputSpace:a,progression:s,premultiplied:c}=n;e=Le(e),t=Le(t),e=Oo(e),t=Oo(t);let l={colors:[e,t],options:n};o?o=we.get(o):o=we.registry[hr.interpolationSpace]||e.space,a=a?we.get(a):o,e=Ue(e,o),t=Ue(t,o),e=cn(e),t=cn(t);let h=o.hueId,u=o.hueIndex;if(h){let f=n.hue=n.hue||"shorter",p=[o,h],[_,g]=[pr(e,p),pr(t,p)];He(_)&&!He(g)?_=g:He(g)&&!He(_)&&(g=_),[_,g]=Zu(f,[_,g]),ln(e,p,_),ln(t,p,g)}return He(e.alpha)&&!He(t.alpha)?e.alpha=t.alpha:He(t.alpha)&&!He(e.alpha)&&(t.alpha=e.alpha),c&&(e.coords=Kl(e.coords,e.alpha,u),t.coords=Kl(t.coords,t.alpha,u)),Object.assign(f=>{f=s?s(f):f;let p=e.coords.map((b,w)=>{let v=t.coords[w];return wi(b,v,f)}),_=wi(e.alpha,t.alpha,f),g={space:o,coords:p,alpha:_};return c&&(g.coords=Kl(g.coords,_,u,!0)),a!==o&&(g=Ue(g,a)),g},{rangeArgs:l})}function Kl(e,t,n,o=!1){return He(t)||o&&t===0?e:e.map((a,s)=>s===n||He(a)?a:o?a/t:a*t)}function Yl(e){return Mn(e)==="function"&&!!e.rangeArgs}hr.interpolationSpace="lab";function gb(e){e.defineFunction("mix",uh,{returns:"color"}),e.defineFunction("range",Ii,{returns:"function<color>"}),e.defineFunction("steps",hh,{returns:"array<color>"})}var Wr=new we({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:mr,rgbGamut:mr,fromBase:e=>{let t=Math.max(...e),n=Math.min(...e),[o,a,s]=e,[c,l,h]=[null,0,(n+t)/2],u=t-n;if(u!==0){switch(l=h===0||h===1?0:(t-h)/Math.min(h,1-h),t){case o:c=(a-s)/u+(a<s?6:0);break;case a:c=(s-o)/u+2;break;case s:c=(o-a)/u+4}c=c*60}return l<0&&(c+=180,l=Math.abs(l)),c>=360&&(c-=360),[c,l*100,h*100]},toBase:e=>{let[t,n,o]=e;t=t%360,t<0&&(t+=360),n/=100,o/=100;function a(s){let c=(s+t/30)%12,l=n*Math.min(o,1-o);return o-l*Math.max(-1,Math.min(c-3,9-c,1))}return[a(0),a(8),a(4)]},formats:{hsl:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]},hsla:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"],commas:!0,alpha:!0}}}),vb=new we({id:"hsl-p3",cssId:"--hsl-p3",name:"HSL P3",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:Bo,rgbGamut:Bo,fromBase:Wr.fromBase,toBase:Wr.toBase}),bb=new we({id:"hsl-rec2020",cssId:"--hsl-rec2020",name:"HSL Rec.2020",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:Do,rgbGamut:Do,fromBase:Wr.fromBase,toBase:Wr.toBase}),fh=new we({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:mr,rgbGamut:mr,fromBase(e){let t=Math.max(...e),n=Math.min(...e),[o,a,s]=e,[c,l,h]=[null,0,t],u=t-n;if(u!==0){switch(t){case o:c=(a-s)/u+(a<s?6:0);break;case a:c=(s-o)/u+2;break;case s:c=(o-a)/u+4}c=c*60}return h&&(l=u/h),c>=360&&(c-=360),[c,l*100,h*100]},toBase(e){let[t,n,o]=e;t=t%360,t<0&&(t+=360),n/=100,o/=100;function a(s){let c=(s+t/60)%6;return o-o*n*Math.max(0,Math.min(c,4-c,1))}return[a(5),a(3),a(1)]},formats:{color:{id:"--hsv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),wb=new we({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:fh,rgbGamut:mr,fromBase(e){let[t,n,o]=e;return[t,o*(100-n)/100,100-o]},toBase(e){let[t,n,o]=e;n/=100,o/=100;let a=n+o;if(a>=1)return[t,0,n/a*100];let s=1-o;return[t,(s===0?0:1-n/s)*100,s*100]},formats:{hwb:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),_b={toXYZ:[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],fromXYZ:[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]]},Xl=new It({id:"a98rgb-linear",cssId:"--a98-rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",M:_b}),yb=new It({id:"a98rgb",cssId:"a98-rgb",name:"Adobe® 98 RGB compatible",base:Xl,linearGamut:Xl,toBase:e=>e.map(t=>Math.pow(Math.abs(t),563/256)*Math.sign(t)),fromBase:e=>e.map(t=>Math.pow(Math.abs(t),256/563)*Math.sign(t))}),kb={toXYZ:[[.7977666449006423,.13518129740053308,.0313477341283922],[.2880748288194013,.711835234241873,8993693872564e-17],[0,0,.8251046025104602]],fromXYZ:[[1.3457868816471583,-.25557208737979464,-.05110186497554526],[-.5446307051249019,1.5082477428451468,.02052744743642139],[0,0,1.2119675456389452]]},Jl=new It({id:"prophoto-linear",cssId:"--prophoto-rgb-linear",name:"Linear ProPhoto",white:"D50",base:Al,M:kb}),Eb=1/512,Mb=16/512,Sb=new It({id:"prophoto",cssId:"prophoto-rgb",name:"ProPhoto",base:Jl,linearGamut:Jl,toBase(e){return e.map(t=>{let n=t<0?-1:1,o=t*n;return o<Mb?t/16:n*o**1.8})},fromBase(e){return e.map(t=>{let n=t<0?-1:1,o=t*n;return o>=Eb?n*o**(1/1.8):16*t})}}),Ql=1.09929682680944,ph=.018053968510807,Ab=new It({id:"--rec2020-oetf",name:"REC.2020_Scene_Referred",base:Ai,linearGamut:Ai,referred:"scene",toBase(e){return e.map(function(t){let n=t<0?-1:1,o=t*n;return o<ph*4.5?t/4.5:n*Math.pow((o+Ql-1)/Ql,1/.45)})},fromBase(e){return e.map(function(t){let n=t<0?-1:1,o=t*n;return o>=ph?n*(Ql*Math.pow(o,.45)-.09929682680944008):4.5*t})}}),xb=new Ro({id:"oklch-p3",cssId:"--oklch-p3",name:"OKLCh P3",base:An,gamutSpace:Bo}),Ib=new Ro({id:"oklch-srgb",cssId:"--oklch-srgb",name:"OKLCh sRGB",base:An,gamutSpace:mr}),Cb=new Ro({id:"oklch-rec2020",cssId:"--oklch-rec2020",name:"OKLCh Rec.2020",base:An,gamutSpace:Do}),Ob=new Ro({id:"lch-p3",cssId:"--lch-p3",name:"LCH P3",base:$t,gamutSpace:Bo}),Tb=new Ro({id:"lch-srgb",cssId:"--lch-srgb",name:"LCH sRGB",base:$t,gamutSpace:mr}),Lb=new Ro({id:"lch-rec2020",cssId:"--lch-rec2020",name:"LCH Rec.2020",base:$t,gamutSpace:Do}),No=2*Math.PI,Xr={...Cr.M,toLMS:[[.4122214694707629,.5363325372617349,.0514459932675022],[.2119034958178251,.6806995506452344,.1073969535369405],[.0883024591900564,.2817188391361215,.6299787016738222]],toSRGBLinear:[[4.076741636075958,-3.307711539258063,.2309699031821043],[-1.2684379732850315,2.609757349287688,-.341319376002657],[-.0041960761386756,-.7034186179359362,1.7076146940746117]]},$a=[[[-1.8817031,-.80936501],[1.19086277,1.76576728,.59662641,.75515197,.56771245]],[[1.8144408,-1.19445267],[.73956515,-.45954404,.08285427,.12541073,-.14503204]],[[.13110758,1.81333971],[1.35733652,-.00915799,-1.1513021,-.50559606,.00692167]]],ec=Number.MAX_VALUE,Da=.206,mh=.03,Ci=1.206/1.03;function Ht(e,t){let n=e.length;if(n!==t.length)throw new Error(`Vectors of size ${n} and ${t.length} are not aligned`);let o=0;return e.forEach((a,s)=>{o+=a*t[s]}),o}function Oi(e){return .5*(Ci*e-Da+Math.sqrt((Ci*e-Da)*(Ci*e-Da)+4*mh*Ci*e))}function Ho(e){return(e**2+Da*e)/(Ci*(e+mh))}function tc(e){let[t,n]=e;return[n/t,n/(1-t)]}function Pb(e,t){return[.11516993+1/(7.4477897+4.1590124*t+e*(-2.19557347+1.75198401*t+e*(-2.13704948-10.02301043*t+e*(-4.24894561+5.38770819*t+4.69891013*e)))),.11239642+1/(1.6132032-.68124379*t+e*(.40370612+.90148123*t+e*(-.27087943+.6122399*t+e*(.00299215-.45399568*t-.14661872*e))))]}function rc(e,t){let n=Ye(e,Xr.LabtoLMS);return n[0]=n[0]**3,n[1]=n[1]**3,n[2]=n[2]**3,Ye(n,t,n)}function Ba(e,t,n,o){let a=$b(e,t,n,o),s=rc([1,a*e,a*t],n),c=ct(1/Math.max(...s),1/3);return[c,c*a]}function Rb(e,t,n,o,a,s,c,l){let h;if(l===void 0&&(l=Ba(e,t,s,c)),(n-a)*l[1]-(l[0]-a)*o<=0)h=l[1]*a/(o*l[0]+l[1]*(a-n));else{h=l[1]*(a-1)/(o*(l[0]-1)+l[1]*(a-n));let u=n-a,f=o,p=Ht(Xr.LabtoLMS[0].slice(1),[e,t]),_=Ht(Xr.LabtoLMS[1].slice(1),[e,t]),g=Ht(Xr.LabtoLMS[2].slice(1),[e,t]),b=u+f*p,w=u+f*_,v=u+f*g,E=a*(1-h)+h*n,S=h*o,C=E+S*p,T=E+S*_,$=E+S*g,K=C**3,W=T**3,ne=$**3,N=3*b*C**2,pe=3*w*T**2,ge=3*v*$**2,P=6*b**2*C,X=6*w**2*T,M=6*v**2*$,Q=Ht(s[0],[K,W,ne])-1,Ie=Ht(s[0],[N,pe,ge]),ce=Ht(s[0],[P,X,M]),Re=Ie/(Ie*Ie-.5*Q*ce),ae=-Q*Re,Ee=Ht(s[1],[K,W,ne])-1,V=Ht(s[1],[N,pe,ge]),G=Ht(s[1],[P,X,M]),ye=V/(V*V-.5*Ee*G),me=-Ee*ye,fe=Ht(s[2],[K,W,ne])-1,ot=Ht(s[2],[N,pe,ge]),ht=Ht(s[2],[P,X,M]),Ge=ot/(ot*ot-.5*fe*ht),Ze=-fe*Ge;ae=Re>=0?ae:ec,me=ye>=0?me:ec,Ze=Ge>=0?Ze:ec,h+=Math.min(ae,Math.min(me,Ze))}return h}function gh(e,t,n){let[o,a,s]=e,c=Ba(a,s,t,n),l=Rb(a,s,o,1,o,t,n,c),h=tc(c),u=l/Math.min(o*h[0],(1-o)*h[1]),f=Pb(a,s),p=o*f[0],_=(1-o)*f[1],g=.9*u*Math.sqrt(Math.sqrt(1/(1/p**4+1/_**4)));return p=o*.4,_=(1-o)*.8,[Math.sqrt(1/(1/p**2+1/_**2)),g,l]}function $b(e,t,n,o){let a,s,c,l,h,u,f,p;Ht(o[0][0],[e,t])>1?([a,s,c,l,h]=o[0][1],[u,f,p]=n[0]):Ht(o[1][0],[e,t])>1?([a,s,c,l,h]=o[1][1],[u,f,p]=n[1]):([a,s,c,l,h]=o[2][1],[u,f,p]=n[2]);let _=a+s*e+c*t+l*e**2+h*e*t,g=Ht(Xr.LabtoLMS[0].slice(1),[e,t]),b=Ht(Xr.LabtoLMS[1].slice(1),[e,t]),w=Ht(Xr.LabtoLMS[2].slice(1),[e,t]),v=1+_*g,E=1+_*b,S=1+_*w,C=v**3,T=E**3,$=S**3,K=3*g*v**2,W=3*b*E**2,ne=3*w*S**2,N=6*g**2*v,pe=6*b**2*E,ge=6*w**2*S,P=u*C+f*T+p*$,X=u*K+f*W+p*ne,M=u*N+f*pe+p*ge;return _=_-P*X/(X**2-.5*P*M),_}function Db(e,t,n){let[o,a,s]=e,c=Ho(s),l=null,h=null;if(o=Ir(o)/360,c!==0&&c!==1&&a!==0){let u=Math.cos(No*o),f=Math.sin(No*o),[p,_,g]=gh([c,u,f],t,n),b=.8,w=1.25,v,E,S,C;a<b?(v=w*a,E=0,S=b*p,C=1-S/_):(v=5*(a-.8),E=_,S=.2*_**2*1.25**2/p,C=1-S/(g-_));let T=E+v*S/(1-C*v);l=T*u,h=T*f}return[c,l,h]}function Bb(e,t,n){let o=1e-7,a=1e-4,s=e[0],c=0,l=Oi(s),h=Math.sqrt(e[1]**2+e[2]**2),u=.5+Math.atan2(-e[2],-e[1])/No;if(l!==0&&l!==1&&h!==0){let[p,_,g]=gh([s,e[1]/h,e[2]/h],t,n),b=.8,w=1.25,v,E,S,C;h<_?(E=b*p,S=1-E/_,C=h/(E+S*h),c=C*b):(v=_,E=.2*_**2*w**2/p,S=1-E/(g-_),C=(h-v)/(E+S*(h-v)),c=b+.2*C)}const f=Math.abs(c)<a;return f||l===0||Math.abs(1-l)<o?(u=null,f||(c=0)):u=Ir(u*360),[u,c,l]}var za=new we({id:"okhsl",name:"Okhsl",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,1],name:"Saturation"},l:{range:[0,1],name:"Lightness"}},base:Cr,gamutSpace:"self",M:Xr,fromBase(e){return Bb(e,Xr.toSRGBLinear,$a)},toBase(e){return Db(e,Xr.toSRGBLinear,$a)},formats:{color:{id:"--okhsl",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});za.rgbGamut=new It({id:"okhsl-prism",cssId:"--okhsl-prism",name:"Okhsl Prism",base:za,fromBase(e){return Wr.toBase([e[0],e[1]*100,e[2]*100])},toBase(e){const t=Wr.fromBase(e);return t[1]/=100,t[2]/=100,t}});var vh=new we({id:"oklrab",name:"Oklrab",coords:{l:{refRange:[0,1],name:"Lightness"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:Cr,fromBase(e){return[Oi(e[0]),e[1],e[2]]},toBase(e){return[Ho(e[0]),e[1],e[2]]},formats:{color:{coords:["<percentage> | <number>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}}),zb=new we({id:"oklrch",name:"Oklrch",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:vh,fromBase:$t.fromBase,toBase:$t.toBase,formats:{color:{coords:["<percentage> | <number>","<number> | <percentage>[0,1]","<number> | <angle>"]}}}),nc={toSRGBLinear:za.M.toSRGBLinear};function Nb(e,t,n){let[o,a,s]=e;o=Ir(o)/360;let c=Ho(s),l=null,h=null;if(c!==0&&a!==0){let u=Math.cos(No*o),f=Math.sin(No*o),p=Ba(u,f,t,n),[_,g]=tc(p),b=.5,w=1-b/_,v=1-a*b/(b+g-g*w*a),E=a*g*b/(b+g-g*w*a);c=s*v;let S=s*E,C=Ho(v),T=E*C/v,$=Ho(c);S=S*$/c,c=$;let[K,W,ne]=rc([C,u*T,f*T],t),N=ct(1/Math.max(Math.max(K,W),Math.max(ne,0)),1/3);c=c*N,S=S*N,l=S*u,h=S*f}return[c,l,h]}function Hb(e,t,n){let o=1e-4,a=e[0],s=0,c=Oi(a),l=Math.sqrt(e[1]**2+e[2]**2),h=.5+Math.atan2(-e[2],-e[1])/No;if(a!==0&&a!==1&&l!==0){let u=e[1]/l,f=e[2]/l,p=Ba(u,f,t,n),[_,g]=tc(p),b=.5,w=1-b/_,v=g/(l+a*g),E=v*a,S=v*l,C=Ho(E),T=S*C/E,[$,K,W]=rc([C,u*T,f*T],t),ne=ct(1/Math.max(Math.max($,K),Math.max(W,0)),1/3);a=a/ne,l=l/ne,l=l*Oi(a)/a,a=Oi(a),c=a/E,s=(b+g)*S/(g*b+g*w*S)}return Math.abs(s)<o||c===0?h=null:h=Ir(h*360),[h,s,c]}var oc=new we({id:"okhsv",name:"Okhsv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,1],name:"Saturation"},v:{range:[0,1],name:"Value"}},base:Cr,gamutSpace:"self",M:nc,fromBase(e){return Hb(e,nc.toSRGBLinear,$a)},toBase(e){return Nb(e,nc.toSRGBLinear,$a)},formats:{color:{id:"--okhsv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});oc.rgbGamut=new It({id:"okhsv-prism",cssId:"--okhsv-prism",name:"Okhsv Prism",base:oc,fromBase(e){return Wr.toBase([e[0],e[1]*100,e[2]*100])},toBase(e){const t=Wr.fromBase(e);return t[1]/=100,t[2]/=100,t}});var bh=qt.D65,Fb=216/24389,wh=24389/27,[_h,yh]=Ra({space:Tt,coords:bh}),kh=new we({id:"luv",name:"Luv",coords:{l:{refRange:[0,100],name:"Lightness"},u:{refRange:[-215,215]},v:{refRange:[-215,215]}},white:bh,base:Tt,fromBase(e){let t=[xt(e[0]),xt(e[1]),xt(e[2])],n=t[1],[o,a]=Ra({space:Tt,coords:t});if(!Number.isFinite(o)||!Number.isFinite(a))return[0,0,0];let s=n<=Fb?wh*n:116*Math.cbrt(n)-16;return[s,13*s*(o-_h),13*s*(a-yh)]},toBase(e){let[t,n,o]=e;if(t===0||He(t))return[0,0,0];n=xt(n),o=xt(o);let a=n/(13*t)+_h,s=o/(13*t)+yh,c=t<=8?t/wh:Math.pow((t+16)/116,3);return[c*(9*a/(4*s)),c,c*((12-3*a-20*s)/(4*s))]},formats:{color:{id:"--luv",coords:["<number> | <percentage>","<number> | <percentage>","<number> | <percentage>"]}}}),ic=new we({id:"lchuv",name:"LChuv",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,220],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:kh,fromBase:$t.fromBase,toBase:$t.toBase,formats:{color:{id:"--lchuv",coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}}),Gb=216/24389,Wb=24389/27,dn=Ul.fromXYZ,Eh=dn[0][0],Mh=dn[0][1],ac=dn[0][2],Sh=dn[1][0],Ah=dn[1][1],sc=dn[1][2],xh=dn[2][0],Ih=dn[2][1],lc=dn[2][2];function Fo(e,t,n){const o=t/(Math.sin(n)-e*Math.cos(n));return o<0?1/0:o}function Na(e){const t=Math.pow(e+16,3)/1560896,n=t>Gb?t:e/Wb,o=n*(284517*Eh-94839*ac),a=n*(838422*ac+769860*Mh+731718*Eh),s=n*(632260*ac-126452*Mh),c=n*(284517*Sh-94839*sc),l=n*(838422*sc+769860*Ah+731718*Sh),h=n*(632260*sc-126452*Ah),u=n*(284517*xh-94839*lc),f=n*(838422*lc+769860*Ih+731718*xh),p=n*(632260*lc-126452*Ih);return{r0s:o/s,r0i:a*e/s,r1s:o/(s+126452),r1i:(a-769860)*e/(s+126452),g0s:c/h,g0i:l*e/h,g1s:c/(h+126452),g1i:(l-769860)*e/(h+126452),b0s:u/p,b0i:f*e/p,b1s:u/(p+126452),b1i:(f-769860)*e/(p+126452)}}function Ch(e,t){const n=t/360*Math.PI*2,o=Fo(e.r0s,e.r0i,n),a=Fo(e.r1s,e.r1i,n),s=Fo(e.g0s,e.g0i,n),c=Fo(e.g1s,e.g1i,n),l=Fo(e.b0s,e.b0i,n),h=Fo(e.b1s,e.b1i,n);return Math.min(o,a,s,c,l,h)}var Ub=new we({id:"hsluv",name:"HSLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:ic,gamutSpace:mr,rgbGamut:mr,fromBase(e){let[t,n,o]=[xt(e[0]),xt(e[1]),xt(e[2])],a;return t>99.9999999?(a=0,t=100):t<1e-8?(a=0,t=0):a=n/Ch(Na(t),o)*100,[o,a,t]},toBase(e){let[t,n,o]=[xt(e[0]),xt(e[1]),xt(e[2])],a;return o>99.9999999?(o=100,a=0):o<1e-8?(o=0,a=0):a=Ch(Na(o),t)/100*n,[o,a,t]},formats:{color:{id:"--hsluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),un=Ul.fromXYZ;un[0][0],un[0][1],un[0][2],un[1][0],un[1][1],un[1][2],un[2][0],un[2][1],un[2][2];function Go(e,t){return Math.abs(t)/Math.sqrt(Math.pow(e,2)+1)}function Oh(e){let t=Go(e.r0s,e.r0i),n=Go(e.r1s,e.r1i),o=Go(e.g0s,e.g0i),a=Go(e.g1s,e.g1i),s=Go(e.b0s,e.b0i),c=Go(e.b1s,e.b1i);return Math.min(t,n,o,a,s,c)}var cc=new we({id:"hpluv",name:"HPLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:ic,gamutSpace:"self",fromBase(e){let[t,n,o]=[xt(e[0]),xt(e[1]),xt(e[2])],a;return t>99.9999999?(a=0,t=100):t<1e-8?(a=0,t=0):a=n/Oh(Na(t))*100,[o,a,t]},toBase(e){let[t,n,o]=[xt(e[0]),xt(e[1]),xt(e[2])],a;return o>99.9999999?(o=100,a=0):o<1e-8?(o=0,a=0):a=Oh(Na(o))/100*n,[o,a,t]},formats:{color:{id:"--hpluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});cc.rgbGamut=new It({id:"hpluv-prism",cssId:"--hpluv-prism",name:"HPLuv Prism",base:cc,fromBase(e){return Wr.toBase(e)},toBase(e){return Wr.fromBase(e)}});var Ha=.021,Fa=Math.sqrt(Ha/3),Vb=Fa*Fa*Fa,Th=.978,Lh=.058,Ph=264.5*Math.PI/180,dc=.7,Zb=.37,Ti={M1:[[.8154832155941288,.36033406153856506,-.12434135574228214],[.03301008352745078,.9292865057066169,.03612192716575443],[.04818827356456861,.2642841575338424,.6334971784195534]],M1_INV:[[1.2325947975032656,-.5557590239287523,.2736201534771583],[-.040801327874216024,1.112228863738653,-.07142753586443781],[-.07673825928337766,-.42172784577108585,1.5875238558143416]],M2:[[.21193779684470104,.7992121834263127,-.00410075161564345],[2.4672018828033475,-2.9877348024830788,.520532919679731],[-.11390787868068575,1.3932982808117473,-1.279390402131062]],M2_INV:[[.9930001151336143,.32599327253052285,.1294508563171392],[.9930001151336139,-.08708353111074627,-.03861361743004929],[.9930001151336136,-.12386097008215022,-.8351991365871061]]},In=[0,.05,.1,.15,.2,.25,.3,.35,.4,.45,.5,.55,.6,.65,.7,.75,.8,.85,.9,.95,1],hn=[0,.009494013522189627,.02564569838030986,.055259661658689105,.10574901531227408,.16055853320726027,.21405964892993756,.26786230508811226,.3220435246104499,.3739052098520243,.43020997780918835,.4835465162128873,.5399824670411353,.5956710081330342,.6542161666450478,.7115380216519989,.7702762412711669,.8293313467712837,.889406386197059,.9462829573474728,1],uc=In.length;function hc(e){let t=e/(2*Vb),n=2*Fa*Math.sinh(Math.asinh(t)/3),o=n*n*n+Ha*n-e,a=3*n*n+Ha,s=6*n,c=2*a*a-o*s;return Math.abs(c)>1e-30&&(n-=2*o*a/c),n}function fc(e){return e*e*e+Ha*e}function Rh(e){let t=Math.max(0,Math.min(1,(e-Zb)/.63));return Math.sin(Math.PI*t)**2}function jb(e,t,n){let o=Math.sqrt(t*t+n*n);if(o<1e-12)return[t,n];let a=Rh(e);if(a<1e-12)return[t,n];let s=Math.atan2(n,t),c=s-Ph;c=c-Math.round(c/(2*Math.PI))*2*Math.PI;let l=Math.exp(-.5*(c/dc)**2),h=s+Lh*a*l;return[o*Math.cos(h),o*Math.sin(h)]}function qb(e,t,n){let o=Math.sqrt(t*t+n*n);if(o<1e-12)return[t,n];let a=Rh(e);if(a<1e-12)return[t,n];let s=Math.atan2(n,t),c=dc*dc,l=Lh*a,h=s;for(let u=0;u<8;u++){let f=h-Ph;f=f-Math.round(f/(2*Math.PI))*2*Math.PI;let p=Math.exp(-.5*f*f/c),_=h+l*p-s,g=1+l*p*(-f/c),b=l*p*(-1/c+f*f/(c*c)),w=2*g*g-_*b;Math.abs(w)>1e-30&&(h-=2*_*g/w)}return[o*Math.cos(h),o*Math.sin(h)]}function Kb(e){if(e<=0||e>=1)return e;let t=0,n=uc-1;for(;n-t>1;){let a=t+n>>1;In[a]<=e?t=a:n=a}let o=(e-In[t])/(In[n]-In[t]);return hn[t]+o*(hn[n]-hn[t])}function Yb(e){if(e<=hn[0]||e>=hn[uc-1])return e;let t=0,n=uc-1;for(;n-t>1;){let a=t+n>>1;hn[a]<=e?t=a:n=a}let o=(e-hn[t])/(hn[n]-hn[t]);return In[t]+o*(In[n]-In[t])}var $h=new we({id:"helmgen",name:"HelmGen",cssId:"--helmgen",coords:{l:{refRange:[0,1],name:"Lightness"},a:{refRange:[-.6,.6]},b:{refRange:[-.6,.6]}},white:"D65",base:Tt,M:Ti,fromBase(e){let t=Ye(e,Ti.M1),n=hc(Math.max(t[0],0)),o=hc(Math.max(t[1],0)),a=hc(Math.max(t[2],0));{let h=(n+o+a)/3,u=(Math.max(n,o,a)-Math.min(n,o,a))/Math.max(Math.abs(h),1e-30),f=Math.exp(-((u/1e-5)**2));n+=f*(h-n),o+=f*(h-o),a+=f*(h-a)}let[s,c,l]=Ye([n,o,a],Ti.M2);{let h=Math.sqrt(c*c+l*l);if(h>1e-12){let u=Math.pow(h,Th)/h;c*=u,l*=u}}return s=Kb(s),[c,l]=jb(s,c,l),[s,c,l]},toBase(e){let[t,n,o]=e;[n,o]=qb(t,n,o),t=Yb(t);{let f=Math.sqrt(n*n+o*o);if(f>1e-12){let p=Math.pow(f,1/Th)/f;n*=p,o*=p}}let[a,s,c]=Ye([t,n,o],Ti.M2_INV);{let f=(a+s+c)/3,p=(Math.max(a,s,c)-Math.min(a,s,c))/Math.max(Math.abs(f),1e-30),_=Math.exp(-((p/1e-5)**2));a+=_*(f-a),s+=_*(f-s),c+=_*(f-c)}let l=fc(a),h=fc(s),u=fc(c);return Ye([l,h,u],Ti.M1_INV)}}),Xb=new we({id:"helmgenlch",name:"HelmGenLCh",cssId:"--helmgenlch",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.65],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:$h,fromBase:$t.fromBase,toBase:$t.toBase}),Li=new It({id:"rec2100-linear",name:"Linear REC.2100",white:"D65",M:J0}),Dh=203,Bh=2610/2**14,Jb=2**14/2610,Qb=2523/32,zh=32/2523,Nh=3424/4096,Hh=2413/128,Fh=2392/128,e9=new It({id:"rec2100pq",cssId:"rec2100-pq",name:"REC.2100-PQ",base:Li,linearGamut:Li,toBase(e){return e.map(function(t){return(Math.max(t**zh-Nh,0)/(Hh-Fh*t**zh))**Jb*1e4/Dh})},fromBase(e){return e.map(function(t){let n=Math.max(t*Dh/1e4,0);return((Nh+Hh*n**Bh)/(1+Fh*n**Bh))**Qb})}}),Gh=.17883277,Wh=.28466892,Uh=.55991073,pc=3.7743,t9=new It({id:"rec2100hlg",cssId:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:Li,linearGamut:Li,toBase(e){return e.map(function(t){return t<=.5?t**2/3*pc:(Math.exp((t-Uh)/Gh)+Wh)/12*pc})},fromBase(e){return e.map(function(t){return t/=pc,t<=1/12?ct(3*t,.5):Gh*Math.log(12*t-Wh)+Uh})}}),Vh={};Sn.add("chromatic-adaptation-start",e=>{e.options.method&&(e.M=Zh(e.W1,e.W2,e.options.method))}),Sn.add("chromatic-adaptation-end",e=>{e.M||(e.M=Zh(e.W1,e.W2,e.options.method))});function Ga({id:e,toCone_M:t,fromCone_M:n}){Vh[e]=arguments[0]}function Zh(e,t,n="Bradford"){let o=Vh[n],[a,s,c]=bi(o.toCone_M,e),[l,h,u]=bi(o.toCone_M,t),f=[[l/a,0,0],[0,h/s,0],[0,0,u/c]],p=bi(f,o.toCone_M);return bi(o.fromCone_M,p)}Ga({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599363874558397,-1.1293816185800916,.21989740959619328],[.3611914362417676,.6388124632850422,-6370596838649899e-21],[0,0,1.0890636230968613]]}),Ga({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929054667121,-.14705425642099013,.15996265166373122],[.4323052697233945,.5183602715367774,.049291228212855594],[-.00852866457517732,.04004282165408486,.96848669578755]]}),Ga({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238208355142,-.27886900021828726,.18274517938277307],[.4543690419753592,.4735331543074117,.07209780371722911],[-.009627608738429355,-.00569803121611342,1.0153256399545427]]}),Ga({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.0112546305316845,.14918677544445172],[.3875265432361372,.6214474419314753,-.008973985167612521],[-.01584149884933386,-.03412293802851557,1.0499644368778496]]}),Object.assign(qt,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]}),qt.ACES=[.32168/.33767,1,.34065/.33767];var r9={toXYZ:[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],fromXYZ:[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]]},mc=new It({id:"acescg",cssId:"--acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:qt.ACES,M:r9}),Wa=2**-16,gc=-.35828683,Ua=(Math.log2(65504)+9.72)/17.52,n9=new It({id:"acescc",cssId:"--acescc",name:"ACEScc",coords:{r:{range:[gc,Ua],name:"Red"},g:{range:[gc,Ua],name:"Green"},b:{range:[gc,Ua],name:"Blue"}},referred:"scene",base:mc,linearGamut:mc,toBase(e){const t=-.3013698630136986;return e.map(function(n){return n<=t?(2**(n*17.52-9.72)-Wa)*2:n<Ua?2**(n*17.52-9.72):65504})},fromBase(e){return e.map(function(t){return t<=0?(Math.log2(Wa)+9.72)/17.52:t<Wa?(Math.log2(Wa+t*.5)+9.72)/17.52:(Math.log2(t)+9.72)/17.52})}}),jh=on({A98RGB:()=>yb,A98RGB_Linear:()=>Xl,ACEScc:()=>n9,ACEScg:()=>mc,CAM16_JMh:()=>N3,HCT:()=>Si,HPLuv:()=>cc,HSL:()=>Wr,HSL_P3:()=>vb,HSL_REC2020:()=>bb,HSLuv:()=>Ub,HSV:()=>fh,HWB:()=>wb,HelmGen:()=>$h,HelmGenLCh:()=>Xb,Helmlab:()=>Gl,ICTCP:()=>Pl,JzCzHz:()=>Ll,Jzazbz:()=>l0,LCH:()=>$t,LCH_P3:()=>Ob,LCH_REC_2020:()=>Lb,LCH_sRGB:()=>Tb,LCHuv:()=>ic,Lab:()=>fr,Lab_D65:()=>jl,Luv:()=>kh,OKLCH:()=>An,OKLCH_P3:()=>xb,OKLCH_REC_2020:()=>Cb,OKLCH_sRGB:()=>Ib,OKLab:()=>Cr,OKLrCH:()=>zb,OKLrab:()=>vh,Okhsl:()=>za,Okhsv:()=>oc,P3:()=>Bo,P3_Linear:()=>Wl,ProPhoto:()=>Sb,ProPhoto_Linear:()=>Jl,REC_2020:()=>Do,REC_2020_Linear:()=>Ai,REC_2020_Scene_Referred:()=>Ab,REC_2100_HLG:()=>t9,REC_2100_Linear:()=>Li,REC_2100_PQ:()=>e9,XYZ_ABS_D65:()=>Ol,XYZ_D50:()=>Al,XYZ_D65:()=>Tt,sRGB:()=>mr,sRGB_Linear:()=>Vl}),gr=class lr{constructor(...t){let n;if(t.length===1){let c={};typeof t[0]=="object"&&Object.getPrototypeOf(t[0]).constructor===Object&&(t[0]={...t[0]}),n=Le(t[0],{parseMeta:c}),c.format&&(this.parseMeta=c)}let o,a,s;n?(o=n.space||n.spaceId,a=n.coords,s=n.alpha):[o,a,s]=t,Object.defineProperty(this,"space",{value:we.get(o),writable:!1,enumerable:!0,configurable:!0}),this.coords=a?a.slice():[0,0,0],this.alpha=He(s)?s:s===void 0?1:Gr(0,s,1);for(let c in this.space.coords)Object.defineProperty(this,c,{get:()=>this.get(c),set:l=>this.set(c,l)})}get spaceId(){return this.space.id}clone(){return new lr(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...t){let n=W6(this,...t);return n.color=new lr(n.color),n}static get(t,...n){return no(t,this)?t:new lr(t,...n)}static try(t,n){if(no(t,this))return t;let o=X0(t,n);return o?new lr(o):null}static defineFunction(t,n,o=n){let{instance:a=!0,returns:s}=o,c=function(...l){let h=n(...l);if(s==="color")h=lr.get(h);else if(s==="function<color>"){let u=h;h=function(...f){let p=u(...f);return lr.get(p)},Object.assign(h,u)}else s==="array<color>"&&(h=h.map(u=>lr.get(u)));return h};t in lr||(lr[t]=c),a&&(lr.prototype[t]=function(...l){return c(this,...l)})}static defineFunctions(t){for(let n in t)lr.defineFunction(n,t[n],t[n])}static extend(t){if(t.register)t.register(lr);else for(let n in t)lr.defineFunction(n,t[n])}};gr.defineFunctions({get:pr,getAll:yi,set:ln,setAll:Cl,to:Ue,equals:V6,inGamut:Co,toGamut:cn,distance:Xu,deltas:U6,toString:$o}),Object.assign(gr,{util:l3,hooks:Sn,WHITES:qt,Space:we,spaces:we.registry,parse:Wu,defaults:hr});for(let e of Object.keys(jh))we.register(jh[e]);for(let e in we.registry)vc(e,we.registry[e]);Sn.add("colorspace-init-end",e=>{vc(e.id,e),e.aliases?.forEach(t=>{vc(t,e)})});function vc(e,t){let n=e.replace(/-/g,"_");Object.defineProperty(gr.prototype,n,{get(){let o=this.getAll(e);if(typeof Proxy>"u")return o;let a=new Proxy(o,{has:(s,c)=>{try{return we.resolveCoord([t,c]),!0}catch{}return Reflect.has(s,c)},get:(s,c,l)=>{if(c&&typeof c!="symbol"&&!(c in s)&&c in a){let{index:h}=we.resolveCoord([t,c]);if(h>=0)return s[h]}return Reflect.get(s,c,l)},set:(s,c,l,h)=>{if(c&&typeof c!="symbol"&&!(c in s)||Number(c)>=0){let{index:u}=we.resolveCoord([t,c]);if(u>=0)return s[u]=l,this.setAll(e,s),!0}return Reflect.set(s,c,l,h)}});return a},set(o){this.setAll(e,o)},configurable:!0,enumerable:!0})}gr.extend(Po),gr.extend({deltaE:xi}),Object.assign(gr,{deltaEMethods:Po}),gr.extend(pb),gr.extend({contrast:ub}),gr.extend(hb),gr.extend(Z6),gr.extend(mb),gr.extend(Pa);var Or=gr,bc={navy:"#001f3f",darkblue:"#1e4f7a",blue:"#1A2F4B",darkgreen:"#062925",green:"#1A3636",grass:"#1B3C53",teal:"#044A42",darkpurple:"#1B0044",purple:"#363062",grape:"#31326F",maroon:"#44000D"},Ct={dark:{50:"#C1C2C5",100:"#A6A7AB",200:"#909296",300:"#5c5f66",400:"#373A40",500:"#2C2E33",600:"#25262b",700:"#1A1B1E",800:"#141517",900:"#101113",950:"#000000"},slate:{50:"oklch(98.4% 0.003 247.858)",100:"oklch(96.8% 0.007 247.896)",200:"oklch(92.9% 0.013 255.508)",300:"oklch(86.9% 0.022 252.894)",400:"oklch(70.4% 0.04 256.788)",500:"oklch(55.4% 0.046 257.417)",600:"oklch(44.6% 0.043 257.281)",700:"oklch(37.2% 0.044 257.287)",800:"oklch(27.9% 0.041 260.031)",900:"oklch(20.8% 0.042 265.755)",950:"oklch(12.9% 0.042 264.695)"},gray:{50:"oklch(98.5% 0.002 247.839)",100:"oklch(96.7% 0.003 264.542)",200:"oklch(92.8% 0.006 264.531)",300:"oklch(87.2% 0.01 258.338)",400:"oklch(70.7% 0.022 261.325)",500:"oklch(55.1% 0.027 264.364)",600:"oklch(44.6% 0.03 256.802)",700:"oklch(37.3% 0.034 259.733)",800:"oklch(27.8% 0.033 256.848)",900:"oklch(21% 0.034 264.665)",950:"oklch(13% 0.028 261.692)"},zinc:{50:"oklch(98.5% 0 0)",100:"oklch(96.7% 0.001 286.375)",200:"oklch(92% 0.004 286.32)",300:"oklch(87.1% 0.006 286.286)",400:"oklch(70.5% 0.015 286.067)",500:"oklch(55.2% 0.016 285.938)",600:"oklch(44.2% 0.017 285.786)",700:"oklch(37% 0.013 285.805)",800:"oklch(27.4% 0.006 286.033)",900:"oklch(21% 0.006 285.885)",950:"oklch(14.1% 0.005 285.823)"},neutral:{50:"oklch(98.5% 0 0)",100:"oklch(97% 0 0)",200:"oklch(92.2% 0 0)",300:"oklch(87% 0 0)",400:"oklch(70.8% 0 0)",500:"oklch(55.6% 0 0)",600:"oklch(43.9% 0 0)",700:"oklch(37.1% 0 0)",800:"oklch(26.9% 0 0)",900:"oklch(20.5% 0 0)",950:"oklch(14.5% 0 0)"},stone:{50:"oklch(98.5% 0.001 106.423)",100:"oklch(97% 0.001 106.424)",200:"oklch(92.3% 0.003 48.717)",300:"oklch(86.9% 0.005 56.366)",400:"oklch(70.9% 0.01 56.259)",500:"oklch(55.3% 0.013 58.071)",600:"oklch(44.4% 0.011 73.639)",700:"oklch(37.4% 0.01 67.558)",800:"oklch(26.8% 0.007 34.298)",900:"oklch(21.6% 0.006 56.043)",950:"oklch(14.7% 0.004 49.25)"},red:{50:"oklch(97.1% 0.013 17.38)",100:"oklch(93.6% 0.032 17.717)",200:"oklch(88.5% 0.062 18.334)",300:"oklch(80.8% 0.114 19.571)",400:"oklch(70.4% 0.191 22.216)",500:"oklch(63.7% 0.237 25.331)",600:"oklch(57.7% 0.245 27.325)",700:"oklch(50.5% 0.213 27.518)",800:"oklch(44.4% 0.177 26.899)",900:"oklch(39.6% 0.141 25.723)",950:"oklch(25.8% 0.092 26.042)"},orange:{50:"oklch(98% 0.016 73.684)",100:"oklch(95.4% 0.038 75.164)",200:"oklch(90.1% 0.076 70.697)",300:"oklch(83.7% 0.128 66.29)",400:"oklch(75% 0.183 55.934)",500:"oklch(70.5% 0.213 47.604)",600:"oklch(64.6% 0.222 41.116)",700:"oklch(55.3% 0.195 38.402)",800:"oklch(47% 0.157 37.304)",900:"oklch(40.8% 0.123 38.172)",950:"oklch(26.6% 0.079 36.259)"},amber:{50:"oklch(98.7% 0.022 95.277)",100:"oklch(96.2% 0.059 95.617)",200:"oklch(92.4% 0.12 95.746)",300:"oklch(87.9% 0.169 91.605)",400:"oklch(82.8% 0.189 84.429)",500:"oklch(76.9% 0.188 70.08)",600:"oklch(66.6% 0.179 58.318)",700:"oklch(55.5% 0.163 48.998)",800:"oklch(47.3% 0.137 46.201)",900:"oklch(41.4% 0.112 45.904)",950:"oklch(27.9% 0.077 45.635)"},yellow:{50:"oklch(98.7% 0.026 102.212)",100:"oklch(97.3% 0.071 103.193)",200:"oklch(94.5% 0.129 101.54)",300:"oklch(90.5% 0.182 98.111)",400:"oklch(85.2% 0.199 91.936)",500:"oklch(79.5% 0.184 86.047)",600:"oklch(68.1% 0.162 75.834)",700:"oklch(55.4% 0.135 66.442)",800:"oklch(47.6% 0.114 61.907)",900:"oklch(42.1% 0.095 57.708)",950:"oklch(28.6% 0.066 53.813)"},lime:{50:"oklch(98.6% 0.031 120.757)",100:"oklch(96.7% 0.067 122.328)",200:"oklch(93.8% 0.127 124.321)",300:"oklch(89.7% 0.196 126.665)",400:"oklch(84.1% 0.238 128.85)",500:"oklch(76.8% 0.233 130.85)",600:"oklch(64.8% 0.2 131.684)",700:"oklch(53.2% 0.157 131.589)",800:"oklch(45.3% 0.124 130.933)",900:"oklch(40.5% 0.101 131.063)",950:"oklch(27.4% 0.072 132.109)"},green:{50:"oklch(98.2% 0.018 155.826)",100:"oklch(96.2% 0.044 156.743)",200:"oklch(92.5% 0.084 155.995)",300:"oklch(87.1% 0.15 154.449)",400:"oklch(79.2% 0.209 151.711)",500:"oklch(72.3% 0.219 149.579)",600:"oklch(62.7% 0.194 149.214)",700:"oklch(52.7% 0.154 150.069)",800:"oklch(44.8% 0.119 151.328)",900:"oklch(39.3% 0.095 152.535)",950:"oklch(26.6% 0.065 152.934)"},emerald:{50:"oklch(97.9% 0.021 166.113)",100:"oklch(95% 0.052 163.051)",200:"oklch(90.5% 0.093 164.15)",300:"oklch(84.5% 0.143 164.978)",400:"oklch(76.5% 0.177 163.223)",500:"oklch(69.6% 0.17 162.48)",600:"oklch(59.6% 0.145 163.225)",700:"oklch(50.8% 0.118 165.612)",800:"oklch(43.2% 0.095 166.913)",900:"oklch(37.8% 0.077 168.94)",950:"oklch(26.2% 0.051 172.552)"},teal:{50:"oklch(98.4% 0.014 180.72)",100:"oklch(95.3% 0.051 180.801)",200:"oklch(91% 0.096 180.426)",300:"oklch(85.5% 0.138 181.071)",400:"oklch(77.7% 0.152 181.912)",500:"oklch(70.4% 0.14 182.503)",600:"oklch(60% 0.118 184.704)",700:"oklch(51.1% 0.096 186.391)",800:"oklch(43.7% 0.078 188.216)",900:"oklch(38.6% 0.063 188.416)",950:"oklch(27.7% 0.046 192.524)"},cyan:{50:"oklch(98.4% 0.019 200.873)",100:"oklch(95.6% 0.045 203.388)",200:"oklch(91.7% 0.08 205.041)",300:"oklch(86.5% 0.127 207.078)",400:"oklch(78.9% 0.154 211.53)",500:"oklch(71.5% 0.143 215.221)",600:"oklch(60.9% 0.126 221.723)",700:"oklch(52% 0.105 223.128)",800:"oklch(45% 0.085 224.283)",900:"oklch(39.8% 0.07 227.392)",950:"oklch(30.2% 0.056 229.695)"},sky:{50:"oklch(97.7% 0.013 236.62)",100:"oklch(95.1% 0.026 236.824)",200:"oklch(90.1% 0.058 230.902)",300:"oklch(82.8% 0.111 230.318)",400:"oklch(74.6% 0.16 232.661)",500:"oklch(68.5% 0.169 237.323)",600:"oklch(58.8% 0.158 241.966)",700:"oklch(50% 0.134 242.749)",800:"oklch(44.3% 0.11 240.79)",900:"oklch(39.1% 0.09 240.876)",950:"oklch(29.3% 0.066 243.157)"},blue:{50:"oklch(97% 0.014 254.604)",100:"oklch(93.2% 0.032 255.585)",200:"oklch(88.2% 0.059 254.128)",300:"oklch(80.9% 0.105 251.813)",400:"oklch(70.7% 0.165 254.624)",500:"oklch(62.3% 0.214 259.815)",600:"oklch(54.6% 0.245 262.881)",700:"oklch(48.8% 0.243 264.376)",800:"oklch(42.4% 0.199 265.638)",900:"oklch(37.9% 0.146 265.522)",950:"oklch(28.2% 0.091 267.935)"},indigo:{50:"oklch(96.2% 0.018 272.314)",100:"oklch(93% 0.034 272.788)",200:"oklch(87% 0.065 274.039)",300:"oklch(78.5% 0.115 274.713)",400:"oklch(67.3% 0.182 276.935)",500:"oklch(58.5% 0.233 277.117)",600:"oklch(51.1% 0.262 276.966)",700:"oklch(45.7% 0.24 277.023)",800:"oklch(39.8% 0.195 277.366)",900:"oklch(35.9% 0.144 278.697)",950:"oklch(25.7% 0.09 281.288)"},violet:{50:"oklch(96.9% 0.016 293.756)",100:"oklch(94.3% 0.029 294.588)",200:"oklch(89.4% 0.057 293.283)",300:"oklch(81.1% 0.111 293.571)",400:"oklch(70.2% 0.183 293.541)",500:"oklch(60.6% 0.25 292.717)",600:"oklch(54.1% 0.281 293.009)",700:"oklch(49.1% 0.27 292.581)",800:"oklch(43.2% 0.232 292.759)",900:"oklch(38% 0.189 293.745)",950:"oklch(28.3% 0.141 291.089)"},purple:{50:"oklch(97.7% 0.014 308.299)",100:"oklch(94.6% 0.033 307.174)",200:"oklch(90.2% 0.063 306.703)",300:"oklch(82.7% 0.119 306.383)",400:"oklch(71.4% 0.203 305.504)",500:"oklch(62.7% 0.265 303.9)",600:"oklch(55.8% 0.288 302.321)",700:"oklch(49.6% 0.265 301.924)",800:"oklch(43.8% 0.218 303.724)",900:"oklch(38.1% 0.176 304.987)",950:"oklch(29.1% 0.149 302.717)"},fuchsia:{50:"oklch(97.7% 0.017 320.058)",100:"oklch(95.2% 0.037 318.852)",200:"oklch(90.3% 0.076 319.62)",300:"oklch(83.3% 0.145 321.434)",400:"oklch(74% 0.238 322.16)",500:"oklch(66.7% 0.295 322.15)",600:"oklch(59.1% 0.293 322.896)",700:"oklch(51.8% 0.253 323.949)",800:"oklch(45.2% 0.211 324.591)",900:"oklch(40.1% 0.17 325.612)",950:"oklch(29.3% 0.136 325.661)"},pink:{50:"oklch(97.1% 0.014 343.198)",100:"oklch(94.8% 0.028 342.258)",200:"oklch(89.9% 0.061 343.231)",300:"oklch(82.3% 0.12 346.018)",400:"oklch(71.8% 0.202 349.761)",500:"oklch(65.6% 0.241 354.308)",600:"oklch(59.2% 0.249 0.584)",700:"oklch(52.5% 0.223 3.958)",800:"oklch(45.9% 0.187 3.815)",900:"oklch(40.8% 0.153 2.432)",950:"oklch(28.4% 0.109 3.907)"},rose:{50:"oklch(96.9% 0.015 12.422)",100:"oklch(94.1% 0.03 12.58)",200:"oklch(89.2% 0.058 10.001)",300:"oklch(81% 0.117 11.638)",400:"oklch(71.2% 0.194 13.428)",500:"oklch(64.5% 0.246 16.439)",600:"oklch(58.6% 0.253 17.585)",700:"oklch(51.4% 0.222 16.935)",800:"oklch(45.5% 0.188 13.697)",900:"oklch(41% 0.159 10.272)",950:"oklch(27.1% 0.105 12.094)"}};function o9(e){try{Or.get(e)}catch{return!0}return Or.contrast(e,"white","Lstar")>Or.contrast(e,"black","Lstar")}function Wo(e){return o9(e)?"#FFFFFF":"#000000"}var i9=xe.default.fromPairs(xe.default.entries(hl).map(([e,t])=>[e,Lu(t)])),{IconAdjustmentsHorizontal:XA,IconApiBook:JA,IconArrowsHorizontal:QA,IconArrowsLeftRight:ex,IconArrowAutofitDown:tx,IconArrowAutofitHeight:a9,IconArrowAutofitLeft:rx,IconArrowAutofitRight:nx,IconArrowAutofitWidth:s9,IconArrowBigLeft:ox,IconArrowBigRight:ix,IconArrowsMove:ax,IconArrowsMoveVertical:sx,IconArrowsVertical:lx,IconBook:cx,IconBookOff:dx,IconBookArrowLeft:ux,IconBookArrowRight:hx,IconBooksReturn:fx,IconBookUpload:px,IconBookmark:l9,IconBookmarkOff:c9,IconBookmarks:mx,IconBoxAlignTop:gx,IconCategory:d9,IconCheck:Va,IconChevronLeft:vx,IconChevronRight:bx,IconAlertCircle:wx,IconCircleCheck:_x,IconCircleX:yx,IconHelp:kx,IconInfoCircle:Ex,IconComic1:Mx,IconComic1Flat:Sx,IconComic2:Ax,IconComic2Flat:xx,IconComic3:Ix,IconComic3Flat:Cx,IconDeviceDesktop:Ox,IconDeviceFloppy:Tx,IconDeviceMobile:Lx,IconDeviceTablet:Px,IconDotsVertical:Rx,IconEReader1:$x,IconEReader1Flat:Dx,IconEReader2:Bx,IconEReader2Flat:zx,IconExternalLink:Nx,IconEye:u9,IconEyeOff:h9,IconFileDownload:Hx,IconFilePercent:Fx,IconFolderOpen:Gx,IconHandClick:Wx,IconKeyboard:Ux,IconLayoutDashboard:Vx,IconLayoutBottombar:Zx,IconLayoutBottombarInactive:jx,IconLayoutSidebar:qx,IconLayoutSidebarInactive:Kx,IconLayoutSidebarRight:Yx,IconLayoutSidebarRightInactive:Xx,IconListNumbers:Jx,IconLoader2:Qx,IconLocationCog:eI,IconMenu2:tI,IconMenuDeep:rI,IconMessage:nI,IconMoon:oI,IconPage:iI,IconPageFlat:aI,IconPalette:sI,IconPencil:lI,IconPencilCog:cI,IconPhoto:dI,IconPhotoOff:uI,IconPin:hI,IconPlayerPause:fI,IconPlayerPlay:pI,IconRefresh:f9,IconSettings:mI,IconSettingsOff:gI,IconSpacingHorizontal:p9,IconSpacingVertical:vI,IconSun:bI,IconTrash:wI,IconWorldCog:_I,IconX:wc,IconZoom:yI,IconZoomCancel:m9,IconZoomIn:g9,IconZoomInArea:kI,IconZoomOut:v9,IconZoomOutArea:EI,IconZoomPan:MI}=i9,Cn=class extends tt{constructor(...t){super(...t),this.color="#000000",this.size=26,this.radius="50%",this.contrastColor="#FFFFFF",this.checked=!1}static{this.styles=kt`
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
  `}willUpdate(t){t.has("color")&&(this.contrastColor=Wo(this.color)),t.has("selected")&&(this.checked=this.color.toLowerCase()===this.selected?.toLowerCase())}handleClick(){this.dispatchEvent(new CustomEvent("input",{detail:{value:this.color},bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("change",{detail:{value:this.color},bubbles:!0,composed:!0}))}render(){const t={width:`${this.size}px`,height:`${this.size}px`},n={"--radius":typeof this.radius=="number"?`${this.radius}px`:this.radius,"--color":this.color,"--contrast-color":this.contrastColor};return re`
      <div style=${Yr(t)}>
        <div
          class="swatch"
          style=${Yr(n)}
          @click=${this.handleClick}
        >
          <slot></slot>
          <span class="check-icon"> ${Va} </span>
        </div>
      </div>
    `}};D([q({type:String})],Cn.prototype,"color",void 0),D([q({type:String})],Cn.prototype,"selected",void 0),D([q({type:Number})],Cn.prototype,"size",void 0),D([q({type:String})],Cn.prototype,"radius",void 0),D([q({state:!0})],Cn.prototype,"contrastColor",void 0),D([q({type:Boolean,reflect:!0})],Cn.prototype,"checked",void 0),Cn=D([lt("color-swatch")],Cn);function b9(e){const[t,n,o]=e.to("oklch").coords.map(h=>h??0),a=[.95,.9,.8,.7,.6,.5,.4,.3,.2,.1,.05],s=a.map(h=>new Or("oklch",[h,n,o]).toString({format:"hex"}));let c=-1,l=1/0;for(let h=0;h<a.length;h++){const u=Math.abs(a[h]-t);u<l&&(l=u,c=h)}return c!==-1&&(s[c]=e.toString({format:"hex"})),s.map(h=>h.toUpperCase())}function w9(e){const t=e.to("hsl"),n=[.97,.9,.8,.7,.6,.5,.4,.3,.2,.1,.05],o=[];for(const a of n){const s=t.clone();s.coords[2]=a*100;const c=s.coords[1]??0;a>.8?s.coords[1]=c*.4:a>.6?s.coords[1]=c*.8:a<.3&&(s.coords[1]=Math.min(100,c*1.1)),o.push(s.toString({format:"hex"}).toUpperCase())}return o}function _9(e){const t=[],n=[95,90,80,70,60,50,40,30,20,10,5],o=e.to("hsl");for(const a of n){const s=o.clone();s.coords[2]=a,t.push(s.toString({format:"hex"}).toUpperCase())}return t}function y9(e){const t=new Array(11).fill(""),n=e.to("hsl"),o={lightest:{lightness:95,rotate:-10,saturate:-30},darkest:{lightness:10,rotate:10,saturate:10}},a=5,s=5,c=(o.lightest.lightness-50)/a,l=(50-o.darkest.lightness)/s,h=o.lightest.rotate/a,u=o.darkest.rotate/s,f=o.lightest.saturate/a,p=o.darkest.saturate/s;for(let _=1;_<=a;_++){const g=a-_,b=n.clone();b.coords[2]=(b.coords[2]??0)+c*(_-.5),b.coords[0]=(b.coords[0]??0)+h*_,b.coords[1]=(b.coords[1]??0)+f*_,t[g]=b.toString({format:"hex"})}t[5]=n.clone().toString({format:"hex"});for(let _=1;_<=s;_++){const g=a+_,b=n.clone();b.coords[2]=(b.coords[2]??0)-l*(_-.5),b.coords[0]=(b.coords[0]??0)+u*_,b.coords[1]=(b.coords[1]??0)+p*_,t[g]=b.toString({format:"hex"})}return t}function k9(e){const[t,n,o]=e.to("hsl").coords.map(s=>s??0),a=new Array(11);a[5]=e.toString({format:"hex"});for(let s=0;s<5;s++){const c=(5-s)/6,l=o+(100-o)*c,h=n-n*c;a[s]=new Or("hsl",[t,h,l]).toString({format:"hex"})}for(let s=0;s<5;s++){const c=(s+1)/6,l=o-o*c,h=n+(100-n)*c;a[s+6]=new Or("hsl",[t,h,l]).toString({format:"hex"})}return a}function qh(e,t="steps"){let n;try{n=Or.get(e)}catch{n=Or.get(bc.navy)}switch(t){case"saturation":return w9(n);case"lightness":return _9(n);case"mantine":return k9(n);case"chakra":return y9(n);default:return b9(n)}}var On=class extends tt{constructor(...t){super(...t),this.baseColor="#228be6",this.mode="steps",this.orientation="horizontal",this.value="",this.gradient=[]}static{this.styles=kt`
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
  `}willUpdate(t){(t.has("baseColor")||t.has("mode"))&&(this.gradient=qh(this.baseColor,this.mode)??[])}handleSwatchClick(t){this.value=t,this.dispatchEvent(new CustomEvent("input",{detail:{value:this.value},bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))}render(){return re`
      ${this.gradient.map(t=>{const n=this.selected&&t.toLowerCase()===this.selected.toLowerCase(),o=Wo(t);return re`
          <div
            class="swatch"
            ?checked=${n}
            title=${t}
            @click=${()=>this.handleSwatchClick(t)}
          >
            <div
              class="swatch-inner"
              style="--color: ${t}; --text-color: ${o}"
            >
              <span class="checkmark">${Va}</span>
            </div>
          </div>
        `})}
    `}};D([q({type:String})],On.prototype,"baseColor",void 0),D([q({type:String})],On.prototype,"mode",void 0),D([q({type:String,reflect:!0})],On.prototype,"orientation",void 0),D([q({type:String})],On.prototype,"selected",void 0),D([q({type:String,reflect:!0})],On.prototype,"value",void 0),D([Nt()],On.prototype,"gradient",void 0),On=D([lt("color-palette")],On);var Za=class extends tt{constructor(...t){super(...t),this.value=""}static{this.styles=kt`
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
  `}handleColorClick(t){this.value=t.currentTarget.title,this.dispatchEvent(new CustomEvent("input",{detail:{value:this.value},bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))}render(){const t=xe.default.keys(Ct).filter(o=>!["dark","gray","zinc","neutral","stone"].includes(o)),n=[200,300,400,500,600,700,800,900,950];return t.map(o=>{const a=n.map(s=>{const c=Ct[o][s],l=Wo(c),h=this.selected?.toLowerCase()===c.toLowerCase();return re`
          <span
            title="${c}"
            class="${Et({ThemeRadio:!0,selected:h})}"
            style="background-color: ${c}; color: ${l}"
            @click=${this.handleColorClick}
          >
            ${Va}
          </span>
        `});return re` <div class="SwatchGroup">
        <span class="ColorName">${o}</span>
        <div class="Swatches">${a}</div>
      </div>`})}};D([q({type:String,reflect:!0})],Za.prototype,"value",void 0),D([q({type:String})],Za.prototype,"selected",void 0),Za=D([lt("color-panel")],Za);var Ft=class extends tt{constructor(...t){super(...t),this.value="#228be6",this.defaultValue="#228be6",this.label="",this.hint="",this.name="",this.disabled=!1,this.size="medium",this.swatches=null,this.mode="popup",this.opened=!1,this.popupDirection="left",this.sourceSpace="srgb",this.hsv={h:0,s:0,v:0},this.saturationThumbPosition={x:0,y:0},this.hueThumbPosition=0,this.isDraggingSaturation=!1,this.isDraggingHue=!1}static{this.styles=kt`
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
  `}connectedCallback(){super.connectedCallback(),this.updateStateFromValue(this.value),window.addEventListener("mousemove",this.handleDrag.bind(this)),window.addEventListener("mouseup",this.handleDragEnd.bind(this)),window.addEventListener("touchmove",this.handleDrag.bind(this),{passive:!1}),window.addEventListener("touchend",this.handleDragEnd.bind(this))}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("mousemove",this.handleDrag.bind(this)),window.removeEventListener("mouseup",this.handleDragEnd.bind(this)),window.removeEventListener("touchmove",this.handleDrag.bind(this)),window.removeEventListener("touchend",this.handleDragEnd.bind(this)),window.removeEventListener("click",this.handleClickOutside.bind(this))}updated(t){t.has("mode")&&(this.mode==="popup"?window.addEventListener("click",this.handleClickOutside.bind(this)):window.removeEventListener("click",this.handleClickOutside.bind(this)))}willUpdate(t){t.has("value")&&this.updateStateFromValue(this.value),t.has("mode")&&this.mode==="inline"&&(this.opened=!1)}handleClickOutside(t){this.opened&&!t.composedPath().includes(this)&&this.hide()}show(){this.disabled||this.opened||(this.opened=!0,this.dispatchEvent(new CustomEvent("wa-show",{bubbles:!0,composed:!0})),setTimeout(()=>{this.dispatchEvent(new CustomEvent("wa-after-show",{bubbles:!0,composed:!0}))},150))}hide(){this.opened&&(this.opened=!1,this.dispatchEvent(new CustomEvent("wa-hide",{bubbles:!0,composed:!0})),setTimeout(()=>{this.dispatchEvent(new CustomEvent("wa-after-hide",{bubbles:!0,composed:!0}))},150))}togglePopup(){if(this.mode==="popup")if(this.opened)this.hide();else{const t=this.getBoundingClientRect(),n=250;let o;const a=this.closest("mov-drawer");if(a?.shadowRoot){const s=a.shadowRoot.querySelector("dialog");s?o=s.getBoundingClientRect():o={left:0,right:window.innerWidth}}else o={left:0,right:window.innerWidth};t.left+n>o.right?t.right-n>o.left?this.popupDirection="right":this.popupDirection="left":this.popupDirection="left",this.show()}}isSameColor(t,n){return!t||!n?!1:Or.deltaE(t,n,{method:"2000"})<1}renderCheckIcon(t){return re`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
        style=${Yr({stroke:Wo(t)})}
      >
        <path d="M5 12l5 5l10 -10" />
      </svg>
    `}renderPickerBody(){const t={backgroundColor:`hsl(${this.hsv.h}, 100%, 50%)`},n={h:this.hsv.h,s:this.hsv.s*100,v:this.hsv.v*100},o={top:`${this.saturationThumbPosition.y}%`,left:`${this.saturationThumbPosition.x}%`,backgroundColor:new Or("hsv",[n.h,n.s,n.v]).toString({format:"hex"})},a={left:`${this.hueThumbPosition}%`};return re`
      <div
        class="saturation-panel"
        style=${Yr(t)}
        @mousedown=${this.handleSaturationDragStart.bind(this)}
        @touchstart=${this.handleSaturationDragStart.bind(this)}
      >
        <div class="saturation-overlay-1"></div>
        <div class="saturation-overlay-2"></div>
        <div
          class="saturation-thumb"
          style=${Yr(o)}
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
            style=${Yr(a)}
          ></div>
        </div>
      </div>

      <div class="swatches">
        ${(this.swatches||xe.default.entries(Ct).filter(([s])=>!["dark","gray","zinc","neutral","stone"].includes(s)).map(([,s])=>s[600])).map(s=>re`
            <button
              class="swatch"
              title=${s}
              style=${Yr({backgroundColor:s})}
              @click=${()=>this.selectSwatch(s)}
            >
              ${this.isSameColor(this.value,s)?this.renderCheckIcon(s):""}
            </button>
          `)}
      </div>
    `}render(){const t={"picker-container":!0,popup:this.mode==="popup",right:this.popupDirection==="right"},n=this.renderPickerBody();return this.mode==="popup"?re`
        <div
          class="popup-trigger"
          @click=${this.togglePopup}
        >
          <div
            class="preview"
            style=${Yr({backgroundColor:this.value})}
          ></div>
        </div>
        ${this.opened?re`<div class=${Et(t)}>${n}</div>`:""}
      `:re`<div class=${Et(t)}>${n}</div>`}parseColor(t){try{return Or.get(t)}catch(n){return console.error(`[mov-color-picker] Invalid color value: "${t}"`,n),null}}colorToHsv(t){let[n,o,a]=t.to("srgb").to("hsv").coords.map(s=>s??0);return Number.isNaN(n)&&(n=this.hsv.h||0,o=0),o=Math.max(0,Math.min(100,o))/100,a=Math.max(0,Math.min(100,a))/100,{h:n,s:o,v:a}}updateStateFromValue(t){const n=this.parseColor(t);if(!n)return;this.sourceSpace=n.space.id;const o=this.colorToHsv(n);(o.h!==this.hsv.h||o.s!==this.hsv.s||o.v!==this.hsv.v)&&(this.hsv=o,this.updateThumbPositions())}dispatchInput(){this.dispatchEvent(new CustomEvent("input",{detail:{value:this.value},bubbles:!0,composed:!0}))}dispatchChange(){this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))}updateValueFromHsv(){const t={h:this.hsv.h,s:this.hsv.s*100,v:this.hsv.v*100},n=new Or("hsv",[t.h,t.s,t.v]);let o;try{!this.sourceSpace||["srgb","hsl","hsv"].includes(this.sourceSpace)?o=n.to("srgb").toString({format:"hex"}):o=n.to(this.sourceSpace).toString({precision:5})}catch(a){console.error(`[mov-color-picker] Could not convert color to space ${this.sourceSpace}`,a),o=n.to("srgb").toString({format:"hex"})}this.value!==o&&(this.value=o,this.dispatchInput())}updateThumbPositions(){this.saturationThumbPosition={x:this.hsv.s*100,y:(1-this.hsv.v)*100},this.hueThumbPosition=this.hsv.h/360*100}handleSaturationDragStart(t){t.preventDefault(),this.isDraggingSaturation=!0,this.saturationPanel=this.shadowRoot?.querySelector(".saturation-panel"),this.updateSaturation(t)}handleHueDragStart(t){t.preventDefault(),this.isDraggingHue=!0,this.hueSlider=this.shadowRoot?.querySelector(".hue-slider"),this.updateHue(t)}handleDrag(t){this.isDraggingSaturation&&this.updateSaturation(t),this.isDraggingHue&&this.updateHue(t)}handleDragEnd(){(this.isDraggingSaturation||this.isDraggingHue)&&this.dispatchChange(),this.isDraggingSaturation=!1,this.isDraggingHue=!1}getEventPosition(t){return"touches"in t?{clientX:t.touches[0].clientX,clientY:t.touches[0].clientY}:{clientX:t.clientX,clientY:t.clientY}}updateSaturation(t){if(!this.saturationPanel)return;const{clientX:n,clientY:o}=this.getEventPosition(t),a=this.saturationPanel.getBoundingClientRect(),s=Math.max(0,Math.min(n-a.left,a.width)),c=Math.max(0,Math.min(o-a.top,a.height));this.hsv.s=s/a.width,this.hsv.v=1-c/a.height,this.updateValueFromHsv(),this.updateThumbPositions()}updateHue(t){if(!this.hueSlider)return;const{clientX:n}=this.getEventPosition(t),o=this.hueSlider.getBoundingClientRect(),a=Math.max(0,Math.min(n-o.left,o.width));this.hsv.h=a/o.width*360,this.updateValueFromHsv(),this.updateThumbPositions()}selectSwatch(t){this.value=t,this.dispatchInput(),this.dispatchChange()}};D([q({type:String})],Ft.prototype,"value",void 0),D([q({type:String,attribute:"default-value"})],Ft.prototype,"defaultValue",void 0),D([q({type:String})],Ft.prototype,"label",void 0),D([q({type:String})],Ft.prototype,"hint",void 0),D([q({type:String})],Ft.prototype,"name",void 0),D([q({type:Boolean,reflect:!0})],Ft.prototype,"disabled",void 0),D([q({type:String,reflect:!0})],Ft.prototype,"size",void 0),D([q({type:Array})],Ft.prototype,"swatches",void 0),D([q({type:String})],Ft.prototype,"mode",void 0),D([Nt()],Ft.prototype,"opened",void 0),D([Nt()],Ft.prototype,"popupDirection",void 0),D([Nt()],Ft.prototype,"sourceSpace",void 0),D([Nt()],Ft.prototype,"hsv",void 0),D([Nt()],Ft.prototype,"saturationThumbPosition",void 0),D([Nt()],Ft.prototype,"hueThumbPosition",void 0),Ft=D([lt("mov-color-picker")],Ft);var E9=(e,t,n)=>{for(const o of t)if(o[0]===e)return(0,o[1])();return n?.()},Tn=class extends tt{constructor(...t){super(...t),this.value="",this.labelPosition="side",this.size="medium",this._options=[],this.resizeObserver=new ResizeObserver(()=>this.updateThumbPosition())}static{this.styles=kt`
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
  `}connectedCallback(){super.connectedCallback(),this.resizeObserver.observe(this)}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this)}handleClick(t,n){this.value=n,this.dispatchEvent(new CustomEvent("change",{detail:this.value,bubbles:!0,composed:!0}))}handleSlotChange(){this._options=this._slotEl.assignedNodes({flatten:!0}).filter(t=>t.nodeName==="SEGMENTED-CONTROL-OPTION").map(t=>({value:t.getAttribute("value")??"",label:t.getAttribute("label")??"",icon:t.getAttribute("icon")??void 0}))}firstUpdated(){this.handleSlotChange(),this.updateComplete.then(()=>this.updateThumbPosition())}updated(t){super.updated(t),(t.has("value")||t.has("_options")||t.has("labelPosition")||t.has("size"))&&Promise.resolve().then(()=>this.updateThumbPosition())}updateThumbPosition(){if(!this.thumb)return;const t=this.shadowRoot?.querySelector(".button.selected");if(t){const{offsetWidth:n,offsetHeight:o}=t,a=t.getBoundingClientRect(),s=this.shadowRoot?.querySelector(".segmented-control")?.getBoundingClientRect(),c=a.left-(s?.left??0),l=a.top-(s?.top??0);this.thumb.style.transform=`translate(${c}px, ${l}px)`,this.thumb.style.width=`${n}px`,this.thumb.style.height=`${o}px`}else this.thumb.style.width="0px",this.thumb.style.height="0px"}render(){return re`
      <div class="segmented-control">
        <div class="thumb"></div>
        ${this._options.map(t=>re`
            <div
              class="option"
              title="${this.labelPosition==="tooltip"?t.label:Ne}"
            >
              <button
                class="${Et({button:!0,selected:this.value===t.value,bottom:this.labelPosition==="bottom",small:this.size==="small",medium:this.size==="medium",large:this.size==="large"})}"
                @click=${n=>this.handleClick(n,t.value)}
                role="radio"
                aria-checked="${this.value===t.value}"
              >
                ${t.icon?re`<mov-icon
                      name="${t.icon}"
                      .size=${E9(this.size,[["small",()=>"16px"],["medium",()=>"24px"],["large",()=>"36px"]],()=>this.size)}
                    ></mov-icon>`:Ne}
                ${this.labelPosition!=="tooltip"?re`<span>${t.label}</span>`:Ne}
              </button>
            </div>
          `)}
      </div>
      <div style="display: none;">
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}};D([q({type:String,reflect:!0})],Tn.prototype,"value",void 0),D([q({type:String})],Tn.prototype,"labelPosition",void 0),D([q({type:String})],Tn.prototype,"size",void 0),D([Nt()],Tn.prototype,"_options",void 0),D([En(".thumb")],Tn.prototype,"thumb",void 0),D([En("slot")],Tn.prototype,"_slotEl",void 0),Tn=D([lt("segmented-control")],Tn);var Pi=class extends tt{constructor(...t){super(...t),this.value="",this.label=""}createRenderRoot(){return this}};D([q({type:String,reflect:!0})],Pi.prototype,"value",void 0),D([q({type:String,reflect:!0})],Pi.prototype,"label",void 0),D([q({type:String,reflect:!0})],Pi.prototype,"icon",void 0),Pi=D([lt("segmented-control-option")],Pi);var vr=class extends tt{constructor(...t){super(...t),this.name="",this.value="on",this.checked=!1,this.defaultChecked=!1,this.disabled=!1,this.required=!1,this.size="medium",this.hint="",this.design="graphical",this.textOn="ON",this.textOff="OFF"}static{this.styles=kt`
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
  `}handleChange(t){this.disabled||(this.checked=t.target.checked,this.dispatchEvent(new CustomEvent("change",{detail:{checked:this.checked},bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("input",{detail:{checked:this.checked},bubbles:!0,composed:!0})))}render(){const t=this.design.toLowerCase();let n;return t==="graphical"?n=re`${this.checked?Va:wc}`:n=re`<span class="text">${this.checked?this.textOn:this.textOff}</span>`,re`
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
            class="${Et({switch:!0,[t]:!0})}"
          >
            <div class="knob">${n}</div>
          </div>
        </label>
        <div class="hint">
          <slot name="hint">${this.hint}</slot>
        </div>
      </div>
    `}};D([q({type:String})],vr.prototype,"name",void 0),D([q({type:String})],vr.prototype,"value",void 0),D([q({type:Boolean,reflect:!0})],vr.prototype,"checked",void 0),D([q({type:Boolean,reflect:!0,attribute:"default-checked"})],vr.prototype,"defaultChecked",void 0),D([q({type:Boolean,reflect:!0})],vr.prototype,"disabled",void 0),D([q({type:Boolean,reflect:!0})],vr.prototype,"required",void 0),D([q({type:String,reflect:!0})],vr.prototype,"size",void 0),D([q({type:String})],vr.prototype,"hint",void 0),D([q({type:String,reflect:!0})],vr.prototype,"design",void 0),D([q({type:String})],vr.prototype,"textOn",void 0),D([q({type:String})],vr.prototype,"textOff",void 0),vr=D([lt("mov-switch")],vr);var M9=":host{--mov-slider-track-height:6px;--mov-slider-thumb-size:18px;--mov-slider-tooltip-offset:24px;-webkit-user-select:none;user-select:none;touch-action:none;width:100%;display:block}:host([vertical]){display:inline-block}.mov-slider__container{align-items:center;min-height:24px;display:flex;position:relative}:host([vertical]) .mov-slider__container{flex-direction:column;min-width:24px;min-height:auto}.mov-slider__track{height:var(--mov-slider-track-height);background:var(--theme-border-color,#ccc);cursor:pointer;border-radius:9999px;flex:1;position:relative}:host([vertical]) .mov-slider__track{width:var(--mov-slider-track-height);height:100%;min-height:8rem}.mov-slider__progress{background:var(--mov-color-fill-loud);pointer-events:none;border-radius:9999px;height:100%;transition:background-color .15s;position:absolute}.mov-slider__progress--min-gap{background:#f59e0b;animation:2s ease-in-out infinite pulse-gap}@keyframes pulse-gap{0%,to{opacity:1}50%{opacity:.7}}:host([vertical]) .mov-slider__progress{width:100%;height:auto}.mov-slider__thumb{width:var(--mov-slider-thumb-size);height:var(--mov-slider-thumb-size);border:3px solid var(--mov-color-fill-loud);cursor:grab;touch-action:none;box-sizing:border-box;background:#fff;border-radius:9999px;transition:transform .15s,border-color .15s,box-shadow .15s;position:absolute;top:50%;transform:translate(-50%,-50%);box-shadow:0 1px 3px #0003}.mov-slider__thumb:active{cursor:grabbing;transform:translate(-50%,-50%)scale(1.1)}:host([vertical]) .mov-slider__thumb{inset-inline-start:50%;top:auto;transform:translate(-50%,50%)}:host([vertical]) .mov-slider__thumb:active{transform:translate(-50%,50%)scale(1.1)}.mov-slider__thumb:hover{border-color:var(--mov-color-fill-loud);box-shadow:0 4px 6px -1px #0000001a}.mov-slider__thumb--focused{outline:3px solid var(--mov-color-fill-loud);outline-offset:2px}.mov-slider__thumb--active{z-index:1;transform:translate(-50%,-50%)scale(1.1)}:host([vertical]) .mov-slider__thumb--active{transform:translate(-50%,50%)scale(1.1)}:host([readonly]) .mov-slider__thumb{cursor:default;border-color:var(--theme-border-color)}:host([readonly]) .mov-slider__thumb:active{transform:translate(-50%,-50%)}.mov-slider__input{opacity:0;pointer-events:none;position:absolute}.mov-slider__tooltip{bottom:var(--mov-slider-tooltip-offset);background:var(--theme-hightlight-color,#333);color:#fff;white-space:nowrap;pointer-events:none;opacity:0;z-index:2;border-radius:4px;padding:2px 8px;font-size:14px;transition:opacity .15s;position:absolute;inset-inline-start:50%;transform:translate(-50%)}.mov-slider__thumb:hover .mov-slider__tooltip,.mov-slider__thumb--focused .mov-slider__tooltip,.mov-slider__thumb--active .mov-slider__tooltip{opacity:1}:host([vertical]) .mov-slider__tooltip{bottom:auto;inset-inline-start:var(--mov-slider-tooltip-offset);top:50%;transform:translateY(-50%)}.mov-slider__ticks{top:50%;pointer-events:none;height:8px;position:absolute;inset-inline:0}:host([vertical]) .mov-slider__ticks{top:0;bottom:0;width:8px;height:auto;inset-inline-start:50%}.mov-slider__tick{background:var(--theme-border-color);width:1px;height:8px;position:absolute;transform:translate(-50%)}:host([vertical]) .mov-slider__tick{width:8px;height:1px;transform:translateY(-50%)}.mov-slider__tick-label{color:var(--theme-text-color);opacity:.7;white-space:nowrap;font-size:12px;position:absolute;top:12px;transform:translate(-50%)}:host([vertical]) .mov-slider__tick-label{top:auto;inset-inline-start:12px;transform:translateY(-50%)}:host([size=small]){--mov-slider-track-height:4px;--mov-slider-thumb-size:14px}:host([size=large]){--mov-slider-track-height:10px;--mov-slider-thumb-size:22px}:host([disabled]){opacity:.6;pointer-events:none}:host([disabled]) .mov-slider__thumb{cursor:not-allowed;border-color:var(--theme-border-color);background:#f3f4f6}:host([invalid]) .mov-slider__progress{background:#ef4444}.mov-form-control__label{color:var(--theme-text-color);margin-bottom:.5rem;display:block}.mov-form-control__helper,.mov-form-control__error{margin-top:.5rem;font-size:14px}.mov-form-control__helper{color:var(--theme-text-color);opacity:.8}.mov-form-control__error{color:#ef4444}.mov-slider__live-region{clip:rect(0 0 0 0);border:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}:host([show-ticks]){margin-left:5px;margin-right:5px;padding-bottom:15px}:host([filled]) .mov-slider__thumb{background:var(--mov-color-fill-loud);border-color:var(--mov-color-fill-loud)}",bt=class extends tt{static{this.styles=[Se(M9)]}constructor(){super(),this.label="",this.helpText="",this.errorMessage="",this.min=0,this.max=100,this.step=1,this.value=0,this.dual=!1,this.vertical=!1,this.filled=!1,this.size="medium",this.disabled=!1,this.readonly=!1,this.invalid=!1,this.showTooltip=!1,this.showTicks=!1,this.tickStep=0,this.tickCount=0,this.focusedThumb=null,this.draggingThumb=null,this.activeDrag=null,this._handlePointerMove=this._handlePointerMove.bind(this),this._handlePointerUp=this._handlePointerUp.bind(this)}get values(){return Array.isArray(this.value)?this.value:[this.min,this.value]}getPercentage(t){return(t-this.min)/(this.max-this.min)*100}getValueFromPercentage(t){const n=this.min+t/100*(this.max-this.min);return this.step?Math.round(n/this.step)*this.step:n}getValueFromPointer(t,n,o){let a;return this.vertical?a=(o.bottom-n)/o.height*100:a=(t-o.left)/o.width*100,a=Math.max(0,Math.min(100,a)),this.getValueFromPercentage(a)}clampValue(t){let n=Math.max(this.min,Math.min(this.max,t));return this.step&&(n=Math.round(n/this.step)*this.step),Number(n.toFixed(10))}handleThumbPointerDown(t,n){this.disabled||this.readonly||!this.track||(t.preventDefault(),t.stopPropagation(),t.currentTarget.setPointerCapture(t.pointerId),this.activeDrag={thumb:n,trackRect:this.track.getBoundingClientRect()},this.draggingThumb=n,document.addEventListener("pointermove",this._handlePointerMove),document.addEventListener("pointerup",this._handlePointerUp),document.addEventListener("pointercancel",this._handlePointerUp))}_handlePointerMove(t){if(!this.activeDrag||this.disabled||this.readonly)return;const{thumb:n,trackRect:o}=this.activeDrag,a=this.getValueFromPointer(t.clientX,t.clientY,o);if(this.dual){const s=this.values;if(n==="min"){const c=Math.min(a,s[1]-(this.step||1));this.updateValue([c,s[1]],"input")}else{const c=Math.max(a,s[0]+(this.step||1));this.updateValue([s[0],c],"input")}}else this.updateValue(a,"input")}_handlePointerUp(t){this.activeDrag&&(this.shadowRoot?.querySelector(".mov-slider__thumb--active")?.releasePointerCapture(t.pointerId),this.updateValue(this.value,"change"),this.activeDrag=null,this.draggingThumb=null,document.removeEventListener("pointermove",this._handlePointerMove),document.removeEventListener("pointerup",this._handlePointerUp),document.removeEventListener("pointercancel",this._handlePointerUp))}updateValue(t,n="change"){this.readonly||this.disabled||(this.dual&&Array.isArray(t)?(t=[this.clampValue(t[0]),this.clampValue(t[1])],t[0]>t[1]&&(t=[t[1],t[0]])):!this.dual&&typeof t=="number"&&(t=this.clampValue(t)),this.value=t,this.dispatchEvent(new CustomEvent(n,{bubbles:!0,composed:!0,detail:{value:t}})))}handleTrackClick(t){if(this.disabled||this.readonly||!this.track)return;const n=this.track.getBoundingClientRect(),o=this.getValueFromPointer(t.clientX,t.clientY,n);if(this.dual){const a=this.values;Math.abs(o-a[0])<Math.abs(o-a[1])?this.updateValue([o,a[1]]):this.updateValue([a[0],o])}else this.updateValue(o)}renderTicks(){if(!this.showTicks)return null;const t=new Set;t.add(this.min),t.add(this.max);let n=this.tickStep;if(this.tickCount>1&&(n=Math.round((this.max-this.min)/(this.tickCount-1))),n>0){const a=Math.floor((this.max-this.min)/n);if(a<=100)for(let s=1;s<=a;s++){const c=this.min+s*n;c<this.max&&t.add(Number(c.toFixed(10)))}}const o=Array.from(t).sort((a,s)=>a-s).map(a=>{const s=this.getPercentage(a),c=this.vertical?`bottom: ${s}%`:`inset-inline-start: ${s}%`;return re`
        <div class="mov-slider__tick" style="${c}">
          <div class="mov-slider__tick-label">${a}</div>
        </div>
      `});return re`<div class="mov-slider__ticks">${o}</div>`}renderThumb(t,n){const o=this.getPercentage(t),a=this.focusedThumb===n,s=this.draggingThumb===n,c=this.vertical?`bottom: ${o}%`:`inset-inline-start: ${o}%`;return re`
      <div
        class="mov-slider__thumb ${a?"mov-slider__thumb--focused":""} ${s?"mov-slider__thumb--active":""}"
        style="${c}"
        @pointerdown=${l=>this.handleThumbPointerDown(l,n)}
      >
        ${this.showTooltip?re`<div class="mov-slider__tooltip">${t}</div>`:""}
      </div>
    `}renderProgress(){const t=this.values;if(this.dual){const a=this.getPercentage(t[0]),s=this.getPercentage(t[1]),c=this.vertical?`bottom: ${a}%; height: ${s-a}%`:`left: ${a}%; width: ${s-a}%`;return re`<div
        class="mov-slider__progress"
        style="${c}"
      ></div>`}const n=this.getPercentage(t[1]),o=this.vertical?`bottom: 0; height: ${n}%`:`left: 0; width: ${n}%`;return re`<div
      class="mov-slider__progress"
      style="${o}"
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
    `}};D([q({type:String})],bt.prototype,"label",void 0),D([q({attribute:"help-text"})],bt.prototype,"helpText",void 0),D([q({attribute:"error-message"})],bt.prototype,"errorMessage",void 0),D([q({type:Number})],bt.prototype,"min",void 0),D([q({type:Number})],bt.prototype,"max",void 0),D([q({type:Number})],bt.prototype,"step",void 0),D([q({type:Object})],bt.prototype,"value",void 0),D([q({type:Boolean,reflect:!0})],bt.prototype,"dual",void 0),D([q({type:Boolean,reflect:!0})],bt.prototype,"vertical",void 0),D([q({type:Boolean,reflect:!0})],bt.prototype,"filled",void 0),D([q({reflect:!0})],bt.prototype,"size",void 0),D([q({type:Boolean,reflect:!0})],bt.prototype,"disabled",void 0),D([q({type:Boolean,reflect:!0})],bt.prototype,"readonly",void 0),D([q({type:Boolean,reflect:!0})],bt.prototype,"invalid",void 0),D([q({type:Boolean,attribute:"show-tooltip"})],bt.prototype,"showTooltip",void 0),D([q({type:Boolean,attribute:"show-ticks"})],bt.prototype,"showTicks",void 0),D([q({type:Number,attribute:"tick-step"})],bt.prototype,"tickStep",void 0),D([q({type:Number,attribute:"tick-count"})],bt.prototype,"tickCount",void 0),D([Nt()],bt.prototype,"focusedThumb",void 0),D([Nt()],bt.prototype,"draggingThumb",void 0),D([En(".mov-slider__track")],bt.prototype,"track",void 0),bt=D([lt("mov-slider")],bt);var S9=Sr((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.BLANK_URL=e.relativeFirstCharacters=e.whitespaceEscapeCharsRegex=e.urlSchemeRegex=e.ctrlCharactersRegex=e.htmlCtrlEntityRegex=e.htmlEntitiesRegex=e.invalidProtocolRegex=void 0,e.invalidProtocolRegex=/^([^\w]*)(javascript|data|vbscript)/im,e.htmlEntitiesRegex=/&#(\w+)(^\w|;)?/g,e.htmlCtrlEntityRegex=/&(newline|tab);/gi,e.ctrlCharactersRegex=/[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim,e.urlSchemeRegex=/^.+(:|&colon;)/gim,e.whitespaceEscapeCharsRegex=/(\\|%5[cC])((%(6[eE]|72|74))|[nrt])/g,e.relativeFirstCharacters=[".","/"],e.BLANK_URL="about:blank"})),A9=Sr((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.sanitizeUrl=c;var t=S9();function n(l){return t.relativeFirstCharacters.indexOf(l[0])>-1}function o(l){return l.replace(t.ctrlCharactersRegex,"").replace(t.htmlEntitiesRegex,function(h,u){return String.fromCharCode(u)})}function a(l){return URL.canParse(l)}function s(l){try{return decodeURIComponent(l)}catch{return l}}function c(l){if(!l)return t.BLANK_URL;var h,u=s(l.trim());do u=o(u).replace(t.htmlCtrlEntityRegex,"").replace(t.ctrlCharactersRegex,"").replace(t.whitespaceEscapeCharsRegex,"").trim(),u=s(u),h=u.match(t.ctrlCharactersRegex)||u.match(t.htmlEntitiesRegex)||u.match(t.htmlCtrlEntityRegex)||u.match(t.whitespaceEscapeCharsRegex);while(h&&h.length>0);var f=u;if(!f)return t.BLANK_URL;if(n(f))return f;var p=f.trimStart(),_=p.match(t.urlSchemeRegex);if(!_)return f;var g=_[0].toLowerCase().trim();if(t.invalidProtocolRegex.test(g))return t.BLANK_URL;var b=p.replace(/\\/g,"/");if(g==="mailto:"||g.includes("://"))return b;if(g==="http:"||g==="https:"){if(!a(b))return t.BLANK_URL;var w=new URL(b);return w.protocol=w.protocol.toLowerCase(),w.hostname=w.hostname.toLowerCase(),w.toString()}return b}})),x9=Sr(((e,t,n)=>{(function(o,a){typeof define=="function"&&define.amd?define([],a):typeof e<"u"?a():(a(),o.FileSaver={})})(n,function(){"use strict";function o(f,p){return typeof p>"u"?p={autoBom:!1}:typeof p!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),p={autoBom:!p}),p.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(f.type)?new Blob(["\uFEFF",f],{type:f.type}):f}function a(f,p,_){var g=new XMLHttpRequest;g.open("GET",f),g.responseType="blob",g.onload=function(){u(g.response,p,_)},g.onerror=function(){console.error("could not download file")},g.send()}function s(f){var p=new XMLHttpRequest;p.open("HEAD",f,!1);try{p.send()}catch{}return 200<=p.status&&299>=p.status}function c(f){try{f.dispatchEvent(new MouseEvent("click"))}catch{var p=document.createEvent("MouseEvents");p.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),f.dispatchEvent(p)}}var l=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof global=="object"&&global.global===global?global:void 0,h=l.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),u=l.saveAs||(typeof window!="object"||window!==l?function(){}:"download"in HTMLAnchorElement.prototype&&!h?function(f,p,_){var g=l.URL||l.webkitURL,b=document.createElement("a");p=p||f.name||"download",b.download=p,b.rel="noopener",typeof f=="string"?(b.href=f,b.origin===location.origin?c(b):s(b.href)?a(f,p,_):c(b,b.target="_blank")):(b.href=g.createObjectURL(f),setTimeout(function(){g.revokeObjectURL(b.href)},4e4),setTimeout(function(){c(b)},0))}:"msSaveOrOpenBlob"in navigator?function(f,p,_){if(p=p||f.name||"download",typeof f!="string")navigator.msSaveOrOpenBlob(o(f,_),p);else if(s(f))a(f,p,_);else{var g=document.createElement("a");g.href=f,g.target="_blank",setTimeout(function(){c(g)})}}:function(f,p,_,g){if(g=g||open("","_blank"),g&&(g.document.title=g.document.body.innerText="downloading..."),typeof f=="string")return a(f,p,_);var b=f.type==="application/octet-stream",w=/constructor/i.test(l.HTMLElement)||l.safari,v=/CriOS\/[\d]+/.test(navigator.userAgent);if((v||b&&w||h)&&typeof FileReader<"u"){var E=new FileReader;E.onloadend=function(){var T=E.result;T=v?T:T.replace(/^data:[^;]*;/,"data:attachment/file;"),g?g.location.href=T:location=T,g=null},E.readAsDataURL(f)}else{var S=l.URL||l.webkitURL,C=S.createObjectURL(f);g?g.location=C:location.href=C,g=null,setTimeout(function(){S.revokeObjectURL(C)},4e4)}});l.saveAs=u.saveAs=u,typeof t<"u"&&(t.exports=u)})})),I9=Sr(((e,t)=>{(function(n){typeof e=="object"&&typeof t<"u"?t.exports=n():typeof define=="function"&&define.amd?define([],n):(typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:this).JSZip=n()})(function(){return(function n(o,a,s){function c(u,f){if(!a[u]){if(!o[u]){var p=typeof require=="function"&&require;if(!f&&p)return p(u,!0);if(l)return l(u,!0);var _=new Error("Cannot find module '"+u+"'");throw _.code="MODULE_NOT_FOUND",_}var g=a[u]={exports:{}};o[u][0].call(g.exports,function(b){var w=o[u][1][b];return c(w||b)},g,g.exports,n,o,a,s)}return a[u].exports}for(var l=typeof require=="function"&&require,h=0;h<s.length;h++)c(s[h]);return c})({1:[function(n,o,a){"use strict";var s=n("./utils"),c=n("./support"),l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";a.encode=function(h){for(var u,f,p,_,g,b,w,v=[],E=0,S=h.length,C=S,T=s.getTypeOf(h)!=="string";E<h.length;)C=S-E,p=T?(u=h[E++],f=E<S?h[E++]:0,E<S?h[E++]:0):(u=h.charCodeAt(E++),f=E<S?h.charCodeAt(E++):0,E<S?h.charCodeAt(E++):0),_=u>>2,g=(3&u)<<4|f>>4,b=1<C?(15&f)<<2|p>>6:64,w=2<C?63&p:64,v.push(l.charAt(_)+l.charAt(g)+l.charAt(b)+l.charAt(w));return v.join("")},a.decode=function(h){var u,f,p,_,g,b,w=0,v=0,E="data:";if(h.substr(0,E.length)===E)throw new Error("Invalid base64 input, it looks like a data url.");var S,C=3*(h=h.replace(/[^A-Za-z0-9\+\/\=]/g,"")).length/4;if(h.charAt(h.length-1)===l.charAt(64)&&C--,h.charAt(h.length-2)===l.charAt(64)&&C--,C%1!=0)throw new Error("Invalid base64 input, bad content length.");for(S=c.uint8array?new Uint8Array(0|C):new Array(0|C);w<h.length;)u=l.indexOf(h.charAt(w++))<<2|(_=l.indexOf(h.charAt(w++)))>>4,f=(15&_)<<4|(g=l.indexOf(h.charAt(w++)))>>2,p=(3&g)<<6|(b=l.indexOf(h.charAt(w++))),S[v++]=u,g!==64&&(S[v++]=f),b!==64&&(S[v++]=p);return S}},{"./support":30,"./utils":32}],2:[function(n,o,a){"use strict";var s=n("./external"),c=n("./stream/DataWorker"),l=n("./stream/Crc32Probe"),h=n("./stream/DataLengthProbe");function u(f,p,_,g,b){this.compressedSize=f,this.uncompressedSize=p,this.crc32=_,this.compression=g,this.compressedContent=b}u.prototype={getContentWorker:function(){var f=new c(s.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new h("data_length")),p=this;return f.on("end",function(){if(this.streamInfo.data_length!==p.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),f},getCompressedWorker:function(){return new c(s.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},u.createWorkerFrom=function(f,p,_){return f.pipe(new l).pipe(new h("uncompressedSize")).pipe(p.compressWorker(_)).pipe(new h("compressedSize")).withStreamInfo("compression",p)},o.exports=u},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(n,o,a){"use strict";var s=n("./stream/GenericWorker");a.STORE={magic:"\0\0",compressWorker:function(c){return new s("STORE compression")},uncompressWorker:function(){return new s("STORE decompression")}},a.DEFLATE=n("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(n,o,a){"use strict";var s=n("./utils"),c=(function(){for(var l,h=[],u=0;u<256;u++){l=u;for(var f=0;f<8;f++)l=1&l?3988292384^l>>>1:l>>>1;h[u]=l}return h})();o.exports=function(l,h){return l!==void 0&&l.length?s.getTypeOf(l)!=="string"?(function(u,f,p,_){var g=c,b=_+p;u^=-1;for(var w=_;w<b;w++)u=u>>>8^g[255&(u^f[w])];return-1^u})(0|h,l,l.length,0):(function(u,f,p,_){var g=c,b=_+p;u^=-1;for(var w=_;w<b;w++)u=u>>>8^g[255&(u^f.charCodeAt(w))];return-1^u})(0|h,l,l.length,0):0}},{"./utils":32}],5:[function(n,o,a){"use strict";a.base64=!1,a.binary=!1,a.dir=!1,a.createFolders=!0,a.date=null,a.compression=null,a.compressionOptions=null,a.comment=null,a.unixPermissions=null,a.dosPermissions=null},{}],6:[function(n,o,a){"use strict";var s=null;s=typeof Promise<"u"?Promise:n("lie"),o.exports={Promise:s}},{lie:37}],7:[function(n,o,a){"use strict";var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",c=n("pako"),l=n("./utils"),h=n("./stream/GenericWorker"),u=s?"uint8array":"array";function f(p,_){h.call(this,"FlateWorker/"+p),this._pako=null,this._pakoAction=p,this._pakoOptions=_,this.meta={}}a.magic="\b\0",l.inherits(f,h),f.prototype.processChunk=function(p){this.meta=p.meta,this._pako===null&&this._createPako(),this._pako.push(l.transformTo(u,p.data),!1)},f.prototype.flush=function(){h.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},f.prototype.cleanUp=function(){h.prototype.cleanUp.call(this),this._pako=null},f.prototype._createPako=function(){this._pako=new c[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var p=this;this._pako.onData=function(_){p.push({data:_,meta:p.meta})}},a.compressWorker=function(p){return new f("Deflate",p)},a.uncompressWorker=function(){return new f("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(n,o,a){"use strict";function s(g,b){var w,v="";for(w=0;w<b;w++)v+=String.fromCharCode(255&g),g>>>=8;return v}function c(g,b,w,v,E,S){var C,T,$=g.file,K=g.compression,W=S!==u.utf8encode,ne=l.transformTo("string",S($.name)),N=l.transformTo("string",u.utf8encode($.name)),pe=$.comment,ge=l.transformTo("string",S(pe)),P=l.transformTo("string",u.utf8encode(pe)),X=N.length!==$.name.length,M=P.length!==pe.length,Q="",Ie="",ce="",Re=$.dir,ae=$.date,Ee={crc32:0,compressedSize:0,uncompressedSize:0};b&&!w||(Ee.crc32=g.crc32,Ee.compressedSize=g.compressedSize,Ee.uncompressedSize=g.uncompressedSize);var V=0;b&&(V|=8),W||!X&&!M||(V|=2048);var G=0,ye=0;Re&&(G|=16),E==="UNIX"?(ye=798,G|=(function(fe,ot){var ht=fe;return fe||(ht=ot?16893:33204),(65535&ht)<<16})($.unixPermissions,Re)):(ye=20,G|=(function(fe){return 63&(fe||0)})($.dosPermissions)),C=ae.getUTCHours(),C<<=6,C|=ae.getUTCMinutes(),C<<=5,C|=ae.getUTCSeconds()/2,T=ae.getUTCFullYear()-1980,T<<=4,T|=ae.getUTCMonth()+1,T<<=5,T|=ae.getUTCDate(),X&&(Ie=s(1,1)+s(f(ne),4)+N,Q+="up"+s(Ie.length,2)+Ie),M&&(ce=s(1,1)+s(f(ge),4)+P,Q+="uc"+s(ce.length,2)+ce);var me="";return me+=`
\0`,me+=s(V,2),me+=K.magic,me+=s(C,2),me+=s(T,2),me+=s(Ee.crc32,4),me+=s(Ee.compressedSize,4),me+=s(Ee.uncompressedSize,4),me+=s(ne.length,2),me+=s(Q.length,2),{fileRecord:p.LOCAL_FILE_HEADER+me+ne+Q,dirRecord:p.CENTRAL_FILE_HEADER+s(ye,2)+me+s(ge.length,2)+"\0\0\0\0"+s(G,4)+s(v,4)+ne+Q+ge}}var l=n("../utils"),h=n("../stream/GenericWorker"),u=n("../utf8"),f=n("../crc32"),p=n("../signature");function _(g,b,w,v){h.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=b,this.zipPlatform=w,this.encodeFileName=v,this.streamFiles=g,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}l.inherits(_,h),_.prototype.push=function(g){var b=g.meta.percent||0,w=this.entriesCount,v=this._sources.length;this.accumulate?this.contentBuffer.push(g):(this.bytesWritten+=g.data.length,h.prototype.push.call(this,{data:g.data,meta:{currentFile:this.currentFile,percent:w?(b+100*(w-v-1))/w:100}}))},_.prototype.openedSource=function(g){this.currentSourceOffset=this.bytesWritten,this.currentFile=g.file.name;var b=this.streamFiles&&!g.file.dir;if(b){var w=c(g,b,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:w.fileRecord,meta:{percent:0}})}else this.accumulate=!0},_.prototype.closedSource=function(g){this.accumulate=!1;var b=this.streamFiles&&!g.file.dir,w=c(g,b,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(w.dirRecord),b)this.push({data:(function(v){return p.DATA_DESCRIPTOR+s(v.crc32,4)+s(v.compressedSize,4)+s(v.uncompressedSize,4)})(g),meta:{percent:100}});else for(this.push({data:w.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},_.prototype.flush=function(){for(var g=this.bytesWritten,b=0;b<this.dirRecords.length;b++)this.push({data:this.dirRecords[b],meta:{percent:100}});var w=this.bytesWritten-g,v=(function(E,S,C,T,$){var K=l.transformTo("string",$(T));return p.CENTRAL_DIRECTORY_END+"\0\0\0\0"+s(E,2)+s(E,2)+s(S,4)+s(C,4)+s(K.length,2)+K})(this.dirRecords.length,w,g,this.zipComment,this.encodeFileName);this.push({data:v,meta:{percent:100}})},_.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},_.prototype.registerPrevious=function(g){this._sources.push(g);var b=this;return g.on("data",function(w){b.processChunk(w)}),g.on("end",function(){b.closedSource(b.previous.streamInfo),b._sources.length?b.prepareNextSource():b.end()}),g.on("error",function(w){b.error(w)}),this},_.prototype.resume=function(){return!!h.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},_.prototype.error=function(g){var b=this._sources;if(!h.prototype.error.call(this,g))return!1;for(var w=0;w<b.length;w++)try{b[w].error(g)}catch{}return!0},_.prototype.lock=function(){h.prototype.lock.call(this);for(var g=this._sources,b=0;b<g.length;b++)g[b].lock()},o.exports=_},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(n,o,a){"use strict";var s=n("../compressions"),c=n("./ZipFileWorker");a.generateWorker=function(l,h,u){var f=new c(h.streamFiles,u,h.platform,h.encodeFileName),p=0;try{l.forEach(function(_,g){p++;var b=(function(S,C){var T=S||C,$=s[T];if(!$)throw new Error(T+" is not a valid compression method !");return $})(g.options.compression,h.compression),w=g.options.compressionOptions||h.compressionOptions||{},v=g.dir,E=g.date;g._compressWorker(b,w).withStreamInfo("file",{name:_,dir:v,date:E,comment:g.comment||"",unixPermissions:g.unixPermissions,dosPermissions:g.dosPermissions}).pipe(f)}),f.entriesCount=p}catch(_){f.error(_)}return f}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(n,o,a){"use strict";function s(){if(!(this instanceof s))return new s;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var c=new s;for(var l in this)typeof this[l]!="function"&&(c[l]=this[l]);return c}}(s.prototype=n("./object")).loadAsync=n("./load"),s.support=n("./support"),s.defaults=n("./defaults"),s.version="3.9.1",s.loadAsync=function(c,l){return new s().loadAsync(c,l)},s.external=n("./external"),o.exports=s},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(n,o,a){"use strict";var s=n("./utils"),c=n("./external"),l=n("./utf8"),h=n("./zipEntries"),u=n("./stream/Crc32Probe"),f=n("./nodejsUtils");function p(_){return new c.Promise(function(g,b){var w=_.decompressed.getContentWorker().pipe(new u);w.on("error",function(v){b(v)}).on("end",function(){w.streamInfo.crc32!==_.decompressed.crc32?b(new Error("Corrupted zip : CRC32 mismatch")):g()}).resume()})}o.exports=function(_,g){var b=this;return g=s.extend(g||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:l.utf8decode}),f.isNode&&f.isStream(_)?c.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):s.prepareContent("the loaded zip file",_,!0,g.optimizedBinaryString,g.base64).then(function(w){var v=new h(g);return v.load(w),v}).then(function(w){var v=[c.Promise.resolve(w)],E=w.files;if(g.checkCRC32)for(var S=0;S<E.length;S++)v.push(p(E[S]));return c.Promise.all(v)}).then(function(w){for(var v=w.shift(),E=v.files,S=0;S<E.length;S++){var C=E[S],T=C.fileNameStr,$=s.resolve(C.fileNameStr);b.file($,C.decompressed,{binary:!0,optimizedBinaryString:!0,date:C.date,dir:C.dir,comment:C.fileCommentStr.length?C.fileCommentStr:null,unixPermissions:C.unixPermissions,dosPermissions:C.dosPermissions,createFolders:g.createFolders}),C.dir||(b.file($).unsafeOriginalName=T)}return v.zipComment.length&&(b.comment=v.zipComment),b})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(n,o,a){"use strict";var s=n("../utils"),c=n("../stream/GenericWorker");function l(h,u){c.call(this,"Nodejs stream input adapter for "+h),this._upstreamEnded=!1,this._bindStream(u)}s.inherits(l,c),l.prototype._bindStream=function(h){var u=this;(this._stream=h).pause(),h.on("data",function(f){u.push({data:f,meta:{percent:0}})}).on("error",function(f){u.isPaused?this.generatedError=f:u.error(f)}).on("end",function(){u.isPaused?u._upstreamEnded=!0:u.end()})},l.prototype.pause=function(){return!!c.prototype.pause.call(this)&&(this._stream.pause(),!0)},l.prototype.resume=function(){return!!c.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},o.exports=l},{"../stream/GenericWorker":28,"../utils":32}],13:[function(n,o,a){"use strict";var s=n("readable-stream").Readable;function c(l,h,u){s.call(this,h),this._helper=l;var f=this;l.on("data",function(p,_){f.push(p)||f._helper.pause(),u&&u(_)}).on("error",function(p){f.emit("error",p)}).on("end",function(){f.push(null)})}n("../utils").inherits(c,s),c.prototype._read=function(){this._helper.resume()},o.exports=c},{"../utils":32,"readable-stream":16}],14:[function(n,o,a){"use strict";o.exports={isNode:typeof Buffer<"u",newBufferFrom:function(s,c){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(s,c);if(typeof s=="number")throw new Error('The "data" argument must not be a number');return new Buffer(s,c)},allocBuffer:function(s){if(Buffer.alloc)return Buffer.alloc(s);var c=new Buffer(s);return c.fill(0),c},isBuffer:function(s){return Buffer.isBuffer(s)},isStream:function(s){return s&&typeof s.on=="function"&&typeof s.pause=="function"&&typeof s.resume=="function"}}},{}],15:[function(n,o,a){"use strict";function s(T,$,K){var W,ne=l.getTypeOf($),N=l.extend(K||{},f);N.date=N.date||new Date,N.compression!==null&&(N.compression=N.compression.toUpperCase()),typeof N.unixPermissions=="string"&&(N.unixPermissions=parseInt(N.unixPermissions,8)),N.unixPermissions&&16384&N.unixPermissions&&(N.dir=!0),N.dosPermissions&&16&N.dosPermissions&&(N.dir=!0),N.dir&&(T=E(T)),N.createFolders&&(W=v(T))&&S.call(this,W,!0);var pe=ne==="string"&&N.binary===!1&&N.base64===!1;K&&K.binary!==void 0||(N.binary=!pe),($ instanceof p&&$.uncompressedSize===0||N.dir||!$||$.length===0)&&(N.base64=!1,N.binary=!0,$="",N.compression="STORE",ne="string");var ge=null;ge=$ instanceof p||$ instanceof h?$:b.isNode&&b.isStream($)?new w(T,$):l.prepareContent(T,$,N.binary,N.optimizedBinaryString,N.base64);var P=new _(T,ge,N);this.files[T]=P}var c=n("./utf8"),l=n("./utils"),h=n("./stream/GenericWorker"),u=n("./stream/StreamHelper"),f=n("./defaults"),p=n("./compressedObject"),_=n("./zipObject"),g=n("./generate"),b=n("./nodejsUtils"),w=n("./nodejs/NodejsStreamInputAdapter"),v=function(T){T.slice(-1)==="/"&&(T=T.substring(0,T.length-1));var $=T.lastIndexOf("/");return 0<$?T.substring(0,$):""},E=function(T){return T.slice(-1)!=="/"&&(T+="/"),T},S=function(T,$){return $=$!==void 0?$:f.createFolders,T=E(T),this.files[T]||s.call(this,T,null,{dir:!0,createFolders:$}),this.files[T]};function C(T){return Object.prototype.toString.call(T)==="[object RegExp]"}o.exports={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(T){var $,K,W;for($ in this.files)W=this.files[$],(K=$.slice(this.root.length,$.length))&&$.slice(0,this.root.length)===this.root&&T(K,W)},filter:function(T){var $=[];return this.forEach(function(K,W){T(K,W)&&$.push(W)}),$},file:function(T,$,K){if(arguments.length!==1)return T=this.root+T,s.call(this,T,$,K),this;if(C(T)){var W=T;return this.filter(function(N,pe){return!pe.dir&&W.test(N)})}var ne=this.files[this.root+T];return ne&&!ne.dir?ne:null},folder:function(T){if(!T)return this;if(C(T))return this.filter(function(ne,N){return N.dir&&T.test(ne)});var $=this.root+T,K=S.call(this,$),W=this.clone();return W.root=K.name,W},remove:function(T){T=this.root+T;var $=this.files[T];if($||(T.slice(-1)!=="/"&&(T+="/"),$=this.files[T]),$&&!$.dir)delete this.files[T];else for(var K=this.filter(function(ne,N){return N.name.slice(0,T.length)===T}),W=0;W<K.length;W++)delete this.files[K[W].name];return this},generate:function(T){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(T){var $,K={};try{if((K=l.extend(T||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:c.utf8encode})).type=K.type.toLowerCase(),K.compression=K.compression.toUpperCase(),K.type==="binarystring"&&(K.type="string"),!K.type)throw new Error("No output type specified.");l.checkSupport(K.type),K.platform!=="darwin"&&K.platform!=="freebsd"&&K.platform!=="linux"&&K.platform!=="sunos"||(K.platform="UNIX"),K.platform==="win32"&&(K.platform="DOS");var W=K.comment||this.comment||"";$=g.generateWorker(this,K,W)}catch(ne){($=new h("error")).error(ne)}return new u($,K.type||"string",K.mimeType)},generateAsync:function(T,$){return this.generateInternalStream(T).accumulate($)},generateNodeStream:function(T,$){return(T=T||{}).type||(T.type="nodebuffer"),this.generateInternalStream(T).toNodejsStream($)}}},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(n,o,a){o.exports=n("stream")},{stream:void 0}],17:[function(n,o,a){"use strict";var s=n("./DataReader");function c(l){s.call(this,l);for(var h=0;h<this.data.length;h++)l[h]=255&l[h]}n("../utils").inherits(c,s),c.prototype.byteAt=function(l){return this.data[this.zero+l]},c.prototype.lastIndexOfSignature=function(l){for(var h=l.charCodeAt(0),u=l.charCodeAt(1),f=l.charCodeAt(2),p=l.charCodeAt(3),_=this.length-4;0<=_;--_)if(this.data[_]===h&&this.data[_+1]===u&&this.data[_+2]===f&&this.data[_+3]===p)return _-this.zero;return-1},c.prototype.readAndCheckSignature=function(l){var h=l.charCodeAt(0),u=l.charCodeAt(1),f=l.charCodeAt(2),p=l.charCodeAt(3),_=this.readData(4);return h===_[0]&&u===_[1]&&f===_[2]&&p===_[3]},c.prototype.readData=function(l){if(this.checkOffset(l),l===0)return[];var h=this.data.slice(this.zero+this.index,this.zero+this.index+l);return this.index+=l,h},o.exports=c},{"../utils":32,"./DataReader":18}],18:[function(n,o,a){"use strict";var s=n("../utils");function c(l){this.data=l,this.length=l.length,this.index=0,this.zero=0}c.prototype={checkOffset:function(l){this.checkIndex(this.index+l)},checkIndex:function(l){if(this.length<this.zero+l||l<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+l+"). Corrupted zip ?")},setIndex:function(l){this.checkIndex(l),this.index=l},skip:function(l){this.setIndex(this.index+l)},byteAt:function(l){},readInt:function(l){var h,u=0;for(this.checkOffset(l),h=this.index+l-1;h>=this.index;h--)u=(u<<8)+this.byteAt(h);return this.index+=l,u},readString:function(l){return s.transformTo("string",this.readData(l))},readData:function(l){},lastIndexOfSignature:function(l){},readAndCheckSignature:function(l){},readDate:function(){var l=this.readInt(4);return new Date(Date.UTC(1980+(l>>25&127),(l>>21&15)-1,l>>16&31,l>>11&31,l>>5&63,(31&l)<<1))}},o.exports=c},{"../utils":32}],19:[function(n,o,a){"use strict";var s=n("./Uint8ArrayReader");function c(l){s.call(this,l)}n("../utils").inherits(c,s),c.prototype.readData=function(l){this.checkOffset(l);var h=this.data.slice(this.zero+this.index,this.zero+this.index+l);return this.index+=l,h},o.exports=c},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(n,o,a){"use strict";var s=n("./DataReader");function c(l){s.call(this,l)}n("../utils").inherits(c,s),c.prototype.byteAt=function(l){return this.data.charCodeAt(this.zero+l)},c.prototype.lastIndexOfSignature=function(l){return this.data.lastIndexOf(l)-this.zero},c.prototype.readAndCheckSignature=function(l){return l===this.readData(4)},c.prototype.readData=function(l){this.checkOffset(l);var h=this.data.slice(this.zero+this.index,this.zero+this.index+l);return this.index+=l,h},o.exports=c},{"../utils":32,"./DataReader":18}],21:[function(n,o,a){"use strict";var s=n("./ArrayReader");function c(l){s.call(this,l)}n("../utils").inherits(c,s),c.prototype.readData=function(l){if(this.checkOffset(l),l===0)return new Uint8Array(0);var h=this.data.subarray(this.zero+this.index,this.zero+this.index+l);return this.index+=l,h},o.exports=c},{"../utils":32,"./ArrayReader":17}],22:[function(n,o,a){"use strict";var s=n("../utils"),c=n("../support"),l=n("./ArrayReader"),h=n("./StringReader"),u=n("./NodeBufferReader"),f=n("./Uint8ArrayReader");o.exports=function(p){var _=s.getTypeOf(p);return s.checkSupport(_),_!=="string"||c.uint8array?_==="nodebuffer"?new u(p):c.uint8array?new f(s.transformTo("uint8array",p)):new l(s.transformTo("array",p)):new h(p)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(n,o,a){"use strict";a.LOCAL_FILE_HEADER="PK",a.CENTRAL_FILE_HEADER="PK",a.CENTRAL_DIRECTORY_END="PK",a.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",a.ZIP64_CENTRAL_DIRECTORY_END="PK",a.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(n,o,a){"use strict";var s=n("./GenericWorker"),c=n("../utils");function l(h){s.call(this,"ConvertWorker to "+h),this.destType=h}c.inherits(l,s),l.prototype.processChunk=function(h){this.push({data:c.transformTo(this.destType,h.data),meta:h.meta})},o.exports=l},{"../utils":32,"./GenericWorker":28}],25:[function(n,o,a){"use strict";var s=n("./GenericWorker"),c=n("../crc32");function l(){s.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}n("../utils").inherits(l,s),l.prototype.processChunk=function(h){this.streamInfo.crc32=c(h.data,this.streamInfo.crc32||0),this.push(h)},o.exports=l},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(n,o,a){"use strict";var s=n("../utils"),c=n("./GenericWorker");function l(h){c.call(this,"DataLengthProbe for "+h),this.propName=h,this.withStreamInfo(h,0)}s.inherits(l,c),l.prototype.processChunk=function(h){if(h){var u=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=u+h.data.length}c.prototype.processChunk.call(this,h)},o.exports=l},{"../utils":32,"./GenericWorker":28}],27:[function(n,o,a){"use strict";var s=n("../utils"),c=n("./GenericWorker");function l(h){c.call(this,"DataWorker");var u=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,h.then(function(f){u.dataIsReady=!0,u.data=f,u.max=f&&f.length||0,u.type=s.getTypeOf(f),u.isPaused||u._tickAndRepeat()},function(f){u.error(f)})}s.inherits(l,c),l.prototype.cleanUp=function(){c.prototype.cleanUp.call(this),this.data=null},l.prototype.resume=function(){return!!c.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,s.delay(this._tickAndRepeat,[],this)),!0)},l.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(s.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},l.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var h=null,u=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":h=this.data.substring(this.index,u);break;case"uint8array":h=this.data.subarray(this.index,u);break;case"array":case"nodebuffer":h=this.data.slice(this.index,u)}return this.index=u,this.push({data:h,meta:{percent:this.max?this.index/this.max*100:0}})},o.exports=l},{"../utils":32,"./GenericWorker":28}],28:[function(n,o,a){"use strict";function s(c){this.name=c||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}s.prototype={push:function(c){this.emit("data",c)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(c){this.emit("error",c)}return!0},error:function(c){return!this.isFinished&&(this.isPaused?this.generatedError=c:(this.isFinished=!0,this.emit("error",c),this.previous&&this.previous.error(c),this.cleanUp()),!0)},on:function(c,l){return this._listeners[c].push(l),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(c,l){if(this._listeners[c])for(var h=0;h<this._listeners[c].length;h++)this._listeners[c][h].call(this,l)},pipe:function(c){return c.registerPrevious(this)},registerPrevious:function(c){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=c.streamInfo,this.mergeStreamInfo(),this.previous=c;var l=this;return c.on("data",function(h){l.processChunk(h)}),c.on("end",function(){l.end()}),c.on("error",function(h){l.error(h)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var c=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),c=!0),this.previous&&this.previous.resume(),!c},flush:function(){},processChunk:function(c){this.push(c)},withStreamInfo:function(c,l){return this.extraStreamInfo[c]=l,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var c in this.extraStreamInfo)this.extraStreamInfo.hasOwnProperty(c)&&(this.streamInfo[c]=this.extraStreamInfo[c])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var c="Worker "+this.name;return this.previous?this.previous+" -> "+c:c}},o.exports=s},{}],29:[function(n,o,a){"use strict";var s=n("../utils"),c=n("./ConvertWorker"),l=n("./GenericWorker"),h=n("../base64"),u=n("../support"),f=n("../external"),p=null;if(u.nodestream)try{p=n("../nodejs/NodejsStreamOutputAdapter")}catch{}function _(b,w){return new f.Promise(function(v,E){var S=[],C=b._internalType,T=b._outputType,$=b._mimeType;b.on("data",function(K,W){S.push(K),w&&w(W)}).on("error",function(K){S=[],E(K)}).on("end",function(){try{v((function(K,W,ne){switch(K){case"blob":return s.newBlob(s.transformTo("arraybuffer",W),ne);case"base64":return h.encode(W);default:return s.transformTo(K,W)}})(T,(function(K,W){var ne,N=0,pe=null,ge=0;for(ne=0;ne<W.length;ne++)ge+=W[ne].length;switch(K){case"string":return W.join("");case"array":return Array.prototype.concat.apply([],W);case"uint8array":for(pe=new Uint8Array(ge),ne=0;ne<W.length;ne++)pe.set(W[ne],N),N+=W[ne].length;return pe;case"nodebuffer":return Buffer.concat(W);default:throw new Error("concat : unsupported type '"+K+"'")}})(C,S),$))}catch(K){E(K)}S=[]}).resume()})}function g(b,w,v){var E=w;switch(w){case"blob":case"arraybuffer":E="uint8array";break;case"base64":E="string"}try{this._internalType=E,this._outputType=w,this._mimeType=v,s.checkSupport(E),this._worker=b.pipe(new c(E)),b.lock()}catch(S){this._worker=new l("error"),this._worker.error(S)}}g.prototype={accumulate:function(b){return _(this,b)},on:function(b,w){var v=this;return b==="data"?this._worker.on(b,function(E){w.call(v,E.data,E.meta)}):this._worker.on(b,function(){s.delay(w,arguments,v)}),this},resume:function(){return s.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(b){if(s.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new p(this,{objectMode:this._outputType!=="nodebuffer"},b)}},o.exports=g},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(n,o,a){"use strict";if(a.base64=!0,a.array=!0,a.string=!0,a.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",a.nodebuffer=typeof Buffer<"u",a.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")a.blob=!1;else{var s=new ArrayBuffer(0);try{a.blob=new Blob([s],{type:"application/zip"}).size===0}catch{try{var c=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);c.append(s),a.blob=c.getBlob("application/zip").size===0}catch{a.blob=!1}}}try{a.nodestream=!!n("readable-stream").Readable}catch{a.nodestream=!1}},{"readable-stream":16}],31:[function(n,o,a){"use strict";for(var s=n("./utils"),c=n("./support"),l=n("./nodejsUtils"),h=n("./stream/GenericWorker"),u=new Array(256),f=0;f<256;f++)u[f]=252<=f?6:248<=f?5:240<=f?4:224<=f?3:192<=f?2:1;u[254]=u[254]=1;function p(){h.call(this,"utf-8 decode"),this.leftOver=null}function _(){h.call(this,"utf-8 encode")}a.utf8encode=function(g){return c.nodebuffer?l.newBufferFrom(g,"utf-8"):(function(b){var w,v,E,S,C,T=b.length,$=0;for(S=0;S<T;S++)(64512&(v=b.charCodeAt(S)))==55296&&S+1<T&&(64512&(E=b.charCodeAt(S+1)))==56320&&(v=65536+(v-55296<<10)+(E-56320),S++),$+=v<128?1:v<2048?2:v<65536?3:4;for(w=c.uint8array?new Uint8Array($):new Array($),S=C=0;C<$;S++)(64512&(v=b.charCodeAt(S)))==55296&&S+1<T&&(64512&(E=b.charCodeAt(S+1)))==56320&&(v=65536+(v-55296<<10)+(E-56320),S++),v<128?w[C++]=v:(v<2048?w[C++]=192|v>>>6:(v<65536?w[C++]=224|v>>>12:(w[C++]=240|v>>>18,w[C++]=128|v>>>12&63),w[C++]=128|v>>>6&63),w[C++]=128|63&v);return w})(g)},a.utf8decode=function(g){return c.nodebuffer?s.transformTo("nodebuffer",g).toString("utf-8"):(function(b){var w,v,E,S,C=b.length,T=new Array(2*C);for(w=v=0;w<C;)if((E=b[w++])<128)T[v++]=E;else if(4<(S=u[E]))T[v++]=65533,w+=S-1;else{for(E&=S===2?31:S===3?15:7;1<S&&w<C;)E=E<<6|63&b[w++],S--;1<S?T[v++]=65533:E<65536?T[v++]=E:(E-=65536,T[v++]=55296|E>>10&1023,T[v++]=56320|1023&E)}return T.length!==v&&(T.subarray?T=T.subarray(0,v):T.length=v),s.applyFromCharCode(T)})(g=s.transformTo(c.uint8array?"uint8array":"array",g))},s.inherits(p,h),p.prototype.processChunk=function(g){var b=s.transformTo(c.uint8array?"uint8array":"array",g.data);if(this.leftOver&&this.leftOver.length){if(c.uint8array){var w=b;(b=new Uint8Array(w.length+this.leftOver.length)).set(this.leftOver,0),b.set(w,this.leftOver.length)}else b=this.leftOver.concat(b);this.leftOver=null}var v=(function(S,C){var T;for((C=C||S.length)>S.length&&(C=S.length),T=C-1;0<=T&&(192&S[T])==128;)T--;return T<0||T===0?C:T+u[S[T]]>C?T:C})(b),E=b;v!==b.length&&(c.uint8array?(E=b.subarray(0,v),this.leftOver=b.subarray(v,b.length)):(E=b.slice(0,v),this.leftOver=b.slice(v,b.length))),this.push({data:a.utf8decode(E),meta:g.meta})},p.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:a.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},a.Utf8DecodeWorker=p,s.inherits(_,h),_.prototype.processChunk=function(g){this.push({data:a.utf8encode(g.data),meta:g.meta})},a.Utf8EncodeWorker=_},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(n,o,a){"use strict";var s=n("./support"),c=n("./base64"),l=n("./nodejsUtils"),h=n("set-immediate-shim"),u=n("./external");function f(v){return v}function p(v,E){for(var S=0;S<v.length;++S)E[S]=255&v.charCodeAt(S);return E}a.newBlob=function(v,E){a.checkSupport("blob");try{return new Blob([v],{type:E})}catch{try{var S=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return S.append(v),S.getBlob(E)}catch{throw new Error("Bug : can't construct the Blob.")}}};var _={stringifyByChunk:function(v,E,S){var C=[],T=0,$=v.length;if($<=S)return String.fromCharCode.apply(null,v);for(;T<$;)E==="array"||E==="nodebuffer"?C.push(String.fromCharCode.apply(null,v.slice(T,Math.min(T+S,$)))):C.push(String.fromCharCode.apply(null,v.subarray(T,Math.min(T+S,$)))),T+=S;return C.join("")},stringifyByChar:function(v){for(var E="",S=0;S<v.length;S++)E+=String.fromCharCode(v[S]);return E},applyCanBeUsed:{uint8array:(function(){try{return s.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}})(),nodebuffer:(function(){try{return s.nodebuffer&&String.fromCharCode.apply(null,l.allocBuffer(1)).length===1}catch{return!1}})()}};function g(v){var E=65536,S=a.getTypeOf(v),C=!0;if(S==="uint8array"?C=_.applyCanBeUsed.uint8array:S==="nodebuffer"&&(C=_.applyCanBeUsed.nodebuffer),C)for(;1<E;)try{return _.stringifyByChunk(v,S,E)}catch{E=Math.floor(E/2)}return _.stringifyByChar(v)}function b(v,E){for(var S=0;S<v.length;S++)E[S]=v[S];return E}a.applyFromCharCode=g;var w={};w.string={string:f,array:function(v){return p(v,new Array(v.length))},arraybuffer:function(v){return w.string.uint8array(v).buffer},uint8array:function(v){return p(v,new Uint8Array(v.length))},nodebuffer:function(v){return p(v,l.allocBuffer(v.length))}},w.array={string:g,array:f,arraybuffer:function(v){return new Uint8Array(v).buffer},uint8array:function(v){return new Uint8Array(v)},nodebuffer:function(v){return l.newBufferFrom(v)}},w.arraybuffer={string:function(v){return g(new Uint8Array(v))},array:function(v){return b(new Uint8Array(v),new Array(v.byteLength))},arraybuffer:f,uint8array:function(v){return new Uint8Array(v)},nodebuffer:function(v){return l.newBufferFrom(new Uint8Array(v))}},w.uint8array={string:g,array:function(v){return b(v,new Array(v.length))},arraybuffer:function(v){return v.buffer},uint8array:f,nodebuffer:function(v){return l.newBufferFrom(v)}},w.nodebuffer={string:g,array:function(v){return b(v,new Array(v.length))},arraybuffer:function(v){return w.nodebuffer.uint8array(v).buffer},uint8array:function(v){return b(v,new Uint8Array(v.length))},nodebuffer:f},a.transformTo=function(v,E){return E=E||"",v?(a.checkSupport(v),w[a.getTypeOf(E)][v](E)):E},a.resolve=function(v){for(var E=v.split("/"),S=[],C=0;C<E.length;C++){var T=E[C];T==="."||T===""&&C!==0&&C!==E.length-1||(T===".."?S.pop():S.push(T))}return S.join("/")},a.getTypeOf=function(v){return typeof v=="string"?"string":Object.prototype.toString.call(v)==="[object Array]"?"array":s.nodebuffer&&l.isBuffer(v)?"nodebuffer":s.uint8array&&v instanceof Uint8Array?"uint8array":s.arraybuffer&&v instanceof ArrayBuffer?"arraybuffer":void 0},a.checkSupport=function(v){if(!s[v.toLowerCase()])throw new Error(v+" is not supported by this platform")},a.MAX_VALUE_16BITS=65535,a.MAX_VALUE_32BITS=-1,a.pretty=function(v){var E,S,C="";for(S=0;S<(v||"").length;S++)C+="\\x"+((E=v.charCodeAt(S))<16?"0":"")+E.toString(16).toUpperCase();return C},a.delay=function(v,E,S){h(function(){v.apply(S||null,E||[])})},a.inherits=function(v,E){function S(){}S.prototype=E.prototype,v.prototype=new S},a.extend=function(){var v,E,S={};for(v=0;v<arguments.length;v++)for(E in arguments[v])arguments[v].hasOwnProperty(E)&&S[E]===void 0&&(S[E]=arguments[v][E]);return S},a.prepareContent=function(v,E,S,C,T){return u.Promise.resolve(E).then(function($){return s.blob&&($ instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call($))!==-1)&&typeof FileReader<"u"?new u.Promise(function(K,W){var ne=new FileReader;ne.onload=function(N){K(N.target.result)},ne.onerror=function(N){W(N.target.error)},ne.readAsArrayBuffer($)}):$}).then(function($){var K=a.getTypeOf($);return K?(K==="arraybuffer"?$=a.transformTo("uint8array",$):K==="string"&&(T?$=c.decode($):S&&C!==!0&&($=(function(W){return p(W,s.uint8array?new Uint8Array(W.length):new Array(W.length))})($))),$):u.Promise.reject(new Error("Can't read the data of '"+v+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,"set-immediate-shim":54}],33:[function(n,o,a){"use strict";var s=n("./reader/readerFor"),c=n("./utils"),l=n("./signature"),h=n("./zipEntry"),u=(n("./utf8"),n("./support"));function f(p){this.files=[],this.loadOptions=p}f.prototype={checkSignature:function(p){if(!this.reader.readAndCheckSignature(p)){this.reader.index-=4;var _=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+c.pretty(_)+", expected "+c.pretty(p)+")")}},isSignature:function(p,_){var g=this.reader.index;this.reader.setIndex(p);var b=this.reader.readString(4)===_;return this.reader.setIndex(g),b},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var p=this.reader.readData(this.zipCommentLength),_=u.uint8array?"uint8array":"array",g=c.transformTo(_,p);this.zipComment=this.loadOptions.decodeFileName(g)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var p,_,g,b=this.zip64EndOfCentralSize-44;0<b;)p=this.reader.readInt(2),_=this.reader.readInt(4),g=this.reader.readData(_),this.zip64ExtensibleData[p]={id:p,length:_,value:g}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){for(var p=0,_;p<this.files.length;p++)_=this.files[p],this.reader.setIndex(_.localHeaderOffset),this.checkSignature(l.LOCAL_FILE_HEADER),_.readLocalPart(this.reader),_.handleUTF8(),_.processAttributes()},readCentralDir:function(){var p;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(l.CENTRAL_FILE_HEADER);)(p=new h({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(p);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var p=this.reader.lastIndexOfSignature(l.CENTRAL_DIRECTORY_END);if(p<0)throw this.isSignature(0,l.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(p);var _=p;if(this.checkSignature(l.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===c.MAX_VALUE_16BITS||this.diskWithCentralDirStart===c.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===c.MAX_VALUE_16BITS||this.centralDirRecords===c.MAX_VALUE_16BITS||this.centralDirSize===c.MAX_VALUE_32BITS||this.centralDirOffset===c.MAX_VALUE_32BITS){if(this.zip64=!0,(p=this.reader.lastIndexOfSignature(l.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(p),this.checkSignature(l.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,l.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(l.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(l.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var g=this.centralDirOffset+this.centralDirSize;this.zip64&&(g+=20,g+=12+this.zip64EndOfCentralSize);var b=_-g;if(0<b)this.isSignature(_,l.CENTRAL_FILE_HEADER)||(this.reader.zero=b);else if(b<0)throw new Error("Corrupted zip: missing "+Math.abs(b)+" bytes.")},prepareReader:function(p){this.reader=s(p)},load:function(p){this.prepareReader(p),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},o.exports=f},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utf8":31,"./utils":32,"./zipEntry":34}],34:[function(n,o,a){"use strict";var s=n("./reader/readerFor"),c=n("./utils"),l=n("./compressedObject"),h=n("./crc32"),u=n("./utf8"),f=n("./compressions"),p=n("./support");function _(g,b){this.options=g,this.loadOptions=b}_.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(g){var b,w;if(g.skip(22),this.fileNameLength=g.readInt(2),w=g.readInt(2),this.fileName=g.readData(this.fileNameLength),g.skip(w),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((b=(function(v){for(var E in f)if(f.hasOwnProperty(E)&&f[E].magic===v)return f[E];return null})(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+c.pretty(this.compressionMethod)+" unknown (inner file : "+c.transformTo("string",this.fileName)+")");this.decompressed=new l(this.compressedSize,this.uncompressedSize,this.crc32,b,g.readData(this.compressedSize))},readCentralPart:function(g){this.versionMadeBy=g.readInt(2),g.skip(2),this.bitFlag=g.readInt(2),this.compressionMethod=g.readString(2),this.date=g.readDate(),this.crc32=g.readInt(4),this.compressedSize=g.readInt(4),this.uncompressedSize=g.readInt(4);var b=g.readInt(2);if(this.extraFieldsLength=g.readInt(2),this.fileCommentLength=g.readInt(2),this.diskNumberStart=g.readInt(2),this.internalFileAttributes=g.readInt(2),this.externalFileAttributes=g.readInt(4),this.localHeaderOffset=g.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");g.skip(b),this.readExtraFields(g),this.parseZIP64ExtraField(g),this.fileComment=g.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var g=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),g==0&&(this.dosPermissions=63&this.externalFileAttributes),g==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(g){if(this.extraFields[1]){var b=s(this.extraFields[1].value);this.uncompressedSize===c.MAX_VALUE_32BITS&&(this.uncompressedSize=b.readInt(8)),this.compressedSize===c.MAX_VALUE_32BITS&&(this.compressedSize=b.readInt(8)),this.localHeaderOffset===c.MAX_VALUE_32BITS&&(this.localHeaderOffset=b.readInt(8)),this.diskNumberStart===c.MAX_VALUE_32BITS&&(this.diskNumberStart=b.readInt(4))}},readExtraFields:function(g){var b,w,v,E=g.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});g.index+4<E;)b=g.readInt(2),w=g.readInt(2),v=g.readData(w),this.extraFields[b]={id:b,length:w,value:v};g.setIndex(E)},handleUTF8:function(){var g=p.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=u.utf8decode(this.fileName),this.fileCommentStr=u.utf8decode(this.fileComment);else{var b=this.findExtraFieldUnicodePath();if(b!==null)this.fileNameStr=b;else{var w=c.transformTo(g,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(w)}var v=this.findExtraFieldUnicodeComment();if(v!==null)this.fileCommentStr=v;else{var E=c.transformTo(g,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(E)}}},findExtraFieldUnicodePath:function(){var g=this.extraFields[28789];if(g){var b=s(g.value);return b.readInt(1)!==1||h(this.fileName)!==b.readInt(4)?null:u.utf8decode(b.readData(g.length-5))}return null},findExtraFieldUnicodeComment:function(){var g=this.extraFields[25461];if(g){var b=s(g.value);return b.readInt(1)!==1||h(this.fileComment)!==b.readInt(4)?null:u.utf8decode(b.readData(g.length-5))}return null}},o.exports=_},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(n,o,a){"use strict";function s(b,w,v){this.name=b,this.dir=v.dir,this.date=v.date,this.comment=v.comment,this.unixPermissions=v.unixPermissions,this.dosPermissions=v.dosPermissions,this._data=w,this._dataBinary=v.binary,this.options={compression:v.compression,compressionOptions:v.compressionOptions}}var c=n("./stream/StreamHelper"),l=n("./stream/DataWorker"),h=n("./utf8"),u=n("./compressedObject"),f=n("./stream/GenericWorker");s.prototype={internalStream:function(b){var w=null,v="string";try{if(!b)throw new Error("No output type specified.");var E=(v=b.toLowerCase())==="string"||v==="text";v!=="binarystring"&&v!=="text"||(v="string"),w=this._decompressWorker();var S=!this._dataBinary;S&&!E&&(w=w.pipe(new h.Utf8EncodeWorker)),!S&&E&&(w=w.pipe(new h.Utf8DecodeWorker))}catch(C){(w=new f("error")).error(C)}return new c(w,v,"")},async:function(b,w){return this.internalStream(b).accumulate(w)},nodeStream:function(b,w){return this.internalStream(b||"nodebuffer").toNodejsStream(w)},_compressWorker:function(b,w){if(this._data instanceof u&&this._data.compression.magic===b.magic)return this._data.getCompressedWorker();var v=this._decompressWorker();return this._dataBinary||(v=v.pipe(new h.Utf8EncodeWorker)),u.createWorkerFrom(v,b,w)},_decompressWorker:function(){return this._data instanceof u?this._data.getContentWorker():this._data instanceof f?this._data:new l(this._data)}};for(var p=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],_=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},g=0;g<p.length;g++)s.prototype[p[g]]=_;o.exports=s},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(n,o,a){(function(s){"use strict";var c,l,h=s.MutationObserver||s.WebKitMutationObserver;if(h){var u=0,f=new h(b),p=s.document.createTextNode("");f.observe(p,{characterData:!0}),c=function(){p.data=u=++u%2}}else if(s.setImmediate||s.MessageChannel===void 0)c="document"in s&&"onreadystatechange"in s.document.createElement("script")?function(){var w=s.document.createElement("script");w.onreadystatechange=function(){b(),w.onreadystatechange=null,w.parentNode.removeChild(w),w=null},s.document.documentElement.appendChild(w)}:function(){setTimeout(b,0)};else{var _=new s.MessageChannel;_.port1.onmessage=b,c=function(){_.port2.postMessage(0)}}var g=[];function b(){var w,v;l=!0;for(var E=g.length;E;){for(v=g,g=[],w=-1;++w<E;)v[w]();E=g.length}l=!1}o.exports=function(w){g.push(w)!==1||l||c()}}).call(this,typeof global<"u"?global:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(n,o,a){"use strict";var s=n("immediate");function c(){}var l={},h=["REJECTED"],u=["FULFILLED"],f=["PENDING"];function p(E){if(typeof E!="function")throw new TypeError("resolver must be a function");this.state=f,this.queue=[],this.outcome=void 0,E!==c&&w(this,E)}function _(E,S,C){this.promise=E,typeof S=="function"&&(this.onFulfilled=S,this.callFulfilled=this.otherCallFulfilled),typeof C=="function"&&(this.onRejected=C,this.callRejected=this.otherCallRejected)}function g(E,S,C){s(function(){var T;try{T=S(C)}catch($){return l.reject(E,$)}T===E?l.reject(E,new TypeError("Cannot resolve promise with itself")):l.resolve(E,T)})}function b(E){var S=E&&E.then;if(E&&(typeof E=="object"||typeof E=="function")&&typeof S=="function")return function(){S.apply(E,arguments)}}function w(E,S){var C=!1;function T(W){C||(C=!0,l.reject(E,W))}function $(W){C||(C=!0,l.resolve(E,W))}var K=v(function(){S($,T)});K.status==="error"&&T(K.value)}function v(E,S){var C={};try{C.value=E(S),C.status="success"}catch(T){C.status="error",C.value=T}return C}(o.exports=p).prototype.finally=function(E){if(typeof E!="function")return this;var S=this.constructor;return this.then(function(C){return S.resolve(E()).then(function(){return C})},function(C){return S.resolve(E()).then(function(){throw C})})},p.prototype.catch=function(E){return this.then(null,E)},p.prototype.then=function(E,S){if(typeof E!="function"&&this.state===u||typeof S!="function"&&this.state===h)return this;var C=new this.constructor(c);return this.state!==f?g(C,this.state===u?E:S,this.outcome):this.queue.push(new _(C,E,S)),C},_.prototype.callFulfilled=function(E){l.resolve(this.promise,E)},_.prototype.otherCallFulfilled=function(E){g(this.promise,this.onFulfilled,E)},_.prototype.callRejected=function(E){l.reject(this.promise,E)},_.prototype.otherCallRejected=function(E){g(this.promise,this.onRejected,E)},l.resolve=function(E,S){var C=v(b,S);if(C.status==="error")return l.reject(E,C.value);var T=C.value;if(T)w(E,T);else{E.state=u,E.outcome=S;for(var $=-1,K=E.queue.length;++$<K;)E.queue[$].callFulfilled(S)}return E},l.reject=function(E,S){E.state=h,E.outcome=S;for(var C=-1,T=E.queue.length;++C<T;)E.queue[C].callRejected(S);return E},p.resolve=function(E){return E instanceof this?E:l.resolve(new this(c),E)},p.reject=function(E){var S=new this(c);return l.reject(S,E)},p.all=function(E){var S=this;if(Object.prototype.toString.call(E)!=="[object Array]")return this.reject(new TypeError("must be an array"));var C=E.length,T=!1;if(!C)return this.resolve([]);for(var $=new Array(C),K=0,W=-1,ne=new this(c);++W<C;)N(E[W],W);return ne;function N(pe,ge){S.resolve(pe).then(function(P){$[ge]=P,++K!==C||T||(T=!0,l.resolve(ne,$))},function(P){T||(T=!0,l.reject(ne,P))})}},p.race=function(E){var S=this;if(Object.prototype.toString.call(E)!=="[object Array]")return this.reject(new TypeError("must be an array"));var C=E.length,T=!1;if(!C)return this.resolve([]);for(var $=-1,K=new this(c);++$<C;)W=E[$],S.resolve(W).then(function(ne){T||(T=!0,l.resolve(K,ne))},function(ne){T||(T=!0,l.reject(K,ne))});var W;return K}},{immediate:36}],38:[function(n,o,a){"use strict";var s={};(0,n("./lib/utils/common").assign)(s,n("./lib/deflate"),n("./lib/inflate"),n("./lib/zlib/constants")),o.exports=s},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(n,o,a){"use strict";var s=n("./zlib/deflate"),c=n("./utils/common"),l=n("./utils/strings"),h=n("./zlib/messages"),u=n("./zlib/zstream"),f=Object.prototype.toString,p=0,_=-1,g=0,b=8;function w(E){if(!(this instanceof w))return new w(E);this.options=c.assign({level:_,method:b,chunkSize:16384,windowBits:15,memLevel:8,strategy:g,to:""},E||{});var S=this.options;S.raw&&0<S.windowBits?S.windowBits=-S.windowBits:S.gzip&&0<S.windowBits&&S.windowBits<16&&(S.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new u,this.strm.avail_out=0;var C=s.deflateInit2(this.strm,S.level,S.method,S.windowBits,S.memLevel,S.strategy);if(C!==p)throw new Error(h[C]);if(S.header&&s.deflateSetHeader(this.strm,S.header),S.dictionary){var T=typeof S.dictionary=="string"?l.string2buf(S.dictionary):f.call(S.dictionary)==="[object ArrayBuffer]"?new Uint8Array(S.dictionary):S.dictionary;if((C=s.deflateSetDictionary(this.strm,T))!==p)throw new Error(h[C]);this._dict_set=!0}}function v(E,S){var C=new w(S);if(C.push(E,!0),C.err)throw C.msg||h[C.err];return C.result}w.prototype.push=function(E,S){var C,T,$=this.strm,K=this.options.chunkSize;if(this.ended)return!1;T=S===~~S?S:S===!0?4:0,typeof E=="string"?$.input=l.string2buf(E):f.call(E)==="[object ArrayBuffer]"?$.input=new Uint8Array(E):$.input=E,$.next_in=0,$.avail_in=$.input.length;do{if($.avail_out===0&&($.output=new c.Buf8(K),$.next_out=0,$.avail_out=K),(C=s.deflate($,T))!==1&&C!==p)return this.onEnd(C),!(this.ended=!0);$.avail_out!==0&&($.avail_in!==0||T!==4&&T!==2)||(this.options.to==="string"?this.onData(l.buf2binstring(c.shrinkBuf($.output,$.next_out))):this.onData(c.shrinkBuf($.output,$.next_out)))}while((0<$.avail_in||$.avail_out===0)&&C!==1);return T===4?(C=s.deflateEnd(this.strm),this.onEnd(C),this.ended=!0,C===p):T!==2||(this.onEnd(p),!($.avail_out=0))},w.prototype.onData=function(E){this.chunks.push(E)},w.prototype.onEnd=function(E){E===p&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=c.flattenChunks(this.chunks)),this.chunks=[],this.err=E,this.msg=this.strm.msg},a.Deflate=w,a.deflate=v,a.deflateRaw=function(E,S){return(S=S||{}).raw=!0,v(E,S)},a.gzip=function(E,S){return(S=S||{}).gzip=!0,v(E,S)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(n,o,a){"use strict";var s=n("./zlib/inflate"),c=n("./utils/common"),l=n("./utils/strings"),h=n("./zlib/constants"),u=n("./zlib/messages"),f=n("./zlib/zstream"),p=n("./zlib/gzheader"),_=Object.prototype.toString;function g(w){if(!(this instanceof g))return new g(w);this.options=c.assign({chunkSize:16384,windowBits:0,to:""},w||{});var v=this.options;v.raw&&0<=v.windowBits&&v.windowBits<16&&(v.windowBits=-v.windowBits,v.windowBits===0&&(v.windowBits=-15)),!(0<=v.windowBits&&v.windowBits<16)||w&&w.windowBits||(v.windowBits+=32),15<v.windowBits&&v.windowBits<48&&(15&v.windowBits)==0&&(v.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new f,this.strm.avail_out=0;var E=s.inflateInit2(this.strm,v.windowBits);if(E!==h.Z_OK)throw new Error(u[E]);this.header=new p,s.inflateGetHeader(this.strm,this.header)}function b(w,v){var E=new g(v);if(E.push(w,!0),E.err)throw E.msg||u[E.err];return E.result}g.prototype.push=function(w,v){var E,S,C,T,$,K,W=this.strm,ne=this.options.chunkSize,N=this.options.dictionary,pe=!1;if(this.ended)return!1;S=v===~~v?v:v===!0?h.Z_FINISH:h.Z_NO_FLUSH,typeof w=="string"?W.input=l.binstring2buf(w):_.call(w)==="[object ArrayBuffer]"?W.input=new Uint8Array(w):W.input=w,W.next_in=0,W.avail_in=W.input.length;do{if(W.avail_out===0&&(W.output=new c.Buf8(ne),W.next_out=0,W.avail_out=ne),(E=s.inflate(W,h.Z_NO_FLUSH))===h.Z_NEED_DICT&&N&&(K=typeof N=="string"?l.string2buf(N):_.call(N)==="[object ArrayBuffer]"?new Uint8Array(N):N,E=s.inflateSetDictionary(this.strm,K)),E===h.Z_BUF_ERROR&&pe===!0&&(E=h.Z_OK,pe=!1),E!==h.Z_STREAM_END&&E!==h.Z_OK)return this.onEnd(E),!(this.ended=!0);W.next_out&&(W.avail_out!==0&&E!==h.Z_STREAM_END&&(W.avail_in!==0||S!==h.Z_FINISH&&S!==h.Z_SYNC_FLUSH)||(this.options.to==="string"?(C=l.utf8border(W.output,W.next_out),T=W.next_out-C,$=l.buf2string(W.output,C),W.next_out=T,W.avail_out=ne-T,T&&c.arraySet(W.output,W.output,C,T,0),this.onData($)):this.onData(c.shrinkBuf(W.output,W.next_out)))),W.avail_in===0&&W.avail_out===0&&(pe=!0)}while((0<W.avail_in||W.avail_out===0)&&E!==h.Z_STREAM_END);return E===h.Z_STREAM_END&&(S=h.Z_FINISH),S===h.Z_FINISH?(E=s.inflateEnd(this.strm),this.onEnd(E),this.ended=!0,E===h.Z_OK):S!==h.Z_SYNC_FLUSH||(this.onEnd(h.Z_OK),!(W.avail_out=0))},g.prototype.onData=function(w){this.chunks.push(w)},g.prototype.onEnd=function(w){w===h.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=c.flattenChunks(this.chunks)),this.chunks=[],this.err=w,this.msg=this.strm.msg},a.Inflate=g,a.inflate=b,a.inflateRaw=function(w,v){return(v=v||{}).raw=!0,b(w,v)},a.ungzip=b},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(n,o,a){"use strict";var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";a.assign=function(h){for(var u=Array.prototype.slice.call(arguments,1);u.length;){var f=u.shift();if(f){if(typeof f!="object")throw new TypeError(f+"must be non-object");for(var p in f)f.hasOwnProperty(p)&&(h[p]=f[p])}}return h},a.shrinkBuf=function(h,u){return h.length===u?h:h.subarray?h.subarray(0,u):(h.length=u,h)};var c={arraySet:function(h,u,f,p,_){if(u.subarray&&h.subarray)h.set(u.subarray(f,f+p),_);else for(var g=0;g<p;g++)h[_+g]=u[f+g]},flattenChunks:function(h){for(var u=p=0,f=h.length,p,_,g,b;u<f;u++)p+=h[u].length;for(b=new Uint8Array(p),u=_=0,f=h.length;u<f;u++)g=h[u],b.set(g,_),_+=g.length;return b}},l={arraySet:function(h,u,f,p,_){for(var g=0;g<p;g++)h[_+g]=u[f+g]},flattenChunks:function(h){return[].concat.apply([],h)}};a.setTyped=function(h){h?(a.Buf8=Uint8Array,a.Buf16=Uint16Array,a.Buf32=Int32Array,a.assign(a,c)):(a.Buf8=Array,a.Buf16=Array,a.Buf32=Array,a.assign(a,l))},a.setTyped(s)},{}],42:[function(n,o,a){"use strict";var s=n("./common"),c=!0,l=!0;try{String.fromCharCode.apply(null,[0])}catch{c=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{l=!1}for(var h=new s.Buf8(256),u=0;u<256;u++)h[u]=252<=u?6:248<=u?5:240<=u?4:224<=u?3:192<=u?2:1;function f(p,_){if(_<65537&&(p.subarray&&l||!p.subarray&&c))return String.fromCharCode.apply(null,s.shrinkBuf(p,_));for(var g="",b=0;b<_;b++)g+=String.fromCharCode(p[b]);return g}h[254]=h[254]=1,a.string2buf=function(p){var _,g,b,w,v,E=p.length,S=0;for(w=0;w<E;w++)(64512&(g=p.charCodeAt(w)))==55296&&w+1<E&&(64512&(b=p.charCodeAt(w+1)))==56320&&(g=65536+(g-55296<<10)+(b-56320),w++),S+=g<128?1:g<2048?2:g<65536?3:4;for(_=new s.Buf8(S),w=v=0;v<S;w++)(64512&(g=p.charCodeAt(w)))==55296&&w+1<E&&(64512&(b=p.charCodeAt(w+1)))==56320&&(g=65536+(g-55296<<10)+(b-56320),w++),g<128?_[v++]=g:(g<2048?_[v++]=192|g>>>6:(g<65536?_[v++]=224|g>>>12:(_[v++]=240|g>>>18,_[v++]=128|g>>>12&63),_[v++]=128|g>>>6&63),_[v++]=128|63&g);return _},a.buf2binstring=function(p){return f(p,p.length)},a.binstring2buf=function(p){for(var _=new s.Buf8(p.length),g=0,b=_.length;g<b;g++)_[g]=p.charCodeAt(g);return _},a.buf2string=function(p,_){var g,b,w,v,E=_||p.length,S=new Array(2*E);for(g=b=0;g<E;)if((w=p[g++])<128)S[b++]=w;else if(4<(v=h[w]))S[b++]=65533,g+=v-1;else{for(w&=v===2?31:v===3?15:7;1<v&&g<E;)w=w<<6|63&p[g++],v--;1<v?S[b++]=65533:w<65536?S[b++]=w:(w-=65536,S[b++]=55296|w>>10&1023,S[b++]=56320|1023&w)}return f(S,b)},a.utf8border=function(p,_){var g;for((_=_||p.length)>p.length&&(_=p.length),g=_-1;0<=g&&(192&p[g])==128;)g--;return g<0||g===0?_:g+h[p[g]]>_?g:_}},{"./common":41}],43:[function(n,o,a){"use strict";o.exports=function(s,c,l,h){for(var u=65535&s|0,f=s>>>16&65535|0,p=0;l!==0;){for(l-=p=2e3<l?2e3:l;f=f+(u=u+c[h++]|0)|0,--p;);u%=65521,f%=65521}return u|f<<16|0}},{}],44:[function(n,o,a){"use strict";o.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(n,o,a){"use strict";var s=(function(){for(var c,l=[],h=0;h<256;h++){c=h;for(var u=0;u<8;u++)c=1&c?3988292384^c>>>1:c>>>1;l[h]=c}return l})();o.exports=function(c,l,h,u){var f=s,p=u+h;c^=-1;for(var _=u;_<p;_++)c=c>>>8^f[255&(c^l[_])];return-1^c}},{}],46:[function(n,o,a){"use strict";var s,c=n("../utils/common"),l=n("./trees"),h=n("./adler32"),u=n("./crc32"),f=n("./messages"),p=0,_=4,g=0,b=-2,w=-1,v=4,E=2,S=8,C=9,T=286,$=30,K=19,W=2*T+1,ne=15,N=3,pe=258,ge=pe+N+1,P=42,X=113,M=1,Q=2,Ie=3,ce=4;function Re(y,te){return y.msg=f[te],te}function ae(y){return(y<<1)-(4<y?9:0)}function Ee(y){for(var te=y.length;0<=--te;)y[te]=0}function V(y){var te=y.state,U=te.pending;U>y.avail_out&&(U=y.avail_out),U!==0&&(c.arraySet(y.output,te.pending_buf,te.pending_out,U,y.next_out),y.next_out+=U,te.pending_out+=U,y.total_out+=U,y.avail_out-=U,te.pending-=U,te.pending===0&&(te.pending_out=0))}function G(y,te){l._tr_flush_block(y,0<=y.block_start?y.block_start:-1,y.strstart-y.block_start,te),y.block_start=y.strstart,V(y.strm)}function ye(y,te){y.pending_buf[y.pending++]=te}function me(y,te){y.pending_buf[y.pending++]=te>>>8&255,y.pending_buf[y.pending++]=255&te}function fe(y,te){var U,O,I=y.max_chain_length,B=y.strstart,ie=y.prev_length,se=y.nice_match,F=y.strstart>y.w_size-ge?y.strstart-(y.w_size-ge):0,de=y.window,ve=y.w_mask,ue=y.prev,Ae=y.strstart+pe,Xe=de[B+ie-1],je=de[B+ie];y.prev_length>=y.good_match&&(I>>=2),se>y.lookahead&&(se=y.lookahead);do if(de[(U=te)+ie]===je&&de[U+ie-1]===Xe&&de[U]===de[B]&&de[++U]===de[B+1]){B+=2,U++;do;while(de[++B]===de[++U]&&de[++B]===de[++U]&&de[++B]===de[++U]&&de[++B]===de[++U]&&de[++B]===de[++U]&&de[++B]===de[++U]&&de[++B]===de[++U]&&de[++B]===de[++U]&&B<Ae);if(O=pe-(Ae-B),B=Ae-pe,ie<O){if(y.match_start=te,se<=(ie=O))break;Xe=de[B+ie-1],je=de[B+ie]}}while((te=ue[te&ve])>F&&--I!=0);return ie<=y.lookahead?ie:y.lookahead}function ot(y){var te,U,O,I,B,ie,se,F,de,ve,ue=y.w_size;do{if(I=y.window_size-y.lookahead-y.strstart,y.strstart>=ue+(ue-ge)){for(c.arraySet(y.window,y.window,ue,ue,0),y.match_start-=ue,y.strstart-=ue,y.block_start-=ue,te=U=y.hash_size;O=y.head[--te],y.head[te]=ue<=O?O-ue:0,--U;);for(te=U=ue;O=y.prev[--te],y.prev[te]=ue<=O?O-ue:0,--U;);I+=ue}if(y.strm.avail_in===0)break;if(ie=y.strm,se=y.window,F=y.strstart+y.lookahead,de=I,ve=void 0,ve=ie.avail_in,de<ve&&(ve=de),U=ve===0?0:(ie.avail_in-=ve,c.arraySet(se,ie.input,ie.next_in,ve,F),ie.state.wrap===1?ie.adler=h(ie.adler,se,ve,F):ie.state.wrap===2&&(ie.adler=u(ie.adler,se,ve,F)),ie.next_in+=ve,ie.total_in+=ve,ve),y.lookahead+=U,y.lookahead+y.insert>=N)for(B=y.strstart-y.insert,y.ins_h=y.window[B],y.ins_h=(y.ins_h<<y.hash_shift^y.window[B+1])&y.hash_mask;y.insert&&(y.ins_h=(y.ins_h<<y.hash_shift^y.window[B+N-1])&y.hash_mask,y.prev[B&y.w_mask]=y.head[y.ins_h],y.head[y.ins_h]=B,B++,y.insert--,!(y.lookahead+y.insert<N)););}while(y.lookahead<ge&&y.strm.avail_in!==0)}function ht(y,te){for(var U,O;;){if(y.lookahead<ge){if(ot(y),y.lookahead<ge&&te===p)return M;if(y.lookahead===0)break}if(U=0,y.lookahead>=N&&(y.ins_h=(y.ins_h<<y.hash_shift^y.window[y.strstart+N-1])&y.hash_mask,U=y.prev[y.strstart&y.w_mask]=y.head[y.ins_h],y.head[y.ins_h]=y.strstart),U!==0&&y.strstart-U<=y.w_size-ge&&(y.match_length=fe(y,U)),y.match_length>=N)if(O=l._tr_tally(y,y.strstart-y.match_start,y.match_length-N),y.lookahead-=y.match_length,y.match_length<=y.max_lazy_match&&y.lookahead>=N){for(y.match_length--;y.strstart++,y.ins_h=(y.ins_h<<y.hash_shift^y.window[y.strstart+N-1])&y.hash_mask,U=y.prev[y.strstart&y.w_mask]=y.head[y.ins_h],y.head[y.ins_h]=y.strstart,--y.match_length!=0;);y.strstart++}else y.strstart+=y.match_length,y.match_length=0,y.ins_h=y.window[y.strstart],y.ins_h=(y.ins_h<<y.hash_shift^y.window[y.strstart+1])&y.hash_mask;else O=l._tr_tally(y,0,y.window[y.strstart]),y.lookahead--,y.strstart++;if(O&&(G(y,!1),y.strm.avail_out===0))return M}return y.insert=y.strstart<N-1?y.strstart:N-1,te===_?(G(y,!0),y.strm.avail_out===0?Ie:ce):y.last_lit&&(G(y,!1),y.strm.avail_out===0)?M:Q}function Ge(y,te){for(var U,O,I;;){if(y.lookahead<ge){if(ot(y),y.lookahead<ge&&te===p)return M;if(y.lookahead===0)break}if(U=0,y.lookahead>=N&&(y.ins_h=(y.ins_h<<y.hash_shift^y.window[y.strstart+N-1])&y.hash_mask,U=y.prev[y.strstart&y.w_mask]=y.head[y.ins_h],y.head[y.ins_h]=y.strstart),y.prev_length=y.match_length,y.prev_match=y.match_start,y.match_length=N-1,U!==0&&y.prev_length<y.max_lazy_match&&y.strstart-U<=y.w_size-ge&&(y.match_length=fe(y,U),y.match_length<=5&&(y.strategy===1||y.match_length===N&&4096<y.strstart-y.match_start)&&(y.match_length=N-1)),y.prev_length>=N&&y.match_length<=y.prev_length){for(I=y.strstart+y.lookahead-N,O=l._tr_tally(y,y.strstart-1-y.prev_match,y.prev_length-N),y.lookahead-=y.prev_length-1,y.prev_length-=2;++y.strstart<=I&&(y.ins_h=(y.ins_h<<y.hash_shift^y.window[y.strstart+N-1])&y.hash_mask,U=y.prev[y.strstart&y.w_mask]=y.head[y.ins_h],y.head[y.ins_h]=y.strstart),--y.prev_length!=0;);if(y.match_available=0,y.match_length=N-1,y.strstart++,O&&(G(y,!1),y.strm.avail_out===0))return M}else if(y.match_available){if((O=l._tr_tally(y,0,y.window[y.strstart-1]))&&G(y,!1),y.strstart++,y.lookahead--,y.strm.avail_out===0)return M}else y.match_available=1,y.strstart++,y.lookahead--}return y.match_available&&(O=l._tr_tally(y,0,y.window[y.strstart-1]),y.match_available=0),y.insert=y.strstart<N-1?y.strstart:N-1,te===_?(G(y,!0),y.strm.avail_out===0?Ie:ce):y.last_lit&&(G(y,!1),y.strm.avail_out===0)?M:Q}function Ze(y,te,U,O,I){this.good_length=y,this.max_lazy=te,this.nice_length=U,this.max_chain=O,this.func=I}function gt(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=S,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new c.Buf16(2*W),this.dyn_dtree=new c.Buf16(2*(2*$+1)),this.bl_tree=new c.Buf16(2*(2*K+1)),Ee(this.dyn_ltree),Ee(this.dyn_dtree),Ee(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new c.Buf16(ne+1),this.heap=new c.Buf16(2*T+1),Ee(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new c.Buf16(2*T+1),Ee(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function it(y){var te;return y&&y.state?(y.total_in=y.total_out=0,y.data_type=E,(te=y.state).pending=0,te.pending_out=0,te.wrap<0&&(te.wrap=-te.wrap),te.status=te.wrap?P:X,y.adler=te.wrap===2?0:1,te.last_flush=p,l._tr_init(te),g):Re(y,b)}function Tr(y){var te=it(y);return te===g&&(function(U){U.window_size=2*U.w_size,Ee(U.head),U.max_lazy_match=s[U.level].max_lazy,U.good_match=s[U.level].good_length,U.nice_match=s[U.level].nice_length,U.max_chain_length=s[U.level].max_chain,U.strstart=0,U.block_start=0,U.lookahead=0,U.insert=0,U.match_length=U.prev_length=N-1,U.match_available=0,U.ins_h=0})(y.state),te}function Ut(y,te,U,O,I,B){if(!y)return b;var ie=1;if(te===w&&(te=6),O<0?(ie=0,O=-O):15<O&&(ie=2,O-=16),I<1||C<I||U!==S||O<8||15<O||te<0||9<te||B<0||v<B)return Re(y,b);O===8&&(O=9);var se=new gt;return(y.state=se).strm=y,se.wrap=ie,se.gzhead=null,se.w_bits=O,se.w_size=1<<se.w_bits,se.w_mask=se.w_size-1,se.hash_bits=I+7,se.hash_size=1<<se.hash_bits,se.hash_mask=se.hash_size-1,se.hash_shift=~~((se.hash_bits+N-1)/N),se.window=new c.Buf8(2*se.w_size),se.head=new c.Buf16(se.hash_size),se.prev=new c.Buf16(se.w_size),se.lit_bufsize=1<<I+6,se.pending_buf_size=4*se.lit_bufsize,se.pending_buf=new c.Buf8(se.pending_buf_size),se.d_buf=1*se.lit_bufsize,se.l_buf=3*se.lit_bufsize,se.level=te,se.strategy=B,se.method=U,Tr(y)}s=[new Ze(0,0,0,0,function(y,te){var U=65535;for(U>y.pending_buf_size-5&&(U=y.pending_buf_size-5);;){if(y.lookahead<=1){if(ot(y),y.lookahead===0&&te===p)return M;if(y.lookahead===0)break}y.strstart+=y.lookahead,y.lookahead=0;var O=y.block_start+U;if((y.strstart===0||y.strstart>=O)&&(y.lookahead=y.strstart-O,y.strstart=O,G(y,!1),y.strm.avail_out===0)||y.strstart-y.block_start>=y.w_size-ge&&(G(y,!1),y.strm.avail_out===0))return M}return y.insert=0,te===_?(G(y,!0),y.strm.avail_out===0?Ie:ce):(y.strstart>y.block_start&&(G(y,!1),y.strm.avail_out),M)}),new Ze(4,4,8,4,ht),new Ze(4,5,16,8,ht),new Ze(4,6,32,32,ht),new Ze(4,4,16,16,Ge),new Ze(8,16,32,32,Ge),new Ze(8,16,128,128,Ge),new Ze(8,32,128,256,Ge),new Ze(32,128,258,1024,Ge),new Ze(32,258,258,4096,Ge)],a.deflateInit=function(y,te){return Ut(y,te,S,15,8,0)},a.deflateInit2=Ut,a.deflateReset=Tr,a.deflateResetKeep=it,a.deflateSetHeader=function(y,te){return y&&y.state?y.state.wrap!==2?b:(y.state.gzhead=te,g):b},a.deflate=function(y,te){var U,O,I,B;if(!y||!y.state||5<te||te<0)return y?Re(y,b):b;if(O=y.state,!y.output||!y.input&&y.avail_in!==0||O.status===666&&te!==_)return Re(y,y.avail_out===0?-5:b);if(O.strm=y,U=O.last_flush,O.last_flush=te,O.status===P)if(O.wrap===2)y.adler=0,ye(O,31),ye(O,139),ye(O,8),O.gzhead?(ye(O,(O.gzhead.text?1:0)+(O.gzhead.hcrc?2:0)+(O.gzhead.extra?4:0)+(O.gzhead.name?8:0)+(O.gzhead.comment?16:0)),ye(O,255&O.gzhead.time),ye(O,O.gzhead.time>>8&255),ye(O,O.gzhead.time>>16&255),ye(O,O.gzhead.time>>24&255),ye(O,O.level===9?2:2<=O.strategy||O.level<2?4:0),ye(O,255&O.gzhead.os),O.gzhead.extra&&O.gzhead.extra.length&&(ye(O,255&O.gzhead.extra.length),ye(O,O.gzhead.extra.length>>8&255)),O.gzhead.hcrc&&(y.adler=u(y.adler,O.pending_buf,O.pending,0)),O.gzindex=0,O.status=69):(ye(O,0),ye(O,0),ye(O,0),ye(O,0),ye(O,0),ye(O,O.level===9?2:2<=O.strategy||O.level<2?4:0),ye(O,3),O.status=X);else{var ie=S+(O.w_bits-8<<4)<<8;ie|=(2<=O.strategy||O.level<2?0:O.level<6?1:O.level===6?2:3)<<6,O.strstart!==0&&(ie|=32),ie+=31-ie%31,O.status=X,me(O,ie),O.strstart!==0&&(me(O,y.adler>>>16),me(O,65535&y.adler)),y.adler=1}if(O.status===69)if(O.gzhead.extra){for(I=O.pending;O.gzindex<(65535&O.gzhead.extra.length)&&(O.pending!==O.pending_buf_size||(O.gzhead.hcrc&&O.pending>I&&(y.adler=u(y.adler,O.pending_buf,O.pending-I,I)),V(y),I=O.pending,O.pending!==O.pending_buf_size));)ye(O,255&O.gzhead.extra[O.gzindex]),O.gzindex++;O.gzhead.hcrc&&O.pending>I&&(y.adler=u(y.adler,O.pending_buf,O.pending-I,I)),O.gzindex===O.gzhead.extra.length&&(O.gzindex=0,O.status=73)}else O.status=73;if(O.status===73)if(O.gzhead.name){I=O.pending;do{if(O.pending===O.pending_buf_size&&(O.gzhead.hcrc&&O.pending>I&&(y.adler=u(y.adler,O.pending_buf,O.pending-I,I)),V(y),I=O.pending,O.pending===O.pending_buf_size)){B=1;break}B=O.gzindex<O.gzhead.name.length?255&O.gzhead.name.charCodeAt(O.gzindex++):0,ye(O,B)}while(B!==0);O.gzhead.hcrc&&O.pending>I&&(y.adler=u(y.adler,O.pending_buf,O.pending-I,I)),B===0&&(O.gzindex=0,O.status=91)}else O.status=91;if(O.status===91)if(O.gzhead.comment){I=O.pending;do{if(O.pending===O.pending_buf_size&&(O.gzhead.hcrc&&O.pending>I&&(y.adler=u(y.adler,O.pending_buf,O.pending-I,I)),V(y),I=O.pending,O.pending===O.pending_buf_size)){B=1;break}B=O.gzindex<O.gzhead.comment.length?255&O.gzhead.comment.charCodeAt(O.gzindex++):0,ye(O,B)}while(B!==0);O.gzhead.hcrc&&O.pending>I&&(y.adler=u(y.adler,O.pending_buf,O.pending-I,I)),B===0&&(O.status=103)}else O.status=103;if(O.status===103&&(O.gzhead.hcrc?(O.pending+2>O.pending_buf_size&&V(y),O.pending+2<=O.pending_buf_size&&(ye(O,255&y.adler),ye(O,y.adler>>8&255),y.adler=0,O.status=X)):O.status=X),O.pending!==0){if(V(y),y.avail_out===0)return O.last_flush=-1,g}else if(y.avail_in===0&&ae(te)<=ae(U)&&te!==_)return Re(y,-5);if(O.status===666&&y.avail_in!==0)return Re(y,-5);if(y.avail_in!==0||O.lookahead!==0||te!==p&&O.status!==666){var se=O.strategy===2?(function(F,de){for(var ve;;){if(F.lookahead===0&&(ot(F),F.lookahead===0)){if(de===p)return M;break}if(F.match_length=0,ve=l._tr_tally(F,0,F.window[F.strstart]),F.lookahead--,F.strstart++,ve&&(G(F,!1),F.strm.avail_out===0))return M}return F.insert=0,de===_?(G(F,!0),F.strm.avail_out===0?Ie:ce):F.last_lit&&(G(F,!1),F.strm.avail_out===0)?M:Q})(O,te):O.strategy===3?(function(F,de){for(var ve,ue,Ae,Xe,je=F.window;;){if(F.lookahead<=pe){if(ot(F),F.lookahead<=pe&&de===p)return M;if(F.lookahead===0)break}if(F.match_length=0,F.lookahead>=N&&0<F.strstart&&(ue=je[Ae=F.strstart-1])===je[++Ae]&&ue===je[++Ae]&&ue===je[++Ae]){Xe=F.strstart+pe;do;while(ue===je[++Ae]&&ue===je[++Ae]&&ue===je[++Ae]&&ue===je[++Ae]&&ue===je[++Ae]&&ue===je[++Ae]&&ue===je[++Ae]&&ue===je[++Ae]&&Ae<Xe);F.match_length=pe-(Xe-Ae),F.match_length>F.lookahead&&(F.match_length=F.lookahead)}if(F.match_length>=N?(ve=l._tr_tally(F,1,F.match_length-N),F.lookahead-=F.match_length,F.strstart+=F.match_length,F.match_length=0):(ve=l._tr_tally(F,0,F.window[F.strstart]),F.lookahead--,F.strstart++),ve&&(G(F,!1),F.strm.avail_out===0))return M}return F.insert=0,de===_?(G(F,!0),F.strm.avail_out===0?Ie:ce):F.last_lit&&(G(F,!1),F.strm.avail_out===0)?M:Q})(O,te):s[O.level].func(O,te);if(se!==Ie&&se!==ce||(O.status=666),se===M||se===Ie)return y.avail_out===0&&(O.last_flush=-1),g;if(se===Q&&(te===1?l._tr_align(O):te!==5&&(l._tr_stored_block(O,0,0,!1),te===3&&(Ee(O.head),O.lookahead===0&&(O.strstart=0,O.block_start=0,O.insert=0))),V(y),y.avail_out===0))return O.last_flush=-1,g}return te!==_?g:O.wrap<=0?1:(O.wrap===2?(ye(O,255&y.adler),ye(O,y.adler>>8&255),ye(O,y.adler>>16&255),ye(O,y.adler>>24&255),ye(O,255&y.total_in),ye(O,y.total_in>>8&255),ye(O,y.total_in>>16&255),ye(O,y.total_in>>24&255)):(me(O,y.adler>>>16),me(O,65535&y.adler)),V(y),0<O.wrap&&(O.wrap=-O.wrap),O.pending!==0?g:1)},a.deflateEnd=function(y){var te;return y&&y.state?(te=y.state.status)!==P&&te!==69&&te!==73&&te!==91&&te!==103&&te!==X&&te!==666?Re(y,b):(y.state=null,te===X?Re(y,-3):g):b},a.deflateSetDictionary=function(y,te){var U,O,I,B,ie,se,F,de,ve=te.length;if(!y||!y.state||(B=(U=y.state).wrap)===2||B===1&&U.status!==P||U.lookahead)return b;for(B===1&&(y.adler=h(y.adler,te,ve,0)),U.wrap=0,ve>=U.w_size&&(B===0&&(Ee(U.head),U.strstart=0,U.block_start=0,U.insert=0),de=new c.Buf8(U.w_size),c.arraySet(de,te,ve-U.w_size,U.w_size,0),te=de,ve=U.w_size),ie=y.avail_in,se=y.next_in,F=y.input,y.avail_in=ve,y.next_in=0,y.input=te,ot(U);U.lookahead>=N;){for(O=U.strstart,I=U.lookahead-(N-1);U.ins_h=(U.ins_h<<U.hash_shift^U.window[O+N-1])&U.hash_mask,U.prev[O&U.w_mask]=U.head[U.ins_h],U.head[U.ins_h]=O,O++,--I;);U.strstart=O,U.lookahead=N-1,ot(U)}return U.strstart+=U.lookahead,U.block_start=U.strstart,U.insert=U.lookahead,U.lookahead=0,U.match_length=U.prev_length=N-1,U.match_available=0,y.next_in=se,y.input=F,y.avail_in=ie,U.wrap=B,g},a.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(n,o,a){"use strict";o.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(n,o,a){"use strict";o.exports=function(s,c){var l=s.state,h=s.next_in,u,f,p,_,g,b,w,v,E,S,C,T,$,K,W,ne,N,pe,ge,P,X,M=s.input,Q;u=h+(s.avail_in-5),f=s.next_out,Q=s.output,p=f-(c-s.avail_out),_=f+(s.avail_out-257),g=l.dmax,b=l.wsize,w=l.whave,v=l.wnext,E=l.window,S=l.hold,C=l.bits,T=l.lencode,$=l.distcode,K=(1<<l.lenbits)-1,W=(1<<l.distbits)-1;e:do{C<15&&(S+=M[h++]<<C,C+=8,S+=M[h++]<<C,C+=8),ne=T[S&K];t:for(;;){if(S>>>=N=ne>>>24,C-=N,(N=ne>>>16&255)===0)Q[f++]=65535&ne;else{if(!(16&N)){if((64&N)==0){ne=T[(65535&ne)+(S&(1<<N)-1)];continue t}if(32&N){l.mode=12;break e}s.msg="invalid literal/length code",l.mode=30;break e}pe=65535&ne,(N&=15)&&(C<N&&(S+=M[h++]<<C,C+=8),pe+=S&(1<<N)-1,S>>>=N,C-=N),C<15&&(S+=M[h++]<<C,C+=8,S+=M[h++]<<C,C+=8),ne=$[S&W];r:for(;;){if(S>>>=N=ne>>>24,C-=N,!(16&(N=ne>>>16&255))){if((64&N)==0){ne=$[(65535&ne)+(S&(1<<N)-1)];continue r}s.msg="invalid distance code",l.mode=30;break e}if(ge=65535&ne,C<(N&=15)&&(S+=M[h++]<<C,(C+=8)<N&&(S+=M[h++]<<C,C+=8)),g<(ge+=S&(1<<N)-1)){s.msg="invalid distance too far back",l.mode=30;break e}if(S>>>=N,C-=N,(N=f-p)<ge){if(w<(N=ge-N)&&l.sane){s.msg="invalid distance too far back",l.mode=30;break e}if(X=E,(P=0)===v){if(P+=b-N,N<pe){for(pe-=N;Q[f++]=E[P++],--N;);P=f-ge,X=Q}}else if(v<N){if(P+=b+v-N,(N-=v)<pe){for(pe-=N;Q[f++]=E[P++],--N;);if(P=0,v<pe){for(pe-=N=v;Q[f++]=E[P++],--N;);P=f-ge,X=Q}}}else if(P+=v-N,N<pe){for(pe-=N;Q[f++]=E[P++],--N;);P=f-ge,X=Q}for(;2<pe;)Q[f++]=X[P++],Q[f++]=X[P++],Q[f++]=X[P++],pe-=3;pe&&(Q[f++]=X[P++],1<pe&&(Q[f++]=X[P++]))}else{for(P=f-ge;Q[f++]=Q[P++],Q[f++]=Q[P++],Q[f++]=Q[P++],2<(pe-=3););pe&&(Q[f++]=Q[P++],1<pe&&(Q[f++]=Q[P++]))}break}}break}}while(h<u&&f<_);h-=pe=C>>3,S&=(1<<(C-=pe<<3))-1,s.next_in=h,s.next_out=f,s.avail_in=h<u?u-h+5:5-(h-u),s.avail_out=f<_?_-f+257:257-(f-_),l.hold=S,l.bits=C}},{}],49:[function(n,o,a){"use strict";var s=n("../utils/common"),c=n("./adler32"),l=n("./crc32"),h=n("./inffast"),u=n("./inftrees"),f=1,p=2,_=0,g=-2,b=1,w=852,v=592;function E(P){return(P>>>24&255)+(P>>>8&65280)+((65280&P)<<8)+((255&P)<<24)}function S(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new s.Buf16(320),this.work=new s.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function C(P){var X;return P&&P.state?(X=P.state,P.total_in=P.total_out=X.total=0,P.msg="",X.wrap&&(P.adler=1&X.wrap),X.mode=b,X.last=0,X.havedict=0,X.dmax=32768,X.head=null,X.hold=0,X.bits=0,X.lencode=X.lendyn=new s.Buf32(w),X.distcode=X.distdyn=new s.Buf32(v),X.sane=1,X.back=-1,_):g}function T(P){var X;return P&&P.state?((X=P.state).wsize=0,X.whave=0,X.wnext=0,C(P)):g}function $(P,X){var M,Q;return P&&P.state?(Q=P.state,X<0?(M=0,X=-X):(M=1+(X>>4),X<48&&(X&=15)),X&&(X<8||15<X)?g:(Q.window!==null&&Q.wbits!==X&&(Q.window=null),Q.wrap=M,Q.wbits=X,T(P))):g}function K(P,X){var M,Q;return P?(Q=new S,(P.state=Q).window=null,(M=$(P,X))!==_&&(P.state=null),M):g}var W,ne,N=!0;function pe(P){if(N){var X;for(W=new s.Buf32(512),ne=new s.Buf32(32),X=0;X<144;)P.lens[X++]=8;for(;X<256;)P.lens[X++]=9;for(;X<280;)P.lens[X++]=7;for(;X<288;)P.lens[X++]=8;for(u(f,P.lens,0,288,W,0,P.work,{bits:9}),X=0;X<32;)P.lens[X++]=5;u(p,P.lens,0,32,ne,0,P.work,{bits:5}),N=!1}P.lencode=W,P.lenbits=9,P.distcode=ne,P.distbits=5}function ge(P,X,M,Q){var Ie,ce=P.state;return ce.window===null&&(ce.wsize=1<<ce.wbits,ce.wnext=0,ce.whave=0,ce.window=new s.Buf8(ce.wsize)),Q>=ce.wsize?(s.arraySet(ce.window,X,M-ce.wsize,ce.wsize,0),ce.wnext=0,ce.whave=ce.wsize):(Q<(Ie=ce.wsize-ce.wnext)&&(Ie=Q),s.arraySet(ce.window,X,M-Q,Ie,ce.wnext),(Q-=Ie)?(s.arraySet(ce.window,X,M-Q,Q,0),ce.wnext=Q,ce.whave=ce.wsize):(ce.wnext+=Ie,ce.wnext===ce.wsize&&(ce.wnext=0),ce.whave<ce.wsize&&(ce.whave+=Ie))),0}a.inflateReset=T,a.inflateReset2=$,a.inflateResetKeep=C,a.inflateInit=function(P){return K(P,15)},a.inflateInit2=K,a.inflate=function(P,X){var M,Q,Ie,ce,Re,ae,Ee,V,G,ye,me,fe,ot,ht,Ge,Ze,gt,it,Tr,Ut,y,te,U,O,I=0,B=new s.Buf8(4),ie=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!P||!P.state||!P.output||!P.input&&P.avail_in!==0)return g;(M=P.state).mode===12&&(M.mode=13),Re=P.next_out,Ie=P.output,Ee=P.avail_out,ce=P.next_in,Q=P.input,ae=P.avail_in,V=M.hold,G=M.bits,ye=ae,me=Ee,te=_;e:for(;;)switch(M.mode){case b:if(M.wrap===0){M.mode=13;break}for(;G<16;){if(ae===0)break e;ae--,V+=Q[ce++]<<G,G+=8}if(2&M.wrap&&V===35615){B[M.check=0]=255&V,B[1]=V>>>8&255,M.check=l(M.check,B,2,0),G=V=0,M.mode=2;break}if(M.flags=0,M.head&&(M.head.done=!1),!(1&M.wrap)||(((255&V)<<8)+(V>>8))%31){P.msg="incorrect header check",M.mode=30;break}if((15&V)!=8){P.msg="unknown compression method",M.mode=30;break}if(G-=4,y=8+(15&(V>>>=4)),M.wbits===0)M.wbits=y;else if(y>M.wbits){P.msg="invalid window size",M.mode=30;break}M.dmax=1<<y,P.adler=M.check=1,M.mode=512&V?10:12,G=V=0;break;case 2:for(;G<16;){if(ae===0)break e;ae--,V+=Q[ce++]<<G,G+=8}if(M.flags=V,(255&M.flags)!=8){P.msg="unknown compression method",M.mode=30;break}if(57344&M.flags){P.msg="unknown header flags set",M.mode=30;break}M.head&&(M.head.text=V>>8&1),512&M.flags&&(B[0]=255&V,B[1]=V>>>8&255,M.check=l(M.check,B,2,0)),G=V=0,M.mode=3;case 3:for(;G<32;){if(ae===0)break e;ae--,V+=Q[ce++]<<G,G+=8}M.head&&(M.head.time=V),512&M.flags&&(B[0]=255&V,B[1]=V>>>8&255,B[2]=V>>>16&255,B[3]=V>>>24&255,M.check=l(M.check,B,4,0)),G=V=0,M.mode=4;case 4:for(;G<16;){if(ae===0)break e;ae--,V+=Q[ce++]<<G,G+=8}M.head&&(M.head.xflags=255&V,M.head.os=V>>8),512&M.flags&&(B[0]=255&V,B[1]=V>>>8&255,M.check=l(M.check,B,2,0)),G=V=0,M.mode=5;case 5:if(1024&M.flags){for(;G<16;){if(ae===0)break e;ae--,V+=Q[ce++]<<G,G+=8}M.length=V,M.head&&(M.head.extra_len=V),512&M.flags&&(B[0]=255&V,B[1]=V>>>8&255,M.check=l(M.check,B,2,0)),G=V=0}else M.head&&(M.head.extra=null);M.mode=6;case 6:if(1024&M.flags&&(ae<(fe=M.length)&&(fe=ae),fe&&(M.head&&(y=M.head.extra_len-M.length,M.head.extra||(M.head.extra=new Array(M.head.extra_len)),s.arraySet(M.head.extra,Q,ce,fe,y)),512&M.flags&&(M.check=l(M.check,Q,fe,ce)),ae-=fe,ce+=fe,M.length-=fe),M.length))break e;M.length=0,M.mode=7;case 7:if(2048&M.flags){if(ae===0)break e;for(fe=0;y=Q[ce+fe++],M.head&&y&&M.length<65536&&(M.head.name+=String.fromCharCode(y)),y&&fe<ae;);if(512&M.flags&&(M.check=l(M.check,Q,fe,ce)),ae-=fe,ce+=fe,y)break e}else M.head&&(M.head.name=null);M.length=0,M.mode=8;case 8:if(4096&M.flags){if(ae===0)break e;for(fe=0;y=Q[ce+fe++],M.head&&y&&M.length<65536&&(M.head.comment+=String.fromCharCode(y)),y&&fe<ae;);if(512&M.flags&&(M.check=l(M.check,Q,fe,ce)),ae-=fe,ce+=fe,y)break e}else M.head&&(M.head.comment=null);M.mode=9;case 9:if(512&M.flags){for(;G<16;){if(ae===0)break e;ae--,V+=Q[ce++]<<G,G+=8}if(V!==(65535&M.check)){P.msg="header crc mismatch",M.mode=30;break}G=V=0}M.head&&(M.head.hcrc=M.flags>>9&1,M.head.done=!0),P.adler=M.check=0,M.mode=12;break;case 10:for(;G<32;){if(ae===0)break e;ae--,V+=Q[ce++]<<G,G+=8}P.adler=M.check=E(V),G=V=0,M.mode=11;case 11:if(M.havedict===0)return P.next_out=Re,P.avail_out=Ee,P.next_in=ce,P.avail_in=ae,M.hold=V,M.bits=G,2;P.adler=M.check=1,M.mode=12;case 12:if(X===5||X===6)break e;case 13:if(M.last){V>>>=7&G,G-=7&G,M.mode=27;break}for(;G<3;){if(ae===0)break e;ae--,V+=Q[ce++]<<G,G+=8}switch(M.last=1&V,G-=1,3&(V>>>=1)){case 0:M.mode=14;break;case 1:if(pe(M),M.mode=20,X!==6)break;V>>>=2,G-=2;break e;case 2:M.mode=17;break;case 3:P.msg="invalid block type",M.mode=30}V>>>=2,G-=2;break;case 14:for(V>>>=7&G,G-=7&G;G<32;){if(ae===0)break e;ae--,V+=Q[ce++]<<G,G+=8}if((65535&V)!=(V>>>16^65535)){P.msg="invalid stored block lengths",M.mode=30;break}if(M.length=65535&V,G=V=0,M.mode=15,X===6)break e;case 15:M.mode=16;case 16:if(fe=M.length){if(ae<fe&&(fe=ae),Ee<fe&&(fe=Ee),fe===0)break e;s.arraySet(Ie,Q,ce,fe,Re),ae-=fe,ce+=fe,Ee-=fe,Re+=fe,M.length-=fe;break}M.mode=12;break;case 17:for(;G<14;){if(ae===0)break e;ae--,V+=Q[ce++]<<G,G+=8}if(M.nlen=257+(31&V),V>>>=5,G-=5,M.ndist=1+(31&V),V>>>=5,G-=5,M.ncode=4+(15&V),V>>>=4,G-=4,286<M.nlen||30<M.ndist){P.msg="too many length or distance symbols",M.mode=30;break}M.have=0,M.mode=18;case 18:for(;M.have<M.ncode;){for(;G<3;){if(ae===0)break e;ae--,V+=Q[ce++]<<G,G+=8}M.lens[ie[M.have++]]=7&V,V>>>=3,G-=3}for(;M.have<19;)M.lens[ie[M.have++]]=0;if(M.lencode=M.lendyn,M.lenbits=7,U={bits:M.lenbits},te=u(0,M.lens,0,19,M.lencode,0,M.work,U),M.lenbits=U.bits,te){P.msg="invalid code lengths set",M.mode=30;break}M.have=0,M.mode=19;case 19:for(;M.have<M.nlen+M.ndist;){for(;Ze=(I=M.lencode[V&(1<<M.lenbits)-1])>>>16&255,gt=65535&I,!((Ge=I>>>24)<=G);){if(ae===0)break e;ae--,V+=Q[ce++]<<G,G+=8}if(gt<16)V>>>=Ge,G-=Ge,M.lens[M.have++]=gt;else{if(gt===16){for(O=Ge+2;G<O;){if(ae===0)break e;ae--,V+=Q[ce++]<<G,G+=8}if(V>>>=Ge,G-=Ge,M.have===0){P.msg="invalid bit length repeat",M.mode=30;break}y=M.lens[M.have-1],fe=3+(3&V),V>>>=2,G-=2}else if(gt===17){for(O=Ge+3;G<O;){if(ae===0)break e;ae--,V+=Q[ce++]<<G,G+=8}G-=Ge,y=0,fe=3+(7&(V>>>=Ge)),V>>>=3,G-=3}else{for(O=Ge+7;G<O;){if(ae===0)break e;ae--,V+=Q[ce++]<<G,G+=8}G-=Ge,y=0,fe=11+(127&(V>>>=Ge)),V>>>=7,G-=7}if(M.have+fe>M.nlen+M.ndist){P.msg="invalid bit length repeat",M.mode=30;break}for(;fe--;)M.lens[M.have++]=y}}if(M.mode===30)break;if(M.lens[256]===0){P.msg="invalid code -- missing end-of-block",M.mode=30;break}if(M.lenbits=9,U={bits:M.lenbits},te=u(f,M.lens,0,M.nlen,M.lencode,0,M.work,U),M.lenbits=U.bits,te){P.msg="invalid literal/lengths set",M.mode=30;break}if(M.distbits=6,M.distcode=M.distdyn,U={bits:M.distbits},te=u(p,M.lens,M.nlen,M.ndist,M.distcode,0,M.work,U),M.distbits=U.bits,te){P.msg="invalid distances set",M.mode=30;break}if(M.mode=20,X===6)break e;case 20:M.mode=21;case 21:if(6<=ae&&258<=Ee){P.next_out=Re,P.avail_out=Ee,P.next_in=ce,P.avail_in=ae,M.hold=V,M.bits=G,h(P,me),Re=P.next_out,Ie=P.output,Ee=P.avail_out,ce=P.next_in,Q=P.input,ae=P.avail_in,V=M.hold,G=M.bits,M.mode===12&&(M.back=-1);break}for(M.back=0;Ze=(I=M.lencode[V&(1<<M.lenbits)-1])>>>16&255,gt=65535&I,!((Ge=I>>>24)<=G);){if(ae===0)break e;ae--,V+=Q[ce++]<<G,G+=8}if(Ze&&(240&Ze)==0){for(it=Ge,Tr=Ze,Ut=gt;Ze=(I=M.lencode[Ut+((V&(1<<it+Tr)-1)>>it)])>>>16&255,gt=65535&I,!(it+(Ge=I>>>24)<=G);){if(ae===0)break e;ae--,V+=Q[ce++]<<G,G+=8}V>>>=it,G-=it,M.back+=it}if(V>>>=Ge,G-=Ge,M.back+=Ge,M.length=gt,Ze===0){M.mode=26;break}if(32&Ze){M.back=-1,M.mode=12;break}if(64&Ze){P.msg="invalid literal/length code",M.mode=30;break}M.extra=15&Ze,M.mode=22;case 22:if(M.extra){for(O=M.extra;G<O;){if(ae===0)break e;ae--,V+=Q[ce++]<<G,G+=8}M.length+=V&(1<<M.extra)-1,V>>>=M.extra,G-=M.extra,M.back+=M.extra}M.was=M.length,M.mode=23;case 23:for(;Ze=(I=M.distcode[V&(1<<M.distbits)-1])>>>16&255,gt=65535&I,!((Ge=I>>>24)<=G);){if(ae===0)break e;ae--,V+=Q[ce++]<<G,G+=8}if((240&Ze)==0){for(it=Ge,Tr=Ze,Ut=gt;Ze=(I=M.distcode[Ut+((V&(1<<it+Tr)-1)>>it)])>>>16&255,gt=65535&I,!(it+(Ge=I>>>24)<=G);){if(ae===0)break e;ae--,V+=Q[ce++]<<G,G+=8}V>>>=it,G-=it,M.back+=it}if(V>>>=Ge,G-=Ge,M.back+=Ge,64&Ze){P.msg="invalid distance code",M.mode=30;break}M.offset=gt,M.extra=15&Ze,M.mode=24;case 24:if(M.extra){for(O=M.extra;G<O;){if(ae===0)break e;ae--,V+=Q[ce++]<<G,G+=8}M.offset+=V&(1<<M.extra)-1,V>>>=M.extra,G-=M.extra,M.back+=M.extra}if(M.offset>M.dmax){P.msg="invalid distance too far back",M.mode=30;break}M.mode=25;case 25:if(Ee===0)break e;if(fe=me-Ee,M.offset>fe){if((fe=M.offset-fe)>M.whave&&M.sane){P.msg="invalid distance too far back",M.mode=30;break}ot=fe>M.wnext?(fe-=M.wnext,M.wsize-fe):M.wnext-fe,fe>M.length&&(fe=M.length),ht=M.window}else ht=Ie,ot=Re-M.offset,fe=M.length;for(Ee<fe&&(fe=Ee),Ee-=fe,M.length-=fe;Ie[Re++]=ht[ot++],--fe;);M.length===0&&(M.mode=21);break;case 26:if(Ee===0)break e;Ie[Re++]=M.length,Ee--,M.mode=21;break;case 27:if(M.wrap){for(;G<32;){if(ae===0)break e;ae--,V|=Q[ce++]<<G,G+=8}if(me-=Ee,P.total_out+=me,M.total+=me,me&&(P.adler=M.check=M.flags?l(M.check,Ie,me,Re-me):c(M.check,Ie,me,Re-me)),me=Ee,(M.flags?V:E(V))!==M.check){P.msg="incorrect data check",M.mode=30;break}G=V=0}M.mode=28;case 28:if(M.wrap&&M.flags){for(;G<32;){if(ae===0)break e;ae--,V+=Q[ce++]<<G,G+=8}if(V!==(4294967295&M.total)){P.msg="incorrect length check",M.mode=30;break}G=V=0}M.mode=29;case 29:te=1;break e;case 30:te=-3;break e;case 31:return-4;default:return g}return P.next_out=Re,P.avail_out=Ee,P.next_in=ce,P.avail_in=ae,M.hold=V,M.bits=G,(M.wsize||me!==P.avail_out&&M.mode<30&&(M.mode<27||X!==4))&&ge(P,P.output,P.next_out,me-P.avail_out)?(M.mode=31,-4):(ye-=P.avail_in,me-=P.avail_out,P.total_in+=ye,P.total_out+=me,M.total+=me,M.wrap&&me&&(P.adler=M.check=M.flags?l(M.check,Ie,me,P.next_out-me):c(M.check,Ie,me,P.next_out-me)),P.data_type=M.bits+(M.last?64:0)+(M.mode===12?128:0)+(M.mode===20||M.mode===15?256:0),(ye==0&&me===0||X===4)&&te===_&&(te=-5),te)},a.inflateEnd=function(P){if(!P||!P.state)return g;var X=P.state;return X.window&&(X.window=null),P.state=null,_},a.inflateGetHeader=function(P,X){var M;return P&&P.state?(2&(M=P.state).wrap)==0?g:((M.head=X).done=!1,_):g},a.inflateSetDictionary=function(P,X){var M,Q=X.length;return P&&P.state?(M=P.state).wrap!==0&&M.mode!==11?g:M.mode===11&&c(1,X,Q,0)!==M.check?-3:ge(P,X,Q,Q)?(M.mode=31,-4):(M.havedict=1,_):g},a.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(n,o,a){"use strict";var s=n("../utils/common"),c=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],l=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],h=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],u=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];o.exports=function(f,p,_,g,b,w,v,E){var S,C,T,$,K,W,ne,N,pe,ge=E.bits,P=0,X=0,M=0,Q=0,Ie=0,ce=0,Re=0,ae=0,Ee=0,V=0,G=null,ye=0,me=new s.Buf16(16),fe=new s.Buf16(16),ot=null,ht=0;for(P=0;P<=15;P++)me[P]=0;for(X=0;X<g;X++)me[p[_+X]]++;for(Ie=ge,Q=15;1<=Q&&me[Q]===0;Q--);if(Q<Ie&&(Ie=Q),Q===0)return b[w++]=20971520,b[w++]=20971520,E.bits=1,0;for(M=1;M<Q&&me[M]===0;M++);for(Ie<M&&(Ie=M),P=ae=1;P<=15;P++)if(ae<<=1,(ae-=me[P])<0)return-1;if(0<ae&&(f===0||Q!==1))return-1;for(fe[1]=0,P=1;P<15;P++)fe[P+1]=fe[P]+me[P];for(X=0;X<g;X++)p[_+X]!==0&&(v[fe[p[_+X]]++]=X);if(W=f===0?(G=ot=v,19):f===1?(G=c,ye-=257,ot=l,ht-=257,256):(G=h,ot=u,-1),P=M,K=w,Re=X=V=0,T=-1,$=(Ee=1<<(ce=Ie))-1,f===1&&852<Ee||f===2&&592<Ee)return 1;for(;;){for(ne=P-Re,pe=v[X]<W?(N=0,v[X]):v[X]>W?(N=ot[ht+v[X]],G[ye+v[X]]):(N=96,0),S=1<<P-Re,M=C=1<<ce;b[K+(V>>Re)+(C-=S)]=ne<<24|N<<16|pe|0,C!==0;);for(S=1<<P-1;V&S;)S>>=1;if(S!==0?(V&=S-1,V+=S):V=0,X++,--me[P]==0){if(P===Q)break;P=p[_+v[X]]}if(Ie<P&&(V&$)!==T){for(Re===0&&(Re=Ie),K+=M,ae=1<<(ce=P-Re);ce+Re<Q&&!((ae-=me[ce+Re])<=0);)ce++,ae<<=1;if(Ee+=1<<ce,f===1&&852<Ee||f===2&&592<Ee)return 1;b[T=V&$]=Ie<<24|ce<<16|K-w|0}}return V!==0&&(b[K+V]=P-Re<<24|4194304),E.bits=Ie,0}},{"../utils/common":41}],51:[function(n,o,a){"use strict";o.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(n,o,a){"use strict";var s=n("../utils/common"),c=0,l=1;function h(I){for(var B=I.length;0<=--B;)I[B]=0}var u=0,f=29,p=256,_=p+1+f,g=30,b=19,w=2*_+1,v=15,E=16,S=7,C=256,T=16,$=17,K=18,W=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],ne=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],N=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],pe=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],ge=new Array(2*(_+2));h(ge);var P=new Array(2*g);h(P);var X=new Array(512);h(X);var M=new Array(256);h(M);var Q=new Array(f);h(Q);var Ie,ce,Re,ae=new Array(g);function Ee(I,B,ie,se,F){this.static_tree=I,this.extra_bits=B,this.extra_base=ie,this.elems=se,this.max_length=F,this.has_stree=I&&I.length}function V(I,B){this.dyn_tree=I,this.max_code=0,this.stat_desc=B}function G(I){return I<256?X[I]:X[256+(I>>>7)]}function ye(I,B){I.pending_buf[I.pending++]=255&B,I.pending_buf[I.pending++]=B>>>8&255}function me(I,B,ie){I.bi_valid>E-ie?(I.bi_buf|=B<<I.bi_valid&65535,ye(I,I.bi_buf),I.bi_buf=B>>E-I.bi_valid,I.bi_valid+=ie-E):(I.bi_buf|=B<<I.bi_valid&65535,I.bi_valid+=ie)}function fe(I,B,ie){me(I,ie[2*B],ie[2*B+1])}function ot(I,B){for(var ie=0;ie|=1&I,I>>>=1,ie<<=1,0<--B;);return ie>>>1}function ht(I,B,ie){var se,F,de=new Array(v+1),ve=0;for(se=1;se<=v;se++)de[se]=ve=ve+ie[se-1]<<1;for(F=0;F<=B;F++){var ue=I[2*F+1];ue!==0&&(I[2*F]=ot(de[ue]++,ue))}}function Ge(I){for(var B=0;B<_;B++)I.dyn_ltree[2*B]=0;for(B=0;B<g;B++)I.dyn_dtree[2*B]=0;for(B=0;B<b;B++)I.bl_tree[2*B]=0;I.dyn_ltree[2*C]=1,I.opt_len=I.static_len=0,I.last_lit=I.matches=0}function Ze(I){8<I.bi_valid?ye(I,I.bi_buf):0<I.bi_valid&&(I.pending_buf[I.pending++]=I.bi_buf),I.bi_buf=0,I.bi_valid=0}function gt(I,B,ie,se){var F=2*B,de=2*ie;return I[F]<I[de]||I[F]===I[de]&&se[B]<=se[ie]}function it(I,B,ie){for(var se=I.heap[ie],F=ie<<1;F<=I.heap_len&&(F<I.heap_len&&gt(B,I.heap[F+1],I.heap[F],I.depth)&&F++,!gt(B,se,I.heap[F],I.depth));)I.heap[ie]=I.heap[F],ie=F,F<<=1;I.heap[ie]=se}function Tr(I,B,ie){var se,F,de,ve,ue=0;if(I.last_lit!==0)for(;se=I.pending_buf[I.d_buf+2*ue]<<8|I.pending_buf[I.d_buf+2*ue+1],F=I.pending_buf[I.l_buf+ue],ue++,se===0?fe(I,F,B):(fe(I,(de=M[F])+p+1,B),(ve=W[de])!==0&&me(I,F-=Q[de],ve),fe(I,de=G(--se),ie),(ve=ne[de])!==0&&me(I,se-=ae[de],ve)),ue<I.last_lit;);fe(I,C,B)}function Ut(I,B){var ie,se,F,de=B.dyn_tree,ve=B.stat_desc.static_tree,ue=B.stat_desc.has_stree,Ae=B.stat_desc.elems,Xe=-1;for(I.heap_len=0,I.heap_max=w,ie=0;ie<Ae;ie++)de[2*ie]!==0?(I.heap[++I.heap_len]=Xe=ie,I.depth[ie]=0):de[2*ie+1]=0;for(;I.heap_len<2;)de[2*(F=I.heap[++I.heap_len]=Xe<2?++Xe:0)]=1,I.depth[F]=0,I.opt_len--,ue&&(I.static_len-=ve[2*F+1]);for(B.max_code=Xe,ie=I.heap_len>>1;1<=ie;ie--)it(I,de,ie);for(F=Ae;ie=I.heap[1],I.heap[1]=I.heap[I.heap_len--],it(I,de,1),se=I.heap[1],I.heap[--I.heap_max]=ie,I.heap[--I.heap_max]=se,de[2*F]=de[2*ie]+de[2*se],I.depth[F]=(I.depth[ie]>=I.depth[se]?I.depth[ie]:I.depth[se])+1,de[2*ie+1]=de[2*se+1]=F,I.heap[1]=F++,it(I,de,1),2<=I.heap_len;);I.heap[--I.heap_max]=I.heap[1],(function(je,Dt){var Lr,nr,pn,ft,Bn,lo,wr=Dt.dyn_tree,qo=Dt.max_code,Fi=Dt.stat_desc.static_tree,Gi=Dt.stat_desc.has_stree,Cc=Dt.stat_desc.extra_bits,os=Dt.stat_desc.extra_base,co=Dt.stat_desc.max_length,uo=0;for(ft=0;ft<=v;ft++)je.bl_count[ft]=0;for(wr[2*je.heap[je.heap_max]+1]=0,Lr=je.heap_max+1;Lr<w;Lr++)co<(ft=wr[2*wr[2*(nr=je.heap[Lr])+1]+1]+1)&&(ft=co,uo++),wr[2*nr+1]=ft,qo<nr||(je.bl_count[ft]++,Bn=0,os<=nr&&(Bn=Cc[nr-os]),lo=wr[2*nr],je.opt_len+=lo*(ft+Bn),Gi&&(je.static_len+=lo*(Fi[2*nr+1]+Bn)));if(uo!==0){do{for(ft=co-1;je.bl_count[ft]===0;)ft--;je.bl_count[ft]--,je.bl_count[ft+1]+=2,je.bl_count[co]--,uo-=2}while(0<uo);for(ft=co;ft!==0;ft--)for(nr=je.bl_count[ft];nr!==0;)qo<(pn=je.heap[--Lr])||(wr[2*pn+1]!==ft&&(je.opt_len+=(ft-wr[2*pn+1])*wr[2*pn],wr[2*pn+1]=ft),nr--)}})(I,B),ht(de,Xe,I.bl_count)}function y(I,B,ie){var se,F,de=-1,ve=B[1],ue=0,Ae=7,Xe=4;for(ve===0&&(Ae=138,Xe=3),B[2*(ie+1)+1]=65535,se=0;se<=ie;se++)F=ve,ve=B[2*(se+1)+1],++ue<Ae&&F===ve||(ue<Xe?I.bl_tree[2*F]+=ue:F!==0?(F!==de&&I.bl_tree[2*F]++,I.bl_tree[2*T]++):ue<=10?I.bl_tree[2*$]++:I.bl_tree[2*K]++,de=F,Xe=(ue=0)===ve?(Ae=138,3):F===ve?(Ae=6,3):(Ae=7,4))}function te(I,B,ie){var se,F,de=-1,ve=B[1],ue=0,Ae=7,Xe=4;for(ve===0&&(Ae=138,Xe=3),se=0;se<=ie;se++)if(F=ve,ve=B[2*(se+1)+1],!(++ue<Ae&&F===ve)){if(ue<Xe)for(;fe(I,F,I.bl_tree),--ue!=0;);else F!==0?(F!==de&&(fe(I,F,I.bl_tree),ue--),fe(I,T,I.bl_tree),me(I,ue-3,2)):ue<=10?(fe(I,$,I.bl_tree),me(I,ue-3,3)):(fe(I,K,I.bl_tree),me(I,ue-11,7));de=F,Xe=(ue=0)===ve?(Ae=138,3):F===ve?(Ae=6,3):(Ae=7,4)}}h(ae);var U=!1;function O(I,B,ie,se){me(I,(u<<1)+(se?1:0),3),(function(F,de,ve,ue){Ze(F),ue&&(ye(F,ve),ye(F,~ve)),s.arraySet(F.pending_buf,F.window,de,ve,F.pending),F.pending+=ve})(I,B,ie,!0)}a._tr_init=function(I){U||((function(){var B,ie,se,F,de,ve=new Array(v+1);for(F=se=0;F<f-1;F++)for(Q[F]=se,B=0;B<1<<W[F];B++)M[se++]=F;for(M[se-1]=F,F=de=0;F<16;F++)for(ae[F]=de,B=0;B<1<<ne[F];B++)X[de++]=F;for(de>>=7;F<g;F++)for(ae[F]=de<<7,B=0;B<1<<ne[F]-7;B++)X[256+de++]=F;for(ie=0;ie<=v;ie++)ve[ie]=0;for(B=0;B<=143;)ge[2*B+1]=8,B++,ve[8]++;for(;B<=255;)ge[2*B+1]=9,B++,ve[9]++;for(;B<=279;)ge[2*B+1]=7,B++,ve[7]++;for(;B<=287;)ge[2*B+1]=8,B++,ve[8]++;for(ht(ge,_+1,ve),B=0;B<g;B++)P[2*B+1]=5,P[2*B]=ot(B,5);Ie=new Ee(ge,W,p+1,_,v),ce=new Ee(P,ne,0,g,v),Re=new Ee(new Array(0),N,0,b,S)})(),U=!0),I.l_desc=new V(I.dyn_ltree,Ie),I.d_desc=new V(I.dyn_dtree,ce),I.bl_desc=new V(I.bl_tree,Re),I.bi_buf=0,I.bi_valid=0,Ge(I)},a._tr_stored_block=O,a._tr_flush_block=function(I,B,ie,se){var F,de,ve=0;0<I.level?(I.strm.data_type===2&&(I.strm.data_type=(function(ue){var Ae,Xe=4093624447;for(Ae=0;Ae<=31;Ae++,Xe>>>=1)if(1&Xe&&ue.dyn_ltree[2*Ae]!==0)return c;if(ue.dyn_ltree[18]!==0||ue.dyn_ltree[20]!==0||ue.dyn_ltree[26]!==0)return l;for(Ae=32;Ae<p;Ae++)if(ue.dyn_ltree[2*Ae]!==0)return l;return c})(I)),Ut(I,I.l_desc),Ut(I,I.d_desc),ve=(function(ue){var Ae;for(y(ue,ue.dyn_ltree,ue.l_desc.max_code),y(ue,ue.dyn_dtree,ue.d_desc.max_code),Ut(ue,ue.bl_desc),Ae=b-1;3<=Ae&&ue.bl_tree[2*pe[Ae]+1]===0;Ae--);return ue.opt_len+=3*(Ae+1)+5+5+4,Ae})(I),F=I.opt_len+3+7>>>3,(de=I.static_len+3+7>>>3)<=F&&(F=de)):F=de=ie+5,ie+4<=F&&B!==-1?O(I,B,ie,se):I.strategy===4||de===F?(me(I,2+(se?1:0),3),Tr(I,ge,P)):(me(I,4+(se?1:0),3),(function(ue,Ae,Xe,je){var Dt;for(me(ue,Ae-257,5),me(ue,Xe-1,5),me(ue,je-4,4),Dt=0;Dt<je;Dt++)me(ue,ue.bl_tree[2*pe[Dt]+1],3);te(ue,ue.dyn_ltree,Ae-1),te(ue,ue.dyn_dtree,Xe-1)})(I,I.l_desc.max_code+1,I.d_desc.max_code+1,ve+1),Tr(I,I.dyn_ltree,I.dyn_dtree)),Ge(I),se&&Ze(I)},a._tr_tally=function(I,B,ie){return I.pending_buf[I.d_buf+2*I.last_lit]=B>>>8&255,I.pending_buf[I.d_buf+2*I.last_lit+1]=255&B,I.pending_buf[I.l_buf+I.last_lit]=255&ie,I.last_lit++,B===0?I.dyn_ltree[2*ie]++:(I.matches++,B--,I.dyn_ltree[2*(M[ie]+p+1)]++,I.dyn_dtree[2*G(B)]++),I.last_lit===I.lit_bufsize-1},a._tr_align=function(I){me(I,2,3),fe(I,C,ge),(function(B){B.bi_valid===16?(ye(B,B.bi_buf),B.bi_buf=0,B.bi_valid=0):8<=B.bi_valid&&(B.pending_buf[B.pending++]=255&B.bi_buf,B.bi_buf>>=8,B.bi_valid-=8)})(I)}},{"../utils/common":41}],53:[function(n,o,a){"use strict";o.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(n,o,a){"use strict";o.exports=typeof setImmediate=="function"?setImmediate:function(){var s=[].slice.apply(arguments);s.splice(1,0,0),setTimeout.apply(null,s)}},{}]},{},[10])(10)})})),Kh=A9(),C9=x9(),O9=ia(I9(),1);function T9(e){switch(e){case"image/jpeg":return"jpg";case"image/png":return"png";case"image/webp":return"webp";case"image/gif":return"gif";case"image/bmp":return"bmp";default:return"png"}}async function L9(e){if(!e.src)return null;try{const t=await fetch(e.src);if(t.ok)return Me(`Got blob for page ${e.src} from fetch`),await t.blob()}catch(t){Me(`Failed to get blob for page ${e.src} from fetch`,t)}return typeof GM_xmlhttpRequest<"u"?new Promise(t=>{GM_xmlhttpRequest({method:"GET",url:e.src,responseType:"blob",onload:n=>{n.status===200?(Me(`Got blob for page ${e.src} from GM_xmlhttpRequest`),t(n.response)):(Me(`Failed to get blob for page ${e.src} from GM_xmlhttpRequest`,n.statusText),t(null))},onerror:n=>{Me(`Failed to get blob for page ${e.src} from GM_xmlhttpRequest`,n),t(null)}})}):null}async function P9(e){const t=e.ref?.value;if(!t)return null;try{const n=document.createElement("canvas"),o=n.getContext("2d");if(o)return n.width=t.naturalWidth,n.height=t.naturalHeight,o.drawImage(t,0,0),await new Promise(a=>{n.toBlob(s=>{s&&Me(`Got blob for page ${e.src} from canvas`),a(s)},"image/png",1)})}catch(n){Me(`Failed to get blob for page ${e.src} from canvas`,n)}return null}async function R9(e){if(e.blob)return Me(`Got blob for page ${e.src} from cache`),e.blob;const t=await L9(e)||await P9(e);return t||Me(`Failed to get blob for page ${e.src}`),t}async function $9(){Pe("download","working");const e=new O9.default,t=he("images")??{},n=he("manga"),o=n?.pages??0,a=Math.floor(Math.log10(o||1))+1,s=xe.default.sortBy(xe.default.entries(t),([u])=>Number(u)),c=[],l=u=>{Pe("dialog",{open:!0,title:Z("BUTTON_DOWNLOAD"),content:re`
        <div style='display: flex; flex-direction: column; gap: 10px;'>
          <p>${Z("DOWNLOAD_PROGRESS").replace("##num##",u.toString()).replace("##total##",o.toString())}</p>
          <progress value='${u}' max='${o}' style='width: 100%; height: 20px;'></progress>
        </div>
      `,footer:re`
        <mov-button @click=${()=>Pe("download","cancelled")}>
          ${Z("CANCEL")}
        </mov-button>
      `})};l(0);let h=0;for(const[u,f]of s){if(he("download")==="cancelled"){Me("Download cancelled"),Pe("dialog",null),Pe("download",void 0);return}try{const p=await R9(f);if(p){const _=T9(p.type),g=`Page-${Number(u).toString().padStart(a,"0")}.${_}`;Me(`${g} Added to Zip from Blob`),e.file(g,p,{createFolders:!0,compression:"DEFLATE"})}else c.push(f.src??u)}catch(p){Me(`Error processing page ${u}`,p),c.push(f.src??u)}finally{h+=1,l(h)}}Pe("dialog",{open:!0,title:Z("BUTTON_DOWNLOAD"),content:re`
      <div style='display: flex; flex-direction: column; gap: 10px;'>
        <p>${Z("GENERATING_ZIP")}</p>
        <progress style='width: 100%; height: 20px;'></progress>
      </div>
    `,footer:re``}),c.length>0&&(Me("Some images failed to download:",c),e.file("failed_pages.txt",c.join(`
`))),Me("Generating Zip"),e.generateAsync({type:"blob"}).then(u=>{Me("Download Ready");const f=`${n?.title??document.title}.zip`;(0,C9.saveAs)(u,f,{autoBom:!1}),c.length>0?Pe("dialog",{open:!0,title:Z("DOWNLOAD_INCOMPLETE"),icon:"warning",content:re`<p>${Z("DOWNLOAD_INCOMPLETE_MESSAGE")}</p>`,footer:re`<mov-button @click=${()=>Pe("dialog",null)}>
            ${Z("CLOSE")}
          </mov-button>`}):Pe("dialog",null)}).catch(u=>{Me("Error generating zip",u),Pe("dialog",{open:!0,title:Z("WARNING"),icon:"error",content:re`<p>Error generating zip: ${u.message}</p>`,footer:re`<mov-button @click=${()=>Pe("dialog",null)}>
          ${Z("CLOSE")}
        </mov-button>`})}).finally(()=>{Pe("download",void 0)})}function Yh(){he("download")!=="working"&&(Me("Downloading Chapter"),$9().catch(e=>Me("Error downloading chapter",e)))}function D9(){So("hidePageControls",e=>!e)}function Ri(e){const t=e.currentTarget||e.target,n=t.getAttribute("value")??t.getAttribute("href");e.button!==1&&!e.ctrlKey&&(n&&n!=="#"?window.location.href=(0,Kh.sanitizeUrl)(n):t.id==="series"&&(qs()?window.location.href=window.location.pathname:window.history.back()))}function B9(e){if(e)if(Y("viewMode").startsWith("Fluid")){const t=he("chapter").value;if(t){const n=e.getBoundingClientRect(),o=t.getBoundingClientRect();t.scrollBy({left:n.left-o.left,top:n.top-o.top,behavior:"instant"})}}else{const t=e.getBoundingClientRect();window.scrollTo({top:t.top+window.scrollY,left:t.left+window.scrollX,behavior:"instant"})}}tr.listen((e,t,n)=>{n==="scrollToPage"&&e.scrollToPage!==void 0&&(e.scrollToPage<=0?window.scrollTo(0,0):B9(he("images")?.[e.scrollToPage]?.ref?.value),setTimeout(()=>Pe("scrollToPage",void 0),10))});function z9(e){const t=e.detail.value;Pe("scrollToPage",typeof t=="string"?parseInt(t,10):t)}function N9(e){Pe("scrollToPage",e)}var _c=typeof navigator<"u"?navigator.userAgent.toLowerCase().indexOf("firefox")>0:!1;function yc(e,t,n,o){e.addEventListener?e.addEventListener(t,n,o):e.attachEvent&&e.attachEvent(`on${t}`,n)}function $i(e,t,n,o){e&&(e.removeEventListener?e.removeEventListener(t,n,o):e.detachEvent&&e.detachEvent(`on${t}`,n))}function Xh(e,t){const n=t.slice(0,t.length-1),o=[];for(let a=0;a<n.length;a++)o.push(e[n[a].toLowerCase()]);return o}function Jh(e){typeof e!="string"&&(e=""),e=e.replace(/\s/g,"");const t=e.split(",");let n=t.lastIndexOf("");for(;n>=0;)t[n-1]+=",",t.splice(n,1),n=t.lastIndexOf("");return t}function H9(e,t){const n=e.length>=t.length?e:t,o=e.length>=t.length?t:e;let a=!0;for(let s=0;s<n.length;s++)o.indexOf(n[s])===-1&&(a=!1);return a}function Qh(e,t,n){let o=e.keyCode||e.which||e.charCode;if(e.key){const a=e.key.toLowerCase();if(a in t)return t[a];if(a in n)return n[a];if(/^[0-9]$/.test(e.key))return e.key.charCodeAt(0);if(/^[a-z]$/i.test(e.key))return e.key.toUpperCase().charCodeAt(0)}return e.code&&/^Key[A-Z]$/.test(e.code)&&(o=e.code.charCodeAt(3)),o}var ao={backspace:8,"⌫":8,tab:9,clear:12,enter:13,"↩":13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,arrowup:38,arrowdown:40,arrowleft:37,arrowright:39,del:46,delete:46,ins:45,insert:45,home:36,end:35,pageup:33,pagedown:34,capslock:20,num_0:96,num_1:97,num_2:98,num_3:99,num_4:100,num_5:101,num_6:102,num_7:103,num_8:104,num_9:105,num_multiply:106,num_add:107,num_enter:108,num_subtract:109,num_decimal:110,num_divide:111,"⇪":20,",":188,".":190,"/":191,"`":192,"-":_c?173:189,"=":_c?61:187,";":_c?59:186,"'":222,"{":219,"}":221,"[":219,"]":221,"\\":220},rr={"⇧":16,shift:16,"⌥":18,alt:18,option:18,"⌃":17,ctrl:17,control:17,"⌘":91,cmd:91,meta:91,command:91},Di={16:"shiftKey",18:"altKey",17:"ctrlKey",91:"metaKey",shiftKey:16,ctrlKey:17,altKey:18,metaKey:91},Lt={16:!1,18:!1,17:!1,91:!1},wt={};for(let e=1;e<20;e++)ao[`f${e}`]=111+e;var ut=[],Bi=null,Uo=null,e1="all",fn=new Map,Vo=e=>ao[e.toLowerCase()]||rr[e.toLowerCase()]||e.toUpperCase().charCodeAt(0),F9=e=>Object.keys(ao).find(t=>ao[t]===e),G9=e=>Object.keys(rr).find(t=>rr[t]===e),t1=e=>{e1=e||"all"},zi=()=>e1||"all",W9=()=>ut.slice(0),U9=()=>ut.map(e=>F9(e)||G9(e)||String.fromCharCode(e)),V9=()=>{const e=[];return Object.keys(wt).forEach(t=>{wt[t].forEach(({key:n,scope:o,mods:a,shortcut:s})=>{e.push({scope:o,shortcut:s,mods:a,keys:n.split("+").map(c=>Vo(c))})})}),e},r1=e=>{const t=e.target||e.srcElement,{tagName:n}=t;let o=!0;const a=n==="INPUT"&&!["checkbox","radio","range","button","file","reset","submit","color"].includes(t.type);return(t.isContentEditable||(a||n==="TEXTAREA"||n==="SELECT")&&!t.readOnly)&&(o=!1),o},Z9=e=>(typeof e=="string"&&(e=Vo(e)),ut.indexOf(e)!==-1),j9=(e,t)=>{let n,o;e||(e=zi());for(const a in wt)if(Object.prototype.hasOwnProperty.call(wt,a))for(n=wt[a],o=0;o<n.length;)n[o].scope===e?n.splice(o,1).forEach(({element:s})=>kc(s)):o++;zi()===e&&t1(t||"all")};function q9(e){let t=Qh(e,ao,rr);e.key&&e.key.toLowerCase()==="capslock"&&(t=Vo(e.key));const n=ut.indexOf(t);if(n>=0&&ut.splice(n,1),e.key&&e.key.toLowerCase()==="meta"&&ut.splice(0,ut.length),(t===93||t===224)&&(t=91),t in Lt){Lt[t]=!1;for(const o in rr)rr[o]===t&&(Jr[o]=!1)}}var n1=(e,...t)=>{if(typeof e>"u")Object.keys(wt).forEach(n=>{Array.isArray(wt[n])&&wt[n].forEach(o=>ja(o)),delete wt[n]}),kc(null);else if(Array.isArray(e))e.forEach(n=>{n.key&&ja(n)});else if(typeof e=="object")e.key&&ja(e);else if(typeof e=="string"){let[n,o]=t;typeof n=="function"&&(o=n,n=""),ja({key:e,scope:n,method:o,splitKey:"+"})}},ja=({key:e,scope:t,method:n,splitKey:o="+"})=>{Jh(e).forEach(a=>{const s=a.split(o),c=s.length,l=s[c-1],h=l==="*"?"*":Vo(l);if(!wt[h])return;t||(t=zi());const u=c>1?Xh(rr,s):[],f=[];wt[h]=wt[h].filter(p=>{const _=(n?p.method===n:!0)&&p.scope===t&&H9(p.mods,u);return _&&f.push(p.element),!_}),f.forEach(p=>kc(p))})};function o1(e,t,n,o){if(t.element!==o)return;let a;if(t.scope===n||t.scope==="all"){a=t.mods.length>0;for(const s in Lt)Object.prototype.hasOwnProperty.call(Lt,s)&&(!Lt[s]&&t.mods.indexOf(+s)>-1||Lt[s]&&t.mods.indexOf(+s)===-1)&&(a=!1);(t.mods.length===0&&!Lt[16]&&!Lt[18]&&!Lt[17]&&!Lt[91]||a||t.shortcut==="*")&&(t.keys=[],t.keys=t.keys.concat(ut),t.method(e,t)===!1&&(e.preventDefault?e.preventDefault():e.returnValue=!1,e.stopPropagation&&e.stopPropagation(),e.cancelBubble&&(e.cancelBubble=!0)))}}function i1(e,t){const n=wt["*"];let o=Qh(e,ao,rr);if(e.key&&e.key.toLowerCase()==="capslock"||!(Jr.filter||r1).call(this,e))return;if((o===93||o===224)&&(o=91),ut.indexOf(o)===-1&&o!==229&&ut.push(o),["metaKey","ctrlKey","altKey","shiftKey"].forEach(l=>{const h=Di[l];e[l]&&ut.indexOf(h)===-1?ut.push(h):!e[l]&&ut.indexOf(h)>-1?ut.splice(ut.indexOf(h),1):l==="metaKey"&&e[l]&&(ut=ut.filter(u=>u in Di||u===o))}),o in Lt){Lt[o]=!0;for(const l in rr)if(Object.prototype.hasOwnProperty.call(rr,l)){const h=Di[rr[l]];Jr[l]=e[h]}if(!n)return}for(const l in Lt)Object.prototype.hasOwnProperty.call(Lt,l)&&(Lt[l]=e[Di[l]]);e.getModifierState&&!(e.altKey&&!e.ctrlKey)&&e.getModifierState("AltGraph")&&(ut.indexOf(17)===-1&&ut.push(17),ut.indexOf(18)===-1&&ut.push(18),Lt[17]=!0,Lt[18]=!0);const a=zi();if(n)for(let l=0;l<n.length;l++)n[l].scope===a&&(e.type==="keydown"&&n[l].keydown||e.type==="keyup"&&n[l].keyup)&&o1(e,n[l],a,t);if(!(o in wt))return;const s=wt[o],c=s.length;for(let l=0;l<c;l++)if((e.type==="keydown"&&s[l].keydown||e.type==="keyup"&&s[l].keyup)&&s[l].key){const h=s[l],{splitKey:u}=h,f=h.key.split(u),p=[];for(let _=0;_<f.length;_++)p.push(Vo(f[_]));p.sort().join("")===ut.sort().join("")&&o1(e,h,a,t)}}var Jr=function e(t,n,o){ut=[];const a=Jh(t);let s=[],c="all",l=document,h=0,u=!1,f=!0,p="+",_=!1,g=!1;if(o===void 0&&typeof n=="function"&&(o=n),Object.prototype.toString.call(n)==="[object Object]"){const b=n;b.scope&&(c=b.scope),b.element&&(l=b.element),b.keyup&&(u=b.keyup),b.keydown!==void 0&&(f=b.keydown),b.capture!==void 0&&(_=b.capture),typeof b.splitKey=="string"&&(p=b.splitKey),b.single===!0&&(g=!0)}for(typeof n=="string"&&(c=n),g&&n1(t,c);h<a.length;h++){const b=a[h].split(p);s=[],b.length>1&&(s=Xh(rr,b));let w=b[b.length-1];w=w==="*"?"*":Vo(w),w in wt||(wt[w]=[]),wt[w].push({keyup:u,keydown:f,scope:c,mods:s,shortcut:a[h],method:o,key:a[h],splitKey:p,element:l})}if(typeof l<"u"&&typeof window<"u"){if(!fn.has(l)){const b=(v=window.event)=>i1(v,l),w=(v=window.event)=>{i1(v,l),q9(v)};fn.set(l,{keydownListener:b,keyupListenr:w,capture:_}),yc(l,"keydown",b,_),yc(l,"keyup",w,_)}if(!Bi){const b=()=>{ut=[]};Bi={listener:b,capture:_},yc(window,"focus",b,_)}if(!Uo&&typeof document<"u"){const b=()=>{ut=[];for(const E in Lt)Lt[E]=!1;for(const E in rr)e[E]=!1},w=b,v=b;document.addEventListener("fullscreenchange",w),document.addEventListener("webkitfullscreenchange",v),Uo={fullscreen:w,webkit:v}}}};function K9(e,t="all"){Object.keys(wt).forEach(n=>{wt[n].filter(o=>o.scope===t&&(o.shortcut===e||o.shortcut==="*")).forEach(o=>{o&&o.method&&o.method({},o)})})}function kc(e){const t=Object.values(wt).flat();if(t.findIndex(({element:n})=>n===e)<0&&e){const{keydownListener:n,keyupListenr:o,capture:a}=fn.get(e)||{};n&&o&&($i(e,"keyup",o,a),$i(e,"keydown",n,a),fn.delete(e))}if(t.length<=0||fn.size<=0){if(Array.from(fn.keys()).forEach(n=>{const{keydownListener:o,keyupListenr:a,capture:s}=fn.get(n)||{};o&&a&&($i(n,"keyup",a,s),$i(n,"keydown",o,s),fn.delete(n))}),fn.clear(),Object.keys(wt).forEach(n=>delete wt[n]),Bi){const{listener:n,capture:o}=Bi;$i(window,"focus",n,o),Bi=null}Uo&&typeof document<"u"&&(document.removeEventListener("fullscreenchange",Uo.fullscreen),document.removeEventListener("webkitfullscreenchange",Uo.webkit),Uo=null)}}var Ec={getPressedKeyString:U9,setScope:t1,getScope:zi,deleteScope:j9,getPressedKeyCodes:W9,getAllKeyCodes:V9,isPressed:Z9,filter:r1,trigger:K9,unbind:n1,keyMap:ao,modifier:rr,modifierMap:Di};for(const e in Ec){const t=e;Object.prototype.hasOwnProperty.call(Ec,t)&&(Jr[t]=Ec[t])}if(typeof window<"u"){const e=window.hotkeys;Jr.noConflict=t=>(t&&window.hotkeys===Jr&&(window.hotkeys=e),Jr),window.hotkeys=Jr}function a1(){const e=he("chapter").value;if(Y("viewMode").startsWith("Fluid")){const t=Y("viewMode")==="FluidRTL"?-1:1;e?.scrollBy({top:0,left:Y("scrollHeight")*t,behavior:"smooth"}),e&&e.scrollLeft+e.clientWidth>=e.scrollWidth-2&&(Pe("autoScroll",!1),Me("Finished auto scroll"))}else window.scrollBy({top:Y("scrollHeight"),left:0,behavior:"smooth"}),window.scrollY+window.innerHeight>=document.documentElement.scrollHeight&&(Pe("autoScroll",!1),Me("Finished auto scroll"));he("autoScroll")&&requestAnimationFrame(a1)}function qa(){he("autoScroll")?(Pe("autoScroll",!1),Me("Stopped auto scroll")):(Pe("autoScroll",!0),requestAnimationFrame(a1),Me("Start auto scroll"))}var Ka=!1,Y9=xe.default.debounce(()=>{qa(),Ka=!1},500);function X9(){!Ka&&he("autoScroll")&&(qa(),Ka=!0),Ka&&!he("autoScroll")&&Y9()}function J9(){window.addEventListener("wheel",xe.default.throttle(X9,500))}var Qr=class extends tt{constructor(...t){super(...t),this.open=!1,this.mode="dialog",this.fullscreen=!1,this.label="",this.withoutHeader=!1,this.lightDismiss=!0}static{this.styles=kt`
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
                ${wc}
              </button>
            </div>
          </div>
        `}
        <div class="content-slot" part="body">
          ${this.icon?re`
                <div class="icon-container">
                  <mov-icon
                    .name=${Q9(this.icon)}
                    size="4rem"
                  ></mov-icon>
                </div>
              `:""}
          <slot></slot>
        </div>
        <slot name="footer" part="footer"></slot>
      </dialog>
    `}};D([q({type:Boolean,reflect:!0})],Qr.prototype,"open",void 0),D([q({type:String,reflect:!0})],Qr.prototype,"mode",void 0),D([q({type:Boolean,reflect:!0})],Qr.prototype,"fullscreen",void 0),D([q({type:String,reflect:!0})],Qr.prototype,"label",void 0),D([q({type:Boolean,reflect:!0,attribute:"without-header"})],Qr.prototype,"withoutHeader",void 0),D([q({type:Boolean,reflect:!0,attribute:"light-dismiss"})],Qr.prototype,"lightDismiss",void 0),D([q({type:String,reflect:!0})],Qr.prototype,"icon",void 0),D([En("dialog")],Qr.prototype,"dialog",void 0),Qr=D([lt("mov-dialog")],Qr);function Mc(e){const t=()=>Pe("dialog",null);e.timer&&setTimeout(t,e.timer),Pe("dialog",{open:!0,icon:e.icon,title:e.title,content:re`<div style="padding: 1rem;">${Tu(e.html)}</div>`,footer:re`
      <div
        slot="footer"
        style="display: flex; justify-content: flex-end; padding: 0.5rem 1rem 1rem;"
      >
        <mov-button @click=${t}>OK</mov-button>
      </div>
    `})}function Q9(e){switch(e){case"info":return"info-circle";case"warning":return"alert-circle";case"success":return"circle-check";case"error":return"circle-x";case"question":return"help";default:return""}}function e7(e){const t=e.currentTarget.value;Bu(t==="true")}function t7(e){const t=e.currentTarget.value;Mt("locale",t)}function r7(e){const t=e.currentTarget.value;Mt("loadMode",t)}function n7(e){const t=e.detail.checked;Mt("fitWidthIfOversize",t)}function o7(e){const t=e.currentTarget.value;Mt("navbar",t)}function i7(e){const t=e.currentTarget.value;Mt("pagination",t)}function a7(e){const t=e.detail.checked;Mt("downloadZip",t),t&&Mc({title:Z("ATTENTION"),html:Z("AUTO_DOWNLOAD"),timer:1e4,icon:"info"})}function s7(e){const t=e.detail.checked;Mt("lazyLoadImages",t),t&&Mc({title:Z("WARNING"),html:Z("LAZY_LOAD"),icon:"warning"})}function l7(e){const t=e.detail.value;Mt("lazyStart",typeof t=="string"?parseInt(t,10):t)}function c7(e){const t=e.currentTarget.value;Mt("loadSpeed",t),["Extreme","All"].includes(t)&&Mc({title:Z("SPEED_WARNING"),html:Z("SPEED_WARNING_MESSAGE"),icon:"warning"})}function d7(e){const t=e.detail.value;Mt("zoomStep",typeof t=="string"?parseInt(t,10):t)}function u7(e){const t=e.detail.value,n=typeof t=="string"?parseInt(t,10):t;q4("MinZoom",`#MangaOnlineViewer .PageContent .PageImg {min-width: ${n}vw;}`),Mt("minZoom",n)}function h7(e){const t=e.detail.checked;Mt("hidePageControls",t)}function f7(e){const t=e.currentTarget.value;Mt("header",t)}function p7(e){const t=e.detail.value;Mt("scrollHeight",typeof t=="string"?parseInt(t,10):t)}function s1(e){So("scrollHeight",t=>{const n=t+e*25;if(n<=0)return 0;const o=Math.ceil(window.innerHeight/200)*100;return n>=o?o:n})}function m7(e){const t=e.currentTarget.value;Mt("deviceMode",t),Pe("device",gl(t))}function g7(){const e=Y("navbar");return e==="left"||e==="right"?window.innerWidth-34:window.innerWidth}function v7(){return Y("navbar")==="bottom"?window.innerHeight-34:window.innerHeight}function l1(e,t=Y("zoomMode"),n=Y("zoomValue")){const o=g7(),a=v7();if(t==="width")e.width=o,e.height=void 0;else if(t==="height")e.width=void 0,e.height=a;else if(t==="percent"){const s=e.naturalWidth??e.ref?.value?.naturalWidth;e.width=s?s*(n/100):void 0,e.height=void 0}return e}function Ln(e=Y("zoomMode"),t=Y("zoomValue")){Me("Zoom",e,t),Mo("zoomMode",e),Mo("zoomValue",t),e==="height"?Pe("scrollToPage",he("currentPage")):ro("header");const n=he("images"),o=he("manga"),a={};for(let s=o?.begin??1;s<=(o?.pages??1);s++)a[s]=l1({...n?.[s]},e,t);Pe("images",a)}function Zo(e,t=Y("zoomValue")){return()=>{Ln(e,t)}}function Ya(e=1){return()=>{const t=Y("zoomValue")+e*Y("zoomStep");t>0&&t<500&&Ln("percent",t)}}function b7(e){const t=e.currentTarget.value;Mt("zoomMode",t)}function w7(e){const t=e.detail.value,n=typeof t=="string"?parseInt(t,10):t;Mt("zoomValue",n),Ln("percent",n)}function _7(e){const t=e.detail.value;Ln("percent",typeof t=="string"?parseInt(t,10):t)}function br(e){return()=>{Mo("viewMode",e),["FluidLTR","FluidRTL","Book","Manga"].includes(e)?(Mo("zoomMode","height"),Mo("header","click"),Ln("height")):(ro("zoomMode"),ro("zoomValue"),ro("header")),Ln()}}function y7(e){const t=e.currentTarget.value;Mt("viewMode",t),br(t)()}function k7(e){const t=Y("viewMode")==="FluidRTL"?-1:1;he("chapter").value?.scrollBy({left:.8*window.innerWidth*e*t,behavior:"smooth"})}function E7(e){const t=he("currentPage")+e;t<0?Pe("scrollToPage",0):t>(he("manga")?.pages??1)||Pe("scrollToPage",t)}function M7(e){window.scrollBy({top:.8*window.innerHeight*e,behavior:"smooth"})}function S7(e){const t=he("currentPage"),n=he("manga");if(!n)return;const o=he("images")??{},a=n.begin??1,s=n.pages??1,c=h=>{if(h<a||h>s)return!1;if(o[h]?.doublePage)return!0;let u=0;for(let f=h-1;f>=a&&!o[f]?.doublePage;f--)u++;return u%2===0};let l;if(e===1)for(l=t+1;l<=s&&!c(l);)l++;else if(c(t))for(l=t-1;l>a&&!c(l);)l--;else for(l=t;l>a&&!c(l);)l--;l<a?Pe("scrollToPage",0):l>s?Pe("scrollToPage",s):Pe("scrollToPage",l)}function c1(e){const t=Y("viewMode"),n=Y("zoomMode");Me("Scrolling view",t,"zoom",n,"sign",e),t.match(/^(Book|Manga)$/)&&n==="height"?S7(e):t.startsWith("Fluid")?k7(e):n==="height"?E7(e):M7(e)}function Ni(e){const t=he("manga")?.[e];t&&t!=="#"?window.location.href=(0,Kh.sanitizeUrl)(t):e==="series"&&(qs()?window.location.href=window.location.pathname:window.history.back())}var A7={SCROLL_UP(){c1(-1)},SCROLL_DOWN(){c1(1)},NEXT_CHAPTER(){Ni("next")},PREVIOUS_CHAPTER(){Ni("prev")},RETURN_CHAPTER_LIST(){Ni("series")},ENLARGE(){Ya(1)()},REDUCE(){Ya(-1)()},RESTORE(){Zo("percent",100)()},FIT_WIDTH(){Zo("width")()},FIT_HEIGHT(){Zo("height")()},SETTINGS(){Du("panel",e=>e==="none"?"settings":"none")},VIEW_MODE_WEBCOMIC(){br("WebComic")()},VIEW_MODE_VERTICAL(){br("Vertical")()},VIEW_MODE_LEFT(){br("FluidRTL")()},VIEW_MODE_RIGHT(){br("FluidLTR")()},VIEW_MODE_GALLERY(){br("Gallery")()},SCROLL_START(){qa()},INCREASE_SPEED(){s1(1)},DECREASE_SPEED(){s1(-1)},TOGGLE_CONTROLS(){So("hidePageControls",e=>!e)}};function d1(){document.onkeydown=null,document.onkeyup=null,window.onkeydown=null,window.onkeyup=null,window.onload=null,document.body.onload=null,Jr.unbind(),xe.default.keys(Y("keybinds")).forEach(e=>{Jr(Y("keybinds")[e]?.join(",")??"",xe.default.throttle(t=>{he("panel")!=="keybindingsEditor"&&(t.preventDefault(),t.stopImmediatePropagation(),t.stopPropagation(),A7[e]())},100))})}var Pn=class extends tt{constructor(...t){super(...t),this.mode="disabled",this.currentPage=1,this.totalPages=1,this.startPage=1}static{this.styles=kt`
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
          @click=${Ri}
          value="${this.prev}"
          ?disabled=${Ar(this.prev)||this.prev==="#"}
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
            @input="${z9}"
          ></mov-slider>
        </div>

        <button class="pagination-button" @click=${this.goToNextPage} ?disabled=${this.isLastPage}>
          <mov-icon name="chevron-right"></mov-icon>
          <div class="tooltip">Next Page</div>
        </button>

        <button
          class="pagination-button"
          @click=${Ri}
          value="${this.next}"
          ?disabled=${Ar(this.next)||this.next==="#"}
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
          ?disabled=${this.isFirstPage&&(Ar(this.prev)||this.prev==="#")}
        >
          <mov-icon name="chevron-left"></mov-icon>
        </button>
        <button
          class="side-arrow right"
          @click=${this.handleRightArrowClick}
          ?disabled=${this.isLastPage&&(Ar(this.next)||this.next==="#")}
        >
          <mov-icon name="chevron-right"></mov-icon>
        </button>
      </div>
    `}render(){if(this.mode==="disabled")return Ne;const t=this.mode==="slider"||this.mode==="both",n=this.mode==="side-arrows"||this.mode==="both";return re`
      ${t?this.renderSlider():Ne} ${n?this.renderSideArrows():Ne}
    `}handleLeftArrowClick(){this.isFirstPage?Ni("prev"):this.goToPreviousPage()}handleRightArrowClick(){this.isLastPage?Ni("next"):this.goToNextPage()}goToPreviousPage(){this.goToPage(this.currentPage-1)}goToNextPage(){this.goToPage(this.currentPage+1)}goToPage(t){Pe("scrollToPage",t)}};D([q({type:String})],Pn.prototype,"mode",void 0),D([q({type:Number})],Pn.prototype,"currentPage",void 0),D([q({type:Number})],Pn.prototype,"totalPages",void 0),D([q({type:Number})],Pn.prototype,"startPage",void 0),D([q({type:String})],Pn.prototype,"next",void 0),D([q({type:String})],Pn.prototype,"prev",void 0),Pn=D([lt("manga-pagination")],Pn);var Rn=class extends tt{constructor(...t){super(...t),this.open=!1,this.placement="end",this.label="",this.withoutHeader=!1,this.lightDismiss=!0}static{this.styles=kt`
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
                ${wc}
              </button>
            </div>
          </div>
        `}
        <slot class="content-slot" part="body"></slot>
        <slot name="footer" class="footer-slot" part="footer"></slot>
      </dialog>
    `}};D([q({type:Boolean,reflect:!0})],Rn.prototype,"open",void 0),D([q({type:String,reflect:!0})],Rn.prototype,"placement",void 0),D([q({type:String,reflect:!0})],Rn.prototype,"label",void 0),D([q({type:Boolean,reflect:!0,attribute:"without-header"})],Rn.prototype,"withoutHeader",void 0),D([q({type:Boolean,reflect:!0,attribute:"light-dismiss"})],Rn.prototype,"lightDismiss",void 0),D([En("dialog")],Rn.prototype,"dialog",void 0),Rn=D([lt("mov-drawer")],Rn);var so=class extends tt{static{this.styles=kt`
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
    `}};D([q({type:Boolean,reflect:!0})],so.prototype,"open",void 0),D([q({type:Boolean,reflect:!0})],so.prototype,"checkable",void 0),D([q({type:Number})],so.prototype,"distance",void 0),D([q({type:Number})],so.prototype,"skidding",void 0),D([q({type:String})],so.prototype,"placement",void 0),so=D([lt("mov-dropdown")],so);var $n=class extends tt{constructor(...t){super(...t),this.selected=!1,this.checked=!1,this.disabled=!1,this.value="",this.variant="default",this.type="normal"}static{this.styles=kt`
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
    `}};D([q({type:Boolean,reflect:!0})],$n.prototype,"selected",void 0),D([q({type:Boolean,reflect:!0})],$n.prototype,"checked",void 0),D([q({type:Boolean,reflect:!0})],$n.prototype,"disabled",void 0),D([q({type:String})],$n.prototype,"value",void 0),D([q({type:String,reflect:!0})],$n.prototype,"variant",void 0),D([q({type:String,reflect:!0})],$n.prototype,"type",void 0),$n=D([lt("mov-dropdown-item")],$n);var Sc=class extends tt{constructor(...t){super(...t),this.orientation="horizontal"}static{this.styles=kt`
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
    ></div>`}};D([q({type:String,reflect:!0})],Sc.prototype,"orientation",void 0),Sc=D([lt("mov-divider")],Sc);var u1="kbd,.key{white-space:nowrap;text-align:center;background-color:#505050;background-color:gradient(linear, left top, left bottom, from(#3c3c3c), to(#505050));color:#fafafa;text-shadow:-1px -1px #464646;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:none;border-radius:.3em;min-width:1em;padding:.3em .4em .2em .3em;font-family:Lucida Grande,Lucida,Arial,sans-serif;font-size:.85em;font-style:normal;line-height:1;text-decoration:none;display:inline-block;-webkit-box-shadow:inset 0 0 1px #969696,inset 0 -.05em .4em #505050,0 .1em #1e1e1e,0 .1em .1em #0000004d;box-shadow:inset 0 0 1px #969696,inset 0 -.05em .4em #505050,0 .1em #1e1e1e,0 .1em .1em #0000004d}kbd[title],.key[title]{cursor:help}kbd.dark,.dark-keys kbd,.key.dark,.dark-keys .key{white-space:nowrap;text-align:center;background-color:#505050;background-color:gradient(linear, left top, left bottom, from(#3c3c3c), to(#505050));color:#fafafa;text-shadow:-1px -1px #464646;border:none;border-radius:.3em;min-width:1em;padding:.3em .4em .2em .3em;font-family:Lucida Grande,Lucida,Arial,sans-serif;font-style:normal;text-decoration:none;display:inline-block;-webkit-box-shadow:inset 0 0 1px #969696,inset 0 -.05em .4em #505050,0 .1em #1e1e1e,0 .1em .1em #0000004d;box-shadow:inset 0 0 1px #969696,inset 0 -.05em .4em #505050,0 .1em #1e1e1e,0 .1em .1em #0000004d}kbd.light,.light-keys kbd,.key.light,.light-keys .key{white-space:nowrap;text-align:center;background-color:#fafafa;background-color:gradient(linear, left top, left bottom, from(#d2d2d2), to(#fff));color:#323232;text-shadow:0 0 2px #fff;border:none;border-radius:.3em;min-width:1em;padding:.3em .4em .2em .3em;font-family:Lucida Grande,Lucida,Arial,sans-serif;font-style:normal;text-decoration:none;display:inline-block;-webkit-box-shadow:inset 0 0 1px #fff,inset 0 0 .4em #c8c8c8,0 .1em #828282,0 .11em #0006,0 .1em .11em #000000e6;box-shadow:inset 0 0 1px #fff,inset 0 0 .4em #c8c8c8,0 .1em #828282,0 .11em #0006,0 .1em .11em #000000e6}kbd.so,.so-keys kbd,.key.so,.so-keys .key{white-space:nowrap;text-align:center;color:#242729;text-shadow:0 1px #fff;background-color:#e1e3e5;border:1px solid #adb3b9;border-radius:.272727em;min-width:1em;margin:0 .1em;padding:.1em .6em;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;font-style:normal;line-height:1.4;text-decoration:none;display:inline-block;-webkit-box-shadow:0 1px #0c0d0e33,inset 0 0 0 2px #fff;box-shadow:0 1px #0c0d0e33,inset 0 0 0 2px #fff}kbd.github,.github-keys kbd,.key.github,.github-keys .key{white-space:nowrap;text-align:center;color:#444d56;vertical-align:middle;-webkit-box-sizing:border-box;box-sizing:border-box;min-width:1em;text-shadow:none;background-color:#fafbfc;border:1px solid #c6cbd1;border-bottom-color:#959da5;border-radius:.272727em;padding:.272727em .454545em;font-family:SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace;font-size:68.75%;font-style:normal;line-height:.909091;text-decoration:none;display:inline-block;-webkit-box-shadow:inset 0 -1px #959da5;box-shadow:inset 0 -1px #959da5}",x7=Sr((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.StoreController=void 0;var t=class{constructor(n,o){this.host=n,this.atom=o,n.addController(this)}hostConnected(){this.unsubscribe=this.atom.subscribe(()=>{this.host.requestUpdate()})}hostDisconnected(){var n;(n=this.unsubscribe)===null||n===void 0||n.call(this)}get value(){return this.atom.get()}};e.StoreController=t})),Ac=Sr((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.MultiStoreController=void 0;var t=class{constructor(n,o){this.host=n,this.atoms=o,n.addController(this)}hostConnected(){this.unsubscribes=this.atoms.map(n=>n.subscribe(()=>this.host.requestUpdate()))}hostDisconnected(){var n;(n=this.unsubscribes)===null||n===void 0||n.forEach(o=>o())}get values(){return this.atoms.map(n=>n.get())}};e.MultiStoreController=t})),I7=Sr((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.useStores=void 0;var t=Ac();function n(...o){return a=>class extends a{constructor(...s){super(...s),new t.MultiStoreController(this,o)}}}e.useStores=n})),C7=Sr((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.withStores=void 0;var t=Ac(),n=(o,a)=>class extends o{constructor(...c){super(...c),new t.MultiStoreController(this,a)}};e.withStores=n})),O7=Sr((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.withStores=e.useStores=e.MultiStoreController=e.StoreController=void 0;var t=x7();Object.defineProperty(e,"StoreController",{enumerable:!0,get:function(){return t.StoreController}});var n=Ac();Object.defineProperty(e,"MultiStoreController",{enumerable:!0,get:function(){return n.MultiStoreController}});var o=I7();Object.defineProperty(e,"useStores",{enumerable:!0,get:function(){return o.useStores}});var a=C7();Object.defineProperty(e,"withStores",{enumerable:!0,get:function(){return a.withStores}})})),jo=O7(),h1=class extends tt{static{this.styles=kt`
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
    `}};h1=D([lt("mov-button-group")],h1);var Xa=49,T7=100,L7=class lp{constructor(t){this.prevOffset=0,this.headroom="top",this.headerVisible=!0,this.handleScroll=xe.default.throttle(()=>{if(this.isAnyDropdownOpen()){this.prevOffset=window.scrollY;return}const o=Y("header"),{scrollY:a}=window;let s="none";Y("zoomMode")!=="height"&&a+window.innerHeight+T7>document.body.scrollHeight?s="end":a>this.prevOffset&&a>Xa?s="hide":o==="scroll"&&a<this.prevOffset&&a>Xa?s="show":o!=="click"&&a<=Xa&&(s="top");let c=!1;if(this.headroom!==s&&(this.headroom=s,c=!0),o==="scroll"){const l=s!=="hide";this.headerVisible!==l&&(this.headerVisible=l,c=!0)}c&&this.host.requestUpdate(),this.prevOffset=a},300),this.handleMouseMove=xe.default.throttle(o=>{if(this.isAnyDropdownOpen()){this.headerVisible||(this.headerVisible=!0,this.host.requestUpdate());return}if(["hover","scroll"].includes(Y("header"))){const a=lp.isMouseInsideRegion(o,window.innerWidth,Xa*1.5);this.headerVisible!==a&&(this.headerVisible=a,this.host.requestUpdate())}},300),this.toggleHeaderVisibility=()=>{Y("header")==="click"&&(this.headerVisible=!this.headerVisible,this.host.requestUpdate())},this.host=t,t.addController(this);const n=Y("header");Y("zoomMode")==="height"&&["click","hover"].includes(n)&&(this.headerVisible=!1)}hostConnected(){window.addEventListener("scroll",this.handleScroll),window.addEventListener("mousemove",this.handleMouseMove)}hostDisconnected(){window.removeEventListener("scroll",this.handleScroll),window.removeEventListener("mousemove",this.handleMouseMove)}isAnyDropdownOpen(){if(!this.host.shadowRoot)return!1;const t=this.host.shadowRoot.querySelectorAll("mov-dropdown");for(const n of t)if(n.open)return!0;return!1}static isMouseInsideRegion(t,n,o){return t.clientX>=0&&t.clientX<=n&&t.clientY>=0&&t.clientY<=o}},P7=class{constructor(e){this.canvasContext=null,this.host=e,e.addController(this);const t=document.createElement("canvas");this.canvasContext=t.getContext("2d"),this.resizeObserver=new ResizeObserver(()=>this.update())}hostConnected(){}hostDisconnected(){this.resizeObserver.disconnect()}observe(e,t){!e||!t||(this.element=e,this.text=t,this.resizeObserver.disconnect(),this.resizeObserver.observe(this.element),this.update())}update(){if(!this.element||!this.text||!this.canvasContext){this.value=this.text,this.host.requestUpdate();return}const e=window.getComputedStyle(this.element);this.canvasContext.font=`${e.fontWeight} ${e.fontSize} ${e.fontFamily}`;const t=this.text,n=this.element.clientWidth;if(this.canvasContext.measureText(t).width<=n){this.value=t,this.host.requestUpdate();return}const o="...",a=n-this.canvasContext.measureText(o).width;let s="",c="";for(let l=1;l<t.length;l++){const h=t.substring(0,l),u=t.substring(t.length-l);if(this.canvasContext.measureText(h).width+this.canvasContext.measureText(u).width>a)break;s=h,c=u}this.value=`${s}${o}${c}`,this.host.requestUpdate()}};function f1(e=window.location.href){Ar(Ao(e))||(Me(`Bookmark Removed ${e}`),So("bookmarks",t=>[...t.filter(n=>n.url!==e)]))}function R7(e){const t=e.currentTarget.value;Me(`Bookmark Removed ${t}`),cr.error({title:Z("BOOKMARK_REMOVED"),duration:1e4}),f1(t)}function $7(){Pe("panel","bookmarks")}function p1(){const e=he("currentPage"),t={name:he("manga")?.title??document.documentElement.title??window.location.hostname,url:window.location.href,page:e,date:new Date().toISOString().slice(0,10)};Ao(t.url)?(So("bookmarks",n=>[...n.filter(o=>o.url!==t.url)]),cr.error({title:Z("BOOKMARK_REMOVED"),duration:1e4})):(So("bookmarks",n=>[...n,t]),cr.success({title:Z("BOOKMARK_SAVED"),description:Z("BOOKMARK_MESSAGE").replace("##num##",e.toString()),duration:1e4}))}function xc(){Pe("panel","none")}function D7(){Pe("panel","settings")}function B7(){Pe("panel","keybindings")}function z7(e){const t={};xe.default.keys(e).forEach(n=>{const o=e[n].value;if(o){const a=o.value.split(",").map(s=>s.trim()).filter(s=>s!=="");t[n]=a.length>0?a:void 0}}),Mt("keybinds",t),Pe("panel","keybindings"),d1()}function N7(){Pe("panel","keybindingsEditor")}var H7="#Header{background-color:var(--theme-background-color);z-index:900;flex-flow:row;justify-content:space-around;align-items:center;gap:10px;padding:0 20px;transition:transform .3s ease-in;display:flex;position:sticky;top:0;left:0;right:0;box-shadow:0 0 25px #00000080}#Header.click{padding-left:60px}@keyframes headroom{0%{transform:translateY(-100%)}to{transform:translateY(0%)}}#Header:not(.visible,.headroom-top,.fixed,.simple){animation:.3s ease-in reverse headroom;position:sticky;top:0;transform:translateY(-100%)}#Header.scroll.headroom-hide:not(.visible){animation:none;position:sticky;top:0;transform:translateY(-100%)}#Header.scroll.headroom-show,#Header.headroom-end,#Header.visible{animation:.3s ease-in headroom;position:sticky;top:0;transform:translateY(0%)}#Header.headroom-top{animation:none}#Header.fixed{animation:none;position:sticky;top:0;transform:translateY(0%)}#Header.simple{animation:none;position:static;top:0;transform:translateY(0%)}#menu{z-index:1;color:var(--theme-body-text-color);width:40px;height:40px;position:fixed}#menu:not(.click),#menu.hide{display:none}#menu.click{z-index:901;opacity:.8;top:25px;left:5px}#Toolbar{order:1}#GlobalFunctions{order:4}#ViewerTitle{order:2;justify-content:center;display:flex}#ZoomControl{flex-direction:column;order:3;align-items:center;gap:3px;min-width:100px;padding:10px 5px;display:flex}#MangaTitle{word-wrap:anywhere;white-space:nowrap;text-overflow:ellipsis;min-width:200px;max-width:40vw;margin:0;padding:2px;font-size:19px;font-weight:400;overflow:hidden}",m1="#Header.mobile,#Header.tablet{flex-flow:wrap;justify-content:center;gap:0;display:flex}.mobile #ViewerTitle,.tablet #ViewerTitle{order:4;min-height:auto}.mobile #Toolbar,.tablet #Toolbar{order:1}#Header.mobile{flex-flow:wrap;justify-content:center;align-items:center}#Header.mobile.click+#Chapter:not(.webcomic,.vertical){position:sticky}.tablet #MangaTitle,.mobile #MangaTitle{max-width:90vw}.mobile #ViewerTitle{order:3;height:auto;margin-top:0;padding:0}.mobile #GlobalFunctions,.tablet #GlobalFunctions{order:2}.mobile .PageFunctions{padding:0}.mobile .PageFunctions .PageButton.Bookmark{opacity:1}.mobile #GlobalFunctions #ZoomSlider,.tablet #GlobalFunctions #ZoomSlider,.mobile .PageFunctions .PageButton:not(.Bookmark),.tablet #Counters,.mobile #ZoomControl,.mobile #ZoomDropdown,.mobile #ViewDropdown,.mobile #FileDropdown :where(:nth-child(3),:nth-child(4)),.mobile #BookMode,.mobile #MangaMode,.tablet #BookMode,.tablet #MangaMode{display:none}",Ja=class extends tt{static{this.styles=[Se(H7),Se(m1),Se(u1),kt``]}constructor(){super(),this.headroomController=new L7(this),this.titleController=new P7(this)}updated(t){super.updated(t),t.has("manga")&&this.manga&&requestAnimationFrame(()=>{this.manga&&this.titleController.observe(this.mangaTitleElement,this.manga?.title??"Manga Online Viewer")})}render(){if(!this.manga)return re``;const{headroom:t,headerVisible:n}=this.headroomController,o=Y("keybinds"),a=s=>{if(he("device")!=="desktop")return Ne;const c=o[s];return!c||c.length===0?Ne:c.map(l=>re`<kbd slot="details">${l}</kbd>`)};return re`
      <toggle-button
        id="menu"
        mode="burger"
        class="${Et({[Y("header")]:!0,hide:["top","end"].includes(t)})}"
        ?active=${n}
        @toggle=${this.headroomController.toggleHeaderVisibility}
      >
      </toggle-button>
      <header
        id="Header"
        class="${Et({[Y("header")]:!0,[`headroom-${t}`]:!0,visible:n&&["hide","none"].includes(t),[he("device")]:!0})}"
      >
        <mov-button-group
          id="Toolbar"
          class="${Et({"button-group-merged-end":["mobile","tablet"].includes(he("device"))})}"
        >
          <mov-dropdown id="FileDropdown">
            <mov-button
              slot="trigger"
              title="${Z("FILE_MENU")}"
            >
              <mov-icon
                label="File"
                name="IconDotsVertical"
              ></mov-icon>
            </mov-button>
            <mov-dropdown-item
              id="settings"
              @click=${D7}
            >
              <mov-icon
                slot="icon"
                name="IconSettings"
              ></mov-icon>
              ${Z("SETTINGS")} ${a("SETTINGS")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="keybindings"
              @click=${B7}
            >
              <mov-icon
                slot="icon"
                name="IconKeyboard"
              ></mov-icon>
              ${Z("KEYBINDINGS")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="bookmarks"
              class="tablets"
              @click=${$7}
            >
              <mov-icon
                slot="icon"
                name="IconBookmarks"
              ></mov-icon>
              ${Z("BOOKMARKS")}
            </mov-dropdown-item>
            <mov-divider></mov-divider>
            <mov-dropdown-item
              id="AutoScroll"
              class="${Et({running:he("autoScroll")})}"
              @click=${qa}
            >
              <mov-icon
                slot="icon"
                name="${he("autoScroll")?"IconPlayerPause":"IconPlayerPlay"}"
              ></mov-icon>
              ${Z("SCROLL_START")} ${a("SCROLL_START")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="pageControls"
              class="tablets phones"
              @click="${D9}"
              ?selected=${Y("hidePageControls")}
            >
              <mov-icon
                slot="icon"
                name="IconListNumbers"
              ></mov-icon>
              ${Z("TOGGLE_CONTROLS")} ${a("TOGGLE_CONTROLS")}
            </mov-dropdown-item>
          </mov-dropdown>

          <mov-dropdown
            id="ViewDropdown"
            checkable
          >
            <mov-button
              slot="trigger"
              title="${Z("VIEW_MENU")}"
            >
              <mov-icon
                label="View"
                name="IconApiBook"
              ></mov-icon>
            </mov-button>
            <mov-dropdown-item
              id="webComic"
              class="tablets"
              @click="${br("WebComic")}"
              ?selected=${Y("viewMode")==="WebComic"}
            >
              <mov-icon
                slot="icon"
                name="IconSpacingVertical"
              ></mov-icon>
              ${Z("VIEW_MODE_WEBCOMIC")} ${a("VIEW_MODE_WEBCOMIC")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="verticalMode"
              class="tablets"
              @click="${br("Vertical")}"
              ?selected=${Y("viewMode")==="Vertical"}
            >
              <mov-icon
                slot="icon"
                name="IconArrowAutofitDown"
              ></mov-icon>
              ${Z("VIEW_MODE_VERTICAL")} ${a("VIEW_MODE_VERTICAL")}
            </mov-dropdown-item>
            <mov-divider></mov-divider>
            <mov-dropdown-item
              id="ltrMode"
              @click="${br("FluidLTR")}"
              ?selected=${Y("viewMode")==="FluidLTR"}
            >
              <mov-icon
                slot="icon"
                name="IconArrowAutofitRight"
              ></mov-icon>
              ${Z("VIEW_MODE_LEFT")} ${a("VIEW_MODE_LEFT")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="rtlMode"
              @click="${br("FluidRTL")}"
              ?selected=${Y("viewMode")==="FluidRTL"}
            >
              <mov-icon
                slot="icon"
                name="IconArrowAutofitLeft"
              ></mov-icon>
              ${Z("VIEW_MODE_RIGHT")} ${a("VIEW_MODE_RIGHT")}
            </mov-dropdown-item>
            <mov-divider></mov-divider>
            <mov-dropdown-item
              id="BookMode"
              @click="${br("Book")}"
              ?selected=${Y("viewMode")==="Book"}
            >
              <mov-icon
                slot="icon"
                name="IconBookArrowRight"
              ></mov-icon>
              ${Z("VIEW_MODE_BOOK")} ${a("VIEW_MODE_BOOK")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="MangaMode"
              @click="${br("Manga")}"
              ?selected=${Y("viewMode")==="Manga"}
            >
              <mov-icon
                slot="icon"
                name="IconBookArrowLeft"
              ></mov-icon>
              ${Z("VIEW_MODE_MANGA")} ${a("VIEW_MODE_MANGA")}
            </mov-dropdown-item>
            <mov-divider></mov-divider>
            <mov-dropdown-item
              id="GalleryMode"
              @click="${br("Gallery")}"
              ?selected=${Y("viewMode")==="Gallery"}
            >
              <mov-icon
                slot="icon"
                name="IconLayoutDashboard"
              ></mov-icon>
              ${Z("VIEW_MODE_GALLERY")} ${a("VIEW_MODE_GALLERY")}
            </mov-dropdown-item>
          </mov-dropdown>
          <mov-dropdown
            id="ZoomDropdown"
            checkable
          >
            <mov-button
              slot="trigger"
              title="${Z("ZOOM_MENU")}"
            >
              <mov-icon
                label="Zoom"
                name="IconZoom"
              ></mov-icon>
            </mov-button>
            <mov-dropdown-item
              id="enlarge"
              @click="${Ya()}"
            >
              <mov-icon
                slot="icon"
                name="IconZoomInArea"
              ></mov-icon>
              ${Z("ENLARGE")} ${a("ENLARGE")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="restore"
              @click="${Zo("percent",100)}"
            >
              <mov-icon
                slot="icon"
                name="IconZoomPan"
              ></mov-icon>
              ${Z("RESTORE")} ${a("RESTORE")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="reduce"
              @click="${Ya(-1)}"
            >
              <mov-icon
                slot="icon"
                name="IconZoomOutArea"
              ></mov-icon>
              ${Z("REDUCE")} ${a("REDUCE")}
            </mov-dropdown-item>
            <mov-divider></mov-divider>
            <mov-dropdown-item
              id="fitWidth"
              @click="${Zo("width")}"
              ?selected=${Y("zoomMode")==="width"}
            >
              <mov-icon
                slot="icon"
                name="IconArrowAutofitWidth"
              ></mov-icon>
              ${Z("FIT_WIDTH")} ${a("FIT_WIDTH")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="fitHeight"
              @click="${Zo("height")}"
              ?selected=${Y("zoomMode")==="height"}
            >
              <mov-icon
                slot="icon"
                name="IconArrowAutofitHeight"
              ></mov-icon>
              ${Z("FIT_HEIGHT")} ${a("FIT_HEIGHT")}
            </mov-dropdown-item>
          </mov-dropdown>
        </mov-button-group>
        <mov-button-group
          id="GlobalFunctions"
          class="${Et({"button-group-merged-start":["mobile","tablet"].includes(he("device"))})}"
        >
          <mov-button
            id="series"
            href="${this.manga.series??Ne}"
            @click=${Ri}
            title="${Z("RETURN_CHAPTER_LIST")}"
            ?disabled=${!this.manga.series}
          >
            <mov-icon name="IconBooksReturn"></mov-icon>
          </mov-button>
          <mov-button
            id="download"
            title="${Z("DOWNLOAD_ZIP")}"
            @click=${Yh}
            ?disabled=${he("download")!=="available"}
            ?loading=${he("download")==="working"}
          >
            <mov-icon
              name="${he("download")==="working"?"IconLoader2":"IconFileDownload"}"
            ></mov-icon>
          </mov-button>
          <mov-button
            id="prev"
            href="${this.manga.prev??Ne}"
            title="${Z("PREVIOUS_CHAPTER")}"
            @click=${Ri}
            ?disabled=${!this.manga.prev}
          >
            <mov-icon name="IconArrowBigLeft"></mov-icon>
          </mov-button>
          <mov-button
            id="next"
            href="${this.manga.next??Ne}"
            title="${Z("NEXT_CHAPTER")}"
            @click=${Ri}
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
            @input=${_7}
          ></mov-slider>
        </div>
      </header>
    `}};D([En("#MangaTitle")],Ja.prototype,"mangaTitleElement",void 0),D([q({type:Object})],Ja.prototype,"manga",void 0),Ja=D([lt("reader-header"),(0,jo.useStores)(Ot,Eo,tr)],Ja);var F7="#BookmarksPanel{text-align:center;--width:100vw}#BookmarksList{flex-direction:column;gap:5px;max-height:60vh;padding:0 5px;display:flex;overflow:auto}.bookmark-item{text-align:left;border-radius:5px;align-items:center;gap:1rem;padding:.75rem 1rem;transition:background-color .15s ease-in-out;display:flex}.bookmark-item:hover{background-color:var(--mov-color-fill-quiet,#8080801a)}.bookmark-info{flex-grow:1;min-width:0}.bookmark-name{font-weight:500}.bookmark-url{white-space:nowrap;text-overflow:ellipsis;color:color-mix(in oklab, var(--theme-body-text-color), transparent 30%);font-size:14px;text-decoration:none;display:block;overflow:hidden}.bookmark-url:hover{text-decoration:underline}.bookmark-details{text-align:right;width:90px;color:color-mix(in oklab, var(--theme-body-text-color), transparent 30%);flex-shrink:0;font-size:14px}.bookmark-details>div{padding:2px 0}.bookmark-actions{flex-shrink:0;gap:.5rem;display:flex}",g1=class extends tt{static{this.styles=[Se(F7)]}listBookmarks(){return Zs(Y("bookmarks"))?[Z("LIST_EMPTY")]:Y("bookmarks").map((t,n)=>re`
        <div
          id="Bookmark${n+1}"
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
              @click=${R7}
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
        @close=${xc}
      >
        <mov-button
          class="Bookmark"
          title="${Z("BOOKMARK")}"
          @click=${p1}
          slot="header-actions"
        >
          <mov-icon
            name="${Ao()===void 0?"IconBookmark":"IconBookmarkOff"}"
            size="24px"
          ></mov-icon>
        </mov-button>
        <h2 slot="header">${Z("BOOKMARKS")}</h2>
        <h2 slot="label">${Z("BOOKMARKS")}</h2>
        <div id="BookmarksList">${this.listBookmarks()}</div>
      </mov-dialog>
    `}};g1=D([lt("bookmark-panel"),(0,jo.useStores)(Ot,Eo,tr)],g1);function*G7(e,t){const n=typeof t=="function";if(e!==void 0){let o=-1;for(const a of e)o>-1&&(yield n?t(o):t),o++,yield a}}var W7="#KeybindingsPanel div{line-height:1.5em}#KeybindingsPanel #KeybindingsList{grid-template-columns:1fr 2fr;gap:5px;display:grid}#KeybindingsPanel .ControlButton{justify-content:center;align-items:center;gap:.5em;margin-left:3px;padding:5px 10px}#KeybindingsPanel label{display:ruby}#KeybindingsPanel input{width:100%;display:inline-block}#KeybindingsPanel #HotKeysRules{grid-column:span 2}",v1=class extends tt{constructor(...t){super(...t),this.keybindsRefs=xe.default.keys(Y("keybinds")).reduce((n,o)=>(n[o]=ol(),n),{})}static{this.styles=[Se(W7),Se(u1)]}keybindList(){const t=Y("keybinds");return xe.default.keys(t).map(n=>{const o=t[n]?.length?G7(t[n]?.map(a=>re`<kbd class="dark">${a}</kbd>`)," / "):"";return re`<span>${Z(n)}:</span> <span>${o}</span>`})}keybindEditor(){const t=Y("keybinds");return xe.default.keys(t).map(n=>re`<label for="${n}">${Z(n)}:</label>
          <input
            type="text"
            class="KeybindInput"
            id="${n}"
            name="${n}"
            value="${t[n]?.join(" , ")??Ne}"
            ${al(this.keybindsRefs[n])}
          />`)}render(){return re`
      <mov-drawer
        id="KeybindingsPanel"
        ?open=${he("panel").startsWith("keybindings")}
        placement="end"
        @close=${xc}
      >
        <h2 slot="label">${Z("KEYBINDINGS")}</h2>
        <div
          class="controls"
          slot="header-actions"
        >
          ${he("panel")==="keybindingsEditor"?re` <mov-button
                id="SaveKeybindings"
                type="button"
                title="${Z("SAVE_KEYBINDS")}"
                @click=${()=>z7(this.keybindsRefs)}
              >
                <mov-icon
                  name="IconDeviceFloppy"
                  size="16px"
                  slot="start"
                ></mov-icon>
                ${Z("BUTTON_SAVE")}
              </mov-button>`:re` <mov-button
                id="EditKeybindings"
                type="button"
                title="${Z("EDIT_KEYBINDS")}"
                @click=${N7}
              >
                <mov-icon
                  name="IconPencil"
                  size="16px"
                  slot="start"
                ></mov-icon>
                ${Z("BUTTON_EDIT")}
              </mov-button>`}
        </div>
        <div id="KeybindingsList">
          ${he("panel")==="keybindingsEditor"?this.keybindEditor():this.keybindList()}
        </div>
        <div id="HotKeysRules">${Tu(Z("KEYBIND_RULES"))}</div>
      </mov-drawer>
    `}};v1=D([lt("keybindings-panel"),(0,jo.useStores)(Ot,Eo,tr)],v1);function*U7(e,t){if(e!==void 0){let n=0;for(const o of e)yield t(o,n++)}}function Qa(e,t=1){return Array(e).fill(0).map((n,o)=>o+1).filter(n=>n>=t)}function es(e){const t=e.replace(/[\t\n\r]/gim,"").replace(/\s\s+/g," ");return`data:image/svg+xml;charset=UTF-8,${encodeURIComponent(t).replace(/\(/g,"%28").replace(/\)/g,"%29")}`}var SI=xe.default.values(Ct).map(e=>e[900]);function b1(e){e.deltaY&&(e.currentTarget.scrollLeft+=e.deltaY+e.deltaX,e.preventDefault())}function V7(e){e.deltaY&&(e.currentTarget.scrollLeft-=e.deltaY-e.deltaX,e.preventDefault())}var Z7=":host{--nav-collapsed-size:34px;--nav-expanded-size:200px;--header-height:80px}#Navigation{color:var(--theme-text-color);background-color:var(--theme-hightlight-color);box-sizing:border-box;white-space:nowrap;text-align:center;z-index:1000;gap:5px;line-height:0;transition:all .3s;display:flex;position:fixed;overflow:hidden}#Thumbnails{flex-grow:1;justify-content:flex-start;gap:5px;display:flex}#Navigation.horizontal #Thumbnails{flex-direction:row;overflow:auto hidden}#Navigation.vertical #Thumbnails{flex-direction:column;justify-content:flex-start;overflow:hidden auto}#Navigation.left #Thumbnails{direction:rtl}:host(:not([forceExpanded])) #Navigation:not(:hover) #Thumbnails{display:none}#NavigationCounters{text-align:center;white-space:nowrap;flex-shrink:0;justify-content:center;align-items:center;gap:.5rem;padding:5px;line-height:1rem;display:flex}#Navigation.horizontal{height:var(--nav-collapsed-size);flex-direction:column;width:100%;left:0;right:0}:host([forceExpanded]) #Navigation.horizontal,#Navigation.horizontal:hover{height:var(--nav-expanded-size)}#Navigation.bottom{bottom:0}#Navigation.vertical{width:var(--nav-collapsed-size);flex-direction:row;height:100%;transition:top .3s,height .3s,width .3s;bottom:0}:host([forceExpanded]) #Navigation.vertical,#Navigation.vertical:hover{width:var(--nav-expanded-size)}#Navigation.left{flex-direction:row-reverse;left:0}#Navigation.right{right:0}#Navigation.vertical #NavigationCounters{writing-mode:vertical-rl;transform:rotate(180deg)}#Navigation.right #NavigationCounters{transform:rotate(0)}#Navigation.vertical.header{top:var(--header-height);height:calc(100% - var(--header-height))}#Navigation .Thumbnail{justify-content:center;align-items:center;width:150px;height:150px;margin:0 5px;display:inline-flex;position:relative}.ThumbnailIndex{color:var(--mov-color-on-loud);background-color:var(--mov-color-fill-loud);opacity:.9;text-align:center;z-index:1;width:100%;font-weight:600;line-height:1.2rem;display:block;position:absolute;bottom:30%;left:0}.ThumbnailImg{cursor:pointer;background-position:50%;background-repeat:no-repeat;background-size:48px 48px;min-width:80px;max-width:150px;min-height:150px;max-height:150px;display:inline-block}",Hi=class extends tt{constructor(...t){super(...t),this.mode="bottom",this.forceExpanded=!1,this.isHiding=!1}static{this.styles=[Se(Z7),kt`
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
        background-image: url('${Se(es(fl))}');
      }

      .Thumbnail .ThumbnailImg.imgBroken {
        background-image: url('${Se(es(pl))}');
      }
    `]}willUpdate(t){t.has("mode")&&(this.isHiding=!0)}updated(t){t.has("mode")&&this.isHiding&&setTimeout(()=>{this.isHiding=!1},50)}render(){if(this.mode==="disabled")return Ne;const t=he("manga"),n={horizontal:this.mode==="bottom",vertical:this.mode!=="bottom",left:this.mode==="left",right:this.mode==="right",bottom:this.mode==="bottom",hiding:this.isHiding},o=he("images")||{},a=xe.default.keys(o).filter(s=>{const c=parseInt(s,10);return c>=(t?.begin??1)&&c<=(t?.pages??1)&&o[c]?.status==="loaded"}).length;return re`
      <nav
        id="Navigation"
        class="${Et(n)}"
      >
        <div
          id="NavigationCounters"
          class="ControlLabel"
        >
          ${d9}
          <i>${a}</i> /
          <b> ${(t?.pages??1)-((t?.begin??1)-1)} </b>
          ${Z("PAGES_LOADED")}
          <span>: ${he("currentPage")}</span>
        </div>
        <div
          id="Thumbnails"
          @wheel=${this.mode==="bottom"?b1:null}
        >
          ${U7(Qa(t?.pages??1,t?.begin??1),s=>re` <figure
                id="Thumbnail${s}"
                class="Thumbnail"
                role="button"
                tabindex="0"
                title="Go to page ${s}"
                @click=${()=>N9(s)}
              >
                <img
                  id="ThumbnailImg${s}"
                  alt=""
                  class="ThumbnailImg"
                  src=${he("images")?.[s]?.src??Ne}
                />
                <figcaption class="ThumbnailIndex">${s}</figcaption>
              </figure>`)}
        </div>
      </nav>
    `}};D([q({type:String})],Hi.prototype,"mode",void 0),D([q({type:Boolean})],Hi.prototype,"forceExpanded",void 0),D([Nt()],Hi.prototype,"isHiding",void 0),Hi=D([lt("navbar-thumbnails"),(0,jo.useStores)(Ot,Eo,tr)],Hi);function j7(){const e=to()?"true":"false";return re` <div class="ControlLabel">
    ${Z("SCOPE")}
    <segmented-control
      .value=${e}
      @change=${e7}
    >
      <segmented-control-option
        value="false"
        label=${Z("GLOBAL")}
        icon="IconWorldCog"
      ></segmented-control-option>
      <segmented-control-option
        value="true"
        label=${window.location.hostname}
        icon="IconLocationCog"
      ></segmented-control-option>
    </segmented-control>
  </div>`}function q7(){return yo.map(e=>re`
      <option
        value="${e.ID}"
        ?selected=${Y("locale")===e.ID}
      >
        ${e.NAME}
      </option>
    `)}function K7(){return re` <div class="ControlLabel locale">
    ${Z("LANGUAGE")}
    <select
      id="locale"
      @change="${t7}"
    >
      ${q7()}
    </select>
  </div>`}function Y7(){const e=Y("deviceMode");return re` <div class="ControlLabel">
    ${Z("DEVICE_MODE")}
    <segmented-control
      .value=${e}
      @change=${m7}
    >
      <segmented-control-option
        value="auto"
        label=${Z("DEVICE_MODE_AUTO")}
        icon="IconAdjustmentsHorizontal"
      ></segmented-control-option>
      <segmented-control-option
        value="desktop"
        label=${Z("DEVICE_MODE_DESKTOP")}
        icon="IconDeviceDesktop"
      ></segmented-control-option>
      <segmented-control-option
        value="tablet"
        label=${Z("DEVICE_MODE_TABLET")}
        icon="IconDeviceTablet"
      ></segmented-control-option>
      <segmented-control-option
        value="mobile"
        label=${Z("DEVICE_MODE_MOBILE")}
        icon="IconDeviceMobile"
      ></segmented-control-option>
    </segmented-control>
  </div>`}var X7=()=>re`${j7()} ${Y7()} ${K7()}`;function J7(){return re`
    <div class="ControlLabel loadMode">
      ${Z("DEFAULT_LOAD_MODE")}
      <select
        id="loadMode"
        @change="${r7}"
      >
        <option
          value="wait"
          ?selected=${Y("loadMode")==="wait"}
        >
          ${Z("LOAD_MODE_NORMAL")}
        </option>
        <option
          value="always"
          ?selected=${Y("loadMode")==="always"}
        >
          ${Z("LOAD_MODE_ALWAYS")}
        </option>
        <option
          value="never"
          ?selected=${Y("loadMode")==="never"}
        >
          ${Z("LOAD_MODE_NEVER")}
        </option>
      </select>
    </div>
  `}function Q7(){return re`
    <div class="ControlLabel PagesPerSecond">
      ${Z("LOAD_SPEED")}
      <select
        id="PagesPerSecond"
        @change="${c7}"
      >
        <option
          value="Safe"
          ?selected=${Y("loadSpeed")==="Safe"}
        >
          ${Z("SLOWLY")} (Safe)
        </option>
        <option
          value="Standard"
          ?selected=${Y("loadSpeed")==="Standard"}
        >
          ${Z("NORMAL")} (Standard)
        </option>
        <option
          value="Faster"
          ?selected=${Y("loadSpeed")==="Faster"}
        >
          ${Z("FAST")} (Faster)
        </option>
        <option
          value="Extreme"
          ?selected=${Y("loadSpeed")==="Extreme"}
        >
          ${Z("EXTREME")} (Extreme)
        </option>
        <option
          value="All"
          ?selected=${Y("loadSpeed")==="All"}
        >
          ${Z("ALL_PAGES")} (All)
        </option>
      </select>
    </div>
  `}var e8=()=>re`${J7()} ${Q7()}`;function t8(){return re`
    <div class="ControlLabel fitIfOversize">
      ${Z("FIT_WIDTH_OVERSIZED")}
      <mov-switch
        name="fitIfOversize"
        ?checked=${Y("fitWidthIfOversize")}
        @change=${n7}
      ></mov-switch>
    </div>
    <div class="ControlLabel downloadZip">
      ${Z("DOWNLOAD_IMAGES")}
      <mov-switch
        name="downloadZip"
        ?checked=${Y("downloadZip")}
        @change=${a7}
      ></mov-switch>
    </div>
    <div class="ControlLabel hidePageControls">
      ${Z("HIDE_CONTROLS")}
      <mov-switch
        name="hidePageControls"
        ?checked=${Y("hidePageControls")}
        @change=${h7}
      ></mov-switch>
    </div>
    <div class="ControlLabel lazyLoadImages">
      ${Z("LAZY_LOAD_IMAGES_ENABLE")}
      <mov-switch
        name="lazyLoadImages"
        ?checked=${Y("lazyLoadImages")}
        @change=${s7}
      ></mov-switch>
    </div>
  `}function r8(){return re`
    <div
      class="${Et({ControlLabel:!0,lazyStart:!0,ControlLabelItem:!0,show:Y("lazyLoadImages")})}"
    >
      <span>
        ${Z("LAZY_LOAD_IMAGES")}
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
        @input="${l7}"
      ></mov-slider>
    </div>
  `}function n8(){return re`
    <div class="ControlLabel headerType">
      ${Z("HEADER_TYPE")}
      <segmented-control
        .value=${Y("header")}
        @change=${f7}
        labelPosition="bottom"
      >
        <segmented-control-option
          value="hover"
          label=${Z("HEADER_HOVER")}
          icon="arrows-move"
        ></segmented-control-option>
        <segmented-control-option
          value="scroll"
          label=${Z("HEADER_SCROLL")}
          icon="arrows-vertical"
        ></segmented-control-option>
        <segmented-control-option
          value="click"
          label=${Z("HEADER_CLICK")}
          icon="hand-click"
        ></segmented-control-option>
        <segmented-control-option
          value="fixed"
          label=${Z("HEADER_FIXED")}
          icon="pin"
        ></segmented-control-option>
        <segmented-control-option
          value="simple"
          label=${Z("HEADER_SIMPLE")}
          icon="box-align-top"
        ></segmented-control-option>
      </segmented-control>
    </div>
  `}function o8(){return re`
    <div class="ControlLabel pagination">
      ${Z("PAGINATION_TYPE")}
      <segmented-control
        .value=${Y("pagination")}
        @change=${i7}
        labelPosition="side"
      >
        <segmented-control-option
          value="disabled"
          label=${Z("PAGINATION_DISABLED")}
          icon="x"
        ></segmented-control-option>
        <segmented-control-option
          value="slider"
          label=${Z("PAGINATION_SLIDER")}
          icon="adjustments-horizontal"
        ></segmented-control-option>
        <segmented-control-option
          value="side-arrows"
          label=${Z("PAGINATION_ARROWS")}
          icon="arrows-left-right"
        ></segmented-control-option>
        <segmented-control-option
          value="both"
          label=${Z("PAGINATION_BOTH")}
          icon="arrows-horizontal"
        ></segmented-control-option>
      </segmented-control>
    </div>
  `}function i8(){return re`
    <div class="ControlLabel navbarType">
      ${Z("NAVBAR_TYPE")}
      <segmented-control
        .value=${Y("navbar")}
        @change=${o7}
        labelPosition="tooltip"
      >
        <segmented-control-option
          value="bottom"
          label=${Z("NAVBAR_BOTTOM")}
          icon="layout-bottombar"
        ></segmented-control-option>
        <segmented-control-option
          value="left"
          label=${Z("NAVBAR_LEFT")}
          icon="layout-sidebar"
        ></segmented-control-option>
        <segmented-control-option
          value="right"
          label=${Z("NAVBAR_RIGHT")}
          icon="layout-sidebar-right"
        ></segmented-control-option>
        <segmented-control-option
          value="disabled"
          label=${Z("NAVBAR_DISABLED")}
          icon="x"
        ></segmented-control-option>
      </segmented-control>
    </div>
  `}function a8(){return re`
    <div class="ControlLabel autoScroll">
      <span>
        ${Z("AUTO_SCROLL_HEIGHT")}
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
        @input="${p7}"
      ></mov-slider>
    </div>
  `}var s8=()=>re`${t8()} ${o8()} ${r8()} ${n8()} ${i8()} ${a8()}`;function l8(){const e=Y("colorScheme")==="dark";Mt("colorScheme",e?"light":"dark"),document.documentElement.classList.remove(e?"dark":"light"),document.documentElement.classList.add(Y("colorScheme"))}function ts(e){const t=e instanceof CustomEvent?e.detail.value:e.currentTarget.value;Mt("theme",t)}function c8(){return re`
    <div class="ControlLabel ColorSchemeSelector">
      <label>${Z("COLOR_SCHEME")}</label>
      <toggle-button
        id="ColorScheme"
        mode="theme"
        @click=${l8}
        ?active=${Y("colorScheme")==="dark"}
      >
      </toggle-button>
    </div>
    <div class="ControlLabel ThemeSelector">
      <label>${Z("THEME_COLOR")}</label>
      <mov-color-picker
        id="ThemeHex"
        .value="${Y("theme")}"
        title="${Y("theme")}"
        @input=${ts}
        .swatches=${xe.default.values(bc)}
      ></mov-color-picker>
    </div>
    <color-palette
      .baseColor="${Y("theme")}"
      mode="steps"
      .selected=${Y("theme")}
      @change="${ts}"
    ></color-palette>
    <span id="ColorRecommendations">
      ${xe.default.values(bc).map(e=>re`<color-swatch
            .color="${e}"
            .selected=${Y("theme")}
            @change=${ts}
          ></color-swatch>`)}
    </span>
    <details class="ControlLabel">
      <summary>${Z("THEME_HUE")} & ${Z("THEME_SHADE")}</summary>
      <color-panel
        .selected=${Y("theme")}
        @change=${ts}
      ></color-panel>
    </details>
  `}function d8(){return re` <div class="ControlLabel DefaultZoomMode">
    ${Z("DEFAULT_ZOOM_MODE")}
    <segmented-control
      .value=${Y("zoomMode")}
      @change=${b7}
      labelPosition="tooltip"
    >
      <segmented-control-option
        value="percent"
        label=${Z("PERCENT")}
        icon="file-percent"
      ></segmented-control-option>
      <segmented-control-option
        value="width"
        label=${Z("FIT_WIDTH")}
        icon="arrow-autofit-width"
      ></segmented-control-option>
      <segmented-control-option
        value="height"
        label=${Z("FIT_HEIGHT")}
        icon="arrow-autofit-height"
      ></segmented-control-option>
    </segmented-control>
  </div>`}function u8(){return re`
    <div
      class="${Et({ControlLabel:!0,zoomValue:!0,ControlLabelItem:!0,show:Y("zoomMode")==="percent"})}"
    >
      <span>
        ${Z("DEFAULT_ZOOM")}
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
        @input="${w7}"
      ></mov-slider>
    </div>
  `}function h8(){return re`
    <div class="ControlLabel minZoom">
      <span>
        ${Z("MINIMUM_ZOOM")}
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
        @input="${u7}"
      ></mov-slider>
    </div>
  `}function f8(){return re`
    <div class="ControlLabel zoomStep">
      <span>
        ${Z("ZOOM_STEP")}
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
        @input="${d7}"
      ></mov-slider>
    </div>
  `}function p8(){return re`
    <div class="ControlLabel viewMode">
      ${Z("DEFAULT_VIEW_MODE")}
      <segmented-control
        .value=${Y("viewMode")}
        @change=${y7}
        labelPosition="tooltip"
      >
        <segmented-control-option
          value="Vertical"
          label=${Z("VIEW_MODE_VERTICAL")}
          icon="arrow-autofit-down"
        ></segmented-control-option>
        <segmented-control-option
          value="WebComic"
          label=${Z("VIEW_MODE_WEBCOMIC")}
          icon="spacing-vertical"
        ></segmented-control-option>
        <segmented-control-option
          value="FluidLTR"
          label=${Z("VIEW_MODE_LEFT")}
          icon="arrow-autofit-right"
        ></segmented-control-option>
        <segmented-control-option
          value="FluidRTL"
          label=${Z("VIEW_MODE_RIGHT")}
          icon="arrow-autofit-left"
        ></segmented-control-option>
        <segmented-control-option
            value="Book"
            label=${Z("VIEW_MODE_BOOK")}
            icon="IconBookArrowRight"
        ></segmented-control-option>
        <segmented-control-option
            value="Manga"
            label=${Z("VIEW_MODE_MANGA")}
            icon="IconBookArrowLeft"
        ></segmented-control-option>
        <segmented-control-option
            value="Gallery"
            label=${Z("VIEW_MODE_GALLERY")}
            icon="IconLayoutDashboard"
        ></segmented-control-option>
      </segmented-control>
    </div>
  `}var m8=()=>re`${d8()} ${u8()} ${h8()} ${f8()} ${p8()}`,g8="#SettingsPanel{color:var(--theme-text-color)}#SettingsPanel fieldset{border:1px solid var(--theme-body-text-color);border-radius:10px;padding:3px}#SettingsPanel .ControlLabel{flex-flow:wrap;justify-content:space-between;align-items:center;padding:2px;display:flex}#SettingsPanel .ControlLabelItem{justify-content:space-between;align-items:center;display:flex}#SettingsPanel .ControlLabelItem:not(.show){display:none}#SettingsPanel input[type=range]{width:100%}#SettingsPanel .RangeValue{color:var(--mov-color-on-loud);text-align:center;background:var(--mov-color-fill-loud);border-radius:3px;margin-left:8px;padding:2px 5px;line-height:20px;display:inline-block}#SettingsPanel datalist{flex-direction:row;justify-content:space-between;width:100%;display:flex}#SettingsPanel datalist option{writing-mode:vertical-lr;padding:0}#ThemeSelector{width:110px}#ColorRecommendations{flex-flow:wrap;gap:2px;display:flex}#Chapter:not(.Vertical)~#SettingsPanel .verticalSeparator{display:none}#ColorScheme{min-width:28px;min-height:28px;padding:5px}#ResetSettings,#ResetSettings::part(base){width:100%}",w1=class extends tt{static{this.styles=[kt`
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
    `,Se(g8)]}render(){return re`
      <mov-drawer
        id="SettingsPanel"
        ?open=${he("panel")==="settings"}
        @close=${xc}
        placement="start"
        class="${he("device")}"
      >
        <h2 slot="label">${Z("SETTINGS")}</h2>
        <mov-button
          id="ResetSettings"
          @click="${n3}"
          title="${Z("BUTTON_RESET_SETTINGS")}"
        >
          <mov-icon
            name="IconSettingsOff"
            size="20px"
            slot="start"
          ></mov-icon>
          ${Z("BUTTON_RESET_SETTINGS")}
        </mov-button>
        <div class="content">
          <fieldset id="SettingsPanelGeneral">
            <legend>${Z("GENERAL")}</legend>
            ${X7()}
          </fieldset>
          <fieldset id="SettingsPanelTheme">
            <legend>${Z("THEME")}</legend>
            ${c8()}
          </fieldset>
          <fieldset id="SettingsPanelLoading">
            <legend>${Z("LOADING")}</legend>
            ${e8()}
          </fieldset>
          <fieldset id="SettingsPanelZoom">
            <legend>${Z("ZOOM")}</legend>
            ${m8()}
          </fieldset>
          <fieldset id="SettingsPanelOthers">
            <legend>${Z("OTHERS")}</legend>
            ${s8()}
          </fieldset>
        </div>
      </mov-drawer>
    `}};w1=D([lt("settings-panel"),(0,jo.useStores)(Ot,Eo,tr)],w1);function v8(e){return new Promise(function(t,n){var o=new FileReader,a=typeof o.readAsBinaryString=="function";o.onloadend=function(){var s=o.result||"";if(a)return t(s);t(_8(s))},o.onerror=n,a?o.readAsBinaryString(e):o.readAsArrayBuffer(e)})}function b8(e){return v8(e).then(btoa)}function w8(e){return b8(e).then(function(t){return"data:"+e.type+";base64,"+t})}function _8(e){for(var t="",n=new Uint8Array(e),o=n.byteLength,a=-1;++a<o;)t+=String.fromCharCode(n[a]);return t}async function y8(e,t){Me("Fetching page: ",e);try{const n=await(await fetch(e)).text();return new DOMParser().parseFromString(n,t)}catch(n){throw Me("Failed to fetch page: ",n),n}}async function k8(e){return y8(e,"text/html")}async function E8(e,t,n){try{return(await k8(e)).querySelector(t)?.getAttribute(n)}catch(o){return Me("Failed to get element attribute: ",o),null}}var M8=class{constructor(e,t){this.queue=[],this.activeCount=0,this.lastRunTime=0;const n={Safe:{concurrency:5,delay:1e3},Standard:{concurrency:5,delay:500},Faster:{concurrency:10,delay:500},Extreme:{concurrency:10,delay:250},All:{concurrency:20,delay:50}}[e];this.maxConcurrency=n.concurrency,this.minDelay=t??n.delay}add(e){this.queue.push(e),this.runNext()}async runNext(){if(this.activeCount>=this.maxConcurrency||this.queue.length===0)return;const e=Date.now()-this.lastRunTime;if(e<this.minDelay){setTimeout(()=>this.runNext(),this.minDelay-e);return}const t=this.queue.shift();if(t){this.activeCount+=1,this.lastRunTime=Date.now();try{await t()}finally{this.activeCount-=1,this.runNext()}}}},Ic;function S8(e){if(e){let t=e.trim();return t.startsWith("//")&&(t=`https:${t}`),t}return""}async function rs(e,t,n){const o=he("images")?.[t];o?.status&&o.status!=="pending"||(dr(t,()=>({status:"loading"})),Ic.add(async()=>{let a=S8(n),s;try{const c=await fetch(a,e.fetchOptions);if(c.ok){const l=c.headers.get("content-type");l?.startsWith("image/")?(s=await c.blob(),a=await w8(s)):Me("Fetched content is not an image",l)}else Me("Fetch failed with status",c.status)}catch(c){Me("Failed to fetch image",c)}dr(t,()=>({src:a,blob:s,status:"loaded"})),jt("Loaded Image:",t,"Source:",a)}),e.pages===t&&f1())}async function _1(e,t,n){const o=he("images")?.[t];o?.status&&o.status!=="pending"||(dr(t,()=>({status:"loading"})),Ic.add(async()=>{try{const a=await E8(n,e.img,e.lazyAttr??"src");a?(dr(t,()=>({status:"pending"})),await rs(e,t,a)):dr(t,()=>({status:"error"}))}catch(a){Me("Failed to get page attribute",a),dr(t,()=>({status:"error"}))}}))}function y1(e,t){Qa(t.pages,e).filter((n,o)=>!(t.lazy??Y("lazyLoadImages"))||o<=Y("lazyStart")).forEach(n=>{_1(t,n,t.listPages[n-1])})}function k1(e,t){Qa(t.pages,e).filter((n,o)=>!(t.lazy??Y("lazyLoadImages"))||o<=Y("lazyStart")).forEach(n=>{rs(t,n,t.listImages[n-1])})}async function A8(){await Ks(()=>he("manga")!==void 0);const e=he("manga"),t=e.begin??1;Ic=new M8(Y("loadSpeed"),e.timer),jt("Loading Images"),jt(`Speed: ${Y("loadSpeed")}`),jt(`Lazy: ${e.lazy??Y("lazyLoadImages")}, Starting from: ${Y("lazyStart")}`),Ln(),Ud(e)?(jt("Method: Images:",e.listImages),k1(t,e)):Vd(e)?(jt("Method: Pages:",e.listPages),y1(t,e)):mp(e)?(jt("Method: Brute Force"),e.bruteForce({begin:t,addImg:rs,loadImages(n){k1(t,{...e,listImages:n})},loadPages(n,o,a){y1(t,{...e,listPages:n,img:o,lazyAttr:a})},wait:0})):Me("No Loading Method Found"),tr.listen((n,o,a)=>{if(a==="currentPage"&&n.currentPage>o.currentPage)for(let s=n.currentPage;s<Math.min(n.currentPage+5,e.pages+1);s++)n.images?.[s]?.src!==void 0||n.images?.[s]?.status==="loading"||(Ud(e)?rs(e,s,e.listImages[s-1]):Vd(e)&&_1(e,s,e.listPages[s-1]))})}function x8(){const e=he("images");if(!e)return null;const t=Y("viewMode"),n=t==="FluidLTR"||t==="FluidRTL",o=t==="FluidRTL",a=window.innerHeight/2,s=window.innerWidth/2;let c=null;for(const l in e){const h=e[l].ref?.value;if(!h)continue;const u=h?.getBoundingClientRect();let f;n?o?f=u.right:f=u.left:f=u.top,(n?f<=s:f<=a)&&(!c||f>c.edge)&&(c={index:parseInt(l,10),edge:f})}return c?c.index:he("manga")?.begin??1}function E1(){const e=x8();e!=null&&he("currentPage")!==e&&Pe("currentPage",e)}function I8(){const e=xe.default.throttle(()=>{requestAnimationFrame(E1)},100);window.addEventListener("scroll",e,{passive:!0}),window.addEventListener("resize",e),he("chapter").value?.addEventListener("scroll",e,{passive:!0}),requestAnimationFrame(E1)}function M1(){if(!he("chapter").value){setTimeout(M1,50);return}I8()}var S1=xe.default.debounce(()=>{Pe("device",gl()),Ln()},200);async function C8(){await Ks(()=>he("manga")!==void 0),d1(),window.addEventListener("resize",S1),window.addEventListener("orientationchange",S1),J9(),M1()}var O8=Sr(((e,t,n)=>{(function(o,a){typeof define=="function"&&define.amd?define(a):typeof e=="object"?t.exports=a():o.NProgress=a()})(n,function(){var o={};o.version="0.2.0";var a=o.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};o.configure=function(w){var v,E;for(v in w)E=w[v],E!==void 0&&w.hasOwnProperty(v)&&(a[v]=E);return this},o.status=null,o.set=function(w){var v=o.isStarted();w=s(w,a.minimum,1),o.status=w===1?null:w;var E=o.render(!v),S=E.querySelector(a.barSelector),C=a.speed,T=a.easing;return E.offsetWidth,h(function($){a.positionUsing===""&&(a.positionUsing=o.getPositioningCSS()),u(S,l(w,C,T)),w===1?(u(E,{transition:"none",opacity:1}),E.offsetWidth,setTimeout(function(){u(E,{transition:"all "+C+"ms linear",opacity:0}),setTimeout(function(){o.remove(),$()},C)},C)):setTimeout($,C)}),this},o.isStarted=function(){return typeof o.status=="number"},o.start=function(){o.status||o.set(0);var w=function(){setTimeout(function(){o.status&&(o.trickle(),w())},a.trickleSpeed)};return a.trickle&&w(),this},o.done=function(w){return!w&&!o.status?this:o.inc(.3+.5*Math.random()).set(1)},o.inc=function(w){var v=o.status;return v?(typeof w!="number"&&(w=(1-v)*s(Math.random()*v,.1,.95)),v=s(v+w,0,.994),o.set(v)):o.start()},o.trickle=function(){return o.inc(Math.random()*a.trickleRate)},(function(){var w=0,v=0;o.promise=function(E){return!E||E.state()==="resolved"?this:(v===0&&o.start(),w++,v++,E.always(function(){v--,v===0?(w=0,o.done()):o.set((w-v)/w)}),this)}})(),o.render=function(w){if(o.isRendered())return document.getElementById("nprogress");p(document.documentElement,"nprogress-busy");var v=document.createElement("div");v.id="nprogress",v.innerHTML=a.template;var E=v.querySelector(a.barSelector),S=w?"-100":c(o.status||0),C=document.querySelector(a.parent),T;return u(E,{transition:"all 0 linear",transform:"translate3d("+S+"%,0,0)"}),a.showSpinner||(T=v.querySelector(a.spinnerSelector),T&&b(T)),C!=document.body&&p(C,"nprogress-custom-parent"),C.appendChild(v),v},o.remove=function(){_(document.documentElement,"nprogress-busy"),_(document.querySelector(a.parent),"nprogress-custom-parent");var w=document.getElementById("nprogress");w&&b(w)},o.isRendered=function(){return!!document.getElementById("nprogress")},o.getPositioningCSS=function(){var w=document.body.style,v="WebkitTransform"in w?"Webkit":"MozTransform"in w?"Moz":"msTransform"in w?"ms":"OTransform"in w?"O":"";return v+"Perspective"in w?"translate3d":v+"Transform"in w?"translate":"margin"};function s(w,v,E){return w<v?v:w>E?E:w}function c(w){return(-1+w)*100}function l(w,v,E){var S;return a.positionUsing==="translate3d"?S={transform:"translate3d("+c(w)+"%,0,0)"}:a.positionUsing==="translate"?S={transform:"translate("+c(w)+"%,0)"}:S={"margin-left":c(w)+"%"},S.transition="all "+v+"ms "+E,S}var h=(function(){var w=[];function v(){var E=w.shift();E&&E(v)}return function(E){w.push(E),w.length==1&&v()}})(),u=(function(){var w=["Webkit","O","Moz","ms"],v={};function E($){return $.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(K,W){return W.toUpperCase()})}function S($){var K=document.body.style;if($ in K)return $;for(var W=w.length,ne=$.charAt(0).toUpperCase()+$.slice(1),N;W--;)if(N=w[W]+ne,N in K)return N;return $}function C($){return $=E($),v[$]||(v[$]=S($))}function T($,K,W){K=C(K),$.style[K]=W}return function($,K){var W=arguments,ne,N;if(W.length==2)for(ne in K)N=K[ne],N!==void 0&&K.hasOwnProperty(ne)&&T($,ne,N);else T($,W[1],W[2])}})();function f(w,v){return(typeof w=="string"?w:g(w)).indexOf(" "+v+" ")>=0}function p(w,v){var E=g(w),S=E+v;f(E,v)||(w.className=S.substring(1))}function _(w,v){var E=g(w),S;f(w,v)&&(S=E.replace(" "+v+" "," "),w.className=S.substring(1,S.length-1))}function g(w){return(" "+(w.className||"")+" ").replace(/\s+/gi," ")}function b(w){w&&w.parentNode&&w.parentNode.removeChild(w)}return o})})),T8=ia(O8(),1);function L8(e,t){const n=e.replace(/[?&]forceReload=\d+$/,"");return`${n+(n.includes("?")?"&":"?")}forceReload=${t}`}function A1(e,t){const n=he("images")?.[e];if(!n?.src)return;const o=(n.reload??0)+1;if(o>Y("maxReload")){Me(`Stopped reloading Page ${e} after ${o} attempts`);return}if(Me(`Reloading Page ${e} (Attempt ${o})`,t),t?.removeAttribute("src"),Zp(n.src)||jp(n.src))dr(e,()=>({reload:o})),t?.setAttribute("src",n.src);else{const a=L8(n.src,o);dr(e,()=>({reload:o,src:a})),t?.setAttribute("src",a)}}function P8(e){const t=e.currentTarget,n=parseInt(t.value,10),o=he("images")?.[n]?.ref?.value;o&&A1(n,o)}function R8(e){const t=e.currentTarget,n=parseInt(t.value,10);dr(n,o=>({hide:!o.hide}))}function $8(e){const t=e.currentTarget,n=parseInt(t.id.replace("PageImg",""),10);dr(n,h=>({...l1({naturalWidth:t.naturalWidth,naturalHeight:t.naturalHeight}),status:"loaded",doublePage:t.naturalWidth>t.naturalHeight}));const o=he("manga"),a=he("images")||{},s=xe.default.keys(a).filter(h=>{const u=parseInt(h,10);return u>=(o?.begin??1)&&u<=(o?.pages??1)&&a[u]?.status==="loaded"}).length,c=(o?.pages??1)-((o?.begin??1)-1),l=Math.floor(s/c*100);document.title=`(${l}%) ${he("manga")?.title}`,T8.default.configure({showSpinner:!1}).set(s/c),Me(`Progress: ${l}%`),s===c&&(Me("Images Loading Complete"),Pe("download","available"),Y("downloadZip")&&Yh())}function D8(e){const t=e.currentTarget;if(Zs(t.getAttribute("src")))return;const n=parseInt(t.id.replace("PageImg",""),10);dr(n,()=>({status:"error"})),A1(n,t)}function B8(e){const t=e.currentTarget,n=parseInt(t.value,10),o=he("images"),a=he("images")?.[n];a?.naturalWidth&&Pe("images",{...o,[n]:{...a,width:(a?.width||a?.naturalWidth)*(1+Y("zoomStep")/100),height:void 0}})}function z8(e){const t=e.currentTarget,n=parseInt(t.value,10),o=he("images"),a=he("images")?.[n];a?.naturalWidth&&Pe("images",{...o,[n]:{...a,width:(a?.width||a?.naturalWidth)*(1-Y("zoomStep")/100),height:void 0}})}function N8(e){const t=e.currentTarget,n=parseInt(t.value,10),o=he("images"),a=he("images")?.[n];a&&Pe("images",{...o,[n]:{...a,width:void 0,height:void 0}})}function H8(e){const t=e.currentTarget,n=parseInt(t.value,10),o=he("images"),a=he("images")?.[n];a&&Pe("images",{...o,[n]:{...a,width:window.innerWidth+(Y("navbar")==="left"||Y("navbar")==="right"?-34:0),height:void 0}})}function F8(e){const t=e.currentTarget,n=parseInt(t.value,10),o=he("images"),a=he("images")?.[n];a&&Pe("images",{...o,[n]:{...a,width:void 0,height:window.innerHeight+(Y("navbar")==="bottom"?-34:0)}})}function G8(e){const t=he("images")?.[e],n=Y("viewMode").match(/^(Book|Manga)$/),o=Y("viewMode")==="Gallery",a=Y("viewMode").startsWith("Fluid"),s=Y("navbar")==="bottom";return{width:t?.width?`${t.width}px`:"auto",height:t?.height?`${t.height}px`:"auto","max-height":a?`${window.innerHeight+(s?-34:0)}px`:void 0,"min-width":!n&&!o?`${Y("minZoom")}vw`:void 0}}var W8=(e,t)=>Qa(e,t).map(n=>{he("images")?.[n]?.ref||dr(n,h=>({ref:ol()}));let o=0;for(let h=n-1;h>=t&&!he("images")?.[h].doublePage;h--)he("images")?.[h].doublePage||o++;const a=he("images")?.[n].doublePage??!1,s=Y("viewMode")==="Book",c=!a&&(s?o%2===0:o%2===1),l=!a&&(s?o%2===1:o%2===0);return re`
      <div
        id="Page${n}"
        class="${Et({MangaPage:!0,hide:!!he("images")?.[n].hide,DoublePage:a,LeftPage:c&&!a,RightPage:l&&!a})}"
      >
        <div class="PageFunctions">
          <button
            class="Bookmark PageButton"
            title="${Z("BOOKMARK")}"
            @click=${p1}
            value="${n}"
          >
            ${Ao()?c9:l9}
          </button>
          <button
            class="ZoomIn PageButton"
            title="${Z("ZOOM_IN")}"
            @click=${B8}
            value="${n}"
          >
            ${g9}
          </button>
          <button
            class="ZoomRestore PageButton"
            title="${Z("ZOOM_RESET")}"
            @click=${N8}
            value="${n}"
          >
            ${m9}
          </button>
          <button
            class="ZoomOut PageButton"
            title="${Z("ZOOM_OUT")}"
            @click=${z8}
            value="${n}"
          >
            ${v9}
          </button>
          <button
            class="ZoomHeight PageButton"
            title="${Z("ZOOM_HEIGHT")}"
            @click=${F8}
            value="${n}"
          >
            ${a9}
          </button>
          ${Y("viewMode").match(/^(Book|Manga)$/)?re`
            <button
              class="DoublePage PageButton"
              title="${Z("DOUBLE_PAGE")}"
              @click=${()=>{dr(n,h=>({doublePage:!h.doublePage}))}}
              value="${n}"
            >
              ${p9}
            </button>`:re`
              <button
                class="ZoomWidth PageButton"
                title="${Z("ZOOM_WIDTH")}"
                @click=${H8}
                value="${n}"
              >
                ${s9}
              </button>`}
          <button
            class="Hide PageButton"
            title="${Z("HIDE")}"
            @click=${R8}
            value="${n}"
          >
            ${he("images")?.[n].hide?u9:h9}
          </button>
          <button
            class="Reload PageButton"
            title="${Z("RELOAD")}"
            @click=${P8}
            value="${n}"
          >
            ${f9}
          </button>
          <span class="PageIndex">${n}</span>
        </div>
        <div class="PageContent">
          <img
            id="PageImg${n}"
            alt="Page ${n}"
            class="${Et({PageImg:!0,imgBroken:he("images")?.[n]?.status==="error"})}"
            src=${he("images")?.[n]?.src??Ne}
            style="${Yr(G8(n))}"
            @load=${$8}
            @error=${D8}
            ${al(he("images")?.[n].ref)}
          />
        </div>
      </div>
      <div class="separator">
        [ ${n===e?Z("END"):`${n} / ${e}`} ]
      </div>
    `}),U8=e=>re`
  <main
    id="Chapter"
    ${al(he("chapter"))}
    class="${Et({fitWidthIfOversize:Y("fitWidthIfOversize"),[Y("viewMode")]:!0,separator:Y("viewMode")==="Vertical"})}"
    @wheel=${t=>{Y("viewMode")==="FluidLTR"?b1(t):Y("viewMode")==="FluidRTL"&&V7(t)}}
  >
    ${W8(e.pages,e.begin??0)}
  </main>
`,V8=":root:not(.light,.dark){--theme-body-background:#25262b;--theme-body-text-color:#c1c2c5;--theme-text-color:#c1c2c5;--theme-primary-color:#1a1b1e;--theme-primary-text-color:#c1c2c5;--theme-background-color:#25262b;--theme-hightlight-color:#2c2e33;--theme-border-color:#373a40;--theme-secondary-color:#2c2e33;--theme-secondary-text-color:#c1c2c5}:host{all:initial;box-sizing:border-box;display:block}#MangaOnlineViewer{color:var(--theme-body-text-color);background-color:var(--theme-body-background);box-sizing:border-box;--mov-font-size-m:16px;min-height:100vh;text-decoration:none}#Chapter{box-sizing:border-box;grid-template-columns:repeat(1,1fr);min-width:225px;display:grid}#Chapter.Vertical:has(+#Navigation:not(.disabled)),#Chapter.WebComic:has(+#Navigation:not(.disabled)){padding-bottom:31px}#Chapter.Vertical .PageContent{margin-top:8px;margin-bottom:8px}.closeButton{width:fit-content;height:fit-content;position:absolute;top:10px;right:10px}.overlay{z-index:950;cursor:pointer;background-color:#00000080;width:100%;height:100%;display:none;position:fixed;inset:0}.overlay.visible{display:block}select{height:20px;margin:2px}:not(.FluidRTL,.FluidLTR).fitWidthIfOversize .PageContent .PageImg{object-fit:contain;max-width:100%}.hideControls .PageFunctions{visibility:hidden}",Z8="@-webkit-keyframes spin{to{transform:rotate(360deg)}}@keyframes spin{to{transform:rotate(360deg)}}@-webkit-keyframes spin-reverse{0%{transform:rotate(360deg)}to{transform:rotate(0)}}@keyframes spin-reverse{0%{transform:rotate(360deg)}to{transform:rotate(0)}}.icon-tabler-loader-2,.animate-spin{-webkit-animation:1s linear infinite spin;animation:1s linear infinite spin}.animate-spin-reverse{-webkit-animation:1s linear infinite spin-reverse;animation:1s linear infinite spin-reverse}",j8="#Chapter:where(.Book,.Manga){grid-template-columns:1fr 1fr;grid-auto-flow:row;gap:0;width:100%;min-width:auto;display:grid}#Chapter:where(.Book,.Manga) .MangaPage{width:100%;min-height:22px;display:block;position:relative;overflow:hidden}#Chapter:where(.Book,.Manga) .MangaPage .PageFunctions{border-radius:0 0 0 4px;flex-direction:row;top:0;left:auto;right:0}#Chapter:where(.Book,.Manga) .MangaPage.LeftPage .PageFunctions{border-radius:0 0 4px;flex-direction:row-reverse;left:0;right:auto}#Chapter:where(.Book,.Manga) .MangaPage.DoublePage{grid-column:span 2}#Chapter:where(.Book,.Manga) .MangaPage .PageContent{flex-shrink:0;justify-content:center;align-items:center;display:flex;overflow:hidden}#Chapter:where(.Book,.Manga) .MangaPage.LeftPage .PageContent{justify-content:flex-end;padding-right:0}#Chapter:where(.Book,.Manga) .MangaPage.RightPage .PageContent{justify-content:flex-start;padding-left:0}#Chapter:where(.Book,.Manga) .MangaPage.DoublePage .PageContent{justify-content:center}#Chapter.Manga{direction:rtl}#Chapter.Manga .MangaPage{direction:ltr}",q8="#Chapter.FluidLTR,#Chapter.FluidRTL{min-width:auto;display:flex;overflow-x:auto;& .ZoomWidth{display:none}& .PageImg{min-width:unset}& .MangaPage{width:initial;min-width:fit-content;position:relative}& .MangaPage.DoublePage{grid-column:span 2}}#Chapter.FluidLTR{flex-direction:row;& .MangaPage .PageFunctions{direction:rtl;left:0;right:auto}}#Chapter.FluidRTL{flex-direction:row-reverse}",K8="#Chapter.Gallery{flex-wrap:wrap;justify-content:center;gap:10px;padding:10px;display:flex}.Gallery .MangaPage{width:auto;min-width:unset;flex:0 auto}.Gallery .MangaPage .PageContent .PageImg{min-width:unset}.Gallery .PageFunctions,.Gallery .separator{display:none}",Y8='.PageButton .icon-tabler{vertical-align:sub;width:1rem;height:1rem}.PageButton,.PageButton:visited,.PageButton:link{cursor:pointer;min-height:32px;color:var(--mov-color-on-loud);background-color:var(--mov-color-fill-loud);border-style:solid;border-width:1px;border-color:var(--theme-border-color);border-radius:5px;padding:2px;text-decoration:none}.PageButton:active,.PageButton:hover{opacity:.8}.PageButton[selected]{background-color:var(--mov-color-fill-normal);color:var(--mov-color-on-normal);border:1px solid var(--theme-border-color)}.PageButton.hidden{display:none}.MangaPage{text-align:center;width:100%;min-width:100%;min-height:22px;line-height:0;display:inline-block}.PageContent{text-align:center;max-width:100%;height:100%;transition:all .3s ease-in-out;display:inline-block;overflow:auto hidden}.MangaPage.hide .PageContent{height:0}.PageContent .PageImg[src=""],.PageContent .PageImg:not([src]),.PageContent .PageImg.imgBroken{background-position:50%;background-repeat:no-repeat;background-size:20%;background-color:var(--theme-hightlight-color);text-align:center;vertical-align:top;width:40vw;height:80vh;color:var(--theme-text-color);min-width:40vw;max-width:100%;min-height:50vh;max-height:100%;margin:0;font-size:16px;line-height:80vh;display:inline-block;position:relative}.PageContent .PageImg[src=""]:before,.PageContent .PageImg:not([src]):before,.PageContent .PageImg.imgBroken:before{content:attr(alt);white-space:pre-wrap;text-align:center;color:var(--theme-text-color);font-size:16px;position:absolute;top:40%;left:50%;transform:translate(-50%,-50%)}.PageFunctions{justify-content:flex-end;align-items:center;gap:3px;margin:0;padding:0;font-family:monospace;display:flex;position:absolute;right:0}.PageFunctions>.PageIndex{background-color:var(--mov-color-fill-loud);color:var(--mov-color-on-loud);text-align:center;border-radius:5px;min-width:20px;padding:3px 5px;line-height:1rem;display:inline-block}.PageFunctions .PageButton{opacity:.5;border-width:0;justify-content:center;align-items:center;min-height:auto;margin:0;padding:3px;display:flex}.PageFunctions:hover .PageButton{opacity:1}.PageFunctions .PageButton:hover{opacity:.9}#Chapter.Vertical .separator{text-align:center;align-items:center;font-style:italic;display:flex}#Chapter.Vertical .separator:before,#Chapter.Vertical .separator:after{content:"";border-bottom:1px solid var(--theme-text-color);flex:1}#Chapter.Vertical.separator:not(:empty):before{margin-right:.25em}#Chapter.Vertical.separator:not(:empty):after{margin-left:.25em}#Chapter:not(.separator) .separator,#Chapter:not(.Vertical) .separator{display:none}',X8="#MangaOnlineViewer{color:var(--theme-body-text-color);background-color:var(--theme-body-background);margin:0;padding:0;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:16px;line-height:20px}a,a:link,a:visited,a:active,a:focus{color:var(--theme-body-text-color);text-decoration:none}img{vertical-align:middle;border:0;height:auto}",J8=":root{--theme-primary-color:#007bff;--theme-primary-text-color:#fff;--theme-secondary-color:#6c757d;--theme-secondary-text-color:#fff;--theme-body-background:#212529;--theme-body-text-color:#f8f9fa;--theme-text-color:#f8f9fa;--theme-background-color:#212529;--theme-hightlight-color:#343a40;--theme-border-color:#495057;--mov-color-fill-quiet:#ced4da;--mov-color-fill-normal:#adb5bd;--mov-color-fill-loud:#007bff;--mov-color-border-quiet:#adb5bd;--mov-color-border-normal:#6c757d;--mov-color-border-loud:#495057;--mov-color-on-quiet:#343a40;--mov-color-on-normal:#fff;--mov-color-on-loud:#fff;--mov-color-mix-hover:#00000014;--mov-color-mix-active:#00000029}.light{--theme-body-background:#f8f9fa;--theme-body-text-color:#212529;--theme-text-color:#212529;--theme-background-color:#f8f9fa;--theme-hightlight-color:#e9ecef;--theme-border-color:#dee2e6;--mov-color-fill-quiet:#f8f9fa;--mov-color-fill-normal:#e9ecef;--mov-color-fill-loud:#007bff;--mov-color-border-quiet:#e9ecef;--mov-color-border-normal:#dee2e6;--mov-color-border-loud:#adb5bd;--mov-color-on-quiet:#6c757d;--mov-color-on-normal:#fff;--mov-color-on-loud:#fff;--mov-color-mix-hover:#0000001a;--mov-color-mix-active:#0003}",Q8=kt`
  .PageContent .PageImg[src=''],
  .PageContent .PageImg:not([src]) {
    background-image: url('${Se(es(fl))}');
  }

  .PageContent .PageImg.imgBroken {
    background-image: url('${Se(es(pl))}');
  }

  ${Se(J8)}
  ${Se(X8)}
  ${Se(V8)}
  ${Se(Y8)}
  ${Se(q8)}
  ${Se(j8)}
  ${Se(K8)}
  ${Se(m1)}
  ${Se(Z8)}
`,ew=(e="#MangaOnlineViewer",t=Y("theme"))=>{const n=qh(t),o=Wo(t),a=Y("colorScheme")==="dark"?n[8]:n[2],s=Wo(a);return kt`
    :where(:root),
    ${Se(e)}, .dark,
    ${Se(e)}.dark {
      --theme-primary-color: ${Se(t)};;
      --theme-primary-text-color: ${Se(o)};;
      --theme-secondary-color: ${Se(a)};;
      --theme-secondary-text-color: ${Se(s)};;

      color-scheme: dark;
      --theme-body-background: ${Se(Ct.dark[600])};;
      --theme-body-text-color: ${Se(Ct.dark[50])};;
      --theme-text-color: ${Se(Ct.dark[50])};;
      --theme-background-color: ${Se(Ct.dark[600])};;
      --theme-hightlight-color: ${Se(Ct.dark[500])};;
      --theme-border-color: ${Se(Ct.dark[400])};;

      --mov-color-fill-quiet: ${Se(n[9])};;
      --mov-color-fill-normal: var(--theme-secondary-color, ${Se(n[8])};);
      --mov-color-fill-loud: var(--theme-primary-color);
      --mov-color-border-quiet: ${Se(n[8])};;
      --mov-color-border-normal: ${Se(n[7])};;
      --mov-color-border-loud: ${Se(n[6])};;
      --mov-color-on-quiet: ${Se(n[4])};;
      --mov-color-on-normal: var(--theme-secondary-text-color, ${Se(n[3])};);
      --mov-color-on-loud: var(--theme-primary-text-color, white);

      --mov-color-mix-hover: black 8%;
      --mov-color-mix-active: black 16%;
    }

    .light,
    ${Se(e)};.light {
      color-scheme: light;
      --theme-body-background: ${Se(Ct.gray[50])};;
      --theme-body-text-color: ${Se(Ct.gray[900])};;
      --theme-text-color: ${Se(Ct.gray[900])};;
      --theme-background-color: ${Se(Ct.gray[50])};;
      --theme-hightlight-color: ${Se(Ct.gray[500])};;
      --theme-border-color: ${Se(Ct.gray[100])};;

      --mov-color-fill-quiet: ${Se(n[0])};;
      --mov-color-fill-normal: var(--theme-secondary-color, ${Se(n[1])};);
      --mov-color-fill-loud: var(--theme-primary-color);
      --mov-color-border-quiet: ${Se(n[1])};;
      --mov-color-border-normal: ${Se(n[2])};;
      --mov-color-border-loud: ${Se(n[4])};;
      --mov-color-on-quiet: ${Se(n[6])};;
      --mov-color-on-normal: var(--theme-secondary-text-color, ${Se(n[3])};);
      --mov-color-on-loud: var(--theme-primary-text-color, white);

      --mov-color-mix-hover: black 10%;
      --mov-color-mix-active: black 20%;
    }
  `},tw="#StartMOV{all:revert;backface-visibility:hidden;color:#fff;cursor:pointer;text-align:center;z-index:105000;background-image:linear-gradient(90deg,#667eea,#764ba2,#6b8dd6,#8e37d7);background-size:300% 100%;border:none;border-radius:10px;width:80%;min-height:50px;margin:0 auto;padding:.5rem 1rem;font-size:32px;transition:all .4s ease-in-out;position:fixed;bottom:0;left:0;right:0;box-shadow:0 4px 15px #744fa8bf}#StartMOV:hover{background-position:100% 0;transition:all .4s ease-in-out}#StartMOV:focus{outline:none}#pagesSliderVal{text-align:center;margin-top:15px;font-weight:700;display:block}",Dn=class extends tt{constructor(...t){super(...t),this.mangaPages=0,this.begin=1,this.timeoutMs=3e3,this.status="initial-prompt"}static{this.styles=[Se(tw)]}connectedCallback(){super.connectedCallback(),this.status==="initial-prompt"&&(this.timeoutId=window.setTimeout(()=>{this.handleStart()},this.timeoutMs))}disconnectedCallback(){super.disconnectedCallback(),window.clearTimeout(this.timeoutId)}handleStart(){window.clearTimeout(this.timeoutId),this.dispatchEvent(new CustomEvent("start",{detail:null}))}handleLateStart(t,n){this.dispatchEvent(new CustomEvent("start",{detail:{begin:t,end:n}}))}handleButtonCLick(){this.status="late-start-prompt"}handleDialogClose(t){t.stopPropagation(),window.clearTimeout(this.timeoutId),this.status="late-start-button"}render(){switch(this.status){case"late-start-button":return this.renderLateStartButton();case"late-start-prompt":return this.renderLateStartPrompt();default:return this.renderInitialPrompt()}}renderInitialPrompt(){return re`
      <mov-dialog
        ?open=${this.status==="initial-prompt"}
        icon="info"
        @close=${this.handleDialogClose}
      >
        <span slot="label">${Z("STARTING")}</span>
        <div style="padding: 1rem;">${Z("WAITING")}</div>
        <div
          slot="footer"
          style="display: flex; justify-content: space-between; padding: 0.5rem 1rem 1rem;"
        >
          <mov-button
            @click=${this.handleDialogClose}
            style="--mov-color-fill-loud: ${Ct.red[700]}; --mov-color-on-loud: white;"
          >
            Cancel
          </mov-button>
          <mov-button
            @click=${this.handleStart}
            style="--mov-color-fill-loud: ${Ct.green[700]}; --mov-color-on-loud: white;"
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
        ${Z("BUTTON_START")}
      </button>
    `}renderLateStartPrompt(){this.beginPage??=this.begin,this.endPage??=this.mangaPages;const t=n=>{this.beginPage=n.detail.value[0],this.endPage=n.detail.value[1]};return re`
      <mov-dialog
        ?open=${this.status==="late-start-prompt"}
        icon="question"
        @close=${this.handleDialogClose}
      >
        <span slot="label">${Z("STARTING")}</span>
        <div style="padding: 1rem;">
          ${Z("CHOOSE_BEGINNING")}
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
            style="--mov-color-fill-loud: ${Ct.red[700]}; --mov-color-on-loud: white;"
          >
            Close
          </mov-button>
          <mov-button
            @click=${()=>this.handleLateStart(this.beginPage??0,this.endPage??this.mangaPages)}
            style="--mov-color-fill-loud: ${Ct.green[700]}; --mov-color-on-loud: white;"
          >
            Run
          </mov-button>
        </div>
      </mov-dialog>
    `}};D([q({type:Number,reflect:!0})],Dn.prototype,"mangaPages",void 0),D([q({type:Number,reflect:!0})],Dn.prototype,"begin",void 0),D([q({type:Number})],Dn.prototype,"timeoutMs",void 0),D([q({type:String,reflect:!0})],Dn.prototype,"status",void 0),D([Nt()],Dn.prototype,"beginPage",void 0),D([Nt()],Dn.prototype,"endPage",void 0),Dn=D([lt("script-startup")],Dn);function rw(e){if(!e?.parentNode)return e;const t=e.cloneNode(!0);return e.parentNode.replaceChild(t,e),t}var nw=e=>{e.getAttributeNames().forEach(t=>{e?.removeAttribute(t)})},ow=(...e)=>{e?.forEach(nw),e?.forEach(rw)};function iw(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var x1,ns=class extends tt{constructor(...t){super(...t),this.loadMode="wait"}static{this.styles=[kt``,Se(Q8)]}async start(t,n){this.manga&&(document.documentElement.hasAttribute("mov")||(ow(document.documentElement,document.head,document.body),document.documentElement.setAttribute("mov","")),window.scrollTo(0,0),Pe("manga",{...this.manga,begin:t??this.manga.begin,pages:n??this.manga.pages}))}firstUpdated(){this.loadMode==="always"&&this.start(),C8(),A8()}render(){const t=he("manga"),n=he("dialog");return re`
      <style>
        ${ew()}
      </style>
      <div
        id="MangaOnlineViewer"
        class="${Et({[Y("colorScheme")]:!0,hideControls:Y("hidePageControls"),bookmarked:!!Ao(),[he("device")]:!0})}"
        style="${Yr({[`padding-${Y("navbar")}`]:"34px"})}"
        .locale="${Y("locale")}"
      >
        ${t?re` <reader-header .manga=${t}></reader-header>
              ${U8(t)}
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
              <moaqz-toaster dismissable></moaqz-toaster>`:re(x1||(x1=iw([` <script-startup
              .mangaPages="`,`"
              begin="`,`"
              status="`,`"
              @start=`,`
            ><\/script-startup>`])),this.manga?.pages,this.manga?.begin,this.loadMode==="never"?"late-start-button":"initial-prompt",o=>{this.start(o.detail?.begin,o.detail?.end)})}
        ${n?re`
              <mov-dialog
                open
                .icon=${n.icon}
                @close=${()=>Pe("dialog",null)}
              >
                <span slot="label">${n.title}</span>
                ${n.content} ${n.footer}
              </mov-dialog>
            `:""}
      </div>
    `}};D([q({type:String,reflect:!0})],ns.prototype,"loadMode",void 0),D([q({type:Object})],ns.prototype,"manga",void 0),ns=D([lt("manga-online-viewer"),(0,jo.useStores)(Ot,Eo,tr)],ns);var aw=`/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */
html{-webkit-text-size-adjust:100%;line-height:1.15}body{margin:0}main{display:block}h1{margin:.67em 0;font-size:2em}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace;font-size:1em}a{background-color:#0000}abbr[title]{border-bottom:none;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace;font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{margin:0;font-family:inherit;font-size:100%;line-height:1.15}button,input{overflow:visible}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button}button::-moz-focus-inner,[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring{outline:1px dotted buttontext}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;white-space:normal;max-width:100%;padding:0;display:table}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template,[hidden]{display:none}`,sw="#nprogress{pointer-events:none}#nprogress .bar{z-index:1031;background:#29d;width:100%;height:2px;position:fixed;top:0;left:0}#nprogress .peg{opacity:1;width:100px;height:100%;display:block;position:absolute;right:0;-webkit-transform:rotate(3deg)translateY(-4px);-ms-transform:rotate(3deg)translateY(-4px);transform:rotate(3deg)translateY(-4px);box-shadow:0 0 10px #29d,0 0 5px #29d}#nprogress .spinner{z-index:1031;display:block;position:fixed;top:15px;right:15px}#nprogress .spinner-icon{box-sizing:border-box;border:2px solid #0000;border-color:#29d #0000 #0000 #29d;border-radius:50%;width:18px;height:18px;-webkit-animation:.4s linear infinite nprogress-spinner;animation:.4s linear infinite nprogress-spinner}.nprogress-custom-parent{position:relative;overflow:hidden}.nprogress-custom-parent #nprogress .spinner,.nprogress-custom-parent #nprogress .bar{position:absolute}@-webkit-keyframes nprogress-spinner{0%{-webkit-transform:rotate(0)}to{-webkit-transform:rotate(360deg)}}@keyframes nprogress-spinner{0%{transform:rotate(0)}to{transform:rotate(360deg)}}",lw="#nprogress .bar{z-index:1031;background:#29d;width:100%;height:4px;position:fixed;top:0;left:0}html[mov] body>:not(manga-online-viewer,#nprogress){display:none!important}html[mov]{all:unset;font-size:16px}",cw=[aw,sw,lw].join(`
`);async function dw([e,t]){Me(`Found Pages: ${t.pages} in ${e?.name}`),t.title||(t.title=document.querySelector("title")?.textContent?.trim()),t.begin=Ao()??t.begin??1,t.before!==void 0&&(jt("Executing Preparation"),await t.before(t.begin??0)),document.head.innerHTML+=K4("externals",cw),Op(unsafeWindow.customElements.whenDefined("manga-online-viewer"),1e4).then(()=>{const n=document.createElement("manga-online-viewer");n.loadMode=e?.start??Y("loadMode"),n.manga=t,document.body.appendChild(n),Me("Viewer Ready",n)}).catch(n=>Me("Define WebComponent failed",n))}async function uw(e){Me(`Starting ${js.script.name} ${js.script.version} on ${aa()} ${Mp()} with ${Sp()}`),Me(e.length,"Known Manga Sites:",e);const t=e.filter(o=>o.url.test(window.location.href));Me(t.length,"Found sites:",t);const n=t.map(async o=>{Me(`Testing site: ${o.name}`),await Mm(o),jt(o.name,"Passed");const a=await o.run();if(jt("Processed site:",o,a),a.pages>0)return[o,a];throw new Error(`${o.name} found ${a.pages} pages`)});try{const o=await Promise.any(n);jt("Going with",o[0].name),dw(o)}catch(o){if(o instanceof AggregateError){Me("All sites failed to run:");for(const a of o.errors)Me(a.message)}else Me("An unexpected error occurred:",o)}}uw(Em).catch(Me)})();
