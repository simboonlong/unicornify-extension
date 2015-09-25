'use strict';

/*global chrome:false */

chrome.browserAction.setBadgeText({text: '<(@}'});
chrome.browserAction.setBadgeBackgroundColor({color: 'rgba(169,123,181,0.25)'});

chrome.browserAction.onClicked.addListener(function(aTab) {

    chrome.tabs.executeScript(null,
        {
            file: "js/main.js"
        },
        function(result) {
            if (chrome.runtime.lastError) {
                alert('Unable to run on this webpage. Try other sites.');
                return;
            }
        }
    );

});
