const fs = require('fs');
const path = require('path');

const files = ['index.html', 'art-space.html', 'arts-residency.html', 'artists-exchange.html'];

files.forEach(filename => {
    let html = fs.readFileSync(filename, 'utf8');
    
    // Fix the navigation links in the header - remove the leading slash to ensure relative loading
    html = html.replace(/href="\/art-space.html"/g, 'href="art-space.html"');
    html = html.replace(/href="\/arts-residency.html"/g, 'href="arts-residency.html"');
    html = html.replace(/href="\/artists-exchange.html"/g, 'href="artists-exchange.html"');
    
    // Restore the correct email address
    html = html.replace(/residency@localhost:8080/g, 'residency@terracekilifi.com');
    
    // Fix Squarespace Context URLs to be relative or localhost
    // We want to make sure the JS doesn't try to redirect to the live site
    html = html.replace(/"authenticUrl":\s*"https:\/\/www\.terracekilifi\.com"/g, '"authenticUrl": ""');
    html = html.replace(/"baseUrl":\s*"https:\/\/www\.terracekilifi\.com"/g, '"baseUrl": "/"');
    
    fs.writeFileSync(filename, html, 'utf8');
    console.log(`Refined URLs in ${filename}`);
});
