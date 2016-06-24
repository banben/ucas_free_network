chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        if( details.url == "http://210.77.16.21:8081/eportal/interface/index_files/pc/login_bch.js" )
            return {redirectUrl: "chrome-extension://" + chrome.runtime.id + "/js/login_bch.js" };
    },
    {urls:["<all_urls>"]},
    ["blocking"]);