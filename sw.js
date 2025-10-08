const CACHE_NAME = "meu-pwa-v1";
const arquivosParaCache = [
  "/",
  "/index.html",
  "/style.css",
  "/script.js",
  "/icons/icon-192.png",
  "/icons/icon-512.png",
  "/manifest.json",
  "/app.js",
  "/offline.html",
  "/script.js",
  "/sw.js"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(arquivosParaCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});