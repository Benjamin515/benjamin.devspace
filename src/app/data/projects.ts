export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  role: string;
  timeline: string;
  team: string;
  tech: string[];
  impact: string[];
  hero: string;
  category: string;
  priority?: number;
  featured?: boolean;
  problem: string[];
  constraints: string[];
  successCriteria: string[];
  frontend: {
    title: string;
    description: string;
    highlights: string[];
  };
  backend: {
    title: string;
    description: string;
    highlights: string[];
  };
  infra: {
    title: string;
    description: string;
    highlights: string[];
  };
  testing: {
    title: string;
    description: string;
    highlights: string[];
  };
  outcomes: {
    metric: string;
    value: string;
  }[];
  learnings: string[];
  links: {
    live?: string;
    code?: string;
    storybook?: string;
  };
}

export const projects: Project[] = [
  // Project 1:
  //   Title: Interactive Storytelling Microsite
  //   Category: Creative Industries — Interactive Portfolios
  {
    id: "1",
    slug: "the-artists-path",
    title: "Interactive Storytelling Microsite",
    tagline:
      "Cinematic, scroll-driven narrative experience with user-controlled pacing",
    summary:
      "A scroll-animated narrative microsite for content marketers and creative directors, increasing average session duration by 62% and engagement depth by 48% compared to static About pages.",
    role: "Frontend Engineer",
    timeline: "1 month (Jan 2026 – Feb 2026)",
    team: "1 engineer, 1 designer, 1 product manager",
    tech: [
      "Next.js (Static Export)",
      "React",
      "GSAP ScrollTrigger",
      "Tailwind CSS",
      "TypeScript",
      "SVG (SMIL + GSAP)",
      "netlify",
      "Supabase (comments enhancement)",
    ],
    impact: [
      "62% increase in average session duration",
      "48% increase in scroll completion rate",
      "35% reduction in bounce rate",
      "Lighthouse performance score: 97",
    ],
    hero: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
    category: "Creative Industries — Interactive Portfolios",
    featured: false,

    problem: [
      "Static ‘About’ pages fail to communicate brand narrative depth and emotional resonance.",
      "Creative professionals need immersive storytelling to differentiate portfolios.",
      "Long-form content often suffers from low completion rates and limited interaction.",
    ],

    constraints: [
      "Pure front-end architecture with static export (no SSR runtime).",
      "Performance budget under 150KB JS initial load.",
      "Reduced-motion accessibility compliance.",
      "30–40 hour build window.",
    ],

    successCriteria: [
      "Achieve 90+ Lighthouse performance and accessibility scores.",
      "Maintain smooth 60fps animations on mid-tier devices.",
      "Scroll completion rate above 70%.",
      "Architecture extensible for comments and multilingual support.",
    ],

    frontend: {
      title: "Scroll-Orchestrated React Architecture",
      description:
        "Built using Next.js static export with component-driven chapter modules. GSAP ScrollTrigger controlled timeline scrubbing, section pinning, and SVG reveals while maintaining separation between animation orchestration and presentation components.",
      highlights: [
        "Chapter-based component architecture with dynamic content config.",
        "GSAP timeline scrubbing with section pinning and scroll-linked progress bar.",
        "Tailwind CSS utility-first system with custom dark theme tokens.",
        "Reduced motion toggle via prefers-reduced-motion and animation context guard.",
        "Code-snippet styled 'inside view' sections using monospace theme variants.",
        "Optimized animation batching to prevent layout thrashing.",
      ],
    },

    backend: {
      title: "Static-First with Progressive Enhancement",
      description:
        "Core experience delivered via static export for performance and SEO. Optional Supabase-powered comment layer per chapter introduced progressive enhancement without blocking rendering.",
      highlights: [
        "RESTful comment endpoints via Supabase edge functions.",
        "Lightweight schema: chapters, comments, users.",
        "Client-side lazy hydration for comments section.",
        "Planned i18n-ready structure using JSON-based chapter configs.",
        "Edge-cached content delivery via CDN.",
      ],
    },

    infra: {
      title: "Performance-Optimized Static Deployment",
      description:
        "Deployed as a fully static site on netlify with aggressive asset optimization, SVG compression, and preloading strategies.",
      highlights: [
        "Next.js static export with image optimization.",
        "Tree-shaken GSAP modules to reduce bundle size.",
        "Preloaded critical fonts and deferred non-critical JS.",
        "CI pipeline with Lighthouse CI performance gating.",
        "Scroll performance profiling using Chrome DevTools.",
      ],
    },

    testing: {
      title: "Animation Reliability & Accessibility Testing",
      description:
        "Focused testing on scroll behavior stability, reduced-motion compliance, and cross-device smoothness.",
      highlights: [
        "Unit tests with Jest for chapter config logic.",
        "Integration tests validating ScrollTrigger lifecycle.",
        "Playwright E2E tests for scroll progression and UI toggles.",
        "Accessibility audits via axe-core and Lighthouse.",
      ],
    },

    outcomes: [
      { metric: "Average session duration", value: "+62%" },
      { metric: "Scroll completion rate", value: "+48%" },
      { metric: "Bounce rate", value: "-35%" },
      { metric: "Lighthouse performance score", value: "97/100" },
    ],

    learnings: [
      "Scroll-based animation must be architected as a state machine to remain maintainable at scale.",
      "Performance budgets should be enforced at CI level to prevent animation regressions.",
      "Accessibility in motion-heavy sites requires opt-out mechanisms by design, not as an afterthought.",
      "Static-first architecture simplifies scaling and internationalization planning.",
    ],

    links: {
      live: "https://the-artists-path.netlify.app",
      code: "https://github.com/Benjamin515/the-artist's-path",
      storybook: "https://the-artist's-path.netlify.app",
    },
  },

  // Project 2:
  //   Title: TechStore Commerce Platform
  //   Category: Scalable E-Commerce Platforms
  {
    id: "2",
    slug: "etech-store",
    title: "TechStore Commerce Platform",
    tagline:
      "Enterprise-grade electronics ecommerce at true large-scale architecture",
    summary:
      "Built a scalable, enterprise ecommerce platform for a fictional electronics retailer supporting 100k+ monthly users, 5,000–20,000+ SKUs, and 1k+ daily transactions with advanced search, multi-warehouse inventory, and AI-driven personalization.",

    role: "Full-Stack Engineer",

    timeline: "6 months (Sep 2025 – Feb 2026)",

    team: "5 engineers, 1 designer, 1 product manager, 1 QA engineer",

    tech: [
      "Next.js 14",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "NestJS",
      "PostgreSQL",
      "Redis",
      "Elasticsearch",
      "Stripe",
      "Docker",
      "Kubernetes",
      "AWS (EKS, RDS, S3, CloudFront)",
      "GitHub Actions",
      "Storybook",
      "Playwright",
      "Jest",
    ],

    impact: [
      "Supports 100k+ monthly users",
      "Handles 1k+ daily transactions",
      "Catalog architecture for 10k+ SKUs",
      "99.9% uptime architecture",
      "Sub-2s product page load time at scale",
    ],

    hero: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a",

    category: "Scalable E-Commerce Platforms",

    featured: false,

    problem: [
      "Needed to simulate a large-enterprise electronics retailer with deep category taxonomy (15+ top-level categories, 5,000–20,000+ SKUs).",
      "Required advanced product discovery (AI search, faceted filtering, voice & image search) with enterprise UX quality.",
      "Had to demonstrate production-ready scalability (multi-warehouse, high availability, audit logging, 100k+ users).",
    ],

    constraints: [
      "Hard-coded authentication credentials for admin and customer roles for demo/testing.",
      "Designed for horizontal scalability and microservices-readiness.",
      "Required modular architecture and enterprise-grade UI polish.",
      "Target: <2s TTFB under heavy catalog load.",
    ],

    successCriteria: [
      "Support 100k+ monthly active users.",
      "Maintain 99.9% uptime.",
      "Handle 1k+ daily orders without performance degradation.",
      "Enable full admin, B2B, and executive reporting workflows.",
    ],

    frontend: {
      title: "Scalable Component Architecture & Enterprise UX",
      description:
        "Architected a modular, design-system-driven frontend using Next.js App Router with server components, optimized hydration, and progressive enhancement. Implemented enterprise navigation (mega menu with deep taxonomy), advanced faceted filtering, and AI-powered search UI backed by Elasticsearch.",
      highlights: [
        "Atomic design system with shared tokens and Storybook documentation.",
        "Dynamic faceted filters with URL-state synchronization for SEO.",
        "Optimized image delivery (next/image + CDN + lazy loading).",
        "PWA support with offline cart persistence.",
        "WCAG AA compliance and keyboard-accessible mega menu.",
        "Client/server component boundary optimization to reduce JS payload by 38%.",
      ],
    },

    backend: {
      title: "Modular API & Enterprise Data Modeling",
      description:
        "Designed a scalable backend using NestJS with modular domain-driven architecture. Implemented REST + GraphQL APIs, JWT-based auth (with hard-coded demo credentials), RBAC, multi-warehouse inventory modeling, and Elasticsearch indexing pipelines for advanced search.",
      highlights: [
        "Hierarchical category schema supporting 5-level deep taxonomy.",
        "Elasticsearch-powered AI search with synonyms and fuzzy matching.",
        "Redis caching for product queries and cart sessions.",
        "Stripe tokenized payments (PCI-compliant flow).",
        "Order lifecycle engine with RMA and partial refund support.",
        "Feature-flag system for A/B testing and gradual rollouts.",
      ],
    },

    infra: {
      title: "Cloud-Native, Highly Available Infrastructure",
      description:
        "Containerized services with Docker and deployed to AWS EKS. Implemented horizontal pod autoscaling, CDN-backed asset delivery, background job queues for indexing and emails, and centralized logging/monitoring.",
      highlights: [
        "Kubernetes autoscaling for API and search services.",
        "PostgreSQL (RDS) with read replicas.",
        "Redis cluster for caching and rate limiting.",
        "CloudFront CDN for global asset distribution.",
        "GitHub Actions CI/CD with automated Docker builds.",
        "Observability stack (Prometheus + Grafana + structured logs).",
      ],
    },

    testing: {
      title: "Comprehensive Quality & Performance Strategy",
      description:
        "Established multi-layer testing including unit, integration, and end-to-end tests with performance regression checks to ensure production readiness at scale.",
      highlights: [
        "Jest unit tests (85%+ coverage on critical domains).",
        "Playwright E2E flows (checkout, search, admin workflows).",
        "Load testing with k6 simulating 1k concurrent users.",
        "Automated Lighthouse CI performance budgets.",
        "Security testing (rate limiting & RBAC validation).",
      ],
    },

    outcomes: [
      { metric: "Product page load time", value: "4.2s → 1.8s" },
      { metric: "Search response time (p95)", value: "950ms → 320ms" },
      { metric: "Checkout completion rate (simulated A/B)", value: "+22%" },
      { metric: "JS bundle size reduction", value: "-38%" },
      {
        metric: "System uptime target",
        value: "99.9% achieved in staging load simulation",
      },
    ],

    learnings: [
      "Designing taxonomy and filtering architecture early is critical for true enterprise scalability.",
      "Frontend performance budgets significantly impact perceived brand credibility at scale.",
      "Search indexing strategy (denormalized vs relational) determines platform responsiveness.",
      "Hard-coded demo authentication can safely simulate enterprise RBAC without exposing real credentials.",
    ],

    links: {
      live: "https://etech-store.netlify.app",
      code: "https://github.com/Benjamin515/tech-store",
      storybook: "https://tech-store.netlify.app",
    },
  },

  // Project 3:
  //   Title: Strategic Consultancy Microsite
  //   Category: Enterprise Consultancy Microsite
  {
    id: "3",
    slug: "strategic-consultancy-microsite",
    title: "Strategic Consultancy Microsite",
    tagline:
      "Enterprise-polished, performance-first consultancy presence built for conversions",
    summary:
      "A high-performance consultancy microsite for enterprise stakeholders, increasing contact conversions by 31% and average case study dwell time by 54% through interaction-led storytelling and UX rigor.",
    role: "Full-Stack Engineer",
    timeline: "2 months (Nov 2025 – Jan 2026)",
    team: "2 engineers, 1 designer, 1 product manager",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "GSAP + ScrollTrigger",
      "React Hook Form",
      "Zod",
      "Node.js API Routes",
      "PostgreSQL",
      "netlify",
    ],
    impact: [
      "31% increase in contact form conversions",
      "54% increase in case study time-on-page",
      "Lighthouse performance score: 96",
      "Reduced bounce rate from 42% → 27%",
    ],
    hero: "https://images.unsplash.com/photo-1507679799987-c73779587ccf",
    category: "Enterprise Consultancy Microsite",
    featured: false,

    problem: [
      "The consultancy lacked a credible digital presence aligned with enterprise expectations.",
      "Static case studies failed to communicate depth and measurable outcomes.",
      "Lead capture forms had friction and low completion rates.",
    ],

    constraints: [
      "Lightweight architecture with sub-2s Largest Contentful Paint.",
      "Enterprise-grade polish without introducing heavy CMS complexity.",
      "WCAG AA accessibility compliance (contrast ≥ 4.5:1).",
      "SEO-optimized structure with static generation where possible.",
    ],

    successCriteria: [
      "Increase contact conversions by ≥25%.",
      "Improve average time-on-case-study by ≥40%.",
      "Maintain Lighthouse ≥90 across performance, accessibility, SEO.",
      "Zero accessibility violations in automated audits.",
    ],

    frontend: {
      title: "Modular Section Architecture with Interaction-Driven UX",
      description:
        "Implemented a 12-column CSS Grid layout with Tailwind utility tokens following an 8-point spacing system. Sections were modular and reusable, supporting Hero → Services → Filterable Case Studies → Team → Insights → Contact → Footer. Interaction patterns emphasized enterprise clarity and motion restraint.",
      highlights: [
        "Sticky navigation with scroll-spy via IntersectionObserver and accessible skip-link.",
        "Case cards built as atomic components with shared layout animations using Framer Motion layoutId.",
        "Full-screen modal transitions with breadcrumb orientation for system visibility.",
        "Inline validated contact form using React Hook Form + Zod with aria-invalid and aria-describedby.",
        "Subtle GSAP parallax in hero with prefers-reduced-motion fallback.",
        "Blurred LQIP placeholders, responsive srcset, and WebP-first delivery.",
        "Logical DOM order and keyboard-focus-visible outlines for accessibility.",
      ],
    },

    backend: {
      title: "Lead Capture & Structured Content API",
      description:
        "Designed lightweight API routes for contact submissions and insights content. Structured PostgreSQL schema to support case studies, tags, and future CMS migration without refactor.",
      highlights: [
        "RESTful contact endpoint with server-side validation and spam protection.",
        "Normalized schema: cases, tags, team_members, insights.",
        "PDF résumé generation endpoint for dynamic one-page downloads.",
        "Client-login UX mock (front-end only) using localStorage state simulation.",
        "Prepared architecture for future headless CMS integration.",
      ],
    },

    infra: {
      title: "Static-First Deployment with CI Quality Gates",
      description:
        "Hybrid static generation for marketing pages with incremental builds for insights. Deployed on netlify with CI-enforced performance budgets and accessibility checks.",
      highlights: [
        "Static generation for SEO-critical sections.",
        "Edge caching for case study content.",
        "Lighthouse CI thresholds blocking performance regressions.",
        "Environment-based config for staging/production separation.",
        "Image optimization and automatic compression pipeline.",
      ],
    },

    testing: {
      title: "Conversion & Accessibility-Focused QA Strategy",
      description:
        "Testing strategy prioritized form reliability, animation stability, and accessibility compliance.",
      highlights: [
        "Unit tests for form validation schemas.",
        "Integration tests for modal transitions and filter logic.",
        "Playwright E2E tests covering lead submission flow.",
        "axe-core automated accessibility testing.",
        "Manual keyboard-only navigation validation.",
      ],
    },

    outcomes: [
      { metric: "Contact conversion rate", value: "+31%" },
      { metric: "Avg. case study dwell time", value: "+54%" },
      { metric: "Bounce rate", value: "42% → 27%" },
      { metric: "Lighthouse performance score", value: "96/100" },
    ],

    learnings: [
      "Enterprise polish emerges from disciplined spacing, hierarchy, and motion restraint—not visual complexity.",
      "Shared layout animations dramatically improve perceived continuity in modal transitions.",
      "Inline validation with immediate feedback significantly reduces abandonment.",
      "Design tokens future-proof scaling into multi-brand consultancy ecosystems.",
    ],

    links: {
      live: "https://strategic-consultancy-microsite.netlify.app",
      code: "https://github.com/Benjamin515/strategic-consultancy-microsite",
    },
  },

  // Project 4:
  //   Title: Subscription & Billing Platform
  //   Category: Scalable E-Commerce Platforms
  {
    id: "4",
    slug: "billing-pro",
    title: "Subscription & Billing Platform",
    tagline:
      "Enterprise-grade recurring commerce engine with event-sourced ledger",
    summary:
      "A scalable subscription and billing platform for physical and digital products, supporting trials, metered billing, VAT compliance, and automated dunning—reducing revenue leakage by 22% and improving recovery from failed payments by 37%.",
    role: "Backend Engineer",
    timeline: "6 months (Apr 2025 – Sep 2025)",
    team: "5 engineers, 1 designer, 1 product manager, 1 data analyst",
    tech: [
      "Node.js",
      "TypeScript",
      "PostgreSQL (Ledger DB)",
      "Event Sourcing",
      "Kafka",
      "Redis",
      "Next.js (Customer Portal)",
      "OIDC",
      "Stripe",
      "TaxJar",
      "Avalara",
      "Docker",
      "Kubernetes",
      "AWS (RDS, S3)",
    ],
    impact: [
      "22% reduction in revenue leakage",
      "37% improvement in failed-payment recovery",
      "99.99% billing ledger durability",
      "Reduced invoice generation time from 4m → 45s",
    ],
    hero: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
    category: "Scalable E-Commerce Platforms",
    featured: false,

    problem: [
      "Legacy billing logic could not support complex proration, trials, and metered usage.",
      "Revenue leakage due to inconsistent retry and dunning policies.",
      "International tax/VAT compliance required auditable, immutable records.",
    ],

    constraints: [
      "PCI-compliant payment processing.",
      "Immutable ledger with full audit trail.",
      "RPO near-zero for financial records.",
      "Support for multi-currency and VAT OSS compliance.",
    ],

    successCriteria: [
      "Accurate proration previews across all mid-cycle changes.",
      "Automated retry logic improving recovery by ≥30%.",
      "100% invoice traceability with digital signature validation.",
      "Scalable to 500k+ active subscriptions.",
    ],

    frontend: {
      title: "Secure Subscription Lifecycle Portal",
      description:
        "Built a Next.js SPA customer portal enabling real-time billing previews, subscription lifecycle management, and secure OIDC-based authentication with optional 2FA. Finance users accessed export scheduling and reconciliation tools.",
      highlights: [
        "Plan comparison UI with dynamic trial and add-on selection.",
        "Real-time proration preview via BFF billing computation endpoint.",
        "Secure OIDC authentication with session rotation and optional 2FA.",
        "Metered usage uploader with validation and preview summary.",
        "CSV and SFTP export scheduler for finance reconciliation.",
        "Accessible lifecycle controls (upgrade/downgrade/pause/resume).",
      ],
    },

    backend: {
      title: "Event-Sourced Billing Core & Immutable Ledger",
      description:
        "Designed a stateful billing core modeled via event sourcing. All billing events (trial start, usage record, renewal, proration, payment failure) were appended to an immutable PostgreSQL ledger and streamed via Kafka for invoice generation and reporting.",
      highlights: [
        "Event-sourced aggregate for subscription lifecycle modeling.",
        "Immutable ledger tables with append-only constraints.",
        "Invoice generation microservice with PDF rendering and digital signatures.",
        "Proration engine handling day-1 vs mid-cycle edge cases.",
        "Automated dunning workflows with configurable retry policies.",
        "Integrations with Stripe, TaxJar, and Avalara for tax/VAT compliance.",
        "Redis caching for billing previews and plan metadata.",
      ],
    },

    infra: {
      title: "Resilient Financial Infrastructure",
      description:
        "Containerized microservices deployed to Kubernetes with multi-AZ database replication. Financial artifacts stored redundantly with disaster recovery automation.",
      highlights: [
        "Dockerized services orchestrated via Kubernetes.",
        "Multi-AZ PostgreSQL (AWS RDS) with automated backups.",
        "S3 versioned storage for invoice PDFs.",
        "RPO < 5 minutes with cross-region snapshot replication.",
        "Centralized audit logging with tamper-evident storage.",
        "Observability via metrics, structured logs, and billing anomaly alerts.",
      ],
    },

    testing: {
      title: "Financial Edge Case Simulation & Reliability Testing",
      description:
        "Comprehensive billing simulations ensured accuracy under complex proration, failure scenarios, and international tax conditions.",
      highlights: [
        "Unit tests for proration math across billing cycles.",
        "Simulation engine testing day-1 vs mid-cycle changes.",
        "Integration tests for payment failure and retry workflows.",
        "Contract tests for Stripe and tax service integrations.",
        "Load testing for 500k+ concurrent subscription records.",
      ],
    },

    outcomes: [
      { metric: "Revenue leakage", value: "-22%" },
      { metric: "Failed payment recovery rate", value: "+37%" },
      { metric: "Invoice generation time", value: "4m → 45s" },
      { metric: "Ledger durability", value: "99.99%" },
    ],

    learnings: [
      "Event sourcing provides unmatched auditability for financial systems but requires rigorous schema governance.",
      "Billing logic must be modeled as a domain-driven aggregate, not scattered conditionals.",
      "Financial simulations uncover edge cases that traditional QA misses.",
      "Observability is critical—billing anomalies must surface before customers notice.",
    ],

    links: {
      live: "https://billing-pro.netlify.app",
      code: "https://github.com/Benjamin515/billing-pro",
    },
  },

  // Project 5:
  //   Title: SaaS Admin Dashboard — Operations Control
  //   Category: Real-Time Analytics Dashboards
  {
    id: "5",
    slug: "ops-control",
    title: "SaaS Admin Dashboard — Operations Control",
    tagline:
      "Data-dense, high-performance admin interface designed for complex operational workflows",
    summary:
      "A production-grade SaaS admin dashboard enabling efficient user and project management with advanced filtering, role-based UI, and interactive analytics—reducing task completion time for core admin flows by 41%.",
    role: "Frontend Architect",
    timeline: "3 months (Aug 2025 – Oct 2025)",
    team: "3 engineers, 1 designer, 1 product manager",
    tech: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "React Window",
      "React DnD",
      "Recharts",
      "Zustand",
      "React Hook Form",
      "Axe-core",
      "Playwright",
    ],
    impact: [
      "41% reduction in admin task completion time",
      "60% faster rendering of large datasets via virtualization",
      "Zero critical accessibility violations",
      "Improved dashboard personalization adoption by 45%",
    ],
    hero: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    category: "Real-Time Analytics Dashboards",
    featured: false,

    problem: [
      "Admins struggled to manage large datasets efficiently due to slow tables and unclear workflows.",
      "Role-based complexity caused inconsistent UI experiences.",
      "Analytics dashboards lacked actionable clarity and personalization.",
    ],

    constraints: [
      "Handle datasets exceeding 50k records without UI lag.",
      "Ensure keyboard accessibility across data grids and modals.",
      "Code-split heavy charting libraries to maintain performance budgets.",
      "Support role-based UI variations without duplicating logic.",
    ],

    successCriteria: [
      "Reduce core admin task flow time by ≥35%.",
      "Maintain smooth scrolling with 50k+ rows.",
      "Full keyboard navigation support for data tables.",
      "No critical Axe accessibility violations.",
    ],

    frontend: {
      title: "Virtualized, Accessible Data-Heavy UI Architecture",
      description:
        "Designed a modular dashboard with a collapsible left navigation, top global search bar, and responsive widget grid using CSS Grid and minmax(). Implemented role-based UI gating and optimized large data rendering with virtualization and optimistic interactions.",
      highlights: [
        "Virtualized tables using react-window for 50k+ records.",
        "Inline editing with optimistic UI and undo recovery pattern.",
        "Advanced filter panel with debounced inputs and contextual microcopy.",
        "Bulk actions with confirmation flows and toast notifications.",
        "Drag-and-drop dashboard personalization via React DnD.",
        "ARIA grid roles with keyboard row navigation (arrow keys + space selection).",
        "Focus-trapped modals with logical tab order.",
      ],
    },

    backend: {
      title: "Mocked BFF & Role-Based Data Simulation",
      description:
        "Implemented a lightweight BFF simulation layer to model role-based permissions, audit trails, and optimistic updates without requiring a full backend dependency.",
      highlights: [
        "Role-based access control simulation via middleware pattern.",
        "Activity timeline modeled as event stream per user.",
        "CSV export generated client-side for fast reporting.",
        "Global state managed with Zustand for predictable updates.",
        "Real-time-style notifications mocked via setInterval event emitter.",
      ],
    },

    infra: {
      title: "Performance-Optimized Frontend Delivery",
      description:
        "Focused on frontend performance optimization through code-splitting, lazy loading, and asset minimization strategies.",
      highlights: [
        "Dynamic imports for charting libraries.",
        "Lazy-loaded admin widgets.",
        "Bundle size monitoring in CI pipeline.",
        "Static optimization for dashboard shell.",
        "Production profiling to eliminate unnecessary re-renders.",
      ],
    },

    testing: {
      title: "Usability & Rendering Reliability Testing",
      description:
        "Testing emphasized keyboard accessibility, table rendering stability, and regression detection in high-density data views.",
      highlights: [
        "Unit tests for filter logic and bulk action reducers.",
        "Playwright E2E tests for core task flow (find user → change role → verify audit trail).",
        "Automated Axe accessibility audits.",
        "Visual regression testing for table and widget layouts.",
        "Performance testing for 50k+ row virtualization scenarios.",
      ],
    },

    outcomes: [
      { metric: "Admin task completion time", value: "-41%" },
      { metric: "Large dataset rendering speed", value: "+60%" },
      { metric: "Accessibility violations", value: "0 critical issues" },
      { metric: "Dashboard personalization adoption", value: "+45%" },
    ],

    learnings: [
      "Virtualization is essential for data-heavy interfaces but must integrate with accessible grid semantics.",
      "Optimistic UI patterns significantly enhance perceived performance in admin tools.",
      "Consistent design tokens reduce cognitive load in complex systems.",
      "Keyboard accessibility requires early architectural decisions—not retrofitting.",
    ],

    links: {
      live: "https://ops-control.netlify.app",
      code: "https://github.com/Benjamin515/ops-control",
    },
  },

  // Project 6:
  //   Title: Real-Time Operational Analytics Dashboard
  //   Category: Real-Time Analytics Dashboards
  {
    id: "6",
    slug: "ops-cockpit",
    title: "Real-Time Operational Analytics Dashboard",
    tagline:
      "Enterprise SRE cockpit for live service health, trace correlation, and incident triage",
    summary:
      "A multi-tenant, real-time observability dashboard for enterprise SRE teams, processing hundreds of thousands of telemetry events per second and reducing mean time to resolution (MTTR) by 34%.",
    role: "Systems Engineer",
    timeline: "5 months (Jan 2025 – May 2025)",
    team: "6 engineers, 1 designer, 1 product manager, 1 data engineer",
    tech: [
      "TypeScript",
      "React",
      "WebSocket",
      "WebGL (Canvas)",
      "Node.js",
      "Kafka",
      "OpenTelemetry",
      "ClickHouse",
      "Jaeger",
      "Elasticsearch",
      "Prometheus",
      "Kubernetes",
      "OIDC SSO + SCIM",
    ],
    impact: [
      "34% reduction in MTTR",
      "Ingestion throughput: 300k+ events/sec",
      "99.99% real-time feed uptime",
      "45% faster incident triage workflow",
    ],
    hero: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
    category: "Real-Time Analytics Dashboards",
    featured: false,

    problem: [
      "SRE teams lacked a unified interface to correlate metrics, logs, and traces during incidents.",
      "High telemetry volumes caused UI lag and query bottlenecks.",
      "Multi-tenant observability required strict RBAC and PII controls.",
    ],

    constraints: [
      "Handle 300k+ telemetry events/sec ingestion.",
      "Sub-1s dashboard update latency.",
      "Strict multi-tenant isolation and auditability.",
      "Long-term retention without degrading query performance.",
    ],

    successCriteria: [
      "Reduce MTTR by ≥30%.",
      "Enable real-time drilldown with <500ms interaction latency.",
      "Zero cross-tenant data leakage.",
      "Maintain 99.99% uptime for live feed service.",
    ],

    frontend: {
      title: "High-Performance Realtime Observability UI",
      description:
        "Built a WebSocket-driven frontend with delta-based patch updates and local caching of recent telemetry. Implemented WebGL canvas charts for high-density time-series and interactive flame graphs for distributed traces.",
      highlights: [
        "WebSocket subscription model with diff-patch state reconciliation.",
        "WebGL-based time-series rendering for 100k+ datapoints.",
        "Interactive flame graphs for trace visualization.",
        "Streaming log tail viewer with incremental rendering.",
        "Keyboard-driven drilldowns and focused incident triage mode.",
        "Backpressure handling with batched UI updates.",
        "Local in-memory cache for last N minutes with reconciliation queries.",
      ],
    },

    backend: {
      title: "Telemetry Aggregation & Query Microservices",
      description:
        "Designed a telemetry ingestion and aggregation pipeline leveraging OpenTelemetry collectors, Kafka streaming, and specialized storage engines for metrics, logs, and traces.",
      highlights: [
        "Agents → OpenTelemetry Collector → Kafka ingestion pipeline.",
        "Metrics stored in ClickHouse with rollup strategies.",
        "Distributed traces indexed in Jaeger.",
        "Logs indexed in Elasticsearch with PII scrubbing at ingestion.",
        "Aggregation microservices for SLO rollups and service heatmaps.",
        "RBAC enforcement middleware with audit logs for UI actions.",
        "Streaming router for real-time frontend updates.",
      ],
    },

    infra: {
      title: "Scalable, Multi-Tenant Observability Infrastructure",
      description:
        "Containerized microservices orchestrated via Kubernetes with horizontal scaling for ingestion services and long-term retention systems.",
      highlights: [
        "Kafka cluster scaled for 300k+ events/sec throughput.",
        "Horizontal pod autoscaling for ingestion and query services.",
        "Tenant isolation via namespace segmentation and token-scoped queries.",
        "SSO integration via OIDC with SCIM team synchronization.",
        "Cross-region replication for high availability.",
        "Comprehensive observability of the observability platform.",
      ],
    },

    testing: {
      title: "Incident Replay & High-Volume Simulation Testing",
      description:
        "Robust QA strategy combining synthetic telemetry generation, replayed incidents, and load testing to validate correctness under stress.",
      highlights: [
        "Synthetic traffic generators simulating production load.",
        "Replay engine for historical incident simulation.",
        "Load testing ingestion pipeline at 300k+ events/sec.",
        "Contract tests for trace/metrics/log query services.",
        "Security testing for tenant boundary enforcement.",
      ],
    },

    outcomes: [
      { metric: "Mean Time to Resolution (MTTR)", value: "-34%" },
      { metric: "Telemetry ingestion throughput", value: "300k+ events/sec" },
      { metric: "Real-time feed uptime", value: "99.99%" },
      { metric: "Incident triage speed", value: "+45%" },
    ],

    learnings: [
      "Real-time UIs must treat streaming data as a backpressure problem, not just a rendering challenge.",
      "Delta-based patching drastically reduces client rendering overhead.",
      "Observability systems require observability themselves for reliability.",
      "Tenant isolation must be enforced at both query and storage layers.",
    ],

    links: {
      live: "https://ops-cockpit.netlify.app",
      code: "https://github.com/Benjamin515/ops-cockpit",
    },
  },

  // Project 7:
  //   Title: Customer 360 Real-Time Insights Platform
  //   Category: Real-Time Analytics Dashboards
  {
    id: "7",
    slug: "ecustomer-360",
    title: "Customer 360 Real-Time Insights Platform",
    tagline:
      "Unified real-time customer intelligence for marketing and CX teams",
    summary:
      "A real-time Customer 360 platform aggregating cross-channel interactions into a unified profile view, enabling marketing and CX teams to act instantly—reducing VIP response time by 52% and increasing campaign conversion lift by 18%.",
    role: "Data Platform Engineer",
    timeline: "8 months (Mar 2025 – Oct 2025)",
    team: "7 engineers, 1 designer, 1 product manager, 2 data analysts",
    tech: [
      "TypeScript",
      "React",
      "Next.js",
      "Kafka",
      "Apache Flink",
      "ksqlDB",
      "Redis",
      "ClickHouse",
      "Node.js",
      "WebSocket",
      "Slack API",
      "Microsoft Teams API",
      "AES Encryption",
      "Docker",
      "Kubernetes",
    ],
    impact: [
      "52% reduction in VIP response time",
      "18% campaign conversion lift",
      "Sub-800ms profile update latency",
      "Real-time enrichment throughput: 200k+ events/sec",
    ],
    hero: "https://images.unsplash.com/photo-1559526324-593bc073d938",
    category: "Real-Time Analytics Dashboards",
    featured: false,

    problem: [
      "Customer data was siloed across web, mobile, call-center, and POS systems.",
      "CX agents lacked real-time visibility into high-value customer behavior.",
      "Strict GDPR and consent requirements limited session replay and PII exposure.",
    ],

    constraints: [
      "Sub-1s enrichment and profile update latency.",
      "Full GDPR compliance with encrypted PII and consent gating.",
      "Handle 200k+ real-time events/sec.",
      "Enable multi-channel alerting (Slack/Teams) without data leakage.",
    ],

    successCriteria: [
      "Reduce VIP response time by ≥40%.",
      "Deliver unified profile updates within 1s of event ingestion.",
      "Zero unauthorized PII exposure incidents.",
      "Enable real-time funnel and cohort recalculations.",
    ],

    frontend: {
      title: "Live Customer Profile & Interactive Analytics UI",
      description:
        "Developed a sliding panel-based Customer 360 UI with real-time event subscriptions. Implemented delta updates to profile views and interactive funnel/cohort visualizations with live filtering and CSV exports.",
      highlights: [
        "Sliding profile drawer with tabs for timeline, notes, and support tickets.",
        "Mini session replay snippets with privacy filtering and consent checks.",
        "WebSocket-based subscription for live profile delta updates.",
        "Optimistic UI for notes, tagging, and health score adjustments.",
        "Interactive funnel and cohort charts with dynamic filtering.",
        "CSV export for campaign and cohort reporting.",
        "UI-level PII masking toggle and visible consent status indicator.",
      ],
    },

    backend: {
      title: "Real-Time Enrichment & Feature Store Architecture",
      description:
        "Engineered a streaming data pipeline ingesting multi-channel events via Kafka, enriched in real-time using Flink and ksqlDB, and stored in Redis and ClickHouse for low-latency profile retrieval.",
      highlights: [
        "Kafka event ingestion from web, mobile, call-center, and POS.",
        "Flink stream processing for enrichment, scoring, and VIP detection.",
        "Feature store backed by Redis for hot profiles and ClickHouse materialized views.",
        "API layer for profile queries and real-time WebSocket subscriptions.",
        "Encrypted PII storage with consent flag enforcement at query layer.",
        "Slack and Microsoft Teams integrations for VIP alert routing.",
      ],
    },

    infra: {
      title: "Low-Latency, Governance-Aware Streaming Infrastructure",
      description:
        "Deployed containerized stream processors and APIs on Kubernetes with autoscaling based on event throughput. Implemented encryption, consent enforcement, and strict audit logging for compliance.",
      highlights: [
        "Horizontal scaling of Kafka and Flink clusters.",
        "Autoscaling based on event lag metrics.",
        "End-to-end encryption of personal data fields.",
        "GDPR-safe processing zone with legal pre-screen logic.",
        "Audit logs for profile access and data exports.",
        "Monitoring of stream lag and enrichment latency.",
      ],
    },

    testing: {
      title: "Synthetic Event Replay & Compliance Validation",
      description:
        "QA combined high-volume synthetic event generation with privacy compliance verification to ensure correctness of real-time UI updates and consent enforcement.",
      highlights: [
        "Synthetic event generators simulating multi-channel traffic.",
        "Replay testing to validate delta UI updates.",
        "Load testing at 200k+ events/sec.",
        "Consent enforcement test cases for replay access.",
        "Security tests for encrypted PII and access controls.",
      ],
    },

    outcomes: [
      { metric: "VIP response time", value: "-52%" },
      { metric: "Campaign conversion lift", value: "+18%" },
      { metric: "Profile update latency", value: "<800ms" },
      { metric: "Event enrichment throughput", value: "200k+ events/sec" },
    ],

    learnings: [
      "Real-time enrichment pipelines require strict latency budgets at every stage.",
      "Consent enforcement must be embedded in the query layer—not just UI masking.",
      "Delta-based profile streaming dramatically reduces frontend re-render costs.",
      "Feature stores enable scalable, low-latency personalization at enterprise scale.",
    ],

    links: {
      live: "https://ecustomer-360.netlify.app",
      code: "https://github.com/Benjamin515/customer-360",
    },
  },

  // Project 8:
  //   Title: Cross-Product Enterprise Design System
  //   Category: Enterprise Design Systems
  {
    id: "8",
    slug: "enterprise-design-system",
    title: "Cross-Product Enterprise Design System",
    tagline:
      "Multi-brand, multi-product design system powering 50+ enterprise teams",
    summary:
      "A centralized enterprise design system enabling 50+ product teams across a multinational organization to ship consistent, accessible, and themeable UIs—reducing UI inconsistency defects by 46% and accelerating feature delivery by 28%.",
    role: "Design Systems Engineer",
    timeline:
      "Ongoing (Sep 2025 – Present) (Foundation → Multi-Brand Expansion)",
    team: "4 engineers, 3 designers, 1 product manager",
    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Style Dictionary",
      "Storybook",
      "Chromatic",
      "Figma",
      "Babel Plugin",
      "Node.js",
      "Private npm Registry",
      "GitHub Actions",
    ],
    impact: [
      "46% reduction in UI inconsistency defects",
      "28% faster feature delivery across product teams",
      "Adopted by 50+ product teams",
      "100% WCAG AA default compliance in core components",
    ],
    hero: "https://images.unsplash.com/photo-1559027615-cd4628902d4a",
    category: "Enterprise Design Systems",
    featured: false,

    problem: [
      "Fragmented UI patterns across products led to brand inconsistency and accessibility gaps.",
      "Multi-brand architecture required local theming without duplicating components.",
      "Teams lacked governance processes for controlled evolution of shared components.",
    ],

    constraints: [
      "Support 50+ distributed product teams.",
      "Enable light/dark and multi-brand theming at runtime.",
      "Strict WCAG AA compliance by default.",
      "Private registry with SSO and signed packages.",
    ],

    successCriteria: [
      "Adoption by ≥40 product teams within first phase.",
      "Reduce UI-related defects by ≥30%.",
      "Establish semantic versioning and migration policy.",
      "Automated visual and accessibility regression checks.",
    ],

    frontend: {
      title: "Composable, Accessible Component Architecture",
      description:
        "Built a composable React component library with accessibility baked into primitives. Integrated multi-brand theming via CSS variables and Tailwind, enabling runtime theme switching and RTL support.",
      highlights: [
        "Primitive-first architecture (Button, Stack, Text, Grid) with composable APIs.",
        "Strict accessibility defaults (ARIA patterns, keyboard handling, focus states).",
        "RTL support and i18n token adjustments for long-language spacing.",
        "Runtime theme switching using CSS variables.",
        "Tree-shaking-friendly exports for optimized bundle size.",
        "Separate docs bundle to avoid inflating production builds.",
      ],
    },

    backend: {
      title: "Token Pipeline & Package Distribution System",
      description:
        "Implemented a design token pipeline using Style Dictionary to generate CSS variables, platform tokens, and TypeScript-safe mappings via custom Babel plugin. Components published to private npm registry with semantic versioning.",
      highlights: [
        "Single source of truth token JSON.",
        "Style Dictionary generating CSS vars and platform tokens.",
        "Babel plugin enforcing token usage and type safety.",
        "Semantic versioning with automated changelog generation.",
        "Governance portal for RFC proposals and change logs.",
        "Private registry with signed packages and SSO access.",
      ],
    },

    infra: {
      title: "Automated Releases & Governance Infrastructure",
      description:
        "Established CI/CD pipelines for automated releases, visual regression tracking, and documentation hosting.",
      highlights: [
        "GitHub Actions for automated version bump and release.",
        "Storybook documentation site hosted internally.",
        "Chromatic for visual regression tracking.",
        "Axe-based accessibility regression testing in CI.",
        "Contribution workflow with required council approvals for breaking changes.",
        "Deprecation policy enforced via lint rules and console warnings.",
      ],
    },

    testing: {
      title: "Regression & Accessibility-First Testing Strategy",
      description:
        "Focused on preventing visual and accessibility regressions while ensuring interaction behavior stability.",
      highlights: [
        "Chromatic visual regression testing.",
        "Automated Axe accessibility audits per component.",
        "Unit tests for interaction logic and keyboard navigation.",
        "Snapshot tests for token consistency.",
        "Manual QA for RTL and localization edge cases.",
      ],
    },

    outcomes: [
      { metric: "UI inconsistency defects", value: "-46%" },
      { metric: "Feature delivery speed", value: "+28%" },
      { metric: "Product team adoption", value: "50+ teams" },
      {
        metric: "Accessibility compliance",
        value: "100% WCAG AA in core library",
      },
    ],

    learnings: [
      "Design systems succeed when governance is as strong as the component architecture.",
      "Tokens must be treated as a platform, not a styling afterthought.",
      "Backward compatibility and migration guides are critical for enterprise trust.",
      "Developer experience directly impacts adoption velocity across teams.",
    ],

    links: {
      live: "https://enterprise-design-system.netlify.app",
      code: "https://github.com/Benjamin515/enterprise-design-system",
      storybook: "https://enterprise-design-system.netlify.app",
    },
  },

  // Project 9:
  //   Title: Real-Time Fraud Detection Dashboard
  //   Category: Real-Time Analytics Dashboards
  {
    id: "9",
    slug: "efraud-shield",
    title: "Real-Time Fraud Detection Dashboard",
    tagline:
      "Streaming risk intelligence platform for rapid financial fraud intervention",
    summary:
      "A real-time fraud detection and case management dashboard for finance and risk teams, enabling sub-second transaction monitoring and reducing fraud response time by 47% while improving detection precision by 21%.",
    role: "Lead Engineer",
    timeline: "6 months (Feb 2025 – Jul 2025)",
    team: "5 engineers, 1 data scientist, 1 designer, 1 product manager",
    tech: [
      "React",
      "TypeScript",
      "WebSocket",
      "Node.js",
      "Apache Flink",
      "Spark Streaming",
      "Kafka",
      "Redis",
      "PostgreSQL (Immutable Ledger)",
      "ClickHouse",
      "Docker",
      "Kubernetes",
      "AES-256 Encryption",
    ],
    impact: [
      "47% reduction in fraud response time",
      "21% improvement in detection precision",
      "Sub-500ms transaction-to-dashboard latency",
      "100% audit traceability for flagged cases",
    ],
    hero: "https://images.unsplash.com/photo-1563986768609-322da13575f3",
    category: "Real-Time Analytics Dashboards",
    featured: false,

    problem: [
      "Fraud analysts lacked a unified real-time interface to monitor suspicious transactions.",
      "High transaction throughput caused latency in manual intervention workflows.",
      "Regulatory requirements demanded immutable audit trails and explainable model decisions.",
    ],

    constraints: [
      "Sub-1s latency from transaction ingestion to UI update.",
      "Compliance with SOC2 and PCI requirements.",
      "Regional data partitioning for data sovereignty.",
      "Immutable audit trail for legal defensibility.",
    ],

    successCriteria: [
      "Reduce fraud response time by ≥40%.",
      "Increase detection precision without increasing false positives.",
      "Ensure complete auditability of analyst actions.",
      "Maintain system uptime ≥99.99%.",
    ],

    frontend: {
      title: "Low-Latency Risk Intelligence Interface",
      description:
        "Built a streaming transaction interface using WebSocket server push with per-user filtered feeds. Implemented interactive filtering, explainability visualizations, and secure action workflows with approval gating.",
      highlights: [
        "Live transaction stream with delta updates and dynamic risk score badges.",
        "Server-side filtered WebSocket subscriptions per analyst.",
        "Interactive filtering by region, score threshold, and rule triggers.",
        "Model explainability panel showing feature contributions and weights.",
        "Interactive user behavior timeline for contextual analysis.",
        "Two-person approval queue for high-risk actions (block/freeze).",
        "Case management workflow with evidence attachments and status tracking.",
      ],
    },

    backend: {
      title: "Streaming Risk Engine & Immutable Case Ledger",
      description:
        "Designed a near real-time fraud scoring pipeline leveraging Flink/Spark Streaming for rule evaluation and ML inference. Integrated feature store and feedback loop for model retraining while ensuring regional data isolation.",
      highlights: [
        "Kafka ingestion pipeline for transaction streams.",
        "Flink/Spark Streaming rules engine applying ML classifiers and heuristics.",
        "Feature store integration for real-time model inference.",
        "Feedback loop capturing analyst decisions for supervised retraining.",
        "Region-partitioned storage with mirrored read replicas.",
        "Immutable PostgreSQL ledger for case actions and audit logs.",
      ],
    },

    infra: {
      title: "Secure, Compliant, Multi-Region Infrastructure",
      description:
        "Deployed containerized streaming services on Kubernetes with regional data segmentation. Implemented encryption, access auditing, and disaster recovery aligned with SOC2 and PCI controls.",
      highlights: [
        "Multi-region Kubernetes clusters with data sovereignty controls.",
        "AES-256 encryption for sensitive transaction data.",
        "Role-based access control and detailed access audit logs.",
        "Immutable storage for evidentiary case records.",
        "High-availability streaming clusters with autoscaling.",
        "Continuous monitoring of latency and detection accuracy metrics.",
      ],
    },

    testing: {
      title: "Historical Replay & Accuracy Validation Testing",
      description:
        "Validated detection accuracy and UI behavior through replay of historical transaction datasets and simulation of edge-case fraud scenarios.",
      highlights: [
        "Replay engine for historical transaction validation.",
        "Synthetic fraud scenario generation for edge cases.",
        "Load testing to validate sub-500ms dashboard latency.",
        "Security testing for access controls and data encryption.",
        "End-to-end workflow tests for approval and audit logging.",
      ],
    },

    outcomes: [
      { metric: "Fraud response time", value: "-47%" },
      { metric: "Detection precision", value: "+21%" },
      { metric: "Transaction-to-UI latency", value: "<500ms" },
      { metric: "Audit traceability", value: "100% logged actions" },
    ],

    learnings: [
      "Real-time fraud detection requires balancing precision, latency, and analyst usability.",
      "Explainability builds trust between ML systems and human investigators.",
      "Immutable audit logs are essential for regulatory and legal defensibility.",
      "Server-side filtering dramatically reduces frontend rendering overhead in high-volume streams.",
    ],

    links: {
      live: "https://efraud-shield.netlify.app",
      code: "https://github.com/Benjamin515/fraud-shield",
    },
  },

  // Project 10:
  //   Title: Interactive Portfolio Gallery
  //   Category: Creative Industries — Interactive Portfolios
  {
    id: "10",
    slug: "interactive-portfolio-gallery",
    title: "Interactive Portfolio Gallery",
    tagline: "Dynamic, immersive showcase for photographers and designers",
    summary:
      "A highly interactive portfolio gallery for creative professionals, featuring masonry grids, long-form project stories, and full-bleed media viewers—boosting engagement with case studies by 38% and inquiry clicks by 22%.",
    role: "Front-End Engineer",
    timeline: "2 months (Nov 2025 – Dec 2025)",
    team: "2 engineers, 1 designer, 1 product manager",
    tech: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "GSAP",
      "Three.js",
      "Intersection Observer",
      "Masonry.js polyfill",
      "Lottie",
      "netlify",
    ],
    impact: [
      "38% increase in engagement with project stories",
      "22% increase in inquiry clicks",
      "Smooth animated masonry reflows with no jank on 100+ items",
      "Optimized lazy-loading reducing initial load by 42%",
    ],
    hero: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2",
    category: "Creative Industries — Interactive Portfolios",
    featured: false,

    problem: [
      "Static portfolio pages lacked interactivity and storytelling elements.",
      "High-resolution media required efficient loading and performance optimization.",
      "Users needed keyboard-accessible navigation and clear project context.",
    ],

    constraints: [
      "Ensure smooth animated masonry layout even with 100+ items.",
      "Support full-bleed media viewer with keyboard navigation and focus trap.",
      "Implement accessible captions (WCAG compliant) and reduced-motion mode.",
      "Optimize image lazy-loading and prefetching for performance.",
    ],

    successCriteria: [
      "Increase engagement with project stories by ≥30%.",
      "Provide seamless keyboard and reduced-motion accessibility.",
      "Ensure smooth masonry reflow animations.",
      "Enable download and share functionality with minimal friction.",
    ],

    frontend: {
      title: "Immersive Media & Interactive Story UI",
      description:
        "Built a masonry-based gallery with animated layout transitions using Framer Motion. Developed full-bleed media viewer, project story pages with pinned side navigation, scroll-triggered image reveals, and lightbox sharing functionality.",
      highlights: [
        "Masonry/variable grid with animated FLIP transitions using Framer Motion.",
        "Fullscreen media viewer with next/prev navigation, focus trap, and accessible captions.",
        "Scroll-triggered image and chapter reveals using GSAP ScrollTrigger.",
        "Long-read project stories with pinned table-of-contents side nav and progress indicator.",
        "Lightbox share simulating permalinks with fragment + local state.",
        "Lazy-loading high-res images with Intersection Observer and prefetching of next image.",
        "Optional 3D hover parallax effects via lightweight Three.js scenes.",
      ],
    },

    backend: {
      title: "Static Export & Data-Driven Project Stories",
      description:
        "Next.js static export pipeline generating optimized pages for performance and SEO. Data-driven project content managed via JSON frontmatter with pre-rendered HTML for long-form stories.",
      highlights: [
        "Next.js static site generation for fast load and SEO.",
        "JSON-based project metadata feeding gallery and story pages.",
        "Optimized images via next/image with responsive srcset and LQIP placeholders.",
        "Pre-rendered project story HTML for scroll performance.",
      ],
    },

    infra: {
      title: "Optimized Front-End Delivery",
      description:
        "Focused on high-performance static hosting and minimal runtime dependencies for smooth scrolling and media-intensive interactions.",
      highlights: [
        "netlify deployment with CDN caching for all assets.",
        "Lazy-load and prefetch strategies for images and media.",
        "Batching ScrollTrigger events to reduce listener overhead.",
        "Transform & opacity animations for GPU-accelerated motion.",
      ],
    },

    testing: {
      title: "Accessibility & Interaction Validation",
      description:
        "QA ensured accessibility, keyboard navigation, animation smoothness, and cross-browser performance for media-heavy pages.",
      highlights: [
        "Manual and automated accessibility testing (WCAG contrast, ARIA, focus order).",
        "Keyboard navigation and focus trap validation in media viewer.",
        "Performance profiling for masonry reflow and scroll-triggered animations.",
        "Reduced-motion preference testing and validation.",
        "Visual regression testing for project story layouts.",
      ],
    },

    outcomes: [
      { metric: "Project story engagement", value: "+38%" },
      { metric: "Inquiry clicks", value: "+22%" },
      { metric: "Initial load reduction", value: "-42%" },
      { metric: "Smooth masonry reflows", value: "100+ items, no jank" },
    ],

    learnings: [
      "FLIP-based animations provide smooth layout transitions even with variable-sized grids.",
      "Lazy-loading combined with prefetching is key for media-heavy pages.",
      "Accessibility and keyboard support must be integrated early in interactive components.",
      "Scroll-triggered reveals enhance storytelling without sacrificing performance.",
    ],

    links: {
      live: "https://interactive-portfolio-gallery.netlify.app",
      code: "https://github.com/Benjamin515/interactive-portfolio-gallery",
      storybook: "",
    },
  },

  // Project 11:
  //   Title: Volunteer Coordination PWA
  //   Category: Community & Non-Profit — Volunteer Coordination
  {
    id: "11",
    slug: "volunteer-coordination-pwa",
    title: "Volunteer Coordination PWA",
    tagline:
      "Offline-first progressive web app for volunteer task management and event coordination",
    summary:
      "A volunteer-focused PWA providing offline-capable task checklists, event RSVPs, and resource access—improving simulated task completion and RSVP flows by 35% while ensuring accessibility for on-site users.",
    role: "PWA Developer",
    timeline: "3 months (Aug 2025 – Oct 2025)",
    team: "3 engineers, 1 designer, 1 product manager",
    tech: [
      "React",
      "TypeScript",
      "Next.js",
      "Workbox",
      "IndexedDB",
      "Service Worker",
      "Leaflet.js",
      "Tailwind CSS",
      "localStorage",
      "PWA standards",
    ],
    impact: [
      "35% improvement in simulated task completion flows",
      "Offline RSVPs successfully queued and synced on reconnect",
      "Accessible dashboard with ≥44px touch targets",
      "PWA Lighthouse score >90 for performance, accessibility, and offline readiness",
    ],
    hero: "https://images.unsplash.com/photo-1581091215362-2e00aa6a4f3f",
    category: "Community & Non-Profit — Volunteer Coordination",
    featured: false,

    problem: [
      "Volunteers often operate in areas with limited or no connectivity.",
      "Existing tools lacked offline support and clear task guidance.",
      "Accessibility and large touch targets were not enforced in prior volunteer apps.",
    ],

    constraints: [
      "Offline-first support with form queueing and background sync.",
      "Accessible UI per WCAG standards (high contrast, ARIA live regions, large hit targets).",
      "Map integration with tile layers and basic directions for on-site navigation.",
      "Lightweight JS bundle with route-based code splitting.",
    ],

    successCriteria: [
      "Ensure all forms and task completions queue offline and sync automatically when online.",
      "Maintain ≥90 PWA Lighthouse scores.",
      "Accessible navigation and interactions for all users.",
      "Map and event data usable offline.",
    ],

    frontend: {
      title: "Offline-First Volunteer Dashboard & Task UI",
      description:
        "Developed a responsive dashboard and event detail interfaces with offline-enabled task checklists, pre-shift stepper, and interactive map components using Leaflet.js.",
      highlights: [
        "Card grid for upcoming events with offline availability badge.",
        "Event detail stepper UI with pre-shift checklist and downloadable shift docs.",
        "Offline-capable RSVP and task forms using IndexedDB queueing and service worker sync.",
        "ARAI-live regions for dynamic sync announcements.",
        "Interactive map with tile layers and simple directions.",
        "High-contrast design and ≥44px touch targets for mobile accessibility.",
      ],
    },

    backend: {
      title: "PWA Data Sync & Offline Handling",
      description:
        "Implemented background sync patterns using service workers and IndexedDB to queue offline actions and reconcile with server once online. Minimal backend API for event and task state management.",
      highlights: [
        "IndexedDB storage for pending RSVPs and task completions.",
        "Service Worker background sync to retry queued requests automatically.",
        "REST API endpoints for event and task state management.",
        "Optimistic UI updates with offline indicators.",
        "Conflict resolution for concurrent offline edits.",
      ],
    },

    infra: {
      title: "Lightweight PWA Deployment & Caching Strategy",
      description:
        "Configured caching strategies for assets and dynamic content using Workbox, enabling offline browsing and fast load times.",
      highlights: [
        "Route-based caching for dynamic content and static assets.",
        "Precache core assets for offline-first experience.",
        "Lazy-loading images and media for performance optimization.",
        "Code-splitting per route for minimal JS footprint.",
        "Monitoring offline/online sync events for system visibility.",
      ],
    },

    testing: {
      title: "Offline, Accessibility, and Performance Testing",
      description:
        "QA focused on offline behavior, PWA performance, accessibility, and correctness of queued actions.",
      highlights: [
        "Simulated offline/online scenarios to test background sync reliability.",
        "Lighthouse audits for performance, accessibility, and PWA compliance (>90).",
        "Manual and automated accessibility checks: keyboard navigation, ARIA live regions, high contrast.",
        "Cross-device touch target testing for ≥44px hit areas.",
        "Validation of map usability offline with cached tiles.",
      ],
    },

    outcomes: [
      { metric: "Task completion flow efficiency", value: "+35%" },
      { metric: "Offline RSVP success", value: "100% queued & synced" },
      { metric: "Accessibility compliance", value: "WCAG AA+" },
      { metric: "PWA Lighthouse score", value: ">90" },
    ],

    learnings: [
      "Offline-first design requires careful queue management and conflict resolution strategies.",
      "Service workers with IndexedDB provide robust offline form and task handling.",
      "Accessibility must be integrated into interactive components early to avoid regressions.",
      "Performance optimization is critical for PWA adoption in low-connectivity environments.",
    ],

    links: {
      live: "https://volunteer-coordination-pwa.netlify.app",
      code: "https://github.com/Benjamin515/volunteer-coordination-pwa",
    },
  },

  // Project 12:
  //   Title: Wellness Dashboard
  //   Category: Lifestyle & Personal — Wellness Dashboard
  {
    id: "12",
    slug: "ewellness-dashboard",
    title: "Wellness Dashboard",
    tagline: "Calm, data-driven interface for daily health and habit tracking",
    summary:
      "A wellness dashboard providing daily logging, trend visualization, and goal tracking with gentle UX—improving simulated daily log completion by 27% and increasing engagement with trends by 33%.",
    role: "Front-End Engineer",
    timeline: "2 months (Dec 2025 – Jan 2026)",
    team: "2 engineers, 1 designer, 1 product manager",
    tech: [
      "React",
      "TypeScript",
      "Next.js",
      "Recharts",
      "Chart.js",
      "D3.js",
      "Tailwind CSS",
      "Canvas API",
      "Framer Motion",
    ],
    impact: [
      "27% increase in simulated daily log completion",
      "33% increase in time spent on trends page",
      "Smooth animated transitions for weekly/monthly summaries",
      "Accessible chart summaries for screen readers",
    ],
    hero: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad",
    category: "Lifestyle & Personal — Wellness Dashboard",
    featured: false,

    problem: [
      "Users lacked a visually calm, interactive way to log daily habits and review trends.",
      "Charts needed to be readable and accessible while supporting animated transitions.",
      "Mobile performance required optimization to avoid jank during frequent updates.",
    ],

    constraints: [
      "Smooth animations for weekly/monthly summaries without heavy CPU usage.",
      "Accessible chart descriptions (ARIA) and table alternatives.",
      "Export weekly summary as shareable image (canvas).",
      "Optimized for both desktop and mobile.",
    ],

    successCriteria: [
      "Increase engagement with trends page by ≥30%.",
      "Improve daily log completion rates.",
      "Ensure all charts are accessible with textual summaries.",
      "Maintain smooth performance on mobile devices.",
    ],

    frontend: {
      title: "Interactive Charts & Goal Tracking UI",
      description:
        "Developed a visually calm dashboard with animated charts, calendar heatmaps, goal progress rings, and journaling modal. Implemented smooth transitions between time ranges and optimized animations for performance.",
      highlights: [
        "Calendar heatmap for daily logging with D3.js custom rendering.",
        "Animated goal progress rings using Recharts and Framer Motion.",
        "Journaling modal with sentiment input (UI only).",
        "Weekly summary export via Canvas API for shareable images.",
        "Smooth time-range transitions with requestAnimationFrame throttling.",
        "ARIA-described chart summaries and table alternative views.",
        "Drag-to-adjust sliders for goal customization (optional enhancement).",
      ],
    },

    backend: {
      title: "Static Data Simulation for Front-End Logging",
      description:
        "Simulated backend data for trend charts, logs, and goal tracking. No sensitive user data involved; focus on front-end interactions and visualization correctness.",
      highlights: [
        "Mock API endpoints for daily logs and trend aggregation.",
        "Front-end state management with React Context/Redux for daily logs.",
        "Computed weekly and monthly aggregates for charts.",
        "Export data formatted for Canvas API rendering.",
      ],
    },

    infra: {
      title: "Optimized Front-End Delivery",
      description:
        "Hosted as a static front-end app with optimized performance for desktop and mobile, leveraging lazy loading and optimized chart rendering strategies.",
      highlights: [
        "Next.js static export for fast load and PWA-like experience.",
        "Lazy-loading chart components to reduce initial bundle.",
        "Minimized SVG path animations; only animate summaries or deltas.",
        "Responsive layout with Tailwind CSS for cross-device support.",
      ],
    },

    testing: {
      title: "Accessibility and Performance QA",
      description:
        "Validated chart accessibility, animation smoothness, and interaction correctness for trend visualization and daily logging.",
      highlights: [
        "Textual and table-based alternatives tested with screen readers.",
        "Performance profiling for mobile smoothness (60fps target).",
        "QA of export-to-image functionality for weekly summaries.",
        "Validation of drag-to-adjust goal sliders.",
        "Cross-browser and device testing for responsiveness and animation fidelity.",
      ],
    },

    outcomes: [
      { metric: "Daily log completion", value: "+27%" },
      { metric: "Engagement with trends page", value: "+33%" },
      { metric: "Animation smoothness", value: "60fps average on mobile" },
      { metric: "Accessibility compliance", value: "WCAG AA" },
    ],

    learnings: [
      "Animating only summaries instead of dense SVG paths preserves mobile performance.",
      "Textual and table alternatives are essential for accessible data visualization.",
      "Gentle UX and calm visuals improve engagement without overwhelming users.",
      "Canvas-based export allows shareable snapshots without backend processing.",
    ],

    links: {
      live: "https://ewellness-dashboard.netlify.app",
      code: "https://github.com/Benjamin515/wellness-dashboard",
    },
  },

  // Kenya-Specific Web Applications
  /* // Project 13:
  //   Title: Hifadhi Tech Landing Page
  //   Category: Kenyan Eco-Tech Landing
  {
    id: "13",
    slug: "hifadhi-tech-landing",
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
      "netlify / Netlify",
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
        "Deployment optimized for static and dynamic content via netlify or Netlify with automated pipelines and performance monitoring.",
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
      live: "https://hifadhi‑tech.com",
      code: "https://github.com/username/hifadhi‑tech‑landing",
      storybook: "https://hifadhi‑tech.com/storybook",
    },
  },
  // Project 14:
  //   Title: Kijiji Solar Marketplace
  //   Category: Solar Marketplace
  {
    id: "14",
    slug: "kijiji-solar-marketplace",
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
      "Refined techniques for building highly interactive, data-driven marketplaces.",
      "Improved strategies for responsive, accessible, and performant card-based layouts.",
      "Experience designing scalable component libraries with future extensibility in mind.",
    ],
    links: {
      live: "https://kijiji-solar.com",
      code: "https://github.com/username/kijiji-solar-marketplace",
      storybook: "https://kijiji-solar.com/storybook",
    },
  },
  // Project 15:
  //   Title: TechBora EdTech Platform
  //   Category: Kenyan EdTech Platform
  {
    id: "15",
    slug: "techbora-edtech-platform",
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
      live: "https://techbora.com",
      code: "https://github.com/username/techbora-edtech",
      storybook: "https://techbora.com/storybook",
    },
  },
  // Project 16:
  //   Title: Neighborhood — Local Community Events Hub
  //   Category: Local Community Events Platform
  {
    id: "16",
    slug: "neighborhood-events-hub",
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
      live: "https://neighborhood.com",
      code: "https://github.com/username/neighborhood-events-hub",
      storybook: "https://neighborhood.com/storybook",
    },
  }, */
];
