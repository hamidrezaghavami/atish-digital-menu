import fs from 'fs';
import path from 'path';
import { execFileSync } from 'child_process';
import QRCode from 'qrcode';
import sharp from 'sharp';

const TARGET_URL = 'https://pizzaatish.ir';
const OUT_DIR = path.resolve('Design');
const LOGO_PATH = path.resolve('public/images/logo.webp');
const BRAVE_BIN = '/Applications/Brave Browser.app/Contents/MacOS/Brave Browser';

if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
}

function renderWithBrave(htmlPath, pdfPath, pngPath, cssWidth, cssHeight) {
  const fileUrl = `file://${htmlPath}`;

  // 1. Exact physical mm Vector Print PDF (for print shops / چاپخانه)
  execFileSync(
    BRAVE_BIN,
    [
      '--headless=new',
      '--disable-gpu',
      '--no-sandbox',
      '--run-all-compositor-stages-before-draw',
      '--virtual-time-budget=4000',
      '--no-pdf-header-footer',
      `--print-to-pdf=${pdfPath}`,
      fileUrl,
    ],
    { stdio: 'pipe' }
  );

  // 2. High-DPI PNG (>300 DPI) — cssWidth >= 560 avoids macOS Chromium min-window-width quirk
  execFileSync(
    BRAVE_BIN,
    [
      '--headless=new',
      '--disable-gpu',
      '--no-sandbox',
      '--hide-scrollbars',
      '--run-all-compositor-stages-before-draw',
      '--virtual-time-budget=4000',
      '--force-device-scale-factor=2',
      `--window-size=${cssWidth},${cssHeight}`,
      `--screenshot=${pngPath}`,
      fileUrl,
    ],
    { stdio: 'pipe' }
  );
}

