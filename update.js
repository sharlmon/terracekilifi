const fs = require('fs');
const cheerio = require('cheerio');

function processFile(filename, updater) {
  let html = fs.readFileSync(filename, 'utf8');
  let $ = cheerio.load(html);
  
  // Inject CSS and JS
  if ($('head').find('link[href="terrace-premium.css"]').length === 0) {
    $('head').append('<link rel="stylesheet" href="terrace-premium.css">');
  }
  if ($('body').find('script[src="terrace-premium.js"]').length === 0) {
    $('body').append('<script src="terrace-premium.js"></script>');
  }

  updater($);

  fs.writeFileSync(filename, $.html(), 'utf8');
  console.log(`Updated ${filename}`);
}

// 1. index.html
processFile('index.html', ($) => {
  // About The Terrace
  const aboutH3 = $('h3:contains("ABOUT THE TERRACE")');
  if (aboutH3.length) {
    const parentBlock = aboutH3.closest('.sqs-block-html, .sqs-html-content');
    parentBlock.find('p').remove();
    parentBlock.find('ul').remove();
    aboutH3.after(`
      <p class="sqsrte-large">The Terrace is an artist-led, independent arts space and residency created to provide a focused environment for artists to reflect, create and grow. It offers respite from the everyday challenges of creative careers, supporting meaningful connections and artistic exploration.</p>
      <p class="sqsrte-large">Guided by the inclusive Sawazisha (Equalize) approach, The Terrace supports multidisciplinary artists through training, career development, and community-driven projects, including Sawazisha Sinema (Film) and Sawazisha Sekta (Music & Fashion).</p>
      <p class="sqsrte-large">Founded to decentralize the arts from major urban centers, The Terrace operates through three interconnected initiatives along Kilifi Creek:</p>
      <ul class="sqsrte-large">
        <li>The Terrace Art Space</li>
        <li>The Terrace Residency (Professional & Emerging)</li>
        <li>The Terrace Artists’ Exchange</li>
      </ul>
    `);
  }

  // Ready To Create With Us?
  const readyH3 = $('h3:contains("Ready To Create")');
  if (readyH3.length) {
    const parentBlock = readyH3.closest('.sqs-block-html, .sqs-html-content');
    parentBlock.find('p').remove();
    readyH3.after(`
      <p style="font-size: 1.5rem !important;">We cultivate a space where artists can express themselves freely, exchange ideas, and connect with a wider creative community.</p>
      <p style="font-size: 1.5rem !important;">Open to all forms of artistic expression, we bring together both emerging and established artists seeking the time, space, and support to create, develop, and showcase their creative projects.</p>
    `);
  }

  // Testimonials
  const jackieSlide = $('*').filter((i, el) => $(el).text().includes('Jackie Lebo')).closest('.summary-item, .slide, .sqs-gallery-design-carousel-slide, .user-items-list-carousel__slide');
  if (jackieSlide.length) {
    const parent = jackieSlide.parent();
    jackieSlide.prependTo(parent);
  }

  // Team Section
  const kuribaH2 = $('h2:contains("KURIBA")');
  if (kuribaH2.length) {
    kuribaH2.closest('.sqs-block, .list-item').remove();
  }

  // Contact Section
  const emailNode = $('a[href^="mailto"]');
  emailNode.attr('href', 'mailto:residency@localhost:8080');
  emailNode.text('residency@localhost:8080');
  
  $('*').filter((i, el) => $(el).text().includes('Bandari Rd')).each((i, el) => {
    if (el.tagName === 'p') {
      $(el).html('Bandari Rd, Mnarani, Kilifi, Kenya<br>Turn off the Mombasa–Malindi Highway at the junction opposite Mnarani Club.');
    }
  });
});

// 2. art-space.html
processFile('art-space.html', ($) => {
  const h2 = $('h2:contains("The Art Space")');
  if (h2.length) {
    const parentBlock = h2.closest('.sqs-block-html, .sqs-html-content');
    parentBlock.find('p').remove();
    h2.after(`
      <p>The Terrace Art Space is a non-profit platform that celebrates the power of art to connect, inspire, and gently shift perspectives. At its heart are the voices and lived experiences of the Kilifi community as vital contributors shaping culture and driving change in the region.</p>
      <p>Through a dynamic and multidisciplinary approach, we create space for creativity to spark conversation, nurture understanding, and contribute to a more inclusive and thoughtful cultural landscape.</p>
      <p>Our work is an open invitation to reimagine who shapes culture, to make room for stories that deserve to be seen and heard, and to embrace creativity as a powerful driver of lasting impact.</p>
      <p>Rooted in a desire for deeper community connection and real, tangible change, The Terrace builds from over two decades of creative collaboration alongside partners such as <a href="#">Afrofilms International</a> and <a href="#">I'll Tell You My Story</a>.</p>
      <p>Our mission is to support artists and communities in turning creative expression into meaningful, sustainable impact.</p>
    `);
  }
});

