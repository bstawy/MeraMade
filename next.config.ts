import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repoName = "/MeraMade";

const nextConfig: NextConfig = {
  basePath: isProd ? repoName : "",
  assetPrefix: isProd ? `${repoName}/` : "",

  allowedDevOrigins: ["192.168.1.8"],

  output: "export",
  images: {
    unoptimized: true,
  },

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
    // 1. Find the rule that currently handles SVGs
    const fileLoaderRule = config.module.rules.find((rule: any) =>
      rule?.test?.test?.(".svg"),
    );

    if (fileLoaderRule) {
      config.module.rules.push(
        // Handle *.svg?url
        {
          ...fileLoaderRule,
          test: /\.svg$/i,
          resourceQuery: /url/, // *.svg?url
        },
        // Handle everything else as React components
        {
          test: /\.svg$/i,
          issuer: fileLoaderRule.issuer,
          resourceQuery: { not: [/url/] }, // exclude *.svg?url
          use: ["@svgr/webpack"],
        },
      );

      // 2. Tell the original rule to ignore SVGs
      fileLoaderRule.exclude = /\.svg$/i;
    }

    return config;
  },
};

export default nextConfig;
