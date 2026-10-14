"use client";

import { FormEvent, useMemo, useRef, useState } from "react";
import { profile, projects, strengths } from "@/lib/data";

type Line = { kind: "in" | "out"; text: string };

const catalog: Record<string, string[]> = {
  help: [
    "available commands:",
    "  help       list commands",
    "  whoami     identity",
    "  skills     core strength pools",
    "  projects   production workloads",
    "  contact    open channels",
    "  uptime     cluster health",
    "  clear      wipe buffer",
  ],
  whoami: [
    `${profile.name}`,
    profile.title,
    `cluster=${profile.cluster}  user=${profile.handle}`,
  ],
  skills: strengths.flatMap((s) => [`[${s.pool}] ${s.title}`, `  ${s.items.join(" · ")}`]),
  projects: projects.map(
    (p) => `${p.name}  sla=${p.sla}  replicas=${p.replicas}${p.url ? `  ${p.url}` : ""}`,
  ),
  contact: [
    `mail    ${profile.email}`,
    `linkedin ${profile.linkedin}`,
    `github   ${profile.github}`,
    `resume   ${profile.resumeHref}`,
  ],
  uptime: [
    "control-plane  99.9%  ready for deployment",
    "node health    8/8 passing",
    "last incident  none in window",
  ],
};

export function QuickTerminal({ compact = false }: { compact?: boolean }) {
  const [history, setHistory] = useState<Line[]>([
    { kind: "out", text: "dc jump-box v1.4 — type `help` to inspect the control plane" },
  ]);
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const shown = useMemo(
    () => (compact ? history.slice(-6) : history.slice(-14)),
    [compact, history],
  );

  function run(raw: string) {
    const cmd = raw.trim().toLowerCase();
    const next: Line[] = [...history, { kind: "in", text: `$ ${raw}` }];
    if (!cmd) {
      setHistory(next);
      return;
    }
    if (cmd === "clear") {
      setHistory([]);
      return;
    }
    const out = catalog[cmd];
    if (out) {
      setHistory([...next, ...out.map((text) => ({ kind: "out" as const, text }))]);
      return;
    }
    setHistory([
      ...next,
      { kind: "out", text: `command not found: ${cmd}. try \`help\`.` },
    ]);
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    run(value);
    setValue("");
  }

  return (
    <div
      className="panel-inset overflow-hidden rounded-2xl bg-[#070b12]"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="flex items-center gap-2 border-b border-line bg-panel px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-status" />
        <p className="ml-2 font-mono text-[10px] uppercase tracking-[0.18em] text-mist">
          ssh {profile.handle}
        </p>
      </div>
      <div className={`space-y-1 overflow-auto px-3 py-3 font-mono text-xs leading-5 ${compact ? "h-36" : "h-52"}`}>
        {shown.map((line, i) => (
          <p key={`${line.text}-${i}`} className={line.kind === "in" ? "text-signal" : "text-mist"}>
            {line.text}
          </p>
        ))}
        <form onSubmit={onSubmit} className="flex items-center gap-2 text-foreground">
          <span className="text-status">{profile.handle}:~$</span>
          <input
            ref={inputRef}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            aria-label="Terminal command"
            className="min-w-0 flex-1 bg-transparent outline-none"
            autoComplete="off"
            spellCheck={false}
          />
        </form>
      </div>
    </div>
  );
}
