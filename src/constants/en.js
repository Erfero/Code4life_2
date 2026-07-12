import {
  mobile,
  backend,
  creator,
  web,
  html,
  css,
  javascript,
  git,
  reactjs,
  nodejs,
  mongodb,
  shopify,
  vue,
  angular,
  wordpress,
  flutter,
  laravel,
  php,
  firebase,
  seo,
  nextjs,
  nuxt,
  nestjs,
  viipBadge,
  eliteBadge,
  omegaBadge,
  savageNoteBadge,
  shotDashboardAnalyticsVue,
  shotPanelAdminAngular,
  shotAppMobileFlutter,
  shotApiLaravelGestion,
  shotAppTempsReelFirebase,
  shotEcommerceMern,
  shotBookingNextjs,
  shotBlogSeoNuxt,
  shotUrlShortenerNestjs,
  shotKanbanBoard,
  shotBoutiqueAurore,
  shotOpsCenter,
  shotStudioMeridien,
} from "../assets";

const stats = [
  { value: "5 yrs", label: "of web experience" },
  { value: "6", label: "professional roles" },
  { value: "11+", label: "technologies mastered" },
];

const services = [
  {
    title: "Fullstack Developer",
    description: "React, Vue, Node.js, Laravel — from the frontend to the API and the database.",
    icon: backend,
  },
  {
    title: "Shopify Expert",
    description: "Custom storefronts, built with conversion in mind.",
    icon: web,
  },
  {
    title: "WordPress Integration",
    description: "Fast, custom sites focused on user experience.",
    icon: mobile,
  },
  {
    title: "SEO & Content",
    description: "Writing and strategy to get found on Google.",
    icon: creator,
  },
];

const whyHireMe = [
  {
    title: "5 years of production experience, not training",
    detail:
      "Every line on my resume corresponds to code that shipped and is used by real users, not school projects.",
  },
  {
    title: "A rare double skill set: developer AND SEO specialist",
    detail:
      "I don't just build a site that works, I build a site that gets found on Google — two crafts few developers combine.",
  },
  {
    title: "A broad, current stack",
    detail:
      "Frontend (React, Vue, Angular), backend (Node.js, Laravel, PHP), mobile (Flutter) and e-commerce (Shopify, WordPress): I adapt to your stack rather than the other way around.",
  },
  {
    title: "Four different companies, four different contexts",
    detail:
      "Agency (Elite Agency, Omega Agency), tech company (Viip Interstis), independent (Savage Note): I know how to get up to speed fast, wherever I land.",
  },
  {
    title: "Available now",
    detail: "Remote or on-site, fast response on any of my contact channels.",
  },
];

const technologies = [
  { name: "React.js", icon: reactjs },
  { name: "Next.js", icon: nextjs },
  { name: "Vue.js", icon: vue },
  { name: "Nuxt", icon: nuxt },
  { name: "Angular", icon: angular },
  { name: "Node.js", icon: nodejs },
  { name: "NestJS", icon: nestjs },
  { name: "Laravel", icon: laravel },
  { name: "PHP", icon: php },
  { name: "MongoDB", icon: mongodb },
  { name: "Firebase", icon: firebase },
  { name: "Flutter", icon: flutter },
  { name: "Shopify", icon: shopify },
  { name: "WordPress", icon: wordpress },
  { name: "SEO", icon: seo },
  { name: "JavaScript", icon: javascript },
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "Git", icon: git },
];

