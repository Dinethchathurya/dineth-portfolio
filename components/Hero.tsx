"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Server } from "lucide-react";
import { profile } from "@/lib/data";
import { NodeTopology } from "./NodeTopology";
import { QuickTerminal } from "./QuickTerminal";
import { StatusBadge } from "./StatusBadge";

export function Hero() {
  return (
    <section id="topology" className="mx-auto grid max-w-6xl gap-10 px-5 pb-20 pt-14 lg:grid-cols-[1.05fr_0.95fr]">
      <div>
        <StatusBadge />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-6 font-mono text-[11px] uppercase tracking-[0.28em] text-signal"
        >
          infrastructure & systems engineering
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08 }}
          className="mt-3 max-w-xl text-4xl leading-[1.05] tracking-tight sm:text-6xl"
        >
          {profile.name}
        </motion.h1>
        <p className="mt-4 max-w-lg text-lg text-mist">{profile.title}</p>
        <p className="mt-4 max-w-lg text-sm leading-7 text-mist/90">
          I keep platforms boring in production: Linux edges, container fabrics, IaC, and CI
          that actually ships. Observability over ornament. Pipelines over slide decks.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#channel"
            className="inline-flex items-center gap-2 rounded-md bg-signal px-4 py-2.5 font-mono text-xs uppercase tracking-wider text-void hover:bg-cyan-300"
          >
            Open a channel
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <a
            href="#workloads"
            className="inline-flex items-center gap-2 rounded-md border border-line px-4 py-2.5 font-mono text-xs uppercase tracking-wider text-mist hover:border-signal hover:text-signal"
          >
            <Server className="h-4 w-4" />
            Inspect workloads
          </a>
        </div>
        <div className="mt-10">
          <QuickTerminal />
        </div>
      </div>
      <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.12 }}>
        <NodeTopology />
      </motion.div>
    </section>
  );
}
