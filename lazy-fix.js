const fs = require('fs');
const cheerio = require('cheerio');

const files = ['index.html', 'art-space.html', 'arts-residency.html', 'artists-exchange.html'];

files.forEach(filename => {
  let html = fs.readFileSync(filename, 'utf8');
  let $ = cheerio.load(html);
  
  $('img').attr('loading', 'lazy');
  
  fs.writeFileSync(filename, $.html(), 'utf8');
  console.log(`Lazy loading added to ${filename}`);
});
