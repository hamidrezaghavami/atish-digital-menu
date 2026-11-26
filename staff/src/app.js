import {
  IS_DEMO,
  authenticateCashier,
  authenticateOwner,
  checkDiscountCode,
  getDashboardSummary,
  getOwnerMetrics,
  isDeviceAuthenticated,
  logoutDevice,
  redeemDiscountCode,
  resetDemoData,
  updateSettings,
} from './mock-api.js';

// =========================================================
// HELPERS
// =========================================================
const FA_DIGITS = '۰۱۲۳۴۵۶۷۸۹';
const AR_DIGITS = '٠١٢٣٤٥٦٧٨٩';

// Auto-convert Persian QWERTY letters if cashier forgets to switch Alt+Shift on Windows
const FA_KEYBOARD_TO_EN = {
  ش: 'A', ذ: 'B', ز: 'C', ی: 'D', ي: 'D', ث: 'E', ب: 'F', ل: 'G',
  ا: 'H', آ: 'H', ه: 'I', ت: 'J', ن: 'K', م: 'L', پ: 'M', ئ: 'M',
  د: 'N', خ: 'O', ح: 'P', ض: 'Q', ق: 'R', س: 'S', ف: 'T', ع: 'U',
  ر: 'V', ص: 'W', ط: 'X', غ: 'Y', ظ: 'Z',
};

function toEnglishDigits(str) {
  return String(str)
    .replace(/[۰-۹]/g, (d) => String(FA_DIGITS.indexOf(d)))
    .replace(/[٠-٩]/g, (d) => String(AR_DIGITS.indexOf(d)));
}

function toPersianDigits(num) {
  return String(num).replace(/\d/g, (d) => FA_DIGITS[Number(d)]);
}

function formatCodeInput(raw) {
  const mapped = toEnglishDigits(raw)
    .split('')
    .map((ch) => FA_KEYBOARD_TO_EN[ch] || ch)
    .join('');

  const clean = mapped
    .toUpperCase()
    .replace(/[^A-Z0-9]/g, '')
    .slice(0, 9);

  if (clean.length <= 3) return clean;
  if (clean.length <= 6) return `${clean.slice(0, 3)}-${clean.slice(3)}`;
  return `${clean.slice(0, 3)}-${clean.slice(3, 6)}-${clean.slice(6)}`;
}

function formatTimeFa(timestamp) {
  try {
    return new Intl.DateTimeFormat('fa-IR', {
      hour: '2-digit',
      minute: '2-digit',
    }).format(new Date(timestamp));
  } catch {
    return '';
  }
}

function formatRemainingDays(expiresAt) {
  const diffHours = Math.max(1, Math.round((expiresAt - Date.now()) / (60 * 60 * 1000)));
  if (diffHours >= 24) {
    const days = Math.ceil(diffHours / 24);
    return `معتبر تا ${toPersianDigits(days)} روز دیگر`;
  }
  return `معتبر تا ${toPersianDigits(diffHours)} ساعت دیگر`;
}

// =========================================================
// ACCESSIBLE VALIDATION SYNC (:user-invalid + aria-invalid)
// =========================================================
const srAnnouncer = document.getElementById('sr-announcer');
const flaggedFields = new WeakSet();

function announce(text) {
  if (!srAnnouncer) return;
  srAnnouncer.textContent = '';
  requestAnimationFrame(() => {
    srAnnouncer.textContent = text;
  });
}

function linkError(el, shown) {
  const errorId = el.dataset.error;
  if (!errorId) return;
  const ids = (el.getAttribute('aria-describedby') || '')
    .split(/\s+/)
    .filter((id) => id && id !== errorId);
  if (shown) ids.push(errorId);
  if (ids.length) el.setAttribute('aria-describedby', ids.join(' '));
  else el.removeAttribute('aria-describedby');
}

