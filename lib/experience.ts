export type Experience = {
  company: string;
  role: string;
  contract: string;
  period: string;
  highlights: string[];
};

export const experiences: Experience[] = [
  {
    company: "Ankama",
    role: "Développeur Fullstack",
    contract: "CDI",
    period: "Déc. 2025 — Aujourd'hui",
    highlights: [
      "Modélisation, architecture et mise en place de la première API NodeJS de l'entreprise (NestJS, TypeScript, PostgreSQL).",
      "Développement de librairies internes : logs, gestion d'erreurs, outils de qualité de code.",
      "Optimisations de performance : cache Redis, cache HTTP.",
      "Tests E2E et tests de charge (Jest, K6), monitoring Grafana et logs OpenSearch.",
      "Optimisation des pipelines GitLab CI et des images Docker.",
    ],
  },
  {
    company: "Norauto International",
    role: "Développeur Fullstack",
    contract: "Alternance",
    period: "Oct. 2023 — Oct. 2025",
    highlights: [
      "Conception d'un socle technique unifié basé sur NestJS pour les nouvelles applications.",
      "Structuration d'un monorepo NX pour centraliser les middlewares et sécuriser les dépendances.",
      "Batchs de nettoyage de données et outils d'amélioration de la qualité des données (Node.js / PostgreSQL).",
      "Optimisation des performances backend : réduction de la latence et de la consommation mémoire.",
    ],
  },
  {
    company: "Norauto International",
    role: "Développeur Fullstack",
    contract: "Alternance",
    period: "Oct. 2022 — Oct. 2023",
    highlights: [
      "Développement dans un contexte de migration de base de données.",
      "Création de librairies internes : erreurs, permissions, logs, appels HTTP, qualité de code.",
      "Réécriture de 5 API vers le nouveau socle technique (NodeJS / PostgreSQL).",
      "Mise en place de la chaîne CI/CD : GitLab, Docker, Kubernetes, déploiement sur Azure.",
    ],
  },
  {
    company: "Bewed",
    role: "Développeur informatique",
    contract: "Alternance",
    period: "Oct. 2020 — Oct. 2022",
    highlights: [
      "Maintenance et évolution de sites e-commerce : nouvelles fonctionnalités, performance (PHP).",
      "Robot de tests automatisés et outil de monitoring des statuts de sites (Python).",
      "Outil de personnalisation de cartons pour une machine de production (Vue.js / Python).",
    ],
  },
];
