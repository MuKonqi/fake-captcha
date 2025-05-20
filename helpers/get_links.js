// ==UserScript==
// @name         Get News Website Links
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  none
// @author       none
// @match        https://www.medyajans.com/haber-siteleri.html
// @match        https://bilgit.com/ulusalgazetehaber.html
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let query;

    if (window.location.hostname === "www.medyajans.com") {
        query = "strong a";
    }

    else if (window.location.hostname === "bilgit.com") {
        query = ".ulusalhaber a";
    }

    for (let element of document.querySelectorAll(query)) {
        console.log(element.getAttribute("href"));
    }
})();