"use client";

import { motion } from "framer-motion";
import { strengths } from "@/lib/data";

export function StrengthGrid() {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-20">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-signal">node pools</p>
          <h2 className="mt-2 text-3xl tracking-tight">Core strengths</h2>
        </div>
        <p className="hidden max-w-sm text-right text-sm text-mist md:block">
          Capacity is allocated where incidents actually happen: the edge, the cluster, the pipeline, the API.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {strengths.map((pool, i) => (
          <motion.article
            key={pool.id}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="panel-inset rounded-2xl bg-panel/70 p-5"
          >
            <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.16em] text-mist">
              <span>{pool.pool}</span>
              <span className="text-status">{pool.load}% util</span>
            </div>
            <h3 className="mt-3 text-xl">{pool.title}</h3>
            <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-void">
              <motion.div
                className="h-full bg-gradient-to-r from-status to-signal"
                initial={{ width: 0 }}
                whileInView={{ width: `${pool.load}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.1 }}
              />
            </div>
            <ul className="mt-4 flex flex-wrap gap-2">
              {pool.items.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-line bg-void/50 px-2 py-1 font-mono text-[11px] text-mist"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
