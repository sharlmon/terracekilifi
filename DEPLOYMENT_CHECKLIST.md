# GitHub Pages Deployment Checklist
**Project:** The Terrace Kilifi  
**Repository:** sharlmon/terracekilifi  
**Status:** ✅ READY FOR DEPLOYMENT  
**Last Updated:** May 5, 2026

---

## Pre-Deployment Verification

### ✅ Build System
- [x] `npm run build` completes successfully (12.26s)
- [x] Production build creates `/dist` folder
- [x] All assets are bundled correctly
- [x] No build errors or warnings
- [x] Source maps generated (if enabled)

### ✅ Image Assets
- [x] All 157+ images correctly copied to `dist/assets/images/`
- [x] Image paths use centralized constants from `imageConstants.ts`
- [x] Base URL correctly set to `/terracekilifi/` in both:
  - `vite.config.ts`: `base: "/terracekilifi/"`
  - `imageConstants.ts`: `BASE_URL = "/terracekilifi"`
- [x] Responsive image attributes:
  - `fetchPriority="high"` on hero images
  - `loading="lazy"` on secondary images
  - `sizes="100vw"` configured
- [x] All image alt text present and descriptive

### ✅ Navigation & Routing
- [x] React Router configured for SPA
- [x] 6 main routes + 404 handler:
  - `/` → Home
  - `/about` → About  
  - `/art-space` → Art Space
  - `/residency` → Residency
  - `/exchange` → Exchange
  - `/contact` → Contact
  - `*` → Custom 404
- [x] No client-side routing errors detected
- [x] `.nojekyll` file present in dist (enables SPA routing)
- [x] `404.html` configured for GitHub Pages

### ✅ GitHub Pages Configuration
- [x] Repository homepage set: `https://sharlmon.github.io/terracekilifi`
- [x] Build output path: `dist/` (configured in workflow)
- [x] No external dependencies blocking deployment
- [x] gh-pages v6.3.0 installed

### ✅ GitHub Actions Workflow
- [x] `.github/workflows/deploy.yml` exists and is valid
- [x] Triggers configured:
  - Push to `main` branch
  - Pull requests to `main` (preview only)
  - Manual workflow dispatch
- [x] Node.js v20 configured (LTS)
- [x] npm dependencies cached for speed
- [x] Build step runs: `npm run build`
- [x] Deployment to GitHub Pages automated
- [x] Concurrency configured (1 concurrent deployment)

### ✅ Accessibility
- [x] PageHero component updated with `imageAlt` prop
- [x] All page hero images have descriptive alt text:
  - About: "The Terrace artist residency building overlooking Kilifi Creek"
  - Art Space: "Art space gallery at The Terrace with creative exhibitions and performances"
  - Residency: "Creekside residency buildings nestled in the natural landscape of Kilifi"
  - Exchange: "Cultural exchange and collaborative art-making space at The Terrace"
  - Contact: "Sunset over Kilifi Creek at The Terrace sanctuary"
- [x] Homepage hero: "Mangroves at sunrise on Kilifi Creek"
- [x] UI elements have proper aria-labels

### ✅ Performance
- [x] CSS bundled: 42.78 kB (gzip: 7.89 kB)
- [x] JavaScript bundled: 266.52 kB (gzip: 81.76 kB)
- [x] 1743 modules transformed successfully
- [x] No unused imports or dead code detected
- [x] Tailwind CSS configured with vite plugin

### ✅ SEO & Meta Tags
- [x] Title: "The Terrace Kilifi — Artist-led Arts Space & Residency"
- [x] Meta description present
- [x] OG tags configured
- [x] Twitter card configured
- [x] Structured data (Schema.org) implemented
- [x] Fonts preconnected (Google Fonts)

---

## Deployment Steps

### Step 1: Verify Local Build
```bash
npm run build
# ✅ Confirmed - 12.26s build time, all assets bundled
```

### Step 2: Preview Build Output
```bash
npm run preview
# Visit http://localhost:4173 to preview production build
```

### Step 3: Deploy via GitHub Actions (Automated)
**Trigger one of:**
- Push to `main` branch
- Pull request to `main` branch (preview only)
- Manual trigger via Actions tab on GitHub

**Expected workflow:**
1. Checkout code
2. Setup Node.js 20
3. Install dependencies (cached)
4. Run `npm run build`
5. Configure GitHub Pages
6. Upload `dist/` artifact
7. Deploy to GitHub Pages

### Step 4: Verify Live Deployment
**Live URL:** https://sharlmon.github.io/terracekilifi/

**Verification checklist:**
- [ ] Homepage loads correctly
- [ ] Navigation works (all links functional)
- [ ] Images load from `/terracekilifi/assets/images/`
- [ ] All pages accessible (About, Art Space, Residency, Exchange, Contact)
- [ ] 404 page works for invalid routes
- [ ] Mobile responsive design intact
- [ ] CSS styling applied correctly
- [ ] Form functionality (Contact page)

---

## Rollback Procedure

If issues occur after deployment:

1. **Check GitHub Actions logs:**
   - Go to: Repository → Actions tab
   - View failed workflow run
   - Check error output

2. **Revert deployment:**
   - Option A: Revert commit on `main` branch
   - Option B: Manual GitHub Pages settings reset

3. **Common Issues:**
   - Images not loading: Check base URL in imageConstants.ts
   - Routes not working: Verify .nojekyll exists in dist/
   - Build fails: Check `npm run build` locally first

---

## Maintenance

### Regular Checks
- [ ] Monitor GitHub Actions for build failures
- [ ] Test all routes monthly
- [ ] Verify images load correctly
- [ ] Check accessibility (WCAG 2.1)

### Update Process
1. Make changes on feature branch
2. Create pull request (auto-preview deployment)
3. Review in live environment
4. Merge to `main` (auto-production deployment)
5. Verify live site

---

## Tech Stack Versions
- React: 19.2.0
- React Router: 6.30.3
- TypeScript: 5.8.3
- Vite: 7.3.1
- Tailwind CSS: 4.2.1
- Node.js (GitHub Actions): 20 (LTS)
- gh-pages: 6.3.0

---

## Support & References
- **GitHub Pages Docs:** https://docs.github.com/en/pages
- **Vite GitHub Pages Guide:** https://vitejs.dev/guide/static-deploy.html
- **React Router SPA Routing:** https://github.com/remix-run/react-router
- **Repository:** https://github.com/sharlmon/terracekilifi

---

**✅ STATUS: DEPLOYMENT READY**

All systems operational. Ready to deploy to GitHub Pages.
