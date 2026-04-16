// ==UserScript==
// @name          Manga OnlineViewer Adult
// @author        Tago
// @updateURL     https://github.com/TagoDR/MangaOnlineViewer/raw/master/dist/Manga_OnlineViewer_Adult.meta.js
// @downloadURL   https://github.com/TagoDR/MangaOnlineViewer/raw/master/dist/Manga_OnlineViewer_Adult.user.js
// @supportURL    https://github.com/TagoDR/MangaOnlineViewer/issues
// @namespace     https://github.com/TagoDR
// @description   Shows all pages at once in online view for these sites: AkumaMoe, BestPornComix, DoujinMoeNM, Dragon Translation, 8Muses.com, 8Muses.io, ExHentai, e-Hentai, FSIComics, FreeAdultComix, GNTAI.net, HDoujin, Hentai2Read, HentaiEra, HentaiForce, HentaiFox, HentaiHand, nHentai.com, HentaIHere, HentaiNexus, HenTalk, Hitomi, Imhentai, KingComix, Chochox, Comics18, Luscious, MultPorn, MyHentaiGallery, nHentai.net, 9Hentai, PornComicsHD, Pururin, SchaleNetwork, Simply-Hentai, TMOHentai, 3Hentai, HentaiVox, Tsumino, vermangasporno, vercomicsporno, wnacg, XlecxOne, xyzcomics, Yabai, Madara WordPress Plugin, AllPornComic, Manytoon, Manga District
// @version       2026.04.16.build-2127
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
(function() {
	//#region \0rolldown/runtime.js
	var __defProp = Object.defineProperty;
	var __commonJSMin = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);
	var __exportAll = (all, no_symbols) => {
		let target = {};
		for (var name in all) __defProp(target, name, {
			get: all[name],
			enumerable: true
		});
		if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
		return target;
	};
	//#endregion
	//#region src/utils/checks.ts
	/** biome-ignore-all lint/suspicious/noExplicitAny: must be generic */
	/**
	* Checks if a value is "empty".
	* An empty value is `null`, `undefined`, an empty string, an empty array, or an object with no own properties.
	* @example
	* isEmpty(null) // true
	* isEmpty(undefined) // true
	* isEmpty([]) // true
	* isEmpty({}) // true
	* isEmpty('') // true
	* isEmpty(false) // false
	* isEmpty(0) // false
	* isEmpty([{},{"0":false},{"":0},{"0":0}]) // false
	* isEmpty(42) // false
	* isEmpty([{"":1},{"0":1}]) // false
	* @param {any} value - The value to check.
	* @returns {boolean} `true` if the value is empty, `false` otherwise.
	*/
	function isEmpty(value) {
		return _.isEmpty(value) || _.isNil(value);
	}
	/**
	* Checks if a value is "nothing" by performing a deep check.
	* A "nothing" value includes falsy values (`null`, `undefined`, `false`, `0`, `''`),
	* empty arrays/objects, or arrays that recursively contain only "nothing" values.
	* Note: The check is recursive for arrays, but for objects, it only considers an object "nothing" if it is empty (`{}`).
	* @example
	* isNothing(null) // true
	* isNothing(undefined) // true
	* isNothing([]) // true
	* isNothing({}) // true
	* isNothing('') // true
	* isNothing(false) // true
	* isNothing(0) // true
	* isNothing([{}, [0, false, '']]) // true
	* isNothing(42) // false
	* isNothing([1]) // false
	* isNothing({ a: 0 }) // false
	* @param {any} value - The value to test.
	* @returns {boolean} `true` if the value is "nothing", `false` otherwise.
	*/
	function isNothing(value) {
		return isEmpty(value) || value === false || value === 0;
	}
	//#endregion
	//#region src/types/IManga.ts
	/**
	* A type guard to check if a manga object uses the direct image list strategy.
	* @param {IManga} manga - The manga object to check.
	* @returns {manga is IMangaImages} `true` if the manga object has a `listImages` property.
	*/
	function isImagesManga(manga) {
		return "listImages" in manga && !isNothing(manga.listImages);
	}
	/**
	* A type guard to check if a manga object uses the page scraping strategy.
	* @param {IManga} manga - The manga object to check.
	* @returns {manga is IMangaPages} `true` if the manga object has a `listPages` property.
	*/
	function isPagesManga(manga) {
		return "listPages" in manga && !isNothing(manga.listPages);
	}
	/**
	* A type guard to check if a manga object uses the brute-force strategy.
	* @param {IManga} manga - The manga object to check.
	* @returns {manga is IMangaForce} `true` if the manga object has a `bruteForce` property.
	*/
	function isBruteforceManga(manga) {
		return "bruteForce" in manga && !isNothing(manga.bruteForce);
	}
	//#endregion
	//#region src/types/ISite.ts
	/**
	* Enumeration of supported content languages.
	*/
	var Language = /* @__PURE__ */ function(Language) {
		Language["ENGLISH"] = "English";
		Language["SPANISH"] = "Spanish";
		Language["PORTUGUESE"] = "Portuguese";
		Language["CHINESE"] = "Chinese";
		Language["RAW"] = "Raw";
		return Language;
	}({});
	/**
	* Enumeration of supported content categories.
	*/
	var Category = /* @__PURE__ */ function(Category) {
		Category["MANGA"] = "manga";
		Category["COMIC"] = "comic";
		Category["HENTAI"] = "hentai";
		return Category;
	}({});
	//#endregion
	//#region src/types/index.ts
	/**
	* A type guard to check if a given key exists on an object in a type-safe way.
	* This allows TypeScript to narrow the type of the key within conditional blocks.
	* @template T - The type of the object.
	* @param {T} obj - The object to check.
	* @param {PropertyKey} key - The key to check for.
	* @returns {key is keyof T} `true` if the key is a valid key of the object, `false` otherwise.
	*/
	function isKey(obj, key) {
		return key in obj;
	}
	//#endregion
	//#region src/adult/3hentai.ts
	var threehentai = {
		name: ["3Hentai", "HentaiVox"],
		url: /https?:\/\/(www\.)?(3hentai|hentaivox).(net|com)\/(d|view)\/.+\/.+/,
		homepage: ["https://3hentai.net/", "https://hentaivox.com/"],
		language: [Language.ENGLISH],
		category: Category.HENTAI,
		waitVar: "readerPages",
		run() {
			return {
				title: unsafeWindow.readerPages.title.replace(/- Page.+/, "").trim(),
				series: unsafeWindow.readerPages.baseUri.replace("%s", ""),
				pages: unsafeWindow.readerPages.lastPage,
				prev: "#",
				next: "#",
				listImages: _.keys(unsafeWindow.readerPages.pages).map((img) => unsafeWindow.readerPages.baseUriImg.replace("%s", unsafeWindow.readerPages.pages[img].f))
			};
		}
	};
	//#endregion
	//#region src/utils/waitFor.ts
	/**
	* Waits for an element matching the given selector to appear in the DOM.
	* @param {string} selector - The CSS selector for the desired element.
	* @param {HTMLElement} [target=document.body] - The parent element within which to observe for mutations. Defaults to `document.body`.
	* @returns {Promise<Element>} A promise that resolves with the found element once it is available.
	*/
	function waitForElm(selector, target = document.body) {
		return new Promise((resolve) => {
			const element = document.querySelector(selector);
			if (element) {
				resolve(element);
				return;
			}
			const observer = new MutationObserver(() => {
				const observedElement = document.querySelector(selector);
				if (observedElement) {
					resolve(observedElement);
					observer.disconnect();
				}
			});
			observer.observe(target, {
				childList: true,
				subtree: true,
				attributes: true
			});
		});
	}
	/**
	* Waits for a function to return a truthy value.
	* It repeatedly calls the function until it returns `true`.
	* @param {() => boolean} fn - A function that returns a boolean value indicating the desired condition.
	* @param {number} [timer=250] - The interval in milliseconds between checks.
	* @returns {Promise<boolean>} A promise that resolves to `true` when the function returns a truthy value.
	*/
	function waitForFunc(fn, timer = 250) {
		return new Promise((resolve) => {
			const intervalId = setInterval(() => {
				if (fn()) {
					clearInterval(intervalId);
					resolve(true);
				}
			}, timer);
		});
	}
	/**
	* Waits for a specific attribute to be present on an element and resolves with the attribute's value.
	* @param {string} selector - The CSS selector to identify the target element.
	* @param {string} attribute - The name of the attribute to wait for.
	* @param {Element} [target=document.body] - The parent element to observe for mutations. Defaults to `document.body`.
	* @returns {Promise<string>} A promise that resolves with the value of the specified attribute.
	*/
	function waitForAtb(selector, attribute, target = document.body) {
		return new Promise((resolve) => {
			const element = target.querySelector(selector);
			if (element?.getAttribute(attribute)) {
				resolve(element.getAttribute(attribute) ?? "");
				return;
			}
			const observer = new MutationObserver(() => {
				const observedElement = target.querySelector(selector);
				if (observedElement?.getAttribute(attribute)) {
					resolve(observedElement.getAttribute(attribute) ?? "");
					observer.disconnect();
				}
			});
			observer.observe(target, {
				childList: true,
				subtree: true,
				attributes: true,
				attributeFilter: [attribute]
			});
		});
	}
	/**
	* Waits for a global variable to be available on the `unsafeWindow` object.
	* Note: This is specific to userscript environments like Tampermonkey.
	* @security This function uses `unsafeWindow` to access global variables on the page. This can be a security risk if the page's scripts are malicious.
	* @param {string | keyof typeof unsafeWindow} name - The name of the variable to wait for.
	* @param {HTMLElement} [target=document.body] - The DOM element to observe for changes as a fallback trigger.
	* @returns {Promise<any>} A promise that resolves with the value of the variable once it becomes available.
	*/
	function waitForVar(name, target = document.body) {
		return new Promise((resolve) => {
			if (!isNothing(unsafeWindow[name])) {
				resolve(unsafeWindow[name]);
				return;
			}
			const observer = new MutationObserver(() => {
				if (!isNothing(unsafeWindow[name])) {
					resolve(unsafeWindow[name]);
					observer.disconnect();
				}
			});
			observer.observe(target, {
				childList: true,
				subtree: true,
				attributes: true
			});
		});
	}
	/**
	* Returns a promise that resolves after a specified amount of time.
	* @param {number} [millis=1000] - The duration to wait in milliseconds.
	* @param {T} [result] - The value the promise will resolve with.
	* @returns {Promise<T>} A promise that resolves after the given time.
	*/
	function waitForTimer(millis = 1e3, result) {
		return new Promise((resolve) => {
			setTimeout(() => resolve(result), millis);
		});
	}
	/**
	* Waits for both a promise to resolve and a minimum amount of time to pass.
	* @template T
	* @param {Promise<T>} promise - The promise to wait for.
	* @param {number} [timer=1000] - The minimum time to wait in milliseconds.
	* @returns {Promise<T>} A promise that resolves with the result of the input promise, after the timer has also completed.
	*/
	async function waitWithTimer(promise, timer = 1e3) {
		const [result] = await Promise.all([promise, waitForTimer(timer)]);
		return result;
	}
	//#endregion
	//#region src/utils/bruteforce.ts
	/**
	* A last-resort method to scrape image URLs by simulating user interaction.
	* This function should only be used when image URLs are not readily available in the page source and must be discovered through interaction, such as clicking a "next" button.
	* It programmatically clicks a "next" button to navigate through pages and extracts the image source from a target element on each page.
	* An overlay is added to prevent user interaction during the process.
	*
	* @param {() => void} resetPosition - A function to reset the scroll position or state before starting.
	* @param {number} quantPages - The total number of pages to scrape.
	* @param {string} nextSelector - The CSS selector for the "next page" button.
	* @param {string} targetSelector - The CSS selector for the container element where the image appears.
	* @param {string} [imageSelector='img'] - The CSS selector for the image element within the target container.
	* @param {string} [imageAttribute='src'] - The attribute on the image element that holds the URL.
	* @returns {Promise<string[]>} A promise that resolves with an array of the scraped image URLs.
	*/
	async function bruteforce(resetPosition, quantPages, nextSelector, targetSelector, imageSelector = "img", imageAttribute = "src") {
		const div = document.createElement("div");
		div.setAttribute("style", "height: 100vh;width: 100vw;position: fixed;top: 0;left: 0;z-index: 100000;background: white;opacity: 0.5;");
		document.body.append(div);
		resetPosition();
		const next = document.querySelector(nextSelector);
		const target = document.querySelector(targetSelector);
		const src = [];
		for (let i = 1; i <= quantPages; i += 1) {
			src[i - 1] = await waitWithTimer(waitForAtb(imageSelector, imageAttribute, target ?? document.body), 100);
			target?.querySelector(imageSelector)?.removeAttribute(imageAttribute);
			next?.dispatchEvent(new Event("click"));
		}
		return src;
	}
	//#endregion
	//#region src/adult/8muses.ts
	var eightMuses = {
		name: ["8Muses.com", "8Muses.io"],
		obs: "Slow start, bruteforce may be required",
		url: /https?:\/\/(comics.)?8muses.(com|io)\/(comics\/)?picture\/.+/,
		homepage: ["https://comics.8muses.com/", "https://8muses.io/"],
		language: [Language.ENGLISH],
		category: Category.HENTAI,
		async run() {
			const img = unsafeWindow.link_images?.slice(1, unsafeWindow.link_images.length) ?? [];
			const count = document.querySelector("link[rel=\"last\"]")?.getAttribute("href")?.match(/\d+$/)?.at(0);
			const num = img?.length ?? parseInt(count ?? "0", 10);
			const manga = {
				title: [...document.querySelectorAll(".top-menu-breadcrumb li:not(:last-child)")].map((e) => e?.textContent?.trim()).join("/"),
				series: document.querySelector(".top-menu-breadcrumb li:nth-last-child(2) a")?.getAttribute("href"),
				pages: num,
				prev: "#",
				next: "#",
				lazy: false,
				timer: 10,
				listImages: img,
				async before() {
					if (!unsafeWindow.link_images?.length) manga.listImages = await bruteforce(() => {
						const prev = document.querySelector(".page-prev");
						while (document.querySelector(".c-dropdown-toggle")?.textContent?.match(/\d+/)?.at(0) !== "1") prev?.dispatchEvent(new Event("click"));
					}, num, ".page-next", ".p-picture", ".photo img", "src");
				}
			};
			return manga;
		}
	};
	//#endregion
	//#region src/adult/9hentai.ts
	var ninehentai = {
		name: "9Hentai",
		url: /https?:\/\/(www\.)?9hentai.(so)\/g\/.+\/.+/,
		homepage: "https://9hentai.so",
		language: [Language.ENGLISH],
		category: Category.HENTAI,
		waitAttr: ["#jumpPageModal input", "max"],
		async run() {
			const data = { id: parseInt(/\d+/.exec(window.location.pathname)?.at(0) ?? "0", 10) };
			const options = {
				method: "POST",
				body: JSON.stringify(data),
				headers: { "Content-Type": "application/json" }
			};
			const api = await fetch("/api/getBookByID", options).then(async (res) => res.json());
			return {
				title: api.results.title,
				series: `/g/${api.results.id}/`,
				pages: api.results.total_page,
				prev: "#",
				next: "#",
				listImages: Array(api.results.total_page).fill(0).map((_, i) => `${api.results.image_server.replace(".com", ".so") + api.results.id}/${i + 1}.jpg`)
			};
		}
	};
	//#endregion
	//#region src/adult/akumamoe.ts
	var akumamoe = {
		name: "AkumaMoe",
		url: /https?:\/\/(www\.)?akuma\.moe\/g\/.+\/.+/,
		homepage: "https://akuma.moe",
		language: [Language.RAW],
		category: Category.HENTAI,
		waitFunc: () => unsafeWindow.img_lst?.length === document.querySelectorAll(".reader-nav:first-child .nav-select option")?.length,
		async run() {
			return {
				title: document.querySelector("h1.sr-only")?.textContent?.trim().replace(/^Reading /, ""),
				series: `https://akuma.moe/g/${/\/g\/([^/]+)\//.exec(window.location.pathname)?.[1]}/`,
				pages: unsafeWindow.img_lst.length,
				prev: "#",
				next: "#",
				listImages: unsafeWindow.img_lst.map((img) => `${unsafeWindow.img_prt}/${img}`)
			};
		}
	};
	//#endregion
	//#region src/adult/bestporncomix.ts
	var bestporncomix = {
		name: "BestPornComix",
		url: /https?:\/\/(www\.)?bestporncomix.com\/gallery\/.+/,
		homepage: "https://www.bestporncomix.com",
		language: [Language.ENGLISH],
		category: Category.HENTAI,
		waitTime: 5e3,
		run() {
			const images = [...document.querySelectorAll("figure a")];
			return {
				title: document.querySelector("h1.entry-title")?.textContent?.trim(),
				pages: images.length,
				prev: "#",
				next: "#",
				listImages: images.map((img) => img.getAttribute("href") ?? "")
			};
		}
	};
	//#endregion
	//#region src/adult/doujinmoe.ts
	var doujinmoe = {
		name: "DoujinMoeNM",
		url: /https?:\/\/(www\.)?doujins.com\/.+/,
		homepage: "https://doujins.com/",
		language: [Language.ENGLISH],
		category: Category.HENTAI,
		waitEle: ".doujin",
		run() {
			const images = [...document.querySelectorAll(".doujin")];
			return {
				title: document.querySelector(".folder-title a:last-child")?.textContent?.trim(),
				series: document.querySelector(".folder-title a:nth-last-child(2)")?.getAttribute("href"),
				pages: images.length,
				prev: "#",
				next: "#",
				listImages: images.map((img) => img.getAttribute("data-file") ?? "")
			};
		}
	};
	//#endregion
	//#region src/adult/dragontranslation.ts
	var dragontranslation = {
		name: "Dragon Translation",
		url: /https?:\/\/(www\.)?dragontranslation.net\/leer\/.+/,
		homepage: "https://dragontranslation.net/es",
		language: [Language.SPANISH],
		category: Category.HENTAI,
		waitEle: "#chapter_imgs img",
		run() {
			const images = [...document.querySelectorAll("#chapter_imgs img")].map((img) => img.getAttribute("src") ?? "").filter((src) => src && src !== "/discord2.jpg");
			return {
				title: document.querySelector("h1")?.textContent?.trim(),
				series: document.querySelector("h2 + div a")?.getAttribute("href"),
				pages: images.length,
				prev: document.querySelector(".fa-chevron-circle-left")?.parentElement?.getAttribute("href"),
				next: document.querySelector(".fa-chevron-circle-right")?.parentElement?.getAttribute("href"),
				listImages: images
			};
		}
	};
	//#endregion
	//#region src/adult/exhentai.ts
	var exhentai = {
		name: ["ExHentai", "e-Hentai"],
		url: /https?:\/\/(g\.)?(exhentai|e-hentai).org\/s\/.+\/.+/,
		homepage: ["https://exhentai.org/", "https://e-hentai.org/"],
		language: [Language.ENGLISH],
		obs: "May get your IP Banned, use with moderation",
		category: Category.HENTAI,
		async run() {
			const num = parseInt(document.querySelector(".sn div span:nth-child(2)")?.textContent ?? "0", 10);
			const maxGalley = Math.ceil(num / 20);
			const gallery = document.querySelector(".sb a")?.getAttribute("href")?.replace(/\?p=\d+/, "");
			const fetchBlocks = Array(maxGalley).fill(0).map(async (_, galleryId) => fetch(`${gallery}?p=${galleryId}`).then(async (res) => res.text()).then((html) => new DOMParser().parseFromString(html, "text/html")));
			const pages = (await Promise.all(fetchBlocks)).flatMap((html) => [...html.querySelectorAll("#gdt a")].map((item) => item.getAttribute("href") ?? ""));
			return {
				title: document.querySelector("#i1 h1")?.textContent?.trim(),
				series: gallery,
				pages: num,
				begin: parseInt(document.querySelector("div#i2 span")?.textContent ?? "1", 10),
				prev: "#",
				next: "#",
				listPages: pages,
				img: "#img",
				lazy: true,
				async reload(page) {
					const oldUrl = `${pages[page - 1]}`;
					const slug = await fetch(oldUrl).then((res) => res.text()).then((html) => /nl\('([\d-]+)'\)/.exec(html)?.[1]);
					const newUrl = `${oldUrl}${oldUrl.indexOf("?") ? "&" : "?"}nl=${slug}`;
					return fetch(newUrl).then((res) => res.text()).then((html) => new DOMParser()?.parseFromString(html, "text/html")?.querySelector("#img")?.getAttribute("src") ?? "");
				}
			};
		}
	};
	//#endregion
	//#region src/adult/freeadultcomix.ts
	var freeadultcomix = {
		name: "FreeAdultComix",
		url: /https?:\/\/(www\.)?freeadultcomix.com\/.+/,
		homepage: "https://www.freeadultcomix.com",
		language: [Language.ENGLISH],
		category: Category.HENTAI,
		waitTime: 5e3,
		run() {
			const images = [...document.querySelectorAll(".foto img")];
			return {
				title: document.querySelector(".post-conteudo h1")?.textContent?.trim(),
				pages: images.length,
				prev: "#",
				next: "#",
				listImages: images.map((img) => img.getAttribute("src") ?? "")
			};
		}
	};
	//#endregion
	//#region src/adult/fsicomics.ts
	var fsicomics = {
		name: "FSIComics",
		url: /https?:\/\/(www\.)?fsicomics.com\/.+/,
		homepage: "https://fsicomics.com/",
		language: [Language.ENGLISH],
		category: Category.HENTAI,
		run() {
			const images = [...document.querySelectorAll(".wp-block-gallery img")];
			return {
				title: document.querySelector(".s-title")?.textContent?.trim(),
				pages: images.length,
				prev: "#",
				next: "#",
				listImages: images.map((img) => img.getAttribute("data-large-file") ?? "")
			};
		}
	};
	//#endregion
	//#region src/adult/gntai.ts
	var gntai = {
		name: "GNTAI.net",
		url: /https?:\/\/(www\.)?gntai.net\/(?!(category|tags|autores))[^/]+\/.+/,
		homepage: "https://www.gntai.net/",
		language: [Language.SPANISH],
		category: Category.HENTAI,
		run() {
			const images = document.querySelector("#main > script")?.innerHTML.match(/var pages = [^;]+/)?.at(0)?.toString().match(/https?[^"]+/g) ?? [];
			return {
				title: document.querySelector(".entry-header h1")?.textContent?.trim(),
				pages: images?.length,
				prev: "#",
				next: "#",
				listImages: images
			};
		}
	};
	//#endregion
	//#region src/adult/hdoujin.ts
	var hdoujin = {
		name: "HDoujin",
		url: /https?:\/\/(www\.)?hdoujin\.org\/.+/,
		homepage: "https://hdoujin.org/",
		language: [Language.ENGLISH],
		category: Category.HENTAI,
		waitEle: "nav select option",
		async run() {
			const gallery = history.state.memo.gallery;
			const size = gallery.resolution;
			const { base, entries } = history.state.memo.data;
			const src = entries.map((image) => `${base}/${image.path}?w=${size}`);
			return {
				title: gallery.title,
				series: `/g/${gallery.id}/${gallery.key}/`,
				pages: src.length,
				prev: "#",
				next: "#",
				fetchOptions: {
					method: "GET",
					redirect: "follow"
				},
				listImages: src
			};
		}
	};
	//#endregion
	//#region src/adult/hentai2read.ts
	var hentai2read = {
		name: "Hentai2Read",
		url: /https?:\/\/(www\.)?hentai2read.com\/[^/]+\/\d+(.\d+)?\//,
		homepage: "https://hentai2read.com/",
		language: [Language.ENGLISH],
		category: Category.HENTAI,
		run() {
			return {
				title: document.querySelector(".reader-left-text")?.textContent?.trim(),
				series: unsafeWindow.gData.mainURL,
				pages: unsafeWindow.gData.images.length,
				prev: unsafeWindow.gData.previousURL,
				next: unsafeWindow.gData.nextURL,
				listImages: unsafeWindow.gData.images.map((i) => `https://static.hentaicdn.com/hentai${i}`)
			};
		}
	};
	//#endregion
	//#region src/adult/hentaiera.ts
	var hentaiera = {
		name: "HentaiEra",
		url: /https?:\/\/(www\.)?hentaiera.com\/view\/.+\/\d+\/?/,
		homepage: "https://hentaiera.com/",
		language: [Language.ENGLISH],
		category: Category.HENTAI,
		run() {
			const num = parseInt(document.querySelector(".total_pages")?.textContent ?? "0", 10);
			return {
				title: document.querySelector("h1")?.textContent?.trim().replace(/ - Page .+$/, ""),
				series: document.querySelector(".return_btn ")?.getAttribute("href"),
				pages: num,
				prev: "#",
				next: "#",
				listPages: Array(num).fill(0).map((_, i) => window.location.href.replace(/\/\d*\/?$/, `/${i + 1}`)),
				img: "#gimg",
				lazyAttr: "data-src"
			};
		}
	};
	//#endregion
	//#region src/adult/hentaiforce.ts
	var hentaiforce = {
		name: "HentaiForce",
		url: /https?:\/\/(www\.)?hentaiforce.net\/view\/.+\/\d+/,
		homepage: "https://hentaiforce.net/",
		language: [Language.ENGLISH],
		category: Category.HENTAI,
		run() {
			return {
				title: document.querySelector("h1")?.textContent?.trim().replace(/ - Page .+$/, ""),
				series: document.querySelector(".reader-go-back ")?.getAttribute("href"),
				pages: unsafeWindow.readerPages.lastPage,
				prev: "#",
				next: "#",
				listImages: Array(unsafeWindow.readerPages.lastPage).fill(0).map((_, i) => unsafeWindow.readerPages.baseUriImg.replace("%c", unsafeWindow.readerPages.pages[i + 1].l).replace("%s", unsafeWindow.readerPages.pages[i + 1].f))
			};
		}
	};
	//#endregion
	//#region src/utils/urls.ts
	/**
	* Regular expression to match an object URL (blob URL).
	* @type {RegExp}
	*/
	var objectURLRegex = /^blob:(.+?)\/(.+)$/;
	/**
	* Checks if a given URL is a Base64 image data URL.
	* @param {string} imageUrl - The URL to check.
	* @returns {boolean} `true` if the URL is a Base64 image, `false` otherwise.
	*/
	function isBase64ImageUrl(imageUrl) {
		return /^data:image\/(png|jpg|jpeg|gif|svg)/.test(imageUrl);
	}
	/**
	* Checks if a given URL is an object URL (blob URL).
	* @param {string} url - The URL to check.
	* @returns {boolean} `true` if the URL is an object URL, `false` otherwise.
	*/
	function isObjectURL(url) {
		return objectURLRegex.test(url);
	}
	/**
	* Determines the file extension from a single character code.
	* @param {string} c - The character code (e.g., 'p' for png).
	* @returns {string} The corresponding file extension.
	*/
	function extensionByCode(c) {
		switch (c) {
			case "p": return "png";
			case "b": return "bmp";
			case "g": return "gif";
			case "w": return "webp";
			default: return "jpg";
		}
	}
	//#endregion
	//#region src/adult/hentaifox.ts
	var hentaifox = {
		name: "HentaiFox",
		url: /https?:\/\/(www\.)?hentaifox.com\/g\/.+/,
		homepage: "https://www.hentaifox.com/",
		language: [Language.ENGLISH],
		category: Category.HENTAI,
		waitVar: "g_th",
		waitFunc: () => document.querySelector("#gimg")?.classList.contains("loaded") ?? false,
		run() {
			const num = parseInt(document.querySelector(".total_pages")?.textContent ?? "", 10);
			const src = document.querySelector("#gimg")?.getAttribute("src")?.replace(/\d+.\w+$/, "") ?? "";
			return {
				title: document.querySelector("title")?.textContent?.replace(/ - Page .+/, "").trim(),
				series: document.querySelector(".browse_buttons a")?.getAttribute("href"),
				pages: num,
				prev: "#",
				next: "#",
				listImages: Array(num).fill(0).map((_, i) => `${src + (i + 1)}.${extensionByCode(unsafeWindow.g_th[i + 1][0])}`)
			};
		}
	};
	//#endregion
	//#region src/adult/hentaihand.ts
	var hentaihand = {
		name: ["HentaiHand", "nHentai.com"],
		url: /https?:\/\/(www\.)?(hentaihand|nhentai).com\/.+\/reader/,
		homepage: ["https://hentaihand.com/", "https://nhentai.com"],
		language: [Language.ENGLISH],
		category: Category.HENTAI,
		waitEle: ".reader img",
		run() {
			const images = [...document.querySelectorAll(".reader img")];
			return {
				title: document.querySelector(".reader-header h5")?.textContent?.trim(),
				series: document.querySelector(".reader-header h5 a")?.getAttribute("href"),
				pages: images.length,
				prev: "#",
				next: "#",
				listImages: images.map((img) => img.getAttribute("data-src") ?? img.getAttribute("src") ?? "")
			};
		}
	};
	//#endregion
	//#region src/adult/hentaihere.ts
	var hentaihere = {
		name: "HentaIHere",
		url: /https?:\/\/(www\.)?hentaihere.com\/.+\/.+\/.+/,
		homepage: "https://www.hentaihere.com/",
		language: [Language.ENGLISH],
		category: Category.HENTAI,
		waitVar: "rff_imageList",
		run() {
			const src = document.querySelector("#arf-reader-img")?.getAttribute("src")?.replace(/\d.+/, "");
			return {
				title: unsafeWindow.rff_pageTitle.replace(/.+\|/, "").trim(),
				series: unsafeWindow.rff_thisManga,
				pages: unsafeWindow.rff_imageList.length,
				prev: unsafeWindow.rff_previousChapter,
				next: unsafeWindow.rff_nextChapter,
				listImages: unsafeWindow.rff_imageList.map((img) => src + img)
			};
		}
	};
	//#endregion
	//#region src/adult/hentainexus.ts
	var hentainexus = {
		name: "HentaiNexus",
		url: /https?:\/\/((www\.)?hentainexus.com|nexus.fakku.cc)\/read\/.+/,
		homepage: "https://hentainexus.com/",
		language: [Language.ENGLISH],
		category: Category.HENTAI,
		run() {
			const images = unsafeWindow.pageData?.map((i) => i.image) ?? unsafeWindow.images?.map((i) => i.url);
			return {
				title: document.querySelector("title")?.textContent?.replace(/^\[[\d/]+\]/, "").trim(),
				series: document.querySelector("#returnGalleryFooter a")?.getAttribute("href"),
				pages: images.length,
				prev: "#",
				next: "#",
				listImages: images
			};
		}
	};
	//#endregion
	//#region src/adult/hentalk.ts
	var hentalk = {
		name: "HenTalk",
		url: /https?:\/\/(www.)?hentalk.pw/,
		homepage: "https://hentalk.pw/",
		language: [Language.ENGLISH],
		category: Category.HENTAI,
		async run() {
			const cdn = "https://hentalk.pw";
			const api = await fetch(`${window.location.pathname}/__data.json?x-sveltekit-trailing-slash=1&x-sveltekit-invalidated=001`).then(async (res) => res.json()).then((j) => j.nodes[2].data);
			const gallery = api?.[api.find((e) => e?.gallery)?.gallery];
			const slug = api?.[gallery?.hash] || api?.[api.find((e) => e?.hash && e?.id).hash];
			const images = api?.[gallery.images].map((i) => api[i]).map((i) => api[i.filename]);
			return {
				title: api?.[gallery.title],
				series: window.location.href.replace(/read\/.+/, ""),
				pages: images?.length,
				prev: "#",
				next: "#",
				listImages: images?.map((src) => `${cdn}/image/${slug}/${src}`)
			};
		}
	};
	//#endregion
	//#region src/adult/hitomi.ts
	var hitomi = {
		name: "Hitomi",
		url: /https?:\/\/hitomi.la\/reader\/.+/,
		homepage: "https://hitomi.la/",
		language: [Language.ENGLISH],
		category: Category.HENTAI,
		waitAttr: ["#comicImages img", "src"],
		waitVar: "galleryinfo",
		run() {
			return {
				title: document.querySelector("title")?.textContent?.replace("| Hitomi.la", "").trim(),
				series: document.querySelector(".brand")?.getAttribute("href"),
				pages: unsafeWindow.galleryinfo.files.length,
				prev: "#",
				next: "#",
				listImages: unsafeWindow.galleryinfo.files.map((file) => unsafeWindow.url_from_url_from_hash(unsafeWindow.galleryinfo, file, "webp"))
			};
		}
	};
	//#endregion
	//#region src/adult/imhentai.ts
	var imhentai = {
		name: "Imhentai",
		url: /https?:\/\/(www\.)?imhentai.xxx\/view\/.+\/.+\//,
		homepage: "https://imhentai.xxx/",
		language: [Language.ENGLISH],
		category: Category.HENTAI,
		waitVar: "g_th",
		async run() {
			const galleryId = document.querySelector("#gallery_id")?.getAttribute("value");
			const imageDir = document.querySelector("#image_dir")?.getAttribute("value");
			const num = parseInt(document.querySelector("#pages")?.getAttribute("value") ?? "", 10);
			const randomServer = await waitForVar("random_server");
			return {
				title: document.querySelector("title")?.textContent?.trim(),
				series: document.querySelector(".return_btn")?.getAttribute("href"),
				pages: num,
				prev: "#",
				next: "#",
				listImages: Array(num).fill(0).map((_, i) => `//${randomServer}/${imageDir}/${galleryId}/${i + 1}.${extensionByCode(unsafeWindow.g_th[i + 1][0])}`)
			};
		}
	};
	//#endregion
	//#region src/adult/kingcomix.ts
	var kingcomix = {
		name: [
			"KingComix",
			"Chochox",
			"Comics18"
		],
		url: /https?:\/\/(www\.)?(kingcomix|chochox|comics18).(com|org)\/.+/,
		homepage: [
			"https://kingcomix.com/",
			"https://chochox.com/porno/",
			"https://comics18.org/"
		],
		language: [Language.ENGLISH, Language.SPANISH],
		category: Category.HENTAI,
		run() {
			const src = [...document.querySelectorAll("figure img, .entry-content img:not(a img), .wp-content img")];
			return {
				title: document.querySelector("h1.singleTitle-h1")?.textContent?.trim(),
				pages: src.length,
				prev: "#",
				next: "#",
				listImages: src.map((img) => img.getAttribute("data-src") ?? img.getAttribute("data-full-url") ?? img.getAttribute("data-lazy-src") ?? img.getAttribute("src") ?? "")
			};
		}
	};
	//#endregion
	//#region src/adult/luscious.ts
	var luscious = {
		name: "Luscious",
		url: /https?:\/\/(www\.)?luscious.net\/.+\/read\/.+/,
		homepage: "https://luscious.net/",
		language: [Language.ENGLISH],
		category: Category.HENTAI,
		waitEle: ".album-info div",
		async run() {
			const num = parseInt(document.querySelector("input[name=\"page_number\"] + span")?.textContent?.match(/\d+/)?.pop() ?? "0", 10);
			const totalBlocks = Math.ceil(num / 50);
			const id = parseInt(document.querySelector(".album-heading a")?.getAttribute("href")?.match(/\d+\//)?.toString() ?? "0", 10);
			const query = "&query=%20query%20PictureListInsideAlbum(%24input%3A%20PictureListInput!)%20%7B%20picture%20%7B%20list(input%3A%20%24input)%20%7B%20info%20%7B%20...FacetCollectionInfo%20%7D%20items%20%7B%20__typename%20id%20title%20description%20created%20like_status%20number_of_comments%20number_of_favorites%20moderation_status%20width%20height%20resolution%20aspect_ratio%20url_to_original%20url_to_video%20is_animated%20position%20permissions%20url%20tags%20%7B%20category%20text%20url%20%7D%20thumbnails%20%7B%20width%20height%20size%20url%20%7D%20%7D%20%7D%20%7D%20%7D%20fragment%20FacetCollectionInfo%20on%20FacetCollectionInfo%20%7B%20page%20has_next_page%20has_previous_page%20total_items%20total_pages%20items_per_page%20url_complete%20%7D%20";
			const fetchBlocks = Array(totalBlocks).fill(0).map(async (_, block) => {
				const url = `https://apicdn.luscious.net/graphql/nobatch/?operationName=PictureListInsideAlbum&variables={"input":{"filters":[{"name":"album_id","value":"${id}"}],"display":"position","items_per_page":50,"page":${block + 1}}}${query}`;
				return GM.xmlHttpRequest({
					method: "GET",
					url
				}).then((res) => JSON.parse(res.responseText));
			});
			const images = (await Promise.all(fetchBlocks)).flatMap((res) => res.data.picture.list.items.map((img) => img.url_to_original));
			return {
				title: document.querySelector(".album-heading a")?.textContent?.trim(),
				series: document.querySelector(".album-heading a")?.getAttribute("href"),
				pages: num,
				prev: "#",
				next: "#",
				listImages: images
			};
		}
	};
	//#endregion
	//#region src/main/madarawp.ts
	var imageRegex = /^([\t\n])*(https?:\/\/)?.+\.(jpg|jpeg|png|gif|bmp|webp).*$/;
	function findImages() {
		return [...document.querySelectorAll(".wp-manga-chapter-img, .blocks-gallery-item img, .reading-content img, #chapter-images img, #chapterContent img")].map((img) => {
			const attrs = [...img.attributes].filter((attr) => /.*(src|url).*/i.test(attr.name) && !/^.*(blank|lazy|loading).*$/.test(attr.value));
			if (attrs.length === 0) return "";
			return attrs.find((attr) => imageRegex.test(attr.value))?.value ?? img?.getAttribute("src") ?? "";
		});
	}
	//#endregion
	//#region src/adult/madarawp.ts
	var madarawph = {
		name: [
			"Madara WordPress Plugin",
			"MangaHaus",
			"Isekai Scan",
			"Comic Kiba",
			"Zinmanga",
			"mangatx",
			"Toonily",
			"Mngazuki",
			"JaiminisBox",
			"DisasterScans",
			"ManhuaPlus",
			"TopManhua",
			"NovelMic",
			"Reset-Scans",
			"LeviatanScans",
			"Dragon Tea",
			"SetsuScans",
			"ToonGod",
			"Hades Scans"
		],
		url: /https?:\/\/.+\/(manga|series|manhua|comic|ch|novel|webtoon|tmo)\/.+\/.+/,
		homepage: [
			"https://mangabooth.com/",
			"https://manhuaus.com",
			"https://isekaiscan.com/",
			"https://comickiba.com/",
			"https://zinmanga.com/",
			"https://mangatx.com/",
			"https://toonily.net/",
			"https://mangazuki.me/",
			"https://jaiminisbox.net",
			"https://disasterscans.com/",
			"https://manhuaplus.org/",
			"https://www.topmanhua.com/",
			"https://novelmic.com/",
			"https://reset-scans.com/",
			"https://leviatanscans.com/",
			"https://dragontea.ink/",
			"https://setsuscans.com/",
			"https://toongod.org/home/",
			"https://lectorhades.latamtoon.com"
		],
		language: [Language.ENGLISH],
		obs: "Any Site that uses Madara WordPress Plugin",
		category: Category.MANGA,
		waitFunc: () => {
			const images = findImages();
			return images.length > 0 && images.every((s) => s && imageRegex.test(s));
		},
		run() {
			const images = findImages();
			return {
				title: document.querySelector("#chapter-heading")?.textContent?.trim(),
				series: (document.querySelector(".breadcrumb li:nth-child(3) a") ?? document.querySelector(".breadcrumb li:nth-child(2) a"))?.getAttribute("href"),
				pages: images.length,
				prev: document.querySelector(".prev_page")?.getAttribute("href"),
				next: document.querySelector(".next_page")?.getAttribute("href"),
				listImages: images
			};
		},
		name: [
			"Madara WordPress Plugin",
			"AllPornComic",
			"Manytoon",
			"Manga District"
		],
		url: /https?:\/\/.+\/(porncomic|read-scan|title)\/.+\/.+/,
		homepage: [
			"#",
			"https://allporncomic.com/",
			"https://manytoon.com/",
			"https://mangadistrict.com/"
		],
		category: Category.HENTAI
	};
	//#endregion
	//#region src/adult/index.ts
	var sites = [
		akumamoe,
		bestporncomix,
		doujinmoe,
		dragontranslation,
		eightMuses,
		exhentai,
		fsicomics,
		freeadultcomix,
		gntai,
		hdoujin,
		hentai2read,
		hentaiera,
		hentaiforce,
		hentaifox,
		hentaihand,
		hentaihere,
		hentainexus,
		hentalk,
		hitomi,
		imhentai,
		kingcomix,
		luscious,
		{
			name: "MultPorn",
			url: /https?:\/\/(www\.)?multporn.net\/(comics|hentai_manga)\/.+/,
			homepage: "https://multporn.net/",
			language: [Language.ENGLISH],
			category: Category.HENTAI,
			async run() {
				const url = /"configUrl":"(.+?)",/.exec(document.head.textContent)?.at(1)?.replaceAll("\\", "") ?? "";
				const images = [...(await fetch(url).then(async (res) => res.text()).then((html) => new DOMParser().parseFromString(html, "text/xml"))).querySelectorAll("image")];
				return {
					title: document.querySelector("#page-title")?.textContent?.trim(),
					pages: images.length,
					prev: "#",
					next: "#",
					listImages: images.map((img) => img.getAttribute("imageURL") ?? "")
				};
			}
		},
		{
			name: "MyHentaiGallery",
			url: /https?:\/\/(www\.)?myhentaigallery.com\/g\/.+\/\d+/,
			homepage: "https://www.myhentaigallery.com",
			language: [Language.ENGLISH],
			category: Category.HENTAI,
			run() {
				const lastPage = document.getElementById("js__pagination__next")?.parentElement?.previousElementSibling?.querySelector("a");
				const num = parseInt(lastPage?.textContent ?? "", 10);
				return {
					title: document.querySelector("title")?.textContent?.trim(),
					series: document.querySelector(".back-to-gallery a")?.getAttribute("href"),
					pages: num,
					prev: "#",
					next: "#",
					listPages: Array(num).fill(0).map((_, i) => window.location.href.replace(/\/\d+$/, `/${i + 1}`)),
					img: ".gallery-slide img"
				};
			}
		},
		{
			name: ["nHentai.net"],
			url: /https?:\/\/(www\.)?(nhentai).(net|xxx|com|to)\/g\/.+/,
			homepage: ["https://nhentai.net/"],
			language: [Language.ENGLISH],
			category: Category.HENTAI,
			waitEle: "#image-container img",
			async run() {
				const cdn = await fetch("https://nhentai.net/api/v2/config").then(async (res) => res.json());
				const api = await fetch(`https://nhentai.net/api/v2/galleries/${window.location.pathname.split("/")[2]}`).then(async (res) => res.json());
				return {
					title: document.querySelector("title")?.textContent?.split("- Page")[0].trim(),
					series: document.querySelector(".go-back")?.getAttribute("href"),
					pages: api.pages.length,
					prev: "#",
					next: "#",
					listImages: api.pages.map((img) => `${cdn.image_servers[Math.floor(Math.random() * cdn.image_servers.length)]}/${img.path}`)
				};
			}
		},
		ninehentai,
		{
			name: "PornComicsHD",
			url: /https?:\/\/(www\.)?porncomicshd.com\/es.*/,
			homepage: "https://porncomicshd.com/es",
			language: [Language.SPANISH],
			category: Category.HENTAI,
			waitEle: "app-comic-reader img",
			async run() {
				const img = [...document.querySelectorAll("app-comic-reader img")];
				return {
					title: document.querySelector("h1")?.textContent?.trim(),
					pages: img.length,
					prev: "#",
					next: "#",
					lazy: false,
					listImages: img.map((i) => i.getAttribute("src") ?? "")
				};
			}
		},
		{
			name: "Pururin",
			url: /https?:\/\/(www\.)?pururin.me\/(view|read)\/.+\/.+\/.+/,
			homepage: "https://pururin.me/",
			language: [Language.ENGLISH],
			category: Category.HENTAI,
			waitAttr: [".img-viewer img", "src"],
			run() {
				const src = document.querySelector(".img-viewer img")?.getAttribute("src") ?? "";
				const num = [...document.querySelectorAll(".img-select option")];
				return {
					title: document.querySelector(".title")?.textContent?.trim(),
					series: document.querySelector(".breadcrumb-item:nth-child(4) a")?.getAttribute("href"),
					pages: num.length,
					prev: "#",
					next: "#",
					listImages: num.map((_, i) => src.replace(/\/\d+\./, `/${i + 1}.`))
				};
			}
		},
		{
			name: "SchaleNetwork",
			url: /https?:\/\/(www\.)?(niyaniya|shupogaki|hoshino).(moe|one)/,
			homepage: "https://schale.network/",
			language: [Language.ENGLISH],
			category: Category.HENTAI,
			waitEle: "nav select option",
			async run() {
				const gallery = history.state.memo.gallery;
				const size = gallery.resolution;
				const { base, entries } = history.state.memo.data;
				const src = entries.map((image) => `${base}/${image.path}?w=${size}`);
				return {
					title: gallery.title,
					series: `/g/${gallery.id}/${gallery.key}/`,
					pages: src.length,
					prev: "#",
					next: "#",
					fetchOptions: {
						method: "GET",
						redirect: "follow"
					},
					listImages: src
				};
			}
		},
		{
			name: "Simply-Hentai",
			url: /https?:\/\/(www\.)?simply-hentai.com\/.+\/page\/.+/,
			homepage: "https://simply-hentai.com/",
			language: [Language.ENGLISH],
			category: Category.HENTAI,
			waitEle: "#__NEXT_DATA__",
			async run() {
				const images = JSON.parse(document.querySelector("#__NEXT_DATA__")?.innerHTML ?? "").props.pageProps.data.pages.map((img) => img.sizes.full);
				return {
					title: document.querySelector(".content-headline a")?.textContent?.trim(),
					series: document.querySelector(".content-headline a")?.getAttribute("href"),
					pages: images.length,
					prev: "#",
					next: "#",
					listImages: images
				};
			}
		},
		{
			name: "TMOHentai",
			url: /https?:\/\/(www\.)?tmohentai.com\/reader\/.+\/(paginated\/\d+|cascade)/,
			homepage: "https://tmohentai.com/",
			language: [Language.SPANISH],
			category: Category.HENTAI,
			run() {
				const src = [...document.querySelectorAll(".content-image")].map((i) => i.getAttribute("data-original") ?? i.getAttribute("src") ?? "");
				return {
					before() {
						if (window.location.pathname.includes("paginated")) window.location.pathname = window.location.pathname.replace(/paginated.*/, "cascade");
					},
					title: document.querySelector(".reader-title")?.textContent?.trim(),
					series: document.querySelector(".nav-justified li a")?.getAttribute("href"),
					pages: src.length,
					prev: "#",
					next: "#",
					listImages: src
				};
			}
		},
		threehentai,
		{
			name: "Tsumino",
			url: /https?:\/\/(www\.)?tsumino.com\/Read\/Index\/\d+(\?page=.+)?/,
			homepage: "https://tsumino.com/",
			language: [Language.ENGLISH],
			category: Category.HENTAI,
			async run() {
				const dataopt = document.querySelector("#image-container")?.getAttribute("data-opt");
				const datacdn = document.querySelector("#image-container")?.getAttribute("data-cdn") ?? "";
				const url = `https://www.tsumino.com/Read/Load?q=${dataopt}`;
				const api = await fetch(url).then(async (res) => res.json());
				return {
					title: document.querySelector("title")?.textContent?.replace(/.+Read/, "").trim(),
					series: api.reader_start_url,
					pages: api.reader_page_total,
					prev: "#",
					next: "#",
					listImages: Array(api.reader_page_total).fill(0).map((_, i) => datacdn.replace("[PAGE]", `${i + 1}`))
				};
			}
		},
		{
			name: ["vermangasporno", "vercomicsporno"],
			url: /https?:\/\/(www\.)?(vermangasporno|vercomicsporno).com\/.+/,
			homepage: ["https://vermangasporno.com/", "https://vercomicsporno.com/"],
			language: [Language.SPANISH],
			category: Category.HENTAI,
			waitEle: "img[loading=\"lazy\"].size-full, .comicimg picture img, .wp-content img",
			run() {
				const images = [...document.querySelectorAll("img[loading=\"lazy\"].size-full, .comicimg picture img, .wp-content img")];
				return {
					title: document.querySelector("h1.titl, title")?.textContent?.trim(),
					pages: images.length,
					prev: "#",
					next: "#",
					listImages: images.map((img) => img.getAttribute("data-lazy-src") ?? img.getAttribute("data-src") ?? img.getAttribute("src") ?? "")
				};
			}
		},
		{
			name: "wnacg",
			url: /https?:\/\/(www\.)?wnacg.com\/photos-view-id-.+/,
			homepage: "https://wnacg.com/",
			language: [
				Language.ENGLISH,
				Language.RAW,
				Language.CHINESE
			],
			category: Category.HENTAI,
			run() {
				const pages = [...document.querySelectorAll(".pageselect option")];
				return {
					title: document.querySelector(".bread a:last-of-type")?.textContent?.trim(),
					pages: pages.length,
					prev: "#",
					next: "#",
					listPages: pages.map((page) => window.location.pathname.replace(/\d+/, page.value)),
					img: "#picarea"
				};
			}
		},
		{
			name: "XlecxOne",
			url: /https?:\/\/(www\.)?xlecx.one\/.+/,
			homepage: "https://xlecx.one/",
			language: [Language.ENGLISH],
			category: Category.HENTAI,
			run() {
				const src = [...new Set([...document.querySelectorAll("article .page__text img , article #content-2 img")].map((img) => img.getAttribute("data-src") ?? img.getAttribute("data-srce") ?? img.closest("a")?.getAttribute("href") ?? img.getAttribute("src") ?? ""))];
				return {
					title: document.querySelector("title")?.textContent?.trim(),
					pages: src.length,
					prev: "#",
					next: "#",
					listImages: src
				};
			}
		},
		{
			name: "xyzcomics",
			url: /https?:\/\/(www\.)?xyzcomics.com\/.+/,
			homepage: "https://xyzcomics.com/",
			language: [Language.ENGLISH],
			category: Category.HENTAI,
			run() {
				const images = [...document.querySelectorAll(".jig-link")];
				return {
					title: document.querySelector(".entry-title")?.textContent?.trim(),
					pages: images.length,
					prev: "#",
					next: "#",
					listImages: images.map((img) => img.getAttribute("href") ?? "")
				};
			}
		},
		{
			name: "Yabai",
			url: /https?:\/\/(www\.)?yabai.si\/g\/.+\/read/,
			homepage: "https://yabai.si/",
			language: [Language.ENGLISH],
			category: Category.HENTAI,
			async run() {
				const num = document.querySelectorAll("nav select option").length;
				const manga = {
					title: document.querySelector("title")?.textContent?.trim(),
					series: "../",
					pages: num,
					prev: "#",
					next: "#",
					listImages: [""],
					async before() {
						manga.listImages = await bruteforce(() => {
							const item = document.querySelector("select option");
							if (item) item.selected = true;
							document.querySelector("select")?.dispatchEvent(new Event("change"));
						}, num, "button[title=\"Next\"]", "h1 + div", "img.mx-auto", "src");
					}
				};
				return manga;
			}
		},
		madarawph
	];
	//#endregion
	//#region src/utils/tampermonkey.ts
	/** biome-ignore-all lint/suspicious/noExplicitAny: the values truly does not matter */
	/**
	* Safely exposes a value to the window object, targeting `unsafeWindow` in userscript environments
	* and falling back to the standard `window` object.
	* @param {string} key - The key to assign the value to on the window object.
	* @param {any} content - The value to expose.
	*/
	function giveToWindow(key, content) {
		if (typeof unsafeWindow !== "undefined") unsafeWindow[key] = content;
		if (typeof window !== "undefined") window[key] = content;
	}
	/**
	* The primary logging function for the userscript, which prefixes all messages with a standard header.
	* @param {...any} text - The content to be logged.
	* @returns {any[]} The logged content.
	*/
	function logScript(...text) {
		console.log(`MangaOnlineViewer-adult: `, ...text);
		return text;
	}
	/**
	* A verbose logging function that only outputs messages when in a development environment.
	* @param {...any} text - The content to be logged.
	* @returns {any[]} The logged content.
	*/
	function logScriptVerbose(...text) {
		if (["dev", "development"].includes("adult")) console.info("MangaOnlineViewer: ", ...text);
		return text;
	}
	/**
	* A safe wrapper for `GM_deleteValue`.
	* @param {string} name - The key of the value to remove.
	*/
	function removeValueGM(name) {
		if (typeof GM_deleteValue !== "undefined") GM_deleteValue(name);
		else logScriptVerbose("Fake Removing: ", name);
	}
	/**
	* A shim for the `GM_info` object, providing fallback data for non-userscript environments.
	*/
	var getInfoGM = typeof GM_info !== "undefined" ? GM_info : {
		scriptHandler: "Console",
		script: {
			name: "Debug",
			version: "Testing"
		}
	};
	/**
	* A safe wrapper for `GM_getValue`.
	* @param {string} name - The key of the value to retrieve.
	* @param {any} [defaultValue=null] - The default value to return if the key does not exist.
	* @returns {any} The retrieved value or the default.
	*/
	function getValueGM(name, defaultValue) {
		if (typeof GM_getValue !== "undefined") return GM_getValue(name, defaultValue);
		logScriptVerbose("Fake Getting: ", name, " = ", defaultValue);
		return defaultValue;
	}
	/**
	* Retrieves a value from storage and parses it as JSON.
	* @param {string} name - The key of the value to retrieve.
	* @param {any} [defaultValue=null] - The default value to return if the key does not exist.
	* @returns {any} The parsed JSON object or the default value.
	*/
	function getJsonGM(name, defaultValue) {
		const result = getValueGM(name, defaultValue);
		if (typeof result === "string" && result.trim() !== "") try {
			return JSON.parse(result);
		} catch (e) {
			logScript("Failed to parse JSON from storage", name, e);
			return defaultValue;
		}
		return result;
	}
	/**
	* Retrieves the global settings object from storage.
	* @param {ISettings} [defaultSettings] - The default settings to return if none are found.
	* @returns {Partial<ISettings>} The global settings object.
	*/
	function getGlobalSettings(defaultSettings) {
		return getJsonGM("settings", defaultSettings);
	}
	/**
	* Retrieves the site-specific (local) settings object from storage.
	* @param {ISettings} [defaultSettings] - The default settings to return if none are found.
	* @returns {Partial<ISettings>} The local settings object.
	*/
	function getLocalSettings(defaultSettings) {
		return getJsonGM(window.location.hostname, defaultSettings);
	}
	/**
	* A safe wrapper for `GM_setValue`.
	* @param {string} name - The key for the value to be stored.
	* @param {any} value - The value to store.
	* @returns {string} The string representation of the stored value.
	*/
	function setValueGM(name, value) {
		if (typeof GM_setValue !== "undefined") {
			GM_setValue(name, value);
			logScript("Setting: ", name, " = ", value);
			return value.toString();
		}
		logScriptVerbose("Fake Setting: ", name, " = ", value);
		return String(value);
	}
	/**
	* Saves the global settings object to storage.
	* @param {Partial<ISettings>} value - The settings object to save.
	* @returns {string} The string representation of the saved object.
	*/
	function saveGlobalSettings(value) {
		return setValueGM("settings", value);
	}
	/**
	* Saves the site-specific (local) settings object to storage.
	* @param {Partial<ISettings>} value - The settings object to save.
	* @returns {string} The string representation of the saved object.
	*/
	function saveLocalSettings(value) {
		return setValueGM(window.location.hostname, value);
	}
	/**
	* Attempts to parse the browser name and version from the user agent string.
	* @returns {string} The browser name and version (e.g., "Chrome 108").
	*/
	function getBrowser() {
		const result = bowser.getParser(window.navigator.userAgent).getBrowser();
		return `${result.name} ${result.version}`;
	}
	/**
	* Gets the name of the userscript engine (e.g., 'Tampermonkey', 'Greasemonkey').
	* @returns {string} The name of the script handler.
	*/
	function getEngine() {
		return getInfoGM.scriptHandler ?? "Greasemonkey";
	}
	/**
	* Determines the type of device based on the user agent and screen size.
	* @returns {Device} The device type: 'mobile', 'tablet', or 'desktop'.
	*/
	var getDevice = () => {
		const device = bowser.getParser(window.navigator.userAgent).getPlatformType(true);
		if (device === "mobile" || window.matchMedia("screen and (max-width: 600px)").matches) return "mobile";
		if (device === "tablet" || window.matchMedia("screen and (max-width: 992px)").matches) return "tablet";
		return "desktop";
	};
	/**
	* A convenience function to check if the current device is a mobile or tablet.
	* @returns {boolean} `true` if the device is a mobile or tablet, `false` otherwise.
	*/
	var isMobile = () => getDevice() === "mobile" || getDevice() === "tablet";
	/**
	* Checks if the script is running in standalone mode (single HTML file).
	* @returns {boolean} `true` if in standalone mode, `false` otherwise.
	*/
	var isStandalone = () => window.location.protocol === "file:" || window.location.pathname.endsWith("Manga_Local_Viewer.html");
	/**
	* Sets up a listener for changes to a GM storage value, triggering a callback when the value is changed in another tab.
	* @param {(newSettings: Partial<ISettings>) => void} fn - The callback function to execute with the new settings.
	* @param {string} [gmValue='settings'] - The key of the GM value to listen to (e.g., 'settings' or a hostname).
	* @returns {number | undefined} The listener ID from `GM_addValueChangeListener`, or `undefined` if not available.
	*/
	var settingsChangeListener = (fn, gmValue = "settings") => {
		if (typeof GM_addValueChangeListener !== "undefined") try {
			return GM_addValueChangeListener(gmValue, (_name, _oldValue, newValue, remote) => {
				if (remote) fn(newValue);
			});
		} catch (e) {
			logScript("Failed to add settings listener", e);
		}
	};
	//#endregion
	//#region src/core/check.ts
	/**
	* A generic helper function to run a test condition.
	* @internal
	* @template T
	* @param {T | undefined} value - The value to check. If undefined, the test is skipped.
	* @param {() => Promise<any>} waiter - A function that returns a promise that resolves when the condition is met.
	* @param {string} startLog - The message to log when the test starts.
	* @param {string} endLog - The message to log when the test ends.
	*/
	async function testCondition(value, waiter, startLog, endLog) {
		if (value !== void 0) {
			logScript(startLog);
			logScript(endLog, await waiter(value));
		}
	}
	/**
	* Runs a series of checks for a given site to ensure that the page is ready for scraping.
	* @param {ISite} site - The site configuration object.
	*/
	async function runSiteTests(site) {
		await testCondition(site.waitAttr, (waitAttr) => waitForAtb(waitAttr?.[0], waitAttr?.[1]), `Waiting for Attribute ${site.waitAttr?.[1]} of ${site.waitAttr?.[0]}`, `Found Attribute ${site.waitAttr?.[1]} of ${site.waitAttr?.[0]} =`);
		await testCondition(site.waitEle, waitForElm, `Waiting for Element ${site.waitEle}`, "Found Element");
		await testCondition(site.waitVar, waitForVar, `Waiting for Variable ${site.waitVar}`, "Found Variable");
		await testCondition(site.waitFunc, waitForFunc, `Waiting to pass Function check ${site.waitFunc}`, "Found Function check");
		await testCondition(site.waitTime, (waitTime) => new Promise((resolve) => setTimeout(resolve, waitTime)), `Waiting for ${site.waitTime} milliseconds`, "Continuing after timer");
	}
	//#endregion
	//#region node_modules/nanostores/atom/index.js
	var listenerQueue = [];
	var lqIndex = 0;
	var QUEUE_ITEMS_PER_LISTENER = 4;
	var epoch = 0;
	var atom = /* @__NO_SIDE_EFFECTS__ */ (initialValue) => {
		let listeners = [];
		let $atom = {
			get() {
				if (!$atom.lc) $atom.listen(() => {})();
				return $atom.value;
			},
			init: initialValue,
			lc: 0,
			listen(listener) {
				$atom.lc = listeners.push(listener);
				return () => {
					for (let i = lqIndex + QUEUE_ITEMS_PER_LISTENER; i < listenerQueue.length;) if (listenerQueue[i] === listener) listenerQueue.splice(i, QUEUE_ITEMS_PER_LISTENER);
					else i += QUEUE_ITEMS_PER_LISTENER;
					let index = listeners.indexOf(listener);
					if (~index) {
						listeners.splice(index, 1);
						if (!--$atom.lc) $atom.off();
					}
				};
			},
			notify(oldValue, changedKey) {
				epoch++;
				let runListenerQueue = !listenerQueue.length;
				for (let listener of listeners) listenerQueue.push(listener, $atom.value, oldValue, changedKey);
				if (runListenerQueue) {
					for (lqIndex = 0; lqIndex < listenerQueue.length; lqIndex += QUEUE_ITEMS_PER_LISTENER) listenerQueue[lqIndex](listenerQueue[lqIndex + 1], listenerQueue[lqIndex + 2], listenerQueue[lqIndex + 3]);
					listenerQueue.length = 0;
				}
			},
			off() {},
			set(newValue) {
				let oldValue = $atom.value;
				if (oldValue !== newValue) {
					$atom.value = newValue;
					$atom.notify(oldValue);
				}
			},
			subscribe(listener) {
				let unbind = $atom.listen(listener);
				listener($atom.value);
				return unbind;
			},
			value: initialValue
		};
		return $atom;
	};
	//#endregion
	//#region node_modules/nanostores/lifecycle/index.js
	var MOUNT = 5;
	var UNMOUNT = 6;
	var REVERT_MUTATION = 10;
	var on = (object, listener, eventKey, mutateStore) => {
		object.events = object.events || {};
		if (!object.events[eventKey + REVERT_MUTATION]) object.events[eventKey + REVERT_MUTATION] = mutateStore((eventProps) => {
			object.events[eventKey].reduceRight((event, l) => (l(event), event), {
				shared: {},
				...eventProps
			});
		});
		object.events[eventKey] = object.events[eventKey] || [];
		object.events[eventKey].push(listener);
		return () => {
			let currentListeners = object.events[eventKey];
			let index = currentListeners.indexOf(listener);
			currentListeners.splice(index, 1);
			if (!currentListeners.length) {
				delete object.events[eventKey];
				object.events[eventKey + REVERT_MUTATION]();
				delete object.events[eventKey + REVERT_MUTATION];
			}
		};
	};
	var STORE_UNMOUNT_DELAY = 1e3;
	var onMount = ($store, initialize) => {
		let listener = (payload) => {
			let destroy = initialize(payload);
			if (destroy) $store.events[UNMOUNT].push(destroy);
		};
		return on($store, listener, MOUNT, (runListeners) => {
			let originListen = $store.listen;
			$store.listen = (...args) => {
				if (!$store.lc && !$store.active) {
					$store.active = true;
					runListeners();
				}
				return originListen(...args);
			};
			let originOff = $store.off;
			$store.events[UNMOUNT] = [];
			$store.off = () => {
				originOff();
				setTimeout(() => {
					if ($store.active && !$store.lc) {
						$store.active = false;
						for (let destroy of $store.events[UNMOUNT]) destroy();
						$store.events[UNMOUNT] = [];
					}
				}, STORE_UNMOUNT_DELAY);
			};
			return () => {
				$store.listen = originListen;
				$store.off = originOff;
			};
		});
	};
	//#endregion
	//#region node_modules/nanostores/computed/index.js
	var computedStore = (stores, cb, batched) => {
		if (!Array.isArray(stores)) stores = [stores];
		let previousArgs;
		let currentEpoch;
		let set = () => {
			if (currentEpoch === epoch) return;
			currentEpoch = epoch;
			let args = stores.map(($store) => $store.get());
			if (!previousArgs || args.some((arg, i) => arg !== previousArgs[i])) {
				previousArgs = args;
				let value = cb(...args);
				if (value && value.then && value.t) value.then((asyncValue) => {
					if (previousArgs === args) $computed.set(asyncValue);
				});
				else {
					$computed.set(value);
					currentEpoch = epoch;
				}
			}
		};
		let $computed = /* @__PURE__ */ atom(void 0);
		let get = $computed.get;
		$computed.get = () => {
			set();
			return get();
		};
		let timer;
		let run = batched ? () => {
			clearTimeout(timer);
			timer = setTimeout(set);
		} : set;
		onMount($computed, () => {
			let unbinds = stores.map(($store) => $store.listen(run));
			set();
			return () => {
				for (let unbind of unbinds) unbind();
			};
		});
		return $computed;
	};
	var computed = /* @__NO_SIDE_EFFECTS__ */ (stores, fn) => computedStore(stores, fn);
	//#endregion
	//#region node_modules/nanostores/map/index.js
	var map = /* @__NO_SIDE_EFFECTS__ */ (initial = {}) => {
		let $map = /* @__PURE__ */ atom(initial);
		$map.setKey = function(key, value) {
			let oldMap = $map.value;
			if (typeof value === "undefined" && key in $map.value) {
				$map.value = { ...$map.value };
				delete $map.value[key];
				$map.notify(oldMap, key);
			} else if ($map.value[key] !== value) {
				$map.value = {
					...$map.value,
					[key]: value
				};
				$map.notify(oldMap, key);
			}
		};
		return $map;
	}, t$5 = globalThis, i$6 = (t) => t, s$4 = t$5.trustedTypes, e$9 = s$4 ? s$4.createPolicy("lit-html", { createHTML: (t) => t }) : void 0, h$4 = "$lit$", o$12 = `lit$${Math.random().toFixed(9).slice(2)}$`, n$7 = "?" + o$12, r$7 = `<${n$7}>`, l$2 = document, c$4 = () => l$2.createComment(""), a$1 = (t) => null === t || "object" != typeof t && "function" != typeof t, u$2 = Array.isArray, d$2 = (t) => u$2(t) || "function" == typeof t?.[Symbol.iterator], f$3 = "[ 	\n\f\r]", v$1 = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, _$1 = /-->/g, m$1 = />/g, p$2 = RegExp(`>|${f$3}(?:([^\\s"'>=/]+)(${f$3}*=${f$3}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g"), g = /'/g, $ = /"/g, y$1 = /^(?:script|style|textarea|title)$/i, x = (t) => (i, ...s) => ({
		_$litType$: t,
		strings: i,
		values: s
	}), b$1 = x(1);
	x(2);
	x(3);
	//#endregion
	//#region node_modules/lit-html/lit-html.js
	/**
	* @license
	* Copyright 2017 Google LLC
	* SPDX-License-Identifier: BSD-3-Clause
	*/
	var E = Symbol.for("lit-noChange"), A = Symbol.for("lit-nothing"), C = /* @__PURE__ */ new WeakMap(), P = l$2.createTreeWalker(l$2, 129);
	function V(t, i) {
		if (!u$2(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
		return void 0 !== e$9 ? e$9.createHTML(i) : i;
	}
	var N = (t, i) => {
		const s = t.length - 1, e = [];
		let n, l = 2 === i ? "<svg>" : 3 === i ? "<math>" : "", c = v$1;
		for (let i = 0; i < s; i++) {
			const s = t[i];
			let a, u, d = -1, f = 0;
			for (; f < s.length && (c.lastIndex = f, u = c.exec(s), null !== u);) f = c.lastIndex, c === v$1 ? "!--" === u[1] ? c = _$1 : void 0 !== u[1] ? c = m$1 : void 0 !== u[2] ? (y$1.test(u[2]) && (n = RegExp("</" + u[2], "g")), c = p$2) : void 0 !== u[3] && (c = p$2) : c === p$2 ? ">" === u[0] ? (c = n ?? v$1, d = -1) : void 0 === u[1] ? d = -2 : (d = c.lastIndex - u[2].length, a = u[1], c = void 0 === u[3] ? p$2 : "\"" === u[3] ? $ : g) : c === $ || c === g ? c = p$2 : c === _$1 || c === m$1 ? c = v$1 : (c = p$2, n = void 0);
			const x = c === p$2 && t[i + 1].startsWith("/>") ? " " : "";
			l += c === v$1 ? s + r$7 : d >= 0 ? (e.push(a), s.slice(0, d) + h$4 + s.slice(d) + o$12 + x) : s + o$12 + (-2 === d ? i : x);
		}
		return [V(t, l + (t[s] || "<?>") + (2 === i ? "</svg>" : 3 === i ? "</math>" : "")), e];
	};
	var S$1 = class S$1 {
		constructor({ strings: t, _$litType$: i }, e) {
			let r;
			this.parts = [];
			let l = 0, a = 0;
			const u = t.length - 1, d = this.parts, [f, v] = N(t, i);
			if (this.el = S$1.createElement(f, e), P.currentNode = this.el.content, 2 === i || 3 === i) {
				const t = this.el.content.firstChild;
				t.replaceWith(...t.childNodes);
			}
			for (; null !== (r = P.nextNode()) && d.length < u;) {
				if (1 === r.nodeType) {
					if (r.hasAttributes()) for (const t of r.getAttributeNames()) if (t.endsWith(h$4)) {
						const i = v[a++], s = r.getAttribute(t).split(o$12), e = /([.?@])?(.*)/.exec(i);
						d.push({
							type: 1,
							index: l,
							name: e[2],
							strings: s,
							ctor: "." === e[1] ? I : "?" === e[1] ? L : "@" === e[1] ? z : H
						}), r.removeAttribute(t);
					} else t.startsWith(o$12) && (d.push({
						type: 6,
						index: l
					}), r.removeAttribute(t));
					if (y$1.test(r.tagName)) {
						const t = r.textContent.split(o$12), i = t.length - 1;
						if (i > 0) {
							r.textContent = s$4 ? s$4.emptyScript : "";
							for (let s = 0; s < i; s++) r.append(t[s], c$4()), P.nextNode(), d.push({
								type: 2,
								index: ++l
							});
							r.append(t[i], c$4());
						}
					}
				} else if (8 === r.nodeType) if (r.data === n$7) d.push({
					type: 2,
					index: l
				});
				else {
					let t = -1;
					for (; -1 !== (t = r.data.indexOf(o$12, t + 1));) d.push({
						type: 7,
						index: l
					}), t += o$12.length - 1;
				}
				l++;
			}
		}
		static createElement(t, i) {
			const s = l$2.createElement("template");
			return s.innerHTML = t, s;
		}
	};
	function M$1(t, i, s = t, e) {
		if (i === E) return i;
		let h = void 0 !== e ? s._$Co?.[e] : s._$Cl;
		const o = a$1(i) ? void 0 : i._$litDirective$;
		return h?.constructor !== o && (h?._$AO?.(!1), void 0 === o ? h = void 0 : (h = new o(t), h._$AT(t, s, e)), void 0 !== e ? (s._$Co ??= [])[e] = h : s._$Cl = h), void 0 !== h && (i = M$1(t, h._$AS(t, i.values), h, e)), i;
	}
	var R = class {
		constructor(t, i) {
			this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = i;
		}
		get parentNode() {
			return this._$AM.parentNode;
		}
		get _$AU() {
			return this._$AM._$AU;
		}
		u(t) {
			const { el: { content: i }, parts: s } = this._$AD, e = (t?.creationScope ?? l$2).importNode(i, !0);
			P.currentNode = e;
			let h = P.nextNode(), o = 0, n = 0, r = s[0];
			for (; void 0 !== r;) {
				if (o === r.index) {
					let i;
					2 === r.type ? i = new k(h, h.nextSibling, this, t) : 1 === r.type ? i = new r.ctor(h, r.name, r.strings, this, t) : 6 === r.type && (i = new Z(h, this, t)), this._$AV.push(i), r = s[++n];
				}
				o !== r?.index && (h = P.nextNode(), o++);
			}
			return P.currentNode = l$2, e;
		}
		p(t) {
			let i = 0;
			for (const s of this._$AV) void 0 !== s && (void 0 !== s.strings ? (s._$AI(t, s, i), i += s.strings.length - 2) : s._$AI(t[i])), i++;
		}
	};
	var k = class k {
		get _$AU() {
			return this._$AM?._$AU ?? this._$Cv;
		}
		constructor(t, i, s, e) {
			this.type = 2, this._$AH = A, this._$AN = void 0, this._$AA = t, this._$AB = i, this._$AM = s, this.options = e, this._$Cv = e?.isConnected ?? !0;
		}
		get parentNode() {
			let t = this._$AA.parentNode;
			const i = this._$AM;
			return void 0 !== i && 11 === t?.nodeType && (t = i.parentNode), t;
		}
		get startNode() {
			return this._$AA;
		}
		get endNode() {
			return this._$AB;
		}
		_$AI(t, i = this) {
			t = M$1(this, t, i), a$1(t) ? t === A || null == t || "" === t ? (this._$AH !== A && this._$AR(), this._$AH = A) : t !== this._$AH && t !== E && this._(t) : void 0 !== t._$litType$ ? this.$(t) : void 0 !== t.nodeType ? this.T(t) : d$2(t) ? this.k(t) : this._(t);
		}
		O(t) {
			return this._$AA.parentNode.insertBefore(t, this._$AB);
		}
		T(t) {
			this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
		}
		_(t) {
			this._$AH !== A && a$1(this._$AH) ? this._$AA.nextSibling.data = t : this.T(l$2.createTextNode(t)), this._$AH = t;
		}
		$(t) {
			const { values: i, _$litType$: s } = t, e = "number" == typeof s ? this._$AC(t) : (void 0 === s.el && (s.el = S$1.createElement(V(s.h, s.h[0]), this.options)), s);
			if (this._$AH?._$AD === e) this._$AH.p(i);
			else {
				const t = new R(e, this), s = t.u(this.options);
				t.p(i), this.T(s), this._$AH = t;
			}
		}
		_$AC(t) {
			let i = C.get(t.strings);
			return void 0 === i && C.set(t.strings, i = new S$1(t)), i;
		}
		k(t) {
			u$2(this._$AH) || (this._$AH = [], this._$AR());
			const i = this._$AH;
			let s, e = 0;
			for (const h of t) e === i.length ? i.push(s = new k(this.O(c$4()), this.O(c$4()), this, this.options)) : s = i[e], s._$AI(h), e++;
			e < i.length && (this._$AR(s && s._$AB.nextSibling, e), i.length = e);
		}
		_$AR(t = this._$AA.nextSibling, s) {
			for (this._$AP?.(!1, !0, s); t !== this._$AB;) {
				const s = i$6(t).nextSibling;
				i$6(t).remove(), t = s;
			}
		}
		setConnected(t) {
			void 0 === this._$AM && (this._$Cv = t, this._$AP?.(t));
		}
	};
	var H = class {
		get tagName() {
			return this.element.tagName;
		}
		get _$AU() {
			return this._$AM._$AU;
		}
		constructor(t, i, s, e, h) {
			this.type = 1, this._$AH = A, this._$AN = void 0, this.element = t, this.name = i, this._$AM = e, this.options = h, s.length > 2 || "" !== s[0] || "" !== s[1] ? (this._$AH = Array(s.length - 1).fill(/* @__PURE__ */ new String()), this.strings = s) : this._$AH = A;
		}
		_$AI(t, i = this, s, e) {
			const h = this.strings;
			let o = !1;
			if (void 0 === h) t = M$1(this, t, i, 0), o = !a$1(t) || t !== this._$AH && t !== E, o && (this._$AH = t);
			else {
				const e = t;
				let n, r;
				for (t = h[0], n = 0; n < h.length - 1; n++) r = M$1(this, e[s + n], i, n), r === E && (r = this._$AH[n]), o ||= !a$1(r) || r !== this._$AH[n], r === A ? t = A : t !== A && (t += (r ?? "") + h[n + 1]), this._$AH[n] = r;
			}
			o && !e && this.j(t);
		}
		j(t) {
			t === A ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
		}
	};
	var I = class extends H {
		constructor() {
			super(...arguments), this.type = 3;
		}
		j(t) {
			this.element[this.name] = t === A ? void 0 : t;
		}
	};
	var L = class extends H {
		constructor() {
			super(...arguments), this.type = 4;
		}
		j(t) {
			this.element.toggleAttribute(this.name, !!t && t !== A);
		}
	};
	var z = class extends H {
		constructor(t, i, s, e, h) {
			super(t, i, s, e, h), this.type = 5;
		}
		_$AI(t, i = this) {
			if ((t = M$1(this, t, i, 0) ?? A) === E) return;
			const s = this._$AH, e = t === A && s !== A || t.capture !== s.capture || t.once !== s.once || t.passive !== s.passive, h = t !== A && (s === A || e);
			e && this.element.removeEventListener(this.name, this, s), h && this.element.addEventListener(this.name, this, t), this._$AH = t;
		}
		handleEvent(t) {
			"function" == typeof this._$AH ? this._$AH.call(this.options?.host ?? this.element, t) : this._$AH.handleEvent(t);
		}
	};
	var Z = class {
		constructor(t, i, s) {
			this.element = t, this.type = 6, this._$AN = void 0, this._$AM = i, this.options = s;
		}
		get _$AU() {
			return this._$AM._$AU;
		}
		_$AI(t) {
			M$1(this, t);
		}
	};
	var j$1 = {
		M: h$4,
		P: o$12,
		A: n$7,
		C: 1,
		L: N,
		R,
		D: d$2,
		V: M$1,
		I: k,
		H,
		N: L,
		U: z,
		B: I,
		F: Z
	}, B = t$5.litHtmlPolyfillSupport;
	B?.(S$1, k), (t$5.litHtmlVersions ??= []).push("3.3.2");
	var D = (t, i, s) => {
		const e = s?.renderBefore ?? i;
		let h = e._$litPart$;
		if (void 0 === h) {
			const t = s?.renderBefore ?? null;
			e._$litPart$ = h = new k(i.insertBefore(c$4(), t), t, void 0, s ?? {});
		}
		return h._$AI(t), h;
	}, { I: t$4 } = j$1, r$6 = (o) => void 0 === o.strings;
	//#endregion
	//#region node_modules/lit-html/directive.js
	/**
	* @license
	* Copyright 2017 Google LLC
	* SPDX-License-Identifier: BSD-3-Clause
	*/
	var t$3 = {
		ATTRIBUTE: 1,
		CHILD: 2,
		PROPERTY: 3,
		BOOLEAN_ATTRIBUTE: 4,
		EVENT: 5,
		ELEMENT: 6
	}, e$7 = (t) => (...e) => ({
		_$litDirective$: t,
		values: e
	});
	var i$4 = class {
		constructor(t) {}
		get _$AU() {
			return this._$AM._$AU;
		}
		_$AT(t, e, i) {
			this._$Ct = t, this._$AM = e, this._$Ci = i;
		}
		_$AS(t, e) {
			return this.update(t, e);
		}
		update(t, e) {
			return this.render(...e);
		}
	};
	//#endregion
	//#region node_modules/lit-html/async-directive.js
	/**
	* @license
	* Copyright 2017 Google LLC
	* SPDX-License-Identifier: BSD-3-Clause
	*/ var s$2 = (i, t) => {
		const e = i._$AN;
		if (void 0 === e) return !1;
		for (const i of e) i._$AO?.(t, !1), s$2(i, t);
		return !0;
	}, o$11 = (i) => {
		let t, e;
		do {
			if (void 0 === (t = i._$AM)) break;
			e = t._$AN, e.delete(i), i = t;
		} while (0 === e?.size);
	}, r$5 = (i) => {
		for (let t; t = i._$AM; i = t) {
			let e = t._$AN;
			if (void 0 === e) t._$AN = e = /* @__PURE__ */ new Set();
			else if (e.has(i)) break;
			e.add(i), c$2(t);
		}
	};
	function h$2(i) {
		void 0 !== this._$AN ? (o$11(this), this._$AM = i, r$5(this)) : this._$AM = i;
	}
	function n$5(i, t = !1, e = 0) {
		const r = this._$AH, h = this._$AN;
		if (void 0 !== h && 0 !== h.size) if (t) if (Array.isArray(r)) for (let i = e; i < r.length; i++) s$2(r[i], !1), o$11(r[i]);
		else null != r && (s$2(r, !1), o$11(r));
		else s$2(this, i);
	}
	var c$2 = (i) => {
		i.type == t$3.CHILD && (i._$AP ??= n$5, i._$AQ ??= h$2);
	};
	var f$1 = class extends i$4 {
		constructor() {
			super(...arguments), this._$AN = void 0;
		}
		_$AT(i, t, e) {
			super._$AT(i, t, e), r$5(this), this.isConnected = i._$AU;
		}
		_$AO(i, t = !0) {
			i !== this.isConnected && (this.isConnected = i, i ? this.reconnected?.() : this.disconnected?.()), t && (s$2(this, i), o$11(this));
		}
		setValue(t) {
			if (r$6(this._$Ct)) this._$Ct._$AI(t, this);
			else {
				const i = [...this._$Ct._$AH];
				i[this._$Ci] = t, this._$Ct._$AI(i, this, 0);
			}
		}
		disconnected() {}
		reconnected() {}
	};
	//#endregion
	//#region node_modules/lit-html/directives/ref.js
	/**
	* @license
	* Copyright 2020 Google LLC
	* SPDX-License-Identifier: BSD-3-Clause
	*/ var e$6 = () => new h$1();
	var h$1 = class {};
	var o$10 = /* @__PURE__ */ new WeakMap(), n$4 = e$7(class extends f$1 {
		render(i) {
			return A;
		}
		update(i, [s]) {
			const e = s !== this.G;
			return e && void 0 !== this.G && this.rt(void 0), (e || this.lt !== this.ct) && (this.G = s, this.ht = i.options?.host, this.rt(this.ct = i.element)), A;
		}
		rt(t) {
			if (this.isConnected || (t = void 0), "function" == typeof this.G) {
				const i = this.ht ?? globalThis;
				let s = o$10.get(i);
				void 0 === s && (s = /* @__PURE__ */ new WeakMap(), o$10.set(i, s)), void 0 !== s.get(this.G) && this.G.call(this.ht, void 0), s.set(this.G, t), void 0 !== t && this.G.call(this.ht, t);
			} else this.G.value = t;
		}
		get lt() {
			return "function" == typeof this.G ? o$10.get(this.ht ?? globalThis)?.get(this.G) : this.G?.value;
		}
		disconnected() {
			this.lt === this.ct && this.rt(void 0);
		}
		reconnected() {
			this.rt(this.ct);
		}
	});
	//#endregion
	//#region src/locales/index.ts
	/**
	* An array containing all available localizations for the application.
	* This is the central point for accessing different language packs.
	* @type {ILocale[]}
	*/
	var locales = [
		{
			ID: "en_US",
			NAME: "English (US)",
			STARTING: "Starting Manga OnlineViewer",
			RESUME: "Resuming reading from Page ",
			WAITING: "Please wait, 3 seconds...",
			CHOOSE_BEGINNING: "Choose the Page to start from:",
			BUTTON_START: "Start Manga OnlineViewer",
			SETTINGS: "Settings",
			LANGUAGE: "Language",
			COLOR_SCHEME: "Color Scheme",
			THEME: "Theme",
			THEME_COLOR: "Color",
			THEME_HUE: "Color Hue",
			THEME_SHADE: "Color Shade",
			DEFAULT_LOAD_MODE: "Default Load Mode",
			LOAD_MODE_NORMAL: "Normal(Wait 3 sec)",
			LOAD_MODE_ALWAYS: "Always(Immediately)",
			LOAD_MODE_NEVER: "Never(Manually)",
			LOAD_SPEED: "Load Speed",
			DEFAULT_ZOOM: "Default Zoom (between 5 and 200)",
			DEFAULT_ZOOM_MODE: "Default Zoom Mode",
			MINIMUM_ZOOM: "Minimum Zoom relative to the width of screen (between 30 and 100)",
			ZOOM_STEP: "Zoom Change Step (between 5 and 50)",
			DEFAULT_VIEW_MODE: "Default View Mode",
			VIEW_MODE_VERTICAL: "Vertical",
			VIEW_MODE_LEFT: "Horizontal - Left to Right",
			VIEW_MODE_RIGHT: "Horizontal - Right to Left",
			VIEW_MODE_WEBCOMIC: "WebComic",
			VIEW_MODE_BOOK: "Book - Left to Right",
			VIEW_MODE_MANGA: "Manga - Right to Left",
			VIEW_MODE_GALLERY: "Gallery",
			FIT_WIDTH_OVERSIZED: "Fit Width if Oversized",
			SHOW_THUMBNAILS: "Show Thumbnails",
			HIDE_CONTROLS: "Always Hide Page Controls",
			HEADER_TYPE: "Change Header Type",
			HEADER_HOVER: "Hover",
			HEADER_SCROLL: "Scroll",
			HEADER_CLICK: "Click",
			HEADER_FIXED: "Fixed",
			HEADER_SIMPLE: "Simple",
			BUTTON_DOWNLOAD: "Download",
			DOWNLOAD_ZIP: "Download Zip file",
			DOWNLOAD_IMAGES: "Download Images as Zip Automatically",
			DOWNLOAD_PROGRESS: "Downloading: ##num## of ##total##",
			GENERATING_ZIP: "Generating Zip file...",
			DOWNLOAD_INCOMPLETE: "Download Incomplete",
			DOWNLOAD_INCOMPLETE_MESSAGE: "Some pages failed to download and were skipped. A list of failed pages has been added to the ZIP file.",
			BUTTON_NEXT: "Next",
			NEXT_CHAPTER: "Next Chapter",
			BUTTON_PREVIOUS: "Previous",
			PREVIOUS_CHAPTER: "Previous Chapter",
			BOOKMARKS: "Bookmarks",
			BOOKMARK: "Bookmark",
			BOOKMARK_REMOVED: "Bookmark Removed",
			BOOKMARK_SAVED: "Bookmark Saved",
			BOOKMARK_MESSAGE: "Next time you open this chapter it will resume from: Page ##num## (Only ONCE per Bookmark)",
			KEYBINDINGS: "Keybindings",
			EDIT_KEYBINDS: "Edit KeyBindings",
			SAVE_KEYBINDS: "Save KeyBindings",
			BUTTON_EDIT: "Edit",
			BUTTON_SAVE: "Save",
			KEYBIND_RULES: `
    <h3>Supported Keys</h3>
    Allowed modifiers: shift, option, alt, ctrl, control, command. <br/>
    Special keys: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide. <br/>
    Examples: <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd>
  `,
			ATTENTION: "Attention",
			WARNING: "Warning",
			BUTTON_RESET_SETTINGS: "Reset Settings",
			SETTINGS_RESET: "Settings have been reset, reload the page to take effect",
			LANGUAGE_CHANGED: "Language has been changed, reload the page to take effect",
			AUTO_DOWNLOAD: "Next time a chapter finish loading you will be prompted to save automatically",
			LAZY_LOAD: "Lazy load is incompatible with zip download, you will not be able to download with this setting ON.<br/> Suggestion: <span style='color:red;font-weight:bold'>Disable Thumbnails</span> to save Bandwidth/Memory.",
			LAZY_LOAD_IMAGES_ENABLE: "Enable Lazy Load Images",
			LAZY_LOAD_IMAGES: "Lazy Start From Page (between 5 and 100)",
			RETURN_CHAPTER_LIST: "Return to Chapter List",
			PAGES_LOADED: "Pages Loaded",
			GO_TO_PAGE: "Go to Page",
			ENLARGE: "Enlarge",
			RESTORE: "Restore",
			REDUCE: "Reduce",
			FIT_WIDTH: "Fit Width",
			FIT_HEIGHT: "Fit Height",
			PERCENT: "Percent",
			TOGGLE_CONTROLS: "Toggle page controls",
			ZOOM_IN: "Zoom In",
			ZOOM_OUT: "Zoom Out",
			ZOOM_RESET: "Zoom Reset",
			ZOOM_WIDTH: "Zoom to Width",
			ZOOM_HEIGHT: "Zoom to Height",
			HIDE: "Hide",
			RELOAD: "Reload",
			SLOWLY: "Slowly",
			NORMAL: "Normal",
			FAST: "Fast",
			EXTREME: "Extreme",
			ALL_PAGES: "All Pages",
			SPEED_WARNING: "Loading Speed too High",
			SPEED_WARNING_MESSAGE: "This speed is not recommended.<br/> It may hurt some servers or get your IP marked as DDoS attacker.<br/> Please use with caution!",
			SCROLL_UP: "Scroll Up",
			SCROLL_DOWN: "Scroll Down",
			CLOSE: "Close",
			CANCEL: "Cancel",
			LIST_EMPTY: "List Empty",
			SCROLL_START: "Toggle Auto Scroll",
			INCREASE_SPEED: "Increase Scroll Speed",
			DECREASE_SPEED: "Decrease Scroll Speed",
			AUTO_SCROLL_HEIGHT: "Auto Scroll Speed in Pixels",
			VERTICAL_SEPARATOR: "Show Vertical Separators",
			END: "End",
			SCOPE: "Scope",
			GLOBAL: "Global",
			GENERAL: "General",
			LOADING: "Loading",
			ZOOM: "Zoom",
			OTHERS: "Others",
			NAVBAR_TYPE: "Change Navbar Type",
			NAVBAR_BOTTOM: "Bottom",
			NAVBAR_LEFT: "Left",
			NAVBAR_RIGHT: "Right",
			NAVBAR_DISABLED: "Disabled",
			PAGINATION_TYPE: "Pagination Type",
			PAGINATION_DISABLED: "Disabled",
			PAGINATION_SLIDER: "Slider",
			PAGINATION_ARROWS: "Side Arrows",
			PAGINATION_BOTH: "Both",
			FILE_MENU: "Main Menu",
			VIEW_MENU: "View Menu",
			ZOOM_MENU: "Zoom Menu",
			DOUBLE_PAGE: "Toggle Double Page",
			CHOOSE_FILE: "Choose File",
			NO_FILES_SELECTED: "No files selected"
		},
		{
			ID: "es_ES",
			NAME: "Español (ES)",
			STARTING: "Iniciando Manga OnlineViewer",
			RESUME: "Continuando lectura desde la Página ",
			WAITING: "Por favor espere, 3 segundos...",
			CHOOSE_BEGINNING: "Elija la página en la que comenzar:",
			BUTTON_START: "Iniciar Manga OnlineViewer",
			SETTINGS: "Ajustes",
			LANGUAGE: "Idioma",
			COLOR_SCHEME: "Esquema de color",
			THEME: "Tema",
			THEME_COLOR: "Color",
			THEME_HUE: "Matiz del color",
			THEME_SHADE: "Saturación del color",
			DEFAULT_LOAD_MODE: "Modo de carga por defecto",
			LOAD_MODE_NORMAL: "Normal (Espera 3s)",
			LOAD_MODE_ALWAYS: "Siempre (Inmediatamente)",
			LOAD_MODE_NEVER: "Nunca (Manualmente)",
			LOAD_SPEED: "Velocidad carga",
			DEFAULT_ZOOM: "Zoom por defecto (entre 5 y 200)",
			DEFAULT_ZOOM_MODE: "Modo de zoom por defecto",
			MINIMUM_ZOOM: "Zoom mínimo relativo al ancho de la pantalla",
			ZOOM_STEP: "Paso entre cambios de zoom (entre 5 y 50)",
			DEFAULT_VIEW_MODE: "Modo de visualización por defecto",
			VIEW_MODE_VERTICAL: "Vertical",
			VIEW_MODE_LEFT: "Horizontal - Izquierda a derecha",
			VIEW_MODE_RIGHT: "Horizontal - Derecha a izquierda",
			VIEW_MODE_WEBCOMIC: "WebComic",
			VIEW_MODE_BOOK: "Libro - Izquierda a derecha",
			VIEW_MODE_MANGA: "Manga - Derecha a izquierda",
			VIEW_MODE_GALLERY: "Galería",
			FIT_WIDTH_OVERSIZED: "Ajustar ancho si es demasiado grande",
			SHOW_THUMBNAILS: "Mostrar miniaturas",
			HIDE_CONTROLS: "Ocultar siempre la barra de controles",
			HEADER_TYPE: "Cambiar tipo de cabecera",
			HEADER_HOVER: "Pasar por encima",
			HEADER_SCROLL: "Desplazamiento",
			HEADER_CLICK: "Hacer click",
			HEADER_FIXED: "Fijo",
			HEADER_SIMPLE: "Sencillo",
			BUTTON_DOWNLOAD: "Descargar",
			DOWNLOAD_ZIP: "Descargar fichero Zip",
			DOWNLOAD_IMAGES: "Autodescargar imágenes como Zip",
			DOWNLOAD_PROGRESS: "Descargando: ##num## de ##total##",
			GENERATING_ZIP: "Generando archivo Zip...",
			DOWNLOAD_INCOMPLETE: "Descarga Incompleta",
			DOWNLOAD_INCOMPLETE_MESSAGE: "Algunas páginas no se pudieron descargar y se saltaron. Se ha añadido una lista de páginas fallidas al archivo ZIP.",
			BUTTON_NEXT: "Siguiente",
			NEXT_CHAPTER: "Siguiente capítulo",
			BUTTON_PREVIOUS: "Anterior",
			PREVIOUS_CHAPTER: "Capítulo anterior",
			BOOKMARKS: "Marcadores",
			BOOKMARK: "Marcador",
			BOOKMARK_REMOVED: "Marcador eliminado",
			BOOKMARK_SAVED: "Marcador guardado",
			BOOKMARK_MESSAGE: "La próxima vez que abra este capítulo, continuará desde la página ##num## (Sólo UNA VEZ por Marcador)",
			KEYBINDINGS: "Atajos de teclado",
			EDIT_KEYBINDS: "Editar atajos",
			SAVE_KEYBINDS: "Guardar atajos",
			BUTTON_EDIT: "Editar",
			BUTTON_SAVE: "Guardar",
			KEYBIND_RULES: `
    <h3>Teclas soportadas</h3>
    Modificadores permitidos: shift, option, alt, ctrl, control, command. <br/>
    Teclas especiales: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide. <br/>
    Ejemplos: <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd>
  `,
			ATTENTION: "Atención",
			WARNING: "Alerta",
			BUTTON_RESET_SETTINGS: "Reiniciar ajustes(Reset Settings)",
			SETTINGS_RESET: "Se han restablecido los ajustes, vuelve a cargar la página para que surta efecto",
			LANGUAGE_CHANGED: "Se ha cambiado el idioma, vuelve a cargar la página para que surta efecto",
			AUTO_DOWNLOAD: "La próxima vez que termine de cargarse un capítulo, se le pedirá que guarde automáticamente",
			LAZY_LOAD: "La carga diferida es incompatible con la descarga zip, no podrá descargar con este ajuste activado.<br/> Sugerencia: <span style='color:red;font-weight:bold'>Desactivar miniaturas</span> para ahorrar Ancho de banda/Memoria.",
			LAZY_LOAD_IMAGES_ENABLE: "Habilitar carga de imágenes diferida",
			LAZY_LOAD_IMAGES: "Empezar carga diferida a partir de la página (entre 5 y 100)",
			RETURN_CHAPTER_LIST: "Regresar a la lista de capítulos",
			PAGES_LOADED: "Páginas cargadas",
			GO_TO_PAGE: "Ir a página",
			ENLARGE: "Agrandar",
			RESTORE: "Restaurar",
			REDUCE: "Reducir",
			FIT_WIDTH: "Ajustar al ancho",
			FIT_HEIGHT: "Ajustar al alto",
			PERCENT: "Porcentual",
			TOGGLE_CONTROLS: "Alternar controles de página",
			ZOOM_IN: "Acercar",
			ZOOM_OUT: "Alejar",
			ZOOM_RESET: "Restablecer zoom",
			ZOOM_WIDTH: "Zoom al ancho",
			ZOOM_HEIGHT: "Zoom al alto",
			HIDE: "Ocultar",
			RELOAD: "Recargar",
			SLOWLY: "Lento",
			NORMAL: "Normal",
			FAST: "Rápido",
			EXTREME: "Extremo",
			ALL_PAGES: "Todas las páginas",
			SPEED_WARNING: "Velocidad de carga muy alta",
			SPEED_WARNING_MESSAGE: "No se recomienda esta velocidad.<br/> Puede dañar algunos servidores o marcar su IP como atacante DDoS.<br/> ¡Utilícelo con precaución!",
			SCROLL_UP: "Desplazar arriba",
			SCROLL_DOWN: "Desplazarse hacia abajo",
			CLOSE: "Cerrar",
			CANCEL: "Cancelar",
			LIST_EMPTY: "Lista vacía",
			SCROLL_START: "Alternar desplazamiento automático",
			INCREASE_SPEED: "Aumentar la velocidad de desplazamiento",
			DECREASE_SPEED: "Disminuir la velocidad de desplazamiento",
			AUTO_SCROLL_HEIGHT: "Velocidad de desplazamiento automático en píxeles",
			VERTICAL_SEPARATOR: "Mostrar separadores verticales",
			END: "Fin",
			SCOPE: "Alcance",
			GLOBAL: "Global",
			GENERAL: "General",
			LOADING: "Carga",
			ZOOM: "Zoom",
			OTHERS: "Otros",
			NAVBAR_TYPE: "Cambiar el tipo de barra de navegación",
			NAVBAR_BOTTOM: "Abajo",
			NAVBAR_LEFT: "Izquierda",
			NAVBAR_RIGHT: "Derecha",
			NAVBAR_DISABLED: "Desactivado",
			PAGINATION_TYPE: "Tipo de paginación",
			PAGINATION_DISABLED: "Desactivado",
			PAGINATION_SLIDER: "Control deslizante",
			PAGINATION_ARROWS: "Flechas laterales",
			PAGINATION_BOTH: "Ambos",
			FILE_MENU: "Menú principal",
			VIEW_MENU: "Ver menú",
			ZOOM_MENU: "Menú Zoom",
			DOUBLE_PAGE: "Alternar Página Doble",
			CHOOSE_FILE: "Elegir archivo",
			NO_FILES_SELECTED: "No se han seleccionado archivos"
		},
		{
			ID: "pt_BR",
			NAME: "Portugues (Brasil)",
			STARTING: "Iniciando Manga OnlineViewer",
			RESUME: "Continuando leitura na Pagina ",
			WAITING: "Por Favor espere, 3 segundos...",
			CHOOSE_BEGINNING: "Escolha a pagina de onde começar:",
			BUTTON_START: "Iniciar Manga OnlineViewer",
			SETTINGS: "Configurações",
			LANGUAGE: "Idioma",
			COLOR_SCHEME: "Esquema de Color",
			THEME: "Tema",
			THEME_COLOR: "Cor",
			THEME_HUE: "Tom da Cor",
			THEME_SHADE: "Saturação da Cor",
			DEFAULT_LOAD_MODE: "Forma de Carregamento Padrão",
			LOAD_MODE_NORMAL: "Normal(Esperando 3 sec)",
			LOAD_MODE_ALWAYS: "Sempre(Imediatamente)",
			LOAD_MODE_NEVER: "Nunca(Manualmente)",
			LOAD_SPEED: "Velocidade de Carregamento",
			DEFAULT_ZOOM: "Zoom padrão (entre 5 e 200)",
			DEFAULT_ZOOM_MODE: "Modo de Zoom padrão",
			MINIMUM_ZOOM: "Zoom minimo, relativo ao tamanho da tela (entre 30 e 100)",
			ZOOM_STEP: "Precisão da Mudança do Zoom (entre 5 e 50)",
			DEFAULT_VIEW_MODE: "Modo de Visualização Padrão",
			VIEW_MODE_VERTICAL: "Vertical",
			VIEW_MODE_LEFT: "Horizontal - Esquerda para Direita",
			VIEW_MODE_RIGHT: "Horizontal - Direita para Esquerda",
			VIEW_MODE_WEBCOMIC: "WebComic",
			VIEW_MODE_BOOK: "Livro - Esquerda para Direita",
			VIEW_MODE_MANGA: "Mangá - Direita para Esquerda",
			VIEW_MODE_GALLERY: "Galeria",
			FIT_WIDTH_OVERSIZED: "Encher a tela se grande demais",
			SHOW_THUMBNAILS: "Mostra Miniaturas",
			HIDE_CONTROLS: "Sempre esconder controles das paginas",
			HEADER_TYPE: "Mudar Tipo de Cabeçalho",
			HEADER_HOVER: "Passar por perto",
			HEADER_SCROLL: "Rolagem do Mouse",
			HEADER_CLICK: "Click",
			HEADER_FIXED: "Fixo",
			HEADER_SIMPLE: "Simples",
			BUTTON_DOWNLOAD: "Download",
			DOWNLOAD_ZIP: "Baixar arquivo Zip",
			DOWNLOAD_IMAGES: "Download das Imagens como Zip Automaticamente",
			DOWNLOAD_PROGRESS: "Baixando: ##num## de ##total##",
			GENERATING_ZIP: "Gerando arquivo Zip...",
			DOWNLOAD_INCOMPLETE: "Download Incompleto",
			DOWNLOAD_INCOMPLETE_MESSAGE: "Algumas páginas falharam ao baixar e foram puladas. Uma lista de páginas que falharam foi adicionada ao arquivo ZIP.",
			BUTTON_NEXT: "Proximo",
			NEXT_CHAPTER: "Proximo Capitulo",
			BUTTON_PREVIOUS: "Anterior",
			PREVIOUS_CHAPTER: "Capitulo Anterior",
			BOOKMARKS: "Marca paginas",
			BOOKMARK: "Marcar pagina",
			BOOKMARK_REMOVED: "Marca pagina Removido",
			BOOKMARK_SAVED: "Marca pagina Salvo",
			BOOKMARK_MESSAGE: "Proxima vez que abrir este capitulo continuará a partir da Pagina ##num## (Apenas UMA VEZ por marca pagina)",
			KEYBINDINGS: "Atalhos",
			EDIT_KEYBINDS: "Editar Atalhos",
			SAVE_KEYBINDS: "Salvar Atalhos",
			BUTTON_EDIT: "Editar",
			BUTTON_SAVE: "Salvar",
			KEYBIND_RULES: `
    <h3>Teclas Suportadas</h3>
    Modificadores permitidos: shift, option, alt, ctrl, control, command. <br/>
    Teclas Especiais: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide.<br/>
    Exemplos: <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd>
  `,
			ATTENTION: "Atenção",
			WARNING: "Alerta",
			BUTTON_RESET_SETTINGS: "Limpar Configurações(Reset Settings)",
			SETTINGS_RESET: "Configurações foram limpas, recarregue o site para efetivar a alteração",
			LANGUAGE_CHANGED: "Idioma foi alterado, recarregue o site para efetivar a alteração",
			AUTO_DOWNLOAD: "Proxima vez que abrir um capitulo download iniciara automaticamente",
			LAZY_LOAD: "Carregamento preguiçoso não é compativel com download de zip, não conseguira com essa configuração ativa.<br/> Sugestão: <span style='color:red;font-weight:bold'>Desative Miniaturas</span> para economizar memoria e cota de internet.",
			LAZY_LOAD_IMAGES_ENABLE: "Ativar Carregamento de imagens preguiçoso",
			LAZY_LOAD_IMAGES: "Carregamento de paginas preguiçoso começa a partir de (entre 5 e 100)",
			RETURN_CHAPTER_LIST: "Voltar a lista de Capitulos",
			PAGES_LOADED: "Paginas Carregadas",
			GO_TO_PAGE: "Pular para",
			ENLARGE: "Aumentar",
			RESTORE: "Restaurar",
			REDUCE: "Diminuir",
			FIT_WIDTH: "Preencher Largura",
			FIT_HEIGHT: "Preencher Altura ",
			PERCENT: "Percentual",
			TOGGLE_CONTROLS: "Mostar controles de pagina",
			ZOOM_IN: "Mais Zoom",
			ZOOM_OUT: "Menos Zoom",
			ZOOM_RESET: "Resetar Zoom",
			ZOOM_WIDTH: "Zoom para Largura",
			ZOOM_HEIGHT: "Zoom para Altura",
			HIDE: "Esconder",
			RELOAD: "Recarregar",
			SLOWLY: "Devagar",
			NORMAL: "Normal",
			FAST: "Rapido",
			EXTREME: "Extremo",
			ALL_PAGES: "Todas as Paginas",
			SPEED_WARNING: "Velocidade de Carregamento muito alta",
			SPEED_WARNING_MESSAGE: "Essa velocidade não é recomendada.<br/> Ela pode derrubar um servidor or marcar voce como um ataque hacker de DDoS.<br/> Use com cuidado!",
			SCROLL_UP: "Subir Pagina",
			SCROLL_DOWN: "Descer Pagina",
			CLOSE: "Fechar",
			CANCEL: "Cancelar",
			LIST_EMPTY: "Lista Vazia",
			SCROLL_START: "Ativar Rolagem Automatica",
			INCREASE_SPEED: "Aumentar Valocidade da Rolagem",
			DECREASE_SPEED: "Diminuir Valocidade da Rolagem",
			AUTO_SCROLL_HEIGHT: "Velocidade da Rolagem Automatica em Pixels",
			VERTICAL_SEPARATOR: "Mostrar Separadores Verticais",
			END: "Fin",
			SCOPE: "Escopo",
			GLOBAL: "Global",
			GENERAL: "Geral",
			LOADING: "Carregamento",
			ZOOM: "Zoom",
			OTHERS: "Outros",
			NAVBAR_TYPE: "Mudar barra de navegação",
			NAVBAR_BOTTOM: "Embaixo",
			NAVBAR_LEFT: "Esquerda",
			NAVBAR_RIGHT: "Direita",
			NAVBAR_DISABLED: "Desativado",
			PAGINATION_TYPE: "Tipo de Paginação",
			PAGINATION_DISABLED: "Desativado",
			PAGINATION_SLIDER: "Controle deslizante",
			PAGINATION_ARROWS: "Setas Laterais",
			PAGINATION_BOTH: "Ambos",
			FILE_MENU: "Menu Principal",
			VIEW_MENU: "Menu de Visualizações",
			ZOOM_MENU: "Menu de Zoom",
			DOUBLE_PAGE: "Alternar Página Dupla",
			CHOOSE_FILE: "Escolher arquivo",
			NO_FILES_SELECTED: "Nenhum arquivo selecionado"
		},
		{
			ID: "zh_CN",
			NAME: "中文 (简体)",
			STARTING: "正在启动 Manga OnlineViewer",
			RESUME: "从页面继续阅读 ",
			WAITING: "请等待3秒钟...",
			CHOOSE_BEGINNING: "选择要开始的页数:",
			BUTTON_START: "启动Manga OnlineViewer",
			SETTINGS: "设置",
			LANGUAGE: "语言",
			COLOR_SCHEME: "配色方案",
			THEME: "主题",
			THEME_COLOR: "颜色",
			THEME_HUE: "色相",
			THEME_SHADE: "色度",
			DEFAULT_LOAD_MODE: "默认加载模式",
			LOAD_MODE_NORMAL: "等待模式(等待3秒自动加载 )",
			LOAD_MODE_ALWAYS: "自动模式(无需等待)",
			LOAD_MODE_NEVER: "手动模式(点击启动)",
			LOAD_SPEED: "加载速度",
			DEFAULT_ZOOM: "默认缩放 (最小 5 最大 200)",
			DEFAULT_ZOOM_MODE: "默认缩放模式",
			MINIMUM_ZOOM: "相对于屏幕宽度的最小缩放 (最小 30 最大 100)",
			ZOOM_STEP: "缩放级别 (最小 5 最大 50)",
			DEFAULT_VIEW_MODE: "默认视图模式",
			VIEW_MODE_VERTICAL: "垂直有缝",
			VIEW_MODE_LEFT: "横向 - 从左到右",
			VIEW_MODE_RIGHT: "横向 - 从右到左",
			VIEW_MODE_WEBCOMIC: "垂直无缝",
			VIEW_MODE_BOOK: "书籍 - 从左到右",
			VIEW_MODE_MANGA: "漫画 - 从右到左",
			VIEW_MODE_GALLERY: "图库",
			FIT_WIDTH_OVERSIZED: "如果尺寸过大、则适合宽度",
			SHOW_THUMBNAILS: "显示缩略图",
			HIDE_CONTROLS: "始终隐藏页面控件",
			HEADER_TYPE: "更改标题显示方式",
			HEADER_HOVER: "悬停",
			HEADER_SCROLL: "滚动",
			HEADER_CLICK: "点击",
			HEADER_FIXED: "固定",
			HEADER_SIMPLE: "简单",
			BUTTON_DOWNLOAD: "下载",
			DOWNLOAD_ZIP: "下载压缩文件",
			DOWNLOAD_IMAGES: "自动将图片下载成ZIP",
			DOWNLOAD_PROGRESS: "正在下载：第 ##num## 页，共 ##total## 页",
			GENERATING_ZIP: "正在生成 Zip 文件...",
			DOWNLOAD_INCOMPLETE: "下载不完整",
			DOWNLOAD_INCOMPLETE_MESSAGE: "部分页面下载失败并已跳过。失败页面列表已添加到 ZIP 文件中。",
			BUTTON_NEXT: "下一页",
			NEXT_CHAPTER: "下一章",
			BUTTON_PREVIOUS: "上一页",
			PREVIOUS_CHAPTER: "上一章",
			BOOKMARKS: "书签",
			BOOKMARK: "Bookmark",
			BOOKMARK_REMOVED: "删除书签",
			BOOKMARK_SAVED: "保存书签",
			BOOKMARK_MESSAGE: "下次打开本章时，将从: 页码 ##num## (仅一次 每个书签)",
			KEYBINDINGS: "快捷键",
			EDIT_KEYBINDS: "编辑键绑定",
			SAVE_KEYBINDS: "保存键绑定",
			BUTTON_EDIT: "编辑",
			BUTTON_SAVE: "救",
			KEYBIND_RULES: `
    <h3>支持的密钥</h3>
    允许的修饰符: shift, option, alt, ctrl, control, command. <br/>
    特殊键: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide.<br/>
    例子: <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd>
  `,
			ATTENTION: "注意",
			WARNING: "警告",
			BUTTON_RESET_SETTINGS: "重置设置(Reset Settings)",
			SETTINGS_RESET: "设置已重置、重新加载页面才能生效",
			LANGUAGE_CHANGED: "语言已更改、重新加载页面才能生效",
			AUTO_DOWNLOAD: "下次章节加载完成时、系统将提示您自动保存",
			LAZY_LOAD: "延迟加载与zip下载不兼容、您将无法使用此设置下载.<br/> 建议: <span style='color:red;font-weight:bold'>禁用缩略图</span> 以节省流量和内存.",
			LAZY_LOAD_IMAGES_ENABLE: "启用延迟加载图像",
			LAZY_LOAD_IMAGES: "惰性加载从页面 (最小 5 最大 100)",
			RETURN_CHAPTER_LIST: "返回章节列表",
			PAGES_LOADED: "已加载的页数",
			GO_TO_PAGE: "转到页数",
			ENLARGE: "放大",
			RESTORE: "还原",
			REDUCE: "缩小",
			FIT_WIDTH: "适合宽度",
			FIT_HEIGHT: "适合高度",
			PERCENT: "百分之",
			TOGGLE_CONTROLS: "显示隐藏页面控件",
			ZOOM_IN: "放大",
			ZOOM_OUT: "缩小",
			ZOOM_RESET: "还原",
			ZOOM_WIDTH: "适合宽度",
			ZOOM_HEIGHT: "适合高度",
			HIDE: "显示隐藏页面控件",
			RELOAD: "重新加载",
			SLOWLY: "慢速",
			NORMAL: "正常",
			FAST: "快速",
			EXTREME: "极端",
			ALL_PAGES: "所有页面",
			SPEED_WARNING: "加载速度过高",
			SPEED_WARNING_MESSAGE: "不建议使用此速度.<br/>它可能会伤害某些服务器或将您的 IP 标记为 DDoS 攻击者.<br/>请谨慎使用!",
			SCROLL_UP: "向上滚动",
			SCROLL_DOWN: "向下滚动",
			CLOSE: "关闭",
			CANCEL: "取消",
			LIST_EMPTY: "没有收藏书签",
			SCROLL_START: "切换自动滚动",
			INCREASE_SPEED: "增加滚动速度",
			DECREASE_SPEED: "降低滚动速度",
			AUTO_SCROLL_HEIGHT: "自动滚动速度（以像素为单位）",
			VERTICAL_SEPARATOR: "显示垂直分隔符",
			END: "结尾",
			SCOPE: "范围",
			GLOBAL: "全球",
			GENERAL: "常规",
			LOADING: "装载",
			ZOOM: "缩放",
			OTHERS: "别人",
			NAVBAR_TYPE: "更改导航栏类型",
			NAVBAR_BOTTOM: "底部",
			NAVBAR_LEFT: "左边",
			NAVBAR_RIGHT: "正确的",
			NAVBAR_DISABLED: "已禁用",
			PAGINATION_TYPE: "分页类型",
			PAGINATION_DISABLED: "已禁用",
			PAGINATION_SLIDER: "滑块",
			PAGINATION_ARROWS: "侧边箭头",
			PAGINATION_BOTH: "两者",
			FILE_MENU: "主菜单",
			VIEW_MENU: "查看菜单",
			ZOOM_MENU: "缩放菜单",
			DOUBLE_PAGE: "切换双页",
			CHOOSE_FILE: "选择文件",
			NO_FILES_SELECTED: "未选择任何文件"
		},
		{
			ID: "de_DE",
			NAME: "Deutsch",
			STARTING: "Starte Manga OnlineViewer",
			RESUME: "Fortsetzen ab Seite ",
			WAITING: "Bitte warten, 3 Sekunden...",
			CHOOSE_BEGINNING: "Wähle die Startseite:",
			BUTTON_START: "Manga OnlineViewer starten",
			SETTINGS: "Einstellungen",
			LANGUAGE: "Sprache",
			COLOR_SCHEME: "Farbschema",
			THEME: "Design",
			THEME_COLOR: "Farbe",
			THEME_HUE: "Farbton",
			THEME_SHADE: "Schattierung",
			DEFAULT_LOAD_MODE: "Standard-Lademodus",
			LOAD_MODE_NORMAL: "Normal (3 Sek. warten)",
			LOAD_MODE_ALWAYS: "Immer (sofort)",
			LOAD_MODE_NEVER: "Nie (manuell)",
			LOAD_SPEED: "Ladegeschwindigkeit",
			DEFAULT_ZOOM: "Standard-Zoom (zwischen 5 und 200)",
			DEFAULT_ZOOM_MODE: "Standard-Zoommodus",
			MINIMUM_ZOOM: "Minimaler Zoom relativ zur Bildschirmbreite (zwischen 30 und 100)",
			ZOOM_STEP: "Zoom-Schrittgröße (zwischen 5 und 50)",
			DEFAULT_VIEW_MODE: "Standard-Ansichtsmodus",
			VIEW_MODE_VERTICAL: "Vertikal",
			VIEW_MODE_LEFT: "Horizontal - Links nach Rechts",
			VIEW_MODE_RIGHT: "Horizontal - Rechts nach Links",
			VIEW_MODE_WEBCOMIC: "WebComic",
			VIEW_MODE_BOOK: "Buch - Links nach Rechts",
			VIEW_MODE_MANGA: "Manga - Rechts nach Links",
			VIEW_MODE_GALLERY: "Galerie",
			FIT_WIDTH_OVERSIZED: "Breite anpassen bei Übergröße",
			SHOW_THUMBNAILS: "Miniaturansichten anzeigen",
			HIDE_CONTROLS: "Seitensteuerung immer ausblenden",
			HEADER_TYPE: "Kopfbereichstyp ändern",
			HEADER_HOVER: "Hover",
			HEADER_SCROLL: "Scrollen",
			HEADER_CLICK: "Klicken",
			HEADER_FIXED: "Fixiert",
			HEADER_SIMPLE: "Einfach",
			BUTTON_DOWNLOAD: "Herunterladen",
			DOWNLOAD_ZIP: "Zip-Datei herunterladen",
			DOWNLOAD_IMAGES: "Bilder automatisch als Zip herunterladen",
			DOWNLOAD_PROGRESS: "Herunterladen: ##num## von ##total##",
			GENERATING_ZIP: "Zip-Datei wird erstellt...",
			DOWNLOAD_INCOMPLETE: "Download unvollständig",
			DOWNLOAD_INCOMPLETE_MESSAGE: "Einige Seiten konnten nicht heruntergeladen werden und wurden übersprungen. Eine Liste der fehlgeschlagenen Seiten wurde der ZIP-Datei hinzugefügt.",
			BUTTON_NEXT: "Weiter",
			NEXT_CHAPTER: "Nächstes Kapitel",
			BUTTON_PREVIOUS: "Zurück",
			PREVIOUS_CHAPTER: "Vorheriges Kapitel",
			BOOKMARKS: "Lesezeichen",
			BOOKMARK: "Lesezeichen",
			BOOKMARK_REMOVED: "Lesezeichen entfernt",
			BOOKMARK_SAVED: "Lesezeichen gespeichert",
			BOOKMARK_MESSAGE: "Beim nächsten Öffnen dieses Kapitels wird ab fortgesetzt: Seite ##num## (Nur EINMAL pro Lesezeichen)",
			KEYBINDINGS: "Tastenkürzel",
			EDIT_KEYBINDS: "Tastenkürzel bearbeiten",
			SAVE_KEYBINDS: "Tastenkürzel speichern",
			BUTTON_EDIT: "Bearbeiten",
			BUTTON_SAVE: "Speichern",
			KEYBIND_RULES: `
    <h3>Unterstützte Tasten</h3>
    Erlaubte Modifikatoren: shift, option, alt, ctrl, control, command. <br/>
    Spezielle Tasten: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide. <br/>
    Beispiele: <kbd>a</kbd>, <kbd>ctrl+a</kbd>, <kbd>shift+a</kbd>, <kbd>num_2</kbd>, <kbd>2</kbd>
  `,
			ATTENTION: "Achtung",
			WARNING: "Warnung",
			BUTTON_RESET_SETTINGS: "Einstellungen zurücksetzen(Reset Settings)",
			SETTINGS_RESET: "Die Einstellungen wurden zurückgesetzt, bitte Seite neu laden",
			LANGUAGE_CHANGED: "Die Sprache wurde geändert, bitte Seite neu laden",
			AUTO_DOWNLOAD: "Beim nächsten Laden eines Kapitels wirst du automatisch gefragt, ob du speichern möchtest",
			LAZY_LOAD: "Lazy Load ist mit Zip-Download nicht kompatibel, mit dieser Einstellung kannst du nicht herunterladen.<br/> Empfehlung: <span style='color:red;font-weight:bold'>Miniaturansichten deaktivieren</span> um Bandbreite/Speicher zu sparen.",
			LAZY_LOAD_IMAGES_ENABLE: "Lazy Load Bilder aktivieren",
			LAZY_LOAD_IMAGES: "Lazy Start ab Seite (zwischen 5 und 100)",
			RETURN_CHAPTER_LIST: "Zur Kapitelübersicht zurückkehren",
			PAGES_LOADED: "Seiten geladen",
			GO_TO_PAGE: "Gehe zu Seite",
			ENLARGE: "Vergrößern",
			RESTORE: "Wiederherstellen",
			REDUCE: "Wiederherstellen",
			FIT_WIDTH: "Breite anpassen",
			FIT_HEIGHT: "Höhe anpassen",
			PERCENT: "Prozent",
			TOGGLE_CONTROLS: "Seitensteuerung umschalten",
			ZOOM_IN: "Hineinzoomen",
			ZOOM_OUT: "Herauszoomen",
			ZOOM_RESET: "Zoom zurücksetzen",
			ZOOM_WIDTH: "Auf Breite zoomen",
			ZOOM_HEIGHT: "Auf Höhe zoomen",
			HIDE: "Ausblenden",
			RELOAD: "Neu laden",
			SLOWLY: "Langsam",
			NORMAL: "Normal",
			FAST: "Schnell",
			EXTREME: "Extrem",
			ALL_PAGES: "Alle Seiten",
			SPEED_WARNING: "Ladegeschwindigkeit zu hoch",
			SPEED_WARNING_MESSAGE: "Diese Geschwindigkeit wird nicht empfohlen.<br/> Sie kann einige Server überlasten oder deine IP als DDoS-Angreifer markieren.<br/> Bitte mit Vorsicht verwenden!",
			SCROLL_UP: "Nach oben scrollen",
			SCROLL_DOWN: "Nach unten scrollen",
			CLOSE: "Schließen",
			CANCEL: "Abbrechen",
			LIST_EMPTY: "Liste leer",
			SCROLL_START: "Auto-Scroll umschalten",
			INCREASE_SPEED: "Scrollgeschwindigkeit erhöhen",
			DECREASE_SPEED: "Scrollgeschwindigkeit verringern",
			AUTO_SCROLL_HEIGHT: "Auto-Scroll-Geschwindigkeit in Pixel",
			VERTICAL_SEPARATOR: "Vertikale Trenner anzeigen",
			END: "Ende",
			SCOPE: "Bereich",
			GLOBAL: "Global",
			GENERAL: "Allgemein",
			LOADING: "Lädt",
			ZOOM: "Zoom",
			OTHERS: "Sonstiges",
			NAVBAR_TYPE: "Navigationsleistentyp ändern",
			NAVBAR_BOTTOM: "Unten",
			NAVBAR_LEFT: "Links",
			NAVBAR_RIGHT: "Rechts",
			NAVBAR_DISABLED: "Deaktiviert",
			PAGINATION_TYPE: "Paginierungstyp",
			PAGINATION_DISABLED: "Deaktiviert",
			PAGINATION_SLIDER: "Schieberegler",
			PAGINATION_ARROWS: "Seitenpfeile",
			PAGINATION_BOTH: "Beides",
			FILE_MENU: "Hauptmenü",
			VIEW_MENU: "Menü „Ansicht“",
			ZOOM_MENU: "Zoom-Menü",
			DOUBLE_PAGE: "Doppelseite umschalten",
			CHOOSE_FILE: "Datei auswählen",
			NO_FILES_SELECTED: "Keine Dateien ausgewählt"
		},
		{
			ID: "fr_FR",
			NAME: "Français (FR)",
			STARTING: "Démarrage Manga OnlineViewer",
			RESUME: "Reprise de la lecture à partir de la Page ",
			WAITING: "Veuillez patienter, 3 secondes...",
			CHOOSE_BEGINNING: "Choisissez la page par laquelle commencer :",
			BUTTON_START: "Démarrer Manga OnlineViewer",
			SETTINGS: "Paramètres",
			LANGUAGE: "Langue",
			COLOR_SCHEME: "Palette de couleurs",
			THEME: "Thème",
			THEME_COLOR: "Couleur",
			THEME_HUE: "Teinte de couleur",
			THEME_SHADE: "Nuance de couleur",
			DEFAULT_LOAD_MODE: "Mode de chargement par défaut",
			LOAD_MODE_NORMAL: "Normal (attendre 3 s)",
			LOAD_MODE_ALWAYS: "Toujours (immédiatement)",
			LOAD_MODE_NEVER: "Jamais (manuellement)",
			LOAD_SPEED: "Vitesse de chargement",
			DEFAULT_ZOOM: "Zoom par défaut (entre 5 et 200)",
			DEFAULT_ZOOM_MODE: "Mode de zoom par défaut",
			MINIMUM_ZOOM: "Zoom minimum par rapport à la largeur de l'écran (entre 30 et 100)",
			ZOOM_STEP: "Pas de changement de zoom (entre 5 et 50)",
			DEFAULT_VIEW_MODE: "Mode d'affichage par défaut",
			VIEW_MODE_VERTICAL: "Vertical",
			VIEW_MODE_LEFT: "Horizontal - De gauche à droite",
			VIEW_MODE_RIGHT: "Horizontal - De droite à gauche",
			VIEW_MODE_WEBCOMIC: "WebComic",
			VIEW_MODE_BOOK: "Livre - De gauche à droite",
			VIEW_MODE_MANGA: "Manga - De droite à gauche",
			VIEW_MODE_GALLERY: "Galerie",
			FIT_WIDTH_OVERSIZED: "Ajuster à la largeur si surdimensionné",
			SHOW_THUMBNAILS: "Afficher les vignettes",
			HIDE_CONTROLS: "Toujours masquer les contrôles de page",
			HEADER_TYPE: "Changer le type d'en-tête",
			HEADER_HOVER: "Survol",
			HEADER_SCROLL: "Défilement",
			HEADER_CLICK: "Clic",
			HEADER_FIXED: "Fixe",
			HEADER_SIMPLE: "Simple",
			BUTTON_DOWNLOAD: "Télécharger",
			DOWNLOAD_ZIP: "Télécharger le fichier Zip",
			DOWNLOAD_IMAGES: "Télécharger les images en Zip automatiquement",
			DOWNLOAD_PROGRESS: "Téléchargement : ##num## sur ##total##",
			GENERATING_ZIP: "Génération du fichier Zip...",
			DOWNLOAD_INCOMPLETE: "Téléchargement incomplet",
			DOWNLOAD_INCOMPLETE_MESSAGE: "Certaines pages n'ont pas pu être téléchargées et ont été ignorées. Une liste des pages concernées a été ajoutée au fichier ZIP.",
			BUTTON_NEXT: "Suivant",
			NEXT_CHAPTER: "Chapitre suivant",
			BUTTON_PREVIOUS: "Précédent",
			PREVIOUS_CHAPTER: "Chapitre précédent",
			BOOKMARKS: "Favoris",
			BOOKMARK: "Favori",
			BOOKMARK_REMOVED: "Favori supprimé",
			BOOKMARK_SAVED: "Favori enregistré",
			BOOKMARK_MESSAGE: "La prochaine fois que vous ouvrirez ce chapitre, il reprendra à partir de: Page ##num## (Seulement UNE FOIS par favori)",
			KEYBINDINGS: "Raccourcis clavier",
			EDIT_KEYBINDS: "Modifier les raccourcis clavier",
			SAVE_KEYBINDS: "Enregistrer les raccourcis clavier",
			BUTTON_EDIT: "Modifier",
			BUTTON_SAVE: "Enregistrer",
			KEYBIND_RULES: `
    <h3>Touches prises en charge</h3>
    Modificateurs autorisés : shift, option, alt, ctrl, control, command. <br/>
    Touches spéciales : backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide. <br/>
    Exemples : <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd>
  `,
			ATTENTION: "Attention",
			WARNING: "Avertissement",
			BUTTON_RESET_SETTINGS: "Réinitialiser les paramètres",
			SETTINGS_RESET: "Les paramètres ont été réinitialisés, rechargez la page pour prendre effet",
			LANGUAGE_CHANGED: "La langue a été modifiée, rechargez la page pour prendre effet",
			AUTO_DOWNLOAD: "La prochaine fois qu'un chapitre finira de se charger, il vous sera proposé de l'enregistrer automatiquement",
			LAZY_LOAD: "Le chargement paresseux est incompatible avec le téléchargement zip, vous ne pourrez pas télécharger avec ce paramètre activé.<br/> Suggestion : <span style='color:red;font-weight:bold'>Désactivez les vignettes</span> pour économiser de la bande passante/mémoire.",
			LAZY_LOAD_IMAGES_ENABLE: "Activer le chargement paresseux des images",
			LAZY_LOAD_IMAGES: "Début du chargement paresseux à partir de la page (entre 5 et 100)",
			RETURN_CHAPTER_LIST: "Retour à la liste des chapitres",
			PAGES_LOADED: "Pages chargées",
			GO_TO_PAGE: "Aller à la page",
			ENLARGE: "Agrandir",
			RESTORE: "Restaurer",
			REDUCE: "Réduire",
			FIT_WIDTH: "Ajuster à la largeur",
			FIT_HEIGHT: "Ajuster à la hauteur",
			PERCENT: "Pourcentage",
			TOGGLE_CONTROLS: "Basculer les contrôles de page",
			ZOOM_IN: "Zoom avant",
			ZOOM_OUT: "Zoom arrière",
			ZOOM_RESET: "Réinitialiser le zoom",
			ZOOM_WIDTH: "Zoomer à la largeur",
			ZOOM_HEIGHT: "Zoomer à la hauteur",
			HIDE: "Masquer",
			RELOAD: "Recharger",
			SLOWLY: "Lentement",
			NORMAL: "Normal",
			FAST: "Rapide",
			EXTREME: "Extrême",
			ALL_PAGES: "Toutes les pages",
			SPEED_WARNING: "Vitesse de chargement trop élevée",
			SPEED_WARNING_MESSAGE: "Cette vitesse n'est pas recommandée.<br/> Elle peut nuire à certains serveurs ou marquer votre IP comme un attaquant DDoS.<br/> Veuillez l'utiliser avec prudence !",
			SCROLL_UP: "Faire défiler vers le haut",
			SCROLL_DOWN: "Faire défiler vers le bas",
			CLOSE: "Fermer",
			CANCEL: "Annuler",
			LIST_EMPTY: "Liste vide",
			SCROLL_START: "Basculer le défilement automatique",
			INCREASE_SPEED: "Augmenter la vitesse de défilement",
			DECREASE_SPEED: "Diminuer la vitesse de défilement",
			AUTO_SCROLL_HEIGHT: "Vitesse de défilement automatique en pixels",
			VERTICAL_SEPARATOR: "Afficher les séparateurs verticaux",
			END: "Fin",
			SCOPE: "Portée",
			GLOBAL: "Global",
			GENERAL: "Général",
			LOADING: "Chargement",
			ZOOM: "Zoom",
			OTHERS: "Autres",
			NAVBAR_TYPE: "Changer le type de barre de navigation",
			NAVBAR_BOTTOM: "Bas",
			NAVBAR_LEFT: "Gauche",
			NAVBAR_RIGHT: "Droite",
			NAVBAR_DISABLED: "Désactivé",
			PAGINATION_TYPE: "Type de pagination",
			PAGINATION_DISABLED: "Désactivé",
			PAGINATION_SLIDER: "Curseur",
			PAGINATION_ARROWS: "Flèches latérales",
			PAGINATION_BOTH: "Les deux",
			FILE_MENU: "Menu principal",
			VIEW_MENU: "Menu Affichage",
			ZOOM_MENU: "Menu Zoom",
			DOUBLE_PAGE: "Basculer Double Page",
			CHOOSE_FILE: "Choisir un fichier",
			NO_FILES_SELECTED: "Aucun fichier sélectionné"
		}
	];
	//#endregion
	//#region node_modules/@lit/reactive-element/css-tag.js
	/**
	* @license
	* Copyright 2019 Google LLC
	* SPDX-License-Identifier: BSD-3-Clause
	*/
	var t$2 = globalThis, e$5 = t$2.ShadowRoot && (void 0 === t$2.ShadyCSS || t$2.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, s$1 = Symbol(), o$9 = /* @__PURE__ */ new WeakMap();
	var n$3 = class {
		constructor(t, e, o) {
			if (this._$cssResult$ = !0, o !== s$1) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
			this.cssText = t, this.t = e;
		}
		get styleSheet() {
			let t = this.o;
			const s = this.t;
			if (e$5 && void 0 === t) {
				const e = void 0 !== s && 1 === s.length;
				e && (t = o$9.get(s)), void 0 === t && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), e && o$9.set(s, t));
			}
			return t;
		}
		toString() {
			return this.cssText;
		}
	};
	var r$4 = (t) => new n$3("string" == typeof t ? t : t + "", void 0, s$1), i$3 = (t, ...e) => {
		return new n$3(1 === t.length ? t[0] : e.reduce((e, s, o) => e + ((t) => {
			if (!0 === t._$cssResult$) return t.cssText;
			if ("number" == typeof t) return t;
			throw Error("Value passed to 'css' function must be a 'css' function result: " + t + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
		})(s) + t[o + 1], t[0]), t, s$1);
	}, S = (s, o) => {
		if (e$5) s.adoptedStyleSheets = o.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
		else for (const e of o) {
			const o = document.createElement("style"), n = t$2.litNonce;
			void 0 !== n && o.setAttribute("nonce", n), o.textContent = e.cssText, s.appendChild(o);
		}
	}, c$1 = e$5 ? (t) => t : (t) => t instanceof CSSStyleSheet ? ((t) => {
		let e = "";
		for (const s of t.cssRules) e += s.cssText;
		return r$4(e);
	})(t) : t;
	//#endregion
	//#region node_modules/@lit/reactive-element/reactive-element.js
	/**
	* @license
	* Copyright 2017 Google LLC
	* SPDX-License-Identifier: BSD-3-Clause
	*/ var { is: i$2, defineProperty: e$4, getOwnPropertyDescriptor: h, getOwnPropertyNames: r$3, getOwnPropertySymbols: o$8, getPrototypeOf: n$2 } = Object, a = globalThis, c = a.trustedTypes, l = c ? c.emptyScript : "", p = a.reactiveElementPolyfillSupport, d = (t, s) => t, u = {
		toAttribute(t, s) {
			switch (s) {
				case Boolean:
					t = t ? l : null;
					break;
				case Object:
				case Array: t = null == t ? t : JSON.stringify(t);
			}
			return t;
		},
		fromAttribute(t, s) {
			let i = t;
			switch (s) {
				case Boolean:
					i = null !== t;
					break;
				case Number:
					i = null === t ? null : Number(t);
					break;
				case Object:
				case Array: try {
					i = JSON.parse(t);
				} catch (t) {
					i = null;
				}
			}
			return i;
		}
	}, f = (t, s) => !i$2(t, s), b = {
		attribute: !0,
		type: String,
		converter: u,
		reflect: !1,
		useDefault: !1,
		hasChanged: f
	};
	Symbol.metadata ??= Symbol("metadata"), a.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
	var y = class extends HTMLElement {
		static addInitializer(t) {
			this._$Ei(), (this.l ??= []).push(t);
		}
		static get observedAttributes() {
			return this.finalize(), this._$Eh && [...this._$Eh.keys()];
		}
		static createProperty(t, s = b) {
			if (s.state && (s.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((s = Object.create(s)).wrapped = !0), this.elementProperties.set(t, s), !s.noAccessor) {
				const i = Symbol(), h = this.getPropertyDescriptor(t, i, s);
				void 0 !== h && e$4(this.prototype, t, h);
			}
		}
		static getPropertyDescriptor(t, s, i) {
			const { get: e, set: r } = h(this.prototype, t) ?? {
				get() {
					return this[s];
				},
				set(t) {
					this[s] = t;
				}
			};
			return {
				get: e,
				set(s) {
					const h = e?.call(this);
					r?.call(this, s), this.requestUpdate(t, h, i);
				},
				configurable: !0,
				enumerable: !0
			};
		}
		static getPropertyOptions(t) {
			return this.elementProperties.get(t) ?? b;
		}
		static _$Ei() {
			if (this.hasOwnProperty(d("elementProperties"))) return;
			const t = n$2(this);
			t.finalize(), void 0 !== t.l && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
		}
		static finalize() {
			if (this.hasOwnProperty(d("finalized"))) return;
			if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(d("properties"))) {
				const t = this.properties, s = [...r$3(t), ...o$8(t)];
				for (const i of s) this.createProperty(i, t[i]);
			}
			const t = this[Symbol.metadata];
			if (null !== t) {
				const s = litPropertyMetadata.get(t);
				if (void 0 !== s) for (const [t, i] of s) this.elementProperties.set(t, i);
			}
			this._$Eh = /* @__PURE__ */ new Map();
			for (const [t, s] of this.elementProperties) {
				const i = this._$Eu(t, s);
				void 0 !== i && this._$Eh.set(i, t);
			}
			this.elementStyles = this.finalizeStyles(this.styles);
		}
		static finalizeStyles(s) {
			const i = [];
			if (Array.isArray(s)) {
				const e = new Set(s.flat(Infinity).reverse());
				for (const s of e) i.unshift(c$1(s));
			} else void 0 !== s && i.push(c$1(s));
			return i;
		}
		static _$Eu(t, s) {
			const i = s.attribute;
			return !1 === i ? void 0 : "string" == typeof i ? i : "string" == typeof t ? t.toLowerCase() : void 0;
		}
		constructor() {
			super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
		}
		_$Ev() {
			this._$ES = new Promise((t) => this.enableUpdating = t), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((t) => t(this));
		}
		addController(t) {
			(this._$EO ??= /* @__PURE__ */ new Set()).add(t), void 0 !== this.renderRoot && this.isConnected && t.hostConnected?.();
		}
		removeController(t) {
			this._$EO?.delete(t);
		}
		_$E_() {
			const t = /* @__PURE__ */ new Map(), s = this.constructor.elementProperties;
			for (const i of s.keys()) this.hasOwnProperty(i) && (t.set(i, this[i]), delete this[i]);
			t.size > 0 && (this._$Ep = t);
		}
		createRenderRoot() {
			const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
			return S(t, this.constructor.elementStyles), t;
		}
		connectedCallback() {
			this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(!0), this._$EO?.forEach((t) => t.hostConnected?.());
		}
		enableUpdating(t) {}
		disconnectedCallback() {
			this._$EO?.forEach((t) => t.hostDisconnected?.());
		}
		attributeChangedCallback(t, s, i) {
			this._$AK(t, i);
		}
		_$ET(t, s) {
			const i = this.constructor.elementProperties.get(t), e = this.constructor._$Eu(t, i);
			if (void 0 !== e && !0 === i.reflect) {
				const h = (void 0 !== i.converter?.toAttribute ? i.converter : u).toAttribute(s, i.type);
				this._$Em = t, null == h ? this.removeAttribute(e) : this.setAttribute(e, h), this._$Em = null;
			}
		}
		_$AK(t, s) {
			const i = this.constructor, e = i._$Eh.get(t);
			if (void 0 !== e && this._$Em !== e) {
				const t = i.getPropertyOptions(e), h = "function" == typeof t.converter ? { fromAttribute: t.converter } : void 0 !== t.converter?.fromAttribute ? t.converter : u;
				this._$Em = e;
				const r = h.fromAttribute(s, t.type);
				this[e] = r ?? this._$Ej?.get(e) ?? r, this._$Em = null;
			}
		}
		requestUpdate(t, s, i, e = !1, h) {
			if (void 0 !== t) {
				const r = this.constructor;
				if (!1 === e && (h = this[t]), i ??= r.getPropertyOptions(t), !((i.hasChanged ?? f)(h, s) || i.useDefault && i.reflect && h === this._$Ej?.get(t) && !this.hasAttribute(r._$Eu(t, i)))) return;
				this.C(t, s, i);
			}
			!1 === this.isUpdatePending && (this._$ES = this._$EP());
		}
		C(t, s, { useDefault: i, reflect: e, wrapped: h }, r) {
			i && !(this._$Ej ??= /* @__PURE__ */ new Map()).has(t) && (this._$Ej.set(t, r ?? s ?? this[t]), !0 !== h || void 0 !== r) || (this._$AL.has(t) || (this.hasUpdated || i || (s = void 0), this._$AL.set(t, s)), !0 === e && this._$Em !== t && (this._$Eq ??= /* @__PURE__ */ new Set()).add(t));
		}
		async _$EP() {
			this.isUpdatePending = !0;
			try {
				await this._$ES;
			} catch (t) {
				Promise.reject(t);
			}
			const t = this.scheduleUpdate();
			return null != t && await t, !this.isUpdatePending;
		}
		scheduleUpdate() {
			return this.performUpdate();
		}
		performUpdate() {
			if (!this.isUpdatePending) return;
			if (!this.hasUpdated) {
				if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
					for (const [t, s] of this._$Ep) this[t] = s;
					this._$Ep = void 0;
				}
				const t = this.constructor.elementProperties;
				if (t.size > 0) for (const [s, i] of t) {
					const { wrapped: t } = i, e = this[s];
					!0 !== t || this._$AL.has(s) || void 0 === e || this.C(s, void 0, i, e);
				}
			}
			let t = !1;
			const s = this._$AL;
			try {
				t = this.shouldUpdate(s), t ? (this.willUpdate(s), this._$EO?.forEach((t) => t.hostUpdate?.()), this.update(s)) : this._$EM();
			} catch (s) {
				throw t = !1, this._$EM(), s;
			}
			t && this._$AE(s);
		}
		willUpdate(t) {}
		_$AE(t) {
			this._$EO?.forEach((t) => t.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
		}
		_$EM() {
			this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
		}
		get updateComplete() {
			return this.getUpdateComplete();
		}
		getUpdateComplete() {
			return this._$ES;
		}
		shouldUpdate(t) {
			return !0;
		}
		update(t) {
			this._$Eq &&= this._$Eq.forEach((t) => this._$ET(t, this[t])), this._$EM();
		}
		updated(t) {}
		firstUpdated(t) {}
	};
	y.elementStyles = [], y.shadowRootOptions = { mode: "open" }, y[d("elementProperties")] = /* @__PURE__ */ new Map(), y[d("finalized")] = /* @__PURE__ */ new Map(), p?.({ ReactiveElement: y }), (a.reactiveElementVersions ??= []).push("2.1.2");
	//#endregion
	//#region node_modules/lit-element/lit-element.js
	/**
	* @license
	* Copyright 2017 Google LLC
	* SPDX-License-Identifier: BSD-3-Clause
	*/ var s = globalThis;
	var i$1 = class extends y {
		constructor() {
			super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
		}
		createRenderRoot() {
			const t = super.createRenderRoot();
			return this.renderOptions.renderBefore ??= t.firstChild, t;
		}
		update(t) {
			const r = this.render();
			this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = D(r, this.renderRoot, this.renderOptions);
		}
		connectedCallback() {
			super.connectedCallback(), this._$Do?.setConnected(!0);
		}
		disconnectedCallback() {
			super.disconnectedCallback(), this._$Do?.setConnected(!1);
		}
		render() {
			return E;
		}
	};
	i$1._$litElement$ = !0, i$1["finalized"] = !0, s.litElementHydrateSupport?.({ LitElement: i$1 });
	var o$7 = s.litElementPolyfillSupport;
	o$7?.({ LitElement: i$1 });
	(s.litElementVersions ??= []).push("4.2.2");
	//#endregion
	//#region node_modules/@lit/reactive-element/decorators/custom-element.js
	/**
	* @license
	* Copyright 2017 Google LLC
	* SPDX-License-Identifier: BSD-3-Clause
	*/
	var t$1 = (t) => (e, o) => {
		void 0 !== o ? o.addInitializer(() => {
			customElements.define(t, e);
		}) : customElements.define(t, e);
	};
	//#endregion
	//#region node_modules/@lit/reactive-element/decorators/property.js
	/**
	* @license
	* Copyright 2017 Google LLC
	* SPDX-License-Identifier: BSD-3-Clause
	*/ var o$6 = {
		attribute: !0,
		type: String,
		converter: u,
		reflect: !1,
		hasChanged: f
	}, r$2 = (t = o$6, e, r) => {
		const { kind: n, metadata: i } = r;
		let s = globalThis.litPropertyMetadata.get(i);
		if (void 0 === s && globalThis.litPropertyMetadata.set(i, s = /* @__PURE__ */ new Map()), "setter" === n && ((t = Object.create(t)).wrapped = !0), s.set(r.name, t), "accessor" === n) {
			const { name: o } = r;
			return {
				set(r) {
					const n = e.get.call(this);
					e.set.call(this, r), this.requestUpdate(o, n, t, !0, r);
				},
				init(e) {
					return void 0 !== e && this.C(o, void 0, t, e), e;
				}
			};
		}
		if ("setter" === n) {
			const { name: o } = r;
			return function(r) {
				const n = this[o];
				e.call(this, r), this.requestUpdate(o, n, t, !0, r);
			};
		}
		throw Error("Unsupported decorator location: " + n);
	};
	function n$1(t) {
		return (e, o) => "object" == typeof o ? r$2(t, e, o) : ((t, e, o) => {
			const r = e.hasOwnProperty(o);
			return e.constructor.createProperty(o, t), r ? Object.getOwnPropertyDescriptor(e, o) : void 0;
		})(t, e, o);
	}
	//#endregion
	//#region node_modules/@lit/reactive-element/decorators/state.js
	/**
	* @license
	* Copyright 2017 Google LLC
	* SPDX-License-Identifier: BSD-3-Clause
	*/ function r$1(r) {
		return n$1({
			...r,
			state: !0,
			attribute: !1
		});
	}
	//#endregion
	//#region node_modules/@lit/reactive-element/decorators/base.js
	/**
	* @license
	* Copyright 2017 Google LLC
	* SPDX-License-Identifier: BSD-3-Clause
	*/
	var e$3 = (e, t, c) => (c.configurable = !0, c.enumerable = !0, Reflect.decorate && "object" != typeof t && Object.defineProperty(e, t, c), c);
	//#endregion
	//#region node_modules/@lit/reactive-element/decorators/query.js
	/**
	* @license
	* Copyright 2017 Google LLC
	* SPDX-License-Identifier: BSD-3-Clause
	*/ function e$2(e, r) {
		return (n, s, i) => {
			const o = (t) => t.renderRoot?.querySelector(e) ?? null;
			if (r) {
				const { get: e, set: r } = "object" == typeof s ? n : i ?? (() => {
					const t = Symbol();
					return {
						get() {
							return this[t];
						},
						set(e) {
							this[t] = e;
						}
					};
				})();
				return e$3(n, s, { get() {
					let t = e.call(this);
					return void 0 === t && (t = o(this), (null !== t || this.hasUpdated) && r.call(this, t)), t;
				} });
			}
			return e$3(n, s, { get() {
				return o(this);
			} });
		};
	}
	//#endregion
	//#region node_modules/lit-html/directives/class-map.js
	/**
	* @license
	* Copyright 2018 Google LLC
	* SPDX-License-Identifier: BSD-3-Clause
	*/ var e$1 = e$7(class extends i$4 {
		constructor(t) {
			if (super(t), t.type !== t$3.ATTRIBUTE || "class" !== t.name || t.strings?.length > 2) throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
		}
		render(t) {
			return " " + Object.keys(t).filter((s) => t[s]).join(" ") + " ";
		}
		update(s, [i]) {
			if (void 0 === this.st) {
				this.st = /* @__PURE__ */ new Set(), void 0 !== s.strings && (this.nt = new Set(s.strings.join(" ").split(/\s/).filter((t) => "" !== t)));
				for (const t in i) i[t] && !this.nt?.has(t) && this.st.add(t);
				return this.render(i);
			}
			const r = s.element.classList;
			for (const t of this.st) t in i || (r.remove(t), this.st.delete(t));
			for (const t in i) {
				const s = !!i[t];
				s === this.st.has(t) || this.nt?.has(t) || (s ? (r.add(t), this.st.add(t)) : (r.remove(t), this.st.delete(t)));
			}
			return E;
		}
	});
	//#endregion
	//#region node_modules/lit-html/directives/unsafe-html.js
	/**
	* @license
	* Copyright 2017 Google LLC
	* SPDX-License-Identifier: BSD-3-Clause
	*/ var e = class extends i$4 {
		constructor(i) {
			if (super(i), this.it = A, i.type !== t$3.CHILD) throw Error(this.constructor.directiveName + "() can only be used in child bindings");
		}
		render(r) {
			if (r === A || null == r) return this._t = void 0, this.it = r;
			if (r === E) return r;
			if ("string" != typeof r) throw Error(this.constructor.directiveName + "() called with a non-string value");
			if (r === this.it) return this._t;
			this.it = r;
			const s = [r];
			return s.raw = s, this._t = {
				_$litType$: this.constructor.resultType,
				strings: s,
				values: []
			};
		}
	};
	e.directiveName = "unsafeHTML", e.resultType = 1;
	var o$5 = e$7(e);
	//#endregion
	//#region node_modules/lit-html/directives/unsafe-svg.js
	/**
	* @license
	* Copyright 2017 Google LLC
	* SPDX-License-Identifier: BSD-3-Clause
	*/ var t = class extends e {};
	t.directiveName = "unsafeSVG", t.resultType = 2;
	var o$4 = e$7(t);
	//#endregion
	//#region src/utils/format.ts
	/**
	* Converts a string from kebab-case or snake_case to PascalCase, ensuring it starts with "Icon".
	* If the input already appears to be in the correct format, it is returned as is.
	* @param {string} name - The input string to convert.
	* @example
	* toPascalCase('align-box-right-top') // "IconAlignBoxRightTop"
	* toPascalCase('IconUserPlus') // "IconUserPlus"
	* @returns {string} The name in PascalCase with the 'Icon' prefix (e.g., "IconAlignBoxRightTopFilled").
	*/
	function toPascalCase(name) {
		if (name.startsWith("Icon") && !name.includes("-") && !name.includes("_")) return name;
		const withoutPrefix = name.startsWith("Icon") ? name.substring(4) : name;
		return `Icon${_.upperFirst(_.camelCase(withoutPrefix))}`;
	}
	//#endregion
	//#region src/ui/styles/icons.css?inline
	var icons_default = ".icon-tabler-file-download > :nth-child(n + 4) {\r\n  color: gold;\r\n}\r\n\r\n.icon-tabler-arrow-autofit-width > :nth-child(n + 3) {\r\n  color: yellow;\r\n}\r\n\r\n.icon-tabler-arrow-autofit-height > :nth-child(n + 3) {\r\n  color: yellow;\r\n}\r\n\r\n.icon-tabler-zoom-in-area > :nth-child(2),\r\n.icon-tabler-zoom-in-area > :nth-child(3) {\r\n  color: lime;\r\n}\r\n\r\n.icon-tabler-zoom-out-area > :nth-child(2) {\r\n  color: red;\r\n}\r\n\r\n.icon-tabler-zoom-pan > :nth-child(n + 4) {\r\n  color: #9966ff;\r\n}\r\n\r\n.icon-tabler-arrow-autofit-down > :nth-child(n + 3) {\r\n  color: #28ffbf;\r\n}\r\n\r\n.icon-tabler-arrow-autofit-left > :nth-child(n + 3) {\r\n  color: #28ffbf;\r\n}\r\n\r\n.icon-tabler-arrow-autofit-right > :nth-child(n + 3) {\r\n  color: #28ffbf;\r\n}\r\n\r\n.icon-tabler-spacing-vertical > :nth-child(4) {\r\n  color: fuchsia;\r\n}\r\n\r\n.icon-tabler-spacing-horizontal > :nth-child(4) {\r\n  color: fuchsia;\r\n}\r\n\r\n.icon-tabler-list-numbers > :nth-child(n + 5) {\r\n  color: #e48900;\r\n}\r\n\r\n.icon-tabler-bookmarks > :nth-child(n + 2) {\r\n  color: orange;\r\n}\r\n\r\n.icon-tabler-bookmark > :nth-child(2) {\r\n  color: orange;\r\n}\r\n\r\n.icon-tabler-bookmark-off > :nth-child(2) {\r\n  color: orange;\r\n}\r\n\r\n.icon-tabler-bookmark-off > :nth-child(3) {\r\n  color: red;\r\n}\r\n\r\n.icon-tabler-eye-off > :nth-child(4) {\r\n  color: red;\r\n}\r\n\r\n.icon-tabler-zoom-cancel > :nth-child(3),\r\n.icon-tabler-zoom-cancel > :nth-child(4) {\r\n  color: #9966ff;\r\n}\r\n\r\n.icon-tabler-zoom-in > :nth-child(3),\r\n.icon-tabler-zoom-in > :nth-child(4) {\r\n  color: lime;\r\n}\r\n\r\n.icon-tabler-zoom-out > :nth-child(3) {\r\n  color: red;\r\n}\r\n\r\n.icon-tabler-refresh > :nth-child(n + 2) {\r\n  color: cyan;\r\n}\r\n\r\n.icon-tabler-photo > :nth-child(n + 2) {\r\n  color: silver;\r\n}\r\n\r\n.icon-tabler-photo-off > :nth-child(n + 2) {\r\n  color: silver;\r\n}\r\n\r\n.icon-tabler-photo-off > :nth-child(6) {\r\n  color: orange;\r\n}\r\n\r\n.icon-tabler-message > :nth-child(2),\r\n.icon-tabler-message > :nth-child(3) {\r\n  color: greenyellow;\r\n}\r\n\r\n.icon-tabler-book-arrow-left > :nth-child(7),\r\n.icon-tabler-book-arrow-left > :nth-child(8),\r\n.icon-tabler-book-arrow-right > :nth-child(7),\r\n.icon-tabler-book-arrow-right > :nth-child(8),\r\n.icon-tabler-books-return > :nth-child(8),\r\n.icon-tabler-books-return > :nth-child(9) {\r\n  color: greenyellow;\r\n}\r\n\r\n.icon-tabler-file-percent > :nth-child(2),\r\n.icon-tabler-file-percent > :nth-child(5),\r\n.icon-tabler-file-percent > :nth-child(6) {\r\n  color: yellow;\r\n}\r\n\r\n.icon-tabler-settings-off > :nth-child(4) {\r\n  color: red;\r\n}\r\n\r\n.icon-tabler-book-off > :nth-child(7) {\r\n  color: red;\r\n}\r\n";
	//#endregion
	//#region src/ui/icons/adjustments-horizontal.svg
	var adjustments_horizontal_default = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"icon icon-tabler icons-tabler-outline icon-tabler-adjustments-horizontal\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M14 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\"/><path d=\"M4 6l8 0\"/><path d=\"M16 6l4 0\"/><path d=\"M8 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\"/><path d=\"M4 12l2 0\"/><path d=\"M10 12l10 0\"/><path d=\"M17 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\"/><path d=\"M4 18l11 0\"/><path d=\"M19 18l1 0\"/></svg>";
	//#endregion
	//#region src/ui/icons/alert-circle.svg
	var alert_circle_default = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"icon icon-tabler icons-tabler-outline icon-tabler-alert-circle\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0\"/><path d=\"M12 8v4\"/><path d=\"M12 16h.01\"/></svg>";
	//#endregion
	//#region src/ui/icons/api-book.svg
	var api_book_default = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"icon icon-tabler icons-tabler-outline icon-tabler-api-book\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M3 19a9 9 0 0 1 9 0a9 9 0 0 1 1.006 -.5\"/><path d=\"M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0\"/><path d=\"M3 6v13\"/><path d=\"M12 6v13\"/><path d=\"M21 6v6\"/><path d=\"M17.001 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\"/><path d=\"M19.001 15.5v1.5\"/><path d=\"M19.001 21v1.5\"/><path d=\"M22.032 17.25l-1.299 .75\"/><path d=\"M17.27 20l-1.3 .75\"/><path d=\"M15.97 17.25l1.3 .75\"/><path d=\"M20.733 20l1.3 .75\"/></svg>";
	//#endregion
	//#region src/ui/icons/arrow-autofit-down.svg
	var arrow_autofit_down_default = "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon icon-tabler icon-tabler-arrow-autofit-down\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" stroke-width=\"2\" stroke=\"currentColor\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M12 20h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h8\"/><path d=\"M18 4v17\"/><path d=\"M15 18l3 3l3 -3\"/></svg>";
	//#endregion
	//#region src/ui/icons/arrow-autofit-height.svg
	var arrow_autofit_height_default = "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon icon-tabler icon-tabler-arrow-autofit-height\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" stroke-width=\"2\" stroke=\"currentColor\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M12 20h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h6\"/><path d=\"M18 14v7\"/><path d=\"M18 3v7\"/><path d=\"M15 18l3 3l3 -3\"/><path d=\"M15 6l3 -3l3 3\"/></svg>";
	//#endregion
	//#region src/ui/icons/arrow-autofit-left.svg
	var arrow_autofit_left_default = "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon icon-tabler icon-tabler-arrow-autofit-left\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" stroke-width=\"2\" stroke=\"currentColor\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M4 12v-6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v8\"/><path d=\"M20 18h-17\"/><path d=\"M6 15l-3 3l3 3\"/></svg>";
	//#endregion
	//#region src/ui/icons/arrow-autofit-right.svg
	var arrow_autofit_right_default = "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon icon-tabler icon-tabler-arrow-autofit-right\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" stroke-width=\"2\" stroke=\"currentColor\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M20 12v-6a2 2 0 0 0 -2 -2h-12a2 2 0 0 0 -2 2v8\"/><path d=\"M4 18h17\"/><path d=\"M18 15l3 3l-3 3\"/></svg>";
	//#endregion
	//#region src/ui/icons/arrow-autofit-width.svg
	var arrow_autofit_width_default = "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon icon-tabler icon-tabler-arrow-autofit-width\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" stroke-width=\"2\" stroke=\"currentColor\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M4 12v-6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v6\"/><path d=\"M10 18h-7\"/><path d=\"M21 18h-7\"/><path d=\"M6 15l-3 3l3 3\"/><path d=\"M18 15l3 3l-3 3\"/></svg>";
	//#endregion
	//#region src/ui/icons/arrow-big-left.svg
	var arrow_big_left_default = "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon icon-tabler icon-tabler-arrow-big-left\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" stroke-width=\"2\" stroke=\"currentColor\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M20 15h-8v3.586a1 1 0 0 1 -1.707 .707l-6.586 -6.586a1 1 0 0 1 0 -1.414l6.586 -6.586a1 1 0 0 1 1.707 .707v3.586h8a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1z\"/></svg>";
	//#endregion
	//#region src/ui/icons/arrow-big-right.svg
	var arrow_big_right_default = "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon icon-tabler icon-tabler-arrow-big-right\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" stroke-width=\"2\" stroke=\"currentColor\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M4 9h8v-3.586a1 1 0 0 1 1.707 -.707l6.586 6.586a1 1 0 0 1 0 1.414l-6.586 6.586a1 1 0 0 1 -1.707 -.707v-3.586h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1z\"/></svg>";
	//#endregion
	//#region src/ui/icons/arrows-horizontal.svg
	var arrows_horizontal_default = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"icon icon-tabler icons-tabler-outline icon-tabler-arrows-horizontal\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M7 8l-4 4l4 4\"/><path d=\"M17 8l4 4l-4 4\"/><path d=\"M3 12l18 0\"/></svg>";
	//#endregion
	//#region src/ui/icons/arrows-left-right.svg
	var arrows_left_right_default = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"icon icon-tabler icons-tabler-outline icon-tabler-arrows-left-right\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M21 17l-18 0\"/><path d=\"M6 10l-3 -3l3 -3\"/><path d=\"M3 7l18 0\"/><path d=\"M18 20l3 -3l-3 -3\"/></svg>";
	//#endregion
	//#region src/ui/icons/arrows-move.svg
	var arrows_move_default = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"icon icon-tabler icons-tabler-outline icon-tabler-arrows-move\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M18 9l3 3l-3 3\"/><path d=\"M15 12h6\"/><path d=\"M6 9l-3 3l3 3\"/><path d=\"M3 12h6\"/><path d=\"M9 18l3 3l3 -3\"/><path d=\"M12 15v6\"/><path d=\"M15 6l-3 -3l-3 3\"/><path d=\"M12 3v6\"/></svg>";
	//#endregion
	//#region src/ui/icons/arrows-move-vertical.svg
	var arrows_move_vertical_default = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"icon icon-tabler icons-tabler-outline icon-tabler-arrows-move-vertical\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M9 18l3 3l3 -3\"/><path d=\"M12 15v6\"/><path d=\"M15 6l-3 -3l-3 3\"/><path d=\"M12 3v6\"/></svg>";
	//#endregion
	//#region src/ui/icons/arrows-vertical.svg
	var arrows_vertical_default = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"icon icon-tabler icons-tabler-outline icon-tabler-arrows-vertical\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M8 7l4 -4l4 4\"/><path d=\"M8 17l4 4l4 -4\"/><path d=\"M12 3l0 18\"/></svg>";
	//#endregion
	//#region src/ui/icons/book.svg
	var book_default$1 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"icon icon-tabler icons-tabler-outline icon-tabler-book\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0\"/><path d=\"M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0\"/><path d=\"M3 6l0 13\"/><path d=\"M12 6l0 13\"/><path d=\"M21 6l0 13\"/></svg>";
	//#endregion
	//#region src/ui/icons/book-arrow-left.svg
	var book_arrow_left_default = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"icon icon-tabler icons-tabler-outline icon-tabler-book-arrow-left\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M3 19a9 9 0 0 1 9 0a9 9 0 0 1 1.006 -.5\"/><path d=\"M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0\"/><path d=\"M3 6v13\"/><path d=\"M12 6v13\"/><path d=\"M21 6v6\"/><path d=\"M16 19h6\"/><path d=\"M19 16l-3 3l3 3\"/></svg>";
	//#endregion
	//#region src/ui/icons/book-arrow-right.svg
	var book_arrow_right_default = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"icon icon-tabler icons-tabler-outline icon-tabler-book-arrow-right\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M3 19a9 9 0 0 1 9 0a9 9 0 0 1 1.006 -.5\"/><path d=\"M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0\"/><path d=\"M3 6v13\"/><path d=\"M12 6v13\"/><path d=\"M21 6v6\"/><path d=\"M16 19h6\"/><path d=\"M19 16l3 3l-3 3\"/></svg>";
	//#endregion
	//#region src/ui/icons/book-off.svg
	var book_off_default = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"icon icon-tabler icons-tabler-outline icon-tabler-book-off\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M3 19a9 9 0 0 1 9 0a9 9 0 0 1 5.899 -1.096\"/><path d=\"M3 6a9 9 0 0 1 2.114 -.884m3.8 -.21c1.07 .17 2.116 .534 3.086 1.094a9 9 0 0 1 9 0\"/><path d=\"M3 6v13\"/><path d=\"M12 6v2m0 4v7\"/><path d=\"M21 6v11\"/><path d=\"M3 3l18 18\"/></svg>";
	//#endregion
	//#region src/ui/icons/book-upload.svg
	var book_upload_default = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"icon icon-tabler icons-tabler-outline icon-tabler-book-upload\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M14 20h-8a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12v5\"/><path d=\"M11 16h-5a2 2 0 0 0 -2 2\"/><path d=\"M15 16l3 -3l3 3\"/><path d=\"M18 13v9\"/></svg>";
	//#endregion
	//#region src/ui/icons/bookmark.svg
	var bookmark_default = "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon icon-tabler icon-tabler-bookmark\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" stroke-width=\"2\" stroke=\"currentColor\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M18 7v14l-6 -4l-6 4v-14a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4z\"/></svg>";
	//#endregion
	//#region src/ui/icons/bookmark-off.svg
	var bookmark_off_default = "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon icon-tabler icon-tabler-bookmark-off\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" stroke-width=\"2\" stroke=\"currentColor\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M7.708 3.721a3.982 3.982 0 0 1 2.292 -.721h4a4 4 0 0 1 4 4v7m0 4v3l-6 -4l-6 4v-14c0 -.308 .035 -.609 .1 -.897\"/><path d=\"M3 3l18 18\"/></svg>";
	//#endregion
	//#region src/ui/icons/bookmarks.svg
	var bookmarks_default$1 = "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon icon-tabler icon-tabler-bookmarks\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" stroke-width=\"2\" stroke=\"currentColor\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M15 10v11l-5 -3l-5 3v-11a3 3 0 0 1 3 -3h4a3 3 0 0 1 3 3z\"/><path d=\"M11 3h5a3 3 0 0 1 3 3v11\"/></svg>";
	//#endregion
	//#region src/ui/icons/books-return.svg
	var books_return_default = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"icon icon-tabler icons-tabler-outline icon-tabler-books-return\"><defs><mask id=\"arrow-mask\"><rect width=\"24\" height=\"24\" fill=\"white\"/><rect x=\"15\" y=\"15\" width=\"8\" height=\"8\" fill=\"black\"/></mask></defs><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M5 5a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -14\"/><path d=\"M9 5a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -14\"/><path d=\"M5 8h4\"/><path d=\"M9 16h4\"/><g mask=\"url(#arrow-mask)\"><path d=\"M13.803 4.56l2.184 -.53c.562 -.135 1.133 .19 1.282 .732l3.695 13.418a1.02 1.02 0 0 1 -.634 1.219l-.133 .041l-2.184 .53c-.562 .135 -1.133 -.19 -1.282 -.732l-3.695 -13.418a1.02 1.02 0 0 1 .634 -1.219l.133 -.041\"/><path d=\"M14 9l4 -1\"/><path d=\"M16 16l3.923 -.98\"/></g><path d=\"M16 19h6\"/><path d=\"M19 16l-3 3l3 3\"/></svg>";
	//#endregion
	//#region src/ui/icons/box-align-top.svg
	var box_align_top_default = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"icon icon-tabler icons-tabler-outline icon-tabler-box-align-top\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M4 10.005h16v-5a1 1 0 0 0 -1 -1h-14a1 1 0 0 0 -1 1v5z\"/><path d=\"M4 15.005v-.01\"/><path d=\"M4 20.005v-.01\"/><path d=\"M9 20.005v-.01\"/><path d=\"M15 20.005v-.01\"/><path d=\"M20 20.005v-.01\"/><path d=\"M20 15.005v-.01\"/></svg>";
	//#endregion
	//#region src/ui/icons/Comic1-SpecialFlat.svg
	var Comic1_SpecialFlat_default = "<svg id=\"Capa_1\" enable-background=\"new 0 0 512 512\" height=\"512\" viewBox=\"0 0 512 512\" width=\"512\" xmlns=\"http://www.w3.org/2000/svg\"><g><g><g><path d=\"m427.508 512h-343.02c-5.69 0-10.302-4.612-10.302-10.302v-491.396c0-5.69 4.612-10.302 10.302-10.302h343.02c5.69 0 10.302 4.612 10.302 10.302v491.396c-.001 5.69-4.613 10.302-10.302 10.302z\" fill=\"#f2eff2\"/></g></g><path d=\"m427.512 0h-41.238c5.687 0 10.302 4.615 10.302 10.302v41.156l-18.039 71.714 18.039 81.268v46.358l-18.039 45.164 18.039 24.847v46.358l-10.302 61.227 10.302 32.149v41.156c0 5.687-4.615 10.302-10.302 10.302h41.238c5.687 0 10.302-4.615 10.302-10.302v-491.397c0-5.687-4.615-10.302-10.302-10.302z\" fill=\"#e1dde1\"/><g><path d=\"m243.51 273.63-47.48 104.08-80.61-10.85v-315.4c0-2.85 2.31-5.15 5.15-5.15h30.86c2.13 0 4.03 1.29 4.8 3.27z\" fill=\"#3ad1e0\"/><path d=\"m243.51 273.63-16.68 36.56-101.52-260.61c-.76-1.95-2.64-3.25-4.74-3.27h30.86c2.13 0 4.03 1.29 4.8 3.27z\" fill=\"#22c7db\"/><path d=\"m310.81 465.69h-190.24c-2.84 0-5.15-2.3-5.15-5.15v-93.68c25.18-34.92 65.99-57.81 112.19-58.37l-16.07 35.21 74.5 39.08 29.56 75.9c1.32 3.37-1.17 7.01-4.79 7.01z\" fill=\"#fb33a8\"/><path d=\"m310.81 465.69h-30.92c3.61 0 6.11-3.64 4.79-7.01l-12.92-33.17c-1.92 4.55-2.88 9.61-2.61 14.91.01.13.01.25.01.38 0 5.92-7.39 8.87-11.45 4.36-6.77-7.49-16.03-11.24-25.29-11.24s-18.54 3.75-25.29 11.24c-1.36 1.52-3.11 2.19-4.83 2.19-3.48 0-6.84-2.78-6.62-6.93.03-.59.04-1.18.04-1.77 0-19.36-16.23-34.99-35.81-33.99-.12.01-.24.01-.37.01-5.92 0-8.87-7.4-4.37-11.46 7.49-6.76 11.24-16.03 11.24-25.29s-3.75-18.52-11.24-25.29c-1.51-1.36-2.18-3.1-2.18-4.81 0-3.48 2.78-6.84 6.92-6.64.6.04 1.19.05 1.77.05 12.81 0 23.98-7.11 29.79-17.57l34.29-1.12-14.22 31.16 74.5 39.08 29.56 75.9c1.32 3.37-1.17 7.01-4.79 7.01z\" fill=\"#fb33a8\"/><path d=\"m396.58 51.46v152.98c0 2.84-2.31 5.15-5.15 5.15h-32l-40.41-29.31-40.41 29.31h-17.82c-2.12 0-4.03-1.3-4.8-3.28l-59.6-152.98c-1.32-3.38 1.18-7.02 4.79-7.02h190.25c2.84 0 5.15 2.3 5.15 5.15z\" fill=\"#fcb44d\"/><path d=\"m396.576 51.457v152.982c0 2.843-2.308 5.151-5.151 5.151h-30.927c2.843 0 5.151-2.308 5.151-5.151v-152.982c0-2.843-2.308-5.151-5.151-5.151h30.927c2.843.001 5.151 2.308 5.151 5.151z\" fill=\"#fb9927\"/><g><path d=\"m359.428 181.065v28.526h-80.818v-28.526c0-22.324 18.1-40.414 40.414-40.414 11.157 0 21.263 4.522 28.567 11.837 7.314 7.314 11.837 17.409 11.837 28.577z\" fill=\"#ae6ad8\"/><path d=\"m359.43 181.065v28.526h-29.237v-28.526c0-11.167-4.522-21.263-11.837-28.577-3.935-3.935-8.674-7.067-13.949-9.107 4.533-1.762 9.467-2.73 14.618-2.73 11.157 0 21.263 4.522 28.567 11.837 7.316 7.314 11.838 17.409 11.838 28.577z\" fill=\"#975bbb\"/><g><g><circle cx=\"319.023\" cy=\"121.497\" fill=\"#f2eff2\" r=\"26.224\"/></g></g></g><path d=\"m396.576 250.798v70.011c0 2.845-2.306 5.151-5.151 5.151h-85.311c-2.123 0-4.029-1.303-4.8-3.281l-27.273-70.011c-1.316-3.377 1.175-7.021 4.8-7.021h112.585c2.844 0 5.15 2.306 5.15 5.151z\" fill=\"#23f1a8\"/><path d=\"m396.576 250.798v70.011c0 2.843-2.308 5.151-5.151 5.151h-30.927c2.843 0 5.151-2.308 5.151-5.151v-70.011c0-2.843-2.308-5.151-5.151-5.151h30.927c2.843 0 5.151 2.307 5.151 5.151z\" fill=\"#27e19d\"/><path d=\"m324.179 362.016h67.246c2.845 0 5.151 2.306 5.151 5.151v93.376c0 2.845-2.306 5.151-5.151 5.151h-30.866c-2.123 0-4.029-1.303-4.799-3.281l-36.38-93.376c-1.316-3.377 1.175-7.021 4.799-7.021z\" fill=\"#23f1a8\"/><path d=\"m396.576 367.167v93.376c0 2.843-2.308 5.151-5.151 5.151h-30.927c2.843 0 5.151-2.308 5.151-5.151v-93.376c0-2.843-2.308-5.151-5.151-5.151h30.927c2.843 0 5.151 2.308 5.151 5.151z\" fill=\"#27e19d\"/></g><g><path d=\"m269.153 413.978c.01.124.01.247.01.371 0 5.924-7.397 8.87-11.456 4.368-6.768-7.489-16.03-11.239-25.291-11.239s-18.533 3.75-25.291 11.239c-1.36 1.514-3.101 2.184-4.821 2.184-3.482 0-6.84-2.782-6.624-6.923.031-.597.041-1.185.041-1.772 0-19.367-16.236-34.995-35.809-33.996-.124.01-.247.01-.371.01-5.924 0-8.87-7.397-4.368-11.456 7.489-6.758 11.239-16.03 11.239-25.291s-3.75-18.523-11.239-25.291c-1.514-1.36-2.184-3.101-2.184-4.811 0-3.482 2.782-6.84 6.923-6.634.597.031 1.185.041 1.772.041 19.367 0 34.995-16.236 33.996-35.799-.01-.124-.01-.247-.01-.371 0-5.934 7.397-8.87 11.456-4.378 6.758 7.489 16.03 11.239 25.291 11.239 3.76 0 7.51-.618 11.095-1.844l42.526 109.158c-10.591 6.183-17.565 17.916-16.885 31.195z\" fill=\"#fdef63\"/><path d=\"m268.516 417.19c.406-.839.648-1.79.648-2.841 0-.123 0-.247-.01-.371-.68-13.279 6.294-25.013 16.885-31.194l-42.526-109.158c-3.585 1.226-7.335 1.844-11.095 1.844-7.992 0-15.988-2.799-22.374-8.378z\" fill=\"#f3d730\"/></g><g><g><path d=\"m229.374 349.967c-4.267 0-7.726-3.459-7.726-7.726v-29.272c0-4.267 3.459-7.726 7.726-7.726s7.726 3.459 7.726 7.726v29.272c0 4.267-3.459 7.726-7.726 7.726z\" fill=\"#554e55\"/></g><g><path d=\"m229.374 377.711c-4.267 0-7.726-3.459-7.726-7.726v-2.061c0-4.267 3.459-7.726 7.726-7.726s7.726 3.459 7.726 7.726v2.061c0 4.267-3.459 7.726-7.726 7.726z\" fill=\"#554e55\"/></g></g><g><g><path d=\"m258.185 86.361h-18.228c-4.267 0-7.726-3.459-7.726-7.726s3.459-7.726 7.726-7.726h18.228c4.267 0 7.726 3.459 7.726 7.726 0 4.266-3.459 7.726-7.726 7.726z\" fill=\"#f2eff2\"/></g><g><path d=\"m266.269 111.168h-18.229c-4.267 0-7.726-3.459-7.726-7.726s3.459-7.726 7.726-7.726h18.228c4.267 0 7.726 3.459 7.726 7.726s-3.458 7.726-7.725 7.726z\" fill=\"#f2eff2\"/></g></g></g></svg>";
	//#endregion
	//#region src/ui/icons/Comic1-SpecialLinealColor.svg
	var Comic1_SpecialLinealColor_default = "<?xml version=\"1.0\" encoding=\"UTF-8\"?><svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" id=\"Capa_1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 512 512\" style=\"enable-background: new 0 0 512 512\" xml:space=\"preserve\" width=\"512\" height=\"512\"><g><g><g><path style=\"fill: #f2eff2\" d=\"M422.485,504.5H89.515c-5.523,0-10-4.477-10-10v-477c0-5.523,4.477-10,10-10h332.971&#10;&#9;&#9;&#9;&#9;c5.523,0,10,4.477,10,10v477C432.485,500.023,428.008,504.5,422.485,504.5z\"/></g></g><g><g><path style=\"fill: #e1dde1\" d=\"M432.49,17.5v477c0,5.52-4.48,10-10,10h-40.03c5.52,0,10-4.48,10-10v-477c0-5.52-4.48-10-10-10&#10;&#9;&#9;&#9;&#9;h40.03C428.01,7.5,432.49,11.98,432.49,17.5z\"/></g></g><g><path style=\"\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        \" d=\"&#10;&#9;&#9;&#9;M334.56,7.5H89.515c-5.523,0-10,4.477-10,10v477c0,5.523,4.477,10,10,10h332.971c5.523,0,10-4.477,10-10v-477&#10;&#9;&#9;&#9;c0-5.523-4.477-10-10-10h-54.763\"/></g><g><path style=\"fill: #3ad1e0\" d=\"M313.86,452.74L159.16,55.63c-0.75-1.92-2.6-3.18-4.66-3.18h-29.96c-2.76,0-5,2.24-5,5v397.1&#10;&#9;&#9;&#9;c0,2.76,2.24,5,5,5h184.67C312.72,459.55,315.14,456.01,313.86,452.74z\"/><path style=\"fill: #22c7db\" d=\"M309.21,459.55h-30.02c3.51,0,5.93-3.54,4.65-6.81L129.14,55.63c-0.74-1.9-2.56-3.16-4.6-3.18&#10;&#9;&#9;&#9;h29.96c2.06,0,3.91,1.26,4.66,3.18l154.7,397.11C315.14,456.01,312.72,459.55,309.21,459.55z\"/><path style=\"fill: #fb33a8\" d=\"M258.193,309.845c-9.05-1.894-18.424-2.909-28.037-2.909c-45.55,0-85.862,22.354-110.616,56.676&#10;&#9;&#9;&#9;v90.938c0,2.76,2.24,5,5,5h184.67c3.51,0,5.93-3.54,4.65-6.81L258.193,309.845z\"/><path style=\"fill: #ee2d9a\" d=\"M193.362,311.966c-5.64,10.161-16.48,17.055-28.912,17.055c-0.57,0-1.14-0.01-1.72-0.04&#10;&#9;&#9;&#9;c-4.02-0.2-6.72,3.06-6.72,6.44c0,1.66,0.65,3.35,2.12,4.67c7.27,6.57,10.91,15.56,10.91,24.55s-3.64,17.99-10.91,24.55&#10;&#9;&#9;&#9;c-4.37,3.94-1.51,11.12,4.24,11.12c0.12,0,0.24,0,0.36-0.01c19-0.97,34.76,14.2,34.76,33c0,0.57-0.01,1.14-0.04,1.72&#10;&#9;&#9;&#9;c-0.21,4.02,3.05,6.72,6.43,6.72c1.67,0,3.36-0.65,4.68-2.12c6.56-7.27,15.56-10.91,24.55-10.91c8.99,0,17.98,3.64,24.55,10.91&#10;&#9;&#9;&#9;c3.94,4.37,11.12,1.51,11.12-4.24c0-0.12,0-0.24-0.01-0.36c-0.264-5.151,0.666-10.058,2.527-14.479l12.543,32.197&#10;&#9;&#9;&#9;c1.28,3.27-1.14,6.81-4.65,6.81h30.02c3.51,0,5.93-3.54,4.65-6.81l-55.667-142.895L193.362,311.966z\"/><path style=\"\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        \" d=\"&#10;&#9;&#9;&#9;M230.156,306.937c-45.55,0-85.862,22.354-110.616,56.676\"/><path style=\"fill: #fcb44d\" d=\"M392.46,57.45v148.5c0,2.76-2.24,5-5,5H260.65c-2.06,0-3.91-1.26-4.66-3.18l-57.85-148.5&#10;&#9;&#9;&#9;c-1.28-3.28,1.14-6.82,4.65-6.82h184.67C390.22,52.45,392.46,54.69,392.46,57.45z\"/><path style=\"fill: #fb9927\" d=\"M392.46,57.45v148.5c0,2.76-2.24,5-5,5h-30.021c2.76,0,5-2.24,5-5V57.45c0-2.76-2.24-5-5-5h30.021&#10;&#9;&#9;&#9;C390.22,52.45,392.46,54.69,392.46,57.45z\"/><g><path style=\"fill: #ae6ad8\" d=\"M356.4,183.26v27.69h-78.45v-27.69c0-21.67,17.57-39.23,39.23-39.23&#10;&#9;&#9;&#9;&#9;c10.83,0,20.64,4.39,27.73,11.49C352.01,162.62,356.4,172.42,356.4,183.26z\"/><path style=\"fill: #975bbb\" d=\"M356.402,183.26v27.69h-28.38v-27.69c0-10.84-4.39-20.64-11.49-27.74&#10;&#9;&#9;&#9;&#9;c-3.82-3.82-8.42-6.86-13.54-8.84c4.4-1.71,9.19-2.65,14.19-2.65c10.83,0,20.64,4.39,27.73,11.49&#10;&#9;&#9;&#9;&#9;C352.012,162.62,356.402,172.42,356.402,183.26z\"/><path style=\"\n            fill: none;\n            stroke: #000000;\n            stroke-width: 15;\n            stroke-linecap: round;\n            stroke-linejoin: round;\n            stroke-miterlimit: 10;\n          \" d=\"&#10;&#9;&#9;&#9;&#9;M277.95,210.95v-27.69c0-21.67,17.57-39.23,39.23-39.23c10.83,0,20.64,4.39,27.73,11.49c7.1,7.1,11.49,16.9,11.49,27.74v27.69\"/><g><circle style=\"fill: #f2eff2\" cx=\"317.179\" cy=\"125.438\" r=\"25.456\"/><circle style=\"\n              fill: none;\n              stroke: #000000;\n              stroke-width: 15;\n              stroke-linecap: round;\n              stroke-linejoin: round;\n              stroke-miterlimit: 10;\n            \" cx=\"317.179\" cy=\"125.438\" r=\"25.456\"/></g></g><path style=\"fill: #23f1a8\" d=\"M392.46,250.95v67.96c0,2.761-2.239,5-5,5h-82.812c-2.061,0-3.911-1.265-4.659-3.185l-26.474-67.96&#10;&#9;&#9;&#9;c-1.277-3.278,1.141-6.815,4.659-6.815H387.46C390.221,245.95,392.46,248.189,392.46,250.95z\"/><path style=\"fill: #27e19d\" d=\"M392.46,250.95v67.96c0,2.76-2.24,5-5,5h-30.021c2.76,0,5-2.24,5-5v-67.96c0-2.76-2.24-5-5-5&#10;&#9;&#9;&#9;h30.021C390.22,245.95,392.46,248.19,392.46,250.95z\"/><path style=\"fill: #23f1a8\" d=\"M322.184,358.91h65.276c2.761,0,5,2.239,5,5v90.64c0,2.761-2.239,5-5,5h-29.962&#10;&#9;&#9;&#9;c-2.061,0-3.911-1.265-4.659-3.185l-35.314-90.64C316.248,362.447,318.666,358.91,322.184,358.91z\"/><path style=\"fill: #27e19d\" d=\"M392.46,363.91v90.64c0,2.76-2.24,5-5,5h-30.021c2.76,0,5-2.24,5-5v-90.64c0-2.76-2.24-5-5-5&#10;&#9;&#9;&#9;h30.021C390.22,358.91,392.46,361.15,392.46,363.91z\"/><path style=\"\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        \" d=\"&#10;&#9;&#9;&#9;M119.54,242.003V454.55c0,2.761,2.239,5,5,5h184.666c3.518,0,5.936-3.537,4.659-6.815l-154.704-397.1&#10;&#9;&#9;&#9;c-0.748-1.92-2.598-3.185-4.659-3.185H124.54c-2.761,0-5,2.239-5,5v151.391\"/><path style=\"\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        \" d=\"&#10;&#9;&#9;&#9;M392.46,57.45v148.5c0,2.761-2.239,5-5,5H260.648c-2.061,0-3.911-1.265-4.659-3.185l-57.854-148.5&#10;&#9;&#9;&#9;c-1.277-3.278,1.141-6.815,4.659-6.815H387.46C390.221,52.45,392.46,54.689,392.46,57.45z\"/><path style=\"\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        \" d=\"&#10;&#9;&#9;&#9;M306.627,245.95h-28.454c-3.518,0-5.936,3.537-4.659,6.815l26.474,67.96c0.748,1.92,2.598,3.185,4.659,3.185h82.812&#10;&#9;&#9;&#9;c2.761,0,5-2.239,5-5v-67.96c0-2.761-2.239-5-5-5h-47.67\"/><path style=\"\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        \" d=\"&#10;&#9;&#9;&#9;M322.184,358.91h65.276c2.761,0,5,2.239,5,5v90.64c0,2.761-2.239,5-5,5h-29.962c-2.061,0-3.911-1.265-4.659-3.185l-35.314-90.64&#10;&#9;&#9;&#9;C316.248,362.447,318.666,358.91,322.184,358.91z\"/></g><g><path style=\"fill: #fdef63\" d=\"M268.77,409.35c0.01,0.12,0.01,0.24,0.01,0.36c0,5.75-7.18,8.61-11.12,4.24&#10;&#9;&#9;&#9;c-6.57-7.27-15.56-10.91-24.55-10.91c-8.99,0-17.99,3.64-24.55,10.91c-1.32,1.47-3.01,2.12-4.68,2.12c-3.38,0-6.64-2.7-6.43-6.72&#10;&#9;&#9;&#9;c0.03-0.58,0.04-1.15,0.04-1.72c0-18.8-15.76-33.97-34.76-33c-0.12,0.01-0.24,0.01-0.36,0.01c-5.75,0-8.61-7.18-4.24-11.12&#10;&#9;&#9;&#9;c7.27-6.56,10.91-15.56,10.91-24.55s-3.64-17.98-10.91-24.55c-1.47-1.32-2.12-3.01-2.12-4.67c0-3.38,2.7-6.64,6.72-6.44&#10;&#9;&#9;&#9;c0.58,0.03,1.15,0.04,1.72,0.04c18.8,0,33.97-15.76,33-34.75c-0.01-0.12-0.01-0.24-0.01-0.36c0-5.76,7.18-8.61,11.12-4.25&#10;&#9;&#9;&#9;c6.56,7.27,15.56,10.91,24.55,10.91c3.65,0,7.29-0.6,10.77-1.79l41.28,105.96C274.88,385.07,268.11,396.46,268.77,409.35z\"/><path style=\"fill: #f3d730\" d=\"M268.151,412.468c0.394-0.814,0.629-1.738,0.629-2.758c0-0.12,0-0.24-0.01-0.36&#10;&#9;&#9;&#9;c-0.66-12.89,6.11-24.28,16.39-30.28l-41.28-105.96c-3.48,1.19-7.12,1.79-10.77,1.79c-7.758,0-15.52-2.717-21.718-8.132&#10;&#9;&#9;&#9;L268.151,412.468z\"/><path style=\"\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        \" d=\"&#10;&#9;&#9;&#9;M268.77,409.35c0.01,0.12,0.01,0.24,0.01,0.36c0,5.75-7.18,8.61-11.12,4.24c-6.57-7.27-15.56-10.91-24.55-10.91&#10;&#9;&#9;&#9;c-8.99,0-17.99,3.64-24.55,10.91c-1.32,1.47-3.01,2.12-4.68,2.12c-3.38,0-6.64-2.7-6.43-6.72c0.03-0.58,0.04-1.15,0.04-1.72&#10;&#9;&#9;&#9;c0-18.8-15.76-33.97-34.76-33c-0.12,0.01-0.24,0.01-0.36,0.01c-5.75,0-8.61-7.18-4.24-11.12c7.27-6.56,10.91-15.56,10.91-24.55&#10;&#9;&#9;&#9;s-3.64-17.98-10.91-24.55c-1.47-1.32-2.12-3.01-2.12-4.67c0-3.38,2.7-6.64,6.72-6.44c0.58,0.03,1.15,0.04,1.72,0.04&#10;&#9;&#9;&#9;c18.8,0,33.97-15.76,33-34.75c-0.01-0.12-0.01-0.24-0.01-0.36c0-5.76,7.18-8.61,11.12-4.25c6.56,7.27,15.56,10.91,24.55,10.91&#10;&#9;&#9;&#9;c3.65,0,7.29-0.6,10.77-1.79l41.28,105.96C274.88,385.07,268.11,396.46,268.77,409.35z\"/></g><g><line style=\"\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        \" x1=\"230.156\" y1=\"339.714\" x2=\"230.156\" y2=\"311.299\"/><line style=\"\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        \" x1=\"230.156\" y1=\"364.644\" x2=\"230.156\" y2=\"366.646\"/></g><g><line style=\"\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        \" x1=\"240.429\" y1=\"83.83\" x2=\"258.124\" y2=\"83.83\"/><line style=\"\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        \" x1=\"248.276\" y1=\"107.911\" x2=\"265.97\" y2=\"107.911\"/></g></g></svg>";
	//#endregion
	//#region src/ui/icons/Comic2-SpecialFlat.svg
	var Comic2_SpecialFlat_default = "<?xml version=\"1.0\" encoding=\"UTF-8\"?><svg version=\"1.1\" id=\"svg3390\" xml:space=\"preserve\" width=\"682.66669\" height=\"682.66669\" viewBox=\"0 0 682.66669 682.66669\" xmlns=\"http://www.w3.org/2000/svg\"><defs id=\"defs3394\"><clipPath clipPathUnits=\"userSpaceOnUse\" id=\"clipPath3404\"><path d=\"M 0,512 H 512 V 0 H 0 Z\" id=\"path3402\"/></clipPath></defs><g id=\"g3396\" transform=\"matrix(1.3333333,0,0,-1.3333333,0,682.66667)\"><g id=\"g3398\"><g id=\"g3400\" clip-path=\"url(#clipPath3404)\"><g id=\"g3406\" transform=\"translate(451.7344)\"><path d=\"m 0,0 h -391.469 c -11.379,0 -20.603,9.225 -20.603,20.604 v 470.792 c 0,11.379 9.224,20.604 20.603,20.604 L 0,512 c 11.379,0 20.604,-9.225 20.604,-20.604 V 20.604 C 20.604,9.225 11.379,0 0,0\" style=\"fill: #efe6e6; fill-opacity: 1; fill-rule: nonzero; stroke: none\" id=\"path3408\"/></g><g id=\"g3410\" transform=\"translate(472.3376,41.2072)\"><path d=\"m 0,0 c -216.202,0 -391.468,175.266 -391.468,391.468 v 79.325 h -20.604 c -11.379,0 -20.604,-9.225 -20.604,-20.604 V -20.604 c 0,-11.379 9.225,-20.603 20.604,-20.603 H -20.603 C -9.224,-41.207 0,-31.983 0,-20.604 Z\" style=\"fill: #e2d7d7; fill-opacity: 1; fill-rule: nonzero; stroke: none\" id=\"path3412\"/></g><g id=\"g3414\" transform=\"translate(235.3964,198.1382)\"><path d=\"M 0,0 H 195.734 V 272.655 H 82.414 Z\" style=\"fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none\" id=\"path3416\"/></g><g id=\"g3418\" transform=\"translate(235.3964,198.1382)\"><path d=\"M 0,0 H 195.734 V 272.655 H 82.414 Z\" style=\"fill: #5ad6ff; fill-opacity: 1; fill-rule: nonzero; stroke: none\" id=\"path3420\"/></g><g id=\"g3422\" transform=\"translate(80.8692,198.1382)\"><path d=\"m 0,0 h 113.32 l 82.414,272.655 H 0 Z\" style=\"fill: #f4e74d; fill-opacity: 1; fill-rule: nonzero; stroke: none\" id=\"path3424\"/></g><g id=\"g3426\" transform=\"translate(80.8692,432.6757)\"><path d=\"M 0,0 V -234.537 H 78.01 C 29.021,-169.169 0,-87.974 0,0\" style=\"fill: #eedb00; fill-opacity: 1; fill-rule: nonzero; stroke: none\" id=\"path3428\"/></g><path d=\"M 431.131,41.207 H 80.869 v 115.724 h 350.262 z\" style=\"fill: #b18cd9; fill-opacity: 1; fill-rule: nonzero; stroke: none\" id=\"path3430\"/><g id=\"g3432\" transform=\"translate(194.475,156.931)\"><path d=\"m 0,0 h -113.606 v -115.724 h 350.262 v 2.149 C 144.487,-103.933 61.838,-62.31 0,0\" style=\"fill: #996acc; fill-opacity: 1; fill-rule: nonzero; stroke: none\" id=\"path3434\"/></g><g id=\"g3436\" transform=\"translate(213.2632,94.3332)\"><path d=\"m 0,0 c 0,-10.991 -11.188,-19.901 -24.99,-19.901 -13.801,0 -24.989,8.91 -24.989,19.901 0,10.991 11.188,19.9 24.989,19.9 C -11.188,19.9 0,10.991 0,0\" style=\"fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none\" id=\"path3438\"/></g><g id=\"g3440\" transform=\"translate(298.7368,94.3332)\"><path d=\"m 0,0 c 0,-10.991 11.188,-19.901 24.99,-19.901 13.801,0 24.989,8.91 24.989,19.901 0,10.991 -11.188,19.9 -24.989,19.9 C 11.188,19.9 0,10.991 0,0\" style=\"fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none\" id=\"path3442\"/></g><g id=\"g3444\" transform=\"translate(202.8374,123.7057)\"><path d=\"M 0,0 V -10.216\" style=\"\n              fill: none;\n              stroke: #3d4751;\n              stroke-width: 15;\n              stroke-linecap: round;\n              stroke-linejoin: round;\n              stroke-miterlimit: 10;\n              stroke-dasharray: none;\n              stroke-opacity: 1;\n            \" id=\"path3446\"/></g><g id=\"g3448\" transform=\"translate(309.1625,123.7057)\"><path d=\"M 0,0 V -10.216\" style=\"\n              fill: none;\n              stroke: #3d4751;\n              stroke-width: 15;\n              stroke-linecap: round;\n              stroke-linejoin: round;\n              stroke-miterlimit: 10;\n              stroke-dasharray: none;\n              stroke-opacity: 1;\n            \" id=\"path3450\"/></g><g id=\"g3452\" transform=\"translate(241.984,113.7942)\"><path d=\"m 0,0 c 3.408,-3.911 8.421,-6.385 14.016,-6.385 5.595,0 10.608,2.474 14.016,6.385\" style=\"\n              fill: none;\n              stroke: #3d4751;\n              stroke-width: 15;\n              stroke-linecap: round;\n              stroke-linejoin: round;\n              stroke-miterlimit: 10;\n              stroke-dasharray: none;\n              stroke-opacity: 1;\n            \" id=\"path3454\"/></g><g id=\"g3456\" transform=\"translate(150.0629,447.8862)\"><path d=\"m 0,0 33.436,22.907 h -102.63 v -161.294 l 21.382,72.58 59.96,-46.151 -25.363,71.287 75.636,-2.093 z\" style=\"fill: #fd5c6f; fill-opacity: 1; fill-rule: nonzero; stroke: none\" id=\"path3458\"/></g><g id=\"g3460\" transform=\"translate(80.8692,432.6757)\"><path d=\"m 0,0 v -123.177 l 10.122,34.358 C 3.502,-60.282 0,-30.55 0,0\" style=\"fill: #f6334c; fill-opacity: 1; fill-rule: nonzero; stroke: none\" id=\"path3462\"/></g><g id=\"g3464\" transform=\"translate(431.1308,271.141)\"><path d=\"m 0,0 -57.698,-44.41 24.406,68.598 -72.782,-2.014 60.066,41.15 -60.066,41.151 72.782,-2.014 -24.406,68.597 L 0,126.649 Z\" style=\"fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none\" id=\"path3466\"/></g></g></g></g></svg>";
	//#endregion
	//#region src/ui/icons/Comic2-SpecialLinealColor.svg
	var Comic2_SpecialLinealColor_default = "<?xml version=\"1.0\" encoding=\"UTF-8\"?><svg version=\"1.1\" id=\"svg5007\" xml:space=\"preserve\" width=\"682.66669\" height=\"682.66669\" viewBox=\"0 0 682.66669 682.66669\" xmlns=\"http://www.w3.org/2000/svg\"><defs id=\"defs5011\"><clipPath clipPathUnits=\"userSpaceOnUse\" id=\"clipPath5021\"><path d=\"M 0,512 H 512 V 0 H 0 Z\" id=\"path5019\"/></clipPath></defs><g id=\"g5013\" transform=\"matrix(1.3333333,0,0,-1.3333333,0,682.66667)\"><g id=\"g5015\"><g id=\"g5017\" clip-path=\"url(#clipPath5021)\"><g id=\"g5023\" transform=\"translate(446,7.5)\"><path d=\"m 0,0 h -380 c -11.046,0 -20,8.954 -20,20 v 457 c 0,11.046 8.954,20 20,20 H 0 c 11.046,0 20,-8.954 20,-20 V 20 C 20,8.954 11.046,0 0,0\" style=\"fill: #efe6e6; fill-opacity: 1; fill-rule: nonzero; stroke: none\" id=\"path5025\"/></g><g id=\"g5027\" transform=\"translate(465.9996,47.5)\"><path d=\"m 0,0 c -209.868,0 -380,170.132 -380,380 v 77 h -20 c -11.045,0 -20,-8.954 -20,-20 V -20 c 0,-11.046 8.955,-20 20,-20 h 380 c 11.046,0 20,8.954 20,20 z\" style=\"fill: #e2d7d7; fill-opacity: 1; fill-rule: nonzero; stroke: none\" id=\"path5029\"/></g><g id=\"g5031\" transform=\"translate(236,199.8333)\"><path d=\"M 0,0 H 190 V 264.667 H 80 Z\" style=\"fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none\" id=\"path5033\"/></g><g id=\"g5035\" transform=\"translate(236,199.8333)\"><path d=\"M 0,0 H 190 V 264.667 H 80 Z\" style=\"fill: #5ad6ff; fill-opacity: 1; fill-rule: nonzero; stroke: none\" id=\"path5037\"/></g><g id=\"g5039\" transform=\"translate(86,199.8333)\"><path d=\"m 0,0 h 110 l 80,264.667 H 0 Z\" style=\"fill: #f4e74d; fill-opacity: 1; fill-rule: nonzero; stroke: none\" id=\"path5041\"/></g><g id=\"g5043\" transform=\"translate(86,427.4996)\"><path d=\"M 0,0 V -227.666 H 75.725 C 28.171,-164.213 0,-85.397 0,0\" style=\"fill: #eedb00; fill-opacity: 1; fill-rule: nonzero; stroke: none\" id=\"path5045\"/></g><path d=\"M 426,47.5 H 86 v 112.333 h 340 z\" style=\"fill: #b18cd9; fill-opacity: 1; fill-rule: nonzero; stroke: none\" id=\"path5047\"/><g id=\"g5049\" transform=\"translate(196.2775,159.8334)\"><path d=\"m 0,0 h -110.278 v -112.333 h 340 v 2.085 C 140.254,-100.888 60.026,-60.484 0,0\" style=\"fill: #996acc; fill-opacity: 1; fill-rule: nonzero; stroke: none\" id=\"path5051\"/></g><g id=\"g5053\" transform=\"translate(214.5152,99.0695)\"><path d=\"m 0,0 c 0,-10.669 -10.861,-19.318 -24.258,-19.318 -13.397,0 -24.257,8.649 -24.257,19.318 0,10.669 10.86,19.317 24.257,19.317 C -10.861,19.317 0,10.669 0,0\" style=\"fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none\" id=\"path5055\"/></g><g id=\"g5057\" transform=\"translate(297.4848,99.0695)\"><path d=\"m 0,0 c 0,-10.669 10.861,-19.318 24.258,-19.318 13.397,0 24.257,8.649 24.257,19.318 0,10.669 -10.86,19.317 -24.257,19.317 C 10.861,19.317 0,10.669 0,0\" style=\"fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none\" id=\"path5059\"/></g><g id=\"g5061\" transform=\"translate(204.3949,127.5815)\"><path d=\"M 0,0 V -9.916\" style=\"\n              fill: none;\n              stroke: #000000;\n              stroke-width: 15;\n              stroke-linecap: round;\n              stroke-linejoin: round;\n              stroke-miterlimit: 10;\n              stroke-dasharray: none;\n              stroke-opacity: 1;\n            \" id=\"path5063\"/></g><g id=\"g5065\" transform=\"translate(307.605,127.5815)\"><path d=\"M 0,0 V -9.916\" style=\"\n              fill: none;\n              stroke: #000000;\n              stroke-width: 15;\n              stroke-linecap: round;\n              stroke-linejoin: round;\n              stroke-miterlimit: 10;\n              stroke-dasharray: none;\n              stroke-opacity: 1;\n            \" id=\"path5067\"/></g><g id=\"g5069\" transform=\"translate(242.3946,117.9604)\"><path d=\"m 0,0 c 3.308,-3.796 8.175,-6.198 13.605,-6.198 5.431,0 10.298,2.402 13.606,6.198\" style=\"\n              fill: none;\n              stroke: #000000;\n              stroke-width: 15;\n              stroke-linecap: round;\n              stroke-linejoin: round;\n              stroke-miterlimit: 10;\n              stroke-dasharray: none;\n              stroke-opacity: 1;\n            \" id=\"path5071\"/></g><g id=\"g5073\" transform=\"translate(153.1665,442.2645)\"><path d=\"m 0,0 32.456,22.235 h -99.623 v -156.568 l 20.756,70.454 58.203,-44.799 -24.62,69.199 73.42,-2.032 z\" style=\"fill: #fd5c6f; fill-opacity: 1; fill-rule: nonzero; stroke: none\" id=\"path5075\"/></g><g id=\"g5077\" transform=\"translate(86,427.4996)\"><path d=\"m 0,0 v -119.568 l 9.825,33.351 C 3.399,-58.516 0,-29.655 0,0\" style=\"fill: #f6334c; fill-opacity: 1; fill-rule: nonzero; stroke: none\" id=\"path5079\"/></g><g id=\"g5081\" transform=\"translate(426,270.6974)\"><path d=\"m 0,0 -56.008,-43.108 23.692,66.587 -70.65,-1.955 58.306,39.945 -58.306,39.945 70.65,-1.955 -23.692,66.588 L 0,122.939 Z\" style=\"fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none\" id=\"path5083\"/></g><g id=\"g5085\" transform=\"translate(446,7.5)\"><path d=\"m 0,0 h -380 c -11.046,0 -20,8.954 -20,20 v 457 c 0,11.046 8.954,20 20,20 H 0 c 11.046,0 20,-8.954 20,-20 V 20 C 20,8.954 11.046,0 0,0 Z\" style=\"\n              fill: none;\n              stroke: #000000;\n              stroke-width: 15;\n              stroke-linecap: round;\n              stroke-linejoin: round;\n              stroke-miterlimit: 10;\n              stroke-dasharray: none;\n              stroke-opacity: 1;\n            \" id=\"path5087\"/></g><g id=\"g5089\" transform=\"translate(426,346.167)\"><path d=\"m 0,0 v 118.333 h -110 l -80,-264.667 H 0 V -28\" style=\"\n              fill: none;\n              stroke: #000000;\n              stroke-width: 15;\n              stroke-linecap: round;\n              stroke-linejoin: round;\n              stroke-miterlimit: 10;\n              stroke-dasharray: none;\n              stroke-opacity: 1;\n            \" id=\"path5091\"/></g><g id=\"g5093\" transform=\"translate(86,199.8333)\"><path d=\"m 0,0 h 110 l 80,264.667 H 0 Z\" style=\"\n              fill: none;\n              stroke: #000000;\n              stroke-width: 15;\n              stroke-linecap: round;\n              stroke-linejoin: round;\n              stroke-miterlimit: 10;\n              stroke-dasharray: none;\n              stroke-opacity: 1;\n            \" id=\"path5095\"/></g><g id=\"g5097\" transform=\"translate(154.0172,159.8334)\"><path d=\"m 0,0 h 271.983 v -112.333 h -340 V 0 H -28\" style=\"\n              fill: none;\n              stroke: #000000;\n              stroke-width: 15;\n              stroke-linecap: round;\n              stroke-linejoin: round;\n              stroke-miterlimit: 10;\n              stroke-dasharray: none;\n              stroke-opacity: 1;\n            \" id=\"path5099\"/></g><g id=\"g5101\" transform=\"translate(86,307.9314)\"><path d=\"m 0,0 20.756,70.454 58.203,-44.799 -24.62,69.199 73.419,-2.032 -60.591,41.511 32.455,22.236\" style=\"\n              fill: none;\n              stroke: #000000;\n              stroke-width: 15;\n              stroke-linecap: round;\n              stroke-linejoin: round;\n              stroke-miterlimit: 10;\n              stroke-dasharray: none;\n              stroke-opacity: 1;\n            \" id=\"path5103\"/></g><g id=\"g5105\" transform=\"translate(426,270.6974)\"><path d=\"m 0,0 -56.008,-43.108 23.692,66.587 -70.65,-1.955 58.306,39.945 -58.306,39.945 70.65,-1.955 -23.692,66.588 L 0,122.939\" style=\"\n              fill: none;\n              stroke: #000000;\n              stroke-width: 15;\n              stroke-linecap: round;\n              stroke-linejoin: round;\n              stroke-miterlimit: 10;\n              stroke-dasharray: none;\n              stroke-opacity: 1;\n            \" id=\"path5107\"/></g></g></g></g></svg>";
	//#endregion
	//#region src/ui/icons/Comic3-SpecialFlat.svg
	var Comic3_SpecialFlat_default = "<svg id=\"Capa_1\" enable-background=\"new 0 0 512 512\" height=\"512\" viewBox=\"0 0 512 512\" width=\"512\" xmlns=\"http://www.w3.org/2000/svg\"><g><g><g><path d=\"m427.508 512h-343.02c-5.69 0-10.302-4.612-10.302-10.302v-491.396c0-5.69 4.612-10.302 10.302-10.302h343.02c5.69 0 10.302 4.612 10.302 10.302v491.396c-.001 5.69-4.613 10.302-10.302 10.302z\" fill=\"#f2eff2\"/></g></g><path d=\"m427.512 0h-41.238c5.687 0 10.302 4.615 10.302 10.302v36.12l-18.016 49.462 18.016 36.952v51.701l-13.787 87.003 13.787 55.974v51.669l-18.016 52.406 18.016 34.008v36.1c0 5.687-4.615 10.302-10.302 10.302h41.238c5.687 0 10.302-4.615 10.302-10.302v-491.395c0-5.687-4.615-10.302-10.302-10.302z\" fill=\"#e1dde1\"/><path d=\"m396.6 46.36v86.52c0 2.85-2.31 5.15-5.15 5.15h-110.11l-22.53-48.41 22.53-48.41h110.11c2.84 0 5.15 2.3 5.15 5.15z\" fill=\"#3ad1e0\"/><path d=\"m396.599 46.358v86.525c0 2.843-2.308 5.151-5.151 5.151h-30.926c2.843 0 5.151-2.308 5.151-5.151v-86.525c0-2.843-2.308-5.151-5.151-5.151h30.926c2.844 0 5.151 2.308 5.151 5.151z\" fill=\"#20bfd5\"/><path d=\"m281.34 41.207h-39.904c-2.845 0-5.151 2.306-5.151 5.151v86.525c0 2.845 2.306 5.151 5.151 5.151h39.904z\" fill=\"#23f1a8\"/><path d=\"m304.73 470.79h-77.71l-39.22-20.29-39.23 20.29h-28.03c-2.84 0-5.15-2.3-5.15-5.15v-86.52c0-2.85 2.31-5.15 5.15-5.15h128.92c1.76 0 3.4.89 4.34 2.37l55.27 86.53c2.19 3.43-.27 7.92-4.34 7.92z\" fill=\"#23f1a8\"/><g><path d=\"m227.019 443.104v27.689h-78.446v-27.689c0-21.669 17.569-39.228 39.228-39.228 10.83 0 20.639 4.39 27.729 11.489 7.099 7.1 11.489 16.899 11.489 27.739z\" fill=\"#ae6ad8\"/><path d=\"m227.021 443.101v27.691h-29.061v-27.691c0-10.838-4.389-20.634-11.486-27.732-3.729-3.74-8.211-6.727-13.207-8.715 4.492-1.793 9.406-2.782 14.536-2.782 10.827 0 20.635 4.389 27.732 11.497 7.097 7.098 11.486 16.895 11.486 27.732z\" fill=\"#975bbb\"/></g><path d=\"m304.728 470.793h-30.926c4.069 0 6.531-4.492 4.347-7.922l-55.269-86.525c-.948-1.483-2.586-2.38-4.347-2.38h30.926c1.762 0 3.4.896 4.347 2.38l55.269 86.525c2.184 3.43-.278 7.922-4.347 7.922z\" fill=\"#27e19d\"/><path d=\"m391.448 373.966h-81.106c-4.068 0-6.531 4.495-4.341 7.924l55.269 86.525c.946 1.482 2.583 2.378 4.341 2.378h25.837c2.845 0 5.151-2.306 5.151-5.151v-86.525c0-2.845-2.306-5.151-5.151-5.151z\" fill=\"#ae6ad8\"/><path d=\"m396.599 379.117v86.525c0 2.843-2.308 5.151-5.151 5.151h-25.837c-.907 0-1.772-.237-2.534-.68 1.556-.886 2.596-2.555 2.596-4.471v-86.525c0-2.843-2.308-5.151-5.151-5.151h30.926c2.844 0 5.151 2.308 5.151 5.151z\" fill=\"#975bbb\"/><g><path d=\"m195.602 46.358v86.525c0 2.845-2.306 5.151-5.151 5.151h-69.91c-2.845 0-5.151-2.306-5.151-5.151v-86.525c0-2.845 2.306-5.151 5.151-5.151h69.91c2.845 0 5.151 2.306 5.151 5.151z\" fill=\"#3ad1e0\"/><path d=\"m195.6 46.358v86.525c0 2.843-2.308 5.151-5.151 5.151h-30.926c2.843 0 5.151-2.308 5.151-5.151v-86.525c0-2.843-2.308-5.151-5.151-5.151h30.926c2.844 0 5.151 2.308 5.151 5.151z\" fill=\"#20bfd5\"/></g><g><path d=\"m396.6 184.39v143.22c0 2.84-2.31 5.15-5.15 5.15h-30.93l-104.53-27.53-104.52 27.53h-30.93c-2.84 0-5.15-2.31-5.15-5.15v-143.22c0-2.84 2.31-5.15 5.15-5.15h47.77l87.68 16.15 87.69-16.15h47.77c2.84 0 5.15 2.31 5.15 5.15z\" fill=\"#fb54b6\"/></g><path d=\"m151.473 332.759c0-57.729 46.798-104.527 104.527-104.527s104.527 46.798 104.527 104.527z\" fill=\"#fb9927\"/><path d=\"m360.522 332.759h-35.397c0-51.694-37.519-94.612-86.824-103.028 5.748-.979 11.662-1.494 17.699-1.494 57.731 0 104.522 46.79 104.522 104.522z\" fill=\"#f98824\"/><g><path d=\"m396.599 184.392v143.216c0 2.843-2.308 5.151-5.151 5.151h-30.926c2.843 0 5.151-2.308 5.151-5.151v-143.216c0-2.843-2.308-5.151-5.151-5.151h30.926c2.844 0 5.151 2.308 5.151 5.151z\" fill=\"#fb33a8\"/></g><g><g><path d=\"m345.43 247.027c-.144 0-.299 0-.453-.01-24.024-1.226-43.947 17.946-43.947 41.722 0 .721.021 1.442.051 2.174.268 5.079-3.853 8.489-8.128 8.489-2.112 0-4.244-.814-5.913-2.678-8.293-9.189-19.676-13.794-31.039-13.794s-22.746 4.605-31.039 13.794c-1.669 1.865-3.801 2.678-5.913 2.678-4.275 0-8.396-3.41-8.128-8.489.031-.731.041-1.453.041-2.174 0-23.777-19.924-42.948-43.937-41.722-.155.01-.309.01-.464.01-7.263 0-10.879-9.076-5.357-14.062 9.189-8.293 13.794-19.666 13.794-31.039 0-7.912-2.225-15.813-6.686-22.685h175.378c-4.461 6.871-6.686 14.773-6.686 22.685 0 11.373 4.605 22.746 13.794 31.039 5.521 4.986 1.905 14.062-5.368 14.062z\" fill=\"#fdef63\"/><g><g id=\"XMLID_00000127012381744132405410000009872483291948348836_\"><path d=\"m280.138 231.696c-4.268 0-7.726-3.459-7.726-7.726v-.107c0-4.267 3.459-7.726 7.726-7.726s7.726 3.459 7.726 7.726v.107c0 4.267-3.459 7.726-7.726 7.726z\" fill=\"#554e55\"/></g><g id=\"XMLID_00000080918978500845250090000017315552773041050031_\"><path d=\"m256 231.696c-4.267 0-7.726-3.459-7.726-7.726v-.107c0-4.267 3.459-7.726 7.726-7.726 4.268 0 7.726 3.459 7.726 7.726v.107c0 4.267-3.458 7.726-7.726 7.726z\" fill=\"#554e55\"/></g><g id=\"XMLID_00000140711681861242238370000008769002181148908969_\"><path d=\"m231.862 231.696c-4.267 0-7.726-3.459-7.726-7.726v-.107c0-4.267 3.459-7.726 7.726-7.726s7.726 3.459 7.726 7.726v.107c.001 4.267-3.459 7.726-7.726 7.726z\" fill=\"#554e55\"/></g></g><path d=\"m345.43 247.037c-.155 0-.299 0-.443-.021-24.034-1.226-43.948 17.956-43.948 41.722 0 .721.01 1.432.052 2.174.258 5.079-3.863 8.499-8.128 8.499-2.122 0-4.255-.824-5.924-2.689-6.954-7.685-16.05-12.167-25.507-13.423 29.968-14.804 50.582-45.678 50.582-81.364 0-7.84-.999-15.442-2.864-22.695h34.429c-4.45 6.871-6.676 14.783-6.676 22.685 0 11.373 4.605 22.757 13.784 31.05 5.532 4.966 1.926 14.062-5.357 14.062z\" fill=\"#f3d730\"/></g></g><g><g><g><circle cx=\"187.8\" cy=\"385.284\" fill=\"#d8b2ec\" r=\"25.455\"/></g></g></g><g><g id=\"XMLID_00000028301319025648580530000009457246182494066313_\"><path d=\"m316.443 111.45c-4.258 0-7.714-3.445-7.726-7.705-.012-4.267 3.438-7.736 7.705-7.747l41.222-.114h.021c4.258 0 7.714 3.445 7.726 7.705.012 4.267-3.438 7.736-7.705 7.747l-41.222.114c-.007 0-.014 0-.021 0z\" fill=\"#f2eff2\"/></g><g><path d=\"m357.665 83.243h-21.761c-4.268 0-7.726-3.459-7.726-7.726s3.459-7.726 7.726-7.726h21.761c4.268 0 7.726 3.459 7.726 7.726s-3.458 7.726-7.726 7.726z\" fill=\"#f2eff2\"/></g></g></g></svg>";
	//#endregion
	//#region src/ui/icons/Comic3-SpecialLinealColor.svg
	var Comic3_SpecialLinealColor_default = "<?xml version=\"1.0\" encoding=\"UTF-8\"?><svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" id=\"Capa_1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 512 512\" style=\"enable-background: new 0 0 512 512\" xml:space=\"preserve\" width=\"512\" height=\"512\"><g><g><g><path style=\"fill: #f2eff2\" d=\"M422.485,504.5H89.515c-5.523,0-10-4.477-10-10v-477c0-5.523,4.477-10,10-10h332.971&#10;&#9;&#9;&#9;&#9;c5.523,0,10,4.477,10,10v477C432.485,500.023,428.008,504.5,422.485,504.5z\"/></g></g><g><g><path style=\"fill: #e1dde1\" d=\"M432.49,17.5v477c0,5.52-4.48,10-10,10h-40.03c5.52,0,10-4.48,10-10v-477c0-5.52-4.48-10-10-10&#10;&#9;&#9;&#9;&#9;h40.03C428.01,7.5,432.49,11.98,432.49,17.5z\"/></g></g><g><path style=\"\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        \" d=\"&#10;&#9;&#9;&#9;M158.639,7.5H89.515c-5.523,0-10,4.477-10,10v477c0,5.523,4.477,10,10,10h332.971c5.523,0,10-4.477,10-10v-477&#10;&#9;&#9;&#9;c0-5.523-4.477-10-10-10H191.801\"/></g><path style=\"fill: #3ad1e0\" d=\"M392.482,52.5v83.99c0,2.761-2.239,5-5,5H241.866c-2.761,0-5-2.239-5-5V52.5c0-2.761,2.239-5,5-5&#10;&#9;&#9;h145.617C390.244,47.5,392.482,49.739,392.482,52.5z\"/><path style=\"fill: #20bfd5\" d=\"M392.482,52.5v83.99c0,2.76-2.24,5-5,5h-30.02c2.76,0,5-2.24,5-5V52.5c0-2.76-2.24-5-5-5h30.02&#10;&#9;&#9;C390.242,47.5,392.482,49.74,392.482,52.5z\"/><path style=\"fill: #26d192\" d=\"M280.6,47.5h-38.735c-2.761,0-5,2.239-5,5v83.99c0,2.761,2.239,5,5,5H280.6V47.5z\"/><line style=\"\n        fill: none;\n        stroke: #000000;\n        stroke-width: 15;\n        stroke-linecap: round;\n        stroke-linejoin: round;\n        stroke-miterlimit: 10;\n      \" x1=\"280.6\" y1=\"141.49\" x2=\"280.6\" y2=\"47.5\"/><path style=\"fill: #23f1a8\" d=\"M124.512,370.51h125.143c1.706,0,3.295,0.87,4.214,2.308l53.65,83.99&#10;&#9;&#9;c2.126,3.328-0.264,7.692-4.214,7.692H124.512c-2.761,0-5-2.239-5-5v-83.99C119.512,372.749,121.751,370.51,124.512,370.51z\"/><g><path style=\"fill: #ae6ad8\" d=\"M227.87,437.622V464.5h-76.148v-26.878c0-21.034,17.054-38.079,38.079-38.079&#10;&#9;&#9;&#9;c10.512,0,20.034,4.261,26.916,11.153C223.609,417.588,227.87,427.1,227.87,437.622z\"/><path style=\"fill: #975bbb\" d=\"M227.872,437.62v26.88h-28.21v-26.88c0-10.52-4.26-20.03-11.15-26.92&#10;&#9;&#9;&#9;c-3.62-3.63-7.97-6.53-12.82-8.46c4.36-1.74,9.13-2.7,14.11-2.7c10.51,0,20.03,4.26,26.92,11.16&#10;&#9;&#9;&#9;C223.612,417.59,227.872,427.1,227.872,437.62z\"/><path style=\"\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        \" d=\"&#10;&#9;&#9;&#9;M151.722,464.5v-26.878c0-21.034,17.054-38.079,38.079-38.079c10.512,0,20.034,4.261,26.916,11.153&#10;&#9;&#9;&#9;c6.892,6.892,11.153,16.404,11.153,26.926V464.5\"/></g><path style=\"fill: #27e19d\" d=\"M303.302,464.5h-30.02c3.95,0,6.34-4.36,4.22-7.69l-53.65-83.99c-0.92-1.44-2.51-2.31-4.22-2.31&#10;&#9;&#9;h30.02c1.71,0,3.3,0.87,4.22,2.31l53.65,83.99C309.642,460.14,307.252,464.5,303.302,464.5z\"/><path style=\"fill: #ae6ad8\" d=\"M387.482,370.51h-78.73c-3.949,0-6.34,4.363-4.214,7.692l53.65,83.99&#10;&#9;&#9;c0.919,1.438,2.507,2.308,4.214,2.308h25.08c2.761,0,5-2.239,5-5v-83.99C392.482,372.749,390.244,370.51,387.482,370.51z\"/><path style=\"fill: #975bbb\" d=\"M392.482,375.51v83.99c0,2.76-2.24,5-5,5h-25.08c-0.88,0-1.72-0.23-2.46-0.66&#10;&#9;&#9;c1.51-0.86,2.52-2.48,2.52-4.34v-83.99c0-2.76-2.24-5-5-5h30.02C390.242,370.51,392.482,372.75,392.482,375.51z\"/><path style=\"\n        fill: none;\n        stroke: #000000;\n        stroke-width: 15;\n        stroke-linecap: round;\n        stroke-linejoin: round;\n        stroke-miterlimit: 10;\n      \" d=\"&#10;&#9;&#9;M392.482,52.5v83.99c0,2.761-2.239,5-5,5H241.866c-2.761,0-5-2.239-5-5V52.5c0-2.761,2.239-5,5-5h145.617&#10;&#9;&#9;C390.244,47.5,392.482,49.739,392.482,52.5z\"/><g><path style=\"fill: #3ad1e0\" d=\"M197.374,52.5v83.99c0,2.761-2.239,5-5,5h-67.862c-2.761,0-5-2.239-5-5V52.5c0-2.761,2.239-5,5-5&#10;&#9;&#9;&#9;h67.862C195.135,47.5,197.374,49.739,197.374,52.5z\"/><path style=\"fill: #20bfd5\" d=\"M197.372,52.5v83.99c0,2.76-2.24,5-5,5h-30.02c2.76,0,5-2.24,5-5V52.5c0-2.76-2.24-5-5-5h30.02&#10;&#9;&#9;&#9;C195.132,47.5,197.372,49.74,197.372,52.5z\"/><path style=\"\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        \" d=\"&#10;&#9;&#9;&#9;M197.374,52.5v83.99c0,2.761-2.239,5-5,5h-67.862c-2.761,0-5-2.239-5-5V52.5c0-2.761,2.239-5,5-5h67.862&#10;&#9;&#9;&#9;C195.135,47.5,197.374,49.739,197.374,52.5z\"/></g><g><path style=\"fill: #fb54b6\" d=\"M124.512,181.49h262.97c2.761,0,5,2.239,5,5v139.02c0,2.761-2.239,5-5,5h-262.97&#10;&#9;&#9;&#9;c-2.761,0-5-2.239-5-5V186.49C119.512,183.729,121.751,181.49,124.512,181.49z\"/></g><path style=\"fill: #fb9927\" d=\"M154.537,330.51c0-56.038,45.427-101.465,101.465-101.465s101.465,45.427,101.465,101.465H154.537z\"/><path style=\"fill: #f98824\" d=\"M357.462,330.51h-34.36c0-50.18-36.42-91.84-84.28-100.01c5.58-0.95,11.32-1.45,17.18-1.45&#10;&#9;&#9;C312.042,229.05,357.462,274.47,357.462,330.51z\"/><path style=\"\n        fill: none;\n        stroke: #000000;\n        stroke-width: 15;\n        stroke-linecap: round;\n        stroke-linejoin: round;\n        stroke-miterlimit: 10;\n      \" d=\"&#10;&#9;&#9;M154.537,330.51c0-56.038,45.427-101.465,101.465-101.465s101.465,45.427,101.465,101.465\"/><g><path style=\"fill: #fb33a8\" d=\"M392.482,186.49v139.02c0,2.76-2.24,5-5,5h-30.02c2.76,0,5-2.24,5-5V186.49c0-2.76-2.24-5-5-5&#10;&#9;&#9;&#9;h30.02C390.242,181.49,392.482,183.73,392.482,186.49z\"/></g><g><g><path style=\"fill: #fdef63\" d=\"M342.812,247.29c-0.14,0-0.29,0-0.44-0.01c-23.32-1.19-42.66,17.42-42.66,40.5&#10;&#9;&#9;&#9;&#9;c0,0.7,0.02,1.4,0.05,2.11c0.26,4.93-3.74,8.24-7.89,8.24c-2.05,0-4.12-0.79-5.74-2.6c-8.05-8.92-19.1-13.39-30.13-13.39&#10;&#9;&#9;&#9;&#9;s-22.08,4.47-30.13,13.39c-1.62,1.81-3.69,2.6-5.74,2.6c-4.15,0-8.15-3.31-7.89-8.24c0.03-0.71,0.04-1.41,0.04-2.11&#10;&#9;&#9;&#9;&#9;c0-23.08-19.34-41.69-42.65-40.5c-0.15,0.01-0.3,0.01-0.45,0.01c-7.05,0-10.56-8.81-5.2-13.65c8.92-8.05,13.39-19.09,13.39-30.13&#10;&#9;&#9;&#9;&#9;c0-7.68-2.16-15.35-6.49-22.02h170.24c-4.33,6.67-6.49,14.34-6.49,22.02c0,11.04,4.47,22.08,13.39,30.13&#10;&#9;&#9;&#9;&#9;C353.382,238.48,349.872,247.29,342.812,247.29z\"/><g><line id=\"XMLID_00000127012381744132405410000009872483291948348836_\" style=\"\n              fill: none;\n              stroke: #000000;\n              stroke-width: 15;\n              stroke-linecap: round;\n              stroke-linejoin: round;\n              stroke-miterlimit: 10;\n            \" x1=\"279.433\" y1=\"224.908\" x2=\"279.433\" y2=\"224.805\"/><line id=\"XMLID_00000080918978500845250090000017315552773041050031_\" style=\"\n              fill: none;\n              stroke: #000000;\n              stroke-width: 15;\n              stroke-linecap: round;\n              stroke-linejoin: round;\n              stroke-miterlimit: 10;\n            \" x1=\"256.002\" y1=\"224.908\" x2=\"256.002\" y2=\"224.805\"/><line id=\"XMLID_00000140711681861242238370000008769002181148908969_\" style=\"\n              fill: none;\n              stroke: #000000;\n              stroke-width: 15;\n              stroke-linecap: round;\n              stroke-linejoin: round;\n              stroke-miterlimit: 10;\n            \" x1=\"232.572\" y1=\"224.908\" x2=\"232.572\" y2=\"224.805\"/></g><path style=\"fill: #f3d730\" d=\"M342.812,247.3c-0.15,0-0.29,0-0.43-0.02c-23.33-1.19-42.66,17.43-42.66,40.5&#10;&#9;&#9;&#9;&#9;c0,0.7,0.01,1.39,0.05,2.11c0.25,4.93-3.75,8.25-7.89,8.25c-2.06,0-4.13-0.8-5.75-2.61c-6.75-7.46-15.58-11.81-24.76-13.03&#10;&#9;&#9;&#9;&#9;c29.09-14.37,49.1-44.34,49.1-78.98c0-7.61-0.97-14.99-2.78-22.03h33.42c-4.32,6.67-6.48,14.35-6.48,22.02&#10;&#9;&#9;&#9;&#9;c0,11.04,4.47,22.09,13.38,30.14C353.382,238.47,349.882,247.3,342.812,247.3z\"/></g><path style=\"\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        \" d=\"&#10;&#9;&#9;&#9;M341.122,181.49c-4.33,6.67-6.49,14.34-6.49,22.02c0,11.04,4.47,22.08,13.39,30.13c5.36,4.84,1.85,13.65-5.21,13.65&#10;&#9;&#9;&#9;c-0.14,0-0.29,0-0.44-0.01c-23.32-1.19-42.66,17.42-42.66,40.5c0,0.7,0.02,1.4,0.05,2.11c0.26,4.93-3.74,8.24-7.89,8.24&#10;&#9;&#9;&#9;c-2.05,0-4.12-0.79-5.74-2.6c-8.05-8.92-19.1-13.39-30.13-13.39s-22.08,4.47-30.13,13.39c-1.62,1.81-3.69,2.6-5.74,2.6&#10;&#9;&#9;&#9;c-4.15,0-8.15-3.31-7.89-8.24c0.03-0.71,0.04-1.41,0.04-2.11c0-23.08-19.34-41.69-42.65-40.5c-0.15,0.01-0.3,0.01-0.45,0.01&#10;&#9;&#9;&#9;c-7.05,0-10.56-8.81-5.2-13.65c8.92-8.05,13.39-19.09,13.39-30.13c0-7.68-2.16-15.35-6.49-22.02\"/></g><g><path style=\"\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        \" d=\"&#10;&#9;&#9;&#9;M208.726,181.49h-84.213c-2.761,0-5,2.239-5,5v139.02c0,2.761,2.239,5,5,5h262.97c2.761,0,5-2.239,5-5V186.49c0-2.761-2.239-5-5-5&#10;&#9;&#9;&#9;H241.888\"/></g><path style=\"\n        fill: none;\n        stroke: #000000;\n        stroke-width: 15;\n        stroke-linecap: round;\n        stroke-linejoin: round;\n        stroke-miterlimit: 10;\n      \" d=\"&#10;&#9;&#9;M124.512,370.51h125.143c1.706,0,3.295,0.87,4.214,2.308l53.65,83.99c2.126,3.328-0.264,7.692-4.214,7.692H124.512&#10;&#9;&#9;c-2.761,0-5-2.239-5-5v-83.99C119.512,372.749,121.751,370.51,124.512,370.51z\"/><path style=\"\n        fill: none;\n        stroke: #000000;\n        stroke-width: 15;\n        stroke-linecap: round;\n        stroke-linejoin: round;\n        stroke-miterlimit: 10;\n      \" d=\"&#10;&#9;&#9;M392.482,397.976V375.51c0-2.761-2.239-5-5-5h-78.73c-3.949,0-6.34,4.363-4.214,7.692l53.65,83.99&#10;&#9;&#9;c0.919,1.438,2.507,2.308,4.214,2.308h25.08c2.761,0,5-2.239,5-5v-28.362\"/><g><g><g><circle style=\"fill: #d8b2ec\" cx=\"189.8\" cy=\"381.497\" r=\"24.709\"/><circle style=\"\n              fill: none;\n              stroke: #000000;\n              stroke-width: 15;\n              stroke-linecap: round;\n              stroke-linejoin: round;\n              stroke-miterlimit: 10;\n            \" cx=\"189.8\" cy=\"381.497\" r=\"24.709\"/></g></g></g><g><line id=\"XMLID_00000028301319025648580530000009457246182494066313_\" style=\"\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        \" x1=\"314.674\" y1=\"108.185\" x2=\"354.689\" y2=\"108.075\"/><line style=\"\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        \" x1=\"333.566\" y1=\"80.805\" x2=\"354.689\" y2=\"80.805\"/></g></g></svg>";
	//#endregion
	//#region src/ui/icons/category.svg
	var category_default = "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon icon-tabler icon-tabler-category\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" stroke-width=\"2\" stroke=\"currentColor\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M4 4h6v6h-6z\"/><path d=\"M14 4h6v6h-6z\"/><path d=\"M4 14h6v6h-6z\"/><path d=\"M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0\"/></svg>";
	//#endregion
	//#region src/ui/icons/check.svg
	var check_default = "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon icon-tabler icon-tabler-check\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" stroke-width=\"2\" stroke=\"currentColor\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M5 12l5 5l10 -10\"/></svg>";
	//#endregion
	//#region src/ui/icons/chevron-left.svg
	var chevron_left_default = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"icon icon-tabler icons-tabler-outline icon-tabler-chevron-left\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M15 6l-6 6l6 6\"/></svg>";
	//#endregion
	//#region src/ui/icons/chevron-right.svg
	var chevron_right_default = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"icon icon-tabler icons-tabler-outline icon-tabler-chevron-right\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M9 6l6 6l-6 6\"/></svg>";
	//#endregion
	//#region src/ui/icons/circle-check.svg
	var circle_check_default = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"icon icon-tabler icons-tabler-outline icon-tabler-circle-check\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0\"/><path d=\"M9 12l2 2l4 -4\"/></svg>";
	//#endregion
	//#region src/ui/icons/circle-x.svg
	var circle_x_default = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"icon icon-tabler icons-tabler-outline icon-tabler-circle-x\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0\"/><path d=\"M10 10l4 4m0 -4l-4 4\"/></svg>";
	//#endregion
	//#region src/ui/icons/device-floppy.svg
	var device_floppy_default = "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon icon-tabler icon-tabler-device-floppy\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" stroke-width=\"2\" stroke=\"currentColor\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2\"/><path d=\"M12 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\"/><path d=\"M14 4l0 4l-6 0l0 -4\"/></svg>";
	//#endregion
	//#region src/ui/icons/dots-vertical.svg
	var dots_vertical_default = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"icon icon-tabler icons-tabler-outline icon-tabler-dots-vertical\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\"/><path d=\"M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\"/><path d=\"M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\"/></svg>";
	//#endregion
	//#region src/ui/icons/E-reader1-KawaiiFlat.svg
	var E_reader1_KawaiiFlat_default = "<svg id=\"Capa_1\" enable-background=\"new 0 0 512 512\" viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\"><g><g><path d=\"m369.32 512h-226.64c-45.516 0-82.414-36.898-82.414-82.414v-347.172c0-45.516 36.898-82.414 82.414-82.414h226.64c45.516 0 82.414 36.898 82.414 82.414v347.171c0 45.517-36.898 82.415-82.414 82.415z\" fill=\"#636978\"/></g><g><path d=\"m225.095 450.189v-388.378c0-34.137 27.673-61.811 61.81-61.811h-144.225c-45.516 0-82.414 36.898-82.414 82.414v347.171c0 45.516 36.898 82.414 82.414 82.414h144.225c-34.137.001-61.81-27.673-61.81-61.81z\" fill=\"#555a66\"/></g><g><path d=\"m369.32 61.811h-226.64c-11.379 0-20.604 9.225-20.604 20.604v336.869c0 11.379 9.225 20.604 20.604 20.604h226.64c11.379 0 20.604-9.225 20.604-20.604v-336.87c0-11.379-9.225-20.603-20.604-20.603z\" fill=\"#96e8ff\"/></g><g><path d=\"m122.076 82.414v336.869c0 11.379 9.225 20.604 20.604 20.604h82.414v-378.076h-82.414c-11.379 0-20.604 9.224-20.604 20.603z\" fill=\"#80dbff\"/></g><g><path d=\"m256 111.277c-27.66-8.24-55.124-9.125-82.742-2.655-5.835 1.367-9.975 6.555-9.975 12.548v95.771c0 6.566 6.064 11.463 12.479 10.063 23.872-5.21 47.636-4.921 71.52.866 5.731 1.389 11.704 1.389 17.435 0 23.884-5.788 47.648-6.077 71.52-.866 6.415 1.4 12.479-3.497 12.479-10.063 0-40.343 0-55.429 0-95.771 0-5.993-4.139-11.181-9.975-12.548-27.617-6.471-55.081-5.585-82.741 2.655z\" fill=\"#fff\"/></g><g><path d=\"m173.258 108.622c-5.835 1.367-9.975 6.555-9.975 12.548v95.771c0 6.566 6.064 11.463 12.479 10.063 23.872-5.21 47.636-4.921 71.52.866 2.866.694 5.791 1.041 8.717 1.041v-117.634c-27.659-8.24-55.123-9.126-82.741-2.655z\" fill=\"#f5fafc\"/></g><g><path d=\"m205.037 104.432c-10.584.315-21.171 1.704-31.781 4.19-5.834 1.367-9.973 6.56-9.973 12.552v95.761c0 6.547 6.037 11.478 12.432 10.08 23.888-5.221 47.667-4.935 71.567.856 2.866.694 8.717 1.042 8.717 1.042 0-13.231-13.741-21.854-26.952-27.087-14.54-5.759-24.011-19.905-24.011-35.544v-61.85z\" fill=\"#e1f1fa\"/></g><g><g><path d=\"m338.414 289.266h-164.829c-4.142 0-7.5-3.357-7.5-7.5s3.358-7.5 7.5-7.5h164.829c4.143 0 7.5 3.357 7.5 7.5s-3.357 7.5-7.5 7.5z\" fill=\"#19cffc\"/></g><g><path d=\"m338.414 330.473h-164.829c-4.142 0-7.5-3.357-7.5-7.5s3.358-7.5 7.5-7.5h164.829c4.143 0 7.5 3.357 7.5 7.5s-3.357 7.5-7.5 7.5z\" fill=\"#19cffc\"/></g><g><g><path d=\"m191.667 385.134c-4.142 0-7.5-3.357-7.5-7.5v-12.362c0-4.143 3.358-7.5 7.5-7.5s7.5 3.357 7.5 7.5v12.362c0 4.142-3.358 7.5-7.5 7.5z\" fill=\"#495560\"/></g><g><path d=\"m320.333 385.134c-4.143 0-7.5-3.357-7.5-7.5v-12.362c0-4.143 3.357-7.5 7.5-7.5s7.5 3.357 7.5 7.5v12.362c0 4.142-3.357 7.5-7.5 7.5z\" fill=\"#495560\"/></g><g><path d=\"m256 392.493c-8.668 0-16.911-3.754-22.615-10.3-2.721-3.123-2.396-7.86.727-10.582 3.122-2.721 7.86-2.396 10.582.727 2.855 3.276 6.976 5.155 11.307 5.155s8.452-1.879 11.307-5.155c2.723-3.122 7.457-3.447 10.582-.727 3.122 2.722 3.448 7.459.727 10.582-5.706 6.546-13.949 10.3-22.617 10.3z\" fill=\"#495560\"/></g></g></g></g><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/></svg>";
	//#endregion
	//#region src/ui/icons/E-reader1-KawaiiLinealColor.svg
	var E_reader1_KawaiiLinealColor_default = "<svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0px\" y=\"0px\" viewBox=\"0 0 512 512\" style=\"enable-background: new 0 0 512 512\" xml:space=\"preserve\"><g><path style=\"fill: #636978\" d=\"M366,504.5H146c-44.183,0-80-35.817-80-80v-337c0-44.183,35.817-80,80-80h220&#10;&#9;&#9;c44.183,0,80,35.817,80,80v337C446,468.683,410.183,504.5,366,504.5z\"/><path style=\"fill: #555a66\" d=\"M226,444.5v-377c0-33.137,26.863-60,60-60H146c-44.183,0-80,35.817-80,80v337&#10;&#9;&#9;c0,44.183,35.817,80,80,80h140C252.863,504.5,226,477.637,226,444.5z\"/><path style=\"fill: #96e8ff\" d=\"M366,67.5H146c-11.046,0-20,8.954-20,20v327c0,11.046,8.954,20,20,20h220c11.046,0,20-8.954,20-20&#10;&#9;&#9;v-327C386,76.454,377.046,67.5,366,67.5z\"/><path style=\"fill: #80dbff\" d=\"M126,87.5v327c0,11.046,8.954,20,20,20h80v-367h-80C134.954,67.5,126,76.454,126,87.5z\"/><path style=\"fill: #ffffff\" d=\"M256,115.517c-26.85-7.998-53.509-8.858-80.318-2.577c-5.664,1.327-9.682,6.363-9.682,12.18&#10;&#9;&#9;c0,39.161,0,53.805,0,92.965c0,6.374,5.886,11.128,12.113,9.768c23.172-5.058,46.241-4.777,69.425,0.841&#10;&#9;&#9;c5.563,1.348,11.361,1.348,16.924,0c23.184-5.618,46.252-5.898,69.425-0.841c6.227,1.359,12.113-3.395,12.113-9.768&#10;&#9;&#9;c0-39.161,0-53.805,0-92.965c0-5.818-4.018-10.853-9.682-12.18C309.509,106.659,282.85,107.518,256,115.517z\"/><path style=\"fill: #f5fafc\" d=\"M175.682,112.94c-5.664,1.327-9.682,6.363-9.682,12.18c0,39.161,0,53.805,0,92.965&#10;&#9;&#9;c0,6.374,5.886,11.128,12.113,9.769c23.172-5.058,46.241-4.777,69.425,0.841c2.782,0.674,5.622,1.011,8.462,1.011V115.517&#10;&#9;&#9;C229.15,107.518,202.491,106.659,175.682,112.94z\"/><path style=\"fill: #e1f1fa\" d=\"M206.53,108.873c-10.274,0.306-20.551,1.654-30.85,4.067c-5.663,1.327-9.681,6.368-9.681,12.184&#10;&#9;&#9;c0,39.155,0,53.801,0,92.955c0,6.355,5.86,11.141,12.068,9.785c23.188-5.068,46.271-4.791,69.47,0.831&#10;&#9;&#9;c2.782,0.674,8.462,1.011,8.462,1.011c0-12.844-13.338-21.214-26.163-26.293c-14.114-5.59-23.307-19.322-23.307-34.502V108.873z\"/><g><path style=\"\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        \" d=\"&#10;&#9;&#9;&#9;M366,504.5H146c-44.183,0-80-35.817-80-80v-337c0-44.183,35.817-80,80-80h220c44.183,0,80,35.817,80,80v337&#10;&#9;&#9;&#9;C446,468.683,410.183,504.5,366,504.5z\"/><path style=\"\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        \" d=\"&#10;&#9;&#9;&#9;M126,398.01v16.49c0,11.046,8.954,20,20,20h220c11.046,0,20-8.954,20-20v-327c0-11.046-8.954-20-20-20H146&#10;&#9;&#9;&#9;c-11.046,0-20,8.954-20,20v280.51\"/><line style=\"\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        \" x1=\"176\" y1=\"281.01\" x2=\"336\" y2=\"281.01\"/><line style=\"\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        \" x1=\"176\" y1=\"321.01\" x2=\"336\" y2=\"321.01\"/><path style=\"\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        \" d=\"&#10;&#9;&#9;&#9;M286.144,109.53c-10.033,0.992-20.075,2.987-30.144,5.986c-26.85-7.998-53.509-8.858-80.318-2.577&#10;&#9;&#9;&#9;c-5.664,1.327-9.682,6.363-9.682,12.18c0,39.161,0,53.805,0,92.965c0,6.374,5.886,11.128,12.113,9.768&#10;&#9;&#9;&#9;c23.172-5.058,46.241-4.777,69.425,0.841c5.563,1.348,11.361,1.348,16.924,0c23.184-5.618,46.252-5.898,69.425-0.841&#10;&#9;&#9;&#9;c6.227,1.359,12.113-3.395,12.113-9.768c0-39.161,0-53.805,0-92.965c0-5.818-4.018-10.853-9.682-12.18&#10;&#9;&#9;&#9;c-6.702-1.57-13.395-2.694-20.084-3.372\"/><line style=\"\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        \" x1=\"256\" y1=\"115.517\" x2=\"256\" y2=\"229.706\"/><g><line style=\"\n            fill: none;\n            stroke: #000000;\n            stroke-width: 15;\n            stroke-linecap: round;\n            stroke-linejoin: round;\n            stroke-miterlimit: 10;\n          \" x1=\"193.551\" y1=\"362.07\" x2=\"193.551\" y2=\"374.07\"/><line style=\"\n            fill: none;\n            stroke: #000000;\n            stroke-width: 15;\n            stroke-linecap: round;\n            stroke-linejoin: round;\n            stroke-miterlimit: 10;\n          \" x1=\"318.449\" y1=\"362.07\" x2=\"318.449\" y2=\"374.07\"/><path style=\"\n            fill: none;\n            stroke: #000000;\n            stroke-width: 15;\n            stroke-linecap: round;\n            stroke-linejoin: round;\n            stroke-miterlimit: 10;\n          \" d=\"&#10;&#9;&#9;&#9;&#9;M239.536,373.713c4.003,4.594,9.892,7.501,16.464,7.501c6.572,0,12.461-2.907,16.464-7.501\"/></g></g></g><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/></svg>";
	//#endregion
	//#region src/ui/icons/E-reader2-KawaiiFlat.svg
	var E_reader2_KawaiiFlat_default = "<svg id=\"Capa_1\" enable-background=\"new 0 0 512 512\" height=\"512\" viewBox=\"0 0 512 512\" width=\"512\" xmlns=\"http://www.w3.org/2000/svg\"><g><path d=\"m449.945 61.818v388.363c0 34.144-27.684 61.818-61.818 61.818h-264.254c-34.134 0-61.818-27.674-61.818-61.818v-388.363c0-34.144 27.684-61.818 61.818-61.818h264.253c34.135 0 61.819 27.674 61.819 61.818z\" fill=\"#808fa4\"/><path d=\"m188.464 512h-64.59c-34.134 0-61.818-27.674-61.818-61.818v-388.364c-.001-34.144 27.683-61.818 61.817-61.818h50.341c-7.367 6.574-15.218 18.092-15.218 37.359v423.909c.001 0-.215 30.24 29.468 50.732z\" fill=\"#64768e\"/><path d=\"m418.912 61.942v147.509l-194.274 13.033 77.912-191.451h85.453c17.072 0 30.909 13.837 30.909 30.909z\" fill=\"#c5ced6\"/><path d=\"m271.516 31.033-46.878 191.451-65.641-6.501-65.909-6.532 20.843-140.421 45.365-37.997z\" fill=\"#abb6c4\"/><path d=\"m159.296 31.033c-.196 2.009-.299 4.121-.299 6.326v178.624l-65.909-6.532v-147.509c0-17.072 13.837-30.909 30.909-30.909z\" fill=\"#9ca9ba\"/><path d=\"m313.676 222.484-18.885 196.428h-135.794l-51.732-35.968-14.177-142.46 65.909-5.379z\" fill=\"#c5ced6\"/><path d=\"m93.088 240.484 65.909-5.378v183.807h-35c-17.072 0-30.909-13.837-30.909-30.909z\" fill=\"#abb6c4\"/><path d=\"m418.912 240.484v147.519c0 17.072-13.837 30.909-30.909 30.909h-62.19l-12.137-196.428z\" fill=\"#64768e\"/><path d=\"m287.487 480.971h-62.974c-8.317 0-15.059-6.742-15.059-15.059v-.913c0-8.317 6.742-15.059 15.059-15.059h62.974c8.317 0 15.059 6.742 15.059 15.059v.913c0 8.316-6.743 15.059-15.059 15.059z\" fill=\"#64768e\"/><path d=\"m418.912 209.451v31.033h-77.644c-8.531 0-15.455 6.924-15.455 15.455v162.974h-31.022v-162.975c0-8.531-6.923-15.455-15.455-15.455h-120.34l-13.147-13.27 13.147-17.763h44.138c6.718 0 12.673-4.348 14.723-10.746l53.658-167.672h31.033l-50.65 158.255c-3.183 9.974 4.255 20.163 14.723 20.163h152.291z\" fill=\"#e8ecf9\"/><path d=\"m93.088 209.451h65.909v31.033h-65.909z\" fill=\"#d7ddf5\"/><g><g><path d=\"m129.509 332.474c-4.268 0-7.727-3.459-7.727-7.727v-12.364c0-4.268 3.459-7.727 7.727-7.727s7.727 3.459 7.727 7.727v12.364c0 4.268-3.459 7.727-7.727 7.727z\" fill=\"#495560\"/></g><g><path d=\"m258.191 332.474c-4.268 0-7.727-3.459-7.727-7.727v-12.364c0-4.268 3.459-7.727 7.727-7.727s7.727 3.459 7.727 7.727v12.364c.001 4.268-3.458 7.727-7.727 7.727z\" fill=\"#495560\"/></g><path d=\"m223.825 324.391c-4.268 0-7.727 3.459-7.727 7.727 0 3.952-3.215 7.167-7.166 7.167-3.952 0-7.167-3.215-7.167-7.167 0-4.268-3.459-7.727-7.727-7.727s-7.727 3.459-7.727 7.727c0 3.952-3.215 7.167-7.166 7.167-3.952 0-7.167-3.215-7.167-7.167 0-4.268-3.459-7.727-7.727-7.727s-7.727 3.459-7.727 7.727c0 12.473 10.148 22.621 22.621 22.621 5.7 0 10.911-2.124 14.894-5.616 3.982 3.492 9.193 5.616 14.894 5.616 12.473 0 22.62-10.148 22.62-22.621-.001-4.268-3.46-7.727-7.728-7.727z\" fill=\"#495560\"/></g></g></svg>";
	//#endregion
	//#region src/ui/icons/E-reader2-KawaiiLinealColor.svg
	var E_reader2_KawaiiLinealColor_default = "<?xml version=\"1.0\" encoding=\"UTF-8\"?><svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" id=\"Capa_1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 511.941 511.941\" style=\"enable-background: new 0 0 511.941 511.941\" xml:space=\"preserve\" width=\"512\" height=\"512\"><g><g><path style=\"fill: #808fa4\" d=\"M444.211,67.5v376.94c0,33.14-26.87,60-60,60H127.73c-33.13,0-60-26.86-60-60V67.5&#10;&#9;&#9;&#9;c0-33.14,26.87-60,60-60h256.48C417.341,7.5,444.211,34.361,444.211,67.5z\"/><path style=\"fill: #64768e\" d=\"M190.421,504.44h-62.69c-33.13,0-60-26.86-60-60V67.5c0-33.14,26.87-60,60-60h48.86&#10;&#9;&#9;&#9;c-7.15,6.38-14.77,17.56-14.77,36.26v411.44C161.821,455.201,161.611,484.551,190.421,504.44z\"/><path style=\"fill: #c5ced6\" d=\"M414.091,67.62v143.17l-188.56,12.65l75.62-185.82h82.94&#10;&#9;&#9;&#9;C400.661,37.62,414.091,51.051,414.091,67.62z\"/><polygon style=\"fill: #abb6c4\" points=\"271.031,37.62 225.531,223.44 161.821,217.131 97.85,210.79 118.08,74.5 162.111,37.62 &#9;&#9;&#10;&#9;&#9;&#9;\"/><path style=\"fill: #9ca9ba\" d=\"M162.111,37.62c-0.19,1.95-0.29,4-0.29,6.14v173.37l-63.97-6.34V67.62c0-16.57,13.43-30,30-30&#10;&#9;&#9;&#9;H162.111z\"/><polygon style=\"fill: #c5ced6\" points=\"311.951,223.44 293.62,414.091 161.821,414.091 111.611,379.181 97.85,240.911 &#10;&#9;&#9;&#9;161.821,235.69 &#9;&#9;\"/><path style=\"fill: #abb6c4\" d=\"M97.85,240.911l63.97-5.22v178.4h-33.97c-16.57,0-30-13.43-30-30V240.911z\"/><path style=\"fill: #64768e\" d=\"M414.091,240.911v143.18c0,16.57-13.43,30-30,30h-60.36l-11.78-190.65L414.091,240.911z\"/><path style=\"fill: #64768e\" d=\"M286.088,474.324h-60.235c-8.317,0-15.059-6.742-15.059-15.059v0&#10;&#9;&#9;&#9;c0-8.317,6.742-15.059,15.059-15.059h60.235c8.317,0,15.059,6.742,15.059,15.059v0&#10;&#9;&#9;&#9;C301.147,467.581,294.405,474.324,286.088,474.324z\"/><path style=\"fill: #e8ecf9\" d=\"M414.091,210.79v30.12h-75.36c-8.28,0-15,6.72-15,15v158.18h-30.11v-158.18c0-8.28-6.72-15-15-15&#10;&#9;&#9;&#9;h-116.8l-12.76-12.88l12.76-17.24h42.84c6.52,0,12.3-4.22,14.29-10.43l52.08-162.74h30.12l-49.16,153.6&#10;&#9;&#9;&#9;c-3.09,9.68,4.13,19.57,14.29,19.57H414.091z\"/><rect x=\"97.85\" y=\"210.79\" style=\"fill: #d7ddf5\" width=\"63.97\" height=\"30.12\"/></g><g><path style=\"\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        \" d=\"&#10;&#9;&#9;&#9;M384.206,504.441H127.735c-33.137,0-60-26.863-60-60V67.5c0-33.137,26.863-60,60-60h256.471c33.137,0,60,26.863,60,60v376.941&#10;&#9;&#9;&#9;C444.206,477.578,417.343,504.441,384.206,504.441z\"/><path style=\"\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        \" d=\"&#10;&#9;&#9;&#9;M384.088,414.088H127.853c-16.569,0-30-13.431-30-30V67.618c0-16.569,13.431-30,30-30h256.235c16.569,0,30,13.431,30,30v316.471&#10;&#9;&#9;&#9;C414.088,400.657,400.657,414.088,384.088,414.088z\"/><path style=\"\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        \" d=\"&#10;&#9;&#9;&#9;M286.088,474.324h-60.235c-8.317,0-15.059-6.742-15.059-15.059c0-8.317,6.742-15.059,15.059-15.059h60.235&#10;&#9;&#9;&#9;c8.317,0,15.059,6.742,15.059,15.059C301.147,467.581,294.405,474.324,286.088,474.324z\"/><path style=\"\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        \" d=\"&#10;&#9;&#9;&#9;M100.85,210.79h103.811c6.523,0,12.298-4.215,14.286-10.428L270.56,39.09\"/><path style=\"\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        \" d=\"&#10;&#9;&#9;&#9;M293.62,410.091v-154.18c0-8.284-6.716-15-15-15H100.85\"/><path style=\"\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        \" d=\"&#10;&#9;&#9;&#9;M411.091,240.911h-72.36c-8.284,0-15,6.716-15,15v154.18\"/><path style=\"\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        \" d=\"&#10;&#9;&#9;&#9;M300.616,39.291l-48.622,151.927c-3.098,9.679,4.124,19.572,14.286,19.572h144.81\"/><g><line style=\"\n            fill: none;\n            stroke: #000000;\n            stroke-width: 15;\n            stroke-linecap: round;\n            stroke-linejoin: round;\n            stroke-miterlimit: 10;\n          \" x1=\"133.2\" y1=\"310.695\" x2=\"133.2\" y2=\"322.695\"/><line style=\"\n            fill: none;\n            stroke: #000000;\n            stroke-width: 15;\n            stroke-linecap: round;\n            stroke-linejoin: round;\n            stroke-miterlimit: 10;\n          \" x1=\"258.098\" y1=\"310.695\" x2=\"258.098\" y2=\"322.695\"/><g><path style=\"\n              fill: none;\n              stroke: #000000;\n              stroke-width: 15;\n              stroke-linecap: round;\n              stroke-miterlimit: 10;\n            \" d=\"M195.831,329.85&#10;&#9;&#9;&#9;&#9;&#9;c0,7.984-6.472,14.456-14.456,14.456s-14.456-6.472-14.456-14.456\"/><path style=\"\n              fill: none;\n              stroke: #000000;\n              stroke-width: 15;\n              stroke-linecap: round;\n              stroke-miterlimit: 10;\n            \" d=\"M224.742,329.85&#10;&#9;&#9;&#9;&#9;&#9;c0,7.984-6.472,14.456-14.456,14.456s-14.456-6.472-14.456-14.456\"/></g></g></g></g></svg>";
	//#endregion
	//#region src/ui/icons/external-link.svg
	var external_link_default = "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon icon-tabler icon-tabler-external-link\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" stroke-width=\"2\" stroke=\"currentColor\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6\"/><path d=\"M11 13l9 -9\"/><path d=\"M15 4h5v5\"/></svg>";
	//#endregion
	//#region src/ui/icons/eye.svg
	var eye_default = "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon icon-tabler icon-tabler-eye\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" stroke-width=\"2\" stroke=\"currentColor\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0\"/><path d=\"M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6\"/></svg>";
	//#endregion
	//#region src/ui/icons/eye-off.svg
	var eye_off_default = "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon icon-tabler icon-tabler-eye-off\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" stroke-width=\"2\" stroke=\"currentColor\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M10.585 10.587a2 2 0 0 0 2.829 2.828\"/><path d=\"M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87\"/><path d=\"M3 3l18 18\"/></svg>";
	//#endregion
	//#region src/ui/icons/file-download.svg
	var file_download_default = "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon icon-tabler icon-tabler-file-download\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" stroke-width=\"2\" stroke=\"currentColor\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M14 3v4a1 1 0 0 0 1 1h4\"/><path d=\"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z\"/><path d=\"M12 17v-6\"/><path d=\"M9.5 14.5l2.5 2.5l2.5 -2.5\"/></svg>";
	//#endregion
	//#region src/ui/icons/file-percent.svg
	var file_percent_default = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"icon icon-tabler icons-tabler-outline icon-tabler-file-percent\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M10 17l4 -4\"/><path d=\"M14 3v4a1 1 0 0 0 1 1h4\"/><path d=\"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z\"/><path d=\"M10 13h.01\"/><path d=\"M14 17h.01\"/></svg>";
	//#endregion
	//#region src/ui/icons/folder-open.svg
	var folder_open_default = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"icon icon-tabler icons-tabler-outline icon-tabler-folder-open\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\" /><path d=\"M5 19l2.757 -7.351a1 1 0 0 1 .936 -.649h12.307a1 1 0 0 1 .986 1.164l-.996 5.211a2 2 0 0 1 -1.964 1.625h-14.026a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2h4l3 3h7a2 2 0 0 1 2 2v2\" /></svg>";
	//#endregion
	//#region src/ui/icons/hand-click.svg
	var hand_click_default = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"icon icon-tabler icons-tabler-outline icon-tabler-hand-click\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M8 13v-8.5a1.5 1.5 0 0 1 3 0v7.5\"/><path d=\"M11 11.5v-2a1.5 1.5 0 0 1 3 0v2.5\"/><path d=\"M14 10.5a1.5 1.5 0 0 1 3 0v1.5\"/><path d=\"M17 11.5a1.5 1.5 0 0 1 3 0v4.5a6 6 0 0 1 -6 6h-2h.208a6 6 0 0 1 -5.012 -2.7l-.196 -.3c-.312 -.479 -1.407 -2.388 -3.286 -5.728a1.5 1.5 0 0 1 .536 -2.022a1.867 1.867 0 0 1 2.28 .28l1.47 1.47\"/><path d=\"M5 3l-1 -1\"/><path d=\"M4 7h-1\"/><path d=\"M14 3l1 -1\"/><path d=\"M15 6h1\"/></svg>";
	//#endregion
	//#region src/ui/icons/help.svg
	var help_default = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"icon icon-tabler icons-tabler-outline icon-tabler-help\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0\"/><path d=\"M12 17l0 .01\"/><path d=\"M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4\"/></svg>";
	//#endregion
	//#region src/ui/icons/info-circle.svg
	var info_circle_default = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"icon icon-tabler icons-tabler-outline icon-tabler-info-circle\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0\"/><path d=\"M12 9h.01\"/><path d=\"M11 12h1v4h1\"/></svg>";
	//#endregion
	//#region src/ui/icons/keyboard.svg
	var keyboard_default = "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon icon-tabler icon-tabler-keyboard\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" stroke-width=\"2\" stroke=\"currentColor\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M2 6m0 2a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-16a2 2 0 0 1 -2 -2z\"/><path d=\"M6 10l0 .01\"/><path d=\"M10 10l0 .01\"/><path d=\"M14 10l0 .01\"/><path d=\"M18 10l0 .01\"/><path d=\"M6 14l0 .01\"/><path d=\"M18 14l0 .01\"/><path d=\"M10 14l4 .01\"/></svg>";
	//#endregion
	//#region src/ui/icons/layout-bottombar.svg
	var layout_bottombar_default = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"icon icon-tabler icons-tabler-outline icon-tabler-layout-bottombar\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z\"/><path d=\"M4 15l16 0\"/></svg>";
	//#endregion
	//#region src/ui/icons/layout-bottombar-inactive.svg
	var layout_bottombar_inactive_default = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"icon icon-tabler icons-tabler-outline icon-tabler-layout-bottombar-inactive\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z\"/><path d=\"M4 15h1\"/><path d=\"M19 15h1\"/><path d=\"M9 15h1\"/><path d=\"M14 15h1\"/></svg>";
	//#endregion
	//#region src/ui/icons/layout-dashboard.svg
	var layout_dashboard_default = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"icon icon-tabler icons-tabler-outline icon-tabler-layout-dashboard\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\" /><path d=\"M5 4h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1\" /><path d=\"M5 16h4a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1\" /><path d=\"M15 12h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1\" /><path d=\"M15 4h4a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1\" /></svg>";
	//#endregion
	//#region src/ui/icons/layout-sidebar.svg
	var layout_sidebar_default = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"icon icon-tabler icons-tabler-outline icon-tabler-layout-sidebar\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z\"/><path d=\"M9 4l0 16\"/></svg>";
	//#endregion
	//#region src/ui/icons/layout-sidebar-inactive.svg
	var layout_sidebar_inactive_default = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"icon icon-tabler icons-tabler-outline icon-tabler-layout-sidebar-inactive\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z\"/><path d=\"M9 4v1\"/><path d=\"M9 9v1\"/><path d=\"M9 14v1\"/><path d=\"M9 19v1\"/></svg>";
	//#endregion
	//#region src/ui/icons/layout-sidebar-right.svg
	var layout_sidebar_right_default = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"icon icon-tabler icons-tabler-outline icon-tabler-layout-sidebar-right\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z\"/><path d=\"M15 4l0 16\"/></svg>";
	//#endregion
	//#region src/ui/icons/layout-sidebar-right-inactive.svg
	var layout_sidebar_right_inactive_default = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"icon icon-tabler icons-tabler-outline icon-tabler-layout-sidebar-right-inactive\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z\"/><path d=\"M15 4v1\"/><path d=\"M15 9v1\"/><path d=\"M15 14v1\"/><path d=\"M15 19v1\"/></svg>";
	//#endregion
	//#region src/ui/icons/list-numbers.svg
	var list_numbers_default = "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon icon-tabler icon-tabler-list-numbers\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" stroke-width=\"2\" stroke=\"currentColor\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M11 6h9\"/><path d=\"M11 12h9\"/><path d=\"M12 18h8\"/><path d=\"M4 16a2 2 0 1 1 4 0c0 .591 -.5 1 -1 1.5l-3 2.5h4\"/><path d=\"M6 10v-6l-2 2\"/></svg>";
	//#endregion
	//#region src/ui/icons/loader-2.svg
	var loader_2_default = "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon icon-tabler icon-tabler-loader-2\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" stroke-width=\"2\" stroke=\"currentColor\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M12 3a9 9 0 1 0 9 9\"/></svg>";
	//#endregion
	//#region src/ui/icons/location-cog.svg
	var location_cog_default = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"icon icon-tabler icons-tabler-outline icon-tabler-location-cog\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M12 18l-2 -4l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5l-3.14 8.697\"/><path d=\"M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\"/><path d=\"M19.001 15.5v1.5\"/><path d=\"M19.001 21v1.5\"/><path d=\"M22.032 17.25l-1.299 .75\"/><path d=\"M17.27 20l-1.3 .75\"/><path d=\"M15.97 17.25l1.3 .75\"/><path d=\"M20.733 20l1.3 .75\"/></svg>";
	//#endregion
	//#region src/ui/icons/menu-2.svg
	var menu_2_default = "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon icon-tabler icon-tabler-menu-2\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" stroke-width=\"2\" stroke=\"currentColor\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M4 6l16 0\"/><path d=\"M4 12l16 0\"/><path d=\"M4 18l16 0\"/></svg>";
	//#endregion
	//#region src/ui/icons/menu-deep.svg
	var menu_deep_default = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"icon icon-tabler icons-tabler-outline icon-tabler-menu-deep\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M4 6h16\"/><path d=\"M7 12h13\"/><path d=\"M10 18h10\"/></svg>";
	//#endregion
	//#region src/ui/icons/message.svg
	var message_default = "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon icon-tabler icon-tabler-message\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" stroke-width=\"2\" stroke=\"currentColor\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M8 9h8\"/><path d=\"M8 13h6\"/><path d=\"M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z\"/></svg>";
	//#endregion
	//#region src/ui/icons/moon.svg
	var moon_default = "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon icon-tabler icon-tabler-moon\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" stroke-width=\"2\" stroke=\"currentColor\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z\"/></svg>";
	//#endregion
	//#region src/ui/icons/Page-KawaiiFlat.svg
	var Page_KawaiiFlat_default = "<svg id=\"Capa_1\" enable-background=\"new 0 0 512 512\" height=\"512\" viewBox=\"0 0 512 512\" width=\"512\" xmlns=\"http://www.w3.org/2000/svg\"><g><path d=\"m449.945 61.818v388.363c0 34.144-27.684 61.818-61.818 61.818h-264.253c-34.134 0-61.818-27.674-61.818-61.818v-388.363c-.001-34.144 27.684-61.818 61.818-61.818h264.253c34.133 0 61.818 27.674 61.818 61.818z\" fill=\"#e8ecf9\"/><path d=\"m207.555 512h-83.681c-34.134 0-61.818-27.674-61.818-61.818v-388.364c-.001-34.144 27.684-61.818 61.818-61.818h79.993c-11.292 3.421-26.809 12.446-26.809 36.256v436.87c0 26.479 19.854 35.783 30.497 38.874z\" fill=\"#d7ddf5\"/><path d=\"m403.396 62.004v139.751c0 8.541-6.924 15.455-15.455 15.455h-210.883l-51.556-21.729v-124.699l51.556-24.233h210.883c8.531 0 15.455 6.913 15.455 15.455z\" fill=\"#c5ced6\"/><path d=\"m177.058 46.549v170.66h-52.999c-8.531 0-15.455-6.913-15.455-15.455v-139.75c0-8.541 6.924-15.455 15.455-15.455z\" fill=\"#abb6c4\"/><path d=\"m217.209 279.213v8.036l-40.151 41.769-8.809 9.17-59.644 4.307 12.333-53.195 56.121-25.541h24.696c8.541-.001 15.454 6.923 15.454 15.454z\" fill=\"#c5ced6\"/><path d=\"m124.059 263.758h52.999v65.26l-8.809 9.17-59.644 4.307v-63.281c-.001-8.532 6.923-15.456 15.454-15.456z\" fill=\"#abb6c4\"/><path d=\"m217.209 334.365v60.407l-40.151 43.438-4.204 4.543-64.25-8.634 8.573-21.379-8.573-26.551 50.743-51.824z\" fill=\"#c5ced6\"/><path d=\"m177.058 334.365v103.845l-4.204 4.543-64.25-8.634v-47.93l50.743-51.824z\" fill=\"#abb6c4\"/><path d=\"m217.209 287.249v47.116c-2.823 1.731-5.121 4.368-6.388 7.696-2.359 6.182-8.253 9.984-14.496 9.984-1.844 0-3.719-.33-5.543-1.03-.546-.206-1.092-.381-1.638-.525-1.298-.34-2.596-.505-3.895-.505-2.916 0-5.749.824-8.191 2.339l-11.045-14.888 11.045-32.29c1.03.165 2.061.433 3.07.824.587.227 1.175.412 1.772.556 1.247.319 2.514.474 3.771.474 6.244 0 12.137-3.802 14.496-9.984.082-.206.165-.412.258-.608 2.493-5.821 8.191-9.376 14.239-9.376.845.001 1.69.073 2.545.217z\" fill=\"#808fa4\"/><path d=\"m177.058 305.146v47.178c-2.782 1.731-5.049 4.348-6.305 7.645-.196.505-.402.989-.649 1.453-2.669 5.316-8.108 8.521-13.847 8.521-.309 0-.618-.01-.927-.031-1.535-.093-3.091-.412-4.605-.999-1.824-.701-3.699-1.03-5.543-1.03-6.244 0-12.137 3.802-14.496 9.984s-8.242 9.984-14.496 9.984c-1.834 0-3.709-.33-5.533-1.03-.68-.258-1.36-.474-2.05-.628v-43.695c5.038-1.02 9.458-4.523 11.426-9.674 2.359-6.182 8.253-9.984 14.496-9.984 1.844 0 3.709.33 5.533 1.03 1.824.701 3.709 1.03 5.553 1.03 1.113 0 2.226-.124 3.297-.361 2.895-.629 5.574-2.081 7.686-4.193 1.494-1.494 2.699-3.318 3.503-5.419 2.359-6.182 8.242-9.984 14.496-9.984.813-.003 1.637.058 2.461.203z\" fill=\"#64768e\"/><path d=\"m217.209 394.772v55.224c0 8.541-6.913 15.455-15.455 15.455h-24.696l-15.516-24.284 15.516-28.426c1.885-1.618 3.4-3.719 4.348-6.202 2.359-6.172 8.253-9.973 14.496-9.973 1.844 0 3.719.33 5.543 1.03 1.824.701 3.689 1.03 5.533 1.03 1.175 0 2.349-.134 3.472-.402h.01c2.494-.578 4.822-1.762 6.749-3.452z\" fill=\"#808fa4\"/><path d=\"m166.91 416.522c3.74 0 7.346-1.36 10.148-3.781v52.71h-52.999c-8.531 0-15.455-6.913-15.455-15.455v-15.877c3.802-1.968 8.397-2.37 12.704-.721 1.824.701 3.699 1.03 5.543 1.03 6.244 0 12.137-3.802 14.496-9.984s8.242-9.984 14.496-9.984c1.834 0 3.709.33 5.533 1.03 1.824.702 3.7 1.032 5.534 1.032z\" fill=\"#64768e\"/><path d=\"m403.396 351.612v98.384c0 8.541-6.924 15.455-15.455 15.455h-69.051l-55.132-93.686v-92.552c0-8.531 6.924-15.455 15.455-15.455h62.91z\" fill=\"#808fa4\"/><path d=\"m380.121 333.572-61.231 131.879h-39.677c-8.531 0-15.455-6.913-15.455-15.455v-78.231l77.572-53.699z\" fill=\"#abb6c4\"/><path d=\"m403.396 279.213v72.4c-7.058 3.359-14.95 5.234-23.275 5.234-3.534 0-6.996-.34-10.344-.989-17.34-3.338-31.744-14.929-38.956-30.518-3.215-6.924-5.007-14.651-5.007-22.79 0-15.197 6.244-28.941 16.31-38.791h45.818c8.53-.001 15.454 6.923 15.454 15.454z\" fill=\"#c5ced6\"/><g><g><ellipse cx=\"172.744\" cy=\"147.233\" fill=\"#fff\" rx=\"30.72\" ry=\"24.464\"/><ellipse cx=\"339.256\" cy=\"147.233\" fill=\"#fff\" rx=\"30.72\" ry=\"24.464\"/><path d=\"m285.787 117.781c-4.268 0-7.727 3.46-7.727 7.727 0 3.952-3.215 7.166-7.166 7.166s-7.166-3.215-7.166-7.166c0-4.268-3.46-7.727-7.727-7.727-4.268 0-7.727 3.46-7.727 7.727 0 3.952-3.215 7.166-7.166 7.166-3.952 0-7.166-3.215-7.166-7.166 0-4.268-3.46-7.727-7.727-7.727-4.268 0-7.727 3.46-7.727 7.727 0 12.473 10.148 22.621 22.621 22.621 5.701 0 10.911-2.124 14.894-5.616 3.982 3.492 9.193 5.616 14.894 5.616 12.473 0 22.621-10.148 22.621-22.621-.003-4.267-3.463-7.727-7.731-7.727z\" fill=\"#495560\"/></g><g><path d=\"m206.795 121.062c-4.268 0-7.727-3.46-7.727-7.727 0-3.559-2.896-6.454-6.455-6.454s-6.455 2.895-6.455 6.454c0 4.268-3.46 7.727-7.727 7.727-4.268 0-7.727-3.46-7.727-7.727 0-12.081 9.829-21.909 21.91-21.909s21.91 9.828 21.91 21.909c-.001 4.267-3.461 7.727-7.729 7.727z\" fill=\"#495560\"/></g><g><path d=\"m333.569 121.062c-4.268 0-7.727-3.46-7.727-7.727 0-3.559-2.896-6.454-6.455-6.454s-6.455 2.895-6.455 6.454c0 4.268-3.46 7.727-7.727 7.727-4.268 0-7.727-3.46-7.727-7.727 0-12.081 9.829-21.909 21.91-21.909s21.91 9.828 21.91 21.909c-.001 4.267-3.461 7.727-7.729 7.727z\" fill=\"#495560\"/></g></g></g></svg>";
	//#endregion
	//#region src/ui/icons/Page-KawaiiLinealColor.svg
	var Page_KawaiiLinealColor_default = "<?xml version=\"1.0\" encoding=\"UTF-8\"?><svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" id=\"Capa_1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 511.94 511.94\" style=\"enable-background: new 0 0 511.94 511.94\" xml:space=\"preserve\" width=\"512\" height=\"512\"><g><g><path style=\"fill: #e8ecf9\" d=\"M444.21,67.5v376.94c0,33.14-26.87,60-60,60H127.73c-33.13,0-60-26.86-60-60V67.5&#10;&#9;&#9;&#9;c0-33.14,26.87-60,60-60h256.48C417.34,7.5,444.21,34.36,444.21,67.5z\"/><path style=\"fill: #d7ddf5\" d=\"M208.95,504.44h-81.22c-33.13,0-60-26.86-60-60V67.5c0-33.14,26.87-60,60-60h77.64&#10;&#9;&#9;&#9;c-10.96,3.32-26.02,12.08-26.02,35.19v424.02C179.35,492.41,198.62,501.44,208.95,504.44z\"/><path style=\"fill: #c5ced6\" d=\"M399.03,67.68v135.64c0,8.29-6.72,15-15,15H179.35l-50.04-21.09V76.2l50.04-23.52h204.68&#10;&#9;&#9;&#9;C392.31,52.68,399.03,59.39,399.03,67.68z\"/><path style=\"fill: #abb6c4\" d=\"M179.35,52.68v165.64h-51.44c-8.28,0-15-6.71-15-15V67.68c0-8.29,6.72-15,15-15H179.35z\"/><path style=\"fill: #c5ced6\" d=\"M218.32,278.5v7.8l-38.97,40.54l-8.55,8.9l-57.89,4.18l11.97-51.63l54.47-24.79h23.97&#10;&#9;&#9;&#9;C211.61,263.5,218.32,270.22,218.32,278.5z\"/><path style=\"fill: #abb6c4\" d=\"M127.91,263.5h51.44v63.34l-8.55,8.9l-57.89,4.18V278.5C112.91,270.22,119.63,263.5,127.91,263.5z\"/><polygon style=\"fill: #c5ced6\" points=\"218.32,332.03 218.32,390.66 179.35,432.82 175.27,437.23 112.91,428.85 121.23,408.1 &#10;&#9;&#9;&#9;112.91,382.33 162.16,332.03 &#9;&#9;\"/><polygon style=\"fill: #abb6c4\" points=\"179.35,332.03 179.35,432.82 175.27,437.23 112.91,428.85 112.91,382.33 162.16,332.03 &#9;&#9;&#10;&#9;&#9;&#9;\"/><path style=\"fill: #808fa4\" d=\"M218.32,286.3v45.73c-2.74,1.68-4.97,4.24-6.2,7.47c-2.29,6-8.01,9.69-14.07,9.69&#10;&#9;&#9;&#9;c-1.79,0-3.61-0.32-5.38-1c-0.53-0.2-1.06-0.37-1.59-0.51c-1.26-0.33-2.52-0.49-3.78-0.49c-2.83,0-5.58,0.8-7.95,2.27&#10;&#9;&#9;&#9;l-10.72-14.45l10.72-31.34c1,0.16,2,0.42,2.98,0.8c0.57,0.22,1.14,0.4,1.72,0.54c1.21,0.31,2.44,0.46,3.66,0.46&#10;&#9;&#9;&#9;c6.06,0,11.78-3.69,14.07-9.69c0.08-0.2,0.16-0.4,0.25-0.59c2.42-5.65,7.95-9.1,13.82-9.1&#10;&#9;&#9;&#9;C216.67,286.09,217.49,286.16,218.32,286.3z\"/><path style=\"fill: #64768e\" d=\"M179.35,303.67v45.79c-2.7,1.68-4.9,4.22-6.12,7.42c-0.19,0.49-0.39,0.96-0.63,1.41&#10;&#9;&#9;&#9;c-2.59,5.16-7.87,8.27-13.44,8.27c-0.3,0-0.6-0.01-0.9-0.03c-1.49-0.09-3-0.4-4.47-0.97c-1.77-0.68-3.59-1-5.38-1&#10;&#9;&#9;&#9;c-6.06,0-11.78,3.69-14.07,9.69s-8,9.69-14.07,9.69c-1.78,0-3.6-0.32-5.37-1c-0.66-0.25-1.32-0.46-1.99-0.61v-42.41&#10;&#9;&#9;&#9;c4.89-0.99,9.18-4.39,11.09-9.39c2.29-6,8.01-9.69,14.07-9.69c1.79,0,3.6,0.32,5.37,1c1.77,0.68,3.6,1,5.39,1&#10;&#9;&#9;&#9;c1.08,0,2.16-0.12,3.2-0.35c2.81-0.61,5.41-2.02,7.46-4.07c1.45-1.45,2.62-3.22,3.4-5.26c2.29-6,8-9.69,14.07-9.69&#10;&#9;&#9;&#9;C177.75,303.47,178.55,303.53,179.35,303.67z\"/><path style=\"fill: #808fa4\" d=\"M218.32,390.66v53.6c0,8.29-6.71,15-15,15h-23.97l-15.06-23.57l15.06-27.59&#10;&#9;&#9;&#9;c1.83-1.57,3.3-3.61,4.22-6.02c2.29-5.99,8.01-9.68,14.07-9.68c1.79,0,3.61,0.32,5.38,1c1.77,0.68,3.58,1,5.37,1&#10;&#9;&#9;&#9;c1.14,0,2.28-0.13,3.37-0.39h0.01C214.19,393.45,216.45,392.3,218.32,390.66z\"/><path style=\"fill: #64768e\" d=\"M169.5,411.77c3.63,0,7.13-1.32,9.85-3.67v51.16h-51.44c-8.28,0-15-6.71-15-15v-15.41&#10;&#9;&#9;&#9;c3.69-1.91,8.15-2.3,12.33-0.7c1.77,0.68,3.59,1,5.38,1c6.06,0,11.78-3.69,14.07-9.69c2.29-6,8-9.69,14.07-9.69&#10;&#9;&#9;&#9;c1.78,0,3.6,0.32,5.37,1C165.9,411.45,167.72,411.77,169.5,411.77z\"/><path style=\"fill: #808fa4\" d=\"M399.03,348.77v95.49c0,8.29-6.72,15-15,15h-67.02l-53.51-90.93V278.5c0-8.28,6.72-15,15-15h61.06&#10;&#9;&#9;&#9;L399.03,348.77z\"/><path style=\"fill: #abb6c4\" d=\"M376.44,331.26l-59.43,128H278.5c-8.28,0-15-6.71-15-15v-75.93l75.29-52.12L376.44,331.26z\"/><path style=\"fill: #c5ced6\" d=\"M399.03,278.5v70.27c-6.85,3.26-14.51,5.08-22.59,5.08c-3.43,0-6.79-0.33-10.04-0.96&#10;&#9;&#9;&#9;c-16.83-3.24-30.81-14.49-37.81-29.62c-3.12-6.72-4.86-14.22-4.86-22.12c0-14.75,6.06-28.09,15.83-37.65h44.47&#10;&#9;&#9;&#9;C392.31,263.5,399.03,270.22,399.03,278.5z\"/><g><g><ellipse style=\"fill: #ffffff\" cx=\"175.162\" cy=\"150.402\" rx=\"29.816\" ry=\"23.744\"/><ellipse style=\"fill: #ffffff\" cx=\"336.778\" cy=\"150.402\" rx=\"29.816\" ry=\"23.744\"/></g></g></g><g><path style=\"\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        \" d=\"&#10;&#9;&#9;&#9;M67.73,402.54v41.9c0,33.14,26.87,60,60,60h256.48c33.13,0,60-26.86,60-60V67.5c0-33.14-26.87-60-60-60H127.73&#10;&#9;&#9;&#9;c-33.13,0-60,26.86-60,60v300.04\"/><path style=\"\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        \" d=\"&#10;&#9;&#9;&#9;M359,52.68h25.03c8.28,0,15,6.71,15,15v135.64c0,8.29-6.72,15-15,15H127.91c-8.28,0-15-6.71-15-15V67.68c0-8.29,6.72-15,15-15H324&#10;&#9;&#9;&#9;\"/><path style=\"\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        \" d=\"&#10;&#9;&#9;&#9;M203.323,459.264h-75.412c-8.284,0-15-6.716-15-15V278.499c0-8.284,6.716-15,15-15h75.412c8.284,0,15,6.716,15,15v165.765&#10;&#9;&#9;&#9;C218.323,452.548,211.607,459.264,203.323,459.264z\"/><path style=\"\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        \" d=\"&#10;&#9;&#9;&#9;M399.03,278.5v165.76c0,8.29-6.72,15-15,15H278.5c-8.28,0-15-6.71-15-15V278.5c0-8.28,6.72-15,15-15h105.53&#10;&#9;&#9;&#9;C392.31,263.5,399.03,270.22,399.03,278.5z\"/><line style=\"\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        \" x1=\"264.641\" y1=\"367.54\" x2=\"327.14\" y2=\"324.275\"/><line style=\"\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        \" x1=\"335.24\" y1=\"420\" x2=\"317.58\" y2=\"458.04\"/><line style=\"\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        \" x1=\"365.42\" y1=\"354.99\" x2=\"349.98\" y2=\"388.25\"/><path style=\"\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        \" d=\"&#10;&#9;&#9;&#9;M337.07,266.11c-14.481,16.226-16.955,38.907-8.48,57.16c12.198,26.365,43.179,37.557,69.06,26.13\"/><path style=\"\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        \" d=\"&#10;&#9;&#9;&#9;M114.09,339.63c4.39-1.26,8.16-4.51,9.91-9.1c2.29-6,8.01-9.69,14.07-9.69c4.907,0,5.826,2,10.76,2&#10;&#9;&#9;&#9;c6.016,0,11.752-3.643,14.06-9.68c2.29-6,8-9.69,14.07-9.69c3.551,0,5.135,1.068,7.09,1.54c7.171,1.837,14.948-1.942,17.73-9.23&#10;&#9;&#9;&#9;c2.653-6.632,8.993-10.222,15.36-9.63\"/><path style=\"\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        \" d=\"&#10;&#9;&#9;&#9;M114.09,382.66c0.973,0.288,2.952,1.28,6.18,1.28c6.07,0,11.78-3.69,14.07-9.69c2.29-6,8.01-9.69,14.07-9.69&#10;&#9;&#9;&#9;c4.605,0,5.534,1.709,9.85,1.97c6.213,0.414,12.476-3.218,14.97-9.65c2.891-7.576,11.422-11.716,19.44-8.69&#10;&#9;&#9;&#9;c7.75,2.977,16.481-0.911,19.45-8.69c1.05-2.75,2.82-5.02,5.02-6.66\"/><path style=\"\n          fill: none;\n          stroke: #000000;\n          stroke-width: 15;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          stroke-miterlimit: 10;\n        \" d=\"&#10;&#9;&#9;&#9;M114.09,428.31c3.44-1.43,7.41-1.59,11.15-0.16c7.75,2.977,16.481-0.911,19.45-8.69c2.29-6,8-9.69,14.07-9.69&#10;&#9;&#9;&#9;c4.886,0,5.854,2,10.74,2c6.07,0,11.78-3.69,14.07-9.69c2.29-5.99,8.01-9.68,14.07-9.68c4.907,0,5.856,2,10.75,2&#10;&#9;&#9;&#9;c3.118,0,6.213-0.998,8.75-2.81\"/><g><g><g><path style=\"\n                fill: none;\n                stroke: #000000;\n                stroke-width: 15;\n                stroke-linecap: round;\n                stroke-miterlimit: 10;\n              \" d=\"M255.97,129.317&#10;&#9;&#9;&#9;&#9;&#9;&#9;c0,7.984-6.472,14.456-14.456,14.456c-7.984,0-14.456-6.472-14.456-14.456\"/><path style=\"\n                fill: none;\n                stroke: #000000;\n                stroke-width: 15;\n                stroke-linecap: round;\n                stroke-miterlimit: 10;\n              \" d=\"M284.881,129.317&#10;&#9;&#9;&#9;&#9;&#9;&#9;c0,7.984-6.472,14.456-14.456,14.456c-7.984,0-14.456-6.472-14.456-14.456\"/></g></g><path style=\"\n            fill: none;\n            stroke: #000000;\n            stroke-width: 15;\n            stroke-linecap: round;\n            stroke-linejoin: round;\n            stroke-miterlimit: 10;\n          \" d=\"&#10;&#9;&#9;&#9;&#9;M208.213,117.501c0-7.602-6.163-13.765-13.765-13.765c-7.602,0-13.765,6.163-13.765,13.765\"/><path style=\"\n            fill: none;\n            stroke: #000000;\n            stroke-width: 15;\n            stroke-linecap: round;\n            stroke-linejoin: round;\n            stroke-miterlimit: 10;\n          \" d=\"&#10;&#9;&#9;&#9;&#9;M303.727,117.501c0-7.602,6.163-13.765,13.765-13.765c7.602,0,13.765,6.163,13.765,13.765\"/></g></g></g></svg>";
	//#endregion
	//#region src/ui/icons/palette.svg
	var palette_default = "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon icon-tabler icon-tabler-palette\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" stroke-width=\"2\" stroke=\"currentColor\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M12 21a9 9 0 0 1 0 -18c4.97 0 9 3.582 9 8c0 1.06 -.474 2.078 -1.318 2.828c-.844 .75 -1.989 1.172 -3.182 1.172h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25\"/><path d=\"M8.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\"/><path d=\"M12.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\"/><path d=\"M16.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\"/></svg>";
	//#endregion
	//#region src/ui/icons/pencil.svg
	var pencil_default = "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon icon-tabler icon-tabler-pencil\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" stroke-width=\"2\" stroke=\"currentColor\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4\"/><path d=\"M13.5 6.5l4 4\"/></svg>";
	//#endregion
	//#region src/ui/icons/pencil-cog.svg
	var pencil_cog_default = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"icon icon-tabler icons-tabler-outline icon-tabler-pencil-cog\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4\"/><path d=\"M13.5 6.5l4 4\"/><path d=\"M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\"/><path d=\"M19.001 15.5v1.5\"/><path d=\"M19.001 21v1.5\"/><path d=\"M22.032 17.25l-1.299 .75\"/><path d=\"M17.27 20l-1.3 .75\"/><path d=\"M15.97 17.25l1.3 .75\"/><path d=\"M20.733 20l1.3 .75\"/></svg>";
	//#endregion
	//#region src/ui/icons/photo.svg
	var photo_default = "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon icon-tabler icon-tabler-photo\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" stroke-width=\"2\" stroke=\"currentColor\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M15 8h.01\"/><path d=\"M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z\"/><path d=\"M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5\"/><path d=\"M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3\"/></svg>";
	//#endregion
	//#region src/ui/icons/photo-off.svg
	var photo_off_default = "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon icon-tabler icon-tabler-photo-off\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" stroke-width=\"2\" stroke=\"currentColor\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M15 8h.01\"/><path d=\"M7 3h11a3 3 0 0 1 3 3v11m-.856 3.099a2.991 2.991 0 0 1 -2.144 .901h-12a3 3 0 0 1 -3 -3v-12c0 -.845 .349 -1.608 .91 -2.153\"/><path d=\"M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5\"/><path d=\"M16.33 12.338c.574 -.054 1.155 .166 1.67 .662l3 3\"/><path d=\"M3 3l18 18\" color=\"orange\"/></svg>";
	//#endregion
	//#region src/ui/icons/pin.svg
	var pin_default = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"icon icon-tabler icons-tabler-outline icon-tabler-pin\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M15 4.5l-4 4l-4 1.5l-1.5 1.5l7 7l1.5 -1.5l1.5 -4l4 -4\"/><path d=\"M9 15l-4.5 4.5\"/><path d=\"M14.5 4l5.5 5.5\"/></svg>";
	//#endregion
	//#region src/ui/icons/player-pause.svg
	var player_pause_default = "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon icon-tabler icon-tabler-player-pause\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" stroke-width=\"2\" stroke=\"currentColor\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M6 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z\"/><path d=\"M14 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z\"/></svg>";
	//#endregion
	//#region src/ui/icons/player-play.svg
	var player_play_default = "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon icon-tabler icon-tabler-player-play\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" stroke-width=\"2\" stroke=\"currentColor\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M7 4v16l13 -8z\"/></svg>";
	//#endregion
	//#region src/ui/icons/refresh.svg
	var refresh_default = "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon icon-tabler icon-tabler-refresh\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" stroke-width=\"2\" stroke=\"currentColor\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4\"/><path d=\"M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4\"/></svg>";
	//#endregion
	//#region src/ui/icons/settings.svg
	var settings_default$1 = "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon icon-tabler icon-tabler-settings\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" stroke-width=\"2\" stroke=\"currentColor\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z\"/><path d=\"M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0\"/></svg>";
	//#endregion
	//#region src/ui/icons/settings-off.svg
	var settings_off_default = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"icon icon-tabler icons-tabler-outline icon-tabler-settings-off\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M9.451 5.437c.418 -.218 .75 -.609 .874 -1.12c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35c-.486 .118 -.894 .44 -1.123 .878m-.188 3.803c-.517 .523 -1.349 .734 -2.125 .262a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.472 -.774 -.262 -1.604 .259 -2.121\"/><path d=\"M9.889 9.869a3 3 0 1 0 4.226 4.26m.592 -3.424a3.012 3.012 0 0 0 -1.419 -1.415\"/><path d=\"M3 3l18 18\"/></svg>";
	//#endregion
	//#region src/ui/icons/spacing-horizontal.svg
	var spacing_horizontal_default = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"icon icon-tabler icons-tabler-outline icon-tabler-spacing-horizontal\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M20 20h-2a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h2\"/><path d=\"M4 20h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2\"/><path d=\"M12 8v8\"/></svg>";
	//#endregion
	//#region src/ui/icons/spacing-vertical.svg
	var spacing_vertical_default = "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon icon-tabler icon-tabler-spacing-vertical\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" stroke-width=\"2\" stroke=\"currentColor\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M4 20v-2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v2\"/><path d=\"M4 4v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2\"/><path d=\"M16 12h-8\"/></svg>";
	//#endregion
	//#region src/ui/icons/sun.svg
	var sun_default = "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon icon-tabler icon-tabler-sun\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" stroke-width=\"2\" stroke=\"currentColor\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0\"/><path d=\"M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7\"/></svg>";
	//#endregion
	//#region src/ui/icons/trash.svg
	var trash_default = "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon icon-tabler icon-tabler-trash\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" stroke-width=\"2\" stroke=\"currentColor\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M4 7l16 0\"/><path d=\"M10 11l0 6\"/><path d=\"M14 11l0 6\"/><path d=\"M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12\"/><path d=\"M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3\"/></svg>";
	//#endregion
	//#region src/ui/icons/world-cog.svg
	var world_cog_default = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"icon icon-tabler icons-tabler-outline icon-tabler-world-cog\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M21 12a9 9 0 1 0 -8.979 9\"/><path d=\"M3.6 9h16.8\"/><path d=\"M3.6 15h8.9\"/><path d=\"M11.5 3a17 17 0 0 0 0 18\"/><path d=\"M12.5 3a16.992 16.992 0 0 1 2.522 10.376\"/><path d=\"M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\"/><path d=\"M19.001 15.5v1.5\"/><path d=\"M19.001 21v1.5\"/><path d=\"M22.032 17.25l-1.299 .75\"/><path d=\"M17.27 20l-1.3 .75\"/><path d=\"M15.97 17.25l1.3 .75\"/><path d=\"M20.733 20l1.3 .75\"/></svg>";
	//#endregion
	//#region src/ui/icons/x.svg
	var x_default = "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon icon-tabler icon-tabler-x\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" stroke-width=\"2\" stroke=\"currentColor\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M18 6l-12 12\"/><path d=\"M6 6l12 12\"/></svg>";
	//#endregion
	//#region src/ui/icons/zoom.svg
	var zoom_default = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"icon icon-tabler icons-tabler-outline icon-tabler-zoom\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0\"/><path d=\"M21 21l-6 -6\"/></svg>";
	//#endregion
	//#region src/ui/icons/zoom-cancel.svg
	var zoom_cancel_default = "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon icon-tabler icon-tabler-zoom-cancel\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" stroke-width=\"2\" stroke=\"currentColor\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0\"/><path d=\"M8 8l4 4\"/><path d=\"M12 8l-4 4\"/><path d=\"M21 21l-6 -6\"/></svg>";
	//#endregion
	//#region src/ui/icons/zoom-in.svg
	var zoom_in_default = "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon icon-tabler icon-tabler-zoom-in\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" stroke-width=\"2\" stroke=\"currentColor\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0\"/><path d=\"M7 10l6 0\"/><path d=\"M10 7l0 6\"/><path d=\"M21 21l-6 -6\"/></svg>";
	//#endregion
	//#region src/ui/icons/zoom-in-area.svg
	var zoom_in_area_default = "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon icon-tabler icon-tabler-zoom-in-area\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" stroke-width=\"2\" stroke=\"currentColor\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M15 13v4\"/><path d=\"M13 15h4\"/><path d=\"M15 15m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0\"/><path d=\"M22 22l-3 -3\"/><path d=\"M6 18h-1a2 2 0 0 1 -2 -2v-1\"/><path d=\"M3 11v-1\"/><path d=\"M3 6v-1a2 2 0 0 1 2 -2h1\"/><path d=\"M10 3h1\"/><path d=\"M15 3h1a2 2 0 0 1 2 2v1\"/></svg>";
	//#endregion
	//#region src/ui/icons/zoom-out.svg
	var zoom_out_default = "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon icon-tabler icon-tabler-zoom-out\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" stroke-width=\"2\" stroke=\"currentColor\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0\"/><path d=\"M7 10l6 0\"/><path d=\"M21 21l-6 -6\"/></svg>";
	//#endregion
	//#region src/ui/icons/zoom-out-area.svg
	var zoom_out_area_default = "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon icon-tabler icon-tabler-zoom-out-area\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" stroke-width=\"2\" stroke=\"currentColor\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M13 15h4\"/><path d=\"M15 15m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0\"/><path d=\"M22 22l-3 -3\"/><path d=\"M6 18h-1a2 2 0 0 1 -2 -2v-1\"/><path d=\"M3 11v-1\"/><path d=\"M3 6v-1a2 2 0 0 1 2 -2h1\"/><path d=\"M10 3h1\"/><path d=\"M15 3h1a2 2 0 0 1 2 2v1\"/></svg>";
	//#endregion
	//#region src/ui/icons/zoom-pan.svg
	var zoom_pan_default = "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon icon-tabler icon-tabler-zoom-pan\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" stroke-width=\"2\" stroke=\"currentColor\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0\"/><path d=\"M17 17l-2.5 -2.5\"/><path d=\"M10 5l2 -2l2 2\"/><path d=\"M19 10l2 2l-2 2\"/><path d=\"M5 10l-2 2l2 2\"/><path d=\"M10 19l2 2l2 -2\"/></svg>";
	//#endregion
	//#region src/ui/icons/svg.ts
	var svg_exports = /* @__PURE__ */ __exportAll({
		IconAdjustmentsHorizontal: () => adjustments_horizontal_default,
		IconAlertCircle: () => alert_circle_default,
		IconApiBook: () => api_book_default,
		IconArrowAutofitDown: () => arrow_autofit_down_default,
		IconArrowAutofitHeight: () => arrow_autofit_height_default,
		IconArrowAutofitLeft: () => arrow_autofit_left_default,
		IconArrowAutofitRight: () => arrow_autofit_right_default,
		IconArrowAutofitWidth: () => arrow_autofit_width_default,
		IconArrowBigLeft: () => arrow_big_left_default,
		IconArrowBigRight: () => arrow_big_right_default,
		IconArrowsHorizontal: () => arrows_horizontal_default,
		IconArrowsLeftRight: () => arrows_left_right_default,
		IconArrowsMove: () => arrows_move_default,
		IconArrowsMoveVertical: () => arrows_move_vertical_default,
		IconArrowsVertical: () => arrows_vertical_default,
		IconBook: () => book_default$1,
		IconBookArrowLeft: () => book_arrow_left_default,
		IconBookArrowRight: () => book_arrow_right_default,
		IconBookOff: () => book_off_default,
		IconBookUpload: () => book_upload_default,
		IconBookmark: () => bookmark_default,
		IconBookmarkOff: () => bookmark_off_default,
		IconBookmarks: () => bookmarks_default$1,
		IconBooksReturn: () => books_return_default,
		IconBoxAlignTop: () => box_align_top_default,
		IconCategory: () => category_default,
		IconCheck: () => check_default,
		IconChevronLeft: () => chevron_left_default,
		IconChevronRight: () => chevron_right_default,
		IconCircleCheck: () => circle_check_default,
		IconCircleX: () => circle_x_default,
		IconComic1: () => Comic1_SpecialLinealColor_default,
		IconComic1Flat: () => Comic1_SpecialFlat_default,
		IconComic2: () => Comic2_SpecialLinealColor_default,
		IconComic2Flat: () => Comic2_SpecialFlat_default,
		IconComic3: () => Comic3_SpecialLinealColor_default,
		IconComic3Flat: () => Comic3_SpecialFlat_default,
		IconDeviceFloppy: () => device_floppy_default,
		IconDotsVertical: () => dots_vertical_default,
		IconEReader1: () => E_reader1_KawaiiLinealColor_default,
		IconEReader1Flat: () => E_reader1_KawaiiFlat_default,
		IconEReader2: () => E_reader2_KawaiiLinealColor_default,
		IconEReader2Flat: () => E_reader2_KawaiiFlat_default,
		IconExternalLink: () => external_link_default,
		IconEye: () => eye_default,
		IconEyeOff: () => eye_off_default,
		IconFileDownload: () => file_download_default,
		IconFilePercent: () => file_percent_default,
		IconFolderOpen: () => folder_open_default,
		IconHandClick: () => hand_click_default,
		IconHelp: () => help_default,
		IconInfoCircle: () => info_circle_default,
		IconKeyboard: () => keyboard_default,
		IconLayoutBottombar: () => layout_bottombar_default,
		IconLayoutBottombarInactive: () => layout_bottombar_inactive_default,
		IconLayoutDashboard: () => layout_dashboard_default,
		IconLayoutSidebar: () => layout_sidebar_default,
		IconLayoutSidebarInactive: () => layout_sidebar_inactive_default,
		IconLayoutSidebarRight: () => layout_sidebar_right_default,
		IconLayoutSidebarRightInactive: () => layout_sidebar_right_inactive_default,
		IconListNumbers: () => list_numbers_default,
		IconLoader2: () => loader_2_default,
		IconLocationCog: () => location_cog_default,
		IconMenu2: () => menu_2_default,
		IconMenuDeep: () => menu_deep_default,
		IconMessage: () => message_default,
		IconMoon: () => moon_default,
		IconPage: () => Page_KawaiiLinealColor_default,
		IconPageFlat: () => Page_KawaiiFlat_default,
		IconPalette: () => palette_default,
		IconPencil: () => pencil_default,
		IconPencilCog: () => pencil_cog_default,
		IconPhoto: () => photo_default,
		IconPhotoOff: () => photo_off_default,
		IconPin: () => pin_default,
		IconPlayerPause: () => player_pause_default,
		IconPlayerPlay: () => player_play_default,
		IconRefresh: () => refresh_default,
		IconSettings: () => settings_default$1,
		IconSettingsOff: () => settings_off_default,
		IconSpacingHorizontal: () => spacing_horizontal_default,
		IconSpacingVertical: () => spacing_vertical_default,
		IconSun: () => sun_default,
		IconTrash: () => trash_default,
		IconWorldCog: () => world_cog_default,
		IconX: () => x_default,
		IconZoom: () => zoom_default,
		IconZoomCancel: () => zoom_cancel_default,
		IconZoomIn: () => zoom_in_default,
		IconZoomInArea: () => zoom_in_area_default,
		IconZoomOut: () => zoom_out_default,
		IconZoomOutArea: () => zoom_out_area_default,
		IconZoomPan: () => zoom_pan_default
	});
	//#endregion
	//#region src/ui/icons/StyledIcons.ts
	/**
	* @file This module is responsible for processing raw SVG icon strings.
	* It parses a dedicated CSS file (`Icons.css`) to extract color rules, applies these rules
	* directly to the SVG strings by adding `stroke` attributes, and then exports the processed icons
	* as raw SVG strings.
	*/
	var StyledIcons_exports = /* @__PURE__ */ __exportAll({
		IconAdjustmentsHorizontal: () => IconAdjustmentsHorizontal$1,
		IconAlertCircle: () => IconAlertCircle$1,
		IconApiBook: () => IconApiBook$1,
		IconArrowAutofitDown: () => IconArrowAutofitDown$1,
		IconArrowAutofitHeight: () => IconArrowAutofitHeight$1,
		IconArrowAutofitLeft: () => IconArrowAutofitLeft$1,
		IconArrowAutofitRight: () => IconArrowAutofitRight$1,
		IconArrowAutofitWidth: () => IconArrowAutofitWidth$1,
		IconArrowBigLeft: () => IconArrowBigLeft$1,
		IconArrowBigRight: () => IconArrowBigRight$1,
		IconArrowsHorizontal: () => IconArrowsHorizontal$1,
		IconArrowsLeftRight: () => IconArrowsLeftRight$1,
		IconArrowsMove: () => IconArrowsMove$1,
		IconArrowsMoveVertical: () => IconArrowsMoveVertical$1,
		IconArrowsVertical: () => IconArrowsVertical$1,
		IconBook: () => IconBook$1,
		IconBookArrowLeft: () => IconBookArrowLeft$1,
		IconBookArrowRight: () => IconBookArrowRight$1,
		IconBookOff: () => IconBookOff$1,
		IconBookUpload: () => IconBookUpload$1,
		IconBookmark: () => IconBookmark$1,
		IconBookmarkOff: () => IconBookmarkOff$1,
		IconBookmarks: () => IconBookmarks$1,
		IconBooksReturn: () => IconBooksReturn$1,
		IconBoxAlignTop: () => IconBoxAlignTop$1,
		IconCategory: () => IconCategory$1,
		IconCheck: () => IconCheck$1,
		IconChevronLeft: () => IconChevronLeft$1,
		IconChevronRight: () => IconChevronRight$1,
		IconCircleCheck: () => IconCircleCheck$1,
		IconCircleX: () => IconCircleX$1,
		IconComic1: () => IconComic1$1,
		IconComic1Flat: () => IconComic1Flat$1,
		IconComic2: () => IconComic2$1,
		IconComic2Flat: () => IconComic2Flat$1,
		IconComic3: () => IconComic3$1,
		IconComic3Flat: () => IconComic3Flat$1,
		IconDeviceFloppy: () => IconDeviceFloppy$1,
		IconDotsVertical: () => IconDotsVertical$1,
		IconEReader1: () => IconEReader1$1,
		IconEReader1Flat: () => IconEReader1Flat$1,
		IconEReader2: () => IconEReader2$1,
		IconEReader2Flat: () => IconEReader2Flat$1,
		IconExternalLink: () => IconExternalLink$1,
		IconEye: () => IconEye$1,
		IconEyeOff: () => IconEyeOff$1,
		IconFileDownload: () => IconFileDownload$1,
		IconFilePercent: () => IconFilePercent$1,
		IconFolderOpen: () => IconFolderOpen$1,
		IconHandClick: () => IconHandClick$1,
		IconHelp: () => IconHelp$1,
		IconInfoCircle: () => IconInfoCircle$1,
		IconKeyboard: () => IconKeyboard$1,
		IconLayoutBottombar: () => IconLayoutBottombar$1,
		IconLayoutBottombarInactive: () => IconLayoutBottombarInactive$1,
		IconLayoutDashboard: () => IconLayoutDashboard$1,
		IconLayoutSidebar: () => IconLayoutSidebar$1,
		IconLayoutSidebarInactive: () => IconLayoutSidebarInactive$1,
		IconLayoutSidebarRight: () => IconLayoutSidebarRight$1,
		IconLayoutSidebarRightInactive: () => IconLayoutSidebarRightInactive$1,
		IconListNumbers: () => IconListNumbers$1,
		IconLoader2: () => IconLoader2$1,
		IconLocationCog: () => IconLocationCog$1,
		IconMenu2: () => IconMenu2$1,
		IconMenuDeep: () => IconMenuDeep$1,
		IconMessage: () => IconMessage$1,
		IconMoon: () => IconMoon$1,
		IconPage: () => IconPage$1,
		IconPageFlat: () => IconPageFlat$1,
		IconPalette: () => IconPalette$1,
		IconPencil: () => IconPencil$1,
		IconPencilCog: () => IconPencilCog$1,
		IconPhoto: () => IconPhoto$1,
		IconPhotoOff: () => IconPhotoOff$1,
		IconPin: () => IconPin$1,
		IconPlayerPause: () => IconPlayerPause$1,
		IconPlayerPlay: () => IconPlayerPlay$1,
		IconRefresh: () => IconRefresh$1,
		IconSettings: () => IconSettings$1,
		IconSettingsOff: () => IconSettingsOff$1,
		IconSpacingHorizontal: () => IconSpacingHorizontal$1,
		IconSpacingVertical: () => IconSpacingVertical$1,
		IconSun: () => IconSun$1,
		IconTrash: () => IconTrash$1,
		IconWorldCog: () => IconWorldCog$1,
		IconX: () => IconX$1,
		IconZoom: () => IconZoom$1,
		IconZoomCancel: () => IconZoomCancel$1,
		IconZoomIn: () => IconZoomIn$1,
		IconZoomInArea: () => IconZoomInArea$1,
		IconZoomOut: () => IconZoomOut$1,
		IconZoomOutArea: () => IconZoomOutArea$1,
		IconZoomPan: () => IconZoomPan$1
	});
	/**
	* Parses a CSS string to extract simple color rules.
	* This function is intentionally simple and tailored to the specific format of `Icons.css`.
	* A more robust solution would require a full CSS parser, which is not necessary for this use case.
	* @internal
	* @param {string} css - The CSS string to parse.
	* @returns {CssRule[]} An array of parsed CSS rules.
	*/
	function parseCss(css) {
		return [...css.matchAll(/([^{}]+)\s*\{([^}]+)\}/g)].map((match) => {
			const selectorsBlock = match[1].trim();
			const properties = match[2];
			const colorMatch = /color:\s*([^;]+)/.exec(properties);
			if (colorMatch) {
				const color = colorMatch[1].trim();
				return {
					selectors: selectorsBlock.split(",").map((s) => s.trim().replace(/\s\s+/g, " ")),
					color
				};
			}
			return null;
		}).filter((rule) => rule !== null);
	}
	var colorRules = parseCss(icons_default);
	/**
	* A map from icon class names to the styling rules that apply to them.
	* This is pre-computed to optimize the color application process.
	* @internal
	*/
	var rulesByClassName = /* @__PURE__ */ new Map();
	for (const rule of colorRules) for (const selector of rule.selectors) {
		const match = selector.match(/^\s*\.([^ ]+)\s*(.*)$/);
		if (!match) continue;
		const [, className, rest] = match;
		let subSelector = rest.trim();
		if (subSelector.startsWith(">")) subSelector = subSelector.substring(1).trim();
		if (subSelector === "") subSelector = "*";
		if (!rulesByClassName.has(className)) rulesByClassName.set(className, []);
		rulesByClassName.get(className)?.push({
			subSelector,
			color: rule.color
		});
	}
	var parser = new DOMParser();
	var serializer = new XMLSerializer();
	/**
	* Applies pre-parsed CSS color rules to a raw SVG string by injecting `stroke` attributes into its child elements.
	* @internal
	* @param {string} svgString - The original SVG icon as a string.
	* @param {string} className - The base class name of the icon (e.g., 'icon-tabler-file-download') used for matching selectors.
	* @returns {string} A new SVG string with the color styles applied.
	*/
	function applyColorsToSvg(svgString, className) {
		const rulesForIcon = rulesByClassName.get(className);
		if (!rulesForIcon?.length) return svgString;
		const svg = parser.parseFromString(svgString, "image/svg+xml").documentElement;
		if (svg.querySelector("parsererror")) {
			console.error(`Error parsing SVG for ${className}`);
			return svgString;
		}
		for (const { subSelector, color } of rulesForIcon) try {
			svg.querySelectorAll(subSelector).forEach((el) => {
				el.setAttribute("stroke", color);
			});
		} catch (e) {
			console.error(`Invalid selector "${subSelector}" for ${className}`, e);
		}
		return serializer.serializeToString(svg);
	}
	/**
	* A collection of all processed icons, exported as raw SVG strings.
	* Use these when you need the SVG content directly, for example, in a CMS.
	* @example svgToUrl(IconFileDownload)
	*/
	var { IconAdjustmentsHorizontal: IconAdjustmentsHorizontal$1, IconApiBook: IconApiBook$1, IconArrowsHorizontal: IconArrowsHorizontal$1, IconArrowsLeftRight: IconArrowsLeftRight$1, IconArrowAutofitDown: IconArrowAutofitDown$1, IconArrowAutofitHeight: IconArrowAutofitHeight$1, IconArrowAutofitLeft: IconArrowAutofitLeft$1, IconArrowAutofitRight: IconArrowAutofitRight$1, IconArrowAutofitWidth: IconArrowAutofitWidth$1, IconArrowBigLeft: IconArrowBigLeft$1, IconArrowBigRight: IconArrowBigRight$1, IconArrowsMove: IconArrowsMove$1, IconArrowsMoveVertical: IconArrowsMoveVertical$1, IconArrowsVertical: IconArrowsVertical$1, IconBook: IconBook$1, IconBookOff: IconBookOff$1, IconBookArrowLeft: IconBookArrowLeft$1, IconBookArrowRight: IconBookArrowRight$1, IconBooksReturn: IconBooksReturn$1, IconBookUpload: IconBookUpload$1, IconBookmark: IconBookmark$1, IconBookmarkOff: IconBookmarkOff$1, IconBookmarks: IconBookmarks$1, IconBoxAlignTop: IconBoxAlignTop$1, IconCategory: IconCategory$1, IconCheck: IconCheck$1, IconChevronLeft: IconChevronLeft$1, IconChevronRight: IconChevronRight$1, IconAlertCircle: IconAlertCircle$1, IconCircleCheck: IconCircleCheck$1, IconCircleX: IconCircleX$1, IconHelp: IconHelp$1, IconInfoCircle: IconInfoCircle$1, IconComic1: IconComic1$1, IconComic1Flat: IconComic1Flat$1, IconComic2: IconComic2$1, IconComic2Flat: IconComic2Flat$1, IconComic3: IconComic3$1, IconComic3Flat: IconComic3Flat$1, IconDeviceFloppy: IconDeviceFloppy$1, IconDotsVertical: IconDotsVertical$1, IconEReader1: IconEReader1$1, IconEReader1Flat: IconEReader1Flat$1, IconEReader2: IconEReader2$1, IconEReader2Flat: IconEReader2Flat$1, IconExternalLink: IconExternalLink$1, IconEye: IconEye$1, IconEyeOff: IconEyeOff$1, IconFileDownload: IconFileDownload$1, IconFilePercent: IconFilePercent$1, IconFolderOpen: IconFolderOpen$1, IconHandClick: IconHandClick$1, IconKeyboard: IconKeyboard$1, IconLayoutDashboard: IconLayoutDashboard$1, IconLayoutBottombar: IconLayoutBottombar$1, IconLayoutBottombarInactive: IconLayoutBottombarInactive$1, IconLayoutSidebar: IconLayoutSidebar$1, IconLayoutSidebarInactive: IconLayoutSidebarInactive$1, IconLayoutSidebarRight: IconLayoutSidebarRight$1, IconLayoutSidebarRightInactive: IconLayoutSidebarRightInactive$1, IconListNumbers: IconListNumbers$1, IconLoader2: IconLoader2$1, IconLocationCog: IconLocationCog$1, IconMenu2: IconMenu2$1, IconMenuDeep: IconMenuDeep$1, IconMessage: IconMessage$1, IconMoon: IconMoon$1, IconPage: IconPage$1, IconPageFlat: IconPageFlat$1, IconPalette: IconPalette$1, IconPencil: IconPencil$1, IconPencilCog: IconPencilCog$1, IconPhoto: IconPhoto$1, IconPhotoOff: IconPhotoOff$1, IconPin: IconPin$1, IconPlayerPause: IconPlayerPause$1, IconPlayerPlay: IconPlayerPlay$1, IconRefresh: IconRefresh$1, IconSettings: IconSettings$1, IconSettingsOff: IconSettingsOff$1, IconSpacingHorizontal: IconSpacingHorizontal$1, IconSpacingVertical: IconSpacingVertical$1, IconSun: IconSun$1, IconTrash: IconTrash$1, IconWorldCog: IconWorldCog$1, IconX: IconX$1, IconZoom: IconZoom$1, IconZoomCancel: IconZoomCancel$1, IconZoomIn: IconZoomIn$1, IconZoomInArea: IconZoomInArea$1, IconZoomOut: IconZoomOut$1, IconZoomOutArea: IconZoomOutArea$1, IconZoomPan: IconZoomPan$1 } = _.mapValues(svg_exports, (rawSvg, iconKey) => {
		return applyColorsToSvg(rawSvg, `icon-tabler-${_.kebabCase(iconKey.replace(/^Icon/, ""))}`);
	});
	//#endregion
	//#region \0@oxc-project+runtime@0.124.0/helpers/decorate.js
	function __decorate(decorators, target, key, desc) {
		var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		return c > 3 && r && Object.defineProperty(target, key, r), r;
	}
	//#endregion
	//#region src/ui/components/Icon.ts
	var Icon = class Icon extends i$1 {
		constructor(..._args) {
			super(..._args);
			this.name = "";
			this.variant = "regular";
			this.family = "classic";
			this.label = "";
			this.size = "";
		}
		static {
			this.styles = i$3`
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
  `;
		}
		updated(changedProperties) {
			super.updated(changedProperties);
			if (changedProperties.has("name")) if (StyledIcons_exports[toPascalCase(this.name)]) {
				this.dispatchEvent(new CustomEvent("load", {
					bubbles: true,
					composed: true
				}));
				this.dispatchEvent(new CustomEvent("wa-load", {
					bubbles: true,
					composed: true
				}));
			} else {
				this.dispatchEvent(new CustomEvent("error", {
					bubbles: true,
					composed: true
				}));
				this.dispatchEvent(new CustomEvent("wa-error", {
					bubbles: true,
					composed: true
				}));
			}
		}
		render() {
			const styledSvg = StyledIcons_exports[toPascalCase(this.name)];
			if (!styledSvg) return A;
			const style = this.size ? `--mov-icon-size: ${this.size};` : "";
			return b$1`<span
      role=${this.label ? "img" : A}
      aria-label=${this.label || A}
      aria-hidden=${this.label ? A : "true"}
      style=${style}
      >${o$4(styledSvg)}</span
    >`;
		}
	};
	__decorate([n$1({ type: String })], Icon.prototype, "name", void 0);
	__decorate([n$1({
		type: String,
		reflect: true
	})], Icon.prototype, "variant", void 0);
	__decorate([n$1({
		type: String,
		reflect: true
	})], Icon.prototype, "family", void 0);
	__decorate([n$1({ type: String })], Icon.prototype, "label", void 0);
	__decorate([n$1({ type: String })], Icon.prototype, "size", void 0);
	Icon = __decorate([t$1("mov-icon")], Icon);
	//#endregion
	//#region src/utils/code-tag.ts
	/**
	* A simple template literal tag that concatenates the template strings and expressions.
	* This function is the base for the `html` and `css` tags and does not perform any special processing.
	* @internal
	* @param {TemplateStringsArray} raw - The static parts of the template literal.
	* @param {...unknown} keys - The dynamic expressions embedded in the template literal.
	* @returns {string} The concatenated string.
	*/
	var concatenateTemplateLiteralTag = (raw, ...keys) => keys.length === 0 ? raw[0] : String.raw({ raw }, ...keys);
	/**
	* A template literal tag used to identify HTML strings.
	* This allows IDEs and tools like Prettier to apply proper syntax highlighting and formatting.
	* @example
	* const myHtml = html`<div>Hello, World!</div>`;
	*/
	var html = concatenateTemplateLiteralTag;
	/**
	* A template literal tag used to identify CSS strings.
	* This allows IDEs and tools like Prettier to apply proper syntax highlighting and formatting.
	* @example
	* const myCss = css`
	*   .my-class {
	*     color: blue;
	*   }
	* `;
	*/
	var css = concatenateTemplateLiteralTag;
	//#endregion
	//#region src/utils/css.ts
	/**
	* Creates a <style> element with the specified ID and content.
	* @param {string} id - The ID for the new style element.
	* @param {string} content - The CSS text to be placed inside the style element.
	* @returns {HTMLStyleElement} The newly created <style> element.
	*/
	function createStyleElement(id, content) {
		const style = document.createElement("style");
		style.id = id;
		style.appendChild(document.createTextNode(content));
		return style;
	}
	/**
	* Appends a CSS stylesheet to the document's <head> if an element with the same ID doesn't already exist.
	* @param {string} id - The ID for the stylesheet, used to prevent duplicate insertions.
	* @param {string} content - The CSS text to be added.
	*/
	function appendStyleSheet(id, content) {
		if (!document.querySelector(`#${id}`)) (document.head ?? document.querySelector("head")).appendChild(createStyleElement(id, content));
	}
	/**
	* Removes all <style> elements with a specific ID from the document.
	* @param {string} id - The ID of the style elements to remove.
	*/
	function removeStyleSheet(id) {
		document.querySelectorAll(`style[id="${id}"]`).forEach((elem) => {
			elem.remove();
		});
	}
	/**
	* Replaces the content of a stylesheet by removing the old one and appending a new one with the same ID.
	* @param {string} id - The ID of the stylesheet to replace.
	* @param {string} content - The new CSS content.
	*/
	function replaceStyleSheet(id, content) {
		removeStyleSheet(id);
		appendStyleSheet(id, content);
	}
	/**
	* Wraps a string of CSS in a <style> tag for embedding directly into a Lit-HTML template.
	* @param {string} id - The ID for the style tag.
	* @param {string} css - The CSS text to wrap.
	* @returns A Lit-HTML template containing the style tag.
	*/
	function wrapStyle(id, css) {
		return html`
    <style id="${id}">
      ${css}
    </style>
  `;
	}
	//#endregion
	//#region src/ui/styles/toast.css?inline
	var toast_default = ".mov-toast-stack {\r\n  position: fixed;\r\n  z-index: 2000;\r\n  width: 350px;\r\n  max-width: 100vw;\r\n  max-height: 100vh;\r\n  padding: 1rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 0.5rem;\r\n  pointer-events: none;\r\n  overflow: hidden;\r\n}\r\n\r\n/* Placements */\r\n.mov-toast-stack-top-start {\r\n  top: 0;\r\n  left: 0;\r\n}\r\n.mov-toast-stack-top-center {\r\n  top: 0;\r\n  left: 50%;\r\n  transform: translateX(-50%);\r\n  align-items: center;\r\n}\r\n.mov-toast-stack-top-end {\r\n  top: 0;\r\n  right: 0;\r\n}\r\n.mov-toast-stack-bottom-start {\r\n  bottom: 0;\r\n  left: 0;\r\n  flex-direction: column-reverse;\r\n}\r\n.mov-toast-stack-bottom-center {\r\n  bottom: 0;\r\n  left: 50%;\r\n  transform: translateX(-50%);\r\n  align-items: center;\r\n  flex-direction: column-reverse;\r\n}\r\n.mov-toast-stack-bottom-end {\r\n  bottom: 0;\r\n  right: 0;\r\n  flex-direction: column-reverse;\r\n}\r\n\r\n:host {\r\n  display: block;\r\n  width: 100%;\r\n}\r\n\r\n.mov-toast {\r\n  pointer-events: auto;\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-color: var(--theme-background-color);\r\n  color: var(--theme-text-color);\r\n  border: 1px solid var(--theme-border-color);\r\n  border-radius: 0.5rem;\r\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\r\n  overflow: hidden;\r\n  transition:\r\n    transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),\r\n    opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1),\r\n    visibility 0.3s cubic-bezier(0.4, 0, 0.2, 1);\r\n  opacity: 0;\r\n  visibility: hidden;\r\n  width: 100%;\r\n}\r\n\r\n/* Animation directions based on placement property */\r\n:host([placement$=\"-end\"]) .mov-toast {\r\n  transform: translateX(110%);\r\n}\r\n\r\n:host([placement$=\"-start\"]) .mov-toast {\r\n  transform: translateX(-110%);\r\n}\r\n\r\n:host([placement=\"top-center\"]) .mov-toast {\r\n  transform: translateY(-110%);\r\n}\r\n\r\n:host([placement=\"bottom-center\"]) .mov-toast {\r\n  transform: translateY(110%);\r\n}\r\n\r\n:host([open]) .mov-toast {\r\n  transform: translate(0, 0);\r\n  opacity: 1;\r\n  visibility: visible;\r\n}\r\n\r\n.mov-toast-body {\r\n  display: flex;\r\n  padding: 0.75rem 1rem;\r\n  gap: 0.75rem;\r\n  align-items: flex-start;\r\n}\r\n\r\n.mov-toast-icon {\r\n  flex-shrink: 0;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-size: 20px;\r\n  margin-top: 0.125rem;\r\n}\r\n\r\n.mov-toast-icon mov-icon {\r\n  --mov-icon-size: 1.25rem;\r\n}\r\n\r\n.mov-toast-content {\r\n  flex-grow: 1;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 0.125rem;\r\n}\r\n\r\n.mov-toast-title {\r\n  font-weight: 600;\r\n  font-size: 14px;\r\n  line-height: 1.25;\r\n}\r\n\r\n.mov-toast-description {\r\n  font-size: 13px;\r\n  opacity: 0.8;\r\n  line-height: 1.4;\r\n}\r\n\r\n.mov-toast-close {\r\n  flex-shrink: 0;\r\n  background: none;\r\n  border: none;\r\n  cursor: pointer;\r\n  padding: 0.25rem;\r\n  color: inherit;\r\n  opacity: 0.5;\r\n  transition: opacity 0.2s;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  margin-right: -0.25rem;\r\n}\r\n\r\n.mov-toast-close:hover {\r\n  opacity: 1;\r\n}\r\n\r\n/* Variants */\r\n.mov-toast-variant-primary .mov-toast-icon {\r\n  color: var(--mov-color-fill-loud);\r\n}\r\n.mov-toast-variant-success .mov-toast-icon {\r\n  color: #28a745;\r\n}\r\n.mov-toast-variant-warning .mov-toast-icon {\r\n  color: #ffc107;\r\n}\r\n.mov-toast-variant-danger .mov-toast-icon {\r\n  color: #dc3545;\r\n}\r\n.mov-toast-variant-neutral .mov-toast-icon {\r\n  color: var(--theme-text-color);\r\n}\r\n\r\n.mov-toast-variant-primary {\r\n  border-left: 4px solid var(--mov-color-fill-loud);\r\n}\r\n.mov-toast-variant-success {\r\n  border-left: 4px solid #28a745;\r\n}\r\n.mov-toast-variant-warning {\r\n  border-left: 4px solid #ffc107;\r\n}\r\n.mov-toast-variant-danger {\r\n  border-left: 4px solid #dc3545;\r\n}\r\n.mov-toast-variant-neutral {\r\n  border-left: 4px solid var(--theme-border-color);\r\n}\r\n";
	//#endregion
	//#region src/ui/components/Toast.ts
	var Toast = class Toast extends i$1 {
		constructor(..._args) {
			super(..._args);
			this.open = false;
			this.variant = "primary";
			this.duration = 3e3;
			this.closable = false;
			this.title = "";
			this.description = "";
			this.placement = "bottom-end";
		}
		static {
			this.styles = [r$4(toast_default)];
		}
		/** Shows the toast. */
		async show() {
			if (this.open) return;
			await this.updateComplete;
			this.dispatchEvent(new CustomEvent("wa-show", {
				bubbles: true,
				composed: true
			}));
			this.open = true;
			if (this.duration < Infinity) this.autoHideTimeout = window.setTimeout(() => this.hide(), this.duration);
			return new Promise((resolve) => {
				setTimeout(() => {
					this.dispatchEvent(new CustomEvent("wa-after-show", {
						bubbles: true,
						composed: true
					}));
					resolve();
				}, 300);
			});
		}
		/** Hides the toast. */
		async hide() {
			if (!this.open) return;
			window.clearTimeout(this.autoHideTimeout);
			this.dispatchEvent(new CustomEvent("wa-hide", {
				bubbles: true,
				composed: true
			}));
			this.open = false;
			return new Promise((resolve) => {
				setTimeout(() => {
					this.dispatchEvent(new CustomEvent("wa-after-hide", {
						bubbles: true,
						composed: true
					}));
					this.remove();
					resolve();
				}, 300);
			});
		}
		handleCloseClick() {
			this.hide();
		}
		getDefaultIcon() {
			if (this.icon) return this.icon;
			switch (this.variant) {
				case "success": return "IconCircleCheck";
				case "warning": return "IconAlertCircle";
				case "danger": return "IconCircleX";
				default: return "IconInfoCircle";
			}
		}
		render() {
			return b$1`
      <div
        part="base"
        class=${e$1({
				"mov-toast": true,
				[`mov-toast-variant-${this.variant}`]: true
			})}
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
        aria-hidden=${this.open ? "false" : "true"}
      >
        <div class="mov-toast-body" part="body">
          <div class="mov-toast-icon" part="icon">
            <slot name="icon">
              <mov-icon name=${this.getDefaultIcon()}></mov-icon>
            </slot>
          </div>

          <div class="mov-toast-content" part="content">
            ${this.title ? b$1`<div class="mov-toast-title" part="title">${this.title}</div>` : ""}
            <div class="mov-toast-description" part="description">
              <slot>${this.description}</slot>
            </div>
          </div>

          <slot name="action"></slot>

          ${this.closable ? b$1`
                <button
                  type="button"
                  class="mov-toast-close"
                  part="close-button"
                  @click=${this.handleCloseClick}
                  aria-label="Close"
                >
                  <mov-icon name="IconX"></mov-icon>
                </button>
              ` : ""}
        </div>
      </div>
    `;
		}
	};
	__decorate([n$1({
		type: Boolean,
		reflect: true
	})], Toast.prototype, "open", void 0);
	__decorate([n$1({ reflect: true })], Toast.prototype, "variant", void 0);
	__decorate([n$1({ type: Number })], Toast.prototype, "duration", void 0);
	__decorate([n$1({ type: Boolean })], Toast.prototype, "closable", void 0);
	__decorate([n$1()], Toast.prototype, "title", void 0);
	__decorate([n$1()], Toast.prototype, "description", void 0);
	__decorate([n$1()], Toast.prototype, "icon", void 0);
	__decorate([n$1({ reflect: true })], Toast.prototype, "placement", void 0);
	Toast = __decorate([t$1("mov-toast")], Toast);
	/**
	* Utility function to show a toast notification.
	* Manages singleton toast stacks in the DOM for different placements.
	*/
	var toast = (options) => {
		const placement = options.placement || "bottom-end";
		const stackClass = `mov-toast-stack-${placement}`;
		let stack = document.querySelector(`.mov-toast-stack.${stackClass}`);
		const hostIndex = toast_default.indexOf(":host");
		appendStyleSheet("mov-toast-stack-styles", hostIndex > -1 ? toast_default.substring(0, hostIndex).trim() : toast_default);
		if (!stack) {
			stack = document.createElement("div");
			stack.className = `mov-toast-stack ${stackClass}`;
			document.body.appendChild(stack);
		}
		const toastItem = document.createElement("mov-toast");
		let variant = options.variant || "primary";
		if (variant === "info") variant = "primary";
		if (variant === "error") variant = "danger";
		toastItem.variant = variant;
		toastItem.title = options.title || "";
		toastItem.description = options.description || options.message || "";
		toastItem.duration = options.duration ?? 3e3;
		toastItem.closable = options.closable ?? true;
		toastItem.placement = placement;
		if (options.icon) toastItem.icon = options.icon;
		stack.appendChild(toastItem);
		requestAnimationFrame(() => {
			toastItem.show();
		});
		return toastItem;
	};
	toast.info = (options) => toast({
		...options,
		variant: "primary"
	});
	toast.success = (options) => toast({
		...options,
		variant: "success"
	});
	toast.warning = (options) => toast({
		...options,
		variant: "warning"
	});
	toast.error = (options) => toast({
		...options,
		variant: "danger"
	});
	//#endregion
	//#region src/utils/diffObj.ts
	/** biome-ignore-all lint/suspicious/noExplicitAny: must be generic */
	/**
	*  Deep diff between two object, using lodash
	*
	*  We are comparing two objects: A and B.
	*  Object b is newer and similar to A.
	*  We are looking for changes from A to B.
	*  We assume that data types haven't changed (String to Number).
	*  We assume that parent is either an Array or an Object.
	*
	*  This is the "easier on the programmer, harder on the computer" method.
	*  It's very inefficient. Worst case is something like O(n^n).
	*  But this works, is easier to understand that the "correct"
	*  implementation, and entertained me for a bit. *
	*
	* http://stackoverflow.com/questions/31295545/how-to-get-only-the-changed-values-from-two-json-objects
	* https://gist.github.com/Yimiprod/7ee176597fef230d1451
	* https://stackoverflow.com/questions/8572826/generic-deep-diff-between-two-objects
	* https://qastack.com.br/programming/31683075/how-to-do-a-deep-comparison-between-2-objects-with-lodash
	*
	* @template T - The type of the objects being compared.
	* @param {T} changed - The object with potential changes.
	* @param {T} original - The original object to compare against.
	* @returns {Partial<Record<string, unknown>>} A new object representing the difference.
	*/
	var diffObj = (changed, original) => {
		const changes = (object, base) => _.transform(object, (result, value, key) => {
			if (!_.isEqual(value, base[key])) if (_.isObject(value) && _.isObject(base[key]) && !_.isArray(value)) result[key] = changes(value, base[key]);
			else result[key] = value;
		});
		return changes(changed, original);
	};
	//#endregion
	//#region src/core/settings.ts
	/**
	* Default settings for the script.
	* @type {ISettings}
	*/
	var defaultSettings = {
		bookmarks: [],
		colorScheme: "dark",
		downloadZip: false,
		enabled: false,
		fitWidthIfOversize: true,
		header: "scroll",
		hidePageControls: false,
		lazyLoadImages: false,
		lazyStart: 50,
		loadMode: "wait",
		locale: "en_US",
		maxReload: 5,
		minZoom: 30,
		navbar: "bottom",
		pagination: "disabled",
		scrollHeight: 25,
		theme: "#29487D",
		loadSpeed: "Extreme",
		viewMode: "WebComic",
		zoomMode: "percent",
		zoomStep: 30,
		zoomValue: 100,
		keybinds: {
			SCROLL_UP: [
				"up",
				"W",
				"num_8"
			],
			SCROLL_DOWN: [
				"down",
				"S",
				"num_2"
			],
			NEXT_CHAPTER: [
				"right",
				"/",
				"D",
				"num_6"
			],
			PREVIOUS_CHAPTER: [
				"left",
				";",
				"A",
				"num_4"
			],
			RETURN_CHAPTER_LIST: [
				"backspace",
				"del",
				"num_decimal"
			],
			ENLARGE: [
				"-",
				"num_add",
				"E"
			],
			REDUCE: [
				"=",
				"num_subtract",
				"Q"
			],
			RESTORE: [
				"9",
				"num_divide",
				"R"
			],
			FIT_WIDTH: [
				"0",
				"num_multiply",
				"F"
			],
			FIT_HEIGHT: ["H", "num_0"],
			SETTINGS: [
				"num_divide",
				"num_5",
				"X"
			],
			VIEW_MODE_WEBCOMIC: ["C"],
			VIEW_MODE_VERTICAL: ["V"],
			VIEW_MODE_LEFT: ["N"],
			VIEW_MODE_RIGHT: ["B"],
			VIEW_MODE_GALLERY: ["G"],
			SCROLL_START: ["space"],
			INCREASE_SPEED: ["."],
			DECREASE_SPEED: [","]
		}
	};
	/**
	* Settings overrides for mobile devices.
	* @type {Partial<ISettings>}
	*/
	var mobileSettings = {
		lazyLoadImages: true,
		fitWidthIfOversize: true,
		navbar: "disabled",
		viewMode: "WebComic",
		header: "scroll",
		hidePageControls: true,
		pagination: "disabled"
	};
	/**
	* Settings overrides for standalone mode.
	* @type {Partial<ISettings>}
	*/
	var standaloneSettings = {
		loadSpeed: "All",
		lazyLoadImages: false,
		downloadZip: false,
		theme: "oklch(44.6% 0.043 257.281)"
	};
	/**
	* Generates the default settings object based on the device type (mobile/desktop) and scope (global/local).
	* @param {boolean} [global=true] - Whether to get the global or local default settings.
	* @returns {ISettings} The default settings object.
	*/
	function getDefault(global = true) {
		const baseSettings = {
			...defaultSettings,
			theme: global ? "#29487D" : "#004526"
		};
		let mergedSettings = isMobile() ? _.defaultsDeep(mobileSettings, baseSettings) : baseSettings;
		if (isStandalone()) mergedSettings = _.defaultsDeep(standaloneSettings, mergedSettings);
		return mergedSettings;
	}
	/**
	* A customizer function for Lodash's isEqualWith to handle specific
	* comparison logic for ISettings objects.
	*
	* It specifically handles the 'bookmarks' array and the `keybinds` object,
	* comparing their contents regardless of their order.
	*
	* @param value The value from the first object.
	* @param other The value from the second object.
	* @param key The key of the property being compared.
	* @returns A boolean if a custom comparison is made, or undefined to
	* let Lodash's default comparison take over.
	*/
	function areBookmarksEqual(value, other) {
		if (Array.isArray(value) && Array.isArray(other)) {
			if (value.length !== other.length) return false;
			const getBookmarkSortKey = (b) => `${b.url}-${b.date}`;
			const sortedValue = [...value].sort((a, b) => getBookmarkSortKey(a).localeCompare(getBookmarkSortKey(b)));
			const sortedOther = [...other].sort((a, b) => getBookmarkSortKey(a).localeCompare(getBookmarkSortKey(b)));
			return _.isEqual(sortedValue, sortedOther);
		}
	}
	function areKeybindsEqual(value, other) {
		if (value && typeof value === "object" && other && typeof other === "object") {
			const valueKeybinds = value;
			const otherKeybinds = other;
			const keysA = _.keys(valueKeybinds).sort((a, b) => a.localeCompare(b));
			const keysB = _.keys(otherKeybinds).sort((a, b) => a.localeCompare(b));
			if (!_.isEqual(keysA, keysB)) return false;
			for (const k of keysA) {
				const sortedArrayA = valueKeybinds[k] ? [...valueKeybinds[k]].sort((a, b) => a.localeCompare(b)) : [];
				const sortedArrayB = otherKeybinds[k] ? [...otherKeybinds[k]].sort((a, b) => a.localeCompare(b)) : [];
				if (!_.isEqual(sortedArrayA, sortedArrayB)) return false;
			}
			return true;
		}
	}
	function compareSettingsCustomizer(value, other, key) {
		if (key === "bookmarks") return areBookmarksEqual(value, other);
		if (key === "keybinds") return areKeybindsEqual(value, other);
	}
	/**
	* Compares two ISettings objects to detect changes, handling bookmarks
	* as an unordered list. Can also compare individual properties if the
	* optional key is provided.
	*
	* @param newSettings The new settings object or value.
	* @param oldSettings The old settings object or value.
	* @param key The optional key to use when comparing individual properties.
	* @returns true if the settings are identical, false otherwise.
	*/
	function haveSettingsChanged(newSettings, oldSettings, key) {
		if (newSettings === oldSettings) return false;
		if (key) {
			const tempA = { [key]: newSettings };
			const tempB = { [key]: oldSettings };
			return !_.isEqualWith(tempA, tempB, compareSettingsCustomizer);
		}
		return !_.isEqualWith(newSettings, oldSettings, compareSettingsCustomizer);
	}
	var globalSettings = _.defaultsDeep(getGlobalSettings(getDefault()), getDefault());
	var localSettings = _.defaultsDeep(getLocalSettings(getDefault(false)), getDefault(false));
	/**
	* Checks if site-specific (local) settings are currently enabled and active.
	* @returns {boolean} True if local settings are enabled, false otherwise.
	*/
	var isSettingsLocal = () => localSettings?.enabled === true;
	var isLocalSettingsAllowed = (key) => isSettingsLocal() && ![
		"locale",
		"bookmarks",
		"keybinds"
	].includes(key);
	/**
	* The reactive store for all settings. It holds either global or local settings based on the current mode.
	* Components should subscribe to this store to react to settings changes.
	* @type {import('nanostores').MapStore<ISettings>}
	*/
	var settings = /* @__PURE__ */ map(isSettingsLocal() ? {
		...localSettings,
		locale: globalSettings.locale,
		keybinds: globalSettings.keybinds,
		bookmarks: globalSettings.bookmarks
	} : globalSettings);
	/**
	* A computed store that provides the currently selected locale object based on the `locale` setting.
	* @type {import('nanostores').ComputedStore<ILocale>}
	*/
	var locale = /* @__PURE__ */ computed(settings, (current) => locales.find((l) => l.ID === current.locale) ?? locales[1]);
	/**
	* The reactive store for the application's volatile state, like current page, scroll state, etc.
	* This state is not persisted.
	* @type {import('nanostores').MapStore<IApp>}
	*/
	var appState = /* @__PURE__ */ map({
		autoScroll: false,
		chapter: e$6(),
		currentPage: 0,
		device: getDevice(),
		manga: void 0,
		panel: "none",
		scrollToPage: void 0
	});
	/**
	* Refreshes the reactive `settings` store with the latest values from the raw settings objects.
	* Call this after a change is made to `globalSettings` or `localSettings` to propagate the change.
	* @param {ISettingsKey} [key] - If provided, refreshes only a single key. Otherwise, refreshes the entire object.
	*/
	function refreshSettings(key) {
		if (key) {
			const newVal = isLocalSettingsAllowed(key) ? localSettings[key] : globalSettings[key];
			const currentVal = settings.get()?.[key];
			if (haveSettingsChanged(currentVal, newVal, key)) {
				settings.setKey(key, newVal);
				logScript("Refreshed Settings", key, newVal);
			}
			return;
		}
		for (const key in settings.get()) {
			const currentObj = settings.get()[key];
			const newObj = isLocalSettingsAllowed(key) ? localSettings[key] : globalSettings[key];
			if (haveSettingsChanged(currentObj, newObj)) settings.setKey(key, newObj);
		}
		logScript("Refreshed All Settings");
	}
	/**
	* Synchronization callback for when global settings are changed in another tab.
	* @param {Partial<ISettings>} newValue - The new settings value from storage.
	*/
	function syncGlobalSettings(newValue) {
		const newSettings = _.defaultsDeep(newValue, getDefault());
		const diff = globalSettings ? diffObj(newSettings, globalSettings) : newSettings;
		if (!isNothing(diff)) {
			logScript("Imported Global Settings", diff);
			globalSettings = newSettings;
			for (const key in diff) refreshSettings(key);
		}
	}
	settingsChangeListener(_.debounce(syncGlobalSettings, 300), "settings");
	/**
	* Synchronization callback for when local settings are changed in another tab.
	* @param {Partial<ISettings>} newValue - The new settings value from storage.
	*/
	function syncLocalSettings(newValue) {
		const newSettings = _.defaultsDeep(newValue, getDefault(false));
		const diff = localSettings ? diffObj(newSettings, localSettings) : newSettings;
		if (!isNothing(diff)) {
			logScript("Imported Local Settings", diff);
			localSettings = newSettings;
			for (const key in diff) refreshSettings(key);
		}
	}
	settingsChangeListener(_.debounce(syncLocalSettings, 300), location.hostname);
	/**
	* Gets the effective value for a setting from the reactive store.
	* This respects whether local or global settings are currently active.
	* @template K
	* @param {K} key - The key of the setting to retrieve.
	* @returns {ISettings[K]} The effective value of the setting.
	*/
	function getSettingsValue(key) {
		return settings.get()?.[key];
	}
	/**
	* Sets a single setting value in the reactive `settings` store. This change is NOT persisted to storage.
	* @template K
	* @param {K} key - The key of the setting to update.
	* @param {ISettings[K]} value - The new value for the setting.
	*/
	function setSettingsValue(key, value) {
		const current = settings.get()?.[key];
		if (!haveSettingsChanged(current, value, key)) return;
		settings.setKey(key, value);
	}
	/**
	* Saves a single setting value by its key and persists the change to Tampermonkey's storage.
	* @template K
	* @param {K} key - The key of the setting to update.
	* @param {ISettings[K]} value - The new value for the setting.
	*/
	function saveSettingsValue(key, value) {
		if (!haveSettingsChanged(getSettingsValue(key), value, key)) return;
		settings.setKey(key, value);
		if (isLocalSettingsAllowed(key)) {
			localSettings[key] = value;
			saveLocalSettings(diffObj(localSettings, getDefault(false)));
		} else {
			globalSettings[key] = value;
			saveGlobalSettings(diffObj(globalSettings, getDefault()));
		}
	}
	/**
	* Updates a single setting value using a function and persists the change.
	* @template K
	* @param {K} key - The key of the setting to update.
	* @param {(value: ISettings[K]) => ISettings[K]} fn - A function that receives the current value and returns the new value.
	*/
	function changeSettingsValue(key, fn) {
		setSettingsValue(key, fn(getSettingsValue(key)));
	}
	/**
	* Gets a value from the reactive `appState` store.
	* @template K
	* @param {K} key - The key of the value to get.
	* @returns {IApp[K]} The value from the app state.
	*/
	function getAppStateValue(key) {
		return appState.get()[key];
	}
	/**
	* Sets a value in the reactive `appState` store.
	* @template K
	* @param {K} key - The key of the value to set.
	* @param {IApp[K]} value - The new value.
	*/
	function setAppStateValue(key, value) {
		const current = appState.get()[key];
		if (_.isEqual(current, value)) return;
		appState.setKey(key, value);
	}
	/**
	* Updates a value in the `appState` store using a function.
	* @template K
	* @param {K} key - The key of the value to change.
	* @param {(value: IApp[K]) => IApp[K]} fn - The function to change the value.
	*/
	function changeAppStateValue(key, fn) {
		const oldVal = appState.get()[key];
		const newVal = fn(oldVal);
		if (_.isEqual(oldVal, newVal)) return;
		appState.setKey(key, newVal);
	}
	/**
	* Updates a specific image's data within the `appState.images` object.
	* This is useful for updating properties of a single image (e.g., its loaded status, dimensions).
	*
	* @param {number} index - The index of the image to update.
	* @param {(value: Page) => Page} fn - A function that receives the current image data and returns the updated image data.
	*/
	function changeImage(index, fn) {
		changeAppStateValue("images", (images) => ({
			...images,
			[index]: {
				...images?.[index],
				...fn(images?.[index] ?? {})
			}
		}));
	}
	/**
	* Gets a translated string from the current locale.
	* @param {ILocaleKey | string} name - The key of the string to get.
	* @returns {string} The translated string, or a placeholder if not found.
	*/
	function getLocaleString(name) {
		const currentLocale = locales.find((l) => l.ID === getSettingsValue("locale")) ?? locales[1];
		if (isKey(currentLocale, name)) return currentLocale?.[name] ?? locales[1]?.[name];
		return `##MISSING_STRING_${name}##`;
	}
	/**
	* Enables or disables site-specific (local) settings.
	* @param {boolean} [activate=false] - Whether to activate or deactivate local settings.
	* @returns {boolean} The new state of local settings (true if enabled, false otherwise).
	*/
	function toggleLocalSettings(activate = false) {
		localSettings.enabled = activate;
		saveLocalSettings(diffObj(localSettings, getDefault(false)));
		logScript("Local Settings ", activate ? "Enabled" : "Disabled");
		toast.info({
			title: `Changed Settings to`,
			description: isSettingsLocal() ? "Local" : "Global",
			duration: 2e3
		});
		return isSettingsLocal();
	}
	/**
	* Resets the settings (either local or global) to their default values.
	*/
	function resetSettings() {
		if (isSettingsLocal()) {
			removeValueGM(location.hostname);
			localSettings = getDefault(false);
			toggleLocalSettings(false);
		} else {
			removeValueGM("settings");
			globalSettings = getDefault();
			refreshSettings();
		}
		logScript("Settings Reset");
	}
	/**
	* Checks if a URL is bookmarked.
	* @param {string} [url=window.location.href] - The URL to check.
	* @returns {number | undefined} The bookmarked page number, or undefined if not bookmarked.
	*/
	function isBookmarked(url = location.href) {
		return getSettingsValue("bookmarks").find((el) => el.url === url)?.page;
	}
	/**
	* A debug utility to log the current state of settings to the console.
	* @param {ISettingsKey | null} [key=null] - An optional settings key to inspect a specific value.
	*/
	function showSettings(key = null) {
		logScriptVerbose("Current Settings (Local:", isSettingsLocal(), ") ", key ? settings.get()[key] : settings.get(), "\nGlobal Settings", key ? globalSettings[key] : globalSettings, "\nLocal Settings", key ? localSettings[key] : localSettings, "\nAppState", appState.get());
	}
	giveToWindow("MOVSettings", showSettings);
	var changedSettings = (newSettings, oldSettings, changedKey) => {
		if (changedKey && !["bookmarks", "zoomValue"].includes(changedKey)) {
			const oldValue = oldSettings[changedKey];
			const newValue = newSettings[changedKey];
			toast.info({
				title: `${changedKey} Changed`,
				description: `from ${JSON.stringify(oldValue)} to ${JSON.stringify(newValue)}`,
				duration: 2e3
			});
		}
	};
	settings.listen(_.debounce(changedSettings, 300));
	//#endregion
	//#region node_modules/lit-html/directives/if-defined.js
	/**
	* @license
	* Copyright 2018 Google LLC
	* SPDX-License-Identifier: BSD-3-Clause
	*/ var o$3 = (o) => o ?? A;
	//#endregion
	//#region src/ui/styles/button.css?inline
	var button_default = ":host {\r\n  display: inline-block;\r\n  --mov-font-size-scale: 1;\r\n  --mov-font-size-m: calc(16px * var(--mov-font-size-scale));\r\n  --mov-font-size-s: round(calc(var(--mov-font-size-m) / 1.125), 1px);\r\n  --mov-font-size-l: round(calc(var(--mov-font-size-m) * 1.125 * 1.125), 1px);\r\n  --mov-border-width-s: 0.0625rem;\r\n  --mov-border-radius-pill: 9999px;\r\n  --mov-transition-fast: 75ms;\r\n  --mov-font-weight-action: 500;\r\n  --mov-focus-ring: solid 0.1875rem var(--mov-color-fill-loud);\r\n  --mov-focus-ring-offset: 0.0625rem;\r\n  --mov-line-height-condensed: 1.2;\r\n  --mov-form-control-padding-block: 0.75em;\r\n  --mov-form-control-padding-inline: 1em;\r\n  --mov-form-control-height: round(\r\n    calc(2 * var(--mov-form-control-padding-block) + 1em * var(--mov-line-height-condensed)),\r\n    1px\r\n  );\r\n}\r\n\r\n:host([size=\"small\"]) {\r\n  font-size: var(--mov-font-size-s);\r\n}\r\n:host([size=\"medium\"]) {\r\n  font-size: var(--mov-font-size-m);\r\n}\r\n:host([size=\"large\"]) {\r\n  font-size: var(--mov-font-size-l);\r\n}\r\n\r\n.button {\r\n  box-sizing: border-box;\r\n  display: inline-flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  text-decoration: none;\r\n  user-select: none;\r\n  white-space: nowrap;\r\n  vertical-align: middle;\r\n  transition-property: background, border, box-shadow, color;\r\n  transition-duration: var(--mov-transition-fast);\r\n  cursor: pointer;\r\n  padding: 0 var(--mov-form-control-padding-inline);\r\n  font-family: inherit;\r\n  font-size: inherit;\r\n  font-weight: var(--mov-font-weight-action);\r\n  line-height: calc(var(--mov-form-control-height) - var(--mov-border-width-s) * 2);\r\n  height: var(--mov-form-control-height);\r\n  border-radius: var(--mov-border-radius-m, 0.375rem);\r\n  border-style: solid;\r\n  border-width: var(--mov-border-width-s);\r\n  background-color: var(--mov-color-fill-loud);\r\n  color: var(--mov-color-on-loud);\r\n  border-color: transparent;\r\n}\r\n\r\n/* Appearance modifiers */\r\n:host([appearance~=\"plain\"]) {\r\n  .button {\r\n    color: var(--mov-color-on-quiet);\r\n    background-color: transparent;\r\n    border-color: transparent;\r\n  }\r\n  @media (hover: hover) {\r\n    .button:not(.disabled):not(.loading):hover {\r\n      color: var(--mov-color-on-quiet);\r\n      background-color: var(--mov-color-fill-quiet);\r\n    }\r\n  }\r\n  .button:not(.disabled):not(.loading):active {\r\n    color: var(--mov-color-on-quiet);\r\n    background-color: color-mix(in oklab, var(--mov-color-fill-quiet), var(--mov-color-mix-active));\r\n  }\r\n}\r\n\r\n:host([appearance~=\"outlined\"]) {\r\n  .button {\r\n    color: var(--mov-color-on-quiet);\r\n    background-color: transparent;\r\n    border-color: var(--mov-color-border-loud);\r\n  }\r\n  @media (hover: hover) {\r\n    .button:not(.disabled):not(.loading):hover {\r\n      color: var(--mov-color-on-quiet);\r\n      background-color: var(--mov-color-fill-quiet);\r\n    }\r\n  }\r\n  .button:not(.disabled):not(.loading):active {\r\n    color: var(--mov-color-on-quiet);\r\n    background-color: color-mix(in oklab, var(--mov-color-fill-quiet), var(--mov-color-mix-active));\r\n  }\r\n}\r\n\r\n:host([appearance~=\"filled\"]) {\r\n  .button {\r\n    color: var(--mov-color-on-normal);\r\n    background-color: var(--mov-color-fill-normal);\r\n    border-color: transparent;\r\n  }\r\n  @media (hover: hover) {\r\n    .button:not(.disabled):not(.loading):hover {\r\n      color: var(--mov-color-on-normal);\r\n      background-color: color-mix(\r\n        in oklab,\r\n        var(--mov-color-fill-normal),\r\n        var(--mov-color-mix-hover)\r\n      );\r\n    }\r\n  }\r\n  .button:not(.disabled):not(.loading):active {\r\n    color: var(--mov-color-on-normal);\r\n    background-color: color-mix(\r\n      in oklab,\r\n      var(--mov-color-fill-normal),\r\n      var(--mov-color-mix-active)\r\n    );\r\n  }\r\n}\r\n\r\n:host([appearance~=\"filled\"][appearance~=\"outlined\"]) .button {\r\n  border-color: var(--mov-color-border-normal);\r\n}\r\n\r\n:host([appearance~=\"accent\"]) {\r\n  .button {\r\n    color: var(--mov-color-on-loud);\r\n    background-color: var(--mov-color-fill-loud);\r\n    border-color: transparent;\r\n  }\r\n  @media (hover: hover) {\r\n    .button:not(.disabled):not(.loading):hover {\r\n      background-color: color-mix(in oklab, var(--mov-color-fill-loud), var(--mov-color-mix-hover));\r\n    }\r\n  }\r\n  .button:not(.disabled):not(.loading):active {\r\n    background-color: color-mix(in oklab, var(--mov-color-fill-loud), var(--mov-color-mix-active));\r\n  }\r\n}\r\n/* Focus states */\r\n.button:focus {\r\n  outline: none;\r\n}\r\n.button:focus-visible {\r\n  outline: var(--mov-focus-ring);\r\n  outline-offset: var(--mov-focus-ring-offset);\r\n}\r\n\r\n/* Disabled state */\r\n.button.disabled {\r\n  opacity: 0.5;\r\n  cursor: not-allowed;\r\n}\r\n.button.disabled * {\r\n  pointer-events: none;\r\n}\r\n\r\n/* Icon buttons */\r\n.button.is-icon-button {\r\n  outline-offset: 2px;\r\n  width: var(--mov-form-control-height);\r\n  aspect-ratio: 1;\r\n}\r\n\r\n/* Pill modifier */\r\n:host([pill]) .button {\r\n  border-radius: var(--mov-border-radius-pill);\r\n}\r\n\r\n.start,\r\n.end {\r\n  flex: 0 0 auto;\r\n  display: flex;\r\n  align-items: center;\r\n  pointer-events: none;\r\n}\r\n\r\n.label {\r\n  display: inline-block;\r\n}\r\n.is-icon-button .label {\r\n  display: flex;\r\n}\r\n\r\nmov-icon[part~=\"caret\"] {\r\n  display: flex;\r\n  align-self: center;\r\n  align-items: center;\r\n}\r\nmov-icon[part~=\"caret\"]::part(svg) {\r\n  width: 0.875em;\r\n  height: 0.875em;\r\n}\r\n\r\n.loading {\r\n  position: relative;\r\n  cursor: wait;\r\n}\r\n.loading .start,\r\n.loading .label,\r\n.loading .end,\r\n.loading .caret {\r\n  visibility: hidden;\r\n}\r\n\r\n.spinner {\r\n  --indicator-color: currentColor;\r\n  --track-color: color-mix(in oklab, currentColor, transparent 90%);\r\n  position: absolute;\r\n  font-size: 1em;\r\n  height: 1em;\r\n  width: 1em;\r\n  top: calc(50% - 0.5em);\r\n  left: calc(50% - 0.5em);\r\n  border-radius: 50%;\r\n  border: 2px solid var(--track-color);\r\n  border-top-color: var(--indicator-color);\r\n  animation: spin 1s linear infinite;\r\n}\r\n\r\n@keyframes spin {\r\n  to {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\nslot[name=\"start\"]::slotted(*) {\r\n  margin-inline-end: 0.75em;\r\n}\r\nslot[name=\"end\"]::slotted(*),\r\n.button:not(.visually-hidden-label) [part~=\"caret\"] {\r\n  margin-inline-start: 0.75em;\r\n}\r\n";
	//#endregion
	//#region src/ui/components/Button.ts
	var Button = class Button extends i$1 {
		constructor(..._args) {
			super(..._args);
			this.isIconButton = false;
			this.hasLabel = false;
			this.hasStart = false;
			this.hasEnd = false;
			this.title = "";
			this.appearance = "accent";
			this.variant = "brand";
			this.size = "medium";
			this.withCaret = false;
			this.disabled = false;
			this.loading = false;
			this.pill = false;
			this.type = "button";
		}
		static {
			this.styles = [r$4(button_default)];
		}
		handleClick(event) {
			if (this.disabled || this.loading) {
				event.preventDefault();
				event.stopPropagation();
			}
		}
		click() {
			this.button?.click();
		}
		focus(options) {
			this.button?.focus(options);
		}
		blur() {
			this.button?.blur();
		}
		render() {
			const isLink = !!this.href;
			const classes = {
				button: true,
				"with-caret": this.withCaret,
				disabled: this.disabled,
				loading: this.loading,
				pill: this.pill,
				"has-label": this.hasLabel,
				"has-start": this.hasStart,
				"has-end": this.hasEnd,
				"is-icon-button": this.isIconButton
			};
			const buttonContent = b$1`
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
      ${this.withCaret ? b$1`<mov-icon
            part="caret"
            class="caret"
            name="IconChevronRight"
            style="transform: rotate(90deg)"
          ></mov-icon>` : ""}
      ${this.loading ? b$1`<span
            part="spinner"
            class="spinner"
          ></span>` : ""}
    `;
			if (isLink) return b$1`
        <a
          part="base"
          class=${e$1(classes)}
          href=${o$3(this.href)}
          target=${o$3(this.target)}
          title=${o$3(this.title)}
          role="button"
          aria-disabled=${this.disabled ? "true" : "false"}
          tabindex=${this.disabled ? "-1" : "0"}
          download=${o$3(this.download)}
          @click=${this.handleClick}
        >
          ${buttonContent}
        </a>
      `;
			else return b$1`
        <button
          part="base"
          class=${e$1(classes)}
          ?disabled=${this.disabled || this.loading}
          type=${o$3(this.type)}
          title=${o$3(this.title)}
          name=${o$3(this.name)}
          value=${o$3(this.value)}
          aria-disabled=${this.disabled ? "true" : "false"}
          tabindex=${this.disabled ? "-1" : "0"}
        >
          ${buttonContent}
        </button>
      `;
		}
		handleLabelSlotChange() {
			const nodes = this.labelSlot?.assignedNodes({ flatten: true }) ?? [];
			const elements = nodes.filter((node) => node.nodeType === Node.ELEMENT_NODE);
			const textNodes = nodes.filter((node) => node.nodeType === Node.TEXT_NODE && node.textContent?.trim() !== "");
			const isIcon = (el) => [
				"wa-icon",
				"mov-icon",
				"svg"
			].includes(el.localName);
			const hasIcon = elements.some(isIcon);
			this.isIconButton = textNodes.length === 0 && hasIcon;
		}
	};
	__decorate([e$2(".button")], Button.prototype, "button", void 0);
	__decorate([e$2("slot:not([name])")], Button.prototype, "labelSlot", void 0);
	__decorate([r$1()], Button.prototype, "isIconButton", void 0);
	__decorate([r$1()], Button.prototype, "hasLabel", void 0);
	__decorate([r$1()], Button.prototype, "hasStart", void 0);
	__decorate([r$1()], Button.prototype, "hasEnd", void 0);
	__decorate([n$1()], Button.prototype, "title", void 0);
	__decorate([n$1({ reflect: true })], Button.prototype, "appearance", void 0);
	__decorate([n$1({ reflect: true })], Button.prototype, "variant", void 0);
	__decorate([n$1({ reflect: true })], Button.prototype, "size", void 0);
	__decorate([n$1({
		attribute: "with-caret",
		type: Boolean,
		reflect: true
	})], Button.prototype, "withCaret", void 0);
	__decorate([n$1({
		type: Boolean,
		reflect: true
	})], Button.prototype, "disabled", void 0);
	__decorate([n$1({
		type: Boolean,
		reflect: true
	})], Button.prototype, "loading", void 0);
	__decorate([n$1({
		type: Boolean,
		reflect: true
	})], Button.prototype, "pill", void 0);
	__decorate([n$1()], Button.prototype, "type", void 0);
	__decorate([n$1({ reflect: true })], Button.prototype, "name", void 0);
	__decorate([n$1({ reflect: true })], Button.prototype, "value", void 0);
	__decorate([n$1({ reflect: true })], Button.prototype, "href", void 0);
	__decorate([n$1()], Button.prototype, "target", void 0);
	__decorate([n$1({ reflect: true })], Button.prototype, "rel", void 0);
	__decorate([n$1()], Button.prototype, "download", void 0);
	__decorate([n$1({ reflect: true })], Button.prototype, "form", void 0);
	Button = __decorate([t$1("mov-button")], Button);
	//#endregion
	//#region src/ui/components/ToggleButton.ts
	var ToggleButton = class ToggleButton extends i$1 {
		constructor(..._args) {
			super(..._args);
			this.mode = "burger";
			this.active = false;
			this.label = "";
			this.icon = "";
			this.activeIcon = "";
			this.appearance = "accent";
			this.size = "medium";
			this.disabled = false;
			this.loading = false;
		}
		static {
			this.styles = i$3`
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
  `;
		}
		connectedCallback() {
			super.connectedCallback();
			if (!this.label) this.label = this._getDefaultLabel();
		}
		render() {
			const currentLabel = this.active ? this.activeLabel ?? this.label : this.label;
			const classes = {
				"two-icon-mode": ["custom", "theme"].includes(this.mode),
				"single-icon-mode": [
					"chevron",
					"expand",
					"play-pause"
				].includes(this.mode),
				"burger-mode-active": this.mode === "burger"
			};
			return b$1`
      <mov-button
        @click=${this._onClick}
        .appearance=${o$3(this.appearance)}
        .size=${o$3(this.size)}
        ?disabled=${o$3(this.disabled)}
        ?loading=${o$3(this.loading)}
        .title=${o$3(this.title)}
        class=${e$1(classes)}
        title=${currentLabel}
        aria-label=${currentLabel}
        aria-pressed=${this.active ? "true" : "false"}
        icon-only
      >
        ${this._renderIcons()}
      </mov-button>
    `;
		}
		_getDefaultLabel() {
			switch (this.mode) {
				case "burger": return "Toggle menu";
				case "chevron": return "Toggle expand";
				case "theme": return "Toggle theme";
				case "play-pause": return "Toggle play";
				case "expand": return "Toggle expand";
				case "custom": return "Toggle";
				default: return "Toggle";
			}
		}
		_getIcons() {
			switch (this.mode) {
				case "chevron": return {
					inactive: "chevron-right",
					active: "chevron-right"
				};
				case "theme": return {
					inactive: "moon",
					active: "sun"
				};
				case "play-pause": return {
					inactive: "player-play",
					active: "player-pause"
				};
				case "expand": return {
					inactive: "arrow-autofit-down",
					active: "arrow-autofit-down"
				};
				case "custom": return {
					inactive: this.icon,
					active: this.activeIcon
				};
				default: return {
					inactive: "",
					active: ""
				};
			}
		}
		_renderIcons() {
			if (this.mode === "burger") return b$1`
        <div class="burger-mode">
          <div class="burger-line"></div>
          <div class="burger-line"></div>
          <div class="burger-line"></div>
        </div>
      `;
			const icons = this._getIcons();
			if (!icons.inactive) return A;
			if (this.mode === "chevron") return b$1`<mov-icon
        class="chevron-icon"
        name=${icons.inactive}
      ></mov-icon>`;
			if (this.mode === "expand") return b$1`<mov-icon
        class="expand-icon"
        name=${icons.inactive}
      ></mov-icon>`;
			if (this.mode === "play-pause") return b$1`<mov-icon
        class="play-pause-icon"
        name=${this.active ? icons.active : icons.inactive}
      ></mov-icon>`;
			return b$1`
      <mov-icon
        class="inactive-icon"
        name=${icons.inactive}
      ></mov-icon>
      <mov-icon
        class="active-icon"
        name=${icons.active}
      ></mov-icon>
    `;
		}
		_onClick() {
			if (this.disabled || this.loading) return;
			const oldActive = this.active;
			this.active = !this.active;
			this.dispatchEvent(new CustomEvent("toggle", {
				detail: {
					value: this.active,
					oldValue: oldActive,
					mode: this.mode
				},
				bubbles: true,
				composed: true
			}));
		}
		/** Programmatically triggers the toggle action. */
		toggle() {
			this._onClick();
		}
		/**
		* Sets the active state of the button without dispatching a `toggle` event.
		* @param {boolean} active - The new active state.
		*/
		setActive(active) {
			this.active = active;
		}
	};
	__decorate([n$1({ type: String })], ToggleButton.prototype, "mode", void 0);
	__decorate([n$1({
		type: Boolean,
		reflect: true
	})], ToggleButton.prototype, "active", void 0);
	__decorate([n$1({ type: String })], ToggleButton.prototype, "label", void 0);
	__decorate([n$1({ type: String })], ToggleButton.prototype, "activeLabel", void 0);
	__decorate([n$1({ type: String })], ToggleButton.prototype, "icon", void 0);
	__decorate([n$1({ type: String })], ToggleButton.prototype, "activeIcon", void 0);
	__decorate([n$1({
		type: String,
		reflect: true
	})], ToggleButton.prototype, "appearance", void 0);
	__decorate([n$1({
		type: String,
		reflect: true
	})], ToggleButton.prototype, "size", void 0);
	__decorate([n$1({ type: Boolean })], ToggleButton.prototype, "disabled", void 0);
	__decorate([n$1({
		type: Boolean,
		reflect: true
	})], ToggleButton.prototype, "loading", void 0);
	ToggleButton = __decorate([t$1("toggle-button")], ToggleButton);
	//#endregion
	//#region node_modules/lit-html/directives/style-map.js
	/**
	* @license
	* Copyright 2018 Google LLC
	* SPDX-License-Identifier: BSD-3-Clause
	*/ var n = "important", i = " !" + n, o$2 = e$7(class extends i$4 {
		constructor(t) {
			if (super(t), t.type !== t$3.ATTRIBUTE || "style" !== t.name || t.strings?.length > 2) throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.");
		}
		render(t) {
			return Object.keys(t).reduce((e, r) => {
				const s = t[r];
				return null == s ? e : e + `${r = r.includes("-") ? r : r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, "-$&").toLowerCase()}:${s};`;
			}, "");
		}
		update(e, [r]) {
			const { style: s } = e.element;
			if (void 0 === this.ft) return this.ft = new Set(Object.keys(r)), this.render(r);
			for (const t of this.ft) r[t] ?? (this.ft.delete(t), t.includes("-") ? s.removeProperty(t) : s[t] = null);
			for (const t in r) {
				const e = r[t];
				if (null != e) {
					this.ft.add(t);
					const r = "string" == typeof e && e.endsWith(i);
					t.includes("-") || r ? s.setProperty(t, r ? e.slice(0, -11) : e, r ? n : "") : s[t] = e;
				}
			}
			return E;
		}
	});
	//#endregion
	//#region src/utils/colors.ts
	/**
	* A collection of sample colors, courtesy of colors.css.
	*/
	var sample = {
		navy: "#001f3f",
		darkblue: "#1e4f7a",
		blue: "#1A2F4B",
		darkgreen: "#062925",
		green: "#1A3636",
		grass: "#1B3C53",
		teal: "#044A42",
		darkpurple: "#1B0044",
		purple: "#363062",
		grape: "#31326F",
		maroon: "#44000D"
	};
	/**
	* A comprehensive collection of predefined color palettes.
	* @type {IPalette}
	*/
	var colors = {
		dark: {
			50: "#C1C2C5",
			100: "#A6A7AB",
			200: "#909296",
			300: "#5c5f66",
			400: "#373A40",
			500: "#2C2E33",
			600: "#25262b",
			700: "#1A1B1E",
			800: "#141517",
			900: "#101113",
			950: "#000000"
		},
		slate: {
			"50": "oklch(98.4% 0.003 247.858)",
			"100": "oklch(96.8% 0.007 247.896)",
			"200": "oklch(92.9% 0.013 255.508)",
			"300": "oklch(86.9% 0.022 252.894)",
			"400": "oklch(70.4% 0.04 256.788)",
			"500": "oklch(55.4% 0.046 257.417)",
			"600": "oklch(44.6% 0.043 257.281)",
			"700": "oklch(37.2% 0.044 257.287)",
			"800": "oklch(27.9% 0.041 260.031)",
			"900": "oklch(20.8% 0.042 265.755)",
			"950": "oklch(12.9% 0.042 264.695)"
		},
		gray: {
			"50": "oklch(98.5% 0.002 247.839)",
			"100": "oklch(96.7% 0.003 264.542)",
			"200": "oklch(92.8% 0.006 264.531)",
			"300": "oklch(87.2% 0.01 258.338)",
			"400": "oklch(70.7% 0.022 261.325)",
			"500": "oklch(55.1% 0.027 264.364)",
			"600": "oklch(44.6% 0.03 256.802)",
			"700": "oklch(37.3% 0.034 259.733)",
			"800": "oklch(27.8% 0.033 256.848)",
			"900": "oklch(21% 0.034 264.665)",
			"950": "oklch(13% 0.028 261.692)"
		},
		zinc: {
			"50": "oklch(98.5% 0 0)",
			"100": "oklch(96.7% 0.001 286.375)",
			"200": "oklch(92% 0.004 286.32)",
			"300": "oklch(87.1% 0.006 286.286)",
			"400": "oklch(70.5% 0.015 286.067)",
			"500": "oklch(55.2% 0.016 285.938)",
			"600": "oklch(44.2% 0.017 285.786)",
			"700": "oklch(37% 0.013 285.805)",
			"800": "oklch(27.4% 0.006 286.033)",
			"900": "oklch(21% 0.006 285.885)",
			"950": "oklch(14.1% 0.005 285.823)"
		},
		neutral: {
			"50": "oklch(98.5% 0 0)",
			"100": "oklch(97% 0 0)",
			"200": "oklch(92.2% 0 0)",
			"300": "oklch(87% 0 0)",
			"400": "oklch(70.8% 0 0)",
			"500": "oklch(55.6% 0 0)",
			"600": "oklch(43.9% 0 0)",
			"700": "oklch(37.1% 0 0)",
			"800": "oklch(26.9% 0 0)",
			"900": "oklch(20.5% 0 0)",
			"950": "oklch(14.5% 0 0)"
		},
		stone: {
			"50": "oklch(98.5% 0.001 106.423)",
			"100": "oklch(97% 0.001 106.424)",
			"200": "oklch(92.3% 0.003 48.717)",
			"300": "oklch(86.9% 0.005 56.366)",
			"400": "oklch(70.9% 0.01 56.259)",
			"500": "oklch(55.3% 0.013 58.071)",
			"600": "oklch(44.4% 0.011 73.639)",
			"700": "oklch(37.4% 0.01 67.558)",
			"800": "oklch(26.8% 0.007 34.298)",
			"900": "oklch(21.6% 0.006 56.043)",
			"950": "oklch(14.7% 0.004 49.25)"
		},
		red: {
			"50": "oklch(97.1% 0.013 17.38)",
			"100": "oklch(93.6% 0.032 17.717)",
			"200": "oklch(88.5% 0.062 18.334)",
			"300": "oklch(80.8% 0.114 19.571)",
			"400": "oklch(70.4% 0.191 22.216)",
			"500": "oklch(63.7% 0.237 25.331)",
			"600": "oklch(57.7% 0.245 27.325)",
			"700": "oklch(50.5% 0.213 27.518)",
			"800": "oklch(44.4% 0.177 26.899)",
			"900": "oklch(39.6% 0.141 25.723)",
			"950": "oklch(25.8% 0.092 26.042)"
		},
		orange: {
			"50": "oklch(98% 0.016 73.684)",
			"100": "oklch(95.4% 0.038 75.164)",
			"200": "oklch(90.1% 0.076 70.697)",
			"300": "oklch(83.7% 0.128 66.29)",
			"400": "oklch(75% 0.183 55.934)",
			"500": "oklch(70.5% 0.213 47.604)",
			"600": "oklch(64.6% 0.222 41.116)",
			"700": "oklch(55.3% 0.195 38.402)",
			"800": "oklch(47% 0.157 37.304)",
			"900": "oklch(40.8% 0.123 38.172)",
			"950": "oklch(26.6% 0.079 36.259)"
		},
		amber: {
			"50": "oklch(98.7% 0.022 95.277)",
			"100": "oklch(96.2% 0.059 95.617)",
			"200": "oklch(92.4% 0.12 95.746)",
			"300": "oklch(87.9% 0.169 91.605)",
			"400": "oklch(82.8% 0.189 84.429)",
			"500": "oklch(76.9% 0.188 70.08)",
			"600": "oklch(66.6% 0.179 58.318)",
			"700": "oklch(55.5% 0.163 48.998)",
			"800": "oklch(47.3% 0.137 46.201)",
			"900": "oklch(41.4% 0.112 45.904)",
			"950": "oklch(27.9% 0.077 45.635)"
		},
		yellow: {
			"50": "oklch(98.7% 0.026 102.212)",
			"100": "oklch(97.3% 0.071 103.193)",
			"200": "oklch(94.5% 0.129 101.54)",
			"300": "oklch(90.5% 0.182 98.111)",
			"400": "oklch(85.2% 0.199 91.936)",
			"500": "oklch(79.5% 0.184 86.047)",
			"600": "oklch(68.1% 0.162 75.834)",
			"700": "oklch(55.4% 0.135 66.442)",
			"800": "oklch(47.6% 0.114 61.907)",
			"900": "oklch(42.1% 0.095 57.708)",
			"950": "oklch(28.6% 0.066 53.813)"
		},
		lime: {
			"50": "oklch(98.6% 0.031 120.757)",
			"100": "oklch(96.7% 0.067 122.328)",
			"200": "oklch(93.8% 0.127 124.321)",
			"300": "oklch(89.7% 0.196 126.665)",
			"400": "oklch(84.1% 0.238 128.85)",
			"500": "oklch(76.8% 0.233 130.85)",
			"600": "oklch(64.8% 0.2 131.684)",
			"700": "oklch(53.2% 0.157 131.589)",
			"800": "oklch(45.3% 0.124 130.933)",
			"900": "oklch(40.5% 0.101 131.063)",
			"950": "oklch(27.4% 0.072 132.109)"
		},
		green: {
			"50": "oklch(98.2% 0.018 155.826)",
			"100": "oklch(96.2% 0.044 156.743)",
			"200": "oklch(92.5% 0.084 155.995)",
			"300": "oklch(87.1% 0.15 154.449)",
			"400": "oklch(79.2% 0.209 151.711)",
			"500": "oklch(72.3% 0.219 149.579)",
			"600": "oklch(62.7% 0.194 149.214)",
			"700": "oklch(52.7% 0.154 150.069)",
			"800": "oklch(44.8% 0.119 151.328)",
			"900": "oklch(39.3% 0.095 152.535)",
			"950": "oklch(26.6% 0.065 152.934)"
		},
		emerald: {
			"50": "oklch(97.9% 0.021 166.113)",
			"100": "oklch(95% 0.052 163.051)",
			"200": "oklch(90.5% 0.093 164.15)",
			"300": "oklch(84.5% 0.143 164.978)",
			"400": "oklch(76.5% 0.177 163.223)",
			"500": "oklch(69.6% 0.17 162.48)",
			"600": "oklch(59.6% 0.145 163.225)",
			"700": "oklch(50.8% 0.118 165.612)",
			"800": "oklch(43.2% 0.095 166.913)",
			"900": "oklch(37.8% 0.077 168.94)",
			"950": "oklch(26.2% 0.051 172.552)"
		},
		teal: {
			"50": "oklch(98.4% 0.014 180.72)",
			"100": "oklch(95.3% 0.051 180.801)",
			"200": "oklch(91% 0.096 180.426)",
			"300": "oklch(85.5% 0.138 181.071)",
			"400": "oklch(77.7% 0.152 181.912)",
			"500": "oklch(70.4% 0.14 182.503)",
			"600": "oklch(60% 0.118 184.704)",
			"700": "oklch(51.1% 0.096 186.391)",
			"800": "oklch(43.7% 0.078 188.216)",
			"900": "oklch(38.6% 0.063 188.416)",
			"950": "oklch(27.7% 0.046 192.524)"
		},
		cyan: {
			"50": "oklch(98.4% 0.019 200.873)",
			"100": "oklch(95.6% 0.045 203.388)",
			"200": "oklch(91.7% 0.08 205.041)",
			"300": "oklch(86.5% 0.127 207.078)",
			"400": "oklch(78.9% 0.154 211.53)",
			"500": "oklch(71.5% 0.143 215.221)",
			"600": "oklch(60.9% 0.126 221.723)",
			"700": "oklch(52% 0.105 223.128)",
			"800": "oklch(45% 0.085 224.283)",
			"900": "oklch(39.8% 0.07 227.392)",
			"950": "oklch(30.2% 0.056 229.695)"
		},
		sky: {
			"50": "oklch(97.7% 0.013 236.62)",
			"100": "oklch(95.1% 0.026 236.824)",
			"200": "oklch(90.1% 0.058 230.902)",
			"300": "oklch(82.8% 0.111 230.318)",
			"400": "oklch(74.6% 0.16 232.661)",
			"500": "oklch(68.5% 0.169 237.323)",
			"600": "oklch(58.8% 0.158 241.966)",
			"700": "oklch(50% 0.134 242.749)",
			"800": "oklch(44.3% 0.11 240.79)",
			"900": "oklch(39.1% 0.09 240.876)",
			"950": "oklch(29.3% 0.066 243.157)"
		},
		blue: {
			"50": "oklch(97% 0.014 254.604)",
			"100": "oklch(93.2% 0.032 255.585)",
			"200": "oklch(88.2% 0.059 254.128)",
			"300": "oklch(80.9% 0.105 251.813)",
			"400": "oklch(70.7% 0.165 254.624)",
			"500": "oklch(62.3% 0.214 259.815)",
			"600": "oklch(54.6% 0.245 262.881)",
			"700": "oklch(48.8% 0.243 264.376)",
			"800": "oklch(42.4% 0.199 265.638)",
			"900": "oklch(37.9% 0.146 265.522)",
			"950": "oklch(28.2% 0.091 267.935)"
		},
		indigo: {
			"50": "oklch(96.2% 0.018 272.314)",
			"100": "oklch(93% 0.034 272.788)",
			"200": "oklch(87% 0.065 274.039)",
			"300": "oklch(78.5% 0.115 274.713)",
			"400": "oklch(67.3% 0.182 276.935)",
			"500": "oklch(58.5% 0.233 277.117)",
			"600": "oklch(51.1% 0.262 276.966)",
			"700": "oklch(45.7% 0.24 277.023)",
			"800": "oklch(39.8% 0.195 277.366)",
			"900": "oklch(35.9% 0.144 278.697)",
			"950": "oklch(25.7% 0.09 281.288)"
		},
		violet: {
			"50": "oklch(96.9% 0.016 293.756)",
			"100": "oklch(94.3% 0.029 294.588)",
			"200": "oklch(89.4% 0.057 293.283)",
			"300": "oklch(81.1% 0.111 293.571)",
			"400": "oklch(70.2% 0.183 293.541)",
			"500": "oklch(60.6% 0.25 292.717)",
			"600": "oklch(54.1% 0.281 293.009)",
			"700": "oklch(49.1% 0.27 292.581)",
			"800": "oklch(43.2% 0.232 292.759)",
			"900": "oklch(38% 0.189 293.745)",
			"950": "oklch(28.3% 0.141 291.089)"
		},
		purple: {
			"50": "oklch(97.7% 0.014 308.299)",
			"100": "oklch(94.6% 0.033 307.174)",
			"200": "oklch(90.2% 0.063 306.703)",
			"300": "oklch(82.7% 0.119 306.383)",
			"400": "oklch(71.4% 0.203 305.504)",
			"500": "oklch(62.7% 0.265 303.9)",
			"600": "oklch(55.8% 0.288 302.321)",
			"700": "oklch(49.6% 0.265 301.924)",
			"800": "oklch(43.8% 0.218 303.724)",
			"900": "oklch(38.1% 0.176 304.987)",
			"950": "oklch(29.1% 0.149 302.717)"
		},
		fuchsia: {
			"50": "oklch(97.7% 0.017 320.058)",
			"100": "oklch(95.2% 0.037 318.852)",
			"200": "oklch(90.3% 0.076 319.62)",
			"300": "oklch(83.3% 0.145 321.434)",
			"400": "oklch(74% 0.238 322.16)",
			"500": "oklch(66.7% 0.295 322.15)",
			"600": "oklch(59.1% 0.293 322.896)",
			"700": "oklch(51.8% 0.253 323.949)",
			"800": "oklch(45.2% 0.211 324.591)",
			"900": "oklch(40.1% 0.17 325.612)",
			"950": "oklch(29.3% 0.136 325.661)"
		},
		pink: {
			"50": "oklch(97.1% 0.014 343.198)",
			"100": "oklch(94.8% 0.028 342.258)",
			"200": "oklch(89.9% 0.061 343.231)",
			"300": "oklch(82.3% 0.12 346.018)",
			"400": "oklch(71.8% 0.202 349.761)",
			"500": "oklch(65.6% 0.241 354.308)",
			"600": "oklch(59.2% 0.249 0.584)",
			"700": "oklch(52.5% 0.223 3.958)",
			"800": "oklch(45.9% 0.187 3.815)",
			"900": "oklch(40.8% 0.153 2.432)",
			"950": "oklch(28.4% 0.109 3.907)"
		},
		rose: {
			"50": "oklch(96.9% 0.015 12.422)",
			"100": "oklch(94.1% 0.03 12.58)",
			"200": "oklch(89.2% 0.058 10.001)",
			"300": "oklch(81% 0.117 11.638)",
			"400": "oklch(71.2% 0.194 13.428)",
			"500": "oklch(64.5% 0.246 16.439)",
			"600": "oklch(58.6% 0.253 17.585)",
			"700": "oklch(51.4% 0.222 16.935)",
			"800": "oklch(45.5% 0.188 13.697)",
			"900": "oklch(41% 0.159 10.272)",
			"950": "oklch(27.1% 0.105 12.094)"
		}
	};
	/**
	* Determines if a given color is considered "dark" based on its contrast with white and black.
	* Uses the APCA (Accessible Perceptual Contrast Algorithm) for contrast calculation.
	* @param {string} color - The color string to evaluate.
	* @returns {boolean} True if the color is dark (i.e., white text provides better contrast), false otherwise.
	*/
	function isDark(color) {
		try {
			Color.get(color);
		} catch (_e) {
			return true;
		}
		return Color.contrast(color, "white", "Lstar") > Color.contrast(color, "black", "Lstar");
	}
	/**
	* Determines the optimal text color (black or white) for a given background color
	* to ensure sufficient contrast.
	* @param {string} color - The background color string.
	* @returns {string} Either '#FFFFFF' (white) or '#000000' (black).
	*/
	function getTextColor(color) {
		return isDark(color) ? "#FFFFFF" : "#000000";
	}
	/**
	* A collection of all processed icons, exported as Lit `unsafeSVG` directives.
	* Use these for direct rendering within a Lit template.
	* @example html`${IconFileDownload}`
	*/
	var { IconAdjustmentsHorizontal, IconApiBook, IconArrowsHorizontal, IconArrowsLeftRight, IconArrowAutofitDown, IconArrowAutofitHeight, IconArrowAutofitLeft, IconArrowAutofitRight, IconArrowAutofitWidth, IconArrowBigLeft, IconArrowBigRight, IconArrowsMove, IconArrowsMoveVertical, IconArrowsVertical, IconBook, IconBookOff, IconBookArrowLeft, IconBookArrowRight, IconBooksReturn, IconBookUpload, IconBookmark, IconBookmarkOff, IconBookmarks, IconBoxAlignTop, IconCategory, IconCheck, IconChevronLeft, IconChevronRight, IconAlertCircle, IconCircleCheck, IconCircleX, IconHelp, IconInfoCircle, IconComic1, IconComic1Flat, IconComic2, IconComic2Flat, IconComic3, IconComic3Flat, IconDeviceFloppy, IconDotsVertical, IconEReader1, IconEReader1Flat, IconEReader2, IconEReader2Flat, IconExternalLink, IconEye, IconEyeOff, IconFileDownload, IconFilePercent, IconFolderOpen, IconHandClick, IconKeyboard, IconLayoutDashboard, IconLayoutBottombar, IconLayoutBottombarInactive, IconLayoutSidebar, IconLayoutSidebarInactive, IconLayoutSidebarRight, IconLayoutSidebarRightInactive, IconListNumbers, IconLoader2, IconLocationCog, IconMenu2, IconMenuDeep, IconMessage, IconMoon, IconPage, IconPageFlat, IconPalette, IconPencil, IconPencilCog, IconPhoto, IconPhotoOff, IconPin, IconPlayerPause, IconPlayerPlay, IconRefresh, IconSettings, IconSettingsOff, IconSpacingHorizontal, IconSpacingVertical, IconSun, IconTrash, IconWorldCog, IconX, IconZoom, IconZoomCancel, IconZoomIn, IconZoomInArea, IconZoomOut, IconZoomOutArea, IconZoomPan } = _.fromPairs(_.entries(StyledIcons_exports).map(([iconKey, icon]) => [iconKey, o$4(icon)]));
	//#endregion
	//#region src/ui/components/ColorSwatch.ts
	var ColorSwatch = class ColorSwatch extends i$1 {
		constructor(..._args) {
			super(..._args);
			this.color = "#000000";
			this.size = 26;
			this.radius = "50%";
			this.contrastColor = "#FFFFFF";
			this.checked = false;
		}
		static {
			this.styles = i$3`
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
  `;
		}
		/**
		* Recalculates the contrasting color for the checkmark whenever the swatch color changes.
		* @internal
		*/
		willUpdate(changedProperties) {
			if (changedProperties.has("color")) this.contrastColor = getTextColor(this.color);
			if (changedProperties.has("selected")) this.checked = this.color.toLowerCase() === this.selected?.toLowerCase();
		}
		/**
		* Handles the click event on the swatch.
		* Dispatches 'input' and 'change' events with the swatch's color value.
		* @private
		*/
		handleClick() {
			this.dispatchEvent(new CustomEvent("input", {
				detail: { value: this.color },
				bubbles: true,
				composed: true
			}));
			this.dispatchEvent(new CustomEvent("change", {
				detail: { value: this.color },
				bubbles: true,
				composed: true
			}));
		}
		render() {
			const hostStyles = {
				width: `${this.size}px`,
				height: `${this.size}px`
			};
			const swatchStyles = {
				"--radius": typeof this.radius === "number" ? `${this.radius}px` : this.radius,
				"--color": this.color,
				"--contrast-color": this.contrastColor
			};
			return b$1`
      <div style=${o$2(hostStyles)}>
        <div
          class="swatch"
          style=${o$2(swatchStyles)}
          @click=${this.handleClick}
        >
          <slot></slot>
          <span class="check-icon"> ${IconCheck} </span>
        </div>
      </div>
    `;
		}
	};
	__decorate([n$1({ type: String })], ColorSwatch.prototype, "color", void 0);
	__decorate([n$1({ type: String })], ColorSwatch.prototype, "selected", void 0);
	__decorate([n$1({ type: Number })], ColorSwatch.prototype, "size", void 0);
	__decorate([n$1({ type: String })], ColorSwatch.prototype, "radius", void 0);
	__decorate([n$1({ state: true })], ColorSwatch.prototype, "contrastColor", void 0);
	__decorate([n$1({
		type: Boolean,
		reflect: true
	})], ColorSwatch.prototype, "checked", void 0);
	ColorSwatch = __decorate([t$1("color-swatch")], ColorSwatch);
	//#endregion
	//#region src/utils/palettes.ts
	/**
	* Generates a consistent 11-shade tonal palette from a single base color.
	* Any color from the generated palette will produce the same palette when used as a base.
	* The base color is guaranteed to be in the palette.
	* @internal
	* @param {Color} baseColor - A `Color` instance for the base color.
	* @returns {string[]} An array of 11 hex color strings.
	*/
	function gradientBySteps(baseColor) {
		const [originalLightness, chroma, hue] = baseColor.to("oklch").coords.map((c) => c ?? 0);
		const lightnessSteps = [
			.95,
			.9,
			.8,
			.7,
			.6,
			.5,
			.4,
			.3,
			.2,
			.1,
			.05
		];
		const palette = lightnessSteps.map((l) => new Color("oklch", [
			l,
			chroma,
			hue
		]).toString({ format: "hex" }));
		let closestIndex = -1;
		let minDiff = Infinity;
		for (let i = 0; i < lightnessSteps.length; i++) {
			const diff = Math.abs(lightnessSteps[i] - originalLightness);
			if (diff < minDiff) {
				minDiff = diff;
				closestIndex = i;
			}
		}
		if (closestIndex !== -1) palette[closestIndex] = baseColor.toString({ format: "hex" });
		return palette.map((c) => c.toUpperCase());
	}
	/**
	* Generates a gradient with adaptive saturation for a more aesthetically pleasing result.
	* Lighter shades are desaturated, while darker shades have their saturation slightly boosted.
	* @internal
	* @param {Color} baseColor - A `Color` instance for the base color.
	* @returns {string[]} An array of 11 hex color strings.
	*/
	function gradientBySaturation(baseColor) {
		const baseHsl = baseColor.to("hsl");
		const lightnessScale = [
			.97,
			.9,
			.8,
			.7,
			.6,
			.5,
			.4,
			.3,
			.2,
			.1,
			.05
		];
		const colors = [];
		for (const l of lightnessScale) {
			const newColor = baseHsl.clone();
			newColor.coords[2] = l * 100;
			const s = newColor.coords[1] ?? 0;
			if (l > .8) newColor.coords[1] = s * .4;
			else if (l > .6) newColor.coords[1] = s * .8;
			else if (l < .3) newColor.coords[1] = Math.min(100, s * 1.1);
			colors.push(newColor.toString({ format: "hex" }).toUpperCase());
		}
		return colors;
	}
	/**
	* Generates a gradient using a fixed set of lightness steps.
	* @internal
	* @param {Color} baseColor - A `Color` instance for the base color.
	* @returns {string[]} An array of 11 hex color strings.
	*/
	function gradientByLightness(baseColor) {
		const colors = [];
		const lightnessSteps = [
			95,
			90,
			80,
			70,
			60,
			50,
			40,
			30,
			20,
			10,
			5
		];
		const baseHsl = baseColor.to("hsl");
		for (const lightness of lightnessSteps) {
			const c = baseHsl.clone();
			c.coords[2] = lightness;
			colors.push(c.toString({ format: "hex" }).toUpperCase());
		}
		return colors;
	}
	/**
	* Generates an 11-color palette from a single base color, inspired by Chakra UI's color scale.
	* @param {Color} baseColor - A `Color` instance for the base color.
	* @returns {string[]} An array of 11 hex color strings.
	*/
	function gradientByChakra(baseColor) {
		const palette = new Array(11).fill("");
		const baseHsl = baseColor.to("hsl");
		const config = {
			lightest: {
				lightness: 95,
				rotate: -10,
				saturate: -30
			},
			darkest: {
				lightness: 10,
				rotate: 10,
				saturate: 10
			}
		};
		const lightStepsCount = 5;
		const darkStepsCount = 5;
		const lightnessStep = (config.lightest.lightness - 50) / lightStepsCount;
		const darknessStep = (50 - config.darkest.lightness) / darkStepsCount;
		const lightRotateStep = config.lightest.rotate / lightStepsCount;
		const darkRotateStep = config.darkest.rotate / darkStepsCount;
		const lightSaturateStep = config.lightest.saturate / lightStepsCount;
		const darkSaturateStep = config.darkest.saturate / darkStepsCount;
		for (let i = 1; i <= lightStepsCount; i++) {
			const step = lightStepsCount - i;
			const color = baseHsl.clone();
			color.coords[2] = (color.coords[2] ?? 0) + lightnessStep * (i - .5);
			color.coords[0] = (color.coords[0] ?? 0) + lightRotateStep * i;
			color.coords[1] = (color.coords[1] ?? 0) + lightSaturateStep * i;
			palette[step] = color.toString({ format: "hex" });
		}
		palette[5] = baseHsl.clone().toString({ format: "hex" });
		for (let i = 1; i <= darkStepsCount; i++) {
			const step = lightStepsCount + i;
			const color = baseHsl.clone();
			color.coords[2] = (color.coords[2] ?? 0) - darknessStep * (i - .5);
			color.coords[0] = (color.coords[0] ?? 0) + darkRotateStep * i;
			color.coords[1] = (color.coords[1] ?? 0) + darkSaturateStep * i;
			palette[step] = color.toString({ format: "hex" });
		}
		return palette;
	}
	/**
	* Generates an 11-color palette from a single base color, inspired by Mantine's color generation.
	* @returns {string[]} An array of 11 hex color strings.
	* @param {Color} baseColor - A `Color` instance for the base color.
	*/
	function gradientByMantine(baseColor) {
		const [h, s, l] = baseColor.to("hsl").coords.map((c) => c ?? 0);
		const palette = new Array(11);
		palette[5] = baseColor.toString({ format: "hex" });
		for (let i = 0; i < 5; i++) {
			const factor = (5 - i) / 6;
			const newL = l + (100 - l) * factor;
			const newS = s - s * factor;
			palette[i] = new Color("hsl", [
				h,
				newS,
				newL
			]).toString({ format: "hex" });
		}
		for (let i = 0; i < 5; i++) {
			const factor = (i + 1) / 6;
			const newL = l - l * factor;
			const newS = s + (100 - s) * factor;
			palette[i + 6] = new Color("hsl", [
				h,
				newS,
				newL
			]).toString({ format: "hex" });
		}
		return palette;
	}
	/**
	* Generates an 11-shade color gradient from a single base color using different algorithms.
	* @param {string} baseHexColor - The base color in hexadecimal format (e.g., "#123456").
	* @param {string} [mode='base'] - The gradient generation algorithm: 'base', 'saturation', or 'lightness'.
	* @returns {string[] | null} An array of 11 hex color strings, or `null` if the base color is invalid.
	*/
	function generateColorGradient(baseHexColor, mode = "steps") {
		let baseColor;
		try {
			baseColor = Color.get(baseHexColor);
		} catch (_e) {
			baseColor = Color.get(sample.navy);
		}
		switch (mode) {
			case "saturation": return gradientBySaturation(baseColor);
			case "lightness": return gradientByLightness(baseColor);
			case "mantine": return gradientByMantine(baseColor);
			case "chakra": return gradientByChakra(baseColor);
			default: return gradientBySteps(baseColor);
		}
	}
	//#endregion
	//#region src/ui/components/ColorPalette.ts
	var ColorPalette = class ColorPalette extends i$1 {
		constructor(..._args) {
			super(..._args);
			this.baseColor = "#228be6";
			this.mode = "steps";
			this.orientation = "horizontal";
			this.value = "";
			this.gradient = [];
		}
		static {
			this.styles = i$3`
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
  `;
		}
		/**
		* Re-generates the color gradient whenever the `baseColor` or `mode` property changes.
		* @internal
		*/
		willUpdate(changedProperties) {
			if (changedProperties.has("baseColor") || changedProperties.has("mode")) this.gradient = generateColorGradient(this.baseColor, this.mode) ?? [];
		}
		handleSwatchClick(color) {
			this.value = color;
			this.dispatchEvent(new CustomEvent("input", {
				detail: { value: this.value },
				bubbles: true,
				composed: true
			}));
			this.dispatchEvent(new CustomEvent("change", {
				detail: { value: this.value },
				bubbles: true,
				composed: true
			}));
		}
		render() {
			return b$1`
      ${this.gradient.map((color) => {
				return b$1`
          <div
            class="swatch"
            ?checked=${this.selected && color.toLowerCase() === this.selected.toLowerCase()}
            title=${color}
            @click=${() => this.handleSwatchClick(color)}
          >
            <div
              class="swatch-inner"
              style="--color: ${color}; --text-color: ${getTextColor(color)}"
            >
              <span class="checkmark">${IconCheck}</span>
            </div>
          </div>
        `;
			})}
    `;
		}
	};
	__decorate([n$1({ type: String })], ColorPalette.prototype, "baseColor", void 0);
	__decorate([n$1({ type: String })], ColorPalette.prototype, "mode", void 0);
	__decorate([n$1({
		type: String,
		reflect: true
	})], ColorPalette.prototype, "orientation", void 0);
	__decorate([n$1({ type: String })], ColorPalette.prototype, "selected", void 0);
	__decorate([n$1({
		type: String,
		reflect: true
	})], ColorPalette.prototype, "value", void 0);
	__decorate([r$1()], ColorPalette.prototype, "gradient", void 0);
	ColorPalette = __decorate([t$1("color-palette")], ColorPalette);
	//#endregion
	//#region src/ui/components/ColorPanel.ts
	var ColorPanel = class ColorPanel extends i$1 {
		constructor(..._args) {
			super(..._args);
			this.value = "";
		}
		static {
			this.styles = i$3`
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
  `;
		}
		/**
		* Handles the click event on a color swatch.
		* Updates the component's `value` property to the selected color's hex code.
		* Dispatches 'input' and 'change' custom events to notify parent components
		* about the color selection.
		* @param {MouseEvent} event The click event object.
		* @private
		*/
		handleColorClick(event) {
			this.value = event.currentTarget.title;
			this.dispatchEvent(new CustomEvent("input", {
				detail: { value: this.value },
				bubbles: true,
				composed: true
			}));
			this.dispatchEvent(new CustomEvent("change", {
				detail: { value: this.value },
				bubbles: true,
				composed: true
			}));
		}
		/**
		* Renders the grid of color swatches grouped by color family.
		* @internal
		*/
		render() {
			const swatchKeys = _.keys(colors).filter((k) => ![
				"dark",
				"gray",
				"zinc",
				"neutral",
				"stone"
			].includes(k));
			const shades = [
				200,
				300,
				400,
				500,
				600,
				700,
				800,
				900,
				950
			];
			return swatchKeys.map((key) => {
				return b$1` <div class="SwatchGroup">
        <span class="ColorName">${key}</span>
        <div class="Swatches">${shades.map((shade) => {
					const hex = colors[key][shade];
					const text = getTextColor(hex);
					return b$1`
          <span
            title="${hex}"
            class="${e$1({
						ThemeRadio: true,
						selected: this.selected?.toLowerCase() === hex.toLowerCase()
					})}"
            style="background-color: ${hex}; color: ${text}"
            @click=${this.handleColorClick}
          >
            ${IconCheck}
          </span>
        `;
				})}</div>
      </div>`;
			});
		}
	};
	__decorate([n$1({
		type: String,
		reflect: true
	})], ColorPanel.prototype, "value", void 0);
	__decorate([n$1({ type: String })], ColorPanel.prototype, "selected", void 0);
	ColorPanel = __decorate([t$1("color-panel")], ColorPanel);
	//#endregion
	//#region src/ui/components/ColorPicker.ts
	/**
	* An interactive color picker component that allows users to select a color.
	*
	* API is compatible with Web Awesome's wa-color-picker component (v3.3.1).
	*
	* @element mov-color-picker
	* @fires input - Dispatched continuously while the color is changing.
	* @fires change - Dispatched when the color selection is finalized.
	*/
	var ColorPicker = class ColorPicker extends i$1 {
		constructor(..._args) {
			super(..._args);
			this.value = "#228be6";
			this.defaultValue = "#228be6";
			this.label = "";
			this.hint = "";
			this.name = "";
			this.disabled = false;
			this.size = "medium";
			this.swatches = null;
			this.mode = "popup";
			this.opened = false;
			this.popupDirection = "left";
			this.sourceSpace = "srgb";
			this.hsv = {
				h: 0,
				s: 0,
				v: 0
			};
			this.saturationThumbPosition = {
				x: 0,
				y: 0
			};
			this.hueThumbPosition = 0;
			this.isDraggingSaturation = false;
			this.isDraggingHue = false;
		}
		static {
			this.styles = i$3`
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
  `;
		}
		connectedCallback() {
			super.connectedCallback();
			this.updateStateFromValue(this.value);
			window.addEventListener("mousemove", this.handleDrag.bind(this));
			window.addEventListener("mouseup", this.handleDragEnd.bind(this));
			window.addEventListener("touchmove", this.handleDrag.bind(this), { passive: false });
			window.addEventListener("touchend", this.handleDragEnd.bind(this));
		}
		disconnectedCallback() {
			super.disconnectedCallback();
			window.removeEventListener("mousemove", this.handleDrag.bind(this));
			window.removeEventListener("mouseup", this.handleDragEnd.bind(this));
			window.removeEventListener("touchmove", this.handleDrag.bind(this));
			window.removeEventListener("touchend", this.handleDragEnd.bind(this));
			window.removeEventListener("click", this.handleClickOutside.bind(this));
		}
		updated(changedProperties) {
			if (changedProperties.has("mode")) if (this.mode === "popup") window.addEventListener("click", this.handleClickOutside.bind(this));
			else window.removeEventListener("click", this.handleClickOutside.bind(this));
		}
		willUpdate(changedProperties) {
			if (changedProperties.has("value")) this.updateStateFromValue(this.value);
			if (changedProperties.has("mode") && this.mode === "inline") this.opened = false;
		}
		handleClickOutside(e) {
			if (this.opened && !e.composedPath().includes(this)) this.hide();
		}
		show() {
			if (this.disabled || this.opened) return;
			this.opened = true;
			this.dispatchEvent(new CustomEvent("wa-show", {
				bubbles: true,
				composed: true
			}));
			setTimeout(() => {
				this.dispatchEvent(new CustomEvent("wa-after-show", {
					bubbles: true,
					composed: true
				}));
			}, 150);
		}
		hide() {
			if (!this.opened) return;
			this.opened = false;
			this.dispatchEvent(new CustomEvent("wa-hide", {
				bubbles: true,
				composed: true
			}));
			setTimeout(() => {
				this.dispatchEvent(new CustomEvent("wa-after-hide", {
					bubbles: true,
					composed: true
				}));
			}, 150);
		}
		togglePopup() {
			if (this.mode === "popup") if (this.opened) this.hide();
			else {
				const triggerRect = this.getBoundingClientRect();
				const pickerWidth = 250;
				let containerRect;
				const drawer = this.closest("mov-drawer");
				if (drawer?.shadowRoot) {
					const dialog = drawer.shadowRoot.querySelector("dialog");
					if (dialog) containerRect = dialog.getBoundingClientRect();
					else containerRect = {
						left: 0,
						right: window.innerWidth
					};
				} else containerRect = {
					left: 0,
					right: window.innerWidth
				};
				if (triggerRect.left + pickerWidth > containerRect.right) if (triggerRect.right - pickerWidth > containerRect.left) this.popupDirection = "right";
				else this.popupDirection = "left";
				else this.popupDirection = "left";
				this.show();
			}
		}
		isSameColor(color1, color2) {
			if (!color1 || !color2) return false;
			return Color.deltaE(color1, color2, { method: "2000" }) < 1;
		}
		renderCheckIcon(color) {
			return b$1`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
        style=${o$2({ stroke: getTextColor(color) })}
      >
        <path d="M5 12l5 5l10 -10" />
      </svg>
    `;
		}
		renderPickerBody() {
			const saturationPanelStyle = { backgroundColor: `hsl(${this.hsv.h}, 100%, 50%)` };
			const hsv = {
				h: this.hsv.h,
				s: this.hsv.s * 100,
				v: this.hsv.v * 100
			};
			const saturationThumbStyle = {
				top: `${this.saturationThumbPosition.y}%`,
				left: `${this.saturationThumbPosition.x}%`,
				backgroundColor: new Color("hsv", [
					hsv.h,
					hsv.s,
					hsv.v
				]).toString({ format: "hex" })
			};
			const hueThumbStyle = { left: `${this.hueThumbPosition}%` };
			return b$1`
      <div
        class="saturation-panel"
        style=${o$2(saturationPanelStyle)}
        @mousedown=${this.handleSaturationDragStart.bind(this)}
        @touchstart=${this.handleSaturationDragStart.bind(this)}
      >
        <div class="saturation-overlay-1"></div>
        <div class="saturation-overlay-2"></div>
        <div
          class="saturation-thumb"
          style=${o$2(saturationThumbStyle)}
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
            style=${o$2(hueThumbStyle)}
          ></div>
        </div>
      </div>

      <div class="swatches">
        ${(this.swatches || _.entries(colors).filter(([name]) => ![
				"dark",
				"gray",
				"zinc",
				"neutral",
				"stone"
			].includes(name)).map(([, color]) => color["600"])).map((color) => b$1`
            <button
              class="swatch"
              title=${color}
              style=${o$2({ backgroundColor: color })}
              @click=${() => this.selectSwatch(color)}
            >
              ${this.isSameColor(this.value, color) ? this.renderCheckIcon(color) : ""}
            </button>
          `)}
      </div>
    `;
		}
		render() {
			const pickerClasses = {
				"picker-container": true,
				popup: this.mode === "popup",
				right: this.popupDirection === "right"
			};
			const pickerBody = this.renderPickerBody();
			if (this.mode === "popup") return b$1`
        <div
          class="popup-trigger"
          @click=${this.togglePopup}
        >
          <div
            class="preview"
            style=${o$2({ backgroundColor: this.value })}
          ></div>
        </div>
        ${this.opened ? b$1`<div class=${e$1(pickerClasses)}>${pickerBody}</div>` : ""}
      `;
			return b$1`<div class=${e$1(pickerClasses)}>${pickerBody}</div>`;
		}
		parseColor(color) {
			try {
				return Color.get(color);
			} catch (e) {
				console.error(`[mov-color-picker] Invalid color value: "${color}"`, e);
				return null;
			}
		}
		colorToHsv(color) {
			let [h, s, v] = color.to("srgb").to("hsv").coords.map((c) => c ?? 0);
			if (Number.isNaN(h)) {
				h = this.hsv.h || 0;
				s = 0;
			}
			s = Math.max(0, Math.min(100, s)) / 100;
			v = Math.max(0, Math.min(100, v)) / 100;
			return {
				h,
				s,
				v
			};
		}
		updateStateFromValue(color) {
			const newColor = this.parseColor(color);
			if (!newColor) return;
			this.sourceSpace = newColor.space.id;
			const newHsv = this.colorToHsv(newColor);
			if (newHsv.h !== this.hsv.h || newHsv.s !== this.hsv.s || newHsv.v !== this.hsv.v) {
				this.hsv = newHsv;
				this.updateThumbPositions();
			}
		}
		dispatchInput() {
			this.dispatchEvent(new CustomEvent("input", {
				detail: { value: this.value },
				bubbles: true,
				composed: true
			}));
		}
		dispatchChange() {
			this.dispatchEvent(new CustomEvent("change", {
				detail: { value: this.value },
				bubbles: true,
				composed: true
			}));
		}
		updateValueFromHsv() {
			const hsv = {
				h: this.hsv.h,
				s: this.hsv.s * 100,
				v: this.hsv.v * 100
			};
			const newColorFromHsv = new Color("hsv", [
				hsv.h,
				hsv.s,
				hsv.v
			]);
			let newValue;
			try {
				if (!this.sourceSpace || [
					"srgb",
					"hsl",
					"hsv"
				].includes(this.sourceSpace)) newValue = newColorFromHsv.to("srgb").toString({ format: "hex" });
				else newValue = newColorFromHsv.to(this.sourceSpace).toString({ precision: 5 });
			} catch (e) {
				console.error(`[mov-color-picker] Could not convert color to space ${this.sourceSpace}`, e);
				newValue = newColorFromHsv.to("srgb").toString({ format: "hex" });
			}
			if (this.value !== newValue) {
				this.value = newValue;
				this.dispatchInput();
			}
		}
		updateThumbPositions() {
			this.saturationThumbPosition = {
				x: this.hsv.s * 100,
				y: (1 - this.hsv.v) * 100
			};
			this.hueThumbPosition = this.hsv.h / 360 * 100;
		}
		/**
		* Initiates dragging for the saturation/value panel.
		* @param e The mouse or touch event.
		*/
		handleSaturationDragStart(e) {
			e.preventDefault();
			this.isDraggingSaturation = true;
			this.saturationPanel = this.shadowRoot?.querySelector(".saturation-panel");
			this.updateSaturation(e);
		}
		/**
		* Initiates dragging for the hue slider.
		* @param e The mouse or touch event.
		*/
		handleHueDragStart(e) {
			e.preventDefault();
			this.isDraggingHue = true;
			this.hueSlider = this.shadowRoot?.querySelector(".hue-slider");
			this.updateHue(e);
		}
		/**
		* Handles the continuous drag movement for both saturation and hue.
		* @param e The mouse or touch event.
		*/
		handleDrag(e) {
			if (this.isDraggingSaturation) this.updateSaturation(e);
			if (this.isDraggingHue) this.updateHue(e);
		}
		/**
		* Finalizes the drag operation and dispatches the 'change' event.
		*/
		handleDragEnd() {
			if (this.isDraggingSaturation || this.isDraggingHue) this.dispatchChange();
			this.isDraggingSaturation = false;
			this.isDraggingHue = false;
		}
		getEventPosition(e) {
			if ("touches" in e) return {
				clientX: e.touches[0].clientX,
				clientY: e.touches[0].clientY
			};
			return {
				clientX: e.clientX,
				clientY: e.clientY
			};
		}
		updateSaturation(e) {
			if (!this.saturationPanel) return;
			const { clientX, clientY } = this.getEventPosition(e);
			const rect = this.saturationPanel.getBoundingClientRect();
			const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
			const y = Math.max(0, Math.min(clientY - rect.top, rect.height));
			this.hsv.s = x / rect.width;
			this.hsv.v = 1 - y / rect.height;
			this.updateValueFromHsv();
			this.updateThumbPositions();
		}
		updateHue(e) {
			if (!this.hueSlider) return;
			const { clientX } = this.getEventPosition(e);
			const rect = this.hueSlider.getBoundingClientRect();
			const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
			this.hsv.h = x / rect.width * 360;
			this.updateValueFromHsv();
			this.updateThumbPositions();
		}
		selectSwatch(color) {
			this.value = color;
			this.dispatchInput();
			this.dispatchChange();
		}
	};
	__decorate([n$1({ type: String })], ColorPicker.prototype, "value", void 0);
	__decorate([n$1({
		type: String,
		attribute: "default-value"
	})], ColorPicker.prototype, "defaultValue", void 0);
	__decorate([n$1({ type: String })], ColorPicker.prototype, "label", void 0);
	__decorate([n$1({ type: String })], ColorPicker.prototype, "hint", void 0);
	__decorate([n$1({ type: String })], ColorPicker.prototype, "name", void 0);
	__decorate([n$1({
		type: Boolean,
		reflect: true
	})], ColorPicker.prototype, "disabled", void 0);
	__decorate([n$1({
		type: String,
		reflect: true
	})], ColorPicker.prototype, "size", void 0);
	__decorate([n$1({ type: Array })], ColorPicker.prototype, "swatches", void 0);
	__decorate([n$1({ type: String })], ColorPicker.prototype, "mode", void 0);
	__decorate([r$1()], ColorPicker.prototype, "opened", void 0);
	__decorate([r$1()], ColorPicker.prototype, "popupDirection", void 0);
	__decorate([r$1()], ColorPicker.prototype, "sourceSpace", void 0);
	__decorate([r$1()], ColorPicker.prototype, "hsv", void 0);
	__decorate([r$1()], ColorPicker.prototype, "saturationThumbPosition", void 0);
	__decorate([r$1()], ColorPicker.prototype, "hueThumbPosition", void 0);
	ColorPicker = __decorate([t$1("mov-color-picker")], ColorPicker);
	//#endregion
	//#region node_modules/lit-html/directives/choose.js
	/**
	* @license
	* Copyright 2021 Google LLC
	* SPDX-License-Identifier: BSD-3-Clause
	*/
	var r = (r, o, t) => {
		for (const t of o) if (t[0] === r) return (0, t[1])();
		return t?.();
	};
	//#endregion
	//#region src/ui/components/SegmentedControl.ts
	var SegmentedControl = class SegmentedControl extends i$1 {
		constructor(..._args) {
			super(..._args);
			this.value = "";
			this.labelPosition = "side";
			this.size = "medium";
			this._options = [];
			this.resizeObserver = new ResizeObserver(() => this.updateThumbPosition());
		}
		static {
			this.styles = i$3`
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
  `;
		}
		connectedCallback() {
			super.connectedCallback();
			this.resizeObserver.observe(this);
		}
		disconnectedCallback() {
			super.disconnectedCallback();
			this.resizeObserver.unobserve(this);
		}
		/**
		* Handles the click event on an option button, updates the component's value,
		* and dispatches a `change` event.
		* @internal
		*/
		handleClick(_event, value) {
			this.value = value;
			this.dispatchEvent(new CustomEvent("change", {
				detail: this.value,
				bubbles: true,
				composed: true
			}));
		}
		/**
		* Gathers option data from the slotted `segmented-control-option` elements.
		* @internal
		*/
		handleSlotChange() {
			this._options = this._slotEl.assignedNodes({ flatten: true }).filter((node) => node.nodeName === "SEGMENTED-CONTROL-OPTION").map((node) => ({
				value: node.getAttribute("value") ?? "",
				label: node.getAttribute("label") ?? "",
				icon: node.getAttribute("icon") ?? void 0
			}));
		}
		firstUpdated() {
			this.handleSlotChange();
			this.updateComplete.then(() => this.updateThumbPosition());
		}
		updated(changedProperties) {
			super.updated(changedProperties);
			if (changedProperties.has("value") || changedProperties.has("_options") || changedProperties.has("labelPosition") || changedProperties.has("size")) Promise.resolve().then(() => this.updateThumbPosition());
		}
		/**
		* Finds the currently selected option button and moves/resizes the thumb element.
		* @internal
		*/
		updateThumbPosition() {
			if (!this.thumb) return;
			const selectedButton = this.shadowRoot?.querySelector(".button.selected");
			if (selectedButton) {
				const { offsetWidth, offsetHeight } = selectedButton;
				const buttonRect = selectedButton.getBoundingClientRect();
				const containerRect = this.shadowRoot?.querySelector(".segmented-control")?.getBoundingClientRect();
				const offsetX = buttonRect.left - (containerRect?.left ?? 0);
				const offsetY = buttonRect.top - (containerRect?.top ?? 0);
				this.thumb.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
				this.thumb.style.width = `${offsetWidth}px`;
				this.thumb.style.height = `${offsetHeight}px`;
			} else {
				this.thumb.style.width = "0px";
				this.thumb.style.height = "0px";
			}
		}
		render() {
			return b$1`
      <div class="segmented-control">
        <div class="thumb"></div>
        ${this._options.map((option) => b$1`
            <div
              class="option"
              title="${this.labelPosition === "tooltip" ? option.label : A}"
            >
              <button
                class="${e$1({
				button: true,
				selected: this.value === option.value,
				bottom: this.labelPosition === "bottom",
				small: this.size === "small",
				medium: this.size === "medium",
				large: this.size === "large"
			})}"
                @click=${(e) => this.handleClick(e, option.value)}
                role="radio"
                aria-checked="${this.value === option.value}"
              >
                ${option.icon ? b$1`<mov-icon
                      name="${option.icon}"
                      .size=${r(this.size, [
				["small", () => "16px"],
				["medium", () => "24px"],
				["large", () => "36px"]
			], () => this.size)}
                    ></mov-icon>` : A}
                ${this.labelPosition !== "tooltip" ? b$1`<span>${option.label}</span>` : A}
              </button>
            </div>
          `)}
      </div>
      <div style="display: none;">
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `;
		}
	};
	__decorate([n$1({
		type: String,
		reflect: true
	})], SegmentedControl.prototype, "value", void 0);
	__decorate([n$1({ type: String })], SegmentedControl.prototype, "labelPosition", void 0);
	__decorate([n$1({ type: String })], SegmentedControl.prototype, "size", void 0);
	__decorate([r$1()], SegmentedControl.prototype, "_options", void 0);
	__decorate([e$2(".thumb")], SegmentedControl.prototype, "thumb", void 0);
	__decorate([e$2("slot")], SegmentedControl.prototype, "_slotEl", void 0);
	SegmentedControl = __decorate([t$1("segmented-control")], SegmentedControl);
	var SegmentedControlOption = class SegmentedControlOption extends i$1 {
		constructor(..._args2) {
			super(..._args2);
			this.value = "";
			this.label = "";
		}
		/**
		* This component is a data container and does not need its own shadow DOM.
		* @internal
		*/
		createRenderRoot() {
			return this;
		}
	};
	__decorate([n$1({
		type: String,
		reflect: true
	})], SegmentedControlOption.prototype, "value", void 0);
	__decorate([n$1({
		type: String,
		reflect: true
	})], SegmentedControlOption.prototype, "label", void 0);
	__decorate([n$1({
		type: String,
		reflect: true
	})], SegmentedControlOption.prototype, "icon", void 0);
	SegmentedControlOption = __decorate([t$1("segmented-control-option")], SegmentedControlOption);
	//#endregion
	//#region src/ui/components/Switch.ts
	var Switch = class Switch extends i$1 {
		constructor(..._args) {
			super(..._args);
			this.name = "";
			this.value = "on";
			this.checked = false;
			this.defaultChecked = false;
			this.disabled = false;
			this.required = false;
			this.size = "medium";
			this.hint = "";
			this.design = "graphical";
			this.textOn = "ON";
			this.textOff = "OFF";
		}
		static {
			this.styles = i$3`
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
  `;
		}
		handleChange(event) {
			if (!this.disabled) {
				this.checked = event.target.checked;
				this.dispatchEvent(new CustomEvent("change", {
					detail: { checked: this.checked },
					bubbles: true,
					composed: true
				}));
				this.dispatchEvent(new CustomEvent("input", {
					detail: { checked: this.checked },
					bubbles: true,
					composed: true
				}));
			}
		}
		render() {
			const design = this.design.toLowerCase();
			let knobContent;
			if (design === "graphical") knobContent = b$1`${this.checked ? IconCheck : IconX}`;
			else knobContent = b$1`<span class="text">${this.checked ? this.textOn : this.textOff}</span>`;
			return b$1`
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
            class="${e$1({
				switch: true,
				[design]: true
			})}"
          >
            <div class="knob">${knobContent}</div>
          </div>
        </label>
        <div class="hint">
          <slot name="hint">${this.hint}</slot>
        </div>
      </div>
    `;
		}
	};
	__decorate([n$1({ type: String })], Switch.prototype, "name", void 0);
	__decorate([n$1({ type: String })], Switch.prototype, "value", void 0);
	__decorate([n$1({
		type: Boolean,
		reflect: true
	})], Switch.prototype, "checked", void 0);
	__decorate([n$1({
		type: Boolean,
		reflect: true,
		attribute: "default-checked"
	})], Switch.prototype, "defaultChecked", void 0);
	__decorate([n$1({
		type: Boolean,
		reflect: true
	})], Switch.prototype, "disabled", void 0);
	__decorate([n$1({
		type: Boolean,
		reflect: true
	})], Switch.prototype, "required", void 0);
	__decorate([n$1({
		type: String,
		reflect: true
	})], Switch.prototype, "size", void 0);
	__decorate([n$1({ type: String })], Switch.prototype, "hint", void 0);
	__decorate([n$1({
		type: String,
		reflect: true
	})], Switch.prototype, "design", void 0);
	__decorate([n$1({ type: String })], Switch.prototype, "textOn", void 0);
	__decorate([n$1({ type: String })], Switch.prototype, "textOff", void 0);
	Switch = __decorate([t$1("mov-switch")], Switch);
	//#endregion
	//#region src/ui/styles/slider.css?inline
	var slider_default = ":host {\r\n  display: block;\r\n  --mov-slider-track-height: 6px;\r\n  --mov-slider-thumb-size: 18px;\r\n  --mov-slider-tooltip-offset: 24px;\r\n  -webkit-user-select: none;\r\n  user-select: none;\r\n  touch-action: none;\r\n  width: 100%;\r\n}\r\n\r\n:host([vertical]) {\r\n  display: inline-block;\r\n}\r\n\r\n/* Container */\r\n.mov-slider__container {\r\n  position: relative;\r\n  display: flex;\r\n  align-items: center;\r\n  min-height: 24px;\r\n}\r\n\r\n:host([vertical]) .mov-slider__container {\r\n  flex-direction: column;\r\n  min-height: auto;\r\n  min-width: 24px;\r\n}\r\n\r\n/* Track */\r\n.mov-slider__track {\r\n  position: relative;\r\n  flex: 1;\r\n  height: var(--mov-slider-track-height);\r\n  background: var(--theme-border-color, #ccc);\r\n  border-radius: 9999px;\r\n  cursor: pointer;\r\n}\r\n\r\n:host([vertical]) .mov-slider__track {\r\n  width: var(--mov-slider-track-height);\r\n  height: 100%;\r\n  min-height: 8rem;\r\n}\r\n\r\n/* Progress */\r\n.mov-slider__progress {\r\n  position: absolute;\r\n  height: 100%;\r\n  background: var(--mov-color-fill-loud);\r\n  border-radius: 9999px;\r\n  pointer-events: none;\r\n  transition: background-color 150ms;\r\n}\r\n\r\n.mov-slider__progress--min-gap {\r\n  background: #f59e0b; /* warning color */\r\n  animation: pulse-gap 2s ease-in-out infinite;\r\n}\r\n\r\n@keyframes pulse-gap {\r\n  0%,\r\n  100% {\r\n    opacity: 1;\r\n  }\r\n  50% {\r\n    opacity: 0.7;\r\n  }\r\n}\r\n\r\n:host([vertical]) .mov-slider__progress {\r\n  width: 100%;\r\n  height: auto;\r\n}\r\n\r\n/* Thumb */\r\n.mov-slider__thumb {\r\n  position: absolute;\r\n  width: var(--mov-slider-thumb-size);\r\n  height: var(--mov-slider-thumb-size);\r\n  background: white;\r\n  border: 3px solid var(--mov-color-fill-loud);\r\n  border-radius: 9999px;\r\n  cursor: grab;\r\n  transform: translate(-50%, -50%);\r\n  top: 50%;\r\n  transition:\r\n    transform 150ms,\r\n    border-color 150ms,\r\n    box-shadow 150ms;\r\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\r\n  touch-action: none;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.mov-slider__thumb:active {\r\n  cursor: grabbing;\r\n  transform: translate(-50%, -50%) scale(1.1);\r\n}\r\n\r\n:host([vertical]) .mov-slider__thumb {\r\n  transform: translate(-50%, 50%);\r\n  inset-inline-start: 50%;\r\n  top: auto;\r\n}\r\n\r\n:host([vertical]) .mov-slider__thumb:active {\r\n  transform: translate(-50%, 50%) scale(1.1);\r\n}\r\n\r\n.mov-slider__thumb:hover {\r\n  border-color: var(--mov-color-fill-loud);\r\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n/* Visual focus state */\r\n.mov-slider__thumb--focused {\r\n  outline: 3px solid var(--mov-color-fill-loud);\r\n  outline-offset: 2px;\r\n}\r\n\r\n/* Active drag state */\r\n.mov-slider__thumb--active {\r\n  transform: translate(-50%, -50%) scale(1.1);\r\n  z-index: 1;\r\n}\r\n\r\n:host([vertical]) .mov-slider__thumb--active {\r\n  transform: translate(-50%, 50%) scale(1.1);\r\n}\r\n\r\n/* Readonly state */\r\n:host([readonly]) .mov-slider__thumb {\r\n  cursor: default;\r\n  border-color: var(--theme-border-color);\r\n}\r\n\r\n:host([readonly]) .mov-slider__thumb:active {\r\n  transform: translate(-50%, -50%);\r\n}\r\n\r\n/* Input (hidden but accessible) */\r\n.mov-slider__input {\r\n  position: absolute;\r\n  opacity: 0;\r\n  pointer-events: none;\r\n}\r\n\r\n/* Tooltip */\r\n.mov-slider__tooltip {\r\n  position: absolute;\r\n  bottom: var(--mov-slider-tooltip-offset);\r\n  inset-inline-start: 50%;\r\n  transform: translateX(-50%);\r\n  background: var(--theme-hightlight-color, #333);\r\n  color: white;\r\n  padding: 2px 8px;\r\n  border-radius: 4px;\r\n  font-size: 14px;\r\n  white-space: nowrap;\r\n  pointer-events: none;\r\n  opacity: 0;\r\n  transition: opacity 150ms;\r\n  z-index: 2;\r\n}\r\n\r\n.mov-slider__thumb:hover .mov-slider__tooltip,\r\n.mov-slider__thumb--focused .mov-slider__tooltip,\r\n.mov-slider__thumb--active .mov-slider__tooltip {\r\n  opacity: 1;\r\n}\r\n\r\n:host([vertical]) .mov-slider__tooltip {\r\n  bottom: auto;\r\n  inset-inline-start: var(--mov-slider-tooltip-offset);\r\n  top: 50%;\r\n  transform: translateY(-50%);\r\n}\r\n\r\n/* Ticks */\r\n.mov-slider__ticks {\r\n  position: absolute;\r\n  top: 50%;\r\n  inset-inline: 0;\r\n  height: 8px;\r\n  pointer-events: none;\r\n}\r\n\r\n:host([vertical]) .mov-slider__ticks {\r\n  top: 0;\r\n  bottom: 0;\r\n  inset-inline-start: 50%;\r\n  width: 8px;\r\n  height: auto;\r\n}\r\n\r\n.mov-slider__tick {\r\n  position: absolute;\r\n  width: 1px;\r\n  height: 8px;\r\n  background: var(--theme-border-color);\r\n  transform: translateX(-50%);\r\n}\r\n\r\n:host([vertical]) .mov-slider__tick {\r\n  width: 8px;\r\n  height: 1px;\r\n  transform: translateY(-50%);\r\n}\r\n\r\n.mov-slider__tick-label {\r\n  position: absolute;\r\n  top: 12px;\r\n  font-size: 12px;\r\n  color: var(--theme-text-color);\r\n  opacity: 0.7;\r\n  transform: translateX(-50%);\r\n  white-space: nowrap;\r\n}\r\n\r\n:host([vertical]) .mov-slider__tick-label {\r\n  top: auto;\r\n  inset-inline-start: 12px;\r\n  transform: translateY(-50%);\r\n}\r\n\r\n/* Sizes */\r\n:host([size=\"small\"]) {\r\n  --mov-slider-track-height: 4px;\r\n  --mov-slider-thumb-size: 14px;\r\n}\r\n\r\n:host([size=\"large\"]) {\r\n  --mov-slider-track-height: 10px;\r\n  --mov-slider-thumb-size: 22px;\r\n}\r\n\r\n/* States */\r\n:host([disabled]) {\r\n  opacity: 0.6;\r\n  pointer-events: none;\r\n}\r\n\r\n:host([disabled]) .mov-slider__thumb {\r\n  cursor: not-allowed;\r\n  border-color: var(--theme-border-color);\r\n  background: #f3f4f6;\r\n}\r\n\r\n:host([invalid]) .mov-slider__progress {\r\n  background: #ef4444; /* danger color */\r\n}\r\n\r\n/* Help & Error Text */\r\n.mov-form-control__label {\r\n  display: block;\r\n  margin-bottom: 0.5rem;\r\n  color: var(--theme-text-color);\r\n}\r\n\r\n.mov-form-control__helper,\r\n.mov-form-control__error {\r\n  margin-top: 0.5rem;\r\n  font-size: 14px;\r\n}\r\n\r\n.mov-form-control__helper {\r\n  color: var(--theme-text-color);\r\n  opacity: 0.8;\r\n}\r\n\r\n.mov-form-control__error {\r\n  color: #ef4444;\r\n}\r\n\r\n.mov-slider__live-region {\r\n  position: absolute;\r\n  overflow: hidden;\r\n  clip: rect(0 0 0 0);\r\n  height: 1px;\r\n  width: 1px;\r\n  margin: -1px;\r\n  padding: 0;\r\n  border: 0;\r\n}\r\n:host([show-ticks]) {\r\n  padding-bottom: 15px;\r\n  margin-left: 5px;\r\n  margin-right: 5px;\r\n}\r\n\r\n/* Filled variant */\r\n:host([filled]) .mov-slider__thumb {\r\n  background: var(--mov-color-fill-loud);\r\n  border-color: var(--mov-color-fill-loud);\r\n}\r\n";
	//#endregion
	//#region src/ui/components/Slider.ts
	var Slider = class Slider extends i$1 {
		static {
			this.styles = [r$4(slider_default)];
		}
		constructor() {
			super();
			this.label = "";
			this.helpText = "";
			this.errorMessage = "";
			this.min = 0;
			this.max = 100;
			this.step = 1;
			this.value = 0;
			this.dual = false;
			this.vertical = false;
			this.filled = false;
			this.size = "medium";
			this.disabled = false;
			this.readonly = false;
			this.invalid = false;
			this.showTooltip = false;
			this.showTicks = false;
			this.tickStep = 0;
			this.tickCount = 0;
			this.focusedThumb = null;
			this.draggingThumb = null;
			this.activeDrag = null;
			this._handlePointerMove = this._handlePointerMove.bind(this);
			this._handlePointerUp = this._handlePointerUp.bind(this);
		}
		get values() {
			if (Array.isArray(this.value)) return this.value;
			return [this.min, this.value];
		}
		getPercentage(val) {
			return (val - this.min) / (this.max - this.min) * 100;
		}
		getValueFromPercentage(percentage) {
			const rawValue = this.min + percentage / 100 * (this.max - this.min);
			return this.step ? Math.round(rawValue / this.step) * this.step : rawValue;
		}
		getValueFromPointer(clientX, clientY, trackRect) {
			let percentage;
			if (this.vertical) percentage = (trackRect.bottom - clientY) / trackRect.height * 100;
			else percentage = (clientX - trackRect.left) / trackRect.width * 100;
			percentage = Math.max(0, Math.min(100, percentage));
			return this.getValueFromPercentage(percentage);
		}
		clampValue(val) {
			let clamped = Math.max(this.min, Math.min(this.max, val));
			if (this.step) clamped = Math.round(clamped / this.step) * this.step;
			return Number(clamped.toFixed(10));
		}
		handleThumbPointerDown(e, thumbType) {
			if (this.disabled || this.readonly || !this.track) return;
			e.preventDefault();
			e.stopPropagation();
			e.currentTarget.setPointerCapture(e.pointerId);
			this.activeDrag = {
				thumb: thumbType,
				trackRect: this.track.getBoundingClientRect()
			};
			this.draggingThumb = thumbType;
			document.addEventListener("pointermove", this._handlePointerMove);
			document.addEventListener("pointerup", this._handlePointerUp);
			document.addEventListener("pointercancel", this._handlePointerUp);
		}
		_handlePointerMove(e) {
			if (!this.activeDrag || this.disabled || this.readonly) return;
			const { thumb, trackRect } = this.activeDrag;
			const newValue = this.getValueFromPointer(e.clientX, e.clientY, trackRect);
			if (this.dual) {
				const currentValues = this.values;
				if (thumb === "min") {
					const clampedValue = Math.min(newValue, currentValues[1] - (this.step || 1));
					this.updateValue([clampedValue, currentValues[1]], "input");
				} else {
					const clampedValue = Math.max(newValue, currentValues[0] + (this.step || 1));
					this.updateValue([currentValues[0], clampedValue], "input");
				}
			} else this.updateValue(newValue, "input");
		}
		_handlePointerUp(e) {
			if (!this.activeDrag) return;
			(this.shadowRoot?.querySelector(".mov-slider__thumb--active"))?.releasePointerCapture(e.pointerId);
			this.updateValue(this.value, "change");
			this.activeDrag = null;
			this.draggingThumb = null;
			document.removeEventListener("pointermove", this._handlePointerMove);
			document.removeEventListener("pointerup", this._handlePointerUp);
			document.removeEventListener("pointercancel", this._handlePointerUp);
		}
		updateValue(newValue, type = "change") {
			if (this.readonly || this.disabled) return;
			if (this.dual && Array.isArray(newValue)) {
				newValue = [this.clampValue(newValue[0]), this.clampValue(newValue[1])];
				if (newValue[0] > newValue[1]) newValue = [newValue[1], newValue[0]];
			} else if (!this.dual && typeof newValue === "number") newValue = this.clampValue(newValue);
			this.value = newValue;
			this.dispatchEvent(new CustomEvent(type, {
				bubbles: true,
				composed: true,
				detail: { value: newValue }
			}));
		}
		handleTrackClick(e) {
			if (this.disabled || this.readonly || !this.track) return;
			const rect = this.track.getBoundingClientRect();
			const newValue = this.getValueFromPointer(e.clientX, e.clientY, rect);
			if (this.dual) {
				const currentValues = this.values;
				if (Math.abs(newValue - currentValues[0]) < Math.abs(newValue - currentValues[1])) this.updateValue([newValue, currentValues[1]]);
				else this.updateValue([currentValues[0], newValue]);
			} else this.updateValue(newValue);
		}
		renderTicks() {
			if (!this.showTicks) return null;
			const tickValues = /* @__PURE__ */ new Set();
			tickValues.add(this.min);
			tickValues.add(this.max);
			let step = this.tickStep;
			if (this.tickCount > 1) step = Math.round((this.max - this.min) / (this.tickCount - 1));
			if (step > 0) {
				const tickCount = Math.floor((this.max - this.min) / step);
				if (tickCount <= 100) for (let i = 1; i <= tickCount; i++) {
					const val = this.min + i * step;
					if (val < this.max) tickValues.add(Number(val.toFixed(10)));
				}
			}
			return b$1`<div class="mov-slider__ticks">${Array.from(tickValues).sort((a, b) => a - b).map((val) => {
				const percentage = this.getPercentage(val);
				return b$1`
        <div class="mov-slider__tick" style="${this.vertical ? `bottom: ${percentage}%` : `inset-inline-start: ${percentage}%`}">
          <div class="mov-slider__tick-label">${val}</div>
        </div>
      `;
			})}</div>`;
		}
		renderThumb(val, thumbType) {
			const percentage = this.getPercentage(val);
			const isFocused = this.focusedThumb === thumbType;
			const isDragging = this.draggingThumb === thumbType;
			const style = this.vertical ? `bottom: ${percentage}%` : `inset-inline-start: ${percentage}%`;
			return b$1`
      <div
        class="mov-slider__thumb ${isFocused ? "mov-slider__thumb--focused" : ""} ${isDragging ? "mov-slider__thumb--active" : ""}"
        style="${style}"
        @pointerdown=${(e) => this.handleThumbPointerDown(e, thumbType)}
      >
        ${this.showTooltip ? b$1`<div class="mov-slider__tooltip">${val}</div>` : ""}
      </div>
    `;
		}
		renderProgress() {
			const vals = this.values;
			if (this.dual) {
				const start = this.getPercentage(vals[0]);
				const end = this.getPercentage(vals[1]);
				return b$1`<div
        class="mov-slider__progress"
        style="${this.vertical ? `bottom: ${start}%; height: ${end - start}%` : `left: ${start}%; width: ${end - start}%`}"
      ></div>`;
			}
			const end = this.getPercentage(vals[1]);
			return b$1`<div
      class="mov-slider__progress"
      style="${this.vertical ? `bottom: 0; height: ${end}%` : `left: 0; width: ${end}%`}"
    ></div>`;
		}
		render() {
			const vals = this.values;
			return b$1`
      <div
        class="mov-slider"
        part="base"
      >
        ${this.label ? b$1`<label class="mov-form-control__label">${this.label}</label>` : ""}
        <div
          class="mov-slider__container"
          @click=${this.handleTrackClick}
        >
          <div class="mov-slider__track">
            ${this.renderProgress()} ${this.renderTicks()}
            ${this.dual ? b$1`${this.renderThumb(vals[0], "min")}${this.renderThumb(vals[1], "max")}` : this.renderThumb(vals[1], "single")}
          </div>
        </div>
        ${this.helpText && !this.invalid ? b$1`<div class="mov-form-control__helper">${this.helpText}</div>` : ""}
        ${this.invalid && this.errorMessage ? b$1`<div class="mov-form-control__error">${this.errorMessage}</div>` : ""}
      </div>
    `;
		}
	};
	__decorate([n$1({ type: String })], Slider.prototype, "label", void 0);
	__decorate([n$1({ attribute: "help-text" })], Slider.prototype, "helpText", void 0);
	__decorate([n$1({ attribute: "error-message" })], Slider.prototype, "errorMessage", void 0);
	__decorate([n$1({ type: Number })], Slider.prototype, "min", void 0);
	__decorate([n$1({ type: Number })], Slider.prototype, "max", void 0);
	__decorate([n$1({ type: Number })], Slider.prototype, "step", void 0);
	__decorate([n$1({ type: Object })], Slider.prototype, "value", void 0);
	__decorate([n$1({
		type: Boolean,
		reflect: true
	})], Slider.prototype, "dual", void 0);
	__decorate([n$1({
		type: Boolean,
		reflect: true
	})], Slider.prototype, "vertical", void 0);
	__decorate([n$1({
		type: Boolean,
		reflect: true
	})], Slider.prototype, "filled", void 0);
	__decorate([n$1({ reflect: true })], Slider.prototype, "size", void 0);
	__decorate([n$1({
		type: Boolean,
		reflect: true
	})], Slider.prototype, "disabled", void 0);
	__decorate([n$1({
		type: Boolean,
		reflect: true
	})], Slider.prototype, "readonly", void 0);
	__decorate([n$1({
		type: Boolean,
		reflect: true
	})], Slider.prototype, "invalid", void 0);
	__decorate([n$1({
		type: Boolean,
		attribute: "show-tooltip"
	})], Slider.prototype, "showTooltip", void 0);
	__decorate([n$1({
		type: Boolean,
		attribute: "show-ticks"
	})], Slider.prototype, "showTicks", void 0);
	__decorate([n$1({
		type: Number,
		attribute: "tick-step"
	})], Slider.prototype, "tickStep", void 0);
	__decorate([n$1({
		type: Number,
		attribute: "tick-count"
	})], Slider.prototype, "tickCount", void 0);
	__decorate([r$1()], Slider.prototype, "focusedThumb", void 0);
	__decorate([r$1()], Slider.prototype, "draggingThumb", void 0);
	__decorate([e$2(".mov-slider__track")], Slider.prototype, "track", void 0);
	__decorate([e$2(".mov-slider__live-region")], Slider.prototype, "liveRegion", void 0);
	Slider = __decorate([t$1("mov-slider")], Slider);
	//#endregion
	//#region node_modules/@braintree/sanitize-url/dist/constants.js
	var require_constants = /* @__PURE__ */ __commonJSMin(((exports) => {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.BLANK_URL = exports.relativeFirstCharacters = exports.whitespaceEscapeCharsRegex = exports.urlSchemeRegex = exports.ctrlCharactersRegex = exports.htmlCtrlEntityRegex = exports.htmlEntitiesRegex = exports.invalidProtocolRegex = void 0;
		exports.invalidProtocolRegex = /^([^\w]*)(javascript|data|vbscript)/im;
		exports.htmlEntitiesRegex = /&#(\w+)(^\w|;)?/g;
		exports.htmlCtrlEntityRegex = /&(newline|tab);/gi;
		exports.ctrlCharactersRegex = /[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim;
		exports.urlSchemeRegex = /^.+(:|&colon;)/gim;
		exports.whitespaceEscapeCharsRegex = /(\\|%5[cC])((%(6[eE]|72|74))|[nrt])/g;
		exports.relativeFirstCharacters = [".", "/"];
		exports.BLANK_URL = "about:blank";
	}));
	//#endregion
	//#region src/core/download.ts
	var import_dist = (/* @__PURE__ */ __commonJSMin(((exports) => {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.sanitizeUrl = sanitizeUrl;
		var constants_1 = require_constants();
		function isRelativeUrlWithoutProtocol(url) {
			return constants_1.relativeFirstCharacters.indexOf(url[0]) > -1;
		}
		function decodeHtmlCharacters(str) {
			return str.replace(constants_1.ctrlCharactersRegex, "").replace(constants_1.htmlEntitiesRegex, function(match, dec) {
				return String.fromCharCode(dec);
			});
		}
		function isValidUrl(url) {
			return URL.canParse(url);
		}
		function decodeURI(uri) {
			try {
				return decodeURIComponent(uri);
			} catch (e) {
				return uri;
			}
		}
		function sanitizeUrl(url) {
			if (!url) return constants_1.BLANK_URL;
			var charsToDecode;
			var decodedUrl = decodeURI(url.trim());
			do {
				decodedUrl = decodeHtmlCharacters(decodedUrl).replace(constants_1.htmlCtrlEntityRegex, "").replace(constants_1.ctrlCharactersRegex, "").replace(constants_1.whitespaceEscapeCharsRegex, "").trim();
				decodedUrl = decodeURI(decodedUrl);
				charsToDecode = decodedUrl.match(constants_1.ctrlCharactersRegex) || decodedUrl.match(constants_1.htmlEntitiesRegex) || decodedUrl.match(constants_1.htmlCtrlEntityRegex) || decodedUrl.match(constants_1.whitespaceEscapeCharsRegex);
			} while (charsToDecode && charsToDecode.length > 0);
			var sanitizedUrl = decodedUrl;
			if (!sanitizedUrl) return constants_1.BLANK_URL;
			if (isRelativeUrlWithoutProtocol(sanitizedUrl)) return sanitizedUrl;
			var trimmedUrl = sanitizedUrl.trimStart();
			var urlSchemeParseResults = trimmedUrl.match(constants_1.urlSchemeRegex);
			if (!urlSchemeParseResults) return sanitizedUrl;
			var urlScheme = urlSchemeParseResults[0].toLowerCase().trim();
			if (constants_1.invalidProtocolRegex.test(urlScheme)) return constants_1.BLANK_URL;
			var backSanitized = trimmedUrl.replace(/\\/g, "/");
			if (urlScheme === "mailto:" || urlScheme.includes("://")) return backSanitized;
			if (urlScheme === "http:" || urlScheme === "https:") {
				if (!isValidUrl(backSanitized)) return constants_1.BLANK_URL;
				var url_1 = new URL(backSanitized);
				url_1.protocol = url_1.protocol.toLowerCase();
				url_1.hostname = url_1.hostname.toLowerCase();
				return url_1.toString();
			}
			return backSanitized;
		}
	})))();
	/**
	* Gets the file extension from a MIME type.
	* @param {string} [mime] - The MIME type of the file.
	* @returns {string} The corresponding file extension (e.g., 'jpg', 'png'). Defaults to 'png'.
	*/
	function extFromMime(mime) {
		switch (mime) {
			case "image/jpeg": return "jpg";
			case "image/png": return "png";
			case "image/webp": return "webp";
			case "image/gif": return "gif";
			case "image/bmp": return "bmp";
			default: return "png";
		}
	}
	/**
	* Fetches an image from its URL and returns it as a Blob.
	* @param page
	*/
	async function getBlobFromFetch(page) {
		if (!page.src) return null;
		try {
			const response = await fetch(page.src);
			if (response.ok) {
				logScript(`Got blob for page ${page.src} from fetch`);
				return await response.blob();
			}
		} catch (error) {
			logScript(`Failed to get blob for page ${page.src} from fetch`, error);
		}
		if (typeof GM_xmlhttpRequest !== "undefined") return new Promise((resolve) => {
			GM_xmlhttpRequest({
				method: "GET",
				url: page.src,
				responseType: "blob",
				onload: (response) => {
					if (response.status === 200) {
						logScript(`Got blob for page ${page.src} from GM_xmlhttpRequest`);
						resolve(response.response);
					} else {
						logScript(`Failed to get blob for page ${page.src} from GM_xmlhttpRequest`, response.statusText);
						resolve(null);
					}
				},
				onerror: (error) => {
					logScript(`Failed to get blob for page ${page.src} from GM_xmlhttpRequest`, error);
					resolve(null);
				}
			});
		});
		return null;
	}
	/**
	* Draws an image onto a canvas and returns it as a Blob.
	* @param page
	*/
	async function getBlobFromCanvas(page) {
		const img = page.ref?.value;
		if (!img) return null;
		try {
			const canvas = document.createElement("canvas");
			const ctx = canvas.getContext("2d");
			if (ctx) {
				canvas.width = img.naturalWidth;
				canvas.height = img.naturalHeight;
				ctx.drawImage(img, 0, 0);
				return await new Promise((resolve) => {
					canvas.toBlob((blob) => {
						if (blob) logScript(`Got blob for page ${page.src} from canvas`);
						resolve(blob);
					}, "image/png", 1);
				});
			}
		} catch (e) {
			logScript(`Failed to get blob for page ${page.src} from canvas`, e);
		}
		return null;
	}
	/**
	* Tries to get the image blob from cache, fetch or canvas.
	* @param page
	*/
	async function getImageBlob(page) {
		if (page.blob) {
			logScript(`Got blob for page ${page.src} from cache`);
			return page.blob;
		}
		const blob = await getBlobFromFetch(page) || await getBlobFromCanvas(page);
		if (!blob) logScript(`Failed to get blob for page ${page.src}`);
		return blob;
	}
	/**
	* Generates a zip file from the images stored in the application state and initiates a download.
	* The zip file is named after the manga title.
	* @returns {Promise<void>} A promise that resolves when the zip generation and download process is initiated.
	*/
	async function generateZip() {
		setAppStateValue("download", "working");
		const zip = new JSZip();
		const images = getAppStateValue("images") ?? {};
		const manga = getAppStateValue("manga");
		const total = manga?.pages ?? 0;
		const digits = Math.floor(Math.log10(total || 1)) + 1;
		const imageEntries = _.sortBy(_.entries(images), ([key]) => Number(key));
		const failedDownloads = [];
		const updateProgress = (current) => {
			setAppStateValue("dialog", {
				open: true,
				title: getLocaleString("BUTTON_DOWNLOAD"),
				content: b$1`
        <div style='display: flex; flex-direction: column; gap: 10px;'>
          <p>${getLocaleString("DOWNLOAD_PROGRESS").replace("##num##", current.toString()).replace("##total##", total.toString())}</p>
          <progress value='${current}' max='${total}' style='width: 100%; height: 20px;'></progress>
        </div>
      `,
				footer: b$1`
        <mov-button @click=${() => setAppStateValue("download", "cancelled")}>
          ${getLocaleString("CANCEL")}
        </mov-button>
      `
			});
		};
		updateProgress(0);
		let count = 0;
		for (const [key, page] of imageEntries) {
			if (getAppStateValue("download") === "cancelled") {
				logScript("Download cancelled");
				setAppStateValue("dialog", null);
				setAppStateValue("download", void 0);
				return;
			}
			try {
				const blob = await getImageBlob(page);
				if (blob) {
					const ext = extFromMime(blob.type);
					const name = `Page-${Number(key).toString().padStart(digits, "0")}.${ext}`;
					logScript(`${name} Added to Zip from Blob`);
					zip.file(name, blob, {
						createFolders: true,
						compression: "DEFLATE"
					});
				} else failedDownloads.push(page.src ?? key);
			} catch (error) {
				logScript(`Error processing page ${key}`, error);
				failedDownloads.push(page.src ?? key);
			} finally {
				count += 1;
				updateProgress(count);
			}
		}
		setAppStateValue("dialog", {
			open: true,
			title: getLocaleString("BUTTON_DOWNLOAD"),
			content: b$1`
      <div style='display: flex; flex-direction: column; gap: 10px;'>
        <p>${getLocaleString("GENERATING_ZIP")}</p>
        <progress style='width: 100%; height: 20px;'></progress>
      </div>
    `,
			footer: b$1``
		});
		if (failedDownloads.length > 0) {
			logScript("Some images failed to download:", failedDownloads);
			zip.file("failed_pages.txt", failedDownloads.join("\n"));
		}
		logScript("Generating Zip");
		zip.generateAsync({ type: "blob" }).then((content) => {
			logScript("Download Ready");
			const zipName = `${manga?.title ?? document.title}.zip`;
			window.saveAs(content, zipName, { autoBom: false });
			if (failedDownloads.length > 0) setAppStateValue("dialog", {
				open: true,
				title: getLocaleString("DOWNLOAD_INCOMPLETE"),
				icon: "warning",
				content: b$1`<p>${getLocaleString("DOWNLOAD_INCOMPLETE_MESSAGE")}</p>`,
				footer: b$1`<mov-button @click=${() => setAppStateValue("dialog", null)}>
            ${getLocaleString("CLOSE")}
          </mov-button>`
			});
			else setAppStateValue("dialog", null);
		}).catch((err) => {
			logScript("Error generating zip", err);
			setAppStateValue("dialog", {
				open: true,
				title: getLocaleString("WARNING"),
				icon: "error",
				content: b$1`<p>Error generating zip: ${err.message}</p>`,
				footer: b$1`<mov-button @click=${() => setAppStateValue("dialog", null)}>
          ${getLocaleString("CLOSE")}
        </mov-button>`
			});
		}).finally(() => {
			setAppStateValue("download", void 0);
		});
	}
	//#endregion
	//#region src/ui/events/globals.ts
	/**
	* Event handler to initiate the download of the chapter as a ZIP file.
	* It checks if a download is already in progress to prevent multiple downloads.
	*/
	function buttonStartDownload() {
		if (getAppStateValue("download") === "working") return;
		logScript("Downloading Chapter");
		generateZip().catch((err) => logScript("Error downloading chapter", err));
	}
	/**
	* Event handler to toggle the visibility of the individual page controls globally.
	*/
	function buttonGlobalHideImageControls() {
		changeSettingsValue("hidePageControls", (b) => !b);
	}
	/**
	* Event handler for clickable elements that should redirect the browser.
	* It handles normal clicks, as well as Ctrl+Click and middle-mouse clicks for opening in a new tab.
	* It also includes a special case for the 'series' link to navigate back in history.
	* @param {Event} event - The click event.
	*/
	function buttonRedirectURL(event) {
		const element = event.currentTarget || event.target;
		const url = element.getAttribute("value") ?? element.getAttribute("href");
		if (event.button !== 1 && !event.ctrlKey) {
			if (url && url !== "#") window.location.href = (0, import_dist.sanitizeUrl)(url);
			else if (element.id === "series") if (isStandalone()) window.location.href = window.location.pathname;
			else window.history.back();
		}
	}
	//#endregion
	//#region src/ui/events/navigation.ts
	/**
	* Scrolls the view to a specific element.
	* The scrolling behavior adapts based on the current view mode:
	* - In 'Fluid' modes, it scrolls the internal `#Chapter` container.
	* - In other modes, it scrolls the main window.
	* @param {HTMLElement | undefined | null} ele - The element to scroll into view.
	*/
	function scrollToElement(ele) {
		if (!ele) return;
		if (getSettingsValue("viewMode").startsWith("Fluid")) {
			const container = getAppStateValue("chapter").value;
			if (container) {
				const rect = ele.getBoundingClientRect();
				const containerRect = container.getBoundingClientRect();
				container.scrollBy({
					left: rect.left - containerRect.left,
					top: rect.top - containerRect.top,
					behavior: "instant"
				});
			}
		} else {
			const rect = ele.getBoundingClientRect();
			window.scrollTo({
				top: rect.top + window.scrollY,
				left: rect.left + window.scrollX,
				behavior: "instant"
			});
		}
	}
	/**
	* Listens for changes to the `scrollToPage` app state value.
	* When `scrollToPage` is set (and not undefined initially), it scrolls to the specified page.
	*/
	appState.listen((value, _oldValue, changedKey) => {
		if (changedKey === "scrollToPage" && value.scrollToPage !== void 0) {
			if (value.scrollToPage <= 0) window.scrollTo(0, 0);
			else scrollToElement(getAppStateValue("images")?.[value.scrollToPage]?.ref?.value);
			setTimeout(() => setAppStateValue("scrollToPage", void 0), 10);
		}
	});
	/**
	* Event handler for the "Go to Page" dropdown selector.
	* It reads the selected page number and scrolls to the corresponding page element.
	* @param {Event} event - The change event from the `<select>` element.
	*/
	function selectGoToPage(event) {
		const target = event.detail.value;
		setAppStateValue("scrollToPage", typeof target === "string" ? parseInt(target, 10) : target);
	}
	/**
	* Event handler for clicking a page thumbnail in the navigation bar.
	* It scrolls to the corresponding page element.
	* @param {number} target - The page number to navigate to.
	*/
	function clickThumbnail(target) {
		setAppStateValue("scrollToPage", target);
	}
	//#endregion
	//#region src/ui/events/autoscroll.ts
	/**
	* @file This module contains the logic for the auto-scrolling feature.
	* It provides functions to start, stop, and intelligently pause/resume scrolling
	* based on user interaction (e.g., manual scrolling via the mouse wheel).
	*/
	/**
	* The core scrolling animation loop.
	* It checks the current view mode to determine the scroll direction (vertical or horizontal)
	* and scrolls the appropriate container by the amount specified in the settings.
	* The loop continues via `requestAnimationFrame` as long as `scrollActive` is true.
	* @internal
	*/
	function scroll() {
		const chapterElement = getAppStateValue("chapter").value;
		if (getSettingsValue("viewMode").startsWith("Fluid")) {
			const scrollDirection = getSettingsValue("viewMode") === "FluidRTL" ? -1 : 1;
			chapterElement?.scrollBy({
				top: 0,
				left: getSettingsValue("scrollHeight") * scrollDirection,
				behavior: "smooth"
			});
			if (chapterElement && chapterElement.scrollLeft + chapterElement.clientWidth >= chapterElement.scrollWidth - 2) {
				setAppStateValue("autoScroll", false);
				logScript("Finished auto scroll");
			}
		} else {
			window.scrollBy({
				top: getSettingsValue("scrollHeight"),
				left: 0,
				behavior: "smooth"
			});
			if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
				setAppStateValue("autoScroll", false);
				logScript("Finished auto scroll");
			}
		}
		if (getAppStateValue("autoScroll")) requestAnimationFrame(scroll);
	}
	/**
	* Toggles the auto-scroll feature on or off.
	* It updates the UI state of the control button and starts or stops the `scroll` animation loop.
	*/
	function toggleAutoScroll() {
		if (getAppStateValue("autoScroll")) {
			setAppStateValue("autoScroll", false);
			logScript("Stopped auto scroll");
		} else {
			setAppStateValue("autoScroll", true);
			requestAnimationFrame(scroll);
			logScript("Start auto scroll");
		}
	}
	var resume = false;
	var debounceAutoScroll = _.debounce(() => {
		toggleAutoScroll();
		resume = false;
	}, 500);
	/**
	* Handles manual scroll events (e.g., from a mouse wheel) to intelligently pause and resume auto-scrolling.
	* If auto-scroll is active, it pauses it. It then uses a debounce function to resume scrolling after the user stops.
	*/
	function manualScroll() {
		if (!resume && getAppStateValue("autoScroll")) {
			toggleAutoScroll();
			resume = true;
		}
		if (resume && !getAppStateValue("autoScroll")) debounceAutoScroll();
	}
	/**
	* Initializes the auto-scroll feature by attaching a throttled event listener for the `wheel` event.
	*/
	function autoscroll() {
		window.addEventListener("wheel", _.throttle(manualScroll, 500));
	}
	//#endregion
	//#region src/ui/components/Dialog.ts
	var Dialog = class Dialog extends i$1 {
		constructor(..._args) {
			super(..._args);
			this.open = false;
			this.mode = "dialog";
			this.fullscreen = false;
			this.label = "";
			this.withoutHeader = false;
			this.lightDismiss = true;
		}
		static {
			this.styles = i$3`
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
  `;
		}
		close() {
			this.open = false;
		}
		handleCancel(e) {
			e.preventDefault();
			this.close();
		}
		handleBackdropClick() {
			if (this.mode !== "inline" && this.lightDismiss) this.close();
		}
		handleClick(event) {
			if (this.mode !== "inline" && this.lightDismiss && event.target === this.dialog) this.close();
		}
		updated(changedProperties) {
			if (this.mode === "inline") return;
			if (changedProperties.has("open")) {
				if (this.open) {
					this.dialog.classList.remove("closing");
					this.dialog.show();
					this.dispatchEvent(new CustomEvent("open", {
						bubbles: true,
						composed: true
					}));
					this.dispatchEvent(new CustomEvent("wa-show", {
						bubbles: true,
						composed: true
					}));
					setTimeout(() => {
						this.dispatchEvent(new CustomEvent("wa-after-show", {
							bubbles: true,
							composed: true
						}));
					}, 150);
				} else if (changedProperties.get("open") === true) {
					this.dispatchEvent(new CustomEvent("close", {
						bubbles: true,
						composed: true
					}));
					this.dispatchEvent(new CustomEvent("wa-hide", {
						bubbles: true,
						composed: true
					}));
					this.dialog.classList.add("closing");
					setTimeout(() => {
						this.dialog.classList.remove("closing");
						if (this.dialog.open) this.dialog.close();
						this.dispatchEvent(new CustomEvent("wa-after-hide", {
							bubbles: true,
							composed: true
						}));
					}, 300);
				}
			}
		}
		render() {
			return b$1`
      <div
        class="backdrop"
        @click=${this.handleBackdropClick}
      ></div>
      <dialog
        part="dialog"
        @cancel=${this.handleCancel}
        @click=${this.handleClick}
      >
        ${!this.withoutHeader ? b$1`
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
                ${IconX}
              </button>
            </div>
          </div>
        ` : ""}
        <div class="content-slot" part="body">
          ${this.icon ? b$1`
                <div class="icon-container">
                  <mov-icon
                    .name=${getIconName(this.icon)}
                    size="4rem"
                  ></mov-icon>
                </div>
              ` : ""}
          <slot></slot>
        </div>
        <slot name="footer" part="footer"></slot>
      </dialog>
    `;
		}
	};
	__decorate([n$1({
		type: Boolean,
		reflect: true
	})], Dialog.prototype, "open", void 0);
	__decorate([n$1({
		type: String,
		reflect: true
	})], Dialog.prototype, "mode", void 0);
	__decorate([n$1({
		type: Boolean,
		reflect: true
	})], Dialog.prototype, "fullscreen", void 0);
	__decorate([n$1({
		type: String,
		reflect: true
	})], Dialog.prototype, "label", void 0);
	__decorate([n$1({
		type: Boolean,
		reflect: true,
		attribute: "without-header"
	})], Dialog.prototype, "withoutHeader", void 0);
	__decorate([n$1({
		type: Boolean,
		reflect: true,
		attribute: "light-dismiss"
	})], Dialog.prototype, "lightDismiss", void 0);
	__decorate([n$1({
		type: String,
		reflect: true
	})], Dialog.prototype, "icon", void 0);
	__decorate([e$2("dialog")], Dialog.prototype, "dialog", void 0);
	Dialog = __decorate([t$1("mov-dialog")], Dialog);
	/**
	* Displays a non-interactive informational dialog by setting the global dialog state.
	* @param {object} options - The options for the dialog.
	* @param {string} options.title - The title of the dialog.
	* @param {string} options.html - The HTML content of the dialog.
	* @param {'info'|'warning'|'success'|'error'} [options.icon] - The icon to display.
	* @param {number} [options.timer] - An optional timer in ms to auto-close the dialog.
	* @security This function uses `unsafeHTML`. Do not use it with untrusted content.
	*/
	function showInfoDialog(options) {
		const closeDialog = () => setAppStateValue("dialog", null);
		if (options.timer) setTimeout(closeDialog, options.timer);
		setAppStateValue("dialog", {
			open: true,
			icon: options.icon,
			title: options.title,
			content: b$1`<div style="padding: 1rem;">${o$5(options.html)}</div>`,
			footer: b$1`
      <div
        slot="footer"
        style="display: flex; justify-content: flex-end; padding: 0.5rem 1rem 1rem;"
      >
        <mov-button @click=${closeDialog}>OK</mov-button>
      </div>
    `
		});
	}
	function getIconName(iconType) {
		switch (iconType) {
			case "info": return "info-circle";
			case "warning": return "alert-circle";
			case "success": return "circle-check";
			case "error": return "circle-x";
			case "question": return "help";
			default: return "";
		}
	}
	//#endregion
	//#region src/ui/events/options.ts
	/**
	* Event handler to change the settings scope between global and site-specific (local).
	* @param {Event} event - The change event from the scope selector.
	*/
	function changeSettingsScope(event) {
		const scope = event.currentTarget.value;
		toggleLocalSettings(scope === "true");
	}
	/**
	* Event handler to change and save the application's language.
	* @param {Event} event - The change event from the locale selector.
	*/
	function changeLocale(event) {
		const locale = event.currentTarget.value;
		saveSettingsValue("locale", locale);
	}
	/**
	* Event handler to change and save the default load mode for the viewer.
	* @param {Event} event - The change event from the load mode selector.
	*/
	function changeLoadMode(event) {
		const mode = event.currentTarget.value;
		saveSettingsValue("loadMode", mode);
	}
	/**
	* Event handler to toggle and save the 'fit width if oversized' setting.
	* @param {Event} event - The change event from the checkbox.
	*/
	function checkFitWidthOversize(event) {
		const checked = event.detail.checked;
		saveSettingsValue("fitWidthIfOversize", checked);
	}
	/**
	* Event handler to change and save the navigation bar's type/position.
	* @param {Event} event - The change event from the navbar type selector.
	*/
	function changeNavbarType(event) {
		const navbarType = event.currentTarget.value;
		saveSettingsValue("navbar", navbarType);
	}
	/**
	* Event handler to change and save the pagination mode.
	* @param {Event} event - The change event from the pagination mode selector.
	*/
	function changePagination(event) {
		const pagination = event.currentTarget.value;
		saveSettingsValue("pagination", pagination);
	}
	/**
	* Event handler to toggle and save the 'auto download' setting. Shows an informational popup when enabled.
	* @param {Event} event - The change event from the checkbox.
	*/
	function checkAutoDownload(event) {
		const checked = event.detail.checked;
		saveSettingsValue("downloadZip", checked);
		if (checked) showInfoDialog({
			title: getLocaleString("ATTENTION"),
			html: getLocaleString("AUTO_DOWNLOAD"),
			timer: 1e4,
			icon: "info"
		});
	}
	/**
	* Event handler to toggle and save the 'lazy load' setting. Shows a warning popup when enabled.
	* @param {Event} event - The change event from the checkbox.
	*/
	function checkLazyLoad(event) {
		const checked = event.detail.checked;
		saveSettingsValue("lazyLoadImages", checked);
		if (checked) showInfoDialog({
			title: getLocaleString("WARNING"),
			html: getLocaleString("LAZY_LOAD"),
			icon: "warning"
		});
	}
	/**
	* Event handler to change and save the lazy load starting page.
	* @param {Event} event - The change event from the range input.
	*/
	function changeLazyStart(event) {
		const target = event.detail.value;
		saveSettingsValue("lazyStart", typeof target === "string" ? parseInt(target, 10) : target);
	}
	/**
	* Event handler to change and save the page loading speed. Shows a warning for high speeds.
	* @param {Event} event - The change event from the select input.
	*/
	function changeLoadSpeed(event) {
		const speed = event.currentTarget.value;
		saveSettingsValue("loadSpeed", speed);
		if (["Extreme", "All"].includes(speed)) showInfoDialog({
			title: getLocaleString("SPEED_WARNING"),
			html: getLocaleString("SPEED_WARNING_MESSAGE"),
			icon: "warning"
		});
	}
	/**
	* Event handler to change and save the zoom step value.
	* @param {Event} event - The change event from the range input.
	*/
	function changeZoomStep(event) {
		const target = event.detail.value;
		saveSettingsValue("zoomStep", typeof target === "string" ? parseInt(target, 10) : target);
	}
	/**
	* Event handler to change and save the minimum zoom value. Also injects a stylesheet to apply the rule.
	* @param {Event} event - The input event from the range input.
	*/
	function changeMinZoom(event) {
		const target = event.detail.value;
		const min = typeof target === "string" ? parseInt(target, 10) : target;
		replaceStyleSheet("MinZoom", `#MangaOnlineViewer .PageContent .PageImg {min-width: ${min}vw;}`);
		saveSettingsValue("minZoom", min);
	}
	/**
	* Event handler to toggle and save the 'hide page controls' setting.
	* @param {Event} event - The change event from the checkbox.
	*/
	function checkHideImageControls(event) {
		const checked = event.detail.checked;
		saveSettingsValue("hidePageControls", checked);
	}
	/**
	* Event handler to change and save the header behavior type.
	* @param {Event} event - The change event from the header type selector.
	*/
	function changeHeaderType(event) {
		const headerType = event.currentTarget.value;
		saveSettingsValue("header", headerType);
	}
	/**
	* Event handler to change and save the auto-scroll speed.
	* @param {Event} event - The change event from the range input.
	*/
	function changeScrollHeight(event) {
		const target = event.detail.value;
		saveSettingsValue("scrollHeight", typeof target === "string" ? parseInt(target, 10) : target);
	}
	function changeAutoScrollSpeed(sign) {
		changeSettingsValue("scrollHeight", (v) => {
			const speed = v + sign * 25;
			if (speed <= 0) return 0;
			const max = Math.ceil(window.innerHeight / 200) * 100;
			if (speed >= max) return max;
			return speed;
		});
	}
	//#endregion
	//#region src/ui/events/zoom.ts
	function getAvailableWidth() {
		const navbar = getSettingsValue("navbar");
		if (navbar === "left" || navbar === "right") return window.innerWidth - 34;
		return window.innerWidth;
	}
	function getAvailableHeight() {
		if (getSettingsValue("navbar") === "bottom") return window.innerHeight - 34;
		return window.innerHeight;
	}
	function calculatePageZoom(page, mode = getSettingsValue("zoomMode"), value = getSettingsValue("zoomValue")) {
		const nextWidth = getAvailableWidth();
		const nextHeight = getAvailableHeight();
		if (mode === "width") {
			page.width = nextWidth;
			page.height = void 0;
		} else if (mode === "height") {
			page.width = void 0;
			page.height = nextHeight;
		} else if (mode === "percent") {
			const width = page.naturalWidth ?? page.ref?.value?.naturalWidth;
			page.width = width ? width * (value / 100) : void 0;
			page.height = void 0;
		}
		return page;
	}
	/**
	* Applies a new zoom level to the viewer. This function updates the application's reactive state,
	* which in turn causes the images to re-render with the new zoom settings.
	* @param {ZoomMode} [mode=getSettingsValue('zoomMode')] - The zoom mode to apply ('percent', 'width', or 'height').
	* @param {number} [value=getSettingsValue('zoomValue')] - The zoom value (e.g., a percentage).
	*/
	function applyZoom(mode = getSettingsValue("zoomMode"), value = getSettingsValue("zoomValue")) {
		logScript("Zoom", mode, value);
		setSettingsValue("zoomMode", mode);
		setSettingsValue("zoomValue", value);
		if (mode === "height") setAppStateValue("scrollToPage", getAppStateValue("currentPage"));
		else refreshSettings("header");
		const images = getAppStateValue("images");
		const manga = getAppStateValue("manga");
		const newImages = {};
		for (let i = manga?.begin ?? 1; i <= (manga?.pages ?? 1); i++) newImages[i] = calculatePageZoom({ ...images?.[i] }, mode, value);
		setAppStateValue("images", newImages);
	}
	/**
	* Returns an event handler function that changes the global zoom settings.
	* @param {ZoomMode} mode - The zoom mode to set.
	* @param {number} [value=getSettingsValue('zoomValue')] - The zoom value to set.
	* @returns {() => void} An event handler function.
	*/
	function changeGlobalZoom(mode, value = getSettingsValue("zoomValue")) {
		return () => {
			applyZoom(mode, value);
		};
	}
	/**
	* Returns an event handler function that changes the zoom by a predefined step.
	* @param {number} [sign=1] - The direction of the zoom change (1 for zoom in, -1 for zoom out).
	* @returns {() => void} An event handler function.
	*/
	function changeZoomByStep(sign = 1) {
		return () => {
			const ratio = getSettingsValue("zoomValue") + sign * getSettingsValue("zoomStep");
			if (ratio > 0 && ratio < 500) applyZoom("percent", ratio);
		};
	}
	/**
	* Event handler to change and persist the default zoom mode from a settings panel.
	* @param {Event} event - The change event from the input control.
	*/
	function changeDefaultZoomMode(event) {
		const target = event.currentTarget.value;
		saveSettingsValue("zoomMode", target);
	}
	/**
	* Event handler to change and persist the default zoom value from a settings panel.
	* @param {Event} event - The change event from the range input.
	*/
	function changeDefaultZoomValue(event) {
		const target = event.detail.value;
		const value = typeof target === "string" ? parseInt(target, 10) : target;
		saveSettingsValue("zoomValue", value);
		applyZoom("percent", value);
	}
	/**
	* Event handler for the main zoom slider in the header to change the current zoom percentage.
	* @param {Event} event - The input event from the range slider.
	*/
	function changeZoom(event) {
		const target = event.detail.value;
		applyZoom("percent", typeof target === "string" ? parseInt(target, 10) : target);
	}
	//#endregion
	//#region src/ui/events/viewmode.ts
	/**
	* Returns a function that updates the current view mode in the application state.
	* When switching to a 'Fluid' mode, it also enforces specific zoom and header settings for a better experience.
	* When switching away from a 'Fluid' mode, it reverts those settings to their original values.
	* @param {ViewMode} mode - The view mode to switch to.
	* @returns {() => void} A function to be used as an event handler.
	*/
	function updateViewMode(mode) {
		return () => {
			setSettingsValue("viewMode", mode);
			if (mode.startsWith("Fluid")) {
				setSettingsValue("zoomMode", "height");
				setSettingsValue("header", "click");
			} else {
				refreshSettings("zoomMode");
				refreshSettings("zoomValue");
				refreshSettings("header");
			}
			applyZoom();
		};
	}
	/**
	* Event handler to change and persist the default view mode from the settings panel.
	* It saves the new mode and then applies it to the current session.
	* @param {Event} event - The change event from the view mode selector.
	*/
	function changeDefaultViewMode(event) {
		const mode = event.currentTarget.value;
		saveSettingsValue("viewMode", mode);
		updateViewMode(mode)();
	}
	//#endregion
	//#region src/ui/events/keybindings.ts
	/**
	* Handles the logic for scrolling the page up or down.
	* The behavior changes based on the current view and zoom modes to provide an intuitive experience.
	* @internal
	* @param {1 | -1} sign - The direction of the scroll (-1 for up, 1 for down).
	*/
	function scrollFluid(sign) {
		const scrollDirection = getSettingsValue("viewMode") === "FluidRTL" ? -1 : 1;
		getAppStateValue("chapter").value?.scrollBy({
			left: .8 * window.innerWidth * sign * scrollDirection,
			behavior: "smooth"
		});
	}
	function scrollPage(sign) {
		const target = getAppStateValue("currentPage") + sign;
		if (target < 0) setAppStateValue("scrollToPage", 0);
		else if (target > (getAppStateValue("manga")?.pages ?? 1)) {} else setAppStateValue("scrollToPage", target);
	}
	function scrollVertical(sign) {
		window.scrollBy({
			top: .8 * window.innerHeight * sign,
			behavior: "smooth"
		});
	}
	function scrollBook(sign) {
		const currentPage = getAppStateValue("currentPage");
		const manga = getAppStateValue("manga");
		if (!manga) return;
		const images = getAppStateValue("images") ?? {};
		const begin = manga.begin ?? 1;
		const pages = manga.pages ?? 1;
		const isStartOfRow = (index) => {
			if (index < begin || index > pages) return false;
			if (images[index]?.doublePage) return true;
			let singlePageCount = 0;
			for (let i = index - 1; i >= begin; i--) {
				if (images[i]?.doublePage) break;
				singlePageCount++;
			}
			return singlePageCount % 2 === 0;
		};
		let target;
		if (sign === 1) {
			target = currentPage + 1;
			while (target <= pages && !isStartOfRow(target)) target++;
		} else if (!isStartOfRow(currentPage)) {
			target = currentPage;
			while (target > begin && !isStartOfRow(target)) target--;
		} else {
			target = currentPage - 1;
			while (target > begin && !isStartOfRow(target)) target--;
		}
		if (target < begin) setAppStateValue("scrollToPage", 0);
		else if (target > pages) setAppStateValue("scrollToPage", pages);
		else setAppStateValue("scrollToPage", target);
	}
	function doScrolling(sign) {
		const viewMode = getSettingsValue("viewMode");
		const zoomMode = getSettingsValue("zoomMode");
		logScript("Scrolling view", viewMode, "zoom", zoomMode, "sign", sign);
		if (viewMode.match(/^(Book|Manga)$/) && zoomMode === "height") scrollBook(sign);
		else if (viewMode.startsWith("Fluid")) scrollFluid(sign);
		else if (zoomMode === "height") scrollPage(sign);
		else scrollVertical(sign);
	}
	/**
	* Redirects the browser to a given URL.
	* If the URL is null, undefined, or '#', it navigates back in the browser history.
	* @param type
	*/
	function redirectUrl(type) {
		const url = getAppStateValue("manga")?.[type];
		if (url && url !== "#") window.location.href = (0, import_dist.sanitizeUrl)(url);
		else if (type === "series") if (isStandalone()) window.location.href = window.location.pathname;
		else window.history.back();
	}
	/**
	* A mapping of keybinding identifiers to their corresponding action functions.
	* @internal
	*/
	var actions = {
		SCROLL_UP() {
			doScrolling(-1);
		},
		SCROLL_DOWN() {
			doScrolling(1);
		},
		NEXT_CHAPTER() {
			redirectUrl("next");
		},
		PREVIOUS_CHAPTER() {
			redirectUrl("prev");
		},
		RETURN_CHAPTER_LIST() {
			redirectUrl("series");
		},
		ENLARGE() {
			changeZoomByStep(1)();
		},
		REDUCE() {
			changeZoomByStep(-1)();
		},
		RESTORE() {
			changeGlobalZoom("percent", 100)();
		},
		FIT_WIDTH() {
			changeGlobalZoom("width")();
		},
		FIT_HEIGHT() {
			changeGlobalZoom("height")();
		},
		SETTINGS() {
			changeAppStateValue("panel", (p) => p === "none" ? "settings" : "none");
		},
		VIEW_MODE_WEBCOMIC() {
			updateViewMode("WebComic")();
		},
		VIEW_MODE_VERTICAL() {
			updateViewMode("Vertical")();
		},
		VIEW_MODE_LEFT() {
			updateViewMode("FluidRTL")();
		},
		VIEW_MODE_RIGHT() {
			updateViewMode("FluidLTR")();
		},
		VIEW_MODE_GALLERY() {
			updateViewMode("Gallery")();
		},
		SCROLL_START() {
			toggleAutoScroll();
		},
		INCREASE_SPEED() {
			changeAutoScrollSpeed(1);
		},
		DECREASE_SPEED() {
			changeAutoScrollSpeed(-1);
		}
	};
	/**
	* Initializes the keybinding system.
	* It first unbinds all existing hotkeys to prevent conflicts, then re-binds them
	* based on the current user settings. Each keybinding is throttled to prevent rapid firing.
	*/
	function keybindings() {
		document.onkeydown = null;
		document.onkeyup = null;
		window.onkeydown = null;
		window.onkeyup = null;
		window.onload = null;
		document.body.onload = null;
		hotkeys.unbind();
		_.keys(getSettingsValue("keybinds")).forEach((key) => {
			hotkeys(getSettingsValue("keybinds")[key]?.join(",") ?? "", _.throttle((event) => {
				event.preventDefault();
				event.stopImmediatePropagation();
				event.stopPropagation();
				actions[key]();
			}, 100));
		});
	}
	//#endregion
	//#region src/ui/components/Pagination.ts
	var Pagination = class Pagination extends i$1 {
		constructor(..._args) {
			super(..._args);
			this.mode = "disabled";
			this.currentPage = 1;
			this.totalPages = 1;
			this.startPage = 1;
		}
		static {
			this.styles = i$3`
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
  `;
		}
		get isFirstPage() {
			return this.currentPage <= this.startPage;
		}
		get isLastPage() {
			return this.currentPage >= this.totalPages - (1 - this.startPage);
		}
		renderSlider() {
			return b$1`
      <div class="slider-pagination">
        <button
          class="pagination-button"
          @click=${buttonRedirectURL}
          value="${this.prev}"
          ?disabled=${isNothing(this.prev) || this.prev === "#"}
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
            @input="${selectGoToPage}"
          ></mov-slider>
        </div>

        <button class="pagination-button" @click=${this.goToNextPage} ?disabled=${this.isLastPage}>
          <mov-icon name="chevron-right"></mov-icon>
          <div class="tooltip">Next Page</div>
        </button>

        <button
          class="pagination-button"
          @click=${buttonRedirectURL}
          value="${this.next}"
          ?disabled=${isNothing(this.next) || this.next === "#"}
        >
          <mov-icon name="arrow-big-right"></mov-icon>
          <div class="tooltip">Next Chapter</div>
        </button>
      </div>
    `;
		}
		renderSideArrows() {
			return b$1`
      <div class="arrows-pagination">
        <button
          class="side-arrow left"
          @click=${this.handleLeftArrowClick}
          ?disabled=${this.isFirstPage && (isNothing(this.prev) || this.prev === "#")}
        >
          <mov-icon name="chevron-left"></mov-icon>
        </button>
        <button
          class="side-arrow right"
          @click=${this.handleRightArrowClick}
          ?disabled=${this.isLastPage && (isNothing(this.next) || this.next === "#")}
        >
          <mov-icon name="chevron-right"></mov-icon>
        </button>
      </div>
    `;
		}
		render() {
			if (this.mode === "disabled") return A;
			const showSlider = this.mode === "slider" || this.mode === "both";
			const showArrows = this.mode === "side-arrows" || this.mode === "both";
			return b$1`
      ${showSlider ? this.renderSlider() : A} ${showArrows ? this.renderSideArrows() : A}
    `;
		}
		handleLeftArrowClick() {
			if (this.isFirstPage) redirectUrl("prev");
			else this.goToPreviousPage();
		}
		handleRightArrowClick() {
			if (this.isLastPage) redirectUrl("next");
			else this.goToNextPage();
		}
		goToPreviousPage() {
			this.goToPage(this.currentPage - 1);
		}
		goToNextPage() {
			this.goToPage(this.currentPage + 1);
		}
		goToPage(page) {
			setAppStateValue("scrollToPage", page);
		}
	};
	__decorate([n$1({ type: String })], Pagination.prototype, "mode", void 0);
	__decorate([n$1({ type: Number })], Pagination.prototype, "currentPage", void 0);
	__decorate([n$1({ type: Number })], Pagination.prototype, "totalPages", void 0);
	__decorate([n$1({ type: Number })], Pagination.prototype, "startPage", void 0);
	__decorate([n$1({ type: String })], Pagination.prototype, "next", void 0);
	__decorate([n$1({ type: String })], Pagination.prototype, "prev", void 0);
	Pagination = __decorate([t$1("manga-pagination")], Pagination);
	//#endregion
	//#region src/ui/components/Drawer.ts
	var Drawer = class Drawer extends i$1 {
		constructor(..._args) {
			super(..._args);
			this.open = false;
			this.placement = "end";
			this.label = "";
			this.withoutHeader = false;
			this.lightDismiss = true;
		}
		static {
			this.styles = i$3`
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
  `;
		}
		close() {
			this.open = false;
		}
		handleCancel(e) {
			e.preventDefault();
			this.close();
		}
		handleBackdropClick() {
			if (this.lightDismiss) this.close();
		}
		handleClick(event) {
			if (this.lightDismiss && event.target === this.dialog) this.close();
		}
		updated(changedProperties) {
			if (changedProperties.has("open")) {
				if (this.open) {
					this.dialog.classList.remove("closing");
					this.dialog.show();
					this.dispatchEvent(new CustomEvent("open", {
						bubbles: true,
						composed: true
					}));
					this.dispatchEvent(new CustomEvent("wa-show", {
						bubbles: true,
						composed: true
					}));
					setTimeout(() => {
						this.dispatchEvent(new CustomEvent("wa-after-show", {
							bubbles: true,
							composed: true
						}));
					}, 250);
				} else if (changedProperties.get("open") === true) {
					this.dispatchEvent(new CustomEvent("close", {
						bubbles: true,
						composed: true
					}));
					this.dispatchEvent(new CustomEvent("wa-hide", {
						bubbles: true,
						composed: true
					}));
					this.dialog.classList.add("closing");
					setTimeout(() => {
						this.dialog.classList.remove("closing");
						if (this.dialog.open) this.dialog.close();
						this.dispatchEvent(new CustomEvent("wa-after-hide", {
							bubbles: true,
							composed: true
						}));
					}, 300);
				}
			}
		}
		render() {
			return b$1`
      <div
        class="backdrop"
        @click=${this.handleBackdropClick}
      ></div>
      <dialog
        part="dialog"
        @cancel=${this.handleCancel}
        @click=${this.handleClick}
      >
        ${!this.withoutHeader ? b$1`
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
                ${IconX}
              </button>
            </div>
          </div>
        ` : ""}
        <slot class="content-slot" part="body"></slot>
        <slot name="footer" class="footer-slot" part="footer"></slot>
      </dialog>
    `;
		}
	};
	__decorate([n$1({
		type: Boolean,
		reflect: true
	})], Drawer.prototype, "open", void 0);
	__decorate([n$1({
		type: String,
		reflect: true
	})], Drawer.prototype, "placement", void 0);
	__decorate([n$1({
		type: String,
		reflect: true
	})], Drawer.prototype, "label", void 0);
	__decorate([n$1({
		type: Boolean,
		reflect: true,
		attribute: "without-header"
	})], Drawer.prototype, "withoutHeader", void 0);
	__decorate([n$1({
		type: Boolean,
		reflect: true,
		attribute: "light-dismiss"
	})], Drawer.prototype, "lightDismiss", void 0);
	__decorate([e$2("dialog")], Drawer.prototype, "dialog", void 0);
	Drawer = __decorate([t$1("mov-drawer")], Drawer);
	//#endregion
	//#region src/ui/components/Dropdown.ts
	var MovDropdown = class MovDropdown extends i$1 {
		static {
			this.styles = i$3`
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
  `;
		}
		constructor() {
			super();
			this.open = false;
			this.checkable = false;
			this.distance = 0;
			this.skidding = 0;
			this.placement = "bottom-start";
			this.boundClickHandler = this.handleClickOutside.bind(this);
		}
		connectedCallback() {
			super.connectedCallback();
			document.addEventListener("click", this.boundClickHandler);
		}
		disconnectedCallback() {
			super.disconnectedCallback();
			document.removeEventListener("click", this.boundClickHandler);
		}
		handleClickOutside(event) {
			if (this.open && !event.composedPath().includes(this)) this.hide();
		}
		show() {
			if (this.open) return;
			this.open = true;
			this.dispatchEvent(new CustomEvent("wa-show", {
				bubbles: true,
				composed: true
			}));
			setTimeout(() => {
				this.dispatchEvent(new CustomEvent("wa-after-show", {
					bubbles: true,
					composed: true
				}));
			}, 150);
		}
		hide() {
			if (!this.open) return;
			this.open = false;
			this.dispatchEvent(new CustomEvent("wa-hide", {
				bubbles: true,
				composed: true
			}));
			setTimeout(() => {
				this.dispatchEvent(new CustomEvent("wa-after-hide", {
					bubbles: true,
					composed: true
				}));
			}, 150);
		}
		toggle() {
			if (this.open) this.hide();
			else this.show();
		}
		render() {
			return b$1`
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
    `;
		}
	};
	__decorate([n$1({
		type: Boolean,
		reflect: true
	})], MovDropdown.prototype, "open", void 0);
	__decorate([n$1({
		type: Boolean,
		reflect: true
	})], MovDropdown.prototype, "checkable", void 0);
	__decorate([n$1({ type: Number })], MovDropdown.prototype, "distance", void 0);
	__decorate([n$1({ type: Number })], MovDropdown.prototype, "skidding", void 0);
	__decorate([n$1({ type: String })], MovDropdown.prototype, "placement", void 0);
	MovDropdown = __decorate([t$1("mov-dropdown")], MovDropdown);
	var MovDropdownItem = class MovDropdownItem extends i$1 {
		constructor(..._args) {
			super(..._args);
			this.selected = false;
			this.checked = false;
			this.disabled = false;
			this.value = "";
			this.variant = "default";
			this.type = "normal";
		}
		static {
			this.styles = i$3`
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
  `;
		}
		handleSelect() {
			if (this.disabled) return;
			this.dispatchEvent(new CustomEvent("wa-select", {
				detail: { item: this },
				bubbles: true,
				composed: true
			}));
		}
		render() {
			return b$1`
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
    `;
		}
	};
	__decorate([n$1({
		type: Boolean,
		reflect: true
	})], MovDropdownItem.prototype, "selected", void 0);
	__decorate([n$1({
		type: Boolean,
		reflect: true
	})], MovDropdownItem.prototype, "checked", void 0);
	__decorate([n$1({
		type: Boolean,
		reflect: true
	})], MovDropdownItem.prototype, "disabled", void 0);
	__decorate([n$1({ type: String })], MovDropdownItem.prototype, "value", void 0);
	__decorate([n$1({
		type: String,
		reflect: true
	})], MovDropdownItem.prototype, "variant", void 0);
	__decorate([n$1({
		type: String,
		reflect: true
	})], MovDropdownItem.prototype, "type", void 0);
	MovDropdownItem = __decorate([t$1("mov-dropdown-item")], MovDropdownItem);
	var MovDivider = class MovDivider extends i$1 {
		constructor(..._args2) {
			super(..._args2);
			this.orientation = "horizontal";
		}
		static {
			this.styles = i$3`
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
  `;
		}
		render() {
			return b$1`<div
      class="divider"
      role="separator"
    ></div>`;
		}
	};
	__decorate([n$1({
		type: String,
		reflect: true
	})], MovDivider.prototype, "orientation", void 0);
	MovDivider = __decorate([t$1("mov-divider")], MovDivider);
	//#endregion
	//#region node_modules/@gerhobbelt/keyscss/keys.css?inline
	var keys_default = "/**\r\n * KEYS.css\r\n *\r\n * A simple stylesheet for rendering beautiful keyboard-style elements.\r\n *\r\n * Author:  Michael Hüneburg\r\n * Website: http://michaelhue.com/keyscss\r\n * License: MIT License (see LICENSE.txt)\r\n */\r\n\r\nkbd,\r\n.key {\r\n  display: inline;\r\n  display: inline-block;\r\n  white-space: nowrap;\r\n  min-width: 1em;\r\n  padding: .3em .4em .2em .3em;\r\n  font-style: normal;\r\n  font-family: \"Lucida Grande\", Lucida, Arial, sans-serif;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  border-radius: .3em;\r\n  border: none;\r\n  background-color: #505050;\r\n  background-color: gradient(linear, left top, left bottom, from(#3c3c3c), to(#505050));\r\n  color: #fafafa;\r\n  text-shadow: -1px -1px 0 #464646;\r\n  -webkit-box-shadow: inset 0 0 1px #969696, inset 0 -0.05em 0.4em #505050, 0 0.1em 0 #1e1e1e, 0 0.1em 0.1em rgba(0, 0, 0, 0.3);\r\n          box-shadow: inset 0 0 1px #969696, inset 0 -0.05em 0.4em #505050, 0 0.1em 0 #1e1e1e, 0 0.1em 0.1em rgba(0, 0, 0, 0.3);\r\n  font-size: .85em;\r\n  line-height: 1;\r\n  cursor: default;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n}\r\nkbd[title],\r\n.key[title] {\r\n  cursor: help;\r\n}\r\nkbd.dark,\r\n.dark-keys kbd,\r\n.key.dark,\r\n.dark-keys .key {\r\n  display: inline;\r\n  display: inline-block;\r\n  white-space: nowrap;\r\n  min-width: 1em;\r\n  padding: .3em .4em .2em .3em;\r\n  font-style: normal;\r\n  font-family: \"Lucida Grande\", Lucida, Arial, sans-serif;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  border-radius: .3em;\r\n  border: none;\r\n  background-color: #505050;\r\n  background-color: gradient(linear, left top, left bottom, from(#3c3c3c), to(#505050));\r\n  color: #fafafa;\r\n  text-shadow: -1px -1px 0 #464646;\r\n  -webkit-box-shadow: inset 0 0 1px #969696, inset 0 -0.05em 0.4em #505050, 0 0.1em 0 #1e1e1e, 0 0.1em 0.1em rgba(0, 0, 0, 0.3);\r\n          box-shadow: inset 0 0 1px #969696, inset 0 -0.05em 0.4em #505050, 0 0.1em 0 #1e1e1e, 0 0.1em 0.1em rgba(0, 0, 0, 0.3);\r\n}\r\nkbd.light,\r\n.light-keys kbd,\r\n.key.light,\r\n.light-keys .key {\r\n  display: inline;\r\n  display: inline-block;\r\n  white-space: nowrap;\r\n  min-width: 1em;\r\n  padding: .3em .4em .2em .3em;\r\n  font-style: normal;\r\n  font-family: \"Lucida Grande\", Lucida, Arial, sans-serif;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  border-radius: .3em;\r\n  border: none;\r\n  background-color: #fafafa;\r\n  background-color: gradient(linear, left top, left bottom, from(#d2d2d2), to(#ffffff));\r\n  color: #323232;\r\n  text-shadow: 0 0 2px #ffffff;\r\n  -webkit-box-shadow: inset 0 0 1px #ffffff, inset 0 0 0.4em #c8c8c8, 0 0.1em 0 #828282, 0 0.11em 0 rgba(0, 0, 0, 0.4), 0 0.1em 0.11em rgba(0, 0, 0, 0.9);\r\n          box-shadow: inset 0 0 1px #ffffff, inset 0 0 0.4em #c8c8c8, 0 0.1em 0 #828282, 0 0.11em 0 rgba(0, 0, 0, 0.4), 0 0.1em 0.11em rgba(0, 0, 0, 0.9);\r\n}\r\nkbd.so,\r\n.so-keys kbd,\r\n.key.so,\r\n.so-keys .key {\r\n  display: inline;\r\n  display: inline-block;\r\n  white-space: nowrap;\r\n  min-width: 1em;\r\n  padding: .3em .4em .2em .3em;\r\n  font-style: normal;\r\n  font-family: \"Lucida Grande\", Lucida, Arial, sans-serif;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  border-radius: .3em;\r\n  border: none;\r\n  margin: 0 .1em;\r\n  padding: .1em .6em;\r\n  font-family: Arial, \"Helvetica Neue\", Helvetica, sans-serif;\r\n  line-height: 1.4;\r\n  color: #242729;\r\n  text-shadow: 0 1px 0 #FFF;\r\n  background-color: #e1e3e5;\r\n  border: 1px solid #adb3b9;\r\n  border-radius: 0.27272727em;\r\n  -webkit-box-shadow: 0 1px 0 rgba(12, 13, 14, 0.2), 0 0 0 2px #FFF inset;\r\n          box-shadow: 0 1px 0 rgba(12, 13, 14, 0.2), 0 0 0 2px #FFF inset;\r\n}\r\nkbd.github,\r\n.github-keys kbd,\r\n.key.github,\r\n.github-keys .key {\r\n  display: inline;\r\n  display: inline-block;\r\n  white-space: nowrap;\r\n  min-width: 1em;\r\n  padding: .3em .4em .2em .3em;\r\n  font-style: normal;\r\n  font-family: \"Lucida Grande\", Lucida, Arial, sans-serif;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  border-radius: .3em;\r\n  border: none;\r\n  padding: 0.27272727em 0.45454545em;\r\n  font-size: 68.75%;\r\n  line-height: 0.90909091;\r\n  color: #444d56;\r\n  vertical-align: middle;\r\n  background-color: #fafbfc;\r\n  border: solid 1px #c6cbd1;\r\n  border-bottom-color: #959da5;\r\n  border-radius: 0.27272727em;\r\n  -webkit-box-shadow: inset 0 -1px 0 #959da5;\r\n          box-shadow: inset 0 -1px 0 #959da5;\r\n  font-family: \"SFMono-Regular\", Consolas, \"Liberation Mono\", Menlo, Courier, monospace;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  text-shadow: none;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImtleXMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLHdEQUF3RDtFQUN4RCxtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2IsMEJBQTBCO0VBQzFCLHNGQUFzRjtFQUN0RixlQUFlO0VBQ2YsaUNBQWlDO0VBQ2pDLDhIQUFzSDtVQUF0SCxzSEFBc0g7RUFDdEgsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsMEJBQWtCO0tBQWxCLHVCQUFrQjtNQUFsQixzQkFBa0I7VUFBbEIsa0JBQWtCO0NBQ25CO0FBQ0Q7O0VBRUUsYUFBYTtDQUNkO0FBQ0Q7Ozs7RUFJRSxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQix3REFBd0Q7RUFDeEQsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLDBCQUEwQjtFQUMxQixzRkFBc0Y7RUFDdEYsZUFBZTtFQUNmLGlDQUFpQztFQUNqQyw4SEFBc0g7VUFBdEgsc0hBQXNIO0NBQ3ZIO0FBQ0Q7Ozs7RUFJRSxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQix3REFBd0Q7RUFDeEQsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLDBCQUEwQjtFQUMxQixzRkFBc0Y7RUFDdEYsZUFBZTtFQUNmLDZCQUE2QjtFQUM3Qix3SkFBZ0o7VUFBaEosZ0pBQWdKO0NBQ2pKO0FBQ0Q7Ozs7RUFJRSxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQix3REFBd0Q7RUFDeEQsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsNERBQTREO0VBQzVELGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsMEJBQTBCO0VBQzFCLDBCQUEwQjtFQUMxQiwwQkFBMEI7RUFDMUIsNEJBQTRCO0VBQzVCLHdFQUFnRTtVQUFoRSxnRUFBZ0U7Q0FDakU7QUFDRDs7OztFQUlFLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLHdEQUF3RDtFQUN4RCxtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2IsbUNBQW1DO0VBQ25DLGtCQUFrQjtFQUNsQix3QkFBd0I7RUFDeEIsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QiwwQkFBMEI7RUFDMUIsMEJBQTBCO0VBQzFCLDZCQUE2QjtFQUM3Qiw0QkFBNEI7RUFDNUIsMkNBQW1DO1VBQW5DLG1DQUFtQztFQUNuQyxzRkFBc0Y7RUFDdEYsK0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2QixrQkFBa0I7Q0FDbkIiLCJmaWxlIjoidG1wMi5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJrYmQsXG4ua2V5IHtcbiAgZGlzcGxheTogaW5saW5lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG1pbi13aWR0aDogMWVtO1xuICBwYWRkaW5nOiAuM2VtIC40ZW0gLjJlbSAuM2VtO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZmFtaWx5OiBcIkx1Y2lkYSBHcmFuZGVcIiwgTHVjaWRhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IC4zZW07XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUwNTA1MDtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGZyb20oIzNjM2MzYyksIHRvKCM1MDUwNTApKTtcbiAgY29sb3I6ICNmYWZhZmE7XG4gIHRleHQtc2hhZG93OiAtMXB4IC0xcHggMCAjNDY0NjQ2O1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMXB4ICM5Njk2OTYsIGluc2V0IDAgLTAuMDVlbSAwLjRlbSAjNTA1MDUwLCAwIDAuMWVtIDAgIzFlMWUxZSwgMCAwLjFlbSAwLjFlbSByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIGZvbnQtc2l6ZTogLjg1ZW07XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxua2JkW3RpdGxlXSxcbi5rZXlbdGl0bGVdIHtcbiAgY3Vyc29yOiBoZWxwO1xufVxua2JkLmRhcmssXG4uZGFyay1rZXlzIGtiZCxcbi5rZXkuZGFyayxcbi5kYXJrLWtleXMgLmtleSB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBtaW4td2lkdGg6IDFlbTtcbiAgcGFkZGluZzogLjNlbSAuNGVtIC4yZW0gLjNlbTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWZhbWlseTogXCJMdWNpZGEgR3JhbmRlXCIsIEx1Y2lkYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAuM2VtO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1MDUwNTA7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBmcm9tKCMzYzNjM2MpLCB0bygjNTA1MDUwKSk7XG4gIGNvbG9yOiAjZmFmYWZhO1xuICB0ZXh0LXNoYWRvdzogLTFweCAtMXB4IDAgIzQ2NDY0NjtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDFweCAjOTY5Njk2LCBpbnNldCAwIC0wLjA1ZW0gMC40ZW0gIzUwNTA1MCwgMCAwLjFlbSAwICMxZTFlMWUsIDAgMC4xZW0gMC4xZW0gcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxua2JkLmxpZ2h0LFxuLmxpZ2h0LWtleXMga2JkLFxuLmtleS5saWdodCxcbi5saWdodC1rZXlzIC5rZXkge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgbWluLXdpZHRoOiAxZW07XG4gIHBhZGRpbmc6IC4zZW0gLjRlbSAuMmVtIC4zZW07XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1mYW1pbHk6IFwiTHVjaWRhIEdyYW5kZVwiLCBMdWNpZGEsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogLjNlbTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgZnJvbSgjZDJkMmQyKSwgdG8oI2ZmZmZmZikpO1xuICBjb2xvcjogIzMyMzIzMjtcbiAgdGV4dC1zaGFkb3c6IDAgMCAycHggI2ZmZmZmZjtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDFweCAjZmZmZmZmLCBpbnNldCAwIDAgMC40ZW0gI2M4YzhjOCwgMCAwLjFlbSAwICM4MjgyODIsIDAgMC4xMWVtIDAgcmdiYSgwLCAwLCAwLCAwLjQpLCAwIDAuMWVtIDAuMTFlbSByZ2JhKDAsIDAsIDAsIDAuOSk7XG59XG5rYmQuc28sXG4uc28ta2V5cyBrYmQsXG4ua2V5LnNvLFxuLnNvLWtleXMgLmtleSB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBtaW4td2lkdGg6IDFlbTtcbiAgcGFkZGluZzogLjNlbSAuNGVtIC4yZW0gLjNlbTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWZhbWlseTogXCJMdWNpZGEgR3JhbmRlXCIsIEx1Y2lkYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAuM2VtO1xuICBib3JkZXI6IG5vbmU7XG4gIG1hcmdpbjogMCAuMWVtO1xuICBwYWRkaW5nOiAuMWVtIC42ZW07XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gIGNvbG9yOiAjMjQyNzI5O1xuICB0ZXh0LXNoYWRvdzogMCAxcHggMCAjRkZGO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTFlM2U1O1xuICBib3JkZXI6IDFweCBzb2xpZCAjYWRiM2I5O1xuICBib3JkZXItcmFkaXVzOiAwLjI3MjcyNzI3ZW07XG4gIGJveC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgxMiwgMTMsIDE0LCAwLjIpLCAwIDAgMCAycHggI0ZGRiBpbnNldDtcbn1cbmtiZC5naXRodWIsXG4uZ2l0aHViLWtleXMga2JkLFxuLmtleS5naXRodWIsXG4uZ2l0aHViLWtleXMgLmtleSB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBtaW4td2lkdGg6IDFlbTtcbiAgcGFkZGluZzogLjNlbSAuNGVtIC4yZW0gLjNlbTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWZhbWlseTogXCJMdWNpZGEgR3JhbmRlXCIsIEx1Y2lkYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAuM2VtO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDAuMjcyNzI3MjdlbSAwLjQ1NDU0NTQ1ZW07XG4gIGZvbnQtc2l6ZTogNjguNzUlO1xuICBsaW5lLWhlaWdodDogMC45MDkwOTA5MTtcbiAgY29sb3I6ICM0NDRkNTY7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZiZmM7XG4gIGJvcmRlcjogc29saWQgMXB4ICNjNmNiZDE7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICM5NTlkYTU7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjcyNzI3MjdlbTtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAtMXB4IDAgIzk1OWRhNTtcbiAgZm9udC1mYW1pbHk6IFwiU0ZNb25vLVJlZ3VsYXJcIiwgQ29uc29sYXMsIFwiTGliZXJhdGlvbiBNb25vXCIsIE1lbmxvLCBDb3VyaWVyLCBtb25vc3BhY2U7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHRleHQtc2hhZG93OiBub25lO1xufVxuIl19 */";
	//#endregion
	//#region node_modules/@nanostores/lit/lib/StoreController.js
	var require_StoreController = /* @__PURE__ */ __commonJSMin(((exports) => {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.StoreController = void 0;
		/**
		* A `ReactiveController` that subscribes a `LitElement` to a `nanostores` atom and updates the host element when the atom changes.
		*
		* @example
		* ```ts
		* import { atom } from 'nanostores';
		* import { StoreController } from '@nanostores/lit';
		* import { LitElement, html } from 'lit';
		* import { customElement } from 'lit/decorators.js';
		*
		* const count = atom(0);
		*
		* @customElement('my-element')
		* class MyElement extends LitElement {
		* private controller = new StoreController(this, count);
		*  render() {
		*   const $count = this.controller.value;
		*   return html\`Count: \${$count}\`;
		*  }
		* }
		* ```
		*/
		var StoreController = class {
			constructor(host, atom) {
				this.host = host;
				this.atom = atom;
				host.addController(this);
			}
			hostConnected() {
				this.unsubscribe = this.atom.subscribe(() => {
					this.host.requestUpdate();
				});
			}
			hostDisconnected() {
				var _a;
				(_a = this.unsubscribe) === null || _a === void 0 || _a.call(this);
			}
			/**
			* The current value of the atom.
			* @readonly
			*/
			get value() {
				return this.atom.get();
			}
		};
		exports.StoreController = StoreController;
	}));
	//#endregion
	//#region node_modules/@nanostores/lit/lib/MultiStoreController.js
	var require_MultiStoreController = /* @__PURE__ */ __commonJSMin(((exports) => {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.MultiStoreController = void 0;
		/**
		* A `ReactiveController` that subscribes a `LitElement` to several `nanostores` atoms and updates the host element when any of the atoms changes.
		*
		* @example
		* ```ts
		* import { atom } from 'nanostores';
		* import { StoreController } from '@nanostores/lit';
		* import { LitElement, html } from 'lit';
		* import { customElement } from 'lit/decorators.js';
		*
		* const count1 = atom(0);
		* const count2 = atom(0);
		*
		* @customElement('my-element')
		* class MyElement extends LitElement {
		* private controller = new MultiStoreController(this, [count1, count2]);
		*  render() {
		*   const [$count1, $count2] = controller.values;
		*   return html\`Count 1: \${count1}\, Count 2: \${count2}\`;
		*  }
		* }
		* ```
		*/
		var MultiStoreController = class {
			constructor(host, atoms) {
				this.host = host;
				this.atoms = atoms;
				host.addController(this);
			}
			hostConnected() {
				this.unsubscribes = this.atoms.map((atom) => atom.subscribe(() => this.host.requestUpdate()));
			}
			hostDisconnected() {
				var _a;
				(_a = this.unsubscribes) === null || _a === void 0 || _a.forEach((unsubscribe) => unsubscribe());
			}
			/**
			* The current values of the atoms.
			* @readonly
			*/
			get values() {
				return this.atoms.map((atom) => atom.get());
			}
		};
		exports.MultiStoreController = MultiStoreController;
	}));
	//#endregion
	//#region node_modules/@nanostores/lit/lib/useStores.js
	var require_useStores = /* @__PURE__ */ __commonJSMin(((exports) => {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.useStores = void 0;
		var MultiStoreController_1 = require_MultiStoreController();
		/**
		* A TypeScript decorator that creates a new `MultiStoreController` for the atoms
		* @decorator `withStores(atoms)`
		* @param atoms The atoms to subscribe to.
		*
		* @example
		* ```ts
		* import { LitElement, html } from 'lit';
		* import { customElement } from 'lit/decorators.js';
		* import { atom } from 'nanostores';
		* import { useStores } from '@nanostores/lit';
		*
		* const count = atom(0);
		*
		* @customElement('my-element')
		* @useStores(count)
		* class MyElement extends LitElement {
		*  render() {
		*   return html\`Count: \${count.get()}\`;
		*   }
		* }
		* ```
		*/
		function useStores(...atoms) {
			return (constructor) => {
				return class extends constructor {
					constructor(...args) {
						super(...args);
						new MultiStoreController_1.MultiStoreController(this, atoms);
					}
				};
			};
		}
		exports.useStores = useStores;
	}));
	//#endregion
	//#region node_modules/@nanostores/lit/lib/withStores.js
	var require_withStores = /* @__PURE__ */ __commonJSMin(((exports) => {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.withStores = void 0;
		var MultiStoreController_1 = require_MultiStoreController();
		/**
		* A mixin that subscribes a LitElement to a list of atoms.
		* @mixin `withStores`
		* @param LitElementClass The LitElement class to extend.
		* @param atoms The atoms to subscribe to.
		*
		* @example
		* ```ts
		* import { LitElement, html } from 'lit';
		* import { customElement } from 'lit/decorators.js';
		* import { atom } from 'nanostores';
		* import { withStores } from '@nanostores/lit';
		*
		* const count = atom(0);
		*
		* @customElement('my-element')
		* class MyElement extends withStores(LitElement, [count]) {
		*  render() {
		*   return html\`Count: \${count.get()}\`;
		*  }
		* }
		* ```
		*/
		var withStores = (LitElementClass, atoms) => {
			return class LitElementWithStores extends LitElementClass {
				constructor(...args) {
					super(...args);
					new MultiStoreController_1.MultiStoreController(this, atoms);
				}
			};
		};
		exports.withStores = withStores;
	}));
	//#endregion
	//#region src/ui/components/ButtonGroup.ts
	var import_lib = (/* @__PURE__ */ __commonJSMin(((exports) => {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.withStores = exports.useStores = exports.MultiStoreController = exports.StoreController = void 0;
		var StoreController_1 = require_StoreController();
		Object.defineProperty(exports, "StoreController", {
			enumerable: true,
			get: function() {
				return StoreController_1.StoreController;
			}
		});
		var MultiStoreController_1 = require_MultiStoreController();
		Object.defineProperty(exports, "MultiStoreController", {
			enumerable: true,
			get: function() {
				return MultiStoreController_1.MultiStoreController;
			}
		});
		var useStores_1 = require_useStores();
		Object.defineProperty(exports, "useStores", {
			enumerable: true,
			get: function() {
				return useStores_1.useStores;
			}
		});
		var withStores_1 = require_withStores();
		Object.defineProperty(exports, "withStores", {
			enumerable: true,
			get: function() {
				return withStores_1.withStores;
			}
		});
	})))();
	var MovButtonGroup = class MovButtonGroup extends i$1 {
		static {
			this.styles = i$3`
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
  `;
		}
		render() {
			return b$1`
      <div
        class="button-group"
        role="group"
      >
        <slot></slot>
      </div>
    `;
		}
	};
	MovButtonGroup = __decorate([t$1("mov-button-group")], MovButtonGroup);
	//#endregion
	//#region src/ui/controllers/headroom.ts
	var headerHeight = 49;
	var showEnd = 100;
	var HeadroomController = class HeadroomController {
		constructor(host) {
			this.prevOffset = 0;
			this.headroom = "top";
			this.headerVisible = true;
			this.handleScroll = _.throttle(() => {
				if (this.isAnyDropdownOpen()) {
					this.prevOffset = window.scrollY;
					return;
				}
				const header = getSettingsValue("header");
				const { scrollY } = window;
				let newHeadroom = "none";
				if (getSettingsValue("zoomMode") !== "height" && scrollY + window.innerHeight + showEnd > document.body.scrollHeight) newHeadroom = "end";
				else if (scrollY > this.prevOffset && scrollY > headerHeight) newHeadroom = "hide";
				else if (header === "scroll" && scrollY < this.prevOffset && scrollY > headerHeight) newHeadroom = "show";
				else if (header !== "click" && scrollY <= headerHeight) newHeadroom = "top";
				let needsUpdate = false;
				if (this.headroom !== newHeadroom) {
					this.headroom = newHeadroom;
					needsUpdate = true;
				}
				if (header === "scroll") {
					const newHeaderVisible = newHeadroom !== "hide";
					if (this.headerVisible !== newHeaderVisible) {
						this.headerVisible = newHeaderVisible;
						needsUpdate = true;
					}
				}
				if (needsUpdate) this.host.requestUpdate();
				this.prevOffset = scrollY;
			}, 300);
			this.handleMouseMove = _.throttle((event) => {
				if (this.isAnyDropdownOpen()) {
					if (!this.headerVisible) {
						this.headerVisible = true;
						this.host.requestUpdate();
					}
					return;
				}
				if (["hover", "scroll"].includes(getSettingsValue("header"))) {
					const newHeaderVisible = HeadroomController.isMouseInsideRegion(event, window.innerWidth, headerHeight * 1.5);
					if (this.headerVisible !== newHeaderVisible) {
						this.headerVisible = newHeaderVisible;
						this.host.requestUpdate();
					}
				}
			}, 300);
			this.toggleHeaderVisibility = () => {
				if (getSettingsValue("header") === "click") {
					this.headerVisible = !this.headerVisible;
					this.host.requestUpdate();
				}
			};
			this.host = host;
			host.addController(this);
			const header = getSettingsValue("header");
			if (getSettingsValue("zoomMode") === "height" && ["click", "hover"].includes(header)) this.headerVisible = false;
		}
		hostConnected() {
			window.addEventListener("scroll", this.handleScroll);
			window.addEventListener("mousemove", this.handleMouseMove);
		}
		hostDisconnected() {
			window.removeEventListener("scroll", this.handleScroll);
			window.removeEventListener("mousemove", this.handleMouseMove);
		}
		isAnyDropdownOpen() {
			if (!this.host.shadowRoot) return false;
			const allDropdowns = this.host.shadowRoot.querySelectorAll("mov-dropdown");
			for (const dropdown of allDropdowns) if (dropdown.open) return true;
			return false;
		}
		static isMouseInsideRegion(event, headerWidth, headerHeight) {
			return event.clientX >= 0 && event.clientX <= headerWidth && event.clientY >= 0 && event.clientY <= headerHeight;
		}
	};
	//#endregion
	//#region src/ui/controllers/title.ts
	var TitleController = class {
		constructor(host) {
			this.canvasContext = null;
			this.host = host;
			host.addController(this);
			this.canvasContext = document.createElement("canvas").getContext("2d");
			this.resizeObserver = new ResizeObserver(() => this.update());
		}
		hostConnected() {}
		hostDisconnected() {
			this.resizeObserver.disconnect();
		}
		observe(element, text) {
			if (!element || !text) return;
			this.element = element;
			this.text = text;
			this.resizeObserver.disconnect();
			this.resizeObserver.observe(this.element);
			this.update();
		}
		update() {
			if (!this.element || !this.text || !this.canvasContext) {
				this.value = this.text;
				this.host.requestUpdate();
				return;
			}
			const style = window.getComputedStyle(this.element);
			this.canvasContext.font = `${style.fontWeight} ${style.fontSize} ${style.fontFamily}`;
			const fullText = this.text;
			const containerWidth = this.element.clientWidth;
			if (this.canvasContext.measureText(fullText).width <= containerWidth) {
				this.value = fullText;
				this.host.requestUpdate();
				return;
			}
			const ellipsis = "...";
			const targetWidth = containerWidth - this.canvasContext.measureText(ellipsis).width;
			let start = "";
			let end = "";
			for (let i = 1; i < fullText.length; i++) {
				const startCandidate = fullText.substring(0, i);
				const endCandidate = fullText.substring(fullText.length - i);
				if (this.canvasContext.measureText(startCandidate).width + this.canvasContext.measureText(endCandidate).width > targetWidth) break;
				start = startCandidate;
				end = endCandidate;
			}
			this.value = `${start}${ellipsis}${end}`;
			this.host.requestUpdate();
		}
	};
	//#endregion
	//#region src/ui/events/bookmarks.ts
	/**
	* Removes a bookmark from the settings for a given URL.
	* @param {string} [url=window.location.href] - The URL of the bookmark to remove.
	*/
	function removeURLBookmark(url = window.location.href) {
		if (!isNothing(isBookmarked(url))) {
			logScript(`Bookmark Removed ${url}`);
			changeSettingsValue("bookmarks", (b) => [...b.filter((el) => el.url !== url)]);
		}
	}
	/**
	* Event handler for the button to erase a specific bookmark from the bookmarks panel.
	* @param {Event} event - The click event from the erase button.
	*/
	function buttonEraseBookmarks(event) {
		const target = event.currentTarget.value;
		logScript(`Bookmark Removed ${target}`);
		toast.error({
			title: getLocaleString("BOOKMARK_REMOVED"),
			duration: 1e4
		});
		removeURLBookmark(target);
	}
	/**
	* Event handler to open the bookmarks panel.
	*/
	function buttonBookmarksOpen() {
		setAppStateValue("panel", "bookmarks");
	}
	/**
	* Event handler to toggle a bookmark for the current page.
	* If a bookmark exists, it is removed. If not, a new one is created.
	* A confirmation dialog is shown to the user in either case.
	*/
	function buttonBookmark() {
		const num = getAppStateValue("currentPage");
		const mark = {
			name: getAppStateValue("manga")?.title ?? document.documentElement.title ?? window.location.hostname,
			url: window.location.href,
			page: num,
			date: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10)
		};
		if (isBookmarked(mark.url)) {
			changeSettingsValue("bookmarks", (b) => [...b.filter((el) => el.url !== mark.url)]);
			toast.error({
				title: getLocaleString("BOOKMARK_REMOVED"),
				duration: 1e4
			});
		} else {
			changeSettingsValue("bookmarks", (b) => [...b, mark]);
			toast.success({
				title: getLocaleString("BOOKMARK_SAVED"),
				description: getLocaleString("BOOKMARK_MESSAGE").replace("##num##", num.toString()),
				duration: 1e4
			});
		}
	}
	//#endregion
	//#region src/ui/events/panels.ts
	/**
	* Event handler to close any currently open panel by setting the application state.
	*/
	function buttonPanelsClose() {
		setAppStateValue("panel", "none");
	}
	/**
	* Event handler to open the settings panel.
	*/
	function buttonSettingsOpen() {
		setAppStateValue("panel", "settings");
	}
	/**
	* Event handler to open the keybindings panel in its default view mode.
	*/
	function buttonKeybindingsOpen() {
		setAppStateValue("panel", "keybindings");
	}
	/**
	* Saves the keybindings from the editor form to the application settings.
	* After saving, it switches the panel back to the keybindings view mode and re-initializes the keybinding listeners.
	*/
	function saveKeybindings(keybindsRefs) {
		const newKeybinds = {};
		_.keys(keybindsRefs).forEach((id) => {
			const element = keybindsRefs[id].value;
			if (element) {
				const keys = element.value.split(",").map((value) => value.trim()).filter((key) => key !== "");
				newKeybinds[id] = keys.length > 0 ? keys : void 0;
			}
		});
		saveSettingsValue("keybinds", newKeybinds);
		setAppStateValue("panel", "keybindings");
		keybindings();
	}
	/**
	* Event handler to switch the keybindings panel to its editor mode.
	*/
	function editKeybindings() {
		setAppStateValue("panel", "keybindingsEditor");
	}
	//#endregion
	//#region src/ui/styles/header.css?inline
	var header_default = "#Header {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  flex-flow: row nowrap;\r\n  gap: 10px;\r\n  padding: 0 20px;\r\n  transition: transform 0.3s ease-in;\r\n  position: sticky;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  background-color: var(--theme-background-color);\r\n  box-shadow: 0 0 25px rgba(0, 0, 0, 0.5);\r\n  z-index: 900;\r\n}\r\n\r\n#Header.click {\r\n  padding-left: 60px;\r\n}\r\n\r\n@keyframes headroom {\r\n  from {\r\n    transform: translateY(-100%);\r\n  }\r\n  to {\r\n    transform: translateY(0%);\r\n  }\r\n}\r\n\r\n#Header:not(.visible, .headroom-top, .fixed, .simple) {\r\n  animation: headroom 0.3s ease-in reverse;\r\n  transform: translateY(-100%);\r\n  position: sticky;\r\n  top: 0;\r\n}\r\n\r\n#Header.scroll.headroom-hide:not(.visible) {\r\n  animation: none;\r\n  transform: translateY(-100%);\r\n  position: sticky;\r\n  top: 0;\r\n}\r\n\r\n#Header.scroll.headroom-show,\r\n#Header.headroom-end,\r\n#Header.visible {\r\n  animation: headroom 0.3s ease-in;\r\n  transform: translateY(0%);\r\n  position: sticky;\r\n  top: 0;\r\n}\r\n\r\n#Header.headroom-top {\r\n  animation: none;\r\n}\r\n\r\n#Header.fixed {\r\n  position: sticky;\r\n  animation: none;\r\n  top: 0;\r\n  transform: translateY(0%);\r\n}\r\n\r\n#Header.simple {\r\n  position: static;\r\n  animation: none;\r\n  top: 0;\r\n  transform: translateY(0%);\r\n}\r\n\r\n#menu {\r\n  position: fixed;\r\n  z-index: 1;\r\n  color: var(--theme-body-text-color);\r\n  height: 40px;\r\n  width: 40px;\r\n}\r\n\r\n#menu:not(.click),\r\n#menu.hide {\r\n  display: none;\r\n}\r\n\r\n#menu.click {\r\n  z-index: 901;\r\n  top: 0;\r\n  left: 0;\r\n}\r\n\r\n#Toolbar {\r\n  order: 1;\r\n}\r\n\r\n#GlobalFunctions {\r\n  order: 4;\r\n}\r\n\r\n#ViewerTitle {\r\n  order: 2;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n#ZoomControl {\r\n  order: 3;\r\n  display: flex;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  gap: 3px;\r\n  padding: 10px 5px;\r\n  min-width: 100px;\r\n}\r\n\r\n#MangaTitle {\r\n  padding: 2px;\r\n  margin: 0;\r\n  font-size: 19px;\r\n  font-weight: 400;\r\n  word-wrap: anywhere;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  min-width: 200px;\r\n  max-width: 40vw;\r\n}\r\n";
	//#endregion
	//#region src/ui/styles/media.css?inline
	var media_default = "#Header.mobile,\r\n#Header.tablet {\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: wrap;\r\n  gap: 0;\r\n  justify-content: center;\r\n}\r\n\r\n.mobile #ViewerTitle,\r\n.tablet #ViewerTitle {\r\n  order: 4;\r\n  min-height: auto;\r\n}\r\n\r\n.mobile #GlobalFunctions,\r\n.tablet #GlobalFunctions {\r\n  order: 2;\r\n}\r\n\r\n.mobile #Toolbar,\r\n.tablet #Toolbar {\r\n  order: 1;\r\n}\r\n\r\n#Header.mobile {\r\n  flex-direction: row;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n#Header.mobile.click + #Chapter:not(.webcomic, .vertical) {\r\n  position: sticky;\r\n}\r\n\r\n.tablet #MangaTitle,\r\n.mobile #MangaTitle {\r\n  max-width: 90vw;\r\n}\r\n\r\n.mobile #ViewerTitle {\r\n  order: 3;\r\n  margin-top: 0;\r\n  height: auto;\r\n  padding: 0;\r\n}\r\n\r\n.mobile #GlobalFunctions,\r\n.tablet #GlobalFunctions {\r\n  order: 2;\r\n}\r\n\r\n.mobile .PageFunctions {\r\n  padding: 0;\r\n}\r\n\r\n.mobile .PageFunctions .PageButton.Bookmark {\r\n  opacity: 1;\r\n}\r\n\r\n.mobile #GlobalFunctions #ZoomSlider,\r\n.tablet #GlobalFunctions #ZoomSlider,\r\n.mobile .PageFunctions .PageButton:not(.Bookmark),\r\n.tablet #Counters,\r\n.mobile #ZoomControl,\r\n.mobile #ZoomDropdown,\r\n.mobile #ViewDropdown,\r\n.mobile #FileDropdown :where(:nth-child(3), :nth-child(4)),\r\n.mobile #BookMode,\r\n.mobile #MangaMode,\r\n.tablet #BookMode,\r\n.tablet #MangaMode {\r\n  display: none;\r\n}\r\n";
	//#endregion
	//#region src/ui/Header.ts
	var Header = class Header extends i$1 {
		static {
			this.styles = [
				r$4(header_default),
				r$4(media_default),
				r$4(keys_default),
				i$3``
			];
		}
		constructor() {
			super();
			this.headroomController = new HeadroomController(this);
			this.titleController = new TitleController(this);
		}
		updated(changedProperties) {
			super.updated(changedProperties);
			if (changedProperties.has("manga") && this.manga) requestAnimationFrame(() => {
				if (this.manga) this.titleController.observe(this.mangaTitleElement, this.manga?.title ?? "Manga Online Viewer");
			});
		}
		render() {
			if (!this.manga) return b$1``;
			const { headroom, headerVisible } = this.headroomController;
			const keybinds = getSettingsValue("keybinds");
			const renderKeybind = (action) => {
				if (getAppStateValue("device") !== "desktop") return A;
				const keys = keybinds[action];
				if (!keys || keys.length === 0) return A;
				return keys.map((key) => b$1`<kbd slot="details">${key}</kbd>`);
			};
			return b$1`
      <toggle-button
        id="menu"
        mode="burger"
        class="${e$1({
				[getSettingsValue("header")]: true,
				hide: ["top", "end"].includes(headroom)
			})}"
        ?active=${headerVisible}
        @toggle=${this.headroomController.toggleHeaderVisibility}
      >
      </toggle-button>
      <header
        id="Header"
        class="${e$1({
				[getSettingsValue("header")]: true,
				[`headroom-${headroom}`]: true,
				visible: headerVisible && ["hide", "none"].includes(headroom),
				[getAppStateValue("device")]: true
			})}"
      >
        <mov-button-group
          id="Toolbar"
          class="${e$1({ "button-group-merged-end": ["mobile", "tablet"].includes(getAppStateValue("device")) })}"
        >
          <mov-dropdown id="FileDropdown">
            <mov-button
              slot="trigger"
              title="${getLocaleString("FILE_MENU")}"
            >
              <mov-icon
                label="File"
                name="IconDotsVertical"
              ></mov-icon>
            </mov-button>
            <mov-dropdown-item
              id="settings"
              @click=${buttonSettingsOpen}
            >
              <mov-icon
                slot="icon"
                name="IconSettings"
              ></mov-icon>
              ${getLocaleString("SETTINGS")} ${renderKeybind("SETTINGS")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="keybindings"
              @click=${buttonKeybindingsOpen}
            >
              <mov-icon
                slot="icon"
                name="IconKeyboard"
              ></mov-icon>
              ${getLocaleString("KEYBINDINGS")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="bookmarks"
              class="tablets"
              @click=${buttonBookmarksOpen}
            >
              <mov-icon
                slot="icon"
                name="IconBookmarks"
              ></mov-icon>
              ${getLocaleString("BOOKMARKS")}
            </mov-dropdown-item>
            <mov-divider></mov-divider>
            <mov-dropdown-item
              id="AutoScroll"
              class="${e$1({ running: getAppStateValue("autoScroll") })}"
              @click=${toggleAutoScroll}
            >
              <mov-icon
                slot="icon"
                name="${getAppStateValue("autoScroll") ? "IconPlayerPause" : "IconPlayerPlay"}"
              ></mov-icon>
              ${getLocaleString("SCROLL_START")} ${renderKeybind("SCROLL_START")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="pageControls"
              class="tablets phones"
              @click="${buttonGlobalHideImageControls}"
              ?selected=${getSettingsValue("hidePageControls")}
            >
              <mov-icon
                slot="icon"
                name="IconListNumbers"
              ></mov-icon>
              ${getLocaleString("TOGGLE_CONTROLS")}
            </mov-dropdown-item>
          </mov-dropdown>

          <mov-dropdown
            id="ViewDropdown"
            checkable
          >
            <mov-button
              slot="trigger"
              title="${getLocaleString("VIEW_MENU")}"
            >
              <mov-icon
                label="View"
                name="IconApiBook"
              ></mov-icon>
            </mov-button>
            <mov-dropdown-item
              id="webComic"
              class="tablets"
              @click="${updateViewMode("WebComic")}"
              ?selected=${getSettingsValue("viewMode") === "WebComic"}
            >
              <mov-icon
                slot="icon"
                name="IconSpacingVertical"
              ></mov-icon>
              ${getLocaleString("VIEW_MODE_WEBCOMIC")} ${renderKeybind("VIEW_MODE_WEBCOMIC")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="verticalMode"
              class="tablets"
              @click="${updateViewMode("Vertical")}"
              ?selected=${getSettingsValue("viewMode") === "Vertical"}
            >
              <mov-icon
                slot="icon"
                name="IconArrowAutofitDown"
              ></mov-icon>
              ${getLocaleString("VIEW_MODE_VERTICAL")} ${renderKeybind("VIEW_MODE_VERTICAL")}
            </mov-dropdown-item>
            <mov-divider></mov-divider>
            <mov-dropdown-item
              id="ltrMode"
              @click="${updateViewMode("FluidLTR")}"
              ?selected=${getSettingsValue("viewMode") === "FluidLTR"}
            >
              <mov-icon
                slot="icon"
                name="IconArrowAutofitRight"
              ></mov-icon>
              ${getLocaleString("VIEW_MODE_LEFT")} ${renderKeybind("VIEW_MODE_LEFT")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="rtlMode"
              @click="${updateViewMode("FluidRTL")}"
              ?selected=${getSettingsValue("viewMode") === "FluidRTL"}
            >
              <mov-icon
                slot="icon"
                name="IconArrowAutofitLeft"
              ></mov-icon>
              ${getLocaleString("VIEW_MODE_RIGHT")} ${renderKeybind("VIEW_MODE_RIGHT")}
            </mov-dropdown-item>
            <mov-divider></mov-divider>
            <mov-dropdown-item
              id="BookMode"
              @click="${updateViewMode("Book")}"
              ?selected=${getSettingsValue("viewMode") === "Book"}
            >
              <mov-icon
                slot="icon"
                name="IconBookArrowRight"
              ></mov-icon>
              ${getLocaleString("VIEW_MODE_BOOK")} ${renderKeybind("VIEW_MODE_BOOK")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="MangaMode"
              @click="${updateViewMode("Manga")}"
              ?selected=${getSettingsValue("viewMode") === "Manga"}
            >
              <mov-icon
                slot="icon"
                name="IconBookArrowLeft"
              ></mov-icon>
              ${getLocaleString("VIEW_MODE_MANGA")} ${renderKeybind("VIEW_MODE_MANGA")}
            </mov-dropdown-item>
            <mov-divider></mov-divider>
            <mov-dropdown-item
              id="GalleryMode"
              @click="${updateViewMode("Gallery")}"
              ?selected=${getSettingsValue("viewMode") === "Gallery"}
            >
              <mov-icon
                slot="icon"
                name="IconLayoutDashboard"
              ></mov-icon>
              ${getLocaleString("VIEW_MODE_GALLERY")} ${renderKeybind("VIEW_MODE_GALLERY")}
            </mov-dropdown-item>
          </mov-dropdown>
          <mov-dropdown
            id="ZoomDropdown"
            checkable
          >
            <mov-button
              slot="trigger"
              title="${getLocaleString("ZOOM_MENU")}"
            >
              <mov-icon
                label="Zoom"
                name="IconZoom"
              ></mov-icon>
            </mov-button>
            <mov-dropdown-item
              id="enlarge"
              @click="${changeZoomByStep()}"
            >
              <mov-icon
                slot="icon"
                name="IconZoomInArea"
              ></mov-icon>
              ${getLocaleString("ENLARGE")} ${renderKeybind("ENLARGE")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="restore"
              @click="${changeGlobalZoom("percent", 100)}"
            >
              <mov-icon
                slot="icon"
                name="IconZoomPan"
              ></mov-icon>
              ${getLocaleString("RESTORE")} ${renderKeybind("RESTORE")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="reduce"
              @click="${changeZoomByStep(-1)}"
            >
              <mov-icon
                slot="icon"
                name="IconZoomOutArea"
              ></mov-icon>
              ${getLocaleString("REDUCE")} ${renderKeybind("REDUCE")}
            </mov-dropdown-item>
            <mov-divider></mov-divider>
            <mov-dropdown-item
              id="fitWidth"
              @click="${changeGlobalZoom("width")}"
              ?selected=${getSettingsValue("zoomMode") === "width"}
            >
              <mov-icon
                slot="icon"
                name="IconArrowAutofitWidth"
              ></mov-icon>
              ${getLocaleString("FIT_WIDTH")} ${renderKeybind("FIT_WIDTH")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="fitHeight"
              @click="${changeGlobalZoom("height")}"
              ?selected=${getSettingsValue("zoomMode") === "height"}
            >
              <mov-icon
                slot="icon"
                name="IconArrowAutofitHeight"
              ></mov-icon>
              ${getLocaleString("FIT_HEIGHT")} ${renderKeybind("FIT_HEIGHT")}
            </mov-dropdown-item>
          </mov-dropdown>
        </mov-button-group>
        <mov-button-group
          id="GlobalFunctions"
          class="${e$1({ "button-group-merged-start": ["mobile", "tablet"].includes(getAppStateValue("device")) })}"
        >
          <mov-button
            id="series"
            href="${this.manga.series ?? A}"
            @click=${buttonRedirectURL}
            title="${getLocaleString("RETURN_CHAPTER_LIST")}"
            ?disabled=${!this.manga.series}
          >
            <mov-icon name="IconBooksReturn"></mov-icon>
          </mov-button>
          <mov-button
            id="download"
            title="${getLocaleString("DOWNLOAD_ZIP")}"
            @click=${buttonStartDownload}
            ?disabled=${getAppStateValue("download") !== "available"}
            ?loading=${getAppStateValue("download") === "working"}
          >
            <mov-icon
              name="${getAppStateValue("download") === "working" ? "IconLoader2" : "IconFileDownload"}"
            ></mov-icon>
          </mov-button>
          <mov-button
            id="prev"
            href="${this.manga.prev ?? A}"
            title="${getLocaleString("PREVIOUS_CHAPTER")}"
            @click=${buttonRedirectURL}
            ?disabled=${!this.manga.prev}
          >
            <mov-icon name="IconArrowBigLeft"></mov-icon>
          </mov-button>
          <mov-button
            id="next"
            href="${this.manga.next ?? A}"
            title="${getLocaleString("NEXT_CHAPTER")}"
            @click=${buttonRedirectURL}
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
            ${this.titleController.value ?? this.manga.title}
          </h1>
        </div>
        <div id="ZoomControl">
          <output id="ZoomVal">
            Zoom:
            ${getSettingsValue("zoomMode") === "percent" ? `${getSettingsValue("zoomValue")}%` : getSettingsValue("zoomMode")}
          </output>
          <mov-slider
            id="Zoom"
            name="Zoom"
            .value="${getSettingsValue("zoomValue")}"
            min="${getSettingsValue("minZoom")}"
            max="200"
            show-tooltip
            @input=${changeZoom}
          ></mov-slider>
        </div>
      </header>
    `;
		}
	};
	__decorate([e$2("#MangaTitle")], Header.prototype, "mangaTitleElement", void 0);
	__decorate([n$1({ type: Object })], Header.prototype, "manga", void 0);
	Header = __decorate([t$1("reader-header"), (0, import_lib.useStores)(settings, locale, appState)], Header);
	//#endregion
	//#region src/ui/styles/bookmarks.css?inline
	var bookmarks_default = "#BookmarksPanel {\r\n  text-align: center;\r\n  --width: 100vw;\r\n}\r\n\r\n#BookmarksList {\r\n  padding: 0 5px;\r\n  overflow: auto;\r\n  max-height: 60vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 5px;\r\n}\r\n\r\n.bookmark-item {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 1rem;\r\n  padding: 0.75rem 1rem;\r\n  border-radius: 5px;\r\n  transition: background-color 150ms ease-in-out;\r\n  text-align: left;\r\n}\r\n\r\n.bookmark-item:hover {\r\n  background-color: var(--mov-color-fill-quiet, rgba(128, 128, 128, 0.1));\r\n}\r\n\r\n.bookmark-info {\r\n  flex-grow: 1;\r\n  min-width: 0;\r\n}\r\n\r\n.bookmark-name {\r\n  font-weight: 500;\r\n}\r\n\r\n.bookmark-url {\r\n  font-size: 14px;\r\n  text-decoration: none;\r\n  display: block;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  color: color-mix(in oklab, var(--theme-body-text-color), transparent 30%);\r\n}\r\n.bookmark-url:hover {\r\n  text-decoration: underline;\r\n}\r\n\r\n.bookmark-details {\r\n  flex-shrink: 0;\r\n  width: 90px;\r\n  font-size: 14px;\r\n  text-align: right;\r\n  color: color-mix(in oklab, var(--theme-body-text-color), transparent 30%);\r\n}\r\n.bookmark-details > div {\r\n  padding: 2px 0;\r\n}\r\n\r\n.bookmark-actions {\r\n  flex-shrink: 0;\r\n  display: flex;\r\n  gap: 0.5rem;\r\n}\r\n";
	//#endregion
	//#region src/ui/BookmarkPanel.ts
	var BookmarkPanel = class BookmarkPanel extends i$1 {
		static {
			this.styles = [r$4(bookmarks_default)];
		}
		/**
		* Renders the list of saved bookmarks.
		* If no bookmarks are present, it displays a "List Empty" message.
		* Otherwise, it maps over the bookmarks from settings and creates a display element for each.
		*
		* @returns {import('lit').TemplateResult[] | string[]} An array of Lit templates for each bookmark, or a message if the list is empty.
		*/
		listBookmarks() {
			if (isEmpty(getSettingsValue("bookmarks"))) return [getLocaleString("LIST_EMPTY")];
			return getSettingsValue("bookmarks").map((mark, index) => b$1`
        <div
          id="Bookmark${index + 1}"
          class="bookmark-item"
        >
          <div class="bookmark-info">
            <div class="bookmark-name">${mark.name}</div>
            <a
              class="bookmark-url"
              href="${mark.url}"
              target="_blank"
              >${mark.url}</a
            >
          </div>
          <div class="bookmark-details">
            <div class="bookmark-date">${new Date(mark.date).toISOString().slice(0, 10)}</div>
            <div class="bookmark-page">Page: ${mark.page}</div>
          </div>
          <div class="bookmark-actions">
            <a
              href="${mark.url}"
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
              value="${mark.url}"
              @click=${buttonEraseBookmarks}
            >
              <mov-icon
                name="IconTrash"
                size="16px"
              ></mov-icon>
            </mov-button>
          </div>
        </div>
      `);
		}
		render() {
			return b$1`
      <mov-dialog
        id="BookmarksPanel"
        ?open=${getAppStateValue("panel") === "bookmarks"}
        light-dismiss
        @close=${buttonPanelsClose}
      >
        <mov-button
          class="Bookmark"
          title="${getLocaleString("BOOKMARK")}"
          @click=${buttonBookmark}
          slot="header-actions"
        >
          <mov-icon
            name="${isBookmarked() === void 0 ? "IconBookmark" : "IconBookmarkOff"}"
            size="24px"
          ></mov-icon>
        </mov-button>
        <h2 slot="header">${getLocaleString("BOOKMARKS")}</h2>
        <h2 slot="label">${getLocaleString("BOOKMARKS")}</h2>
        <div id="BookmarksList">${this.listBookmarks()}</div>
      </mov-dialog>
    `;
		}
	};
	BookmarkPanel = __decorate([t$1("bookmark-panel"), (0, import_lib.useStores)(settings, locale, appState)], BookmarkPanel);
	//#endregion
	//#region node_modules/lit-html/directives/join.js
	/**
	* @license
	* Copyright 2021 Google LLC
	* SPDX-License-Identifier: BSD-3-Clause
	*/
	function* o$1(o, t) {
		const f = "function" == typeof t;
		if (void 0 !== o) {
			let i = -1;
			for (const n of o) i > -1 && (yield f ? t(i) : t), i++, yield n;
		}
	}
	//#endregion
	//#region src/ui/styles/keybindings.css?inline
	var keybindings_default = "#KeybindingsPanel div {\r\n  line-height: 1.5em;\r\n}\r\n\r\n#KeybindingsPanel #KeybindingsList {\r\n  display: grid;\r\n  grid-template-columns: 1fr 2fr;\r\n  gap: 5px;\r\n}\r\n\r\n#KeybindingsPanel .ControlButton {\r\n  margin-left: 3px;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding: 5px 10px;\r\n  gap: 0.5em;\r\n}\r\n\r\n#KeybindingsPanel label {\r\n  display: ruby;\r\n}\r\n\r\n#KeybindingsPanel input {\r\n  display: inline-block;\r\n  width: 100%;\r\n}\r\n\r\n#KeybindingsPanel #HotKeysRules {\r\n  grid-column: span 2;\r\n}\r\n";
	//#endregion
	//#region src/ui/KeybindingsPanel.ts
	var KeybindingsPanel = class KeybindingsPanel extends i$1 {
		constructor(..._args) {
			super(..._args);
			this.keybindsRefs = _.keys(getSettingsValue("keybinds")).reduce((acc, key) => {
				acc[key] = e$6();
				return acc;
			}, {});
		}
		static {
			this.styles = [r$4(keybindings_default), r$4(keys_default)];
		}
		/**
		* Renders a read-only list of the current keybindings.
		* Each keybinding is displayed with its description and the assigned keys.
		*
		* @returns An array of Lit templates, each representing a keybinding entry.
		*/
		keybindList() {
			const keybinds = getSettingsValue("keybinds");
			return _.keys(keybinds).map((kb) => {
				const keys = keybinds[kb]?.length ? o$1(keybinds[kb]?.map((key) => b$1`<kbd class="dark">${key}</kbd>`), " / ") : "";
				return b$1`<span>${getLocaleString(kb)}:</span> <span>${keys}</span>`;
			});
		}
		/**
		* Renders an editable form for modifying keybindings.
		* It creates a text input for each keybinding action and displays the current assignments.
		* Also includes a section with rules for defining keybindings.
		*
		* @returns An array of Lit templates for the keybinding editor form.
		*/
		keybindEditor() {
			const keybinds = getSettingsValue("keybinds");
			return _.keys(keybinds).map((kb) => b$1`<label for="${kb}">${getLocaleString(kb)}:</label>
          <input
            type="text"
            class="KeybindInput"
            id="${kb}"
            name="${kb}"
            value="${keybinds[kb]?.join(" , ") ?? A}"
            ${n$4(this.keybindsRefs[kb])}
          />`);
		}
		render() {
			return b$1`
      <mov-drawer
        id="KeybindingsPanel"
        ?open=${getAppStateValue("panel").startsWith("keybindings")}
        placement="end"
        @close=${buttonPanelsClose}
      >
        <h2 slot="label">${getLocaleString("KEYBINDINGS")}</h2>
        <div
          class="controls"
          slot="header-actions"
        >
          ${getAppStateValue("panel") === "keybindingsEditor" ? b$1` <mov-button
                id="SaveKeybindings"
                type="button"
                title="${getLocaleString("SAVE_KEYBINDS")}"
                @click=${() => saveKeybindings(this.keybindsRefs)}
              >
                <mov-icon
                  name="IconDeviceFloppy"
                  size="16px"
                  slot="start"
                ></mov-icon>
                ${getLocaleString("BUTTON_SAVE")}
              </mov-button>` : b$1` <mov-button
                id="EditKeybindings"
                type="button"
                title="${getLocaleString("EDIT_KEYBINDS")}"
                @click=${editKeybindings}
              >
                <mov-icon
                  name="IconPencil"
                  size="16px"
                  slot="start"
                ></mov-icon>
                ${getLocaleString("BUTTON_EDIT")}
              </mov-button>`}
        </div>
        <div id="KeybindingsList">
          ${getAppStateValue("panel") === "keybindingsEditor" ? this.keybindEditor() : this.keybindList()}
        </div>
        <div id="HotKeysRules">${o$5(getLocaleString("KEYBIND_RULES"))}</div>
      </mov-drawer>
    `;
		}
	};
	KeybindingsPanel = __decorate([t$1("keybindings-panel"), (0, import_lib.useStores)(settings, locale, appState)], KeybindingsPanel);
	//#endregion
	//#region node_modules/lit-html/directives/map.js
	/**
	* @license
	* Copyright 2021 Google LLC
	* SPDX-License-Identifier: BSD-3-Clause
	*/
	function* o(o, f) {
		if (void 0 !== o) {
			let i = 0;
			for (const t of o) yield f(t, i++);
		}
	}
	//#endregion
	//#region src/utils/sequence.ts
	/**
	* Generates a sequence of numbers as an array.
	* @param {number} repeat - The end number of the sequence (inclusive).
	* @param {number} [begin=1] - The starting number of the sequence (inclusive).
	* @returns {number[]} An array of numbers representing the sequence.
	* @example
	* sequence(5, 1) // returns [1, 2, 3, 4, 5]
	* sequence(5, 3) // returns [3, 4, 5]
	* sequence(3)    // returns [1, 2, 3]
	*/
	function sequence(repeat, begin = 1) {
		return Array(repeat).fill(0).map((_, i) => i + 1).filter((i) => i >= begin);
	}
	//#endregion
	//#region src/utils/svgs.ts
	/**
	* Converts a raw SVG string into a data URL that can be used in CSS or as an image source.
	* @param {string} str - The raw SVG string to convert.
	* @returns {string} A data URL representation of the SVG.
	*/
	function svgToUrl(str) {
		const cleaned = str.replace(/[\t\n\r]/gim, "").replace(/\s\s+/g, " ");
		return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(cleaned).replace(/\(/g, "%28").replace(/\)/g, "%29")}`;
	}
	_.values(colors).map((i) => i["900"]);
	//#endregion
	//#region src/ui/events/common.ts
	/**
	* An event handler that transforms vertical mouse wheel scrolling into horizontal scrolling.
	* This is used for Left-to-Right (LTR) fluid reading modes.
	* @param {WheelEvent} event - The wheel event.
	*/
	function transformScrollToHorizontal(event) {
		if (!event.deltaY) return;
		event.currentTarget.scrollLeft += event.deltaY + event.deltaX;
		event.preventDefault();
	}
	/**
	* An event handler that transforms vertical mouse wheel scrolling into horizontal scrolling in the reverse direction.
	* This is used for Right-to-Left (RTL) fluid reading modes.
	* @param {WheelEvent} event - The wheel event.
	*/
	function transformScrollToHorizontalReverse(event) {
		if (!event.deltaY) return;
		event.currentTarget.scrollLeft -= event.deltaY - event.deltaX;
		event.preventDefault();
	}
	//#endregion
	//#region src/ui/styles/navbar.css?inline
	var navbar_default = ":host {\r\n  --nav-collapsed-size: 34px;\r\n  --nav-expanded-size: 200px;\r\n  --header-height: 80px;\r\n}\r\n#Navigation {\r\n  color: var(--theme-text-color);\r\n  background-color: var(--theme-hightlight-color);\r\n  overflow: hidden;\r\n  display: flex;\r\n  box-sizing: border-box;\r\n  gap: 5px;\r\n  white-space: nowrap;\r\n  text-align: center;\r\n  line-height: 0;\r\n  transition: all 0.3s ease;\r\n  position: fixed;\r\n  z-index: 1000;\r\n}\r\n#Thumbnails {\r\n  flex-grow: 1;\r\n  display: flex;\r\n  gap: 5px;\r\n  justify-content: flex-start;\r\n}\r\n#Navigation.horizontal #Thumbnails {\r\n  flex-direction: row;\r\n  overflow-x: auto;\r\n  overflow-y: hidden;\r\n}\r\n#Navigation.vertical #Thumbnails {\r\n  flex-direction: column;\r\n  overflow-y: auto;\r\n  overflow-x: hidden;\r\n  justify-content: flex-start;\r\n}\r\n#Navigation.left #Thumbnails {\r\n  direction: rtl;\r\n}\r\n:host(:not([forceExpanded])) #Navigation:not(:hover) #Thumbnails {\r\n  display: none;\r\n}\r\n#NavigationCounters {\r\n  flex-shrink: 0; /* Prevent this from shrinking */\r\n  padding: 5px;\r\n  line-height: 1rem;\r\n  text-align: center;\r\n  white-space: nowrap;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 0.5rem;\r\n}\r\n/* == Horizontal Orientation (for top/bottom position) == */\r\n#Navigation.horizontal {\r\n  flex-direction: column;\r\n  height: var(--nav-collapsed-size);\r\n  width: 100%;\r\n  left: 0;\r\n  right: 0;\r\n}\r\n:host([forceExpanded]) #Navigation.horizontal,\r\n#Navigation.horizontal:hover {\r\n  height: var(--nav-expanded-size);\r\n}\r\n#Navigation.bottom {\r\n  bottom: 0;\r\n}\r\n/* == Vertical Orientation (for left/right position) == */\r\n#Navigation.vertical {\r\n  flex-direction: row;\r\n  width: var(--nav-collapsed-size);\r\n  height: 100%;\r\n  bottom: 0;\r\n  transition:\r\n    top 0.3s ease,\r\n    height 0.3s ease,\r\n    width 0.3s ease;\r\n}\r\n:host([forceExpanded]) #Navigation.vertical,\r\n#Navigation.vertical:hover {\r\n  width: var(--nav-expanded-size);\r\n}\r\n#Navigation.left {\r\n  left: 0;\r\n  flex-direction: row-reverse;\r\n}\r\n#Navigation.right {\r\n  right: 0;\r\n}\r\n#Navigation.vertical #NavigationCounters {\r\n  writing-mode: vertical-rl;\r\n  transform: rotate(180deg);\r\n}\r\n#Navigation.right #NavigationCounters {\r\n  transform: rotate(0deg);\r\n}\r\n/* Adjust for header visibility */\r\n#Navigation.vertical.header {\r\n  top: var(--header-height);\r\n  height: calc(100% - var(--header-height));\r\n}\r\n\r\n#Navigation .Thumbnail {\r\n  display: inline-flex;\r\n  height: 150px;\r\n  width: 150px;\r\n  margin: 0 5px;\r\n  position: relative;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.ThumbnailIndex {\r\n  color: var(--mov-color-on-loud);\r\n  background-color: var(--mov-color-fill-loud);\r\n  display: block;\r\n  opacity: 0.9;\r\n  position: absolute;\r\n  left: 0;\r\n  bottom: 30%;\r\n  width: 100%;\r\n  line-height: 1.2rem;\r\n  text-align: center;\r\n  font-weight: 600;\r\n  z-index: 1;\r\n}\r\n.ThumbnailImg {\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  max-height: 150px;\r\n  min-height: 150px;\r\n  min-width: 80px;\r\n  max-width: 150px;\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  background-size: 48px 48px;\r\n}\r\n";
	//#endregion
	//#region src/ui/Navbar.ts
	var Navbar = class Navbar extends i$1 {
		constructor(..._args) {
			super(..._args);
			this.mode = "bottom";
			this.forceExpanded = false;
			this.isHiding = false;
		}
		static {
			this.styles = [r$4(navbar_default), i$3`
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
        background-image: url('${r$4(svgToUrl(IconPhoto$1))}');
      }

      .Thumbnail .ThumbnailImg.imgBroken {
        background-image: url('${r$4(svgToUrl(IconPhotoOff$1))}');
      }
    `];
		}
		/**
		* Lit-element lifecycle method.
		* Hides the navbar just before its position is about to change.
		*/
		willUpdate(changedProperties) {
			if (changedProperties.has("mode")) this.isHiding = true;
		}
		/**
		* Lit-element lifecycle method.
		* Fades the navbar back in after it has been re-rendered in the new position.
		*/
		updated(changedProperties) {
			if (changedProperties.has("mode") && this.isHiding) setTimeout(() => {
				this.isHiding = false;
			}, 50);
		}
		/**
		* Renders the navigation bar, including page counters and thumbnails.
		* @returns The rendered template.
		*/
		render() {
			if (this.mode === "disabled") return A;
			const manga = getAppStateValue("manga");
			const navClasses = {
				horizontal: this.mode === "bottom",
				vertical: this.mode !== "bottom",
				left: this.mode === "left",
				right: this.mode === "right",
				bottom: this.mode === "bottom",
				hiding: this.isHiding
			};
			const images = getAppStateValue("images") || {};
			const loaded = _.keys(images).filter((key) => {
				const idx = parseInt(key, 10);
				return idx >= (manga?.begin ?? 1) && idx <= (manga?.pages ?? 1) && images[idx]?.status === "loaded";
			}).length;
			return b$1`
      <nav
        id="Navigation"
        class="${e$1(navClasses)}"
      >
        <div
          id="NavigationCounters"
          class="ControlLabel"
        >
          ${IconCategory}
          <i>${loaded}</i> /
          <b> ${(manga?.pages ?? 1) - ((manga?.begin ?? 1) - 1)} </b>
          ${getLocaleString("PAGES_LOADED")}
          <span>: ${getAppStateValue("currentPage")}</span>
        </div>
        <div
          id="Thumbnails"
          @wheel=${this.mode === "bottom" ? transformScrollToHorizontal : null}
        >
          ${o(sequence(manga?.pages ?? 1, manga?.begin ?? 1), (index) => b$1` <figure
                id="Thumbnail${index}"
                class="Thumbnail"
                role="button"
                tabindex="0"
                title="Go to page ${index}"
                @click=${() => clickThumbnail(index)}
              >
                <img
                  id="ThumbnailImg${index}"
                  alt=""
                  class="ThumbnailImg"
                  src=${getAppStateValue("images")?.[index]?.src ?? A}
                />
                <figcaption class="ThumbnailIndex">${index}</figcaption>
              </figure>`)}
        </div>
      </nav>
    `;
		}
	};
	__decorate([n$1({ type: String })], Navbar.prototype, "mode", void 0);
	__decorate([n$1({ type: Boolean })], Navbar.prototype, "forceExpanded", void 0);
	__decorate([r$1()], Navbar.prototype, "isHiding", void 0);
	Navbar = __decorate([t$1("navbar-thumbnails"), (0, import_lib.useStores)(settings, locale, appState)], Navbar);
	//#endregion
	//#region src/ui/SettingsPanelGeneral.ts
	function settingsScope() {
		const value = isSettingsLocal() ? "true" : "false";
		return b$1` <div class="ControlLabel">
    ${getLocaleString("SCOPE")}
    <segmented-control
      .value=${value}
      @change=${changeSettingsScope}
    >
      <segmented-control-option
        value="false"
        label=${getLocaleString("GLOBAL")}
        icon="IconWorldCog"
      ></segmented-control-option>
      <segmented-control-option
        value="true"
        label=${window.location.hostname}
        icon="IconLocationCog"
      ></segmented-control-option>
    </segmented-control>
  </div>`;
	}
	function localeSelector() {
		return locales.map((locale) => b$1`
      <option
        value="${locale.ID}"
        ?selected=${getSettingsValue("locale") === locale.ID}
      >
        ${locale.NAME}
      </option>
    `);
	}
	function language() {
		return b$1` <div class="ControlLabel locale">
    ${getLocaleString("LANGUAGE")}
    <select
      id="locale"
      @change="${changeLocale}"
    >
      ${localeSelector()}
    </select>
  </div>`;
	}
	var SettingsPanelGeneral_default = () => b$1`${settingsScope()} ${language()}`;
	//#endregion
	//#region src/ui/SettingsPanelLoading.ts
	function loadMode() {
		return b$1`
    <div class="ControlLabel loadMode">
      ${getLocaleString("DEFAULT_LOAD_MODE")}
      <select
        id="loadMode"
        @change="${changeLoadMode}"
      >
        <option
          value="wait"
          ?selected=${getSettingsValue("loadMode") === "wait"}
        >
          ${getLocaleString("LOAD_MODE_NORMAL")}
        </option>
        <option
          value="always"
          ?selected=${getSettingsValue("loadMode") === "always"}
        >
          ${getLocaleString("LOAD_MODE_ALWAYS")}
        </option>
        <option
          value="never"
          ?selected=${getSettingsValue("loadMode") === "never"}
        >
          ${getLocaleString("LOAD_MODE_NEVER")}
        </option>
      </select>
    </div>
  `;
	}
	function loadSpeed() {
		return b$1`
    <div class="ControlLabel PagesPerSecond">
      ${getLocaleString("LOAD_SPEED")}
      <select
        id="PagesPerSecond"
        @change="${changeLoadSpeed}"
      >
        <option
          value="Safe"
          ?selected=${getSettingsValue("loadSpeed") === "Safe"}
        >
          ${getLocaleString("SLOWLY")} (Safe)
        </option>
        <option
          value="Standard"
          ?selected=${getSettingsValue("loadSpeed") === "Standard"}
        >
          ${getLocaleString("NORMAL")} (Standard)
        </option>
        <option
          value="Faster"
          ?selected=${getSettingsValue("loadSpeed") === "Faster"}
        >
          ${getLocaleString("FAST")} (Faster)
        </option>
        <option
          value="Extreme"
          ?selected=${getSettingsValue("loadSpeed") === "Extreme"}
        >
          ${getLocaleString("EXTREME")} (Extreme)
        </option>
        <option
          value="All"
          ?selected=${getSettingsValue("loadSpeed") === "All"}
        >
          ${getLocaleString("ALL_PAGES")} (All)
        </option>
      </select>
    </div>
  `;
	}
	var SettingsPanelLoading_default = () => b$1`${loadMode()} ${loadSpeed()}`;
	//#endregion
	//#region src/ui/SettingsPanelOthers.ts
	function checkboxOptions() {
		return b$1`
    <div class="ControlLabel fitIfOversize">
      ${getLocaleString("FIT_WIDTH_OVERSIZED")}
      <mov-switch
        name="fitIfOversize"
        ?checked=${getSettingsValue("fitWidthIfOversize")}
        @change=${checkFitWidthOversize}
      ></mov-switch>
    </div>
    <div class="ControlLabel downloadZip">
      ${getLocaleString("DOWNLOAD_IMAGES")}
      <mov-switch
        name="downloadZip"
        ?checked=${getSettingsValue("downloadZip")}
        @change=${checkAutoDownload}
      ></mov-switch>
    </div>
    <div class="ControlLabel hidePageControls">
      ${getLocaleString("HIDE_CONTROLS")}
      <mov-switch
        name="hidePageControls"
        ?checked=${getSettingsValue("hidePageControls")}
        @change=${checkHideImageControls}
      ></mov-switch>
    </div>
    <div class="ControlLabel lazyLoadImages">
      ${getLocaleString("LAZY_LOAD_IMAGES_ENABLE")}
      <mov-switch
        name="lazyLoadImages"
        ?checked=${getSettingsValue("lazyLoadImages")}
        @change=${checkLazyLoad}
      ></mov-switch>
    </div>
  `;
	}
	function lazyLoad() {
		return b$1`
    <div
      class="${e$1({
			ControlLabel: true,
			lazyStart: true,
			ControlLabelItem: true,
			show: getSettingsValue("lazyLoadImages")
		})}"
    >
      <span>
        ${getLocaleString("LAZY_LOAD_IMAGES")}
        <output
          id="lazyStartVal"
          class="RangeValue"
          for="lazyStart"
        >
          ${getSettingsValue("lazyStart")}
        </output>
      </span>
      <mov-slider
        name="lazyStart"
        id="lazyStart"
        .value="${getSettingsValue("lazyStart")}"
        min="5"
        max="100"
        step="5"
        show-tooltip
        show-ticks
        tick-count="3"
        @input="${changeLazyStart}"
      ></mov-slider>
    </div>
  `;
	}
	function headerType() {
		return b$1`
    <div class="ControlLabel headerType">
      ${getLocaleString("HEADER_TYPE")}
      <segmented-control
        .value=${getSettingsValue("header")}
        @change=${changeHeaderType}
        labelPosition="bottom"
      >
        <segmented-control-option
          value="hover"
          label=${getLocaleString("HEADER_HOVER")}
          icon="arrows-move"
        ></segmented-control-option>
        <segmented-control-option
          value="scroll"
          label=${getLocaleString("HEADER_SCROLL")}
          icon="arrows-vertical"
        ></segmented-control-option>
        <segmented-control-option
          value="click"
          label=${getLocaleString("HEADER_CLICK")}
          icon="hand-click"
        ></segmented-control-option>
        <segmented-control-option
          value="fixed"
          label=${getLocaleString("HEADER_FIXED")}
          icon="pin"
        ></segmented-control-option>
        <segmented-control-option
          value="simple"
          label=${getLocaleString("HEADER_SIMPLE")}
          icon="box-align-top"
        ></segmented-control-option>
      </segmented-control>
    </div>
  `;
	}
	function pagination() {
		return b$1`
    <div class="ControlLabel pagination">
      ${getLocaleString("PAGINATION_TYPE")}
      <segmented-control
        .value=${getSettingsValue("pagination")}
        @change=${changePagination}
        labelPosition="side"
      >
        <segmented-control-option
          value="disabled"
          label=${getLocaleString("PAGINATION_DISABLED")}
          icon="x"
        ></segmented-control-option>
        <segmented-control-option
          value="slider"
          label=${getLocaleString("PAGINATION_SLIDER")}
          icon="adjustments-horizontal"
        ></segmented-control-option>
        <segmented-control-option
          value="side-arrows"
          label=${getLocaleString("PAGINATION_ARROWS")}
          icon="arrows-left-right"
        ></segmented-control-option>
        <segmented-control-option
          value="both"
          label=${getLocaleString("PAGINATION_BOTH")}
          icon="arrows-horizontal"
        ></segmented-control-option>
      </segmented-control>
    </div>
  `;
	}
	function navbarType() {
		return b$1`
    <div class="ControlLabel navbarType">
      ${getLocaleString("NAVBAR_TYPE")}
      <segmented-control
        .value=${getSettingsValue("navbar")}
        @change=${changeNavbarType}
        labelPosition="tooltip"
      >
        <segmented-control-option
          value="bottom"
          label=${getLocaleString("NAVBAR_BOTTOM")}
          icon="layout-bottombar"
        ></segmented-control-option>
        <segmented-control-option
          value="left"
          label=${getLocaleString("NAVBAR_LEFT")}
          icon="layout-sidebar"
        ></segmented-control-option>
        <segmented-control-option
          value="right"
          label=${getLocaleString("NAVBAR_RIGHT")}
          icon="layout-sidebar-right"
        ></segmented-control-option>
        <segmented-control-option
          value="disabled"
          label=${getLocaleString("NAVBAR_DISABLED")}
          icon="x"
        ></segmented-control-option>
      </segmented-control>
    </div>
  `;
	}
	function autoScroll() {
		return b$1`
    <div class="ControlLabel autoScroll">
      <span>
        ${getLocaleString("AUTO_SCROLL_HEIGHT")}
        <output
          id="scrollHeightVal"
          class="RangeValue"
          for="scrollHeight"
        >
          ${getSettingsValue("scrollHeight")}px
        </output>
      </span>
      <mov-slider
        name="scrollHeight"
        id="scrollHeight"
        .value="${getSettingsValue("scrollHeight")}"
        min="1"
        max="${Math.ceil(window.innerHeight / 200) * 100}"
        step="1"
        show-tooltip
        show-ticks
        tick-count="5"
        @input="${changeScrollHeight}"
      ></mov-slider>
    </div>
  `;
	}
	var SettingsPanelOthers_default = () => b$1`${checkboxOptions()} ${pagination()} ${lazyLoad()} ${headerType()} ${navbarType()} ${autoScroll()}`;
	//#endregion
	//#region src/ui/events/theming.ts
	/**
	* Toggles the color scheme between 'dark' and 'light' and applies the corresponding class to the root element.
	*/
	function changeColorScheme() {
		const isDark = getSettingsValue("colorScheme") === "dark";
		saveSettingsValue("colorScheme", isDark ? "light" : "dark");
		document.documentElement.classList.remove(isDark ? "dark" : "light");
		document.documentElement.classList.add(getSettingsValue("colorScheme"));
	}
	/**
	* Event handler for changing the theme color via a text input or color picker.
	* @param {Event} event - The input or change event from a color input element.
	*/
	function changeTheme(event) {
		saveSettingsValue("theme", event instanceof CustomEvent ? event.detail.value : event.currentTarget.value);
	}
	//#endregion
	//#region src/ui/SettingsPanelTheme.ts
	function theme() {
		return b$1`
    <div class="ControlLabel ColorSchemeSelector">
      <label>${getLocaleString("COLOR_SCHEME")}</label>
      <toggle-button
        id="ColorScheme"
        mode="theme"
        @click=${changeColorScheme}
        ?active=${getSettingsValue("colorScheme") === "dark"}
      >
      </toggle-button>
    </div>
    <div class="ControlLabel ThemeSelector">
      <label>${getLocaleString("THEME_COLOR")}</label>
      <mov-color-picker
        id="ThemeHex"
        .value="${getSettingsValue("theme")}"
        title="${getSettingsValue("theme")}"
        @input=${changeTheme}
        .swatches=${_.values(sample)}
      ></mov-color-picker>
    </div>
    <color-palette
      .baseColor="${getSettingsValue("theme")}"
      mode="steps"
      .selected=${getSettingsValue("theme")}
      @change="${changeTheme}"
    ></color-palette>
    <span id="ColorRecommendations">
      ${_.values(sample).map((c) => b$1`<color-swatch
            .color="${c}"
            .selected=${getSettingsValue("theme")}
            @change=${changeTheme}
          ></color-swatch>`)}
    </span>
    <details class="ControlLabel">
      <summary>${getLocaleString("THEME_HUE")} & ${getLocaleString("THEME_SHADE")}</summary>
      <color-panel
        .selected=${getSettingsValue("theme")}
        @change=${changeTheme}
      ></color-panel>
    </details>
  `;
	}
	//#endregion
	//#region src/ui/SettingsPanelZoom.ts
	/**
	* Renders the control for setting the default zoom mode (Percent, Fit Width, Fit Height).
	* @returns The Lit template for the default zoom mode setting.
	*/
	function defaultZoomMode() {
		return b$1` <div class="ControlLabel DefaultZoomMode">
    ${getLocaleString("DEFAULT_ZOOM_MODE")}
    <segmented-control
      .value=${getSettingsValue("zoomMode")}
      @change=${changeDefaultZoomMode}
      labelPosition="tooltip"
    >
      <segmented-control-option
        value="percent"
        label=${getLocaleString("PERCENT")}
        icon="file-percent"
      ></segmented-control-option>
      <segmented-control-option
        value="width"
        label=${getLocaleString("FIT_WIDTH")}
        icon="arrow-autofit-width"
      ></segmented-control-option>
      <segmented-control-option
        value="height"
        label=${getLocaleString("FIT_HEIGHT")}
        icon="arrow-autofit-height"
      ></segmented-control-option>
    </segmented-control>
  </div>`;
	}
	/**
	* Renders the control for setting the default zoom value as a percentage.
	* This control is only visible when the zoom mode is set to 'percent'.
	* @returns The Lit template for the default zoom value setting.
	*/
	function zoomValue() {
		return b$1`
    <div
      class="${e$1({
			ControlLabel: true,
			zoomValue: true,
			ControlLabelItem: true,
			show: getSettingsValue("zoomMode") === "percent"
		})}"
    >
      <span>
        ${getLocaleString("DEFAULT_ZOOM")}
        <output
          id="zoomValueVal"
          class="RangeValue"
          for="zoomValue"
        >
          ${getSettingsValue("zoomValue")}%
        </output>
      </span>
      <mov-slider
        name="zoomValue"
        id="zoomValue"
        .value="${getSettingsValue("zoomValue")}"
        min="5"
        max="200"
        step="5"
        show-tooltip
        show-ticks
        tick-count="5"
        @input="${changeDefaultZoomValue}"
      ></mov-slider>
    </div>
  `;
	}
	/**
	* Renders the control for setting the minimum zoom level for images.
	* @returns The Lit template for the minimum zoom setting.
	*/
	function minZoom() {
		return b$1`
    <div class="ControlLabel minZoom">
      <span>
        ${getLocaleString("MINIMUM_ZOOM")}
        <output
          id="minZoomVal"
          class="RangeValue"
          for="minZoom"
        >
          ${getSettingsValue("minZoom")}%
        </output>
      </span>
      <mov-slider
        name="minZoom"
        id="minZoom"
        .value="${getSettingsValue("minZoom")}"
        min="25"
        max="100"
        step="5"
        show-tooltip
        show-ticks
        tick-count="4"
        @input="${changeMinZoom}"
      ></mov-slider>
    </div>
  `;
	}
	/**
	* Renders the control for setting the zoom step value, which determines the increment/decrement for zoom actions.
	* @returns The Lit template for the zoom step setting.
	*/
	function zoomStep() {
		return b$1`
    <div class="ControlLabel zoomStep">
      <span>
        ${getLocaleString("ZOOM_STEP")}
        <output
          id="zoomStepVal"
          class="RangeValue"
          for="zoomStep"
        >
          ${getSettingsValue("zoomStep")}%
        </output>
      </span>
      <mov-slider
        name="zoomStep"
        id="zoomStep"
        .value="${getSettingsValue("zoomStep")}"
        min="10"
        max="50"
        step="5"
        show-tooltip
        show-ticks
        tick-count="5"
        @input="${changeZoomStep}"
      ></mov-slider>
    </div>
  `;
	}
	/**
	* Renders the control for setting the default view mode (Vertical, WebComic, Fluid LTR, Fluid RTL).
	* @returns The Lit template for the default view mode setting.
	*/
	function viewMode() {
		return b$1`
    <div class="ControlLabel viewMode">
      ${getLocaleString("DEFAULT_VIEW_MODE")}
      <segmented-control
        .value=${getSettingsValue("viewMode")}
        @change=${changeDefaultViewMode}
        labelPosition="tooltip"
      >
        <segmented-control-option
          value="Vertical"
          label=${getLocaleString("VIEW_MODE_VERTICAL")}
          icon="arrow-autofit-down"
        ></segmented-control-option>
        <segmented-control-option
          value="WebComic"
          label=${getLocaleString("VIEW_MODE_WEBCOMIC")}
          icon="spacing-vertical"
        ></segmented-control-option>
        <segmented-control-option
          value="FluidLTR"
          label=${getLocaleString("VIEW_MODE_LEFT")}
          icon="arrow-autofit-right"
        ></segmented-control-option>
        <segmented-control-option
          value="FluidRTL"
          label=${getLocaleString("VIEW_MODE_RIGHT")}
          icon="arrow-autofit-left"
        ></segmented-control-option>
        <segmented-control-option
            value="Book"
            label=${getLocaleString("VIEW_MODE_BOOK")}
            icon="IconBookArrowRight"
        ></segmented-control-option>
        <segmented-control-option
            value="Manga"
            label=${getLocaleString("VIEW_MODE_MANGA")}
            icon="IconBookArrowLeft"
        ></segmented-control-option>
        <segmented-control-option
            value="Gallery"
            label=${getLocaleString("VIEW_MODE_GALLERY")}
            icon="IconLayoutDashboard"
        ></segmented-control-option>
      </segmented-control>
    </div>
  `;
	}
	/**
	* Renders the zoom and view settings panel by combining all the individual setting controls.
	* @returns The Lit template for the entire zoom settings panel.
	*/
	var SettingsPanelZoom_default = () => b$1`${defaultZoomMode()} ${zoomValue()} ${minZoom()} ${zoomStep()} ${viewMode()}`;
	//#endregion
	//#region src/ui/styles/settings.css?inline
	var settings_default = "#SettingsPanel {\r\n  color: var(--theme-text-color);\r\n}\r\n\r\n#SettingsPanel fieldset {\r\n  border: 1px solid var(--theme-body-text-color);\r\n  padding: 3px;\r\n  border-radius: 10px;\r\n}\r\n\r\n#SettingsPanel .ControlLabel {\r\n  display: flex;\r\n  flex-flow: row wrap;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 2px;\r\n}\r\n\r\n#SettingsPanel .ControlLabelItem {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\n#SettingsPanel .ControlLabelItem:not(.show) {\r\n  display: none;\r\n}\r\n\r\n#SettingsPanel input[type=\"range\"] {\r\n  width: 100%;\r\n}\r\n\r\n#SettingsPanel .RangeValue {\r\n  display: inline-block;\r\n  color: var(--mov-color-on-loud);\r\n  line-height: 20px;\r\n  text-align: center;\r\n  border-radius: 3px;\r\n  background: var(--mov-color-fill-loud);\r\n  padding: 2px 5px;\r\n  margin-left: 8px;\r\n}\r\n\r\n#SettingsPanel datalist {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  width: 100%;\r\n}\r\n\r\n#SettingsPanel datalist option {\r\n  padding: 0;\r\n  writing-mode: vertical-lr;\r\n}\r\n\r\n#ThemeSelector {\r\n  width: 110px;\r\n}\r\n\r\n#ColorRecommendations {\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: wrap;\r\n  gap: 2px;\r\n}\r\n#Chapter:not(.Vertical) ~ #SettingsPanel .verticalSeparator {\r\n  display: none;\r\n}\r\n\r\n#ColorScheme {\r\n  padding: 5px;\r\n  min-height: 28px;\r\n  min-width: 28px;\r\n}\r\n\r\n#ResetSettings,\r\n#ResetSettings::part(base) {\r\n  width: 100%;\r\n}\r\n";
	//#endregion
	//#region src/ui/SettingsPanel.ts
	var SettingsPanel = class SettingsPanel extends i$1 {
		static {
			this.styles = [i$3`
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
    `, r$4(settings_default)];
		}
		render() {
			return b$1`
      <mov-drawer
        id="SettingsPanel"
        ?open=${getAppStateValue("panel") === "settings"}
        @close=${buttonPanelsClose}
        placement="start"
        class="${getAppStateValue("device")}"
      >
        <h2 slot="label">${getLocaleString("SETTINGS")}</h2>
        <mov-button
          id="ResetSettings"
          @click="${resetSettings}"
          title="${getLocaleString("BUTTON_RESET_SETTINGS")}"
        >
          <mov-icon
            name="IconSettingsOff"
            size="20px"
            slot="start"
          ></mov-icon>
          ${getLocaleString("BUTTON_RESET_SETTINGS")}
        </mov-button>
        <div class="content">
          <fieldset id="SettingsPanelGeneral">
            <legend>${getLocaleString("GENERAL")}</legend>
            ${SettingsPanelGeneral_default()}
          </fieldset>
          <fieldset id="SettingsPanelTheme">
            <legend>${getLocaleString("THEME")}</legend>
            ${theme()}
          </fieldset>
          <fieldset id="SettingsPanelLoading">
            <legend>${getLocaleString("LOADING")}</legend>
            ${SettingsPanelLoading_default()}
          </fieldset>
          <fieldset id="SettingsPanelZoom">
            <legend>${getLocaleString("ZOOM")}</legend>
            ${SettingsPanelZoom_default()}
          </fieldset>
          <fieldset id="SettingsPanelOthers">
            <legend>${getLocaleString("OTHERS")}</legend>
            ${SettingsPanelOthers_default()}
          </fieldset>
        </div>
      </mov-drawer>
    `;
		}
	};
	SettingsPanel = __decorate([t$1("settings-panel"), (0, import_lib.useStores)(settings, locale, appState)], SettingsPanel);
	//#endregion
	//#region src/utils/request.ts
	/**
	* Fetches content from a URL and parses it as a DOM document.
	* @param {string} url - The URL to fetch.
	* @param {DOMParserSupportedType} format - The MIME type to use for parsing (e.g., 'text/html', 'text/xml').
	* @returns {Promise<Document>} A promise that resolves with the parsed `Document` object.
	*/
	async function fetchText(url, format) {
		logScript("Fetching page: ", url);
		try {
			const html = await (await fetch(url)).text();
			return new DOMParser().parseFromString(html, format);
		} catch (err) {
			logScript("Failed to fetch page: ", err);
			throw err;
		}
	}
	/**
	* Fetches a URL and parses it as an HTML document.
	* @param {string} url - The URL to fetch.
	* @returns {Promise<Document>} A promise that resolves with the parsed HTML `Document`.
	*/
	async function fetchHtml(url) {
		return fetchText(url, "text/html");
	}
	/**
	* Fetches an HTML page and extracts the value of a specific attribute from a given element.
	* @param {string} url - The URL of the page to fetch.
	* @param {string} selector - The CSS selector for the target element.
	* @param {string} attribute - The name of the attribute to retrieve.
	* @returns {Promise<string | null | undefined>} A promise that resolves with the attribute's value, or `null` if not found.
	*/
	async function getElementAttribute(url, selector, attribute) {
		try {
			return (await fetchHtml(url)).querySelector(selector)?.getAttribute(attribute);
		} catch (err) {
			logScript("Failed to get element attribute: ", err);
			return null;
		}
	}
	//#endregion
	//#region src/core/WorkerPool.ts
	var WorkerPool = class {
		constructor(speed, customDelay) {
			this.queue = [];
			this.activeCount = 0;
			this.lastRunTime = 0;
			const config = {
				Safe: {
					concurrency: 5,
					delay: 1e3
				},
				Standard: {
					concurrency: 5,
					delay: 500
				},
				Faster: {
					concurrency: 10,
					delay: 500
				},
				Extreme: {
					concurrency: 10,
					delay: 250
				},
				All: {
					concurrency: 20,
					delay: 50
				}
			}[speed];
			this.maxConcurrency = config.concurrency;
			this.minDelay = customDelay ?? config.delay;
		}
		add(task) {
			this.queue.push(task);
			this.runNext();
		}
		async runNext() {
			if (this.activeCount >= this.maxConcurrency || this.queue.length === 0) return;
			const timeSinceLastRun = Date.now() - this.lastRunTime;
			if (timeSinceLastRun < this.minDelay) {
				setTimeout(() => this.runNext(), this.minDelay - timeSinceLastRun);
				return;
			}
			const task = this.queue.shift();
			if (task) {
				this.activeCount += 1;
				this.lastRunTime = Date.now();
				try {
					await task();
				} finally {
					this.activeCount -= 1;
					this.runNext();
				}
			}
		}
	};
	//#endregion
	//#region src/core/Image.ts
	var pool;
	/**
	* Normalizes a URL by trimming whitespace and ensuring it starts with a protocol.
	* @param {string} url - The URL to normalize.
	* @returns {string} The normalized URL.
	*/
	function normalizeUrl(url) {
		if (url) {
			let uri = url.trim();
			if (uri.startsWith("//")) uri = `https:${uri}`;
			return uri;
		}
		return "";
	}
	/**
	* Fetches an image, converts it to a data URL, and adds it to the application state.
	* @param {IMangaImages | IMangaPages} manga - The manga object with image loading configurations.
	* @param {number} index - The page number of the image.
	* @param {string} imageSrc - The source URL of the image.
	*/
	async function addImg(manga, index, imageSrc) {
		const image = getAppStateValue("images")?.[index];
		if (image?.status && image.status !== "pending") return;
		changeImage(index, () => ({ status: "loading" }));
		pool.add(async () => {
			let src = normalizeUrl(imageSrc);
			let blob;
			let status = "loaded";
			try {
				const response = await fetch(src, manga.fetchOptions);
				if (response.ok) {
					blob = await response.blob();
					src = await blobUtil.blobToDataURL(blob);
				} else status = "error";
			} catch (e) {
				logScript("Failed to fetch image", e);
				status = "error";
			}
			changeImage(index, () => ({
				src,
				blob,
				status
			}));
			logScriptVerbose("Loaded Image:", index, "Source:", src);
		});
		if (manga.pages === index) removeURLBookmark();
	}
	/**
	* Fetches a page URL to find the image source within it, then adds the image to the application state.
	* @param {IMangaPages} manga - The manga object with page loading configurations.
	* @param {number} index - The page number.
	* @param {string} pageUrl - The URL of the page containing the image.
	*/
	async function addPage(manga, index, pageUrl) {
		const image = getAppStateValue("images")?.[index];
		if (image?.status && image.status !== "pending") return;
		changeImage(index, () => ({ status: "loading" }));
		pool.add(async () => {
			try {
				const imageSrc = await getElementAttribute(pageUrl, manga.img, manga.lazyAttr ?? "src");
				if (imageSrc) {
					changeImage(index, () => ({ status: "pending" }));
					await addImg(manga, index, imageSrc);
				} else changeImage(index, () => ({ status: "error" }));
			} catch (e) {
				logScript("Failed to get page attribute", e);
				changeImage(index, () => ({ status: "error" }));
			}
		});
	}
	/**
	* Loads a manga by fetching individual page URLs and extracting the image source from each.
	* @param {number} begin - The starting page number.
	* @param {IMangaPages} manga - The manga object with a list of page URLs.
	*/
	function loadMangaPages(begin, manga) {
		sequence(manga.pages, begin).filter((_index, position) => !(manga.lazy ?? getSettingsValue("lazyLoadImages")) || position <= getSettingsValue("lazyStart")).forEach((index) => {
			addPage(manga, index, manga.listPages[index - 1]);
		});
	}
	/**
	* Loads a manga from a direct list of image URLs.
	* @param {number} begin - The starting page number.
	* @param {IMangaImages} manga - The manga object with a list of image URLs.
	*/
	function loadMangaImages(begin, manga) {
		sequence(manga.pages, begin).filter((_index, position) => !(manga.lazy ?? getSettingsValue("lazyLoadImages")) || position <= getSettingsValue("lazyStart")).forEach((index) => {
			addImg(manga, index, manga.listImages[index - 1]);
		});
	}
	/**
	* The main entry point for loading manga images based on the detected loading strategy.
	* It determines whether to load from a list of images, a list of pages, or use a brute-force method.
	* It also sets up a listener to lazy-load subsequent images as the user scrolls.
	* @returns {Promise<void>}
	*/
	async function loadImages() {
		await waitForFunc(() => getAppStateValue("manga") !== void 0);
		const manga = getAppStateValue("manga");
		const begin = manga.begin ?? 1;
		pool = new WorkerPool(getSettingsValue("loadSpeed"), manga.timer);
		logScriptVerbose("Loading Images");
		logScriptVerbose(`Speed: ${getSettingsValue("loadSpeed")}`);
		logScriptVerbose(`Lazy: ${manga.lazy ?? getSettingsValue("lazyLoadImages")}, Starting from: ${getSettingsValue("lazyStart")}`);
		applyZoom();
		if (isImagesManga(manga)) {
			logScriptVerbose("Method: Images:", manga.listImages);
			loadMangaImages(begin, manga);
		} else if (isPagesManga(manga)) {
			logScriptVerbose("Method: Pages:", manga.listPages);
			loadMangaPages(begin, manga);
		} else if (isBruteforceManga(manga)) {
			logScriptVerbose("Method: Brute Force");
			manga.bruteForce({
				begin,
				addImg,
				loadImages(list) {
					loadMangaImages(begin, {
						...manga,
						listImages: list
					});
				},
				loadPages(list, img, lazyAttr) {
					loadMangaPages(begin, {
						...manga,
						listPages: list,
						img,
						lazyAttr
					});
				},
				wait: 0
			});
		} else logScript("No Loading Method Found");
		appState.listen((value, oldValue, changedKey) => {
			if (changedKey === "currentPage" && value.currentPage > oldValue.currentPage) for (let i = value.currentPage; i < Math.min(value.currentPage + 5, manga.pages + 1); i++) {
				if (value.images?.[i]?.src !== void 0 || value.images?.[i]?.status === "loading") continue;
				if (isImagesManga(manga)) addImg(manga, i, manga.listImages[i - 1]);
				else if (isPagesManga(manga)) addPage(manga, i, manga.listPages[i - 1]);
			}
		});
	}
	//#endregion
	//#region src/ui/events/currentpage.ts
	/**
	* Computes which page is currently considered "active" in the viewport.
	* The logic identifies which page's leading edge (top for vertical, left/right for horizontal)
	* has most recently passed the center of the viewport.
	* @internal
	* @returns {number | null} The current page number, or `null` if it cannot be determined.
	*/
	function computeCurrentPage() {
		const pages = getAppStateValue("images");
		if (!pages) return null;
		const viewMode = getSettingsValue("viewMode");
		const isHorizontal = viewMode === "FluidLTR" || viewMode === "FluidRTL";
		const isRTL = viewMode === "FluidRTL";
		const viewportCenterY = window.innerHeight / 2;
		const viewportCenterX = window.innerWidth / 2;
		let best = null;
		for (const index in pages) {
			const image = pages[index].ref?.value;
			if (!image) continue;
			const rect = image?.getBoundingClientRect();
			let edge;
			if (isHorizontal) if (isRTL) edge = rect.right;
			else edge = rect.left;
			else edge = rect.top;
			if (isHorizontal ? edge <= viewportCenterX : edge <= viewportCenterY) {
				if (!best || edge > best.edge) best = {
					index: parseInt(index, 10),
					edge
				};
			}
		}
		if (!best) return getAppStateValue("manga")?.begin ?? 1;
		return best.index;
	}
	/**
	* Calculates the current page and updates the global application state if it has changed.
	* @internal
	*/
	function updateCurrentPage() {
		const page = computeCurrentPage();
		if (page == null) return;
		if (getAppStateValue("currentPage") !== page) setAppStateValue("currentPage", page);
	}
	/**
	* Attaches the necessary scroll and resize listeners to trigger the current page calculation.
	* @internal
	*/
	function attachListeners() {
		const handler = _.throttle(() => {
			requestAnimationFrame(updateCurrentPage);
		}, 100);
		window.addEventListener("scroll", handler, { passive: true });
		window.addEventListener("resize", handler);
		getAppStateValue("chapter").value?.addEventListener("scroll", handler, { passive: true });
		requestAnimationFrame(updateCurrentPage);
	}
	/**
	* Initializes the current page tracking functionality.
	* It waits until the main application has rendered and then attaches the necessary event listeners.
	*/
	function trackCurrentPage() {
		if (!getAppStateValue("chapter").value) {
			setTimeout(trackCurrentPage, 50);
			return;
		}
		attachListeners();
	}
	//#endregion
	//#region src/ui/events.ts
	/**
	* Event handler for window resize and orientation change events.
	* It recalculates the zoom to ensure the content fits the new window dimensions.
	*/
	var updateOnResize = _.debounce(() => {
		setAppStateValue("device", getDevice());
		applyZoom();
	}, 200);
	/**
	* Initializes all global event listeners for the application.
	* This function sets up headroom for the header, keyboard shortcuts,
	* auto-scrolling, current page tracking, and responsive device detection on resize.
	*/
	async function events() {
		await waitForFunc(() => getAppStateValue("manga") !== void 0);
		keybindings();
		window.addEventListener("resize", updateOnResize);
		window.addEventListener("orientationchange", updateOnResize);
		autoscroll();
		trackCurrentPage();
	}
	//#endregion
	//#region src/ui/events/individual.ts
	/**
	* Appends a cache-busting query parameter to a URL.
	* @internal
	* @param {string} src - The original image source URL.
	* @param {number} repeat - The current reload attempt number.
	* @returns {string} The new URL with the `forceReload` parameter.
	*/
	function invalidateImageCache(src, repeat) {
		const url = src.replace(/[?&]forceReload=\d+$/, "");
		return `${url + (!url.includes("?") ? "?" : "&")}forceReload=${repeat}`;
	}
	/**
	* Extracts the current reload attempt number from a URL's query string.
	* @internal
	* @param {string | undefined} src - The image source URL.
	* @returns {number} The next repeat value, defaulting to 1.
	*/
	function getRepeatValue(src) {
		let repeat = 1;
		const cache = src?.match(/forceReload=(\d+)$/);
		if (cache?.at(1)) repeat = parseInt(cache[1], 10) + 1;
		return repeat;
	}
	/**
	* Attempts to reload a broken image with a cache-busting parameter.
	* It will only attempt to reload up to 5 times.
	* @internal
	* @param {number} index - The page index of the image to reload.
	* @param {HTMLImageElement} img - The `<img>` element to reload.
	*/
	function reloadImage(index, img) {
		logScript(`Reloading Page ${index}`, img);
		const src = getAppStateValue("images")?.[index]?.src;
		if (!src) return;
		const repeat = getRepeatValue(src);
		if (repeat > getSettingsValue("maxReload")) return;
		img?.removeAttribute("src");
		if (isBase64ImageUrl(src) || isObjectURL(src)) img?.setAttribute("src", src);
		else img?.setAttribute("src", invalidateImageCache(src, repeat));
	}
	/**
	* Event handler for the reload button on an individual page.
	* @param {Event} event - The click event from the reload button.
	*/
	function buttonReloadPage(event) {
		const button = event.currentTarget;
		const index = parseInt(button.value, 10);
		const img = getAppStateValue("images")?.[index]?.ref?.value;
		if (img) reloadImage(index, img);
	}
	/**
	* Event handler for the hide button on an individual page, which toggles the visibility of the page container.
	* @param {Event} event - The click event from the hide button.
	*/
	function buttonHidePage(event) {
		const button = event.currentTarget;
		changeImage(parseInt(button.value, 10), (image) => ({ hide: !image.hide }));
	}
	/**
	* Event handler for when an image successfully loads.
	* It updates the application state with the image's dimensions, attempts to create a blob for downloading,
	* and updates the overall loading progress bar.
	* @param {Event} event - The load event from an `<img>` element.
	*/
	function imageLoaded(event) {
		const img = event.currentTarget;
		changeImage(parseInt(img.id.replace("PageImg", ""), 10), (_image) => ({
			...calculatePageZoom({
				naturalWidth: img.naturalWidth,
				naturalHeight: img.naturalHeight
			}),
			status: "loaded",
			doublePage: img.naturalWidth > img.naturalHeight
		}));
		const manga = getAppStateValue("manga");
		const images = getAppStateValue("images") || {};
		const loaded = _.keys(images).filter((key) => {
			const idx = parseInt(key, 10);
			return idx >= (manga?.begin ?? 1) && idx <= (manga?.pages ?? 1) && images[idx]?.status === "loaded";
		}).length;
		const total = (manga?.pages ?? 1) - ((manga?.begin ?? 1) - 1);
		const percentage = Math.floor(loaded / total * 100);
		document.title = `(${percentage}%) ${getAppStateValue("manga")?.title}`;
		NProgress.configure({ showSpinner: false }).set(loaded / total);
		logScript(`Progress: ${percentage}%`);
		if (loaded === total) {
			logScript("Images Loading Complete");
			setAppStateValue("download", "available");
			if (getSettingsValue("downloadZip")) buttonStartDownload();
		}
	}
	/**
	* Event handler for when an image fails to load.
	* It marks the image as broken and attempts to reload it.
	* @param {Event} event - The error event from an `<img>` element.
	*/
	function imageLoadError(event) {
		const img = event.currentTarget;
		if (isEmpty(img.getAttribute("src"))) return;
		const index = parseInt(img.id.replace("PageImg", ""), 10);
		changeImage(index, () => ({ status: "error" }));
		reloadImage(index, img);
	}
	//#endregion
	//#region src/ui/events/size.ts
	/**
	* Event handler to zoom in on an individual page by a percentage step.
	* @param {Event} event - The click event from the zoom-in button.
	*/
	function buttonZoomIn(event) {
		const button = event.currentTarget;
		const index = parseInt(button.value, 10);
		const images = getAppStateValue("images");
		const img = getAppStateValue("images")?.[index];
		if (img?.naturalWidth) setAppStateValue("images", {
			...images,
			[index]: {
				...img,
				width: (img?.width || img?.naturalWidth) * (1 + getSettingsValue("zoomStep") / 100),
				height: void 0
			}
		});
	}
	/**
	* Event handler to zoom out on an individual page by a percentage step.
	* @param {Event} event - The click event from the zoom-out button.
	*/
	function buttonZoomOut(event) {
		const button = event.currentTarget;
		const index = parseInt(button.value, 10);
		const images = getAppStateValue("images");
		const img = getAppStateValue("images")?.[index];
		if (img?.naturalWidth) setAppStateValue("images", {
			...images,
			[index]: {
				...img,
				width: (img?.width || img?.naturalWidth) * (1 - getSettingsValue("zoomStep") / 100),
				height: void 0
			}
		});
	}
	/**
	* Event handler to restore the zoom of an individual page to 100%.
	* @param {Event} event - The click event from the restore zoom button.
	*/
	function buttonRestoreZoom(event) {
		const button = event.currentTarget;
		const index = parseInt(button.value, 10);
		const images = getAppStateValue("images");
		const img = getAppStateValue("images")?.[index];
		if (img) setAppStateValue("images", {
			...images,
			[index]: {
				...img,
				width: void 0,
				height: void 0
			}
		});
	}
	/**
	* Event handler to fit an individual page to the screen width.
	* @param {Event} event - The click event from the fit-to-width button.
	*/
	function buttonZoomWidth(event) {
		const button = event.currentTarget;
		const index = parseInt(button.value, 10);
		const images = getAppStateValue("images");
		const img = getAppStateValue("images")?.[index];
		if (img) setAppStateValue("images", {
			...images,
			[index]: {
				...img,
				width: window.innerWidth + (getSettingsValue("navbar") === "left" || getSettingsValue("navbar") === "right" ? -34 : 0),
				height: void 0
			}
		});
	}
	/**
	* Event handler to fit an individual page to the screen height.
	* @param {Event} event - The click event from the fit-to-height button.
	*/
	function buttonZoomHeight(event) {
		const button = event.currentTarget;
		const index = parseInt(button.value, 10);
		const images = getAppStateValue("images");
		const img = getAppStateValue("images")?.[index];
		if (img) setAppStateValue("images", {
			...images,
			[index]: {
				...img,
				width: void 0,
				height: window.innerHeight + (getSettingsValue("navbar") === "bottom" ? -34 : 0)
			}
		});
	}
	//#endregion
	//#region src/ui/MangaPage.ts
	/**
	* Calculates the inline styles for a manga page's image based on the current zoom settings.
	* This function determines the width and height of the image according to the global
	* zoom mode ('width', 'height', 'percent') and zoom value.
	*
	* @param {number} index - The page number for which to calculate the style.
	* @returns {StyleInfo} A Lit `StyleInfo` object to be used with the `styleMap` directive.
	*/
	function getImageStyle(index) {
		const image = getAppStateValue("images")?.[index];
		const isBook = getSettingsValue("viewMode").match(/^(Book|Manga)$/);
		const isGallery = getSettingsValue("viewMode") === "Gallery";
		const isFluid = getSettingsValue("viewMode").startsWith("Fluid");
		const withNavbar = getSettingsValue("navbar") === "bottom";
		return {
			width: image?.width ? `${image.width}px` : "auto",
			height: image?.height ? `${image.height}px` : "auto",
			"max-height": isFluid ? `${window.innerHeight + (withNavbar ? -34 : 0)}px` : void 0,
			"min-width": !isBook && !isGallery ? `${getSettingsValue("minZoom")}vw` : void 0
		};
	}
	/**
	* Generates the complete list of manga pages as a Lit `TemplateResult`.
	* Each page includes a set of controls (bookmark, zoom, hide, reload) and the page image itself.
	* A separator is also rendered between pages.
	*
	* @param {number} times - The total number of pages in the manga.
	* @param {number} begin - The starting page number.
	* @returns An array of Lit `TemplateResult` objects, one for each page.
	*/
	var listPages = (times, begin) => {
		return sequence(times, begin).map((index) => {
			if (!getAppStateValue("images")?.[index]?.ref) changeImage(index, (_image) => ({ ref: e$6() }));
			let singlePageCount = 0;
			for (let i = index - 1; i >= begin; i--) {
				if (getAppStateValue("images")?.[i].doublePage) break;
				if (!getAppStateValue("images")?.[i].doublePage) singlePageCount++;
			}
			const isDblPage = getAppStateValue("images")?.[index].doublePage ?? false;
			const isBookMode = getSettingsValue("viewMode") === "Book";
			const isLeftPage = !isDblPage && (isBookMode ? singlePageCount % 2 === 0 : singlePageCount % 2 === 1);
			const isRightPage = !isDblPage && (isBookMode ? singlePageCount % 2 === 1 : singlePageCount % 2 === 0);
			return b$1`
      <div
        id="Page${index}"
        class="${e$1({
				MangaPage: true,
				hide: !!getAppStateValue("images")?.[index].hide,
				DoublePage: isDblPage,
				LeftPage: isLeftPage && !isDblPage,
				RightPage: isRightPage && !isDblPage
			})}"
      >
        <div class="PageFunctions">
          <button
            class="Bookmark PageButton"
            title="${getLocaleString("BOOKMARK")}"
            @click=${buttonBookmark}
            value="${index}"
          >
            ${isBookmarked() ? IconBookmarkOff : IconBookmark}
          </button>
          <button
            class="ZoomIn PageButton"
            title="${getLocaleString("ZOOM_IN")}"
            @click=${buttonZoomIn}
            value="${index}"
          >
            ${IconZoomIn}
          </button>
          <button
            class="ZoomRestore PageButton"
            title="${getLocaleString("ZOOM_RESET")}"
            @click=${buttonRestoreZoom}
            value="${index}"
          >
            ${IconZoomCancel}
          </button>
          <button
            class="ZoomOut PageButton"
            title="${getLocaleString("ZOOM_OUT")}"
            @click=${buttonZoomOut}
            value="${index}"
          >
            ${IconZoomOut}
          </button>
          <button
            class="ZoomHeight PageButton"
            title="${getLocaleString("ZOOM_HEIGHT")}"
            @click=${buttonZoomHeight}
            value="${index}"
          >
            ${IconArrowAutofitHeight}
          </button>
          ${!getSettingsValue("viewMode").match(/^(Book|Manga)$/) ? b$1`
              <button
                class="ZoomWidth PageButton"
                title="${getLocaleString("ZOOM_WIDTH")}"
                @click=${buttonZoomWidth}
                value="${index}"
              >
                ${IconArrowAutofitWidth}
              </button>` : b$1`
            <button
              class="DoublePage PageButton"
              title="${getLocaleString("DOUBLE_PAGE")}"
              @click=${() => {
				changeImage(index, (image) => ({ doublePage: !image.doublePage }));
			}}
              value="${index}"
            >
              ${IconSpacingHorizontal}
            </button>`}
          <button
            class="Hide PageButton"
            title="${getLocaleString("HIDE")}"
            @click=${buttonHidePage}
            value="${index}"
          >
            ${getAppStateValue("images")?.[index].hide ? IconEye : IconEyeOff}
          </button>
          <button
            class="Reload PageButton"
            title="${getLocaleString("RELOAD")}"
            @click=${buttonReloadPage}
            value="${index}"
          >
            ${IconRefresh}
          </button>
          <span class="PageIndex">${index}</span>
        </div>
        <div class="PageContent">
          <img
            id="PageImg${index}"
            alt="Page ${index}"
            class="${e$1({
				PageImg: true,
				imgBroken: getAppStateValue("images")?.[index]?.status === "error"
			})}"
            src=${getAppStateValue("images")?.[index]?.src ?? A}
            style="${o$2(getImageStyle(index))}"
            @load=${imageLoaded}
            @error=${imageLoadError}
            ${n$4(getAppStateValue("images")?.[index].ref)}
          />
        </div>
      </div>
      <div class="separator">
        [ ${index === times ? getLocaleString("END") : `${index} / ${times}`} ]
      </div>
    `;
		});
	};
	//#endregion
	//#region src/ui/Reader.ts
	/**
	* Renders the main reader area where manga pages are displayed.
	* This component is responsible for laying out the pages according to the selected view mode
	* and applying appropriate scrolling behavior, such as transforming vertical scroll to horizontal for fluid modes.
	*
	* @param {IManga} manga - The manga object containing the page count and starting page number.
	* @returns A Lit `TemplateResult` representing the reader's main container.
	*/
	var Reader = (manga) => b$1`
  <main
    id="Chapter"
    ${n$4(getAppStateValue("chapter"))}
    class="${e$1({
		fitWidthIfOversize: getSettingsValue("fitWidthIfOversize"),
		[getSettingsValue("viewMode")]: true,
		separator: getSettingsValue("viewMode") === "Vertical"
	})}"
    @wheel=${(e) => {
		if (getSettingsValue("viewMode") === "FluidLTR") transformScrollToHorizontal(e);
		else if (getSettingsValue("viewMode") === "FluidRTL") transformScrollToHorizontalReverse(e);
	}}
  >
    ${listPages(manga.pages, manga.begin ?? 0)}
  </main>
`;
	//#endregion
	//#region src/ui/styles/index.ts
	/**
	* @file This module serves as the central aggregator for all the application's CSS styles.
	* It imports individual CSS files as inline strings, defines base theme variables for light and dark modes,
	* and combines them into a single CSS template literal that can be injected into the application's shadow DOM.
	*/
	var styles_default = css`
  .PageContent .PageImg[src=''],
  .PageContent .PageImg:not([src]) {
    background-image: url('${svgToUrl(IconPhoto$1)}');
  }

  .PageContent .PageImg.imgBroken {
    background-image: url('${svgToUrl(IconPhotoOff$1)}');
  }

  ${"/*  Simple Normalizer */\r\n#MangaOnlineViewer {\r\n  margin: 0;\r\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n  font-size: 16px;\r\n  line-height: 20px;\r\n  color: var(--theme-body-text-color);\r\n  background-color: var(--theme-body-background);\r\n  padding: 0;\r\n}\r\n\r\na,\r\na:link,\r\na:visited,\r\na:active,\r\na:focus {\r\n  color: var(--theme-body-text-color);\r\n  text-decoration: none;\r\n}\r\n\r\nimg {\r\n  height: auto;\r\n  vertical-align: middle;\r\n  border: 0 none;\r\n}\r\n"}
  ${":root:not(.light, .dark) {\r\n  --theme-body-background: #25262b;\r\n  --theme-body-text-color: #c1c2c5;\r\n  --theme-text-color: #c1c2c5;\r\n  --theme-primary-color: #1a1b1e;\r\n  --theme-primary-text-color: #c1c2c5;\r\n  --theme-background-color: #25262b;\r\n  --theme-hightlight-color: #2c2e33;\r\n  --theme-border-color: #373a40;\r\n  --theme-secondary-color: #2c2e33;\r\n  --theme-secondary-text-color: #c1c2c5;\r\n}\r\n\r\n:host {\r\n  all: initial;\r\n  display: block;\r\n  box-sizing: border-box;\r\n}\r\n\r\n#MangaOnlineViewer {\r\n  text-decoration: none;\r\n  color: var(--theme-body-text-color);\r\n  background-color: var(--theme-body-background);\r\n  box-sizing: border-box;\r\n  min-height: 100vh;\r\n  --mov-font-size-m: 16px;\r\n}\r\n\r\n#Chapter {\r\n  display: grid;\r\n  grid-template-columns: repeat(1, 1fr);\r\n  min-width: 225px;\r\n  box-sizing: border-box;\r\n}\r\n\r\n#Chapter.Vertical:has(+ #Navigation:not(.disabled)),\r\n#Chapter.WebComic:has(+ #Navigation:not(.disabled)) {\r\n  padding-bottom: 31px;\r\n}\r\n\r\n#Chapter.Vertical .PageContent {\r\n  margin-bottom: 8px;\r\n  margin-top: 8px;\r\n}\r\n\r\n.closeButton {\r\n  width: fit-content;\r\n  height: fit-content;\r\n  position: absolute;\r\n  right: 10px;\r\n  top: 10px;\r\n}\r\n\r\n.overlay {\r\n  position: fixed;\r\n  display: none;\r\n  width: 100%;\r\n  height: 100%;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n  z-index: 950;\r\n  cursor: pointer;\r\n}\r\n\r\n.overlay.visible {\r\n  display: block;\r\n}\r\n\r\nselect {\r\n  height: 20px;\r\n  margin: 2px;\r\n}\r\n\r\n:not(.FluidRTL, .FluidLTR).fitWidthIfOversize .PageContent .PageImg {\r\n  max-width: 100%;\r\n  object-fit: contain;\r\n}\r\n\r\n.hideControls .PageFunctions {\r\n  visibility: hidden;\r\n}\r\n"}
  ${".PageButton .icon-tabler {\r\n  height: 1rem;\r\n  width: 1rem;\r\n  vertical-align: sub;\r\n}\r\n\r\n.PageButton,\r\n.PageButton:visited,\r\n.PageButton:link {\r\n  cursor: pointer;\r\n  border-radius: 5px;\r\n  border-width: 1px;\r\n  border-style: solid;\r\n  padding: 2px;\r\n  min-height: 32px;\r\n  color: var(--mov-color-on-loud);\r\n  background-color: var(--mov-color-fill-loud);\r\n  border-color: var(--theme-border-color);\r\n  text-decoration: none;\r\n}\r\n\r\n.PageButton:active,\r\n.PageButton:hover {\r\n  opacity: 0.8;\r\n}\r\n\r\n.PageButton[selected] {\r\n  background-color: var(--mov-color-fill-normal);\r\n  color: var(--mov-color-on-normal);\r\n  border: 1px solid var(--theme-border-color);\r\n}\r\n\r\n.PageButton.hidden {\r\n  display: none;\r\n}\r\n\r\n.MangaPage {\r\n  width: 100%;\r\n  display: inline-block;\r\n  text-align: center;\r\n  line-height: 0;\r\n  min-height: 22px;\r\n  min-width: 100%;\r\n}\r\n\r\n.PageContent {\r\n  text-align: center;\r\n  display: inline-block;\r\n  overflow-x: auto;\r\n  max-width: 100%;\r\n  transition: all 0.3s ease-in-out;\r\n  height: 100%;\r\n  overflow-y: hidden;\r\n}\r\n\r\n.MangaPage.hide .PageContent {\r\n  height: 0;\r\n}\r\n\r\n.PageContent .PageImg[src=\"\"],\r\n.PageContent .PageImg:not([src]),\r\n.PageContent .PageImg.imgBroken {\r\n  width: 40vw;\r\n  height: 80vh;\r\n  display: inline-block;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: 20%;\r\n  background-color: var(--theme-hightlight-color);\r\n  position: relative;\r\n  text-align: center;\r\n  line-height: 80vh;\r\n  vertical-align: top;\r\n  color: var(--theme-text-color);\r\n  font-size: 16px;\r\n  min-width: 40vw;\r\n  min-height: 50vh;\r\n  max-width: 100%;\r\n  max-height: 100%;\r\n  margin: 0;\r\n}\r\n\r\n.PageContent .PageImg[src=\"\"]:before,\r\n.PageContent .PageImg:not([src]):before,\r\n.PageContent .PageImg.imgBroken:before {\r\n  content: attr(alt);\r\n  position: absolute;\r\n  top: 40%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  white-space: pre-wrap;\r\n  text-align: center;\r\n  color: var(--theme-text-color);\r\n  font-size: 16px;\r\n}\r\n\r\n.PageFunctions {\r\n  font-family: monospace;\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  align-items: center;\r\n  margin: 0;\r\n  padding: 0;\r\n  gap: 3px;\r\n  position: absolute;\r\n  right: 0;\r\n}\r\n\r\n.PageFunctions > .PageIndex {\r\n  background-color: var(--mov-color-fill-loud);\r\n  color: var(--mov-color-on-loud);\r\n  min-width: 20px;\r\n  text-align: center;\r\n  display: inline-block;\r\n  padding: 3px 5px;\r\n  line-height: 1rem;\r\n  border-radius: 5px;\r\n}\r\n\r\n.PageFunctions .PageButton {\r\n  padding: 3px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin: 0;\r\n  border-width: 0;\r\n  min-height: auto;\r\n  opacity: 0.5;\r\n}\r\n\r\n.PageFunctions:hover .PageButton {\r\n  opacity: 1;\r\n}\r\n\r\n.PageFunctions .PageButton:hover {\r\n  opacity: 0.9;\r\n}\r\n\r\n#Chapter.Vertical .separator {\r\n  display: flex;\r\n  align-items: center;\r\n  text-align: center;\r\n  font-style: italic;\r\n}\r\n\r\n#Chapter.Vertical .separator::before,\r\n#Chapter.Vertical .separator::after {\r\n  content: \"\";\r\n  flex: 1;\r\n  border-bottom: 1px solid var(--theme-text-color);\r\n}\r\n\r\n#Chapter.Vertical.separator:not(:empty)::before {\r\n  margin-right: 0.25em;\r\n}\r\n\r\n#Chapter.Vertical.separator:not(:empty)::after {\r\n  margin-left: 0.25em;\r\n}\r\n\r\n#Chapter:not(.separator) .separator,\r\n#Chapter:not(.Vertical) .separator {\r\n  display: none;\r\n}\r\n"}
  ${"#Chapter.FluidLTR,\r\n#Chapter.FluidRTL {\r\n  display: flex;\r\n  overflow-x: auto;\r\n  min-width: auto;\r\n\r\n  .ZoomWidth {\r\n    display: none;\r\n  }\r\n\r\n  .PageImg {\r\n    min-width: unset;\r\n  }\r\n\r\n  .MangaPage {\r\n    width: initial;\r\n    min-width: fit-content;\r\n    position: relative;\r\n  }\r\n\r\n  .MangaPage.DoublePage {\r\n    grid-column: span 2;\r\n  }\r\n}\r\n\r\n#Chapter.FluidLTR {\r\n  flex-direction: row;\r\n\r\n  .MangaPage .PageFunctions {\r\n    right: auto;\r\n    left: 0;\r\n    direction: rtl;\r\n  }\r\n}\r\n\r\n#Chapter.FluidRTL {\r\n  flex-direction: row-reverse;\r\n}\r\n"}
  ${"/* Book mode - Left to Right (Western comic/manga style) */\r\n#Chapter:where(.Book, .Manga) {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  grid-auto-flow: row;\r\n  width: 100%;\r\n  min-width: auto;\r\n  gap: 0;\r\n}\r\n\r\n#Chapter:where(.Book, .Manga) .MangaPage {\r\n  width: 100%;\r\n  display: block;\r\n  position: relative;\r\n  min-height: 22px;\r\n  overflow: hidden;\r\n}\r\n\r\n/* Default positioning for all controls in Book mode - top right */\r\n#Chapter:where(.Book, .Manga) .MangaPage .PageFunctions {\r\n  top: 0;\r\n  right: 0;\r\n  left: auto;\r\n  flex-direction: row;\r\n  border-radius: 0 0 0 4px;\r\n}\r\n\r\n/* Left-side images - controls at top left with reversed order */\r\n#Chapter:where(.Book, .Manga) .MangaPage.LeftPage .PageFunctions {\r\n  right: auto;\r\n  left: 0;\r\n  flex-direction: row-reverse;\r\n  border-radius: 0 0 4px 0;\r\n}\r\n\r\n#Chapter:where(.Book, .Manga) .MangaPage.DoublePage {\r\n  grid-column: span 2;\r\n}\r\n\r\n#Chapter:where(.Book, .Manga) .MangaPage .PageContent {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-shrink: 0;\r\n  overflow: hidden;\r\n}\r\n\r\n/* Left page - align image to the right (toward middle) */\r\n#Chapter:where(.Book, .Manga) .MangaPage.LeftPage .PageContent {\r\n  justify-content: flex-end;\r\n  padding-right: 0;\r\n}\r\n\r\n/* Right page - align image to the left (toward middle) */\r\n#Chapter:where(.Book, .Manga) .MangaPage.RightPage .PageContent {\r\n  justify-content: flex-start;\r\n  padding-left: 0;\r\n}\r\n\r\n/* Double page - center the image */\r\n#Chapter:where(.Book, .Manga) .MangaPage.DoublePage .PageContent {\r\n  justify-content: center;\r\n}\r\n\r\n/* Manga mode - Right to Left (Traditional manga/comic style) */\r\n#Chapter.Manga {\r\n  direction: rtl;\r\n}\r\n\r\n#Chapter.Manga .MangaPage {\r\n  direction: ltr; /* Reset text direction for page contents */\r\n}\r\n"}
  ${"#Chapter.Gallery {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  gap: 10px;\r\n  padding: 10px;\r\n}\r\n\r\n.Gallery .MangaPage {\r\n  width: auto;\r\n  min-width: unset;\r\n  flex: 0 1 auto;\r\n}\r\n\r\n.Gallery .MangaPage .PageContent .PageImg {\r\n  min-width: unset;\r\n}\r\n\r\n.Gallery .PageFunctions,\r\n.Gallery .separator {\r\n  display: none;\r\n}\r\n"}
  ${media_default}
  ${"@-webkit-keyframes spin {\r\n  to {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n@keyframes spin {\r\n  to {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n@-webkit-keyframes spin-reverse {\r\n  0% {\r\n    transform: rotate(360deg);\r\n  }\r\n\r\n  to {\r\n    transform: rotate(0);\r\n  }\r\n}\r\n\r\n@keyframes spin-reverse {\r\n  0% {\r\n    transform: rotate(360deg);\r\n  }\r\n\r\n  to {\r\n    transform: rotate(0);\r\n  }\r\n}\r\n\r\n.icon-tabler-loader-2,\r\n.animate-spin {\r\n  -webkit-animation: spin 1s linear infinite;\r\n  animation: spin 1s linear infinite;\r\n}\r\n\r\n.animate-spin-reverse {\r\n  -webkit-animation: spin-reverse 1s linear infinite;\r\n  animation: spin-reverse 1s linear infinite;\r\n}\r\n"}
`;
	//#endregion
	//#region src/ui/themes.ts
	/**
	* Generates a CSS theme configuration for a specified selector and color theme.
	* This includes light and dark theme configurations, as well as various color scales and gradients.
	*
	* @param {string} [selector='#MangaOnlineViewer'] - The CSS selector to apply the theme styles to. Defaults to `#MangaOnlineViewer`.
	* @param {string} [hex=getSettingsValue('theme')] - The base hexadecimal color used to derive the theme colors. Defaults to the user's theme settings value.
	* @returns {string} A string of CSS styles, or an empty string if the gradient generation fails.
	*/
	var themesCSS = (selector = "#MangaOnlineViewer", hex = getSettingsValue("theme")) => {
		const gradient = generateColorGradient(hex);
		const text = getTextColor(hex);
		const secondary = getSettingsValue("colorScheme") === "dark" ? gradient[8] : gradient[2];
		return css`
    :where(:root),
    ${selector}, .dark,
    ${selector}.dark {
      --theme-primary-color: ${hex};
      --theme-primary-text-color: ${text};
      --theme-secondary-color: ${secondary};
      --theme-secondary-text-color: ${getTextColor(secondary)};

      color-scheme: dark;
      --theme-body-background: ${colors.dark["600"]};
      --theme-body-text-color: ${colors.dark["50"]};
      --theme-text-color: ${colors.dark["50"]};
      --theme-background-color: ${colors.dark["600"]};
      --theme-hightlight-color: ${colors.dark["500"]};
      --theme-border-color: ${colors.dark["400"]};

      --mov-color-fill-quiet: ${gradient[9]};
      --mov-color-fill-normal: var(--theme-secondary-color, ${gradient[8]});
      --mov-color-fill-loud: var(--theme-primary-color);
      --mov-color-border-quiet: ${gradient[8]};
      --mov-color-border-normal: ${gradient[7]};
      --mov-color-border-loud: ${gradient[6]};
      --mov-color-on-quiet: ${gradient[4]};
      --mov-color-on-normal: var(--theme-secondary-text-color, ${gradient[3]});
      --mov-color-on-loud: var(--theme-primary-text-color, white);

      --mov-color-mix-hover: black 8%;
      --mov-color-mix-active: black 16%;
    }

    .light,
    ${selector}.light {
      color-scheme: light;
      --theme-body-background: ${colors.gray["50"]};
      --theme-body-text-color: ${colors.gray["900"]};
      --theme-text-color: ${colors.gray["900"]};
      --theme-background-color: ${colors.gray["50"]};
      --theme-hightlight-color: ${colors.gray["500"]};
      --theme-border-color: ${colors.gray["100"]};

      --mov-color-fill-quiet: ${gradient[0]};
      --mov-color-fill-normal: var(--theme-secondary-color, ${gradient[1]});
      --mov-color-fill-loud: var(--theme-primary-color);
      --mov-color-border-quiet: ${gradient[1]};
      --mov-color-border-normal: ${gradient[2]};
      --mov-color-border-loud: ${gradient[4]};
      --mov-color-on-quiet: ${gradient[6]};
      --mov-color-on-normal: var(--theme-secondary-text-color, ${gradient[3]});
      --mov-color-on-loud: var(--theme-primary-text-color, white);

      --mov-color-mix-hover: black 10%;
      --mov-color-mix-active: black 20%;
    }
  `;
	};
	//#endregion
	//#region src/ui/styles/startButton.css?inline
	var startButton_default = "#StartMOV {\r\n  all: revert;\r\n  backface-visibility: hidden;\r\n  font-size: 32px;\r\n  color: #fff;\r\n  cursor: pointer;\r\n  margin: 0 auto;\r\n  padding: 0.5rem 1rem;\r\n  text-align: center;\r\n  border: none;\r\n  border-radius: 10px;\r\n  min-height: 50px;\r\n  width: 80%;\r\n  position: fixed;\r\n  right: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  z-index: 105000;\r\n  transition: all 0.4s ease-in-out;\r\n  background-size: 300% 100%;\r\n  background-image: linear-gradient(to right, #667eea, #764ba2, #6b8dd6, #8e37d7);\r\n  box-shadow: 0 4px 15px 0 rgba(116, 79, 168, 0.75);\r\n}\r\n\r\n#StartMOV:hover {\r\n  background-position: 100% 0;\r\n  transition: all 0.4s ease-in-out;\r\n}\r\n\r\n#StartMOV:focus {\r\n  outline: none;\r\n}\r\n\r\n#pagesSliderVal {\r\n  display: block;\r\n  text-align: center;\r\n  margin-top: 15px;\r\n  font-weight: bold;\r\n}\r\n";
	//#endregion
	//#region src/ui/Startup.ts
	/**
	* This file provides a web component for managing the startup process of the script.
	* It replaces the old dialog functions with a self-contained Lit component.
	*/
	var MovStartup = class MovStartup extends i$1 {
		constructor(..._args) {
			super(..._args);
			this.mangaPages = 0;
			this.begin = 1;
			this.timeoutMs = 3e3;
			this.status = "initial-prompt";
		}
		static {
			this.styles = [r$4(startButton_default)];
		}
		connectedCallback() {
			super.connectedCallback();
			if (this.status === "initial-prompt") this.timeoutId = window.setTimeout(() => {
				this.handleStart();
			}, this.timeoutMs);
		}
		disconnectedCallback() {
			super.disconnectedCallback();
			window.clearTimeout(this.timeoutId);
		}
		handleStart() {
			window.clearTimeout(this.timeoutId);
			this.dispatchEvent(new CustomEvent("start", { detail: null }));
		}
		handleLateStart(begin, end) {
			this.dispatchEvent(new CustomEvent("start", { detail: {
				begin,
				end
			} }));
		}
		handleButtonCLick() {
			this.status = "late-start-prompt";
		}
		handleDialogClose(e) {
			e.stopPropagation();
			window.clearTimeout(this.timeoutId);
			this.status = "late-start-button";
		}
		render() {
			switch (this.status) {
				case "late-start-button": return this.renderLateStartButton();
				case "late-start-prompt": return this.renderLateStartPrompt();
				default: return this.renderInitialPrompt();
			}
		}
		renderInitialPrompt() {
			return b$1`
      <mov-dialog
        ?open=${this.status === "initial-prompt"}
        icon="info"
        @close=${this.handleDialogClose}
      >
        <span slot="label">${getLocaleString("STARTING")}</span>
        <div style="padding: 1rem;">${getLocaleString("WAITING")}</div>
        <div
          slot="footer"
          style="display: flex; justify-content: space-between; padding: 0.5rem 1rem 1rem;"
        >
          <mov-button
            @click=${this.handleDialogClose}
            style="--mov-color-fill-loud: ${colors.red[700]}; --mov-color-on-loud: white;"
          >
            Cancel
          </mov-button>
          <mov-button
            @click=${this.handleStart}
            style="--mov-color-fill-loud: ${colors.green[700]}; --mov-color-on-loud: white;"
          >
            Start Now
          </mov-button>
        </div>
      </mov-dialog>
    `;
		}
		renderLateStartButton() {
			return b$1`
      <button
        id="StartMOV"
        @click=${this.handleButtonCLick}
      >
        ${getLocaleString("BUTTON_START")}
      </button>
    `;
		}
		renderLateStartPrompt() {
			this.beginPage ??= this.begin;
			this.endPage ??= this.mangaPages;
			const onSliderInput = (e) => {
				this.beginPage = e.detail.value[0];
				this.endPage = e.detail.value[1];
			};
			return b$1`
      <mov-dialog
        ?open=${this.status === "late-start-prompt"}
        icon="question"
        @close=${this.handleDialogClose}
      >
        <span slot="label">${getLocaleString("STARTING")}</span>
        <div style="padding: 1rem;">
          ${getLocaleString("CHOOSE_BEGINNING")}
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
              .value=${[this.beginPage, this.endPage]}
              min="0"
              max="${this.mangaPages}"
              @input=${onSliderInput}
            ></mov-slider>
            <output
              id="pagesSliderVal"
              class="RangeValue"
              for="pagesSlider"
            >
              [${String(this.beginPage).padStart(3, "0")} ,
              ${String(this.endPage).padStart(3, "0")}]
            </output>
          </div>
        </div>
        <div
          slot="footer"
          style="display: flex; justify-content: flex-end; gap: 0.5rem; padding: 0.5rem 1rem 1rem;"
        >
          <mov-button
            @click=${this.handleDialogClose}
            style="--mov-color-fill-loud: ${colors.red[700]}; --mov-color-on-loud: white;"
          >
            Close
          </mov-button>
          <mov-button
            @click=${() => this.handleLateStart(this.beginPage ?? 0, this.endPage ?? this.mangaPages)}
            style="--mov-color-fill-loud: ${colors.green[700]}; --mov-color-on-loud: white;"
          >
            Run
          </mov-button>
        </div>
      </mov-dialog>
    `;
		}
	};
	__decorate([n$1({
		type: Number,
		reflect: true
	})], MovStartup.prototype, "mangaPages", void 0);
	__decorate([n$1({
		type: Number,
		reflect: true
	})], MovStartup.prototype, "begin", void 0);
	__decorate([n$1({ type: Number })], MovStartup.prototype, "timeoutMs", void 0);
	__decorate([n$1({
		type: String,
		reflect: true
	})], MovStartup.prototype, "status", void 0);
	__decorate([r$1()], MovStartup.prototype, "beginPage", void 0);
	__decorate([r$1()], MovStartup.prototype, "endPage", void 0);
	MovStartup = __decorate([t$1("script-startup")], MovStartup);
	//#endregion
	//#region src/utils/cleanup.ts
	/**
	* Removes all event listeners from a DOM element by cloning and replacing it.
	* This is a brute-force approach, but it is the most reliable way to remove all event listeners when you don't have references to the listeners themselves.
	* Note: This method can have side effects, such as losing the element's state or breaking references to it.
	* @internal
	* @param {HTMLElement} element - The element from which to remove event listeners.
	* @returns {HTMLElement} The new, listener-free element that replaced the original.
	*/
	function removeAllEventListeners(element) {
		if (!element?.parentNode) return element;
		const newElement = element.cloneNode(true);
		element.parentNode.replaceChild(newElement, element);
		return newElement;
	}
	/**
	* Removes all attributes from a DOM element.
	* @internal
	* @param {HTMLElement} element - The element from which to remove attributes.
	*/
	var removeAttributes = (element) => {
		element.getAttributeNames().forEach((attr) => {
			element?.removeAttribute(attr);
		});
	};
	/**
	* Scrubs one or more DOM elements by removing all their attributes and event listeners.
	* @param {...HTMLElement} elements - A spread array of HTML elements to clean up.
	*/
	var cleanUpElement = (...elements) => {
		elements?.forEach(removeAttributes);
		elements?.forEach(removeAllEventListeners);
	};
	//#endregion
	//#region \0@oxc-project+runtime@0.124.0/helpers/taggedTemplateLiteral.js
	function _taggedTemplateLiteral(e, t) {
		return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
	}
	//#endregion
	//#region src/ui/App.ts
	var _templateObject;
	var App = class App extends i$1 {
		constructor(..._args) {
			super(..._args);
			this.loadMode = "wait";
		}
		static {
			this.styles = [i$3``, r$4(styles_default)];
		}
		async start(begin, end) {
			if (this.manga) {
				if (!document.documentElement.hasAttribute("mov")) {
					cleanUpElement(document.documentElement, document.head, document.body);
					document.documentElement.setAttribute("mov", "");
				}
				window.scrollTo(0, 0);
				setAppStateValue("manga", {
					...this.manga,
					begin: begin ?? this.manga.begin,
					pages: end ?? this.manga.pages
				});
			}
		}
		/**
		* LitElement lifecycle hook, called after the component's first render.
		* It initializes global event listeners and registers the component's `shadowRoot`
		* in the application state, making it accessible to other parts of the application
		* that may need to interact with the DOM.
		*/
		firstUpdated() {
			if (this.loadMode === "always") this.start();
			events();
			loadImages();
		}
		/**
		* Renders the application's UI.
		* This includes applying the current theme and rendering the header, reader,
		* navigation bar, overlay, and all dialog panels.
		* @returns The rendered template.
		*/
		render() {
			const manga = getAppStateValue("manga");
			const dialog = getAppStateValue("dialog");
			return b$1`
      <style>
        ${themesCSS()}
      </style>
      <div
        id="MangaOnlineViewer"
        class="${e$1({
				[getSettingsValue("colorScheme")]: true,
				hideControls: getSettingsValue("hidePageControls"),
				bookmarked: !!isBookmarked(),
				[getAppStateValue("device")]: true
			})}"
        style="${o$2({ [`padding-${getSettingsValue("navbar")}`]: `34px` })}"
        .locale="${getSettingsValue("locale")}"
      >
        ${manga ? b$1` <reader-header .manga=${manga}></reader-header>
              ${Reader(manga)}
              <navbar-thumbnails .mode=${getSettingsValue("navbar")}></navbar-thumbnails>
              <manga-pagination
                .mode="${getSettingsValue("pagination")}"
                .startPage=${manga.begin}
                .totalPages=${manga.pages}
                .currentPage=${getAppStateValue("currentPage")}
                .next=${manga.next}
                .prev=${manga.prev}
              ></manga-pagination>
              <keybindings-panel></keybindings-panel>
              <bookmark-panel></bookmark-panel>
              <settings-panel></settings-panel>
              <moaqz-toaster dismissable></moaqz-toaster>` : b$1(_templateObject || (_templateObject = _taggedTemplateLiteral([
				" <script-startup\n              .mangaPages=\"",
				"\"\n              begin=\"",
				"\"\n              status=\"",
				"\"\n              @start=",
				"\n            ><\/script-startup>"
			])), this.manga?.pages, this.manga?.begin, this.loadMode === "never" ? "late-start-button" : "initial-prompt", (e) => {
				this.start(e.detail?.begin, e.detail?.end);
			})}
        ${dialog ? b$1`
              <mov-dialog
                open
                .icon=${dialog.icon}
                @close=${() => setAppStateValue("dialog", null)}
              >
                <span slot="label">${dialog.title}</span>
                ${dialog.content} ${dialog.footer}
              </mov-dialog>
            ` : ""}
      </div>
    `;
		}
	};
	__decorate([n$1({
		type: String,
		reflect: true
	})], App.prototype, "loadMode", void 0);
	__decorate([n$1({ type: Object })], App.prototype, "manga", void 0);
	App = __decorate([t$1("manga-online-viewer"), (0, import_lib.useStores)(settings, locale, appState)], App);
	//#endregion
	//#region src/ui/styles/externalStyle.ts
	var externalStyle_default = [
		"/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n",
		"/* Make clicks pass-through */\n#nprogress {\n  pointer-events: none;\n}\n\n#nprogress .bar {\n  background: #29d;\n\n  position: fixed;\n  z-index: 1031;\n  top: 0;\n  left: 0;\n\n  width: 100%;\n  height: 2px;\n}\n\n/* Fancy blur effect */\n#nprogress .peg {\n  display: block;\n  position: absolute;\n  right: 0px;\n  width: 100px;\n  height: 100%;\n  box-shadow: 0 0 10px #29d, 0 0 5px #29d;\n  opacity: 1.0;\n\n  -webkit-transform: rotate(3deg) translate(0px, -4px);\n      -ms-transform: rotate(3deg) translate(0px, -4px);\n          transform: rotate(3deg) translate(0px, -4px);\n}\n\n/* Remove these to get rid of the spinner */\n#nprogress .spinner {\n  display: block;\n  position: fixed;\n  z-index: 1031;\n  top: 15px;\n  right: 15px;\n}\n\n#nprogress .spinner-icon {\n  width: 18px;\n  height: 18px;\n  box-sizing: border-box;\n\n  border: solid 2px transparent;\n  border-top-color: #29d;\n  border-left-color: #29d;\n  border-radius: 50%;\n\n  -webkit-animation: nprogress-spinner 400ms linear infinite;\n          animation: nprogress-spinner 400ms linear infinite;\n}\n\n.nprogress-custom-parent {\n  overflow: hidden;\n  position: relative;\n}\n\n.nprogress-custom-parent #nprogress .spinner,\n.nprogress-custom-parent #nprogress .bar {\n  position: absolute;\n}\n\n@-webkit-keyframes nprogress-spinner {\n  0%   { -webkit-transform: rotate(0deg); }\n  100% { -webkit-transform: rotate(360deg); }\n}\n@keyframes nprogress-spinner {\n  0%   { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n}\n\n",
		"#nprogress .bar {\r\n  background: #29d;\r\n  position: fixed;\r\n  z-index: 1031;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 4px;\r\n}\r\n\r\nhtml[mov] body > *:not(manga-online-viewer, #nprogress) {\r\n  /* biome-ignore lint/complexity/noImportantStyles: requirement */\r\n  display: none !important;\r\n}\r\n\r\nhtml[mov] {\r\n  all: unset;\r\n  font-size: 16px;\r\n}\r\n"
	].join("\n");
	//#endregion
	//#region src/core/main.ts
	/**
	* Prepares the page to display the manga viewer.
	* @param {[ISite, IManga]} siteMangaTuple - A tuple containing the site and manga objects.
	* @param {ISite} siteMangaTuple[0] - The site configuration object.
	* @param {IManga} siteMangaTuple[1] - The manga data object.
	* @returns {Promise<void>}
	*/
	async function preparePage([site, manga]) {
		logScript(`Found Pages: ${manga.pages} in ${site?.name}`);
		if (!manga.title) manga.title = document.querySelector("title")?.textContent?.trim();
		manga.begin = isBookmarked() ?? manga.begin ?? 1;
		if (manga.before !== void 0) {
			logScriptVerbose(`Executing Preparation`);
			await manga.before(manga.begin ?? 0);
		}
		document.head.innerHTML += wrapStyle("externals", externalStyle_default);
		const viewer = document.createElement("manga-online-viewer");
		viewer.loadMode = site?.start ?? getSettingsValue("loadMode");
		viewer.manga = manga;
		document.body.appendChild(viewer);
	}
	/**
	* Main script entry point. Finds the current site, runs tests, and starts the viewer.
	* @param {ISite[]} sites - An array of supported site configurations.
	* @returns {Promise<void>}
	*/
	async function start(sites) {
		logScript(`Starting ${getInfoGM.script.name} ${getInfoGM.script.version} on ${getDevice()} ${getBrowser()} with ${getEngine()}`);
		logScript(sites.length, "Known Manga Sites:", sites);
		const foundSites = sites.filter((s) => s.url.test(window.location.href));
		logScript(foundSites.length, "Found sites:", foundSites);
		const sitePromises = foundSites.map(async (site) => {
			logScript(`Testing site: ${site.name}`);
			await runSiteTests(site);
			const manga = await site.run();
			if (manga.pages > 0) return [site, manga];
			throw new Error(`${site.name} found ${manga.pages} pages`);
		});
		try {
			preparePage(await Promise.any(sitePromises));
		} catch (error) {
			if (error instanceof AggregateError) {
				logScript("All sites failed to run:");
				for (const err of error.errors) logScript(err.message);
			} else logScript("An unexpected error occurred:", error);
		}
	}
	//#endregion
	//#region src/userscript-adult.ts
	/**
	* @file Entry point for the Manga Online Viewer "Adult" (NSFW) userscript.
	* This script imports the list of adult-oriented websites and initializes the main
	* application logic to run on them.
	*/
	start(sites).catch(logScript);
	//#endregion
})();
