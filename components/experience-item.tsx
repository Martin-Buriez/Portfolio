import type { Experience } from "@/lib/experience";

export function ExperienceItem({ experience }: { experience: Experience }) {
  return (
    <li className="border-b border-slate-700 pb-8 last:border-b-0 last:pb-0">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4">
        <h3 className="font-semibold text-white">
          {experience.company}
          <span className="font-normal text-slate-400">
            {" "}
            — {experience.role} ({experience.contract})
          </span>
        </h3>
        <span className="whitespace-nowrap text-sm tabular-nums text-slate-400">
          {experience.period}
        </span>
      </div>
      <ul className="mt-3 flex flex-col gap-1.5 text-sm leading-relaxed text-slate-400">
        {experience.highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>
    </li>
  );
}