function syncFieldAria(el) {
  if (!el || !el.matches?.('input')) return;
  const supportsUserInvalid = CSS.supports('selector(:user-invalid)');
  const invalid = supportsUserInvalid
    ? el.matches(':user-invalid')
    : el.classList.contains('user-invalid-fallback');

  if (invalid) {
    el.setAttribute('aria-invalid', 'true');
    linkError(el, true);
    flaggedFields.add(el);
  } else if (flaggedFields.has(el) || el.getAttribute('aria-invalid') !== 'true') {
    el.setAttribute('aria-invalid', 'false');
    linkError(el, false);
    flaggedFields.delete(el);
  }
}

function initAccessibleValidation() {
  const supportsUserInvalid = CSS.supports('selector(:user-invalid)');
  document.querySelectorAll('input').forEach((el) => {
    el.setAttribute('aria-invalid', 'false');
  });

  document.addEventListener(
    'blur',
    (e) => {
      const el = e.target;
      if (!el.matches?.('input')) return;
      if (!supportsUserInvalid && el.value.length > 0) {
        el.classList.toggle('user-invalid-fallback', !el.validity.valid);
      }
      syncFieldAria(el);
    },
    true
  );

  document.addEventListener('input', (e) => {
    const el = e.target;
    if (!el.matches?.('input')) return;
    if (!supportsUserInvalid && el.classList.contains('user-invalid-fallback')) {
      el.classList.toggle('user-invalid-fallback', !el.validity.valid);
    }
    syncFieldAria(el);
  });
}

// =========================================================
// LIGHT-DISMISS FALLBACK FOR <dialog closedby="any">
// =========================================================
function initDialogClosedByFallback() {
  if ('closedBy' in HTMLDialogElement.prototype) return;
  const isOutside = (e, dialog) => {
    const r = dialog.getBoundingClientRect();
    return e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom;
  };
  document.querySelectorAll('dialog[closedby="any"]').forEach((dialog) => {
    let pressedOutside = false;
    dialog.addEventListener('pointerdown', (e) => {
      pressedOutside = isOutside(e, dialog);
    });
    dialog.addEventListener('pointerup', (e) => {
      if (pressedOutside && isOutside(e, dialog)) dialog.close();
    });
  });
}

// =========================================================
// DOM REFERENCES
// =========================================================
const authScreen = document.getElementById('auth-screen');
const authForm = document.getElementById('auth-form');
const cashierPinInput = document.getElementById('cashier-pin');
const authServerError = document.getElementById('auth-server-error');

const appShell = document.getElementById('app-shell');
const verifyForm = document.getElementById('verify-form');
const codeInput = document.getElementById('code-input');
const clearInputBtn = document.getElementById('clear-input-btn');
const resultPanel = document.getElementById('result-panel');
const logList = document.getElementById('log-list');
const todayCountPill = document.getElementById('today-count-pill');
const wheelLivePill = document.getElementById('wheel-live-pill');

const tabPanels = {
  discounts: document.getElementById('tab-discounts'),
  orders: document.getElementById('tab-orders'),
  menu: document.getElementById('tab-menu'),
  sales: document.getElementById('tab-sales'),
};

const brandHomeBtn = document.getElementById('brand-home-btn');
const mobileBrandHomeBtn = document.getElementById('mobile-brand-home-btn');
const sidebarStatusDot = document.getElementById('sidebar-status-dot');
const sidebarStatusText = document.getElementById('sidebar-status-text');
const topModeDot = document.getElementById('top-mode-dot');
const modeBannerText = document.getElementById('mode-banner-text');

const installPwaBtn = document.getElementById('install-pwa-btn');
const installPwaTopBtn = document.getElementById('install-pwa-top-btn');
const installedBadge = document.getElementById('installed-badge');
const installModal = document.getElementById('install-modal');

