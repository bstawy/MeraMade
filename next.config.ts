import type { NextConfig } from "next";
import { RuleSetRule } from "webpack";

const isProd = process.env.NODE_ENV === "production";
const repoName = "/MeraMade";

const nextConfig: NextConfig = {
  basePath: isProd ? repoName : "",
  assetPrefix: isProd ? `${repoName}/` : "",

  allowedDevOrigins: ["192.168.1.7"],

  output: "export",
  images: {
    unoptimized: true,
  },

  // 1. turbopack configuration (Development)
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
    const fileLoaderRule = config.module.rules.find(
      (rule: RuleSetRule) =>
        rule?.test instanceof RegExp && rule.test.test(".svg"),
    ) as RuleSetRule | undefined;

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
