import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  // Send "/" to the demo role's main screen (the role switcher sets rx-role).
  async redirects() {
    return [
      {
        source: "/",
        has: [{ type: "cookie", key: "rx-role", value: "researcher" }],
        destination: "/challenges",
        permanent: false,
      },
      { source: "/", destination: "/challenges/new", permanent: false },
    ];
  },
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
