// ==UserScript==
// @name         Hide Twitter Notifications
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Hides Red Notification Indicator from Twitter on desktop (for users who are getting a lot of notifications)
// @author       Sarah Eaglesfield
// @match        https://twitter.com/*
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';
document.getElementsByClassName("count")[0].innerHTML = '';

})();
