import Image from "next/image";
import type { Project } from "@/lib/projects";

const cardClass =
  "glass-bar animate-fade-in-up overflow-hidden rounded-2xl border border-slate-700 transition-transform duration-200 hover:-translate-y-1";

export function ProjectCard({
  project,
  index = 0,
}: {
  project: Project;
  index?: number;
}) {
  return (
    <div
      className={cardClass}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="relative aspect-video bg-slate-800">
        <Image
          src={project.image}
          alt={`Aperçu du projet ${project.title}`}
          fill
          sizes="(min-width: 768px) 720px, 100vw"
          className="object-cover"
          priority={index === 0}
        />
      </div>
      <div className="flex flex-col gap-3 p-6 text-white">
        <h2 className="text-xl font-medium">{project.title}</h2>
        <p className="text-sm text-slate-400">{project.description}</p>
        <ul className="flex flex-wrap gap-2 text-xs text-slate-400">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-slate-700 bg-slate-700 px-3 py-1"
            >
              {tech}
            </li>
          ))}
        </ul>
        {project.url ? (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium underline"
          >
            Voir le projet
          </a>
        ) : (
          <p className="text-sm text-slate-500">Projet interne</p>
        )}
      </div>
    </div>
  );
}
