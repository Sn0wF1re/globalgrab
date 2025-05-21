# GlobalGrab Deployment Guide

This guide provides instructions for deploying the GlobalGrab website.

## Prerequisites

- Node.js 16.x or later
- npm 7.x or later

## Preparing for Deployment

1. **Install dependencies**

```bash
cd /path/to/globalgrab/nuxt-version
npm install
```

2. **Build the project**

For server-side rendering (SSR):
```bash
npm run build
```

For static site generation (SSG):
```bash
npm run generate
```

## Deployment Options

### Option 1: Deploy to a Node.js Server (SSR)

1. After running `npm run build`, copy the `.output` directory to your server
2. Install only production dependencies: `npm install --production`
3. Start the server: `node .output/server/index.mjs`

### Option 2: Deploy as a Static Site (SSG)

1. After running `npm run generate`, the `.output/public` directory will contain your static site
2. Upload this directory to any static hosting service (Netlify, Vercel, GitHub Pages, etc.)

### Option 3: Deploy to Vercel

1. Connect your repository to Vercel
2. Vercel will automatically detect Nuxt and apply the correct build settings
3. Set the following environment variables if needed:
   - `NITRO_PRESET=vercel-edge` (for edge functions)
   - Or `NITRO_PRESET=vercel` (for serverless functions)

## Post-Deployment Tasks

1. **Verify all pages are working**
2. **Test your forms**
3. **Submit your sitemap.xml to Google Search Console**
4. **Set up monitoring and analytics**

## SEO Checklist

- ✅ Meta tags for all pages
- ✅ JSON-LD structured data
- ✅ Sitemap.xml present and valid
- ✅ Robots.txt properly configured
- ✅ Images optimized and have alt text
- ✅ Canonical URLs set up

## Maintenance

- Keep dependencies updated
- Monitor website performance
- Regularly update content and review analytics
