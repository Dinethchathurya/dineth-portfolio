"use client";

import { ArrowUpRight, Boxes, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "@/lib/data";

export function ProjectGrid() {
  return (
    <section id="workloads" className="mx-auto max-w-6xl px-5 pb-20">
      <div className="mb-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-signal">workloads</p>
        <h2 className="mt-2 text-3xl tracking-tight">Projects with production metrics</h2>
      </div>
      <div className="grid gap-5 lg:grid-cols-3">
        {projects.map((project, i) => (
          <motion.article
            key={project.slug}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="panel-inset flex flex-col rounded-2xl bg-panel/80 p-5"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-mist">{project.slug}</p>
                <h3 className="mt-1 text-xl">{project.name}</h3>
              </div>
              {project.url ? (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 rounded-md border border-status/40 px-2 py-1 font-mono text-[10px] uppercase text-status"
                >
                  live
                  <ArrowUpRight className="h-3 w-3" />
                </a>
              ) : (
                <span className="inline-flex items-center gap-1 rounded-md border border-line px-2 py-1 font-mono text-[10px] uppercase text-mist">
                  private
                </span>
              )}
            </div>
            <p className="mt-3 text-sm leading-6 text-mist">{project.summary}</p>
            <dl className="mt-5 grid grid-cols-3 gap-2">
              {project.metrics.map((metric) => (
                <div key={metric.label} className="rounded-lg border border-line bg-void/50 px-2 py-2 text-center">
                  <dt className="font-mono text-[9px] uppercase tracking-wider text-mist">{metric.label}</dt>
                  <dd className="mt-1 font-mono text-sm text-signal">{metric.value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-5 space-y-2">
              <p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-mist">
                <Boxes className="h-3.5 w-3.5 text-signal" />
                architecture
              </p>
              {project.architecture.map((layer) => (
                <div
                  key={layer.layer}
                  className="flex items-start justify-between gap-3 border-l-2 border-signal/40 pl-3"
                >
                  <span className="font-mono text-[11px] text-status">{layer.layer}</span>
                  <span className="text-right text-xs text-mist">{layer.detail}</span>
                </div>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.containers.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-cyan-400/20 bg-signal/10 px-2 py-0.5 font-mono text-[10px] text-signal"
                >
                  {badge}
                </span>
              ))}
            </div>
            <p className="mt-auto pt-5 flex items-center gap-2 font-mono text-[10px] text-mist">
              <ShieldCheck className="h-3.5 w-3.5 text-status" />
              replicas {project.replicas} · sla {project.sla}
            </p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
