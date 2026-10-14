"use client";

import { FileText } from "lucide-react";
import { motion } from "framer-motion";

export function ResearchBand() {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-20">
      <motion.article
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="panel-inset relative overflow-hidden rounded-2xl bg-gradient-to-br from-panel to-void p-6 md:p-8"
      >
        <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-signal/10 blur-3xl" />
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-signal">research artifact</p>
        <div className="mt-4 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-2xl leading-snug md:text-3xl">
              Blockchain-Based E-Voting System on ICP
            </h2>
            <p className="mt-3 text-sm leading-6 text-mist">
              Lead author. Presented at NSRSIT &apos;25. An Internet Computer Protocol design for
              verifiable ballots — consensus treated as infrastructure, not a buzzword.
            </p>
          </div>
          <div className="flex items-center gap-3 font-mono text-xs text-mist">
            <FileText className="h-4 w-4 text-status" />
            <span>NSRSIT &apos;25</span>
            <span className="rounded-md border border-line px-2 py-1 text-status">lead author</span>
          </div>
        </div>
      </motion.article>
    </section>
  );
}
