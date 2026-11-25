const CACHE_NAME = 'atish-menu-v23';

// Core shell assets to pre-cache immediately on install
const PRECACHE_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icons/icon-192.png',
  '/icons/icon-512.png',
  '/icons/apple-touch-icon.png',
  '/images/logo.webp',
  '/images/atish-hero-3d.jpg',
  '/images/atish-burger.jpg'
];

// Menu food thumbnails to warm into offline CacheStorage in background (ultralight ~25KB each)
const MENU_IMAGES = [
  "/images/thumbs/Makhsos-American.webp",
  "/images/thumbs/heart-normal.webp",
  "/images/thumbs/Peperoni-American-Pizza.webp",
  "/images/thumbs/heart-peperoni.webp",
  "/images/thumbs/Chicken-American-Pizza.webp",
  "/images/thumbs/meat-American-Pizza.webp",
  "/images/thumbs/Sabzi-American.webp",
  "/images/thumbs/american-Sosis-mashroom.webp",
  "/images/thumbs/Mashroom-Pizza.webp",
  "/images/thumbs/4F-Family.webp",
  "/images/thumbs/Atish-Italian.webp",
  "/images/thumbs/Peperoni-Italian.webp",
  "/images/thumbs/Chicken-Italian.webp",
  "/images/thumbs/Steak-Italian-Pizza.webp",
  "/images/thumbs/burger.webp",
  "/images/thumbs/cheese-burger.webp",
  "/images/thumbs/mashroom-burger.webp",
  "/images/thumbs/double-cheese-burger.webp",
  "/images/thumbs/double-burger.webp",
  "/images/thumbs/double-Mashroom-burger.webp",
  "/images/thumbs/atish-burger.webp",
  "/images/thumbs/Zinger.webp",
  "/images/thumbs/Giril.webp",
  "/images/thumbs/RoastBeef.webp",
  "/images/thumbs/file.webp",
  "/images/thumbs/jambon-sandwhich.webp",
  "/images/thumbs/Hotdog.webp",
  "/images/thumbs/Crispy-Chicken-Tenders.webp",
  "/images/thumbs/4-Crispe.webp",
  "/images/thumbs/Mashroom.webp",
  "/images/thumbs/French-Fries.webp",
  "/images/thumbs/Fries-Special.webp",
  "/images/thumbs/Big-Coke.webp",
  "/images/thumbs/Coke.webp",
  "/images/thumbs/Delester.webp",
  "/images/thumbs/Dogh.webp",
  "/images/thumbs/Water.webp"
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      await cache.addAll(PRECACHE_ASSETS);
      // Background pre-fetch of all menu food images into cache
      MENU_IMAGES.forEach((img) => {
        cache.add(img).catch(() => {});
      });
    })
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
