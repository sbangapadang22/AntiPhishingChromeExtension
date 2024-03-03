document.addEventListener('DOMContentLoaded', function() {
    var toggle = document.getElementById('realtimePhishingToggle');
    var threatCount = document.getElementById('threatCount');
    var body = document.body;
    var links = document.querySelectorAll('a'); // Select all link elements
    var slider = document.querySelector('.slider'); // Select the slider element

    // Read the toggle state from storage and update the UI accordingly
    chrome.storage.local.get('realtimePhishingDetectionEnabled', function(data) {
        toggle.checked = data.realtimePhishingDetectionEnabled;
        updateUI(toggle.checked);
    });

    toggle.addEventListener('change', function() {
        updateUI(this.checked);
        // Save the new state to storage
        chrome.storage.local.set({'realtimePhishingDetectionEnabled': this.checked});
    });

    function updateUI(isEnabled) {
        if (isEnabled) {
            body.style.backgroundColor = '#FFFFFF';
            body.style.color = '#000';
            links.forEach(function(link) {
                link.style.color = '#000'; // Set links color to black
            });
            slider.classList.add('active');
        } else {
            body.style.backgroundColor = '#000000';
            body.style.color = '#fff';
            links.forEach(function(link) {
                link.style.color = '#fff'; // Set links color to white
            });
            slider.classList.remove('active');
        }
    }
});
