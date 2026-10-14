"use client";

import { Download, GraduationCap, Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/BrandIcons";
import { profile } from "@/lib/data";

export function ContactPanel() {
  return (
    <section id="channel" className="mx-auto max-w-6xl px-5 pb-16">
      <div className="mb-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-signal">incident channel</p>
        <h2 className="mt-2 text-3xl tracking-tight">Contact & resume</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="panel-inset rounded-2xl bg-panel/80 p-6">
          <p className="text-sm leading-7 text-mist">
            Available for platform, DevOps, and integration work. If a cluster is noisy, a
            pipeline is brittle, or an API needs to grow up — send a page.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={profile.resumeHref}
              download
              className="inline-flex items-center gap-2 rounded-md bg-status px-4 py-2.5 font-mono text-xs uppercase tracking-wider text-void hover:bg-emerald-400"
            >
              <Download className="h-4 w-4" />
              Download CV
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-md border border-line px-4 py-2.5 font-mono text-xs uppercase tracking-wider text-mist hover:border-signal hover:text-signal"
            >
              <Mail className="h-4 w-4" />
              Email
            </a>
          </div>
        </div>
        <div className="panel-inset space-y-3 rounded-2xl bg-panel/80 p-6 font-mono text-sm">
          <a href={`mailto:${profile.email}`} className="flex items-center gap-3 text-mist hover:text-signal">
            <Mail className="h-4 w-4 text-status" />
            {profile.email}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 text-mist hover:text-signal"
          >
            <LinkedInIcon className="h-4 w-4 text-status" />
            linkedin.com/in/dineth-chathurya
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 text-mist hover:text-signal"
          >
            <GitHubIcon className="h-4 w-4 text-status" />
            github.com/Dinethchathurya
          </a>
          <p className="flex items-start gap-3 text-mist">
            <GraduationCap className="mt-0.5 h-4 w-4 text-status" />
            <span>
              MCT @ UCSC (in progress)
              <br />
              BSc (Hons) CS, Plymouth — Second Class Upper
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
