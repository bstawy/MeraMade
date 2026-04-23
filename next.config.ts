import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.1.8"],

  // 1. Top-level key for Next.js 15+ (Development)
  turbopack: {
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
  },

  // 2. Webpack configuration (Production)
  webpack(config) {
    // We cast to 'any' to avoid deep Webpack type conflicts in Next.js
    const rules = config.module.rules;

    const fileLoaderRule = rules.find((rule) => rule.test?.test?.(".svg"));

    if (fileLoaderRule) {
      config.module.rules.push(
        // Handle *.svg?url
        {
          ...fileLoaderRule,
          test: /\.svg$/i,
          resourceQuery: /url/,
        },
        // Handle standard *.svg as React Component
        {
          test: /\.svg$/i,
          issuer: fileLoaderRule.issuer,
          resourceQuery: { not: [/url/] },
          use: ["@svgr/webpack"],
        },
      );

      // Tell original rule to ignore SVGs
      fileLoaderRule.exclude = /\.svg$/i;
    }

    return config;
  },
};

export default nextConfig;
