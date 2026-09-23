"use client";

import { useState, type KeyboardEvent } from "react";
import { ProjectCard } from "@/components/project-card";
import type { Project } from "@/lib/projects";

const navButtonClass =
  "glass-bar rounded-full border border-slate-700 p-2.5 text-white transition hover:bg-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60";

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
          <ChevronIcon className="rotate-180" />
        </button>
        <div className="flex items-center gap-2">
          {projects.map((project, i) => (
            <button
              key={project.id}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Aller au projet ${project.title}`}
              aria-current={i === index}
              className={`h-2 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 ${
                i === index ? "w-6 bg-white" : "w-2 bg-slate-600 hover:bg-slate-500"
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
          <ChevronIcon />
        </button>
      </div>
    </div>
  );
}

function ChevronIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={`h-4 w-4 ${className}`} aria-hidden="true">
      <polyline
        points="9 6, 15 12, 9 18"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