async function run() {
  console.log('Generating static permanent QR codes for:', TARGET_URL);

  // 1. Standalone high-res QR Code (PNG & SVG) — static permanent link
  const qrPngBuffer = await QRCode.toBuffer(TARGET_URL, {
    errorCorrectionLevel: 'Q',
    type: 'png',
    margin: 2,
    width: 1600,
    color: {
      dark: '#141c2c',
      light: '#ffffff',
    },
  });
  fs.writeFileSync(path.join(OUT_DIR, 'pizzaatish-qr.png'), qrPngBuffer);

  const qrSvgString = await QRCode.toString(TARGET_URL, {
    errorCorrectionLevel: 'Q',
    type: 'svg',
    margin: 0,
    color: {
      dark: '#141c2c',
      light: '#ffffff',
    },
  });
  const qrSvgStandalone = await QRCode.toString(TARGET_URL, {
    errorCorrectionLevel: 'Q',
    type: 'svg',
    margin: 2,
    color: {
      dark: '#141c2c',
      light: '#ffffff',
    },
  });
  fs.writeFileSync(path.join(OUT_DIR, 'pizzaatish-qr.svg'), qrSvgStandalone);
  console.log('✓ Saved standalone QR codes (pizzaatish-qr.png & pizzaatish-qr.svg)');

  // Convert Atish color logo to crisp PNG base64 for embedding
  const logoPngBuffer = await sharp(LOGO_PATH).png().toBuffer();
  const logoDataUri = `data:image/png;base64,${logoPngBuffer.toString('base64')}`;

  // ============================================================
  // DESIGN 1: Die-Cut Rounded Sticker (70mm x 85mm @ 300+ DPI)
  // Screen viewport: 560 x 680 CSS px (exact 70:85 ratio, 2x = 1120x1360 px)
  // ============================================================
  const stickerHtml = `<!DOCTYPE html>
<html lang="fa" dir="ltr">
<head>
  <meta charset="UTF-8" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800;900&family=Vazirmatn:wght@600;700;800;900&display=swap" rel="stylesheet" />
  <style>
    @page {
      size: 70mm 85mm;
      margin: 0;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    html, body {
      width: 100%;
      height: 100%;
      background: #ffffff;
      font-family: 'Vazirmatn', sans-serif;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
      overflow: hidden;
    }
    .canvas {
      width: 100vw;
      height: 100vh;
      padding: 4.8vw;
      background: #ffffff;
      display: flex;
      align-items: stretch;
      justify-content: stretch;
    }
    .sticker-frame {
      flex: 1;
      border: 3.8vw solid #141c2c;
      border-radius: 9vw;
      background: #ffffff;
      padding: 5.5vw 6vw 4.5vw;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
    }
    .header-row {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 3.4vw;
      width: 100%;
    }
    .logo-img {
      width: 14.2vw;
      height: 14.2vw;
      object-fit: contain;
      flex-shrink: 0;
    }
    .brand-title {
      font-family: 'Vazirmatn', sans-serif;
      font-weight: 900;
      font-size: 11.4vw;
      line-height: 1;
      color: #141c2c;
      direction: rtl;
      padding-top: 1vw;
    }
    .qr-wrap {
      width: 71vw;
      height: 71vw;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .qr-wrap svg {
      width: 100%;
      height: 100%;
      display: block;
    }
    .footer-line {
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
      justify-content: center;
      gap: 2.2vw;
      width: 100%;
      padding-top: 0.6vw;
    }
    .footer-fa {
      font-size: 4.1vw;
      font-weight: 800;
      color: #141c2c;
      direction: rtl;
    }
    .footer-dot {
      width: 1.4vw;
      height: 1.4vw;
      border-radius: 50%;
      background: #ea580c;
      display: inline-block;
      flex-shrink: 0;
    }
    .footer-url {
      font-family: 'Montserrat', sans-serif;
      font-size: 3.9vw;
      font-weight: 800;
      letter-spacing: 0.25vw;
      color: #334155;
      direction: ltr;
    }
  </style>
</head>
<body>
  <div class="canvas">
    <div class="sticker-frame">
      <div class="header-row">
        <img class="logo-img" src="${logoDataUri}" alt="Atish Logo" />
        <div class="brand-title">پیتزا آتیش</div>
      </div>

      <div class="qr-wrap">
        ${qrSvgString}
      </div>

      <div class="footer-line">
        <span class="footer-fa">اسکن برای منو</span>
        <span class="footer-dot"></span>
        <span class="footer-url">pizzaatish.ir</span>
      </div>
    </div>
  </div>
</body>
</html>`;

  const stickerHtmlPath = path.join(OUT_DIR, '_tmp-sticker.html');
  const stickerPdfPath = path.join(OUT_DIR, 'sticker-atish-7x8.5cm.pdf');
  const stickerPngPath = path.join(OUT_DIR, 'sticker-atish-7x8.5cm.png');
  fs.writeFileSync(stickerHtmlPath, stickerHtml);

  // Exact 70:85 ratio => 560 x 680 CSS px => @2x = 1120 x 1360 px (>400 DPI at 70x85mm!)
  renderWithBrave(stickerHtmlPath, stickerPdfPath, stickerPngPath, 560, 680);
  fs.unlinkSync(stickerHtmlPath);
  console.log('✓ Generated sticker-atish-7x8.5cm.pdf & .png');

  // ============================================================
  // DESIGN 2: Minimalist Table Stand Card (A6: 105mm x 148mm)
  // Screen viewport: 630 x 888 CSS px (exact 105:148 ratio, 2x = 1260x1776 px)
  // ============================================================
  const tableHtml = `<!DOCTYPE html>
<html lang="fa" dir="ltr">
<head>
  <meta charset="UTF-8" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700;800;900&family=Vazirmatn:wght@500;600;700;800;900&display=swap" rel="stylesheet" />
  <style>
    @page {
      size: 105mm 148mm;
      margin: 0;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    html, body {
      width: 100%;
      height: 100%;
      background: #ffffff;
      font-family: 'Vazirmatn', sans-serif;
      color: #18181b;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
      overflow: hidden;
    }
    .card {
      width: 100vw;
      height: 100vh;
      background: #ffffff;
      padding: 12vw 10vw 11vw;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      text-align: center;
    }
    .top-brand {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 2.2vw;
    }
    .top-logo {
      width: 8.2vw;
      height: 8.2vw;
      object-fit: contain;
    }
    .top-name {
      font-family: 'Montserrat', sans-serif;
      font-weight: 800;
      font-size: 3.9vw;
      letter-spacing: 0.55vw;
      color: #18181b;
      direction: ltr;
    }
    .headline-group {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.4vw;
      margin-top: -1vw;
    }
    .headline {
      font-family: 'Vazirmatn', sans-serif;
      font-weight: 900;
      font-size: 8.4vw;
      line-height: 1.24;
      color: #18181b;
      direction: rtl;
    }
    .headline-accent {
      color: #ea580c;
    }
    .domain-sub {
      font-family: 'Montserrat', sans-serif;
      font-weight: 800;
      font-size: 3.1vw;
      letter-spacing: 0.6vw;
      color: #3f3f46;
      margin-top: 1.8vw;
      direction: ltr;
    }
    .qr-box {
      width: 50vw;
      height: 50vw;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 1vw 0;
    }
    .qr-box svg {
      width: 100%;
      height: 100%;
      display: block;
    }
    .footer-block {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.6vw;
      width: 100%;
      direction: rtl;
    }
    .footer-title {
      font-size: 3.4vw;
      font-weight: 800;
      color: #18181b;
    }
    .footer-meta {
      font-size: 2.75vw;
      font-weight: 600;
      color: #71717a;
      line-height: 1.65;
    }
    .ltr {
      direction: ltr;
      unicode-bidi: isolate;
      display: inline-block;
      color: #3f3f46;
      font-weight: 700;
    }
    .ltr-en {
      direction: ltr;
      unicode-bidi: isolate;
      display: inline-block;
      font-family: 'Montserrat', sans-serif;
      font-weight: 700;
      color: #3f3f46;
    }
  </style>
</head>
<body>
  <div class="card">
    <div class="top-brand">
      <img class="top-logo" src="${logoDataUri}" alt="Atish Logo" />
      <span class="top-name">PIZZA ATISH</span>
    </div>

    <div class="headline-group">
      <div class="headline">
        منوی دیجیتال<br />
        <span class="headline-accent">پیتزا آتیش</span><br />
        اسکن کنید
      </div>
      <div class="domain-sub">PIZZAATISH.IR</div>
    </div>

    <div class="qr-box">
      ${qrSvgString}
    </div>

    <div class="footer-block">
      <div class="footer-title">دوربین گوشی را روی کد بگیرید</div>
      <div class="footer-meta">
        سفارش تلفنی و پیک سریع: <span class="ltr">۰۲۱-۲۲۵۶۱۹۴۹</span><br />
        اینستاگرام: <span class="ltr-en">@atishfood</span>
      </div>
    </div>
  </div>
</body>
</html>`;

  const tableHtmlPath = path.join(OUT_DIR, '_tmp-table-stand.html');
  const tablePdfPath = path.join(OUT_DIR, 'table-stand-A6.pdf');
  const tablePngPath = path.join(OUT_DIR, 'table-stand-A6.png');
  fs.writeFileSync(tableHtmlPath, tableHtml);

  // Exact 105:148 ratio => 630 x 888 CSS px => @2x = 1260 x 1776 px (>300 DPI at A6!)
  renderWithBrave(tableHtmlPath, tablePdfPath, tablePngPath, 630, 888);
  fs.unlinkSync(tableHtmlPath);
  console.log('✓ Generated table-stand-A6.pdf & .png');
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