const ownerModal = document.getElementById('owner-modal');
const openOwnerBtn = document.getElementById('open-owner-btn');
const openOwnerMobileBtn = document.getElementById('open-owner-mobile-btn');
const ownerPinGate = document.getElementById('owner-pin-gate');
const ownerPinForm = document.getElementById('owner-pin-form');
const ownerPinInput = document.getElementById('owner-pin-input');
const ownerPinServerError = document.getElementById('owner-pin-server-error');
const ownerDashboard = document.getElementById('owner-dashboard');
const kpiToday = document.getElementById('kpi-today');
const kpiTotal = document.getElementById('kpi-total');
const stockBars = document.getElementById('stock-bars');
const capsForm = document.getElementById('caps-form');
const capsSaveStatus = document.getElementById('caps-save-status');
const saveCapsBtn = document.getElementById('save-caps-btn');
const toggleWheel = document.getElementById('toggle-wheel');
const resetDemoBtn = document.getElementById('reset-demo-btn');
const logoutDeviceBtn = document.getElementById('logout-device-btn');
const ownerTabAnalytics = document.getElementById('owner-tab-analytics');
const ownerTabControls = document.getElementById('owner-tab-controls');
const refreshMetricsBtn = document.getElementById('refresh-metrics-btn');
const mVisitsToday = document.getElementById('m-visits-today');
const mVisitsTotal = document.getElementById('m-visits-total');
const mCallsTotal = document.getElementById('m-calls-total');
const mSnappTotal = document.getElementById('m-snapp-total');
const mItemsTotal = document.getElementById('m-items-total');
const chart7Days = document.getElementById('chart-7days');
const chartHours = document.getElementById('chart-hours');
const chartTopItems = document.getElementById('chart-top-items');

let activePendingCode = null;
let deferredInstallPrompt = null;
let lastWheelEnabled = false;

// =========================================================
// PWA WINDOWS DESKTOP APP INSTALL HANDLER
// =========================================================
function updateInstalledState() {
  const isStandalone =
    window.matchMedia('(display-mode: standalone)').matches ||
    window.navigator.standalone === true;
  if (isStandalone) {
    installPwaBtn.hidden = true;
    installPwaTopBtn.hidden = true;
    installedBadge.hidden = false;
  }
}

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredInstallPrompt = e;
});

window.addEventListener('appinstalled', () => {
  deferredInstallPrompt = null;
  installPwaBtn.hidden = true;
  installPwaTopBtn.hidden = true;
  installedBadge.hidden = false;
  announce('اپلیکیشن صندوق آتیش روی کامپیوتر نصب شد.');
});

async function handleInstallClick() {
  if (deferredInstallPrompt) {
    deferredInstallPrompt.prompt();
    const { outcome } = await deferredInstallPrompt.userChoice;
    deferredInstallPrompt = null;
    if (outcome === 'accepted') {
      updateInstalledState();
    }
    return;
  }
  installModal.showModal();
}

installPwaBtn.addEventListener('click', handleInstallClick);
installPwaTopBtn.addEventListener('click', handleInstallClick);
installModal.addEventListener('close', () => {
  installModal.returnValue = '';
});

// =========================================================
// RENDERING & TAB SWITCHING
// =========================================================
function applyDemoIndicators() {
  if (!IS_DEMO) return;
  document.getElementById('demo-auth-pill').hidden = false;
  document.getElementById('demo-badge').hidden = false;
  document.getElementById('demo-chips-bar').hidden = false;
  document.getElementById('demo-owner-pill').hidden = false;
  resetDemoBtn.hidden = false;
}

function switchTab(tabName) {
  document.querySelectorAll('[data-tab]').forEach((btn) => {
    const active = btn.dataset.tab === tabName;
    btn.classList.toggle('is-active', active);
    if (active) btn.setAttribute('aria-current', 'page');
    else btn.removeAttribute('aria-current');
  });

  Object.entries(tabPanels).forEach(([name, panel]) => {
    if (panel) panel.hidden = name !== tabName;
  });

  if (tabName === 'discounts') {
    codeInput.focus();
  }
}

