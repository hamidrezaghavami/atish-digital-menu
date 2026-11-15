import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const imagesDir = path.resolve('public/images');
const thumbsDir = path.join(imagesDir, 'thumbs');

if (!fs.existsSync(thumbsDir)) {
  fs.mkdirSync(thumbsDir, { recursive: true });
}

const files = fs.readdirSync(imagesDir);
console.log(`Generating 420px thumbnails for images in ${imagesDir}...`);

let totalOriginalSize = 0;
let totalThumbSize = 0;
let count = 0;

for (const file of files) {
  if (!/\.(webp|jpg|jpeg|png)$/i.test(file)) continue;
  if (file === 'logo.webp') continue;

  const srcPath = path.join(imagesDir, file);
  if (fs.statSync(srcPath).isDirectory()) continue;

  const thumbFileName = file.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  const destPath = path.join(thumbsDir, thumbFileName);

  const origSize = fs.statSync(srcPath).size;
  totalOriginalSize += origSize;

  try {
    const buffer = await sharp(srcPath)
      .resize({
        width: 420,
        withoutEnlargement: true,
        fit: 'inside'
      })
      .webp({ quality: 80, effort: 5 })
      .toBuffer();

    fs.writeFileSync(destPath, buffer);
    totalThumbSize += buffer.length;
    count++;
    console.log(`✓ ${file}: ${(origSize / 1024).toFixed(0)}KB -> ${(buffer.length / 1024).toFixed(0)}KB (saved ${((origSize - buffer.length) / 1024).toFixed(0)}KB)`);
  } catch (err) {
    console.warn(`Failed on ${file}:`, err.message);
  }
}

console.log(`\n🎉 Generated ${count} thumbnails!`);
console.log(`Total original: ${(totalOriginalSize / 1024 / 1024).toFixed(2)} MB`);
console.log(`Total thumbnails: ${(totalThumbSize / 1024 / 1024).toFixed(2)} MB`);
console.log(`Savings: ${((totalOriginalSize - totalThumbSize) / 1024 / 1024).toFixed(2)} MB (${(((totalOriginalSize - totalThumbSize) / totalOriginalSize) * 100).toFixed(0)}% reduction!)`);
