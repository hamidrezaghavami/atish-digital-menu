import { CONFIG } from './config.js';
import staticMenuData from './data/menu.json';
import deliveryData from './data/delivery.json';

const logoImg = '/images/logo.webp';
let menuData = staticMenuData;

// State management
let currentCategory = menuData.categories?.[0]?.id || 'american-pizzas';
let searchQuery = '';
let searchActive = false;
let orderTray = JSON.parse(localStorage.getItem('atish_order_tray') || '{}');
let activeAnatomyLayer = 3;
let selectedNeighborhoodId = 'darrous';
let deferredInstallPrompt = null;

// Convert numbers to Persian digits
export function toPersianDigits(num) {
  if (num === null || num === undefined) return '';
  const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return num.toString().replace(/\d/g, (x) => farsiDigits[parseInt(x, 10)]);
}

// Persian text normalization for robust instant search
export function normalizePersianText(str) {
  if (!str) return '';
  return String(str)
    .toLowerCase()
    .replace(/[ي]/g, 'ی')
    .replace(/[ك]/g, 'ک')
    .replace(/[آأإ]/g, 'ا')
    .replace(/[ؤ]/g, 'و')
    .replace(/[ة]/g, 'ه')
    .replace(/[\u200c\s]+/g, ' ')
    .trim();
}

