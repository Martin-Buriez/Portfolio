"use client";

import { useState } from "react";
import Image from "next/image";
import type { Project } from "@/lib/projects";

const faceClass =
  "glass-bar absolute inset-0 flex h-full flex-col overflow-hidden rounded-2xl border border-slate-700 backface-hidden";

export function ProjectCard({
  project,
  index = 0,
}: {
  project: Project;
  index?: number;
}) {
  const [flipped, setFlipped] = useState(false);

  const front = (
    <>
      <div className="relative h-80 shrink-0 bg-slate-800">
        <Image
          src={project.image}
          alt={`Aperçu du projet ${project.title}`}
          fill
          sizes="(min-width: 768px) 720px, 100vw"
          className="object-cover"
          priority={index === 0}
        />
      </div>
      <div className="flex min-h-0 flex-col gap-2 overflow-y-auto p-4 text-white">
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
            onClick={(event) => event.stopPropagation()}
            className="self-start text-sm font-medium underline"
          >
            Voir le projet
          </a>
        ) : (
          <p className="text-sm text-slate-500">Projet interne</p>
        )}
      </div>
    </>
  );

  const back = (
    <div className="flex h-full flex-col justify-center gap-6 p-6 text-white">
      <div>
        <h2 className="text-xl font-medium">{project.title}</h2>
        {project.context && (
          <p className="mt-1 text-sm text-slate-400">{project.context}</p>
        )}
      </div>
      <ul className="flex flex-col gap-2 overflow-y-auto text-sm leading-relaxed text-slate-300">
        {project.details.map((detail) => (
          <li key={detail} className="flex gap-2">
            <span aria-hidden="true" className="text-slate-500">
              –
            </span>
            <span>{detail}</span>
          </li>
        ))}
      </ul>
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
          onClick={(event) => event.stopPropagation()}
          className="self-start text-sm font-medium underline"
        >
          Voir le projet
        </a>
      ) : (
        <p className="text-sm text-slate-500">Projet interne</p>
      )}
    </div>
  );

  return (
    <div
      className="animate-fade-in-up perspective-[1200px]"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div
        role="button"
        tabIndex={0}
        onClick={() => setFlipped((value) => !value)}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            setFlipped((value) => !value);
          }
        }}
        aria-label={`Voir le détail du projet ${project.title}`}
        aria-pressed={flipped}
        className={`relative h-[32rem] w-full cursor-pointer text-left transition-transform duration-500 transform-3d hover:-translate-y-1 ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        <div className={faceClass}>{front}</div>
        <div className={`${faceClass} rotate-y-180 bg-slate-900`}>{back}</div>
      </div>
    </div>
  );
}
