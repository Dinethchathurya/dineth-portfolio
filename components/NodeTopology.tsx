"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";

const nodes = [
  { id: "az-a", x: 70, y: 70, label: "az-a", role: "ingress" },
  { id: "az-b", x: 250, y: 40, label: "az-b", role: "control" },
  { id: "az-c", x: 430, y: 70, label: "az-c", role: "egress" },
  { id: "gw", x: 250, y: 150, label: "gw-01", role: "gateway" },
  { id: "app-1", x: 90, y: 250, label: "app-1", role: "workload" },
  { id: "app-2", x: 250, y: 270, label: "app-2", role: "workload" },
  { id: "app-3", x: 410, y: 250, label: "app-3", role: "workload" },
  { id: "data", x: 250, y: 360, label: "pg-primary", role: "state" },
];

const links: [string, string][] = [
  ["az-a", "gw"],
  ["az-b", "gw"],
  ["az-c", "gw"],
  ["gw", "app-1"],
  ["gw", "app-2"],
  ["gw", "app-3"],
  ["app-1", "data"],
  ["app-2", "data"],
  ["app-3", "data"],
];

function nodeById(id: string) {
  return nodes.find((n) => n.id === id)!;
}

export function NodeTopology() {
  const [active, setActive] = useState<string>("gw");
  const paths = useMemo(
    () =>
      links.map(([from, to]) => {
        const a = nodeById(from);
        const b = nodeById(to);
        const midY = (a.y + b.y) / 2;
        return {
          key: `${from}-${to}`,
          from,
          to,
          d: `M ${a.x} ${a.y} C ${a.x} ${midY}, ${b.x} ${midY}, ${b.x} ${b.y}`,
        };
      }),
    [],
  );

  return (
    <div className="panel-inset relative overflow-hidden rounded-2xl bg-panel/80 p-4">
      <div className="mb-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-mist">
        <span>cluster topology · {active}</span>
        <span className="text-status">3 AZ healthy</span>
      </div>
      <svg viewBox="0 0 500 420" className="h-auto w-full" role="img" aria-label="Interactive node topology">
        {paths.map((path, i) => (
          <g key={path.key}>
            <path d={path.d} fill="none" stroke="#1e3a4f" strokeWidth="1.5" />
            <motion.circle r="3.5" fill="#06B6D4">
              <animateMotion dur={`${2.8 + (i % 3) * 0.7}s`} repeatCount="indefinite" path={path.d} />
            </motion.circle>
          </g>
        ))}
        {nodes.map((node) => {
          const selected = active === node.id;
          return (
            <g
              key={node.id}
              className="cursor-pointer"
              onMouseEnter={() => setActive(node.id)}
              onClick={() => setActive(node.id)}
            >
              <motion.rect
                x={node.x - 46}
                y={node.y - 22}
                width="92"
                height="44"
                rx="8"
                fill={selected ? "#1a2540" : "#131B2E"}
                stroke={selected ? "#10B981" : "#06B6D4"}
                strokeOpacity={selected ? 1 : 0.45}
                strokeWidth={selected ? 1.8 : 1}
                animate={{
                  filter: selected
                    ? "drop-shadow(0 0 10px rgba(16,185,129,0.55))"
                    : "drop-shadow(0 0 0px rgba(16,185,129,0))",
                }}
              />
              <circle
                cx={node.x - 32}
                cy={node.y}
                r="4"
                fill={node.role === "control" ? "#06B6D4" : "#10B981"}
                className="led"
              />
              <text
                x={node.x - 22}
                y={node.y - 2}
                fill="#e8eef9"
                fontSize="10"
                fontFamily="IBM Plex Mono, ui-monospace, monospace"
              >
                {node.label}
              </text>
              <text
                x={node.x - 22}
                y={node.y + 12}
                fill="#9bb0c9"
                fontSize="8"
                fontFamily="IBM Plex Mono, ui-monospace, monospace"
              >
                {node.role}
              </text>
            </g>
          );
        })}
      </svg>
      <div className="mt-2 grid grid-cols-3 gap-2 font-mono text-[10px] text-mist">
        <div className="rounded-md border border-line bg-void/40 px-2 py-1">rack u14-u18</div>
        <div className="rounded-md border border-line bg-void/40 px-2 py-1">latency 12ms</div>
        <div className="rounded-md border border-line bg-void/40 px-2 py-1">packets live</div>
      </div>
    </div>
  );
}
