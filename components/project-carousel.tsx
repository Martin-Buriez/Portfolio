"use client";

import { useState, type KeyboardEvent } from "react";
import { ProjectCard } from "@/components/project-card";
import type { Project } from "@/lib/projects";

const navButtonClass =
  "glass-bar rounded-full border border-slate-700 p-2.5 text-white transition hover:bg-slate-700";

export function ProjectCarousel({ projects }: { projects: Project[] }) {
  const [index, setIndex] = useState(0);

  function goTo(next: number) {
    setIndex((next + projects.length) % projects.length);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "ArrowLeft") goTo(index - 1);
    if (event.key === "ArrowRight") goTo(index + 1);
  }

  return (
    <div
      className="flex flex-col gap-6"
      role="region"
      aria-label="Carrousel des projets"
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <div className="overflow-hidden">
        <ul
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {projects.map((project, i) => (
            <li key={project.id} className="w-full shrink-0 px-1">
              <ProjectCard project={project} index={i} />
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center justify-center gap-6">
        <button
          type="button"
          onClick={() => goTo(index - 1)}
          aria-label="Projet précédent"
          className={navButtonClass}
        >
          ←
        </button>
        <div className="flex gap-2">
          {projects.map((project, i) => (
            <button
              key={project.id}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Aller au projet ${project.title}`}
              aria-current={i === index}
              className={`h-2 w-2 rounded-full transition ${
                i === index ? "bg-white" : "bg-slate-600"
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => goTo(index + 1)}
          aria-label="Projet suivant"
          className={navButtonClass}
        >
          →
        </button>
      </div>
    </div>
  );
}
