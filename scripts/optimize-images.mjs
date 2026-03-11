import sharp from 'sharp';
import { readdir, stat, unlink } from 'fs/promises';
import { join, extname, basename, dirname } from 'path';

const ASSETS_DIR = 'src/assets';
const MAX_WIDTH = 1600; // Max width for any image
const WEBP_QUALITY = 80; // Good balance of quality vs size
const SIZE_THRESHOLD_KB = 100; // Only process images over 100KB

async function getAllImages(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...await getAllImages(fullPath));
    } else {
      const ext = extname(entry.name).toLowerCase();
      if (['.jpg', '.jpeg', '.png'].includes(ext)) {
        const stats = await stat(fullPath);
        if (stats.size > SIZE_THRESHOLD_KB * 1024) {
          files.push({ path: fullPath, size: stats.size });
        }
      }
    }
  }
  return files;
}

async function optimizeImage(filePath) {
  const ext = extname(filePath).toLowerCase();
  const webpPath = filePath.replace(/\.(jpg|jpeg|png)$/i, '.webp');

  try {
    const metadata = await sharp(filePath).metadata();
    const needsResize = metadata.width > MAX_WIDTH;

    let pipeline = sharp(filePath);

    if (needsResize) {
      pipeline = pipeline.resize(MAX_WIDTH, null, {
        withoutEnlargement: true,
        fit: 'inside',
      });
    }

    // Convert to WebP
    await pipeline
      .webp({ quality: WEBP_QUALITY, effort: 4 })
      .toFile(webpPath);

    const originalStats = await stat(filePath);
    const webpStats = await stat(webpPath);
    const savings = ((1 - webpStats.size / originalStats.size) * 100).toFixed(1);

    // Delete original file
    await unlink(filePath);

    console.log(
      `✓ ${basename(filePath)} → ${basename(webpPath)} | ` +
      `${(originalStats.size / 1024).toFixed(0)}KB → ${(webpStats.size / 1024).toFixed(0)}KB (${savings}% smaller)` +
      `${needsResize ? ` | resized ${metadata.width}→${MAX_WIDTH}px` : ''}`
    );

    return {
      original: filePath,
      optimized: webpPath,
      originalSize: originalStats.size,
      newSize: webpStats.size,
    };
  } catch (err) {
    console.error(`✗ ${basename(filePath)}: ${err.message}`);
    return null;
  }
}

async function main() {
  console.log('Scanning for images over 100KB...\n');
  const images = await getAllImages(ASSETS_DIR);
  images.sort((a, b) => b.size - a.size);

  console.log(`Found ${images.length} images to optimize\n`);

  let totalOriginal = 0;
  let totalNew = 0;
  const results = [];

  for (const img of images) {
    const result = await optimizeImage(img.path);
    if (result) {
      totalOriginal += result.originalSize;
      totalNew += result.newSize;
      results.push(result);
    }
  }

  console.log(`\n${'='.repeat(60)}`);
  console.log(`Optimized ${results.length} images`);
  console.log(`Total: ${(totalOriginal / 1024 / 1024).toFixed(1)}MB → ${(totalNew / 1024 / 1024).toFixed(1)}MB`);
  console.log(`Saved: ${((totalOriginal - totalNew) / 1024 / 1024).toFixed(1)}MB (${((1 - totalNew / totalOriginal) * 100).toFixed(1)}%)`);
}

main().catch(console.error);
