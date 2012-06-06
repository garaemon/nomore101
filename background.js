chrome.webRequest.onErrorOccurred.addListener(
  function(object, details) {
    console.log(object);
    if (object.tabId != -1 && object.type == "main_frame") {
      console.log(object);
      console.log(details);
      if (object.error != "net::ERR_ABORTED") {
        console.log("retry!");
        setTimeout(function() {
          chrome.tabs.reload(object.tabId);
        }, 1000);
      }
    }
  }, {
    urls: ["*://*/*"]
  }
);
