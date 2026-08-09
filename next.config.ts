import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // The single /services page was replaced by the capability
      // architecture. Permanent so search engines transfer the old URL's
      // signals rather than treating /capabilities as unrelated.
      { source: "/services", destination: "/capabilities", permanent: true },
      { source: "/services/:path*", destination: "/capabilities", permanent: true },
      // Convenience aliases for terms people type or link directly.
      { source: "/sectors", destination: "/medtech", permanent: true },
      { source: "/case-studies", destination: "/work", permanent: true },
    ];
  },
};

export default nextConfig;
