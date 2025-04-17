// This file contains service worker registration for PWA support

// Check if service workers are supported
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js').then(
      function(registration) {
        // Registration was successful
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      },
      function(err) {
        // Registration failed
        console.log('ServiceWorker registration failed: ', err);
      }
    );
  });
}
