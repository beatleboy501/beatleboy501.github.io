import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
    const base = "https://andrewallison.llc";

    return [
        "",
        "/about",
        "/services",
        // "/portfolio",
        "/contact",
    ].map((path) => ({
        url: `${base}${path}`,
    }));
}