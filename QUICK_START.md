# Quick Start Guide

Get your portfolio up and running in 5 minutes.

## 🚀 Immediate Customization Steps

### Step 1: Update Your Name (2 minutes)

**Header** (`src/app/components/Header.tsx`, line 29):
```tsx
<span className="text-xl font-semibold">
  <span className="text-primary">Your Name</span>  {/* ← Change this */}
</span>
```

**Home Page** (`src/app/pages/Home.tsx`, line 56):
```tsx
<h1>Your Name — Full-Stack Engineer who builds...</h1>
```

**About Page** (`src/app/pages/About.tsx`, line 100):
```tsx
I'm [Your Name], a Full-Stack Engineer...  {/* ← Change this */}
```

### Step 2: Update Contact Info (2 minutes)

**Contact Page** (`src/app/pages/Contact.tsx`, line 14):
```typescript
const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "your.email@example.com",        // ← Change
    href: "mailto:your.email@example.com",  // ← Change
  },
  {
    icon: Github,
    label: "GitHub",
    value: "@yourusername",                 // ← Change
    href: "https://github.com/yourusername", // ← Change
  },
  // ... update all contact methods
];
```

**Footer** (`src/app/components/Footer.tsx`, line 11):
```typescript
const navigation = {
  social: [
    {
      name: "GitHub",
      href: "https://github.com/yourusername",  // ← Change
      icon: Github,
    },
    // ... update all social links
  ],
};
```

### Step 3: Add Your First Project (5 minutes)

**Projects Data** (`src/app/data/projects.ts`):

Replace or edit the first project with your own:

```typescript
{
  id: "1",
  slug: "my-awesome-project",  // URL slug
  title: "My Awesome Project",
  tagline: "What makes it compelling in one sentence",
  summary: "2-3 sentences about what you built and the measurable impact.",
  
  role: "Lead Full-Stack Engineer",
  timeline: "3 months (Oct 2024 – Dec 2024)",
  team: "Solo project",
  
  tech: ["React", "Node.js", "PostgreSQL"],  // Your stack
  
  impact: [
    "Specific metric: X → Y (+Z%)",
    "Another measurable outcome",
    "User impact or business value",
  ],
  
  // Get a hero image from Unsplash
  hero: "https://images.unsplash.com/photo-XXXXX?w=1600&h=900&fit=crop",
  
  problem: [
    "What problem did this solve?",
    "What pain point did users have?",
  ],
  
  constraints: [
    "Budget: $X or Y hours",
    "Timeline: Must ship by date Z",
  ],
  
  successCriteria: [
    "Metric < Target",
    "User satisfaction > X%",
  ],
  
  frontend: {
    title: "Frontend Architecture",
    description: "Brief overview of your frontend approach.",
    highlights: [
      "Component architecture decision",
      "Performance optimization you did",
      "Accessibility feature you implemented",
    ],
  },
  
  backend: {
    title: "Backend & APIs",
    description: "Brief overview of backend.",
    highlights: [
      "API design pattern",
      "Database schema decision",
      "Performance optimization",
    ],
  },
  
  infra: {
    title: "Infrastructure",
    description: "Deployment and infrastructure.",
    highlights: [
      "Hosting platform (Vercel, AWS, etc.)",
      "CI/CD pipeline",
      "Monitoring setup",
    ],
  },
  
  testing: {
    title: "Testing & Quality",
    description: "How you ensured quality.",
    highlights: [
      "Unit test coverage: X%",
      "E2E testing approach",
      "Manual QA process",
    ],
  },
  
  outcomes: [
    { metric: "Performance", value: "Before → After (+X%)" },
    { metric: "Users", value: "+Y active users" },
    { metric: "Rating", value: "Z/5 stars" },
  ],
  
  learnings: [
    "What you learned from this project",
    "What you'd do differently next time",
  ],
  
  links: {
    live: "https://your-project.com",     // Optional
    code: "https://github.com/you/repo",  // Optional
    storybook: "https://storybook.url",   // Optional
  },
}
```

## 🎨 Quick Design Tweaks

### Change Primary Color

**File**: `src/styles/theme.css`

```css
:root {
  --primary: #0066FF;  /* ← Your brand color */
}
```

Common brand colors:
- **Tech Blue**: `#0066FF`
- **Modern Purple**: `#7C3AED`
- **Professional Navy**: `#1E40AF`
- **Bold Red**: `#DC2626`
- **Fresh Green**: `#059669`

### Update Stats on Homepage

**File**: `src/app/pages/Home.tsx` (line 26)

```typescript
const stats = [
  { label: "Years Experience", value: "5+" },   // ← Your experience
  { label: "Projects Shipped", value: "20+" },  // ← Your count
  { label: "Lighthouse Score", value: "90+" },  // Keep or adjust
];
```

## 📸 Add Your Images

### For Project Hero Images

