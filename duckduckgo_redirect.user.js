// ==UserScript==
// @name     duckduckgo redirect to start
// @version  1
// @grant    none
// @match    https://duckduckgo.com/
// ==/UserScript==

(function () {
	//'use strict';
	top.location.hostname = "start.duckduckgo.com";
})();