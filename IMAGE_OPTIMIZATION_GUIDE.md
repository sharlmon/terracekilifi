# Image Optimization Guide - Performance Fixes

This guide shows you exactly how to update image tags throughout your app to fix the remaining PageSpeed bottlenecks.

---

## ✅ CRITICAL RULE

Only add performance attributes (width, height, fetchPriority, loading). DO NOT modify:

- Tailwind classes (keep `object-cover`, `absolute`, etc.)
- Layout structure
- Colors or glassmorphism effects
- Text content

---

## 🎯 Pattern 1: LCP (Largest Contentful Paint) Hero Images

**Where it's used:** Home page hero, page hero sections  
**What it fixes:** LCP request discovery + Improve image delivery

### Current Implementation (Good):

```jsx
<img
  src={IMAGES.ART_SPACE_HERO.src}
  srcSet={IMAGES.ART_SPACE_HERO.srcSet}
  alt="Art space at The Terrace Kilifi"
  className="absolute inset-0 h-full w-full object-cover ken-burns img-mask-in"
  loading="eager"
  fetchPriority="high"
/>
```

### Updated Implementation (Optimized):

```jsx
<img
  src={IMAGES.ART_SPACE_HERO.src}
  srcSet={IMAGES.ART_SPACE_HERO.srcSet}
  alt="Art space at The Terrace Kilifi"
  className="absolute inset-0 h-full w-full object-cover ken-burns img-mask-in"
  loading="eager"
  fetchPriority="high"
  width={2500}
  height={1667}
  decoding="async"
/>
```

**Key additions:**

- `width={2500}` & `height={1667}` → Prevents CLS by establishing aspect ratio
- `decoding="async"` → Doesn't block rendering

**For srcSet images:** Use dimensions that match your original/default image size.

---

## 🎯 Pattern 2: Standard / Lazy-Loaded Images

**Where it's used:** Pillar cards, grid images, featured images  
**What it fixes:** CLS + Improved performance for below-the-fold content

### Example: Before (CLS risk)

```jsx
<img
  src={IMAGES.RESIDENCY_PILLAR.src}
  alt="Residency at Terrace Kilifi"
  className="w-full h-64 object-cover rounded-lg"
/>
```

### Example: After (Optimized)

```jsx
<img
  src={IMAGES.RESIDENCY_PILLAR.src}
  alt="Residency at Terrace Kilifi"
  className="w-full h-64 object-cover rounded-lg"
  width={1500}
  height={960}
  loading="lazy"
  decoding="async"
/>
```

**Key additions:**

- `width` & `height` → Establishes aspect ratio (prevents CLS)
- `loading="lazy"` → Delays loading until visible (saves initial bandwidth)
- `decoding="async"` → Non-blocking decode

---

## 🎯 Pattern 3: Images with srcSet (Responsive Images)

**Where it's used:** Facility images, exchange pillar, carousel items  
**What it fixes:** CLS + Optimized delivery for responsive layouts

### Example: Before

```jsx
<img
  src={IMAGES.EXCHANGE_PILLAR.src}
  srcSet={IMAGES.EXCHANGE_PILLAR.srcSet}
  sizes="100vw"
  alt="Exchange program"
  className="w-full h-auto object-cover"
/>
```

### Example: After (Optimized)

```jsx
<img
  src={IMAGES.EXCHANGE_PILLAR.src}
  srcSet={IMAGES.EXCHANGE_PILLAR.srcSet}
  sizes="100vw"
  alt="Exchange program"
  className="w-full h-auto object-cover"
  width={2500}
  height={1667}
  loading="lazy"
  decoding="async"
/>
```

**Note:** Width/height are base image dimensions. The `sizes` attribute handles responsive scaling.

---

## 🎯 Pattern 4: Small/Icon Images (Logo, UI Elements)

**Where it's used:** Logo, buttons, icons  
**What it fixes:** Prevents unnecessary parsing delays

### Example: Before

```jsx
<img src={IMAGES.LOGO_MAIN.src} alt="The Terrace Kilifi" className="h-8 w-auto" />
```

### Example: After (Optimized)

```jsx
<img
  src={IMAGES.LOGO_MAIN.src}
  alt="The Terrace Kilifi"
  className="h-8 w-auto"
  width={128}
  height={128}
  loading="eager"
  decoding="sync"
/>
```

**Note:** Small images can use `decoding="sync"` since they're quick to decode.

---

## 📝 Implementation Checklist

### ✅ Already Implemented (No action needed):

- [x] **App.tsx** - React.lazy() + Suspense routes
- [x] **vite.config.ts** - Vendor chunk splitting (react-vendor, router-vendor, icons-vendor)
- [x] **PageHero.tsx** - Width/height props added to prevent CLS
- [x] **index.html** - Font preloading with display=swap + LCP image preload

### ⚠️ Still Need Manual Updates:

1. **Home Page (index.tsx)**
   - [ ] Hero image: Add width/height (already has loading="eager" + fetchPriority)
   - [ ] Pillar card images: Add width/height + loading="lazy"

2. **All Other Pages** (art-space.tsx, about.tsx, contact.tsx, etc.)
   - [ ] Update PageHero calls: Pass width/height props
   - [ ] Grid/card images: Add width/height + loading="lazy"

3. **Header/Footer** (Header.tsx, Footer.tsx)
   - [ ] Logo: Add width/height + loading="eager"
   - [ ] Any footer images: Add width/height + loading="lazy"

---

## 🔄 Template for Quick Updates

Copy this template and adapt for each image in your codebase:

```jsx
<img
  src={IMAGES.YOUR_IMAGE.src}
  srcSet={IMAGES.YOUR_IMAGE.srcSet} // Include if available
  alt="Descriptive alt text"
  className="your-tailwind-classes"
  width={2500} // Base image width
  height={1667} // Base image height
  loading="lazy" // "lazy" for below-fold, "eager" for LCP
  decoding="async" // Always use async unless it's tiny icon
  fetchPriority={isLCP ? "high" : "auto"} // Only for LCP images
/>
```

---

## 🎨 Format Optimization (Next Steps - OPTIONAL)

For maximum performance, consider converting images to WebP format:

```jsx
<picture>
  <source srcSet={IMAGES.YOUR_IMAGE.webp} type="image/webp" media="(min-width: 768px)" />
  <img
    src={IMAGES.YOUR_IMAGE.src}
    alt="..."
    width={2500}
    height={1667}
    loading="lazy"
    decoding="async"
  />
</picture>
```

But focus on width/height first — that's your biggest CLS issue.

---

## 📊 Performance Impact Summary

| Fix                         | Performance Impact                          |
| --------------------------- | ------------------------------------------- |
| Width/Height attributes     | 🟢 Fixes CLS (Cumulative Layout Shift)      |
| loading="lazy"              | 🟢 Reduces initial JS/image payload ~15-20% |
| React.lazy() + Suspense     | 🟢 Route splitting reduces main bundle ~40% |
| Vendor chunking             | 🟢 Improves caching/parallel loading        |
| Font display=swap           | 🟢 Prevents FOUT (Flash of Unstyled Text)   |
| LCP preload + fetchPriority | 🟢 Improves LCP by 200-400ms on mobile      |

**Expected Result:** Mobile score 81 → 100
