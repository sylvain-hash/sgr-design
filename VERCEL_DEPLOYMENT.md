# SGR Design — Vercel Deployment Guide

## Overview

This is a static React 19 + Tailwind CSS 4 website built with Vite. It's ready to deploy on Vercel as a static site.

## Quick Start

### Option 1: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Navigate to project directory
cd sgr-design

# Deploy
vercel
```

### Option 2: Deploy via GitHub

1. Push this repository to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Select your GitHub repository
5. Vercel will auto-detect Vite and configure build settings
6. Click "Deploy"

### Option 3: Deploy via Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Select "Import Git Repository" or upload this folder as a ZIP
4. Configure project settings:
   - **Framework Preset**: Vite
   - **Build Command**: `pnpm build`
   - **Output Directory**: `dist`
5. Click "Deploy"

## Environment Variables

The following environment variables are optional and pre-configured in `vercel.json`:

- `VITE_APP_TITLE` — Website title (default: "SGR Design Ltd.")
- `VITE_APP_LOGO` — Logo text (default: "SGR Design Ltd. | Residential Design")

To add custom environment variables:

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add any additional variables needed

## Build & Preview Locally

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Project Structure

```
sgr-design/
├── client/
│   ├── public/              # Static assets (favicon, robots.txt, etc.)
│   ├── src/
│   │   ├── pages/          # Page components
│   │   ├── components/     # Reusable UI components
│   │   ├── contexts/       # React contexts
│   │   ├── hooks/          # Custom React hooks
│   │   ├── lib/            # Utility functions
│   │   ├── App.tsx         # Main app component with routes
│   │   ├── main.tsx        # React entry point
│   │   └── index.css       # Global styles & design tokens
│   └── index.html          # HTML template
├── package.json            # Dependencies & scripts
├── vite.config.ts          # Vite configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
├── vercel.json             # Vercel deployment configuration
└── .vercelignore           # Files to exclude from deployment
```

## Key Features

- **React 19** — Latest React with hooks and concurrent rendering
- **Tailwind CSS 4** — Utility-first CSS framework with @theme support
- **Vite** — Lightning-fast build tool and dev server
- **TypeScript** — Type-safe development
- **shadcn/ui** — Pre-built accessible UI components
- **Wouter** — Lightweight client-side routing
- **Framer Motion** — Smooth animations and transitions
- **Responsive Design** — Mobile-first, fully responsive layout

## Performance Optimization

The `vercel.json` configuration includes:

- **Caching Headers** — HTML cached for 1 hour, assets cached for 1 day
- **SPA Rewrite** — All routes rewritten to `index.html` for client-side routing
- **Automatic Compression** — Vercel automatically gzips assets

## Troubleshooting

### Build fails with "Command not found: pnpm"

Vercel uses `pnpm` by default. If you prefer `npm` or `yarn`:

1. Update `vercel.json`:
   ```json
   {
     "buildCommand": "npm run build"
   }
   ```

2. Or use Vercel dashboard: **Settings** → **Build & Development** → **Build Command** → `npm run build`

### Pages not loading after deployment

Ensure `vercel.json` includes the SPA rewrite rule (already configured):

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### Environment variables not working

1. Verify variables are set in Vercel dashboard
2. Ensure variable names start with `VITE_` for client-side access
3. Redeploy after adding/updating variables

## Support

For issues with Vercel deployment, see:
- [Vercel Docs](https://vercel.com/docs)
- [Vite Docs](https://vitejs.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

---

**Deployed on:** Vercel  
**Framework:** React 19 + Vite  
**Build Tool:** Vite  
**Package Manager:** pnpm
