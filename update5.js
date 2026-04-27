const fs = require('fs');
const cheerio = require('cheerio');

function processFile(filename, updater) {
  let html = fs.readFileSync(filename, 'utf8');
  let $ = cheerio.load(html);
  
  // Global Image Polish
  $('img').each((i, img) => {
    $(img).attr('loading', 'lazy');
  });

  // Purge Kuriba and Sawazisha
  $('*').each((i, el) => {
    const text = $(el).text().toLowerCase();
    if (text.includes('kuriba') || text.includes('sawazisha approach')) {
       // Only remove blocks, not the whole body
       if ($(el).is('.sqs-block, .list-item, p, h2, h3, section')) {
         $(el).remove();
       }
    }
  });

  updater($);

  fs.writeFileSync(filename, $.html(), 'utf8');
  console.log(`Updated ${filename}`);
}

processFile('artists-exchange.html', ($) => {
  const mainContent = $('.sqs-html-content').first();
  if (mainContent.length) {
    mainContent.empty();
    mainContent.append(`
      <div class="page-section">
        <h1 class="hero-title terracotta-accent">Artist's Exchange</h1>
        <p class="sqsrte-large">Bridging Cultures & For Artistic Collaborations</p>
        
        <div class="gallery-item-with-text reveal-on-scroll">
          <div class="story-visual">
            <img src="kilifi_art_hero.png" alt="Collaborative Workshop" style="aspect-ratio: 16/9; object-fit: cover;">
          </div>
          <div class="story-content">
            <h2 class="deep-ocean-accent">Bridging Cultures</h2>
            <p>Our Artist's Exchange program is dedicated to inclusivity and community collaboration. We focus on bridging cultures through the Mtongani Kidundu partnership, nurturing local creative ecosystems, and creating meaningful dialogue between visiting and local artists.</p>
          </div>
        </div>

        <div class="horizontal-gallery reveal-on-scroll">
          <div class="gallery-item">
             <img src="emerging_hub.png" alt="Creative Dialogue" style="aspect-ratio: 1/1;">
             <h3>Artistic Collaborations</h3>
             <p>Creating opportunities for artists to work across disciplines and borders.</p>
          </div>
          <div class="gallery-item">
             <img src="kilifi_art_hero.png" alt="Community Impact" style="aspect-ratio: 1/1;">
             <h3>Local Ecosystems</h3>
             <p>Supporting the growth of Kilifi's creative community through shared resources and knowledge.</p>
          </div>
        </div>
      </div>
    `);
  }
});

processFile('art-space.html', ($) => {
  // Ensure images have modern framing
  $('.story-visual img').addClass('gallery-framed');
});

processFile('arts-residency.html', ($) => {
  // Ensure "headphone guy" and Sawazisha are gone
  $('img').each((i, img) => {
    const src = ($(img).attr('src') || '').toLowerCase();
    if (src.includes('headphone')) {
      $(img).closest('.sqs-block-image, .story-visual, div').remove();
    }
  });
});
