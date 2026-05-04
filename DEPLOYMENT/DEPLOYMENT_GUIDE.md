# The Terrace Kilifi — VPS Deployment Guide

## Quick Start for VPS Deployment

This folder contains everything needed to deploy The Terrace Kilifi website to your VPS.

### Prerequisites
- Node.js (v18+) installed on your VPS
- npm or Bun package manager
- Web server (Nginx recommended) or Node.js server

### Deployment Steps

#### 1. Upload to VPS
Copy this entire `DEPLOYMENT` folder to your VPS:
```bash
scp -r ./DEPLOYMENT user@your-vps.com:/var/www/
```

#### 2. Navigate to the Deployment Folder
```bash
cd /var/www/DEPLOYMENT
```

#### 3. Install Dependencies
```bash
npm install
# OR if using Bun:
# bun install
```

#### 4. Build for Production
```bash
npm run build
# OR if using Bun:
# bun run build
```

This creates a `dist` folder with the optimized static files.

#### 5. Configure Your Web Server

**Using Nginx:**
```nginx
server {
    listen 80;
    server_name your-domain.com;
    
    root /var/www/DEPLOYMENT/dist;
    index index.html;
    
    # Enable gzip compression
    gzip on;
    gzip_types text/plain text/css text/javascript application/javascript image/svg+xml;
    
    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    
    # Serve index.html for all routes (SPA routing)
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

**Using Apache:**
```apache
<VirtualHost *:80>
    ServerName your-domain.com
    DocumentRoot /var/www/DEPLOYMENT/dist
    
    <Directory /var/www/DEPLOYMENT/dist>
        RewriteEngine On
        RewriteBase /
        RewriteRule ^index\.html$ - [L]
        RewriteCond %{REQUEST_FILENAME} !-f
        RewriteCond %{REQUEST_FILENAME} !-d
        RewriteRule . /index.html [L]
    </Directory>
    
    <FilesMatch "\.(js|css|png|jpg|jpeg|gif|svg|woff|woff2)$">
        Header set Cache-Control "max-age=31536000, public"
    </FilesMatch>
</VirtualHost>
```

#### 6. Set File Permissions
```bash
sudo chown -R www-data:www-data /var/www/DEPLOYMENT
sudo chmod -R 755 /var/www/DEPLOYMENT
```

#### 7. Enable HTTPS (Recommended)
Use Let's Encrypt for free SSL/TLS:
```bash
sudo certbot --nginx -d your-domain.com
# OR
sudo certbot --apache -d your-domain.com
```

### Project Structure
```
DEPLOYMENT/
├── kilifiimages/          # All high-quality local assets
├── src/                   # React source code
├── public/               # Static files
├── package.json          # Project dependencies
├── vite.config.ts        # Vite configuration
├── tsconfig.json         # TypeScript configuration
├── wrangler.jsonc        # Cloudflare Workers config (optional)
└── DEPLOYMENT_GUIDE.md   # This file
```

### Image Assets
All 10 high-quality images are included in the `kilifiimages/` folder:
- hero-architecture.jpg
- terrace-workspace.jpg
- garden-sanctuary.jpg
- architectural-detail.jpg
- communal-garden-swings.jpg
- social-collaboration.jpg
- interior-living-space.jpg
- communal-dining.jpg
- balcony-office-view.jpg
- bar-mixology-experience.jpg

### Environment Variables (Optional)
If needed, create a `.env` file in the DEPLOYMENT folder:
```env
VITE_API_URL=https://your-api.com
VITE_APP_NAME=The Terrace Kilifi
```

### Troubleshooting

**Port Already in Use:**
```bash
# Change port in build configuration or run on different port
npm run build
npm run preview -- --port 3000
```

**Permission Denied:**
```bash
sudo chmod -R 755 /var/www/DEPLOYMENT/dist
```

**404 Errors on Routes:**
Ensure your web server is configured to serve `index.html` for all routes (Single Page Application routing).

**Images Not Loading:**
Verify the `kilifiimages/` folder exists and permissions are correct:
```bash
ls -la /var/www/DEPLOYMENT/kilifiimages/
```

### Monitoring & Updates

**View Application Logs (if running Node server):**
```bash
pm2 logs
# OR
journalctl -u your-app-service -f
```

**Update Code:**
```bash
cd /var/www/DEPLOYMENT
git pull origin main  # or your update method
npm install
npm run build
sudo systemctl restart nginx  # or your web server
```

### Performance Tips

1. **Enable GZIP Compression** - Reduces file sizes
2. **Use CDN** - Serve images from CDN for faster delivery
3. **Optimize Images** - Images are already optimized, but consider WebP format
4. **Enable Caching** - Browser cache for static assets (configured in web server examples above)
5. **Monitor Metrics** - Use tools like Google PageSpeed Insights

### Support

For issues or questions about The Terrace Kilifi website, refer to:
- Project Repository: https://github.com/sharlmon/remixofkilifiterrace
- Main Configuration: `vite.config.ts`
- Styling System: `src/styles.css`

---

**Deployment Date:** May 2026  
**Last Updated:** Current Build  
**Site Version:** Production Ready
