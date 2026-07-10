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
