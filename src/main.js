import { CONFIG } from './config.js';
import staticMenuData from './data/menu.json';
import deliveryData from './data/delivery.json';
// pnpm run build && firebase deploy

const logoImg = '/images/logo.webp';
let menuData = staticMenuData;

export function toPersianDigits(num) {
  if (num === null || num === undefined) return '';
  const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return num.toString().replace(/\d/g, (x) => farsiDigits[parseInt(x, 10)]);
}

let currentCategory = menuData.categories?.[0]?.id || '';
let searchQuery = '';
let searchActive = false;

const ICONS = {
  search: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>`,
  phone: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>`,
  scooter: `<svg class="w-6 h-6 -scale-x-100" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M14 9h4l4 4v5h-3"/><circle stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" cx="19" cy="18" r="2"/><circle stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" cx="7" cy="18" r="2"/></svg>`,
  instagram: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>`,
  clock: `<svg class="w-4 h-4 text-amber-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`,
  location: `<svg class="w-4 h-4 text-amber-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>`,
  close: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>`,
  menuIcon: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>`,
  infoIcon: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>`
};

function renderDeliveryArea(restaurant) {
  const { restaurantArea, snappfoodArea, neighborhoods, note } = deliveryData;
  return `
    <section id="delivery-area" class="delivery-card" aria-labelledby="delivery-title">
      <div class="delivery-heading">
        <div><span class="delivery-eyebrow">از رستوران آتیش تا منزل شما</span>
          <h2 id="delivery-title">محدوده ارسال</h2></div>
        <span class="delivery-approx">تقریبی</span>
      </div>
      <p class="delivery-intro">در حوالی ما هستید؟ راه‌های ارسال را اینجا ببینید.</p>
      <div class="delivery-map">
        <svg viewBox="0 0 520 420" role="img" aria-labelledby="delivery-map-title delivery-map-desc">
          <title id="delivery-map-title">نمای تقریبی محدوده ارسال آتیش در شمال تهران</title>
          <desc id="delivery-map-desc">دایره قرمز محدوده تقریبی پیک رستوران و دایره خط‌چین محدوده فرضی و متغیر اسنپ‌فود را نشان می‌دهد. این نقشه برای تأیید پوشش یک آدرس قابل استفاده نیست.</desc>
          <defs>
            <pattern id="delivery-grid" width="42" height="42" patternUnits="userSpaceOnUse"><path d="M42 0H0V42" fill="none" stroke="#ffffff" stroke-opacity=".025"/></pattern>
          </defs>
          <rect width="520" height="420" fill="#171a1c"/>
          <rect width="520" height="420" fill="url(#delivery-grid)"/>
          <g fill="#21342e" opacity=".65"><path d="M0 0H177L160 35 100 54 59 102 0 83Z"/><path d="M360 0H520V100L476 85 438 36Z"/><path d="M16 330L81 317 114 377 83 420H0Z"/></g>
          <g fill="none" stroke="#33383b" stroke-width="8" stroke-linecap="round" stroke-linejoin="round">
            <path d="M-20 120L126 103 251 119 390 93 545 117"/>
            <path d="M-20 255L102 229 213 249 340 234 545 267"/>
            <path d="M75 -10L108 110 148 220 145 335 190 440"/>
            <path d="M385 -20L359 107 381 221 345 330 372 440"/>
            <path d="M-10 362L140 339 274 353 411 333 535 352"/>
          </g>
          <g fill="none" stroke="#292e31" stroke-width="3"><path d="M0 177L520 163M0 304L520 295M217 0L221 420M301 0L286 420M455 0L468 420M45 0L51 420"/></g>
          <circle cx="${snappfoodArea.cx}" cy="${snappfoodArea.cy}" r="${snappfoodArea.radius}" fill="#d5c7b2" fill-opacity=".035" stroke="#b8b0a4" stroke-width="2" stroke-dasharray="7 8"/>
          <circle cx="${restaurantArea.cx}" cy="${restaurantArea.cy}" r="${restaurantArea.radius}" fill="#f05b62" fill-opacity=".12" stroke="#f05b62" stroke-width="2.5"/>
          <g class="delivery-place-labels">${neighborhoods.map(place => `<text x="${place.x}" y="${place.y}" text-anchor="middle">${place.name}</text>`).join('')}</g>
          <g transform="translate(260 210)"><circle r="27" fill="#f59e0b" fill-opacity=".12"/><circle r="15" fill="#ffc174" stroke="#171a1c" stroke-width="5"/><circle r="4" fill="#171a1c"/></g>
          <text x="260" y="252" class="delivery-brand-label" text-anchor="middle">آتیش</text>
          <text x="28" y="394" class="delivery-map-caption">نقشه تقریبی · بدون مقیاس</text>
        </svg>
      </div>
      <div class="delivery-legend">
        <div><span class="delivery-key delivery-key-direct" aria-hidden="true"></span><div><strong>پیک رستوران</strong><span>محدوده تقریبی ارسال مستقیم</span></div></div>
        <div><span class="delivery-key delivery-key-snapp" aria-hidden="true"></span><div><strong>اسنپ‌فود</strong><span>محدوده فرضی؛ پوشش آدرس متغیر است</span></div></div>
      </div>
      <p class="delivery-note">${note}</p>
      <div class="delivery-actions">
        <a href="tel:${restaurant.phone || CONFIG.phoneNumber}">تماس برای تأیید محدوده</a>
      </div>
    </section>`;
}

function renderApp() {
  const app = document.getElementById('app');
  if (!app) return;

  const restaurant = menuData?.restaurant || CONFIG;
  const categories = menuData?.categories || [];

  app.innerHTML = `
    <!-- Top Mini App Bar -->
    <header class="sticky top-0 z-40 glass-header border-b border-white/[0.06] px-4 py-3">
      <div class="max-w-xl mx-auto flex items-center justify-between">
        <div class="flex items-center gap-2.5">
          <div class="w-10 h-10 flex-shrink-0 drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]">
            <img 
              src="${logoImg}" 
              alt="${restaurant.name}" 
              class="w-full h-full object-contain"
            />
          </div>
          <div class="flex flex-col text-right">
            <div class="text-sm font-extrabold text-white tracking-tight leading-tight">
              ${restaurant.brandTitle || CONFIG.brandTitle}
            </div>
            <div class="text-[11px] text-amber-400 font-medium leading-tight">
              ${restaurant.brandSubtitle || CONFIG.brandSubtitle}
            </div>
          </div>
        </div>

        <button 
          id="toggle-search-btn" 
          aria-label="جستجو"
          class="w-9 h-9 rounded-full bg-[#201f21] border border-white/[0.08] hover:border-amber-400/50 flex items-center justify-center text-zinc-300 hover:text-white transition"
        >
          ${ICONS.search}
        </button>
      </div>

      <!-- Live Search Bar -->
      <div id="search-container" class="${searchActive ? '' : 'hidden'} max-w-xl mx-auto pt-3">
        <div class="relative">
          <span class="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-zinc-400">
            ${ICONS.search}
          </span>
          <input 
            type="text" 
            id="menu-search-input" 
            value="${searchQuery}"
            placeholder="جستجوی غذا، برگر، پیتزا یا ترکیبات..." 
            class="w-full bg-[#1b1b1d] border border-amber-500/40 text-white text-xs sm:text-sm rounded-xl pr-10 pl-9 py-2.5 focus:outline-none focus:ring-1 focus:ring-amber-500 placeholder-zinc-500"
          />
          <button 
            id="clear-search-btn" 
            class="${searchQuery ? '' : 'hidden'} absolute inset-y-0 left-0 pl-3 flex items-center text-zinc-400 hover:text-white"
          >
            ${ICONS.close}
          </button>
        </div>
      </div>
    </header>

    <div class="max-w-xl mx-auto px-4 pt-4 pb-36">
      <!-- Hero Restaurant Info Card -->
      <section class="bg-[#1b1b1d] border border-white/[0.08] rounded-2xl p-4 mb-5 relative overflow-hidden shadow-lg">
        <div class="absolute top-0 right-0 w-48 h-48 bg-orange-500/10 blur-[40px] rounded-full pointer-events-none"></div>

        <div class="flex items-center gap-3.5 relative z-10">
          <div class="relative flex-shrink-0 drop-shadow-[0_0_15px_rgba(245,158,11,0.3)]">
            <img 
              src="${logoImg}" 
              alt="${restaurant.name}" 
              class="w-16 h-16 object-contain"
            />
          </div>

          <div class="flex-grow text-right">
            <div class="flex items-center gap-2 mb-0.5">
              <h1 class="text-xl font-black text-white">${restaurant.name}</h1>
              <span class="inline-flex items-center gap-1 bg-[#2a2a2c] text-emerald-400 border border-emerald-500/30 text-[10px] font-bold px-2 py-0.5 rounded-full">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>${restaurant.statusBadge || CONFIG.statusBadge}</span>
              </span>
            </div>
            <p class="text-[11px] text-zinc-400 leading-snug font-light">${restaurant.tagline || CONFIG.tagline}</p>
            <p class="text-[10px] text-zinc-500 mt-1 flex items-center gap-1">
              <span class="text-amber-400">●</span>
              <span>${restaurant.statusNote || CONFIG.statusNote}</span>
            </p>
          </div>
        </div>
      </section>

      <!-- Sticky Category Filter Pills -->
      <nav class="category-nav sticky z-30 bg-[#0e0e10]/95 backdrop-blur-md -mx-4 px-4 py-2 border-b border-white/[0.06] mb-5">
        <div id="category-bar" class="flex items-center gap-2 overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing">
          ${categories.map(cat => {
            const isActive = currentCategory === cat.id;
            return `
              <button 
                data-category="${cat.id}" 
                class="cat-btn flex-shrink-0 px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 flex items-center gap-1.5 ${
                  isActive 
                    ? 'bg-gradient-to-r from-amber-400 to-orange-500 text-zinc-950 shadow-amber-pill' 
                    : 'bg-[#201f21] text-zinc-300 border border-white/[0.06] hover:bg-[#2a2a2c] hover:text-white'
                }"
              >
                <span>${cat.icon}</span>
                <span>${cat.name}</span>
              </button>
            `;
          }).join('')}
        </div>
      </nav>

      <!-- Main Feed Section -->
      <main id="menu-container"></main>

      <!-- Restaurant Info Card (Footer Section) -->
      <footer id="about-section" class="bg-[#1b1b1d] border border-white/[0.08] rounded-2xl p-4 mt-8 text-right shadow-lg">
        <div class="flex items-center gap-2 mb-3 pb-2 border-b border-white/[0.06]">
          <span class="text-base">🏛️</span>
          <h3 class="text-sm font-extrabold text-white">اطلاعات رستوران آتیش</h3>
        </div>

        <div class="flex flex-col gap-2.5 text-xs text-zinc-300">
          <div class="flex items-start gap-2">
            ${ICONS.clock}
            <div>
              <span class="text-zinc-400 font-normal">ساعات کاری:</span>
              <span class="text-zinc-200 font-medium mr-1">${toPersianDigits(restaurant.workingHours || CONFIG.workingHours)}</span>
            </div>
          </div>

          <div class="flex items-start gap-2">
            ${ICONS.location}
            <div>
              <span class="text-zinc-400 font-normal">آدرس:</span>
              <span class="text-zinc-200 font-medium mr-1">${toPersianDigits(restaurant.address || CONFIG.address)}</span>
            </div>
          </div>

          <div class="flex items-center justify-between pt-2 border-t border-white/[0.06] text-[11px] text-zinc-500">
            <span>طراحی شده برای اسکن سریع بارکد و منوی دیجیتال</span>
            <span class="text-orange-500">🔥 آتیش</span>
          </div>
        </div>
      </footer>

      ${renderDeliveryArea(restaurant)}
    </div>

    <nav class="contact-nav fixed bottom-0 left-0 right-0 z-40 glass-nav-bar border-t border-white/[0.08]" aria-label="دسترسی سریع">
      <div class="contact-nav-inner">
        <button id="nav-menu-btn" class="contact-nav-item contact-nav-menu">
          ${ICONS.menuIcon}<span>منو</span>
        </button>
        <a href="tel:${restaurant.phone || CONFIG.phoneNumber}" class="contact-nav-item contact-nav-call" aria-label="تماس تلفنی با آتیش">
          ${ICONS.phone}<span>تماس</span>
        </a>
        <a href="${restaurant.snappfoodUrl || CONFIG.snappfoodUrl}" target="_blank" rel="noopener noreferrer" class="contact-nav-item contact-nav-snapp" aria-label="سفارش از اسنپ‌فود">
          ${ICONS.scooter}<span>اسنپ‌فود</span>
        </a>
        <a href="https://instagram.com/atishfood" target="_blank" rel="noopener noreferrer" class="contact-nav-item contact-nav-instagram" aria-label="اینستاگرام آتیش">
          ${ICONS.instagram}<span>اینستاگرام</span>
        </a>
      </div>
    </nav>

  `;

  setupEventListeners();
  renderMenuItems();
}

function setupEventListeners() {
  const toggleSearchBtn = document.getElementById('toggle-search-btn');
  const searchContainer = document.getElementById('search-container');
  const searchInput = document.getElementById('menu-search-input');
  const clearBtn = document.getElementById('clear-search-btn');

  if (toggleSearchBtn && searchContainer) {
    toggleSearchBtn.addEventListener('click', () => {
      searchActive = !searchActive;
      searchContainer.classList.toggle('hidden', !searchActive);
      if (searchActive && searchInput) searchInput.focus();
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
      if (clearBtn) clearBtn.classList.toggle('hidden', searchQuery.length === 0);
      renderMenuItems();
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      searchQuery = '';
      clearBtn.classList.add('hidden');
      renderMenuItems();
    });
  }

  const catButtons = document.querySelectorAll('.cat-btn');
  catButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      catButtons.forEach(b => {
        b.className = 'cat-btn flex-shrink-0 px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 flex items-center gap-1.5 bg-[#201f21] text-zinc-300 border border-white/[0.06] hover:bg-[#2a2a2c] hover:text-white';
      });
      btn.className = 'cat-btn flex-shrink-0 px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 flex items-center gap-1.5 bg-gradient-to-r from-amber-400 to-orange-500 text-zinc-950 shadow-amber-pill';

      if (searchQuery) {
        searchQuery = '';
        if (searchInput) searchInput.value = '';
        clearBtn?.classList.add('hidden');
        renderMenuItems();
      }
      currentCategory = btn.dataset.category;
      const targetSec = document.getElementById(`sec-${currentCategory}`);
      if (targetSec) {
        const headerHeight = document.querySelector('header').getBoundingClientRect().height;
        const categoryNav = slider.closest('nav');
        const offset = headerHeight + categoryNav.getBoundingClientRect().height + 12;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = targetSec.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
      }
    });
  });

  const header = document.querySelector('header');
  if (header) {
    const updateHeaderHeight = () => {
      document.documentElement.style.setProperty('--header-height', `${header.getBoundingClientRect().height}px`);
    };
    new ResizeObserver(updateHeaderHeight).observe(header);
    updateHeaderHeight();
  }

  // Drag to scroll for desktop testing
  const slider = document.getElementById('category-bar');
  let isDown = false, startX, scrollLeft;
  
  if (slider) {
    slider.addEventListener('mousedown', (e) => { 
      isDown = true; 
      startX = e.pageX - slider.offsetLeft; 
      scrollLeft = slider.scrollLeft; 
    });
    slider.addEventListener('mouseleave', () => isDown = false);
    slider.addEventListener('mouseup', () => isDown = false);
    slider.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      slider.scrollLeft = scrollLeft - ((e.pageX - slider.offsetLeft) - startX) * 2;
    });
  }

  document.getElementById('nav-menu-btn')?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });




}

function renderMenuItems() {
  const container = document.getElementById('menu-container');
  if (!container || !menuData) return;

  const categories = menuData.categories || [];
  let items = menuData.items || [];

  if (searchQuery) {
    items = items.filter(item => {
      const matchTitle = item.title.toLowerCase().includes(searchQuery);
      const matchIng = item.ingredients && item.ingredients.toLowerCase().includes(searchQuery);
      return matchTitle || matchIng;
    });

    if (items.length === 0) {
      container.innerHTML = `
        <div class="flex flex-col items-center justify-center py-16 text-center text-zinc-500">
          <span class="text-4xl mb-3">🔍</span>
          <p class="text-sm font-bold text-zinc-300">موردی یافت نشد!</p>
          <p class="text-xs text-zinc-500 mt-1">لطفاً عبارت دیگری را جستجو کنید.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = `
      <div class="grid grid-cols-2 gap-3">
        ${items.map(item => renderCompactCard(item)).join('')}
      </div>
    `;
    return;
  }

  container.innerHTML = categories.map(category => {
    const categoryItems = items.filter(i => i.categoryId === category.id);
    if (categoryItems.length === 0) return '';

    return `
      <section class="mb-8 scroll-mt-28" id="sec-${category.id}">
        <div class="flex items-center justify-between mb-3.5 pb-2 border-b border-white/[0.06]">
          <div class="flex flex-col text-right">
            <h2 class="text-base font-extrabold text-white flex items-center gap-1.5">
              <span>${category.icon}</span>
              <span>${category.title || category.name}</span>
            </h2>
            ${category.subtitle ? `<span class="text-[11px] text-zinc-400 font-light mt-0.5">${category.subtitle}</span>` : ''}
          </div>
          <span class="bg-[#201f21] text-zinc-400 border border-white/[0.06] text-[10px] font-bold px-2.5 py-1 rounded-full flex-shrink-0">
            ${toPersianDigits(categoryItems.length)} آیتم
          </span>
        </div>

        ${category.id === 'family-pizzas' && categoryItems.length === 1
          ? renderFamilyCard(categoryItems[0])
          : `<div class="grid grid-cols-2 gap-3">
              ${categoryItems.map(item => renderCompactCard(item)).join('')}
            </div>`}
      </section>
    `;
  }).join('');

}

