"use client";

import { GitCommitHorizontal } from "lucide-react";
import { motion } from "framer-motion";
import { timeline } from "@/lib/data";

const statusColor = {
  passing: "bg-status text-status",
  running: "bg-amber text-amber",
} as const;

export function WorkTimeline() {
  return (
    <section id="pipeline" className="mx-auto max-w-6xl px-5 pb-20">
      <div className="mb-10">
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-signal">git log --oneline</p>
        <h2 className="mt-2 text-3xl tracking-tight">Work timeline</h2>
      </div>
      <ol className="relative ml-3 space-y-0 border-l border-line pl-8">
        {timeline.map((item, i) => (
          <motion.li
            key={item.sha}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="relative pb-10"
          >
            <span className="absolute -left-[41px] grid h-7 w-7 place-items-center rounded-full border border-line bg-panel">
              <GitCommitHorizontal className="h-3.5 w-3.5 text-signal" />
            </span>
            <div className="panel-inset rounded-2xl bg-panel/70 p-5">
              <div className="flex flex-wrap items-center gap-2 font-mono text-[11px]">
                <span className="text-signal">{item.sha}</span>
                <span className="rounded-sm bg-void px-1.5 py-0.5 text-mist">{item.branch}</span>
                <span className={`h-1.5 w-1.5 rounded-full ${statusColor[item.status].split(" ")[0]}`} />
                <span className="uppercase tracking-wider text-mist">{item.status}</span>
                <span className="ml-auto text-mist">{item.when}</span>
              </div>
              <h3 className="mt-3 text-lg">{item.role}</h3>
              <p className="font-mono text-xs text-signal">{item.org}</p>
              <p className="mt-2 text-sm leading-6 text-mist">{item.detail}</p>
            </div>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