export function escapeHtml(str) {
  if (!str) return '';
  return String(str).replace(/[&<>"']/g, m => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  })[m]);
}

// Total items in tray
function getTrayTotalCount() {
  return Object.values(orderTray).reduce((acc, count) => acc + count, 0);
}

// Save tray to storage
function saveTray() {
  localStorage.setItem('atish_order_tray', JSON.stringify(orderTray));
  updateTrayUI();
}

// Icons dictionary
const ICONS = {
  search: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>`,
  phone: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>`,
  scooter: `<svg class="w-5 h-5 -scale-x-100" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M14 9h4l4 4v5h-3"/><circle stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" cx="19" cy="18" r="2"/><circle stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" cx="7" cy="18" r="2"/></svg>`,
  instagram: `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>`,
  clock: `<svg class="w-4 h-4 text-amber-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`,
  location: `<svg class="w-4 h-4 text-amber-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>`,
  close: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M6 18L18 6M6 6l12 12"/></svg>`,
  menuIcon: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M4 6h16M4 12h16M4 18h16"/></svg>`,
  tray: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/></svg>`,
  plus: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 4v16m8-8H4"/></svg>`,
  minus: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M20 12H4"/></svg>`,
  trash: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>`,
  layers: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>`,
  copy: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"/></svg>`
};

// Anatomy Layers Definition (Lincoln oven, Sesame bread, No Bacon, Pure Gouda)
const BURGER_LAYERS = [
  {
    title: "نان کنجدی تازه",
    desc: "نان لطیف و معطر دست‌ساز با کنجد درجه یک.",
    icon: "🍞"
  },
  {
    title: "سس مخصوص آتیش",
    desc: "فرمول انحصاری و دست‌ساز فست‌فود آتیش با عطر ادویه‌جات ویژه و چاشنی دلپذیر.",
    icon: "🍯"
  },
  {
    title: "پنیر گودا",
    desc: "ورقه‌های پنیر گودا روی برگر گرم با طعم اصیل و لذیذ.",
    icon: "🧀"
  },
  {
    title: "گوشت خالص برگر دست‌ساز",
    desc: "۱۰۰٪ گوشت خالص و گرم گوساله با طبخ مخصوص و حفظ کامل آبدار بودن گوشت.",
    icon: "🥩"
  },
  {
    title: "قارچ و پیاز",
    desc: "ترکیب قارچ تفت‌داده و پیاز که طعم فوق‌العاده‌ای به آتیش برگر می‌بخشد.",
    icon: "🍄"
  },
  {
    title: "خیارشور و سبزیجات تازه",
    desc: "خیارشور تازه، کاهو پیچ ترد و گوجه فرنگی به همراه نان تازه کنجدی.",
    icon: "🥒"
  }
];

function selectDeliveryNeighborhood(placeId) {
  const restaurant = menuData?.restaurant || CONFIG;
  const { neighborhoods } = deliveryData;
  const place = neighborhoods.find(n => n.id === placeId);
  if (!place) return;
  selectedNeighborhoodId = placeId;
  const isDirect = place.zone === 'direct';

  // Update interactive chips
  document.querySelectorAll('.delivery-chip-btn').forEach(btn => {
    const isSel = btn.dataset.id === placeId;
    const thisPlace = neighborhoods.find(n => n.id === btn.dataset.id);
    const thisName = thisPlace ? thisPlace.name : '';
    btn.className = `delivery-chip-btn text-[11px] px-3 py-1.5 rounded-xl font-bold transition flex items-center gap-1.5 ${
      isSel 
        ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-black shadow-md shadow-orange-500/30 scale-105' 
        : 'bg-white/[0.04] border border-white/[0.08] text-zinc-300 hover:bg-white/[0.08] hover:text-white'
    }`;
    btn.innerHTML = `<span>📍</span><span>${thisName}</span>${isSel ? '<span class="text-xs">✓</span>' : ''}`;
  });

  // Update dynamic status card
  const statusCard = document.getElementById('delivery-status-card');
  if (statusCard) {
    statusCard.className = `p-4 rounded-2xl border transition-all duration-300 mb-4 ${
      isDirect 
        ? 'bg-gradient-to-br from-emerald-950/40 via-[#18181c] to-emerald-950/20 border-emerald-500/40 shadow-lg shadow-emerald-950/30' 
        : 'bg-gradient-to-br from-pink-950/40 via-[#18181c] to-pink-950/20 border-pink-500/40 shadow-lg shadow-pink-950/30'
    }`;
    
    const cardTitle = document.getElementById('delivery-card-title');
    if (cardTitle) cardTitle.textContent = `ارسال به ${place.name}`;

    const cardBadge = document.getElementById('delivery-card-badge');
    if (cardBadge) {
      cardBadge.textContent = place.badge;
      cardBadge.className = `text-[11px] font-bold px-2.5 py-1 rounded-full ${
        isDirect 
          ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' 
          : 'bg-pink-500/20 text-pink-300 border border-pink-500/30'
      }`;
    }

    const cardTime = document.getElementById('delivery-card-time');
    if (cardTime) cardTime.textContent = place.time;

    const cardDesc = document.getElementById('delivery-card-desc');
    if (cardDesc) cardDesc.textContent = place.desc;

    const cardActions = document.getElementById('delivery-card-actions');
    if (cardActions) {
      if (isDirect) {
        cardActions.innerHTML = `
          <a id="delivery-action-link" href="tel:${restaurant.phone || CONFIG.phoneNumber}" class="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold text-xs sm:text-sm shadow-md transition active:scale-[0.98]">
            ${ICONS.phone}
            <span>سفارش تلفنی به ${place.name}</span>
            <span dir="ltr" class="inline-flex items-center tracking-wider mr-1 text-[11px]">
              (<span>۰۲۱</span><span>-</span><span>۲۲۵۶۱۹۴۹</span>)
            </span>
          </a>
        `;
      } else {
        cardActions.innerHTML = `
          <a id="delivery-action-link" href="${restaurant.snappfoodUrl}" target="_blank" rel="noopener noreferrer" class="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#ff00a6] hover:bg-[#e00092] text-white font-bold text-xs sm:text-sm shadow-md shadow-pink-500/25 transition active:scale-[0.98]">
            ${ICONS.scooter}
            <span>سفارش در اسنپ‌فود</span>
          </a>
        `;
      }
    }
  }

  // Update SVG active pulse position
  const pulse = document.getElementById('delivery-active-pulse');
  if (pulse) {
    pulse.setAttribute('transform', `translate(${place.x} ${place.y})`);
  }

  // Update Map text labels active state
  document.querySelectorAll('#delivery-map-text-labels text').forEach(t => {
    const isSel = t.dataset.id === placeId;
    t.classList.toggle('active-place', isSel);
  });

  // Update map pin markers
  document.querySelectorAll('.delivery-pin-group').forEach(group => {
    const isSel = group.dataset.id === placeId;
    const circle = group.querySelector('circle');
    if (circle) {
      const p = neighborhoods.find(n => n.id === group.dataset.id);
      circle.setAttribute('r', isSel ? '9' : '6');
      circle.setAttribute('stroke-width', isSel ? '2.5' : '1.5');
      circle.setAttribute('fill', isSel ? '#f59e0b' : (p?.zone === 'direct' ? '#ef4444' : '#ff00a6'));
      circle.setAttribute('fill-opacity', isSel ? '1' : '0.85');
    }
  });
}

function renderDeliveryArea(restaurant) {
  const { restaurantArea, snappfoodArea, neighborhoods, note } = deliveryData;
  const activePlace = neighborhoods.find(n => n.id === selectedNeighborhoodId) || neighborhoods[0];
  const isDirect = activePlace.zone === 'direct';

  return `
    <section id="delivery-area" class="w-full max-w-7xl mx-auto rounded-3xl glass-card overflow-hidden mt-10 p-4 sm:p-6 lg:p-8 border border-white/[0.08] shadow-2xl text-right" aria-labelledby="delivery-title">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
        
        <!-- Radar Map (6 cols on lg desktop) -->
        <div class="lg:col-span-6 w-full flex justify-center">
          <div class="relative w-full max-w-[500px] rounded-2xl overflow-hidden border border-white/[0.1] bg-[#16181b] shadow-xl">
            <svg id="delivery-radar-svg" viewBox="0 0 520 420" class="w-full h-auto block select-none" role="img" aria-labelledby="delivery-map-title delivery-map-desc">
              <title id="delivery-map-title">نمای هوشمند محدوده ارسال آتیش</title>
              <desc id="delivery-map-desc">دایره قرمز محدوده پیک مستقیم و خط‌چین صورتی محدوده اسنپ‌فود است.</desc>
              <defs>
                <pattern id="delivery-grid" width="42" height="42" patternUnits="userSpaceOnUse">
                  <path d="M42 0H0V42" fill="none" stroke="#ffffff" stroke-opacity=".03"/>
                </pattern>
              </defs>
              <rect width="520" height="420" fill="#14171a"/>
              <rect width="520" height="420" fill="url(#delivery-grid)"/>
              <g fill="#1a2822" opacity=".65">
                <path d="M0 0H177L160 35 100 54 59 102 0 83Z"/>
                <path d="M360 0H520V100L476 85 438 36Z"/>
                <path d="M16 330L81 317 114 377 83 420H0Z"/>
              </g>
              <g fill="none" stroke="#2b3135" stroke-width="8" stroke-linecap="round" stroke-linejoin="round">
                <!-- بزرگراه صدر (Sadr Expressway) -->
                <path d="M-20 115 L145 108 L260 116 L380 98 L545 115"/>
                <!-- خیابان شهید کلاهدوز / دولت (Dowlat Street) -->
                <path d="M-20 208 L140 206 L260 210 L370 212 L545 218"/>
                <!-- خیابان شریعتی (Shariati Street) -->
                <path d="M145 -10 L145 108 L140 206 L135 315 L130 430"/>
                <!-- خیابان دیباجی (Dibaji Street) -->
                <path d="M255 116 L255 210"/>
                <!-- خیابان پاسداران (Pasdaran Avenue) -->
                <path d="M375 -10 L375 100 L370 212 L365 315 L360 430"/>
                <!-- بزرگراه همت / میرداماد (Southern Corridor) -->
                <path d="M-20 345 L135 335 L260 348 L390 340 L545 352"/>
              </g>
              <!-- Snappfood Zone Radius -->
              <circle cx="${snappfoodArea.cx}" cy="${snappfoodArea.cy}" r="${snappfoodArea.radius}" fill="#ff00a6" fill-opacity=".04" stroke="#ff00a6" stroke-width="2" stroke-dasharray="8 8"/>
              <!-- Direct Atish Delivery Zone Radius -->
              <circle cx="${restaurantArea.cx}" cy="${restaurantArea.cy}" r="${restaurantArea.radius}" fill="#ef4444" fill-opacity=".12" stroke="#ef4444" stroke-width="2.5"/>
              
              <!-- Neighborhood Pin Markers -->
              <g id="delivery-map-pins">
                ${neighborhoods.map(place => {
                  const isSelected = place.id === selectedNeighborhoodId;
                  return `
                    <g class="delivery-pin-group cursor-pointer" data-id="${place.id}" transform="translate(${place.x} ${place.y})">
                      <circle r="${isSelected ? '9' : '6'}" fill="${isSelected ? '#f59e0b' : (place.zone === 'direct' ? '#ef4444' : '#ff00a6')}" stroke="#ffffff" stroke-width="${isSelected ? '2.5' : '1.5'}" fill-opacity="${isSelected ? '1' : '0.85'}"/>
                    </g>
                  `;
                }).join('')}
              </g>

              <!-- Active Highlight Pin Pulse -->
              <g id="delivery-active-pulse" transform="translate(${activePlace.x} ${activePlace.y})">
                <circle r="22" fill="#f59e0b" fill-opacity=".35" class="animate-ping"/>
              </g>

              <!-- Neighborhood Labels -->
              <g class="delivery-place-labels" id="delivery-map-text-labels">
                ${neighborhoods.map(place => {
                  const isSelected = place.id === selectedNeighborhoodId;
                  return `<text x="${place.x}" y="${place.y - 11}" text-anchor="middle" data-id="${place.id}" class="${isSelected ? 'active-place' : ''}">${place.name}</text>`;
                }).join('')}
              </g>

              <!-- Restaurant Center Marker -->
              <g transform="translate(260 210)">
                <circle r="32" fill="#f59e0b" fill-opacity=".15" class="animate-pulse"/>
                <circle r="16" fill="#f59e0b" stroke="#14171a" stroke-width="4"/>
                <circle r="5" fill="#14171a"/>
              </g>
              <text x="260" y="196" class="delivery-brand-label" text-anchor="middle">🔥 آتیش</text>
              <text x="28" y="394" class="delivery-map-caption">نقشه تعاملی دلیوری · کلیک روی محله</text>
            </svg>
          </div>
        </div>

        <!-- Info & Actions (6 cols on lg desktop) -->
        <div class="lg:col-span-6 flex flex-col justify-center">
          <div class="flex items-center justify-between gap-3 mb-2">
            <span class="text-xs font-bold text-amber-400">🛵 استعلام هوشمند محدوده پیک</span>
            <span class="text-[11px] font-bold text-amber-300 bg-amber-500/10 border border-amber-500/30 px-2.5 py-0.5 rounded-full">شمال تهران</span>
          </div>
          <h2 id="delivery-title" class="text-xl lg:text-2xl font-black text-white mb-2">محله خود را انتخاب کنید</h2>
          <p class="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-3 font-light">
            با لمس هر محله، وضعیت ارسال، زمان تقریبی و نوع پیک (پیک مستقیم یا اسنپ‌فود) را استعلام کنید:
          </p>

          <!-- Interactive Neighborhood Filter Chips -->
          <div class="flex flex-wrap gap-1.5 mb-4 max-h-36 overflow-y-auto p-1.5 rounded-2xl bg-black/30 border border-white/[0.06]" id="delivery-chips-container">
            ${neighborhoods.map(place => {
              const isSelected = place.id === selectedNeighborhoodId;
              return `
                <button 
                  type="button" 
                  data-id="${place.id}" 
                  class="delivery-chip-btn text-[11px] px-3 py-1.5 rounded-xl font-bold transition flex items-center gap-1.5 ${
                    isSelected 
                      ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-black shadow-md shadow-orange-500/30 scale-105' 
                      : 'bg-white/[0.04] border border-white/[0.08] text-zinc-300 hover:bg-white/[0.08] hover:text-white'
                  }"
                >
                  <span>📍</span>
                  <span>${place.name}</span>
                  ${isSelected ? '<span class="text-xs">✓</span>' : ''}
                </button>
              `;
            }).join('')}
          </div>

          <!-- Dynamic Result Card -->
          <div id="delivery-status-card" class="p-4 rounded-2xl border transition-all duration-300 mb-4 ${
            isDirect 
              ? 'bg-gradient-to-br from-emerald-950/40 via-[#18181c] to-emerald-950/20 border-emerald-500/40 shadow-lg shadow-emerald-950/30' 
              : 'bg-gradient-to-br from-pink-950/40 via-[#18181c] to-pink-950/20 border-pink-500/40 shadow-lg shadow-pink-950/30'
          }">
            <div class="flex items-center justify-between gap-2 mb-2">
              <div class="flex items-center gap-2">
                <span class="text-base">${isDirect ? '⚡️' : '🛵'}</span>
                <h3 class="text-sm sm:text-base font-black text-white" id="delivery-card-title">ارسال به ${activePlace.name}</h3>
              </div>
              <span id="delivery-card-badge" class="text-[11px] font-bold px-2.5 py-1 rounded-full ${
                isDirect 
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' 
                  : 'bg-pink-500/20 text-pink-300 border border-pink-500/30'
              }">
                ${activePlace.badge}
              </span>
            </div>
            
            <div class="flex items-center gap-2 text-xs font-bold text-amber-400 mb-2">
              <span>⏱ زمان تقریبی تحویل:</span>
              <span class="text-white" id="delivery-card-time">${activePlace.time}</span>
            </div>

            <p class="text-xs text-zinc-300 leading-relaxed font-light mb-3" id="delivery-card-desc">
              ${activePlace.desc}
            </p>

            <!-- Actions (Single Contextual Button: Green Phone for Direct, Pink Snappfood for Express) -->
            <div class="flex gap-2" id="delivery-card-actions">
              ${isDirect ? `
                <a id="delivery-action-link" href="tel:${restaurant.phone || CONFIG.phoneNumber}" class="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold text-xs sm:text-sm shadow-md transition active:scale-[0.98]">
                  ${ICONS.phone}
                  <span>سفارش تلفنی به ${activePlace.name}</span>
                  <span dir="ltr" class="inline-flex items-center tracking-wider mr-1 text-[11px]">
                    (<span>۰۲۱</span><span>-</span><span>۲۲۵۶۱۹۴۹</span>)
                  </span>
                </a>
              ` : `
                <a id="delivery-action-link" href="${restaurant.snappfoodUrl}" target="_blank" rel="noopener noreferrer" class="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#ff00a6] hover:bg-[#e00092] text-white font-bold text-xs sm:text-sm shadow-md shadow-pink-500/25 transition active:scale-[0.98]">
                  ${ICONS.scooter}
                  <span>سفارش در اسنپ‌فود</span>
                </a>
              `}
            </div>
          </div>

          <!-- Legend -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3 rounded-2xl bg-white/[0.03] border border-white/[0.06] mb-3 text-xs">
            <div class="flex items-center gap-2.5">
              <span class="w-3.5 h-3.5 rounded-full border-2 border-red-500 bg-red-500/20 flex-shrink-0"></span>
              <div>
                <strong class="text-white block font-bold text-[11px]">پیک اختصاصی رستوران</strong>
                <span class="text-zinc-400 text-[10px]">دروس، دولت، قلهک، پاسداران</span>
              </div>
            </div>
            <div class="flex items-center gap-2.5">
              <span class="w-3.5 h-3.5 rounded-full border-2 border-dashed border-pink-500 bg-pink-500/20 flex-shrink-0"></span>
              <div>
                <strong class="text-white block font-bold text-[11px]">اسنپ‌فود و اکسپرس</strong>
                <span class="text-zinc-400 text-[10px]">شعاع گسترده‌تر شمال تهران</span>
              </div>
            </div>
          </div>

          <p class="text-[11px] text-zinc-400 leading-relaxed border-t border-white/[0.06] pt-2.5">
            ${note}
          </p>
        </div>

      </div>
    </section>
  `;
}

function renderApp() {
  const app = document.getElementById('app');
  if (!app) return;

  const restaurant = menuData?.restaurant || CONFIG;
  const categories = menuData?.categories || [];
  const trayCount = getTrayTotalCount();

  app.innerHTML = `
    <!-- Responsive Header (Mobile + Desktop) -->
    <header class="sticky top-0 z-40 glass-header border-b border-white/[0.08] px-4 sm:px-6 lg:px-8 py-3">
      <div class="w-full max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        <!-- Logo & Title -->
        <a href="#" class="flex items-center gap-2 min-w-0">
          <div class="w-9 h-9 sm:w-10 sm:h-10 flex-shrink-0 drop-shadow-[0_0_12px_rgba(245,158,11,0.6)]">
            <img 
              src="${logoImg}" 
              alt="${restaurant.name}" 
              class="w-full h-full object-contain"
            />
          </div>
          <div class="flex flex-col text-right min-w-0">
            <div class="text-xs sm:text-sm md:text-base font-black text-white tracking-tight flex items-center gap-1.5 truncate">
              <span>${restaurant.brandTitle}</span>
              <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0"></span>
            </div>
            <div class="text-[10px] sm:text-[11px] md:text-xs text-amber-400 font-medium truncate hidden sm:block">
              ${restaurant.brandSubtitle}
            </div>
          </div>
        </a>

        <!-- Desktop Persistent Search Bar (Visible on md and up) -->
        <div class="hidden md:flex flex-1 max-w-md mx-4">
          <div class="relative w-full">
            <span class="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-zinc-400">
              ${ICONS.search}
            </span>
            <input 
              type="text" 
              id="desktop-search-input" 
              value="${searchQuery}"
              placeholder="جستجوی سریع (پیتزا، برگر، پپرونی، استیک...)" 
              class="w-full bg-[#18181c] border border-white/[0.1] hover:border-amber-500/40 text-white text-xs rounded-xl pr-10 pl-9 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500 placeholder-zinc-500 transition shadow-inner"
            />
            <button 
              id="clear-desktop-search-btn" 
              class="${searchQuery ? '' : 'hidden'} absolute inset-y-0 left-0 pl-3 flex items-center text-zinc-400 hover:text-white"
              aria-label="پاک کردن جستجو"
            >
              ${ICONS.close}
            </button>
          </div>
        </div>

        <!-- Header Actions -->
        <div class="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
          
          <!-- Desktop Call Button (021 on left) -->
          <a 
            href="tel:${restaurant.phone}"
            class="hidden lg:flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/25 text-xs font-bold transition flex-shrink-0"
            title="تماس تلفنی"
          >
            ${ICONS.phone}
            <span class="flex items-center gap-1">
              <span>سفارش:</span>
              <span dir="ltr" class="inline-flex items-center tracking-wider font-semibold">
                <span>۰۲۱</span><span>-</span><span>۲۲۵۶۱۹۴۹</span>
              </span>
            </span>
          </a>

          <!-- Desktop SnappFood Button -->
          <a 
            href="${restaurant.snappfoodUrl}"
            target="_blank"
            rel="noopener noreferrer"
            class="hidden md:flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-pink-500/15 border border-pink-500/30 text-pink-400 hover:bg-pink-500/25 text-xs font-bold transition flex-shrink-0"
            title="سفارش در اسنپ‌فود"
          >
            ${ICONS.scooter}
            <span>اسنپ‌فود</span>
          </a>

          <!-- PWA Install Button -->
          <button 
            id="btn-install-pwa" 
            class="hidden items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-300 hover:bg-amber-500/25 text-xs font-bold transition flex-shrink-0"
            title="نصب اپلیکیشن منوی آتیش"
          >
            <span>📲</span>
            <span class="hidden sm:inline">نصب اپلیکیشن</span>
            <span class="sm:hidden">نصب</span>
          </button>

          <!-- Mobile Search Toggle Button -->
          <button 
            id="toggle-search-btn" 
            aria-label="جستجوی غذا"
            class="md:hidden w-9 h-9 rounded-full bg-[#1e1e24] border border-white/[0.1] hover:border-amber-400/50 flex items-center justify-center text-zinc-300 hover:text-white transition flex-shrink-0"
          >
            ${ICONS.search}
          </button>

          <!-- Order Tray (List) Button -->
          <button 
            id="open-tray-btn" 
            aria-label="سبد سفارش"
            class="relative px-2.5 sm:px-3.5 h-9 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/40 text-amber-300 hover:text-white flex items-center gap-1.5 text-xs font-bold transition hover:bg-amber-500/30 flex-shrink-0"
          >
            ${ICONS.tray}
            <span class="text-[11px] sm:text-xs">پیش‌فاکتور</span>
            <span id="header-tray-badge" class="${trayCount > 0 ? '' : 'hidden'} bg-amber-500 text-black font-black text-[10px] px-1.5 py-0.2 rounded-full min-w-[18px] text-center">
              ${toPersianDigits(trayCount)}
            </span>
          </button>
        </div>
      </div>

      <!-- Mobile Expandable Search Input -->
      <div id="search-container" class="${searchActive ? '' : 'hidden'} md:hidden w-full max-w-md mx-auto pt-3">
        <div class="relative">
          <span class="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-zinc-400">
            ${ICONS.search}
          </span>
          <input 
            type="text" 
            id="menu-search-input" 
            value="${searchQuery}"
            placeholder="جستجوی پیتزا، برگر، ساندویچ، سوخاری..." 
            class="w-full bg-[#18181c] border border-amber-500/50 text-white text-xs rounded-xl pr-10 pl-9 py-2.5 focus:outline-none focus:ring-2 focus:ring-amber-500 placeholder-zinc-500 shadow-inner"
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

    <!-- Main Responsive Container (Mobile Phone + Desktop) -->
    <div class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-28 md:pb-16">

      <!-- Hero Section (Clean & Responsive: 2 cols on Desktop, NO duplicate call/snapp buttons) -->
      <section class="relative rounded-3xl overflow-hidden glass-card p-4 sm:p-6 lg:p-8 mb-6 border border-white/[0.08] shadow-2xl text-right">
        <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          
          <!-- Hero Text & Concept Info (7 cols on desktop, RTL Right) -->
          <div class="md:col-span-7 flex flex-col justify-center order-2 md:order-1">
            <!-- Badges Bar -->
            <div class="flex flex-wrap items-center gap-2 mb-3">
              <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-emerald-500/15 border border-emerald-500/30 text-emerald-400">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>${restaurant.statusBadge}</span>
              </span>
              <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-pink-500/15 border border-pink-500/30 text-pink-400">
                ⭐ ${restaurant.rating || '۴.۴'} در اسنپ‌فود
              </span>
              <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-amber-500/15 border border-amber-500/30 text-amber-300">
                🛵 ارسال سریع دروس و دولت
              </span>
            </div>

            <!-- Big Title -->
            <h1 class="text-xl sm:text-2xl lg:text-4xl font-black text-white leading-tight mb-2.5">
              طعم اصیل و لذیذ <span class="text-gradient-fire">پیتزا آتیش</span>
            </h1>
            
            <p class="text-zinc-300 text-xs sm:text-sm lg:text-base leading-relaxed mb-5 font-light max-w-2xl">
              پیتزاهای پرملات آمریکایی و ایتالیایی پخته‌شده در فر لینکولن و برگرهای دست‌ساز با گوشت خالص. سفارش آنلاین دلیوری با اسنپ‌فود یا سفارش مستقیم تلفنی با پیک گرم.
            </p>

            <!-- Signature Buttons in First Panel (3D Anatomy + Prominent Instagram) -->
            <div class="flex flex-wrap items-center gap-3">
              <button 
                id="btn-open-anatomy"
                class="py-3 px-5 rounded-2xl bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-red-500/20 hover:from-amber-500/30 hover:to-red-500/30 text-amber-300 hover:text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 border border-amber-500/40 hover:border-amber-400 transition shadow-lg shadow-amber-500/10"
              >
                ${ICONS.layers}
                <span>آناتومی ۳ بعدی آتیش برگر ✨</span>
              </button>

              <a 
                href="https://instagram.com/atishfood" 
                target="_blank" 
                rel="noopener noreferrer"
                class="py-3 px-5 rounded-2xl bg-gradient-to-r from-purple-600/20 to-pink-600/20 hover:from-purple-600/35 hover:to-pink-600/35 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2.5 border border-purple-500/40 hover:border-pink-400 transition shadow-lg shadow-pink-500/10"
                title="صفحه رسمی اینستاگرام فست‌فود آتیش"
              >
                <span class="text-zinc-200 text-xs sm:text-sm font-bold">اینستاگرام آتیش</span>
                <span dir="ltr" class="inline-flex items-center gap-1.5 text-pink-400 bg-pink-500/10 px-2 py-0.5 rounded-lg border border-pink-500/20">
                  <span class="w-4 h-4 flex items-center justify-center text-pink-400">${ICONS.instagram}</span>
                  <span class="font-bold tracking-wide text-white">@atishfood</span>
                </span>
              </a>
            </div>
          </div>

          <!-- 3D Burger Artwork Showcase (5 cols on desktop, Left Side) -->
          <div class="md:col-span-5 order-1 md:order-2">
            <div class="relative w-full rounded-2xl overflow-hidden shadow-2xl border border-white/[0.1] aspect-[16/10] md:aspect-square bg-black group">
              <img 
                src="/images/atish-hero-3d.jpg" 
                alt="کانسپت سه بعدی آتیش برگر"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex items-end p-4">
                <div class="text-right">
                  <span class="text-[11px] font-bold text-amber-400">امضای فست‌فود آتیش</span>
                  <p class="text-sm md:text-base font-black text-white">راز طعم برگر با پنیر گودا</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <!-- Sticky Category Bar (Responsive: scrollable on mobile, centered/wrap on desktop) -->
      <nav class="sticky top-[58px] md:top-[65px] z-30 bg-[#0c0c0e]/95 backdrop-blur-md -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-3 border-y border-white/[0.08] mb-6">
        <div id="category-bar" class="w-full max-w-7xl mx-auto flex items-center gap-2 overflow-x-auto no-scrollbar md:flex-wrap md:justify-center">
          ${categories.map(cat => {
            const isActive = currentCategory === cat.id;
            return `
              <button 
                data-category="${cat.id}" 
                class="cat-btn flex-shrink-0 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 flex items-center gap-2 ${
                  isActive 
                    ? 'bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 text-black shadow-md shadow-orange-500/30' 
                    : 'bg-[#18181c] text-zinc-300 border border-white/[0.08] hover:bg-[#24242a] hover:text-white'
                }"
              >
                <span>${cat.icon}</span>
                <span>${cat.name}</span>
              </button>
            `;
          }).join('')}
        </div>
      </nav>

      <!-- Main Food Menu Container (Responsive Grid: 2 cols mobile, 3 tablet, 4 desktop) -->
      <main id="menu-container"></main>

      <!-- Delivery Area Radar Section (Responsive Split Card) -->
      ${renderDeliveryArea(restaurant)}

      <!-- PWA Dedicated Install Banner -->
      <div id="pwa-install-banner" class="w-full max-w-7xl mx-auto rounded-3xl p-5 sm:p-6 bg-gradient-to-r from-amber-500/10 via-[#18181c] to-orange-500/10 border border-amber-500/20 shadow-xl mt-8 text-right">
        <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div class="flex items-center gap-3.5">
            <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#0e0e10] border border-amber-500/30 p-2 flex-shrink-0 shadow-lg flex items-center justify-center">
              <img src="/icons/icon-192.png" alt="آتیش" class="w-full h-full object-contain" />
            </div>
            <div>
              <div class="flex items-center gap-2">
                <h3 class="text-sm sm:text-base font-black text-white">نصب وب‌اپلیکیشن منوی آتیش</h3>
                <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">PWA</span>
              </div>
              <p class="text-xs text-zinc-400 mt-0.5 leading-relaxed">
                دسترسی فوق‌سریع بدون فیلترشکن، عملکرد آفلاین و دسترسی مستقیم با یک لمس روی صفحه گوشی
              </p>
            </div>
          </div>
          <div class="flex items-center gap-2 w-full sm:w-auto">
            <button id="pwa-banner-install-btn" class="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 text-black font-black text-xs shadow-md shadow-orange-500/30 flex items-center justify-center gap-2 hover:opacity-95 transition">
              <span>📲</span>
              <span>نصب آسان روی صفحه اصلی</span>
            </button>
            <button id="pwa-banner-close-btn" class="w-8 h-8 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-zinc-400 hover:text-white flex items-center justify-center text-xs transition" title="بستن">
              ✕
            </button>
          </div>
        </div>
      </div>

      <!-- Restaurant Info Card (Responsive Footer Section) -->
      <footer id="about-section" class="w-full max-w-7xl mx-auto bg-[#141417] border border-white/[0.08] rounded-3xl p-6 lg:p-8 mt-10 text-right shadow-xl">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          
          <!-- Column 1: Brand & Bio -->
          <div>
            <div class="flex items-center gap-2.5 mb-2.5">
              <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-black font-black text-base shadow-md">
                🔥
              </div>
              <div>
                <h3 class="text-sm md:text-base font-black text-white">${restaurant.brandTitle}</h3>
                <span class="text-[11px] text-zinc-400">${restaurant.tagline}</span>
              </div>
            </div>
            <p class="text-xs text-zinc-400 leading-relaxed font-light">
              منوی دیجیتال رستوران آتیش. ارائه پیتزاها و برگرهای باکیفیت و تازه در محله‌های شمال تهران با امکان سفارش آنلاین در اسنپ‌فود و سفارش تلفنی.
            </p>
          </div>

          <!-- Column 2: Hours & Address -->
          <div class="flex flex-col gap-2.5 text-xs text-zinc-300">
            <div class="flex items-start gap-2">
              ${ICONS.clock}
              <div>
                <span class="text-zinc-400 font-normal">ساعات کاری:</span>
                <span class="text-zinc-100 font-bold mr-1">${toPersianDigits(restaurant.workingHours)}</span>
              </div>
            </div>

            <div class="flex items-start gap-2">
              ${ICONS.location}
              <div>
                <span class="text-zinc-400 font-normal">آدرس:</span>
                <span class="text-zinc-100 font-bold mr-1">${toPersianDigits(restaurant.address)}</span>
              </div>
            </div>
          </div>

        </div>
      </footer>
    </div>

    <!-- Floating Sticky Order Tray Bar (Responsive Mobile/Desktop) -->
    <div 
      id="floating-tray-bar" 
      class="${trayCount > 0 ? '' : 'hidden'} fixed bottom-20 md:bottom-6 inset-x-4 md:inset-x-auto md:left-6 max-w-sm md:w-80 z-40 bg-gradient-to-r from-amber-500 to-orange-500 text-black font-black px-4 py-2.5 rounded-2xl shadow-2xl flex items-center justify-between cursor-pointer animate-pulse-glow"
    >
      <div class="flex items-center gap-2">
        <span class="text-base">📋</span>
        <span class="text-xs font-black">سفارش شما: <span id="floating-tray-count">${toPersianDigits(trayCount)}</span> قلم</span>
      </div>
      <div class="flex items-center gap-1 text-[11px] bg-black/20 px-2.5 py-1 rounded-xl">
        <span>مشاهده و تماس</span>
        <span>←</span>
      </div>
    </div>

    <!-- Floating Contact Bottom Pill Bar (MOBILE ONLY: md:hidden) -->
    <nav class="contact-nav md:hidden" aria-label="دسترسی سریع">
      <div class="contact-nav-inner">
        <button id="nav-menu-btn" class="contact-nav-item contact-nav-menu">
          ${ICONS.menuIcon}<span>منو</span>
        </button>
        <button id="nav-tray-btn" class="contact-nav-item contact-nav-tray relative">
          ${ICONS.tray}<span>پیش‌فاکتور</span>
          <span id="nav-tray-badge" class="${trayCount > 0 ? '' : 'hidden'} absolute top-1 right-3 bg-amber-400 text-black text-[9px] font-black rounded-full w-4 h-4 flex items-center justify-center">
            ${toPersianDigits(trayCount)}
          </span>
        </button>
        <a href="tel:${restaurant.phone}" class="contact-nav-item contact-nav-call" aria-label="تماس با آتیش">
          ${ICONS.phone}<span>تماس</span>
        </a>
        <a href="${restaurant.snappfoodUrl}" target="_blank" rel="noopener noreferrer" class="contact-nav-item contact-nav-snapp" aria-label="اسنپ‌فود">
          ${ICONS.scooter}<span>اسنپ‌فود</span>
        </a>
      </div>
    </nav>

    <!-- Item Detail Sheet Modal -->
    <div id="item-modal" class="fixed inset-0 z-50 hidden bg-black/80 backdrop-blur-md flex items-end sm:items-center justify-center p-0 sm:p-4 transition-opacity">
      <div id="item-modal-box" class="w-full max-w-md bg-[#18181c] border-t sm:border border-white/[0.1] rounded-t-3xl sm:rounded-3xl max-h-[90vh] overflow-y-auto shadow-2xl transform transition-transform">
      </div>
    </div>

    <!-- Order Tray Drawer Modal -->
    <div id="tray-modal" class="fixed inset-0 z-50 hidden bg-black/85 backdrop-blur-md flex items-end sm:items-center justify-center p-0 sm:p-4 transition-opacity">
      <div id="tray-modal-box" class="w-full max-w-md bg-[#18181c] border-t sm:border border-white/[0.12] rounded-t-3xl sm:rounded-3xl max-h-[92vh] overflow-y-auto shadow-2xl flex flex-col text-right">
      </div>
    </div>

    <!-- 3D Burger Anatomy Explorer Modal -->
    <div id="anatomy-modal" class="fixed inset-0 z-50 hidden bg-black/85 backdrop-blur-md flex items-end sm:items-center justify-center p-0 sm:p-4 transition-opacity">
      <div class="w-full max-w-md bg-[#141417] border-t sm:border border-amber-500/30 rounded-t-3xl sm:rounded-3xl max-h-[90vh] overflow-y-auto shadow-2xl p-5 text-right">
        <div class="flex items-center justify-between pb-3 border-b border-white/[0.08] mb-4">
          <div class="flex items-center gap-2">
            <span class="text-xl">✨</span>
            <h2 class="text-sm font-black text-white">آناتومی و راز طعم آتیش برگر</h2>
          </div>
          <button id="close-anatomy-btn" class="w-7 h-7 rounded-full bg-white/[0.08] flex items-center justify-center text-zinc-400 hover:text-white">
            ${ICONS.close}
          </button>
        </div>

        <div class="mb-4 text-center">
          <div class="inline-block relative rounded-xl overflow-hidden border border-white/[0.1] shadow-lg max-h-48">
            <img src="/images/atish-hero-3d.jpg" alt="برگر آتیش" class="w-full h-auto object-cover max-w-xs mx-auto" />
          </div>
        </div>

        <!-- Layer Selector Tabs -->
        <div class="grid grid-cols-3 sm:grid-cols-6 gap-1 mb-4" id="anatomy-layers-tabs">
          ${BURGER_LAYERS.map((layer, idx) => `
            <button 
              data-layer="${idx}" 
              class="anatomy-tab-btn p-1.5 rounded-xl border text-center text-xs font-bold transition ${
                idx === activeAnatomyLayer 
                  ? 'bg-amber-500/20 border-amber-500 text-amber-300' 
                  : 'bg-white/[0.04] border-white/[0.08] text-zinc-400 hover:text-white'
              }"
            >
              <div class="text-sm mb-0.5">${layer.icon}</div>
              <div class="truncate text-[9px]">لایه ${toPersianDigits(idx + 1)}</div>
            </button>
          `).join('')}
        </div>

        <!-- Layer Details Box -->
        <div id="anatomy-details-box" class="bg-[#1c1c22] border border-amber-500/20 rounded-xl p-3.5 mb-4">
          <div class="flex items-center gap-2 mb-1.5">
            <span id="anatomy-icon" class="text-xl">${BURGER_LAYERS[activeAnatomyLayer].icon}</span>
            <h3 id="anatomy-title" class="text-sm font-black text-amber-400">${BURGER_LAYERS[activeAnatomyLayer].title}</h3>
          </div>
          <p id="anatomy-desc" class="text-xs text-zinc-300 leading-relaxed font-light">
            ${BURGER_LAYERS[activeAnatomyLayer].desc}
          </p>
        </div>

        <button 
          id="anatomy-add-btn"
          class="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-black font-black text-xs shadow-md shadow-orange-500/30 flex items-center justify-center gap-1.5"
        >
          ${ICONS.plus}
          <span>افزودن آتیش برگر به لیست سفارش</span>
        </button>
      </div>
    </div>

    <!-- iOS PWA Install Guide Modal -->
    <div id="ios-install-modal" class="fixed inset-0 z-50 hidden bg-black/85 backdrop-blur-md flex items-end sm:items-center justify-center p-0 sm:p-4 transition-opacity">
      <div class="w-full max-w-md bg-[#18181c] border-t sm:border border-white/[0.12] rounded-t-3xl sm:rounded-3xl p-5 shadow-2xl text-right">
        <div class="flex items-center justify-between pb-3 border-b border-white/[0.08] mb-4">
          <div class="flex items-center gap-2.5">
            <div class="w-9 h-9 rounded-xl bg-[#0e0e10] border border-amber-500/30 p-1 shadow-md flex items-center justify-center">
              <img src="/icons/icon-192.png" alt="آیکون آتیش" class="w-full h-full object-contain" />
            </div>
            <h3 class="text-sm font-black text-white">راهنمای نصب در آیفون (iOS)</h3>
          </div>
          <button id="close-ios-modal-btn" class="w-7 h-7 rounded-full bg-white/[0.08] flex items-center justify-center text-zinc-400 hover:text-white">
            ✕
          </button>
        </div>
        <div class="space-y-3 mb-5 text-xs text-zinc-300">
          <div class="flex items-start gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <span class="w-6 h-6 rounded-full bg-amber-500/20 text-amber-300 flex items-center justify-center font-bold flex-shrink-0 text-xs">۱</span>
            <p class="leading-relaxed">در پایین مرورگر Safari، دکمه اشتراک‌گذاری <strong class="text-white">Share (⎋)</strong> را بزنید.</p>
          </div>
          <div class="flex items-start gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <span class="w-6 h-6 rounded-full bg-amber-500/20 text-amber-300 flex items-center justify-center font-bold flex-shrink-0 text-xs">۲</span>
            <p class="leading-relaxed">در منوی باز شده به پایین اسکرول کرده و گزینه <strong class="text-white">«Add to Home Screen» (افزودن به صفحه اصلی)</strong> را انتخاب کنید.</p>
          </div>
          <div class="flex items-start gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <span class="w-6 h-6 rounded-full bg-amber-500/20 text-amber-300 flex items-center justify-center font-bold flex-shrink-0 text-xs">۳</span>
            <p class="leading-relaxed">در بالای صفحه روی گزینه <strong class="text-amber-400 font-bold">Add</strong> ضربه بزنید تا آیکون به صفحه اصلی گوشی اضافه شود.</p>
          </div>
        </div>
        <button id="confirm-ios-modal-btn" class="w-full py-2.5 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-300 font-bold text-xs hover:bg-amber-500/30 transition">
          متوجه شدم
        </button>
      </div>
    </div>

    <!-- Toast Notification -->
    <div id="toast-notification" class="fixed top-16 left-1/2 -translate-x-1/2 z-50 pointer-events-none opacity-0 -translate-y-4 bg-emerald-500 text-white font-black text-xs px-3.5 py-2 rounded-xl shadow-xl flex items-center gap-1.5">
      <span>✓</span>
      <span id="toast-text">به لیست سفارش اضافه شد</span>
    </div>
  `;

  setupEventListeners();
  renderMenuItems();
}

