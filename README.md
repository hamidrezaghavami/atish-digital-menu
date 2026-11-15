# 🔥 Atish Digital Menu & Delivery WebApp | منوی دیجیتال فست‌فود آتیش

[![Live Demo](https://img.shields.io/badge/Live%20Demo-atishfood--digital--menu.web.app-ff5722?style=for-the-badge&logo=firebase&logoColor=white)](https://atishfood-digital-menu.web.app/)
[![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-3.x-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![PWA](https://img.shields.io/badge/PWA-Offline%20Ready-5A0FC8?style=for-the-badge&logo=pwa&logoColor=white)](https://web.dev/progressive-web-apps/)
[![Frontend Only](https://img.shields.io/badge/Architecture-100%25%20Client--Side-brightgreen?style=for-the-badge)](https://atishfood-digital-menu.web.app/)

A modern, ultra-fast, mobile-first **Progressive Web Application (PWA)** built for **Atish Fast Food & Grill** (فست‌فود و گریل آتیش) located in Darrous / Dowlat, Tehran. 

Designed for instant QR code scanning at tables, delivery box packaging, and online customers, delivering a native-app feel with **100% pure client-side frontend architecture** and zero backend dependencies.

---

## 🌟 Key Features

### 🍔 1. Interactive 3D Burger Anatomy
* An interactive exploded-layer exploration of the signature **Atish Burger**.
* Highlights authentic preparation: **Lincoln conveyor oven**, handcrafted sesame bun, 100% pure beef patty, melted Gouda cheese, sautéed mushrooms & onions, and secret house sauce (strictly no bacon).
* Fully accessible with smooth step-by-step layer exploration.

### 🍕 2. Full Categorized Menu with Shape Swapper
* Categorized navigation: American Window Pizzas, Family Pizzas, Italian Thin Crust, Gourmet Burgers, Sandwiches, Fried Chicken, Appetizers, and Beverages.
* **Dual-Shape Swapper**: Seamless switching between Classic Rectangle and Heart-Shaped (طرح قلبی ❤️) pizzas with synchronized photos and indicators.
* **Chef's Recommendation (⭐ پیشنهاد سرآشپز)**: Exclusive glowing badges highlighting flagship customer favorites.

### 🔍 3. Pure Frontend Instant Live Search
* Instant, zero-latency search running 100% client-side.
* **Persian Character Normalization**: Handles character variations (`ی`/`ي`, `ک`/`ك`, `آ`/`ا`, half-spaces) automatically.
* Real-time result counter with quick clear (`✕`) button and auto-scroll to results.

### 🛵 4. Smart Delivery Radar Map
* Interactive visual radar map covering North Tehran neighborhoods.
* **Single Contextual Action Button Logic**:
  * **Direct Restaurant Courier (`zone: 'direct'`)**: Displays solely the **Green Direct Call Button** (`۰۲۱-۲۲۵۶۱۹۴۹`) with neighborhood-specific delivery timelines (Dowlat, Ekhtiarieh, Dibaji, Darrous, Pasdaran, Gholhak).
  * **Express / Extended Courier (`zone: 'express'`)**: Switches completely to the **Pink Snappfood Button** (Tajrish, Qeytarieh, Niavaran, Heravi, Seyedkhandan).
  * Never displays duplicate or conflicting buttons.

### 📋 5. Client-Side Order Tray (پیش‌فاکتور)
* Customers can assemble an order, adjust quantities with tactile `+` / `−` controls, or delete items.
* **Smart Order Copy**: Generates a clean, copyable Persian text summary of the order ready for phone or SMS ordering without messaging clutter.

### 📲 6. Progressive Web App (PWA) & Offline Support
* **Installable**: One-tap "Add to Home Screen" as a standalone web app on iOS and Android.
* **Offline-First**: Service worker precaches app shell and dynamically caches food imagery and assets, allowing the menu to function without internet connection.
* High-resolution, balanced flame emblem app icon (`icon-192.png`, `icon-512.png`, `apple-touch-icon.png`).

---

## 🏛️ Architecture & Tech Stack

```text
atish-digital-menu/
├── index.html                  # HTML5 Shell with PWA manifest & Vazirmatn font
├── public/
│   ├── sw.js                   # Service Worker (offline precaching & runtime asset cache)
│   ├── manifest.json           # Web App Manifest for mobile installation
│   ├── icon-192.png            # PWA home screen icon (192x192)
│   ├── icon-512.png            # PWA splash & store icon (512x512)
│   └── images/                 # WebP optimized food photography & assets
├── src/
│   ├── data/
│   │   ├── menu.json           # Menu database: categories, items, shapes, ingredients, rating
│   │   └── delivery.json       # Delivery radar coordinates, zones, badges, and timelines
│   ├── config.js               # Global configuration constants
│   ├── main.js                 # Complete application logic (routing, search, tray, radar, modals)
│   └── style.css               # Glassmorphism, animations, custom scrollbars, and Tailwind directives
├── dist/                       # Production bundle (auto-deployed to Firebase Hosting)
├── firebase.json               # Firebase Hosting rewrite rules
├── .firebaserc                 # Firebase project binding (`atishfood-digital-menu`)
└── .github/workflows/          # CI/CD: Automated deployment on push to `main`
```

* **Build Tool**: [Vite](https://vitejs.dev/) (fast HMR and optimized asset bundling)
* **CSS Framework**: [Tailwind CSS](https://tailwindcss.com/) (custom glassmorphism & responsive layouts)
* **Typography**: [Vazirmatn](https://github.com/rastikerdar/vazirmatn) (Persian typography)
* **Hosting & CDN**: [Firebase Hosting](https://firebase.google.com/docs/hosting) with global CDN edge caching.
* **CI/CD**: GitHub Actions deploying to Firebase Hosting on every commit to `main`.

---

## 📍 Restaurant Information

* **Name**: فست‌فود و گریل آتیش (Atish Pizza & Gourmet Burgers)
* **Location**: خیابان دولت تهران، محله دروس، خیابان کلاهدوز (دولت)، روبه‌روی بانک ملت بین کوچه خرداد و معتمدی، پلاک ۱۰۰
* **Phone**: `۰۲۱-۲۲۵۶۱۹۴۹` (`02122561949`)
* **Snappfood Rating**: ⭐ **۴.۴**
* **Snappfood Menu**: [پیتزا آتیش در اسنپ‌فود](https://snappfood.ir/restaurant/menu/پیتزا_آتیش-r-p44gzx/)
* **Instagram**: [@atishfood](https://instagram.com/atishfood)
* **Working Hours**: همه روزه از ۱۱:۳۰ صبح الی ۲۳:۱۵ شب

---

## 💻 Local Development & Build

### Prerequisites
* **Node.js**: `v20+` or `v22+`
* **Package Manager**: `pnpm` (or `npm`)

### 1. Clone the repository
```bash
git clone https://github.com/hamidrezaghavami/atish-digital-menu.git
cd atish-digital-menu
```

### 2. Install dependencies
```bash
pnpm install
```

### 3. Start local development server
```bash
pnpm dev
# Server runs on http://localhost:5173/
```

### 4. Build for production
```bash
pnpm build
```
The compiled, minified bundle is placed in `dist/`.

### 5. Preview production build locally
```bash
pnpm preview --port 4173
```

---

## 🚀 Deployment

### Automated Deployment (GitHub Actions)
Any commit or pull request merged into `main` automatically triggers `.github/workflows/firebase-hosting-merge.yml`, building the project and deploying to **Firebase Hosting** within seconds.

### Manual Firebase Deploy
```bash
# Login to Firebase
npx firebase login

# Deploy directly to live hosting channel
npx firebase deploy --only hosting
```

---

## 🔒 Security & Performance

* **Zero Backend Attack Surface**: No server routes, SQL injections, or database vulnerabilities.
* **Safe External Links**: Strict `target="_blank" rel="noopener noreferrer"` on all outbound links (Snappfood, Instagram, Maps).
* **High Core Web Vitals**:
  * Sub-200ms Largest Contentful Paint (LCP)
  * Optimized WebP imagery with native lazy loading
  * Minimal JavaScript footprint (~22 KB gzipped)

---

## 📄 License
Private repository for **Atish Fast Food & Grill**. All rights reserved.
