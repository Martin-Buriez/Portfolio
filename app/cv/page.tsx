import type { Metadata } from "next";
import { ExperienceItem } from "@/components/experience-item";
import { experiences } from "@/lib/experience";
import { skillGroups } from "@/lib/skills";
import { PROFILE } from "@/lib/profile";

export const metadata: Metadata = {
  title: "CV",
};

export default function Cv() {
  return (
    <div className="mx-auto max-w-3xl flex-1 px-6 py-16 sm:py-20">
      <div className="glass glass-card">
        <header className="flex flex-col gap-6 border-b border-slate-700 pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight">
              {PROFILE.name}
            </h1>
            <p className="mt-1 text-slate-400">
              {PROFILE.title} · {PROFILE.location}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-slate-500">
            <a
              href={`mailto:${PROFILE.email}`}
              className="transition hover:text-white"
            >
              {PROFILE.email}
            </a>
            <span aria-hidden className="text-slate-700">
              ·
            </span>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              LinkedIn
            </a>
          </div>
        </header>

        <p className="mt-6 text-sm leading-relaxed text-slate-400">
          {PROFILE.summary}
        </p>

        <section className="mt-10 flex flex-col gap-6">
          <h2 className="section-label">Expériences</h2>
          <ul className="flex flex-col gap-8">
            {experiences.map((experience) => (
              <ExperienceItem
                key={`${experience.company}-${experience.period}`}
                experience={experience}
              />
            ))}
          </ul>
        </section>

        <section className="mt-10 flex flex-col gap-3">
          <h2 className="section-label">Compétences</h2>
          <dl className="flex flex-col gap-1.5 text-sm">
            {skillGroups.map((group) => (
              <div key={group.category} className="flex gap-2">
                <dt className="w-24 shrink-0 text-slate-500">
                  {group.category}
                </dt>
                <dd className="text-slate-200">{group.items.join(", ")}</dd>
              </div>
            ))}
          </dl>
        </section>
      </div>
    </div>
  );
}
