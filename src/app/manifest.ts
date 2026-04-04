import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Symm Studios",
    short_name: "Symm",
    description:
      "Boutique creative studio building brand identities, websites, and digital products. St. Petersburg, FL.",
    start_url: "/",
    display: "standalone",
    background_color: "#0f0e0d",
    theme_color: "#e8541a",
    icons: [
      { src: "/favicon.ico", sizes: "any", type: "image/x-icon" },
    ],
  };
}
