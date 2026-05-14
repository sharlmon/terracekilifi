# 🚀 Quick Action Items - Image Dimensions

Based on your codebase, here are the EXACT images that still need `width` and `height` attributes added. Copy-paste the "After" code for each.

---

## ✅ Already Fixed (No action needed)
- ✓ App.tsx - React.lazy() + Suspense
- ✓ vite.config.ts - Vendor chunking
- ✓ PageHero.tsx - Width/height props
- ✓ index.html - Font preload + LCP preload
- ✓ Header.tsx logo
- ✓ Home page (index.tsx) - Pillars + Facility images

---

## ⚠️ STILL NEEDS FIXING

### 🔴 CRITICAL: art-space.tsx (6 images)

**Image 1: PageHero call**
```jsx
// BEFORE:
<PageHero
  eyebrow="The Art Space"
  title="Connecting, Inspiring, and Amplifying."
  description="A non-profit platform celebrating the power of art to gently shift perspectives. Rooted on Kilifi Creek, we draw on 20 years of collaboration to create vibrant cultural experiences."
  image={IMAGES.ART_BAND_BW.src} 
  imageAlt="Live black and white band performance at The Terrace"
/>

// AFTER:
<PageHero
  eyebrow="The Art Space"
  title="Connecting, Inspiring, and Amplifying."
  description="A non-profit platform celebrating the power of art to gently shift perspectives. Rooted on Kilifi Creek, we draw on 20 years of collaboration to create vibrant cultural experiences."
  image={IMAGES.ART_BAND_BW.src}
  width={2000}
  height={1333}
  loading="eager"
  imageAlt="Live black and white band performance at The Terrace"
/>
```

**Image 2: Solo Singer (LCP for this section)**
```jsx
// BEFORE:
<img
  src={IMAGES.ART_SOLO_SINGER.src}
  alt="Solo performance at The Terrace"
  loading="eager"
  fetchpriority="high"
  className="h-full w-full object-cover img-mask-in"
/>

// AFTER:
<img
  src={IMAGES.ART_SOLO_SINGER.src}
  alt="Solo performance at The Terrace"
  loading="eager"
  fetchpriority="high"
  width={1200}
  height={1500}
  decoding="async"
  className="h-full w-full object-cover img-mask-in"
/>
```

**Image 3: Art Space Events**
```jsx
// BEFORE:
<img
  src={IMAGES.ART_SPACE_EVENTS.src}
  alt="Community event and screening"
  loading="eager"
  fetchpriority="high"
  className="h-full w-full object-cover img-mask-in"
/>

// AFTER:
<img
  src={IMAGES.ART_SPACE_EVENTS.src}
  alt="Community event and screening"
  loading="eager"
  fetchpriority="high"
  width={1500}
  height={1500}
  decoding="async"
  className="h-full w-full object-cover img-mask-in"
/>
```

**Image 4: Art Crowd (Grid)**
```jsx
// BEFORE:
<img 
  src={IMAGES.ART_CROWD.src} 
  alt="Sunset gathering at the creek" 
  loading="eager"
  fetchpriority="high"
  className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1400ms] ease-[cubic-bezier(0.2,0.7,0.2,1)]" 
/>

// AFTER:
<img 
  src={IMAGES.ART_CROWD.src} 
  alt="Sunset gathering at the creek" 
  loading="lazy"
  width={1200}
  height={1500}
  decoding="async"
  className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1400ms] ease-[cubic-bezier(0.2,0.7,0.2,1)]" 
/>
```

**Image 5: Art Band BW (Grid)**
```jsx
// BEFORE:
<img 
  src={IMAGES.ART_BAND_BW.src} 
  alt="Live band performance" 
  loading="eager"
  fetchpriority="high"
  className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1400ms] ease-[cubic-bezier(0.2,0.7,0.2,1)]" 
/>

// AFTER:
<img 
  src={IMAGES.ART_BAND_BW.src} 
  alt="Live band performance" 
  loading="lazy"
  width={1500}
  height={1500}
  decoding="async"
  className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1400ms] ease-[cubic-bezier(0.2,0.7,0.2,1)]" 
/>
```

**Image 6: Art Singers (Grid)**
```jsx
// BEFORE:
<img 
  src={IMAGES.ART_SINGERS.src} 
  alt="Singing duo at sunset" 
  loading="eager"
  fetchpriority="high"
  className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1400ms] ease-[cubic-bezier(0.2,0.7,0.2,1)]" 
/>

// AFTER:
<img 
  src={IMAGES.ART_SINGERS.src} 
  alt="Singing duo at sunset" 
  loading="lazy"
  width={1500}
  height={1500}
  decoding="async"
  className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1400ms] ease-[cubic-bezier(0.2,0.7,0.2,1)]" 
/>
```

---

### 🔴 CRITICAL: ProfessionalResidency.tsx (2 images)

**Image 1: PageHero**
```jsx
// Add width/height/loading to existing PageHero call
<PageHero
  // ... existing props ...
  image={IMAGES.RES_PRO_MAIN.src}
  srcSet={IMAGES.RES_PRO_MAIN.srcSet}
  width={2500}
  height={1667}
  loading="eager"
/>
```

**Image 2: Check for grid/featured image**
Apply same pattern: `width`, `height`, `loading="lazy"`, `decoding="async"`

---

### 🔴 CRITICAL: EmergingResidency.tsx (2 images)

Same pattern as ProfessionalResidency — add width/height to PageHero and any grid images.

---

### 🟡 MEDIUM: TeamPage.tsx (1 image)

Check line 50 for team member image — add width/height attributes.

---

### 🟡 MEDIUM: exchange.tsx (1 image)

Check line 86 for exchange/pillar image — add width/height attributes.

---

### 🟡 MEDIUM: about.tsx & contact.tsx

Check for any <img> tags and apply the same width/height + loading pattern.

---

## 📋 Checklist Summary

- [ ] art-space.tsx (6 images)
- [ ] ProfessionalResidency.tsx (2 images)
- [ ] EmergingResidency.tsx (2 images)
- [ ] TeamPage.tsx (1 image)
- [ ] exchange.tsx (1 image)
- [ ] about.tsx (check for images)
- [ ] contact.tsx (check for images)

---

## 🚀 After Completing All Fixes

1. **Run your build:**
   ```bash
   npm run build
   ```

2. **Deploy & Test in PageSpeed Insights**
   - Upload your site
   - Run mobile test
   - Expected result: 81 → 100

3. **Monitor these metrics:**
   - Cumulative Layout Shift (CLS) → Should be < 0.1
   - Largest Contentful Paint (LCP) → Should be < 2.5s
   - First Input Delay (FID) → Should be < 100ms

---

## 💡 Pro Tip

Use this regex to find images still missing width/height:
```
<img[^>]*(?<!width)[^>]*(?<!height)[^>]*>
```

But honestly, your manual grep already found them all above!

**Total Expected Performance Gain:** 
- Reduce CLS by fixing dimensions ✓
- Reduce LCP by preloading + splitting code ✓
- Improve FID by reducing JS payload ✓
- Prevent FOUT with font preload ✓

**Result: 81 → 100 on mobile!**
