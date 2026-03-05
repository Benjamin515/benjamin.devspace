# Portfolio Implementation Guide

Quick reference for implementing and customizing your Full-Stack Engineer portfolio.

## 🎯 Quick Start

### 1. Update Personal Information

#### Contact Details
**File**: `src/app/pages/Contact.tsx`

```typescript
const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "YOUR_EMAIL@example.com",  // ← Change this
    href: "mailto:YOUR_EMAIL@example.com",
  },
  // ... update other contact methods
];
```

#### Social Links
**File**: `src/app/components/Footer.tsx`

```typescript
const navigation = {
  social: [
    {
      name: "GitHub",
      href: "https://github.com/YOUR_USERNAME",  // ← Change this
      icon: Github,
    },
    // ... update other links
  ],
};
```

#### Header Branding
**File**: `src/app/components/Header.tsx`

```tsx
<span className="text-xl font-semibold">
  <span className="text-primary">Your Name</span>  {/* ← Change this */}
</span>
```

### 2. Add Your Projects

**File**: `src/app/data/projects.ts`

Replace the sample projects with your own:

```typescript
export const projects: Project[] = [
  {
    id: "1",
    slug: "your-project-slug",  // Used in URL: /projects/your-project-slug
    title: "Your Project Title",
    tagline: "One compelling sentence about the project",
    summary: "2-3 sentences describing what you built and the impact",
    
    // Metadata
    role: "Your Role (e.g., Lead Full-Stack Engineer)",
    timeline: "Duration (e.g., 6 months, Jan 2025 – Jun 2025)",
    team: "Team composition (e.g., 4 engineers, 1 designer, 1 PM)",
    
    // Tech stack - be specific
    tech: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL"],
    
    // Measurable impact (3-5 bullets)
    impact: [
      "Reduced page load time from X → Y",
      "Increased conversion rate by Z%",
      "Achieved Lighthouse score 90+",
    ],
    
    // Hero image from Unsplash or your own
    hero: "https://images.unsplash.com/photo-...",
    
    // Problem statement (2-4 bullets)
    problem: [
      "Specific pain point with data",
      "Another measurable problem",
    ],
    
    // Project constraints (2-4 bullets)
    constraints: [
      "Budget: $X engineering time",
      "Target: <2s page load",
      "Must work with legacy system",
    ],
    
    // Success criteria (2-4 bullets)
    successCriteria: [
      "Metric X < Y",
      "Zero critical bugs in first 30 days",
    ],
    
    // Technical deep dives - be detailed!
    frontend: {
      title: "Component Architecture & Performance",
      description: "1-2 sentence overview of frontend approach",
      highlights: [
        "Specific implementation detail with numbers",
        "Another technical decision with rationale",
        "Performance optimization with before/after metrics",
      ],
    },
    
    backend: {
      title: "API Design & Data Flow",
      description: "1-2 sentence overview of backend approach",
      highlights: [
        "API design pattern (REST/GraphQL) + specifics",
        "Data modeling decisions",
        "Performance/scaling tactics",
      ],
    },
    
    infra: {
      title: "DevOps & Infrastructure",
      description: "1-2 sentence overview of infra setup",
      highlights: [
        "Deployment strategy (Docker, K8s, etc.)",
        "CI/CD pipeline details",
        "Monitoring & observability setup",
      ],
    },
    
    testing: {
      title: "Quality Assurance & Testing",
      description: "1-2 sentence overview of testing approach",
      highlights: [
        "Test coverage: X% (tool name)",
        "E2E testing strategy",
        "Performance/load testing results",
      ],
    },
    
    // Measurable outcomes - critical!
    outcomes: [
      { metric: "Page Load Time", value: "4.5s → 1.8s (-60%)" },
      { metric: "Conversion Rate", value: "+18%" },
      { metric: "Lighthouse Score", value: "92/100" },
    ],
    
    // Key learnings (2 bullets)
    learnings: [
      "What you learned about technology/architecture",
      "What you'd do differently or what had high ROI",
    ],
    
    // Project links (all optional)
    links: {
      live: "https://your-project.com",      // Optional
      code: "https://github.com/you/repo",   // Optional
      storybook: "https://storybook.com",    // Optional
    },
  },
  // Add more projects...
];
```

### 3. Update About Page

**File**: `src/app/pages/About.tsx`

#### Professional Timeline

```typescript
const timeline = [
  {
    year: "2024 - Present",
    role: "Your Current Role",
    company: "Your Company",
    description: "What you're doing and the impact you're making.",
  },
  // Add more timeline entries...
];
```

#### Technical Skills

```typescript
const technicalSkills = [
  {
    category: "Languages",
    skills: [
      { name: "TypeScript", level: "Expert", years: "5+" },
      // Add your skills...
    ],
  },
  // Add more categories...
];
```

### 4. Customize Home Page

**File**: `src/app/pages/Home.tsx`

#### Stats

```typescript
const stats = [
  { label: "Years Experience", value: "YOUR_YEARS+" },
  { label: "Projects Shipped", value: "YOUR_COUNT+" },
  { label: "Lighthouse Score", value: "90+" },
];
```

#### Skills

```typescript
const skills = [
  { 
    category: "Frontend", 
    items: ["Your", "Tech", "Stack"], 
    icon: Code2 
  },
  // Update with your skills...
];
```

## 🎨 Design Customization

### Update Color Scheme

**File**: `src/styles/theme.css`

