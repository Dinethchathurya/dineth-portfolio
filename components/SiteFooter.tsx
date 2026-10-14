import { profile } from "@/lib/data";
import { QuickTerminal } from "./QuickTerminal";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-void/90">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-mist">
            {profile.cluster} · {profile.handle}
          </p>
          <p className="mt-3 max-w-sm text-sm text-mist">
            Control-plane aesthetic, real production habits. Built with Next.js, Tailwind,
            Framer Motion, and Lucide.
          </p>
        </div>
        <QuickTerminal compact />
      </div>
    </footer>
  );
}
