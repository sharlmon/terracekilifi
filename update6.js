const fs = require('fs');
const cheerio = require('cheerio');

function redesignPage(filename) {
  let html = fs.readFileSync(filename, 'utf8');
  let $ = cheerio.load(html);

  // 1. Clean the main section
  const main = $('main#page');
  main.empty();

  // 2. Build the new structure
  main.append(`
    <article class="redesigned-page">
      <!-- Immersive Hero -->
      <section class="hero-section" style="height: 70vh; margin-bottom: 80px;">
        <img src="./picture_library/sunset.jpeg" alt="Arts Residency Sunset" style="position: absolute; width: 100%; height: 100%; object-fit: cover;">
        <div class="hero-overlay" style="background: rgba(30, 30, 30, 0.3);"></div>
        <div class="hero-content">
          <h1 style="font-family: var(--font-secondary); font-size: clamp(3rem, 10vw, 7rem); color: var(--color-warm-ivory) !important;">Arts Residency</h1>
          <p class="reveal-on-scroll" style="font-size: 1.2rem; max-width: 600px; margin: 20px auto; color: var(--color-warm-ivory) !important; opacity: 0.9;">A place for focus, exchange and renewal along the Kilifi Creek.</p>
        </div>
      </section>

      <!-- Intro Statement -->
      <section class="container" style="max-width: 800px; margin: 0 auto 100px; text-align: center; padding: 0 20px;">
        <p class="sqsrte-large reveal-on-scroll" style="line-height: 1.8; font-weight: 300; font-size: 1.4rem;">
          The space serves as a gathering point for diverse voices, fostering dialogue, exchange, and community participation. We nurture a dynamic ecosystem where creativity thrives and connections across disciplines are strengthened.
        </p>
        <div class="wave-divider" style="margin-top: 60px; opacity: 0.3;"></div>
      </section>

      <!-- The Two Journeys (Dual Portal) -->
      <section class="container" style="margin-bottom: 120px;">
        <div class="dual-portal-layout">
          
          <!-- Professional Residency -->
          <div class="portal-card portal-professional reveal-on-scroll">
            <div style="overflow: hidden; border-radius: 12px; margin-bottom: 30px;">
               <img src="kilifi_art_hero.png" alt="Professional Residency" style="transition: transform 0.8s ease;">
            </div>
            <h2 class="deep-ocean-accent" style="font-family: var(--font-secondary); margin-bottom: 10px;">Professional Residency</h2>
            <p style="text-transform: uppercase; letter-spacing: 0.1em; font-size: 0.8rem; margin-bottom: 20px; color: var(--color-mangrove);">Peaceful & Reflective</p>
            <p>A focused environment for established artists to reflect and grow. Respite from the everyday challenges of creative careers.</p>
            
            <div class="feature-grid" style="margin: 30px 0;">
              <div class="feature-item"><strong>5 Private Bedrooms</strong></div>
              <div class="feature-item"><strong>Traditional Hut Edit Suite</strong></div>
              <div class="feature-item"><strong>Eco-Conscious Living</strong></div>
            </div>

            <div class="duration-callout" style="background-color: var(--color-mangrove);">
              <h4 style="margin-bottom: 5px;">Recommended Duration</h4>
              <p>4 – 8 Weeks</p>
            </div>
            
            <a href="mailto:residency@terracekilifi.com" class="sqs-button-element--primary" style="margin-top: 20px;">Inquire for 2025</a>
          </div>

          <!-- Emerging Residency -->
          <div class="portal-card portal-emerging reveal-on-scroll">
            <div style="overflow: hidden; border-radius: 12px; margin-bottom: 30px;">
               <img src="emerging_hub.png" alt="Emerging Residency" style="transition: transform 0.8s ease;">
            </div>
            <h2 class="terracotta-accent" style="font-family: var(--font-secondary); margin-bottom: 10px;">Emerging Residency</h2>
            <p style="text-transform: uppercase; letter-spacing: 0.1em; font-size: 0.8rem; margin-bottom: 20px; color: var(--color-terracotta);">Dynamic & Collaborative</p>
            <p>A creative hub for artistic exploration, featuring our Mastercard Sanara program and community music studio.</p>
            
            <div class="module-highlight" style="margin: 30px 0; background: var(--color-sandstone); color: var(--color-charcoal);">
              <h3 style="color: var(--color-terracotta) !important; font-size: 1.2rem;">Sanara Music Studio</h3>
              <p style="font-size: 0.9rem;">Offering mentorship, technical training, and performance opportunities for the next generation of coastal talent.</p>
            </div>

            <p>Includes co-working spaces, performance deck, and outdoor screening venues.</p>
            
            <a href="mailto:residency@terracekilifi.com" class="sqs-button-element--primary" style="margin-top: 20px;">Apply for Sanara</a>
          </div>

        </div>
      </section>

      <!-- Signature Pull Quote -->
      <section class="container" style="margin-bottom: 120px;">
        <div class="pull-quote reveal-on-scroll">
          "A sanctuary where the creek meets creativity, and every sunset brings a new possibility."
        </div>
      </section>

    </article>
  `);

  fs.writeFileSync(filename, $.html(), 'utf8');
  console.log(`Redesigned ${filename}`);
}

redesignPage('arts-residency.html');
