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
    title: "Expert Shopify",
    description: "Boutiques sur-mesure, pensées pour la conversion.",
    icon: web,
  },
  {
    title: "Développeur Fullstack",
    description: "React, Node.js, Laravel — du frontend à l'API.",
    icon: backend,
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

const technologies = [
  { name: "Shopify", icon: shopify },
  { name: "React.js", icon: reactjs },
  { name: "Vue.js", icon: vue },
  { name: "Angular", icon: angular },
  { name: "WordPress", icon: wordpress },
  { name: "Flutter", icon: flutter },
  { name: "Node.js", icon: nodejs },
  { name: "Laravel", icon: laravel },
  { name: "PHP", icon: php },
  { name: "MongoDB", icon: mongodb },
  { name: "Firebase", icon: firebase },
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

// Études de cas issues de mes vraies missions. Les projets clients n'ont pas
// de lien public (NDA) : "link" reste vide tant qu'aucune URL réelle n'est fournie.
const projects = [
  {
    name: "Portfolio Code4Life",
    description:
      "Mon site personnel : identité de marque, showcase de projets et prise de contact, construit en React, Three.js et Tailwind CSS.",
    tags: [
      { name: "react", color: "accent-text-gradient" },
      { name: "threejs", color: "neutral-text-gradient" },
      { name: "tailwind", color: "accent-text-gradient" },
    ],
    badge: "logo",
    link: "https://code4life-2.vercel.app",
  },
  {
    name: "Boutique Shopify sur-mesure",
    description:
      "Conception d'une boutique Shopify sur-mesure pour un client d'Elite Agency, avec thème Liquid personnalisé et parcours d'achat optimisé pour la conversion.",
    tags: [
      { name: "shopify", color: "accent-text-gradient" },
      { name: "liquid", color: "neutral-text-gradient" },
      { name: "seo", color: "accent-text-gradient" },
    ],
    badge: shopify,
    link: "",
  },
  {
    name: "Suite d'outils internes",
    description:
      "Application omnicanale de centralisation des réseaux sociaux et outil de monitoring des données internes pour les équipes de Viip Interstis.",
    tags: [
      { name: "fullstack", color: "accent-text-gradient" },
      { name: "nodejs", color: "neutral-text-gradient" },
      { name: "react", color: "accent-text-gradient" },
    ],
    badge: viipBadge,
    link: "",
  },
  {
    name: "Refonte WordPress UX & SEO",
    description:
      "Refonte de sites WordPress pour Omega Agency : thèmes et plugins personnalisés, expérience utilisateur repensée et référencement naturel amélioré.",
    tags: [
      { name: "wordpress", color: "accent-text-gradient" },
      { name: "php", color: "neutral-text-gradient" },
      { name: "seo", color: "accent-text-gradient" },
    ],
    badge: wordpress,
    link: "",
  },
];

export {
  stats,
  services,
  technologies,
  experiences,
  education,
  strengths,
  reference,
  contactInfo,
  projects,
};
