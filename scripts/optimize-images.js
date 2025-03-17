import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '../public');
const imagesDir = path.join(publicDir, 'images');
const optimizedDir = path.join(imagesDir, 'optimized');

// Ensure directories exist
if (!fs.existsSync(optimizedDir)) {
  fs.mkdirSync(optimizedDir, { recursive: true });
}

// Get all images
const imageFiles = fs.readdirSync(imagesDir).filter(file => 
  /\.(jpg|jpeg|png)$/i.test(file) && !file.includes('optimized')
);

// Make image optimization fail gracefully if sharp isn't installed
let sharp;
try {
  sharp = await import('sharp');
} catch (e) {
  console.log('Sharp package not found. Skipping image optimization.');
  process.exit(0); // Exit successfully to continue the build
}

// Process images
async function optimizeImages() {
  console.log('Optimizing images...');
  
  const promises = imageFiles.map(async (file) => {
    const inputPath = path.join(imagesDir, file);
    const filename = path.parse(file).name;
    const webpPath = path.join(optimizedDir, `${filename}.webp`);
    const jpgPath = path.join(optimizedDir, `${filename}.jpg`);
    
    try {
      // Create WebP version
      await sharp(inputPath)
        .resize(1200) // Max width
        .webp({ quality: 80 })
        .toFile(webpPath);
      
      // Create optimized JPG fallback
      await sharp(inputPath)
        .resize(1200) // Max width
        .jpeg({ quality: 85, mozjpeg: true })
        .toFile(jpgPath);
        
      console.log(`✅ Optimized: ${file}`);
    } catch (err) {
      console.error(`❌ Error optimizing ${file}:`, err);
    }
  });
  
  await Promise.all(promises);
  console.log('Image optimization complete!');
}

optimizeImages(); 