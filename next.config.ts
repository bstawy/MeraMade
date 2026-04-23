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
    const rules = config.module.rules;

    const fileLoaderRule = rules.find((rule) => rule.test?.test?.(".svg"));

    if (fileLoaderRule) {
      config.module.rules.push(
        {
          ...fileLoaderRule,
          test: /\.svg$/i,
          resourceQuery: /url/,
        },
        {
          test: /\.svg$/i,
          issuer: fileLoaderRule.issuer,
          resourceQuery: { not: [/url/] },
          use: ["@svgr/webpack"],
        },
      );

      fileLoaderRule.exclude = /\.svg$/i;
    }

    return config;
  },
};

export default nextConfig;
