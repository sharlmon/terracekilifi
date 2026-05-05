# The Terrace Kilifi

An artist-led, independent arts space and residency on Kilifi Creek, Kenya.

## Technical Foundation

This project has been refactored into a clean, stable **React + Vite** architecture. It is fully static-site friendly and designed to deploy instantly on GitHub Pages, Vercel, or Netlify.

- **Frontend**: React 19 + Vite 7
- **Routing**: React Router 6 (Client-side)
- **Styling**: Tailwind CSS 4 (Vanilla CSS based)
- **Icons**: Lucide React
- **Animations**: CSS keyframes + Intersection Observer (Reveal components)

## Local Development

1. **Install Dependencies**:

   ```bash
   npm install
   ```

2. **Run Dev Server**:

   ```bash
   npm run dev
   ```

   The site will be available at `http://localhost:8080`.

3. **Build for Production**:
   ```bash
   npm run build
   ```
   Static files will be generated in the `dist` directory.

## Deployment Instructions

### GitHub Pages (via GitHub Actions)

1. Go to your repository **Settings** > **Pages**.
2. Under **Build and deployment** > **Source**, select **GitHub Actions**.
3. Create a `.github/workflows/deploy.yml` with the standard Vite/React deployment workflow.

### Vercel / Netlify

1. Connect your repository to Vercel or Netlify.
2. The default settings should work automatically:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Framework Preset**: Vite (detected automatically)

## Features & Design

- **100% Design Preservation**: Every pixel, color, and animation from the original design is kept.
- **No Complex Dependencies**: Removed TanStack Start, Wrangler, and other server-side dependencies for a pure static export.
- **Zero Configuration**: Works out of the box with zero environment variables required.
- **Form Handling**: Contact forms are ready for static handling (Netlify Forms, Formspree, etc.).
