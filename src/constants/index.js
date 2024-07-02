import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title:"Devéloppeur Web",
    icon: web,
  },
  {
    title: "Devéloppeur React Native",
    icon: mobile,
  },
  {
    title: "Devéloppeur Backend",
    icon: backend,
  },
  {
    title: "Créateur de Contenue",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Devéloppeur React.js",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Développer et maintenir des applications web en utilisant React.js et d'autres technologies connexes.",
      "Collaborer avec des équipes interfonctionnelles, y compris des designers, des chefs de produit et d'autres développeurs, pour créer des produits de haute qualité.",
      "Implémenter un design réactif et assurer la compatibilité entre les navigateurs.",
      "Participer aux revues de code et fournir des retours constructifs aux autres développeurs.",
    ],
  },
  {
    title: "Devéloppeur React Native",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [

      "Développer et maintenir des applications web en utilisant React.js et d'autres technologies connexes.",
      "Collaborer avec des équipes interfonctionnelles, y compris des designers, des chefs de produit et d'autres développeurs, pour créer des produits de haute qualité.",
      "Implémenter un design réactif et assurer la compatibilité entre les navigateurs.",
      "Participer aux revues de code et fournir des retours constructifs aux autres développeurs."
    ],
  },
  {
    title: " Devéloppeur Web",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Développer et maintenir des applications web en utilisant React.js et d'autres technologies connexes.",
      "Collaborer avec des équipes interfonctionnelles, y compris des designers, des chefs de produit et d'autres développeurs, pour créer des produits de haute qualité.",
      "Implémenter un design réactif et assurer la compatibilité entre les navigateurs.",
      "Participer aux revues de code et fournir des retours constructifs aux autres développeurs.",
    ],
  },
  {
    title: "Devéloppeur Full stack",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Développer et maintenir des applications web en utilisant React.js et d'autres technologies connexes.",
      "Collaborer avec des équipes interfonctionnelles, y compris des designers, des chefs de produit et d'autres développeurs, pour créer des produits de haute qualité.",
      "Implémenter un design réactif et assurer la compatibilité entre les navigateurs.",
      "Participer aux revues de code et fournir des retours constructifs aux autres développeurs.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
    "Je pensais qu'il était impossible de créer un site web aussi beau que notre produit, mais Erféro m'a prouvé le contraire.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
    "Je n'ai jamais rencontré un développeur web qui se soucie autant du succès de ses clients que Erféro.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
    "Après que Erféro ait optimisé notre site web, notre trafic a augmenté de 50%. Nous ne le remercierons jamais assez!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Une plateforme web qui permet aux utilisateurs de rechercher, réserver et gérer des locations de voitures auprès de divers fournisseurs, offrant une solution pratique et efficace pour leurs besoins de transport.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Une application web qui permet aux utilisateurs de rechercher des offres d'emploi, de consulter les fourchettes de salaire estimées pour les postes, et de localiser les emplois disponibles en fonction de leur emplacement actuel.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "Une plateforme de réservation de voyage complète qui permet aux utilisateurs de réserver des vols, des hôtels et des voitures de location, et offre des recommandations soigneusement sélectionnées pour des destinations populaires.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
