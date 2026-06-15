# Harsh Gupta — Portfolio

A production-ready Next.js 15 portfolio built for engineering recruiters.

## Stack

- **Next.js 15** — App Router, RSC, TypeScript
- **Tailwind CSS** — custom design tokens
- **Framer Motion** — subtle, purposeful animations
- **Lucide React** — consistent icon set

## Getting Started

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000).

## Customization

**All content lives in one file:**

```
src/data/portfolio-data.ts
```

Edit this file to update:
- `personalInfo` — name, role, tagline, email, phone, location
- `socialLinks` — GitHub, LinkedIn, Codolio, CodeChef
- `projects` — title, description, tech stack, links, highlights
- `experience` — company, role, duration, location, bullet points
- `skills` — grouped by category
- `resumeLink` — path to your resume PDF

## Deploy

### Vercel (recommended)
```bash
npx vercel
```

### Static export
```bash
npm run build
```

## Performance Targets

- Lighthouse Performance: 95+
- Accessibility: 95+
- Best Practices: 100
- SEO: 95+

## File Structure

```
src/
├── app/
│   ├── layout.tsx       # Root layout + SEO metadata
│   ├── page.tsx         # Entry point
│   ├── globals.css      # Design tokens + base styles
│   ├── sitemap.ts       # Auto-generated sitemap
│   └── robots.ts        # Crawler rules
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx         # Sticky nav + mobile menu
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── AboutSection.tsx
│   │   └── ContactSection.tsx
│   ├── ui/
│   │   ├── ProjectCard.tsx
│   │   ├── SectionHeader.tsx
│   │   └── Reveal.tsx        # Scroll-triggered animation
│   ├── LoadingScreen.tsx     # Hello World intro
│   ├── CursorFollower.tsx    # Subtle cursor dot
│   ├── ScrollProgress.tsx    # Top progress bar
│   └── PortfolioClient.tsx   # Client root
├── data/
│   └── portfolio-data.ts     # Single source of truth
├── hooks/
│   ├── useActiveSection.ts
│   └── useScrollProgress.ts
├── lib/
│   └── utils.ts              # cn() utility
└── types/
    └── index.ts              # TypeScript types
```
