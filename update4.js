const fs = require('fs');
const cheerio = require('cheerio');

function processFile(filename, updater) {
  let html = fs.readFileSync(filename, 'utf8');
  let $ = cheerio.load(html);
  updater($);
  fs.writeFileSync(filename, $.html(), 'utf8');
  console.log(`Updated ${filename}`);
}

processFile('index.html', ($) => {
  // 1. Elevated Hero Experience
  const headerSection = $('section').first(); // Adjust selector if needed
  // Let's create a real hero section at the top of body
  if ($('.main-hero').length === 0) {
    $('body').prepend(`
      <section class="main-hero" style="position: relative; height: 100vh; width: 100%; overflow: hidden; display: flex; align-items: center; justify-content: center;">
        <img src="kilifi_art_hero.png" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; z-index: 1;">
        <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(30, 30, 30, 0.4); z-index: 2;"></div>
        <div class="reveal-on-scroll" style="position: relative; z-index: 3; text-align: center; color: var(--color-warm-ivory); max-width: 900px; padding: 0 20px;">
          <h1 style="font-family: var(--font-secondary); font-size: clamp(3rem, 8vw, 6rem); color: var(--color-warm-ivory) !important; line-height: 1; margin-bottom: 20px;">Where Creativity Finds Space, Community, and Possibility</h1>
          <p style="font-size: 1.5rem; font-weight: 300; opacity: 0.9; color: var(--color-warm-ivory) !important;">An artist-led independent space and residency along the Kilifi Creek.</p>
          <div style="margin-top: 40px;">
            <a href="arts-residency.html" class="sqs-button-element--primary" style="border-color: var(--color-warm-ivory) !important; color: var(--color-warm-ivory) !important;">Explore Residencies</a>
          </div>
        </div>
      </section>
    `);
  }

  // 2. Navigation Fix - Ensure links are relative
  $('a').each((i, el) => {
    let href = $(el).attr('href');
    if (href && href.startsWith('/')) {
        $(el).attr('href', href.substring(1));
    }
  });

  // 3. Add Soft Grain Texture Overlay (CSS)
  if ($('style#grain-effect').length === 0) {
    $('head').append(`
      <style id="grain-effect">
        body::after {
          content: "";
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url("https://www.transparenttextures.com/patterns/natural-paper.png");
          opacity: 0.05;
          pointer-events: none;
          z-index: 9999;
        }
      </style>
    `);
  }
});

// Final cleanup for other pages as well
['art-space.html', 'arts-residency.html', 'artists-exchange.html'].forEach(file => {
  processFile(file, ($) => {
    $('a').each((i, el) => {
      let href = $(el).attr('href');
      if (href && href.startsWith('/')) {
          $(el).attr('href', href.substring(1));
      }
    });
  });
});