function updateTrayUI() {
  const count = getTrayTotalCount();
  
  const headerBadge = document.getElementById('header-tray-badge');
  if (headerBadge) {
    headerBadge.textContent = toPersianDigits(count);
    headerBadge.classList.toggle('hidden', count === 0);
  }

  const floatingBar = document.getElementById('floating-tray-bar');
  const floatingCount = document.getElementById('floating-tray-count');
  if (floatingBar && floatingCount) {
    floatingCount.textContent = toPersianDigits(count);
    floatingBar.classList.toggle('hidden', count === 0);
  }

  const navBadge = document.getElementById('nav-tray-badge');
  if (navBadge) {
    navBadge.textContent = toPersianDigits(count);
    navBadge.classList.toggle('hidden', count === 0);
  }

  menuData.items?.forEach(item => {
    const badge = document.getElementById(`card-tray-count-${item.id}`);
    if (badge) {
      const c = getItemTrayCount(item);
      if (c > 0) {
        badge.textContent = toPersianDigits(c);
        badge.classList.remove('hidden');
        badge.classList.add('flex');
      } else {
        badge.classList.add('hidden');
        badge.classList.remove('flex');
      }
    }
  });
}

function showToast(text) {
  const toast = document.getElementById('toast-notification');
  const toastText = document.getElementById('toast-text');
  if (!toast || !toastText) return;

  toastText.textContent = text;
  toast.classList.remove('opacity-0', '-translate-y-4');
  toast.classList.add('opacity-100', 'translate-y-0');

  setTimeout(() => {
    toast.classList.add('opacity-0', '-translate-y-4');
    toast.classList.remove('opacity-100', 'translate-y-0');
  }, 2200);
}

