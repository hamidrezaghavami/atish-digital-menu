import { CONFIG } from './config.js';
import staticMenuData from './data/menu.json';
import logoImg from './assets/logo.png';

let menuData = staticMenuData;

export function toPersianDigits(num) {
  if (num === null || num === undefined) return '';
  const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return num.toString().replace(/\d/g, (x) => farsiDigits[parseInt(x, 10)]);
}

export function formatPrice(price) {
  if (!price && price !== 0) return '';
  const formatted = price.toLocaleString('en-US');
  const currency = menuData?.restaurant?.currency || CONFIG.currency;
  return `${toPersianDigits(formatted)} ${currency}`;
}

let currentCategory = 'burgers';
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
  specialsIcon: `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.527.82-1.11 2.01-1.729 3.49-.607 1.45-1.25 3.09-1.994 4.54a17.7 17.7 0 01-1.493 2.455c-.274.37-.565.733-.872 1.077a5.526 5.526 0 00-1.282 3.52c0 3.037 2.463 5.5 5.5 5.5s5.5-2.463 5.5-5.5c0-1.282-.44-2.464-1.182-3.414a16.89 16.89 0 00-1.572-1.748c-.687-.67-1.393-1.32-2.025-2.04-.543-.618-.99-1.332-1.3-2.12-.224-.567-.34-1.18-.344-1.815 0-.583.104-1.144.3-1.66.196-.514.48-1 .838-1.41.357-.41.79-.757 1.28-1.01a1 1 0 00.386-1.36z" clip-rule="evenodd"/></svg>`,
  infoIcon: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>`
};

function renderApp() {
  const app = document.getElementById('app');
  if (!app) return;

  const restaurant = menuData?.restaurant || CONFIG;
  const categories = menuData?.categories || [];

  app.innerHTML = `
    <!-- Top Mini App Bar -->
    <header class="sticky top-0 z-40 glass-header border-b border-white/[0.06] px-4 py-3">
      <div class="max-w-xl mx-auto flex items-center justify-between">
        <!-- Right: Logo & Title -->
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

        <!-- Left: Search Button -->
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
      <nav class="sticky top-[58px] z-30 bg-[#0e0e10]/95 backdrop-blur-md -mx-4 px-4 py-2 border-b border-white/[0.06] mb-5">
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
    </div>

    <!-- Floating Action Bubbles (FABs) -->
    <aside class="fixed bottom-20 right-4 z-40 flex flex-col gap-3 items-end">
      <!-- FAB 3: Instagram Button -->
      <a 
        href="https://instagram.com/atishfood" 
        target="_blank" 
        rel="noopener noreferrer" 
        title="اینستاگرام آتیش"
        class="fab-bounce w-13 h-13 p-3.5 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white shadow-[0_0_15px_rgba(220,39,67,0.4)] flex items-center justify-center focus:outline-none"
      >
        ${ICONS.instagram}
      </a>

      <!-- FAB 2: SnappFood Pink Button -->
      <a 
        href="${restaurant.snappfoodUrl || CONFIG.snappfoodUrl}" 
        target="_blank" 
        rel="noopener noreferrer" 
        title="سفارش آنلاین از اسنپ‌فود"
        class="fab-bounce w-13 h-13 p-3.5 rounded-full bg-[#FF00A6] hover:bg-[#e00092] text-white shadow-fab-pink flex items-center justify-center focus:outline-none"
      >
        ${ICONS.scooter}
      </a>

      <!-- FAB 1: Call Green Button -->
      <a 
        href="tel:${restaurant.phone || CONFIG.phoneNumber}" 
        title="تماس تلفنی با آتیش"
        class="fab-bounce w-13 h-13 p-3.5 rounded-full bg-[#22C55E] hover:bg-[#16a34a] text-white shadow-fab-green flex items-center justify-center focus:outline-none"
      >
        ${ICONS.phone}
      </a>
    </aside>

    <!-- Bottom Navigation Bar -->
    <nav class="fixed bottom-0 left-0 right-0 z-40 glass-nav-bar border-t border-white/[0.08] h-16">
      <div class="max-w-xl mx-auto h-full grid grid-cols-3">
        <button id="nav-menu-btn" class="flex flex-col items-center justify-center gap-1 text-amber-400 transition">
          ${ICONS.menuIcon}
          <span class="text-[10px] font-bold">منو</span>
        </button> 

        <button id="nav-about-btn" class="flex flex-col items-center justify-center gap-1 text-zinc-400 hover:text-amber-400 transition">
          ${ICONS.infoIcon}
          <span class="text-[10px] font-bold">درباره ما</span>
        </button>
      </div>
    </nav>

    <!-- Modal for Item Details -->
    <div id="item-modal" style="display: none;" class="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4 transition-opacity duration-300 opacity-0">
      <div id="modal-content" class="w-full max-w-lg bg-[#18181c] border-t sm:border border-white/[0.08] rounded-t-3xl sm:rounded-2xl max-h-[90vh] overflow-y-auto transform translate-y-full sm:translate-y-0 transition-transform duration-300">
      </div>
    </div>
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

      currentCategory = btn.dataset.category;
      const targetSec = document.getElementById(`sec-${currentCategory}`);
      if (targetSec) {
        const offset = 120;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = targetSec.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
      }
    });
  });

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

  document.getElementById('nav-specials-btn')?.addEventListener('click', () => {
    const featuredCard = document.querySelector('.hero-featured-card');
    if (featuredCard) featuredCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });

  document.getElementById('nav-about-btn')?.addEventListener('click', () => {
    const aboutSec = document.getElementById('about-section');
    if (aboutSec) aboutSec.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });

  const modal = document.getElementById('item-modal');
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }
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
      <div class="flex items-center justify-center gap-24">
        ${items.map(item => renderCompactCard(item)).join('')}
      </div>
    `;
    attachCardListeners();
    return;
  }

  container.innerHTML = categories.map(category => {
    const categoryItems = items.filter(i => i.categoryId === category.id);
    if (categoryItems.length === 0) return '';

    const featuredItem = categoryItems.find(i => i.isFeatured);
    const regularItems = categoryItems.filter(i => !i.isFeatured);

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

        <div class="flex flex-col gap-3 mb-3">
          ${featuredItem ? renderFeaturedCard(featuredItem) : ''}
        </div>
        
        ${regularItems.length > 0 ? `
        <div class="flex items-center justify-center gap-24">
          ${regularItems.map(item => renderCompactCard(item)).join('')}
        </div>
        ` : ''}
      </section>
    `;
  }).join('');

  attachCardListeners();
}

