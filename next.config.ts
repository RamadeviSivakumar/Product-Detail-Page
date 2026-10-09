import type { NextConfig } from "next";
import withPWA from "@ducanh2912/next-pwa";

const nextConfig: NextConfig = {
   images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
      },
      {
        protocol: "https",
        hostname: "cdn.shopify.com",
      },
      {
        protocol: "https",
        hostname: "images.price.tools",
      },
       {
        protocol: "https",
        hostname: "m.media-amazon.com",
      },
    ],
  },
};

export default withPWA({
  dest: "public",

  disable: false,

  runtimeCaching: [
    {
      urlPattern: /^https:\/\/.*$/,
      handler: "NetworkFirst",
      options: {
        cacheName: "external-cache",
      },
    },
    {
      urlPattern: /^\/.*$/,
      handler: "NetworkFirst",
      options: {
        cacheName: "pages-cache",
      },
    },
  ],
})(nextConfig);