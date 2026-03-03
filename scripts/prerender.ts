/**
 * Prerender script for SEO
 * 
 * Generates static HTML for all routes after the Vite build.
 * Run: npx tsx scripts/prerender.ts
 * 
 * This creates an HTML file for each route in the dist/ directory,
 * so search engines get fully rendered content without needing JS.
 * 
 * Requires: npm install -D puppeteer tsx
 * 
 * How it works:
 * 1. Starts a local static server on dist/
 * 2. Opens each route in headless Chrome
 * 3. Waits for React to render
 * 4. Saves the rendered HTML to dist/{route}/index.html
 * 5. Netlify serves these as static files (faster than SPA fallback)
 */

import { createServer } from 'http';
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, extname } from 'path';
import { routes } from '../prerender-routes';

const DIST_DIR = join(process.cwd(), 'dist');
const PORT = 4173;

// Mime types for static serving
const MIME_TYPES: Record<string, string> = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.mp4': 'video/mp4',
  '.woff2': 'font/woff2',
  '.txt': 'text/plain',
  '.xml': 'application/xml',
};

async function main() {
  // Dynamically import puppeteer
  const puppeteer = await import('puppeteer');

  console.log(`\n🔍 Pre-rendering ${routes.length} routes...\n`);

  // Start a simple static file server
  const server = createServer((req, res) => {
    let filePath = join(DIST_DIR, req.url || '/');

    // SPA fallback: if file doesn't exist, serve index.html
    if (!existsSync(filePath) || filePath.endsWith('/')) {
      filePath = join(DIST_DIR, 'index.html');
    }

    try {
      const content = readFileSync(filePath);
      const ext = extname(filePath);
      res.writeHead(200, { 'Content-Type': MIME_TYPES[ext] || 'application/octet-stream' });
      res.end(content);
    } catch {
      // Fallback to index.html for SPA routes
      const html = readFileSync(join(DIST_DIR, 'index.html'));
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(html);
    }
  });

  await new Promise<void>((resolve) => server.listen(PORT, resolve));
  console.log(`📡 Static server running on http://localhost:${PORT}`);

  // Launch headless browser
  const browser = await puppeteer.default.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  let success = 0;
  let failed = 0;

  for (const route of routes) {
    try {
      const page = await browser.newPage();

      // Block heavy resources to speed up rendering
      await page.setRequestInterception(true);
      page.on('request', (req) => {
        const type = req.resourceType();
        if (['image', 'media', 'font'].includes(type)) {
          req.abort();
        } else {
          req.continue();
        }
      });

      await page.goto(`http://localhost:${PORT}${route}`, {
        waitUntil: 'networkidle0',
        timeout: 15000,
      });

      // Wait for React to render content
      await page.waitForSelector('main', { timeout: 5000 }).catch(() => {});

      // Get the fully rendered HTML
      const html = await page.content();
      await page.close();

      // Write to dist/{route}/index.html
      const outputDir = join(DIST_DIR, route === '/' ? '' : route);
      mkdirSync(outputDir, { recursive: true });

      const outputPath = join(outputDir, 'index.html');
      writeFileSync(outputPath, html, 'utf-8');

      success++;
      if (success % 10 === 0 || success === routes.length) {
        console.log(`  ✅ ${success}/${routes.length} rendered`);
      }
    } catch (err) {
      failed++;
      console.error(`  ❌ Failed: ${route} - ${(err as Error).message}`);
    }
  }

  await browser.close();
  server.close();

  console.log(`\n🎉 Pre-rendering complete!`);
  console.log(`   ✅ ${success} pages rendered`);
  if (failed > 0) console.log(`   ❌ ${failed} pages failed`);
  console.log(`   📁 Output: ${DIST_DIR}\n`);
}

main().catch(console.error);
