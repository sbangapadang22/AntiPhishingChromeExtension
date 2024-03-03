chrome.runtime.onInstalled.addListener(() => {
  console.log('Anti-Phishing extension installed.');
  // Initialize the toggle state on installation
  chrome.storage.local.set({realtimePhishingDetectionEnabled: true});
});

chrome.runtime.onMessage.addListener(async function(request, sender, sendResponse) {
  if (request.message === "toggle_phishing_detection") {
      // Update the toggle state based on the message from the popup
      chrome.storage.local.set({realtimePhishingDetectionEnabled: request.enabled});
  } else if (request.message === "is_phishing") {
      chrome.storage.local.get(['realtimePhishingDetectionEnabled'], async function(result) {
          if (result.realtimePhishingDetectionEnabled) {
              const isPhishing = await checkURL(request.url);
              sendResponse({phishing: isPhishing});
          }
      });
  }
  return true; // indicates you wish to send a response asynchronously
});

async function checkURL(url) {
  // Note: Replace 'YOUR_API_KEY' with your actual Safe Browsing API key
  const apiKey = 'AIzaSyCpUd5IgDlVmf-CUUOyKARJlszlAUxXEPk';
  const safeBrowsingUrl = `https://safebrowsing.googleapis.com/v4/threatMatches:find?key=${apiKey}`;
  const requestBody = {
      client: {
          clientId: "phisherman",
          clientVersion: "1.0"
      },
      threatInfo: {
          threatTypes: ["MALWARE", "SOCIAL_ENGINEERING"],
          platformTypes: ["ANY_PLATFORM"],
          threatEntryTypes: ["URL"],
          threatEntries: [{url: url}]
      }
  };

  try {
      const response = await fetch(safeBrowsingUrl, {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(requestBody)
      });
      const data = await response.json();
      return !!data.matches;
  } catch (error) {
      console.error('Error fetching and parsing data:', error);
      return false;
  }
}

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.url) {
      chrome.storage.local.get(['realtimePhishingDetectionEnabled'], function(result) {
          if (result.realtimePhishingDetectionEnabled) {
              checkURL(changeInfo.url).then(isPhishing => {
                  if (isPhishing) {
                      chrome.tabs.update(tabId, {url: "warning.html"});
                  }
              });
          }
      });
  }
});
