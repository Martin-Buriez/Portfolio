export type Project = {
  id: string;
  title: string;
  description: string;
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
    image: "/projects/ankama-launcher.png",
    stack: ["Vue.js", "Electron", "NestJS", "TypeScript", "PostgreSQL", "Redis"],
  },
  {
    id: "norauto-intranet",
    title: "Intranet client Norauto",
    description:
      "Outil interne qui permet aux conseillers du Call Center de gérer la relation client et le suivi des dossiers.",
    image: "/projects/norauto-intranet.png",
    stack: ["React", "Node.js", "PostgreSQL"],
  },
  {
    id: "embaleo",
    title: "Embaleo.com",
    description:
      "Boutique en ligne de cartons et solutions d'emballage pour particuliers et professionnels.",
    image: "/projects/embaleo.png",
    stack: ["PHP", "PrestaShop"],
    url: "https://www.embaleo.com",
  },
  {
    id: "4mepro",
    title: "4mePro.com",
    description: "Boutique en ligne de fournitures et équipements professionnels.",
    image: "/projects/4mepro.png",
    stack: ["PHP", "PrestaShop"],
    url: "https://www.4mepro.com",
  },
  {
    id: "carton-tool",
    title: "Personnalisation de cartons",
    description:
      "Outil interne de personnalisation de cartons pour une machine de production, avec optimisation du processus de fabrication.",
    image: "/projects/carton-tool.png",
    stack: ["Vue.js", "Python"],
  },
  {
    id: "dashboard",
    title: "Suivi de production",
    description:
      "Outil interne de suivi de la production pour un entrepôt",
    image: "/projects/dashboard.png",
    stack: ["Vue.js"],
  },
];
