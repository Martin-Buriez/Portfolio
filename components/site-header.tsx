import Link from "next/link";

const NAV_LINKS = [
  { href: "/projects", label: "Projets" },
  { href: "/cv", label: "CV" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 border-b border-slate-700 bg-background text-white">
      <nav className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-semibold">
          Martin Buriez
        </Link>
        <ul className="flex gap-6 text-sm">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link href={href}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
