const CACHE_NAME = 'atish-menu-v4';

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

// Menu food pictures to warm into offline CacheStorage in background
const MENU_IMAGES = [
  "/images/Makhsos-American.webp",
  "/images/heart-normal.webp",
  "/images/Peperoni-American-Pizza.webp",
  "/images/heart-peperoni.webp",
  "/images/Chicken-American-Pizza.webp",
  "/images/meat-American-Pizza.webp",
  "/images/Sabzi-American.webp",
  "/images/american-Sosis-mashroom.webp",
  "/images/Mashroom-Pizza.webp",
  "/images/4F-Family.webp",
  "/images/Atish-Italian.webp",
  "/images/Peperoni-Italian.webp",
  "/images/Chicken-Italian.webp",
  "/images/Steak-Italian-Pizza.webp",
  "/images/burger.webp",
  "/images/cheese-burger.webp",
  "/images/mashroom-burger.webp",
  "/images/double-cheese-burger.webp",
  "/images/double-burger.webp",
  "/images/double-Mashroom-burger.webp",
  "/images/atish-burger.webp",
  "/images/Zinger.webp",
  "/images/Giril.webp",
  "/images/RoastBeef.webp",
  "/images/file.webp",
  "/images/jambon-sandwhich.webp",
  "/images/Hotdog.webp",
  "/images/Crispy-Chicken-Tenders.webp",
  "/images/4-Crispe.webp",
  "/images/Mashroom.webp",
  "/images/French-Fries.webp",
  "/images/Fries-Special.webp",
  "/images/Big-Coke.webp",
  "/images/Coke.webp",
  "/images/Delester.webp",
  "/images/Dogh.webp",
  "/images/Water.webp"
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
