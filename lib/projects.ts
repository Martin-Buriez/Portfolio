export type Project = {
  id: string;
  title: string;
  description: string;
  context?: string;
  details: string[];
  image: string;
  stack: string[];
  url?: string;
};

export const projects: Project[] = [
  {
    id: "ankama-launcher",
    title: "Ankama Launcher",
    description:
      "Application desktop d'Ankama pour télécharger, mettre à jour et lancer ses jeux (Dofus, Wakfu...), avec gestion du compte joueur.",
    context: "Ankama",
    details: [
      "Conception de l'API et des diagrammes MCD",
      "Réunions de mise en place",
      "Développement et intégration dans le launcher",
      "Déploiement, monitoring, logs et suivi de production",
    ],
    image: "/projects/ankama-launcher.png",
    stack: ["Vue.js", "Electron", "NestJS", "TypeScript", "PostgreSQL", "Redis"],
  },
  {
    id: "norauto-intranet",
    title: "Intranet client Norauto",
    description:
      "Outil interne qui permet aux conseillers du Call Center de gérer la relation client et le suivi des dossiers.",
    context: "Norauto International",
    details: [
      "Développement de nouvelles fonctionnalités et optimisations",
      "Connexion à 6 API",
      "Réunions avec les utilisateurs et support",
      "Déploiements et suivi de production",
    ],
    image: "/projects/norauto-intranet.png",
    stack: ["React", "Node.js", "PostgreSQL"],
  },
  {
    id: "embaleo",
    title: "Embaleo.com",
    description:
      "Boutique en ligne de cartons et solutions d'emballage pour particuliers et professionnels.",
    context: "Bewed",
    details: ["Développement de nouvelles fonctionnalités", "Optimisations du site"],
    image: "/projects/embaleo.png",
    stack: ["PHP", "PrestaShop"],
    url: "https://www.embaleo.com",
  },
  {
    id: "4mepro",
    title: "4mePro.com",
    description: "Boutique en ligne de fournitures et équipements professionnels.",
    context: "Bewed",
    details: [
      "Refonte complète du site",
      "Développement de nouvelles fonctionnalités et optimisations",
    ],
    image: "/projects/4mepro.png",
    stack: ["PHP", "PrestaShop"],
    url: "https://www.4mepro.com",
  },
  {
    id: "carton-tool",
    title: "Personnalisation de cartons",
    description:
      "Outil interne de personnalisation de cartons pour une machine de production, avec optimisation du processus de fabrication.",
    context: "Bewed",
    details: [
      "Conception et développement de l'outil, en lien direct avec la machine de production",
      "Prise en compte des besoins",
      "Tests en conditions réelles et mise en production",
    ],
    image: "/projects/carton-tool.png",
    stack: ["Vue.js", "Python"],
  },
  {
    id: "dashboard",
    title: "Suivi de production",
    description:
      "Outil interne de suivi de la production pour un entrepôt",
    context: "Bewed",
    details: [
      "Mise en place de l'outil, déploiements et connexion à des sources de données externes.",
    ],
    image: "/projects/dashboard.png",
    stack: ["Vue.js"],
  },
];
