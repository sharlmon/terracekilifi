const fs = require('fs');
const cheerio = require('cheerio');

const files = ['art-space.html', 'arts-residency.html', 'artists-exchange.html'];

files.forEach(file => {
  const html = fs.readFileSync(file, 'utf8');
  const $ = cheerio.load(html);
  console.log(`\n--- ${file} ---`);
  $('h1, h2, h3').each((i, el) => {
    const text = $(el).text().trim().substring(0, 80);
    if (text.length > 0) {
      console.log(el.tagName + ": " + text);
    }
  });
});