**Option 1: Unsplash** (fastest)
1. Go to [unsplash.com](https://unsplash.com)
2. Search for relevant image (e.g., "dashboard", "mobile app", "code")
3. Copy image URL
4. Add parameters: `?w=1600&h=900&fit=crop`
5. Use in project data: `hero: "https://images.unsplash.com/photo-XXX?w=1600&h=900&fit=crop"`

**Option 2: Your Own Screenshots**
1. Take screenshot of your project (16:9 ratio, 1600×900px ideal)
2. Optimize with [TinyPNG](https://tinypng.com) or similar
3. Place in `public/images/` folder
4. Reference: `hero: "/images/my-project.jpg"`

### For Your Photo (Optional)

1. Add professional headshot to `public/images/headshot.jpg`
2. Use in About page or elsewhere

## ✅ Quick Testing Checklist

Before sharing your portfolio:

1. **Navigation**
   - [ ] Click all nav links - do they work?
   - [ ] Mobile menu opens and closes?
   - [ ] Back to top button appears when scrolling?

2. **Content**
   - [ ] Your name appears correctly everywhere?
   - [ ] Contact info is accurate?
   - [ ] Project links work?
   - [ ] No "TODO" or placeholder text?

3. **Responsive**
   - [ ] Resize browser - does layout adapt?
   - [ ] Test on your phone - is it usable?
   - [ ] Images load correctly on mobile?

4. **Performance**
   - [ ] Open DevTools → Network tab
   - [ ] Refresh page - does it load in < 3 seconds?
   - [ ] No console errors?

## 🚢 Deploy in 5 Minutes

### Option 1: Vercel (Recommended)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repo
5. Click "Deploy"
6. Done! ✨

### Option 2: Netlify

1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Drag and drop your `dist/` folder (after running `npm run build`)
4. Done! ✨

### Option 3: GitHub Pages

1. Install `gh-pages`: `npm install -D gh-pages`
2. Add to `package.json`:
   ```json
   "scripts": {
     "deploy": "npm run build && gh-pages -d dist"
   }
   ```
3. Run: `npm run deploy`
4. Enable GitHub Pages in repo settings
5. Done! ✨

## 🎯 Priority Customizations (In Order)

### Day 1: Core Info
1. ✅ Update your name
2. ✅ Add contact information
3. ✅ Update social links
4. ✅ Change primary color (optional)

### Day 2: First Project
1. ✅ Add your best project
2. ✅ Write compelling tagline
3. ✅ Add hero image
4. ✅ Fill out metrics

### Day 3: Complete Projects
1. ✅ Add 2-3 more projects
2. ✅ Verify all data is accurate
3. ✅ Test all links

### Day 4: Professional Info
1. ✅ Update About page timeline
2. ✅ Adjust skills matrix
3. ✅ Add resume download

### Day 5: Polish & Deploy
1. ✅ Run through testing checklist
2. ✅ Fix any issues
3. ✅ Deploy to Vercel/Netlify
4. ✅ Share with friends for feedback

## 💡 Pro Tips

### Writing Great Taglines
Instead of: "E-commerce website"  
Write: "Sub-2s checkout that increased conversion by 18%"

### Choosing Projects
Pick projects that show:
- 📈 **Measurable impact** (numbers!)
- 🏗️ **Technical depth** (architecture decisions)
- 🎨 **End-to-end ownership** (frontend + backend + deploy)
- 💡 **Problem solving** (real user/business problems)

### Getting Hero Images
Good search terms on Unsplash:
- "dashboard" → Analytics/admin projects
- "mobile phone mockup" → Mobile apps
- "code editor" → Developer tools
- "shopping cart" → E-commerce
- "data visualization" → Analytics platforms

### Making Metrics Compelling
❌ "Improved performance"  
✅ "Reduced load time from 4.5s → 1.8s (-60%)"

❌ "Built a design system"  
✅ "42 components adopted by 12 teams, saving 40% dev time"

## 🆘 Troubleshooting

**Q: My project page shows 404**  
A: Check that the `slug` in `projects.ts` matches the URL you're visiting

**Q: Images aren't loading**  
A: Make sure the URL is valid. For local images, put them in `public/` folder

**Q: Mobile menu won't open**  
A: Check browser console for errors. Make sure Motion is installed.

**Q: How do I add more than 4 projects?**  
A: Just add more objects to the `projects` array in `src/app/data/projects.ts`

**Q: Can I change the color scheme?**  
A: Yes! Edit `src/styles/theme.css` and update CSS variables

## 📚 Next Steps

Once you've customized the basics:

1. **Add Real Projects** - Replace samples with your actual work
2. **Optimize Images** - Compress to < 200KB each
3. **Add Resume** - Upload PDF and link in About/Contact pages
4. **Test Accessibility** - Run axe DevTools, fix issues
5. **Run Lighthouse** - Aim for 90+ scores
6. **Get Feedback** - Share with peers before deploying
7. **Add Analytics** - Google Analytics or Plausible (optional)
8. **Custom Domain** - Point your domain to Vercel/Netlify

## 🎉 You're Ready!

Your portfolio is production-ready out of the box. Just customize the content and deploy!

**Questions?** Check:
- `README.md` - Full documentation
- `IMPLEMENTATION_GUIDE.md` - Detailed customization guide
- `PORTFOLIO_CHECKLIST.md` - Feature checklist

---

**Happy building! 🚀**

Remember: A portfolio is never "done" - you can always add more projects and improve it over time. Ship it first, iterate later!
