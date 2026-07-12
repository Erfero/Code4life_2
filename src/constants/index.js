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

export const navLinks = [
  { id: "about", title: "À propos" },
  { id: "experience", title: "Expérience" },
  { id: "resume", title: "CV" },
  { id: "work", title: "Projets" },
  { id: "contact", title: "Contact" },
];

const stats = [
  { value: "5 ans", label: "d'expérience web" },
  { value: "6", label: "expériences pro" },
  { value: "11+", label: "technologies maîtrisées" },
];

const services = [
  {
    title: "Développeur Fullstack",
    description: "React, Vue, Node.js, Laravel — du frontend à l'API et la base de données.",
    icon: backend,
  },
  {
    title: "Expert Shopify",
    description: "Boutiques sur-mesure, pensées pour la conversion.",
    icon: web,
  },
  {
    title: "Intégration WordPress",
    description: "Sites rapides, sur-mesure, orientés expérience utilisateur.",
    icon: mobile,
  },
  {
    title: "SEO & Contenu",
    description: "Rédaction et stratégie pour être visible sur Google.",
    icon: creator,
  },
];

// Ce qui me distingue concrètement — pas des citations inventées, des faits vérifiables.
const whyHireMe = [
  {
    title: "5 ans d'expérience en production, pas en formation",
    detail:
      "Chaque ligne de mon CV correspond à du code livré et utilisé par de vrais utilisateurs, pas à des projets d'école.",
  },
  {
    title: "Une double compétence rare : développeur ET référenceur SEO",
    detail:
      "Je ne construis pas juste un site qui marche, je construis un site qui se fait trouver sur Google — deux métiers que peu de développeurs maîtrisent ensemble.",
  },
  {
    title: "Une stack large et à jour",
    detail:
      "Frontend (React, Vue, Angular), backend (Node.js, Laravel, PHP), mobile (Flutter) et e-commerce (Shopify, WordPress) : je m'adapte à votre stack plutôt que l'inverse.",
  },
  {
    title: "Quatre structures différentes, quatre contextes différents",
    detail:
      "Agence (Elite Agency, Omega Agency), entreprise tech (Viip Interstis), en autonomie (Savage Note) : je sais m'intégrer vite, où que ce soit.",
  },
  {
    title: "Disponible maintenant",
    detail: "Télétravail ou présentiel, réponse rapide sur tous mes canaux de contact.",
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
    title: "Rédacteur Web SEO",
    company_name: "Savage Note · Paris",
    icon: savageNoteBadge,
    iconBg: "#c2f24e",
    date: "Sept. 2019 – Juil. 2023",
    points: [
      "Rédaction d'articles de fond (700 à 1500 mots) optimisés pour le référencement naturel, pour des clients aux besoins variés.",
      "Recherche de mots-clés et structuration éditoriale pour maximiser le classement sur Google.",
      "Premier contact avec le web professionnel : le point de départ qui m'a mené vers le développement.",
    ],
  },
  {
    title: "Développeur Shopify",
    company_name: "Elite Agency · Bordeaux",
    icon: eliteBadge,
    iconBg: "#0d120d",
    date: "Mai 2021 – Janv. 2024",
    points: [
      "Création de boutiques Shopify sur-mesure, optimisées pour la conversion.",
      "Intégration de thèmes Liquid personnalisés et configuration d'applications pour automatiser la gestion des commandes.",
      "Mise en place de stratégies SEO pour améliorer la visibilité sur Google et les réseaux sociaux.",
    ],
  },
  {
    title: "Développeur WordPress",
    company_name: "Omega Agency · Paris",
    icon: omegaBadge,
    iconBg: "#c2f24e",
    date: "Août 2022 – Janv. 2023",
    points: [
      "Création et optimisation de sites WordPress orientés expérience utilisateur.",
      "Personnalisation de thèmes et plugins pour répondre aux besoins spécifiques de chaque client.",
      "Amélioration du référencement naturel (SEO) des sites livrés.",
    ],
  },
  {
    title: "Développeur Web Fullstack",
    company_name: "Viip Interstis · Cotonou, Bénin",
    icon: viipBadge,
    iconBg: "#0d120d",
    date: "Févr. 2023 – Mars 2025",
    points: [
      "Conception d'une application omnicanale centralisant les réseaux sociaux de l'entreprise.",
      "Développement d'un site et d'une application de monitoring pour la gestion des données internes.",
      "Création d'un outil de gestion dédié aux équipes de téléconseillers et de développeurs.",
    ],
  },
];

