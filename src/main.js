import { CONFIG } from './config.js';
import staticMenuData from './data/menu.json';
import deliveryData from './data/delivery.json';
// [DISABLED UNTIL FURTHER NOTICE - QR Discount & Cashier System]
// import voucherHashes from './data/voucher-hashes.json';

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

// Format price in Tomans with Persian digits
function formatPrice(price) {
  if (price === null || price === undefined || price === '' || isNaN(price)) return '';
  const num = Number(price);
  if (num === 0) return 'رایگان';
  return `${toPersianDigits(num.toLocaleString('en-US'))} تومان`;
}

// Total price in tray
function getTrayTotalPrice() {
  return Object.entries(orderTray).reduce((acc, [id, count]) => {
    const item = getTrayItemDetails(id);
    return acc + (item && item.price ? Number(item.price) * count : 0);
  }, 0);
}

// Save tray to storage
function saveTray() {
  localStorage.setItem('atish_order_tray', JSON.stringify(orderTray));
  updateTrayUI();
}

// =========================================================================
// YEARLY CHRISTMAS THEME ENGINE (Auto-Active: Nov 22 – Jan 5, Asia/Tehran)
// =========================================================================
function getChristmasSeasonState() {
  const params = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : null;
  const themeOverride = params?.get('theme')?.toLowerCase();

  let year, month, day;
  let isActive = false;

  // Use native Temporal PlainMonthDay/PlainDate when available (no timezone drift)
  if (typeof Temporal !== 'undefined' && Temporal.Now && Temporal.PlainMonthDay && Temporal.PlainDate) {
    const today = Temporal.Now.zonedDateTimeISO('Asia/Tehran').toPlainDate();
    year = today.year;
    month = today.month;
    day = today.day;

    const seasonStart = Temporal.PlainMonthDay.from({ month: 11, day: 22, calendar: 'iso8601' })
      .toPlainDate({ year });
    const seasonEnd = Temporal.PlainMonthDay.from({ month: 1, day: 5, calendar: 'iso8601' })
      .toPlainDate({ year });

    isActive =
      Temporal.PlainDate.compare(today, seasonStart) >= 0 ||
      Temporal.PlainDate.compare(today, seasonEnd) <= 0;
  } else {
    // Lightweight fallback for browsers without native Temporal (e.g. Safari)
    const isoDate = new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Tehran' }).format(new Date());
    [year, month, day] = isoDate.split('-').map(Number);
    isActive = (month === 11 && day >= 22) || month === 12 || (month === 1 && day <= 5);
  }

  if (themeOverride === 'christmas') isActive = true;
  if (themeOverride === 'normal') isActive = false;

  // Calculate festive countdown label for the hero seasonal badge
  let countdownText = 'جشنواره زمستانی و کریسمس آتیش';
  if (isActive) {
    const todayUtc = Date.UTC(year, month - 1, day);
    if ((month === 11 && day >= 22) || (month === 12 && day < 25)) {
      const xmasUtc = Date.UTC(year, 11, 25);
      const daysLeft = Math.max(0, Math.round((xmasUtc - todayUtc) / 86400000));
      countdownText = `تا کریسمس ${toPersianDigits(daysLeft)} روز مانده`;
    } else if (month === 12 && day === 25) {
      countdownText = 'کریسمس مبارک! با طعم گرم آتیش';
    } else if (month === 12 && day > 25) {
      const newYearUtc = Date.UTC(year + 1, 0, 1);
      const daysLeft = Math.max(1, Math.round((newYearUtc - todayUtc) / 86400000));
      countdownText = `تا سال نو میلادی ${toPersianDigits(daysLeft)} روز مانده`;
    } else if (month === 1 && day <= 5) {
      const endUtc = Date.UTC(year, 0, 5);
      const daysLeft = Math.max(0, Math.round((endUtc - todayUtc) / 86400000));
      countdownText = daysLeft === 0
        ? 'سال نو میلادی مبارک! آخرین روز تم زمستانی'
        : `سال نو میلادی مبارک · ${toPersianDigits(daysLeft)} روز تا پایان فصل جشن`;
    }
  }

  return {
    isActive,
    year,
    month,
    day,
    countdownText
  };
}

let christmasState = getChristmasSeasonState();

const SANTA_HAT_SVG = `
  <svg viewBox="0 0 64 52" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M10 38 C16 14, 38 6, 54 16 C48 16, 44 22, 46 30 C36 28, 22 31, 10 38 Z" fill="#dc2626"/>
    <path d="M18 35 C23 18, 38 11, 50 16 C42 14, 30 20, 24 34 Z" fill="#ef4444" opacity="0.65"/>
    <rect x="6" y="34" width="44" height="11" rx="5.5" fill="#f8fafc"/>
    <circle cx="55" cy="18" r="6" fill="#ffffff"/>
  </svg>
`;

function renderChristmasLightsGarland() {
  const bulbs = [
    { x: 40, y: 12, color: '#ef4444', cls: 'xmas-bulb-a' },
    { x: 110, y: 14, color: '#fbbf24', cls: 'xmas-bulb-b' },
    { x: 185, y: 11, color: '#22c55e', cls: 'xmas-bulb-c' },
    { x: 260, y: 14, color: '#f97316', cls: 'xmas-bulb-a' },
    { x: 340, y: 11, color: '#ef4444', cls: 'xmas-bulb-b' },
    { x: 420, y: 14, color: '#fde047', cls: 'xmas-bulb-c' },
    { x: 500, y: 11, color: '#22c55e', cls: 'xmas-bulb-a' },
    { x: 580, y: 14, color: '#ef4444', cls: 'xmas-bulb-b' },
    { x: 660, y: 11, color: '#fbbf24', cls: 'xmas-bulb-c' },
    { x: 740, y: 14, color: '#22c55e', cls: 'xmas-bulb-a' },
    { x: 820, y: 11, color: '#ef4444', cls: 'xmas-bulb-b' },
    { x: 900, y: 14, color: '#fde047', cls: 'xmas-bulb-c' },
    { x: 980, y: 11, color: '#22c55e', cls: 'xmas-bulb-a' },
    { x: 1060, y: 14, color: '#ef4444', cls: 'xmas-bulb-b' },
    { x: 1140, y: 11, color: '#fbbf24', cls: 'xmas-bulb-c' }
  ];

  return `
    <div class="xmas-lights-bar" aria-hidden="true">
      <svg class="xmas-lights-svg" viewBox="0 0 1200 18" preserveAspectRatio="none">
        <path d="M0 3 Q75 14 150 4 T300 4 T450 4 T600 4 T750 4 T900 4 T1050 4 T1200 4" fill="none" stroke="rgba(161,161,170,0.42)" stroke-width="1.4"/>
        ${bulbs.map(b => `
          <g class="xmas-bulb ${b.cls}">
            <circle cx="${b.x}" cy="${b.y}" r="5.5" fill="${b.color}" opacity="0.22"/>
            <circle cx="${b.x}" cy="${b.y}" r="2.8" fill="${b.color}"/>
            <circle cx="${b.x - 0.7}" cy="${b.y - 0.8}" r="0.9" fill="#ffffff" opacity="0.85"/>
          </g>
        `).join('')}
      </svg>
    </div>
  `;
}

function initChristmasEffects() {
  const root = document.documentElement;
  const themeMeta = document.querySelector('meta[name="theme-color"]');

  if (!christmasState.isActive) {
    root.classList.remove('theme-christmas');
    document.getElementById('xmas-snow-layer')?.remove();
    if (themeMeta) themeMeta.setAttribute('content', '#0e0e10');
    return;
  }

  root.classList.add('theme-christmas');
  if (themeMeta) themeMeta.setAttribute('content', '#0d1311');

  // Inject lightweight GPU-composited multi-shape snowfall layer (strictly behind cards)
  if (!document.getElementById('xmas-snow-layer')) {
    const snowLayer = document.createElement('div');
    snowLayer.id = 'xmas-snow-layer';
    snowLayer.className = 'xmas-snow-layer';
    snowLayer.setAttribute('aria-hidden', 'true');

    // Crisp vector snow crystals, 4-point frost glints, and diagonal frost flecks
    const FLAKE_SVGS = {
      crystal: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07"/><path d="M9.5 4.5L12 7l2.5-2.5M9.5 19.5L12 17l2.5 2.5M4.5 9.5L7 12l-2.5 2.5M19.5 9.5L17 12l2.5 2.5"/></svg>`,
      star: `<svg viewBox="0 0 20 20" fill="currentColor"><path d="M10 0L11.6 8.4L20 10L11.6 11.6L10 20L8.4 11.6L0 10L8.4 8.4Z"/></svg>`,
      cross: `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M3 3l10 10M13 3L3 13"/></svg>`
    };

    const isMobile = window.innerWidth < 640;
    const flakesCount = isMobile ? 34 : 56;
    const frag = document.createDocumentFragment();

    for (let i = 0; i < flakesCount; i++) {
      const flake = document.createElement('span');
      const mod = i % 10;
      let kind = 'dot';
      if (mod === 0 || mod === 4) kind = 'crystal';
      else if (mod === 2 || mod === 7) kind = 'star';
      else if (mod === 5) kind = 'cross';

      flake.className = `xmas-snowflake xmas-flake-${kind}`;

      // Golden-ratio horizontal scatter for natural, non-repeating spread
      const x = ((i * 61.8034 + 7) % 98) + 1;
      const dur =
        kind === 'dot'
          ? 13 + (i % 7) * 2.1
          : kind === 'crystal'
            ? 11 + (i % 5) * 2.2
            : 10 + (i % 6) * 1.9;
      const delay = -((i * 1.37) % dur);
      const drift = (i % 2 === 0 ? 1 : -1) * (12 + (i % 5) * 7);
      const rot = (i % 2 === 0 ? 1 : -1) * (120 + (i % 4) * 60);

      let size, alpha;
      if (kind === 'crystal') {
        size = 10 + (i % 4) * 2;
        alpha = 0.58 + (i % 3) * 0.14;
        flake.innerHTML = FLAKE_SVGS.crystal;
      } else if (kind === 'star') {
        size = 7 + (i % 4) * 1.6;
        alpha = 0.52 + (i % 3) * 0.15;
        flake.innerHTML = FLAKE_SVGS.star;
      } else if (kind === 'cross') {
        size = 6.5 + (i % 3) * 1.5;
        alpha = 0.45 + (i % 3) * 0.14;
        flake.innerHTML = FLAKE_SVGS.cross;
      } else {
        size = 2.2 + (i % 4) * 0.9;
        alpha = 0.34 + (i % 4) * 0.14;
      }

      flake.style.setProperty('--x', `${x.toFixed(2)}%`);
      flake.style.setProperty('--size', `${size.toFixed(1)}px`);
      flake.style.setProperty('--dur', `${dur.toFixed(1)}s`);
      flake.style.setProperty('--delay', `${delay.toFixed(2)}s`);
      flake.style.setProperty('--drift', `${drift}px`);
      flake.style.setProperty('--rot', `${rot}deg`);
      flake.style.setProperty('--alpha', `${alpha.toFixed(2)}`);
      frag.appendChild(flake);
    }
    snowLayer.appendChild(frag);
    document.body.appendChild(snowLayer);
  }
}