async function refreshDashboardData() {
  const summary = await getDashboardSummary();

  lastWheelEnabled = Boolean(summary.settings.wheelEnabled);
  wheelLivePill.textContent = lastWheelEnabled
    ? 'گردونه فعال است'
    : 'گردونه فعلاً خاموش است';
  wheelLivePill.className = `wheel-pill ${
    lastWheelEnabled ? 'wheel-pill--on' : 'wheel-pill--off'
  }`;
  updateNetworkStatus();

  todayCountPill.textContent = `${toPersianDigits(summary.todayCount)} مورد`;
  if (!summary.recentLog.length) {
    logList.innerHTML = `<div class="log-empty">هنوز کد تخفیفی امروز ثبت نشده است.</div>`;
  } else {
    logList.innerHTML = summary.recentLog
      .map(
        (item) => `
        <div class="log-row">
          <div class="log-row-main">
            <span class="log-discount">${toPersianDigits(item.percent)}٪</span>
            <span class="log-code">${item.code}</span>
          </div>
          <span class="log-time">ثبت‌شده در ${formatTimeFa(item.redeemedAt)}</span>
        </div>`
      )
      .join('');
  }

  kpiToday.textContent = toPersianDigits(summary.todayCount);
  kpiTotal.textContent = toPersianDigits(summary.totalCount);
  toggleWheel.checked = summary.settings.wheelEnabled;

  stockBars.innerHTML = [5, 10, 20, 30]
    .map((pct) => {
      const cap = summary.caps[pct] || summary.caps[String(pct)] || { max: 0, issued: 0 };
      const remaining = Math.max(0, cap.max - cap.issued);
      const fillPct = cap.max > 0 ? Math.min(100, Math.round((remaining / cap.max) * 100)) : 0;
      return `
        <div class="stock-item">
          <div class="stock-meta">
            <div>
              <span>تخفیف ${toPersianDigits(pct)}٪</span>
              <span class="stock-sub"> · ${toPersianDigits(remaining)} باقی‌مانده (${toPersianDigits(cap.issued)} صادرشده)</span>
            </div>
            <label class="stock-cap-editor">
              <span>سقف:</span>
              <input
                type="number"
                class="cap-input"
                name="cap-${pct}"
                data-cap-pct="${pct}"
                min="0"
                max="500"
                step="1"
                value="${cap.max}"
                dir="ltr"
                aria-label="سقف تعداد تخفیف ${pct} درصد"
              />
            </label>
          </div>
          <div class="stock-track">
            <div class="stock-fill" style="width: ${fillPct}%"></div>
          </div>
        </div>`;
    })
    .join('');
}

function resetCodeField() {
  verifyForm.reset();
  codeInput.classList.remove('user-invalid-fallback');
  setTimeout(() => syncFieldAria(codeInput), 0);
  clearInputBtn.hidden = true;
}

function clearResult() {
  activePendingCode = null;
  resultPanel.hidden = true;
  resultPanel.innerHTML = '';
  resultPanel.className = 'result-panel';
}

function renderValidResult(res) {
  activePendingCode = res.code;
  resultPanel.hidden = false;
  resultPanel.className = 'result-panel result-panel--valid';
  resultPanel.innerHTML = `
    <span class="result-badge">✅ کد معتبر است</span>
    <div class="result-big-value">${toPersianDigits(res.percent)}٪ تخفیف</div>
    <div class="result-code-tag">${res.code}</div>
    <p class="result-detail">${formatRemainingDays(res.expiresAt)} · یک‌بار مصرف</p>
    <div class="result-actions">
      <button type="button" id="confirm-redeem-btn" class="btn btn-success btn-xl">
        ✅ تایید و ثبت مصرف کد
      </button>
      <button type="button" id="cancel-result-btn" class="btn btn-ghost btn-sm">
        انصراف
      </button>
    </div>
  `;
  announce(`کد ${res.code} معتبر است. ${res.percent} درصد تخفیف.`);

  const confirmBtn = document.getElementById('confirm-redeem-btn');
  const cancelBtn = document.getElementById('cancel-result-btn');
  confirmBtn.focus();

  confirmBtn.addEventListener('click', async () => {
    confirmBtn.disabled = true;
    const redeemed = await redeemDiscountCode(res.code);
    if (!redeemed.ok) {
      renderErrorResult({ reason: 'used', code: res.code });
      return;
    }
    await refreshDashboardData();
    renderRedeemedSuccess(redeemed);
  });

  cancelBtn.addEventListener('click', () => {
    clearResult();
    codeInput.focus();
    codeInput.select();
  });
}

