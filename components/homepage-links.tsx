import Link from "next/link";
import { PROFILE } from "@/lib/profile";

const inlineLinkClass = "font-medium text-white underline underline-offset-2 hover:text-slate-200";

export function HomepageLinks() {
  return (
    <p className="max-w-xl text-slate-200">
      Vous trouverez ici mes{" "}
      <Link href="/projects" className={inlineLinkClass}>
        projets
      </Link>
      , et le{" "}
      <a
        href={PROFILE.repo}
        target="_blank"
        rel="noopener noreferrer"
        className={inlineLinkClass}
      >
        code de ce site
      </a>{" "}
      si la curiosité vous prend. Mon{" "}
      <Link href="/cv" className={inlineLinkClass}>
        CV
      </Link>{" "}
      retrace mon parcours, et vous pouvez me retrouver sur{" "}
      <a
        href={PROFILE.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className={inlineLinkClass}
      >
        LinkedIn
      </a>
      . Une question, une opportunité ?{" "}
      <a href={`mailto:${PROFILE.email}`} className={inlineLinkClass}>
        Contactez-moi
      </a>{" "}
      directement.
    </p>
  );
}