function setupEventListeners() {
  const toggleSearchBtn = document.getElementById('toggle-search-btn');
  const searchContainer = document.getElementById('search-container');
  const searchInput = document.getElementById('menu-search-input');
  const clearBtn = document.getElementById('clear-search-btn');
  const desktopSearchInput = document.getElementById('desktop-search-input');
  const desktopClearBtn = document.getElementById('clear-desktop-search-btn');

  function updateSearchUI(query, shouldScroll = false) {
    searchQuery = query;
    if (desktopSearchInput) {
      desktopSearchInput.value = query;
      if (desktopClearBtn) desktopClearBtn.classList.toggle('hidden', query.length === 0);
    }
    if (searchInput) {
      searchInput.value = query;
      if (clearBtn) clearBtn.classList.toggle('hidden', query.length === 0);
    }
    renderMenuItems();

    if (shouldScroll && query.length > 0) {
      const menuSec = document.getElementById('categories-bar');
      if (menuSec) {
        const rect = menuSec.getBoundingClientRect();
        if (rect.top > 250 || rect.bottom < 0) {
          menuSec.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }
  }

  function clearAllSearch() {
    updateSearchUI('', false);
  }

  if (toggleSearchBtn && searchContainer) {
    toggleSearchBtn.addEventListener('click', () => {
      searchActive = !searchActive;
      searchContainer.classList.toggle('hidden', !searchActive);
      if (searchActive && searchInput) {
        searchInput.focus();
        const menuSec = document.getElementById('categories-bar');
        if (menuSec) menuSec.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }

  if (desktopSearchInput) {
    desktopSearchInput.addEventListener('input', (e) => {
      updateSearchUI(e.target.value.trim(), true);
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      updateSearchUI(e.target.value.trim(), true);
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener('click', () => clearAllSearch());
  }

  if (desktopClearBtn) {
    desktopClearBtn.addEventListener('click', () => clearAllSearch());
  }

  const catButtons = document.querySelectorAll('.cat-btn');
  catButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      catButtons.forEach(b => {
        b.className = 'cat-btn flex-shrink-0 px-3.5 py-2 rounded-xl text-xs font-bold transition-all duration-200 flex items-center gap-1.5 bg-[#18181c] text-zinc-300 border border-white/[0.08] hover:bg-[#24242a] hover:text-white';
      });
      btn.className = 'cat-btn flex-shrink-0 px-3.5 py-2 rounded-xl text-xs font-bold transition-all duration-200 flex items-center gap-1.5 bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 text-black shadow-md shadow-orange-500/30';

      if (searchQuery) {
        clearAllSearch();
      }

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

  const openTrayBtn = document.getElementById('open-tray-btn');
  const floatingTrayBar = document.getElementById('floating-tray-bar');
  const navTrayBtn = document.getElementById('nav-tray-btn');
  const trayModal = document.getElementById('tray-modal');

  const openTrayModal = () => {
    renderTrayModal();
    trayModal?.classList.remove('hidden');
  };

  openTrayBtn?.addEventListener('click', openTrayModal);
  floatingTrayBar?.addEventListener('click', openTrayModal);
  navTrayBtn?.addEventListener('click', openTrayModal);

  trayModal?.addEventListener('click', (e) => {
    if (e.target === trayModal) {
      trayModal.classList.add('hidden');
    }
  });

  const btnOpenAnatomy = document.getElementById('btn-open-anatomy');
  const anatomyModal = document.getElementById('anatomy-modal');
  const closeAnatomyBtn = document.getElementById('close-anatomy-btn');

  btnOpenAnatomy?.addEventListener('click', () => {
    anatomyModal?.classList.remove('hidden');
  });

  closeAnatomyBtn?.addEventListener('click', () => {
    anatomyModal?.classList.add('hidden');
  });

  anatomyModal?.addEventListener('click', (e) => {
    if (e.target === anatomyModal) anatomyModal.classList.add('hidden');
  });

  document.querySelectorAll('.anatomy-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      activeAnatomyLayer = parseInt(btn.dataset.layer, 10);
      document.querySelectorAll('.anatomy-tab-btn').forEach((b, idx) => {
        b.className = `anatomy-tab-btn p-1.5 rounded-xl border text-center text-xs font-bold transition ${
          idx === activeAnatomyLayer 
            ? 'bg-amber-500/20 border-amber-500 text-amber-300' 
            : 'bg-white/[0.04] border-white/[0.08] text-zinc-400 hover:text-white'
        }`;
      });
      document.getElementById('anatomy-icon').textContent = BURGER_LAYERS[activeAnatomyLayer].icon;
      document.getElementById('anatomy-title').textContent = BURGER_LAYERS[activeAnatomyLayer].title;
      document.getElementById('anatomy-desc').textContent = BURGER_LAYERS[activeAnatomyLayer].desc;
    });
  });

  document.getElementById('anatomy-add-btn')?.addEventListener('click', () => {
    addItemToTray('b-7');
    anatomyModal?.classList.add('hidden');
    showToast('آتیش برگر به لیست اضافه شد');
  });

  const itemModal = document.getElementById('item-modal');
  itemModal?.addEventListener('click', (e) => {
    if (e.target === itemModal) itemModal.classList.add('hidden');
  });

  document.getElementById('nav-menu-btn')?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Interactive Delivery Neighborhood selection
  document.querySelectorAll('.delivery-chip-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      selectDeliveryNeighborhood(btn.dataset.id);
    });
  });

  document.querySelectorAll('.delivery-pin-group').forEach(pin => {
    pin.addEventListener('click', () => {
      selectDeliveryNeighborhood(pin.dataset.id);
    });
  });

  document.querySelectorAll('#delivery-map-text-labels text').forEach(text => {
    text.addEventListener('click', () => {
      selectDeliveryNeighborhood(text.dataset.id);
    });
  });
}

let itemSelectedShape = {}; // itemId -> shapeId ('normal' | 'heart')

function getItemTrayCount(item) {
  if (!item) return 0;
  let count = orderTray[item.id] || 0;
  if (item.shapes) {
    item.shapes.forEach(s => {
      count += (orderTray[`${item.id}:${s.id}`] || 0);
    });
  }
  return count;
}

function getTrayItemDetails(key) {
  if (!key) return null;
  if (key.includes(':')) {
    const [id, shapeId] = key.split(':');
    const baseItem = menuData.items.find(i => i.id === id);
    if (!baseItem) return null;
    const shape = baseItem.shapes?.find(s => s.id === shapeId) || baseItem.shapes?.[0];
    return {
      key,
      id: baseItem.id,
      title: `${baseItem.title} (${shape?.name || 'کلاسیک'})`,
      image: shape?.image || baseItem.image,
      ingredients: shape?.id === 'heart' ? 'خمیر پیتزا طرح قلبی، ' + (baseItem.ingredients || '') : baseItem.ingredients,
      placeholderIcon: '🍕'
    };
  }
  const item = menuData.items.find(i => i.id === key);
  if (!item) return null;
  return {
    key,
    id: item.id,
    title: item.title,
    image: item.image,
    ingredients: item.ingredients,
    placeholderIcon: item.placeholderIcon
  };
}

function addItemToTray(itemId) {
  orderTray[itemId] = (orderTray[itemId] || 0) + 1;
  saveTray();
  const trayModal = document.getElementById('tray-modal');
  if (trayModal && !trayModal.classList.contains('hidden')) {
    renderTrayModal();
  }
}

function removeItemFromTray(itemId) {
  if (!orderTray[itemId]) return;
  orderTray[itemId] -= 1;
  if (orderTray[itemId] <= 0) {
    delete orderTray[itemId];
  }
  saveTray();
  renderTrayModal();
}

function deleteItemFromTray(itemId) {
  delete orderTray[itemId];
  saveTray();
  renderTrayModal();
}

function clearTray() {
  orderTray = {};
  saveTray();
  renderTrayModal();
}

function renderTrayModal() {
  const box = document.getElementById('tray-modal-box');
  const restaurant = menuData?.restaurant || CONFIG;
  if (!box) return;

  const itemIds = Object.keys(orderTray);
  const totalCount = getTrayTotalCount();

  if (itemIds.length === 0) {
    box.innerHTML = `
      <div class="p-6 text-center">
        <div class="w-14 h-14 mx-auto rounded-full bg-white/[0.05] flex items-center justify-center text-2xl mb-3">
          📋
        </div>
        <h3 class="text-sm font-black text-white mb-1.5">لیست سفارش شما خالی است</h3>
        <p class="text-xs text-zinc-400 mb-5">غذاهای مورد علاقه خود را با کلیک روی علامت (+) اضافه کنید.</p>
        <button 
          id="close-empty-tray-btn"
          class="w-full py-2.5 rounded-xl bg-amber-500 text-black font-black text-xs"
        >
          مشاهده منو و افزودن غذا
        </button>
      </div>
    `;
    document.getElementById('close-empty-tray-btn')?.addEventListener('click', () => {
      document.getElementById('tray-modal')?.classList.add('hidden');
    });
    return;
  }

  let orderSummaryText = `📋 لیست اقلام سفارش - فست‌فود آتیش:\n`;
  itemIds.forEach(id => {
    const item = getTrayItemDetails(id);
    if (item) {
      orderSummaryText += `• ${item.title} (${toPersianDigits(orderTray[id])} عدد)\n`;
    }
  });
  orderSummaryText += `\n📞 تلفن سفارش مستقیم: ۰۲۱-۲۲۵۶۱۹۴۹\n📍 دروس، خیابان شهید کلاهدوز (دولت)`;

  box.innerHTML = `
    <!-- Modal Header -->
    <div class="p-4 border-b border-white/[0.08] flex items-center justify-between">
      <div class="flex items-center gap-2">
        <span class="text-xl">📋</span>
        <div>
          <h2 class="text-sm font-black text-white">لیست سفارش شما</h2>
          <span class="text-[11px] text-amber-400">${toPersianDigits(totalCount)} قلم غذا آماده سفارش</span>
        </div>
      </div>
      <button id="close-tray-btn" class="w-7 h-7 rounded-full bg-white/[0.08] flex items-center justify-center text-zinc-400 hover:text-white">
        ${ICONS.close}
      </button>
    </div>

    <!-- Friendly Non-Payment Notice for Iranian Customers -->
    <div class="m-3 p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-[11px] text-amber-300 leading-relaxed flex items-start gap-2">
      <span class="text-sm flex-shrink-0">💡</span>
      <p>
        این لیست برای راحتی شما در آماده‌سازی سفارش ایجاد شده است. سفارش نهایی به صورت مستقیم از طریق تماس تلفنی یا اسنپ‌فود ثبت می‌شود.
      </p>
    </div>

    <!-- Items List -->
    <div class="px-3 py-1 flex flex-col gap-2 max-h-60 overflow-y-auto">
      ${itemIds.map(id => {
        const item = getTrayItemDetails(id);
        if (!item) return '';
        const qty = orderTray[id];
        const imgSrc = getImgSrc(item.image);
        return `
          <div class="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <div class="flex items-center gap-2.5">
              <div class="w-10 h-10 rounded-lg overflow-hidden bg-black/40 flex-shrink-0 border border-white/[0.08]">
                <img src="${imgSrc}" alt="${item.title}" class="w-full h-full object-cover" onerror="this.src='/images/atish-burger.jpg'" />
              </div>
              <div class="text-right">
                <h4 class="text-xs font-bold text-white">${item.title}</h4>
                <span class="text-[10px] text-zinc-400 font-light truncate max-w-[120px] block">${item.ingredients || 'آتیش'}</span>
              </div>
            </div>

            <!-- Quantity Counter Controls -->
            <div class="flex items-center gap-1.5 flex-shrink-0">
              <div class="flex items-center bg-[#222228] border border-white/[0.12] rounded-xl p-1 gap-1">
                <button 
                  type="button"
                  data-action="decrease" 
                  data-id="${id}" 
                  class="w-7 h-7 rounded-lg bg-white/[0.06] hover:bg-white/[0.15] active:scale-90 flex items-center justify-center text-zinc-300 hover:text-white transition"
                  aria-label="کاهش تعداد"
                >
                  <span class="pointer-events-none">${ICONS.minus}</span>
                </button>
                <span class="text-xs sm:text-sm font-black text-amber-400 px-1.5 min-w-[20px] text-center select-none pointer-events-none">
                  ${toPersianDigits(qty)}
                </span>
                <button 
                  type="button"
                  data-action="increase" 
                  data-id="${id}" 
                  class="w-7 h-7 rounded-lg bg-amber-500/15 hover:bg-amber-500/25 active:scale-90 flex items-center justify-center text-amber-300 hover:text-white transition"
                  aria-label="افزایش تعداد"
                >
                  <span class="pointer-events-none">${ICONS.plus}</span>
                </button>
              </div>

              <!-- Delete (Trash) Button -->
              <button 
                type="button"
                data-action="delete" 
                data-id="${id}" 
                class="w-8 h-8 rounded-xl bg-red-500/10 hover:bg-red-500/20 border border-red-500/25 active:scale-90 flex items-center justify-center text-red-400 hover:text-red-300 transition"
                aria-label="حذف این آیتم"
              >
                <span class="pointer-events-none">${ICONS.trash}</span>
              </button>
            </div>
          </div>
        `;
      }).join('')}
    </div>

    <!-- Action Buttons (021 on LEFT) -->
    <div class="p-3 mt-auto border-t border-white/[0.08] flex flex-col gap-2">
      <a 
        href="tel:${restaurant.phone}"
        class="w-full py-3 rounded-xl bg-[#22c55e] hover:bg-[#16a34a] text-white font-black text-xs flex items-center justify-center gap-1.5 shadow-md shadow-emerald-500/25"
      >
        ${ICONS.phone}
        <span class="flex items-center gap-1">
          <span>تماس تلفنی و ثبت سفارش</span>
          <span dir="ltr" class="inline-flex items-center font-bold tracking-wider">
            (<span>۰۲۱</span><span>-</span><span>۲۲۵۶۱۹۴۹</span>)
          </span>
        </span>
      </a>

      <a 
        href="${restaurant.snappfoodUrl}" 
        target="_blank" 
        rel="noopener noreferrer"
        class="w-full py-2.5 rounded-xl bg-[#ff00a6] hover:bg-[#e00092] text-white font-black text-xs flex items-center justify-center gap-1.5 shadow-md shadow-pink-500/25"
      >
        ${ICONS.scooter}
        <span>مشاهده قیمت روز و سفارش در اسنپ‌فود</span>
      </a>

      <div class="grid grid-cols-2 gap-2 pt-0.5">
        <button 
          id="btn-copy-order" 
          class="py-2 rounded-lg glass-pill text-[11px] font-bold text-zinc-300 hover:text-white flex items-center justify-center gap-1"
        >
          ${ICONS.copy}
          <span>کپی لیست سفارش</span>
        </button>

        <button 
          id="btn-clear-tray"
          class="py-2 rounded-lg glass-pill text-[11px] font-bold text-red-400 hover:text-red-300 flex items-center justify-center gap-1"
        >
          ${ICONS.trash}
          <span>خالی کردن لیست</span>
        </button>
      </div>
    </div>
  `;

  document.getElementById('close-tray-btn')?.addEventListener('click', () => {
    document.getElementById('tray-modal')?.classList.add('hidden');
  });

  box.querySelectorAll('button[data-action]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      e.preventDefault();
      const action = btn.dataset.action;
      const id = btn.dataset.id;
      if (action === 'increase') addItemToTray(id);
      if (action === 'decrease') removeItemFromTray(id);
      if (action === 'delete') deleteItemFromTray(id);
    });
  });

  document.getElementById('btn-copy-order')?.addEventListener('click', () => {
    navigator.clipboard?.writeText(orderSummaryText).then(() => {
      showToast('متن سفارش کپی شد');
    });
  });

  document.getElementById('btn-clear-tray')?.addEventListener('click', () => {
    clearTray();
  });
}

