import fs from 'fs';
import path from 'path';
import QRCode from 'qrcode';
import sharp from 'sharp';

const targetUrl = 'https://pizzaatish.s3-website.ir-central1.arvanstorage.ir';
const outDir = path.resolve('public/print-assets');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

async function run() {
  console.log('Generating QR codes for:', targetUrl);

  // 1. Generate standalone high-res QR Code (PNG & SVG) with High error correction
  const qrPngBuffer = await QRCode.toBuffer(targetUrl, {
    errorCorrectionLevel: 'H',
    type: 'png',
    margin: 2,
    scale: 12,
    color: {
      dark: '#111827',
      light: '#ffffff'
    }
  });
  fs.writeFileSync(path.join(outDir, 'qr-code-standalone.png'), qrPngBuffer);

  const qrSvgString = await QRCode.toString(targetUrl, {
    errorCorrectionLevel: 'H',
    type: 'svg',
    margin: 2,
    color: {
      dark: '#111827',
      light: '#ffffff'
    }
  });
  fs.writeFileSync(path.join(outDir, 'qr-code-standalone.svg'), qrSvgString);
  console.log('✓ Saved standalone QR codes (PNG & SVG)');

  // 2. Generate Minimalist Standalone Table Stand (A6: 1240 x 1748 px @ 300 DPI)
  // Clean, modern, luxury dark aesthetic with crisp typography
  const qrCardBuffer = await sharp(qrPngBuffer)
    .resize(750, 750)
    .toBuffer();

  const standSvg = `
  <svg width="1240" height="1748" viewBox="0 0 1240 1748" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#181518" />
        <stop offset="50%" stop-color="#0e0e10" />
        <stop offset="100%" stop-color="#141113" />
      </linearGradient>
      <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#f59e0b" />
        <stop offset="100%" stop-color="#ea580c" />
      </linearGradient>
      <filter id="cardShadow" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="0" dy="16" stdDeviation="24" flood-color="#000" flood-opacity="0.6" />
        <feDropShadow dx="0" dy="0" stdDeviation="12" flood-color="#f59e0b" flood-opacity="0.15" />
      </filter>
    </defs>

    <!-- Background -->
    <rect width="1240" height="1748" fill="url(#bgGrad)" />

    <!-- Subtle Border Accent -->
    <rect x="40" y="40" width="1160" height="1668" rx="36" fill="none" stroke="rgba(245,158,11,0.25)" stroke-width="2" />
    <rect x="48" y="48" width="1144" height="1652" rx="28" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="1" />

    <!-- Top Badge / Flame -->
    <g transform="translate(620, 160)">
      <circle cx="0" cy="0" r="48" fill="#231d1d" stroke="#f59e0b" stroke-width="2" />
      <text x="0" y="16" font-family="'Vazirmatn', sans-serif" font-size="44" text-anchor="middle" fill="#f59e0b">🔥</text>
    </g>

    <!-- Restaurant Name -->
    <text x="620" y="295" font-family="'Vazirmatn', sans-serif" font-weight="900" font-size="62" text-anchor="middle" fill="#ffffff" letter-spacing="1">
      فست‌فود و گریل آتیش
    </text>

    <!-- Subtitle -->
    <text x="620" y="365" font-family="'Vazirmatn', sans-serif" font-weight="700" font-size="32" text-anchor="middle" fill="url(#goldGrad)">
      منوی دیجیتال و سفارش روی میز
    </text>

    <!-- Instruction Badge -->
    <g transform="translate(620, 440)">
      <rect x="-260" y="-24" width="520" height="48" rx="24" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.12)" stroke-width="1" />
      <text x="0" y="10" font-family="'Vazirmatn', sans-serif" font-weight="500" font-size="22" text-anchor="middle" fill="#d1d5db">
        دوربین گوشی را روی بارکد بگیرید
      </text>
    </g>

    <!-- White Card Background for QR Code (High Scannability) -->
    <rect x="180" y="520" width="880" height="880" rx="44" fill="#ffffff" filter="url(#cardShadow)" />

    <!-- Inner subtle corner frames on QR card -->
    <rect x="210" y="550" width="820" height="820" rx="24" fill="none" stroke="#f3f4f6" stroke-width="2" />

    <!-- Bottom Action Details -->
    <text x="620" y="1480" font-family="'Vazirmatn', sans-serif" font-weight="700" font-size="28" text-anchor="middle" fill="#f3f4f6">
      پیتزا ناپلی و آمریکایی · برگر دست‌ساز · سوخاری
    </text>

    <text x="620" y="1540" font-family="'Vazirmatn', sans-serif" font-weight="600" font-size="24" text-anchor="middle" fill="#a1a1aa">
      سفارش تلفنی و پیک سریع: ۰۲۱-۲۲۵۶۱۹۴۹
    </text>

    <g transform="translate(620, 1610)">
      <rect x="-160" y="-20" width="320" height="40" rx="20" fill="rgba(245,158,11,0.15)" stroke="rgba(245,158,11,0.3)" stroke-width="1" />
      <text x="0" y="8" font-family="'Vazirmatn', sans-serif" font-weight="600" font-size="20" text-anchor="middle" fill="#fbbf24">
        📶 اینترنت وای‌فای رایگان
      </text>
    </g>
  </svg>
  `;

  // Composite QR code on top of the Stand SVG
  await sharp(Buffer.from(standSvg))
    .composite([
      {
        input: qrCardBuffer,
        top: 585,
        left: 245
      }
    ])
    .png()
    .toFile(path.join(outDir, 'table-stand-A6.png'));
  console.log('✓ Generated table-stand-A6.png (1240x1748 @ 300DPI)');

  // 3. Generate Minimalist Round Box Sticker (750 x 750 px)
  const stickerQrBuffer = await sharp(qrPngBuffer)
    .resize(460, 460)
    .toBuffer();

  const stickerSvg = `
  <svg width="750" height="750" viewBox="0 0 750 750" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="stickerBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#1c1618" />
        <stop offset="100%" stop-color="#0a0a0c" />
      </linearGradient>
    </defs>
    <!-- Circle Outer Border -->
    <circle cx="375" cy="375" r="365" fill="url(#stickerBg)" stroke="#f59e0b" stroke-width="6" />
    <circle cx="375" cy="375" r="350" fill="none" stroke="rgba(255,255,255,0.15)" stroke-width="1.5" />

    <!-- Top Text -->
    <text x="375" y="85" font-family="'Vazirmatn', sans-serif" font-weight="900" font-size="34" text-anchor="middle" fill="#ffffff">
      🔥 فست‌فود و گریل آتیش
    </text>
    <text x="375" y="125" font-family="'Vazirmatn', sans-serif" font-weight="600" font-size="20" text-anchor="middle" fill="#f59e0b">
      اسکن کنید و منوی داغ رو ببینید
    </text>

    <!-- White Base for QR -->
    <rect x="125" y="145" width="500" height="500" rx="32" fill="#ffffff" />

    <!-- Bottom Contact -->
    <text x="375" y="695" font-family="'Vazirmatn', sans-serif" font-weight="800" font-size="26" text-anchor="middle" fill="#fbbf24">
      تلفن سفارشات: ۰۲۱-۲۲۵۶۱۹۴۹
    </text>
  </svg>
  `;

  await sharp(Buffer.from(stickerSvg))
    .composite([
      {
        input: stickerQrBuffer,
        top: 165,
        left: 145
      }
    ])
    .png()
    .toFile(path.join(outDir, 'box-sticker-round.png'));
  console.log('✓ Generated box-sticker-round.png (750x750 @ 300DPI)');
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
