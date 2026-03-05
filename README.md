# Full-Stack Engineer Portfolio

A comprehensive, production-ready portfolio website showcasing end-to-end engineering capabilities, from frontend polish to backend reliability and infrastructure automation.

## 🎯 Overview

This portfolio demonstrates senior full-stack competence through:

- **End-to-end ownership**: Frontend, backend, infrastructure, testing, and monitoring
- **Measurable impact**: Each project includes quantifiable outcomes
- **Engineering craft**: Polished UI, architecture diagrams, accessible components
- **Production-grade**: Performance-optimized, accessible, and well-tested

## ✨ Features

### Design System

- **42+ accessible components** built with Radix UI primitives
- **Design tokens** for colors, typography, spacing, and motion
- **Dark mode support** via CSS variables
- **Motion system** with standardized easings and durations
- **WCAG 2.1 AA compliant** with keyboard navigation support

### Pages

1. **Home** - Hero section with stats, featured projects, and skills showcase
2. **About** - Professional timeline, technical skills matrix, and hiring interests
3. **Projects** - Curated portfolio of 4 flagship projects
4. **Case Studies** - Deep technical dives with architecture, metrics, and learnings
5. **Contact** - Multiple contact methods and inquiry form

### Technical Highlights

- **React Router Data Mode** for client-side routing
- **Motion (Framer Motion)** for smooth, purposeful animations
- **TypeScript** for type safety across the codebase
- **Tailwind CSS v4** for utility-first styling
- **Responsive design** mobile-first approach
- **Performance optimized** with lazy loading and code splitting
- **Accessibility first** with ARIA labels, focus management, and keyboard nav

## 🚀 Tech Stack

### Frontend
- React 18.3
- TypeScript
- Tailwind CSS v4
- Motion (Framer Motion)
- React Router 7
- Radix UI components
- Lucide icons

### Development
- Vite
- PostCSS
- ESLint
- Prettier (recommended)

## 📁 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── ui/              # Radix UI components
│   │   ├── Header.tsx       # Navigation header
│   │   ├── Footer.tsx       # Site footer
│   │   └── ProjectCard.tsx  # Project preview card
│   ├── pages/
│   │   ├── Root.tsx         # Layout wrapper
│   │   ├── Home.tsx         # Landing page
│   │   ├── About.tsx        # About page
│   │   ├── Projects.tsx     # Projects list
│   │   ├── CaseStudy.tsx    # Project detail
│   │   ├── Contact.tsx      # Contact page
│   │   └── NotFound.tsx     # 404 page
│   ├── data/
│   │   └── projects.ts      # Project data
│   ├── lib/
│   │   └── motion.ts        # Motion system tokens
│   ├── routes.tsx           # React Router config
│   └── App.tsx              # Root component
└── styles/
    ├── theme.css            # Design tokens & variables
    ├── tailwind.css         # Tailwind config
    └── fonts.css            # Font imports
```

## 🎨 Design System

### Motion Tokens

```typescript
duration = {
  fast: 0.12s,    // Hover, press interactions
  medium: 0.22s,  // Transitions, toasts
  slow: 0.36s     // Route changes, modals
}

