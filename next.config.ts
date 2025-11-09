import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    domains: ["images.unsplash.com"],
  },
  trailingSlash: true,
  basePath: "", // Vide pour https://vtc-app.github.io/ (repository: vtc-app.github.io)
};

export default nextConfig;
