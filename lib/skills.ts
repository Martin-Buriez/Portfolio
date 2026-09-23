type SkillGroup = {
  category: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Front-end",
    items: ["TypeScript", "React", "VueJS", "NextJS", "Tailwind", "HTML/CSS"],
  },
  {
    category: "Back-end",
    items: ["NodeJS", "NestJS", "API REST / GraphQL", "Prisma", "Python", "Rust"],
  },
  {
    category: "Database",
    items: ["PostgreSQL", "Cassandra"],
  },
  {
    category: "Ops",
    items: [
      "Kubernetes",
      "Docker",
      "Monorepo NX",
      "Azure",
      "GitLab CI/CD",
      "Jest",
      "Cucumber",
    ],
  },
];