function renderFeaturedCard(item) {
  const hasImage = Boolean(item.image);

  return `
    <article data-id="${item.id}" class="hero-featured-card food-card bg-[#1b1b1d] border border-white/[0.06] rounded-2xl overflow-hidden cursor-pointer shadow-lg group text-right flex flex-col">
      <div class="relative w-full h-48 sm:h-56 bg-[#201f21] overflow-hidden flex flex-col items-center justify-center">
        ${hasImage ? `
          <img src="${item.image}" alt="${item.title}" loading="lazy" class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';" />
          <div class="absolute inset-0 bg-gradient-to-t from-[#1b1b1d] via-[#1b1b1d]/20 to-transparent pointer-events-none"></div>
          <div style="display: none;" class="w-full h-full items-center justify-center bg-[#201f21] text-4xl text-amber-500/50">${item.placeholderIcon || '🍔'}</div>
        ` : `
          <span class="text-5xl mb-2 opacity-90">${item.placeholderIcon || '🍔'}</span>
          <span class="text-[11px] text-zinc-500 font-mono tracking-wider">[عکس غذای ویژه آتیش]</span>
        `}

        ${item.tag ? `<span class="absolute top-3 right-3 bg-red-600 text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md z-10">${item.tag}</span>` : ''}

        ${item.price ? `
        <div class="absolute bottom-3 left-3 bg-[#0e0e10]/85 border border-amber-500/40 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-lg z-10">
          <span class="text-xs font-black text-amber-400">${formatPrice(item.price)}</span>
        </div>
        ` : ''}
      </div>

      <div class="p-4 relative z-10 text-center">
        <h3 class="text-base font-extrabold text-white group-hover:text-amber-400 transition-colors">${item.title}</h3>
        ${item.badge ? `<span class="inline-flex text-amber-400 text-xs font-bold items-center gap-1 mt-1">${item.badge}</span>` : ''}
        ${item.ingredients ? `<p class="text-xs text-zinc-400 mt-2 leading-relaxed font-light">${toPersianDigits(item.ingredients)}</p>` : ''}
      </div>
    </article>
  `;
}

function renderCompactCard(item) {
  const hasImage = Boolean(item.image);

  return `
    <article data-id="${item.id}" class="food-card bg-[#1b1b1d] border border-white/[0.06] hover:border-amber-500/30 rounded-2xl flex flex-col overflow-hidden cursor-pointer transition shadow-sm text-center group">
      <div class="relative w-full aspect-square bg-[#2a2a2c] border-b border-white/[0.06] flex items-center justify-center overflow-hidden">
        ${hasImage ? `
          <img src="${item.image}" alt="${item.title}" loading="lazy" class="w-full h-full object-cover group-hover:scale-105 transition duration-300" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';" />
          <span class="hidden text-4xl">${item.placeholderIcon || '🍔'}</span>
        ` : `
          <span class="text-4xl opacity-90">${item.placeholderIcon || '🍔'}</span>
        `}
        ${item.tag ? `<span class="absolute top-2 right-2 bg-red-950/80 backdrop-blur-sm text-red-400 border border-red-500/30 text-[10px] font-bold px-2 py-0.5 rounded-md z-10">${item.tag}</span>` : ''}
      </div>

      <div class="p-3 flex flex-col items-center justify-center min-h-[56px]">
        <h3 class="text-xs sm:text-sm font-bold text-white group-hover:text-amber-400 transition-colors line-clamp-2 leading-tight w-full">${item.title}</h3>
        ${item.ingredients ? `<p class="text-[10px] text-zinc-400 line-clamp-1 mt-1 font-light w-full">${toPersianDigits(item.ingredients)}</p>` : ''}
        ${item.price ? `<span class="text-xs font-black text-amber-400 mt-1.5">${formatPrice(item.price)}</span>` : ''}
      </div>
    </article>
  `;
}