function renderRedeemedSuccess(res) {
  activePendingCode = null;
  resetCodeField();
  resultPanel.hidden = false;
  resultPanel.className = 'result-panel result-panel--redeemed';
  resultPanel.innerHTML = `
    <span class="result-badge">🎉 با موفقیت ثبت شد</span>
    <div class="result-big-value">تخفیف ${toPersianDigits(res.percent)}٪ اعمال شد</div>
    <div class="result-code-tag">${res.code}</div>
    <p class="result-detail">این کد مصرف شد و دیگر قابل استفاده مجدد نیست.</p>
    <div class="result-actions">
      <button type="button" id="next-code-btn" class="btn btn-primary btn-lg">
        بررسی کد مشتری بعدی
      </button>
    </div>
  `;
  announce(`کد ${res.code} با موفقیت ثبت و مصرف شد.`);
  document.getElementById('next-code-btn').addEventListener('click', () => {
    clearResult();
    codeInput.focus();
  });
}

function renderErrorResult(res) {
  activePendingCode = null;
  let badge = '❌ کد نامعتبر';
  let headline = 'کد اشتباه است';
  let detail = 'این کد در سیستم وجود ندارد. لطفاً کد مشتری را دوباره چک کنید.';

  if (res.reason === 'used') {
    badge = '⛔ قبلاً استفاده شده';
    headline = 'این کد مصرف شده است';
    detail = res.redeemedAt
      ? `تخفیف ${toPersianDigits(res.percent)}٪ قبلاً در ساعت ${formatTimeFa(res.redeemedAt)} ثبت شده است.`
      : 'این کد قبلاً استفاده شده و دیگر معتبر نیست.';
  } else if (res.reason === 'expired') {
    badge = '⏰ منقضی شده';
    headline = 'مهلت این کد تمام شده';
    detail = 'کدهای گردونه تا ۳ روز پس از دریافت اعتبار دارند.';
  }

  resultPanel.hidden = false;
  resultPanel.className = 'result-panel result-panel--error';
  resultPanel.innerHTML = `
    <span class="result-badge">${badge}</span>
    <div class="result-big-value">${headline}</div>
    <div class="result-code-tag">${res.code}</div>
    <p class="result-detail">${detail}</p>
    <div class="result-actions">
      <button type="button" id="retry-code-btn" class="btn btn-ghost btn-lg">
        بررسی کد جدید
      </button>
    </div>
  `;
  announce(`${headline}. ${detail}`);
  document.getElementById('retry-code-btn').addEventListener('click', () => {
    clearResult();
    resetCodeField();
    codeInput.focus();
  });
}

// =========================================================
// SCREEN ROUTING
// =========================================================
async function showApp() {
  authScreen.hidden = true;
  appShell.hidden = false;
  switchTab('discounts');
  await refreshDashboardData();
  codeInput.focus();
}

function showAuth() {
  appShell.hidden = true;
  authScreen.hidden = false;
  authServerError.hidden = true;
  authForm.reset();
  cashierPinInput.classList.remove('user-invalid-fallback');
  setTimeout(() => syncFieldAria(cashierPinInput), 0);
  cashierPinInput.focus();
}

function goHome() {
  switchTab('discounts');
  clearResult();
  codeInput.focus();
}