function getImgSrc(img) {
  if (!img) return '';
  if (img.startsWith('./')) return img.slice(1);
  if (img.startsWith('/')) return img;
  return '/' + img;
}

function updateCardShapeUI(item, shapeId) {
  if (!item) return;
  itemSelectedShape[item.id] = shapeId;
  const shape = item.shapes?.find(s => s.id === shapeId) || item.shapes?.[0];
  if (!shape) return;

  const cardImg = document.getElementById(`card-img-${item.id}`);
  if (cardImg) {
    cardImg.style.opacity = '0.3';
    setTimeout(() => {
      cardImg.src = getImgSrc(shape.image);
      cardImg.style.opacity = '1';
    }, 120);
  }

  const badgeEl = document.getElementById(`card-badge-${item.id}`);
  if (badgeEl) {
    const text = shape.badge || item.badge || '';
    badgeEl.textContent = text;
    badgeEl.className = text ? 'bg-black/80 backdrop-blur-md text-amber-300 border border-amber-500/30 text-[9px] md:text-[10px] font-black px-2 py-0.5 rounded-lg shadow-sm' : 'hidden';
  }

  const btnText = document.getElementById(`card-btn-text-${item.id}`);
  if (btnText) {
    btnText.textContent = `افزودن ${shape.shortName || shape.name}`;
  }

  // Update card dots if present
  item.shapes?.forEach(s => {
    const dot = document.getElementById(`card-dot-${item.id}-${s.id}`);
    if (dot) {
      dot.className = `h-1.5 rounded-full transition-all duration-300 ${s.id === shapeId ? 'bg-amber-400 w-4 shadow' : 'bg-white/40 w-1.5'}`;
    }
  });
}

