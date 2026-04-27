const fs = require('fs');
const cheerio = require('cheerio');

const html = fs.readFileSync('arts-residency.html', 'utf8');
const $ = cheerio.load(html);

console.log("Paragraphs in arts-residency.html:");
$('p').each((i, el) => {
  const text = $(el).text().trim().substring(0, 80);
  if (text.length > 0) {
    console.log(i + ": " + text.replace(/\n/g, ' '));
  }
});
