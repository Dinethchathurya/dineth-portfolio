import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Static marketing site: skip Cache Components to keep Framer Motion hydration clean. */
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
