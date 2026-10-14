"use client";

import { motion } from "framer-motion";
import { Activity } from "lucide-react";

export function StatusBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      className="inline-flex items-center gap-2 rounded-full border border-status/30 bg-status/10 px-3 py-1.5 font-mono text-[11px] tracking-wide text-status"
    >
      <span className="relative flex h-2 w-2">
        <span className="led absolute inline-flex h-full w-full animate-ping rounded-full bg-status opacity-60" />
        <span className="led relative inline-flex h-2 w-2 rounded-full bg-status" />
      </span>
      <Activity className="h-3.5 w-3.5" />
      <span>System Status: 99.9% Uptime</span>
      <span className="text-mist">|</span>
      <motion.span
        animate={{ opacity: [1, 0.45, 1] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      >
        Ready for Deployment
      </motion.span>
    </motion.div>
  );
}
