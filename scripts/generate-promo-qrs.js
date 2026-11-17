import QRCode from 'qrcode';
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ATISH_OFFER_SALT = process.env.ATISH_OFFER_SALT || 'ATISH_GRILL_SECRET_2026';
const DOMAIN = process.env.VOUCHER_DOMAIN || 'https://pizzaatish.ir';

function computeChecksum9(payload) {
  let h = 0x811c9dc5;
  const str = `${payload.toUpperCase()}_${ATISH_OFFER_SALT}`;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return String(Math.abs(h) % 1000).padStart(3, '0');
}

function makeVoucher(seriesLetter, seriesNum) {
  const letter = seriesLetter || 'A';
  const block1 = `${letter}01`;
  const block2 = String(seriesNum).padStart(3, '0');
  const payload = `${block1}${block2}`;
  const checksum = computeChecksum9(payload);
  const code = `${block1}-${block2}-${checksum}`;
  const url = `${DOMAIN}/?gift=${code}`;
  return { payload, checksum, code, url };
}

async function main() {
  const count = 10; // 10 slips per A4 sheet
  const startId = 101;
  const vouchers = [];

  console.log(`Generating ${count} 9-character VIP promo vouchers (XXX-XXX-XXX) for ${DOMAIN}...`);

  for (let i = 0; i < count; i++) {
    const v = makeVoucher('A', startId + i);
    // Generate QR code SVG with high error correction (H) so center icon does not corrupt data
    const qrSvg = await QRCode.toString(v.url, {
      type: 'svg',
      errorCorrectionLevel: 'H',
      margin: 1,
      color: {
        dark: '#000000',
        light: '#ffffff'
      }
    });

    // Embed glowing % badge in the center of SVG
    // Injecting SVG center badge:
    const percentBadge = `
      <g>
        <circle cx="50%" cy="50%" r="14%" fill="#ffffff" stroke="#000000" stroke-width="2"/>
        <circle cx="50%" cy="50%" r="11%" fill="#000000"/>
        <text x="50%" y="54%" font-family="Arial, sans-serif" font-weight="900" font-size="16" fill="#ffffff" text-anchor="middle" dominant-baseline="middle">٪</text>
      </g>
    </svg>`;
    const modifiedSvg = qrSvg.replace('</svg>', percentBadge);

    const sha256 = crypto.createHash('sha256').update(v.code).digest('hex');

    vouchers.push({
      ...v,
      sha256,
      qrSvg: modifiedSvg
    });
    console.log(`✓ [${i + 1}/${count}] Code: ${v.code} (SHA256: ${sha256.slice(0, 10)}...) -> ${v.url}`);
  }

  // Save secure SHA-256 hashes to src/data/voucher-hashes.json
  const dataDir = path.resolve(__dirname, '../src/data');
  if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
  const hashFile = path.join(dataDir, 'voucher-hashes.json');
  
  // Merge with existing hashes if present
  let existingHashes = [];
  if (fs.existsSync(hashFile)) {
    try {
      existingHashes = JSON.parse(fs.readFileSync(hashFile, 'utf8'));
    } catch (e) {}
  }
  const newHashes = vouchers.map(v => v.sha256);
  const allHashes = Array.from(new Set([...existingHashes, ...newHashes]));
  fs.writeFileSync(hashFile, JSON.stringify(allHashes, null, 2), 'utf8');
  console.log(`\n🔒 Saved ${allHashes.length} secure SHA-256 voucher hashes to: ${hashFile}`);

  // Create printable A4 HTML template (2 columns x 5 rows = 10 slips per page)
  const html = `<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
  <meta charset="UTF-8" />
  <title>برگه چاپ بن‌های تخفیف ۲۰٪ آتیش (A4 Printable)</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;700;900&display=swap" rel="stylesheet" />
  <style>
    @page {
      size: A4 portrait;
      margin: 10mm;
    }
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: 'Vazirmatn', -apple-system, BlinkMacSystemFont, sans-serif;
    }
    body {
      background: #f4f4f5;
      padding: 20px;
      color: #18181b;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
    .page {
      width: 190mm;
      min-height: 277mm;
      margin: 0 auto;
      background: #ffffff;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: repeat(5, 52mm);
      gap: 5mm;
      padding: 5mm;
    }
    .slip {
      border: 1.5px dashed #27272a;
      border-radius: 8mm;
      padding: 3.5mm 4mm;
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
      justify-content: space-between;
      gap: 3mm;
      background: #ffffff;
      position: relative;
      overflow: hidden;
    }
    .slip-qr {
      width: 40mm;
      height: 40mm;
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .slip-qr svg {
      width: 100%;
      height: 100%;
    }
    .slip-info {
      flex: 1;
      text-align: right;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .slip-badge {
      display: inline-block;
      background: #000000;
      color: #ffffff;
      font-weight: 900;
      font-size: 7.5pt;
      padding: 1mm 2.5mm;
      border-radius: 3mm;
      margin-bottom: 1.5mm;
      align-self: flex-start;
    }
    .slip-title {
      font-weight: 900;
      font-size: 11pt;
      line-height: 1.2;
      color: #09090b;
      margin-bottom: 1mm;
    }
    .slip-subtitle {
      font-weight: 700;
      font-size: 8.5pt;
      color: #dc2626;
      margin-bottom: 1.5mm;
    }
    .slip-desc {
      font-size: 6.8pt;
      color: #52525b;
      line-height: 1.35;
      margin-bottom: 1.5mm;
    }
    .slip-scan-hint {
      font-size: 6.5pt;
      font-weight: 700;
      color: #18181b;
      background: #f4f4f5;
      padding: 1mm 2mm;
      border-radius: 2mm;
      border: 1px solid #e4e4e7;
    }
    .no-print {
      max-width: 190mm;
      margin: 0 auto 15px auto;
      background: #18181b;
      color: #ffffff;
      padding: 15px 20px;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .print-btn {
      background: #f59e0b;
      color: #000000;
      border: none;
      padding: 10px 20px;
      border-radius: 8px;
      font-weight: 900;
      font-size: 10pt;
      cursor: pointer;
    }
    @media print {
      body {
        background: none;
        padding: 0;
      }
      .no-print {
        display: none;
      }
      .page {
        padding: 0;
        gap: 4mm;
      }
    }
  </style>
</head>
<body>

  <div class="no-print">
    <div>
      <h2 style="font-size: 14pt; margin-bottom: 4px;">برگه ۱۰ عددی چاپ کوپن غافلگیری آتیش (A4)</h2>
      <p style="font-size: 9pt; color: #a1a1aa;">هر هفته یک برگه چاپ کنید و با قیچی از روی خط‌چین برش بزنید (روزی یک عدد داخل بسته سفارش برتر).</p>
    </div>
    <button class="print-btn" onclick="window.print()">🖨️ چاپ با پرینتر (Print)</button>
  </div>

  <div class="page">
    ${vouchers.map(v => `
      <div class="slip">
        <div class="slip-qr">
          ${v.qrSvg}
        </div>
        <div class="slip-info">
          <span class="slip-badge">سفارش منتخب آتیش</span>
          <h3 class="slip-title">هدیه ویژه سرآشپز</h3>
          <div class="slip-subtitle">🔥 ۲۰٪ تخفیف اختصاصی سفارش بعدی</div>
          <p class="slip-desc">این برگه صرفاً برای سفارش‌های منتخب قرار داده شده است. با دوربین گوشی اسکن نمایید تا کد تخفیف ۴۸ ساعته شما فعال گردد.</p>
          <div class="slip-scan-hint">📷 با دوربین موبایل اسکن کنید</div>
        </div>
      </div>
    `).join('')}
  </div>

</body>
</html>`;

  const outDir = path.resolve(__dirname, '../public/print-assets');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  const outFile = path.join(outDir, 'vip-slips-a4.html');
  fs.writeFileSync(outFile, html, 'utf8');
  console.log(`\n🎉 Success! Printable A4 sheet generated at: ${outFile}`);
  console.log(`Open in browser: http://localhost:3000/print-assets/vip-slips-a4.html`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
