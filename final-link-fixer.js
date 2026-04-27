const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const files = ['index.html', 'art-space.html', 'arts-residency.html', 'artists-exchange.html'];

files.forEach(filename => {
    let html = fs.readFileSync(filename, 'utf8');
    const $ = cheerio.load(html);
    
    // 1. Fix all navigation links to be relative and point to the .html files
    $('a').each((i, el) => {
        let href = $(el).attr('href');
        if (href) {
            // Remove the live domain if it's still there
            href = href.replace('https://www.terracekilifi.com', '');
            href = href.replace('https://terracekilifi.com', '');
            
            // Remove leading slash to make it strictly relative to current directory
            if (href.startsWith('/')) {
                href = href.substring(1);
            }
            
            // Map common paths to their local .html files
            if (href === '' || href === 'index' || href === '/') {
                $(el).attr('href', 'index.html');
            } else if (href === 'art-space' || href === 'art-space/') {
                $(el).attr('href', 'art-space.html');
            } else if (href === 'arts-residency' || href === 'arts-residency/') {
                $(el).attr('href', 'arts-residency.html');
            } else if (href === 'artists-exchange' || href === 'artists-exchange/') {
                $(el).attr('href', 'artists-exchange.html');
            } else {
                $(el).attr('href', href);
            }
        }
    });

    // 2. Clear out the Squarespace authenticUrl and baseUrl to prevent JS redirects
    let content = $.html();
    content = content.replace(/"authenticUrl":\s*"[^"]*"/g, '"authenticUrl": ""');
    content = content.replace(/"baseUrl":\s*"[^"]*"/g, '"baseUrl": ""');
    content = content.replace(/"primaryDomain":\s*"[^"]*"/g, '"primaryDomain": "localhost"');
    
    // 3. Fix any absolute links in the JSON-like contexts
    content = content.replace(/https:\/\/www\.terracekilifi\.com/g, '');
    content = content.replace(/https:\/\/terracekilifi\.com/g, '');
    
    // 4. Ensure our custom CSS/JS are still correctly linked
    // (They should be relative already, but let's be sure)
    
    fs.writeFileSync(filename, content, 'utf8');
    console.log(`Final link fix applied to ${filename}`);
});
