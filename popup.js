document.addEventListener('DOMContentLoaded', function() {
  var toggle = document.getElementById('realtimePhishingToggle');
  var threatCount = document.getElementById('threatCount');
  var body = document.body;
  var links = document.querySelectorAll('a'); // Select all link elements
  var slider = document.querySelector('.slider'); // Select the slider element

  toggle.addEventListener('change', function() {
      if(this.checked) {
          body.style.backgroundColor = '#FFFFFF';
          body.style.color = '#000';
          links.forEach(function(link) {
              link.style.color = '#000'; // Set links color to black
          });
          slider.style.backgroundColor = '#ccc'; // Set slider background color for 'on' state
          slider.before.style.backgroundColor = 'white'; // Set slider button color for 'on' state
      } else {
          body.style.backgroundColor = '#000000';
          body.style.color = '#fff';
          links.forEach(function(link) {
              link.style.color = '#fff'; // Set links color to white
          });
          slider.style.backgroundColor = '#777'; // Set slider background color for 'off' state
          slider.before.style.backgroundColor = '#333'; // Set slider button color for 'off' state
      }
  });

  // Initialize the threat count (this would be retrieved from storage in a real extension)
  threatCount.textContent = '0';

  // Logic to increment and display the threat count goes here
  // Example: threatCount.textContent = parseInt(threatCount.textContent) + 1;
});