```css
:root {
  /* Primary brand color */
  --primary: #030213;  /* ← Change to your brand color */
  --primary-foreground: oklch(1 0 0);
  
  /* Background */
  --background: #ffffff;  /* ← Change if needed */
  --foreground: oklch(0.145 0 0);
  
  /* Accent colors */
  --accent: #e9ebef;
  
  /* Update other colors as needed */
}
```

### Add Custom Fonts

**File**: `src/styles/fonts.css`

```css
/* Import your custom fonts */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
```

Then update theme.css:

```css
body {
  font-family: 'Inter', sans-serif;  /* ← Your font */
}
```

## 📸 Adding Images

### Project Hero Images

Option 1: Use Unsplash (built-in)
```typescript
hero: "https://images.unsplash.com/photo-XXXXXXXXX?w=1600&h=900&fit=crop"
```

Option 2: Use your own images
1. Place image in `public/images/`
2. Reference: `hero: "/images/your-image.jpg"`

### Best Practices
- **Dimensions**: 1600×900px (16:9 ratio)
- **Format**: WebP or JPG
- **Size**: < 200KB (optimize first)
- **Alt text**: Always provide descriptive alt text

## 🚀 Advanced Customization

### Add New Page

1. Create page component: `src/app/pages/YourPage.tsx`
2. Add route in `src/app/routes.tsx`:

```typescript
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      // ... existing routes
      { path: "your-page", Component: YourPage },
    ],
  },
]);
```

3. Add to navigation in `src/app/components/Header.tsx`:

```typescript
const navigation = [
  // ... existing items
  { name: "Your Page", href: "/your-page" },
];
```

### Customize Animations

**File**: `src/app/lib/motion.ts`

```typescript
// Adjust timing
export const duration = {
  fast: 0.15,    // ← Adjust as needed
  medium: 0.25,
  slow: 0.4,
};

// Create custom variants
export const yourCustomAnimation = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 20 },
};
```

### Add Analytics

**File**: `src/app/App.tsx`

```tsx
import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    // Initialize your analytics
    // e.g., Google Analytics, Plausible, etc.
  }, []);
  
  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  );
}
```

## 📋 Pre-Launch Checklist

### Content
- [ ] Updated all personal information
- [ ] Added 3-6 portfolio projects
- [ ] Updated professional timeline
- [ ] Added technical skills
- [ ] Customized contact methods
- [ ] Added resume download link

### Design
- [ ] Customized color scheme (if desired)
- [ ] Added custom fonts (if desired)
- [ ] Optimized all images
- [ ] Tested responsive design on mobile/tablet/desktop

### Technical
- [ ] All navigation links work
- [ ] Contact form submits (or disabled if not connected)
- [ ] No console errors
- [ ] Tested all routes
- [ ] Verified back button works
- [ ] Tested keyboard navigation

### Performance
- [ ] Run Lighthouse audit (target: 90+)
- [ ] Images optimized (< 200KB each)
- [ ] No layout shift on page load
- [ ] Smooth animations (60fps)

### Accessibility
- [ ] All images have alt text
- [ ] Keyboard navigation works
- [ ] Focus indicators visible
- [ ] Color contrast passes WCAG AA
- [ ] Screen reader tested (optional but recommended)
- [ ] Run axe DevTools (0 critical issues)

### SEO
- [ ] Page titles are descriptive
- [ ] Meta descriptions added (optional)
- [ ] Open Graph tags (optional)
- [ ] Sitemap.xml (optional)

## 🐛 Common Issues

### Route Not Found
**Problem**: New page shows 404  
**Solution**: Make sure you added the route to `routes.tsx` and imported the component

### Images Not Loading
**Problem**: Images show broken icon  
**Solution**: Check image URL is valid. For local images, place in `public/` directory

### Animations Not Working
**Problem**: Elements don't animate  
**Solution**: Verify Motion is imported correctly and viewport is set for scroll animations

### Mobile Menu Won't Close
**Problem**: Menu stays open after clicking link  
**Solution**: Already handled in Header.tsx with `onClick={() => setMobileMenuOpen(false)}`

## 💡 Tips for Great Projects

### Write Compelling Taglines
❌ Bad: "E-commerce website"  
✅ Good: "High-performance checkout with sub-2s page loads"

### Use Specific Metrics
❌ Bad: "Improved performance"  
✅ Good: "Reduced LCP from 4.5s → 1.8s (-60%)"

### Show Technical Depth
❌ Bad: "Built with React"  
✅ Good: "Implemented code-splitting with dynamic imports, reducing initial bundle from 240KB → 87KB"

### Explain Impact
❌ Bad: "Added caching"  
✅ Good: "Redis caching reduced API response time from 450ms → 45ms, improving user retention by 23%"

## 📚 Resources

- [React Router Docs](https://reactrouter.com)
- [Motion (Framer Motion) Docs](https://motion.dev)
- [Radix UI](https://radix-ui.com)
- [Tailwind CSS v4](https://tailwindcss.com)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Web.dev Performance](https://web.dev/performance/)

## 🤝 Need Help?

Common questions:
1. **How many projects should I include?** 
   - 3-6 flagship projects is ideal. Quality > quantity.

2. **Should I include unfinished projects?**
   - Only if they demonstrate unique skills. Focus on completed, measurable work.

3. **How detailed should case studies be?**
   - Include enough detail to show expertise but keep it scannable. Use bullets.

4. **What if I don't have metrics?**
   - Estimate conservative numbers or describe qualitative improvements.

---

**Happy building! 🚀**
