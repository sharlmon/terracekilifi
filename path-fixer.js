const fs = require('fs');
const cheerio = require('cheerio');

const files = ['index.html', 'art-space.html', 'arts-residency.html', 'artists-exchange.html'];

files.forEach(filename => {
  let html = fs.readFileSync(filename, 'utf8');
  let $ = cheerio.load(html);
  
  // Fix images, scripts, links that use ../ erroneously
  $('img, script, link').each((i, el) => {
    const attr = el.tagName === 'link' ? 'href' : 'src';
    let val = $(el).attr(attr);
    
    if (val && val.startsWith('../')) {
      const newVal = val.substring(3);
      $(el).attr(attr, newVal);
    }
  });

  // Also check data-src for squarespace images
  $('img').each((i, el) => {
    let dsrc = $(el).attr('data-src');
    if (dsrc && dsrc.startsWith('../')) {
      $(el).attr('data-src', dsrc.substring(3));
    }
  });

  fs.writeFileSync(filename, $.html(), 'utf8');
  console.log(`Fixed paths in ${filename}`);
});
