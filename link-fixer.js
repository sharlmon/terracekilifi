const fs = require('fs');
const cheerio = require('cheerio');

const files = ['index.html', 'art-space.html', 'arts-residency.html', 'artists-exchange.html'];

files.forEach(filename => {
  let html = fs.readFileSync(filename, 'utf8');
  let $ = cheerio.load(html);
  
  $('a').each((i, el) => {
    let href = $(el).attr('href');
    if (href) {
      if (href === '/') {
        $(el).attr('href', 'index.html');
      } else if (href === '/art-space') {
        $(el).attr('href', 'art-space.html');
      } else if (href === '/arts-residency') {
        $(el).attr('href', 'arts-residency.html');
      } else if (href === '/artists-exchange') {
        $(el).attr('href', 'artists-exchange.html');
      }
    }
  });

  fs.writeFileSync(filename, $.html(), 'utf8');
  console.log(`Fixed links in ${filename}`);
});