function attachCardListeners() {
  document.querySelectorAll('.food-card').forEach(card => {
    card.addEventListener('click', () => {
      const itemId = card.dataset.id;
      const item = menuData?.items?.find(i => i.id === itemId);
      if (item) openModal(item);
    });
  });
}

function openModal(item) {
  const modal = document.getElementById('item-modal');
  const modalContent = document.getElementById('modal-content');
  if (!modal || !modalContent) return;

  const restaurant = menuData?.restaurant || CONFIG;
  const hasImage = Boolean(item.image);

  modalContent.innerHTML = `
    <div class="relative text-right">
      <button id="close-modal-btn" class="absolute top-4 left-4 z-20 bg-black/70 hover:bg-black text-white p-2 rounded-full backdrop-blur-md transition">
        ${ICONS.close}
      </button>

      <div class="relative w-full h-56 sm:h-64 bg-[#201f21] overflow-hidden">
        ${hasImage ? `
          <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';" />
          <div style="display: none;" class="w-full h-full items-center justify-center bg-[#201f21] text-5xl">${item.placeholderIcon || '🍔'}</div>
        ` : `
          <div class="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#2a2a2c] to-[#18181c]">
            <span class="text-6xl mb-2 opacity-90">${item.placeholderIcon || '🍔'}</span>
            <span class="text-xs text-zinc-500 font-mono">[محل قرارگیری عکس غذا]</span>
          </div>
        `}
        <div class="absolute inset-0 bg-gradient-to-t from-[#18181c] via-transparent to-black/30"></div>
      </div>

      <div class="p-5 sm:p-6 -mt-6 relative z-10 bg-[#18181c] rounded-t-3xl sm:rounded-none">
        <div class="flex items-center justify-between gap-2 mb-2">
          <div class="flex items-center gap-1.5">
            ${item.tag ? `<span class="bg-red-600/90 text-white text-xs font-bold px-2.5 py-1 rounded-md">${item.tag}</span>` : ''}
            ${item.badge ? `<span class="text-amber-400 text-xs font-bold">${item.badge}</span>` : ''}
          </div>
        </div>

        <h2 class="text-xl font-black text-white mb-2">${item.title}</h2>

        ${item.ingredients ? `
        <div class="my-4 p-3.5 bg-[#201f21] border border-white/[0.06] rounded-xl">
          <h4 class="text-xs font-bold text-zinc-300 mb-1.5 flex items-center gap-1">
            <span>🥗 ترکیبات و محتویات:</span>
          </h4>
          <p class="text-xs text-zinc-300 leading-relaxed">${toPersianDigits(item.ingredients)}</p>
        </div>
        ` : ''}

        ${item.price ? `
        <div class="flex items-center justify-between py-3 border-y border-white/[0.06] my-4">
          <span class="text-xs text-zinc-400">قیمت واحد:</span>
          <span class="text-base font-black text-amber-400">${formatPrice(item.price)}</span>
        </div>
        ` : ''}

        <div class="grid grid-cols-2 gap-3 mt-4">
          <a href="tel:${restaurant.phone || CONFIG.phoneNumber}" class="flex items-center justify-center gap-2 bg-[#22C55E] hover:bg-[#16a34a] text-white py-3 px-4 rounded-xl text-xs font-bold transition shadow-fab-green">
            ${ICONS.phone}
            <span>سفارش تلفنی</span>
          </a>
          <a href="${restaurant.snappfoodUrl || CONFIG.snappfoodUrl}" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center gap-2 bg-[#FF00A6] hover:bg-[#e00092] text-white py-3 px-4 rounded-xl text-xs font-bold transition shadow-fab-pink">
            ${ICONS.scooter}
            <span>اسنپ‌فود</span>
          </a>
        </div>
      </div>
    </div>
  `;

  modal.style.display = 'flex';
  setTimeout(() => {
    modal.classList.remove('opacity-0');
    modalContent.classList.remove('translate-y-full');
  }, 10);

  document.getElementById('close-modal-btn')?.addEventListener('click', closeModal);
}

function closeModal() {
  const modal = document.getElementById('item-modal');
  const modalContent = document.getElementById('modal-content');
  if (!modal || !modalContent) return;

  modal.classList.add('opacity-0');
  modalContent.classList.add('translate-y-full');
  
  setTimeout(() => {
    modal.style.display = 'none';
  }, 300);
}

renderApp();