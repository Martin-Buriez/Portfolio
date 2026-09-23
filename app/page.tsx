import { HomepageLinks } from "@/components/homepage-links";
import { PROFILE } from "@/lib/profile";

export default function Home() {
  return (
    <section className="flex flex-1 items-center py-16 sm:py-20">
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
          <HomepageLinks />
        </div>
      </div>
    </section>
  );
}
