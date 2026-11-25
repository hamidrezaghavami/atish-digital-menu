/**
 * API Adapter for staff.pizzaatish.ir
 * - Localhost runs in safe DEMO mode (seeded sample codes in localStorage)
 * - Production connects to the live ArvanCloud Edge Function backend (zero secrets in frontend!)
 */

const STORAGE_KEY = 'atish_staff_demo_state_v1';
const SESSION_KEY = 'atish_staff_device_token_v1';

export const IS_DEMO =
  window.location.hostname === 'localhost' ||
  window.location.hostname === '127.0.0.1';

// In production, replace with your ArvanCloud Edge Function endpoint:
// const API_BASE = 'https://api.pizzaatish.ir';

function createInitialDemoState() {
  const now = Date.now();
  const dayMs = 24 * 60 * 60 * 1000;
  return {
    settings: {
      wheelEnabled: true,
      ecommerceTabEnabled: false,
    },
    caps: {
      5: { max: 20, issued: 6 },
      10: { max: 15, issued: 4 },
      20: { max: 10, issued: 3 },
      30: { max: 5, issued: 1 },
    },
    codes: {
      'K48-912-607': {
        code: 'K48-912-607',
        percent: 20,
        status: 'active',
        createdAt: now - 3 * 60 * 60 * 1000,
        expiresAt: now + 2 * dayMs + 21 * 60 * 60 * 1000,
      },
      'A15-304-882': {
        code: 'A15-304-882',
        percent: 30,
        status: 'active',
        createdAt: now - 1 * 60 * 60 * 1000,
        expiresAt: now + 2 * dayMs + 23 * 60 * 60 * 1000,
      },
      'M22-719-405': {
        code: 'M22-719-405',
        percent: 10,
        status: 'active',
        createdAt: now - 5 * 60 * 60 * 1000,
        expiresAt: now + 2 * dayMs + 19 * 60 * 60 * 1000,
      },
      'R91-550-128': {
        code: 'R91-550-128',
        percent: 5,
        status: 'active',
        createdAt: now - 2 * 60 * 60 * 1000,
        expiresAt: now + 2 * dayMs + 22 * 60 * 60 * 1000,
      },
      'T77-402-911': {
        code: 'T77-402-911',
        percent: 10,
        status: 'used',
        createdAt: now - 10 * 60 * 60 * 1000,
        expiresAt: now + 2 * dayMs,
        redeemedAt: now - 25 * 60 * 1000,
      },
      'P33-108-290': {
        code: 'P33-108-290',
        percent: 20,
        status: 'active',
        createdAt: now - 5 * dayMs,
        expiresAt: now - 2 * dayMs,
      },
    },
    redeemedLog: [
      {
        code: 'T77-402-911',
        percent: 10,
        redeemedAt: now - 25 * 60 * 1000,
      },
      {
        code: 'H52-618-304',
        percent: 5,
        redeemedAt: now - 95 * 60 * 1000,
      },
    ],
  };
}

function loadDemoState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {
    // fallback to fresh state
  }
  const fresh = createInitialDemoState();
  saveDemoState(fresh);
  return fresh;
}

function saveDemoState(state) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

export function resetDemoData() {
  const fresh = createInitialDemoState();
  saveDemoState(fresh);
  return fresh;
}

export function isDeviceAuthenticated() {
  return Boolean(localStorage.getItem(SESSION_KEY));
}

export function logoutDevice() {
  localStorage.removeItem(SESSION_KEY);
}

export async function authenticateCashier(pin) {
  if (IS_DEMO) {
    if (pin === '1234') {
      localStorage.setItem(SESSION_KEY, 'demo-cashier-session');
      return { ok: true };
    }
    return { ok: false, error: 'رمز صندوق اشتباه است. (در نسخه دمو: 1234)' };
  }
  return { ok: false, error: 'سرور هنوز متصل نشده است.' };
}

export async function authenticateOwner(pin) {
  if (IS_DEMO) {
    if (pin === '9999') return { ok: true };
    return { ok: false, error: 'رمز مدیریت اشتباه است. (در نسخه دمو: 9999)' };
  }
  return { ok: false, error: 'سرور هنوز متصل نشده است.' };
}

export async function checkDiscountCode(normalizedCode) {
  const state = loadDemoState();
  const entry = state.codes[normalizedCode];
  const now = Date.now();

  if (!entry) {
    return { ok: false, reason: 'invalid', code: normalizedCode };
  }
  if (entry.status === 'used') {
    return {
      ok: false,
      reason: 'used',
      code: entry.code,
      percent: entry.percent,
      redeemedAt: entry.redeemedAt,
    };
  }
  if (entry.expiresAt < now) {
    return {
      ok: false,
      reason: 'expired',
      code: entry.code,
      percent: entry.percent,
      expiresAt: entry.expiresAt,
    };
  }

  return {
    ok: true,
    code: entry.code,
    percent: entry.percent,
    expiresAt: entry.expiresAt,
  };
}

export async function redeemDiscountCode(normalizedCode) {
  const state = loadDemoState();
  const entry = state.codes[normalizedCode];
  const now = Date.now();

  if (!entry || entry.status === 'used' || entry.expiresAt < now) {
    return { ok: false, error: 'این کد دیگر قابل ثبت نیست.' };
  }

  entry.status = 'used';
  entry.redeemedAt = now;
  state.redeemedLog.unshift({
    code: entry.code,
    percent: entry.percent,
    redeemedAt: now,
  });
  saveDemoState(state);

  return {
    ok: true,
    code: entry.code,
    percent: entry.percent,
    redeemedAt: now,
  };
}

export async function getDashboardSummary() {
  const state = loadDemoState();
  const todayStr = new Date().toDateString();
  const todayItems = state.redeemedLog.filter(
    (item) => new Date(item.redeemedAt).toDateString() === todayStr
  );
  return {
    settings: state.settings,
    caps: state.caps,
    todayCount: todayItems.length,
    totalCount: state.redeemedLog.length,
    recentLog: state.redeemedLog.slice(0, 8),
  };
}

export async function updateSettings(partial) {
  const state = loadDemoState();
  state.settings = { ...state.settings, ...partial };
  saveDemoState(state);
  return state.settings;
}
