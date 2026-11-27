const CACHE_NAME = 'atish-menu-v36';

// Core shell + self-hosted Persian font (~80KB total) to pre-cache immediately on install.
// Menu dish images are cached on-demand as the user scrolls so first load stays ultra-light on mobile data.
const PRECACHE_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/fonts/vazirmatn.css',
  '/fonts/vazirmatn-arabic.woff2',
  '/fonts/vazirmatn-latin.woff2',
  '/icons/icon-192.png',
  '/icons/icon-512.png',
  '/icons/apple-touch-icon.png',
  '/images/logo.webp',
  '/images/atish-hero-3d.jpg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE_ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      )
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // Only handle GET requests
  if (event.request.method !== 'GET') return;

  // Strategy 1: HTML Navigation requests (opening or refreshing the page)
  // Try network first to get fresh updates; if offline, return cached index.html immediately!
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const copy = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
          }
          return networkResponse;
        })
        .catch(() => {
          // OFFLINE FALLBACK: Return cached index.html
          return caches.match('/index.html') || caches.match('/');
        })
    );
    return;
  }

  // Strategy 2: All Static Assets (JS, CSS, images, icons, fonts)
  // Cache First, with automatic background revalidation and offline resilience
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // If found in cache, return it immediately
      if (cachedResponse) {
        // Asynchronously refresh cache in background if online
        fetch(event.request)
          .then((networkResponse) => {
            if (networkResponse && (networkResponse.status === 200 || networkResponse.type === 'opaque')) {
              caches.open(CACHE_NAME).then((cache) => cache.put(event.request, networkResponse));
            }
          })
          .catch(() => {
            // Ignore background fetch failure when offline
          });
        return cachedResponse;
      }

      // If not yet in cache, fetch from network and dynamically cache
      return fetch(event.request)
        .then((networkResponse) => {
          if (networkResponse && (networkResponse.status === 200 || networkResponse.type === 'opaque')) {
            const copy = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
          }
          return networkResponse;
        })
        .catch(() => {
          // Offline fallback for images
          if (event.request.destination === 'image') {
            return caches.match('/images/logo.webp') || caches.match('/icons/icon-192.png');
          }
          return new Response('Offline', { status: 503, statusText: 'Offline' });
        });
    })
  );
});
