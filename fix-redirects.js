const fs = require('fs');
const path = require('path');

function replaceInFiles(dir, oldStr, newStr) {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        
        if (stat.isDirectory()) {
            replaceInFiles(filePath, oldStr, newStr);
        } else if (file.endsWith('.html') || file.endsWith('.js') || file.endsWith('.css') || file.endsWith('.json')) {
            try {
                let content = fs.readFileSync(filePath, 'utf8');
                if (content.includes(oldStr)) {
                    const newContent = content.split(oldStr).join(newStr);
                    fs.writeFileSync(filePath, newContent, 'utf8');
                    console.log(`Replaced in ${filePath}`);
                }
            } catch (e) {
                console.error(`Error in ${filePath}: ${e.message}`);
            }
        }
    });
}

const directoryToScan = '.';

// Replace absolute URLs
replaceInFiles(directoryToScan, '', '');
replaceInFiles(directoryToScan, '', '');
replaceInFiles(directoryToScan, 'localhost:8080', 'localhost:8080');
replaceInFiles(directoryToScan, 'localhost:8080', 'localhost:8080');
replaceInFiles(directoryToScan, '//localhost:8080', '//localhost:8080');