const experiences = [
  {
    title: "Fullstack Web Developer",
    company_name: "Viip Interstis · Cotonou, Benin",
    icon: viipBadge,
    iconBg: "#0d120d",
    date: "Feb. 2023 – Mar. 2025",
    points: [
      "Designed an omnichannel application centralizing the company's social media accounts.",
      "Developed a monitoring site and app for internal data management.",
      "Built a management tool dedicated to the customer-support and developer teams.",
    ],
  },
  {
    title: "Shopify Developer",
    company_name: "Elite Agency · Bordeaux",
    icon: eliteBadge,
    iconBg: "#0d120d",
    date: "May 2021 – Jan. 2024",
    points: [
      "Built custom Shopify storefronts optimized for conversion.",
      "Integrated custom Liquid themes and configured apps to automate order management.",
      "Set up SEO strategies to improve visibility on Google and social media.",
    ],
  },
  {
    title: "WordPress Developer",
    company_name: "Omega Agency · Paris",
    icon: omegaBadge,
    iconBg: "#c2f24e",
    date: "Aug. 2022 – Jan. 2023",
    points: [
      "Built and optimized WordPress sites focused on user experience.",
      "Customized themes and plugins to match each client's specific needs.",
      "Improved organic search rankings (SEO) on delivered sites.",
    ],
  },
  {
    title: "SEO Web Writer",
    company_name: "Savage Note · Paris",
    icon: savageNoteBadge,
    iconBg: "#c2f24e",
    date: "Sept. 2019 – Jul. 2023",
    points: [
      "Wrote long-form articles (700–1500 words) optimized for organic search, for clients with varied needs.",
      "Keyword research and editorial structuring to maximize Google rankings.",
      "First contact with professional web work: the starting point that led me into development.",
    ],
  },
];

const education = [
  {
    title: "Fullstack Web Developer",
    school: "High-Five University · Benin",
    date: "Since March 2022 — 2 years teaching + 2 years in industry",
  },
];

const strengths = ["Communication", "Project management", "Attention to detail"];

const reference = {
  name: "Tiburce Kouagou",
  role: "Instructor — High-Five University / Viip Interstis",
  email: "tiburcekouagou@gmail.com",
};

const contactInfo = {
  email: "erferokam@gmail.com",
  phone: "+229 01 69 27 25 95",
  phoneHref: "tel:+2290169272595",
  whatsappHref: "https://wa.me/22969272595",
  linkedinHref: "https://www.linkedin.com/in/erfero-keoula/",
  portfolioHref: "https://code4life-2.vercel.app",
};