function updateNetworkStatus() {
  const online = navigator.onLine !== false;
  sidebarStatusDot?.classList.toggle('is-offline', !online);
  topModeDot?.classList.toggle('is-offline', !online || !lastWheelEnabled);
  if (sidebarStatusText) {
    sidebarStatusText.textContent = online ? 'صندوق آنلاین' : 'آفلاین (بدون اینترنت)';
  }
  if (modeBannerText) {
    if (!online) {
      modeBannerText.innerHTML = 'اتصال اینترنت قطع است · <strong>لطفاً وای‌فای صندوق را بررسی کنید</strong>';
    } else if (lastWheelEnabled) {
      modeBannerText.innerHTML = 'وضعیت سیستم: <strong>فقط بخش «کد تخفیف» فعال است</strong> · فروش آنلاین خاموش';
    } else {
      modeBannerText.innerHTML = 'وضعیت سیستم: <strong>تخفیف و فروش آنلاین فعلاً خاموش است</strong> · آماده فعال‌سازی از مدیریت';
    }
  }
}

window.addEventListener('online', updateNetworkStatus);
window.addEventListener('offline', updateNetworkStatus);

brandHomeBtn?.addEventListener('click', goHome);
mobileBrandHomeBtn?.addEventListener('click', goHome);

// Escape dismisses open result card cleanly (when no modal dialog is open)
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !ownerModal.open && !installModal.open && !resultPanel.hidden) {
    clearResult();
    codeInput.focus();
  }
});

// Clear PIN server error immediately on typing & auto-normalize Persian digits
cashierPinInput.addEventListener('input', () => {
  cashierPinInput.value = toEnglishDigits(cashierPinInput.value).replace(/\D/g, '').slice(0, 4);
  authServerError.hidden = true;
});

ownerPinInput.addEventListener('input', () => {
  ownerPinInput.value = toEnglishDigits(ownerPinInput.value).replace(/\D/g, '').slice(0, 4);
  ownerPinServerError.hidden = true;
});

// =========================================================
// EVENT LISTENERS
// =========================================================
authForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  authServerError.hidden = true;
  const normalizedPin = toEnglishDigits(cashierPinInput.value).replace(/\D/g, '');
  cashierPinInput.value = normalizedPin;

  if (!authForm.checkValidity()) {
    cashierPinInput.classList.add('user-invalid-fallback');
    syncFieldAria(cashierPinInput);
    cashierPinInput.focus();
    return;
  }

  const res = await authenticateCashier(normalizedPin);
  if (!res.ok) {
    authServerError.textContent = res.error;
    authServerError.hidden = false;
    cashierPinInput.select();
    return;
  }
  await showApp();
});

codeInput.addEventListener('input', () => {
  const formatted = formatCodeInput(codeInput.value);
  codeInput.value = formatted;
  clearInputBtn.hidden = formatted.length === 0;
  if (activePendingCode && formatted !== activePendingCode) {
    clearResult();
  }
});

clearInputBtn.addEventListener('click', () => {
  resetCodeField();
  clearResult();
  codeInput.focus();
});

verifyForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formatted = formatCodeInput(codeInput.value);
  codeInput.value = formatted;
  clearInputBtn.hidden = formatted.length === 0;

  if (!verifyForm.checkValidity()) {
    codeInput.classList.add('user-invalid-fallback');
    syncFieldAria(codeInput);
    codeInput.focus();
    return;
  }

  const res = await checkDiscountCode(formatted);
  if (res.ok) renderValidResult(res);
  else renderErrorResult(res);
});

document.querySelectorAll('[data-demo-code]').forEach((chip) => {
  chip.addEventListener('click', () => {
    const code = chip.dataset.demoCode;
    codeInput.value = code;
    clearInputBtn.hidden = false;
    verifyForm.requestSubmit();
  });
});

document.querySelectorAll('[data-tab]').forEach((btn) => {
  btn.addEventListener('click', () => switchTab(btn.dataset.tab));
});

