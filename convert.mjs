import sharp from 'sharp';
import { readdirSync } from 'fs';
import { join, extname, basename } from 'path';

const inputDir = './public/images';
const quality = 80;

function convertDir(dir) {
    const entries = readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
        const fullPath = join(dir, entry.name);
        if (entry.isDirectory()) {
            convertDir(fullPath);
        } else if (['.jpg', '.jpeg', '.png'].includes(extname(entry.name).toLowerCase())) {
            const outPath = join(dir, basename(entry.name, extname(entry.name)) + '.webp');
            sharp(fullPath).webp({ quality }).toFile(outPath)
                .then(() => console.log(`✅ ${fullPath} → ${outPath}`))
                .catch(err => console.error(`❌ ${fullPath}:`, err));
        }
    }
}

convertDir(inputDir);