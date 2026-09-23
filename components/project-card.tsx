"use client";

import { useState } from "react";
import Image from "next/image";
import type { Project } from "@/lib/projects";

const tagClass =
  "rounded-full border border-slate-700 bg-slate-700 px-3 py-1";

export function ProjectCard({
  project,
  index = 0,
}: {
  project: Project;
  index?: number;
}) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div
      className="glass-bar animate-fade-in-up flex flex-col overflow-hidden rounded-2xl border border-slate-700 transition-transform duration-200 hover:-translate-y-1"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="relative h-48 shrink-0 bg-slate-800 sm:h-64 md:h-72">
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

        {showDetails && (
          <div className="animate-fade-in-up flex flex-col gap-3">
            {project.context && (
              <p className="text-sm text-slate-400">Créé pour : {project.context}</p>
            )}
            <ul className="flex flex-col gap-2 text-sm leading-relaxed text-slate-300">
              {project.details.map((detail) => (
                <li key={detail} className="flex gap-2">
                  <span aria-hidden="true" className="text-slate-500">
                    –
                  </span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <ul className="flex flex-wrap gap-2 text-xs text-slate-400">
          {project.stack.map((tech) => (
            <li key={tech} className={tagClass}>
              {tech}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4 text-sm font-medium">
          <button
            type="button"
            onClick={() => setShowDetails((value) => !value)}
            aria-label={showDetails ? "Voir moins" : "Voir le détail"}
            aria-expanded={showDetails}
            className="cursor-pointer rounded-full border border-slate-700 p-1.5 transition hover:bg-slate-800"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
              className={`h-4 w-4 transition-transform duration-300 ${
                showDetails ? "rotate-180" : ""
              }`}
            >
              <polyline
                points="6 9, 12 15, 18 9"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          {project.url ? (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Voir le projet
            </a>
          ) : (
            <span className="text-slate-500">Projet interne</span>
          )}
        </div>
      </div>
    </div>
  );
}
