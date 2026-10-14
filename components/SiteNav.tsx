import { Download } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/BrandIcons";
import { profile } from "@/lib/data";

const links = [
  { href: "#topology", label: "topology" },
  { href: "#workloads", label: "workloads" },
  { href: "#pipeline", label: "pipeline" },
  { href: "#channel", label: "channel" },
];

export function SiteNav() {
  return (
    <header className="sticky top-0 z-30 border-b border-line/80 bg-void/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <a href="#top" className="flex items-center gap-3">
          <span className="grid h-8 w-8 place-items-center rounded-md border border-signal/40 bg-panel font-mono text-[11px] text-signal">
            DC
          </span>
          <span className="hidden font-mono text-xs tracking-[0.22em] text-mist sm:block">
            {profile.cluster}
          </span>
        </a>
        <nav className="hidden items-center gap-6 font-mono text-[11px] uppercase tracking-[0.16em] text-mist md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-signal">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-md p-2 text-mist hover:text-foreground"
            aria-label="GitHub"
          >
            <GitHubIcon className="h-4 w-4" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-md p-2 text-mist hover:text-foreground"
            aria-label="LinkedIn"
          >
            <LinkedInIcon className="h-4 w-4" />
          </a>
          <a
            href={profile.resumeHref}
            download
            className="inline-flex items-center gap-2 rounded-md border border-status/40 bg-status/10 px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-status hover:bg-status/20"
          >
            <Download className="h-3.5 w-3.5" />
            CV
          </a>
        </div>
      </div>
    </header>
  );
}