// 3. artists-exchange.html
processFile('artists-exchange.html', ($) => {
  const h3Bridging = $('h3:contains("Bridging Cultures")');
  if (h3Bridging.length) {
    const parentBlock = h3Bridging.closest('.sqs-block-html, .sqs-html-content');
    parentBlock.find('p').remove();
    h3Bridging.after(`
      <p>Our work is deeply rooted in the community, collaborating closely with local artists and continuously reconnecting to our purpose in Kilifi. In a county marked by significant income inequality, The Terrace was created as an inclusive space for connection, creativity, and opportunity.</p>
      <p>Through our programmes and partnerships, we aim to contribute to a balanced and accessible creative ecosystem, where talent is nurtured and communities can thrive.</p>
    `);
  }

  const h3Collab = $('h3:contains("For Artistic Collaborations")');
  if (h3Collab.length) {
    const parentBlock = h3Collab.closest('.sqs-block-html, .sqs-html-content');
    parentBlock.find('p').remove();
    h3Collab.after(`
      <p>We work closely with the local community initiative in Mtongani Kidundu to grow and nurture accessible creative spaces within the area. This partnership is rooted in meaningful exchange, creating opportunities for multidisciplinary artists to engage directly with the community, share knowledge, and draw inspiration from local culture.</p>
    `);
  }
});

// 4. arts-residency.html
processFile('arts-residency.html', ($) => {
  // Remove sawazisha
  $('p:contains("Sawazisha (Equalize)")').remove();
  
  // Try to remove images (man wearing headphones and sawazisha image)
  // Let's remove images from the 2nd and 3rd image blocks, or by inspecting alt/src
  $('img').each((i, img) => {
    const src = $(img).attr('src') || $(img).attr('data-src') || '';
    const alt = $(img).attr('alt') || '';
    if (src.includes('headphone') || alt.toLowerCase().includes('headphone') || i === 1 || i === 2) {
      $(img).closest('.sqs-block-image').remove();
    }
  });

  // Since we don't have clear headers to target, we replace the top paragraphs.
  // We'll replace the first few P tags with the Emerging Residency text,
  // and prepend the Professional Residency section.
  
  const emergingHtml = "<h2 class='terracotta-accent'>Emerging Residency</h2>" +
    "<p>The Terrace Residency is a creative hub nestled along the scenic Kilifi Creek, designed for artistic exploration, collaboration, and community. The space features a co-working studio for creatives, a performance deck, an outdoor screening venue, a sound recording studio, and a lively bar and restaurant, creating a fusion of art, culture, and connection.</p>" +
    "<p>The space serves as a gathering point for diverse voices and community participation. With a commitment to inclusivity and innovation, the residency nurtures a dynamic ecosystem where creativity thrives and connections across disciplines and communities are strengthened.</p>" +
    "<p>With the support of Mastercard's Sanara Program, The Terrace Residency currently operates a community music studio offering mentorship, technical training, and performance opportunities. Artists are supported not only in refining their skills but also in accessing markets and building networks for collaboration and growth. These collaborative platforms create a rich ecosystem for artistic experimentation and community-led storytelling.</p>";

  const profHtml = "<div class='professional-residency page-section' style='padding-top: 50px; padding-bottom: 50px;'>" +
      "<h2 class='deep-ocean-accent'>Professional Residency</h2>" +
      "<h3>Overview</h3>" +
      "<p><strong>A Place for Focus, Exchange and Renewal</strong></p>" +
      "<p>Our Professional Residency offers an exclusive, high-end environment for established artists seeking dedicated time and space. The residency is completely artist-run, nestled in a serene creek and mangrove setting, ensuring deep focus and eco-conscious living.</p>" +
      "<h3>Duration of Residency</h3>" +
      "<p>Flexible duration tailored to the artist's project scope, offering short-term and extended stays.</p>" +
      "<h3>Living and Working at the Residency</h3>" +
      "<p>Artists enjoy private, premium accommodation with tailored facilities, expansive shared spaces, and direct access to both The Terrace Art Space and the music studio. We encourage cross-disciplinary collaboration in a setting that merges luxury with raw natural beauty.</p>" +
    "</div>";

  // Insert at the main content block
  const mainContent = $('.sqs-html-content').first();
  if (mainContent.length) {
    mainContent.empty();
    mainContent.append(profHtml);
    mainContent.append(emergingHtml);
  }
});