// Check restaurant open status based on Iran standard time (Asia/Tehran)
// Hours: 11:30 AM to 23:15 PM daily
function getRestaurantOpenStatus() {
  try {
    const now = new Date();
    const tehranTimeStr = now.toLocaleTimeString('en-US', {
      timeZone: 'Asia/Tehran',
      hour12: false,
      hour: '2-digit',
      minute: '2-digit'
    });
    const [h, m] = tehranTimeStr.split(':').map(Number);
    const currentMins = h * 60 + m;
    const openMins = 11 * 60 + 30; // 11:30 = 690 mins
    const closeMins = 23 * 60 + 15; // 23:15 = 1395 mins
    const isOpen = currentMins >= openMins && currentMins < closeMins;

    if (isOpen) {
      return {
        isOpen: true,
        text: 'هم‌اکنون باز است',
        badgeClass: 'bg-emerald-500/15 border-emerald-500/30 text-emerald-400',
        dotClass: 'bg-emerald-400 animate-pulse',
        tooltip: 'پذیرش سفارشات تلفنی و آنلاین اسنپ‌فود (۱۱:۳۰ تا ۲۳:۱۵)'
      };
    } else {
      return {
        isOpen: false,
        text: 'هم‌اکنون بسته است',
        badgeClass: 'bg-rose-500/15 border-rose-500/30 text-rose-400',
        dotClass: 'bg-rose-400',
        tooltip: 'ساعات کاری آتیش: همه روزه از ۱۱:۳۰ صبح تا ۲۳:۱۵ شب'
      };
    }
  } catch (e) {
    return {
      isOpen: true,
      text: 'هم‌اکنون باز است',
      badgeClass: 'bg-emerald-500/15 border-emerald-500/30 text-emerald-400',
      dotClass: 'bg-emerald-400 animate-pulse',
      tooltip: 'پذیرش سفارشات تلفنی و آنلاین اسنپ‌فود'
    };
  }
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
    btn.innerHTML = `<span>${isSel ? '✓' : '📍'}</span><span>${thisName}</span>`;
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
                  <span>${isSelected ? '✓' : '📍'}</span>
                  <span>${place.name}</span>
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

  christmasState = getChristmasSeasonState();
  initChristmasEffects();

  const restaurant = menuData?.restaurant || CONFIG;
  const categories = menuData?.categories || [];
  const trayCount = getTrayTotalCount();
  const openStatus = getRestaurantOpenStatus();
  const isXmas = christmasState.isActive;

  app.innerHTML = `
    <!-- Responsive Header (Mobile + Desktop) -->
    <header class="sticky top-0 z-40 glass-header border-b border-white/[0.08] px-4 sm:px-6 lg:px-8 py-3">
      ${isXmas ? renderChristmasLightsGarland() : ''}
      <div class="w-full max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        <!-- Logo & Title -->
        <a href="#" id="header-logo-link" class="flex items-center gap-2 min-w-0" title="آتیش">
          <div class="xmas-logo-wrap w-9 h-9 sm:w-10 sm:h-10 flex-shrink-0">
            <img 
              src="${logoImg}" 
              alt="${restaurant.name}" 
              class="relative z-[1] w-full h-full object-contain cursor-pointer select-none"
            />
            ${isXmas ? `<span class="xmas-santa-hat z-[2]">${SANTA_HAT_SVG}</span>` : ''}
          </div>
          <div class="flex flex-col text-right min-w-0">
            <div class="text-xs sm:text-sm md:text-base font-black text-white tracking-tight flex items-center gap-1.5 truncate">
              <span>${restaurant.brandTitle}</span>
              <span id="header-status-dot" class="w-2 h-2 rounded-full ${openStatus.dotClass} flex-shrink-0" title="${openStatus.text}"></span>
            </div>
            <div class="text-[10px] sm:text-[11px] md:text-xs text-amber-400 font-medium truncate hidden sm:block">
              ${isXmas ? '🎄 فصل جشن زمستانی و کریسمس آتیش' : restaurant.brandSubtitle}
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

          <!-- Desktop Instagram Button -->
          <a 
            href="${restaurant.instagramUrl || CONFIG.instagramUrl || 'https://instagram.com/atishfood'}"
            target="_blank"
            rel="noopener noreferrer"
            class="hidden md:flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-purple-500/15 border border-purple-500/30 text-pink-400 hover:bg-purple-500/25 text-xs font-bold transition flex-shrink-0"
            title="صفحه رسمی اینستاگرام آتیش"
          >
            ${ICONS.instagram}
            <span>اینستاگرام</span>
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
      <section class="relative rounded-3xl overflow-hidden glass-card ${isXmas ? 'xmas-hero-card' : ''} p-4 sm:p-6 lg:p-8 mb-6 border border-white/[0.08] shadow-2xl text-right">
        <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          
          <!-- Hero Text & Concept Info (7 cols on desktop, RTL Right) -->
          <div class="md:col-span-7 flex flex-col justify-center order-2 md:order-1">
            <!-- Badges Bar -->
            <div class="flex flex-wrap items-center gap-2 mb-3">
              <span id="restaurant-status-badge" class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold ${openStatus.badgeClass}" title="${openStatus.tooltip}">
                <span id="restaurant-status-dot" class="w-1.5 h-1.5 rounded-full ${openStatus.dotClass}"></span>
                <span id="restaurant-status-text">${openStatus.text}</span>
              </span>
              <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-pink-500/15 border border-pink-500/30 text-pink-400">
                ⭐ ${restaurant.rating || '۴.۵'} در اسنپ‌فود
              </span>
              <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-amber-500/15 border border-amber-500/30 text-amber-300">
                🛵 ارسال سریع دروس و دولت
              </span>
            </div>

            <!-- Big Title -->
            <h1 class="text-xl sm:text-2xl lg:text-4xl font-black text-white leading-tight mb-2.5">
              ${isXmas ? 'گرمای زمستون با <span class="text-gradient-fire">آتیش</span> ❄️' : 'طعم اصیل و لذیذ <span class="text-gradient-fire">آتیش</span>'}
            </h1>
            
            <p class="text-zinc-300 text-xs sm:text-sm lg:text-base leading-relaxed font-light max-w-2xl">
              پیتزاهای پرملات آمریکایی و ایتالیایی پخته‌شده در فر لینکولن و برگرهای دست‌ساز با گوشت خالص. سفارش آنلاین دلیوری با اسنپ‌فود یا سفارش مستقیم تلفنی با پیک گرم.
            </p>

            <!-- Shiny Interactive Spin-the-Wheel Hero Box (hidden by default; shown ONLY when Owner turns wheel ON in staff.pizzaatish.ir) -->
            <button
              type="button"
              id="btn-open-spin-wheel"
              class="hidden spin-hero-box mt-4 w-full sm:w-auto sm:max-w-lg rounded-2xl p-3 sm:p-3.5 text-right flex items-center justify-between gap-3 cursor-pointer group"
            >
              <span class="spin-hero-sheen" aria-hidden="true"></span>
              <div class="relative z-[1] flex items-center gap-3 min-w-0">
                <div class="relative flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center">
                  <svg class="spin-mini-wheel w-full h-full drop-shadow-[0_0_10px_rgba(251,191,36,0.5)]" viewBox="0 0 64 64" aria-hidden="true">
                    <circle cx="32" cy="32" r="29" fill="#b91c1c" stroke="#fbbf24" stroke-width="3"/>
                    <path d="M32 32 L32 6 A26 26 0 0 1 50.4 13.6 Z" fill="#dc2626"/>
                    <path d="M32 32 L50.4 13.6 A26 26 0 0 1 58 32 Z" fill="#fff7ed"/>
                    <path d="M32 32 L58 32 A26 26 0 0 1 50.4 50.4 Z" fill="#dc2626"/>
                    <path d="M32 32 L50.4 50.4 A26 26 0 0 1 32 58 Z" fill="#fff7ed"/>
                    <path d="M32 32 L32 58 A26 26 0 0 1 13.6 50.4 Z" fill="#dc2626"/>
                    <path d="M32 32 L13.6 50.4 A26 26 0 0 1 6 32 Z" fill="#fff7ed"/>
                    <path d="M32 32 L6 32 A26 26 0 0 1 13.6 13.6 Z" fill="#f59e0b"/>
                    <path d="M32 32 L13.6 13.6 A26 26 0 0 1 32 6 Z" fill="#fff7ed"/>
                    <circle cx="32" cy="32" r="7" fill="#ffffff" stroke="#dc2626" stroke-width="2.5"/>
                  </svg>
                  <span class="spin-hero-sparkle absolute -top-1 -right-1 text-amber-300 text-xs" aria-hidden="true">✦</span>
                  <span class="spin-hero-sparkle absolute -bottom-0.5 -left-1 text-yellow-200 text-[10px]" aria-hidden="true">✨</span>
                </div>
                <div class="min-w-0">
                  <div class="flex flex-wrap items-center gap-1.5">
                    <span class="text-xs sm:text-sm font-black text-white">گردونه شانس آتیش</span>
                    <span class="px-2 py-0.5 rounded-full text-[10px] font-black bg-gradient-to-r from-amber-400 to-orange-500 text-black shadow-sm">تا ۳۰٪ تخفیف</span>
                  </div>
                  <p class="text-[11px] text-amber-100/85 mt-0.5 truncate">بچرخون و کد تخفیف اختصاصی سفارش بعدی رو بگیر!</p>
                </div>
              </div>
              <span class="relative z-[1] flex-shrink-0 px-3 py-2 rounded-xl bg-gradient-to-r from-red-600 via-red-500 to-amber-500 text-white font-black text-[11px] sm:text-xs shadow-lg shadow-red-600/30 group-hover:scale-105 transition">
                بچرخون ✨
              </span>
            </button>
          </div>

          <!-- 3D Burger Artwork Showcase (5 cols on desktop, Left Side) -->
          <div class="md:col-span-5 order-1 md:order-2">
            <div class="relative w-full rounded-2xl overflow-hidden shadow-2xl border ${isXmas ? 'border-amber-400/25' : 'border-white/[0.1]'} aspect-[16/10] md:aspect-square bg-black group">
              <img 
                src="/images/atish-hero-3d.jpg" 
                alt="کانسپت سه بعدی آتیش برگر"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              ${isXmas ? `
                <div class="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-red-600/85 border border-amber-300/45 text-white text-[10px] font-black shadow-lg backdrop-blur-sm">
                  🎄 ویژه شب‌های زمستانی
                </div>
              ` : ''}
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
      <nav class="sticky sticky-category-nav z-30 bg-[#0c0c0e]/95 backdrop-blur-md -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-3 border-y border-white/[0.08] mb-6">
        <div id="category-bar" class="w-full max-w-7xl mx-auto flex items-center gap-2 overflow-x-auto no-scrollbar md:flex-wrap md:justify-center">
          ${categories.map(cat => {
            const isActive = currentCategory === cat.id;
            return `
              <button 
                data-category="${cat.id}" 
                class="cat-btn flex-shrink-0 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 flex items-center gap-2 ${
                  isActive 
                    ? 'cat-btn-active bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 text-black shadow-md shadow-orange-500/30' 
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
              <div class="w-9 h-9 rounded-xl ${isXmas ? 'bg-gradient-to-br from-red-600 via-red-700 to-emerald-700 text-white' : 'bg-gradient-to-br from-amber-500 to-orange-600 text-black'} flex items-center justify-center font-black text-base shadow-md">
                ${isXmas ? '🎄' : '🔥'}
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
        <div class="flex flex-col text-right leading-tight">
          <span class="text-xs font-black">سفارش شما: <span id="floating-tray-count">${toPersianDigits(trayCount)}</span> قلم</span>
          <span id="floating-tray-total" class="text-[10px] font-bold opacity-90">${getTrayTotalPrice() > 0 ? formatPrice(getTrayTotalPrice()) : ''}</span>
        </div>
      </div>
      <div class="flex items-center gap-1 text-[11px] bg-black/20 px-2.5 py-1 rounded-xl">
        <span>مشاهده لیست</span>
        <span>←</span>
      </div>
    </div>

    <!-- Floating Contact Bottom Pill Bar (MOBILE ONLY: md:hidden) -->
    <nav class="contact-nav md:hidden" aria-label="دسترسی سریع">
      <div class="contact-nav-inner">
        <button id="nav-menu-btn" class="contact-nav-item contact-nav-menu" aria-label="منوی غذاها">
          ${ICONS.menuIcon}<span>منو</span>
        </button>
        <a href="${restaurant.instagramUrl || CONFIG.instagramUrl || 'https://instagram.com/atishfood'}" target="_blank" rel="noopener noreferrer" class="contact-nav-item contact-nav-instagram" aria-label="اینستاگرام آتیش">
          ${ICONS.instagram}<span>اینستاگرام</span>
        </a>
        <a href="tel:${restaurant.phone}" class="contact-nav-item contact-nav-call" aria-label="تماس با آتیش">
          ${ICONS.phone}<span>تماس</span>
        </a>
        <a href="${restaurant.snappfoodUrl}" target="_blank" rel="noopener noreferrer" class="contact-nav-item contact-nav-snapp" aria-label="اسنپ‌فود">
          ${ICONS.scooter}<span>اسنپ‌فود</span>
        </a>
      </div>
    </nav>

    <!-- Waving Mascot (Online Only) -->
    ${(typeof navigator === 'undefined' || navigator.onLine !== false) ? `
      <div id="atish-mascot-greeting" class="mascot-container" aria-label="شخصیت آتیش">
        <div id="mascot-speech-bubble" class="mascot-bubble">
          <span>${isXmas ? 'سلام! زمستون و کریسمستون گرم و دلچسب 🎄🔥' : 'سلام! خوش اومدید 🔥'}</span>
          <button id="close-mascot-bubble-btn" class="mascot-bubble-close" aria-label="بستن پیام">✕</button>
        </div>
        <div class="relative">
          <img src="/images/atish-mascot.webp" alt="شخصیت آتیش" class="mascot-avatar" draggable="false" />
          ${isXmas ? `<span class="xmas-mascot-hat">${SANTA_HAT_SVG}</span>` : ''}
        </div>
      </div>
    ` : ''}

    <!-- Item Detail Sheet Modal -->
    <div id="item-modal" class="fixed inset-0 z-50 hidden bg-black/85 flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div id="item-modal-box" class="w-full max-w-md bg-[#18181c] border-t sm:border border-white/[0.1] rounded-t-3xl sm:rounded-3xl max-h-[90vh] overflow-y-auto shadow-2xl">
      </div>
    </div>

    <!-- Order Tray Drawer Modal -->
    <div id="tray-modal" class="fixed inset-0 z-50 hidden bg-black/85 backdrop-blur-md flex items-end sm:items-center justify-center p-0 sm:p-4 transition-opacity">
      <div id="tray-modal-box" class="w-full max-w-md bg-[#18181c] border-t sm:border border-white/[0.12] rounded-t-3xl sm:rounded-3xl max-h-[92vh] overflow-y-auto shadow-2xl flex flex-col text-right select-none" style="-webkit-tap-highlight-color: transparent;">
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

    ${/* [DISABLED UNTIL FURTHER NOTICE - VIP 20% Surprise Offer & Hidden Cashier Modals]
    <!-- VIP 20% Surprise Offer Modal -->
    <div id="vip-offer-modal" class="fixed inset-0 z-50 hidden bg-black/85 backdrop-blur-md flex items-end sm:items-center justify-center p-0 sm:p-4 transition-opacity">
      <div class="w-full max-w-md bg-[#141417] border-t sm:border border-amber-500/40 rounded-t-3xl sm:rounded-3xl max-h-[92vh] overflow-y-auto shadow-2xl p-5 sm:p-6 text-right">
        
        <!-- Modal Header -->
        <div class="flex items-center justify-between pb-3.5 border-b border-white/[0.08] mb-4">
          <div class="flex items-center gap-2.5">
            <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-400 via-orange-500 to-red-500 flex items-center justify-center text-black font-black text-sm shadow-md">
              ٪
            </div>
            <div>
              <h2 class="text-sm sm:text-base font-black text-white">کارت هدیه غافلگیری سرآشپز</h2>
              <span class="text-[10px] text-amber-400 font-medium">۲۰٪ تخفیف ویژه سفارش بعدی</span>
            </div>
          </div>
          <button id="close-vip-modal-btn" class="w-8 h-8 rounded-full bg-white/[0.08] flex items-center justify-center text-zinc-400 hover:text-white transition" aria-label="بستن">
            ✕
          </button>
        </div>

        <!-- Dynamic Container (Switches between Unclaimed & Active Ticket) -->
        <div id="vip-modal-content"></div>

      </div>
    </div>

    <!-- Hidden Cashier Verification Modal -->
    <div id="cashier-modal" class="fixed inset-0 z-50 hidden bg-black/90 backdrop-blur-md flex items-end sm:items-center justify-center p-0 sm:p-4 transition-opacity">
      <div class="w-full max-w-md bg-[#16161a] border-t sm:border border-emerald-500/40 rounded-t-3xl sm:rounded-3xl max-h-[92vh] overflow-y-auto shadow-2xl p-5 sm:p-6 text-right">
        <div class="flex items-center justify-between pb-3.5 border-b border-white/[0.08] mb-4">
          <div class="flex items-center gap-2">
            <span class="text-lg">🛡️</span>
            <div>
              <h3 class="text-sm font-black text-white">پنل صندوق‌دار | تایید کد تخفیف ۲۰٪</h3>
              <span class="text-[10px] text-emerald-400">سیستم تایید اختصاصی پرسنل آتیش</span>
            </div>
          </div>
          <button id="close-cashier-modal-btn" class="w-7 h-7 rounded-full bg-white/[0.08] flex items-center justify-center text-zinc-400 hover:text-white">
            ✕
          </button>
        </div>
        
        <div id="cashier-modal-body"></div>
      </div>
    </div>
    */ ''}

    <!-- Interactive 8-Slice Spin-the-Wheel Modal -->
    <div id="spin-wheel-modal" class="fixed inset-0 z-50 hidden bg-black/85 backdrop-blur-md flex items-end sm:items-center justify-center p-0 sm:p-4 transition-opacity">
      <div class="w-full max-w-md bg-[#141418] border-t sm:border border-amber-400/35 rounded-t-3xl sm:rounded-3xl max-h-[94vh] overflow-y-auto shadow-2xl p-5 text-right">
        <!-- Modal Header -->
        <div class="flex items-center justify-between pb-3 border-b border-white/[0.08] mb-4">
          <div class="flex items-center gap-2.5">
            <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-red-600 via-red-500 to-amber-500 flex items-center justify-center text-white font-black text-base shadow-md">
              🎡
            </div>
            <div>
              <h2 class="text-sm sm:text-base font-black text-white">گردونه شانس آتیش</h2>
              <span class="text-[10px] text-amber-300 font-medium">شانست رو امتحان کن · تا ۳۰٪ تخفیف ویژه</span>
            </div>
          </div>
          <button id="close-spin-modal-btn" type="button" class="w-8 h-8 rounded-full bg-white/[0.08] flex items-center justify-center text-zinc-400 hover:text-white transition" aria-label="بستن">
            ✕
          </button>
        </div>

        <!-- Wheel Stage -->
        <div class="pt-3 pb-2 flex flex-col items-center">
          <div class="spin-wheel-stage">
            <!-- Top Red Teardrop Pointer -->
            <svg class="spin-wheel-pointer" viewBox="0 0 44 54" fill="none" aria-hidden="true">
              <path d="M22 52 L8 26 A16 16 0 1 1 36 26 Z" fill="#dc2626" stroke="#ffffff" stroke-width="2.5"/>
              <circle cx="22" cy="18" r="6" fill="#ffffff"/>
            </svg>

            <!-- Rotating 8-Slice SVG Wheel -->
            <div id="spin-wheel-rotor" class="spin-wheel-rotor" role="button" tabindex="0" aria-label="چرخاندن گردونه شانس"></div>

            <!-- Center Flame Spin Trigger -->
            <button id="spin-wheel-center-btn" type="button" class="spin-wheel-center-btn" aria-label="بچرخون">
              <img src="${logoImg}" alt="آتیش" class="w-9 h-9 object-contain pointer-events-none select-none" />
            </button>
          </div>
        </div>

        <!-- Action / Result Area -->
        <div id="spin-wheel-result" class="mt-4"></div>
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
  const floatingTotal = document.getElementById('floating-tray-total');
  const totalPrice = getTrayTotalPrice();
  if (floatingBar && floatingCount) {
    floatingCount.textContent = toPersianDigits(count);
    if (floatingTotal) {
      floatingTotal.textContent = totalPrice > 0 ? formatPrice(totalPrice) : '';
    }
    floatingBar.classList.toggle('hidden', count === 0);
  }

  const mascot = document.getElementById('atish-mascot-greeting');
  if (mascot) {
    if (count > 0) {
      mascot.style.bottom = 'calc(140px + env(safe-area-inset-bottom, 0px))';
    } else {
      mascot.style.bottom = '';
    }
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
        b.className = 'cat-btn flex-shrink-0 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 flex items-center gap-2 bg-[#18181c] text-zinc-300 border border-white/[0.08] hover:bg-[#24242a] hover:text-white';
      });
      btn.className = 'cat-btn cat-btn-active flex-shrink-0 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 flex items-center gap-2 bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 text-black shadow-md shadow-orange-500/30';

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
  const trayModal = document.getElementById('tray-modal');

  const openTrayModal = () => {
    renderTrayModal();
    trayModal?.classList.remove('hidden');
  };

  openTrayBtn?.addEventListener('click', openTrayModal);
  floatingTrayBar?.addEventListener('click', openTrayModal);

  // Live updater for restaurant open/closed status based on Iran standard time
  setInterval(() => {
    const badgeEl = document.getElementById('restaurant-status-badge');
    const textEl = document.getElementById('restaurant-status-text');
    const dotEl = document.getElementById('restaurant-status-dot');
    const headerDot = document.getElementById('header-status-dot');
    if (badgeEl && textEl && dotEl) {
      const st = getRestaurantOpenStatus();
      badgeEl.className = `inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold ${st.badgeClass}`;
      badgeEl.title = st.tooltip;
      dotEl.className = `w-1.5 h-1.5 rounded-full ${st.dotClass}`;
      textEl.textContent = st.text;
      if (headerDot) {
        headerDot.className = `w-2 h-2 rounded-full ${st.dotClass} flex-shrink-0`;
        headerDot.title = st.text;
      }
    }
  }, 30000);

  // Mascot: stands calmly (no waving), delivers 3 messages, then disappears
  const mascotEl = document.getElementById('atish-mascot-greeting');
  const mascotBubble = document.getElementById('mascot-speech-bubble');
  const closeMascotBubbleBtn = document.getElementById('close-mascot-bubble-btn');

  if (mascotEl && mascotBubble) {
    const textSpan = mascotBubble.querySelector('span');
    const messages = christmasState.isActive
      ? [
          'سلام! زمستون و کریسمستون گرم و دلچسب 🎄🔥',
          'پیتزاهای داغ آتیش تو هوای سرد می‌چسبه ❄️🍕',
          'برای سفارش گرم تلفنی یا اسنپ‌فود در خدمتیم 🎅🛵'
        ]
      : [
          'سلام! خوش اومدید 🔥',
          'منوی تازه و داغ آتیش رو ببینید 🍕',
          'برای سفارش تلفنی یا اسنپ‌فود در خدمتیم 🛵'
        ];

    const timeouts = [];

    // Helper to transition messages smoothly
    const setMessage = (text) => {
      mascotBubble.style.opacity = '0';
      mascotBubble.style.transform = 'scale(0.85)';
      setTimeout(() => {
        if (textSpan) textSpan.textContent = text;
        mascotBubble.style.opacity = '1';
        mascotBubble.style.transform = 'scale(1)';
      }, 200);
    };

    // Message 1 is shown initially in HTML

    // Message 2 (at 4.5s)
    timeouts.push(setTimeout(() => {
      setMessage(messages[1]);
    }, 4500));

    // Message 3 (at 9.0s)
    timeouts.push(setTimeout(() => {
      setMessage(messages[2]);
    }, 9000));

    // Exit & disappear after 3 messages (at 14.5s)
    const dismissMascot = () => {
      timeouts.forEach(t => clearTimeout(t));
      mascotEl.classList.add('mascot-leaving');
      setTimeout(() => {
        mascotEl.remove();
      }, 700);
    };

    timeouts.push(setTimeout(() => {
      dismissMascot();
    }, 14500));

    closeMascotBubbleBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      dismissMascot();
    });

    mascotEl.addEventListener('click', dismissMascot);
  }

  // Remove mascot immediately if device goes offline
  window.addEventListener('offline', () => {
    document.getElementById('atish-mascot-greeting')?.remove();
  });

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

  // Keep --header-height synced with actual sticky header height so category bar never overlaps
  const mainHeader = document.querySelector('header');
  const syncHeaderHeight = () => {
    if (!mainHeader) return;
    document.documentElement.style.setProperty('--header-height', `${Math.ceil(mainHeader.getBoundingClientRect().height)}px`);
  };
  syncHeaderHeight();
  if (mainHeader && typeof ResizeObserver !== 'undefined') {
    const headerObserver = new ResizeObserver(syncHeaderHeight);
    headerObserver.observe(mainHeader);
  }
  window.addEventListener('resize', syncHeaderHeight, { passive: true });

  // Live Spin-the-Wheel Promo System (connected to ArvanCloud Edge Function)
  initSpinWheelSystem();

  // Lightweight privacy-friendly menu telemetry (Owner-only analytics on staff.pizzaatish.ir)
  initMenuAnalytics();

  // [DISABLED UNTIL FURTHER NOTICE - QR Discount & 5-Tap Cashier System]
  // initVipOfferSystem();
}

