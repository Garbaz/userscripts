// ==UserScript==
// @name         Zhongwen modifications
// @description  Modifies the look of the Zhongwen pop-up and adds some features
// @version      0.8
// @include      *
// @namespace https://greasyfork.org/users/683917
// ==/UserScript==


(function () {
    // console.log("Zhongwen modifications");
    'use strict';

    function addGlobalStyle(css) {
        //     console.log(css);
        var head, style;
        head = document.getElementsByTagName('head')[0];
        if (!head) {
            console.log('ERROR: No <head> found; Unable to add global style.');
            return;
        }
        style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = css;
        head.appendChild(style);
        return style;
    }

    addGlobalStyle(`
          #zhongwen-window .w-zhuyin {
            font-family: Tahoma, Geneva, sans-serif !important;
            font-size: 18px;
          }
          #zhongwen-window .w-pinyin {
            display:none;
          }

          .zhongwen-mod-pinyin-temp {
            display: inline;
          }
    `);

    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey || e.metaKey || e.altKey || e.shiftKey) {
            return;
        }
        if(e.key == 'p') {
            var popup = document.getElementById('zhongwen-window');
            if(popup && popup.style.display != 'none') {
                var pinyins = popup.getElementsByClassName('w-pinyin');
                for(var i = 0; i < pinyins.length; i++) {
                    pinyins[i].style.display = 'inline';
                }
            }
        }
    });
})();
