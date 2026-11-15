import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const imagesDir = path.resolve('public/images');
const files = fs.readdirSync(imagesDir);

console.log(`Checking ${files.length} images in ${imagesDir}...`);

let optimizedCount = 0;
let totalSavedBytes = 0;

for (const file of files) {
  if (!/\.(webp|jpg|jpeg|png)$/i.test(file)) continue;
  if (file === 'logo.webp') continue; // keep logo crisp

  const filePath = path.join(imagesDir, file);
  const statBefore = fs.statSync(filePath);

  try {
    const metadata = await sharp(filePath).metadata();
    const maxDim = Math.max(metadata.width || 0, metadata.height || 0);

    // If image exceeds 800px on any side, or file size is > 300KB
    if (maxDim > 800 || statBefore.size > 300 * 1024) {
      const buffer = await sharp(filePath)
        .resize({
          width: metadata.width >= metadata.height ? 800 : null,
          height: metadata.height > metadata.width ? 800 : null,
          withoutEnlargement: true,
          fit: 'inside'
        })
        .webp({ quality: 82, effort: 4 })
        .toBuffer();

      // Only save if smaller
      if (buffer.length < statBefore.size) {
        fs.writeFileSync(filePath, buffer);
        const saved = statBefore.size - buffer.length;
        totalSavedBytes += saved;
        optimizedCount++;
        console.log(`✓ Optimized ${file}: ${(statBefore.size / 1024).toFixed(0)}KB -> ${(buffer.length / 1024).toFixed(0)}KB (saved ${(saved / 1024).toFixed(0)}KB)`);
      }
    }
  } catch (err) {
    console.warn(`Failed to process ${file}:`, err.message);
  }
}

console.log(`\n🎉 Finished! Optimized ${optimizedCount} images. Total saved: ${(totalSavedBytes / 1024 / 1024).toFixed(2)} MB.`);
