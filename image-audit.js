const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const files = ['index.html', 'art-space.html', 'arts-residency.html', 'artists-exchange.html'];
const baseDir = process.cwd();

files.forEach(filename => {
  const html = fs.readFileSync(filename, 'utf8');
  const $ = cheerio.load(html);
  
  $('img').each((i, el) => {
    let src = $(el).attr('src') || $(el).attr('data-src');
    if (src && !src.startsWith('http') && !src.startsWith('data:')) {
      const fullPath = path.join(baseDir, src);
      if (!fs.existsSync(fullPath)) {
        console.log(`Missing image in ${filename}: ${src}`);
        // If it's a squarespace-cdn link that's missing, we might want to placeholder it or find why it failed
      }
    }
  });
});