document.querySelectorAll('.back-to-discounts-btn').forEach((btn) => {
  btn.addEventListener('click', () => switchTab('discounts'));
});

function openOwnerModal() {
  ownerPinGate.hidden = false;
  ownerDashboard.hidden = true;
  ownerPinServerError.hidden = true;
  if (capsSaveStatus) capsSaveStatus.hidden = true;
  ownerPinForm.reset();
  ownerPinInput.classList.remove('user-invalid-fallback');
  setTimeout(() => syncFieldAria(ownerPinInput), 0);
  ownerModal.showModal();
  ownerPinInput.focus();
}

openOwnerBtn.addEventListener('click', openOwnerModal);
openOwnerMobileBtn.addEventListener('click', openOwnerModal);

ownerModal.addEventListener('close', () => {
  ownerModal.returnValue = '';
});

ownerPinForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  ownerPinServerError.hidden = true;
  const normalizedPin = toEnglishDigits(ownerPinInput.value).replace(/\D/g, '');
  ownerPinInput.value = normalizedPin;

  if (!ownerPinForm.checkValidity()) {
    ownerPinInput.classList.add('user-invalid-fallback');
    syncFieldAria(ownerPinInput);
    ownerPinInput.focus();
    return;
  }

  const res = await authenticateOwner(normalizedPin);
  if (!res.ok) {
    ownerPinServerError.textContent = res.error;
    ownerPinServerError.hidden = false;
    ownerPinInput.select();
    return;
  }

  await refreshDashboardData();
  switchOwnerSubTab('analytics');
  ownerPinGate.hidden = true;
  ownerDashboard.hidden = false;
  refreshOwnerMetrics();
});

function switchOwnerSubTab(tabName) {
  document.querySelectorAll('[data-owner-tab]').forEach((btn) => {
    const active = btn.dataset.ownerTab === tabName;
    btn.classList.toggle('is-active', active);
    btn.setAttribute('aria-selected', active ? 'true' : 'false');
  });
  if (ownerTabAnalytics) ownerTabAnalytics.hidden = tabName !== 'analytics';
  if (ownerTabControls) ownerTabControls.hidden = tabName !== 'controls';
}

document.querySelectorAll('[data-owner-tab]').forEach((btn) => {
  btn.addEventListener('click', () => {
    switchOwnerSubTab(btn.dataset.ownerTab);
    if (btn.dataset.ownerTab === 'analytics') refreshOwnerMetrics();
  });
});

