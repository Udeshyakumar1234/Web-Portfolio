# Udeshya Kumar — Developer Portfolio

A clean, professional developer portfolio built with **Next.js**, **React**, **TypeScript**, and **Tailwind CSS**.

## Features

- Minimal, professional design focused on experience, projects, and contact
- Smooth scroll navigation with active section highlighting
- Expandable work experience cards
- Interactive skills filter tabs
- Copy-to-clipboard for email and phone
- Scroll-triggered animations with Framer Motion
- Fully responsive mobile layout

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deploy to Vercel

1. Push this repository to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your repository — Vercel auto-detects Next.js
4. Click **Deploy**

No extra configuration is required. Vercel will run `next build` automatically.

### Deploy via CLI (optional)

```bash
npm i -g vercel
vercel
```

## Project Structure

```
app/           # Next.js App Router pages and layout
components/    # React components
data/          # Resume content (edit resume.ts to update info)
public/        # Static assets
```

## Customize

Edit `data/resume.ts` to update your profile, experience, projects, skills, and education.
