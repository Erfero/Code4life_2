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
  viipBadge,
  eliteBadge,
  omegaBadge,
  savageNoteBadge,
  shotDashboardAnalyticsVue,
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
  { name: "Vue.js", icon: vue },
  { name: "Angular", icon: angular },
  { name: "Node.js", icon: nodejs },
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
  {
    title: "Licence pro · Sciences Naturelles",
    school: "FAST Bénin",
    date: "2019 – 2021 — Biologie, chimie, géologie",
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
    slug: "boutique-shopify-sur-mesure",
    name: "Boutique Shopify sur-mesure",
    tagline: "E-commerce orienté conversion",
    description:
      "Conception d'une boutique Shopify sur-mesure pour un client d'Elite Agency, avec thème Liquid personnalisé et parcours d'achat optimisé.",
    tags: [
      { name: "shopify", color: "accent-text-gradient" },
      { name: "liquid", color: "neutral-text-gradient" },
      { name: "seo", color: "accent-text-gradient" },
    ],
    badge: shopify,
    isPersonal: false,
    context:
      "Mission cliente confiée par Elite Agency (Bordeaux) : le client avait un thème Shopify générique qui ne reflétait pas sa marque et convertissait mal.",
    role: "Développement Shopify complet : thème, apps, tunnel de vente.",
    stack: ["Shopify", "Liquid", "JavaScript", "CSS", "SEO on-page"],
    features: [
      "Thème Liquid entièrement personnalisé à partir de la charte graphique du client",
      "Intégration et configuration d'applications pour automatiser la gestion des commandes",
      "Refonte du tunnel d'achat pour réduire les frictions à la caisse",
      "Stratégie SEO on-page pour la visibilité sur Google et les réseaux sociaux",
    ],
    results: "Boutique livrée et utilisée en production par le client.",
  },
  {
    slug: "suite-outils-viip",
    name: "Suite d'outils internes",
    tagline: "Fullstack au service d'équipes métier",
    description:
      "Application omnicanale de centralisation des réseaux sociaux et outil de monitoring des données internes pour les équipes de Viip Interstis.",
    tags: [
      { name: "fullstack", color: "accent-text-gradient" },
      { name: "nodejs", color: "neutral-text-gradient" },
      { name: "react", color: "accent-text-gradient" },
    ],
    badge: viipBadge,
    isPersonal: false,
    context:
      "Chez Viip Interstis (Cotonou, Bénin), les équipes de téléconseillers et développeurs géraient les réseaux sociaux et les données internes sans outil centralisé.",
    role: "Développeur fullstack : conception et développement des 3 outils, du frontend à l'API.",
    stack: ["React", "Node.js", "MongoDB", "REST API"],
    features: [
      "Application omnicanale centralisant tous les réseaux sociaux de l'entreprise en un seul endroit",
      "Site et application de monitoring pour la gestion des données internes",
      "Outil de gestion dédié aux équipes de téléconseillers et de développeurs",
      "Architecture pensée pour plusieurs équipes utilisatrices en simultané",
    ],
    results: "Outils utilisés quotidiennement en interne par les équipes de l'entreprise.",
  },
  {
    slug: "refonte-wordpress-omega",
    name: "Refonte WordPress UX & SEO",
    tagline: "Expérience utilisateur + visibilité Google",
    description:
      "Refonte de sites WordPress pour Omega Agency : thèmes et plugins personnalisés, expérience utilisateur repensée et référencement naturel amélioré.",
    tags: [
      { name: "wordpress", color: "accent-text-gradient" },
      { name: "php", color: "neutral-text-gradient" },
      { name: "seo", color: "accent-text-gradient" },
    ],
    badge: wordpress,
    isPersonal: false,
    context:
      "Mission chez Omega Agency (Paris) : des sites WordPress clients avec une UX datée et un référencement naturel faible.",
    role: "Développeur WordPress : thèmes, plugins et SEO technique.",
    stack: ["WordPress", "PHP", "CSS", "SEO technique"],
    features: [
      "Création et optimisation de sites orientés expérience utilisateur",
      "Personnalisation de thèmes et plugins pour les besoins spécifiques de chaque client",
      "Audit et amélioration du référencement naturel (structure, vitesse, balisage)",
    ],
    results: "Sites livrés avec une UX modernisée et un meilleur classement Google.",
  },
  {
    slug: "dashboard-analytics-vue",
    name: "Dashboard Analytics",
    tagline: "Vue.js + API Node — visualisation de données en temps réel",
    description:
      "Tableau de bord analytique avec graphiques dynamiques, filtres et export de données, connecté à une API Node.js maison.",
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
      "Projet personnel pour approfondir Vue.js côté frontend et la construction d'API côté backend, sur un cas d'usage concret : suivre des métriques business en temps réel.",
    role: "Fullstack : frontend Vue.js + API Node.js + modélisation des données.",
    stack: ["Vue.js 3", "Chart.js", "API Node.js (Vercel Functions)", "Vercel"],
    features: [
      "Graphiques interactifs (courbes, barres, répartition) alimentés par une API REST",
      "Filtres par période et par catégorie avec mise à jour instantanée des graphiques",
      "Export des données filtrées en CSV",
      "Authentification simple pour protéger l'accès au dashboard (compte démo inclus)",
    ],
    results: "En ligne et fonctionnel — connecte-toi avec le compte démo pour l'essayer.",
  },
  {
    slug: "panel-admin-angular",
    name: "Panel d'administration Angular",
    tagline: "Gestion des rôles et des permissions",
    description:
      "Interface d'administration avec gestion des utilisateurs, rôles et permissions, construite en Angular.",
    tags: [
      { name: "angular", color: "accent-text-gradient" },
      { name: "typescript", color: "neutral-text-gradient" },
      { name: "rxjs", color: "accent-text-gradient" },
    ],
    badge: angular,
    isPersonal: true,
    context:
      "Projet personnel pour explorer Angular et TypeScript sur un cas classique mais exigeant : la gestion fine des droits d'accès dans une interface d'administration.",
    role: "Développement frontend complet en Angular, architecture par modules.",
    stack: ["Angular", "TypeScript", "RxJS", "Angular Material"],
    features: [
      "Gestion des utilisateurs avec rôles et permissions granulaires",
      "Tableaux de données avec tri, pagination et recherche",
      "Formulaires réactifs avec validation en temps réel",
      "Architecture modulaire pensée pour scaler",
    ],
    results: "Base solide réutilisable pour tout projet nécessitant un back-office robuste.",
  },
  {
    slug: "app-mobile-flutter",
    name: "Application mobile Flutter",
    tagline: "Une seule base de code, iOS et Android",
    description:
      "Application mobile cross-platform avec authentification et synchronisation de données en temps réel via Firebase.",
    tags: [
      { name: "flutter", color: "accent-text-gradient" },
      { name: "dart", color: "neutral-text-gradient" },
      { name: "firebase", color: "accent-text-gradient" },
    ],
    badge: flutter,
    isPersonal: true,
    context:
      "Projet personnel pour étendre mes compétences fullstack au mobile : une seule base de code Flutter pour couvrir iOS et Android.",
    role: "Développement mobile complet + intégration Firebase.",
    stack: ["Flutter", "Dart", "Firebase Auth", "Cloud Firestore"],
    features: [
      "Authentification par email et réseaux sociaux via Firebase Auth",
      "Synchronisation des données en temps réel avec Cloud Firestore",
      "Interface adaptative pour différentes tailles d'écran",
      "Notifications push",
    ],
    results: "Preuve concrète de ma capacité à livrer au-delà du web, sur mobile natif cross-platform.",
  },
  {
    slug: "api-laravel-gestion",
    name: "API de gestion Laravel",
    tagline: "Backend robuste, authentification JWT",
    description:
      "API REST sécurisée pour un outil de gestion interne, avec authentification par token et gestion fine des rôles.",
    tags: [
      { name: "laravel", color: "accent-text-gradient" },
      { name: "php", color: "neutral-text-gradient" },
      { name: "mysql", color: "accent-text-gradient" },
    ],
    badge: laravel,
    isPersonal: true,
    context:
      "Projet personnel pour consolider mes compétences backend PHP/Laravel sur un cas exigeant : une API sécurisée destinée à être consommée par plusieurs clients (web et mobile).",
    role: "Développement backend complet : modèles, migrations, authentification, endpoints.",
    stack: ["Laravel", "PHP", "MySQL", "JWT", "API REST"],
    features: [
      "Authentification par token JWT et gestion des rôles utilisateurs",
      "Endpoints REST versionnés et documentés",
      "Validation stricte des données entrantes",
      "Migrations et seeders pour un déploiement reproductible",
    ],
    results: "API prête à être consommée par un frontend web ou une application mobile.",
  },
  {
    slug: "app-temps-reel-firebase",
    name: "Application collaborative temps réel",
    tagline: "React + Firebase — messagerie instantanée",
    description:
      "Application de messagerie et de collaboration en temps réel, avec présence utilisateur et synchronisation instantanée.",
    tags: [
      { name: "react", color: "accent-text-gradient" },
      { name: "firebase", color: "neutral-text-gradient" },
      { name: "realtime", color: "accent-text-gradient" },
    ],
    badge: firebase,
    isPersonal: true,
    context:
      "Projet personnel pour maîtriser les architectures temps réel : messages, présence en ligne et mises à jour instantanées sans rechargement de page.",
    role: "Fullstack : frontend React + Firebase Realtime Database / Firestore.",
    stack: ["React", "Firebase Realtime Database", "Cloud Firestore", "Firebase Auth"],
    features: [
      "Messagerie instantanée entre utilisateurs avec accusés de lecture",
      "Indicateur de présence (en ligne / hors ligne) en temps réel",
      "Synchronisation des données sans rechargement de page",
      "Authentification et gestion de profils utilisateurs",
    ],
    results: "Démontre ma maîtrise des architectures temps réel, au-delà du CRUD classique.",
  },
  {
    slug: "ecommerce-mern",
    name: "Plateforme e-commerce MERN",
    tagline: "React, Node, MongoDB — du panier au paiement",
    description:
      "Site e-commerce complet : catalogue produits, panier, tunnel de commande et intégration de paiement.",
    tags: [
      { name: "react", color: "accent-text-gradient" },
      { name: "nodejs", color: "neutral-text-gradient" },
      { name: "mongodb", color: "accent-text-gradient" },
    ],
    badge: mongodb,
    isPersonal: true,
    context:
      "Projet personnel pour construire un e-commerce complet de bout en bout, sans passer par une plateforme no-code, afin de maîtriser chaque étape du tunnel de vente.",
    role: "Fullstack MERN complet : catalogue, panier, commandes, paiement.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Stripe API"],
    features: [
      "Catalogue produits avec filtres et recherche",
      "Panier persistant et tunnel de commande complet",
      "Intégration d'une API de paiement",
      "Espace administrateur pour gérer produits et commandes",
    ],
    results: "Preuve que je peux livrer un e-commerce sur-mesure sans dépendre uniquement de Shopify.",
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
