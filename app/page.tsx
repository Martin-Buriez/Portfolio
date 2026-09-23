import Link from "next/link";
import { PROFILE } from "@/lib/profile";

const linkClass = "text-slate-200 transition hover:text-white";

export default function Home() {
  return (
    <section className="flex flex-1 items-center">
      <div className="mx-auto w-full max-w-3xl px-6">
        <div className="glass glass-card flex flex-col gap-6">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight">
              {PROFILE.name}
            </h1>
            <p className="mt-1 text-lg text-slate-200">
              {PROFILE.title} · {PROFILE.location.split(",")[0]}
            </p>
          </div>
          <p className="max-w-xl text-slate-200">{PROFILE.summary}</p>
          <div className="flex flex-wrap items-center gap-2 text-sm font-medium">
            <Link href="/projects" className={linkClass}>
              Voir mes projets
            </Link>
            <span aria-hidden className="text-slate-600">
              ·
            </span>
            <Link href="/cv" className={linkClass}>
              Voir mon CV
            </Link>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap gap-3 text-sm font-medium">
          <a
            href={`mailto:${PROFILE.email}`}
            className="rounded-md bg-white px-5 py-2.5 text-slate-900 transition hover:bg-slate-100"
          >
            Me contacter
          </a>
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-slate-600 px-5 py-2.5 text-white transition hover:bg-slate-800"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
