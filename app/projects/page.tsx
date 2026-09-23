import type { Metadata } from "next";
import { ProjectCarousel } from "@/components/project-carousel";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projets",
};

export default function Projects() {
  return (
    <section className="mx-auto flex w-full max-w-3xl flex-1 flex-col justify-center gap-10 px-6 py-16 text-white">
      <h1 className="text-3xl font-semibold tracking-tight">Projets</h1>
      <ProjectCarousel projects={projects} />
    </section>
  );
}