easing = {
  standard: [0.2, 0.8, 0.2, 1],  // Smooth, natural
  sharp: [0.4, 0.0, 0.2, 1],     // Quick, precise
  smooth: [0.4, 0.0, 0.6, 1]     // Elegant, fluid
}
```

### Animation Variants

- **fadeInUp**: Fade + vertical slide (8px)
- **fadeIn**: Simple opacity transition
- **scaleIn**: Fade + scale (95% → 100%)
- **slideInRight**: Fade + horizontal slide
- **hoverLift**: Scale up 2% on hover
- **hoverPress**: Scale down 2% on press

## 📊 Portfolio Projects

### 1. E-Commerce Platform
**Impact**: 18% conversion increase, 60% LCP reduction  
**Tech**: React, Next.js, Node.js, PostgreSQL, Redis, Kubernetes

### 2. Design System
**Impact**: 42 components, 67% team adoption, 40% dev time reduction  
**Tech**: React, TypeScript, Storybook, Radix UI, Chromatic

### 3. Real-Time Dashboard
**Impact**: 50k events/sec, <100ms latency, real-time updates  
**Tech**: React, WebSockets, Redis, TimescaleDB, Recharts

### 4. CI/CD Automation
**Impact**: 90% deployment time reduction, 100% success rate  
**Tech**: GitHub Actions, Docker, Kubernetes, Terraform

## 🎯 Performance Targets

- **Lighthouse Performance**: 90+ (desktop), 70+ (mobile)
- **Accessibility**: 90+ (WCAG 2.1 AA)
- **Best Practices**: 90+
- **SEO**: 90+

## ♿ Accessibility Features

- Semantic HTML5 landmarks
- Keyboard navigation for all interactive elements
- Focus indicators (3px outline on :focus-visible)
- ARIA labels and live regions
- Skip navigation links
- Color contrast compliance (WCAG AA)
- Reduced motion support
- Screen reader tested

## 📝 Customization Guide

### Update Personal Information

1. **Header/Footer links**: Edit `src/app/components/Header.tsx` and `Footer.tsx`
2. **Contact methods**: Update `contactMethods` in `src/app/pages/Contact.tsx`
3. **Projects**: Modify `src/app/data/projects.ts` with your projects
4. **Skills**: Edit skills arrays in `Home.tsx` and `About.tsx`
5. **Timeline**: Update `timeline` in `About.tsx`

### Add New Projects

```typescript
// src/app/data/projects.ts
{
  id: "5",
  slug: "my-project",
  title: "My Amazing Project",
  tagline: "One-line hook",
  summary: "2-3 sentence overview",
  role: "Your role",
  timeline: "Duration",
  team: "Team size",
  tech: ["React", "Node.js", ...],
  impact: ["Metric 1", "Metric 2", ...],
  // ... full project data
}
```

### Customize Theme

```css
/* src/styles/theme.css */
:root {
  --primary: #your-color;
  --background: #your-color;
  /* ... other tokens */
}
```

## 🚢 Deployment

This portfolio can be deployed to:

- **Vercel** (recommended for Next.js/React)
- **Netlify**
- **GitHub Pages**
- **AWS S3 + CloudFront**
- **Any static hosting provider**

### Build for Production

```bash
npm run build
```

Output will be in `dist/` directory.

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px
- **Wide**: > 1280px

## 🔧 Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📋 Launch Checklist

- [ ] Update all personal information (name, email, links)
- [ ] Replace project data with your projects
- [ ] Add your professional timeline
- [ ] Update tech skills matrix
- [ ] Test all navigation flows
- [ ] Verify mobile responsiveness
- [ ] Check accessibility (run axe DevTools)
- [ ] Test keyboard navigation
- [ ] Run Lighthouse audit
- [ ] Optimize images (WebP, srcset)
- [ ] Test contact form
- [ ] Add Google Analytics (optional)
- [ ] Configure meta tags for SEO
- [ ] Deploy to production
- [ ] Test production build

## 🎓 Learning Resources

### Case Study Template

Each project follows this structure:
1. Project title + tagline
2. One-line summary with measurable outcome
3. Role & responsibilities
4. Timeline & team
5. Problem/context (3 bullets)
6. Constraints & success criteria
7. Solution overview + architecture
8. Deep dives (Frontend, Backend, Infra, Testing)
9. Implementation highlights (code snippets)
10. Outcomes & metrics
11. Key learnings

### Interview Talking Points

For each project, be ready to discuss:
- Architecture decisions and tradeoffs
- Measurable impact (1 metric minimum)
- Technical decisions you're proud of (2+)
- Failure handling (retry logic, idempotency)
- Accessibility approach
- Observability & monitoring

## 📄 License

MIT License - feel free to use this as a template for your own portfolio.

## 🙏 Credits

Built with modern web technologies:
- [React](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Motion](https://motion.dev)
- [Radix UI](https://radix-ui.com)
- [Lucide Icons](https://lucide.dev)
- [React Router](https://reactrouter.com)

---

**Built by Full-Stack Engineers, for Full-Stack Engineers.**

Portfolio ready ✨ • Production grade 🚀 • Accessible by design ♿
