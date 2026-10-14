import { ContactPanel } from "@/components/ContactPanel";
import { GridBackdrop } from "@/components/GridBackdrop";
import { Hero } from "@/components/Hero";
import { ProjectGrid } from "@/components/ProjectGrid";
import { ResearchBand } from "@/components/ResearchBand";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteNav } from "@/components/SiteNav";
import { StrengthGrid } from "@/components/StrengthGrid";
import { WorkTimeline } from "@/components/WorkTimeline";

export default function Home() {
  return (
    <div id="top" className="relative flex min-h-full flex-1 flex-col">
      <GridBackdrop />
      <SiteNav />
      <main className="flex-1">
        <Hero />
        <StrengthGrid />
        <ProjectGrid />
        <WorkTimeline />
        <ResearchBand />
        <ContactPanel />
      </main>
      <SiteFooter />
    </div>
  );
}
