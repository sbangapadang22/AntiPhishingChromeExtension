chrome.runtime.onInstalled.addListener(() => {
    console.log('Anti-Phishing extension installed.');
  });
  
  chrome.webNavigation.onCompleted.addListener((details) => {
    console.log('Navigated to a new page:', details.url);
    // Here you would put your logic to check if the page is safe
    // For example, comparing the URL to a list of known phishing sites
    // and then sending a message to the popup to update the UI accordingly
  });
  
  chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if(request.message === "is_phishing") {
        let isPhishing = checkURL(request.url); // checkURL is a function you would define to check the URL
        sendResponse({phishing: isPhishing});
      }
  });
  
  function checkURL(url) {
    // Implement your logic to check if the URL is a known phishing attempt
    // This could involve checking a list of malicious URLs, looking for certain patterns, etc.
    // For demonstration purposes, let's say all URLs are safe
    return false;
  }
  