function trackMenuEvent(type, label = '') {
  try {
    const host = window.location.hostname;
    if (host === 'localhost' || host === '127.0.0.1') return;
    fetch(`${SPIN_API_BASE}/api/track`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(label ? { type, label } : { type }),
      keepalive: true,
    }).catch(() => {});
  } catch {}
}

let menuAnalyticsBound = false;
function initMenuAnalytics() {
  try {
    if (!sessionStorage.getItem('atish_visit_tracked')) {
      sessionStorage.setItem('atish_visit_tracked', '1');
      trackMenuEvent('visit');
    }
  } catch {}

  if (menuAnalyticsBound) return;
  menuAnalyticsBound = true;
  document.addEventListener('click', (e) => {
    const link = e.target?.closest?.('a[href]');
    if (!link) return;
    const href = link.getAttribute('href') || '';
    if (href.startsWith('tel:')) trackMenuEvent('call');
    else if (href.includes('snappfood.ir')) trackMenuEvent('snappfood');
    else if (href.includes('instagram.com')) trackMenuEvent('instagram');
  }, { passive: true });
}

/* [DISABLED UNTIL FURTHER NOTICE - Uncomment this block, the import at top, the modals in renderApp(), and initVipOfferSystem() above to re-enable]
// =========================================================================
// ATISH VIP 20% SURPRISE OFFER & CASHIER VERIFICATION ENGINE
// =========================================================================
const CASHIER_PIN_HASH = '48d3007452360e9b7e6b8ed5c7eab72c2e738bb48c43ffdbcb73ecc8550fd937';
let vipTimerInterval = null;

function sha256Sync(ascii) {
  function rightRotate(value, amount) { return (value >>> amount) | (value << (32 - amount)); }
  const mathPow = Math.pow;
  const maxWord = mathPow(2, 32);
  let lengthProperty = 'length';
  let i, j;
  let result = '';
  const words = [];
  const asciiBitLength = ascii[lengthProperty] * 8;
  let hash = [];
  const k = [];
  let primeCounter = 0;
  const isComposite = {};
  for (let candidate = 2; primeCounter < 64; candidate++) {
    if (!isComposite[candidate]) {
      for (i = candidate; i < 313; i += candidate) isComposite[i] = candidate;
      hash[primeCounter] = (mathPow(candidate, 0.5) * maxWord) | 0;
      k[primeCounter++] = (mathPow(candidate, 1 / 3) * maxWord) | 0;
    }
  }
  ascii += '\x80';
  while (ascii[lengthProperty] % 64 - 56) ascii += '\x00';
  for (i = 0; i < ascii[lengthProperty]; i++) {
    j = ascii.charCodeAt(i);
    words[i >> 2] |= j << ((3 - i) % 4) * 8;
  }
  words[words[lengthProperty]] = (asciiBitLength / maxWord) | 0;
  words[words[lengthProperty]] = asciiBitLength;
  for (j = 0; j < words[lengthProperty];) {
    const w = words.slice(j, j += 16);
    const oldHash = hash.slice(0);
    for (i = 0; i < 64; i++) {
      const w15 = w[i - 15], w2 = w[i - 2];
      const s0 = rightRotate(w15, 7) ^ rightRotate(w15, 18) ^ (w15 >>> 3);
      const s1 = rightRotate(w2, 17) ^ rightRotate(w2, 19) ^ (w2 >>> 10);
      const ch = (hash[4] & hash[5]) ^ (~hash[4] & hash[6]);
      const temp1 = hash[7] + (rightRotate(hash[4], 6) ^ rightRotate(hash[4], 11) ^ rightRotate(hash[4], 25)) + ch + k[i] + (w[i] = (i < 16) ? w[i] : (w[i - 16] + s0 + w[i - 7] + s1) | 0);
      const maj = (hash[0] & hash[1]) ^ (hash[0] & hash[2]) ^ (hash[1] & hash[2]);
      const temp2 = (rightRotate(hash[0], 2) ^ rightRotate(hash[0], 13) ^ rightRotate(hash[0], 22)) + maj;
      hash = [(temp1 + temp2) | 0, hash[0], hash[1], hash[2], (hash[3] + temp1) | 0, hash[4], hash[5], hash[6]];
    }
    for (i = 0; i < 8; i++) hash[i] = (hash[i] + oldHash[i]) | 0;
  }
  for (i = 0; i < 8; i++) {
    for (j = 3; j >= 0; j--) {
      const b = (hash[i] >> (j * 8)) & 255;
      result += (b < 16 ? '0' : '') + b.toString(16);
    }
  }
  return result;
}

const ATISH_OFFER_SALT = ''; // [REMOVED FROM PUBLIC REPO - keep secrets strictly in ArvanCloud Edge Env]

function computeChecksum9(payload) {
  let h = 0x811c9dc5;
  const str = `${payload.toUpperCase()}_${ATISH_OFFER_SALT}`;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return String(Math.abs(h) % 1000).padStart(3, '0');
}

function verifyVoucherCode(raw) {
  if (!raw) return { valid: false, reason: 'کدی وارد نشده است.' };
  
  // Normalize Persian digits to English
  const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  let normalized = String(raw).trim().toUpperCase();
  for (let i = 0; i < 10; i++) {
    normalized = normalized.replace(new RegExp(persianDigits[i], 'g'), String(i));
  }

  const clean = normalized.replace(/[^A-Z0-9]/g, '');

  // 9-digit format: 1 Letter + 8 digits (e.g. A01-101-830)
  if (clean.length === 9 && /^[A-Z][0-9]{8}$/.test(clean)) {
    const formatted = `${clean.slice(0, 3)}-${clean.slice(3, 6)}-${clean.slice(6, 9)}`;
    const inputHash = sha256Sync(formatted);

    // 1. Primary check: SHA-256 hash match against active deployed list
    if (voucherHashes && voucherHashes.includes(inputHash)) {
      return { valid: true, code: formatted };
    }

    // 2. Instant Mathematical Checksum Fallback:
    // Ensures newly printed/scanned vouchers work IMMEDIATELY on any device,
    // even before GitHub Actions finishes deploying or when browser serves cached bundle!
    const payload = clean.slice(0, 6);
    const checksum = clean.slice(6, 9);
    if (computeChecksum9(payload) === checksum) {
      return { valid: true, code: formatted };
    }
  }

  // 6-digit pure numeric
  if (clean.length === 6 && /^[0-9]{6}$/.test(clean)) {
    const formatted = `${clean.slice(0, 3)}-${clean.slice(3, 6)}`;
    const inputHash = sha256Sync(formatted);
    if (voucherHashes && voucherHashes.includes(inputHash)) {
      return { valid: true, code: formatted };
    }
  }

  return { valid: false, reason: 'کد نامعتبر یا اشتباه است. (فرمت صحیح: ۹ کاراکتر مانند A01-101-830)' };
}

function getVoucherCountdown(expiresAt) {
  const diff = expiresAt - Date.now();
  if (diff <= 0) return { expired: true, text: 'منقضی شده' };
  const totalSec = Math.floor(diff / 1000);
  const hours = Math.floor(totalSec / 3600);
  const minutes = Math.floor((totalSec % 3600) / 60);
  const seconds = totalSec % 60;
  const pad = (n) => String(n).padStart(2, '0');
  return {
    expired: false,
    text: toPersianDigits(`${pad(hours)}:${pad(minutes)}:${pad(seconds)}`),
    detail: toPersianDigits(`${hours} ساعت و ${minutes} دقیقه`)
  };
}

function initVipOfferSystem() {
  const vipModal = document.getElementById('vip-offer-modal');
  const closeVipBtn = document.getElementById('close-vip-modal-btn');
  const vipContent = document.getElementById('vip-modal-content');

  const cashierModal = document.getElementById('cashier-modal');
  const closeCashierBtn = document.getElementById('close-cashier-modal-btn');
  const cashierBody = document.getElementById('cashier-modal-body');
  const headerLogoLink = document.getElementById('header-logo-link');

  let cashierAuthenticated = sessionStorage.getItem('atish_cashier_auth') === 'true';
  let logoClickCount = 0;
  let logoClickTimer = null;

  function renderVipTicket(code, expiresAt) {
    if (!vipContent) return;
    clearInterval(vipTimerInterval);

    const initialCount = getVoucherCountdown(expiresAt);
    const restaurantPhone = menuData?.restaurant?.phone || '02122561949';

    vipContent.innerHTML = `
      <div class="space-y-4">
        <!-- Active Ticket Card -->
        <div class="relative p-5 rounded-2xl bg-gradient-to-b from-[#1c1c22] to-[#121215] border-2 border-dashed border-amber-500/40 text-center shadow-2xl overflow-hidden">
          <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/20 text-red-300 border border-red-500/30 text-[11px] font-black mb-2.5">
            <span>🔥</span>
            <span>۲۰٪ تخفیف ویژه شما فعال است</span>
          </div>

          <div class="text-xs text-zinc-300 font-light mb-1">کد اختصاصی سفارش بعدی:</div>
          
          <!-- Code Display Box -->
          <div class="my-3 p-3.5 rounded-xl bg-black/80 border border-amber-500/40 flex items-center justify-between gap-2 max-w-xs mx-auto shadow-inner">
            <span id="vip-code-text" class="text-xl sm:text-2xl font-black text-amber-300 tracking-widest font-mono select-all">
              ${code}
            </span>
            <button 
              id="copy-vip-btn" 
              type="button"
              class="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-amber-400 to-orange-500 text-black font-black text-xs hover:from-amber-300 hover:to-orange-400 transition flex items-center gap-1 shadow-md"
            >
              <span>کپی</span>
            </button>
          </div>

          <!-- Live Countdown Timer -->
          <div class="p-3 rounded-xl bg-amber-500/10 border border-amber-500/25 max-w-xs mx-auto mb-1">
            <div class="text-[10px] text-amber-300/80 mb-0.5">زمان باقی‌مانده تا پایان اعتبار:</div>
            <div id="vip-timer-display" class="text-lg sm:text-xl font-black text-white font-mono tracking-wider">
              ${initialCount.text}
            </div>
          </div>
        </div>

        <!-- Usage Instructions -->
        <div class="p-3.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-right space-y-1.5 text-xs">
          <div class="font-bold text-white flex items-center gap-1.5">
            <span>📌</span>
            <span>نحوه اعمال تخفیف در سفارش:</span>
          </div>
          <p class="text-zinc-300 text-[11px] leading-relaxed">
            هنگام تماس تلفنی (<strong class="text-amber-300 font-bold">۰۲۱-۲۲۵۶۱۹۴۹</strong>) یا مراجعه حضوری، این کد را به صندوق‌دار اعلام فرمایید تا ۲۰٪ تخفیف فاکتور اعمال گردد.
          </p>
        </div>

        <!-- Screenshot & Save Reminder -->
        <div class="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-right flex items-start gap-2.5 shadow-sm">
          <span class="text-lg flex-shrink-0">📸</span>
          <div class="text-[11px] leading-relaxed">
            <strong class="text-white block font-bold mb-0.5">اسکرین‌شات بگیرید یا کد را ذخیره فرمایید:</strong>
            این صفحه موقت است و در صورت بستن مرورگر ممکن است پاک شود. لطفاً حتماً همین الان از این صفحه اسکرین‌شات گرفته یا کد را ذخیره فرمایید.
          </div>
        </div>

        <div class="flex items-center justify-end text-xs pt-1">
          <a href="tel:${restaurantPhone}" class="w-full py-2.5 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold text-xs hover:bg-emerald-500/30 transition flex items-center justify-center gap-1.5">
            <span>📞</span>
            <span>سفارش تلفنی مستقیم</span>
          </a>
        </div>
      </div>
    `;

    // Live 1-second countdown interval
    vipTimerInterval = setInterval(() => {
      const timerElem = document.getElementById('vip-timer-display');
      if (!timerElem) {
        clearInterval(vipTimerInterval);
        return;
      }
      const c = getVoucherCountdown(expiresAt);
      if (c.expired) {
        clearInterval(vipTimerInterval);
        timerElem.textContent = 'منقضی شده';
      } else {
        timerElem.textContent = c.text;
      }
    }, 1000);

    // Copy Button
    document.getElementById('copy-vip-btn')?.addEventListener('click', () => {
      navigator.clipboard?.writeText(`کد تخفیف ۲۰٪ آتیش: ${code}`).then(() => {
        showToast('کد تخفیف کپی شد');
      }).catch(() => {
        showToast(`کد: ${code}`);
      });
    });
  }

  closeVipBtn?.addEventListener('click', () => {
    vipModal?.classList.add('hidden');
  });

  vipModal?.addEventListener('click', (e) => {
    if (e.target === vipModal) vipModal.classList.add('hidden');
  });

  // Check if QR code was scanned (?gift=... or ?code=... or #gift=...)
  const params = new URLSearchParams(window.location.search);
  const giftToken = params.get('gift') || params.get('code') || params.get('vip') || (window.location.hash.startsWith('#gift=') ? window.location.hash.replace('#gift=', '') : null);

  if (giftToken) {
    const verified = verifyVoucherCode(giftToken);
    if (verified.valid) {
      let saved = null;
      try {
        const raw = localStorage.getItem('atish_vip_offer');
        if (raw) saved = JSON.parse(raw);
      } catch (e) {}

      let expiresAt;
      if (saved && saved.code === verified.code && saved.expiresAt > Date.now()) {
        expiresAt = saved.expiresAt;
      } else {
        expiresAt = Date.now() + (48 * 3600 * 1000);
        try {
          localStorage.setItem('atish_vip_offer', JSON.stringify({ code: verified.code, expiresAt }));
        } catch (e) {}
      }

      renderVipTicket(verified.code, expiresAt);
      vipModal?.classList.remove('hidden');
    } else {
      showToast('کد اسکن شده نامعتبر است');
    }
  } else {
    // If user previously scanned a valid QR and revisits within 48h
    try {
      const raw = localStorage.getItem('atish_vip_offer');
      if (raw) {
        const saved = JSON.parse(raw);
        if (saved && saved.expiresAt > Date.now()) {
          // Keep available if modal re-opened
        }
      }
    } catch (e) {}
  }

  // Cashier Modal Logic
  function openCashierPanel() {
    renderCashierState();
    cashierModal?.classList.remove('hidden');
  }

  function renderCashierState() {
    if (!cashierBody) return;

    if (!cashierAuthenticated) {
      cashierBody.innerHTML = `
        <div class="space-y-4 text-center">
          <p class="text-xs text-zinc-300">برای ورود به پنل تایید کدهای تخفیف، رمز عبور ۴ رقمی پرسنل را وارد کنید:</p>
          <form id="cashier-login-form" class="space-y-3 max-w-xs mx-auto">
            <input 
              type="password" 
              id="cashier-pin-input" 
              maxlength="4" 
              placeholder="••••" 
              class="w-full bg-[#202028] border border-emerald-500/40 text-white text-center font-mono font-black text-xl rounded-xl py-2.5 tracking-widest focus:outline-none focus:ring-2 focus:ring-emerald-500" 
              required
              autofocus
            />
            <p id="cashier-pin-error" class="hidden text-rose-400 text-xs font-bold">رمز عبور اشتباه است</p>
            <button type="submit" class="w-full py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-black text-xs transition">
              ورود به سیستم صندوق
            </button>
          </form>
        </div>
      `;

      document.getElementById('cashier-login-form')?.addEventListener('submit', (e) => {
        e.preventDefault();
        const pinInput = document.getElementById('cashier-pin-input');
        let pin = pinInput?.value || '';
        const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
        for (let i = 0; i < 10; i++) {
          pin = pin.replace(new RegExp(persianDigits[i], 'g'), String(i));
        }
        if (sha256Sync(pin) === CASHIER_PIN_HASH) {
          cashierAuthenticated = true;
          try { sessionStorage.setItem('atish_cashier_auth', 'true'); } catch (e) {}
          renderCashierState();
        } else {
          document.getElementById('cashier-pin-error')?.classList.remove('hidden');
        }
      });

    } else {
      // Authenticated Cashier Tool
      cashierBody.innerHTML = `
        <div class="space-y-4">
          <div class="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-right">
            <label class="block text-xs font-bold text-emerald-300 mb-1.5">کد تخفیف ارائه‌شده توسط مشتری را وارد کنید:</label>
            <div class="flex items-center gap-2">
              <input 
                type="text" 
                id="cashier-search-code" 
                placeholder="A01-101-830" 
                dir="ltr"
                maxlength="11"
                autocomplete="off"
                autocorrect="off"
                spellcheck="false"
                class="flex-1 bg-[#1a1a20] border border-white/[0.15] text-white text-center font-mono font-black text-sm uppercase tracking-wider rounded-xl py-2 focus:outline-none focus:border-emerald-400"
              />
              <button 
                id="cashier-verify-btn" 
                type="button" 
                class="px-4 py-2 rounded-xl bg-emerald-500 text-black font-black text-xs hover:bg-emerald-400 transition"
              >
                بررسی
              </button>
            </div>
          </div>

          <div id="cashier-result-box" class="hidden p-4 rounded-xl bg-[#1f1f26] border border-white/[0.08] text-right space-y-3">
          </div>

          <div class="border-t border-white/[0.08] pt-3 flex items-center justify-between text-xs text-zinc-400">
            <button id="cashier-logout-btn" class="hover:text-white transition">خروج از سیستم صندوق</button>
            <span>رستوران آتیش</span>
          </div>
        </div>
      `;

      document.getElementById('cashier-logout-btn')?.addEventListener('click', () => {
        cashierAuthenticated = false;
        try { sessionStorage.removeItem('atish_cashier_auth'); } catch (e) {}
        renderCashierState();
      });

      const codeInput = document.getElementById('cashier-search-code');
      const verifyBtn = document.getElementById('cashier-verify-btn');
      const resultBox = document.getElementById('cashier-result-box');

      // Auto-dash formatting: inserts '-' between each 3 characters (e.g. A01-101-830)
      codeInput?.addEventListener('input', () => {
        const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
        let val = codeInput.value.toUpperCase();
        for (let i = 0; i < 10; i++) {
          val = val.replace(new RegExp(persianDigits[i], 'g'), String(i));
        }
        const clean = val.replace(/[^A-Z0-9]/g, '').slice(0, 9);
        let formatted = '';
        for (let i = 0; i < clean.length; i += 3) {
          if (i > 0) formatted += '-';
          formatted += clean.slice(i, i + 3);
        }
        codeInput.value = formatted;
      });

      const doVerify = () => {
        const rawInput = codeInput?.value || '';
        const verified = verifyVoucherCode(rawInput);

        let redeemedList = [];
        try {
          redeemedList = JSON.parse(localStorage.getItem('atish_cashier_redeemed') || '[]');
        } catch (e) {}

        resultBox.classList.remove('hidden');

        if (!verified.valid) {
          resultBox.innerHTML = `
            <div class="p-3 rounded-xl bg-rose-500/15 border border-rose-500/30 text-rose-300 text-center space-y-1">
              <div class="text-base font-black">❌ غیر معتبر / نامعتبر</div>
              <p class="text-xs">${verified.reason}</p>
            </div>
          `;
          return;
        }

        const isRedeemed = redeemedList.some(r => r.code === verified.code);

        if (isRedeemed) {
          const item = redeemedList.find(r => r.code === verified.code);
          resultBox.innerHTML = `
            <div class="p-3 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-300 text-center space-y-1">
              <div class="text-base font-black">⚠️ این کد قبلاً استفاده شده است!</div>
              <p class="text-xs">کد: <span class="font-mono font-bold">${verified.code}</span></p>
              <p class="text-[10px] text-zinc-400">زمان استفاده: ${item?.time || 'نامشخص'}</p>
            </div>
          `;
          return;
        }

        // VALID & UNUSED
        resultBox.innerHTML = `
          <div class="p-3.5 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 space-y-2 text-right">
            <div class="flex items-center justify-between border-b border-emerald-500/30 pb-2">
              <span class="text-xs">نتیجه بررسی:</span>
              <span class="text-xs font-black text-emerald-400">تایید شد (معتبر و اصل) ✅</span>
            </div>
            <div class="flex items-center justify-between border-b border-emerald-500/30 pb-2">
              <span class="text-xs">کد تخفیف:</span>
              <span dir="ltr" class="font-mono font-black text-white text-base">${verified.code}</span>
            </div>
            <div class="flex items-center justify-between border-b border-emerald-500/30 pb-2">
              <span class="text-xs">میزان تخفیف:</span>
              <span class="text-xs font-black text-amber-300">۲۰٪ کسر از فاکتور</span>
            </div>
            <button 
              id="cashier-mark-used-btn" 
              type="button" 
              class="w-full py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-black font-black text-xs hover:opacity-90 transition mt-2 shadow-lg"
            >
              ✓ اعمال ۲۰٪ تخفیف و علامت‌گذاری به عنوان استفاده شده
            </button>
          </div>
        `;

        document.getElementById('cashier-mark-used-btn')?.addEventListener('click', () => {
          redeemedList.push({ code: verified.code, time: new Date().toLocaleTimeString('fa-IR') + ' - ' + new Date().toLocaleDateString('fa-IR') });
          try {
            localStorage.setItem('atish_cashier_redeemed', JSON.stringify(redeemedList));
          } catch (e) {}
          showToast(`تخفیف ۲۰٪ برای ${verified.code} اعمال شد.`);
          doVerify();
        });
      };

      verifyBtn?.addEventListener('click', doVerify);
      codeInput?.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          doVerify();
        }
      });
    }
  }

  closeCashierBtn?.addEventListener('click', () => {
    cashierModal?.classList.add('hidden');
  });

  cashierModal?.addEventListener('click', (e) => {
    if (e.target === cashierModal) cashierModal.classList.add('hidden');
  });

  // Secret 5-click logo trigger
  headerLogoLink?.addEventListener('click', (e) => {
    logoClickCount++;
    clearTimeout(logoClickTimer);
    if (logoClickCount >= 5) {
      e.preventDefault();
      logoClickCount = 0;
      openCashierPanel();
    } else {
      logoClickTimer = setTimeout(() => {
        logoClickCount = 0;
      }, 3000);
    }
  });

  // Secret URL hash trigger
  const checkCashierHash = () => {
    const hash = window.location.hash;
    if (hash === '#cashier' || hash === '#cashier-tool') {
      if (hash === '#cashier-tool') cashierAuthenticated = true;
      openCashierPanel();
    } else if (hash.startsWith('#cashier-verify=')) {
      cashierAuthenticated = true;
      openCashierPanel();
      const codeVal = hash.replace('#cashier-verify=', '');
      const codeInput = document.getElementById('cashier-search-code');
      if (codeInput) {
        codeInput.value = codeVal;
        codeInput.dispatchEvent(new Event('input'));
        const verified = verifyVoucherCode(codeInput.value);
        const resultBox = document.getElementById('cashier-result-box');
        if (resultBox && verified.valid) {
          resultBox.classList.remove('hidden');
          resultBox.innerHTML = `
            <div class="p-3.5 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 space-y-2 text-right">
              <div class="flex items-center justify-between border-b border-emerald-500/30 pb-2">
                <span class="text-xs">نتیجه بررسی:</span>
                <span class="text-xs font-black text-emerald-400">تایید شد (معتبر و اصل) ✅</span>
              </div>
              <div class="flex items-center justify-between border-b border-emerald-500/30 pb-2">
                <span class="text-xs">کد تخفیف:</span>
                <span dir="ltr" class="font-mono font-black text-white text-base">${verified.code}</span>
              </div>
              <div class="flex items-center justify-between border-b border-emerald-500/30 pb-2">
                <span class="text-xs">میزان تخفیف:</span>
                <span class="text-xs font-black text-amber-300">۲۰٪ کسر از فاکتور</span>
              </div>
              <button 
                id="cashier-mark-used-btn" 
                type="button" 
                class="w-full py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-black font-black text-xs hover:opacity-90 transition mt-2 shadow-lg"
              >
                ✓ اعمال ۲۰٪ تخفیف و علامت‌گذاری به عنوان استفاده شده
              </button>
            </div>
          `;
        }
      }
    }
  };

  checkCashierHash();
  window.addEventListener('hashchange', checkCashierHash);
}
*/