async function refreshOwnerMetrics() {
  if (!chart7Days) return;
  if (refreshMetricsBtn) refreshMetricsBtn.disabled = true;
  const res = await getOwnerMetrics();
  if (refreshMetricsBtn) refreshMetricsBtn.disabled = false;

  if (!res || !res.ok) {
    chart7Days.innerHTML = `<div class="metrics-empty" style="grid-column:1/-1">امکان دریافت آمار نبود.</div>`;
    return;
  }

  mVisitsToday.textContent = toPersianDigits(res.today?.visits || 0);
  mVisitsTotal.textContent = toPersianDigits(res.totals?.visits || 0);
  mCallsTotal.textContent = toPersianDigits(res.totals?.calls || 0);
  mSnappTotal.textContent = toPersianDigits(res.totals?.snappfood || 0);
  mItemsTotal.textContent = `${toPersianDigits(res.totals?.itemViews || 0)} مشاهده`;

  // 7-day vertical bars
  const days = res.last7Days || [];
  const maxDay = Math.max(1, ...days.map((d) => d.visits || 0));
  chart7Days.innerHTML = days
    .map((d) => {
      const pct = Math.max(5, Math.round(((d.visits || 0) / maxDay) * 100));
      return `
        <div class="bar-col">
          <span class="bar-val">${toPersianDigits(d.visits || 0)}</span>
          <div class="bar-stick" style="height: ${pct}%"></div>
          <span class="bar-date">${d.label}</span>
        </div>`;
    })
    .join('');

  // Peak hours (11:00 to 23:00 Tehran)
  const hourly = Array.isArray(res.hourly) ? res.hourly : Array(24).fill(0);
  const openSlice = [];
  for (let h = 11; h <= 23; h++) openSlice.push({ h, v: hourly[h] || 0 });
  const maxH = Math.max(1, ...openSlice.map((x) => x.v));
  chartHours.innerHTML = openSlice
    .map(({ h, v }) => {
      const pct = Math.max(6, Math.round((v / maxH) * 100));
      return `
        <div class="hour-col" title="ساعت ${toPersianDigits(h)}: ${toPersianDigits(v)} بازدید">
          <div class="hour-bar" style="height: ${pct}%"></div>
          <span class="hour-label">${toPersianDigits(h)}</span>
        </div>`;
    })
    .join('');

  // Top viewed dishes
  const top = res.topItems || [];
  if (!top.length) {
    chartTopItems.innerHTML = `<div class="metrics-empty">هنوز بازدیدی ثبت نشده — به‌محض مرور منو توسط مشتریان، پرطرفدارترین غذاها اینجا نمایش داده می‌شوند.</div>`;
  } else {
    const maxItem = Math.max(1, top[0].count || 1);
    chartTopItems.innerHTML = top
      .map((item) => {
        const pct = Math.max(8, Math.round((item.count / maxItem) * 100));
        return `
          <div class="top-item-row">
            <div class="top-item-meta">
              <span>${item.name}</span>
              <span>${toPersianDigits(item.count)} بار</span>
            </div>
            <div class="top-item-track">
              <div class="top-item-fill" style="width: ${pct}%"></div>
            </div>
          </div>`;
      })
      .join('');
  }
}

refreshMetricsBtn?.addEventListener('click', refreshOwnerMetrics);

toggleWheel.addEventListener('change', async () => {
  await updateSettings({ wheelEnabled: toggleWheel.checked });
  await refreshDashboardData();
});

capsForm?.addEventListener('submit', async (e) => {
  e.preventDefault();
  capsSaveStatus.hidden = true;
  capsSaveStatus.classList.remove('is-error');
  saveCapsBtn.disabled = true;

  const caps = {};
  capsForm.querySelectorAll('[data-cap-pct]').forEach((input) => {
    const pct = input.dataset.capPct;
    const val = Math.max(0, Math.min(500, Math.floor(Number(toEnglishDigits(input.value)) || 0)));
    caps[pct] = val;
  });

  try {
    const res = await updateSettings({ caps });
    if (res && res.ok === false) {
      capsSaveStatus.textContent = res.error || 'خطا در ذخیره سقف جوایز.';
      capsSaveStatus.classList.add('is-error');
      capsSaveStatus.hidden = false;
    } else {
      await refreshDashboardData();
      capsSaveStatus.textContent = '✅ سقف جوایز ذخیره شد (کدهای قبلی بدون تغییر حفظ شدند).';
      capsSaveStatus.hidden = false;
    }
  } catch {
    capsSaveStatus.textContent = 'خطا در ارتباط با سرور.';
    capsSaveStatus.classList.add('is-error');
    capsSaveStatus.hidden = false;
  } finally {
    saveCapsBtn.disabled = false;
  }
});

resetDemoBtn.addEventListener('click', async () => {
  resetDemoData();
  resetCodeField();
  clearResult();
  await refreshDashboardData();
  ownerModal.close();
});

logoutDeviceBtn.addEventListener('click', () => {
  logoutDevice();
  ownerModal.close();
  clearResult();
  showAuth();
});

// =========================================================
// BOOTSTRAP & PWA REGISTRATION
// =========================================================
initAccessibleValidation();
initDialogClosedByFallback();
applyDemoIndicators();
updateInstalledState();
updateNetworkStatus();

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').catch(() => {});
}

if (isDeviceAuthenticated()) {
  showApp();
} else {
  showAuth();
}