function renderFamilyCard(item) {
  return `
    <article class="food-card family-pizza-card">
      <div class="family-pizza-photo relative overflow-hidden">
        ${renderFoodPhoto(item)}
      </div>
      <div class="family-pizza-copy">
        <h3>${item.title}</h3>
        <p>ترکیبی از طعم‌های مختلف</p>
      </div>
    </article>
  `;
}

function renderCompactCard(item) {
  return `
    <article class="food-card bg-[#1b1b1d] border border-white/[0.06] rounded-2xl flex flex-col overflow-hidden shadow-sm text-center">
      <div class="food-photo-frame compact-photo-frame relative w-full bg-[#2a2a2c] border-b border-white/[0.06] flex items-center justify-center overflow-hidden flex-shrink-0">
        ${renderFoodPhoto(item)}
      </div>
      <div class="px-2.5 py-2 flex items-center justify-center flex-grow min-h-[48px]">
        <h3 class="text-xs sm:text-sm font-bold text-white leading-snug w-full">${item.title}</h3>
      </div>
    </article>
  `;
}

function renderFoodPhoto(item) {
  return item.image ? `
    <img src="${item.image}" alt="${item.title}" loading="lazy" class="absolute inset-0 w-full h-full object-contain" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';" />
    <span style="display: none;" class="absolute inset-0 items-center justify-center text-4xl" aria-hidden="true">${item.placeholderIcon || '🍔'}</span>
  ` : `<span class="text-5xl opacity-90" aria-hidden="true">${item.placeholderIcon || '🍔'}</span>`;
}

renderApp();