// =========================================================================
// ATISH SPIN-THE-WHEEL PROMO ENGINE (8 Slices: 5%, 10%, 20%, 30% + 4 Fun)
// =========================================================================
// Server-Side Rules (ArvanCloud Edge Function — ZERO secrets in public repo/frontend):
// - Code Format: 1 BIG uppercase letter (A-Z, excluding I/O) + 8 digits -> e.g. K48-912-607
// - Uncrackable Security: CSPRNG random generation + private server-side vault
// - 1 spin per device
// - Global Depletion Quotas (50 total): 5% = 20, 10% = 15, 20% = 10, 30% = 5
// - Auto-expires automatically 3 days after the user receives the code
const SPIN_API_BASE = 'https://atish-api.hamidrghavami-srvao.arvanedge.ir';
const SPIN_CODE_TTL_MS = 3 * 24 * 60 * 60 * 1000; // 3 days automatic expiry
const SPIN_CODE_PATTERN = /^[A-Z][0-9]{2}-[0-9]{3}-[0-9]{3}$/; // e.g. K48-912-607

const SPIN_WHEEL_SLICES = [
  { id: 'disc-30', label: '۳۰٪ تخفیف', isWin: true, discount: 30, maxGlobal: 5, fill: '#b91c1c', textFill: '#fef08a', sub: 'جایزه بزرگ! ۳۰٪ تخفیف ویژه سفارش بعدی 🔥' },
  { id: 'miss-next', label: 'دفعه بعد!', isWin: false, fill: '#fff7ed', textFill: '#991b1b', sub: 'این بار شانس یار نبود! دفعه بعد حتماً برنده می‌شی 😅' },
  { id: 'disc-10', label: '۱۰٪ تخفیف', isWin: true, discount: 10, maxGlobal: 15, fill: '#dc2626', textFill: '#ffffff', sub: 'تبریک! ۱۰٪ تخفیف ویژه سفارش تلفنی آتیش 🎉' },
  { id: 'try-steak', label: 'پیتزا استیک', isWin: false, fill: '#fff7ed', textFill: '#7f1d1d', itemId: 'ip-5', sub: 'تخفیف نیفتاد ولی حتماً «پیتزا استیک ایتالیایی» آتیش رو امتحان کن! 🍕' },
  { id: 'disc-20', label: '۲۰٪ تخفیف', isWin: true, discount: 20, maxGlobal: 10, fill: '#b91c1c', textFill: '#fde68a', sub: 'فوق‌العاده! ۲۰٪ تخفیف اختصاصی برای سفارش بعدی شما 🔥' },
  { id: 'miss-empty', label: 'پوچ شد!', isWin: false, fill: '#fff7ed', textFill: '#991b1b', sub: 'این دور پوچ بود 🙈 ولی پیتزاهای داغ آتیش همیشه منتظرتونن!' },
  { id: 'disc-5', label: '۵٪ تخفیف', isWin: true, discount: 5, maxGlobal: 20, fill: '#dc2626', textFill: '#ffffff', sub: 'عالی! ۵٪ تخفیف ویژه روی سفارش تلفنی بعدی شما ✨' },
  { id: 'try-burger', label: 'آتیش برگر', isWin: false, fill: '#fff7ed', textFill: '#7f1d1d', itemId: 'b-7', sub: 'تخفیف نیفتاد اما امضای سرآشپز یعنی «آتیش برگر» رو از دست نده! 🍔' }
];