const projects = [
  {
    slug: "portfolio-code4life",
    name: "Code4Life Portfolio",
    tagline: "My personal site, built from scratch",
    description:
      "Brand identity, project showcase and contact — built with React, Three.js and Tailwind CSS.",
    tags: [
      { name: "react", color: "accent-text-gradient" },
      { name: "threejs", color: "neutral-text-gradient" },
      { name: "tailwind", color: "accent-text-gradient" },
    ],
    badge: "logo",
    externalLink: "https://code4life-2.vercel.app",
    isPersonal: true,
    context:
      "The site you're currently browsing. I wanted a portfolio that didn't look like a generic template and that proves my fullstack skills instead of just listing them.",
    role: "Full design, development and deployment, solo.",
    stack: ["React", "React Three Fiber", "Tailwind CSS", "Vite", "React Router", "Vercel"],
    features: [
      "Interactive 3D scene (computer, globe, starfield) with React Three Fiber",
      "Design system built from my resume's actual visual identity (colors and fonts extracted straight from the document)",
      "Working contact form connected by email",
      "Dedicated project detail pages, each opening in a new tab",
    ],
    results: "Live, fast, and 100% aligned with my Code4Life brand identity.",
  },
  {
    slug: "boutique-aurore",
    name: "Aurore Boutique",
    tagline: "Fashion e-commerce — variants, reviews, promo codes",
    description:
      "A complete fashion storefront: size/color variants, rated customer reviews, promo codes, a wishlist, and a checkout flow, with its own distinct visual identity (rose-gold, editorial typography).",
    tags: [
      { name: "nextjs", color: "accent-text-gradient" },
      { name: "mongodb", color: "neutral-text-gradient" },
      { name: "e-commerce", color: "accent-text-gradient" },
    ],
    badge: shopify,
    screenshot: shotBoutiqueAurore,
    externalLink: "https://boutique-aurore.vercel.app",
    isPersonal: true,
    context:
      "Personal project to go beyond a simple catalog: a complete fashion storefront with product variants, customer reviews and promo codes, on a visual identity entirely different from the rest of my portfolio — proof I can step outside a single art direction.",
    role: "Fullstack Next.js: catalog, variants, cart, reviews, promo codes, checkout flow.",
    stack: ["Next.js", "TypeScript", "MongoDB", "Framer Motion", "Vercel"],
    features: [
      "Size/color variants per product with per-variant stock tracking",
      "Star-rated customer reviews shown on every product page",
      "Promo codes applied live to the order summary",
      "Persistent wishlist, related-product suggestions, animated cart drawer",
    ],
    results: "Live and functional — add an item, apply code BIENVENUE10, and check out.",
  },
  {
    slug: "centre-operations",
    name: "Social & Support Ops Center",
    tagline: "Unified inbox, content calendar, ticket queue",
    description:
      "An internal tool built for marketing/support teams: a unified social inbox, a content calendar and a support ticket queue, brought together in one dashboard.",
    tags: [
      { name: "react", color: "accent-text-gradient" },
      { name: "nodejs", color: "neutral-text-gradient" },
      { name: "mongodb", color: "accent-text-gradient" },
    ],
    badge: viipBadge,
    screenshot: shotOpsCenter,
    externalLink: "https://ops-center-eta.vercel.app",
    isPersonal: true,
    context:
      "Personal project inspired by a real business need: centralizing social messaging, content planning and customer support instead of juggling several disconnected tools.",
    role: "Fullstack developer: designed and built all 3 modules, from frontend to API.",
    stack: ["React", "Node.js", "MongoDB", "Framer Motion", "Vercel"],
    features: [
      "Unified inbox (mentions and DMs) with direct reply",
      "Monthly content calendar with post creation and status changes",
      "Support ticket queue with priority, assignment and internal notes",
      "Dashboard with key metrics computed in real time",
    ],
    results: "Live and functional — reply to a message or advance a ticket to try it out.",
  },
  {
    slug: "studio-meridien",
    name: "Studio Méridien",
    tagline: "PHP agency site — lightweight CMS, real SEO",
    description:
      "A multi-page site for a fictional web agency: services, case studies, an SEO blog and a working contact form, built in native PHP with no framework.",
    tags: [
      { name: "php", color: "accent-text-gradient" },
      { name: "seo", color: "neutral-text-gradient" },
      { name: "mongodb", color: "accent-text-gradient" },
    ],
    badge: wordpress,
    screenshot: shotStudioMeridien,
    externalLink: "https://studio-meridien.vercel.app",
    isPersonal: true,
    context:
      "Personal project to prove my PHP/CMS skills without relying on WordPress: a multi-page agency site with real SEO content, a contact form that genuinely persists submissions, and a warm visual identity of its own.",
    role: "Full PHP development: pages, contact form, technical SEO (sitemap, JSON-LD, meta tags).",
    stack: ["PHP", "MongoDB", "JavaScript", "Technical SEO", "Vercel"],
    features: [
      "4 real SEO blog articles, with Article JSON-LD schema and a dynamically generated sitemap.xml",
      "Validated, persisted contact form with a key-protected admin view",
      "Testimonial carousel and scroll-reveal animations in native JavaScript",
      "6 detailed case studies (challenge, solution, result) and 4 service pages",
    ],
    results: "Live and functional — send a message through the contact form to try it.",
  },
  {
    slug: "dashboard-analytics-vue",
    name: "Analytics Dashboard",
    tagline: "Vue.js + Node API — real-time business tracking",
    description:
      "SaaS-style analytics dashboard: sidebar navigation, trend-aware KPIs, charts and export, backed by a custom Node.js API.",
    tags: [
      { name: "vuejs", color: "accent-text-gradient" },
      { name: "nodejs", color: "neutral-text-gradient" },
      { name: "api", color: "accent-text-gradient" },
    ],
    badge: vue,
    screenshot: shotDashboardAnalyticsVue,
    externalLink: "https://dashboard-analytics-vue.vercel.app",
    isPersonal: true,
    context:
      "Personal project to go deeper on Vue.js on the frontend and API design on the backend, on a concrete use case: tracking business metrics in real time with a UI on par with real SaaS tools.",
    role: "Fullstack: Vue.js frontend + Node.js API + data modeling.",
    stack: ["Vue.js 3", "Chart.js", "Node.js API (Vercel Functions)", "Vercel"],
    features: [
      "Sidebar navigation with Sales / Traffic / Signups sections",
      "KPI cards with mini sparklines and change vs. previous period",
      "Interactive charts (lines, bars, breakdown) plus a best-days table",
      "Period filters, CSV export and authentication (demo account included)",
    ],
    results: "Live and functional — sign in with the demo account to try it.",
  },
  {
    slug: "panel-admin-angular",
    name: "Angular Admin Panel",
    tagline: "Sidebar, KPIs, and role & permission management",
    description:
      "Full admin panel: login, KPI overview, and user, role and permission management.",
    tags: [
      { name: "angular", color: "accent-text-gradient" },
      { name: "typescript", color: "neutral-text-gradient" },
      { name: "material", color: "accent-text-gradient" },
    ],
    badge: angular,
    screenshot: shotPanelAdminAngular,
    externalLink: "https://panel-admin-angular.vercel.app",
    isPersonal: true,
    context:
      "Personal project to explore Angular and TypeScript on a classic but demanding case: fine-grained access control in an admin interface on par with a real SaaS product.",
    role: "Full Angular frontend development, standalone-component architecture.",
    stack: ["Angular 18", "TypeScript", "Angular Material", "Signals", "Vercel"],
    features: [
      "Authentication (route guard) and an overview with KPIs and recent activity",
      "User management with granular roles and permissions",
      "Data table with sorting, pagination and live search",
      "Typed reactive forms + an editable permission matrix by role and module",
    ],
    results: "Live and functional — create, edit or delete a user to try it out.",
  },
  {
    slug: "app-mobile-flutter",
    name: "Code4Life Connect",
    tagline: "One Flutter codebase, multi-conversation messaging",
    description:
      "Slack-style team messaging: multiple conversations, online presence, typing indicator, adaptive desktop/mobile UI, compiled from a single Flutter codebase.",
    tags: [
      { name: "flutter", color: "accent-text-gradient" },
      { name: "dart", color: "neutral-text-gradient" },
      { name: "streams", color: "accent-text-gradient" },
    ],
    badge: flutter,
    screenshot: shotAppMobileFlutter,
    externalLink: "https://appmobileflutter.vercel.app",
    isPersonal: true,
    context:
      "Personal project to extend my fullstack skills to mobile: a single Flutter codebase covering web, iOS and Android, with a UI that genuinely adapts to each screen size instead of a stretched mobile layout.",
    role: "Full mobile development: adaptive UI, authentication, real-time architecture.",
    stack: ["Flutter", "Dart", "Dart Streams", "Material 3", "Vercel"],
    features: [
      "Adaptive interface: 3-pane desktop layout (conversations, thread, profile), dedicated mobile navigation below 880px",
      "4 conversations with avatars, message grouping and a \"typing\" indicator",
      "Online presence and live messaging, built on a Streams architecture ready for a real-time backend (e.g. Firebase)",
      "Compiled for web from a codebase 100% shared with iOS/Android",
    ],
    results: "Live and functional — sign in with the demo account to see messages arrive live.",
  },
  {
    slug: "api-laravel-gestion",
    name: "Laravel Project Management",
    tagline: "Full API + interface, token-based auth",
    description:
      "Project and task management app with a real interface (not just an API): create projects, assign tasks, track progress.",
    tags: [
      { name: "laravel", color: "accent-text-gradient" },
      { name: "php", color: "neutral-text-gradient" },
      { name: "sanctum", color: "accent-text-gradient" },
    ],
    badge: laravel,
    screenshot: shotApiLaravelGestion,
    externalLink: "https://api-laravel-gestion.vercel.app",
    isPersonal: true,
    context:
      "Personal project to reinforce my PHP/Laravel backend skills on a demanding case: a secured API consumed by a real interface, deployed serverless on Vercel.",
    role: "Fullstack development: API (models, migrations, auth, endpoints) + the interface consuming it.",
    stack: ["Laravel 12", "PHP", "Sanctum", "SQLite", "REST API", "Vercel"],
    features: [
      "Full interface (not static docs): login, projects, tasks — all driven through the API",
      "Token-based authentication (Laravel Sanctum) and user role management",
      "One-click task status cycling, project and task creation/deletion",
      "Versioned REST endpoints with relations, pagination and dedicated Form Requests",
    ],
    results: "Live and functional — try the live demo (login + loading projects) on the project page.",
  },
  {
    slug: "app-temps-reel-firebase",
    name: "Multi-Channel Real-Time Messaging",
    tagline: "React + Firebase — Slack-style, live",
    description:
      "Multi-channel messaging with online presence, a 3-pane desktop layout, instantly synced through Firestore.",
    tags: [
      { name: "react", color: "accent-text-gradient" },
      { name: "firebase", color: "neutral-text-gradient" },
      { name: "realtime", color: "accent-text-gradient" },
    ],
    badge: firebase,
    screenshot: shotAppTempsReelFirebase,
    externalLink: "https://app-temps-reel-firebase.vercel.app",
    isPersonal: true,
    context:
      "Personal project to master real-time architectures: messages and online presence synced with no page reload, across every connected visitor, with a Slack-style multi-channel UI.",
    role: "Fullstack: React frontend + Firebase (Firestore, anonymous auth, security rules).",
    stack: ["React", "Cloud Firestore", "Firebase Auth", "Vercel"],
    features: [
      "4 channels with last-message previews, avatars colored per user",
      "3-pane desktop layout (channels, active thread, presence), dedicated mobile navigation",
      "Online presence indicator (regular heartbeats, automatic expiry)",
      "Anonymous authentication and Firestore security rules (public read, restricted write)",
    ],
    results: "Live and functional — open the page in two tabs to watch the sync happen live.",
  },
  {
    slug: "ecommerce-mern",
    name: "MERN Online Store",
    tagline: "React, Node, MongoDB — from catalog to checkout",
    description:
      "End-to-end e-commerce store: database-backed product catalog, persistent cart, full checkout flow (no real payment).",
    tags: [
      { name: "react", color: "accent-text-gradient" },
      { name: "nodejs", color: "neutral-text-gradient" },
      { name: "mongodb", color: "accent-text-gradient" },
    ],
    badge: mongodb,
    screenshot: shotEcommerceMern,
    externalLink: "https://ecommerce-mern-steel.vercel.app",
    isPersonal: true,
    context:
      "Personal project to build a complete e-commerce flow end to end, without a no-code platform, to master every step of the sales funnel down to database persistence.",
    role: "Full MERN stack: catalog, cart, orders, REST API.",
    stack: ["React", "Node.js", "MongoDB", "Mongoose", "Vercel"],
    features: [
      "Search, category filters and persistent favorites, with suggested related products",
      "Product catalog loaded from MongoDB, per-product detail pages",
      "Persistent cart (localStorage) and full checkout flow",
      "Orders saved to the database with server-side stock decrement",
    ],
    results: "Live and functional — add a product to your cart and place a test order.",
  },
  {
    slug: "booking-nextjs",
    name: "Online Booking System",
    tagline: "Next.js — real-time slot booking",
    description:
      "Complete appointment-booking system: service selection, real-time slot availability, confirmation, admin view.",
    tags: [
      { name: "nextjs", color: "accent-text-gradient" },
      { name: "typescript", color: "neutral-text-gradient" },
      { name: "mongodb", color: "accent-text-gradient" },
    ],
    badge: nextjs,
    screenshot: shotBookingNextjs,
    externalLink: "https://booking-nextjs-nine.vercel.app",
    isPersonal: true,
    context:
      "Personal project to master Next.js (App Router, Route Handlers, TypeScript) on a very concrete, reusable case: online appointment booking, a real need for freelancers and small businesses.",
    role: "Fullstack Next.js: API (Route Handlers, MongoDB), the booking flow UI, and the admin view.",
    stack: ["Next.js", "TypeScript", "MongoDB", "Mongoose", "Vercel"],
    features: [
      "4-step flow: service, date, available slot, contact details",
      "Real-time availability (business days only, already-booked slots excluded)",
      "Unique database index preventing any double-booking of a slot",
      "Key-protected admin view listing every booking",
    ],
    results: "Live and functional — book a test slot to see the full flow.",
  },
  {
    slug: "blog-seo-nuxt",
    name: "Code4Life Insights",
    tagline: "Nuxt.js — SEO-optimized technical blog",
    description:
      "Technical blog on web development and SEO: static rendering, a dynamically generated sitemap, JSON-LD, Open Graph tags on every article.",
    tags: [
      { name: "nuxt", color: "accent-text-gradient" },
      { name: "vuejs", color: "neutral-text-gradient" },
      { name: "seo", color: "accent-text-gradient" },
    ],
    badge: nuxt,
    screenshot: shotBlogSeoNuxt,
    externalLink: "https://blog-seo-nuxt.vercel.app",
    isPersonal: true,
    context:
      "Personal project to put my developer/SEO double skill set into practice: a Nuxt 3 blog where every page respects the technical fundamentals of SEO, not just the editorial content.",
    role: "Fullstack Nuxt: content (Nuxt Content), sitemap and metadata generation, layout.",
    stack: ["Nuxt 3", "Vue.js", "Nuxt Content", "TypeScript", "Vercel"],
    features: [
      "4 real technical articles on SEO and web development",
      "Sitemap.xml and robots.txt dynamically generated from the content",
      "JSON-LD Article schema and Open Graph tags on every page",
      "Pages prerendered at build time (SSG) for instant loading",
    ],
    results: "Live and functional — open an article to see the rendering and SEO metadata.",
  },
  {
    slug: "url-shortener-nestjs",
    name: "Link Shortener",
    tagline: "NestJS — structured API with click stats",
    description:
      "Link-shortening API with redirection and real-time click counting, built on NestJS's modular architecture.",
    tags: [
      { name: "nestjs", color: "accent-text-gradient" },
      { name: "typescript", color: "neutral-text-gradient" },
      { name: "mongodb", color: "accent-text-gradient" },
    ],
    badge: nestjs,
    screenshot: shotUrlShortenerNestjs,
    externalLink: "https://url-shortener-nestjs-livid.vercel.app",
    isPersonal: true,
    context:
      "Personal project to master NestJS and its modular architecture (controllers, services, decorator-validated DTOs) on a simple but complete case: a link shortener with click tracking.",
    role: "Full NestJS backend: modules, controllers, validation, MongoDB persistence.",
    stack: ["NestJS", "TypeScript", "MongoDB", "Mongoose", "Vercel"],
    features: [
      "Short link creation with an optional custom code",
      "Redirection with real-time click counting",
      "Strict input validation via decorated DTOs (class-validator)",
      "Protection against reserved codes and duplicates",
    ],
    results: "Live and functional — create a short link and test its redirect.",
  },
  {
    slug: "kanban-board",
    name: "Kanban Board",
    tagline: "React — drag-and-drop task management",
    description:
      "Trello-style task management app: multiple boards, customizable columns, cards with priority/labels/due dates, smooth drag-and-drop, all persisted locally.",
    tags: [
      { name: "react", color: "accent-text-gradient" },
      { name: "javascript", color: "neutral-text-gradient" },
      { name: "dnd", color: "accent-text-gradient" },
    ],
    badge: reactjs,
    screenshot: shotKanbanBoard,
    externalLink: "https://kanban-board-cyan-three.vercel.app",
    isPersonal: true,
    context:
      "Pure front-end personal project to demonstrate a complex interaction (multi-column drag-and-drop) with no backend dependency: ideal for local use or as a building block to wire up to an API later.",
    role: "Full front-end development: data architecture, drag-and-drop, local persistence.",
    stack: ["React", "dnd-kit", "Context API + useReducer", "localStorage", "Vercel"],
    features: [
      "Multiple boards, fully customizable columns and cards",
      "Native drag-and-drop between columns with an animated card preview",
      "Cards with description, priority, colored labels and due dates",
      "Auto-saved in the browser — nothing lost on reload",
    ],
    results: "Live and functional — create a board, add cards, and drag them between columns.",
  },
];

export {
  stats,
  services,
  whyHireMe,
  technologies,
  experiences,
  education,
  strengths,
  reference,
  contactInfo,
  projects,
};
