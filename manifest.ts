import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Hire Jah – Full-Stack Developer & AWS Cloud/DevOps Engineer | Building Scalable Software & Cloud Solutions",
    short_name: "Jah",
    description:
      "Building reliable software and cloud solutions, with expertise in full-stack development, cloud infrastructure, and DevOps practices.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    orientation: "portrait-primary",
    icons: [
      {
        src: "/icons/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/icons/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
      {
        src: "/favicon.ico",
        sizes: "48x48",
        type: "image/x-icon",
      },
    ],
    scope: "/",
    related_applications: [],
    prefer_related_applications: false,
    categories: [
      "software",
      "cloud-computing",
      "technology",
      "portfolio",
      "web-development",
      "devops",
    ],
    lang: "en-US",
  };
}
