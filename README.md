# Haappy Herbs – Grand Launch Digital Invitation

A two-section cinematic invitation (Next.js 15 + React 19 + Tailwind CSS 4 + Framer Motion + Lucide).

- **Section 01 – Grand Launch**: landscape brand film (`public/media/hero.mp4`) — arched frame on phones, full-bleed cinema on desktop.
- **Section 02 – The Invitation**: invitation card with Shruthika Arjun's photographs, the two portrait films (`dubai.mp4`, `diwali.mp4`), event details, Get Directions (Google Maps) and Add to Calendar (`/haappy-herbs-grand-launch.ics`, 15 Nov 2026 4:00 PM Dubai time), plus the four launch products (images served from the official haappyherbs.com Shopify CDN).

## Run locally
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to ./out
```

## Deploy to Vercel
```bash
npx vercel login
npx vercel --prod
```
Accept the defaults (framework: Next.js). The site deploys to `https://<project-name>.vercel.app`.