function openItemModal(item) {
  const modal = document.getElementById('item-modal');
  const box = document.getElementById('item-modal-box');
  const restaurant = menuData?.restaurant || CONFIG;
  if (!modal || !box) return;

  const hasShapes = item.shapes && item.shapes.length > 1;
  let activeShapeId = hasShapes ? (itemSelectedShape[item.id] || 'normal') : null;
  let activeShape = hasShapes ? (item.shapes.find(s => s.id === activeShapeId) || item.shapes[0]) : null;
  const initialImg = activeShape ? activeShape.image : item.image;
  const imgSrc = getImgSrc(initialImg);

  box.innerHTML = `
    <!-- Modal Photo Container with Touch Swipe and Arrow Controls -->
    <div class="relative w-full h-64 bg-gradient-to-b from-[#24242c] to-[#141417] overflow-hidden flex items-center justify-center select-none" id="modal-photo-container">
      <img 
        id="modal-main-img"
        src="${imgSrc}" 
        alt="${item.title}" 
        class="w-full h-full object-cover transition-opacity duration-300"
        onerror="this.style.display='none';this.nextElementSibling.style.display='flex';"
      />
      <div style="display:none;" class="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-[#24242c] to-[#141417]">
        <span class="text-6xl filter drop-shadow-lg">${item.placeholderIcon || '🍔'}</span>
      </div>

      <button 
        id="close-item-modal-btn" 
        class="absolute top-3 left-3 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md text-white flex items-center justify-center border border-white/[0.15] z-30"
      >
        ${ICONS.close}
      </button>

      <!-- Badges -->
      <div class="absolute top-3 right-3 flex flex-col gap-1.5 items-end z-30 pointer-events-none">
        ${item.isChefRecommendation ? `
          <span class="bg-gradient-to-r from-amber-500 to-orange-500 text-black font-black text-[11px] px-2.5 py-0.5 rounded-lg shadow-lg flex items-center gap-1">
            <span>⭐</span>
            <span>پیشنهاد سرآشپز</span>
          </span>
        ` : ''}
        <span 
          id="modal-badge"
          class="${(activeShape?.badge || item.badge) ? '' : 'hidden'} bg-amber-500/90 text-black font-black text-[11px] px-2.5 py-0.5 rounded-full shadow-lg backdrop-blur-sm"
        >
          ${activeShape?.badge || item.badge || ''}
        </span>
      </div>

      ${hasShapes ? `
        <!-- Next / Prev Arrows for 1-click Swapping -->
        <button 
          id="modal-prev-shape-btn" 
          type="button" 
          aria-label="عکس قبلی"
          class="absolute left-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 hover:bg-black/85 text-white flex items-center justify-center border border-white/[0.2] shadow-lg z-20 backdrop-blur-sm transition"
        >
          ❮
        </button>
        <button 
          id="modal-next-shape-btn" 
          type="button" 
          aria-label="عکس بعدی"
          class="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 hover:bg-black/85 text-white flex items-center justify-center border border-white/[0.2] shadow-lg z-20 backdrop-blur-sm transition"
        >
          ❯
        </button>

        <!-- Swipe Dots Indicator -->
        <div class="absolute bottom-3 inset-x-0 flex items-center justify-center gap-1.5 z-20 pointer-events-none">
          ${item.shapes.map(s => `
            <span 
              data-dot-shape="${s.id}"
              class="h-2 rounded-full transition-all duration-300 ${s.id === activeShapeId ? 'bg-amber-400 w-5 shadow' : 'bg-white/40 w-2'}"
            ></span>
          `).join('')}
        </div>
      ` : ''}
    </div>

    <div class="p-4 text-right">
      <div class="flex items-center justify-between gap-2 mb-2">
        <div class="flex items-center gap-2">
          <h3 class="text-base font-black text-white" id="modal-title-text">${item.title}</h3>
          ${item.isChefRecommendation ? `
            <span class="text-[10px] font-black text-amber-300 bg-amber-500/15 border border-amber-500/30 px-2 py-0.5 rounded-md flex items-center gap-1">
              <span>⭐</span>
              <span>پیشنهاد سرآشپز</span>
            </span>
          ` : ''}
        </div>
        ${item.tag ? `<span class="text-[10px] font-bold text-red-400 bg-red-500/10 px-2 py-0.5 rounded-full border border-red-500/20">${item.tag}</span>` : ''}
      </div>

      ${hasShapes ? `
        <!-- Interactive Shape Selector Buttons (Swipe or Click) -->
        <div class="mb-4 bg-white/[0.03] p-2.5 rounded-2xl border border-white/[0.08]">
          <div class="flex items-center justify-between mb-2">
            <span class="text-[11px] text-amber-300 font-bold flex items-center gap-1">
              <span>✨</span>
              <span>انتخاب مدل و شکل پیتزا:</span>
            </span>
            <span class="text-[10px] text-zinc-400 font-light">با کشیدن عکس هم تغییر می‌کند</span>
          </div>
          <div class="grid grid-cols-2 gap-2" id="modal-shapes-group">
            ${item.shapes.map(s => {
              const isActive = s.id === activeShapeId;
              return `
                <button 
                  type="button" 
                  data-modal-shape-btn="${s.id}"
                  class="py-2.5 px-3 rounded-xl text-xs font-black flex items-center justify-center border transition-all ${isActive ? 'bg-amber-500 text-black border-amber-400 shadow-lg' : 'bg-[#222228] text-zinc-300 border-white/[0.08] hover:text-white hover:bg-white/[0.08]'}"
                >
                  <span>${s.name}</span>
                </button>
              `;
            }).join('')}
          </div>
        </div>
      ` : ''}

      ${item.ingredients && item.categoryId !== 'drinks' ? `
        <div class="mb-4">
          <span class="text-[11px] text-zinc-400 font-bold block mb-1">توضیحات و ترکیبات:</span>
          <p class="text-xs text-zinc-200 leading-relaxed font-light bg-white/[0.03] p-3 rounded-xl border border-white/[0.06]">
            ${item.ingredients}
          </p>
        </div>
      ` : ''}

      <div class="flex flex-col gap-2 mt-4">
        <button 
          id="modal-add-tray-btn"
          class="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-black font-black text-sm flex items-center justify-center gap-1.5 shadow-md shadow-orange-500/25 transition"
        >
          ${ICONS.plus}
          <span id="modal-btn-label">
            ${hasShapes ? `افزودن به لیست سفارش (${activeShape.name})` : 'افزودن به لیست سفارش'}
          </span>
        </button>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');

  document.getElementById('close-item-modal-btn')?.addEventListener('click', () => {
    modal.classList.add('hidden');
  });

  if (hasShapes) {
    const updateModalShape = (newShapeId) => {
      activeShapeId = newShapeId;
      itemSelectedShape[item.id] = newShapeId;
      activeShape = item.shapes.find(s => s.id === newShapeId) || item.shapes[0];

      // Update image
      const imgEl = document.getElementById('modal-main-img');
      if (imgEl) {
        imgEl.style.opacity = '0.3';
        setTimeout(() => {
          imgEl.src = getImgSrc(activeShape.image);
          imgEl.style.opacity = '1';
        }, 120);
      }

      // Update badge
      const badgeEl = document.getElementById('modal-badge');
      if (badgeEl) {
        const text = activeShape.badge || item.badge || '';
        badgeEl.textContent = text;
        badgeEl.className = text ? 'absolute top-3 right-3 bg-amber-500/90 text-black font-black text-[11px] px-2.5 py-0.5 rounded-full shadow-lg backdrop-blur-sm z-30' : 'hidden';
      }

      // Update dots
      document.querySelectorAll('[data-dot-shape]').forEach(dot => {
        const isCurrent = dot.dataset.dotShape === newShapeId;
        dot.className = `h-2 rounded-full transition-all duration-300 ${isCurrent ? 'bg-amber-400 w-5 shadow' : 'bg-white/40 w-2'}`;
      });

      // Update buttons
      document.querySelectorAll('[data-modal-shape-btn]').forEach(btn => {
        const isCurrent = btn.dataset.modalShapeBtn === newShapeId;
        btn.className = `py-2.5 px-3 rounded-xl text-xs font-black flex items-center justify-center gap-2 border transition-all ${isCurrent ? 'bg-amber-500 text-black border-amber-400 shadow-lg' : 'bg-[#222228] text-zinc-300 border-white/[0.08] hover:text-white hover:bg-white/[0.08]'}`;
      });

      // Update button label
      const btnLabel = document.getElementById('modal-btn-label');
      if (btnLabel) {
        btnLabel.textContent = `افزودن به لیست سفارش (${activeShape.name})`;
      }

      // Also sync card on main grid
      updateCardShapeUI(item, newShapeId);
    };

    const toggleModalNextShape = () => {
      const currentIndex = item.shapes.findIndex(s => s.id === activeShapeId);
      const nextIndex = (currentIndex + 1) % item.shapes.length;
      updateModalShape(item.shapes[nextIndex].id);
    };

    document.getElementById('modal-next-shape-btn')?.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleModalNextShape();
    });

    document.getElementById('modal-prev-shape-btn')?.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleModalNextShape();
    });

    document.querySelectorAll('[data-modal-shape-btn]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        updateModalShape(btn.dataset.modalShapeBtn);
      });
    });

    // Touch swipe gesture on modal photo
    let startX = 0;
    const photoContainer = document.getElementById('modal-photo-container');
    photoContainer?.addEventListener('touchstart', (e) => {
      startX = e.changedTouches[0].screenX;
    }, { passive: true });

    photoContainer?.addEventListener('touchend', (e) => {
      const endX = e.changedTouches[0].screenX;
      if (Math.abs(endX - startX) > 40) {
        toggleModalNextShape();
      }
    }, { passive: true });
  }

  document.getElementById('modal-add-tray-btn')?.addEventListener('click', () => {
    let key = item.id;
    let addedTitle = item.title;
    if (hasShapes && activeShape) {
      key = `${item.id}:${activeShape.id}`;
      addedTitle = `${item.title} (${activeShape.name})`;
    }
    addItemToTray(key);
    modal.classList.add('hidden');
    showToast(`${addedTitle} به لیست اضافه شد`);
  });
}

function renderMenuItems() {
  const container = document.getElementById('menu-container');
  if (!container || !menuData) return;

  const categories = menuData.categories || [];
  let items = menuData.items || [];

  if (searchQuery) {
    const qNorm = normalizePersianText(searchQuery);
    items = items.filter(item => {
      const matchTitle = normalizePersianText(item.title).includes(qNorm);
      const matchIng = item.ingredients && normalizePersianText(item.ingredients).includes(qNorm);
      const cat = categories.find(c => c.id === item.categoryId);
      const matchCat = cat && normalizePersianText(cat.name + ' ' + (cat.title || '')).includes(qNorm);
      return matchTitle || matchIng || matchCat;
    });

    if (items.length === 0) {
      container.innerHTML = `
        <div class="flex flex-col items-center justify-center py-16 text-center text-zinc-400 glass-card rounded-2xl p-6">
          <span class="text-5xl mb-3">🔍</span>
          <p class="text-base font-black text-white">غذایی مطابق «${escapeHtml(searchQuery)}» پیدا نشد!</p>
          <p class="text-xs text-zinc-400 mt-1 mb-4">می‌توانید کلمه دیگری مانند «پیتزا»، «برگر»، «پپرونی» یا «سوخاری» را جستجو فرمایید.</p>
          <button id="reset-search-btn" class="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-black text-xs font-black hover:opacity-90 transition shadow-md">
            نمایش کل منو
          </button>
        </div>
      `;
      document.getElementById('reset-search-btn')?.addEventListener('click', () => {
        searchQuery = '';
        const dInput = document.getElementById('desktop-search-input');
        const mInput = document.getElementById('menu-search-input');
        const clearM = document.getElementById('clear-search-btn');
        const clearD = document.getElementById('clear-desktop-search-btn');
        if (dInput) dInput.value = '';
        if (mInput) mInput.value = '';
        if (clearM) clearM.classList.add('hidden');
        if (clearD) clearD.classList.add('hidden');
        renderMenuItems();
      });
      return;
    }

    container.innerHTML = `
      <div class="flex items-center justify-between mb-4 p-3 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs">
        <div class="flex items-center gap-2 text-amber-300 font-bold">
          <span>🔍</span>
          <span>نتایج جستجو برای: «${escapeHtml(searchQuery)}»</span>
          <span class="bg-amber-500 text-black font-black text-[10px] px-2 py-0.5 rounded-full mr-1">
            ${toPersianDigits(items.length)} غذا
          </span>
        </div>
        <button id="reset-search-btn-top" class="text-zinc-400 hover:text-white text-[11px] underline">
          پاک کردن جستجو ✕
        </button>
      </div>
      <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
        ${items.map(item => renderFoodCard(item)).join('')}
      </div>
    `;
    document.getElementById('reset-search-btn-top')?.addEventListener('click', () => {
      searchQuery = '';
      const dInput = document.getElementById('desktop-search-input');
      const mInput = document.getElementById('menu-search-input');
      const clearM = document.getElementById('clear-search-btn');
      const clearD = document.getElementById('clear-desktop-search-btn');
      if (dInput) dInput.value = '';
      if (mInput) mInput.value = '';
      if (clearM) clearM.classList.add('hidden');
      if (clearD) clearD.classList.add('hidden');
      renderMenuItems();
    });
    attachCardEvents();
    return;
  }

  container.innerHTML = categories.map(category => {
    const categoryItems = items.filter(i => i.categoryId === category.id);
    if (categoryItems.length === 0) return '';

    return `
      <section class="mb-10 scroll-mt-28" id="sec-${category.id}">
        <!-- Section Header -->
        <div class="flex items-center justify-between mb-4 pb-2.5 border-b border-white/[0.08]">
          <div class="flex flex-col text-right">
            <h2 class="text-base sm:text-lg md:text-xl font-black text-white flex items-center gap-2">
              <span>${category.icon}</span>
              <span>${category.title || category.name}</span>
            </h2>
            ${category.subtitle ? `<span class="text-xs text-zinc-400 font-light mt-0.5">${category.subtitle}</span>` : ''}
          </div>
          <span class="bg-[#18181c] text-amber-400 border border-white/[0.08] text-[11px] font-black px-3 py-1 rounded-full flex-shrink-0">
            ${toPersianDigits(categoryItems.length)} غذا
          </span>
        </div>

        <!-- Food Grid (Responsive: 2 cols on mobile, 3 on tablet, 4 on desktop) -->
        <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
          ${categoryItems.map(item => renderFoodCard(item)).join('')}
        </div>
      </section>
    `;
  }).join('');

  attachCardEvents();
}

function renderFoodCard(item) {
  const countInTray = getItemTrayCount(item);
  const hasShapes = item.shapes && item.shapes.length > 1;
  const activeShapeId = itemSelectedShape[item.id] || 'normal';
  const activeShape = hasShapes ? (item.shapes.find(s => s.id === activeShapeId) || item.shapes[0]) : null;
  const imgSrc = getImgSrc(activeShape ? activeShape.image : item.image);
  const badgeText = activeShape?.badge || item.badge;
  const isChef = !!item.isChefRecommendation;

  return `
    <article 
      data-id="${item.id}" 
      class="food-card glass-card rounded-2xl overflow-hidden shadow-sm flex flex-col group transition-all duration-300 hover:border-amber-500/40 hover:-translate-y-1 hover:shadow-xl cursor-pointer text-right ${isChef ? 'border-amber-500/40 ring-1 ring-amber-500/25 shadow-amber-950/20' : ''}"
    >
      <!-- Food Image Container -->
      <div 
        class="compact-photo-frame relative w-full bg-[#1e1e24] overflow-hidden flex items-center justify-center select-none"
        data-photo-container="${item.id}"
      >
        ${imgSrc ? `
          <img 
            id="card-img-${item.id}"
            src="${imgSrc}" 
            alt="${item.title}" 
            loading="lazy" 
            class="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
            onerror="this.style.display='none';this.nextElementSibling.style.display='flex';"
          />
          <div style="display:none;" class="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-[#222228] to-[#16161a]">
            <span class="text-3xl filter drop-shadow">${item.placeholderIcon || '🍔'}</span>
          </div>
        ` : `
          <div class="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-[#24242c] to-[#161619] relative">
            <div class="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/[0.05] border border-white/[0.08] flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-300">
              <span class="text-2xl md:text-4xl filter drop-shadow">${item.placeholderIcon || '🍔'}</span>
            </div>
          </div>
        `}

        <!-- Top Badges -->
        <div class="absolute top-2 right-2 flex flex-col gap-1 items-end pointer-events-none z-10">
          ${isChef ? `
            <span class="bg-gradient-to-r from-amber-500 to-orange-500 text-black font-black text-[9px] md:text-[10px] px-2 py-0.5 rounded-lg shadow-md flex items-center gap-1">
              <span>⭐</span>
              <span>پیشنهاد سرآشپز</span>
            </span>
          ` : ''}
          <span 
            id="card-badge-${item.id}"
            class="${badgeText ? '' : 'hidden'} bg-black/80 backdrop-blur-md text-amber-300 border border-amber-500/30 text-[9px] md:text-[10px] font-black px-2 py-0.5 rounded-lg shadow-sm"
          >
            ${badgeText || ''}
          </span>
        </div>

        <div 
          id="card-tray-count-${item.id}" 
          class="${countInTray > 0 ? 'flex' : 'hidden'} absolute top-2 left-2 bg-amber-500 text-black font-black text-[10px] md:text-xs w-5 h-5 md:w-6 md:h-6 rounded-full items-center justify-center shadow z-10 pointer-events-none"
        >
          ${toPersianDigits(countInTray)}
        </div>

        ${hasShapes ? `
          <!-- Minimal Dots Indicator showing available photo shapes -->
          <div class="absolute bottom-2.5 inset-x-0 flex items-center justify-center gap-1.5 z-10 pointer-events-none">
            ${item.shapes.map(s => `
              <span 
                id="card-dot-${item.id}-${s.id}"
                class="h-1.5 rounded-full transition-all duration-300 ${s.id === activeShapeId ? 'bg-amber-400 w-4 shadow' : 'bg-white/40 w-1.5'}"
              ></span>
            `).join('')}
          </div>
        ` : ''}
      </div>

      <!-- Card Body (title + action) -->
      <div class="p-2.5 sm:p-3.5 flex flex-col flex-grow text-right">
        <h3 class="text-xs sm:text-sm md:text-base font-black text-white group-hover:text-amber-400 transition-colors mb-2 truncate">
          ${item.title}
        </h3>

        <!-- Single "افزودن به لیست سفارش" button only -->
        <div class="mt-auto pt-2 border-t border-white/[0.06]">
          <button 
            data-action="add-tray" 
            data-id="${item.id}"
            class="w-full py-2 px-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-black font-black text-[11px] sm:text-xs flex items-center justify-center gap-1.5 shadow-sm transition"
          >
            ${ICONS.plus}
            <span id="card-btn-text-${item.id}">
              ${hasShapes ? `افزودن ${activeShape.shortName || activeShape.name}` : 'افزودن به لیست سفارش'}
            </span>
          </button>
        </div>
      </div>
    </article>
  `;
}

function attachCardEvents() {
  document.querySelectorAll('.food-card').forEach(card => {
    const id = card.dataset.id;
    const item = menuData.items.find(i => i.id === id);
    if (!item) return;

    let isCardSwiped = false;

    card.addEventListener('click', (e) => {
      if (isCardSwiped) {
        isCardSwiped = false;
        return;
      }
      if (e.target.closest('button[data-action="add-tray"]') || e.target.closest('a')) {
        return;
      }
      openItemModal(item);
    });

    // Touch swipe & mouse drag on card photo for shape swapping
    if (item.shapes && item.shapes.length > 1) {
      let cardStartX = 0;
      let cardStartY = 0;
      const photoEl = card.querySelector(`[data-photo-container="${item.id}"]`);

      photoEl?.addEventListener('touchstart', (e) => {
        cardStartX = e.changedTouches[0].screenX;
        cardStartY = e.changedTouches[0].screenY;
        isCardSwiped = false;
      }, { passive: true });

      photoEl?.addEventListener('touchend', (e) => {
        const cardEndX = e.changedTouches[0].screenX;
        const cardEndY = e.changedTouches[0].screenY;
        const deltaX = cardEndX - cardStartX;
        const deltaY = cardEndY - cardStartY;
        if (Math.abs(deltaX) > 30 && Math.abs(deltaX) > Math.abs(deltaY)) {
          isCardSwiped = true;
          const currentShape = itemSelectedShape[item.id] || 'normal';
          const nextShape = currentShape === 'normal' ? 'heart' : 'normal';
          updateCardShapeUI(item, nextShape);
          setTimeout(() => { isCardSwiped = false; }, 200);
        }
      }, { passive: true });

      // Mouse drag for desktop swipe
      let isMouseDown = false;
      photoEl?.addEventListener('mousedown', (e) => {
        isMouseDown = true;
        cardStartX = e.screenX;
        isCardSwiped = false;
      });

      photoEl?.addEventListener('mouseup', (e) => {
        if (!isMouseDown) return;
        isMouseDown = false;
        const cardEndX = e.screenX;
        if (Math.abs(cardEndX - cardStartX) > 30) {
          isCardSwiped = true;
          const currentShape = itemSelectedShape[item.id] || 'normal';
          const nextShape = currentShape === 'normal' ? 'heart' : 'normal';
          updateCardShapeUI(item, nextShape);
          setTimeout(() => { isCardSwiped = false; }, 200);
        }
      });

      photoEl?.addEventListener('mouseleave', () => {
        isMouseDown = false;
      });
    }

    const addBtn = card.querySelector('button[data-action="add-tray"]');
    addBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      let key = id;
      let toastTitle = item.title;
      if (item.shapes && item.shapes.length > 1) {
        const activeShapeId = itemSelectedShape[item.id] || 'normal';
        const shape = item.shapes.find(s => s.id === activeShapeId) || item.shapes[0];
        key = `${item.id}:${activeShapeId}`;
        toastTitle = `${item.title} (${shape.name})`;
      }
      addItemToTray(key);
      showToast(`${toastTitle} به لیست اضافه شد`);
    });
  });
}

// PWA Installation & Service Worker Setup
function initPWA() {
  if ('serviceWorker' in navigator && window.location.protocol.startsWith('http')) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js').catch(err => {
        console.log('SW registration error:', err);
      });
    });
  }

  const isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
  if (isStandalone) {
    return;
  }

  const isIOS = /iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase());
  const headerInstallBtn = document.getElementById('btn-install-pwa');
  const banner = document.getElementById('pwa-install-banner');
  const bannerInstallBtn = document.getElementById('pwa-banner-install-btn');
  const bannerCloseBtn = document.getElementById('pwa-banner-close-btn');
  const iosModal = document.getElementById('ios-install-modal');
  const closeIosBtn = document.getElementById('close-ios-modal-btn');
  const confirmIosBtn = document.getElementById('confirm-ios-modal-btn');

  // On iOS, show install buttons since beforeinstallprompt doesn't fire on iOS Safari
  if (isIOS) {
    headerInstallBtn?.classList.remove('hidden');
    headerInstallBtn?.classList.add('flex');
    banner?.classList.remove('hidden');
  }

  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredInstallPrompt = e;
    headerInstallBtn?.classList.remove('hidden');
    headerInstallBtn?.classList.add('flex');
    banner?.classList.remove('hidden');
  });

  const handleInstallClick = async () => {
    if (isIOS) {
      iosModal?.classList.remove('hidden');
      return;
    }

    if (deferredInstallPrompt) {
      deferredInstallPrompt.prompt();
      const { outcome } = await deferredInstallPrompt.userChoice;
      if (outcome === 'accepted') {
        headerInstallBtn?.classList.add('hidden');
        banner?.classList.add('hidden');
        showToast('اپلیکیشن با موفقیت نصب شد');
      }
      deferredInstallPrompt = null;
    } else {
      showToast('برای نصب، از منوی مرورگر گزینه Add to Home Screen را بزنید.');
    }
  };

  headerInstallBtn?.addEventListener('click', handleInstallClick);
  bannerInstallBtn?.addEventListener('click', handleInstallClick);
  bannerCloseBtn?.addEventListener('click', () => {
    banner?.classList.add('hidden');
  });

  closeIosBtn?.addEventListener('click', () => {
    iosModal?.classList.add('hidden');
  });
  confirmIosBtn?.addEventListener('click', () => {
    iosModal?.classList.add('hidden');
  });
  iosModal?.addEventListener('click', (e) => {
    if (e.target === iosModal) iosModal.classList.add('hidden');
  });
}

// Initialize Application
renderApp();
updateTrayUI();
initPWA();
