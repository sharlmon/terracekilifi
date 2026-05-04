# Quick Deployment Reference

## One-Line Commands

### On VPS (Linux/Mac)
```bash
cd /path/to/DEPLOYMENT && chmod +x deploy.sh && ./deploy.sh
```

### On Windows
```cmd
cd C:\path\to\DEPLOYMENT && deploy.bat
```

## What's Included

✓ **Full Source Code** - All React/TypeScript components  
✓ **Image Assets** - 10 high-quality images in `kilifiimages/`  
✓ **Configuration** - All build configs (Vite, Tailwind, TypeScript, ESLint)  
✓ **Deployment Scripts** - Automated setup for Linux/Windows  
✓ **Documentation** - Complete guide in `DEPLOYMENT_GUIDE.md`  

## File Structure
```
DEPLOYMENT/
├── src/                    # React source code
│   ├── components/        # UI and site components
│   ├── routes/           # Page routes
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utilities
│   └── styles.css        # Tailwind styles
├── kilifiimages/         # All 10 image assets
├── package.json          # Dependencies
├── vite.config.ts        # Build configuration
├── tsconfig.json         # TypeScript config
├── eslint.config.js      # Linting rules
├── deploy.sh             # Linux/Mac deployment script
├── deploy.bat            # Windows deployment script
└── DEPLOYMENT_GUIDE.md   # Full documentation
```

## Quick Steps

1. **Upload to VPS**
   ```bash
   scp -r ./DEPLOYMENT user@your-vps.com:/var/www/
   ```

2. **Build**
   ```bash
   cd /var/www/DEPLOYMENT
   npm install
   npm run build
   ```

3. **Configure Web Server**
   - Point document root to: `/var/www/DEPLOYMENT/dist`
   - Use Nginx/Apache config from `DEPLOYMENT_GUIDE.md`

4. **Go Live**
   - Enable HTTPS with Let's Encrypt
   - Restart web server

## Troubleshooting

**Images not showing?**
- Check `/var/www/DEPLOYMENT/kilifiimages/` exists
- Verify web server permissions: `chmod 755 /var/www/DEPLOYMENT/dist`

**404 errors on routes?**
- Ensure web server serves `index.html` for all routes (SPA configuration)

**Build fails?**
- Run `npm install` before `npm run build`
- Check Node.js version: `node -v` (requires v18+)

## Support

See `DEPLOYMENT_GUIDE.md` for detailed documentation, web server configs, SSL setup, and more.
