self.addEventListener('install', event => {
  console.log('✅ Service Worker Installing');
  event.waitUntil(
    caches.open('sunshine-cache').then(cache => {
      return cache.addAll([
        './',
        './index.html',
        './manifest.json',
        './logo-192.png',
        './logo-512.png'
        // Add other required files like CSS, JS, images etc.
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