// Note: All secrets & quota enforcement live strictly in ArvanCloud Edge Function — NEVER in frontend/repo!
async function requestSpinFromBackend() {
  const res = await fetch(`${SPIN_API_BASE}/api/spin`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok || !data.ok) {
    throw new Error(data.reason === 'disabled' ? 'disabled' : 'Spin API unavailable');
  }
  return data; // { ok, sliceId, code, percent, issuedAt, expiresAt }
}

function buildSpinWheelSvg() {
  const cx = 180;
  const cy = 180;
  const r = 154;
  const sliceAngle = 360 / SPIN_WHEEL_SLICES.length; // 45 deg

  const polar = (angleDeg, radius) => {
    const rad = ((angleDeg - 90) * Math.PI) / 180;
    return {
      x: cx + radius * Math.cos(rad),
      y: cy + radius * Math.sin(rad)
    };
  };

  const slicesMarkup = SPIN_WHEEL_SLICES.map((slice, i) => {
    const startAngle = i * sliceAngle;
    const endAngle = (i + 1) * sliceAngle;
    const midAngle = startAngle + sliceAngle / 2;
    const p1 = polar(startAngle, r);
    const p2 = polar(endAngle, r);
    const labelPos = polar(midAngle, r * 0.64);
    const pathD = `M ${cx} ${cy} L ${p1.x.toFixed(2)} ${p1.y.toFixed(2)} A ${r} ${r} 0 0 1 ${p2.x.toFixed(2)} ${p2.y.toFixed(2)} Z`;

    return `
      <g>
        <path d="${pathD}" fill="${slice.fill}" stroke="#7f1d1d" stroke-width="1.5"/>
        <text
          x="${labelPos.x.toFixed(2)}"
          y="${labelPos.y.toFixed(2)}"
          fill="${slice.textFill}"
          font-family="Vazirmatn, sans-serif"
          font-weight="900"
          font-size="14"
          text-anchor="middle"
          dominant-baseline="middle"
          transform="rotate(${(midAngle - 90).toFixed(1)}, ${labelPos.x.toFixed(2)}, ${labelPos.y.toFixed(2)})"
        >${slice.label}</text>
      </g>
    `;
  }).join('');

  const bulbsMarkup = Array.from({ length: 16 }, (_, idx) => {
    const pos = polar(idx * 22.5, 166);
    const isGold = idx % 2 === 0;
    return `<circle cx="${pos.x.toFixed(2)}" cy="${pos.y.toFixed(2)}" r="3.6" fill="${isGold ? '#fef08a' : '#ffffff'}" opacity="0.95"/>`;
  }).join('');

  return `
    <svg viewBox="0 0 360 360" class="w-full h-full block" aria-hidden="true">
      <circle cx="${cx}" cy="${cy}" r="175" fill="#dc2626" stroke="#fbbf24" stroke-width="4"/>
      <circle cx="${cx}" cy="${cy}" r="158" fill="#7f1d1d"/>
      ${slicesMarkup}
      ${bulbsMarkup}
    </svg>
  `;
}

