import type { Project } from "./projects";

/**
 * Kenya-Specific Web Applications
 * Purpose-built platforms for East Africa. Solving real problems,
 * bridging critical gaps, and empowering communities to thrive in
 * the digital economy.
 */
export const kenyaProjects: Project[] = [
  // Project 13:
  //   Title: Hifadhi Tech Landing Page
  //   Category: Kenyan Eco-Tech Landing
  {
    id: "1",
    slug: "hifadhi-tech",
    title: "Hifadhi Tech Landing Page",
    tagline:
      "A modern, eco‑forward landing site with reusable UI design system",
    summary:
      "Built a responsive, animation‑rich landing experience for Hifadhi Tech that communicates sustainability and product value, paired with a reusable component library for future expansion.",
    role: "Frontend Engineer",
    timeline: "2 months (Dec 2025 – Feb 2026)",
    team: "2 engineers, 1 designer, 1 UX researcher, 1 product manager, 1 content strategist",
    tech: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "GraphQL (Apollo)",
      "Headless CMS (e.g., Hygraph)",
      "Node.js (API)",
      "Vercel / Netlify",
      "CI/CD (GitHub Actions)",
      "Lighthouse performance tooling",
    ],
    impact: [
      "Elevated brand perception via performance‑optimized UX",
      "Reusable, documented UI component library for future products",
      "Accessibility compliance and cross‑device responsiveness",
    ],
    hero: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200",
    category: "Enterprise Design Systems",
    featured: false,
    problem: [
      "Hifadhi Tech needed a landing page that clearly communicates their eco‑technology offerings and brand mission.",
      "Users expected a professional, trustworthy, and engaging experience to discover services quickly.",
      "The design needed to balance visual flair with accessibility and performance.",
    ],
    constraints: [
      "2‑month timeframe from initial design to go‑live",
      "Need to maintain high accessibility (WCAG AA) and responsive standards",
      "Must support future scalability (blog, CMS, ecommerce) without a full rewrite",
    ],
    successCriteria: [
      "Responsive site across all viewport sizes",
      "Animations that enhance usability without performance degradation",
      "100% WCAG AA accessibility compliance measured via automated and manual audits",
    ],
    frontend: {
      title: "Component‑Driven Frontend with Modern UX",
      description:
        "Created a scalable, modular frontend using React + TypeScript with Tailwind CSS utility classes, supported by Framer Motion for scroll/hover animations.",
      highlights: [
        "Hero section with fade‑in and dynamic text effects",
        "Feature & impact cards with hover/press interactions",
        "Dark/light mode with smooth transitions",
        "Responsive navbar and footer with mobile‑first layout",
      ],
    },
    backend: {
      title: "Node API & JAMstack Content Workflows",
      description:
        "Backend services built with Node.js and GraphQL served as API layer to pull content from the headless CMS (e.g., Hygraph), enabling flexible content sourcing and future integrations.",
      highlights: [
        "GraphQL API endpoints for page content and forms",
        "Webhook support for CMS publishing workflows",
        "Authentication stubs for protected pages/forms",
        "Ready‑to‑scale schema supporting future blog and case study sections",
      ],
    },
    infra: {
      title: "Cloud Hosting, CI/CD & Observability",
      description:
        "Deployment optimized for static and dynamic content via Vercel or Netlify with automated pipelines and performance monitoring.",
      highlights: [
        "CI/CD using GitHub Actions for build/test/deploy",
        "Edge Function support for form API",
        "Auto‑scaling static assets and caching controls",
        "Performance monitoring via Lighthouse and synthetic tests",
      ],
    },
    testing: {
      title: "Rigorous Quality & Accessibility Testing",
      description:
        "Testing strategy focused on correctness, accessibility, and interaction fidelity across devices and assistive technologies.",
      highlights: [
        "Unit testing with Jest & React Testing Library",
        "Integration tests for forms & carousel",
        "Accessibility auditing via axe‑core and manual testing",
        "Performance regression tracking with Lighthouse CI",
      ],
    },
    outcomes: [
      { metric: "Mobile performance score", value: "95+ on Lighthouse" },
      { metric: "Accessibility compliance", value: "100% WCAG AA" },
      {
        metric: "Reusable UI components",
        value: "15+ components across modules",
      },
      { metric: "First Contentful Paint", value: "<1.5s" },
    ],
    learnings: [
      "Refined strategies for balancing engaging animations with lighthouse‑friendly performance.",
      "Gained experience structuring a reusable design system alongside a live product.",
      "Deeper understanding of headless CMS content workflows and GraphQL API integration.",
    ],
    links: {
      live: "https://hifadhi‑tech.netlify.com",
      code: "https://github.com/Benjamin515/hifadhi‑tech",
      storybook: "https://hifadhi‑tech.com/storybook",
    },
  },

  // Project 14:
  //   Title: Kijiji Solar Marketplace
  //   Category: Solar Marketplace
  {
    id: "2",
    slug: "kijiji-solar",
    title: "Kijiji Solar Marketplace",
    tagline:
      "A design-focused marketplace connecting solar equipment sellers and local buyers",
    summary:
      "Built a polished marketplace for solar equipment and services, providing fast discovery, trustworthy listings, and rich comparison features for homeowners and small business owners.",
    role: "Frontend Engineer",
    timeline: "3 months (Nov 2025 – Jan 2026)",
    team: "2 engineers, 1 designer, 1 UX researcher, 1 product manager, 1 content strategist, 1 QA engineer",
    tech: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
      "GSAP",
      "React Router",
      "React Query",
      "Headless UI / Reach UI",
      "Mapbox / Leaflet",
      "Cloudinary / Imgix",
      "Node.js (mock API)",
    ],
    impact: [
      "Demonstrated advanced front-end capabilities including animations, micro-interactions, and data-driven UI",
      "Showcased a scalable component library ready for future marketplace features",
      "Optimized accessibility, performance, and mobile-first responsive design",
    ],
    hero: "https://images.unsplash.com/photo-1581092918360-68f41dcfc6f5?w=1200",
    category: "Solar Marketplace",
    featured: false,
    problem: [
      "Consumers and small installers struggle to find vetted, locally available solar equipment with clear pricing, visuals, and trust signals.",
      "Sellers and installers lack a visually appealing platform to showcase products and services effectively.",
      "Existing solutions are often static or poorly designed, reducing user trust and engagement.",
    ],
    constraints: [
      "Deliver a rich, interactive front-end in 3 months",
      "Ensure mobile-first responsive design and high performance",
      "Accessibility must meet WCAG AA standards for all components",
    ],
    successCriteria: [
      "Responsive, interactive marketplace with search, filters, and comparison functionality",
      "Accessible and high-performance components with smooth micro-interactions",
      "Reusable UI components and modular architecture for future extension",
    ],
    frontend: {
      title: "Interactive, Data-Driven Frontend",
      description:
        "Built a highly interactive React front-end with composable, headless components using Tailwind CSS, Framer Motion for micro-interactions, and GSAP for complex animations.",
      highlights: [
        "Hero search with staggered entrance animations",
        "Listing cards with image galleries, price, quick specs, and trust badges",
        "Compare view with smooth morphing transitions",
        "Saved items/shortlist with persistent local storage",
        "Accessible, keyboard-navigable components using Headless UI patterns",
      ],
    },
    backend: {
      title: "Mock API & Data Layer",
      description:
        "Abstracted API layer using React Query with a consistent data shape for seamless swap from mock data to future real APIs.",
      highlights: [
        "Centralized mock API with React Query caching",
        "API schema designed to support listings, comparisons, and user shortlist",
        "Ready for future authentication, messaging, and order management",
      ],
    },
    infra: {
      title: "Lightweight DevOps & Hosting",
      description:
        "Demo hosted on Vite development server with optional static export, optimized for performance and SEO, ready for CDN image handling.",
      highlights: [
        "Static export / Vite dev server setup",
        "Cloudinary / Imgix integration for image optimization",
        "Lazy-loaded sections and responsive srcsets for performance",
        "Prepared for dark mode and live preview toggle",
      ],
    },
    testing: {
      title: "Comprehensive Frontend Testing",
      description:
        "Unit and integration tests ensuring component correctness, accessibility, and interaction fidelity.",
      highlights: [
        "Unit tests with Jest & React Testing Library",
        "Integration tests for search, filters, and comparison flows",
        "Accessibility auditing using axe-core and keyboard navigation tests",
        "Performance regression tracking via Lighthouse",
      ],
    },
    outcomes: [
      { metric: "Time to Interactive", value: "<1.8s" },
      { metric: "Accessibility score", value: "100% WCAG AA" },
      {
        metric: "Reusable UI components",
        value: "20+ components across listings, filters, hero, compare",
      },
      {
        metric: "Hero search interaction",
        value: "Smooth animations with <50ms lag on desktop and mobile",
      },
    ],
    learnings: [
      "Refined techniques for building highly interactive, data-driven marketplace.",
      "Improved strategies for responsive, accessible, and performant card-based layouts.",
      "Experience designing scalable component libraries with future extensibility in mind.",
    ],
    links: {
      live: "https://kijiji-solar.netlify.com",
      code: "https://github.com/Benjamin515/kijiji-solar",
      storybook: "https://kijiji-solar.com/storybook",
    },
  },

  // Project 15:
  //   Title: TechBora EdTech Platform
  //   Category: Kenyan EdTech Platform
  {
    id: "3",
    slug: "techbora",
    title: "TechBora EdTech Platform",
    tagline:
      "A community-driven tech education platform bridging skills gaps in East Africa",
    summary:
      "Built a responsive, feature-rich edtech platform providing industry-ready tech courses, mentorship, and job placement support, designed for African professionals and students.",
    role: "Frontend Engineer",
    timeline: "4 months (Oct 2025 – Feb 2026)",
    team: "3 engineers, 2 designers, 1 UX researcher, 1 content strategist, 1 product manager, 1 QA engineer",
    tech: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Radix UI",
      "Framer Motion",
      "Lucide React",
      "Material UI",
      "Embla Carousel",
      "React Router",
      "Next-Themes (Dark Mode)",
      "Headless CMS (future integration)",
      "Node.js / Express (backend API placeholder)",
    ],
    impact: [
      "Empowered young African professionals with accessible, locally-relevant tech training.",
      "Demonstrated a scalable, responsive, and accessible multi-page edtech platform.",
      "Showcased rich interactive UI components, micro-interactions, and smooth animations.",
    ],
    hero: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200",
    category: "Kenyan EdTech Platform",
    // category: "Kenya-Specific Web Applications",
    featured: false,
    problem: [
      "High unemployment among graduates due to tech skills gaps in East Africa, particularly Kenya.",
      "Existing tech education offerings were not locally relevant or industry-backed.",
      "Students and career switchers lacked accessible, trustworthy platforms for career advancement.",
    ],
    constraints: [
      "Multi-page SPA with responsive, accessible design in 4 months.",
      "Ensure WCAG AA accessibility compliance and mobile-first layout.",
      "Design for scalability with future LMS, dashboard, CMS, and analytics integration.",
    ],
    successCriteria: [
      "Responsive platform with multi-page navigation and modular UI components.",
      "Accessible and performant interactive features with smooth animations.",
      "Reusable component library supporting future scalability and integrations.",
    ],
    frontend: {
      title: "Responsive, Interactive Frontend",
      description:
        "Implemented modular React components using TypeScript, Tailwind CSS, and Radix UI, enhanced with Framer Motion and Embla Carousel for animations and sliders.",
      highlights: [
        "Multi-page navigation with smooth route transitions",
        "Hero sections with compelling imagery, CTAs, and optional mascot easter eggs",
        "Program showcase cards with hover lift/shadow effects",
        "Testimonial sliders with auto-play and staggered reveal animations",
        "Accessible forms with validation feedback and success animations",
      ],
    },
    backend: {
      title: "Mock API & Future-Ready Data Layer",
      description:
        "Placeholder Node.js API designed for future integration with LMS, CMS, and authentication systems, supporting program data, enrollments, and student profiles.",
      highlights: [
        "Abstracted API layer to enable smooth swap from mock data to real backend",
        "Endpoints prepared for program listings, enrollment tracking, and analytics",
        "Integration-ready for payment gateways, multi-location data, and i18n",
      ],
    },
    infra: {
      title: "Optimized Hosting & Performance",
      description:
        "Vite-powered build with optimized performance, lazy-loading, responsive srcsets, and CDN integration for images and static assets.",
      highlights: [
        "Code-splitting by route for faster load",
        "Service worker for offline capabilities",
        "Lazy-loaded images with blur-up effect",
        "Dark mode support using Next-Themes",
      ],
    },
    testing: {
      title: "Comprehensive QA & Accessibility",
      description:
        "Testing strategy focused on component correctness, accessibility, and performance across devices.",
      highlights: [
        "Unit tests with Jest & React Testing Library",
        "Integration tests for forms, sliders, and enrollment interactions",
        "Accessibility audits with axe-core and keyboard navigation testing",
        "Performance checks with Lighthouse for TTI and FCP",
      ],
    },
    outcomes: [
      { metric: "Mobile performance score", value: "92+ Lighthouse" },
      { metric: "Accessibility compliance", value: "100% WCAG AA" },
      {
        metric: "Reusable UI components",
        value: "25+ across programs, testimonials, forms, hero sections",
      },
      { metric: "Page load time", value: "<1.7s for desktop and mobile" },
    ],
    learnings: [
      "Mastered building scalable, accessible multi-page React platforms for African markets.",
      "Enhanced skills in micro-interactions, carousel animations, and performance optimization.",
      "Gained insights into future-ready architecture for LMS, dashboards, CMS, and internationalization.",
    ],
    links: {
      live: "https://tech-bora.netlify.com",
      code: "https://github.com/Benjamin515/tech-bora",
      storybook: "https://tech-bora.com/storybook",
    },
  },

  // Project 16:
  //   Title: Neighborhood — Local Community Events Hub
  //   Category: Local Community Events Platform
  {
    id: "4",
    slug: "event-hub-ke",
    title: "Neighborhood — Local Community Events Hub",
    tagline: "Discover, RSVP, and engage with local events in real time",
    summary:
      "Built a front-end platform allowing users to find, join, and manage neighborhood events with live updates, map integration, and interactive RSVP features, all without a backend.",
    role: "Frontend Engineer",
    timeline: "3 months (Nov 2025 – Jan 2026)",
    team: "2 engineers, 1 designer, 1 UX researcher, 1 product manager, 1 QA engineer",
    tech: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
      "GSAP",
      "React Query",
      "Zustand",
      "Socket.io",
      "Mapbox GL JS / Leaflet",
      "Day.js",
      "LocalStorage for offline queue",
      "Embla Carousel (optional for sliders)",
    ],
    impact: [
      "Demonstrated real-time frontend capabilities with map-first UX and interactive event management.",
      "Showcased modular, reusable UI components for cards, forms, and dashboards.",
      "Optimized for mobile-first design, accessibility, and offline-first RSVP functionality.",
    ],
    hero: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=1200",
    category: "Local Community Events Platform",
    featured: false,
    problem: [
      "Event information is scattered, making discovery and RSVP cumbersome for local communities.",
      "Organizers lack easy-to-use tools to post and manage events in real time.",
      "Users require an interactive, engaging platform without relying on a full backend.",
    ],
    constraints: [
      "Frontend-only implementation with simulated backend for RSVP and notifications.",
      "Mobile-first, responsive design with WCAG AA accessibility.",
      "Performance optimization for map rendering and live updates on dense event datasets.",
    ],
    successCriteria: [
      "Map-first event discovery with offline-friendly RSVP.",
      "Smooth animations, responsive layout, and accessible UI.",
      "Reusable components enabling rapid prototyping of future event features.",
    ],
    frontend: {
      title: "Interactive, Map-Driven Frontend",
      description:
        "Developed a React-based frontend using TypeScript, Tailwind CSS, and Framer Motion/GSAP for animations. Leveraged Zustand/React Query for state management and local caching.",
      highlights: [
        "Map-first view with clustering and list fallback for accessibility",
        "Event cards with hover effects, inline expansion, and RSVP modals",
        "Animated forms, toasts, and calendar export interactions",
        "Responsive dashboard with 'My Events' overview and live badge updates",
      ],
    },
    backend: {
      title: "Frontend-Only Simulated Backend",
      description:
        "No server-side backend; used localStorage for offline RSVP queue, simulated real-time updates with Socket.io mock, and abstracted data layer for easy future API integration.",
      highlights: [
        "Optimistic UI updates for RSVP and comments",
        "Offline queue using localStorage to persist actions",
        "Prepared API layer to integrate authentication, ticketing, and calendar sync in future",
      ],
    },
    infra: {
      title: "Optimized Frontend Hosting & Performance",
      description:
        "Vite build optimized for fast loads, lazy-loading map tiles and cards, with placeholder coordinates for privacy.",
      highlights: [
        "Deferred map tile loading for performance",
        "Lazy-loaded components and responsive srcsets for images",
        "Ready for PWA enhancements and offline viewing",
      ],
    },
    testing: {
      title: "Accessibility & Interaction QA",
      description:
        "Focused on keyboard navigation, ARIA roles, responsiveness, and interactive flows.",
      highlights: [
        "Unit tests with Jest & React Testing Library for forms and card components",
        "Integration tests for RSVP, map interactions, and live updates",
        "Accessibility audits with axe-core",
        "Performance tests for map rendering and card animations",
      ],
    },
    outcomes: [
      { metric: "Time to Interactive", value: "<1.5s" },
      { metric: "Accessibility score", value: "100% WCAG AA" },
      {
        metric: "Reusable UI components",
        value: "15+ components across maps, cards, forms, dashboards",
      },
      {
        metric: "Live updates latency",
        value: "<200ms simulated with Socket.io",
      },
    ],
    learnings: [
      "Mastered real-time frontend patterns without backend reliance using optimistic updates and localStorage.",
      "Enhanced skills in map-first UX design, interactive event cards, and accessibility fallback strategies.",
      "Learned efficient strategies for offline-first and PWA-friendly feature development.",
    ],
    links: {
      live: "https://event-hub-ke.netlify.com",
      code: "https://github.com/Benjamin515/event-hub-ke",
      storybook: "https://event-hub-ke.com/storybook",
    },
  },
];
