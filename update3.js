const fs = require('fs');
const cheerio = require('cheerio');

function processFile(filename, updater) {
  let html = fs.readFileSync(filename, 'utf8');
  let $ = cheerio.load(html);
  updater($);
  fs.writeFileSync(filename, $.html(), 'utf8');
  console.log(`Updated ${filename}`);
}

processFile('art-space.html', ($) => {
  const mainContent = $('.sqs-html-content').first();
  if (mainContent.length) {
    mainContent.empty();
    mainContent.append(`
      <div class="hero-section">
        <img src="kilifi_art_hero.png" alt="Kilifi Creek Art Hero">
        <div class="hero-overlay"></div>
        <div class="hero-content">
          <h1 class="hero-title">The Art Space</h1>
          <p class="sqsrte-large">Highlighting Kilifi people as vital culture drivers.</p>
        </div>
      </div>
      
      <div class="page-section">
        <div class="story-layout reveal-on-scroll">
          <div class="story-content">
            <h2 class="oceanic-accent">A Platform for Connection</h2>
            <p>The Terrace Art Space is a non-profit platform that celebrates the power of art to connect, inspire, and gently shift perspectives. At its heart are the voices and lived experiences of the Kilifi community as vital contributors shaping culture and driving change in the region.</p>
          </div>
          <div class="story-visual">
            <img src="images.squarespace-cdn.com/content/v1/65d6025916539a7143e98121/d671c1f8-3b28-4892-97fe-03d9d6d65d62/june+space.jpg" alt="Art Space Interior" onerror="this.src='kilifi_art_hero.png'">
          </div>
        </div>

        <div class="story-layout reveal-on-scroll">
          <div class="story-content">
            <h2 class="earth-accent">Two Decades of Storytelling</h2>
            <p>Rooted in a desire for deeper community connection and real, tangible change, The Terrace builds from over two decades of creative collaboration alongside partners such as <strong>Afrofilms International</strong> and <strong>I'll Tell You My Story</strong>. We support artists and communities in turning creative expression into meaningful, sustainable impact.</p>
          </div>
          <div class="story-visual">
            <img src="images.squarespace-cdn.com/content/v1/65d6025916539a7143e98121/b34d1525-ba25-4126-a70b-57202d1c1766/groupshot.jpg" alt="Collaboration" onerror="this.src='kilifi_art_hero.png'">
          </div>
        </div>

        <div class="module-highlight reveal-on-scroll" style="text-align:center; margin-top: 60px;">
          <h3>Our Mission</h3>
          <p>Supporting multidisciplinary artists through training, career development, and community-driven projects.</p>
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
        <h1 style="text-align: center; margin-bottom: 60px; font-family: var(--font-secondary);">Arts Residency</h1>
        
        <div class="dual-portal-layout">
          <!-- Professional Residency -->
          <div class="portal-card portal-professional reveal-on-scroll">
            <img src="kilifi_art_hero.png" alt="Professional Residency Mangroves">
            <h2 class="oceanic-accent">Professional Residency</h2>
            <p><strong>Peaceful & Reflective</strong></p>
            <p>A focused environment for established artists to reflect, create and grow. Respite from the everyday challenges of creative careers.</p>
            
            <div class="feature-grid">
              <div class="feature-item">
                <div class="feature-icon">🛌</div>
                <strong>5 Private Bedrooms</strong>
              </div>
              <div class="feature-item">
                <div class="feature-icon">🛖</div>
                <strong>Traditional Hut Edit Suite</strong>
              </div>
            </div>

            <div class="duration-callout">
              <h4>Duration Recommendation</h4>
              <p>4–8 Weeks</p>
            </div>
            
            <p>Artist-run residency along the Kilifi Creek and mangrove setting. Eco-conscious living and cross-disciplinary collaboration.</p>
          </div>

          <!-- Emerging Residency -->
          <div class="portal-card portal-emerging reveal-on-scroll">
            <img src="emerging_hub.png" alt="Emerging Residency Hub">
            <h2 class="terracotta-accent">Emerging Residency</h2>
            <p><strong>Dynamic & Collaborative</strong></p>
            <p>A creative hub nestled along the scenic Kilifi Creek, designed for artistic exploration, collaboration, and community.</p>
            
            <div class="module-highlight">
              <h3>Mastercard Sanara Program</h3>
              <p>Community music studio offering mentorship, technical training, and performance opportunities.</p>
            </div>

            <p style="margin-top: 20px;">Features a co-working studio, performance deck, outdoor screening venue, and a sound recording studio.</p>
          </div>
        </div>
      </div>
    `);
  }
});