function initSpinWheelSystem() {
  const openBtn = document.getElementById('btn-open-spin-wheel');
  const modal = document.getElementById('spin-wheel-modal');
  const closeBtn = document.getElementById('close-spin-modal-btn');
  const rotor = document.getElementById('spin-wheel-rotor');
  const centerBtn = document.getElementById('spin-wheel-center-btn');
  const resultBox = document.getElementById('spin-wheel-result');

  if (!modal || !rotor || !resultBox) return;

  rotor.innerHTML = buildSpinWheelSvg();

  let isSpinning = false;
  let currentRotation = 0;

  const getSavedSpin = () => {
    try {
      const raw = localStorage.getItem('atish_spin_result');
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  };

  const renderIdleState = () => {
    resultBox.innerHTML = `
      <div class="text-center space-y-2.5">
        <p class="text-xs text-zinc-300 leading-relaxed">
          روی گردونه یا دکمه زیر کلیک کن! ۴ خانه تخفیف <strong class="text-amber-300">۵٪، ۱۰٪، ۲۰٪ و ۳۰٪</strong> منتظر شانس توئه.
        </p>
        <button
          id="spin-wheel-cta-btn"
          type="button"
          class="w-full py-3 rounded-xl bg-gradient-to-r from-red-600 via-red-500 to-amber-500 hover:brightness-110 text-white font-black text-sm shadow-lg shadow-red-600/30 transition active:scale-[0.98]"
        >
          🎡 چرخاندن گردونه شانس
        </button>
      </div>
    `;
    document.getElementById('spin-wheel-cta-btn')?.addEventListener('click', startSpin);
  };

  const renderResultState = (slice, code, expiresAt) => {
    const restaurantPhone = menuData?.restaurant?.phone || CONFIG.phoneNumber || '02122561949';
    const isExpired = expiresAt && Date.now() > expiresAt;

    if (slice.isWin) {
      resultBox.innerHTML = `
        <div class="p-4 rounded-2xl bg-gradient-to-b from-red-950/50 to-[#18181c] border border-amber-400/45 text-center space-y-3 shadow-xl">
          <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-300 text-xs font-black">
            <span>${isExpired ? '⌛' : '🎉'}</span>
            <span>${isExpired ? 'مهلت ۳ روزه این کد به پایان رسیده است' : `برنده ${toPersianDigits(slice.discount)}٪ تخفیف شدی!`}</span>
          </div>
          <p class="text-xs text-zinc-200 leading-relaxed">${slice.sub}</p>

          ${!isExpired ? `
            <div class="p-3 rounded-xl bg-black/70 border border-amber-400/40 flex items-center justify-between gap-2 max-w-xs mx-auto">
              <span dir="ltr" class="font-mono font-black text-lg text-amber-300 tracking-wider select-all">${code}</span>
              <button id="copy-spin-code-btn" type="button" class="px-3 py-1.5 rounded-lg bg-gradient-to-r from-amber-400 to-orange-500 text-black font-black text-xs hover:brightness-110 transition">
                کپی
              </button>
            </div>

            <p class="text-[11px] text-zinc-300 font-bold">
              مهلت استفاده: ۳ روز (پس از ۳ روز به‌صورت خودکار منقضی می‌شود)
            </p>

            <a href="tel:${restaurantPhone}" class="w-full py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-black text-xs transition flex items-center justify-center gap-1.5 shadow-md">
              <span>📞</span>
              <span>تماس و ثبت سفارش با تخفیف (۰۲۱-۲۲۵۶۱۹۴۹)</span>
            </a>
          ` : ''}
        </div>
      `;

      document.getElementById('copy-spin-code-btn')?.addEventListener('click', () => {
        navigator.clipboard?.writeText(`کد تخفیف ${toPersianDigits(slice.discount)}٪ آتیش: ${code}`).then(() => {
          showToast('کد تخفیف کپی شد ✓');
        }).catch(() => {
          showToast(`کد: ${code}`);
        });
      });
    } else {
      const targetItem = slice.itemId ? menuData.items?.find(i => i.id === slice.itemId) : null;
      resultBox.innerHTML = `
        <div class="p-4 rounded-2xl bg-[#1b1b22] border border-white/[0.12] text-center space-y-3">
          <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.08] text-zinc-200 text-xs font-black">
            <span>${slice.label}</span>
          </div>
          <p class="text-xs text-zinc-300 leading-relaxed">${slice.sub}</p>
          ${targetItem ? `
            <button id="spin-view-item-btn" type="button" class="w-full py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 text-black font-black text-xs transition hover:brightness-105">
              مشاهده ${targetItem.title} در منو 🍽️
            </button>
          ` : ''}
        </div>
      `;

      if (targetItem) {
        document.getElementById('spin-view-item-btn')?.addEventListener('click', () => {
          modal.classList.add('hidden');
          openItemModal(targetItem);
        });
      }
    }
  };

  async function startSpin() {
    if (isSpinning) return;

    const existing = getSavedSpin();
    if (existing) {
      const savedSlice = SPIN_WHEEL_SLICES.find(s => s.id === existing.sliceId);
      if (savedSlice) {
        renderResultState(savedSlice, existing.code, existing.expiresAt);
        return;
      }
    }

    isSpinning = true;
    if (centerBtn) centerBtn.disabled = true;

    resultBox.innerHTML = `
      <div class="py-3 text-center">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500/15 border border-amber-400/30 text-amber-300 text-xs font-black">
          <span>✨</span>
          <span>گردونه در حال چرخش... ببینیم شانست چیه!</span>
        </div>
      </div>
    `;

    try {
      const data = await requestSpinFromBackend();
      const sliceIndex = SPIN_WHEEL_SLICES.findIndex(s => s.id === data.sliceId);
      const chosenSlice = SPIN_WHEEL_SLICES[sliceIndex >= 0 ? sliceIndex : 1];
      const sliceAngle = 360 / SPIN_WHEEL_SLICES.length;
      const sliceCenter = (sliceIndex >= 0 ? sliceIndex : 1) * sliceAngle + sliceAngle / 2;
      const safeOffset = (Math.random() - 0.5) * 20;
      const targetMod = (360 - sliceCenter + safeOffset + 360) % 360;
      const currentMod = ((currentRotation % 360) + 360) % 360;
      const deltaToTarget = (targetMod - currentMod + 360) % 360;

      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      currentRotation += (prefersReduced ? 0 : 6 * 360) + deltaToTarget;

      rotor.style.transition = prefersReduced
        ? 'none'
        : 'transform 4.6s cubic-bezier(0.12, 0.88, 0.16, 1)';
      rotor.style.transform = `rotate(${currentRotation.toFixed(2)}deg)`;

      const finishSpin = () => {
        isSpinning = false;
        if (centerBtn) centerBtn.disabled = false;
        const expiresAt = data.expiresAt || (Date.now() + SPIN_CODE_TTL_MS);
        try {
          localStorage.setItem('atish_spin_result', JSON.stringify({
            sliceId: chosenSlice.id,
            code: data.code || null,
            issuedAt: data.issuedAt || Date.now(),
            expiresAt
          }));
        } catch (e) {}
        renderResultState(chosenSlice, data.code || null, expiresAt);
      };

      if (prefersReduced) finishSpin();
      else setTimeout(finishSpin, 4700);
    } catch (err) {
      isSpinning = false;
      if (centerBtn) centerBtn.disabled = false;
      showToast('خطا در اتصال به سرور گردونه');
      renderIdleState();
    }
  }

  const openModal = () => {
    const saved = getSavedSpin();
    if (saved) {
      const savedSlice = SPIN_WHEEL_SLICES.find(s => s.id === saved.sliceId);
      if (savedSlice) renderResultState(savedSlice, saved.code, saved.expiresAt);
      else renderIdleState();
    } else {
      renderIdleState();
    }
    modal.classList.remove('hidden');
  };

  openBtn?.addEventListener('click', openModal);
  closeBtn?.addEventListener('click', () => { if (!isSpinning) modal.classList.add('hidden'); });
  modal.addEventListener('click', (e) => {
    if (e.target === modal && !isSpinning) modal.classList.add('hidden');
  });
  rotor.addEventListener('click', startSpin);
  rotor.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      startSpin();
    }
  });
  centerBtn?.addEventListener('click', startSpin);

  // Hidden by default — only reveal when Owner has turned Spin-the-Wheel ON in staff.pizzaatish.ir
  fetch(`${SPIN_API_BASE}/api/wheel-status`)
    .then(r => r.json())
    .then(status => {
      if (status && status.wheelEnabled === true) {
        openBtn?.classList.remove('hidden');
      } else {
        openBtn?.classList.add('hidden');
      }
    })
    .catch(() => {
      openBtn?.classList.add('hidden');
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
      placeholderIcon: '🍕',
      price: shape?.price || baseItem.price
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
    placeholderIcon: item.placeholderIcon,
    price: item.price
  };
}

function updateTrayModalInPlace(itemId) {
  const trayModal = document.getElementById('tray-modal');
  if (!trayModal || trayModal.classList.contains('hidden')) return false;

  const qtyEl = document.getElementById(`tray-item-qty-${itemId}`);
  if (!qtyEl) return false;

  const item = getTrayItemDetails(itemId);
  if (!item) return false;

  const qty = orderTray[itemId] || 0;
  const itemPrice = item.price ? Number(item.price) : 0;
  const totalCount = getTrayTotalCount();
  const totalPrice = getTrayTotalPrice();

  // 1. Update quantity
  qtyEl.textContent = toPersianDigits(qty);

  // 2. Update subtotal
  const subtotalEl = document.getElementById(`tray-item-subtotal-${itemId}`);
  if (subtotalEl) {
    if (itemPrice > 0) {
      subtotalEl.innerHTML = `
        <span class="text-[11px] font-black text-amber-400 whitespace-nowrap">${formatPrice(itemPrice * qty)}</span>
        ${qty > 1 ? `<span class="text-[9px] sm:text-[10px] text-zinc-400 whitespace-nowrap leading-tight">(${formatPrice(itemPrice)} هر عدد)</span>` : ''}
      `;
    } else {
      subtotalEl.innerHTML = `<span class="text-[10px] text-zinc-400 font-light truncate max-w-[120px] block">${item.ingredients || 'آتیش'}</span>`;
    }
  }

  // 3. Update modal header total
  const headerTotals = document.getElementById('tray-header-totals');
  if (headerTotals) {
    headerTotals.textContent = `${toPersianDigits(totalCount)} قلم غذا${totalPrice > 0 ? ` · ${formatPrice(totalPrice)}` : ''}`;
  }

  // 4. Update total summary card
  const totalCard = document.getElementById('tray-total-card');
  if (totalCard) {
    totalCard.className = `${totalPrice > 0 ? 'flex' : 'hidden'} mx-3 my-2 p-3 rounded-2xl bg-[#1b1b22] border border-amber-500/25 items-center justify-between shadow-md`;
  }
  const totalCountEl = document.getElementById('tray-total-card-count');
  if (totalCountEl) {
    totalCountEl.textContent = `${toPersianDigits(totalCount)} قلم غذا`;
  }
  const totalPriceEl = document.getElementById('tray-total-card-price');
  if (totalPriceEl) {
    totalPriceEl.textContent = formatPrice(totalPrice);
  }

  return true;
}

