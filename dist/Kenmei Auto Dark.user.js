// ==UserScript==
// @name        Kenmei Auto Dark
// @description Automatically sets Kenmei to dark mode, avoiding digging inside setting every time you have to login again
// @author      TagoDR
// @match       *://*.kenmei.co/*
// @run-at      document-end
// @version     1.0
// @grant       none
// ==/UserScript==

(function() {
    'use strict'
    document.body.classList.add('dark');
})();
