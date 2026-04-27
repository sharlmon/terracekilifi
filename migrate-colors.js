const fs = require('fs');
const path = require('path');

function replaceInFiles(dir, replacements) {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        
        if (stat.isDirectory()) {
            if (file !== 'node_modules' && !file.startsWith('.')) {
                replaceInFiles(filePath, replacements);
            }
        } else if (file.endsWith('.html') || file.endsWith('.css') || file.endsWith('.js')) {
            try {
                let content = fs.readFileSync(filePath, 'utf8');
                let changed = false;
                
                replacements.forEach(([oldStr, newStr]) => {
                    if (content.includes(oldStr)) {
                        content = content.split(oldStr).join(newStr);
                        changed = true;
                    }
                });
                
                if (changed) {
                    fs.writeFileSync(filePath, content, 'utf8');
                    console.log(`Updated references in ${filePath}`);
                }
            } catch (e) {
                console.error(`Error in ${filePath}: ${e.message}`);
            }
        }
    });
}

const replacements = [
    ['var(--color-warm-ivory)', 'var(--color-warm-ivory)'],
    ['var(--color-sandstone)', 'var(--color-sandstone)'],
    ['var(--color-deep-ocean)', 'var(--color-deep-ocean)'],
    ['var(--color-mangrove)', 'var(--color-mangrove)'],
    ['var(--color-terracotta)', 'var(--color-terracotta)'], // No change needed but for consistency
    ['var(--color-charcoal)', 'var(--color-charcoal)'],
    ['terracotta-accent', 'terracotta-accent'], // Keep classes
    ['deep-ocean-accent', 'deep-ocean-accent'],
    ['mangrove-accent', 'mangrove-accent']
];

replaceInFiles('.', replacements);
