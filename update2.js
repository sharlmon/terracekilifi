const fs = require('fs');
const cheerio = require('cheerio');

function processFile(filename, updater) {
  let html = fs.readFileSync(filename, 'utf8');
  let $ = cheerio.load(html);
  
  if ($('head').find('link[href="terrace-layouts.css"]').length === 0) {
    $('head').append('<link rel="stylesheet" href="terrace-layouts.css">');
  }

  // Global Sweep: Kuriba and headphones
  $('h2:contains("KURIBA")').closest('.sqs-block, .list-item').remove();
  $('img').each((i, img) => {
    const src = ($(img).attr('src') || $(img).attr('data-src') || '').toLowerCase();
    const alt = ($(img).attr('alt') || '').toLowerCase();
    if (src.includes('headphone') || alt.includes('headphone')) {
      $(img).closest('.sqs-block-image').remove();
    }
  });

  updater($);

  fs.writeFileSync(filename, $.html(), 'utf8');
  console.log(`Updated ${filename}`);
}

processFile('index.html', ($) => {
  // Fix Footer
  const footer = $('#footer-sections');
  if (footer.length) {
    // Add specific footer CTA block
    const contactHtml = `
      <div class="footer-contact-block" style="text-align: center; padding: 40px; background: var(--color-charcoal); color: var(--color-warm-white);">
        <h2 style="color: var(--color-warm-white) !important;">Get In Touch</h2>
        <p style="margin: 0 auto; color: var(--color-warm-white) !important;"><a href="mailto:residency@terracekilifi.com" style="color: var(--color-terracotta) !important; font-size: 1.5rem;">residency@terracekilifi.com</a></p>
        <p style="margin: 10px auto 0; color: var(--color-warm-white) !important;">Bandari Rd, Mnarani, Kilifi, Kenya<br>Turn off the Mombasa–Malindi Highway at the junction opposite Mnarani Club.</p>
      </div>
    `;
    footer.prepend(contactHtml);
    
    // remove redundant old paragraphs mentioning Bandari Rd in footer to avoid duplication
    footer.find('p:contains("Bandari Rd")').not('.footer-contact-block p').remove();
  }

  // Ready To Create With Us Responsive Size
  // Let's add a class instead of inline style to ensure it scales
  $('p:contains("We cultivate a space")').addClass('hero-title').removeAttr('style');
  $('p:contains("Open to all forms")').addClass('hero-title').removeAttr('style');
});

processFile('art-space.html', ($) => {
  const mainContent = $('.sqs-html-content').first();
  if (mainContent.length) {
    mainContent.empty();
    mainContent.append(`
      <div class="page-section">
        <h1 class="hero-title terracotta-accent">The Art Space</h1>
        <p class="sqsrte-large">The Terrace Art Space is a non-profit platform that celebrates the power of art to connect, inspire, and gently shift perspectives.</p>
        <div class="story-layout reveal-on-scroll">
          <div class="story-content">
            <h2 class="oceanic-accent">Voices of Kilifi</h2>
            <p>At our heart are the voices and lived experiences of the Kilifi community. They are the vital contributors shaping culture and driving real, tangible change in the region. We create space for creativity to spark conversation, nurture understanding, and contribute to a more inclusive cultural landscape.</p>
          </div>
        </div>
        <div class="story-layout reveal-on-scroll">
          <div class="story-content">
            <h2 class="earth-accent">Decades of Collaboration</h2>
            <p>Rooted in a desire for deeper community connection, The Terrace builds from over two decades of creative collaboration alongside partners such as <strong>Afrofilms International</strong> and <strong>I'll Tell You My Story</strong>. Our work is an open invitation to reimagine who shapes culture and to embrace creativity as a powerful driver of lasting impact.</p>
          </div>
        </div>
        <div class="module-highlight reveal-on-scroll" style="text-align:center;">
          <h3>Our Mission</h3>
          <p>To support artists and communities in turning creative expression into meaningful, sustainable impact.</p>
        </div>
      </div>
    `);
  }
});

processFile('arts-residency.html', ($) => {
  const mainContent = $('.sqs-html-content').first();
  if (mainContent.length) {
    mainContent.empty();
    mainContent.append(`
      <div class="page-section">
        <h1 style="text-align: center; margin-bottom: 60px;">The Terrace Residency</h1>
        <div class="dual-portal-layout">
          
          <!-- Professional Residency Portal -->
          <div class="portal-card portal-professional reveal-on-scroll">
            <h2 class="oceanic-accent">Professional Residency</h2>
            <p><strong>A Place for Focus, Exchange and Renewal</strong></p>
            <p>An exclusive, artist-run environment for established artists seeking dedicated time and space. Nestled in a serene creek and mangrove setting, ensuring deep focus and eco-conscious living.</p>
            
            <div class="feature-grid">
              <div class="feature-item">
                <div class="feature-icon">🛏️</div>
                <strong>5 Private Bedrooms</strong>
              </div>
              <div class="feature-item">
                <div class="feature-icon">🛖</div>
                <strong>"Traditional Hut" Edit Suite</strong>
              </div>
              <div class="feature-item">
                <div class="feature-icon">🌿</div>
                <strong>Mangrove Serenity</strong>
              </div>
            </div>

            <div class="duration-callout">
              <h4>Recommended Duration</h4>
              <p style="margin:0;">4–8 Weeks</p>
              <small>Flexible duration tailored to the artist's project scope.</small>
            </div>

            <p>Artists enjoy private, premium accommodation with expansive shared spaces, and direct access to The Terrace Art Space and music studio.</p>
          </div>

          <!-- Emerging Residency Portal -->
          <div class="portal-card portal-emerging reveal-on-scroll">
            <h2 class="terracotta-accent">Emerging Residency</h2>
            <p>A dynamic, collaborative creative hub designed for artistic exploration and community. Featuring a co-working studio, performance deck, outdoor screening venue, and a lively bar and restaurant.</p>
            
            <div class="module-highlight" style="margin-top: 30px;">
              <h3>Mastercard Sanara Program</h3>
              <p>We currently operate a community music studio offering mentorship, technical training, and performance opportunities. We support artists in refining their skills, accessing markets, and building networks.</p>
            </div>

            <p style="margin-top: 30px;">The space serves as a gathering point for diverse voices and community participation, nurturing a rich ecosystem for artistic experimentation and community-led storytelling.</p>
          </div>

        </div>
      </div>
    `);
  }
});

// Remove any remaining Sawazisha paragraphs globally just in case
const files = ['index.html', 'art-space.html', 'artists-exchange.html', 'arts-residency.html'];
files.forEach(filename => {
  let html = fs.readFileSync(filename, 'utf8');
  let $ = cheerio.load(html);
  $('p').each((i, el) => {
    if ($(el).text().toLowerCase().includes('sawazisha approach')) {
      $(el).remove();
    }
  });
  fs.writeFileSync(filename, $.html(), 'utf8');
});
