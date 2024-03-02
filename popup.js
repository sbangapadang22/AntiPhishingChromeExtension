document.addEventListener('DOMContentLoaded', function() {
    var toggle = document.getElementById('realtimePhishingToggle');
    var statusMessage = document.getElementById('status');
    var body = document.getElementById('body');

    toggle.addEventListener('change', function() {
        if(this.checked) {
            statusMessage.textContent = 'Real-time phishing protection is ON';
            body.style.backgroundColor = '#FFFFFF'; // Light mode
        } else {
            statusMessage.textContent = 'Real-time phishing protection is OFF';
            body.style.backgroundColor = '#000000'; // Dark mode
            body.style.color = '#FFFFFF';
        }
    });
});

chrome.runtime.sendMessage({message: "is_phishing", url: currentTabUrl}, function(response) {
    if(response.phishing) {
      // Update the popup UI to show a warning
    } else {
      // Update the popup UI to show the site is safe
    }
  });
  
