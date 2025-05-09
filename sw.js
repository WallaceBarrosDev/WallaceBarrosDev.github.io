const CACHE_NAME = "meu-app-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/assets/index-C7iDT5XF.js",
  "/assets/index-Cn0V5S26.css"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
