import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '../public');
const contentDir = path.join(__dirname, '../src/content/blog');

const BASE_URL = 'https://flick2split.com';
const STATIC_PAGES = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/blog', priority: '0.9', changefreq: 'weekly' },
  { path: '/features', priority: '0.8', changefreq: 'monthly' },
  { path: '/download', priority: '0.9', changefreq: 'monthly' },
  { path: '/privacy-policy', priority: '0.5', changefreq: 'monthly' },
  { path: '/terms-of-service', priority: '0.5', changefreq: 'monthly' },
  { path: '/cookie-policy', priority: '0.5', changefreq: 'monthly' },
  { path: '/gdpr', priority: '0.5', changefreq: 'monthly' },
];

// Get blog posts
function getBlogSlugs() {
  try {
    const files = fs.readdirSync(contentDir);
    return files
      .filter(file => file.endsWith('.tsx'))
      .map(file => file.replace('.tsx', ''));
  } catch (error) {
    console.error('Error reading blog posts:', error);
    return [];
  }
}

function generateSitemap() {
  const blogSlugs = getBlogSlugs();
  const today = new Date().toISOString().split('T')[0];
  
  // Start XML content
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

  // Add static pages
  STATIC_PAGES.forEach(page => {
    sitemap += `  <url>
    <loc>${BASE_URL}${page.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>
`;
  });

  // Add blog posts
  blogSlugs.forEach(slug => {
    sitemap += `  <url>
    <loc>${BASE_URL}/blog/${slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
`;
  });

  // Close XML
  sitemap += `</urlset>`;

  // Write file
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
  console.log('✅ Sitemap generated successfully!');
}

generateSitemap(); 