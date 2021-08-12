// ==UserScript==
// @name     jisho.org focus search
// @version  1
// @match    https://jisho.org/*
// @grant    none
// ==/UserScript==

(function() {
    var kw = document.getElementById("keyword");
    
    window.addEventListener('keydown', function(e) {
      
      if(e.ctrlKey && e.shiftKey && e.code == "KeyF") {
        document.getElementById("keyword").focus();
      }
      
      /*
      if(e.key.length == 1 && e.key.match(/[a-z0-9]/i)) {
        if(!(document.activeElement === kw)) {
          kw.focus();
        }
      }
      */
    },true);
  })();