function addItemToTray(itemId) {
  orderTray[itemId] = (orderTray[itemId] || 0) + 1;
  saveTray();
  const trayModal = document.getElementById('tray-modal');
  if (trayModal && !trayModal.classList.contains('hidden')) {
    if (!updateTrayModalInPlace(itemId)) {
      renderTrayModal();
    }
  }
}

function removeItemFromTray(itemId) {
  if (!orderTray[itemId]) return;
  orderTray[itemId] -= 1;
  const remaining = orderTray[itemId];
  if (remaining <= 0) {
    delete orderTray[itemId];
    saveTray();
    renderTrayModal();
    return;
  }
  saveTray();
  if (!updateTrayModalInPlace(itemId)) {
    renderTrayModal();
  }
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

function getOrderSummaryText() {
  const itemIds = Object.keys(orderTray);
  let orderSummaryText = `📋 پیش‌فاکتور اقلام سفارش - رستوران آتیش:\n\n`;
  let orderTotalSum = 0;
  itemIds.forEach((id, idx) => {
    const item = getTrayItemDetails(id);
    if (item) {
      const qty = orderTray[id];
      const itemPrice = item.price ? Number(item.price) : 0;
      const subtotal = itemPrice * qty;
      orderTotalSum += subtotal;
      const priceText = itemPrice > 0 ? ` (${formatPrice(subtotal)})` : '';
      orderSummaryText += `${toPersianDigits(idx + 1)}. ${item.title} × ${toPersianDigits(qty)}${priceText}\n`;
    }
  });
  if (orderTotalSum > 0) {
    orderSummaryText += `\n💰 جمع کل سفارش: ${formatPrice(orderTotalSum)}\n`;
  }
  orderSummaryText += `\n📍 آدرس: خیابان دولت تهران، محله دروس، روبه‌روی بانک ملت بین کوچه خرداد و معتمدی، پلاک ۱۰۰\n`;
  orderSummaryText += `📞 تلفن سفارش مستقیم: ۰۲۱-۲۲۵۶۱۹۴۹\n`;
  orderSummaryText += `🛵 سفارش آنلاین در اسنپ‌فود: https://snappfood.ir/restaurant/menu/پیتزا_آتیش-r-p44gzx/`;
  return orderSummaryText;
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

  const totalPrice = getTrayTotalPrice();

  box.innerHTML = `
    <!-- Modal Header -->
    <div class="p-4 border-b border-white/[0.08] flex items-center justify-between bg-[#18181c]">
      <div class="flex items-center gap-2">
        <span class="text-xl">📋</span>
        <div>
          <h2 class="text-sm font-black text-white">لیست سفارش شما</h2>
          <span id="tray-header-totals" class="text-[11px] text-amber-400 font-bold">${toPersianDigits(totalCount)} قلم غذا${totalPrice > 0 ? ` · ${formatPrice(totalPrice)}` : ''}</span>
        </div>
      </div>
      <button id="close-tray-btn" class="w-7 h-7 rounded-full bg-[#24242c] flex items-center justify-center text-zinc-400 hover:text-white transition">
        ${ICONS.close}
      </button>
    </div>

    <!-- Friendly Notice for Iranian Customers -->
    <div class="m-3 p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-[11px] text-amber-300 leading-relaxed flex items-start gap-2">
      <span class="text-sm flex-shrink-0">💡</span>
      <p>
        لیست و قیمت‌های زیر برای آماده‌سازی سریع سفارش شماست. می‌توانید لیست را کپی کرده یا مستقیماً تماس بگیرید.
      </p>
    </div>

    <!-- Items List -->
    <div class="px-3 py-1 flex flex-col gap-2 max-h-60 overflow-y-auto">
      ${itemIds.map(id => {
        const item = getTrayItemDetails(id);
        if (!item) return '';
        const qty = orderTray[id];
        const imgSrc = getThumbSrc(item.image);
        const itemPrice = item.price ? Number(item.price) : 0;
        return `
          <div class="flex items-center justify-between p-2.5 rounded-xl bg-[#202026] border border-white/[0.06]">
            <div class="flex items-center gap-2.5 min-w-0">
              <div class="w-10 h-10 rounded-lg overflow-hidden bg-black/40 flex-shrink-0 border border-white/[0.08]">
                <img src="${imgSrc}" alt="${item.title}" class="w-full h-full object-cover" onerror="this.src='/images/atish-burger.jpg'" />
              </div>
              <div class="text-right min-w-0">
                <h4 class="text-xs font-bold text-white truncate">${item.title}</h4>
                <div id="tray-item-subtotal-${id}" class="flex flex-col sm:flex-row sm:items-center items-start gap-0.5 sm:gap-1.5 mt-0.5">
                  ${itemPrice > 0 ? `
                    <span class="text-[11px] font-black text-amber-400 whitespace-nowrap">
                      ${formatPrice(itemPrice * qty)}
                    </span>
                    ${qty > 1 ? `<span class="text-[9px] sm:text-[10px] text-zinc-400 whitespace-nowrap leading-tight">(${formatPrice(itemPrice)} هر عدد)</span>` : ''}
                  ` : `
                    <span class="text-[10px] text-zinc-400 font-light truncate max-w-[120px] block">${item.ingredients || 'آتیش'}</span>
                  `}
                </div>
              </div>
            </div>

            <!-- Quantity Counter Controls -->
            <div class="flex items-center gap-1.5 flex-shrink-0">
              <div class="flex items-center bg-[#282832] border border-white/[0.12] rounded-xl p-1 gap-1">
                <button 
                  type="button"
                  data-action="decrease" 
                  data-id="${id}" 
                  class="w-7 h-7 rounded-lg bg-white/[0.06] hover:bg-white/[0.15] active:scale-90 flex items-center justify-center text-zinc-300 hover:text-white transition"
                  aria-label="کاهش تعداد"
                >
                  <span class="pointer-events-none">${ICONS.minus}</span>
                </button>
                <span id="tray-item-qty-${id}" class="text-xs sm:text-sm font-black text-amber-400 px-1.5 min-w-[20px] text-center select-none pointer-events-none">
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

    <!-- Total Price Summary Box: Solid dark theme with zero flicker -->
    <div id="tray-total-card" class="${totalPrice > 0 ? 'flex' : 'hidden'} mx-3 my-2 p-3 rounded-2xl bg-[#1c1c22] border border-amber-500/30 items-center justify-between shadow-md">
      <div class="flex items-center gap-2">
        <span class="text-base">💳</span>
        <div>
          <span class="text-xs font-black text-white block">مجموع مبلغ سفارش:</span>
          <span id="tray-total-card-count" class="text-[10px] text-zinc-400 font-light">${toPersianDigits(totalCount)} قلم غذا</span>
        </div>
      </div>
      <div class="text-left">
        <span id="tray-total-card-price" class="text-sm sm:text-base font-black text-amber-400">${formatPrice(totalPrice)}</span>
      </div>
    </div>

    <!-- Action Buttons: Solid grounded dark footer with no shifting borders -->
    <div class="p-3 mt-auto bg-[#131317] border-t border-white/[0.06] flex flex-col gap-2">
      <div class="grid grid-cols-2 gap-2">
        <a 
          href="tel:${restaurant.phone}"
          class="py-2.5 px-2 rounded-xl bg-[#22c55e] hover:bg-[#16a34a] text-white font-black text-xs flex items-center justify-center gap-1.5 shadow-md shadow-emerald-500/25 active:scale-95 transition whitespace-nowrap"
        >
          ${ICONS.phone}
          <span>تماس و سفارش</span>
        </a>

        <a 
          href="${restaurant.snappfoodUrl}" 
          target="_blank" 
          rel="noopener noreferrer"
          class="py-2.5 px-2 rounded-xl bg-[#ff00a6] hover:bg-[#e00092] text-white font-black text-xs flex items-center justify-center gap-1.5 shadow-md shadow-pink-500/25 active:scale-95 transition whitespace-nowrap"
        >
          ${ICONS.scooter}
          <span>سفارش اسنپ‌فود</span>
        </a>
      </div>

      <div class="grid grid-cols-2 gap-2 pt-0.5">
        <button 
          id="btn-copy-order" 
          class="py-2 rounded-xl bg-[#202028] hover:bg-[#282834] border border-white/[0.08] text-[11px] font-bold text-zinc-300 hover:text-white flex items-center justify-center gap-1 active:scale-95 transition"
        >
          ${ICONS.copy}
          <span>کپی لیست سفارش</span>
        </button>

        <button 
          id="btn-clear-tray"
          class="py-2 rounded-xl bg-[#202028] hover:bg-red-500/10 border border-white/[0.08] hover:border-red-500/30 text-[11px] font-bold text-red-400 hover:text-red-300 flex items-center justify-center gap-1 active:scale-95 transition"
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
    navigator.clipboard?.writeText(getOrderSummaryText()).then(() => {
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

function getThumbSrc(img) {
  const full = getImgSrc(img);
  if (!full) return '';
  const filename = full.split('/').pop();
  if (filename && filename !== 'logo.webp') {
    const thumbName = filename.replace(/\.(jpg|jpeg|png)$/i, '.webp');
    return `/images/thumbs/${thumbName}`;
  }
  return full;
}

function updateCardShapeUI(item, shapeId) {
  if (!item) return;
  itemSelectedShape[item.id] = shapeId;
  const shape = item.shapes?.find(s => s.id === shapeId) || item.shapes?.[0];
  if (!shape) return;

  const cardImg = document.getElementById(`card-img-${item.id}`);
  if (cardImg && shape.image) {
    const nextThumb = getThumbSrc(shape.image);
    if (cardImg.dataset.thumb !== nextThumb) {
      cardImg.dataset.thumb = nextThumb;
      cardImg.src = nextThumb;
    }
  }

  const badgeEl = document.getElementById(`card-badge-${item.id}`);
  if (badgeEl) {
    const text = shape.badge || item.badge || '';
    badgeEl.textContent = text;
    badgeEl.className = text ? 'bg-black/90 text-amber-300 border border-amber-500/30 text-[9px] md:text-[10px] font-black px-2 py-0.5 rounded-lg shadow-sm whitespace-nowrap' : 'hidden';
  }

  const btnText = document.getElementById(`card-btn-text-${item.id}`);
  if (btnText) {
    btnText.textContent = `افزودن ${shape.shortName || shape.name}`;
  }

  // Update card price dynamically if shape price differs
  const cardPriceEl = document.getElementById(`card-price-${item.id}`);
  if (cardPriceEl) {
    const currentPrice = shape.price || item.price;
    if (currentPrice) cardPriceEl.textContent = formatPrice(currentPrice);
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
  if (item?.title) trackMenuEvent('item', item.title);

  const hasShapes = item.shapes && item.shapes.length > 1;
  let activeShapeId = hasShapes ? (itemSelectedShape[item.id] || item.shapes[0].id) : null;
  let activeShape = hasShapes ? (item.shapes.find(s => s.id === activeShapeId) || item.shapes[0]) : null;
  const initialImg = activeShape ? activeShape.image : item.image;
  const thumbSrc = getThumbSrc(initialImg);
  const currentPrice = activeShape?.price || item.price;

  box.innerHTML = `
    <!-- Modal Photo Container with Touch Swipe and Arrow Controls -->
    <div class="relative w-full h-64 bg-gradient-to-b from-[#24242c] to-[#141417] overflow-hidden flex items-center justify-center select-none" id="modal-photo-container">
      <img 
        id="modal-main-img"
        src="${thumbSrc}" 
        data-thumb="${thumbSrc}"
        alt="${item.title}" 
        decoding="async"
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

      <!-- Badges in Photo Top-Right -->
      <div class="absolute top-3 right-3 flex flex-col gap-2 items-start z-30 pointer-events-none">
        ${item.isChefRecommendation ? `
          <span class="bg-gradient-to-r from-amber-500 to-orange-500 text-black font-black text-[10px] sm:text-[11px] px-2.5 py-1 rounded-lg shadow-lg flex items-center gap-1 whitespace-nowrap">
            <span>⭐</span>
            <span>پیشنهاد سرآشپز</span>
          </span>
        ` : ''}
        <span 
          id="modal-badge"
          class="${(activeShape?.badge || item.badge) ? '' : 'hidden'} bg-black/85 text-amber-300 border border-amber-500/30 text-[10px] sm:text-[11px] font-black px-2.5 py-1 rounded-lg shadow-lg whitespace-nowrap"
        >
          ${activeShape?.badge || item.badge || ''}
        </span>
      </div>

      ${hasShapes ? `
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
      <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
        <h3 class="text-base sm:text-lg font-black text-white" id="modal-title-text">${item.title}</h3>
        <div class="flex items-center gap-1.5 flex-shrink-0">
          ${currentPrice ? `
            <span id="modal-price-badge" class="text-xs sm:text-sm font-black text-amber-400 bg-amber-500/10 border border-amber-500/25 px-2.5 py-1 rounded-xl whitespace-nowrap">
              ${formatPrice(currentPrice)}
            </span>
          ` : ''}
          ${item.tag ? `<span class="text-[10px] font-bold text-red-400 bg-red-500/10 px-2 py-0.5 rounded-full border border-red-500/20">${item.tag}</span>` : ''}
        </div>
      </div>

      ${hasShapes ? `
        <!-- Interactive Option Selector Buttons -->
        <div class="mb-4 bg-white/[0.03] p-2.5 rounded-2xl border border-white/[0.08]">
          <div class="flex items-center justify-between mb-2">
            <span class="text-[11px] text-amber-300 font-bold flex items-center gap-1">
              <span>✨</span>
              <span>${item.optionsLabel || 'انتخاب طعم / مدل:'}</span>
            </span>
            <span class="text-[10px] text-zinc-400 font-light">لمس کنید</span>
          </div>
          <div class="grid grid-cols-2 gap-2" id="modal-shapes-group">
            ${item.shapes.map(s => {
              const isActive = s.id === activeShapeId;
              return `
                <button 
                  type="button" 
                  data-modal-shape-btn="${s.id}"
                  class="py-2 px-2.5 rounded-xl text-xs font-black flex flex-col items-center justify-center gap-0.5 border transition-colors duration-100 touch-manipulation select-none ${isActive ? 'bg-amber-500 text-black border-amber-400 shadow-lg' : 'bg-[#222228] text-zinc-300 border-white/[0.08] hover:text-white hover:bg-white/[0.08]'}"
                >
                  <span>${s.name}</span>
                  ${s.price ? `<span data-shape-price class="text-[10px] font-bold ${isActive ? 'text-black/75' : 'text-amber-400/90'}">${formatPrice(s.price)}</span>` : ''}
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

  // Pre-warm unique other shape images only once so switching is 0ms instant
  if (hasShapes) {
    const uniqueThumbs = new Set(item.shapes.map(s => getThumbSrc(s.image)).filter(src => src && src !== thumbSrc));
    uniqueThumbs.forEach(src => {
      const pre = new Image();
      pre.src = src;
    });
  }

  document.getElementById('close-item-modal-btn')?.addEventListener('click', () => {
    modal.classList.add('hidden');
  });

  if (hasShapes) {
    const modalButtons = Array.from(box.querySelectorAll('[data-modal-shape-btn]'));
    const modalDots = Array.from(box.querySelectorAll('[data-dot-shape]'));
    const imgEl = document.getElementById('modal-main-img');
    const badgeEl = document.getElementById('modal-badge');
    const btnLabel = document.getElementById('modal-btn-label');
    const modalPriceEl = document.getElementById('modal-price-badge');

    const updateModalShape = (newShapeId) => {
      if (newShapeId === activeShapeId) return;
      activeShapeId = newShapeId;
      itemSelectedShape[item.id] = newShapeId;
      activeShape = item.shapes.find(s => s.id === newShapeId) || item.shapes[0];

      // Update image ONLY when the image URL actually changes (0ms instant swap, no flicker/lag)
      const shapeThumb = getThumbSrc(activeShape.image);
      if (imgEl && shapeThumb && imgEl.dataset.thumb !== shapeThumb) {
        imgEl.dataset.thumb = shapeThumb;
        imgEl.src = shapeThumb;
      }

      // Update badge
      if (badgeEl) {
        const text = activeShape.badge || item.badge || '';
        badgeEl.textContent = text;
        badgeEl.className = text ? 'bg-black/85 text-amber-300 border border-amber-500/30 text-[10px] sm:text-[11px] font-black px-2.5 py-1 rounded-lg shadow-lg whitespace-nowrap' : 'hidden';
      }

      // Update dots
      for (const dot of modalDots) {
        const isCurrent = dot.dataset.dotShape === newShapeId;
        dot.className = `h-2 rounded-full transition-all duration-150 ${isCurrent ? 'bg-amber-400 w-5 shadow' : 'bg-white/40 w-2'}`;
      }

      // Update buttons instantaneously (color-only transition, no layout/GPU thrash)
      for (const btn of modalButtons) {
        const isCurrent = btn.dataset.modalShapeBtn === newShapeId;
        btn.className = `py-2 px-2.5 rounded-xl text-xs font-black flex flex-col items-center justify-center gap-0.5 border transition-colors duration-100 touch-manipulation select-none ${isCurrent ? 'bg-amber-500 text-black border-amber-400 shadow-lg' : 'bg-[#222228] text-zinc-300 border-white/[0.08] hover:text-white hover:bg-white/[0.08]'}`;
        const priceSpan = btn.querySelector('[data-shape-price]');
        if (priceSpan) {
          priceSpan.className = `text-[10px] font-bold ${isCurrent ? 'text-black/75' : 'text-amber-400/90'}`;
        }
      }

      // Update button label
      if (btnLabel) {
        btnLabel.textContent = `افزودن به لیست سفارش (${activeShape.name})`;
      }

      // Update price badge if price differs per shape
      const shapePrice = activeShape.price || item.price;
      if (modalPriceEl && shapePrice) {
        modalPriceEl.textContent = formatPrice(shapePrice);
      }

      // Sync card on main grid without blocking tap paint
      requestAnimationFrame(() => updateCardShapeUI(item, newShapeId));
    };

    const toggleModalNextShape = () => {
      const currentIndex = item.shapes.findIndex(s => s.id === activeShapeId);
      const nextIndex = (currentIndex + 1) % item.shapes.length;
      updateModalShape(item.shapes[nextIndex].id);
    };

    modalButtons.forEach(btn => {
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
        ${items.map((item, idx) => renderFoodCard(item, idx < 4)).join('')}
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

  container.innerHTML = categories.map((category, catIdx) => {
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
          ${categoryItems.map((item, itemIdx) => {
            const isTop = catIdx === 0 && itemIdx < 4;
            return renderFoodCard(item, isTop);
          }).join('')}
        </div>
      </section>
    `;
  }).join('');

  attachCardEvents();
}

function renderFoodCard(item, isTop = false) {
  const countInTray = getItemTrayCount(item);
  const hasShapes = item.shapes && item.shapes.length > 1;
  const activeShapeId = hasShapes ? (itemSelectedShape[item.id] || item.shapes[0].id) : 'normal';
  const activeShape = hasShapes ? (item.shapes.find(s => s.id === activeShapeId) || item.shapes[0]) : null;
  const fullImgSrc = getImgSrc(activeShape ? activeShape.image : item.image);
  const imgSrc = getThumbSrc(activeShape ? activeShape.image : item.image);
  const displayPrice = (activeShape && activeShape.price) ? activeShape.price : item.price;
  const badgeText = activeShape?.badge || item.badge;
  const isChef = !!item.isChefRecommendation;
  const loadingAttrs = isTop 
    ? 'loading="eager" fetchpriority="high"' 
    : 'loading="lazy"';

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
            ${loadingAttrs}
            decoding="async"
            class="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
            onerror="this.src='${fullImgSrc}';this.onerror=null;"
          />
          <div style="display:none;" class="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-[#222228] to-[#16161a]">
            <span class="text-3xl filter drop-shadow">${item.placeholderIcon || '🍔'}</span>
          </div>
        ` : `
          <div class="w-full h-full flex flex-col items-center justify-center relative overflow-hidden" style="background: radial-gradient(circle at 50% 42%, rgba(245, 158, 11, 0.22) 0%, rgba(234, 88, 12, 0.08) 46%, #141418 100%);">
            <div class="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-600/10 border border-amber-400/25 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <span class="text-3xl md:text-4xl filter drop-shadow">${item.placeholderIcon || '🔥'}</span>
            </div>
            <span class="mt-2 text-[10px] font-bold tracking-wide text-amber-300/75">آتیش · تازه و گرم</span>
          </div>
        `}

        <!-- Top Badges -->
        <div class="absolute top-2 right-2 flex flex-col gap-1.5 items-start pointer-events-none z-10">
          ${isChef ? `
            <span class="bg-gradient-to-r from-amber-500 to-orange-500 text-black font-black text-[9px] md:text-[10px] px-2 py-0.5 rounded-lg shadow-md flex items-center gap-1 whitespace-nowrap">
              <span>⭐</span>
              <span>پیشنهاد سرآشپز</span>
            </span>
          ` : ''}
          <span 
            id="card-badge-${item.id}"
            class="${badgeText ? '' : 'hidden'} bg-black/90 text-amber-300 border border-amber-500/30 text-[9px] md:text-[10px] font-black px-2 py-0.5 rounded-lg shadow-sm whitespace-nowrap"
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

      <!-- Card Body (title + price + action) -->
      <div class="p-2.5 sm:p-3.5 flex flex-col flex-grow text-right">
        <!-- Title: up to 2 lines, full card width, no overlap with price -->
        <h3 
          class="card-title-clamp text-xs sm:text-sm font-black text-white group-hover:text-amber-400 transition-colors min-h-[2rem] sm:min-h-[2.25rem] leading-snug mb-1.5"
          title="${item.title}"
        >
          ${item.title}
        </h3>

        <!-- Dedicated Price Row: clean separation, fully visible -->
        <div class="flex items-center justify-between gap-1 mb-2">
          ${displayPrice ? `
            <span id="card-price-${item.id}" class="text-xs sm:text-sm font-black text-amber-400 whitespace-nowrap">
              ${formatPrice(displayPrice)}
            </span>
          ` : '<span class="text-[10px] text-zinc-500">-</span>'}
          ${item.tag ? `<span class="text-[9px] font-bold text-red-400 bg-red-500/10 px-1.5 py-0.5 rounded-full border border-red-500/20">${item.tag}</span>` : ''}
        </div>

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
          const currentShape = itemSelectedShape[item.id] || item.shapes[0].id;
          const idx = Math.max(0, item.shapes.findIndex(s => s.id === currentShape));
          const nextShape = item.shapes[(idx + 1) % item.shapes.length].id;
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
          const currentShape = itemSelectedShape[item.id] || item.shapes[0].id;
          const idx = Math.max(0, item.shapes.findIndex(s => s.id === currentShape));
          const nextShape = item.shapes[(idx + 1) % item.shapes.length].id;
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
        const activeShapeId = itemSelectedShape[item.id] || item.shapes[0].id;
        const shape = item.shapes.find(s => s.id === activeShapeId) || item.shapes[0];
        key = `${item.id}:${shape.id}`;
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
    // When a new Service Worker takes over, reload once to ensure fresh assets
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (!window._swReloading) {
        window._swReloading = true;
        window.location.reload();
      }
    });

    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js').then(reg => {
        reg.update();
      }).catch(err => {
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

// Progressive background image cache pre-warming for instant, zero-delay scrolling
function prewarmMenuImages() {
  if (typeof window === 'undefined') return;

  const imagesToWarm = [];
  (menuData.items || []).forEach(item => {
    if (item.image) {
      imagesToWarm.push(getThumbSrc(item.image));
    }
    if (item.shapes) {
      item.shapes.forEach(s => {
        if (s.image) imagesToWarm.push(getThumbSrc(s.image));
      });
    }
  });

  const uniqueImages = [...new Set(imagesToWarm)];
  let idx = 0;

  function fetchNextChunk() {
    if (idx >= uniqueImages.length) return;
    const chunk = uniqueImages.slice(idx, idx + 4);
    idx += 4;

    chunk.forEach(url => {
      const img = new Image();
      img.decoding = 'async';
      img.src = url;
    });

    if (idx < uniqueImages.length) {
      if ('requestIdleCallback' in window) {
        requestIdleCallback(fetchNextChunk, { timeout: 1000 });
      } else {
        setTimeout(fetchNextChunk, 200);
      }
    }
  }

  // Start pre-fetching after initial view is fully rendered
  if ('requestIdleCallback' in window) {
    requestIdleCallback(fetchNextChunk, { timeout: 1500 });
  } else {
    setTimeout(fetchNextChunk, 350);
  }
}

// Initialize Application
renderApp();
updateTrayUI();
initPWA();
prewarmMenuImages();
