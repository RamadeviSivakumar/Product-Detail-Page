import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "PDP",
    short_name: "PDP",
    description: "Product Detail Page",
    start_url: "/login",
    display: "standalone",
    background_color: "#c7c4c4",
    theme_color: "#2563eb",
    icons: [
      {
        src: "/icons/pdp-icon.png",
        sizes: "192x192",
        type: "image/png",
      },
      
    ],
  };
}