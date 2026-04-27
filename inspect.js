const fs = require('fs');
const cheerio = require('cheerio');

const html = fs.readFileSync('index.html', 'utf8');
const $ = cheerio.load(html);

console.log("Headers:");
$('h1, h2, h3').each((i, el) => {
  const text = $(el).text().trim();
  if (text.length > 0 && text.length < 50) {
    console.log(el.tagName + ": " + text);
  }
});

console.log("\nTeam members:");
$('*').filter((i, el) => $(el).text().includes('Kuriba')).each((i, el) => {
  console.log(el.tagName + " class: " + $(el).attr('class'));
});
