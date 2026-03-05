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
  {
    category: "Scalable E-Commerce Platforms",
    priority: 1,
    featured: true,
    id: "1",
    slug: "ecommerce-platform",
    title: "Scalable E-Commerce Platform",
    tagline: "High-performance checkout with sub-2s page loads",
    summary:
      "Built a full checkout pipeline with optimized LCP and <2s product page load; migrated image delivery to WebP + CDN, increasing conversion by 18% (A/B tested).",
    role: "Lead Full-Stack Engineer",
    timeline: "6 months (Jan 2025 – Jun 2025)",
    team: "4 engineers, 1 designer, 1 product manager",
    tech: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "Docker",
      "Kubernetes",
      "AWS S3",
      "CloudFront",
    ],
    impact: [
      "Reduced product page LCP from 4.5s → 1.8s",
      "Increased conversion rate by 18% via A/B testing",
      "Achieved Lighthouse score 92 (desktop), 78 (mobile)",
      "Implemented real-time inventory sync across 3 warehouses",
    ],
    hero: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1600&h=900&fit=crop",
    problem: [
      "Slow page loads (avg 4.5s LCP) causing 23% bounce rate on product pages",
      "Inconsistent inventory data leading to overselling incidents",
      "No optimistic UI patterns — users waited for every cart action",
    ],
    constraints: [
      "Must maintain compatibility with legacy payment gateway",
      "Budget: $40k engineering time",
      "Target: <2s LCP on 3G, 90+ Lighthouse (desktop)",
    ],
    successCriteria: [
      "LCP < 2.5s on product detail pages",
      "Zero overselling incidents in 30-day post-launch window",
      "Conversion rate uplift > 10%",
    ],
    frontend: {
      title: "Component Architecture & Performance",
      description:
        "Built a design system with 42 accessible components, implemented image optimization pipeline, and added optimistic UI for cart interactions.",
      highlights: [
        "Responsive image pipeline: generated 4 srcset sizes + WebP fallback, reduced image payload by 67%",
        "Implemented LQIP (Low Quality Image Placeholder) with base64-encoded blur hashes",
        "Optimistic cart updates with background sync and toast-based undo",
        "Keyboard-navigable product variant selector using ARIA radiogroup pattern",
        "Staggered fade-in animations for product grids (Motion)",
        "Focus trap in cart slide-over with accessible close button",
      ],
    },
    backend: {
      title: "API Design & Real-Time Sync",
      description:
        "Designed REST API with JWT auth, built real-time inventory sync using Redis pub/sub, and implemented idempotent payment processing.",
      highlights: [
        "REST API with OpenAPI spec + auto-generated TypeScript types",
        "JWT-based authentication with refresh token rotation",
        "Redis pub/sub for real-time inventory updates across 3 warehouses",
        "Idempotent payment endpoint with deduplication keys",
        "Postgres connection pooling + read replicas for product catalog queries",
        "Rate limiting middleware (100 req/min per user)",
      ],
    },
    infra: {
      title: "DevOps & Observability",
      description:
        "Containerized app with Docker, deployed to Kubernetes, set up CI/CD pipeline, and implemented full observability stack.",
      highlights: [
        "Docker multi-stage builds reducing image size from 1.2GB → 340MB",
        "Kubernetes deployment with auto-scaling (2–8 pods based on CPU)",
        "GitHub Actions CI/CD: automated tests, Lighthouse CI, and blue-green deployments",
        "CloudFront CDN for static assets with cache invalidation on deploy",
        "Structured logging (Winston) + APM (New Relic) for request tracing",
        "Uptime monitoring with PagerDuty alerts for P1 incidents",
      ],
    },
    testing: {
      title: "Quality Assurance & Test Coverage",
      description:
        "Comprehensive test suite with unit, integration, and E2E tests; visual regression testing; and accessibility audits.",
      highlights: [
        "Unit tests (Jest + React Testing Library): 87% coverage",
        "Integration tests for API endpoints using Supertest",
        "E2E flows (Playwright): checkout, cart, search, product detail",
        "Visual regression tests (Percy) for critical UI components",
        "Automated a11y audits (axe-core) in CI — zero critical issues",
        "Load testing (k6): validated 500 concurrent users without degradation",
      ],
    },
    outcomes: [
      { metric: "Page Load Time (LCP)", value: "4.5s → 1.8s (-60%)" },
      { metric: "Conversion Rate", value: "+18% (A/B tested)" },
      { metric: "Lighthouse Score (Desktop)", value: "92/100" },
      { metric: "Lighthouse Score (Mobile)", value: "78/100" },
      { metric: "Image Payload", value: "-67% (WebP + srcset)" },
      { metric: "Overselling Incidents", value: "0 (post-launch 30 days)" },
    ],
    learnings: [
      "Optimistic UI patterns dramatically improve perceived performance — users felt the site was 'instant' even though network requests still happened in the background.",
      "Investing in image optimization (srcset, WebP, LQIP) had the highest ROI for performance improvements — 60% reduction in LCP for <10% engineering time.",
    ],
    links: {
      live: "#",
      code: "https://github.com/yourusername/ecommerce-platform",
      storybook: "#",
    },
  },
  {
    category: "Enterprise Design Systems",
    priority: 3,
    featured: false,
    id: "2",
    slug: "design-system",
    title: "Enterprise Design System",
    tagline: "42 accessible components powering 12 product teams",
    summary:
      "Built a production-grade design system from design tokens to Storybook documentation, adopted by 12 teams and reducing component development time by 40%.",
    role: "Design System Lead",
    timeline: "4 months (Aug 2024 – Nov 2024)",
    team: "2 engineers, 1 designer",
    tech: [
      "React",
      "TypeScript",
      "Storybook",
      "Tailwind CSS",
      "Radix UI",
      "Style Dictionary",
      "Chromatic",
    ],
    impact: [
      "42 accessible components with 100% WCAG 2.1 AA compliance",
      "Adopted by 12 product teams (150+ engineers)",
      "Reduced component development time by 40%",
      "Zero critical a11y issues in quarterly audits",
    ],
    hero: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=1600&h=900&fit=crop",
    problem: [
      "15 different button styles across product suite — no consistency",
      "Accessibility failures in quarterly audits (avg 12 critical issues per product)",
      "Engineers building duplicate components — wasting ~30% of frontend sprint capacity",
    ],
    constraints: [
      "Must support both light and dark themes",
      "Must work with existing Tailwind CSS v4 setup",
      "Target: ship 30+ components in 4 months",
    ],
    successCriteria: [
      "Zero critical accessibility issues in all components",
      "Adoption by 50%+ of product teams within 6 months",
      "Component development time reduced by 30%+",
    ],
    frontend: {
      title: "Token System & Component API",
      description:
        "Created a unified token system using Style Dictionary, built composable components with Radix UI primitives, and documented everything in Storybook.",
      highlights: [
        "Design tokens in JSON: colors, typography, spacing, radii, elevation",
        "Style Dictionary pipeline generating CSS variables + Tailwind config",
        "Composable component API using Radix UI primitives (Polymorphic 'asChild' pattern)",
        "Controlled + uncontrolled variants for all form components",
        "Focus-visible outlines following WCAG 2.1 guidelines",
        "Responsive prop variants (e.g., size={{base: 'sm', md: 'lg'}})",
      ],
    },
    backend: {
      title: "Automation & Tooling",
      description:
        "Built CLI tools for component scaffolding, automated Storybook deployment, and integrated visual regression testing.",
      highlights: [
        "CLI tool (Node.js) to scaffold new components with tests + stories",
        "Automated Storybook deployment to GitHub Pages via CI",
        "Component usage analytics tracking adoption across repos",
        "Automated bundle size reporting (size-limit) in PRs",
      ],
    },
    infra: {
      title: "Documentation & Distribution",
      description:
        "Published design system as npm package, set up Chromatic for visual testing, and created comprehensive documentation site.",
      highlights: [
        "Published to private npm registry with semantic versioning",
        "Chromatic integration for visual regression testing on every PR",
        "Storybook deployed with search, accessibility addon, and design token viewer",
        "Figma integration: design tokens synced bi-directionally",
        "Automated changelog generation from conventional commits",
      ],
    },
    testing: {
      title: "Quality & Accessibility",
      description:
        "Every component tested for behavior, accessibility, and visual consistency.",
      highlights: [
        "Unit tests: 92% coverage (Jest + React Testing Library)",
        "Accessibility tests: axe-core + manual keyboard nav checks",
        "Visual regression: Chromatic snapshots for all component states",
        "Cross-browser testing: Chrome, Firefox, Safari (desktop + mobile)",
        "Dark mode + RTL variants tested for all components",
      ],
    },
    outcomes: [
      { metric: "Components Built", value: "42 (30 planned)" },
      { metric: "Team Adoption", value: "12/18 teams (67%)" },
      { metric: "Dev Time Reduction", value: "-40%" },
      { metric: "A11y Issues", value: "0 critical (quarterly audit)" },
      { metric: "Storybook Stories", value: "180+ documented" },
      { metric: "Bundle Size (core)", value: "24KB gzipped" },
    ],
    learnings: [
      "Token-first approach was key — defining color, spacing, and type scales before building components ensured consistency from day one.",
      "Composable component APIs (asChild pattern) made components more flexible without bloating the API surface area.",
    ],
    links: {
      storybook: "#",
      code: "https://github.com/yourusername/design-system",
    },
  },
  {
    category: "Real-Time Analytics Dashboards",
    priority: 2,
    featured: true,
    id: "3",
    slug: "real-time-dashboard",
    title: "Real-Time Analytics Dashboard",
    tagline: "Live data visualization with sub-100ms latency",
    summary:
      "Built a real-time analytics dashboard processing 50k events/sec with WebSocket subscriptions, optimistic updates, and interactive charts.",
    role: "Senior Full-Stack Engineer",
    timeline: "3 months (Sep 2024 – Nov 2024)",
    team: "3 engineers, 1 data analyst",
    tech: [
      "React",
      "TypeScript",
      "Recharts",
      "WebSockets",
      "Node.js",
      "Redis",
      "TimescaleDB",
      "Docker",
    ],
    impact: [
      "Processes 50k events/sec with <100ms latency",
      "Real-time updates via WebSocket with automatic reconnection",
      "Interactive charts with drill-down and export capabilities",
      "Reduced data staleness from 5min → real-time",
    ],
    hero: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&h=900&fit=crop",
    problem: [
      "Legacy dashboard refreshed every 5 minutes — data was stale and decisions delayed",
      "No drill-down capability — users couldn't investigate anomalies",
      "Chart rendering blocked main thread causing jank with large datasets",
    ],
    constraints: [
      "Must handle 50k events/sec peak load",
      "Latency: <100ms from event to UI update",
      "Budget: reuse existing TimescaleDB infrastructure",
    ],
    successCriteria: [
      "Real-time updates with <100ms latency (p95)",
      "Zero data loss during WebSocket reconnections",
      "60fps chart interactions with 10k+ data points",
    ],
    frontend: {
      title: "Real-Time UI & Data Visualization",
      description:
        "Implemented WebSocket client with reconnection logic, optimistic updates, and performant chart rendering.",
      highlights: [
        "WebSocket client with exponential backoff reconnection strategy",
        "Optimistic updates for user actions (filters, date range)",
        "Virtualized chart rendering using Recharts + custom windowing for 10k+ points",
        "Web Worker for data aggregation to keep main thread responsive",
        "Skeleton loaders with animated pulse effect during initial load",
        "CSV/PNG export functionality for charts and tables",
      ],
    },
    backend: {
      title: "Event Processing & API",
      description:
        "Built event ingestion pipeline with Redis pub/sub, TimescaleDB for time-series storage, and WebSocket server for real-time broadcasts.",
      highlights: [
        "WebSocket server (ws library) with Redis adapter for horizontal scaling",
        "Event ingestion pipeline: Kafka → Redis → TimescaleDB",
        "Continuous aggregates in TimescaleDB for pre-computed rollups",
        "Rate limiting per connection (1000 events/sec)",
        "Authentication via JWT tokens in WebSocket handshake",
        "Graceful shutdown with connection draining",
      ],
    },
    infra: {
      title: "Scalability & Monitoring",
      description:
        "Deployed WebSocket servers with auto-scaling, implemented connection pooling, and set up observability for event pipeline.",
      highlights: [
        "Docker Swarm with 3–10 WebSocket server replicas based on connection count",
        "Redis pub/sub for broadcasting events across server instances",
        "Prometheus metrics: event throughput, latency p50/p95/p99, connection count",
        "Grafana dashboards for real-time monitoring of event pipeline",
        "Automated alerting for >500ms event latency or >5% connection error rate",
      ],
    },
    testing: {
      title: "Performance & Load Testing",
      description:
        "Load tested WebSocket infrastructure, validated reconnection logic, and ensured data consistency.",
      highlights: [
        "Load testing (Artillery): validated 10k concurrent WebSocket connections",
        "Chaos testing: simulated server restarts and network partitions",
        "End-to-end tests (Playwright) for critical dashboard flows",
        "Unit tests for data aggregation logic in Web Workers",
        "Visual regression for chart rendering accuracy",
      ],
    },
    outcomes: [
      { metric: "Event Throughput", value: "50k events/sec (peak)" },
      { metric: "Latency (p95)", value: "87ms (event → UI)" },
      { metric: "Data Staleness", value: "5min → real-time" },
      { metric: "Concurrent Connections", value: "10k (load tested)" },
      { metric: "Reconnection Success", value: "99.8%" },
      { metric: "Chart FPS (10k points)", value: "60fps" },
    ],
    learnings: [
      "Web Workers for data-heavy operations (aggregation, sorting) were essential — moved CPU-intensive work off main thread and kept UI at 60fps.",
      "Exponential backoff + jitter for WebSocket reconnections prevented thundering herd problem when servers restarted.",
    ],
    links: {
      live: "#",
      code: "https://github.com/yourusername/realtime-dashboard",
    },
  },
  {
    category: "CI/CD Pipeline Automation",
    priority: 4,
    featured: false,
    id: "4",
    slug: "devops-automation",
    title: "CI/CD Pipeline Automation",
    tagline: "Zero-touch deployments with <5min cycle time",
    summary:
      "Designed and implemented a fully automated CI/CD pipeline reducing deployment time from 45min → 4.5min and eliminating manual release process.",
    role: "DevOps Engineer",
    timeline: "2 months (Dec 2024 – Jan 2025)",
    team: "2 engineers",
    tech: [
      "GitHub Actions",
      "Docker",
      "Kubernetes",
      "Terraform",
      "AWS",
      "Prometheus",
      "Grafana",
    ],
    impact: [
      "Deployment time: 45min → 4.5min (-90%)",
      "Zero manual steps in release process",
      "Automated rollback on health check failures",
      "100% deployment success rate (last 3 months)",
    ],
    hero: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=1600&h=900&fit=crop",
    problem: [
      "Manual deployment process took 45min and required 3 engineers",
      "No automated rollback — incidents required manual intervention (avg 15min MTTR)",
      "Inconsistent environments causing 'works on my machine' issues",
    ],
    constraints: [
      "Must maintain zero-downtime deployments",
      "Budget: use existing AWS infrastructure",
      "Target: <5min deployment time",
    ],
    successCriteria: [
      "Deployment time <5min from merge to production",
      "Automated rollback on failed health checks",
      "Zero manual steps in deployment process",
    ],
    frontend: {
      title: "Build Optimization",
      description:
        "Optimized build pipeline with caching, parallelization, and incremental builds.",
      highlights: [
        "Docker layer caching reduced build time by 70%",
        "Parallel test execution across 4 runners",
        "Incremental TypeScript builds with tsbuildinfo caching",
        "Lighthouse CI with performance budget enforcement",
      ],
    },
    backend: {
      title: "Deployment Strategy",
      description:
        "Implemented blue-green deployments with automated health checks and rollback logic.",
      highlights: [
        "Blue-green deployment strategy with traffic shifting",
        "Automated smoke tests post-deployment",
        "Health check endpoints with custom validation logic",
        "Automatic rollback on failed health checks within 30s",
        "Database migrations with backward compatibility checks",
      ],
    },
    infra: {
      title: "Infrastructure as Code",
      description:
        "Codified all infrastructure using Terraform, set up multi-environment pipelines, and implemented GitOps workflow.",
      highlights: [
        "Terraform modules for VPC, EKS cluster, RDS, and S3",
        "GitOps workflow: infrastructure changes via pull requests",
        "Multi-environment setup: dev, staging, production",
        "Secrets management using AWS Secrets Manager + SOPS",
        "Automated Terraform plan on PR with cost estimation",
        "State locking with DynamoDB to prevent concurrent modifications",
      ],
    },
    testing: {
      title: "Quality Gates & Monitoring",
      description:
        "Implemented automated quality gates, deployment monitoring, and incident response automation.",
      highlights: [
        "Quality gates: tests, linting, security scanning, Lighthouse scores",
        "Automated security scanning (Snyk) for vulnerabilities",
        "Deployment metrics tracked in Prometheus",
        "Grafana dashboards for deployment success rate and cycle time",
        "Automated incident creation (PagerDuty) on deployment failures",
      ],
    },
    outcomes: [
      { metric: "Deployment Time", value: "45min → 4.5min (-90%)" },
      { metric: "Manual Steps", value: "12 → 0" },
      { metric: "Deployment Success Rate", value: "100% (3mo avg)" },
      { metric: "MTTR (Mean Time to Recovery)", value: "15min → 30sec" },
      { metric: "Build Time", value: "8min → 2.5min (-69%)" },
      {
        metric: "Failed Deployments (auto-rollback)",
        value: "3 (prevented incidents)",
      },
    ],
    learnings: [
      "Blue-green deployments with automated health checks gave us confidence to deploy frequently — we went from weekly releases to 10+ deploys/day.",
      "Infrastructure as Code (Terraform) eliminated environment drift and made disaster recovery trivial — we tested full infrastructure rebuild and recovered in <20min.",
    ],
    links: {
      code: "https://github.com/yourusername/cicd-automation",
    },
  },
];