const education = [
  {
    title: "Développeur Web Fullstack",
    school: "High-Five University · Bénin",
    date: "Depuis mars 2022 — 2 ans d'enseignement + 2 ans en entreprise",
  },
];

const strengths = ["Communication", "Gestion de projet", "Souci du détail"];

const reference = {
  name: "Tiburce Kouagou",
  role: "Formateur — High-Five University / Viip Interstis",
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

// 10 projets. Les 4 premiers sont des vraies missions (studies de cas, sans lien
// public par confidentialité client). Les 6 suivants sont des projets personnels
// clairement identifiés comme tels (isPersonal: true), construits pour couvrir
// toute la largeur de ma stack (Vue, Angular, Flutter, Laravel, Firebase, MERN).
// Chaque projet a sa propre page de détail (/projects/:slug), ouverte en nouvel
// onglet depuis la carte dans Works.jsx.
const projects = [
  {
    slug: "portfolio-code4life",
    name: "Portfolio Code4Life",
    tagline: "Mon site personnel, de A à Z",
    description:
      "Identité de marque, showcase de projets et prise de contact — construit en React, Three.js et Tailwind CSS.",
    tags: [
      { name: "react", color: "accent-text-gradient" },
      { name: "threejs", color: "neutral-text-gradient" },
      { name: "tailwind", color: "accent-text-gradient" },
    ],
    badge: "logo",
    externalLink: "https://code4life-2.vercel.app",
    isPersonal: true,
    context:
      "Le site que vous êtes en train de visiter. Je voulais un portfolio qui ne ressemble pas à un template générique et qui prouve mes compétences fullstack plutôt que de simplement les lister.",
    role: "Conception, développement et déploiement complet, seul.",
    stack: ["React", "React Three Fiber", "Tailwind CSS", "Vite", "React Router", "Vercel"],
    features: [
      "Scène 3D interactive (ordinateur, globe, ciel étoilé) avec React Three Fiber",
      "Design system basé sur l'identité visuelle de mon CV (couleurs et polices extraites directement du document)",
      "Formulaire de contact fonctionnel connecté par email",
      "Pages de détail projet dédiées, chacune ouverte en nouvel onglet",
    ],
    results: "En ligne, rapide, et 100% aligné avec mon identité de marque Code4Life.",
  },
  {
    slug: "boutique-aurore",
    name: "Boutique Aurore",
    tagline: "E-commerce mode — variantes, avis, codes promo",
    description:
      "Boutique mode complète : variantes taille/couleur, avis clients notés, codes promo, liste de favoris et tunnel de commande, avec une identité visuelle propre (rose-gold, typographie éditoriale).",
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
      "Projet personnel pour aller plus loin qu'un simple catalogue : une boutique mode complète avec variantes produits, avis clients et codes promo, sur une identité visuelle entièrement différente du reste de mon portfolio pour prouver que je sais sortir d'une seule direction artistique.",
    role: "Fullstack Next.js : catalogue, variantes, panier, avis, codes promo, tunnel de commande.",
    stack: ["Next.js", "TypeScript", "MongoDB", "Framer Motion", "Vercel"],
    features: [
      "Variantes taille/couleur par produit avec gestion de stock par variante",
      "Avis clients notés (étoiles) affichés sur chaque fiche produit",
      "Codes promo appliqués en temps réel au récapitulatif de commande",
      "Favoris persistants, produits similaires suggérés, tiroir panier animé",
    ],
    results: "En ligne et fonctionnel — ajoute un article, applique le code BIENVENUE10 et commande.",
  },
  {
    slug: "centre-operations",
    name: "Centre d'opérations Social & Support",
    tagline: "Messagerie unifiée, calendrier, tickets",
    description:
      "Outil interne pensé pour des équipes marketing/support : boîte de réception sociale unifiée, calendrier de publication et file de tickets, réunis dans un seul tableau de bord.",
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
      "Projet personnel inspiré d'un vrai besoin d'entreprise : centraliser messagerie sociale, planification de contenu et support client, au lieu de jongler entre plusieurs outils déconnectés.",
    role: "Développeur fullstack : conception et développement des 3 modules, du frontend à l'API.",
    stack: ["React", "Node.js", "MongoDB", "Framer Motion", "Vercel"],
    features: [
      "Boîte de réception unifiée (mentions et messages privés) avec réponse directe",
      "Calendrier de contenu mensuel avec création et changement de statut des publications",
      "File de tickets support avec priorité, assignation et notes internes",
      "Tableau de bord avec indicateurs clés calculés en temps réel",
    ],
    results: "En ligne et fonctionnel — réponds à un message ou fais avancer un ticket pour le tester.",
  },
  {
    slug: "studio-meridien",
    name: "Studio Méridien",
    tagline: "Vitrine agence en PHP — CMS léger, SEO réel",
    description:
      "Site vitrine multi-pages pour une agence web fictive : services, études de cas, blog SEO et formulaire de contact fonctionnel, construit en PHP natif sans framework.",
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
      "Projet personnel pour prouver mes compétences PHP/CMS sans dépendre de WordPress : un site agence multi-pages avec un vrai contenu SEO, un formulaire de contact qui persiste réellement les demandes, et une identité visuelle chaleureuse propre à ce projet.",
    role: "Développement PHP complet : pages, formulaire de contact, SEO technique (sitemap, JSON-LD, meta).",
    stack: ["PHP", "MongoDB", "JavaScript", "SEO technique", "Vercel"],
    features: [
      "4 articles de blog SEO réels, avec schéma JSON-LD Article et sitemap.xml généré dynamiquement",
      "Formulaire de contact validé et persisté en base, avec vue admin protégée par clé",
      "Carrousel de témoignages et animations d'apparition au scroll en JavaScript natif",
      "6 études de cas détaillées (défi, solution, résultat) et 4 pages de services",
    ],
    results: "En ligne et fonctionnel — envoie un message via le formulaire de contact pour le tester.",
  },
  {
    slug: "dashboard-analytics-vue",
    name: "Dashboard Analytics",
    tagline: "Vue.js + API Node — pilotage business en temps réel",
    description:
      "Dashboard analytique façon SaaS : navigation par sidebar, KPI avec tendances, graphiques et export, connecté à une API Node.js maison.",
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
      "Projet personnel pour approfondir Vue.js côté frontend et la construction d'API côté backend, sur un cas d'usage concret : suivre des métriques business en temps réel avec une UI au niveau des vrais outils SaaS.",
    role: "Fullstack : frontend Vue.js + API Node.js + modélisation des données.",
    stack: ["Vue.js 3", "Chart.js", "API Node.js (Vercel Functions)", "Vercel"],
    features: [
      "Navigation par sidebar avec sections Ventes / Trafic / Inscriptions",
      "Cartes KPI avec mini-graphiques et variation vs période précédente",
      "Graphiques interactifs (courbes, barres, répartition) + tableau des meilleurs jours",
      "Filtres par période, export CSV et authentification (compte démo inclus)",
    ],
    results: "En ligne et fonctionnel — connecte-toi avec le compte démo pour l'essayer.",
  },
  {
    slug: "panel-admin-angular",
    name: "Panel d'administration Angular",
    tagline: "Sidebar, KPI et gestion des rôles et permissions",
    description:
      "Panel d'administration complet : connexion, vue d'ensemble avec statistiques, gestion des utilisateurs, rôles et permissions.",
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
      "Projet personnel pour explorer Angular et TypeScript sur un cas classique mais exigeant : la gestion fine des droits d'accès dans une interface d'administration au niveau d'un vrai produit SaaS.",
    role: "Développement frontend complet en Angular, architecture par composants standalone.",
    stack: ["Angular 18", "TypeScript", "Angular Material", "Signals", "Vercel"],
    features: [
      "Authentification (route guard) et vue d'ensemble avec KPI et activité récente",
      "Gestion des utilisateurs avec rôles et permissions granulaires",
      "Tableau de données avec tri, pagination et recherche en temps réel",
      "Formulaires réactifs typés + matrice de permissions éditable par rôle et par module",
    ],
    results: "En ligne et fonctionnel — crée, modifie ou supprime un utilisateur pour le tester.",
  },
  {
    slug: "app-mobile-flutter",
    name: "Code4Life Connect",
    tagline: "Une seule base de code Flutter, messagerie multi-conversations",
    description:
      "Messagerie d'équipe façon Slack : plusieurs conversations, présence en ligne, indicateur de saisie, interface adaptative desktop/mobile, compilée depuis une base de code Flutter unique.",
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
      "Projet personnel pour étendre mes compétences fullstack au mobile : une seule base de code Flutter pour couvrir web, iOS et Android, avec une UI qui s'adapte vraiment à chaque taille d'écran plutôt qu'un simple format mobile étiré.",
    role: "Développement mobile complet : UI adaptative, authentification, architecture temps réel.",
    stack: ["Flutter", "Dart", "Dart Streams", "Material 3", "Vercel"],
    features: [
      "Interface adaptative : 3 volets sur desktop (conversations, fil, profil), navigation mobile dédiée en dessous de 880px",
      "4 conversations avec avatars, regroupement des messages et indicateur « en train d'écrire »",
      "Présence en ligne et messagerie en direct, via une architecture Streams prête pour un backend temps réel (type Firebase)",
      "Compilée pour le web depuis une base de code 100% partagée avec iOS/Android",
    ],
    results: "En ligne et fonctionnel — connecte-toi avec le compte démo pour voir les messages arriver en direct.",
  },
  {
    slug: "api-laravel-gestion",
    name: "Gestion de projets Laravel",
    tagline: "API + interface complète, authentification par token",
    description:
      "Application de gestion de projets et tâches avec une vraie interface (pas juste une API) : crée des projets, assigne des tâches, suis leur avancement.",
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
      "Projet personnel pour consolider mes compétences backend PHP/Laravel sur un cas exigeant : une API sécurisée consommée par une vraie interface, déployée en serverless sur Vercel.",
    role: "Développement fullstack : API (modèles, migrations, authentification, endpoints) + interface consommant l'API.",
    stack: ["Laravel 12", "PHP", "Sanctum", "SQLite", "API REST", "Vercel"],
    features: [
      "Interface complète (pas de doc statique) : connexion, projets, tâches, tout piloté via l'API",
      "Authentification par token (Laravel Sanctum) et gestion des rôles utilisateurs",
      "Cycle de statut des tâches en un clic, création/suppression de projets et tâches",
      "Endpoints REST versionnés avec relations, pagination et Form Requests dédiées",
    ],
    results: "En ligne et fonctionnel — teste la démo en direct (connexion + chargement des projets) sur la page du projet.",
  },
  {
    slug: "app-temps-reel-firebase",
    name: "Messagerie temps réel multi-canaux",
    tagline: "React + Firebase — façon Slack, en direct",
    description:
      "Messagerie multi-canaux avec présence en ligne, interface 3 volets sur desktop, synchronisée instantanément via Firestore.",
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
      "Projet personnel pour maîtriser les architectures temps réel : messages et présence en ligne synchronisés sans rechargement de page, entre tous les visiteurs connectés, avec une UI multi-canaux façon Slack.",
    role: "Fullstack : frontend React + Firebase (Firestore, Auth anonyme, règles de sécurité).",
    stack: ["React", "Cloud Firestore", "Firebase Auth", "Vercel"],
    features: [
      "4 canaux de discussion avec aperçu du dernier message, avatars colorés par utilisateur",
      "Interface 3 volets sur desktop (canaux, fil actif, présence), navigation dédiée sur mobile",
      "Indicateur de présence en ligne (battements réguliers, expiration automatique)",
      "Authentification anonyme et règles de sécurité Firestore (lecture publique, écriture restreinte)",
    ],
    results: "En ligne et fonctionnel — ouvre la page dans deux onglets pour voir la synchro en direct.",
  },
  {
    slug: "ecommerce-mern",
    name: "Boutique en ligne MERN",
    tagline: "React, Node, MongoDB — du catalogue à la commande",
    description:
      "Boutique e-commerce de bout en bout : catalogue produits en base, panier persistant, tunnel de commande complet (sans paiement réel).",
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
      "Projet personnel pour construire un e-commerce complet de bout en bout, sans passer par une plateforme no-code, afin de maîtriser chaque étape du tunnel de vente jusqu'à la persistance en base.",
    role: "Fullstack MERN complet : catalogue, panier, commandes, API REST.",
    stack: ["React", "Node.js", "MongoDB", "Mongoose", "Vercel"],
    features: [
      "Recherche, filtres par catégorie et favoris (persistants), produits similaires suggérés",
      "Catalogue produits chargé depuis MongoDB, pages détail par produit",
      "Panier persistant (localStorage) et tunnel de commande complet",
      "Commande enregistrée en base avec décrément du stock côté serveur",
    ],
    results: "En ligne et fonctionnel — ajoute un produit au panier et passe une commande de test.",
  },
  {
    slug: "booking-nextjs",
    name: "Prise de rendez-vous en ligne",
    tagline: "Next.js — réservation de créneaux en temps réel",
    description:
      "Système de prise de rendez-vous complet : choix de prestation, créneaux disponibles en temps réel, confirmation, vue admin.",
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
      "Projet personnel pour maîtriser Next.js (App Router, Route Handlers, TypeScript) sur un cas très concret et réutilisable : la prise de rendez-vous en ligne, un besoin réel pour des indépendants ou petites structures.",
    role: "Fullstack Next.js : API (Route Handlers, MongoDB), UI du parcours de réservation, vue admin.",
    stack: ["Next.js", "TypeScript", "MongoDB", "Mongoose", "Vercel"],
    features: [
      "Parcours en 4 étapes : prestation, date, créneau disponible, coordonnées",
      "Disponibilité calculée en temps réel (jours ouvrés, créneaux déjà pris exclus)",
      "Index unique en base pour empêcher tout double-réservation d'un créneau",
      "Vue admin protégée par clé d'accès listant toutes les réservations",
    ],
    results: "En ligne et fonctionnel — réserve un créneau de test pour voir le parcours complet.",
  },
  {
    slug: "blog-seo-nuxt",
    name: "Code4Life Insights",
    tagline: "Nuxt.js — blog technique optimisé SEO",
    description:
      "Blog technique sur le développement web et le SEO : rendu statique, sitemap généré dynamiquement, JSON-LD, balises Open Graph sur chaque article.",
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
      "Projet personnel pour mettre en pratique ma double compétence développeur/référenceur : un blog Nuxt 3 dont chaque page respecte les fondamentaux techniques du SEO, pas juste le contenu éditorial.",
    role: "Fullstack Nuxt : contenu (Nuxt Content), génération du sitemap et des métadonnées, mise en page.",
    stack: ["Nuxt 3", "Vue.js", "Nuxt Content", "TypeScript", "Vercel"],
    features: [
      "4 articles techniques réels sur le SEO et le développement web",
      "Sitemap.xml et robots.txt générés dynamiquement à partir du contenu",
      "Schéma JSON-LD Article et balises Open Graph sur chaque page",
      "Pages prérendues au build (SSG) pour un chargement instantané",
    ],
    results: "En ligne et fonctionnel — consulte un article pour voir le rendu et les métadonnées SEO.",
  },
  {
    slug: "url-shortener-nestjs",
    name: "Raccourcisseur de liens",
    tagline: "NestJS — API structurée avec stats de clics",
    description:
      "API de raccourcissement de liens avec redirection et comptage de clics en temps réel, construite avec l'architecture modulaire de NestJS.",
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
      "Projet personnel pour maîtriser NestJS et son architecture modulaire (contrôleurs, services, DTO validés par décorateurs) sur un cas simple mais complet : un raccourcisseur de liens avec suivi des clics.",
    role: "Backend NestJS complet : modules, contrôleurs, validation, persistance MongoDB.",
    stack: ["NestJS", "TypeScript", "MongoDB", "Mongoose", "Vercel"],
    features: [
      "Création de liens courts avec code personnalisé optionnel",
      "Redirection avec comptage de clics en temps réel",
      "Validation stricte des entrées via des DTO décorés (class-validator)",
      "Protection contre les codes réservés et les doublons",
    ],
    results: "En ligne et fonctionnel — crée un lien court et teste sa redirection.",
  },
  {
    slug: "kanban-board",
    name: "Tableau Kanban",
    tagline: "React — gestion de tâches par glisser-déposer",
    description:
      "Application de gestion de tâches façon Trello : tableaux multiples, colonnes personnalisables, cartes avec priorité/étiquettes/échéance, glisser-déposer fluide, tout persisté en local.",
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
      "Projet personnel front-end pur pour démontrer une interaction complexe (glisser-déposer multi-colonnes) sans dépendre d'un backend : idéal pour un usage local ou comme brique à connecter à une API plus tard.",
    role: "Développement front-end complet : architecture des données, drag-and-drop, persistance locale.",
    stack: ["React", "dnd-kit", "Context API + useReducer", "localStorage", "Vercel"],
    features: [
      "Tableaux multiples, colonnes et cartes entièrement personnalisables",
      "Glisser-déposer natif entre colonnes avec aperçu animé de la carte",
      "Cartes avec description, priorité, étiquettes colorées et échéance",
      "Sauvegarde automatique dans le navigateur, aucune donnée perdue au rechargement",
    ],
    results: "En ligne et fonctionnel — crée un tableau, ajoute des cartes et déplace-les entre les colonnes.",
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
